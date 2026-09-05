// src/app/blog/shillong-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Shillong Travel Guide: Sightseeing & Tips",
  description:
    "Complete Shillong guide — Ward's Lake, Shillong Peak, Elephant Falls, the Don Bosco Museum, Police Bazar, the Rock Capital of India music scene, how to reach from Guwahati, and a full visit plan.",
  keywords:
    "Shillong travel guide, Scotland of the East, Ward's Lake, Shillong Peak, Elephant Falls, Don Bosco Museum, Police Bazar, Rock Capital of India, how to reach Shillong, Meghalaya capital",
  openGraph: {
    title: "Shillong Travel Guide: Sightseeing & Tips",
    description:
      "Rolling misty hills, a deep-rooted rock-music scene, and the essential gateway to the rest of Meghalaya — the complete Shillong guide.",
    url: "https://club.kudozz.in/blog/shillong-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Misty green hills, evoking Shillong's 'Scotland of the East' landscape in Meghalaya",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shillong Travel Guide: Sightseeing & Tips",
    description:
      "Rolling misty hills and Northeast India's self-styled Rock Capital — the complete guide to Shillong.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/shillong-travel-guide",
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
          headline: "Shillong Travel Guide: Sightseeing & Tips",
          description:
            "Complete Shillong guide — Ward's Lake, Shillong Peak, Elephant Falls, the Don Bosco Museum, Police Bazar, the Rock Capital of India music scene, how to reach from Guwahati, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/shillong-travel-guide",
          },
          keywords:
            "Shillong, Meghalaya, Scotland of the East, Rock Capital of India, Northeast India",
          about: {
            "@type": "Place",
            name: "Shillong",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Shillong",
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
    q: "How many days do I need for Shillong?",
    a: "Two days is enough to cover the city itself — Ward's Lake, Shillong Peak, Elephant Falls, the Don Bosco Museum, and Police Bazar — comfortably. Most visitors then use Shillong as a base for day trips to Cherrapunji, Dawki, and other Meghalaya highlights.",
  },
  {
    q: "What is the best time to visit Shillong given the rainfall?",
    a: "October to May is the most comfortable window, avoiding the heaviest monsoon months of June to September. That said, light showers are common in Shillong year-round given Meghalaya's famously wet climate, so rain gear is worth carrying regardless of season.",
  },
  {
    q: "How do I reach Shillong from Guwahati?",
    a: "Road is the most common route — roughly 3 hours by car or shared taxi from Guwahati, which has Meghalaya's main airport. Shillong's own airport at Umroi has limited direct flights, so most travelers fly into Guwahati first.",
  },
  {
    q: "Is Shillong a good base for the rest of Meghalaya?",
    a: "Yes — it's the practical hub for day trips and multi-day excursions to Cherrapunji, Dawki, Mawlynnong, and most of the state's other highlights, given its central location and better transport connections.",
  },
  {
    q: "What is the 'Rock Capital of India' reputation about?",
    a: "Shillong has a deep-rooted local culture of rock and Western music going back decades, with a genuinely active live-music scene and venues across the city — a distinctive part of its identity worth checking out in the evenings if that interests you.",
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
  { id: "introduction", title: "Scotland of the East", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Shillong", level: 2 },
  { id: "things-to-do", title: "Sightseeing & the Music Scene", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ShillongGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Misty green hills, evoking Shillong's 'Scotland of the East' landscape in Meghalaya"
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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Shillong", href: null },
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
              {["Shillong", "Meghalaya", "Scotland of the East", "Northeast India"].map(
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
              Shillong Travel Guide: Sightseeing & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Rolling misty hills that earned it the nickname "Scotland of
              the East," a deep-rooted rock-music culture, and the essential
              gateway to the rest of Meghalaya.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Shillong, Meghalaya",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>Scotland of the East</h2>
                  <p>
                    <strong>Shillong</strong>, capital of Meghalaya, earned
                    its colonial-era nickname "Scotland of the East" for its
                    rolling hills, pine-flecked ridgelines, and near-constant
                    mist — a landscape that genuinely does evoke the
                    Scottish Highlands more than most of tropical India.
                  </p>
                  <p>
                    Beyond the scenery, Shillong has a distinctive modern
                    identity as the self-styled "Rock Capital of India" — a
                    deep-rooted local culture of rock and Western music that
                    goes back decades and still shows up in live venues
                    across the city today.
                  </p>
                  <p>
                    For almost every visitor to Meghalaya, Shillong is also
                    the practical starting point — the city with the best
                    transport connections and the base from which day trips
                    to Cherrapunji, Dawki, and the rest of the state's
                    highlights are organised.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Shillong at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Meghalaya" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Guwahati (~3 hr)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        {
                          icon: "🎸",
                          label: "Known For",
                          value: "Rock Capital of India",
                        },
                        {
                          icon: "🌊",
                          label: "Landmark",
                          value: "Ward's Lake",
                        },
                        {
                          icon: "🎯",
                          label: "Role",
                          value: "Meghalaya's Gateway City",
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
                  <h2>Best Time to Visit Shillong</h2>
                  <p>
                    Meghalaya's rainfall reputation shapes travel planning
                    here more than almost anywhere else in India — timing
                    matters.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies, cool crisp air, and the least rain of the year — ideal for sightseeing and day trips to Cherrapunji and Dawki.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pleasant, occasional showers",
                        text: "Warming up with intermittent rain, still a comfortable window for exploring the city and nearby waterfalls.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heaviest rain",
                        text: "Meghalaya's extreme monsoon is in full force. Waterfalls are at their most dramatic but visibility and road conditions suffer.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🥶",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest months",
                        text: "Genuinely cold by Northeast Indian standards, with clear mornings — a good window for photography.",
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
                    <strong>Our pick:</strong> October to May, avoiding the
                    heaviest monsoon months — though carry rain protection
                    year-round given Meghalaya's famously wet climate.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Shillong</h2>
                  <ul>
                    <li>
                      <strong>Via Guwahati:</strong> The most common route —
                      fly into Guwahati (Meghalaya's main air gateway), then
                      a roughly 3-hour drive or shared taxi to Shillong.
                    </li>
                    <li>
                      <strong>Shillong Airport (Umroi):</strong> Has limited
                      direct flights, so most travelers still route through
                      Guwahati.
                    </li>
                    <li>
                      <strong>By road:</strong> Well-connected within
                      Meghalaya, with regular shared taxis and buses to
                      Cherrapunji, Dawki, and other destinations.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a shared taxi from
                    Guwahati airport directly to Shillong — it's faster and
                    often cheaper than arranging separate transport.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Sightseeing & the Music Scene</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Misty hills around Shillong, Meghalaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Ward's Lake</h3>
                  <p>
                    A colonial-era garden lake right in the city centre,
                    popular for boating and unhurried walks along its
                    landscaped paths.
                  </p>
                  <h3>Shillong Peak</h3>
                  <p>
                    The city's highest point, offering panoramic views over
                    Shillong and the surrounding hills — best visited on a
                    clear morning.
                  </p>
                  <h3>Elephant Falls</h3>
                  <p>
                    A multi-tiered waterfall a short drive from the city,
                    one of the most accessible falls in the region and an
                    easy add-on to a city sightseeing day.
                  </p>
                  <h3>Don Bosco Museum</h3>
                  <p>
                    The Don Bosco Centre for Indigenous Cultures spans
                    multiple floors covering Northeast Indian tribal
                    culture in real depth — genuinely one of the best
                    places in the region to understand its ethnic
                    diversity.
                  </p>
                  <h3>Police Bazar & the Music Scene</h3>
                  <p>
                    Police Bazar is Shillong's lively main market, good for
                    local goods and street food. In the evenings, check out
                    the city's live-music venues — Shillong's rock-and-roll
                    reputation is a genuine, decades-deep local culture, not
                    a marketing gimmick.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Shillong</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Guesthouses near Police Bazar",
                          "Backpacker hostels",
                          "Homestays in the outskirts",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Business hotels, central Shillong",
                          "Boutique hillside stays",
                          "Serviced apartments",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,000–₹14,000+/night",
                        picks: [
                          "Premium hillside resorts",
                          "Heritage-style properties",
                          "Full-board packages",
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
                  <h2>Suggested Shillong Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "City Sightseeing",
                        color: "bg-amber-700",
                        activities: [
                          "Ward's Lake and Police Bazar",
                          "Don Bosco Museum",
                          "Evening at a live-music venue",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Viewpoints & Falls",
                        color: "bg-sky-600",
                        activities: [
                          "Shillong Peak for morning views",
                          "Elephant Falls",
                          "Prep for onward trip to Cherrapunji or Dawki",
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
                    * Use Shillong as your base for day trips to{" "}
                    <Link href="/blog/cherrapunji-travel-guide">
                      Cherrapunji
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/dawki-travel-guide">Dawki</Link>{" "}
                    rather than trying to see all of Meghalaya from one
                    stop.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Shillong</h2>
                  <ul>
                    <li>
                      <strong>Jadoh:</strong> A Khasi rice dish typically
                      cooked with pork, a staple worth trying at a local
                      eatery rather than only a hotel restaurant.
                    </li>
                    <li>
                      <strong>Tungrymbai:</strong> A distinctive fermented
                      soybean preparation, a genuine taste of Khasi cuisine.
                    </li>
                    <li>
                      <strong>Smoked pork:</strong> A regional staple,
                      often featured in local dishes and worth seeking out.
                    </li>
                    <li>
                      <strong>Police Bazar street food:</strong> A good spot
                      for casual, affordable local snacks and momos.
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
                            "₹1,200",
                            "₹3,500",
                            "₹9,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,800"],
                          [
                            "Local transport/day",
                            "₹400",
                            "₹900",
                            "₹2,200",
                          ],
                          ["Activities/day", "₹200", "₹500", "₹1,200"],
                          ["2-Day trip total", "₹4,600", "₹12,200", "₹30,400"],
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
                    * Excludes flights to Guwahati. Add extra for day trips
                    to Cherrapunji or Dawki.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Shillong</h2>
                  <ul>
                    <li>
                      <strong>Carry rain protection year-round:</strong>{" "}
                      Meghalaya's wet-climate reputation means showers can
                      happen even outside monsoon.
                    </li>
                    <li>
                      <strong>Use Shillong as a base, not a single stop:</strong>{" "}
                      Its real value is as the launchpad for the rest of
                      Meghalaya's highlights.
                    </li>
                    <li>
                      <strong>Check out the live-music scene:</strong>{" "}
                      Genuinely worth an evening if you're at all interested
                      in the city's "Rock Capital" reputation.
                    </li>
                    <li>
                      <strong>Book Guwahati-Shillong transport ahead in peak season:</strong>{" "}
                      Shared taxis fill up quickly on weekends and holidays.
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
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Carry a rain jacket regardless of season",
                          "Book Guwahati transfers ahead in peak season",
                          "Visit Shillong Peak on a clear morning",
                          "Try Khasi cuisine at a local eatery",
                          "Catch a live-music evening in the city",
                          "Use Shillong as your Meghalaya base",
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
                          "Assume dry weather even outside monsoon",
                          "Try to see all of Meghalaya without a base",
                          "Skip Guwahati transport booking in peak season",
                          "Rush Shillong Peak in poor visibility",
                          "Overlook the Don Bosco Museum",
                          "Expect direct flights into Shillong itself",
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
                    <strong>🗺️ Extend the trip:</strong> From Shillong,
                    continue on to{" "}
                    <Link href="/blog/cherrapunji-travel-guide">
                      Cherrapunji
                    </Link>{" "}
                    for waterfalls and root bridges, or{" "}
                    <Link href="/blog/dawki-travel-guide">Dawki</Link> for
                    the crystal-clear Umngot River. See our full{" "}
                    <Link href="/blog/meghalaya-travel-guide">
                      Meghalaya travel guide
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
                  "Shillong",
                  "Meghalaya",
                  "Scotland of the East",
                  "Rock Capital of India",
                  "Northeast India",
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

              <RelatedPostsGrid currentSlug="shillong-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="shillong-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
