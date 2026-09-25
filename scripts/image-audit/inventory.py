"""Builds a per-guide image inventory: every image reference, its alt text,
the heading it sits under, credit status and relevance flags.
Output: scripts/image-audit/inventory.json"""
import os, re, json, collections

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BLOG = os.path.join(ROOT, "src/app/blog")
CRED = json.load(open(os.path.join(ROOT, "public/images/blogs/IMAGE_CREDITS.json")))["images"]
credited = {"/images/" + c["path"]: c for c in CRED}
hub = json.load(open(os.path.join(ROOT, "src/lib/state-hub-children.json")))
states_src = open(os.path.join(ROOT, "src/lib/all-states-data.ts")).read()
pk = re.findall(r'slug: "([a-z-]+)",\n\s*name: "([^"]+)",\n\s*region: "([^"]+)",\n\s*blogSlug: "([^"]+)"', states_src)
state_of = {}
for ps, name, region, hb in pk:
    state_of.setdefault(hb, (name, region, ps))
    for c in hub.get(hb, []):
        state_of.setdefault(c["slug"], (name, region, ps))

HEDGE = re.compile(r"\b(evok\w*|reminiscent|representative|illustrative|similar to|typical of|generic|stand-?in|in the style of|like those|such as those)\b", re.I)
IMG = re.compile(r'<Image\b(.*?)/>', re.S)

def attr(block, name):
    m = re.search(name + r'=\{?\s*"([^"]*)"', block) or re.search(name + r"=\{`([^`]*)`\}", block)
    return m.group(1) if m else None

def strip(s):
    return re.sub(r"<[^>]+>|\{[^}]*\}", "", s).strip()

out = []
usage = collections.defaultdict(set)
for slug in sorted(os.listdir(BLOG)):
    f = os.path.join(BLOG, slug, "page.tsx")
    if not os.path.exists(f):
        continue
    t = open(f).read()
    title = (re.search(r'title:\s*"([^"]+)"', t) or re.search(r"title:\s*'([^']+)'", t)).group(1)
    og = re.findall(r'url:\s*"(/images/[^"]+)"', t)
    art = t.find("<article")
    heads = [(m.start(), m.group(1), strip(m.group(2))) for m in re.finditer(r"<(h2|h3)[^>]*>(.*?)</\1>", t, re.S)]
    imgs = []
    for m in IMG.finditer(t):
        b = m.group(1)
        src = attr(b, "src")
        if not src:
            srcexpr = re.search(r"src=\{([^}]+)\}", b)
            src = "{" + srcexpr.group(1) + "}" if srcexpr else None
        alt = attr(b, "alt")
        pos = m.start()
        prev = [h for h in heads if h[0] < pos]
        kind = "hero" if (art > 0 and pos < art) else "content"
        imgs.append({
            "src": src, "alt": alt, "kind": kind,
            "heading": prev[-1][2] if prev and kind == "content" else None,
            "priority": "priority" in b,
            "credited": src in credited,
            "exists": bool(src and src.startswith("/images/") and os.path.exists(os.path.join(ROOT, "public", src.lstrip("/")))),
            "hedged": bool(alt and HEDGE.search(alt)),
        })
        if src:
            usage[src].add(slug)
    # images added by the audit: <GuideFigure src alt /> and GuidePhotoRow items
    for m in re.finditer(r'<GuideFigure\s+src="([^"]+)"\s+alt="([^"]*)"', t):
        prev = [h for h in heads if h[0] < m.start()]
        imgs.append({"src": m.group(1), "alt": m.group(2), "kind": "content", "heading": prev[-1][2] if prev else None,
                     "priority": False, "credited": m.group(1) in credited,
                     "exists": os.path.exists(os.path.join(ROOT, "public", m.group(1).lstrip("/"))),
                     "hedged": bool(HEDGE.search(m.group(2)))})
        usage[m.group(1)].add(slug)
    for m in re.finditer(r'\{ src: "([^"]+)", alt: "([^"]*)", caption: "[^"]*" \}', t):
        prev = [h for h in heads if h[0] < m.start()]
        imgs.append({"src": m.group(1), "alt": m.group(2), "kind": "content", "heading": prev[-1][2] if prev else None,
                     "priority": False, "credited": m.group(1) in credited,
                     "exists": os.path.exists(os.path.join(ROOT, "public", m.group(1).lstrip("/"))),
                     "hedged": False})
        usage[m.group(1)].add(slug)
    # data-array images (e.g. image: "/images/..." inside cards)
    for m in re.finditer(r'image:\s*"(/images/[^"]+)"', t):
        usage[m.group(1)].add(slug)
        imgs.append({"src": m.group(1), "alt": None, "kind": "data", "heading": None, "priority": False,
                     "credited": m.group(1) in credited,
                     "exists": os.path.exists(os.path.join(ROOT, "public", m.group(1).lstrip("/"))), "hedged": False})
    st = state_of.get(slug, ("", "", ""))
    out.append({
        "slug": slug, "title": title, "state": st[0], "region": st[1], "package": st[2],
        "og": og[0] if og else None,
        "h2": [h[2] for h in heads if h[1] == "h2" and h[0] > art],
        "h3": [h[2] for h in heads if h[1] == "h3" and h[0] > art],
        "images": imgs,
    })

for b in out:
    for i in b["images"]:
        i["used_by"] = len(usage.get(i["src"], ()))
json.dump(out, open(os.path.join(ROOT, "scripts/image-audit/inventory.json"), "w"), indent=1)

# Summary
n = len(out)
allimgs = [i for b in out for i in b["images"] if i["kind"] != "data"]
print("guides", n)
print("image refs", len(allimgs), "unique", len({i['src'] for i in allimgs}))
print("hero refs", sum(i['kind']=='hero' for i in allimgs), "content refs", sum(i['kind']=='content' for i in allimgs))
print("missing files", sum(not i['exists'] for i in allimgs))
print("uncredited refs", sum(not i['credited'] for i in allimgs), "unique", len({i['src'] for i in allimgs if not i['credited']}))
print("hedged alts", sum(i['hedged'] for i in allimgs))
print("images shared by >1 guide", len({i['src'] for i in allimgs if i['used_by']>1}))
print("guides w/ no content images", sum(1 for b in out if not any(i['kind']=='content' for i in b['images'])))
print("guides w/ uncredited hero", sum(1 for b in out if any(i['kind']=='hero' and not i['credited'] for i in b['images'])))
print("dist content imgs", sorted(collections.Counter(min(sum(i['kind']=='content' for i in b['images']),10) for b in out).items()))
print("no alt", sum(1 for i in allimgs if not i['alt']))
