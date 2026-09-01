// src/app/blog/sector-17-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sector 17 Chandigarh Travel Guide: Plaza, Shops & Cafés",
  description:
    "Complete guide to Sector 17, Chandigarh's Le Corbusier-designed city-centre plaza — the pedestrian shopping precinct, Neelam Cinema, evening fountains, cafés, and how to plan your visit.",
  keywords:
    "Sector 17 Chandigarh, Sector 17 Plaza, Chandigarh Plaza, Neelam Cinema Chandigarh, Sector 17 market Chandigarh, Chandigarh city centre, things to do in Sector 17, Sector 17 shopping, Chandigarh evening plaza, Sector 17 bus stand, Le Corbusier Sector 17, Sector 17 cafes Chandigarh",
  openGraph: {
    title: "Sector 17 Chandigarh Travel Guide: Plaza, Shops & Cafés",
    description:
      "A car-free plaza of shops, fountains and cafés at the heart of Le Corbusier's Chandigarh — the complete guide to Sector 17.",
    url: "https://club.kudozz.in/blog/sector-17-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wide open plaza with hills in the distance, evoking Sector 17's car-free civic centre in Chandigarh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sector 17 Chandigarh Travel Guide: Plaza, Shops & Cafés",
    description:
      "A car-free plaza of shops, fountains and cafés at the heart of Le Corbusier's Chandigarh — the complete guide to Sector 17.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sector-17-chandigarh-travel-guide",
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
          headline: "Sector 17 Chandigarh Travel Guide: Plaza, Shops & Cafés",
          description:
            "Complete guide to Sector 17, Chandigarh's Le Corbusier-designed city-centre plaza — the pedestrian shopping precinct, Neelam Cinema, evening fountains, cafés, and how to plan your visit.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
          datePublished: "2026-08-31",
          dateModified: "2026-08-31",
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
            "@id": "https://club.kudozz.in/blog/sector-17-chandigarh-travel-guide",
          },
          keywords:
            "Sector 17 Chandigarh, Sector 17 Plaza, Neelam Cinema, Chandigarh city centre, Sector 17 shopping",
          about: {
            "@type": "Place",
            name: "Sector 17, Chandigarh",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chandigarh",
              addressRegion: "Chandigarh",
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
                name: "Chandigarh",
                item: "https://club.kudozz.in/blog/chandigarh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Sector 17",
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
    q: "What is Sector 17 in Chandigarh?",
    a: "Sector 17 is Chandigarh's central business and civic district, designed as part of Le Corbusier's original city plan. At its heart is Sector 17 Plaza, a large, car-free pedestrian precinct lined with shops, showrooms and cafés arranged around open courtyards and fountains — historically the city's single most important commercial hub.",
  },
  {
    q: "Is Sector 17 Plaza pedestrian-only?",
    a: "Yes, the core shopping plaza is a pedestrian-friendly, largely car-free precinct — vehicles are kept to the surrounding roads and parking areas rather than the plaza itself, which is one of the reasons it still works so well as a place to simply walk around and browse.",
  },
  {
    q: "Is there an entry fee for Sector 17 Plaza?",
    a: "No — Sector 17 is an open city-centre plaza, not a ticketed attraction. You can walk in freely at any time; the only costs involved are whatever you choose to spend on shopping, food, or a movie ticket at Neelam Cinema.",
  },
  {
    q: "What is Neelam Cinema?",
    a: "Neelam Cinema is one of Chandigarh's well-known old single-screen theatres, located within Sector 17. It's a bit of a local landmark in its own right — a reminder of the plaza's decades-long role as the city's primary entertainment and shopping destination, alongside the newer multiplexes that have since opened around the city.",
  },
  {
    q: "What is the best time to visit Sector 17 in the evening?",
    a: "Early evening, roughly from about an hour before sunset onward, is when Sector 17 is at its best — the plaza's fountains and lights come on, the day's heat has eased, and the crowd shifts from daytime shoppers to a relaxed mix of walkers, families and groups out for food, especially on weekends.",
  },
  {
    q: "How do I reach Sector 17 from other parts of Chandigarh?",
    a: "Sector 17 sits centrally in the city and is well connected — the (older) Sector 17 bus stand serves local and inter-city routes, and autos or cabs from almost any other sector, including Sector 22, Sector 26 or Sector 35, take only a short ride to reach it.",
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
  { id: "introduction", title: "Chandigarh's City Centre", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-plaza", title: "The Plaza", level: 2 },
  { id: "shopping", title: "Shopping in Sector 17", level: 2 },
  { id: "food-and-cafes", title: "Food & Cafés", level: 2 },
  { id: "neelam-cinema", title: "Neelam Cinema", level: 2 },
  { id: "nearby", title: "Nearby Sights", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Sector17ChandigarhGuidePage() {
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
              src="/images/destinations/chandigarh/hero.jpg"
              alt="Wide open plaza with hills in the distance, evoking Sector 17's car-free civic centre in Chandigarh"
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
                { label: "Chandigarh", href: "/blog/chandigarh-travel-guide" },
                { label: "Sector 17", href: null },
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
                "Sector 17",
                "Chandigarh",
                "City Centre Plaza",
                "Shopping",
                "Neelam Cinema",
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
              Sector 17, Chandigarh: The City Centre Plaza Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A car-free plaza of shops, fountains and cafés designed by Le
              Corbusier as the heart of his new city — still the most
              walkable, most atmospheric place in Chandigarh to spend an
              evening.
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
                  text: "Sector 17, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,700 words",
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
                  <h2>Chandigarh's City Centre</h2>
                  <p>
                    <strong>Sector 17</strong> is the central business and
                    civic district of{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>
                    , designed by Le Corbusier's team as the commercial heart
                    of India's first fully planned city. Its centrepiece is{" "}
                    <strong>Sector 17 Plaza</strong> — a large, car-free
                    pedestrian precinct where shops, showrooms and cafés are
                    arranged around a series of open courtyards and fountains,
                    a layout that still feels genuinely rare among Indian city
                    centres.
                  </p>
                  <p>
                    For decades, Sector 17 was simply <em>the</em> place to
                    shop and be seen in Chandigarh — the city's most
                    important commercial hub long before newer malls like
                    Elante arrived to add competition. What it has kept, and
                    what the air-conditioned malls can't quite replicate, is
                    its identity as a walkable, open-air city-centre plaza,
                    with fountains, benches and a genuinely mixed crowd rather
                    than a single indoor building.
                  </p>
                  <p>
                    Because it sits centrally and is well connected — close
                    to the older Sector 17 bus stand and an easy hop from
                    almost anywhere else in the city — it works naturally as
                    an anchor point for a day of sightseeing, whether that's
                    combined with the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    earlier in the day or the{" "}
                    <Link href="/blog/sector-26-chandigarh-travel-guide">
                      Sector 26 food street
                    </Link>{" "}
                    later in the evening. It's also an easy walk or short auto
                    ride from{" "}
                    <Link href="/blog/sector-22-chandigarh-travel-guide">
                      Sector 22
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/sector-35-chandigarh-travel-guide">
                      Sector 35
                    </Link>
                    , two of the city's other well-known residential-cum-
                    commercial sectors.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏙️</span> Sector 17 at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Central Chandigarh",
                        },
                        {
                          icon: "🏛️",
                          label: "Designed By",
                          value: "Le Corbusier's team",
                        },
                        {
                          icon: "🚶",
                          label: "Plaza",
                          value: "Car-free, pedestrian",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free / open plaza",
                        },
                        {
                          icon: "⏰",
                          label: "Best Time",
                          value: "Early evening onward",
                        },
                        {
                          icon: "🚏",
                          label: "Nearby",
                          value: "Sector 22 / Sector 26",
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
                  <h2>Best Time to Visit Sector 17</h2>
                  <p>
                    Sector 17 works at any hour for shopping, but it's a
                    genuinely different place after dark — the plaza's
                    fountains and lights come on, and a daytime shopping
                    precinct turns into one of the city's most relaxed
                    evening hangouts.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Early Evening",
                        emoji: "🌇",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall window",
                        text: "From roughly an hour before sunset, the day's heat eases, the fountains and plaza lights switch on, and the crowd shifts to a relaxed weekend mix of walkers, families and groups out for food.",
                      },
                      {
                        season: "Weekday Mornings",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Quietest for shopping",
                        text: "If you'd rather browse shops without crowds, weekday mornings are noticeably calmer — most of the plaza's showrooms open by mid-morning.",
                      },
                      {
                        season: "Weekend Evenings",
                        emoji: "🎉",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Busiest, most atmosphere",
                        text: "Friday and Saturday evenings bring the biggest crowds — livelier, noisier, and arguably the best time to feel Sector 17's identity as Chandigarh's social centre.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Best season overall",
                        text: "Cool, comfortable temperatures make even a midday visit pleasant, and evening walks around the plaza especially enjoyable.",
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
                    <strong>Our pick:</strong> a weekend evening, arriving
                    close to sunset. You'll catch the fountains and lights
                    coming on, comfortable temperatures, and Sector 17 at its
                    most social — exactly the atmosphere it was designed for.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sector 17</h2>
                  <p>
                    Sector 17 sits centrally in Chandigarh's sector grid,
                    which makes it one of the easiest places in the city to
                    reach from almost anywhere else.
                  </p>
                  <ul>
                    <li>
                      <strong>By Bus:</strong> The older Sector 17 bus stand
                      serves both local city routes and several inter-city
                      services, making the plaza a natural first or last stop
                      on a Chandigarh visit.
                    </li>
                    <li>
                      <strong>By Auto/Cab:</strong> Autos and app-based cabs
                      from any other sector, including Sector 22, Sector 26 or
                      Sector 35, typically take only a short ride to reach
                      Sector 17 — the simplest option if you're coming from
                      further out.
                    </li>
                    <li>
                      <strong>On foot from Sector 22:</strong> If you're
                      staying in Sector 22, Sector 17 is a comfortable walking
                      distance or a very short auto ride away, making the two
                      sectors easy to combine in one outing.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Because Sector 17 is so
                    central, it's a sensible base point to plan a day around —
                    start or end your sightseeing here rather than treating it
                    as a separate trip.
                  </div>
                </section>

                {/* ── The Plaza ──────────────────────────────────────────── */}
                <section id="the-plaza">
                  <h2>The Plaza</h2>
                  <p>
                    Sector 17 Plaza is the clearest surviving example of Le
                    Corbusier's vision for how Chandigarh's residents would
                    shop and gather. Rather than a single street of storefronts,
                    the plaza is broken into a series of pedestrian courtyards,
                    connected by covered walkways, with shops and showrooms
                    arranged around open spaces rather than facing a road.
                    Fountains punctuate several of these plazas, and it's this
                    combination — open air, no traffic, and water features
                    that come alive after dark — that gives Sector 17 a
                    character genuinely different from a typical Indian
                    market street.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Open pedestrian plaza with fountains and surrounding shopfronts, evoking Sector 17 Plaza's car-free courtyards in Chandigarh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    The plaza also houses several of the city's municipal and
                    civic buildings, reflecting its original role as
                    Chandigarh's administrative as well as commercial centre.
                    Even as newer malls like Elante Mall have opened elsewhere
                    in the city and pulled away some of the shopping crowd,
                    Sector 17 has held onto its identity — it's still the
                    plaza locals mean when they say they're "going to 17,"
                    and it remains the most walkable, most photogenic public
                    space in central Chandigarh.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Walk the plaza without a
                    specific shopping list first — the courtyards are laid out
                    for wandering, and you'll get a better feel for
                    Corbusier's design by simply moving between them than by
                    heading straight for one particular shop.
                  </div>
                </section>

                {/* ── Shopping ───────────────────────────────────────────── */}
                <section id="shopping">
                  <h2>Shopping in Sector 17</h2>
                  <p>
                    Sector 17 remains Chandigarh's most traditional shopping
                    destination — a mix of long-standing local shops, clothing
                    and footwear showrooms, bookstores, and branches of
                    national chains, all spread across the plaza's connected
                    courtyards rather than concentrated in one building.
                  </p>
                  <ul>
                    <li>
                      <strong>Clothing and footwear showrooms:</strong>{" "}
                      Multiple blocks of the plaza are given over to apparel
                      and footwear, ranging from local Punjab-based brands to
                      recognisable national chains.
                    </li>
                    <li>
                      <strong>Bookstores and stationery:</strong> A few
                      long-running bookshops in the plaza are worth a browse,
                      especially for anyone interested in regional publishing.
                    </li>
                    <li>
                      <strong>General and specialty stores:</strong> Sector 17
                      still has the everyday mix of a genuine city centre —
                      electronics, jewellery, and household goods sit alongside
                      the more visitor-facing shops.
                    </li>
                  </ul>
                  <p>
                    For a more air-conditioned, mall-style shopping trip, the
                    Chandigarh hub guide covers{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Elante Mall
                    </Link>{" "}
                    separately — Sector 17 is the better choice if what you
                    actually want is the open-air, walkable version of city
                    shopping.
                  </p>
                </section>

                {/* ── Food & Cafés ───────────────────────────────────────── */}
                <section id="food-and-cafes">
                  <h2>Food & Cafés</h2>
                  <p>
                    Sector 17 has a genuinely good café culture for a city
                    this size, partly a legacy of Chandigarh's large student
                    and government-employee population, who have long used the
                    plaza's cafés as informal meeting spots.
                  </p>
                  <ul>
                    <li>
                      <strong>Sit-down cafés:</strong> Several long-established
                      cafés around the plaza serve everything from quick
                      coffee to full meals, popular with both locals and
                      visitors.
                    </li>
                    <li>
                      <strong>Quick bites and street food:</strong> Smaller
                      stalls and fast-food counters dot the courtyards for a
                      faster option between shopping stops.
                    </li>
                    <li>
                      <strong>Evening food crowd:</strong> As the plaza fills
                      up after sunset, its food counters and cafés get busier
                      too — arriving a little before peak evening hours can
                      mean an easier wait for a table.
                    </li>
                  </ul>
                  <p>
                    If you're after something more focused on Punjabi
                    non-vegetarian food, the{" "}
                    <Link href="/blog/sector-26-chandigarh-travel-guide">
                      Sector 26 food street
                    </Link>{" "}
                    is only a short ride away and pairs naturally with an
                    evening that starts in Sector 17.
                  </p>
                </section>

                {/* ── Neelam Cinema ──────────────────────────────────────── */}
                <section id="neelam-cinema">
                  <h2>Neelam Cinema</h2>
                  <p>
                    Tucked within Sector 17 is <strong>Neelam Cinema</strong>,
                    one of Chandigarh's well-known old single-screen theatres.
                    It's something of a local landmark in its own right — a
                    reminder that Sector 17 has functioned as the city's
                    entertainment hub for decades, well before multiplexes
                    opened elsewhere in Chandigarh. Even if you're not
                    catching a film, it's worth a quick look for anyone
                    interested in the plaza's older civic buildings, which sit
                    alongside it.
                  </p>
                </section>

                {/* ── Nearby ─────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Sights</h2>
                  <p>
                    Sector 17's central location makes it a natural anchor for
                    a wider day out, whether you're combining it with a garden
                    visit earlier in the day or a food-focused evening
                    afterward.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/rose-garden-chandigarh-travel-guide">
                          Rose Garden
                        </Link>
                      </strong>
                      : A short ride away, and an easy pairing for a morning-
                      garden, evening-plaza kind of day.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sector-26-chandigarh-travel-guide">
                          Sector 26
                        </Link>
                      </strong>
                      : Home to the city's best-known food street, a natural
                      next stop after an evening at the plaza.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sector-22-chandigarh-travel-guide">
                          Sector 22
                        </Link>
                      </strong>
                      : A short walk or auto ride away, with a busier,
                      more everyday local market and budget-friendly
                      accommodation.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sector-35-chandigarh-travel-guide">
                          Sector 35
                        </Link>
                      </strong>
                      : Another convenient, centrally located sector, often
                      mentioned alongside Sector 17 and Sector 22 for
                      first-time visitors choosing where to stay.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1.5-2 Hours)</h2>
                  <p>
                    Sector 17 doesn't need a rigid itinerary — it rewards
                    unhurried wandering — but here's a simple structure for an
                    evening visit that covers the plaza's highlights.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-30 min",
                        title: "Arrive & Walk the Courtyards",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive close to sunset via the Sector 17 bus stand or by auto",
                          "Wander the connected pedestrian courtyards without a fixed plan",
                          "Watch the fountains and plaza lights switch on",
                        ],
                      },
                      {
                        day: "30-70 min",
                        title: "Shopping & Neelam Cinema",
                        color: "bg-forest-600",
                        activities: [
                          "Browse the clothing, footwear and general stores",
                          "Stop by Neelam Cinema and the nearby civic buildings",
                          "Photo stops around the plaza's fountains",
                        ],
                      },
                      {
                        day: "70-110 min",
                        title: "Food & Cafés",
                        color: "bg-sky-600",
                        activities: [
                          "Settle into one of the plaza's sit-down cafés",
                          "Or grab a quick bite from one of the food counters",
                          "People-watch as the evening crowd builds",
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
                    * Add extra time if you're combining Sector 17 with the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    beforehand or the{" "}
                    <Link href="/blog/sector-26-chandigarh-travel-guide">
                      Sector 26 food street
                    </Link>{" "}
                    afterward.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Sector 17 itself costs nothing to visit — it's an open
                    civic plaza, not a ticketed attraction — so your spend
                    depends entirely on shopping, food, and whether you catch
                    a film at Neelam Cinema.
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
                          ["Plaza entry", "Free", "Free", "Free"],
                          [
                            "Transport to/from plaza",
                            "₹40 (auto share)",
                            "₹150 (auto/cab)",
                            "₹400 (private cab)",
                          ],
                          ["Café / snacks", "₹200", "₹600", "₹1,500+"],
                          [
                            "Shopping (optional)",
                            "₹500+",
                            "₹2,000+",
                            "₹5,000+",
                          ],
                          ["Neelam Cinema ticket (optional)", "₹150", "₹250", "₹400"],
                          ["Total (approx., excl. shopping)", "₹390", "₹1,000", "₹2,300"],
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
                    * Figures are per person, per visit, and are approximate.
                    See our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a full daily budget breakdown across the city.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Sector 17</h2>
                  <ul>
                    <li>
                      <strong>Go for the evening, not just the shopping:</strong>{" "}
                      Sector 17's real character shows after dark, when the
                      fountains and lights come on — a purely daytime visit
                      misses half the point.
                    </li>
                    <li>
                      <strong>Vehicles stay at the edges:</strong> The plaza's
                      inner courtyards are pedestrian-only, so park or get
                      dropped off at the surrounding roads rather than
                      expecting to drive in.
                    </li>
                    <li>
                      <strong>Weekends are busiest:</strong> If you'd prefer a
                      quieter browse, stick to weekday mornings or early
                      afternoons instead of Friday or Saturday evening.
                    </li>
                    <li>
                      <strong>Combine it with nearby sectors:</strong> Sector
                      22, Sector 26 and Sector 35 are all close enough to fold
                      into the same outing without much extra travel time.
                    </li>
                    <li>
                      <strong>Carry cash for smaller stalls:</strong> Larger
                      showrooms accept cards and digital payments, but many of
                      the smaller food counters and stalls still work better
                      with cash.
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
                          "Visit close to sunset for the fountains and lights",
                          "Wander the courtyards without a fixed shopping list",
                          "Combine the visit with Sector 26's food street",
                          "Check out Neelam Cinema even if you skip a film",
                          "Use autos or cabs for the short hop from Sector 22",
                          "Carry some cash for smaller food stalls",
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
                          "Expect to drive directly into the pedestrian courtyards",
                          "Visit only at midday if the plaza atmosphere is the goal",
                          "Compare it directly to an air-conditioned mall experience",
                          "Rush through — the courtyards reward slow wandering",
                          "Assume every shop takes cards — carry some cash too",
                          "Skip it thinking it's 'just shopping' — it's Chandigarh's social centre",
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
                    <strong>🗺️ Extend the trip:</strong> Sector 17's central
                    location makes it a natural hinge point for a wider{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>{" "}
                    day — pair it with the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    earlier and the{" "}
                    <Link href="/blog/sector-26-chandigarh-travel-guide">
                      Sector 26 food street
                    </Link>{" "}
                    afterward for a full day-into-evening loop.
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
                  "Sector 17",
                  "Chandigarh",
                  "City Centre Plaza",
                  "Shopping",
                  "Neelam Cinema",
                  "Cafes",
                  "Chandigarh Evening",
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

              <RelatedPostsGrid currentSlug="sector-17-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sector-17-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
