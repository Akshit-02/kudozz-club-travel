# Kudozz Club — Competitor SERP & IA Analysis

**Date:** 2026-09-21
**Method:** Live web research (this session) into the current India-travel-agency competitive set — homepage/IA structure, package-page patterns, and CTA conventions. No competitor copy was reused anywhere on Kudozz Club; only structural and intent patterns were extracted, per the explicit instruction not to copy competitor content.

---

## 1. Competitor set observed

| Site | Model | Relevant to Kudozz Club? |
|---|---|---|
| [Kesari Tours](https://www.kesari.in/) | Large group-tour operator, senior/multigenerational focus | Low — different audience and model (fixed-departure group tours, not customized) |
| [SOTC](https://www.sotc.in/) | Large group-tour operator, heavy discounting | Low — same reason |
| [TravelTriangle](https://traveltriangle.com/) | Marketplace — connects travelers to 650+ local agents | Low — Kudozz Club fulfills in-house, not a marketplace |
| [Thrillophilia](https://www.thrillophilia.com/) | Activity/experience marketplace with package verticals | Low — activity-booking model, not full-trip planning |
| [Tour My India](https://www.tourmyindia.com/) | Direct operator, state-level package pages, custom itineraries | **High** — closest structural match |
| [Custom Tours India](https://customtoursindia.com/) | Direct operator, name signals customization | **High** |
| [Enchanting Travels](https://www.enchantingtravels.com/destinations/india/) | Direct operator, luxury-leaning, explicit 3-step consult funnel | **High** — funnel shape adopted, see below |
| [Immersive Trips](https://immersivetrips.in/) | Direct operator, conversation-first planning | **High** |
| Yatra, Akbar Travels, Thomas Cook | OTA package verticals | Low — packages are a secondary product line for these, not the core business |

## 2. IA pattern adopted: the 3-step consult funnel

Enchanting Travels' structure — **submit an enquiry → personal consultation → review a custom itinerary** — matches Kudozz Club's real, confirmed fulfillment model (in-house, email-based) far more closely than any marketplace or fixed-package pattern. This is why `/plan-your-trip` is built as a single enquiry form leading to human follow-up, not a checkout flow or a fixed-package price list. See `new-information-architecture.md` §1 and §5 ("How Kudozz Club Works").

## 3. IA pattern rejected: the marketplace trust-signal set

TravelTriangle-style trust signals ("650+ verified local experts," "10 Lac+ travelers") depend on being a marketplace with many independent suppliers behind it. Kudozz Club is one in-house team. Adopting this trust-signal language would misrepresent the actual business — explicitly avoided across every page built this session.

## 4. Package-page pattern adopted: state-level, not city-level

Tour My India and most direct operators organize commercial pages at the **state level** first (`/states/rajasthan/honeymoon-tours.html`-style URLs), with city/route detail nested inside or cross-linked, rather than a separate URL per city-route combination. This matches the decision in `new-information-architecture.md` §3 to build `/packages/<state>` pages and defer per-route pages until real demand is verified — it's also simply how the category already organizes itself, not just a Kudozz Club-specific choice.

## 5. Pricing display pattern

Mixed: OTA-style sites (Yatra, SOTC, Akbar Travels, Thomas Cook) publish from-prices and heavy discount framing ("Buy 1 Get 1 Free"). Direct operators closer to Kudozz Club's model (Enchanting Travels, Custom Tours India, Immersive Trips) do **not** publish fixed prices — they lead with a consultation/enquiry step instead. Kudozz Club's enquiry-based pricing (no invented prices) matches the direct-operator norm, not a competitive gap.

## 6. Content-tone pattern

Direct-operator sites lead with **destination storytelling and a clear single CTA**, not a wall of package SKUs. This informed the `/packages/<state>` page structure: an intro, real linked destination content, generic duration framing, trip-type tags, FAQ, and one enquiry CTA — not a grid of priced package cards.

## 7. What was deliberately NOT copied

- No specific headline, tagline, or paragraph copy from any competitor site.
- No fabricated scale claims (agent counts, traveler counts, ratings) from any competitor's marketing language.
- No discount-driven framing ("Buy 1 Get 1 Free," "50% off") — Kudozz Club has no real pricing to discount from.

## 8. Sources

- [Kesari Tours](https://www.kesari.in/)
- [SOTC](https://www.sotc.in/)
- [TravelTriangle](https://traveltriangle.com/)
- [Thrillophilia — Rajasthan Honeymoon Packages](https://www.thrillophilia.com/states/rajasthan/tags/honeymoon)
- [Tour My India](https://www.tourmyindia.com/)
- [Tour My India — Rajasthan Honeymoon Tours](https://www.tourmyindia.com/states/rajasthan/honeymoon-tours.html)
- [Custom Tours India](https://customtoursindia.com/)
- [Enchanting Travels — India](https://www.enchantingtravels.com/destinations/india/)
- [Akbar Travels — Rajasthan Packages](https://www.akbartravels.com/holidays/india-tour-packages/rajasthan-tour-packages)
- [Thomas Cook — Rajasthan Packages](https://www.thomascook.in/holidays/india-tour-packages/rajasthan-tour-packages)
- [Yatra — India Tour Packages](https://www.yatra.com/india-tour-packages/)
