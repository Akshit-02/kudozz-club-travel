# Kudozz Club — SEO Audit

**Updated:** 2026-09-24. Part A covers the travel-agency rebrand pass (technical fixes, metadata, schema, performance). Part B is the original 2026-09-14 audit, kept for history. Its fixes (dynamic sitemap, 72 breadcrumb repairs, etc.) are still in place.

---

# Part A — 2026-09-24 rebrand pass

## A1. Technical fixes

| Issue | Fix | File(s) |
|---|---|---|
| Root layout set `alternates.canonical` to the homepage. Every page without its own canonical, including the 404 page, inherited `canonical: /`. | Removed the site-wide default. Every indexable page sets its own; verified on 14 key routes. | `src/app/layout.tsx` |
| Google Fonts loaded by a render-blocking CSS `@import` (3 families, 13 weights). | Switched to `next/font` (self-hosted, size-adjusted fallbacks, no third-party request). Dropped unused Playfair italics; body serif no longer preloaded. | `layout.tsx`, `globals.css` |
| Homepage hero was a 3-slide client-side carousel whose H1 changed every 5 s. | Single static server-rendered hero, image with `priority`. | `src/app/page.tsx` |
| 31 source JPEGs of 2–10 MB (up to 14,183px wide). The first request after a deploy stalled while Next's image optimiser resized them. | Resized in place to ≤2560px, EXIF kept, same filenames (no URL changes): **113.8 MB → 22.1 MB**. | `public/images/destinations/**` |
| Client components (`/contact`, `/plan-your-trip`, `/write-for-us`, `/blog`) rendered the header/footer inside the client boundary, shipping the full post list to the browser. | Header/footer now render from the server page. `/contact` first-load JS **183 → 99 kB**; `/plan-your-trip` **184 → 101 kB**. | 4 page/client pairs |
| 3 broken internal links (`/blog/goa-travel-guide`, `/blog/kerala-travel-guide`, `/privacy`) | Fixed/removed. New `npm run check:links` verifies every blog slug, package slug, image path and route in `src/` (13,000+ references) and fails on any break. | `scripts/check-links.mjs` |
| `llms.txt` said only Rajasthan had a package page; described the site as a publication. | Rewritten header: agency positioning, key pages, site structure/funnel, 3 circuits, 9 styles, all 36 state package URLs, then the full 582-guide index. | `public/llms.txt` |
| No attribution for 693 CC BY / CC BY-SA images (a licence requirement). | New `/image-credits` page generated from `IMAGE_CREDITS.json` (noindex, follow; linked in footer). | `src/app/image-credits/page.tsx` |
| Sitemap lacked the new circuit pages; commercial pages had lower priority than guides. | Added 3 circuits; `/packages` and `/plan-your-trip` at 0.9, package pages at 0.8. | `src/app/sitemap.ts` |
| `dynamicParams` on `/packages/[slug]` | Set to `false`, so unknown slugs return a real 404 (verified). | `packages/[slug]/page.tsx` |

**Checked and fine:** `robots.txt` (allows all, disallows `/api/`, `/admin/`, points to sitemap); no `noindex` on indexable pages; trailing-slash redirect for `/blog/`; every indexable page has exactly one H1 and a self-canonical; all 650 pages statically prerendered (no client-side rendering of content).

## A2. Metadata

Titles use the `%s | Kudozz Club` template unless noted. Measured lengths:

| URL | Title | H1 |
|---|---|---|
| `/` | Best Travel Agency in India \| Customized Trips \| Kudozz Club (60, absolute) | Best Travel Agency in India for Trips Made Around You |
| `/about` | About Kudozz Club \| India Travel Agency (absolute) | We Know India. Now Let Us Plan Your Trip. |
| `/contact` | Contact Kudozz Club \| Plan Your Next Trip (absolute) | Let's Plan Your Next Trip |
| `/plan-your-trip` | Plan Your Trip \| Custom India Itinerary | Plan Your Trip With Kudozz Club |
| `/packages` | India Tour Packages: Customized Holidays | India Tour Packages |
| `/packages/<state>` | `<Name> Tour Packages: Customized Itineraries` (shortened for long names) | `<Name> Tour Packages` |
| `/packages/<circuit>` | `<Circuit> Tour Packages` | same |
| `/packages/<style>` | `<Style> Packages in India` | same |
| `/destinations` | India Travel Destinations by State | India Travel Destinations |
| `/blog` | India Travel Guides: Itineraries, Best Time & Budgets | India Travel Guides |

Descriptions were rewritten to ≤ ~160 characters on the main commercial pages. Every package page has unique OG and Twitter metadata with a destination-specific image.

## A3. Structured data

| Page | Types |
|---|---|
| Site-wide | `Organization` (with `@id`, `areaServed: India`, agency description), `WebSite` (publisher → Organization) |
| `/` | `WebPage`, `Service` (customized India trip planning), `ItemList` (popular packages), `FAQPage` |
| `/packages/<state>` | `WebPage` + `BreadcrumbList`, `TouristDestination` (with `containedInPlace` region → India, `includesAttraction` → up to 12 guides, `subjectOf` → state guide), `Service`, `FAQPage` |
| `/packages/<circuit>` | `WebPage` + `BreadcrumbList`, `TouristTrip` (itinerary `ItemList` of stops), `FAQPage` |
| `/packages/<style>` | `WebPage` + `BreadcrumbList`, `ItemList` of destinations, `FAQPage` |
| `/plan-your-trip` | `WebPage` + `BreadcrumbList`, `Service` (provider → Organization `@id`) |
| `/about` | `AboutPage` + `BreadcrumbList`, `FAQPage` |
| Guides (unchanged) | `BlogPosting` with `about: Place`, `BreadcrumbList`, `FAQPage` |

**Deliberately not added:** `AggregateRating`/`Review` (no real reviews exist), `Offer`/prices (none are published), `TravelAgency`/`LocalBusiness` (no confirmed address or registration). All JSON-LD blocks were parsed successfully on every checked page.

## A4. Performance (Lighthouse 12, mobile, simulated slow 4G, local production build)

| Page | Before fixes (cold) | After (cold) |
|---|---|---|
| `/` Performance | 70 (LCP 7.6 s; paint held by image-optimiser CPU on cold cache) | **92** (LCP 3.3 s, FCP 1.5 s, CLS 0, TBT 10 ms) |
| `/about` | — | 90 |
| `/image-credits` | — | 88 |
| `/` SEO / Best practices / Accessibility | 100 / 100 / 97 | 100 / 100 / contrast and label issues fixed afterwards |

Not measured: real-user INP/LCP (needs field data from Search Console or CrUX after deploy). Remaining opportunities: GA4's gtag (172 kB) could be deferred further or loaded via Partytown; `/blog` ships its 70 kB post index for client-side search.

---

# Part B — Original audit (2026-09-14)


**Date:** 2026-09-14
**Scope:** Full codebase inspection + programmatic inventory of all 582 published blog posts, 7 static pages, and site infrastructure (sitemap, robots.txt, llms.txt, structured data).
**Method:** Every finding below was verified against the actual codebase (grep/AST-level parsing of `blog-posts.ts`, file inspection, `next build` output, live search research) — nothing here is assumed.

---

## 1. Architecture (as found)

- **Framework:** Next.js 14.2 (App Router), React 18.3, TypeScript 5.4, Tailwind 3.4.
- **Content source of truth:** `src/lib/blog-posts.ts` — a single `posts` array (582 entries: slug, title, excerpt, image, category, tags, readTime, featured) plus a separate `featuredPost` object and a small `readingListItems`/`popularTags` widget data set.
- **Routing:** one static route per post at `src/app/blog/<slug>/page.tsx` (582 directories), each self-contained with its own `Metadata` export, `ArticleSchema()` JSON-LD component, hero, TOC, body sections, and (on most posts) `FAQSchema()`.
- **Verified 1:1 integrity:** every slug in `blog-posts.ts` has a matching page directory and vice versa — **zero broken links, zero orphaned directories** in this dimension.
- **Shared components:** `SiteHeader`, `SiteFooter`, `TableOfContents`, `RelatedSidebar`/`RelatedPostsGrid` (tag+category-weighted, not random — already good), all used consistently.
- **Global metadata/schema:** `src/app/layout.tsx` sets a title template, full OG/Twitter defaults, robots directives, canonical/alternates, and site-wide `Organization` + `WebSite` JSON-LD. This was solid already.
- **Site search:** the header has a search icon but the actual search input is commented out — **not a working feature**, just UI scaffolding. No sitelinks-searchbox schema was added (would be misleading without a working search).
- **Itineraries nav item:** also commented out in `SiteHeader` — no dedicated `/itineraries` hub route exists yet.

## 2. Critical issues found and fixed this session

### 2.1 Sitemap covered only 37% of published content — **fixed**
`public/sitemap.xml` and `public/sitemap-pages.xml` were static, hand-maintained files frozen at **218 URLs** (dated `2026-07-24`/`2026-09-03`), while the site had grown to **582** published posts. `next-sitemap` was installed in `package.json` but never wired into a build script — the files were abandoned artifacts. **365 published pages (63%) had never been submitted to search engines via sitemap.**

**Fix:** replaced both static files with a dynamic `src/app/sitemap.ts` that reads directly from `blog-posts.ts`, so it can never drift out of sync again. It now serves **589 URLs** (582 posts + 7 static pages), with `lastModified` dates pulled from real git commit history (`src/lib/blog-lastmod.json`, generated from `git log`) — not fabricated — and priority weighted 1.0 (home) → 0.9 (blog index) → 0.8 (the 36 state/UT hub guides) → 0.6 (individual destination guides) → 0.4–0.5 (static pages).

### 2.2 72 pages had a non-functional breadcrumb link — **fixed**
Breadcrumbs on 72 child pages linked their state/UT crumb to `/blog?category=<state-slug>` (e.g. `/blog?category=rajasthan`), which looks like a working filter but isn't — `BlogPageClient`'s category filter is `useState`-only and never reads the URL query string. Visitors and crawlers following that link landed on the **unfiltered** blog index instead of the relevant state cluster. 8 of these 72 also had the same broken URL baked into their `BreadcrumbList` JSON-LD.

**Fix:** rewrote all 72 (visible breadcrumb + JSON-LD where present) to point at the correct state/UT hub guide (e.g. `/blog/rajasthan-travel-guide`), including several that used a *place-level* category value that was never a real state (`mumbai`, `gokarna`, `chhatrapati-sambhajinagar`, `tarkarli`, `karaikal`, `mahe`, `yanam`, `ziro-valley`, `islands`) — each mapped to its correct parent hub.

### 2.3 State/UT hub pages barely linked to their own child pages — **fixed**
The single highest-leverage internal-linking gap on the site (see `internal-linking.md`): a state guide like `rajasthan-travel-guide` had only 1–2 contextual links to its own city/destination pages, despite Rajasthan having 19 dedicated Kudozz Club guides. This is the core of items #13–#18 in the brief — state↔city internal linking.

**Fix:** added a data-driven "Places to Explore in `<State>`" section to all **36** state/UT hub pages, linking to every one of that state's child destination guides (real titles as anchor text, no "click here"), plus a matching Table-of-Contents entry. Total: **546 new contextual internal links** added across 36 pages (one link per child post per hub, i.e. every post except the hub itself — genuinely useful navigation, not link spam, since every target is a real, relevant page).

### 2.4 `og-default.jpg` was a broken reference — **fixed**
`layout.tsx` sets a site-wide fallback `openGraph.images: ["/og-default.jpg"]`, but that file never existed in `public/`. The homepage and 4 static pages (`/about`, `/contact`, `/newsletter`, `/write-for-us`) don't set their own OG image, so **every social share of those 5 pages showed a broken image**. Fixed by composing a proper 1200×630 branded card (a verified CC BY-SA 4.0 Ranthambore Fort photo + wordmark overlay) and saving it to `public/og-default.jpg`.

### 2.5 No custom 404 page — **fixed**
No `not-found.tsx` existed, so Next.js served its bare default (no nav, no way back into the site, no signal to crawlers about where the content actually lives). Added a branded `src/app/not-found.tsx` with `noindex` robots meta and links back into `/blog`, `/destinations`, and 6 popular guides.

### 2.6 `llms.txt` was stale and over-claimed first-hand authorship — **fixed**
`public/llms.txt` explicitly said "This index currently covers 218 published guides" (same stale number as the old sitemap — both were generated once and abandoned) and only broke out 9 of the site's 36 states/UTs into named sections; everything else was dumped into one unsorted "States, Regions & Other Destinations" bucket. It also stated twice that all content is **"first-hand travel writing... written by travellers who have actually been there"** — a factual claim I have no basis to support (the site's own JSON-LD attributes every article to the `Organization` "Kudozz Club", not a `Person`, and there is no author-byline system; only the one newly-published guest post is genuinely first-person).

**Fix:** fully regenerated `llms.txt` from the real, current post inventory — **582 guides**, organized into 7 geographic regions and all 36 state/UT sub-sections, each state's flagship hub guide marked 🗺️, plus corrected, defensible language ("researched and written by the Kudozz Club editorial team... a small number of guides are first-person guest contributions, credited as such within the article").

> **Flagged, not changed:** the same "written by people who've actually been there" claim also appears in visible on-page marketing copy (`src/app/destinations/page.tsx` line ~1186) and as an SEO keyword string on `/about`. I left the customer-facing brand copy alone since rewriting site voice/marketing claims is an editorial decision outside a technical SEO pass — but it carries the same E-E-A-T risk and is worth a deliberate decision from the team.

## 3. Technical SEO — already solid (verified, not changed)

- `robots.txt` (`src/app/robots.ts`): allows all except `/api/` and `/admin/`, correctly points at `/sitemap.xml`. No accidental blocking of images/CSS/JS. No blanket AI-crawler blocking.
- `next.config.js`: AVIF/WebP image formats enabled, sensible device/image size steps, security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`), compression on, one sane redirect (`/blog/` → `/blog`).
- Canonical URLs, OG, and Twitter cards are present and correctly self-referential on every post template sampled.
- `Organization` + `WebSite` JSON-LD site-wide; `BlogPosting` + `BreadcrumbList` (+ `FAQPage` on most state hubs) per post; `CollectionPage` + `ItemList` on `/destinations`.
- No duplicate slugs, no orphaned page directories, no dangling `blog-posts.ts` entries pointing at nonexistent pages.
- No duplicate meta descriptions/excerpts across all 582 posts (checked programmatically).

## 4. Findings not yet fixed (documented for prioritized follow-up)

- **Thin-content batch:** 132 of 582 posts (23%) are under 400 lines of JSX, well below the ~948-line site median — a reasonable proxy for shorter articles that may be missing sections (budget table, FAQ, nearby-destinations) other posts have. Full list and methodology in `content-gaps.md`. Expanding these requires genuine place-specific research per article — not attempted in bulk this session to avoid generic filler.
- **No dedicated `/itineraries` hub** despite the nav having a (commented-out) slot for one, and despite "itinerary" being a top search-intent pattern confirmed in live research (see `keyword-map.md`).
- **No working site search** — commented-out UI only. Out of scope for an SEO pass (it's a feature build), but worth flagging since it blocks both UX and any legitimate `WebSite.potentialAction` SearchAction schema.
- **E-E-A-T claim inconsistency** (see 2.6) in `destinations/page.tsx` and `/about` keyword list — flagged for a deliberate editorial decision, not changed.
- **Per-article keyword/heading/FAQ optimization for all 582 posts** was not attempted individually — see `keyword-map.md` for the methodology and Priority-A (36 hub) research; Priority-B/C posts already follow a consistent, intent-aligned template (confirmed via the `ranthambore-travel-guide` reference structure: overview → best time → how to reach → things to do → where to stay → visit plan → food → budget → tips → FAQ), so the template itself is not the gap — individual content depth on the thinner 132 is.
- **One untracked image-licensing gap found:** `public/images/blogs/uttar-pradesh/uttar-pradesh/taj-mahal-agra-uttar-pradesh.webp` (the UP hub's own hero image) has no matching entry in `public/images/blogs/IMAGE_CREDITS.json`. Not used for anything I touched this session (I deliberately avoided it for the same reason when building `og-default.jpg`), but it should be re-sourced/re-verified since the site's stated policy is Commons-only, properly-licensed images with a credit record for every one.

## 5. Summary of changes made in this session

| Area | Change |
|---|---|
| Sitemap | Replaced 2 stale static XML files (225 URLs) with dynamic `src/app/sitemap.ts` (589 URLs, real git-derived `lastModified`, tiered priority) |
| Internal linking | Added "Places to Explore in `<State>`" section + TOC entry to all 36 state/UT hub pages → 582 new contextual links |
| Broken links | Fixed non-functional `/blog?category=` breadcrumb links on 72 pages (visible + JSON-LD) |
| Social/OG | Created the missing `public/og-default.jpg` (was a 404) |
| Technical | Added `src/app/not-found.tsx` (was the bare Next.js default) |
| AI discovery | Fully regenerated `public/llms.txt` from live data (218→582 guides, 9→36 states broken out, removed unverifiable "first-hand" claim) |
| Content | Published 1 new guest post (`ranthambore-first-time-visitors-travel-guide`) prior to this audit, already following the site's SEO/schema conventions |

All changes validated with `tsc --noEmit` (clean) and `next build` (clean, all 589 routes compile and prerender).
