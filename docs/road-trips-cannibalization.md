# Road Trips: cannibalisation control

Generated 2026-09-28. Decisions use the brief's vocabulary: **KEEP** (a separate page with a distinct intent), **MERGE** (served by an approved cluster page or section), **UPDATE EXISTING** (an existing guide stays canonical and gets a cluster pointer), **REDIRECT** and **DO NOT CREATE**.

Totals: KEEP 40, MERGE 125, UPDATE EXISTING 46, DO NOT CREATE 12, REDIRECT 0. **No redirects are required**: no existing URL changed, and no merged candidate URL was ever published.

## Explicit comparisons

| Topic comparison | Overlap | Decision | Action |
| --- | --- | --- | --- |
| Road trips in India vs road travel vs road-trip holidays | Same result set | **MERGE** | All served by `/road-trips` |
| Best road trips vs best road-trip routes vs scenic and long road trips | Same listicle intent | **MERGE** | `/blog/best-road-trips-in-india` |
| Road trip vs destination guide | How to get there and what is on the way vs what to do on arrival | **KEEP** | Route pages link to the guide; guides get a pointer back |
| Ladakh road trip vs the Leh Ladakh guide | Same intent | **UPDATE EXISTING** | `/blog/leh-ladakh-road-trip-travel-guide` stays canonical; only Manali–Leh and Srinagar–Leh route pages are new |
| Himalayan and mountain road trips vs Hills | Same intent | **UPDATE EXISTING** | `/blog/mountain-road-trips-in-india` stays canonical; state and route pages below it |
| Bike and motorcycle road trips vs Adventure | Activity intent | **UPDATE EXISTING** | `/blog/best-motorcycle-trips-in-india` and `/blog/spiti-valley-bike-trip` are canonical |
| Spiti road trip vs Spiti bike trip | Car and general route vs riding | **KEEP** | Linked both ways |
| Rajasthan road trip vs Rajasthan heritage itinerary | Driving route vs heritage circuit | **KEEP** | Linked both ways |
| Road trips from a city vs hill stations near the city vs adventure weekends | Drives to any destination vs hill towns vs activities | **KEEP** | Linked both ways |
| Western Ghats road trips vs Western Ghats nature travel | Ghat roads vs ecosystems | **KEEP** | Linked both ways |
| Coastal road trips vs Beach cluster | Journey vs beaches | **KEEP** | Beaches link out to the Beach cluster |
| Wildlife road trips vs Wildlife cluster | Drives between parks vs parks and safaris | **KEEP** | Safaris link to the Wildlife cluster |
| Family and couples road trips vs family-holidays and honeymoon packages | Discovery vs commercial | **KEEP** | Linked both ways |
| Weekend road trips in India | City-specific in practice | **MERGE** | Hub section linking the six city pages |
| Summer road trips | Himalayan intent | **MERGE** | Mountain road trips and the Himalayan route pages |
| Monthly and 2, 3, 5 or 7-day generic itineraries | Doorway-like, thin | **DO NOT CREATE** | Duration tables inside route and city pages |
| Road-trip package variants (Himalayan, Rajasthan, luxury and so on) | One commercial intent | **MERGE** | `/packages/road-trip-holidays` and state packages; no prices |
| City pages for Pune, Jaipur, Chandigarh and Kochi | Overlap with existing pages | **MERGE** | Mumbai, Rajasthan, Himachal and Kerala pages |
| City pages for Ahmedabad, Lucknow, Indore, Surat and Vadodara | Low demand or no distinct destination set | **DO NOT CREATE** | Best road trips and regional pages |

## Every candidate not created

| Candidate | Decision | Now served by | Reason |
| --- | --- | --- | --- |
| `road-trips-in-india` | MERGE | `/road-trips` | Same result set as the hub. |
| `road-travel-in-india` | MERGE | `/road-trips` | Same result set as the hub. |
| `road-trip-holidays-in-india` | MERGE | `/road-trips` | Same result set as the hub. |
| `road-trip-ideas-india` | MERGE | `/road-trips` | Same result set as the hub. |
| `best-road-trip-routes-in-india` | MERGE | `/blog/best-road-trips-in-india` | Same listicle intent; routes are the list items. |
| `road-trip-destinations-in-india` | MERGE | `/blog/best-road-trips-in-india` | Same intent; destinations are covered as route end points. |
| `scenic-road-trips-in-india` | MERGE | `/blog/best-road-trips-in-india` | Scenic is the default qualifier of the best list; sections by landscape. |
| `long-road-trips-in-india` | MERGE | `/blog/best-road-trips-in-india` | Section of the best list (multi-day routes). |
| `most-beautiful-drives-in-india` | MERGE | `/blog/best-road-trips-in-india` | Same intent. |
| `valley-road-trips` | MERGE | `/blog/best-road-trips-in-india` | Section by landscape. |
| `lakeside-road-trips` | MERGE | `/blog/best-road-trips-in-india` | Too thin; section by landscape. |
| `forest-road-trips` | MERGE | `/blog/best-road-trips-in-india` | Section by landscape and the Western Ghats page. |
| `desert-road-trips` | MERGE | `/blog/best-road-trips-in-india` | Rajasthan page section and winter page. |
| `himalayan-road-trips` | UPDATE EXISTING | `/blog/mountain-road-trips-in-india` | Hill Station cluster owns mountain and Himalayan drives; linked from the hub. |
| `mountain-road-trips` | UPDATE EXISTING | `/blog/mountain-road-trips-in-india` | Existing canonical page (Hill Station cluster). |
| `kashmir-road-trip` | UPDATE EXISTING | `/blog/kashmir-itinerary` | Hill Station cluster's Kashmir itinerary owns the route; Srinagar–Leh has its own page. |
| `sikkim-road-trip` | UPDATE EXISTING | `/blog/darjeeling-sikkim-itinerary` | Hill Station itinerary owns the Sikkim route; Northeast road trips page covers it. |
| `arunachal-road-trip` | MERGE | `/blog/guwahati-to-tawang-road-trip` | Tawang route page plus the Northeast page. |
| `ladakh-road-trip` | UPDATE EXISTING | `/blog/leh-ladakh-road-trip-travel-guide` | The existing Leh Ladakh road trip guide owns this (routes, 14-day itinerary, budget, bike vs car, permits). |
| `leh-ladakh-road-trip` | UPDATE EXISTING | `/blog/leh-ladakh-road-trip-travel-guide` | The existing Leh Ladakh road trip guide owns this (routes, 14-day itinerary, budget, bike vs car, permits). |
| `ladakh-road-trip-itinerary` | UPDATE EXISTING | `/blog/leh-ladakh-road-trip-travel-guide` | The existing Leh Ladakh road trip guide owns this (routes, 14-day itinerary, budget, bike vs car, permits). |
| `ladakh-road-trip-cost` | UPDATE EXISTING | `/blog/leh-ladakh-road-trip-travel-guide` | The existing Leh Ladakh road trip guide owns this (routes, 14-day itinerary, budget, bike vs car, permits). |
| `ladakh-road-trip-packing-list` | UPDATE EXISTING | `/blog/leh-ladakh-road-trip-travel-guide` | The existing Leh Ladakh road trip guide owns this (routes, 14-day itinerary, budget, bike vs car, permits). |
| `ladakh-road-trip-by-car` | UPDATE EXISTING | `/blog/leh-ladakh-road-trip-travel-guide` | The existing Leh Ladakh road trip guide owns this (routes, 14-day itinerary, budget, bike vs car, permits). |
| `ladakh-by-road` | UPDATE EXISTING | `/blog/leh-ladakh-road-trip-travel-guide` | The existing Leh Ladakh road trip guide owns this (routes, 14-day itinerary, budget, bike vs car, permits). |
| `ladakh-road-trip-by-bike` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns bike intent; Ladakh guide covers bike vs car. |
| `delhi-to-ladakh-road-trip` | MERGE | `/blog/manali-to-leh-road-trip` | The Manali–Leh page covers the Delhi approach; the Srinagar page covers the other. |
| `delhi-to-leh-road-trip` | MERGE | `/blog/manali-to-leh-road-trip` | Same as Delhi to Ladakh. |
| `leh-to-nubra-road-trip` | UPDATE EXISTING | `/blog/nubra-valley-travel-guide` | Short day-drives from Leh; the destination guide's how-to-reach section and the Ladakh guide cover the road. |
| `leh-to-pangong-road-trip` | UPDATE EXISTING | `/blog/pangong-lake-travel-guide` | Short day-drives from Leh; the destination guide's how-to-reach section and the Ladakh guide cover the road. |
| `leh-to-tso-moriri-road-trip` | UPDATE EXISTING | `/blog/tso-moriri-travel-guide` | Short day-drives from Leh; the destination guide's how-to-reach section and the Ladakh guide cover the road. |
| `delhi-to-spiti-road-trip` | MERGE | `/blog/spiti-valley-road-trip` | Sections of the Spiti road trip page (approaches, circuit, itinerary, cost components, season). |
| `shimla-to-spiti-road-trip` | MERGE | `/blog/spiti-valley-road-trip` | Sections of the Spiti road trip page (approaches, circuit, itinerary, cost components, season). |
| `manali-to-spiti-road-trip` | MERGE | `/blog/spiti-valley-road-trip` | Sections of the Spiti road trip page (approaches, circuit, itinerary, cost components, season). |
| `spiti-circuit` | MERGE | `/blog/spiti-valley-road-trip` | Sections of the Spiti road trip page (approaches, circuit, itinerary, cost components, season). |
| `spiti-road-trip-itinerary` | MERGE | `/blog/spiti-valley-road-trip` | Sections of the Spiti road trip page (approaches, circuit, itinerary, cost components, season). |
| `spiti-road-trip-cost` | MERGE | `/blog/spiti-valley-road-trip` | Sections of the Spiti road trip page (approaches, circuit, itinerary, cost components, season). |
| `spiti-road-trip-by-car` | MERGE | `/blog/spiti-valley-road-trip` | Sections of the Spiti road trip page (approaches, circuit, itinerary, cost components, season). |
| `best-time-for-spiti-road-trip` | MERGE | `/blog/spiti-valley-road-trip` | Sections of the Spiti road trip page (approaches, circuit, itinerary, cost components, season). |
| `spiti-road-trip-by-bike` | UPDATE EXISTING | `/blog/spiti-valley-bike-trip` | Adventure cluster's Spiti bike trip owns bike intent. |
| `delhi-to-dharamshala-road-trip` | MERGE | `/blog/road-trips-in-himachal-pradesh` | Route section of the Himachal page; lower route-specific demand. |
| `delhi-to-mussoorie-road-trip` | MERGE | `/blog/road-trips-in-uttarakhand` | Route section of the Uttarakhand page. |
| `delhi-to-nainital-road-trip` | MERGE | `/blog/road-trips-in-uttarakhand` | Route section of the Uttarakhand page. |
| `shimla-manali-road-trip` | UPDATE EXISTING | `/blog/shimla-manali-itinerary` | Hill Station itinerary owns the Shimla–Manali circuit. |
| `rajasthan-road-trip-itinerary` | MERGE | `/blog/rajasthan-road-trip` | Sections of the Rajasthan road trip page (route options, circuits, day plan). |
| `rajasthan-road-trip-route` | MERGE | `/blog/rajasthan-road-trip` | Sections of the Rajasthan road trip page (route options, circuits, day plan). |
| `rajasthan-road-trip-from-delhi` | MERGE | `/blog/rajasthan-road-trip` | Sections of the Rajasthan road trip page (route options, circuits, day plan). |
| `jaipur-jodhpur-jaisalmer-road-trip` | MERGE | `/blog/rajasthan-road-trip` | Sections of the Rajasthan road trip page (route options, circuits, day plan). |
| `delhi-jaipur-jodhpur-jaisalmer-road-trip` | MERGE | `/blog/rajasthan-road-trip` | Sections of the Rajasthan road trip page (route options, circuits, day plan). |
| `jaisalmer-jodhpur-udaipur-road-trip` | MERGE | `/blog/rajasthan-road-trip` | Sections of the Rajasthan road trip page (route options, circuits, day plan). |
| `rajasthan-desert-road-trip` | MERGE | `/blog/rajasthan-road-trip` | Sections of the Rajasthan road trip page (route options, circuits, day plan). |
| `rajasthan-circuit` | MERGE | `/blog/rajasthan-road-trip` | Sections of the Rajasthan road trip page (route options, circuits, day plan). |
| `rajasthan-heritage-road-trip` | UPDATE EXISTING | `/blog/rajasthan-heritage-itinerary` | Heritage cluster's itinerary owns heritage intent; linked both ways. |
| `delhi-to-jaipur-road-trip` | MERGE | `/blog/rajasthan-road-trip` | Transport intent; first leg of the Rajasthan page. |
| `golden-triangle-road-trip` | UPDATE EXISTING | `/blog/golden-triangle-itinerary` | Heritage itinerary owns the Golden Triangle. |
| `karnataka-road-trip` | MERGE | `/blog/south-india-road-trips` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `tamil-nadu-road-trip` | MERGE | `/blog/south-india-road-trips` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `andhra-pradesh-road-trip` | MERGE | `/blog/road-trips-from-hyderabad` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `telangana-road-trip` | MERGE | `/blog/road-trips-from-hyderabad` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `goa-road-trip` | MERGE | `/blog/mumbai-to-goa-road-trip` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `south-india-road-trip-itinerary` | MERGE | `/blog/south-india-road-trips` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `south-india-circuit` | MERGE | `/blog/south-india-road-trips` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `kerala-road-trip-itinerary` | MERGE | `/blog/kerala-road-trip` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `kerala-circuit` | MERGE | `/blog/kerala-road-trip` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `kochi-to-thekkady-road-trip` | MERGE | `/blog/kerala-road-trip` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `kochi-to-wayanad-road-trip` | MERGE | `/blog/kerala-road-trip` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `bengaluru-to-chikmagalur-road-trip` | MERGE | `/blog/road-trips-from-bengaluru` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `bengaluru-to-wayanad-road-trip` | MERGE | `/blog/road-trips-from-bengaluru` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `chennai-to-ooty-road-trip` | MERGE | `/blog/road-trips-from-chennai` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `chennai-to-kodaikanal-road-trip` | MERGE | `/blog/road-trips-from-chennai` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `hyderabad-to-goa-road-trip` | MERGE | `/blog/road-trips-from-hyderabad` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `hyderabad-to-hampi-road-trip` | MERGE | `/blog/road-trips-from-hyderabad` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `hyderabad-to-araku-road-trip` | MERGE | `/blog/road-trips-from-hyderabad` | Section of the parent page; route-specific demand too thin or overlapping for a standalone URL. |
| `maharashtra-western-ghats-road-trips` | MERGE | `/blog/western-ghats-road-trips` | Sections of the Western Ghats page (by state and theme). |
| `karnataka-western-ghats-road-trips` | MERGE | `/blog/western-ghats-road-trips` | Sections of the Western Ghats page (by state and theme). |
| `kerala-western-ghats-road-trips` | MERGE | `/blog/western-ghats-road-trips` | Sections of the Western Ghats page (by state and theme). |
| `goa-western-ghats-road-trips` | MERGE | `/blog/western-ghats-road-trips` | Sections of the Western Ghats page (by state and theme). |
| `waterfall-road-trips` | MERGE | `/blog/western-ghats-road-trips` | Sections of the Western Ghats page (by state and theme). |
| `hill-station-road-trips` | MERGE | `/blog/western-ghats-road-trips` | Sections of the Western Ghats page (by state and theme). |
| `forest-drives` | MERGE | `/blog/western-ghats-road-trips` | Sections of the Western Ghats page (by state and theme). |
| `konkan-coastal-road-trip` | MERGE | `/blog/coastal-road-trips-in-india` | Sections of the coastal page; beaches stay with the Beach cluster. |
| `kerala-coastal-road-trip` | MERGE | `/blog/coastal-road-trips-in-india` | Sections of the coastal page; beaches stay with the Beach cluster. |
| `goa-coastal-road-trip` | MERGE | `/blog/coastal-road-trips-in-india` | Sections of the coastal page; beaches stay with the Beach cluster. |
| `karnataka-coastal-road-trip` | MERGE | `/blog/coastal-road-trips-in-india` | Sections of the coastal page; beaches stay with the Beach cluster. |
| `tamil-nadu-coastal-road-trip` | MERGE | `/blog/coastal-road-trips-in-india` | Sections of the coastal page; beaches stay with the Beach cluster. |
| `odisha-coastal-road-trip` | MERGE | `/blog/coastal-road-trips-in-india` | Sections of the coastal page; beaches stay with the Beach cluster. |
| `gujarat-coastal-road-trip` | MERGE | `/blog/coastal-road-trips-in-india` | Sections of the coastal page; beaches stay with the Beach cluster. |
| `maharashtra-road-trip` | MERGE | `/blog/road-trips-from-mumbai` | Covered by Mumbai/Pune origin page and Western Ghats page. |
| `gujarat-road-trip` | MERGE | `/blog/winter-road-trips-in-india` | Kutch and Saurashtra covered by the winter and coastal pages. |
| `meghalaya-road-trip` | UPDATE EXISTING | `/blog/meghalaya-nature-itinerary` | Short or low-demand route; covered as a section of the parent page or the existing itinerary. |
| `assam-road-trip` | MERGE | `/blog/northeast-india-road-trips` | Short or low-demand route; covered as a section of the parent page or the existing itinerary. |
| `nagaland-road-trip` | MERGE | `/blog/northeast-india-road-trips` | Short or low-demand route; covered as a section of the parent page or the existing itinerary. |
| `guwahati-to-shillong-road-trip` | MERGE | `/blog/northeast-india-road-trips` | Short or low-demand route; covered as a section of the parent page or the existing itinerary. |
| `guwahati-to-cherrapunji-road-trip` | UPDATE EXISTING | `/blog/meghalaya-nature-itinerary` | Short or low-demand route; covered as a section of the parent page or the existing itinerary. |
| `guwahati-to-kaziranga-road-trip` | MERGE | `/blog/northeast-india-road-trips` | Short or low-demand route; covered as a section of the parent page or the existing itinerary. |
| `guwahati-to-ziro-road-trip` | MERGE | `/blog/northeast-india-road-trips` | Short or low-demand route; covered as a section of the parent page or the existing itinerary. |
| `shillong-to-cherrapunji-road-trip` | UPDATE EXISTING | `/blog/meghalaya-nature-itinerary` | Short or low-demand route; covered as a section of the parent page or the existing itinerary. |
| `northeast-circuit` | MERGE | `/blog/northeast-india-road-trips` | Short or low-demand route; covered as a section of the parent page or the existing itinerary. |
| `road-trips-from-pune` | MERGE | `/blog/road-trips-from-mumbai` | Merged with Mumbai: same Sahyadri and Konkan destinations. |
| `road-trips-from-ahmedabad` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Destination set overlaps winter/coastal pages; demand lower. |
| `road-trips-from-jaipur` | MERGE | `/blog/rajasthan-road-trip` | Most drives are Rajasthan-internal; covered by the Rajasthan page. |
| `road-trips-from-chandigarh` | MERGE | `/blog/road-trips-in-himachal-pradesh` | Hill destinations identical to Delhi and Himachal pages. |
| `road-trips-from-lucknow` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Low demand. |
| `road-trips-from-indore` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Low demand; MP covered by heritage and wildlife clusters. |
| `road-trips-from-surat` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Low demand. |
| `road-trips-from-vadodara` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Low demand. |
| `road-trips-from-kochi` | MERGE | `/blog/kerala-road-trip` | Covered by the Kerala road trip page. |
| `weekend-road-trips-in-india` | MERGE | `/road-trips` | National weekend lists are city-specific in practice; hub section links the six city pages. |
| `short-road-trips-in-india` | MERGE | `/road-trips` | Same as weekend. |
| `best-self-drive-trips` | MERGE | `/blog/self-drive-trips-in-india` | Sections of the self-drive page (packing links to the packing page). |
| `self-drive-holidays` | MERGE | `/blog/self-drive-trips-in-india` | Sections of the self-drive page (packing links to the packing page). |
| `self-drive-planning` | MERGE | `/blog/self-drive-trips-in-india` | Sections of the self-drive page (packing links to the packing page). |
| `self-drive-packing` | MERGE | `/blog/self-drive-trips-in-india` | Sections of the self-drive page (packing links to the packing page). |
| `best-self-drive-routes` | MERGE | `/blog/self-drive-trips-in-india` | Sections of the self-drive page (packing links to the packing page). |
| `mountain-self-drive-trips` | MERGE | `/blog/self-drive-trips-in-india` | Sections of the self-drive page (packing links to the packing page). |
| `coastal-self-drive-trips` | MERGE | `/blog/self-drive-trips-in-india` | Sections of the self-drive page (packing links to the packing page). |
| `bike-road-trips-in-india` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns motorcycle intent (one canonical owner). |
| `best-motorcycle-road-trips` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns motorcycle intent (one canonical owner). |
| `himalayan-bike-trips` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns motorcycle intent (one canonical owner). |
| `rajasthan-bike-trips` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns motorcycle intent (one canonical owner). |
| `northeast-bike-trips` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns motorcycle intent (one canonical owner). |
| `south-india-bike-trips` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns motorcycle intent (one canonical owner). |
| `goa-bike-trips` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns motorcycle intent (one canonical owner). |
| `solo-road-trips-in-india` | MERGE | `/blog/how-to-plan-a-road-trip-in-india` | Section of the parent page; advice not distinct enough for its own URL. |
| `road-trips-with-friends` | MERGE | `/blog/best-road-trips-in-india` | Section of the parent page; advice not distinct enough for its own URL. |
| `budget-road-trips-in-india` | MERGE | `/blog/road-trip-cost-in-india` | Section of the parent page; advice not distinct enough for its own URL. |
| `luxury-road-trips-in-india` | MERGE | `/blog/self-drive-trips-in-india` | Section of the parent page; advice not distinct enough for its own URL. |
| `first-time-road-trip-tips` | MERGE | `/blog/how-to-plan-a-road-trip-in-india` | Section of the parent page; advice not distinct enough for its own URL. |
| `road-trips-for-beginners` | MERGE | `/blog/how-to-plan-a-road-trip-in-india` | Section of the parent page; advice not distinct enough for its own URL. |
| `summer-road-trips-in-india` | UPDATE EXISTING | `/blog/mountain-road-trips-in-india` | Summer drives are Himalayan; Hill Station cluster's mountain road trips page plus the Himachal, Uttarakhand, Spiti and Ladakh route pages. |
| `road-trips-in-december` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Monthly pages would be thin; season table in the best road trips page. |
| `road-trips-in-may` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Monthly pages would be thin; season table in the best road trips page. |
| `road-trips-in-july` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Monthly pages would be thin; season table in the best road trips page. |
| `nature-road-trips-in-india` | MERGE | `/blog/western-ghats-road-trips` | Nature drives are covered by the Western Ghats, monsoon and best road trips pages; Nature cluster owns landscapes. |
| `adventure-road-trips-in-india` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns adventure drives and rides; Himalayan route pages cover high passes. |
| `heritage-road-trips-in-india` | MERGE | `/blog/rajasthan-road-trip` | Heritage routes are covered by the Rajasthan page and Heritage cluster itineraries. |
| `road-trip-planning` | MERGE | `/blog/how-to-plan-a-road-trip-in-india` | Sections of the planning page. |
| `how-to-choose-a-road-trip-route` | MERGE | `/blog/how-to-plan-a-road-trip-in-india` | Sections of the planning page. |
| `fuel-stops-planning` | MERGE | `/blog/how-to-plan-a-road-trip-in-india` | Sections of the planning page. |
| `overnight-stops-planning` | MERGE | `/blog/how-to-plan-a-road-trip-in-india` | Sections of the planning page. |
| `how-many-days-road-trip` | MERGE | `/blog/how-to-plan-a-road-trip-in-india` | Sections of the planning page. |
| `long-road-trip-tips` | MERGE | `/blog/how-to-plan-a-road-trip-in-india` | Sections of the planning page. |
| `road-trip-budget` | MERGE | `/blog/road-trip-cost-in-india` | Sections of the cost page (components, not static prices). |
| `fuel-costs-road-trip` | MERGE | `/blog/road-trip-cost-in-india` | Sections of the cost page (components, not static prices). |
| `toll-costs-india` | MERGE | `/blog/road-trip-cost-in-india` | Sections of the cost page (components, not static prices). |
| `road-trip-accommodation-costs` | MERGE | `/blog/road-trip-cost-in-india` | Sections of the cost page (components, not static prices). |
| `road-trip-food-budget` | MERGE | `/blog/road-trip-cost-in-india` | Sections of the cost page (components, not static prices). |
| `car-rental-costs-india` | MERGE | `/blog/road-trip-cost-in-india` | Sections of the cost page (components, not static prices). |
| `self-drive-costs` | MERGE | `/blog/road-trip-cost-in-india` | Sections of the cost page (components, not static prices). |
| `bike-trip-costs` | MERGE | `/blog/road-trip-cost-in-india` | Sections of the cost page (components, not static prices). |
| `car-road-trip-essentials` | MERGE | `/blog/road-trip-packing-list` | Sections of the packing page. |
| `mountain-road-trip-packing-list` | MERGE | `/blog/road-trip-packing-list` | Sections of the packing page. |
| `family-road-trip-packing-list` | MERGE | `/blog/road-trip-packing-list` | Sections of the packing page. |
| `winter-road-trip-packing-list` | MERGE | `/blog/road-trip-packing-list` | Sections of the packing page. |
| `monsoon-road-trip-packing-list` | MERGE | `/blog/road-trip-packing-list` | Sections of the packing page. |
| `bike-road-trip-packing-list` | UPDATE EXISTING | `/blog/best-motorcycle-trips-in-india` | Adventure cluster owns riding gear; packing page has a short section. |
| `mountain-road-trip-safety` | MERGE | `/blog/road-trip-safety-in-india` | Sections of the safety page. |
| `monsoon-road-trip-considerations` | MERGE | `/blog/road-trip-safety-in-india` | Sections of the safety page. |
| `responsible-road-travel` | MERGE | `/blog/road-trip-safety-in-india` | Sections of the safety page. |
| `eco-friendly-road-trips` | MERGE | `/blog/road-trip-safety-in-india` | Sections of the safety page. |
| `respecting-local-communities` | MERGE | `/blog/road-trip-safety-in-india` | Sections of the safety page. |
| `reducing-waste-road-trips` | MERGE | `/blog/road-trip-safety-in-india` | Sections of the safety page. |
| `2-day-road-trip-itinerary` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Generic duration pages would be doorway-like; duration tables live in the best, city-origin and route pages. |
| `3-day-road-trip-itinerary` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Generic duration pages would be doorway-like; duration tables live in the best, city-origin and route pages. |
| `5-day-road-trip-itinerary` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Generic duration pages would be doorway-like; duration tables live in the best, city-origin and route pages. |
| `7-day-road-trip-itinerary` | DO NOT CREATE | `/blog/best-road-trips-in-india` | Generic duration pages would be doorway-like; duration tables live in the best, city-origin and route pages. |
| `himachal-road-trip-itinerary` | MERGE | `/blog/road-trips-in-himachal-pradesh` | Itinerary section of the parent page or an existing itinerary. |
| `uttarakhand-road-trip-itinerary` | MERGE | `/blog/road-trips-in-uttarakhand` | Itinerary section of the parent page or an existing itinerary. |
| `sikkim-road-trip-itinerary` | UPDATE EXISTING | `/blog/darjeeling-sikkim-itinerary` | Itinerary section of the parent page or an existing itinerary. |
| `meghalaya-road-trip-itinerary` | UPDATE EXISTING | `/blog/meghalaya-nature-itinerary` | Itinerary section of the parent page or an existing itinerary. |
| `northeast-road-trip-itinerary` | MERGE | `/blog/northeast-india-road-trips` | Itinerary section of the parent page or an existing itinerary. |
| `road-trip-packages-in-india` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `custom-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `self-drive-holiday-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `himalayan-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `rajasthan-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `kerala-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `northeast-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `ladakh-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `spiti-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `family-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `couple-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
| `luxury-road-trip-packages` | UPDATE EXISTING | `/packages/road-trip-holidays` | One commercial travel-style page (no prices); state packages carry state-level intent. |
