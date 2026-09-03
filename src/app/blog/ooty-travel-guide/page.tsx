// src/app/blog/ooty-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ooty Travel Guide: Nilgiris, Lakes & Best Time",
  description:
    "Complete Ooty guide — the Nilgiri Mountain Railway toy train, Ooty Lake, Doddabetta Peak, tea gardens, best time to visit, how to reach, and a full visit plan.",
  keywords:
    "Ooty travel guide, Udhagamandalam, Nilgiri Mountain Railway, Ooty Lake, Doddabetta Peak, Ooty toy train, Nilgiris hill station, best time to visit Ooty, how to reach Ooty, Ooty tea gardens",
  openGraph: {
    title: "Ooty Travel Guide: Nilgiris, Lakes & Best Time",
    description:
      "A colonial-era hill station, a UNESCO toy train, and tea gardens rolling across the Nilgiris — the complete Ooty guide.",
    url: "https://club.kudozz.in/blog/ooty-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Green hill valley landscape, evoking Ooty's Nilgiri hills and tea garden scenery",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ooty Travel Guide: Nilgiris, Lakes & Best Time",
    description:
      "A colonial hill station, a UNESCO toy train, and rolling Nilgiri tea gardens — the complete Ooty guide.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ooty-travel-guide",
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
          headline: "Ooty Travel Guide: Nilgiris, Lakes & Best Time",
          description:
            "Complete Ooty guide — the Nilgiri Mountain Railway toy train, Ooty Lake, Doddabetta Peak, tea gardens, best time to visit, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/ooty-travel-guide",
          },
          keywords:
            "Ooty, Nilgiris, Tamil Nadu, hill station, toy train, tea gardens",
          about: {
            "@type": "Place",
            name: "Ooty",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tamil Nadu",
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
                name: "Tamil Nadu",
                item: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ooty",
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
    q: "What is the best time to visit Ooty?",
    a: "April to June is the classic pick — pleasant summer weather that draws crowds fleeing the plains' heat. October to February is also excellent, cooler and mistier, occasionally cold enough for a light frost at night.",
  },
  {
    q: "How do I book the Nilgiri Mountain Railway toy train?",
    a: "Book well in advance through IRCTC, especially for the Ooty-Coonoor-Mettupalayam stretch in peak season (Apr-Jun, Oct-Dec) — tickets sell out days or weeks ahead. Tatkal and on-the-day tickets are rarely reliable options during these windows.",
  },
  {
    q: "How many days do I need in Ooty?",
    a: "Two to three days covers Ooty Lake, the Botanical Garden, Doddabetta Peak, and a toy-train ride comfortably. Add a day if combining with Coonoor's tea estates or a wider Nilgiris loop.",
  },
  {
    q: "How far is Ooty from Coimbatore?",
    a: "Roughly 85 km, about a 3-hour drive via Mettupalayam and the Nilgiri ghat road — Coimbatore is the most common gateway city for reaching Ooty by air or rail.",
  },
  {
    q: "Is Ooty crowded during peak season?",
    a: "Yes, significantly — April-June and the Christmas-New Year week both bring heavy tourist traffic, packed viewpoints, and slower ghat-road traffic. Book accommodation and toy-train tickets well ahead if visiting then, or consider October-February for a calmer trip.",
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
  { id: "introduction", title: "Queen of Hill Stations", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ooty", level: 2 },
  { id: "things-to-do", title: "Lake, Toy Train & Viewpoints", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function OotyGuidePage() {
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
              src="/images/destinations/manali/solang-valley.jpg"
              alt="Green hill valley landscape, evoking Ooty's Nilgiri hills and tea garden scenery"
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
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Ooty", href: null },
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
              {["Ooty", "Nilgiris", "Toy Train", "Tea Gardens", "Hill Station"].map(
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
              Ooty: Nilgiris, Toy Train & Tea Garden Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A colonial-era summer capital turned South India's favourite
              hill escape, with a UNESCO toy train, tea gardens rolling to
              the horizon, and Nilgiri views at every bend.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Nilgiris, Tamil Nadu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>Queen of Hill Stations</h2>
                  <p>
                    <strong>Ooty</strong> (officially Udhagamandalam), at
                    roughly 2,240 m in the{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu
                    </Link>{" "}
                    Nilgiris, earned its "Queen of Hill Stations" nickname
                    during British colonial rule, when it served as the
                    summer capital of the Madras Presidency. That legacy
                    still shows — in the church spires, the colonial-era
                    bungalows, and the manicured gardens scattered across
                    town.
                  </p>
                  <p>
                    What draws most visitors today is a mix of that heritage
                    and the surrounding Nilgiri landscape: a lake at the
                    town's centre, tea gardens rolling across the hills, and
                    a slow, scenic toy train climbing up from the plains
                    through forest and switchbacks.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Ooty at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "District", value: "Nilgiris, Tamil Nadu" },
                        { icon: "🚉", label: "Gateway", value: "Coimbatore (~85 km)" },
                        { icon: "🌡️", label: "Best Time", value: "Apr–Jun, Oct–Feb" },
                        { icon: "🚂", label: "Known For", value: "Nilgiri Toy Train" },
                        { icon: "🍃", label: "Altitude", value: "~2,240 m" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500–₹6,000" },
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
                  <h2>Best Time to Visit Ooty</h2>
                  <p>
                    Ooty's altitude keeps it cool year-round by Tamil Nadu
                    standards, but the season still shapes crowds and
                    visibility.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — peak season",
                        text: "Pleasant summer weather draws travellers fleeing the plains' heat — the busiest, most popular window, so expect crowds and higher prices.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but wet",
                        text: "The Nilgiris turn a deep green, but frequent rain can disrupt sightseeing and the toy-train schedule.",
                      },
                      {
                        season: "Oct – Feb",
                        emoji: "🌫️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cool and misty",
                        text: "Crisp, quieter conditions with regular morning mist — nights can get cold enough for a light frost, especially December-January.",
                      },
                      {
                        season: "Dec 25 – Jan 1",
                        emoji: "🎄",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Holiday rush",
                        text: "A second, shorter peak-season spike around Christmas and New Year — book well ahead if travelling in this window.",
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
                    <strong>Our pick:</strong> April to June for classic
                    pleasant hill-station weather, or October to February if
                    you'd rather trade some warmth for thinner crowds and
                    misty mornings.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ooty</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> The nearest airport is
                      Coimbatore (~85 km), well connected to major Indian
                      cities, with taxis and buses covering the onward
                      ghat-road journey.
                    </li>
                    <li>
                      <strong>By the Nilgiri Mountain Railway:</strong> The
                      narrow-gauge toy train runs from Mettupalayam up
                      through Coonoor to Ooty — a UNESCO World Heritage
                      journey and an experience in its own right, not just
                      transport.
                    </li>
                    <li>
                      <strong>By road:</strong> Regular buses and taxis
                      connect Ooty to Coimbatore, Mysore, and Bangalore via
                      well-maintained ghat roads with numerous hairpin
                      bends.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book Nilgiri Mountain
                    Railway tickets through IRCTC well in advance for
                    April-June or the Christmas-New Year week — seats sell
                    out fast in peak season.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Lake, Toy Train & Viewpoints</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Rolling green hills, evoking Ooty's tea gardens and Nilgiri scenery"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Ooty Lake</h3>
                  <p>
                    An artificial lake at the heart of town, popular for
                    boating and an easy evening stroll along the shore.
                  </p>
                  <h3>Nilgiri Mountain Railway</h3>
                  <p>
                    The narrow-gauge "toy train" climbing from Mettupalayam
                    through Coonoor to Ooty is a UNESCO World Heritage Site
                    — a slow, scenic ride through tunnels, bridges, and
                    switchbacks that's as much the point of a visit as any
                    single sight in town.
                  </p>
                  <h3>Government Botanical Garden & Rose Garden</h3>
                  <p>
                    Terraced gardens with a wide variety of native and
                    exotic species, and a dedicated Rose Garden with
                    thousands of varieties — both easy, pleasant half-day
                    stops.
                  </p>
                  <h3>Doddabetta Peak</h3>
                  <p>
                    The highest point in the Nilgiris, with a viewpoint and
                    a small telescope house offering panoramic views across
                    the range on clear days.
                  </p>
                  <h3>Tea Gardens</h3>
                  <p>
                    Estates around Ooty and further toward Coonoor offer
                    walks among the tea bushes and tastings — a defining
                    Nilgiris experience alongside the toy train.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Ooty</h2>
                  <p>
                    Accommodation ranges from colonial-era heritage
                    bungalows to modern hotels, concentrated around the
                    lake and the town centre.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Budget lodges near the bus stand",
                          "TTDC hotels",
                          "Homestays on the town outskirts",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Lake-view hotels",
                          "Colonial-style guesthouses",
                          "Boutique cottages",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Heritage bungalow resorts",
                          "Premium hillside properties",
                          "Tea-estate stays",
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
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Ooty Town",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Ooty Lake and boating",
                          "Botanical Garden and Rose Garden",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Toy Train & Doddabetta",
                        color: "bg-sky-600",
                        activities: [
                          "Morning toy-train ride to/from Coonoor",
                          "Doddabetta Peak viewpoint",
                          "Tea estate visit and tasting",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Optional Extension",
                        color: "bg-forest-600",
                        activities: [
                          "Coonoor tea gardens and viewpoints",
                          "Shopping for chocolate and eucalyptus oil",
                          "Departure via Coimbatore",
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
                    * Combine with a night in{" "}
                    <Link href="/blog/coimbatore-travel-guide">
                      Coimbatore
                    </Link>{" "}
                    before or after for an easier gateway journey.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Ooty</h2>
                  <ul>
                    <li>
                      <strong>Homemade chocolate:</strong> Ooty's chocolate
                      shops, many family-run for generations, are a
                      near-mandatory stop for visitors.
                    </li>
                    <li>
                      <strong>Nilgiri tea:</strong> Fresh, locally grown tea
                      is sold across town, often with tastings at the
                      estates themselves.
                    </li>
                    <li>
                      <strong>South Indian staples:</strong> Idli, dosa, and
                      filter coffee remain easy, reliable options at local
                      eateries throughout town.
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
                          ["Accommodation/night", "₹1,500", "₹4,000", "₹9,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,200"],
                          ["Local transport/day", "₹400", "₹800", "₹1,800"],
                          ["Toy train ticket", "₹300", "₹500", "₹1,000"],
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
                    * Figures are per person, per day. Excludes travel to
                    Coimbatore.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ooty</h2>
                  <ul>
                    <li>
                      <strong>Book the toy train in advance:</strong> Peak
                      season tickets vanish quickly through IRCTC.
                    </li>
                    <li>
                      <strong>Carry warm layers:</strong> Even in "summer,"
                      evenings and early mornings at this altitude get
                      genuinely cool.
                    </li>
                    <li>
                      <strong>Expect ghat-road traffic in peak season:</strong>{" "}
                      Build extra time into your travel plans in April-June
                      and around Christmas-New Year.
                    </li>
                    <li>
                      <strong>Combine with Coonoor:</strong> A short drive
                      away, Coonoor offers similar scenery with fewer
                      crowds.
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
                          "Book toy-train tickets well in advance",
                          "Carry a jacket even in peak summer months",
                          "Visit Doddabetta Peak early for the clearest views",
                          "Try a proper tea tasting at an estate",
                          "Combine with a Coonoor day trip",
                          "Book accommodation ahead in peak season",
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
                          "Assume same-day toy-train tickets will be available",
                          "Underestimate how cold evenings get",
                          "Travel the ghat road at night unless necessary",
                          "Skip Coonoor if you have an extra day",
                          "Expect solitude at major viewpoints in peak season",
                          "Forget rain gear outside the dry months",
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
                    <strong>🗺️ Extend the trip:</strong> Base your Nilgiris
                    trip through{" "}
                    <Link href="/blog/coimbatore-travel-guide">
                      Coimbatore
                    </Link>{" "}
                    for the easiest gateway, or read our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for the wider state.
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
                {["Ooty", "Nilgiris", "Tamil Nadu", "Hill Station"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="ooty-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ooty-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
