# Wildlife Tourism: cannibalisation audit and decisions

Generated 2026-09-26.

## Intent separation

| Page type | Intent | Example |
| --- | --- | --- |
| Hub (`/wildlife-tourism`) | Wildlife tourism in India overall; navigation | Wildlife Tourism in India |
| Pillar | National comparison of a category | Best National Parks in India |
| Park or reserve guide (existing) | Complete planning for one park, including its safari | Ranthambore travel guide |
| New park page | Same, where no guide existed | Pench Tiger Reserve |
| Species page | Where to see one animal | Where to See One-Horned Rhinos in India |
| State page | All wildlife in one state | Wildlife Tourism in Assam |
| Planning page | How to plan, when to go, what to pack | How to Plan a Wildlife Safari in India |
| Itinerary | Day-by-day plan | The itinerary section of each park guide |
| Package | Commercial | `/packages/wildlife-tours`, state packages |

## Key calls

- **Hub vs pillar.** `/wildlife-tourism` (H1 "Wildlife Tourism in India") carries the pillar content, so `/blog/wildlife-tourism-in-india` was not created.
- **Park safari pages.** "X safari", "X national park" and "X tiger reserve" return the same results as the existing park guides, so those guides keep the intent and no duplicate was created.
- **Itineraries.** Each park guide already has a day-by-day section; the itinerary candidates point to those anchors.
- **Traveller types.** Families, couples, solo, older and luxury travellers are sections of the wildlife safari planning guide; luxury also links to `/packages/luxury-holidays`.
- **Safari types.** Jeep, canter, boat, walking, elephant and night safaris are sections of best wildlife safaris.
- **Goa and Andhra Pradesh.** Too little verified wildlife tourism for full state pages; Goa's sanctuaries are covered in best wildlife sanctuaries, and Nagarjunsagar-Srisailam and Amrabad in best tiger reserves.

## Pairs and merged candidates

| Page A | Page B | Similarity | Different Intent? | Action |
| --- | --- | --- | --- | --- |
| `/wildlife-tourism` | `/blog/best-wildlife-destinations-in-india` | Medium | Yes | Keep both: the hub is navigational and owns “wildlife tourism in India”; the pillar compares destinations by species and season |
| `/blog/tiger-safari-in-india` | `/blog/best-tiger-reserves-in-india` | Medium | Yes | Keep both: the safari page is about doing a tiger safari; the reserves page explains the reserve system and compares reserves |
| `/blog/tiger-safari-in-india` | `/blog/how-to-plan-a-tiger-safari-in-india` | Medium | Yes | Keep both: overview vs booking, zones and cost drivers |
| `/blog/how-to-plan-a-tiger-safari-in-india` | `/blog/how-to-plan-a-wildlife-safari-in-india` | Medium | Yes | Keep both: tiger-reserve specifics vs general planning and traveller types |
| `/blog/best-national-parks-in-india` | `/blog/best-wildlife-sanctuaries-in-india` | Low | Yes | Keep both: separate legal categories; each explains the difference and links to the other |
| `/blog/best-wildlife-destinations-in-india` | `/blog/where-to-see-wildlife-in-india` | Medium | Yes | Keep both: destinations to base a trip vs species-by-species lookup |
| `/blog/best-wildlife-safaris-in-india` | `/blog/tiger-safari-in-india` | Low | Yes | Keep both: safari types vs tiger destinations |
| `/blog/pench-tiger-reserve` | `/blog/wildlife-tourism-in-madhya-pradesh` | Low | Yes | Keep both: one park vs the whole state |
| `/blog/leopard-safari-in-india` | `/blog/jawai-travel-guide` | Medium | Yes | Keep both: national leopard options vs complete Jawai planning; the guide points to the species page |
| `/blog/where-to-see-rhinos-in-india` | `/blog/kaziranga-travel-guide` | Medium | Yes | Keep both: all rhino sites vs complete Kaziranga planning |
| `/blog/snow-leopard-tours-in-india` | `/blog/hemis-travel-guide` | Medium | Yes | Keep both: winter tracking trips vs the Hemis destination guide |
| `/blog/birdwatching-in-india` | `/blog/bharatpur-travel-guide` | Low | Yes | Keep both: national birding vs Keoladeo planning |
| `/blog/wildlife-tourism-in-rajasthan` | `/blog/ranthambore-travel-guide` | Low | Yes | Keep both: state overview vs park guide |
| `wildlife-tourism-in-india` (candidate) | `/wildlife-tourism` | High | No | Merged: Same H1 and intent as the hub; the hub carries the pillar content, quick answer and FAQs. |
| `best-places-to-see-tigers-in-india` (candidate) | `/blog/tiger-safari-in-india` | High | No | Merged: Same SERP as tiger safari in India. |
| `best-tiger-safari-destinations-in-india` (candidate) | `/blog/tiger-safari-in-india` | High | No | Merged: Same intent. |
| `tiger-tourism-in-india` (candidate) | `/blog/tiger-safari-in-india` | High | No | Merged: Thin distinct intent; covered by tiger safari and responsible tourism. |
| `tiger-safari-guide-for-beginners` (candidate) | `/blog/how-to-plan-a-tiger-safari-in-india` | High | No | Merged: Beginner advice is a section of the planning guide. |
| `best-time-for-tiger-safari-in-india` (candidate) | `/blog/best-time-for-wildlife-safari-in-india` | High | No | Merged: Season calendar shared with all wildlife; tiger-specific timing also in tiger-safari-in-india. |
| `tiger-safari-cost-in-india` (candidate) | `/blog/how-to-plan-a-tiger-safari-in-india` | High | No | Merged: Fees change and vary by state; cost factors covered without invented prices. |
| `tiger-safari-booking-guide` (candidate) | `/blog/how-to-plan-a-tiger-safari-in-india` | High | No | Merged: Booking is the core of the planning guide. |
| `ranthambore-tiger-safari` (candidate) | `/blog/ranthambore-travel-guide` | High | No | Merged: The existing guide `ranthambore-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `jim-corbett-tiger-safari` (candidate) | `/blog/jim-corbett-travel-guide` | High | No | Merged: The existing guide `jim-corbett-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `kanha-tiger-safari` (candidate) | `/blog/kanha-travel-guide` | High | No | Merged: The existing guide `kanha-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `bandhavgarh-tiger-safari` (candidate) | `/blog/bandhavgarh-travel-guide` | High | No | Merged: The existing guide `bandhavgarh-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `tadoba-tiger-safari` (candidate) | `/blog/tadoba-travel-guide` | High | No | Merged: The existing guide `tadoba-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `panna-tiger-safari` (candidate) | `/blog/panna-travel-guide` | High | No | Merged: The existing guide `panna-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `dudhwa-tiger-safari` (candidate) | `/blog/dudhwa-travel-guide` | High | No | Merged: The existing guide `dudhwa-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `kaziranga-national-park-or-sanctuary` (candidate) | `/blog/kaziranga-travel-guide` | High | No | Merged: The existing guide `kaziranga-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `gir-national-park-or-sanctuary` (candidate) | `/blog/gir-national-park-travel-guide` | High | No | Merged: The existing guide `gir-national-park-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `sundarbans-national-park-or-sanctuary` (candidate) | `/blog/sundarbans-travel-guide` | High | No | Merged: The existing guide `sundarbans-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `kabini-national-park-or-sanctuary` (candidate) | `/blog/kabini-travel-guide` | High | No | Merged: The existing guide `kabini-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `bandipur-national-park-or-sanctuary` (candidate) | `/blog/bandipur-travel-guide` | High | No | Merged: The existing guide `bandipur-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `periyar-national-park-or-sanctuary` (candidate) | `/blog/thekkady-travel-guide` | High | No | Merged: The existing guide `thekkady-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `manas-national-park-or-sanctuary` (candidate) | `/blog/manas-travel-guide` | High | No | Merged: The existing guide `manas-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `namdapha-national-park-or-sanctuary` (candidate) | `/blog/namdapha-travel-guide` | High | No | Merged: The existing guide `namdapha-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `similipal-national-park-or-sanctuary` (candidate) | `/blog/similipal-travel-guide` | High | No | Merged: The existing guide `similipal-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `bhitarkanika-national-park-or-sanctuary` (candidate) | `/blog/bhitarkanika-travel-guide` | High | No | Merged: The existing guide `bhitarkanika-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `kuno-national-park-or-sanctuary` (candidate) | `/blog/kuno-travel-guide` | High | No | Merged: The existing guide `kuno-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `keoladeo-national-park-or-sanctuary` (candidate) | `/blog/bharatpur-travel-guide` | High | No | Merged: The existing guide `bharatpur-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `hemis-national-park-or-sanctuary` (candidate) | `/blog/hemis-travel-guide` | High | No | Merged: The existing guide `hemis-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `valley-of-flowers-national-park-or-sanctuary` (candidate) | `/blog/valley-of-flowers-travel-guide` | High | No | Merged: The existing guide `valley-of-flowers-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `great-himalayan-national-park-national-park-or-sanctuary` (candidate) | `/blog/tirthan-valley-travel-guide` | High | No | Merged: The existing guide `tirthan-valley-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `nagarhole-national-park-or-sanctuary` (candidate) | `/blog/kabini-travel-guide` | High | No | Merged: The existing guide `kabini-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `pobitora-national-park-or-sanctuary` (candidate) | `/blog/pobitora-travel-guide` | High | No | Merged: The existing guide `pobitora-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `wayanad-national-park-or-sanctuary` (candidate) | `/blog/wayanad-travel-guide` | High | No | Merged: The existing guide `wayanad-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `mount-abu-national-park-or-sanctuary` (candidate) | `/blog/mount-abu-travel-guide` | High | No | Merged: The existing guide `mount-abu-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `kumbhalgarh-national-park-or-sanctuary` (candidate) | `/blog/kumbhalgarh-travel-guide` | High | No | Merged: The existing guide `kumbhalgarh-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `sultanpur-national-park-or-sanctuary` (candidate) | `/blog/sultanpur-national-park-travel-guide` | High | No | Merged: The existing guide `sultanpur-national-park-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `nameri-national-park-or-sanctuary` (candidate) | `/blog/nameri-travel-guide` | High | No | Merged: The existing guide `nameri-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `chilika-national-park-or-sanctuary` (candidate) | `/blog/chilika-lake-travel-guide` | High | No | Merged: The existing guide `chilika-lake-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `jawai-national-park-or-sanctuary` (candidate) | `/blog/jawai-travel-guide` | High | No | Merged: The existing guide `jawai-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `cotigao-national-park-or-sanctuary` (candidate) | `/blog/mollem-travel-guide` | High | No | Merged: The existing guide `mollem-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `indian-wild-ass-national-park-or-sanctuary` (candidate) | `/blog/rann-of-kutch-travel-guide` | High | No | Merged: The existing guide `rann-of-kutch-travel-guide` already targets this destination's safari/visit intent (zones, best time, how to reach); a new page would cannibalise it. It now links to the wildlife cluster. |
| `nagarjunsagar-srisailam-tiger-reserve` (candidate) | — | — | — | Manual review: Low tourism infrastructure and limited verifiable safari information; mentioned in best tiger reserves. Manual review. |
| `where-to-see-asiatic-lion-in-india` (candidate) | `/blog/gir-national-park-travel-guide` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-elephant-in-india` (candidate) | `/blog/where-to-see-wildlife-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-sloth-bear-in-india` (candidate) | `/blog/where-to-see-wildlife-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-wild-ass-in-india` (candidate) | `/blog/where-to-see-wildlife-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-crocodile-in-india` (candidate) | `/blog/where-to-see-wildlife-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-dolphin-in-india` (candidate) | `/blog/dolphin-watching-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-whale-in-india` (candidate) | `/blog/where-to-see-wildlife-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-blackbuck-in-india` (candidate) | `/blog/where-to-see-wildlife-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-gaur-in-india` (candidate) | `/blog/where-to-see-wildlife-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-red-panda-in-india` (candidate) | `/blog/where-to-see-wildlife-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-tiger-in-india` (candidate) | `/blog/tiger-safari-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `where-to-see-migratory-birds-in-india` (candidate) | `/blog/birdwatching-in-india` | High | No | Merged: Covered as a species section; standalone demand or distinct content too thin, or an existing page owns it. |
| `best-birdwatching-destinations-in-india` (candidate) | `/blog/birdwatching-in-india` | High | No | Merged: Overlapping SERPs; sections of the birdwatching guide. |
| `best-bird-sanctuaries-in-india` (candidate) | `/blog/birdwatching-in-india` | High | No | Merged: Overlapping SERPs; sections of the birdwatching guide. |
| `birding-tours-in-india` (candidate) | `/blog/birdwatching-in-india` | High | No | Merged: Overlapping SERPs; sections of the birdwatching guide. |
| `bird-photography-in-india` (candidate) | `/blog/birdwatching-in-india` | High | No | Merged: Overlapping SERPs; sections of the birdwatching guide. |
| `migratory-birds-in-india` (candidate) | `/blog/birdwatching-in-india` | High | No | Merged: Overlapping SERPs; sections of the birdwatching guide. |
| `winter-birdwatching-in-india` (candidate) | `/blog/birdwatching-in-india` | High | No | Merged: Overlapping SERPs; sections of the birdwatching guide. |
| `wildlife-tourism-in-andhra-pradesh` (candidate) | `/blog/best-tiger-reserves-in-india` | High | No | Merged: Limited visitor wildlife tourism; Nagarjunsagar-Srisailam covered in tiger reserves list. |
| `wildlife-tourism-in-goa` (candidate) | `/blog/best-wildlife-sanctuaries-in-india` | High | No | Merged: Goa's sanctuaries (Mollem, Cotigao, Netravali, Salim Ali) are covered in sanctuaries and the Mollem guide; a state page would be thin. |
| `jungle-safari-in-india` (candidate) | `/blog/best-wildlife-safaris-in-india` | High | No | Merged: Sections of the safari types page. |
| `jeep-safari-in-india` (candidate) | `/blog/best-wildlife-safaris-in-india` | High | No | Merged: Sections of the safari types page. |
| `canter-safari-in-india` (candidate) | `/blog/best-wildlife-safaris-in-india` | High | No | Merged: Sections of the safari types page. |
| `elephant-safari-in-india` (candidate) | `/blog/best-wildlife-safaris-in-india` | High | No | Merged: Sections of the safari types page. |
| `boat-safari-in-india` (candidate) | `/blog/best-wildlife-safaris-in-india` | High | No | Merged: Sections of the safari types page. |
| `walking-safari-in-india` (candidate) | `/blog/best-wildlife-safaris-in-india` | High | No | Merged: Sections of the safari types page. |
| `safari-zones-in-india` (candidate) | `/blog/best-wildlife-safaris-in-india` | High | No | Merged: Sections of the safari types page. |
| `morning-safari-in-india` (candidate) | `/blog/best-wildlife-safaris-in-india` | High | No | Merged: Sections of the safari types page. |
| `afternoon-safari-in-india` (candidate) | `/blog/best-wildlife-safaris-in-india` | High | No | Merged: Sections of the safari types page. |
| `what-to-wear-on-a-wildlife-safari` (candidate) | `/blog/wildlife-safari-packing-list` | High | No | Merged: Same intent; section of the target. |
| `wildlife-safari-cost-in-india` (candidate) | `/blog/how-to-plan-a-wildlife-safari-in-india` | High | No | Merged: Same intent; section of the target. |
| `wildlife-safari-rules-in-india` (candidate) | `/blog/responsible-wildlife-tourism-in-india` | High | No | Merged: Same intent; section of the target. |
| `wildlife-safari-for-beginners` (candidate) | `/blog/how-to-plan-a-wildlife-safari-in-india` | High | No | Merged: Same intent; section of the target. |
| `wildlife-photography-guide-for-beginners` (candidate) | `/blog/wildlife-photography-in-india` | High | No | Merged: Same intent; section of the target. |
| `wildlife-tourism-ethics` (candidate) | `/blog/responsible-wildlife-tourism-in-india` | High | No | Merged: Same intent; section of the target. |
| `responsible-safari-travel` (candidate) | `/blog/responsible-wildlife-tourism-in-india` | High | No | Merged: Same intent; section of the target. |
| `wildlife-photography-ethics` (candidate) | `/blog/wildlife-photography-in-india` | High | No | Merged: Same intent; section of the target. |
| `wildlife-safari-dos-and-donts` (candidate) | `/blog/responsible-wildlife-tourism-in-india` | High | No | Merged: Same intent; section of the target. |
| `responsible-tiger-tourism` (candidate) | `/blog/responsible-wildlife-tourism-in-india` | High | No | Merged: Same intent; section of the target. |
| `responsible-elephant-tourism` (candidate) | `/blog/responsible-wildlife-tourism-in-india` | High | No | Merged: Same intent; section of the target. |
| `wildlife-conservation-tourism` (candidate) | `/blog/responsible-wildlife-tourism-in-india` | High | No | Merged: Same intent; section of the target. |
| `wildlife-holidays-for-couples` (candidate) | `/blog/how-to-plan-a-wildlife-safari-in-india` | High | No | Merged: Traveller-type sections; near-identical standalone pages avoided. |
| `wildlife-honeymoon` (candidate) | `/blog/how-to-plan-a-wildlife-safari-in-india` | High | No | Merged: Traveller-type sections; near-identical standalone pages avoided. |
| `family-wildlife-holidays` (candidate) | `/blog/how-to-plan-a-wildlife-safari-in-india` | High | No | Merged: Traveller-type sections; near-identical standalone pages avoided. |
| `luxury-wildlife-holidays` (candidate) | `/packages/luxury-holidays` | High | No | Merged: Traveller-type sections; near-identical standalone pages avoided. |
| `budget-wildlife-trips` (candidate) | `/blog/how-to-plan-a-wildlife-safari-in-india` | High | No | Merged: Traveller-type sections; near-identical standalone pages avoided. |
| `solo-wildlife-travel` (candidate) | `/blog/how-to-plan-a-wildlife-safari-in-india` | High | No | Merged: Traveller-type sections; near-identical standalone pages avoided. |
| `wildlife-photography-trips` (candidate) | `/blog/wildlife-photography-in-india` | High | No | Merged: Traveller-type sections; near-identical standalone pages avoided. |
| `wildlife-trips-for-beginners` (candidate) | `/blog/how-to-plan-a-wildlife-safari-in-india` | High | No | Merged: Traveller-type sections; near-identical standalone pages avoided. |
| `weekend-wildlife-trips` (candidate) | `/blog/best-wildlife-destinations-in-india` | High | No | Merged: Traveller-type sections; near-identical standalone pages avoided. |
| `ranthambore-itinerary` (candidate) | `/blog/ranthambore-travel-guide#visit-plan` | High | No | Merged: The existing destination guide carries the day-by-day plan; a separate itinerary page would duplicate it. |
| `jim-corbett-itinerary` (candidate) | `/blog/jim-corbett-travel-guide#visit-plan` | High | No | Merged: The existing destination guide carries the day-by-day plan; a separate itinerary page would duplicate it. |
| `kanha-itinerary` (candidate) | `/blog/kanha-travel-guide#itinerary` | High | No | Merged: The existing destination guide carries the day-by-day plan; a separate itinerary page would duplicate it. |
| `bandhavgarh-itinerary` (candidate) | `/blog/bandhavgarh-travel-guide#itinerary` | High | No | Merged: The existing destination guide carries the day-by-day plan; a separate itinerary page would duplicate it. |
| `tadoba-itinerary` (candidate) | `/blog/tadoba-travel-guide#itinerary` | High | No | Merged: The existing destination guide carries the day-by-day plan; a separate itinerary page would duplicate it. |
| `kaziranga-itinerary` (candidate) | `/blog/kaziranga-travel-guide#itinerary` | High | No | Merged: The existing destination guide carries the day-by-day plan; a separate itinerary page would duplicate it. |
| `gir-itinerary` (candidate) | `/blog/gir-national-park-travel-guide#itinerary` | High | No | Merged: The existing destination guide carries the day-by-day plan; a separate itinerary page would duplicate it. |
| `kabini-itinerary` (candidate) | `/blog/kabini-travel-guide#itinerary` | High | No | Merged: The existing destination guide carries the day-by-day plan; a separate itinerary page would duplicate it. |
