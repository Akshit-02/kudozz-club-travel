// src/app/blog/kalimpong-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kalimpong Travel Guide: Monasteries, Flowers & Views",
  description:
    "Complete Kalimpong guide — Durpin Monastery, Deolo Hill, the town's famous flower nurseries, Dr Graham's Homes, how to reach it from Bagdogra and Darjeeling, and a full visit plan.",
  keywords:
    "Kalimpong travel guide, Durpin Monastery, Deolo Hill, Kalimpong flower nurseries, Dr Graham's Homes, Rishi Bankim Chandra Park, Kalimpong best time to visit, how to reach Kalimpong, Teesta River, Darjeeling hills, West Bengal hill station",
  openGraph: {
    title: "Kalimpong Travel Guide: Monasteries, Flowers & Views",
    description:
      "The quieter alternative to Darjeeling — hilltop monasteries, orchid and cactus nurseries, and sweeping views of the Teesta valley.",
    url: "https://club.kudozz.in/blog/kalimpong-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Terraced hill slopes and mountain views around Kalimpong, West Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalimpong Travel Guide: Monasteries, Flowers & Views",
    description:
      "Hilltop monasteries, orchid and cactus nurseries, and sweeping Teesta valley views — the complete Kalimpong guide.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kalimpong-travel-guide",
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
          headline: "Kalimpong Travel Guide: Monasteries, Flowers & Views",
          description:
            "Complete Kalimpong guide — Durpin Monastery, Deolo Hill, the town's famous flower nurseries, Dr Graham's Homes, how to reach it from Bagdogra and Darjeeling, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/kalimpong-travel-guide",
          },
          keywords:
            "Kalimpong, Durpin Monastery, Deolo Hill, flower nurseries, Dr Graham's Homes, Teesta River, Darjeeling hills",
          about: {
            "@type": "Place",
            name: "Kalimpong",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kalimpong",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Kalimpong",
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
    q: "Is Kalimpong better than Darjeeling?",
    a: "They serve different moods rather than one being outright 'better.' Darjeeling has the Toy Train, Tiger Hill, and a bigger tea-tourism scene, but also bigger crowds. Kalimpong is quieter, less commercialised, and known for its flower nurseries and monasteries — many travellers pair both, using Kalimpong as the calmer counterpoint after Darjeeling's busier sights.",
  },
  {
    q: "How do I reach Kalimpong?",
    a: "The nearest airport is Bagdogra (IXB), about 80 km away, and the nearest railhead is New Jalpaiguri (NJP), about 65 km away. From either, shared jeeps and taxis reach Kalimpong in around 3 hours. It's also well connected to Darjeeling and Siliguri by frequent shared-jeep services, making it easy to combine both hill towns in one trip.",
  },
  {
    q: "What is Kalimpong known for?",
    a: "Kalimpong is one of India's major centres for flower and orchid cultivation — its nurseries export gladioli, orchids, cacti, and other ornamental plants across the country and abroad. It's also known for its Buddhist monasteries, notably Durpin Monastery, its Scottish missionary heritage at Dr Graham's Homes, and sweeping views over the Teesta and Relli river valleys.",
  },
  {
    q: "What is the best time to visit Kalimpong?",
    a: "March to June and October to December are the best windows, offering clear skies and comfortable temperatures. Spring (March-May) is particularly good for the flower nurseries, when many species are in full bloom.",
  },
  {
    q: "How many days should I spend in Kalimpong?",
    a: "2 days covers the town's main sights comfortably — Durpin Monastery, Deolo Hill, a couple of flower nurseries, and Dr Graham's Homes. Add a day if you want to explore nearby Lava, Lolegaon, or the Teesta riverside villages of Bindu and Jhalong.",
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
  { id: "introduction", title: "The Quiet Hill Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kalimpong", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KalimpongGuidePage() {
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
              alt="Terraced hill slopes and mountain views around Kalimpong, West Bengal"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Kalimpong", href: null },
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
                "Kalimpong",
                "Monasteries",
                "Flower Nurseries",
                "Teesta River",
                "West Bengal",
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
              Kalimpong: Monasteries, Flowers & Valley Views
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The Darjeeling hills' quieter cousin — hilltop monasteries,
              India's biggest flower-export nurseries, and views over the
              Teesta valley without the crowds.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Darjeeling Hills, West Bengal",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>The Quiet Hill Town</h2>
                  <p>
                    <strong>Kalimpong</strong> sits on a ridge across the
                    Teesta river from the better-known{" "}
                    <Link href="/blog/darjeeling-travel-guide">
                      Darjeeling
                    </Link>
                    , at a slightly lower elevation of around 1,250 metres.
                    Once a trade post on the old route between India and
                    Tibet, it has kept a slower, more residential character
                    than its famous neighbour — fewer tour buses, fewer
                    photo-stop crowds, and a genuine small-town feel even
                    around its main sights.
                  </p>
                  <p>
                    What Kalimpong lacks in headline attractions, it makes up
                    for in specific, memorable ones: it's one of India's
                    largest centres for flower cultivation, exporting
                    gladioli, orchids, and cacti nationwide; its monasteries,
                    particularly Durpin Monastery, are peaceful and rarely
                    crowded; and its ridge-top views over the Teesta and
                    Relli valleys rival anything in{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal's
                    </Link>{" "}
                    hills.
                  </p>
                  <p>
                    Most visitors combine Kalimpong with Darjeeling or use it
                    as a calmer stop en route to{" "}
                    <Link href="/blog/sandakphu-travel-guide">
                      Sandakphu
                    </Link>{" "}
                    or the Lava-Lolegaon forest belt further east.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌸</span> Kalimpong at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Darjeeling Hills, West Bengal",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~1,250 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Oct–Dec" },
                        {
                          icon: "🌷",
                          label: "Known For",
                          value: "Flower Nurseries, Monasteries",
                        },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Bagdogra (~80 km)",
                        },
                        {
                          icon: "🚆",
                          label: "Nearest Railhead",
                          value: "New Jalpaiguri (~65 km)",
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
                  <h2>Best Time to Visit Kalimpong</h2>
                  <p>
                    Kalimpong's slightly lower elevation than Darjeeling
                    makes it a touch milder year-round, but the same broad
                    seasonal rules apply.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌷",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Warm, clear days and the flower nurseries at their peak bloom — the best window to see Kalimpong's famous orchids and gladioli in full colour.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Equally excellent",
                        text: "Clear post-monsoon skies bring some of the best valley and mountain views of the year, with comfortably cool temperatures.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain and occasional landslides disrupt the hill roads; the nurseries stay green but views are frequently clouded over.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold but pleasant",
                        text: "Cool days and cold nights, generally milder than Darjeeling at the same time of year, with clear skies common.",
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
                    <strong>Our pick:</strong> April to May — the flower
                    nurseries are at their most colourful, and the hill roads
                    are typically dry and reliable.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kalimpong</h2>
                  <p>
                    Like the rest of the Darjeeling hills, Kalimpong has no
                    airport or railhead of its own — access runs through
                    Siliguri.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Bagdogra Airport (IXB), about
                      80 km away, has daily flights from Delhi, Kolkata, and
                      other major cities. Taxis and shared jeeps take
                      roughly 3 hours up to Kalimpong.
                    </li>
                    <li>
                      <strong>By Rail:</strong> New Jalpaiguri (NJP), about
                      65 km away, is well connected by overnight trains from
                      Kolkata and beyond.
                    </li>
                    <li>
                      <strong>From Darjeeling or Siliguri:</strong>{" "}
                      Frequent shared jeeps connect Kalimpong to both — the
                      Darjeeling route takes about 2-2.5 hours via Teesta
                      Bazaar, making it easy to combine both hill towns in
                      one trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If combining Kalimpong with
                    Darjeeling, the direct shared-jeep route via Teesta
                    Bazaar is faster and more scenic than routing back
                    through Siliguri.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Kalimpong</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hero.jpg"
                      alt="Ridge-top views over the Teesta valley near Kalimpong, West Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Durpin Monastery (Zang Dhok Palri Fo-Brang)</h3>
                  <p>
                    Perched on Durpin Hill, Kalimpong's highest point, this
                    Tibetan Buddhist monastery was consecrated by the Dalai
                    Lama in 1976 and holds a valuable collection of Tibetan
                    Buddhist manuscripts and thangka art. The hilltop setting
                    also gives one of the best panoramic views in town, over
                    the Teesta and Relli valleys toward Kanchenjunga on clear
                    days.
                  </p>

                  <h3>Deolo Hill</h3>
                  <p>
                    Kalimpong's highest point and a popular picnic and
                    viewpoint spot, with a small lake, gardens, and a
                    ropeway. On clear days, the views stretch across the
                    valley to the snow-capped peaks beyond.
                  </p>

                  <h3>Flower Nurseries</h3>
                  <p>
                    Kalimpong is a genuine flower-export hub — its nurseries
                    supply gladioli, orchids, cacti, and other ornamental
                    plants to markets across India and abroad. Several
                    nurseries around town welcome visitors to walk through
                    greenhouses and buy plants or cut flowers directly,
                    particularly worthwhile in spring bloom.
                  </p>

                  <h3>Dr Graham's Homes</h3>
                  <p>
                    A striking Scottish missionary school campus founded in
                    1900, with well-preserved stone chapel architecture and
                    sweeping grounds. It's still a functioning school today,
                    but its chapel and grounds are open to visitors and offer
                    a quiet, atmospheric stop.
                  </p>

                  <h3>Rishi Bankim Chandra Park & MacFarlane Church</h3>
                  <p>
                    A pleasant terraced park near the town centre, good for
                    an easy walk with valley views, close to the historic
                    MacFarlane Memorial Church — one of the oldest churches
                    in the region, built by Scottish missionaries in the
                    1890s.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kalimpong</h2>
                  <p>
                    Accommodation is concentrated around the main market and
                    Durpin Hill areas, with quieter options further out
                    toward Deolo Hill.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Guesthouses near the main market",
                          "Simple lodges close to the bus stand",
                          "Homestays on the town's outskirts",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Hillside hotels with valley views",
                          "Boutique stays near Durpin Hill",
                          "Cottage-style guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹7,000–₹18,000+/night",
                        picks: [
                          "Heritage bungalow stays",
                          "Premium resorts near Deolo Hill",
                          "Colonial-era converted properties",
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
                        title: "Monasteries & Viewpoints",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive and check in, morning at Durpin Monastery",
                          "Afternoon at Deolo Hill and the ropeway",
                          "Evening stroll at Rishi Bankim Chandra Park",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Flowers & Heritage",
                        color: "bg-forest-600",
                        activities: [
                          "Morning nursery visits and flower shopping",
                          "Dr Graham's Homes and MacFarlane Church",
                          "Onward to Darjeeling or Lava-Lolegaon",
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
                    * Combine easily with{" "}
                    <Link href="/blog/darjeeling-travel-guide">
                      Darjeeling
                    </Link>{" "}
                    (2-2.5 hours away) for a fuller hill-station trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Kalimpong</h2>
                  <ul>
                    <li>
                      <strong>Tibetan and Nepali eateries:</strong> Momos
                      and thukpa are found on nearly every street corner
                      near the main market.
                    </li>
                    <li>
                      <strong>Bakeries and cafés:</strong> A handful of
                      long-running bakeries near the town centre serve fresh
                      bread and local tea.
                    </li>
                    <li>
                      <strong>Local Bengali and Nepali thalis:</strong>{" "}
                      Simple, filling meals widely available at family-run
                      eateries throughout town.
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
                            "₹10,000",
                          ],
                          ["Food/day", "₹450", "₹1,000", "₹2,500"],
                          ["Local sightseeing/day", "₹500", "₹1,000", "₹2,000"],
                          ["Local transport/day", "₹300", "₹600", "₹1,200"],
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
                    * Figures are per person, per day. Excludes transport to
                    and from Bagdogra/NJP.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kalimpong</h2>
                  <ul>
                    <li>
                      <strong>Visit nurseries in the morning:</strong> Most
                      open early and are less crowded before midday tour
                      groups arrive.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs are limited outside
                      the main market area — withdraw what you need before
                      heading to outlying viewpoints.
                    </li>
                    <li>
                      <strong>Combine with Darjeeling in one trip:</strong>{" "}
                      The short jeep ride between the two makes a combined
                      itinerary far more efficient than treating them
                      separately.
                    </li>
                    <li>
                      <strong>Check road conditions in monsoon:</strong>{" "}
                      The Teesta Bazaar route can be affected by landslides
                      between June and September.
                    </li>
                    <li>
                      <strong>Dress respectfully at Durpin Monastery:</strong>{" "}
                      Cover shoulders and knees, and ask before photographing
                      monks or interiors.
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
                          "Visit flower nurseries in spring for full bloom",
                          "Pair Kalimpong with Darjeeling for one trip",
                          "Carry enough cash for outlying viewpoints",
                          "Dress modestly at Durpin Monastery",
                          "Check monsoon road conditions before travelling",
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
                          "Rush Kalimpong into a single half-day stop",
                          "Assume wide ATM access outside the market",
                          "Photograph monastery interiors without asking",
                          "Skip nurseries thinking they're only for buyers",
                          "Travel the Teesta Bazaar route blind in monsoon",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Kalimpong with{" "}
                    <Link href="/blog/darjeeling-travel-guide">
                      Darjeeling
                    </Link>{" "}
                    for the classic hill-station combo, or continue toward
                    Maney Bhanjang for the{" "}
                    <Link href="/blog/sandakphu-travel-guide">
                      Sandakphu trek
                    </Link>{" "}
                    before heading back down to{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      the plains of West Bengal
                    </Link>
                    .
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
                  "Kalimpong",
                  "West Bengal",
                  "Hill Station",
                  "Monasteries",
                  "Flower Nurseries",
                  "Teesta River",
                  "Darjeeling Hills",
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

              <RelatedPostsGrid currentSlug="kalimpong-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kalimpong-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
