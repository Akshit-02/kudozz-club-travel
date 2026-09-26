# Spiritual Tourism cluster: final report

Completed 2026-09-26.

## Outcome

| | |
|---|---|
| Candidate topics reviewed (groups A to S of the brief) | 182 |
| Existing spiritual-intent pages audited | 218 (see `spiritual-tourism-existing-site-audit.md`) |
| **New pages created** | **48**: the `/spiritual-tourism` hub, 46 articles and one combo package (`/packages/buddhist-circuit`) |
| Existing pages reused as the canonical page for their topic | 44 guides and things-to-do articles (plus 4 package pages) serving merged candidates such as Jyotirlinga temples that already had guides, city spiritual pages and itineraries |
| Existing pages updated | 81 guides with a pilgrimage pointer; `/packages/spiritual-tours`, 23 state package pages, 5 style pages and 2 combo pages with guide blocks; 7 adventure, beach and wildlife articles with contextual links; the header, footer, blog index, sitemap and `llms.txt` |
| Candidates merged (not created) | 126 |
| Intentionally not created | 9 (8 origin-city pages and Goa) |
| Redirects required | None. No existing URL changed and no merged URL was ever published |
| Words across the articles | 36,335 (750 to 900 per article) |
| FAQs (with `FAQPage` schema) | 300, plus 5 on the hub |
| Tables (lists, routes, seasons, comparisons) | 70 |
| New hero images (Wikimedia Commons, credited) | 47 |

## What was built

- **Hub:** `/spiritual-tourism`, with the H1 "Spiritual Tourism in India", following the structure in the brief:
  - hero, Spiritual India overview and quick answer;
  - the major traditions;
  - Jyotirlingas, Char Dham (both kinds, kept distinct), Shakti Peethas and Sufi shrines;
  - Buddhist Circuit, Sikh pilgrimage and Jain pilgrimage;
  - 22 sacred-city guides, 15 state pages, itineraries (3 pages and 8 guide anchors);
  - spiritual tour packages, travel guides, FAQs and Plan My Trip.

  Its schema is `CollectionPage` with an `ItemList` of all 46 articles, plus `BreadcrumbList` and `FAQPage`.
- **The 46 articles:**
  - **Core (6):** best pilgrimage places, famous temples, planning, packing, festivals and the Kumbh Mela.
  - **Jyotirlingas (7):** the list, the yatra planner, the Maharashtra route, and Trimbakeshwar, Bhimashankar, Grishneshwar and Nageshwar, the four Jyotirlingas that had no guide.
  - **Char Dham and Shakti Peethas (4):** the Char Dham Yatra of Uttarakhand, the Char Dham of India, the Kedarnath–Badrinath yatra and the Shakti Peethas.
  - **Other traditions (9):**
    - Buddhist Circuit and Buddhist tourism;
    - Sikh pilgrimage, the Panj Takht and Hemkund Sahib;
    - Jain pilgrimage, Ranakpur and Shravanabelagola;
    - Sufi shrines.
  - **States (15):** Uttar Pradesh, Uttarakhand, Gujarat, Rajasthan, Maharashtra, Madhya Pradesh, Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Odisha, West Bengal, Bihar, Himachal Pradesh, and Jammu and Kashmir.
  - **Itineraries and retreats (5):** Ayodhya–Varanasi–Prayagraj, pilgrimage trips from Delhi and from Mumbai, yoga and meditation retreats, and yoga in Rishikesh.
- **Article template:** the existing JSON cluster template on `/blog/[slug]`, so there is no new routing. Each article has:
  - an answer-first quick answer of 40 to 80 words, key takeaways and tables;
  - safety and packing lists, FAQs, related reading and a sidebar;
  - two subtle CTAs: "Planning to visit? Let Kudozz Club help you build the route around your dates, budget and travel style…" and "Want this pilgrimage turned into a practical itinerary?", both leading to Plan My Trip.
- **Schema:** `BlogPosting`, with `about` set to a `TouristAttraction`, `TouristDestination` or `Thing` and places in `mentions`, plus `BreadcrumbList`, `FAQPage` and `ItemList`. `Organization` and `WebSite` come from the layout. There are no ratings or reviews.
- **Commercial:**
  - `/packages/spiritual-tours` lists every guide.
  - The Char Dham Yatra combo gets a block of planning guides.
  - A new **Buddhist Circuit** combo package covers an established circuit whose stops all have guides. It uses the same data model as the other combos and quotes no prices.
- **Navigation:**
  - A "Spiritual" item was added to the header and footer.
  - With nine items, the desktop nav wrapped at around 1,470px. It now uses `whitespace-nowrap` with tighter padding, and shows from the `xl` breakpoint (1,280px); narrower screens use the existing menu button.

## Key decisions (details in `spiritual-tourism-cannibalization.md`)

- **One hub, not four pillars.** Spiritual, religious and pilgrimage tourism return one result set, so `/spiritual-tourism` serves them all.
- **Two consolidated pillars.** Holy places and spiritual destinations go to *best pilgrimage places*; temple tourism and the denomination temple lists (Shiva, Vishnu, Krishna, Hanuman) go to *famous temples*.
- **No duplicate temple pages.** Eight Jyotirlingas and about 20 sacred cities already had destination guides, which stay canonical and get a pointer into the cluster.
- **Char Dham kept distinct.** The Uttarakhand circuit and the four dhams of India have separate pages. Each explains the difference, and the blog guide hands off to the existing `/packages/char-dham-yatra`.
- **Origin-city pages:** only Delhi and Mumbai, where the answer is genuinely different. Other cities are answered by the state pages.
- **Year-specific dates live only where they are announced:** the Kumbh page, and the Char Dham and Hemkund 2026 seasons. Evergreen festival guidance uses lunar months.

## Accuracy and religious content

- **Research:** facts were verified with live searches on 26 September 2026, preferring official sources. These include:
  - the Uttarakhand registration portal and IRCTC HeliYatra;
  - the Ministry of Tourism, state tourism and district sites;
  - PIB and UNESCO.

  See `spiritual-tourism-serp-research.md`.
- **Disputed lists are named, never settled:**
  - Vaidyanath (Deoghar or Parli), Nageshwar (Dwarka, Aundha Nagnath or Jageshwar), and Bhimashankar (Pune or the Assam government's Kamrup claim).
  - Shakti Peetha counts: 18, 51, 52, 64 or 108, each attributed to its text.
  - Vaishno Devi's inclusion among the Shakti Peethas.
- **Tradition, belief and facts are kept apart.** Examples: "tradition places…", "Jain tradition holds…", and Hazratbal described as a relic shrine rather than a Sufi dargah.
- **Entry rules are stated neutrally as each institution's rules.** Examples: Hindus-only temples such as Jagannath, Guruvayur and Padmanabhaswamy; the customs at Sabarimala, with a pointer to the Devaswom Board.
- **What the pages do not include:** prices, darshan timings, crowd figures or "richest temple" claims, and no guarantees of darshan or spiritual outcomes. Every page warns against unofficial booking sites.

## Images

- **Selection:** 47 new heroes in `public/images/spiritual/`, chosen from contact sheets and checked by eye to make sure each photo shows the named site. Candidates showing the wrong place were rejected, for example Dev Somnath in Dungarpur and a Char Dham replica in Sikkim.
- **Buddhist Circuit and Bihar:** these were re-searched because the first candidates were museum railings and signboards. They now show the Mahabodhi Temple and the Vishnupad Temple.
- **Shravanabelagola:** no usable licensed photo of the Gommateshwara statue turned up. The hero shows the town's Akkana Basadi, and its alt text says so.
- **Inline images** reuse credited photos of the same site already on the site.
- **Credits** are in `public/images/blogs/IMAGE_CREDITS.json`.

## Validation (all passing)

| Check | Result |
|---|---|
| `python3 scripts/spiritual/build.py` (strict) | 46 articles, 0 errors, 0 warnings. Checks fields, URL map and H1, quick answer, FAQs, title and meta length and uniqueness, word floors, banned phrases, em dashes, links and anchors, credited images, unique heroes |
| Adventure, beach, wildlife and things-to-do builds | 41, 23, 31 and 143 articles, 0 errors |
| `npx tsc --noEmit` / `npm run lint` | Pass; no warnings |
| `npm run build` | 939 static pages |
| `node scripts/check-links.mjs` | 24,321 references, none broken |
| `verify-html.py` for spiritual, wildlife, beach, adventure and things-to-do | 0 problems. Checks canonical, indexable, one H1, title and description, OG image, breadcrumb, required schema, no review markup, images on disk, internal links to built pages, sitemap inclusion (928 URLs) and no duplicate URLs |
| Orphan check | No orphan articles (every article is linked from the hub and from related pages) |
| Production server (`next start`, no dev server running) | All 46 articles and the hub return 200, and an unknown slug returns 404. Both CTAs appear on every article. Guide pointers, state, style and combo package blocks, and sitemap entries were confirmed in the served HTML. The hub and one article were checked visually in Chrome at desktop width, and the header fits on one line |

## Remaining opportunities

- **Hazur Sahib (Nanded) and Takht Damdama Sahib guides,** now covered by the Panj Takht page.
- **Srirangam, Sabarimala, Tirumala-only and Amarnath destination guides,** if demand justifies them. They are currently covered in the state pages.
- **More origin-city pages** (Ahmedabad, Bengaluru, Hyderabad), if data shows demand beyond the state pages.
- **A Wellness Travel cluster** to take over the yoga and Ayurveda intent in more depth.

## Manual verification items (also in `spiritual-tourism-progress.md`)

- **Seasonal dates:** update the 2027 dates for the Char Dham, Hemkund Sahib and Amarnath when announced.
- **Kumbh dates:** re-check before each mela (Haridwar 2027, Nashik–Trimbakeshwar 2027 and Ujjain 2028).
- **Sabarimala entry rules:** revisit if the Supreme Court decides the pending reference.
- **Kushinagar flights:** there have been no scheduled flights since November 2023.
- **Shravanabelagola hero:** replace it if a licensed photo of the statue becomes available.
- **Mobile rendering:** a phone-width check could not be automated in this session. Please review the hub, one article and the header menu on a phone.
