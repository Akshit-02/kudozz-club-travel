# Nature Travel: existing-site audit

Audited 2026-09-26, before any Nature cluster page was created.

## 1. Architecture (reused as-is)

| Area | What exists | Decision |
| --- | --- | --- |
| Framework and routes | Next.js 14 App Router, TypeScript, Tailwind; fully static | Add a `nature` JSON cluster to `src/app/blog/[slug]/page.tsx`. No new routing |
| Blog architecture | 584 hand-built guide folders under `src/app/blog/<slug>`. Seven JSON clusters (things to do, adventure, beach, wildlife, spiritual, heritage, hills) are rendered by one route | Same route and JSON schema |
| Templates and components | `ClusterArticleView` (H1, breadcrumb, quick answer, takeaways, CTA, sections, safety, packing, plan CTA, FAQs, related, sidebar), `GuideTripCTA` pointer lines, `SectionTitle`, and the hub components (cards, pills) | Reuse with a `NATURE_CLUSTER` config; the hub matches the other hubs' design exactly |
| Packages | State and UT packages, 12 travel styles, four combo circuits | Add a **Nature Holidays** travel style (`/packages/nature-holidays`) with no prices; add nature blocks to state and style pages |
| SEO | Absolute canonicals, OG and Twitter metadata. Clusters carry BlogPosting, BreadcrumbList, FAQPage and ItemList schema; the layout carries Organization and WebSite. `sitemap.ts`; `robots.ts` allows everything except `/api/` and `/admin/`; `llms.txt` is maintained by hand. There is no redirect system and none is needed | Reuse; the hub is added to the sitemap and `llms.txt` |
| Images | Local WebP with `IMAGE_CREDITS.json`. `images.unoptimized` is set, so WebP is served as-is and lazily loaded. More than 1,700 credited photos, many of individual waterfalls, lakes, caves and valleys | New heroes in `public/images/nature/`; inline images reuse credited photos of the same place |
| Mobile | Hubs and articles use the shared responsive container and grid; the header collapses below `xl` | No new layout patterns |

## 2. Existing nature-related content

- **Destination guides.** About 70 hand-built guides already cover individual natural attractions:
  - **Waterfalls:** Jog, Dudhsagar, Athirappilly, Hogenakkal, Nohkalikai (via Cherrapunji), Krang Suri, Bogatha, Kuntala, Vantawng.
  - **Lakes:** Pangong, Tso Moriri, Gurudongmar, Tsomgo, Chilika, Loktak, Umiam, Khecheopalri, Prashar, Tehri, Dal (via Srinagar), Shilloi, Tamdil, Dumboor.
  - **Caves:** Belum, Borra, Tharon, Naida, Mawsmai (via Cherrapunji).
  - **Valleys:** Valley of Flowers, Dzukou, Yumthang, Nubra, Spiti, Zanskar, Gurez, Tirthan, Ziro, Kanger, Araku.
  - **Geology:** Gandikota, Laitlum, Kaas, Rann of Kutch, Marble Rocks (via Jabalpur).
  - **Rivers and islands:** Majuli, Kerala backwaters, Kumarakom, Munroe Island.
  - **Forests:** Silent Valley and others inside wildlife guides, Saranda, Polo Forest, Dooars, Sundarbans, Bhitarkanika.
- **Wildlife cluster** owns:
  - birdwatching (`birdwatching-in-india`, covering Bharatpur, Chilika, Sultanpur, Thattekad, Nameri and more);
  - national parks, sanctuaries, safaris, snow leopards;
  - wildlife photography;
  - responsible wildlife tourism;
  - state wildlife pages.
- **Hill Station cluster** owns:
  - hill stations and mountain destinations (Ladakh, Spiti, valleys at high altitude);
  - summer, winter, snow and monsoon hill travel;
  - couples, families, budget and luxury hill trips; responsible mountain travel.
- **Adventure cluster** owns trekking (including monsoon and winter treks), camping, rafting and paragliding.
- **Heritage cluster** owns rock-cut caves, tribal tourism and the mountain railways.
- **Beach cluster** owns beaches and islands, including Andaman and Lakshadweep.
- **Things to do:** 143 articles, many for nature destinations (Munnar, Coorg, Cherrapunji, Kaziranga, Ziro and others).

## 3. Missing content

- **No landscape-level pages:** there is no hub, and no pages for best nature destinations, natural wonders, forests, waterfalls, lakes, rivers, valleys or natural caves.
- **No regional nature overviews** for the Western Ghats, Northeast India or the Himalaya.
- **No state nature pages.**
- **No pages for eco tourism, biodiversity hotspots, flower blooms, nature retreats, village tourism, nature photography, offbeat nature or a nature-travel calendar.**
- **No nature planning guide and no nature-specific itineraries.**

## 4. Recommendations

- **Nature owns landscape and ecosystem intent:** forests, waterfalls, lakes, rivers, valleys, caves, geology, biodiversity, blooms, eco tourism and nature stays. It hands off to:
  - existing guides for individual places;
  - Wildlife for species and parks;
  - Hills for hill towns;
  - Adventure for activities;
  - Heritage for rock-cut caves and tribal culture;
  - Beach for coasts and islands.
- **Do not create** birding, best-wildlife, best-hill-station, best-beach, monthly or doorway pages.
- **Create 33 pages:** the hub and 32 articles (see `nature-travel-url-map.md`).
- **Update existing pages:**
  - about 70 guides get a nature pointer;
  - state and style packages get nature blocks;
  - contextual links are added from the Wildlife, Hills, Adventure, Heritage and Beach clusters.

## 5. Cannibalisation risks

| Risk | Handling |
| --- | --- |
| Nature vs Wildlife (birds, parks, forests) | Nature covers habitats and landscapes; Wildlife owns species, reserves, safaris and birding. Forest pages link to wildlife pages for animal sightings |
| Nature vs Hills (mountains, valleys, monsoon) | Nature's valleys page is national and landscape-led; Hills owns hill towns and high-altitude mountain destinations. Monsoon travel is merged into Hills and the waterfalls and Western Ghats pages |
| Nature vs Adventure (treks, rafting) | Nature links to Adventure for activities; it creates no activity pages |
| Nature vs Heritage (caves, villages) | Natural caves only; village tourism focuses on rural nature experiences and links to tribal tourism |
| Nature vs Beach (islands, marine life) | Marine biodiversity is a section of the biodiversity page; there are no island or beach pages |
| Nature state pages vs Hill state pages vs travel guides | Created only for states where nature intent is distinct: Kerala, Karnataka, Meghalaya, Uttarakhand, Himachal, Odisha and Madhya Pradesh |
