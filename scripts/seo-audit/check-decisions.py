"""Validate decisions/bNN.tsv before applying them.

  python3 scripts/seo-audit/check-decisions.py decisions/b08.tsv [...]

For every new meta description: length 110-158 characters, and every
capitalised name and number-of-days claim must appear in the built article
(.next/server/app/blog/<slug>.html), so a description never promises content
the page does not have.
"""
import html, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
APP = os.path.join(ROOT, ".next/server/app/blog")
STOP = {"The", "A", "An", "And", "With", "For", "From", "In", "Of", "On", "To", "How", "Where", "What", "When", "Best",
        "Plan", "Guide", "Travel", "India", "Indian", "Its", "Visit", "Things", "Do", "Is", "At", "By", "Or", "Day", "Days"}
bad = 0
for f in sys.argv[1:]:
    for line in open(f, encoding="utf-8"):
        c = line.rstrip("\n").split("\t")
        if len(c) < 6 or not c[5]:
            continue
        slug, d = c[0], c[5]
        page = os.path.join(APP, slug + ".html")
        txt = html.unescape(re.sub(r"<[^>]+>", " ", open(page, encoding="utf-8").read())).lower() if os.path.exists(page) else ""
        txt = txt.replace("’", "'")
        probs = []
        if not 110 <= len(d) <= 158:
            probs.append(f"len {len(d)}")
        for w in re.findall(r"\b[A-Z][\w'’\-]+(?:\s+[A-Z][\w'’\-]+)*", d):
            parts = [p for p in w.split() if p not in STOP]
            for p in parts:
                if p.lower().replace("’", "'").rstrip("'s") not in txt:
                    probs.append(p)
        for m in re.findall(r"(\d+)-day", d):
            if not re.search(rf"\b{m}[- ]day|\b{m} days|day {m}\b", txt):
                probs.append(m + "-day")
        if probs:
            bad += 1
            print(f"{slug}: {', '.join(dict.fromkeys(probs))}")
print("problems:", bad)
