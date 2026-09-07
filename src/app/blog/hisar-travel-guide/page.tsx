// src/app/blog/hisar-travel-guide/page.tsx
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
  title: "Hisar Travel Guide: Firoz Shah Palace & Blackbuck Country",
  description:
    "The complete Hisar travel guide. Firoz Shah Palace Complex, Hisar Fort, blackbuck sightings on Haryana's plains, how to reach, where to stay, and a practical one-day itinerary.",
  keywords:
    "Hisar travel guide, Firoz Shah Palace Hisar, Hisar Fort, blackbuck Haryana, Hisar Junction, how to reach Hisar, Hisar tourist places",
  openGraph: {
    title: "Hisar Travel Guide: Firoz Shah Palace & Blackbuck Country",
    description:
      "A 14th-century Tughlaq fort city that's now a gateway to some of North India's best blackbuck sightings — the complete guide to Hisar.",
    url: "https://club.kudozz.in/blog/hisar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Open plains landscape representative of Hisar, Haryana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hisar Travel Guide: Firoz Shah Palace & Blackbuck Country",
    description:
      "Tughlaq-era heritage and blackbuck plains — the complete practical guide to Hisar.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/hisar-travel-guide",
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
          headline: "Hisar Travel Guide: Firoz Shah Palace & Blackbuck Country",
          description: "The complete Hisar travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/hisar-travel-guide" },
          about: {
            "@type": "Place",
            name: "Hisar",
            address: { "@type": "PostalAddress", addressRegion: "Haryana", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Hisar Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "What is Hisar known for?",
    a: "Hisar was founded in 1354 by Sultan Firoz Shah Tughlaq, and its clearest draw today is the Firoz Shah Palace Complex (Gujari Mahal) — the surviving remains of that founding-era fortification. It's also home to a major agricultural university and sits within a region known for blackbuck sightings.",
  },
  {
    q: "Is Hisar a major tourist destination?",
    a: "Not really — it's a practical, workaday regional city with real Tughlaq-era heritage rather than a polished tourist circuit. Most visitors come for a specific reason (the palace complex, business, or as a stop en route) rather than a multi-day holiday.",
  },
  {
    q: "How do I reach Hisar?",
    a: "Hisar Airport has limited flight connectivity. Hisar Junction is a well-connected railway station on multiple lines. Road access is straightforward via NH9 and NH52 from Delhi and other Haryana/Punjab towns.",
  },
  {
    q: "Can I see blackbuck near Hisar?",
    a: "Haryana's plains around this region support notable blackbuck populations, making the area a reasonable base for wildlife-interested travelers — though sightings aren't guaranteed and require checking current local conditions and access.",
  },
  {
    q: "How much time do I need in Hisar?",
    a: "A single day is generally enough to see the Firoz Shah Palace Complex and old fort area properly. Most travelers don't treat Hisar as a multi-day base.",
  },
  {
    q: "Can I combine Hisar with Agroha?",
    a: "Yes — Agroha is only about 20km away and pairs naturally with a Hisar visit if you're interested in ancient heritage sites in the region.",
  },
  {
    q: "What is the budget for a day in Hisar?",
    a: "A modest day trip covering the palace complex, food, and local transport can be done comfortably for ₹800–₹2,000, excluding transport into the city.",
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
  { id: "introduction", title: "Why Hisar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hisar", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const HISAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a day of heritage sites and open plains",
    emoji: "🏰",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description: "For exploring the uneven ground and open courtyards of the Firoz Shah Palace Complex.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The palace grounds involve real walking over rough, historic stonework.",
      },
      {
        name: "Sun Hat & Sunscreen",
        description: "Hisar sits on open plains with little natural shade around the heritage sites.",
        price: "₹599",
        rating: 4.4,
        reviews: "6.0k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sun+hat+sunscreen+travel"),
        tag: "Essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Sun exposure on Haryana's plains is significant, especially outside winter.",
      },
      {
        name: "Binoculars",
        description: "Useful if you're extending the trip toward blackbuck-viewing areas nearby.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "6.1k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("binoculars+wildlife+viewing"),
        tag: "Optional",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Blackbuck typically keep their distance across open grassland.",
      },
      {
        name: "Camera",
        description: "For the Tughlaq-era architecture and open plains landscapes around the city.",
        price: "—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Recommended",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The palace complex's weathered stonework photographs well, especially in soft morning light.",
      },
    ],
  },
];

export default function HisarGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/ziro/hero.jpg"
              alt="Open plains landscape representative of Hisar, Haryana"
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
                { label: "Hisar", href: null },
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
              {["Hisar", "Firoz Shah Palace", "Destination Guide", "Haryana"].map((tag) => (
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
              Hisar Travel Guide: Firoz Shah Palace & Blackbuck Country
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 14th-century Tughlaq fort city that's now a gateway to some of North India's best blackbuck
              sightings — a practical guide for a real, workaday Haryana stop.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Hisar, Haryana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
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
                  <h2>Why Hisar?</h2>
                  <p>
                    <strong>Hisar</strong> was founded in 1354 CE by Sultan Firoz Shah Tughlaq, and its clearest
                    reason for a visit today is the surviving <strong>Firoz Shah Palace Complex</strong> — a
                    fortified palace and gateway structure from that founding era, sometimes called Gujari Mahal
                    locally. It sits alongside remains of the old Hisar Fort, giving the city a real, if
                    under-promoted, pocket of Tughlaq-era heritage.
                  </p>
                  <p>
                    Beyond the palace, Hisar is a workaday regional city — home to a major agricultural
                    university and a practical gateway to blackbuck sightings on the surrounding plains. It's not
                    a polished tourist destination, and this guide won't pretend otherwise: come for the palace
                    complex, treat everything else as a bonus.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Hisar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Haryana, India" },
                        { icon: "🏰", label: "Key Site", value: "Firoz Shah Palace Complex" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        { icon: "🚆", label: "Rail Hub", value: "Hisar Junction" },
                        { icon: "🦌", label: "Nearby", value: "Blackbuck plains" },
                        { icon: "💰", label: "Budget/Day", value: "₹800 – ₹2,500" },
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
                  <h2>Best Time to Visit Hisar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cool, dry, and comfortable for walking the open palace grounds without the plains' harsh summer sun.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Very hot",
                        text: "Haryana's plains get genuinely punishing in summer — sightseeing outdoors is uncomfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Humid with periodic rain — workable but not ideal for a full day outdoors.",
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
                    <strong>Our pick:</strong> November to February — comfortable temperatures for exploring open
                    heritage sites on foot.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Hisar</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Hisar Airport has limited flight connectivity — most travelers
                      won't fly directly here.
                    </li>
                    <li>
                      <strong>By Train:</strong> Hisar Junction is a well-connected railway station with services
                      from Delhi and other major regional hubs.
                    </li>
                    <li>
                      <strong>By Road:</strong> Straightforward via NH9 and NH52 from Delhi, Chandigarh, and
                      neighbouring Punjab towns.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Train is generally the most reliable way in given the airport's
                    limited schedule — check Hisar Junction connections from Delhi first.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to Do in Hisar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Open plains near Hisar, Haryana"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Firoz Shah Palace Complex (Gujari Mahal):</strong> The clear highlight — surviving
                      fortified palace structures from the city's 14th-century founding by Firoz Shah Tughlaq.
                    </li>
                    <li>
                      <strong>Old Hisar Fort:</strong> Remnants of the original fortifications alongside the
                      palace complex.
                    </li>
                    <li>
                      <strong>Chaudhary Charan Singh Haryana Agricultural University campus:</strong> A major
                      institution and a notable landmark within the city.
                    </li>
                    <li>
                      <strong>Blackbuck-viewing plains:</strong> The surrounding countryside supports notable
                      blackbuck populations — check current local access before planning around this specifically.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Hisar</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏨",
                        range: "₹800–₹1,800/night",
                        picks: ["Basic hotels near the railway station", "Simple lodges in the city centre"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏢",
                        range: "₹2,000–₹4,000/night",
                        picks: ["Business-oriented hotels", "Chain hotels near NH9/NH52"],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "Limited options",
                        picks: ["A handful of upscale business hotels — luxury options are limited in this city"],
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
                  <h2>What to Eat in Hisar</h2>
                  <ul>
                    <li>
                      <strong>Haryanvi thalis:</strong> Simple, hearty regional meals — bajra roti, kadhi, and
                      seasonal vegetables — at local dhabas and restaurants.
                    </li>
                    <li>
                      <strong>Lassi and dairy:</strong> Haryana's dairy tradition runs strong; fresh lassi is a
                      genuine local specialty worth seeking out.
                    </li>
                    <li>
                      <strong>Highway dhaba food:</strong> Given Hisar's position on NH9/NH52, roadside dhabas
                      offer reliable North Indian staples.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>1-Day Hisar Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Firoz Shah Palace Complex",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive and head straight to the palace complex",
                          "Explore the fortified structures and old fort remains",
                          "Allow 2–3 hours for a proper visit",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "City & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Lunch at a local restaurant or dhaba",
                          "Optional: extend toward blackbuck-viewing plains if time allows",
                          "Depart or continue on toward Agroha (~20km)",
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹1,000", "₹3,000"],
                          ["Food/day", "₹400", "₹900"],
                          ["Local transport", "₹300", "₹700"],
                          ["Daily total", "₹1,700", "₹4,600"],
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
                    * Excludes transport to the region. Many travelers do Hisar as a single-day trip without an
                    overnight stay.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Hisar</h2>
                  <ul>
                    <li>
                      <strong>Focus on the palace complex:</strong> It's genuinely the highlight — allow proper
                      time rather than rushing through.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> This is a practical regional stop, not a
                      polished tourist destination.
                    </li>
                    <li>
                      <strong>Combine with Agroha:</strong> The short 20km distance makes this an easy, natural
                      pairing for heritage-focused travelers.
                    </li>
                    <li>
                      <strong>Avoid peak summer:</strong> The open plains heat up significantly April through
                      June.
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
                          "Allow 2-3 hours for the Firoz Shah Palace Complex",
                          "Combine with a same-trip visit to Agroha",
                          "Visit Oct–Mar for comfortable weather",
                          "Try local Haryanvi thalis and fresh lassi",
                          "Set realistic, practical-trip expectations",
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
                          "Expect a polished, tourist-first city",
                          "Visit in peak summer without shade/water planning",
                          "Skip the palace complex to rush elsewhere",
                          "Plan a blackbuck sighting without checking current access",
                          "Expect wide luxury accommodation options",
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
                {["Hisar", "Firoz Shah Palace", "Haryana", "India"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={HISAR_GEAR} destination="Hisar" />

              <RelatedPostsGrid currentSlug="hisar-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="hisar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
