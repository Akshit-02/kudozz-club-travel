# Adventure Travel cluster: final report

Completed 2026-09-25.

## Outcome

| | |
|---|---|
| Candidate topics in the brief | 74 |
| **Pages published** | **42**: the `/adventure-travel` hub and 41 articles |
| Merged into an existing or new page (not created) | 32, each with a documented reason |
| Held for manual review | 1 (weekend adventure trips from Hyderabad) |
| Words across the articles | 46,378 (903 to 1,668 per article) |
| FAQs (with `FAQPage` schema) | 213, plus 5 on the hub |
| Comparison and season tables | 49 |
| New hero images (Wikimedia Commons, credited) | 42 |
| Existing guides now pointing to an adventure article | 68 |

## What was built

- **Hub:** `/adventure-travel`, with the H1 "Adventure Travel in India" and the supporting copy from the brief. It has 10 sections:
  - an overview and quick answer;
  - activities, destinations, regions and seasons;
  - beginner adventures, trip ideas and featured packages;
  - guides and a Plan My Trip section.

  It also has FAQs. The page carries the pillar intent for "adventure travel/tourism in India". Its schema is `CollectionPage` with an `ItemList` of all 41 articles, plus `BreadcrumbList` and `FAQPage`.
- **Articles:** these are JSON files in `src/content/adventure/`. The existing `/blog/[slug]` route renders them through `components/adventure/AdventureArticle.tsx`, so there is no second routing system and no existing URL changed.
  - Each article includes:
    - the intro, a quick answer (40 to 80 words) and 3 to 7 key takeaways, then one quiet CTA;
    - the sections, with facts boxes (difficulty, duration, season, location, suitability) and tables;
    - safety guidance and a packing list;
    - a "Plan the trip" block, which is the second CTA and follows the chain destination guide → things to do → itinerary → package → Plan My Trip;
    - FAQs and related reading, plus a sidebar of related adventure guides.
  - The schema covers `BlogPosting` (with `about` set to a `TouristDestination` or `TouristAttraction` in its state and India, plus `mentions`), `BreadcrumbList`, `FAQPage` and `ItemList`. `Organization` and `WebSite` come from the site layout. There are no ratings or reviews.
- **The 41 articles:**
  - 2 pillars: adventure sports, and the best adventure destinations;
  - 18 activity articles: 4 trekking, 2 rafting, paragliding, 3 underwater, skiing, bungee, skydiving, ballooning, mountain biking, motorcycle trips, the Spiti bike trip, rock climbing, mountaineering, camping, kayaking, surfing, water sports and desert adventures;
  - 8 destination hubs: Manali, Ladakh, Himachal Pradesh, Uttarakhand, Goa, the Andamans, Sikkim and Meghalaya;
  - 3 weekend guides: from Delhi, from Mumbai and Pune, and from Bengaluru;
  - 4 planning guides: planning, packing list, best time, and beginners.
- **Linking into the existing site:**
  - `GuideTripCTA` adds a one-line adventure pointer on 68 destination guides and on their things-to-do articles.
  - State package pages show an "Adventure in <state>" block.
  - `/packages/adventure-tours` lists every activity guide.
  - The header ("Adventure") and footer link to the hub.
  - The blog index has an "Adventure Travel" category.
  - `llms.txt` has a new "Adventure travel" section.
  - The sitemap includes the hub and all 41 articles.
  - `docs/blog-post-links.csv` now lists the 41 new articles.

## Key decisions (details in `adventure-travel-cannibalization.md`)

- **The hub replaces `/blog/adventure-travel-in-india`**, because both had the same H1 and intent.
- **Existing guides that already own an activity keep it:**
  - Bir Billing (paragliding);
  - Gulmarg and Auli (skiing);
  - the Leh Ladakh road trip guide (Ladakh bike trip);
  - the Rishikesh adventure guide and its things-to-do article (adventure in Rishikesh).
- **Identical-intent pairs were merged:** "X in India" and "best places for X". For example, trekking now also covers best, Himalayan and high-altitude treks.
- **Adventure trip cost was not created**, because current prices could not be verified. Cost drivers are covered in the planning guide, and no article quotes prices.

## Accuracy

- Time-sensitive facts were checked on 25 September 2026 against official and primary sources; see `adventure-travel-research.md`. They include:
  - the Bir Billing ban from 15 July to 15 September;
  - the Rishikesh monsoon suspension;
  - the Auli ropeway closure;
  - the Chadar trek suspension in 2026;
  - Gulmarg gondola heights and institute course lengths.
- Changeable details are phrased as "about" or "check before you go".
- No operator names were invented. The only operators named are known by their sites (Jumpin Heights and Della Adventure), and their own published details were used.

## Images

- There are 42 new hero images from Wikimedia Commons. Every one was checked by eye before use.
- Alt text describes what each photo actually shows.
- Where no free photo of the exact activity exists, we used a photo of the place instead, with alt text that says so: the waves at Covelong for surfing, and Ladakh roads for mountain biking.
- Credits are in `public/images/blogs/IMAGE_CREDITS.json`. The tool is `scripts/adventure/images.py`.

## Validation (all passing)

| Check | Result |
|---|---|
| `python3 scripts/adventure/build.py` (strict) | 41 articles, 0 errors, 0 warnings. It checks required fields, URL-map approval and H1, quick-answer length, takeaways, FAQs, title and description length and uniqueness, word floors, banned phrases, em dashes, links and anchors, credited images with alt text, and unique heroes |
| `python3 scripts/things-to-do/build.py` | 143 articles, 0 errors (unchanged) |
| `npx tsc --noEmit` / `npm run lint` | pass / no warnings |
| `npm run build` | 835 static pages |
| `node scripts/check-links.mjs` (now also validates every literal `/blog/` link) | 21,482 references, none broken |
| `python3 scripts/adventure/verify-html.py` | 41 articles and the hub: canonical, indexable, one H1, title and description length, OG image, breadcrumb, required schema, no review markup, images on disk, internal links resolve to built pages, no title clashes with other blog pages, in the sitemap, no duplicate sitemap URLs |
| `python3 scripts/things-to-do/verify-html.py` | 143 pages, 0 problems |
| Production server (`next start`) | the hub and all 41 articles return 200, and an unknown slug returns 404. The guide pointers, package blocks and header link render. The hub and an article were checked visually in Chrome at desktop width |

A `next dev` server that had been left running from earlier in the day was writing into `.next` during testing and caused false 404s. It was stopped, and the site was rebuilt before the final checks.

## Follow-ups for the team

- **Mobile layout.** It uses the site's existing responsive grid classes, and tables scroll sideways. The browser window could not be resized during this session, so please check it on a phone.
- **Weekend adventure trips from Hyderabad.** On hold because nearby adventure options are thin; revisit if demand appears.
- **Re-check these facts each season:**
  - the status of the Auli ropeway, Stok Kangri and the Chadar trek;
  - skydiving camp dates;
  - hot air balloon operators;
  - North Sikkim road access;
  - Karnataka's forest trek booking rules.
- **How to add or update an article:**
  1. Add the slug to `scripts/adventure/url-map.json`.
  2. Write `src/content/adventure/<slug>.json`.
  3. Run `build.py`, then `report.py`.
