// src/app/blog/jawai-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jawai Travel Guide: Leopard Hills & Rabari Villages",
  description:
    "Complete Jawai guide — leopards living among granite hills alongside Rabari shepherd villages, the Jawai Dam, safari logistics, how to reach from Udaipur or Jodhpur, and a full visit plan.",
  keywords:
    "Jawai travel guide, Jawai leopard safari, Jawai Dam, Pali district Rajasthan, Rabari village, Jawai Bandh, how to reach Jawai, leopard hills Rajasthan, Jawai wilderness camp",
  openGraph: {
    title: "Jawai Travel Guide: Leopard Hills & Rabari Villages",
    description:
      "Leopards and shepherds sharing the same granite hills — the complete guide to Jawai, one of Rajasthan's most distinctive wildlife destinations.",
    url: "https://club.kudozz.in/blog/jawai-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Rugged hill and valley terrain, evoking Jawai's granite hills and leopard habitat in Rajasthan",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawai Travel Guide: Leopard Hills & Rabari Villages",
    description:
      "Leopards living among granite hills beside Rabari shepherd villages — the complete guide to Jawai, Rajasthan.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jawai-travel-guide",
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
          headline: "Jawai Travel Guide: Leopard Hills & Rabari Villages",
          description:
            "Complete Jawai guide — leopards living among granite hills alongside Rabari shepherd villages, the Jawai Dam, safari logistics, how to reach from Udaipur or Jodhpur, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/jawai-travel-guide",
          },
          keywords:
            "Jawai, leopard safari, Rajasthan, Pali district, Rabari village",
          about: {
            "@type": "Place",
            name: "Jawai",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
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
                name: "Rajasthan",
                item: "https://club.kudozz.in/blog/rajasthan-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Jawai",
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
    q: "What makes Jawai's leopards different from other reserves?",
    a: "Jawai's leopards live among granite hills in close proximity to local Rabari shepherd communities, largely without the intense man-animal conflict framing often associated with leopards elsewhere in India. Safaris run on private and community land rather than within a formal national park, so sightings happen among rocky outcrops rather than dense forest.",
  },
  {
    q: "Is Jawai a national park?",
    a: "No — unlike Ranthambore or Sariska, Jawai's leopard safaris operate on private and community-owned land around the Jawai Dam, an important distinction that shapes both the experience and the booking process, which typically runs through your lodge or a specialist operator rather than a government portal.",
  },
  {
    q: "How far is Jawai from Udaipur or Jodhpur?",
    a: "Roughly 3-4 hours by road from either city, making it a natural stop on a route between the two, or a dedicated 2-day detour.",
  },
  {
    q: "What is the best time for Jawai leopard safaris?",
    a: "October to March offers the most comfortable safari conditions, with cooler temperatures for both dawn and dusk drives.",
  },
  {
    q: "Is Jawai an expensive destination compared to other wildlife trips?",
    a: "Generally yes — the boutique wilderness camps and lodges catering to this leopard-safari niche tend to sit at a higher price point than standard tiger-reserve stays, reflecting the specialized, lower-volume nature of the experience.",
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
  { id: "introduction", title: "Where Leopards & Shepherds Coexist", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jawai", level: 2 },
  { id: "things-to-do", title: "Leopard Safaris & Rabari Villages", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JawaiGuidePage() {
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
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="Rugged hill and valley terrain, evoking Jawai's granite hills and leopard habitat in Rajasthan"
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
                { label: "Rajasthan", href: "/blog/rajasthan-travel-guide" },
                { label: "Jawai", href: null },
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
              {["Jawai", "Leopard Safari", "Rajasthan", "Pali District"].map(
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
              Jawai: Leopard Hills & Rabari Village Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Granite hills where wild leopards roam within sight of
              shepherd villages — one of India&apos;s most distinctive and
              least conflict-driven wildlife stories.
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
                  text: "Pali District, Rajasthan",
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
                  <h2>Where Leopards & Shepherds Coexist</h2>
                  <p>
                    <strong>Jawai</strong>, centred on the Jawai Dam in Pali
                    district, tells a genuinely distinctive wildlife story: a
                    population of leopards living among the region&apos;s
                    granite hills in relatively close proximity to local{" "}
                    <strong>Rabari</strong> shepherd communities — largely
                    without the intense man-animal conflict framing often
                    associated with leopards elsewhere in India.
                  </p>
                  <p>
                    Leopard safaris here run on private and community land
                    rather than within a formal national park boundary, an
                    important distinction from parks like{" "}
                    <Link href="/blog/ranthambore-travel-guide">
                      Ranthambore
                    </Link>{" "}
                    — sightings happen among rocky outcrops rather than dense
                    forest.
                  </p>
                  <p>
                    The Jawai Dam and its reservoir also support notable
                    birdlife and crocodiles, and a visit to a Rabari village
                    to learn about their pastoral way of life is a common
                    complement to the safaris.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐆</span> Jawai at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Pali District, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "Nearest Cities",
                          value: "Udaipur, Jodhpur",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🐆",
                          label: "Known For",
                          value: "Leopards on Private Land",
                        },
                        {
                          icon: "🏕️",
                          label: "Stay Type",
                          value: "Boutique Wilderness Camps",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Udaipur or Jodhpur",
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
                  <h2>Best Time to Visit Jawai</h2>
                  <p>
                    Cooler months make both the safaris and the granite
                    terrain far more comfortable to explore.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cooler temperatures make dawn and dusk safari drives genuinely comfortable, the most reliable window for a Jawai visit.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌡️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Very hot",
                        text: "Extreme heat on the exposed granite hills makes safaris more punishing, though still operational for those prepared for it.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — greener, fuller dam",
                        text: "The Jawai Dam fills and the hills turn green, but safari access and comfort can both be affected by rain.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, best light",
                        text: "The coolest, most pleasant stretch of the season, with soft early-morning light ideal for photography on the granite hills.",
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
                    <strong>Our pick:</strong> December to January — the
                    coolest, most comfortable window for both safaris and
                    photography on the granite hills.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jawai</h2>
                  <ul>
                    <li>
                      <strong>By road from Udaipur:</strong> Roughly 3-4
                      hours — see our{" "}
                      <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                        Udaipur travel guide
                      </Link>{" "}
                      for combining the two.
                    </li>
                    <li>
                      <strong>By road from Jodhpur:</strong> Also roughly 3-4
                      hours, making Jawai a natural stop between the two
                      cities.
                    </li>
                    <li>
                      <strong>By rail:</strong> Falna is the nearest railway
                      station, with onward road transfer arranged by most
                      camps and lodges.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your lodge and safaris
                    well ahead — capacity around Jawai is limited compared to
                    larger tiger reserves, and popular camps fill quickly in
                    peak season.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Leopard Safaris & Rabari Villages</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Granite hill terrain around Jawai, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Leopard Safaris</h3>
                  <p>
                    Run on private and community land rather than within a
                    formal national park, safaris here move through rocky
                    granite outcrops rather than dense forest — a genuinely
                    different safari experience from a jeep drive through a
                    tiger reserve.
                  </p>
                  <h3>Jawai Dam</h3>
                  <p>
                    The dam and its reservoir support notable birdlife and
                    crocodiles, and offer a scenic counterpoint to the
                    surrounding hills.
                  </p>
                  <h3>Rabari Village Visits</h3>
                  <p>
                    Visiting a Rabari village and learning about their
                    pastoral way of life is a common complement to the
                    leopard safaris, best done respectfully and ideally with
                    a local guide.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Jawai</h2>
                  <p>
                    Several boutique wilderness camps and lodges in the area
                    cater specifically to the leopard-safari niche, generally
                    at a higher price point than standard tiger-reserve
                    stays.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Simple guesthouses, Falna/Sumerpur",
                          "Basic homestays nearby",
                          "Off-peak lodge rates",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹8,000–₹15,000/night",
                        picks: [
                          "Mid-tier wilderness camps",
                          "Tented safari lodges",
                          "Half-board packages",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🐆",
                        range: "₹20,000–₹50,000+/night",
                        picks: [
                          "Premium boutique wilderness camps",
                          "All-inclusive safari packages",
                          "Private guided experiences",
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
                    Jawai is honestly a premium-positioned destination — most
                    of its best stays sit toward the mid-to-luxury end,
                    reflecting the specialized, lower-volume nature of the
                    experience.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Evening Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Udaipur or Jodhpur, check in",
                          "Evening leopard safari",
                          "Dinner at the camp",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Morning Safari & Village Visit",
                        color: "bg-sky-600",
                        activities: [
                          "Early-morning leopard safari",
                          "Visit a Rabari village",
                          "Afternoon at the Jawai Dam before departure",
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
                  <h2>Where to Eat Near Jawai</h2>
                  <ul>
                    <li>
                      <strong>Camp dining:</strong> Most wilderness camps run
                      full-board, serving Rajasthani and continental meals to
                      guests — the main dining option given the limited
                      standalone restaurant scene.
                    </li>
                    <li>
                      <strong>Nearby towns:</strong> Falna and Sumerpur have
                      simple local eateries for a quick meal if needed.
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
                            "₹4,000",
                            "₹10,000",
                            "₹30,000",
                          ],
                          [
                            "Safari (per drive)",
                            "₹1,500",
                            "₹2,500",
                            "Included",
                          ],
                          ["Food/day", "Included", "Included", "Included"],
                          [
                            "Village visit/guide",
                            "₹500",
                            "₹800",
                            "Included",
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
                    * Most mid-to-luxury camps run full-board with safaris
                    included in the nightly rate.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Jawai</h2>
                  <ul>
                    <li>
                      <strong>Book well ahead:</strong> Limited camp capacity
                      means popular stays and dates fill quickly.
                    </li>
                    <li>
                      <strong>Dawn and dusk are the best safari windows:</strong>{" "}
                      Leopard activity peaks during these cooler, quieter
                      hours.
                    </li>
                    <li>
                      <strong>Approach village visits respectfully:</strong>{" "}
                      Go with a local guide and be mindful of Rabari
                      community life and customs.
                    </li>
                    <li>
                      <strong>Budget for a premium experience:</strong> Jawai
                      tends to run at a higher price point than standard
                      wildlife trips — plan accordingly.
                    </li>
                    <li>
                      <strong>Combine with Udaipur or Jodhpur:</strong> Both
                      are a similar distance away, making Jawai a natural
                      addition to a wider Rajasthan itinerary.
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
                          "Book your camp and safaris well in advance",
                          "Plan dawn and dusk safaris for best activity",
                          "Visit a Rabari village with a local guide",
                          "Budget for a premium wildlife experience",
                          "Combine with Udaipur or Jodhpur",
                          "Bring a good zoom lens for photography",
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
                          "Expect a formal national-park experience",
                          "Book at the last minute in peak season",
                          "Visit a village without a guide/permission",
                          "Underestimate the cost compared to other safaris",
                          "Skip warm layers for early-morning drives",
                          "Rush the visit — Jawai rewards a slower pace",
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
                    <strong>🗺️ Extend the trip:</strong> Jawai sits neatly
                    between{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur
                    </Link>{" "}
                    and Jodhpur. See our full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for the wider region.
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
                {["Jawai", "Leopard Safari", "Rajasthan", "Pali District"].map(
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

              <RelatedPostsGrid currentSlug="jawai-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jawai-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
