// src/app/blog/lajpat-nagar-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Lajpat Nagar Travel Guide: Central Market & More",
  description:
    "Complete Lajpat Nagar travel guide — Central Market's ethnic-wear and bridal shopping, the Tibetan Market next door, bargaining tips, food, and how to plan a half-day visit in South Delhi.",
  keywords:
    "Lajpat Nagar travel guide, Lajpat Nagar Central Market, Lajpat Nagar Tibetan Market, Lajpat Nagar shopping, Lajpat Nagar metro, Lala Lajpat Rai, South Delhi markets, Delhi bridal shopping, Delhi ethnic wear market, Lajpat Nagar bargaining tips",
  openGraph: {
    title: "Lajpat Nagar Travel Guide: Central Market & More",
    description:
      "One of Delhi's most beloved shopping neighbourhoods — Central Market's ethnic wear and bargains, the Tibetan Market, food, and a practical half-day plan.",
    url: "https://club.kudozz.in/blog/lajpat-nagar-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Warm sandstone architecture at golden hour, used here to represent the spirit of old South Delhi neighbourhoods like Lajpat Nagar",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lajpat Nagar Travel Guide: Central Market & More",
    description:
      "Central Market's ethnic wear and bargains, the Tibetan Market, food, and a practical half-day shopping plan for Lajpat Nagar.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/lajpat-nagar-delhi-travel-guide",
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
          headline: "Lajpat Nagar Travel Guide: Central Market & More",
          description:
            "Complete Lajpat Nagar travel guide — Central Market's ethnic-wear and bridal shopping, the Tibetan Market next door, bargaining tips, food, and how to plan a half-day visit in South Delhi.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/lajpat-nagar-delhi-travel-guide",
          },
          keywords:
            "Lajpat Nagar travel guide, Lajpat Nagar Central Market, Lajpat Nagar Tibetan Market, Lajpat Nagar shopping, South Delhi markets",
          about: {
            "@type": "Place",
            name: "Lajpat Nagar",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lajpat Nagar",
              addressRegion: "Delhi",
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
                name: "Delhi",
                item: "https://club.kudozz.in/blog/delhi-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Lajpat Nagar",
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
    q: "What is Lajpat Nagar famous for?",
    a: "Lajpat Nagar is famous above all for its Central Market — a pedestrianised shopping street in South Delhi known for ethnic wear, bridal and wedding shopping, footwear, and home textiles at prices well below retail-mall rates. Just behind it sits the smaller Tibetan Market, known for imported clothing, jewellery, and winter wear. Together they make Lajpat Nagar one of Delhi's most popular everyday shopping neighbourhoods.",
  },
  {
    q: "Is Lajpat Nagar good for shopping?",
    a: "Yes, particularly for ethnic wear, bridal outfits, dupattas, footwear, and budget fashion — it's one of the go-to markets for Delhi brides and their families sourcing wedding shopping across multiple budgets. It's less suited to branded or high-end shopping; for that, markets like Khan Market or South Extension are a better fit.",
  },
  {
    q: "How do I bargain at Lajpat Nagar Central Market?",
    a: "Start by offering roughly 40–50% of the quoted price and negotiate up from there — quoted prices are almost always inflated for first-time or clearly non-local shoppers. Stay polite, be willing to walk away (prices often drop the moment you do), and compare a couple of stalls selling the same item before committing. Bargaining is an accepted, expected part of shopping here, not a confrontation.",
  },
  {
    q: "What is the difference between Lajpat Nagar Central Market and Tibetan Market?",
    a: "Central Market is the larger, pedestrianised main market — mostly Indian ethnic wear, bridal shopping, footwear, and home textiles. The Tibetan Market is a smaller, adjoining lane running along Central Market's edge, historically set up by the local Tibetan refugee community, and known instead for imported clothing, winter jackets, accessories, and costume jewellery. They're a two-minute walk apart and most visitors cover both in one trip.",
  },
  {
    q: "How do I reach Lajpat Nagar by metro?",
    a: "Lajpat Nagar Metro Station is an interchange between the Violet Line and the Pink Line, making it reachable in a single ride from most parts of Delhi. It's a short 5–10 minute walk from the station to Central Market — well signed, though the final stretch gets crowded on weekend evenings.",
  },
  {
    q: "What is the best time to visit Lajpat Nagar Central Market?",
    a: "Weekday mornings to early afternoon are the calmest window for actually browsing and bargaining without being jostled. Evenings, especially Friday through Sunday, get extremely crowded — atmospheric if you enjoy the buzz, but harder for unhurried shopping or price comparisons.",
  },
  {
    q: "Is Lajpat Nagar safe, especially for solo travellers or women?",
    a: "Lajpat Nagar is a busy, well-populated commercial area and generally considered safe by day and early evening, with a constant crowd and visible shop presence. As with any dense Indian market, keep bags zipped and in front of you, stay alert to pickpockets in the thickest crowds, and treat late-night visits with the same ordinary caution you'd use in any big-city market after dark.",
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
  { id: "introduction", title: "Lajpat Nagar: A South Delhi Institution", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lajpat Nagar", level: 2 },
  { id: "central-market", title: "Central Market", level: 2 },
  { id: "tibetan-market", title: "The Tibetan Market", level: 2 },
  { id: "history", title: "A Brief History", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "half-day-plan", title: "A Half-Day Shopping Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips & Bargaining Etiquette", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LajpatNagarGuidePage() {
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
              alt="Warm sandstone architecture at golden hour, used here to represent the spirit of old South Delhi neighbourhoods like Lajpat Nagar"
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
                { label: "Delhi", href: "/blog/delhi-travel-guide" },
                { label: "Lajpat Nagar", href: null },
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
                "Lajpat Nagar",
                "Delhi",
                "Central Market",
                "Tibetan Market",
                "Shopping",
                "South Delhi",
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
              Lajpat Nagar Travel Guide: Central Market, Tibetan Market & More
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Ethnic wear, bridal shopping, and unbeatable bargains — a
              practical guide to Lajpat Nagar's Central Market and the
              Tibetan Market next door, one of South Delhi's most-loved
              neighbourhoods.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Lajpat Nagar, South Delhi",
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
                  <h2>Lajpat Nagar: A South Delhi Institution</h2>
                  <p>
                    <strong>Lajpat Nagar</strong> is a South Delhi
                    neighbourhood that was established in the late 1940s as
                    a refugee resettlement colony in the aftermath of
                    Partition — one of several such colonies built across
                    the capital to house families arriving from what became
                    Pakistan. Decades on, it has grown into one of Delhi's
                    most beloved and heavily trafficked shopping
                    neighbourhoods, best known for its bustling{" "}
                    <strong>Central Market</strong>.
                  </p>
                  <p>
                    The colony takes its name from{" "}
                    <strong>Lala Lajpat Rai</strong>, the freedom fighter
                    and independence-movement leader popularly remembered as
                    "Punjab Kesari" (the Lion of Punjab) — a name shared by
                    several public institutions across North India. That
                    history sits quietly in the background today; most
                    visitors know Lajpat Nagar simply as the place to find
                    a wedding lehenga, a set of dupattas, or a good pair of
                    juttis at a fraction of mall prices, all without ever
                    stepping into an air-conditioned showroom.
                  </p>
                  <p>
                    This guide covers Central Market and the neighbouring
                    Tibetan Market in detail, along with the food scene,
                    bargaining etiquette, and a practical half-day plan. For
                    the wider capital, see our full{" "}
                    <Link href="/blog/delhi-travel-guide">
                      Delhi travel guide
                    </Link>{" "}
                    — and if South Delhi's market circuit interests you,
                    Lajpat Nagar pairs naturally with{" "}
                    <Link href="/blog/sarojini-nagar-delhi-travel-guide">
                      Sarojini Nagar
                    </Link>{" "}
                    and the wider{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi
                    </Link>{" "}
                    neighbourhood circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛍️</span> Lajpat Nagar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Delhi",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Lajpat Nagar (Violet & Pink Lines)",
                        },
                        {
                          icon: "🛒",
                          label: "Known For",
                          value: "Ethnic Wear, Bridal Shopping, Bargains",
                        },
                        {
                          icon: "🕒",
                          label: "Market Hours",
                          value: "~11 AM – 9 PM (most shops)",
                        },
                        {
                          icon: "🌆",
                          label: "Busiest Time",
                          value: "Weekend evenings",
                        },
                        {
                          icon: "💰",
                          label: "Budget",
                          value: "₹500 – ₹5,000+ per visit",
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
                  <h2>Best Time to Visit Lajpat Nagar</h2>
                  <p>
                    Lajpat Nagar's Central Market is a genuinely year-round
                    destination — there's no real off-season — but when you
                    go changes the experience considerably, mostly because
                    of crowd density rather than weather.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Weekday Mornings",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best window — our pick",
                        text: "Shops open around 11 AM and stay comfortably walkable until early afternoon. This is the easiest time to browse, compare prices across stalls, and bargain without being jostled.",
                      },
                      {
                        season: "Weekend Evenings",
                        emoji: "🌆",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak crowd — avoid if you dislike density",
                        text: "Friday through Sunday evenings are when Central Market is at its most packed — lively and atmospheric, but slow-going if you actually want to shop rather than just soak in the energy.",
                      },
                      {
                        season: "Wedding Season (Oct – Feb)",
                        emoji: "💍",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Busiest overall, best selection",
                        text: "North India's main wedding season brings the widest stock of bridal and festive wear, but also the heaviest footfall and the least room to negotiate patiently.",
                      },
                      {
                        season: "Summer Afternoons (Apr – Jun)",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot and best avoided midday",
                        text: "Central Market is largely open-air and pedestrianised with limited shade — Delhi's summer heat makes midday browsing genuinely uncomfortable.",
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
                    <strong>Our pick:</strong> a weekday between 11 AM and
                    4 PM. You'll get the same stalls, the same prices, and
                    far more room to actually bargain than during the
                    weekend evening rush.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Lajpat Nagar</h2>
                  <p>
                    Lajpat Nagar is one of the easiest South Delhi markets
                    to reach, largely thanks to its metro interchange.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro:</strong> Lajpat Nagar Metro Station
                      is an interchange between the{" "}
                      <strong>Violet Line</strong> and the{" "}
                      <strong>Pink Line</strong>, making it directly
                      reachable in one ride from most parts of the city. It's
                      by far the easiest and most reliable way in, especially
                      during peak traffic hours.
                    </li>
                    <li>
                      <strong>By Auto-rickshaw or App Cab:</strong> Widely
                      available, though the immediate market lanes get
                      congested on weekend evenings — expect drop-off points
                      a short walk from the market entrance during peak
                      hours.
                    </li>
                    <li>
                      <strong>By Bus:</strong> Several DTC bus routes serve
                      Lajpat Nagar, useful for budget travellers already
                      staying in South Delhi.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> From Lajpat Nagar Metro
                    Station, it's a 5–10 minute walk to Central Market —
                    well signed, but the final stretch gets crowded on
                    weekend evenings, so budget a little extra time.
                  </div>
                </section>

                {/* ── Central Market ────────────────────────────────────── */}
                <section id="central-market">
                  <h2>Central Market: Delhi's Ethnic-Wear Hub</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Warm sandstone streetscape, used here to represent the dense, colourful market lanes typical of South Delhi shopping areas like Lajpat Nagar's Central Market"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Central Market</strong> is the beating heart of
                    Lajpat Nagar — a fully pedestrianised main market street
                    lined on both sides with hundreds of shops, stalls, and
                    showrooms. It's genuinely one of Delhi's most famous
                    shopping destinations, drawing everyone from local
                    families doing everyday shopping to brides-to-be sourcing
                    an entire wedding trousseau across multiple budgets.
                  </p>
                  <ul>
                    <li>
                      <strong>Ethnic wear:</strong> Salwar suits, sarees,
                      kurtas, and lehengas across a wide range of prices —
                      from everyday wear to elaborate bridal pieces.
                    </li>
                    <li>
                      <strong>Bridal and wedding shopping:</strong> A
                      genuine destination for trousseau shopping — bridal
                      lehengas, dupattas, jewellery sets, and wedding
                      accessories, often significantly cheaper than boutique
                      or mall equivalents.
                    </li>
                    <li>
                      <strong>Footwear:</strong> Juttis, sandals, and
                      everyday shoes across dozens of stalls, with prices
                      that drop quickly once you're willing to negotiate.
                    </li>
                    <li>
                      <strong>Home textiles and accessories:</strong>{" "}
                      Bedsheets, cushion covers, curtains, bags, and
                      costume jewellery fill out the rest of the market.
                    </li>
                    <li>
                      <strong>Bargaining culture:</strong> Almost nothing in
                      Central Market has a genuinely fixed price — haggling
                      is the norm, expected by shopkeepers and shoppers
                      alike, and part of what makes the market fun rather
                      than transactional.
                    </li>
                  </ul>
                  <p>
                    What sets Central Market apart from Delhi's mall culture
                    is sheer variety packed into a walkable footprint — you
                    can compare five stalls selling near-identical dupattas
                    within a two-minute walk, something no single store can
                    offer.
                  </p>
                </section>

                {/* ── Tibetan Market ────────────────────────────────────── */}
                <section id="tibetan-market">
                  <h2>The Tibetan Market</h2>
                  <p>
                    Running along one edge of Central Market is the smaller,
                    more compact <strong>Tibetan Market</strong> — set up
                    over the decades by members of Delhi's Tibetan refugee
                    community, and distinct enough in character to be worth
                    treating as its own stop rather than an extension of
                    Central Market.
                  </p>
                  <ul>
                    <li>
                      <strong>Imported goods:</strong> Clothing, accessories,
                      and small electronics with a different sourcing mix
                      than the largely domestic stock of Central Market.
                    </li>
                    <li>
                      <strong>Jewellery:</strong> Costume jewellery,
                      oxidised silver pieces, and statement accessories at
                      prices well below jewellery-store rates.
                    </li>
                    <li>
                      <strong>Winter wear:</strong> Jackets, sweaters,
                      shawls, and woollens — a particularly popular reason
                      to visit in the cooler months.
                    </li>
                  </ul>
                  <p>
                    The Tibetan Market is a short, easy walk from Central
                    Market — most visitors cover both in the same trip,
                    treating Central Market as the main event and the
                    Tibetan Market as a worthwhile detour for winter wear
                    or jewellery on the way out.
                  </p>
                </section>

                {/* ── History ───────────────────────────────────────────── */}
                <section id="history">
                  <h2>A Brief History</h2>
                  <p>
                    Lajpat Nagar's story begins in the years immediately
                    following India's Partition in 1947, when the colony
                    was developed as a resettlement area for refugee
                    families arriving in Delhi from territories that became
                    Pakistan. Like several other South and East Delhi
                    colonies built in the same period, it grew out of
                    urgent, practical necessity — housing a large, displaced
                    population as the newly independent capital absorbed a
                    sudden and enormous influx of arrivals.
                  </p>
                  <p>
                    The neighbourhood carries the name of{" "}
                    <strong>Lala Lajpat Rai</strong>, a prominent leader of
                    India's independence movement in the early twentieth
                    century, honoured in the naming of the colony and of
                    similar institutions across the region. Over the
                    following decades, the settlers who built new lives here
                    also built the market that made the area famous —
                    Central Market grew organically from small trading
                    stalls into the dense, thriving commercial strip it is
                    today, a transformation that mirrors the resilience and
                    enterprise of the community that founded it.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Lajpat Nagar</h2>
                  <p>
                    A few hours of shopping and bargaining works up a real
                    appetite, and Lajpat Nagar's food scene — a mix of
                    long-running local eateries and street stalls — is more
                    than up to the task.
                  </p>
                  <ul>
                    <li>
                      <strong>Street chaat stalls:</strong> Golgappe, aloo
                      tikki, and other classic Delhi chaat are sold at
                      several stalls scattered through and around Central
                      Market — a quick, cheap refuel between shops.
                    </li>
                    <li>
                      <strong>Local dhabas and eateries:</strong> A number
                      of well-known, long-standing local restaurants around
                      Lajpat Nagar serve North Indian staples — reliable,
                      affordable comfort food after a long shopping stretch.
                    </li>
                    <li>
                      <strong>Momos and Tibetan snacks:</strong> Given the
                      neighbourhood's Tibetan Market, momos and other quick
                      Tibetan snacks are easy to find nearby — a natural
                      pairing with a Tibetan Market stop.
                    </li>
                    <li>
                      <strong>Juice and lassi stalls:</strong> Fresh juice
                      and lassi vendors dot the market lanes, especially
                      useful for cooling off during a summer visit.
                    </li>
                  </ul>
                </section>

                {/* ── Half-Day Plan ─────────────────────────────────────── */}
                <section id="half-day-plan">
                  <h2>A Suggested Half-Day Shopping Plan</h2>
                  <p>
                    Central Market and the Tibetan Market together are
                    comfortably covered in a half-day — here's a realistic
                    plan for a relaxed but thorough visit.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "11:00 AM",
                        title: "Arrive & Orient",
                        color: "bg-amber-700",
                        activities: [
                          "Take the metro to Lajpat Nagar station (Violet/Pink Line)",
                          "Walk 5–10 minutes to Central Market",
                          "Do one loop of the main lane before buying anything",
                        ],
                      },
                      {
                        day: "11:30 AM – 1:30 PM",
                        title: "Central Market Shopping",
                        color: "bg-forest-600",
                        activities: [
                          "Browse ethnic wear, footwear, and accessories",
                          "Compare 2–3 stalls before settling on a price",
                          "Bargain confidently — see the tips section below",
                        ],
                      },
                      {
                        day: "1:30 PM",
                        title: "Lunch Break",
                        color: "bg-sky-600",
                        activities: [
                          "Street chaat or a local dhaba near the market",
                          "Rest and rehydrate before the second half",
                        ],
                      },
                      {
                        day: "2:15 PM – 3:30 PM",
                        title: "Tibetan Market",
                        color: "bg-purple-600",
                        activities: [
                          "Short walk over from Central Market",
                          "Browse jewellery, winter wear, and imported goods",
                          "Grab momos before heading out",
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
                    * If you're combining markets, the wider{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi
                    </Link>{" "}
                    circuit and the historic lanes of{" "}
                    <Link href="/blog/nizamuddin-delhi-travel-guide">
                      Nizamuddin
                    </Link>{" "}
                    are both a short ride away, and pair well with a Lajpat
                    Nagar morning.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Lajpat Nagar is genuinely budget-friendly by design —
                    the range below reflects how much bargaining outcomes
                    (and how many stalls you visit) can shift your total
                    spend.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Splurge"].map(
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
                          ["Salwar suit / kurta set", "₹400", "₹1,200", "₹3,000+"],
                          ["Dupatta", "₹150", "₹350", "₹800"],
                          ["Footwear (juttis/sandals)", "₹250", "₹600", "₹1,200"],
                          [
                            "Bridal lehenga",
                            "₹3,000",
                            "₹8,000",
                            "₹20,000+",
                          ],
                          [
                            "Costume jewellery (Tibetan Market)",
                            "₹100",
                            "₹400",
                            "₹1,000",
                          ],
                          ["Lunch for two", "₹300", "₹700", "₹1,200"],
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
                    * Prices are indicative and vary heavily with
                    bargaining, season (wedding-season prices run higher),
                    and the specific stall — treat these as a starting
                    reference, not a fixed rate card.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips & Bargaining Etiquette</h2>
                  <ul>
                    <li>
                      <strong>Start low, meet in the middle:</strong> Open
                      with roughly 40–50% of the quoted price — most quotes
                      are inflated well above the shopkeeper's actual
                      minimum, particularly for visitors who don't look
                      local.
                    </li>
                    <li>
                      <strong>Be willing to walk away:</strong> This is the
                      single most effective bargaining tool in the market —
                      shopkeepers regularly call out a better price the
                      moment you turn to leave.
                    </li>
                    <li>
                      <strong>Compare before you commit:</strong> Central
                      Market has dozens of stalls selling near-identical
                      items — a quick round of two or three comparisons
                      gives you real leverage.
                    </li>
                    <li>
                      <strong>Carry cash in small denominations:</strong>{" "}
                      Many stalls prefer cash, and having smaller notes
                      speeds up transactions and avoids awkward
                      change disputes.
                    </li>
                    <li>
                      <strong>Watch your belongings in dense crowds:</strong>{" "}
                      Weekend evenings get genuinely packed — keep bags
                      zipped and in front of you, and stay alert to
                      pickpockets in the busiest stretches.
                    </li>
                    <li>
                      <strong>Check stitching and fabric before buying:</strong>{" "}
                      Quality varies stall to stall — a quick inspection of
                      seams and fabric before paying avoids disappointment
                      later.
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
                          "Visit on a weekday morning for calmer browsing",
                          "Bargain politely — it's expected, not rude",
                          "Compare a few stalls before settling on a price",
                          "Carry cash in smaller denominations",
                          "Check stitching and fabric quality before paying",
                          "Cover both Central Market and Tibetan Market in one trip",
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
                          "Accept the first quoted price without negotiating",
                          "Visit expecting fixed, mall-style pricing",
                          "Carry loose valuables in an open bag or pocket",
                          "Go on a weekend evening if you dislike dense crowds",
                          "Expect branded or high-end labels here",
                          "Rush bridal shopping — compare shops for the big items",
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
                    <strong>🗺️ Extend the trip:</strong> Lajpat Nagar pairs
                    naturally with a market crawl through{" "}
                    <Link href="/blog/sarojini-nagar-delhi-travel-guide">
                      Sarojini Nagar
                    </Link>{" "}
                    for budget fashion, or a quieter, historic detour to{" "}
                    <Link href="/blog/nizamuddin-delhi-travel-guide">
                      Nizamuddin
                    </Link>{" "}
                    — both easy additions to a{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi
                    </Link>{" "}
                    day out.
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
                  "Lajpat Nagar",
                  "Delhi",
                  "Central Market",
                  "Tibetan Market",
                  "South Delhi",
                  "Shopping",
                  "Bridal Shopping",
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

              <RelatedPostsGrid currentSlug="lajpat-nagar-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="lajpat-nagar-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
