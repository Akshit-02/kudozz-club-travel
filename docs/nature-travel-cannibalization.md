# Nature Travel: cannibalisation control

Generated 2026-09-27. Decisions use the brief's vocabulary: **KEEP** (a separate page with a distinct intent), **MERGE** (served by an approved cluster page or section), **UPDATE EXISTING** (an existing guide stays canonical and gets a cluster pointer), **REDIRECT** and **DO NOT CREATE**.

Totals: KEEP 33, MERGE 108, UPDATE EXISTING 31, DO NOT CREATE 7, REDIRECT 0. **No redirects are required**: no existing URL changed, and no merged candidate URL was ever published.

## Explicit comparisons

| Topic comparison | Overlap | Decision | Action |
| --- | --- | --- | --- |
| Nature travel vs nature tourism vs nature trips in India | Same result set | **MERGE** | All served by `/nature-travel` |
| Best nature destinations vs natural places to visit vs nature getaways | Same listicle intent | **MERGE** | `/blog/best-nature-destinations-in-india` |
| Best nature destinations vs natural wonders | Places to go vs geological and natural phenomena | **KEEP** | Linked both ways |
| Birdwatching in India vs nature birding pages | Wildlife cluster owns birding | **UPDATE EXISTING** | `/blog/birdwatching-in-india` stays canonical; lakes and forest pages link to it |
| Forest destinations vs national parks and sanctuaries | Habitats and landscapes vs parks, species and safaris | **KEEP** | Forest page links to Wildlife for sightings |
| Valleys and Himalayan nature vs best mountain destinations and hill stations | Landscapes vs hill towns and high-altitude destinations | **KEEP** | Linked both ways; Hills owns hill towns |
| Monsoon nature travel vs monsoon hill stations and monsoon treks | Same seasonal intent | **MERGE** | Served by monsoon hill stations, the waterfalls page and the Western Ghats page |
| Summer and winter nature travel | Seasonal rows, not separate intents | **MERGE** | Sections of `/blog/best-time-for-nature-travel-in-india` |
| Monthly nature pages | Thin, near-duplicate | **DO NOT CREATE** | Month table in the best-time page |
| Natural caves vs rock-cut caves | Geology vs architecture | **KEEP** | Heritage owns `/blog/rock-cut-caves-in-india`; linked both ways |
| Village tourism vs tribal tourism | Rural nature stays vs culture-led visits | **KEEP** | Linked both ways |
| Budget and luxury nature trips vs retreats | Same stay-selection intent | **MERGE** | Budget and luxury sections of `/blog/nature-retreats-in-india` |
| Solo and first-time nature trips vs planning | Same planning intent | **MERGE** | Section of `/blog/how-to-plan-a-nature-trip-in-india` |
| Nature photography vs wildlife photography | Landscapes vs animals | **KEEP** | Linked both ways |
| Nature state pages vs hill-station and wildlife state pages | Landscape comparison vs hill towns vs parks | **KEEP** | Created only for seven states with distinct nature intent |
| Destination guides vs nature pages | Place intent vs comparison intent | **UPDATE EXISTING** | Guides stay canonical; 88 guides get a pointer |
| Beaches, islands and marine parks | Beach and Adventure clusters own them | **UPDATE EXISTING** | Marine biodiversity is a section of the biodiversity page |
| Treks, rafting and camping | Adventure cluster owns activities | **UPDATE EXISTING** | Nature links to Adventure; no activity pages created |
| Itineraries vs packages | Informational plan vs commercial page | **KEEP** | No prices on itineraries; packages carry the quote CTA |

## Every candidate not created

| Candidate | Decision | Now served by | Reason |
| --- | --- | --- | --- |
| `nature-travel-in-india` | MERGE | `/nature-travel` | Same result set as the hub. |
| `nature-tourism-in-india` | MERGE | `/nature-travel` | Same result set as the hub. |
| `nature-trips-in-india` | MERGE | `/nature-travel` | Same result set as the hub. |
| `best-natural-places-to-visit-in-india` | MERGE | `/blog/best-nature-destinations-in-india` | Same listicle intent. |
| `nature-holidays-in-india` | MERGE | `/blog/best-nature-destinations-in-india` | Same listicle intent. |
| `nature-getaways-in-india` | MERGE | `/blog/best-nature-destinations-in-india` | Same listicle intent. |
| `nature-places-in-india` | MERGE | `/blog/best-nature-destinations-in-india` | Same listicle intent. |
| `geological-wonders-of-india` | MERGE | `/blog/natural-wonders-of-india` | Sections of the natural wonders page; individual sites have guides. |
| `canyons-in-india` | MERGE | `/blog/natural-wonders-of-india` | Sections of the natural wonders page; individual sites have guides. |
| `gorges-in-india` | MERGE | `/blog/natural-wonders-of-india` | Sections of the natural wonders page; individual sites have guides. |
| `natural-rock-formations-in-india` | MERGE | `/blog/natural-wonders-of-india` | Sections of the natural wonders page; individual sites have guides. |
| `forest-tourism-in-india` | MERGE | `/blog/forest-destinations-in-india` | Sections of the forests pillar (by forest type); wildlife reserves stay with the Wildlife cluster. |
| `best-forest-destinations-in-india` | MERGE | `/blog/forest-destinations-in-india` | Sections of the forests pillar (by forest type); wildlife reserves stay with the Wildlife cluster. |
| `forest-holidays-in-india` | MERGE | `/blog/forest-destinations-in-india` | Sections of the forests pillar (by forest type); wildlife reserves stay with the Wildlife cluster. |
| `forest-getaways` | MERGE | `/blog/forest-destinations-in-india` | Sections of the forests pillar (by forest type); wildlife reserves stay with the Wildlife cluster. |
| `tropical-forests-in-india` | MERGE | `/blog/forest-destinations-in-india` | Sections of the forests pillar (by forest type); wildlife reserves stay with the Wildlife cluster. |
| `evergreen-forests-in-india` | MERGE | `/blog/forest-destinations-in-india` | Sections of the forests pillar (by forest type); wildlife reserves stay with the Wildlife cluster. |
| `rainforests-in-india` | MERGE | `/blog/forest-destinations-in-india` | Sections of the forests pillar (by forest type); wildlife reserves stay with the Wildlife cluster. |
| `mangrove-forests-in-india` | MERGE | `/blog/forest-destinations-in-india` | Sections of the forests pillar (by forest type); wildlife reserves stay with the Wildlife cluster. |
| `mountain-destinations-in-india` | UPDATE EXISTING | `/blog/best-mountain-destinations-in-india` | Hill Station cluster owns mountain destinations. |
| `best-hill-stations-in-india` | UPDATE EXISTING | `/blog/best-hill-stations-in-india` | Hill Station cluster owns this intent; not created under Nature. |
| `valley-holidays` | MERGE | `/blog/valleys-in-india` | Sections of the valleys pillar. |
| `himalayan-valleys` | MERGE | `/blog/valleys-in-india` | Sections of the valleys pillar. |
| `green-valleys-in-india` | MERGE | `/blog/valleys-in-india` | Sections of the valleys pillar. |
| `offbeat-valleys` | MERGE | `/blog/valleys-in-india` | Sections of the valleys pillar. |
| `hidden-valleys-in-india` | MERGE | `/blog/valleys-in-india` | Sections of the valleys pillar. |
| `best-waterfalls-in-india` | MERGE | `/blog/waterfalls-in-india` | Same intent; sections of the waterfalls pillar. |
| `famous-waterfalls-in-india` | MERGE | `/blog/waterfalls-in-india` | Same intent; sections of the waterfalls pillar. |
| `hidden-waterfalls` | MERGE | `/blog/waterfalls-in-india` | Same intent; sections of the waterfalls pillar. |
| `waterfall-trips` | MERGE | `/blog/waterfalls-in-india` | Same intent; sections of the waterfalls pillar. |
| `waterfall-hikes` | MERGE | `/blog/waterfalls-in-india` | Same intent; sections of the waterfalls pillar. |
| `monsoon-waterfalls-in-india` | MERGE | `/blog/waterfalls-in-india` | Same intent; sections of the waterfalls pillar. |
| `offbeat-waterfalls` | MERGE | `/blog/waterfalls-in-india` | Same intent; sections of the waterfalls pillar. |
| `best-lakes-in-india` | MERGE | `/blog/lakes-in-india` | Sections of the lakes pillar. |
| `natural-lakes-in-india` | MERGE | `/blog/lakes-in-india` | Sections of the lakes pillar. |
| `scenic-lakes` | MERGE | `/blog/lakes-in-india` | Sections of the lakes pillar. |
| `lake-holidays` | MERGE | `/blog/lakes-in-india` | Sections of the lakes pillar. |
| `hidden-lakes` | MERGE | `/blog/lakes-in-india` | Sections of the lakes pillar. |
| `wetlands-of-india` | MERGE | `/blog/lakes-in-india` | Sections of the lakes pillar. |
| `ramsar-sites-to-visit` | MERGE | `/blog/lakes-in-india` | Sections of the lakes pillar. |
| `river-tourism-in-india` | MERGE | `/blog/riverside-destinations-in-india` | Sections of the riverside pillar; rafting stays with Adventure. |
| `riverside-getaways` | MERGE | `/blog/riverside-destinations-in-india` | Sections of the riverside pillar; rafting stays with Adventure. |
| `river-valley-tourism` | MERGE | `/blog/riverside-destinations-in-india` | Sections of the riverside pillar; rafting stays with Adventure. |
| `himalayan-river-destinations` | MERGE | `/blog/riverside-destinations-in-india` | Sections of the riverside pillar; rafting stays with Adventure. |
| `river-cruises-in-india` | MERGE | `/blog/riverside-destinations-in-india` | Sections of the riverside pillar; rafting stays with Adventure. |
| `cave-tourism-in-india` | MERGE | `/blog/natural-caves-in-india` | Same intent. |
| `rock-cut-caves` | UPDATE EXISTING | `/blog/rock-cut-caves-in-india` | Heritage cluster owns rock-cut caves. |
| `nature-travel-in-tamil-nadu` | MERGE | `/blog/western-ghats-nature-travel` | Hill and forest intent owned by the Hill Station state page; Western Ghats page covers the rest. |
| `nature-travel-in-maharashtra` | MERGE | `/blog/western-ghats-nature-travel` | Sahyadri nature covered by the Western Ghats page and Maharashtra hill page. |
| `nature-travel-in-goa` | MERGE | `/blog/western-ghats-nature-travel` | Beach cluster owns Goa; Dudhsagar and Mollem covered by the Western Ghats page. |
| `nature-travel-in-jammu-and-kashmir` | MERGE | `/blog/himalayan-nature-travel` | Hill Station state page owns Kashmir; lakes and valleys covered by the Himalayan and lakes pages. |
| `nature-travel-in-ladakh` | MERGE | `/blog/himalayan-nature-travel` | High-altitude intent owned by mountain destinations; Himalayan page covers ecosystems. |
| `nature-travel-in-sikkim` | MERGE | `/blog/nature-travel-in-northeast-india` | Hill Station state page owns Sikkim; Northeast page covers nature. |
| `nature-travel-in-arunachal-pradesh` | MERGE | `/blog/nature-travel-in-northeast-india` | Northeast page section. |
| `nature-travel-in-assam` | MERGE | `/blog/nature-travel-in-northeast-india` | Wildlife cluster owns Assam's parks; Northeast page covers rivers and Majuli. |
| `nature-travel-in-gujarat` | MERGE | `/blog/natural-wonders-of-india` | Rann and Gir are owned by existing guides and Wildlife; natural wonders page covers the Rann. |
| `nature-travel-in-rajasthan` | MERGE | `/blog/best-nature-destinations-in-india` | Thin nature intent beyond wildlife and deserts. |
| `nature-travel-in-andaman-and-nicobar` | MERGE | `/blog/biodiversity-hotspots-in-india` | Beach cluster owns the islands; marine biodiversity covered in the biodiversity page. |
| `nature-travel-in-lakshadweep` | MERGE | `/blog/biodiversity-hotspots-in-india` | Beach cluster owns the islands. |
| `best-eco-tourism-destinations` | MERGE | `/blog/eco-tourism-in-india` | Sections of the eco tourism pillar. |
| `eco-friendly-travel` | MERGE | `/blog/eco-tourism-in-india` | Sections of the eco tourism pillar. |
| `sustainable-tourism-in-india` | MERGE | `/blog/eco-tourism-in-india` | Sections of the eco tourism pillar. |
| `responsible-nature-travel` | MERGE | `/blog/eco-tourism-in-india` | Sections of the eco tourism pillar. |
| `nature-based-tourism` | MERGE | `/blog/eco-tourism-in-india` | Sections of the eco tourism pillar. |
| `community-based-tourism` | MERGE | `/blog/eco-tourism-in-india` | Sections of the eco tourism pillar. |
| `eco-tourism-experiences` | MERGE | `/blog/eco-tourism-in-india` | Sections of the eco tourism pillar. |
| `biodiversity-tourism` | MERGE | `/blog/biodiversity-hotspots-in-india` | Sections of the biodiversity page. |
| `western-ghats-biodiversity` | MERGE | `/blog/biodiversity-hotspots-in-india` | Sections of the biodiversity page. |
| `himalayan-biodiversity` | MERGE | `/blog/biodiversity-hotspots-in-india` | Sections of the biodiversity page. |
| `northeast-biodiversity` | MERGE | `/blog/biodiversity-hotspots-in-india` | Sections of the biodiversity page. |
| `marine-biodiversity-in-india` | MERGE | `/blog/biodiversity-hotspots-in-india` | Sections of the biodiversity page. |
| `forest-biodiversity` | MERGE | `/blog/biodiversity-hotspots-in-india` | Sections of the biodiversity page. |
| `butterfly-tourism-in-india` | MERGE | `/blog/biodiversity-hotspots-in-india` | Sections of the biodiversity page. |
| `best-birdwatching-destinations` | UPDATE EXISTING | `/blog/birdwatching-in-india` | Wildlife cluster owns birdwatching; Nature pages link to it. |
| `bird-sanctuaries-in-india` | UPDATE EXISTING | `/blog/birdwatching-in-india` | Wildlife cluster owns birdwatching; Nature pages link to it. |
| `birding-tours` | UPDATE EXISTING | `/blog/birdwatching-in-india` | Wildlife cluster owns birdwatching; Nature pages link to it. |
| `migratory-birds-in-india` | UPDATE EXISTING | `/blog/birdwatching-in-india` | Wildlife cluster owns birdwatching; Nature pages link to it. |
| `birdwatching-for-beginners` | UPDATE EXISTING | `/blog/birdwatching-in-india` | Wildlife cluster owns birdwatching; Nature pages link to it. |
| `winter-birdwatching` | UPDATE EXISTING | `/blog/birdwatching-in-india` | Wildlife cluster owns birdwatching; Nature pages link to it. |
| `bird-photography` | UPDATE EXISTING | `/blog/wildlife-photography-in-india` | Wildlife cluster owns bird and wildlife photography. |
| `floral-tourism-in-india` | MERGE | `/blog/flower-valleys-and-blooms-in-india` | Same intent. |
| `forest-retreats` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `nature-resorts-in-india` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `forest-stays` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `riverside-retreats` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `lakeside-retreats` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `mountain-nature-retreats` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `luxury-nature-retreats` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `budget-nature-retreats` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `nature-retreats-for-couples` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `nature-retreats-for-families` | MERGE | `/blog/nature-retreats-in-india` | Sections of the retreats pillar; no named properties. |
| `rural-tourism-in-india` | MERGE | `/blog/village-tourism-in-india` | Sections of the village tourism page. |
| `village-stays` | MERGE | `/blog/village-tourism-in-india` | Sections of the village tourism page. |
| `himalayan-village-tourism` | MERGE | `/blog/village-tourism-in-india` | Sections of the village tourism page. |
| `northeast-village-tourism` | MERGE | `/blog/village-tourism-in-india` | Sections of the village tourism page. |
| `kerala-village-tourism` | MERGE | `/blog/village-tourism-in-india` | Sections of the village tourism page. |
| `landscape-photography-in-india` | MERGE | `/blog/nature-photography-in-india` | Sections of the photography page. |
| `waterfall-photography` | MERGE | `/blog/nature-photography-in-india` | Sections of the photography page. |
| `mountain-photography` | MERGE | `/blog/nature-photography-in-india` | Sections of the photography page. |
| `forest-photography` | MERGE | `/blog/nature-photography-in-india` | Sections of the photography page. |
| `lesser-known-nature-destinations` | MERGE | `/blog/offbeat-nature-destinations-in-india` | Same intent; slow-travel advice is a section. |
| `underrated-nature-places` | MERGE | `/blog/offbeat-nature-destinations-in-india` | Same intent; slow-travel advice is a section. |
| `hidden-nature-getaways` | MERGE | `/blog/offbeat-nature-destinations-in-india` | Same intent; slow-travel advice is a section. |
| `offbeat-forest-destinations` | MERGE | `/blog/offbeat-nature-destinations-in-india` | Same intent; slow-travel advice is a section. |
| `slow-nature-travel` | MERGE | `/blog/offbeat-nature-destinations-in-india` | Same intent; slow-travel advice is a section. |
| `summer-nature-destinations` | MERGE | `/blog/best-time-for-nature-travel-in-india` | Month table section; hill escapes owned by the Hill Station summer page. |
| `cool-nature-destinations` | UPDATE EXISTING | `/blog/summer-hill-stations-in-india` | Hill Station cluster owns summer escapes. |
| `monsoon-nature-travel` | UPDATE EXISTING | `/blog/monsoon-hill-stations-in-india` | Hill Station monsoon page and the waterfalls and Western Ghats pages cover it. |
| `western-ghats-monsoon-travel` | MERGE | `/blog/western-ghats-nature-travel` | Section of the Western Ghats page. |
| `green-destinations-in-monsoon` | UPDATE EXISTING | `/blog/monsoon-hill-stations-in-india` | Same intent. |
| `winter-nature-destinations` | MERGE | `/blog/best-time-for-nature-travel-in-india` | Month table section. |
| `winter-nature-getaways` | MERGE | `/blog/best-time-for-nature-travel-in-india` | Month table section. |
| `nature-destinations-in-june` | DO NOT CREATE | `/blog/best-time-for-nature-travel-in-india` | Monthly pages would be thin; months are rows in one calendar. |
| `nature-destinations-in-december` | DO NOT CREATE | `/blog/best-time-for-nature-travel-in-india` | Monthly pages would be thin; months are rows in one calendar. |
| `nature-destinations-in-august` | DO NOT CREATE | `/blog/best-time-for-nature-travel-in-india` | Monthly pages would be thin; months are rows in one calendar. |
| `solo-nature-travel` | MERGE | `/blog/how-to-plan-a-nature-trip-in-india` | Section of the planning guide. |
| `first-time-nature-travel` | MERGE | `/blog/how-to-plan-a-nature-trip-in-india` | Section of the planning guide. |
| `budget-nature-trips` | MERGE | `/blog/nature-retreats-in-india` | Budget stays and ways to save are sections of the retreats and planning pages; Hill Station budget page covers hills. |
| `luxury-nature-holidays` | MERGE | `/blog/nature-retreats-in-india` | Luxury retreats section. |
| `nature-trip-packing-list` | MERGE | `/blog/how-to-plan-a-nature-trip-in-india` | Sections of the planning guide. |
| `nature-trip-cost` | MERGE | `/blog/how-to-plan-a-nature-trip-in-india` | Sections of the planning guide. |
| `how-many-days-for-a-nature-trip` | MERGE | `/blog/how-to-plan-a-nature-trip-in-india` | Sections of the planning guide. |
| `how-to-choose-a-nature-destination` | MERGE | `/blog/how-to-plan-a-nature-trip-in-india` | Sections of the planning guide. |
| `nature-tourism-rules` | MERGE | `/blog/how-to-plan-a-nature-trip-in-india` | Sections of the planning guide. |
| `uttarakhand-nature-itinerary` | UPDATE EXISTING | `/blog/uttarakhand-hill-stations-itinerary` | Hill Station itinerary and Valley of Flowers guide cover it. |
| `himachal-nature-itinerary` | UPDATE EXISTING | `/blog/shimla-manali-itinerary` | Hill Station itinerary covers it. |
| `nature-tour-packages` | UPDATE EXISTING | `/packages/nature-holidays` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `nature-holiday-packages` | UPDATE EXISTING | `/packages/nature-holidays` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `family-nature-packages` | UPDATE EXISTING | `/packages/family-holidays` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `couple-nature-packages` | UPDATE EXISTING | `/packages/honeymoon` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `luxury-nature-packages` | UPDATE EXISTING | `/packages/luxury-holidays` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `budget-nature-packages` | UPDATE EXISTING | `/packages/budget-holidays` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `nature-wildlife-packages` | UPDATE EXISTING | `/packages/wildlife-tours` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `nature-adventure-packages` | UPDATE EXISTING | `/packages/adventure-tours` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `kerala-nature-packages` | UPDATE EXISTING | `/packages/kerala` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `uttarakhand-nature-packages` | UPDATE EXISTING | `/packages/uttarakhand` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `himachal-nature-packages` | UPDATE EXISTING | `/packages/himachal-pradesh` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `kashmir-nature-packages` | UPDATE EXISTING | `/packages/kashmir` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `northeast-nature-packages` | UPDATE EXISTING | `/packages/northeast-india` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `sikkim-nature-packages` | UPDATE EXISTING | `/packages/sikkim` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `meghalaya-nature-packages` | UPDATE EXISTING | `/packages/meghalaya` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `karnataka-nature-packages` | UPDATE EXISTING | `/packages/karnataka` | Commercial intent belongs on package pages (existing, or the new Nature Holidays travel style). |
| `best-wildlife-destinations-in-india` | DO NOT CREATE | `/blog/best-wildlife-destinations-in-india` | Wildlife cluster owns it. |
| `best-beaches-in-india` | DO NOT CREATE | `/blog/best-beaches-in-india` | Beach cluster owns it. |
| `national-parks-in-india` | DO NOT CREATE | `/blog/best-national-parks-in-india` | Wildlife cluster owns it. |
| `trekking-in-india` | DO NOT CREATE | `/blog/trekking-in-india` | Adventure cluster owns it. |
