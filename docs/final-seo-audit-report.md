# Final SEO / AEO / GEO Audit Report: Kudozz Club

**Date:** 2026-10-09 · **Scope:** all 1,102 prerendered URLs, the codebase, and live SERP research · **Caveat:** no Search Console data was available; nothing here is traffic-weighted, and no ranking outcome is promised.

## Executive summary
Kudozz Club is technically excellent (static, clean canonicals, zero broken links or orphans, unified entity graph) and its content is deep and useful (median 1,608 words, FAQs on almost every page, very little filler). The biggest problems were **trust and accuracy** (about 30 stale or wrong travel facts, including missing entry permits and outdated "only road" claims), **snippet quality** (595 truncated descriptions), and **commercial page weakness** (ungrammatical, thin travel-style package pages; an under-linked agency page). All of these are fixed. What now limits growth sits **outside the codebase**: indexation and authority (unverified; the domain did not appear in a site: search), missing verifiable business facts (registration, phone, address, team, real reviews, indicative prices), and no off-site presence beyond Instagram.

## Technical SEO
Next.js 14 SSG on Vercel; 1,101 indexable URLs in the sitemap; robots allow all except `/api`; 308s for trailing slash and HTTP verified live; self-referencing canonicals on 1,102/1,102. See `seo-master-codebase-audit.md`. **Open, critical: hardcoded Gmail app password in `src/lib/mailer.ts`.**

## Content SEO
Every article audited and decided (`content-quality-audit.md`, `scripts/seo-audit/decisions/`). 592 descriptions rewritten and checked against the article text; 5 titles corrected; about 30 factual and freshness fixes with sources.

## Keyword strategy, search intent, cannibalisation
`master-keyword-map.md` (tiers by intent and feasibility, no invented volumes) and `canonical-keyword-ownership-map.md` (one owner per intent, all 143 destinations mapped guide → things to do → itinerary → package). No merges were needed; overlaps reviewed and kept as distinct intents.

## Internal linking and topical authority
Funnel complete on every guide (`internal-linking-master-plan.md`). Added itinerary links (50 guides), circuit package links, and 66 agency-page links. Eight category clusters plus 143 things-to-do pages give broad topical coverage.

## AEO
Quick answers, at-a-glance boxes, FAQs (1,094 pages), comparison tables. Style packages gained a where/when/how-long table. Question ownership: `aeo-question-master-map.md`.

## GEO and entity SEO
Organization `@id` graph used by every page; geographic hierarchy consistent across breadcrumbs, schema and `/destinations`; entity spellings normalised; `llms.txt` concise with a full companion. See `geo-entity-master-map.md`.

## Structured data
Organization, WebSite, BreadcrumbList (1,097), BlogPosting (1,030), FAQPage (1,094), ItemList, CollectionPage, TouristDestination, TouristAttraction, Service. 0 parse errors. Things-to-do BreadcrumbList corrected. Note: Google shows FAQ rich results only for authoritative government and health sites; the FAQ markup stays because it mirrors visible, useful content.

## Image SEO
1,867/1,914 images credited; 0 missing files; content images all have alt text. Open: 47 uncredited images; JPG heroes hurt mobile LCP (`image-seo-audit.md`).

## Performance, mobile, accessibility
86.9 kB shared JS, self-hosted fonts, static HTML. Risks: unoptimised hero JPGs; no AVIF. Accessibility: one H1 per page, no heading skips, labelled breadcrumbs with `aria-current`, decorative images with empty alt, table headers scoped. A device-level mobile UX review was not performed in this pass.

## Conversion and agency positioning
Primary CTA "Plan My Trip" on every page; package CTAs now link the agency-comparison page; style pages answer "where, when, how long" before asking for an enquiry. Positioning stays honest: an India-only planner that publishes guides, with no unverifiable claims.

## "Best travel agency in India" strategy
The SERP is owned by listicles and big brands. Kudozz competes with the verification-guide angle on `/best-travel-agency-in-india` (now well linked) and must earn trust off-site. Do not add self-awarded rankings.

## Search Console opportunities
Not available. A step-by-step pull list is in `search-console-opportunity-report.md`.

## Content gaps (prioritised)
| Priority | Gap | Why not done |
|---|---|---|
| Critical | Indicative prices per route/season | Needs business confirmation |
| Critical | Verifiable trust: registration, phone/WhatsApp, address, named planners, real reviews | Needs business input |
| High | "From {city}" sections on the top 8 state packages | Needs confirmed transport options |
| High | Video explainers for the top 20 destinations (AI Overviews cite YouTube heavily) | Off-site production |
| Medium | Things-to-do pages for high-demand places without one (e.g. Ranthambore, Bandhavgarh, Kanha) | Worth creating after GSC confirms demand |
| Low | More origin-city weekend pages | Already well covered |

## Competitor gaps
See `competitor-seo-analysis.md`: competitors win on prices, reviews, brand and video; Kudozz wins on depth, accuracy, honesty and route logic.

## Pages created / updated / merged / redirected / removed
Created 0 (+ `llms-full.txt`) · Updated about 650 (592 descriptions, about 30 factual, 13 style packages, templates affecting 143 + 53 pages) · Merged 0 · Redirected 0 · Removed 0 · Noindexed 0 (5 flagged).

## Remaining risks
1. Hardcoded mail credentials (security).
2. Indexation unknown.
3. Travel facts go stale; this pass found about 3% of articles with an outdated or wrong fact. Run a six-monthly freshness sweep using the year/permit/closure scan in this audit.
4. AI answers absorbing informational clicks.
5. No E-E-A-T author entities.

## Recommended future work (in order)
1. Rotate the Gmail app password, move it to an env var, then purge it from git history.
2. Connect Search Console; check indexing; pull the opportunity report.
3. Supply business facts (`human-input-required.md` §3); then add TravelAgency/LocalBusiness schema, a phone/WhatsApp CTA and a named team page.
4. Publish indicative price ranges for the top routes.
5. Convert hero JPGs; credit the 47 images.
6. Six-monthly freshness sweep; per-season date checks (Kumbh, Rann Utsav, Char Dham openings, Baisaran).
7. Video and YouTube presence for top destinations.
