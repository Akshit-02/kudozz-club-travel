# Nature Travel cluster: final report

Completed 2026-09-27.

## Outcome

| | |
|---|---|
| Candidate topics reviewed | 179 |
| Existing nature-related pages audited | About 70 destination guides for waterfalls, lakes, caves, valleys, geology, rivers and forests, plus overlapping pages in the Wildlife, Hills, Adventure, Heritage and Beach clusters (see `nature-travel-existing-site-audit.md`) |
| **New pages created** | **34**: the `/nature-travel` hub, 32 articles, and one travel-style package page (`/packages/nature-holidays`) |
| Merged into an approved page or section (MERGE) | 108 |
| Served by an existing page (UPDATE EXISTING) | 31 (birding, parks, monsoon hills, treks, rock-cut caves, tribal tourism, beaches and destination guides) |
| Intentionally not created (DO NOT CREATE) | 7 (monthly and doorway-like pages) |
| Redirects required | None. No existing URL changed and no merged URL was ever published |
| Words across the articles | About 26,700 (764 to 957 per article) |
| FAQs (with `FAQPage` schema) | 196, plus 5 on the hub |
| Tables (comparisons, months, routes, day plans) | 40 |
| New hero images (Wikimedia Commons, credited) | 32, plus an existing credited Valley of Flowers photo reused for the hub |

**Existing pages improved:**

- 88 destination guides carry a nature pointer ("Love the outdoors? See our guide to …").
- 23 state and UT package pages have a "Nature in <state>" block.
- Seven travel-style pages have "Nature trips for …" blocks.
- `/packages/northeast-india` has a nature guide block.
- 23 articles in the Wildlife, Hills, Adventure, Heritage and Beach clusters now link contextually into this cluster.
- Site-wide: the footer, the blog index category, the sitemap, `llms.txt` and the blog-links CSV.

## What was built

- **Hub:** `/nature-travel`, with the H1 "Nature Travel in India". Its sections follow the brief:
  - hero and quick answer; best nature destinations and natural wonders;
  - landscapes (forests, waterfalls, lakes, rivers, valleys, caves);
  - regions (Himalaya, Western Ghats, Northeast); seven states;
  - eco tourism, biodiversity, blooms and villages, with birdwatching handed to Wildlife;
  - seasons; couples, families, retreats (budget and luxury), offbeat and photography;
  - 30 destination guides, itineraries, packages, FAQs and Plan My Trip.

  Its schema is `CollectionPage` with an `ItemList` of all 32 articles, plus `BreadcrumbList` and `FAQPage`. Its design matches the other cluster hubs exactly.
- **The 32 articles:**
  - **Core (2):** best nature destinations; natural wonders.
  - **Landscapes (6):** forests, waterfalls, lakes, riverside destinations, valleys, natural caves.
  - **Regions (3):** Himalayan nature, the Western Ghats, Northeast India.
  - **States (7):** Kerala, Karnataka, Meghalaya, Uttarakhand, Himachal Pradesh, Odisha, Madhya Pradesh.
  - **Themes (7):** eco tourism, biodiversity hotspots, flower valleys and blooms, nature retreats, village tourism, nature photography, offbeat nature.
  - **Planning and travellers (4):** best time (month by month), how to plan, couples, families.
  - **Itineraries (3):** Meghalaya (six days), Kerala (seven days), Karnataka's Western Ghats (eight days).
- **Template:** the existing JSON cluster template on `/blog/[slug]`, so there is no new routing. Each article has:
  - a 40 to 80 word quick answer, takeaways and tables;
  - safety and packing lists, FAQs, related reading and a sidebar;
  - two subtle CTAs ("Planning a nature trip?" and "Want the forests, waterfalls and viewpoints woven into one trip?").
- **Schema:** `BlogPosting`, with `about` set to a `TouristDestination` or `Thing` and places in `mentions`, plus `BreadcrumbList`, `FAQPage` and `ItemList`. There is no review markup.
- **Commercial:**
  - The new **Nature Holidays** travel style lists every guide.
  - No prices, hotels, partnerships or eco-certifications are stated anywhere. The retreats page explains how to question eco-claims.

## Key decisions (details in `nature-travel-cannibalization.md`)

- **Nature owns landscape and ecosystem intent.**
  - Wildlife keeps birdwatching, parks, safaris and species.
  - Hills keeps hill towns, mountain destinations and monsoon hills.
  - Adventure keeps treks, camping and rafting.
  - Heritage keeps rock-cut caves and tribal tourism.
  - Beach keeps coasts and islands.
  - Each boundary is linked both ways.
- **Merged instead of separate pages:**
  - Monsoon nature travel goes into monsoon hill stations, waterfalls and the Western Ghats page.
  - Summer and winter nature travel become rows in the best-time page.
  - Budget and luxury go into retreats; solo and first-timers go into the planning page.
- **No monthly pages.**
- **State pages only where nature intent is distinct:** the seven states listed above. Other states are covered in the regional and landscape pages.

## Accuracy

- **Research:** facts were verified with live searches (see `nature-travel-serp-research.md`):
  - Ramsar count, given as "about a hundred";
  - Valley of Flowers season;
  - UN Tourism Best Tourism Villages (Pochampally 2021, Dhordo 2023);
  - living root bridges on UNESCO's Tentative List, with the dossier submitted January 2026;
  - Neelakurinji cycles and UNESCO natural sites.
- **Nothing is promised:** blooms, water flow, river clarity and wildlife sightings are always described as seasonal and never guaranteed.
- **Changeable rules** (permits, park openings, seasonal closures, trek bookings, ropeways) are framed as "check before you go".
- **Superlatives** are used only where widely documented, for example Chilika as India's largest coastal lagoon. Others are hedged, such as "widely cited as" for Mullayanagiri and Deomali.
- **Recent monsoon disasters** are mentioned in the safety notes: Wayanad in 2024, Himachal in 2023 and 2025.

## Images

- **Selection:** 32 new heroes in `public/images/nature/`, chosen from contact sheets and checked by eye. The hub reuses an existing credited Valley of Flowers photo, because the first pick cropped badly at hero width.
- **Rejected candidates:** non-India results (Amalfi coast images for Ziro), forest-fire photos for Wayanad, signboards, and a hero that duplicated another page's photo.
- **Inline images** reuse credited photos of the same place.
- **Credits** are in `public/images/blogs/IMAGE_CREDITS.json`; two with unclear authorship are recorded as Commons states them.

## Validation

| Check | Result |
|---|---|
| `python3 scripts/nature/build.py` (strict) | 32 articles, 0 errors, 0 warnings |
| Adventure, beach, wildlife, spiritual, heritage, hills and things-to-do builds | 0 errors |
| `npx tsc --noEmit` / `npm run lint` | Pass; no warnings |
| `npm run build` | Pass (hub prerendered as static) |
| `node scripts/check-links.mjs` | 28,624 references across 1,078 files, none broken |
| Duplicate SEO titles, H1s and meta descriptions across all clusters | None |
| Orphan check | None (every article is a card on the hub) |

**Fix found during QA.** `src/lib/nature.ts` had been scaffolded loading the `hills` directory; it now loads `nature`.

## Remaining opportunities

- **Standalone guides** for places covered only in cluster pages: Silent Valley, Agumbe, Kudremukh, Kodachadri, Simlipal, Mawphlang, Binsar, Great Himalayan National Park and Patalkot.
- **More state nature pages** (Sikkim, Arunachal Pradesh, Tamil Nadu, Maharashtra), if search demand proves distinct from the regional pages.
- **A header link to the hub.** The header already has ten items, so the hub is linked from the footer only for now.

## Manual verification items

These are also listed in `nature-travel-progress.md`:

- **Valley of Flowers:** opening and closing dates.
- **Eravikulam:** calving closure dates.
- **Neelakurinji:** the bloom expected around 2030.
- **Living root bridges:** UNESCO status.
- **Ramsar sites:** the official count.
- **Karnataka treks:** the booking portal.
- **Seasonal park openings.**
- **Permits.**
- **Monsoon advisories.**
- **Regional flights to Jeypore.**
- **Mobile rendering.**

## Production server check

- **Status codes:** all 32 articles, the hub, `/packages/nature-holidays`, `/packages/kerala`, `/packages/northeast-india` and `/packages/honeymoon` return 200; an unknown slug returns 404.
- **CTAs:** both CTAs are on every article.
- **Package blocks:** the "Nature in <state>", "Nature trips for …", combo and "Choose your nature holiday" blocks, and the guide pointers ("Love the outdoors?"), were confirmed in the served HTML.
- **Desktop:** the hub and an article were reviewed in Chrome.
- **All clusters:** `verify-html.py` reports 0 problems, and the sitemap has 1,058 URLs.
- **Not checked:** browser automation could not emulate a phone width, so mobile rendering still needs a manual check.
