# Hill Station Travel: existing-site audit

Audited 2026-09-26, before any hill-station cluster page was created.

## 1. Architecture (reused as-is)

| Area | What exists | Decision |
| --- | --- | --- |
| Framework and routes | Next.js 14 App Router, TypeScript, Tailwind, fully static. 584 hand-built guide folders under `src/app/blog/<slug>`. JSON clusters (things to do, adventure, beach, wildlife, spiritual, heritage) are rendered by `src/app/blog/[slug]/page.tsx` | Add a `hills` JSON cluster to the same route. No new routing |
| Templates | `ClusterArticleView`: H1, dek, breadcrumb, quick answer, takeaways, CTA, sections (facts, tables, lists, images), safety, packing, plan block (second CTA), FAQs, related, sidebar | Reuse with a `HILLS_CLUSTER` config |
| Destination guides | Hand-built pages with a consistent section set: `best-time`, `how-to-reach`, things to do or top places, `where-to-stay`, `food-guide`, `itinerary` or `visit-plan`, `budget`, `tips`, `faq` | Guides stay canonical for each destination, including its best time and short itinerary |
| Things to do | 143 JSON articles; 40 are for hill destinations | Linked from state pages and pointers; no duplicates |
| Packages | State packages for every state and UT (including `himachal-pradesh`, `uttarakhand`, `kashmir`, `sikkim`, `meghalaya`, `leh-ladakh`); travel styles; combo circuits (Golden Triangle, Char Dham, Northeast India, Buddhist Circuit) | Add a **Hill Stations** travel style (`/packages/hill-station-holidays`) with no prices; add hill blocks to state packages |
| SEO | Absolute canonicals, OG and Twitter metadata. Guides carry BlogPosting, Place, BreadcrumbList and FAQPage schema; the layout carries Organization and WebSite. `sitemap.ts`; `robots.ts` allows everything except `/api/` and `/admin/` | Reuse; the hub is added to the sitemap |
| Images | Local WebP with `IMAGE_CREDITS.json`; about 226 credited photos of hill destinations already exist | New heroes in `public/images/hills/`; inline images reuse credited photos of the same place only |
| CTAs | `GuideTripCTA` pointer lines; two CTAs per cluster article; `/plan-your-trip` | Add a hill pointer line ("Comparing hill stations? See our guide to …") |

## 2. Existing hill-station content

- **Destination guides already exist** for about 80 hill and mountain destinations:
  - **Himachal Pradesh:** Shimla, Manali, Kullu, Dharamshala, Dalhousie, Khajjiar, Kasauli, Kasol, Bir Billing, Jibhi, Tirthan, Kinnaur, Chitkul and Spiti.
  - **Uttarakhand:** Mussoorie, Dhanaulti, Nainital, Ranikhet, Mukteshwar, Kausani, Lansdowne, Auli, Chopta and Munsiyari.
  - **Jammu and Kashmir:** Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg and Patnitop.
  - **Ladakh:** Leh, Nubra, Tso Moriri and Zanskar.
  - **Sikkim and West Bengal:** Darjeeling, Kalimpong, Gangtok, Pelling, Lachung, Lachen, Yuksom and Temi.
  - **Northeast:** Shillong, Cherrapunji, Nongriat, Dawki, Tawang, Bomdila, Dirang, Ziro, Haflong, Dzukou and Aizawl.
  - **South India:** Ooty, Kodaikanal, Yercaud, Yelagiri, Kolli Hills, Meghamalai, Valparai, Munnar, Thekkady, Wayanad, Vagamon, Coorg, Chikmagalur, Sakleshpur, Nandi Hills, Araku, Horsley Hills and Lambasingi.
  - **West and central India:** Mahabaleshwar, Lonavala, Matheran, Bhandardara, Saputara, Mount Abu, Pachmarhi, Morni and Netarhat.
- **Structure of those guides.** Every major guide already has a **best time** and an **itinerary or visit plan** section, which checked on Shimla, Manali, Mussoorie, Nainital, Munnar, Ooty, Darjeeling, Gangtok, Srinagar, Gulmarg, Coorg, Kodaikanal and Mahabaleshwar.
- **Things to do** articles exist for 40 hill destinations. Examples: Shimla, Manali, Mussoorie, Nainital, Gulmarg, Darjeeling, Gangtok, Munnar, Ooty and Coorg.
- **Adventure cluster.** It already owns:
  - skiing (`skiing-in-india`), winter treks, monsoon treks, trekking, camping and paragliding;
  - adventure activities in Himachal, Manali, Uttarakhand, Sikkim, Meghalaya and Ladakh;
  - weekend adventure trips from Delhi, Mumbai and Bengaluru, and motorcycle trips.
- **Heritage cluster.** It owns `mountain-railways-of-india` (the toy trains).
- **Wildlife cluster.** It owns snow leopard tours, birdwatching and the state wildlife pages.
- **Spiritual cluster.** It owns the Char Dham, Buddhist tourism, and the Himachal and J&K spiritual pages.

## 3. Gaps

- **No overviews.** There is no hub, "best hill stations", region, state, seasonal (summer, winter, snow, monsoon) or traveller-type (couples, families, budget, luxury) page.
- **No origin-city pages.** Nothing covers "hill stations near <city>". The adventure weekend pages cover activities, not hill stations.
- **No multi-destination itineraries.** Shimla–Manali, Kashmir, Darjeeling–Sikkim, Uttarakhand and the southern hills have none.
- **No tea or coffee tourism overview** (only individual guides such as Temi and Darjeeling).
- **No mountain road-trip overview** other than the Leh–Ladakh guide and the motorcycle trips page.
- **No hill-station planning, packing or responsible-travel guides.**
- **Hill towns without guides:** Chail, Kufri, Narkanda, Palampur, Almora, Kanatal, Binsar, Coonoor, Panchgani and Mirik. They are covered as state-page sections for now.

## 4. Update, create, merge, do not create

- **Update existing.**
  - About 70 destination guides get a hill-station pointer.
  - State package pages get a "Hill stations in <state>" block, and style pages get "Hill-station ideas".
  - Contextual links are added from the adventure (skiing, winter treks), heritage (mountain railways), wildlife and spiritual clusters.
- **Create.** 41 pages: the hub and 40 articles (see `hill-station-url-map.md`).
- **Merge:**
  - hill-station travel, tourism and mountain travel go to the **hub**;
  - hill holidays go to best hill stations;
  - snow tourism variants go to places to see snow;
  - Himachal 7-day goes to the Shimla–Manali itinerary;
  - single-destination "best time" and "2-day or 3-day itinerary" pages go to the existing guide sections.
- **Do not create:**
  - monthly pages ("hill stations in May");
  - origin pages for Hyderabad, Ahmedabad, Chandigarh and Jaipur, which would be doorway-like with too few hill stations in range;
  - destination honeymoon pages, which are commercial and handled by `/packages/honeymoon`.

## 5. Cannibalisation risks and handling

| Risk | Handling |
| --- | --- |
| Best hill stations vs best mountain destinations | Hill stations are towns with tourist infrastructure. Mountain destinations cover high valleys and regions (Ladakh, Spiti, Kinnaur, Zanskar) and use the correct terminology |
| Winter hill stations vs places to see snow | Winter includes non-snow hills (the south in winter, clear Himalayan views); the snow page is narrower and carries seasonality caveats |
| State hill pages vs state travel guides vs state adventure, wildlife and spiritual pages | Hill pages compare hill towns within the state; the others keep their own intent. They cross-link |
| Hill stations near Delhi, Mumbai or Bengaluru vs adventure weekend trips from those cities | Hill-station pages cover places to stay and relax; adventure pages cover activities. Each links to the other |
| Shimla–Manali itinerary vs the Shimla and Manali guides | The itinerary is a multi-destination route; each guide keeps its own short visit plan |
| Skiing and snow | `skiing-in-india` stays canonical; the snow page links to it for activities |
| Toy trains | `mountain-railways-of-india` stays canonical |
| Name collisions to avoid | `udaipur-tripura-travel-guide`; `mahabaleshwar-temple-gokarna` (an image, not the hill station) |

## 6. Internal-linking opportunities

- **Chain:** hub → region → state page → destination guide → things to do → adventure activity → itinerary → package → Plan My Trip.
- **Cross-cluster links:**
  - adventure: skiing, winter and monsoon treks, paragliding, camping;
  - wildlife: Great Himalayan NP, Eravikulam, Kaziranga from Shillong;
  - spiritual: Dharamshala, Tawang and Rumtek monasteries, the Char Dham;
  - heritage: the mountain railways and colonial hill towns;
  - beach: Goa and Konkan combinations with the Western Ghats;
  - family, honeymoon, luxury, budget and weekend package styles.
