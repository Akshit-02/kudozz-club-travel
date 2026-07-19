// src/app/blog/tamil-nadu-travel-guide/page.tsx
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
  title: "Tamil Nadu Travel Guide: Madurai, Mahabalipuram & Ooty",
  description:
    "The complete Tamil Nadu travel guide — Madurai's Meenakshi Temple, Mahabalipuram's UNESCO shore temples, Thanjavur's Brihadeeswarar Temple, Ooty's tea gardens, Chennai, where to stay and eat, and a full itinerary through the heart of Dravidian India.",
  keywords:
    "Tamil Nadu travel guide, Meenakshi Temple Madurai, Mahabalipuram shore temple, Thanjavur Brihadeeswarar Temple, Ooty travel guide, Chennai travel guide, Kanyakumari, Rameswaram, Tamil Nadu itinerary, Chettinad food",
  openGraph: {
    title: "Tamil Nadu Travel Guide: Madurai, Mahabalipuram & Ooty",
    description:
      "Towering Dravidian temple gopurams, UNESCO shore temples, and tea gardens in the Nilgiri hills — the complete guide to Tamil Nadu.",
    url: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "A towering Dravidian-style temple gopuram, evoking Tamil Nadu's iconic South Indian temple architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamil Nadu Travel Guide: Madurai, Mahabalipuram & Ooty",
    description:
      "Dravidian temple towers, UNESCO shore temples, and Nilgiri tea gardens — the complete guide to Tamil Nadu.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
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
            "Tamil Nadu Travel Guide: Madurai, Mahabalipuram & Ooty",
          description: "The complete Tamil Nadu travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Tamil Nadu",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tamil Nadu",
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
                name: "Tamil Nadu Travel Guide",
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
  { id: "introduction", title: "Why Tamil Nadu?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "chennai", title: "Chennai: Gateway to Tamil Nadu", level: 2 },
  { id: "madurai", title: "Madurai: The Meenakshi Temple", level: 2 },
  { id: "mahabalipuram-thanjavur", title: "Mahabalipuram & Thanjavur", level: 2 },
  { id: "ooty", title: "Ooty & the Nilgiri Hills", level: 2 },
  { id: "south-coast", title: "Rameswaram & Kanyakumari", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "7-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Tamil Nadu-specific gear ─────────────────────────────────────────────────
const TAMIL_NADU_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for temple complexes, hot coastal towns, and a cool hill-station detour",
    emoji: "🛕",
    items: [
      {
        name: "Comfortable, Easy-Off Sandals",
        description:
          "Temples across Tamil Nadu require removing footwear at the entrance, often for long stretches over hot stone — slip-on sandals are far more practical than laced shoes.",
        price: "₹899",
        rating: 4.4,
        reviews: "7.6k",
        image: "🩴",
        affiliateUrl: amazonSearchUrl("slip+on+sandals+travel"),
        tag: "Temple essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Madurai's Meenakshi Temple and Thanjavur's Brihadeeswarar Temple both involve long barefoot stretches on stone that gets very hot by midday.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Chennai, Madurai, and the coastal towns get genuinely hot most of the year, with long uncovered temple courtyards.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Tamil Nadu's plains stay hot and humid for most of the year — hydration matters across nearly every part of this itinerary.",
      },
      {
        name: "Modest Travel Clothing",
        description:
          "Covered shoulders and knees are expected at Tamil Nadu's major temples — a lightweight, modest outfit works better than negotiating rental cloths at the entrance.",
        price: "₹799",
        rating: 4.3,
        reviews: "4.4k",
        image: "👗",
        affiliateUrl: amazonSearchUrl("modest+travel+clothing+lightweight"),
        tag: "Temple essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Several major temples enforce dress codes strictly, sometimes requiring men to remove shirts or wear a dhoti — packing appropriately avoids last-minute scrambling.",
      },
      {
        name: "Layered Jacket (for Ooty)",
        description:
          "The Nilgiri hills get genuinely cold, especially mornings and evenings — a sharp contrast to the plains' heat.",
        price: "₹1,899",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("fleece+jacket+travel+trekking"),
        tag: "Hill essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "The Chennai/Madurai-to-Ooty temperature swing regularly exceeds 15°C — most travellers under-pack for the hill leg.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long inter-city drives and the Nilgiri Mountain Railway journey up to Ooty.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Travel-day essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Tamil Nadu's major sights are spread across a genuinely large state — expect long travel days between temple towns.",
      },
      {
        name: "Sun Hat / Umbrella",
        description:
          "Useful for both temple courtyards and coastal sightseeing at Mahabalipuram and Kanyakumari.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.6k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Coastal and temple-town sightseeing both mean long stretches with little shade under intense South Indian sun.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TamilNaduGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/hampi/virupaksha.jpg"
              alt="A towering Dravidian-style temple gopuram, evoking Tamil Nadu's iconic South Indian temple architecture"
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
                { label: "Tamil Nadu", href: "/blog?category=tamil-nadu" },
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
                "Madurai",
                "Mahabalipuram",
                "Thanjavur",
                "Ooty",
                "Temple Trail",
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
              Tamil Nadu Travel Guide: Madurai, Mahabalipuram & Ooty
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Temple towers carved with thousands of painted deities,
              UNESCO shore temples facing the Bay of Bengal, and tea
              gardens cooling off in the Nilgiri hills — Tamil Nadu is the
              beating heart of Dravidian India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "18 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Tamil Nadu, South India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,300 words",
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
                  <h2>Why Tamil Nadu?</h2>
                  <p>
                    Home to some of the largest and oldest functioning
                    temples on Earth, <strong>Tamil Nadu</strong> is where
                    Dravidian architecture reaches its fullest expression —
                    towering, intricately carved gopurams that have drawn
                    pilgrims and travellers for over a thousand years.
                  </p>
                  <p>
                    But the state is far more than temples: Mahabalipuram's
                    UNESCO-listed shore monuments sit right on the Bay of
                    Bengal, Ooty and the Nilgiri hills offer a genuine
                    climate escape via a UNESCO World Heritage mountain
                    railway, and the far south at Kanyakumari marks the
                    literal meeting point of three seas.
                  </p>
                  <p>
                    Add a food culture — filter coffee, dosas, Chettinad
                    spice — that's shaped South Indian cuisine across the
                    country, and Tamil Nadu emerges as one of India's most
                    complete single-state itineraries.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Tamil Nadu at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Tamil Nadu" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Chennai (MAA)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🕍",
                          label: "Known For",
                          value: "Temples, Shore Monuments, Hill Stations",
                        },
                        {
                          icon: "🚂",
                          label: "Must-Do",
                          value: "Nilgiri Mountain Railway (UNESCO)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,300 – ₹6,500",
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
                  <h2>Best Time to Visit Tamil Nadu</h2>
                  <p>
                    Tamil Nadu's plains stay hot for most of the year, which
                    makes timing genuinely important, especially if a
                    temple-heavy itinerary is the focus.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cooler, drier conditions (20–30°C) make temple courtyards and coastal sightseeing genuinely comfortable — the peak travel window.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Very hot on the plains",
                        text: "Chennai and Madurai regularly cross 38–40°C. Ooty and the Nilgiris remain pleasant and are a popular summer escape from the heat.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon — mild here",
                        text: "Tamil Nadu is largely on the rain shadow side for the southwest monsoon, so conditions stay relatively dry compared to Kerala.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Northeast monsoon — main rains",
                        text: "This is actually Tamil Nadu's primary rainy season — Chennai in particular can see heavy, disruptive rainfall in November.",
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
                    <strong>Our pick:</strong> December to February —
                    comfortable temperatures on the plains, past the worst
                    of the northeast monsoon rains, and still cool enough in
                    Ooty for a proper hill-station experience.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tamil Nadu</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Chennai International Airport
                      (MAA) is the main gateway with extensive domestic and
                      international connections; Madurai and Coimbatore also
                      have useful regional airports.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Chennai Central is a major
                      railway hub connected to virtually every part of India;
                      Madurai and Thanjavur are also well served.
                    </li>
                    <li>
                      <strong>To Ooty:</strong> Fly or take the train to
                      Coimbatore, then drive up (~2.5 hrs) or connect to
                      Mettupalayam for the Nilgiri Mountain Railway.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book the Nilgiri Mountain
                    Railway toy train from Mettupalayam to Ooty well in
                    advance — seats sell out quickly in peak season, and it's
                    one of the trip's genuine highlights.
                  </div>
                </section>

                {/* ── Chennai ───────────────────────────────────────────── */}
                <section id="chennai">
                  <h2>Chennai: Gateway to Tamil Nadu</h2>
                  <p>
                    Most visitors pass through Chennai en route to the rest
                    of the state, but it's worth at least a day for its own
                    sights.
                  </p>
                  <ul>
                    <li>
                      <strong>Marina Beach:</strong> One of the world's
                      longest urban beaches, best experienced at sunrise or
                      as an evening walk.
                    </li>
                    <li>
                      <strong>Kapaleeshwarar Temple:</strong> A striking
                      example of Dravidian temple architecture right in the
                      city, in the Mylapore neighbourhood.
                    </li>
                    <li>
                      <strong>Fort St. George:</strong> The first English
                      fortress in India, now housing a museum on the
                      colonial era.
                    </li>
                    <li>
                      <strong>San Thome Basilica:</strong> A striking
                      neo-Gothic church built over the tomb of St. Thomas
                      the Apostle.
                    </li>
                  </ul>
                </section>

                {/* ── Madurai ───────────────────────────────────────────── */}
                <section id="madurai">
                  <h2>Madurai: The Meenakshi Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Ancient South Indian temple ruins and stone architecture, evoking Tamil Nadu's temple towns"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    One of India's oldest continuously inhabited cities,
                    Madurai is built almost entirely around the{" "}
                    <strong>Meenakshi Amman Temple</strong> — a sprawling
                    complex with fourteen gopurams covered in thousands of
                    painted sculptures.
                  </p>
                  <ul>
                    <li>
                      <strong>Meenakshi Amman Temple:</strong> The city's
                      heart and one of India's most significant temples —
                      visit early morning or late evening to see the daily
                      rituals, and allow at least half a day.
                    </li>
                    <li>
                      <strong>Thirumalai Nayakkar Palace:</strong> A
                      17th-century Indo-Saracenic palace with an impressive
                      courtyard, a short walk from the temple.
                    </li>
                    <li>
                      <strong>Madurai's flower and spice markets:</strong>{" "}
                      Bustling, colourful markets around the temple complex —
                      worth a wander even without buying anything.
                    </li>
                    <li>
                      <strong>Alagar Kovil:</strong> A hilltop temple
                      complex a short distance outside the city, a quieter
                      alternative to the main temple.
                    </li>
                  </ul>
                </section>

                {/* ── Mahabalipuram & Thanjavur ─────────────────────────── */}
                <section id="mahabalipuram-thanjavur">
                  <h2>Mahabalipuram & Thanjavur</h2>
                  <p>
                    Two of Tamil Nadu's three UNESCO World Heritage temple
                    sites, each with a completely different character.
                  </p>
                  <ul>
                    <li>
                      <strong>Shore Temple, Mahabalipuram:</strong> A
                      7th-century structural temple standing directly on the
                      Bay of Bengal — genuinely striking at sunrise, roughly
                      60 km south of Chennai.
                    </li>
                    <li>
                      <strong>Pancha Rathas:</strong> Five monolithic rock-cut
                      temples, each carved from a single piece of granite,
                      also at Mahabalipuram.
                    </li>
                    <li>
                      <strong>Arjuna's Penance:</strong> A massive open-air
                      rock relief depicting scenes from Hindu mythology —
                      one of the largest such carvings in the world.
                    </li>
                    <li>
                      <strong>Brihadeeswarar Temple, Thanjavur:</strong> A
                      Chola-era temple built in 1010 CE, with a 66-metre
                      vimana (tower) that remained the tallest temple tower
                      in the world for centuries.
                    </li>
                  </ul>
                </section>

                {/* ── Ooty ──────────────────────────────────────────────── */}
                <section id="ooty">
                  <h2>Ooty & the Nilgiri Hills</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Misty green hills and forest, evoking the Nilgiri hill station of Ooty"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Ooty (Udhagamandalam)</strong>, the "Queen of
                    Hill Stations," offers a complete climate break from the
                    plains and remains one of South India's most popular
                    summer escapes.
                  </p>
                  <ul>
                    <li>
                      <strong>Nilgiri Mountain Railway:</strong> A UNESCO
                      World Heritage narrow-gauge railway climbing from
                      Mettupalayam to Ooty through tea plantations and
                      forest — genuinely one of India's best train journeys.
                    </li>
                    <li>
                      <strong>Botanical Gardens:</strong> Well-maintained
                      colonial-era gardens with a good variety of exotic and
                      native plant species.
                    </li>
                    <li>
                      <strong>Ooty Lake:</strong> A popular spot for boating,
                      set within the town's centre.
                    </li>
                    <li>
                      <strong>Doddabetta Peak:</strong> The highest point in
                      the Nilgiris, offering panoramic views on a clear day.
                    </li>
                    <li>
                      <strong>Tea estate visits:</strong> Several estates
                      near Ooty offer tours and tastings, similar to
                      Darjeeling but on a South Indian tea variety.
                    </li>
                  </ul>
                </section>

                {/* ── South Coast ───────────────────────────────────────── */}
                <section id="south-coast">
                  <h2>Rameswaram & Kanyakumari</h2>
                  <ul>
                    <li>
                      <strong>Rameswaram:</strong> One of the Char Dham
                      pilgrimage sites, home to the Ramanathaswamy Temple
                      with the longest corridor of any Hindu temple in
                      India — connected to mainland Tamil Nadu by the
                      Pamban Bridge.
                    </li>
                    <li>
                      <strong>Kanyakumari:</strong> India's southernmost tip,
                      where the Bay of Bengal, Arabian Sea, and Indian Ocean
                      meet — famous for sunrise and sunset views over open
                      water, and the offshore Vivekananda Rock Memorial.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is well developed across all the major
                    towns, with a strong range from simple pilgrim lodges to
                    heritage and luxury hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Pilgrim lodges near Meenakshi Temple, Madurai",
                          "Budget hotels, Chennai T. Nagar",
                          "Guesthouses, Ooty",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Heritage hotels, Thanjavur",
                          "Beach resorts, Mahabalipuram",
                          "Colonial-style hotels, Ooty",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹8,000–₹25,000+/night",
                        picks: [
                          "ITC Grand Chola, Chennai",
                          "Taj Fisherman's Cove, Mahabalipuram",
                          "Savoy Hotel, Ooty",
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
                    Stay within walking distance of the Meenakshi Temple in
                    Madurai — the surrounding streets come alive early
                    morning and evening, and it's the best way to experience
                    the city's rhythm.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Tamil Nadu</h2>
                  <ul>
                    <li>
                      <strong>Dosa and idli varieties:</strong> Tamil Nadu is
                      the heartland of South Indian breakfast food —
                      countless regional dosa variations exist beyond the
                      standard masala dosa.
                    </li>
                    <li>
                      <strong>Filter coffee:</strong> A genuine Tamil Nadu
                      institution, served in the distinctive tumbler-and-
                      dabarah set — try it at any traditional "meals"
                      restaurant.
                    </li>
                    <li>
                      <strong>Chettinad cuisine:</strong> Fiery, spice-heavy
                      cooking from the Chettinad region — chicken and
                      mutton preparations here are among South India's most
                      distinctive.
                    </li>
                    <li>
                      <strong>Banana leaf "meals":</strong> A full
                      traditional Tamil vegetarian thali served on a banana
                      leaf — widely available and an essential experience.
                    </li>
                    <li>
                      <strong>Jigarthanda (Madurai):</strong> A cooling
                      dessert drink made with milk, almond gum, and
                      sarsaparilla syrup — a Madurai speciality worth
                      seeking out on a hot day.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>7-Day Tamil Nadu Itinerary</h2>
                  <p>
                    Seven days is a comfortable minimum to cover the
                    temple towns, the coast, and a hill-station leg without
                    excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Chennai",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, Marina Beach sunset",
                          "Kapaleeshwarar Temple, Fort St. George",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Mahabalipuram",
                        color: "bg-sky-600",
                        activities: [
                          "Day trip from Chennai (~1.5 hrs)",
                          "Shore Temple, Pancha Rathas, Arjuna's Penance",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Travel to Thanjavur",
                        color: "bg-forest-600",
                        activities: [
                          "Train/road to Thanjavur (~5-6 hrs)",
                          "Brihadeeswarar Temple in the evening",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Madurai",
                        color: "bg-purple-600",
                        activities: [
                          "Travel to Madurai (~2 hrs)",
                          "Meenakshi Amman Temple, evening rituals",
                          "Thirumalai Nayakkar Palace",
                        ],
                      },
                      {
                        day: "Day 5–7",
                        title: "Ooty & the Nilgiris",
                        color: "bg-stone-600",
                        activities: [
                          "Travel to Coimbatore, then Ooty",
                          "Nilgiri Mountain Railway, Botanical Gardens",
                          "Doddabetta Peak, tea estate visit, departure",
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
                            "₹4,000",
                            "₹14,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          [
                            "Local transport/day",
                            "₹400",
                            "₹900",
                            "₹2,200",
                          ],
                          ["Activities/day", "₹300", "₹700", "₹1,800"],
                          ["Daily total", "₹2,400", "₹6,800", "₹21,000"],
                          [
                            "7-Day trip total",
                            "₹16,800",
                            "₹47,600",
                            "₹1,47,000",
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
                    * Excludes flights to Chennai. Ooty accommodation runs
                    notably higher during peak summer (April–June) demand.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Tamil Nadu</h2>
                  <ul>
                    <li>
                      <strong>Check temple dress codes before visiting:</strong>{" "}
                      Several major temples enforce strict rules, sometimes
                      requiring men to remove shirts or wear a dhoti —
                      confirm before arriving.
                    </li>
                    <li>
                      <strong>Book the Nilgiri toy train in advance:</strong>{" "}
                      Seats sell out fast, especially in peak season — book
                      as early as possible.
                    </li>
                    <li>
                      <strong>Avoid Chennai in Nov–Dec if possible:</strong>{" "}
                      The northeast monsoon can bring disruptive flooding
                      and travel delays in the city.
                    </li>
                    <li>
                      <strong>Visit major temples early morning or
                      evening:</strong> Both for cooler stone underfoot and to
                      catch the daily rituals, which are often the highlight.
                    </li>
                    <li>
                      <strong>Carry small change for temple donations:</strong>{" "}
                      Common at most large temple complexes.
                    </li>
                    <li>
                      <strong>Pack layers for Ooty:</strong> The temperature
                      swing from the plains catches many first-time visitors
                      off guard.
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
                          "Book Nilgiri Mountain Railway tickets well ahead",
                          "Visit major temples early morning for the rituals",
                          "Check dress codes before visiting large temples",
                          "Try a full banana-leaf meal at least once",
                          "Pack warm layers for the Ooty leg",
                          "Base yourself near the Meenakshi Temple in Madurai",
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
                          "Visit Chennai during peak Nov–Dec monsoon if avoidable",
                          "Underestimate temple stone heat at midday — go barefoot early",
                          "Skip pre-booking the toy train to Ooty",
                          "Rush the Mahabalipuram–Thanjavur–Madurai leg in under 3 days",
                          "Ignore dress code requirements at major temples",
                          "Under-pack for Ooty's cooler climate",
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
                  "Tamil Nadu",
                  "Madurai",
                  "Mahabalipuram",
                  "Thanjavur",
                  "Ooty",
                  "Temple Trail",
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
                sections={TAMIL_NADU_GEAR}
                destination="Tamil Nadu"
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
