# Kudozz Club — Keyword Map

**Updated:** 2026-09-24 (agency rebrand). Part A is new; Part B is the original editorial map (2026-09-14), unchanged. `keyword-map-commercial.md` holds the per-state secondary keywords for all 36 package pages and is still current.

No search-volume figures are claimed anywhere. None were sourced from a keyword tool.

---

# Part A — Agency & commercial keyword map (2026-09-24)

## Research notes (live SERP checks, Sep 2026)

- **"best travel agency in India"**: page one is held by large established brands (Veena World, SOTC, Thomas Cook, Kesari, Swan Tours, Enchanting Travels). Their titles lead with the phrase itself ("… Best Tours and Travel Agency in India"). A new domain will not outrank them on the head term soon. The phrase is used in Kudozz's H1 and title as requested, but realistic early traffic will come from the long tail (destination + "tour packages", customized/family/honeymoon modifiers) and from the guides.
- **Destination package SERPs** (e.g. "Kashmir tour packages") are dominated by OTAs and aggregators (MakeMyTrip, TravelTriangle, Thrillophilia, Holidify). They are structured as "N Nights / N+1 Days", lead with a "starting from ₹" price, and describe the classic route (Srinagar–Gulmarg–Pahalgam). Kudozz can't honestly compete on price anchoring, so its package pages compete on **answer depth** (best time, days, cost ranges from the guides, permits, suitability) and **real routes linked to real guides**, which the aggregators lack.
- **Differentiator in snippets:** "customized", "planned around you" and "in-house", not "cheap" or "starting from".

Sources: Google results for "best travel agency in India customized tour packages" and "Kashmir tour packages customized itinerary 5 nights" (Veena World, SOTC, Thomas Cook, Kesari, Swan Tours, Enchanting Travels, MakeMyTrip, TravelTriangle, Thrillophilia, Holidify, Flamingo Travels).

## Page → keyword assignment

One primary keyword per URL; no two URLs share a primary.

| URL | Primary | Secondary | Intent |
|---|---|---|---|
| `/` | best travel agency in India | travel agency in India, India travel agency, customized tour packages India, India holiday packages | Commercial / navigational |
| `/packages` | India tour packages | customized India tours, India holiday packages, domestic tour packages India | Commercial |
| `/plan-your-trip` | India trip planner | India travel planner, customized India tour, plan India trip | Transactional |
| `/packages/family-holidays` | family tour packages India | family holiday packages India, kid-friendly India trips | Commercial |
| `/packages/honeymoon` | honeymoon packages India | honeymoon destinations India, romantic India trips | Commercial |
| `/packages/luxury-holidays` | luxury India tours | luxury holiday packages India, heritage hotel trips | Commercial |
| `/packages/budget-holidays` | budget India tour packages | cheap India holiday packages (content avoids "cheap") | Commercial |
| `/packages/weekend-getaways` | weekend getaway packages India | short trips from Delhi/Bengaluru, 2–3 day trips | Commercial |
| `/packages/adventure-tours` | adventure tour packages India | trekking, rafting, road trip packages | Commercial |
| `/packages/wildlife-tours` | wildlife tour packages India | tiger safari packages, national park tours | Commercial |
| `/packages/spiritual-tours` | pilgrimage tour packages India | spiritual tours India, temple tour packages | Commercial |
| `/packages/group-tours` | group tour packages India | friends trip packages, family reunion trips | Commercial |
| `/packages/rajasthan` | Rajasthan tour packages | Rajasthan holiday packages, Jaipur Jodhpur Udaipur tour | Commercial |
| `/packages/kerala` | Kerala tour packages | Kerala honeymoon packages, Kerala backwater packages | Commercial |
| `/packages/goa` | Goa tour packages | Goa holiday packages, Goa honeymoon packages | Commercial |
| `/packages/kashmir` | Kashmir tour packages | Srinagar Gulmarg Pahalgam package, Kashmir honeymoon packages | Commercial |
| `/packages/himachal-pradesh` | Himachal tour packages | Shimla Manali package, Himachal honeymoon packages | Commercial |
| `/packages/uttarakhand` | Uttarakhand tour packages | Rishikesh Mussoorie trip, Nainital Corbett package | Commercial |
| `/packages/leh-ladakh` | Ladakh tour packages | Leh Ladakh trip package, Ladakh road trip package | Commercial |
| `/packages/northeast-india` | Northeast India tour packages | Meghalaya Assam tour, Northeast trip plan | Commercial |
| `/packages/golden-triangle` | Golden Triangle tour packages | Delhi Agra Jaipur tour, Golden Triangle itinerary | Commercial |
| `/packages/char-dham-yatra` | Char Dham Yatra package | Char Dham tour, Kedarnath Badrinath package | Commercial |
| `/packages/<other states>` | `<State> tour packages` | see `keyword-map-commercial.md` | Commercial |
| `/destinations` | India travel destinations | places to visit in India by state | Informational hub |
| `/blog` | India travel guides | India itineraries, best time to visit India | Informational hub |
| `/blog/<state hub>` | `<State> travel guide` | places to visit in `<State>`, `<State>` itinerary, best time to visit | Informational (TOFU/MOFU) |
| `/blog/<place>` | `<Place> travel guide` | things to do, how to reach, how many days | Informational (TOFU) |
| `/about` | Kudozz Club | Kudoz Club, Kudos Club (misspellings), India travel agency | Navigational / brand |

## Cannibalisation guardrails

- **Guide vs package:** each state has two URLs sharing an entity but not an intent. The guide targets "travel guide / places to visit / itinerary" (informational); the package targets "tour packages" (commercial). They link to each other with those exact descriptive anchors, which reinforces the split.
- **Kashmir:** the package page uses "Kashmir" while the guide uses "Jammu & Kashmir", matching how each query is actually searched.
- **Circuits:** `/packages/golden-triangle` owns "Golden Triangle", so Rajasthan/Delhi/UP package pages mention it only as a route and link to the circuit page. Likewise `/packages/char-dham-yatra` vs `/packages/uttarakhand` and `/packages/spiritual-tours`.
- **No keyword stuffing:** the target phrase appears once in the homepage H1 and once in the title; body copy uses natural variants ("travel agency", "India trips").

## Informational queries answered on commercial pages (AEO)

For the 13 priority destinations, package pages answer the questions below directly, reusing figures from the guides. See `aeo-geo-audit.md`.

What is X known for? · How many days are enough? · Best time to visit · How to reach · How much does it cost? · Is it good for families? · Is it good for a honeymoon? · Do you need a permit? · Things to do · Best places to visit

---

# Part B — Editorial keyword map (2026-09-14, unchanged)


**Date:** 2026-09-14
**Scope:** Priority-A pages (the 36 state/UT hub guides — the highest-leverage nodes in the site's link graph) mapped in full below, plus the methodology and validated pattern that already governs the remaining 546 Priority-B/C destination pages.

**Method:** Keyword targeting below is (a) extracted directly from each page's actual `metadata.keywords` field — i.e. what the site is *currently* targeting, not invented — and (b) cross-checked against live web research run this session (see "Research findings" at the bottom) covering current Google results, related searches, and 2026 travel-trend reporting for a representative sample (Rajasthan, Kerala backwaters, Goa, Manali/Himachal, plus general India 2026 travel-trend queries). I did not run a live search for all 36 individually — that would be 36+ tool calls of diminishing value once the pattern was confirmed — so the table below documents *existing* targeting with a validated-intent note, not per-state fresh SERP data for every row.

No search-volume numbers are claimed anywhere in this document — I have no verified source for them.

---

## Validated search-intent pattern (applies to every destination on the site)

Live research (Rajasthan, Goa, Kerala backwaters, Manali) confirms the same handful of intents recur for essentially every Indian destination query, in roughly this order of demand:

1. **Places to visit / tourist places** — the core discovery query
2. **Best time to visit** — near-universal, often month-specific ("best time to visit X in December")
3. **Itinerary / "X days in Y"** — trip-planning intent, commonly 3–7 day windows
4. **How to reach** — transport-specific (flight/rail/road)
5. **Trip cost / budget** — increasingly specific by traveller tier (budget/mid-range/luxury)
6. **Things to do** — activity-level, often overlaps with #1
7. **Near me / near [city]** — for weekend-getaway-style destinations specifically

This maps almost exactly onto the section structure Kudozz Club already uses on every state hub (`Why visit → Best time → How to reach → Things to do → Where to stay → Visit plan → Food → Budget → Tips → FAQ` — confirmed on `ranthambore-travel-guide`, `rajasthan-travel-guide`, `telangana-travel-guide` and others). **The template is not the gap; the gap is that this depth isn't yet reached on the 132 shorter posts flagged in `content-gaps.md`.**

2026-specific trend layer confirmed by research: workations (Manali, McLeod Ganj, Bir Billing, Coorg, Kodaikanal named as top hubs), shorter/more-frequent "micro-cation" trips replacing one big annual trip, and a measurable surge toward off-beat Northeast destinations (Jorhat +493% search interest cited in trend reporting).

---

## Priority A — State & Union Territory hub guides (36)

| URL | Primary keyword | Secondary keywords (currently targeted) | Search intent |
|---|---|---|---|
| `/blog/rajasthan-travel-guide` | Rajasthan travel guide | Jaipur travel guide, Jodhpur Blue City, Pushkar travel guide, Rajasthan itinerary, Golden Triangle Rajasthan | Destination overview / trip planning |
| `/blog/kerala-backwaters-travel-guide` | Kerala backwaters guide | Alleppey houseboat, Kumarakom backwaters, Vembanad Lake, Kerala itinerary | Activity-specific + planning (validated live: houseboat booking lead-time and pricing are high-intent sub-queries not yet in the keyword list — see gap below) |
| `/blog/goa-beaches-travel-guide` | Goa travel guide | Goa beaches, North Goa vs South Goa, Goa itinerary, best time to visit Goa | Destination overview (validated live: "Goa trip cost" is a distinct, high-frequency query pattern — already covered in-article via the budget table, confirm it's also in metadata keywords) |
| `/blog/himachal-pradesh-travel-guide` | Himachal Pradesh travel guide | Shimla travel guide, Manali Himachal, Dharamshala McLeod Ganj, Kalka Shimla toy train | Destination overview (validated live: workation intent is real and growing for Manali/McLeod Ganj specifically — worth a dedicated angle, see `content-gaps.md`) |
| `/blog/leh-ladakh-road-trip-travel-guide` | Leh Ladakh road trip | Manali to Leh highway, Pangong Lake, Nubra Valley, Ladakh inner line permit | Road-trip / adventure planning |
| `/blog/uttar-pradesh-travel-guide` | Uttar Pradesh travel guide | Taj Mahal, Agra travel guide, Varanasi travel guide, Ayodhya Ram Mandir | Destination overview + landmark-specific |
| `/blog/uttarakhand-travel-guide` | Uttarakhand travel guide | Char Dham Yatra, Rishikesh travel guide, Nainital, Jim Corbett | Pilgrimage + hill-station overview |
| `/blog/delhi-travel-guide` | Delhi travel guide | Red Fort, Qutub Minar, Delhi itinerary, Delhi to Agra day trip | Capital-city overview |
| `/blog/west-bengal-travel-guide` | West Bengal travel guide | Kolkata travel guide, Darjeeling travel guide, Sundarbans tiger safari | Destination overview |
| `/blog/tamil-nadu-travel-guide` | Tamil Nadu travel guide | Meenakshi Temple Madurai, Mahabalipuram shore temple, Ooty travel guide | Temple/heritage + hill-station overview |
| `/blog/karnataka-travel-guide` | Karnataka travel guide | Bangalore travel, Mysore Palace, Hampi Karnataka, Coorg Karnataka | Destination overview |
| `/blog/maharashtra-travel-guide` | Maharashtra travel guide | Mumbai travel guide, Ajanta Ellora caves, Konkan coast, Lonavala | Destination overview |
| `/blog/gujarat-travel-guide` | Gujarat travel guide | Rann of Kutch, Somnath temple, Gir National Park, Statue of Unity | Heritage + wildlife overview |
| `/blog/madhya-pradesh-travel-guide` | Madhya Pradesh travel guide | Khajuraho temples, Bandhavgarh National Park, Gwalior Fort | Heritage + wildlife overview |
| `/blog/telangana-travel-guide` | Telangana travel guide | Hyderabad travel guide, Charminar, Golconda Fort, Warangal | Destination overview |
| `/blog/andhra-pradesh-travel-guide` | Andhra Pradesh travel guide | Tirupati Tirumala temple, Visakhapatnam Vizag, Araku Valley | Pilgrimage + coastal overview |
| `/blog/odisha-travel-guide` | Odisha travel guide | Konark Sun Temple, Puri Jagannath Temple, Chilika Lake | Heritage + pilgrimage overview |
| `/blog/punjab-travel-guide` | Punjab travel guide | Golden Temple Amritsar, Wagah Border, Jallianwala Bagh | Pilgrimage + heritage overview |
| `/blog/haryana-travel-guide` | Haryana travel guide | Kurukshetra, Surajkund Crafts Mela, Panchkula, weekend trip from Delhi | Weekend-getaway overview |
| `/blog/jammu-kashmir-travel-guide` | Jammu & Kashmir travel guide | Srinagar Dal Lake, Gulmarg gondola, Pahalgam, Kashmir houseboat | Destination overview |
| `/blog/sikkim-travel-guide` | Sikkim travel guide | Gangtok travel guide, Yumthang Valley, Nathula Pass, Sikkim permit | Hill-state overview |
| `/blog/assam-travel-guide` | Assam travel guide | Kaziranga National Park, Guwahati, Majuli Island | Wildlife + Northeast overview |
| `/blog/meghalaya-travel-guide` | Meghalaya travel guide | Cherrapunji, living root bridges, Dawki river, Shillong | Off-beat/nature overview |
| `/blog/manipur-travel-guide` | Manipur travel guide | Loktak Lake, Imphal travel guide, Kangla Fort | Northeast overview |
| `/blog/mizoram-travel-guide` | Mizoram travel guide | Aizawl travel guide, Reiek Tlang, Vantawng Falls | Northeast overview |
| `/blog/nagaland-travel-guide` | Nagaland travel guide | Hornbill Festival, Kohima War Cemetery, Dzukou Valley trek | Festival + Northeast overview |
| `/blog/tripura-travel-guide` | Tripura travel guide | Neermahal, Unakoti rock carvings, Ujjayanta Palace | Northeast/heritage overview |
| `/blog/arunachal-pradesh-travel-guide` | Arunachal Pradesh travel guide | Tawang Monastery, Sela Pass, Ziro Valley, Inner Line Permit | Off-beat/permit-driven overview |
| `/blog/bihar-travel-guide` | Bihar travel guide | Bodh Gaya, Nalanda University ruins, Patna Sahib | Buddhist-pilgrimage overview |
| `/blog/jharkhand-travel-guide` | Jharkhand travel guide | Netarhat, Betla National Park, Hundru Falls | Off-beat/nature overview |
| `/blog/chhattisgarh-travel-guide` | Chhattisgarh travel guide | Chitrakote Falls, Bastar, Kanger Valley National Park | Off-beat/nature overview |
| `/blog/andaman-islands-travel-guide` | Andaman Islands travel guide | Havelock Island, Radhanagar Beach, Andaman scuba diving, Andaman permit | Island/beach overview |
| `/blog/lakshadweep-island-travel-guide` | Lakshadweep travel guide | Lakshadweep permit, Agatti island, Bangaram island | Island/permit-driven overview |
| `/blog/puducherry-district-travel-guide` | Puducherry travel guide | Puducherry towns, Auroville, Pondicherry travel guide | Heritage/coastal overview |
| `/blog/chandigarh-travel-guide` | Chandigarh travel guide | Rock Garden Chandigarh, Sukhna Lake, Chandigarh weekend trip | Weekend-getaway overview |
| `/blog/dadra-nagar-haveli-daman-diu-travel-guide` | Dadra & Nagar Haveli and Daman & Diu travel guide | Diu Fort, Nagoa Beach, Silvassa tourism | Weekend-getaway overview |

## Cannibalization check — none found at the hub level

Every hub above targets a **distinct** state/UT name as its primary keyword with no overlapping primary terms. The one pattern worth watching: several hub `keywords` lists include a major *city's own name* (e.g. Rajasthan hub includes "Jaipur travel guide"; Himachal hub includes "Manali Himachal"), and that same city also has its own dedicated page with "Jaipur travel guide" / "Manali travel guide" as *its* primary keyword. This is healthy hub-and-spoke, not cannibalization — Google generally resolves a query like "Manali travel guide" to the more specific `manali-travel-guide` page, while the hub page's mention of "Manali" simply establishes topical relevance and now (after this session's fix) links to it directly. No action needed; flagged so it isn't mistaken for a problem later.

## Priority B/C — the other 546 destination pages

These already follow the same validated intent pattern at a per-place scale (best time / how to reach / things to do / FAQ), and each has its own `metadata.keywords` list targeting the specific place name plus its named landmarks (spot-checked across Delhi, Tamil Nadu, Telangana, Sikkim, and Tripura clusters this session). Re-deriving a fresh, individually-researched keyword row for all 546 in one pass isn't something I can respons ibly do without live research per page — that's a multi-session content-ops project, not a single audit. The methodology above (intent pattern + existing on-page keyword list + spot-check against live search) is the repeatable process to extend this table incrementally, prioritized by the state clusters with the most child pages (Delhi: 25, Uttarakhand: 22, Tamil Nadu/Uttar Pradesh/West Bengal: 20 each — see `internal-linking.md`).

## Research findings (raw, for reference)

- **Rajasthan:** core cluster is Jaipur/Udaipur/Jodhpur/Jaisalmer "four colour cities," 10–14 day itineraries typical for first-timers, Oct–Mar best time (city-specific variation — Jaisalmer skews Nov–Feb), Pushkar Fair a major seasonal-content opportunity (17–24 Nov 2026).
- **Kerala backwaters:** Oct–Mar best time, Alleppey vs. Kumarakom as the two dominant gateway queries, houseboat price bands (₹8,000–₹35,000/night) and 6–8 week advance-booking advice are a real, distinct sub-intent not yet reflected in the hub's keyword list.
- **Goa:** Nov–Feb best time (Feb cited as the "sweet spot"), North-vs-South framing dominates, 4–7 day itineraries typical, trip-cost bands ₹15,000–₹70,000+ depending on tier.
- **Manali/Himachal:** 3–5 day itineraries dominate, trip-cost queries are extremely specific (per-day, per-couple breakdowns), and workation-specific search interest is real and growing for this exact destination.
- **2026 general India travel trends:** workation demand rising (45% of surveyed travellers planning one), average stay lengthening to 4–7 days; "micro-cation" pattern (4–6 shorter trips/year replacing one long trip); emerging/trending destinations named in trend reporting: Jorhat (Assam, +493% search interest), Tawang (Arunachal), Chikhaldara (Maharashtra), Munsiyari (Uttarakhand), Dandeli (Karnataka), Bundi (Rajasthan), Tirthan Valley (Himachal) — cross-checked against Kudozz Club's inventory in `content-gaps.md`.

**Sources consulted (live web search, 2026-09-14):**
- [Best Time to Visit Rajasthan: Ultimate Travel Guide (2026)](https://www.travelxp.com/en/blogs/holidays/best-time-to-visit-rajasthan)
- [Rajasthan Tour 2026: Ultimate Local Guide](https://goindianepal.com/rajasthan-tourism-guide-2026-royal-forts-desert-safaris-timeless-heritage/)
- [Top Travel Trends in 2026 | StayVista Journal](https://www.stayvista.com/blog/top-travel-trends-in-2026-new-destinations-stays-experiences-in-india/)
- [Top Travel Destinations in India for 2026 | StayVista Journal](https://www.stayvista.com/blog/travel-trends-2026-top-places-to-visit-india/)
- [Kerala Backwaters Travel Guide 2026 | Golden Leaf Tours](https://www.goldenleaf.in/blog/kerala-backwaters-complete-guide)
- [Kerala Backwaters Houseboat Stays 2026 | GoGeo Holidays](https://gogeoholidays.com/blog/kerala-backwaters-houseboat-stays-2026-guide/)
- [Best Time to Visit Goa 2026 (Month-by-Month)](https://goanearby.in/best-time-to-visit-goa-guide.php)
- [Goa Travel Guide 2026 | Travoperk](https://www.travoperk.com/blog-detail/goa-travel-guide)
- [Manali Trip Cost: How Much Does a Manali Tour Cost?](https://www.sotc.in/blog/indian-holidays/how-much-does-a-manali-trip-cost/)
- [Manali Trip Cost Guide 2026 | Tripstorz](https://tripstorz.com/himachal/manali-trip-cost/)
