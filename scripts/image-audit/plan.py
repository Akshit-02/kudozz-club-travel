"""Per-guide image plan: which images to keep, replace or add, and which
specific place each slot must show. Output: scripts/image-audit/plan.json"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
from commons import tokens  # noqa: E402

inv = json.load(open(os.path.join(HERE, "inventory.json")))
cred = {"/images/" + c["path"]: c for c in json.load(open(os.path.join(ROOT, "public/images/blogs/IMAGE_CREDITS.json")))["images"]}
posts_src = open(os.path.join(ROOT, "src/lib/blog-posts.ts")).read()
_kr = os.path.join(HERE, "kept-rejects.json")
kept_rejects = {(r[0], r[3]) for r in json.load(open(_kr))} if os.path.exists(_kr) else set()
hub_children = json.load(open(os.path.join(ROOT, "src/lib/state-hub-children.json")))
titles = dict(re.findall(r'slug:\s*"([^"]+)",\s*\n\s*title:\s*"([^"]+)"', posts_src))
prof_src = open(os.path.join(ROOT, "src/lib/destination-profiles.ts")).read()
popular = {}
for m in re.finditer(r'blogSlug|popularPlaces: \[(.*?)\]', prof_src, re.S):
    pass
states_src = open(os.path.join(ROOT, "src/lib/all-states-data.ts")).read()
hub_pkg = {hb: ps for ps, hb in re.findall(r'slug: "([a-z-]+)",\n\s*name: "[^"]+",\n\s*region: "[^"]+",\n\s*blogSlug: "([^"]+)"', states_src)}
for m in re.finditer(r'slug: "([a-z-]+)",\n    shortName.*?popularPlaces: \[(.*?)\]', prof_src, re.S):
    popular[m.group(1)] = re.findall(r'"([a-z0-9-]+)"', m.group(2))

from places import *  # noqa: E402,F401,F403


plan = []
for b in inv:
    slug = b["slug"]
    t = open(os.path.join(ROOT, "src/app/blog", slug, "page.tsx")).read()
    place = place_of_title(b["title"])
    state = b["state"]
    ctx = [x for x in tokens(place) + tokens(state or "")]
    attraction_guide = bool(ATTRACTION_WORDS.search(place))

    # Places named in the article, in reading order.
    art = t.find("<article")
    named = []
    parent = {}
    h2s = [(m.start(), re.sub(r"<[^>]+>|\{[^}]*\}", "", m.group(1)).strip()) for m in re.finditer(r"<h2[^>]*>(.*?)</h2>", t[art:], re.S)]
    for m in re.finditer(r"<h3[^>]*>(.*?)</h3>", t[art:], re.S):
        h = re.sub(r"<[^>]+>|\{[^}]*\}", "", m.group(1)).strip()
        par = [x for x in h2s if x[0] < m.start()]
        parent[h] = par[-1][1] if par else None
        if is_place(h):
            named.append(("h3", clean_place(h), h))
    lists = []
    for m in re.finditer(r"<h2>(.*?)</h2>(.*?)</section>", t[art:], re.S):
        if not ATTRACTION_SECTION.search(m.group(1)) or AVOID_SECTION.search(m.group(1)):
            continue
        items = strong_items(m.group(2))
        if len(items) >= 2:
            lists.append({"h2": re.sub(r"<[^>]+>", "", m.group(1)).strip(), "items": items[:4]})
            for i in items:
                named.append(("li", i, m.group(1)))

    if slug in hub_children:
        order = popular.get(hub_pkg.get(slug), []) + [c["slug"] for c in hub_children[slug]]
        seen = []
        for s in order:
            if s not in seen and s in titles:
                seen.append(s)
        named = [("hub", place_of_title(titles[s]), None) for s in seen[:8]] + named

    slots = []
    # Hero
    hero = next((i for i in b["images"] if i["kind"] == "hero"), None)
    c = cred.get(hero["src"]) if hero else None
    mine = c and any(u.split(" ")[0] == slug for u in c["usedIn"])
    keep_hero = bool(c and mine and not hero["hedged"]) and (slug, hero["src"]) not in kept_rejects
    # City/state guides try a view of the place itself first; attraction guides are their own subject.
    hero_candidates = [place] + [n[1] for n in named[:4]]
    slots.append({"type": "hero", "keep": keep_hero, "current": hero["src"] if hero else None,
                  "current_alt": hero["alt"] if hero else None, "places": hero_candidates})

    # Existing content images
    for idx, i in enumerate([x for x in b["images"] if x["kind"] == "content"]):
        c = cred.get(i["src"])
        mine = c and any(u.split(" ")[0] == slug for u in c["usedIn"])
        keep = bool(c and mine and not i["hedged"]) and (slug, i["src"]) not in kept_rejects
        head = i["heading"] or ""
        target = [clean_place(head)] if is_place(head) else []
        slots.append({"type": "content", "index": idx, "keep": keep, "current": i["src"], "current_alt": i["alt"],
                      "heading": head, "places": target + [n[1] for n in named if n[1] not in target] + [place]})

    # New images under place-named H3s that don't already have one.
    h3_with_img = set()
    for m in re.finditer(r"<h3[^>]*>(.*?)</h3>\s*(<div[^>]*>\s*<Image|<GuideFigure)", t, re.S):
        h3_with_img.add(re.sub(r"<[^>]+>|\{[^}]*\}", "", m.group(1)).strip())
    kept_names = " ".join(os.path.basename(i["src"]) for i in b["images"]
                          if i["src"] and cred.get(i["src"]) and any(u.split(" ")[0] == slug for u in cred[i["src"]]["usedIn"]))
    kept_tok = set(tokens(kept_names))
    adds = [n for n in named if n[0] == "h3" and n[2] not in h3_with_img
            and not set(tokens(n[1])) <= kept_tok][:6]
    for kind, p, raw in adds:
        slots.append({"type": "add-h3", "keep": False, "heading": raw, "places": [p], "parent": parent.get(raw)})
    # A section image is redundant when two or more of its sub-sections get their own image.
    for s in slots:
        if s["type"] == "content" and not s["keep"]:
            if sum(1 for a in slots if a["type"] == "add-h3" and a.get("parent") == s["heading"]) >= 2:
                s["remove"] = True
    for L in lists[:2]:
        items = [i for i in L["items"] if not set(tokens(i)) <= kept_tok]
        if items:
            slots.append({"type": "add-row", "keep": False, "heading": L["h2"], "places": items[:3]})

    plan.append({"slug": slug, "title": b["title"], "place": place, "state": state, "region": b["region"],
                 "attraction_guide": attraction_guide, "context": ctx, "named": [n[1] for n in named], "slots": slots})

json.dump(plan, open(os.path.join(HERE, "plan.json"), "w"), indent=1)

import collections
cnt = collections.Counter()
for p in plan:
    for s in p["slots"]:
        cnt[s["type"] + (":keep" if s["keep"] else "")] += 1
print(cnt)
print("guides with named places:", sum(1 for p in plan if p["named"]), "of", len(plan))
print("row images:", sum(len(s["places"]) for p in plan for s in p["slots"] if s["type"] == "add-row"))
