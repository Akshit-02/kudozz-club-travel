// src/app/blog/jeypore-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jeypore Travel Guide: Tribal Heritage & Tips",
  description:
    "Complete Jeypore guide — the former Jeypore princely seat, Duduma Falls, tribal-region gateway, how to reach from Koraput, and a full visit plan.",
  keywords:
    "Jeypore travel guide, Jeypore Odisha, Jeypore Palace, Duduma Falls, Koraput district, tribal heritage Odisha, how to reach Jeypore, Eastern Ghats Odisha",
  openGraph: {
    title: "Jeypore Travel Guide: Tribal Heritage & Tips",
    description:
      "A former princely seat, a scenic waterfall, and the practical gateway to southern Odisha's tribal heartland — the complete Jeypore guide.",
    url: "https://club.kudozz.in/blog/jeypore-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Hill town landscape, evoking Jeypore's setting in the Eastern Ghats of southern Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeypore Travel Guide: Tribal Heritage & Tips",
    description:
      "A former princely seat and the gateway to southern Odisha's tribal region — the complete Jeypore guide.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jeypore-travel-guide",
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
          headline: "Jeypore Travel Guide: Tribal Heritage & Tips",
          description:
            "Complete Jeypore guide — the former Jeypore princely seat, Duduma Falls, tribal-region gateway, how to reach from Koraput, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/jeypore-travel-guide",
          },
          keywords:
            "Jeypore, Odisha, Koraput district, tribal heritage, Duduma Falls",
          about: {
            "@type": "Place",
            name: "Jeypore",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha",
                item: "https://club.kudozz.in/blog/odisha-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Jeypore",
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
    q: "How far is Jeypore from Koraput?",
    a: "It's a short distance given their close proximity — the two towns are easily combined in a single southern Odisha regional trip.",
  },
  {
    q: "Is Jeypore Palace open to visitors?",
    a: "Access varies and isn't always extensive for public visits — check current status locally before planning a dedicated trip specifically around the palace interior.",
  },
  {
    q: "How far is Duduma Falls from Jeypore?",
    a: "It's a distance from town, reachable as a half-day excursion — a scenic, multi-tiered waterfall worth the detour for anyone with time to spare.",
  },
  {
    q: "Is Jeypore a good base for the wider region?",
    a: "Yes — alongside Koraput town, Jeypore is a practical base for exploring southern Odisha's tribal region, weekly markets, and nearby natural attractions.",
  },
  {
    q: "What is the best time to visit Jeypore?",
    a: "October to February offers the most comfortable weather for sightseeing and excursions to Duduma Falls and beyond.",
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
  { id: "introduction", title: "A Former Princely Seat", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jeypore", level: 2 },
  { id: "things-to-do", title: "Palace, Falls & Tribal Markets", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JeyporeGuidePage() {
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
              src="/images/destinations/kasol/kasol.jpg"
              alt="Hill town landscape, evoking Jeypore's setting in the Eastern Ghats of southern Odisha"
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
                { label: "Odisha", href: "/blog/odisha-travel-guide" },
                { label: "Jeypore", href: null },
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
                "Jeypore",
                "Koraput District",
                "Duduma Falls",
                "Odisha",
                "Off-beat",
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
              Jeypore: A Princely Seat & Gateway to Tribal Odisha
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A former royal town, a scenic waterfall a short drive away,
              and the practical base for exploring southern Odisha's tribal
              heartland.
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
                  text: "Koraput district, Odisha",
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
                  <h2>A Former Princely Seat</h2>
                  <p>
                    <strong>Jeypore</strong>, in{" "}
                    <Link href="/blog/koraput-travel-guide">
                      Koraput district
                    </Link>
                    , southern{" "}
                    <Link href="/blog/odisha-travel-guide">Odisha</Link>, was
                    once the seat of the Jeypore princely family, whose
                    former palace (Jeypore Palace/Rajbari) still reflects
                    this royal history, even where public access to the
                    interior remains limited.
                  </p>
                  <p>
                    Today the town functions primarily as a practical
                    gateway to the wider Koraput tribal region and its
                    weekly markets, and is commonly used as a base alongside
                    Koraput town itself for exploring the area. The
                    surrounding Eastern Ghats landscape includes Duduma
                    Falls, a scenic multi-tiered waterfall worth a dedicated
                    excursion.
                  </p>
                  <p>
                    Jeypore pairs naturally with{" "}
                    <Link href="/blog/koraput-travel-guide">Koraput</Link> and{" "}
                    <Link href="/blog/deomali-travel-guide">Deomali</Link> as
                    part of a fuller southern Odisha tribal-region circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Jeypore at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Koraput district, Odisha",
                        },
                        {
                          icon: "🚗",
                          label: "From Koraput",
                          value: "Short drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Royal history, tribal gateway",
                        },
                        {
                          icon: "💦",
                          label: "Nearby",
                          value: "Duduma Falls",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Koraput, Deomali",
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
                  <h2>Best Time to Visit Jeypore</h2>
                  <p>
                    As with the rest of the Koraput region, cooler, drier
                    months make for the most comfortable sightseeing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable temperatures for town sightseeing and excursions to Duduma Falls.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still manageable",
                        text: "Warmer than winter, but the hill elevation still offers some relief compared to Odisha's plains.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush, difficult roads",
                        text: "Heavy rain swells Duduma Falls dramatically but makes travel through the region harder going.",
                      },
                      {
                        season: "Post-Monsoon",
                        emoji: "💦",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best waterfall flow",
                        text: "Late September into October often combines strong waterfall flow with easing rains.",
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
                    <strong>Our pick:</strong> October to February — the
                    most comfortable window for both town sightseeing and
                    the Duduma Falls excursion.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jeypore</h2>
                  <p>
                    Jeypore's proximity to Koraput makes it an easy addition
                    to a southern Odisha trip.
                  </p>
                  <ul>
                    <li>
                      <strong>From Koraput:</strong> A short drive given
                      their close proximity — cross-link{" "}
                      <Link href="/blog/koraput-travel-guide">
                        our Koraput guide
                      </Link>{" "}
                      for the wider journey from Bhubaneswar.
                    </li>
                    <li>
                      <strong>Direct from Bhubaneswar:</strong> A long
                      journey given the region's southern, interior
                      location — most visitors combine it with Koraput
                      rather than visiting Jeypore in isolation.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in either
                    Koraput or Jeypore and treat the two towns as a single
                    combined stop — the short distance between them makes
                    splitting your stay unnecessary.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Palace, Falls & Tribal Markets</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="Eastern Ghats hill landscape near Jeypore, Koraput district, Odisha"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Jeypore Palace (Rajbari)</h3>
                  <p>
                    The former seat of the Jeypore princely family, worth a
                    stop for its royal history even where interior access
                    is limited — check current status locally.
                  </p>
                  <h3>Duduma Falls</h3>
                  <p>
                    A scenic, multi-tiered waterfall a distance from town,
                    reachable as a half-day excursion and one of the
                    region's most rewarding natural stops.
                  </p>
                  <h3>Tribal Markets & Regional Culture</h3>
                  <p>
                    As with{" "}
                    <Link href="/blog/koraput-travel-guide">Koraput</Link>,
                    Jeypore serves as a base for visiting the wider region's
                    weekly tribal markets — approach these respectfully as
                    functioning community spaces.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Jeypore</h2>
                  <p>
                    Modest hotels form the practical accommodation base for
                    this southern Odisha region.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic town lodges",
                          "Odisha Tourism guesthouses",
                          "Simple family-run stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Business-style hotels in town",
                          "Upgraded guesthouses",
                          "Better-equipped rooms",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏰",
                        range: "₹4,000+/night",
                        picks: [
                          "Very limited premium options",
                          "Occasional heritage-adjacent stays",
                          "Book well ahead",
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
                        title: "Jeypore Town & Palace",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Koraput, check in",
                          "Visit Jeypore Palace/Rajbari",
                          "Explore the town at a relaxed pace",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Duduma Falls & Markets",
                        color: "bg-sky-600",
                        activities: [
                          "Half-day excursion to Duduma Falls",
                          "Visit a weekly tribal market if timing aligns",
                          "Return toward Koraput or onward",
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

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Jeypore</h2>
                  <ul>
                    <li>
                      <strong>Hotel/guesthouse dining:</strong> The most
                      reliable option for simple, home-style Odia meals.
                    </li>
                    <li>
                      <strong>Local eateries:</strong> A handful of small
                      restaurants in town cover basic meals between
                      sightseeing.
                    </li>
                    <li>
                      <strong>Market food stalls:</strong> Worth trying if
                      visiting a weekly tribal market, approached
                      respectfully.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹4,500"],
                          ["Local transport/day", "₹400", "₹800", "₹1,500"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Duduma Falls excursion", "₹500", "₹900", "₹1,500"],
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
                  <h2>Essential Tips for Visiting Jeypore</h2>
                  <ul>
                    <li>
                      <strong>Combine with Koraput:</strong> The short
                      distance between them makes splitting your regional
                      trip across both towns easy and worthwhile.
                    </li>
                    <li>
                      <strong>Check Jeypore Palace access in advance:</strong>{" "}
                      Interior visiting isn't always extensive — confirm
                      before building your visit plan around it.
                    </li>
                    <li>
                      <strong>Time Duduma Falls post-monsoon:</strong> Late
                      September into October often gives the best balance
                      of flow and easing rains.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited
                      outside the main town.
                    </li>
                    <li>
                      <strong>Approach tribal markets respectfully:</strong>{" "}
                      Ask before photographing people, and treat them as
                      community spaces first.
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
                          "Combine Jeypore with Koraput in one trip",
                          "Visit Duduma Falls post-monsoon for best flow",
                          "Check palace access before planning around it",
                          "Carry enough cash for the whole stay",
                          "Ask permission before photographing people",
                          "Allow a full 2 days for the town and falls",
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
                          "Assume the palace interior is fully open without checking",
                          "Rely on cards outside the main town",
                          "Visit Duduma Falls expecting strong flow in dry months",
                          "Treat tribal markets as a photo-op",
                          "Skip Koraput if you've come this far",
                          "Rush the trip into a single day",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Jeypore with{" "}
                    <Link href="/blog/koraput-travel-guide">Koraput</Link> and,
                    for trekkers,{" "}
                    <Link href="/blog/deomali-travel-guide">Deomali</Link>{" "}
                    for a fuller southern Odisha circuit. See our full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
                    </Link>{" "}
                    for the wider state.
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
                  "Jeypore",
                  "Koraput District",
                  "Odisha",
                  "Duduma Falls",
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

              <RelatedPostsGrid currentSlug="jeypore-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jeypore-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
