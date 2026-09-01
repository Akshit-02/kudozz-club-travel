// src/app/blog/havelock-island-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Swaraj Dweep (Havelock Island) Travel Guide: Beaches & Diving",
  description:
    "Complete Swaraj Dweep (Havelock Island) guide — Radhanagar Beach, Elephant Beach snorkelling, scuba diving centres, how to reach from Port Blair, where to stay, and a full visit plan.",
  keywords:
    "Havelock Island, Swaraj Dweep, Havelock Andaman, Radhanagar Beach, Elephant Beach, Havelock scuba diving, Havelock ferry, how to reach Havelock Island, Havelock resorts, Kalapathar Beach, Havelock best time to visit, Ritchie's Archipelago",
  openGraph: {
    title: "Swaraj Dweep (Havelock Island) Travel Guide: Beaches & Diving",
    description:
      "The Andamans' most popular island — Radhanagar Beach, Elephant Beach snorkelling, and the region's biggest scuba diving hub, a 90-minute ferry from Port Blair.",
    url: "https://club.kudozz.in/blog/havelock-island-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/havelock.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise water and white sand at Swaraj Dweep (Havelock Island), Andaman",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Swaraj Dweep (Havelock Island) Travel Guide: Beaches & Diving",
    description:
      "Radhanagar Beach, Elephant Beach snorkelling, and the Andamans' biggest scuba diving hub — the complete Havelock Island guide.",
    images: ["/images/destinations/andaman/havelock.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/havelock-island-andaman-travel-guide",
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
          headline:
            "Swaraj Dweep (Havelock Island) Travel Guide: Beaches & Diving",
          description:
            "Complete Swaraj Dweep (Havelock Island) guide — Radhanagar Beach, Elephant Beach snorkelling, scuba diving centres, how to reach from Port Blair, where to stay, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/andaman/havelock.jpg",
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
            "@id": "https://club.kudozz.in/blog/havelock-island-andaman-travel-guide",
          },
          keywords:
            "Havelock Island, Swaraj Dweep, Radhanagar Beach, Elephant Beach, scuba diving, Ritchie's Archipelago",
          about: {
            "@type": "Place",
            name: "Swaraj Dweep (Havelock Island)",
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
                name: "Swaraj Dweep (Havelock Island)",
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
    q: "Is Havelock Island the same as Swaraj Dweep?",
    a: "Yes. The Government of India officially renamed Havelock Island to Swaraj Dweep in 2018 to honour the freedom struggle. Ferry tickets, hotel listings, and locals still commonly say 'Havelock' — both names refer to the exact same island, and you'll see them used interchangeably everywhere.",
  },
  {
    q: "How do I reach Havelock Island (Swaraj Dweep) from Port Blair?",
    a: "Government and private ferries run daily from Port Blair's Phoenix Bay Jetty to Havelock, taking roughly 90 minutes to 2 hours depending on the vessel. Private ferries (Makruzz, Green Ocean, Nautika) are faster and more comfortable; government ferries are cheaper but slower and less frequent. Book ahead in peak season (Dec-Jan).",
  },
  {
    q: "Is Radhanagar Beach on Havelock Island?",
    a: "Yes — Radhanagar Beach, also known as Beach No. 7, is Havelock's most famous beach, about 30-40 minutes by road from the island's main jetty. It was named one of Asia's best beaches by Time magazine in 2004, a reputation that still drives much of Havelock's tourism.",
  },
  {
    q: "Can beginners try scuba diving on Havelock?",
    a: "Yes. Multiple PADI-certified dive centres on Havelock run Discover Scuba sessions — a short briefing followed by one shallow ocean dive — with no certification or prior experience required. Certified divers can also complete a full Open Water course over several days at sites like Lighthouse and Aquarium.",
  },
  {
    q: "How many days should I spend on Havelock Island?",
    a: "2-3 nights is a comfortable minimum to cover Radhanagar Beach, Elephant Beach, and at least one dive or snorkelling session without feeling rushed. Divers or those wanting to slow down further often stay 4-5 nights.",
  },
  {
    q: "Is the ferry crossing to Havelock rough?",
    a: "It can be, especially between October and December when the sea is choppier. Most crossings are manageable, but if you're prone to motion sickness, consider sitting on the lower deck, taking a seasickness tablet beforehand, or choosing a larger private ferry over a smaller government one.",
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
  { id: "introduction", title: "The Andamans' Island Hub", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Havelock", level: 2 },
  { id: "beaches", title: "The Beaches", level: 2 },
  { id: "diving", title: "Scuba Diving & Snorkelling", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HavelockIslandGuidePage() {
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
              src="/images/destinations/andaman/havelock.jpg"
              alt="Turquoise water and white sand at Swaraj Dweep (Havelock Island), Andaman"
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
                { label: "Swaraj Dweep (Havelock)", href: null },
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
                "Havelock Island",
                "Swaraj Dweep",
                "Radhanagar Beach",
                "Scuba Diving",
                "Andaman",
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
              Swaraj Dweep (Havelock Island): Beaches, Diving & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The single island most people picture when they think
              "Andamans" — Radhanagar Beach, Elephant Beach's coral, and the
              region's biggest scuba diving scene, a 90-minute ferry from
              Port Blair.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "13 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Ritchie's Archipelago, Andaman",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,600 words",
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
                  <h2>The Andamans' Island Hub</h2>
                  <p>
                    <strong>Swaraj Dweep</strong> — still commonly called{" "}
                    <strong>Havelock Island</strong>, its name before a 2018
                    government renaming that honoured India's freedom
                    struggle — is the single most popular island in the{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Islands
                    </Link>
                    , and the main reason most travellers make the trip at
                    all. Part of Ritchie's Archipelago, it sits roughly 35
                    nautical miles from Port Blair, reached by a 90-minute to
                    2-hour ferry.
                  </p>
                  <p>
                    It's here that the Andamans' best-known beach —{" "}
                    <Link href="/blog/radhanagar-beach-andaman-travel-guide">
                      Radhanagar Beach
                    </Link>{" "}
                    — sits alongside Elephant Beach's coral gardens and the
                    region's densest cluster of scuba diving centres. Havelock
                    also has, by a wide margin, the best range of
                    accommodation in the islands, from simple beach huts to
                    high-end resorts.
                  </p>
                  <p>
                    Ferry tickets, hotel listings, and locals still mostly
                    say "Havelock" in everyday use — both names point to the
                    exact same island, and you'll see them used
                    interchangeably throughout this guide and elsewhere.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏝️</span> Havelock (Swaraj Dweep) at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Ritchie's Archipelago, Andaman",
                        },
                        {
                          icon: "⛴️",
                          label: "From Port Blair",
                          value: "~90 min - 2 hr ferry",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        {
                          icon: "🏖️",
                          label: "Known For",
                          value: "Radhanagar Beach, Scuba Diving",
                        },
                        {
                          icon: "🤿",
                          label: "Dive Sites",
                          value: "Lighthouse, Aquarium & more",
                        },
                        {
                          icon: "🛏️",
                          label: "Stay",
                          value: "Widest range in the Andamans",
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
                  <h2>Best Time to Visit Havelock Island</h2>
                  <p>
                    Havelock is a year-round destination in theory, but the
                    monsoon and the ferry crossing both make timing genuinely
                    matter.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas, clear underwater visibility for diving, and comfortable temperatures for beach days. The most popular window, so book ferries and stays ahead.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but good diving",
                        text: "Warmer and more humid, but seas stay generally calm and diving conditions remain good, with fewer crowds than peak winter.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain and rough seas frequently disrupt ferries between Port Blair and Havelock; many dive operators scale back or close.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "⛴️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Rougher crossings",
                        text: "Even outside monsoon, the ferry crossing can be choppy in this window — worth knowing if you're prone to seasickness.",
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
                    <strong>Our pick:</strong> December to February —
                    calm seas, the best underwater visibility for diving,
                    and reliable ferry schedules to and from Port Blair.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Havelock Island</h2>
                  <p>
                    There's no airport on Havelock — every visitor arrives by
                    sea, almost always from{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>
                    .
                  </p>
                  <ul>
                    <li>
                      <strong>Private ferries (Makruzz, Green Ocean,
                      Nautika):</strong> Faster, more comfortable, and
                      air-conditioned — roughly 90 minutes from Phoenix Bay
                      Jetty. The most popular option for tourists.
                    </li>
                    <li>
                      <strong>Government ferries:</strong> Cheaper but
                      slower and less frequent, with fewer daily departures
                      — a good budget option if your schedule is flexible.
                    </li>
                    <li>
                      <strong>Getting around Havelock:</strong> Once on the
                      island, auto-rickshaws, rented scooters, and taxis
                      cover the roughly 12 km stretch between the jetty,
                      main market, and Radhanagar Beach.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book ferry tickets online in
                    advance during peak season (Dec-Jan) — seats sell out
                    days ahead, and walk-up availability is unreliable.
                  </div>
                </section>

                {/* ── Beaches ────────────────────────────────────────────── */}
                <section id="beaches">
                  <h2>The Beaches</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/havelock.jpg"
                      alt="Havelock Island coastline, Andaman"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Radhanagar Beach (Beach No. 7)</h3>
                  <p>
                    Havelock's headline attraction and, for many visitors,
                    the reason they came to the Andamans at all. Named one of
                    Asia's best beaches by Time magazine in 2004, it remains
                    the most photographed stretch of sand in the islands. See
                    our full{" "}
                    <Link href="/blog/radhanagar-beach-andaman-travel-guide">
                      Radhanagar Beach guide
                    </Link>{" "}
                    for details on timing your visit and what's (and isn't)
                    allowed there.
                  </p>
                  <h3>Elephant Beach</h3>
                  <p>
                    Reached by a short boat ride or a muddy jungle trek,
                    Elephant Beach is Havelock's snorkelling and sea-walking
                    hub — shallow coral gardens close to shore make it
                    accessible even for first-timers.
                  </p>
                  <h3>Kalapathar Beach</h3>
                  <p>
                    A quieter, rockier beach on the opposite side of the
                    island from Radhanagar, known for dramatic sunrise light
                    and far fewer crowds — a good pick if you want Havelock's
                    scenery without the peak-hour footfall.
                  </p>
                  <h3>Vijaynagar Beach</h3>
                  <p>
                    A long, easy-walking beach close to the main market area,
                    convenient for an evening stroll without needing
                    transport.
                  </p>
                </section>

                {/* ── Diving ─────────────────────────────────────────────── */}
                <section id="diving">
                  <h2>Scuba Diving & Snorkelling</h2>
                  <p>
                    Havelock is the Andamans' diving capital, with more PADI
                    dive centres than anywhere else in the archipelago.
                  </p>
                  <ul>
                    <li>
                      <strong>Discover Scuba (beginners):</strong> A short
                      pool briefing followed by one shallow ocean dive — no
                      certification or prior experience required.
                    </li>
                    <li>
                      <strong>PADI Open Water certification:</strong> A
                      multi-day course for those wanting to dive
                      independently afterward, widely available across the
                      island's dive shops.
                    </li>
                    <li>
                      <strong>Popular dive sites:</strong> Lighthouse and
                      Aquarium are well-known, beginner-friendly sites close
                      to shore; more experienced divers have several deeper
                      sites to choose from further out.
                    </li>
                    <li>
                      <strong>Snorkelling:</strong> Elephant Beach is the
                      easiest snorkelling spot, with shallow reef accessible
                      without a boat trip.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book dive sessions a day or
                    two ahead in peak season — good instructors and morning
                    slots fill up fast between December and February.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay on Havelock</h2>
                  <p>
                    Havelock has the widest range of accommodation in the
                    Andamans, mostly clustered near the market/jetty area and
                    along the road toward Radhanagar Beach.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Guesthouses near the market",
                          "Backpacker hostels",
                          "Basic beach huts",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹7,000/night",
                        picks: [
                          "Beach-facing cottages",
                          "Mid-size resorts near Radhanagar",
                          "Dive-shop-affiliated stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏖️",
                        range: "₹12,000–₹35,000+/night",
                        picks: [
                          "Taj Exotica Resort & Spa",
                          "SeaShell Havelock",
                          "Barefoot at Havelock",
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
                        title: "Arrival & Radhanagar Beach",
                        color: "bg-amber-700",
                        activities: [
                          "Morning ferry from Port Blair, check in",
                          "Afternoon at Radhanagar Beach for sunset",
                          "Evening at the market near the jetty",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Diving & Elephant Beach",
                        color: "bg-sky-600",
                        activities: [
                          "Morning scuba session or Discover Scuba dive",
                          "Afternoon boat/trek to Elephant Beach, snorkelling",
                          "Evening rest or a second beach visit",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Kalapathar & Onward",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning at Kalapathar Beach for sunrise",
                          "Late morning ferry onward to Neil Island or Port Blair",
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
                    * Many travellers continue on to{" "}
                    <Link href="/blog/neil-island-andaman-travel-guide">
                      Neil Island (Shaheed Dweep)
                    </Link>{" "}
                    for a quieter 1-2 days after Havelock.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat on Havelock</h2>
                  <ul>
                    <li>
                      <strong>Seafood shacks near the market:</strong> Fresh
                      catch — grilled fish, prawns, and lobster — at
                      reasonable prices close to the jetty.
                    </li>
                    <li>
                      <strong>Resort restaurants:</strong> Higher-end dining
                      with wider menus, mostly attached to the island's
                      mid-range and luxury resorts.
                    </li>
                    <li>
                      <strong>Café-style spots near Radhanagar Road:</strong>{" "}
                      Casual all-day options for travellers based near the
                      beach rather than the market.
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
                            "₹5,000",
                            "₹18,000",
                          ],
                          ["Ferry (round trip)", "₹1,200", "₹2,000", "₹2,000"],
                          ["Food/day", "₹700", "₹1,800", "₹4,000"],
                          [
                            "Discover Scuba dive",
                            "₹3,500",
                            "₹4,000",
                            "₹4,500",
                          ],
                          ["Local transport/day", "₹300", "₹700", "₹1,500"],
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
                    * Figures are per person, per day (except ferry, a round
                    trip figure). Diving is priced per session, not daily.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Havelock</h2>
                  <ul>
                    <li>
                      <strong>Book ferries in advance during peak
                      season:</strong> December-January sells out days
                      ahead — don't rely on walk-up tickets.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs on Havelock are
                      limited and occasionally run out — withdraw what you
                      need in Port Blair first.
                    </li>
                    <li>
                      <strong>Rent a scooter for flexibility:</strong> The
                      island's single main road makes self-driving easy and
                      is the most convenient way to reach Radhanagar Beach on
                      your own schedule.
                    </li>
                    <li>
                      <strong>Pack reef-safe sunscreen:</strong> Protects
                      both your skin and the coral you'll be swimming or
                      diving over.
                    </li>
                    <li>
                      <strong>Combine with Neil Island:</strong> A short
                      ferry hop away, Neil offers a quieter, slower contrast
                      after Havelock's bigger crowds.
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
                          "Book ferry and dive slots ahead in peak season",
                          "Visit Radhanagar Beach for sunset",
                          "Try a Discover Scuba dive even as a beginner",
                          "Carry enough cash for the whole stay",
                          "Rent a scooter to explore at your own pace",
                          "Pair Havelock with a Neil Island stop",
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
                          "Assume walk-up ferry tickets in December-January",
                          "Expect wide ATM access on the island",
                          "Touch or step on coral while snorkelling",
                          "Skip sunscreen even on cloudy days",
                          "Rush Radhanagar into a quick photo stop",
                          "Book a same-day onward ferry with no buffer",
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
                    <strong>🗺️ Extend the trip:</strong> After Havelock, most
                    travellers ferry onward to{" "}
                    <Link href="/blog/neil-island-andaman-travel-guide">
                      Neil Island (Shaheed Dweep)
                    </Link>{" "}
                    for a slower couple of days, before returning to{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>{" "}
                    for departure.
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
                  "Havelock Island",
                  "Swaraj Dweep",
                  "Radhanagar Beach",
                  "Elephant Beach",
                  "Scuba Diving",
                  "Andaman",
                  "Ritchie's Archipelago",
                  "Beaches",
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

              <RelatedPostsGrid currentSlug="havelock-island-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="havelock-island-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
