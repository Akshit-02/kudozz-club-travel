// src/app/blog/devka-beach-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Devka Beach Daman: Promenade, Rides & Activities",
  description:
    "Devka Beach travel guide — Daman's busiest, most developed beach, with its seafront promenade, garden, rock-climbing wall, camel rides, food stalls, and honest swimming advice.",
  keywords:
    "Devka Beach, Devka Beach Daman, Devka Beach timings, Devka Beach activities, Devka Beach promenade, Devka Beach garden, Devka Beach rock climbing, Devka Beach camel ride, Daman beaches, Nani Daman, Daman tourist places, Devka Beach entry fee",
  openGraph: {
    title: "Devka Beach Daman: Promenade, Rides & Activities",
    description:
      "The seafront promenade, garden, rock-climbing wall, camel and pony rides, and honest swimming advice for Daman's busiest, most developed beach.",
    url: "https://club.kudozz.in/blog/devka-beach-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "A palm-lined beach promenade at golden hour, evocative of Devka Beach's seafront walkway in Daman",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Devka Beach Daman: Promenade, Rides & Activities",
    description:
      "The seafront promenade, garden, rock-climbing wall, camel and pony rides, and honest swimming advice for Daman's busiest, most developed beach.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/devka-beach-travel-guide",
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
          headline: "Devka Beach Daman: Promenade, Rides & Activities",
          description:
            "Devka Beach travel guide — Daman's busiest, most developed beach, with its seafront promenade, garden, rock-climbing wall, camel rides, food stalls, and honest swimming advice.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
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
            "@id": "https://club.kudozz.in/blog/devka-beach-travel-guide",
          },
          keywords:
            "Devka Beach, Devka Beach Daman, Devka Beach activities, Devka Beach promenade, Daman beaches, Nani Daman",
          about: {
            "@type": "Place",
            name: "Devka Beach",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Daman",
              addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
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
                name: "Daman & Diu",
                item: "https://club.kudozz.in/blog/dadra-nagar-haveli-daman-diu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Devka Beach",
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
    q: "Is Devka Beach good for swimming?",
    a: "Not really, and it's worth knowing this before you go. Much of Devka's shoreline is rocky and muddy rather than clean sand, and the water can be murky with a noticeable undertow in places. Most visitors come for the promenade, garden, and evening atmosphere rather than a swim — if a proper swim is the priority, Jampore Beach a little further south is the better bet.",
  },
  {
    q: "What activities are at Devka Beach?",
    a: "The main draw is the landscaped seafront promenade and garden, good for an evening walk. Beyond that, Devka typically has a small rock-climbing wall and other low-key adventure activities, camel and pony rides along the sand, kids' garden rides, and rows of food and souvenir stalls. Availability of specific rides and the climbing wall can vary by season and operator, so treat them as likely rather than guaranteed on any given day.",
  },
  {
    q: "How far is Devka Beach from Daman railway station?",
    a: "Devka Beach is about 3 km from central Nani Daman. Daman doesn't have a major railway station of its own — the nearest well-connected railhead is Vapi, roughly 12–13 km away on the Mumbai–Ahmedabad main line, from where autos and taxis run into Daman and onward to Devka.",
  },
  {
    q: "Is Devka Beach crowded on weekends?",
    a: "Yes, noticeably so. As Daman's most popular and accessible beach, Devka draws the largest weekend and holiday crowds in the territory, especially in the evening hours. Weekday visits, or an early-morning walk before the stalls and crowds pick up, are far more peaceful.",
  },
  {
    q: "What is the entry fee for Devka Beach?",
    a: "Walking the promenade and garden itself is free. Individual attractions — the rock-climbing wall, camel or pony rides, kids' rides, and parking — are charged separately by local operators, typically in small amounts per activity rather than a single beach entry ticket.",
  },
  {
    q: "How far is Devka Beach from Moti Daman Fort?",
    a: "Devka Beach is roughly 3–4 km from Moti Daman Fort, a short auto or taxi ride across the Daman Ganga river, or a longer but doable walk. Many visitors combine both in a single half-day covering Nani Daman and Moti Daman.",
  },
  {
    q: "Is Devka Beach open at night?",
    a: "The promenade itself doesn't formally close, and evenings are actually the busiest and most pleasant time to visit, with the garden lit up and stalls in full swing. Individual rides, the climbing wall, and camel/pony operators generally wind down by around 9–10 PM.",
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
  { id: "introduction", title: "Devka Beach Overview", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "what-to-do", title: "What to Do at Devka Beach", level: 2 },
  { id: "swimming-note", title: "Can You Swim Here?", level: 2 },
  { id: "sunset", title: "Sunset at Devka Beach", level: 2 },
  { id: "where-to-stay", title: "Nearby Hotels", level: 2 },
  { id: "food-guide", title: "Food Stalls & What to Eat", level: 2 },
  { id: "evening-plan", title: "A Suggested Evening Visit", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DevkaBeachGuidePage() {
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
              src="/images/destinations/goa/beach.jpg"
              alt="A palm-lined beach promenade at golden hour, evocative of Devka Beach's seafront walkway in Daman"
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
                {
                  label: "Daman & Diu",
                  href: "/blog/dadra-nagar-haveli-daman-diu-travel-guide",
                },
                { label: "Devka Beach", href: null },
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
                "Devka Beach",
                "Daman",
                "Daman and Diu",
                "Beaches",
                "Family Trip",
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
              Devka Beach, Daman: Promenade, Garden & Evening Activities
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Daman's busiest, most developed beach — a lively seafront
              promenade, a landscaped garden, a rock-climbing wall, and camel
              rides on the sand, all built more for an evening out than a
              swim.
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
                  text: "Nani Daman, Daman",
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
                  <h2>Devka Beach: Daman's Liveliest Seafront</h2>
                  <p>
                    <strong>Devka Beach</strong> is Daman's most popular and
                    most developed beach — part of{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Daman & Diu
                    </Link>
                    , India's small coastal Union Territory a few hours from
                    Mumbai and Surat. Where{" "}
                    <Link href="/blog/jampore-beach-travel-guide">
                      Jampore Beach
                    </Link>{" "}
                    a little further south is quiet and casuarina-lined,
                    Devka is the opposite — a landscaped seafront promenade, a
                    garden with sculptures and walkways, small amusement-style
                    rides, and a steady stream of food and souvenir stalls
                    that keep it busy from late afternoon into the night.
                  </p>
                  <p>
                    It sits in{" "}
                    <Link href="/blog/nani-daman-travel-guide">
                      Nani Daman
                    </Link>
                    , the smaller and older half of Daman town, and is easily
                    the most accessible beach in the territory — most
                    visitors combine it with a short trip into Nani Daman's
                    markets or across the river to Moti Daman Fort.
                  </p>
                  <p>
                    One honest thing to set expectations on upfront: Devka is
                    not a classic swimming beach. It's built and used more as
                    a seafront park than a sandy shoreline for a swim — and
                    this guide covers exactly what that means, along with
                    everything else worth knowing before you visit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Devka Beach at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Nani Daman, Daman",
                        },
                        {
                          icon: "🚶",
                          label: "From Nani Daman centre",
                          value: "~2–3 km, walkable or short auto ride",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar, evenings",
                        },
                        {
                          icon: "🎡",
                          label: "Known For",
                          value: "Promenade, garden, rock-climbing wall",
                        },
                        {
                          icon: "🏊",
                          label: "Swimming",
                          value: "Not recommended — rocky/muddy shoreline",
                        },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Free; activities charged separately",
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
                  <h2>Best Time to Visit Devka Beach</h2>
                  <p>
                    Coastal Gujarat's climate is hot and humid for much of
                    the year, and Devka's promenade has limited shade — the
                    time of day matters here almost as much as the season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather (18–30°C) makes the promenade walk and evening rides genuinely comfortable, and this is also when the beach is at its busiest and most festive.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — go in the evening",
                        text: "Daytime heat climbs into the mid-30s with little shade on the promenade. Plan a visit after 5 PM, when the sea breeze picks up and it's far more pleasant.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — quieter, rougher sea",
                        text: "Rain and choppy seas make it a less ideal visit, and rides/activities may pause during heavy downpours, though the garden itself still makes for a moody walk.",
                      },
                      {
                        season: "Evenings, year-round",
                        emoji: "🌇",
                        color: "bg-purple-50 border-purple-200",
                        mood: "The beach's real prime time",
                        text: "Regardless of season, Devka comes alive from late afternoon onward — stalls light up, rides open, and the promenade fills with local families and visitors.",
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
                    <strong>Our pick:</strong> An October–February evening,
                    arriving an hour or so before sunset — cool enough to
                    walk comfortably, and timed to catch both the sunset and
                    the beach's busiest, most atmospheric hours.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Devka Beach</h2>
                  <p>
                    Devka is the easiest beach in Daman to get to, sitting
                    close to{" "}
                    <Link href="/blog/nani-daman-travel-guide">
                      Nani Daman
                    </Link>
                    's main hotel and market area.
                  </p>
                  <ul>
                    <li>
                      <strong>From Nani Daman:</strong> Roughly 2–3 km — an
                      easy walk if you're staying nearby, or a 5–10 minute
                      auto or taxi ride from the town centre.
                    </li>
                    <li>
                      <strong>From Moti Daman:</strong> About 4–5 km, across
                      the Daman Ganga river — a short auto ride combining
                      well with a stop at Moti Daman Fort.
                    </li>
                    <li>
                      <strong>From Vapi railway station:</strong> The nearest
                      major railhead, roughly 12–13 km away on the
                      Mumbai–Ahmedabad main line, well connected by frequent
                      trains. Autos and taxis run from Vapi into Daman and on
                      to Devka.
                    </li>
                    <li>
                      <strong>By road:</strong> Daman is about 3 hours from
                      Mumbai and roughly 5 hours from Ahmedabad by car,
                      making Devka a common first or last stop on a{" "}
                      <Link href="/blog/daman-travel-guide">
                        Daman weekend trip
                      </Link>
                      .
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're staying in Nani
                    Daman, skip the auto and just walk down in the evening —
                    it's a pleasant stroll and saves you negotiating fares
                    for a short hop.
                  </div>
                </section>

                {/* ── What to Do ────────────────────────────────────────── */}
                <section id="what-to-do">
                  <h2>What to Do at Devka Beach</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="A beachfront garden walkway with palm trees, evocative of Devka Beach's landscaped promenade"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Devka's appeal isn't the sand — it's everything built
                    around it. Here's what actually fills an evening here:
                  </p>
                  <ul>
                    <li>
                      <strong>The seafront promenade & garden:</strong> A
                      paved, landscaped walkway running along the shoreline,
                      lined with a garden, benches, and small sculptures —
                      genuinely pleasant for an evening walk and the beach's
                      main draw for most visitors.
                    </li>
                    <li>
                      <strong>Rock-climbing wall & adventure activities:</strong>{" "}
                      Devka has hosted a small rock-climbing wall and other
                      low-key adventure setups in its activity zone,
                      typically run by local operators. Availability, timing,
                      and exact operators can change season to season, so
                      treat it as a likely rather than guaranteed feature —
                      ask locally on arrival.
                    </li>
                    <li>
                      <strong>Camel and pony rides:</strong> A staple of the
                      beach — short rides along the sand, popular with
                      families and a favourite for kids.
                    </li>
                    <li>
                      <strong>Kids' rides and small amusements:</strong>{" "}
                      Simple garden swings, toy rides, and similar
                      attractions are scattered through the garden area,
                      making Devka a genuinely family-friendly stop.
                    </li>
                    <li>
                      <strong>Souvenir and snack stalls:</strong> Rows of
                      vendors line the promenade selling street food, ice
                      cream, and small souvenirs — browsing the stalls is
                      half the evening's entertainment here.
                    </li>
                    <li>
                      <strong>People-watching and the evening breeze:</strong>{" "}
                      As Daman's busiest beach, Devka's real character is
                      social — local families out for the evening, snack
                      breaks, and a lively, unhurried atmosphere.
                    </li>
                  </ul>
                </section>

                {/* ── Swimming Note ─────────────────────────────────────── */}
                <section id="swimming-note">
                  <h2>Can You Swim at Devka Beach?</h2>
                  <p>
                    This is worth being upfront about: Devka is not really a
                    swimming beach, and it's better to know that before you
                    arrive with that expectation.
                  </p>
                  <ul>
                    <li>
                      <strong>Shoreline conditions:</strong> Large stretches
                      of the shore are rocky or muddy rather than clean,
                      even sand, which makes wading in uncomfortable and
                      occasionally unsafe underfoot.
                    </li>
                    <li>
                      <strong>Water clarity and currents:</strong> The water
                      can be murky, and there's a noticeable undertow in
                      places — not the calm, shallow conditions that make for
                      relaxed swimming.
                    </li>
                    <li>
                      <strong>What most visitors actually do:</strong> Wade
                      in ankle- or knee-deep near the promenade, walk the
                      shoreline, or simply enjoy the garden and rides —
                      genuine swimming is uncommon here.
                    </li>
                    <li>
                      <strong>A better swim option nearby:</strong> If a
                      proper beach swim matters to your trip,{" "}
                      <Link href="/blog/jampore-beach-travel-guide">
                        Jampore Beach
                      </Link>{" "}
                      further south is the better call, with calmer, more
                      open sand.
                    </li>
                  </ul>
                  <blockquote>
                    Come to Devka for the promenade, the garden, and the
                    evening atmosphere — not for a swim, and you won't be
                    disappointed.
                  </blockquote>
                </section>

                {/* ── Sunset ────────────────────────────────────────────── */}
                <section id="sunset">
                  <h2>Sunset at Devka Beach</h2>
                  <p>
                    Sunset is genuinely the best time to be here. The
                    promenade and garden lights come on as the crowd builds,
                    the sea breeze picks up after a hot day, and the western
                    horizon over the Arabian Sea puts on a reliably good
                    show. Grab a spot along the promenade railing or a bench
                    in the garden roughly 20–30 minutes before sunset for the
                    best view, then stay on for the stalls and rides once it
                    gets dark — this is when Devka is at its liveliest.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Nearby Hotels</h2>
                  <p>
                    Devka's popularity means it has decent hotel density
                    close by, mostly in{" "}
                    <Link href="/blog/nani-daman-travel-guide">
                      Nani Daman
                    </Link>
                    , within easy reach of the beach itself.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Guesthouses in Nani Daman",
                          "Budget lodges near the market",
                          "Simple stays a short walk from Devka",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Beach-view hotels near Devka",
                          "Business hotels in central Daman",
                          "Family-friendly resorts nearby",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌴",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Radisson Blu Resort, Daman",
                          "Premium seafront properties",
                          "Full-service resort stays",
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

                  <blockquote>
                    Staying in Nani Daman puts you within easy walking or
                    short-auto distance of Devka, plus the town's markets
                    and eateries — the most convenient base for a Devka-focused
                    visit.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food Stalls & What to Eat</h2>
                  <p>
                    The stretch of stalls along Devka's promenade is one of
                    the beach's biggest draws in its own right — casual,
                    inexpensive, and made for grazing over a couple of hours.
                  </p>
                  <ul>
                    <li>
                      <strong>Chaat and bhelpuri:</strong> Classic beachside
                      street food, sold by numerous vendors along the
                      promenade.
                    </li>
                    <li>
                      <strong>Roasted corn (bhutta) and snacks:</strong>{" "}
                      Simple, popular evening snacks, especially once the
                      breeze picks up after sunset.
                    </li>
                    <li>
                      <strong>Ice cream and cold drinks:</strong> A steady
                      presence given the heat — a good way to cool off
                      between walking the garden and browsing the stalls.
                    </li>
                    <li>
                      <strong>Local Gujarati and coastal snacks:</strong>{" "}
                      Farsan and other Gujarati-influenced street food is
                      common here too, reflecting the wider region's
                      culinary character.
                    </li>
                    <li>
                      <strong>Sit-down options in Nani Daman:</strong> For a
                      proper meal rather than snacking, Nani Daman's
                      restaurants a short ride away offer more substantial
                      seafood and thali options.
                    </li>
                  </ul>
                </section>

                {/* ── Evening Plan ──────────────────────────────────────── */}
                <section id="evening-plan">
                  <h2>A Suggested Evening Visit</h2>
                  <p>
                    Devka rewards an evening visit far more than a midday
                    one — here's a simple plan that covers everything
                    worthwhile without feeling rushed.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "4:30 PM",
                        title: "Arrive & Walk the Promenade",
                        color: "bg-amber-700",
                        activities: [
                          "Start with an easy walk along the seafront promenade",
                          "Explore the landscaped garden and sculptures",
                          "Beat the evening crowd while it's still building",
                        ],
                      },
                      {
                        day: "5:30 PM",
                        title: "Rides & Activities",
                        color: "bg-sky-600",
                        activities: [
                          "Try the rock-climbing wall or adventure zone if open",
                          "Camel or pony ride along the sand",
                          "Kids' rides in the garden area",
                        ],
                      },
                      {
                        day: "6:30 PM",
                        title: "Sunset",
                        color: "bg-purple-600",
                        activities: [
                          "Find a spot along the promenade railing",
                          "Watch the sun go down over the Arabian Sea",
                          "Grab a snack from a nearby stall while you wait",
                        ],
                      },
                      {
                        day: "7:00 PM onward",
                        title: "Stalls & Wind-Down",
                        color: "bg-stone-600",
                        activities: [
                          "Browse the lit-up souvenir and food stalls",
                          "Snack on chaat, corn, or ice cream",
                          "Head back into Nani Daman for dinner",
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
                    * Two to three hours in the evening is plenty for Devka —
                    it pairs well with a Moti Daman Fort visit earlier in the
                    day or a Nani Daman market stroll beforehand.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Devka Beach itself is free to visit — the promenade and
                    garden have no entry fee. Costs come from individual
                    activities, food, and getting there.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Splurge"].map(
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
                          ["Beach entry", "Free", "Free", "Free"],
                          [
                            "Camel/pony ride",
                            "₹50–₹100",
                            "₹100–₹200",
                            "Multiple rides",
                          ],
                          [
                            "Rock-climbing wall",
                            "₹50–₹100",
                            "₹100–₹150",
                            "—",
                          ],
                          [
                            "Food & snacks",
                            "₹150–₹300",
                            "₹300–₹600",
                            "₹800+",
                          ],
                          [
                            "Local transport (round trip)",
                            "₹100",
                            "₹300",
                            "₹600+",
                          ],
                          [
                            "Evening total (approx.)",
                            "₹350–₹550",
                            "₹800–₹1,250",
                            "₹1,500+",
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
                    * Activity prices are charged by individual local
                    operators and can vary — treat these as rough estimates,
                    not fixed rates.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Devka Beach</h2>
                  <ul>
                    <li>
                      <strong>Go in the evening, not midday:</strong> The
                      promenade has little shade, and Devka's atmosphere,
                      lighting, and crowd are all built around evenings.
                    </li>
                    <li>
                      <strong>Don't plan a swim:</strong> The rocky, muddy
                      shoreline and murky water make Devka a poor choice for
                      actual swimming — walk the promenade instead.
                    </li>
                    <li>
                      <strong>Carry small cash:</strong> Rides, the
                      climbing wall, and stalls are almost entirely
                      cash-based, small-vendor transactions.
                    </li>
                    <li>
                      <strong>Expect weekend crowds:</strong> As the most
                      popular beach in Daman, Devka gets genuinely busy on
                      weekends and holidays — visit on a weekday for a
                      quieter experience.
                    </li>
                    <li>
                      <strong>Confirm activity availability on arrival:</strong>{" "}
                      The rock-climbing wall and some rides are run by local
                      operators and aren't guaranteed to be open every day —
                      check when you get there rather than planning around
                      them.
                    </li>
                    <li>
                      <strong>Watch your footing:</strong> Rocky patches
                      along the shoreline can be slippery — wear proper
                      footwear if you're walking down to the water's edge.
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
                          "Visit in the evening for sunset and the liveliest atmosphere",
                          "Walk the full promenade and garden",
                          "Try the camel or pony ride if travelling with kids",
                          "Carry small cash for stalls and activities",
                          "Combine with Moti Daman Fort or Nani Daman market",
                          "Wear proper footwear near the rocky shoreline",
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
                          "Expect a clean, swim-friendly beach",
                          "Visit at midday expecting shade or a full-on atmosphere",
                          "Assume the rock-climbing wall is open every day",
                          "Skip footwear near rocky, uneven patches",
                          "Rely on cards for small vendors and rides",
                          "Expect Jampore-level quiet — Devka is meant to be busy",
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
                    <strong>🗺️ Extend the trip:</strong> Devka pairs naturally
                    with the rest of a{" "}
                    <Link href="/blog/daman-travel-guide">Daman visit</Link>{" "}
                    — Moti Daman Fort, Nani Daman's markets, and a quieter
                    swim at{" "}
                    <Link href="/blog/jampore-beach-travel-guide">
                      Jampore Beach
                    </Link>{" "}
                    all sit within a short drive.
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
                  "Devka Beach",
                  "Daman",
                  "Daman and Diu",
                  "Nani Daman",
                  "Beaches",
                  "Family Trip",
                  "Sunset Point",
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

              <RelatedPostsGrid currentSlug="devka-beach-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="devka-beach-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
