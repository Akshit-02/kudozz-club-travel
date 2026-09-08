// src/app/blog/belum-caves-travel-guide/page.tsx
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
  title: "Belum Caves Travel Guide: India's Second-Longest Cave System",
  description:
    "The complete Belum Caves travel guide. Underground galleries, ancient meditation chambers, combining with Gandikota, where to stay, best time to visit, and everything you need to plan a visit.",
  keywords:
    "Belum Caves travel guide, India second longest cave, Kurnool caves, best time to visit Belum Caves, how to reach Belum Caves, Gandikota Belum Caves combo",
  openGraph: {
    title: "Belum Caves Travel Guide: India's Second-Longest Cave System",
    description:
      "A sprawling underground cave system with galleries, freshwater passages, and meditation chambers once used by ancient monks — the complete guide to Belum Caves.",
    url: "https://club.kudozz.in/blog/belum-caves-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/saheliyon.jpg",
        width: 1200,
        height: 630,
        alt: "Rugged Rayalaseema terrain representative of Belum Caves, Andhra Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belum Caves Travel Guide: India's Second-Longest Cave System",
    description: "India's second-longest cave system — the complete guide to Belum Caves.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/belum-caves-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Belum Caves Travel Guide: India's Second-Longest Cave System",
          description: "The complete Belum Caves travel guide.",
          image: "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://club.kudozz.in/blog/belum-caves-travel-guide" },
          about: {
            "@type": "Place",
            name: "Belum Caves",
            address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Belum Caves Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "Is Belum really India's second-longest cave?",
    a: "It's widely cited as such, after Meghalaya's Krem Liat Prah cave system. The full extent of Belum's passages goes well beyond the developed tourist walking path.",
  },
  {
    q: "How do I reach Belum Caves?",
    a: "The nearest airports with limited connectivity are Kadapa or Kurnool, and the nearest railway station is Tadipatri. Road access is the standard, most practical route.",
  },
  {
    q: "Is it true monks meditated here?",
    a: "Some chambers are historically believed to have been used by Jain and Buddhist monks for meditation in ancient times — this is a commonly cited historical association rather than an absolutely certain, documented fact.",
  },
  {
    q: "Can I combine Belum Caves with Gandikota?",
    a: "Yes, both sit in the broader Rayalaseema/Kurnool region, though verify current driving distance and time between the two before assuming an easy same-day combination — it can be a longer drive than expected.",
  },
  {
    q: "Are the caves difficult to walk through?",
    a: "A developed, lit walking path covers a substantial portion, though some sections involve tight, low passages. Comfortable, grippy closed-toe shoes make the visit far more comfortable.",
  },
  {
    q: "What is the best time to visit Belum Caves?",
    a: "October to February for the most comfortable overall trip, though the cave interior maintains a fairly stable temperature year-round.",
  },
  {
    q: "How much time should I budget for a visit?",
    a: "A visit to the developed section typically takes 1-2 hours, making this an easy day-trip stop rather than a multi-day destination.",
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
  { id: "introduction", title: "Why Belum Caves?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Belum Caves", level: 2 },
  { id: "top-attractions", title: "Top Things to See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Suggested Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const BELUM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for an extensive underground cave walk",
    emoji: "🕳️",
    items: [
      {
        name: "Grippy Closed-Toe Shoes",
        description: "Some passages are tight and low, and the cave floor can be uneven or damp.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("grippy+closed+toe+shoes+travel"),
        tag: "Cave essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Belum's longer, more extensive passages make sturdy footwear more important than at smaller cave sites.",
      },
      {
        name: "Small Torch",
        description: "Useful backup lighting for sections beyond the main lit pathway.",
        price: "₹299",
        rating: 4.3,
        reviews: "4.6k",
        image: "🔦",
        affiliateUrl: amazonSearchUrl("small+led+torch+travel"),
        tag: "Backup essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "A personal torch is a sensible backup given how extensive the cave system is.",
      },
      {
        name: "Light, Breathable Clothing",
        description: "For the tight, low passages where you may need to duck or crouch through sections.",
        price: "₹799",
        rating: 4.4,
        reviews: "3.5k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("breathable+travel+clothing"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Some of Belum's chambers require crouching or squeezing through narrower gaps than typical show caves.",
      },
      {
        name: "Reusable Water Bottle",
        description: "For the overall day trip, especially if combining with Gandikota or other Rayalaseema stops.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "Trip essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "This is a remote region with limited amenities between stops.",
      },
    ],
  },
];

export default function BelumCavesGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/udaipur/saheliyon.jpg"
              alt="Rugged Rayalaseema terrain representative of Belum Caves, Andhra Pradesh"
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
                { label: "Belum Caves", href: null },
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
              {["Belum Caves", "Kurnool", "Off-beat", "Andhra Pradesh"].map((tag) => (
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
              Belum Caves Travel Guide: India's Second-Longest Cave System
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A sprawling underground cave system with galleries, freshwater passages, and meditation
              chambers once used by ancient monks.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Kurnool, Andhra Pradesh",
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
                  <h2>Why Belum Caves?</h2>
                  <p>
                    <strong>Belum Caves</strong> are widely cited as India's second-longest cave system, after
                    Meghalaya's Krem Liat Prah — a genuinely extensive network of natural caves formed by
                    underground water erosion of limestone over an extended geological period. Some chambers
                    are historically believed to have been used by Jain and Buddhist monks for meditation in
                    ancient times, a commonly cited historical association for the site rather than an
                    absolutely certain fact.
                  </p>
                  <p>
                    A developed, lit walking path covers a substantial portion of the system, complete with
                    freshwater formations and natural passages — though the full extent of Belum's caves goes
                    well beyond what's open to visitors. The caves sit in Kurnool district, in Andhra Pradesh's
                    Rayalaseema region, not far from Gandikota.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕳️</span> Belum Caves at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Andhra Pradesh, India" },
                        { icon: "🕳️", label: "Known For", value: "India's 2nd-longest cave system" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        { icon: "🚆", label: "Nearest Rail", value: "Tadipatri" },
                        { icon: "🏞️", label: "Nearby", value: "Gandikota (verify driving distance)" },
                        { icon: "💰", label: "Budget/Day", value: "Low-cost day trip" },
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
                  <h2>Best Time to Visit Belum Caves</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "The most comfortable window for the overall trip and any driving/combination with Gandikota.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot",
                        text: "Rayalaseema summers get genuinely hot — the cave interior stays cooler, but the overall trip is less comfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Fewer crowds, though regional travel logistics can be less predictable.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
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
                    <strong>Our pick:</strong> October to February — the cave interior is comfortable
                    year-round, so this window is really about making the rest of the Rayalaseema trip
                    pleasant.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Belum Caves</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Kadapa or Kurnool, both with limited connectivity.
                    </li>
                    <li>
                      <strong>By Train:</strong> Tadipatri is the nearest railway station.
                    </li>
                    <li>
                      <strong>By Road:</strong> The standard, most practical route into this part of Kurnool
                      district.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check current driving distance and time to Gandikota before
                    assuming an easy same-day combination — it can be a longer drive than a casual pairing
                    suggests.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Top Things to See at Belum Caves</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/saheliyon.jpg"
                      alt="Rayalaseema landscape near Belum Caves"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The developed cave gallery:</strong> A lit walking path through the system's most
                      accessible chambers, complete with natural rock formations.
                    </li>
                    <li>
                      <strong>Historic meditation chambers:</strong> Sections historically associated with
                      ancient Jain and Buddhist monastic use.
                    </li>
                    <li>
                      <strong>Freshwater cave passages:</strong> Natural underground water formations shaped
                      the extensive system over a long geological period.
                    </li>
                    <li>
                      <strong>Tight, low passages:</strong> A genuinely more adventurous cave-walking
                      experience than more casual show caves elsewhere.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay Near Belum Caves</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      { tier: "Budget", icon: "🏕️", range: "₹700–₹1,500/night", picks: ["Basic guesthouses in Tadipatri", "Simple lodges nearby"] },
                      { tier: "Mid-Range", icon: "🏨", range: "₹1,800–₹3,500/night", picks: ["Mid-range hotels in Kurnool/Kadapa"] },
                      { tier: "Luxury", icon: "✨", range: "Very limited", picks: ["Few true luxury options in this immediate area"] },
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
                  <blockquote>
                    Most visitors treat this as a day trip rather than an overnight stay right at the caves.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat Near Belum Caves</h2>
                  <ul>
                    <li>
                      <strong>Local snack stalls:</strong> Simple refreshments near the cave entrance.
                    </li>
                    <li>
                      <strong>Andhra thalis in Tadipatri/Kurnool:</strong> A wider range of regional food a
                      short drive away.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>Suggested Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day Trip",
                        title: "Belum Caves Visit",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive by road from Kurnool, Kadapa, or Tadipatri",
                          "Walk the developed cave gallery (1-2 hours)",
                          "Continue toward Gandikota if combining, or head back",
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
                          ["Cave entry ticket", "₹80", "₹150"],
                          ["Local transport", "₹400", "₹1,000"],
                          ["Food/snacks", "₹150", "₹400"],
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
                    * Excludes transport to the region. This is a low-cost day-trip destination.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Belum Caves</h2>
                  <ul>
                    <li>
                      <strong>Wear grippy, closed-toe shoes:</strong> Some sections require crouching through
                      tight, low passages.
                    </li>
                    <li>
                      <strong>Verify current Gandikota driving time:</strong> Don't assume an easy same-day
                      combination without checking.
                    </li>
                    <li>
                      <strong>Carry a small torch:</strong> A sensible backup given how extensive the cave
                      system is.
                    </li>
                    <li>
                      <strong>Budget 1-2 hours:</strong> An easy day-trip stop, not a multi-day destination.
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
                          "Wear comfortable, grippy closed-toe shoes",
                          "Carry a small backup torch",
                          "Verify Gandikota driving distance before combining trips",
                          "Take your time through the tighter passages",
                          "Respect the site's historic religious significance",
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
                          "Wear open-toe or slippery footwear",
                          "Assume Gandikota is a short, easy add-on without checking",
                          "Rush through tight passages",
                          "Expect luxury accommodation right at the caves",
                          "Skip carrying water for the overall day trip",
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
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>
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
                {["Belum Caves", "Kurnool", "Off-beat", "Andhra Pradesh", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={BELUM_GEAR} destination="Belum Caves" />

              <RelatedPostsGrid currentSlug="belum-caves-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="belum-caves-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
