"""Build docs/complete-url-inventory.csv and docs/content-priority-matrix.csv.

  python3 scripts/seo-audit/build-inventory.py

Joins the crawl (out/pages.json), the per-article decisions
(decisions/bNN.tsv), the state data (state-hub-children.json and
all-states-data.ts) and the cluster indexes. Run after crawl.py.
"""
import csv, glob, json, os, re
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
P = json.load(open(os.path.join(HERE, "out/pages.json")))

# decisions
DEC = {}
for f in sorted(glob.glob(os.path.join(HERE, "decisions/b*.tsv"))):
    for line in open(f, encoding="utf-8"):
        c = line.rstrip("\n").split("\t")
        if len(c) >= 5:
            DEC[c[0]] = {"kw": c[1], "intent": c[2], "action": c[3], "note": c[4]}

# state / region per guide slug
src = open(os.path.join(ROOT, "src/lib/all-states-data.ts"), encoding="utf-8").read()
STATE_BY_HUB, REGION_BY_HUB = {}, {}
for m in re.finditer(r'slug: "([a-z0-9-]+)",\s*name: "([^"]+)",\s*region: "([^"]+)",\s*blogSlug: "([a-z0-9-]+)"', src):
    STATE_BY_HUB[m.group(4)] = m.group(2)
    REGION_BY_HUB[m.group(4)] = m.group(3)
children = json.load(open(os.path.join(ROOT, "src/lib/state-hub-children.json")))
STATE, REGION = {}, {}
for hub, kids in children.items():
    for k in [{"slug": hub}] + kids:
        s = k["slug"] if isinstance(k, dict) else k
        STATE[s] = STATE_BY_HUB.get(hub, "")
        REGION[s] = REGION_BY_HUB.get(hub, "")
ttd = json.load(open(os.path.join(ROOT, "src/lib/things-to-do-index.json")))
for e in ttd:
    STATE.setdefault(e["slug"], e.get("state", ""))
    REGION.setdefault(e["slug"], REGION.get(e.get("stateGuide", ""), ""))

CLUSTER = {}
for d in os.listdir(os.path.join(ROOT, "src/content")):
    for f in os.listdir(os.path.join(ROOT, "src/content", d)):
        CLUSTER[f[:-5]] = d

inb = defaultdict(set)
for p in P:
    for h, _ in p["links_out"]:
        inb[h].add(p["route"])


def page_type(route, slug):
    if route == "/":
        return "homepage"
    if route.startswith("/packages/"):
        return "package"
    if route.startswith("/blog/"):
        if slug in CLUSTER:
            return "things-to-do" if CLUSTER[slug] == "things-to-do" else f"cluster-article:{CLUSTER[slug]}"
        if slug in STATE_BY_HUB:
            return "state-hub-guide"
        return "destination-guide"
    if route in ("/adventure-travel", "/beach-travel", "/wildlife-tourism", "/spiritual-tourism",
                 "/heritage-cultural-tourism", "/hill-station-travel", "/nature-travel", "/road-trips"):
        return "category-hub"
    if route in ("/packages", "/destinations", "/blog"):
        return "index"
    if route in ("/best-travel-agency-in-india", "/plan-your-trip"):
        return "commercial"
    return "utility"


def commercial(t):
    return {"homepage": "high", "package": "high", "commercial": "high", "index": "medium",
            "category-hub": "medium", "state-hub-guide": "medium"}.get(t, "low-medium")


rows = []
for p in sorted(P, key=lambda x: x["route"]):
    r = p["route"]
    slug = r[6:] if r.startswith("/blog/") else ""
    t = page_type(r, slug)
    d = DEC.get(slug, {})
    sig = p.get("signals", {})
    aeo = sum([p.get("quick_answer", False), p.get("faq_count", 0) > 0, sig.get("best_time", False), sig.get("how_to_reach", False)])
    geo = sum(["BreadcrumbList" in p["schema"], any(x in p["schema"] for x in ("TouristDestination", "TouristAttraction", "Place", "Service", "CollectionPage")), bool(STATE.get(slug)) or t not in ("destination-guide", "things-to-do")])
    noindex = "noindex" in p["robots"]
    rows.append({
        "url": p["url"], "route": r, "page_type": t, "title": p["title"],
        "h1": p["h1"][0] if p["h1"] else "", "meta_description": p["description"],
        "canonical": p["canonical"], "robots": p["robots"] or "index,follow",
        "indexable": "no" if noindex else "yes", "status": 200, "words": p["words"],
        "h2_count": len(p.get("h2", [])), "h2_outline": " / ".join(p.get("h2", [])[:10]),
        "primary_keyword": d.get("kw", ""), "secondary_keywords": p.get("keywords", "")[:200],
        "search_intent": d.get("intent", "C" if commercial(t) == "high" else ""),
        "state": STATE.get(slug, ""), "region": REGION.get(slug, ""),
        "cluster": CLUSTER.get(slug, "static" if slug else ""),
        "inbound_internal": len(inb[r] - {r}), "outbound_internal": len(p["links_out"]),
        "external_links": len(p["external_links"]), "images": len(p["images"]),
        "images_empty_alt": sum(1 for i in p["images"] if not (i["alt"] or "").strip()),
        "schema": "|".join(sorted(set(p["schema"]))), "breadcrumb": "yes" if p["breadcrumb_nav"] else "no",
        "plan_cta": "yes" if p["plan_cta"] else "no", "package_link": "yes" if p["package_link"] else "no",
        "faq_count": p.get("faq_count", 0), "aeo_score_0_4": aeo, "geo_score_0_3": geo,
        "orphan": "yes" if not (inb[r] - {r}) and r != "/" else "no",
        "commercial_relevance": commercial(t), "in_sitemap": "no" if noindex else "yes",
        "action": d.get("action", "KEEP"), "note": d.get("note", ""),
    })

os.makedirs(os.path.join(ROOT, "docs"), exist_ok=True)
with open(os.path.join(ROOT, "docs/complete-url-inventory.csv"), "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
    w.writeheader()
    w.writerows(rows)

# priority matrix: commercial value x opportunity
PRI = {"high": 3, "medium": 2, "low-medium": 1}
with open(os.path.join(ROOT, "docs/content-priority-matrix.csv"), "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["url", "page_type", "action", "commercial_relevance", "aeo_score_0_4", "inbound_internal", "priority", "reason"])
    for x in rows:
        score = PRI[x["commercial_relevance"]] * 2 + (4 - x["aeo_score_0_4"]) + (2 if x["inbound_internal"] < 5 else 0) + (3 if x["action"] in ("REWRITE", "EXPAND") else 0)
        pr = "P1" if score >= 7 else "P2" if score >= 4 else "P3"
        reason = x["note"] or ("commercial page" if x["commercial_relevance"] == "high" else "")
        w.writerow([x["url"], x["page_type"], x["action"], x["commercial_relevance"], x["aeo_score_0_4"], x["inbound_internal"], pr, reason])

from collections import Counter
print(len(rows), "rows")
print(Counter(r["page_type"].split(":")[0] for r in rows))
print(Counter(r["action"] for r in rows))
