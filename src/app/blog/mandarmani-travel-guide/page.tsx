// src/app/blog/mandarmani-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mandarmani Travel Guide: Beach Drive & Resorts",
  description:
    "Complete Mandarmani guide — one of India's longest motorable beaches, resort-lined coastline, nearby Tajpur, how to reach from Kolkata, and where to stay.",
  keywords:
    "Mandarmani, Mandarmani beach, Mandarmani beach drive, Mandarmani resorts, Tajpur, Mandarmani how to reach, Mandarmani from Kolkata, West Bengal beach, Digha Mandarmani",
  openGraph: {
    title: "Mandarmani Travel Guide: Beach Drive & Resorts",
    description:
      "One of India's longest motorable beaches — resort-lined coastline, fresh seafood, and a quieter alternative to Digha, roughly 4 hours from Kolkata.",
    url: "https://club.kudozz.in/blog/mandarmani-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Long sandy beach coastline evocative of Mandarmani's motorable beach drive, West Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandarmani Travel Guide: Beach Drive & Resorts",
    description:
      "One of India's longest motorable beaches and a quieter, resort-lined alternative to Digha — the complete Mandarmani guide.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mandarmani-travel-guide",
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
          headline: "Mandarmani Travel Guide: Beach Drive & Resorts",
          description:
            "Complete Mandarmani guide — one of India's longest motorable beaches, resort-lined coastline, nearby Tajpur, how to reach from Kolkata, and where to stay.",
          image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/mandarmani-travel-guide",
          },
          keywords:
            "Mandarmani, Mandarmani beach drive, Tajpur, resorts, West Bengal beach",
          about: {
            "@type": "Place",
            name: "Mandarmani",
            address: {
              "@type": "PostalAddress",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mandarmani",
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
    q: "What makes Mandarmani's beach different from other Bengal beaches?",
    a: "Mandarmani is known for having one of the longest motorable beaches in India — the hard-packed sand allows vehicles to drive directly along the shoreline for several kilometres, a rare feature not found at most Indian beaches, including nearby Digha.",
  },
  {
    q: "How do I reach Mandarmani from Kolkata?",
    a: "Mandarmani has no railway station of its own. Most visitors travel by road, roughly 170 km from Kolkata taking about 4 hours by car. An alternative is to take a train to Digha or Contai and continue by road from there, roughly 30-45 minutes further.",
  },
  {
    q: "Is Mandarmani more expensive than Digha?",
    a: "Not necessarily more expensive overall, but the accommodation mix skews toward resort-style beachfront properties rather than Digha's wider range of budget lodges, so average nightly rates can run a bit higher. Mandarmani does, however, generally feel less commercial and crowded than Digha.",
  },
  {
    q: "What is Tajpur and how does it relate to Mandarmani?",
    a: "Tajpur is a smaller, even quieter beach village a short drive from Mandarmani, often visited as a peaceful add-on or alternative base for travellers who find Mandarmani itself too busy. Many itineraries combine Digha, Mandarmani, and Tajpur into a single coastal loop.",
  },
  {
    q: "When is the best time to visit Mandarmani?",
    a: "October to February offers the best weather for beach time and driving along the shore. Avoid the monsoon months, roughly June to September, when rough seas and high tides make both swimming and beach driving unsafe.",
  },
  {
    q: "Is swimming safe at Mandarmani?",
    a: "Swimming is possible in calmer, marked areas but requires caution — like much of this coast, Mandarmani can have strong undertows, particularly around high tide and during the monsoon. Stick to areas supervised by hotel staff or lifeguards and avoid swimming alone.",
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
  { id: "introduction", title: "India's Longest Beach Drive", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mandarmani", level: 2 },
  { id: "attractions", title: "Beach, Drive & Nearby Tajpur", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MandarmaniGuidePage() {
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
              src="/images/destinations/goa/hero.jpg"
              alt="Long sandy beach coastline evocative of Mandarmani's motorable beach drive, West Bengal"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Mandarmani", href: null },
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
                "Mandarmani",
                "West Bengal",
                "Beach Drive",
                "Tajpur",
                "Weekend Getaway",
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
              Mandarmani: Beach Drive, Resorts & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of India's longest motorable beaches — resort-lined
              coastline, fresh seafood, and a quieter, less commercial
              alternative to Digha, roughly 4 hours from Kolkata.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Purba Medinipur, West Bengal",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>India's Longest Beach Drive</h2>
                  <p>
                    <strong>Mandarmani</strong> has built its reputation on
                    one distinctive feature: a hard-packed stretch of sand
                    long enough and firm enough that vehicles can drive
                    directly along the shoreline for several kilometres,
                    making it one of the <strong>longest motorable beaches
                    in India</strong>. That single fact shapes the whole
                    character of a visit here — sunrise and sunset drives
                    along the coast are as much a part of Mandarmani as
                    swimming or sunbathing.
                  </p>
                  <p>
                    Compared to nearby{" "}
                    <Link href="/blog/digha-travel-guide">Digha</Link>, about
                    30 km down the coast, Mandarmani feels noticeably
                    quieter and less commercial — a resort-lined beachfront
                    rather than a busy promenade town, popular with
                    travellers from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                    looking for a short getaway with a slightly slower pace.
                  </p>
                  <p>
                    Just a little further along the coast sits{" "}
                    <strong>Tajpur</strong>, an even smaller and quieter
                    beach village near the mouth of the Shaula (Chaulkhola)
                    river — many visitors combine Digha, Mandarmani, and
                    Tajpur into a single coastal loop, each offering a
                    slightly different flavour of the same Bengal shoreline.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Mandarmani at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Purba Medinipur, West Bengal",
                        },
                        {
                          icon: "🚗",
                          label: "From Kolkata",
                          value: "~170 km, ~4 hr by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏖️",
                          label: "Known For",
                          value: "Motorable beach drive, resorts",
                        },
                        {
                          icon: "🌊",
                          label: "Nearby",
                          value: "Tajpur, Digha",
                        },
                        {
                          icon: "🦐",
                          label: "Food",
                          value: "Fresh seafood, beach shacks",
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
                  <h2>Best Time to Visit Mandarmani</h2>
                  <p>
                    Sea conditions along this stretch of coast vary sharply
                    by season, and they directly affect both swimming and
                    the beach drive that makes Mandarmani distinctive.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas and firm, dry sand make this the ideal window for the beach drive, beach walks, and comfortable weather overall.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot",
                        text: "Increasing heat and humidity make midday less pleasant, though early mornings and evenings on the beach remain enjoyable.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Rough seas and high tides make both swimming and the signature beach drive unsafe or impossible; many resorts see reduced activity in this window.",
                      },
                      {
                        season: "Weekends",
                        emoji: "🚗",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Busier",
                        text: "As a popular short getaway from Kolkata, Mandarmani gets noticeably busier on weekends and holidays — weekdays offer a quieter experience.",
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
                    <strong>Our pick:</strong> November to February — calm
                    seas, firm sand for the beach drive, and comfortable
                    temperatures for lounging at a beachfront resort.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mandarmani</h2>
                  <p>
                    Mandarmani has no railway station of its own, so nearly
                    every visitor arrives by road, often via{" "}
                    <Link href="/blog/digha-travel-guide">Digha</Link> or
                    Contai.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Kolkata:</strong> The most direct
                      option — roughly 170 km, taking about 4 hours by car.
                      Regular bus services also connect Kolkata to
                      Mandarmani, often via Contai.
                    </li>
                    <li>
                      <strong>Via Digha or Contai by train:</strong> Take a
                      train from Howrah to Digha or Contai, then continue by
                      road for roughly 30-45 minutes to Mandarmani — a good
                      option if you'd rather not drive the whole way.
                    </li>
                    <li>
                      <strong>Getting around Mandarmani:</strong> Most
                      resorts sit directly on or near the beach, so once
                      you've arrived, walking or a short auto ride covers
                      most local needs. Many visitors also simply drive
                      along the beach itself.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If combining Mandarmani with
                    Digha and Tajpur into one coastal loop, plan the route
                    Digha → Mandarmani → Tajpur (or reverse) to minimise
                    backtracking along the coastal road.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Beach, Drive & Nearby Tajpur</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="Beach coastline similar in character to Mandarmani's motorable beach, West Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Motorable Beach Drive</h3>
                  <p>
                    Mandarmani's headline experience — a wide, hard-packed
                    stretch of sand where cars and bikes can drive directly
                    along the shoreline for several kilometres. Sunrise and
                    sunset drives here are a genuine highlight, offering
                    views and a sense of open space that most Indian
                    beaches, with their softer sand, simply can't match.
                  </p>
                  <h3>Resort-Lined Beachfront</h3>
                  <p>
                    Unlike Digha's promenade-and-town layout, Mandarmani's
                    accommodation sits directly along the beach itself, with
                    resorts opening straight onto the sand — giving the
                    town a quieter, more self-contained beach-resort feel
                    rather than a bustling town centre.
                  </p>
                  <h3>Tajpur</h3>
                  <p>
                    A short drive from Mandarmani, Tajpur is smaller and
                    quieter still, sitting near the mouth of the Shaula
                    (also called Chaulkhola) river where it meets the sea.
                    With fewer resorts and far fewer crowds, Tajpur is a
                    good half-day or overnight extension for travellers
                    wanting an even more peaceful stretch of coast.
                  </p>
                  <h3>Fresh Seafood Culture</h3>
                  <p>
                    As a working fishing coast, Mandarmani's food scene
                    leans heavily on the day's catch — resorts and beach
                    shacks alike serve grilled and fried fish, prawns, and
                    crab, often prepared to order right on the beachfront.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mandarmani</h2>
                  <p>
                    Mandarmani's accommodation skews more heavily toward
                    resort-style beachfront properties than Digha's wider
                    mix of budget lodges — most stays sit directly on or
                    near the sand.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Smaller guesthouses set back from the beach",
                          "Basic cottages with shared amenities",
                          "Budget rooms in family-run lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹7,000/night",
                        picks: [
                          "Beachfront resort rooms",
                          "Cottage-style stays with sea views",
                          "Resorts with in-house dining",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "🏖️",
                        range: "₹8,000–₹15,000+/night",
                        picks: [
                          "Larger beach resorts with pools",
                          "Premium sea-facing suites",
                          "Resorts with spa and multi-cuisine dining",
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
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Beach Drive",
                        color: "bg-amber-700",
                        activities: [
                          "Road arrival from Kolkata, check in at a beachfront resort",
                          "Afternoon beach drive along the shoreline",
                          "Fresh seafood dinner at a beach shack",
                          "Sunset walk along the sand",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tajpur & Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Morning relaxation at the resort beach",
                          "Short drive to Tajpur for a quieter contrast",
                          "Depart for Kolkata, or continue to Digha",
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
                    * Combine the trip with a stop at{" "}
                    <Link href="/blog/digha-travel-guide">Digha</Link>,
                    about 30 km away, for a fuller coastal loop covering
                    both the region's biggest beach town and its quieter
                    beach-drive alternative.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Mandarmani</h2>
                  <ul>
                    <li>
                      <strong>Beach shacks and seafood stalls:</strong>{" "}
                      Fresh catch grilled or fried to order — fish, prawns,
                      and crab — right along the beachfront.
                    </li>
                    <li>
                      <strong>Resort restaurants:</strong> Most resorts run
                      their own multi-cuisine dining rooms, offering
                      Bengali, Indian, and continental options alongside
                      the local seafood specialities.
                    </li>
                    <li>
                      <strong>Local Bengali eateries:</strong> A handful of
                      simple restaurants serve everyday thalis for those
                      wanting a more affordable, home-style meal.
                    </li>
                  </ul>
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
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                            "₹2,000",
                            "₹5,000",
                            "₹11,000",
                          ],
                          [
                            "Road transport (round trip)",
                            "₹1,500",
                            "₹3,000",
                            "₹5,000",
                          ],
                          ["Food/day", "₹600", "₹1,500", "₹3,000"],
                          ["Local transport/day", "₹200", "₹500", "₹1,000"],
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
                    * Figures are per person, per day (except road transport,
                    a round-trip figure from Kolkata by car).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mandarmani</h2>
                  <ul>
                    <li>
                      <strong>Check tide timings before driving on the beach:</strong>{" "}
                      The motorable stretch is only accessible at certain
                      tide levels — ask your resort for current timing
                      before heading out.
                    </li>
                    <li>
                      <strong>Swim only in supervised areas:</strong> As
                      with much of this coast, undertows can be strong,
                      particularly around high tide — stick to areas
                      monitored by resort staff or lifeguards.
                    </li>
                    <li>
                      <strong>Book ahead for weekends:</strong> Mandarmani's
                      resort-style accommodation is more limited than
                      Digha's, and rooms fill quickly on weekends and
                      holidays.
                    </li>
                    <li>
                      <strong>Avoid the monsoon months:</strong> Rough seas
                      between roughly June and September make both
                      swimming and the beach drive unsafe.
                    </li>
                    <li>
                      <strong>Consider Tajpur for extra quiet:</strong> If
                      Mandarmani still feels too busy, Tajpur nearby offers
                      an even calmer stretch of coast.
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
                          "Check tide timing before the beach drive",
                          "Swim only in resort-supervised areas",
                          "Book resort rooms ahead for weekends",
                          "Try the fresh, beachfront seafood",
                          "Visit Tajpur for an even quieter stretch",
                          "Pair the trip with a Digha coastal loop",
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
                          "Drive on the beach without checking tide timing",
                          "Swim during monsoon or high-tide rough seas",
                          "Expect walk-up rooms on a busy weekend",
                          "Assume Mandarmani has a railway station",
                          "Skip sun protection on the open beach drive",
                          "Rush past Tajpur if you have an extra half day",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Mandarmani
                    with{" "}
                    <Link href="/blog/digha-travel-guide">Digha</Link> for
                    a fuller coastal loop, or return to{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                    for onward travel — see our full{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal travel guide
                    </Link>{" "}
                    for more coastal and heritage destinations across the
                    state.
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
                  "Mandarmani",
                  "West Bengal",
                  "Beach Drive",
                  "Bay of Bengal",
                  "Weekend Getaway",
                  "Tajpur",
                  "Digha",
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

              <RelatedPostsGrid currentSlug="mandarmani-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mandarmani-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
