// Data for /packages/[slug] travel-style pages (family holidays, honeymoon,
// etc.). `relatedStates` are real, well-established destination fits for
// each style — every slug listed here resolves to a real page in
// all-states-data.ts. See docs/new-information-architecture.md §3.
export interface TravelStylePackage {
  slug: string;
  name: string;
  desc: string;
  intro: string;
  image: string;
  relatedStates: string[]; // slugs into allStatePackages
}

export const travelStylesData: TravelStylePackage[] = [
  {
    slug: "family-holidays",
    name: "Family Holidays",
    desc: "Kid-friendly pacing and stays",
    intro:
      "Family trips need a slower pace, shorter travel days, and stays that work for every age group — not a checklist of every attraction in a state.",
    image: "/images/destinations/kerala/hero.jpg",
    relatedStates: ["kerala", "goa", "rajasthan", "himachal-pradesh"],
  },
  {
    slug: "honeymoon",
    name: "Honeymoon",
    desc: "Romantic routes, privacy-first stays",
    intro:
      "From Kerala's backwaters to Kashmir's houseboats, Kudozz Club plans honeymoon routes built around privacy and pace, not a generic sightseeing list.",
    image: "/images/destinations/jammu-kashmir/hero.jpg",
    relatedStates: ["kerala", "goa", "kashmir", "andaman-nicobar"],
  },
  {
    slug: "weekend-getaways",
    name: "Weekend Getaways",
    desc: "Short trips, minimal planning",
    intro:
      "For a 2–3 day trip, the plan matters more than the destination — tight logistics, minimal travel time, and a route that doesn't feel rushed.",
    image: "/images/destinations/rishikesh/rishikesh.jpg",
    relatedStates: ["uttarakhand", "chandigarh", "karnataka", "goa"],
  },
  {
    slug: "group-tours",
    name: "Group Tours",
    desc: "Friends, family reunions, larger groups",
    intro:
      "Larger groups need coordinated transport, room configurations, and a pace everyone can keep up with — we plan around the group, not a fixed template.",
    image:
      "/images/blogs/rajasthan/rajasthan/hawa-mahal-facade-jaipur.webp",
    relatedStates: ["rajasthan", "kerala", "himachal-pradesh", "goa"],
  },
  {
    slug: "adventure-tours",
    name: "Adventure Trips",
    desc: "Trekking, rafting, road trips",
    intro:
      "High-altitude passes, white-water rafting, and multi-day treks — adventure trips need real logistics planning around permits, altitude, and season.",
    image: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
    relatedStates: ["leh-ladakh", "himachal-pradesh", "uttarakhand", "meghalaya"],
  },
  {
    slug: "wildlife-tours",
    name: "Wildlife Trips",
    desc: "National parks and safaris",
    intro:
      "Safari zone allocation, permit timing, and choosing the right season matter as much as choosing the park — we handle both.",
    image:
      "/images/blogs/assam/assam/one-horned-rhinoceros-kaziranga-assam.webp",
    relatedStates: ["madhya-pradesh", "rajasthan", "karnataka", "assam"],
  },
  {
    slug: "spiritual-tours",
    name: "Spiritual & Pilgrimage",
    desc: "Char Dham, temple circuits",
    intro:
      "From the Char Dham Yatra to temple circuits in the south, pilgrimage trips need careful pacing around altitude, crowds, and ritual timings.",
    image: "/images/blogs/punjab/punjab/golden-temple-amritsar-punjab.webp",
    relatedStates: ["uttarakhand", "uttar-pradesh", "punjab", "odisha"],
  },
  {
    slug: "heritage-tours",
    name: "Heritage & Culture",
    desc: "Forts, palaces, UNESCO sites",
    intro:
      "Heritage trips work best with the right sequence: monuments at opening time, rest in the midday heat, a guide who knows the history, and room for crafts, food and performances in between.",
    image: "/images/blogs/karnataka/hampi/stone-chariot-vittala-temple-hampi.webp",
    relatedStates: ["rajasthan", "gujarat", "karnataka", "madhya-pradesh"],
  },
  {
    slug: "hill-station-holidays",
    name: "Hill Stations",
    desc: "Himalayan towns, tea hills, snow",
    intro:
      "Hill holidays work best when the season, the roads and the pace are right: the right hill for the month, realistic mountain driving days, and stays that suit who is travelling.",
    image: "/images/blogs/sikkim/pelling/kanchenjunga-peak-view-from-pelling-sikkim.webp",
    relatedStates: ["himachal-pradesh", "uttarakhand", "kashmir", "sikkim"],
  },
  {
    slug: "luxury-holidays",
    name: "Luxury Holidays",
    desc: "Premium stays, private transport",
    intro:
      "Palace hotels, private transfers, and a pace built around comfort rather than covering ground — luxury trips planned around what actually matters to you.",
    image: "/images/destinations/udaipur/hero.jpg",
    relatedStates: ["rajasthan", "kerala", "goa", "kashmir"],
  },
  {
    slug: "budget-holidays",
    name: "Budget Holidays",
    desc: "Value-conscious, still well-planned",
    intro:
      "A tighter budget doesn't mean a worse trip — it means smarter routing, well-chosen stays, and cutting the costs that don't add to the experience.",
    image: "/images/destinations/manali/hero.jpg",
    relatedStates: ["himachal-pradesh", "uttarakhand", "karnataka", "rajasthan"],
  },
];

export function getTravelStyle(slug: string) {
  return travelStylesData.find((s) => s.slug === slug);
}
