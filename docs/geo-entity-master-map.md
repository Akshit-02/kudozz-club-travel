# GEO Entity Master Map (2026-10-09)

How Kudozz Club makes entities and their relationships explicit for search engines and AI systems. Cluster-level maps: `*-geo-entity-map.md`, `things-to-do-geo-map.md`.

## Organisation entity

```
Kudozz Club  (Organization, @id https://club.kudozz.in/#organization)
  ├─ is: India-focused travel agency that plans customized trips; publishes India travel guides
  ├─ areaServed: India (36 states and union territories)
  ├─ offers: India tour packages → 36 state/UT packages, 4 circuits, 13 travel styles (Service + OfferCatalog on /best-travel-agency-in-india)
  ├─ contactPoint: reservations, connect@kudozz.in, /plan-your-trip
  ├─ publishingPrinciples: /editorial-policy
  ├─ sameAs: instagram.com/kudozz.in (only verified profile)
  └─ publisher + author of every BlogPosting (by @id, unified this pass)
```

Not asserted, because unverified: address, phone, founding date, team, ratings, registrations (`human-input-required.md` §3). These are the largest remaining entity gaps.

## Geographic hierarchy (one source of truth: `all-states-data.ts` + `state-hub-children.json`)

```
India (Country)
  → Region (6: North, Northeast, East, Central, West, South)     /destinations sections
    → State / UT (36)          hub guide /blog/{state}-travel-guide + /packages/{state}
      → City / town / area      /blog/{place}-travel-guide       (TouristDestination, containedInPlace State → Country)
        → Attraction            monument pages / attraction guides (TouristAttraction)
        → Things to do          /blog/things-to-do-in-{place}    (ItemList of experiences)
        → Itinerary / route     itinerary & road-trip pages
        → Package               /packages/{state} or circuit package
        → Plan My Trip
```

Expressed through: the breadcrumb (visible and BreadcrumbList, identical), `about`/`containedInPlace` schema, the "{Place}, {State}, India" byline on things-to-do pages, sibling links in `RelatedPosts`, and `/destinations` region sections.

## Travel-style and activity entities

| Style (package) | Category hub | Example cluster entities |
|---|---|---|
| adventure-tours | /adventure-travel | river rafting, paragliding, scuba diving, trekking, skiing → Rishikesh, Bir Billing, Andaman, Ladakh, Gulmarg |
| wildlife-tours | /wildlife-tourism | tiger reserves (Ranthambore, Kanha, Bandhavgarh, Corbett), Kaziranga rhinos, Gir lions |
| spiritual-tours | /spiritual-tourism | Jyotirlingas, Char Dham, Shakti Peethas, Buddhist Circuit, Panj Takht, Jain tirthas |
| heritage-tours | /heritage-cultural-tourism | 45 UNESCO sites, forts, palaces, rock-cut caves |
| hill-station-holidays | /hill-station-travel | Shimla, Manali, Darjeeling, Ooty, Munnar |
| nature-holidays | /nature-travel | Western Ghats, root bridges, Valley of Flowers |
| road-trip-holidays | /road-trips | Manali–Leh, Spiti circuit, Mumbai–Goa |
| beach (state packages) | /beach-travel | Goa, Andaman, Kerala coast |

## State / UT entity table

| Region | State / UT | Hub guide | Package | Place guides |
|---|---|---|---|---|
| Central India | Chhattisgarh | /blog/chhattisgarh-travel-guide | /packages/chhattisgarh | 15 |
| Central India | Madhya Pradesh | /blog/madhya-pradesh-travel-guide | /packages/madhya-pradesh | 17 |
| East India | Bihar | /blog/bihar-travel-guide | /packages/bihar | 12 |
| East India | Jharkhand | /blog/jharkhand-travel-guide | /packages/jharkhand | 14 |
| East India | Odisha | /blog/odisha-travel-guide | /packages/odisha | 15 |
| East India | West Bengal | /blog/west-bengal-travel-guide | /packages/west-bengal | 20 |
| North India | Chandigarh | /blog/chandigarh-travel-guide | /packages/chandigarh | 18 |
| North India | Delhi | /blog/delhi-travel-guide | /packages/delhi | 24 |
| North India | Haryana | /blog/haryana-travel-guide | /packages/haryana | 14 |
| North India | Himachal Pradesh | /blog/himachal-pradesh-travel-guide | /packages/himachal-pradesh | 15 |
| North India | Jammu & Kashmir | /blog/jammu-kashmir-travel-guide | /packages/kashmir | 12 |
| North India | Ladakh | /blog/leh-ladakh-road-trip-travel-guide | /packages/leh-ladakh | 16 |
| North India | Punjab | /blog/punjab-travel-guide | /packages/punjab | 14 |
| North India | Rajasthan | /blog/rajasthan-travel-guide | /packages/rajasthan | 19 |
| North India | Uttar Pradesh | /blog/uttar-pradesh-travel-guide | /packages/uttar-pradesh | 20 |
| North India | Uttarakhand | /blog/uttarakhand-travel-guide | /packages/uttarakhand | 22 |
| Northeast India | Arunachal Pradesh | /blog/arunachal-pradesh-travel-guide | /packages/arunachal-pradesh | 14 |
| Northeast India | Assam | /blog/assam-travel-guide | /packages/assam | 15 |
| Northeast India | Manipur | /blog/manipur-travel-guide | /packages/manipur | 13 |
| Northeast India | Meghalaya | /blog/meghalaya-travel-guide | /packages/meghalaya | 14 |
| Northeast India | Mizoram | /blog/mizoram-travel-guide | /packages/mizoram | 12 |
| Northeast India | Nagaland | /blog/nagaland-travel-guide | /packages/nagaland | 14 |
| Northeast India | Sikkim | /blog/sikkim-travel-guide | /packages/sikkim | 16 |
| Northeast India | Tripura | /blog/tripura-travel-guide | /packages/tripura | 13 |
| South India | Andaman & Nicobar Islands | /blog/andaman-islands-travel-guide | /packages/andaman-nicobar | 18 |
| South India | Andhra Pradesh | /blog/andhra-pradesh-travel-guide | /packages/andhra-pradesh | 14 |
| South India | Karnataka | /blog/karnataka-travel-guide | /packages/karnataka | 15 |
| South India | Kerala | /blog/kerala-backwaters-travel-guide | /packages/kerala | 15 |
| South India | Lakshadweep | /blog/lakshadweep-island-travel-guide | /packages/lakshadweep | 2 |
| South India | Puducherry | /blog/puducherry-district-travel-guide | /packages/puducherry | 4 |
| South India | Tamil Nadu | /blog/tamil-nadu-travel-guide | /packages/tamil-nadu | 20 |
| South India | Telangana | /blog/telangana-travel-guide | /packages/telangana | 16 |
| West India | Dadra and Nagar Haveli and Daman and Diu | /blog/dadra-nagar-haveli-daman-diu-travel-guide | /packages/dadra-nagar-haveli-daman-diu | 18 |
| West India | Goa | /blog/goa-beaches-travel-guide | /packages/goa | 15 |
| West India | Gujarat | /blog/gujarat-travel-guide | /packages/gujarat | 15 |
| West India | Maharashtra | /blog/maharashtra-travel-guide | /packages/maharashtra | 16 |

## Consistency rules (enforced this pass)
- One spelling per entity: Visva-Bharati, INS Kursura, Sri Vijaya Puram (Port Blair), Swaraj Dweep (Havelock), Shaheed Dweep (Neil), Chhatrapati Sambhajinagar (Aurangabad), Kartavya Path (not Rajpath).
- Official renames are always given with the familiar name in brackets the first time.
- Disputed claims are attributed ("widely cited as…") rather than asserted.
