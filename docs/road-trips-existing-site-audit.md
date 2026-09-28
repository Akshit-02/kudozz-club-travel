# Road Trips: existing-site audit

Audited on 2026-09-28, before any Road Trips cluster page was created.

## 1. Architecture (reused as-is)

| Area | What exists | Decision |
| --- | --- | --- |
| Framework and routing | Next.js 14 App Router, TypeScript and Tailwind. Fully static, with `images.unoptimized` | Add a `roadtrips` JSON cluster rendered by `src/app/blog/[slug]/page.tsx`. No new routing except the `/road-trips` hub |
| Blog system | 584 hand-built guide folders under `src/app/blog/<slug>`. Eight JSON clusters (things to do, adventure, beach, wildlife, spiritual, heritage, hills, nature) share one template, `ClusterArticleView` | Same template and schema |
| Destination system | State and UT hubs, city and attraction guides, `destination-profiles`, and `GuideTripCTA` pointer lines on guides | Route pages hand off to destination guides; 89 guides get a "Going by road?" pointer |
| Package system | State and UT packages, 13 travel styles and four combo circuits. No prices are published | Add a **Road Trips** travel style (`/packages/road-trip-holidays`); add road-trip blocks to state, style and combo pages |
| Itinerary system | Itineraries live as cluster articles, for example the Shimla–Manali, Kashmir, Rajasthan heritage, Golden Triangle and Kerala nature itineraries | Reuse; the hub links them. No duplicate itineraries |
| Metadata and schema | Absolute canonicals, Open Graph and Twitter metadata. Clusters emit `BlogPosting` (with `about` and `mentions`), `BreadcrumbList`, `FAQPage` and `ItemList`; the layout emits `Organization` and `WebSite` | Reuse. The hub emits `CollectionPage`, `ItemList`, `BreadcrumbList` and `FAQPage` |
| Sitemap, robots, llms.txt | `sitemap.ts` includes every post plus the hubs. `robots.ts` allows everything except `/api/` and `/admin/`. `llms.txt` is maintained by hand | Add the hub to the sitemap and a Road Trips block to `llms.txt` |
| Redirects | None configured and none needed (no URL changes) | No redirects |
| Breadcrumbs and CTAs | Cluster breadcrumbs follow Hub → parent → article. Every cluster article has two CTAs | Same pattern: "Planning a road trip?" and "Want the route, stops and stays planned around your dates?" |
| Images and performance | Local WebP files, credited in `IMAGE_CREDITS.json`; lazy loading below the fold | 40 new route heroes in `public/images/roadtrips/`; inline images reuse credited photos |
| Mobile | Shared responsive container and grids; the header collapses below `xl` | No new layout patterns |

## 2. Existing road-trip and route content

| Page | Cluster | What it covers | Decision |
| --- | --- | --- | --- |
| `/blog/leh-ladakh-road-trip-travel-guide` | Guide | Both Ladakh highways, a 14-day itinerary, budget, bike vs car, permits, places | **Canonical for "Ladakh road trip"** and its itinerary, cost, packing and car/bike variants. New route pages cover only Manali–Leh and Srinagar–Leh in depth |
| `/blog/mountain-road-trips-in-india` | Hills | Himalayan, Northeast and Western Ghats drives | **Canonical for "mountain" and "Himalayan road trips"**; linked from the hub |
| `/blog/best-motorcycle-trips-in-india` | Adventure | Motorcycle routes by season | **Canonical for bike and motorcycle road-trip intent** |
| `/blog/spiti-valley-bike-trip` | Adventure | Spiti by motorcycle | **Canonical for Spiti by bike**; the new Spiti road trip page covers car and general route intent |
| Shimla–Manali, Uttarakhand, Kashmir, Darjeeling–Sikkim and South India hill itineraries | Hills | Multi-stop itineraries | Stay canonical; route pages link to them |
| Rajasthan heritage, Golden Triangle, Gujarat and MP heritage itineraries | Heritage | Heritage circuits | Stay canonical for heritage intent; the Rajasthan road trip owns route and driving intent |
| Kerala, Meghalaya and Western Ghats nature itineraries | Nature | Nature circuits | Stay canonical; linked from route pages |
| Weekend adventure trips from Delhi, Mumbai and Bengaluru | Adventure | Activity weekends | Activity intent; the new city-origin pages cover relaxed drives, with links both ways |
| Hill stations near five cities | Hills | Hill-town weekends | Hill-town intent; linked both ways |
| `/blog/murthal-travel-guide` and other stop towns | Guides | Destinations | Linked as stops |

## 3. Destination relationships

Route pages sit between origin cities and destination guides. For example, `delhi-to-manali-road-trip` links to Chandigarh, Kullu and Manali guides, then to Things to Do in Manali, Adventure Activities in Manali, the Shimla–Manali itinerary and the Himachal package.

## 4. Missing content

- No road-trip hub.
- No route pages for the most-searched routes: Delhi to Manali, Shimla and Rishikesh; Manali and Srinagar to Leh; Spiti; Mumbai to Goa; Bengaluru to Coorg, Ooty and Goa; Chennai to Pondicherry; Kochi to Munnar; Guwahati to Tawang.
- No regional pages for Rajasthan, South India, Kerala, the Western Ghats, the coasts or the Northeast as road trips.
- No city-origin road-trip pages.
- No self-drive, cost, packing or safety guides for road trips.
- No seasonal (monsoon, winter) or themed (wildlife, food, families, couples) road-trip pages.
- No road-trip travel style.

## 5. Overlap and cannibalisation risks

| Risk | Handling |
| --- | --- |
| Ladakh road trip vs Leh Ladakh guide | The guide stays canonical; there is no `/blog/ladakh-road-trip`. Route pages link up to it as their parent |
| Mountain or Himalayan road trips vs Hills | Hills keeps `mountain-road-trips-in-india`; road trips link to it from the hub and the state pages |
| Bike or motorcycle road trips vs Adventure | Adventure owns them; the Spiti road trip page covers the car and general route, the bike page covers riding |
| Route pages vs destination guides | Route pages cover the journey; each links to the guide for what to do on arrival |
| City-origin road trips vs hill stations near X and adventure weekends | Different intents (relaxed drives across destination types); linked both ways |
| Rajasthan road trip vs Rajasthan heritage itinerary | Route and driving intent vs heritage circuit; linked both ways |
| Coastal road trips vs Beach cluster | Journey intent vs beach intent; the Beach cluster owns the beaches |

## 6. Recommended architecture

India → `/road-trips` → region or state page → route page → stops → destination guide → things to do → activity → itinerary → package → Plan My Trip.

**Create 40 pages:** the hub and 39 articles (see `road-trips-url-map.md`).
