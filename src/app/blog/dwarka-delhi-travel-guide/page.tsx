// src/app/blog/dwarka-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dwarka Delhi Travel Guide: Sub-City & ISKCON Temple",
  description:
    "Guide to Dwarka, Delhi's sub-city near IGI Airport — ISKCON Temple, sector markets, Delhi Metro Blue Line access, and why it's not Dwarka, Gujarat.",
  keywords:
    "Dwarka Delhi, Dwarka sub city Delhi, ISKCON temple Dwarka, Dwarka sector markets, Dwarka Delhi metro, Dwarka Delhi vs Dwarka Gujarat, Sri Sri Radha Parthasarathi Mandir, Dwarka South West Delhi",
  openGraph: {
    title: "Dwarka Delhi Travel Guide: Sub-City & ISKCON Temple",
    description:
      "One of Asia's largest planned sub-cities, minutes from IGI Airport — Dwarka in South West Delhi, its ISKCON Temple, sector markets, and metro access. Not to be confused with Dwarka, Gujarat.",
    url: "https://club.kudozz.in/blog/dwarka-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Sandstone architecture at golden hour, used here to represent Delhi travel content — Dwarka sub-city itself is a modern planned residential district, not a historic monument site",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarka Delhi Travel Guide: Sub-City & ISKCON Temple",
    description:
      "One of Asia's largest planned sub-cities, minutes from IGI Airport — Dwarka in South West Delhi, its ISKCON Temple, and metro access. Not Dwarka, Gujarat.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dwarka-delhi-travel-guide",
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
          headline: "Dwarka Delhi Travel Guide: Sub-City & ISKCON Temple",
          description:
            "Guide to Dwarka, Delhi's sub-city near IGI Airport — ISKCON Temple, sector markets, Delhi Metro Blue Line access, and why it's not Dwarka, Gujarat.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
          datePublished: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/dwarka-delhi-travel-guide",
          },
          keywords:
            "Dwarka Delhi, Dwarka sub city Delhi, ISKCON temple Dwarka, Dwarka sector markets, Dwarka Delhi metro",
          about: {
            "@type": "Place",
            name: "Dwarka, Delhi",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dwarka",
              addressRegion: "Delhi",
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
                name: "Delhi",
                item: "https://club.kudozz.in/blog/delhi-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Dwarka",
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
    q: "Is Dwarka Delhi the same as Dwarka in Gujarat?",
    a: "No, they are completely different places. Dwarka in Gujarat is an ancient pilgrimage town on the Arabian Sea coast and one of the Char Dham sites associated with Krishna. Dwarka in Delhi is a modern, planned residential sub-city in South West Delhi, developed from the 1990s onward by the Delhi Development Authority. They share only a name — there is no historical or religious connection between the two.",
  },
  {
    q: "Is Dwarka Delhi near the airport?",
    a: "Yes. Dwarka sub-city sits just a few kilometres from Indira Gandhi International Airport (IGI), making it one of the most convenient areas in Delhi for an airport-adjacent stay, a stopover between flights, or a base for early-morning departures without a long pre-dawn drive across the city.",
  },
  {
    q: "What is Dwarka Delhi famous for?",
    a: "Dwarka is best known for being one of Asia's largest planned residential sub-cities by area, for the large ISKCON Temple (Sri Sri Radha Parthasarathi Mandir) in Sector 13, for its grid of numbered sectors each with its own local market, and for its proximity to IGI Airport and Dwarka Expressway.",
  },
  {
    q: "How do I reach Dwarka by Delhi Metro?",
    a: "Dwarka is served by multiple Blue Line stations, including Dwarka, Dwarka Sector 9, Sector 10, Sector 11, Sector 12, Sector 13, Sector 14, and Dwarka Sector 21 — the last of which connects onward to the Airport Express Line. This gives Dwarka one of the densest metro-station distributions of any sub-city in Delhi.",
  },
  {
    q: "Is the ISKCON Temple in Dwarka the same as the one in East of Kailash?",
    a: "No. Delhi has two separate ISKCON temples. The older, more widely known one is in East of Kailash in South Delhi. The Dwarka ISKCON Temple — officially Sri Sri Radha Parthasarathi Mandir — is a separate, considerably newer and larger complex in Sector 13, built later as part of ISKCON's expansion in the city.",
  },
  {
    q: "Is Dwarka a tourist destination in Delhi?",
    a: "Not in the traditional sense — Dwarka has no Mughal monuments or heritage sites. It's primarily a residential and commercial sub-city, useful to travellers mainly as a practical, well-connected place to stay near the airport, visit the ISKCON Temple, or get a look at how a large, self-contained planned Delhi neighbourhood actually functions day to day.",
  },
  {
    q: "How many sectors does Dwarka have?",
    a: "Dwarka is organised into numbered sectors — broadly Sectors 1 through 29 across its planned layout — though not every sector is fully developed or populated. Each developed sector functions as a semi-self-contained neighbourhood with its own local market, parks, and residential blocks.",
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
  { id: "introduction", title: "Dwarka, Delhi: Not Gujarat's Dwarka", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dwarka", level: 2 },
  { id: "iskcon-temple", title: "ISKCON Temple Dwarka", level: 2 },
  { id: "sectors-markets", title: "Sectors, Markets & Everyday Life", level: 2 },
  { id: "green-spaces", title: "Parks & Green Spaces", level: 2 },
  { id: "why-it-matters", title: "Why Dwarka Matters for Travellers", level: 2 },
  { id: "itinerary", title: "A Short Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DwarkaDelhiGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Sandstone architecture at golden hour, used here to represent Delhi travel content — Dwarka sub-city itself is a modern planned residential district, not a historic monument site"
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
                { label: "Delhi", href: "/blog/delhi-travel-guide" },
                { label: "Dwarka", href: null },
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
                "Dwarka Delhi",
                "ISKCON Temple",
                "South West Delhi",
                "Sub-City",
                "Airport Access",
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
              Dwarka, Delhi Travel Guide: Sub-City & ISKCON Temple
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of Asia's largest planned residential sub-cities, minutes
              from IGI Airport, home to the sprawling ISKCON Temple complex
              and a dense grid of numbered sectors — this is Delhi's Dwarka,
              not the pilgrimage town in Gujarat.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "South West Delhi",
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
                  <h2>Dwarka, Delhi: Not to Be Confused with Gujarat's Dwarka</h2>
                  <p>
                    <strong>Not to be confused with the pilgrimage town of
                    Dwarka in Gujarat</strong> — the ancient coastal city on
                    the Arabian Sea associated with Krishna and counted among
                    the Char Dham — <strong>Dwarka in Delhi</strong> is a
                    completely different kind of place. It's a modern,
                    purpose-built residential sub-city in South West{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link>, with
                    no historical or religious link to its Gujarati namesake
                    beyond sharing a name rooted in the same Sanskrit word.
                  </p>
                  <p>
                    Dwarka Sub-City is one of{" "}
                    <strong>Asia's largest planned residential
                    sub-cities</strong> by area, developed by the{" "}
                    <strong>Delhi Development Authority (DDA)</strong>{" "}
                    starting in the 1990s as part of an effort to decongest
                    central Delhi by creating a large, self-contained
                    satellite township on the city's south-western edge.
                    Rather than growing organically like Old Delhi's lanes or
                    South Delhi's older colonies, Dwarka was laid out on a
                    grid from the start — a series of numbered sectors, each
                    designed to function as a semi-independent neighbourhood
                    with its own housing, market, schools, and green space.
                  </p>
                  <p>
                    For travellers, Dwarka isn't a monument-hopping
                    destination — there's no Red Fort or Qutub Minar here.
                    What it offers instead is a genuinely useful mix: one of
                    the largest ISKCON temple complexes in North India, a
                    location just minutes from IGI Airport, dense Delhi
                    Metro coverage, and a look at how a large, functioning,
                    everyday Delhi neighbourhood actually operates outside
                    the tourist circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏙️</span> Dwarka, Delhi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South West Delhi, NCT",
                        },
                        {
                          icon: "🏗️",
                          label: "Developed By",
                          value: "DDA, from the 1990s",
                        },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "IGI Airport (few km away)",
                        },
                        {
                          icon: "🚇",
                          label: "Metro Line",
                          value: "Blue Line (multiple stations)",
                        },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "ISKCON Temple, Sector Markets",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹6,000",
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

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📌 Quick disambiguation:</strong> If you're
                    planning a Char Dham pilgrimage or searching for the
                    coastal Krishna temple town, you want Dwarka in Gujarat —
                    this guide covers Dwarka the Delhi sub-city, over 1,000
                    km away.
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Dwarka, Delhi</h2>
                  <p>
                    Dwarka follows the same broad climate pattern as the rest
                    of Delhi — hot, dry summers, a wet monsoon, and cool,
                    comfortable winters — so the best window for visiting the
                    ISKCON Temple or exploring the sectors on foot mirrors
                    the wider city's ideal travel season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days make walking between sectors, visiting the temple, and exploring local markets genuinely pleasant.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around it",
                        text: "Daytime temperatures regularly cross 40°C. Stick to early morning or evening for the temple and outdoor sector markets.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional waterlogging",
                        text: "Some low-lying sector roads see waterlogging during heavy spells, though the heat breaks noticeably.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold, with poor air quality",
                        text: "Pleasant temperatures but Delhi-wide winter smog affects Dwarka too — carry a mask if sensitive to pollution.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    enough for walking between sectors and spending unhurried
                    time at the ISKCON Temple complex without fighting the
                    heat.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Dwarka</h2>
                  <p>
                    Dwarka is one of the best-connected sub-cities in Delhi,
                    largely because it was planned with transit in mind from
                    the outset — and its proximity to IGI Airport makes it
                    unusually convenient for travellers passing through the
                    city.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Indira Gandhi International
                      Airport (IGI) is just a few kilometres from Dwarka's
                      outer sectors, making it one of the closest
                      residential areas to the airport terminals — a
                      genuinely practical choice for an overnight stay before
                      an early flight.
                    </li>
                    <li>
                      <strong>By Metro:</strong> Dwarka sits on the{" "}
                      <strong>Delhi Metro Blue Line</strong>, with an
                      unusually dense run of stations through the sub-city —
                      Dwarka, Dwarka Sector 9, Sector 10, Sector 11, Sector
                      12, Sector 13, and Sector 14, plus Dwarka Sector 21,
                      which also connects to the Airport Express Line.
                    </li>
                    <li>
                      <strong>By Road:</strong> The Dwarka Expressway
                      (Northern Peripheral Road) links Dwarka directly toward
                      Gurugram and Haryana, while National Highway 48 and
                      well-maintained arterial roads connect it to the rest
                      of Delhi.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you have an early-morning
                    international flight, staying a night in Dwarka rather
                    than central Delhi can shave 45–60 minutes off your
                    airport run, especially avoiding peak-hour traffic on the
                    main city roads.
                  </div>
                </section>

                {/* ── ISKCON Temple ─────────────────────────────────────── */}
                <section id="iskcon-temple">
                  <h2>ISKCON Temple Dwarka (Sri Sri Radha Parthasarathi Mandir)</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Stock architectural image used to represent temple travel content — not a photo of the actual ISKCON Temple Dwarka complex"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The largest single draw for outside visitors to Dwarka is
                    the <strong>ISKCON Temple</strong> in Sector 13, formally
                    known as <strong>Sri Sri Radha Parthasarathi
                    Mandir</strong>. It's important to note this is a{" "}
                    <strong>separate complex from Delhi's older, more
                    widely known ISKCON temple in East of Kailash</strong> —
                    the Dwarka temple was built considerably later, as part
                    of ISKCON's continued expansion in the city, and is a
                    large, modern complex in its own right rather than an
                    extension of the East of Kailash site.
                  </p>
                  <ul>
                    <li>
                      <strong>Scale:</strong> One of the larger ISKCON
                      temple complexes in North India, with expansive prayer
                      halls, gardens, and space for large congregational
                      gatherings during festivals.
                    </li>
                    <li>
                      <strong>Architecture:</strong> A modern temple design
                      blending traditional Vaishnavite temple elements with
                      contemporary construction — distinct in style from the
                      older East of Kailash temple.
                    </li>
                    <li>
                      <strong>Daily rhythm:</strong> Regular aarti timings,
                      kirtan sessions, and a temple canteen/prasadam counter
                      typical of ISKCON centres, drawing both local devotees
                      from across Dwarka's sectors and visitors from
                      elsewhere in Delhi.
                    </li>
                    <li>
                      <strong>Festivals:</strong> Janmashtami and other major
                      Vaishnavite festivals see significantly larger crowds
                      and extended programming — worth timing a visit around
                      if that interests you, or avoiding if you prefer a
                      quieter visit.
                    </li>
                  </ul>
                  <p>
                    Because the Dwarka ISKCON Temple sits inside a
                    residential sub-city rather than a dense tourist zone,
                    it tends to feel calmer and less crowded on an average
                    day than some of Delhi's more famous religious sites —
                    a genuine point in its favour for visitors who prefer a
                    less frenetic experience.
                  </p>
                </section>

                {/* ── Sectors & Markets ──────────────────────────────────── */}
                <section id="sectors-markets">
                  <h2>Sectors, Local Markets & Everyday Life</h2>
                  <p>
                    What makes Dwarka worth understanding, even for
                    travellers who aren't staying there, is how differently
                    it functions compared to the rest of Delhi. Rather than
                    a single dense urban core, Dwarka is a grid of{" "}
                    <strong>numbered sectors</strong> — broadly Sectors 1
                    through 29 in its planned layout, though development
                    density varies — each built to be largely
                    self-sufficient, with its own housing blocks, local
                    market, schools, and parks.
                  </p>
                  <ul>
                    <li>
                      <strong>Sector markets:</strong> Almost every developed
                      sector has its own small commercial strip — grocery
                      stores, everyday eateries, tailors, salons, and
                      pharmacies — built for residents rather than visitors,
                      which makes them a good, unfiltered look at ordinary
                      Delhi life.
                    </li>
                    <li>
                      <strong>Sector 12 & Sector 6 markets:</strong> Among
                      the more established and busier local markets in
                      Dwarka, with a wider spread of shops and food options
                      than the smaller sector strips.
                    </li>
                    <li>
                      <strong>Housing mix:</strong> A combination of DDA
                      housing societies, private apartment complexes, and
                      independent residential plots — reflecting Dwarka's
                      identity as a mixed, largely middle-class residential
                      township rather than an upscale or heritage
                      neighbourhood.
                    </li>
                    <li>
                      <strong>A practical, lived-in neighbourhood:</strong>{" "}
                      Unlike Old Delhi or Connaught Place, Dwarka isn't
                      designed around tourism at all — it's genuinely a
                      residential and commercial sub-city, which is exactly
                      what makes a walk through it interesting if you want
                      to see how a large chunk of Delhi's population
                      actually lives day to day.
                    </li>
                  </ul>
                </section>

                {/* ── Green Spaces ──────────────────────────────────────── */}
                <section id="green-spaces">
                  <h2>Parks & Green Spaces</h2>
                  <p>
                    As a planned township, Dwarka was built with district
                    parks and green belts integrated into its layout from
                    the start — a notable contrast to the more haphazard
                    green space distribution in older parts of the city.
                  </p>
                  <ul>
                    <li>
                      <strong>Sector-wise district parks:</strong> Most
                      sectors include a dedicated park or green space, used
                      heavily by residents for morning walks, evening
                      strolls, and weekend family time.
                    </li>
                    <li>
                      <strong>Wider, planned road layouts:</strong> Broad,
                      tree-lined sector roads make Dwarka noticeably more
                      walkable and less congested than much of central
                      Delhi.
                    </li>
                    <li>
                      <strong>A quieter pace:</strong> The combination of
                      planned green cover and lower density than Old or
                      Central Delhi gives Dwarka a calmer, more suburban
                      atmosphere overall.
                    </li>
                  </ul>
                </section>

                {/* ── Why It Matters ─────────────────────────────────────── */}
                <section id="why-it-matters">
                  <h2>Why Dwarka Matters for Travellers</h2>
                  <p>
                    Dwarka isn't a sightseeing destination the way Old Delhi
                    or Agra are — most travellers will encounter it for one
                    of a few practical reasons, and it's worth being honest
                    about that rather than overselling it as a monument
                    circuit.
                  </p>
                  <ul>
                    <li>
                      <strong>Airport-adjacent stays:</strong> Its proximity
                      to IGI Airport makes Dwarka a genuinely convenient
                      base for late-arrival or early-departure flights,
                      layovers, and business travel tied to the airport or
                      nearby Gurugram.
                    </li>
                    <li>
                      <strong>A transit and business hub:</strong> Good metro
                      and expressway access make Dwarka a practical stopover
                      point between South Delhi, Gurugram, and the airport
                      corridor.
                    </li>
                    <li>
                      <strong>Religious visit:</strong> The ISKCON Temple
                      alone draws a meaningful number of dedicated visitors,
                      particularly during festivals.
                    </li>
                    <li>
                      <strong>A different side of Delhi:</strong> For anyone
                      who has already covered the city's major monuments,
                      Dwarka offers a genuinely different, modern-planned
                      counterpoint to Old Delhi's density and chaos.
                    </li>
                  </ul>
                  <blockquote>
                    Think of Dwarka less as a "things to see" destination and
                    more as a practical, well-connected place to stay,
                    transit through, or visit for the ISKCON Temple —
                    honest expectations make for a better visit.
                  </blockquote>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>A Short Visit Plan for Dwarka</h2>
                  <p>
                    Most visitors don't need more than a half-day to a full
                    day in Dwarka itself — here's a simple plan that covers
                    the highlights without padding.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "ISKCON Temple, Sector 13",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early for a calmer, less crowded visit",
                          "Attend morning aarti if timing allows",
                          "Prasadam at the temple canteen",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Sector Markets",
                        color: "bg-forest-600",
                        activities: [
                          "Walk through Sector 12 or Sector 6 market",
                          "Lunch at a local eatery",
                          "Browse everyday shops for a lived-in feel of Dwarka",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "District Park & Metro Loop",
                        color: "bg-sky-600",
                        activities: [
                          "Relax at a nearby sector district park",
                          "Optional: short metro ride to see multiple sector stations",
                          "Head onward — to the airport, or back into central Delhi",
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
                    * Combine this easily with nearby neighbourhoods like{" "}
                    <Link href="/blog/janakpuri-delhi-travel-guide">
                      Janakpuri
                    </Link>
                    ,{" "}
                    <Link href="/blog/vasant-kunj-delhi-travel-guide">
                      Vasant Kunj
                    </Link>
                    , or{" "}
                    <Link href="/blog/najafgarh-delhi-travel-guide">
                      Najafgarh
                    </Link>{" "}
                    if you're exploring South West Delhi more broadly.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Dwarka is generally more affordable than Central or South
                    Delhi for accommodation, given its residential character
                    and distance from the main tourist circuit — a
                    reasonable trade-off if airport proximity matters more
                    than being close to the monuments.
                  </p>
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
                            "₹1,000",
                            "₹3,500",
                            "₹9,000",
                          ],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          ["Local transport/day", "₹150", "₹400", "₹1,200"],
                          [
                            "Airport transfer (one-way)",
                            "₹150 (metro)",
                            "₹400 (auto/cab)",
                            "₹800 (premium cab)",
                          ],
                          ["Daily total (approx.)", "₹1,700", "₹5,300", "₹13,500"],
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
                    * ISKCON Temple entry is free (donations welcome).
                    Figures are approximate and exclude travel to Delhi
                    itself.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Dwarka</h2>
                  <ul>
                    <li>
                      <strong>Double-check which "Dwarka" you're booking
                      for:</strong> When booking flights, trains, or hotels,
                      confirm you're searching Dwarka, Delhi and not Dwarka,
                      Gujarat — the names are identical in most search
                      results.
                    </li>
                    <li>
                      <strong>Use the metro to navigate sectors:</strong>{" "}
                      With eight-plus stations across the sub-city, the
                      Blue Line is by far the easiest way to move between
                      Dwarka's sectors without relying on local transport.
                    </li>
                    <li>
                      <strong>Dress modestly at the ISKCON Temple:</strong>{" "}
                      Covered shoulders and knees are expected, as at any
                      active temple complex.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> Dwarka is
                      a residential sub-city, not a heritage site — visit
                      for the temple, the airport convenience, or the
                      neighbourhood experience, not for monuments.
                    </li>
                    <li>
                      <strong>Check aarti timings in advance:</strong> If
                      visiting ISKCON Dwarka specifically for the temple
                      rituals, confirm current aarti and darshan timings
                      before heading out.
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
                          "Confirm you're booking Dwarka, Delhi (not Gujarat)",
                          "Use the Blue Line metro to move between sectors",
                          "Visit ISKCON Temple early for a quieter experience",
                          "Consider Dwarka for airport-adjacent stays",
                          "Walk a sector market for an authentic Delhi feel",
                          "Check temple aarti timings before visiting",
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
                          "Confuse this ISKCON temple with the East of Kailash one",
                          "Expect Mughal monuments or heritage architecture",
                          "Book Gujarat-Dwarka travel by mistake",
                          "Skip modest dress at the temple complex",
                          "Assume every sector is equally developed",
                          "Ignore Delhi's winter AQI if visiting Nov–Jan",
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
                    <strong>🗺️ Extend the trip:</strong> Dwarka pairs
                    naturally with nearby South West Delhi neighbourhoods —{" "}
                    <Link href="/blog/janakpuri-delhi-travel-guide">
                      Janakpuri
                    </Link>{" "}
                    for its own metro-linked markets,{" "}
                    <Link href="/blog/vasant-kunj-delhi-travel-guide">
                      Vasant Kunj
                    </Link>{" "}
                    for upscale malls, or{" "}
                    <Link href="/blog/najafgarh-delhi-travel-guide">
                      Najafgarh
                    </Link>{" "}
                    for a quieter, more rural edge of the capital.
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
                  "Dwarka Delhi",
                  "Delhi",
                  "ISKCON Temple Dwarka",
                  "South West Delhi",
                  "Delhi Sub-City",
                  "Delhi Metro",
                  "Airport Stay",
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

              <RelatedPostsGrid currentSlug="dwarka-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dwarka-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
