# Current Search Research (October 2026)

**Method.** Live web searches run on 2026-10-08/09 for the site's commercial and informational query families, plus the per-cluster SERP research already in this folder (`*-serp-research.md`, `*-research.md`). No search-volume tool was available, so **no volumes are claimed**; demand is described from SERP composition, competitor investment and published trend reports. Google Search Console was not accessible (see `search-console-opportunity-report.md`).

**Important signal:** a `site:club.kudozz.in` query returned no results from the domain in the search tool used. That tool is not Google, so this does not prove the site is unindexed, but together with the absence of Search Console data it means **indexation and authority, not on-page quality, are the most likely bottleneck**. Confirm in Search Console first (Pages report → indexed count against the 1,101 sitemap URLs).

---

## 1. Agency queries ("best travel agency in India", "travel agency in India", "best tour operator in India")

| | |
|---|---|
| **Demand** | High-competition head terms; SERP crowded by large brands and listicles. |
| **Intent** | Commercial investigation. People want a shortlist and a way to judge agencies, not a single agency's homepage. |
| **SERP** | Dominated by "Top 10 travel agencies in India (2026)" listicles (indiment.com, topindianholidays.com, elefantastic.in, publicanchor.com, axisrooms.com). Listicle winners: Thomas Cook, SOTC, MakeMyTrip, EaseMyTrip, Yatra, Cox & Kings, Thrillophilia, TravelTriangle. Several lists are written by agencies ranking themselves. |
| **Common questions** | Which agency is most trusted? Which is best for family/foreign tourists/custom trips? Is the agency licensed? Hidden charges? Cancellation terms? |
| **Gap** | Lists rarely explain *how to verify* an agency (Ministry of Tourism recognition, IATO/ADTOI membership, itemised quotes, cancellation terms). |
| **Kudozz position** | `/best-travel-agency-in-india` already takes the defensible angle: agency types + verification checklist + where Kudozz fits, with no self-ranking. Correct strategy; it cannot win on brand authority, only on usefulness. |
| **Action taken** | In-content links to the page raised from 3 to 56 (every package page + style pages). |
| **Risk** | Claiming "#1" or "best" without evidence would conflict with the editorial policy and with Google's guidance on unsupported claims. Keep the honest framing. |

Sources: [axisrooms](https://www.axisrooms.com/blog/online-travel-agencies/), [indiment](https://indiment.com/best-travel-agency-in-india-for-family-solo-group-tours-2026-guide/), [topindianholidays](https://www.topindianholidays.com/blog/travel-agencies-in-india), [elefantastic](https://www.elefantastic.in/top-travel-agencies-in-india-for-foreign-tourists), [india.gov.in travel-agent guidelines](https://www.india.gov.in/guidelines-travel-agents).

## 2. State / destination package queries ("Kashmir tour packages", "Rajasthan tour packages", "Kerala tour packages")

| | |
|---|---|
| **Intent** | Transactional / commercial. |
| **SERP** | Package listings with prices and nights ("5N/6D from ₹24,900"), aggregators (TravelTriangle, Thrillophilia, TourRadar), large operators (SOTC, Kesari, Thomas Cook), many small local operators. Origin-city variants ("from Delhi") are common. |
| **Common questions** | Price per person, nights, inclusions (gondola, pony, entry fees, GST), fly vs drive, hotel category, best month. |
| **Gap** | Most listings are thin price cards. Few explain *why* a route or duration fits, or what is excluded. |
| **Kudozz position** | Package pages are enquiry-based (no prices: business has not confirmed any, see `human-input-required.md` 3.7). They compete on route logic, days needed, best time and inclusions guidance. |
| **Opportunity** | Publishing honest "typical cost ranges" once the business confirms them would close the biggest gap against competitors. Not done: unverified. |

Sources: [charzanholidays](https://charzanholidays.com/kashmir-tour-package-from-delhi/), [traveltriangle](https://traveltriangle.com/packages/4nights-5days-kashmir-tour-from-delhi?id=10519), [kesari Rajasthan family](https://www.kesari.in/family-tour-packages-for-rajasthan), [TourRadar Kerala listings](https://www.tourradar.com/t/346652).

## 3. Travel-style package queries ("honeymoon packages India", "family tour packages India", "adventure tour packages")

| | |
|---|---|
| **Intent** | Commercial; destination-agnostic first, then narrowed by month. |
| **SERP** | Listicles of destinations (Kashmir, Kerala, Udaipur, Goa, Andaman, Sikkim) and package grids. Honeymoon SERPs mix domestic and international (Maldives, Bali). |
| **Gap** | Few pages answer "which destination for which month and how many days" in one table. |
| **Action taken** | All 13 style pages got query-matching titles/H1s ("Family Tour Packages in India") and an answer-first *where, when and how long* table from real destination profiles. |

Sources: [venuelook honeymoon 2026](https://www.venuelook.com/blog/most-romantic-honeymoon-destinations-for-2026), [happyfares honeymoon 2026](https://happyfares.in/blog/honeymoon-flight-destinations-india-2026/).

## 4. Informational destination queries ("things to do in Jaipur", "Manali itinerary 3 days", "best time to visit Ladakh")

| | |
|---|---|
| **Intent** | Informational, with a planning tail. |
| **SERP** | Operator/OTA content hubs (SOTC tourism pages, Agoda guides, Pickyourtrail, OYO, hotel blogs), personal travel blogs, Lonely Planet. AI answers synthesise lists, day plans and "how many days" ranges. |
| **What wins** | Grouped lists, a one-day plan, practical tips (closures, permits, NGT vehicle caps at Rohtang), clear "how many days" answers with acclimatisation (Ladakh). |
| **Kudozz position** | Strong. The 143 things-to-do pages already use the winning format (quick answer, grouped sections, by-traveller, one-day plan, FAQs). Destination guides carry best time, how to reach, itinerary, budget. |
| **Gap** | Itinerary pages were under-linked from destination guides; fixed (`src/lib/itinerary-links.ts`). |

Sources: [SOTC Jaipur](https://www.sotc.in/tourism/jaipur-tourism/things-to-do-in-jaipur), [Agoda Jaipur](https://www.agoda.com/travel-guides/india/jaipur/10-amazing-things-to-do-in-jaipur-india), [Pickyourtrail Manali](https://pickyourtrail.com/blog/3-nights-4-days-manali-tour), [Lonely Planet Ladakh](https://www.lonelyplanet.com/articles/guide-to-ladakh-india).

## 5. List / category queries ("best hill stations in India")

| | |
|---|---|
| **SERP** | Skyscanner, Expedia, Pickyourtrail, godigit and blogs; region-grouped lists with altitude and best season. |
| **Kudozz** | Category pillars and regional pages exist for every cluster with documented cannibalisation reviews (`*-cannibalization.md`). No new pages needed. |

Sources: [Skyscanner](https://skyscanner.co.in/news/best-hill-stations-in-india), [Expedia](https://travelblog.expedia.co.in/experience/top-hill-stations/).

## 6. Trends worth acting on (2026)

| Trend | Evidence | Kudozz coverage |
|---|---|---|
| Domestic-first travel ("inward wanderlust") | Agoda 2026 outlook as summarised by StayVista/Tourbabari | Whole site |
| Northeast rising: Jorhat/Majuli named top trending domestic search | Skyscanner via secondary blogs (verify original) | Jorhat, Majuli, things-to-do-in-majuli exist; descriptions tightened this pass |
| Pilgrimage + heritage: Varanasi, Somnath, Tirupati | Skyscanner via blogs | Covered; Sarnath UNESCO status (July 2026) added |
| Family summer: Puri, Wayanad, Goa | Agoda | Covered |
| Mizoram newly reachable by rail (Sep 2025) | newsonair.gov.in | Fixed: Mizoram pages now say so |
| AI-assisted trip planning (ixigo PLAN, TripVexa, CoPlanner) | product launches | Positioning: human planner + researched guides; `/plan-your-trip` retitled "India Trip Planner" |
| AI Overviews cite YouTube, Reddit, Instagram heavily | Ahrefs Brand Radar (July 2026) via vendor blogs | Off-site gap: no video/YouTube presence |

Sources: [StayVista 2026](https://www.stayvista.com/blog/travel-trends-2026-top-places-to-visit-india/), [Tourbabari](https://tourbabari.com/2026/03/09/top-travel-trends-in-india-2026/), [Travel and Tour World](https://www.travelandtourworld.com/news/article/5gln60oomusd/), [everything-pr AIO index](https://everything-pr.com/google-ai-overviews-citation-source-index-2026), [seoprofy AIO stats](https://seoprofy.com/blog/google-ai-overviews/).

## 7. Risks

- Travel facts age fast (permits, closures, new infrastructure). This pass found about 30 stale or wrong facts in 1,029 articles; schedule a six-monthly freshness sweep.
- AI Overviews absorb informational clicks; the commercial funnel (guide → itinerary → package → Plan My Trip) matters more than ever.
- Without Search Console, prioritisation is evidence-based but not traffic-weighted.
