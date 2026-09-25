"""Research digest for writing a things-to-do article.
Usage: python3 digest.py <guide-slug> [extra-guide-slug ...]
Prints: guide title/state, headings, FAQs, strong-list items, the guide's hero,
credited images from the guide's and related guides' folders, and candidate
link targets (same-state guides)."""
import json, os, re, sys, html

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BLOG = os.path.join(ROOT, "src/app/blog")
cred = json.load(open(os.path.join(ROOT, "public/images/blogs/IMAGE_CREDITS.json")))["images"]
inv = {o["slug"]: o for o in json.load(open(os.path.join(ROOT, "scripts/things-to-do/inventory.json")))}


def clean(s):
    return html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>|\{\"?\s*|\s*\"?\}", " ", s))).strip()


def digest(slug, full=True):
    t = open(os.path.join(BLOG, slug, "page.tsx")).read()
    o = inv.get(slug, {})
    art = t.find("<article")
    hero = re.search(r'<Image\s+src="([^"]+)"', t[:art])
    print(f"=== {slug} | {o.get('title')} | {o.get('state')} | hero={hero.group(1) if hero else None}")
    body = t[art:]
    if full:
        hs = [("  " if m.group(1) == "h3" else "") + clean(m.group(2))[:50] for m in re.finditer(r"<(h2|h3)[^>]*>(.*?)</\1>", body, re.S)]
        print("  H: " + " | ".join(hs))
        items = re.findall(r"<li>\s*<strong>(.*?)</strong>(.*?)</li>", body, re.S)
        for a, b in items[:14]:
            print("  * " + clean(a)[:40] + " " + clean(b)[:110])
        faqs = re.findall(r'q:\s*"([^"]+)",\s*a:\s*"([^"]+)"', t)
        for q, a in faqs:
            print("  Q " + q + "\n    A " + a[:260])
    links = sorted(set(re.findall(r'href="/blog/([a-z0-9-]+)"', body)))
    print("  links:", " ".join(l.replace("-travel-guide", "") for l in links if l != slug))


def images(slugs):
    folders = set()
    for s in slugs:
        t = open(os.path.join(BLOG, s, "page.tsx")).read()
        for p in re.findall(r'"/images/(blogs/[^"]+/)[^"/]+"', t):
            folders.add(p)
    out = []
    for c in cred:
        folder = c["path"].rsplit("/", 1)[0] + "/"
        used = " ".join(c["usedIn"])
        name_tok = [s.replace("-travel-guide", "").split("-")[0] for s in slugs]
        if folder in folders or any(s in used for s in slugs) or any(len(n) > 3 and n in c["path"] for n in name_tok):
            out.append(c)
    print(f"--- credited images ({len(out)})")
    for c in out:
        print(f"  /images/{c['path']}  [{c.get('location') or ''}] ({c['license']})")


slugs = sys.argv[1:]
digest(slugs[0])
for s in slugs[1:]:
    digest(s, full=False)
images(slugs)
st = inv[slugs[0]]["state"]
print("--- same-state guides:", " ".join(k.replace("-travel-guide", "") for k, v in inv.items() if v["state"] == st))
