"""Generate the Road Trips docs (docs/road-trips-*.md) from
scripts/roadtrips/url-map.json, scripts/roadtrips/guide-links.json and the
article JSON files. Run after build.py:

  python3 scripts/roadtrips/report.py

The audit, SERP research and final report are written by hand.
"""
import json, os, re, collections

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DOCS = os.path.join(ROOT, "docs")
CONTENT = os.path.join(ROOT, "src/content/roadtrips")
DATE = "2026-09-28"
urlmap = json.load(open(os.path.join(HERE, "url-map.json")))
arts = {f[:-5]: json.load(open(os.path.join(CONTENT, f))) for f in sorted(os.listdir(CONTENT)) if f.endswith(".json")}
guide_links = json.load(open(os.path.join(HERE, "guide-links.json")))
created = [u for u in urlmap if u["status"] == "create"]
merged = [u for u in urlmap if u["status"] == "merged"]
nopage = [u for u in urlmap if u["status"] == "no-page"]
HUB_SRC = open(os.path.join(ROOT, "src/app/road-trips/page.tsx")).read()


def url(u):
    return "/road-trips" if u["slug"] == "road-trips" else f"/blog/{u['slug']}"


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
    if t == "/road-trips" or (t.startswith("/blog/") and t[6:] in arts_set):
        return "MERGE"
    return "UPDATE EXISTING"


# ── Inventory ───────────────────────────────────────────────────────────────
inv = []
for g in sorted({u["group"] for u in urlmap}):
    rows = [u for u in urlmap if u["group"] == g]
    inv.append(f"### {g}\n\n| Candidate | Decision | URL / served by | Primary keyword | Secondary keywords | Intent | Route | Origin | Destination | State | Region | Related cluster | Priority | Notes |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |")
    for u in rows:
        d = decision(u)
        if d == "KEEP":
            inv.append(f"| {cell(u['title'])} | Approved and published | `{url(u)}` | {cell(u['primary'])} | {cell(', '.join(u['secondary']))} | {cell(u['intent'])} | {cell(u.get('route') or '—')} | {cell(u.get('origin') or '—')} | {cell(u.get('dest') or '—')} | {cell(u.get('state') or '—')} | {cell(u.get('region') or '—')} | {cell(u.get('xcluster') or '—')} | {cell(u.get('priority') or '—')} | {cell(u['kind'])} page |")
        elif d == "DO NOT CREATE":
            inv.append(f"| `{u['slug']}` | Not created | `{u['mergedInto'] or '—'}` | {cell(u['primary'])} | — | — | — | — | — | — | — | — | Low | {cell(u['reason'])} |")
        else:
            inv.append(f"| `{u['slug']}` | {d.title()} | `{u['mergedInto']}` | {cell(u['primary'])} | — | — | — | — | — | — | — | — | — | {cell(u['reason'])} |")
    inv.append("")
write("road-trips-inventory.md", f"""# Road Trips: master content inventory

Generated {DATE} by `scripts/roadtrips/report.py` from `scripts/roadtrips/url-map.json`.

{len(urlmap)} candidate topics were reviewed across the brief's groups: {len(created)} approved (the hub and {len(created) - 1} articles), {len(merged)} merged into an approved page or served by an existing guide, and {len(nopage)} not created. A page was approved only where it had a distinct travel intent, enough verifiable information and linking value, and no existing page already served it (see `road-trips-existing-site-audit.md` and `road-trips-cannibalization.md`).

{chr(10).join(inv)}
""")

# ── Keyword map ─────────────────────────────────────────────────────────────
km = ["| URL | H1 | Primary keyword | Secondary keywords | Long-tail keywords | Question keywords | Origin entity | Destination entity | Route entity | State | Region | Search intent | Commercial intent | Canonical | Schema |",
      "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in created:
    if u["slug"] == "road-trips":
        km.append(f"| `/road-trips` | Road Trips in India | {cell(u['primary'])} | {cell(', '.join(u['secondary']))} | road trip ideas India; road trip routes | What are the best road trips in India?; When is the best time for a road trip in India? | India | — | — | India | All | {cell(u['intent'])} | Medium (packages) | https://club.kudozz.in/road-trips | CollectionPage, ItemList, BreadcrumbList, FAQPage |")
        continue
    a = arts[u["slug"]]
    sec = a["secondaryKeywords"]
    rel = merged_into.get(url(u), [])
    rel_txt = (f"Serves merged candidates: {', '.join(rel[:4])}" + (" and more" if len(rel) > 4 else "")) if rel else (u["conflicts"] or "New page; links to the existing guides")
    km.append(
        f"| `{url(u)}` | {cell(a['title'])} | {cell(u['primary'])} | {cell(', '.join(sec[:2]))} | {cell(', '.join(sec[2:]) or '—')} | {cell('; '.join(f['q'] for f in a['faqs'][:3]))} | {cell(u.get('origin') or '—')} | {cell(u.get('dest') or '—')} | {cell(u.get('route') or '—')} | {cell(u.get('state') or ', '.join(a['regions']))} | {cell(u.get('region') or '—')} | {cell(u['intent'])} | {cell(u['commercial'])} | https://club.kudozz.in/blog/{u['slug']} | BlogPosting, BreadcrumbList, FAQPage, ItemList |")
write("road-trips-keyword-map.md", f"""# Road Trips: keyword map

Generated {DATE}. One primary keyword per URL; every important road-trip intent has one canonical owner (merged intents are listed below, with the owner). PAA-style questions are the article's own FAQ questions, written from the question patterns in current results (see `road-trips-serp-research.md`).

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
write("road-trips-aeo-map.md", f"""# Road Trips: AEO map

Generated {DATE}. Every article answers its primary question in a 40 to 80 word quick answer near the top, follows with key takeaways, uses tables for comparisons, distances, months and routes, and ends with FAQs marked up as `FAQPage`. Route pages answer distance, duration, route, overnight and season questions near the top and in tables; planning pages answer cost, packing, safety, beginner and family questions. The hub answers "What are the best road trips in India?", "When is the best time for a road trip in India?", "How many days do I need?", "Self-drive or driver?" and "How do I estimate the cost?". Distances and times are approximate; road status, permits, tolls and fees are framed as "check before you go".

{chr(10).join(ae)}
""")

# ── GEO ─────────────────────────────────────────────────────────────────────
gr = ["| Page | Main entity (schema type) | Within | Regions | Places mentioned |", "| --- | --- | --- | --- | --- |"]
for s, a in arts.items():
    ab = a["about"]
    gr.append(f"| `/blog/{s}` | {cell(ab['name'])} ({ab['type']}) | {cell((ab.get('containedIn') + ' → India') if ab.get('containedIn') else 'India')} | {cell(', '.join(a['regions']))} | {cell(', '.join(a.get('places', [])) or '—')} |")
write("road-trips-geo-entity-map.md", f"""# Road Trips: GEO entity map

Generated {DATE}. Each article's `BlogPosting` names its main entity in `about` (a `TouristDestination` for a route, state or region, or a `Thing` for a planning topic), lists stops and places in `mentions`, and adds an `ItemList`. Breadcrumbs place every page under Road Trips and its parent (a state or regional page, or an existing owner such as the Leh Ladakh guide).

## Relationship chains

- India → North India → Delhi → Delhi to Manali road trip → Murthal, Chandigarh, Bilaspur, Mandi, Kullu → Manali → Solang valley, Atal Tunnel → Adventure activities in Manali → Shimla Manali itinerary → `/packages/himachal-pradesh` → Plan My Trip.
- India → Himachal Pradesh → Shimla → Spiti Valley road trip → Narkanda, Rampur, Sangla, Kalpa, Nako, Tabo, Kaza → Key, Kibber, Langza → Kunzum → Chandratal → Atal Tunnel → Manali → `/packages/himachal-pradesh`.
- India → Ladakh → Manali → Manali to Leh road trip → Jispa, Baralacha La, Sarchu, Pang, Tanglang La → Leh → Leh Ladakh road trip guide → Things to do in Leh → `/packages/leh-ladakh`.
- India → Jammu and Kashmir → Srinagar → Srinagar to Leh road trip → Sonamarg, Zojila, Drass, Kargil, Lamayuru → Leh → `/packages/leh-ladakh`.
- India → Rajasthan → Delhi → Rajasthan road trip → Jaipur → Pushkar → Jodhpur → Jaisalmer → Ranakpur, Kumbhalgarh → Udaipur → Rajasthan heritage itinerary → `/packages/rajasthan`.
- India → Maharashtra and Goa → Mumbai → Mumbai to Goa road trip → Mahad, Chiplun, Ratnagiri, Ganpatipule, Malvan → Goa → Things to do in Goa → `/packages/goa`.
- India → Karnataka → Bengaluru → Bengaluru to Coorg road trip → Srirangapatna, Bylakuppe, Kushalnagar → Madikeri → Things to do in Coorg → `/packages/karnataka`.
- India → Tamil Nadu → Bengaluru → Bengaluru to Ooty road trip → Mysuru, Bandipur, Mudumalai, Gudalur → Ooty → `/packages/tamil-nadu`.
- India → Tamil Nadu → Chennai → Chennai to Pondicherry road trip → Mahabalipuram → Pondicherry → Auroville → `/packages/tamil-nadu`.
- India → Kerala → Kochi → Kochi to Munnar road trip → Kothamangalam, Cheeyappara, Adimali → Munnar → Kerala road trip → `/packages/kerala`.
- India → Arunachal Pradesh → Guwahati → Guwahati to Tawang road trip → Tezpur, Bhalukpong, Bomdila, Dirang, Sela → Tawang → `/packages/arunachal-pradesh`.

Cross-topic links: road trip → Nature (Western Ghats, waterfalls) → Adventure (motorcycle trips, camping) → Wildlife (tiger reserves) → Hills (mountain road trips, hill stations near cities) → Heritage (Rajasthan and South India itineraries, food heritage) → Beach (coasts) → packages (road trip holidays, family, honeymoon, weekend getaways).

## Entities by page

{chr(10).join(gr)}
""")

# ── Cannibalisation ─────────────────────────────────────────────────────────
COMPARE = [
    ("Road trips in India vs road travel vs road-trip holidays", "Same result set", "MERGE", "All served by `/road-trips`"),
    ("Best road trips vs best road-trip routes vs scenic and long road trips", "Same listicle intent", "MERGE", "`/blog/best-road-trips-in-india`"),
    ("Road trip vs destination guide", "How to get there and what is on the way vs what to do on arrival", "KEEP", "Route pages link to the guide; guides get a pointer back"),
    ("Ladakh road trip vs the Leh Ladakh guide", "Same intent", "UPDATE EXISTING", "`/blog/leh-ladakh-road-trip-travel-guide` stays canonical; only Manali–Leh and Srinagar–Leh route pages are new"),
    ("Himalayan and mountain road trips vs Hills", "Same intent", "UPDATE EXISTING", "`/blog/mountain-road-trips-in-india` stays canonical; state and route pages below it"),
    ("Bike and motorcycle road trips vs Adventure", "Activity intent", "UPDATE EXISTING", "`/blog/best-motorcycle-trips-in-india` and `/blog/spiti-valley-bike-trip` are canonical"),
    ("Spiti road trip vs Spiti bike trip", "Car and general route vs riding", "KEEP", "Linked both ways"),
    ("Rajasthan road trip vs Rajasthan heritage itinerary", "Driving route vs heritage circuit", "KEEP", "Linked both ways"),
    ("Road trips from a city vs hill stations near the city vs adventure weekends", "Drives to any destination vs hill towns vs activities", "KEEP", "Linked both ways"),
    ("Western Ghats road trips vs Western Ghats nature travel", "Ghat roads vs ecosystems", "KEEP", "Linked both ways"),
    ("Coastal road trips vs Beach cluster", "Journey vs beaches", "KEEP", "Beaches link out to the Beach cluster"),
    ("Wildlife road trips vs Wildlife cluster", "Drives between parks vs parks and safaris", "KEEP", "Safaris link to the Wildlife cluster"),
    ("Family and couples road trips vs family-holidays and honeymoon packages", "Discovery vs commercial", "KEEP", "Linked both ways"),
    ("Weekend road trips in India", "City-specific in practice", "MERGE", "Hub section linking the six city pages"),
    ("Summer road trips", "Himalayan intent", "MERGE", "Mountain road trips and the Himalayan route pages"),
    ("Monthly and 2, 3, 5 or 7-day generic itineraries", "Doorway-like, thin", "DO NOT CREATE", "Duration tables inside route and city pages"),
    ("Road-trip package variants (Himalayan, Rajasthan, luxury and so on)", "One commercial intent", "MERGE", "`/packages/road-trip-holidays` and state packages; no prices"),
    ("City pages for Pune, Jaipur, Chandigarh and Kochi", "Overlap with existing pages", "MERGE", "Mumbai, Rajasthan, Himachal and Kerala pages"),
    ("City pages for Ahmedabad, Lucknow, Indore, Surat and Vadodara", "Low demand or no distinct destination set", "DO NOT CREATE", "Best road trips and regional pages"),
]
rows = ["| Topic comparison | Overlap | Decision | Action |", "| --- | --- | --- | --- |"] + [f"| {cell(a)} | {cell(b)} | **{c}** | {cell(d)} |" for a, b, c, d in COMPARE]
cand = ["| Candidate | Decision | Now served by | Reason |", "| --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] != "create":
        cand.append(f"| `{u['slug']}` | {decision(u)} | `{u['mergedInto'] or '—'}` | {cell(u['reason'])} |")
cnt = collections.Counter(decision(u) for u in urlmap)
write("road-trips-cannibalization.md", f"""# Road Trips: cannibalisation control

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
    if u["slug"] == "road-trips":
        ur.append("| Road Trips in India: Routes, Regions and Planning \\| Kudozz Club | Road Trips in India | `/road-trips` | road trips in India | hub | `/` | Live |")
    elif a:
        ur.append(f"| {cell(a['seoTitle'])} | {cell(a['title'])} | `/blog/{u['slug']}` | {cell(u['primary'])} | {u['kind']} | `{u['parent']}` | Live |")
    else:
        ur.append(f"| — | — | `{u['slug']}` (not created) | {cell(u['primary'])} | — | — | {decision(u).title()}{' → `' + u['mergedInto'] + '`' if u['mergedInto'] else ''} |")
write("road-trips-url-map.md", f"""# Road Trips: URL and title map

Generated {DATE}. {len(created)} live URLs (hub plus {len(created) - 1} articles), {len(merged)} merged candidates and {len(nopage)} not created. Clean `/blog/<slug>` URLs on the existing route, self-referencing canonicals, no existing URL changed, no redirects needed. One new commercial URL, `/packages/road-trip-holidays`, was added as a travel style.

{chr(10).join(ur)}
""")

# ── Internal linking ────────────────────────────────────────────────────────
orphans = [s for s in arts if f'"{s}"' not in HUB_SRC and links_in[s] == 0 and guide_in[s] == 0]
not_on_hub = [s for s in arts if f'"{s}"' not in HUB_SRC]
pointer_rows = "\n".join(f"| `/blog/{g}` | `/blog/{v['slug']}` |" for g, v in sorted(guide_links.items()))
cross = ["9 Hill Station pages (mountain road trips, Shimla–Manali itinerary, hill stations near five cities, Himachal and Uttarakhand) → best, route, city and state road-trip pages", "6 Adventure pages (motorcycle trips, Spiti bike trip, Ladakh activities, weekend adventure trips from three cities) → best, Spiti, Manali–Leh and city pages", "3 Heritage pages (Rajasthan heritage and Golden Triangle itineraries, food heritage) → Rajasthan, Delhi and food road trips", "3 Nature pages (Western Ghats, Kerala itinerary, waterfalls) → Western Ghats, Kerala and monsoon road trips", "2 Wildlife pages (best tiger reserves, MP wildlife) → wildlife road trips", "3 Beach pages (coastal tourism, Goa, Puducherry) → coastal, Mumbai–Goa and Chennai–Pondicherry pages"]
write("road-trips-internal-linking.md", f"""# Road Trips: internal linking

Generated {DATE}.

## Architecture

India → `/road-trips` (hub) → region or state page → route page → stops → destination guide → things to do → activity (Adventure) → itinerary → tour package → `/plan-your-trip`.

Every article has two calls to action ("Planning a road trip?" after the key takeaways, and "Want the route, stops and stays planned around your dates?" before the FAQs), next steps that follow this chain (usually a destination guide, a parent page, a related page, a package and Plan My Trip), related reading, and a sidebar of related road-trip guides.

## Links added into the cluster

| Source | Links |
| --- | --- |
| Footer ("Road Trips") | Hub, site-wide (the header already has ten items; see the final report) |
| Hub `/road-trips` | All {len(arts) - len(not_on_hub)} of {len(arts)} articles as cards, 20 destination guides, 10 itineraries, 10 cross-cluster links, Ladakh, mountain and bike owners, 8 state packages, style and combo packages |
| Guide pointers (`GuideTripCTA`: "Going by road? See our guide to …") | {len(guide_links)} existing guides |
| State package pages ("Road trips in <state>") | 22 state and UT package pages |
| `/packages/road-trip-holidays` (new travel style) | Every road-trip article |
| Eleven style pages ("Road trips for …") | 1 to 6 articles each |
| `/packages/northeast-india` and `/packages/golden-triangle` | Northeast and Tawang; Delhi and Rajasthan road trips |
| Other clusters | {len(cross)} groups of contextual links (below) |
| Blog index | "Road Trips" category |
| `llms.txt` and `sitemap.xml` | Hub and all articles |

## Orphan check

Articles not linked from the hub, another road-trip article or a guide pointer: {', '.join(orphans) or 'none'}. Articles not shown as a card on the hub: {', '.join(not_on_hub) or 'none'}.

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
        if u["slug"] == "road-trips":
            pr.append("| Road Trips in India (hub) | `/road-trips` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
        else:
            a = arts[u["slug"]]
            pr.append(f"| {cell(a['short'])} ({words(a)} words) | `/blog/{u['slug']}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
    elif d == "DO NOT CREATE":
        pr.append(f"| {cell(u['slug'])} | — | ✅ | — | — | — | — | — | — | — | — | Not created |")
    else:
        pr.append(f"| {cell(u['slug'])} | → `{u['mergedInto']}` | ✅ | — | — | — | — | — | ✅ | — | ✅ | {d.title()} |")
MANUAL = [
    ("Ladakh and Spiti road openings", "Manali–Leh, Srinagar–Leh (Zojila) and Kunzum opening dates change every year; update the season notes each spring."),
    ("Zojila tunnel", "Excavation broke through in June 2026; update the Srinagar–Leh page when it opens to traffic."),
    ("Mumbai–Goa NH66", "Widening in Raigad was ongoing in 2026; update the Mumbai–Goa and Mumbai pages on completion."),
    ("Kiratpur–Manali and Kerala NH66", "Near completion; revise driving-time ranges when finished."),
    ("FASTag annual pass", "The fee is revised each April (₹3,075 for 2026–27); update the cost page."),
    ("Entry fees and permits", "Himachal's entry toll, Manali's green tax, Ladakh's environment fee and the Arunachal ILP are described without amounts; check rules each season."),
    ("Forest night bans and e-passes", "Bandipur, Mudumalai and Amrabad timings, and the Ooty and Kodaikanal e-pass rules, change; re-check."),
    ("Anmod ghat", "Check its repair status before recommending it as a route to Goa."),
    ("Kashmir advisories", "Re-check before recommending the Srinagar–Leh route each season."),
    ("Mobile rendering", "Review the hub, one route page and the package blocks on a phone; see the final report."),
]
write("road-trips-progress.md", f"""# Road Trips: progress

Generated {DATE}. Research ✅ means the topic was checked against existing content and current sources; QA ✅ means the page passed `scripts/roadtrips/build.py` (strict), `scripts/roadtrips/verify-html.py` and the site-wide link check, or that the merge decision is documented.

{chr(10).join(pr)}

## Items needing manual verification or follow-up

| Item | Note |
| --- | --- |
{chr(10).join(f"| {a} | {b} |" for a, b in MANUAL)}
""")
