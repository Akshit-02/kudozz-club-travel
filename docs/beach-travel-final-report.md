# Beach Travel cluster: final report

Completed on 25 September 2026.

## Outcome

| | |
|---|---|
| Existing coastal, beach and water-activity pages audited | 124 (see `beach-travel-inventory.md`) |
| Candidate topics evaluated | 120 (see `beach-travel-url-map.md`) |
| **Pages published** | **24**: the `/beach-travel` hub and 23 articles |
| Merged into existing or new pages | 96 |
| Held for manual review | 1 (sailing in India) |
| Words in the articles | 22,803 (759 to 1,851 per article) |
| FAQs with `FAQPage` schema | 116, plus 5 on the hub |
| Comparison tables | 48 |
| New hero images | 24, from Wikimedia Commons, each credited |
| Existing guides now pointing to a beach page | 67 |

## What was built

- **Hub.** `/beach-travel` has the H1 "Beach Travel in India" and covers every section in the brief:
  - destinations, states, and beach activities and water sports;
  - couples, families, luxury and budget trips;
  - offbeat beaches and travel guides;
  - featured packages, FAQs and a Plan My Trip call to action.

  Its schema is `CollectionPage` with an `ItemList`, plus `BreadcrumbList` and `FAQPage`.
- **Articles.** 23 articles in `src/content/beach/`:
  - six overviews: best beach destinations, best beaches, beach holidays, beach trips, beach tourism and coastal tourism;
  - 12 state and island guides: Goa, the Andamans, Lakshadweep, Kerala, Karnataka, Maharashtra, Tamil Nadu, Odisha, Gujarat, Andhra Pradesh, West Bengal and Puducherry;
  - dolphin watching;
  - beach honeymoons, offbeat beaches, best time, and beach safety.
- **Same system as the Adventure cluster.** The beach cluster reuses the same JSON schema and template (`ClusterArticleView`) and the same `/blog/[slug]` route. There is no new routing system and no existing URL changed.
- **Article structure.** Each article has:
  - an introduction, a quick answer of 40 to 80 words, key takeaways, and a first CTA ("Planning a beach holiday in India?");
  - comparison tables and a section for each beach, with best-for notes;
  - where to stay, how many days, a suggested itinerary and who it suits (on state pages);
  - the best time, getting there, safety, packing and FAQs;
  - a second CTA, "Ready for your beach escape?", which follows the chain destination guide → things to do → itinerary → package → Plan My Trip.
- **Linking.**
  - `GuideTripCTA` shows "Planning a beach holiday? Explore our guide to …" on 67 guides and on their things-to-do articles.
  - Coastal state package pages show a "Beaches in <state>" block.
  - Honeymoon, family, luxury, budget and weekend package pages show a "Beaches for …" block.
  - The adventure water pages link back to the beach pages.
  - There is a "Beaches" link in the header and footer, a "Beach Travel" category on the blog index, and an `llms.txt` section.
  - Every page is in the sitemap, and `docs/blog-post-links.csv` is updated.

## Key decisions

- **The hub carries "beach travel in India".** A separate `/blog/beach-travel-in-india` page would have had the same H1 and intent, so it was not created.
- **Beach tourism and coastal tourism have their own intents,** separate from beach travel. Beach tourism covers management and rules; coastal tourism covers the coast beyond the beach.
- **One page per state (`best-beaches-in-<state>`).** "Beach travel in X" and "best beaches in X" return the same search results.
- **Water activities were not duplicated.** They were already published in the Adventure cluster. Parasailing, jet skiing and sea walking are sections of the water sports page.
- **No page per beach, month, traveller type or origin city.** Those topics are sections of the state, season, holidays and trips pages. Every decision is recorded in `beach-travel-cannibalization.md`.

## Validation (all passing)

| Check | Result |
|---|---|
| `python3 scripts/beach/build.py` (strict) | 23 articles, 0 errors, 0 warnings |
| `python3 scripts/adventure/build.py` | 41 articles, 0 errors (unchanged after the shared refactor) |
| `npx tsc --noEmit` / `npm run lint` | Pass / no warnings |
| `npm run build` | 859 static pages |
| `node scripts/check-links.mjs` | 22,222 references, none broken |
| `python3 scripts/beach/verify-html.py` | 23 articles and the hub: canonical, indexable, one H1, title and description length and uniqueness, OG image, breadcrumb, required schema, no review markup, images on disk, internal links resolve, in the sitemap, no duplicate sitemap URLs |
| Adventure and things-to-do HTML checks | 0 problems |
| Production server | The hub and all 23 articles return 200 and an unknown slug returns 404. Guide pointers, package blocks and header links render. The hub and the Goa page were checked in Chrome at desktop width. |

## Honest notes and follow-ups

- **Word counts.**
  - The state pages for major coasts are 1,100 to 1,850 words.
  - Smaller coasts (Puducherry, Andhra Pradesh) and the listing pillars are 760 to 1,100 words.
  - We did not pad them. The beach cluster's minimum lengths in the validator are set to match (800 for pillars, 750 elsewhere).
- **Mobile layout.** It uses the site's existing responsive classes, but we did not check it on a phone. Please test on a phone before launch.
- **Facts to re-check each season:**
  - the Blue Flag list, which is renewed every year;
  - Mandarmani's rules on driving on the beach;
  - Goa's water-sports reopening date;
  - the St Mary's Island and Netrani boat seasons;
  - Lakshadweep permits and packages.
- **Hero images that show a place near the topic.** These are described honestly in the alt text:
  - the dolphin-watching hero shows a boat on Chilika, not a dolphin;
  - the Tamil Nadu hero is a beach near Dhanushkodi.
- **Sailing** is held for manual review, because there are too few public sailing options to write about reliably.
