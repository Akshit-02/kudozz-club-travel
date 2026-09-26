# Adventure Travel: cannibalisation audit and decisions

Generated 2026-09-25.

## Audit method

Before creating anything we compared every candidate topic in the brief with the existing site: 582 destination guides (62 already in the "Adventure" blog category), 143 things-to-do articles, the `/packages/adventure-tours` travel-style page and 48 package pages. We checked titles, H1s and section headings for each overlapping page, and used current search results (September 2026) to judge whether two queries return the same kind of page. Where they do, one page owns the intent and the other is folded into it.

## Intent separation rules used

| Page type | Intent | Example |
| --- | --- | --- |
| Hub (`/adventure-travel`) | Browse all adventure; owns "adventure travel/tourism in India" | Adventure Travel in India |
| Activity pillar | One activity across India | River Rafting in India |
| Activity at a place | One activity at one place, where no guide already owns it | River Rafting in Rishikesh |
| Destination adventure hub | All adventure activities in one state or town | Adventure Activities in Manali |
| Things to do | All experiences in a place (sights, food, culture, some activities) | Things to Do in Manali |
| Destination guide | Full trip planning for a place | Manali Travel Guide |
| Package page | Commercial intent | Himachal Pradesh Tour Packages, Adventure Trips |

## Candidate topics not created

| Candidate | Decision | Now served by | Reason |
| --- | --- | --- | --- |
| `adventure-travel-in-india` | Merged | `/adventure-travel` | Same H1 and intent as the category hub required by the brief; one page ranks, so the hub carries the pillar copy. |
| `adventure-tourism-in-india` | Merged | `/adventure-travel` | SERP for 'adventure tourism in India' and 'adventure travel in India' returns the same pages (listicles and operator hubs). Covered by the hub. |
| `adventure-trips-in-india` | Merged | `/packages/adventure-tours` | Transactional 'trips/tours' intent already served by the Adventure Trips package page; an article would compete with it. |
| `best-treks-in-india` | Merged | `/blog/trekking-in-india` | SERP overlap: 'trekking in India' and 'best treks in India' return the same listicles. |
| `himalayan-treks-in-india` | Merged | `/blog/trekking-in-india` | Most treks in the parent are Himalayan; a separate page would duplicate its list. |
| `high-altitude-treks-in-india` | Merged | `/blog/trekking-in-india` | Covered as the 'Challenging and high-altitude treks' section, with AMS guidance. |
| `best-places-for-river-rafting-in-india` | Merged | `/blog/river-rafting-in-india` | Identical intent; merged. |
| `best-places-for-paragliding-in-india` | Merged | `/blog/paragliding-in-india` | Identical intent. |
| `paragliding-in-bir-billing` | Merged | `/blog/bir-billing-travel-guide` | The Bir Billing guide is titled 'Paragliding Capital of India' and already targets this query; a new page would cannibalise it. paragliding-in-india carries a Bir section that links to the guide. |
| `best-places-for-scuba-diving-in-india` | Merged | `/blog/scuba-diving-in-india` | Identical intent. |
| `scuba-diving-in-lakshadweep` | Merged | `/blog/scuba-diving-in-india` | Lakshadweep guide already covers permits and diving; low standalone depth without verified operator detail. Section in scuba-diving-in-india. |
| `best-places-for-skiing-in-india` | Merged | `/blog/skiing-in-india` | Identical intent; India has only a handful of ski areas. |
| `skiing-in-gulmarg` | Merged | `/blog/gulmarg-travel-guide` | Gulmarg guide ('Gondola, Skiing & Meadows') already owns this query with a full skiing section. |
| `skiing-in-auli` | Merged | `/blog/auli-travel-guide` | Auli guide ('Skiing, Cable Car & Best Time') already owns this query; the ropeway closure makes a standalone page thin. |
| `bungee-jumping-in-rishikesh` | Merged | `/blog/bungee-jumping-in-india` | Rishikesh is the main fixed-platform site, so the India page is mostly about it; two pages would share their content and SERP. |
| `skydiving-and-parachuting-in-india` | Merged | `/blog/skydiving-in-india` | No distinct intent: parachuting searches return skydiving pages. Static-line jumps covered as a section. |
| `ladakh-bike-trip` | Merged | `/blog/leh-ladakh-road-trip-travel-guide` | The Leh Ladakh road trip guide covers bike vs car, routes, permits and passes. best-motorcycle-trips-in-india links to it for Ladakh. |
| `best-camping-destinations-in-india` | Merged | `/blog/camping-in-india` | Identical intent. |
| `best-water-sports-destinations-in-india` | Merged | `/blog/water-sports-in-india` | Identical intent. |
| `adventure-water-sports-in-goa` | Merged | `/blog/adventure-activities-in-goa` | Goa's adventure activities are mostly water sports; one Goa page avoids splitting the same list. |
| `ziplining-in-india` | Merged | `/blog/adventure-sports-in-india` | Low, fragmented demand and few verifiable fixed sites; covered as a section. |
| `atv-rides-in-india` | Merged | `/blog/adventure-sports-in-india` | Mostly add-ons at resorts and valleys (Solang, Gulmarg, beaches); covered as a section. |
| `camel-safari-in-rajasthan` | Merged | `/blog/desert-adventures-in-india` | Overlaps the Rajasthan desert, Jaisalmer and Bikaner guides; covered as a section of desert-adventures-in-india. |
| `jeep-safari-in-india` | Merged | `existing national park guides` | Ambiguous intent (wildlife vs desert jeep safaris); wildlife safaris are covered by 40+ national park guides and desert jeep safaris by desert-adventures-in-india. |
| `adventure-activities-in-rishikesh` | Merged | `/blog/rishikesh-adventure-travel-guide` | The existing Rishikesh adventure guide and things-to-do-in-rishikesh already own this; river-rafting-in-rishikesh and bungee-jumping-in-india cover the activity depth. |
| `adventure-travel-for-couples-in-india` | Merged | `/blog/best-adventure-destinations-in-india` | Thin standalone demand; covered by a 'by traveller type' section and the honeymoon package. |
| `adventure-travel-for-families-in-india` | Merged | `/blog/how-to-plan-an-adventure-trip-in-india` | Covered by the family section (age limits, soft adventure) of the planning guide. |
| `budget-adventure-travel-in-india` | Merged | `/blog/how-to-plan-an-adventure-trip-in-india` | Needs verified prices to stand alone; budget levers covered in the planning guide. |
| `adventure-trips-for-groups-in-india` | Merged | `/packages/group-tours` | Transactional; the Group Tours package page owns it. Group tips in the planning guide. |
| `solo-adventure-travel-in-india` | Merged | `/blog/how-to-plan-an-adventure-trip-in-india` | Covered by the solo section of the planning guide. |
| `weekend-adventure-trips-from-pune` | Merged | `/blog/weekend-adventure-trips-from-mumbai` | Same destinations as Mumbai (Kamshet, Kolad, Sahyadri forts). |
| `weekend-adventure-trips-from-hyderabad` | Manual review | — | Too few verifiable adventure options within a weekend's reach to write without padding; manual review. |
| `adventure-trip-cost-in-india` | Merged | `/blog/how-to-plan-an-adventure-trip-in-india` | Brief forbids unverified prices and current prices vary by operator and season; cost factors covered in the planning guide. |

## New pages that overlap existing content, and how they differ

| New page | Overlapping existing pages | How they differ |
| --- | --- | --- |
| `/adventure-travel` | — | Owns 'adventure travel/tourism in India'; replaces the candidate pillar /blog/adventure-travel-in-india |
| `/blog/best-adventure-destinations-in-india` | `/blog/adventure-sports-in-india` | Places (this page) vs activities (adventure-sports-in-india); destination sections link down to the hubs rather than repeating them |
| `/blog/adventure-sports-in-india` | `/blog/best-adventure-destinations-in-india` | Activities (this page) vs places; each activity section is a summary that links to the activity page |
| `/blog/trekking-in-india` | `/blog/mountaineering-in-india` | Owns 'best treks' and 'Himalayan treks'; child pages own beginner, winter and monsoon intent |
| `/blog/beginner-treks-in-india` | `/blog/adventure-travel-for-beginners-in-india` | Distinct from adventure-travel-for-beginners (all activities); this page lists treks only |
| `/blog/monsoon-treks-in-india` | `/blog/weekend-adventure-trips-from-mumbai` | Valley of Flowers guide covers that trek in depth; this page summarises and links |
| `/blog/river-rafting-in-rishikesh` | `/blog/rishikesh-adventure-travel-guide`, `/blog/things-to-do-in-rishikesh` | rishikesh-adventure-travel-guide covers the whole trip (yoga, cafes, stays) with a short adventure section; this page is rafting-only and the guide links here |
| `/blog/scuba-diving-in-andaman` | `/blog/havelock-island-andaman-travel-guide` | Havelock guide covers Havelock only; this page covers all Andaman dive areas and links to island guides |
| `/blog/spiti-valley-bike-trip` | `/blog/spiti-valley-travel-guide` | Spiti guide is a general travel guide with almost no riding content; this page is ride-specific and links to it |
| `/blog/desert-adventures-in-india` | `/blog/rajasthan-desert-travel-guide`, `/blog/rann-of-kutch-travel-guide`, `/blog/nubra-valley-travel-guide` | rajasthan-desert and Jaisalmer guides cover sightseeing; this page covers the activities across all Indian deserts |
| `/blog/adventure-activities-in-manali` | `/blog/things-to-do-in-manali`, `/blog/manali-travel-guide` | things-to-do and travel guides cover all sightseeing; this page covers adventure activities only and links to them |
| `/blog/adventure-activities-in-ladakh` | `/blog/leh-ladakh-road-trip-travel-guide`, `/blog/leh-travel-guide` | things-to-do and travel guides cover all sightseeing; this page covers adventure activities only and links to them |
| `/blog/adventure-activities-in-himachal-pradesh` | `/blog/himachal-pradesh-travel-guide` | things-to-do and travel guides cover all sightseeing; this page covers adventure activities only and links to them |
| `/blog/adventure-activities-in-uttarakhand` | `/blog/uttarakhand-travel-guide` | things-to-do and travel guides cover all sightseeing; this page covers adventure activities only and links to them |
| `/blog/adventure-activities-in-goa` | `/blog/goa-beaches-travel-guide`, `/blog/things-to-do-in-goa` | things-to-do and travel guides cover all sightseeing; this page covers adventure activities only and links to them |
| `/blog/adventure-activities-in-andaman` | `/blog/andaman-islands-travel-guide` | things-to-do and travel guides cover all sightseeing; this page covers adventure activities only and links to them |
| `/blog/adventure-activities-in-sikkim` | `/blog/sikkim-travel-guide` | things-to-do and travel guides cover all sightseeing; this page covers adventure activities only and links to them |
| `/blog/adventure-activities-in-meghalaya` | `/blog/meghalaya-travel-guide` | things-to-do and travel guides cover all sightseeing; this page covers adventure activities only and links to them |
| `/blog/weekend-adventure-trips-from-mumbai` | — | Pune merged in: same Sahyadri destinations (Kamshet, Kolad, Rajmachi) within a few hours of both cities |
| `/blog/adventure-travel-for-beginners-in-india` | `/blog/beginner-treks-in-india` | Covers all activities for beginners; beginner-treks-in-india owns treks |

## Key calls

- **Hub vs pillar.** The brief proposed both `/adventure-travel` (H1 "Adventure Travel in India") and `/blog/adventure-travel-in-india`. Two pages with the same H1 and intent would compete, so the hub carries the pillar copy (quick answer, overview, FAQs with `FAQPage` schema) and the blog pillar was not created.
- **Bir Billing, Gulmarg, Auli.** Their existing guides are titled around paragliding and skiing and already rank for those intents. Activity pillars (`paragliding-in-india`, `skiing-in-india`) link to them instead of new place-activity pages.
- **Rishikesh.** `rishikesh-adventure-travel-guide` and `things-to-do-in-rishikesh` already cover "adventure activities in Rishikesh". Only the rafting-specific page was created, because none of the existing pages covers stretches, grades, season and operator checks in depth.
- **Ladakh bike trip.** The Leh Ladakh road trip guide covers bike vs car, routes and permits; `best-motorcycle-trips-in-india` links to it. The Spiti guide has almost no riding content, so `spiti-valley-bike-trip` was created.
- **Costs.** `adventure-trip-cost-in-india` was not created because current prices vary by operator and season and could not be verified; cost drivers are covered in the planning guide without invented numbers.
