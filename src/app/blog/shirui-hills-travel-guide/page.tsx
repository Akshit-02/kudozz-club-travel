// src/app/blog/shirui-hills-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Shirui Hills Trek Guide: Shirui Lily & Best Time to Visit",
  description:
    "Complete Shirui Hills trek guide — home to the rare Shirui Lily found nowhere else on Earth, Shirui Kashong Peak, the Shirui Lily Festival, best time to visit, and full trip planning from Ukhrul.",
  keywords:
    "Shirui Hills, Shirui Lily, Lilium mackliniae, Shirui Kashong Peak, Shirui National Park, Shirui Lily Festival, Manipur state flower, Ukhrul trek, best time Shirui Lily",
  openGraph: {
    title: "Shirui Hills Trek Guide: Shirui Lily & Best Time to Visit",
    description:
      "The only place on Earth where the rare Shirui Lily grows wild — the complete guide to trekking Shirui Hills near Ukhrul, Manipur.",
    url: "https://club.kudozz.in/blog/shirui-hills-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Green rolling mountain valley and peak, evoking Shirui Hills' rare lily habitat in Manipur",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shirui Hills Trek Guide: Shirui Lily & Best Time to Visit",
    description:
      "The only place on Earth where the rare Shirui Lily grows wild — the complete Shirui Hills trek guide.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/shirui-hills-travel-guide",
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
          headline: "Shirui Hills Trek Guide: Shirui Lily & Best Time to Visit",
          description:
            "Complete Shirui Hills trek guide — home to the rare Shirui Lily, Shirui Kashong Peak, the Shirui Lily Festival, and best time to visit.",
          image:
            "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/shirui-hills-travel-guide",
          },
          keywords: "Shirui Hills, Shirui Lily, Manipur, Ukhrul, trekking",
          about: {
            "@type": "Place",
            name: "Shirui Hills",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Manipur",
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
                name: "Manipur",
                item: "https://club.kudozz.in/blog/manipur-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Shirui Hills",
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
    q: "What is the Shirui Lily and why is it so rare?",
    a: "The Shirui Lily (Lilium mackliniae) is a flower that grows wild only on Shirui Hills in Manipur, found nowhere else on Earth. It's named for the wife of botanist Frank Kingdon-Ward, who first documented it, and it's Manipur's official state flower.",
  },
  {
    q: "When does the Shirui Lily bloom?",
    a: "Roughly May to June, in a short window. Manipur Tourism typically organizes the Shirui Lily Festival in May, timed to coincide with the bloom.",
  },
  {
    q: "How difficult is the trek to Shirui Hills?",
    a: "It's a moderate trek from the Ukhrul side, reaching Shirui Kashong Peak at roughly 2,835 m. No technical climbing is required, but reasonable fitness helps, and a local guide is recommended given limited trail infrastructure.",
  },
  {
    q: "Can I visit Shirui Hills outside the lily bloom season?",
    a: "Yes — you'll miss the lily itself, but the hills still offer scenic trekking and views. If seeing the Shirui Lily specifically is your goal, plan strictly around the May bloom window.",
  },
  {
    q: "Where do I base myself to trek Shirui Hills?",
    a: "Ukhrul town is the standard base — see our Ukhrul travel guide for how to get there and where to stay. There's no real accommodation within Shirui Hills or Shirui National Park itself.",
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
  { id: "introduction", title: "Home of the Rarest Lily on Earth", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Shirui Hills", level: 2 },
  { id: "things-to-do", title: "The Trek & the Lily", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food on the Trek", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ShiruiHillsGuidePage() {
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
              src="/images/destinations/manali/solang-valley.jpg"
              alt="Green rolling mountain valley and peak, evoking Shirui Hills' rare lily habitat in Manipur"
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
                { label: "Manipur", href: "/blog/manipur-travel-guide" },
                { label: "Shirui Hills", href: null },
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
              {["Shirui Hills", "Manipur", "Shirui Lily", "Trekking"].map(
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
              Shirui Hills: Home of the Rarest Lily on Earth
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A flower that grows wild nowhere else on the planet, a
              moderate trek to a peak above 2,800 metres, and one of
              Manipur's most singular natural stories.
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
                  text: "Near Ukhrul, Manipur",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>Home of the Rarest Lily on Earth</h2>
                  <p>
                    <strong>Shirui Hills</strong> (also known by its peak,
                    Shirui Kashong) rises near{" "}
                    <Link href="/blog/ukhrul-travel-guide">Ukhrul</Link> town
                    in Manipur, and is the only place in the world where the{" "}
                    <strong>Shirui Lily</strong> (
                    <em>Lilium mackliniae</em>) grows wild. The flower's
                    scientific name honors the wife of botanist Frank
                    Kingdon-Ward, who first documented it here — and it's
                    now recognized as Manipur's official state flower.
                  </p>
                  <p>
                    <strong>Shirui National Park</strong> was established
                    specifically to protect the lily's fragile habitat, and{" "}
                    <strong>Shirui Kashong peak</strong>, at roughly 2,835 m,
                    is the main trekking destination — reached via a
                    moderate climb from the Ukhrul side.
                  </p>
                  <p>
                    Every year, usually in May, Manipur Tourism organizes the{" "}
                    <strong>Shirui Lily Festival</strong>, combining
                    cultural programs with organized viewing of the bloom —
                    a genuinely worthwhile reason to time a visit around this
                    specific window.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌸</span> Shirui Hills at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Ukhrul, Manipur",
                        },
                        {
                          icon: "⛰️",
                          label: "Peak Altitude",
                          value: "~2,835 m",
                        },
                        {
                          icon: "🌷",
                          label: "Known For",
                          value: "Shirui Lily (endemic)",
                        },
                        {
                          icon: "🏞️",
                          label: "Protected As",
                          value: "Shirui National Park",
                        },
                        {
                          icon: "🎪",
                          label: "Festival",
                          value: "Shirui Lily Festival, May",
                        },
                        {
                          icon: "🌡️",
                          label: "Bloom Window",
                          value: "May",
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
                  <h2>Best Time to Visit Shirui Hills</h2>
                  <p>
                    Unlike many treks with a broad "best season," Shirui
                    Hills has one narrow, non-negotiable window if the lily
                    is the goal.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Shirui Lily bloom — our pick",
                        text: "The strict bloom window for the Shirui Lily, coinciding with the annual Shirui Lily Festival. This is the only time to see the flower in the wild.",
                      },
                      {
                        season: "Jun",
                        emoji: "🌼",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Late bloom tail end",
                        text: "Some blooms may linger into early June, but this isn't guaranteed — May remains the safer bet.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Scenery without the lily",
                        text: "Clear, cooler trekking weather with good visibility — a fine window for the hike and views, just without the flower.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon",
                        text: "Heavy rain makes trail conditions difficult — best avoided for this trek.",
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
                    <strong>Our pick:</strong> May, without exception, if
                    seeing the Shirui Lily is the point of your trip — plan
                    around the Shirui Lily Festival dates for the best
                    combined experience.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Shirui Hills</h2>
                  <ul>
                    <li>
                      <strong>Via Ukhrul:</strong> The standard approach is
                      through{" "}
                      <Link href="/blog/ukhrul-travel-guide">
                        Ukhrul town
                      </Link>
                      , which sits close to the trailhead — almost every
                      visitor bases themselves there before and after the
                      trek.
                    </li>
                    <li>
                      <strong>From Imphal:</strong> Reach Ukhrul first, via
                      NH150 (~84 km from Imphal), then continue to the Shirui
                      Hills trailhead by local vehicle.
                    </li>
                    <li>
                      <strong>On foot:</strong> The trek to Shirui Kashong
                      peak is a moderate climb — manageable for reasonably
                      fit trekkers, ideally with a local guide given limited
                      trail markers.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Permit note:</strong> Manipur has required an
                    Inner Line Permit (ILP) for visitors from outside the
                    state since December 2019 — arrange this before your
                    trip.
                  </div>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange a local guide through
                    Ukhrul before setting out — beyond navigation, they can
                    point you toward the best current lily-viewing spots
                    within the protected area.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Trek & the Lily</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Rolling green hills near Shirui, Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Climb to Shirui Kashong</h3>
                  <p>
                    A moderate trek from the Ukhrul side, gaining elevation
                    steadily toward the roughly 2,835 m summit. No technical
                    skills are needed, but the terrain and distance call for
                    reasonable fitness.
                  </p>
                  <h3>Spotting the Shirui Lily</h3>
                  <p>
                    Within its short May bloom window, the lily appears
                    scattered across the hillside inside Shirui National
                    Park — a genuinely rare sight found nowhere else on
                    Earth, and worth taking time to appreciate rather than
                    rushing past.
                  </p>
                  <h3>Summit Views</h3>
                  <p>
                    From the top, the surrounding Naga hill country unfolds
                    in every direction — a worthwhile reward even for
                    trekkers visiting outside the lily season.
                  </p>
                  <h3>The Shirui Lily Festival</h3>
                  <p>
                    Manipur Tourism's annual festival, typically held in May,
                    combines cultural performances from local communities
                    with organized lily viewing — a good way to experience
                    both the flower and the region's culture together.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's no meaningful accommodation within Shirui Hills
                    or Shirui National Park itself — everyone bases
                    themselves in{" "}
                    <Link href="/blog/ukhrul-travel-guide">Ukhrul</Link>{" "}
                    town instead.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Ukhrul — Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,200/night",
                        picks: ["Local guesthouses", "Homestays"],
                      },
                      {
                        tier: "Ukhrul — Mid-Range",
                        icon: "🏨",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Circuit house (where available)",
                          "Better-appointed guesthouses",
                        ],
                      },
                      {
                        tier: "On the Trek",
                        icon: "⛺",
                        range: "Day trek — no overnight stay",
                        picks: [
                          "Most visitors complete it as a day trip from Ukhrul",
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
                    Base yourself in Ukhrul and treat Shirui Hills as a
                    (long) day trek — there's genuinely nowhere to stay
                    within the park itself.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrive in Ukhrul",
                        color: "bg-amber-700",
                        activities: [
                          "Travel from Imphal to Ukhrul via NH150",
                          "Arrange a local guide for the next day's trek",
                          "Rest ahead of an early start",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Shirui Hills Trek",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning drive/hike to the trailhead",
                          "Trek to Shirui Kashong peak",
                          "Lily viewing (May) and summit views",
                          "Return to Ukhrul by evening",
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
                  <h2>Food on the Trek</h2>
                  <ul>
                    <li>
                      <strong>Carry your own supplies:</strong> There are
                      minimal facilities on the trail itself — pack enough
                      food and water for a full day trek.
                    </li>
                    <li>
                      <strong>Local guides can advise on arrangements:</strong>{" "}
                      If trekking with a guide from Ukhrul, ask in advance
                      about any simple meal arrangements.
                    </li>
                    <li>
                      <strong>Eat well in Ukhrul before/after:</strong>{" "}
                      Tangkhul cuisine in Ukhrul town is worth enjoying
                      properly once back from the trek.
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
                          ["Local guide (per day)", "₹1,000", "₹1,800", "₹3,000"],
                          ["Ukhrul accommodation/night", "₹600", "₹1,500", "₹2,500"],
                          ["Local transport to trailhead", "₹500", "₹1,000", "₹2,000"],
                          ["Food/day", "₹350", "₹700", "₹1,200"],
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
                    * A local guide is genuinely worth the cost — beyond
                    navigation, they know where the lily is currently
                    blooming within the protected area.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Shirui Hills</h2>
                  <ul>
                    <li>
                      <strong>Time your visit strictly around May:</strong>{" "}
                      There's no flexibility here if seeing the Shirui Lily
                      is your goal.
                    </li>
                    <li>
                      <strong>Don't pick or trample the lily:</strong> It's
                      an endemic, protected species found nowhere else on
                      Earth — admire it in place.
                    </li>
                    <li>
                      <strong>Hire a local guide from Ukhrul:</strong>{" "}
                      Especially valuable given limited trail signage and
                      changing bloom locations year to year.
                    </li>
                    <li>
                      <strong>Check current travel advisories:</strong> Parts
                      of Manipur have periodically seen security-related
                      travel advisories, so check current conditions before
                      finalizing plans, travel via well-established routes,
                      and consider a local guide or operator in these hill
                      districts.
                    </li>
                    <li>
                      <strong>Carry rain gear even in May:</strong> Hill
                      weather can turn quickly regardless of the calendar.
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
                          "Plan the trip strictly around the May bloom window",
                          "Hire a local guide from Ukhrul",
                          "Carry rain gear and warm layers",
                          "Start the trek early in the day",
                          "Check current advisories before finalizing plans",
                          "Pack out all your trash",
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
                          "Pick or trample the Shirui Lily if you spot it",
                          "Expect any accommodation within the park itself",
                          "Visit outside May and expect to see the lily",
                          "Attempt the trek without a guide on a first visit",
                          "Skip warm/rain layers thinking May guarantees sun",
                          "Leave litter on the trail",
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
                    <strong>🗺️ Extend the trip:</strong> Base yourself in{" "}
                    <Link href="/blog/ukhrul-travel-guide">Ukhrul</Link> and
                    explore Khangkhui Lime Cave and local textile markets
                    around the trek. See our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
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
                {["Manipur", "Shirui Hills", "Shirui Lily"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="shirui-hills-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="shirui-hills-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
