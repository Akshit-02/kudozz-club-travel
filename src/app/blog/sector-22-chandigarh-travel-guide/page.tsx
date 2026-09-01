// src/app/blog/sector-22-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sector 22 Chandigarh Travel Guide: Market, Stays & Tips",
  description:
    "Guide to Sector 22, Chandigarh — one of the city's earlier, well-established sectors with a busy everyday market, budget-friendly stays, and easy access to Sector 17 and the main sights.",
  keywords:
    "Sector 22 Chandigarh, Sector 22 market, Chandigarh budget hotels, Sector 22 Chandigarh accommodation, things to do Sector 22, Chandigarh residential sectors, Sector 22 to Sector 17, Chandigarh local market, Sector 22 shopping, Chandigarh everyday life",
  openGraph: {
    title: "Sector 22 Chandigarh Travel Guide: Market, Stays & Tips",
    description:
      "A lived-in, everyday Chandigarh sector with a busy local market and budget-friendly stays — practical guide to Sector 22.",
    url: "https://club.kudozz.in/blog/sector-22-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tree-lined street with hills in the distance, evoking the everyday residential-cum-commercial character of Sector 22, Chandigarh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sector 22 Chandigarh Travel Guide: Market, Stays & Tips",
    description:
      "A lived-in, everyday Chandigarh sector with a busy local market and budget-friendly stays — practical guide to Sector 22.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sector-22-chandigarh-travel-guide",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Sector 22 Chandigarh Travel Guide: Market, Stays & Tips",
          description:
            "Guide to Sector 22, Chandigarh — one of the city's earlier, well-established sectors with a busy everyday market, budget-friendly stays, and easy access to Sector 17 and the main sights.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
          datePublished: "2026-08-31",
          dateModified: "2026-08-31",
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
            "@id": "https://club.kudozz.in/blog/sector-22-chandigarh-travel-guide",
          },
          keywords:
            "Sector 22 Chandigarh, Sector 22 market, Chandigarh budget hotels, Sector 22 accommodation",
          about: {
            "@type": "Place",
            name: "Sector 22, Chandigarh",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chandigarh",
              addressRegion: "Chandigarh",
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
                name: "Chandigarh",
                item: "https://club.kudozz.in/blog/chandigarh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Sector 22",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data (shared by visible section + JSON-LD) ────────────────────────────
const faqs = [
  {
    q: "What is Sector 22 known for in Chandigarh?",
    a: "Sector 22 is one of Chandigarh's earlier, well-established residential-cum-commercial sectors, known for its busy local market strip selling everyday goods — clothing, footwear, and general stores — rather than being a manicured tourist sight. It's a practical, lived-in slice of ordinary Chandigarh life.",
  },
  {
    q: "Is Sector 22 a good place to stay in Chandigarh?",
    a: "Yes — Sector 22 is regularly mentioned, alongside Sector 17 and Sector 35, as one of the more convenient and budget-friendly areas for first-time visitors to find accommodation, thanks to its central location and range of budget hotels.",
  },
  {
    q: "How far is Sector 22 from Sector 17?",
    a: "Sector 22 is centrally located and sits a comfortable walking distance or a short auto ride from Sector 17, Chandigarh's main shopping plaza — the two sectors pair naturally in a single day.",
  },
  {
    q: "What can I buy at Sector 22 market?",
    a: "Sector 22 market is a workaday, locally-used shopping strip good for everyday essentials — clothing, footwear, and general stores — rather than the more polished retail experience of Sector 17 Plaza or Elante Mall.",
  },
  {
    q: "Is Sector 22 worth visiting for tourists?",
    a: "It's not a major sightseeing stop, but it's a useful, practical base — good for budget accommodation, everyday shopping, and getting a feel for ordinary Chandigarh life away from the main tourist circuit, especially if you're also visiting nearby Sector 17.",
  },
];

function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "An Everyday Chandigarh Sector", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-market", title: "Sector 22 Market", level: 2 },
  { id: "where-to-stay-nearby", title: "Where to Stay Nearby", level: 2 },
  { id: "nearby", title: "Nearby Sights", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Sector22ChandigarhGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/chandigarh/hero.jpg"
              alt="Tree-lined street with hills in the distance, evoking the everyday residential-cum-commercial character of Sector 22, Chandigarh"
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
                { label: "Chandigarh", href: "/blog/chandigarh-travel-guide" },
                { label: "Sector 22", href: null },
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
                "Sector 22",
                "Chandigarh",
                "Local Market",
                "Budget Stays",
                "Everyday Chandigarh",
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
              Sector 22, Chandigarh: Market, Stays & Practical Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A busy, lived-in sector with an everyday market and
              budget-friendly stays — the practical, workaday side of
              Chandigarh, just a short ride from the main plaza.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sector 22, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,300 words",
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
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
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
                  <h2>An Everyday Chandigarh Sector</h2>
                  <p>
                    <strong>Sector 22</strong> is one of{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh's
                    </Link>{" "}
                    earlier, well-established residential-cum-commercial
                    sectors — a practical, lived-in part of the city rather
                    than a manicured tourist sight. Its main draw for
                    visitors is the busy Sector 22 market, a workaday shopping
                    strip that's more locally-used than the plaza atmosphere
                    of{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17
                    </Link>{" "}
                    a short distance away.
                  </p>
                  <p>
                    Most travellers end up in Sector 22 for one of two
                    reasons: budget accommodation, or a genuine slice of
                    ordinary Chandigarh life away from the main sightseeing
                    circuit. The Chandigarh hub guide already notes it as one
                    of the more convenient and budget-friendly areas for
                    first-time visitors to find a place to stay, alongside
                    Sector 17 and{" "}
                    <Link href="/blog/sector-35-chandigarh-travel-guide">
                      Sector 35
                    </Link>
                    .
                  </p>
                  <p>
                    It's not a place you plan a whole day around, but it's
                    useful precisely because of that — a central, well-located
                    base for everyday shopping and errands, positioned close
                    enough to Sector 17 and the{" "}
                    <Link href="/blog/sector-26-chandigarh-travel-guide">
                      Sector 26 food street
                    </Link>{" "}
                    to fold easily into a wider Chandigarh itinerary.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏘️</span> Sector 22 at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Central Chandigarh",
                        },
                        {
                          icon: "🏙️",
                          label: "Character",
                          value: "Residential + local market",
                        },
                        {
                          icon: "🛍️",
                          label: "Known For",
                          value: "Everyday shopping",
                        },
                        {
                          icon: "🏨",
                          label: "Good For",
                          value: "Budget accommodation",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free / open sector",
                        },
                        {
                          icon: "🚶",
                          label: "To Sector 17",
                          value: "Short walk / auto ride",
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
                  <h2>Best Time to Visit Sector 22</h2>
                  <p>
                    Since Sector 22 is primarily a place to shop, stay, and
                    move through rather than sightsee, timing matters less
                    here than at Chandigarh's gardens or plazas — but a few
                    windows are still more comfortable than others.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Morning to Early Evening",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Market at its busiest and most useful",
                        text: "Most shops in the market strip are open and active through the day, making mid-morning to early evening the most practical window for errands or browsing.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Most comfortable season",
                        text: "Cool, pleasant weather makes walking the market strip and moving between Sector 22 and Sector 17 far more comfortable than during peak summer.",
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
                    <strong>Our pick:</strong> a cool-season morning or early
                    evening — comfortable for walking the market strip, and a
                    good time to combine errands here with a visit to Sector
                    17 nearby.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sector 22</h2>
                  <p>
                    Sector 22's central location makes it easy to reach from
                    almost anywhere in Chandigarh, and especially convenient
                    if you're already based in or near Sector 17.
                  </p>
                  <ul>
                    <li>
                      <strong>On foot from Sector 17:</strong> Sector 22 is a
                      comfortable walking distance from Sector 17 Plaza,
                      making it easy to combine the two in one outing.
                    </li>
                    <li>
                      <strong>By Auto/Cab:</strong> A short auto or cab ride
                      from most other central sectors, including Sector 17,
                      Sector 26 and Sector 35.
                    </li>
                    <li>
                      <strong>By Bus:</strong> Local city bus routes connect
                      Sector 22 with the rest of Chandigarh's sector grid, an
                      economical option if you're not in a hurry.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're staying in Sector
                    22, treat it as a base rather than a destination — most of
                    Chandigarh's actual sightseeing is a short ride away in
                    other sectors.
                  </div>
                </section>

                {/* ── The Market ─────────────────────────────────────────── */}
                <section id="the-market">
                  <h2>Sector 22 Market</h2>
                  <p>
                    The heart of Sector 22 for visitors is its local market
                    strip — a busy stretch of shops selling everyday goods
                    like clothing, footwear, and general household items.
                    Where{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17 Plaza
                    </Link>{" "}
                    is designed as a polished, pedestrian-friendly civic
                    centre, Sector 22 market is more workaday and
                    locally-used — the kind of place Chandigarh residents
                    actually run errands, rather than a curated shopping
                    experience built with visitors in mind.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Busy local market street with shopfronts, evoking the everyday shopping strip of Sector 22, Chandigarh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    That's exactly the appeal for some travellers — Sector 22
                    market gives you a look at ordinary Chandigarh life that
                    the city's more manicured gardens and plazas don't, and
                    it's a genuinely useful stop if you need everyday
                    essentials rather than souvenirs.
                  </p>
                </section>

                {/* ── Where to Stay Nearby ───────────────────────────────── */}
                <section id="where-to-stay-nearby">
                  <h2>Where to Stay Nearby</h2>
                  <p>
                    Sector 22 is regularly grouped with{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/sector-35-chandigarh-travel-guide">
                      Sector 35
                    </Link>{" "}
                    as one of the more convenient, budget-friendly areas for
                    first-time visitors to base themselves — a mix of budget
                    hotels and guesthouses sits within the sector, close to
                    both the local market and the wider sightseeing circuit.
                  </p>
                  <ul>
                    <li>
                      <strong>Budget hotels and guesthouses:</strong> Several
                      no-frills options in Sector 22 make it one of
                      Chandigarh's more affordable places to stay without
                      sacrificing central location.
                    </li>
                    <li>
                      <strong>Close to ISBT-43 and Sector 17:</strong> Its
                      position makes onward travel — whether that's arriving
                      by bus or heading out to the main plaza — straightforward.
                    </li>
                  </ul>
                </section>

                {/* ── Nearby ─────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Sights</h2>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/sector-17-chandigarh-travel-guide">
                          Sector 17
                        </Link>
                      </strong>
                      : Chandigarh's central plaza and main shopping district,
                      an easy walk or short ride away.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sector-26-chandigarh-travel-guide">
                          Sector 26
                        </Link>
                      </strong>
                      : Home to the city's best-known food street, a natural
                      add-on for an evening out.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sector-35-chandigarh-travel-guide">
                          Sector 35
                        </Link>
                      </strong>
                      : Another centrally located, visitor-friendly sector
                      often mentioned alongside Sector 22 for accommodation.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (45-60 Minutes)</h2>
                  <p>
                    Sector 22 doesn't need a dedicated half-day — it's best
                    treated as a practical stop folded into a wider
                    Chandigarh itinerary.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-20 min",
                        title: "Walk the Market Strip",
                        color: "bg-amber-700",
                        activities: [
                          "Browse the clothing, footwear and general stores",
                          "Pick up everyday essentials if needed",
                        ],
                      },
                      {
                        day: "20-45 min",
                        title: "Errands & a Quick Bite",
                        color: "bg-forest-600",
                        activities: [
                          "Handle any practical errands near your stay",
                          "Grab a quick, local bite from the market area",
                        ],
                      },
                      {
                        day: "45-60 min",
                        title: "Head to Sector 17",
                        color: "bg-sky-600",
                        activities: [
                          "Walk or take a short auto ride to Sector 17 Plaza",
                          "Continue your day with the city's main sights",
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

                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Most visitors pair a short Sector 22 stop with a longer
                    session at{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17
                    </Link>{" "}
                    rather than spending a whole day here.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Sector 22 itself has no entry cost — it's an open
                    residential-cum-commercial sector, not a ticketed
                    attraction — so your main expenses here are accommodation,
                    everyday shopping, and local transport.
                  </p>
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
                            "Budget hotel/night (Sector 22)",
                            "₹1,200",
                            "₹2,000",
                            "₹2,500",
                          ],
                          [
                            "Transport to/from Sector 17",
                            "₹0 (walk)",
                            "₹80 (auto)",
                            "₹200 (cab)",
                          ],
                          ["Market shopping / snacks", "₹300", "₹800", "₹1,500+"],
                          ["Total (approx.)", "₹1,500", "₹2,880", "₹4,200+"],
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
                    * Figures are per person, per night/visit, and are
                    approximate. See our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a full daily budget breakdown across the city.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Sector 22</h2>
                  <ul>
                    <li>
                      <strong>Treat it as a base, not a sightseeing stop:</strong>{" "}
                      Sector 22 works best as a place to stay or run errands,
                      with the actual sightseeing a short ride away in other
                      sectors.
                    </li>
                    <li>
                      <strong>Compare it fairly to Sector 17:</strong> Don't
                      expect the polished plaza atmosphere of Sector 17 —
                      Sector 22 market is a genuinely local, everyday shopping
                      strip.
                    </li>
                    <li>
                      <strong>Book budget stays early in peak season:</strong>{" "}
                      Sector 22's affordable hotels are popular with
                      budget-conscious travellers, so availability can tighten
                      up around long weekends.
                    </li>
                    <li>
                      <strong>Carry cash for smaller shops:</strong> Many of
                      the market's smaller stores still work better with cash
                      than card or digital payments.
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
                          "Use Sector 22 as a budget-friendly base",
                          "Walk or take a short auto ride over to Sector 17",
                          "Carry cash for smaller market shops",
                          "Book budget stays early around long weekends",
                          "Combine it with a wider Chandigarh day out",
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
                          "Expect a polished, tourist-oriented shopping plaza",
                          "Plan a full day around Sector 22 alone",
                          "Assume every shop accepts cards",
                          "Skip checking hotel availability during peak season",
                          "Overlook how close Sector 17 actually is",
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

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> Base yourself in
                    Sector 22 and combine it with{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17's
                    </Link>{" "}
                    plaza and{" "}
                    <Link href="/blog/sector-26-chandigarh-travel-guide">
                      Sector 26's
                    </Link>{" "}
                    food street for a well-rounded, budget-friendly
                    Chandigarh stay — see the full{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for the citywide itinerary.
                  </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div
                        key={f.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2 text-base"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {f.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Sector 22",
                  "Chandigarh",
                  "Local Market",
                  "Budget Stays",
                  "Everyday Chandigarh",
                  "Where to Stay",
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

              <RelatedPostsGrid currentSlug="sector-22-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sector-22-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
