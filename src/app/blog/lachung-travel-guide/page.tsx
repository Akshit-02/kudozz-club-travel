// src/app/blog/lachung-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Lachung Travel Guide: Gateway to Yumthang",
  description:
    "Complete Lachung guide — the North Sikkim river-confluence village, apple orchards, Lachung Monastery, permits, how to reach from Gangtok, and using it as your base for Yumthang Valley.",
  keywords:
    "Lachung travel guide, Lachung Sikkim, North Sikkim permit, Lachung Monastery, Yumthang Valley base, how to reach Lachung, North Sikkim circuit, Lachung homestay",
  openGraph: {
    title: "Lachung Travel Guide: Gateway to Yumthang",
    description:
      "A river-confluence village in North Sikkim, apple orchards, and the essential overnight base before Yumthang Valley — the complete Lachung guide.",
    url: "https://club.kudozz.in/blog/lachung-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Green mountain valley landscape, evoking Lachung's river-confluence setting in North Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lachung Travel Guide: Gateway to Yumthang",
    description:
      "A river-confluence village in North Sikkim, apple orchards, and the essential overnight base before Yumthang Valley.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/lachung-travel-guide",
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
          headline: "Lachung Travel Guide: Gateway to Yumthang",
          description:
            "Complete Lachung guide — the North Sikkim river-confluence village, apple orchards, Lachung Monastery, permits, how to reach from Gangtok, and using it as your base for Yumthang Valley.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/lachung-travel-guide",
          },
          keywords: "Lachung, North Sikkim, Yumthang Valley, permits, off-beat",
          about: {
            "@type": "Place",
            name: "Lachung",
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
                name: "Lachung",
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
    q: "How far is Lachung from Gangtok?",
    a: "Lachung is roughly 120 km from Gangtok, but given the mountain roads and permit checkpoints, the drive typically takes 6-7 hours, so most itineraries plan it as a full travel day with an overnight arrival.",
  },
  {
    q: "Is Lachung just a base for Yumthang, or worth visiting itself?",
    a: "It's mainly a functional gateway — most visitors spend one night here purely to be positioned for an early-morning Yumthang Valley run. That said, the village itself has genuine charm: apple orchards, the Lachung Monastery, and a quiet river-confluence setting worth a short walk if you have a spare hour.",
  },
  {
    q: "What is the best time to visit Lachung?",
    a: "March to June is the pick if you're timing it around the Yumthang Valley rhododendron bloom, since Lachung is the overnight base for that trip. October to December offers clearer skies and colder, crisper mountain views, though without the flowers.",
  },
  {
    q: "Do I need a permit to visit Lachung?",
    a: "Yes — Lachung falls within the North Sikkim Protected Area, which requires a permit arranged through a registered travel agent in Gangtok, typically bundled with the wider North Sikkim circuit covering Lachung, Yumthang, Lachen, and Gurudongmar.",
  },
  {
    q: "How many days should I plan for North Sikkim?",
    a: "A typical circuit covering Lachung/Yumthang and Lachen/Gurudongmar as a loop runs 4-5 days from Gangtok, including travel days, permit processing, and the early-morning excursions from each base village.",
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
  { id: "introduction", title: "A River-Confluence Village", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lachung", level: 2 },
  { id: "things-to-do", title: "Monastery, Orchards & the Yumthang Base", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LachungGuidePage() {
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
              alt="Green mountain valley landscape, evoking Lachung's river-confluence setting in North Sikkim"
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
                { label: "Lachung", href: null },
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
              {["Lachung", "North Sikkim", "Yumthang Valley", "Off-beat"].map(
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
              Lachung: Gateway to Yumthang Valley
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet river-confluence village in North Sikkim, ringed by
              apple orchards — and the essential overnight stop before an
              early-morning run into Yumthang Valley.
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
                  <h2>A River-Confluence Village</h2>
                  <p>
                    <strong>Lachung</strong> sits at roughly 2,750 m near the
                    confluence of the Lachung and Lachen rivers in North
                    Sikkim. For most visitors it plays a specific, functional
                    role: it's the essential overnight base before an
                    early-morning run into{" "}
                    <Link href="/blog/yumthang-valley-travel-guide">
                      Yumthang Valley
                    </Link>
                    , roughly 24 km further up the road, since the valley is
                    almost always visited as a dawn excursion rather than a
                    standalone drive from Gangtok.
                  </p>
                  <p>
                    That said, Lachung has its own quiet charm beyond the
                    gateway role — apple orchards line the approach into the
                    village, and the Lachung Monastery, a Nyingma-sect
                    Buddhist gompa, is worth the short walk up if you have a
                    spare hour before or after your Yumthang run.
                  </p>
                  <p>
                    A Protected Area Permit is required for the whole North
                    Sikkim circuit — Lachung, Lachen, Yumthang, and{" "}
                    <Link href="/blog/gurudongmar-lake-travel-guide">
                      Gurudongmar Lake
                    </Link>{" "}
                    — arranged through a registered travel agent in{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>{" "}
                    before you set off.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Lachung at a Glance
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
                          value: "~2,750 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun" },
                        {
                          icon: "🌸",
                          label: "Known For",
                          value: "Yumthang Base, Orchards",
                        },
                        {
                          icon: "📋",
                          label: "Permit",
                          value: "Required (North Sikkim)",
                        },
                        {
                          icon: "🚗",
                          label: "From Gangtok",
                          value: "~120 km / 6-7 hrs",
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
                  <h2>Best Time to Visit Lachung</h2>
                  <p>
                    Since most visitors are here purely to launch a Yumthang
                    Valley excursion, timing usually follows what you want to
                    see in the valley rather than Lachung itself.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Timed for the rhododendron bloom in Yumthang Valley, this is the window most visitors plan around — pleasant daytime temperatures with cold mornings and evenings.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — road risk",
                        text: "Monsoon rains raise the risk of landslides on the North Sikkim roads; travel is possible but less predictable, and the flower bloom has usually passed.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clear skies, colder",
                        text: "Crisp, clear mountain views without the crowds of peak season, though nights get genuinely cold and the flowers are long gone.",
                      },
                      {
                        season: "Jan – Feb",
                        emoji: "🥶",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Heavy snow, often closed",
                        text: "Snow frequently closes the road beyond Lachung in deep winter — check current conditions carefully before planning a trip in this window.",
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
                    <strong>Our pick:</strong> March to June, timed with the
                    Yumthang Valley rhododendron bloom — the whole point of
                    basing yourself in Lachung.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Lachung</h2>
                  <ul>
                    <li>
                      <strong>By road from Gangtok:</strong> Roughly 120 km,
                      but mountain roads and permit checkpoints stretch the
                      journey to 6-7 hours — plan it as a full travel day.
                    </li>
                    <li>
                      <strong>Permit checkpoints:</strong> Your North Sikkim
                      Protected Area Permit, arranged in advance through a
                      Gangtok travel agent, is checked en route — carry
                      physical ID matching your permit details.
                    </li>
                    <li>
                      <strong>Shared vs. private vehicle:</strong> Most
                      visitors book the North Sikkim circuit as a package
                      with a local operator, who handles both the permit and
                      the vehicle for the full Lachung/Yumthang/Lachen/
                      Gurudongmar loop.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange your North Sikkim
                    permit and vehicle together through a registered Gangtok
                    operator — independent travel without a package is
                    largely impractical given the permit and road logistics.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Monastery, Orchards & the Yumthang Base</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Mountain valley scenery around Lachung village, North Sikkim"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Lachung Monastery</h3>
                  <p>
                    A Nyingma-sect Buddhist gompa set on a rise above the
                    village, worth a short visit for its quiet setting and
                    valley views — a good way to fill an hour before an early
                    departure or after returning from Yumthang.
                  </p>
                  <h3>The Apple Orchards</h3>
                  <p>
                    Orchards line much of the approach into Lachung,
                    especially attractive if you're passing through in
                    blossom season (spring) — a small but genuine part of the
                    village's character beyond its gateway role.
                  </p>
                  <h3>Using Lachung as Your Yumthang Base</h3>
                  <p>
                    The practical reality: most visitors arrive in the
                    afternoon, overnight, and depart before dawn the next
                    morning for Yumthang Valley and (conditions permitting)
                    Zero Point further up. Plan your Lachung stop around this
                    early start rather than expecting a leisurely village
                    stay.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Lachung</h2>
                  <p>
                    Accommodation here is functional rather than luxurious —
                    homestays and small guesthouses dominate, geared toward
                    one-night stopovers rather than extended stays.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,200/night",
                        picks: [
                          "Local homestays",
                          "Basic village guesthouses",
                          "Shared-vehicle package lodging",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹4,500/night",
                        picks: [
                          "Small hotels with heating",
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
                          "Rooms with valley views",
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
                        day: "Day 1",
                        title: "Gangtok to Lachung",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Gangtok early, permit checkpoints en route",
                          "Arrive Lachung by afternoon, check in",
                          "Evening visit to Lachung Monastery",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Yumthang Valley & Onward",
                        color: "bg-forest-600",
                        activities: [
                          "Pre-dawn departure to Yumthang Valley",
                          "Explore the valley and Zero Point (conditions permitting)",
                          "Return to Lachung or continue toward Lachen",
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
                    * Most itineraries continue from Lachung to{" "}
                    <Link href="/blog/lachen-travel-guide">Lachen</Link> for
                    the second half of a full North Sikkim loop.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Lachung</h2>
                  <ul>
                    <li>
                      <strong>Homestay meals:</strong> Most accommodation
                      includes simple home-style meals — usually the only
                      practical option given how few standalone restaurants
                      exist here.
                    </li>
                    <li>
                      <strong>Basic local eateries:</strong> A handful of
                      small eateries near the main road serve simple Sikkimese
                      and North Indian fare for those not on a full-board
                      homestay plan.
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
                          ["Accommodation/night", "₹1,500", "₹3,500", "₹7,000"],
                          [
                            "North Sikkim permit + vehicle (per person, shared)",
                            "₹4,000",
                            "₹6,000",
                            "₹9,000",
                          ],
                          ["Food/day", "₹500", "₹900", "₹1,800"],
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
                    * The permit + vehicle line is typically bundled as part
                    of a shared North Sikkim package covering Lachung, Lachen,
                    Yumthang, and Gurudongmar together.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Lachung</h2>
                  <ul>
                    <li>
                      <strong>Dress warmly, even in "warm" months:</strong>{" "}
                      Nights get cold at this altitude year-round.
                    </li>
                    <li>
                      <strong>Start the Yumthang run early:</strong> A
                      pre-dawn departure beats both crowds and any afternoon
                      weather changes.
                    </li>
                    <li>
                      <strong>Confirm your permit's dates and route:</strong>{" "}
                      Make sure it covers exactly the days and stops you plan
                      to travel before setting off from Gangtok.
                    </li>
                    <li>
                      <strong>Book through a registered operator:</strong>{" "}
                      Independent travel without a permit/vehicle package is
                      largely impractical here.
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
                          "Arrange your permit and vehicle together in Gangtok",
                          "Pack warm layers regardless of season",
                          "Start the Yumthang excursion before dawn",
                          "Visit Lachung Monastery if you have spare time",
                          "Confirm current road conditions before travel",
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
                          "Attempt the trip without a valid permit",
                          "Expect a wide restaurant scene in the village",
                          "Skip warm clothing assuming it's not that cold",
                          "Plan a leisurely village stay — it's an early-start base",
                          "Ignore checkpoint ID requirements",
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
                    <strong>🗺️ Extend the trip:</strong> Continue from Lachung
                    to{" "}
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
                {["Lachung", "North Sikkim", "Yumthang Valley", "Off-beat"].map(
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

              <RelatedPostsGrid currentSlug="lachung-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="lachung-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
