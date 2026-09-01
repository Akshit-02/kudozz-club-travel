// src/app/blog/port-blair-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sri Vijaya Puram (Port Blair) Travel Guide: Sights & Tips",
  description:
    "Complete Sri Vijaya Puram (Port Blair) guide — the Andaman & Nicobar capital and gateway to the islands. Cellular Jail, Corbyn's Cove, the Chatham Saw Mill, ferries to Havelock and Neil, and how to plan your stay.",
  keywords:
    "Sri Vijaya Puram, Port Blair travel guide, Port Blair Andaman, Cellular Jail Port Blair, Corbyn's Cove Beach, Chatham Saw Mill, Veer Savarkar International Airport, Port Blair to Havelock ferry, Port Blair to Neil Island ferry, Andaman capital, Port Blair sightseeing, Andaman Islands gateway, Port Blair itinerary",
  openGraph: {
    title: "Sri Vijaya Puram (Port Blair) Travel Guide: Sights & Tips",
    description:
      "The capital of the Andaman & Nicobar Islands and the gateway almost every traveller passes through — Cellular Jail, Corbyn's Cove, and the ferries onward.",
    url: "https://club.kudozz.in/blog/port-blair-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise Andaman coastline near Sri Vijaya Puram (Port Blair), the capital and gateway to the Andaman Islands",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Vijaya Puram (Port Blair) Travel Guide: Sights & Tips",
    description:
      "The capital and gateway of the Andaman Islands — Cellular Jail, Corbyn's Cove, and the ferries onward to Havelock and Neil.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/port-blair-andaman-travel-guide",
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
          headline: "Sri Vijaya Puram (Port Blair) Travel Guide: Sights & Tips",
          description:
            "Complete Sri Vijaya Puram (Port Blair) guide — the Andaman & Nicobar capital and gateway to the islands. Cellular Jail, Corbyn's Cove, the Chatham Saw Mill, ferries to Havelock and Neil, and how to plan your stay.",
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
            "@id": "https://club.kudozz.in/blog/port-blair-andaman-travel-guide",
          },
          keywords:
            "Sri Vijaya Puram, Port Blair, Cellular Jail, Corbyn's Cove Beach, Chatham Saw Mill, Veer Savarkar International Airport, Andaman gateway",
          about: {
            "@type": "Place",
            name: "Sri Vijaya Puram (Port Blair)",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sri Vijaya Puram",
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
                name: "Sri Vijaya Puram (Port Blair)",
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
    q: "Why is Port Blair now called Sri Vijaya Puram?",
    a: "In September 2024, the Government of India officially renamed Port Blair to Sri Vijaya Puram, as part of a wider effort to replace colonial-era place names across the islands. In everyday use — flight bookings, maps, ferry tickets, and local conversation — you'll still hear \"Port Blair\" constantly, so it helps to recognise both names mean the same place.",
  },
  {
    q: "How many days should I spend in Port Blair?",
    a: "One to two days is typically enough — a half-day for Cellular Jail and the evening Light and Sound Show, and another half-day to a full day for Corbyn's Cove, the Chatham Saw Mill, and a boat trip to Ross Island and North Bay. Most travellers use it as a bookend at the start and end of a longer Havelock/Neil-focused trip rather than the main event.",
  },
  {
    q: "How do I reach Port Blair?",
    a: "Almost all visitors fly into Veer Savarkar International Airport (IXZ), with direct flights from Chennai (about 2 hours), Kolkata, Delhi, and Bangalore. Government passenger ships also sail from Chennai, Kolkata, and Visakhapatnam, taking roughly 56-60 hours — a memorable but far slower alternative.",
  },
  {
    q: "Do I need a permit to visit Port Blair?",
    a: "Indian nationals need no special permit for Port Blair or the other freely accessible islands. Foreign nationals must register at the Immigration Office in Port Blair within 24 hours of arrival, which is a straightforward formality rather than a lengthy process.",
  },
  {
    q: "How do I get from Port Blair to Havelock or Neil Island?",
    a: "Government and private ferries run daily from Port Blair's Phoenix Bay Jetty to Havelock (Swaraj Dweep) and Neil (Shaheed Dweep), taking roughly 1.5-2.5 hours depending on the vessel. Book private ferries (Makruzz, Green Ocean, Nautika) a few days ahead in peak season, since seats sell out.",
  },
  {
    q: "Is Port Blair worth spending time in, or just a transit point?",
    a: "It's genuinely worth a day beyond just transit — Cellular Jail and its Light and Sound Show are among the most moving historical experiences in the islands, and a half-day boat trip to Ross Island and North Bay is an easy, worthwhile add-on before or after your beach time elsewhere.",
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
  { id: "introduction", title: "The Gateway to Andaman", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "transit-hub", title: "Your Gateway Onward", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PortBlairGuidePage() {
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
              alt="Turquoise Andaman coastline near Sri Vijaya Puram (Port Blair), the capital and gateway to the Andaman Islands"
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
                { label: "Sri Vijaya Puram (Port Blair)", href: null },
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
                "Sri Vijaya Puram",
                "Port Blair",
                "Andaman Islands",
                "Cellular Jail",
                "Gateway City",
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
              Sri Vijaya Puram (Port Blair): The Complete Gateway Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The capital of the Andaman & Nicobar Islands, and the gateway
              almost every traveller passes through — Cellular Jail, Corbyn's
              Cove, and the ferries that fan out to Havelock, Neil, and
              beyond.
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
                  text: "South Andaman Island",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,500 words",
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
                  <h2>The Gateway to Andaman</h2>
                  <p>
                    <strong>Sri Vijaya Puram</strong> — still very widely
                    known by its older name, <strong>Port Blair</strong> —
                    is the capital of the{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman & Nicobar Islands
                    </Link>{" "}
                    and the point almost every visitor to the archipelago
                    passes through, whether they're here for a weekend or a
                    two-week island-hopping trip. The Government of India
                    officially renamed the city in September 2024, as part
                    of a wider effort to replace colonial-era place names
                    across the islands — but flight codes, ferry tickets,
                    and everyday conversation still lean heavily on "Port
                    Blair," so expect to hear and use both names
                    interchangeably.
                  </p>
                  <p>
                    Sitting on South Andaman Island, Sri Vijaya Puram is
                    equal parts working city and travel hub: it has the
                    islands' only international airport, its main ferry
                    jetties, its hospitals and government offices — and,
                    tucked among all of that, one of the most significant
                    historical sites in India's freedom struggle,{" "}
                    <Link href="/blog/cellular-jail-andaman-travel-guide">
                      Cellular Jail
                    </Link>
                    .
                  </p>
                  <p>
                    Most itineraries treat it as a bookend — a night on
                    arrival, a night before departure — but that undersells
                    it slightly. Give it a genuine day and a half, and you'll
                    cover its best sights properly rather than rushing them
                    between ferry connections.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏝️</span> Sri Vijaya Puram at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Andaman Island",
                        },
                        {
                          icon: "✈️",
                          label: "Airport",
                          value: "Veer Savarkar Intl. (IXZ)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Cellular Jail, Ferries Onward",
                        },
                        {
                          icon: "⛴️",
                          label: "Gateway To",
                          value: "Havelock, Neil, Ross Island",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    Since Sri Vijaya Puram is mostly a base for ferries and
                    day trips, its weather matters less for sightseeing and
                    more for how smoothly your onward island-hopping goes.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and calm seas make ferry crossings smooth and sightseeing comfortable — the busiest and most reliable window of the year.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm but workable",
                        text: "Temperatures and humidity climb, but this is still well before the monsoon disrupts ferries — a good shoulder-season option.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain and rough seas frequently cancel inter-island ferries, and several attractions and dive operators scale back or close.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌦️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transitional",
                        text: "Rains ease and the season reopens gradually — bookable, but double-check ferry schedules before committing to a tight itinerary.",
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
                    <strong>Our pick:</strong> November to February — calm
                    seas mean reliable ferries to Havelock and Neil, which
                    matters more here than the weather in the city itself.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sri Vijaya Puram</h2>
                  <p>
                    As the only international-standard entry point to the
                    islands, getting here is straightforward — moving on from
                    here is where planning matters more.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Veer Savarkar International
                      Airport (IXZ) has daily direct flights from Chennai
                      (~2 hrs), Kolkata (~2 hrs), and connections from Delhi
                      and Bangalore — this is how the vast majority of
                      visitors arrive.
                    </li>
                    <li>
                      <strong>By Sea:</strong> Government passenger ships
                      sail from Chennai, Kolkata, and Visakhapatnam, taking
                      56-60 hours — a slow but memorable option for travellers
                      who aren't in a hurry.
                    </li>
                    <li>
                      <strong>Onward from the airport:</strong> Prepaid taxis
                      and app-based cabs run from the airport to hotels and
                      the Phoenix Bay Jetty in 15-30 minutes depending on
                      traffic and location.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your flight lands midday,
                    you can realistically fit Cellular Jail and its evening
                    Light and Sound Show into the same day — plan your
                    Havelock or Neil ferry for the following morning.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Sri Vijaya Puram</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Coastal view near Sri Vijaya Puram (Port Blair), gateway city of the Andaman Islands"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Cellular Jail:</strong> The National Memorial
                      to India's freedom struggle, its cell blocks, museum
                      galleries, and unmissable evening Light and Sound Show
                      — read our{" "}
                      <Link href="/blog/cellular-jail-andaman-travel-guide">
                        full Cellular Jail guide
                      </Link>{" "}
                      for details.
                    </li>
                    <li>
                      <strong>Corbyn's Cove Beach:</strong> A palm-fringed
                      beach a short drive from the city centre — not the
                      islands' best beach, but a pleasant, easy stop for a
                      swim or sunset walk.
                    </li>
                    <li>
                      <strong>Chatham Saw Mill:</strong> One of Asia's oldest
                      and largest sawmills, with a small museum on the
                      islands' timber and colonial history.
                    </li>
                    <li>
                      <strong>Samudrika Naval Marine Museum:</strong> Run by
                      the Indian Navy, covering the islands' marine life,
                      geography, and tribal cultures.
                    </li>
                    <li>
                      <strong>Anthropological Museum:</strong> A compact,
                      informative look at the indigenous tribes of the
                      Andaman & Nicobar Islands, including the Jarawa,
                      Onge, Sentinelese, and Nicobarese.
                    </li>
                    <li>
                      <strong>Ross Island & North Bay boat trip:</strong> A
                      half-day excursion from Phoenix Bay Jetty combining
                      the colonial ruins of{" "}
                      <Link href="/blog/ross-island-andaman-travel-guide">
                        Ross Island
                      </Link>{" "}
                      with the coral and snorkelling of{" "}
                      <Link href="/blog/north-bay-island-andaman-travel-guide">
                        North Bay Island
                      </Link>
                      .
                    </li>
                  </ul>
                </section>

                {/* ── Transit Hub ────────────────────────────────────────── */}
                <section id="transit-hub">
                  <h2>Your Gateway Onward</h2>
                  <p>
                    For most travellers, Sri Vijaya Puram's real job is
                    logistics — it's where you catch the ferry to wherever
                    your trip is actually centred.
                  </p>
                  <ul>
                    <li>
                      <strong>To Havelock (Swaraj Dweep):</strong> Daily
                      ferries from Phoenix Bay Jetty, roughly 1.5-2.5 hours
                      depending on the operator — read our{" "}
                      <Link href="/blog/havelock-island-andaman-travel-guide">
                        Havelock Island guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>To Neil (Shaheed Dweep):</strong> Similar
                      journey time and frequency, often combinable with
                      Havelock on the same multi-stop ferry.
                    </li>
                    <li>
                      <strong>To Baratang, Rangat, Mayabunder, Diglipur:</strong>{" "}
                      Reached by road along the Andaman Trunk Road, or by a
                      combination of ferry and road for the more remote
                      northern stretches.
                    </li>
                    <li>
                      <strong>To Little Andaman:</strong> A longer ferry
                      crossing of 6-8 hours, best planned as a dedicated leg
                      of a longer trip rather than a quick add-on.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book private ferries (Makruzz,
                    Green Ocean, Nautika) a few days in advance in peak
                    season (Dec-Jan) — seats to Havelock and Neil sell out
                    quickly.
                  </div>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1.5 Days)</h2>
                  <p>
                    A day and a half is enough to see Sri Vijaya Puram
                    properly without eating into your beach time elsewhere
                    in the islands.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1 Morning",
                        title: "Arrival & City Sights",
                        color: "bg-amber-700",
                        activities: [
                          "Land at Veer Savarkar Airport, check into your hotel",
                          "Chatham Saw Mill and Samudrika Naval Marine Museum",
                          "Lunch in the city centre",
                        ],
                      },
                      {
                        day: "Day 1 Afternoon/Evening",
                        title: "Cellular Jail",
                        color: "bg-forest-600",
                        activities: [
                          "Corbyn's Cove Beach for a late-afternoon swim",
                          "Cellular Jail museum galleries before sunset",
                          "Evening Light and Sound Show",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Ross Island & North Bay, Then Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Morning boat trip to Ross Island and North Bay",
                          "Return to Phoenix Bay Jetty by early afternoon",
                          "Catch the ferry to Havelock or Neil",
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
                  <h2>Where to Eat</h2>
                  <p>
                    Sri Vijaya Puram has the widest, most varied food scene
                    in the islands — a good place to eat well before or
                    after simpler island fare on Havelock or Neil.
                  </p>
                  <ul>
                    <li>
                      <strong>Fresh seafood:</strong> Grilled and curried
                      catch of the day is widely available and consistently
                      good — look for tuna, snapper, and lobster in season.
                    </li>
                    <li>
                      <strong>Local Bengali and South Indian food:</strong>{" "}
                      Reflecting the islands' mixed settler population,
                      found in casual eateries across the city.
                    </li>
                    <li>
                      <strong>Rooftop and waterfront restaurants:</strong>{" "}
                      Several spots near Aberdeen Bazaar and Corbyn's Cove
                      offer sit-down dining with sea views.
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
                            "Accommodation/night",
                            "₹1,500",
                            "₹4,000",
                            "₹10,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹700",
                            "₹2,000",
                          ],
                          [
                            "Cellular Jail entry + show",
                            "₹100–150",
                            "₹100–150",
                            "₹100–150",
                          ],
                          ["Ross Island & North Bay trip", "₹600", "₹1,200", "₹2,500"],
                          ["Daily total (approx.)", "₹3,000", "₹7,200", "₹17,700"],
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
                    * Excludes flights/ferry to the islands themselves. See
                    our{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Islands travel guide
                    </Link>{" "}
                    for a full multi-island budget.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Book Cellular Jail's Light and Sound Show
                      ahead:</strong> Tickets can be bought at the venue, but
                      arrive early — shows run roughly twice each evening in
                      English and Hindi and can fill up in peak season.
                    </li>
                    <li>
                      <strong>Confirm ferry timings a day before:</strong>{" "}
                      Schedules to Havelock and Neil can shift with sea
                      conditions — check with your hotel or operator the
                      evening before travel.
                    </li>
                    <li>
                      <strong>Carry ID for foreign nationals:</strong>{" "}
                      Register at the Immigration Office within 24 hours of
                      arrival if you're a foreign national — it's quick, but
                      don't skip it.
                    </li>
                    <li>
                      <strong>Use prepaid taxis from the airport:</strong>{" "}
                      Simpler and more transparent than negotiating fares on
                      arrival.
                    </li>
                    <li>
                      <strong>Don't overbook the city itself:</strong> A day
                      and a half is plenty — save your extra time for
                      Havelock, Neil, or the northern islands.
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
                          "Visit Cellular Jail's Light and Sound Show",
                          "Book ferries to Havelock/Neil a few days ahead",
                          "Combine Ross Island and North Bay in one trip",
                          "Try the fresh seafood before island-hopping",
                          "Register early if you're a foreign national",
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
                          "Book a tight same-day ferry after landing",
                          "Skip Cellular Jail thinking it's just a museum",
                          "Assume ferry schedules never change",
                          "Overstay here at the expense of Havelock/Neil",
                          "Forget immigration registration if travelling abroad",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Sri Vijaya
                    Puram with{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock Island
                    </Link>
                    's beaches and diving, then wind down on the quieter{" "}
                    <Link href="/blog/neil-island-andaman-travel-guide">
                      Neil Island
                    </Link>{" "}
                    before flying home.
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
                  "Sri Vijaya Puram",
                  "Port Blair",
                  "Andaman Islands",
                  "Cellular Jail",
                  "Gateway City",
                  "Ross Island",
                  "North Bay Island",
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

              <RelatedPostsGrid currentSlug="port-blair-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="port-blair-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
