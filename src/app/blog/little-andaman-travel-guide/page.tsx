// src/app/blog/little-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Little Andaman Travel Guide: Butler Bay, Surfing & Tips",
  description:
    "Complete Little Andaman guide — Butler Bay's surf breaks, White Surf and Whisper Wave waterfalls, and the long ferry crossing from Port Blair. Best time, how to reach, and what to expect on India's most remote surf island.",
  keywords:
    "Little Andaman travel guide, Butler Bay Beach, Little Andaman surfing, White Surf Waterfall, Whisper Wave Waterfall, Little Andaman ferry, Little Andaman how to reach, Onge tribe Andaman, Netaji Nagar Beach, offbeat Andaman islands, Little Andaman itinerary",
  openGraph: {
    title: "Little Andaman Travel Guide: Butler Bay, Surfing & Tips",
    description:
      "India's most consistent surf break, two forest waterfalls, and a six-to-eight-hour ferry crossing — Little Andaman is the Andamans' furthest-flung island stop.",
    url: "https://club.kudozz.in/blog/little-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise water and white sand along Little Andaman's coastline, near Butler Bay",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Andaman Travel Guide: Butler Bay, Surfing & Tips",
    description:
      "India's most consistent surf break and two forest waterfalls — a guide to the Andamans' furthest-flung island.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/little-andaman-travel-guide",
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
          headline: "Little Andaman Travel Guide: Butler Bay, Surfing & Tips",
          description:
            "Complete Little Andaman guide — Butler Bay's surf breaks, White Surf and Whisper Wave waterfalls, and the long ferry crossing from Port Blair.",
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
            "@id": "https://club.kudozz.in/blog/little-andaman-travel-guide",
          },
          keywords:
            "Little Andaman, Butler Bay Beach, surfing, White Surf Waterfall, Whisper Wave Waterfall, Onge tribe",
          about: {
            "@type": "Place",
            name: "Little Andaman",
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
                name: "Little Andaman",
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
    q: "How do I reach Little Andaman?",
    a: "The only way in is by government ferry from Port Blair, a crossing of roughly 6-8 hours depending on the vessel and sea conditions. There's no airport, so unlike Havelock or Neil, you can't shortcut the journey — schedules also run less frequently, so it's worth checking current timings before finalising the rest of your itinerary.",
  },
  {
    q: "Is Little Andaman good for surfing beginners?",
    a: "Butler Bay is best known for its more experienced, consistent breaks rather than gentle beginner waves, and it draws a small community of regular surfers rather than resort-style surf schools. If you're new to surfing, expect a more self-directed experience than at established surf towns elsewhere in India — bring or arrange your own board in advance.",
  },
  {
    q: "How many days do I need for Little Andaman?",
    a: "Given the length of the ferry crossing alone, most visitors plan for at least 2-3 days to make the trip worthwhile — enough time for Butler Bay, both waterfalls, and a buffer day in case ferries are delayed or rescheduled, which does happen.",
  },
  {
    q: "Can I visit the Onge tribal areas?",
    a: "No. The Onge, one of the indigenous peoples of the Andamans, live in a protected reserve on Little Andaman that is off-limits to visitors. This is a legal protection, not a tourist inconvenience — respect it fully and don't attempt to enter reserve areas or seek out contact.",
  },
  {
    q: "Are the waterfalls hard to reach?",
    a: "No — both White Surf Waterfall and Whisper Wave Waterfall are reached via short, manageable forest walks from the main road, not full-day treks. Comfortable footwear is enough; neither requires a guide, though hiring one locally is straightforward if you'd prefer it.",
  },
  {
    q: "What's the accommodation like on Little Andaman?",
    a: "Basic by Andaman standards — a handful of guesthouses and simple lodges rather than the resorts found on Havelock, with limited advance booking infrastructure. It suits travellers comfortable with a slower, less curated trip rather than those expecting beach-resort comfort.",
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
  { id: "introduction", title: "Andaman's Furthest Outpost", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "butler-bay", title: "Butler Bay & Surfing", level: 2 },
  { id: "waterfalls", title: "The Forest Waterfalls", level: 2 },
  { id: "onge-reserve", title: "The Onge Reserve", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Where to Stay", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LittleAndamanGuidePage() {
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
              alt="Turquoise water and white sand along Little Andaman's coastline, near Butler Bay"
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
                { label: "Little Andaman", href: null },
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
                "Little Andaman",
                "Butler Bay",
                "Surfing",
                "Waterfalls",
                "Offbeat Islands",
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
              Little Andaman: Butler Bay, Surfing & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A six-to-eight-hour ferry crossing from Port Blair, India's most
              consistent surf break, and two forest waterfalls — Little
              Andaman is the furthest-flung stop most travellers ever add to
              an Andaman itinerary.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "South of South Andaman",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>Andaman's Furthest Outpost</h2>
                  <p>
                    <strong>Little Andaman</strong> is a separate island south
                    of South Andaman, reached only by a long government ferry
                    crossing from{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>{" "}
                    that typically runs 6-8 hours depending on the vessel and
                    sea conditions. There's no airport and no shortcut — which
                    is exactly why it stays quieter and less developed than
                    the more familiar Havelock-Neil circuit most first-time
                    visitors stick to.
                  </p>
                  <p>
                    What draws people out here is fairly specific: Butler Bay,
                    widely considered one of India's best and most consistent
                    surf breaks, plus two forest waterfalls reached by easy
                    walks rather than full-day treks. It isn't a place with a
                    long list of sights — it's a place to slow down
                    considerably, for travellers who have the extra days to
                    spare and want something further off the beaten path.
                  </p>
                  <p>
                    Little Andaman is also home to the indigenous Onge people,
                    whose reserve areas on the island are legally protected
                    and closed to visitors — a fact worth understanding before
                    you go, covered in more detail further down this guide.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏄</span> Little Andaman at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South of South Andaman",
                        },
                        {
                          icon: "⛴️",
                          label: "From Port Blair",
                          value: "~6-8 hrs by ferry",
                        },
                        {
                          icon: "🏄",
                          label: "Known For",
                          value: "Butler Bay surf, waterfalls",
                        },
                        {
                          icon: "🌊",
                          label: "Best Time",
                          value: "Nov - Apr",
                        },
                        {
                          icon: "🛏️",
                          label: "Stay Type",
                          value: "Basic guesthouses",
                        },
                        {
                          icon: "📅",
                          label: "Min. Days",
                          value: "2-3 days",
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
                  <h2>Best Time to Visit Little Andaman</h2>
                  <p>
                    As with the rest of the Andamans, the calendar here is
                    split cleanly between a dry, sailable season and a
                    monsoon stretch that disrupts ferries and surf
                    conditions alike.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best overall window",
                        text: "Calm seas make the long ferry crossing far more comfortable, and conditions at Butler Bay are generally considered at their best for surfing.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Still good, warmer",
                        text: "Good weather continues with rising temperatures — a solid alternative window before the pre-monsoon swell picks up.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Rough seas frequently disrupt or cancel the Port Blair ferry entirely, and the waterfalls can be harder to reach safely.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌊",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Transitional, check ferries",
                        text: "Seas are settling but schedules can still be inconsistent — confirm current ferry timings before booking travel dates.",
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
                    <strong>Our pick:</strong> December to February — the
                    calmest seas for the crossing, the most reliable surf at
                    Butler Bay, and comfortable temperatures for the waterfall
                    walks.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Little Andaman</h2>
                  <p>
                    There's exactly one practical way in, so plan around it
                    rather than around flexibility.
                  </p>
                  <ul>
                    <li>
                      <strong>By Government Ferry:</strong> The only route —
                      departing from{" "}
                      <Link href="/blog/port-blair-andaman-travel-guide">
                        Port Blair
                      </Link>{" "}
                      and taking roughly 6-8 hours depending on the vessel and
                      sea state. Services run less frequently than the
                      Havelock/Neil ferries, so check the current schedule
                      well before finalising dates.
                    </li>
                    <li>
                      <strong>No airport:</strong> Unlike Havelock or Neil,
                      there's no faster alternative — factor the crossing
                      time into your overall itinerary from the start.
                    </li>
                    <li>
                      <strong>Getting around on the island:</strong> Local
                      transport is limited — hired scooters or pre-arranged
                      transport through your guesthouse are the most reliable
                      ways to reach Butler Bay and the waterfalls.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Build in a buffer day on
                    either end of your Little Andaman trip — ferry delays and
                    rescheduling due to sea conditions aren't unusual, and
                    they're far more disruptive here than on shorter,
                    higher-frequency routes.
                  </div>
                </section>

                {/* ── Butler Bay ─────────────────────────────────────────── */}
                <section id="butler-bay">
                  <h2>Butler Bay & Surfing</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Waves breaking along the coastline near Butler Bay, Little Andaman"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Butler Bay Beach</strong> is the reason most
                    visitors make the long crossing at all — it's widely
                    regarded as one of India's best and most consistent surf
                    spots, drawing a small but dedicated community of regular
                    surfers, particularly during the peak winter season.
                  </p>
                  <p>
                    This isn't a resort-style surf town with schools lining
                    the beach — expect a more self-directed experience.
                    Bringing or arranging your own board in advance is
                    strongly recommended, since rental infrastructure is
                    limited compared to established Indian surf destinations
                    on the mainland.
                  </p>
                  <p>
                    Beyond the surf, Butler Bay's long stretch of coastline is
                    simply a good place to spend an unhurried day — quiet,
                    largely undeveloped, and a world away from the busier
                    beaches of Havelock.
                  </p>
                </section>

                {/* ── Waterfalls ─────────────────────────────────────────── */}
                <section id="waterfalls">
                  <h2>The Forest Waterfalls</h2>
                  <p>
                    Little Andaman's two named waterfalls — <strong>White
                    Surf Waterfall</strong> and <strong>Whisper Wave
                    Waterfall</strong> — are both reached via short,
                    manageable walks through forest from the main road,
                    rather than demanding full-day treks.
                  </p>
                  <p>
                    Comfortable footwear is really all you need; neither
                    requires a guide, though hiring one locally is
                    straightforward if you'd rather not navigate on your own.
                    Both make for an easy half-day outing paired with a
                    Netaji Nagar Beach stop nearby.
                  </p>
                </section>

                {/* ── Onge Reserve ───────────────────────────────────────── */}
                <section id="onge-reserve">
                  <h2>The Onge Reserve</h2>
                  <p>
                    Little Andaman is home to the <strong>Onge</strong>, one
                    of the indigenous peoples of the Andaman Islands, who live
                    within a legally protected reserve on the island. These
                    areas are entirely off-limits to visitors — this is a
                    legal protection designed to safeguard the community, not
                    a tourist inconvenience to work around.
                  </p>
                  <p>
                    Respect this fully: stick to the recognised tourist
                    routes and areas covered in this guide, and don't attempt
                    to enter reserve areas or seek out contact with Onge
                    communities under any circumstances.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <p>
                    Given the length of the ferry crossing, it's worth
                    planning for at least two full days on the island itself
                    to make the trip out worthwhile.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Butler Bay",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive by ferry from Port Blair, settle in",
                          "Afternoon at Butler Bay — surf or simply relax",
                          "Sunset along the beach",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Waterfalls & Netaji Nagar Beach",
                        color: "bg-forest-600",
                        activities: [
                          "Morning walk to White Surf Waterfall",
                          "Continue to Whisper Wave Waterfall",
                          "Afternoon at Netaji Nagar Beach",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Buffer Day / Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Extra surf session at Butler Bay if conditions allow",
                          "Build in slack for possible ferry rescheduling",
                          "Return ferry to Port Blair",
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

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food & Where to Stay</h2>
                  <p>
                    Little Andaman is genuinely basic by Andaman standards —
                    a handful of guesthouses and simple lodges rather than
                    resorts, with limited advance-booking infrastructure
                    compared to Havelock or Neil.
                  </p>
                  <ul>
                    <li>
                      <strong>Guesthouse meals:</strong> Most accommodation
                      offers simple home-style meals, often the most
                      reliable food option given how few standalone
                      restaurants exist.
                    </li>
                    <li>
                      <strong>Local eateries:</strong> A modest spread of
                      basic local dhabas serving rice, fish curry, and
                      everyday South Indian and Bengali-influenced fare.
                    </li>
                    <li>
                      <strong>Stock up before you go:</strong> Bring snacks,
                      sunscreen, and anything specific you'll want — shopping
                      options on the island are limited.
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
                          [
                            "Ferry (Port Blair round trip)",
                            "₹1,200",
                            "₹1,200",
                            "₹1,200",
                          ],
                          [
                            "Guesthouse/night",
                            "₹800",
                            "₹1,800",
                            "₹3,000",
                          ],
                          ["Food/day", "₹400", "₹700", "₹1,200"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹600",
                            "₹1,500",
                          ],
                          ["Surfboard rental (if needed)", "₹500", "₹800", "₹1,200"],
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
                    * Figures are per person, per day where applicable. See
                    our{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Islands travel guide
                    </Link>{" "}
                    for a full multi-island budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Little Andaman</h2>
                  <ul>
                    <li>
                      <strong>Confirm ferry schedules in advance:</strong>{" "}
                      Services are less frequent than the Havelock/Neil
                      routes and more prone to weather-related changes.
                    </li>
                    <li>
                      <strong>Bring your own surfboard if possible:</strong>{" "}
                      Rental infrastructure at Butler Bay is limited compared
                      to mainland surf destinations.
                    </li>
                    <li>
                      <strong>Never enter Onge reserve areas:</strong> These
                      are legally protected — respect boundaries fully.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs and card payment
                      options are limited on the island.
                    </li>
                    <li>
                      <strong>Book accommodation ahead where possible:</strong>{" "}
                      Options are few, and last-minute availability isn't
                      guaranteed.
                    </li>
                    <li>
                      <strong>Pair it with a longer Andaman trip:</strong> The
                      travel time only makes sense as part of a wider circuit
                      — see the full{" "}
                      <Link href="/blog/andaman-islands-travel-guide">
                        Andaman Islands guide
                      </Link>{" "}
                      for how to plan the rest of your route.
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
                          "Build in a buffer day for ferry delays",
                          "Bring your own surf gear if you can",
                          "Visit Nov-Feb for the calmest crossing",
                          "Carry enough cash for your whole stay",
                          "Respect the Onge reserve boundaries fully",
                          "Book guesthouse stays ahead of arrival",
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
                          "Assume an airport shortcut exists — there isn't one",
                          "Book a tight, buffer-free schedule",
                          "Expect resort-style comfort or dining",
                          "Enter or approach Onge reserve areas",
                          "Travel during monsoon months (May-Sep)",
                          "Rely on card payments over cash",
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
                  "Little Andaman",
                  "Butler Bay",
                  "Surfing",
                  "Waterfalls",
                  "Onge Tribe",
                  "Offbeat Islands",
                  "Andaman",
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

              <RelatedPostsGrid currentSlug="little-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="little-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
