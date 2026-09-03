// src/app/blog/gurudongmar-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Gurudongmar Lake Guide: Permits & Altitude",
  description:
    "Complete Gurudongmar Lake guide — one of the world's highest accessible lakes, its Buddhist and Sikh significance, altitude-sickness risk, permits, and how to reach it from Lachen.",
  keywords:
    "Gurudongmar Lake travel guide, Gurudongmar Sikkim, highest lake in India, North Sikkim permit, Lachen to Gurudongmar, altitude sickness Sikkim, sacred lake Sikkim",
  openGraph: {
    title: "Gurudongmar Lake Guide: Permits & Altitude",
    description:
      "One of the highest accessible lakes on earth, sacred to both Buddhists and Sikhs, at roughly 5,183 metres in North Sikkim. The complete Gurudongmar guide.",
    url: "https://club.kudozz.in/blog/gurudongmar-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Stark high-altitude mountain and lake landscape, evoking Gurudongmar Lake in North Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurudongmar Lake Guide: Permits & Altitude",
    description:
      "One of the highest accessible lakes on earth, sacred to both Buddhists and Sikhs, at roughly 5,183 metres in North Sikkim.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gurudongmar-lake-travel-guide",
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
          headline: "Gurudongmar Lake Guide: Permits & Altitude",
          description:
            "Complete Gurudongmar Lake guide — one of the world's highest accessible lakes, its Buddhist and Sikh significance, altitude-sickness risk, permits, and how to reach it from Lachen.",
          image: "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
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
            "@id": "https://club.kudozz.in/blog/gurudongmar-lake-travel-guide",
          },
          keywords:
            "Gurudongmar Lake, North Sikkim, high altitude lake, permits, sacred lake",
          about: {
            "@type": "Place",
            name: "Gurudongmar Lake",
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
                name: "Gurudongmar Lake",
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
    q: "How high is Gurudongmar Lake?",
    a: "Roughly 5,183 m (about 17,100 ft), making it one of the highest lakes in the world reachable by vehicle — a genuine extreme-altitude destination, not a casual add-on to a Sikkim trip.",
  },
  {
    q: "Is altitude sickness a real risk?",
    a: "Yes, genuinely. The elevation gain from Lachen is substantial and rapid, so altitude sickness is a real possibility even for otherwise fit travelers. This is why an acclimatization overnight in Lachen beforehand, a brief visit at the lake itself, and attentiveness to symptoms all matter.",
  },
  {
    q: "Do I need a special permit?",
    a: "Yes — Gurudongmar falls within the North Sikkim Protected Area, requiring a permit arranged through a registered Gangtok travel agent, usually bundled with the Lachen/Lachung/Yumthang circuit.",
  },
  {
    q: "Can foreign nationals visit?",
    a: "Access rules for foreign nationals to the innermost stretch near the border have varied over time given the lake's proximity to the Chinese border — verify current rules with your travel agent when arranging your permit rather than assuming based on older information.",
  },
  {
    q: "Why do I need to stay in Lachen first?",
    a: "Lachen sits at a notably lower altitude than Gurudongmar, and overnighting there before the ascent gives your body a partial chance to acclimatize, which meaningfully reduces (though doesn't eliminate) the risk of altitude sickness at the lake.",
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
  { id: "introduction", title: "One of the World's Highest Lakes", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gurudongmar Lake", level: 2 },
  { id: "things-to-do", title: "The Lake, Its Significance & Altitude Risk", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Facilities", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GurudongmarLakeGuidePage() {
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
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Stark high-altitude mountain and lake landscape, evoking Gurudongmar Lake in North Sikkim"
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
                { label: "Gurudongmar Lake", href: null },
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
                "Gurudongmar Lake",
                "North Sikkim",
                "High Altitude Lake",
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
              Gurudongmar Lake: One of the World's Highest
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A stark, sacred lake at roughly 5,183 metres, revered by both
              Buddhists and Sikhs — reached only after an acclimatization
              night in Lachen and a careful, brief ascent.
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
                  <h2>One of the World's Highest Lakes</h2>
                  <p>
                    <strong>Gurudongmar Lake</strong>, at roughly 5,183 m
                    (~17,100 ft), is one of the highest lakes in the world
                    accessible by vehicle, located about 67 km from{" "}
                    <Link href="/blog/lachen-travel-guide">Lachen</Link>,
                    from where it's visited as an early-morning excursion
                    after an overnight to partially acclimatize.
                  </p>
                  <p>
                    The lake is sacred to both Buddhists and Sikhs — named
                    for Guru Padmasambhava, and also associated with a local
                    legend involving Guru Nanak — making it a genuine
                    multi-faith pilgrimage site as well as a scenic
                    destination. It remains partially frozen for much of the
                    year, adding to its stark, dramatic beauty against the
                    surrounding barren peaks.
                  </p>
                  <p>
                    Given the extreme elevation, altitude sickness is a real
                    and serious risk, and visits are typically kept brief —
                    no overnight stay is permitted at the lake itself. Access
                    is permit-dependent, and the innermost stretch has at
                    times been more restricted for foreign nationals given
                    the proximity to the Chinese border — verify current
                    rules with your travel agent rather than assuming.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Gurudongmar Lake at a Glance
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
                          value: "~5,183 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Apr – Jun" },
                        {
                          icon: "🛕",
                          label: "Significance",
                          value: "Buddhist & Sikh sacred site",
                        },
                        {
                          icon: "🏕️",
                          label: "Base Village",
                          value: "Lachen (~67 km)",
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
                  <h2>Best Time to Visit Gurudongmar Lake</h2>
                  <p>
                    Access here is entirely weather- and road-dependent given
                    the extreme altitude — timing matters more than almost
                    anywhere else in Sikkim.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The route from Lachen is most reliably open, with the clearest high-altitude weather for viewing the lake.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — road risk",
                        text: "Landslide risk on the North Sikkim roads rises significantly; the route can be unpredictable.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clear, stable",
                        text: "A second reliable window, post-monsoon, with generally clear and stable conditions for the ascent.",
                      },
                      {
                        season: "Dec – Mar",
                        emoji: "❄️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Often snowbound",
                        text: "The lake and route are frequently inaccessible under heavy snow — confirm current conditions before planning.",
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
                    <strong>Our pick:</strong> April to June — the most
                    reliable window for both open roads and clear views at
                    this extreme altitude.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Gurudongmar Lake</h2>
                  <ul>
                    <li>
                      <strong>From Lachen:</strong> Roughly 67 km, driven as
                      a pre-dawn excursion the morning after an
                      acclimatization overnight in Lachen.
                    </li>
                    <li>
                      <strong>Via Thangu Valley:</strong> The route passes
                      through Thangu Valley, a scenic high-altitude meadow
                      that breaks up the ascent.
                    </li>
                    <li>
                      <strong>Permit required:</strong> Part of the North
                      Sikkim Protected Area Permit, with access rules that
                      can vary for foreign nationals — confirm current
                      details with your Gangtok operator.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Never skip the Lachen
                    overnight to save a day — the acclimatization it provides
                    is genuinely important given how high and how fast you
                    ascend to reach the lake.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Lake, Its Significance & Altitude Risk</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="High-altitude stark mountain lake landscape near Gurudongmar, North Sikkim"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>A Sacred Lake for Two Faiths</h3>
                  <p>
                    Named for Guru Padmasambhava and revered by Buddhists,
                    the lake is also tied to a local legend involving Guru
                    Nanak in Sikh tradition — a genuinely rare instance of a
                    single site holding deep significance for two distinct
                    faiths.
                  </p>
                  <h3>Partial Freeze & Stark Scenery</h3>
                  <p>
                    The lake remains partially frozen for much of the year,
                    its icy stretches contrasting with open water against a
                    backdrop of bare, high-altitude peaks — a stark beauty
                    unlike anywhere else on a typical Sikkim itinerary.
                  </p>
                  <h3>Altitude Sickness & Brief Visits</h3>
                  <p>
                    Given the extreme elevation, visits are kept
                    intentionally short, and no overnight stay is permitted
                    at the lake. Take any symptoms of altitude sickness
                    seriously and follow your guide's advice on how long to
                    stay.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's no accommodation at the lake itself — everyone
                    bases in{" "}
                    <Link href="/blog/lachen-travel-guide">Lachen</Link>{" "}
                    before and after the excursion.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,200/night",
                        picks: [
                          "Homestays in Lachen",
                          "Basic guesthouses",
                          "Shared package lodging",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹4,500/night",
                        picks: [
                          "Small heated hotels in Lachen",
                          "Better-appointed guesthouses",
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
                          "Village/valley-view rooms in Lachen",
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
                    A short, focused visit as part of a wider North Sikkim
                    itinerary — not a standalone destination given the
                    access requirements.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Pre-Dawn",
                        title: "Depart Lachen",
                        color: "bg-amber-700",
                        activities: [
                          "Leave before sunrise after a full acclimatization night",
                          "Drive via Thangu Valley toward the lake",
                        ],
                      },
                      {
                        day: "Morning",
                        title: "At the Lake",
                        color: "bg-forest-600",
                        activities: [
                          "A brief, focused visit — follow your guide's timing",
                          "Photograph the lake and surrounding peaks",
                        ],
                      },
                      {
                        day: "Return",
                        title: "Back to Lachen",
                        color: "bg-stone-600",
                        activities: [
                          "Descend to Lachen and rest",
                          "Continue toward Gangtok or Lachung as per your route",
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
                      <strong>Carry your own supplies:</strong> No facilities
                      exist at this altitude — pack water and snacks before
                      leaving Lachen.
                    </li>
                    <li>
                      <strong>Warm meals back in Lachen:</strong> Your
                      homestay or guesthouse typically prepares a hot meal
                      for after the return descent.
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
                    * The permit + vehicle line is typically bundled as part
                    of the shared North Sikkim package covering Lachen,
                    Lachung, Yumthang, and Gurudongmar together.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Gurudongmar Lake</h2>
                  <ul>
                    <li>
                      <strong>Don't rush the ascent:</strong> Take the full
                      acclimatization night in Lachen seriously before
                      continuing higher.
                    </li>
                    <li>
                      <strong>Dress in extreme-cold layers:</strong> Even
                      clear weather at this altitude is genuinely cold.
                    </li>
                    <li>
                      <strong>Verify permit rules if you're a foreign national:</strong>{" "}
                      Access to the innermost stretch has varied over time —
                      confirm current status with your operator.
                    </li>
                    <li>
                      <strong>Keep the visit brief:</strong> Follow your
                      guide's timing rather than lingering at this altitude.
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
                          "Complete a full acclimatization night in Lachen",
                          "Dress in extreme-cold layers",
                          "Watch for and report altitude-sickness symptoms",
                          "Confirm current permit rules if applicable to you",
                          "Follow your guide's timing at the lake",
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
                          "Skip the Lachen acclimatization night",
                          "Ignore headache, nausea, or dizziness symptoms",
                          "Underdress assuming it can't be that cold",
                          "Plan an overnight at the lake itself — it isn't permitted",
                          "Linger longer than your guide advises",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Gurudongmar
                    with{" "}
                    <Link href="/blog/lachen-travel-guide">Lachen</Link>,{" "}
                    <Link href="/blog/lachung-travel-guide">Lachung</Link>,
                    and{" "}
                    <Link href="/blog/yumthang-valley-travel-guide">
                      Yumthang Valley
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
                  "Gurudongmar Lake",
                  "North Sikkim",
                  "High Altitude Lake",
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

              <RelatedPostsGrid currentSlug="gurudongmar-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gurudongmar-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
