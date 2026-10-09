# Canonical Keyword Ownership Map (2026-10-09)

One URL owns each search intent. Supporting pages link *to* the owner with descriptive anchors and do not compete for its head term. Cluster-level ownership and every cannibalisation decision are in `adventure-travel-cannibalization.md`, `beach-travel-cannibalization.md`, `wildlife-tourism-cannibalization.md`, `spiritual-tourism-cannibalization.md`, `heritage-cultural-cannibalization.md`, `hill-station-cannibalization.md`, `nature-travel-cannibalization.md` and `road-trips-cannibalization.md`.

## Brand, agency and commercial intents

| Intent | Owner | Supporting pages (link to the owner, never target the head term) |
|---|---|---|
| Kudozz Club (brand, misspellings) | `/` | About, every page's Organization schema |
| India travel agency / travel agency in India | `/` | About, `/best-travel-agency-in-india` |
| best travel agency in India / top / best tour operator / how to choose an agency | `/best-travel-agency-in-india` | Homepage FAQ, About, all 53 package pages (FinalCta), 13 style pages (quick answer) |
| India tour packages / customized India tour packages | `/packages` | Homepage, `/destinations`, every guide CTA |
| India trip planner / plan my India trip / custom itinerary | `/plan-your-trip` | Every CTA on the site |
| places to visit in India by state / India destinations | `/destinations` | State hubs |
| India travel guides / blog | `/blog` | |
| {state} tour packages / holiday packages | `/packages/{state}` (36) | State hub guide, all guides in the state |
| Golden Triangle / Char Dham / Northeast / Buddhist Circuit tour packages | `/packages/{circuit}` | Guides in each circuit (GuideTripCTA), circuit itinerary pages |
| family / honeymoon / weekend / group / adventure / wildlife / pilgrimage / heritage / hill station / nature / road trip / luxury / budget tour packages in India | `/packages/{style}` (13) | Category hubs, cluster articles (styles links) |

## Category intents

| Intent | Owner |
|---|---|
| adventure travel in India | `/adventure-travel` |
| beach travel in India / beach holidays | `/beach-travel` (list intent "best beaches in India": its cluster pillar) |
| wildlife tourism in India | `/wildlife-tourism` |
| spiritual tourism / pilgrimage places in India | `/spiritual-tourism` |
| heritage and cultural tourism in India | `/heritage-cultural-tourism` |
| hill station travel / best hill stations in India | `/hill-station-travel` hub + `/blog/best-hill-stations-in-india` pillar (hub = planning; pillar = list), per hill-station cannibalisation review |
| nature travel in India | `/nature-travel` |
| road trips in India | `/road-trips` |

## Destination ownership (all 143 destinations with a things-to-do page)

Rule: **travel guide** owns "{place} travel guide / tourism / best time / how to reach / where to stay"; **things to do** owns "things to do / places to visit / activities in {place}"; **itinerary** owns "{place} itinerary / N days"; **package** owns "{place} tour packages". 64 destinations also have a dedicated itinerary or route page; for the rest, the guide's day plan answers itinerary queries.

| Destination | State | Travel guide ("X travel guide", best time, how to reach) | Things to do ("things to do in X") | Itinerary / route | Package ("X tour packages") |
|---|---|---|---|---|---|
| Andaman Islands | Andaman & Nicobar Islands | /blog/andaman-islands-travel-guide | /blog/things-to-do-in-andaman | - | /packages/andaman-nicobar |
| Havelock Island | Andaman & Nicobar Islands | /blog/havelock-island-andaman-travel-guide | /blog/things-to-do-in-havelock-island | - | /packages/andaman-nicobar |
| Neil Island | Andaman & Nicobar Islands | /blog/neil-island-andaman-travel-guide | /blog/things-to-do-in-neil-island | - | /packages/andaman-nicobar |
| Port Blair | Andaman & Nicobar Islands | /blog/port-blair-andaman-travel-guide | /blog/things-to-do-in-port-blair | - | /packages/andaman-nicobar |
| Araku Valley | Andhra Pradesh | /blog/araku-valley-travel-guide | /blog/things-to-do-in-araku-valley | - | /packages/andhra-pradesh |
| Tirupati | Andhra Pradesh | /blog/tirupati-travel-guide | /blog/things-to-do-in-tirupati | - | /packages/andhra-pradesh |
| Visakhapatnam | Andhra Pradesh | /blog/visakhapatnam-travel-guide | /blog/things-to-do-in-vizag | - | /packages/andhra-pradesh |
| Tawang | Arunachal Pradesh | /blog/tawang-travel-guide | /blog/things-to-do-in-tawang | /blog/guwahati-to-tawang-road-trip | /packages/arunachal-pradesh |
| Ziro | Arunachal Pradesh | /blog/ziro-valley-arunachal-travel-guide | /blog/things-to-do-in-ziro | - | /packages/arunachal-pradesh |
| Guwahati | Assam | /blog/guwahati-travel-guide | /blog/things-to-do-in-guwahati | /blog/northeast-india-road-trips | /packages/assam |
| Kaziranga | Assam | /blog/kaziranga-travel-guide | /blog/things-to-do-in-kaziranga | - | /packages/assam |
| Majuli | Assam | /blog/majuli-travel-guide | /blog/things-to-do-in-majuli | - | /packages/assam |
| Bodh Gaya | Bihar | /blog/bodh-gaya-travel-guide | /blog/things-to-do-in-bodh-gaya | - | /packages/bihar |
| Patna | Bihar | /blog/patna-travel-guide | /blog/things-to-do-in-patna | - | /packages/bihar |
| Rajgir | Bihar | /blog/rajgir-travel-guide | /blog/things-to-do-in-rajgir | - | /packages/bihar |
| Chandigarh | Chandigarh | /blog/chandigarh-travel-guide | /blog/things-to-do-in-chandigarh | - | /packages/chandigarh |
| Daman | Dadra and Nagar Haveli and Daman and Diu | /blog/daman-travel-guide | /blog/things-to-do-in-daman | - | /packages/dadra-nagar-haveli-daman-diu |
| Diu | Dadra and Nagar Haveli and Daman and Diu | /blog/diu-travel-guide | /blog/things-to-do-in-diu | - | /packages/dadra-nagar-haveli-daman-diu |
| Delhi | Delhi | /blog/delhi-travel-guide | /blog/things-to-do-in-delhi | /blog/golden-triangle-itinerary | /packages/delhi |
| Old Delhi | Delhi | /blog/old-delhi-travel-guide | /blog/things-to-do-in-old-delhi | - | /packages/delhi |
| Goa | Goa | /blog/goa-beaches-travel-guide | /blog/things-to-do-in-goa | /blog/mumbai-to-goa-road-trip | /packages/goa |
| Ahmedabad | Gujarat | /blog/ahmedabad-travel-guide | /blog/things-to-do-in-ahmedabad | /blog/gujarat-heritage-itinerary | /packages/gujarat |
| Dwarka | Gujarat | /blog/dwarka-travel-guide | /blog/things-to-do-in-dwarka | - | /packages/gujarat |
| Rann of Kutch | Gujarat | /blog/rann-of-kutch-travel-guide | /blog/things-to-do-in-kutch | /blog/winter-road-trips-in-india | /packages/gujarat |
| Saputara | Gujarat | /blog/saputara-travel-guide | /blog/things-to-do-in-saputara | - | /packages/gujarat |
| Surat | Gujarat | /blog/surat-travel-guide | /blog/things-to-do-in-surat | - | /packages/gujarat |
| Vadodara | Gujarat | /blog/vadodara-travel-guide | /blog/things-to-do-in-vadodara | - | /packages/gujarat |
| Gurugram | Haryana | /blog/gurugram-travel-guide | /blog/things-to-do-in-gurgaon | - | /packages/haryana |
| Bir Billing | Himachal Pradesh | /blog/bir-billing-travel-guide | /blog/things-to-do-in-bir-billing | - | /packages/himachal-pradesh |
| Dalhousie | Himachal Pradesh | /blog/dalhousie-travel-guide | /blog/things-to-do-in-dalhousie | /blog/road-trips-in-himachal-pradesh | /packages/himachal-pradesh |
| Dharamshala | Himachal Pradesh | /blog/dharamshala-travel-guide | /blog/things-to-do-in-dharamshala | /blog/road-trips-in-himachal-pradesh | /packages/himachal-pradesh |
| Kasauli | Himachal Pradesh | /blog/kasauli-travel-guide | /blog/things-to-do-in-kasauli | /blog/delhi-to-shimla-road-trip | /packages/himachal-pradesh |
| Kasol | Himachal Pradesh | /blog/kasol-kheerganga-trek-travel-guide | /blog/things-to-do-in-kasol | - | /packages/himachal-pradesh |
| Manali | Himachal Pradesh | /blog/manali-travel-guide | /blog/things-to-do-in-manali | /blog/delhi-to-manali-road-trip | /packages/himachal-pradesh |
| Shimla | Himachal Pradesh | /blog/shimla-travel-guide | /blog/things-to-do-in-shimla | /blog/shimla-manali-itinerary | /packages/himachal-pradesh |
| Spiti Valley | Himachal Pradesh | /blog/spiti-valley-travel-guide | /blog/things-to-do-in-spiti-valley | /blog/spiti-valley-road-trip | /packages/himachal-pradesh |
| Tirthan Valley | Himachal Pradesh | /blog/tirthan-valley-travel-guide | /blog/things-to-do-in-tirthan-valley | /blog/road-trips-in-himachal-pradesh | /packages/himachal-pradesh |
| Gulmarg | Jammu & Kashmir | /blog/gulmarg-travel-guide | /blog/things-to-do-in-gulmarg | /blog/kashmir-itinerary | /packages/kashmir |
| Jammu | Jammu & Kashmir | /blog/jammu-travel-guide | /blog/things-to-do-in-jammu | - | /packages/kashmir |
| Kashmir | Jammu & Kashmir | /blog/jammu-kashmir-travel-guide | /blog/things-to-do-in-kashmir | - | /packages/kashmir |
| Pahalgam | Jammu & Kashmir | /blog/pahalgam-travel-guide | /blog/things-to-do-in-pahalgam | - | /packages/kashmir |
| Patnitop | Jammu & Kashmir | /blog/patnitop-travel-guide | /blog/things-to-do-in-patnitop | - | /packages/kashmir |
| Sonamarg | Jammu & Kashmir | /blog/sonamarg-travel-guide | /blog/things-to-do-in-sonamarg | /blog/kashmir-itinerary | /packages/kashmir |
| Srinagar | Jammu & Kashmir | /blog/srinagar-travel-guide | /blog/things-to-do-in-srinagar | /blog/kashmir-itinerary | /packages/kashmir |
| Ranchi | Jharkhand | /blog/ranchi-travel-guide | /blog/things-to-do-in-ranchi | - | /packages/jharkhand |
| Bengaluru | Karnataka | /blog/bengaluru-travel-guide | /blog/things-to-do-in-bangalore | - | /packages/karnataka |
| Chikmagalur | Karnataka | /blog/chikmagalur-travel-guide | /blog/things-to-do-in-chikmagalur | /blog/western-ghats-nature-itinerary | /packages/karnataka |
| Coorg | Karnataka | /blog/coorg-travel-guide | /blog/things-to-do-in-coorg | /blog/bengaluru-to-coorg-road-trip | /packages/karnataka |
| Gokarna | Karnataka | /blog/gokarna-beaches-travel-guide | /blog/things-to-do-in-gokarna | /blog/bengaluru-to-goa-road-trip | /packages/karnataka |
| Hampi | Karnataka | /blog/hampi-travel-guide | /blog/things-to-do-in-hampi | /blog/south-india-heritage-itinerary | /packages/karnataka |
| Mangaluru | Karnataka | /blog/mangaluru-travel-guide | /blog/things-to-do-in-mangalore | - | /packages/karnataka |
| Mysuru | Karnataka | /blog/mysuru-travel-guide | /blog/things-to-do-in-mysore | /blog/south-india-heritage-itinerary | /packages/karnataka |
| Udupi | Karnataka | /blog/udupi-travel-guide | /blog/things-to-do-in-udupi | - | /packages/karnataka |
| Alappuzha | Kerala | /blog/alappuzha-travel-guide | /blog/things-to-do-in-alleppey | /blog/kerala-road-trip | /packages/kerala |
| Kerala | Kerala | /blog/kerala-backwaters-travel-guide | /blog/things-to-do-in-kerala | - | /packages/kerala |
| Kochi | Kerala | /blog/kochi-travel-guide | /blog/things-to-do-in-kochi | - | /packages/kerala |
| Kovalam | Kerala | /blog/kovalam-travel-guide | /blog/things-to-do-in-kovalam | - | /packages/kerala |
| Kumarakom | Kerala | /blog/kumarakom-travel-guide | /blog/things-to-do-in-kumarakom | /blog/kerala-road-trip | /packages/kerala |
| Munnar | Kerala | /blog/munnar-travel-guide | /blog/things-to-do-in-munnar | /blog/kochi-to-munnar-road-trip | /packages/kerala |
| Thekkady | Kerala | /blog/thekkady-travel-guide | /blog/things-to-do-in-thekkady | /blog/kerala-nature-itinerary | /packages/kerala |
| Varkala | Kerala | /blog/varkala-travel-guide | /blog/things-to-do-in-varkala | /blog/kerala-road-trip | /packages/kerala |
| Wayanad | Kerala | /blog/wayanad-travel-guide | /blog/things-to-do-in-wayanad | - | /packages/kerala |
| Ladakh | Ladakh | /blog/leh-ladakh-road-trip-travel-guide | /blog/things-to-do-in-ladakh | /blog/manali-to-leh-road-trip | /packages/leh-ladakh |
| Leh | Ladakh | /blog/leh-travel-guide | /blog/things-to-do-in-leh | /blog/manali-to-leh-road-trip | /packages/leh-ladakh |
| Nubra Valley | Ladakh | /blog/nubra-valley-travel-guide | /blog/things-to-do-in-nubra-valley | - | /packages/leh-ladakh |
| Lakshadweep | Lakshadweep | /blog/lakshadweep-island-travel-guide | /blog/things-to-do-in-lakshadweep | - | /packages/lakshadweep |
| Bhopal | Madhya Pradesh | /blog/bhopal-travel-guide | /blog/things-to-do-in-bhopal | /blog/madhya-pradesh-heritage-itinerary | /packages/madhya-pradesh |
| Gwalior | Madhya Pradesh | /blog/gwalior-travel-guide | /blog/things-to-do-in-gwalior | /blog/madhya-pradesh-heritage-itinerary | /packages/madhya-pradesh |
| Indore | Madhya Pradesh | /blog/indore-travel-guide | /blog/things-to-do-in-indore | - | /packages/madhya-pradesh |
| Jabalpur | Madhya Pradesh | /blog/jabalpur-travel-guide | /blog/things-to-do-in-jabalpur | - | /packages/madhya-pradesh |
| Khajuraho | Madhya Pradesh | /blog/khajuraho-travel-guide | /blog/things-to-do-in-khajuraho | - | /packages/madhya-pradesh |
| Mandu | Madhya Pradesh | /blog/mandu-travel-guide | /blog/things-to-do-in-mandu | - | /packages/madhya-pradesh |
| Orchha | Madhya Pradesh | /blog/orchha-travel-guide | /blog/things-to-do-in-orchha | /blog/madhya-pradesh-heritage-itinerary | /packages/madhya-pradesh |
| Pachmarhi | Madhya Pradesh | /blog/pachmarhi-travel-guide | /blog/things-to-do-in-pachmarhi | - | /packages/madhya-pradesh |
| Ujjain | Madhya Pradesh | /blog/ujjain-travel-guide | /blog/things-to-do-in-ujjain | /blog/jyotirlinga-yatra | /packages/madhya-pradesh |
| Alibaug | Maharashtra | /blog/alibaug-travel-guide | /blog/things-to-do-in-alibaug | /blog/road-trips-from-mumbai | /packages/maharashtra |
| Chhatrapati Sambhajinagar | Maharashtra | /blog/chhatrapati-sambhajinagar-travel-guide | /blog/things-to-do-in-aurangabad | - | /packages/maharashtra |
| Kolhapur | Maharashtra | /blog/kolhapur-travel-guide | /blog/things-to-do-in-kolhapur | - | /packages/maharashtra |
| Lonavala | Maharashtra | /blog/lonavala-travel-guide | /blog/things-to-do-in-lonavala | /blog/road-trips-from-mumbai | /packages/maharashtra |
| Mahabaleshwar | Maharashtra | /blog/mahabaleshwar-travel-guide | /blog/things-to-do-in-mahabaleshwar | /blog/road-trips-from-mumbai | /packages/maharashtra |
| Matheran | Maharashtra | /blog/matheran-travel-guide | /blog/things-to-do-in-matheran | - | /packages/maharashtra |
| Mumbai | Maharashtra | /blog/mumbai-travel-guide | /blog/things-to-do-in-mumbai | - | /packages/maharashtra |
| Nashik | Maharashtra | /blog/nashik-travel-guide | /blog/things-to-do-in-nashik | /blog/road-trips-from-mumbai | /packages/maharashtra |
| Pune | Maharashtra | /blog/pune-travel-guide | /blog/things-to-do-in-pune | - | /packages/maharashtra |
| Imphal | Manipur | /blog/imphal-travel-guide | /blog/things-to-do-in-imphal | - | /packages/manipur |
| Cherrapunji | Meghalaya | /blog/cherrapunji-travel-guide | /blog/things-to-do-in-cherrapunji | /blog/meghalaya-nature-itinerary | /packages/meghalaya |
| Meghalaya | Meghalaya | /blog/meghalaya-travel-guide | /blog/things-to-do-in-meghalaya | /blog/meghalaya-nature-itinerary | /packages/meghalaya |
| Shillong | Meghalaya | /blog/shillong-travel-guide | /blog/things-to-do-in-shillong | /blog/meghalaya-nature-itinerary | /packages/meghalaya |
| Aizawl | Mizoram | /blog/aizawl-travel-guide | /blog/things-to-do-in-aizawl | - | /packages/mizoram |
| Kohima | Nagaland | /blog/kohima-travel-guide | /blog/things-to-do-in-kohima | - | /packages/nagaland |
| Bhubaneswar | Odisha | /blog/bhubaneswar-travel-guide | /blog/things-to-do-in-bhubaneswar | - | /packages/odisha |
| Puri | Odisha | /blog/puri-travel-guide | /blog/things-to-do-in-puri | - | /packages/odisha |
| Pondicherry | Puducherry | /blog/puducherry-district-travel-guide | /blog/things-to-do-in-pondicherry | - | /packages/puducherry |
| Amritsar | Punjab | /blog/amritsar-travel-guide | /blog/things-to-do-in-amritsar | /blog/panj-takht-yatra | /packages/punjab |
| Patiala | Punjab | /blog/patiala-travel-guide | /blog/things-to-do-in-patiala | - | /packages/punjab |
| Ajmer | Rajasthan | /blog/ajmer-travel-guide | /blog/things-to-do-in-ajmer | - | /packages/rajasthan |
| Bikaner | Rajasthan | /blog/bikaner-travel-guide | /blog/things-to-do-in-bikaner | /blog/rajasthan-road-trip | /packages/rajasthan |
| Bundi | Rajasthan | /blog/bundi-travel-guide | /blog/things-to-do-in-bundi | /blog/rajasthan-road-trip | /packages/rajasthan |
| Chittorgarh | Rajasthan | /blog/chittorgarh-travel-guide | /blog/things-to-do-in-chittorgarh | /blog/rajasthan-heritage-itinerary | /packages/rajasthan |
| Jaipur | Rajasthan | /blog/jaipur-travel-guide | /blog/things-to-do-in-jaipur | /blog/golden-triangle-itinerary | /packages/rajasthan |
| Jaisalmer | Rajasthan | /blog/rajasthan-desert-travel-guide | /blog/things-to-do-in-jaisalmer | - | /packages/rajasthan |
| Jodhpur | Rajasthan | /blog/jodhpur-travel-guide | /blog/things-to-do-in-jodhpur | /blog/rajasthan-heritage-itinerary | /packages/rajasthan |
| Mount Abu | Rajasthan | /blog/mount-abu-travel-guide | /blog/things-to-do-in-mount-abu | - | /packages/rajasthan |
| Pushkar | Rajasthan | /blog/pushkar-travel-guide | /blog/things-to-do-in-pushkar | /blog/rajasthan-road-trip | /packages/rajasthan |
| Udaipur | Rajasthan | /blog/udaipur-city-of-lakes-travel-guide | /blog/things-to-do-in-udaipur | /blog/rajasthan-heritage-itinerary | /packages/rajasthan |
| Gangtok | Sikkim | /blog/gangtok-travel-guide | /blog/things-to-do-in-gangtok | - | /packages/sikkim |
| Pelling | Sikkim | /blog/pelling-travel-guide | /blog/things-to-do-in-pelling | - | /packages/sikkim |
| Sikkim | Sikkim | /blog/sikkim-travel-guide | /blog/things-to-do-in-sikkim | - | /packages/sikkim |
| Chennai | Tamil Nadu | /blog/chennai-travel-guide | /blog/things-to-do-in-chennai | - | /packages/tamil-nadu |
| Coimbatore | Tamil Nadu | /blog/coimbatore-travel-guide | /blog/things-to-do-in-coimbatore | - | /packages/tamil-nadu |
| Kanyakumari | Tamil Nadu | /blog/kanyakumari-travel-guide | /blog/things-to-do-in-kanyakumari | - | /packages/tamil-nadu |
| Kodaikanal | Tamil Nadu | /blog/kodaikanal-travel-guide | /blog/things-to-do-in-kodaikanal | /blog/south-india-hill-stations-itinerary | /packages/tamil-nadu |
| Madurai | Tamil Nadu | /blog/madurai-travel-guide | /blog/things-to-do-in-madurai | /blog/south-india-heritage-itinerary | /packages/tamil-nadu |
| Mahabalipuram | Tamil Nadu | /blog/mahabalipuram-travel-guide | /blog/things-to-do-in-mahabalipuram | /blog/chennai-to-pondicherry-road-trip | /packages/tamil-nadu |
| Ooty | Tamil Nadu | /blog/ooty-travel-guide | /blog/things-to-do-in-ooty | /blog/south-india-hill-stations-itinerary | /packages/tamil-nadu |
| Rameswaram | Tamil Nadu | /blog/rameswaram-travel-guide | /blog/things-to-do-in-rameswaram | /blog/jyotirlinga-yatra | /packages/tamil-nadu |
| Thanjavur | Tamil Nadu | /blog/thanjavur-travel-guide | /blog/things-to-do-in-thanjavur | /blog/south-india-heritage-itinerary | /packages/tamil-nadu |
| Yercaud | Tamil Nadu | /blog/yercaud-travel-guide | /blog/things-to-do-in-yercaud | - | /packages/tamil-nadu |
| Hyderabad | Telangana | /blog/hyderabad-travel-guide | /blog/things-to-do-in-hyderabad | - | /packages/telangana |
| Warangal | Telangana | /blog/warangal-travel-guide | /blog/things-to-do-in-warangal | /blog/road-trips-from-hyderabad | /packages/telangana |
| Agartala | Tripura | /blog/agartala-travel-guide | /blog/things-to-do-in-agartala | - | /packages/tripura |
| Agra | Uttar Pradesh | /blog/agra-travel-guide | /blog/things-to-do-in-agra | /blog/golden-triangle-itinerary | /packages/uttar-pradesh |
| Ayodhya | Uttar Pradesh | /blog/ayodhya-travel-guide | /blog/things-to-do-in-ayodhya | - | /packages/uttar-pradesh |
| Lucknow | Uttar Pradesh | /blog/lucknow-travel-guide | /blog/things-to-do-in-lucknow | - | /packages/uttar-pradesh |
| Mathura | Uttar Pradesh | /blog/mathura-travel-guide | /blog/things-to-do-in-mathura | - | /packages/uttar-pradesh |
| Prayagraj | Uttar Pradesh | /blog/prayagraj-travel-guide | /blog/things-to-do-in-prayagraj | - | /packages/uttar-pradesh |
| Varanasi | Uttar Pradesh | /blog/varanasi-travel-guide | /blog/things-to-do-in-varanasi | - | /packages/uttar-pradesh |
| Vrindavan | Uttar Pradesh | /blog/vrindavan-travel-guide | /blog/things-to-do-in-vrindavan | - | /packages/uttar-pradesh |
| Auli | Uttarakhand | /blog/auli-travel-guide | /blog/things-to-do-in-auli | - | /packages/uttarakhand |
| Chopta | Uttarakhand | /blog/chopta-travel-guide | /blog/things-to-do-in-chopta | /blog/road-trips-in-uttarakhand | /packages/uttarakhand |
| Haridwar | Uttarakhand | /blog/haridwar-travel-guide | /blog/things-to-do-in-haridwar | /blog/delhi-to-rishikesh-road-trip | /packages/uttarakhand |
| Jim Corbett | Uttarakhand | /blog/jim-corbett-travel-guide | /blog/things-to-do-in-jim-corbett | - | /packages/uttarakhand |
| Kausani | Uttarakhand | /blog/kausani-travel-guide | /blog/things-to-do-in-kausani | /blog/uttarakhand-hill-stations-itinerary | /packages/uttarakhand |
| Lansdowne | Uttarakhand | /blog/lansdowne-travel-guide | /blog/things-to-do-in-lansdowne | /blog/road-trips-in-uttarakhand | /packages/uttarakhand |
| Mussoorie | Uttarakhand | /blog/mussoorie-travel-guide | /blog/things-to-do-in-mussoorie | /blog/uttarakhand-hill-stations-itinerary | /packages/uttarakhand |
| Nainital | Uttarakhand | /blog/nainital-travel-guide | /blog/things-to-do-in-nainital | /blog/road-trips-in-uttarakhand | /packages/uttarakhand |
| Ranikhet | Uttarakhand | /blog/ranikhet-travel-guide | /blog/things-to-do-in-ranikhet | - | /packages/uttarakhand |
| Rishikesh | Uttarakhand | /blog/rishikesh-adventure-travel-guide | /blog/things-to-do-in-rishikesh | /blog/delhi-to-rishikesh-road-trip | /packages/uttarakhand |
| Darjeeling | West Bengal | /blog/darjeeling-travel-guide | /blog/things-to-do-in-darjeeling | /blog/darjeeling-sikkim-itinerary | /packages/west-bengal |
| Digha | West Bengal | /blog/digha-travel-guide | /blog/things-to-do-in-digha | /blog/road-trips-from-kolkata | /packages/west-bengal |
| Kalimpong | West Bengal | /blog/kalimpong-travel-guide | /blog/things-to-do-in-kalimpong | - | /packages/west-bengal |
| Kolkata | West Bengal | /blog/kolkata-travel-guide | /blog/things-to-do-in-kolkata | - | /packages/west-bengal |
| Sundarbans | West Bengal | /blog/sundarbans-travel-guide | /blog/things-to-do-in-sundarbans | - | /packages/west-bengal |

## Overlaps reviewed this pass (kept, distinct intent)

| Pair | Decision |
|---|---|
| `how-to-plan-a-tiger-safari-in-india` / `how-to-plan-a-wildlife-safari-in-india` | Keep both: tiger-reserve booking vs general safari planning |
| `kashmir-itinerary` / `jammu-kashmir-travel-guide` (6-day plan) | Itinerary owns "Kashmir itinerary"; the hub links to it |
| `spiti-valley-travel-guide` / `-road-trip` / `-bike-trip` | Destination vs route vs motorcycle intent |
| `hornbill-festival` / `kisama-travel-guide` | Event vs venue |
| `rann-utsav` / `rann-of-kutch-travel-guide` / `things-to-do-in-kutch` | Festival vs destination vs activities |
| `ranthambore-first-time-visitors-travel-guide` / `ranthambore-travel-guide` | Personal first-timer account vs park guide; no `things-to-do-in-ranthambore` exists |
| Monument pages (`taj-mahal`, `red-fort`, `qutub-minar`…) / city guides | Monument visit vs whole city |
| `summer-`, `winter-`, `monsoon-hill-stations-in-india` / `best-hill-stations-in-india` | Seasonal vs evergreen list |
