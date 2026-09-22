# Kudozz Club — Human Input Required (Travel Agency Pivot)

**Date:** 2026-09-21
**Purpose:** Everything below is needed from the Kudozz Club team before the corresponding page/feature can be built without fabricating information. Nothing in this list has been invented or guessed at elsewhere in the docs written this session.

## Confirmed so far (do not re-ask)

- Pivot to a real trip-planning business: **confirmed**.
- Fulfillment model: **in-house** — the Kudozz Club team personally plans and coordinates trips. No partner/DMC network.
- Enquiry channel: **email only**, `connect@kudozz.in` (already live in the codebase).

## Blocked — needed before Phase 2 can build these

1. **Phone / WhatsApp number** — if none exists, `/plan-your-trip` and all CTAs should stay email-only rather than implying a channel that doesn't exist.
2. **Business registration status** — trade name, GST registration (if any), any tour-operator recognition (IATA/TAAI/state tourism registration). Needed before writing Terms & Conditions or any "registered travel agency" style claim. If none of this exists yet, the honest approach is to launch as a trip-planning service without agency-specific legal claims until registration is complete — flag this explicitly rather than implying credentials that don't exist.
3. **Physical address / office presence** — if none, no `LocalBusiness` schema with an address should be added (a bare `Organization` + `Service` schema is the correct fallback with no address).
4. **Pricing model** — is pricing always enquiry-based, or are there real from-prices for common routes? Spec explicitly forbids publishing fake package prices; if no real pricing exists yet, every `/packages/*` page should say "on request" / "custom quote," not a number.
5. **Refund / cancellation policy terms** — the actual terms the business will honor (advance payment %, refund windows, force-majeure handling). Cannot be drafted without real terms — a generic template would misrepresent the actual business practice.
6. **Privacy policy specifics** — what data is actually collected (the enquiry form fields), how long it's retained, whether any third-party analytics/email tooling is used beyond what's already in the codebase.
7. **Social media handles** — if Kudozz Club has real Instagram/Facebook/etc. profiles, provide links for the footer; do not invent any if none exist.
8. **Testimonials / past traveler feedback** — only usable if real and attributable; none exist yet per spec §10/§42, so none will be added.
9. **Brand assets** — logo file, favicon, any existing brand color/typography decisions beyond what's in `tailwind.config.ts` today, if the rebrand should introduce new visual identity rather than extend the current one.
10. **Legal review** — Terms, Privacy, and Cancellation pages should get a human/legal read before publishing, even once drafted from real inputs above — these are the site's actual contract terms with customers.

## Not blocked — can proceed once Phase 2 is approved

- Nav, `/plan-your-trip` form (using existing `/api/contact` + `connect@kudozz.in`), `/packages` page tree, homepage restructure, About/Contact copy — none of these require anything on this list.

## Found during Phase 2 build (2026-09-21) — needs a human decision, not fabrication

11. **`sameAs` social links already in the codebase** — `src/app/layout.tsx`'s site-wide `Organization` schema lists `https://twitter.com/kudozz.in` and `https://instagram.com/kudozz.in`. These pre-date this session; I did not add or verify them. Please confirm these accounts are real and active — if not, they should be removed rather than left as an unverified claim in structured data.
12. **Hardcoded email credentials in source** — `src/lib/mailer.ts` has a Gmail address and app password committed directly in the file (not an environment variable), and notifications currently route to a personal Gmail inbox rather than `connect@kudozz.in`. This predates this session and wasn't part of the requested scope, but it's a real credential-hygiene issue (the password is sitting in git history) worth rotating and moving to an env var when convenient.

## Phase 2 — what shipped (2026-09-21)

Built without needing anything on the blocked list: `/plan-your-trip` (form + `/api/plan-trip` → existing mailer), `/packages` index, `/packages/rajasthan` flagship page, nav + footer updates (Tour Packages, Plan My Trip), homepage hero/CTA/stats updates, About page rewrite (resolved the editorial-vs-commercial tension in a new section, removed fabricated team bios and fabricated stats/milestones, replaced with verifiable numbers), Contact page trip-planning pathway, `llms.txt` and sitemap additions, and a `Service` schema on `/plan-your-trip`. Verified with a clean `tsc --noEmit`, a clean production build, and manual route checks (all 200s).

## Phase 3 — full package architecture, research docs, and QA (2026-09-21, same day, later pass)

At the user's request, phases 2 (Research), 4 (SEO Mapping), 7 (Rebrand), and 9 (Technical QA) were taken from partial to fully complete:

- **All 36 state package pages built** (`/packages/<state>`), not just Rajasthan. Each one's "places covered" content was extracted programmatically from the real "Places to Explore" links already published on that state's hub blog page (`src/lib/state-hub-children.json`) — zero invented cities or routes. Rajasthan alone keeps its hand-curated multi-city routes (`src/lib/rajasthan-routes.ts`); the other 35 show their real destination list instead, honestly, since curated routes for 35 more states would require geographic trip-planning judgment this session didn't verify state-by-state.
- **All 9 travel-style pages built** (`/packages/<style>`), each linking to 4 real, well-established state fits (e.g. honeymoon → Kerala/Goa/Kashmir/Andaman), not fabricated associations.
- **`docs/travel-agency-keyword-research.md`** and **`docs/competitor-serp-analysis.md`** written as standalone Phase 2 deliverables (previously only folded into other docs).
- **`docs/keyword-map-commercial.md`** expanded to all 36 states with state-specific (not templated/stuffed) secondary keywords, plus the 9 style pages.
- **Technical QA**: this repo had no ESLint config at all before this session (pre-existing gap) — added `.eslintrc.json`. The 583 pre-existing blog pages have thousands of pre-existing `react/no-unescaped-entities` errors (raw apostrophes in JSX text) that are not part of this session's scope to bulk-fix; the rule was disabled to match the codebase's own established convention rather than leaving new pages inconsistent with 583 existing ones. Every file touched this session lints clean, type-checks clean, and the full production build succeeds (646 static pages, including all 45 new package pages). A full internal-link audit script cross-checked every slug referenced in the new data files (`state-hub-children.json`, `rajasthan-routes.ts`, `all-states-data.ts`, `travel-styles-data.ts`) against the real set of 582 published blog slugs — zero broken references found.

Still not built: per-route/per-city package pages, and anything on the blocked list above (policies, phone/WhatsApp CTAs, `LocalBusiness`/registration-dependent schema).

## Phase 4 — Phases 5 & 6 completed (2026-09-21, same day, third pass)

- **Phase 6 (internal linking, guide → package direction)**: closed via one shared-component edit rather than 582 file edits — `src/components/ui/RelatedPosts.tsx` (imported by 582 of 583 blog pages) now shows a "Plan a `<State>` Trip" CTA, driven by a new lookup (`src/lib/blog-package-link.ts`) built from real Phase 7 data. Verified 100% coverage: all 582 blog slugs resolve to a real package page. Two placements (sidebar + in-article banner) because the sidebar is desktop-only (`hidden xl:block`) — the in-article banner covers mobile. Full writeup in `docs/internal-linking-audit.md`.
- **Phase 5 (commercial content-gap analysis)**: `docs/content-gap-analysis.md` written. One real, research-backed gap identified and *not yet built*: dedicated combo pages for "Golden Triangle" (Delhi–Agra–Jaipur) and "Char Dham Yatra" — both are established named commercial search terms already partially referenced in existing site content but without their own package page. Recommended as the next commercial page addition, not built this pass.
- Re-verified after these changes: clean `tsc --noEmit`, clean full-repo ESLint, clean production build (646 pages).
