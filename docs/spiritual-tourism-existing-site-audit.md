# Spiritual Tourism: existing-site audit

Audited 2026-09-26, before any spiritual-tourism page was created.

## 1. Architecture (what the cluster must reuse)

| Area | What exists | Decision |
| --- | --- | --- |
| Framework | Next.js 14 App Router, TypeScript, Tailwind; fully static build (`generateStaticParams`, `dynamicParams = false`) | Reuse. No new dependencies |
| Blog routing | ~583 hand-built guide folders (`src/app/blog/<slug>/page.tsx`) take precedence; `src/app/blog/[slug]/page.tsx` renders JSON articles for the things-to-do, adventure, beach and wildlife clusters | Add a `spiritual` JSON cluster to the same route. No second routing system |
| Article template | `ClusterArticleView` (components/adventure/AdventureArticle.tsx): H1, dek, breadcrumb, quick answer, key takeaways, first CTA, sections with facts and tables, safety, packing, plan block (second CTA), FAQs, related, sidebar | Reuse with a `SPIRITUAL_CLUSTER` config (hub, CTA copy) |
| Validation | `scripts/adventure/build.py --cluster X` (fields, URL map, quick answer, FAQ count, title/meta length and uniqueness, word floor, banned phrases, em dashes, links and anchors, credited images, unique heroes); `verify-html.py` on the built HTML | Extend to `--cluster spiritual` |
| Hubs | `/adventure-travel`, `/beach-travel`, `/wildlife-tourism` (CollectionPage + ItemList + BreadcrumbList + FAQPage) | New hub `/spiritual-tourism` on the same pattern |
| Packages | `/packages/<state>` (all states and UTs), travel styles including **`/packages/spiritual-tours`** ("Spiritual & Pilgrimage"), combo circuits including **`/packages/char-dham-yatra`**, golden-triangle and northeast-india | Reuse. Add blocks to the spiritual style page and state pages. One new combo (`buddhist-circuit`), because all its stops already have guides. No invented prices |
| SEO | Per-page metadata with absolute canonical, Open Graph, Twitter; guides carry BlogPosting, Place, BreadcrumbList and FAQPage JSON-LD; Organization and WebSite in the layout; `sitemap.ts` lists posts, packages and hubs; `robots.ts` allows all except `/api/` and `/admin/` | Reuse. Add the hub to the sitemap; articles enter it through `blog-posts.ts` |
| Images | Local WebP under `public/images/...`, every file credited in `public/images/blogs/IMAGE_CREDITS.json`; Commons pipeline `scripts/adventure/images.py` | New heroes in `public/images/spiritual/`; inline images reuse credited photos of the same site only |
| CTAs | `GuideTripCTA` (quiet pointer lines plus a Plan My Trip box on guides); cluster articles have two CTAs; `/plan-your-trip?from=` | Add a spiritual pointer line to guides; two CTAs per article |
| Categories | Blog index categories include Heritage, Things to Do, Adventure Travel, Beach Travel, Wildlife Tourism | Add "Spiritual Tourism" |

## 2. Existing spiritual content (reuse, do not duplicate)

A keyword scan of `docs/blog-post-links.csv` found **218 pages** with pilgrimage, temple, monastery, gurdwara, dargah or sacred-city intent. They are mostly Heritage-category guides plus about 60 things-to-do articles. The strongest are listed below. Each already owns its destination intent, including darshan, how to reach, where to stay and a day plan.

| Tradition / theme | Existing guides that own the destination intent |
| --- | --- |
| Jyotirlingas | Somnath, Srisailam (Mallikarjuna), Ujjain (Mahakaleshwar), Omkareshwar, Kedarnath, Varanasi (`#kashi-vishwanath`), Deoghar (Vaidyanath), Dwarka (mentions Nageshwar), Rameswaram, Nashik things-to-do (Trimbakeshwar), Aurangabad things-to-do (Grishneshwar) |
| Char Dham | Yamunotri, Gangotri, Kedarnath, Badrinath, Haridwar (`#char-dham-gateway`), Uttarakhand guide; Dwarka, Puri, Rameswaram; `/packages/char-dham-yatra` |
| Shakti Peethas | Kamakhya, Tarapith, Tripura Sundari (Matabari), Danteshwari, Katra (Vaishno Devi), Kolhapur (Mahalaxmi), Vijayawada (Kanaka Durga), Rajrappa |
| Buddhist | Bodh Gaya, Sarnath, Kushinagar, Rajgir, Nalanda, Vaishali, Shravasti, Sanchi, Vikramshila, Sirpur, Amaravati, Tawang, Thiksey, Hemis, Lamayuru, Dharamshala, Ravangla, Namsai |
| Sikh | Golden Temple, Amritsar, Anandpur Sahib, Fatehgarh Sahib, Tarn Taran, Sultanpur Lodhi, Patna (Patna Sahib) |
| Jain | Palitana, Parasnath (Sammed Shikharji), Mount Abu (Dilwara), Junagadh & Girnar, Pawapuri |
| Sufi / Islamic | Ajmer, Nizamuddin, Old Delhi (Jama Masjid) |
| Sacred cities | Varanasi, Ayodhya, Haridwar, Mathura, Vrindavan, Govardhan, Prayagraj, Ujjain, Pushkar, Puri, Tirupati, Madurai, Shirdi, Gaya, Gangasagar, Mayapur, Naimisharanya, Tiruvannamalai, Guruvayur, Udupi, Kanchipuram, Chidambaram, Thanjavur, Khatu Shyam Ji |
| Things to do | Varanasi, Ayodhya, Haridwar, Rishikesh, Mathura, Vrindavan, Prayagraj, Ujjain, Puri, Tirupati, Madurai, Rameswaram, Amritsar, Bodh Gaya, Rajgir, Patna, Dwarka, Nashik, Pushkar, Ajmer, Udupi and more |

**Itinerary anchors already on the guides** (used instead of new itinerary pages):
- `#visit-plan`: Varanasi, Ayodhya, Haridwar, Mathura, Vrindavan, Prayagraj, Rameswaram, Puri, Amritsar, Golden Temple, Pushkar, Madurai, Kedarnath, Badrinath, Srisailam, Yamunotri, Gangotri, Ajmer.
- `#itinerary`: Ujjain, Somnath, Dwarka, Shirdi, Tirupati, Bodh Gaya, Omkareshwar, Deoghar, Palitana, Parasnath, Katra, Kamakhya.

## 3. What is missing

- No hub or overview of spiritual tourism, pilgrimage places or famous temples.
- No Jyotirlinga list or yatra planning page. There are no destination pages for **Trimbakeshwar, Bhimashankar, Grishneshwar or Nageshwar**, the four Jyotirlingas without a guide.
- No Char Dham planning guide, and no page explaining the national Char Dham as distinct from the Uttarakhand Char Dham.
- No Shakti Peetha, Buddhist Circuit, Panj Takht, Jain pilgrimage or Sufi shrines overview.
- No guides for **Hemkund Sahib, Ranakpur or Shravanabelagola**, all high-demand sacred sites.
- No state-level spiritual pages, no pilgrimage planning or packing guide, no yoga or retreat content, and no festival or Kumbh guide.

## 4. Reuse, expand, consolidate, do not create

- **Reuse:** every guide in section 2 stays the canonical page for its place. New pages link to them, and they get a one-line pointer into the cluster (`GuideTripCTA`).
- **Expand:**
  - `/packages/spiritual-tours` gets a guide block.
  - State package pages get a "Spiritual places in <state>" block.
  - The family, budget, weekend and group style pages get a short block.
- **Consolidate:**
  - Spiritual, religious and pilgrimage tourism all go to one hub.
  - Holy places and spiritual destinations go to best pilgrimage places.
  - Temple tourism, the denomination temple lists and ancient temples go to famous temples.
  - Route, itinerary, cost and tour variants go to one planning page per circuit.
- **Do not create:**
  - separate pages for Jyotirlingas that already have a guide;
  - Varanasi 2-day and 3-day itineraries (the guide has `#visit-plan`);
  - Punjab, Telangana, Assam and Goa spiritual pages;
  - eight of the ten origin-city pages;
  - year-specific festival pages other than the Kumbh schedule.

## 5. URL conflicts and cannibalisation risks

| Risk | Handling |
| --- | --- |
| `/packages/char-dham-yatra` vs a blog "Char Dham Yatra" page | Blog slug `char-dham-yatra-guide`, H1 "Char Dham Yatra Guide…", informational/planning intent; links to the package as the commercial next step |
| Jyotirlinga temple guides vs the Jyotirlinga pillar | The pillar is a list and overview; each temple row links to its guide |
| `rishikesh-adventure-travel-guide` and `things-to-do-in-rishikesh` vs yoga in Rishikesh | The yoga page covers courses, ashrams and choosing a school; the guides cover the town |
| Name collisions | `damdama-lake-travel-guide` is a Haryana lake, not Takht Damdama Sahib. `dwarka-delhi-travel-guide` is not Dwarka, Gujarat. `sultanpur-national-park-travel-guide` is not Sultanpur Lodhi. `udaipur-tripura-travel-guide` is not Udaipur, Rajasthan. `namchi-travel-guide` describes Sikkim's Char Dham replica complex (Siddhesvara Dham), not the Char Dham. Links were checked against the right slugs |
| Things-to-do vs state spiritual pages | State pages compare places and route them; things-to-do pages cover everything in one city |
| Tour packages vs itinerary pages | Itineraries are informational day plans with no prices; packages stay commercial |

## 6. Internal-linking opportunities

- **Target chain:** hub → tradition or circuit page → state page → city guide → temple section or guide → things to do → itinerary anchor → package → Plan My Trip.
- **Guide pointers:** about 60 guides get a pointer to the most relevant cluster page. Examples: Deoghar → the 12 Jyotirlingas; Kamakhya → Shakti Peethas; Bodh Gaya → Buddhist Circuit; Palitana → Jain pilgrimage.
- **Cross-cluster links, only where relevant:**
  - Adventure: Kedarnath and Hemkund treks and winter treks.
  - Beach: Puri, Rameswaram, Dwarka and Gokarna.
  - Wildlife: Bhimashankar sanctuary and Gir near Somnath.
  - Heritage guides: Hampi, Khajuraho and Ellora.
