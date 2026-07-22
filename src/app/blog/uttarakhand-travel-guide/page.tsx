// src/app/blog/uttarakhand-travel-guide/page.tsx
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
  title: "Uttarakhand Travel Guide: Char Dham, Nainital & Rishikesh",
  description:
    "The complete Uttarakhand travel guide — the Char Dham Yatra, Rishikesh and Haridwar on the Ganga, Nainital's lakes, Mussoorie's hill views, Jim Corbett's tigers, where to stay and eat, and a full itinerary through Dev Bhoomi, the Land of the Gods.",
  keywords:
    "Uttarakhand travel guide, Char Dham Yatra, Rishikesh travel guide, Nainital travel guide, Mussoorie travel guide, Jim Corbett National Park, Kedarnath, Badrinath, Auli, Valley of Flowers, Uttarakhand itinerary",
  openGraph: {
    title: "Uttarakhand Travel Guide: Char Dham, Nainital & Rishikesh",
    description:
      "The Char Dham pilgrimage, Ganga-side ashrams, lake towns and tiger reserves — the complete guide to Dev Bhoomi, the Land of the Gods.",
    url: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/rishikesh/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "The Ganges river flowing through Rishikesh with the Himalayan foothills in the background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uttarakhand Travel Guide: Char Dham, Nainital & Rishikesh",
    description:
      "Himalayan pilgrimage routes, Ganga-side towns, lake districts and tiger reserves — the complete guide to Uttarakhand.",
    images: ["/images/destinations/rishikesh/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
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
            "Uttarakhand Travel Guide: Char Dham, Nainital & Rishikesh",
          description: "The complete Uttarakhand travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/rishikesh/rishikesh.jpg",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
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
            "@id": "https://club.kudozz.in/blog/uttarakhand-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Uttarakhand",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttarakhand",
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
                name: "Uttarakhand Travel Guide",
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
  { id: "introduction", title: "Why Uttarakhand?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "char-dham", title: "The Char Dham Yatra", level: 2 },
  { id: "rishikesh-haridwar", title: "Rishikesh & Haridwar", level: 2 },
  { id: "hill-stations", title: "Nainital, Mussoorie & Auli", level: 2 },
  { id: "wildlife", title: "Jim Corbett & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "7-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Uttarakhand-specific gear ─────────────────────────────────────────────────
const UTTARAKHAND_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for high-altitude pilgrimage routes, riverside towns, and lake-district hill stations",
    emoji: "🏔️",
    items: [
      {
        name: "Layered Trekking Jacket",
        description:
          "The Char Dham temples sit above 3,000m and stay cold even in peak season — a proper layering system matters far more here than at Nainital or Rishikesh's lower elevation.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "7.8k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("trekking+jacket+layered+himalayan"),
        tag: "Char Dham essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Kedarnath and Badrinath can drop to near-freezing even in May–June — under-packing for cold is the most common Char Dham mistake.",
      },
      {
        name: "Sturdy Trekking Shoes",
        description:
          "Both the Char Dham temple approaches and Valley of Flowers/Auli trails involve rocky, uneven terrain that regular shoes handle poorly.",
        price: "₹2,999",
        rating: 4.5,
        reviews: "9.1k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+waterproof+himalayan"),
        tag: "Trail essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "The Kedarnath trek alone covers roughly 16km of rocky mountain trail each way — proper footwear isn't optional here.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Useful across the whole trip, from Rishikesh's ashrams to long Char Dham trekking days where refill points are limited.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Altitude and physical exertion on pilgrimage routes make hydration more important than it seems at sea level.",
      },
      {
        name: "Basic Altitude Sickness Kit",
        description:
          "Badrinath (3,133m) and Kedarnath (3,583m) sit high enough that mild altitude symptoms are common, especially without acclimatisation time.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.2k",
        image: "💊",
        affiliateUrl: amazonSearchUrl("altitude+sickness+medicine+diamox"),
        tag: "Char Dham essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Rushing the Char Dham circuit without acclimatisation days is the leading cause of altitude-related trip disruptions — consult a doctor before travel.",
      },
      {
        name: "Rain Jacket / Poncho",
        description:
          "Uttarakhand's hill regions see sudden showers even outside monsoon — useful across Nainital, Mussoorie, and the Char Dham routes alike.",
        price: "₹599",
        rating: 4.3,
        reviews: "4.6k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("rain+jacket+poncho+travel"),
        tag: "Weather essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Mountain weather changes fast here — a clear morning at Kedarnath can turn to sleet within hours.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Charging points are sparse along the Char Dham routes and at higher-altitude stops like Auli — worth carrying a backup.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Mountain essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Long mountain drives and trek days between temples mean your phone (and navigation) needs to last well beyond a normal day.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function UttarakhandGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/rishikesh/rishikesh.jpg"
              alt="The Ganges river flowing through Rishikesh with the Himalayan foothills in the background"
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
                { label: "Uttarakhand", href: "/blog?category=uttarakhand" },
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
                "Char Dham",
                "Rishikesh",
                "Nainital",
                "Mussoorie",
                "Jim Corbett",
                "State Guide",
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
              Uttarakhand Travel Guide: Char Dham, Nainital & Rishikesh
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Sacred temples above 3,000 metres, the Ganga's first rush out
              of the mountains at Rishikesh, and lake towns wrapped in pine
              forest — this is Dev Bhoomi, the Land of the Gods, and one of
              the Himalayas' most complete travel states.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "19 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Uttarakhand, Indian Himalayas",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,500 words",
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
                  <h2>Why Uttarakhand?</h2>
                  <p>
                    Known as <strong>Dev Bhoomi</strong> — the Land of the
                    Gods — <strong>Uttarakhand</strong> is where the Ganga
                    and Yamuna rivers are born, where four of Hinduism's most
                    sacred shrines sit above the tree line, and where hill
                    stations built by the British still function as summer
                    escapes for the whole country.
                  </p>
                  <p>
                    Few Indian states offer this range within a single
                    itinerary: the yoga capital of Rishikesh and the holy
                    city of Haridwar on the plains, lake towns like Nainital
                    and colonial hill stations like Mussoorie at mid
                    elevation, and the genuinely demanding Char Dham
                    pilgrimage circuit at altitude — plus Jim Corbett, India's
                    oldest national park, for wildlife.
                  </p>
                  <p>
                    It rewards travellers who pick a focus rather than trying
                    to see everything — a Char Dham-centred trip and a
                    lake-district-and-Rishikesh trip are genuinely different
                    itineraries, and combining both properly needs 10+ days.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Uttarakhand at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Uttarakhand" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Dehradun (DED) / Delhi",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Mar–Jun, Sep–Nov",
                        },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Char Dham, Rishikesh, Hill Stations",
                        },
                        {
                          icon: "⛰️",
                          label: "Highest Shrine",
                          value: "Kedarnath (3,583m)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹7,000",
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
                  <h2>Best Time to Visit Uttarakhand</h2>
                  <p>
                    Timing depends heavily on altitude and purpose — the Char
                    Dham temples have a hard operating season, while
                    Rishikesh and the lake towns are workable most of the
                    year.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Char Dham season opens",
                        text: "The temples reopen after winter closure, and this is the most popular window for the Yatra — book accommodation and permits well ahead.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best all-round window",
                        text: "Clear skies, comfortable temperatures, and the Char Dham circuit remains open through October — arguably the best overall period to visit.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — landslide risk",
                        text: "Heavy rain brings real landslide danger on mountain roads; the Char Dham routes and many hill roads become genuinely risky.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Char Dham closed, hills snowbound",
                        text: "The Char Dham temples close for winter, but this is peak season for snow at Auli and Mussoorie, and comfortable for Rishikesh and Jim Corbett.",
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
                    <strong>Our pick:</strong> September to mid-October for
                    the Char Dham circuit and clear mountain views; March to
                    June for a Rishikesh, Nainital and Mussoorie-focused
                    trip without the Yatra crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Uttarakhand</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jolly Grant Airport (DED) in
                      Dehradun is the main gateway, with connections to
                      Delhi and other major cities. Delhi's IGI Airport is
                      the broader regional hub for onward road/rail travel.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Haridwar and Dehradun are the
                      main railheads, well connected to Delhi (4–6 hrs) and
                      other major cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> Delhi to Rishikesh/Haridwar is
                      roughly 5–6 hours by road; onward travel to Char Dham
                      shrines or hill stations adds significant driving time
                      given mountain roads.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If doing the Char Dham
                    Yatra, register on the official Uttarakhand biometric
                    registration portal well before travel — it's mandatory
                    and checked at multiple points along the route.
                  </div>
                </section>

                {/* ── Char Dham ─────────────────────────────────────────── */}
                <section id="char-dham">
                  <h2>The Char Dham Yatra</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hero.jpg"
                      alt="Snow-capped Himalayan peaks, evoking the high-altitude terrain around Uttarakhand's Char Dham shrines"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The Char Dham (Four Abodes) circuit is one of Hinduism's
                    most significant pilgrimages — four temples, each at
                    considerable altitude, traditionally visited in a fixed
                    order.
                  </p>
                  <ul>
                    <li>
                      <strong>Yamunotri:</strong> Source of the Yamuna river,
                      reached via a steep 5-6 km trek (or pony/palanquin) from
                      Janki Chatti — typically the first stop on the circuit.
                    </li>
                    <li>
                      <strong>Gangotri:</strong> Source of the Ganga, one of
                      the more accessible shrines with a short walk from the
                      road head.
                    </li>
                    <li>
                      <strong>Kedarnath:</strong> The most physically
                      demanding of the four, requiring a roughly 16 km trek
                      (or helicopter option) from Gaurikund at over 3,500m
                      altitude.
                    </li>
                    <li>
                      <strong>Badrinath:</strong> Dedicated to Vishnu and
                      accessible by road right up to the temple — the most
                      logistically straightforward of the four.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Build in acclimatisation
                    days and don't rush the full circuit in under 8-9 days —
                    altitude, mountain roads, and unpredictable weather all
                    add real time buffers.
                  </div>
                </section>

                {/* ── Rishikesh & Haridwar ──────────────────────────────── */}
                <section id="rishikesh-haridwar">
                  <h2>Rishikesh & Haridwar</h2>
                  <p>
                    Twin cities on the Ganga where the river first emerges
                    from the mountains onto the plains — Haridwar is the
                    older pilgrimage town, Rishikesh the adventure-and-yoga
                    capital.
                  </p>
                  <ul>
                    <li>
                      <strong>Ganga Aarti at Har Ki Pauri (Haridwar):</strong>{" "}
                      A nightly river ceremony with hundreds of floating oil
                      lamps — one of North India's most moving religious
                      sights.
                    </li>
                    <li>
                      <strong>Laxman Jhula & Ram Jhula (Rishikesh):</strong>{" "}
                      Iconic suspension bridges over the Ganga, lined with
                      ashrams, cafés and temples.
                    </li>
                    <li>
                      <strong>White-water rafting:</strong> Rishikesh is
                      India's premier rafting destination, with multiple
                      grades of rapids on the Ganga depending on season.
                    </li>
                    <li>
                      <strong>Yoga and meditation retreats:</strong> The
                      self-declared "Yoga Capital of the World," with
                      ashrams ranging from serious multi-week retreats to
                      single-session drop-ins.
                    </li>
                    <li>
                      <strong>Beatles Ashram:</strong> The abandoned
                      Maharishi Mahesh Yogi ashram where the Beatles once
                      stayed, now covered in street art and open to visitors.
                    </li>
                  </ul>
                </section>

                {/* ── Hill Stations ─────────────────────────────────────── */}
                <section id="hill-stations">
                  <h2>Nainital, Mussoorie & Auli</h2>
                  <ul>
                    <li>
                      <strong>Nainital:</strong> Built around the pear-shaped
                      Naini Lake, this is the classic Kumaon hill station —
                      boating, the Mall Road, and cable car rides up Snow
                      View Point.
                    </li>
                    <li>
                      <strong>Mussoorie:</strong> "The Queen of Hills," a
                      colonial-era station near Dehradun known for Kempty
                      Falls, Gun Hill, and sweeping Doon Valley views.
                    </li>
                    <li>
                      <strong>Auli:</strong> Uttarakhand's premier ski
                      destination in winter, with a cable car offering some
                      of the best close-up Himalayan views accessible without
                      trekking.
                    </li>
                    <li>
                      <strong>Valley of Flowers & Hemkund Sahib:</strong> A
                      UNESCO World Heritage alpine meadow bursting into bloom
                      July–September, paired with the high-altitude Sikh
                      shrine of Hemkund Sahib nearby.
                    </li>
                    <li>
                      <strong>Ranikhet:</strong> A quieter Kumaon hill
                      station with pine forests and army cantonment charm,
                      less crowded than Nainital.
                    </li>
                  </ul>
                </section>

                {/* ── Wildlife ──────────────────────────────────────────── */}
                <section id="wildlife">
                  <h2>Jim Corbett & Wildlife</h2>
                  <p>
                    <strong>Jim Corbett National Park</strong>, India's
                    oldest national park (established 1936), remains one of
                    the country's best chances to spot a wild Bengal Tiger.
                  </p>
                  <ul>
                    <li>
                      <strong>Jeep safaris:</strong> Multiple zones (Dhikala,
                      Bijrani, Jhirna) offer varying terrain and sighting
                      probability — Dhikala is considered the best but
                      requires advance booking.
                    </li>
                    <li>
                      <strong>Elephant and deer sightings:</strong> Even
                      without a tiger sighting, Corbett offers strong odds
                      for elephant, spotted deer, and a wide range of bird
                      species.
                    </li>
                    <li>
                      <strong>Riverside resorts:</strong> Several properties
                      along the Kosi River near the park offer a relaxed
                      base for multiple safari attempts.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation varies hugely by region — Rishikesh and the
                    hill stations have dense inventory, while Char Dham stops
                    are far more basic and fill up fast in peak season.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Ashram/dorm stays, Rishikesh",
                          "Guesthouses, Nainital Mall Road",
                          "GMVN lodges along Char Dham route",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Riverside resorts, Rishikesh",
                          "Lake-view hotels, Nainital",
                          "Colonial-style hotels, Mussoorie",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹8,000–₹25,000+/night",
                        picks: [
                          "Ananda in the Himalayas (Rishikesh)",
                          "Naini Retreat (Nainital)",
                          "Jim Corbett luxury jungle lodges",
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
                    Book Char Dham accommodation well ahead during May–June —
                    room inventory at each shrine is genuinely limited, and
                    demand during peak Yatra season is intense.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Uttarakhand</h2>
                  <ul>
                    <li>
                      <strong>Aloo ke gutke:</strong> A Kumaoni spiced potato
                      dish, a staple across the region's hill kitchens.
                    </li>
                    <li>
                      <strong>Bal mithai:</strong> A fudge-like sweet coated
                      in sugar balls, a signature Almora and Nainital
                      speciality.
                    </li>
                    <li>
                      <strong>Sattu-based dishes:</strong> Roasted gram flour
                      used in both savoury and sweet preparations across
                      Garhwal.
                    </li>
                    <li>
                      <strong>Pure vegetarian ashram food (Rishikesh):</strong>{" "}
                      Most restaurants in Rishikesh are vegetarian and
                      alcohol-free, reflecting the town's spiritual character.
                    </li>
                    <li>
                      <strong>Kumaoni raita and chainsoo:</strong> Regional
                      specialities worth seeking out at local Kumaoni
                      restaurants in Nainital and Almora.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>7-Day Uttarakhand Itinerary</h2>
                  <p>
                    A focused itinerary combining Rishikesh and the Kumaon
                    lake district — a separate, longer trip is better suited
                    to the Char Dham circuit alone.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Rishikesh & Haridwar",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive Rishikesh, Laxman Jhula and Ram Jhula walk",
                          "White-water rafting on the Ganga",
                          "Evening: Ganga Aarti at Har Ki Pauri, Haridwar",
                        ],
                      },
                      {
                        day: "Day 3–4",
                        title: "Nainital",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Nainital (~7 hrs)",
                          "Boating on Naini Lake, Mall Road walk",
                          "Cable car to Snow View Point",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Jim Corbett",
                        color: "bg-forest-600",
                        activities: [
                          "Drive to Corbett region (~3.5 hrs from Nainital)",
                          "Afternoon jeep safari",
                        ],
                      },
                      {
                        day: "Day 6–7",
                        title: "Mussoorie & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Drive to Mussoorie (~5-6 hrs)",
                          "Gun Hill, Kempty Falls, Mall Road",
                          "Departure via Dehradun",
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
                            "₹1,200",
                            "₹3,800",
                            "₹12,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,800"],
                          [
                            "Local transport/day",
                            "₹400",
                            "₹900",
                            "₹2,500",
                          ],
                          ["Activities/day", "₹300", "₹1,000", "₹2,500"],
                          ["Daily total", "₹2,400", "₹6,900", "₹19,800"],
                          [
                            "7-Day trip total",
                            "₹16,800",
                            "₹48,300",
                            "₹1,38,600",
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
                    * Excludes travel to Uttarakhand. A dedicated Char Dham
                    Yatra (with helicopter option for Kedarnath) typically
                    adds ₹15,000–₹60,000+ per person depending on transport
                    choices.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Uttarakhand</h2>
                  <ul>
                    <li>
                      <strong>Register for Char Dham in advance:</strong>{" "}
                      Biometric registration is mandatory and checked at
                      multiple checkpoints along the route.
                    </li>
                    <li>
                      <strong>Build in acclimatisation days:</strong>{" "}
                      Altitude sickness is a real risk at Kedarnath and
                      Badrinath — don't rush the circuit.
                    </li>
                    <li>
                      <strong>Avoid mountain roads during heavy monsoon:</strong>{" "}
                      Landslide risk is significant July–August across most
                      hill routes.
                    </li>
                    <li>
                      <strong>Book Jim Corbett safaris ahead:</strong>{" "}
                      Especially the Dhikala zone, which has limited daily
                      permits and fills up quickly in peak season.
                    </li>
                    <li>
                      <strong>Respect Rishikesh's alcohol-free zones:</strong>{" "}
                      Much of the town, especially near the ashrams, is
                      vegetarian and dry — check before booking a stay if
                      that matters to you.
                    </li>
                    <li>
                      <strong>Carry cash in remote hill areas:</strong> Card
                      and UPI acceptance drops off quickly outside major
                      towns.
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
                          "Register for Char Dham biometric permits in advance",
                          "Build acclimatisation days into a Char Dham itinerary",
                          "Book Jim Corbett safaris and Char Dham stays ahead",
                          "Try white-water rafting in Rishikesh",
                          "Carry warm layers even in summer for high-altitude stops",
                          "Carry cash for remote hill towns and villages",
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
                          "Attempt the full Char Dham circuit in under a week",
                          "Travel mountain roads during heavy monsoon rain",
                          "Skip altitude sickness precautions at Kedarnath/Badrinath",
                          "Expect alcohol availability in central Rishikesh",
                          "Rely on cards outside major towns",
                          "Underestimate mountain road drive times when planning",
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
                  "Uttarakhand",
                  "Char Dham",
                  "Rishikesh",
                  "Nainital",
                  "Mussoorie",
                  "Jim Corbett",
                  "State Guide",
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
                sections={UTTARAKHAND_GEAR}
                destination="Uttarakhand"
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
