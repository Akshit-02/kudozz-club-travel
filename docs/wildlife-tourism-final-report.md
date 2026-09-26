# Wildlife Tourism cluster: final report

Completed 2026-09-26.

## Outcome

| | |
|---|---|
| Candidate topics evaluated | 132 |
| **Pages published** | **32**: the `/wildlife-tourism` hub and 31 articles |
| Merged into an existing or new page (not created) | 99, each with a documented reason |
| Held for manual review | 1 (Nagarjunsagar-Srisailam Tiger Reserve) |
| Existing wildlife pages audited | 87 (see `wildlife-tourism-inventory.md`) |
| Words across the articles | 25,470 (750 to 1,262 per article) |
| FAQs (with `FAQPage` schema) | 178, plus 5 on the hub |
| Comparison, season and route tables | 59 |
| New hero images (Wikimedia Commons, credited) | 31, plus 1 existing credited image reused |
| Existing guides now pointing to a wildlife article | 48 |

## What was built

- **Hub:** `/wildlife-tourism`, with the H1 "Wildlife Tourism in India", an overview and a quick answer. It has the 13 sections from the brief:
  1. best wildlife destinations
  2. national parks
  3. tiger reserves
  4. wildlife sanctuaries
  5. wildlife safaris
  6. wildlife by species
  7. birdwatching
  8. wildlife by state
  9. wildlife travel guides
  10. wildlife itineraries
  11. responsible wildlife tourism
  12. wildlife tour packages
  13. plan your wildlife trip

  It also has FAQs. Its schema is `CollectionPage` with an `ItemList` of all 31 articles, plus `BreadcrumbList` and `FAQPage`.
- **The 31 articles:**
  - **Pillars (8):** best wildlife destinations, best national parks, best wildlife sanctuaries, best wildlife safaris, tiger safari in India, best tiger reserves, where to see wildlife (species by species), and birdwatching.
  - **Tiger reserves with no existing guide (3):** Pench, Satpura and Sariska, plus the tiger safari planning guide.
  - **Species (3):** leopard safari, where to see rhinos, and snow leopard tours.
  - **States (11):** Rajasthan, Madhya Pradesh, Uttarakhand, Maharashtra, Karnataka, Kerala, Assam, Gujarat, West Bengal, Odisha and Tamil Nadu.
  - **Planning (5):** planning a wildlife safari (with traveller types), best time month by month, packing list, photography, and responsible tourism.
- **Article template:** the same JSON template and `/blog/[slug]` route as the adventure and beach clusters, so there is no new routing and no URL changes.
  - Each article has a 40 to 80 word quick answer, 3 to 7 takeaways, tables, a safety list, a packing list, FAQs and related reading.
  - It carries both CTAs from the brief: "Planning a wildlife trip? … Plan My Trip →" and "Ready to plan your wildlife escape? … Plan My Trip →".
- **Schema:** `BlogPosting`, with `about` set to a `TouristDestination` or `Thing` and places in `mentions`, plus `BreadcrumbList`, `FAQPage` and `ItemList`. `Organization` and `WebSite` come from the layout. There are no ratings or reviews.
- **Linking into the site:**
  - `GuideTripCTA` adds "Planning a wildlife trip? See our guide to …" on 48 park, state and destination guides.
  - State package pages show a "Wildlife in <state>" block.
  - `/packages/wildlife-tours` lists every wildlife guide.
  - The family, honeymoon, luxury and weekend package pages show a "Wildlife trips for …" block.
  - Six adventure and beach articles now link across to wildlife pages.
  - The header ("Wildlife") and footer link to the hub, and the blog index has a "Wildlife Tourism" category.
  - `llms.txt`, the sitemap and `docs/blog-post-links.csv` all include the cluster.

## Key decisions (details in `wildlife-tourism-cannibalization.md`)

- **The hub carries the pillar intent,** so `/blog/wildlife-tourism-in-india` was not created.
- **Existing park guides keep their safari intent.** This covers Ranthambore, Corbett, Kanha, Bandhavgarh, Tadoba, Panna, Kaziranga, Gir, the Sundarbans, Kabini, Bandipur, Periyar and 20 more. Candidate pages such as "Kanha safari" and "Kaziranga itinerary" point to those guides, and to their itinerary anchors where one exists.
- **Topics folded into other pages:**
  - Safari types are sections of best wildlife safaris.
  - Traveller types are sections of the planning guide; luxury also points to `/packages/luxury-holidays`.
  - Goa's sanctuaries are covered in best wildlife sanctuaries.
  - Andhra Pradesh's tiger reserve is covered in best tiger reserves.

## Accuracy

- **Fact checks:** the facts were checked against official and primary sources (PIB, WII and park or state portals) and current reporting. See `wildlife-tourism-research.md`.
- **Figures carry their census year:** tigers 3,682 (2022), leopards 13,874 (2022), snow leopards 718 (2024), lions 891 (2025), and Kaziranga's 2,613 rhinos (2022).
- **Closures and booking windows** are stated as current and flagged "check before you go".
- **Designations use the legal category:** for example, Keoladeo and Sultanpur are national parks, Jaldapara has been a national park since 2014, and Jawai is not a national park.
- **Sightings and prices:** every article says sightings are never guaranteed. No prices or operators are quoted.

## Images

- **Heroes:** there are 31 new heroes in `public/images/wildlife/`. Each was chosen from contact sheets and checked by eye for the right species and place.
  - The alt text describes what the photo shows. For example, the Sariska hero is a chital crossing a forest road, not a tiger.
  - Credits are in `public/images/blogs/IMAGE_CREDITS.json`.
- **Snow leopards:** Commons had no usable new snow leopard photo, so the existing credited Hemis snow leopard image is the hero for that article.
- **Inline images** reuse credited photos already on the site: tigers, lion, rhinos, elephants, gaur, the Sundarbans, Kanha, Tadoba, Periyar and Chilika.

## Validation (all passing)

| Check | Result |
|---|---|
| `python3 scripts/wildlife/build.py` (strict) | 31 articles, 0 errors, 0 warnings |
| `scripts/adventure/build.py`, `scripts/beach/build.py`, `scripts/things-to-do/build.py` | 41, 23 and 143 articles, 0 errors |
| `npx tsc --noEmit`, `npm run lint` | pass; no warnings |
| `npm run build` | 891 static pages |
| `node scripts/check-links.mjs` | 23,046 references, none broken |
| `verify-html.py` for wildlife, beach, adventure and things-to-do | 0 problems. Checks canonical, indexable, one H1, title and description length, OG image, breadcrumb, required schema, no review markup, images, internal links, sitemap and duplicates |
| Production server (`next start`, no dev server running) | Hub and all 31 articles return 200, and an unknown slug returns 404. Both CTAs, the package blocks and a guide pointer were confirmed in the served HTML. The hub and one article were checked visually in Chrome at desktop width |

## Follow-ups for the team

- **Mobile layout.** The browser window could not be resized and the page cannot be framed, so mobile was not checked by eye. The layout uses the site's existing responsive grid, and tables scroll sideways. Please check it on a phone.
- **Re-check each season:**
  - the tiger reserve count (new reserves are declared often);
  - the 2026 tiger estimation results when they are published;
  - Kuno and Gandhi Sagar cheetah visitor access;
  - Eravikulam's calving closure dates;
  - Similipal's opening date;
  - Gir, Corbett and Kaziranga season dates.
- **Nagarjunsagar-Srisailam:** held for manual review; revisit if its tourism information improves.
- **How to add or update an article:**
  1. Add the slug to `scripts/wildlife/url-map.json` and a hero to `scripts/wildlife/heroes.json`.
  2. Write `src/content/wildlife/<slug>.json`.
  3. Run `scripts/wildlife/build.py`, then `scripts/wildlife/report.py`.
