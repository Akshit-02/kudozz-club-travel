// src/app/blog/tura-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tura Travel Guide: Gateway to Garo Hills",
  description:
    "Complete Tura guide — Garo Hills' main town, Nokrek National Park's citrus germplasm sanctuary, matrilineal Garo culture, the Wangala festival, how to reach, and how to use Tura as a base for Balpakram and Siju.",
  keywords:
    "Tura travel guide, Garo Hills, Meghalaya, Nokrek National Park, Wangala festival, West Garo Hills, Garo culture, how to reach Tura, Balpakram, Siju Cave",
  openGraph: {
    title: "Tura Travel Guide: Gateway to Garo Hills",
    description:
      "The main town of Meghalaya's Garo Hills — a different culture, landscape, and pace from the Shillong-Cherrapunji circuit, and the base for Balpakram and Siju.",
    url: "https://club.kudozz.in/blog/tura-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hill town skyline at dusk, evoking Tura's setting as the main town of Meghalaya's Garo Hills",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tura Travel Guide: Gateway to Garo Hills",
    description:
      "Meghalaya's Garo Hills gateway town — Nokrek National Park, matrilineal Garo culture, and the base for Balpakram and Siju.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tura-travel-guide",
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
          headline: "Tura Travel Guide: Gateway to Garo Hills",
          description:
            "Complete Tura guide — Garo Hills' main town, Nokrek National Park's citrus germplasm sanctuary, matrilineal Garo culture, the Wangala festival, how to reach, and how to use Tura as a base for Balpakram and Siju.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/tura-travel-guide",
          },
          keywords: "Tura, Garo Hills, Meghalaya, Nokrek National Park, Wangala festival",
          about: {
            "@type": "Place",
            name: "Tura",
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
                name: "Tura",
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
    q: "How is Garo Hills different from the rest of Meghalaya's tourist circuit?",
    a: "Garo Hills is culturally and geographically distinct from the Khasi and Jaintia Hills that dominate Meghalaya tourism around Shillong and Cherrapunji. The Garo people have their own matrilineal social structure, language, and traditions, and the landscape here — plateaus, canyons, and dense forest around Tura — has a different character from the waterfall-and-root-bridge circuit further east.",
  },
  {
    q: "How far is Tura from Shillong or Guwahati?",
    a: "It's a long journey either way — Garo Hills sits at the western end of Meghalaya, and road travel from Shillong or Guwahati can take the better part of a day. Tura has its own small airstrip with limited flight connections, which can shorten the trip considerably when flights are running.",
  },
  {
    q: "What is Nokrek National Park known for?",
    a: "Nokrek is home to the Garo Hills' highest peak and is designated a UNESCO Biosphere Reserve. It's particularly notable as a citrus germplasm sanctuary — one of the world's important sites for preserving wild citrus genetic diversity, since several wild orange and citrus relatives found here exist almost nowhere else.",
  },
  {
    q: "When is the Wangala festival?",
    a: "Wangala, the Garo community's major harvest festival, is typically held in November, featuring traditional drumming (on the long Garo drum, the dama), dance, and community celebration. Timing a visit around Wangala gives a genuinely rich cultural experience if the dates align with your trip.",
  },
  {
    q: "Is Tura a good base for visiting Balpakram and Siju?",
    a: "Yes — Tura is the practical gateway town for both. Balpakram National Park and Siju Cave are further into South Garo Hills, and most visitors base themselves in Tura and take dedicated day trips or overnight excursions to reach them, since neither has meaningful standalone accommodation.",
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
  { id: "introduction", title: "Garo Hills' Main Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tura", level: 2 },
  { id: "things-to-do", title: "Nokrek, Culture & Wangala", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TuraGuidePage() {
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
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Hill town skyline at dusk, evoking Tura's setting as the main town of Meghalaya's Garo Hills"
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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Tura", href: null },
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
              {["Tura", "Garo Hills", "Meghalaya", "Nokrek National Park"].map(
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
              Tura Travel Guide: Gateway to Garo Hills
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A different Meghalaya entirely — matrilineal Garo culture, a
              citrus sanctuary on the region's highest peak, and the
              practical base for two of the state's wildest, least-visited
              corners.
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
                  text: "West Garo Hills, Meghalaya",
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
                  <h2>Garo Hills' Main Town</h2>
                  <p>
                    <strong>Tura</strong> is the headquarters of West Garo
                    Hills district and the main urban centre of the wider
                    Garo Hills region — a part of Meghalaya that's culturally
                    and geographically distinct from the Khasi and Jaintia
                    Hills that dominate most tourism around{" "}
                    <Link href="/blog/meghalaya-travel-guide">Shillong</Link>{" "}
                    and Cherrapunji. The Garo people have their own language,
                    traditions, and a distinctly matrilineal social structure,
                    where property and lineage pass through the mother's
                    line — a fact worth knowing before arriving, since it
                    shapes so much of daily life and custom here.
                  </p>
                  <p>
                    Tura is the practical gateway for exploring this
                    less-visited half of the state: Nokrek National Park sits
                    on the region's highest ridge just outside town, while
                    Balpakram National Park and Siju Cave lie further south,
                    both reachable as excursions from a Tura base — see our
                    dedicated guides to{" "}
                    <Link href="/blog/balpakram-travel-guide">
                      Balpakram
                    </Link>{" "}
                    and <Link href="/blog/siju-travel-guide">Siju</Link>.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Tura at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "West Garo Hills, Meghalaya",
                        },
                        {
                          icon: "✈️",
                          label: "Access",
                          value: "Small airstrip + long road journey",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🍊",
                          label: "Known For",
                          value: "Nokrek citrus sanctuary",
                        },
                        {
                          icon: "🥁",
                          label: "Culture",
                          value: "Matrilineal Garo society",
                        },
                        {
                          icon: "🎯",
                          label: "Gateway To",
                          value: "Balpakram, Siju Cave",
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
                  <h2>Best Time to Visit Tura</h2>
                  <p>
                    Like most of Meghalaya, Garo Hills has a pronounced
                    monsoon, and timing matters both for comfort and for
                    accessing the more remote sites further south.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry, cooler, and the most reliable window for reaching Nokrek, Balpakram, and Siju without monsoon-related access issues.",
                      },
                      {
                        season: "Nov",
                        emoji: "🥁",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Wangala festival season",
                        text: "The Garo community's major harvest festival — drumming, dance, and celebration, timed to coincide with the end of the harvest.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, pre-monsoon",
                        text: "Temperatures and humidity climb ahead of the monsoon; still workable but less comfortable than the winter window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Garo Hills receives substantial rain in this window, and access to Balpakram and Siju in particular becomes genuinely difficult.",
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
                    <strong>Our pick:</strong> October to April for reliable
                    access to the region's more remote sites — and if
                    timing allows, plan around Wangala in November for a
                    genuinely rich cultural experience.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tura</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Tura has its own small
                      airstrip with limited flight connections — when
                      flights are running, this is by far the fastest way
                      in.
                    </li>
                    <li>
                      <strong>By Road:</strong> A long journey from
                      Shillong or Guwahati given Garo Hills' position at the
                      western end of Meghalaya — expect the better part of
                      a day on the road either way.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Garo Hills requires a
                    genuinely different time commitment than the
                    Shillong-Cherrapunji circuit — treat it as its own
                    multi-day trip rather than a quick add-on.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Nokrek, Culture & Wangala</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Hill town at dusk near Tura, Garo Hills, Meghalaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Nokrek National Park</h3>
                  <p>
                    Just outside Tura, Nokrek National Park sits on the
                    Garo Hills' highest ridge and is designated a UNESCO
                    Biosphere Reserve. It's particularly notable as a
                    citrus germplasm sanctuary — one of the world's
                    significant sites for preserving wild citrus genetic
                    diversity, home to wild orange relatives found almost
                    nowhere else on earth.
                  </p>
                  <h3>Matrilineal Garo Culture</h3>
                  <p>
                    Garo society is notably matrilineal, with property and
                    lineage passing through the mother's line — a
                    distinctive social structure that sets the Garo apart
                    from most other communities in Northeast India and
                    shapes everyday life across the region.
                  </p>
                  <h3>Wangala Festival</h3>
                  <p>
                    Wangala is the Garo community's major harvest festival,
                    typically held in November, featuring traditional
                    drumming on the long Garo dama drum, dance, and
                    community celebration marking the end of the
                    agricultural season.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Tura has the most developed accommodation in Garo
                    Hills, functioning as the practical base for exploring
                    the wider region.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic guesthouses, central Tura",
                          "Government tourist lodges",
                          "Simple lodges near the market",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels, Tura town",
                          "Circuit house-style stays",
                          "Family-run hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium hotels, Tura",
                          "Best available rooms in the district",
                          "Advance booking essential",
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
                    Base yourself in Tura for the whole Garo Hills trip —
                    Balpakram and Siju have essentially no standalone
                    accommodation, so plan them as excursions from town.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (4 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrive & Nokrek",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive in Tura, check in",
                          "Nokrek National Park excursion",
                          "Evening in Tura town",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Balpakram Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Early departure to Balpakram National Park",
                          "Explore the plateau and canyon views",
                          "Return to Tura",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Siju Cave",
                        color: "bg-forest-600",
                        activities: [
                          "Drive to Siju Cave",
                          "Guided cave exploration",
                          "Return to Tura or overnight nearby",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Culture & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Local market and Garo craft browsing",
                          "Last-minute Tura sightseeing",
                          "Departure",
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
                  <h2>What to Eat in Tura</h2>
                  <ul>
                    <li>
                      <strong>Garo cuisine:</strong> Distinct from the
                      Khasi and Jaintia food traditions found around
                      Shillong, with its own preparations of meat, rice,
                      and local greens.
                    </li>
                    <li>
                      <strong>Local markets:</strong> Tura's markets are a
                      good place to try regional produce and simple,
                      home-style Garo cooking.
                    </li>
                    <li>
                      <strong>Hotel kitchens:</strong> Most accommodation
                      serves a mix of Garo and general Indian food, often
                      the most convenient option for visitors.
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
                            "₹3,000",
                            "₹6,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,500",
                          ],
                          [
                            "Balpakram/Siju excursion",
                            "₹1,500",
                            "₹2,500",
                            "₹4,000",
                          ],
                          ["Daily total", "₹3,400", "₹7,600", "₹14,300"],
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
                    * Excludes flights or the long overland journey to
                    reach Tura. Local transport costs are higher than
                    average given the distances involved in reaching
                    Balpakram and Siju.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Tura</h2>
                  <ul>
                    <li>
                      <strong>Plan Garo Hills as its own trip:</strong>{" "}
                      The travel-time commitment from Shillong is
                      substantial, so treat this as a dedicated multi-day
                      trip rather than a quick detour.
                    </li>
                    <li>
                      <strong>Time it around Wangala if possible:</strong>{" "}
                      November's harvest festival offers a genuinely rich
                      cultural experience if your dates align.
                    </li>
                    <li>
                      <strong>Book flights early:</strong> Tura's
                      airstrip has limited flight frequency, so seats fill
                      up quickly when available.
                    </li>
                    <li>
                      <strong>Use Tura as your base:</strong> Balpakram
                      and Siju have little to no standalone accommodation
                      — plan them as excursions from town.
                    </li>
                    <li>
                      <strong>Avoid monsoon for the remote sites:</strong>{" "}
                      Jul-Sep rain makes access to Balpakram and Siju
                      genuinely difficult.
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
                          "Book flights or road transport well ahead",
                          "Treat Garo Hills as a dedicated multi-day trip",
                          "Time your visit around Wangala if possible",
                          "Base yourself in Tura for excursions",
                          "Visit Nokrek for its citrus-sanctuary significance",
                          "Ask locally about current Balpakram/Siju access",
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
                          "Treat Tura as a quick day-trip add-on",
                          "Expect Shillong-level tourist infrastructure",
                          "Visit Balpakram or Siju during heavy monsoon",
                          "Assume standalone accommodation near the parks",
                          "Skip Nokrek if you have any spare time",
                          "Book last-minute flights to Tura",
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
                    <strong>🗺️ Extend the trip:</strong> Use Tura as your
                    base to explore{" "}
                    <Link href="/blog/balpakram-travel-guide">
                      Balpakram National Park
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/siju-travel-guide">Siju Cave</Link>{" "}
                    — both genuinely offbeat South Garo Hills excursions.
                    See our full{" "}
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
                {["Tura", "Garo Hills", "Meghalaya", "Nokrek National Park", "Wangala Festival"].map(
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

              <RelatedPostsGrid currentSlug="tura-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tura-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
