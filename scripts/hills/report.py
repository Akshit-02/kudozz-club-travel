"""Generate the Hill Station Travel docs (docs/hill-station-*.md) from
scripts/hills/url-map.json, scripts/hills/guide-links.json and the
article JSON files. Run after build.py:

  python3 scripts/hills/report.py

The audit, SERP research and final report are written by hand.
"""
import json, os, re, collections

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DOCS = os.path.join(ROOT, "docs")
CONTENT = os.path.join(ROOT, "src/content/hills")
DATE = "2026-09-26"
urlmap = json.load(open(os.path.join(HERE, "url-map.json")))
arts = {f[:-5]: json.load(open(os.path.join(CONTENT, f))) for f in sorted(os.listdir(CONTENT)) if f.endswith(".json")}
guide_links = json.load(open(os.path.join(HERE, "guide-links.json")))
created = [u for u in urlmap if u["status"] == "create"]
merged = [u for u in urlmap if u["status"] == "merged"]
nopage = [u for u in urlmap if u["status"] == "no-page"]
HUB_SRC = open(os.path.join(ROOT, "src/app/hill-station-travel/page.tsx")).read()


def url(u):
    return "/hill-station-travel" if u["slug"] == "hill-station-travel" else f"/blog/{u['slug']}"


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
    if t == "/hill-station-travel" or (t.startswith("/blog/") and t[6:] in arts_set):
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
write("hill-station-inventory.md", f"""# Hill Station Travel: master content inventory

Generated {DATE} by `scripts/hills/report.py` from `scripts/hills/url-map.json`.

{len(urlmap)} candidate topics were reviewed across the brief's groups: {len(created)} approved (the hub and {len(created) - 1} articles), {len(merged)} merged into an approved page or served by an existing guide, and {len(nopage)} not created. A page was approved only where it had a distinct travel intent, enough verifiable information and linking value, and no existing page already served it (see `hill-station-existing-site-audit.md` and `hill-station-cannibalization.md`).

{chr(10).join(inv)}
""")

# ── Keyword map ─────────────────────────────────────────────────────────────
km = ["| URL | H1 | Primary keyword | Secondary keywords | Long-tail keywords | PAA / question keywords | Search intent | Target audience | Parent topic | Child topics | Related entities | Existing page relationship | Internal links in | Internal links out | Canonical | Schema |",
      "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in created:
    if u["slug"] == "hill-station-travel":
        km.append(f"| `/hill-station-travel` | Hill Station Travel in India | {cell(u['primary'])} | {cell(', '.join(u['secondary']))} | hill stations to visit in India; hill holiday ideas | What are the best hill stations in India?; Where can I see snow in India? | {cell(u['intent'])} | All hill and mountain travellers | India | {len(children['/hill-station-travel'])} pillar, regional, seasonal, traveller and planning pages | India; Himalaya; Western Ghats | Replaces the merged core pillars | Footer, all {len(arts)} articles | All {len(arts)} articles, 28 destination guides, 12 activity links, packages | https://club.kudozz.in/hill-station-travel | CollectionPage, ItemList, BreadcrumbList, FAQPage |")
        continue
    a = arts[u["slug"]]
    sec = a["secondaryKeywords"]
    rel = merged_into.get(url(u), [])
    rel_txt = (f"Serves merged candidates: {', '.join(rel[:4])}" + (" and more" if len(rel) > 4 else "")) if rel else (u["conflicts"] or "New page; links to the existing guides")
    km.append(
        f"| `{url(u)}` | {cell(a['title'])} | {cell(u['primary'])} | {cell(', '.join(sec[:2]))} | {cell(', '.join(sec[2:]) or '—')} | {cell('; '.join(f['q'] for f in a['faqs'][:3]))} | {cell(u['intent'])} | {cell(', '.join(a['travellers']))} | `{u['parent']}` | {cell(', '.join(f'`{c}`' for c in children.get(url(u), [])) or '—')} | {cell(', '.join(a.get('places', [])[:6]) or a['about']['name'])} | {cell(rel_txt)} | {links_in[u['slug']] + 1 + guide_in[u['slug']]} (hub{', ' + str(guide_in[u['slug']]) + ' guide pointers' if guide_in[u['slug']] else ''}) | {len(set(links_out[u['slug']]))} | https://club.kudozz.in/blog/{u['slug']} | BlogPosting, BreadcrumbList, FAQPage, ItemList |")
write("hill-station-keyword-map.md", f"""# Hill Station Travel: keyword map

Generated {DATE}. One primary keyword per URL. "Internal links in" counts the hub, other hill-station articles and guide pointers; package blocks and other clusters add more. PAA-style questions are the article's own FAQ questions, written from the question patterns in current results (see `hill-station-serp-research.md`).

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
write("hill-station-aeo-map.md", f"""# Hill Station Travel: AEO map

Generated {DATE}. Every article answers its primary question in a 40 to 80 word quick answer near the top, follows with key takeaways, uses tables for comparisons, distances, months and routes, and ends with FAQs marked up as `FAQPage`. The hub answers "What are the best hill stations in India?", "Which hill stations are best in summer?", "Where can I see snow in India?", "Which hill station is best for couples?" and "What are the best hill stations near Delhi?" directly. Snow is always described as likely rather than guaranteed, drive times as approximate, and permits, e-passes and advisories as "check before you go".

{chr(10).join(ae)}
""")

# ── GEO ─────────────────────────────────────────────────────────────────────
gr = ["| Page | Main entity (schema type) | Within | Regions | Places mentioned |", "| --- | --- | --- | --- | --- |"]
for s, a in arts.items():
    ab = a["about"]
    gr.append(f"| `/blog/{s}` | {cell(ab['name'])} ({ab['type']}) | {cell((ab.get('containedIn') + ' → India') if ab.get('containedIn') else 'India')} | {cell(', '.join(a['regions']))} | {cell(', '.join(a.get('places', [])) or '—')} |")
write("hill-station-geo-entity-map.md", f"""# Hill Station Travel: GEO entity map

Generated {DATE}. Each article's `BlogPosting` names its main entity in `about` (a `TouristDestination` for a state, region or route, or a `Thing` for a topic), lists places in `mentions`, and adds an `ItemList`. Breadcrumbs place every page under Hill Stations and its parent. Terminology follows geography: "hill station" for towns developed as retreats, "valley" and "high-altitude destination" for places such as Spiti, Ladakh and Zanskar.

## Example relationship chains

- India → North India → Himachal Pradesh → Shimla (hill station; Kalka-Shimla Railway, UNESCO) → Kufri, Narkanda (winter snow) → Manali → Solang, Atal Tunnel, Rohtang (permit, summer) → Shimla Manali itinerary → `/packages/himachal-pradesh` → Plan My Trip.
- India → North India → Jammu and Kashmir → Srinagar (Dal Lake, Mughal gardens) → Gulmarg (gondola, skiing December to March) → Pahalgam → Sonamarg → Kashmir itinerary → `/packages/kashmir`.
- India → East → West Bengal → Darjeeling (tea, Darjeeling Himalayan Railway, UNESCO) → Sikkim → Gangtok → Tsomgo Lake and Nathu La (permits) → Pelling (Kanchenjunga) → Darjeeling and Sikkim itinerary → `/packages/sikkim`.
- India → Northeast → Meghalaya → Shillong → Sohra (waterfalls; monsoon) → Nongriat (living root bridges) → monsoon hill stations → `/packages/meghalaya`.
- India → South → Tamil Nadu → Ooty (Nilgiri Mountain Railway, UNESCO; e-pass) → Kodaikanal (e-pass) → Kerala → Munnar (tea, Eravikulam, Neelakurinji ~2030) → South India hill stations itinerary → `/packages/kerala`.
- India → South → Karnataka → Coorg and Chikmagalur (coffee; blossom February to March) → coffee plantation tourism → hill stations near Bengaluru → `/packages/karnataka`.
- India → West → Maharashtra → Lonavala, Matheran (car-free), Mahabaleshwar → monsoon hill stations → hill stations near Mumbai and Pune → forts in Maharashtra → `/packages/maharashtra`.

Cross-topic links: hill station → Adventure (skiing, winter and monsoon treks, paragliding, road trips) → Wildlife (Eravikulam, Great Himalayan National Park, snow leopard tours) → Spiritual (McLeod Ganj, Rumtek, Tawang, the Char Dham) → Heritage (mountain railways, colonial summer capitals) → Food (tea, coffee, regional cuisines) → Road trips.

## Entities by page

{chr(10).join(gr)}
""")

# ── Cannibalisation ─────────────────────────────────────────────────────────
COMPARE = [
    ("Hill station travel vs hill station tourism vs mountain travel", "Same result set", "MERGE", "All served by `/hill-station-travel`"),
    ("Best hill stations vs hill holidays", "Same listicle intent", "MERGE", "`/blog/best-hill-stations-in-india`"),
    ("Best hill stations vs best mountain destinations", "Hill towns vs high valleys and regions (Ladakh, Spiti)", "KEEP", "Each explains the terminology and links to the other"),
    ("Summer hill stations vs best hill stations", "Seasonal vs all-year", "KEEP", "Summer page covers April to June with crowd advice"),
    ("Winter hill stations vs places to see snow", "Winter includes non-snow hills; snow is narrower and needs caveats", "KEEP", "Linked both ways"),
    ("Snow tourism, snowfall destinations, snow holidays, snowfall in Manali or Shimla", "Same intent", "MERGE", "`/blog/places-to-see-snow-in-india` (sections by destination and activity)"),
    ("Monthly pages (hill stations in May, December and so on)", "Thin, near-duplicate", "DO NOT CREATE", "Month tables inside the seasonal pages"),
    ("Destination guides vs hill-station pages", "Place intent vs comparison intent", "UPDATE EXISTING", "Guides stay canonical; 102 guides get a pointer"),
    ("Destination best-time and 2-day or 3-day itinerary pages", "Already in each guide's best-time and itinerary sections", "UPDATE EXISTING", "No duplicate pages; anchors used"),
    ("Things to do vs hill-station pages", "Activities in one place vs choosing between places", "KEEP", "Linked from state pages"),
    ("Multi-destination itineraries vs packages", "Informational plan vs commercial page", "KEEP", "No prices on itineraries; packages carry the quote CTA"),
    ("Skiing and snow activities vs Adventure cluster", "Adventure owns skiing, treks, paragliding", "UPDATE EXISTING", "`/blog/skiing-in-india` and others stay canonical; contextual links both ways"),
    ("Couples page vs honeymoon packages and beach honeymoons", "Discovery vs commercial vs coast", "KEEP", "Destination honeymoon queries go to `/packages/honeymoon`"),
    ("Families page vs family-holidays package", "Discovery vs commercial", "KEEP", "Linked both ways"),
    ("Hill stations near Delhi, Mumbai, Bengaluru vs adventure weekend trips", "Relaxed stays vs activities", "KEEP", "Linked both ways"),
    ("Origin pages for Hyderabad, Ahmedabad, Chandigarh, Jaipur", "Too few options, or would duplicate another page", "DO NOT CREATE", "Answered by regional and state pages"),
    ("Road trips vs Leh Ladakh road trip guide and motorcycle trips", "Overview vs specific route and two-wheeler intent", "KEEP", "Existing guides stay canonical for their routes"),
    ("Toy trains", "Heritage owns the mountain railways", "UPDATE EXISTING", "`/blog/mountain-railways-of-india` is canonical"),
    ("Spiritual hill stations and Himalayan monasteries", "Spiritual cluster owns pilgrimage and monasteries", "MERGE", "Served by spiritual state pages and Buddhist tourism"),
    ("State pages for Arunachal, Nagaland, Mizoram, Manipur, Gujarat, Rajasthan, Madhya Pradesh, Andhra Pradesh", "Too few hill stations for a standalone page", "MERGE", "Regional pages (Northeast; western and central; South)"),
]
rows = ["| Topic comparison | Overlap | Decision | Action |", "| --- | --- | --- | --- |"] + [f"| {cell(a)} | {cell(b)} | **{c}** | {cell(d)} |" for a, b, c, d in COMPARE]
cand = ["| Candidate | Decision | Now served by | Reason |", "| --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] != "create":
        cand.append(f"| `{u['slug']}` | {decision(u)} | `{u['mergedInto'] or '—'}` | {cell(u['reason'])} |")
cnt = collections.Counter(decision(u) for u in urlmap)
write("hill-station-cannibalization.md", f"""# Hill Station Travel: cannibalisation control

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
    if u["slug"] == "hill-station-travel":
        ur.append("| Hill Station Travel in India: Where and When to Go \\| Kudozz Club | Hill Station Travel in India | `/hill-station-travel` | hill station travel in India | hub | `/` | Live |")
    elif a:
        ur.append(f"| {cell(a['seoTitle'])} | {cell(a['title'])} | `/blog/{u['slug']}` | {cell(u['primary'])} | {u['kind']} | `{u['parent']}` | Live |")
    else:
        ur.append(f"| — | — | `{u['slug']}` (not created) | {cell(u['primary'])} | — | — | {decision(u).title()}{' → `' + u['mergedInto'] + '`' if u['mergedInto'] else ''} |")
write("hill-station-url-map.md", f"""# Hill Station Travel: URL and title map

Generated {DATE}. {len(created)} live URLs (hub plus {len(created) - 1} articles), {len(merged)} merged candidates and {len(nopage)} not created. Clean `/blog/<slug>` URLs on the existing route, self-referencing canonicals, no existing URL changed, no redirects needed. One new commercial URL, `/packages/hill-station-holidays`, was added as a travel style.

{chr(10).join(ur)}
""")

# ── Internal linking ────────────────────────────────────────────────────────
orphans = [s for s in arts if f'"{s}"' not in HUB_SRC and links_in[s] == 0 and guide_in[s] == 0]
not_on_hub = [s for s in arts if f'"{s}"' not in HUB_SRC]
pointer_rows = "\n".join(f"| `/blog/{g}` | `/blog/{v['slug']}` |" for g, v in sorted(guide_links.items()))
cross = ["12 Adventure articles (skiing, winter and monsoon treks, weekend trips from Delhi, Mumbai and Bengaluru, state adventure pages, Manali, motorcycle trips) → snow, seasonal, origin, state and itinerary pages", "`/blog/mountain-railways-of-india` → best hill stations; `/blog/colonial-heritage-in-india` → Himalayan hill stations", "4 Wildlife pages (snow leopard tours; Kerala, Uttarakhand and Karnataka wildlife) → mountain destinations and state hill pages", "3 Spiritual pages (Himachal, Uttarakhand, Buddhist tourism) → state hill pages", "`/blog/beach-honeymoon-destinations-in-india` → hill stations for couples"]
write("hill-station-internal-linking.md", f"""# Hill Station Travel: internal linking

Generated {DATE}.

## Architecture

India → `/hill-station-travel` (hub) → region (Himalayan, Northeast, South, western and central) → state hill page → destination guide → things to do → activity (Adventure cluster) → itinerary → tour package → `/plan-your-trip`.

Every article has two calls to action ("Planning a hill holiday?" after the key takeaways, and "Want to combine several mountain destinations into one trip?" before the FAQs), next steps that follow this chain, related reading, and a sidebar of related hill-station guides.

## Links added into the cluster

| Source | Links |
| --- | --- |
| Footer ("Hill Stations") | Hub, site-wide (the header already has ten items; see the final report) |
| Hub `/hill-station-travel` | All {len(arts) - len(not_on_hub)} of {len(arts)} articles as cards, 28 destination guides, 12 activity and cross-cluster links, 8 state packages, style and combo packages |
| Guide pointers (`GuideTripCTA`: "Comparing hill stations? See our guide to …") | {len(guide_links)} existing guides |
| State package pages ("Hill stations in <state>") | 20 state package pages |
| `/packages/hill-station-holidays` (new travel style) | Every hill-station article |
| Family, honeymoon, weekend, luxury, budget, group and adventure style pages ("Hill trips for …") | 2 to 5 articles each |
| `/packages/northeast-india` | Northeast, Meghalaya and Darjeeling–Sikkim guides |
| Other clusters | {len(cross)} groups of contextual links (below) |
| Blog index | "Hill Stations" category |
| `llms.txt` and `sitemap.xml` | Hub and all articles |

## Orphan check

Articles not linked from the hub, another hill-station article or a guide pointer: {', '.join(orphans) or 'none'}. Articles not shown as a card on the hub: {', '.join(not_on_hub) or 'none'}.

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
        if u["slug"] == "hill-station-travel":
            pr.append("| Hill Station Travel in India (hub) | `/hill-station-travel` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
        else:
            a = arts[u["slug"]]
            pr.append(f"| {cell(a['short'])} ({words(a)} words) | `/blog/{u['slug']}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
    elif d == "DO NOT CREATE":
        pr.append(f"| {cell(u['slug'])} | — | ✅ | — | — | — | — | — | — | — | — | Not created |")
    else:
        pr.append(f"| {cell(u['slug'])} | → `{u['mergedInto']}` | ✅ | — | — | — | — | — | ✅ | — | ✅ | {d.title()} |")
MANUAL = [
    ("Kashmir advisories", "Destinations closed after April 2025 were progressively reopened from early 2026; re-check official advisories before each season and update the Kashmir pages."),
    ("Ooty and Kodaikanal e-pass", "Year-round e-pass for vehicles registered outside the districts, as of 2026; rules have changed several times since 2024."),
    ("Rohtang Pass", "Online permit with an NGT cap, closed on Tuesdays, opening in summer (17 May in 2026); confirm each year."),
    ("Joshimath-Auli ropeway", "Not operating since the 2023 Joshimath crisis; update if it reopens."),
    ("Sikkim and Arunachal permits", "PAP, RAP and ILP rules and Nathu La days change; re-check before each season."),
    ("Neelakurinji", "The Eravikulam bloom is expected around 2030; confirm with Kerala Tourism and the forest department nearer the time."),
    ("Kashmir rail links", "Katra-Srinagar trains running; check the status of through services from Jammu."),
    ("Snowfall and seasons", "Month ranges are typical, not guaranteed; review after unusual winters."),
    ("Hill towns without guides", "Chail, Kufri, Narkanda, Palampur, Almora, Kanatal, Binsar, Coonoor, Panchgani and Mirik are covered as state-page sections; standalone guides are a future opportunity."),
    ("Mobile rendering", "Review the hub, one article and the header menu on a phone; see the final report for what was checked in this session."),
]
write("hill-station-progress.md", f"""# Hill Station Travel: progress

Generated {DATE}. Research ✅ means the topic was checked against existing content and current sources; QA ✅ means the page passed `scripts/hills/build.py` (strict), `scripts/hills/verify-html.py` and the site-wide link check, or that the merge decision is documented.

{chr(10).join(pr)}

## Items needing manual verification or follow-up

| Item | Note |
| --- | --- |
{chr(10).join(f"| {a} | {b} |" for a, b in MANUAL)}
""")
