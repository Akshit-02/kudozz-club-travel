# Beach Travel: content cluster

Generated 2026-09-25. 23 articles plus the hub are live; 96 candidate topics were merged into an existing or new page and 1 is held for manual review.

## Structure

Beach Travel → Destinations → States → Beaches → Activities → Traveller types → Seasons → Planning → Packages

| Layer | Pages |
| --- | --- |
| Hub | `/beach-travel` |
| Destinations | best-beach-destinations-in-india, best-beaches-in-india, offbeat-beaches-in-india |
| States | 12 state and island beach guides (`best-beaches-in-<state>`) |
| Beaches | Individual beaches are sections of the state pages, which link to the existing beach and destination guides |
| Activities | dolphin-watching-in-india (new); water-sports, scuba-diving, snorkeling, surfing and kayaking pages in the Adventure cluster |
| Traveller types | beach-holidays-in-india (families, luxury, budget, solo, groups), beach-honeymoon-destinations-in-india |
| Seasons | best-time-for-beach-holidays-in-india |
| Planning | beach-trips-in-india (city origins), beach-safety-in-india, beach-tourism-in-india, coastal-tourism-in-india |
| Packages | State packages for every coastal state, plus honeymoon, family, luxury, budget and weekend travel styles |

## Hierarchy

- [Beach Travel in India](/beach-travel) · hub
  - [Beach Holidays in India: How to Choose by Traveller, Budget and Season](/blog/beach-holidays-in-india) · pillar
    - [Beach Honeymoon Destinations in India](/blog/beach-honeymoon-destinations-in-india) · planning
    - [Beach Safety in India: Flags, Rip Currents, Monsoon Rules and Marine Life](/blog/beach-safety-in-india) · planning
    - [Best Time for Beach Holidays in India, Month by Month](/blog/best-time-for-beach-holidays-in-india) · planning
  - [Beach Tourism in India: Blue Flag Beaches, Coastal Rules and Responsible Travel](/blog/beach-tourism-in-india) · pillar
  - [Beach Trips in India: Short Breaks from Mumbai, Bengaluru, Chennai, Kolkata and Delhi](/blog/beach-trips-in-india) · pillar
  - [Best Beach Destinations in India, by Coast and Travel Style](/blog/best-beach-destinations-in-india) · pillar
    - [Best Beaches in the Andaman Islands: Havelock, Neil, Port Blair and Beyond](/blog/best-beaches-in-andaman) · state
    - [Best Beaches in Andhra Pradesh: Visakhapatnam's Coast and Beyond](/blog/best-beaches-in-andhra-pradesh) · state
    - [Best Beaches in Goa: North and South Goa Beach by Beach](/blog/best-beaches-in-goa) · state
    - [Best Beaches in Gujarat: Shivrajpur, Mandvi, Dwarka and the Saurashtra Coast](/blog/best-beaches-in-gujarat) · state
    - [Best Beaches in Karnataka: Gokarna, Udupi, Murudeshwar and Karwar](/blog/best-beaches-in-karnataka) · state
    - [Best Beaches in Kerala: From Varkala and Kovalam to the Malabar Coast](/blog/best-beaches-in-kerala) · state
    - [Best Beaches in Lakshadweep: Islands, Lagoons and Permits](/blog/best-beaches-in-lakshadweep) · state
    - [Best Beaches in Maharashtra: Konkan Coast from Alibaug to Tarkarli](/blog/best-beaches-in-maharashtra) · state
    - [Best Beaches in Odisha: Puri, Chandrabhaga, Gopalpur and Chandipur](/blog/best-beaches-in-odisha) · state
    - [Best Beaches in Puducherry: Paradise, Serenity, Auroville and Rock Beach](/blog/best-beaches-in-puducherry) · state
    - [Best Beaches in Tamil Nadu: Chennai, Mahabalipuram, Rameswaram and Kanyakumari](/blog/best-beaches-in-tamil-nadu) · state
    - [Best Beaches in West Bengal: Digha, Mandarmani, Tajpur and Bakkhali](/blog/best-beaches-in-west-bengal) · state
  - [Best Beaches in India: The Standout Beaches, Coast by Coast](/blog/best-beaches-in-india) · pillar
    - [Offbeat Beaches in India: Quiet Coasts Worth the Detour](/blog/offbeat-beaches-in-india) · planning
  - [Coastal Tourism in India: Backwaters, Lighthouses, Forts and Fishing Villages](/blog/coastal-tourism-in-india) · pillar
    - [Dolphin Watching in India: Where to See Dolphins on the Coast](/blog/dolphin-watching-in-india) · activity

## How it connects to the rest of the site

- The hub links to every beach article, the Adventure cluster's water activities and the beach packages.
- Every article ends with a "Ready for your beach escape?" block following the chain destination guide → things to do → itinerary → package → Plan My Trip.
- `GuideTripCTA` shows "Planning a beach holiday? Explore our guide to …" on 67 existing guides and on their things-to-do articles.
- State package pages show a "Beaches in <state>" block; honeymoon, family, luxury, budget and weekend package pages show a "Beaches for …" block.
- Adventure water pages (water sports, scuba, snorkelling, surfing, kayaking, Goa and Andaman adventure) link back to the beach pages.
- The header ("Beaches") and footer link to the hub; the blog index has a "Beach Travel" category; `llms.txt` lists the cluster.

## Example chains

- `/beach-travel` → `/blog/best-beach-destinations-in-india` → `/blog/best-beaches-in-goa` → `/blog/goa-beaches-travel-guide` → `/blog/things-to-do-in-goa` → `/blog/adventure-activities-in-goa` → `/blog/goa-beaches-travel-guide#itinerary` → `/packages/goa` → `/plan-your-trip`
- `/beach-travel` → `/blog/best-beach-destinations-in-india` → `/blog/best-beaches-in-andaman` → `/blog/andaman-islands-travel-guide` → `/blog/things-to-do-in-andaman` → `/blog/adventure-activities-in-andaman` → `/blog/andaman-islands-travel-guide#itinerary` → `/packages/andaman-nicobar` → `/plan-your-trip`
- `/beach-travel` → `/blog/best-beach-destinations-in-india` → `/blog/best-beaches-in-kerala` → `/blog/things-to-do-in-kerala` → `/blog/things-to-do-in-varkala` → `/blog/varkala-travel-guide` → `/blog/kerala-backwaters-travel-guide#itinerary` → `/packages/kerala` → `/plan-your-trip`
- `/beach-travel` → `/blog/best-beach-destinations-in-india` → `/blog/best-beaches-in-odisha` → `/blog/odisha-travel-guide` → `/blog/things-to-do-in-puri` → `/blog/puri-travel-guide` → `/blog/puri-travel-guide#visit-plan` → `/packages/odisha` → `/plan-your-trip`
