// src/app/blog/bhubaneswar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bhubaneswar Travel Guide: Temple City of India",
  description:
    "Complete Bhubaneswar guide — Lingaraj Temple, Mukteshwar Temple, Udayagiri and Khandagiri Caves, Nandankanan Zoo, Dhauli, how to reach, and a full visit plan for Odisha's capital.",
  keywords:
    "Bhubaneswar travel guide, Temple City of India, Lingaraj Temple, Mukteshwar Temple, Rajarani Temple, Udayagiri Khandagiri Caves, Nandankanan Zoo, Dhauli Shanti Stupa, Odisha capital, Golden Triangle Odisha",
  openGraph: {
    title: "Bhubaneswar Travel Guide: Temple City of India",
    description:
      "Over 700 temples, ancient rock-cut caves, and a peace pagoda on the site of an ancient war — the complete guide to Odisha's capital city.",
    url: "https://club.kudozz.in/blog/bhubaneswar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stone temple architecture, evoking Bhubaneswar's dense concentration of historic temples",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhubaneswar Travel Guide: Temple City of India",
    description:
      "Odisha's capital, home to centuries of temple architecture and the state's practical Golden Triangle gateway.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bhubaneswar-travel-guide",
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
          headline: "Bhubaneswar Travel Guide: Temple City of India",
          description:
            "Complete Bhubaneswar guide — Lingaraj Temple, Mukteshwar Temple, Udayagiri and Khandagiri Caves, Nandankanan Zoo, Dhauli, how to reach, and a full visit plan for Odisha's capital.",
          image:
            "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
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
            "@id": "https://club.kudozz.in/blog/bhubaneswar-travel-guide",
          },
          keywords:
            "Bhubaneswar, Odisha, Temple City, Lingaraj Temple, Udayagiri Khandagiri, capital city",
          about: {
            "@type": "Place",
            name: "Bhubaneswar",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha",
                item: "https://club.kudozz.in/blog/odisha-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Bhubaneswar",
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
    q: "How many temples does Bhubaneswar really have?",
    a: "Historically the city was home to well over 700 temples, earning it the name 'Temple City of India.' A significant number still stand today, particularly clustered around the Lingaraj Temple area, making Bhubaneswar one of the most temple-dense cities in the country.",
  },
  {
    q: "Can non-Hindus visit Lingaraj Temple?",
    a: "Non-Hindus are traditionally not permitted inside Lingaraj Temple's inner sanctum, but a dedicated viewing platform just outside the complex — set up specifically for this purpose — offers a good view over the temple grounds and its towering spire.",
  },
  {
    q: "How many days do I need in Bhubaneswar?",
    a: "Two days covers the main temples, the Udayagiri and Khandagiri Caves, and either Nandankanan Zoo or Dhauli. It also works well as a single overnight base before heading to Puri and Konark as part of the Golden Triangle.",
  },
  {
    q: "How far is Bhubaneswar from Puri and Konark?",
    a: "Puri is roughly 60 km away (about 1.5 hours by road or a short train), and Konark is roughly 65 km, making both easy day trips or a natural extension of a Bhubaneswar stay.",
  },
  {
    q: "What is the best time to visit Bhubaneswar?",
    a: "October to February offers the most comfortable temperatures for temple-hopping and outdoor sightseeing. Summers (April–June) get very hot, and the monsoon (June–September) brings heavy, sometimes disruptive rain.",
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
  { id: "introduction", title: "The Temple City of India", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bhubaneswar", level: 2 },
  { id: "things-to-do", title: "Temples, Caves & Dhauli", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "2-Day Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BhubaneswarGuidePage() {
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
              src="/images/destinations/hampi/virupaksha.jpg"
              alt="Ancient stone temple architecture, evoking Bhubaneswar's dense concentration of historic temples"
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
                { label: "Odisha", href: "/blog/odisha-travel-guide" },
                { label: "Bhubaneswar", href: null },
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
                "Bhubaneswar",
                "Odisha",
                "Temple City",
                "Lingaraj Temple",
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
              Bhubaneswar Travel Guide: Temple City of India
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Once home to more than 700 temples, ancient rock-cut caves,
              and a peace pagoda on the site of an ancient war — Odisha's
              capital rewards travelers who go beyond a quick stopover.
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
                  text: "Bhubaneswar, Odisha",
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
                  <h2>The Temple City of India</h2>
                  <p>
                    <strong>Bhubaneswar</strong>, the capital of Odisha, is
                    known as the <strong>"Temple City of India"</strong> for
                    having historically been home to well over 700 temples —
                    a scale of religious architecture that makes it one of
                    the most temple-dense cities anywhere in the country.
                    Many of these temples, spanning centuries of Kalinga
                    architectural style, still stand today.
                  </p>
                  <p>
                    The city also holds real historical weight beyond its
                    temples: ancient Jain rock-cut caves, a site linked to
                    Emperor Ashoka's conversion to Buddhism after the
                    devastating Kalinga War, and a modern zoo with one of
                    the country's more successful white tiger
                    breeding programs.
                  </p>
                  <p>
                    Bhubaneswar is the natural base for Odisha's{" "}
                    <strong>Golden Triangle</strong>, paired with{" "}
                    <Link href="/blog/puri-travel-guide">Puri</Link> and{" "}
                    <Link href="/blog/konark-travel-guide">Konark</Link>.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Bhubaneswar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Odisha" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Biju Patnaik Airport (BBI)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "700+ Historic Temples",
                        },
                        {
                          icon: "🕳️",
                          label: "Also",
                          value: "Udayagiri & Khandagiri Caves",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Puri, Konark",
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
                  <h2>Best Time to Visit Bhubaneswar</h2>
                  <p>
                    Odisha's coastal-plains climate makes timing matter,
                    especially for a temple-hopping itinerary on foot.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable, dry conditions for exploring temples and caves on foot, without the humidity of the warmer months.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around midday",
                        text: "Temperatures climb steeply; early-morning sightseeing followed by an indoor midday break works best.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "Significant rainfall can disrupt sightseeing, though the city's temples remain accessible between showers.",
                      },
                      {
                        season: "Dec",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Konark Dance Festival season",
                        text: "A good month to combine Bhubaneswar sightseeing with the Konark Dance Festival nearby.",
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
                    most comfortable window for covering temples, caves, and
                    day trips without the coastal heat or monsoon rain.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bhubaneswar</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Biju Patnaik International
                      Airport (BBI) has regular flights from most major
                      Indian cities and is Odisha's main air gateway.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Bhubaneswar is a major
                      railway junction with direct connections to Kolkata,
                      Delhi, Chennai, Mumbai, and other major cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected to Puri
                      (~60 km), Konark (~65 km), and Cuttack (~30 km) by a
                      good road network.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly into Bhubaneswar, spend
                    a day or two on the city's temples and caves, then move
                    on to Puri as your base for Konark and Chilika Lake.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temples, Caves & Dhauli</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Ancient carved temple architecture evoking Bhubaneswar's historic shrines"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Lingaraj Temple</h3>
                  <p>
                    Dating to the 11th century, Lingaraj Temple is one of
                    the oldest and largest temples in the city, dedicated to
                    Shiva as Tribhubaneswar — the name from which
                    Bhubaneswar itself is derived.
                  </p>
                  <h3>Mukteshwar Temple</h3>
                  <p>
                    A smaller but exceptionally refined temple, renowned for
                    its ornate arched gateway (torana), often called a "gem
                    of Odishan architecture" for its intricate carving.
                  </p>
                  <h3>Rajarani Temple</h3>
                  <p>
                    Built from distinctive reddish sandstone, notable for
                    its sculptural work and a form that influenced later
                    temple architecture across the region.
                  </p>
                  <h3>Udayagiri & Khandagiri Caves</h3>
                  <p>
                    Ancient Jain rock-cut caves dating to around the 2nd
                    century BCE, carved with inscriptions and reliefs — an
                    important archaeological site predating most of the
                    city's temples by centuries.
                  </p>
                  <h3>Nandankanan Zoo & Dhauli</h3>
                  <p>
                    Nandankanan Zoological Park is notable for its white
                    tiger breeding program. Dhauli, on the city's edge, is
                    linked to Emperor Ashoka's edicts and the Kalinga War,
                    now home to a Shanti Stupa (Peace Pagoda).
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Bhubaneswar</h2>
                  <p>
                    As Odisha's capital, Bhubaneswar has the state's widest
                    range of accommodation, from budget lodges to
                    international chains.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Budget hotels near the railway station",
                          "Odisha Tourism lodges",
                          "Guesthouses near Old Town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "Business hotels near the airport",
                          "Centrally located 3-star chains",
                          "Boutique city hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "International 5-star chains",
                          "Premium business hotels",
                          "Heritage-style properties",
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
                  <h2>2-Day Bhubaneswar Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Temple Circuit",
                        color: "bg-amber-700",
                        activities: [
                          "Lingaraj Temple and viewing platform",
                          "Mukteshwar and Rajarani Temples",
                          "Old Town evening walk",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Caves, Zoo & Dhauli",
                        color: "bg-sky-600",
                        activities: [
                          "Udayagiri and Khandagiri Caves",
                          "Nandankanan Zoological Park",
                          "Dhauli and the Shanti Stupa",
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
                    * Extend to a Golden Triangle trip with our{" "}
                    <Link href="/blog/puri-travel-guide">Puri guide</Link> and{" "}
                    <Link href="/blog/konark-travel-guide">Konark guide</Link>.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Bhubaneswar</h2>
                  <ul>
                    <li>
                      <strong>Dalma:</strong> A staple Odia lentil-and-vegetable
                      dish, found across the city's restaurants and homes.
                    </li>
                    <li>
                      <strong>Pakhala bhata:</strong> Fermented rice served
                      with a range of sides, a traditional Odia summer dish.
                    </li>
                    <li>
                      <strong>Chhena poda:</strong> A baked cheese dessert
                      that originated in Odisha — worth seeking out at
                      local sweet shops.
                    </li>
                    <li>
                      <strong>Odia thali:</strong> Widely available across
                      the city, a good introduction to the state's cuisine
                      before venturing to Puri or Konark.
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
                            "₹1,200",
                            "₹3,500",
                            "₹8,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          [
                            "Local transport/day",
                            "₹400",
                            "₹900",
                            "₹2,500",
                          ],
                          ["Entry fees (caves/zoo)", "₹100", "₹150", "₹200"],
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
                    * Figures are per person, per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Bhubaneswar</h2>
                  <ul>
                    <li>
                      <strong>Non-Hindus cannot enter Lingaraj Temple's
                      sanctum:</strong> Use the dedicated viewing platform
                      nearby instead.
                    </li>
                    <li>
                      <strong>Hire a guide for the caves:</strong> Udayagiri
                      and Khandagiri's inscriptions and carvings are easy to
                      miss without historical context.
                    </li>
                    <li>
                      <strong>Start early:</strong> Temple complexes and
                      caves are best explored before the midday heat sets in.
                    </li>
                    <li>
                      <strong>Use Bhubaneswar as your Golden Triangle
                      base:</strong> Both Puri and Konark are easy day trips
                      or onward stops.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> Much
                      of the sightseeing here is outdoors and on foot.
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
                          "Visit Lingaraj Temple's viewing platform",
                          "Hire a guide for Udayagiri and Khandagiri Caves",
                          "Start sightseeing early to beat the heat",
                          "Combine with a Puri and Konark day trip",
                          "Try dalma and chhena poda",
                          "Allow a full day for the caves, zoo, and Dhauli",
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
                          "Try to enter Lingaraj Temple's sanctum as a non-Hindu",
                          "Rush the caves without context on their history",
                          "Plan extensive outdoor sightseeing at midday",
                          "Skip Dhauli if you're interested in Ashoka's history",
                          "Assume Bhubaneswar is just a stopover — it rewards real time",
                          "Forget sun protection for a full day of temple-hopping",
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
                    <strong>🗺️ Extend the trip:</strong> Bhubaneswar pairs
                    naturally with{" "}
                    <Link href="/blog/puri-travel-guide">Puri</Link> and{" "}
                    <Link href="/blog/konark-travel-guide">Konark</Link> to
                    complete Odisha's Golden Triangle. See our full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
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
                  "Bhubaneswar",
                  "Odisha",
                  "Temple City",
                  "Lingaraj Temple",
                  "Heritage",
                  "Destination Guide",
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

              <RelatedPostsGrid currentSlug="bhubaneswar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bhubaneswar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
