# Heritage & Cultural Tourism: existing-site audit

Audited 2026-09-26, before any heritage-cluster page was created.

## 1. Architecture (reused as-is)

| Area | What exists | Decision |
| --- | --- | --- |
| Framework and routes | Next.js 14 App Router, TypeScript, Tailwind; fully static. About 583 hand-built guide folders under `src/app/blog/<slug>`; JSON clusters (things to do, adventure, beach, wildlife, spiritual) rendered by `src/app/blog/[slug]/page.tsx` | Add a `heritage` JSON cluster to the same route. No new routing |
| Templates | `ClusterArticleView`: H1, dek, breadcrumb, quick answer, takeaways, CTA, sections (facts boxes, tables, lists, images), safety, packing, plan block (second CTA), FAQs, related, sidebar | Reuse with a `HERITAGE_CLUSTER` config |
| Validation | `scripts/adventure/build.py --cluster X` and `verify-html.py` | Extend to `heritage` |
| Packages | `/packages/<state>`, travel styles (family, honeymoon, weekend, group, adventure, wildlife, spiritual, luxury, budget), combo circuits (Golden Triangle, Char Dham, Northeast, Buddhist Circuit). There is no heritage style | Add a **Heritage & Culture** travel style (`/packages/heritage-tours`), with no prices, like the other styles; add heritage blocks to state and combo pages |
| SEO | Absolute canonicals, OG and Twitter metadata; BlogPosting, Place, BreadcrumbList and FAQPage on guides; Organization and WebSite in the layout; `sitemap.ts`; `robots.ts` allows everything except `/api/` and `/admin/` | Reuse. Hub added to the sitemap; articles enter through `blog-posts.ts` |
| Images | Local WebP with `IMAGE_CREDITS.json`; about 355 credited heritage photos already exist, named by site (for example `red-fort-delhi.webp`, `rani-ki-vav-patan.webp`) | New heroes in `public/images/heritage/`; inline images reuse credited photos of the same site only |
| CTAs | `GuideTripCTA` pointer lines; two CTAs per cluster article; `/plan-your-trip` | Add a heritage pointer line ("Interested in the history? See our guide to …") |

## 2. Existing heritage content

- **Scale.** A keyword scan of `docs/blog-post-links.csv` found about **262 existing pages** with heritage or cultural intent:
  - 75 Heritage-category guides;
  - 55 destination guides;
  - 37 off-beat guides;
  - 77 things-to-do articles.
- **Main group.** The "Heritage" blog category alone has 158 guides.

| Theme | Existing guides that already own the destination intent |
| --- | --- |
| UNESCO sites | Agra (Taj, Agra Fort), Fatehpur Sikri, Jaipur (Jantar Mantar, City Palace), Ahmedabad, Patan (Rani ki Vav), Dholavira, Ajanta and Ellora, Mumbai (CSMT), Hampi, Badami-Aihole-Pattadakal, Mahabalipuram, Thanjavur, Khajuraho, Sanchi, Bhimbetka, Konark, Bodh Gaya, Nalanda, Sarnath, Santiniketan, Old Goa, Sivasagar, Chittorgarh, Kumbhalgarh, Golconda |
| Forts and palaces | Chittorgarh, Kumbhalgarh, Gwalior, Golconda, Jaisalmer (Rajasthan desert guide), Diu Fort, Moti Daman Fort, Ujjayanta Palace, Bundi, Orchha, Mandu, Mysuru, Udaipur, Jodhpur |
| Cities | Delhi and its neighbourhoods (Old Delhi, Mehrauli, Nizamuddin, Tughlaqabad, Hauz Khas, Lodhi Garden, New Delhi), Lucknow, Hyderabad, Kolkata, Mumbai, Kochi, Puducherry French Quarter, Varanasi, Amritsar, Murshidabad, Bishnupur, Cuttack |
| Archaeology and caves | Dholavira, Bhimbetka, Nalanda, Sanchi, Barabar Caves, Naida Caves, and the natural caves at Belum, Borra and Tharon |
| Railways | Darjeeling, Shimla and Ooty guides (the toy trains) |
| Things to do | Agra, Delhi, Old Delhi, Jaipur, Jodhpur, Udaipur, Jaisalmer, Bikaner, Bundi, Chittorgarh, Hampi, Khajuraho, Orchha, Mandu, Gwalior, Lucknow, Hyderabad, Kolkata, Mumbai, Ahmedabad, Kutch, Vadodara, Kochi, Pondicherry, Goa, Mysore, Thanjavur, Madurai, Mahabalipuram, Warangal, Aurangabad and more |

## 3. Gaps

- **No overviews.** There was no hub, UNESCO list, forts, palaces, archaeology, caves, architecture, museums, crafts, textiles, performing arts, cultural festivals, tribal culture, food heritage or heritage railways overview.
- **Missing monument pages.** The seven most-searched monuments had no page of their own: the Taj Mahal, Red Fort, Qutub Minar, Humayun's Tomb, Amber Fort, Mehrangarh and the Elephanta Caves. The city guides mention them, but visit-planning intent (history, what to see, closures, how to reach) is distinct.
- **UNESCO sites without a guide:** Champaner-Pavagadh, Lothal (a Harappan site on the Tentative List) and the Hoysala temples of Belur, Halebidu and Somanathapura (inscribed 2023).
- **No state heritage pages,** no heritage itineraries (except the Golden Triangle combo package) and no heritage walks guide.

## 4. Reuse, expand, consolidate, do not create

- **Reuse.** Every guide in section 2 stays canonical for its place. City "Heritage of X" and "heritage walk X" pages were **not** created, because the city guides and things-to-do articles already satisfy those intents; the walks pillar links to them.
- **Update existing.** About 100 guides get a heritage pointer. `/packages/golden-triangle` gets a planning-guide block, and state packages get a heritage block.
- **Consolidate:**
  - heritage tourism, cultural tourism, heritage travel and cultural destinations go to the **hub**;
  - best heritage destinations and Indian heritage sites go to **historical places**;
  - individual crafts, textiles, dances and festivals go to sections of one pillar each.
- **Do not create:**
  - "cultural heritage of India" (educational intent);
  - 10 state pages with thin heritage demand or better coverage elsewhere;
  - traveller-type near-duplicates;
  - year-specific festival pages.

## 5. Cannibalisation risks and handling

| Risk | Handling |
| --- | --- |
| Monument pages vs city guides (Taj Mahal vs Agra, Red Fort vs Old Delhi, Qutub vs Mehrauli, Humayun's Tomb vs Nizamuddin, Amber vs Jaipur, Mehrangarh vs Jodhpur) | Monument pages focus on the site (history, what to see, closures, how to reach, time needed); city guides focus on the city. They link both ways |
| `/packages/golden-triangle` vs a Golden Triangle itinerary | The blog itinerary is a day-by-day plan with no prices; the package is commercial |
| Heritage state pages vs spiritual state pages vs state travel guides | Heritage covers monuments, crafts and culture; spiritual covers pilgrimage; the state guide covers general travel |
| Durga Puja, Navratri and Kumbh | Already in the spiritual festivals page; the cultural festivals page links rather than repeats |
| Name collisions to avoid | `udaipur-tripura-travel-guide` is not Udaipur, Rajasthan; `jal-mahal-narnaul` is not Jaipur's Jal Mahal; `dwarka-delhi` is not Dwarka, Gujarat |

## 6. Internal-linking opportunities

- **Chain:** hub → heritage type (UNESCO, forts, palaces, caves and others) → state heritage page → city guide → monument page → things to do → itinerary → package → Plan My Trip.
- **Cross-cluster links:**
  - spiritual (temples and Buddhist sites);
  - wildlife (UNESCO natural sites);
  - adventure (Maharashtra fort treks);
  - beach (Goa, Diu, Puducherry colonial heritage);
  - luxury, family and group packages.
