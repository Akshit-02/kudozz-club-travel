# Search Console Opportunity Report (2026-10-09)

## Data availability

**Google Search Console data was not available** in this session: no Search Console connector, export or API credentials. Nothing in this repository's reports is based on impressions, clicks, CTR or position data, and no such numbers have been assumed.

A `site:club.kudozz.in` query in the (non-Google) search tool used for research returned no pages from the domain. That is not proof of non-indexing, but it makes the indexing check below the first priority.

## What to pull first (in this order)

1. **Pages → Indexing**: indexed count against the 1,101 sitemap URLs; reasons for "Crawled – currently not indexed" and "Discovered – currently not indexed". If a large share of the 1,029 guides is unindexed, authority and crawl priority are the bottleneck, not content.
2. **Sitemaps**: both `/sitemap.xml` and `/sitemap-pages.xml` should show "Success" and 1,101 discovered URLs.
3. **Performance → Queries, 3 months**: brand queries (Kudozz/Kudoz/Kudos Club) should be position 1.
4. **Pages at positions 4–20 with impressions**: the cheapest wins. Improve title/description CTR and add internal links from the state hub.
5. **High impressions, CTR under 1%**: title/description mismatch; compare against this pass's rewrites (all 592 rewrites are listed in `scripts/seo-audit/decisions/`).
6. **Unexpected queries** landing on a page: candidates for an FAQ or new section, or evidence of cannibalisation (check `canonical-keyword-ownership-map.md`).
7. **Delhi neighbourhood pages** (Janakpuri, Laxmi Nagar, Rohini, Najafgarh, Vasant Kunj): noindex if zero impressions after 90 days.
8. **Core Web Vitals report**: mobile LCP on package pages (JPG heroes, see `image-seo-audit.md`).

## How to give access next time
Add the Search Console property owner as a user, or export Performance (queries and pages, 16 months) and Pages (indexing) as CSV into `docs/gsc/`. `build-inventory.py` can then be extended to join clicks and impressions per URL into the priority matrix.
