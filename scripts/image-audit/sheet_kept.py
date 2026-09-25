"""Contact sheets of the images KEPT from before the audit, labelled with the
guide + heading they sit under, for visual verification.
Usage: python3 sheet_kept.py OUTDIR START COUNT"""
import json, os, sys, textwrap
from PIL import Image, ImageDraw, ImageFont
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(HERE))
inv = json.load(open(os.path.join(HERE, "inventory-before.json")))
plan = {p["slug"]: p for p in json.load(open(os.path.join(HERE, "plan.json")))}
items = []
for b in inv:
    p = plan[b["slug"]]
    kept_srcs = {s["current"] for s in p["slots"] if s["keep"] and s.get("current")}
    for i in b["images"]:
        if i["kind"] != "data" and i["src"] in kept_srcs:
            items.append((b["slug"], i["kind"], i["heading"] or "(hero)", i["src"], i["alt"]))
out, start, count = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
os.makedirs(out, exist_ok=True)
chunk = items[start:start + count]
TW, TH, LH, COLS = 300, 190, 58, 5
font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 12)
rows = (len(chunk) + COLS - 1) // COLS
canvas = Image.new("RGB", (COLS * TW, rows * (TH + LH)), "white"); d = ImageDraw.Draw(canvas)
index = {}
for n, (slug, kind, head, src, alt) in enumerate(chunk):
    gid = start + n; index[gid] = [slug, kind, head, src]
    x, y = (n % COLS) * TW, (n // COLS) * (TH + LH)
    im = Image.open(os.path.join(ROOT, "public", src.lstrip("/"))).convert("RGB"); im.thumbnail((TW - 6, TH - 4))
    canvas.paste(im, (x + 3, y + 2))
    d.text((x + 3, y + TH + 1), f"#{gid} {slug.replace('-travel-guide','')} · {head}"[:48], fill="black", font=font)
    for j, line in enumerate(textwrap.wrap(os.path.basename(src), 46)[:2]):
        d.text((x + 3, y + TH + 15 + j * 13), line, fill=(90, 90, 90), font=font)
canvas.save(os.path.join(out, f"kept-{start:04d}.jpg"), quality=72)
json.dump(index, open(os.path.join(out, f"kept-{start:04d}.json"), "w"))
print(len(items), "kept images total;", len(chunk), "on this sheet")
