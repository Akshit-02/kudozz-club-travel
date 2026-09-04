// src/app/blog/thenzawl-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Thenzawl Travel Guide: Handloom & Tips",
  description:
    "Complete Thenzawl guide — Mizo puan handloom weaving, one of Mizoram's only golf courses, and the practical base for Tamdil Lake and Vantawng Falls, how to reach from Aizawl, and a full visit plan.",
  keywords:
    "Thenzawl travel guide, Thenzawl Mizoram, Mizo puan weaving, Thenzawl golf course, Tamdil Lake base, Vantawng Falls base, how to reach Thenzawl, central Mizoram circuit",
  openGraph: {
    title: "Thenzawl Travel Guide: Handloom & Tips",
    description:
      "A handloom-weaving town in central Mizoram, and the practical gateway to Tamdil Lake and Vantawng Falls — the complete guide to Thenzawl.",
    url: "https://club.kudozz.in/blog/thenzawl-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Green hill town landscape, evoking Thenzawl's setting in central Mizoram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Thenzawl Travel Guide: Handloom & Tips",
    description:
      "A handloom-weaving town in central Mizoram, and the practical gateway to Tamdil Lake and Vantawng Falls.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/thenzawl-travel-guide",
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
          headline: "Thenzawl Travel Guide: Handloom & Tips",
          description:
            "Complete Thenzawl guide — Mizo puan handloom weaving, one of Mizoram's only golf courses, and the practical base for Tamdil Lake and Vantawng Falls, how to reach from Aizawl, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/thenzawl-travel-guide",
          },
          keywords: "Thenzawl, Mizoram, handloom weaving, puan, golf course, off-beat",
          about: {
            "@type": "Place",
            name: "Thenzawl",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Mizoram",
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
                name: "Mizoram",
                item: "https://club.kudozz.in/blog/mizoram-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Thenzawl",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is Mizo puan and why is Thenzawl known for it?",
    a: "Puan is a traditional Mizo handwoven textile worn as a wraparound garment, with distinctive patterns that vary by clan and occasion. Thenzawl is one of the centres of this craft in Mizoram, home to weaving cooperatives where you can watch artisans at work and buy authentic pieces directly.",
  },
  {
    q: "How far is Thenzawl from Aizawl?",
    a: "Thenzawl is roughly 130 km from Aizawl by road, a drive of about 4-5 hours given Mizoram's hilly terrain.",
  },
  {
    q: "Is Thenzawl a good base for Tamdil Lake and Vantawng Falls?",
    a: "Yes — both are a short drive from Thenzawl, making it the natural overnight base for exploring central Mizoram's two biggest natural attractions without the longer haul back to Aizawl each day.",
  },
  {
    q: "Is the golf course in Thenzawl open to visitors?",
    a: "Thenzawl's golf course is one of the few in Mizoram and is generally open to visitors, though facilities are modest compared to major golf destinations — it's more of a local curiosity than a golfing pilgrimage site.",
  },
  {
    q: "What is the best time to visit Thenzawl?",
    a: "October to March offers the most comfortable weather for exploring the town and the wider central Mizoram circuit, with clear skies and moderate temperatures.",
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
  { id: "introduction", title: "A Weaving Town in Central Mizoram", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Thenzawl", level: 2 },
  { id: "things-to-do", title: "Weaving, Golf & the Gateway Role", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ThenzawlGuidePage() {
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
              alt="Green hill town landscape, evoking Thenzawl's setting in central Mizoram"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Mizoram", href: "/blog/mizoram-travel-guide" },
                { label: "Thenzawl", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Thenzawl", "Mizoram", "Handloom Weaving", "Puan Textiles"].map((tag) => (
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
              Thenzawl: Handloom Weaving & the Central Mizoram Gateway
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet weaving town where Mizo puan comes off the loom, one of
              the state's only golf courses, and the practical base for
              Tamdil Lake and Vantawng Falls.
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
                  text: "Central Mizoram",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
                },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>A Weaving Town in Central Mizoram</h2>
                  <p>
                    <strong>Thenzawl</strong> is a small central-Mizoram town
                    best known for its handloom weaving tradition, in
                    particular the production of <strong>Mizo puan</strong> —
                    traditional handwoven textiles with distinctive patterns
                    worn as wraparound garments, an important part of Mizo
                    cultural identity. Weaving cooperatives around town let
                    visitors watch artisans at work and buy authentic pieces
                    directly from the people who made them.
                  </p>
                  <p>
                    Thenzawl is also home to one of the only golf courses in
                    Mizoram — an unusual and distinctive local feature for a
                    town of its size. But its most practical role for most
                    visitors is as the base town for exploring two of central
                    Mizoram&apos;s biggest natural attractions:{" "}
                    <Link href="/blog/tamdil-lake-travel-guide">
                      Tamdil Lake
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/vantawng-falls-travel-guide">
                      Vantawng Falls
                    </Link>
                    , both a short drive away.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🧵</span> Thenzawl at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Mizoram" },
                        { icon: "🚗", label: "From Aizawl", value: "~130 km" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🧵", label: "Known For", value: "Puan Weaving, Golf" },
                        { icon: "🏞️", label: "Nearby", value: "Tamdil Lake, Vantawng Falls" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹4,500" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Thenzawl</h2>
                  <p>
                    Mizoram&apos;s subtropical hill climate means timing
                    matters for comfortable travel between Thenzawl and the
                    surrounding sights.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and clear — the most comfortable window for exploring the town and the wider central Mizoram circuit.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humidity rising",
                        text: "Temperatures climb ahead of the monsoon, still manageable with an early start to your sightseeing.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Mizoram receives substantial rain in this window; roads to Tamdil Lake and Vantawng Falls can get slippery.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🧣",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, clearest skies",
                        text: "The most reliable stretch for clear views at both nearby natural attractions and comfortable walking weather.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
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
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Our pick:</strong> October to March — cool, dry
                    conditions that make both the weaving-workshop visits and
                    the drives out to Tamdil Lake and Vantawng Falls
                    genuinely pleasant.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Thenzawl</h2>
                  <ul>
                    <li>
                      <strong>By road from Aizawl:</strong> Roughly 130 km, a
                      4-5 hour drive given Mizoram&apos;s winding hill roads
                      — shared taxis and private vehicles both run this
                      route.
                    </li>
                    <li>
                      <strong>Nearest airport:</strong> Lengpui Airport near
                      Aizawl is the state&apos;s main air connection, with a
                      road transfer onward to Thenzawl.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Use Thenzawl as your
                    overnight base rather than day-tripping from Aizawl —
                    it cuts hours off the return journey each day when
                    visiting Tamdil Lake and Vantawng Falls.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Weaving, Golf & the Gateway Role</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="Hill town setting evoking Thenzawl, Mizoram"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Puan Weaving Cooperatives</h3>
                  <p>
                    Watching a weaver work a traditional loom is Thenzawl&apos;s
                    signature experience. Cooperatives around town let
                    visitors see the process from thread to finished puan,
                    and buying directly from a weaving group is the best way
                    to take home an authentic piece.
                  </p>
                  <h3>The Golf Course</h3>
                  <p>
                    One of Mizoram&apos;s only golf courses sits in Thenzawl —
                    a modest facility by international standards, but a
                    genuine curiosity worth a look even for non-golfers.
                  </p>
                  <h3>Base for Tamdil Lake & Vantawng Falls</h3>
                  <p>
                    Thenzawl&apos;s most practical role is as the overnight
                    base for exploring{" "}
                    <Link href="/blog/tamdil-lake-travel-guide">
                      Tamdil Lake
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/vantawng-falls-travel-guide">
                      Vantawng Falls
                    </Link>
                    , both reachable on short drives from town.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Thenzawl</h2>
                  <p>
                    Accommodation is modest but functional, serving as a
                    genuine base town for the wider region rather than a
                    resort destination in its own right.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: ["Local guesthouses", "Basic lodges near the town centre", "Government tourist lodge"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: ["Small private hotels", "Business-style lodges", "Family-run guesthouses"],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌿",
                        range: "₹3,500–₹6,000+/night",
                        picks: ["Premium lodges (limited)", "Best-available rooms in town", "Advance booking recommended"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
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

                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Weaving",
                        color: "bg-amber-700",
                        activities: [
                          "Drive in from Aizawl, check in",
                          "Visit a puan weaving cooperative",
                          "Evening at the golf course grounds",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tamdil Lake & Vantawng Falls",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at Tamdil Lake, boating",
                          "Afternoon drive to Vantawng Falls",
                          "Return to Thenzawl for the night",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Last-minute shopping for puan textiles",
                          "Onward drive to Aizawl or Serchhip",
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
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>Where to Eat in Thenzawl</h2>
                  <ul>
                    <li>
                      <strong>Local eateries:</strong> Simple Mizo meals —
                      rice, meat or fish curries, and bai (a mixed
                      vegetable dish) — are the standard fare in town.
                    </li>
                    <li>
                      <strong>Guesthouse kitchens:</strong> Most
                      accommodation serves home-style meals, often the most
                      reliable option given the limited standalone
                      restaurant scene.
                    </li>
                  </ul>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹900", "₹2,500", "₹4,500"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Local transport/day", "₹500", "₹1,200", "₹2,500"],
                          ["Weaving purchase (per piece)", "₹800", "₹2,000", "₹5,000+"],
                        ].map(([exp, b, m, l], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{l}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Thenzawl</h2>
                  <ul>
                    <li>
                      <strong>Buy directly from a weaving cooperative:</strong>{" "}
                      It supports local artisans and generally gets you a
                      more authentic piece than a general tourist shop.
                    </li>
                    <li>
                      <strong>Use it as your overnight base:</strong> Cuts
                      significant travel time versus day-tripping from
                      Aizawl to Tamdil Lake or Vantawng Falls.
                    </li>
                    <li>
                      <strong>Allow real time at the looms:</strong> Watching
                      the weaving process is worth more time than a rushed
                      five-minute stop.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Visit a genuine weaving cooperative",
                          "Base yourself here for the central Mizoram circuit",
                          "Try local Mizo dishes at a guesthouse",
                          "Carry cash for the region",
                          "Combine with Tamdil Lake and Vantawng Falls",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Rush the weaving-workshop visit",
                          "Expect a large restaurant scene",
                          "Skip an overnight if visiting both nearby sights",
                          "Assume wide card acceptance outside Aizawl",
                          "Buy puan from unverified street sellers only",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
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
                    <strong>🗺️ Extend the trip:</strong> Thenzawl pairs
                    naturally with{" "}
                    <Link href="/blog/tamdil-lake-travel-guide">
                      Tamdil Lake
                    </Link>
                    ,{" "}
                    <Link href="/blog/vantawng-falls-travel-guide">
                      Vantawng Falls
                    </Link>
                    , and{" "}
                    <Link href="/blog/serchhip-travel-guide">Serchhip</Link>{" "}
                    for a full central Mizoram circuit. See our full{" "}
                    <Link href="/blog/mizoram-travel-guide">
                      Mizoram travel guide
                    </Link>{" "}
                    for the wider state.
                  </div>
                </section>

                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
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

              <div className="mt-10 flex flex-wrap gap-2">
                {["Thenzawl", "Mizoram", "Handloom Weaving", "Puan Textiles", "Off-beat"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="thenzawl-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="thenzawl-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
