// Commercial destination profiles for the priority package pages
// (/packages/<slug>) and the homepage destination grid.
//
// Every fact here (days needed, best time, how to reach, cost estimates,
// permits) is condensed from the FAQ and body of the matching published hub
// guide under src/app/blog/<blogSlug>/ — so a package page never disagrees
// with its own guide. Route stops only reference guide slugs that exist
// (checked against src/app/blog/* at build time by scripts/check-links.mjs).
//
// States without a profile still get a full package page, built from
// all-states-data.ts + state-hub-children.json with generic copy.

export interface RouteStop {
  label: string;
  slug: string; // blog slug under /blog/
}

export interface SuggestedRoute {
  name: string;
  days: string;
  desc: string;
  stops: RouteStop[];
}

export interface DestinationProfile {
  slug: string; // matches StatePackage.slug
  shortName: string; // used in CTAs: "Plan My Kashmir Trip"
  cardBlurb: string; // one line for cards
  heroImage: string;
  heroAlt: string;
  knownFor: string;
  idealDays: string;
  bestTime: string;
  bestMonths: string; // short form for fact bars
  howToReach: string;
  costNote: string;
  familyFit: string;
  honeymoonFit: string;
  permitNote?: string;
  thingsToDo: string[];
  popularPlaces: string[]; // blog slugs, in priority order
  routes: SuggestedRoute[];
  nearby: string[]; // package slugs
}

export const destinationProfiles: DestinationProfile[] = [
  {
    slug: "kashmir",
    shortName: "Kashmir",
    cardBlurb: "Houseboats on Dal Lake, Gulmarg's slopes and Pahalgam's meadows",
    heroImage: "/images/destinations/jammu-kashmir/hero.jpg",
    heroAlt: "Wooden houseboats moored on Dal Lake in Srinagar with snow-covered Zabarwan peaks behind",
    knownFor:
      "Kashmir is known for Srinagar's Dal Lake houseboats and shikara rides, Mughal gardens, and three mountain valleys within a few hours of the city: Gulmarg for its gondola and winter snow, Pahalgam for the Lidder river and meadows, and Sonamarg for glaciers.",
    idealDays:
      "Six days covers Srinagar plus Gulmarg, Pahalgam and Sonamarg without rushing. Add about two days if you are combining the trip with the Vaishno Devi yatra from Jammu and Katra.",
    bestTime:
      "Late April to early June for tulips and green meadows, September to October for chinar autumn colours and thinner crowds, and late December to February for snow at Gulmarg.",
    bestMonths: "Apr–Jun, Sep–Oct",
    howToReach:
      "Srinagar Airport has direct flights from Delhi, Mumbai, Bengaluru and other major cities. Jammu Tawi is the main railhead, and the Jammu–Srinagar highway (about 270 km) takes 7–8 hours by road.",
    costNote:
      "Our Kashmir guide estimates roughly ₹28,800 for six days on a budget, about ₹63,000 mid-range, and more for luxury stays, excluding travel to Srinagar. Houseboat category and season move the number most.",
    familyFit:
      "Yes. Short drives from a Srinagar base, pony rides, gondola rides and houseboat stays work well across age groups. We keep travel days short for families.",
    honeymoonFit:
      "Yes, it is one of India's most popular honeymoon regions. A private houseboat night, a shikara at sunset and a quieter Pahalgam stay are the usual highlights.",
    permitNote:
      "No permit is needed for Indian citizens for the main tourist valleys. Conditions can change, so check official advisories before booking non-refundable travel.",
    thingsToDo: [
      "Shikara ride and houseboat stay on Dal Lake",
      "Gulmarg Gondola, and skiing in winter",
      "Pahalgam's Betaab and Aru valleys",
      "Thajiwas Glacier at Sonamarg",
      "Mughal gardens: Nishat Bagh and Shalimar Bagh",
    ],
    popularPlaces: [
      "srinagar-travel-guide",
      "gulmarg-travel-guide",
      "pahalgam-travel-guide",
      "sonamarg-travel-guide",
      "katra-travel-guide",
      "doodhpathri-travel-guide",
      "yusmarg-travel-guide",
      "gurez-valley-travel-guide",
      "patnitop-travel-guide",
      "jammu-travel-guide",
    ],
    routes: [
      {
        name: "Srinagar, Gulmarg & Pahalgam",
        days: "5–6 days",
        desc: "The classic first Kashmir trip: a Srinagar base with houseboat time, then Gulmarg and Pahalgam, with Sonamarg as a day trip.",
        stops: [
          { label: "Srinagar", slug: "srinagar-travel-guide" },
          { label: "Gulmarg", slug: "gulmarg-travel-guide" },
          { label: "Pahalgam", slug: "pahalgam-travel-guide" },
          { label: "Sonamarg", slug: "sonamarg-travel-guide" },
        ],
      },
      {
        name: "Katra, Patnitop & the Kashmir Valley",
        days: "8–9 days",
        desc: "Starts in Jammu for the Vaishno Devi yatra from Katra, breaks the highway drive at Patnitop, then continues into the valley.",
        stops: [
          { label: "Katra", slug: "katra-travel-guide" },
          { label: "Patnitop", slug: "patnitop-travel-guide" },
          { label: "Srinagar", slug: "srinagar-travel-guide" },
          { label: "Gulmarg", slug: "gulmarg-travel-guide" },
        ],
      },
    ],
    nearby: ["leh-ladakh", "himachal-pradesh", "punjab"],
  },
  {
    slug: "rajasthan",
    shortName: "Rajasthan",
    cardBlurb: "Forts, palace hotels, desert camps and the lakes of Udaipur",
    heroImage: "/images/blogs/rajasthan/rajasthan/mehrangarh-fort-blue-city-jodhpur.webp",
    heroAlt: "Mehrangarh Fort above the blue-painted houses of Jodhpur, Rajasthan",
    knownFor:
      "Rajasthan is known for its hill forts and palaces, the Thar Desert around Jaisalmer, and a run of distinct cities: pink Jaipur, blue Jodhpur, golden Jaisalmer and lake-front Udaipur, plus Pushkar and the tiger reserve at Ranthambore.",
    idealDays:
      "Eight days is a sensible minimum for the classic circuit of Jaipur, Pushkar, Jodhpur and Jaisalmer. Add two or three days to include Udaipur properly.",
    bestTime:
      "Late October to February, when days are cool and dry (10–28°C). April to June is extremely hot, with Jaisalmer and Jodhpur regularly above 42°C.",
    bestMonths: "Oct–Feb",
    howToReach:
      "Jaipur is 5–6 hours from Delhi by road and has an international airport. Udaipur, Jodhpur and Jaisalmer also have airports, and the whole state is well connected by rail.",
    costNote:
      "Our Rajasthan guide estimates an 8-day circuit at about ₹21,600 on a budget, ₹65,600 mid-range, and around ₹2,16,000 for luxury, before inter-city car hire.",
    familyFit:
      "Yes. Forts, camel rides and palace museums keep children engaged. In summer, plan the route around morning sightseeing.",
    honeymoonFit:
      "Yes, especially Udaipur's lake palaces and a night at a Jaisalmer desert camp. Heritage hotels make Rajasthan a strong luxury honeymoon choice.",
    thingsToDo: [
      "Amber Fort and Hawa Mahal in Jaipur",
      "Mehrangarh Fort above Jodhpur's blue city",
      "A night in the Thar Desert near Jaisalmer",
      "Boat on Lake Pichola in Udaipur",
      "Tiger safari at Ranthambore",
    ],
    popularPlaces: [
      "jaipur-travel-guide",
      "udaipur-city-of-lakes-travel-guide",
      "jodhpur-travel-guide",
      "rajasthan-desert-travel-guide",
      "pushkar-travel-guide",
      "ranthambore-travel-guide",
      "mount-abu-travel-guide",
      "chittorgarh-travel-guide",
      "kumbhalgarh-travel-guide",
      "bikaner-travel-guide",
      "bundi-travel-guide",
      "ajmer-travel-guide",
    ],
    routes: [
      {
        name: "Jaipur, Jodhpur & Udaipur",
        days: "6–7 days",
        desc: "The core Rajasthan circuit: Pink City forts, the Blue City and Udaipur's lake palaces.",
        stops: [
          { label: "Jaipur", slug: "jaipur-travel-guide" },
          { label: "Jodhpur", slug: "jodhpur-travel-guide" },
          { label: "Udaipur", slug: "udaipur-city-of-lakes-travel-guide" },
        ],
      },
      {
        name: "Golden Triangle: Delhi, Agra & Jaipur",
        days: "5–6 days",
        desc: "Mughal Delhi, the Taj Mahal and Rajasthan's capital. The most common first India trip.",
        stops: [
          { label: "Delhi", slug: "delhi-travel-guide" },
          { label: "Agra", slug: "agra-travel-guide" },
          { label: "Jaipur", slug: "jaipur-travel-guide" },
        ],
      },
      {
        name: "Desert to Lakes",
        days: "10–12 days",
        desc: "The full circuit, including a night in the Thar Desert near Jaisalmer.",
        stops: [
          { label: "Jaipur", slug: "jaipur-travel-guide" },
          { label: "Jaisalmer & the Thar", slug: "rajasthan-desert-travel-guide" },
          { label: "Jodhpur", slug: "jodhpur-travel-guide" },
          { label: "Udaipur", slug: "udaipur-city-of-lakes-travel-guide" },
        ],
      },
    ],
    nearby: ["gujarat", "madhya-pradesh", "delhi", "uttar-pradesh"],
  },
  {
    slug: "kerala",
    shortName: "Kerala",
    cardBlurb: "Backwater houseboats, Munnar's tea hills and cliff-top Varkala",
    heroImage: "/images/destinations/kerala/hero.jpg",
    heroAlt: "Traditional kettuvallam houseboat on a palm-lined backwater canal in Kerala",
    knownFor:
      "Kerala is known for its backwaters (houseboat cruises around Alappuzha and Kumarakom), the tea estates of Munnar, spice and wildlife country around Thekkady, Kochi's colonial old town, and beaches at Varkala and Kovalam.",
    idealDays:
      "Six to seven days covers Kochi, Munnar, Thekkady and an overnight houseboat. Four days is enough for a backwaters-only trip.",
    bestTime:
      "Late September to November, just after the monsoon, when the backwaters are full and green and prices are below the December–February peak. December to February is the driest and busiest season.",
    bestMonths: "Sep–Feb",
    howToReach:
      "Cochin International Airport is the main gateway. Alappuzha is about 2 hours away by road, and Thiruvananthapuram airport serves Kovalam and Varkala. Kerala is also well connected by rail.",
    costNote:
      "Our Kerala backwaters guide estimates a 4-day trip with one houseboat night at about ₹14,000 on a budget, ₹27,000 mid-range and ₹65,000+ for luxury. The houseboat is the biggest variable.",
    familyFit:
      "Yes. Short drives, houseboats, Periyar boat safaris at Thekkady and gentle beaches make Kerala one of the easiest family trips in India.",
    honeymoonFit:
      "Yes. A private houseboat night, a Munnar plantation stay and a few days at Varkala or Kovalam make a classic honeymoon route.",
    thingsToDo: [
      "Overnight houseboat on Vembanad Lake",
      "Tea estates and Eravikulam National Park in Munnar",
      "Periyar boat safari and spice gardens at Thekkady",
      "Fort Kochi's Chinese fishing nets and old town",
      "Cliff-top beach at Varkala",
    ],
    popularPlaces: [
      "munnar-travel-guide",
      "alappuzha-travel-guide",
      "kochi-travel-guide",
      "thekkady-travel-guide",
      "kumarakom-travel-guide",
      "varkala-travel-guide",
      "kovalam-travel-guide",
      "wayanad-travel-guide",
      "vagamon-travel-guide",
      "athirappilly-travel-guide",
    ],
    routes: [
      {
        name: "Kochi, Munnar, Thekkady & Alappuzha",
        days: "6–7 days",
        desc: "Old-town Kochi, two nights in the tea hills, spice country, then a houseboat to finish.",
        stops: [
          { label: "Kochi", slug: "kochi-travel-guide" },
          { label: "Munnar", slug: "munnar-travel-guide" },
          { label: "Thekkady", slug: "thekkady-travel-guide" },
          { label: "Alappuzha", slug: "alappuzha-travel-guide" },
        ],
      },
      {
        name: "Backwaters & Beach",
        days: "5 days",
        desc: "A slower route: houseboat and Kumarakom, then down the coast to Varkala.",
        stops: [
          { label: "Kochi", slug: "kochi-travel-guide" },
          { label: "Kumarakom", slug: "kumarakom-travel-guide" },
          { label: "Alappuzha", slug: "alappuzha-travel-guide" },
          { label: "Varkala", slug: "varkala-travel-guide" },
        ],
      },
    ],
    nearby: ["karnataka", "tamil-nadu", "lakshadweep"],
  },
  {
    slug: "goa",
    shortName: "Goa",
    cardBlurb: "Beaches north and south, Portuguese-era churches and easy long weekends",
    heroImage: "/images/blogs/goa/goa/palolem-beach-south-goa.webp",
    heroAlt: "Crescent of Palolem Beach in South Goa lined with palm trees",
    knownFor:
      "Goa is known for its beaches (livelier in the north around Baga, Anjuna and Vagator, quieter in the south at Palolem and Agonda), the UNESCO-listed churches of Old Goa, Portuguese-era Panjim and the Dudhsagar Falls on the Karnataka border.",
    idealDays:
      "Five days covers North and South Goa, Old Goa and a Dudhsagar day trip. With three days, pick one half of the state rather than splitting your stay.",
    bestTime:
      "November to February (22–32°C). Mid-November to mid-December, or January, gives the same weather without the Christmas–New Year price spike. Most beach shacks close from June to September.",
    bestMonths: "Nov–Feb",
    howToReach:
      "Two airports: Manohar International at Mopa (closer to North Goa) and Dabolim (closer to South Goa). Madgaon and Thivim are the main stations on the Konkan Railway.",
    costNote:
      "Our Goa guide estimates about ₹15,500 for five days on a budget, ₹48,500 mid-range and ₹1,62,500 for luxury, excluding travel to Goa. Prices rise 30–50% over Christmas and New Year.",
    familyFit:
      "Yes, particularly South Goa and Candolim, where beaches are calmer and stays are quieter than the Baga–Calangute stretch.",
    honeymoonFit:
      "Yes. South Goa's beach stays (Palolem, Agonda) suit couples who want quiet; North Goa suits couples who want nightlife.",
    thingsToDo: [
      "Beach-hop from Candolim to Vagator in the north",
      "Quiet beach days at Palolem and Agonda",
      "Basilica of Bom Jesus and Old Goa's churches",
      "Fontainhas, Panjim's Latin quarter",
      "Dudhsagar Falls day trip",
    ],
    popularPlaces: [
      "palolem-travel-guide",
      "old-goa-travel-guide",
      "panjim-travel-guide",
      "anjuna-travel-guide",
      "vagator-travel-guide",
      "calangute-travel-guide",
      "baga-travel-guide",
      "agonda-travel-guide",
      "dudhsagar-falls-travel-guide",
      "candolim-travel-guide",
    ],
    routes: [
      {
        name: "North Goa & Old Goa",
        days: "3 days",
        desc: "A long-weekend plan: northern beaches, Panjim's Latin quarter and the Old Goa churches.",
        stops: [
          { label: "Candolim", slug: "candolim-travel-guide" },
          { label: "Anjuna", slug: "anjuna-travel-guide" },
          { label: "Panjim", slug: "panjim-travel-guide" },
          { label: "Old Goa", slug: "old-goa-travel-guide" },
        ],
      },
      {
        name: "North to South Goa",
        days: "5–6 days",
        desc: "Two bases, one in each half of the state, with a Dudhsagar day trip in between.",
        stops: [
          { label: "Vagator", slug: "vagator-travel-guide" },
          { label: "Old Goa", slug: "old-goa-travel-guide" },
          { label: "Dudhsagar Falls", slug: "dudhsagar-falls-travel-guide" },
          { label: "Palolem", slug: "palolem-travel-guide" },
        ],
      },
    ],
    nearby: ["karnataka", "maharashtra", "kerala"],
  },
  {
    slug: "himachal-pradesh",
    shortName: "Himachal",
    cardBlurb: "Shimla, Manali, Dharamshala and the high desert of Spiti",
    heroImage: "/images/destinations/manali/hero.jpg",
    heroAlt: "Snow-capped peaks above pine forests near Manali, Himachal Pradesh",
    knownFor:
      "Himachal Pradesh is known for its hill towns (colonial Shimla, Manali in the Kullu valley, and Dharamshala–McLeod Ganj, home of the Dalai Lama), adventure hubs like Bir Billing for paragliding, and the high-altitude cold desert of Spiti and Kinnaur.",
    idealDays:
      "Nine days covers Shimla, Manali and Dharamshala comfortably. Five to six days suits a Shimla–Manali trip, and Spiti needs its own week.",
    bestTime:
      "Late September to early November for clear views and thinner crowds, and March to June for spring. Spiti is realistically open only from around June to early October.",
    bestMonths: "Mar–Jun, Sep–Nov",
    howToReach:
      "Overnight Volvo buses run from Delhi to Shimla, Manali and Dharamshala. Chandigarh is the main airport for Shimla and Dharamshala, and Bhuntar airport serves Manali. The Kalka–Shimla toy train climbs to Shimla.",
    costNote:
      "Our Himachal guide estimates a 9-day trip at about ₹26,100 on a budget and ₹75,600 mid-range, excluding flights. Private cabs between regions add up quickly.",
    familyFit:
      "Yes. Shimla, Manali and Dalhousie are long-established family hill stations. Spiti and high passes like Rohtang need more care with children because of altitude.",
    honeymoonFit:
      "Yes. Manali, Kasauli and Dalhousie are popular honeymoon choices, and a Shimla–Manali route is the most common one.",
    permitNote:
      "Rohtang Pass needs an online permit for vehicles. Some upper Kinnaur and Spiti stretches need an Inner Line Permit for foreign nationals.",
    thingsToDo: [
      "Kalka–Shimla toy train and the Mall Road",
      "Solang Valley and Rohtang Pass from Manali",
      "McLeod Ganj monasteries and the Triund trek",
      "Paragliding at Bir Billing",
      "Key Monastery and Chandratal in Spiti",
    ],
    popularPlaces: [
      "manali-travel-guide",
      "shimla-travel-guide",
      "spiti-valley-travel-guide",
      "dharamshala-travel-guide",
      "kasol-kheerganga-trek-travel-guide",
      "bir-billing-travel-guide",
      "dalhousie-travel-guide",
      "kasauli-travel-guide",
      "tirthan-valley-travel-guide",
      "jibhi-travel-guide",
      "kinnaur-travel-guide",
      "chitkul-travel-guide",
    ],
    routes: [
      {
        name: "Shimla & Manali",
        days: "5–6 days",
        desc: "The standard first Himachal trip, via the Kullu valley.",
        stops: [
          { label: "Shimla", slug: "shimla-travel-guide" },
          { label: "Kullu", slug: "kullu-travel-guide" },
          { label: "Manali", slug: "manali-travel-guide" },
        ],
      },
      {
        name: "Shimla, Manali & Dharamshala",
        days: "8–9 days",
        desc: "Three hubs, planned to avoid backtracking. Fly into Chandigarh and out of Kullu, or the reverse.",
        stops: [
          { label: "Shimla", slug: "shimla-travel-guide" },
          { label: "Manali", slug: "manali-travel-guide" },
          { label: "Bir Billing", slug: "bir-billing-travel-guide" },
          { label: "Dharamshala", slug: "dharamshala-travel-guide" },
        ],
      },
      {
        name: "Kinnaur & Spiti Circuit",
        days: "9–10 days",
        desc: "June to early October only. Climbs gradually through Kinnaur into Spiti, then exits towards Manali.",
        stops: [
          { label: "Shimla", slug: "shimla-travel-guide" },
          { label: "Chitkul", slug: "chitkul-travel-guide" },
          { label: "Spiti Valley", slug: "spiti-valley-travel-guide" },
          { label: "Manali", slug: "manali-travel-guide" },
        ],
      },
    ],
    nearby: ["kashmir", "leh-ladakh", "uttarakhand", "punjab", "chandigarh"],
  },
  {
    slug: "uttarakhand",
    shortName: "Uttarakhand",
    cardBlurb: "Rishikesh, the Char Dham, Nainital's lakes and Corbett's tigers",
    heroImage: "/images/blogs/uttarakhand/valley-of-flowers/alpine-meadow-snow-peaks-valley-of-flowers.webp",
    heroAlt: "Alpine meadow below snow peaks in the Valley of Flowers, Uttarakhand",
    knownFor:
      "Uttarakhand is known for Rishikesh and Haridwar on the Ganga, the Char Dham pilgrimage (Yamunotri, Gangotri, Kedarnath and Badrinath), the Kumaon lake towns around Nainital, Jim Corbett National Park, and Himalayan treks such as the Valley of Flowers.",
    idealDays:
      "Seven days suits a Rishikesh, Mussoorie, Nainital and Corbett trip. The Char Dham circuit needs a separate 9–10 days or more, because mountain roads and weather need buffer days.",
    bestTime:
      "March to June for Rishikesh, Nainital and Mussoorie, and September to mid-October for the Char Dham and clear mountain views. Avoid July and August, when monsoon landslides close roads.",
    bestMonths: "Mar–Jun, Sep–Oct",
    howToReach:
      "Rishikesh and Haridwar are 5–6 hours from Delhi by road. Dehradun's Jolly Grant Airport is the main air gateway, and Haridwar and Dehradun are the main railheads. Kathgodam is the railhead for Nainital.",
    costNote:
      "Our Uttarakhand guide estimates a 7-day trip at about ₹16,800 on a budget up to ₹1,38,600 for luxury. A Char Dham yatra with a Kedarnath helicopter can add ₹15,000–₹60,000+ per person.",
    familyFit:
      "Yes. Nainital, Mussoorie and Jim Corbett are strong family choices. The Char Dham is physically demanding, so we plan it carefully for older travellers.",
    honeymoonFit:
      "Yes, for couples who prefer quiet hills: Mussoorie, Nainital, Auli in winter, and smaller Kumaon towns like Mukteshwar and Kausani.",
    thingsToDo: [
      "Ganga Aarti at Haridwar and Rishikesh",
      "White-water rafting in Rishikesh",
      "Jeep safari at Jim Corbett",
      "The Char Dham yatra",
      "Valley of Flowers trek (July–September)",
    ],
    popularPlaces: [
      "rishikesh-adventure-travel-guide",
      "nainital-travel-guide",
      "mussoorie-travel-guide",
      "jim-corbett-travel-guide",
      "kedarnath-travel-guide",
      "badrinath-travel-guide",
      "haridwar-travel-guide",
      "auli-travel-guide",
      "valley-of-flowers-travel-guide",
      "chopta-travel-guide",
      "gangotri-travel-guide",
      "yamunotri-travel-guide",
    ],
    routes: [
      {
        name: "Haridwar, Rishikesh & Mussoorie",
        days: "4–5 days",
        desc: "A short trip from Delhi that pairs the Ganga towns with a hill-station stay.",
        stops: [
          { label: "Haridwar", slug: "haridwar-travel-guide" },
          { label: "Rishikesh", slug: "rishikesh-adventure-travel-guide" },
          { label: "Mussoorie", slug: "mussoorie-travel-guide" },
        ],
      },
      {
        name: "Nainital & Jim Corbett",
        days: "5 days",
        desc: "Kumaon lakes plus two safari days at Corbett.",
        stops: [
          { label: "Jim Corbett", slug: "jim-corbett-travel-guide" },
          { label: "Nainital", slug: "nainital-travel-guide" },
          { label: "Mukteshwar", slug: "mukteshwar-travel-guide" },
        ],
      },
      {
        name: "Char Dham Yatra",
        days: "10–12 days",
        desc: "Yamunotri, Gangotri, Kedarnath and Badrinath, in the traditional order, with buffer days for weather.",
        stops: [
          { label: "Yamunotri", slug: "yamunotri-travel-guide" },
          { label: "Gangotri", slug: "gangotri-travel-guide" },
          { label: "Kedarnath", slug: "kedarnath-travel-guide" },
          { label: "Badrinath", slug: "badrinath-travel-guide" },
        ],
      },
    ],
    nearby: ["himachal-pradesh", "uttar-pradesh", "delhi"],
  },
  {
    slug: "leh-ladakh",
    shortName: "Ladakh",
    cardBlurb: "High passes, Pangong Tso, Nubra's dunes and old monasteries",
    heroImage: "/images/blogs/ladakh/pangong-lake/pangong-tso-turquoise-water-mountains.webp",
    heroAlt: "Turquoise water of Pangong Tso against bare brown mountains in Ladakh",
    knownFor:
      "Ladakh is known for high-altitude road trips over passes such as Khardung La and Chang La, the colour-shifting lake Pangong Tso, the sand dunes and double-humped camels of Nubra Valley, and Buddhist monasteries such as Hemis, Thiksey and Diskit.",
    idealDays:
      "Seven days if you fly into Leh (including two days to acclimatise). A full road trip entering from Srinagar and leaving via Manali needs 12–14 days.",
    bestTime:
      "June to September, when the roads are open. The first two weeks of September have thinner crowds and lower prices while both highways are still open.",
    bestMonths: "Jun–Sep",
    howToReach:
      "Fly into Leh (about 1 hour 15 minutes from Delhi), or drive the Srinagar–Leh highway (open roughly April to November) or the Manali–Leh highway (roughly mid-June to mid-October).",
    costNote:
      "Our Leh Ladakh road trip guide estimates 14 days at about ₹39,000 on a budget and ₹1,02,000 mid-range, excluding flights. A shorter fly-in trip costs proportionally less.",
    familyFit:
      "Possible, with care. Altitude is the main concern for young children and older travellers, so we build in acclimatisation and avoid overnight stays at the highest camps.",
    honeymoonFit:
      "Yes, for adventurous couples. Pangong lakeside camps and Nubra are memorable, though comforts are simpler than in Kashmir or Kerala.",
    permitNote:
      "Indian nationals need an Inner Line Permit for Pangong, Nubra, Tso Moriri and Dah-Hanu. Foreign nationals also need a Protected Area Permit through a registered Leh operator.",
    thingsToDo: [
      "Acclimatise in Leh: Leh Palace and Shanti Stupa",
      "Cross Khardung La to Nubra Valley",
      "Overnight at Pangong Tso",
      "Hemis and Thiksey monasteries",
      "Tso Moriri for a quieter lake",
    ],
    popularPlaces: [
      "leh-travel-guide",
      "pangong-lake-travel-guide",
      "nubra-valley-travel-guide",
      "khardung-la-travel-guide",
      "tso-moriri-travel-guide",
      "turtuk-travel-guide",
      "hemis-travel-guide",
      "thiksey-travel-guide",
      "zanskar-valley-travel-guide",
      "kargil-travel-guide",
    ],
    routes: [
      {
        name: "Leh, Nubra & Pangong",
        days: "7 days",
        desc: "Fly in, acclimatise for two days, then loop through Nubra and Pangong.",
        stops: [
          { label: "Leh", slug: "leh-travel-guide" },
          { label: "Khardung La", slug: "khardung-la-travel-guide" },
          { label: "Nubra Valley", slug: "nubra-valley-travel-guide" },
          { label: "Pangong Tso", slug: "pangong-lake-travel-guide" },
        ],
      },
      {
        name: "Srinagar to Manali Road Trip",
        days: "12–14 days",
        desc: "Enter by the gentler Srinagar–Kargil road, loop through Leh's lakes and valleys, then exit via the Manali highway.",
        stops: [
          { label: "Srinagar", slug: "srinagar-travel-guide" },
          { label: "Kargil", slug: "kargil-travel-guide" },
          { label: "Leh", slug: "leh-travel-guide" },
          { label: "Manali", slug: "manali-travel-guide" },
        ],
      },
    ],
    nearby: ["kashmir", "himachal-pradesh"],
  },
  {
    slug: "meghalaya",
    shortName: "Meghalaya",
    cardBlurb: "Living root bridges, Cherrapunji's waterfalls and clear Dawki river",
    heroImage: "/images/blogs/meghalaya/meghalaya/single-decker-root-bridge-riwai.webp",
    heroAlt: "Living root bridge made of rubber-tree roots over a stream near Riwai, Meghalaya",
    knownFor:
      "Meghalaya is known for living root bridges grown from rubber-tree roots, the waterfalls and caves around Cherrapunji (Sohra), Mawlynnong village, the glass-clear Umngot river at Dawki, and the hill capital Shillong.",
    idealDays:
      "Six days covers Shillong, Cherrapunji, a root-bridge walk, Mawlynnong and Dawki, starting and ending in Guwahati.",
    bestTime:
      "October to April. Late October to early December is the sweet spot: waterfalls are still full after the monsoon and skies are clear.",
    bestMonths: "Oct–Apr",
    howToReach:
      "Fly into Guwahati in Assam, then drive about 3 hours (100 km) to Shillong. Shillong's Umroi airport has limited flights, and there is no railway in Meghalaya.",
    costNote:
      "Our Meghalaya guide estimates six days at about ₹18,000 on a budget, ₹32,000 mid-range and ₹65,000 for luxury, including a private taxi.",
    familyFit:
      "Yes, with planning. Shillong, Cherrapunji viewpoints and Dawki are easy. The Nongriat double-decker root bridge involves around 3,500 steps each way.",
    honeymoonFit:
      "Yes, for couples who like nature over resorts: misty Cherrapunji stays and boating at Dawki are the highlights.",
    permitNote:
      "No Inner Line Permit is needed for Indian citizens.",
    thingsToDo: [
      "Double-decker root bridge at Nongriat",
      "Nohkalikai and Seven Sisters falls at Cherrapunji",
      "Boat on the Umngot river at Dawki",
      "Mawlynnong village walk",
      "Umiam Lake and Laitlum Canyons near Shillong",
    ],
    popularPlaces: [
      "shillong-travel-guide",
      "cherrapunji-travel-guide",
      "dawki-travel-guide",
      "mawlynnong-travel-guide",
      "nongriat-travel-guide",
      "laitlum-canyons-travel-guide",
      "umiam-lake-travel-guide",
      "shnongpdeng-travel-guide",
    ],
    routes: [
      {
        name: "Shillong, Cherrapunji, Mawlynnong & Dawki",
        days: "5–6 days",
        desc: "The standard Meghalaya loop from Guwahati, with a night near the root bridges.",
        stops: [
          { label: "Shillong", slug: "shillong-travel-guide" },
          { label: "Cherrapunji", slug: "cherrapunji-travel-guide" },
          { label: "Mawlynnong", slug: "mawlynnong-travel-guide" },
          { label: "Dawki", slug: "dawki-travel-guide" },
        ],
      },
    ],
    nearby: ["assam", "arunachal-pradesh", "nagaland", "sikkim"],
  },
  {
    slug: "andaman-nicobar",
    shortName: "Andaman",
    cardBlurb: "Radhanagar Beach, reef snorkelling and quiet island days",
    heroImage: "/images/destinations/andaman/hero.jpg",
    heroAlt: "White sand beach and turquoise water in the Andaman Islands",
    knownFor:
      "The Andaman Islands are known for Radhanagar Beach on Havelock (Swaraj Dweep), coral reefs for snorkelling and diving, Neil Island's natural rock bridge, and the history of the Cellular Jail in Port Blair.",
    idealDays:
      "Seven days is the ideal minimum for Port Blair, Havelock and Neil Island. Shorter trips mean dropping Neil or your dive days.",
    bestTime:
      "Mid-November to mid-February for calm seas and 20–30 m dive visibility. March to May is good value. Avoid June to September, when ferries are often cancelled.",
    bestMonths: "Nov–May",
    howToReach:
      "Fly into Port Blair, with direct flights from Chennai and Kolkata (about 2 hours) and connections from Delhi and Bengaluru. Government ferries link Port Blair with Havelock and Neil.",
    costNote:
      "Our Andaman guide estimates seven days at about ₹18,200 on a budget, ₹54,600 mid-range and ₹1,57,500 for luxury, excluding flights from the mainland.",
    familyFit:
      "Yes. Calm beaches, glass-bottom boats at North Bay and short ferry hops work well for families.",
    honeymoonFit:
      "Yes, it is one of India's leading honeymoon destinations: beach resorts on Havelock, snorkelling and sunsets at Radhanagar.",
    permitNote:
      "Indian nationals need no permit for Port Blair, Havelock, Neil, Baratang, Ross and North Bay. Some outer islands need a free Restricted Area Permit.",
    thingsToDo: [
      "Sunset at Radhanagar Beach, Havelock",
      "Snorkelling or a first scuba dive",
      "Cellular Jail light-and-sound show",
      "Natural rock bridge on Neil Island",
      "Ross Island and North Bay day trip",
    ],
    popularPlaces: [
      "havelock-island-andaman-travel-guide",
      "radhanagar-beach-andaman-travel-guide",
      "neil-island-andaman-travel-guide",
      "port-blair-andaman-travel-guide",
      "cellular-jail-andaman-travel-guide",
      "ross-island-andaman-travel-guide",
      "north-bay-island-andaman-travel-guide",
      "baratang-andaman-travel-guide",
    ],
    routes: [
      {
        name: "Port Blair, Havelock & Neil",
        days: "6–7 days",
        desc: "The classic island route, with time for snorkelling and a Ross Island half-day.",
        stops: [
          { label: "Port Blair", slug: "port-blair-andaman-travel-guide" },
          { label: "Havelock", slug: "havelock-island-andaman-travel-guide" },
          { label: "Neil Island", slug: "neil-island-andaman-travel-guide" },
        ],
      },
    ],
    nearby: ["tamil-nadu", "west-bengal"],
  },
  {
    slug: "karnataka",
    shortName: "Karnataka",
    cardBlurb: "Hampi's ruins, Mysuru's palace and the coffee hills of Coorg",
    heroImage: "/images/blogs/karnataka/hampi/stone-chariot-vittala-temple-hampi.webp",
    heroAlt: "Stone chariot at the Vittala Temple complex in Hampi, Karnataka",
    knownFor:
      "Karnataka is known for the ruins of Vijayanagara at Hampi, the royal city of Mysuru, the coffee estates of Coorg and Chikmagalur, the Hoysala temples at Belur and Halebidu, tiger country at Kabini and Bandipur, and the beaches of Gokarna.",
    idealDays:
      "Five to six days for Bengaluru, Mysuru and Coorg. Nine days lets you add Hampi. Most trips pick two or three regions.",
    bestTime:
      "October to February (15–30°C). Mysuru's Dasara festival falls in September–October.",
    bestMonths: "Oct–Feb",
    howToReach:
      "Bengaluru's Kempegowda Airport is the main gateway, with Mangaluru for the coast. Hospet is the nearest station to Hampi. Mysuru is about 3 hours from Bengaluru by road, Coorg 5–6 hours.",
    costNote:
      "Our Karnataka guide estimates about ₹3,100 a day on a budget, ₹8,400 mid-range and up to ₹21,000 for luxury.",
    familyFit:
      "Yes. Mysuru Palace, Coorg's plantations and Dubare elephant camp are family favourites.",
    honeymoonFit:
      "Yes. Coffee-estate stays in Coorg and Chikmagalur are popular with couples who want privacy and cooler weather.",
    thingsToDo: [
      "Vittala Temple and Hampi's boulder landscape",
      "Mysuru Palace lit up on Sunday evenings",
      "Coffee-estate stay in Coorg",
      "Safari at Kabini or Bandipur",
      "Beaches at Gokarna",
    ],
    popularPlaces: [
      "hampi-travel-guide",
      "coorg-travel-guide",
      "mysuru-travel-guide",
      "chikmagalur-travel-guide",
      "gokarna-beaches-travel-guide",
      "kabini-travel-guide",
      "badami-aihole-pattadakal-travel-guide",
      "bengaluru-travel-guide",
      "udupi-travel-guide",
      "jog-falls-travel-guide",
    ],
    routes: [
      {
        name: "Bengaluru, Mysuru & Coorg",
        days: "5–6 days",
        desc: "Royal Mysuru followed by two or three nights on a Coorg coffee estate.",
        stops: [
          { label: "Bengaluru", slug: "bengaluru-travel-guide" },
          { label: "Mysuru", slug: "mysuru-travel-guide" },
          { label: "Coorg", slug: "coorg-travel-guide" },
        ],
      },
      {
        name: "Hampi & Badami Heritage",
        days: "4–5 days",
        desc: "Vijayanagara ruins at Hampi, then the rock-cut temples of Badami, Aihole and Pattadakal.",
        stops: [
          { label: "Hampi", slug: "hampi-travel-guide" },
          { label: "Badami, Aihole & Pattadakal", slug: "badami-aihole-pattadakal-travel-guide" },
        ],
      },
    ],
    nearby: ["kerala", "goa", "tamil-nadu", "maharashtra"],
  },
  {
    slug: "madhya-pradesh",
    shortName: "Madhya Pradesh",
    cardBlurb: "Tiger reserves, Khajuraho's temples and forts at Gwalior and Orchha",
    heroImage: "/images/blogs/madhya-pradesh/madhya-pradesh/kandariya-mahadeva-temple-khajuraho-sunset.webp",
    heroAlt: "Kandariya Mahadeva Temple at Khajuraho at sunset, Madhya Pradesh",
    knownFor:
      "Madhya Pradesh is known for tiger reserves (Bandhavgarh, Kanha, Panna, Pench), the carved temples of Khajuraho, the Buddhist stupa at Sanchi, forts at Gwalior and Orchha, and the temple towns of Ujjain and Omkareshwar.",
    idealDays:
      "Seven days combines Khajuraho, a tiger reserve and Gwalior. With five days, choose Khajuraho plus either a tiger reserve or the forts.",
    bestTime:
      "October to March for comfortable sightseeing (10–28°C). April and May give better tiger-sighting odds, despite the heat. Core safari zones close during the monsoon.",
    bestMonths: "Oct–Mar",
    howToReach:
      "Khajuraho has its own airport and railway station. Jabalpur is the usual gateway for Bandhavgarh and Kanha, and Bhopal and Indore airports serve the west of the state.",
    costNote:
      "Our Madhya Pradesh guide estimates about ₹3,650 a day on a budget, ₹9,100 mid-range and ₹21,000 for luxury. Safari permits and jeeps are a significant cost.",
    familyFit:
      "Yes, for families with children old enough for early-morning safaris. Forts and temples are easy to pace.",
    honeymoonFit:
      "A good fit for couples interested in wildlife lodges and heritage rather than beaches.",
    thingsToDo: [
      "Tiger safari at Bandhavgarh or Kanha",
      "Western Group of temples at Khajuraho",
      "Orchha's riverside cenotaphs",
      "Gwalior Fort",
      "Evening aarti at Mahakaleshwar, Ujjain",
    ],
    popularPlaces: [
      "khajuraho-travel-guide",
      "bandhavgarh-travel-guide",
      "kanha-travel-guide",
      "orchha-travel-guide",
      "gwalior-travel-guide",
      "ujjain-travel-guide",
      "sanchi-travel-guide",
      "pachmarhi-travel-guide",
      "mandu-travel-guide",
      "omkareshwar-travel-guide",
    ],
    routes: [
      {
        name: "Khajuraho & Bandhavgarh",
        days: "5 days",
        desc: "Temples first, then three or four safari drives at Bandhavgarh.",
        stops: [
          { label: "Khajuraho", slug: "khajuraho-travel-guide" },
          { label: "Bandhavgarh", slug: "bandhavgarh-travel-guide" },
        ],
      },
      {
        name: "Gwalior, Orchha & Khajuraho",
        days: "5–6 days",
        desc: "A heritage route through Bundelkhand's forts and temples.",
        stops: [
          { label: "Gwalior", slug: "gwalior-travel-guide" },
          { label: "Orchha", slug: "orchha-travel-guide" },
          { label: "Khajuraho", slug: "khajuraho-travel-guide" },
        ],
      },
    ],
    nearby: ["rajasthan", "uttar-pradesh", "gujarat", "maharashtra", "chhattisgarh"],
  },
  {
    slug: "gujarat",
    shortName: "Gujarat",
    cardBlurb: "The white Rann of Kutch, Gir's lions and the Somnath–Dwarka coast",
    heroImage: "/images/blogs/gujarat/gujarat/rann-of-kutch-white-desert-gujarat.webp",
    heroAlt: "White salt flats of the Rann of Kutch, Gujarat",
    knownFor:
      "Gujarat is known for the white salt desert of the Rann of Kutch, Gir National Park (the only wild home of the Asiatic lion), the coastal temples of Somnath and Dwarka, the old city of Ahmedabad and the Statue of Unity.",
    idealDays:
      "Seven days combines Ahmedabad, the Rann of Kutch, Gir and Somnath. Four or five days suits Ahmedabad and Kutch alone.",
    bestTime:
      "November to February (10–28°C), which also covers the Rann Utsav festival. Avoid Kutch in the monsoon (July to September), when the Rann floods.",
    bestMonths: "Nov–Feb",
    howToReach:
      "Ahmedabad is the main airport. Rajkot, Bhuj and Diu serve regional routes, and Ahmedabad, Vadodara, Rajkot and Bhuj are well connected by rail.",
    costNote:
      "Our Gujarat guide estimates seven days at about ₹21,700 on a budget, ₹57,050 mid-range and ₹1,32,300 for luxury, excluding flights.",
    familyFit:
      "Yes. Gujarat is organised and easy to travel, and the Rann Utsav tent city and Gir safaris are popular with families.",
    honeymoonFit:
      "Suitable for couples who prefer culture and wildlife. Gujarat is a dry state, which matters to some couples.",
    thingsToDo: [
      "Full-moon night on the white Rann",
      "Lion safari at Gir",
      "Somnath temple on the Arabian Sea",
      "Ahmedabad's old-city heritage walk",
      "Statue of Unity at Kevadia",
    ],
    popularPlaces: [
      "rann-of-kutch-travel-guide",
      "gir-national-park-travel-guide",
      "ahmedabad-travel-guide",
      "somnath-travel-guide",
      "dwarka-travel-guide",
      "statue-of-unity-travel-guide",
      "dholavira-travel-guide",
      "junagadh-girnar-travel-guide",
    ],
    routes: [
      {
        name: "Ahmedabad & the Rann of Kutch",
        days: "4–5 days",
        desc: "Old Ahmedabad, then two nights near the white Rann (November to February).",
        stops: [
          { label: "Ahmedabad", slug: "ahmedabad-travel-guide" },
          { label: "Rann of Kutch", slug: "rann-of-kutch-travel-guide" },
        ],
      },
      {
        name: "Gir, Somnath & Dwarka",
        days: "5–6 days",
        desc: "Saurashtra's lions and its two great coastal temple towns.",
        stops: [
          { label: "Gir", slug: "gir-national-park-travel-guide" },
          { label: "Somnath", slug: "somnath-travel-guide" },
          { label: "Dwarka", slug: "dwarka-travel-guide" },
        ],
      },
    ],
    nearby: ["rajasthan", "madhya-pradesh", "maharashtra", "dadra-nagar-haveli-daman-diu"],
  },
  {
    slug: "sikkim",
    shortName: "Sikkim",
    cardBlurb: "Kanchenjunga views, Gangtok, and high lakes in North Sikkim",
    heroImage: "/images/blogs/sikkim/sikkim/tsomgo-changu-lake-east-sikkim.webp",
    heroAlt: "Tsomgo (Changu) Lake surrounded by mountains in East Sikkim",
    knownFor:
      "Sikkim is known for close views of Kanchenjunga, the capital Gangtok, high-altitude lakes such as Tsomgo and Gurudongmar, Yumthang Valley's spring rhododendrons, and monasteries such as Rumtek and Pemayangtse.",
    idealDays:
      "Six days covers Gangtok, East Sikkim (Tsomgo Lake and Nathula) and either Pelling or North Sikkim.",
    bestTime:
      "April to May for rhododendrons at Yumthang, and October to November for the clearest Kanchenjunga views. Avoid July to September because of landslides.",
    bestMonths: "Apr–May, Oct–Nov",
    howToReach:
      "Bagdogra airport in West Bengal, then a 4–5 hour drive to Gangtok. New Jalpaiguri (NJP) is the nearest railhead. Pakyong airport near Gangtok has limited flights.",
    costNote:
      "Our Sikkim guide estimates six days at about ₹16,800 on a budget, ₹44,400 mid-range and ₹1,17,600 for luxury, excluding travel to Bagdogra.",
    familyFit:
      "Yes. Gangtok and Pelling are easy with children. Gurudongmar Lake (5,430 m) needs acclimatisation and is not ideal for very young children.",
    honeymoonFit:
      "Yes. Gangtok, Pelling's mountain views and a night in Lachung are a popular couples' route.",
    permitNote:
      "A Restricted Area Permit is needed for Tsomgo Lake, Nathula and North Sikkim, arranged through a registered agent. Foreign nationals also need a Protected Area Permit beyond Gangtok and Pelling.",
    thingsToDo: [
      "Tsomgo Lake and Nathula Pass",
      "Kanchenjunga sunrise from Pelling",
      "Yumthang Valley in spring",
      "Gurudongmar Lake",
      "Rumtek Monastery and MG Marg in Gangtok",
    ],
    popularPlaces: [
      "gangtok-travel-guide",
      "pelling-travel-guide",
      "tsomgo-lake-travel-guide",
      "yumthang-valley-travel-guide",
      "lachung-travel-guide",
      "gurudongmar-lake-travel-guide",
      "nathula-pass-travel-guide",
      "ravangla-travel-guide",
    ],
    routes: [
      {
        name: "Gangtok, Tsomgo & Pelling",
        days: "6 days",
        desc: "Gangtok with a day to Tsomgo Lake and Nathula, then west to Pelling for Kanchenjunga views.",
        stops: [
          { label: "Gangtok", slug: "gangtok-travel-guide" },
          { label: "Tsomgo Lake", slug: "tsomgo-lake-travel-guide" },
          { label: "Pelling", slug: "pelling-travel-guide" },
        ],
      },
      {
        name: "North Sikkim",
        days: "6–7 days",
        desc: "Lachung for Yumthang, Lachen for Gurudongmar. Permits are arranged in advance.",
        stops: [
          { label: "Gangtok", slug: "gangtok-travel-guide" },
          { label: "Lachung", slug: "lachung-travel-guide" },
          { label: "Yumthang", slug: "yumthang-valley-travel-guide" },
          { label: "Gurudongmar", slug: "gurudongmar-lake-travel-guide" },
        ],
      },
    ],
    nearby: ["west-bengal", "meghalaya", "assam"],
  },
];

const bySlug = new Map(destinationProfiles.map((p) => [p.slug, p]));

export function getDestinationProfile(slug: string) {
  return bySlug.get(slug);
}

// Homepage "Where will you go next?" grid, in commercial priority order.
export const homepageDestinationSlugs = [
  "kashmir",
  "rajasthan",
  "kerala",
  "goa",
  "himachal-pradesh",
  "uttarakhand",
  "leh-ladakh",
  "meghalaya",
  "andaman-nicobar",
  "karnataka",
  "madhya-pradesh",
  "gujarat",
];
