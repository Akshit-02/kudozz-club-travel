// src/app/blog/yuksom-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yuksom Travel Guide: Sikkim's First Capital",
  description:
    "Complete Yuksom guide — the Norbugang coronation site, Dubdi Monastery, the Dzongri-Goecha La trek gateway into Kanchenjunga National Park, how to reach from Gangtok, and a full visit plan.",
  keywords:
    "Yuksom travel guide, Yuksom Sikkim, Norbugang, Dubdi Monastery, Goecha La trek, Dzongri trek, Kanchenjunga National Park, first capital of Sikkim, how to reach Yuksom, West Sikkim",
  openGraph: {
    title: "Yuksom Travel Guide: Sikkim's First Capital",
    description:
      "A 17th-century coronation site, Sikkim's oldest monastery, and the trailhead into Kanchenjunga National Park — the complete guide to Yuksom.",
    url: "https://club.kudozz.in/blog/yuksom-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green forested hills, evoking Yuksom's setting as the historic gateway village into Kanchenjunga National Park",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuksom Travel Guide: Sikkim's First Capital",
    description:
      "Sikkim's historic first capital and the trailhead into Kanchenjunga National Park — the complete Yuksom guide.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/yuksom-travel-guide",
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
          headline: "Yuksom Travel Guide: Sikkim's First Capital",
          description:
            "Complete Yuksom guide — the Norbugang coronation site, Dubdi Monastery, the Dzongri-Goecha La trek gateway into Kanchenjunga National Park, how to reach from Gangtok, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/yuksom-travel-guide",
          },
          keywords:
            "Yuksom, West Sikkim, Norbugang, Dubdi Monastery, Goecha La, Dzongri, Kanchenjunga National Park",
          about: {
            "@type": "Place",
            name: "Yuksom",
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
                name: "Yuksom",
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
    q: "What is the historical significance of Yuksom?",
    a: "Yuksom was Sikkim's first capital — in 1642, the first Chogyal (king) of Sikkim was crowned here at Norbugang, a site still marked today by a stone throne and a commemorative chorten. It's one of the few places in Sikkim where you can stand at the exact founding site of the kingdom.",
  },
  {
    q: "Is Yuksom only worth visiting for trekkers, or is it worth a stop otherwise?",
    a: "It's genuinely worth visiting either way. Non-trekkers can spend a day exploring Norbugang, Dubdi Monastery (Sikkim's oldest), and Kathok Lake. Trekkers use it as the main trailhead into Kanchenjunga National Park, but the village's own history stands on its own.",
  },
  {
    q: "How far is Yuksom from Gangtok?",
    a: "Roughly 5-6 hours by road, depending on conditions. Most visitors either come via Pelling (a shorter onward drive) or arrange the trip directly from Gangtok as part of a wider West Sikkim itinerary.",
  },
  {
    q: "What is the Goecha La trek?",
    a: "A multi-day trek through Kanchenjunga National Park, typically routing via Dzongri, that brings trekkers to close-up views of the Kanchenjunga massif — one of the most rewarding high-altitude treks in the Eastern Himalayas. It requires a permit and is generally done with a registered trekking agency.",
  },
  {
    q: "Do I need a permit just to visit the village, or only to trek?",
    a: "Visiting Yuksom village itself — Norbugang, Dubdi Monastery, Kathok Lake — doesn't require special trekking permits. Permits become necessary once you head into Kanchenjunga National Park for the Dzongri/Goecha La trek.",
  },
  {
    q: "What is the best time to visit Yuksom?",
    a: "March to May and October to November are best for both village sightseeing and trekking conditions — clear skies and comfortable temperatures. Avoid the June to September monsoon if you're planning to trek, as trails become difficult and visibility drops.",
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
  { id: "introduction", title: "Sikkim's Founding Village", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Yuksom", level: 2 },
  { id: "things-to-do", title: "Norbugang, Dubdi & the Trek Gateway", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function YuksomGuidePage() {
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
              alt="Green forested hills, evoking Yuksom's setting as the historic gateway village into Kanchenjunga National Park"
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
                { label: "Yuksom", href: null },
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
                "Yuksom",
                "West Sikkim",
                "Goecha La Trek",
                "First Capital",
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
              Yuksom: Sikkim's First Capital & Trekking Gateway
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 17th-century coronation site, Sikkim's oldest monastery, and
              the trailhead into a UNESCO-listed national park — Yuksom is
              where the kingdom of Sikkim began.
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
                  text: "West Sikkim",
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
                  <h2>Sikkim's Founding Village</h2>
                  <p>
                    <strong>Yuksom</strong>, in West Sikkim, holds a
                    singular place in the state's history — it was here, in
                    1642, that the first Chogyal (king) of Sikkim was
                    crowned at <strong>Norbugang</strong>, founding the
                    kingdom that would rule Sikkim for the next three
                    centuries. A stone throne and a commemorative chorten
                    still mark the exact site today.
                  </p>
                  <p>
                    Beyond its history, Yuksom is home to{" "}
                    <strong>Dubdi Monastery</strong> — widely considered
                    Sikkim's oldest monastery — and the small, sacred{" "}
                    <strong>Kathok Lake</strong>. But for most visitors
                    today, Yuksom's defining role is as the main trailhead
                    into <strong>Kanchenjunga National Park</strong>, a
                    UNESCO World Heritage Site, including the celebrated
                    Dzongri and Goecha La treks that bring hikers to
                    close-up views of the Kanchenjunga massif.
                  </p>
                  <p>
                    That dual identity — founding village and trekking
                    gateway — makes Yuksom worth visiting whether or not
                    you're attempting the trek.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Yuksom at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "West Sikkim",
                        },
                        {
                          icon: "🚗",
                          label: "From Gangtok",
                          value: "~5-6 hrs drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar-May, Oct-Nov" },
                        {
                          icon: "👑",
                          label: "Known For",
                          value: "Norbugang, First Capital",
                        },
                        {
                          icon: "🥾",
                          label: "Trek Gateway",
                          value: "Dzongri, Goecha La",
                        },
                        {
                          icon: "🏔️",
                          label: "Park",
                          value: "Kanchenjunga National Park",
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
                  <h2>Best Time to Visit Yuksom</h2>
                  <p>
                    Weather shapes both village sightseeing and, more
                    critically, trekking conditions if you're heading
                    onward into Kanchenjunga National Park.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar - May",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies, rhododendrons in bloom along trek routes, and comfortable temperatures for both village sightseeing and trekking.",
                      },
                      {
                        season: "Jun - Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid for trekking",
                        text: "Heavy rain makes the Dzongri/Goecha La trails genuinely difficult and reduces visibility of the Kanchenjunga massif to near zero.",
                      },
                      {
                        season: "Oct - Nov",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Excellent — our other pick",
                        text: "Post-monsoon clarity gives some of the best mountain views of the year, with cool but manageable trekking temperatures.",
                      },
                      {
                        season: "Dec - Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, village visits only",
                        text: "Village sightseeing remains possible, but high-altitude trekking becomes considerably harder and less advisable for most visitors.",
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
                    <strong>Our pick:</strong> March to May or October to
                    November — both give clear skies and manageable
                    conditions whether you're just visiting the village or
                    heading into the national park.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Yuksom</h2>
                  <ul>
                    <li>
                      <strong>From Gangtok:</strong> Roughly 5-6 hours by
                      road, depending on conditions — most visitors hire a
                      taxi or join a shared vehicle for the journey.
                    </li>
                    <li>
                      <strong>Via Pelling:</strong> A shorter onward drive
                      from Pelling, making it a natural add-on if you're
                      already touring West Sikkim.
                    </li>
                    <li>
                      <strong>Nearest airport/rail:</strong> Pakyong
                      Airport and New Jalpaiguri (NJP) railway station are
                      the nearest transport hubs, both requiring a
                      multi-hour onward drive.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're planning the
                    Dzongri or Goecha La trek, arrange your registered
                    trekking agency and permits well before arriving in
                    Yuksom — this isn't something to sort out on the spot.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Norbugang, Dubdi & the Trek Gateway</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forested hills around Yuksom, West Sikkim"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Norbugang Coronation Site</h3>
                  <p>
                    A stone throne and chorten mark the spot where Sikkim's
                    first Chogyal was crowned in 1642 — a short, easy walk
                    from the main village, and the essential historical
                    stop for anyone visiting Yuksom.
                  </p>
                  <h3>Dubdi Monastery</h3>
                  <p>
                    Considered Sikkim's oldest monastery, reached via a
                    short uphill hike above the village. The climb itself,
                    through forest, is as much a part of the experience as
                    the monastery.
                  </p>
                  <h3>Kathok Lake</h3>
                  <p>
                    A small, sacred lake near the village, a quieter stop
                    that pairs well with Norbugang and Dubdi Monastery in a
                    half-day village-sightseeing loop.
                  </p>
                  <h3>Dzongri & Goecha La Trek</h3>
                  <p>
                    Yuksom is the main trailhead into{" "}
                    <strong>Kanchenjunga National Park</strong>. The
                    multi-day trek routes via Dzongri and, for those going
                    further, on to Goecha La, delivering some of the
                    closest trekking views of the Kanchenjunga massif
                    available anywhere. It requires a permit and is
                    generally undertaken with a registered trekking agency
                    — this is a serious multi-day commitment, not a casual
                    day hike.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Yuksom</h2>
                  <p>
                    Accommodation is modest and geared as much toward
                    trekkers as sightseers, ranging from simple guesthouses
                    to a few more comfortable options.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Village guesthouses",
                          "Trekker lodges near the trailhead",
                          "Basic homestays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Small hotels with mountain views",
                          "Comfortable trekker-oriented lodges",
                          "Family-run guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Boutique heritage-style stays",
                          "Premium mountain-view resorts",
                          "Full-board trekking base camps",
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
                    Your plan hinges on one decision: are you trekking, or
                    just visiting the village?
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Village & History (non-trekkers)",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Gangtok or Pelling, check in",
                          "Norbugang coronation site",
                          "Dubdi Monastery hike",
                          "Kathok Lake",
                        ],
                      },
                      {
                        day: "Days 1-8+",
                        title: "Dzongri / Goecha La Trek (trekkers)",
                        color: "bg-forest-600",
                        activities: [
                          "Arrive, final permit/gear check with agency",
                          "Multi-day trek via Dzongri toward Goecha La",
                          "Return trek and descent to Yuksom",
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
                  <h2>Where to Eat in Yuksom</h2>
                  <ul>
                    <li>
                      <strong>Guesthouse kitchens:</strong> Most
                      accommodation serves simple home-style Sikkimese and
                      North Indian meals — the most reliable option in a
                      village this small.
                    </li>
                    <li>
                      <strong>Trekker cafes:</strong> A handful of small
                      cafes near the trailhead cater to trekkers with
                      hearty, simple meals before and after treks.
                    </li>
                    <li>
                      <strong>Momos and thukpa:</strong> Standard, reliable
                      staples found throughout the village.
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
                          ["Accommodation/night", "₹1,200", "₹3,000", "₹6,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          [
                            "Trekking permit + guide/day (Goecha La)",
                            "₹2,500",
                            "₹3,500",
                            "₹5,000",
                          ],
                          ["Local transport/day", "₹500", "₹1,200", "₹2,500"],
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
                    * Trekking costs apply only if attempting Dzongri/Goecha
                    La and vary significantly by agency and trek duration.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Yuksom</h2>
                  <ul>
                    <li>
                      <strong>Arrange trekking permits well ahead:</strong>{" "}
                      Goecha La/Dzongri permits and a registered guide
                      should be sorted before you arrive, not on the spot.
                    </li>
                    <li>
                      <strong>Non-trekkers, don't skip Yuksom:</strong>{" "}
                      Norbugang and Dubdi Monastery are worth a dedicated
                      day even without trekking.
                    </li>
                    <li>
                      <strong>Time your visit around trekking season:</strong>{" "}
                      Mar-May and Oct-Nov give the best trail and viewing
                      conditions if trekking is the goal.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited in
                      this small village.
                    </li>
                    <li>
                      <strong>Pack for altitude if trekking:</strong>{" "}
                      Warm layers and proper gear are essential even in the
                      milder trekking windows.
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
                          "Book trekking permits and agency well in advance",
                          "Visit Norbugang and Dubdi Monastery even without trekking",
                          "Carry cash for the whole stay",
                          "Time trekking attempts for Mar-May or Oct-Nov",
                          "Pack warm layers regardless of season",
                          "Combine with Pelling for a fuller West Sikkim trip",
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
                          "Attempt Dzongri/Goecha La without a permit and guide",
                          "Trek during the Jun-Sep monsoon",
                          "Rely on ATMs in the village",
                          "Rush Norbugang and Dubdi Monastery in a few minutes",
                          "Underestimate altitude on the trek",
                          "Expect Gangtok-level tourist infrastructure",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Yuksom with{" "}
                    <Link href="/blog/khecheopalri-lake-travel-guide">
                      Khecheopalri Lake
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/pelling-travel-guide">Pelling</Link>{" "}
                    for a fuller West Sikkim circuit. See our full{" "}
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
                  "Yuksom",
                  "West Sikkim",
                  "Goecha La Trek",
                  "Kanchenjunga National Park",
                  "First Capital",
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

              <RelatedPostsGrid currentSlug="yuksom-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="yuksom-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
