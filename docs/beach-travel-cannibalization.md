# Beach Travel: cannibalisation audit and decisions

Generated 2026-09-25.

## Intent separation

| Page type | Intent | Example |
| --- | --- | --- |
| Beach hub (`/beach-travel`) | Overall beach travel in India; owns "beach travel in India" | Beach Travel in India |
| Best beach destinations | Where to base a beach holiday | Best Beach Destinations in India |
| Best beaches | Discovery of individual beaches | Best Beaches in India; Best Beaches in Goa |
| Things to do | All destination activities | Things to Do in Goa |
| Water sports and activity pages | Activity intent | Water Sports in India; Adventure Activities in Goa |
| Travel guide | Complete destination planning | Goa Travel Guide |
| Itinerary | Day-by-day planning | Goa Travel Guide's itinerary section |
| Tour package | Commercial | Goa Tour Packages |
| Plan My Trip | Lead conversion | /plan-your-trip |

## Key calls

- **Hub vs pillar.** `/beach-travel` (H1 "Beach Travel in India") carries the pillar content, so `/blog/beach-travel-in-india` was not created.
- **Beach Tourism vs Beach Travel vs Coastal Tourism.** Beach Tourism is about how beaches are managed (Blue Flag, BEAMS, coastal rules, lifeguards, wildlife protection). Coastal Tourism covers the coast beyond beaches (backwaters, forts, lighthouses, mangroves, harbours, drives, cruises). Beach Travel (the hub) is about choosing and planning a beach trip.
- **Best Beach Destinations vs Best Beaches.** Destinations are places to base a holiday (Goa, the Andamans, Varkala); Best Beaches lists individual beaches (Radhanagar, Palolem, Om beach).
- **Beach Holidays vs Beach Trips.** Holidays is organised by traveller type, budget and length; Trips is organised by departure city for short breaks.
- **One page per state.** "Beach travel in X" and "best beaches in X" show the same results, so each state has one page, `best-beaches-in-<state>`.
- **Goa.** `goa-beaches-travel-guide` is a full travel guide with a beaches section; `things-to-do-in-goa` covers everything to do; `adventure-activities-in-goa` owns water sports. `best-beaches-in-goa` is beach selection only and links to all three.
- **Water activities.** Already published in the Adventure cluster, so they were not duplicated; parasailing, jet skiing and sea walking are sections of water sports.
- **Individual beaches.** No page per beach: existing guides already cover the main beaches (Baga, Calangute, Palolem, Agonda, Radhanagar, Varkala, Kovalam, Tarkarli, Digha, Mandarmani and others), and the rest are sections of the state pages.

## Candidates not created

| Candidate | Decision | Now served by | Reason |
| --- | --- | --- | --- |
| `beach-travel-in-india` | Merged | `/beach-travel` | Same H1 and intent as the category hub required by the brief; the hub carries the pillar copy, quick answer and FAQs. |
| `beach-travel-in-goa` | Merged | `/blog/best-beaches-in-goa` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-andaman` | Merged | `/blog/best-beaches-in-andaman` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-lakshadweep` | Merged | `/blog/best-beaches-in-lakshadweep` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-kerala` | Merged | `/blog/best-beaches-in-kerala` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-karnataka` | Merged | `/blog/best-beaches-in-karnataka` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-maharashtra` | Merged | `/blog/best-beaches-in-maharashtra` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-tamil-nadu` | Merged | `/blog/best-beaches-in-tamil-nadu` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-odisha` | Merged | `/blog/best-beaches-in-odisha` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-gujarat` | Merged | `/blog/best-beaches-in-gujarat` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-andhra-pradesh` | Merged | `/blog/best-beaches-in-andhra-pradesh` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-west-bengal` | Merged | `/blog/best-beaches-in-west-bengal` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `beach-travel-in-puducherry` | Merged | `/blog/best-beaches-in-puducherry` | One beach page per state: 'beach travel in X' and 'best beaches in X' return the same SERP, and a second page would split it. |
| `water-sports-in-india` | Merged | `/blog/water-sports-in-india` | Already published in the Adventure cluster; the beach hub and state pages link to it. |
| `scuba-diving-in-india` | Merged | `/blog/scuba-diving-in-india` | Already published in the Adventure cluster. |
| `snorkeling-in-india` | Merged | `/blog/snorkeling-in-india` | Already published in the Adventure cluster. |
| `surfing-in-india` | Merged | `/blog/surfing-in-india` | Already published in the Adventure cluster. |
| `kayaking-in-india` | Merged | `/blog/kayaking-in-india` | Already published in the Adventure cluster. |
| `scuba-diving-in-andaman` | Merged | `/blog/scuba-diving-in-andaman` | Already published in the Adventure cluster. |
| `parasailing-in-india` | Merged | `/blog/water-sports-in-india` | Thin standalone intent (a short ride offered at the same beaches as other water sports); covered in the water sports table and state pages. |
| `jet-skiing-in-india` | Merged | `/blog/water-sports-in-india` | Same reason as parasailing. |
| `sea-walking-in-india` | Merged | `/blog/water-sports-in-india` | Only a few operating locations (Andamans, some Goa and Konkan operators); covered with 'how a sea walk works' in water sports. |
| `water-sports-in-goa` | Merged | `/blog/adventure-activities-in-goa` | Adventure Activities in Goa already targets Goa water sports; a second page would cannibalise it. |
| `beach-camping-in-india` | Merged | `/blog/camping-in-india` | Beach camping (Ghoghla, Gokarna, riverside Shnongpdeng) is a small, rule-bound niche; covered in camping and state pages. |
| `fishing-trips-in-india` | Merged | `/blog/coastal-tourism-in-india` | Recreational sea fishing is offered informally by boat owners with no verifiable operators or rules to publish; covered as a coastal experience with a safety note. |
| `sailing-in-india` | Manual review | — | Very few public sailing options (clubs in Mumbai, Goa and Chennai mostly for members); not enough verifiable content for a page. Manual review. |
| `family-beach-holidays-in-india` | Merged | `/blog/beach-holidays-in-india` | Covered by the families section; separate page would be thin and overlap. |
| `luxury-beach-holidays-in-india` | Merged | `/blog/beach-holidays-in-india` | Needs named resorts to be useful; we do not publish unverified property claims. Covered as a section and linked to /packages/luxury-holidays. |
| `budget-beach-trips-in-india` | Merged | `/blog/beach-holidays-in-india` | Covered by the budget section (no invented prices). |
| `solo-beach-travel-in-india` | Merged | `/blog/beach-holidays-in-india` | Covered by the solo section. |
| `group-beach-trips-in-india` | Merged | `/packages/group-tours` | Commercial intent owned by Group Tours; tips in beach-holidays-in-india. |
| `best-beaches-to-visit-in-december` | Merged | `/blog/best-time-for-beach-holidays-in-india` | Monthly pages would repeat the same coasts; covered by the month-by-month calendar. |
| `best-beaches-to-visit-in-january` | Merged | `/blog/best-time-for-beach-holidays-in-india` | As above. |
| `best-beaches-to-visit-in-february` | Merged | `/blog/best-time-for-beach-holidays-in-india` | As above. |
| `monsoon-beach-destinations` | Merged | `/blog/best-time-for-beach-holidays-in-india` | Covered by the monsoon section (most beaches close to swimming in the monsoon). |
| `summer-beach-holidays-in-india` | Merged | `/blog/best-time-for-beach-holidays-in-india` | Covered by the April to June section. |
| `winter-beach-holidays-in-india` | Merged | `/blog/best-time-for-beach-holidays-in-india` | Covered by the November to February section. |
| `beach-trips-from-delhi` | Merged | `/blog/beach-trips-in-india` | City sections in Beach Trips in India; a page per city would repeat the same few beaches and split demand. |
| `beach-trips-from-mumbai` | Merged | `/blog/beach-trips-in-india` | City sections in Beach Trips in India; a page per city would repeat the same few beaches and split demand. |
| `beach-trips-from-bengaluru` | Merged | `/blog/beach-trips-in-india` | City sections in Beach Trips in India; a page per city would repeat the same few beaches and split demand. |
| `beach-trips-from-hyderabad` | Merged | `/blog/beach-trips-in-india` | City sections in Beach Trips in India; a page per city would repeat the same few beaches and split demand. |
| `beach-trips-from-chennai` | Merged | `/blog/beach-trips-in-india` | City sections in Beach Trips in India; a page per city would repeat the same few beaches and split demand. |
| `beach-trips-from-ahmedabad` | Merged | `/blog/beach-trips-in-india` | City sections in Beach Trips in India; a page per city would repeat the same few beaches and split demand. |
| `beach-trips-from-kolkata` | Merged | `/blog/beach-trips-in-india` | City sections in Beach Trips in India; a page per city would repeat the same few beaches and split demand. |
| `baga (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page, and by the existing guide `baga-travel-guide`. |
| `calangute (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page, and by the existing guide `calangute-travel-guide`. |
| `anjuna (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page, and by the existing guide `anjuna-travel-guide`. |
| `vagator (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page, and by the existing guide `vagator-travel-guide`. |
| `candolim (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page, and by the existing guide `candolim-travel-guide`. |
| `palolem (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page, and by the existing guide `palolem-travel-guide`. |
| `colva (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page. |
| `morjim (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page, and by the existing guide `morjim-travel-guide`. |
| `arambol (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page. |
| `agonda (individual beach)` | Merged | `/blog/best-beaches-in-goa` | Individual beach: covered as a section of its state beach page, and by the existing guide `agonda-travel-guide`. |
| `havelock (individual beach)` | Merged | `/blog/best-beaches-in-andaman` | Individual beach: covered as a section of its state beach page, and by the existing guide `havelock-island-andaman-travel-guide`. |
| `neil island (individual beach)` | Merged | `/blog/best-beaches-in-andaman` | Individual beach: covered as a section of its state beach page, and by the existing guide `neil-island-andaman-travel-guide`. |
| `radhanagar (individual beach)` | Merged | `/blog/best-beaches-in-andaman` | Individual beach: covered as a section of its state beach page, and by the existing guide `radhanagar-beach-andaman-travel-guide`. |
| `varkala (individual beach)` | Merged | `/blog/best-beaches-in-kerala` | Individual beach: covered as a section of its state beach page, and by the existing guide `varkala-travel-guide`. |
| `kovalam (individual beach)` | Merged | `/blog/best-beaches-in-kerala` | Individual beach: covered as a section of its state beach page, and by the existing guide `kovalam-travel-guide`. |
| `marari (individual beach)` | Merged | `/blog/best-beaches-in-kerala` | Individual beach: covered as a section of its state beach page. |
| `kannur (individual beach)` | Merged | `/blog/best-beaches-in-kerala` | Individual beach: covered as a section of its state beach page, and by the existing guide `kannur-travel-guide`. |
| `bekal (individual beach)` | Merged | `/blog/best-beaches-in-kerala` | Individual beach: covered as a section of its state beach page, and by the existing guide `bekal-travel-guide`. |
| `gokarna (individual beach)` | Merged | `/blog/best-beaches-in-karnataka` | Individual beach: covered as a section of its state beach page, and by the existing guide `gokarna-beaches-travel-guide`. |
| `om beach (individual beach)` | Merged | `/blog/best-beaches-in-karnataka` | Individual beach: covered as a section of its state beach page. |
| `kudle (individual beach)` | Merged | `/blog/best-beaches-in-karnataka` | Individual beach: covered as a section of its state beach page. |
| `malpe (individual beach)` | Merged | `/blog/best-beaches-in-karnataka` | Individual beach: covered as a section of its state beach page. |
| `murudeshwar (individual beach)` | Merged | `/blog/best-beaches-in-karnataka` | Individual beach: covered as a section of its state beach page. |
| `alibaug (individual beach)` | Merged | `/blog/best-beaches-in-maharashtra` | Individual beach: covered as a section of its state beach page, and by the existing guide `alibaug-travel-guide`. |
| `tarkarli (individual beach)` | Merged | `/blog/best-beaches-in-maharashtra` | Individual beach: covered as a section of its state beach page, and by the existing guide `tarkarli-travel-guide`. |
| `malvan (individual beach)` | Merged | `/blog/best-beaches-in-maharashtra` | Individual beach: covered as a section of its state beach page. |
| `ganpatipule (individual beach)` | Merged | `/blog/best-beaches-in-maharashtra` | Individual beach: covered as a section of its state beach page, and by the existing guide `ganpatipule-travel-guide`. |
| `kashid (individual beach)` | Merged | `/blog/best-beaches-in-maharashtra` | Individual beach: covered as a section of its state beach page. |
| `diveagar (individual beach)` | Merged | `/blog/best-beaches-in-maharashtra` | Individual beach: covered as a section of its state beach page. |
| `mahabalipuram (individual beach)` | Merged | `/blog/best-beaches-in-tamil-nadu` | Individual beach: covered as a section of its state beach page, and by the existing guide `mahabalipuram-travel-guide`. |
| `rameswaram (individual beach)` | Merged | `/blog/best-beaches-in-tamil-nadu` | Individual beach: covered as a section of its state beach page, and by the existing guide `rameswaram-travel-guide`. |
| `kanyakumari (individual beach)` | Merged | `/blog/best-beaches-in-tamil-nadu` | Individual beach: covered as a section of its state beach page, and by the existing guide `kanyakumari-travel-guide`. |
| `puri (individual beach)` | Merged | `/blog/best-beaches-in-odisha` | Individual beach: covered as a section of its state beach page, and by the existing guide `puri-travel-guide`. |
| `gopalpur (individual beach)` | Merged | `/blog/best-beaches-in-odisha` | Individual beach: covered as a section of its state beach page. |
| `chandrabhaga (individual beach)` | Merged | `/blog/best-beaches-in-odisha` | Individual beach: covered as a section of its state beach page. |
| `mandvi (individual beach)` | Merged | `/blog/best-beaches-in-gujarat` | Individual beach: covered as a section of its state beach page, and by the existing guide `mandvi-travel-guide`. |
| `shivrajpur (individual beach)` | Merged | `/blog/best-beaches-in-gujarat` | Individual beach: covered as a section of its state beach page. |
| `dwarka (individual beach)` | Merged | `/blog/best-beaches-in-gujarat` | Individual beach: covered as a section of its state beach page, and by the existing guide `dwarka-travel-guide`. |
| `somnath (individual beach)` | Merged | `/blog/best-beaches-in-gujarat` | Individual beach: covered as a section of its state beach page, and by the existing guide `somnath-travel-guide`. |
| `tithal (individual beach)` | Merged | `/blog/best-beaches-in-gujarat` | Individual beach: covered as a section of its state beach page. |
| `dumas (individual beach)` | Merged | `/blog/best-beaches-in-gujarat` | Individual beach: covered as a section of its state beach page. |
| `chorwad (individual beach)` | Merged | `/blog/best-beaches-in-gujarat` | Individual beach: covered as a section of its state beach page. |
| `digha (individual beach)` | Merged | `/blog/best-beaches-in-west-bengal` | Individual beach: covered as a section of its state beach page, and by the existing guide `digha-travel-guide`. |
| `mandarmani (individual beach)` | Merged | `/blog/best-beaches-in-west-bengal` | Individual beach: covered as a section of its state beach page, and by the existing guide `mandarmani-travel-guide`. |
| `shankarpur (individual beach)` | Merged | `/blog/best-beaches-in-west-bengal` | Individual beach: covered as a section of its state beach page. |
| `tajpur (individual beach)` | Merged | `/blog/best-beaches-in-west-bengal` | Individual beach: covered as a section of its state beach page. |
| `bakkhali (individual beach)` | Merged | `/blog/best-beaches-in-west-bengal` | Individual beach: covered as a section of its state beach page. |
| `rushikonda (individual beach)` | Merged | `/blog/best-beaches-in-andhra-pradesh` | Individual beach: covered as a section of its state beach page. |
| `yarada (individual beach)` | Merged | `/blog/best-beaches-in-andhra-pradesh` | Individual beach: covered as a section of its state beach page. |
| `bheemili (individual beach)` | Merged | `/blog/best-beaches-in-andhra-pradesh` | Individual beach: covered as a section of its state beach page. |
| `promenade beach (individual beach)` | Merged | `/blog/best-beaches-in-puducherry` | Individual beach: covered as a section of its state beach page. |
| `paradise beach (individual beach)` | Merged | `/blog/best-beaches-in-puducherry` | Individual beach: covered as a section of its state beach page. |
| `serenity beach (individual beach)` | Merged | `/blog/best-beaches-in-puducherry` | Individual beach: covered as a section of its state beach page. |
