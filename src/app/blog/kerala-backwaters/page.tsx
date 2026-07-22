// src/app/blog/kerala-backwaters/page.tsx
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
  title: "Kerala Backwaters Guide: Houseboats, Routes, Villages & Tips",
  description:
    "The complete Kerala Backwaters travel guide. Everything you need — Alleppey vs Kumarakom vs Kollam, houseboat booking, the Kuttanad route, village life, food, where to stay, and a complete 4-day itinerary through the 900-km backwater network.",
  keywords:
    "Kerala backwaters, Alleppey houseboat, Kumarakom backwaters, Kuttanad, Kerala houseboat booking, Vembanad Lake, Kollam Alleppey ferry, backwater village tour, Kerala itinerary, Munroe Island",
  openGraph: {
    title: "Kerala Backwaters Guide: Houseboats, Routes, Villages & Tips",
    description:
      "A 900-km network of lagoons, canals and lakes explored by houseboat — the complete guide to Kerala's backwaters.",
    url: "https://club.kudozz.in/blog/kerala-backwaters",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/related/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Kerala backwaters — traditional houseboat on Vembanad Lake at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerala Backwaters Guide",
    description:
      "Houseboats, coconut palms, and village life on the water — the complete Kerala backwaters guide.",
    images: ["/images/related/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kerala-backwaters",
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
            "Kerala Backwaters Guide: Houseboats, Routes, Villages & Tips",
          description: "The complete Kerala Backwaters travel guide.",
          image: "https://club.kudozz.in/images/related/spiti-valley.jpg",
          datePublished: "2026-06-30",
          dateModified: "2026-07-12",
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
            "@id": "https://club.kudozz.in/blog/kerala-backwaters",
          },
          about: {
            "@type": "Place",
            name: "Kerala Backwaters",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Kerala",
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
                name: "Kerala Backwaters Guide",
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
  { id: "introduction", title: "Why the Kerala Backwaters?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "geography", title: "Understanding the Backwaters", level: 2 },
  { id: "regions", title: "Choosing Your Base", level: 2 },
  { id: "alleppey", title: "→ Alleppey (Alappuzha)", level: 3 },
  { id: "kumarakom", title: "→ Kumarakom", level: 3 },
  { id: "kollam", title: "→ Kollam", level: 3 },
  { id: "munroe", title: "→ Munroe Island", level: 3 },
  { id: "houseboats", title: "Houseboats — The Complete Guide", level: 2 },
  { id: "houseboat-types", title: "→ Types & What to Expect", level: 3 },
  { id: "booking", title: "→ Booking Tips", level: 3 },
  { id: "village-life", title: "Village Life & Canoe Tours", level: 2 },
  { id: "kuttanad", title: "Kuttanad — Below Sea Level", level: 2 },
  { id: "wildlife", title: "Birdwatching & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay (Land-Based)", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Backwaters-specific gear ───────────────────────────────────────────────────
const BACKWATERS_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear that makes a houseboat trip genuinely better",
    emoji: "🛶",
    items: [
      {
        name: "Lightweight Binoculars (Compact 8x21)",
        description:
          "The backwaters host over 140 bird species — kingfishers, herons, darters, and migratory waders. A compact pair fits in any day bag and transforms the canoe village tours from pleasant to genuinely thrilling.",
        price: "₹1,899",
        rating: 4.4,
        reviews: "2.4k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("compact+binoculars+8x21+travel"),
        tag: "Birdwatching essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "The slow pace of a houseboat is perfect for birdwatching, but the birds are often distant on the water. Compact binoculars cost little and change the whole texture of the cruise.",
      },
      {
        name: "Reef-Safe Mosquito Repellent Spray",
        description:
          "The backwaters are humid wetland — mosquitoes are a genuine evening presence, especially at dusk near Kumarakom and the smaller canals. A DEET-based repellent is non-negotiable for evening deck time.",
        price: "₹249",
        rating: 4.3,
        reviews: "9.1k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+spray+DEET+travel"),
        tag: "Evening essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Houseboats moor for the night near villages and paddy fields — exactly where mosquitoes are most active at dusk. Apply before sunset, not after the first bite.",
      },
      {
        name: "Quick-Dry Travel Towel",
        description:
          "Houseboat bathrooms are functional but basic, and humidity means regular towels never fully dry between uses. A microfiber quick-dry towel is compact, hygienic, and dries in under an hour.",
        price: "₹599",
        rating: 4.5,
        reviews: "5.6k",
        image: "🧖",
        affiliateUrl: amazonSearchUrl("quick+dry+microfiber+travel+towel"),
        tag: "Humidity solution",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Kerala's coastal humidity means cotton towels stay damp for days on a multi-day houseboat trip. Microfiber dries fast and packs to the size of a water bottle.",
      },
      {
        name: "Dry Bag (10L, Waterproof)",
        description:
          "Canoe tours into the narrow village canals involve low bridges, splashing paddles, and occasional unexpected dips. A dry bag protects phones, cameras, and documents during these excursions.",
        price: "₹899",
        rating: 4.5,
        reviews: "3.8k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("waterproof+dry+bag+10L"),
        tag: "Canoe tour essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The narrow canal canoe tours are the highlight of any backwaters trip — and the most likely place for your phone to get wet from a splash or sudden tilt.",
      },
      {
        name: "Polarised Sunglasses",
        description:
          "Polarised lenses cut the glare off the water dramatically — essential for comfortable hours on deck and for actually seeing fish and bird activity beneath the surface glare.",
        price: "₹799",
        rating: 4.4,
        reviews: "6.2k",
        image: "🕶️",
        affiliateUrl: amazonSearchUrl("polarised+sunglasses+travel"),
        tag: "Glare reduction",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Hours of houseboat deck time with sun reflecting off flat water causes eye strain fast. Polarised lenses cut that glare and make the whole experience more comfortable.",
      },
      {
        name: "Reusable Water Bottle (1L Insulated)",
        description:
          "Kerala's coastal heat and humidity mean steady hydration matters, and most houseboats don't stock enough bottled water for a full day. An insulated bottle keeps water cold through the afternoon heat.",
        price: "₹699",
        rating: 4.5,
        reviews: "11.3k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+1L+travel"),
        tag: "Coastal heat",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Houseboat itineraries rarely stop at shops. Bring your own bottle and refill from the boat's filtered water rather than relying on single-use plastic bottles sold onboard.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KeralaBackwatersPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/kerala/hero.jpg"
              alt="Kerala backwaters — traditional houseboat gliding through palm-lined canals"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent" />
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
                { label: "Kerala", href: "/blog?category=kerala" },
                { label: "Backwaters", href: null },
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
                "Kerala",
                "Backwaters",
                "Houseboats",
                "Alleppey",
                "Kumarakom",
                "Village Life",
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
              Kerala Backwaters Guide: Houseboats, Routes, Villages & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 900-kilometre network of lagoons, canals, and lakes where life
              moves at the pace of a paddle — coconut palms, toddy shops, and
              villages glimpsed entirely from water level.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "17 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Alappuzha, Kerala",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,900 words",
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
                  <h2>Why the Kerala Backwaters?</h2>
                  <p>
                    There's a particular stillness that settles over you on a
                    Kerala houseboat — usually around the second hour, somewhere
                    past the busy stretch near Alleppey town, when the canal
                    narrows, the engine slows, and the only sounds left are
                    water against the hull, a distant temple bell, and someone
                    in a paddy field calling to their water buffalo. This is
                    what people mean when they say the
                    <strong> Kerala backwaters</strong> are less a destination
                    and more a deceleration.
                  </p>
                  <p>
                    The backwaters are a 900-km network of interconnected lakes,
                    canals, rivers, and lagoons running parallel to the Arabian
                    Sea coast through central Kerala — a vast natural and
                    human-engineered water system that has shaped how people
                    here have lived, farmed, and traded for centuries. Coconut
                    palms lean over the water on every side. Paddy fields
                    stretch below sea level, held back by ancient mud
                    embankments. Village life — washing clothes on stone steps,
                    fishing with hand nets, children paddling to school in tiny
                    canoes — happens entirely at water's edge, visible from a
                    passing boat in a way that feels like a privileged glimpse
                    rather than a tourist attraction.
                  </p>
                  <p>
                    The <strong>houseboat</strong> (kettuvallam) is how most
                    people experience this — converted rice barges,
                    traditionally built without a single nail using coir rope
                    and jackwood, now refitted with bedrooms, bathrooms, and
                    kitchens, drifting slowly through this water-world for a day
                    or overnight. It is one of the most relaxing travel
                    experiences in India and also one of the easiest to do badly
                    — this guide is built to help you do it well.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛶</span> Kerala Backwaters at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Central Kerala coast",
                        },
                        {
                          icon: "🌊",
                          label: "Network length",
                          value: "~900 km of waterways",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Sep – Mar" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Kochi (CCJ, 85 km)",
                        },
                        {
                          icon: "🛶",
                          label: "Main hub",
                          value: "Alleppey (Alappuzha)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,000 – ₹15,000",
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
                  <h2>Best Time to Visit the Kerala Backwaters</h2>
                  <p>
                    Kerala has a tropical monsoon climate with two distinct
                    rainy seasons. The backwaters can technically be visited
                    year-round, but the experience varies enormously by season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Sep – Nov",
                        emoji: "🌿",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Post-monsoon lushness — our pick",
                        text: "The southwest monsoon ends in September, leaving the backwaters at their greenest and fullest. Water levels are high, paddy fields are vivid green, and the famous Nehru Trophy Snake Boat Race takes place in Alleppey on the second Saturday of August (just before this window opens).",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — driest, most popular",
                        text: "Comfortable temperatures (22–32°C), minimal rain, and the busiest season for houseboat tourism. December–January sees premium pricing and full bookings — reserve houseboats at least 3–4 weeks ahead. The classic 'postcard Kerala' season.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌡️",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot but quieter and cheaper",
                        text: "Temperatures climb to 33–37°C with high humidity. Fewer tourists mean better houseboat rates (sometimes 30% lower than peak season) and more flexibility with last-minute bookings. Air-conditioned cabins become genuinely necessary rather than a luxury.",
                      },
                      {
                        season: "Jun – Aug (Monsoon)",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — special but limited",
                        text: "Kerala's monsoon is dramatic and the backwaters at full flood are spectacular — but heavy rain limits deck time and some smaller canals become difficult to navigate. Many Ayurvedic treatment packages specifically target this season (monsoon is considered ideal for Ayurveda in Kerala tradition).",
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
                    <strong>Our pick:</strong> Late September to November — the
                    backwaters are at their lushest right after the monsoon,
                    crowds are lower than the December peak, and prices haven't
                    yet hit the holiday premium. If you can time it around the
                    Nehru Trophy Boat Race (August, Alleppey), the energy in
                    town is extraordinary.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Kerala Backwaters</h2>
                  <p>
                    The main gateway is <strong>Alleppey (Alappuzha)</strong>,
                    though Kumarakom and Kollam are also viable bases. All are
                    well connected via Kochi, Kerala's main transport hub.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Cochin International Airport
                      (COK) is the main gateway, 85 km from Alleppey and 75 km
                      from Kumarakom. Daily flights from Delhi, Mumbai,
                      Bangalore, Chennai, and most major Indian cities. From the
                      airport, taxis to Alleppey take roughly 2 hours
                      (₹1,800–₹2,500).
                    </li>
                    <li>
                      <strong>By Train:</strong> Alappuzha railway station is
                      directly connected to Kochi (1.5 hrs), Trivandrum (2.5
                      hrs), and major cities further afield including Bangalore,
                      Chennai, and Mumbai (overnight trains). Kollam Junction is
                      also well served and useful if basing yourself there
                      instead.
                    </li>
                    <li>
                      <strong>By Road:</strong> KSRTC buses connect Kochi to
                      Alleppey in roughly 1.5–2 hours (₹100–₹150). Private taxis
                      from Kochi airport or city are the most convenient option
                      for groups or those with luggage.
                    </li>
                    <li>
                      <strong>Inter-town backwater ferries:</strong> A genuinely
                      memorable way to travel between Alleppey and Kollam (or
                      vice versa) is the public passenger ferry that runs the
                      length of the backwaters — 8 hours, ₹400, departing 10:30
                      AM daily. This isn't a tourist boat; it's the actual
                      public transport Keralites use, and it covers some of the
                      most beautiful stretches of the entire backwater network.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Take the Alleppey–Kollam public
                    ferry as a day in itself rather than just a transport link.
                    At ₹400 for 8 hours through some of the quietest, most
                    beautiful parts of the backwater network, it is one of the
                    best value travel experiences in India — better than many
                    paid backwater tours.
                  </div>
                </section>

                {/* ── Geography ─────────────────────────────────────────── */}
                <section id="geography">
                  <h2>Understanding the Backwaters</h2>
                  <p>
                    The backwaters are formed where the Arabian Sea meets the
                    network of 44 rivers flowing down from the Western Ghats.
                    Sand bars built up by ocean currents created a series of
                    lakes and lagoons running parallel to the coastline, which
                    over centuries were connected and expanded by canals — both
                    for transport and to drain land for rice cultivation.
                  </p>
                  <p>
                    The largest of these water bodies is{" "}
                    <strong>Vembanad Lake</strong> — at 96.5 km long, it's the
                    longest lake in India and the centrepiece of the entire
                    backwater system. Alleppey, Kumarakom, and Kottayam all sit
                    on or near its shores. From Vembanad, a maze of smaller
                    canals branches out into the surrounding paddy land — this
                    is the
                    <strong> Kuttanad</strong> region, the "rice bowl of
                    Kerala," where farming happens below sea level, held back by
                    an extraordinary system of mud embankments (bunds) that has
                    been maintained for over a century.
                  </p>
                  <p>
                    Understanding this geography helps explain why your
                    houseboat experience differs so much depending on where you
                    start: Alleppey gives you the classic wide-lake and
                    narrow-canal combination; Kumarakom is calmer, more
                    bird-rich, and slightly more upmarket; Kollam connects you
                    to a quieter, less commercialised southern stretch.
                  </p>
                </section>

                {/* ── Choosing Your Base ────────────────────────────────── */}
                <section id="regions">
                  <h2>Choosing Your Base</h2>

                  <section id="alleppey">
                    <h3>Alleppey (Alappuzha)</h3>
                    <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/kerala/alleppey.jpg"
                        alt="Alleppey backwaters with houseboats and palm trees"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      Called the "Venice of the East" by British administrators
                      (a comparison that undersells what's actually unique about
                      it), <strong>Alleppey</strong> is the undisputed capital
                      of backwater tourism — the largest concentration of
                      houseboats in Kerala, the widest range of routes and
                      prices, and the most developed tourist infrastructure.
                      This is both its strength and its weakness: the main
                      channels near town can feel congested with boat traffic in
                      peak season, but the breadth of choice and the speed with
                      which you can be on the water make it the most practical
                      starting point for most visitors.
                    </p>
                    <p>
                      The town itself has a faded colonial charm — old coir
                      warehouses, a historic lighthouse, and a beach where the
                      famous Nehru Trophy Snake Boat Race finishes every August
                      in front of enormous crowds. Most houseboats depart from
                      Punnamada Lake, just north of the town centre.
                    </p>
                    <ul>
                      <li>
                        <strong>Best for:</strong> First-timers, widest choice
                        of houseboats and price points
                      </li>
                      <li>
                        <strong>Watch:</strong> The Nehru Trophy Snake Boat Race
                        (second Saturday of August)
                      </li>
                      <li>
                        <strong>Note:</strong> Choose a route that goes beyond
                        the main channel (ask your operator) — the narrower
                        village canals are where the real charm is
                      </li>
                    </ul>
                  </section>

                  <section id="kumarakom">
                    <h3>Kumarakom</h3>
                    <p>
                      On the eastern shore of Vembanad Lake, 16 km from
                      Kottayam, <strong>Kumarakom</strong> offers a more
                      tranquil, more upmarket alternative to Alleppey — fewer
                      houseboats, more open water, better bird-watching, and
                      some of the finest luxury resorts in South India.
                      Kumarakom's atmosphere is quieter and more deliberately
                      designed for relaxation rather than the bustling boat-
                      traffic energy near Alleppey town.
                    </p>
                    <p>
                      The <strong>Kumarakom Bird Sanctuary</strong>, a 14-acre
                      protected wetland on the lake shore, hosts migratory birds
                      from as far as Siberia between November and February —
                      egrets, darters, herons, teal, and the occasional rare
                      sighting draw serious birdwatchers here specifically.
                    </p>
                    <ul>
                      <li>
                        <strong>Best for:</strong> Couples, luxury travellers,
                        birdwatchers, those who prefer calm over crowds
                      </li>
                      <li>
                        <strong>Don't miss:</strong> Kumarakom Bird Sanctuary
                        (entry ₹30, best 6–9 AM)
                      </li>
                      <li>
                        <strong>Luxury picks:</strong> Coconut Lagoon, Kumarakom
                        Lake Resort, Taj Kumarakom — among India's finest
                        backwater resorts
                      </li>
                    </ul>
                  </section>

                  <section id="kollam">
                    <h3>Kollam</h3>
                    <p>
                      The southern gateway to the backwaters,{" "}
                      <strong>Kollam</strong>
                      connects to the <strong>Ashtamudi Lake</strong> system —
                      an eight-armed (ashta = eight, mudi = lake) estuarine
                      water body that's calmer and significantly less touristy
                      than the Alleppey region. This is where serious backwater
                      enthusiasts go for a quieter, more authentic experience,
                      and it's also the southern terminus of the famous
                      Alleppey- Kollam public ferry route.
                    </p>
                    <p>
                      Kollam's houseboat scene is smaller but high quality, with
                      several operators specialising in genuinely immersive
                      village-canal routes rather than the wider lake cruising
                      more common around Alleppey.
                    </p>
                    <ul>
                      <li>
                        <strong>Best for:</strong> Travellers who've done
                        Alleppey before, or those seeking lower crowds
                      </li>
                      <li>
                        <strong>Connects to:</strong> Munroe Island and the
                        southern backwater network
                      </li>
                    </ul>
                  </section>

                  <section id="munroe">
                    <h3>Munroe Island</h3>
                    <p>
                      A cluster of small islands at the confluence of the
                      Ashtamudi Lake and Kallada River, near Kollam,
                      <strong> Munroe Island</strong> (named after British
                      resident Colonel John Munro) is the place to go for a
                      genuinely off-the-houseboat-circuit experience — narrow
                      canoe canals through coconut groves and village paddy
                      fields, with almost none of the houseboat traffic found
                      further north.
                    </p>
                    <p>
                      Most visitors explore Munroe Island via a half-day canoe
                      tour rather than an overnight houseboat — paddling through
                      canals barely wide enough for the boat, passing
                      coir-making workshops, toddy tapping demonstrations, and
                      village homes where life continues exactly as it has for
                      generations.
                    </p>
                  </section>
                </section>

                {/* ── Houseboats ────────────────────────────────────────── */}
                <section id="houseboats">
                  <h2>Houseboats — The Complete Guide</h2>
                  <p>
                    The <strong>kettuvallam</strong> houseboat is the
                    centrepiece of any backwaters trip — and understanding the
                    options properly will dramatically improve your experience.
                  </p>

                  <section id="houseboat-types">
                    <h3>Types & What to Expect</h3>

                    <div className="overflow-x-auto my-6">
                      <table
                        className="w-full text-sm border-collapse"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <thead>
                          <tr className="bg-forest-50">
                            {[
                              "Type",
                              "Bedrooms",
                              "Price/night",
                              "AC",
                              "Best for",
                            ].map((h) => (
                              <th
                                key={h}
                                className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            [
                              "Standard (non-AC)",
                              "1",
                              "₹6,000–₹9,000",
                              "No",
                              "Budget travellers, couples",
                            ],
                            [
                              "Deluxe (AC)",
                              "1–2",
                              "₹9,000–₹15,000",
                              "Yes (bedroom)",
                              "Most couples and small families",
                            ],
                            [
                              "Premium / Luxury",
                              "2–3",
                              "₹15,000–₹30,000",
                              "Full AC",
                              "Special occasions, larger groups",
                            ],
                            [
                              "Day cruise (no stay)",
                              "—",
                              "₹1,500–₹3,000 pp",
                              "Optional",
                              "Short trips, those who dislike sleeping on water",
                            ],
                            [
                              "Shared/group boats",
                              "3–5",
                              "₹4,000–₹6,000 pp total",
                              "Varies",
                              "Groups splitting costs",
                            ],
                          ].map((row, i) => (
                            <tr
                              key={row[0]}
                              className={
                                i % 2 === 0 ? "bg-white" : "bg-stone-50"
                              }
                            >
                              {row.map((cell, j) => (
                                <td
                                  key={j}
                                  className={`p-3 border border-stone-200 text-stone-600 ${j === 0 ? "font-semibold text-stone-800" : ""}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p>
                      A typical overnight houseboat package includes lunch,
                      evening tea/snacks, dinner, and breakfast the next morning
                      — all prepared fresh onboard by a dedicated cook, usually
                      featuring Kerala specialties using fish bought directly
                      from passing fishing boats. The crew (captain, cook, and
                      sometimes an assistant) live separately at the rear of the
                      boat.
                    </p>
                    <p>
                      The standard route from Alleppey takes you through
                      Punnamada Lake, into Vembanad Lake briefly, then into the
                      quieter Kuttanad canal network for the overnight mooring,
                      returning the following morning. The boat moves slowly
                      throughout — this is not transport, it's an experience
                      designed around the journey itself.
                    </p>
                  </section>

                  <section id="booking">
                    <h3>Booking Tips</h3>
                    <ul>
                      <li>
                        <strong>
                          Book directly with operators when possible:
                        </strong>
                        Hotel and online travel agency commissions can add
                        15–25% to the price. Reputable direct-booking operators
                        (Lakes & Lagoons, Spice Backwaters, Xandari Houseboats)
                        offer better value and more route flexibility.
                      </li>
                      <li>
                        <strong>Read recent reviews carefully:</strong> The
                        houseboat industry has significant quality variation —
                        some boats are beautifully maintained, others are tired
                        and poorly cleaned. Filter reviews for the specific boat
                        name, not just the operator company.
                      </li>
                      <li>
                        <strong>Ask about the route, not just the boat:</strong>
                        Many operators run the same congested main-channel loop.
                        Specifically ask whether the route includes Kuttanad's
                        narrow village canals — this is where the real charm of
                        the backwaters lives, not the wide open lake.
                      </li>
                      <li>
                        <strong>Confirm what's included:</strong> Meals,
                        drinking water, and the overnight stay should be
                        standard. Alcohol, special dietary requests, and
                        extended itineraries (multi-day trips) are usually
                        extra. Get this in writing before paying.
                      </li>
                      <li>
                        <strong>Group bookings save significantly:</strong>A
                        houseboat priced for two costs roughly the same for four
                        — splitting costs across a small group dramatically
                        improves the value, especially for premium boats.
                      </li>
                      <li>
                        <strong>Off-peak negotiation:</strong> In the March– May
                        shoulder season, rates are negotiable — especially for
                        walk-in bookings at Alleppey's Punnamada Lake jetty
                        area, where competing operators will discount to fill
                        empty boats.
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Village Life ──────────────────────────────────────── */}
                <section id="village-life">
                  <h2>Village Life & Canoe Tours</h2>
                  <p>
                    The houseboat shows you the backwaters from the main
                    channels — but the smaller, narrower canals that houseboats
                    can't physically enter are where the most intimate village
                    life unfolds, and the best way to access them is by
                    traditional canoe (chundan vallam) with a local
                    paddler-guide.
                  </p>
                  <p>
                    A typical canoe village tour (2–3 hours, ₹600–₹1,200 per
                    person depending on group size) paddles silently through
                    canals barely wide enough for the boat, passing homes with
                    front steps directly on the water, women washing clothes,
                    children swimming and waving, fishermen with traditional
                    Chinese fishing nets, and small toddy shops where palm wine
                    is tapped fresh from coconut trees.
                  </p>
                  <ul>
                    <li>
                      <strong>Toddy tapping demonstration:</strong> Watch (and
                      often taste) the traditional process of climbing coconut
                      palms and collecting toddy — the mildly alcoholic palm sap
                      that's a Kerala staple. Many village tours include a stop
                      at a working toddy shop.
                    </li>
                    <li>
                      <strong>Coir making:</strong> Kuttanad has a long
                      tradition of coir (coconut fibre) rope and mat making —
                      small workshops along the canals demonstrate the
                      traditional spinning process by hand.
                    </li>
                    <li>
                      <strong>School run by canoe:</strong> In the early morning
                      and afternoon, you'll see local children paddling small
                      canoes to and from school — one of the most charming
                      sights in the backwaters and a genuine reminder this is a
                      living community, not a theme park.
                    </li>
                    <li>
                      <strong>Best operators:</strong> Most homestays and
                      smaller guesthouses in Kuttanad can arrange a local canoe
                      guide directly — often more authentic and better value
                      than booking through a houseboat company.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you only have one day, skip
                    the overnight houseboat and instead book a half-day canoe
                    village tour combined with a day cruise. You'll see more
                    genuine village life in 3 hours of canoeing than in 24 hours
                    on a large houseboat confined mostly to the wider channels.
                  </div>
                </section>

                {/* ── Kuttanad ──────────────────────────────────────────── */}
                <section id="kuttanad">
                  <h2>Kuttanad — Farming Below Sea Level</h2>
                  <p>
                    <strong>Kuttanad</strong>, the "rice bowl of Kerala," is one
                    of the very few places on earth where farming happens below
                    sea level — some paddy fields here sit as much as 2.2 metres
                    below mean sea level, protected from the surrounding water
                    by an extraordinary network of mud embankments (bunds) and
                    pumping systems that has been maintained, in various forms,
                    for over a century.
                  </p>
                  <p>
                    The technique, called{" "}
                    <strong>"Pokkali" and "Punja" farming</strong> depending on
                    the specific method, involves draining sections of the
                    backwater lake bed, building protective bunds, and pumping
                    out seawater intrusion during the growing season — a
                    remarkable feat of low-tech hydraulic engineering that
                    produces some of Kerala's finest rice. Watching this system
                    in action — farmers working fields visibly lower than the
                    water level of the canal beside them — is one of the most
                    quietly astonishing things you'll see in the backwaters.
                  </p>
                  <p>
                    The best way to understand Kuttanad is from a houseboat
                    route that specifically traverses the smaller paddy-
                    adjacent canals (ask your operator) or via a guided village
                    walk that includes a stop at an active paddy field during
                    the growing or harvest season (June–September for the main
                    crop).
                  </p>
                </section>

                {/* ── Wildlife ──────────────────────────────────────────── */}
                <section id="wildlife">
                  <h2>Birdwatching & Wildlife</h2>
                  <p>
                    The Kerala backwaters, particularly around Kumarakom and the
                    quieter southern stretches near Kollam, host an
                    extraordinary range of resident and migratory bird life —
                    over 140 species recorded in the Kumarakom Bird Sanctuary
                    alone.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        bird: "Indian Darter",
                        emoji: "🦅",
                        season: "Year-round resident",
                        color: "bg-stone-50 border-stone-200",
                        note: "Often seen perched with wings outstretched to dry — a distinctive backwaters sight. Excellent underwater swimmers.",
                      },
                      {
                        bird: "Common Kingfisher",
                        emoji: "🐦",
                        season: "Year-round resident",
                        color: "bg-sky-50 border-sky-200",
                        note: "The flash of electric blue along the canal banks is one of the most common backwater sightings — look for them perched on overhanging branches.",
                      },
                      {
                        bird: "Siberian Crane (rare)",
                        emoji: "🕊️",
                        season: "Nov – Feb",
                        color: "bg-purple-50 border-purple-200",
                        note: "An exceptional rarity that occasionally appears at Kumarakom during peak migration — serious birders specifically time visits for this possibility.",
                      },
                      {
                        bird: "Cormorants",
                        emoji: "🦢",
                        season: "Year-round, peaks Nov–Mar",
                        color: "bg-forest-50 border-forest-200",
                        note: "Large breeding colonies form at Kumarakom Bird Sanctuary — thousands of birds nest in the same trees, an extraordinary spectacle at dawn.",
                      },
                      {
                        bird: "Indian Pond Heron",
                        emoji: "🦩",
                        season: "Year-round resident",
                        color: "bg-amber-50 border-amber-200",
                        note: "Extremely common — stands motionless on canal banks waiting for fish, then strikes with remarkable speed. Easy to spot from any moving boat.",
                      },
                      {
                        bird: "Otters",
                        emoji: "🦦",
                        season: "Occasional, dawn/dusk",
                        color: "bg-blue-50 border-blue-200",
                        note: "Smooth-coated otters are present but elusive — early morning canoe trips have the best chance of a sighting in quieter canal stretches.",
                      },
                    ].map((w) => (
                      <div
                        key={w.bird}
                        className={`border ${w.color} rounded-xl p-4`}
                      >
                        <div className="text-2xl mb-2">{w.emoji}</div>
                        <h4
                          className="font-bold text-stone-900 text-sm mb-1"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {w.bird}
                        </h4>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wide text-stone-500 block mb-2"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {w.season}
                        </span>
                        <p
                          className="text-xs text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {w.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Where to Stay (Land) ──────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay (Land-Based)</h2>
                  <p>
                    While the houseboat overnight is the headline experience,
                    most itineraries also include at least one land-based stay —
                    either before or after the houseboat, or instead of it for
                    those who prefer a more relaxed homestay immersion in
                    village life.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏡",
                        range: "₹800–₂,000/night",
                        picks: [
                          "Homestays in Kuttanad villages",
                          "Alleppey town guesthouses",
                          "Munroe Island family homestays",
                          "Kollam budget hotels (transit)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹6,000/night",
                        picks: [
                          "Punnamada Backwater Resort (Alleppey)",
                          "Mangrove Beach Resort",
                          "Vembanad Lakeside Resort",
                          "Lake Heritage Resort (Kumarakom)",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹10,000–₹35,000+/night",
                        picks: [
                          "Coconut Lagoon (Kumarakom — CGH Earth)",
                          "Kumarakom Lake Resort",
                          "Taj Kumarakom Resort & Spa",
                          "Marari Beach Resort (Mararikulam, nearby)",
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
                    A village homestay in Kuttanad — staying with a local family
                    in a traditional house surrounded by paddy fields — is often
                    the single most memorable accommodation choice in the
                    backwaters, and significantly cheaper than a houseboat
                    night.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in the Backwaters</h2>
                  <p>
                    Kerala's backwater cuisine is defined by fresh seafood,
                    coconut, and rice — meals are typically served on a banana
                    leaf and built around what was caught or harvested that
                    morning. Most houseboat meals are excellent and a highlight
                    of the trip in their own right.
                  </p>
                  <ul>
                    <li>
                      <strong>Karimeen (Pearl Spot fish):</strong> The signature
                      backwater fish — caught directly from Vembanad Lake,
                      usually fried whole with a turmeric and chilli marinade,
                      or cooked in a tangy fish curry (meen mulakittathu) with
                      kokum and red chillies. If your houseboat cook offers it,
                      accept immediately.
                    </li>
                    <li>
                      <strong>Sadya (full Kerala feast):</strong> A traditional
                      banana leaf meal with up to 20 dishes — rice, sambar,
                      rasam, avial, thoran, pachadi, and payasam for dessert.
                      Many houseboats serve a simplified version for lunch; the
                      full ceremonial version is reserved for festivals and
                      special occasions.
                    </li>
                    <li>
                      <strong>Appam with stew:</strong> Soft, fermented rice
                      pancakes with lacy, crisp edges, served with a mild
                      coconut milk vegetable or chicken stew. A classic Kerala
                      breakfast, often served on houseboats the morning after an
                      overnight stay.
                    </li>
                    <li>
                      <strong>Toddy:</strong> The mildly alcoholic, slightly
                      fizzy palm wine tapped fresh from coconut trees — best
                      tried at a working toddy shop on a village canoe tour
                      rather than bottled versions. Strength and flavour change
                      dramatically through the day as fermentation progresses.
                    </li>
                    <li>
                      <strong>Tapioca and fish curry:</strong> A Kuttanad staple
                      — boiled tapioca (cassava) served with spicy fish curry, a
                      combination that's been central to backwater village diets
                      for generations.
                    </li>
                    <li>
                      <strong>Fresh tender coconut water:</strong> Sold directly
                      from canoes paddling alongside houseboats or at every
                      village stop — ₹30–₹40, chopped open on the spot. The best
                      rehydration in the Kerala heat.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>4-Day Kerala Backwaters Itinerary</h2>
                  <p>
                    Four days gives you time for the full backwater experience —
                    an overnight houseboat, a village canoe tour, time in
                    Kumarakom for birdwatching, and a slower village homestay
                    night to balance the more touristic houseboat experience.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Alleppey Houseboat Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Arrive in Alleppey from Kochi (train, bus, or taxi)",
                          "Check houseboat boarding details, board by 12 PM",
                          "Onboard lunch as the boat departs Punnamada Lake",
                          "Afternoon cruise through Vembanad Lake into Kuttanad canals",
                          "Overnight mooring near a quiet village — sunset on deck",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Houseboat Morning & Kuttanad Village Walk",
                        color: "bg-forest-500",
                        activities: [
                          "Sunrise on deck — coffee as mist clears off the water",
                          "Breakfast (appam and stew) as the boat begins its return",
                          "Disembark Alleppey by 9 AM",
                          "Afternoon: Village walk or canoe tour into Kuttanad paddy fields",
                          "Evening: Check in to Alleppey or Kuttanad homestay",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Kumarakom — Birds & Backwater Resort",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Travel to Kumarakom (45 min from Alleppey)",
                          "Kumarakom Bird Sanctuary (6–9 AM ideal, but flexible)",
                          "Check in to resort, lunch on the lakeside",
                          "Afternoon: Village canoe tour through quieter Kumarakom canals",
                          "Sunset: Vembanad Lake viewpoint from resort or boat",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Munroe Island & Departure",
                        color: "bg-amber-600",
                        activities: [
                          "Early travel to Munroe Island (via Kollam, ~2 hrs)",
                          "Half-day canoe tour through Munroe's narrow village canals",
                          "Toddy tapping and coir making demonstrations",
                          "Lunch at a local village eatery",
                          "Onward travel to Kochi airport/station for departure",
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
                        <tr className="bg-forest-50">
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
                            "Houseboat (1 night, incl. meals)",
                            "₹6,500",
                            "₹11,000",
                            "₹22,000",
                          ],
                          [
                            "Land accommodation/night",
                            "₹1,000",
                            "₹3,500",
                            "₹15,000",
                          ],
                          [
                            "Food (non-houseboat days)",
                            "₹400",
                            "₹900",
                            "₹2,500",
                          ],
                          ["Village canoe tour", "₹600", "₹1,000", "₹1,500"],
                          ["Local transport/day", "₹300", "₹800", "₹2,500"],
                          [
                            "Bird sanctuary + activities",
                            "₹100",
                            "₹300",
                            "₹600",
                          ],
                          [
                            "4-Day trip total (approx)",
                            "₹14,000",
                            "₹27,000",
                            "₹65,000",
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
                    * Excludes flights to Kochi from outside Kerala. Houseboat
                    cost is the single biggest variable in any backwaters budget
                    — splitting it across a group of 4 dramatically reduces
                    per-person cost.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li>
                      <strong>
                        One night on a houseboat is enough for most people:
                      </strong>
                      The novelty and romance of the houseboat is real, but the
                      routes are repetitive after the first night. One
                      overnight, combined with a village canoe tour and a
                      land-based stay, gives the fullest experience without the
                      diminishing returns of multiple houseboat nights.
                    </li>
                    <li>
                      <strong>
                        Insist on a route through the narrow canals:
                      </strong>
                      Many budget operators run a route confined to the wider
                      main channel near Alleppey, which is far less interesting
                      than the village-adjacent canals of Kuttanad. Specifically
                      ask before booking.
                    </li>
                    <li>
                      <strong>Houseboats don't move at night:</strong> By law
                      and practical safety, houseboats moor for the evening
                      rather than cruising after dark. Don't expect a moving
                      boat experience overnight — the mooring spot is chosen for
                      tranquility, often near a quiet village.
                    </li>
                    <li>
                      <strong>Check for plastic policy:</strong> Vembanad Lake
                      has suffered significant pollution from tourism. Reputable
                      operators have moved to reusable water bottles and minimal
                      plastic — ask before booking, and bring your own reusable
                      bottle regardless.
                    </li>
                    <li>
                      <strong>Confirm AC if travelling March–May:</strong>
                      Non-AC houseboats become genuinely uncomfortable in the
                      hot season. Confirm cabin AC specifically (not just "the
                      boat has AC," which sometimes only refers to common
                      areas).
                    </li>
                    <li>
                      <strong>
                        Mosquito protection matters in the evening:
                      </strong>
                      The combination of standing water, paddy fields, and dusk
                      creates significant mosquito activity. Houseboats provide
                      nets, but applying repellent before sunset makes the
                      evening deck time far more pleasant.
                    </li>
                    <li>
                      <strong>Tip the houseboat crew:</strong> The captain and
                      cook work long hours preparing fresh meals and navigating
                      narrow canals. A tip of ₹500–₹1,000 per crew member for an
                      overnight stay is standard and appreciated.
                    </li>
                    <li>
                      <strong>Bring cash for village stops:</strong> Toddy
                      shops, small canoe vendors, and village artisans rarely
                      accept cards. Carry small denominations for these informal
                      transactions.
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
                          "Book a houseboat route that includes Kuttanad's narrow canals",
                          "Take the Alleppey–Kollam public ferry as an experience in itself",
                          "Try a village canoe tour even if you skip the houseboat",
                          "Visit Kumarakom Bird Sanctuary at dawn",
                          "Stay one night in a Kuttanad village homestay",
                          "Order Karimeen fish curry if your cook offers it",
                          "Tip the houseboat crew at the end of your stay",
                          "Bring your own reusable water bottle",
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
                          "Book a houseboat without checking reviews of that specific boat",
                          "Expect the houseboat to cruise at night",
                          "Book a non-AC cabin for March–May travel",
                          "Throw plastic or waste into the water — it's genuinely polluted already",
                          "Skip the village canoe tour in favour of only the houseboat",
                          "Forget mosquito repellent for evening deck time",
                          "Assume cards work at village stops — carry cash",
                          "Rush the experience — the backwaters reward slowing down",
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
                  "Kerala",
                  "Backwaters",
                  "Houseboats",
                  "Alleppey",
                  "Kumarakom",
                  "South India",
                  "Village Life",
                  "Birdwatching",
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
                sections={BACKWATERS_GEAR}
                destination="the Kerala Backwaters"
              />

              <RelatedPostsGrid />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
