"""Place-name helpers shared by plan.py and resolve.py."""
import re

GENERIC = re.compile(
    r"^(day\s*\d|days?\b|by (air|rail|road|train|bus|flight|car)|budget|mid-?range|luxury|best time|how to|where to|what to|"
    r"tips|summer|winter|monsoon|spring|autumn|post-monsoon|pre-monsoon|getting|food|shopping|nightlife|stay|accommodation|"
    r"safety|permits?|faq|itinerary|option|morning|evening|afternoon|night|note|important|packing|photograph|cost|entry|"
    r"timings?|fees?|route|overview|history|culture|festivals?|local|street food|cuisine|dress|etiquette|getting around|"
    r"transport|weather|climate|essential|practical|responsible|things to|top |why |about |more |other |nearby|half|full|"
    r"option|first-time|solo|family|couples?|budget|packing|safari (booking|timings|zones?)|jeep|canter|boat ride|"
    r"trek(king)? (difficulty|route)|difficulty|health|altitude|acclimati|network|atm|cash|visa|what|where|when|how|who)",
    re.I)
ATTRACTION_WORDS = re.compile(
    r"\b(temple|mandir|fort|qila|palace|mahal|lake|tso|falls?|waterfall|beach|national park|sanctuary|tiger reserve|reserve|"
    r"caves?|garden|bagh|museum|island|valley|pass|la|dam|monastery|gompa|masjid|mosque|church|basilica|cathedral|stupa|"
    r"tomb|maqbara|ghat|market|bazaar|chowk|minar|gate|darwaza|stepwell|baori|vav|peak|hill|hills|glacier|meadow|bugyal|"
    r"sahib|gurudwara|dargah|memorial|jail|bridge|ashram|monument|observatory|mantar|canyon|gorge|river|springs?|kund)\b", re.I)


ATTRACTION_SECTION = re.compile(
    r"(things to (do|see)|places|attractions|sights|sightseeing|highlights|explore|beaches|temples|forts|palaces|"
    r"lakes|waterfalls|treks|trails|islands|nearby|around|what to see|top |must|monasteries|parks|gardens|"
    r"heritage|monuments|churches|ghats|caves|viewpoints|landmarks)", re.I)
AVOID_SECTION = re.compile(r"(how to reach|getting|tips|eat|food|stay|budget|itinerary|visit plan|permit|safety|"
                           r"faq|question|when to|best time|packing|cost|transport|shopping)", re.I)


def place_of_title(title):
    t = title.split(":")[0]
    t = re.sub(r"\s*[—–]\s.*$", "", t)
    t = re.sub(r"\s+(Complete\s+)?(Travel|Road Trip|Adventure|Visit|Trekking|Trek|Tourism)?\s*Guide\b.*$", "", t, flags=re.I)
    t = re.sub(r"^Things to Do in\s+|\s+for First-Time Visitors$", "", t, flags=re.I)
    return t.strip()


def clean_place(h):
    h = re.sub(r"^\d+[\.\)]\s*", "", h)
    h = re.sub(r"\s*\((.*?)\)\s*", " ", h)
    h = h.split(":")[0].split(" — ")[0].split(" – ")[0]
    return h.strip(" .,-")


NOT_PLACE_WORD = re.compile(
    r"\b(permits?|clearance|nationals|meals?|dishes|restaurants?|stalls?|prasadam|restrictions?|tips?|policy|booking|"
    r"tickets?|fees?|hours|zones?|walks?|viewpoints|options?|routes?|access|rules|essentials|gear|cuisine|thali|"
    r"sweets?|snacks?|shacks?|homestays?|hotels?|resorts?|lodges?|camps?|guesthouses?|dhabas?|cafes?|foods?|"
    r"festival season|season|weekend|weekday|crowds?|journey|drive|flight|ferry|jeep|canter|trains?|buses?|taxi|"
    r"combine|leave|visit|check|carry|book|avoid|start|arrive|return|plan)\b", re.I)
CONNECT = {"of", "the", "and", "&", "at", "in", "on", "to", "de", "la", "ki", "ka", "ke", "se", "e"}


def is_place(h):
    h = clean_place(h)
    if not h or len(h) > 44 or GENERIC.search(h) or NOT_PLACE_WORD.search(h) or "/" in h:
        return False
    words = [w for w in re.split(r"[\s-]+", h) if w and w.lower() not in CONNECT]
    return bool(words) and all(w[:1].isupper() or w[:1].isdigit() or w[:1] in "'’" for w in words)


def strong_items(src_block):
    items = re.findall(r"<li>\s*<strong>([^<]{3,60}?)[:—–-]?\s*</strong>", src_block)
    return [clean_place(i) for i in items if is_place(i)]


