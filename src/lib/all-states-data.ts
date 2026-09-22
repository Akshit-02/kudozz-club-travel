// Data for the full /packages/[slug] state package pages. Everything here is
// derived from real, already-published site content:
// - `blogSlug` + `image` come from the matching hub post in blog-posts.ts
// - `children` come from src/lib/state-hub-children.json, which was extracted
//   directly from each hub page's own "Places to Explore" section (built in
//   the internal-linking session) — no invented cities or routes.
// See docs/human-input-required.md and docs/new-information-architecture.md
// §6 for why only Rajasthan gets curated multi-city "routes" (src/lib/rajasthan-routes.ts)
// while the other 35 states show their real destination list instead.
import stateHubChildren from "./state-hub-children.json";

export interface StateChild {
  slug: string;
  title: string;
}

export interface StatePackage {
  slug: string; // used in /packages/<slug>
  name: string;
  region: string;
  blogSlug: string;
  image: string;
  children: StateChild[];
}

export const allStatePackages: StatePackage[] = [
  {
    slug: "rajasthan",
    name: "Rajasthan",
    region: "North India",
    blogSlug: "rajasthan-travel-guide",
    image: "/images/blogs/rajasthan/rajasthan/hawa-mahal-facade-jaipur.webp",
    children: stateHubChildren["rajasthan-travel-guide"],
  },
  {
    slug: "kerala",
    name: "Kerala",
    region: "South India",
    blogSlug: "kerala-backwaters-travel-guide",
    image: "/images/destinations/kerala/hero.jpg",
    children: stateHubChildren["kerala-backwaters-travel-guide"],
  },
  {
    slug: "goa",
    name: "Goa",
    region: "West India",
    blogSlug: "goa-beaches-travel-guide",
    image: "/images/destinations/goa/hero.jpg",
    children: stateHubChildren["goa-beaches-travel-guide"],
  },
  {
    slug: "kashmir",
    name: "Jammu & Kashmir",
    region: "North India",
    blogSlug: "jammu-kashmir-travel-guide",
    image: "/images/destinations/jammu-kashmir/hero.jpg",
    children: stateHubChildren["jammu-kashmir-travel-guide"],
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "North India",
    blogSlug: "himachal-pradesh-travel-guide",
    image: "/images/destinations/manali/hero.jpg",
    children: stateHubChildren["himachal-pradesh-travel-guide"],
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    region: "North India",
    blogSlug: "uttarakhand-travel-guide",
    image: "/images/destinations/rishikesh/rishikesh.jpg",
    children: stateHubChildren["uttarakhand-travel-guide"],
  },
  {
    slug: "leh-ladakh",
    name: "Ladakh",
    region: "North India",
    blogSlug: "leh-ladakh-road-trip-travel-guide",
    image: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
    children: stateHubChildren["leh-ladakh-road-trip-travel-guide"],
  },
  {
    slug: "meghalaya",
    name: "Meghalaya",
    region: "Northeast India",
    blogSlug: "meghalaya-travel-guide",
    image: "/images/destinations/meghalaya/hero.jpg",
    children: stateHubChildren["meghalaya-travel-guide"],
  },
  {
    slug: "andaman-nicobar",
    name: "Andaman & Nicobar Islands",
    region: "South India",
    blogSlug: "andaman-islands-travel-guide",
    image: "/images/destinations/andaman/hero.jpg",
    children: stateHubChildren["andaman-islands-travel-guide"],
  },
  {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    region: "South India",
    blogSlug: "andhra-pradesh-travel-guide",
    image:
      "/images/blogs/andhra-pradesh/andhra-pradesh/sunrise-tenneti-beach-visakhapatnam-andhra-pradesh.webp",
    children: stateHubChildren["andhra-pradesh-travel-guide"],
  },
  {
    slug: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    region: "Northeast India",
    blogSlug: "arunachal-pradesh-travel-guide",
    image:
      "/images/blogs/arunachal-pradesh/arunachal-pradesh/tawang-monastery-arunachal-pradesh.webp",
    children: stateHubChildren["arunachal-pradesh-travel-guide"],
  },
  {
    slug: "assam",
    name: "Assam",
    region: "Northeast India",
    blogSlug: "assam-travel-guide",
    image:
      "/images/blogs/assam/assam/one-horned-rhinoceros-kaziranga-assam.webp",
    children: stateHubChildren["assam-travel-guide"],
  },
  {
    slug: "bihar",
    name: "Bihar",
    region: "East India",
    blogSlug: "bihar-travel-guide",
    image: "/images/blogs/bihar/bihar/mahabodhi-temple-bodh-gaya-bihar.webp",
    children: stateHubChildren["bihar-travel-guide"],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    region: "North India",
    blogSlug: "chandigarh-travel-guide",
    image:
      "/images/blogs/chandigarh/chandigarh/rock-garden-mosaic-sculptures-chandigarh.webp",
    children: stateHubChildren["chandigarh-travel-guide"],
  },
  {
    slug: "chhattisgarh",
    name: "Chhattisgarh",
    region: "Central India",
    blogSlug: "chhattisgarh-travel-guide",
    image:
      "/images/blogs/chhattisgarh/chhattisgarh/chitrakote-falls-chhattisgarh.webp",
    children: stateHubChildren["chhattisgarh-travel-guide"],
  },
  {
    slug: "dadra-nagar-haveli-daman-diu",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    region: "West India",
    blogSlug: "dadra-nagar-haveli-daman-diu-travel-guide",
    image:
      "/images/blogs/dadra-and-nagar-haveli-and-daman-and-diu/diu/diu-fort-gateway.webp",
    children: stateHubChildren["dadra-nagar-haveli-daman-diu-travel-guide"],
  },
  {
    slug: "delhi",
    name: "Delhi",
    region: "North India",
    blogSlug: "delhi-travel-guide",
    image: "/images/blogs/delhi/delhi/red-fort-lahori-gate-delhi.webp",
    children: stateHubChildren["delhi-travel-guide"],
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    region: "West India",
    blogSlug: "gujarat-travel-guide",
    image:
      "/images/blogs/gujarat/gujarat/rann-of-kutch-white-desert-gujarat.webp",
    children: stateHubChildren["gujarat-travel-guide"],
  },
  {
    slug: "haryana",
    name: "Haryana",
    region: "North India",
    blogSlug: "haryana-travel-guide",
    image:
      "/images/blogs/haryana/haryana/krishna-arjun-chariot-statue-kurukshetra-haryana.webp",
    children: stateHubChildren["haryana-travel-guide"],
  },
  {
    slug: "jharkhand",
    name: "Jharkhand",
    region: "East India",
    blogSlug: "jharkhand-travel-guide",
    image:
      "/images/blogs/jharkhand/jharkhand/hundru-falls-ranchi-jharkhand.webp",
    children: stateHubChildren["jharkhand-travel-guide"],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    region: "South India",
    blogSlug: "karnataka-travel-guide",
    image: "/images/destinations/hampi/hero.jpg",
    children: stateHubChildren["karnataka-travel-guide"],
  },
  {
    slug: "lakshadweep",
    name: "Lakshadweep",
    region: "South India",
    blogSlug: "lakshadweep-island-travel-guide",
    image: "/images/destinations/lakshadweep/hero.jpg",
    children: stateHubChildren["lakshadweep-island-travel-guide"],
  },
  {
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    region: "Central India",
    blogSlug: "madhya-pradesh-travel-guide",
    image:
      "/images/blogs/madhya-pradesh/madhya-pradesh/khajuraho-devi-jagadambi-temple-madhya-pradesh.webp",
    children: stateHubChildren["madhya-pradesh-travel-guide"],
  },
  {
    slug: "maharashtra",
    name: "Maharashtra",
    region: "West India",
    blogSlug: "maharashtra-travel-guide",
    image:
      "/images/blogs/maharashtra/maharashtra/ajanta-caves-rock-cut-facade-maharashtra.webp",
    children: stateHubChildren["maharashtra-travel-guide"],
  },
  {
    slug: "manipur",
    name: "Manipur",
    region: "Northeast India",
    blogSlug: "manipur-travel-guide",
    image:
      "/images/blogs/manipur/manipur/loktak-lake-floating-islands-manipur.webp",
    children: stateHubChildren["manipur-travel-guide"],
  },
  {
    slug: "mizoram",
    name: "Mizoram",
    region: "Northeast India",
    blogSlug: "mizoram-travel-guide",
    image: "/images/blogs/mizoram/mizoram/vantawng-falls-mizoram.webp",
    children: stateHubChildren["mizoram-travel-guide"],
  },
  {
    slug: "nagaland",
    name: "Nagaland",
    region: "Northeast India",
    blogSlug: "nagaland-travel-guide",
    image: "/images/blogs/nagaland/nagaland/dzukou-valley-nagaland.webp",
    children: stateHubChildren["nagaland-travel-guide"],
  },
  {
    slug: "odisha",
    name: "Odisha",
    region: "East India",
    blogSlug: "odisha-travel-guide",
    image: "/images/blogs/odisha/odisha/konark-sun-temple-wheel-odisha.webp",
    children: stateHubChildren["odisha-travel-guide"],
  },
  {
    slug: "puducherry",
    name: "Puducherry",
    region: "South India",
    blogSlug: "puducherry-district-travel-guide",
    image: "/images/destinations/puducherry/hero.jpg",
    children: stateHubChildren["puducherry-district-travel-guide"],
  },
  {
    slug: "punjab",
    name: "Punjab",
    region: "North India",
    blogSlug: "punjab-travel-guide",
    image: "/images/blogs/punjab/punjab/golden-temple-amritsar-punjab.webp",
    children: stateHubChildren["punjab-travel-guide"],
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    region: "Northeast India",
    blogSlug: "sikkim-travel-guide",
    image: "/images/blogs/sikkim/sikkim/rumtek-monastery-gangtok-sikkim.webp",
    children: stateHubChildren["sikkim-travel-guide"],
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    region: "South India",
    blogSlug: "tamil-nadu-travel-guide",
    image:
      "/images/blogs/tamil-nadu/tamil-nadu/meenakshi-temple-gopuram-madurai.webp",
    children: stateHubChildren["tamil-nadu-travel-guide"],
  },
  {
    slug: "telangana",
    name: "Telangana",
    region: "South India",
    blogSlug: "telangana-travel-guide",
    image:
      "/images/blogs/telangana/telangana/charminar-low-angle-hyderabad-telangana.webp",
    children: stateHubChildren["telangana-travel-guide"],
  },
  {
    slug: "tripura",
    name: "Tripura",
    region: "Northeast India",
    blogSlug: "tripura-travel-guide",
    image: "/images/blogs/tripura/tripura/neermahal-lake-palace-tripura.webp",
    children: stateHubChildren["tripura-travel-guide"],
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "North India",
    blogSlug: "uttar-pradesh-travel-guide",
    image:
      "/images/blogs/uttar-pradesh/uttar-pradesh/taj-mahal-agra-uttar-pradesh.webp",
    children: stateHubChildren["uttar-pradesh-travel-guide"],
  },
  {
    slug: "west-bengal",
    name: "West Bengal",
    region: "East India",
    blogSlug: "west-bengal-travel-guide",
    image:
      "/images/blogs/west-bengal/west-bengal/victoria-memorial-kolkata-west-bengal.webp",
    children: stateHubChildren["west-bengal-travel-guide"],
  },
];

export function getStatePackage(slug: string) {
  return allStatePackages.find((s) => s.slug === slug);
}
