// src/app/blog/neil-island-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Shaheed Dweep (Neil Island) Travel Guide: Beaches & Tips",
  description:
    "Complete Shaheed Dweep (Neil Island) guide — Bharatpur Beach, Laxmanpur's natural rock bridge, Sitapur sunrise point, how to reach it from Port Blair or Havelock, and a full day plan.",
  keywords:
    "Neil Island, Shaheed Dweep, Bharatpur Beach, Laxmanpur Beach, Neil Island Howrah Bridge, Sitapur Beach Neil Island, Neil Island ferry, Neil Island vs Havelock, Neil Island Andaman, Neil Island one day itinerary, Andaman Islands, Neil Island timings, Neil Island how to reach, Neil Island Andaman travel guide FAQ",
  openGraph: {
    title: "Shaheed Dweep (Neil Island) Travel Guide: Beaches & Tips",
    description:
      "Andaman's slower, quieter island — Bharatpur Beach, a natural rock bridge at Laxmanpur, and a village pace that makes Neil Island the perfect wind-down after Havelock.",
    url: "https://club.kudozz.in/blog/neil-island-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise Andaman Sea water and white sand, evoking Neil Island's Bharatpur and Laxmanpur beaches",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaheed Dweep (Neil Island) Travel Guide: Beaches & Tips",
    description:
      "Bharatpur Beach, Laxmanpur's rock bridge, and a village pace — the complete Neil Island guide.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/neil-island-andaman-travel-guide",
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
          headline: "Shaheed Dweep (Neil Island) Travel Guide: Beaches & Tips",
          description:
            "Complete Shaheed Dweep (Neil Island) guide — Bharatpur Beach, Laxmanpur's natural rock bridge, Sitapur sunrise point, how to reach it from Port Blair or Havelock, and a full day plan.",
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
            "@id": "https://club.kudozz.in/blog/neil-island-andaman-travel-guide",
          },
          keywords:
            "Neil Island, Shaheed Dweep, Bharatpur Beach, Laxmanpur Beach, Sitapur Beach, Howrah Bridge Neil Island, Andaman ferry",
          about: {
            "@type": "Place",
            name: "Shaheed Dweep (Neil Island)",
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
                name: "Shaheed Dweep (Neil Island)",
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
    q: "Is Neil Island the same as Shaheed Dweep?",
    a: "Yes — the Government of India officially renamed Neil Island to Shaheed Dweep ('Martyr's Island') in 2018, alongside similar renamings across the archipelago. In everyday use, though, almost everyone — ferry counters, hotel listings, locals — still says 'Neil Island,' so both names work interchangeably when planning your trip.",
  },
  {
    q: "How do I reach Neil Island?",
    a: "Government and private ferries run from Port Blair to Neil Island in roughly 2 hours, and from Havelock (Swaraj Dweep) in a shorter hop of under an hour — making it easy to combine both islands without backtracking through Port Blair. Book ferry tickets a few days ahead in peak season (December-January), since seats sell out.",
  },
  {
    q: "Is one day enough for Neil Island?",
    a: "A full day lets you cover Bharatpur Beach, Laxmanpur Beach and its natural rock bridge, and Sitapur Beach comfortably, especially if you rent a scooter or auto for the day. That said, most visitors find an overnight stay worthwhile — Neil Island's slower pace and quiet sunset/sunrise beaches are best appreciated without a ferry departure looming.",
  },
  {
    q: "What is the 'Howrah Bridge' on Neil Island?",
    a: "It's a natural rock formation at Laxmanpur Beach — an arch carved by wave erosion that visually echoes Kolkata's Howrah Bridge, hence the nickname. It's best seen and photographed at low tide, when more of the rock base is exposed.",
  },
  {
    q: "Which is better, Neil Island or Havelock?",
    a: "They serve different purposes. Havelock (Swaraj Dweep) has the better-known beaches, the wider dive scene, and more accommodation choice. Neil Island is smaller, quieter, and more village-like — better suited to slowing down after Havelock than as the centrepiece of a trip.",
  },
  {
    q: "Can I do water sports on Neil Island?",
    a: "Yes, mainly at Bharatpur Beach, which offers jet skiing, banana boat rides, and glass-bottom boat trips over nearby coral. Laxmanpur and Sitapur are quieter, better suited to walking and watching the sunset or sunrise rather than activities.",
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
  { id: "introduction", title: "Andaman's Quiet Island", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "bharatpur", title: "Bharatpur Beach", level: 2 },
  { id: "laxmanpur", title: "Laxmanpur Beach & the Rock Bridge", level: 2 },
  { id: "sitapur", title: "Sitapur Beach", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NeilIslandGuidePage() {
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
              alt="Turquoise Andaman Sea water and white sand, evoking Neil Island's Bharatpur and Laxmanpur beaches"
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
                { label: "Shaheed Dweep (Neil Island)", href: null },
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
                "Neil Island",
                "Shaheed Dweep",
                "Bharatpur Beach",
                "Laxmanpur Beach",
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
              Shaheed Dweep (Neil Island): The Complete Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A village-paced island of vegetable farms and quiet beaches —
              Bharatpur's calm water, Laxmanpur's natural rock bridge, and a
              sunrise point most Havelock-bound travellers never see.
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
                  text: "Shaheed Dweep, Andaman & Nicobar Islands",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>Andaman's Quiet Island</h2>
                  <p>
                    <strong>Shaheed Dweep</strong>, still almost universally
                    called <strong>Neil Island</strong>, is the slower,
                    smaller counterpart to{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock Island (Swaraj Dweep)
                    </Link>{" "}
                    in the{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Islands
                    </Link>
                    . The Government of India officially renamed it in 2018,
                    but on the ground — ferry counters, guesthouse listings,
                    local conversation — "Neil Island" is still what
                    everyone says.
                  </p>
                  <p>
                    Where Havelock has scale — the best-known beach, the
                    dive scene, the resort choice — Neil Island has pace.
                    It's small enough to circle by scooter in an hour, ringed
                    by a handful of genuinely beautiful, uncrowded beaches,
                    and dotted with the small farms that have earned it the
                    nickname "the vegetable bowl of Andaman." Most travellers
                    treat it as the wind-down half of a Havelock-Neil combo,
                    and that's exactly the role it plays best.
                  </p>
                  <p>
                    Three beaches do most of the work here: Bharatpur for
                    swimming and water sports, Laxmanpur for sunset and its
                    famous natural rock bridge, and Sitapur for sunrise. None
                    of them ask for more than a day to see properly — the
                    case for staying longer is simply that Neil Island is a
                    genuinely pleasant place to slow down.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏝️</span> Neil Island at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Official Name",
                          value: "Shaheed Dweep",
                        },
                        {
                          icon: "⛴️",
                          label: "From Port Blair",
                          value: "~2 hrs by ferry",
                        },
                        {
                          icon: "⛴️",
                          label: "From Havelock",
                          value: "~45–60 min by ferry",
                        },
                        {
                          icon: "🏖️",
                          label: "Main Beaches",
                          value: "Bharatpur, Laxmanpur, Sitapur",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Nov – Apr",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "1 full day, 1-2 nights ideal",
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
                  <h2>Best Time to Visit Neil Island</h2>
                  <p>
                    Neil Island follows the same weather pattern as the rest
                    of the Andamans, so timing matters as much for calm seas
                    as for sunshine.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas, comfortable temperatures, and clear skies for both the Laxmanpur sunset and the Sitapur sunrise.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but manageable",
                        text: "Warmer and more humid, but ferries and beaches are still fully operational — a reasonable shoulder-season option.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — plan around it",
                        text: "Heavy rain and rougher seas frequently disrupt ferry schedules between Port Blair, Havelock, and Neil Island.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌊",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transitional",
                        text: "Seas begin settling as the monsoon retreats, though schedules can still be unpredictable early in the month.",
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
                    <strong>Our pick:</strong> November through February —
                    calm ferry crossings, comfortable weather, and the best
                    odds of a clear sunset at Laxmanpur.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Neil Island</h2>
                  <p>
                    Neil Island has no airport — every visitor arrives by
                    sea, usually as part of a wider{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman
                    </Link>{" "}
                    itinerary.
                  </p>
                  <ul>
                    <li>
                      <strong>From Port Blair:</strong> Government and
                      private ferries run daily, taking roughly 2 hours.
                      Book a few days ahead in peak season.
                    </li>
                    <li>
                      <strong>From Havelock (Swaraj Dweep):</strong> An even
                      shorter hop, usually under an hour — most travellers
                      combine both islands rather than choosing one.
                    </li>
                    <li>
                      <strong>Getting around the island:</strong> Scooters
                      and battery-operated autos are the easiest way to
                      cover the three main beaches, all a short ride from
                      the jetty and the small main market.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Buy return ferry tickets as
                    soon as your onward date is fixed — Neil Island's limited
                    daily sailings sell out quickly around New Year and peak
                    winter weekends.
                  </div>
                </section>

                {/* ── Bharatpur ──────────────────────────────────────────── */}
                <section id="bharatpur">
                  <h2>Bharatpur Beach</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Calm turquoise water over white sand, evoking Neil Island's Bharatpur Beach"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The island's most active beach, with calm, shallow water
                    that makes it the go-to spot for jet skiing, banana boat
                    rides, and glass-bottom boat trips over nearby coral. It
                    sits close to the jetty and the main market, so it's
                    often the first — and easiest — stop after arrival.
                  </p>
                </section>

                {/* ── Laxmanpur ──────────────────────────────────────────── */}
                <section id="laxmanpur">
                  <h2>Laxmanpur Beach & the Rock Bridge</h2>
                  <p>
                    Neil Island's best-known sunset spot, and home to a
                    natural rock arch nicknamed the "Howrah Bridge" for its
                    resemblance to the Kolkata landmark — carved entirely by
                    wave erosion rather than built by hand. It's best seen
                    and photographed at low tide, when more of the rock base
                    is exposed and walkable.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check the day's low-tide
                    timing before heading to Laxmanpur — the rock bridge is
                    considerably more impressive, and safer to walk near,
                    when the water has receded.
                  </div>
                </section>

                {/* ── Sitapur ──────────────────────────────────────────── */}
                <section id="sitapur">
                  <h2>Sitapur Beach</h2>
                  <p>
                    Neil Island's sunrise counterpart to Laxmanpur — quieter,
                    less visited, and best reached with an early start.
                    Locals also call it "Lighthouse Beach" for the small
                    lighthouse nearby. Rocky outcrops frame the shoreline,
                    making it a good spot for an early walk before the rest
                    of the island wakes up.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <p>
                    Neil Island rewards an unhurried single day — or better,
                    an overnight stay that lets you catch both a sunset and a
                    sunrise without rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Arrival & Bharatpur Beach",
                        color: "bg-amber-700",
                        activities: [
                          "Ferry in from Port Blair or Havelock",
                          "Rent a scooter near the jetty",
                          "Swim or try water sports at Bharatpur",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Village Pace & Lunch",
                        color: "bg-forest-600",
                        activities: [
                          "Ride past the island's vegetable farms",
                          "Lunch at a local seafood shack",
                          "Rest before the evening beach run",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Laxmanpur Sunset",
                        color: "bg-sky-600",
                        activities: [
                          "Time arrival for low tide if possible",
                          "Walk out to the natural rock bridge",
                          "Watch the sunset over the Andaman Sea",
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
                    * Staying overnight lets you add a Sitapur sunrise the
                    next morning before your onward ferry.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat on Neil Island</h2>
                  <p>
                    Neil Island's food scene is small but genuinely good,
                    leaning heavily on fresh, local seafood.
                  </p>
                  <ul>
                    <li>
                      <strong>Beach shacks near Bharatpur:</strong> Grilled
                      fish, prawns, and simple thalis, mostly geared toward
                      day-trippers.
                    </li>
                    <li>
                      <strong>Small market eateries:</strong> Near the
                      jetty, offering budget-friendly South Indian and North
                      Indian staples.
                    </li>
                    <li>
                      <strong>Guesthouse kitchens:</strong> Several
                      guesthouses serve home-style meals to guests — often
                      the most reliable option if you're staying overnight.
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
                            "Ferry (Port Blair-Neil, return)",
                            "₹1,200",
                            "₹2,000",
                            "₹3,500",
                          ],
                          ["Scooter rental/day", "₹400", "₹500", "₹700"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Stay/night",
                            "₹1,200",
                            "₹3,000",
                            "₹7,000+",
                          ],
                          ["Total (1 day, no stay)", "₹2,100", "₹3,700", "₹6,700"],
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
                    * Figures are per person. Add accommodation only if
                    staying overnight — many visitors do Neil Island as a
                    day trip from{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Neil Island</h2>
                  <ul>
                    <li>
                      <strong>Book ferries early:</strong> Neil Island has
                      fewer daily sailings than the Port Blair-Havelock
                      route — don't leave return tickets to the last minute.
                    </li>
                    <li>
                      <strong>Time Laxmanpur around low tide:</strong> The
                      rock bridge is far more photogenic and safer to
                      approach when the water has receded.
                    </li>
                    <li>
                      <strong>Rent a scooter, not an auto, if you can:</strong>{" "}
                      The island is small enough to explore independently,
                      and a scooter gives you flexibility for sunrise and
                      sunset timing.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs and card acceptance
                      are limited outside the main market.
                    </li>
                    <li>
                      <strong>Combine with Havelock:</strong> The direct
                      inter-island ferry makes a Havelock-Neil combo far more
                      efficient than routing back through{" "}
                      <Link href="/blog/port-blair-andaman-travel-guide">
                        Port Blair
                      </Link>{" "}
                      each time.
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
                          "Book ferries a few days ahead in peak season",
                          "Check low tide timing before visiting Laxmanpur",
                          "Rent a scooter to cover all three beaches",
                          "Stay at least one night if your schedule allows",
                          "Carry enough cash for the day",
                          "Try the fresh seafood at the beach shacks",
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
                          "Leave return ferry booking to the last minute",
                          "Expect ATMs everywhere outside the main market",
                          "Visit Laxmanpur at high tide expecting the same view",
                          "Rush all three beaches into a half-day",
                          "Assume monsoon-season ferries will run on schedule",
                          "Skip Neil Island thinking Havelock alone is enough",
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
                  "Neil Island",
                  "Shaheed Dweep",
                  "Bharatpur Beach",
                  "Laxmanpur Beach",
                  "Sitapur Beach",
                  "Andaman Islands",
                  "Island Hopping",
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

              <RelatedPostsGrid currentSlug="neil-island-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="neil-island-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
