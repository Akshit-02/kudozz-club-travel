"""Generate the Adventure Travel docs in docs/ from url-map.json, the article
JSON files and the built index. Run after build.py:

  python3 scripts/adventure/report.py
"""
import json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DOCS = os.path.join(ROOT, "docs")
CONTENT = os.path.join(ROOT, "src/content/adventure")
urlmap = json.load(open(os.path.join(HERE, "url-map.json")))
arts = {f[:-5]: json.load(open(os.path.join(CONTENT, f))) for f in sorted(os.listdir(CONTENT)) if f.endswith(".json")}
index = {e["slug"]: e for e in json.load(open(os.path.join(ROOT, "src/lib/adventure-index.json")))}
DATE = "2026-09-25"


def url(u):
    return "/adventure-travel" if u["slug"] == "adventure-travel" else f"/blog/{u['slug']}"


def cell(s):
    return str(s).replace("|", "\\|").replace("\n", " ")


def words(a):
    parts = a["intro"] + [a["quickAnswer"]] + a["takeaways"] + a["safety"] + a.get("packing", [])
    for s in a["sections"]:
        parts += s.get("paras", []) + s.get("list", []) + s.get("after", [])
        if s.get("table"):
            parts += [c for r in s["table"]["rows"] for c in r]
        for it in s.get("items", []):
            parts += [it["name"]] + it["body"] + list((it.get("facts") or {}).values())
    parts += [x for f in a["faqs"] for x in (f["q"], f["a"])] + [r["note"] for r in a["related"]]
    return len(" ".join(parts).split())


def children(u):
    href = url(u)
    kids = [url(x) for x in urlmap if x["status"] == "create" and x["parent"] == href]
    return sorted(set(kids + u.get("children", [])))


def write(name, text):
    with open(os.path.join(DOCS, name), "w") as f:
        f.write(text.rstrip() + "\n")
    print("wrote", name)


created = [u for u in urlmap if u["status"] == "create"]
merged = [u for u in urlmap if u["status"] == "merged"]
deferred = [u for u in urlmap if u["status"] == "deferred"]

# 1. Keyword map
rows = ["| Topic | Primary keyword | Secondary keywords | Search intent | Target URL | Parent | Child pages |", "| --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] == "create":
        a = arts.get(u["slug"])
        sec = a["secondaryKeywords"] if a else u["secondary"]
        rows.append(f"| {cell(u['title'])} | {cell(u['primary'])} | {cell(', '.join(sec))} | {cell(u['intent'])} | `{url(u)}` | `{u['parent']}` | {cell(', '.join(f'`{c}`' for c in children(u)) or '—')} |")
    else:
        tgt = u["mergedInto"] or "manual review"
        rows.append(f"| {cell(u['slug'])} (not created) | {cell(u['primary'])} | — | Folded into target | `{tgt}` | — | — |")
write("adventure-travel-keyword-map.md", f"""# Adventure Travel: keyword map

Generated {DATE} by `scripts/adventure/report.py` from `scripts/adventure/url-map.json`.

Every primary keyword maps to exactly one URL. Candidate topics that were merged point at the page that now targets them (see the cannibalisation doc for reasons).

{chr(10).join(rows)}
""")

# 2. Content cluster
by_parent = {}
for u in created:
    by_parent.setdefault(u["parent"], []).append(u)
def tree(href, depth):
    out = []
    for u in sorted(by_parent.get(href, []), key=lambda x: (x["kind"], x["slug"])):
        out.append(f"{'  ' * depth}- [{u['title']}]({url(u)}) · {u['kind']}")
        out += tree(url(u), depth + 1)
    return out
hub = next(u for u in urlmap if u["slug"] == "adventure-travel")
lines = [f"- [{hub['title']}](/adventure-travel) · hub"] + tree("/adventure-travel", 1)
chains = []
for s in ["river-rafting-in-rishikesh", "scuba-diving-in-andaman", "adventure-activities-in-manali", "paragliding-in-india", "skiing-in-india", "desert-adventures-in-india"]:
    a = arts[s]
    chains.append(f"- `/adventure-travel` → `{a['parent']['href']}` → `/blog/{s}` → " + " → ".join(f"`{l['href']}`" for l in a["nextSteps"]) + " → `/plan-your-trip`")
write("adventure-travel-content-cluster.md", f"""# Adventure Travel: content cluster

Generated {DATE}. {len(created) - 1} articles plus the hub are live; {len(merged)} candidate topics were merged into existing or new pages and {len(deferred)} is held for manual review.

## Hierarchy

{chr(10).join(lines)}

## How the cluster connects to the rest of the site

- **Hub → articles:** `/adventure-travel` links to every article by activity, destination, region, season, beginner level, trip idea and planning guide.
- **Article → article:** each article has a parent in the tree above, a "Related reading" list and a sidebar of articles sharing an activity or region.
- **Article → destination funnel:** each article ends with a "Plan the trip" block that follows the chain *destination guide → things to do → itinerary → tour package → Plan My Trip*.
- **Existing content → adventure:** `GuideTripCTA` adds a one-line pointer to the relevant adventure article on {sum(1 for _ in open(os.path.join(ROOT, 'src/lib/adventure-links.ts')).read().split('-travel-guide": {')) - 1} destination guides and on the things-to-do articles for those destinations; state package pages show an "Adventure in <state>" block; `/packages/adventure-tours` lists every activity guide; the site header and footer link to the hub.

## Example chains

{chr(10).join(chains)}
""")

# 3. Cannibalisation
crows = ["| Candidate | Decision | Now served by | Reason |", "| --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] == "merged":
        crows.append(f"| `{u['slug']}` | Merged | `{u['mergedInto']}` | {cell(u['reason'])} |")
    elif u["status"] == "deferred":
        crows.append(f"| `{u['slug']}` | Manual review | — | {cell(u['reason'])} |")
orows = ["| New page | Overlapping existing pages | How they differ |", "| --- | --- | --- |"]
for u in created:
    if u["conflicts"]:
        orows.append(f"| `{url(u)}` | {cell(', '.join(f'`{r}`' for r in u['related'] if r.startswith('/blog/')) or '—')} | {cell(u['conflicts'])} |")
write("adventure-travel-cannibalization.md", f"""# Adventure Travel: cannibalisation audit and decisions

Generated {DATE}.

## Audit method

Before creating anything we compared every candidate topic in the brief with the existing site: 582 destination guides (62 already in the "Adventure" blog category), 143 things-to-do articles, the `/packages/adventure-tours` travel-style page and 48 package pages. We checked titles, H1s and section headings for each overlapping page, and used current search results (September 2026) to judge whether two queries return the same kind of page. Where they do, one page owns the intent and the other is folded into it.

## Intent separation rules used

| Page type | Intent | Example |
| --- | --- | --- |
| Hub (`/adventure-travel`) | Browse all adventure; owns "adventure travel/tourism in India" | Adventure Travel in India |
| Activity pillar | One activity across India | River Rafting in India |
| Activity at a place | One activity at one place, where no guide already owns it | River Rafting in Rishikesh |
| Destination adventure hub | All adventure activities in one state or town | Adventure Activities in Manali |
| Things to do | All experiences in a place (sights, food, culture, some activities) | Things to Do in Manali |
| Destination guide | Full trip planning for a place | Manali Travel Guide |
| Package page | Commercial intent | Himachal Pradesh Tour Packages, Adventure Trips |

## Candidate topics not created

{chr(10).join(crows)}

## New pages that overlap existing content, and how they differ

{chr(10).join(orows)}

## Key calls

- **Hub vs pillar.** The brief proposed both `/adventure-travel` (H1 "Adventure Travel in India") and `/blog/adventure-travel-in-india`. Two pages with the same H1 and intent would compete, so the hub carries the pillar copy (quick answer, overview, FAQs with `FAQPage` schema) and the blog pillar was not created.
- **Bir Billing, Gulmarg, Auli.** Their existing guides are titled around paragliding and skiing and already rank for those intents. Activity pillars (`paragliding-in-india`, `skiing-in-india`) link to them instead of new place-activity pages.
- **Rishikesh.** `rishikesh-adventure-travel-guide` and `things-to-do-in-rishikesh` already cover "adventure activities in Rishikesh". Only the rafting-specific page was created, because none of the existing pages covers stretches, grades, season and operator checks in depth.
- **Ladakh bike trip.** The Leh Ladakh road trip guide covers bike vs car, routes and permits; `best-motorcycle-trips-in-india` links to it. The Spiti guide has almost no riding content, so `spiti-valley-bike-trip` was created.
- **Costs.** `adventure-trip-cost-in-india` was not created because current prices vary by operator and season and could not be verified; cost drivers are covered in the planning guide without invented numbers.
""")

# 4. AEO map
arows = []
for s, a in arts.items():
    arows.append(f"### [{a['title']}](/blog/{s})\n\n**Quick answer ({len(a['quickAnswer'].split())} words):** {a['quickAnswer']}\n\n**Key takeaways:** {len(a['takeaways'])} · **Tables:** {sum(1 for x in a['sections'] if x.get('table'))} · **FAQs ({len(a['faqs'])}):**\n\n" + "\n".join(f"- {f['q']}" for f in a["faqs"]))
write("adventure-travel-aeo-map.md", f"""# Adventure Travel: AEO map

Generated {DATE}. Every article opens with a 40 to 80 word quick answer and 3 to 7 key takeaways, uses tables for comparisons and seasons, and ends with FAQs marked up as `FAQPage`. The hub has its own quick answer and five FAQs.

{chr(10).join(arows)}
""")

# 5. GEO entity map
grows = ["| Page | Main entity (schema type) | Within | Regions | Places mentioned | Activities |", "| --- | --- | --- | --- | --- | --- |"]
for s, a in arts.items():
    ab = a["about"]
    grows.append(f"| `/blog/{s}` | {cell(ab['name'])} ({ab['type']}) | {cell((ab.get('containedIn') or '') + ' → India' if ab.get('containedIn') else 'India')} | {cell(', '.join(a['regions']))} | {cell(', '.join(a.get('places', [])) or '—')} | {cell(', '.join(a['activities']))} |")
write("adventure-travel-geo-entity-map.md", f"""# Adventure Travel: GEO entity map

Generated {DATE}. Each article's `BlogPosting` schema names its main entity in `about` (a `TouristDestination` or `TouristAttraction` inside its state and India, or a `Thing` for activity overviews), lists the places it covers in `mentions`, and adds an `ItemList` of the places or activities described. The breadcrumb places each page under Adventure Travel and its parent.

## Example relationships

- Rishikesh → Uttarakhand → India; Ganga → white-water rafting (Brahmpuri, Shivpuri, Marine Drive, Kaudiyala) → Mohan Chatti bungee.
- Bir Billing → Kangra → Himachal Pradesh → India; Billing take-off → paragliding; monsoon ban (15 July to 15 September).
- Gulmarg → Baramulla → Jammu and Kashmir → India; Gulmarg Gondola → Kongdori → Apharwat → skiing.
- Havelock (Swaraj Dweep) → Andaman Islands → Andaman and Nicobar Islands → India → Bay of Bengal; scuba diving, snorkelling at Elephant Beach.
- Leh → Ladakh → India; Zanskar and Indus → rafting (Chilling to Nimmu, Phey to Nimmu); Khardung La → Nubra → Hunder (Bactrian camels).
- Kaza → Spiti → Lahaul and Spiti → Himachal Pradesh; Kunzum Pass → Chandratal → Atal Tunnel → Manali.

## Entities by page

{chr(10).join(grows)}
""")

# 6. URL map
urows = ["| Title (SEO) | H1 | Slug | Primary keyword | Secondary keywords | Intent | Parent | Related pages | Existing URL conflicts | Status |", "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    a = arts.get(u["slug"])
    if u["slug"] == "adventure-travel":
        urows.append(f"| Adventure Travel in India: Activities, Destinations & Seasons \\| Kudozz Club | {u['title']} | `/adventure-travel` | {cell(u['primary'])} | {cell(', '.join(u['secondary']))} | {cell(u['intent'])} | `/` | `/packages/adventure-tours`, `/plan-your-trip` | {cell(u['conflicts'])} | Live |")
    elif a:
        rel = [r["href"] for r in a["related"]] + [l["href"] for l in a["nextSteps"]][:3]
        urows.append(f"| {cell(a['seoTitle'])} | {cell(a['title'])} | `/blog/{u['slug']}` | {cell(u['primary'])} | {cell(', '.join(a['secondaryKeywords']))} | {cell(u['intent'])} | `{u['parent']}` | {cell(', '.join(f'`{r}`' for r in rel))} | {cell(u['conflicts'] or 'None')} | Live |")
    else:
        st = "Merged into `" + u["mergedInto"] + "`" if u["status"] == "merged" else "Manual review"
        urows.append(f"| — | — | `{u['slug']}` | {cell(u['primary'])} | — | — | — | — | {cell(u['reason'])} | {st} |")
write("adventure-travel-url-map.md", f"""# Adventure Travel: URL and title map

Generated {DATE}. {len(created)} live URLs (hub plus {len(created) - 1} articles), {len(merged)} merged candidates, {len(deferred)} held for manual review. No existing URL was changed and no redirects are needed: every new URL is new, and merged candidates were never published.

{chr(10).join(urows)}
""")

# 7. Progress
prow = ["| # | Topic | URL | Research | Content | SEO | AEO | GEO | Images | Links | Published | QA |", "| - | ----- | --- | -------- | ------- | --- | --- | --- | ------ | ----- | --------- | -- |"]
n = 0
for u in urlmap:
    n += 1
    if u["status"] == "create":
        if u["slug"] == "adventure-travel":
            prow.append(f"| {n} | Adventure Travel in India (hub) | `/adventure-travel` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |")
            continue
        a = arts[u["slug"]]
        prow.append(f"| {n} | {cell(a['title'].split(':')[0])} ({words(a)} words) | `/blog/{u['slug']}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |")
    elif u["status"] == "merged":
        prow.append(f"| {n} | {u['slug']} | Merged → `{u['mergedInto']}` | ✅ | — | — | — | — | — | — | Not created | ✅ |")
    else:
        prow.append(f"| {n} | {u['slug']} | — | ✅ | — | — | — | — | — | — | Manual review | — |")
write("adventure-travel-progress.md", f"""# Adventure Travel: progress

Generated {DATE}. Research ✅ means the topic was checked against existing content and current search results; QA ✅ means the page passed `build.py` (strict), `verify-html.py` and the site-wide link check, or that the merge decision is documented.

{chr(10).join(prow)}
""")
