// src/app/destinations/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Destinations — Explore India & Beyond",
  description:
    "Browse all travel destinations on Kudozz Club — from Himalayan peaks to tropical beaches, ancient heritage sites to off-beat hidden gems. Hand-crafted guides for every kind of explorer.",
  alternates: { canonical: "https://club.kudozz.in/destinations" },
};

function DestinationsSchema({
  destinations,
}: {
  destinations: { slug: string; title: string; state: string }[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Destinations — Explore India & Beyond",
          url: "https://club.kudozz.in/destinations",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://club.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Destinations",
                item: "https://club.kudozz.in/destinations",
              },
            ],
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: destinations.map((d, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://club.kudozz.in/blog/${d.slug}`,
              name: `${d.title}, ${d.state}`,
            })),
          },
        }),
      }}
    />
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const featured = [
  {
    slug: "manali-travel-guide",
    title: "Manali",
    state: "Himachal Pradesh",
    tagline: "Where the mountains begin",
    description:
      "Snow-capped peaks, apple orchards, ancient temples and Himalayan adventure in one of India's most beloved hill stations.",
    image: "/images/destinations/manali/hero.jpg",
    category: "Mountains",
    region: "north",
    tags: ["mountains", "adventure"],
    readTime: "16 min",
    highlight: "Rohtang Pass at sunrise",
    bestTime: "Oct – Jun",
    featured: true,
    large: true,
    comingSoon: false,
  },
  {
    slug: "leh-ladakh-road-trip",
    title: "Leh Ladakh",
    state: "Ladakh",
    tagline: "Beyond the highest passes",
    description:
      "Moonscapes, Buddhist monasteries and the world's most dramatic road trip through passes that touch the sky.",
    image: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
    category: "Road Trip",
    region: "north",
    tags: ["mountains", "adventure"],
    readTime: "26 min",
    highlight: "Pangong Tso at dusk",
    bestTime: "Jun – Sep",
    featured: true,
    large: false,
    comingSoon: false,
  },
  {
    slug: "spiti-valley-travel-guide",
    title: "Spiti Valley",
    state: "Himachal Pradesh",
    tagline: "The cold desert between worlds",
    description:
      "Remote monasteries, Mars-like landscapes and an unfiltered slice of Tibetan-Buddhist culture on India's most dramatic road.",
    image: "/images/destinations/spiti-valley/spiti-valley.jpg",
    category: "Off-beat",
    region: "north",
    tags: ["mountains", "offbeat"],
    readTime: "22 min",
    highlight: "Key Monastery dawn prayers",
    bestTime: "Jun – Oct",
    featured: true,
    large: false,
    comingSoon: false,
  },
  {
    slug: "rishikesh-adventure-guide",
    title: "Rishikesh",
    state: "Uttarakhand",
    tagline: "Where the Ganga roars",
    description:
      "India's adventure capital and yoga heartland — white-water rafting, bungee jumping and Ganga aarti all in one spiritual town.",
    image: "/images/destinations/rishikesh/rishikesh.jpg",
    category: "Adventure",
    region: "north",
    tags: ["adventure", "spiritual"],
    readTime: "18 min",
    highlight: "Ganga Aarti at Parmarth",
    bestTime: "Sep – Jun",
    featured: true,
    large: false,
    comingSoon: false,
  },
  {
    slug: "coorg-guide",
    title: "Coorg",
    state: "Karnataka",
    tagline: "India's coffee country",
    description:
      "Misty coffee hills, thundering waterfalls, Nagarhole wildlife and the warm hospitality of the Kodava people.",
    image: "/images/destinations/coorg/coorg.jpg",
    category: "Nature",
    region: "south",
    tags: ["wildlife", "offbeat"],
    readTime: "17 min",
    highlight: "Plantation sunrise walk",
    bestTime: "Oct – May",
    featured: true,
    large: false,
    comingSoon: false,
  },
];

const allDestinations = [
  ...featured,
  {
    slug: "kasol-kheerganga-trek",
    title: "Kasol & Kheerganga",
    state: "Himachal Pradesh",
    tagline: "The Parvati Valley trail",
    description:
      "Follow the Parvati River to steaming hot springs through pine forests, tiny Himalayan villages and backpacker cafes.",
    image: "/images/destinations/kasol/kasol.jpg",
    category: "Trekking",
    region: "north",
    tags: ["mountains", "adventure"],
    readTime: "12 min",
    highlight: "Kheerganga hot springs",
    bestTime: "Mar – Jun, Sep – Nov",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "valley-of-flowers",
    title: "Valley of Flowers",
    state: "Uttarakhand",
    tagline: "A meadow of 300 wildflowers",
    description:
      "A UNESCO World Heritage Site that blooms briefly each monsoon with hundreds of Himalayan wildflower species.",
    image: "/images/destinations/manali/hero.jpg",
    category: "Trekking",
    region: "north",
    tags: ["mountains", "offbeat"],
    readTime: "10 min",
    highlight: "July bloom at peak season",
    bestTime: "Jul – Aug",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "andaman-islands-guide",
    title: "Andaman Islands",
    state: "Andaman & Nicobar",
    tagline: "Where the Bay meets paradise",
    description:
      "Crystal-clear waters, pristine coral reefs, white sand beaches and the haunting history of Cellular Jail.",
    image: "/images/destinations/andaman/hero.jpg",
    category: "Beaches",
    region: "islands",
    tags: ["beaches", "adventure"],
    readTime: "20 min",
    highlight: "Radhanagar Beach at sunset",
    bestTime: "Nov – May",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "hampi-guide",
    title: "Hampi",
    state: "Karnataka",
    tagline: "Ruins of a lost empire",
    description:
      "The extraordinary ruins of the Vijayanagara Empire scattered across a surreal boulder landscape — one of India's most unique heritage sites.",
    image: "/images/destinations/hampi/hero.jpg",
    category: "Heritage",
    region: "south",
    tags: ["heritage", "offbeat"],
    readTime: "14 min",
    highlight: "Virupaksha Temple at sunrise",
    bestTime: "Oct – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "kerala-backwaters",
    title: "Kerala Backwaters",
    state: "Kerala",
    tagline: "Life on the waterways",
    description:
      "A 900-km network of lagoons, canals and lakes explored by houseboat — coconut palms, toddy shops and village life at water level.",
    image: "/images/destinations/kerala/hero.jpg",
    category: "Nature",
    region: "south",
    tags: ["offbeat"],
    readTime: "15 min",
    highlight: "Overnight houseboat in Alleppey",
    bestTime: "Sep – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "rajasthan-desert-guide",
    title: "Jaisalmer",
    state: "Rajasthan",
    tagline: "The golden city of sand",
    description:
      "A living medieval fort rising from the Thar Desert, camel safaris into the dunes and the most spectacular havelis in Rajasthan.",
    image: "/images/destinations/jaisalmer/hero.jpg",
    category: "Heritage",
    region: "west",
    tags: ["heritage", "adventure"],
    readTime: "13 min",
    highlight: "Sunrise camel safari in Sam dunes",
    bestTime: "Oct – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "meghalaya-travel-guide",
    title: "Meghalaya",
    state: "Meghalaya",
    tagline: "The abode of clouds",
    description:
      "Double-decker living root bridges, Asia's cleanest village, and a river so clear boats appear to float on air.",
    image: "/images/destinations/meghalaya/hero.jpg",
    category: "Nature",
    region: "northeast",
    tags: ["offbeat", "adventure"],
    readTime: "20 min",
    highlight: "Umngot River at Dawki",
    bestTime: "Oct – Apr",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "ziro-valley-arunachal",
    title: "Ziro Valley",
    state: "Arunachal Pradesh",
    tagline: "India's most untouched valley",
    description:
      "A UNESCO tentative heritage site in Arunachal — home to the Apatani tribe, terraced rice fields and one of India's best music festivals.",
    image: "/images/destinations/meghalaya/hero.jpg",
    category: "Off-beat",
    region: "northeast",
    tags: ["offbeat", "heritage"],
    readTime: "11 min",
    highlight: "Ziro Music Festival (September)",
    bestTime: "Mar – Oct",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "gokarna-beaches",
    title: "Gokarna",
    state: "Karnataka",
    tagline: "Quieter than Goa",
    description:
      "A temple town with world-class beaches — Om Beach, Half Moon, and Paradise — without Goa's commercialisation.",
    image: "/images/destinations/coorg/coorg.jpg",
    category: "Beaches",
    region: "south",
    tags: ["beaches", "spiritual"],
    readTime: "9 min",
    highlight: "Om Beach at low tide",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "udaipur-city-of-lakes",
    title: "Udaipur",
    state: "Rajasthan",
    tagline: "The city of lakes",
    description:
      "Palaces floating on still water, whitewashed havelis and the most romantic skyline in Rajasthan.",
    image: "/images/destinations/jaisalmer/hero.jpg",
    category: "Heritage",
    region: "west",
    tags: ["heritage", "spiritual"],
    readTime: "10 min",
    highlight: "Sunset boat ride on Lake Pichola",
    bestTime: "Sep – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "goa-beaches-guide",
    title: "Goa",
    state: "Goa",
    tagline: "Sun, sand and susegad",
    description:
      "Portuguese-era churches, beach shacks, and a coastline that switches from party-loud to monastery-quiet within a few kilometres.",
    image: "/images/destinations/andaman/hero.jpg",
    category: "Beaches",
    region: "west",
    tags: ["beaches", "adventure"],
    readTime: "12 min",
    highlight: "Sunset at Palolem Beach",
    bestTime: "Nov – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "puducherry-french-quarter-guide",
    title: "Puducherry",
    state: "Puducherry",
    tagline: "India's most European town",
    description:
      "Mustard-yellow colonial villas, a seafront promenade closed to traffic, and the golden Matrimandir at Auroville nearby.",
    image: "/images/destinations/puducherry/hero.jpg",
    category: "Heritage",
    region: "south",
    tags: ["heritage", "beaches"],
    readTime: "10 min",
    highlight: "Sunset walk on Promenade Beach",
    bestTime: "Oct – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "lakshadweep-island-guide",
    title: "Lakshadweep",
    state: "Lakshadweep",
    tagline: "India's coral atoll islands",
    description:
      "Turquoise lagoons, permit-only islands, and some of the clearest diving water in the Indian Ocean.",
    image: "/images/destinations/lakshadweep/hero.jpg",
    category: "Beaches",
    region: "islands",
    tags: ["beaches", "offbeat"],
    readTime: "12 min",
    highlight: "Snorkeling the Bangaram lagoon",
    bestTime: "Oct – May",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "jammu-kashmir-travel-guide",
    title: "Jammu & Kashmir",
    state: "Jammu & Kashmir",
    tagline: "Paradise on Earth",
    description:
      "Houseboats on Dal Lake, gondola rides above the snow line, and valleys that inspired the region's old Mughal-era name.",
    image: "/images/destinations/jammu-kashmir/hero.jpg",
    category: "Mountains",
    region: "north",
    tags: ["mountains", "heritage"],
    readTime: "15 min",
    highlight: "Gulmarg Gondola above the snow line",
    bestTime: "Apr – Jun, Sep – Oct",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "dadra-nagar-haveli-daman-diu-guide",
    title: "Daman & Diu",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    tagline: "Portuguese forts by the sea",
    description:
      "A 16th-century Portuguese sea fort, near-empty beaches, and duty-free shopping — India's smallest, most overlooked Union Territory.",
    image: "/images/destinations/goa/hero.jpg",
    category: "Heritage",
    region: "west",
    tags: ["heritage", "beaches"],
    readTime: "13 min",
    highlight: "Sunset from Diu Fort's ramparts",
    bestTime: "Nov – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "chandigarh-travel-guide",
    title: "Chandigarh",
    state: "Chandigarh",
    tagline: "India's most planned city",
    description:
      "Le Corbusier's modernist Capitol Complex, a rock garden built entirely from industrial waste, and a lake at the foot of the Shivaliks.",
    image: "/images/destinations/rishikesh/rishikesh.jpg",
    category: "Heritage",
    region: "north",
    tags: ["heritage", "offbeat"],
    readTime: "11 min",
    highlight: "Nek Chand's Rock Garden",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "delhi-travel-guide",
    title: "Delhi",
    state: "Delhi",
    tagline: "Capital of layered empires",
    description:
      "Mughal forts, Sultanate-era minarets, colonial avenues, and one of the world's great street food scenes.",
    image: "/images/destinations/jaisalmer/fort.jpg",
    category: "Heritage",
    region: "north",
    tags: ["heritage"],
    readTime: "16 min",
    highlight: "Sunrise at the Red Fort",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "west-bengal-travel-guide",
    title: "West Bengal",
    state: "West Bengal",
    tagline: "Kolkata to Darjeeling",
    description:
      "Colonial-era Kolkata, tea gardens climbing into the clouds at Darjeeling, and mangrove creeks where the Royal Bengal Tiger still roams.",
    image: "/images/destinations/meghalaya/hero.jpg",
    category: "Nature",
    region: "east",
    tags: ["heritage", "offbeat"],
    readTime: "18 min",
    highlight: "Toy Train to Darjeeling",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "uttarakhand-travel-guide",
    title: "Uttarakhand",
    state: "Uttarakhand",
    tagline: "Dev Bhoomi, Land of the Gods",
    description:
      "Sacred temples above 3,000 metres, the Ganga's first rush out of the mountains, and lake towns wrapped in pine forest.",
    image: "/images/destinations/rishikesh/rishikesh.jpg",
    category: "Spiritual",
    region: "north",
    tags: ["mountains", "spiritual"],
    readTime: "19 min",
    highlight: "Char Dham Yatra",
    bestTime: "Mar – Jun, Sep – Nov",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "uttar-pradesh-travel-guide",
    title: "Uttar Pradesh",
    state: "Uttar Pradesh",
    tagline: "Taj Mahal to Varanasi",
    description:
      "The world's most famous monument to love, the ghats of Varanasi, and Lucknow's Nawabi elegance.",
    image: "/images/destinations/udaipur/hero.jpg",
    category: "Heritage",
    region: "north",
    tags: ["heritage", "spiritual"],
    readTime: "17 min",
    highlight: "Sunrise at the Taj Mahal",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "tripura-travel-guide",
    title: "Tripura",
    state: "Tripura",
    tagline: "India's overlooked princely state",
    description:
      "A palace rising from the middle of a lake, giant rock-cut carvings hidden in the forest, and a royal capital barely anyone's heard of.",
    image: "/images/destinations/ziro/hero.jpg",
    category: "Off-beat",
    region: "northeast",
    tags: ["offbeat", "heritage"],
    readTime: "12 min",
    highlight: "Neermahal lake palace",
    bestTime: "Nov – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "tamil-nadu-travel-guide",
    title: "Tamil Nadu",
    state: "Tamil Nadu",
    tagline: "The Dravidian temple trail",
    description:
      "Temple towers carved with thousands of painted deities, UNESCO shore temples on the Bay of Bengal, and tea gardens in the Nilgiri hills.",
    image: "/images/destinations/hampi/virupaksha.jpg",
    category: "Spiritual",
    region: "south",
    tags: ["heritage", "spiritual"],
    readTime: "18 min",
    highlight: "Meenakshi Amman Temple, Madurai",
    bestTime: "Nov – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "sikkim-travel-guide",
    title: "Sikkim",
    state: "Sikkim",
    tagline: "Alpine lakes and Kanchenjunga views",
    description:
      "Alpine lakes above 12,000 feet, a valley that turns into a carpet of rhododendrons every spring, and unobstructed views of Kanchenjunga.",
    image: "/images/destinations/manali/hero.jpg",
    category: "Mountains",
    region: "northeast",
    tags: ["mountains", "offbeat"],
    readTime: "16 min",
    highlight: "Yumthang Valley in bloom",
    bestTime: "Mar – Jun, Oct – Dec",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "rajasthan-travel-guide",
    title: "Rajasthan",
    state: "Rajasthan",
    tagline: "Pink, blue and gold cities",
    description:
      "Pink-walled bazaars, a fort city painted entirely blue, and royal palaces still standing where maharajas built them centuries ago.",
    image: "/images/destinations/jaisalmer/hero.jpg",
    category: "Heritage",
    region: "west",
    tags: ["heritage"],
    readTime: "19 min",
    highlight: "Mehrangarh Fort, Jodhpur",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "punjab-travel-guide",
    title: "Punjab",
    state: "Punjab",
    tagline: "Golden Temple & Wagah Border",
    description:
      "A temple that shimmers gold over a sacred pool, a nightly border ceremony full of pageantry, and food that shaped how the rest of India eats.",
    image: "/images/destinations/udaipur/hero.jpg",
    category: "Spiritual",
    region: "north",
    tags: ["spiritual", "heritage"],
    readTime: "14 min",
    highlight: "Golden Temple at dawn",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "odisha-travel-guide",
    title: "Odisha",
    state: "Odisha",
    tagline: "Konark, Puri and Chilika Lake",
    description:
      "A stone temple carved as a giant chariot, one of Hinduism's holiest shrines, and a lagoon where Irrawaddy dolphins surface between fishing boats.",
    image: "/images/destinations/hampi/hero.jpg",
    category: "Heritage",
    region: "east",
    tags: ["heritage", "nature"],
    readTime: "15 min",
    highlight: "Konark Sun Temple carvings",
    bestTime: "Oct – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "madhya-pradesh-travel-guide",
    title: "Madhya Pradesh",
    state: "Madhya Pradesh",
    tagline: "The heart of India",
    description:
      "Temples carved with astonishing detail, some of India's best tiger sightings, and a hilltop fortress that guarded the heart of the country.",
    image: "/images/destinations/hampi/hero.jpg",
    category: "Heritage",
    region: "central",
    tags: ["heritage", "wildlife"],
    readTime: "17 min",
    highlight: "Khajuraho's carved temples",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "maharashtra-travel-guide",
    title: "Maharashtra",
    state: "Maharashtra",
    tagline: "Mumbai to Ajanta-Ellora",
    description:
      "A city that never sleeps, 2,000-year-old rock-cut cave temples, and a coastline dotted with sea forts and fishing villages.",
    image: "/images/destinations/hampi/hero.jpg",
    category: "Heritage",
    region: "west",
    tags: ["heritage", "beaches"],
    readTime: "17 min",
    highlight: "Kailasa Temple, Ellora",
    bestTime: "Oct – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "gujarat-travel-guide",
    title: "Gujarat",
    state: "Gujarat",
    tagline: "White desert, wild lions",
    description:
      "A shimmering white salt desert stretching to the horizon, temple towns steeped in mythology, and the last wild lions outside Africa.",
    image: "/images/destinations/jaisalmer/hero.jpg",
    category: "Heritage",
    region: "west",
    tags: ["heritage", "offbeat"],
    readTime: "16 min",
    highlight: "Rann Utsav under a full moon",
    bestTime: "Nov – Feb",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "haryana-travel-guide",
    title: "Haryana",
    state: "Haryana",
    tagline: "Delhi's easiest weekend escape",
    description:
      "The ground where the Bhagavad Gita is said to have been spoken, one of the world's largest craft fairs, and the easiest weekend escape from Delhi-NCR.",
    image: "/images/destinations/chandigarh/hero.jpg",
    category: "Heritage",
    region: "north",
    tags: ["heritage"],
    readTime: "11 min",
    highlight: "Jyotisar, Kurukshetra",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "himachal-pradesh-travel-guide",
    title: "Himachal Pradesh",
    state: "Himachal Pradesh",
    tagline: "Shimla to Dharamshala",
    description:
      "From colonial Shimla's toy train to the Tibetan Buddhist calm of McLeod Ganj and the apple orchards of Kullu — a full state, one guide.",
    image: "/images/destinations/manali/hero.jpg",
    category: "Mountains",
    region: "north",
    tags: ["mountains"],
    readTime: "20 min",
    highlight: "Kalka–Shimla toy train",
    bestTime: "Mar – Jun, Sep – Nov",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "jharkhand-travel-guide",
    title: "Jharkhand",
    state: "Jharkhand",
    tagline: "The city of waterfalls",
    description:
      "Dense sal forests, waterfalls that thunder off laterite cliffs, and tiger territory at Betla — one of India's most underrated states.",
    image: "/images/destinations/ziro/hero.jpg",
    category: "Off-beat",
    region: "east",
    tags: ["offbeat", "nature"],
    readTime: "13 min",
    highlight: "Hundru Falls, Ranchi",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "karnataka-travel-guide",
    title: "Karnataka",
    state: "Karnataka",
    tagline: "Bangalore to Hampi",
    description:
      "From Bangalore's tech-city energy to Mysore's royal palaces, the ancient ruins of Hampi, and coffee hills beyond.",
    image: "/images/destinations/hampi/hero.jpg",
    category: "Heritage",
    region: "south",
    tags: ["heritage"],
    readTime: "19 min",
    highlight: "Mysore Palace illuminated",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "andhra-pradesh-travel-guide",
    title: "Andhra Pradesh",
    state: "Andhra Pradesh",
    tagline: "Temples, coast and coffee hills",
    description:
      "From the world's richest temple at Tirumala to Vizag's underrated coastline and the coffee-scented hills of Araku Valley.",
    image: "/images/destinations/hampi/hero.jpg",
    category: "Spiritual",
    region: "south",
    tags: ["spiritual", "beaches"],
    readTime: "17 min",
    highlight: "Tirumala's dawn queue",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "arunachal-pradesh-travel-guide",
    title: "Arunachal Pradesh",
    state: "Arunachal Pradesh",
    tagline: "Tawang and beyond Ziro",
    description:
      "From Tawang's Himalayan monasteries to Ziro's terraced tribal valleys — India's largest and least-visited Northeastern state.",
    image: "/images/destinations/ziro/hero.jpg",
    category: "Off-beat",
    region: "northeast",
    tags: ["offbeat", "mountains"],
    readTime: "19 min",
    highlight: "Tawang Monastery at sunrise",
    bestTime: "Oct – Apr",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "assam-travel-guide",
    title: "Assam",
    state: "Assam",
    tagline: "Rhinos and river islands",
    description:
      "Rhino safaris in Kaziranga, a hilltop Shakti Peeth temple above the Brahmaputra, and the world's largest river island.",
    image: "/images/destinations/meghalaya/dawki-river.jpg",
    category: "Nature",
    region: "northeast",
    tags: ["wildlife", "nature"],
    readTime: "16 min",
    highlight: "Jeep safari, Kaziranga",
    bestTime: "Nov – Apr",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "bihar-travel-guide",
    title: "Bihar",
    state: "Bihar",
    tagline: "Where Buddhism began",
    description:
      "The place where Buddha attained enlightenment, the ruins of one of the world's oldest universities, and the ancient heartland of the Magadha empire.",
    image: "/images/destinations/hampi/hero.jpg",
    category: "Spiritual",
    region: "east",
    tags: ["spiritual", "heritage"],
    readTime: "15 min",
    highlight: "Mahabodhi Temple, Bodh Gaya",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "chhattisgarh-travel-guide",
    title: "Chhattisgarh",
    state: "Chhattisgarh",
    tagline: "Central India's overlooked forest state",
    description:
      "A horseshoe waterfall wider than Niagara, a tribal heartland with a 75-day festival tradition, and near-empty forest trails.",
    image: "/images/destinations/meghalaya/dawki-river.jpg",
    category: "Off-beat",
    region: "central",
    tags: ["offbeat", "nature"],
    readTime: "13 min",
    highlight: "Chitrakote Falls in monsoon",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "manipur-travel-guide",
    title: "Manipur",
    state: "Manipur",
    tagline: "Floating islands on Loktak Lake",
    description:
      "Floating islands drifting across a shimmering lake, the world's only floating national park, and a market run entirely by women for centuries.",
    image: "/images/destinations/meghalaya/dawki-river.jpg",
    category: "Off-beat",
    region: "northeast",
    tags: ["offbeat", "nature"],
    readTime: "14 min",
    highlight: "Boat ride through Loktak's phumdis",
    bestTime: "Nov – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "mizoram-travel-guide",
    title: "Mizoram",
    state: "Mizoram",
    tagline: "India's cleanest hillside capital",
    description:
      "A hillside capital with no traffic jams, a waterfall dropping through pine-covered gorges, and one of India's cleanest, most literate states.",
    image: "/images/destinations/meghalaya/dawki-river.jpg",
    category: "Off-beat",
    region: "northeast",
    tags: ["offbeat", "mountains"],
    readTime: "13 min",
    highlight: "Reiek viewpoint at dawn",
    bestTime: "Oct – Apr",
    featured: false,
    large: false,
    comingSoon: false,
  },
  {
    slug: "nagaland-travel-guide",
    title: "Nagaland",
    state: "Nagaland",
    tagline: "Sixteen tribes, one festival",
    description:
      "A festival where sixteen tribes gather in their warrior best, a war cemetery from a WWII turning point, and a valley called the Switzerland of the East.",
    image: "/images/destinations/meghalaya/hero.jpg",
    category: "Off-beat",
    region: "northeast",
    tags: ["offbeat", "heritage"],
    readTime: "15 min",
    highlight: "Hornbill Festival, Kisama",
    bestTime: "Oct – Mar",
    featured: false,
    large: false,
    comingSoon: false,
  },
];

const categoryColors: Record<string, string> = {
  Mountains: "bg-sky-100 text-sky-700",
  "Road Trip": "bg-stone-100 text-stone-700",
  "Off-beat": "bg-purple-100 text-purple-700",
  Adventure: "bg-amber-100 text-amber-700",
  Nature: "bg-forest-100 text-forest-700",
  Trekking: "bg-green-100 text-green-700",
  Beaches: "bg-blue-100 text-blue-700",
  Heritage: "bg-rose-100 text-rose-700",
  Spiritual: "bg-orange-100 text-orange-700",
};

const stats = [
  { value: "36", label: "States covered" },
  { value: "46", label: "Destinations" },
  { value: "46", label: "Guides published" },
  { value: "7", label: "Regions" },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DestinationsPage() {
  return (
    <>
      <DestinationsSchema
        destinations={allDestinations.filter((d) => !d.comingSoon)}
      />
      <SiteHeader />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/hero.jpg"
              alt="Destinations"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-800/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-forest-400" />
                <span
                  className="text-forest-300 text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Explore
                </span>
              </div>
              <h1
                className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Every destination.
                <br />
                <span className="text-forest-300">One trusted guide.</span>
              </h1>
              <p
                className="text-white/70 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-source-serif)" }}
              >
                From Himalayan passes to tropical backwaters — hand-crafted
                travel guides written by people who've actually been there.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ─────────────────────────────────────────────────── */}
        <section className="bg-stone-950 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-800">
              {stats.map((stat) => (
                <div key={stat.label} className="py-7 px-6 text-center">
                  <div
                    className="text-3xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-stone-500 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Bento Grid ───────────────────────────────────────── */}
        <section className="bg-stone-50 py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-forest-500" />
                  <span
                    className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Editor's picks
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-stone-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Featured Destinations
                </h2>
              </div>
            </div>

            {/* Bento layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Large hero card */}
              <Link
                href={`/blog/${featured[0].slug}`}
                className="group lg:row-span-2 relative flex flex-col justify-end overflow-hidden rounded-3xl min-h-[400px] lg:min-h-[520px] shadow-md hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={featured[0].image}
                  alt={featured[0].title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${categoryColors[featured[0].category] ?? "bg-white/20 text-white"}`}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {featured[0].category}
                  </span>
                </div>
                <div className="relative z-10 p-7">
                  <p
                    className="text-white/55 text-xs font-medium mb-1"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {featured[0].state}
                  </p>
                  <h3
                    className="text-3xl font-bold text-white mb-2 group-hover:text-forest-200 transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {featured[0].title}
                  </h3>
                  <p
                    className="text-white/65 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {featured[0].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <div className="text-white/40 text-[10px] uppercase tracking-widest">
                        Best time
                      </div>
                      <div className="text-white/80 text-xs font-medium">
                        {featured[0].bestTime}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-forest-500 group-hover:border-forest-500 transition-all">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Smaller cards */}
              {featured.slice(1).map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/blog/${dest.slug}`}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-3xl min-h-[240px] shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${categoryColors[dest.category] ?? "bg-white/20 text-white"}`}
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {dest.category}
                    </span>
                  </div>
                  <div className="relative z-10 p-5">
                    <p
                      className="text-white/50 text-xs mb-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {dest.state}
                    </p>
                    <h3
                      className="text-xl font-bold text-white group-hover:text-forest-200 transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {dest.title}
                    </h3>
                    <p
                      className="text-white/55 text-xs mt-1 line-clamp-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {dest.tagline}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span
                        className="text-white/40 text-[10px] uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        Best: {dest.bestTime}
                      </span>
                      <svg
                        className="w-4 h-4 text-white/40 group-hover:text-forest-300 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── All Destinations Grid ─────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-forest-500" />
                  <span
                    className="text-forest-600 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Complete list
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-stone-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  All Destinations
                </h2>
              </div>
              <span
                className="text-stone-400 text-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {allDestinations.length} destinations
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allDestinations.map((dest) => {
                const cardContent = (
                  <>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-stone-100">
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`object-cover transition-transform duration-500 ${dest.comingSoon ? "" : "group-hover:scale-105"}`}
                      />
                      {!dest.comingSoon && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                      <span
                        className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${categoryColors[dest.category] ?? "bg-white/90 text-stone-700"}`}
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {dest.category}
                      </span>
                      {dest.comingSoon ? (
                        <span
                          className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-stone-800 text-white"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Coming Soon
                        </span>
                      ) : (
                        dest.featured && (
                          <span
                            className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-forest-500 text-white"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            Featured
                          </span>
                        )
                      )}
                    </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3
                          className="font-bold text-stone-900 group-hover:text-forest-700 transition-colors"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {dest.title}
                        </h3>
                        <p
                          className="text-forest-600 text-xs font-medium"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {dest.state}
                        </p>
                      </div>
                    </div>

                    <p
                      className="text-stone-500 text-sm line-clamp-2 leading-relaxed flex-1 mb-4"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {dest.description}
                    </p>

                    <div className="border-t border-stone-100 pt-3 mt-auto">
                      <div
                        className="flex items-center justify-between"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <div className="flex items-center gap-3 text-xs text-stone-400">
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {dest.bestTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {dest.readTime}
                          </span>
                        </div>
                        {dest.comingSoon ? (
                          <span className="text-xs font-semibold text-stone-400">
                            Guide coming soon
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-forest-600 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                            Read
                            <svg
                              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  </>
                );

                return dest.comingSoon ? (
                  <div
                    key={dest.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-stone-200 opacity-70 flex flex-col cursor-default"
                  >
                    {cardContent}
                  </div>
                ) : (
                  <Link
                    key={dest.slug}
                    href={`/blog/${dest.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-forest-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>

            {/* Load more */}
            {/* <div className="text-center mt-14">
              <p
                className="text-stone-400 text-sm mb-5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Showing {allDestinations.length} of 120+ destinations
              </p>
              <button
                className="px-8 py-3.5 border-2 border-stone-200 text-stone-600 font-semibold rounded-full hover:border-forest-400 hover:text-forest-700 hover:bg-forest-50 transition-all text-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Load More Destinations
              </button>
            </div> */}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="bg-stone-950 py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Can't find your destination?
            </h2>
            <p
              className="text-stone-400 text-sm mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              We're adding new guides every week. Join the newsletter to get
              notified when we publish your next destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="px-7 py-3.5 gradient-forest text-white font-semibold rounded-full text-sm hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Get New Guides First →
              </Link>
              <Link
                href="/write-for-us"
                className="px-7 py-3.5 border border-stone-700 text-stone-400 hover:text-white hover:border-stone-500 font-semibold rounded-full text-sm transition-all"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Write for Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
