"""Write resolved images into the guide pages, blog-posts.ts and the credits file.

Idempotent per guide: a guide is applied once (tracked in applied.json).
Usage: python3 apply.py [--only slug,slug]
"""
import json, os, re, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
PLAN = {p["slug"]: p for p in json.load(open(os.path.join(HERE, "plan.json")))}
from store import load_resolved  # noqa: E402
RES = load_resolved()
REJ = set(json.load(open(os.path.join(HERE, "rejects.json")))) if os.path.exists(os.path.join(HERE, "rejects.json")) else set()
APPLIED_F = os.path.join(HERE, "applied.json")
applied = json.load(open(APPLIED_F)) if os.path.exists(APPLIED_F) else {}
CRED_F = os.path.join(ROOT, "public/images/blogs/IMAGE_CREDITS.json")
POSTS_F = os.path.join(ROOT, "src/lib/blog-posts.ts")
IMG = re.compile(r"<Image\b(.*?)/>", re.S)


def jsx(s):
    """Escape a string for a JSX double-quoted attribute."""
    return s.replace('"', "&quot;").replace("{", "(").replace("}", ")")


def ok(v, slug, key):
    return v and not v.get("remove") and f"{slug}:{key}|{v['title']}" not in REJ


def where(g, v):
    """Human locality for alt/captions: 'Jaipur, Rajasthan' style."""
    place = v["place"]
    loc = g["place"] if g["place"].lower() not in place.lower() else (g["state"] or "")
    if loc and loc.lower() in place.lower():
        loc = ""
    return place, loc


def alt_for(g, v, hero=False):
    place, loc = where(g, v)
    title = v["title"].lower()
    lead = ""
    if place.lower() == g["place"].lower() and re.search(r"panoram|skyline|view|aerial", title):
        lead = "View of "
    return f"{lead}{place}{', ' + loc if loc else ''}"


def caption_for(g, v):
    place, loc = where(g, v)
    return f"{place}{', ' + loc if loc else ''}"


def set_attr(block, name, value):
    if re.search(name + r'="[^"]*"', block):
        return re.sub(name + r'="[^"]*"', f'{name}="{jsx(value)}"', block, count=1)
    return re.sub(name + r"=\{[^}]*\}", f'{name}="{jsx(value)}"', block, count=1)


def apply_guide(slug):
    g = PLAN[slug]
    rec = RES.get(slug)
    if not rec:
        return None
    f = os.path.join(ROOT, "src/app/blog", slug, "page.tsx")
    t = open(f).read()
    art = t.find("<article")
    slots = g["slots"]
    changes = {"hero": 0, "replaced": 0, "removed": 0, "added": 0, "credits": []}

    # ---- existing <Image> blocks, located by order
    blocks = [(m.start(), m.end(), m.group(1)) for m in IMG.finditer(t)]
    hero_blk = next((b for b in blocks if b[0] < art), None)
    content_blks = [b for b in blocks if b[0] > art]
    edits = []  # (start, end, replacement)

    for si, s in enumerate(slots):
        v = rec["slots"].get(str(si))
        if s["type"] == "hero" and ok(v, slug, si) and hero_blk:
            old_src = s["current"]
            alt = alt_for(g, v, hero=True)
            nb = set_attr(set_attr(hero_blk[2], "src", v["src"]), "alt", alt)
            edits.append((hero_blk[0], hero_blk[1], "<Image" + nb + "/>"))
            changes["hero"] = 1
            changes["credits"].append((v, f"{slug} (hero)"))
            g["_hero"] = (old_src, v["src"], alt, v["w"], v["h"])
        elif s["type"] == "content":
            if s["keep"]:
                continue
            if s["index"] >= len(content_blks):
                continue
            st, en, blk = content_blks[s["index"]]
            if v and v.get("remove"):
                # remove the wrapper <div ...> ... </div> around this image
                ws = t.rfind("<div", 0, st)
                we = t.find("</div>", en) + len("</div>")
                if t[we:we + 1] == "\n":
                    we += 1
                ls = t.rfind("\n", 0, ws) + 1
                edits.append((ls, we, ""))
                changes["removed"] += 1
            elif ok(v, slug, si):
                nb = set_attr(set_attr(blk, "src", v["src"]), "alt", alt_for(g, v))
                edits.append((st, en, "<Image" + nb + "/>"))
                changes["replaced"] += 1
                changes["credits"].append((v, f"{slug} ({s.get('heading') or 'content'})"))
            else:
                # No verified image of this place exists. The current one is either a
                # different place, a generic stand-in, or has no provenance record, so
                # it's removed rather than left mislabelling the section.
                ws = t.rfind("<div", 0, st)
                we = t.find("</div>", en) + len("</div>")
                if t[we:we + 1] == "\n":
                    we += 1
                ls = t.rfind("\n", 0, ws) + 1
                edits.append((ls, we, ""))
                changes["removed"] += 1
                changes.setdefault("removed_unverified", []).append(s["current"])

    # ---- additions: after the matching </h3>, or after the section's list
    for si, s in enumerate(slots):
        if s["type"] == "add-h3":
            v = rec["slots"].get(str(si))
            if not ok(v, slug, si):
                continue
            m = None
            for mm in re.finditer(r"<h3[^>]*>(.*?)</h3>", t):
                if mm.start() > art and re.sub(r"<[^>]+>|\{[^}]*\}", "", mm.group(1)).strip() == s["heading"]:
                    m = mm
                    break
            if not m:
                continue
            ls = t.rfind("\n", 0, m.start()) + 1
            indent = t[ls:m.start()]
            ins = f'\n{indent}<GuideFigure src="{v["src"]}" alt="{jsx(alt_for(g, v))}" />'
            edits.append((m.end(), m.end(), ins))
            changes["added"] += 1
            changes["credits"].append((v, f"{slug} ({s['heading']} section)"))
        elif s["type"] == "add-row":
            items = []
            for k in range(len(s["places"])):
                v = rec["slots"].get(f"{si}.{k}")
                if ok(v, slug, f"{si}.{k}"):
                    items.append(v)
            if len(items) < 2:
                continue  # a single image isn't a row; skip rather than force it
            m = None
            for mm in re.finditer(r"<h2>(.*?)</h2>(.*?)</section>", t, re.S):
                if mm.start() > art and re.sub(r"<[^>]+>", "", mm.group(1)).strip() == s["heading"]:
                    m = mm
                    break
            if not m:
                continue
            ul_end = t.find("</ul>", m.start(2), m.end(2))
            if ul_end < 0:
                continue
            pos = ul_end + len("</ul>")
            ls = t.rfind("\n", 0, ul_end) + 1
            indent = t[ls:ul_end]
            rows = "\n".join(
                f'{indent}    {{ src: "{v["src"]}", alt: "{alt_for(g, v)}", caption: "{caption_for(g, v)}" }},'
                for v in items)
            ins = f"\n{indent}<GuidePhotoRow\n{indent}  images={{[\n{rows}\n{indent}  ]}}\n{indent}/>"
            edits.append((pos, pos, ins))
            changes["added"] += len(items)
            for v in items:
                changes["credits"].append((v, f"{slug} ({s['heading']} section)"))

    if not (changes["hero"] or changes["replaced"] or changes["removed"] or changes["added"]):
        return changes

    for st, en, rep in sorted(edits, key=lambda e: -e[0]):
        t = t[:st] + rep + t[en:]

    # hero metadata: OG / Twitter / JSON-LD image and OG alt
    if "_hero" in g:
        old, new, alt, w, h = g["_hero"]
        t = t.replace(f'url: "{old}"', f'url: "{new}"')
        t = t.replace(f'images: ["{old}"]', f'images: ["{new}"]')
        t = t.replace(f'"https://club.kudozz.in{old}"', f'"https://club.kudozz.in{new}"')
        t = t.replace(f'image: "{old}"', f'image: "https://club.kudozz.in{new}"')
        t = re.sub(r'(url: "' + re.escape(new) + r'",\s*width: )\d+(,\s*height: )\d+',
                   lambda m: f"{m.group(1)}{w}{m.group(2)}{h}", t)
        t = re.sub(r'(url: "' + re.escape(new) + r'",\s*(?:width: \d+,\s*height: \d+,\s*)?alt:\s*)"[^"]*"',
                   lambda m: m.group(1) + json.dumps(alt), t)

    if "GuideFigure" in t or "GuidePhotoRow" in t:
        names = [n for n in ("GuideFigure", "GuidePhotoRow") if f"<{n}" in t]
        imp = f'import {{ {", ".join(names)} }} from "@/components/ui/GuideImages";'
        t = re.sub(r'import \{[^}]*\} from "@/components/ui/GuideImages";\n', "", t)
        anchor = 'import GuideTripCTA from "@/components/ui/GuideTripCTA";'
        t = t.replace(anchor, anchor + "\n" + imp, 1) if anchor in t else t.replace(
            'import Image from "next/image";', 'import Image from "next/image";\n' + imp, 1)
    open(f, "w").write(t)
    return changes


def update_posts_and_credits(results):
    posts = open(POSTS_F).read()
    cred = json.load(open(CRED_F))
    by_path = {c["path"]: c for c in cred["images"]}
    for slug, (changes, g) in results.items():
        if "_hero" in g:
            old, new = g["_hero"][0], g["_hero"][1]
            m = re.search(r'slug:\s*"' + re.escape(slug) + r'",.*?image:\s*"([^"]+)"', posts, re.S)
            if m and m.group(1) == old:
                posts = posts[:m.start(1)] + new + posts[m.end(1):]
        for v, used in changes["credits"]:
            path = v["src"].replace("/images/", "", 1)
            c = by_path.get(path)
            if c:
                if used not in c["usedIn"]:
                    c["usedIn"].append(used)
                continue
            rec = {
                "path": path, "usedIn": [used], "source": "Wikimedia Commons",
                "sourcePage": v["page"], "originalFile": v["title"].replace("File:", "", 1),
                "license": v["licence"], "author": v["author"] or "Unknown (see source page)",
                "attribution": f"Photo by {v['author'] or 'see source page'}, {v['licence']}, via Wikimedia Commons",
                "location": v["place"], "accessed": v["accessed"],
            }
            cred["images"].append(rec)
            by_path[path] = rec
    open(POSTS_F, "w").write(posts)
    json.dump(cred, open(CRED_F, "w"), indent=2, ensure_ascii=False)


if __name__ == "__main__":
    only = set(sys.argv[sys.argv.index("--only") + 1].split(",")) if "--only" in sys.argv else None
    results = {}
    for slug in PLAN:
        if only and slug not in only:
            continue
        if slug in applied or slug not in RES or not RES[slug].get("complete"):
            continue
        ch = apply_guide(slug)
        if ch is None:
            continue
        results[slug] = (ch, PLAN[slug])
        applied[slug] = {k: v for k, v in ch.items() if k not in ("credits",)} | {"at": time.strftime("%Y-%m-%d %H:%M")}
    update_posts_and_credits(results)
    json.dump(applied, open(APPLIED_F, "w"), indent=1)
    print(f"applied {len(results)} guides:",
          {k: sum(r[0][k] for r in results.values()) for k in ("hero", "replaced", "removed", "added")})
