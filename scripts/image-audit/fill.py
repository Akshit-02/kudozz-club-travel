"""For guides left with no in-article image, source one more verified image of
the guide's own place (different from the hero) for its main sightseeing section.
Results go to resolved.json under slot key "fill". Usage: python3 fill.py"""
import json, os, re, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
from commons import best, tokens  # noqa: E402
from places import ATTRACTION_SECTION, AVOID_SECTION  # noqa: E402
from store import load_resolved  # noqa: E402
import resolve as R  # noqa: E402  (reuses download(), slugify(), state/guide dirs, GENERIC_CTX)

inv = {b["slug"]: b for b in json.load(open(os.path.join(HERE, "inventory.json")))}
plan = {p["slug"]: p for p in json.load(open(os.path.join(HERE, "plan.json")))}
res = load_resolved()
banned = R.GLOBAL_BANNED
used = {v["title"] for r in res.values() for v in r["slots"].values() if v and v.get("title")}


def target_h2(slug):
    t = open(os.path.join(ROOT, "src/app/blog", slug, "page.tsx")).read()
    art = t.find("<article")
    h2s = [re.sub(r"<[^>]+>|\{[^}]*\}", "", m.group(1)).strip() for m in re.finditer(r"<h2>(.*?)</h2>", t[art:], re.S)]
    for h in h2s:
        if ATTRACTION_SECTION.search(h) and not AVOID_SECTION.search(h):
            return h
    return h2s[1] if len(h2s) > 1 else None


todo = [s for s, b in inv.items() if not any(i["kind"] == "content" for i in b["images"])]
print(len(todo), "guides without content images")
for slug in todo:
    rec = res.setdefault(slug, {"slots": {}, "complete": True})
    if "fill" in rec["slots"]:
        continue
    g = plan[slug]
    h2 = target_h2(slug)
    hero_src = next(i["src"] for i in inv[slug]["images"] if i["kind"] == "hero")
    hero_title = next((v["title"] for v in rec["slots"].values() if v and v.get("src") == hero_src), None)
    must = tokens(g["place"])
    ctx = [t for t in tokens(g["state"] or "") if t not in R.GENERIC_CTX] or tokens(g["state"] or "")
    exclude = frozenset(used | banned | ({hero_title} if hero_title else set()))
    cands = [c for c in best([f"{g['place']} {g['state']}", g["place"]], must, ctx, used=exclude, n=3)
             if c["title"] not in exclude] if h2 and must else []
    chosen = None
    for c in cands:
        rel = f"/images/blogs/{R.state_dir(g['state'])}/{R.guide_dir(slug)}/{R.slugify(g['place'])[:50]}-view.webp"
        n = 2
        while os.path.exists(os.path.join(ROOT, "public", rel.lstrip("/"))):
            rel = rel.replace(".webp", f"-{n}.webp") if n == 2 else re.sub(r"-\d+\.webp$", f"-{n}.webp", rel)
            n += 1
        got = R.download(c, os.path.join(ROOT, "public", rel.lstrip("/")), "content")
        if got and got != "unusable":
            chosen = {"slot_type": "fill", "place": g["place"], "heading": h2, "src": rel, "w": got[0], "h": got[1],
                      "title": c["title"], "page": c["page"], "licence": c["licence"], "author": c["author"],
                      "desc": c["desc"][:300], "attribution_required": c["attribution_required"],
                      "accessed": time.strftime("%Y-%m-%d")}
            used.add(c["title"])
            break
    rec["slots"]["fill"] = chosen
    json.dump(res, open(os.path.join(HERE, "resolved.json"), "w"), indent=1)
    print(slug, "->", chosen["title"] if chosen else None, flush=True)
