// src/app/blog/krang-suri-falls-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Krang Suri Falls Guide: Best Time & Tips",
  description:
    "Complete Krang Suri Falls guide — the turquoise-blue waterfall and swimming pool near Jowai, best time to see the vivid color, how to reach, and safety tips.",
  keywords:
    "Krang Suri Falls travel guide, Krang Suri Jowai, turquoise waterfall Meghalaya, Krang Suri swimming, how to reach Krang Suri Falls, Jaintia Hills waterfall",
  openGraph: {
    title: "Krang Suri Falls Guide: Best Time & Tips",
    description:
      "A vividly turquoise waterfall and swimming pool near Jowai — one of Meghalaya's most photogenic, least crowded falls.",
    url: "https://club.kudozz.in/blog/krang-suri-falls-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise mountain stream in a green valley, evoking Krang Suri Falls' vivid blue pool",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Krang Suri Falls Guide: Best Time & Tips",
    description:
      "A vividly turquoise waterfall and natural swimming pool near Jowai — the complete Krang Suri Falls guide.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/krang-suri-falls-travel-guide",
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
          headline: "Krang Suri Falls Guide: Best Time & Tips",
          description:
            "Complete Krang Suri Falls guide — the turquoise-blue waterfall and swimming pool near Jowai, best time to see the vivid color, how to reach, and safety tips.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
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
            "@id": "https://club.kudozz.in/blog/krang-suri-falls-travel-guide",
          },
          keywords: "Krang Suri Falls, Jowai, Meghalaya, waterfall, swimming pool",
          about: {
            "@type": "Place",
            name: "Krang Suri Falls",
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
                name: "Krang Suri Falls",
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
    q: "Why is the water at Krang Suri Falls so blue?",
    a: "The vivid turquoise color comes from the mineral composition and clarity of the water pooling at the base of the falls, most vivid in the drier months of October to February.",
  },
  {
    q: "Is swimming safe at Krang Suri Falls?",
    a: "A natural pool forms at the base and swimming is popular, but conditions depend on water levels and current — check locally posted safety guidance and avoid swimming right after heavy rain.",
  },
  {
    q: "How far is Krang Suri Falls from Jowai?",
    a: "A short drive of roughly 45 minutes to an hour from Jowai town.",
  },
  {
    q: "What is the best time to visit?",
    a: "October to February, when the water is clearest and most vividly blue. During and just after monsoon the water can turn murkier and the current stronger.",
  },
  {
    q: "Is it less crowded than Cherrapunji's waterfalls?",
    a: "Yes — Krang Suri Falls sees considerably fewer visitors than the well-known falls around Cherrapunji, despite being comparably beautiful.",
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
  { id: "introduction", title: "A Vivid Blue Escape Near Jowai", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Krang Suri Falls", level: 2 },
  { id: "things-to-do", title: "The Falls, the Pool & the Walk In", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KrangSuriFallsGuidePage() {
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
              src="/images/destinations/kasol/kasol.jpg"
              alt="Turquoise mountain stream in a green valley, evoking Krang Suri Falls' vivid blue pool"
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
                { label: "Krang Suri Falls", href: null },
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
              {["Krang Suri Falls", "Jowai", "Meghalaya", "Waterfall"].map(
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
              Krang Suri Falls Guide: Best Time & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A vividly turquoise waterfall and natural swimming pool near
              Jowai — arguably as beautiful as Cherrapunji's famous falls,
              with a fraction of the crowds.
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
                  text: "Near Jowai, Meghalaya",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
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
                  <h2>A Vivid Blue Escape Near Jowai</h2>
                  <p>
                    <strong>Krang Suri Falls</strong>, near{" "}
                    <Link href="/blog/jowai-travel-guide">Jowai</Link>, is a
                    strikingly turquoise-blue waterfall considered one of
                    the most photogenic in Meghalaya — the vivid blue-green
                    pool at its base is the single feature that draws
                    visitors here.
                  </p>
                  <p>
                    A natural swimming pool forms right at the base of the
                    falls, and taking a dip is one of the most popular
                    things to do here, conditions permitting. Despite being
                    every bit as beautiful as the more famous falls around
                    Cherrapunji, Krang Suri remains considerably less
                    crowded.
                  </p>
                  <p>
                    Reaching the falls involves only a short walk and
                    descent from the parking area through forest — an easy,
                    accessible approach compared to Meghalaya's more
                    demanding treks.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>💦</span> Krang Suri Falls at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Jowai, Meghalaya",
                        },
                        {
                          icon: "🕒",
                          label: "From Jowai",
                          value: "~45–60 min drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🎨",
                          label: "Known For",
                          value: "Turquoise-Blue Water",
                        },
                        {
                          icon: "🏊",
                          label: "Activity",
                          value: "Swimming Pool",
                        },
                        {
                          icon: "🚶",
                          label: "Access",
                          value: "Short Forest Walk",
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
                  <h2>Best Time to Visit Krang Suri Falls</h2>
                  <p>
                    Water clarity here follows a similar seasonal pattern
                    to Meghalaya's other famously clear rivers and pools.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The water is at its clearest and most vividly turquoise, with calmer conditions safest for swimming.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warming, still decent",
                        text: "Water clarity generally holds up reasonably well ahead of the monsoon, with warmer air for swimming.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — murkier water",
                        text: "Heavy rain swells the falls and can turn the water murky and the current stronger — exercise real caution swimming in this window.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🍃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak clarity",
                        text: "The most reliably clear, vividly blue stretch of the year, and the best photography light too.",
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
                    <strong>Our pick:</strong> October to February — the
                    most vividly blue water and the safest, calmest
                    swimming conditions.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Krang Suri Falls</h2>
                  <ul>
                    <li>
                      <strong>From Jowai:</strong> A short drive of roughly
                      45–60 minutes — cross-link{" "}
                      <Link href="/blog/jowai-travel-guide">Jowai</Link>.
                    </li>
                    <li>
                      <strong>From Shillong:</strong> Best combined with a
                      Jowai visit given the added distance, roughly 2.5–3
                      hours total.
                    </li>
                    <li>
                      <strong>The final approach:</strong> A short walk and
                      descent from the parking area through forest leads
                      down to the falls.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit October–February for
                    the most vivid blue water — outside this window the
                    falls can look noticeably less striking.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Falls, the Pool & the Walk In</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="Clear blue-green mountain water, evoking the pool at the base of Krang Suri Falls"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Turquoise Pool</h3>
                  <p>
                    The standout feature here is the color — a natural pool
                    at the base of the falls in a vivid turquoise-blue that
                    photographs beautifully and makes for a genuinely
                    memorable swim.
                  </p>
                  <h3>Swimming</h3>
                  <p>
                    Swimming is popular and generally safe in the drier
                    months, though conditions depend on water levels —
                    always check current local guidance before getting in.
                  </p>
                  <h3>The Approach Walk</h3>
                  <p>
                    A short, forested walk and descent from the parking
                    area leads down to the falls — easy enough for most
                    fitness levels, with sturdy footwear recommended for
                    the final stretch.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's no dedicated accommodation at the falls
                    themselves — most visitors base in Jowai or day-trip
                    from Shillong.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏠",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Jowai town guesthouses",
                          "Basic lodges",
                          "Family-run stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: [
                          "Jowai business hotels",
                          "Comfortable guesthouses",
                          "Shillong hotels (if day-tripping)",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌟",
                        range: "₹3,500–₹6,000+/night",
                        picks: [
                          "Premium Jowai hotels",
                          "Shillong luxury stays",
                          "Full-board packages",
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
                    A half-day stop, easily combined with wider Jaintia
                    Hills sightseeing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Krang Suri Falls",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Jowai",
                          "Walk down to the falls",
                          "Swim and relax by the pool",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Onward to Jowai",
                        color: "bg-sky-600",
                        activities: [
                          "Return to Jowai for lunch",
                          "Optional Nartiang Monoliths visit",
                          "Depart for Shillong",
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
                    * Pair with our{" "}
                    <Link href="/blog/jowai-travel-guide">Jowai guide</Link>{" "}
                    for the Nartiang Monoliths and Thadlaskein Lake.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Carry your own:</strong> There are minimal
                      food facilities right at the falls, so pack snacks
                      and water.
                    </li>
                    <li>
                      <strong>Jowai eateries:</strong> Basic local
                      restaurants in Jowai town are the nearest reliable
                      option before or after your visit.
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
                          ["Entry fee", "₹30", "₹30", "₹30"],
                          ["Car hire from Jowai (round trip)", "₹1,200", "₹1,800", "₹2,500"],
                          ["Food/day (Jowai)", "₹400", "₹800", "₹1,500"],
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
                    * Costs are minimal here — most of your budget goes
                    toward the wider Jowai/Shillong trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Krang Suri Falls</h2>
                  <ul>
                    <li>
                      <strong>Visit Oct–Feb:</strong> The color and safety
                      of the water are both best in the drier months.
                    </li>
                    <li>
                      <strong>Check conditions before swimming:</strong>{" "}
                      Water levels and current can change with recent
                      rainfall.
                    </li>
                    <li>
                      <strong>Wear grippy footwear:</strong> The path down
                      can be slippery near the water.
                    </li>
                    <li>
                      <strong>Combine with Jowai:</strong> Pair the falls
                      with the Nartiang Monoliths for a fuller day.
                    </li>
                    <li>
                      <strong>Carry cash and snacks:</strong> Facilities at
                      the falls are minimal.
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
                          "Visit Oct–Feb for the most vivid blue water",
                          "Check local safety guidance before swimming",
                          "Wear grippy, sturdy footwear",
                          "Combine with the Nartiang Monoliths",
                          "Carry water, snacks, and cash",
                          "Bring a camera for the striking color",
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Swim right after heavy rain",
                          "Visit expecting the same color in monsoon",
                          "Wear slippery footwear on the descent",
                          "Expect food facilities at the falls",
                          "Skip checking current safety conditions",
                          "Litter around the pool area",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Krang Suri
                    Falls with{" "}
                    <Link href="/blog/jowai-travel-guide">Jowai</Link> and
                    the Nartiang Monoliths, or see our full{" "}
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
                {[
                  "Krang Suri Falls",
                  "Jowai",
                  "Meghalaya",
                  "Waterfall",
                  "Swimming",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="krang-suri-falls-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="krang-suri-falls-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
