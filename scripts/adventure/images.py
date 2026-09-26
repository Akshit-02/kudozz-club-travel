"""Find, review and install hero images for the Adventure Travel articles.

  python3 images.py find [key ...]   -> candidates + contact sheets in .candidates/
  python3 images.py apply key=N ...  -> installs candidate N as public/images/adventure/<stem>.webp
                                        and records the credit in IMAGE_CREDITS.json

Same Commons helpers and licence rules as the image audit (commercial-reuse
licences only; licence, author and source page come from the Commons API).
Activity photos often show people, so the audit's title filter is relaxed
here; every candidate is still reviewed by eye before it is applied.
"""
import json, os, re, sys
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, os.path.join(ROOT, "scripts", "image-audit"))
from commons import search, ALLOWED_LICENCE  # noqa: E402
from resolve import download  # noqa: E402

CAND = os.path.join(HERE, ".candidates")
CREDITS = os.path.join(ROOT, "public/images/blogs/IMAGE_CREDITS.json")
TARGETS = json.load(open(os.path.join(HERE, "image-targets.json")))
BAD = re.compile(r"\b(map|logo|diagram|chart|poster|stamp|svg|pdf|screenshot|drawing|painting|sketch|advert|banner|brochure)\b", re.I)


def used_titles():
    return {c.get("originalFile", "").replace("_", " ") for c in json.load(open(CREDITS))["images"]}


def find(keys):
    os.makedirs(CAND, exist_ok=True)
    used = used_titles()
    metap = os.path.join(CAND, "meta.json")
    meta = json.load(open(metap)) if os.path.exists(metap) else {}
    for key in keys:
        t = TARGETS[key]
        seen, cands = set(), []
        for q in t["queries"]:
            for c in search(q, limit=30):
                title = c["title"].replace("File:", "")
                if title in seen or title.replace("_", " ") in used:
                    continue
                seen.add(title)
                if not ALLOWED_LICENCE.match(c["licence"] or "") or BAD.search(title):
                    continue
                if c["w"] < 1200 or c["w"] < c["h"] * 1.15:
                    continue
                text = (title + " " + c["desc"] + " " + " ".join(c["cats"])).lower()
                if t.get("must") and not any(m in text for m in t["must"]):
                    continue
                cands.append(c)
        cands = cands[: t.get("n", 6)]
        meta[key] = []
        tiles = []
        for i, c in enumerate(cands):
            dest = os.path.join(CAND, f"{key}-{i}.webp")
            r = download(c, dest, "hero")
            if r in (None, "unusable"):
                continue
            meta[key].append({"i": i, "file": dest, **c})
            tiles.append((f"{key}={i}", dest))
        print(key, len(tiles), [m["title"][5:60] for m in meta[key]])
        sheet(key, tiles)
    json.dump(meta, open(metap, "w"), indent=1)


def sheet(key, tiles):
    if not tiles:
        return
    rows = (len(tiles) + 2) // 3
    im_s = Image.new("RGB", (3 * 420, rows * 300), "white")
    dr = ImageDraw.Draw(im_s)
    for j, (label, f) in enumerate(tiles):
        im = Image.open(f).convert("RGB")
        im.thumbnail((410, 260))
        x, y = (j % 3) * 420, (j // 3) * 300
        im_s.paste(im, (x + 5, y + 5))
        dr.rectangle([x + 5, y + 268, x + 415, y + 295], fill="black")
        dr.text((x + 10, y + 272), label, fill="white")
    im_s.save(os.path.join(CAND, f"sheet-{key}.jpg"), quality=78)


def apply(choices):
    meta = json.load(open(os.path.join(CAND, "meta.json")))
    cred = json.load(open(CREDITS))
    for ch in choices:
        key, i = ch.split("=")
        t = TARGETS[key]
        m = next(x for x in meta[key] if x["i"] == int(i))
        rel = f"adventure/{t['stem']}.webp"
        dest = os.path.join(ROOT, "public/images", rel)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        Image.open(m["file"]).save(dest, "WEBP", quality=72, method=6)
        cred["images"] = [c for c in cred["images"] if c["path"] != rel]
        cred["images"].append({
            "path": rel, "usedIn": [f"{t['usedIn']} (hero)"],
            "source": "Wikimedia Commons", "sourcePage": m["page"], "originalFile": m["title"].replace("File:", ""),
            "license": m["licence"], "author": m["author"] or "Unknown",
            "attribution": f"Photo by {m['author'] or 'unknown author'}, {m['licence']}, via Wikimedia Commons",
            "location": t["alt"], "accessed": "2026-09-25",
        })
        print("applied", key, rel, m["licence"], m["author"][:50])
    json.dump(cred, open(CREDITS, "w"), ensure_ascii=False, indent=2)


if __name__ == "__main__":
    if sys.argv[1] == "find":
        find(sys.argv[2:] or list(TARGETS))
    else:
        apply(sys.argv[2:])
