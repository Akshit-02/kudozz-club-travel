// src/app/blog/leh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Leh Travel Guide: Leh Palace, Market, Shanti Stupa & Tips",
  description:
    "A complete travel guide to Leh town — Leh Palace, Leh Market, Shanti Stupa, Namgyal Tsemo Fort, acclimatisation advice, cafés, old town walks, day trips, and a full budget breakdown.",
  keywords:
    "Leh travel guide, Leh town, Leh Palace, Leh Market, Shanti Stupa, Namgyal Tsemo, Leh acclimatisation, Leh Ladakh, things to do in Leh, Leh cafes, best time to visit Leh, how to reach Leh, Leh permit requirements, Leh budget trip, how many days in Leh, Leh day trips from town",
  openGraph: {
    title: "Leh Travel Guide: Leh Palace, Market, Shanti Stupa & Tips",
    description:
      "The old capital of Ladakh, one street at a time — Leh Palace, the bazaar, Shanti Stupa, and everything you need for the town itself.",
    url: "https://club.kudozz.in/blog/leh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Leh town with whitewashed houses below the Namgyal Tsemo hilltop fort",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Leh Travel Guide: Leh Palace, Market, Shanti Stupa & Tips",
    description:
      "Leh Palace, the old bazaar, Shanti Stupa, and everything you need to explore Leh town itself.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/leh-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Leh Travel Guide: Leh Palace, Market, Shanti Stupa & Tips",
          description:
            "A complete travel guide to Leh town — Leh Palace, Leh Market, Shanti Stupa, Namgyal Tsemo Fort, acclimatisation advice, cafés, and day trips.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-07-20",
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
            "@id": "https://club.kudozz.in/blog/leh-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Leh",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Ladakh",
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
                name: "Leh Travel Guide",
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
    q: "How many days do I need in Leh?",
    a: "Two to three unhurried days is enough to properly see Leh town itself — Leh Palace, the market and old town, Shanti Stupa, and one or two day trips like Thiksey or Hemis — while also building in the acclimatisation time your body needs at 3,524 m before heading onward to Pangong or Nubra.",
  },
  {
    q: "How do I acclimatise in Leh?",
    a: "The golden rule is to do nothing for your first 24 hours — no sightseeing, no hikes, not even a brisk walk to the market. Hydrate constantly, eat light carbohydrate-rich meals, and skip alcohol and sleeping pills. Day 2 can include gentle activity like a slow walk to Leh Market or Leh Palace, saving the steeper climbs to Shanti Stupa and Namgyal Tsemo for day 3.",
  },
  {
    q: "Do I need a permit to visit Leh town?",
    a: "No — the Inner Line Permit is only required if you're heading onward to Pangong, Nubra, Tso Moriri, or other restricted border areas. You can explore Leh town itself, including Leh Palace, the market, and Shanti Stupa, freely without one.",
  },
  {
    q: "What is the best time to visit Leh?",
    a: "The first two weeks of September are the recommended window — the bazaar is still fully open, the light turns the old town gold in the evenings, and Leh Palace and Shanti Stupa see a fraction of the peak-August crowds. July–August is the busiest and warmest period, when the Hemis and Ladakh festivals also fall.",
  },
  {
    q: "How do I reach Leh?",
    a: "Most visitors fly into Kushok Bakula Rimpochee Airport (IXL), just 4 km from town, with daily flights from Delhi in around 1 hour 20 minutes. Alternatively, you can drive overland via Manali (479 km, 2–3 days, crossing Tanglang La) or via Srinagar (434 km through Zoji La and Kargil, open longer in the season and gentler on altitude).",
  },
  {
    q: "What is the budget for a Leh town trip?",
    a: "A 3-day stay in Leh town costs roughly ₹5,300 on a budget itinerary, around ₹16,500 mid-range, and ₹45,000+ for a comfort-tier trip — covering accommodation, food, local taxis, monument entries, and cafés, but excluding flights and any onward permits for Pangong or Nubra.",
  },
  {
    q: "What are the must-see sights in Leh town?",
    a: "The core sights are Leh Palace (a nine-storey former royal residence with sweeping Indus Valley views), Leh Market and the old town, Shanti Stupa (best for sunrise or sunset panoramas), and Namgyal Tsemo Fort, the toughest climb but the single best viewpoint over Leh. The Hall of Fame war memorial and Sankar Gompa are worthwhile lower-effort additions.",
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
  { id: "introduction", title: "Why Leh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Leh", level: 2 },
  { id: "acclimatisation", title: "Acclimatisation in Leh", level: 2 },
  { id: "getting-around", title: "Getting Around Leh Town", level: 2 },
  { id: "top-things", title: "Top Things to Do in Leh", level: 2 },
  { id: "leh-palace", title: "→ Leh Palace", level: 3 },
  { id: "leh-market", title: "→ Leh Market & Old Town", level: 3 },
  { id: "shanti-stupa", title: "→ Shanti Stupa", level: 3 },
  { id: "namgyal-tsemo", title: "→ Namgyal Tsemo Fort", level: 3 },
  { id: "hall-of-fame", title: "→ Hall of Fame", level: 3 },
  { id: "sankar-gompa", title: "→ Sankar Gompa", level: 3 },
  { id: "leh-mosque", title: "→ Leh Jama Masjid", level: 3 },
  { id: "day-trips", title: "Day Trips from Leh", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "cafes-food", title: "Cafés & Food", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LehTravelGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Leh town beneath the hilltop Namgyal Tsemo Fort, Ladakh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent" />
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
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Leh", href: null },
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
                "Leh",
                "Ladakh",
                "Old Town",
                "High Altitude",
                "Monasteries",
                "Bazaar",
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
              Leh Travel Guide: Leh Palace, Market, Shanti Stupa & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A whitewashed old town under a ruined palace, at 3,524 metres.
              Before you chase Pangong or Nubra, spend a few unhurried days
              here — Leh rewards the traveller who slows down.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "17 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Leh, Ladakh, India",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,100 words",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.icon}
                    />
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
                  <h2>Why Leh?</h2>
                  <p>
                    Most people arrive in Leh on their way to somewhere else —
                    Pangong, Nubra, Khardung La, the great road-trip trophies
                    of Ladakh. That's understandable, and this town is happy
                    to play the role of gateway. But treat Leh as a mere
                    stopover and you'll miss one of the most quietly
                    remarkable towns in the Himalaya: a former royal capital
                    with a nine-storey palace on the hill, a market that has
                    been a Silk Road trading post for centuries, and an old
                    quarter of mudbrick homes, prayer wheels, and apricot
                    trees that rewards nothing more than an unhurried walk.
                  </p>
                  <p>
                    <strong>Leh</strong> is the largest town in Ladakh and, for
                    most travellers, the first taste of the region — whether
                    you fly straight in or roll down from Manali or Srinagar
                    after days on the highway. It sits in the Indus Valley at
                    3,524 metres, ringed by the stark, treeless mountains that
                    define this cold desert, with the Stok Kangri range
                    visible across the valley on a clear day.
                  </p>
                  <p>
                    This guide is deliberately narrow: it covers Leh town
                    itself — the palace, the bazaar, the stupas, the
                    monasteries within walking or short-taxi distance, and the
                    cafés where you'll spend your acclimatisation days. For
                    the wider road-trip circuit — Pangong, Nubra, Khardung La,
                    Zanskar — see our{" "}
                    <Link href="/blog/leh-ladakh-road-trip-travel-guide">
                      complete Leh Ladakh road trip guide
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏯</span> Leh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Union Territory of Ladakh",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "3,524 m (11,562 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "May – Sep" },
                        {
                          icon: "✈️",
                          label: "Airport",
                          value: "Kushok Bakula Rimpochee (IXL)",
                        },
                        {
                          icon: "🛂",
                          label: "Permits",
                          value: "None for Leh town itself",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹5,000",
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
                  <h2>Best Time to Visit Leh</h2>
                  <p>
                    Leh's tourist season is short and defined almost entirely
                    by winter road closures and flight reliability. Unlike the
                    high passes and border lakes, the town itself is
                    reachable by air year-round — but most of what makes it
                    worth visiting (open cafés, functioning guesthouses, a
                    lively bazaar) shuts down or thins out drastically once
                    the cold sets in.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – June",
                        emoji: "🌱",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Shoulder season, opening up",
                        text: "Manali highway opens by mid-to-late June; Srinagar route opens earlier. Apricot and apple blossom in the old town. Days pleasant (15–25°C), nights still cool. Fewer tourists than peak summer, and Leh Palace queues are short.",
                      },
                      {
                        season: "July – August",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season",
                        text: "Warmest, busiest, liveliest. Leh Market is at its most colourful, cafés are full of overlanders and bikers, and both the Hemis Festival and Ladakh Festival fall in this window. Book accommodation ahead — rooms sell out.",
                      },
                      {
                        season: "September – mid-October",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Our pick",
                        text: "Crowds thin sharply after the first week of September, poplar and willow trees along the old town lanes turn gold, and the light on Namgyal Tsemo at sunset is extraordinary. Prices soften. Highway still open.",
                      },
                      {
                        season: "Nov – April",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Winter — flight only",
                        text: "Manali and Srinagar highways close; Leh reachable only by flight, weather permitting. Night temperatures fall to -15°C to -25°C. Most guesthouses and cafés close. A stark, near-empty town for winter specialists and the Chadar Trek crowd.",
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
                    <strong>Our pick:</strong> The first two weeks of
                    September. The bazaar is still fully open, the light
                    turns the old town gold in the evenings, and you'll get
                    Leh Palace and Shanti Stupa with a fraction of the peak
                    August crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Leh</h2>
                  <p>
                    Leh is the transport hub for the entire region — every
                    road, flight, and onward taxi in Ladakh routes through
                    here. Three approaches exist: fly in directly, or drive
                    overland via Manali or Srinagar as part of a longer trip.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Kushok Bakula Rimpochee Airport
                      (IXL) sits just 4 km south of town and is one of the
                      highest commercial airports in the world at roughly
                      3,256 m. IndiGo, Air India, Vistara, and SpiceJet run
                      daily flights from Delhi (around 1 hr 20 min) and
                      seasonal flights from Srinagar, Jammu, and Mumbai. This
                      is by far the fastest way in — but also the most
                      punishing on your body, since you go from near sea
                      level to 3,524 m in under two hours.
                    </li>
                    <li>
                      <strong>Overland via Manali (NH3):</strong> 479 km, 2–3
                      days including an acclimatisation stop at Jispa or
                      Sarchu. Crosses five high passes including Tanglang La
                      at 5,328 m. Open roughly mid-June to mid-October.
                    </li>
                    <li>
                      <strong>Overland via Srinagar (NH1):</strong> 434 km via
                      Zoji La and Kargil, with a gentler altitude curve than
                      the Manali route, making it easier on newcomers. Open
                      longer in the season, roughly April to November.
                    </li>
                    <li>
                      <strong>From the airport into town:</strong> Prepaid
                      taxis (₹300–₹500) and the airport shuttle cover the 15–20
                      minute run into central Leh. Most guesthouses in
                      Changspa and Old Town will also arrange a pickup.
                    </li>
                  </ul>
                  <p>
                    Full route breakdowns, permits, and a 14-day circuit
                    itinerary covering the wider region live in our{" "}
                    <Link href="/blog/leh-ladakh-road-trip-travel-guide">
                      Leh Ladakh road trip guide
                    </Link>
                    . This page assumes you've arrived and are ready to
                    explore the town.
                  </p>
                </section>

                {/* ── Acclimatisation ───────────────────────────────────── */}
                <section id="acclimatisation">
                  <h2>Acclimatisation in Leh — Read This Before Anything Else</h2>
                  <p>
                    This is the single most important section of this guide.
                    Leh sits at 3,524 metres, and if you've flown in from
                    Delhi or Mumbai, your body has just gained roughly 3,300
                    metres of elevation in under two hours. Acute Mountain
                    Sickness (AMS) is not a rare misfortune here — it is the
                    default outcome for anyone who ignores the basics, and it
                    sends visitors to Leh's hospital every single week of
                    peak season.
                  </p>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ The golden rule:</strong> Do nothing for your
                    first 24 hours in Leh. No sightseeing, no hikes, no
                    Khardung La "quick look," not even a brisk walk to the
                    market. Lie down, sip water, and let your body catch up.
                    Almost every serious AMS case in Leh traces back to
                    someone who felt "fine" and pushed through day one.
                  </div>
                  <ul>
                    <li>
                      <strong>Day 1 — total rest:</strong> Stay near your
                      guesthouse. Hydrate constantly (3–4 litres of water).
                      Eat light, carbohydrate-rich meals. Skip alcohol and
                      sleeping pills, both of which suppress breathing at
                      altitude.
                    </li>
                    <li>
                      <strong>Day 2 — gentle activity only:</strong> A slow
                      walk to Leh Market or Leh Palace is fine. Save Shanti
                      Stupa's steps and Namgyal Tsemo's climb for day 3.
                    </li>
                    <li>
                      <strong>Watch for symptoms:</strong> Headache, nausea,
                      loss of appetite, and mild breathlessness are common and
                      usually resolve with rest. Confusion, a persistent
                      cough, breathlessness at rest, or an inability to walk
                      in a straight line are emergencies — descend and seek
                      help immediately at SNM Hospital in Leh.
                    </li>
                    <li>
                      <strong>Diamox (acetazolamide):</strong> Many doctors
                      recommend starting 125 mg twice daily a day before you
                      fly in, continuing for the first 2–3 days. Discuss this
                      with your physician before travel — it's not for
                      everyone.
                    </li>
                    <li>
                      <strong>If you drove in via Manali or Srinagar:</strong>{" "}
                      You've already acclimatised gradually and generally need
                      less downtime in Leh itself — but symptoms can still
                      appear, especially if you pushed the drive too fast.
                    </li>
                  </ul>
                  <p>
                    The upside of Leh specifically: it's one of the easiest
                    places in Ladakh to acclimatise well, precisely because
                    there's so much low-effort, genuinely interesting stuff to
                    do at rest — a slow coffee in Changspa, a wander through
                    the bazaar, the palace at golden hour. You lose nothing by
                    taking it slow here.
                  </p>
                </section>

                {/* ── Getting Around ────────────────────────────────────── */}
                <section id="getting-around">
                  <h2>Getting Around Leh Town</h2>
                  <p>
                    Central Leh — the palace, the market, and the Changspa
                    guesthouse belt — is compact enough to cover almost
                    entirely on foot once you've acclimatised, which is also
                    the best way to see it.
                  </p>
                  <ul>
                    <li>
                      <strong>On foot:</strong> Leh Market to Leh Palace is a
                      10-minute uphill walk; Market to Changspa is about 15
                      minutes. Go slowly for your first few days — even flat
                      walking can leave you breathless at this altitude.
                    </li>
                    <li>
                      <strong>Auto-rickshaws and taxis:</strong> Useful for
                      Shanti Stupa, Sankar Gompa, or the airport. The Leh
                      Taxi Operators' Union runs a fixed-rate card — expect
                      ₹150–₹300 for most in-town hops.
                    </li>
                    <li>
                      <strong>Rental scooters and bikes:</strong> Widely
                      available in Changspa (₹800–₹1,500/day for a scooter,
                      more for an Enfield) once you're acclimatised — useful
                      for day trips to Thiksey, Hemis, or Shey without hiring
                      a driver.
                    </li>
                    <li>
                      <strong>Shared taxis and buses:</strong> J&K SRTC buses
                      run cheap routes out to Thiksey, Hemis, and Shey from
                      the main bus stand, if you're not in a hurry.
                    </li>
                  </ul>
                </section>

                {/* ── Top Things To Do ──────────────────────────────────── */}
                <section id="top-things">
                  <h2>Top Things to Do in Leh</h2>
                  <p>
                    Everything below sits within Leh town or a short taxi ride
                    of its centre — no permits, no long drives, just genuinely
                    worthwhile places woven into two or three unhurried days.
                  </p>

                  <section id="leh-palace">
                    <h3>Leh Palace</h3>
                    <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                        alt="Leh Palace rising above the old town, modelled on the Potala Palace"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      Built in the early 17th century by King Sengge Namgyal,{" "}
                      <strong>Leh Palace</strong> rises nine storeys above the
                      old town and is said to have inspired — or at least
                      shares clear architectural DNA with — the Potala Palace
                      in Lhasa, built decades later. The royal family
                      abandoned it in the mid-1800s after the Dogra invasion,
                      and it stood empty and crumbling for over a century
                      before the Archaeological Survey of India began
                      restoration work.
                    </p>
                    <p>
                      Today the interiors are mostly bare — this is a
                      building you visit for its bones and its view rather
                      than furnished rooms — but a small museum on the upper
                      floors displays jewellery, ceremonial dress, and
                      thangkas from the royal collection. The real reward is
                      stepping onto the upper terraces: the whole Indus
                      Valley opens out below you, with the old town's flat
                      mudbrick roofs, prayer flags, and poplar lines leading
                      the eye out to the mountains.
                    </p>
                    <ul>
                      <li>
                        <strong>Entry:</strong> ₹25 for Indians, ₹300 for
                        foreign nationals; camera fee extra
                      </li>
                      <li>
                        <strong>Timings:</strong> Sunrise to sunset daily,
                        roughly 7 AM – 6 PM
                      </li>
                      <li>
                        <strong>Time needed:</strong> 45–60 minutes
                      </li>
                      <li>
                        <strong>Best light:</strong> Early morning or an hour
                        before sunset, when the whitewashed walls turn amber
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Skip the steep direct
                      staircase from the market on your first day — take the
                      longer, gentler path around the back if you're still
                      settling into the altitude. The climb is genuinely
                      tougher than it looks at 3,500 m.
                    </div>
                  </section>

                  <section id="leh-market">
                    <h3>Leh Market & Old Town</h3>
                    <p>
                      <strong>Leh Market</strong> (Main Bazaar) has been a
                      trading post since the town's days as a Silk Road stop
                      between Kashmir, Tibet, and Central Asia, and it still
                      carries that layered, cross-border feel — Kashmiri
                      shawl sellers next to Ladakhi jewellery stalls next to
                      Tibetan refugee craft cooperatives. It's pedestrianised
                      for most of the day, lined with poplar and willow
                      trees, and easily the liveliest place in town come
                      evening.
                    </p>
                    <p>
                      Behind the main bazaar, the <strong>old town</strong>{" "}
                      unfolds in a tangle of narrow lanes climbing toward the
                      palace — mudbrick houses, small chortens, prayer wheels
                      built into courtyard walls, and the occasional startled
                      goat. It's a genuinely rewarding place to just wander
                      with no destination, especially in the golden hour
                      before sunset when residents sit out on their steps and
                      the light catches the whitewashed walls.
                    </p>
                    <ul>
                      <li>
                        <strong>Buy here:</strong> Pashmina shawls, Ladakhi
                        turquoise and coral jewellery, apricot products,
                        prayer flags, Tibetan singing bowls, dried fruit and
                        nuts
                      </li>
                      <li>
                        <strong>Best time:</strong> Early evening, 5–8 PM,
                        when stalls are fully open and the crowd is thickest
                        but not overwhelming
                      </li>
                      <li>
                        <strong>Bargain, but fairly:</strong> Prices are
                        already modest by Indian city standards; most sellers
                        depend heavily on the short tourist season
                      </li>
                    </ul>
                  </section>

                  <section id="shanti-stupa">
                    <h3>Shanti Stupa</h3>
                    <p>
                      Perched on a hilltop above Changspa,{" "}
                      <strong>Shanti Stupa</strong> is a gleaming white-domed
                      Buddhist monument built in 1991 by Japanese Buddhist
                      monks as part of a global "peace pagoda" movement,
                      dedicated to the spread of world peace and to mark
                      2,500 years of Buddhism. Gilded panels around the base
                      depict scenes from the Buddha's life and his previous
                      incarnations.
                    </p>
                    <p>
                      What draws most visitors, though, is the view. From the
                      stupa's terrace you get one of the finest panoramas in
                      Leh — the whole town spread out below, Leh Palace and
                      Namgyal Tsemo across the valley, and the Stok Kangri
                      range beyond. Sunrise and sunset are both spectacular
                      here; sunset draws bigger crowds, sunrise gets you the
                      place nearly to yourself.
                    </p>
                    <ul>
                      <li>
                        <strong>Getting there:</strong> A steep flight of
                        roughly 500 steps from Changspa, or a short taxi ride
                        up the motorable road on the far side — take the taxi
                        on your first couple of days
                      </li>
                      <li>
                        <strong>Entry:</strong> Free
                      </li>
                      <li>
                        <strong>Timings:</strong> Open 5 AM – 9 PM;
                        illuminated after dark
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Altitude note:</strong> Those 500 steps gain
                      real elevation fast. Do not attempt the climb on foot
                      until you've had at least two full days to acclimatise
                      — take the road route by taxi instead.
                    </div>
                  </section>

                  <section id="namgyal-tsemo">
                    <h3>Namgyal Tsemo Fort & Gompa</h3>
                    <p>
                      Higher still above Leh Palace, on the very crown of the
                      hill, sits <strong>Namgyal Tsemo</strong> — a 16th
                      century fort and monastery built by King Tashi Namgyal,
                      predating the palace below it. Inside the small gompa
                      is a two-storey gilded statue of Maitreya Buddha
                      (the Buddha of the future), along with older thangkas
                      and a small collection of weapons and armour from the
                      old Namgyal dynasty.
                    </p>
                    <p>
                      It's a genuinely tough climb — steeper and longer than
                      the palace approach — but the reward is the single best
                      view over Leh: the entire old town, the palace below
                      you, the Indus Valley stretching out, and on a clear day
                      the peaks around Stok visible across the valley. Very
                      few day-tripping tourists make it up here, which keeps
                      it peaceful.
                    </p>
                    <ul>
                      <li>
                        <strong>Access:</strong> On foot from Leh Palace
                        (steep, 20–30 minutes further) or by a rough
                        motorable road around the back of the hill
                      </li>
                      <li>
                        <strong>Best for:</strong> Day 3 or later — this is
                        not a first-day activity at 3,500 m+
                      </li>
                      <li>
                        <strong>Timings:</strong> Roughly 7 AM – 6 PM
                      </li>
                    </ul>
                  </section>

                  <section id="hall-of-fame">
                    <h3>Hall of Fame</h3>
                    <p>
                      Run by the Indian Army, the <strong>Hall of Fame</strong>{" "}
                      is a war memorial and museum a short drive from central
                      Leh, dedicated to soldiers who fought in the 1962, 1965,
                      and 1971 wars, and to the Kargil War of 1999. Exhibits
                      cover the extreme conditions of high-altitude warfare —
                      Siachen Glacier gear, captured Pakistani equipment,
                      photographs from Kargil — alongside displays on Ladakhi
                      culture, flora, and fauna.
                    </p>
                    <p>
                      It's a sobering, well-curated stop that gives real
                      context to how militarily significant — and physically
                      brutal — this border region is, something easy to
                      forget amid the scenery elsewhere in Ladakh.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from centre:</strong> ~4 km, 10–15
                        minutes by taxi
                      </li>
                      <li>
                        <strong>Entry:</strong> Nominal ticket fee, camera fee
                        extra
                      </li>
                      <li>
                        <strong>Timings:</strong> Closed Mondays and during
                        winter months (typically Dec–Feb)
                      </li>
                    </ul>
                  </section>

                  <section id="sankar-gompa">
                    <h3>Sankar Gompa</h3>
                    <p>
                      A small, active <strong>Gelugpa</strong> (Yellow Hat)
                      monastery about 3 km north of the main bazaar, affiliated
                      with the larger Spituk Monastery. Sankar Gompa is easy
                      to combine with a Changspa evening — a 20-minute walk
                      or short taxi — and rarely sees the crowds of the
                      bigger monasteries further out. Its main hall holds a
                      striking statue of Avalokiteshvara with a thousand arms
                      and eyes, along with well-preserved wall paintings.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> ~3 km from Leh Market
                      </li>
                      <li>
                        <strong>Entry:</strong> Modest donation/entry fee
                      </li>
                      <li>
                        <strong>Best time:</strong> Late afternoon, when it's
                        quiet and monks may be around for a chat
                      </li>
                    </ul>
                  </section>

                  <section id="leh-mosque">
                    <h3>Leh Jama Masjid</h3>
                    <p>
                      Standing right at the entrance to the main bazaar, the{" "}
                      <strong>Jama Masjid</strong> of Leh is a reminder that
                      this town's Silk Road past brought more than just
                      Buddhist influence — a significant Muslim trading
                      community, largely of Kashmiri and Central Asian
                      descent, has lived here for centuries. The mosque's
                      pale green-and-white facade and minarets are a
                      distinctive landmark at the market's edge, and its call
                      to prayer is one of the everyday sounds of the bazaar.
                    </p>
                    <p>
                      Non-Muslim visitors are generally welcome to view the
                      exterior and courtyard respectfully; dress modestly and
                      avoid entering during prayer times unless invited.
                    </p>
                  </section>
                </section>

                {/* ── Day Trips ─────────────────────────────────────────── */}
                <section id="day-trips">
                  <h2>Day Trips from Leh</h2>
                  <p>
                    Once you're acclimatised, Leh makes an excellent base for
                    a string of easy half-day and full-day trips — none of
                    them requiring an Inner Line Permit, since they sit
                    outside the restricted border zones. Each of these has a
                    dedicated guide of its own on Kudozz Club; here's the
                    short version to help you plan your days.
                  </p>
                  <div className="space-y-4 my-6">
                    {[
                      {
                        name: "Thiksey Monastery",
                        distance: "12 km, ~30 min",
                        detail:
                          "The most photogenic monastery near Leh — twelve storeys tiered up a hillside like a miniature Potala, with a 15-metre Maitreya Buddha inside. Time it for the 6 AM morning prayers if you can manage an early start.",
                        badge: "Half-day",
                        badgeColor: "bg-forest-100 text-forest-700",
                      },
                      {
                        name: "Hemis Monastery",
                        distance: "45 km, ~1.5 hr",
                        detail:
                          "Ladakh's largest and wealthiest monastery, tucked in a side valley. Combine it with Shey Palace and Thiksey for a full loop day. Hosts the region's biggest festival, with masked cham dances, in June or July.",
                        badge: "Full-day loop",
                        badgeColor: "bg-amber-100 text-amber-700",
                      },
                      {
                        name: "Magnetic Hill",
                        distance: "30 km, ~45 min",
                        detail:
                          "A famous optical-illusion stretch of road where vehicles left in neutral appear to roll gently uphill — a fun, brief stop, not a destination in itself.",
                        badge: "Quick stop",
                        badgeColor: "bg-sky-100 text-sky-700",
                      },
                      {
                        name: "Sangam (Zanskar–Indus Confluence)",
                        distance: "35 km, ~1 hr",
                        detail:
                          "Just past Magnetic Hill, the turquoise Zanskar River meets the murkier green Indus, running side by side for hundreds of metres without mixing. One of the most photogenic, most overlooked spots on the Leh–Kargil road.",
                        badge: "Combine with Magnetic Hill",
                        badgeColor: "bg-rose-100 text-rose-700",
                      },
                    ].map((d) => (
                      <div
                        key={d.name}
                        className="flex gap-4 bg-white border border-stone-200 rounded-xl p-5 hover:border-forest-200 hover:shadow-sm transition-all"
                      >
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                            <h4
                              className="font-bold text-stone-900"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {d.name}
                            </h4>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${d.badgeColor}`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {d.badge}
                            </span>
                          </div>
                          <span
                            className="text-xs text-stone-400 font-medium block mb-1"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {d.distance}
                          </span>
                          <p
                            className="text-sm text-stone-600 leading-relaxed m-0"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {d.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p>
                    Also within easy reach: <strong>Shey Palace</strong>{" "}
                    (former summer capital of the Namgyal kings, 15 km) and{" "}
                    <strong>Stok Palace</strong> (the current royal family's
                    residence, across the Indus, 15 km). For Pangong Tso,
                    Nubra Valley, and Khardung La — which do require permits
                    and are best planned as overnight trips — see our{" "}
                    <Link href="/blog/leh-ladakh-road-trip-travel-guide">
                      full Leh Ladakh road trip guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Leh</h2>
                  <p>
                    Leh has by far the widest and most reliable accommodation
                    in Ladakh, from backpacker dorms to boutique heritage
                    stays. The main clusters are Changspa (backpacker and
                    café hub, walkable to Shanti Stupa), the Old Town/Market
                    area (closest to the palace, more local feel), and Fort
                    Road/Sheynam (mid-range hotels, quieter).
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🎒",
                        range: "₹500–₹1,500/night",
                        picks: [
                          "Zostel Leh",
                          "Old Leh House (guesthouse)",
                          "Changspa lane guesthouses",
                          "Backpacker hostels near Moti Market",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹5,000/night",
                        picks: [
                          "Hotel Ladakh Palace",
                          "Lha-Ri-Sa Resort",
                          "Hotel Kanglachen",
                          "Fort Road guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹8,000–₹25,000+/night",
                        picks: [
                          "The Grand Dragon Ladakh",
                          "Lchang Nang Retreat",
                          "The Zen Ladakh",
                          "Nimmu House (day trip out of town)",
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
                  <p>
                    Book at least 3–4 weeks ahead for July–August travel.
                    Changspa is the best base for first-timers — walkable to
                    the market, close to Shanti Stupa, and packed with cafés
                    for those slow acclimatisation days.
                  </p>
                </section>

                {/* ── Cafes & Food ──────────────────────────────────────── */}
                <section id="cafes-food">
                  <h2>Cafés & Food in Leh</h2>
                  <p>
                    Leh's café scene is one of its quiet highlights, built up
                    over decades of backpacker and overlander traffic —
                    genuinely excellent coffee and baked goods sit alongside
                    hearty Tibetan and Ladakhi staples designed for a body
                    working hard at altitude.
                  </p>
                  <ul>
                    <li>
                      <strong>Skyu:</strong> Ladakh's answer to comfort food —
                      thick, hand-pinched pasta shapes simmered in a root
                      vegetable and meat or lentil broth. Deeply warming and
                      the thing to order on a cold evening.
                    </li>
                    <li>
                      <strong>Thukpa & momos:</strong> Available at nearly
                      every restaurant in Leh, Tibetan-style noodle soup and
                      steamed dumplings are the reliable go-to. Tibetan
                      Kitchen and Lamayuru Restaurant near the market are
                      long-standing local favourites.
                    </li>
                    <li>
                      <strong>Butter tea (gur gur chai):</strong> Salted,
                      churned with yak butter — an acquired taste for most
                      first-timers, but worth trying at least once, ideally
                      at a monastery or homestay rather than a tourist café.
                    </li>
                    <li>
                      <strong>Apricot everything:</strong> Ladakh grows some
                      of India's finest apricots. Jam, dried fruit, and
                      apricot oil are sold throughout the market — buy direct
                      from stalls rather than packaged tourist shops.
                    </li>
                    <li>
                      <strong>Changspa café strip:</strong> This is where
                      Leh's café culture really lives — Bon Appetit for
                      continental food and cakes, The Bookshop Café for good
                      coffee and a quiet reading corner, Café Jeevan for
                      breakfasts, and a string of German-bakery-style spots
                      serving banana bread and cinnamon rolls to travellers
                      resting up between altitude gains.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for Leh</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                          ["Accommodation/night", "₹600", "₹2,500", "₹9,000"],
                          ["Food/day", "₹400", "₹800", "₹1,800"],
                          [
                            "Local taxi/day (sightseeing)",
                            "₹500",
                            "₹1,500",
                            "₹3,000",
                          ],
                          ["Monument entries/day", "₹100", "₹300", "₹500"],
                          ["Café & coffee/day", "₹150", "₹400", "₹800"],
                          [
                            "Daily total (approx)",
                            "₹1,750",
                            "₹5,500",
                            "₹15,100",
                          ],
                          [
                            "3-day Leh town total",
                            "₹5,300",
                            "₹16,500",
                            "₹45,000+",
                          ],
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
                    * Excludes flights to/from Leh (₹4,000–₹12,000 one-way
                    from Delhi) and any onward permits/costs for Pangong,
                    Nubra, or other restricted areas outside town.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Leh</h2>
                  <ul>
                    <li>
                      <strong>No permit needed for Leh town itself:</strong>{" "}
                      The Inner Line Permit is only required if you're
                      heading onward to Pangong, Nubra, Tso Moriri, or other
                      restricted border areas. You can explore Leh freely
                      without one.
                    </li>
                    <li>
                      <strong>Cash still matters:</strong> ATMs in Leh (SBI,
                      PNB, J&K Bank) generally work but can run dry during
                      peak season weekends. Carry some cash as backup, though
                      most market shops and cafés now accept UPI.
                    </li>
                    <li>
                      <strong>Sun protection is non-negotiable:</strong> UV
                      exposure at 3,500 m is intense even on a mild-feeling
                      day. SPF 50+, sunglasses, and lip balm from day one.
                    </li>
                    <li>
                      <strong>Layer up, even in summer:</strong> Daytime highs
                      can hit 25°C but evenings drop sharply once the sun is
                      behind the mountains. Pack a proper jacket even for a
                      July trip.
                    </li>
                    <li>
                      <strong>Mobile connectivity:</strong> BSNL and Airtel
                      postpaid SIMs work most reliably in Leh; Jio coverage is
                      patchy. Prepaid SIMs from other states typically don't
                      activate here — sort connectivity before you arrive if
                      possible.
                    </li>
                    <li>
                      <strong>Respect monastery etiquette:</strong> Remove
                      shoes before entering prayer halls, ask before
                      photographing monks or interiors, and dress modestly —
                      shoulders and knees covered.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-6">
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
                          "Rest completely on your first day, no matter how fine you feel",
                          "Walk the old town lanes behind the palace at golden hour",
                          "Take a taxi up to Shanti Stupa for your first two visits",
                          "Try Skyu and butter tea at least once",
                          "Visit Leh Market in the early evening when it's liveliest",
                          "Carry water and sunscreen on every outing",
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
                          "Climb to Shanti Stupa or Namgyal Tsemo on foot on day one",
                          "Drink alcohol in your first 24–48 hours in Leh",
                          "Ignore a headache — treat it as a warning, not an inconvenience",
                          "Book a Khardung La or Pangong trip for day one or two",
                          "Assume every SIM will work — check connectivity beforehand",
                          "Skip layers because it 'felt warm' during the day",
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
                  "Leh",
                  "Ladakh",
                  "Old Town",
                  "High Altitude",
                  "Monasteries",
                  "Leh Palace",
                  "Bazaar",
                  "India",
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

              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Leh"
              />

              <RelatedPostsGrid currentSlug="leh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="leh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
