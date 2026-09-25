"""Find, review and apply new hero images for things-to-do articles whose hero
still duplicates the guide's hero (and guides whose hero shows the wrong place).

  python3 heroes.py find            -> downloads candidates + contact sheet to .hero-candidates/
  python3 heroes.py apply key=N ... -> installs candidate N for key, credits it, updates JSON/guide

Uses the image-audit Commons helpers, so the same licence and naming rules apply.
"""
import json, os, re, sys
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, os.path.join(ROOT, "scripts", "image-audit"))
from commons import best  # noqa: E402
from resolve import download  # noqa: E402

CAND = os.path.join(HERE, ".hero-candidates")
CREDITS = os.path.join(ROOT, "public/images/blogs/IMAGE_CREDITS.json")
CONTENT = os.path.join(ROOT, "src/content/things-to-do")

# key: (article slug, state folder, guide slug, file stem, queries, must tokens, alt, fix_guide_hero)
TARGETS = {
    "mathura": ("things-to-do-in-mathura", "uttar-pradesh", "mathura", "vishram-ghat-yamuna-mathura",
                ["Vishram Ghat Mathura", "Mathura ghat Yamuna", "Mathura Yamuna river ghats"], ["mathura"],
                "Ghats on the Yamuna at Mathura", False),
    "prayagraj": ("things-to-do-in-prayagraj", "uttar-pradesh", "prayagraj", "triveni-sangam-prayagraj",
                  ["Triveni Sangam Allahabad", "Sangam Allahabad boats", "Prayagraj Sangam", "Allahabad Sangam"], ["sangam"],
                  "Boats at the Triveni Sangam, Prayagraj", False),
    "lansdowne": ("things-to-do-in-lansdowne", "uttarakhand", "lansdowne", "lansdowne-hills-view",
                  ["Lansdowne Uttarakhand view", "Lansdowne church", "Lansdowne Garhwal", "Lansdowne"], ["lansdowne"],
                  "Hills around Lansdowne, Uttarakhand", False),
    "digha": ("things-to-do-in-digha", "west-bengal", "digha", "digha-sea-beach-view",
              ["Digha beach", "Digha sea beach", "New Digha beach", "Digha"], ["digha"],
              "The beach at Digha, West Bengal", False),
    "thekkady": ("things-to-do-in-thekkady", "kerala", "thekkady", "periyar-lake-boat-thekkady",
                 ["Periyar lake Thekkady", "Periyar National Park lake", "Thekkady boating Periyar", "Periyar Tiger Reserve"], ["periyar"],
                 "Periyar lake in Periyar Tiger Reserve, Thekkady", False),
    "varkala": ("things-to-do-in-varkala", "kerala", "varkala", "varkala-cliff-beach",
                ["Varkala cliff beach", "Varkala beach cliff", "Papanasam beach Varkala", "Varkala"], ["varkala"],
                "Red cliffs above the beach at Varkala", False),
    "yercaud": ("things-to-do-in-yercaud", "tamil-nadu", "yercaud", "yercaud-lake-view",
                ["Yercaud lake", "Yercaud view", "Yercaud Shevaroy hills", "Yercaud"], ["yercaud"],
                "Yercaud Lake in the Shevaroy hills", False),
    "bir-billing": ("things-to-do-in-bir-billing", "himachal-pradesh", "bir-billing", "bir-billing-paragliding-valley",
                    ["Bir Billing paragliding", "Billing Himachal paragliding", "Bir Himachal Pradesh", "Bir monastery Himachal"], ["bir"],
                    "Paragliders above the valley at Bir Billing", True),
    "surat": ("things-to-do-in-surat", "gujarat", "surat", "surat-city-tapi-river",
              ["Surat city Tapi river", "Surat Gujarat skyline", "Surat castle", "Surat Gujarat"], ["surat"],
              "Surat on the Tapi river, Gujarat", True),
}


def used_titles():
    cred = json.load(open(CREDITS))["images"]
    return {"File:" + c.get("originalFile", "").replace("_", " ") for c in cred}


def find():
    os.makedirs(CAND, exist_ok=True)
    used = used_titles()
    meta = {}
    tiles = []
    for key, (slug, st, g, stem, queries, must, alt, _) in TARGETS.items():
        cands = best(queries, must, used=frozenset(used), n=4, hero=True)
        meta[key] = []
        for i, c in enumerate(cands):
            dest = os.path.join(CAND, f"{key}-{i}.webp")
            r = download(c, dest, "hero")
            if r in (None, "unusable"):
                continue
            meta[key].append({"i": i, "file": dest, **c})
            tiles.append((f"{key}={i}", dest))
        print(key, len(meta[key]), [m["title"] for m in meta[key]])
    json.dump(meta, open(os.path.join(CAND, "meta.json"), "w"), indent=1)
    # contact sheets of 8 tiles each
    for n in range(0, len(tiles), 8):
        sheet = Image.new("RGB", (4 * 420, 2 * 300), "white")
        dr = ImageDraw.Draw(sheet)
        for j, (label, f) in enumerate(tiles[n:n + 8]):
            im = Image.open(f).convert("RGB")
            im.thumbnail((410, 260))
            x, y = (j % 4) * 420, (j // 4) * 300
            sheet.paste(im, (x + 5, y + 5))
            dr.rectangle([x + 5, y + 268, x + 415, y + 295], fill="black")
            dr.text((x + 10, y + 272), label, fill="white")
        sheet.save(os.path.join(CAND, f"sheet-{n // 8}.jpg"), quality=80)
    print("sheets written to", CAND)


def apply(choices):
    meta = json.load(open(os.path.join(CAND, "meta.json")))
    cred = json.load(open(CREDITS))
    for ch in choices:
        key, i = ch.split("=")
        slug, st, g, stem, _, _, alt, fix_guide = TARGETS[key]
        m = next(x for x in meta[key] if x["i"] == int(i))
        rel = f"blogs/{st}/{g}/{stem}.webp"
        dest = os.path.join(ROOT, "public/images", rel)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        Image.open(m["file"]).save(dest, "WEBP", quality=72, method=6)
        orig = m["title"].replace("File:", "")
        guide = next(f for f in os.listdir(os.path.join(ROOT, "src/app/blog")) if f.startswith(g) and f.endswith("-travel-guide")) if False else None
        cred["images"].append({
            "path": rel, "usedIn": [f"{slug} (hero)"] + ([f"{g} guide (hero, replaces a wrong-place image)"] if fix_guide else []),
            "source": "Wikimedia Commons", "sourcePage": m["page"], "originalFile": orig,
            "license": m["licence"], "author": m["author"] or "Unknown",
            "attribution": f"Photo by {m['author'] or 'unknown author'}, {m['licence']}, via Wikimedia Commons",
            "location": alt, "accessed": "2026-09-25",
        })
        p = os.path.join(CONTENT, slug + ".json")
        d = json.load(open(p))
        d["hero"] = {"src": "/images/" + rel, "alt": alt}
        with open(p, "w") as f:
            json.dump(d, f, ensure_ascii=False, indent=2)
            f.write("\n")
        print("applied", key, rel, m["licence"], m["author"])
    json.dump(cred, open(CREDITS, "w"), ensure_ascii=False, indent=2)


if __name__ == "__main__":
    if sys.argv[1] == "find":
        find()
    else:
        apply(sys.argv[2:])
