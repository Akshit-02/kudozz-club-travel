// src/app/blog/rameswaram-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Rameswaram Travel Guide: Temple & Dhanushkodi",
  description:
    "Complete Rameswaram guide — the Ramanathaswamy Temple's giant corridor, the Pamban Bridge crossing, Dhanushkodi's ghost town, how to reach, and a full visit plan.",
  keywords:
    "Rameswaram travel guide, Ramanathaswamy Temple, Pamban Bridge, Dhanushkodi ghost town, Agni Theertham, Rameswaram Jyotirlinga, how to reach Rameswaram, Rameswaram to Dhanushkodi",
  openGraph: {
    title: "Rameswaram Travel Guide: Temple & Dhanushkodi",
    description:
      "A sea bridge, the longest temple corridor in India, and a ghost town at the edge of the map — the complete guide to Rameswaram.",
    url: "https://club.kudozz.in/blog/rameswaram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/lakshadweep/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise island waters and coastline, evoking Rameswaram's island setting on Pamban Island",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rameswaram Travel Guide: Temple & Dhanushkodi",
    description:
      "India's longest temple corridor, a historic sea bridge, and a cyclone-ruined ghost town — the complete Rameswaram guide.",
    images: ["/images/destinations/lakshadweep/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/rameswaram-travel-guide",
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
          headline: "Rameswaram Travel Guide: Temple & Dhanushkodi",
          description:
            "Complete Rameswaram guide — the Ramanathaswamy Temple's giant corridor, the Pamban Bridge crossing, Dhanushkodi's ghost town, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/lakshadweep/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/rameswaram-travel-guide",
          },
          keywords:
            "Rameswaram, Ramanathaswamy Temple, Tamil Nadu, Dhanushkodi, Pamban Bridge, Jyotirlinga",
          about: {
            "@type": "Place",
            name: "Rameswaram",
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
                name: "Rameswaram",
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
    q: "How far is Rameswaram from Madurai?",
    a: "Roughly 170 km, about a 3-3.5 hour drive or train journey — the train crossing over the Pamban Bridge itself is a genuine scenic highlight of the trip.",
  },
  {
    q: "What is Dhanushkodi?",
    a: "A former town near the tip of Rameswaram's island, largely destroyed by a devastating cyclone in 1964. Today it's a stretch of eerie ruins on a narrow spit of land close to Sri Lanka, popularly called \"the end of the world\" locally, and a common day-trip stop from Rameswaram.",
  },
  {
    q: "Is Rameswaram part of the Char Dham pilgrimage?",
    a: "Yes — the Ramanathaswamy Temple here is one of the four Char Dham sites, alongside Badrinath, Dwarka, and Puri, and also one of the 12 Jyotirlingas of Shiva.",
  },
  {
    q: "What is the best time to visit Rameswaram?",
    a: "October to March for comfortable weather. Given its coastal exposure, also check current cyclone-season advisories for the October-December window before travelling.",
  },
  {
    q: "How do I reach Dhanushkodi from Rameswaram?",
    a: "The final stretch toward Dhanushkodi's ruins is often covered by shared jeep, van, or on foot depending on current road conditions — arrangements can vary, so it's worth checking locally on arrival in Rameswaram.",
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
  { id: "introduction", title: "An Island of Faith and Ruin", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Rameswaram", level: 2 },
  { id: "things-to-do", title: "Temple, Bridge & Dhanushkodi", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RameswaramGuidePage() {
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
              src="/images/destinations/lakshadweep/hero.jpg"
              alt="Turquoise island waters and coastline, evoking Rameswaram's island setting on Pamban Island"
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
                { label: "Rameswaram", href: null },
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
                "Rameswaram",
                "Ramanathaswamy Temple",
                "Tamil Nadu",
                "Dhanushkodi",
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
              Rameswaram: Temple, Sea Bridge & Dhanushkodi
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              India's longest temple corridor, a bridge that carries trains
              out over open sea, and a ghost town where the road simply
              stops — Rameswaram sits at the edge of the country in every
              sense.
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
                  text: "Rameswaram, Tamil Nadu",
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
                  <h2>An Island of Faith and Ruin</h2>
                  <p>
                    <strong>Rameswaram</strong> sits on Pamban Island,
                    connected to mainland Tamil Nadu by the{" "}
                    <strong>Pamban Bridge</strong> — India&apos;s first sea
                    bridge, originally built as a cantilever railway
                    crossing, with the train ride over it still one of the
                    most memorable stretches of track in the country.
                  </p>
                  <p>
                    At its centre is the <strong>Ramanathaswamy Temple</strong>
                    , one of the 12 Jyotirlingas of Shiva and part of the Char
                    Dham pilgrimage circuit, famous for having the longest
                    temple corridor in India, its pillars carved in long,
                    receding rows.
                  </p>
                  <p>
                    A short distance further out is{" "}
                    <strong>Dhanushkodi</strong> — a town all but wiped out by
                    a cyclone in 1964, today a stretch of quiet, eerie ruins
                    on a narrow spit of land near where the Bay of Bengal
                    meets the Indian Ocean, close enough to Sri Lanka to feel
                    genuinely like the edge of the map.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌊</span> Rameswaram at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Tamil Nadu" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Ramanathaswamy Temple",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🌉",
                          label: "Landmark",
                          value: "Pamban Bridge",
                        },
                        {
                          icon: "🏚️",
                          label: "Day Trip",
                          value: "Dhanushkodi",
                        },
                        {
                          icon: "🚉",
                          label: "From Madurai",
                          value: "~170 km",
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
                  <h2>Best Time to Visit Rameswaram</h2>
                  <p>
                    As a coastal island town, Rameswaram's weather and
                    cyclone-season timing both matter for planning a
                    comfortable, safe visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cooler, more comfortable conditions for walking the temple corridor and the exposed, sun-baked stretch out to Dhanushkodi.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and humid",
                        text: "Coastal heat and humidity make midday sightseeing genuinely tough — plan around early mornings if visiting this window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌊",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm, occasional swells",
                        text: "Generally manageable weather, though sea conditions can be rougher — check conditions before any boat activity.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "🌀",
                        color: "bg-red-50 border-red-200",
                        mood: "Cyclone-season caution",
                        text: "This coastal stretch of Tamil Nadu can see cyclone activity in this window — check current advisories before travelling.",
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
                    <strong>Our pick:</strong> October to March — cooler
                    weather for the temple and Dhanushkodi, just outside the
                    higher cyclone-risk window.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Rameswaram</h2>
                  <ul>
                    <li>
                      <strong>By Rail:</strong> Rameswaram railway station is
                      connected to{" "}
                      <Link href="/blog/madurai-travel-guide">Madurai</Link>{" "}
                      and Chennai — the train's crossing over the Pamban
                      Bridge is a scenic highlight in its own right.
                    </li>
                    <li>
                      <strong>By Road:</strong> Roughly 170 km from Madurai
                      (~3-3.5 hr drive) via the road bridge alongside the
                      Pamban rail crossing.
                    </li>
                    <li>
                      <strong>By Air:</strong> The nearest airport is Madurai;
                      onward travel to Rameswaram is by road or rail.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If possible, take the train
                    at least one way specifically for the Pamban Bridge
                    crossing — the open-sea views from the train are hard to
                    replicate by road.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temple, Bridge & Dhanushkodi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/lakshadweep/hero.jpg"
                      alt="Coastal waters near Rameswaram, evoking the setting of Dhanushkodi and the Pamban Bridge"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Ramanathaswamy Temple</h3>
                  <p>
                    The heart of Rameswaram — a Jyotirlinga and Char Dham
                    site, famous above all for its corridor, the longest of
                    any temple in India, lined with intricately carved
                    pillars stretching for hundreds of metres.
                  </p>
                  <h3>Agni Theertham</h3>
                  <p>
                    The sacred beach adjoining the temple, where pilgrims
                    traditionally bathe before darshan — also simply a
                    pleasant stretch of shore worth a quiet walk.
                  </p>
                  <h3>Pamban Bridge</h3>
                  <p>
                    India's first sea bridge, connecting Rameswaram to the
                    mainland — best experienced by train, though the road
                    bridge alongside it also offers striking views over open
                    water.
                  </p>
                  <h3>Dhanushkodi</h3>
                  <p>
                    A ghost town near the island's tip, largely destroyed by
                    a 1964 cyclone and never fully rebuilt. Today it's a
                    quiet, atmospheric stretch of ruins near where the Bay of
                    Bengal meets the Indian Ocean, popularly called "the end
                    of the world" locally.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Rameswaram</h2>
                  <p>
                    Accommodation is concentrated in Rameswaram town, close
                    to the temple, ranging from simple pilgrim guesthouses to
                    a handful of more comfortable hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Temple guesthouses",
                          "Basic lodges, town centre",
                          "Dharamshalas near the temple",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: [
                          "Business hotels, town centre",
                          "TTDC-run properties",
                          "Beachfront guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌊",
                        range: "₹4,500–₹9,000+/night",
                        picks: [
                          "Premium sea-facing hotels",
                          "Resort-style stays",
                          "Boutique heritage properties",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Temple & Agni Theertham",
                        color: "bg-amber-700",
                        activities: [
                          "Ramanathaswamy Temple darshan and corridor walk",
                          "Agni Theertham beach",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Dhanushkodi",
                        color: "bg-sky-600",
                        activities: [
                          "Drive/shared jeep out to Dhanushkodi",
                          "Explore the ruins and the point where the sea meets",
                          "Return via the Pamban Bridge viewpoint",
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
                    * Combine with{" "}
                    <Link href="/blog/madurai-travel-guide">Madurai</Link> or{" "}
                    <Link href="/blog/kanyakumari-travel-guide">
                      Kanyakumari
                    </Link>{" "}
                    for a full Deep South Tamil Nadu circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Rameswaram</h2>
                  <ul>
                    <li>
                      <strong>Temple-town vegetarian eateries:</strong>{" "}
                      Given the pilgrimage character of the town, most
                      restaurants serve simple, good South Indian
                      vegetarian food.
                    </li>
                    <li>
                      <strong>Fresh seafood, in season:</strong> As a fishing
                      town, seafood is available at some local eateries away
                      from the immediate temple precinct.
                    </li>
                    <li>
                      <strong>Coconut-based snacks:</strong> Simple coastal
                      snacks and coconut water are widely available around
                      the temple and beach areas.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹6,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          [
                            "Dhanushkodi transport (round trip)",
                            "₹500",
                            "₹1,000",
                            "₹2,000",
                          ],
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
                    * Figures are per person, per day, excluding travel into
                    Rameswaram.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Rameswaram</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly at the temple:</strong> Cover
                      shoulders and knees; footwear must be left outside.
                    </li>
                    <li>
                      <strong>Check Dhanushkodi transport on
                      arrival:</strong> The final stretch may require a
                      shared jeep or short walk depending on current road
                      conditions.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong>{" "}
                      Dhanushkodi's exposed, treeless landscape gets
                      genuinely hot with little shade.
                    </li>
                    <li>
                      <strong>Check cyclone advisories in season:</strong>{" "}
                      Especially relevant for an Oct-Dec visit, given the
                      coastal exposure.
                    </li>
                    <li>
                      <strong>Treat Dhanushkodi with respect:</strong> It's a
                      site of real historical loss, not just a scenic photo
                      stop.
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
                          "Take the train at least one way for the bridge",
                          "Check Dhanushkodi transport arrangements locally",
                          "Carry water and sun protection",
                          "Dress modestly at the temple",
                          "Check cyclone advisories in season",
                          "Combine with Madurai or Kanyakumari",
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
                          "Travel during a cyclone warning",
                          "Skip sun protection at Dhanushkodi",
                          "Treat Dhanushkodi as just a photo backdrop",
                          "Assume the road to Dhanushkodi is always open",
                          "Rush the temple corridor",
                          "Forget footwear rules at the temple",
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
                    <strong>🗺️ Extend the trip:</strong> Rameswaram pairs
                    naturally with{" "}
                    <Link href="/blog/madurai-travel-guide">Madurai</Link> and{" "}
                    <Link href="/blog/kanyakumari-travel-guide">
                      Kanyakumari
                    </Link>{" "}
                    for a complete Deep South Tamil Nadu circuit. See our{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
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
                  "Rameswaram",
                  "Ramanathaswamy Temple",
                  "Tamil Nadu",
                  "Dhanushkodi",
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

              <RelatedPostsGrid currentSlug="rameswaram-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="rameswaram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
