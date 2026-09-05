// src/app/blog/mawphanlur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mawphanlur Guide: Grasslands & Camping",
  description:
    "Complete Mawphanlur guide — Meghalaya's rolling grasslands and small lakes, camping, how to reach, and a full visit plan for this genuinely offbeat destination.",
  keywords:
    "Mawphanlur, Mawphanlur Meghalaya, Mawphanlur camping, Meghalaya grasslands, how to reach Mawphanlur, offbeat Meghalaya, Mawphanlur lake",
  openGraph: {
    title: "Mawphanlur Guide: Grasslands & Camping",
    description:
      "Rolling grasslands, small lakes, and open sky camping — a genuinely offbeat corner of Meghalaya far from the usual waterfall-and-cave circuit.",
    url: "https://club.kudozz.in/blog/mawphanlur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Open grassland and rolling hill landscape, evoking Mawphanlur's grassland and small-lake scenery",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mawphanlur Guide: Grasslands & Camping",
    description:
      "Rolling grasslands, small lakes, and open sky camping — a genuinely offbeat corner of Meghalaya.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mawphanlur-travel-guide",
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
          headline: "Mawphanlur Guide: Grasslands & Camping",
          description:
            "Complete Mawphanlur guide — Meghalaya's rolling grasslands and small lakes, camping, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/mawphanlur-travel-guide",
          },
          keywords: "Mawphanlur, Meghalaya, grasslands, camping, off-beat",
          about: {
            "@type": "Place",
            name: "Mawphanlur",
            address: { "@type": "PostalAddress", addressRegion: "Meghalaya", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Mawphanlur" },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What makes Mawphanlur different from Meghalaya's more famous spots?",
    a: "Instead of the dense forest, waterfalls, and caves that define most of Meghalaya's tourist circuit, Mawphanlur is characterized by open rolling grasslands and small lakes — a genuinely different landscape, sometimes compared to Scottish highlands scenery.",
  },
  {
    q: "How far is Mawphanlur from Shillong?",
    a: "It's a fairly long drive from Shillong given its lesser-known, less-connected location — plan for a full day's travel time rather than a quick excursion.",
  },
  {
    q: "Is camping the main way to experience it?",
    a: "Yes — conventional accommodation is very limited or absent at Mawphanlur, and camping on the open grassland is genuinely the main way most visitors experience the area, taking full advantage of the open-sky setting.",
  },
  {
    q: "Is it worth the effort to reach?",
    a: "For travelers who specifically want quiet, open landscape and solitude over a checklist of famous sights, yes. Those expecting a developed tourist site with facilities and signage will find it considerably rougher around the edges.",
  },
  {
    q: "What is the best time to visit?",
    a: "October to April offers the clearest weather and most comfortable camping conditions, avoiding Meghalaya's heavy monsoon season.",
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

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Meghalaya's Rolling Grasslands", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mawphanlur", level: 2 },
  { id: "things-to-do", title: "Grasslands, Lakes & Camping", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MawphanlurGuidePage() {
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
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="Open grassland and rolling hill landscape, evoking Mawphanlur's grassland and small-lake scenery"
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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Mawphanlur", href: null },
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
              {["Mawphanlur", "Meghalaya", "Grasslands", "Camping"].map((tag) => (
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
              Mawphanlur: Grasslands, Lakes & Camping Guide
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              Rolling grasslands and small lakes stand in for Meghalaya's
              usual forest and waterfalls — one of the state's quietest,
              most genuinely offbeat corners.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "9 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "West Khasi Hills, Meghalaya",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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

        {/* ── Three-Column Layout ───────────────────────────────────────── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Meghalaya's Rolling Grasslands</h2>
                  <p>
                    <strong>Mawphanlur</strong> is one of Meghalaya's
                    genuinely lesser-known destinations, and it looks the
                    part — instead of the dense forest, dramatic gorges, and
                    waterfalls that define much of the state's tourist
                    circuit, Mawphanlur offers rolling open grassland dotted
                    with small lakes, a landscape sometimes compared to
                    Scottish highlands scenery. It's a genuine change of
                    register from the usual Meghalaya itinerary.
                  </p>
                  <p>
                    It remains considerably quieter and less developed than
                    the busier{" "}
                    <Link href="/blog/shillong-travel-guide">Shillong</Link>–
                    Cherrapunji tourist circuit, which is really the point —
                    Mawphanlur appeals specifically to travelers who want
                    open, unspoiled landscape and solitude rather than a
                    checklist of headline attractions. Come with that
                    expectation, and it delivers something genuinely
                    different.
                  </p>
                  <p>
                    Camping is the main way most people experience the area,
                    making full use of the open grassland and small lakes
                    for a night under an unusually open sky by Meghalaya
                    standards.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏕️</span> Mawphanlur at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "West Khasi Hills, Meghalaya" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        { icon: "🌾", label: "Known For", value: "Grasslands, small lakes" },
                        { icon: "🏕️", label: "Best Way to Visit", value: "Camping" },
                        { icon: "🎯", label: "Character", value: "Genuinely offbeat, quiet" },
                        { icon: "🛌", label: "Accommodation", value: "Very limited — camp instead" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Mawphanlur</h2>
                  <p>
                    Given how exposed and open the grassland setting is,
                    weather matters even more here than at most Meghalaya
                    destinations.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies and comfortable temperatures make this the ideal window for both day visits and overnight camping.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pre-monsoon",
                        text: "Still generally workable, though increasingly humid and unpredictable as the monsoon approaches.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy, sustained rain makes both the drive and any camping genuinely difficult and uncomfortable during this window.",
                      },
                      {
                        season: "Winter nights",
                        emoji: "🌙",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold after dark",
                        text: "Open grassland camping gets genuinely cold at night in the cooler months — come prepared with proper insulation.",
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
                    <strong>Our pick:</strong> October to April, avoiding the
                    coldest winter nights unless you're properly equipped for
                    open-air camping.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mawphanlur</h2>
                  <ul>
                    <li>
                      <strong>By road from Shillong:</strong> A fairly long
                      drive given Mawphanlur's lesser-known, less-connected
                      location — budget a full day for travel rather than a
                      quick side trip.
                    </li>
                    <li>
                      <strong>Road conditions:</strong> Expect winding hill
                      roads that thin out in quality the further you get from
                      Shillong — a sturdy vehicle and an experienced driver
                      make a real difference.
                    </li>
                    <li>
                      <strong>Local guidance helps:</strong> Given how
                      lesser-known the route is, arranging transport through
                      a local operator or guide who knows the way is
                      genuinely useful.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Set out early given the
                    length of the drive, and don't expect the same road
                    quality or signage you'd find en route to Meghalaya's
                    bigger-name attractions.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Grasslands, Lakes & Camping</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Rolling open hillside landscape, evoking Mawphanlur's grassland scenery"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Rolling Grasslands</h3>
                  <p>
                    The defining feature here is simply the open landscape —
                    wide, rolling grassland stretching across the hills,
                    interspersed with small lakes. It's a genuinely
                    different visual register from the enclosed, forested
                    scenery found almost everywhere else in Meghalaya.
                  </p>
                  <h3>The Small Lakes</h3>
                  <p>
                    Scattered small lakes across the grassland add to the
                    scenery and give the landscape a layered, varied quality
                    — good spots to pause, walk around, and take in the
                    openness of the setting.
                  </p>
                  <h3>Camping</h3>
                  <p>
                    Camping is genuinely the best way to experience
                    Mawphanlur, taking advantage of the open sky and the
                    quiet, remote setting. Arrange camping through a
                    reputable local operator if you don't have your own
                    gear, since infrastructure here is minimal by design.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Conventional accommodation is very limited or effectively
                    absent at Mawphanlur — this is part of the appeal rather
                    than a shortcoming. Camping on the grassland is the
                    realistic, and genuinely rewarding, way to stay.
                  </p>
                  <blockquote>
                    Come prepared to camp, or arrange it through a local
                    operator — don't expect to find a hotel or guesthouse
                    here.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Camp Setup",
                        color: "bg-amber-700",
                        activities: [
                          "Long drive from Shillong",
                          "Arrive and set up camp on the grassland",
                          "Sunset walk across the open landscape",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Grasslands & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning walk around the small lakes",
                          "Break camp",
                          "Return drive to Shillong",
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
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Given the drive length, an overnight camping trip makes
                    far more sense than a rushed day trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Carry your own supplies:</strong> There's
                      essentially no dining infrastructure at Mawphanlur —
                      pack food and water for the duration of your stay.
                    </li>
                    <li>
                      <strong>Camping-operator meals:</strong> If arranging
                      camping through a local operator, ask whether meals are
                      included as part of the package.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
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
                          ["Vehicle hire (round trip from Shillong)", "₹3,000", "₹5,000", "₹8,000"],
                          ["Camping gear/package (per night)", "₹1,000", "₹2,000", "₹4,000"],
                          ["Food supplies", "₹300", "₹600", "₹1,200"],
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
                    * Figures are per group for the round trip and one night
                    of camping; a dedicated camping operator's package price
                    often bundles most of these costs together.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mawphanlur</h2>
                  <ul>
                    <li>
                      <strong>Arrange camping through a reputable local
                      operator:</strong> Especially if you don't have your
                      own gear, this is by far the smoothest way to visit.
                    </li>
                    <li>
                      <strong>Come with realistic expectations:</strong> This
                      is genuinely undeveloped, off-grid terrain — not a
                      polished tourist site.
                    </li>
                    <li>
                      <strong>Pack for cold nights:</strong> Open grassland
                      camping gets noticeably colder after dark than
                      forested Meghalaya destinations.
                    </li>
                    <li>
                      <strong>Set out early on the drive:</strong> The
                      journey from Shillong is long, so leaving early avoids
                      arriving after dark.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Arrange camping through a local operator",
                          "Pack warm layers for cold nights",
                          "Set out early given the long drive",
                          "Carry your own food and water",
                          "Come with realistic expectations about infrastructure",
                          "Bring a camera for the open landscape",
                        ].map((item) => (
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
                        {[
                          "Expect hotels or guesthouses on site",
                          "Underestimate how cold it gets after dark",
                          "Attempt the drive without an early start",
                          "Visit during heavy monsoon months",
                          "Expect polished tourist infrastructure or signage",
                          "Rely on finding food along the way",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Mawphanlur suits
                    travelers who've already covered Meghalaya's main
                    circuit and want something quieter — see our complete{" "}
                    <Link href="/blog/meghalaya-travel-guide">Meghalaya travel guide</Link>{" "}
                    for the wider state.
                  </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
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

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["Mawphanlur", "Meghalaya", "Grasslands", "Camping", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="mawphanlur-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mawphanlur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
