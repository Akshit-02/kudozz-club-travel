// src/app/blog/dimapur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dimapur Travel Guide: Gateway to Nagaland",
  description:
    "Complete Dimapur guide — the Kachari ruins and their distinctive stone monoliths, Nagaland's only airport/rail hub, how to reach Kohima onward, and a full visit plan.",
  keywords:
    "Dimapur travel guide, Kachari ruins, Dimapur airport, Nagaland gateway city, Dimapur to Kohima, Kachari Rajbari, how to reach Nagaland",
  openGraph: {
    title: "Dimapur Travel Guide: Gateway to Nagaland",
    description:
      "Nagaland's plains gateway city, and an easy-to-miss ancient ruin with distinctive mushroom-shaped stone monoliths — the complete Dimapur guide.",
    url: "https://club.kudozz.in/blog/dimapur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stone ruins landscape, evoking Dimapur's Kachari ruins and monoliths",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimapur Travel Guide: Gateway to Nagaland",
    description:
      "Nagaland's plains gateway city, and an easy-to-miss ancient ruin worth an hour — the complete Dimapur guide.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dimapur-travel-guide",
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
          headline: "Dimapur Travel Guide: Gateway to Nagaland",
          description:
            "Complete Dimapur guide — the Kachari ruins and their distinctive stone monoliths, Nagaland's only airport/rail hub, and how to reach Kohima onward.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/dimapur-travel-guide",
          },
          keywords: "Dimapur, Nagaland, Kachari ruins, gateway city",
          about: {
            "@type": "Place",
            name: "Dimapur",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nagaland",
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
                name: "Nagaland",
                item: "https://club.kudozz.in/blog/nagaland-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Dimapur",
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
    q: "Is Dimapur worth stopping in or just passing through?",
    a: "Most visitors pass through quickly en route to Kohima, and that's a reasonable plan — but the Kachari ruins are genuinely worth an hour of your time if you can fit them in before moving on.",
  },
  {
    q: "What are the Kachari ruins?",
    a: "The remains of the ancient Kachari kingdom's capital, notable for distinctive mushroom-shaped stone monoliths unlike anything else in the region — an unusual and visually striking archaeological site.",
  },
  {
    q: "How far is it to Kohima?",
    a: "Roughly 74 km, about a 2.5-3 hour drive on hilly roads. Arrange onward transport before you land, especially during the Hornbill Festival when demand spikes.",
  },
  {
    q: "Is this Nagaland's only airport?",
    a: "Yes — Dimapur has Nagaland's only major airport and railway station, making it the practical entry point for nearly every visitor to the state.",
  },
  {
    q: "What is the best time to arrive?",
    a: "October to April for the most comfortable onward travel to Kohima and beyond. If timing a Hornbill Festival trip, plan your Dimapur arrival with extra buffer for regional travel demand.",
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
  { id: "introduction", title: "Nagaland's Plains Gateway", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dimapur", level: 2 },
  { id: "things-to-do", title: "Kachari Ruins & City Sights", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DimapurGuidePage() {
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
              src="/images/destinations/hampi/hero.jpg"
              alt="Ancient stone ruins landscape, evoking Dimapur's Kachari ruins and monoliths"
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
                { label: "Nagaland", href: "/blog/nagaland-travel-guide" },
                { label: "Dimapur", href: null },
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
              {["Dimapur", "Nagaland", "Kachari Ruins", "Gateway City"].map(
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
              Dimapur: Gateway to Nagaland & Kachari Ruins
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Nagaland's only airport and rail hub, sitting in the plains
              rather than the hills — and home to an ancient ruin with
              stone monoliths unlike anything else in the region.
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
                  text: "Dimapur, Nagaland",
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
                  <h2>Nagaland's Plains Gateway</h2>
                  <p>
                    <strong>Dimapur</strong> is{" "}
                    <Link href="/blog/nagaland-travel-guide">Nagaland's</Link>{" "}
                    only city with a major airport and railway station,
                    making it the practical entry point for the vast
                    majority of visitors to the state. It functions as
                    Nagaland's commercial hub, in contrast to{" "}
                    <Link href="/blog/kohima-travel-guide">Kohima's</Link>{" "}
                    administrative role as the state capital.
                  </p>
                  <p>
                    Unlike most of hilly Nagaland, Dimapur sits in the
                    plains and foothills, giving it a notably different
                    geography and climate from the rest of the state —
                    worth knowing so the transition into Kohima's hills
                    doesn't come as a surprise.
                  </p>
                  <p>
                    Dimapur also has significant ancient history as the
                    former capital of the Kachari kingdom. The Dimapur
                    ruins — also called the Kachari Rajbari ruins — are
                    notable for their distinctive mushroom-shaped stone
                    monoliths, an unusual and visually striking
                    archaeological site that's easy to overlook amid the
                    city's modern commercial-hub reputation.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🚪</span> Dimapur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Nagaland" },
                        {
                          icon: "✈️",
                          label: "Airport",
                          value: "Nagaland's only major airport",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🗿",
                          label: "Known For",
                          value: "Kachari Ruins",
                        },
                        {
                          icon: "🏔️",
                          label: "Geography",
                          value: "Plains, not hills",
                        },
                        {
                          icon: "🚗",
                          label: "To Kohima",
                          value: "~74 km",
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
                  <h2>Best Time to Visit Dimapur</h2>
                  <p>
                    Since Dimapur sits in the plains, its climate runs
                    warmer and more humid than hilly Kohima — worth
                    factoring into how you pack.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Drier, more comfortable conditions for arriving and heading onward into Nagaland's hills.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humid",
                        text: "Temperatures and humidity climb ahead of monsoon — still workable, especially for a quick transit stop.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "Heavy rainfall can affect road travel onward to Kohima — build in extra buffer time if traveling this window.",
                      },
                      {
                        season: "Dec 1 – 10",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Hornbill Festival travel period",
                        text: "Expect higher demand for onward transport to Kohima and Kisama — book vehicles in advance.",
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
                    <strong>Our pick:</strong> October to April, both for
                    Dimapur's own comfort and for the smoothest onward
                    journey into Nagaland's hills.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Dimapur</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> Dimapur Airport is
                      Nagaland's only major airport, with flights from
                      Kolkata, Guwahati, and Delhi.
                    </li>
                    <li>
                      <strong>By rail:</strong> Dimapur Railway Station is
                      Nagaland's main rail connection to the wider Indian
                      network.
                    </li>
                    <li>
                      <strong>Onward to Kohima:</strong> Roughly 74 km, a
                      2.5-3 hour drive on hilly roads — see our{" "}
                      <Link href="/blog/kohima-travel-guide">
                        Kohima travel guide
                      </Link>{" "}
                      for what awaits.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange onward transport
                    to Kohima or elsewhere in Nagaland before you land —
                    Dimapur is really a transit hub rather than a
                    multi-day destination, so don't plan an extended stay
                    here by default.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Kachari Ruins & City Sights</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Ancient stone ruins, evoking Dimapur's Kachari monoliths"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Kachari Ruins</h3>
                  <p>
                    The remains of the ancient Kachari kingdom's capital,
                    notable for distinctive mushroom-shaped stone
                    monoliths unlike anything else in the region — an
                    unusual and visually striking archaeological site.
                    Don't skip these even if just passing through; they're
                    easy to overlook amid Dimapur's commercial-hub
                    reputation but genuinely worth an hour.
                  </p>
                  <h3>Dimapur's Commercial Hub Role</h3>
                  <p>
                    As Nagaland's main commercial and transport centre,
                    Dimapur has a more workaday character than the state's
                    hillier, more culturally distinct towns — useful to
                    know so expectations are set accordingly.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Dimapur</h2>
                  <p>
                    Most visitors stay just one night, either arriving
                    late or catching an early flight/train onward.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Budget hotels near the airport/station",
                          "Guesthouses in central Dimapur",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Business hotels",
                          "Central Dimapur properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,000–₹7,000+/night",
                        picks: [
                          "Premium business hotels",
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
                    Treat Dimapur as a one-night transit stop rather than a
                    multi-day base — save your time for Kohima and beyond.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Arrival Day",
                        title: "Land & Settle In",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive by air or rail",
                          "Check into a hotel near the airport/station",
                          "If time allows, visit the Kachari ruins",
                        ],
                      },
                      {
                        day: "Next Day",
                        title: "Head Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Depart early for Kohima",
                          "Or continue to another part of Nagaland",
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
                  <h2>What to Eat in Dimapur</h2>
                  <ul>
                    <li>
                      <strong>Naga cuisine:</strong> Smoked pork and
                      bamboo shoot dishes are available across the city's
                      restaurants — a good first taste before heading into
                      the hills.
                    </li>
                    <li>
                      <strong>Wider Northeast Indian fare:</strong>{" "}
                      Dimapur's commercial-hub character brings a broader
                      mix of regional food options than smaller Nagaland
                      towns.
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
                            "₹1,000",
                            "₹2,500",
                            "₹5,000",
                          ],
                          ["Food/day", "₹400", "₹1,000", "₹2,000"],
                          [
                            "Taxi to Kohima",
                            "₹2,500",
                            "₹3,500",
                            "₹5,000",
                          ],
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
                    * Taxi fare to Kohima is typically a fixed one-way
                    price, best split across a group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Dimapur</h2>
                  <ul>
                    <li>
                      <strong>Don't skip the Kachari ruins:</strong> Easy
                      to miss but genuinely worth an hour if your schedule
                      allows.
                    </li>
                    <li>
                      <strong>Arrange onward transport in advance:</strong>{" "}
                      Especially important during the Hornbill Festival
                      period when demand for cars is high.
                    </li>
                    <li>
                      <strong>Treat it as a transit hub:</strong> One night
                      is usually enough — save your time for Kohima and
                      beyond.
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
                          "Visit the Kachari ruins if time allows",
                          "Arrange onward transport to Kohima in advance",
                          "Book Hornbill Festival travel well ahead",
                          "Use Dimapur as a practical, efficient transit stop",
                          "Try Naga food at a local restaurant here",
                          "Confirm flight/train timings before booking a hotel",
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
                          "Skip the Kachari ruins entirely if you have an hour",
                          "Arrive without arranging onward transport",
                          "Plan a multi-day stay expecting a hill-town experience",
                          "Underestimate the drive time to Kohima",
                          "Forget that Dimapur's climate differs from the hills",
                          "Assume festival-week transport will be easy to book last-minute",
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
                    <strong>🗺️ Extend the trip:</strong> Head onward to{" "}
                    <Link href="/blog/kohima-travel-guide">Kohima</Link>,
                    then{" "}
                    <Link href="/blog/kisama-travel-guide">Kisama</Link> or
                    the{" "}
                    <Link href="/blog/dzukou-valley-travel-guide">
                      Dzukou Valley trek
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      Nagaland travel guide
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
                {["Dimapur", "Nagaland", "Kachari Ruins", "Gateway City"].map(
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

              <RelatedPostsGrid currentSlug="dimapur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dimapur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
