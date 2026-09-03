// src/app/blog/aritar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Aritar Travel Guide: Lake, Views & Tips",
  description:
    "Complete Aritar guide — Aritar Lake (Lampokhari), orange orchards, Aritar Gumpa, pairing with Zuluk on the Old Silk Route, how to reach from Gangtok, and a full visit plan.",
  keywords:
    "Aritar travel guide, Aritar Lake, Lampokhari Lake, East Sikkim, Zuluk Aritar, Old Silk Route Sikkim, how to reach Aritar, Aritar Gumpa",
  openGraph: {
    title: "Aritar Travel Guide: Lake, Views & Tips",
    description:
      "A quiet East Sikkim village built around a horseshoe-shaped lake, orange orchards, and an easy pairing with nearby Zuluk.",
    url: "https://club.kudozz.in/blog/aritar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Calm lake water fringed by greenery, evoking Aritar Lake (Lampokhari) in East Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aritar Travel Guide: Lake, Views & Tips",
    description:
      "A quiet East Sikkim village built around a horseshoe-shaped lake — the complete Aritar guide.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/aritar-travel-guide",
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
          headline: "Aritar Travel Guide: Lake, Views & Tips",
          description:
            "Complete Aritar guide — Aritar Lake (Lampokhari), orange orchards, Aritar Gumpa, pairing with Zuluk on the Old Silk Route, how to reach from Gangtok, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
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
            "@id": "https://club.kudozz.in/blog/aritar-travel-guide",
          },
          keywords: "Aritar, East Sikkim, Lampokhari Lake, Zuluk, Old Silk Route",
          about: {
            "@type": "Place",
            name: "Aritar",
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
                name: "Aritar",
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
    q: "How far is Aritar from Gangtok?",
    a: "Aritar is a comfortable road trip from Gangtok, in East Sikkim near the Old Silk Route circuit — most visitors combine it with Zuluk rather than visiting it alone.",
  },
  {
    q: "Can Aritar be combined with Zuluk?",
    a: "Yes, this is the most natural way to visit — the two sit close together on the same East Sikkim loop, and combining them makes the most of the journey out this way.",
  },
  {
    q: "What is Lampokhari Lake?",
    a: "Lampokhari is another name for Aritar Lake, a horseshoe-shaped lake at the centre of the village offering quiet, uncrowded boating — a contrast to Sikkim's busier lakes closer to Gangtok.",
  },
  {
    q: "What is the best time to visit Aritar?",
    a: "October to December and March to May offer the clearest weather and most pleasant temperatures for both the lake and the surrounding orchard countryside.",
  },
  {
    q: "Is Aritar a standalone destination or best as part of a wider loop?",
    a: "It works best as part of a wider East Sikkim loop with Zuluk — as a standalone destination it's a pleasant but modest stop, while paired with Zuluk it becomes a genuinely rewarding offbeat trip.",
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
  { id: "introduction", title: "A Quiet East Sikkim Village", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Aritar", level: 2 },
  { id: "things-to-do", title: "Aritar Lake, Orchards & the Gumpa", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AritarGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Calm lake water fringed by greenery, evoking Aritar Lake (Lampokhari) in East Sikkim"
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
                { label: "Aritar", href: null },
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
                "Aritar",
                "Lampokhari Lake",
                "East Sikkim",
                "Off-beat",
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
              Aritar: Lake, Orchards & the Silk Route Circuit
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A horseshoe-shaped lake, orange orchards, and a relaxed
              rural pace — Aritar is East Sikkim's quiet counterpart to
              nearby Zuluk.
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
                  text: "East Sikkim",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>A Quiet East Sikkim Village</h2>
                  <p>
                    <strong>Aritar</strong>, in East Sikkim, sits near{" "}
                    <Link href="/blog/zuluk-travel-guide">Zuluk</Link> on
                    the same broader Old Silk Route circuit, making the two
                    a natural pairing for an offbeat East Sikkim trip. Its
                    centrepiece is <strong>Aritar Lake</strong> (also known
                    as Lampokhari), a horseshoe-shaped lake offering
                    boating in a quiet, uncrowded setting — a genuine
                    contrast to Sikkim's busier lakes closer to Gangtok.
                  </p>
                  <p>
                    The village itself has a relaxed, rural character, with
                    orange orchards adding to the scenery. Aritar Gumpa
                    (monastery) is a notable local religious site, and the
                    area is also known locally for having one of the
                    higher-altitude golf courses in the region — a
                    distinctive local curiosity worth a mention.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Aritar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "East Sikkim",
                        },
                        {
                          icon: "🚗",
                          label: "Near",
                          value: "Zuluk",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct-Dec, Mar-May" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Lampokhari Lake",
                        },
                        {
                          icon: "🍊",
                          label: "Setting",
                          value: "Orange Orchards",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Zuluk",
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
                  <h2>Best Time to Visit Aritar</h2>
                  <p>
                    Clear weather makes the biggest difference here, both
                    for the lake and the surrounding orchard views.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct - Dec",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear post-monsoon skies and pleasant temperatures, with orange season adding extra charm to the countryside.",
                      },
                      {
                        season: "Mar - May",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Also excellent",
                        text: "Comfortable temperatures and generally clear conditions for both the lake and wider East Sikkim sightseeing.",
                      },
                      {
                        season: "Jun - Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — less reliable",
                        text: "Rain can affect both road conditions and views, making this a less predictable window for a visit.",
                      },
                      {
                        season: "Jan - Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold but clear",
                        text: "Cold mornings but often crisp, clear skies — still workable for a visit with warm layers.",
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
                    <strong>Our pick:</strong> October to December —
                    clear skies, comfortable temperatures, and orange
                    season adding extra character to the village.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Aritar</h2>
                  <ul>
                    <li>
                      <strong>From Gangtok:</strong> A comfortable road
                      trip into East Sikkim — most visitors combine it with
                      Zuluk on the same Old Silk Route loop.
                    </li>
                    <li>
                      <strong>Via Zuluk:</strong> The two sit close
                      together, making it easy to visit both on a single
                      East Sikkim itinerary.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Don't plan Aritar as a
                    standalone trip — combine it with Zuluk to make the
                    long drive out this way genuinely worthwhile.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Aritar Lake, Orchards & the Gumpa</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Lampokhari Lake at Aritar, East Sikkim"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Aritar Lake (Lampokhari)</h3>
                  <p>
                    A horseshoe-shaped lake at the centre of the village,
                    offering quiet boating away from Sikkim's busier
                    tourist lakes — a peaceful, low-key highlight of a
                    visit here.
                  </p>
                  <h3>Orange Orchards</h3>
                  <p>
                    The countryside around Aritar is dotted with orange
                    orchards, giving the village a relaxed, agricultural
                    character that's especially pleasant to walk through in
                    season.
                  </p>
                  <h3>Aritar Gumpa</h3>
                  <p>
                    A notable local monastery, easily combined with a lake
                    visit for a fuller half-day of sightseeing.
                  </p>
                  <h3>High-Altitude Golf Course</h3>
                  <p>
                    A local curiosity worth a mention — Aritar is known in
                    the region for having one of the higher-altitude golf
                    courses around, a distinctive feature for a village
                    this size.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Aritar</h2>
                  <p>
                    Accommodation here is generally quieter and less
                    developed than around Gangtok, mostly homestays and
                    small resorts.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Village homestays",
                          "Basic guesthouses",
                          "Simple lodges near the lake",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Lakeside cottages",
                          "Small resorts",
                          "Comfortable homestays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium lake-view stays",
                          "Boutique orchard resorts",
                          "Full-board East Sikkim packages",
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
                        title: "Gangtok to Aritar",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Gangtok into East Sikkim",
                          "Check in, afternoon at Aritar Lake",
                          "Evening walk through the orchards",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Aritar Gumpa & On to Zuluk",
                        color: "bg-forest-600",
                        activities: [
                          "Morning visit to Aritar Gumpa",
                          "Depart for Zuluk to continue the Silk Route loop",
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
                  <h2>Where to Eat in Aritar</h2>
                  <ul>
                    <li>
                      <strong>Homestay kitchens:</strong> Most
                      accommodation serves home-style Sikkimese meals to
                      guests — the most reliable option in this small
                      village.
                    </li>
                    <li>
                      <strong>Local tea stalls:</strong> Simple snacks and
                      tea near the lake, useful between activities.
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
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹6,000"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          ["Boating (per session)", "₹150", "₹300", "₹500"],
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
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Aritar</h2>
                  <ul>
                    <li>
                      <strong>Combine with Zuluk:</strong> Aritar works
                      best as part of a wider East Sikkim loop rather than
                      a standalone trip.
                    </li>
                    <li>
                      <strong>Visit during orange season:</strong> Adds
                      extra charm to the countryside if timing allows.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited in
                      this small village.
                    </li>
                    <li>
                      <strong>Pack warm layers:</strong> Evenings can get
                      cool even outside peak winter.
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
                          "Combine Aritar with Zuluk on the same trip",
                          "Try a boat ride on Lampokhari Lake",
                          "Visit during orange season if possible",
                          "Carry enough cash for the whole stay",
                          "Pack warm layers for cool evenings",
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
                          "Plan Aritar as a standalone destination only",
                          "Rely on ATMs in the village",
                          "Visit during heavy monsoon",
                          "Expect a large restaurant scene",
                          "Skip Zuluk if you've come this far",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Aritar with{" "}
                    <Link href="/blog/zuluk-travel-guide">Zuluk</Link> for
                    a fuller Old Silk Route loop. See our full{" "}
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
                {["Aritar", "Lampokhari Lake", "East Sikkim", "Off-beat"].map(
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

              <RelatedPostsGrid currentSlug="aritar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="aritar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
