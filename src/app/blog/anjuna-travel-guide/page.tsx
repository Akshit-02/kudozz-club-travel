// src/app/blog/anjuna-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Anjuna Travel Guide: Flea Market, Cliffs & Trance Party Legacy",
  description:
    "The complete Anjuna travel guide. The Wednesday flea market, rocky cliff coastline, trance-music history, Curlies and beach shacks, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Anjuna travel guide, Anjuna flea market, Anjuna beach Goa, Goa trance music history, Curlies Anjuna, best time to visit Anjuna, how to reach Anjuna, North Goa beaches",
  openGraph: {
    title: "Anjuna Travel Guide: Flea Market, Cliffs & Trance Party Legacy",
    description:
      "The beach that birthed Goa's trance-party scene, still home to a Wednesday flea market that's part bazaar, part institution — the complete guide to Anjuna.",
    url: "https://club.kudozz.in/blog/anjuna-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "Rocky cliff-lined coastline at Anjuna Beach, Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjuna Travel Guide: Flea Market, Cliffs & Trance Party Legacy",
    description:
      "The beach that birthed Goa's trance scene, and its famous Wednesday flea market — the complete guide to Anjuna.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/anjuna-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Anjuna Travel Guide: Flea Market, Cliffs & Trance Party Legacy",
          description: "The complete Anjuna travel guide.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/anjuna-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Anjuna",
            address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Anjuna Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "What is the Anjuna Flea Market and when is it held?",
    a: "It's a long-running market held weekly, traditionally on Wednesdays, selling clothing, jewellery, handicrafts, and a mix of local and international goods — one of Goa's most iconic recurring events. It runs seasonally, roughly November to March; verify current operating dates before planning a trip around it specifically.",
  },
  {
    q: "Is Anjuna good for swimming?",
    a: "Anjuna's coastline is rockier and more cliff-lined than the flatter, sandier beaches further south like Calangute or Baga. Check conditions locally — some stretches are better for sunbathing and photography than swimming.",
  },
  {
    q: "What is Anjuna known for historically?",
    a: "Anjuna was one of the original centres of Goa's hippie-era counterculture in the 1960s-70s, and is widely credited as one of the birthplaces of Goa trance as a global electronic music genre.",
  },
  {
    q: "How many days do I need in Anjuna?",
    a: "One to two days covers the beach, cliffs, and a flea market visit if your dates align. Many travellers combine it with nearby Vagator for a fuller North Goa cliff-coast trip.",
  },
  {
    q: "What is the best time to visit Anjuna?",
    a: "November to February offers the driest, most comfortable weather and the full flea market season. Monsoon (June–September) closes most beach shacks and brings rough seas.",
  },
  {
    q: "How do I reach Anjuna?",
    a: "The nearest airport is Dabolim (Goa International Airport) or Manohar International Airport (Mopa). Road access from anywhere in North Goa is straightforward, roughly 30-45 minutes from the airports.",
  },
  {
    q: "Is Anjuna still a party destination?",
    a: "It retains an active, if more muted than its 1990s peak, live-music and party scene, with long-running shacks like Curlies still drawing a countercultural crowd. It's calmer than Baga's dense club strip but livelier than South Goa's quieter beaches.",
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
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Anjuna?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Anjuna", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const ANJUNA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the cliffs, the market, and the beach",
    emoji: "🏖️",
    items: [
      {
        name: "Grip Sandals",
        description:
          "Anjuna's rockier coastal stretches call for footwear with better grip than flat flip-flops.",
        price: "₹699",
        rating: 4.4,
        reviews: "4.1k",
        image: "🩴",
        affiliateUrl: amazonSearchUrl("grip+sandals+beach+outdoor"),
        tag: "Beach essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Anjuna's cliff-edge and rocky sections are more slippery than the flat sand elsewhere in Goa.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description: "Cliff-top walking and beach time both call for strong sun protection.",
        price: "₹599",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"),
        tag: "Beach essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Reflected sun off rock and sand adds up fast on an Anjuna afternoon.",
      },
      {
        name: "Cross-Body Bag",
        description: "For carrying cash and valuables securely while browsing the flea market crowds.",
        price: "₹899",
        rating: 4.4,
        reviews: "3.2k",
        image: "👜",
        affiliateUrl: amazonSearchUrl("cross+body+travel+bag"),
        tag: "Market essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Flea market crowds are exactly the environment where a secure bag matters most.",
      },
      {
        name: "Waterproof Phone Pouch",
        description: "For swimming and boat trips without worrying about a dropped phone.",
        price: "₹299",
        rating: 4.3,
        reviews: "9.1k",
        image: "📱",
        affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"),
        tag: "Beach essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "A cheap pouch is far better than an expensive repair after a beach mishap.",
      },
    ],
  },
];

export default function AnjunaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/goa/beach.jpg"
              alt="Rocky cliff-lined coastline at Anjuna Beach, Goa"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Anjuna", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Anjuna", "Beaches", "Flea Market", "Goa"].map((tag) => (
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
              Anjuna Travel Guide: Flea Market, Cliffs & Trance Party Legacy
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The beach that birthed Goa's trance-party scene, still home to a Wednesday flea market
              that's part bazaar, part institution.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Anjuna, Goa",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,700 words",
                },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
                  </svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Anjuna?</h2>
                  <p>
                    <strong>Anjuna</strong> holds a unique place in Goa's story. From the 1960s and 70s, it
                    became one of the original gathering points for the hippie trail through India, and
                    the parties that grew out of that scene are widely credited as one of the birthplaces
                    of Goa trance — a genre that went on to shape electronic music worldwide.
                  </p>
                  <p>
                    That legacy is still visible today, if more muted than its 1990s peak: a rocky,
                    cliff-lined coastline distinct from Goa's flatter sandy stretches, a handful of
                    long-running shacks with a countercultural reputation, and the famous Anjuna Flea
                    Market that still draws crowds every week in season.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Anjuna at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Goa, India" },
                        { icon: "🛍️", label: "Known For", value: "Wednesday Flea Market" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        { icon: "✈️", label: "Nearest Airport", value: "Dabolim / Mopa" },
                        { icon: "🎶", label: "Legacy", value: "Goa trance music origins" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400 – ₹4,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {icon} {label}
                          </span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Anjuna</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Dry, warm, and the full flea market season — shacks and stalls are all open.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot, thinning crowds",
                        text: "Increasingly hot and humid as the season winds down, with fewer travellers around.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — mostly shut",
                        text: "Most shacks close, seas turn rough, and the flea market stops entirely.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Reopening",
                        text: "Shacks and stalls gradually reopen as the rains taper off toward the season start.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
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
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> December to February, and specifically a Wednesday if the
                    flea market is on your list — verify current-season operating dates before planning
                    around it.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Anjuna</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Dabolim (Goa International Airport) or Manohar
                      International Airport (Mopa) both serve Goa, with road transfers of roughly
                      45-75 minutes to Anjuna depending on which airport.
                    </li>
                    <li>
                      <strong>By Train:</strong> Thivim railway station is the closest, roughly 20
                      minutes away by road.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected to the rest of North Goa — Vagator,
                      Calangute, and Baga are all a short drive away.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Renting a scooter is the most practical way to cover
                    Anjuna's spread-out coastline and hop between here, Vagator, and the flea market
                    grounds.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Anjuna</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Anjuna's cliff-lined coastline in North Goa"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Anjuna Flea Market:</strong> A long-running weekly (traditionally
                      Wednesday) market for clothing, jewellery, and handicrafts — one of Goa's most
                      iconic recurring events.
                    </li>
                    <li>
                      <strong>Anjuna's cliffs:</strong> A rockier, more dramatic coastline than the
                      flat sandy beaches further south, good for photography and sunset walks.
                    </li>
                    <li>
                      <strong>Curlies and long-running beach shacks:</strong> Anjuna's countercultural
                      shack scene, a direct link to its trance-party history.
                    </li>
                    <li>
                      <strong>Live music nights:</strong> A more muted echo of Anjuna's 1990s trance
                      peak, but still an active scene compared to quieter beaches further south.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Anjuna</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: ["Backpacker hostels", "Simple guesthouses inland", "Basic beach huts"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: ["Boutique guesthouses", "Beach-adjacent cottages", "Design-forward stays"],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹6,000–₹15,000+/night",
                        picks: ["Premium villas", "Cliff-view boutique resorts"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                          {t.tier}
                        </div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {t.range}
                        </div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Anjuna</h2>
                  <ul>
                    <li>
                      <strong>Goan fish curry rice:</strong> The staple meal across Goa's beach
                      shacks — tangy, coconut-based curry with the day's catch.
                    </li>
                    <li>
                      <strong>Prawn balchão:</strong> A spicy, tangy pickled prawn preparation, a
                      distinctive Goan-Portuguese dish worth seeking out.
                    </li>
                    <li>
                      <strong>Feni:</strong> Goa's local cashew or coconut spirit, widely available
                      at beach shacks.
                    </li>
                    <li>
                      <strong>Flea market snacks:</strong> A mix of international and local street
                      food when the market is running.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Anjuna Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Beach & Cliffs",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Afternoon: explore Anjuna's cliffs and coastline",
                          "Evening: dinner at Curlies or a long-running beach shack",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Flea Market & Vagator",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Anjuna Flea Market (if it's a Wednesday and in season)",
                          "Afternoon: short drive to Vagator for Chapora Fort sunset",
                          "Evening: return, relax",
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
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 flex items-start gap-2"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹800", "₹2,500", "₹9,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport per day", "₹300", "₹600", "₹1,500"],
                          ["Daily total", "₹1,500", "₹4,000", "₹12,500"],
                          ["2-Day trip total", "₹3,000", "₹8,000", "₹25,000"],
                        ].map(([exp, b, m, l], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{l}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes flights/trains to Goa.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Anjuna</h2>
                  <ul>
                    <li>
                      <strong>Verify flea market dates:</strong> It runs seasonally, roughly
                      November-March — check current schedule before planning a trip around it.
                    </li>
                    <li>
                      <strong>Check sea conditions before swimming:</strong> Anjuna's rockier
                      coastline is less swim-friendly than sandier beaches — ask locally.
                    </li>
                    <li>
                      <strong>Rent a scooter:</strong> The most practical way to get around Anjuna's
                      spread-out coastline and nearby Vagator.
                    </li>
                    <li>
                      <strong>Keep valuables secure at the market:</strong> Crowded stalls are a
                      classic pickpocket environment anywhere in the world.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Time your visit for a Wednesday if the flea market interests you",
                          "Rent a scooter to explore Anjuna and Vagator together",
                          "Check current sea conditions before swimming",
                          "Try a long-running shack like Curlies for the historic vibe",
                          "Carry cash for the flea market",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
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
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Assume the flea market runs year-round",
                          "Swim past the shallows without checking rocky/current conditions",
                          "Visit expecting Calangute-level beach infrastructure",
                          "Leave valuables unattended on the beach or at market stalls",
                          "Expect open shacks during peak monsoon (Jun-Sep)",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
                        <h4
                          className="font-bold text-stone-900 mb-2 text-base"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {f.q}
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Anjuna", "Beaches", "Flea Market", "Goa", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={ANJUNA_GEAR} destination="Anjuna" />

              <RelatedPostsGrid currentSlug="anjuna-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="anjuna-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
