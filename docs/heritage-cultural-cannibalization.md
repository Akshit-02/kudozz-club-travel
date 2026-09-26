# Heritage & Cultural Tourism: cannibalisation control

Generated 2026-09-26. Decisions use the brief's vocabulary: **KEEP** (a separate page with a distinct intent), **MERGE** (served by an approved cluster page or section), **UPDATE EXISTING** (an existing guide stays canonical and gets a cluster pointer), **REDIRECT** and **DO NOT CREATE**.

Totals: KEEP 53, MERGE 143, UPDATE EXISTING 78, DO NOT CREATE 11, REDIRECT 0. **No redirects are required**: no existing URL changed, and no merged candidate URL was ever published.

## Explicit comparisons

| Topic comparison | Overlap | Decision | Action |
| --- | --- | --- | --- |
| Heritage tourism vs cultural tourism vs heritage travel | Same result set | **MERGE** | All served by `/heritage-cultural-tourism` |
| Historical places vs heritage destinations vs Indian heritage sites | Same listicle intent | **MERGE** | `/blog/historical-places-in-india` |
| UNESCO sites in India vs historical places | Official list vs curated places | **KEEP** | Each links to the other |
| Monument pages (Taj Mahal, Red Fort, Qutub Minar, Humayun's Tomb, Amber, Mehrangarh) vs city guides | Site visit planning vs the whole city | **KEEP** | Monument pages focus on the site; city guides get a pointer and link back |
| Famous forts vs forts of Rajasthan vs forts in Maharashtra | All-India list vs two regional groups with UNESCO status | **KEEP** | Regional pages are children of the forts pillar |
| Palaces in India vs palace hotels / luxury stays | Visiting palaces vs staying in them | **KEEP** | Palace page explains the difference and hands off to `/packages/luxury-holidays` |
| Archaeological sites vs rock-cut caves vs UNESCO list | Excavated sites vs carved monuments vs official list | **KEEP** | Cross-linked; each site has one canonical guide |
| Temple architecture vs famous temples (spiritual cluster) | Architecture for travellers vs worship and pilgrimage | **KEEP** | Linked both ways |
| Heritage cities vs heritage walks | Cities to visit vs how to explore on foot | **KEEP** | Walks page links to city guides and things-to-do articles |
| Heritage walk in <city> / heritage of <city> | Served by existing guides and things-to-do articles | **UPDATE EXISTING** | City guides get a pointer; no city pages created |
| Handicrafts vs textile heritage | All crafts vs weaves and embroidery | **KEEP** | Textiles is a child of handicrafts |
| Individual crafts, dances, festivals | Section-level intent | **MERGE** | Sections of the crafts, dance and festivals pillars |
| Cultural festivals vs spiritual festivals | Cultural fairs vs religious festivals and the Kumbh | **KEEP** | Linked both ways; Durga Puja and Navratri described once each |
| Hornbill Festival and Rann Utsav vs cultural festivals | Event planning (permits, stays) vs calendar | **KEEP** | Children of the festivals pillar |
| Year-specific festival pages (e.g. Hornbill 2026) | Would go stale | **DO NOT CREATE** | Evergreen pages with the current season's dates |
| Golden Triangle itinerary vs `/packages/golden-triangle` | Informational plan vs commercial page | **KEEP** | No prices on the itinerary; package gets a heritage block |
| State heritage pages vs state travel guides vs state spiritual pages | Monuments and culture vs general travel vs pilgrimage | **KEEP** | Linked both ways |
| Heritage pages for states with thin demand | Covered elsewhere | **DO NOT CREATE** | Bihar, Andhra Pradesh, Punjab, Haryana, Himachal Pradesh, Goa, Assam, Meghalaya, Sikkim, J&K |
| Cultural heritage of India | Educational intent | **DO NOT CREATE** | Hub and pillars cover the travel intent |
| Traveller-type pages (heritage for families, couples, seniors) | Near-duplicates of the planning guide | **MERGE** | Sections of `/blog/how-to-plan-a-heritage-trip-in-india` |

## Every candidate not created

| Candidate | Decision | Now served by | Reason |
| --- | --- | --- | --- |
| `heritage-tourism-in-india` | MERGE | `/heritage-cultural-tourism` | Same H1 and intent as the hub. |
| `cultural-tourism-in-india` | MERGE | `/heritage-cultural-tourism` | Cultural tourism results mix monuments, festivals, arts and food, exactly the hub's scope; one page avoids splitting it. |
| `heritage-travel-in-india` | MERGE | `/heritage-cultural-tourism` | Same result set as heritage tourism. |
| `best-cultural-destinations-in-india` | MERGE | `/heritage-cultural-tourism` | Listicles overlap the hub's state and city sections. |
| `best-heritage-destinations-in-india` | MERGE | `/blog/historical-places-in-india` | Same listicle intent as historical places. |
| `indian-heritage-sites` | MERGE | `/blog/historical-places-in-india` | Same listicle intent as historical places. |
| `cultural-heritage-of-india` | DO NOT CREATE | `—` | Largely educational (school and exam) intent, not travel; the hub and pillars cover the travel angle. |
| `family-heritage-travel` | MERGE | `/blog/how-to-plan-a-heritage-trip-in-india` | Traveller advice is a section of the planning guide; separate pages would be near-identical. |
| `heritage-travel-for-couples` | MERGE | `/blog/how-to-plan-a-heritage-trip-in-india` | Traveller advice is a section of the planning guide; separate pages would be near-identical. |
| `solo-heritage-travel` | MERGE | `/blog/how-to-plan-a-heritage-trip-in-india` | Traveller advice is a section of the planning guide; separate pages would be near-identical. |
| `luxury-heritage-holidays` | MERGE | `/blog/how-to-plan-a-heritage-trip-in-india` | Traveller advice is a section of the planning guide; separate pages would be near-identical. |
| `budget-heritage-trips` | MERGE | `/blog/how-to-plan-a-heritage-trip-in-india` | Traveller advice is a section of the planning guide; separate pages would be near-identical. |
| `heritage-travel-for-seniors` | MERGE | `/blog/how-to-plan-a-heritage-trip-in-india` | Traveller advice is a section of the planning guide; separate pages would be near-identical. |
| `heritage-photography-trips` | MERGE | `/blog/how-to-plan-a-heritage-trip-in-india` | Traveller advice is a section of the planning guide; separate pages would be near-identical. |
| `unesco-sites-by-state` | MERGE | `/blog/unesco-world-heritage-sites-in-india` | Sections of the UNESCO pillar (by-state table, highlights, planning); the state heritage pages and itineraries carry routes. |
| `best-unesco-sites-to-visit` | MERGE | `/blog/unesco-world-heritage-sites-in-india` | Sections of the UNESCO pillar (by-state table, highlights, planning); the state heritage pages and itineraries carry routes. |
| `unesco-heritage-tours` | MERGE | `/blog/unesco-world-heritage-sites-in-india` | Sections of the UNESCO pillar (by-state table, highlights, planning); the state heritage pages and itineraries carry routes. |
| `unesco-heritage-travel-planning` | MERGE | `/blog/unesco-world-heritage-sites-in-india` | Sections of the UNESCO pillar (by-state table, highlights, planning); the state heritage pages and itineraries carry routes. |
| `unesco-heritage-itineraries` | MERGE | `/blog/unesco-world-heritage-sites-in-india` | Sections of the UNESCO pillar (by-state table, highlights, planning); the state heritage pages and itineraries carry routes. |
| `agra-fort` | UPDATE EXISTING | `/blog/agra-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `fatehpur-sikri` | UPDATE EXISTING | `/blog/fatehpur-sikri-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `jantar-mantar-jaipur` | UPDATE EXISTING | `/blog/jaipur-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `historic-city-of-ahmedabad` | UPDATE EXISTING | `/blog/ahmedabad-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `rani-ki-vav` | UPDATE EXISTING | `/blog/patan-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `dholavira` | UPDATE EXISTING | `/blog/dholavira-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `ajanta-caves` | UPDATE EXISTING | `/blog/ajanta-ellora-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `ellora-caves` | UPDATE EXISTING | `/blog/ajanta-ellora-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `chhatrapati-shivaji-terminus` | UPDATE EXISTING | `/blog/mumbai-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `hampi` | UPDATE EXISTING | `/blog/hampi-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `pattadakal` | UPDATE EXISTING | `/blog/badami-aihole-pattadakal-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `mahabalipuram` | UPDATE EXISTING | `/blog/mahabalipuram-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `great-living-chola-temples` | UPDATE EXISTING | `/blog/thanjavur-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `khajuraho` | UPDATE EXISTING | `/blog/khajuraho-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `sanchi` | UPDATE EXISTING | `/blog/sanchi-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `bhimbetka` | UPDATE EXISTING | `/blog/bhimbetka-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `konark` | UPDATE EXISTING | `/blog/konark-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `mahabodhi-temple` | UPDATE EXISTING | `/blog/bodh-gaya-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `nalanda` | UPDATE EXISTING | `/blog/nalanda-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `kaziranga` | UPDATE EXISTING | `/blog/kaziranga-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `manas` | UPDATE EXISTING | `/blog/manas-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `sundarbans` | UPDATE EXISTING | `/blog/sundarbans-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `ramappa-temple` | UPDATE EXISTING | `/blog/things-to-do-in-warangal` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `santiniketan` | UPDATE EXISTING | `/blog/santiniketan-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `churches-of-goa` | UPDATE EXISTING | `/blog/old-goa-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `sarnath` | UPDATE EXISTING | `/blog/sarnath-travel-guide` | Existing destination guide already covers the site; it gets a pointer into the cluster. |
| `moidams-charaideo` | MERGE | `/blog/unesco-world-heritage-sites-in-india` | Covered in the UNESCO pillar and Ahom heritage (Sivasagar guide). |
| `khangchendzonga` | MERGE | `/blog/unesco-world-heritage-sites-in-india` | Natural and mixed sites are covered in the UNESCO pillar and the wildlife cluster. |
| `nanda-devi-valley-of-flowers` | UPDATE EXISTING | `/blog/valley-of-flowers-travel-guide` | Existing guide. |
| `historical-forts-in-india` | MERGE | `/blog/famous-forts-in-india` | Same result set as famous forts. |
| `fort-tourism-in-india` | MERGE | `/blog/famous-forts-in-india` | Same result set as famous forts. |
| `best-forts-to-visit-in-india` | MERGE | `/blog/famous-forts-in-india` | Same result set as famous forts. |
| `forts-of-gujarat` | MERGE | `/blog/famous-forts-in-india` | Thin standalone demand; covered in the Gujarat heritage page. |
| `forts-of-madhya-pradesh` | MERGE | `/blog/famous-forts-in-india` | Covered in the famous forts pillar and MP heritage page. |
| `forts-of-karnataka` | MERGE | `/blog/famous-forts-in-india` | Covered in the famous forts pillar and Deccan heritage page. |
| `forts-of-delhi` | MERGE | `/blog/famous-forts-in-india` | Covered in the Red Fort page and Delhi heritage page. |
| `forts-of-uttar-pradesh` | MERGE | `/blog/famous-forts-in-india` | Covered in the famous forts pillar and UP heritage page. |
| `chittorgarh-fort` | UPDATE EXISTING | `/blog/chittorgarh-travel-guide` | Existing guide covers the fort. |
| `kumbhalgarh-fort` | UPDATE EXISTING | `/blog/kumbhalgarh-travel-guide` | Existing guide covers the fort. |
| `golconda-fort` | UPDATE EXISTING | `/blog/golconda-fort-travel-guide` | Existing guide covers the fort. |
| `gwalior-fort` | UPDATE EXISTING | `/blog/gwalior-travel-guide` | Existing guide covers the fort. |
| `jaisalmer-fort` | UPDATE EXISTING | `/blog/rajasthan-desert-travel-guide` | Existing guide covers the fort. |
| `palace-tourism` | MERGE | `/blog/palaces-in-india` | Heritage information is a section of the palaces pillar; accommodation intent is handled only as a clearly separated note and via /packages/luxury-holidays. |
| `royal-heritage-india` | MERGE | `/blog/palaces-in-india` | Heritage information is a section of the palaces pillar; accommodation intent is handled only as a clearly separated note and via /packages/luxury-holidays. |
| `royal-rajasthan` | MERGE | `/blog/palaces-in-india` | Heritage information is a section of the palaces pillar; accommodation intent is handled only as a clearly separated note and via /packages/luxury-holidays. |
| `palace-stays` | MERGE | `/blog/palaces-in-india` | Heritage information is a section of the palaces pillar; accommodation intent is handled only as a clearly separated note and via /packages/luxury-holidays. |
| `heritage-hotels-india` | MERGE | `/blog/palaces-in-india` | Heritage information is a section of the palaces pillar; accommodation intent is handled only as a clearly separated note and via /packages/luxury-holidays. |
| `royal-architecture` | MERGE | `/blog/palaces-in-india` | Heritage information is a section of the palaces pillar; accommodation intent is handled only as a clearly separated note and via /packages/luxury-holidays. |
| `city-palace-jaipur` | UPDATE EXISTING | `/blog/jaipur-travel-guide` | The city guide covers the palace; the palaces pillar compares them. |
| `city-palace-udaipur` | UPDATE EXISTING | `/blog/udaipur-city-of-lakes-travel-guide` | The city guide covers the palace; the palaces pillar compares them. |
| `lake-palace-udaipur` | UPDATE EXISTING | `/blog/udaipur-city-of-lakes-travel-guide` | The city guide covers the palace; the palaces pillar compares them. |
| `umaid-bhawan` | UPDATE EXISTING | `/blog/jodhpur-travel-guide` | The city guide covers the palace; the palaces pillar compares them. |
| `mysore-palace` | UPDATE EXISTING | `/blog/mysuru-travel-guide` | The city guide covers the palace; the palaces pillar compares them. |
| `laxmi-vilas-palace` | UPDATE EXISTING | `/blog/things-to-do-in-vadodara` | The city guide covers the palace; the palaces pillar compares them. |
| `hawa-mahal` | UPDATE EXISTING | `/blog/jaipur-travel-guide` | The city guide covers the palace; the palaces pillar compares them. |
| `jal-mahal` | UPDATE EXISTING | `/blog/jaipur-travel-guide` | The city guide covers the palace; the palaces pillar compares them. |
| `falaknuma-palace` | UPDATE EXISTING | `/blog/hyderabad-travel-guide` | The city guide covers the palace; the palaces pillar compares them. |
| `chowmahalla-palace` | UPDATE EXISTING | `/blog/hyderabad-travel-guide` | The city guide covers the palace; the palaces pillar compares them. |
| `ancient-places-in-india` | MERGE | `/blog/archaeological-sites-in-india` | Sections of the archaeology pillar. |
| `ancient-cities-of-india` | MERGE | `/blog/archaeological-sites-in-india` | Sections of the archaeology pillar. |
| `archaeological-tourism` | MERGE | `/blog/archaeological-sites-in-india` | Sections of the archaeology pillar. |
| `indus-valley-harappan-sites` | MERGE | `/blog/archaeological-sites-in-india` | Sections of the archaeology pillar. |
| `ancient-buddhist-sites` | MERGE | `/blog/archaeological-sites-in-india` | Sections of the archaeology pillar. |
| `rakhigarhi` | MERGE | `/blog/archaeological-sites-in-india` | Limited visitor infrastructure; covered in the pillar. |
| `kalibangan` | MERGE | `/blog/archaeological-sites-in-india` | Limited visitor infrastructure; covered in the pillar. |
| `caves-in-india` | MERGE | `/blog/rock-cut-caves-in-india` | Same intent (heritage caves); natural caves are linked from the pillar. |
| `buddhist-caves` | MERGE | `/blog/rock-cut-caves-in-india` | Same intent (heritage caves); natural caves are linked from the pillar. |
| `cave-tourism` | MERGE | `/blog/rock-cut-caves-in-india` | Same intent (heritage caves); natural caves are linked from the pillar. |
| `rock-cut-architecture` | MERGE | `/blog/rock-cut-caves-in-india` | Same intent (heritage caves); natural caves are linked from the pillar. |
| `badami-caves` | UPDATE EXISTING | `/blog/badami-aihole-pattadakal-travel-guide` | Covered in the caves pillar or an existing guide. |
| `kanheri-caves` | MERGE | `/blog/rock-cut-caves-in-india` | Covered in the caves pillar or an existing guide. |
| `karla-bhaja-caves` | MERGE | `/blog/rock-cut-caves-in-india` | Covered in the caves pillar or an existing guide. |
| `udayagiri-caves` | MERGE | `/blog/rock-cut-caves-in-india` | Covered in the caves pillar or an existing guide. |
| `undavalli-caves` | MERGE | `/blog/rock-cut-caves-in-india` | Covered in the caves pillar or an existing guide. |
| `dravidian-architecture` | MERGE | `/blog/temple-architecture-of-india` | Section of the temple architecture guide; keeping travel intent central. |
| `nagara-architecture` | MERGE | `/blog/temple-architecture-of-india` | Section of the temple architecture guide; keeping travel intent central. |
| `vesara-architecture` | MERGE | `/blog/temple-architecture-of-india` | Section of the temple architecture guide; keeping travel intent central. |
| `chola-architecture` | MERGE | `/blog/temple-architecture-of-india` | Section of the temple architecture guide; keeping travel intent central. |
| `hoysala-architecture` | MERGE | `/blog/temple-architecture-of-india` | Section of the temple architecture guide; keeping travel intent central. |
| `kalinga-architecture` | MERGE | `/blog/temple-architecture-of-india` | Section of the temple architecture guide; keeping travel intent central. |
| `indian-architecture` | MERGE | `/blog/temple-architecture-of-india` | Section of the temple architecture guide; keeping travel intent central. |
| `mughal-architecture` | MERGE | `/blog/mughal-monuments-in-india` | Travel-first page covers the architecture. |
| `portuguese-heritage` | MERGE | `/blog/colonial-heritage-in-india` | Sections of the colonial heritage page. |
| `french-heritage` | MERGE | `/blog/colonial-heritage-in-india` | Sections of the colonial heritage page. |
| `british-era-architecture` | MERGE | `/blog/colonial-heritage-in-india` | Sections of the colonial heritage page. |
| `indo-saracenic-architecture` | MERGE | `/blog/colonial-heritage-in-india` | Sections of the colonial heritage page. |
| `colonial-architecture` | MERGE | `/blog/colonial-heritage-in-india` | Sections of the colonial heritage page. |
| `rajput-heritage` | MERGE | `/blog/forts-of-rajasthan` | Covered by a regional page or existing guide. |
| `maratha-heritage` | MERGE | `/blog/forts-in-maharashtra` | Covered by a regional page or existing guide. |
| `nizam-heritage` | MERGE | `/blog/heritage-tourism-in-telangana` | Covered by a regional page or existing guide. |
| `ahom-heritage` | UPDATE EXISTING | `/blog/sivasagar-travel-guide` | Covered by a regional page or existing guide. |
| `chola-heritage` | MERGE | `/blog/heritage-tourism-in-tamil-nadu` | Covered by a regional page or existing guide. |
| `vijayanagara-heritage` | UPDATE EXISTING | `/blog/hampi-travel-guide` | Covered by a regional page or existing guide. |
| `hoysala-heritage` | MERGE | `/blog/belur-halebidu-hoysala-temples` | Covered by a regional page or existing guide. |
| `historic-cities-in-india` | MERGE | `/blog/heritage-cities-in-india` | Same result set. |
| `cultural-cities-in-india` | MERGE | `/blog/heritage-cities-in-india` | Same result set. |
| `unesco-heritage-cities` | MERGE | `/blog/heritage-cities-in-india` | Same result set. |
| `heritage-of-jaipur` | UPDATE EXISTING | `/blog/jaipur-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-ahmedabad` | UPDATE EXISTING | `/blog/ahmedabad-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-delhi` | MERGE | `/blog/heritage-tourism-in-delhi` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-agra` | UPDATE EXISTING | `/blog/agra-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-varanasi` | UPDATE EXISTING | `/blog/varanasi-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-lucknow` | UPDATE EXISTING | `/blog/lucknow-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-hyderabad` | UPDATE EXISTING | `/blog/hyderabad-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-kolkata` | UPDATE EXISTING | `/blog/kolkata-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-mumbai` | UPDATE EXISTING | `/blog/mumbai-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-mysore` | UPDATE EXISTING | `/blog/mysuru-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-jodhpur` | UPDATE EXISTING | `/blog/jodhpur-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-udaipur` | UPDATE EXISTING | `/blog/udaipur-city-of-lakes-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-amritsar` | UPDATE EXISTING | `/blog/amritsar-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-kochi` | UPDATE EXISTING | `/blog/kochi-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-puducherry` | UPDATE EXISTING | `/blog/puducherry-french-quarter-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-of-goa` | UPDATE EXISTING | `/blog/old-goa-travel-guide` | The existing city guide (or the Delhi heritage page) already satisfies this intent; no separate 'Heritage of' page. |
| `heritage-walk-delhi` | MERGE | `/blog/heritage-walks-in-india` | City sections of the walks pillar, linking the city guide; separate pages would duplicate city content. |
| `heritage-walk-mumbai` | MERGE | `/blog/heritage-walks-in-india` | City sections of the walks pillar, linking the city guide; separate pages would duplicate city content. |
| `heritage-walk-ahmedabad` | MERGE | `/blog/heritage-walks-in-india` | City sections of the walks pillar, linking the city guide; separate pages would duplicate city content. |
| `heritage-walk-jaipur` | MERGE | `/blog/heritage-walks-in-india` | City sections of the walks pillar, linking the city guide; separate pages would duplicate city content. |
| `heritage-walk-lucknow` | MERGE | `/blog/heritage-walks-in-india` | City sections of the walks pillar, linking the city guide; separate pages would duplicate city content. |
| `heritage-walk-hyderabad` | MERGE | `/blog/heritage-walks-in-india` | City sections of the walks pillar, linking the city guide; separate pages would duplicate city content. |
| `heritage-walk-kolkata` | MERGE | `/blog/heritage-walks-in-india` | City sections of the walks pillar, linking the city guide; separate pages would duplicate city content. |
| `heritage-walk-varanasi` | MERGE | `/blog/heritage-walks-in-india` | City sections of the walks pillar, linking the city guide; separate pages would duplicate city content. |
| `historical-museums` | MERGE | `/blog/best-museums-in-india` | Sections of the museums pillar. |
| `cultural-museums` | MERGE | `/blog/best-museums-in-india` | Sections of the museums pillar. |
| `art-museums` | MERGE | `/blog/best-museums-in-india` | Sections of the museums pillar. |
| `archaeological-museums` | MERGE | `/blog/best-museums-in-india` | Sections of the museums pillar. |
| `museum-tourism` | MERGE | `/blog/best-museums-in-india` | Sections of the museums pillar. |
| `blue-pottery` | MERGE | `/blog/handicrafts-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `block-printing` | MERGE | `/blog/textile-heritage-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `bandhani` | MERGE | `/blog/textile-heritage-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `patola` | MERGE | `/blog/textile-heritage-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `kutch-crafts` | MERGE | `/blog/handicrafts-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `madhubani` | MERGE | `/blog/handicrafts-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `pattachitra` | MERGE | `/blog/handicrafts-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `kalamkari` | MERGE | `/blog/textile-heritage-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `chikankari` | MERGE | `/blog/textile-heritage-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `banarasi-silk` | MERGE | `/blog/textile-heritage-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `kanjivaram-silk` | MERGE | `/blog/textile-heritage-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `phulkari` | MERGE | `/blog/textile-heritage-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `kashmiri-crafts` | MERGE | `/blog/handicrafts-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `bamboo-crafts` | MERGE | `/blog/handicrafts-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `dhokra` | MERGE | `/blog/handicrafts-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `traditional-indian-art-forms` | MERGE | `/blog/handicrafts-of-india` | A section (with where to see it) in the crafts or textiles pillar; single-craft pages would be thin. |
| `folk-dances-of-india` | MERGE | `/blog/classical-dance-and-music-in-india` | Section of the performing arts guide. |
| `indian-classical-music` | MERGE | `/blog/classical-dance-and-music-in-india` | Section of the performing arts guide. |
| `folk-music` | MERGE | `/blog/classical-dance-and-music-in-india` | Section of the performing arts guide. |
| `kathak-lucknow` | MERGE | `/blog/classical-dance-and-music-in-india` | Section of the performing arts guide. |
| `kathakali-kerala` | MERGE | `/blog/classical-dance-and-music-in-india` | Section of the performing arts guide. |
| `garba-gujarat` | MERGE | `/blog/classical-dance-and-music-in-india` | Section of the performing arts guide. |
| `pushkar-camel-fair` | UPDATE EXISTING | `/blog/pushkar-travel-guide` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `jaipur-literature-festival` | MERGE | `/blog/cultural-festivals-in-india` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `surajkund-crafts-mela` | MERGE | `/blog/cultural-festivals-in-india` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `durga-puja` | UPDATE EXISTING | `/blog/spiritual-festivals-in-india` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `onam` | MERGE | `/blog/cultural-festivals-in-india` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `pongal` | MERGE | `/blog/cultural-festivals-in-india` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `bihu` | MERGE | `/blog/cultural-festivals-in-india` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `navratri` | UPDATE EXISTING | `/blog/spiritual-festivals-in-india` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `mysore-dasara` | UPDATE EXISTING | `/blog/things-to-do-in-mysore` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `thrissur-pooram` | MERGE | `/blog/cultural-festivals-in-india` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `hemis-festival` | UPDATE EXISTING | `/blog/hemis-travel-guide` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `ziro-festival` | UPDATE EXISTING | `/blog/ziro-valley-arunachal-travel-guide` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `goa-carnival` | MERGE | `/blog/cultural-festivals-in-india` | Section of the festivals calendar or an existing guide; evergreen, with dates checked yearly. |
| `tribal-culture` | MERGE | `/blog/tribal-tourism-in-india` | Sections of the responsible tribal tourism guide. |
| `indigenous-cultural-experiences` | MERGE | `/blog/tribal-tourism-in-india` | Sections of the responsible tribal tourism guide. |
| `tribal-art` | MERGE | `/blog/tribal-tourism-in-india` | Sections of the responsible tribal tourism guide. |
| `tribal-festivals` | MERGE | `/blog/tribal-tourism-in-india` | Sections of the responsible tribal tourism guide. |
| `community-led-tourism` | MERGE | `/blog/tribal-tourism-in-india` | Sections of the responsible tribal tourism guide. |
| `culinary-tourism-in-india` | MERGE | `/blog/food-heritage-of-india` | Same intent; a future Food & Culinary cluster can split it by region. |
| `indian-food-heritage` | MERGE | `/blog/food-heritage-of-india` | Same intent; a future Food & Culinary cluster can split it by region. |
| `traditional-food-of-india` | MERGE | `/blog/food-heritage-of-india` | Same intent; a future Food & Culinary cluster can split it by region. |
| `regional-cuisines` | MERGE | `/blog/food-heritage-of-india` | Same intent; a future Food & Culinary cluster can split it by region. |
| `heritage-food-experiences` | MERGE | `/blog/food-heritage-of-india` | Same intent; a future Food & Culinary cluster can split it by region. |
| `heritage-train-journeys` | MERGE | `/blog/mountain-railways-of-india` | Section of the railways page. |
| `toy-train-journeys` | MERGE | `/blog/mountain-railways-of-india` | Section of the railways page. |
| `darjeeling-himalayan-railway` | MERGE | `/blog/mountain-railways-of-india` | Section of the railways page. |
| `nilgiri-mountain-railway` | MERGE | `/blog/mountain-railways-of-india` | Section of the railways page. |
| `kalka-shimla-railway` | MERGE | `/blog/mountain-railways-of-india` | Section of the railways page. |
| `palace-on-wheels` | MERGE | `/blog/mountain-railways-of-india` | Luxury train intent kept separate: a short clearly-labelled section only; no fares or inclusions quoted. |
| `deccan-odyssey` | MERGE | `/blog/mountain-railways-of-india` | Luxury train intent kept separate: a short clearly-labelled section only; no fares or inclusions quoted. |
| `golden-triangle-3-day-itinerary` | MERGE | `/blog/golden-triangle-itinerary` | 3-day variant is a section. |
| `maharashtra-heritage-circuit` | MERGE | `/blog/forts-in-maharashtra` | Route section; caves via the caves pillar. |
| `karnataka-heritage-circuit` | MERGE | `/blog/south-india-heritage-itinerary` | Section. |
| `tamil-nadu-heritage-tour` | MERGE | `/blog/south-india-heritage-itinerary` | Section. |
| `buddhist-heritage-circuit` | UPDATE EXISTING | `/blog/buddhist-circuit-in-india` | Spiritual cluster page. |
| `mughal-heritage-trail` | MERGE | `/blog/mughal-monuments-in-india` | Same intent. |
| `rajput-heritage-trail` | MERGE | `/blog/rajasthan-heritage-itinerary` | Same intent. |
| `maratha-heritage-trail` | MERGE | `/blog/forts-in-maharashtra` | Same intent. |
| `deccan-heritage-trail` | MERGE | `/blog/deccan-sultanate-heritage` | Same intent. |
| `northeast-cultural-circuit` | MERGE | `/blog/tribal-tourism-in-india` | Covered with festivals and Ahom heritage; limited standalone demand. |
| `delhi-heritage-itinerary` | MERGE | `/blog/heritage-tourism-in-delhi` | Section of the Delhi page. |
| `jaipur-heritage-itinerary` | UPDATE EXISTING | `/blog/jaipur-travel-guide` | Guide has a day plan. |
| `agra-heritage-itinerary` | UPDATE EXISTING | `/blog/agra-travel-guide` | Guide has a day plan. |
| `hyderabad-heritage-itinerary` | MERGE | `/blog/heritage-tourism-in-telangana` | Section. |
| `kolkata-heritage-itinerary` | MERGE | `/blog/heritage-tourism-in-west-bengal` | Section. |
| `heritage-tourism-in-bihar` | DO NOT CREATE | `—` | Heritage demand is Nalanda, Bodh Gaya and Vaishali, covered by the archaeology pillar and the spiritual cluster. |
| `heritage-tourism-in-andhra-pradesh` | DO NOT CREATE | `—` | Covered by the caves and archaeology pillars (Undavalli, Amaravati). |
| `heritage-tourism-in-punjab` | DO NOT CREATE | `—` | Amritsar and Sikh heritage covered by the spiritual cluster and Amritsar guides. |
| `heritage-tourism-in-haryana` | DO NOT CREATE | `—` | Thin standalone heritage demand. |
| `heritage-tourism-in-himachal-pradesh` | DO NOT CREATE | `—` | Covered by the mountain railways page and existing guides. |
| `heritage-tourism-in-goa` | DO NOT CREATE | `—` | Covered by the colonial heritage page and Old Goa guide. |
| `heritage-tourism-in-assam` | DO NOT CREATE | `—` | Covered by the UNESCO pillar (Moidams) and Sivasagar guide. |
| `heritage-tourism-in-meghalaya` | DO NOT CREATE | `—` | Covered by the tribal tourism guide. |
| `heritage-tourism-in-sikkim` | DO NOT CREATE | `—` | Covered by Buddhist and tribal content. |
| `heritage-tourism-in-jammu-and-kashmir` | DO NOT CREATE | `—` | Covered by crafts, Mughal gardens and existing guides. |
| `heritage-tour-packages-in-india` | UPDATE EXISTING | `/packages/heritage-tours` | New travel-style package page. |
| `heritage-tours-in-india` | UPDATE EXISTING | `/packages/heritage-tours` | Same commercial intent. |
| `unesco-heritage-tours` | UPDATE EXISTING | `/packages/heritage-tours` | Style page links the UNESCO pillar. |
| `rajasthan-heritage-packages` | UPDATE EXISTING | `/packages/rajasthan` | State package page. |
| `gujarat-heritage-packages` | UPDATE EXISTING | `/packages/gujarat` | State package page. |
| `golden-triangle-packages` | UPDATE EXISTING | `/packages/golden-triangle` | Existing combo page. |
| `south-india-heritage-tours` | UPDATE EXISTING | `/packages/heritage-tours` | Style page. |
| `cultural-tour-packages` | UPDATE EXISTING | `/packages/heritage-tours` | Style page. |
| `palace-heritage-tours` | UPDATE EXISTING | `/packages/luxury-holidays` | Luxury style page. |
| `heritage-itineraries-hub` | MERGE | `/heritage-cultural-tourism` | Hub itinerary section. |
