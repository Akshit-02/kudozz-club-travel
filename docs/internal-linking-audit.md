# Internal Linking & Orphan Page Audit

**Updated:** 2026-09-24 (supersedes the 2026-09-21 version). Method: static analysis of every `href`/slug in `src/` (script logic in `scripts/check-links.mjs`; inbound counts computed with a one-off analysis script, results below). Editorial-to-editorial linking from the 2026-09-14 pass is documented in `internal-linking.md`.

---

## 1. Findings before this pass

| Check | Result |
|---|---|
| True orphans (no inbound link anywhere) | **0.** Every guide is in a state hub's "Places to Explore" list, on `/destinations`, and in the sitemap. |
| Hubs with no links from their own child guides | **9**: Andhra Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Jharkhand, Kerala. Child guides show the state only in breadcrumb *JSON-LD*, not as a visible link. |
| Guides with ≤1 inbound link from other guides | **286 of 582** (277 had exactly one: their hub). Median inbound from guides: **1**. |
| Package pages linking to child guides | Capped at 15 per state, in alphabetical data order. Delhi (25), Uttarakhand (22), Tamil Nadu, UP and West Bengal (20) lost links. |
| Guides → commercial pages | One CTA per guide (sidebar + end banner), to the state package page only. |
| Broken internal links | **3**: `/blog/goa-travel-guide` and `/blog/kerala-travel-guide` (breadcrumbs to non-existent hubs), and `/privacy` from `/newsletter`. |
| Package pages buried | Reachable only via `/packages` and the footer's single Rajasthan link; not linked from the homepage beyond 4 cards. |
| Generic anchors | "View package →" on every package card; "Read guide". |

## 2. The funnel the links now implement

```
Google / AI search → Guide → State hub guide → State package page → Plan My Trip
                       ↑↓ siblings        ↑↓                 ↑↓ circuits / styles
Homepage → Plan My Trip (prefilled)  ·  Homepage → Package → Plan My Trip
```

## 3. What was implemented

All guide-level changes are made once, in shared components driven by data (`src/lib/guide-context.ts`), not by editing links into 582 files by hand.

| # | Link added | Where | Anchor style |
|---|---|---|---|
| 1 | **Child guide → state hub** ("complete Rajasthan travel guide") | `RelatedPostsGrid`, every non-hub guide | Descriptive |
| 2 | **Guide → 6 sibling guides** in the same state (3 either side in the hub's order, wrapping) | `RelatedPostsGrid` "More places in X" | "Jodhpur travel guide" |
| 3 | **Guide → Plan My Trip, prefilled** with the place | `GuideTripCTA` after the introduction (582 guides), sidebar, end-of-guide | "Plan My Jaipur Trip →", "Get a Custom Itinerary →" |
| 4 | **Guide → state package page** | Same three placements | "explore Rajasthan tour packages" |
| 5 | **Package → every child guide** (cap removed; curated popular places first, then all others) | `/packages/[slug]` "Best places to visit in X" | Place names |
| 6 | **Package → route stops** (each stop is a guide link) | Suggested itineraries, 13 destinations + 3 circuits | Place names |
| 7 | **Package → state guide** | Hero secondary CTA, "at a glance" intro, best-time card | "Read the Kerala travel guide", "Month-by-month detail in the guide" |
| 8 | **Package → nearby states' packages** | GEO sentence + "Destinations near X" grid | State names |
| 9 | **Package → travel styles**, style → destinations, style ↔ style | `StyleLinks`, style pages | "Family", "Kerala tour packages" |
| 10 | **Circuits** ↔ their states and stops | Golden Triangle, Char Dham, Northeast | Descriptive |
| 11 | **Homepage** → 12 package pages, 8 package cards, 3 circuits, 9 styles, 5 experience guides, 4 hub guides | Homepage | Descriptive |
| 12 | **Footer** → 6 package pages, 5 styles/circuits, 3 hub guides | Site-wide | Descriptive |
| 13 | `/about`, `/contact`, `/destinations`, `/blog` → Plan My Trip / packages | Page CTAs | Descriptive |

"View package →" became "`<State>` tour packages →"; no new "click here", "read more" or "learn more" anchors were added.

## 4. Results after this pass (simulated from the same data)

| Metric | Before | After |
|---|---|---|
| Hubs with zero links from children | 9 | **0** |
| Guides with ≤1 inbound guide link | 286 | **0** |
| Minimum inbound guide links | 0 (hubs) | **2** (Lakshadweep's two island guides; that state has only two) |
| Median inbound guide links | 1 | **7** |
| Package pages linked from homepage | 4 | **15** (12 destination cards + 8 package cards, overlapping, + 3 circuits) |
| Broken internal links / missing images | 3 / 0 | **0 / 0** (`npm run check:links`, 13,000+ references) |

## 5. Remaining recommendations (not done)

- **In-body contextual links** between guides (e.g. Jaipur's "Golden Triangle" FAQ → `/packages/golden-triangle`). Worth doing by hand for the ~40 highest-traffic guides once Search Console data is available. Avoid scripting anchors into prose.
- `blog-package-link.ts` assigns a guide to the first state hub that lists it. No guide is currently listed under two hubs, but check this if one is added (e.g. a cross-border trek).
- Profiles for more states (Sikkim is done; next: Tamil Nadu, Punjab, Odisha, Assam, Maharashtra) would give those package pages routes and answer blocks.
