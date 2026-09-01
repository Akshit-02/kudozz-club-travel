// src/app/blog/sector-35-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sector 35 Chandigarh Guide: Market, Cafés & Student Vibe",
  description:
    "Complete guide to Sector 35, Chandigarh — a modern SCO market, café-and-casual-dining scene, and the city's most popular sector with students and young professionals.",
  keywords:
    "Sector 35 Chandigarh, Sector 35 market, Chandigarh cafes, Sector 35 shopping, Chandigarh student area, Sector 35 restaurants, DAV College Chandigarh, Chandigarh young crowd market",
  openGraph: {
    title: "Sector 35 Chandigarh Guide: Market, Cafés & Student Vibe",
    description:
      "A modern SCO market strip, a strong café scene, and the liveliest young crowd in the city — Sector 35 is Chandigarh's most contemporary market district.",
    url: "https://club.kudozz.in/blog/sector-35-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A clean, orderly Chandigarh commercial street, evoking Sector 35's modern SCO market and café strip",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sector 35 Chandigarh Guide: Market, Cafés & Student Vibe",
    description:
      "A modern market strip and lively café scene popular with students and young professionals — the complete Sector 35 guide.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sector-35-chandigarh-travel-guide",
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
          headline: "Sector 35 Chandigarh Guide: Market, Cafés & Student Vibe",
          description:
            "Complete guide to Sector 35, Chandigarh — a modern SCO market, café-and-casual-dining scene, and the city's most popular sector with students and young professionals.",
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
            "@id": "https://club.kudozz.in/blog/sector-35-chandigarh-travel-guide",
          },
          keywords:
            "Sector 35 Chandigarh, Sector 35 market, Chandigarh cafes, Sector 35 shopping, Chandigarh student area",
          about: {
            "@type": "Place",
            name: "Sector 35, Chandigarh",
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
                name: "Sector 35",
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
    q: "What makes Sector 35 different from Sector 17 or Sector 22?",
    a: "Sector 35 is Chandigarh's more contemporary, youth-oriented market — its SCO (Shop-Cum-Office) shopfronts are newer and better organized than the older Sector 17 and Sector 22 markets, and the crowd skews younger thanks to nearby colleges. Where Sector 17 is the city centre and Sector 22 is an everyday neighbourhood market, Sector 35 is where students and young professionals actually hang out.",
  },
  {
    q: "Is Sector 35 good for cafes and casual dining?",
    a: "Yes — it has one of Chandigarh's stronger café and fast-casual dining clusters, with a good mix of coffee shops, quick-bite restaurants, and clothing/electronics stores in a compact, walkable strip.",
  },
  {
    q: "Are there colleges near Sector 35?",
    a: "Yes, the area is associated with institutions like DAV College, which is part of why the market has such a strong student presence and a livelier, younger evening atmosphere than some of Chandigarh's older commercial sectors.",
  },
  {
    q: "How much time should I spend in Sector 35?",
    a: "An hour or two is enough for a casual browse and a meal — it's not a destination that needs a half or full day, more a pleasant stop for shopping or food on the way to or from somewhere else.",
  },
  {
    q: "Is Sector 35 walkable?",
    a: "Yes, the main market strip is compact and easy to walk, with most shops, cafés, and restaurants clustered along a single organized commercial stretch.",
  },
  {
    q: "How do I get to Sector 35 from Sector 17?",
    a: "It's a short auto or cab ride, generally under 15-20 minutes depending on traffic, making it easy to combine with a Sector 17 visit earlier in the day.",
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
  { id: "introduction", title: "Chandigarh's Youngest Market", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sector 35", level: 2 },
  { id: "market", title: "The Sector 35 Market", level: 2 },
  { id: "food", title: "Cafés & Casual Dining", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Sector35GuidePage() {
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
              alt="A clean, orderly Chandigarh commercial street, evoking Sector 35's modern SCO market and café strip"
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
                { label: "Sector 35", href: null },
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
                "Sector 35",
                "Chandigarh",
                "Market",
                "Cafés",
                "Student Area",
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
              Sector 35, Chandigarh: Market, Cafés & Student Vibe
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A modern SCO market strip, a genuinely good café scene, and the
              liveliest young crowd in the city — Sector 35 is Chandigarh's
              most contemporary commercial district.
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
                  text: "Sector 35, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,700 words",
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
                  <h2>Chandigarh's Youngest Market</h2>
                  <p>
                    <strong>Sector 35</strong> is a well-planned residential
                    and commercial sector in{" "}
                    <Link href="/blog/chandigarh-travel-guide">Chandigarh</Link>
                    , known for its modern SCO (Shop-Cum-Office) market strip
                    and a genuinely strong café-and-casual-dining scene. It's
                    one of the city's more affluent sectors, and thanks to
                    nearby colleges — the area is associated with
                    institutions like DAV College — it draws a noticeably
                    younger, livelier crowd than older commercial areas.
                  </p>
                  <p>
                    Compared to{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17
                    </Link>
                    's central-business-district feel or{" "}
                    <Link href="/blog/sector-22-chandigarh-travel-guide">
                      Sector 22
                    </Link>
                    's everyday neighbourhood-market character, Sector 35 is
                    Chandigarh's most contemporary shopping strip — clothing
                    and electronics stores, mobile shops, and a dense run of
                    cafés and fast-casual restaurants that stay busy well
                    into the evening.
                  </p>
                  <p>
                    It's not a heritage or sightseeing stop by any stretch,
                    but for anyone wanting a feel for how young, urban
                    Chandigarh actually spends its evenings, Sector 35 is
                    the sector to see.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>☕</span> Sector 35 at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 35, Chandigarh",
                        },
                        {
                          icon: "🛍️",
                          label: "Known For",
                          value: "SCO market, cafés",
                        },
                        {
                          icon: "🎓",
                          label: "Nearby",
                          value: "DAV College and other institutes",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free (open market)",
                        },
                        {
                          icon: "⏰",
                          label: "Best Hours",
                          value: "Late afternoon – late evening",
                        },
                        {
                          icon: "🚗",
                          label: "From Sector 17",
                          value: "~15-20 min drive",
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
                  <h2>Best Time to Visit Sector 35</h2>
                  <p>
                    Sector 35 is a year-round market rather than a seasonal
                    attraction — timing here is more about the day and hour
                    than the calendar.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Late Afternoon",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Good for unhurried shopping",
                        text: "Shops are open, the market is comfortably busy without being crowded, and it's an easy time to browse clothing and electronics stores at a relaxed pace.",
                      },
                      {
                        season: "Evening",
                        emoji: "🌆",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best for the café-and-food scene",
                        text: "This is when Sector 35 really comes alive — cafés fill up with students and young professionals, and the market takes on its liveliest, most social atmosphere.",
                      },
                      {
                        season: "Weekends",
                        emoji: "🎉",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Busiest overall",
                        text: "Expect a fuller, more energetic market and café scene, especially in the evening — a good time to soak in the atmosphere if crowds don't bother you.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Most comfortable weather",
                        text: "Cooler temperatures make walking the market strip and sitting outdoors at cafés genuinely pleasant, as with most of outdoor Chandigarh.",
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
                    <strong>Our pick:</strong> a weekday early evening — the
                    market and cafés are lively without the full weekend
                    crowd, and it's easy to find seating.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sector 35</h2>
                  <p>
                    Sector 35 is well connected within Chandigarh's grid,
                    making it an easy add-on to a city day.
                  </p>
                  <ul>
                    <li>
                      <strong>From Sector 17:</strong> Roughly 15-20 minutes
                      by auto or cab, depending on traffic.
                    </li>
                    <li>
                      <strong>From Sector 22 or Sector 26:</strong> A short,
                      comfortable ride, easy to combine into the same
                      afternoon or evening.
                    </li>
                    <li>
                      <strong>By app-based cab or auto:</strong> The most
                      convenient way in for first-time visitors unfamiliar
                      with the sector grid.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're already exploring
                    Sector 26's food street, Sector 35 makes a good
                    follow-up stop for coffee or dessert afterward.
                  </div>
                </section>

                {/* ── Market ────────────────────────────────────────────── */}
                <section id="market">
                  <h2>The Sector 35 Market</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="A modern, orderly commercial strip, evoking Sector 35's SCO shopfronts in Chandigarh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Sector 35's market runs along a comparatively modern,
                    well-organized commercial strip of SCO (Shop-Cum-Office)
                    units — clothing stores, mobile and electronics shops,
                    and a scattering of lifestyle retail, all more
                    contemporary in feel than the older shopfronts of Sector
                    17 or Sector 22.
                  </p>
                  <p>
                    It's a compact, walkable strip rather than a sprawling
                    market, which makes it easy to cover in a single visit
                    without much backtracking — most visitors combine
                    browsing here with a stop at one of the area's cafés.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food">
                  <h2>Cafés & Casual Dining</h2>
                  <p>
                    The real draw of Sector 35, for many, is its café and
                    fast-casual dining scene — a dense run of coffee shops
                    and quick-bite restaurants that stay busy from late
                    afternoon through the evening, thanks largely to the
                    steady flow of students and young professionals from
                    nearby colleges and offices.
                  </p>
                  <ul>
                    <li>
                      <strong>Specialty coffee and casual cafés:</strong>{" "}
                      A strong concentration for a market this size, popular
                      for both quick coffee stops and longer hangouts.
                    </li>
                    <li>
                      <strong>Fast-casual North Indian and continental
                      food:</strong> Quick, reliable options for a casual
                      meal without needing a reservation.
                    </li>
                    <li>
                      <strong>Evening hangout spots:</strong> Several cafés
                      double as informal evening meeting points for
                      students and young professionals.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Sector 35 is best treated as a relaxed shopping-and-food
                    stop rather than a planned sightseeing block.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-45 min",
                        title: "Browse the Market",
                        color: "bg-sky-600",
                        activities: [
                          "Walk the SCO market strip",
                          "Check out clothing, electronics, and lifestyle stores",
                          "Note a café or restaurant for later",
                        ],
                      },
                      {
                        day: "45 min - 1.5 hrs",
                        title: "Café Stop or Meal",
                        color: "bg-amber-700",
                        activities: [
                          "Settle into a café for coffee or a light meal",
                          "People-watch the market's young, energetic crowd",
                          "Try a fast-casual restaurant if you want something more filling",
                        ],
                      },
                      {
                        day: "Evening (optional)",
                        title: "Extend the Outing",
                        color: "bg-purple-600",
                        activities: [
                          "Head to Sector 26 for a bigger dinner if still hungry",
                          "Or return to Sector 17 for a city-centre evening walk",
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
                  <p>
                    There's no entry fee here — Sector 35 is an open market,
                    so your spend is entirely on shopping and food.
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
                          ["Entry", "Free", "Free", "Free"],
                          [
                            "Transport to/from",
                            "₹100 (shared auto)",
                            "₹300 (cab, round trip)",
                            "₹600 (private cab, round trip)",
                          ],
                          [
                            "Café/food per person",
                            "₹200",
                            "₹500",
                            "₹1,000+",
                          ],
                          [
                            "Shopping (optional)",
                            "—",
                            "₹1,000",
                            "₹3,000+",
                          ],
                          ["Total (approx.)", "₹300", "₹1,800", "₹4,600+"],
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
                    * Figures are per person, per visit. See our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a full city budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Sector 35</h2>
                  <ul>
                    <li>
                      <strong>Visit in the evening for the best
                      atmosphere:</strong> The café scene and crowd energy
                      pick up noticeably after late afternoon.
                    </li>
                    <li>
                      <strong>Compact, walkable strip:</strong> No need for
                      internal transport once you're at the market.
                    </li>
                    <li>
                      <strong>Combine with Sector 26 or Sector 17:</strong>{" "}
                      Both are a short ride away — see our{" "}
                      <Link href="/blog/sector-26-chandigarh-travel-guide">
                        Sector 26 guide
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/sector-17-chandigarh-travel-guide">
                        Sector 17 guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Weekday visits are quieter:</strong> Weekends
                      bring a noticeably bigger crowd, especially in the
                      evening.
                    </li>
                    <li>
                      <strong>Not a heritage stop:</strong> Come for the
                      market and café atmosphere, not sightseeing.
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
                          "Visit in the late afternoon or evening",
                          "Try one of the specialty coffee cafés",
                          "Walk the compact SCO market strip",
                          "Combine it with Sector 26 or Sector 17",
                          "Expect a younger, more casual crowd than Sector 17",
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
                          "Expect monuments or heritage sights here",
                          "Visit expecting a quiet, empty market on weekends",
                          "Plan a full day around it — an hour or two is plenty",
                          "Skip Sector 17 or Sector 26 assuming Sector 35 replaces them",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Sector 35 with{" "}
                    <Link href="/blog/sector-22-chandigarh-travel-guide">
                      Sector 22
                    </Link>{" "}
                    for a broader look at Chandigarh's neighbourhood markets,
                    or head to{" "}
                    <Link href="/blog/sector-26-chandigarh-travel-guide">
                      Sector 26
                    </Link>{" "}
                    afterward for a heartier Punjabi dinner.
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
                  "Sector 35",
                  "Chandigarh",
                  "Market",
                  "Cafés",
                  "Student Area",
                  "Shopping",
                  "Chandigarh Nightlife",
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

              <RelatedPostsGrid currentSlug="sector-35-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sector-35-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
