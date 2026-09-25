# Blog image audit pipeline

Scripts used for the 2026-09 audit of every guide's images. Data files are the audit trail.

| Step | Script | Output |
|---|---|---|
| 1. Inventory every image in every guide | `inventory.py` | `inventory.json` (`inventory-before.json` = pre-audit snapshot) |
| 2. Decide keep / replace / add per image slot, from the article's own headings and lists | `plan.py` (helpers in `places.py`) | `plan.json` |
| 3. Find a free-licence Wikimedia Commons photo of each named place, download as WebP | `resolve.py` (search/scoring in `commons.py`) | `resolved.json`, files in `public/images/blogs/<state>/<guide>/` |
| 4. Visual review on contact sheets | `sheet.py`, `sheet_kept.py`, `review.py` | `reviewed.json`, `rejects.json`, `kept-rejects.json` |
| 5. Write approved images into the guides + credits | `apply.py`, `fill.py` / `fill_apply.py` | guide pages, `IMAGE_CREDITS.json` |
| 6. Docs | `report.py` | `docs/blog-image-*.md`, `docs/image-sources.md` |

Rules enforced in code: only CC0 / public domain / CC BY / CC BY-SA; the file's own title or description must name the place; landscape ≥1100px; no maps, drawings, people/fauna shots (except wildlife guides), details or signage; no image reused across guides; anything rejected on review is never offered again.

The Commons API cache (`.cache/`) is gitignored.
