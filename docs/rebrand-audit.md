# Rebrand Audit: Travel Guide Platform → India Travel Agency

**Updated:** 2026-09-24 (supersedes the 2026-09-21 version)
**Scope:** What the site was, what changed in this pass, and why. Companion docs: `homepage-conversion-strategy.md`, `keyword-map.md`, `internal-linking-audit.md`, `seo-audit.md`, `aeo-geo-audit.md`, `content-gap-analysis.md`, `human-input-required.md`.

---

## 1. Starting point (audit findings)

**Stack:** Next.js 14 App Router, React 18, Tailwind 3, TypeScript. Fully static (650 prerendered pages). Forms post to Next API routes that send email through Nodemailer/Gmail. No CMS: each of the 582 guides is its own hand-written `page.tsx`; shared data lives in `src/lib/`.

**What already existed from the 2026-09-21 pass:** 36 state package pages, 9 travel-style pages, `/plan-your-trip` with an API, guide → package CTAs in `RelatedPosts`, and a first About/Contact rewrite. The commercial *plumbing* existed, but the site still read as a publication:

| Area | Finding |
|---|---|
| Homepage hero | Rotating 3-slide JS carousel with the H1 "Where the mountains call". Editorial, not commercial, and the H1 changed every 5 seconds. |
| Homepage order | Featured guides → latest guides → packages (4 cards + chips) → CTA. Packages sat third, below two blocks of blog content. |
| Enquiry | No form on the homepage; one button to `/plan-your-trip`. |
| Package pages | Generic template: identical durations, a generic FAQ, no answers to "best time / days / cost / how to reach", and a 15-destination cap. Rajasthan was the only state with routes. |
| Guides | One CTA, in the related-posts zone. Nothing after the introduction; no visible links from child guides up to their state hub (9 hubs had zero links from their own children). |
| Newsletter | Full-width green band on every page, as visually prominent as Plan My Trip. |
| Trust claims | Several unverifiable or fabricated claims (testimonials, 12,000/15,000 subscriber counts, a 4.9★ rating, "48-hour" replies, "written by people who've actually been there"). Full list in `human-input-required.md` §2. |
| Technical | Render-blocking Google Fonts `@import`; site-wide canonical to `/` in the root layout (inherited by the 404 page); 3 broken internal links; `llms.txt` said only Rajasthan had a package page; no attribution for 693 CC-licensed images. |

## 2. New positioning

**Kudozz Club: Best Travel Agency in India** (the requested brand/SEO positioning, used in the homepage H1 and title only, never as a ranking claim).

Proposition: *Tell us where you want to go, how you want to travel and what matters to you. We'll help build the trip around you.*

The guide library is reframed as the agency's destination knowledge: the reason to trust the planning, not the product itself.

### CTA hierarchy (enforced visually)

1. **Plan My Trip**: saffron `btn-primary`, the only saffron element on any page, in the header, hero, every section end, guides and the mobile sticky bar.
2. **Tour Packages**: outline buttons and card links.
3. **Destinations**
4. **Travel Guides**
5. **Newsletter**: demoted to a quiet outline strip in the footer ("Not ready to plan yet?").

## 3. What changed

| Page / system | Change |
|---|---|
| Design system (`globals.css`, `tailwind.config.ts`) | New `saffron` CTA colour, `btn-*`, `eyebrow`, `heading-*`, `field`, `answer-card` classes. Fonts moved to `next/font` (self-hosted, no render-blocking request). |
| Homepage | Rebuilt in the brief's 14-part order. See `homepage-conversion-strategy.md`. |
| Header / footer | Nav adds Contact; "India Travel Agency" sub-brand; saffron Plan My Trip; commercial footer columns; newsletter demoted; `/image-credits` link. |
| Mobile | New sticky "Planning a trip? / Plan My Trip" bar (appears after the first screen, hides near the footer and on form pages, reserves its own space). |
| `/plan-your-trip` | New H1 and copy; all 14 requested fields in 3 short groups; pre-fills from the homepage hero, destination cards, package pages and guides; records the source page; honeypot spam protection. |
| `/packages/[slug]` | Rebuilt as a conversion template for 48 pages (36 states, 9 styles, **3 new circuits**: Golden Triangle, Char Dham Yatra, Northeast India). 13 priority destinations get answer-first content drawn from their own guides. |
| `/packages` | H1 "India Tour Packages", popular circuits, region headings as H2s. |
| Guides (582) | Mid-article "Planning a trip to X?" prompt after the introduction; end-of-guide "Want us to plan this trip for you?"; hub + sibling links. |
| `/about` | New H1 "We Know India. Now Let Us Plan Your Trip."; agency story; philosophy; process; editorial independence; history kept as supporting credibility. |
| `/contact` | H1 "Let's Plan Your Next Trip"; trip enquiries first; editorial/write-for-us enquiries separated under "Not about a trip?". |
| `/destinations`, `/blog` | Unverifiable claims removed; commercial CTAs; keyword-bearing H1s. |
| Schema, sitemap, llms.txt | See `seo-audit.md` and `aeo-geo-audit.md`. |

## 4. What deliberately did not change

- **No URL changed.** No redirects were needed. All 582 guide URLs, their content and editorial voice are intact. Guide edits were limited to one inserted CTA component and import per file, 2 broken breadcrumb links, and removal of hidden fake gear ratings.
- No prices, reviews, ratings, awards, partnerships, certifications or years-of-experience claims were added.
- `Organization` schema is kept (not `TravelAgency`/`LocalBusiness`) until an address and registration are confirmed.
- The step-4 promise ("go ahead with the travel arrangements Kudozz Club supports") is intentionally non-specific until the team confirms exactly what is booked or handled (`human-input-required.md` §3.5).
