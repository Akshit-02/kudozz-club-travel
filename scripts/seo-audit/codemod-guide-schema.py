"""Normalise the BlogPosting JSON-LD in the 582 hand-written guide pages.

- Moves the BreadcrumbList out of `BlogPosting.breadcrumb` (a WebPage-only
  property, so validators flag it) into a top-level @graph node.
- Points publisher and author at the site's Organization entity (@id) and
  swaps the 88px favicon logo for the 512px /logo.png.
- Makes a relative schema image URL absolute.
- Replaces the hand-coded visible breadcrumb and its schema with the shared
  data-driven <GuideBreadcrumb> / guideBreadcrumbSchema() (Home ›
  Destinations › State › Place), keeping each page's own place label.

Idempotent: files already converted (contain "@graph") are skipped.

  python3 scripts/seo-audit/codemod-guide-schema.py
"""
import glob, re, sys

ORG = '''{
            "@type": "Organization",
            "@id": "https://club.kudozz.in/#organization",
            name: "Kudozz Club",
            url: "https://club.kudozz.in",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          }'''


def match_brace(s, i):
    """Index of the bracket closing s[i] ('{' or '['), skipping strings."""
    open_c = s[i]
    close_c = {"{": "}", "[": "]"}[open_c]
    depth, j, q = 0, i, None
    while j < len(s):
        c = s[j]
        if q:
            if c == "\\":
                j += 2
                continue
            if c == q:
                q = None
        elif c in "\"'`":
            q = c
        elif c in "{[":
            depth += 1
        elif c in "}]":
            depth -= 1
            if depth == 0:
                if c != close_c:
                    raise ValueError("mismatched bracket")
                return j
        j += 1
    raise ValueError("unbalanced")


def top_level_key(obj, key):
    """(start, end) of `key: <value>,?` at depth 1 of the object text."""
    pat = re.compile(r"(\s*)" + re.escape(key) + r"\s*:\s*(?=[{\[])")
    depth, j, q = 0, 0, None
    while j < len(obj):
        c = obj[j]
        if q:
            if c == "\\":
                j += 2
                continue
            if c == q:
                q = None
            j += 1
            continue
        if c in "\"'`":
            q = c
        elif c in "{[":
            depth += 1
        elif c in "}]":
            depth -= 1
        # A key starts right after "{" or "," at depth 1.
        if depth == 1 and c in "{,":
            m = pat.match(obj, j + 1)
            if m:
                vs = m.end()
                ve = match_brace(obj, vs)
                end = ve + 1
                m2 = re.match(r"\s*,", obj[end:])
                if m2:
                    end += m2.end()
                return j + 1, end, obj[vs : ve + 1]
        j += 1
    return None


NAV = re.compile(r'<nav[^>]*aria-label="Breadcrumb"[^>]*>.*?</nav>', re.S)
IMPORT = 'import GuideBreadcrumb, { guideBreadcrumbSchema } from "@/components/ui/GuideBreadcrumb";'


def convert(s, slug):
    if '"@graph"' in s:
        return s, "skip"
    nav = NAV.search(s)
    if not nav:
        return s, "no-nav"
    labels = re.findall(r'label: "((?:[^"\\]|\\.)*)", href: null', nav.group(0))
    if not labels:
        return s, "no-label"
    label = labels[-1]
    s = s[: nav.start()] + f'<GuideBreadcrumb slug="{slug}" label="{label}" />' + s[nav.end() :]
    k = s.find('"@type": "BlogPosting"')
    if k < 0:
        return s, "no-blogposting"
    start = s.rfind("JSON.stringify(", 0, k) + len("JSON.stringify(")
    start = s.index("{", start)
    end = match_brace(s, start)
    obj = s[start : end + 1]
    bc = top_level_key(obj, "breadcrumb")
    if not bc:
        return s, "no-breadcrumb"
    b0, b1, bval = bc
    obj2 = obj[:b0] + obj[b1:]
    obj2 = re.sub(r'"@context":\s*"https://schema.org",\s*', "", obj2, count=1)
    crumb = f'guideBreadcrumbSchema("{slug}", "{label}")'
    new = '{\n          "@context": "https://schema.org",\n          "@graph": [\n          ' + obj2 + ",\n          " + crumb + ",\n          ],\n        }"
    s = s[:start] + new + s[end + 1 :]
    s = re.sub(
        r'publisher: \{\s*"@type": "Organization",\s*name: "Kudozz Club",\s*logo: \{\s*"@type": "ImageObject",\s*url: "https://club.kudozz.in/favicon.ico",?\s*\},?\s*\},',
        "publisher: " + ORG + ",",
        s,
        count=1,
    )
    s = re.sub(
        r'author: \{\s*"@type": "Organization",\s*name: "Kudozz Club",?\s*\},',
        "author: " + ORG + ",",
        s,
        count=1,
    )
    s = re.sub(r'(\n\s+image: )"/images', r'\1"https://club.kudozz.in/images', s, count=1)
    first_import = s.index("import ")
    s = s[:first_import] + IMPORT + "\n" + s[first_import:]
    return s, "ok"


def main():
    files = [f for f in glob.glob("src/app/blog/*/page.tsx") if "[slug]" not in f]
    stats = {}
    for f in sorted(files):
        s = open(f).read()
        slug = f.split("/")[-2]
        out, status = convert(s, slug)
        stats[status] = stats.get(status, 0) + 1
        if status == "ok":
            open(f, "w").write(out)
        elif status != "skip":
            print(status, f)
    print(stats)


if __name__ == "__main__":
    main()
