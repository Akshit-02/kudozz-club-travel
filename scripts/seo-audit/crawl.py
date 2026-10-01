"""Site-wide SEO crawl of the production build.

Parses every prerendered HTML file in .next/server/app (the exact HTML that
Vercel serves) and writes one JSON record per URL to
scripts/seo-audit/out/pages.json. Run after `next build`:

  python3 scripts/seo-audit/crawl.py

Needs beautifulsoup4 + lxml (pip install beautifulsoup4 lxml).
"""
import json, os, re, sys
from collections import Counter
from bs4 import BeautifulSoup

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
APP = os.path.join(ROOT, ".next/server/app")
OUT = os.path.join(HERE, "out")
SITE = "https://club.kudozz.in"
SKIP = {"_not-found", "index.rsc"}

def route_for(path):
    rel = os.path.relpath(path, APP)[:-5]  # strip .html
    if rel == "index":
        return "/"
    return "/" + rel

def norm_href(href):
    if not href:
        return None
    href = href.strip()
    if href.startswith(SITE):
        href = href[len(SITE):] or "/"
    if not href.startswith("/") or href.startswith("//"):
        return None
    href = href.split("#")[0].split("?")[0]
    if len(href) > 1:
        href = href.rstrip("/")
    return href or "/"

def schema_types(soup):
    types, errors = [], []
    for s in soup.find_all("script", type="application/ld+json"):
        try:
            data = json.loads(s.string or "")
        except Exception as e:  # noqa
            errors.append(str(e)[:80])
            continue
        stack = [data]
        while stack:
            d = stack.pop()
            if isinstance(d, list):
                stack.extend(d)
            elif isinstance(d, dict):
                t = d.get("@type")
                if t:
                    types.extend(t if isinstance(t, list) else [t])
                for k, v in d.items():
                    if k == "@graph" or isinstance(v, (dict, list)):
                        stack.append(v)
    return types, errors

def text_words(el):
    if el is None:
        return 0
    return len(re.findall(r"[A-Za-z0-9ऀ-ॿ][\w'’-]*", el.get_text(" ", strip=True)))

def crawl_file(path):
    html = open(path, encoding="utf-8").read()
    soup = BeautifulSoup(html, "lxml")
    route = route_for(path)
    head = soup.head or soup
    meta = lambda **kw: (head.find("meta", attrs=kw) or {}).get("content")
    canon = head.find("link", rel="canonical")
    main = soup.find("main") or soup.body
    # Links in the page body, excluding the global header/footer chrome.
    body_links, chrome_links = [], []
    for a in soup.find_all("a", href=True):
        h = norm_href(a["href"])
        if not h:
            continue
        in_chrome = a.find_parent(["header", "footer"]) is not None and (main is None or not main in a.parents)
        (chrome_links if in_chrome else body_links).append((h, a.get_text(" ", strip=True)[:80]))
    ext_links = [a["href"] for a in soup.find_all("a", href=True) if a["href"].startswith("http") and not a["href"].startswith(SITE)]
    imgs = main.find_all("img") if main else []
    headings = [(h.name, h.get_text(" ", strip=True)[:120]) for h in (main or soup).find_all(re.compile("^h[1-6]$"))]
    h1s = [t for n, t in headings if n == "h1"]
    skips = 0
    prev = 1
    for n, _ in headings:
        lvl = int(n[1])
        if lvl > prev + 1:
            skips += 1
        prev = lvl
    types, schema_errors = schema_types(soup)
    article = soup.find("article") or main
    text = article.get_text(" ", strip=True) if article else ""
    intro_p = ""
    if article:
        for p in article.find_all("p"):
            t = p.get_text(" ", strip=True)
            if len(t) > 80:
                intro_p = t[:300]
                break
    h2s = [t for n, t in headings if n == "h2"]
    low = text.lower()
    signals = {
        "best_time": bool(re.search(r"best time", low)),
        "how_to_reach": bool(re.search(r"how to (reach|get)|getting there", low)),
        "itinerary": bool(re.search(r"itinerar|day 1|day-by-day|\bday one\b", low)),
        "budget": bool(re.search(r"budget|cost|₹", low)),
        "where_to_stay": bool(re.search(r"where to stay|accommodation|stay in", low)),
        "permits": bool(re.search(r"permit|inner line|protected area", low)),
    }
    crumb_nav = soup.find("nav", attrs={"aria-label": re.compile("breadcrumb", re.I)})
    faq_heading = any(re.search(r"\bFAQ|questions\b", t, re.I) for _, t in headings)
    quick = bool(soup.find(id=re.compile("quick-answer|quick-facts|at-a-glance|key-facts", re.I))) or any(
        re.search(r"quick answer|at a glance|quick facts|key facts|in short", t, re.I) for _, t in headings)
    return {
        "route": route,
        "url": SITE + (route if route != "/" else ""),
        "title": (head.title.string if head.title else "") or "",
        "description": meta(name="description") or "",
        "keywords": meta(name="keywords") or "",
        "robots": meta(name="robots") or "",
        "canonical": canon["href"] if canon else "",
        "og_title": meta(property="og:title") or "",
        "og_image": meta(property="og:image") or "",
        "h1": h1s,
        "headings": headings,
        "heading_skips": skips,
        "words": text_words(main),
        "links_out": body_links,
        "chrome_links": [h for h, _ in chrome_links],
        "external_links": ext_links,
        "images": [{"src": i.get("src", ""), "alt": i.get("alt")} for i in imgs],
        "schema": types,
        "schema_errors": schema_errors,
        "breadcrumb_nav": bool(crumb_nav),
        "breadcrumb_trail": [a.get_text(" ", strip=True) for a in crumb_nav.find_all(["a", "span"])] if crumb_nav else [],
        "faq_section": faq_heading,
        "quick_answer": quick,
        "plan_cta": any(h.startswith("/plan-your-trip") for h, _ in body_links),
        "intro": intro_p,
        "h2": h2s,
        "faq_count": types.count("Question"),
        "years": sorted(set(re.findall(r"\b(20[12][0-9])\b", text))),
        "rupee_mentions": text.count("₹"),
        "timing_mentions": len(re.findall(r"\b\d{1,2}(:\d{2})?\s?(am|pm|AM|PM)\b", text)),
        "signals": signals,
        "package_link": any(h.startswith("/packages/") for h, _ in body_links),
    }

def main():
    files = []
    for dp, _, fns in os.walk(APP):
        for fn in fns:
            if fn.endswith(".html"):
                p = os.path.join(dp, fn)
                if os.path.relpath(p, APP)[:-5] in SKIP:
                    continue
                files.append(p)
    pages = [crawl_file(p) for p in sorted(files)]
    os.makedirs(OUT, exist_ok=True)
    json.dump(pages, open(os.path.join(OUT, "pages.json"), "w"), indent=0)
    print(f"crawled {len(pages)} pages -> {OUT}/pages.json")
    c = Counter(p["route"].split("/")[1] if p["route"] != "/" else "/" for p in pages)
    print(dict(c))

if __name__ == "__main__":
    main()
