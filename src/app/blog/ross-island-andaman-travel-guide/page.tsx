// src/app/blog/ross-island-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ross Island Travel Guide: Ruins, History & How to Visit",
  description:
    "Complete Ross Island guide — the former British capital of the Andamans, now ruins reclaimed by strangler figs. History, the Smritika museum, wildlife, timings, and how to combine it with North Bay Island.",
  keywords:
    "Ross Island, Netaji Subhas Chandra Bose Dweep, Ross Island Andaman, Ross Island history, Ross Island ruins, Ross Island ferry, Ross Island timings, Ross Island light and sound show, Port Blair day trip, North Bay Ross Island combo, Andaman colonial history, Andaman Islands travel guide FAQ",
  openGraph: {
    title: "Ross Island Travel Guide: Ruins, History & How to Visit",
    description:
      "Once the 'Paris of the East' and the British administrative capital of the Andamans — now silent ruins overtaken by strangler figs, roamed by deer and peacocks.",
    url: "https://club.kudozz.in/blog/ross-island-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Andaman Sea coastline, evoking the harbour views around Ross Island near Port Blair",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ross Island Travel Guide: Ruins, History & How to Visit",
    description:
      "The British capital of the Andamans, now ruins reclaimed by nature — the complete Ross Island guide.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ross-island-andaman-travel-guide",
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
          headline: "Ross Island Travel Guide: Ruins, History & How to Visit",
          description:
            "Complete Ross Island guide — the former British capital of the Andamans, now ruins reclaimed by strangler figs. History, the Smritika museum, wildlife, timings, and how to combine it with North Bay Island.",
          image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
          datePublished: "2026-09-01",
          dateModified: "2026-09-01",
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
            "@id": "https://club.kudozz.in/blog/ross-island-andaman-travel-guide",
          },
          keywords:
            "Ross Island, Netaji Subhas Chandra Bose Dweep, Ross Island ruins, Ross Island history, Smritika museum, Ross Island ferry",
          about: {
            "@type": "Place",
            name: "Ross Island (Netaji Subhas Chandra Bose Dweep)",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Andaman and Nicobar Islands",
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
                name: "Andaman Islands",
                item: "https://club.kudozz.in/blog/andaman-islands-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ross Island",
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
    q: "Is Ross Island the same as Netaji Subhas Chandra Bose Dweep?",
    a: "Yes — Ross Island was officially renamed Netaji Subhas Chandra Bose Dweep in 2018. Almost every visitor, tour operator, and ferry ticket still refers to it as 'Ross Island,' so both names are used interchangeably in practice.",
  },
  {
    q: "How do I reach Ross Island?",
    a: "Ross Island is reached by a short ferry ride (roughly 20 minutes) from Port Blair's Phoenix Bay or Rajiv Gandhi Water Sports Complex jetty. Most visitors book a combined boat trip that also stops at North Bay Island on the same outing.",
  },
  {
    q: "What is there to see on Ross Island?",
    a: "The main draw is the atmospheric ruins of the former British administrative headquarters — the old Chief Commissioner's residence, church, bakery, and troop barracks — many now half-swallowed by strangler fig and banyan roots. There's also a small museum (the Smritika Gallery) on the island's history, and resident spotted deer and peacocks roaming the grounds.",
  },
  {
    q: "Why was Ross Island called the 'Paris of the East'?",
    a: "During British colonial rule, Ross Island served as the administrative capital of the Andamans and was built up with ballrooms, a church, bakeries, tennis courts, and landscaped gardens — a level of infrastructure and social life that earned it the nickname among the officers stationed there. Little of that grandeur survives intact today, which is part of what makes the ruins striking.",
  },
  {
    q: "Is there a Light and Sound Show on Ross Island?",
    a: "Yes, a separate evening Light and Sound Show runs on Ross Island (distinct from the well-known one at Cellular Jail), narrating the island's colonial history against its ruins. Schedules run less frequently than the Cellular Jail show, so confirm current timings locally before planning around it.",
  },
  {
    q: "Can Ross Island be combined with other sights in one day?",
    a: "Yes — it's most commonly paired with North Bay Island in a single half-day boat trip from Port Blair, since both are reached from the same jetty area and the combined visit fits comfortably into a morning or afternoon.",
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
  { id: "introduction", title: "The Paris of the East", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "history", title: "A Brief Colonial History", level: 2 },
  { id: "ruins-today", title: "The Ruins Today", level: 2 },
  { id: "wildlife", title: "Deer, Peacocks & the Museum", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RossIslandGuidePage() {
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
              src="/images/destinations/andaman/hero.jpg"
              alt="Andaman Sea coastline, evoking the harbour views around Ross Island near Port Blair"
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
                { label: "Andaman Islands", href: "/blog/andaman-islands-travel-guide" },
                { label: "Ross Island", href: null },
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
                "Ross Island",
                "Netaji Subhas Chandra Bose Dweep",
                "Colonial Ruins",
                "Port Blair",
                "Andaman Islands",
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
              Ross Island: Ruins, History & the Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Once the British administrative capital of the Andamans,
              nicknamed the "Paris of the East" — now silent ruins
              overtaken by strangler figs, roamed by deer and peacocks.
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
                  text: "Ross Island, near Port Blair",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>The Paris of the East</h2>
                  <p>
                    <strong>Ross Island</strong>, officially renamed{" "}
                    <strong>Netaji Subhas Chandra Bose Dweep</strong> in
                    2018, sits just a short ferry ride from{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair (Sri Vijaya Puram)
                    </Link>{" "}
                    in the{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Islands
                    </Link>
                    . For decades, it was the British administrative capital
                    of the Andamans — a small, self-contained world of
                    ballrooms, a church, a bakery, tennis courts, and
                    manicured gardens that earned it the nickname the "Paris
                    of the East" among the officers stationed there.
                  </p>
                  <p>
                    Almost none of that grandeur survives intact. What
                    remains is a scattering of colonial-era ruins — a
                    Chief Commissioner's residence, a church, troop
                    barracks — steadily consumed over the decades by
                    strangler fig and banyan roots that now hold entire
                    walls together as much as they're pulling them apart.
                    It's an unusually visual kind of history: nature quite
                    literally reclaiming empire.
                  </p>
                  <p>
                    Today, spotted deer and peacocks wander freely among the
                    ruins, a small museum fills in the historical context,
                    and most visitors combine the trip with nearby North Bay
                    Island in a single half-day outing from Port Blair.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Ross Island at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Official Name",
                          value: "Netaji Subhas Chandra Bose Dweep",
                        },
                        {
                          icon: "⛴️",
                          label: "From Port Blair",
                          value: "~20 min by ferry",
                        },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Colonial ruins, strangler figs",
                        },
                        {
                          icon: "🦌",
                          label: "Wildlife",
                          value: "Spotted deer, peacocks",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Nov – Apr",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "1.5-2 hours",
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
                  <h2>Best Time to Visit Ross Island</h2>
                  <p>
                    Ross Island is an outdoor site with a fair amount of
                    walking between ruins, so weather and sea conditions
                    both matter.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas for the ferry crossing and pleasant temperatures for walking among the ruins.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warmer, still workable",
                        text: "Hotter and more humid — visit earlier in the day and carry water for the walk around the island.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — plan around it",
                        text: "Rough seas can delay or cancel the short ferry crossing; the ruins and paths also get slippery.",
                      },
                      {
                        season: "Golden Hour",
                        emoji: "📸",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best light",
                        text: "Late afternoon light filtering through the fig-root ruins is the most atmospheric time for photography.",
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
                    <strong>Our pick:</strong> a November-February morning,
                    paired with North Bay Island afterward for a full,
                    unrushed half-day.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ross Island</h2>
                  <ul>
                    <li>
                      <strong>By ferry from Port Blair:</strong> Boats leave
                      from Phoenix Bay Jetty or the Rajiv Gandhi Water
                      Sports Complex, taking roughly 20 minutes each way.
                    </li>
                    <li>
                      <strong>Combined tours:</strong> Most operators sell a
                      combined Ross Island-North Bay Island ticket, since
                      both are reached from the same jetty area.
                    </li>
                    <li>
                      <strong>On the island:</strong> Ross Island is small
                      enough to explore entirely on foot, with a marked path
                      looping past the main ruins.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book the combined Ross
                    Island-North Bay boat trip rather than arranging two
                    separate crossings — it's cheaper and far less
                    time-consuming.
                  </div>
                </section>

                {/* ── History ────────────────────────────────────────────── */}
                <section id="history">
                  <h2>A Brief Colonial History</h2>
                  <p>
                    The British established Ross Island as the
                    administrative headquarters of the Andaman penal
                    settlement in the 1850s, choosing it over the mainland
                    for security and defensibility. Over the following
                    decades it grew into a genuinely developed colonial
                    outpost — home to the Chief Commissioner's residence, a
                    church, a printing press, a bakery, a swimming pool, and
                    even tennis courts, all serving the small British
                    community stationed there.
                  </p>
                  <p>
                    That period ended abruptly during the Second World War,
                    when Japanese forces occupied the island from 1942 to
                    1945, using it as a military base. After Independence,
                    the island's administrative role shifted permanently to
                    the mainland at Port Blair, and Ross Island was largely
                    abandoned — left to the jungle, and eventually to the
                    Indian Navy, which maintains a small presence there
                    today.
                  </p>
                </section>

                {/* ── Ruins Today ────────────────────────────────────────── */}
                <section id="ruins-today">
                  <h2>The Ruins Today</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Coastal ruins overtaken by tropical vegetation, evoking Ross Island's colonial-era buildings"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    What makes Ross Island genuinely striking isn't any
                    single building — it's the visual collision between
                    colonial architecture and tropical growth. Strangler fig
                    and banyan roots have wrapped themselves around walls,
                    doorways, and columns over the better part of a century,
                    in some places holding crumbling structures upright and
                    in others slowly pulling them apart.
                  </p>
                  <p>
                    A marked walking path loops past the main surviving
                    structures, including the old Chief Commissioner's
                    residence, the church, and the troop barracks — none
                    fully intact, all worth slowing down for.
                  </p>
                </section>

                {/* ── Wildlife ───────────────────────────────────────────── */}
                <section id="wildlife">
                  <h2>Deer, Peacocks & the Museum</h2>
                  <p>
                    Spotted deer and peacocks, both introduced generations
                    ago, now roam the island freely and have become as much
                    a part of the Ross Island experience as the ruins
                    themselves — expect to share the paths with them.
                  </p>
                  <p>
                    The <strong>Smritika Gallery</strong>, a small museum
                    near the jetty, covers the island's history through
                    photographs and exhibits, and is a useful stop either
                    before or after walking the ruins to add context to what
                    you're seeing. A separate evening Light and Sound Show
                    also runs on the island, narrating its history — though
                    less frequently than the well-known one at{" "}
                    <Link href="/blog/cellular-jail-andaman-travel-guide">
                      Cellular Jail
                    </Link>
                    , so confirm current timings locally.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half-Day)</h2>
                  <p>
                    Ross Island is easily combined with{" "}
                    <Link href="/blog/north-bay-island-andaman-travel-guide">
                      North Bay Island
                    </Link>{" "}
                    in a single half-day trip from Port Blair.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Step 1",
                        title: "Ferry to Ross Island",
                        color: "bg-amber-700",
                        activities: [
                          "Board from Phoenix Bay or the Water Sports Complex",
                          "20-minute crossing to the island",
                        ],
                      },
                      {
                        day: "Step 2",
                        title: "Walk the Ruins",
                        color: "bg-forest-600",
                        activities: [
                          "Follow the marked path past the main structures",
                          "Stop at the Smritika Gallery for context",
                          "Watch for deer and peacocks along the way",
                        ],
                      },
                      {
                        day: "Step 3",
                        title: "Onward to North Bay",
                        color: "bg-sky-600",
                        activities: [
                          "Board the connecting boat to North Bay Island",
                          "Snorkelling or glass-bottom boat over the reef",
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
                            "Combined Ross + North Bay ferry/entry",
                            "₹600",
                            "₹900",
                            "₹1,500",
                          ],
                          [
                            "Guide (optional)",
                            "—",
                            "₹300",
                            "₹800",
                          ],
                          [
                            "Photography permit (camera, optional)",
                            "₹50",
                            "₹50",
                            "₹50",
                          ],
                          ["Total (half-day)", "₹650", "₹1,250", "₹2,350"],
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
                    * Figures are per person and cover the standard
                    combined Ross Island-North Bay trip; verify current
                    fees and permit costs locally before booking.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ross Island</h2>
                  <ul>
                    <li>
                      <strong>Book the combined boat trip:</strong> Pairing
                      Ross Island with North Bay saves both time and money
                      compared to arranging separate crossings.
                    </li>
                    <li>
                      <strong>Wear comfortable, closed shoes:</strong> The
                      paths between ruins are uneven and can be slippery
                      after rain.
                    </li>
                    <li>
                      <strong>Don't feed the deer or peacocks:</strong>{" "}
                      They're accustomed to visitors, but feeding wildlife
                      is discouraged for their health and the island's
                      upkeep.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> There's
                      limited shade along parts of the walking path.
                    </li>
                    <li>
                      <strong>Confirm Light and Sound Show timings locally:</strong>{" "}
                      It runs less frequently than the one at Cellular Jail,
                      so don't assume a fixed daily schedule.
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
                          "Book the combined Ross Island-North Bay trip",
                          "Wear comfortable, closed footwear",
                          "Visit the Smritika Gallery for context",
                          "Carry water and sun protection",
                          "Watch for deer and peacocks on the paths",
                          "Confirm Light and Sound Show timings locally",
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
                          "Feed the deer or peacocks",
                          "Assume a fixed daily Light and Sound Show schedule",
                          "Wear flip-flops on the uneven ruin paths",
                          "Skip water — there's limited shade on the walk",
                          "Confuse it with Ross & Smith Islands near Diglipur",
                          "Rush the ruins — the atmosphere is the point",
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
                  "Ross Island",
                  "Netaji Subhas Chandra Bose Dweep",
                  "Colonial Ruins",
                  "Port Blair",
                  "North Bay Island",
                  "Andaman Islands",
                  "Andaman History",
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

              <RelatedPostsGrid currentSlug="ross-island-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ross-island-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
