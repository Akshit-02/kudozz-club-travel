# Complete URL Inventory (2026-10-09)

Machine-readable inventory: **`complete-url-inventory.csv`**, 1,102 rows (every prerendered page, 1,101 indexable + `/image-credits` noindex). Regenerate with:

```
npm run build && python3 scripts/seo-audit/crawl.py && python3 scripts/seo-audit/build-inventory.py
```

## Columns
url, route, page_type, title, h1, meta_description, canonical, robots, indexable, status, words, h2_count, h2_outline (semantic topics), primary_keyword (from the per-article decision), secondary_keywords (meta keywords), search_intent (I/C/T/N/L), state, region, cluster, inbound_internal, outbound_internal, external_links, images, images_empty_alt, schema, breadcrumb, plan_cta, package_link, faq_count, aeo_score_0_4, geo_score_0_3, orphan, commercial_relevance, in_sitemap, action, note.

- **aeo_score (0–4):** quick-answer block, FAQ section, "best time" coverage, "how to reach" coverage. Topic pages (how-to-plan guides, packing lists) legitimately lack "how to reach", so 2–3 is normal for them.
- **geo_score (0–3):** BreadcrumbList, an entity schema type (TouristDestination, TouristAttraction, Place, Service, CollectionPage), and a resolved state/region.
- **inbound_internal** counts in-page links, *including header navigation* (which sits inside `<main>`), so hubs and index pages show about 1,100.

## Summary by page type

| Page type | URLs | Median words | With FAQs | Avg AEO (0-4) | Avg inbound links |
|---|---|---|---|---|---|
| destination-guide | 546 | 1703 | 545 | 4.0 | 16.7 |
| things-to-do | 143 | 1712 | 143 | 4.0 | 12.1 |
| package | 53 | 822 | 53 | 3.62 | 51.1 |
| cluster-article:heritage | 52 | 1071 | 52 | 2.71 | 18.9 |
| cluster-article:spiritual | 46 | 1040 | 46 | 2.87 | 16.3 |
| cluster-article:adventure | 41 | 1382 | 41 | 2.93 | 21.3 |
| cluster-article:hills | 40 | 1105 | 40 | 2.83 | 21.3 |
| cluster-article:roadtrips | 39 | 1118 | 39 | 2.33 | 17.8 |
| state-hub-guide | 36 | 2741 | 36 | 4.0 | 24.8 |
| cluster-article:nature | 32 | 1121 | 32 | 2.88 | 19.7 |
| cluster-article:wildlife | 31 | 1029 | 31 | 2.74 | 17.2 |
| cluster-article:beach | 23 | 1252 | 23 | 2.91 | 17.3 |
| category-hub | 8 | 3065 | 8 | 3.62 | 1101.0 |
| utility | 6 | 645 | 2 | 1.17 | 489.0 |
| index | 3 | 854 | 1 | 1.33 | 1101.0 |
| commercial | 2 | 2002 | 1 | 2.0 | 578.5 |
| homepage | 1 | 1610 | 1 | 3.0 | 1093.0 |

## Coverage
- Every destination guide and things-to-do page resolves to a state/UT and region: North India 236, South India 150, Northeast India 134, West India 86, East India 76, Central India 43.
- Status: all 200 (static). Canonicals: 1,102/1,102 self-referencing. Orphans: 0. Broken internal links: 0.
- Decisions: 506 KEEP (includes non-article pages), 593 OPTIMIZE, 3 REWRITE. Per-article rationale: `scripts/seo-audit/decisions/b00–b22.tsv`.
- Not indexable by design: `/image-credits` (noindex), `/api/*` (robots disallow).
