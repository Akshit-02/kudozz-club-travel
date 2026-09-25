"""Contact sheets for visual verification of sourced images.
Usage: python3 sheet.py OUTDIR [--slugs a,b] [--start N --count M]
Each tile: image + "#id guide / slot / intended place / Commons title".
Writes OUTDIR/sheet-XXX.jpg and OUTDIR/index.json (id -> slug:key|title)."""
import json, os, sys, textwrap
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
import re
from store import load_resolved  # noqa: E402
res = load_resolved()
REVIEWED_F = os.path.join(HERE, "reviewed.json")
reviewed = set(json.load(open(REVIEWED_F))) if os.path.exists(REVIEWED_F) else set()
out = sys.argv[1]
os.makedirs(out, exist_ok=True)
slugs = None
if "--slugs" in sys.argv:
    slugs = sys.argv[sys.argv.index("--slugs") + 1].split(",")
items = []
for slug, rec in res.items():
    if slugs and slug not in slugs:
        continue
    for key, v in rec["slots"].items():
        if v and not v.get("remove"):
            if "--new" in sys.argv and f"{slug}:{key}|{v['title']}" in reviewed:
                continue
            items.append((slug, key, v))
start = int(sys.argv[sys.argv.index("--start") + 1]) if "--start" in sys.argv else 0
count = int(sys.argv[sys.argv.index("--count") + 1]) if "--count" in sys.argv else len(items)
items = items[start:start + count]

TW, TH, LH = 300, 190, 58
COLS, PER = 5, 30
try:
    font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 12)
except Exception:
    font = ImageFont.load_default()
index = {}
for sheet_no in range((len(items) + PER - 1) // PER):
    chunk = items[sheet_no * PER:(sheet_no + 1) * PER]
    rows = (len(chunk) + COLS - 1) // COLS
    canvas = Image.new("RGB", (COLS * TW, rows * (TH + LH)), "white")
    d = ImageDraw.Draw(canvas)
    for i, (slug, key, v) in enumerate(chunk):
        gid = start + sheet_no * PER + i
        index[gid] = f"{slug}:{key}|{v['title']}"
        x, y = (i % COLS) * TW, (i // COLS) * (TH + LH)
        try:
            im = Image.open(os.path.join(ROOT, "public", v["src"].lstrip("/"))).convert("RGB")
            im.thumbnail((TW - 6, TH - 4))
            canvas.paste(im, (x + 3, y + 2))
        except Exception:
            d.text((x + 10, y + 80), "MISSING", fill="red", font=font)
        label = f"#{gid} {slug.replace('-travel-guide','')} [{v['slot_type']}] = {v['place']}"
        d.text((x + 3, y + TH + 1), label[:48], fill="black", font=font)
        t = v["title"].replace("File:", "")
        for j, line in enumerate(textwrap.wrap(t, 46)[:3]):
            d.text((x + 3, y + TH + 15 + j * 13), line, fill=(90, 90, 90), font=font)
    canvas.save(os.path.join(out, f"sheet-{start // PER + sheet_no:03d}.jpg"), quality=72)
json.dump(index, open(os.path.join(out, "index.json"), "w"), indent=0)
print(len(items), "items")
