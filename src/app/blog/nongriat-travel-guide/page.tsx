// src/app/blog/nongriat-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Nongriat Trek Guide: Living Root Bridge",
  description:
    "Complete Nongriat guide — the Umshiang Double-Decker Living Root Bridge, the demanding 3,500+ step trek, Rainbow Falls, how to reach via Cherrapunji, and a full visit plan.",
  keywords:
    "Nongriat travel guide, living root bridge, Umshiang double decker root bridge, Nongriat trek steps, Rainbow Falls Meghalaya, Cherrapunji root bridge trek, Khasi living root bridges",
  openGraph: {
    title: "Nongriat Trek Guide: Living Root Bridge",
    description:
      "A bridge grown from living tree roots over generations, and a demanding 3,500-step descent through the forest to reach it — the complete Nongriat guide.",
    url: "https://club.kudozz.in/blog/nongriat-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dense green forest landscape, evoking the forested valley trek down to Nongriat's living root bridge",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nongriat Trek Guide: Living Root Bridge",
    description:
      "A bridge grown from living roots, and a demanding forest descent to reach it — the complete Nongriat trek guide.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nongriat-travel-guide",
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
          headline: "Nongriat Trek Guide: Living Root Bridge",
          description:
            "Complete Nongriat guide — the Umshiang Double-Decker Living Root Bridge, the demanding 3,500+ step trek, Rainbow Falls, how to reach via Cherrapunji, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/nongriat-travel-guide",
          },
          keywords:
            "Nongriat, living root bridge, Meghalaya, Cherrapunji, Khasi bio-engineering",
          about: {
            "@type": "Place",
            name: "Nongriat",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Nongriat",
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
    q: "How many steps is the Nongriat trek?",
    a: "The descent to Nongriat village involves a demanding stone staircase of roughly 3,500 or more steps through dense forest, which you then re-climb on the way back — a serious physical undertaking, not a casual walk.",
  },
  {
    q: "Is the Nongriat trek safe?",
    a: "Yes, for reasonably fit trekkers with proper footwear, though the steep stone steps become genuinely hazardous when wet — avoid attempting it during or right after heavy rain.",
  },
  {
    q: "Is an overnight stay in Nongriat recommended?",
    a: "For most people, yes. Splitting the descent and the taxing return climb across two days with a night at a village guesthouse is far less punishing than attempting it all in a single very long day.",
  },
  {
    q: "How far is Nongriat from Cherrapunji?",
    a: "Cherrapunji (Sohra) is the practical base — you drive from there to the trailhead, then trek the rest of the way on foot down into the valley.",
  },
  {
    q: "What is the best time to attempt the trek?",
    a: "October to April, for drier and safer trail conditions. The steep stone steps get slippery and risky when wet, so the monsoon months are best avoided.",
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
  { id: "introduction", title: "A Bridge Grown, Not Built", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nongriat", level: 2 },
  { id: "things-to-do", title: "The Root Bridge & Rainbow Falls", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NongriatGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Dense green forest landscape, evoking the forested valley trek down to Nongriat's living root bridge"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Nongriat", href: null },
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
              {["Nongriat", "Living Root Bridge", "Meghalaya", "Trekking"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nongriat Trek Guide: Living Root Bridge
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A bridge grown from living tree roots over generations, and
              a demanding 3,500-step descent through the forest to reach
              it.
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
                  text: "Near Cherrapunji, Meghalaya",
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
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>A Bridge Grown, Not Built</h2>
                  <p>
                    <strong>Nongriat</strong> is a village deep in a
                    forested valley near Cherrapunji, home to the famous{" "}
                    <strong>Umshiang Double-Decker Living Root Bridge</strong>{" "}
                    — a genuinely extraordinary feat of indigenous
                    bio-engineering. The Khasi/War people train the aerial
                    roots of rubber fig trees across rivers over
                    generations, letting them grow and strengthen into
                    living bridges rather than building with dead
                    materials.
                  </p>
                  <p>
                    Reaching it requires descending — and later
                    re-ascending — a demanding stone staircase of roughly
                    3,500 or more steps through dense forest. This is a
                    serious physical undertaking, and underestimating it is
                    one of the most common visitor mistakes here.
                  </p>
                  <p>
                    Rainbow Falls, a beautiful waterfall near the village,
                    is reachable with additional walking and often visited
                    alongside the root bridge as part of the same trip.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Nongriat at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Base Town", value: "Cherrapunji (Sohra)" },
                        {
                          icon: "🪜",
                          label: "Steps",
                          value: "3,500+ (one way)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🌿",
                          label: "Known For",
                          value: "Living Root Bridges",
                        },
                        {
                          icon: "💦",
                          label: "Nearby",
                          value: "Rainbow Falls",
                        },
                        {
                          icon: "🎯",
                          label: "Difficulty",
                          value: "Demanding, Not Casual",
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

                <section id="best-time">
                  <h2>Best Time to Visit Nongriat</h2>
                  <p>
                    Trail safety, not just scenery, is the main factor to
                    plan around here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Drier trail conditions make the steep stone steps considerably safer to descend and climb.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pre-monsoon, still workable",
                        text: "Occasional showers begin — check forecasts and avoid days with heavy rain forecast.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "The stone steps become genuinely hazardous when wet. Best avoided entirely during heavy rain.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🍃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, most comfortable",
                        text: "Cooler temperatures make the demanding climb back up noticeably more manageable.",
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
                    <strong>Our pick:</strong> October to April — drier,
                    safer stone steps and cooler temperatures for the
                    demanding return climb.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Nongriat</h2>
                  <ul>
                    <li>
                      <strong>Via Cherrapunji:</strong> The practical base
                      — cross-link{" "}
                      <Link href="/blog/cherrapunji-travel-guide">
                        Cherrapunji
                      </Link>
                      . Drive from Sohra town to the trailhead near Tyrna
                      village.
                    </li>
                    <li>
                      <strong>The trek itself:</strong> From the trailhead,
                      it's on foot only — roughly 3,500+ steps down through
                      forest to reach Nongriat.
                    </li>
                    <li>
                      <strong>Local guides:</strong> Widely available in
                      Cherrapunji and useful for first-time trekkers.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start the descent as early
                    in the day as possible, whether attempting a single-day
                    trip or an overnight — it gives you the most daylight
                    buffer for the return climb.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>The Root Bridge & Rainbow Falls</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forested valley near Nongriat, Meghalaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Umshiang Double-Decker Root Bridge</h3>
                  <p>
                    Two tiers of living root bridge stacked one above the
                    other — a structure grown, tended, and reinforced by
                    Khasi/War communities over many decades, still fully
                    functional as a river crossing today.
                  </p>
                  <h3>The Step Trek</h3>
                  <p>
                    The staircase down (and later back up) is the real
                    physical challenge of a Nongriat visit — take it at
                    your own pace and rest as needed.
                  </p>
                  <h3>Rainbow Falls</h3>
                  <p>
                    A beautiful waterfall a further walk beyond the
                    village, often combined with the root bridge visit for
                    those with the energy and time.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Nongriat</h2>
                  <p>
                    Basic guesthouses in the village allow you to split
                    the descent and ascent across two days rather than
                    rushing both in one.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Village guesthouses in Nongriat",
                          "Basic homestays",
                          "Shared dormitory-style stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏡",
                        range: "₹1,500–₹2,800/night",
                        picks: [
                          "Guesthouses with meals included",
                          "Riverside cottages",
                        ],
                      },
                      {
                        tier: "In Cherrapunji",
                        icon: "🏨",
                        range: "₹1,000–₹4,000/night",
                        picks: [
                          "Sohra town guesthouses/resorts",
                          "For those not overnighting in the village",
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

                <section id="visit-plan">
                  <h2>Suggested Nongriat Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Option 1",
                        title: "Single Very Long Day",
                        color: "bg-amber-700",
                        activities: [
                          "Early start from Cherrapunji to the trailhead",
                          "Descend, visit the root bridge and Rainbow Falls",
                          "Climb back up before dark",
                        ],
                      },
                      {
                        day: "Option 2",
                        title: "Overnight in the Village",
                        color: "bg-sky-600",
                        activities: [
                          "Descend and stay overnight in Nongriat",
                          "Relaxed second day for Rainbow Falls",
                          "Climb back to the trailhead the next morning",
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
                    * The overnight option is recommended for most
                    trekkers — it avoids rushing both the descent and the
                    taxing return climb.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Nongriat</h2>
                  <ul>
                    <li>
                      <strong>Village guesthouse meals:</strong> Simple,
                      home-style Khasi meals for those staying overnight.
                    </li>
                    <li>
                      <strong>Carry your own snacks and water:</strong>{" "}
                      Especially important for the trek itself, as options
                      are minimal along the way.
                    </li>
                    <li>
                      <strong>Cherrapunji before/after:</strong> A wider
                      choice of food back at the base town.
                    </li>
                  </ul>
                </section>

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
                          ["Village guesthouse/night", "₹600", "₹1,800", "₹2,800"],
                          ["Local guide (per trek)", "₹800", "₹1,500", "₹2,500"],
                          ["Food/day", "₹350", "₹700", "₹1,200"],
                          ["Cherrapunji transport (round trip)", "₹1,500", "₹2,500", "₹4,000"],
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
                    * A local guide is optional but recommended, especially
                    for first-time trekkers.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Tips for the Nongriat Trek</h2>
                  <ul>
                    <li>
                      <strong>Wear proper grippy trekking shoes:</strong>{" "}
                      Given the steep, sometimes uneven stone steps.
                    </li>
                    <li>
                      <strong>Start early:</strong> Regardless of whether
                      attempting a single-day or overnight trip.
                    </li>
                    <li>
                      <strong>Consider an overnight in the village:</strong>{" "}
                      It genuinely makes the trek less punishing.
                    </li>
                    <li>
                      <strong>Avoid the trek in or right after heavy rain:</strong>{" "}
                      The stone steps become hazardous when wet.
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
                          "Wear sturdy, grippy trekking shoes",
                          "Start the descent early in the day",
                          "Carry enough water and snacks",
                          "Consider an overnight stay in the village",
                          "Pace yourself on both the descent and climb",
                          "Check weather before attempting the trek",
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
                          "Underestimate the step count or the climb back up",
                          "Attempt it in flip-flops or worn-out shoes",
                          "Start the descent late in the afternoon",
                          "Trek during or right after heavy rain",
                          "Skip carrying water for the trail",
                          "Rush past the root bridge without appreciating it",
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
                    <strong>🗺️ Extend the trip:</strong> Base yourself in{" "}
                    <Link href="/blog/cherrapunji-travel-guide">
                      Cherrapunji
                    </Link>{" "}
                    for this trek, then continue to{" "}
                    <Link href="/blog/dawki-travel-guide">Dawki</Link> for
                    the crystal-clear Umngot River. See our full{" "}
                    <Link href="/blog/meghalaya-travel-guide">
                      Meghalaya travel guide
                    </Link>{" "}
                    for the wider region.
                  </div>
                </section>

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

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Nongriat",
                  "Living Root Bridge",
                  "Meghalaya",
                  "Trekking",
                  "Cherrapunji",
                  "Rainbow Falls",
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

              <RelatedPostsGrid currentSlug="nongriat-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nongriat-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
