# Kudozz Club — Travel Agency Keyword & Search-Intent Research

**Date:** 2026-09-21
**Method:** Live web research (this session) into current India-travel-agency search results and travel-content best practices. No search-volume numbers are claimed anywhere below — none were sourced from a tool with real volume data. This is an intent and structure map, not a volume-ranked keyword list.
**Relationship to other docs:** This is the standalone research file referenced in `new-information-architecture.md` and feeds `keyword-map-commercial.md`'s intent assignments.

---

## 1. Commercial search intent — India tour packages

Live research into "best travel agency in India," "India tour packages," and related queries surfaces a consistent set of players and patterns:

- **Group-tour operators** (Kesari Tours, SOTC) — large, brand-recognized, oriented toward multigenerational/senior-citizen group travel, heavy discount messaging ("Buy 1 Get 1 Free" appears repeatedly in Rajasthan package SERPs).
- **Marketplaces** (TravelTriangle, Thrillophilia) — connect travelers to a network of local agents rather than fulfilling in-house.
- **Direct operators / boutique agencies** (Tour My India, Custom Tours India, Enchanting Travels) — plan and fulfill trips themselves, closer to Kudozz Club's actual model.
- **OTAs with package verticals** (Yatra, Akbar Travels, Thomas Cook) — packages are one product line among flights/hotels/forex.

**Implication for Kudozz Club:** the "direct operator" category is the correct reference set, not the marketplace or OTA patterns. Confirmed in `new-information-architecture.md` §1.

## 2. Commercial keyword patterns (by destination)

Sampling Rajasthan-specific SERPs, the recurring keyword shape is:

- `<state> tour packages` (primary)
- `<state> holiday packages`
- `<state> honeymoon packages` (very commonly a distinct, high-frequency variant — nearly every competitor has a dedicated honeymoon-packages sub-page per state)
- `<state> tour packages from <origin city>` (e.g., "Rajasthan Travel from Kerala") — an origin-city-qualified variant exists but is a long-tail pattern, not a primary target
- `<state> family tour packages`

This pattern is what `keyword-map-commercial.md` applies across all 36 states/UTs.

## 3. Informational search intent — trip planning

Research into "best time to visit India," "how to plan an India trip," and "India trip cost" queries confirms:

- **Best time to visit**: near-universal consensus that **November–February** is the overall best window (dry, cooler weather), with **April–June** framed as a value/shoulder-season trade-off. This matches what Kudozz Club's existing state-guide template already covers per-state (see `keyword-map.md`'s validated pattern) — the commercial layer doesn't need to re-answer this, just link to the existing guides.
- **Trip length**: sources converge on **7–14 days** as the ideal first-timer trip length, and recommend **basing a trip around one or two regions** rather than the whole country (e.g., a 7–10 day Golden Triangle circuit as a common first-trip recommendation). This directly supports the "3/5/7/10+ day" package-duration framing used on every `/packages/<state>` page.
- **Trip cost**: figures cited (e.g., ~$55/day mid-range, $137+/day luxury, 50–60% lower for backpacker-style travel) are third-party estimates from cost-calculator sites, not Kudozz Club's own pricing. **Not used anywhere on the site** — Kudozz Club's packages stay enquiry-based per the explicit no-fake-pricing rule. Flagged here only as evidence that "how much does an India trip cost" is a real, answerable informational query the existing blog content (not the commercial pages) could address with genuine budget-breakdown content, which `content-gaps.md` already tracks for individual destinations.

## 4. Trust-signal and policy patterns (competitor reference only — not adopted without real data)

Research into competitor FAQ/cancellation-policy pages found:

- Cancellation policies are typically tiered by days-before-departure (e.g., one operator: no charge 5+ days out, 25% forfeit inside 5 days; another: 10%/25%/50% tiers at 45/15/7 days).
- A recurring trust signal on smaller direct-operator sites is founder/owner-level personal involvement messaging ("personally overseen by the owner").

**This is reference material only.** Per `human-input-required.md`, Kudozz Club's actual cancellation terms are not yet defined — nothing above should be copied into a live policy page. It's recorded here so that whoever drafts the real policy has a sense of the tiered-percentage structure the category typically uses.

## 5. What this research did NOT find a need for

- No evidence that a marketplace/multi-agent trust framing ("650+ verified agents") fits Kudozz Club — that pattern belongs to TravelTriangle's business model, not an in-house operator.
- No evidence that published from-prices are required to compete — enquiry-based pricing is common practice among direct operators (Enchanting Travels, Custom Tours India), not a disadvantage.

## 6. Sources

- [Kesari Tours](https://www.kesari.in/)
- [SOTC](https://www.sotc.in/)
- [216 Best India Tour Companies — Travelstride](https://www.travelstride.com/tc/india-tour-companies)
- [10 Best India Tour Operators — TourRadar](https://www.tourradar.com/g/india-tour-operators)
- [Top India Travel Agents — Holidify](https://www.holidify.com/country/india/travel-agents.html)
- [Enchanting Travels — India](https://www.enchantingtravels.com/destinations/india/)
- [TravelTriangle](https://traveltriangle.com/)
- [Tour My India](https://www.tourmyindia.com/)
- [Custom Tours India](https://customtoursindia.com/)
- [Rajasthan Honeymoon Packages — Yatra](https://www.yatra.com/india-tour-packages/honeymoon-holidays-in-rajasthan)
- [Rajasthan Tour Packages — SOTC](https://www.sotc.in/india-tour-packages/rajasthan-tour-packages)
- [Rajasthan Travel from Kerala](https://www.rajasthantourpackages.in/tours-by-city/from-kerala)
- [Best Time to Visit India — TourRadar](https://www.tourradar.com/tg/best-time-to-visit-india)
- [How to Plan a Trip to India 2026](https://www.highlightstravel.com/india/plan-a-trip)
- [Travel Cost to India 2026](https://travelcostcalculator.org/cost/india)
- [Terms and Conditions — Tour My India](https://www.tourmyindia.com/terms_conditions.html)
- [FAQ — South India Travel Corporation](http://www.southindiatravel.com/faq)
- Travel-landing-page CTA research: [Instapage](https://instapage.com/blog/travel-landing-page-examples), [Travel Marketing School](https://www.travelmarketingschool.com/create-travel-landing-page/), [LandingMetrics](https://www.landingmetrics.com/best-cta/ranked-showcase-best-calls-to-action-on-travel-landing-pages)
