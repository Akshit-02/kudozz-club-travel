// src/app/blog/junagadh-girnar-travel-guide/page.tsx
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

export const metadata: Metadata = {
  title: "Junagadh & Girnar Travel Guide: 10,000 Steps to Jain & Hindu Shrines",
  description:
    "The complete Junagadh & Girnar travel guide. The Girnar Hill climb, Jain temples, Uparkot Fort, Mahabat Maqbara, where to stay, best time to visit, and a full itinerary.",
  keywords:
    "Junagadh travel guide, Girnar Hill, Girnar trek, Uparkot Fort, Mahabat Maqbara, best time to visit Girnar, how to reach Junagadh, Girnar ropeway, Jain pilgrimage Gujarat",
  openGraph: {
    title: "Junagadh & Girnar Travel Guide: 10,000 Steps to Jain & Hindu Shrines",
    description:
      "A hilltop pilgrimage of nearly 10,000 stone steps leading to Jain temples and a Hindu shrine at the summit, above a 2,000-year-old fort city — the complete guide to Junagadh and Girnar.",
    url: "https://club.kudozz.in/blog/junagadh-girnar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain ridge scenery representative of Girnar Hill, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junagadh & Girnar Travel Guide: 10,000 Steps to Jain & Hindu Shrines",
    description: "The Girnar Hill climb, Jain temples, and Junagadh's ancient Uparkot Fort — the complete guide.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/junagadh-girnar-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Junagadh & Girnar Travel Guide: 10,000 Steps to Jain & Hindu Shrines",
          description: "The complete Junagadh & Girnar travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/junagadh-girnar-travel-guide" },
          about: {
            "@type": "Place",
            name: "Girnar Hill",
            address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Junagadh & Girnar Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many steps is the Girnar climb?",
    a: "It's commonly cited at around 9,999 or roughly 10,000 stone steps to the summit area, making it one of the longest pilgrimage climbs in India. Most people take several hours to reach the top.",
  },
  {
    q: "Is Girnar a Jain or Hindu pilgrimage site?",
    a: "Both. A cluster of Jain temples dedicated to Neminath, the 22nd Tirthankara, sits partway up the hill, while Hindu shrines including a Dattatreya temple are found higher, closer to the summit — Girnar is genuinely significant to both traditions.",
  },
  {
    q: "Is there a ropeway to avoid the full climb?",
    a: "Yes, a ropeway now covers a significant portion of the ascent for visitors who want the views without the full walk — but verify its current operational status and coverage before planning around it, as availability can vary.",
  },
  {
    q: "How do I reach Junagadh?",
    a: "The nearest airports are Rajkot (~100km) or Diu. Junagadh has its own railway station, and road access is straightforward via state highway.",
  },
  {
    q: "What is Uparkot Fort?",
    a: "A roughly 2,000-plus-year-old fort in Junagadh town, with ancient stepwells (Adi Kadi Vav and Navghan Kuwo) and Buddhist caves within its grounds — a genuinely significant and underrated heritage site often overshadowed by the Girnar climb.",
  },
  {
    q: "How many days do I need for Junagadh and Girnar?",
    a: "Two days works well — one for Uparkot Fort and Mahabat Maqbara in Junagadh town, and a separate day for the demanding Girnar climb, since attempting both fort and full climb in one day is genuinely tough.",
  },
  {
    q: "What is the budget for a trip to Junagadh and Girnar?",
    a: "A budget traveler can manage on roughly ₹1,500 a day, a mid-range trip closer to ₹3,800 a day. Add the ropeway ticket as a separate cost if choosing that option over the full climb.",
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
  { id: "introduction", title: "Why Junagadh & Girnar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Junagadh", level: 2 },
  { id: "the-climb", title: "The Girnar Climb & Uparkot Fort", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const GIRNAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for one of India's longest pilgrimage climbs",
    emoji: "⛰️",
    items: [
      {
        name: "Sturdy Trekking Shoes",
        description: "Nearly 10,000 steps demand real trekking footwear, not casual sandals.",
        price: "₹3,299",
        rating: 4.5,
        reviews: "6.8k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+long+distance"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "This is one of India's longest single-day stone-step climbs — proper footwear matters enormously.",
      },
      {
        name: "Headlamp / Torch",
        description: "Many pilgrims begin the climb before dawn, and the descent can run past sunset.",
        price: "₹599",
        rating: 4.4,
        reviews: "4.5k",
        image: "🔦",
        affiliateUrl: amazonSearchUrl("headlamp+torch+trekking"),
        tag: "Pre-dawn essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "A full climb-and-descent day often means both ends happen in low light or darkness.",
      },
      {
        name: "Trekking Poles",
        description: "The long descent after nearly 10,000 steps is genuinely tough on the knees.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.2k",
        image: "🥢",
        affiliateUrl: amazonSearchUrl("trekking+poles+pair"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Many climbers report the descent as harder on the body than the ascent itself." ,
      },
      {
        name: "Energy Snacks & Water",
        description: "Facilities along the climb are limited — carry enough for a full-day ascent and descent.",
        price: "₹299",
        rating: 4.5,
        reviews: "5.1k",
        image: "🍫",
        affiliateUrl: amazonSearchUrl("energy+bars+trekking+snacks"),
        tag: "Trek essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "A climb of this length burns significant energy with sparse resupply points along the way.",
      },
      {
        name: "Layered Clothing",
        description: "Temperature and conditions shift meaningfully between the base, the ridge, and the exposed summit stretch.",
        price: "₹1,499",
        rating: 4.3,
        reviews: "2.9k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("layered+trekking+clothing"),
        tag: "Comfort essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "A pre-dawn start, hot midday climb, and cool evening descent covers a wide temperature range.",
      },
    ],
  },
];

export default function JunagadhGirnarGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="Mountain ridge scenery representative of Girnar Hill, Gujarat"
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
                { label: "Junagadh & Girnar", href: null },
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
              {["Junagadh", "Girnar", "Trekking", "Gujarat"].map((tag) => (
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
              Junagadh & Girnar Travel Guide: 10,000 Steps to Jain & Hindu Shrines
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A hilltop pilgrimage of nearly 10,000 stone steps leading to Jain temples and a Hindu shrine at
              the summit, above a 2,000-year-old fort city.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Junagadh, Gujarat",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>Why Junagadh & Girnar?</h2>
                  <p>
                    <strong>Girnar Hill</strong> is one of Gujarat's most demanding and significant
                    pilgrimage climbs — a staircase of nearly <strong>10,000 stone steps</strong> rising
                    through a cluster of Jain temples toward Hindu shrines near the summit. It's both a
                    serious physical undertaking and one of the holiest sites in Jainism, where Neminath, the
                    22nd Tirthankara, is venerated.
                  </p>
                  <p>
                    Below the hill sits <strong>Junagadh</strong>, a town with its own deep history —
                    <strong> Uparkot Fort</strong> dates back over 2,000 years and holds ancient stepwells
                    and Buddhist caves within its walls, genuinely underrated relative to the fame of the
                    Girnar climb itself.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>⛰️</span> Junagadh & Girnar at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Gujarat, India" },
                        { icon: "🚶", label: "Climb Distance", value: "~9,999 stone steps" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Rajkot (~100km)" },
                        { icon: "🏰", label: "Also See", value: "Uparkot Fort" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500 – ₹3,800" },
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
                  <h2>Best Time to Visit Girnar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cooler temperatures make the long, demanding ascent considerably more manageable.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot — genuinely difficult and risky",
                        text: "Summer heat adds real risk to an already-long climb — this window is best avoided for the full ascent.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — slippery steps",
                        text: "The stone steps get slippery in the rain, adding real risk to an already-long climb.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> October to March, ideally with a pre-dawn start regardless of
                    season to manage both heat and the length of the day.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Junagadh</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Rajkot (~100km) or Diu are the nearest airports.
                    </li>
                    <li>
                      <strong>By Train:</strong> Junagadh has its own railway station.
                    </li>
                    <li>
                      <strong>By Road:</strong> Straightforward access via state highway from Rajkot or other
                      Saurashtra towns.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Base yourself in Junagadh town rather than trying to day-trip
                    from farther away — both the fort and the Girnar climb deserve unhurried time.
                  </div>
                </section>

                <section id="the-climb">
                  <h2>The Girnar Climb & Uparkot Fort</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Ridge and mountain scenery representative of the Girnar climb"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The ascent:</strong> Roughly 9,999 stone steps, typically taking several hours
                      each way — many pilgrims complete the round trip in a single very long day.
                    </li>
                    <li>
                      <strong>Jain temples:</strong> A cluster partway up the hill dedicated to Neminath, the
                      22nd Tirthankara, marking Girnar's major Jain pilgrimage significance.
                    </li>
                    <li>
                      <strong>Hindu shrines near the summit:</strong> Including a Dattatreya shrine higher up
                      the ridge.
                    </li>
                    <li>
                      <strong>Ropeway:</strong> Covers a significant portion of the ascent for those who want
                      the views without the full climb — verify current operational status/coverage.
                    </li>
                    <li>
                      <strong>Uparkot Fort:</strong> A roughly 2,000-plus-year-old fort in Junagadh town, with
                      ancient stepwells (Adi Kadi Vav and Navghan Kuwo) and Buddhist caves.
                    </li>
                    <li>
                      <strong>Mahabat Maqbara:</strong> An ornate, distinctively domed royal mausoleum complex
                      in Junagadh town.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Junagadh</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🛕", range: "₹500–₹1,200/night", picks: ["Basic hotels in Junagadh town", "Pilgrim-oriented guesthouses"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,500–₹3,500/night", picks: ["Better-appointed hotels near the base"] },
                      { tier: "Luxury", icon: "✨", range: "Limited options", picks: ["A handful of better hotels — luxury options here are genuinely limited"] },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Junagadh</h2>
                  <ul>
                    <li><strong>Junagadhi thali:</strong> Local Saurashtra-style vegetarian thalis widely available in town.</li>
                    <li><strong>Pilgrim-town eateries:</strong> Simple vegetarian food near the Girnar base, reflecting the site's pilgrimage character.</li>
                    <li><strong>Local street snacks:</strong> Standard Gujarati snack fare available around the town centre.</li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Junagadh & Girnar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Uparkot Fort & Junagadh Town",
                        color: "bg-amber-700",
                        activities: ["Arrive, check in", "Morning/afternoon: Uparkot Fort, stepwells, and caves", "Evening: Mahabat Maqbara"],
                      },
                      {
                        day: "Day 2",
                        title: "The Girnar Climb",
                        color: "bg-forest-600",
                        activities: ["Very early start (pre-dawn)", "Ascend past the Jain temple cluster", "Continue to the Hindu shrines near the summit", "Descend, or take the ropeway down if available"],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>
                            {d.day}
                          </div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹700", "₹2,500"],
                          ["Food/day", "₹350", "₹800"],
                          ["Ropeway (optional, one-way/round trip)", "Verify locally", "Verify locally"],
                          ["Daily total (excl. ropeway)", "₹1,050", "₹3,300"],
                          ["2-Day trip total (excl. ropeway)", "₹2,100", "₹6,600"],
                        ].map(([exp, b, m], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes transport to the region. Ropeway rates and current availability should be
                    verified locally.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Junagadh & Girnar</h2>
                  <ul>
                    <li><strong>Prepare physically:</strong> This is a demanding full-day climb — don't underestimate the distance and step count.</li>
                    <li><strong>Start very early:</strong> A pre-dawn start manages both heat and daylight.</li>
                    <li><strong>Verify ropeway status:</strong> Availability and coverage can vary — check current status before planning around it.</li>
                    <li><strong>Give Uparkot Fort its own time:</strong> Don't rush both the fort and the climb into one day.</li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Start the Girnar climb very early", "Carry sufficient water and energy snacks", "Verify current ropeway status before relying on it", "Give Uparkot Fort a dedicated separate visit", "Respect the site's active Jain and Hindu pilgrimage status"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {["Underestimate the length and difficulty of the climb", "Attempt the full ascent in peak summer heat", "Assume the ropeway is definitely running without checking", "Rush both Uparkot Fort and the Girnar climb into a single day", "Skip proper trekking footwear for nearly 10,000 steps"].map((item) => (
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
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Junagadh", "Girnar", "Gujarat", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={GIRNAR_GEAR} destination="Junagadh & Girnar" />
              <RelatedPostsGrid currentSlug="junagadh-girnar-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="junagadh-girnar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
