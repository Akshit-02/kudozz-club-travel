"""Keep one modified date per blog URL, used by the sitemap, the visible
"Updated" line and the BlogPosting schema.

Source of truth:
- Hand-written guides (src/app/blog/<slug>/page.tsx): the schema's
  `dateModified`. If src/lib/blog-lastmod.json already holds a later date for
  the slug (it was generated from git history of real edits, e.g. the
  wrong-destination image corrections), that later date wins and is written
  back into the page's schema, so sitemap and schema agree.
- JSON articles (src/content/<cluster>/<slug>.json): `updated`, or
  2026-09-25 (the Things to Do publication date) when absent.

Writes src/lib/blog-lastmod.json. Run after changing a page's content:

  python3 scripts/seo-audit/sync-lastmod.py
"""
import glob, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LASTMOD = os.path.join(ROOT, "src/lib/blog-lastmod.json")
THINGS_TO_DO_PUBLISHED = "2026-09-25"


def main():
    old = json.load(open(LASTMOD))
    out, bumped = {}, 0
    for f in sorted(glob.glob(os.path.join(ROOT, "src/app/blog/*/page.tsx"))):
        slug = f.split("/")[-2]
        if slug == "[slug]":
            continue
        s = open(f).read()
        m = re.search(r'dateModified: "(\d{4}-\d{2}-\d{2})"', s)
        if not m:
            print("no dateModified:", slug)
            continue
        d = m.group(1)
        if old.get(slug, "") > d:
            d = old[slug]
            s = s[: m.start(1)] + d + s[m.end(1) :]
            open(f, "w").write(s)
            bumped += 1
        out[slug] = d
    for f in sorted(glob.glob(os.path.join(ROOT, "src/content/*/*.json"))):
        slug = os.path.basename(f)[:-5]
        out[slug] = json.load(open(f)).get("updated") or THINGS_TO_DO_PUBLISHED
    json.dump(dict(sorted(out.items())), open(LASTMOD, "w"), indent=2)
    open(LASTMOD, "a").write("\n")
    print(f"{len(out)} dates written; {bumped} guide schemas moved to their later git-derived date")


if __name__ == "__main__":
    main()
