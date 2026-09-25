"""Wikimedia Commons search + scoring for location-specific travel images.

Only files whose licence is free for commercial reuse are ever returned
(CC0 / Public domain / CC BY / CC BY-SA). Licence, author and source page come
straight from the Commons API (extmetadata) - nothing is inferred.
"""
import hashlib, html, json, os, re, time, urllib.parse, urllib.request

UA = "KudozzClubImageAudit/1.0 (https://club.kudozz.in; connect@kudozz.in)"
API = "https://commons.wikimedia.org/w/api.php"
CACHE = os.environ.get("COMMONS_CACHE", os.path.join(os.path.dirname(__file__), ".cache"))
os.makedirs(CACHE, exist_ok=True)

ALLOWED_LICENCE = re.compile(r"^(CC0|Public domain|PD|CC BY(-SA)? \d(\.\d)?( [A-Za-z]{2,3})?|CC BY(-SA)?)$", re.I)
BAD_TITLE = re.compile(
    r"\b(map|locator|logo|diagram|plan|chart|stamp|coin|banknote|seal|flag|emblem|painting|drawing|"
    r"sketch|engraving|lithograph|illustration|poster|screenshot|svg|pdf|signboard|board|ticket|menu|"
    r"selfie|portrait|people|wedding|train|bus|car|bike|aircraft|airport|station|hotel|restaurant|room|"
    r"food|dish|thali|interior of a house|kid|child|girl|boy|woman|man|school|vidyalaya|college|university|"
    r"office|bank|hospital|police|court|atm|shop|showroom|toilet|parking|cctv|election|protest|rally|"
    r"chicken|tikka|biryani|curry|momos?|dosa|idli|kebabs?|prawns?|meal|sweets?|snacks?|tea stall|campus|"
    r"institute|iim|iit|nit|360|equirectangular|photosphere|yale|watercolou?r|aquatint|british art|kite|old lady|"
    r"old man|portrait of|corn|cob|maize|coffee cup|bhavachakra|wheel of life|thangka|vrvbaan|butterfly|moth|"
    r"insect|spider|pansy|beetle|dragonfly|scan|scanned|drawing|satellite|imagery|staff|team|rose|automobiles?|"
    r"motors|garage|chandelier|limpets?|infestation|parthenium|science centre|gallery|iss\d*|earth|"
    r"engineering|pakistan|azad|gilgit|muzaffarabad|pok|resort|golf|fruit|1[5-8]\d\d|miniature|model|replica|"
    r"met dp|meubles|kalindi|iiitdm|lecture|turbines?|owlet|tower 1|shrine\.jpg|vall[ée]e|france|plant|lodge|circa|workshop|pig|monkey|fish|nursery|bell|boards?|3d|stereo|coins?|dinar|jhaal|fighter|jet|remnants|sunset \d|tarkarli sunset|peacock|plover|flowerpecker|libellula|truck|estrada|posterior)\b|vrvb", re.I)
FAUNA_PEOPLE_CATS = re.compile(r"\b(birds?|aves|animals?|mammals?|insects?|reptiles?|fauna|people|portraits?|children|"
                               r"girls?|boys?|women|men|selfies?|groups of people)\b", re.I)
DETAIL = re.compile(r"\b(statue|sculpture|brick|plaque|inscription|detail|close-?up|closeup|fragment|exhibit|artefact|"
                    r"artifact|door|window|ceiling|pillar|track|rail|signage|lamp|bench|dustbin|stone slab|idol|"
                    r"painting on|mural|tile|carving on|bust|memorial stone|street|road|lane|traffic|plate|discription|"
                    r"description plate|notice|poster)\b", re.I)
VIEWY = re.compile(r"\b(view|panorama|panoramic|facade|façade|exterior|landscape|aerial|skyline|overview|from above|"
                   r"sunset|sunrise|vista|full)\b", re.I)
HERO_BAD = re.compile(r"\b(bank|office|school|college|university|hospital|police|court|building|atm|shop|mall|"
                      r"stadium|petrol|pump|sign|signage|statue of a|bus stand|junction|crossing|traffic|complex buildings|"
                      r"bird|birds|cuckoo|prinia|bulbul|warbler|flycatcher|kingfisher|sunbird|babbler|drongo|"
                      r"butterfly|moth|insect|spider|flower|orchid)\b", re.I)
import os as _os
STRICT = _os.environ.get("STRICT") == "1"  # re-sourcing rounds: only clearly good images
QUALITY_CATS = re.compile(r"(Quality images|Featured pictures|Valued images|Photographs by)", re.I)
STOP = {"the", "of", "and", "in", "at", "a", "an", "to", "&", "sri", "shri", "near", "de", "la"}


def _get(params):
    params = {**params, "format": "json", "formatversion": "2"}
    key = hashlib.sha1(json.dumps(params, sort_keys=True).encode()).hexdigest()
    path = os.path.join(CACHE, key + ".json")
    if os.path.exists(path):
        return json.load(open(path))
    url = API + "?" + urllib.parse.urlencode(params)
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            data = json.load(urllib.request.urlopen(req, timeout=40))
            json.dump(data, open(path, "w"))
            time.sleep(0.25)
            return data
        except Exception:
            time.sleep(2 * (attempt + 1))
    return {}


def plain(s):
    s = re.sub(r"<[^>]+>", " ", s or "")
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


def tokens(s):
    s = s.lower().replace("’", "'")
    s = re.sub(r"[^a-z0-9 ]+", " ", s)
    return [t for t in s.split() if t not in STOP and len(t) > 1]


def search(query, limit=40, width=1920):
    d = _get({
        "action": "query", "generator": "search", "gsrnamespace": "6",
        "gsrsearch": f"{query} filetype:bitmap", "gsrlimit": str(limit),
        "prop": "imageinfo|categories", "cllimit": "max", "clshow": "!hidden",
        "iiprop": "url|size|mime|extmetadata", "iiurlwidth": str(width),
        "iiextmetadatafilter": "LicenseShortName|Artist|ImageDescription|Credit|AttributionRequired|UsageTerms",
    })
    out = []
    for p in (d.get("query", {}) or {}).get("pages", []):
        ii = (p.get("imageinfo") or [None])[0]
        if not ii:
            continue
        m = ii.get("extmetadata", {})
        lic = plain(m.get("LicenseShortName", {}).get("value", ""))
        out.append({
            "title": p["title"],
            "rank": p.get("index", 99),
            "w": ii.get("width", 0), "h": ii.get("height", 0), "mime": ii.get("mime", ""),
            "thumb": ii.get("thumburl") or ii.get("url"),
            "page": ii.get("descriptionurl"),
            "licence": lic,
            "author": plain(m.get("Artist", {}).get("value", ""))[:160],
            "desc": plain(m.get("ImageDescription", {}).get("value", ""))[:400],
            "attribution_required": m.get("AttributionRequired", {}).get("value", "") == "true",
            "cats": [c["title"].replace("Category:", "") for c in p.get("categories", [])],
        })
    return out


def score(c, must, context=(), used=frozenset(), orientation="landscape", hero=False, need_view=False,
          allow_fauna=False):
    """Return (score, reasons) or (None, reason) if the candidate is rejected.
    must: every token must appear in title/description/categories.
    context: at least one token should appear (disambiguates same-name places)."""
    if c["mime"] not in ("image/jpeg", "image/png", "image/webp"):
        return None, "mime"
    if not ALLOWED_LICENCE.match(c["licence"] or ""):
        return None, f"licence {c['licence']!r}"
    if c["w"] < 1100 or c["h"] < 650:
        return None, "too small"
    ratio = c["w"] / max(c["h"], 1)
    if orientation == "landscape" and not (1.2 <= ratio <= 2.4):
        return None, "not landscape"
    title_text = re.sub(r"^File:|\.\w+$", "", c["title"])
    if BAD_TITLE.search(title_text) or (hero and HERO_BAD.search(title_text)):
        return None, "bad title"
    if not allow_fauna and any(FAUNA_PEOPLE_CATS.search(cat) for cat in c["cats"]):
        return None, "fauna/people category"
    hay_title = set(tokens(title_text))
    hay_all = hay_title | set(tokens(c["desc"])) | set(t for cat in c["cats"] for t in tokens(cat))
    if need_view and not (VIEWY.search(title_text) or VIEWY.search(c["desc"])
                          or any(QUALITY_CATS.search(cat) for cat in c["cats"])):
        return None, "not a view"
    hay_named = hay_title | set(tokens(c["desc"]))   # the file itself must name the place,
    missing = [t for t in must if t not in hay_named]  # not just a broad district category
    if STRICT:
        quality = any(QUALITY_CATS.search(cat) for cat in c["cats"])
        viewy = VIEWY.search(title_text) or VIEWY.search(c["desc"])
        named_in_title = all(t in hay_title for t in must)
        if not (quality or (viewy and named_in_title)):
            return None, "strict: not a featured image or a named view"
    if missing:
        return None, f"missing {missing}"
    s = 10.0
    s += 4 * sum(t in hay_title for t in must)           # named in the file title itself
    if context:
        if not any(t in hay_all for t in context):
            return None, "no context match"
        s += 6
    if any(QUALITY_CATS.search(cat) for cat in c["cats"]):
        s += 5
    if DETAIL.search(title_text):
        return None, "detail shot"
    if VIEWY.search(title_text):
        s += 3
    s += min(c["w"], 4000) / 1000
    s -= c["rank"] * 0.15                                # Commons relevance order
    if c["title"] in used:
        s -= 30
    return s, "ok"


def best(queries, must, context=(), used=frozenset(), n=1, hero=False, need_view=False, allow_fauna=False):
    seen, ranked = set(), []
    for q in queries:
        found = search(q)
        for c in found:
            if c["title"] in seen:
                continue
            seen.add(c["title"])
            s, why = score(c, must, context, used, hero=hero, need_view=need_view, allow_fauna=allow_fauna)
            if s is not None:
                ranked.append((s, c))
        if ranked:
            break  # first query with valid candidates wins; later queries are fallbacks
        if len(found) >= 25:
            break  # well-covered query with nothing acceptable: fallbacks return the same files
    ranked.sort(key=lambda x: -x[0])
    return [c for _, c in ranked[:n]]
