"""Compact digest: guide hero, headings, key FAQs, credited images in the guide's own folders."""
import json, os, re, sys, html
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
cred = json.load(open(os.path.join(ROOT, "public/images/blogs/IMAGE_CREDITS.json")))["images"]
for g in sys.argv[1:]:
    s = g if g.endswith("-travel-guide") else g + "-travel-guide"
    t = open(os.path.join(ROOT, "src/app/blog", s, "page.tsx")).read()
    art = t.find("<article")
    hero = re.search(r'<Image\s+src="([^"]+)"', t[:art]).group(1)
    hs = [html.unescape(re.sub(r"<[^>]+>|\{[^}]*\}", "", m.group(2))).strip()[:40] for m in re.finditer(r"<(h2|h3)[^>]*>(.*?)</\1>", t[art:], re.S)]
    print(f"== {s} hero={hero}\n  H: " + " | ".join(hs))
    for q, a in re.findall(r'q:\s*"([^"]+)",\s*a:\s*"([^"]+)"', t):
        if re.search(r"best time|how many days|how many|permit", q, re.I):
            print("  Q " + q[:70] + " -> " + a[:230])
    folders = {p for p in re.findall(r'"/images/((?:blogs|destinations)/[^"]+/)[^"/]+"', t[art:])} | {hero.rsplit("/", 1)[0][8:] + "/"}
    imgs = [c["path"] for c in cred if c["path"].rsplit("/", 1)[0] + "/" in folders and "/images/" + c["path"] != hero]
    print("  IMG: " + " ".join(imgs))
