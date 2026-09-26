// Lightweight lookups over the generated adventure index. Safe to import from
// client components: titles, facets and links only, no article bodies.
import index from "./adventure-index.json";

export interface AdvIndexEntry {
  slug: string;
  title: string;
  short: string; // card / link label, e.g. "River rafting"
  kind: "pillar" | "activity" | "destination" | "weekend" | "planning" | "state";
  excerpt: string;
  image: string;
  imageAlt: string;
  tags: string[];
  readTime: string;
  activities: string[];
  terrain: string[];
  regions: string[];
  seasons: string[];
  travellers: string[];
  parent: string; // href
}

export const adventureIndex = index as AdvIndexEntry[];

const bySlug = new Map(adventureIndex.map((e) => [e.slug, e]));

export function adventureEntry(slug: string) {
  return bySlug.get(slug);
}

export function adventureByKind(kind: AdvIndexEntry["kind"]) {
  return adventureIndex.filter((e) => e.kind === kind);
}

/** Articles sharing an activity or region with this one, most overlap first. */
export function relatedAdventure(slug: string, n = 6) {
  const me = bySlug.get(slug);
  if (!me) return [];
  const facets = new Set([...me.activities, ...me.regions]);
  return adventureIndex
    .filter((e) => e.slug !== slug)
    .map((e) => ({ e, s: [...e.activities, ...e.regions].filter((f) => facets.has(f)).length }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.e);
}

// State package pages → the adventure articles about that state.
const byPackage: Record<string, string[]> = {
  "leh-ladakh": ["adventure-activities-in-ladakh", "river-rafting-in-india", "best-motorcycle-trips-in-india", "mountain-biking-in-india"],
  "himachal-pradesh": ["adventure-activities-in-himachal-pradesh", "adventure-activities-in-manali", "paragliding-in-india", "spiti-valley-bike-trip", "beginner-treks-in-india"],
  uttarakhand: ["adventure-activities-in-uttarakhand", "river-rafting-in-rishikesh", "bungee-jumping-in-india", "winter-treks-in-india", "trekking-in-india"],
  kashmir: ["skiing-in-india", "trekking-in-india", "monsoon-treks-in-india"],
  goa: ["adventure-activities-in-goa", "water-sports-in-india", "kayaking-in-india"],
  "andaman-nicobar": ["adventure-activities-in-andaman", "scuba-diving-in-andaman", "snorkeling-in-india"],
  lakshadweep: ["scuba-diving-in-india", "snorkeling-in-india"],
  sikkim: ["adventure-activities-in-sikkim", "trekking-in-india"],
  meghalaya: ["adventure-activities-in-meghalaya", "kayaking-in-india"],
  rajasthan: ["desert-adventures-in-india", "hot-air-balloon-rides-in-india", "camping-in-india"],
  gujarat: ["desert-adventures-in-india"],
  maharashtra: ["weekend-adventure-trips-from-mumbai", "monsoon-treks-in-india", "paragliding-in-india"],
  karnataka: ["weekend-adventure-trips-from-bengaluru", "rock-climbing-in-india", "surfing-in-india", "river-rafting-in-india"],
  kerala: ["surfing-in-india", "kayaking-in-india"],
  "tamil-nadu": ["surfing-in-india"],
  delhi: ["weekend-adventure-trips-from-delhi"],
  "west-bengal": ["trekking-in-india", "mountaineering-in-india"],
  "arunachal-pradesh": ["best-motorcycle-trips-in-india", "mountaineering-in-india"],
};

export function adventureForPackage(packageSlug: string) {
  return (byPackage[packageSlug] ?? []).map((s) => bySlug.get(s)).filter((e): e is AdvIndexEntry => Boolean(e));
}

// Guides and pages that already own an adventure intent, pointed at the
// adventure article that covers the wider topic (see
// docs/adventure-travel-cannibalization.md). Used by GuideTripCTA.
export const adventureForGuide: Record<string, { slug: string; label: string }> = {
  "rishikesh-adventure-travel-guide": { slug: "river-rafting-in-rishikesh", label: "river rafting in Rishikesh" },
  "bir-billing-travel-guide": { slug: "paragliding-in-india", label: "paragliding in India" },
  "gulmarg-travel-guide": { slug: "skiing-in-india", label: "skiing in India" },
  "auli-travel-guide": { slug: "skiing-in-india", label: "skiing in India" },
  "leh-ladakh-road-trip-travel-guide": { slug: "adventure-activities-in-ladakh", label: "adventure activities in Ladakh" },
  "leh-travel-guide": { slug: "adventure-activities-in-ladakh", label: "adventure activities in Ladakh" },
  "zanskar-valley-travel-guide": { slug: "adventure-activities-in-ladakh", label: "adventure activities in Ladakh" },
  "spiti-valley-travel-guide": { slug: "spiti-valley-bike-trip", label: "Spiti Valley bike trip" },
  "manali-travel-guide": { slug: "adventure-activities-in-manali", label: "adventure activities in Manali" },
  "havelock-island-andaman-travel-guide": { slug: "scuba-diving-in-andaman", label: "scuba diving in the Andamans" },
  "neil-island-andaman-travel-guide": { slug: "scuba-diving-in-andaman", label: "scuba diving in the Andamans" },
  "andaman-islands-travel-guide": { slug: "adventure-activities-in-andaman", label: "adventure activities in the Andamans" },
  "north-bay-island-andaman-travel-guide": { slug: "snorkeling-in-india", label: "snorkelling in India" },
  "lakshadweep-island-travel-guide": { slug: "scuba-diving-in-india", label: "scuba diving in India" },
  "goa-beaches-travel-guide": { slug: "adventure-activities-in-goa", label: "adventure activities in Goa" },
  "sikkim-travel-guide": { slug: "adventure-activities-in-sikkim", label: "adventure activities in Sikkim" },
  "meghalaya-travel-guide": { slug: "adventure-activities-in-meghalaya", label: "adventure activities in Meghalaya" },
  "dandeli-travel-guide": { slug: "river-rafting-in-india", label: "river rafting in India" },
  "tarkarli-travel-guide": { slug: "scuba-diving-in-india", label: "scuba diving in India" },
  "rajasthan-desert-travel-guide": { slug: "desert-adventures-in-india", label: "desert adventures in India" },
  "rann-of-kutch-travel-guide": { slug: "desert-adventures-in-india", label: "desert adventures in India" },
  "kasol-kheerganga-trek-travel-guide": { slug: "beginner-treks-in-india", label: "beginner treks in India" },
  "chopta-travel-guide": { slug: "winter-treks-in-india", label: "winter treks in India" },
  "sandakphu-travel-guide": { slug: "trekking-in-india", label: "trekking in India" },
  "valley-of-flowers-travel-guide": { slug: "monsoon-treks-in-india", label: "monsoon treks in India" },
  "dzukou-valley-travel-guide": { slug: "trekking-in-india", label: "trekking in India" },
  "varkala-travel-guide": { slug: "surfing-in-india", label: "surfing in India" },
  "kovalam-travel-guide": { slug: "surfing-in-india", label: "surfing in India" },
  "gokarna-beaches-travel-guide": { slug: "surfing-in-india", label: "surfing in India" },
  "lonavala-travel-guide": { slug: "weekend-adventure-trips-from-mumbai", label: "weekend adventure trips from Mumbai" },
  "coorg-travel-guide": { slug: "river-rafting-in-india", label: "river rafting in India" },
  "nubra-valley-travel-guide": { slug: "desert-adventures-in-india", label: "desert adventures in India" },
  "tirthan-valley-travel-guide": { slug: "adventure-activities-in-himachal-pradesh", label: "adventure activities in Himachal" },
  "dharamshala-travel-guide": { slug: "beginner-treks-in-india", label: "beginner treks in India" },
  "mussoorie-travel-guide": { slug: "adventure-activities-in-uttarakhand", label: "adventure activities in Uttarakhand" },
  "nainital-travel-guide": { slug: "adventure-activities-in-uttarakhand", label: "adventure activities in Uttarakhand" },
  "uttarakhand-travel-guide": { slug: "adventure-activities-in-uttarakhand", label: "adventure activities in Uttarakhand" },
  "himachal-pradesh-travel-guide": { slug: "adventure-activities-in-himachal-pradesh", label: "adventure activities in Himachal Pradesh" },
  "kullu-travel-guide": { slug: "adventure-activities-in-manali", label: "adventure activities around Manali and Kullu" },
  "hampi-travel-guide": { slug: "rock-climbing-in-india", label: "rock climbing and bouldering in India" },
  "badami-aihole-pattadakal-travel-guide": { slug: "rock-climbing-in-india", label: "rock climbing in India" },
  "tehri-lake-travel-guide": { slug: "water-sports-in-india", label: "water sports in India" },
  "umiam-lake-travel-guide": { slug: "adventure-activities-in-meghalaya", label: "adventure activities in Meghalaya" },
  "dawki-travel-guide": { slug: "adventure-activities-in-meghalaya", label: "adventure activities in Meghalaya" },
  "shnongpdeng-travel-guide": { slug: "adventure-activities-in-meghalaya", label: "adventure activities in Meghalaya" },
  "nongriat-travel-guide": { slug: "adventure-activities-in-meghalaya", label: "adventure activities in Meghalaya" },
  "cherrapunji-travel-guide": { slug: "adventure-activities-in-meghalaya", label: "adventure activities in Meghalaya" },
  "yuksom-travel-guide": { slug: "adventure-activities-in-sikkim", label: "adventure activities in Sikkim" },
  "gangtok-travel-guide": { slug: "adventure-activities-in-sikkim", label: "adventure activities in Sikkim" },
  "patnitop-travel-guide": { slug: "paragliding-in-india", label: "paragliding in India" },
  "sonamarg-travel-guide": { slug: "monsoon-treks-in-india", label: "summer and monsoon treks in India" },
  "pahalgam-travel-guide": { slug: "monsoon-treks-in-india", label: "summer and monsoon treks in India" },
  "khardung-la-travel-guide": { slug: "adventure-activities-in-ladakh", label: "adventure activities in Ladakh" },
  "pangong-lake-travel-guide": { slug: "camping-in-india", label: "camping in India" },
  "dayara-bugyal-travel-guide": { slug: "winter-treks-in-india", label: "winter treks in India" },
  "alibaug-travel-guide": { slug: "weekend-adventure-trips-from-mumbai", label: "weekend adventure trips from Mumbai" },
  "mahabaleshwar-travel-guide": { slug: "weekend-adventure-trips-from-mumbai", label: "weekend adventure trips from Mumbai and Pune" },
  "bhandardara-travel-guide": { slug: "camping-in-india", label: "camping in India" },
  "chikmagalur-travel-guide": { slug: "weekend-adventure-trips-from-bengaluru", label: "weekend adventure trips from Bengaluru" },
  "nandi-hills-travel-guide": { slug: "weekend-adventure-trips-from-bengaluru", label: "weekend adventure trips from Bengaluru" },
  "jolly-buoy-island-andaman-travel-guide": { slug: "snorkeling-in-india", label: "snorkelling in India" },
  "little-andaman-travel-guide": { slug: "adventure-activities-in-andaman", label: "adventure activities in the Andamans" },
  "diglipur-andaman-travel-guide": { slug: "adventure-activities-in-andaman", label: "adventure activities in the Andamans" },
  "bikaner-travel-guide": { slug: "desert-adventures-in-india", label: "desert adventures in India" },
  "osian-travel-guide": { slug: "desert-adventures-in-india", label: "desert adventures in India" },
  "pushkar-travel-guide": { slug: "hot-air-balloon-rides-in-india", label: "hot air balloon rides in India" },
  "gangotri-travel-guide": { slug: "mountaineering-in-india", label: "mountaineering in India" },
  "munsiyari-travel-guide": { slug: "adventure-activities-in-uttarakhand", label: "adventure activities in Uttarakhand" },
};
