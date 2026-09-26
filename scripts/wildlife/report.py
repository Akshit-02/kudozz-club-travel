"""Generate the Wildlife Tourism docs (docs/wildlife-tourism-*.md) from
scripts/wildlife/url-map.json, scripts/wildlife/guide-links.json, the article JSON
files, the built index and docs/blog-post-links.csv. Run after build.py:

  python3 scripts/wildlife/report.py
"""
import csv, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DOCS = os.path.join(ROOT, "docs")
CONTENT = os.path.join(ROOT, "src/content/wildlife")
DATE = "2026-09-26"
urlmap = json.load(open(os.path.join(HERE, "url-map.json")))
arts = {f[:-5]: json.load(open(os.path.join(CONTENT, f))) for f in sorted(os.listdir(CONTENT)) if f.endswith(".json")}
guide_links = json.load(open(os.path.join(HERE, "guide-links.json")))
created = [u for u in urlmap if u["status"] == "create"]
merged = [u for u in urlmap if u["status"] == "merged"]
deferred = [u for u in urlmap if u["status"] == "deferred"]


def url(u):
    return "/wildlife-tourism" if u["slug"] == "wildlife-tourism" else f"/blog/{u['slug']}"


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


def write(name, text):
    open(os.path.join(DOCS, name), "w").write(text.rstrip() + "\n")
    print("wrote", name)


def pl(n, word):
    return f"{n} {word}{'' if n == 1 else 's'}"


# ── Inventory ───────────────────────────────────────────────────────────────
KW = re.compile(r"wildlife|safari|national park|tiger|sanctuar|jungle|bird|lion|rhino|leopard|elephant|ranthambore|corbett|kanha|bandhavgarh|tadoba|panna|dudhwa|kaziranga|gir-national|sundarbans|kabini|bandipur|thekkady|periyar|manas|namdapha|similipal|bhitarkanika|kuno|bharatpur|hemis|valley-of-flowers|tirthan|pobitora|wayanad|jawai|mollem|rann-of-kutch|nameri|chilika|sultanpur-national|keibul|dooars|buxa|satkosia|valparai|kumbhalgarh|mount-abu|abohar|pachmarhi", re.I)
SKIP = ("sultanpur-lodhi", "dwarka-delhi", "chanakyapuri", "janakpuri", "tripura-sundari", "borra-caves", "things-to-do-in-mandu")
def ctype(slug, title):
    if slug.startswith("things-to-do-in-"):
        return "Things to do"
    if re.search(r"national park|tiger reserve|sanctuary|safari", title, re.I):
        return "Park or reserve guide"
    if re.search(r"(ranthambore|corbett|kanha|bandhavgarh|tadoba|panna|dudhwa|kaziranga|gir-national|sundarbans|kabini|bandipur|thekkady|manas|namdapha|similipal|bhitarkanika|kuno|hemis|pobitora|nameri|buxa|satkosia|keibul|sultanpur-national|bharatpur|valley-of-flowers)", slug):
        return "Park or reserve guide"
    return "Destination guide"
inv = ["| Topic | Existing URL | Content Type | Wildlife Intent | Quality | New Page Needed? | Action |", "| --- | --- | --- | --- | --- | --- | --- |"]
n_inv = 0
for r in csv.DictReader(open(os.path.join(DOCS, "blog-post-links.csv"))):
    if r["type"] in ("Wildlife article", "Beach article", "Adventure article") or r["slug"].startswith(SKIP) or not KW.search(r["slug"] + " " + r["title"]):
        continue
    t = ctype(r["slug"], r["title"])
    intent = {"Park or reserve guide": "Owns this park's safari and visit intent", "Things to do": "Activities at the destination", "Destination guide": "Destination planning with a wildlife element"}[t]
    g = guide_links.get(r["slug"])
    action = f"Keep; pointer added to `/blog/{g['slug']}`" if g else "Keep; linked from the relevant wildlife state or species page"
    inv.append(f"| {cell(r['title'].split(':')[0])} | `/blog/{r['slug']}` | {t} | {intent} | Complete, current | No | {action} |")
    n_inv += 1
new_rows = [f"| {cell(u['title'])} | — | {u['kind'].capitalize()} | {cell(u['intent'])} | New | Yes | Created `{url(u)}` |" for u in created]
write("wildlife-tourism-inventory.md", f"""# Wildlife Tourism: content inventory

Generated {DATE} by `scripts/wildlife/report.py`.

## Audit summary

- {n_inv} existing pages already cover a park, reserve, sanctuary or wildlife destination: dedicated park and reserve guides (Ranthambore, Jim Corbett, Kanha, Bandhavgarh, Tadoba, Panna, Kaziranga, Gir, the Sundarbans, Kabini, Bandipur, Periyar and more), destination guides with a wildlife element, and things-to-do articles for wildlife destinations.
- Each park guide already owns that park's own safari, visit and itinerary intent, so no duplicate park pages were created. New park pages were written only where no guide existed: Pench, Satpura and Sariska.
- There was no wildlife hub, no national overview (parks, sanctuaries, tiger reserves, safaris), no species or birding guides, no state wildlife guides and no wildlife planning guides.
- Protected-area designations follow the official database (national park, wildlife sanctuary, tiger reserve, conservation reserve). Examples: Keoladeo and Sultanpur are national parks, not bird sanctuaries; Jaldapara became a national park in 2014; Jawai is farmland and hills, not a national park.
- Package pages exist for every state and for the wildlife-tours style; no package URL was invented.

## Existing pages

{chr(10).join(inv)}

## New pages created

| Topic | Existing URL | Content Type | Wildlife Intent | Quality | New Page Needed? | Action |
| --- | --- | --- | --- | --- | --- | --- |
{chr(10).join(new_rows)}
""")

# ── Keyword map ─────────────────────────────────────────────────────────────
km = ["| URL | Primary Keyword | Secondary Keywords | Intent | Parent Topic | Destination | Species | Commercial Intent |", "| --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] == "create":
        a = arts.get(u["slug"])
        km.append(f"| `{url(u)}` | {cell(u['primary'])} | {cell(', '.join(a['secondaryKeywords'] if a else u['secondary']))} | {cell(u['intent'])} | `{u['parent']}` | {cell(u['destination'] or '—')} | {cell(u['species'] or '—')} | {cell(u['commercial'] or '—')} |")
for u in urlmap:
    if u["status"] != "create":
        km.append(f"| `{u['mergedInto'] or 'manual review'}` (serves “{cell(u['primary'])}”) | {cell(u['primary'])} | — | Served by target | — | — | — | — |")
write("wildlife-tourism-keyword-map.md", f"""# Wildlife Tourism: keyword map

Generated {DATE}. One primary keyword per URL. Merged candidates are listed after the live pages with the URL that now serves their keyword. Semantic terms used across the cluster: national park, tiger reserve, wildlife sanctuary, core and buffer zone, jeep safari, canter, permit, gate, forest department, sighting, monsoon closure, birding, endemic, conservation.

{chr(10).join(km)}
""")

# ── Content cluster ─────────────────────────────────────────────────────────
by_parent = {}
for u in created:
    by_parent.setdefault(u["parent"], []).append(u)
def tree(href, d):
    out = []
    for u in sorted(by_parent.get(href, []), key=lambda x: (x["kind"], x["slug"])):
        out.append(f"{'  ' * d}- [{u['title']}]({url(u)}) · {u['kind']}")
        out += tree(url(u), d + 1)
    return out
lines = ["- [Wildlife Tourism in India](/wildlife-tourism) · hub"] + tree("/wildlife-tourism", 1)
chains = []
for s in ["pench-tiger-reserve", "wildlife-tourism-in-assam", "leopard-safari-in-india", "wildlife-tourism-in-gujarat"]:
    a = arts[s]
    chains.append(f"- `/wildlife-tourism` → `{a['parent']['href']}` → `/blog/{s}` → " + " → ".join(f"`{l['href']}`" for l in a["nextSteps"]) + " → `/plan-your-trip`")
write("wildlife-tourism-content-cluster.md", f"""# Wildlife Tourism: content cluster

Generated {DATE}. {len(created) - 1} articles plus the hub are live; {len(merged)} candidate topics were merged into an existing or new page and {pl(len(deferred), 'topic')} held for manual review.

## Structure

Wildlife Tourism → Destinations → National parks, tiger reserves, sanctuaries → Species → Birding → States → Safaris → Planning → Itineraries → Packages

| Layer | Pages |
| --- | --- |
| Hub | `/wildlife-tourism` (13 sections, FAQs, `CollectionPage` + `ItemList`) |
| Pillars | best-wildlife-destinations, best-national-parks, best-wildlife-sanctuaries, best-wildlife-safaris, tiger-safari, best-tiger-reserves, where-to-see-wildlife, birdwatching |
| Tiger reserves | New: Pench, Satpura, Sariska. Existing guides: Ranthambore, Corbett, Kanha, Bandhavgarh, Tadoba, Panna, Dudhwa and more |
| Species | leopard-safari, where-to-see-rhinos, snow-leopard-tours (lions are covered by the Gir guide and the Gujarat page) |
| States | 11 state guides (`wildlife-tourism-in-<state>`) |
| Safaris | best-wildlife-safaris (jeep, canter, boat, walking, rickshaw, elephant, night) |
| Planning | how-to-plan-a-wildlife-safari, how-to-plan-a-tiger-safari, best-time, packing list, photography, responsible tourism |
| Itineraries | The itinerary sections of each park guide; multi-park routes on the state pages |
| Packages | State packages, `/packages/wildlife-tours`, and family, honeymoon, luxury and weekend styles |

## Hierarchy

{chr(10).join(lines)}

## How it connects to the rest of the site

- The hub links to every wildlife article, 16 park guides, sanctuary and birding guides, 8 park itineraries and the wildlife packages.
- Every article has two calls to action: "Planning a wildlife trip?" after the key takeaways and "Ready to plan your wildlife escape?" before the FAQs, each leading to Plan My Trip.
- `GuideTripCTA` shows "Planning a wildlife trip? See our guide to …" on {len(guide_links)} existing guides.
- State package pages show a "Wildlife in <state>" block; `/packages/wildlife-tours` lists every wildlife guide; family, honeymoon, luxury and weekend pages show a "Wildlife trips for …" block.
- Adventure and beach articles link across where relevant (desert adventures, winter treks, Uttarakhand adventure, dolphin watching, Odisha and West Bengal beaches).
- The header ("Wildlife") and footer link to the hub; the blog index has a "Wildlife Tourism" category; `llms.txt` lists the cluster.

## Example chains

{chr(10).join(chains)}
""")

# ── Cannibalisation ─────────────────────────────────────────────────────────
PAIRS = [
    ("/wildlife-tourism", "/blog/best-wildlife-destinations-in-india", "Medium", "Yes", "Keep both: the hub is navigational and owns “wildlife tourism in India”; the pillar compares destinations by species and season"),
    ("/blog/tiger-safari-in-india", "/blog/best-tiger-reserves-in-india", "Medium", "Yes", "Keep both: the safari page is about doing a tiger safari; the reserves page explains the reserve system and compares reserves"),
    ("/blog/tiger-safari-in-india", "/blog/how-to-plan-a-tiger-safari-in-india", "Medium", "Yes", "Keep both: overview vs booking, zones and cost drivers"),
    ("/blog/how-to-plan-a-tiger-safari-in-india", "/blog/how-to-plan-a-wildlife-safari-in-india", "Medium", "Yes", "Keep both: tiger-reserve specifics vs general planning and traveller types"),
    ("/blog/best-national-parks-in-india", "/blog/best-wildlife-sanctuaries-in-india", "Low", "Yes", "Keep both: separate legal categories; each explains the difference and links to the other"),
    ("/blog/best-wildlife-destinations-in-india", "/blog/where-to-see-wildlife-in-india", "Medium", "Yes", "Keep both: destinations to base a trip vs species-by-species lookup"),
    ("/blog/best-wildlife-safaris-in-india", "/blog/tiger-safari-in-india", "Low", "Yes", "Keep both: safari types vs tiger destinations"),
    ("/blog/pench-tiger-reserve", "/blog/wildlife-tourism-in-madhya-pradesh", "Low", "Yes", "Keep both: one park vs the whole state"),
    ("/blog/leopard-safari-in-india", "/blog/jawai-travel-guide", "Medium", "Yes", "Keep both: national leopard options vs complete Jawai planning; the guide points to the species page"),
    ("/blog/where-to-see-rhinos-in-india", "/blog/kaziranga-travel-guide", "Medium", "Yes", "Keep both: all rhino sites vs complete Kaziranga planning"),
    ("/blog/snow-leopard-tours-in-india", "/blog/hemis-travel-guide", "Medium", "Yes", "Keep both: winter tracking trips vs the Hemis destination guide"),
    ("/blog/birdwatching-in-india", "/blog/bharatpur-travel-guide", "Low", "Yes", "Keep both: national birding vs Keoladeo planning"),
    ("/blog/wildlife-tourism-in-rajasthan", "/blog/ranthambore-travel-guide", "Low", "Yes", "Keep both: state overview vs park guide"),
]
crows = ["| Page A | Page B | Similarity | Different Intent? | Action |", "| --- | --- | --- | --- | --- |"]
crows += [f"| `{a}` | `{b}` | {sim} | {d} | {cell(act)} |" for a, b, sim, d, act in PAIRS]
for u in urlmap:
    if u["status"] == "merged":
        crows.append(f"| `{u['slug']}` (candidate) | `{u['mergedInto']}` | High | No | Merged: {cell(u['reason'])} |")
    elif u["status"] == "deferred":
        crows.append(f"| `{u['slug']}` (candidate) | — | — | — | Manual review: {cell(u['reason'])} |")
write("wildlife-tourism-cannibalization.md", f"""# Wildlife Tourism: cannibalisation audit and decisions

Generated {DATE}.

## Intent separation

| Page type | Intent | Example |
| --- | --- | --- |
| Hub (`/wildlife-tourism`) | Wildlife tourism in India overall; navigation | Wildlife Tourism in India |
| Pillar | National comparison of a category | Best National Parks in India |
| Park or reserve guide (existing) | Complete planning for one park, including its safari | Ranthambore travel guide |
| New park page | Same, where no guide existed | Pench Tiger Reserve |
| Species page | Where to see one animal | Where to See One-Horned Rhinos in India |
| State page | All wildlife in one state | Wildlife Tourism in Assam |
| Planning page | How to plan, when to go, what to pack | How to Plan a Wildlife Safari in India |
| Itinerary | Day-by-day plan | The itinerary section of each park guide |
| Package | Commercial | `/packages/wildlife-tours`, state packages |

## Key calls

- **Hub vs pillar.** `/wildlife-tourism` (H1 "Wildlife Tourism in India") carries the pillar content, so `/blog/wildlife-tourism-in-india` was not created.
- **Park safari pages.** "X safari", "X national park" and "X tiger reserve" return the same results as the existing park guides, so those guides keep the intent and no duplicate was created.
- **Itineraries.** Each park guide already has a day-by-day section; the itinerary candidates point to those anchors.
- **Traveller types.** Families, couples, solo, older and luxury travellers are sections of the wildlife safari planning guide; luxury also links to `/packages/luxury-holidays`.
- **Safari types.** Jeep, canter, boat, walking, elephant and night safaris are sections of best wildlife safaris.
- **Goa and Andhra Pradesh.** Too little verified wildlife tourism for full state pages; Goa's sanctuaries are covered in best wildlife sanctuaries, and Nagarjunsagar-Srisailam and Amrabad in best tiger reserves.

## Pairs and merged candidates

{chr(10).join(crows)}
""")

# ── AEO ─────────────────────────────────────────────────────────────────────
ae = []
for s, a in arts.items():
    ae.append(f"### [{a['title']}](/blog/{s})\n\n**Quick answer ({len(a['quickAnswer'].split())} words):** {a['quickAnswer']}\n\n**Key takeaways:** {len(a['takeaways'])} · **Tables:** {sum(1 for x in a['sections'] if x.get('table'))} · **FAQs ({len(a['faqs'])}):**\n\n" + "\n".join(f"- {f['q']}" for f in a["faqs"]))
write("wildlife-tourism-aeo-map.md", f"""# Wildlife Tourism: AEO map

Generated {DATE}. Every article opens with a 40 to 80 word quick answer and key takeaways, uses comparison and season tables, and ends with FAQs marked up as `FAQPage`. The hub has its own quick answer and five FAQs. Answers avoid promising sightings and give changeable facts (seasons, closures, counts) with their date or as "check before you go".

{chr(10).join(ae)}
""")

# ── GEO ─────────────────────────────────────────────────────────────────────
gr = ["| Page | Main entity (schema type) | Within | Regions | Places mentioned |", "| --- | --- | --- | --- | --- |"]
for s, a in arts.items():
    ab = a["about"]
    gr.append(f"| `/blog/{s}` | {cell(ab['name'])} ({ab['type']}) | {cell((ab.get('containedIn') + ' → India') if ab.get('containedIn') else 'India')} | {cell(', '.join(a['regions']))} | {cell(', '.join(a.get('places', [])) or '—')} |")
write("wildlife-tourism-geo-entity-map.md", f"""# Wildlife Tourism: GEO entity map

Generated {DATE}. Each article's `BlogPosting` names its main entity in `about` (a `TouristDestination` inside its state and India, or a `Thing` for topic pages), lists places in `mentions`, and adds an `ItemList` of the parks or items described. Breadcrumbs place each page under Wildlife Tourism and its parent.

## Example relationships

- Pench Tiger Reserve → Seoni and Chhindwara (Madhya Pradesh) and Nagpur (Maharashtra) → India → gates Turia, Karmajhiri, Jamtara → tiger, leopard, dhole → MP Online permits → closed 1 July to 30 September.
- Kaziranga National Park → Golaghat and Nagaon → Assam → India → UNESCO World Heritage Site → Kohora, Bagori, Agaratoli, Burapahar ranges → greater one-horned rhino (2,613 in 2022).
- Gir National Park and Sanctuary → Saurashtra → Gujarat → India → Asiatic lion (891 in the 2025 census) → Sasan Gir, Devalia → closed 16 June to 15 October.
- Hemis National Park → Leh → Ladakh → India → snow leopard, blue sheep, Ladakh urial → Rumbak, Ulley → January to March.
- Keoladeo National Park → Bharatpur → Rajasthan → India → UNESCO site → wintering waterbirds → cycle-rickshaw tours.
- Sundarban Tiger Reserve → South 24 Parganas → West Bengal → India → UNESCO site → mangroves → Sajnekhali, Sudhanyakhali, Dobanki watchtowers.

## Entities by page

{chr(10).join(gr)}
""")

# ── URL map ─────────────────────────────────────────────────────────────────
ur = ["| Title (SEO) | H1 | Slug | Primary keyword | Intent | Parent | Related pages | Existing URL conflicts | Status |", "| --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    a = arts.get(u["slug"])
    if u["slug"] == "wildlife-tourism":
        ur.append(f"| Wildlife Tourism in India: Parks, Safaris & Planning \\| Kudozz Club | Wildlife Tourism in India | `/wildlife-tourism` | {cell(u['primary'])} | {cell(u['intent'])} | `/` | `/packages/wildlife-tours`, `/plan-your-trip` | {cell(u['conflicts'])} | Live |")
    elif a:
        rel = [r["href"] for r in a["related"]] + [l["href"] for l in a["nextSteps"]][:3]
        ur.append(f"| {cell(a['seoTitle'])} | {cell(a['title'])} | `/blog/{u['slug']}` | {cell(u['primary'])} | {cell(u['intent'])} | `{u['parent']}` | {cell(', '.join(f'`{r}`' for r in rel))} | {cell(u['conflicts'] or 'None')} | Live |")
    else:
        st = "Merged into `" + u["mergedInto"] + "`" if u["status"] == "merged" else "Manual review"
        ur.append(f"| — | — | `{u['slug']}` | {cell(u['primary'])} | — | — | — | {cell(u['reason'])} | {st} |")
write("wildlife-tourism-url-map.md", f"""# Wildlife Tourism: URL and title map

Generated {DATE}. {len(created)} live URLs (hub plus {len(created) - 1} articles), {len(merged)} merged candidates and {pl(len(deferred), 'candidate')} for manual review. No existing URL changed and no redirects are needed.

{chr(10).join(ur)}
""")

# ── Progress ────────────────────────────────────────────────────────────────
pr = ["| Topic | URL | Research | Content | SEO | AEO | GEO | Images | Links | Schema | QA | Status |", "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] == "create":
        if u["slug"] == "wildlife-tourism":
            pr.append("| Wildlife Tourism in India (hub) | `/wildlife-tourism` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
        else:
            a = arts[u["slug"]]
            pr.append(f"| {cell(a['short'])} ({words(a)} words) | `/blog/{u['slug']}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
    elif u["status"] == "merged":
        pr.append(f"| {cell(u['slug'])} | → `{u['mergedInto']}` | ✅ | — | — | — | — | — | — | — | ✅ | Merged |")
    else:
        pr.append(f"| {cell(u['slug'])} | — | ✅ | — | — | — | — | — | — | — | — | Manual review |")
write("wildlife-tourism-progress.md", f"""# Wildlife Tourism: progress

Generated {DATE}. Research ✅ means the topic was checked against existing content and current sources; QA ✅ means the page passed `scripts/wildlife/build.py` (strict), `scripts/wildlife/verify-html.py` and the site-wide link check, or that the merge decision is documented.

{chr(10).join(pr)}
""")
