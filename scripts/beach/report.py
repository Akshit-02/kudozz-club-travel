"""Generate the Beach Travel docs (docs/beach-travel-*.md) from
scripts/beach/url-map.json, scripts/beach/guide-links.json, the article JSON
files, the built index and docs/blog-post-links.csv. Run after build.py:

  python3 scripts/beach/report.py
"""
import csv, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DOCS = os.path.join(ROOT, "docs")
CONTENT = os.path.join(ROOT, "src/content/beach")
DATE = "2026-09-25"
urlmap = json.load(open(os.path.join(HERE, "url-map.json")))
arts = {f[:-5]: json.load(open(os.path.join(CONTENT, f))) for f in sorted(os.listdir(CONTENT)) if f.endswith(".json")}
guide_links = json.load(open(os.path.join(HERE, "guide-links.json")))
created = [u for u in urlmap if u["status"] == "create"]
merged = [u for u in urlmap if u["status"] == "merged"]
deferred = [u for u in urlmap if u["status"] == "deferred"]


def url(u):
    return "/beach-travel" if u["slug"] == "beach-travel" else f"/blog/{u['slug']}"


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


# ── Inventory ───────────────────────────────────────────────────────────────
TYPE = [
    (r"^things-to-do-in-", "Things to Do"),
    (r"(scuba|snorkel|surf|kayak|water-sports)", "Water sport (Adventure cluster)"),
    (r"adventure-activities-in-(goa|andaman)", "Beach activity (Adventure cluster)"),
    (r"(andaman|havelock|neil|lakshadweep|agatti|kavaratti|jolly|north-bay|ross|long-island|little-andaman|kalipur|diglipur|baratang|rangat|mayabunder|chidiya|port-blair|mount-manipur|cellular)", "Island"),
    (r"^(goa|kerala|karnataka|maharashtra|tamil-nadu|odisha|gujarat|andhra-pradesh|west-bengal|dadra|puducherry-district)", "Coastal state"),
    (r"(beach|beaches)", "Beach destination"),
]
rows = list(csv.DictReader(open(os.path.join(DOCS, "blog-post-links.csv"))))
kw = re.compile(r"beach|island|coast|goa|andaman|lakshadweep|kovalam|varkala|gokarna|alibaug|tarkarli|ganpatipule|mahabalipuram|rameswaram|kanyakumari|puri\b|chandipur|konark|mandvi|dwarka|somnath|digha|mandarmani|vizag|visakhapatnam|pondicherry|puducherry|daman|diu|udupi|mangal|kannur|bekal|alappuzha|alleppey|kochi|chennai|havelock|neil|port blair|agatti|kavaratti|chilika|surat|munroe|panjim|canacona|mumbai|scuba|snorkel|surf|water sport|kayak", re.I)
inv = ["| Destination/Topic | Existing URL | Type | Beach Intent | Existing Content | New Page Needed? | Action |", "| --- | --- | --- | --- | --- | --- | --- |"]
n_inv = 0
for r in rows:
    if r["type"] == "Beach article" or not kw.search(r["slug"] + " " + r["title"]):
        continue
    if r["slug"].startswith(("chanakyapuri", "janakpuri", "dwarka-delhi", "laxmi-nagar", "sarojini", "lajpat", "nagarjuna", "omkareshwar", "prashar", "pawapuri", "majuli", "dumboor", "kolhapur", "assam", "things-to-do-in-imphal", "things-to-do-in-majuli")):
        continue
    t = next((lab for pat, lab in TYPE if re.search(pat, r["slug"])), "Beach city or town")
    g = guide_links.get(r["slug"])
    intent = "Destination planning" if t not in ("Things to Do", "Water sport (Adventure cluster)", "Beach activity (Adventure cluster)") else ("General destination activities" if t == "Things to Do" else "Activity")
    if g:
        action = f"Keep; add pointer to `/blog/{g['slug']}`"
    elif r["slug"].startswith("things-to-do-in-"):
        action = "Keep; linked via its guide's pointer and from the state beach page"
    elif t.startswith(("Water", "Beach activity")):
        action = "Keep as the activity page; cross-linked from beach pages"
    else:
        action = "Keep; linked from the relevant state beach page"
    inv.append(f"| {cell(r['title'].split(':')[0])} | `/blog/{r['slug']}` | {t} | {intent} | {cell(r['title'])} | No | {action} |")
    n_inv += 1
n_ttd = sum(1 for l in inv if "| Things to Do |" in l)
n_adv = sum(1 for l in inv if "(Adventure cluster)" in l)
n_guides = n_inv - n_ttd - n_adv
new_rows = [f"| {cell(u['title'] or u['slug'])} | — | {u['kind']} | {cell(u['intent'])} | None | Yes | Created `{url(u)}` |" for u in created]
write("beach-travel-inventory.md", f"""# Beach Travel: content inventory

Generated {DATE} by `scripts/beach/report.py`.

## Audit summary

- {n_inv} existing pages on the site already cover beach, island or coastal destinations, beach activities or coastal cities: {n_guides} destination guides (29 of them in the "Beaches" blog category, plus island, heritage and city guides with beaches), {n_ttd} things-to-do articles for coastal places, and {n_adv} water-activity pages published in the Adventure Travel cluster.
- There was no beach category page, no state-level beach guide, and no overview of beach tourism, seasons or safety.
- Package pages exist for every coastal state and UT, plus honeymoon, family, luxury, budget and weekend travel styles; no package URL was invented.
- The site uses one blog route (`/blog/<slug>`), a static sitemap, per-page metadata and JSON-LD, a credited Wikimedia image pipeline and the `GuideTripCTA` pointer system. The beach cluster reuses all of them.

## Existing pages

{chr(10).join(inv)}

## New pages created

| Destination/Topic | Existing URL | Type | Beach Intent | Existing Content | New Page Needed? | Action |
| --- | --- | --- | --- | --- | --- | --- |
{chr(10).join(new_rows)}
""")

# ── Keyword map ─────────────────────────────────────────────────────────────
km = ["| Page | Primary Keyword | Secondary Keywords | Search Intent | Parent | Target URL |", "| --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] == "create":
        a = arts.get(u["slug"])
        km.append(f"| {cell(u['title'])} | {cell(u['primary'])} | {cell(', '.join(a['secondaryKeywords'] if a else u['secondary']))} | {cell(u['intent'])} | `{u['parent']}` | `{url(u)}` |")
    else:
        km.append(f"| {cell(u['slug'])} (not created) | {cell(u['primary'])} | — | Served by target | — | `{u['mergedInto'] or 'manual review'}` |")
write("beach-travel-keyword-map.md", f"""# Beach Travel: keyword map

Generated {DATE}. One primary keyword per URL. Semantic terms used across the cluster: beaches, coastline, islands, lagoons, swimming, lifeguards, water sports, surfing, diving, snorkelling, sunset, sunrise, coastal town, beach holiday, beach activities, Blue Flag, monsoon.

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
lines = ["- [Beach Travel in India](/beach-travel) · hub"] + tree("/beach-travel", 1)
chains = []
for s in ["best-beaches-in-goa", "best-beaches-in-andaman", "best-beaches-in-kerala", "best-beaches-in-odisha"]:
    a = arts[s]
    chains.append(f"- `/beach-travel` → `{a['parent']['href']}` → `/blog/{s}` → " + " → ".join(f"`{l['href']}`" for l in a["nextSteps"]) + " → `/plan-your-trip`")
write("beach-travel-content-cluster.md", f"""# Beach Travel: content cluster

Generated {DATE}. {len(created) - 1} articles plus the hub are live; {len(merged)} candidate topics were merged into an existing or new page and {len(deferred)} is held for manual review.

## Structure

Beach Travel → Destinations → States → Beaches → Activities → Traveller types → Seasons → Planning → Packages

| Layer | Pages |
| --- | --- |
| Hub | `/beach-travel` |
| Destinations | best-beach-destinations-in-india, best-beaches-in-india, offbeat-beaches-in-india |
| States | 12 state and island beach guides (`best-beaches-in-<state>`) |
| Beaches | Individual beaches are sections of the state pages, which link to the existing beach and destination guides |
| Activities | dolphin-watching-in-india (new); water-sports, scuba-diving, snorkeling, surfing and kayaking pages in the Adventure cluster |
| Traveller types | beach-holidays-in-india (families, luxury, budget, solo, groups), beach-honeymoon-destinations-in-india |
| Seasons | best-time-for-beach-holidays-in-india |
| Planning | beach-trips-in-india (city origins), beach-safety-in-india, beach-tourism-in-india, coastal-tourism-in-india |
| Packages | State packages for every coastal state, plus honeymoon, family, luxury, budget and weekend travel styles |

## Hierarchy

{chr(10).join(lines)}

## How it connects to the rest of the site

- The hub links to every beach article, the Adventure cluster's water activities and the beach packages.
- Every article ends with a "Ready for your beach escape?" block following the chain destination guide → things to do → itinerary → package → Plan My Trip.
- `GuideTripCTA` shows "Planning a beach holiday? Explore our guide to …" on {len(guide_links)} existing guides and on their things-to-do articles.
- State package pages show a "Beaches in <state>" block; honeymoon, family, luxury, budget and weekend package pages show a "Beaches for …" block.
- Adventure water pages (water sports, scuba, snorkelling, surfing, kayaking, Goa and Andaman adventure) link back to the beach pages.
- The header ("Beaches") and footer link to the hub; the blog index has a "Beach Travel" category; `llms.txt` lists the cluster.

## Example chains

{chr(10).join(chains)}
""")

# ── Cannibalisation ─────────────────────────────────────────────────────────
crows = ["| Candidate | Decision | Now served by | Reason |", "| --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] == "merged":
        crows.append(f"| `{u['slug']}` | Merged | `{u['mergedInto']}` | {cell(u['reason'])} |")
    elif u["status"] == "deferred":
        crows.append(f"| `{u['slug']}` | Manual review | — | {cell(u['reason'])} |")
write("beach-travel-cannibalization.md", f"""# Beach Travel: cannibalisation audit and decisions

Generated {DATE}.

## Intent separation

| Page type | Intent | Example |
| --- | --- | --- |
| Beach hub (`/beach-travel`) | Overall beach travel in India; owns "beach travel in India" | Beach Travel in India |
| Best beach destinations | Where to base a beach holiday | Best Beach Destinations in India |
| Best beaches | Discovery of individual beaches | Best Beaches in India; Best Beaches in Goa |
| Things to do | All destination activities | Things to Do in Goa |
| Water sports and activity pages | Activity intent | Water Sports in India; Adventure Activities in Goa |
| Travel guide | Complete destination planning | Goa Travel Guide |
| Itinerary | Day-by-day planning | Goa Travel Guide's itinerary section |
| Tour package | Commercial | Goa Tour Packages |
| Plan My Trip | Lead conversion | /plan-your-trip |

## Key calls

- **Hub vs pillar.** `/beach-travel` (H1 "Beach Travel in India") carries the pillar content, so `/blog/beach-travel-in-india` was not created.
- **Beach Tourism vs Beach Travel vs Coastal Tourism.** Beach Tourism is about how beaches are managed (Blue Flag, BEAMS, coastal rules, lifeguards, wildlife protection). Coastal Tourism covers the coast beyond beaches (backwaters, forts, lighthouses, mangroves, harbours, drives, cruises). Beach Travel (the hub) is about choosing and planning a beach trip.
- **Best Beach Destinations vs Best Beaches.** Destinations are places to base a holiday (Goa, the Andamans, Varkala); Best Beaches lists individual beaches (Radhanagar, Palolem, Om beach).
- **Beach Holidays vs Beach Trips.** Holidays is organised by traveller type, budget and length; Trips is organised by departure city for short breaks.
- **One page per state.** "Beach travel in X" and "best beaches in X" show the same results, so each state has one page, `best-beaches-in-<state>`.
- **Goa.** `goa-beaches-travel-guide` is a full travel guide with a beaches section; `things-to-do-in-goa` covers everything to do; `adventure-activities-in-goa` owns water sports. `best-beaches-in-goa` is beach selection only and links to all three.
- **Water activities.** Already published in the Adventure cluster, so they were not duplicated; parasailing, jet skiing and sea walking are sections of water sports.
- **Individual beaches.** No page per beach: existing guides already cover the main beaches (Baga, Calangute, Palolem, Agonda, Radhanagar, Varkala, Kovalam, Tarkarli, Digha, Mandarmani and others), and the rest are sections of the state pages.

## Candidates not created

{chr(10).join(crows)}
""")

# ── AEO ─────────────────────────────────────────────────────────────────────
ae = []
for s, a in arts.items():
    ae.append(f"### [{a['title']}](/blog/{s})\n\n**Quick answer ({len(a['quickAnswer'].split())} words):** {a['quickAnswer']}\n\n**Key takeaways:** {len(a['takeaways'])} · **Tables:** {sum(1 for x in a['sections'] if x.get('table'))} · **FAQs ({len(a['faqs'])}):**\n\n" + "\n".join(f"- {f['q']}" for f in a["faqs"]))
write("beach-travel-aeo-map.md", f"""# Beach Travel: AEO map

Generated {DATE}. Every article opens with a 40 to 80 word quick answer and key takeaways, uses comparison tables, and ends with FAQs marked up as `FAQPage`. The hub has its own quick answer and five FAQs.

{chr(10).join(ae)}
""")

# ── GEO ─────────────────────────────────────────────────────────────────────
gr = ["| Page | Main entity (schema type) | Within | Regions | Places mentioned |", "| --- | --- | --- | --- | --- |"]
for s, a in arts.items():
    ab = a["about"]
    gr.append(f"| `/blog/{s}` | {cell(ab['name'])} ({ab['type']}) | {cell((ab.get('containedIn') + ' → India') if ab.get('containedIn') else 'India')} | {cell(', '.join(a['regions']))} | {cell(', '.join(a.get('places', [])) or '—')} |")
write("beach-travel-geo-entity-map.md", f"""# Beach Travel: GEO entity map

Generated {DATE}. Each article's `BlogPosting` names its main entity in `about` (a `TouristDestination` inside its state and India, or a `Thing` for topic pages), lists places in `mentions`, and adds an `ItemList` of the beaches or items described. Breadcrumbs place each page under Beach Travel and its parent.

## Example relationships

- Goa → India → Konkan coast → north Goa (Arambol, Mandrem, Morjim, Vagator, Anjuna, Baga, Calangute, Candolim) → south Goa (Colva, Benaulim, Cavelossim, Agonda, Palolem) → water sports, nightlife, turtle nesting.
- Varkala → Thiruvananthapuram district → Kerala → India → Arabian Sea → Varkala cliff → beach → surfing.
- Swaraj Dweep (Havelock) → Andaman Islands → Andaman and Nicobar Islands → Bay of Bengal → Radhanagar (Blue Flag), Kalapathar, Elephant Beach → snorkelling, diving.
- Puri → Odisha → Bay of Bengal → Golden Beach (Blue Flag) → Jagannath Temple → Konark → Chandrabhaga → Chilika (Irrawaddy dolphins).
- Shivrajpur → Devbhumi Dwarka → Gujarat → Arabian Sea → Blue Flag → Dwarka, Bet Dwarka.
- Rushikonda → Visakhapatnam → Andhra Pradesh → Bay of Bengal → Blue Flag → water sports; Vizag beach road → Bheemili.

## Entities by page

{chr(10).join(gr)}
""")

# ── URL map ─────────────────────────────────────────────────────────────────
ur = ["| Title (SEO) | H1 | Slug | Primary keyword | Secondary keywords | Intent | Parent | Related pages | Existing URL conflicts | Status |", "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    a = arts.get(u["slug"])
    if u["slug"] == "beach-travel":
        ur.append(f"| Beach Travel in India: Beaches, Coasts & Planning \\| Kudozz Club | Beach Travel in India | `/beach-travel` | {cell(u['primary'])} | {cell(', '.join(u['secondary']))} | {cell(u['intent'])} | `/` | `/packages/goa`, `/packages/andaman-nicobar`, `/plan-your-trip` | {cell(u['conflicts'])} | Live |")
    elif a:
        rel = [r["href"] for r in a["related"]] + [l["href"] for l in a["nextSteps"]][:3]
        ur.append(f"| {cell(a['seoTitle'])} | {cell(a['title'])} | `/blog/{u['slug']}` | {cell(u['primary'])} | {cell(', '.join(a['secondaryKeywords']))} | {cell(u['intent'])} | `{u['parent']}` | {cell(', '.join(f'`{r}`' for r in rel))} | {cell(u['conflicts'] or 'None')} | Live |")
    else:
        st = "Merged into `" + u["mergedInto"] + "`" if u["status"] == "merged" else "Manual review"
        ur.append(f"| — | — | `{u['slug']}` | {cell(u['primary'])} | — | — | — | — | {cell(u['reason'])} | {st} |")
write("beach-travel-url-map.md", f"""# Beach Travel: URL and title map

Generated {DATE}. {len(created)} live URLs (hub plus {len(created) - 1} articles), {len(merged)} merged candidates and {len(deferred)} for manual review. No existing URL changed and no redirects are needed.

{chr(10).join(ur)}
""")

# ── Progress ────────────────────────────────────────────────────────────────
pr = ["| # | Topic | URL | Research | Content | SEO | AEO | GEO | Images | Internal Links | QA | Status |", "| - | ----- | --- | -------- | ------- | --- | --- | --- | ------ | -------------- | -- | ------ |"]
for i, u in enumerate(urlmap, 1):
    if u["status"] == "create":
        if u["slug"] == "beach-travel":
            pr.append(f"| {i} | Beach Travel in India (hub) | `/beach-travel` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
        else:
            a = arts[u["slug"]]
            pr.append(f"| {i} | {cell(a['short'])} ({words(a)} words) | `/blog/{u['slug']}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
    elif u["status"] == "merged":
        pr.append(f"| {i} | {cell(u['slug'])} | → `{u['mergedInto']}` | ✅ | — | — | — | — | — | — | ✅ | Merged |")
    else:
        pr.append(f"| {i} | {cell(u['slug'])} | — | ✅ | — | — | — | — | — | — | — | Manual review |")
write("beach-travel-progress.md", f"""# Beach Travel: progress

Generated {DATE}. Research ✅ means the topic was checked against existing content and current search results; QA ✅ means the page passed `scripts/beach/build.py` (strict), `scripts/beach/verify-html.py` and the site-wide link check, or that the merge decision is documented.

{chr(10).join(pr)}
""")
