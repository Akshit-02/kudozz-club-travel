"""Insert approved fill images (resolved.json slot "fill") under their target <h2>."""
import json, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
from apply import jsx, CRED_F  # noqa: E402

res = json.load(open(os.path.join(HERE, "resolved.json")))
rej = set(json.load(open(os.path.join(HERE, "rejects.json"))))
plan = {p["slug"]: p for p in json.load(open(os.path.join(HERE, "plan.json")))}
cred = json.load(open(CRED_F)); by_path = {c["path"]: c for c in cred["images"]}
done = 0
for slug, r in res.items():
    v = r["slots"].get("fill")
    if not v or f"{slug}:fill|{v['title']}" in rej:
        continue
    f = os.path.join(ROOT, "src/app/blog", slug, "page.tsx")
    t = open(f).read()
    if v["src"] in t:
        continue
    art = t.find("<article")
    m = next((m for m in re.finditer(r"<h2>(.*?)</h2>", t) if m.start() > art
              and re.sub(r"<[^>]+>|\{[^}]*\}", "", m.group(1)).strip() == v["heading"]), None)
    if not m:
        print("heading not found", slug); continue
    g = plan[slug]
    alt = f"{g['place']}, {g['state']}" if g["state"] and g["state"].lower() not in g["place"].lower() else g["place"]
    ls = t.rfind("\n", 0, m.start()) + 1
    t = t[:m.end()] + f'\n{t[ls:m.start()]}<GuideFigure src="{v["src"]}" alt="{jsx(alt)}" />' + t[m.end():]
    if 'from "@/components/ui/GuideImages"' in t:
        t = re.sub(r'import \{([^}]*)\} from "@/components/ui/GuideImages";',
                   lambda mm: mm.group(0) if "GuideFigure" in mm.group(1) else
                   f'import {{ {mm.group(1).strip()}, GuideFigure }} from "@/components/ui/GuideImages";', t)
    else:
        anchor = 'import GuideTripCTA from "@/components/ui/GuideTripCTA";'
        t = t.replace(anchor, anchor + '\nimport { GuideFigure } from "@/components/ui/GuideImages";', 1)
    open(f, "w").write(t)
    path = v["src"].replace("/images/", "", 1)
    if path not in by_path:
        rec = {"path": path, "usedIn": [f"{slug} ({v['heading']} section)"], "source": "Wikimedia Commons",
               "sourcePage": v["page"], "originalFile": v["title"].replace("File:", "", 1), "license": v["licence"],
               "author": v["author"] or "Unknown (see source page)",
               "attribution": f"Photo by {v['author'] or 'see source page'}, {v['licence']}, via Wikimedia Commons",
               "location": v["place"], "accessed": v["accessed"]}
        cred["images"].append(rec); by_path[path] = rec
    done += 1
json.dump(cred, open(CRED_F, "w"), indent=2, ensure_ascii=False)
print("fills applied:", done)
