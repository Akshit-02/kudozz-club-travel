// src/app/blog/meghamalai-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Meghamalai Guide: High Wavy Mountains & Tips",
  description:
    "Complete Meghamalai guide — the remote High Wavy Mountains, tea and cardamom estates, wildlife-sanctuary forest, how to reach from Theni, permits, and a full visit plan.",
  keywords:
    "Meghamalai travel guide, High Wavy Mountains, Theni district hills, Meghamalai wildlife sanctuary, Tamil Nadu offbeat hill station, Meghamalai tea estates, how to reach Meghamalai",
  openGraph: {
    title: "Meghamalai Guide: High Wavy Mountains & Tips",
    description:
      "Tea and cardamom estates folded into a wildlife sanctuary in the Western Ghats — one of Tamil Nadu's most remote, lightly touristed hill ranges.",
    url: "https://club.kudozz.in/blog/meghamalai-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Misty forested hills, evoking Meghamalai's High Wavy Mountains and Western Ghats plantation-and-forest landscape",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Meghamalai Guide: High Wavy Mountains & Tips",
    description:
      "Tea estates, cardamom plantations, and genuine wilderness in the Western Ghats — the complete Meghamalai guide.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/meghamalai-travel-guide",
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
          headline: "Meghamalai Guide: High Wavy Mountains & Tips",
          description:
            "Complete Meghamalai guide — the remote High Wavy Mountains, tea and cardamom estates, wildlife-sanctuary forest, how to reach from Theni, permits, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/meghamalai-travel-guide",
          },
          keywords:
            "Meghamalai, High Wavy Mountains, Theni, Tamil Nadu, Western Ghats, tea estates, wildlife sanctuary",
          about: {
            "@type": "Place",
            name: "Meghamalai",
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
                name: "Meghamalai",
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
    q: "How remote is Meghamalai?",
    a: "Genuinely remote by Tamil Nadu hill-station standards — tourist infrastructure is minimal, and much of the area sits within a wildlife sanctuary. It suits travelers who specifically want solitude over convenience.",
  },
  {
    q: "Do I need permits to visit Meghamalai?",
    a: "Parts of the area fall within a wildlife sanctuary, so access to certain zones may require permission from the forest department. It's worth arranging this in advance through a local contact or tour operator rather than assuming free access on arrival.",
  },
  {
    q: "How far is Meghamalai from Theni or Madurai?",
    a: "Meghamalai is in Theni district; the drive from Theni town involves winding estate roads. From Madurai, expect a half-day's journey combining highway driving with the slower hill approach.",
  },
  {
    q: "What is the best time to visit Meghamalai?",
    a: "October to February for clear weather and comfortable temperatures. Monsoon brings lush greenery but makes access considerably harder.",
  },
  {
    q: "What makes Meghamalai different from other Tamil Nadu hill stations?",
    a: "It's far less developed than Ooty or Kodaikanal, combining working tea and cardamom estates with genuine protected forest and wildlife. The appeal is remoteness and quiet rather than polished hill-station amenities.",
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
  { id: "introduction", title: "The High Wavy Mountains", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Meghamalai", level: 2 },
  { id: "things-to-do", title: "Estates, Forest & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MeghamalaiGuidePage() {
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
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Misty forested hills, evoking Meghamalai's High Wavy Mountains and Western Ghats plantation-and-forest landscape"
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
                { label: "Meghamalai", href: null },
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
                "Meghamalai",
                "High Wavy Mountains",
                "Theni",
                "Off-beat",
                "Tamil Nadu",
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
              Meghamalai: Tea, Cardamom & the High Wavy Mountains
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Working plantations folded into genuine wilderness — one of
              Tamil Nadu's most remote and lightly touristed corners of the
              Western Ghats.
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
                  text: "Theni District, Tamil Nadu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,150 words",
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
                  <h2>The High Wavy Mountains</h2>
                  <p>
                    <strong>Meghamalai</strong>, known in English as the{" "}
                    <strong>High Wavy Mountains</strong>, is a remote hill
                    range in Theni district, part of the Western Ghats. It's
                    covered extensively in tea and cardamom plantations, and
                    much of the surrounding area falls within a wildlife
                    sanctuary designation, home to elephants, gaur (Indian
                    bison), and a wide range of birdlife.
                  </p>
                  <p>
                    That combination — working plantations threaded through
                    genuinely protected forest — gives Meghamalai a wild,
                    lightly touristed character unlike almost anywhere else
                    in{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu
                    </Link>
                    . This is one of the state's most offbeat hill
                    destinations, with limited infrastructure — travelers
                    expecting Ooty- or Kodaikanal-level amenities will be
                    disappointed, but those seeking genuine solitude will
                    find exactly that.
                  </p>
                  <p>
                    The altitude and Western Ghats exposure keep the climate
                    notably cool and often misty, adding to the sense of
                    remoteness throughout a visit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌫️</span> Meghamalai at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Theni district, Tamil Nadu",
                        },
                        {
                          icon: "🍃",
                          label: "Known For",
                          value: "Tea & cardamom estates",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🐘",
                          label: "Wildlife",
                          value: "Elephants, gaur, birdlife",
                        },
                        {
                          icon: "📋",
                          label: "Access",
                          value: "Permits may be needed",
                        },
                        {
                          icon: "🎯",
                          label: "Character",
                          value: "Remote, lightly touristed",
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
                  <h2>Best Time to Visit Meghamalai</h2>
                  <p>
                    Weather affects both comfort and access on the winding
                    estate roads leading into the hills.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies and comfortable, cool temperatures make this the most reliable window for both travel and sightseeing.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warmer, still pleasant",
                        text: "Warmer than winter but the altitude keeps things noticeably cooler than the plains below.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but difficult",
                        text: "The hills turn a vivid green, but estate roads become considerably harder to navigate.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌫️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best mist and wildlife activity",
                        text: "Mornings bring the thickest mist and the best chances of spotting wildlife along forest edges.",
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
                    <strong>Our pick:</strong> October to February for clear
                    weather and reliable access — this is not a destination
                    to attempt in heavy monsoon.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Meghamalai</h2>
                  <ul>
                    <li>
                      <strong>By road via Theni:</strong> The main approach,
                      involving winding estate roads that climb gradually
                      into the hills — slower than the raw distance suggests.
                    </li>
                    <li>
                      <strong>From Madurai:</strong> A half-day journey
                      combining highway driving to Theni with the slower hill
                      approach.
                    </li>
                    <li>
                      <strong>Access and checkpoints:</strong> Given the
                      wildlife sanctuary status of parts of the area, some
                      routes may involve forest checkpoints — plan and, where
                      needed, arrange permissions in advance.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange permits or local
                    guide contacts before you travel — this matters more here
                    than at almost any other Tamil Nadu hill destination
                    given the sanctuary status.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Estates, Forest & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Misty hill forest, evoking Meghamalai's High Wavy Mountains, Tamil Nadu"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Tea & Cardamom Estates</h3>
                  <p>
                    Working plantations stretch across much of the hillside,
                    offering a quieter, more working-landscape alternative to
                    the manicured tea-garden views of Ooty or Munnar.
                  </p>
                  <h3>Wildlife & Forest Walks</h3>
                  <p>
                    Elephants, gaur, and varied birdlife inhabit the
                    sanctuary areas — sightings aren't guaranteed, and
                    walks into protected zones typically require a permit
                    and, ideally, a local guide.
                  </p>
                  <h3>Mist & Scenery</h3>
                  <p>
                    The altitude and Western Ghats exposure bring frequent
                    mist, especially in the mornings, giving the hills a
                    hushed, atmospheric quality that's much of the appeal for
                    visitors seeking quiet.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Meghamalai</h2>
                  <p>
                    Accommodation is genuinely limited — plan on estate
                    bungalows or basic homestays if available, rather than
                    expecting a wide choice of hotels.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic homestays if available",
                          "Forest-department rest houses (where open)",
                          "Simple stays in nearby Theni town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Estate bungalow stays (limited availability)",
                          "Small guesthouses",
                          "Comfortable stays in Theni as a base",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌿",
                        range: "₹4,000+/night",
                        picks: [
                          "The rare premium plantation stay",
                          "Private estate accommodation, where bookable",
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
                        title: "Arrival & Estates",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Theni into the hills",
                          "Walk through tea and cardamom estates",
                          "Settle in for a quiet evening",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Forest & Wildlife",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning forest walk (with permit/guide)",
                          "Birdwatching along estate and forest edges",
                          "Depart in the afternoon",
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
                    * Given the remoteness and travel time, this is best
                    treated as a slow, unhurried trip rather than a rushed
                    day visit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Meghamalai</h2>
                  <ul>
                    <li>
                      <strong>Estate/homestay kitchens:</strong> Simple,
                      plantation-style meals are the norm — most visitors
                      eat where they stay.
                    </li>
                    <li>
                      <strong>Theni town:</strong> A wider range of proper
                      restaurants for a more substantial meal before or
                      after the hill trip.
                    </li>
                    <li>
                      <strong>Carry your own snacks:</strong> Given the
                      remote setting, having backup food and water is
                      genuinely sensible.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹5,000"],
                          ["Food/day", "₹350", "₹800", "₹1,500"],
                          ["Local transport/day", "₹500", "₹1,200", "₹2,500"],
                          ["Permit/guide fee", "₹200", "₹500", "₹1,000"],
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
                    * Figures are per person, per day, excluding transport
                    to Theni.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Meghamalai</h2>
                  <ul>
                    <li>
                      <strong>Arrange permits in advance:</strong> Contact a
                      local operator or the forest department ahead of your
                      trip rather than assuming access on arrival.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> This is
                      not a place with abundant hotels or restaurants —
                      infrastructure is genuinely minimal.
                    </li>
                    <li>
                      <strong>Carry essentials:</strong> Water, snacks, and a
                      basic first-aid kit given the remote setting.
                    </li>
                    <li>
                      <strong>Go with a guide for forest walks:</strong>{" "}
                      Especially important in sanctuary areas with resident
                      elephants and gaur.
                    </li>
                    <li>
                      <strong>Avoid heavy monsoon travel:</strong> Estate
                      roads become considerably harder to navigate in wet
                      conditions.
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
                          "Arrange permits and guides in advance",
                          "Carry water, snacks, and basic first-aid",
                          "Go with realistic expectations about amenities",
                          "Visit in the cooler Oct-Feb window",
                          "Book any homestay well ahead of arrival",
                          "Respect wildlife-sanctuary rules and distances",
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
                          "Travel during heavy monsoon",
                          "Expect Ooty- or Kodaikanal-level infrastructure",
                          "Enter sanctuary zones without a permit or guide",
                          "Arrive without a confirmed place to stay",
                          "Approach wildlife on foot without guidance",
                          "Rely on finding restaurants along the way",
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
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for other Western Ghats hill destinations across the
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
                  "Meghamalai",
                  "High Wavy Mountains",
                  "Tamil Nadu",
                  "Theni",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="meghamalai-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="meghamalai-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
