# Kudozz Club — Internal Linking Audit (Commercial Funnel)

**Date:** 2026-09-21
**Scope:** Linking between the 582 existing editorial blog guides and the 45 new commercial package pages built in Phase 7. This is distinct from `internal-linking.md` (the pre-existing, 2026-09-14 audit of editorial-to-editorial linking — state hubs to their child destination pages — which is unchanged and still current).

---

## 1. The gap this audit found

Before this pass, linking between the two page types was **one-directional**: every `/packages/<state>` page links back into its blog guide(s) (via the "Places Covered" grid or, for Rajasthan, the curated routes), but none of the 582 blog guides linked forward into the new commercial pages. A visitor reading `jaipur-travel-guide` had no path into `/packages/rajasthan` without already knowing the URL. The funnel described in `new-information-architecture.md` §4 (TOFU → MOFU → BOFU → conversion) was open only in the discovery direction, not the conversion direction.

## 2. The fix: one shared-component edit, not 582 file edits

Rather than editing each of the 582 individually-authored blog page files, the fix targets `src/components/ui/RelatedPosts.tsx` — the shared `RelatedSidebar` and `RelatedPostsGrid` components already imported by 582 of the 583 blog pages (verified: `grep -rl "RelatedSidebar" src/app/blog | wc -l` → 582). A new lookup module, `src/lib/blog-package-link.ts`, maps every blog slug to its state's package page using data already established in Phase 7 (`state-hub-children.json` + `all-states-data.ts`) — no new or invented associations.

**Coverage, verified programmatically:** all 582 unique blog slugs resolve to a real `/packages/<state>` page. Zero uncovered posts.

## 3. What was added, and why two placements

- **`RelatedSidebar`** (desktop-only — `hidden xl:block` in every page's layout, confirmed by inspecting the wrapping grid): a "Planning a trip here?" card with a `Plan a <State> Trip →` CTA to the matching package page. Persistent while scrolling on desktop.
- **`RelatedPostsGrid`** (rendered inside the main `<article>` column, visible at every breakpoint including mobile): the same CTA as a horizontal banner, placed above the existing "Continue Exploring" related-posts grid.

Two placements were used specifically because the sidebar is invisible on mobile/tablet (`hidden xl:block`), and mobile is presumably the majority of travel-intent traffic — a mobile visitor would otherwise never see the CTA at all. This was verified by inspecting the actual layout markup, not assumed.

## 4. What this does NOT do

- It does not add a CTA into the body/prose of any article — the CTA lives in the related-content zones (sidebar widget, end-of-article banner), consistent with the explicit instruction not to over-commercialize the editorial guides (spec §49).
- It does not change anchor text patterns elsewhere on the site or touch the existing state-hub-to-child-page linking that `internal-linking.md` already covers.
- It does not fabricate a state association for any post — a post only gets a CTA if it's a real child (per the hub's own published "Places to Explore" list) or a real hub itself.

## 5. Verification performed

- Type-check (`tsc --noEmit`): clean.
- Full production build: all 646 pages generate successfully, including all 582 blog pages with the new component.
- Manual spot-checks confirmed correct state attribution: `jaipur-travel-guide` → "Plan a Rajasthan Trip", `bihar-travel-guide` → "Plan a Bihar Trip", `kaziranga-travel-guide` (an Assam wildlife destination, not a hub) → "Plan a Assam Trip".
- ESLint: clean on the modified files and the full repo.

## 6. Remaining linking gaps (not fixed this pass)

- The reverse direction within `/packages/*` pages could go deeper — right now a state package page links to up to 15 of its real child guides, not all of them (see `all-states-data.ts`, `.slice(0, 15)`), for states with more than 15 children (Delhi has 25, Uttarakhand 22, Tamil Nadu/UP/West Bengal 20). This caps page length rather than omitting real links maliciously, but a future pass could add "show all" pagination if warranted.
- Travel-style pages (`/packages/<style>`) link to only 4 related states each, not all states relevant to that style — intentionally curated rather than exhaustive, per `travel-styles-data.ts`.
