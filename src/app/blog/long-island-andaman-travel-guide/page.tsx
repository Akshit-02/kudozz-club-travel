// src/app/blog/long-island-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Long Island Andaman: Lalaji Bay Beach Travel Guide",
  description:
    "Complete Long Island guide — Lalaji Bay Beach, Merk Bay, and one of the Andamans' least-crowded, most untouched island stops. How to reach it from Rangat, where to stay, and what to expect.",
  keywords:
    "Long Island Andaman, Lalaji Bay Beach, Merk Bay Beach, Long Island ferry, Rangat to Long Island, offbeat Andaman islands, Middle Andaman beaches, Long Island Andaman guesthouses, undiscovered Andaman beach",
  openGraph: {
    title: "Long Island Andaman: Lalaji Bay Beach Travel Guide",
    description:
      "A pristine, little-visited beach reached through mangrove forest, minimal infrastructure, and none of the Havelock crowds — Long Island is Middle Andaman's quiet secret.",
    url: "https://club.kudozz.in/blog/long-island-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Calm turquoise water along Long Island's coastline near Lalaji Bay",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Island Andaman: Lalaji Bay Beach Travel Guide",
    description:
      "A pristine, little-visited beach reached through mangrove forest — Middle Andaman's quiet secret.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/long-island-andaman-travel-guide",
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
          headline: "Long Island Andaman: Lalaji Bay Beach Travel Guide",
          description:
            "Complete Long Island guide — Lalaji Bay Beach, Merk Bay, and one of the Andamans' least-crowded, most untouched island stops.",
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
            "@id": "https://club.kudozz.in/blog/long-island-andaman-travel-guide",
          },
          keywords:
            "Long Island Andaman, Lalaji Bay Beach, Merk Bay Beach, Middle Andaman, Rangat",
          about: {
            "@type": "Place",
            name: "Long Island",
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
                name: "Long Island",
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
    q: "How do I reach Long Island?",
    a: "By ferry, most commonly from a jetty near Rangat (Yerrata), with the crossing typically a couple of hours. Some schedules also connect from Port Blair directly — routes and timings change, so it's worth confirming the current ferry schedule locally or through your accommodation before you travel.",
  },
  {
    q: "Is Lalaji Bay Beach hard to get to?",
    a: "Not difficult, but it does take a bit of effort — the beach is reached partly by a short walk through forest and mangrove from the jetty rather than a direct drop-off. That short walk is part of what keeps it quiet, since it filters out anyone not genuinely committed to getting there.",
  },
  {
    q: "What's the accommodation situation on Long Island?",
    a: "Minimal — a handful of basic guesthouses rather than resorts. This is precisely why the island stays untouched, but it also means you should book ahead where possible and keep expectations realistic about comfort and amenities.",
  },
  {
    q: "How many days should I spend on Long Island?",
    a: "Most visitors treat it as a 1-2 day stop, often as a detour from a Rangat-based itinerary rather than a standalone multi-day base — enough time to properly enjoy Lalaji Bay and Merk Bay without rushing.",
  },
  {
    q: "Is Long Island worth it compared to Havelock or Neil?",
    a: "It serves a different purpose. Havelock and Neil offer better infrastructure, more activities, and easier logistics; Long Island offers genuine quiet and largely untouched beaches in exchange for basic amenities and a bit more planning effort. It suits travellers who've already done the main circuit or specifically want a backpacker-style, off-the-beaten-path stop.",
  },
  {
    q: "Are there restaurants on Long Island?",
    a: "Very few — most food comes from your guesthouse or a small number of simple local eateries. Don't expect café culture or dining variety; it's part of the island's basic, unhurried character.",
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
  { id: "introduction", title: "Middle Andaman's Quiet Secret", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "lalaji-bay", title: "Lalaji Bay Beach", level: 2 },
  { id: "merk-bay", title: "Merk Bay Beach", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Where to Stay", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LongIslandGuidePage() {
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
              alt="Calm turquoise water along Long Island's coastline near Lalaji Bay"
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
                { label: "Long Island", href: null },
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
                "Long Island",
                "Lalaji Bay Beach",
                "Middle Andaman",
                "Offbeat Islands",
                "Backpacker Trail",
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
              Long Island: Lalaji Bay Beach & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A pristine beach reached through forest and mangrove, a
              handful of guesthouses instead of resorts, and none of the
              Havelock crowds — Long Island is Middle Andaman's quietest
              detour.
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
                  text: "Middle Andaman, near Rangat",
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
                  <h2>Middle Andaman's Quiet Secret</h2>
                  <p>
                    <strong>Long Island</strong> is a small island in Middle
                    Andaman that rarely makes it onto a first-time visitor's
                    itinerary — and that's exactly the point for the
                    travellers who do seek it out. Its main draw is{" "}
                    <strong>Lalaji Bay Beach</strong>, a pristine, little-
                    visited stretch of sand reached partly on foot through
                    forest and mangrove from the jetty.
                  </p>
                  <p>
                    Unlike the resort-lined shores of{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock
                    </Link>
                    , Long Island has minimal tourist infrastructure — a
                    handful of basic guesthouses rather than proper resorts.
                    That's not an oversight; it's the reason the beaches here
                    stay as untouched as they do, and it's precisely what
                    draws backpackers and travellers chasing a genuine
                    "undiscovered beach" experience within the Andamans.
                  </p>
                  <p>
                    It's usually reached from{" "}
                    <Link href="/blog/rangat-andaman-travel-guide">
                      Rangat
                    </Link>
                    , making it a natural add-on for anyone already routing
                    through Middle Andaman rather than a standalone
                    destination in its own right.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏝️</span> Long Island at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Middle Andaman",
                        },
                        {
                          icon: "⛴️",
                          label: "Gateway Town",
                          value: "Rangat (Yerrata jetty)",
                        },
                        {
                          icon: "🏖️",
                          label: "Known For",
                          value: "Lalaji Bay, Merk Bay",
                        },
                        {
                          icon: "🌤️",
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
                          label: "Suggested Stay",
                          value: "1-2 days",
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
                  <h2>Best Time to Visit Long Island</h2>
                  <p>
                    The same seasonal pattern that governs the rest of the
                    Andamans applies here — plan around the dry season and
                    avoid the monsoon months.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best overall window",
                        text: "Calm seas make the ferry crossing from Rangat comfortable and dependable, and beach conditions are at their best.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Good, warmer",
                        text: "Still a reliable window with rising temperatures — a solid alternative if your dates don't line up with peak winter.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Ferry services to smaller islands like Long Island are the first to be disrupted or cancelled during rough seas.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌊",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Transitional",
                        text: "Conditions are improving but can still be inconsistent — check current ferry schedules before committing to dates.",
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
                    <strong>Our pick:</strong> December to February, when
                    ferries from Rangat run most reliably and the beaches are
                    at their calmest and clearest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Long Island</h2>
                  <ul>
                    <li>
                      <strong>By Ferry from Rangat:</strong> The most common
                      route, departing from the jetty near{" "}
                      <Link href="/blog/rangat-andaman-travel-guide">
                        Rangat
                      </Link>{" "}
                      (Yerrata), with a crossing of a couple of hours.
                    </li>
                    <li>
                      <strong>By Ferry from Port Blair:</strong> Some
                      schedules connect directly, though this depends on the
                      current timetable — confirm locally rather than
                      assuming a fixed daily service.
                    </li>
                    <li>
                      <strong>On the island:</strong> Reaching Lalaji Bay
                      involves a short walk through forest and mangrove from
                      the jetty — comfortable shoes are enough, no special
                      gear required.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Ferry routes and timings to
                    Long Island change more often than the main Havelock/Neil
                    services — confirm the current schedule through your
                    guesthouse or locally in Rangat rather than relying on
                    older published timetables.
                  </div>
                </section>

                {/* ── Lalaji Bay ─────────────────────────────────────────── */}
                <section id="lalaji-bay">
                  <h2>Lalaji Bay Beach</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Pristine, quiet coastline resembling Lalaji Bay Beach on Long Island"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Lalaji Bay Beach</strong> is Long Island's main
                    draw — a genuinely pristine, little-visited stretch of
                    sand reached partly by a short walk through forest and
                    mangrove from the jetty rather than a direct drop-off.
                    That extra effort is part of what keeps it quiet, gently
                    filtering out anyone not committed to making the trip.
                  </p>
                  <p>
                    There's little in the way of built infrastructure here —
                    no beach shacks or water-sports counters — just clean
                    sand, clear water, and space to yourself that's
                    increasingly hard to find elsewhere in the Andamans.
                  </p>
                </section>

                {/* ── Merk Bay ───────────────────────────────────────────── */}
                <section id="merk-bay">
                  <h2>Merk Bay Beach</h2>
                  <p>
                    <strong>Merk Bay</strong> is Long Island's other notable
                    beach — quieter still than Lalaji Bay, and a good option
                    if you want an even more solitary stretch of coastline
                    for the day. Facilities are minimal to non-existent, so
                    bring water and anything else you'll need for the day.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <p>
                    Long Island works best as a short, focused detour rather
                    than an extended stay, given the limited infrastructure.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Lalaji Bay",
                        color: "bg-amber-700",
                        activities: [
                          "Ferry in from Rangat, settle into a guesthouse",
                          "Walk to Lalaji Bay Beach through the forest trail",
                          "Unhurried afternoon on the sand",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Merk Bay & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at the quieter Merk Bay Beach",
                          "Simple lunch at a local eatery or guesthouse",
                          "Return ferry to Rangat",
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
                    Accommodation on Long Island is minimal — a handful of
                    basic guesthouses rather than resorts, which is part of
                    its appeal for travellers seeking untouched beaches
                    without the crowds.
                  </p>
                  <ul>
                    <li>
                      <strong>Guesthouse stays:</strong> Book ahead where
                      possible; options are genuinely few and last-minute
                      availability isn't guaranteed.
                    </li>
                    <li>
                      <strong>Local eateries:</strong> A small number of
                      simple restaurants serve basic meals — don't expect
                      variety or café culture here.
                    </li>
                    <li>
                      <strong>Guesthouse meals:</strong> Often the most
                      reliable option, especially for dinner.
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
                            "Ferry (Rangat round trip)",
                            "₹300",
                            "₹300",
                            "₹300",
                          ],
                          [
                            "Guesthouse/night",
                            "₹700",
                            "₹1,500",
                            "₹2,500",
                          ],
                          ["Food/day", "₹350", "₹600", "₹1,000"],
                          [
                            "Local transport/day",
                            "₹200",
                            "₹400",
                            "₹800",
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
                    * Figures are per person, per day where applicable. Long
                    Island is best budgeted as a short add-on to a wider{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Islands
                    </Link>{" "}
                    itinerary rather than a standalone trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Long Island</h2>
                  <ul>
                    <li>
                      <strong>Confirm ferry schedules locally:</strong>{" "}
                      Routes and timings from Rangat change more often than
                      the main Havelock/Neil services.
                    </li>
                    <li>
                      <strong>Book guesthouses in advance:</strong>{" "}
                      Availability is genuinely limited — don't count on
                      finding a room on arrival.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card payment options are
                      minimal to non-existent on the island.
                    </li>
                    <li>
                      <strong>Bring water and snacks to the beaches:</strong>{" "}
                      Neither Lalaji Bay nor Merk Bay has shacks or vendors.
                    </li>
                    <li>
                      <strong>Wear comfortable footwear:</strong> The walk to
                      Lalaji Bay crosses forest and mangrove terrain.
                    </li>
                    <li>
                      <strong>Combine it with Rangat:</strong> Long Island
                      works best as a short detour from a{" "}
                      <Link href="/blog/rangat-andaman-travel-guide">
                        Rangat
                      </Link>
                      -based leg of a wider Andaman itinerary.
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
                          "Book your guesthouse ahead of arrival",
                          "Confirm ferry timings before travel day",
                          "Carry enough cash for your whole stay",
                          "Bring water and snacks to both beaches",
                          "Treat it as a short, focused detour",
                          "Pair it with a Rangat-based itinerary leg",
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
                          "Expect resort-style comfort or dining",
                          "Assume last-minute rooms will be available",
                          "Rely on card payments over cash",
                          "Travel during monsoon months (May-Sep)",
                          "Plan a long multi-day stay without checking logistics",
                          "Expect beach shacks or water-sports counters",
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
                  "Long Island",
                  "Lalaji Bay Beach",
                  "Merk Bay",
                  "Middle Andaman",
                  "Offbeat Islands",
                  "Rangat",
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

              <RelatedPostsGrid currentSlug="long-island-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="long-island-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
