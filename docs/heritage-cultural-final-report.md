# Heritage & Cultural Tourism cluster: final report

Completed 2026-09-26.

## Outcome

| | |
|---|---|
| Candidate topics reviewed (groups 01 to 24 of the brief) | 285 |
| Existing heritage-intent pages audited | About 262 (see `heritage-cultural-existing-site-audit.md`) |
| **New pages created** | **54**: the `/heritage-cultural-tourism` hub, 52 articles and one travel-style package page (`/packages/heritage-tours`) |
| Existing pages reviewed and improved | See the breakdown below |
| Candidates merged into an approved page (MERGE) | 143 |
| Candidates served by an existing guide (UPDATE EXISTING) | 78 |
| Intentionally not created (DO NOT CREATE) | 11 (10 thin state pages and "cultural heritage of India") |
| Redirects required | None. No existing URL changed and no merged URL was ever published |
| Words across the articles | About 41,600 (750 to 1,070 per article) |
| FAQs (with `FAQPage` schema) | 299, plus 5 on the hub |
| Tables (lists, routes, closures, seasons) | 66 |
| New hero images (Wikimedia Commons, credited) | 53 |

**Existing pages reviewed and improved:**

- 101 destination guides now carry a heritage pointer ("Interested in the history? See our guide to …").
- 22 state package pages have a "Heritage of <state>" block.
- 5 travel-style pages have "Heritage trips for …" blocks.
- The Golden Triangle and Buddhist Circuit combo pages have heritage guide blocks.
- 26 articles in the spiritual, wildlife, beach and adventure clusters now link contextually into this cluster.
- Site-wide: the header, footer, blog index, sitemap, `llms.txt` and the blog-links CSV.
- Sarnath's 2026 UNESCO status was added to the spiritual Buddhist pages.

## What was built

- **Hub:** `/heritage-cultural-tourism`, with the H1 "Heritage & Cultural Tourism in India". Sections follow the brief:
  - India's heritage and a quick answer; themes; UNESCO monuments;
  - forts and palaces; archaeology, caves and museums; architecture;
  - historic cities, heritage trails and 26 destination guides;
  - living culture (crafts, textiles, dance and music, food); cultural festivals;
  - state-wise pages, itineraries, packages, FAQs and Plan My Trip.

  Its schema is `CollectionPage` with an `ItemList` of all 52 articles, plus `BreadcrumbList` and `FAQPage`.
- **The 52 articles:**
  - **Core (3):** historical places, planning, and all 45 UNESCO sites.
  - **Monuments (10):** the Taj Mahal, Red Fort, Qutub Minar, Humayun's Tomb, Amber Fort, Mehrangarh, Elephanta, Champaner-Pavagadh, Lothal, and Belur and Halebidu.
  - **Forts, palaces, archaeology and architecture (10):** famous forts, the forts of Rajasthan, the Maratha forts, palaces, archaeological sites, rock-cut caves, temple architecture, Mughal monuments, Deccan sultanate heritage and colonial-era heritage.
  - **Cities and culture (12):** heritage cities, heritage walks, museums, handicrafts, textiles, dance and music, cultural festivals, the Hornbill Festival, the Rann Utsav, tribal tourism, food heritage and the mountain railways.
  - **Itineraries (5):** the Golden Triangle, Rajasthan, South India, Gujarat and Madhya Pradesh.
  - **States (12):** Rajasthan, Gujarat, Madhya Pradesh, Maharashtra, Karnataka, Tamil Nadu, Uttar Pradesh, Delhi, Odisha, West Bengal, Telangana and Kerala.
- **Template:** the existing JSON cluster template on `/blog/[slug]`, so there is no new routing. Each article has:
  - an answer-first quick answer of 40 to 80 words, key takeaways and tables;
  - safety and packing lists, FAQs, related reading and a sidebar;
  - two subtle CTAs ("Planning a heritage trip?" and "Want to explore India's heritage on a route built around you?").
- **Schema:** `BlogPosting`, with `about` set to a `TouristAttraction`, `TouristDestination` or `Thing` and places in `mentions`, plus `BreadcrumbList`, `FAQPage` and `ItemList`. `Organization` and `WebSite` come from the layout. There is no review markup.
- **Commercial:**
  - The new **Heritage & Culture** travel style (`/packages/heritage-tours`) lists every guide.
  - The Golden Triangle combo gets a monument-guide block.
  - Palace stays are handed off to `/packages/luxury-holidays`.
  - No prices, hotels or partnerships are stated anywhere.
- **Navigation:**
  - A "Heritage" item was added to the header, and "Heritage & Culture" to the footer.
  - With ten header items, nav link padding went from `px-3` to `px-2`. The header was measured in Chrome to fit within the 1,200px container, with a 27px gap after the logo.

## Key decisions (details in `heritage-cultural-cannibalization.md`)

- **One hub.** Heritage, cultural and historical tourism return the same result set, so `/heritage-cultural-tourism` serves them all.
- **Monument pages vs city guides.** Monument pages cover site-visit planning; city guides keep the city intent, with pointers both ways.
- **Palaces.** Visiting a palace and staying in one are kept separate.
- **Festivals.** Cultural festivals are kept separate from spiritual festivals. Event pages are evergreen and carry the current season's dates.
- **State pages.** Created only for 12 states with enough depth. Ten others are covered by pillars and existing guides.
- **No city "heritage of X" or "heritage walk X" pages.** Existing guides and things-to-do articles already serve those intents.

## Accuracy

- **Sources.** Facts were verified with live searches (see `heritage-cultural-serp-research.md`):
  - UNESCO: 45 sites as of September 2026, including the Maratha Military Landscapes (2025) and Sarnath (2026);
  - Taj Mahal closures and night-viewing rules;
  - the Lothal dockyard debate;
  - Hornbill Festival and Rann Utsav dates.
- **Evidence, interpretation and tradition are kept apart.** Examples:
  - Lothal's basin: the dockyard reading and its critics;
  - Bhimbetka: dates are debated;
  - the "seven cities" of Delhi: lists vary;
  - Varanasi's age: "according to long tradition";
  - the Cheraman Juma Masjid: "traditionally regarded".
- **Colonial rule** is described plainly: imposed by force and extractive. Memorials such as the Cellular Jail and Jallianwala Bagh are included.
- **Tribal tourism** is consent-based and community-run. It warns against "tribal village tours" and states the legal protection of the Jarawa and Sentinelese.
- **What the pages do not include:** prices or fabricated opening hours. Changeable facts are framed as "check before you go".

## Images

- **Selection:** 53 new heroes in `public/images/heritage/`, chosen from contact sheets and checked by eye to make sure each photo shows the named site.
- **Tribal page:** its hero was swapped for a photo with a clear author credit.
- **Inline images** reuse credited photos of the same site already on the site. Where an inline image duplicated a hero's subject (CSMT, Brihadeeswarar), it was replaced.
- **Credits** are in `public/images/blogs/IMAGE_CREDITS.json`.

## Validation (all passing)

| Check | Result |
|---|---|
| `python3 scripts/heritage/build.py` (strict) | 52 articles, 0 errors, 0 warnings |
| Spiritual, wildlife, beach, adventure and things-to-do builds | 46, 31, 23, 41 and 143 articles, 0 errors |
| `npx tsc --noEmit` / `npm run lint` | Pass; no warnings |
| `npm run build` | Pass |
| `node scripts/check-links.mjs` | 25,878 references across 995 files, none broken |
| `verify-html.py` for heritage, spiritual, wildlife, beach, adventure and things-to-do | 0 problems. The sitemap has 982 URLs |
| Orphan check | None (every article is a card on the hub) |
| Production server (`next start`, no dev server running) | All 52 articles and the hub return 200, and an unknown slug returns 404. Both CTAs appear on every article. State, style and combo heritage blocks and guide pointers were confirmed in the served HTML. The hub and one article were checked in Chrome at desktop width |

## Remaining opportunities

- Monument pages for Fatehpur Sikri, Agra Fort, Konark and Ellora, if demand justifies moving them out of the existing guides.
- Heritage state pages for Bihar and Punjab, if data shows demand beyond the archaeology and spiritual pages.
- A Bidar and Vijayapura destination guide; the Deccan page currently covers both.
- Craft-village pages (Raghurajpur, Bhujodi), once enough verified local detail is available.

## Manual verification items (also in `heritage-cultural-progress.md`)

- **UNESCO list:** re-check after each July World Heritage Committee session.
- **Rann Utsav:** confirm the season each year. The Hornbill dates are fixed, but check the programme.
- **ASI closures and Taj night-viewing rules:** confirm periodically.
- **Nagaland ILP and Rann permits:** check the rules before each season.
- **Mountain-railway suspensions:** these change seasonally.
- **Mobile rendering:** the browser window could not be narrowed below the display width in this session. Please review the hub, one article and the header menu on a phone.
