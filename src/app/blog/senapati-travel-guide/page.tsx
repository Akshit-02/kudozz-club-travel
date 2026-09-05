// src/app/blog/senapati-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Senapati Travel Guide: Mao Gate, King Chilli & Naga Hills",
  description:
    "Complete Senapati travel guide — the northern Naga hill country of Manipur, Mao Gate on NH2, terraced farms growing the fiery King Chilli and passion fruit, how to reach, and full trip planning.",
  keywords:
    "Senapati travel guide, Senapati Manipur, Mao Gate, King Chilli Naga Mircha, Bhut Jolokia Manipur, Mao Poumai Maram Zeme, Naga Hills Manipur, how to reach Senapati, Inner Line Permit Manipur",
  openGraph: {
    title: "Senapati Travel Guide: Mao Gate, King Chilli & Naga Hills",
    description:
      "Terraced hillside farms, one of the world's hottest chillies, and a well-known gateway between two states — the complete guide to Senapati.",
    url: "https://club.kudozz.in/blog/senapati-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Waterfall in green hill country, evoking Senapati's cool northern Naga hills in Manipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senapati Travel Guide: Mao Gate, King Chilli & Naga Hills",
    description:
      "Terraced hill farms, fiery King Chilli, and a well-known state-border gateway — the complete Senapati guide.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/senapati-travel-guide",
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
          headline: "Senapati Travel Guide: Mao Gate, King Chilli & Naga Hills",
          description:
            "Complete Senapati travel guide — the northern Naga hill country of Manipur, Mao Gate on NH2, King Chilli, terraced farms, and full trip planning.",
          image:
            "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
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
            "@id": "https://club.kudozz.in/blog/senapati-travel-guide",
          },
          keywords: "Senapati, Manipur, Mao Gate, King Chilli, Naga Hills",
          about: {
            "@type": "Place",
            name: "Senapati",
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
                name: "Senapati",
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
    q: "What is Senapati known for?",
    a: "Senapati is the district headquarters town of Manipur's northern Naga hill country, home to Mao, Poumai, Maram, and Zeme communities. It's known for Mao Gate — the well-known road landmark marking the Manipur-Nagaland border on NH2 — and for large-scale hillside farming, including the fiery King Chilli (Naga Mircha, also known as Bhut Jolokia) and passion fruit.",
  },
  {
    q: "What is Mao Gate?",
    a: "Mao Gate is a landmark gateway on NH2 at the Manipur-Nagaland border, near Senapati district, and the main road route between the two states — a common photo-stop and reference point for travelers moving between Manipur and Nagaland.",
  },
  {
    q: "How far is Senapati from Imphal?",
    a: "Roughly 60-70 km north of Imphal along NH2, making it a feasible day trip for travelers based in the capital, though a stopover is a comfortable option too.",
  },
  {
    q: "What is the best time to visit Senapati?",
    a: "October to March offers the most pleasant hill climate, with cool, generally clear conditions well suited to exploring the terraced farmland and hill villages.",
  },
  {
    q: "Is Senapati safe to visit?",
    a: "Parts of Manipur have periodically seen security-related travel advisories, so check current government advisories before finalizing plans, stick to well-established routes such as NH2, travel with a local guide or operator, and avoid traveling after dark in this district. Visitors from outside Manipur also need an Inner Line Permit, in effect since December 2019.",
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
  { id: "introduction", title: "Manipur's Northern Naga Hills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Senapati", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SenapatiGuidePage() {
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
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Waterfall in green hill country, evoking Senapati's cool northern Naga hills in Manipur"
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
                { label: "Senapati", href: null },
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
              {["Manipur", "Senapati", "Naga Hills", "Off-beat"].map(
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
              Senapati: Mao Gate & the Northern Naga Hills
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Terraced hillside farms, one of the world's hottest chillies
              grown on cool northern slopes, and a well-known gateway
              between Manipur and Nagaland — Senapati's hill country
              rewards a slower, closer look.
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
                  text: "Northern Manipur, on NH2",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,700 words",
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
                  <h2>Manipur's Northern Naga Hills</h2>
                  <p>
                    <strong>Senapati</strong> is the district headquarters
                    town of Manipur's northern hill country, home to
                    several Naga communities — including Mao, Poumai,
                    Maram, and Zeme groups — each with their own distinct
                    language and traditions across the district's villages.
                  </p>
                  <p>
                    The landscape here is defined by terraced hillside
                    farming, with the district known for large-scale
                    vegetable and fruit cultivation, including passion
                    fruit, and — most distinctively — the{" "}
                    <strong>King Chilli</strong> (locally called Naga
                    Mircha, and also known as Bhut Jolokia), one of the
                    world's hottest chillies and a genuinely notable local
                    agricultural product.
                  </p>
                  <p>
                    Just north of Senapati town, on{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      NH2 toward Nagaland
                    </Link>
                    , sits <strong>Mao Gate</strong> — a well-known landmark
                    marking the Manipur-Nagaland border and the main road
                    gateway between the two states, familiar to anyone
                    who's driven this route.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌶️</span> Senapati at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Northern Manipur, on NH2",
                        },
                        {
                          icon: "🏘️",
                          label: "Community",
                          value: "Mao, Poumai, Maram, Zeme",
                        },
                        {
                          icon: "🚗",
                          label: "From Imphal",
                          value: "~60–70 km",
                        },
                        {
                          icon: "🌶️",
                          label: "Known For",
                          value: "King Chilli, Mao Gate",
                        },
                        {
                          icon: "🚧",
                          label: "Landmark",
                          value: "Mao Gate (Manipur–Nagaland)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
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
                  <h2>Best Time to Visit Senapati</h2>
                  <p>
                    Given its elevation, Senapati stays noticeably cooler
                    than the Imphal valley year-round — timing your visit
                    mostly comes down to comfort and clarity of views over
                    the terraced hills.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, generally dry hill weather — the most pleasant window for exploring villages, farms, and the drive along NH2.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warming up",
                        text: "Temperatures rise ahead of the monsoon, though hill elevation keeps things milder than the valley below.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but wet",
                        text: "Heavy rain feeds the terraced farmland and keeps the hills green, but road conditions and visibility can suffer.",
                      },
                      {
                        season: "Harvest window",
                        emoji: "🌶️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "King Chilli & produce season",
                        text: "Local harvest activity for chillies and other hill produce is of particular interest to travelers curious about the agricultural side of the district.",
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
                    <strong>Our pick:</strong> October to March for the most
                    comfortable hill climate and the clearest views over
                    Senapati's terraced farmland.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Senapati</h2>
                  <ul>
                    <li>
                      <strong>Via Imphal:</strong> Most visitors route
                      through{" "}
                      <Link href="/blog/imphal-travel-guide">Imphal</Link>,
                      Manipur's air and road gateway. Senapati is roughly
                      60-70 km north of Imphal along NH2, a comfortable day
                      trip or stopover.
                    </li>
                    <li>
                      <strong>By road on NH2:</strong> NH2 connects Imphal
                      to Senapati and continues north through Mao Gate into{" "}
                      <Link href="/blog/nagaland-travel-guide">Nagaland</Link>{" "}
                      — a well-traveled route for anyone continuing further
                      north.
                    </li>
                    <li>
                      <strong>Inner Line Permit:</strong> Visitors from
                      outside Manipur need an Inner Line Permit (ILP), in
                      effect since December 2019 — arrange this in advance
                      or on arrival in Imphal.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're continuing on to
                    Nagaland, plan a stop at Mao Gate — it's directly on
                    NH2 and makes a natural break in the drive.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Senapati</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Green hill terrain in Senapati district, Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Mao Gate</h3>
                  <p>
                    A well-known landmark on NH2 at the Manipur-Nagaland
                    border near Senapati district — a common stop for
                    travelers moving between the two states and a marker
                    of the wider journey through the Naga hills.
                  </p>
                  <h3>Terraced Farmland &amp; King Chilli</h3>
                  <p>
                    Senapati's hillsides are given over to extensive
                    terraced cultivation, with vegetables, passion fruit,
                    and the fiery King Chilli among the district's notable
                    agricultural products. Driving through the district
                    gives a real sense of how much of daily life here
                    revolves around this hillside farming.
                  </p>
                  <h3>Naga Hill Villages</h3>
                  <p>
                    The district's Mao, Poumai, Maram, and Zeme villages
                    each carry their own distinct traditions — visiting
                    with a local guide is the best way to appreciate this
                    diversity respectfully.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Senapati's proximity to Imphal means many visitors do
                    it as a day trip, but a handful of basic stays exist
                    for those who prefer to overnight in the hills.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: ["Basic guesthouses", "Homestays"],
                      },
                      {
                        tier: "Government Stays",
                        icon: "🏛️",
                        range: "₹800–₹1,800/night",
                        picks: ["District circuit house"],
                      },
                      {
                        tier: "Base in Imphal",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, Imphal",
                          "Day-trip from the capital",
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
                    Given the short distance from Imphal, most visitors
                    treat Senapati as a day trip rather than an overnight
                    stop.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1–2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Imphal to Senapati",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Imphal along NH2 (~1.5–2 hrs)",
                          "Explore terraced farmland and local villages",
                          "Stop at Mao Gate if continuing north",
                        ],
                      },
                      {
                        day: "Day 2 (Optional)",
                        title: "Deeper into the Hills",
                        color: "bg-forest-600",
                        activities: [
                          "Visit villages further into the district",
                          "Continue on to Nagaland via Mao Gate, or return to Imphal",
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
                  <h2>What to Eat in Senapati</h2>
                  <ul>
                    <li>
                      <strong>King Chilli dishes:</strong> Naga Mircha
                      (Bhut Jolokia) features in local chutneys and
                      preparations — approach with caution given its heat.
                    </li>
                    <li>
                      <strong>Passion fruit:</strong> Grown locally and
                      widely available fresh in season.
                    </li>
                    <li>
                      <strong>Naga hill cuisine:</strong> Smoked meats and
                      fermented preparations typical across Manipur's Naga
                      hill districts.
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
                          ["Accommodation/night", "₹500", "₹1,300", "₹2,800"],
                          ["Car hire from Imphal (round trip)", "₹2,000", "₹3,200", "₹4,500"],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
                          ["Local guide (half-day)", "₹800", "₹1,500", "₹2,500"],
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
                    * Many travelers do Senapati as a day trip from Imphal,
                    keeping accommodation costs optional.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Senapati</h2>
                  <ul>
                    <li>
                      <strong>Arrange your Inner Line Permit ahead of
                      time:</strong> Required for all visitors from outside
                      Manipur since December 2019.
                    </li>
                    <li>
                      <strong>Hire a car with driver:</strong> The most
                      practical way to cover Senapati's spread-out villages
                      and farmland.
                    </li>
                    <li>
                      <strong>Handle King Chilli with care:</strong> It's
                      genuinely one of the hottest chillies in the world —
                      taste small amounts first.
                    </li>
                    <li>
                      <strong>Carry warm layers:</strong> The hill climate
                      is noticeably cooler than Imphal, especially in the
                      evenings.
                    </li>
                    <li>
                      <strong>Check current advisories:</strong> Parts of
                      Manipur have periodically seen security-related
                      travel advisories, so check current government
                      advisories before finalizing plans, stick to
                      well-established routes such as NH2, travel with a
                      local guide or operator, and avoid traveling after
                      dark in this district.
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
                          "Arrange your Inner Line Permit before arriving",
                          "Hire a car with driver for the district roads",
                          "Check current advisories before finalizing plans",
                          "Carry warm layers for hill evenings",
                          "Try local produce like passion fruit in season",
                          "Stop at Mao Gate if heading toward Nagaland",
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
                          "Underestimate the King Chilli's heat",
                          "Travel without confirming your Inner Line Permit",
                          "Rely on public transport for village visits",
                          "Travel after dark in this district",
                          "Expect a large hotel scene — stays are limited",
                          "Skip checking current travel advisories",
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
                    <Link href="/blog/imphal-travel-guide">Imphal</Link> and
                    continue north via Mao Gate into{" "}
                    <Link href="/blog/nagaland-travel-guide">Nagaland</Link>{" "}
                    if your itinerary allows. See our full{" "}
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
                {["Manipur", "Senapati", "Naga Hills"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="senapati-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="senapati-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
