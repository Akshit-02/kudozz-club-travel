# Things to do: final report

Completed 2026-09-25.

## Outcome

| | |
|---|---|
| Destination guides audited | 582 |
| Eligible destinations | 143 (45 tier A, 98 tier B) |
| **Articles published** | **143 of 143** |
| Existing article audited (not duplicated) | 1 (Ranthambore first-time visitors) |
| Guides skipped, each with a documented reason | 438 |
| States and union territories covered | 35 |
| Words across the articles | 159,956 (950 to 2,316 per article) |
| Activities and sights covered as H3 sections | 2,045 |
| FAQs (with `FAQPage` schema) | 652 |
| In-article photos (plus 143 heroes) | 382 |

Every article lives at `/blog/things-to-do-in-<place>`, is in the sitemap, is indexable, has a self-referencing canonical and passes the checks listed below.

## What was built

- **Content**: one JSON file per article in `src/content/things-to-do/`, rendered by the single dynamic route `src/app/blog/[slug]/page.tsx` (`dynamicParams = false`). No second routing system; the existing guide folders still take precedence and no URL changed.
- **Article structure**:
  - intro, a Quick answer list, and activities grouped by type, each with an H3, text and a facts list;
  - a "by type of traveller" section, a one-day plan and practical tips;
  - "Plan the rest of your trip" links to the guide's best-time, how-to-reach, itinerary, stay and budget anchors, the state package, style packages and Plan My Trip;
  - FAQs, nearby articles, more in the same state, and related guides;
  - two quiet CTAs: the trip prompt after the intro, and the plan links near the end.
- **Schema**: `BlogPosting` (about `TouristDestination` in its state and India), `BreadcrumbList`, `ItemList` of activities and `FAQPage`.
- **Metadata**:
  - the `seoTitle` is at most 70 characters, and the meta description (`metaDescription`) is at most 190 characters;
  - the full description is used in listings and schema;
  - Open Graph and Twitter cards use the hero.
- **Internal linking**:
  - every destination guide with an article shows "See our guide to the best things to do in X" through `GuideTripCTA`, and the Ranthambore guide points to the existing Ranthambore article;
  - articles link to their guide, sibling articles, the state package and Plan My Trip;
  - state package pages list their state's articles in a new "Things to do in <state>" block;
  - articles appear in the blog index and related-posts widgets under the "Things to Do" category, excluded from `/destinations` to avoid double listing.
- **llms.txt**: new "Things to do by destination" section listing all 143 articles, and a note on how articles relate to guides.

## Images

- Every article has a hero that differs from its guide's hero. Nine heroes were newly sourced from Wikimedia Commons, visually reviewed and credited:
  - Mathura, Prayagraj, Lansdowne, Digha, Thekkady, Varkala;
  - Yercaud, Bir Billing, Surat.
- While writing, 10 guides were found still using a photo of the wrong place from before the image audit:
  - Bir Billing and Surat;
  - Yelagiri, Benreu, Tamdil Lake, Hmuifang, Laitlum and Bhimbetka;
  - Parasnath and Tatapani.
- Eight of those now have credited photos of the right place.
- Benreu and Tatapani have no suitable free photo on Commons; they now use a regional image with an honest "regional image" alt text (see `scripts/things-to-do/image-issues.md`).
- Blog-card images were synced to guide heroes where they had drifted (22 cards).
- All credits are in `public/images/blogs/IMAGE_CREDITS.json`.

## Writing standards applied

- Natural Indian English.
- A banned-phrase check blocks clichés such as "embark", "nestled", "treasure trove", "breathtaking beauty", "whether you're a" and "get ready to", and em dashes are limited.
- No invented prices, ticket rates or opening hours. Things that change (permits, closures, ropeway and ferry status, safari rules, festival dates) are flagged as "check before you go" rather than stated as current fact.
- No invented first-person experience. The one first-person article on the site is the existing credited guest contribution, left unchanged.
- Safety and access notes are included where relevant:
  - Manipur and Kashmir advisories;
  - the Wayanad 2024 landslides;
  - dangerous waterfalls and beaches;
  - border-area permits.

## Validation (all passing)

| Check | Result |
|---|---|
| `python3 scripts/things-to-do/build.py` (strict) | 143 articles, 0 errors, 0 warnings: required fields, links, credited images, alt text, hero differs from guide, no image reused in an article, banned phrases, word floors, title and description length, unique section ids, no empty sections |
| `npx tsc --noEmit` | pass |
| `npm run lint` | no warnings or errors |
| `npm run build` | 793 static pages generated |
| `node scripts/check-links.mjs` (now also checks things-to-do slugs) | 15,698 references, none broken |
| `python3 scripts/things-to-do/verify-html.py` | 143 pages: canonical, no noindex, one H1, title and description length, OG image, all five schema types, images on disk, unique titles and descriptions, no slug collision, all in the sitemap |
| Production server (`next start`) | all 143 URLs return 200; unknown slugs return 404; guide pointer and package links render |

## Docs

- `docs/things-to-do-destination-inventory.md`: every guide, eligibility and skip reasons.
- `docs/things-to-do-title-map.md`: URLs, H1s and SEO titles.
- `docs/things-to-do-keyword-map.md`: primary and secondary keywords, intent and cannibalisation guard (0 duplicate primaries).
- `docs/things-to-do-aeo-map.md`: quick answers, activities and FAQs per article.
- `docs/things-to-do-geo-map.md`: entities and schema per article.
- `docs/things-to-do-serp-research.md`: what ranks, the gap targeted, and title and slug choices.
- `docs/things-to-do-progress.md`: per-article status, words, activities, FAQs and hero.
- `docs/things-to-do-redirects.md`: no redirects needed, plus the list of new URLs.

All of these except this report are generated by `python3 scripts/things-to-do/report.py`.

## How to add or update an article

1. Add or edit `src/content/things-to-do/things-to-do-in-<place>.json`. `scripts/things-to-do/mini.py <guide-prefix>` gives a quick digest of the guide and its credited images.
2. Run `python3 scripts/things-to-do/build.py`. This validates the article and regenerates `src/lib/things-to-do-index.json`, which feeds listings, links and the sitemap.
3. For a new hero, run `python3 scripts/things-to-do/heroes.py find` (after adding a target), review the contact sheets, then `heroes.py apply key=N`.
4. Run `python3 scripts/things-to-do/report.py` to refresh the docs.

## Follow-ups for the team

- Benreu and Tatapani guides: replace the regional hero with a photo of the place if one becomes available (own photography or a newly licensed image).
- Time-sensitive facts to re-check each season, since they are written as "check before you go":
  - the Joshimath–Auli ropeway, Chembra Peak and Kuruva Island access;
  - Baisaran meadow access, Gurez registration and the Nathula open days;
  - Monkey Point in Kasauli, the Kingdom of Dreams in Gurugram and the Kolkata tram routes.
- The existing Ranthambore guest article is first-person and names a partner resort; keep its guest-contribution credit visible, as `llms.txt` states.
