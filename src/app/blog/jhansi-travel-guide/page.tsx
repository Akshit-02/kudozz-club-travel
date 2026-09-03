// src/app/blog/jhansi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jhansi Travel Guide: Rani Lakshmibai's Fort",
  description:
    "Complete Jhansi guide — Jhansi Fort and Rani Mahal, the story of Rani Lakshmibai and the 1857 Revolt, the Government Museum, how to reach, and Bundelkhand add-ons like Orchha and Khajuraho.",
  keywords:
    "Jhansi travel guide, Jhansi Fort, Rani Lakshmibai, 1857 Revolt, Rani Mahal Jhansi, Jhansi Government Museum, how to reach Jhansi, Bundelkhand, Orchha from Jhansi, Jhansi Junction",
  openGraph: {
    title: "Jhansi Travel Guide: Rani Lakshmibai's Fort",
    description:
      "Forever tied to Rani Lakshmibai and 1857 — the hilltop Jhansi Fort, Rani Mahal, and the gateway to Bundelkhand's wider heritage circuit including Orchha.",
    url: "https://club.kudozz.in/blog/jhansi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Hilltop ramparts of Jhansi Fort, Uttar Pradesh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhansi Travel Guide: Rani Lakshmibai's Fort",
    description:
      "Jhansi Fort, Rani Mahal, and the story of Rani Lakshmibai's stand in the 1857 Revolt — the complete guide, plus the gateway to Orchha and Khajuraho.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jhansi-travel-guide",
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
          headline: "Jhansi Travel Guide: Rani Lakshmibai's Fort",
          description:
            "Complete Jhansi guide — Jhansi Fort and Rani Mahal, the story of Rani Lakshmibai and the 1857 Revolt, the Government Museum, how to reach, and Bundelkhand add-ons like Orchha and Khajuraho.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
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
            "@id": "https://club.kudozz.in/blog/jhansi-travel-guide",
          },
          keywords:
            "Jhansi, Rani Lakshmibai, Jhansi Fort, 1857 Revolt, Bundelkhand, Uttar Pradesh",
          about: {
            "@type": "Place",
            name: "Jhansi",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttar Pradesh",
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
                name: "Uttar Pradesh",
                item: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Jhansi",
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
    q: "Why is Jhansi historically significant?",
    a: "Jhansi is inseparable from Rani Lakshmibai, one of the central figures of the 1857 Revolt — India's First War of Independence. Her defence of Jhansi Fort against British forces and her dramatic escape from the city remain among the most remembered episodes of that uprising.",
  },
  {
    q: "What can I see inside Jhansi Fort?",
    a: "Jhansi Fort sits atop a hill overlooking the city, with dramatic ramparts, bastions, and Rani Mahal — a palace within the complex now maintained as a museum with artefacts and exhibits related to the fort's history and the 1857 Revolt.",
  },
  {
    q: "How do I reach Jhansi?",
    a: "Jhansi Junction is a major railway hub on the Delhi-Chennai and Delhi-Bhopal lines, making it one of the best-connected towns in the region by rail. By road, it's accessible via NH44 and NH75, both major national highways.",
  },
  {
    q: "Can I visit Orchha from Jhansi?",
    a: "Yes, Orchha is a short drive from Jhansi, roughly 20 km, known for its own striking temple and cenotaph (chhatri) architecture along the Betwa river. It's a very popular and easy add-on to any Jhansi trip.",
  },
  {
    q: "Is Khajuraho reachable from Jhansi?",
    a: "Yes, Khajuraho is further afield from Jhansi (around 175 km) but reachable by road, and Jhansi is commonly used as a rail and road gateway for travellers heading onward to see Khajuraho's temples.",
  },
  {
    q: "What is the best time to visit Jhansi?",
    a: "October to March is ideal. Bundelkhand summers are extreme, with temperatures regularly crossing 45°C between April and June, making outdoor sightseeing at the fort genuinely difficult during peak summer.",
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
  { id: "introduction", title: "The City of Rani Lakshmibai", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jhansi", level: 2 },
  { id: "attractions", title: "Jhansi Fort & the 1857 Revolt", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JhansiGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Hilltop ramparts of Jhansi Fort, Uttar Pradesh"
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
                { label: "Uttar Pradesh", href: "/blog/uttar-pradesh-travel-guide" },
                { label: "Jhansi", href: null },
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
                "Jhansi",
                "Rani Lakshmibai",
                "Jhansi Fort",
                "1857 Revolt",
                "Bundelkhand",
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
              Jhansi Travel Guide: Rani Lakshmibai's Fort
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Forever tied to Rani Lakshmibai and the 1857 Revolt — a
              dramatic hilltop fort, a museum-turned-palace, and the
              natural gateway to Bundelkhand's wider heritage, including
              Orchha and Khajuraho.
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
                  text: "Jhansi, Bundelkhand",
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
                  <h2>The City of Rani Lakshmibai</h2>
                  <p>
                    <strong>Jhansi</strong>, in the Bundelkhand region of{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    , is a name inseparable from one of Indian history's
                    most enduring figures: <strong>Rani Lakshmibai</strong>,
                    whose resistance against British forces during the{" "}
                    <strong>1857 Revolt</strong> — India's First War of
                    Independence — made her one of the uprising's most
                    remembered leaders. Her stand at Jhansi, and the fort
                    that still dominates the city's skyline, remain central
                    to how this chapter of Indian history is remembered
                    today.
                  </p>
                  <p>
                    Beyond its historical weight, Jhansi also functions as
                    the practical gateway to the wider Bundelkhand region —
                    a short drive from Orchha's striking temple and
                    cenotaph architecture, and a common rail and road
                    stopover for travellers continuing on to Khajuraho.
                    Visitors who come for the fort often find themselves
                    extending their trip into this broader heritage circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Jhansi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bundelkhand, Uttar Pradesh",
                        },
                        {
                          icon: "🚆",
                          label: "Rail Hub",
                          value: "Jhansi Junction (Delhi-Chennai line)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Jhansi Fort, Rani Lakshmibai",
                        },
                        {
                          icon: "📜",
                          label: "Significance",
                          value: "1857 Revolt",
                        },
                        {
                          icon: "🛕",
                          label: "Nearby",
                          value: "Orchha (~20 km), Khajuraho further",
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
                  <h2>Best Time to Visit Jhansi</h2>
                  <p>
                    Bundelkhand's climate runs to extremes, making the
                    timing of a Jhansi visit more important than in many
                    other parts of Uttar Pradesh.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather comfortable for exploring Jhansi Fort's ramparts and combining the visit with Orchha or Khajuraho.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵🔥",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid",
                        text: "Bundelkhand summers regularly cross 45°C, making outdoor fort visits genuinely difficult and best avoided if possible.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Rain brings welcome relief from the heat and greens up the surrounding countryside, though travel can occasionally be disrupted.",
                      },
                      {
                        season: "Around Independence Day / Republic Day",
                        emoji: "🇮🇳",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Meaningful timing",
                        text: "Visiting around these national commemorations adds resonance to a visit centred on Rani Lakshmibai's role in India's freedom struggle.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    temperatures for the fort's exposed ramparts and easy
                    combining with Orchha or an onward trip to Khajuraho.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jhansi</h2>
                  <p>
                    Jhansi is one of the best-connected towns in this part
                    of India, sitting at the junction of major rail and
                    highway corridors.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Jhansi Junction is a major
                      hub on both the Delhi-Chennai and Delhi-Bhopal lines,
                      with frequent express and superfast trains connecting
                      it to cities across the country.
                    </li>
                    <li>
                      <strong>By road:</strong> Jhansi sits on NH44 and
                      NH75, two of India's major national highways, giving
                      it strong road connectivity in multiple directions.
                    </li>
                    <li>
                      <strong>Getting around locally:</strong> Auto-rickshaws
                      and taxis are the standard way to move between the
                      fort, museum, and other central sights within the
                      city.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Jhansi's excellent rail
                    connectivity makes it a practical base even if your main
                    interest is Orchha or Khajuraho — many long-distance
                    trains stop here that don't reach those smaller towns
                    directly.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Jhansi Fort & the 1857 Revolt</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="Ramparts and bastions of Jhansi Fort overlooking the city"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Rani Lakshmibai's Stand at Jhansi</h3>
                  <p>
                    In 1857, as rebellion spread across northern and central
                    India against East India Company rule, Rani Lakshmibai
                    took command of Jhansi's defence after the British
                    besieged the fort. Her leadership during the siege, and
                    her subsequent daring escape from the fort on horseback
                    — reportedly with her young son strapped to her back —
                    became one of the defining episodes of the uprising.
                    She continued fighting alongside other rebel leaders
                    until her death in battle near Gwalior in 1858, and she
                    remains one of the most honoured figures in India's
                    struggle for independence, her memory deeply tied to
                    this city.
                  </p>
                  <h3>Jhansi Fort & Rani Mahal</h3>
                  <p>
                    Jhansi Fort sits atop a rocky hill overlooking the city,
                    its imposing ramparts and bastions still conveying a
                    strong sense of the fortress's defensive strength.
                    Within the complex, <strong>Rani Mahal</strong> — the
                    palace associated with Lakshmibai — now functions as a
                    museum, housing artefacts, paintings, and exhibits
                    related to the fort's history and the events of 1857.
                    Walking the ramparts offers sweeping views over the city
                    and a tangible sense of the terrain the Rani once
                    defended.
                  </p>
                  <h3>Government Museum</h3>
                  <p>
                    Jhansi's Government Museum adds further context to the
                    city's history, with archaeological artefacts and
                    exhibits spanning the wider Bundelkhand region alongside
                    material connected to the 1857 Revolt — a useful stop
                    for travellers wanting to go deeper than the fort alone.
                  </p>
                  <h3>Gateway to Orchha & Khajuraho</h3>
                  <p>
                    Jhansi's role as a heritage gateway is one of its
                    biggest draws for travellers. Orchha, roughly 20 km
                    away, is a short and easy add-on, known for its
                    striking Bundela-era temple and cenotaph (chhatri)
                    architecture along the Betwa river. Further afield,
                    Khajuraho's famous temple complex is also commonly
                    reached via Jhansi's rail and road links, making the
                    city a natural base for a wider Bundelkhand itinerary.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Jhansi</h2>
                  <p>
                    Jhansi has a solid range of accommodation given its
                    role as a regional transport hub, from simple budget
                    options to comfortable mid-range hotels.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Simple hotels near Jhansi Junction",
                          "Budget lodges in the city centre",
                          "Basic guesthouses near the fort",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Standard business hotels near the station",
                          "Comfortable hotels in the city centre",
                          "Mid-range stays convenient for Orchha day trips",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,500–₹12,000+/night",
                        picks: [
                          "Best available hotels in Jhansi city",
                          "Heritage-style stays near Orchha (short drive)",
                          "Upscale properties along the highway",
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
                        title: "Jhansi Fort & Museum",
                        color: "bg-red-700",
                        activities: [
                          "Morning at Jhansi Fort and Rani Mahal",
                          "Afternoon visit to the Government Museum",
                          "Evening walk through the old city",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Day Trip to Orchha",
                        color: "bg-amber-700",
                        activities: [
                          "Morning drive to Orchha (~20 km)",
                          "Explore Orchha's temples and cenotaphs",
                          "Return to Jhansi by evening, or continue onward",
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
                    * Travellers with more time often continue on toward
                    Khajuraho, or combine Jhansi with{" "}
                    <Link href="/blog/chitrakoot-travel-guide">
                      Chitrakoot
                    </Link>{" "}
                    for a fuller Bundelkhand circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Jhansi</h2>
                  <ul>
                    <li>
                      <strong>Local restaurants near the fort and station:</strong>{" "}
                      Standard North Indian vegetarian and non-vegetarian
                      fare at reasonable prices.
                    </li>
                    <li>
                      <strong>Bundelkhandi thalis:</strong> Regional
                      vegetarian preparations worth trying at local eateries
                      around the city.
                    </li>
                    <li>
                      <strong>Sweet shops in the old city:</strong>{" "}
                      Traditional Uttar Pradesh sweets, popular with both
                      locals and visitors.
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
                            "₹7,500",
                          ],
                          ["Local transport/day", "₹300", "₹800", "₹2,000"],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          ["Fort & museum entry", "₹25–₹100", "₹25–₹100", "₹25–₹100"],
                          ["Orchha day trip (car)", "₹1,500", "₹2,000", "₹3,000"],
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
                    * Figures are per person, per day, except the Orchha
                    day-trip car figure.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Jhansi</h2>
                  <ul>
                    <li>
                      <strong>Avoid peak summer:</strong> Bundelkhand
                      routinely crosses 45°C between April and June — plan
                      around this window if possible.
                    </li>
                    <li>
                      <strong>Combine with Orchha:</strong> It's a short,
                      easy drive and one of the most rewarding extensions to
                      a Jhansi visit.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes for the fort:</strong>{" "}
                      The ramparts and uneven stone surfaces are easier to
                      navigate in sturdy footwear.
                    </li>
                    <li>
                      <strong>Use Jhansi as a rail base:</strong> Its strong
                      connectivity makes it convenient even if your main
                      interest lies in nearby Orchha or Khajuraho.
                    </li>
                    <li>
                      <strong>Visit the Government Museum:</strong> It adds
                      useful historical context beyond what the fort alone
                      conveys.
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
                          "Visit Jhansi Fort and Rani Mahal together",
                          "Add a day trip to Orchha",
                          "Wear sturdy shoes for the fort ramparts",
                          "Visit the Government Museum for added context",
                          "Use Jhansi's rail hub as a wider base",
                          "Plan around the cooler months",
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
                          "Visit during peak summer heat",
                          "Skip Orchha if you're already in Jhansi",
                          "Rush through the fort without visiting Rani Mahal",
                          "Underestimate the walking involved at the fort",
                          "Forget sun protection on exposed ramparts",
                          "Treat Jhansi as only a railway changeover point",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Jhansi with{" "}
                    <Link href="/blog/chitrakoot-travel-guide">
                      Chitrakoot
                    </Link>{" "}
                    for a fuller Bundelkhand and Ramayana-history circuit
                    across{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    , or continue onward to Orchha and Khajuraho.
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
                  "Jhansi",
                  "Rani Lakshmibai",
                  "Jhansi Fort",
                  "Uttar Pradesh",
                  "1857 Revolt",
                  "Bundelkhand",
                  "Orchha",
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

              <RelatedPostsGrid currentSlug="jhansi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jhansi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
