// src/app/blog/abohar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Abohar Travel Guide: Blackbuck Sanctuary & Tips",
  description:
    "Complete Abohar guide — one of India's highest blackbuck population densities outside a dedicated deer park, the region's kinnow orchards, how to reach, and a full visit plan.",
  keywords:
    "Abohar travel guide, Abohar Wildlife Sanctuary, blackbuck sanctuary Punjab, Fazilka district, kinnow orchards Abohar, how to reach Abohar, Punjab wildlife tourism, off-beat Punjab",
  openGraph: {
    title: "Abohar Travel Guide: Blackbuck Sanctuary & Tips",
    description:
      "A wildlife sanctuary with one of India's highest blackbuck densities, and citrus orchards stretching across Fazilka district — the complete guide to Abohar.",
    url: "https://club.kudozz.in/blog/abohar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green grassland landscape, evoking the Abohar Wildlife Sanctuary's blackbuck habitat in Punjab",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Abohar Travel Guide: Blackbuck Sanctuary & Tips",
    description:
      "One of India's highest blackbuck population densities, and a citrus-growing belt most visitors never see — the complete Abohar guide.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/abohar-travel-guide",
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
          headline: "Abohar Travel Guide: Blackbuck Sanctuary & Tips",
          description:
            "Complete Abohar guide — one of India's highest blackbuck population densities outside a dedicated deer park, the region's kinnow orchards, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/abohar-travel-guide",
          },
          keywords:
            "Abohar, Punjab, blackbuck sanctuary, Fazilka, kinnow, wildlife, off-beat",
          about: {
            "@type": "Place",
            name: "Abohar",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Punjab",
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
                name: "Punjab",
                item: "https://club.kudozz.in/blog/punjab-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Abohar",
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
    q: "What makes Abohar's blackbuck population notable?",
    a: "The Abohar Wildlife Sanctuary has one of the highest blackbuck population densities found anywhere in India outside a dedicated deer park — a genuinely distinctive wildlife claim for a state not typically associated with wildlife tourism.",
  },
  {
    q: "Is Abohar a day trip?",
    a: "Yes, for most visitors. Dedicated tourist accommodation is limited, so the sanctuary and a look at the local kinnow orchards are realistically covered as a day trip from a larger nearby town or city.",
  },
  {
    q: "How far is Abohar from other Punjab cities?",
    a: "Abohar sits in Fazilka district near the Rajasthan border, some distance from Punjab's main Amritsar-Chandigarh circuit — plan it as a standalone side trip rather than an easy add-on to a standard Punjab itinerary.",
  },
  {
    q: "What is the best time for wildlife viewing?",
    a: "October to March, when temperatures are comfortable and animals are more active during daylight hours. Early morning offers the best chance of good blackbuck sightings.",
  },
  {
    q: "What is kinnow and why is it associated with this region?",
    a: "Kinnow is a mandarin-orange hybrid citrus fruit, and Abohar and the surrounding Fazilka district are among India's leading kinnow-growing areas — a distinctive local agricultural and culinary detail worth building into a visit if timing allows.",
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
  { id: "introduction", title: "Punjab's Blackbuck Country", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Abohar", level: 2 },
  { id: "things-to-do", title: "Sanctuary & Kinnow Orchards", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AboharGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Green grassland landscape, evoking the Abohar Wildlife Sanctuary's blackbuck habitat in Punjab"
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
                { label: "Punjab", href: "/blog/punjab-travel-guide" },
                { label: "Abohar", href: null },
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
              {["Abohar", "Blackbuck Sanctuary", "Punjab", "Off-beat"].map(
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
              Abohar: Blackbuck Sanctuary & Kinnow Country Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of India&apos;s highest blackbuck population densities
              outside a dedicated deer park, and a citrus-growing belt
              stretching across Fazilka district — Punjab&apos;s most
              unexpected wildlife stop.
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
                  text: "Fazilka district, Punjab",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>Punjab&apos;s Blackbuck Country</h2>
                  <p>
                    <strong>Abohar</strong>, in Fazilka district near the
                    Rajasthan border, is home to the Abohar Wildlife
                    Sanctuary — notable for one of the highest blackbuck
                    population densities found anywhere in India outside a
                    dedicated deer park. It&apos;s a genuinely distinctive
                    wildlife claim to fame for a{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab destination
                    </Link>
                    , a state rarely associated with wildlife tourism.
                  </p>
                  <p>
                    That makes Abohar a somewhat under-the-radar stop, rarely
                    featured on standard Punjab itineraries built around
                    Amritsar and the Golden Temple. It appeals specifically
                    to travelers interested in wildlife who want something
                    genuinely different.
                  </p>
                  <p>
                    The surrounding economy is heavily agricultural, and{" "}
                    <strong>kinnow</strong> — a mandarin-orange hybrid citrus
                    fruit — is a major local crop. Abohar and the wider
                    Fazilka district are among India&apos;s leading
                    kinnow-growing areas, adding a distinctive local flavor
                    (literally) to a visit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦌</span> Abohar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Fazilka district, Punjab",
                        },
                        {
                          icon: "🦌",
                          label: "Known For",
                          value: "Blackbuck Sanctuary",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🍊",
                          label: "Local Crop",
                          value: "Kinnow (citrus)",
                        },
                        {
                          icon: "🎯",
                          label: "Character",
                          value: "Off-beat, under-visited",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "Half day – 1 day",
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
                  <h2>Best Time to Visit Abohar</h2>
                  <p>
                    Punjab&apos;s extreme summer heat and the sanctuary&apos;s
                    open grassland terrain both make timing matter for a
                    comfortable, rewarding visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable temperatures and good daylight wildlife activity make this the most rewarding window for blackbuck sightings.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid",
                        text: "Punjab's plains get genuinely brutal in this window, with little shade across the sanctuary's open grassland.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green but muddy",
                        text: "The grassland turns lush green, but rain can make tracks difficult and reduce visibility for wildlife spotting.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🍊",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Kinnow harvest season",
                        text: "Local kinnow orchards are at their most productive, a good window to combine the sanctuary with an orchard stop.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    weather for early-morning wildlife viewing, with
                    December-January adding the bonus of kinnow harvest
                    season.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Abohar</h2>
                  <p>
                    Abohar sits in Fazilka district near the Rajasthan
                    border, some distance from Punjab&apos;s main
                    Amritsar-Chandigarh tourist circuit — plan it as a
                    standalone side trip rather than an easy add-on.
                  </p>
                  <ul>
                    <li>
                      <strong>By road:</strong> The most practical way in,
                      connected to other Punjab cities and to nearby
                      Rajasthan border towns by regular road links.
                    </li>
                    <li>
                      <strong>By rail:</strong> Abohar has its own railway
                      station with connections to major Punjab and North
                      Indian cities.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Abohar isn&apos;t a natural
                    add-on to a standard Amritsar-focused Punjab trip — treat
                    it as a dedicated side trip if wildlife is a genuine
                    priority.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Sanctuary & Kinnow Orchards</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Grassland landscape at Abohar Wildlife Sanctuary, Punjab"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Abohar Wildlife Sanctuary</h3>
                  <p>
                    The sanctuary&apos;s claim to fame is its blackbuck
                    density — among the highest found anywhere in India
                    outside a dedicated deer park. Early mornings offer the
                    best chance of good sightings, with the antelope active
                    across the open grassland before the day heats up.
                  </p>
                  <h3>Kinnow Orchards</h3>
                  <p>
                    Fazilka district is one of India&apos;s leading
                    kinnow-growing regions. Visiting an orchard during
                    harvest season (roughly December-January) adds a
                    distinctive agricultural dimension to a trip otherwise
                    focused on the sanctuary.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Dedicated tourist accommodation right in Abohar is
                    limited — most visitors treat this as a day trip from a
                    larger nearby town or city rather than an overnight stay.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic local guesthouses",
                          "Simple lodges near the railway station",
                          "Highway hotels",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: [
                          "Standard business hotels",
                          "Highway hotel chains",
                          "Better-appointed local hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "Limited",
                        picks: [
                          "Few options at this level",
                          "Consider a nearby larger city instead",
                          "Day trip is the realistic plan",
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
                    Most visitors day-trip Abohar rather than staying
                    overnight — dedicated tourist infrastructure here is
                    genuinely limited.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Wildlife Sanctuary",
                        color: "bg-amber-700",
                        activities: [
                          "Early arrival for peak blackbuck activity",
                          "Slow walk/drive through the grassland",
                          "Photography in good early light",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Kinnow Country",
                        color: "bg-sky-600",
                        activities: [
                          "Visit a local kinnow orchard (season permitting)",
                          "Sample fresh kinnow and local produce",
                          "Depart for onward travel",
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
                  <h2>What to Eat at Abohar</h2>
                  <ul>
                    <li>
                      <strong>Kinnow products:</strong> Fresh kinnow and
                      kinnow-based products (juice, marmalade) are a genuine
                      local specialty worth seeking out in season.
                    </li>
                    <li>
                      <strong>Punjabi staples:</strong> Standard Punjabi
                      dhaba fare — parathas, dal, lassi — is available across
                      the town.
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
                          ["Local transport/day", "₹300", "₹700", "₹1,500"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          ["Sanctuary entry", "₹50", "₹50", "₹50"],
                          ["Kinnow/local produce", "₹200", "₹400", "₹800"],
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
                    * Figures are per person, per day, and exclude travel to
                    Abohar itself.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Abohar</h2>
                  <ul>
                    <li>
                      <strong>Go early morning:</strong> The best chance of
                      good blackbuck sightings is in the first hours after
                      sunrise, before the heat sets in.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> This is a
                      genuinely offbeat stop — tourist infrastructure is
                      limited compared to Punjab&apos;s religious and
                      heritage circuit.
                    </li>
                    <li>
                      <strong>Time it for kinnow season if possible:</strong>{" "}
                      December-January adds a worthwhile orchard visit to
                      the trip.
                    </li>
                    <li>
                      <strong>Avoid peak summer:</strong> April-June heat on
                      Punjab&apos;s open plains is genuinely difficult for
                      outdoor wildlife viewing.
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
                          "Arrive early for the best wildlife activity",
                          "Combine with a kinnow orchard visit in season",
                          "Keep expectations realistic about infrastructure",
                          "Carry water and sun protection",
                          "Treat it as a dedicated side trip, not an add-on",
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Expect Amritsar-level tourist infrastructure",
                          "Visit during peak summer heat",
                          "Plan a same-day trip combined with Amritsar",
                          "Skip early-morning timing for the sanctuary",
                          "Expect abundant luxury accommodation",
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
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab travel guide
                    </Link>{" "}
                    for the state&apos;s religious and heritage circuit
                    around Amritsar.
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
                {["Abohar", "Blackbuck Sanctuary", "Punjab", "Off-beat"].map(
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

              <RelatedPostsGrid currentSlug="abohar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="abohar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
