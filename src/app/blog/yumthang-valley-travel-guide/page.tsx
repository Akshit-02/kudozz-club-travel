// src/app/blog/yumthang-valley-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yumthang Valley Guide: Flowers & Best Time",
  description:
    "Complete Yumthang Valley guide — the Shingba Rhododendron Sanctuary bloom, Zero Point, hot springs, how to reach from Lachung, and the best time to see Sikkim's Valley of Flowers.",
  keywords:
    "Yumthang Valley travel guide, Valley of Flowers Sikkim, Shingba Rhododendron Sanctuary, Zero Point Sikkim, Yumthang best time, Lachung to Yumthang, North Sikkim permit",
  openGraph: {
    title: "Yumthang Valley Guide: Flowers & Best Time",
    description:
      "Sikkim's Valley of Flowers — a rhododendron sanctuary in bloom against snow peaks, plus a high-altitude Zero Point extension. The complete Yumthang guide.",
    url: "https://club.kudozz.in/blog/yumthang-valley-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "High-altitude mountain pass scenery, evoking Yumthang Valley and Zero Point in North Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yumthang Valley Guide: Flowers & Best Time",
    description:
      "Sikkim's Valley of Flowers — a rhododendron sanctuary in bloom against snow peaks, plus a high-altitude Zero Point extension.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/yumthang-valley-travel-guide",
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
          headline: "Yumthang Valley Guide: Flowers & Best Time",
          description:
            "Complete Yumthang Valley guide — the Shingba Rhododendron Sanctuary bloom, Zero Point, hot springs, how to reach from Lachung, and the best time to see Sikkim's Valley of Flowers.",
          image: "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
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
            "@id": "https://club.kudozz.in/blog/yumthang-valley-travel-guide",
          },
          keywords:
            "Yumthang Valley, North Sikkim, Shingba Rhododendron Sanctuary, Zero Point, off-beat",
          about: {
            "@type": "Place",
            name: "Yumthang Valley",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Sikkim",
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
                name: "Sikkim",
                item: "https://club.kudozz.in/blog/sikkim-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Yumthang Valley",
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
    q: "When is the best time to see the rhododendrons in bloom?",
    a: "Roughly March through May is peak bloom for the Shingba Rhododendron Sanctuary, with more than two dozen species flowering across the valley. Timing can shift slightly year to year depending on winter snowfall and spring temperatures.",
  },
  {
    q: "How far is Yumthang Valley from Lachung?",
    a: "About 24 km, typically covered as an early-morning excursion — most visitors overnight in Lachung and depart before dawn to reach the valley for the best light and clearest weather.",
  },
  {
    q: "Is Zero Point included automatically, or does it cost extra?",
    a: "Zero Point, roughly 15 km beyond Yumthang, is usually offered as an extension of the same day trip rather than a separate booking, but it depends entirely on road and weather conditions on the day — your driver/guide will confirm on arrival whether it's accessible.",
  },
  {
    q: "What should I wear in Yumthang Valley?",
    a: "Serious cold-weather layers regardless of season — the valley sits at roughly 3,564 m and temperatures can be sharply colder than in Lachung or Gangtok, even during the flower season.",
  },
  {
    q: "Is it a day trip from Gangtok directly, or does it require an overnight in Lachung?",
    a: "An overnight in Lachung is essentially required — the distance and road conditions make a direct same-day round trip from Gangtok impractical, and the early-morning departure from Lachung is what gets you the best weather and light in the valley.",
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
  { id: "introduction", title: "Sikkim's Valley of Flowers", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Yumthang Valley", level: 2 },
  { id: "things-to-do", title: "Rhododendrons, Zero Point & Hot Springs", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Facilities", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function YumthangValleyGuidePage() {
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
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="High-altitude mountain pass scenery, evoking Yumthang Valley and Zero Point in North Sikkim"
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
                { label: "Sikkim", href: "/blog/sikkim-travel-guide" },
                { label: "Yumthang Valley", href: null },
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
                "Yumthang Valley",
                "North Sikkim",
                "Rhododendron Sanctuary",
                "Sikkim",
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
              Yumthang Valley: Sikkim's Valley of Flowers
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A rhododendron sanctuary that bursts into color each spring
              against a backdrop of snow peaks — plus a high-altitude Zero
              Point extension for those wanting to go further.
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
                  text: "North Sikkim",
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
                  <h2>Sikkim's Valley of Flowers</h2>
                  <p>
                    <strong>Yumthang Valley</strong>, at roughly 3,564 m, is
                    often called Sikkim's own "Valley of Flowers" for the
                    <strong> Shingba Rhododendron Sanctuary</strong> that
                    covers much of it — more than two dozen rhododendron
                    species that burst into bloom each spring, turning the
                    valley floor into sheets of color set against the
                    surrounding snow peaks.
                  </p>
                  <p>
                    The valley sits about 24 km from{" "}
                    <Link href="/blog/lachung-travel-guide">Lachung</Link>,
                    from where it's almost always visited as an early-morning
                    excursion. Further up the road, roughly 15 km beyond
                    Yumthang, lies Zero Point at around 4,600 m — a
                    snow-covered high-altitude spot near the edge of
                    civilian access close to the Chinese border, often
                    included as an extension when road and weather conditions
                    allow.
                  </p>
                  <p>
                    Within the valley itself, hot springs believed locally to
                    have medicinal properties offer a notable stop, a
                    pleasant contrast to the surrounding cold.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌸</span> Yumthang Valley at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North Sikkim",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~3,564 m",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Mar – May (bloom)",
                        },
                        {
                          icon: "🌺",
                          label: "Known For",
                          value: "Rhododendrons, Zero Point",
                        },
                        {
                          icon: "🏕️",
                          label: "Base Village",
                          value: "Lachung (~24 km)",
                        },
                        {
                          icon: "📋",
                          label: "Permit",
                          value: "Required (North Sikkim)",
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
                  <h2>Best Time to Visit Yumthang Valley</h2>
                  <p>
                    Timing here comes down to a clear trade-off: flowers or
                    snow — the valley looks dramatically different depending
                    on the season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – May",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Peak rhododendron bloom across the Shingba Sanctuary — the single best reason to visit Yumthang, with color across the valley floor against snow peaks.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — muted colors",
                        text: "The bloom has largely passed and monsoon rains add road risk on the North Sikkim route; a less rewarding window overall.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Snow scenery, no flowers",
                        text: "No blooms, but clear skies and snow-dusted peaks make for a starkly beautiful, quieter visit if flowers aren't the priority.",
                      },
                      {
                        season: "Jan – Feb",
                        emoji: "🥶",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Often inaccessible",
                        text: "Heavy snow frequently closes the road from Lachung in deep winter — confirm current access before planning a trip.",
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
                    <strong>Our pick:</strong> March to May for the
                    rhododendron bloom — the defining reason most people make
                    the trip to Yumthang in the first place.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Yumthang Valley</h2>
                  <ul>
                    <li>
                      <strong>From Lachung:</strong> Roughly 24 km, driven as
                      a pre-dawn excursion so you arrive for the best light
                      and clearest weather before afternoon clouds build up.
                    </li>
                    <li>
                      <strong>Permit required:</strong> Covered by the same
                      North Sikkim Protected Area Permit needed for Lachung
                      itself, arranged in advance through a Gangtok operator.
                    </li>
                    <li>
                      <strong>Zero Point extension:</strong> A further ~15 km
                      beyond Yumthang, included in the same excursion when
                      road and weather conditions allow — your driver
                      confirms this on the day.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Leave Lachung before sunrise
                    — the earliest arrivals get the clearest views before
                    afternoon cloud cover often rolls in over the valley.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Rhododendrons, Zero Point & Hot Springs</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Snow-dusted high-altitude landscape near Yumthang Valley and Zero Point, North Sikkim"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Shingba Rhododendron Sanctuary</h3>
                  <p>
                    More than two dozen rhododendron species carpet the
                    valley floor during peak bloom, ranging from deep reds to
                    soft pinks and whites — walking trails through the
                    sanctuary let you get close to the flowers rather than
                    just viewing from the road.
                  </p>
                  <h3>Zero Point</h3>
                  <p>
                    At around 4,600 m, Zero Point is a dramatic snow-covered
                    extension near the limit of civilian access — reachable
                    only when road and weather conditions cooperate, so treat
                    it as a bonus rather than a guaranteed part of the trip.
                  </p>
                  <h3>Hot Springs</h3>
                  <p>
                    A notable stop within the valley, these natural hot
                    springs are believed locally to have medicinal
                    properties — a welcome warm break in the cold mountain
                    air.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's no accommodation in the valley itself — everyone
                    bases in{" "}
                    <Link href="/blog/lachung-travel-guide">Lachung</Link> and
                    visits Yumthang as a day excursion.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,200/night",
                        picks: [
                          "Homestays in Lachung",
                          "Basic guesthouses",
                          "Shared package lodging",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹4,500/night",
                        picks: [
                          "Small heated hotels in Lachung",
                          "Riverside guesthouses",
                          "Package-tour standard rooms",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "₹5,000–₹9,000+/night",
                        picks: [
                          "Better-appointed mountain lodges",
                          "Premium package operators",
                          "Valley-view rooms in Lachung",
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
                  <p>
                    A half-day trip from Lachung, potentially extended to
                    Zero Point depending on the day's conditions.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Pre-Dawn",
                        title: "Depart Lachung",
                        color: "bg-amber-700",
                        activities: [
                          "Leave before sunrise for the best light",
                          "Drive ~24 km to Yumthang Valley",
                        ],
                      },
                      {
                        day: "Morning",
                        title: "Valley & Zero Point",
                        color: "bg-forest-600",
                        activities: [
                          "Walk the rhododendron sanctuary trails",
                          "Visit the hot springs",
                          "Continue to Zero Point if conditions allow",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Return",
                        color: "bg-stone-600",
                        activities: [
                          "Head back to Lachung before weather changes",
                          "Continue toward Lachen if on a full circuit",
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
                  <h2>Food & Facilities</h2>
                  <ul>
                    <li>
                      <strong>Carry your own snacks and water:</strong>{" "}
                      Facilities in the valley are minimal — pack what you
                      need before leaving Lachung.
                    </li>
                    <li>
                      <strong>Breakfast at your homestay:</strong> Most
                      Lachung accommodation can prepare an early breakfast or
                      packed meal for the pre-dawn departure.
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
                            "Permit + vehicle (per person, shared, bundled)",
                            "₹4,000",
                            "₹6,000",
                            "₹9,000",
                          ],
                          ["Zero Point extension", "Included*", "Included*", "Included*"],
                          ["Snacks/water for the day", "₹200", "₹300", "₹500"],
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
                    * Zero Point is usually included in the same day's
                    vehicle package, subject to road/weather conditions on the
                    day — confirm with your operator.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Yumthang Valley</h2>
                  <ul>
                    <li>
                      <strong>Dress in serious layers:</strong> Temperatures
                      at this altitude can be sharply colder than in Lachung,
                      even in the bloom season.
                    </li>
                    <li>
                      <strong>Check Zero Point conditions before committing:</strong>{" "}
                      Road and weather can close the extension on short
                      notice.
                    </li>
                    <li>
                      <strong>Time your trip for peak bloom:</strong> If the
                      rhododendrons are the priority, aim for March-May and
                      confirm current bloom status with your operator.
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
                          "Leave Lachung before sunrise",
                          "Dress in serious cold-weather layers",
                          "Confirm Zero Point access on the day",
                          "Carry water and snacks",
                          "Time the trip for peak bloom if flowers matter most",
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
                          "Assume Zero Point is guaranteed",
                          "Underdress for the altitude",
                          "Expect food or facilities in the valley itself",
                          "Depart late and miss the best light",
                          "Visit outside March-May expecting flowers",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Yumthang with{" "}
                    <Link href="/blog/lachen-travel-guide">Lachen</Link> and{" "}
                    <Link href="/blog/gurudongmar-lake-travel-guide">
                      Gurudongmar Lake
                    </Link>{" "}
                    for the full North Sikkim loop. See our full{" "}
                    <Link href="/blog/sikkim-travel-guide">
                      Sikkim travel guide
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
                  "Yumthang Valley",
                  "North Sikkim",
                  "Rhododendron Sanctuary",
                  "Sikkim",
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

              <RelatedPostsGrid currentSlug="yumthang-valley-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="yumthang-valley-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
