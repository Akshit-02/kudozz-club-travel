# Kudozz Club — New Information Architecture (Travel Agency Layer)

**Date:** 2026-09-21
**Builds on:** `rebrand-audit.md` (what exists / what's blocked), `content-gaps.md`, `internal-linking.md`, `seo-audit.md` (existing editorial-site SEO state, unchanged by this doc).
**Research basis:** Live web research this session into current India-travel-agency SERPs and IA patterns (Kesari, SOTC, TravelTriangle, Tour My India, Enchanting Travels, Custom Tours India) plus travel-landing-page CTA research. Full source list in §7 below and cross-referenced in `keyword-map-commercial.md`. No content or copy was copied from any competitor — only structural/intent patterns were extracted.

---

## 1. Design principle this IA follows

Every competitor sampled uses one of two shapes: (a) a marketplace aggregator (TravelTriangle — "get quotes from 650+ agents") or (b) a direct operator with a 3-step consult flow (Enchanting Travels: enquire → consult → itinerary; Immersive Trips: same pattern). **Kudozz Club is (b), not (a)** — in-house fulfillment, one team, no partner marketplace. The IA below is built around a single enquiry → in-house-planning funnel, not a lead-routing marketplace. This also means no "verified local agents" or "650+ experts" style trust copy anywhere — that pattern belongs to marketplaces, not to Kudozz Club, and asserting it would be fabricated.

Landing-page research confirms the CTA should be a single, specific action ("Plan My Trip" / "Get a Custom Itinerary"), not a generic "Learn More," and should stay above the fold — this governs the homepage and package-page CTA placement in §4.

## 2. Proposed navigation

```
Home
India Destinations        (existing /destinations page — extended, not replaced)
  └─ North / South / East / West / Northeast / Central India
  └─ States & Union Territories (links into existing 36 hub guides)
Tour Packages              (NEW — /packages)
  └─ Family Holidays · Honeymoon · Luxury · Budget · Group Tours
  └─ Weekend Getaways · Adventure · Wildlife · Spiritual · Beach · Hill Station
Travel Guides              (existing /blog, relabeled in nav only — URLs unchanged)
About
Plan Your Trip             (NEW — primary header CTA button, not a text nav link)
```

Rejected from the spec's suggested nav: a separate top-level "Experiences" section. Rationale: `content-gaps.md` and the existing tag taxonomy already group posts thematically (wildlife, spiritual, hill-station, etc.), and the "Travel Styles" tiles under Tour Packages cover the same ground for commercial intent. A third parallel taxonomy (Destinations vs. Packages vs. Experiences all slicing the same 583 posts three ways) creates exactly the cannibalization risk the spec's own §29 warns against. Recommendation: fold "Experiences" into the Tour Packages travel-style pages rather than building a fourth navigational hierarchy.

## 3. New URL structure

| URL | Purpose | Relationship to existing content |
|---|---|---|
| `/packages` | Index of all travel-style + state package pages | New |
| `/packages/rajasthan`, `/packages/kerala`, etc. | State-level commercial landing page | Links to existing `/blog/<state>-travel-guide` for planning detail; pulls itinerary structure from it rather than duplicating |
| `/packages/family-holidays`, `/packages/honeymoon`, `/packages/weekend-getaways`, etc. | Travel-style landing pages | Cross-links into relevant state/city guides |
| `/plan-your-trip` | Single lead-gen form, all destinations | Replaces nothing; additive |

Explicitly **not** creating in Phase 2: per-city package pages (`/packages/rajasthan/jaipur-udaipur-jodhpur`) or per-route itinerary pages. The spec's own §12 flags "do not create unnecessary duplicate pages merely for keywords" — with 583 existing city/destination guides already covering itinerary-level detail, city-level package pages would largely duplicate that content under a new URL. Start with state-level package pages only; add route-level pages later only where a real, repeatable itinerary route exists and search intent is verified (not assumed).

## 4. Funnel mapping (TOFU → MOFU → BOFU → conversion)

This is the existing site's real behavior already, made explicit rather than newly invented:

- **TOFU** (existing): "Best places to visit in X" — the 583 blog posts, unchanged.
- **MOFU** (existing, needs a CTA added, not new content): "X day itinerary," the "visit plan" section already present in every state hub template per `seo-audit.md` §1.
- **BOFU** (new): `/packages/<state>` and `/packages/<travel-style>`.
- **Conversion** (new): `/plan-your-trip`, plus a contextual CTA component inserted into existing MOFU/BOFU pages — never inserted into pure TOFU informational content mid-paragraph (spec §49 / this session's own instruction: don't over-commercialize the blog).

## 5. Homepage section order (structural recommendation, not copy)

1. Hero — one headline, one primary CTA ("Plan My Trip"), one secondary CTA ("Explore India"). Per CTA research: single specific action, above the fold.
2. Popular India Destinations — cards linking to existing state hub guides (real content already exists for every card; do not add a destination card unless its guide is published).
3. Travel Styles — cards linking to the new `/packages/<style>` pages.
4. How Kudozz Club Works — 3–4 steps reflecting the *actual* in-house model confirmed this session (enquire → we plan → you review → we coordinate). Do not add steps describing services not actually offered (e.g., no "24/7 concierge" unless true).
5. Why Travel With Kudozz Club — only claims listed in `rebrand-audit.md` §5 as non-fabricated (in-house planning, India-specific destination depth from 583 guides, personal email follow-up). No claims about experience-years, customer counts, or awards.
6. Featured guides pulled from existing `RelatedPosts`-style scoring, not hand-picked evergreen stock content.
7. Footer — per spec §40, reflecting only real sections (no invented social links).

## 6. What Phase 2 build order should be, if/when approved

1. Nav + `/plan-your-trip` + contact-form extension (lowest risk, no schema changes, no URL changes to existing content).
2. One flagship `/packages/<state>` template, built and reviewed before replicating to all states.
3. Homepage restructure using the section order above.
4. About/Contact copy rewrite resolving `rebrand-audit.md` §2.
5. Everything schema/policy-related stays blocked until `human-input-required.md` items are answered.

## 7. Sources consulted (structural/intent research only)

- [Kesari Tours](https://www.kesari.in/), [SOTC](https://www.sotc.in/) — group-tour operator nav patterns
- [TravelTriangle](https://traveltriangle.com/) — marketplace model (explicitly rejected as a fit, see §1)
- [Tour My India](https://www.tourmyindia.com/) — state-level package page pattern
- [Enchanting Travels](https://www.enchantingtravels.com/destinations/india/) — 3-step consult funnel (adopted, see §1)
- [Custom Tours India](https://customtoursindia.com/) — direct-operator positioning
- CTA/landing-page best-practice research (Instapage, Travel Marketing School, LandingMetrics) — single-CTA, above-the-fold pattern (adopted, see §1)
