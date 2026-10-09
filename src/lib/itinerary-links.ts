// Destination guide → the day-by-day itinerary or route that covers it.
//
// This is the "Destination → Itinerary" step of the planning funnel
// (guide → things to do → itinerary → package → Plan My Trip). The crawl in
// docs/internal-linking-master-plan.md found several itinerary pages that no
// destination guide linked to (Golden Triangle, Meghalaya, South India hill
// stations), so each guide below points to the one itinerary that genuinely
// includes it. One itinerary per guide, so the link stays a single,
// contextual sentence in GuideTripCTA rather than a list.

interface ItineraryLink {
  slug: string;
  label: string;
}

const ITINERARIES: { link: ItineraryLink; guides: string[] }[] = [
  {
    link: { slug: "golden-triangle-itinerary", label: "the Golden Triangle itinerary (Delhi, Agra and Jaipur)" },
    guides: ["delhi-travel-guide", "new-delhi-travel-guide", "agra-travel-guide", "jaipur-travel-guide"],
  },
  {
    link: { slug: "kashmir-itinerary", label: "our 5 to 7 day Kashmir itinerary" },
    guides: ["srinagar-travel-guide", "gulmarg-travel-guide", "sonamarg-travel-guide"],
  },
  {
    link: { slug: "shimla-manali-itinerary", label: "our Shimla–Manali itinerary" },
    guides: ["shimla-travel-guide", "himachal-pradesh-travel-guide"],
  },
  {
    link: { slug: "rajasthan-heritage-itinerary", label: "our 10 to 14 day Rajasthan heritage itinerary" },
    guides: [
      "rajasthan-travel-guide",
      "udaipur-city-of-lakes-travel-guide",
      "jodhpur-travel-guide",
      "chittorgarh-travel-guide",
      "kumbhalgarh-travel-guide",
    ],
  },
  {
    link: { slug: "uttarakhand-hill-stations-itinerary", label: "our Garhwal and Kumaon hill-station itineraries" },
    guides: ["uttarakhand-travel-guide", "mussoorie-travel-guide", "kausani-travel-guide", "mukteshwar-travel-guide", "dhanaulti-travel-guide"],
  },
  {
    link: { slug: "meghalaya-nature-itinerary", label: "our six-day Meghalaya itinerary" },
    guides: ["meghalaya-travel-guide", "shillong-travel-guide", "cherrapunji-travel-guide", "mawlynnong-travel-guide", "nongriat-travel-guide", "dawki-travel-guide"],
  },
  {
    link: { slug: "darjeeling-sikkim-itinerary", label: "our Darjeeling and Sikkim itinerary" },
    guides: ["darjeeling-travel-guide", "west-bengal-travel-guide"],
  },
  {
    link: { slug: "south-india-hill-stations-itinerary", label: "our Ooty, Kodaikanal and Munnar itinerary" },
    guides: ["ooty-travel-guide", "kodaikanal-travel-guide"],
  },
  {
    link: { slug: "south-india-heritage-itinerary", label: "our South India heritage itinerary" },
    guides: ["karnataka-travel-guide", "tamil-nadu-travel-guide", "hampi-travel-guide", "thanjavur-travel-guide", "madurai-travel-guide", "mysuru-travel-guide"],
  },
  {
    link: { slug: "madhya-pradesh-heritage-itinerary", label: "our Madhya Pradesh heritage itinerary" },
    guides: ["gwalior-travel-guide", "orchha-travel-guide", "sanchi-travel-guide", "bhopal-travel-guide"],
  },
  {
    link: { slug: "gujarat-heritage-itinerary", label: "our Gujarat heritage itinerary" },
    guides: ["gujarat-travel-guide", "ahmedabad-travel-guide"],
  },
  {
    link: { slug: "kerala-nature-itinerary", label: "our seven-day Kerala nature itinerary" },
    guides: ["thekkady-travel-guide", "athirappilly-travel-guide"],
  },
  {
    link: { slug: "western-ghats-nature-itinerary", label: "our Western Ghats itinerary (Coorg to Dandeli)" },
    guides: ["chikmagalur-travel-guide", "dandeli-travel-guide"],
  },
  {
    link: { slug: "kedarnath-badrinath-yatra", label: "our Kedarnath and Badrinath yatra itinerary" },
    guides: ["badrinath-travel-guide"],
  },
  {
    link: { slug: "jyotirlinga-yatra", label: "our Jyotirlinga yatra routes" },
    guides: ["somnath-travel-guide", "ujjain-travel-guide", "srisailam-travel-guide", "rameswaram-travel-guide"],
  },
  {
    link: { slug: "panj-takht-yatra", label: "our Panj Takht yatra itinerary" },
    guides: ["amritsar-travel-guide"],
  },
];

export const itineraryForGuide: Record<string, ItineraryLink> = Object.fromEntries(
  ITINERARIES.flatMap(({ link, guides }) => guides.map((g) => [g, link])),
);
