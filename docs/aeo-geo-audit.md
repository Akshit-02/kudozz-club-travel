# AEO & GEO Audit

**Date:** 2026-09-24
**AEO** (answer engine optimisation): content shaped so search features and AI assistants can lift a direct, correct answer.
**GEO** (generative engine optimisation / geographic entity clarity): making places, and the relationships between them, explicit to search engines and LLMs.

---

## 1. Starting point

- **Guides were already strong on AEO.** The 36 hub guides and most place guides have question-based FAQs (with `FAQPage` schema), best-time sections, how-to-reach sections and budget tables. Nothing needed rewriting there.
- **Commercial pages had almost none.** Package pages answered only process questions ("How does Kudozz plan a trip?"). "Best time to visit Kerala" pointed away to the guide; "how many days", "cost" and "how to reach" weren't answered at all.
- **Geography was implicit.** Guides carried `about: Place` with `addressRegion`, but package pages had no place entity, nothing stated that Kerala is a state in South India, and there were no "near" relationships.
- `llms.txt` described the site as a publication and was out of date.

## 2. AEO changes

### Answer-first package pages
For the 13 priority destinations (Kashmir, Rajasthan, Kerala, Goa, Himachal, Uttarakhand, Ladakh, Meghalaya, Andaman, Karnataka, Madhya Pradesh, Gujarat, Sikkim), each package page now answers, under question-style headings:

| Question | Source of the answer |
|---|---|
| What is X known for? | Condensed from the hub guide's intro and things-to-do |
| How many days are enough? | The guide's "How many days" FAQ |
| What is the best time to visit? | The guide's best-time FAQ (plus a short `bestMonths` fact) |
| How do you reach X? | The guide's how-to-reach FAQ |
| How much does a trip cost? | The guide's own budget estimate, clearly attributed ("Our Kerala guide estimates…"). **Not** a package price. |
| Is it suitable for families / a honeymoon? | Written per destination, with honest caveats (altitude in Ladakh, the 3,500 steps at Nongriat, Gujarat being a dry state) |
| Do you need a permit? | Where relevant (Ladakh, Sikkim, Andaman, Himachal, Kashmir, Meghalaya) |
| Things to do / best places to visit | Lists linking to guides |

Every answer is a self-contained 1–3 sentence paragraph (liftable), repeated in a visible FAQ and in `FAQPage` JSON-LD with identical text. **All figures were copied from the site's own guides**, so a package page can't contradict its guide. The data lives in one file: `src/lib/destination-profiles.ts`.

The 23 remaining states get a "What is X known for?" answer from their hub guide's excerpt plus process FAQs, and link to the guide for the rest. Adding a profile upgrades a state automatically.

### Circuits
Golden Triangle, Char Dham Yatra and Northeast India pages answer: what it is, how many days, best time, where it starts. Char Dham includes the mandatory registration and the traditional west-to-east order.

### Homepage and About
Four brand FAQs on the homepage ("What does Kudozz Club do?", "Do you sell fixed packages?", "How much does it cost?", "How do I get started?") and four on About (including the Kudoz/Kudos spelling question), each with `FAQPage` schema.

## 3. GEO changes

### Explicit entity sentences
Every state package page opens with a plain-language relationship line, for example:

> **Kerala** is a state in South India, India. Kudozz Club plans trips to 15 places here, including Munnar, Alappuzha and Kochi. Nearby: Karnataka, Tamil Nadu, Lakshadweep.

The hero fact bar repeats *Type (State/UT, Region) · Ideal trip · Best months · Places covered*. Union territories are labelled correctly (J&K, Ladakh, Delhi, Chandigarh, Puducherry, Andaman & Nicobar, Lakshadweep, DNH&DD) via `UNION_TERRITORY_SLUGS`.

### Relationship graph (all data-driven, nothing hand-linked per page)

```
Country (India)
 └ Region (6)                 all-states-data.ts: region
    └ State / UT (36)         all-states-data.ts; adminLabel()
       ├ Hub guide            blogSlug
       ├ Places (582 guides)  state-hub-children.json
       ├ Popular places       destination-profiles.ts: popularPlaces (ordered)
       ├ Routes (itineraries) destination-profiles.ts: routes → stops → guides
       ├ Nearby states        destination-profiles.ts: nearby (fallback: same region)
       ├ Travel styles        travel-styles-data.ts: relatedStates (reverse)
       └ Package page         /packages/<slug>
Circuits (multi-state)        combo-packages.ts → states + stops
Guide → context               guide-context.ts → place, state, hub, siblings, package, prefilled enquiry
```

These relationships generate breadcrumbs, related packages, nearby destinations, sibling guides, route links, CTAs and schema, so they stay consistent as content grows.

### Schema
`TouristDestination` on each state package page, with `containedInPlace` (region → India), `includesAttraction` (up to 12 `TouristAttraction`s with guide URLs) and `subjectOf` (the guide). `TouristTrip` with an ordered itinerary on circuits. Guides keep their existing `about: Place` with `addressRegion`/`addressCountry`.

### llms.txt
Rewritten to state plainly what Kudozz Club is (India-focused travel agency; customized trips; enquiry-based pricing), how the site is organised (India → region → state → city → attraction, and the guide → package → enquiry funnel), and to list every real commercial URL before the full guide index. No invented URLs: the package list is generated from `all-states-data.ts`.

## 4. Next steps

1. Add profiles for the next states by likely demand: Tamil Nadu, Punjab (Amritsar), Uttar Pradesh (Varanasi/Agra), Odisha, West Bengal (Darjeeling), Assam, Maharashtra. About 30 lines each, taken from their hub FAQs.
2. Add a "Quick answers" box to the top of the 36 hub guides (days, best months, budget range, nearest airport) with the same figures. That is the most-quoted format in AI overviews.
3. When real reviews exist, add them (and only then any rating schema).
4. Add `geo` coordinates to `TouristDestination` once a verified coordinate source is chosen. Deliberately not guessed here.
