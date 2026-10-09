# SEO Before / After Report

"Before" = state at commit `3d79451` (2026-10-01, after the first pass). "After" = 2026-10-09. Measured from crawls of the production build (`scripts/seo-audit/crawl.py`).

| Area | Before | After |
|---|---|---|
| Pages crawled / in sitemap | 1,102 / 1,101 | same |
| Canonical mismatches, duplicate titles/descriptions/H1s, broken internal links, orphans, schema parse errors, heading skips | 0 | 0 |
| Meta descriptions >165 chars (truncated) | **595** | **0** |
| Titles >65 chars incl. suffix | 8 | 0 |
| Article URLs with a recorded audit decision | 310 (prepared, not applied) | 1,029 (all applied) |
| Meta descriptions rewritten and validated | 0 applied | 592 |
| Factual / freshness errors known on live pages | about 30 (unknown) | 0 known (all fixed with sources) |
| Titles with unsupported or outdated claims | 5 + 1 markup bug | 0 |
| Style package titles | "Adventure Trips Packages in India" (13 ungrammatical) | "Adventure Tour Packages in India" (query-matching) |
| Style package pages: words / answer-readiness | ~500 / 1 of 4 | ~800 / 3 of 4 |
| `/best-travel-agency-in-india` in-content links | 3 | 69 (two main anchors) |
| Guides linking to their itinerary | Golden Triangle, Meghalaya, South-India hill itineraries had 0 | +50 guides via `itinerary-links.ts` |
| Guides linking to circuit packages | none from the CTA | all guides in the 4 circuits |
| Things-to-do breadcrumb | Home › Blog › … (≠ schema ≠ site pattern) | Home › Destinations › State › Place › Things to Do (= schema) |
| Author entity | inline Organization on JSON articles | `@id` #organization everywhere |
| `llms.txt` | 269 KB, Buddhist Circuit missing | 33 KB summary + `llms-full.txt` |
| Root meta keywords | 27 incl. unrelated places | 10 brand and service terms |
| Report docs | none of the 17 requested | all written (see `final-seo-audit-report.md`) |

## Pages created / merged / redirected / removed
- Created: **0** content pages (no gap justified a new URL on the evidence available). New static file `/llms-full.txt`.
- Merged: 0. Redirected: 0. Removed: 0. Noindexed: 0 (5 flagged for a Search Console check).

## Unchanged by design
- 387 empty-alt decorative thumbnails (correct accessibility pattern).
- No prices, reviews, ratings, awards or registrations added: none are verified.
