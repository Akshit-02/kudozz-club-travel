// src/app/blog/jowai-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jowai Travel Guide: Jaintia Hills & Tips",
  description:
    "Complete Jowai guide — Jaintia (Pnar) culture, Thadlaskein Lake, the Nartiang Monoliths, Krang Suri Falls, how to reach from Shillong, and a full visit plan.",
  keywords:
    "Jowai travel guide, Jaintia Hills, Pnar culture, Nartiang Monoliths, Thadlaskein Lake, West Jaintia Hills, how to reach Jowai, Krang Suri Falls",
  openGraph: {
    title: "Jowai Travel Guide: Jaintia Hills & Tips",
    description:
      "Ancient standing stones among the tallest in the world, a legend-steeped lake, and a culture distinct from Meghalaya's Khasi Hills circuit — the complete Jowai guide.",
    url: "https://club.kudozz.in/blog/jowai-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green hill town landscape, evoking Jowai's Jaintia Hills setting",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jowai Travel Guide: Jaintia Hills & Tips",
    description:
      "Ancient monoliths, a legend-steeped lake, and a distinct tribal culture — the complete guide to Jowai and the Jaintia Hills.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jowai-travel-guide",
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
          headline: "Jowai Travel Guide: Jaintia Hills & Tips",
          description:
            "Complete Jowai guide — Jaintia (Pnar) culture, Thadlaskein Lake, the Nartiang Monoliths, Krang Suri Falls, how to reach from Shillong, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/jowai-travel-guide",
          },
          keywords: "Jowai, Jaintia Hills, Meghalaya, Pnar culture, Nartiang Monoliths",
          about: {
            "@type": "Place",
            name: "Jowai",
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
                name: "Jowai",
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
    q: "What makes Jaintia (Pnar) culture distinct from Khasi culture?",
    a: "The Jaintia, or Pnar, are a distinct tribal community with their own language, customs, and history from the Khasi communities more commonly associated with the Shillong-Cherrapunji tourist circuit. Jowai and West Jaintia Hills district are their cultural centre, giving the region a genuinely different character from Meghalaya's better-known Khasi Hills attractions.",
  },
  {
    q: "How far is Jowai from Shillong?",
    a: "Roughly 65 km, about 2 hours by road.",
  },
  {
    q: "What are the Nartiang Monoliths?",
    a: "A remarkable collection of ancient standing stones erected by the Jaintia kings, some among the tallest monoliths in the world. They remain far less visited than Meghalaya's Khasi Hills sights despite their genuine archaeological and cultural significance.",
  },
  {
    q: "Is Jowai less crowded than Cherrapunji?",
    a: "Yes — Jowai and the wider Jaintia Hills district see considerably fewer tourists than the Shillong-Cherrapunji circuit, making it a good pick for travelers who want a quieter, culturally distinct Meghalaya experience.",
  },
  {
    q: "Can Jowai be combined with Krang Suri Falls?",
    a: "Yes, easily — Krang Suri Falls is a short drive from Jowai and the two are commonly visited together as a single day's sightseeing.",
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
  { id: "introduction", title: "The Heart of the Jaintia Hills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jowai", level: 2 },
  { id: "things-to-do", title: "Nartiang Monoliths, Thadlaskein Lake & More", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JowaiGuidePage() {
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
              src="/images/destinations/manali/hero.jpg"
              alt="Green hill town landscape, evoking Jowai's Jaintia Hills setting"
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
                { label: "Jowai", href: null },
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
              {["Jowai", "Jaintia Hills", "Meghalaya", "Pnar Culture"].map(
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
              Jowai Travel Guide: Jaintia Hills & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Ancient standing stones among the tallest in the world, a
              legend-steeped lake, and a tribal culture distinct from
              Meghalaya's better-known Khasi Hills circuit.
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
                  text: "West Jaintia Hills, Meghalaya",
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
                  <h2>The Heart of the Jaintia Hills</h2>
                  <p>
                    <strong>Jowai</strong> is the headquarters of West
                    Jaintia Hills district and the cultural centre of the{" "}
                    <strong>Jaintia (Pnar)</strong> tribal community — a
                    distinct people from the Khasi communities more
                    commonly associated with the Shillong-Cherrapunji
                    tourist circuit, giving Jowai and its surrounding
                    district a genuinely different character.
                  </p>
                  <p>
                    <strong>Thadlaskein Lake</strong>, near town, carries
                    local historical and legendary significance tied to a
                    remembered Jaintia folk warrior. Further out, the{" "}
                    <strong>Nartiang Monoliths</strong> are a remarkable
                    collection of ancient standing stones erected by the
                    Jaintia kings — some among the tallest monoliths in the
                    world, and a site that remains far less visited than
                    Meghalaya's Khasi Hills attractions despite its genuine
                    significance.
                  </p>
                  <p>
                    The wider Jaintia Hills district stays considerably
                    quieter than the Shillong-Cherrapunji circuit, appealing
                    to travelers who want a culturally distinct, less
                    crowded corner of Meghalaya.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🗿</span> Jowai at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "West Jaintia Hills, Meghalaya",
                        },
                        {
                          icon: "🕒",
                          label: "From Shillong",
                          value: "~2 hrs drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Nartiang Monoliths",
                        },
                        {
                          icon: "🎭",
                          label: "Culture",
                          value: "Jaintia (Pnar)",
                        },
                        {
                          icon: "🎯",
                          label: "Nearby",
                          value: "Krang Suri Falls",
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
                  <h2>Best Time to Visit Jowai</h2>
                  <p>
                    Comfortable sightseeing weather is the main
                    consideration for a Jaintia Hills trip.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry, clear conditions ideal for exploring the monoliths, lake, and Krang Suri Falls without monsoon disruption.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humidity rising",
                        text: "Still manageable for sightseeing, though afternoon showers become more frequent ahead of the monsoon.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "Meghalaya's intense monsoon affects this region too; roads can be slower and outdoor sites less enjoyable.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🍃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, clearest window",
                        text: "The most reliably clear and comfortable stretch of the year for a Jaintia Hills day trip.",
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
                    <strong>Our pick:</strong> November to February — clear,
                    dry conditions for both the monoliths and a Krang Suri
                    Falls extension.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jowai</h2>
                  <ul>
                    <li>
                      <strong>From Shillong:</strong> Roughly 65 km, about
                      2 hours by road.
                    </li>
                    <li>
                      <strong>By taxi/shared vehicle:</strong> Regular taxis
                      and shared vehicles run between Shillong and Jowai.
                    </li>
                    <li>
                      <strong>Onward to Nartiang:</strong> The monoliths sit
                      a further drive from Jowai town itself, so factor
                      this into your day.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Don't skip the Nartiang
                    Monoliths for lack of fame — they're genuinely one of
                    Meghalaya's most underrated heritage sites.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Nartiang Monoliths, Thadlaskein Lake & More</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hero.jpg"
                      alt="Green hill landscape, evoking the Jaintia Hills around Jowai and Nartiang"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Nartiang Monoliths</h3>
                  <p>
                    A remarkable field of ancient standing stones erected by
                    the Jaintia kings, some among the tallest monoliths in
                    the world — a significant archaeological site that
                    remains far quieter than Meghalaya's headline
                    attractions.
                  </p>
                  <h3>Thadlaskein Lake</h3>
                  <p>
                    A lake near Jowai carrying local historical and
                    legendary significance tied to Jaintia oral tradition —
                    a peaceful spot worth a stop on the way to or from
                    Nartiang.
                  </p>
                  <h3>Jaintia (Pnar) Culture</h3>
                  <p>
                    Jowai's markets and daily life offer a window into Pnar
                    culture and language, distinct from the Khasi
                    traditions found around Shillong and Cherrapunji.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Jowai</h2>
                  <p>
                    Jowai has modest but functional accommodation, serving
                    as a comfortable base for exploring the wider Jaintia
                    Hills district.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏠",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic town guesthouses",
                          "Simple lodges",
                          "Family-run stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: [
                          "Business-style hotels",
                          "Comfortable guesthouses",
                          "Central Jowai stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌟",
                        range: "₹3,500–₹6,000+/night",
                        picks: [
                          "Premium hotels in Jowai",
                          "Nearby nature resorts",
                          "Full-board stays",
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
                        title: "Jowai & Nartiang",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Shillong, check in",
                          "Thadlaskein Lake",
                          "Nartiang Monoliths",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Krang Suri Falls",
                        color: "bg-sky-600",
                        activities: [
                          "Morning drive to Krang Suri Falls",
                          "Swim/relax by the falls",
                          "Return to Shillong or onward",
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
                    * See our{" "}
                    <Link href="/blog/krang-suri-falls-travel-guide">
                      Krang Suri Falls guide
                    </Link>{" "}
                    for more on Day 2.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Jowai</h2>
                  <ul>
                    <li>
                      <strong>Local Jaintia eateries:</strong> Simple,
                      home-style Pnar cooking, often centred on rice, pork,
                      and local greens.
                    </li>
                    <li>
                      <strong>Town market stalls:</strong> Jowai's market is
                      a good place to try tea and snacks alongside daily
                      local life.
                    </li>
                    <li>
                      <strong>Basic restaurants:</strong> A handful of
                      standard North Indian/Khasi-style restaurants operate
                      in town.
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
                          ["Accommodation/night", "₹900", "₹2,200", "₹4,500"],
                          ["Car hire from Shillong (round trip)", "₹3,500", "₹5,000", "₹7,500"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Nartiang entry/local guide", "₹100", "₹300", "₹500"],
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
                    * Car hire is a round-trip figure best split across a
                    group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Jowai</h2>
                  <ul>
                    <li>
                      <strong>Don't skip Nartiang:</strong> It's genuinely
                      underrated — allocate real time for it, not a rushed
                      photo stop.
                    </li>
                    <li>
                      <strong>Hire a car with driver:</strong> Public
                      transport between the monoliths, lake, and Krang Suri
                      Falls is limited.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM and card access is
                      inconsistent outside central Jowai.
                    </li>
                    <li>
                      <strong>Combine with Krang Suri Falls:</strong> The
                      two make a natural pairing for a 2-day Jaintia Hills
                      trip.
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
                          "Allocate real time for the Nartiang Monoliths",
                          "Hire a car with driver for the day",
                          "Combine with Krang Suri Falls",
                          "Carry enough cash for the trip",
                          "Try local Jaintia/Pnar cooking",
                          "Visit Oct–Apr for the clearest weather",
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
                          "Rush past the monoliths for lack of fame",
                          "Rely on public transport between sites",
                          "Expect wide ATM/card access",
                          "Visit during peak monsoon",
                          "Skip Krang Suri Falls if you have time",
                          "Assume Jaintia culture is the same as Khasi",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Jowai with{" "}
                    <Link href="/blog/krang-suri-falls-travel-guide">
                      Krang Suri Falls
                    </Link>{" "}
                    for a fuller Jaintia Hills circuit, or see our full{" "}
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
                  "Jowai",
                  "Jaintia Hills",
                  "Meghalaya",
                  "Pnar Culture",
                  "Nartiang Monoliths",
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

              <RelatedPostsGrid currentSlug="jowai-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jowai-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
