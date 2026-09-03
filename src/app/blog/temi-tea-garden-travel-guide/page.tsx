// src/app/blog/temi-tea-garden-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Temi Tea Garden Guide: Sikkim's Only Estate",
  description:
    "Complete Temi Tea Garden guide — Sikkim's only tea estate, terraced hillside views with Kanchenjunga in the backdrop, the factory tour, tea tasting, how to reach, and a full visit plan.",
  keywords:
    "Temi Tea Garden, Sikkim tea estate, South Sikkim tea garden, organic tea Sikkim, Temi tea factory tour, how to reach Temi Tea Garden, Kanchenjunga tea garden view",
  openGraph: {
    title: "Temi Tea Garden Guide: Sikkim's Only Estate",
    description:
      "Neat terraced tea rows with the Kanchenjunga range in the backdrop — Sikkim's only tea estate, and one of South Sikkim's most photogenic stops.",
    url: "https://club.kudozz.in/blog/temi-tea-garden-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Terraced tea plantation hillside, evoking Temi Tea Garden, Sikkim's only tea estate",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Temi Tea Garden Guide: Sikkim's Only Estate",
    description:
      "Sikkim's only tea estate, with organic gardens terraced across a hillside and the Kanchenjunga range in the backdrop.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/temi-tea-garden-travel-guide",
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
          headline: "Temi Tea Garden Guide: Sikkim's Only Estate",
          description:
            "Complete Temi Tea Garden guide — Sikkim's only tea estate, terraced hillside views with Kanchenjunga in the backdrop, the factory tour, tea tasting, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/temi-tea-garden-travel-guide",
          },
          keywords:
            "Temi Tea Garden, Sikkim, South Sikkim, tea estate, organic tea",
          about: {
            "@type": "Place",
            name: "Temi Tea Garden",
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
                name: "Temi Tea Garden",
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
    q: "Is Temi the only tea estate in Sikkim?",
    a: "Yes, Temi Tea Garden, established in 1969, is Sikkim's only tea estate — a single garden rather than the many gardens found just across the border in Darjeeling.",
  },
  {
    q: "Can you tour the tea factory?",
    a: "Yes, visitors can typically tour the tea processing factory to see how the leaves are handled, and tea tasting is usually available afterward.",
  },
  {
    q: "How far is Temi Tea Garden from Gangtok?",
    a: "It's most easily reached as part of a South Sikkim route via Ravangla or Namchi, roughly 3-4 hours from Gangtok depending on the exact road taken.",
  },
  {
    q: "What is the best time for photos with the Kanchenjunga backdrop?",
    a: "October to February gives the clearest mountain-backdrop views, while March to May shows the gardens at their greenest, though the peak may be slightly hazier.",
  },
  {
    q: "Is Temi Tea Garden a standalone destination or a stop on a wider circuit?",
    a: "It works best as a stop within a wider South Sikkim day trip, commonly combined with Namchi and Ravangla, rather than a dedicated destination on its own.",
  },
  {
    q: "Can I buy tea directly at the estate?",
    a: "Yes, buying tea directly at Temi is a common part of the visit, both for freshness and to support the local estate.",
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
  { id: "introduction", title: "Sikkim's Only Tea Estate", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Temi Tea Garden", level: 2 },
  { id: "things-to-do", title: "Gardens, Factory & Tasting", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TemiTeaGardenGuidePage() {
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
              src="/images/destinations/coorg/coorg.jpg"
              alt="Terraced tea plantation hillside, evoking Temi Tea Garden, Sikkim's only tea estate"
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
                { label: "Temi Tea Garden", href: null },
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
              {["Temi Tea Garden", "Sikkim", "South Sikkim", "Tea Estate"].map(
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
              Temi Tea Garden: Sikkim's Only Estate
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Neat terraced tea rows climbing a South Sikkim hillside, with
              the Kanchenjunga range filling the horizon behind them.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "South Sikkim",
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
                  <h2>Sikkim's Only Tea Estate</h2>
                  <p>
                    <strong>Temi Tea Garden</strong>, in South Sikkim, is the
                    state's only tea estate, established in 1969. Unlike
                    neighbouring Darjeeling's many gardens just across the
                    border, Temi is a single estate — but one that has
                    earned international recognition for its organic tea.
                  </p>
                  <p>
                    The terraced gardens spread across a hillside, with the{" "}
                    <strong>Kanchenjunga range</strong> visible in the
                    backdrop on clear days — a genuinely photogenic
                    combination of neat tea rows and high Himalayan peaks
                    that makes Temi one of South Sikkim's most rewarding
                    quick stops.
                  </p>
                  <p>
                    Visitors can typically tour the tea factory to see how
                    the leaves are processed, with tea tasting usually
                    available afterward, giving the visit both a scenic and
                    an experiential angle.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🍃</span> Temi Tea Garden at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Sikkim",
                        },
                        {
                          icon: "📅",
                          label: "Established",
                          value: "1969",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🍃",
                          label: "Known For",
                          value: "Only Tea Estate in Sikkim",
                        },
                        {
                          icon: "🏔️",
                          label: "Backdrop",
                          value: "Kanchenjunga Range",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Namchi, Ravangla",
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
                  <h2>Best Time to Visit Temi Tea Garden</h2>
                  <p>
                    The two things that change with season here are the
                    clarity of the Kanchenjunga backdrop and how green the
                    gardens themselves look.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies give the most reliable Kanchenjunga backdrop for photos, with cool, comfortable temperatures for walking the terraces.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌱",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Greenest gardens",
                        text: "The tea bushes are at their most vividly green, though the mountain backdrop can be slightly hazier than in winter.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain makes the terraced paths slippery and obscures the mountain views almost entirely.",
                      },
                      {
                        season: "Nov – Dec",
                        emoji: "🍂",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Crispest views",
                        text: "Among the clearest, driest weeks of the year — excellent for photography of the terraces against the mountains.",
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
                    <strong>Our pick:</strong> October to February for the
                    clearest Kanchenjunga-backdrop photos, or March to May
                    if you'd rather see the gardens at their greenest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Temi Tea Garden</h2>
                  <ul>
                    <li>
                      <strong>Via Ravangla or Namchi:</strong> Temi is most
                      easily reached as part of a South Sikkim route through{" "}
                      <Link href="/blog/ravangla-travel-guide">Ravangla</Link>{" "}
                      or{" "}
                      <Link href="/blog/namchi-travel-guide">Namchi</Link>,
                      roughly 3-4 hours from Gangtok depending on the exact
                      road taken.
                    </li>
                    <li>
                      <strong>Via Bagdogra/NJP:</strong> Also reachable by
                      road from Bagdogra Airport or New Jalpaiguri railway
                      station without necessarily routing through Gangtok.
                    </li>
                    <li>
                      <strong>As a standalone stop:</strong> Best treated as
                      part of a wider day trip rather than a dedicated
                      destination on its own.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit mid-morning — the
                    light on the terraced slopes is best a few hours after
                    sunrise, once any overnight mist has cleared.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Gardens, Factory & Tasting</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Rows of tea bushes on a terraced hillside, evoking Temi Tea Garden's plantation views"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Walking the Terraced Gardens</h3>
                  <p>
                    The main draw is simply walking through the neatly
                    terraced tea rows, with sweeping hillside and, on clear
                    days, Kanchenjunga views — a slow, scenic way to spend
                    an hour.
                  </p>
                  <h3>The Tea Factory Tour</h3>
                  <p>
                    A tour of the processing factory shows how leaves are
                    withered, rolled, and dried — a useful bit of context
                    for anyone who wants to understand what makes Temi's
                    organic tea distinctive.
                  </p>
                  <h3>Tea Tasting</h3>
                  <p>
                    Tea tasting is usually available after the factory
                    tour, and buying tea directly at the estate is a common
                    way to take a genuine piece of Sikkim home.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Temi Tea Garden</h2>
                  <p>
                    There are a few tea-estate-adjacent stays and homestays
                    near Temi, but most visitors treat it as a stop within a
                    wider South Sikkim day rather than a dedicated
                    overnight — worth knowing before planning your trip.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Homestays near the estate",
                          "Basic guesthouses in nearby Ravangla",
                          "Simple lodges in Namchi",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Estate-view guesthouses",
                          "Hotels in Ravangla or Namchi",
                          "Boutique South Sikkim stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🍃",
                        range: "₹4,500–₹8,500+/night",
                        picks: [
                          "Premium resorts in Ravangla",
                          "Full-board South Sikkim packages",
                          "Boutique hillside retreats",
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
                        day: "Morning",
                        title: "Namchi",
                        color: "bg-amber-700",
                        activities: [
                          "Char Dham and Samdruptse Hill",
                          "Drive onward toward Temi",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Temi Tea Garden",
                        color: "bg-sky-600",
                        activities: [
                          "Walk the terraced gardens",
                          "Tea factory tour and tasting",
                          "Buy tea directly at the estate",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Ravangla",
                        color: "bg-forest-600",
                        activities: [
                          "Buddha Park",
                          "Check in for the night or return to Gangtok",
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
                    * This one-day South Sikkim loop combines{" "}
                    <Link href="/blog/namchi-travel-guide">Namchi</Link>,
                    Temi Tea Garden, and{" "}
                    <Link href="/blog/ravangla-travel-guide">Ravangla</Link>{" "}
                    into a single efficient route.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Temi Tea Garden</h2>
                  <ul>
                    <li>
                      <strong>Estate café/stalls:</strong> A few small
                      stalls near the garden serve tea and light snacks —
                      the freshly brewed local tea is worth trying on the
                      spot.
                    </li>
                    <li>
                      <strong>Ravangla or Namchi eateries:</strong> For a
                      proper meal, most visitors stop in one of these
                      nearby towns rather than at Temi itself.
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
                          ["Car hire from Gangtok (round trip)", "₹3,500", "₹5,000", "₹7,500"],
                          ["Factory tour + tasting", "₹100", "₹100", "₹100"],
                          ["Tea purchase (per pack)", "₹200", "₹400", "₹800"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
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
                    * Figures are per person, per day (except car hire, a
                    round-trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Temi Tea Garden</h2>
                  <ul>
                    <li>
                      <strong>Visit mid-morning:</strong> Best light on the
                      terraces once overnight mist has cleared.
                    </li>
                    <li>
                      <strong>Buy tea directly at the estate:</strong> For
                      freshness, and to support the local operation
                      directly.
                    </li>
                    <li>
                      <strong>Combine with Namchi and Ravangla:</strong>{" "}
                      Makes far better use of the drive time than treating
                      Temi as a standalone trip.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes:</strong> The terraced
                      paths involve some uneven, sloped walking.
                    </li>
                    <li>
                      <strong>Check factory tour timings on arrival:</strong>{" "}
                      Tour availability can vary by season and time of day.
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
                          "Visit mid-morning for the best light",
                          "Take the factory tour if available",
                          "Buy tea directly at the estate",
                          "Combine with Namchi and Ravangla",
                          "Wear comfortable shoes for the terraces",
                          "Go in clear weather for the mountain backdrop",
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
                          "Treat Temi as a full-day standalone trip",
                          "Visit during heavy monsoon rain",
                          "Expect a large restaurant scene on-site",
                          "Skip the factory tour if it's available",
                          "Rush through without walking the terraces",
                          "Rely on cards — carry cash for tea purchases",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Temi Tea
                    Garden with{" "}
                    <Link href="/blog/namchi-travel-guide">Namchi</Link> and{" "}
                    <Link href="/blog/ravangla-travel-guide">Ravangla</Link>{" "}
                    for a complete South Sikkim day. See our full{" "}
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
                {["Temi Tea Garden", "Sikkim", "South Sikkim", "Tea Estate"].map(
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

              <RelatedPostsGrid currentSlug="temi-tea-garden-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="temi-tea-garden-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
