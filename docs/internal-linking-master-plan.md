# Internal Linking Master Plan (2026-10-09)

## Current state (crawl of 1,102 pages)

| Check | Result |
|---|---|
| Orphan pages | 0 |
| Broken internal links | 0 |
| Guides → state package page | 582/582 |
| Guides → things-to-do page (where one exists) | 143/143 |
| Things-to-do → guide, package, Plan My Trip | 143/143 |
| Pages linking to Plan My Trip | every article (5,406 links, many anchors) |
| Avg in-content inbound links: destination guide / things to do / package | 16.7 / 12.1 / 51 |

## The funnel and how each step is wired

```
Search / AI answer
  → Destination guide        (582; GuideBreadcrumb: Home › Destinations › State › Place)
  → Things to do             (GuideTripCTA line "best things to do in X")
  → Activity / category page (cluster link maps: *-links.ts, *-guide-links.json)
  → Itinerary / route        (NEW: src/lib/itinerary-links.ts, 50 guides; road trips via roadtrips-guide-links.json)
  → Tour package             (GuideTripCTA: state package + NEW circuit package from combo guideSlugs)
  → Plan My Trip             (GuideTripCTA button, MobileStickyCTA, package FinalCta)
```

Category flow: category hub → state cluster page → destination guide → activity/route → style package → Plan My Trip. Each cluster article template (`AdventureArticle.tsx`) links its hub, related articles, destination guides, travel-style packages and Plan My Trip.

Geographic flow: destination → state hub (breadcrumb + sibling links in `RelatedPosts`) → `/destinations` (region) → India.

## Changes made this pass

| Change | Effect |
|---|---|
| `itinerary-links.ts` + GuideTripCTA line | 50 guides now link to their itinerary. Golden Triangle, Meghalaya and South India hill-station itineraries had no guide links before |
| Circuit package link in GuideTripCTA | Delhi/Agra/Jaipur → Golden Triangle; Char Dham shrines → Char Dham Yatra; NE guides → Northeast India; Buddhist sites → Buddhist Circuit |
| Agency page links | 3 → 56+ in-content links (style quick answers + all package FinalCtas), two different anchors |
| Things-to-do breadcrumb | Now passes link equity up the real hierarchy (state hub, place guide) instead of `/blog` |

## Anchor-text rules
- Descriptive and varied. Package links already use about 10 natural variants ("Rajasthan tour packages", "explore Rajasthan tour packages", "See Rajasthan tour packages").
- Agency page: "how to choose a travel agency in India" (style pages) and "what to check before you pay any travel agency" (package pages).
- Never use a bare "click here"; never stuff a head term into an unrelated paragraph.

## Remaining opportunities (not done; need judgement or content)
1. Contextual body links from the 36 state hub guides to their itinerary and circuit pages inside the prose, not only the CTA block.
2. Link the 13 travel-style package pages from the matching cluster hub intros (e.g. `/wildlife-tourism` intro → `/packages/wildlife-tours`) if not already above the fold.
3. Add lastmod to package entries in the sitemap so link changes are recrawled.
4. Re-run `crawl.py` after every content batch and check that orphans and broken links stay at 0.
