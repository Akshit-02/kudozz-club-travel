"""Validate every Adventure Travel article and generate src/lib/adventure-index.json.

Checks (errors fail the build step; run before `npm run build`):
  - required fields; slug == filename; slug unique and not a guide folder or
    things-to-do slug; slug is in the approved URL map (url-map.json)
  - quick answer 40-80 words; 3-7 key takeaways; at least 4 FAQs; unique section ids;
    no empty sections; word floor per page type
  - seoTitle <= 70 chars and unique; metaDescription 120-165 chars and unique; H1 unique
  - every internal link resolves (guides, things-to-do, adventure, packages, hub);
    every image exists, has alt text and is credited in IMAGE_CREDITS.json
  - hero not reused by another adventure article
  - no banned AI-cliche phrases; em dashes limited; no "30+" style counts unless true
Usage: python3 scripts/adventure/build.py [--dev] [--cluster beach]
  --dev      links to planned-but-unwritten articles are warnings
  --cluster  "adventure" (default) or "beach": the Beach Travel cluster uses the
             same schema, template and rules (scripts/beach/build.py is a wrapper)
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CLUSTER = sys.argv[sys.argv.index("--cluster") + 1] if "--cluster" in sys.argv else "adventure"
HUBS = {"adventure": "/adventure-travel", "beach": "/beach-travel", "wildlife": "/wildlife-tourism", "spiritual": "/spiritual-tourism", "heritage": "/heritage-cultural-tourism", "hills": "/hill-station-travel"}
HERE = os.path.join(ROOT, "scripts", CLUSTER)
CONTENT = os.path.join(ROOT, "src/content", CLUSTER)
HUB = HUBS[CLUSTER]
# Slugs of the other JSON clusters: valid link targets, and must not collide.
other_slugs = set()
for other in HUBS:
    d = os.path.join(ROOT, "src/content", other)
    if other != CLUSTER and os.path.isdir(d):
        other_slugs |= {f[:-5] for f in os.listdir(d) if f.endswith(".json")}
BLOG = os.path.join(ROOT, "src/app/blog")
TTD = os.path.join(ROOT, "src/content/things-to-do")
DEV = "--dev" in sys.argv

guides = {d for d in os.listdir(BLOG) if os.path.exists(os.path.join(BLOG, d, "page.tsx"))}
ttd = {f[:-5] for f in os.listdir(TTD) if f.endswith(".json")}
credits = {"/images/" + c["path"] for c in json.load(open(os.path.join(ROOT, "public/images/blogs/IMAGE_CREDITS.json")))["images"]}
pkg_slugs = set()
for f in ("all-states-data.ts", "travel-styles-data.ts", "combo-packages.ts"):
    pkg_slugs |= set(re.findall(r'^\s{4}slug:\s*"([a-z0-9-]+)"', open(os.path.join(ROOT, "src/lib", f)).read(), re.M))
urlmap = json.load(open(os.path.join(HERE, "url-map.json")))
approved = {u["slug"]: u for u in urlmap if u["status"] == "create"}

BANNED = re.compile(r"embark|nestled|treasure trove|breathtaking beauty|picturesque paradise|"
                    r"whether you(?:'|’)re a|get ready to|a paradise for|hidden gem|unforgettable journey|"
                    r"look no further|in this article|dive into|adrenaline junkie|thrill-seekers? paradise|"
                    r"once-in-a-lifetime|bucket-list-worthy|ultimate guide", re.I)
FLOOR = {"pillar": 1300, "activity": 1000, "destination": 950, "weekend": 950, "planning": 900, "state": 750}
if CLUSTER in ("beach", "wildlife"):
    # Beach pillars are comparison/listing pages that hand off to the state
    # pages; usefulness over length (see docs/beach-travel-final-report.md).
    FLOOR = {"pillar": 800, "activity": 750, "planning": 750, "state": 750, "destination": 900}
if CLUSTER == "hills":
    # Hill-station pages hand off to the existing destination guides and things-to-do articles.
    FLOOR = {"pillar": 850, "activity": 750, "planning": 750, "state": 800, "destination": 750, "weekend": 750}
elif CLUSTER == "heritage":
    # Monument pages hand off to the existing city guides.
    FLOOR = {"pillar": 800, "activity": 750, "planning": 750, "state": 750, "destination": 750, "weekend": 750}
elif CLUSTER == "spiritual":
    # Temple and shrine pages hand off to existing destination guides.
    FLOOR = {"pillar": 800, "activity": 750, "planning": 750, "state": 750, "destination": 800, "weekend": 750}
REQ = ["slug", "kind", "title", "seoTitle", "metaDescription", "description", "dek", "primaryKeyword",
       "secondaryKeywords", "searchIntent", "activities", "terrain", "regions", "seasons", "travellers", "tags",
       "hero", "parent", "about", "intro", "quickAnswer", "takeaways", "sections", "safety", "faqs",
       "nextSteps", "related", "updated", "short"]

articles = []
if os.path.isdir(CONTENT):
    for f in sorted(os.listdir(CONTENT)):
        if f.endswith(".json"):
            articles.append((f, json.load(open(os.path.join(CONTENT, f)))))
slugs = {a["slug"] for _, a in articles}
errors, warnings, index = [], [], []


def words(s):
    return len(s.split())


def text_of(a):
    parts = a["intro"] + [a["quickAnswer"]] + a["takeaways"] + a["safety"] + a.get("packing", [])
    for s in a["sections"]:
        parts += s.get("paras", []) + s.get("list", []) + s.get("after", [])
        if s.get("table"):
            parts += [c for r in s["table"]["rows"] for c in r]
        for it in s.get("items", []):
            parts += [it["name"]] + it["body"] + list((it.get("facts") or {}).values())
    parts += [x for f in a["faqs"] for x in (f["q"], f["a"])] + [r["note"] for r in a["related"]]
    return " ".join(parts)


def check_href(h, where):
    path = h.split("#")[0].split("?")[0]
    if path.startswith("/blog/"):
        s = path.split("/")[2]
        if s in guides and "#" in h:
            anchor = h.split("#")[1]
            src = open(os.path.join(BLOG, s, "page.tsx")).read()
            if f'id="{anchor}"' not in src and f'id: "{anchor}"' not in src:
                errors.append(f"{where}: missing anchor {h}")
            return
        if s in guides or s in ttd or s in slugs or s in other_slugs:
            return
        if DEV and s in approved:
            warnings.append(f"{where}: link to planned article {h}")
        else:
            errors.append(f"{where}: broken link {h}")
    elif path.startswith("/packages/"):
        if path.split("/")[2] not in pkg_slugs:
            errors.append(f"{where}: broken package link {h}")
    elif path not in (*HUBS.values(), "/plan-your-trip", "/destinations", "/packages", "/blog"):
        errors.append(f"{where}: unexpected href {h}")


def check_img(img, where):
    if not img.get("alt") or len(img["alt"]) < 8:
        errors.append(f"{where}: missing/short alt text")
    p = os.path.join(ROOT, "public", img["src"].lstrip("/"))
    if not os.path.exists(p):
        errors.append(f"{where}: missing image {img['src']}")
    elif img["src"] not in credits:
        errors.append(f"{where}: image without credit record {img['src']}")


seen_titles, seen_meta, seen_h1, heroes = {}, {}, {}, {}
for f, a in articles:
    w = a.get("slug", f)
    for k in REQ:
        if k not in a or a[k] in ("", [], None):
            errors.append(f"{w}: missing {k}")
    if errors and errors[-1].startswith(f"{w}: missing"):
        continue
    if f != a["slug"] + ".json":
        errors.append(f"{w}: filename mismatch")
    if a["slug"] in guides or a["slug"] in ttd or a["slug"] in other_slugs:
        errors.append(f"{w}: slug collides with an existing page")
    if a["slug"] not in approved:
        errors.append(f"{w}: slug not approved in url-map.json")
    elif approved[a["slug"]]["title"] != a["title"]:
        errors.append(f"{w}: H1 differs from url-map.json")
    qa = words(a["quickAnswer"])
    if not 40 <= qa <= 80:
        errors.append(f"{w}: quick answer is {qa} words (40-80)")
    if not 3 <= len(a["takeaways"]) <= 7:
        errors.append(f"{w}: {len(a['takeaways'])} takeaways (3-7)")
    if len(a["faqs"]) < 4:
        errors.append(f"{w}: fewer than 4 FAQs")
    if len(a["seoTitle"]) > 70:
        errors.append(f"{w}: seoTitle {len(a['seoTitle'])} chars")
    if not 120 <= len(a["metaDescription"]) <= 165:
        errors.append(f"{w}: metaDescription {len(a['metaDescription'])} chars (120-165)")
    for key, seen, val in (("seoTitle", seen_titles, a["seoTitle"]), ("metaDescription", seen_meta, a["metaDescription"]),
                           ("title", seen_h1, a["title"])):
        if val in seen:
            errors.append(f"{w}: duplicate {key} with {seen[val]}")
        seen[val] = w
    ids = [s["id"] for s in a["sections"]]
    if len(ids) != len(set(ids)) or set(ids) & {"introduction", "quick-answer", "safety", "packing", "plan", "faq", "related"}:
        errors.append(f"{w}: duplicate or reserved section id")
    for s in a["sections"]:
        if not (s.get("paras") or s.get("items") or s.get("table") or s.get("list")):
            errors.append(f"{w}: empty section {s['id']}")
    text = text_of(a) + " " + " ".join([a["title"], a["dek"], a["description"], a["metaDescription"]])
    n = words(text_of(a))
    if n < FLOOR[a["kind"]]:
        (warnings if DEV else errors).append(f"{w}: {n} words (< {FLOOR[a['kind']]})")
    for m in BANNED.finditer(text):
        errors.append(f"{w}: banned phrase '{m.group(0)}'")
    if text.count("—") > 2:
        errors.append(f"{w}: {text.count('—')} em dashes")
    if re.search(r"\b\d+\+ (?:best|top|adventure)", a["title"] + a["seoTitle"]):
        errors.append(f"{w}: 'N+' count in title")
    check_img(a["hero"], f"{w} hero")
    if a["hero"]["src"] in heroes:
        errors.append(f"{w}: hero reused from {heroes[a['hero']['src']]}")
    heroes[a["hero"]["src"]] = w
    check_href(a["parent"]["href"], f"{w} parent")
    for s in a["sections"]:
        for it in s.get("items", []):
            if it.get("image"):
                check_img(it["image"], f"{w} {it['name']}")
            for l in it.get("links", []):
                check_href(l["href"], f"{w} {it['name']}")
    for l in a["nextSteps"]:
        check_href(l["href"], f"{w} nextSteps")
    for r in a["related"]:
        check_href(r["href"], f"{w} related")
    for st in a.get("styles", []):
        if st not in pkg_slugs:
            errors.append(f"{w}: unknown style {st}")
    index.append({
        "slug": a["slug"], "title": a["title"], "short": a["short"], "kind": a["kind"],
        "excerpt": a["description"], "image": a["hero"]["src"], "imageAlt": a["hero"]["alt"],
        "tags": a["tags"], "readTime": f"{max(4, round(n / 230))} min",
        "activities": a["activities"], "terrain": a["terrain"], "regions": a["regions"],
        "seasons": a["seasons"], "travellers": a["travellers"], "parent": a["parent"]["href"],
    })

order = [u["slug"] for u in urlmap]
index.sort(key=lambda e: order.index(e["slug"]) if e["slug"] in order else 999)
json.dump(index, open(os.path.join(ROOT, f"src/lib/{CLUSTER}-index.json"), "w"), ensure_ascii=False, indent=1)
# Guide pointers (beach cluster): scripts/beach/guide-links.json → src/lib/beach-guide-links.json
gl = os.path.join(HERE, "guide-links.json")
if CLUSTER in ("beach", "wildlife", "spiritual", "heritage", "hills") and os.path.exists(gl):
    links = json.load(open(gl))
    for g, v in links.items():
        if g not in guides:
            errors.append(f"guide-links: unknown guide {g}")
        if v["slug"] not in slugs:
            (warnings if DEV else errors).append(f"guide-links: {g} points to unwritten {v['slug']}")
    json.dump({g: v for g, v in links.items() if v["slug"] in slugs}, open(os.path.join(ROOT, f"src/lib/{CLUSTER}-guide-links.json"), "w"), ensure_ascii=False, indent=1)
for x in warnings:
    print("WARN ", x)
for x in errors:
    print("ERROR", x)
print(f"{len(articles)} {CLUSTER} articles, {len(errors)} errors, {len(warnings)} warnings")
sys.exit(1 if errors else 0)
