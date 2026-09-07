// src/app/blog/agroha-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, { GearSection } from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

export const metadata: Metadata = {
  title: "Agroha Travel Guide: Ancient Mound & Agroha Dham",
  description:
    "The complete Agroha travel guide. The Agroha archaeological mound, Agroha Dham (Maharaja Agrasen Mandir), the Agarwal community's ancestral heritage, how to reach, and a practical half-day itinerary.",
  keywords:
    "Agroha travel guide, Agroha Dham, Agroha Tila, Maharaja Agrasen Mandir, Agarwal community heritage, Agroha archaeological museum, how to reach Agroha, Hisar Agroha",
  openGraph: {
    title: "Agroha Travel Guide: Ancient Mound & Agroha Dham",
    description:
      "An archaeological mound linked to the legendary origin of the Agarwal community, with excavated coins and pottery dating back over two millennia — the complete guide to Agroha.",
    url: "https://club.kudozz.in/blog/agroha-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient ruins representative of the archaeological mound at Agroha, Haryana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agroha Travel Guide: Ancient Mound & Agroha Dham",
    description:
      "An ancient archaeological mound and a modern pilgrimage complex tied to the Agarwal community's heritage — the complete guide to Agroha.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/agroha-travel-guide",
  },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Agroha Travel Guide: Ancient Mound & Agroha Dham",
          description: "The complete Agroha travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/agroha-travel-guide" },
          about: {
            "@type": "Place",
            name: "Agroha",
            address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Agroha Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "What is Agroha known for?",
    a: "Two things: an archaeological mound (Agroha Tila) where excavations have uncovered coins and pottery spanning a long historical period, and Agroha Dham (Maharaja Agrasen Mandir) — a modern temple complex built around the town's status as the traditional ancestral homeland of the Agarwal community.",
  },
  {
    q: "Why is Agroha significant to the Agarwal community?",
    a: "Agroha is traditionally regarded by many Agarwals as their community's ancestral origin point, linked to the legendary king Maharaja Agrasen. This gives the site genuine cultural and genealogical significance for that community specifically, beyond its archaeological value.",
  },
  {
    q: "Is the Agroha Archaeological Museum open to the public?",
    a: "The museum does display excavated artifacts from the site, but opening hours and access can vary — verify current status before making a dedicated trip around it.",
  },
  {
    q: "How do I reach Agroha?",
    a: "The nearest airport and rail hub is Hisar, roughly 20km away. Road access from Hisar is straightforward, and most visitors combine the two destinations in a single trip.",
  },
  {
    q: "How much time do I need at Agroha?",
    a: "Half a day is generally enough to see both the archaeological mound and Agroha Dham. It pairs naturally with a Hisar visit for a fuller day trip.",
  },
  {
    q: "Is Agroha worth visiting if I'm not connected to the Agarwal community?",
    a: "Yes, for anyone interested in North Indian archaeology — the mound's excavated artifacts span a long historical period and represent a genuinely significant, if under-visited, site. The temple complex is also open to general visitors.",
  },
  {
    q: "What is the budget for a trip to Agroha?",
    a: "It's a low-cost day-trip destination — expect to spend mainly on transport from Hisar, with minimal costs for the site itself.",
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
  { id: "introduction", title: "Why Agroha?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Agroha", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const AGROHA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the mound site and temple complex",
    emoji: "🏛️",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "For walking the open, uneven ground of the archaeological mound site.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The mound area is an open excavation site, not a paved tourist path.",
      },
      {
        name: "Modest Clothing",
        description: "For visiting Agroha Dham, an active temple and pilgrimage site.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("modest+travel+clothing"),
        tag: "Temple essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Agroha Dham draws genuine devotees connected to the Agarwal community heritage — modest dress is respectful.",
      },
      {
        name: "Sun Hat & Sunscreen",
        description: "Little shade at the open mound site, especially outside winter.",
        price: "₹599",
        rating: 4.4,
        reviews: "6.0k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sun+hat+sunscreen+travel"),
        tag: "Essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Haryana's plains sun is intense across most of the year outside winter.",
      },
      {
        name: "Camera",
        description: "For the excavated site and the temple complex's architecture.",
        price: "—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Recommended",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Both the archaeological mound and temple complex offer distinct, worthwhile photo opportunities.",
      },
    ],
  },
];

export default function AgrohaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/hampi/hero.jpg"
              alt="Ancient ruins representative of the archaeological mound at Agroha, Haryana"
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
                { label: "Agroha", href: null },
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
              {["Agroha", "Agroha Dham", "Heritage", "Haryana"].map((tag) => (
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
              Agroha Travel Guide: Ancient Mound & Agroha Dham
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              An archaeological mound linked to the legendary origin of the Agarwal community, with excavated
              coins and pottery dating back over two millennia.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "7 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Agroha, Haryana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,300 words",
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
                  <h2>Why Agroha?</h2>
                  <p>
                    <strong>Agroha</strong> holds two distinct kinds of significance. Archaeologically, its
                    excavated mound (<strong>Agroha Tila</strong>) has yielded coins, pottery, and other artifacts
                    spanning a long historical period stretching back well over two millennia — a genuinely
                    important if under-visited North Indian heritage site.
                  </p>
                  <p>
                    Culturally, Agroha carries deep meaning for the <strong>Agarwal community</strong>, who
                    traditionally regard the town as their ancestral homeland, linked to the legendary king
                    Maharaja Agrasen. <strong>Agroha Dham</strong> (Maharaja Agrasen Mandir) is a modern temple
                    complex built to commemorate this heritage, drawing devotees connected to that tradition
                    alongside general visitors interested in the site's history.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Agroha at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🏺", label: "Key Site", value: "Agroha Tila (mound)" },
                        { icon: "🛕", label: "Temple", value: "Agroha Dham" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚗", label: "Nearest Hub", value: "Hisar (~20km)" },
                        { icon: "💰", label: "Budget/Day", value: "₹500 – ₹1,500" },
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
                  <h2>Best Time to Visit Agroha</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cool, comfortable weather for walking the open mound site and exploring the temple complex.",
                      },
                      {
                        season: "Apr – Sep",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot, less comfortable",
                        text: "Haryana's plains heat up significantly — outdoor exploration of the mound is far less pleasant.",
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
                    <strong>Our pick:</strong> October to March — cool enough for a comfortable walk around the
                    open excavation site.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Agroha</h2>
                  <ul>
                    <li>
                      <strong>Via Hisar:</strong> Hisar is the nearest airport and rail hub, roughly 20km away —
                      cross-reference our Hisar guide, since most visitors combine the two in a single trip.
                    </li>
                    <li>
                      <strong>By Road:</strong> A short, straightforward drive from Hisar; there's no direct rail
                      or air access to Agroha itself.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Plan Agroha as an add-on to a Hisar visit rather than a
                    standalone trip — the short distance makes combining them the obvious choice.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See in Agroha</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Ancient mound and ruins at Agroha"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Agroha Tila (the archaeological mound):</strong> The excavation site itself, where
                      coins, pottery, and other artifacts spanning a long historical period have been uncovered.
                    </li>
                    <li>
                      <strong>Agroha Dham (Maharaja Agrasen Mandir):</strong> A modern temple and pilgrimage
                      complex commemorating the town's significance to the Agarwal community.
                    </li>
                    <li>
                      <strong>Agroha Archaeological Museum:</strong> Houses excavated artifacts from the site —
                      verify current opening hours before a dedicated visit.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Agroha</h2>
                  <p>
                    There is essentially no dedicated tourist accommodation in Agroha itself. Most visitors base
                    themselves in Hisar, roughly 20km away, where a fuller range of hotels is available.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Recommended Base",
                        icon: "🏨",
                        range: "Stay in Hisar",
                        picks: ["Combine with Hisar's palace complex", "Wider range of hotels available"],
                      },
                      {
                        tier: "Day-Trip Approach",
                        icon: "🚗",
                        range: "N/A — no overnight needed",
                        picks: ["Visit Agroha as a half-day add-on", "Return to Hisar or onward same day"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
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
                  <h2>What to Eat Near Agroha</h2>
                  <p>
                    Food options directly in Agroha are limited. Eat in Hisar before or after your visit, or stop
                    at a local dhaba en route for a straightforward Haryanvi thali or roadside snacks.
                  </p>
                </section>

                <section id="itinerary">
                  <h2>Half-Day Agroha Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Mound & Museum",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Hisar (~20km)",
                          "Explore the Agroha Tila mound site",
                          "Visit the Archaeological Museum if open (verify hours ahead)",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Agroha Dham",
                        color: "bg-forest-600",
                        activities: [
                          "Visit Agroha Dham (Maharaja Agrasen Mandir)",
                          "Return to Hisar for lunch and onward travel",
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
                          {["Expense", "Estimate"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Local transport from Hisar (round trip)", "₹500 – ₹1,000"],
                          ["Museum entry (if open)", "Nominal"],
                          ["Food (roadside/Hisar)", "₹200 – ₹500"],
                          ["Total half-day trip", "₹700 – ₹1,500"],
                        ].map(([exp, cost], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes accommodation, since most visitors stay in Hisar and day-trip to Agroha.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Agroha</h2>
                  <ul>
                    <li>
                      <strong>Verify museum hours ahead:</strong> The Archaeological Museum's opening status can
                      vary — confirm before making it the centrepiece of your visit.
                    </li>
                    <li>
                      <strong>Combine with Hisar:</strong> The short distance makes this a natural pairing rather
                      than a standalone trip.
                    </li>
                    <li>
                      <strong>Dress modestly at Agroha Dham:</strong> This is an active temple complex with real
                      devotional significance.
                    </li>
                    <li>
                      <strong>Bring water:</strong> Facilities at the open mound site are minimal.
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
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Combine with a Hisar visit for a fuller day trip",
                          "Verify museum opening hours before you go",
                          "Dress modestly for Agroha Dham",
                          "Bring water for the open mound site",
                          "Visit Oct–Mar for the most comfortable weather",
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
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Plan a dedicated trip around the museum without confirming hours",
                          "Expect a standalone multi-day destination",
                          "Visit the temple complex in beachwear-style clothing",
                          "Skip carrying water for the open site",
                          "Visit in peak summer without shade planning",
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

              <div className="mt-10 flex flex-wrap gap-2">
                {["Agroha", "Agroha Dham", "Heritage", "Haryana", "India"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={AGROHA_GEAR} destination="Agroha" />

              <RelatedPostsGrid currentSlug="agroha-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="agroha-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
