"""Print compact per-article review cards from the crawl, for the manual
per-article audit. Usage:

  python3 scripts/seo-audit/review-batch.py <start> <count> [prefix]

Cards are ordered by route. Each shows title, H1, meta description (with
length), intro, H2 outline, FAQ count, word count and automatic flags.
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
P = [p for p in json.load(open(os.path.join(HERE, "out/pages.json"))) if p["route"].startswith("/blog/")]
P.sort(key=lambda p: p["route"])
start, count = int(sys.argv[1]), int(sys.argv[2])
prefix = sys.argv[3] if len(sys.argv) > 3 else ""
if prefix:
    P = [p for p in P if p["route"].startswith("/blog/" + prefix)]
for i, p in enumerate(P[start : start + count], start):
    slug = p["route"][6:]
    sig = p.get("signals", {})
    flags = []
    if len(p["description"]) > 165: flags.append(f"DESC{len(p['description'])}")
    if len(p["description"]) < 110: flags.append(f"DESCSHORT{len(p['description'])}")
    if len(p["title"]) > 65: flags.append(f"TITLE{len(p['title'])}")
    if p.get("years"): flags.append("yrs:" + ",".join(p["years"]))
    if p.get("rupee_mentions"): flags.append(f"₹x{p['rupee_mentions']}")
    miss = [k for k, v in sig.items() if not v and k in ("best_time", "how_to_reach")]
    if miss: flags.append("no:" + "/".join(miss))
    if p.get("faq_count", 0) == 0: flags.append("NOFAQ")
    COMMON = ("Table of Contents", "Frequently Asked Questions", "FAQs", "Continue Exploring", "Related Guides",
              "Related reading", "Want us to plan this trip for you?", "Quick answer")
    h2 = [h for h in p.get("h2", []) if h not in COMMON and not h.startswith(("More places in", "Want this", "Want the", "Want to", "Ready ", "Plan the rest", "Planning a"))]
    print(f"#{i} {slug} | {p['words']}w | faq{p.get('faq_count', 0)} | {' '.join(flags)}")
    print(f"  T: {p['title']}")
    if p["h1"] and p["h1"][0] != p["title"].split(" | ")[0]:
        print(f"  H1: {p['h1'][0]}")
    print(f"  D: {p['description']}")
    print(f"  I: {p.get('intro', '')[:150]}")
    print(f"  H2: {' / '.join(h[:32] for h in h2[:12])}")
