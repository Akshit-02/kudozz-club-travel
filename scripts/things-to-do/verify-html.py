"""Verify the built HTML of every things-to-do article (run after `npm run build`)."""
import glob, html, json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITE = "https://club.kudozz.in"
problems, titles, descs = [], {}, {}
files = sorted(glob.glob(os.path.join(ROOT, ".next/server/app/blog/things-to-do-in-*.html")))
for f in files:
    slug = os.path.basename(f)[:-5]
    t = open(f).read()
    def need(cond, msg):
        if not cond: problems.append(f"{slug}: {msg}")
    can = re.search(r'<link rel="canonical" href="([^"]+)"', t)
    need(can and can.group(1) == f"{SITE}/blog/{slug}", f"canonical {can.group(1) if can else None}")
    need(not re.search(r'name="robots" content="[^"]*noindex', t), "noindex")
    title = re.search(r"<title>([^<]+)</title>", t); title = html.unescape(title.group(1)) if title else ""
    need(20 <= len(title) <= 70, f"title length {len(title)}: {title}")
    titles.setdefault(title, []).append(slug)
    d = re.search(r'<meta name="description" content="([^"]+)"', t); d = html.unescape(d.group(1)) if d else ""
    need(80 <= len(d) <= 190, f"description length {len(d)}")
    descs.setdefault(d, []).append(slug)
    need(len(re.findall(r"<h1[\s>]", t)) == 1, "h1 count")
    need('property="og:image"' in t, "og:image")
    types = set()
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', t, re.S):
        try:
            data = json.loads(block)
        except Exception as e:
            problems.append(f"{slug}: bad JSON-LD {e}"); continue
        for node in data.get("@graph", [data]):
            ty = node.get("@type"); types.update(ty if isinstance(ty, list) else [ty])
            ab = node.get("about")
            if isinstance(ab, dict): types.add(ab.get("@type"))
    for req in ("BlogPosting", "BreadcrumbList", "FAQPage", "ItemList", "TouristDestination"):
        need(req in types, f"schema missing {req}")
    for src in set(re.findall(r'(?:src|href)="(/images/[^"?]+)', t)):
        need(os.path.exists(os.path.join(ROOT, "public", src)), f"missing image {src}")
for k, v in titles.items():
    if len(v) > 1: problems.append(f"duplicate title {k}: {v}")
for k, v in descs.items():
    if len(v) > 1: problems.append(f"duplicate description: {v}")
guides = set(os.listdir(os.path.join(ROOT, "src/app/blog")))
content = [f[:-5] for f in os.listdir(os.path.join(ROOT, "src/content/things-to-do"))]
for s in content:
    if s in guides: problems.append(f"slug collides with a guide folder: {s}")
if len(content) != len(set(content)): problems.append("duplicate content slugs")
sm = open(os.path.join(ROOT, ".next/server/app/sitemap.xml.body")).read()
missing = [s for s in content if f"{SITE}/blog/{s}<" not in sm]
if missing: problems.append(f"not in sitemap: {missing}")
print(f"{len(files)} pages checked, {len(problems)} problems")
for p in problems: print(" -", p)
sys.exit(1 if problems else 0)
