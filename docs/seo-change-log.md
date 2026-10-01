# SEO Change Log

Site-wide SEO / AEO / GEO pass, started 2026-09-30. One entry per major change: URL, old state, new state, reason, intent, and what changed in links, redirects, schema and content. Companion files: `final-seo-audit-report.md`, `seo-audit-progress.md`, `complete-url-inventory.csv`.

`dateModified` was changed only on pages whose content materially changed (listed below). No date was bumped just to look fresh.

---

## 1. Factual correction: the two Daman forts (5 guides)

| | |
|---|---|
| **URLs** | `/blog/nani-daman-travel-guide`, `/blog/moti-daman-fort-travel-guide`, `/blog/moti-daman-travel-guide`, `/blog/daman-travel-guide`, `/blog/dadra-nagar-haveli-daman-diu-travel-guide` (hub link text) |
| **Old state** | The guides called **Moti Daman Fort** the "Fort of St. Jerome" (including in the Moti Daman Fort page's title and H1). They placed an invented "Fort of St. Francis Xavier" in Nani Daman and described it as "fragments absorbed into the town". They also put Daman's lighthouse in Nani Daman. |
| **Facts (verified)** | The **Fort of St. Jerome** (Nani Daman Fort) is on the north bank: built 1615–1627, ~12,250 sq m, three bastions, two gateways, a statue of St. Jerome over the river gate, and the Church of Our Lady of the Sea inside. **Moti Daman Fort** is on the south bank: built 1559–1581, ~30,000 sq m, 10 bastions, with the Bom Jesus church, the old lighthouse and the government buildings inside. Sources: [ddd.gov.in: Fort of St. Jerome](https://ddd.gov.in/places-centres/fort-of-st-jerome-daman/), [Incredible India: Fort of Moti Daman](https://www.incredibleindia.gov.in/en/dadra-and-nagar-haveli-and-daman-and-diu/daman/fort-of-moti-daman). The site's own `things-to-do-in-daman` article already had this right. |
| **New state** | **Nani Daman:** title and H1 now "Nani Daman Travel Guide: St. Jerome Fort, Jetty & Harbour"; the fort section is rewritten from the official description, with a source link; the lighthouse section becomes "Views Across to Moti Daman"; FAQ, itinerary, tips and budget are corrected. **Moti Daman Fort:** title "Moti Daman Fort: History, Bastions & Visiting Guide"; the "same as St. Jerome" FAQ now answers "No" and explains the difference; exact build dates (1559–1581) replace "1550s–70s"; the page links to the St. Jerome fort. **Moti Daman and Daman guides:** every mislabelled "Fort of St. Jerome" is now "Moti Daman Fort"; the fake Xavier fort is removed. The corrected titles are also updated in `blog-posts.ts`, `state-hub-children.json`, the hub page, `llms.txt` and `blog-post-links.csv`. |
| **Reason** | Factual accuracy (E-E-A-T). The entity error also confused two distinct `TouristAttraction` entities for search engines and AI answers. |
| **Intent / keyword** | "Nani Daman fort" / "Fort of St Jerome" now resolves to the Nani Daman guide; "Moti Daman Fort" resolves to the fort guide. There is no URL change and no redirect. |
| **dateModified** | 2026-09-30 on the four content pages. |

## 2. New commercial authority page: `/best-travel-agency-in-india`

| | |
|---|---|
| **Old state** | The homepage title and H1 carried the phrase ("Best Travel Agency in India for Trips Made Around You"). That read as an unsupported superlative, and the homepage had no room to answer the comparison question the SERP asks. |
| **New state** | A new page, `src/app/best-travel-agency-in-india/page.tsx`. H1: "Best Travel Agency in India for Customized Trips". Sections: a quick answer (what makes an agency the best choice); a table of agency types (group-tour operators, OTAs/marketplaces, customized planners, local ground operators); a six-point verification checklist citing the Ministry of Tourism's voluntary approval scheme and the National Government Services Portal search; where Kudozz Club fits (including what it doesn't do); the four-step process; 12 travel styles, each linked to its package page and guide hub; 10 region/circuit entries using the real best months and first route from `destination-profiles.ts` (this covers "travel agency for Rajasthan / Kerala / Kashmir / Himachal / Uttarakhand / Northeast trips" without doorway pages); 7 FAQs; CTA. |
| **Claims** | No ranking, award, registration, customer-count or price claims. The page tells readers to apply the checklist to Kudozz Club as well. |
| **Schema** | `WebPage`, `BreadcrumbList`, a `Service` with an `OfferCatalog` of travel-style services (no prices), `FAQPage`. All reference `#organization`. |
| **Links in** | Homepage (FAQ and trust section), About, `/packages`, footer (Company → "Choosing a Travel Agency"), sitemap (priority 0.9), `llms.txt`. |
| **Intent** | Owns "best travel agency in India", "top travel agencies in India", "best tour operator in India", "how to choose a travel agency in India". |

## 3. Homepage repositioned to own the brand and "India travel agency"

| | |
|---|---|
| **Title** | "Best Travel Agency in India \| Customized Trips \| Kudozz Club" → "Kudozz Club: India Travel Agency for Customized Trips & Tours" |
| **Description** | Now leads with "India travel agency for customized trips and tour packages". |
| **H1** | "Best Travel Agency in India for Trips Made Around You" → "India Travel Agency for Trips Planned Around You" |
| **Other** | New FAQ "Is Kudozz Club the best travel agency in India?" with an honest answer, plus a visible link to the new page from the trust section. The meta keywords list leads with "travel agency in India" and "India travel agency". |
| **Reason** | One URL per intent: the homepage is the navigational/brand + "India travel agency" owner, and the new page is the "best travel agency in India" commercial-investigation owner. It also removes an unsupported superlative from the H1. |

## 4. Organization entity, logo, social profiles

- `src/app/layout.tsx`: the Organization and WebSite nodes are merged into one `@graph`. Added: a 512×512 `ImageObject` logo (`/logo.png`, generated from the existing header globe mark; it replaces the 88px `favicon.ico`), a `ContactPoint` (reservations, email, Plan My Trip URL, India, English), `publishingPrinciples` → `/editorial-policy`, expanded `knowsAbout`, and `inLanguage`.
- **Removed `https://twitter.com/kudozz.in`** from `sameAs` and removed `twitter:site` / `twitter:creator` (`@kudozz.in`). X handles cannot contain dots, and `x.com/kudozz.in` returns 404. **Kept `https://www.instagram.com/kudozz.in/`** after confirming the profile resolves ("Kudozz (@kudozz.in)"). A visible Instagram link was added to the footer (`rel="me"`) for consistency.
- `alternateName` trimmed to the three brand misspellings; "Kudos" and "Kudoz" alone were dropped because they are generic words.
- New icons: `/logo.png` (512), `/icon-192.png`, `/apple-touch-icon.png`. `site.webmanifest` was rewritten (it said "the world's… seasoned explorers" and used a purple theme colour) and is now linked.

## 5. Guide structured data and breadcrumbs (582 hand-written guides)

Script: `scripts/seo-audit/codemod-guide-schema.py` (idempotent).

- `BreadcrumbList` moved out of `BlogPosting.breadcrumb` (a WebPage-only property) into a top-level `@graph` node.
- Publisher and author now use `@id: #organization`, with `url` and the 512px logo.
- One relative schema image (Manali) made absolute.
- **Breadcrumbs unified.** Each guide hand-coded its trail, and 179 of them skipped the state level (Home › Blog › Place). All 582 now render the shared `<GuideBreadcrumb>` and `guideBreadcrumbSchema()` (`src/components/ui/GuideBreadcrumb.tsx`), built from the state data: **Home › Destinations › State › Place** (hubs: Home › Destinations › State). The visible trail and the schema are generated from the same function, so they can't disagree.

## 6. Heading hierarchy (581 guides)

- The static guide template used `h4` directly under `h2` for "At a Glance" boxes, Do/Don't cards, itinerary days and FAQ questions (4,650 skips). All `h4` are now `h3 data-box`.
- `globals.css`: `.prose-travel h3` → `.prose-travel h3:not([data-box])`, so these box headings keep their exact previous styling. **No visual change.**

## 7. `/destinations` rebuilt as the India → Region → State → Place directory

| | |
|---|---|
| **Old state** | 3.5 MB of HTML: one flat grid of ~600 image cards, a 900-line hand-written array that duplicated `blog-posts.ts`, and a stats bar showing the same number twice ("Destinations" and "Guides published"). |
| **New state** | Six region sections (North, Northeast, East, Central, West, South), each with a one-paragraph factual intro. Every state/UT gets a card linking its hub guide, its tour package page and its things-to-do guide, plus an alphabetical list of every destination guide in that state, each with a "things to do" link where one exists. Data comes from `all-states-data.ts`, the same source as the package pages. The featured picks, hero and CTA are kept. The stats are now States & UTs / Destination guides / Things-to-do guides / Regions. |
| **H1 / title** | "India Travel Destinations, State by State" / "India Travel Destinations by Region & State". |
| **Schema** | `CollectionPage` + `ItemList` of the 36 states/UTs + a top-level `BreadcrumbList`. |
| **Why** | Phase 15 entity architecture made explicit in HTML, a large page-weight cut, and one canonical "places to visit in India by state" page. |

## 8. Open Graph / social metadata

- `/blog`, `/contact`, `/destinations`, `/image-credits`, `/newsletter` and `/write-for-us` set no `openGraph`, so they **inherited the homepage's og:title and og:url**; shares of those pages pointed at the homepage. They now use a new helper, `pageSocial()` in `src/lib/site.ts`.
- `/about`, `/packages` and `/plan-your-trip` had no `og:image`; they now use `/og-default.jpg`.

## 9. One modified date per URL, and a visible "Last updated"

- `src/lib/blog-lastmod.json` (the sitemap's lastmod) was last generated on 2026-09-14 and disagreed with the schema `dateModified` on 264 guides. It had no dates at all for the 447 JSON articles.
- New `scripts/seo-audit/sync-lastmod.py`. The guide's schema `dateModified` is the source of truth; where the git-derived lastmod was later (real edits such as the wrong-destination image corrections), that later date wins and is written back into the schema (260 guides). JSON articles use their `updated` field (Things to Do articles: 2026-09-25). All 1,029 URLs now have one consistent date.
- Visible "Published by the Kudozz Club editorial team · Last updated <date> · How we research our guides" line at the end of every guide and Things to Do article (`AboutThisGuide` in `RelatedPosts.tsx`). Cluster articles already showed "Updated <month year>".

## 10. `/editorial-policy` (new) and About updates

- The new page covers who publishes the guides, the research sources (official tourism departments, the Ministry of Tourism, park authorities, ASI, railways, airports), how facts that change are handled, the date policy, independence, image licensing and corrections. It makes no first-hand-visit claims. It is linked from the Organization schema (`publishingPrinciples`), About, the footer and every guide's "About this guide" line.
- About: new FAQs "Is Kudozz Club a travel agency or a travel blog?" and "How do I contact Kudozz Club?" (form, email, Instagram), plus links to the editorial policy and the agency-comparison page.

## 11. Navigation, footer, sitemap

- Header: 10 links → 5 links + a **Travel Styles** menu holding all 8 cluster hubs. Before, Hill Stations, Nature Travel and Road Trips were missing from the header, while Adventure, Beaches, Wildlife, Spiritual and Heritage each took a slot. The menu is always in the DOM (shown with CSS on hover or focus, and toggled by a button with `aria-expanded`), so every hub stays crawlable. Mobile: a "Travel styles" grid in the drawer.
- Footer: + Adventure Trips, Wildlife Safaris, Northeast India, Choosing a Travel Agency, Editorial Policy, Instagram.
- Sitemap: + `/best-travel-agency-in-india` (0.9), `/editorial-policy` (0.3).

## 12. `/packages` (owner of "India tour packages")

- Previously under 600 words, with only a hero and card grids. Added: a visible breadcrumb; an answer-first "How our India tour packages work" box (counts are computed from the data: 36 states/UTs, 4 circuits, 13 styles); 6 FAQs (none states what is booked, which is unconfirmed; see `human-input-required.md` 3.5); a link to the agency-comparison page.
- Schema: `CollectionPage` + `ItemList` of all 53 package pages + `BreadcrumbList` + `FAQPage`. Title → "India Tour Packages: Customized Trips by State & Style".

## 13. Delhi / Chandigarh area guides: planning CTA fixed

- Guides under the Delhi and Chandigarh hubs are neighbourhoods, sectors, markets and single attractions (Laxmi Nagar, Najafgarh, Sector 22, Rose Garden…). Their CTA read "Plan My Laxmi Nagar Trip". `guide-context.ts` now marks them `cityArea`, and the CTA plans **Delhi** or **Chandigarh** while keeping the package link. The pages stay indexed: their content is candid and unique ("this is a working neighbourhood, not a heritage site").

## 14. Guide counts made accurate everywhere

- `site.ts` now exports `guideCountLabel` (all guides, "1,020+", formatted en-IN) and `destinationGuideLabel` (place guides, "580+"). The footer ("in-depth destination guides"), the agency page, `/blog` meta ("1,000+ India travel guides"), and the blog and Write for Us stat tiles (which said "580+ Guides" against 1,029 posts) are fixed.

## 15. Title tags

- 274 guides whose title plus " | Kudozz Club" exceeded 65 characters now use `title: { absolute }` without the suffix (Google shows the site name separately).
- 40 guides whose titles were too long even without the brand were rewritten to 47–60 characters (`scripts/seo-audit/title-fixes.json`), keeping "<Place> Travel Guide" and the main entities. H1 and schema headline are unchanged. One factual tweak: Thekkady's title now says "Periyar Tiger Reserve", its official designation.
- 195 JSON articles: the " | Kudozz Club" suffix was dropped where `seoTitle` exceeded 65 characters.

## 16. `llms.txt`

- New header block: what Kudozz Club is (a travel agency that also publishes guides), where (India, 36 states/UTs), how to start, the official Instagram, and an explicit list of what is **not** published (address, phone, team, customer numbers, ratings, awards, registrations), so AI answers don't invent them.
- Key pages + the agency-comparison page + the editorial policy; a new "Travel styles Kudozz Club plans" section; package-index counts; the breadcrumb pattern.

## 17. Wrong-destination and placeholder images (56 guides)

The earlier image audit had left **"representative" images from other places**: photos of one destination labelled as "representative of" or "evoking" another. Examples: Shirdi's hero was Jaisalmer; Canacona and Morjim (Goa beaches) used Meghalaya; Wagah Border, Satkosia and Murlen used Kashmir; Amaravati used Hampi; Nandi Hills, Deomali and Mount Saramati used Rohtang Pass; Haflong, Daringbadi, Mainpat and Lambasingi used Solang Valley; five Chandigarh sector and attraction pages used a Rock Garden photo described as a lake, a street and a park; Panjim used a Palolem beach scene; Zeilad Lake used Doyang Reservoir in Nagaland. This broke the rule "never use a photo of one destination to represent another".

| Fix | Guides |
|---|---|
| **Replaced with a free-licence Commons photo of the actual place** (existing pipeline rules: CC0/PD/CC BY/CC BY-SA; each shortlist reviewed visually on contact sheets; credited in `IMAGE_CREDITS.json` and so on `/image-credits`) | Haflong, Daringbadi, Mainpat, Lambasingi, Achanakmar, Amaravati, Bhitarkanika, Danteshwari Temple, Deomali, Jorhat, Kanger Valley, Kanker, Khatu Shyam Ji, Koraput, Kuno, Morjim, Mount Manipur, Murthal, Nandi Hills, Palak Dil, Satkosia, Silchar, Surajkund, Thenzawl, Tirathgarh, Valmiki Nagar, Valparai, Wagah Border, Walong (29) |
| **Reused an existing, credited photo of the same place** | Canacona → Palolem Beach (Palolem is in Canacona); Rangat → Rangat Bay |
| **No free photo of the place exists on Commons, so a non-photographic Kudozz Club cover replaces the wrong-place photo** (a textless pattern hero on the page; a titled cover for Open Graph and blog cards; alt text says it is a cover). Candidates for commissioned or purchased photography. | Barnawapara, Bhindawas, Dampa, Longwa, Mohali, Mon, Mount Saramati, Murlen, Peren, Roing, Saranda, Shirdi, Similipal, Sultanpur Lodhi, Mayabunder, Zeilad Lake, Panjim, Sectors 22/26/35, Shanti Kunj, International Dolls Museum, Chandigarh Botanical Garden (23) |
| **Correct photo, hedged or wrong alt text rewritten** | Ajodhya Hills, Bishnupur (terracotta, not "stone"), Cooch Behar, Murshidabad, Santiniketan, Shnongpdeng (Umngot river) |

Each changed guide's hero, OG image, Twitter image, schema image and `blog-posts.ts` card image were updated together, and `dateModified` was set to 2026-09-30.
