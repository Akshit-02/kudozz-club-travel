"""Validate every things-to-do article and generate src/lib/things-to-do-index.json.

Checks (fails loudly):
  - required fields, unique slug, slug == filename, slug does not collide with a guide folder
  - guide exists; every /blog/ and /packages/ link resolves; every image exists and is
    credited in public/images/blogs/IMAGE_CREDITS.json (or pre-existing and in use)
  - hero differs from the destination guide's hero
  - no banned AI-cliché phrases
Usage: python3 scripts/things-to-do/build.py [--quiet]
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CONTENT = os.path.join(ROOT, "src/content/things-to-do")
BLOG = os.path.join(ROOT, "src/app/blog")
guides = {d for d in os.listdir(BLOG) if os.path.exists(os.path.join(BLOG, d, "page.tsx"))}
credits = {"/images/" + c["path"] for c in json.load(open(os.path.join(ROOT, "public/images/blogs/IMAGE_CREDITS.json")))["images"]}
hub = json.load(open(os.path.join(ROOT, "src/lib/state-hub-children.json")))
states_src = open(os.path.join(ROOT, "src/lib/all-states-data.ts")).read()
pkgs = re.findall(r'slug: "([a-z-]+)",\n\s*name: "([^"]+)",\n\s*region: "([^"]+)",\n\s*blogSlug: "([^"]+)"', states_src)
pkg_slugs = {p[0] for p in pkgs}
for f in ("travel-styles-data.ts", "combo-packages.ts"):
    pkg_slugs |= set(re.findall(r'^\s{4}slug:\s*"([a-z0-9-]+)"', open(os.path.join(ROOT, "src/lib", f)).read(), re.M))
state_of = {}
for ps, name, region, hb in pkgs:
    state_of.setdefault(hb, (name, ps, hb))
    for c in hub.get(hb, []):
        state_of.setdefault(c["slug"], (name, ps, hb))

BANNED = re.compile(r"embark on|nestled in|treasure trove|breathtaking beauty|picturesque paradise|"
                    r"whether you(?:'|’)re a|get ready to|a paradise for|hidden gem of|unforgettable journey|"
                    r"look no further|in this article, we|dive into", re.I)
CLUSTER = [("best-time", "Best time to visit {d}"), ("how-to-reach", "How to reach {d}"),
           ("itinerary", "{d} itinerary"), ("visit-plan", "{d} visit plan"),
           ("where-to-stay", "Where to stay in {d}"), ("budget", "{d} trip budget")]

articles = []
for f in sorted(os.listdir(CONTENT)):
    if f.endswith(".json"):
        articles.append((f, json.load(open(os.path.join(CONTENT, f)))))
slugs = {a["slug"] for _, a in articles}
DEV = "--dev" in sys.argv
_plan = json.load(open(os.path.join(ROOT, "scripts/things-to-do/plan.json")))["eligible"]
planned = {p["slug"] for p in _plan}
tier = {p["slug"]: p["tier"] for p in _plan}
errors, warnings, index = [], [], []


def text_of(a):
    parts = a["intro"] + a["quickAnswer"] + [a.get("oneDay", "")] + a.get("tips", [])
    for s in a["sections"]:
        parts.append(s.get("intro", ""))
        for it in s["items"]:
            parts += [it["name"]] + it["body"] + list((it.get("facts") or {}).values())
    parts += [b["text"] for b in a.get("byTraveller", [])] + [x for f in a["faqs"] for x in (f["q"], f["a"])]
    parts += [n["note"] for n in a["nearby"]]
    return " ".join(parts)


def check_href(h, where):
    if h.startswith("/blog/"):
        s = h.split("/")[2].split("#")[0].split("?")[0]
        if s not in guides and s not in slugs:
            if DEV and s in planned:
                warnings.append(f"{where}: link to planned article {h}")
            else:
                errors.append(f"{where}: broken link {h}")
    elif h.startswith("/packages/"):
        if h.split("/")[2] not in pkg_slugs:
            errors.append(f"{where}: broken package link {h}")
    elif not h.startswith(("/plan-your-trip", "/destinations", "/packages")):
        errors.append(f"{where}: unexpected href {h}")


def check_img(img, where):
    p = os.path.join(ROOT, "public", img["src"].lstrip("/"))
    if not os.path.exists(p):
        errors.append(f"{where}: missing image {img['src']}")
    elif img["src"] not in credits:
        warnings.append(f"{where}: image without credit record {img['src']}")
    if not img.get("alt"):
        errors.append(f"{where}: image without alt")


for fname, a in articles:
    w = a.get("slug", fname)
    for k in ("slug", "destination", "guide", "title", "seoTitle", "description", "dek", "primaryKeyword",
              "hero", "intro", "quickAnswer", "sections", "faqs", "nearby", "tags"):
        if k not in a:
            errors.append(f"{w}: missing {k}")
    if fname != a["slug"] + ".json":
        errors.append(f"{w}: filename mismatch")
    if a["slug"] in guides:
        errors.append(f"{w}: slug collides with an existing guide folder")
    if a["guide"] not in guides:
        errors.append(f"{w}: guide {a['guide']} not found")
    check_img(a["hero"], w + " hero")
    gsrc = open(os.path.join(BLOG, a["guide"], "page.tsx")).read() if a["guide"] in guides else ""
    ghero = re.search(r'<Image\s+src="([^"]+)"', gsrc[:gsrc.find("<article")])
    if ghero and ghero.group(1) == a["hero"]["src"]:
        (warnings if DEV else errors).append(f"{w}: HERO-NEEDED hero duplicates the guide's hero")
    seen_imgs = {a["hero"]["src"]}
    sec_ids = [s["id"] for s in a["sections"]]
    if len(sec_ids) != len(set(sec_ids)):
        errors.append(f"{w}: duplicate section ids")
    for s in a["sections"]:
        if not s["items"]:
            errors.append(f"{w}: empty section {s['id']}")
        for it in s["items"]:
            if it.get("image"):
                check_img(it["image"], f"{w} / {it['name']}")
                if it["image"]["src"] in seen_imgs:
                    errors.append(f"{w}: image reused within article {it['image']['src']}")
                seen_imgs.add(it["image"]["src"])
            for l in it.get("links", []):
                check_href(l["href"], f"{w} / {it['name']}")
    for n in a["nearby"]:
        check_href(n["href"], f"{w} nearby")
    for st in a.get("styles", []):
        if st not in pkg_slugs:
            errors.append(f"{w}: unknown style {st}")
    if len(a["seoTitle"]) > 70:
        errors.append(f"{w}: seoTitle longer than 70 characters")
    if len(a.get("metaDescription") or a["description"]) > 190:
        errors.append(f"{w}: meta description longer than 190 characters")
    txt = text_of(a)
    for m in BANNED.finditer(txt):
        errors.append(f"{w}: banned phrase '{m.group(0)}'")
    if txt.count("—") > 6:
        warnings.append(f"{w}: {txt.count('—')} em dashes")
    words = len(txt.split())
    state, pkg, stateguide = state_of.get(a["guide"], ("", "", ""))
    cluster = []
    for anchor, label in CLUSTER:
        if f'id="{anchor}"' in gsrc and not (anchor == "visit-plan" and any(c["href"].endswith("#itinerary") for c in cluster)):
            cluster.append({"label": label.format(d=a["destination"]), "href": f"/blog/{a['guide']}#{anchor}"})
    items = sum(len(s["items"]) for s in a["sections"])
    if words < (1300 if tier.get(a["slug"]) == "A" else 950):
        warnings.append(f"{w}: only {words} words for tier {tier.get(a['slug'])}")
    index.append({
        "slug": a["slug"], "title": a["title"], "destination": a["destination"], "guide": a["guide"],
        "excerpt": a["description"], "image": a["hero"]["src"], "tags": a["tags"],
        "readTime": f"{max(4, round(words / 230))} min", "state": state, "stateGuide": stateguide,
        "package": pkg, "cluster": cluster, "_words": words, "_items": items, "_faqs": len(a["faqs"]),
    })

json.dump([{k: v for k, v in e.items() if not k.startswith("_")} for e in index],
          open(os.path.join(ROOT, "src/lib/things-to-do-index.json"), "w"), indent=1, ensure_ascii=False)
json.dump(index, open(os.path.join(ROOT, "scripts/things-to-do/built.json"), "w"), indent=1, ensure_ascii=False)
if "--quiet" not in sys.argv:
    for e in index:
        print(f"{e['slug']:48} {e['_words']:5}w {e['_items']:3} items {e['_faqs']:2} faqs")
print(f"{len(index)} articles, {sum(e['_words'] for e in index)} words; {len(errors)} errors, {len(warnings)} warnings")
for m in errors + warnings:
    print(("ERROR " if m in errors else "warn  ") + m)
sys.exit(1 if errors else 0)
