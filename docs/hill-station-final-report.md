# Hill Station Travel cluster: final report

Completed 2026-09-26.

## Outcome

| | |
|---|---|
| Candidate topics reviewed (groups 01 to 22 of the brief) | 261 |
| Existing hill-station pages audited | About 80 hill and mountain destination guides and 40 things-to-do articles, plus overlapping pages in the Adventure, Heritage, Wildlife and Spiritual clusters (see `hill-station-existing-site-audit.md`) |
| **New pages created** | **42**: the `/hill-station-travel` hub, 40 articles, and one travel-style package page (`/packages/hill-station-holidays`) |
| Existing pages reviewed and improved | See the breakdown below |
| Candidates merged into an approved page (MERGE) | 84 |
| Candidates served by an existing page (UPDATE EXISTING) | 122 (destination guides, their best-time and itinerary sections, Adventure, Heritage and Spiritual pages, and package pages) |
| Intentionally not created (DO NOT CREATE) | 14: monthly pages, four origin-city pages, and three destination honeymoon pages |
| Redirects required | None. No existing URL changed and no merged URL was ever published |
| Words across the articles | About 32,400 (750 to 1,070 per article) |
| FAQs (with `FAQPage` schema) | 231, plus 5 on the hub |
| Tables (comparisons, distances, months, routes) | 50 |
| New hero images (Wikimedia Commons, credited) | 41 |

**Existing pages improved:**

- 102 destination guides now carry a hill-station pointer ("Comparing hill stations? See our guide to …").
- 20 state package pages have a "Hill stations in <state>" block.
- Seven travel-style pages have "Hill trips for …" blocks.
- `/packages/northeast-india` has a hill-station guide block.
- 22 articles in the Adventure, Heritage, Wildlife, Spiritual and Beach clusters now link contextually into this cluster.
- Site-wide: the footer, blog index, sitemap, `llms.txt` and the blog-links CSV.

## What was built

- **Hub:** `/hill-station-travel`, with the H1 "Hill Station Travel in India". Its sections follow the brief:
  - hero and quick answer; best hill stations; regions; states; seasons (summer, winter, snow, monsoon);
  - couples, families, budget and luxury; weekend trips near five cities;
  - road trips, tea and coffee, and planning; adventure, nature and wildlife links;
  - 28 destination guides, itineraries, packages, FAQs and Plan My Trip.

  Its schema is `CollectionPage` with an `ItemList` of all 40 articles, plus `BreadcrumbList` and `FAQPage`.
- **The 40 articles:**
  - **Core (2):** best hill stations; best mountain destinations. The latter covers Ladakh, Spiti, Kinnaur and Zanskar as valleys and high-altitude destinations, not hill stations.
  - **Regions (4):** Himalayan; Northeast and Darjeeling; South India; western and central India.
  - **States (10):** Himachal Pradesh, Uttarakhand, Jammu and Kashmir, Sikkim, West Bengal, Meghalaya, Tamil Nadu, Kerala, Karnataka and Maharashtra.
  - **Seasons (4):** summer, winter, places to see snow, monsoon.
  - **Traveller types (4):** couples, families, budget, luxury.
  - **Near the cities (5):** Delhi, Mumbai and Pune, Bengaluru, Chennai, Kolkata.
  - **Themes (3):** mountain road trips, tea tourism, coffee plantation tourism.
  - **Planning (3):** how to plan a trip, packing list, responsible mountain travel.
  - **Itineraries (5):** Shimla–Manali, Uttarakhand (Garhwal and Kumaon), Kashmir, Darjeeling–Sikkim, and Ooty–Kodaikanal–Munnar.
- **Template:** the existing JSON cluster template on `/blog/[slug]`, so there is no new routing. Each article has:
  - a 40 to 80 word quick answer, takeaways and tables;
  - safety and packing lists, FAQs, related reading and a sidebar;
  - two subtle CTAs ("Planning a hill holiday?" and "Want to combine several mountain destinations into one trip?").
- **Schema:** `BlogPosting`, with `about` set to a `TouristDestination` or `Thing` and places in `mentions`, plus `BreadcrumbList`, `FAQPage` and `ItemList`. `Organization` and `WebSite` come from the layout. There is no review markup.
- **Commercial:**
  - The new **Hill Stations** travel style lists every guide.
  - State packages, the Northeast combo and seven style pages link to the relevant guides.
  - No prices, hotels, partnerships or guarantees are stated anywhere.

## Key decisions (details in `hill-station-cannibalization.md`)

- **One hub.** Hill-station travel, hill-station tourism and mountain travel are one intent, served by `/hill-station-travel`. Hill holidays merge into best hill stations.
- **Separate mountain-destinations pillar.** It uses correct terminology for high valleys and regions.
- **No per-destination best-time or 2-day and 3-day itinerary pages.** Every major guide already has `best-time` and `itinerary`/`visit-plan` sections. Only multi-destination itineraries were created.
- **Snow page kept separate from winter.** The snow page carries explicit seasonality caveats.
- **No monthly pages.** Month tables live inside the seasonal pages.
- **Origin-city pages only for Delhi, Mumbai and Pune, Bengaluru, Chennai and Kolkata.** Hyderabad, Ahmedabad, Chandigarh and Jaipur would have been doorway-like, and are answered by the regional and state pages.
- **Other clusters' pages stay canonical.** Skiing, treks, paragliding, toy trains, monasteries and wildlife remain with their own clusters, with contextual links both ways.
- **State pages only where there is depth.** Arunachal, Nagaland, Mizoram, Manipur, Gujarat, Rajasthan, Madhya Pradesh and Andhra Pradesh are covered in the regional pages.

## Accuracy

- **Research:** facts were verified with live searches on 26 September 2026 (see `hill-station-serp-research.md`):
  - Ooty and Kodaikanal e-passes;
  - Rohtang permits and the Atal Tunnel;
  - Kashmir's 2026 reopening;
  - Gulmarg's ski season;
  - the Joshimath–Auli ropeway closure;
  - the Sela Tunnel and Arunachal's ILP;
  - Sikkim PAP and Nathu La rules;
  - Neelakurinji cycles;
  - Mahabaleshwar in the monsoon;
  - Shimla-area snowfall months.
- **Snow is always "likely, never guaranteed".** Drive times are approximate ranges.
- **Permits, e-passes, pass openings and advisories are framed as "check before you go".** The Kashmir pages carry an explicit advisory note.
- **Altitude:** general guidance only, with a recommendation to consult a doctor; there is no medical dosing.
- **Tradition is labelled as such,** for example Baba Budan and coffee.

## Images

- **Selection:** 41 new heroes in `public/images/hills/`, chosen from contact sheets and checked by eye to make sure each shows the named place and a plausible season.
- **Replaced candidates:**
  - The five state searches (Sikkim, West Bengal, Meghalaya, Tamil Nadu, Kerala) that first returned nothing were re-run.
  - Road-trip candidates showing tunnel-construction camps were replaced with a Manali–Leh highway photo.
- **Inline images** reuse credited photos of the same place.
- **Credits** are in `public/images/blogs/IMAGE_CREDITS.json`.

## Validation

| Check | Result |
|---|---|
| `python3 scripts/hills/build.py` (strict) | 40 articles, 0 errors, 0 warnings |
| Adventure, beach, wildlife, spiritual, heritage and things-to-do builds | 0 errors |
| `npx tsc --noEmit` / `npm run lint` | Pass; no warnings |
| `npm run build` | Pass |
| `node scripts/check-links.mjs` | 27,323 references across 1,041 files, none broken |
| `verify-html.py` for all seven clusters | 0 problems; sitemap has 1,024 URLs |
| Orphan check | None (every article is a card on the hub) |
| Production server | All 40 articles and the hub return 200; `/packages/hill-station-holidays` returns 200; an unknown slug returns 404. Both CTAs are on every article. State, style and combo blocks and guide pointers were confirmed in the served HTML |

**Fix to the checker.** The latest commit turned image optimisation off (`images.unoptimized`), so pages now emit raw `/images/...` paths. This exposed a bug in the image check of `scripts/adventure/verify-html.py` and `scripts/things-to-do/verify-html.py`: an absolute path passed to `os.path.join` meant files were never found. Before, the check never matched any path, so it passed without testing anything. It is now fixed, and it genuinely confirms every referenced image exists on disk.

## Remaining opportunities

- **Standalone guides for hill towns covered only in state pages:** Chail, Kufri, Narkanda, Palampur, Almora, Kanatal, Binsar, Coonoor, Panchgani and Mirik.
- **A Chandigarh origin page,** if search data shows demand distinct from the Delhi page.
- **A Winter Travel or Snow cluster hub,** if more snow-activity content is added.
- **A header link to the hub.** The header already has ten items and was tightened to fit, so the hub is in the footer only for now.

## Manual verification items (also in `hill-station-progress.md`)

- **Kashmir advisories:** re-check before each season.
- **Ooty and Kodaikanal e-pass rules:** confirm each season.
- **Rohtang:** confirm the opening date and permit rules each year.
- **Joshimath–Auli ropeway:** update if it reopens.
- **Sikkim and Arunachal permits:** confirm, including Nathu La days.
- **Neelakurinji:** confirm the Eravikulam bloom nearer 2030.
- **Kashmir rail:** confirm through services from Jammu.
- **Seasonal month ranges:** review after unusual winters.
- **Mobile rendering:** browser automation could not emulate a phone width in this session. Please review the hub, one article and the header menu on a phone.
