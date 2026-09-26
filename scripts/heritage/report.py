"""Generate the Heritage & Cultural Tourism docs (docs/heritage-cultural-*.md) from
scripts/heritage/url-map.json, scripts/heritage/guide-links.json and the
article JSON files. Run after build.py:

  python3 scripts/heritage/report.py

The audit, SERP research and final report are written by hand.
"""
import json, os, re, collections

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DOCS = os.path.join(ROOT, "docs")
CONTENT = os.path.join(ROOT, "src/content/heritage")
DATE = "2026-09-26"
urlmap = json.load(open(os.path.join(HERE, "url-map.json")))
arts = {f[:-5]: json.load(open(os.path.join(CONTENT, f))) for f in sorted(os.listdir(CONTENT)) if f.endswith(".json")}
guide_links = json.load(open(os.path.join(HERE, "guide-links.json")))
created = [u for u in urlmap if u["status"] == "create"]
merged = [u for u in urlmap if u["status"] == "merged"]
nopage = [u for u in urlmap if u["status"] == "no-page"]
HUB_SRC = open(os.path.join(ROOT, "src/app/heritage-cultural-tourism/page.tsx")).read()


def url(u):
    return "/heritage-cultural-tourism" if u["slug"] == "heritage-cultural-tourism" else f"/blog/{u['slug']}"


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
    if t == "/heritage-cultural-tourism" or (t.startswith("/blog/") and t[6:] in arts_set):
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
write("heritage-cultural-inventory.md", f"""# Heritage & Cultural Tourism: master content inventory

Generated {DATE} by `scripts/heritage/report.py` from `scripts/heritage/url-map.json`.

{len(urlmap)} candidate topics were reviewed across the brief's groups: {len(created)} approved (the hub and {len(created) - 1} articles), {len(merged)} merged into an approved page or served by an existing guide, and {len(nopage)} not created. A page was approved only where it had a distinct travel intent, enough verifiable information and linking value, and no existing page already served it (see `heritage-cultural-existing-site-audit.md` and `heritage-cultural-cannibalization.md`).

{chr(10).join(inv)}
""")

# ── Keyword map ─────────────────────────────────────────────────────────────
km = ["| URL | H1 | Primary keyword | Secondary keywords | Long-tail keywords | PAA / question keywords | Search intent | Target audience | Parent topic | Child topics | Related entities | Existing page relationship | Internal links in | Internal links out | Canonical | Schema |",
      "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in created:
    if u["slug"] == "heritage-cultural-tourism":
        km.append(f"| `/heritage-cultural-tourism` | Heritage & Cultural Tourism in India | {cell(u['primary'])} | {cell(', '.join(u['secondary']))} | heritage places to visit in India; heritage trip India | What is heritage tourism in India?; How many UNESCO sites does India have? | {cell(u['intent'])} | All heritage and culture travellers | India | {len(children['/heritage-cultural-tourism'])} pillar, state and planning pages | India; UNESCO; ASI | Replaces the merged core pillars | Header, footer, all {len(arts)} articles | All {len(arts)} articles, 26 destination guides, packages | https://club.kudozz.in/heritage-cultural-tourism | CollectionPage, ItemList, BreadcrumbList, FAQPage |")
        continue
    a = arts[u["slug"]]
    sec = a["secondaryKeywords"]
    rel = merged_into.get(url(u), [])
    rel_txt = (f"Serves merged candidates: {', '.join(rel[:4])}" + (" and more" if len(rel) > 4 else "")) if rel else (u["conflicts"] or "New page; links to the existing guides")
    km.append(
        f"| `{url(u)}` | {cell(a['title'])} | {cell(u['primary'])} | {cell(', '.join(sec[:2]))} | {cell(', '.join(sec[2:]) or '—')} | {cell('; '.join(f['q'] for f in a['faqs'][:3]))} | {cell(u['intent'])} | {cell(', '.join(a['travellers']))} | `{u['parent']}` | {cell(', '.join(f'`{c}`' for c in children.get(url(u), [])) or '—')} | {cell(', '.join(a.get('places', [])[:6]) or a['about']['name'])} | {cell(rel_txt)} | {links_in[u['slug']] + 1 + guide_in[u['slug']]} (hub{', ' + str(guide_in[u['slug']]) + ' guide pointers' if guide_in[u['slug']] else ''}) | {len(set(links_out[u['slug']]))} | https://club.kudozz.in/blog/{u['slug']} | BlogPosting, BreadcrumbList, FAQPage, ItemList |")
write("heritage-cultural-keyword-map.md", f"""# Heritage & Cultural Tourism: keyword map

Generated {DATE}. One primary keyword per URL. "Internal links in" counts the hub, other heritage articles and guide pointers; package blocks and other clusters add more. PAA-style questions are the article's own FAQ questions, written from the question patterns in current results (see `heritage-cultural-serp-research.md`).

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
write("heritage-cultural-aeo-map.md", f"""# Heritage & Cultural Tourism: AEO map

Generated {DATE}. Every article answers its primary question in a 40 to 80 word quick answer near the top, follows with key takeaways, uses tables for lists, routes, closures and seasons, and ends with FAQs marked up as `FAQPage`. The hub answers "What is heritage tourism in India?" in its own quick answer and five FAQs. Where historians or archaeologists disagree (Lothal's dockyard, Bhimbetka's dates, the 'seven cities' of Delhi), the answer says so rather than choosing one. Superlatives are only used where a reliable source supports them, and changeable facts (timings, closures, festival dates) are framed as "check before you go".

{chr(10).join(ae)}
""")

# ── GEO ─────────────────────────────────────────────────────────────────────
gr = ["| Page | Main entity (schema type) | Within | Regions | Places mentioned |", "| --- | --- | --- | --- | --- |"]
for s, a in arts.items():
    ab = a["about"]
    gr.append(f"| `/blog/{s}` | {cell(ab['name'])} ({ab['type']}) | {cell((ab.get('containedIn') + ' → India') if ab.get('containedIn') else 'India')} | {cell(', '.join(a['regions']))} | {cell(', '.join(a.get('places', [])) or '—')} |")
write("heritage-cultural-geo-entity-map.md", f"""# Heritage & Cultural Tourism: GEO entity map

Generated {DATE}. Each article's `BlogPosting` names its main entity in `about` (a `TouristAttraction` for a monument, a `TouristDestination` for a state, route or festival venue, or a `Thing` for a topic), lists places in `mentions`, and adds an `ItemList`. Breadcrumbs place every page under Heritage & Culture and its parent. UNESCO years follow the World Heritage List as of September 2026.

## Example relationship chains

- India → Uttar Pradesh → Agra → Taj Mahal (UNESCO 1983; Mughal; Shah Jahan) → Agra Fort (UNESCO) → Fatehpur Sikri (UNESCO) → Golden Triangle itinerary → `/packages/golden-triangle`.
- India → Rajasthan → Hill Forts of Rajasthan (UNESCO 2013: Amber, Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Jaisalmer) → Rajput kingdoms (Kachhwaha, Sisodia, Rathore, Bhati) → Rajasthan heritage itinerary → `/packages/rajasthan`.
- India → Maharashtra → Maratha Military Landscapes (UNESCO 2025; 11 forts in Maharashtra plus Gingee, Tamil Nadu) → Chhatrapati Shivaji Maharaj → Raigad → forts in Maharashtra → `/packages/maharashtra`.
- India → Gujarat → Harappan civilisation → Dholavira (UNESCO 2021) and Lothal (Tentative List) → Kutch → Rann Utsav → Gujarat heritage itinerary → `/packages/gujarat`.
- India → Karnataka → Vijayanagara empire → Hampi (UNESCO 1986) → Chalukyas → Badami, Aihole, Pattadakal (UNESCO 1987) → Hoysalas → Belur, Halebidu, Somanathapura (UNESCO 2023) → South India heritage itinerary → `/packages/karnataka`.
- India → Telangana → Qutb Shahi dynasty → Golconda, Qutb Shahi tombs, Charminar → Deccan sultanates (UNESCO Tentative List) → Kakatiya dynasty → Ramappa (UNESCO 2021) → `/packages/telangana`.
- India → Uttar Pradesh → Sarnath (UNESCO 2026) → Buddhist Circuit → `/packages/buddhist-circuit`.

## Entities by page

{chr(10).join(gr)}
""")

# ── Cannibalisation ─────────────────────────────────────────────────────────
COMPARE = [
    ("Heritage tourism vs cultural tourism vs heritage travel", "Same result set", "MERGE", "All served by `/heritage-cultural-tourism`"),
    ("Historical places vs heritage destinations vs Indian heritage sites", "Same listicle intent", "MERGE", "`/blog/historical-places-in-india`"),
    ("UNESCO sites in India vs historical places", "Official list vs curated places", "KEEP", "Each links to the other"),
    ("Monument pages (Taj Mahal, Red Fort, Qutub Minar, Humayun's Tomb, Amber, Mehrangarh) vs city guides", "Site visit planning vs the whole city", "KEEP", "Monument pages focus on the site; city guides get a pointer and link back"),
    ("Famous forts vs forts of Rajasthan vs forts in Maharashtra", "All-India list vs two regional groups with UNESCO status", "KEEP", "Regional pages are children of the forts pillar"),
    ("Palaces in India vs palace hotels / luxury stays", "Visiting palaces vs staying in them", "KEEP", "Palace page explains the difference and hands off to `/packages/luxury-holidays`"),
    ("Archaeological sites vs rock-cut caves vs UNESCO list", "Excavated sites vs carved monuments vs official list", "KEEP", "Cross-linked; each site has one canonical guide"),
    ("Temple architecture vs famous temples (spiritual cluster)", "Architecture for travellers vs worship and pilgrimage", "KEEP", "Linked both ways"),
    ("Heritage cities vs heritage walks", "Cities to visit vs how to explore on foot", "KEEP", "Walks page links to city guides and things-to-do articles"),
    ("Heritage walk in <city> / heritage of <city>", "Served by existing guides and things-to-do articles", "UPDATE EXISTING", "City guides get a pointer; no city pages created"),
    ("Handicrafts vs textile heritage", "All crafts vs weaves and embroidery", "KEEP", "Textiles is a child of handicrafts"),
    ("Individual crafts, dances, festivals", "Section-level intent", "MERGE", "Sections of the crafts, dance and festivals pillars"),
    ("Cultural festivals vs spiritual festivals", "Cultural fairs vs religious festivals and the Kumbh", "KEEP", "Linked both ways; Durga Puja and Navratri described once each"),
    ("Hornbill Festival and Rann Utsav vs cultural festivals", "Event planning (permits, stays) vs calendar", "KEEP", "Children of the festivals pillar"),
    ("Year-specific festival pages (e.g. Hornbill 2026)", "Would go stale", "DO NOT CREATE", "Evergreen pages with the current season's dates"),
    ("Golden Triangle itinerary vs `/packages/golden-triangle`", "Informational plan vs commercial page", "KEEP", "No prices on the itinerary; package gets a heritage block"),
    ("State heritage pages vs state travel guides vs state spiritual pages", "Monuments and culture vs general travel vs pilgrimage", "KEEP", "Linked both ways"),
    ("Heritage pages for states with thin demand", "Covered elsewhere", "DO NOT CREATE", "Bihar, Andhra Pradesh, Punjab, Haryana, Himachal Pradesh, Goa, Assam, Meghalaya, Sikkim, J&K"),
    ("Cultural heritage of India", "Educational intent", "DO NOT CREATE", "Hub and pillars cover the travel intent"),
    ("Traveller-type pages (heritage for families, couples, seniors)", "Near-duplicates of the planning guide", "MERGE", "Sections of `/blog/how-to-plan-a-heritage-trip-in-india`"),
]
rows = ["| Topic comparison | Overlap | Decision | Action |", "| --- | --- | --- | --- |"] + [f"| {cell(a)} | {cell(b)} | **{c}** | {cell(d)} |" for a, b, c, d in COMPARE]
cand = ["| Candidate | Decision | Now served by | Reason |", "| --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] != "create":
        cand.append(f"| `{u['slug']}` | {decision(u)} | `{u['mergedInto'] or '—'}` | {cell(u['reason'])} |")
cnt = collections.Counter(decision(u) for u in urlmap)
write("heritage-cultural-cannibalization.md", f"""# Heritage & Cultural Tourism: cannibalisation control

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
    if u["slug"] == "heritage-cultural-tourism":
        ur.append("| Heritage & Cultural Tourism in India: Sites & Culture \\| Kudozz Club | Heritage & Cultural Tourism in India | `/heritage-cultural-tourism` | heritage tourism in India | hub | `/` | Live |")
    elif a:
        ur.append(f"| {cell(a['seoTitle'])} | {cell(a['title'])} | `/blog/{u['slug']}` | {cell(u['primary'])} | {u['kind']} | `{u['parent']}` | Live |")
    else:
        ur.append(f"| — | — | `{u['slug']}` (not created) | {cell(u['primary'])} | — | — | {decision(u).title()}{' → `' + u['mergedInto'] + '`' if u['mergedInto'] else ''} |")
write("heritage-cultural-url-map.md", f"""# Heritage & Cultural Tourism: URL and title map

Generated {DATE}. {len(created)} live URLs (hub plus {len(created) - 1} articles), {len(merged)} merged candidates and {len(nopage)} not created. Clean `/blog/<slug>` URLs on the existing route, self-referencing canonicals, no existing URL changed, no redirects needed. One new commercial URL, `/packages/heritage-tours`, was added as a travel style.

{chr(10).join(ur)}
""")

# ── Internal linking ────────────────────────────────────────────────────────
orphans = [s for s in arts if f'"{s}"' not in HUB_SRC and links_in[s] == 0 and guide_in[s] == 0]
not_on_hub = [s for s in arts if f'"{s}"' not in HUB_SRC]
pointer_rows = "\n".join(f"| `/blog/{g}` | `/blog/{v['slug']}` |" for g, v in sorted(guide_links.items()))
cross = ["10 spiritual state pages → the matching heritage state page", "`/blog/famous-temples-in-india` → temple architecture", "`/blog/buddhist-circuit-in-india` → archaeological sites", "`/blog/buddhist-tourism-in-india` → rock-cut caves", "`/blog/spiritual-festivals-in-india` → cultural festivals", "`/blog/ranakpur-jain-temple` → heritage in Rajasthan", "`/blog/sufi-shrines-in-india` → Mughal monuments", "3 wildlife state pages (Rajasthan, Madhya Pradesh, Karnataka) → heritage state pages", "4 beach pages (Goa, Puducherry, Kerala, Odisha) → colonial heritage and state heritage pages", "`/blog/trekking-in-india`, `/blog/monsoon-treks-in-india` and `/blog/weekend-adventure-trips-from-mumbai` → forts in Maharashtra"]
write("heritage-cultural-internal-linking.md", f"""# Heritage & Cultural Tourism: internal linking

Generated {DATE}.

## Architecture

India → `/heritage-cultural-tourism` (hub) → heritage type (UNESCO, forts, palaces, archaeology, caves, architecture, cities, crafts, festivals) → state heritage page → city destination guide → monument page → things to do → itinerary → tour package → `/plan-your-trip`.

Every article has two calls to action ("Planning a heritage trip?" after the key takeaways, and "Want to explore India's heritage on a route built around you?" before the FAQs), next steps that follow this chain, related reading, and a sidebar of related heritage guides.

## Links added into the cluster

| Source | Links |
| --- | --- |
| Header ("Heritage") and footer ("Heritage & Culture") | Hub, site-wide |
| Hub `/heritage-cultural-tourism` | All {len(arts) - len(not_on_hub)} of {len(arts)} articles as cards, 26 destination guides, 8 state packages, style and combo packages |
| Guide pointers (`GuideTripCTA`: "Interested in the history? See our guide to …") | {len(guide_links)} existing guides |
| State package pages ("Heritage of <state>") | 22 state package pages |
| `/packages/heritage-tours` (new travel style) | Every heritage article |
| Family, luxury, group, honeymoon and budget style pages ("Heritage trips for …") | 3 to 4 articles each |
| `/packages/golden-triangle` and `/packages/buddhist-circuit` | Heritage guides for each circuit |
| Other clusters | Contextual links (below) |
| Blog index | "Heritage & Culture" category |
| `llms.txt` and `sitemap.xml` | Hub and all articles |

## Orphan check

Articles not linked from the hub, another heritage article or a guide pointer: {', '.join(orphans) or 'none'}. Articles not shown as a card on the hub: {', '.join(not_on_hub) or 'none'}.

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
        if u["slug"] == "heritage-cultural-tourism":
            pr.append("| Heritage & Cultural Tourism in India (hub) | `/heritage-cultural-tourism` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
        else:
            a = arts[u["slug"]]
            pr.append(f"| {cell(a['short'])} ({words(a)} words) | `/blog/{u['slug']}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
    elif d == "DO NOT CREATE":
        pr.append(f"| {cell(u['slug'])} | — | ✅ | — | — | — | — | — | — | — | — | Not created |")
    else:
        pr.append(f"| {cell(u['slug'])} | → `{u['mergedInto']}` | ✅ | — | — | — | — | — | ✅ | — | ✅ | {d.title()} |")
MANUAL = [
    ("Festival dates", "Hornbill Festival (1 to 10 December, fixed) and the Rann Utsav 2026 to 2027 season (1 November 2026 to 7 March 2027) are as announced; confirm the Rann Utsav season each year. Other festivals are described by month or lunar calendar."),
    ("UNESCO list", "45 sites as of September 2026 (Sarnath inscribed July 2026). Re-check after each World Heritage Committee session, usually in July."),
    ("Monument closures and timings", "Weekly closures (Taj Mahal Friday; Red Fort, Ajanta and Elephanta Monday; Ellora Tuesday; Lothal museum Friday) and Taj night viewing rules are as published by the ASI; confirm periodically."),
    ("Lothal interpretation", "The 'dockyard' reading is presented as the majority view with the debate noted; update if major new studies are published."),
    ("Calico Museum visits", "Guided visits by prior booking with limited numbers; confirm the current booking process."),
    ("Kalka-Shimla, Matheran and Nilgiri services", "Seasonal suspensions and landslide closures change; pages point readers to IRCTC."),
    ("Permits", "Nagaland ILP and foreign-national registration rules, and the Rann of Kutch permit, can change; re-check before each season."),
    ("Mobile rendering", "Review the hub, one article and the header menu on a phone; see the final report for what was checked in this session."),
]
write("heritage-cultural-progress.md", f"""# Heritage & Cultural Tourism: progress

Generated {DATE}. Research ✅ means the topic was checked against existing content and current sources; QA ✅ means the page passed `scripts/heritage/build.py` (strict), `scripts/heritage/verify-html.py` and the site-wide link check, or that the merge decision is documented.

{chr(10).join(pr)}

## Items needing manual verification or follow-up

| Item | Note |
| --- | --- |
{chr(10).join(f"| {a} | {b} |" for a, b in MANUAL)}
""")
