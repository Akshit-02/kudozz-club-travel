// Multi-state "combo" package pages served from /packages/<slug>.
// These are established, named Indian travel circuits whose component places
// already have published guides. See docs/content-gap-analysis.md §2.
import type { SuggestedRoute } from "./destination-profiles";

export interface ComboPackage {
  slug: string;
  name: string; // H1 is `${name} Tour Packages`
  shortName: string;
  region: string;
  intro: string;
  image: string;
  imageAlt: string;
  knownFor: string;
  idealDays: string;
  bestTime: string;
  howToReach: string;
  routes: SuggestedRoute[];
  relatedStates: string[]; // package slugs
  guideSlugs: string[]; // blog slugs, "places covered"
}

export const comboPackages: ComboPackage[] = [
  {
    slug: "golden-triangle",
    name: "Golden Triangle",
    shortName: "Golden Triangle",
    region: "North India",
    intro:
      "Delhi, Agra and Jaipur in one trip: Mughal monuments, the Taj Mahal and Rajasthan's Pink City, planned around your dates and pace.",
    image: "/images/blogs/rajasthan/rajasthan/hawa-mahal-facade-jaipur.webp",
    imageAlt: "Pink sandstone facade of Hawa Mahal in Jaipur",
    knownFor:
      "The Golden Triangle is the circuit linking Delhi, Agra and Jaipur, three cities a few hours apart by road. It covers the Red Fort and Qutub Minar in Delhi, the Taj Mahal and Agra Fort, and Amber Fort and Hawa Mahal in Jaipur.",
    idealDays:
      "Five to six days is comfortable: two in Delhi, one or two in Agra (with Fatehpur Sikri on the way to Jaipur), and two in Jaipur. It extends naturally into Udaipur, Jodhpur or Ranthambore.",
    bestTime:
      "October to March, when North India is cool and dry. April to June is very hot for sightseeing.",
    howToReach:
      "Most trips start in Delhi, which has India's busiest international airport. Agra is about 3–4 hours from Delhi by expressway or fast train, and Jaipur about 4–5 hours from Agra.",
    routes: [
      {
        name: "Classic Golden Triangle",
        days: "5–6 days",
        desc: "Delhi, the Taj at sunrise, Fatehpur Sikri on the drive, then Jaipur.",
        stops: [
          { label: "Delhi", slug: "delhi-travel-guide" },
          { label: "Agra", slug: "agra-travel-guide" },
          { label: "Fatehpur Sikri", slug: "fatehpur-sikri-travel-guide" },
          { label: "Jaipur", slug: "jaipur-travel-guide" },
        ],
      },
      {
        name: "Golden Triangle with Ranthambore",
        days: "7–8 days",
        desc: "Adds two nights and tiger safaris at Ranthambore between Agra and Jaipur.",
        stops: [
          { label: "Delhi", slug: "delhi-travel-guide" },
          { label: "Agra", slug: "agra-travel-guide" },
          { label: "Ranthambore", slug: "ranthambore-travel-guide" },
          { label: "Jaipur", slug: "jaipur-travel-guide" },
        ],
      },
      {
        name: "Golden Triangle with Udaipur",
        days: "8–9 days",
        desc: "Continues from Jaipur to Udaipur's lakes for a slower finish.",
        stops: [
          { label: "Delhi", slug: "delhi-travel-guide" },
          { label: "Agra", slug: "agra-travel-guide" },
          { label: "Jaipur", slug: "jaipur-travel-guide" },
          { label: "Udaipur", slug: "udaipur-city-of-lakes-travel-guide" },
        ],
      },
    ],
    relatedStates: ["delhi", "uttar-pradesh", "rajasthan"],
    guideSlugs: [
      "delhi-travel-guide",
      "old-delhi-travel-guide",
      "agra-travel-guide",
      "fatehpur-sikri-travel-guide",
      "jaipur-travel-guide",
      "abhaneri-travel-guide",
      "ranthambore-travel-guide",
      "mathura-travel-guide",
      "vrindavan-travel-guide",
    ],
  },
  {
    slug: "char-dham-yatra",
    name: "Char Dham Yatra",
    shortName: "Char Dham",
    region: "North India",
    intro:
      "Yamunotri, Gangotri, Kedarnath and Badrinath, planned with realistic driving days, buffer days for weather and the pace older pilgrims need.",
    image: "/images/blogs/uttarakhand/kedarnath/kedarnath-temple-hillside-mountain-view.webp",
    imageAlt: "Kedarnath temple below snow-covered Himalayan peaks, Uttarakhand",
    knownFor:
      "The Char Dham Yatra is the Hindu pilgrimage to four Himalayan shrines in Uttarakhand's Garhwal region: Yamunotri, Gangotri, Kedarnath and Badrinath. It is traditionally done west to east, in that order.",
    idealDays:
      "Ten to twelve days by road from Haridwar or Rishikesh, including buffer days. Kedarnath and Yamunotri involve treks (or ponies, palkis and, for Kedarnath, helicopters).",
    bestTime:
      "The shrines open around late April or May and close around October–November. May–June and September–October are the usual windows. Avoid July–August, when monsoon landslides close roads.",
    howToReach:
      "The yatra starts from Haridwar or Rishikesh, 5–6 hours from Delhi by road. Dehradun's Jolly Grant Airport is the nearest airport. Registration with the Uttarakhand government is mandatory.",
    routes: [
      {
        name: "Char Dham by Road",
        days: "10–12 days",
        desc: "Haridwar to Yamunotri, Gangotri, Kedarnath and Badrinath, with rest days built in.",
        stops: [
          { label: "Haridwar", slug: "haridwar-travel-guide" },
          { label: "Yamunotri", slug: "yamunotri-travel-guide" },
          { label: "Gangotri", slug: "gangotri-travel-guide" },
          { label: "Kedarnath", slug: "kedarnath-travel-guide" },
          { label: "Badrinath", slug: "badrinath-travel-guide" },
        ],
      },
      {
        name: "Do Dham: Kedarnath & Badrinath",
        days: "6–7 days",
        desc: "The two most visited shrines, for travellers short on time.",
        stops: [
          { label: "Rishikesh", slug: "rishikesh-adventure-travel-guide" },
          { label: "Kedarnath", slug: "kedarnath-travel-guide" },
          { label: "Badrinath", slug: "badrinath-travel-guide" },
        ],
      },
    ],
    relatedStates: ["uttarakhand"],
    guideSlugs: [
      "yamunotri-travel-guide",
      "gangotri-travel-guide",
      "kedarnath-travel-guide",
      "badrinath-travel-guide",
      "haridwar-travel-guide",
      "rishikesh-adventure-travel-guide",
      "chopta-travel-guide",
      "auli-travel-guide",
    ],
  },
  {
    slug: "northeast-india",
    name: "Northeast India",
    shortName: "Northeast India",
    region: "Northeast India",
    intro:
      "Meghalaya's root bridges, Assam's rhinos, Sikkim's mountains and Arunachal's monasteries. The Northeast rewards careful planning, and that is what we do.",
    image: "/images/blogs/meghalaya/meghalaya/nohkalikai-falls-cherrapunji.webp",
    imageAlt: "Nohkalikai Falls plunging into a green gorge near Cherrapunji, Meghalaya",
    knownFor:
      "Northeast India covers the seven states of Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram and Tripura, plus Sikkim. Highlights include Kaziranga's one-horned rhinos, Meghalaya's living root bridges, Tawang Monastery, Nagaland's Hornbill Festival and Sikkim's Kanchenjunga views.",
    idealDays:
      "Six days suits one state, such as Meghalaya or Sikkim. Nine to twelve days lets you combine two, for example Assam with Meghalaya, or Assam with Arunachal.",
    bestTime:
      "October to April for most of the region. Kaziranga's safari season is roughly November to April, and the Hornbill Festival runs 1–10 December.",
    howToReach:
      "Guwahati is the main hub by air and rail. Bagdogra serves Sikkim, and Imphal, Dimapur, Agartala and Aizawl have their own airports.",
    routes: [
      {
        name: "Guwahati, Kaziranga & Meghalaya",
        days: "7–8 days",
        desc: "Rhinos at Kaziranga, then Shillong, Cherrapunji and Dawki.",
        stops: [
          { label: "Guwahati", slug: "guwahati-travel-guide" },
          { label: "Kaziranga", slug: "kaziranga-travel-guide" },
          { label: "Shillong", slug: "shillong-travel-guide" },
          { label: "Cherrapunji", slug: "cherrapunji-travel-guide" },
        ],
      },
      {
        name: "Western Arunachal to Tawang",
        days: "7–8 days",
        desc: "From Assam up through Bomdila and Dirang, over Sela Pass, to Tawang.",
        stops: [
          { label: "Tezpur", slug: "tezpur-travel-guide" },
          { label: "Bomdila", slug: "bomdila-travel-guide" },
          { label: "Dirang", slug: "dirang-travel-guide" },
          { label: "Tawang", slug: "tawang-travel-guide" },
        ],
      },
    ],
    relatedStates: [
      "meghalaya",
      "assam",
      "sikkim",
      "arunachal-pradesh",
      "nagaland",
      "manipur",
      "mizoram",
      "tripura",
    ],
    guideSlugs: [
      "shillong-travel-guide",
      "cherrapunji-travel-guide",
      "kaziranga-travel-guide",
      "tawang-travel-guide",
      "gangtok-travel-guide",
      "ziro-valley-arunachal-travel-guide",
      "majuli-travel-guide",
      "kohima-travel-guide",
      "dawki-travel-guide",
      "loktak-lake-travel-guide",
    ],
  },
  {
    slug: "buddhist-circuit",
    name: "Buddhist Circuit",
    shortName: "Buddhist Circuit",
    region: "East India",
    intro:
      "Bodh Gaya, Rajgir, Nalanda, Kushinagar, Sarnath and Lumbini, with the road days, border crossing and monastery stays planned around your pace.",
    image: "/images/blogs/bihar/bodh-gaya/the-bodhi-tree-bodh-gaya.webp",
    imageAlt: "The Bodhi tree beside the Mahabodhi Temple in Bodh Gaya, Bihar",
    knownFor:
      "The Buddhist Circuit links the places of the Buddha's life: Bodh Gaya (enlightenment), Sarnath (first sermon) and Kushinagar (parinirvana) in India, and Lumbini (birth) in Nepal, together with Rajgir, Vaishali, Shravasti and the ruins of Nalanda.",
    idealDays:
      "Five to six days covers Bodh Gaya, Rajgir, Nalanda and Sarnath. Nine to ten days completes the loop through Vaishali, Kushinagar, Lumbini and Shravasti.",
    bestTime:
      "October to March. December and January are busiest at Bodh Gaya; Buddha Purnima (April or May) is special but hot.",
    howToReach:
      "Gaya, Patna, Varanasi, Gorakhpur and Lucknow are the practical airports; most of the circuit is travelled by road. Lumbini is across the Nepal border at Sonauli, and non-Indian visitors need a Nepal visa.",
    routes: [
      {
        name: "Bodh Gaya to Sarnath",
        days: "5–6 days",
        desc: "Enlightenment, the Vulture's Peak, Nalanda's ruins and the first sermon at Sarnath.",
        stops: [
          { label: "Bodh Gaya", slug: "bodh-gaya-travel-guide" },
          { label: "Rajgir", slug: "rajgir-travel-guide" },
          { label: "Nalanda", slug: "nalanda-travel-guide" },
          { label: "Sarnath", slug: "sarnath-travel-guide" },
        ],
      },
      {
        name: "The full circuit",
        days: "9–10 days",
        desc: "Bihar, eastern Uttar Pradesh and Lumbini in Nepal, in one loop by road.",
        stops: [
          { label: "Bodh Gaya", slug: "bodh-gaya-travel-guide" },
          { label: "Vaishali", slug: "vaishali-travel-guide" },
          { label: "Kushinagar", slug: "kushinagar-travel-guide" },
          { label: "Shravasti", slug: "shravasti-travel-guide" },
          { label: "Sarnath", slug: "sarnath-travel-guide" },
        ],
      },
    ],
    relatedStates: ["bihar", "uttar-pradesh"],
    guideSlugs: [
      "bodh-gaya-travel-guide",
      "rajgir-travel-guide",
      "nalanda-travel-guide",
      "vaishali-travel-guide",
      "kushinagar-travel-guide",
      "shravasti-travel-guide",
      "sarnath-travel-guide",
      "vikramshila-travel-guide",
    ],
  },
];

export function getComboPackage(slug: string) {
  return comboPackages.find((c) => c.slug === slug);
}
