"""Generate the Nature Travel docs (docs/nature-travel-*.md) from
scripts/nature/url-map.json, scripts/nature/guide-links.json and the
article JSON files. Run after build.py:

  python3 scripts/nature/report.py

The audit, SERP research and final report are written by hand.
"""
import json, os, re, collections

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DOCS = os.path.join(ROOT, "docs")
CONTENT = os.path.join(ROOT, "src/content/nature")
DATE = "2026-09-27"
urlmap = json.load(open(os.path.join(HERE, "url-map.json")))
arts = {f[:-5]: json.load(open(os.path.join(CONTENT, f))) for f in sorted(os.listdir(CONTENT)) if f.endswith(".json")}
guide_links = json.load(open(os.path.join(HERE, "guide-links.json")))
created = [u for u in urlmap if u["status"] == "create"]
merged = [u for u in urlmap if u["status"] == "merged"]
nopage = [u for u in urlmap if u["status"] == "no-page"]
HUB_SRC = open(os.path.join(ROOT, "src/app/nature-travel/page.tsx")).read()


def url(u):
    return "/nature-travel" if u["slug"] == "nature-travel" else f"/blog/{u['slug']}"


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


def hrefs(a):
    out = [a["parent"]["href"]] + [l["href"] for l in a["nextSteps"]] + [r["href"] for r in a["related"]]
    for s in a["sections"]:
        for it in s.get("items", []):
            out += [l["href"] for l in it.get("links", [])]
    return out


def write(name, text):
    open(os.path.join(DOCS, name), "w").write(text.rstrip() + "\n")
    print("wrote", name)


links_out = {s: hrefs(a) for s, a in arts.items()}
links_in = collections.Counter()
for s, hs in links_out.items():
    for h in set(hs):
        m = re.match(r"/blog/([a-z0-9-]+)", h)
        if m and m.group(1) in arts and m.group(1) != s:
            links_in[m.group(1)] += 1
guide_in = collections.Counter(v["slug"] for v in guide_links.values())
children = collections.defaultdict(list)
for u in created:
    children[u["parent"]].append(url(u))
merged_into = collections.defaultdict(list)
for u in merged:
    merged_into[u["mergedInto"].split("#")[0]].append(u["slug"])

arts_set = set(arts)


def decision(u):
    """KEEP / MERGE / UPDATE EXISTING / DO NOT CREATE, as in the brief (no REDIRECTs were needed)."""
    if u["status"] == "create":
        return "KEEP"
    if u["status"] == "no-page":
        return "DO NOT CREATE"
    t = u["mergedInto"].split("#")[0]
    if t == "/nature-travel" or (t.startswith("/blog/") and t[6:] in arts_set):
        return "MERGE"
    return "UPDATE EXISTING"


# ── Inventory ───────────────────────────────────────────────────────────────
inv = []
for g in sorted({u["group"] for u in urlmap}):
    rows = [u for u in urlmap if u["group"] == g]
    inv.append(f"### {g}\n\n| Candidate | Decision | URL / served by | Reason |\n| --- | --- | --- | --- |")
    for u in rows:
        d = decision(u)
        if d == "KEEP":
            inv.append(f"| {cell(u['title'])} | Approved and published | `{url(u)}` | {cell(u['intent'])}; {cell(u['kind'])} page |")
        elif d == "DO NOT CREATE":
            inv.append(f"| `{u['slug']}` | Not created | `{u['mergedInto'] or '—'}` | {cell(u['reason'])} |")
        else:
            inv.append(f"| `{u['slug']}` | {d.title()} | `{u['mergedInto']}` | {cell(u['reason'])} |")
    inv.append("")
write("nature-travel-inventory.md", f"""# Nature Travel: master content inventory

Generated {DATE} by `scripts/nature/report.py` from `scripts/nature/url-map.json`.

{len(urlmap)} candidate topics were reviewed across the brief's groups: {len(created)} approved (the hub and {len(created) - 1} articles), {len(merged)} merged into an approved page or served by an existing guide, and {len(nopage)} not created. A page was approved only where it had a distinct travel intent, enough verifiable information and linking value, and no existing page already served it (see `nature-travel-existing-site-audit.md` and `nature-travel-cannibalization.md`).

{chr(10).join(inv)}
""")

# ── Keyword map ─────────────────────────────────────────────────────────────
km = ["| URL | H1 | Primary keyword | Secondary keywords | Long-tail keywords | PAA / question keywords | Search intent | Target audience | Parent topic | Child topics | Related entities | Existing page relationship | Internal links in | Internal links out | Canonical | Schema |",
      "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in created:
    if u["slug"] == "nature-travel":
        km.append(f"| `/nature-travel` | Nature Travel in India | {cell(u['primary'])} | {cell(', '.join(u['secondary']))} | nature places to visit in India; nature trip ideas | What are the best nature destinations in India?; When is the best time for nature travel in India? | {cell(u['intent'])} | All nature travellers | India | {len(children['/nature-travel'])} landscape, regional, state, theme, traveller and planning pages | India; Himalaya; Western Ghats; Northeast India | Replaces the merged core pillars | Footer, all {len(arts)} articles | All {len(arts)} articles, 30 destination guides, 12 cross-cluster links, packages | https://club.kudozz.in/nature-travel | CollectionPage, ItemList, BreadcrumbList, FAQPage |")
        continue
    a = arts[u["slug"]]
    sec = a["secondaryKeywords"]
    rel = merged_into.get(url(u), [])
    rel_txt = (f"Serves merged candidates: {', '.join(rel[:4])}" + (" and more" if len(rel) > 4 else "")) if rel else (u["conflicts"] or "New page; links to the existing guides")
    km.append(
        f"| `{url(u)}` | {cell(a['title'])} | {cell(u['primary'])} | {cell(', '.join(sec[:2]))} | {cell(', '.join(sec[2:]) or '—')} | {cell('; '.join(f['q'] for f in a['faqs'][:3]))} | {cell(u['intent'])} | {cell(', '.join(a['travellers']))} | `{u['parent']}` | {cell(', '.join(f'`{c}`' for c in children.get(url(u), [])) or '—')} | {cell(', '.join(a.get('places', [])[:6]) or a['about']['name'])} | {cell(rel_txt)} | {links_in[u['slug']] + 1 + guide_in[u['slug']]} (hub{', ' + str(guide_in[u['slug']]) + ' guide pointers' if guide_in[u['slug']] else ''}) | {len(set(links_out[u['slug']]))} | https://club.kudozz.in/blog/{u['slug']} | BlogPosting, BreadcrumbList, FAQPage, ItemList |")
write("nature-travel-keyword-map.md", f"""# Nature Travel: keyword map

Generated {DATE}. One primary keyword per URL. "Internal links in" counts the hub, other nature articles and guide pointers; package blocks and other clusters add more. PAA-style questions are the article's own FAQ questions, written from the question patterns in current results (see `nature-travel-serp-research.md`).

{chr(10).join(km)}

## Merged candidates

| Candidate keyword | Decision | Served by |
| --- | --- | --- |
{chr(10).join(f"| {cell(u['primary'])} | {decision(u)} | `{u['mergedInto']}` |" for u in merged)}
""")

# ── AEO ─────────────────────────────────────────────────────────────────────
ae = []
for s, a in arts.items():
    ae.append(f"### [{a['title']}](/blog/{s})\n\n**Quick answer ({len(a['quickAnswer'].split())} words):** {a['quickAnswer']}\n\n**At a glance:** {len(a['takeaways'])} takeaways · {sum(1 for x in a['sections'] if x.get('table'))} tables · **FAQs ({len(a['faqs'])}):**\n\n" + "\n".join(f"- {f['q']}" for f in a["faqs"]))
write("nature-travel-aeo-map.md", f"""# Nature Travel: AEO map

Generated {DATE}. Every article answers its primary question in a 40 to 80 word quick answer near the top, follows with key takeaways, uses tables for comparisons, distances, months and routes, and ends with FAQs marked up as `FAQPage`. The hub answers "What are the best nature destinations in India?", "When is the best time for nature travel in India?", "Where can I see waterfalls in India?", "What is eco tourism in India?" and "Which is the best state for nature lovers?" directly. Blooms, water flow and sightings are never promised, drive times are approximate, and permits, park openings and seasonal closures are framed as "check before you go".

{chr(10).join(ae)}
""")

# ── GEO ─────────────────────────────────────────────────────────────────────
gr = ["| Page | Main entity (schema type) | Within | Regions | Places mentioned |", "| --- | --- | --- | --- | --- |"]
for s, a in arts.items():
    ab = a["about"]
    gr.append(f"| `/blog/{s}` | {cell(ab['name'])} ({ab['type']}) | {cell((ab.get('containedIn') + ' → India') if ab.get('containedIn') else 'India')} | {cell(', '.join(a['regions']))} | {cell(', '.join(a.get('places', [])) or '—')} |")
write("nature-travel-geo-entity-map.md", f"""# Nature Travel: GEO entity map

Generated {DATE}. Each article's `BlogPosting` names its main entity in `about` (a `TouristDestination` for a state, region or route, or a `Thing` for a landscape or topic), lists places in `mentions`, and adds an `ItemList`. Breadcrumbs place every page under Nature Travel and its parent. Terminology follows geography: shola grassland, bugyal (Himalayan meadow), laterite plateau, coastal lagoon, river island, limestone cave; protected-area names follow official usage.

## Example relationship chains

- India → Western Ghats (UNESCO 2012; biodiversity hotspot with Sri Lanka) → Kerala → Silent Valley (rainforest) → Eravikulam (shola grassland, Nilgiri tahr, Anamudi) → Athirappilly (waterfall) → Vembanad (Ramsar wetland) → Kerala nature itinerary → `/packages/kerala` → Plan My Trip.
- India → Western Ghats → Karnataka → Jog Falls (Sharavathi) → Agumbe (rainforest) → Kudremukh (shola grassland; forest booking) → Dandeli (Kali river) → Western Ghats nature itinerary → `/packages/karnataka`.
- India → Northeast → Meghalaya → Sohra (waterfalls, Mawsmai cave) → Nongriat (living root bridges; UNESCO Tentative List 2022) → Dawki (Umngot river) → Meghalaya nature itinerary → `/packages/meghalaya`.
- India → Himalaya → Uttarakhand → Valley of Flowers (Nanda Devi and Valley of Flowers National Parks, UNESCO) → Chopta and Dayara (bugyals) → Binsar and Munsiyari (Kumaon forests) → `/packages/uttarakhand`.
- India → Himalaya → Himachal Pradesh → Great Himalayan National Park (UNESCO 2014) → Tirthan → Chandratal → Spiti and Pin Valley (cold desert) → `/packages/himachal-pradesh`.
- India → East → Odisha → Chilika (coastal lagoon, Ramsar; Irrawaddy dolphins) → Bhitarkanika (mangroves) → Simlipal (sal forest) → `/packages/odisha`.
- India → Central → Madhya Pradesh → Bhedaghat (Narmada marble gorge) → Pachmarhi (Satpura range) → Kanha (Wildlife cluster) → `/packages/madhya-pradesh`.

Cross-topic links: nature → Wildlife (parks, birding, safaris, responsible wildlife tourism) → Hills (hill towns, monsoon hills, mountain destinations) → Adventure (treks, camping, rafting) → Heritage (rock-cut caves, tribal tourism) → Beach (coasts and islands).

## Entities by page

{chr(10).join(gr)}
""")

# ── Cannibalisation ─────────────────────────────────────────────────────────
COMPARE = [
    ("Nature travel vs nature tourism vs nature trips in India", "Same result set", "MERGE", "All served by `/nature-travel`"),
    ("Best nature destinations vs natural places to visit vs nature getaways", "Same listicle intent", "MERGE", "`/blog/best-nature-destinations-in-india`"),
    ("Best nature destinations vs natural wonders", "Places to go vs geological and natural phenomena", "KEEP", "Linked both ways"),
    ("Birdwatching in India vs nature birding pages", "Wildlife cluster owns birding", "UPDATE EXISTING", "`/blog/birdwatching-in-india` stays canonical; lakes and forest pages link to it"),
    ("Forest destinations vs national parks and sanctuaries", "Habitats and landscapes vs parks, species and safaris", "KEEP", "Forest page links to Wildlife for sightings"),
    ("Valleys and Himalayan nature vs best mountain destinations and hill stations", "Landscapes vs hill towns and high-altitude destinations", "KEEP", "Linked both ways; Hills owns hill towns"),
    ("Monsoon nature travel vs monsoon hill stations and monsoon treks", "Same seasonal intent", "MERGE", "Served by monsoon hill stations, the waterfalls page and the Western Ghats page"),
    ("Summer and winter nature travel", "Seasonal rows, not separate intents", "MERGE", "Sections of `/blog/best-time-for-nature-travel-in-india`"),
    ("Monthly nature pages", "Thin, near-duplicate", "DO NOT CREATE", "Month table in the best-time page"),
    ("Natural caves vs rock-cut caves", "Geology vs architecture", "KEEP", "Heritage owns `/blog/rock-cut-caves-in-india`; linked both ways"),
    ("Village tourism vs tribal tourism", "Rural nature stays vs culture-led visits", "KEEP", "Linked both ways"),
    ("Budget and luxury nature trips vs retreats", "Same stay-selection intent", "MERGE", "Budget and luxury sections of `/blog/nature-retreats-in-india`"),
    ("Solo and first-time nature trips vs planning", "Same planning intent", "MERGE", "Section of `/blog/how-to-plan-a-nature-trip-in-india`"),
    ("Nature photography vs wildlife photography", "Landscapes vs animals", "KEEP", "Linked both ways"),
    ("Nature state pages vs hill-station and wildlife state pages", "Landscape comparison vs hill towns vs parks", "KEEP", "Created only for seven states with distinct nature intent"),
    ("Destination guides vs nature pages", "Place intent vs comparison intent", "UPDATE EXISTING", "Guides stay canonical; 88 guides get a pointer"),
    ("Beaches, islands and marine parks", "Beach and Adventure clusters own them", "UPDATE EXISTING", "Marine biodiversity is a section of the biodiversity page"),
    ("Treks, rafting and camping", "Adventure cluster owns activities", "UPDATE EXISTING", "Nature links to Adventure; no activity pages created"),
    ("Itineraries vs packages", "Informational plan vs commercial page", "KEEP", "No prices on itineraries; packages carry the quote CTA"),
]
rows = ["| Topic comparison | Overlap | Decision | Action |", "| --- | --- | --- | --- |"] + [f"| {cell(a)} | {cell(b)} | **{c}** | {cell(d)} |" for a, b, c, d in COMPARE]
cand = ["| Candidate | Decision | Now served by | Reason |", "| --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] != "create":
        cand.append(f"| `{u['slug']}` | {decision(u)} | `{u['mergedInto'] or '—'}` | {cell(u['reason'])} |")
cnt = collections.Counter(decision(u) for u in urlmap)
write("nature-travel-cannibalization.md", f"""# Nature Travel: cannibalisation control

Generated {DATE}. Decisions use the brief's vocabulary: **KEEP** (a separate page with a distinct intent), **MERGE** (served by an approved cluster page or section), **UPDATE EXISTING** (an existing guide stays canonical and gets a cluster pointer), **REDIRECT** and **DO NOT CREATE**.

Totals: KEEP {cnt['KEEP']}, MERGE {cnt['MERGE']}, UPDATE EXISTING {cnt['UPDATE EXISTING']}, DO NOT CREATE {cnt['DO NOT CREATE']}, REDIRECT 0. **No redirects are required**: no existing URL changed, and no merged candidate URL was ever published.

## Explicit comparisons

{chr(10).join(rows)}

## Every candidate not created

{chr(10).join(cand)}
""")

# ── URL map ─────────────────────────────────────────────────────────────────
ur = ["| Title (SEO) | H1 | URL | Primary keyword | Kind | Parent | Status |", "| --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    a = arts.get(u["slug"])
    if u["slug"] == "nature-travel":
        ur.append("| Nature Travel in India: Forests, Waterfalls, Lakes \\| Kudozz Club | Nature Travel in India | `/nature-travel` | nature travel in India | hub | `/` | Live |")
    elif a:
        ur.append(f"| {cell(a['seoTitle'])} | {cell(a['title'])} | `/blog/{u['slug']}` | {cell(u['primary'])} | {u['kind']} | `{u['parent']}` | Live |")
    else:
        ur.append(f"| — | — | `{u['slug']}` (not created) | {cell(u['primary'])} | — | — | {decision(u).title()}{' → `' + u['mergedInto'] + '`' if u['mergedInto'] else ''} |")
write("nature-travel-url-map.md", f"""# Nature Travel: URL and title map

Generated {DATE}. {len(created)} live URLs (hub plus {len(created) - 1} articles), {len(merged)} merged candidates and {len(nopage)} not created. Clean `/blog/<slug>` URLs on the existing route, self-referencing canonicals, no existing URL changed, no redirects needed. One new commercial URL, `/packages/nature-holidays`, was added as a travel style.

{chr(10).join(ur)}
""")

# ── Internal linking ────────────────────────────────────────────────────────
orphans = [s for s in arts if f'"{s}"' not in HUB_SRC and links_in[s] == 0 and guide_in[s] == 0]
not_on_hub = [s for s in arts if f'"{s}"' not in HUB_SRC]
pointer_rows = "\n".join(f"| `/blog/{g}` | `/blog/{v['slug']}` |" for g, v in sorted(guide_links.items()))
cross = ["9 Wildlife pages (birdwatching, responsible wildlife tourism, national parks, wildlife photography, and the Kerala, Karnataka, Uttarakhand, Odisha and Madhya Pradesh wildlife pages) → lakes, eco tourism, forests, photography and state nature pages", "7 Hill Station pages (monsoon, mountain destinations, Meghalaya, Kerala, Karnataka, South India, responsible mountain travel) → waterfalls, Himalayan nature, state nature pages, Western Ghats and eco tourism", "4 Adventure pages (monsoon treks, camping, Meghalaya, trekking) → waterfalls, retreats, Meghalaya and valleys", "2 Heritage pages (rock-cut caves, tribal tourism) → natural caves and village tourism", "`/blog/beach-honeymoon-destinations-in-india` → nature getaways for couples"]
write("nature-travel-internal-linking.md", f"""# Nature Travel: internal linking

Generated {DATE}.

## Architecture

India → `/nature-travel` (hub) → landscape (forests, waterfalls, lakes, rivers, valleys, caves) or region (Himalaya, Western Ghats, Northeast) → state nature page → destination guide → things to do → Wildlife, Hills or Adventure page → itinerary → tour package → `/plan-your-trip`.

Every article has two calls to action ("Planning a nature trip?" after the key takeaways, and "Want the forests, waterfalls and viewpoints woven into one trip?" before the FAQs), next steps that follow this chain, related reading, and a sidebar of related nature guides.

## Links added into the cluster

| Source | Links |
| --- | --- |
| Footer ("Nature Travel") | Hub, site-wide (the header already has ten items; see the final report) |
| Hub `/nature-travel` | All {len(arts) - len(not_on_hub)} of {len(arts)} articles as cards, 30 destination guides, 12 cross-cluster links, 9 seasonal and traveller links, 8 state packages, style and combo packages |
| Guide pointers (`GuideTripCTA`: "Love the outdoors? See our guide to …") | {len(guide_links)} existing guides |
| State package pages ("Nature in <state>") | 23 state and UT package pages |
| `/packages/nature-holidays` (new travel style) | Every nature article |
| Family, honeymoon, luxury, budget, wildlife, adventure and hill-station style pages ("Nature trips for …") | 2 to 3 articles each |
| `/packages/northeast-india` | Northeast, Meghalaya and Meghalaya itinerary guides |
| Other clusters | {len(cross)} groups of contextual links (below) |
| Blog index | "Nature Travel" category |
| `llms.txt` and `sitemap.xml` | Hub and all articles |

## Orphan check

Articles not linked from the hub, another nature article or a guide pointer: {', '.join(orphans) or 'none'}. Articles not shown as a card on the hub: {', '.join(not_on_hub) or 'none'}.

## Cross-cluster links

{chr(10).join('- ' + c for c in cross)}

## Guide pointers

| Guide | Points to |
| --- | --- |
{pointer_rows}
""")

# ── Progress ────────────────────────────────────────────────────────────────
pr = ["| Topic | URL | Research | Content | SEO | AEO | GEO | Images | Links | Schema | QA | Status |", "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    d = decision(u)
    if d == "KEEP":
        if u["slug"] == "nature-travel":
            pr.append("| Nature Travel in India (hub) | `/nature-travel` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
        else:
            a = arts[u["slug"]]
            pr.append(f"| {cell(a['short'])} ({words(a)} words) | `/blog/{u['slug']}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
    elif d == "DO NOT CREATE":
        pr.append(f"| {cell(u['slug'])} | — | ✅ | — | — | — | — | — | — | — | — | Not created |")
    else:
        pr.append(f"| {cell(u['slug'])} | → `{u['mergedInto']}` | ✅ | — | — | — | — | — | ✅ | — | ✅ | {d.title()} |")
MANUAL = [
    ("Valley of Flowers", "Opened 1 June in 2026; peak bloom roughly mid-July to mid-August; confirm opening, closing and permit rules each year."),
    ("Eravikulam calving closure", "Closes for a few weeks early each year; confirm dates with the Kerala forest department."),
    ("Neelakurinji", "The Eravikulam bloom is expected around 2030; confirm nearer the time."),
    ("Living root bridges", "On UNESCO's Tentative List (2022); nomination dossier submitted January 2026. Update the pages if inscribed."),
    ("Ramsar count", "Pages say 'about a hundred' (98 in February 2026, 101 reported by August 2026); update with the official figure."),
    ("Karnataka trek bookings", "Kudremukh and other Ghats treks moved to online forest bookings; confirm the current portal and rules."),
    ("Seasonal park openings", "Simlipal, Bhitarkanika, Silent Valley and tiger-reserve core zones open seasonally; confirm dates each year."),
    ("Permits", "Inner Line Permits, Dzongu and Gurez access, and Protected Area Permits change; re-check before each season."),
    ("Monsoon safety", "Himachal (2023, 2025) and Wayanad (2024) saw severe monsoon disasters; keep advisories current."),
    ("Regional flights", "The Jeypore flight mention is hedged ('where one is scheduled'); verify before relying on it."),
    ("Mobile rendering", "Review the hub, one article and the package blocks on a phone; see the final report for what was checked in this session."),
]
write("nature-travel-progress.md", f"""# Nature Travel: progress

Generated {DATE}. Research ✅ means the topic was checked against existing content and current sources; QA ✅ means the page passed `scripts/nature/build.py` (strict), `scripts/nature/verify-html.py` and the site-wide link check, or that the merge decision is documented.

{chr(10).join(pr)}

## Items needing manual verification or follow-up

| Item | Note |
| --- | --- |
{chr(10).join(f"| {a} | {b} |" for a, b in MANUAL)}
""")
