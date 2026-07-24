// src/app/blog/jammu-kashmir-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jammu & Kashmir Travel Guide: Srinagar, Gulmarg & Pahalgam",
  description:
    "The complete Jammu & Kashmir travel guide. Srinagar's Dal Lake and houseboats, Gulmarg's gondola and skiing, Pahalgam and Sonamarg valleys, Vaishno Devi, where to stay, what to eat, and a full 6-day itinerary.",
  keywords:
    "Jammu Kashmir travel guide, Srinagar Dal Lake, Gulmarg gondola, Pahalgam valley, Sonamarg, Vaishno Devi yatra, Kashmir houseboat, Kashmir itinerary, Kashmir best time to visit",
  openGraph: {
    title: "Jammu & Kashmir Travel Guide: Srinagar, Gulmarg & Pahalgam",
    description:
      "Houseboats on Dal Lake, snow-capped meadows, and valleys that earned Kashmir the name 'Paradise on Earth' — the complete travel guide.",
    url: "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Houseboats on Dal Lake with snow-capped mountains in the background, Srinagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jammu & Kashmir Travel Guide: Srinagar, Gulmarg & Pahalgam",
    description:
      "Dal Lake houseboats, Gulmarg's gondola, and valleys that earned Kashmir the name 'Paradise on Earth' — the complete guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Jammu & Kashmir Travel Guide: Srinagar, Gulmarg & Pahalgam",
          description: "The complete Jammu & Kashmir travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
          datePublished: "2026-07-16",
          dateModified: "2026-07-16",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/favicon.ico",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Jammu and Kashmir",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Jammu and Kashmir",
              addressCountry: "IN",
            },
          },
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
                name: "Blog",
                item: "https://club.kudozz.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Jammu & Kashmir Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Jammu & Kashmir?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "srinagar", title: "Srinagar & Dal Lake", level: 2 },
  {
    id: "gulmarg-pahalgam-sonamarg",
    title: "Gulmarg, Pahalgam & Sonamarg",
    level: 2,
  },
  { id: "vaishno-devi", title: "Vaishno Devi (Jammu)", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "6-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── J&K-specific gear ───────────────────────────────────────────────────
const JK_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for houseboat mornings, high-altitude cold, and snow at Gulmarg and Sonamarg",
    emoji: "🏔️",
    items: [
      {
        name: "Heavy-Duty Down Jacket",
        description:
          "Temperatures at Gulmarg and Sonamarg drop well below what Srinagar sees, especially outside the peak summer window — a proper down jacket beats layering with regular sweaters.",
        price: "₹3,499",
        rating: 4.6,
        reviews: "9.4k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("down+jacket+heavy+winter"),
        tag: "High-altitude essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Even in April and October, Gulmarg's gondola takes you well above the snow line — visitors without proper insulation cut their trip up the mountain short.",
      },
      {
        name: "Waterproof Snow Boots",
        description:
          "Gulmarg's slopes and Sonamarg's glacier viewpoints involve walking on packed snow and slush — regular sneakers soak through within minutes.",
        price: "₹2,299",
        rating: 4.5,
        reviews: "6.1k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("waterproof+snow+boots"),
        tag: "Snow essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Rental gumboots are available at Gulmarg, but they're often ill-fitting and cold by midday — your own pair is worth carrying for a multi-day trip.",
      },
      {
        name: "Thermal Base Layer Set",
        description:
          "A wicking thermal layer under regular clothing makes the difference on early-morning houseboat starts and gondola rides, where wind chill adds noticeably to the cold.",
        price: "₹899",
        rating: 4.4,
        reviews: "7.8k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("thermal+base+layer+set"),
        tag: "Layering essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Kashmir's weather shifts quickly between valley floor and higher altitude — thermals let you regulate without carrying multiple heavy jackets.",
      },
      {
        name: "Polarized Sunglasses",
        description:
          "Snow glare at Gulmarg and Sonamarg is intense enough to cause genuine eye strain within an hour without proper UV and glare protection.",
        price: "₹799",
        rating: 4.4,
        reviews: "5.6k",
        image: "🕶️",
        affiliateUrl: amazonSearchUrl("polarized+sunglasses+snow"),
        tag: "Snow essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Reflected sunlight off snow is far more intense than regular daylight — this is the one item visitors most often forget and most regret forgetting.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Cold weather drains phone batteries noticeably faster, and Gulmarg's gondola queues and Dal Lake shikara rides both eat into battery for photos and navigation.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Cold-weather essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Batteries lose charge faster in cold conditions — a power bank is more necessary here than in warmer destinations.",
      },
      {
        name: "Basic First Aid & Altitude Kit",
        description:
          "Gulmarg's gondola reaches over 3,900m at the upper station — mild altitude symptoms are common for visitors coming straight from sea level.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit+altitude"),
        tag: "High-altitude essential",
        tagColor: "bg-red-100 text-red-700",
        why: "The Gulmarg gondola's second phase gains altitude fast — carrying basic altitude relief (and staying hydrated) helps first-time high-altitude travellers.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JammuKashmirGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Houseboats on Dal Lake with snow-capped mountains in the background, Srinagar"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10"
            aria-label="Breadcrumb"
          >
            <ol
              className="flex items-center gap-2 text-xs text-white/55"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                {
                  label: "Jammu & Kashmir",
                  href: "/blog?category=jammu-kashmir",
                },
                { label: "Travel Guide", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/20">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Jammu & Kashmir",
                "Srinagar",
                "Gulmarg",
                "Pahalgam",
                "Dal Lake",
                "Vaishno Devi",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Jammu & Kashmir Travel Guide: Srinagar, Gulmarg & Pahalgam
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Houseboats on Dal Lake, gondola rides above the snow line, and
              valleys that earned Kashmir its old name, "Paradise on Earth" —
              this is the complete guide.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Jammu & Kashmir, India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,000 words",
                },
              ].map((m) => (
                <span
                  key={m.text}
                  className="flex items-center gap-1.5 text-sm text-white/55"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
                  </svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Three-Column Layout ───────────────────────────────────────── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            {/* LEFT — TOC */}
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* CENTER — Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Why Jammu & Kashmir?</h2>
                  <p>
                    Few Indian destinations carry the weight of expectation that{" "}
                    <strong>Jammu & Kashmir</strong> does — and few actually
                    deliver on it the way this region does. Poplar- and
                    willow-lined Srinagar sits around <strong>Dal Lake</strong>,
                    where houseboats and shikara boats have hosted travellers
                    for well over a century. An hour or two beyond, the valley
                    opens into <strong>Gulmarg</strong>,{" "}
                    <strong>Pahalgam</strong>, and <strong>Sonamarg</strong> —
                    alpine meadows, pine forests, and glacier-fed rivers that
                    together justify the region's old Mughal-era name, "Paradise
                    on Earth."
                  </p>
                  <p>
                    Further south, <strong>Jammu</strong> is the region's winter
                    capital and gateway to the <strong>Vaishno Devi</strong>{" "}
                    shrine, one of India's most-visited pilgrimage sites — a
                    very different, more devotional counterpart to the valley's
                    scenery-driven tourism.
                  </p>
                  <p>
                    Tourist infrastructure across the region has expanded
                    substantially in recent years, and Srinagar in particular
                    handles high visitor volume smoothly during peak season —
                    but conditions and access can shift with the security
                    situation, so checking current advisories before booking is
                    worth the extra step here more than in most Indian
                    destinations.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Jammu & Kashmir at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Jammu & Kashmir (UT)",
                        },
                        {
                          icon: "⛰️",
                          label: "Gulmarg Elevation",
                          value: "~2,650 m",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Apr–Jun, Sep–Oct",
                        },
                        {
                          icon: "❄️",
                          label: "Snow Season",
                          value: "Dec – Feb (Gulmarg)",
                        },
                        {
                          icon: "🛶",
                          label: "Known For",
                          value: "Dal Lake, Meadows, Vaishno Devi",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,000 – ₹8,000",
                        },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Jammu & Kashmir</h2>
                  <p>
                    Kashmir is unusual among Indian destinations in having two
                    genuinely distinct "best" seasons depending on whether you
                    want green valleys or snow.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🌷",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Spring bloom — our pick",
                        text: "Tulip gardens in Srinagar, mild temperatures (15–25°C), and meadows turning green after winter — arguably the most photogenic window of the year.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm with occasional rain",
                        text: "Pleasant daytime temperatures and lush valleys, with short monsoon showers — a good, less-crowded alternative to peak spring.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Autumn colours",
                        text: "Chinar trees across Srinagar turn deep red and gold — a distinct, less-touristed season that photographers rate as highly as spring.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Snow season at Gulmarg",
                        text: "Sub-zero temperatures and heavy snowfall make this the season for skiing and gondola rides at Gulmarg, though many higher routes close.",
                      },
                    ].map((s) => (
                      <div
                        key={s.season}
                        className={`${s.color} border rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span
                            className="font-bold text-stone-800 text-sm"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Our pick:</strong> Late April to early June for
                    tulip season and green meadows, or late December to February
                    if skiing and snow at Gulmarg is the priority — decide the
                    trip's purpose first, then pick the season.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jammu & Kashmir</h2>
                  <p>
                    Srinagar is the main gateway for valley tourism; Jammu
                    serves the southern region and the Vaishno Devi route.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Srinagar Airport has direct
                      flights from Delhi, Mumbai, Bangalore, and other major
                      cities — the fastest and most common way in. Jammu Airport
                      serves the southern region separately.
                    </li>
                    <li>
                      <strong>By Train:</strong> Jammu Tawi is the region's
                      major railhead, well connected to Delhi and other cities.
                      A rail line to Srinagar exists via the Banihal route for
                      onward regional travel.
                    </li>
                    <li>
                      <strong>By Road:</strong> The Jammu–Srinagar national
                      highway (~270 km) takes roughly 7–8 hours and passes
                      through the Jawahar Tunnel — a scenic but weather-
                      dependent route, occasionally closed for landslides or
                      snow.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly into Srinagar directly if
                    the valley is your main focus — it saves a full day versus
                    the Jammu–Srinagar road journey, which is worthwhile only if
                    you're also visiting Vaishno Devi.
                  </div>
                </section>

                {/* ── Srinagar ──────────────────────────────────────────── */}
                <section id="srinagar">
                  <h2>Srinagar & Dal Lake</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Shikara boat on Dal Lake at sunrise, Srinagar"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Srinagar</strong> is the valley's cultural and
                    logistical heart, built around <strong>Dal Lake</strong> and
                    its floating gardens, houseboats, and shikara traffic.
                  </p>
                  <ul>
                    <li>
                      <strong>Dal Lake houseboat stay:</strong> The classic
                      Srinagar experience — ornately carved wooden houseboats
                      moored on the lake, ranging from simple to genuinely
                      luxurious.
                    </li>
                    <li>
                      <strong>Shikara ride:</strong> A slow paddle-boat tour of
                      the lake, floating markets, and Nehru Park — best done at
                      sunrise for the calmest water and light.
                    </li>
                    <li>
                      <strong>Mughal Gardens:</strong> Nishat Bagh, Shalimar
                      Bagh, and Chashme Shahi — terraced Mughal-era gardens
                      overlooking the lake, particularly striking during spring
                      tulip season.
                    </li>
                    <li>
                      <strong>Jamia Masjid & Old City:</strong> A 14th-century
                      mosque with distinctive wooden architecture, at the heart
                      of Srinagar's older, less-visited quarters.
                    </li>
                    <li>
                      <strong>Shankaracharya Temple:</strong> A hilltop temple
                      offering panoramic views over the city and lake — best
                      visited for sunset.
                    </li>
                  </ul>
                </section>

                {/* ── Gulmarg, Pahalgam, Sonamarg ────────────────────────── */}
                <section id="gulmarg-pahalgam-sonamarg">
                  <h2>Gulmarg, Pahalgam & Sonamarg</h2>
                  <p>
                    The three classic valley day-trips from Srinagar, each with
                    a distinct character — most visitors cover all three across
                    separate days.
                  </p>
                  <ul>
                    <li>
                      <strong>Gulmarg:</strong> Home to the{" "}
                      <strong>Gulmarg Gondola</strong>, one of the world's
                      highest cable cars, rising to Kongdoori and then Apharwat
                      Peak (~3,979m). Snow-covered even outside peak winter at
                      the upper station, and India's premier skiing destination
                      from December to February.
                    </li>
                    <li>
                      <strong>Pahalgam:</strong> A pine-forested valley along
                      the Lidder River, the base for the Amarnath Yatra and a
                      calmer alternative to Gulmarg — good for short treks,
                      horseback rides, and Betaab Valley and Aru Valley day
                      trips.
                    </li>
                    <li>
                      <strong>Sonamarg:</strong> "Meadow of Gold," roughly
                      2,800m elevation, known for the Thajiwas Glacier
                      (reachable by a short pony or walking trail) and as the
                      gateway to the Zoji La pass toward Ladakh.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Do Gulmarg on a clear day — the
                    gondola's second phase closes in poor weather, and the views
                    are the entire point of the trip up.
                  </div>
                </section>

                {/* ── Vaishno Devi ──────────────────────────────────────── */}
                <section id="vaishno-devi">
                  <h2>Vaishno Devi (Jammu)</h2>
                  <p>
                    One of India's most-visited pilgrimage sites,{" "}
                    <strong>Vaishno Devi</strong> sits in the Trikuta Mountains
                    near Katra, reached by a roughly 12-13 km uphill trek (or
                    pony/palki/helicopter options) from the base camp.
                  </p>
                  <ul>
                    <li>
                      <strong>Registration:</strong> A free Yatra Registration
                      Slip (RFID card) is mandatory, obtainable online or at
                      counters in Katra — required to start the trek.
                    </li>
                    <li>
                      <strong>Trek options:</strong> The traditional route is a
                      paved uphill path; helicopter services from Katra to
                      Sanjichhat cut most of the climb for a fee.
                    </li>
                    <li>
                      <strong>Best time:</strong> The shrine operates
                      year-round, but March–October offers the most comfortable
                      trekking conditions; winter brings cold and occasional
                      snow on the route.
                    </li>
                    <li>
                      <strong>Katra:</strong> The base town has ample budget to
                      mid-range accommodation and is the standard overnight stop
                      before or after the yatra.
                    </li>
                  </ul>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Jammu & Kashmir</h2>
                  <ul>
                    <li>
                      <strong>Ride the Gulmarg Gondola:</strong> India's most
                      dramatic cable car ride, climbing well above the snow line
                      even outside winter.
                    </li>
                    <li>
                      <strong>Stay a night on a Dal Lake houseboat:</strong>A
                      genuinely distinct experience, best paired with a sunrise
                      shikara ride the next morning.
                    </li>
                    <li>
                      <strong>Walk the Mughal Gardens:</strong> Especially
                      rewarding during spring tulip bloom or autumn chinar
                      colour.
                    </li>
                    <li>
                      <strong>Trek to Thajiwas Glacier:</strong> A short,
                      accessible glacier walk from Sonamarg, doable without
                      technical trekking experience.
                    </li>
                    <li>
                      <strong>Shop the Srinagar markets:</strong> Pashmina
                      shawls, papier-mâché, and Kashmiri walnut wood carving —
                      bargain and buy from established shops to avoid
                      counterfeit pashmina.
                    </li>
                    <li>
                      <strong>Vaishno Devi trek:</strong> A devotional overnight
                      or day trek from Katra, worthwhile even for travellers
                      primarily focused on the valley's scenery.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Srinagar's houseboats are the signature stay, but hotel
                    options across the region span budget to genuinely
                    luxurious.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Standard Dal Lake houseboats",
                          "Budget hotels, Srinagar",
                          "Guesthouses, Pahalgam & Gulmarg",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹7,000/night",
                        picks: [
                          "Deluxe Dal Lake houseboats",
                          "Hotel Heemal, Pahalgam",
                          "Hotel Highlands Park, Gulmarg",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹10,000–₹30,000+/night",
                        picks: [
                          "The Lalit Grand Palace, Srinagar",
                          "Vivanta Dal View, Srinagar",
                          "The Khyber Himalayan Resort, Gulmarg",
                        ],
                      },
                    ].map((t) => (
                      <div
                        key={t.tier}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div
                          className="font-bold text-stone-900 mb-1"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {t.tier}
                        </div>
                        <div
                          className="text-xs text-forest-600 font-medium mb-3"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li
                              key={p}
                              className="text-xs text-stone-600"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    At least one night on a Dal Lake houseboat is worth building
                    into any Srinagar stay — few Indian experiences are as
                    distinct, and it's the one thing genuinely unique to this
                    city.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Jammu & Kashmir</h2>
                  <p>
                    Kashmiri cuisine is rich, meat-forward, and built around the
                    multi-course <strong>Wazwan</strong> tradition — distinct
                    from anything else in North India.
                  </p>
                  <ul>
                    <li>
                      <strong>Rogan Josh:</strong> A rich, red Kashmiri mutton
                      curry, one of the best-known dishes of the region.
                    </li>
                    <li>
                      <strong>Yakhni:</strong> A yogurt-based, milder mutton
                      curry — a good contrast to the heavier Rogan Josh.
                    </li>
                    <li>
                      <strong>Wazwan:</strong> A traditional multi-course feast
                      of Kashmiri meat dishes, served at weddings and
                      increasingly at dedicated restaurants for visitors.
                    </li>
                    <li>
                      <strong>Kahwa:</strong> Traditional saffron and
                      cardamom-spiced green tea, served everywhere from
                      houseboats to street stalls — a genuinely warming drink in
                      the cold.
                    </li>
                    <li>
                      <strong>Kashmiri bread:</strong> Sheermal, bakarkhani, and
                      girda from local bakeries — best bought fresh in the
                      morning from Srinagar's old city.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>6-Day Jammu & Kashmir Itinerary</h2>
                  <p>
                    Six days covers Srinagar and the three main valley day-trips
                    comfortably, without adding Vaishno Devi (add 2 more days
                    from Jammu if including it).
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Dal Lake",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive Srinagar, check into a houseboat",
                          "Afternoon: Shikara ride, floating market",
                          "Evening: Sunset at Nehru Park",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Srinagar City & Gardens",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Mughal Gardens — Nishat Bagh, Shalimar Bagh",
                          "Afternoon: Jamia Masjid, Old City walk",
                          "Evening: Shankaracharya Temple sunset",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Gulmarg Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Full day: Gulmarg Gondola, both phases",
                          "Snow activities or skiing (winter season)",
                          "Return to Srinagar by evening",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Pahalgam Day Trip",
                        color: "bg-stone-600",
                        activities: [
                          "Full day: Betaab Valley, Aru Valley",
                          "Lidder River walk, horseback ride (optional)",
                          "Return to Srinagar by evening",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Sonamarg Day Trip",
                        color: "bg-purple-600",
                        activities: [
                          "Full day: Thajiwas Glacier walk",
                          "Sindh River valley scenery",
                          "Return to Srinagar by evening",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Shopping & Departure",
                        color: "bg-amber-800",
                        activities: [
                          "Morning: Pashmina and papier-mâché shopping",
                          "Late morning: Final houseboat breakfast",
                          "Depart from Srinagar Airport",
                        ],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4
                            className="font-bold text-stone-900 mb-3"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                                  ✓
                                </span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map(
                            (h) => (
                              <th
                                key={h}
                                className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                              >
                                {h}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "Accommodation/night",
                            "₹1,500",
                            "₹4,500",
                            "₹15,000",
                          ],
                          ["Food/day", "₹600", "₹1,500", "₹3,000"],
                          [
                            "Local transport / day-trip cabs",
                            "₹1,500",
                            "₹2,500",
                            "₹4,000",
                          ],
                          [
                            "Gondola / activities",
                            "₹1,200",
                            "₹2,000",
                            "₹3,500",
                          ],
                          ["Daily total", "₹4,800", "₹10,500", "₹25,500"],
                          [
                            "6-Day trip total",
                            "₹28,800",
                            "₹63,000",
                            "₹1,53,000",
                          ],
                        ].map(([exp, b, m, l], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {b}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {m}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {l}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Excludes flights/train to Srinagar or Jammu. Gondola
                    tickets and day-trip cab hire (Gulmarg, Pahalgam, Sonamarg)
                    are typically the largest variable costs.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Jammu & Kashmir</h2>
                  <ul>
                    <li>
                      <strong>Check current travel advisories:</strong>
                      Conditions in the region can shift — check official
                      advisories before booking non-refundable travel, more so
                      than for most Indian destinations.
                    </li>
                    <li>
                      <strong>Hire cabs through registered unions:</strong>
                      Day trips to Gulmarg, Pahalgam, and Sonamarg use fixed
                      local taxi-union rates — book through your hotel to avoid
                      overpaying.
                    </li>
                    <li>
                      <strong>Buy pashmina from established shops:</strong>
                      Counterfeit "pashmina" is common in tourist-heavy markets
                      — buy from reputed stores with authenticity certification.
                    </li>
                    <li>
                      <strong>Pack for cold regardless of season:</strong>
                      Gulmarg and Sonamarg run noticeably colder than Srinagar
                      even in summer — carry a proper jacket year-round.
                    </li>
                    <li>
                      <strong>Register early for Vaishno Devi:</strong>
                      The Yatra Registration Slip is mandatory and queues at
                      Katra can be long during peak pilgrimage season.
                    </li>
                    <li>
                      <strong>
                        Book houseboats directly or through your hotel:
                      </strong>{" "}
                      Avoid unsolicited approaches at the airport or train
                      station — verify through official tourism department
                      listings instead.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Check current travel advisories before booking",
                          "Spend at least one night on a Dal Lake houseboat",
                          "Book day-trip cabs through registered taxi unions",
                          "Carry warm layers even in summer months",
                          "Buy pashmina from certified, established shops",
                          "Register early for the Vaishno Devi yatra",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-red-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>❌</span> Don't
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Book non-refundable travel without checking advisories",
                          "Buy pashmina from unverified street vendors",
                          "Underestimate the cold at Gulmarg and Sonamarg",
                          "Skip yatra registration for Vaishno Devi",
                          "Rely on cards outside Srinagar's main markets",
                          "Rush the valley day trips into a single day each way",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Jammu & Kashmir",
                  "Srinagar",
                  "Gulmarg",
                  "Pahalgam",
                  "Sonamarg",
                  "Dal Lake",
                  "Vaishno Devi",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={JK_GEAR}
                destination="Jammu & Kashmir"
              />

              <RelatedPostsGrid currentSlug="jammu-kashmir-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jammu-kashmir-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
