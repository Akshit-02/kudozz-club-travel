# Master Keyword Map (2026-10-09)

No search-volume data was available, so keywords are prioritised by **intent, commercial value, feasibility and topical fit**, not volume. Every keyword has one owner (`canonical-keyword-ownership-map.md`). The per-article primary keyword for all 1,029 articles is the `primary_keyword` column of `complete-url-inventory.csv`. Cluster maps: `*-keyword-map.md`; earlier commercial map: `keyword-map-commercial.md`.

Intent codes: **N** navigational, **I** informational, **C** commercial investigation, **T** transactional, **L** local/place lookup.

## Tier 1: commercial core

| Keyword family | Intent | Owner | Feasibility | Notes |
|---|---|---|---|---|
| Kudozz Club (+ Kudoz/Kudos/Kudoss Club) | N | `/` | High | Must rank #1. Verify in GSC |
| travel agency in India / India travel agency | C | `/` | Low–medium | Big brands dominate; win long-tail variants |
| best travel agency in India / top travel agencies / best tour operator in India / how to choose a travel agency in India | C | `/best-travel-agency-in-india` | Low (head) / medium ("how to choose") | Honest verification angle; no self-ranking |
| India tour packages / customized India tour packages | T | `/packages` | Low | |
| India trip planner / custom India itinerary | T | `/plan-your-trip` | Low–medium | AI tools compete |
| {state} tour packages / holiday packages / trip plan (36) | T | `/packages/{state}` | Medium for smaller states, low for Kashmir/Rajasthan/Kerala/Goa | |
| {state} family / honeymoon tour packages | T | `/packages/{state}` (sections) + style pages | Medium | Not split into new pages (doorway risk) |
| Golden Triangle / Char Dham Yatra / Northeast / Buddhist Circuit tour packages | T | `/packages/{circuit}` | Medium | |
| family / honeymoon / adventure / wildlife / pilgrimage / heritage / hill station / nature / road trip / luxury / budget / group / weekend getaway tour packages in India | T/C | `/packages/{style}` | Medium | Titles now match these phrasings |

## Tier 2: destination informational (feeds the funnel)

| Pattern | Intent | Owner type | Count |
|---|---|---|---|
| {place} travel guide / tourism / best time to visit / how to reach / where to stay | I | destination guide | 582 |
| things to do in {place} / places to visit in {place} | I | things-to-do article | 143 |
| {place} itinerary / {N} days in {place} | I/C | itinerary page or guide day plan | 34 itinerary/route pages |
| {origin} to {destination} road trip | I | route page | 15+ |
| hill stations / beaches / wildlife / pilgrimage in {state} | I | cluster state page | about 60 |

## Tier 3: travel-style and activity informational

| Pattern | Owner |
|---|---|
| best hill stations / beaches / tiger reserves / treks in India | cluster pillars |
| {activity} in India (rafting, paragliding, scuba, skiing, trekking…) | adventure cluster |
| {activity} in {place} (rafting in Rishikesh, scuba in Andaman) | adventure cluster destination-activity pages |
| hill stations near {city} / road trips from {city} / pilgrimage trips from {city} | origin-city pages |
| best time / seasonal (summer, winter, monsoon) | seasonal pages |
| how to plan a {type} trip in India | planning pages per cluster |

## Question keywords
Mapped page by page in `aeo-question-master-map.md`.

## Deliberately not targeted
- "Best travel agency in {city}" × hundreds: doorway risk.
- "{state} tour package from {city}" as separate pages: would duplicate the state page. Add an origin section to top state pages instead, once transport options are confirmed.
- International destinations: out of scope (India-only agency).
- Price-led keywords ("cheap Kashmir package ₹15,000"): no confirmed prices.
