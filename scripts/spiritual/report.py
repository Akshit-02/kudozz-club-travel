"""Generate the Spiritual Tourism docs (docs/spiritual-tourism-*.md) from
scripts/spiritual/url-map.json, scripts/spiritual/guide-links.json and the
article JSON files. Run after build.py:

  python3 scripts/spiritual/report.py

The audit, SERP research and final report are written by hand.
"""
import json, os, re, collections

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DOCS = os.path.join(ROOT, "docs")
CONTENT = os.path.join(ROOT, "src/content/spiritual")
DATE = "2026-09-26"
urlmap = json.load(open(os.path.join(HERE, "url-map.json")))
arts = {f[:-5]: json.load(open(os.path.join(CONTENT, f))) for f in sorted(os.listdir(CONTENT)) if f.endswith(".json")}
guide_links = json.load(open(os.path.join(HERE, "guide-links.json")))
created = [u for u in urlmap if u["status"] == "create"]
merged = [u for u in urlmap if u["status"] == "merged"]
nopage = [u for u in urlmap if u["status"] == "no-page"]
HUB_SRC = open(os.path.join(ROOT, "src/app/spiritual-tourism/page.tsx")).read()


def url(u):
    return "/spiritual-tourism" if u["slug"] == "spiritual-tourism" else f"/blog/{u['slug']}"


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

# ── Inventory ───────────────────────────────────────────────────────────────
inv = []
for g in sorted({u["group"] for u in urlmap}):
    rows = [u for u in urlmap if u["group"] == g]
    inv.append(f"### {g}\n\n| Candidate | Decision | URL / served by | Reason |\n| --- | --- | --- | --- |")
    for u in rows:
        if u["status"] == "create":
            inv.append(f"| {cell(u['title'])} | Approved and published | `{url(u)}` | {cell(u['intent'])}; {cell(u['kind'])} page |")
        elif u["status"] == "merged":
            inv.append(f"| `{u['slug']}` | Merged | `{u['mergedInto']}` | {cell(u['reason'])} |")
        else:
            inv.append(f"| `{u['slug']}` | No page | `{u['mergedInto'] or '—'}` | {cell(u['reason'])} |")
    inv.append("")
write("spiritual-tourism-inventory.md", f"""# Spiritual Tourism: master content inventory

Generated {DATE} by `scripts/spiritual/report.py` from `scripts/spiritual/url-map.json`.

{len(urlmap)} candidate topics were reviewed across groups A to S: {len(created)} approved (the hub and {len(created) - 1} articles), {len(merged)} merged into an existing guide or an approved page, and {len(nopage)} not created. A page was approved only where it had a distinct intent, enough verifiable information and linking value, and no existing page already served it (see `spiritual-tourism-existing-site-audit.md` and `spiritual-tourism-cannibalization.md`).

{chr(10).join(inv)}
""")

# ── Keyword map ─────────────────────────────────────────────────────────────
km = ["| URL | H1 | Primary keyword | Secondary keywords | Long-tail keywords | PAA / question keywords | Search intent | Target audience | Parent topic | Child topics | Related entities | Existing page relationship | Internal links in | Internal links out | Canonical | Schema |",
      "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in created:
    if u["slug"] == "spiritual-tourism":
        km.append(f"| `/spiritual-tourism` | Spiritual Tourism in India | {cell(u['primary'])} | {cell(', '.join(u['secondary']))} | spiritual places to visit in India; pilgrimage trip India | What is spiritual tourism in India?; Do I need to book darshan in advance? | {cell(u['intent'])} | All pilgrims and spiritual travellers | India | {len(children['/spiritual-tourism'])} pillar, state and planning pages | India; all traditions | Replaces the merged core pillars | Header, footer, all {len(arts)} articles | All {len(arts)} articles, 22 destination guides, packages | https://club.kudozz.in/spiritual-tourism | CollectionPage, ItemList, BreadcrumbList, FAQPage |")
        continue
    a = arts[u["slug"]]
    sec = a["secondaryKeywords"]
    rel = merged_into.get(url(u), [])
    rel_txt = (f"Serves merged candidates: {', '.join(rel[:4])}" + (" and more" if len(rel) > 4 else "")) if rel else (u["conflicts"] or "New page; links to the existing guides")
    km.append(
        f"| `{url(u)}` | {cell(a['title'])} | {cell(u['primary'])} | {cell(', '.join(sec[:2]))} | {cell(', '.join(sec[2:]) or '—')} | {cell('; '.join(f['q'] for f in a['faqs'][:3]))} | {cell(u['intent'])} | {cell(', '.join(a['travellers']))} | `{u['parent']}` | {cell(', '.join(f'`{c}`' for c in children.get(url(u), [])) or '—')} | {cell(', '.join(a.get('places', [])[:6]) or a['about']['name'])} | {cell(rel_txt)} | {links_in[u['slug']] + 1 + guide_in[u['slug']]} (hub{', ' + str(guide_in[u['slug']]) + ' guide pointers' if guide_in[u['slug']] else ''}) | {len(set(links_out[u['slug']]))} | https://club.kudozz.in/blog/{u['slug']} | BlogPosting, BreadcrumbList, FAQPage, ItemList |")
write("spiritual-tourism-keyword-map.md", f"""# Spiritual Tourism: keyword map

Generated {DATE}. One primary keyword per URL. "Internal links in" counts the hub, other spiritual articles and guide pointers; package blocks and other clusters add more. PAA-style questions are the article's own FAQ questions, written from the question patterns in current results (see `spiritual-tourism-serp-research.md`).

{chr(10).join(km)}

## Merged candidates

| Candidate keyword | Served by |
| --- | --- |
{chr(10).join(f"| {cell(u['primary'])} | `{u['mergedInto']}` |" for u in merged)}
""")

# ── AEO ─────────────────────────────────────────────────────────────────────
ae = []
for s, a in arts.items():
    ae.append(f"### [{a['title']}](/blog/{s})\n\n**Quick answer ({len(a['quickAnswer'].split())} words):** {a['quickAnswer']}\n\n**At a glance:** {len(a['takeaways'])} takeaways · {sum(1 for x in a['sections'] if x.get('table'))} tables · **FAQs ({len(a['faqs'])}):**\n\n" + "\n".join(f"- {f['q']}" for f in a["faqs"]))
write("spiritual-tourism-aeo-map.md", f"""# Spiritual Tourism: AEO map

Generated {DATE}. Every article answers its primary question in a 40 to 80 word quick answer near the top, follows with key takeaways ("at a glance"), uses tables for lists, routes and seasons, and ends with FAQs marked up as `FAQPage`. The hub answers "What is spiritual tourism in India?" in its own quick answer and five FAQs. Where traditions differ (Jyotirlingas, Shakti Peethas), the answer names the variation rather than choosing one. Answers never promise darshan, sightings or spiritual outcomes.

{chr(10).join(ae)}
""")

# ── GEO ─────────────────────────────────────────────────────────────────────
gr = ["| Page | Main entity (schema type) | Within | Regions | Places and sacred sites mentioned |", "| --- | --- | --- | --- | --- |"]
for s, a in arts.items():
    ab = a["about"]
    gr.append(f"| `/blog/{s}` | {cell(ab['name'])} ({ab['type']}) | {cell((ab.get('containedIn') + ' → India') if ab.get('containedIn') else 'India')} | {cell(', '.join(a['regions']))} | {cell(', '.join(a.get('places', [])) or '—')} |")
write("spiritual-tourism-geo-entity-map.md", f"""# Spiritual Tourism: GEO entity map

Generated {DATE}. Each article's `BlogPosting` names its main entity in `about` (a `TouristAttraction` for a temple, a `TouristDestination` for a state or circuit, or a `Thing` for a topic), lists sacred places in `mentions`, and adds an `ItemList`. Breadcrumbs place every page under Spiritual Tourism and its parent. Relationships below follow official and widely accepted identifications; disputed ones are labelled as such on the pages.

## Example relationship chains

- India → Maharashtra → Nashik district → Trimbak → Trimbakeshwar Temple → Jyotirlinga (Hindu, Shaiva) → Godavari source at Brahmagiri → Nashik-Trimbakeshwar Simhastha 2027 → Maharashtra Jyotirlinga route → `/packages/maharashtra`.
- India → Gujarat → Devbhumi Dwarka district → Nageshwar Jyotirlinga (also claimed: Aundha Nagnath, Maharashtra; Jageshwar, Uttarakhand) → Dwarkadhish Temple (one of the four dhams) → Bet Dwarka → Saurashtra temple route → `/packages/gujarat`.
- India → Uttarakhand → Garhwal → Yamunotri, Gangotri, Kedarnath (Jyotirlinga), Badrinath (also one of the four dhams) → Char Dham Yatra (registration, IRCTC HeliYatra) → Haridwar → `/packages/char-dham-yatra`.
- India → Bihar → Gaya district → Bodh Gaya → Mahabodhi Temple (UNESCO) → Buddhist Circuit → Rajgir, Nalanda (UNESCO), Vaishali → Kushinagar and Sarnath (Uttar Pradesh) → Lumbini (Nepal) → `/packages/buddhist-circuit`.
- India → Punjab → Amritsar → Harmandir Sahib and Akal Takht → Panj Takht (Anandpur Sahib, Talwandi Sabo, Patna, Nanded) → Vaisakhi → `/packages/punjab`.
- India → Karnataka → Hassan district → Shravanabelagola → Gommateshwara (Bahubali) → Jain tradition → Mahamastakabhisheka (next due 2030) → Belur and Halebidu.
- India → Uttar Pradesh → Varanasi (Kashi Vishwanath, Jyotirlinga) → Prayagraj (Triveni Sangam, Kumbh) → Ayodhya (Ram Mandir) → Ayodhya–Varanasi–Prayagraj itinerary → `/packages/uttar-pradesh`.

## Entities by page

{chr(10).join(gr)}
""")

# ── Cannibalisation ─────────────────────────────────────────────────────────
COMPARE = [
    ("Spiritual Tourism vs Spiritual Travel", "Same result set", "MERGE", "Both served by `/spiritual-tourism`"),
    ("Spiritual Tourism vs Pilgrimage Tourism vs Religious Tourism", "Same result set; policy phrasing", "MERGE", "Served by `/spiritual-tourism`"),
    ("Holy Places vs Spiritual Destinations vs Best Pilgrimage Places", "Same listicle intent", "MERGE", "`/blog/best-pilgrimage-places-in-india`; the retreat sub-intent goes to the yoga and retreats page"),
    ("Temple Tourism vs Famous Temples", "Searchers want the temples", "MERGE", "`/blog/famous-temples-in-india`"),
    ("Best Pilgrimage Places vs Famous Temples", "Cross-faith places vs temples by region and architecture", "KEEP SEPARATE", "Each links to the other"),
    ("Char Dham Yatra (Uttarakhand) vs Char Dham of India", "Different places and intent", "KEEP SEPARATE", "Both pages state the difference"),
    ("Char Dham Yatra guide vs `/packages/char-dham-yatra`", "Informational vs commercial", "KEEP SEPARATE", "Guide links to the package as the next step"),
    ("12 Jyotirlingas vs Jyotirlinga Yatra", "List vs planning", "KEEP SEPARATE", "Route, itinerary, cost and tour variants merged into the Yatra page"),
    ("Jyotirlinga pages vs existing temple guides (Somnath, Ujjain and others)", "Overview vs destination", "EXPAND EXISTING PAGE", "No duplicate temple pages; the guides get a pointer to the Jyotirlinga pages"),
    ("Buddhist Circuit vs Buddhist Tourism", "Route through Bihar and UP vs Buddhist sites India-wide", "KEEP SEPARATE", "Buddhist pilgrimage merged into Buddhist tourism"),
    ("Sikh pilgrimage vs Panj Takht Yatra", "Overview vs a specific five-Takht route", "KEEP SEPARATE", "Punjab spiritual tourism merged into Sikh pilgrimage"),
    ("State spiritual pages vs state travel guides", "Sacred places and routes vs general state travel", "KEEP SEPARATE", "State pages link to the state guide and packages"),
    ("State spiritual pages vs things-to-do articles", "State-wide sacred places vs everything in one city", "KEEP SEPARATE", "Linked both ways through pointers and next steps"),
    ("Destination guides vs city spiritual pages (Varanasi, Tirupati and others)", "Same intent", "NO PAGE", "The guides remain canonical; no city spiritual pages created"),
    ("Varanasi 2-day and 3-day itineraries vs Varanasi guide", "Guide already has a visit plan", "NO PAGE", "Point to `/blog/varanasi-travel-guide#visit-plan`"),
    ("Ayodhya–Varanasi–Prayagraj itinerary vs the three city guides", "Multi-city route vs single-city planning", "KEEP SEPARATE", "Itinerary links each guide"),
    ("Itineraries vs tour packages", "Informational plans vs commercial pages", "KEEP SEPARATE", "No prices on itineraries; packages carry the quote CTA"),
    ("Yoga and meditation retreats vs Yoga in Rishikesh", "India-wide vs one destination", "KEEP SEPARATE", "Spiritual, meditation and ashram retreats merged into the India page"),
    ("Yoga in Rishikesh vs Rishikesh guides", "Courses and ashrams vs the town", "KEEP SEPARATE", "Rishikesh guide gets a pointer to the yoga page"),
    ("Spiritual festivals vs Kumbh Mela", "Calendar vs one event with dated schedules", "KEEP SEPARATE", "Year-specific dates live only on the Kumbh page"),
    ("Origin-city pages (Ahmedabad, Bengaluru and others)", "Answered by state pages", "NO PAGE", "Only Delhi and Mumbai published"),
]
rows = ["| Topic comparison | Overlap | Decision | Action |", "| --- | --- | --- | --- |"] + [f"| {cell(a)} | {cell(b)} | **{c}** | {cell(d)} |" for a, b, c, d in COMPARE]
cand = ["| Candidate | Decision | Now served by | Reason |", "| --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] == "merged":
        target = u["mergedInto"]
        dec = "MERGE" if target.startswith(("/blog/", "/spiritual")) and target.split("#")[0][6:] in arts or target == "/spiritual-tourism" else ("EXPAND EXISTING PAGE" if target.startswith("/blog/") else "MERGE (commercial page)")
        cand.append(f"| `{u['slug']}` | {dec} | `{target}` | {cell(u['reason'])} |")
    elif u["status"] == "no-page":
        cand.append(f"| `{u['slug']}` | NO PAGE | `{u['mergedInto'] or '—'}` | {cell(u['reason'])} |")
write("spiritual-tourism-cannibalization.md", f"""# Spiritual Tourism: cannibalisation control

Generated {DATE}. Decisions use the brief's vocabulary: KEEP SEPARATE, MERGE, EXPAND EXISTING PAGE (the existing guide stays canonical and gets a cluster pointer), REDIRECT and NO PAGE. **No redirects are required**: no existing URL changed, and no merged candidate URL was ever published.

## Explicit comparisons

{chr(10).join(rows)}

## Every candidate not created

{chr(10).join(cand)}
""")

# ── URL map ─────────────────────────────────────────────────────────────────
ur = ["| Title (SEO) | H1 | URL | Primary keyword | Kind | Parent | Status |", "| --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    a = arts.get(u["slug"])
    if u["slug"] == "spiritual-tourism":
        ur.append("| Spiritual Tourism in India: Pilgrimages & Temples \\| Kudozz Club | Spiritual Tourism in India | `/spiritual-tourism` | spiritual tourism in India | hub | `/` | Live |")
    elif a:
        ur.append(f"| {cell(a['seoTitle'])} | {cell(a['title'])} | `/blog/{u['slug']}` | {cell(u['primary'])} | {u['kind']} | `{u['parent']}` | Live |")
    else:
        ur.append(f"| — | — | `{u['slug']}` (not created) | {cell(u['primary'])} | — | — | {'Merged into `' + u['mergedInto'] + '`' if u['status'] == 'merged' else 'No page'} |")
write("spiritual-tourism-url-map.md", f"""# Spiritual Tourism: URL and title map

Generated {DATE}. {len(created)} live URLs (hub plus {len(created) - 1} articles), {len(merged)} merged candidates and {len(nopage)} no-page decisions. Clean `/blog/<slug>` URLs on the existing route, self-referencing canonicals, no existing URL changed, no redirects needed. One new commercial URL, `/packages/buddhist-circuit`, was added as a combo package.

{chr(10).join(ur)}
""")

# ── Internal linking ────────────────────────────────────────────────────────
orphans = [s for s in arts if f'"{s}"' not in HUB_SRC and links_in[s] == 0 and guide_in[s] == 0]
pointer_rows = "\n".join(f"| `/blog/{g}` | `/blog/{v['slug']}` |" for g, v in sorted(guide_links.items()))
cross = ["`/blog/best-beaches-in-odisha` → spiritual Odisha", "`/blog/best-beaches-in-tamil-nadu` → spiritual Tamil Nadu", "`/blog/best-beaches-in-gujarat` → spiritual Gujarat", "`/blog/adventure-activities-in-uttarakhand` → Char Dham Yatra guide", "`/blog/trekking-in-india` → Hemkund Sahib Yatra", "`/blog/wildlife-tourism-in-gujarat` → spiritual Gujarat", "`/blog/wildlife-tourism-in-uttarakhand` → spiritual Uttarakhand"]
write("spiritual-tourism-internal-linking.md", f"""# Spiritual Tourism: internal linking

Generated {DATE}.

## Architecture

India → `/spiritual-tourism` (hub) → tradition or circuit page (Jyotirlingas, Char Dham, Shakti Peethas, Buddhist, Sikh, Jain, Sufi, retreats) → state spiritual page → city destination guide → temple section or temple page → things to do → itinerary anchor or itinerary page → tour package → `/plan-your-trip`.

Every article has two calls to action ("Planning to visit?" after the key takeaways, and "Want this pilgrimage turned into a practical itinerary?" before the FAQs), next steps that follow this chain, related reading, and a sidebar of related spiritual guides.

## Links added into the cluster

| Source | Links |
| --- | --- |
| Header ("Spiritual") and footer ("Spiritual Tourism") | Hub, site-wide |
| Hub `/spiritual-tourism` | All {len(arts)} articles, 22 destination guides, 8 itinerary anchors, 8 state packages, style and combo packages |
| Guide pointers (`GuideTripCTA`: "Planning a pilgrimage? See our guide to …") | {len(guide_links)} existing guides |
| State package pages ("Spiritual places in <state>") | 23 state package pages |
| `/packages/spiritual-tours` | Every spiritual article |
| Family, budget, weekend, group and luxury style pages ("Pilgrimages for …") | 2 to 4 articles each |
| `/packages/char-dham-yatra` and `/packages/buddhist-circuit` | Planning guides for each circuit |
| Other clusters | {len(cross)} contextual links (below) |
| Blog index | "Spiritual Tourism" category |
| `llms.txt` and `sitemap.xml` | Hub and all articles |

## Orphan check

Articles not linked from the hub, another spiritual article or a guide pointer: {', '.join(orphans) or 'none'}.

## Cross-cluster links

{chr(10).join('- ' + c for c in cross)}

Cluster articles also link out, where relevant, to Adventure (monsoon and winter treks, rafting in Rishikesh), Beach (Gujarat beaches near Dwarka), Wildlife (Maharashtra and Gujarat), heritage guides (Hampi, Khajuraho, Ellora, Konark) and the family, budget, weekend, group and luxury package styles. Honeymoon and hill-station links were not added because they were not contextually relevant.

## Guide pointers

| Guide | Points to |
| --- | --- |
{pointer_rows}
""")

# ── Progress ────────────────────────────────────────────────────────────────
pr = ["| Topic | URL | Research | Content | SEO | AEO | GEO | Images | Links | Schema | QA | Status |", "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |"]
for u in urlmap:
    if u["status"] == "create":
        if u["slug"] == "spiritual-tourism":
            pr.append("| Spiritual Tourism in India (hub) | `/spiritual-tourism` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
        else:
            a = arts[u["slug"]]
            pr.append(f"| {cell(a['short'])} ({words(a)} words) | `/blog/{u['slug']}` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Published |")
    elif u["status"] == "merged":
        pr.append(f"| {cell(u['slug'])} | → `{u['mergedInto']}` | ✅ | — | — | — | — | — | ✅ | — | ✅ | Merged |")
    else:
        pr.append(f"| {cell(u['slug'])} | — | ✅ | — | — | — | — | — | — | — | — | No page |")
MANUAL = [
    ("Hazur Sahib (Nanded) destination guide", "Covered in the Panj Takht page; a full guide needs verified local detail (sarais, timings)."),
    ("Shravanabelagola hero image", "No usable Commons photo of the Gommateshwara statue was found; the hero shows the town's Akkana Basadi with accurate alt text. Replace if a licensed statue photo becomes available."),
    ("Char Dham, Hemkund and Amarnath dates", "2026 dates verified; 2027 opening dates must be updated when announced (usually in February to April)."),
    ("Kumbh schedules", "Haridwar 2027, Nashik-Trimbakeshwar 2027 and Ujjain 2028 dates are as announced; re-check before each mela."),
    ("Sabarimala entry customs", "Described neutrally with a pointer to the Travancore Devaswom Board; re-check if the Supreme Court decides the pending reference."),
    ("Kushinagar airport", "No scheduled flights since November 2023; update if flights resume."),
    ("Mobile rendering", "Automated phone-width checks were not possible in this session; review the hub and one article on a phone."),
]
write("spiritual-tourism-progress.md", f"""# Spiritual Tourism: progress

Generated {DATE}. Research ✅ means the topic was checked against existing content and current sources; QA ✅ means the page passed `scripts/spiritual/build.py` (strict), `scripts/spiritual/verify-html.py` and the site-wide link check, or that the merge decision is documented.

{chr(10).join(pr)}

## Items needing manual verification or follow-up

| Item | Note |
| --- | --- |
{chr(10).join(f"| {a} | {b} |" for a, b in MANUAL)}
""")
