"""Verify the built HTML of every Adventure Travel article and the /adventure-travel
hub (run after `npm run build`): canonical, indexability, one H1, title and
description length and uniqueness (across all blog pages), Open Graph image,
required JSON-LD types, images on disk, breadcrumbs, internal links resolving
to built pages, and sitemap inclusion."""
import glob, html, json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITE = "https://club.kudozz.in"
OUT = os.path.join(ROOT, ".next/server/app")
CLUSTER = sys.argv[sys.argv.index("--cluster") + 1] if "--cluster" in sys.argv else "adventure"
HUB = {"adventure": "adventure-travel", "beach": "beach-travel", "wildlife": "wildlife-tourism", "spiritual": "spiritual-tourism", "heritage": "heritage-cultural-tourism", "hills": "hill-station-travel"}[CLUSTER]
slugs = [f[:-5] for f in os.listdir(os.path.join(ROOT, "src/content", CLUSTER)) if f.endswith(".json")]
built = {os.path.relpath(p, OUT)[:-5] for p in glob.glob(os.path.join(OUT, "**/*.html"), recursive=True)}
problems = []

def check(path, url, required, name):
    t = open(path).read()
    def need(cond, msg):
        if not cond: problems.append(f"{name}: {msg}")
    can = re.search(r'<link rel="canonical" href="([^"]+)"', t)
    need(can and can.group(1) == url, f"canonical {can.group(1) if can else None}")
    need(not re.search(r'name="robots" content="[^"]*noindex', t), "noindex")
    title = re.search(r"<title>([^<]+)</title>", t); title = html.unescape(title.group(1)) if title else ""
    need(20 <= len(title) <= 80, f"title length {len(title)}")
    d = re.search(r'<meta name="description" content="([^"]+)"', t); d = html.unescape(d.group(1)) if d else ""
    need(120 <= len(d) <= 170, f"description length {len(d)}")
    need(len(re.findall(r"<h1[\s>]", t)) == 1, "h1 count")
    need('property="og:image"' in t, "og:image")
    need('aria-label="Breadcrumb"' in t, "breadcrumb nav")
    types = set()
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', t, re.S):
        try:
            data = json.loads(block)
        except Exception as e:
            problems.append(f"{name}: bad JSON-LD {e}"); continue
        def walk(n):
            if isinstance(n, dict):
                ty = n.get("@type")
                if ty: types.update(ty if isinstance(ty, list) else [ty])
                for v in n.values(): walk(v)
            elif isinstance(n, list):
                for v in n: walk(v)
        walk(data)
    for req in required:
        need(req in types, f"schema missing {req}")
    need("aggregateRating" not in t and '"Review"' not in t, "rating or review markup present")
    for src in set(re.findall(r'(?:src|href)="(/images/[^"?]+)', t)):
        need(os.path.exists(os.path.join(ROOT, "public", src)), f"missing image {src}")
    for href in set(re.findall(r'href="(/(?:blog|packages)/[a-z0-9-]+|/adventure-travel|/beach-travel|/wildlife-tourism|/spiritual-tourism|/heritage-cultural-tourism|/hill-station-travel|/plan-your-trip)(?:[#?][^"]*)?"', t)):
        need(href.lstrip("/") in built, f"link to unbuilt page {href}")
    return title, d

titles, descs = {}, {}
for s in slugs:
    p = os.path.join(OUT, "blog", s + ".html")
    if not os.path.exists(p):
        problems.append(f"{s}: not built"); continue
    t, d = check(p, f"{SITE}/blog/{s}", ("BlogPosting", "BreadcrumbList", "FAQPage", "ItemList"), s)
    titles.setdefault(t, []).append(s); descs.setdefault(d, []).append(s)
check(os.path.join(OUT, f"{HUB}.html"), f"{SITE}/{HUB}", ("CollectionPage", "BreadcrumbList", "FAQPage", "ItemList"), f"/{HUB}")
# uniqueness against every other built blog page too
for p in glob.glob(os.path.join(OUT, "blog/*.html")):
    s = os.path.basename(p)[:-5]
    if s in slugs: continue
    t = re.search(r"<title>([^<]+)</title>", open(p).read())
    if t and html.unescape(t.group(1)) in titles:
        problems.append(f"title clash with {s}: {html.unescape(t.group(1))}")
for k, v in titles.items():
    if len(v) > 1: problems.append(f"duplicate title {k}: {v}")
for k, v in descs.items():
    if len(v) > 1: problems.append(f"duplicate description: {v}")
sm = open(os.path.join(OUT, "sitemap.xml.body")).read()
missing = [s for s in slugs if f"{SITE}/blog/{s}<" not in sm]
if f"{SITE}/{HUB}<" not in sm: missing.append(f"/{HUB}")
if missing: problems.append(f"not in sitemap: {missing}")
locs = re.findall(r"<loc>([^<]+)</loc>", sm)
if len(locs) != len(set(locs)): problems.append("duplicate URLs in sitemap")
print(f"{CLUSTER}: {len(slugs)} articles + hub checked, {len(problems)} problems, sitemap has {len(locs)} URLs")
for p in problems: print(" -", p)
sys.exit(1 if problems else 0)
