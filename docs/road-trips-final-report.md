# Road Trips cluster: final report

Completed 2026-09-28.

## Outcome

| | |
|---|---|
| Candidate topics reviewed (groups A to AG of the brief) | 223 |
| **New pages created** | **41**: the `/road-trips` hub, 39 articles, and one travel-style package page (`/packages/road-trip-holidays`) |
| Merged into an approved page or section (MERGE) | 125 |
| Served by an existing page (UPDATE EXISTING) | 46. These include the Leh Ladakh road trip guide, mountain road trips (Hills), motorcycle and Spiti bike pages (Adventure), and existing itineraries and destination guides |
| Intentionally not created (DO NOT CREATE) | 12: monthly pages, generic 2/3/5/7-day itineraries, and low-demand city pages |
| Redirects required | None. No existing URL changed and no merged URL was ever published |
| Words across the articles | About 31,400 (750 to 1,030 per article) |
| FAQs (with `FAQPage` schema) | 234, plus 5 on the hub |
| Tables (route legs, distances, day plans, seasons, costs) | 52 |
| New hero images (Wikimedia Commons, credited) | 40 |

**Existing pages improved:**

- 91 destination guides carry a "Going by road? See our guide to …" pointer.
- 22 state and UT package pages have a "Road trips in <state>" block.
- 11 travel-style pages have "Road trips for …" blocks.
- `/packages/northeast-india` and `/packages/golden-triangle` have "… by road" blocks.
- 26 articles in the Hills, Adventure, Heritage, Nature, Wildlife and Beach clusters now link contextually into this cluster.
- Site-wide: the footer, the blog index category, the sitemap, `llms.txt` and the blog-links CSV.

## What was built

- **Hub:** `/road-trips`, with the H1 "Road Trips in India". Its sections follow the brief:
  - best road trips, planning and self-drive;
  - Himalayan, Rajasthan, South India and Northeast road trips;
  - the Western Ghats and coastal road trips;
  - weekend road trips from six cities;
  - self-drive and bike (bike handed to Adventure);
  - cost, packing and safety;
  - themed trips (nature, adventure, wildlife, heritage, food) and families and couples;
  - itineraries and destination guides, packages, FAQs and Plan My Trip.

  Its schema is `CollectionPage` with an `ItemList` of all 39 articles, plus `BreadcrumbList` and `FAQPage`, and it uses the same design as the other hubs.
- **Route pages (13).** Each is built route-first: route overview, route options, approximate distances and times by leg, stops, overnight options, a day plan, season, driving considerations and a hand-off to the destination guide.
  - Delhi to Manali, Delhi to Shimla, Delhi to Rishikesh;
  - Manali to Leh, Srinagar to Leh, Spiti circuit;
  - Mumbai to Goa;
  - Bengaluru to Coorg, Bengaluru to Ooty, Bengaluru to Goa;
  - Chennai to Pondicherry, Kochi to Munnar;
  - Guwahati to Tawang.
- **State and regional pages (8):**
  - Himachal Pradesh, Uttarakhand, Rajasthan and Kerala;
  - South India, the Northeast, the Western Ghats and coastal India.
- **City-origin pages (6):** Delhi; Mumbai and Pune; Bengaluru; Chennai; Hyderabad; Kolkata.
- **Planning (6):** best road trips, how to plan, self-drive, cost, packing, and safety (including responsible travel).
- **Seasons and themes (6):** monsoon, winter, wildlife, food, families, couples.
- **Template:** the existing JSON cluster template on `/blog/[slug]`, with two subtle CTAs per article: "Planning a road trip?" and "Want the route, stops and stays planned around your dates?".
- **Schema:** `BlogPosting` (with `about` set to a `TouristDestination` or `Thing`, and places in `mentions`), `BreadcrumbList`, `FAQPage` and `ItemList`. `Organization` and `WebSite` come from the layout. There is no package or review schema, because nothing on the site supports it.
- **Commercial:** the new **Road Trips** travel style lists every guide. No prices, hotels, vehicles, drivers, partnerships or guarantees are stated.

## Key decisions (details in `road-trips-cannibalization.md`)

- **One canonical owner per intent:**
  - the Leh Ladakh guide owns "Ladakh road trip" and its itinerary, cost and packing;
  - Hills owns mountain and Himalayan road trips;
  - Adventure owns bike and motorcycle trips;
  - destination guides own what to do on arrival;
  - route pages own the journey.
- **Rajasthan:** one route page, with its itinerary, route, Delhi-start and city-trio variants merged into it. The Heritage itinerary stays canonical for heritage intent.
- **Spiti:** one road-trip page, with the approaches, circuit, cost and season merged. The bike intent stays with Adventure.
- **City-origin pages only for six cities with distinct destination sets.** Pune is merged into Mumbai; Jaipur, Chandigarh and Kochi go into their state pages; the remaining small cities were not created.
- **No generic duration or monthly pages.** Duration tables live inside route and city pages.
- **Package variants** (Himalayan, Rajasthan, luxury and so on) are consolidated into one travel style plus the state packages.

## Accuracy

Facts were verified with live searches on 27 and 28 September 2026 (see `road-trips-serp-research.md`):

- the 2026 openings of the Manali–Leh highway and the Kunzum route;
- the Zojila tunnel breakthrough (June 2026) and the Z-Morh tunnel;
- the Delhi–Dehradun Expressway (April 2026);
- the Mumbai–Goa NH66 status;
- the FASTag annual pass (₹3,075 for 2026–27, per PIB);
- the Bandipur and Mudumalai night closures;
- Ladakh's permit and fee rules;
- the Sela tunnel and the Arunachal ILP;
- the Kiratpur–Manali and Kerala NH66 works;
- Himachal's entry toll and Manali's green tax;
- self-drive rental rules.

How changeable facts are handled:

- Distances and times are approximate ranges.
- Fees without an authoritative figure are described without amounts.
- Road status, permits and closures are framed as "check before you go".
- Safety advice sticks to widely established rules (seat belts, helmets, no drink-driving, documents) and is marked as general guidance, not legal advice.
- A draft line with an error was corrected before publishing: the Shimla–Mandi link road now reads "via Tattapani and Sundernagar".
- The coastline length is no longer stated as a figure.

## Images

- **Selection:** 40 heroes in `public/images/roadtrips/`, chosen from contact sheets and checked by eye. Each shows the route, a stop on it, or a scene typical of it.
- **Replaced candidates:**
  - Mumbai–Goa results were all Konkan Railway freight trains; this was re-searched and replaced with Ganpatipule on the Konkan coast.
  - The coastal key had only weak candidates; this was re-searched and replaced with the Varkala cliffs.
- **Credits:** in `public/images/blogs/IMAGE_CREDITS.json`. One author string was cleaned up.
- **Inline images** reuse credited photos of the same places.

## Validation

| Check | Result |
|---|---|
| `python3 scripts/roadtrips/build.py` (strict) | 39 articles, 0 errors, 0 warnings |
| All other cluster builds (adventure, beach, wildlife, spiritual, heritage, hills, nature, things to do) | 0 errors |
| `npx tsc --noEmit` / `npm run lint` | Pass; no warnings |
| `npm run build` | Pass (hub prerendered as static) |
| `node scripts/check-links.mjs` | 29,861 references across 1,122 files, none broken (links and images) |
| `verify-html.py` for all nine clusters | 0 problems; sitemap has 1,099 URLs (42 road-trip URLs) |
| Duplicate SEO titles, H1s and meta descriptions across all clusters | None |
| Canonicals, H1s and schema (hub, one route page, one planning page) | Self-referencing canonicals; one H1 each; valid JSON-LD with the expected types |
| robots.txt | Unchanged; allows everything except `/api/` and `/admin/` |
| Orphans | None; every article is a card on the hub |
| Production server | All 39 articles and the hub return 200 with both CTAs; the travel style, state, style and combo blocks and the guide pointers were confirmed in the served HTML; an unknown slug returns 404 |
| Desktop rendering | Hub and one route page reviewed in Chrome |

**Cannibalisation checks against the other clusters:**

- **Adventure:** no bike pages created; links both ways.
- **Nature:** ghat roads vs ecosystems.
- **Hills:** mountain road trips stays canonical.
- **Beach:** the Beach cluster owns the beaches.
- **Wildlife:** safaris link out to the Wildlife cluster.
- **Heritage:** the heritage itineraries stay canonical.

All of these are documented, with links running in both directions.

## Remaining opportunities

- **Route pages with evidence of demand, to add later:** Delhi to Dharamshala, Delhi to Nainital, Hyderabad to Hampi, Guwahati to Ziro, and a Gujarat (Saurashtra and Kutch) road trip.
- **A Ladakh route cluster**, if the Leh Ladakh guide is ever split: Leh to Nubra, Pangong and Tso Moriri route pages.
- **A header link to the hub** (currently footer only, as for the other hubs).

## Manual verification items (also in `road-trips-progress.md`)

- **Ladakh and Spiti:** road openings each spring.
- **Zojila tunnel:** update when it opens to traffic.
- **Road works:** completion of NH66 Mumbai–Goa, Kiratpur–Manali and Kerala NH66.
- **FASTag annual pass:** the fee is revised each April.
- **Fees and permits:** Himachal's entry toll, Manali's green tax, Ladakh's environment fee and the Arunachal ILP.
- **Forest night bans** at Bandipur, Mudumalai and Amrabad, and the **Ooty and Kodaikanal e-passes.**
- **Anmod ghat:** repair status.
- **Kashmir advisories.**
- **Mobile rendering:**
  - Browser automation could not emulate a phone width. The window resize had no effect, iframes are blocked by `X-Frame-Options: DENY`, and headless Chrome enforces a minimum width.
  - The hub uses the same components as the other hubs.
  - Please check the hub, one route page and the package blocks on a phone.
