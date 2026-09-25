"""Resolve every non-kept slot in plan.json to a Commons file, download it,
convert to WebP and record provenance. Resumable: results are written to
resolved.json after each guide; re-running skips finished guides.

Usage: python3 resolve.py [--only slug,slug] [--reject key,key]
"""
import hashlib, io, json, os, re, sys, time, urllib.request
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
from commons import UA, best, tokens  # noqa: E402
from places import ATTRACTION_WORDS, clean_place  # noqa: E402

PLAN = json.load(open(os.path.join(HERE, "plan.json")))
WORKER = int(os.environ.get("WORKER", "-1"))
NWORKERS = int(os.environ.get("NWORKERS", "1"))
OUT = os.path.join(HERE, "resolved.json" if WORKER < 0 else f"resolved-{WORKER}.json")
from store import load_resolved  # noqa: E402
resolved = load_resolved()
mine = json.load(open(OUT)) if (WORKER >= 0 and os.path.exists(OUT)) else {}
REJECTS = os.path.join(HERE, "rejects.json")
rejects = set(json.load(open(REJECTS))) if os.path.exists(REJECTS) else set()
# A file rejected on review is never offered again, for any slot or guide.
GLOBAL_BANNED = {r.split("|", 1)[1] for r in rejects}

# Existing folder convention per state (from credited images already on disk).
STATE_DIR = {
    "Jammu & Kashmir": "jammu-and-kashmir",
    "Dadra and Nagar Haveli and Daman and Diu": "dadra-and-nagar-haveli-and-daman-and-diu",
    "Andaman & Nicobar Islands": "andaman-and-nicobar",
}
SIZES = {"hero": (1600, 72), "content": (1200, 70), "add-h3": (1200, 70), "add-row": (800, 70)}


def slugify(s):
    s = s.lower().replace("&", "and")
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def state_dir(state):
    return STATE_DIR.get(state) or slugify(state or "india")


def guide_dir(slug):
    return re.sub(r"-travel-guide$", "", slug)


used_titles = {v["title"] for g in resolved.values() for v in g.get("slots", {}).values() if v and v.get("title")}


def queries_for(place, g, hero):
    city_like = not ATTRACTION_WORDS.search(place)
    ctx_word = g["place"] if place.lower() != g["place"].lower() else (g["state"] or "")
    if hero and city_like:
        return [f"{place} panorama", f"view of {place}", f"{place} {g['state']}"]
    return [f"{place} {ctx_word}", place]


GENERIC_CTX = {"national", "park", "temple", "lake", "fort", "beach", "island", "islands", "valley", "hills", "hill",
               "caves", "cave", "falls", "waterfall", "sanctuary", "wildlife", "reserve", "tiger", "district", "city",
               "town", "village", "garden", "palace", "river", "dam", "pass", "peak", "trek", "road", "trip", "guide",
               "complete", "old", "new", "south", "north", "east", "west", "central", "sri", "shri", "pradesh"}
ACTIVITY = re.compile(r"^(wildlife|birding|bird ?watching|trekking|rafting|camping|boating|kayaking|paragliding|"
                      r"sunset|sunrise|safari|scuba diving|snorkelling|shopping|nightlife|stargazing|photography|"
                      r"heritage walk|village walk|culture|festivals?|cuisine)$", re.I)


# Place names that exist in more than one Indian location: require the state in title/description.
AMBIGUOUS = {"dwarka", "udaipur", "aurangabad", "hamirpur", "bilaspur", "pratapgarh", "raigad", "fatehpur",
             "salem", "kalyan", "rampur", "gopalpur", "nagar", "lakshmi", "sonamarg"}


def pick(place, g, hero, exclude):
    if ACTIVITY.match(clean_place(place).strip()):
        return []
    must = [t for t in tokens(place) if t not in ("the",)]
    if not must:
        return []
    ctx = [t for t in g["context"] if t not in must and t not in GENERIC_CTX] or \
          [t for t in g["context"] if t not in GENERIC_CTX] or g["context"]
    # If the place *is* the guide's place, context must come from the state.
    if set(must) <= set(tokens(g["place"])):
        ctx = [t for t in tokens(g["state"] or "") if t not in must and t not in GENERIC_CTX] or tokens(g["state"] or "")
    need_view = hero and not ATTRACTION_WORDS.search(place)
    if set(must) & AMBIGUOUS and g["state"]:
        must = must + [t for t in tokens(g["state"]) if t not in GENERIC_CTX][:1]
    wildlife = bool(re.search(r"national park|sanctuary|tiger reserve|wildlife|bird|safari|zoo|reserve",
                              f"{g['place']} {place}", re.I))
    return best(queries_for(place, g, hero), must, ctx, used=exclude, n=3, hero=hero, need_view=need_view,
                allow_fauna=wildlife)


def download(c, dest, kind):
    width, q = SIZES[kind]
    for attempt in range(4):
        try:
            req = urllib.request.Request(c["thumb"], headers={"User-Agent": UA})
            raw = urllib.request.urlopen(req, timeout=60).read()
            im = Image.open(io.BytesIO(raw)).convert("RGB")
            # Reject images where the place can't be recognised: very dark, or
            # near-greyscale (archival scans, B/W drawings).
            from PIL import ImageStat
            small = im.resize((64, 64))
            lum = ImageStat.Stat(small.convert("L")).mean[0]
            sat = ImageStat.Stat(small.convert("HSV")).mean[1]
            if lum < 58 or sat < 10:
                return "unusable"
            if im.width > width:
                im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            im.save(dest, "WEBP", quality=q, method=6)
            return im.size
        except Exception:
            time.sleep(3 * (attempt + 1))
    return None


def run(only=None):
    done = 0
    for g in PLAN:
        slug = g["slug"]
        if only and slug not in only:
            continue
        if WORKER >= 0 and int(hashlib.md5(slug.encode()).hexdigest(), 16) % NWORKERS != WORKER:
            continue
        if slug in resolved and resolved[slug].get("complete") and not only:
            continue
        rec = resolved.get(slug, {"slots": {}})
        taken = set()  # titles used within this guide
        placed = set()  # normalised places already pictured in this guide
        order = {"hero": 0, "add-h3": 1, "add-row": 2, "content": 3}
        for si, s in sorted(enumerate(g["slots"]), key=lambda x: order[x[1]["type"]]):
            if s["keep"]:
                continue
            if s.get("remove"):
                rec["slots"][f"{si}"] = {"remove": True, "slot_type": s["type"], "heading": s.get("heading")}
                continue
            places = s["places"] if s["type"] != "add-row" else s["places"]
            targets = [(f"{si}", places, s["type"] == "hero")] if s["type"] != "add-row" else \
                      [(f"{si}.{k}", [p], False) for k, p in enumerate(places)]
            for key, cand_places, hero in targets:
                prev = rec["slots"].get(key)
                if prev and prev.get("remove"):
                    continue
                if prev and prev.get("title") not in GLOBAL_BANNED and os.path.exists(os.path.join(ROOT, "public", prev["src"].lstrip("/"))):
                    taken.add(prev["title"])
                    placed.add(prev["place"].lower())
                    continue
                banned = {r.split("|", 1)[1] for r in rejects if r.startswith(f"{slug}:{key}|")} | GLOBAL_BANNED
                if prev and prev.get("src") and prev.get("title") in banned:
                    f_old = os.path.join(ROOT, "public", prev["src"].lstrip("/"))
                    if os.path.exists(f_old):
                        os.remove(f_old)
                chosen = None
                flexible = s["type"] in ("content", "add-row")
                for p in cand_places[:4]:
                    if flexible and clean_place(p).lower() in placed:
                        continue
                    cands = [c for c in pick(p, g, hero, frozenset(taken | used_titles)) if c["title"] not in taken
                             and c["title"] not in banned]
                    for c in cands:
                        place = p
                        base = slugify(clean_place(place))[:60]
                        gp = slugify(g["place"])[:40]
                        name = base if gp in base else f"{base}-{gp}"
                        rel = f"/images/blogs/{state_dir(g['state'])}/{guide_dir(slug)}/{name}.webp"
                        n = 2
                        while any(v and v.get("src") == rel and v.get("title") != c["title"] for v in rec["slots"].values()) or \
                                (os.path.exists(os.path.join(ROOT, "public", rel.lstrip("/"))) and
                                 not any(v and v.get("src") == rel for v in rec["slots"].values())):
                            rel = f"/images/blogs/{state_dir(g['state'])}/{guide_dir(slug)}/{name}-{n}.webp"
                            n += 1
                        got = download(c, os.path.join(ROOT, "public", rel.lstrip("/")), s["type"])
                        if got and got != "unusable":
                            chosen, size = c, got
                            break
                        taken.add(c["title"])  # don't retry an unusable/failed file
                    if chosen:
                        break
                if not chosen:
                    rec["slots"][key] = None
                    continue
                taken.add(chosen["title"])
                used_titles.add(chosen["title"])
                placed.add(clean_place(place).lower())
                rec["slots"][key] = {
                    "slot_type": s["type"], "place": clean_place(place), "heading": s.get("heading"),
                    "src": rel, "w": size[0], "h": size[1],
                    "title": chosen["title"], "page": chosen["page"], "licence": chosen["licence"],
                    "author": chosen["author"], "desc": chosen["desc"][:300],
                    "attribution_required": chosen["attribution_required"],
                    "accessed": time.strftime("%Y-%m-%d"),
                }
        rec["complete"] = True
        resolved[slug] = rec
        mine[slug] = rec
        if WORKER >= 0:
            json.dump(mine, open(OUT, "w"), indent=1)
        else:
            json.dump(resolved, open(OUT, "w"), indent=1)
        done += 1
        print(f"[{len(resolved)}/{len(PLAN)}] {slug}: "
              f"{sum(1 for v in rec['slots'].values() if v and not v.get('remove'))} sourced, {sum(1 for v in rec['slots'].values() if not v)} unmatched",
              flush=True)


if __name__ == "__main__":
    only = None
    if "--only" in sys.argv:
        only = set(sys.argv[sys.argv.index("--only") + 1].split(","))
    run(only)
