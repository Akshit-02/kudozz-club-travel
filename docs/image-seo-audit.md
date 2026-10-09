# Image SEO Audit (2026-10-09)

Earlier detailed work: `blog-image-audit.md`, `blog-image-progress.md`, `blog-image-manual-review.md`, `image-sources.md`, and change-log §17 (56 wrong-destination images replaced on 2026-09-30).

## Inventory

| Metric | Value |
|---|---|
| Image files in `public/images` | 1,918 WebP + 32 JPG |
| Image paths referenced in source | 1,914 |
| Referenced but missing on disk | 0 |
| With a licence/credit record (`IMAGE_CREDITS.json`, shown at `/image-credits`) | 1,867 |
| **Referenced without a credit record** | **47** (17 `/images/destinations/*.jpg` heroes, 30 under `/images/blogs`) |

## Alt text
- **Content images** (guide heroes, figures, cluster article images): 100% have descriptive alt text naming the place.
- **387 empty `alt=""`** on the homepage (17) and package pages (370): decorative thumbnails inside links whose visible heading already names the place. Empty alt is the correct accessibility pattern here (WCAG H2/F89: avoids announcing the name twice). The same photos carry descriptive alt on their own guide pages, so image search is unaffected. **No change.**

## Accuracy
- The wrong-destination check done on 2026-09-30 (56 guides) still holds; no new mismatches found in this pass's card review.
- 23 places with no free photo use a textless Kudozz Club pattern cover, with alt text saying it is a cover. These are candidates for commissioned photography.

## Performance
- `images.unoptimized: true` (to stay inside Vercel Hobby limits): no AVIF, no `srcset` widths. Hero `<Image priority>` is used correctly; below-the-fold images are lazy.
- The 17 `/images/destinations/*.jpg` heroes are the heaviest assets and are used above the fold on the homepage and package pages (an LCP risk on mobile).

## Recommendations
| Priority | Action |
|---|---|
| P1 | Confirm the source and licence of the 47 uncredited images (especially the Kashmir homepage hero and the Udaipur final CTA) and add them to `IMAGE_CREDITS.json`, or replace them with credited Commons images |
| P1 | Convert the 17 destination JPG heroes to WebP at 1600 px and 1000 px (two sizes) with `sizes` attributes |
| P2 | If the Vercel plan allows, re-enable Next image optimisation for AVIF and responsive widths |
| P3 | Commission or buy photos for the 23 cover-only places |
