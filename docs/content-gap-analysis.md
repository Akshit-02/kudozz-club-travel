# Kudozz Club — Content Gap Analysis (Commercial Funnel)

**Date:** 2026-09-21
**Scope:** Gaps in the *commercial* page layer (`/packages/*`) built in Phase 7, now that all 36 states and 9 travel styles have real pages and are linked bidirectionally with the 582 editorial guides (`internal-linking-audit.md`). This is distinct from the pre-existing `content-gaps.md`, which covers editorial/blog content gaps and is unchanged.
**Method:** Checked against real, verifiable signals — the site's own existing content inventory, and the live competitor/SERP research in `travel-agency-keyword-research.md` and `competitor-serp-analysis.md`. This is a prioritized list, not an instruction to build everything below immediately.

---

## 1. What's now fully covered (no gap)

- Every one of the 36 states/UTs has a real `/packages/<state>` page.
- Every one of the 9 major travel styles identified in the original brief (family, honeymoon, weekend, group, adventure, wildlife, spiritual, luxury, budget) has a real `/packages/<style>` page.
- Every one of the 582 blog guides links forward into its state's package page (`internal-linking-audit.md`).

## 2. Real gap: cross-state combo packages

Research (`travel-agency-keyword-research.md` §2, `competitor-serp-analysis.md`) and the site's own existing content both point to a genuine, well-established commercial search pattern that current pages don't directly serve:

- **"Golden Triangle tour package"** (Delhi–Agra–Jaipur) — this is one of the most recognized India tour package terms globally, and the site's own content already references it (`rajasthan-travel-guide` targets "Golden Triangle Rajasthan" per `keyword-map.md`; `jaipur-travel-guide`'s FAQ explicitly answers "Is Jaipur a good Golden Triangle stop?"). Today this intent is split across three separate state pages (`/packages/delhi`, `/packages/uttar-pradesh`, `/packages/rajasthan`) with no single page serving the combo query directly.
- **"Char Dham Yatra package"** — similarly a very well-established named pilgrimage-circuit term (Yamunotri, Gangotri, Kedarnath, Badrinath), already referenced in `keyword-map.md`'s Uttarakhand row and used as a secondary keyword on `/packages/spiritual-tours` and `/packages/uttarakhand`, but with no dedicated page of its own.

**Recommendation:** two new pages — `/packages/golden-triangle` and `/packages/char-dham-yatra` — following the same pattern as the travel-style pages (real linked destinations, no fabricated pricing/routes beyond what the existing guides already establish). Not built in this pass; flagged as the highest-priority next commercial page addition since the keyword is real, current, and already partially supported by existing content.

## 3. Real gap: state pages beyond 15 linked children

Per `internal-linking-audit.md` §6, six states (Delhi, Uttarakhand, Tamil Nadu, Uttar Pradesh, West Bengal, plus others near the 15-cap) have more real child guides than the page currently displays. Not a missing page, but a content-depth gap on an existing page. Low priority — the 15 shown are not curated for quality, just the first 15 in data order, so a future pass could at least prioritize the most-relevant 15 rather than array order.

## 4. Non-gaps — deliberately not building these

- **Per-city/per-route package pages** (e.g. `/packages/rajasthan/jaipur-udaipur-jodhpur`) — per `new-information-architecture.md` §3, deferred until specific route search intent is independently verified. Building 100+ such pages now would risk exactly the thin-content/duplicate-intent problem `keyword-map-commercial.md`'s cannibalization check is designed to prevent.
- **Additional travel styles beyond the original 9** (e.g. "road trips," "photography tours" named in the original brief's Experiences section) — deliberately folded into the existing style pages or left to editorial tags, per `new-information-architecture.md` §2's decision to reject a third parallel "Experiences" taxonomy.
- **Seasonal/festival package pages** (e.g. "Hornbill Festival tour package," "Pushkar Fair package") — real but narrower, time-bound search intent; lower priority than the two combo pages in §2, and not built this pass.

## 5. Non-gap, but worth flagging: pricing depth

No package page publishes a specific price, per the explicit no-fabricated-pricing rule. This is not a content gap to "fix" — it's a deliberate, correct choice matching how direct-operator competitors (not OTAs/marketplaces) handle pricing (`competitor-serp-analysis.md` §5). Only becomes fillable once real pricing data exists (`human-input-required.md` item 4).
