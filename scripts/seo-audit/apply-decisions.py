"""Write the new meta descriptions from decisions/bNN.tsv into the pages.

  python3 scripts/seo-audit/apply-decisions.py [--dry-run]

Reads the current description of each URL from out/pages.json (the crawl),
then replaces that exact string in the page's source:

- static guides (src/app/blog/<slug>/page.tsx): every occurrence of the old
  description, i.e. the <meta name="description"> and the BlogPosting
  description, which always carry the same text. Open Graph / Twitter copy is
  written separately per guide and is left alone.
- JSON articles (src/content/*/<slug>.json): the "metaDescription" value, or,
  where the article has none (it falls back to "description"), a new
  "metaDescription" key inserted after "description".

Rows with an empty new_meta_description are skipped. Idempotent: a row whose
new text is already in place is reported as "already".
"""
import glob, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DRY = "--dry-run" in sys.argv

pages = {p["route"][6:]: p for p in json.load(open(os.path.join(HERE, "out/pages.json"))) if p["route"].startswith("/blog/")}
json_src = {os.path.basename(p)[:-5]: p for p in glob.glob(os.path.join(ROOT, "src/content/*/*.json"))}


def variants(s):
    """The ways a string can be spelled inside a TSX string literal."""
    out = [s, s.replace('"', '\\"'), json.dumps(s, ensure_ascii=True)[1:-1], json.dumps(s, ensure_ascii=False)[1:-1]]
    return list(dict.fromkeys(out))


def tsx_literal(s):
    return json.dumps(s, ensure_ascii=False)[1:-1]


stats = {"tsx": 0, "json": 0, "already": 0, "missing": []}
rows = []
for f in sorted(glob.glob(os.path.join(HERE, "decisions/b*.tsv"))):
    for line in open(f, encoding="utf-8"):
        cols = line.rstrip("\n").split("\t")
        if len(cols) >= 6 and cols[5].strip():
            rows.append((cols[0], cols[5].strip()))

for slug, new in rows:
    old = pages.get(slug, {}).get("description", "")
    if slug in json_src:
        path = json_src[slug]
        s = open(path, encoding="utf-8").read()
        new_lit = json.dumps(new, ensure_ascii=False)
        if f'"metaDescription": {new_lit}' in s:
            stats["already"] += 1
            continue
        m = re.search(r'"metaDescription": "(?:[^"\\]|\\.)*"', s)
        if m:
            s = s[: m.start()] + f'"metaDescription": {new_lit}' + s[m.end():]
        else:
            m = re.search(r'\n(\s*)"description": "(?:[^"\\]|\\.)*",?', s)
            if not m:
                stats["missing"].append(slug)
                continue
            line_end = m.group(0) if m.group(0).endswith(",") else m.group(0) + ","
            s = s[: m.start()] + line_end + f'\n{m.group(1)}"metaDescription": {new_lit},' + s[m.end():]
        json.loads(s)  # never write invalid JSON (raises rather than writing)
        if not DRY:
            open(path, "w", encoding="utf-8").write(s)
        stats["json"] += 1
        continue
    path = os.path.join(ROOT, f"src/app/blog/{slug}/page.tsx")
    if not os.path.exists(path):
        stats["missing"].append(slug)
        continue
    s = open(path, encoding="utf-8").read()
    if tsx_literal(new) in s and not any(v in s for v in variants(old) if v):
        stats["already"] += 1
        continue
    n = 0
    for v in variants(old):
        if v and v in s:
            n += s.count(v)
            s = s.replace(v, tsx_literal(new))
    if not n:
        stats["missing"].append(slug)
        continue
    if not DRY:
        open(path, "w", encoding="utf-8").write(s)
    stats["tsx"] += 1

print(f"rows {len(rows)}  tsx {stats['tsx']}  json {stats['json']}  already {stats['already']}  missing {len(stats['missing'])}")
if stats["missing"]:
    print("missing:", " ".join(stats["missing"]))
