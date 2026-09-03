// src/app/blog/chidambaram-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chidambaram Guide: Nataraja Temple & Tips",
  description:
    "Complete Chidambaram guide — the Thillai Nataraja Temple, the Chidambara Rahasyam, Bharatanatyam and the Natyanjali festival, how to reach, and a full visit plan.",
  keywords:
    "Chidambaram travel guide, Nataraja Temple, Chidambara Rahasyam, Pancha Bhoota Stalam, Natyanjali festival, Bharatanatyam temple, Cuddalore district, how to reach Chidambaram",
  openGraph: {
    title: "Chidambaram Guide: Nataraja Temple & Tips",
    description:
      "One of the Pancha Bhoota Stalams and the spiritual home of the cosmic dance — the complete guide to Chidambaram's Nataraja Temple.",
    url: "https://club.kudozz.in/blog/chidambaram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient South Indian temple architecture, evoking Chidambaram's Thillai Nataraja Temple",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chidambaram Guide: Nataraja Temple & Tips",
    description:
      "One of the Pancha Bhoota Stalams and the spiritual home of the cosmic dance — the complete guide to Chidambaram's Nataraja Temple.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chidambaram-travel-guide",
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
          headline: "Chidambaram Guide: Nataraja Temple & Tips",
          description:
            "Complete Chidambaram guide — the Thillai Nataraja Temple, the Chidambara Rahasyam, Bharatanatyam and the Natyanjali festival, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
            "@id": "https://club.kudozz.in/blog/chidambaram-travel-guide",
          },
          keywords:
            "Chidambaram, Nataraja Temple, Pancha Bhoota Stalam, Cuddalore, Tamil Nadu heritage",
          about: {
            "@type": "Place",
            name: "Chidambaram",
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
                name: "Tamil Nadu",
                item: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Chidambaram",
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
    q: "What is the Chidambara Rahasyam?",
    a: "It's the 'secret of Chidambaram' — a space behind a curtain in the temple's innermost sanctum that appears empty, symbolizing the formless, all-pervading nature of the divine rather than housing a physical idol in that particular spot.",
  },
  {
    q: "Why is Chidambaram a Pancha Bhoota Stalam?",
    a: "It's one of five temples, each representing one of the five classical elements (earth, water, fire, air, and space). Chidambaram represents Akasha, or space/ether.",
  },
  {
    q: "What is the best time to visit Chidambaram?",
    a: "October to February for comfortable weather; the Natyanjali dance festival, typically around Mahashivratri, is a special time to visit for the classical dance performances at the temple.",
  },
  {
    q: "How far is Chidambaram from Chennai?",
    a: "Roughly 235 km, a 4-5 hour drive — often visited as part of a wider Tamil Nadu temple circuit rather than a standalone Chennai day trip.",
  },
  {
    q: "Is Chidambaram good for dance and culture enthusiasts?",
    a: "Yes — the temple's carved depictions of the 108 karanas (classical dance postures) and its deep association with Bharatanatyam make it a genuinely significant site for anyone interested in Indian classical dance heritage.",
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
  { id: "introduction", title: "Chidambaram: The Cosmic Dance", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chidambaram", level: 2 },
  { id: "things-to-do", title: "The Nataraja Temple", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChidambaramGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Ancient South Indian temple architecture, evoking Chidambaram's Thillai Nataraja Temple"
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
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Chidambaram", href: null },
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
              {["Chidambaram", "Nataraja Temple", "Cuddalore", "Tamil Nadu"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Chidambaram: Nataraja Temple Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A temple built around a mystical empty space, dedicated to
              Shiva as the cosmic dancer — one of Tamil Nadu's most
              philosophically significant shrines.
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
                  text: "Cuddalore district, Tamil Nadu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>Chidambaram: The Cosmic Dance</h2>
                  <p>
                    <strong>Chidambaram</strong>, in Cuddalore district, is
                    home to the Thillai Nataraja Temple, one of the{" "}
                    <strong>Pancha Bhoota Stalams</strong> — five temples
                    each representing one of the five classical elements,
                    with Chidambaram representing Akasha (space/ether).
                  </p>
                  <p>
                    The temple is dedicated to Shiva in his form as
                    Nataraja, the cosmic dancer, and is one of the most
                    architecturally and philosophically significant Shiva
                    temples in South India — famous in particular for the{" "}
                    <strong>Chidambara Rahasyam</strong>, a mystical empty
                    space behind a curtain in the innermost sanctum that
                    symbolizes the formless, all-pervading aspect of the
                    divine.
                  </p>
                  <p>
                    The complex is also a major centre of Bharatanatyam
                    dance heritage, with carved depictions of the 108
                    karanas (classical dance postures) on its walls, and it
                    hosts the Natyanjali dance festival where classical
                    dancers perform as an offering at the temple.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕉️</span> Chidambaram at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Cuddalore district, Tamil Nadu",
                        },
                        {
                          icon: "🚗",
                          label: "From Chennai",
                          value: "~235 km (4-5 hr)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🕉️",
                          label: "Known For",
                          value: "Nataraja Temple",
                        },
                        {
                          icon: "💃",
                          label: "Heritage",
                          value: "Bharatanatyam & Natyanjali",
                        },
                        {
                          icon: "🎯",
                          label: "Significance",
                          value: "Pancha Bhoota Stalam",
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
                  <h2>Best Time to Visit Chidambaram</h2>
                  <p>
                    Both weather and the temple's festival calendar are
                    worth weighing when planning a visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for exploring the temple's large open courtyards.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — visit early morning",
                        text: "Peak heat makes the open-sky temple courtyards uncomfortable by midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌦️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm, occasional rain",
                        text: "Manageable with flexible planning around intermittent showers.",
                      },
                      {
                        season: "Feb – Mar",
                        emoji: "💃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Natyanjali Festival",
                        text: "Classical dancers perform at the temple around Mahashivratri — a genuinely special time to visit if your dates align.",
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
                    <strong>Our pick:</strong> October to February for
                    comfortable weather, or specifically around the
                    Natyanjali festival if you want the dance-performance
                    atmosphere.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chidambaram</h2>
                  <ul>
                    <li>
                      <strong>By road from Chennai:</strong> Roughly 235 km,
                      a 4-5 hour drive — often visited as part of a wider
                      Tamil Nadu temple circuit rather than a standalone day
                      trip.
                    </li>
                    <li>
                      <strong>By rail:</strong> Chidambaram has its own
                      railway station on a well-connected line, a practical
                      option from several Tamil Nadu cities.
                    </li>
                    <li>
                      <strong>As part of a circuit:</strong> Many visitors
                      combine Chidambaram with other Tamil Nadu temple towns
                      on a multi-day trip rather than visiting it in
                      isolation.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Tamil Nadu's major temples
                    typically close for a few hours at midday — plan your
                    visit around morning or evening darshan and rituals
                    rather than arriving at noon.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Nataraja Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Ancient South Indian temple courtyard architecture, evoking Chidambaram's Nataraja Temple complex"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Temple Architecture</h3>
                  <p>
                    The sprawling temple complex includes multiple
                    gopurams, halls, and shrines, reflecting centuries of
                    patronage and expansion — allow time to simply walk the
                    grounds rather than rushing straight to the main
                    sanctum.
                  </p>
                  <h3>The Chidambara Rahasyam</h3>
                  <p>
                    Behind a curtain in the innermost sanctum lies what
                    appears to be an empty space — the temple's most
                    distinctive philosophical feature, symbolizing the
                    formless, all-pervading nature of the divine rather than
                    a physical idol at that specific spot.
                  </p>
                  <h3>Bharatanatyam & the Natyanjali Festival</h3>
                  <p>
                    Carved depictions of the 108 karanas (classical dance
                    postures) line parts of the temple, reflecting its deep
                    connection to Bharatanatyam. The annual Natyanjali
                    festival, typically around Mahashivratri, brings
                    classical dancers to perform as an offering at the
                    temple — a rare, genuinely moving experience for anyone
                    interested in Indian classical dance.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Chidambaram</h2>
                  <p>
                    Accommodation in Chidambaram is modest — most visitors
                    treat it as a day trip or single-night stop within a
                    wider Tamil Nadu temple circuit.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Pilgrim guesthouses near the temple",
                          "Basic town-centre lodges",
                          "Simple family-run stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹3,800/night",
                        picks: [
                          "Business hotels near the highway",
                          "Comfortable mid-range chains",
                          "Well-reviewed local hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "Limited — plan a nearby base",
                        picks: [
                          "Combine with a coastal stay nearby",
                          "Day trip from a larger Tamil Nadu town",
                          "Extend a wider temple-circuit itinerary",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Temple Darshan",
                        color: "bg-amber-700",
                        activities: [
                          "Early darshan at the Nataraja Temple",
                          "Explore the temple halls and gopurams",
                          "Learn about the Chidambara Rahasyam",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Rituals & Reflection",
                        color: "bg-sky-600",
                        activities: [
                          "Return for evening pooja timings",
                          "Observe the temple's dance-heritage carvings",
                          "Local dinner before departure or overnight stay",
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
                    * Consider combining with other Tamil Nadu temple towns
                    for a fuller circuit — see our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Chidambaram</h2>
                  <ul>
                    <li>
                      <strong>Temple prasadam:</strong> Simple, traditional
                      offerings distributed at the temple — worth
                      experiencing as part of the visit.
                    </li>
                    <li>
                      <strong>Local vegetarian restaurants:</strong> Typical
                      Tamil temple-town fare — thalis, dosas, and filter
                      coffee near the temple complex.
                    </li>
                    <li>
                      <strong>Roadside stalls:</strong> Quick, inexpensive
                      snacks and tiffin items for a casual meal between
                      temple visits.
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
                            "₹1,000",
                            "₹2,500",
                            "₹5,000",
                          ],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          [
                            "Local transport/day",
                            "₹200",
                            "₹500",
                            "₹1,200",
                          ],
                          ["Temple donations", "₹50", "₹200", "₹500"],
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
                    * Figures are per person, per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chidambaram</h2>
                  <ul>
                    <li>
                      <strong>Check darshan timings:</strong> The temple
                      follows a specific schedule with a midday closure
                      typical of major Tamil temples — plan around it.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Cover shoulders and
                      knees, and expect to remove footwear before entering.
                    </li>
                    <li>
                      <strong>Time it for Natyanjali if you can:</strong>{" "}
                      The dance festival around Mahashivratri offers a rare
                      and special way to experience the temple.
                    </li>
                    <li>
                      <strong>Combine with a wider circuit:</strong> Given
                      the distance from Chennai, it's most efficient as part
                      of a multi-stop Tamil Nadu temple trip.
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
                          "Check temple darshan and pooja timings ahead",
                          "Dress modestly for the temple visit",
                          "Learn the Chidambara Rahasyam story before visiting",
                          "Time your trip for Natyanjali if possible",
                          "Combine with a wider Tamil Nadu temple circuit",
                          "Try temple prasadam and local vegetarian food",
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
                          "Arrive at midday expecting the temple open",
                          "Skip modest dress at the sanctum",
                          "Treat it as a quick standalone Chennai day trip",
                          "Rush past the temple's dance-heritage carvings",
                          "Expect much luxury accommodation in town",
                          "Miss checking festival dates if timing matters to you",
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
                    <strong>🗺️ Extend the trip:</strong> Chidambaram fits
                    naturally into a wider Tamil Nadu temple circuit. See
                    our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for the broader state.
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
                {["Chidambaram", "Nataraja Temple", "Tamil Nadu", "Cuddalore"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="chidambaram-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chidambaram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
