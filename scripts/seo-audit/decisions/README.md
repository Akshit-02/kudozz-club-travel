# Per-article audit decisions

One file per review batch (`bNN.tsv`), one row per blog URL, tab-separated:

    slug  primary_keyword  intent  action  note  new_meta_description

- intent: I (informational), C (commercial investigation), T (transactional), N (navigational), L (local/place lookup)
- action: KEEP, OPTIMIZE, EXPAND, REWRITE, MERGE, REDIRECT, NOINDEX, REMOVE
- new_meta_description: empty = keep the current one. Written only where the current description
  is truncated in results (over ~165 characters), too thin, or off-intent.

`apply-decisions.py` writes the new descriptions into the pages; `build-inventory.py` joins these
rows with the crawl to produce docs/complete-url-inventory.csv and docs/content-priority-matrix.csv.
