"""Generate the docs/things-to-do-*.md files from plan.json, inventory.json,
built.json and the article JSON. Run after build.py.
"""
import collections, glob, json, os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
DOCS = os.path.join(ROOT, "docs")
SITE = "https://club.kudozz.in"

plan = json.load(open(os.path.join(HERE, "plan.json")))
inv = {g["slug"]: g for g in json.load(open(os.path.join(HERE, "inventory.json")))}
built = {b["slug"]: b for b in json.load(open(os.path.join(HERE, "built.json")))}
arts = {os.path.basename(f)[:-5]: json.load(open(f)) for f in sorted(glob.glob(os.path.join(ROOT, "src/content/things-to-do/*.json")))}
tier = {e["slug"]: e["tier"] for e in plan["eligible"]}
by_guide = {a["guide"]: s for s, a in arts.items()}
DATE = "2026-09-25"


def md_escape(s):
    return str(s).replace("|", "\\|")


def write(name, lines):
    with open(os.path.join(DOCS, name), "w") as f:
        f.write("\n".join(lines).rstrip() + "\n")
    print("wrote docs/" + name)


def rows(order):
    return [arts[s] for s in order]


ORDER = sorted(arts, key=lambda s: (built[s]["state"], arts[s]["destination"]))

# 1. Inventory ---------------------------------------------------------------
skips = plan["skipped"]
reasons = collections.Counter(s["reason"] for s in skips)
L = [f"# Things to do: destination inventory", "", f"Generated {DATE} from `scripts/things-to-do/inventory.json` and `plan.json`.", "",
     f"- Guides audited: **{len(inv)}**", f"- Eligible for a dedicated \"Things to do\" article: **{len(plan['eligible'])}** (tier A: {sum(1 for e in plan['eligible'] if e['tier']=='A')}, tier B: {sum(1 for e in plan['eligible'] if e['tier']=='B')})",
     f"- Articles published: **{len(arts)}**", f"- Existing article audited instead of creating a new one: **{sum(1 for s in skips if s['action'].startswith('Existing'))}**",
     f"- Skipped with a documented reason: **{sum(1 for s in skips if s['action']=='Skip')}**", "",
     "Eligibility rule: a destination qualifies when it is a city, region, hill station, beach, island group or park with enough distinct activities to fill a grouped article (tier A: major destinations with high search demand; tier B: the rest). Single monuments, small villages, neighbourhoods and attractions already covered by a parent destination are skipped so that each search intent has one page.", "",
     "## Skip reasons", "", "| Reason | Guides |", "|---|---|"]
L += [f"| {md_escape(r)} | {n} |" for r, n in reasons.most_common()]
L += ["", "## Eligible destinations", "", "| Destination | State | Tier | Guide | Article |", "|---|---|---|---|---|"]
for e in sorted(plan["eligible"], key=lambda e: (e["state"], e["destination"])):
    L.append(f"| {e['destination']} | {e['state']} | {e['tier']} | [{e['guide']}](/blog/{e['guide']}) | [{e['slug']}](/blog/{e['slug']}) |")
L += ["", "## Existing article audited", ""]
for s in skips:
    if s["action"].startswith("Existing"):
        L.append(f"- `{s['guide']}`: {s['reason']}. Kept as is (a credited first-person guest contribution); the Ranthambore guide now points to it through the same \"things to do\" prompt used by the new articles, so no competing page was created.")
L += ["", "## Skipped guides", "", "| Guide | State | Reason | Covered by |", "|---|---|---|---|"]
for s in sorted(skips, key=lambda s: (inv.get(s["guide"], {}).get("state", ""), s["guide"])):
    if s["action"] != "Skip":
        continue
    parent = s.get("parent")
    cov = f"[{parent}](/blog/{parent})" if parent else ""
    L.append(f"| {s['guide']} | {inv.get(s['guide'], {}).get('state', '')} | {md_escape(s['reason'])} | {cov} |")
write("things-to-do-destination-inventory.md", L)

# 2. Title map ---------------------------------------------------------------
L = ["# Things to do: title map", "", f"Generated {DATE}. H1 = `title`; `<title>` = `seoTitle` (max 70 characters, checked by `build.py`). URL pattern: `/blog/things-to-do-in-<destination>`; slugs use the most-searched spelling (for example Bangalore, Mysore, Alleppey, Vizag, Gurgaon, Pondicherry).", "",
     "| URL | H1 | SEO title | Chars | Guide |", "|---|---|---|---|---|"]
for a in rows(ORDER):
    L.append(f"| /blog/{a['slug']} | {md_escape(a['title'])} | {md_escape(a['seoTitle'])} | {len(a['seoTitle'])} | {a['guide']} |")
write("things-to-do-title-map.md", L)

# 3. Keyword map -------------------------------------------------------------
L = ["# Things to do: keyword map", "", f"Generated {DATE}.", "",
     "Cannibalisation guard: each destination guide targets \"<place> travel guide\" and planning terms (best time, how to reach, itinerary, budget). The things-to-do article targets \"things to do in <place>\" and activity terms, links back to the guide's planning sections, and the guide links forward to the article. No two articles share a primary keyword (checked when this file is generated).", ""]
prim = collections.Counter(a["primaryKeyword"].lower() for a in arts.values())
dups = [k for k, n in prim.items() if n > 1]
L += [f"Duplicate primary keywords: **{len(dups)}**" + (f" ({', '.join(dups)})" if dups else ""), "",
      "| Article | Primary keyword | Secondary keywords | Search intent |", "|---|---|---|---|"]
for a in rows(ORDER):
    L.append(f"| {a['slug']} | {md_escape(a['primaryKeyword'])} | {md_escape('; '.join(a['secondaryKeywords']))} | {md_escape(a['searchIntent'])} |")
write("things-to-do-keyword-map.md", L)

# 4. AEO map -----------------------------------------------------------------
L = ["# Things to do: answer engine (AEO) map", "", f"Generated {DATE}.", "",
     "Each article is built to be quoted directly:", "",
     "- a **Quick answer** list near the top (the short answer to \"what are the best things to do in X\");",
     "- every activity as its own H3 with a one-paragraph answer and a facts list (time needed, best time, who it suits, cautions);",
     "- a \"one day in X\" plan, a \"by type of traveller\" section and practical tips;",
     "- 4 to 6 FAQs marked up as `FAQPage`, and all activities as an `ItemList`.", "",
     "| Article | Quick-answer items | Activities (H3) | FAQs | FAQ questions |", "|---|---|---|---|---|"]
for a in rows(ORDER):
    qs = " / ".join(f["q"] for f in a["faqs"])
    L.append(f"| {a['slug']} | {len(a['quickAnswer'])} | {built[a['slug']]['_items']} | {len(a['faqs'])} | {md_escape(qs)} |")
write("things-to-do-aeo-map.md", L)

# 5. GEO map -----------------------------------------------------------------
L = ["# Things to do: generative engine (GEO) map", "", f"Generated {DATE}.", "",
     "Entity signals on every article:", "",
     "- `BlogPosting` with `about` → `TouristDestination` (the place), `containedInPlace` → state → India;",
     "- `BreadcrumbList` Home → Blog → state hub → destination guide → article;",
     "- `ItemList` of every named activity or sight, in page order;",
     "- `FAQPage`;",
     "- named places, dates of festivals, distances and seasons written as plain facts in the text, with uncertain or changeable details (timings, permits, closures) flagged as such rather than stated as current fact;",
     "- `public/llms.txt` lists every article with a one-line summary and explains how articles relate to guides and packages.", "",
     "| Article | Place entity | State | Named activities / sights (ItemList) |", "|---|---|---|---|"]
for a in rows(ORDER):
    names = [it["name"] for s in a["sections"] for it in s["items"]]
    L.append(f"| {a['slug']} | {md_escape(a['destination'])} | {built[a['slug']]['state']} | {md_escape('; '.join(names))} |")
write("things-to-do-geo-map.md", L)

# 6. SERP research -----------------------------------------------------------
L = ["# Things to do: SERP research", "", f"Written {DATE}.", "",
     "## What ranks for \"things to do in <place>\" in India", "",
     "Research was done by reviewing the result pages for a sample of high-demand queries (Jaipur, Goa, Manali, Kerala, Mumbai, Rishikesh, Darjeeling, Hampi) and for smaller places (Kausani, Chopta, Majuli, Ziro). No ranking positions or search volumes are claimed here; the notes below describe the kinds of pages that appear.", "",
     "- **Aggregators dominate the top results**: TripAdvisor, Viator, GetYourGuide, Holidify, Thrillophilia and similar. Their pages are numbered lists (\"25 best things to do\"), heavy on ratings and bookable tours, thin on context.",
     "- **Official sources** (Incredible India, state tourism boards) rank for many places, usually with short attraction blurbs and few practical details.",
     "- **Travel blogs** rank for long-tail and smaller destinations with first-person itineraries.",
     "- **Common query modifiers**: \"at night\", \"for couples\", \"with family\", \"in winter\" / \"in monsoon\", \"beyond beaches\", \"offbeat\", \"in 2 days\", \"near <city>\".",
     "- **People Also Ask** themes repeat across places: what is X famous for, how many days are enough, best time to visit, is X safe / good for families, can it be done as a day trip, permit questions for border areas.", "",
     "## The gap Kudozz Club targets", "",
     "1. **Grouped, not ranked**: activities grouped by type (sights, nature, food, culture, day trips, seasons) instead of an arbitrary numbered list, which suits answer engines and readers who scan.",
     "2. **Practical facts under every activity**: time needed, best time, who it suits and cautions (closures, permits, safety), written honestly and without invented prices or timings.",
     "3. **Suitability notes**: \"by type of traveller\" sections answer the couples / family / friends modifiers directly.",
     "4. **Seasonal context**: a \"by season\" section where the experience changes through the year (hill stations, parks, beaches, festivals).",
     "5. **Direct answers to PAA questions** in an FAQ block with `FAQPage` schema.",
     "6. **A path to planning**: each article links to its full guide (best time, how to reach, itinerary, where to stay, budget), to nearby articles and to the state package page and Plan My Trip, instead of pushing bookable tours.", "",
     "## Title pattern", "",
     "`Things to Do in <Place>: <3 to 4 signature experiences>` for the H1, and a shorter `<title>` ending in `| Kudozz Club`. Numbers were deliberately left out of titles, because the article is not a ranked list and the count would be arbitrary.", "",
     "## Slug choice", "",
     "`/blog/things-to-do-in-<place>` using the most-searched spelling of the place (Bangalore over Bengaluru, Mysore over Mysuru, Alleppey over Alappuzha, Vizag over Visakhapatnam, Gurgaon over Gurugram, Pondicherry over Puducherry, Aurangabad over Chhatrapati Sambhajinagar), with the official name used in the text."]
write("things-to-do-serp-research.md", L)

# 7. Progress ----------------------------------------------------------------
L = ["# Things to do: progress", "", f"Status as of {DATE}: **{len(arts)} of {len(plan['eligible'])} eligible articles published**, 1 existing article audited, {sum(1 for s in skips if s['action']=='Skip')} guides skipped with reasons.", "",
     f"Total words: {sum(b['_words'] for b in built.values()):,}. Word-count floors (tier A 1,300, tier B 950) are checked by `build.py`.", "",
     "| # | Article | State | Tier | Words | Activities | FAQs | Hero | Status |", "|---|---|---|---|---|---|---|---|---|"]
for i, s in enumerate(ORDER, 1):
    a, b = arts[s], built[s]
    L.append(f"| {i} | [{s}](/blog/{s}) | {b['state']} | {tier.get(s, '')} | {b['_words']} | {b['_items']} | {b['_faqs']} | {a['hero']['src'].split('/')[-1]} | Published |")
write("things-to-do-progress.md", L)

# 8. Redirects ---------------------------------------------------------------
L = ["# Things to do: redirects", "", f"Written {DATE}.", "",
     "No redirects were needed. No existing URL was changed, renamed or removed:", "",
     "- all 582 destination guides keep their URLs (`/blog/<place>-travel-guide`);",
     "- the new articles are new URLs rendered by `src/app/blog/[slug]/page.tsx` with `dynamicParams = false`, so only the 143 listed slugs exist and no slug collides with a guide folder (checked by `build.py` and `verify-html.py`);",
     "- the existing Ranthambore first-time-visitors article keeps its URL and is now linked from the Ranthambore guide.", "",
     "## New URLs", ""]
L += [f"- {SITE}/blog/{s}" for s in sorted(arts)]
write("things-to-do-redirects.md", L)

print("done")
