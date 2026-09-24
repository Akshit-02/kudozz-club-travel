# Homepage Conversion Strategy

**Date:** 2026-09-24 · **File:** `src/app/page.tsx`

## Goal

Direct visitors: **Homepage → Plan My Trip → Lead.** Every screen answers *where am I, what can I do, why trust Kudozz, what happens next, how do I enquire.*

## Above the fold

| Element | Content | Why |
|---|---|---|
| H1 | **Best Travel Agency in India for Trips Made Around You** | Contains the exact target phrase as visible text. "Made around you" carries the actual differentiator (customization) so the phrase reads as positioning, not a ranking claim. |
| Supporting copy | "From weekend escapes to long India holidays, Kudozz Club plans customized trips around your dates, budget, interests and travel style…" | Says *agency + India + customized* in one sentence. |
| Primary / secondary CTA | Plan My Trip → / Explore Tour Packages → | Two intents: ready to enquire, or still browsing. |
| Trust microcopy | Customized itineraries · India-wide destinations · In-house trip planning | All three are verifiable. |
| Hero form | "Where do you want to go?": destination, dates, travellers, trip type, budget → **Get My Custom Trip Plan** | See below. |
| Image | Single static photo (Dal Lake houseboats) with `priority` | Replaces a 3-slide JS carousel: better LCP, no layout shift, a stable H1, less JS. |

### Why the hero form is two-step

The brief asked for five fields and "no unnecessary information at this stage", but a lead needs contact details. So the hero form is a **plain GET form** to `/plan-your-trip`, which pre-fills those five answers and asks for name and email (phone optional):

- **Commitment first:** answering easy trip questions before contact details is a well-established way to lift completion.
- Works **without JavaScript** and adds **zero client JS** to the homepage.
- Reuses the existing `/api/plan-trip` backend unchanged in behaviour (extended with the new optional fields).
- The full form confirms "We've kept what you already told us", so the second step feels like progress, not a restart.

**Trade-off:** some visitors will drop between steps. If analytics show heavy drop-off, add an email field to the hero form and submit it directly.

## Section order and conversion logic

| # | Section | Job | Exits to |
|---|---|---|---|
| 1–2 | Hero + enquiry form | Positioning + immediate conversion | `/plan-your-trip` (prefilled), `/packages` |
| 3 | Trust strip (580+ guides · 36 states & UTs · 6 regions · in-house planning) | Evidence of depth. Numbers are **computed from data** (`src/lib/site.ts`), so they can't drift. | none |
| 4 | "Where will you go next?": 12 destination cards | Choose a destination. Each card: Explore Destination → package page; Plan This Trip → prefilled enquiry. | `/packages/*`, `/plan-your-trip?destination=` |
| 5 | Why Kudozz Club | Differentiation: guide knowledge → planning. 6 true differentiators. | Let Us Plan Your Trip |
| 6 | How it works (4 steps) | Remove uncertainty about what happens next. | Start Planning |
| 7 | Travel your way (9 styles) | Second way in, by trip type. | `/packages/<style>` |
| 8 | India, planned your way (8 package cards + 3 circuit links) | Commercial intent. Shows a real route and duration on each card so it reads like a package, without fake prices. | `/packages/*` |
| 9 | Experiences mosaic | Emotion and aspiration; each links to the relevant guide. | `/blog/*` |
| 10 | Travel guides | For researchers; keeps the SEO asset visible. | `/blog/*` |
| 11 | Trust + FAQ | Objection handling: real people, no fake prices, independent guides, email contact; 4 FAQs (also `FAQPage` schema). | `/about` |
| 12 | Final CTA over Udaipur's Lake Palace | Last clear ask. | Plan My Trip / Explore India |
| 13 | Newsletter strip | Secondary capture for the not-ready. | none |

## Mobile

- The hero stacks: copy, then CTAs, then the form, all within the first two screens.
- The sticky bar appears only after the first screen, hides near the footer and on form pages, and reserves 64px so it never covers content.
- Header switches to the hamburger below 1024px; the drawer's primary action is Plan My Trip, with email as the fallback.

## Measurement to set up (not implemented)

GA4 is present (`G-6C19X2ET68`). Recommended events: `hero_form_submit`, `plan_trip_submit` (with `sourcePage`), `cta_click` (with location), `sticky_cta_click`. The enquiry email already includes "Came from", so leads can be attributed today by hand.
