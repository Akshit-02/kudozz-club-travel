// src/app/blog/rock-garden-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Rock Garden Chandigarh: Nek Chand's Travel Guide & Tips",
  description:
    "Complete guide to the Rock Garden, Chandigarh — Nek Chand's 40-acre sculpture garden built secretly from industrial waste. History, timings, entry fee, the courtyards, and visit tips.",
  keywords:
    "Rock Garden Chandigarh, Nek Chand Rock Garden, Rock Garden Chandigarh timings, Rock Garden entry fee, Nek Chand Saini, Rock Garden Sector 1 Chandigarh, Rock Garden history, Rock Garden waste sculptures, Rock Garden Chandigarh photography, Rock Garden Sukhna Lake, Chandigarh sightseeing, best time to visit Rock Garden Chandigarh, Nek Chand sculptures, Rock Garden Chandigarh FAQ",
  openGraph: {
    title: "Rock Garden Chandigarh: Nek Chand's Travel Guide & Tips",
    description:
      "A 40-acre maze of courtyards, waterfalls, and thousands of mosaic sculptures — all built in secret from broken ceramics and industrial waste. The complete Rock Garden guide.",
    url: "https://club.kudozz.in/blog/rock-garden-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A calm lake ringed by the Shivalik hills in Chandigarh's Sector 1 — the same leisure valley that is home to Nek Chand's Rock Garden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock Garden Chandigarh: Nek Chand's Travel Guide & Tips",
    description:
      "A 40-acre maze of courtyards, waterfalls, and thousands of mosaic sculptures — all built in secret from broken ceramics and industrial waste.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/rock-garden-chandigarh-travel-guide",
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
          headline: "Rock Garden Chandigarh: Nek Chand's Travel Guide & Tips",
          description:
            "Complete guide to the Rock Garden, Chandigarh — Nek Chand's 40-acre sculpture garden built secretly from industrial waste. History, timings, entry fee, the courtyards, and visit tips.",
          image:
            "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/rock-garden-chandigarh-travel-guide",
          },
          keywords:
            "Rock Garden Chandigarh, Nek Chand Rock Garden, Rock Garden timings, Rock Garden entry fee, Sector 1 Chandigarh, Nek Chand Saini",
          about: {
            "@type": "Place",
            name: "Rock Garden (Nek Chand Rock Garden)",
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
                name: "Rock Garden",
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
    q: "Who built the Rock Garden in Chandigarh?",
    a: "The Rock Garden was built single-handedly, and initially in complete secrecy, by Nek Chand Saini — a government road inspector with no formal training in art or architecture. Starting around 1957, he began collecting industrial and household waste after work and quietly building sculptures on forest land where construction was legally forbidden, continuing for nearly two decades before anyone official found out.",
  },
  {
    q: "What is the entry fee for the Rock Garden?",
    a: "Entry is a token amount — on the order of ₹30-40 for adults, with a lower rate for children — though exact fees are periodically revised, so it's worth confirming the current price at the ticket counter rather than treating this as fixed. It remains one of the most affordable major attractions in Chandigarh regardless.",
  },
  {
    q: "What are the Rock Garden's timings?",
    a: "The Rock Garden is typically open from around 9 AM to somewhere between 6 and 7 PM, with later closing hours in summer months. Timings and weekly closures can shift, so check current hours locally — through your hotel or a quick search on the day — rather than planning around fixed times.",
  },
  {
    q: "Is the Rock Garden really built entirely from waste?",
    a: "Yes. Nek Chand used broken ceramics and pottery shards, chipped tiles, discarded bangles, broken glass and mirrors, old electrical fittings, sinks, worn-out tyres, and scrap wire — much of it salvaged from villages that were being demolished to build Chandigarh itself. Almost nothing in the garden was purpose-bought; it's assembled entirely from what other people threw away.",
  },
  {
    q: "How much time should I spend at the Rock Garden?",
    a: "Plan for at least 1.5 to 2 hours. The garden's narrow, deliberately winding passageways and repeating courtyards make it easy to lose track of time, and rushing through defeats the point — the layout is designed to be walked slowly, with each courtyard revealing itself only as you turn into it.",
  },
  {
    q: "Is the Rock Garden worth visiting if I've already seen photos of it?",
    a: "Photos genuinely undersell it. The narrow passages, the sound of the waterfalls, and the sheer density of repeated forms — thousands of similar-looking figures multiplying across courtyard after courtyard — is a scale and rhythm that doesn't come through in a handful of images. Most visitors find it more immersive and stranger in person than expected.",
  },
  {
    q: "Can I visit the Rock Garden and Sukhna Lake together?",
    a: "Yes, and most visitors do — the two sit right next to each other in Sector 1. A natural half-day plan is the Rock Garden in the morning followed by lunch and a walk around the Sukhna Lake promenade, or the reverse if you'd rather catch the lake at sunrise.",
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
  { id: "introduction", title: "A Garden Built in Secret", level: 2 },
  { id: "origin-story", title: "The Origin Story", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-courtyards", title: "Walking the Courtyards", level: 2 },
  { id: "materials-and-craft", title: "Materials & Craft", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "nearby", title: "Nearby: Sukhna Lake & More", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RockGardenGuidePage() {
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
              alt="A calm lake ringed by the Shivalik hills in Chandigarh's Sector 1 — the same leisure valley that is home to Nek Chand's Rock Garden"
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
                { label: "Rock Garden", href: null },
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
                "Rock Garden",
                "Nek Chand",
                "Chandigarh",
                "Sector 1",
                "Sculpture Garden",
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
              Rock Garden, Chandigarh: Nek Chand's Complete Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Forty acres of interlinked courtyards, waterfalls, and
              thousands of mosaic sculptures — built secretly, over nearly
              two decades, from the broken ceramics and industrial waste of
              a city being demolished to make way for Chandigarh itself.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sector 1, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>A Garden Built in Secret</h2>
                  <p>
                    The <strong>Rock Garden</strong> in Sector 1 of{" "}
                    <Link href="/blog/chandigarh-travel-guide">Chandigarh</Link>{" "}
                    is one of the strangest and most genuinely original
                    attractions in India — a roughly 40-acre labyrinth of
                    courtyards, waterfalls, and thousands of sculpted figures,
                    every one of them assembled from things other people threw
                    away. Broken ceramics, chipped tiles, discarded bangles,
                    shattered glass, old electrical fittings, worn tyres, and
                    scrap wire have all been folded into an environment that
                    feels closer to outsider art on a monumental scale than a
                    conventional public garden.
                  </p>
                  <p>
                    What makes the Rock Garden more than just a curiosity is
                    the story behind it. It wasn't commissioned, designed by
                    committee, or built with any official sanction — it grew
                    for nearly eighteen years in near-total secrecy, on land
                    where its very existence was against the rules, before the
                    government discovered it and, remarkably, chose to protect
                    it rather than tear it down.
                  </p>
                  <p>
                    Sometimes cited in tourism literature as one of India's
                    most-visited attractions after the Taj Mahal — a claim
                    often repeated rather than independently verified, but one
                    that gives a sense of how significant the site has become
                    — the Rock Garden sits immediately next to{" "}
                    <Link href="/blog/sukhna-lake-chandigarh-travel-guide">
                      Sukhna Lake
                    </Link>
                    , and the two are visited together by almost everyone who
                    comes to this corner of the city.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🪨</span> Rock Garden at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 1, Chandigarh",
                        },
                        {
                          icon: "📐",
                          label: "Area",
                          value: "~40 acres",
                        },
                        {
                          icon: "🧑‍🎨",
                          label: "Creator",
                          value: "Nek Chand Saini",
                        },
                        {
                          icon: "🗓️",
                          label: "Built",
                          value: "From ~1957; opened to public 1976",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Token fee, roughly ₹30-40",
                        },
                        {
                          icon: "⏰",
                          label: "Timings",
                          value: "~9 AM – 6/7 PM (verify locally)",
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

                {/* ── Origin Story ──────────────────────────────────────── */}
                <section id="origin-story">
                  <h2>The Origin Story: An Eighteen-Year Secret</h2>
                  <p>
                    Chandigarh itself was built on land cleared of some two
                    dozen villages, whose materials and structures were
                    demolished to make way for Le Corbusier's planned city.
                    Among the government employees involved in that
                    construction was <strong>Nek Chand Saini</strong>, a road
                    inspector with no formal training in art, architecture, or
                    sculpture. Starting around 1957, Nek Chand began quietly
                    collecting the debris left behind — broken ceramics and
                    pottery shards, discarded bangles, chipped tiles, sinks,
                    tyres, wire, and glass — and carrying it, piece by piece,
                    to a patch of forest on the city's northern edge.
                  </p>
                  <p>
                    That patch of land was a legally protected forest
                    reserve, where construction of any kind was strictly
                    forbidden. Working alone after his official working hours,
                    Nek Chand cleared small sections of undergrowth and began
                    building sculptures and structures entirely in secret,
                    telling no one — not even, for a long stretch, his own
                    family — what he was doing out there. He kept this up for
                    close to eighteen years, gradually expanding a hidden
                    network of courtyards that no government official knew
                    existed.
                  </p>
                  <p>
                    In <strong>1975</strong>, authorities finally discovered
                    the site during a survey of the forest land — by then it
                    had grown into a substantial, densely populated complex of
                    sculptures spread across several acres. Given that it sat
                    on protected land and had been built entirely without
                    permission, the discovery could easily have ended with
                    demolition. Instead, officials recognised what they were
                    looking at as a genuine, singular work of art. Rather than
                    tearing it down, the government gave Nek Chand a salary
                    and a team of labourers to continue and formalise the
                    work, and the Rock Garden was <strong>opened to the
                    public in 1976</strong>. Nek Chand continued expanding it
                    for decades afterward, until his death in 2015, and the
                    garden has continued to be maintained and added to since.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Worth knowing:</strong> The Rock Garden is
                    sometimes described as a piece of "outsider art" or "art
                    brut" precisely because of this backstory — it was made
                    entirely outside the formal art world, in secret, by
                    someone with no training and no audience in mind, which is
                    part of what makes its scale and consistency so
                    remarkable.
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit the Rock Garden</h2>
                  <p>
                    The Rock Garden is entirely outdoors and involves a fair
                    amount of walking through narrow, sun-exposed passages, so
                    timing your visit around Chandigarh's seasonal extremes
                    matters more here than at most indoor attractions.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Morning (soon after opening)",
                        emoji: "🌅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best for a slow, uncrowded walk",
                        text: "Arriving close to opening time means cooler temperatures, softer light for photography, and courtyards that haven't yet filled with the day's tour groups and school trips.",
                      },
                      {
                        season: "Late Afternoon",
                        emoji: "🌇",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Good light, moderate crowds",
                        text: "The couple of hours before closing bring warmer, more flattering light into the courtyards, with crowds typically thinning out as the day winds down.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best season overall",
                        text: "Cool, comfortable temperatures make the Rock Garden's largely shadeless courtyards genuinely pleasant to walk through at any hour of the day.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Hot — plan around it",
                        text: "Midday heat in the narrow, sun-trapped passages can be intense. If visiting in summer, stick to the first or last couple of hours the garden is open.",
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
                    <strong>Our pick:</strong> a cool-season weekday morning.
                    You'll get soft light for photographs, comfortable
                    walking temperatures in the narrow passages, and enough
                    quiet to actually notice the detail in individual
                    sculptures rather than just moving with a crowd.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Rock Garden</h2>
                  <p>
                    The Rock Garden sits in Sector 1, at the northern edge of
                    the city, right beside Sukhna Lake — one of the easiest
                    parts of Chandigarh to combine into a single outing.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The simplest way in from
                      anywhere in the city — Sector 1 is a well-known landmark
                      and every auto or app-based cab driver in Chandigarh
                      knows it.
                    </li>
                    <li>
                      <strong>From Sector 17:</strong> The Rock Garden is only
                      a short ride from Sector 17 Plaza, making it easy to
                      combine a Rock Garden and Sukhna Lake morning with
                      shopping or a café stop later in the day.
                    </li>
                    <li>
                      <strong>On foot from Sukhna Lake:</strong> If you're
                      already at the lake, the Rock Garden's entrance is a
                      short, easy walk away — most visitors do both sites back
                      to back.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Ask your cab or auto to drop
                    you at the Rock Garden first if you're doing both sites —
                    walking out of the garden's winding passages directly into
                    the open space and breeze off Sukhna Lake makes for a
                    natural, satisfying sequence.
                  </div>
                </section>

                {/* ── The Courtyards ────────────────────────────────────── */}
                <section id="the-courtyards">
                  <h2>Walking the Courtyards</h2>
                  <p>
                    The Rock Garden isn't laid out as a single open park —
                    it's a deliberate sequence of interlinked courtyards
                    connected by narrow, low, winding passageways, engineered
                    so that you can never see more than a short distance ahead
                    or glimpse what's coming next. Ducking through one of
                    these tight corridors and stepping out into a sudden,
                    wide courtyard packed with sculpture is a large part of
                    what makes a walk through the garden feel so disorienting
                    and theatrical, almost like moving through a maze designed
                    purely for reveal and surprise.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="The wooded, water-fed landscape of Chandigarh's Sector 1, where Nek Chand salvaged streambed stones and waste materials to build the Rock Garden's courtyards and waterfalls"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Each courtyard tends to have its own loose theme or
                    concentration — one might be dense with rows of
                    mosaic-covered human figures, arms linked or raised in
                    identical poses; another opens onto groupings of animals
                    and birds; others centre on man-made waterfalls, with
                    water tumbling over ceramic-studded ledges into pools
                    below. Long stretches of wall throughout the garden are
                    embedded edge-to-edge with broken bangles and ceramic
                    fragments, catching light in a way that turns even the
                    connecting corridors into something worth slowing down
                    for.
                  </p>
                  <p>
                    Deeper into the complex, the courtyards open up further
                    still into a large open-air amphitheatre, used
                    periodically for performances and events — a genuinely
                    surprising thing to find at the heart of what still feels,
                    at every turn before it, like a maze. The overall effect
                    of walking the full sequence — tight passage, wide
                    courtyard, tight passage, wider courtyard again — builds a
                    rhythm that's hard to appreciate from photographs alone;
                    it really only lands when you're moving through it
                    yourself.
                  </p>
                  <p>
                    Because the paths were built low and deliberately narrow
                    in places, taller visitors may find themselves ducking
                    occasionally, and anyone with mobility concerns should
                    know that some sections involve steps and uneven surfaces
                    rather than flat, wheelchair-friendly paths.
                  </p>
                </section>

                {/* ── Materials & Craft ─────────────────────────────────── */}
                <section id="materials-and-craft">
                  <h2>Materials & Craft</h2>
                  <p>
                    What sets the Rock Garden apart from most sculpture
                    parks is that essentially nothing in it was purpose-made
                    or purpose-bought. Nek Chand worked almost entirely with
                    salvage: broken ceramics and pottery shards, chipped
                    porcelain and tiles, discarded glass bangles, shattered
                    glass and mirror fragments, old electrical fittings and
                    switches, cast-off sinks, worn rubber tyres, and coils of
                    scrap wire — much of it originally recovered from the
                    demolished villages that made way for Chandigarh's
                    construction in the first place, which gives the garden a
                    quiet, almost circular relationship with the city built
                    around it.
                  </p>
                  <p>
                    The craft technique itself is straightforward in
                    principle but demanding in practice: concrete or cement
                    forms are built up into the rough shape of a figure,
                    animal, or wall, and then studded, piece by piece, with
                    the salvaged material — ceramic shards pressed in to form
                    patterned skin or clothing, bangles set into rows along a
                    wall or archway, broken tile fragments arranged into
                    mosaic surfaces. Multiply that technique across thousands
                    of individual figures and hundreds of metres of wall, and
                    the sheer scale of repeated, patient labour becomes one of
                    the most striking things about the site — this was, for
                    nearly two decades, essentially one person's project.
                  </p>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🔍 Look closer:</strong> Slow down at a few
                    individual figures rather than only taking in whole
                    courtyards at once — up close, you can usually make out
                    exactly what each piece of "waste" originally was: a
                    bangle, a tile corner, a chipped teacup handle, a fragment
                    of a broken sink.
                  </div>
                </section>

                {/* ── Photography ────────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Shoot in soft morning or late-afternoon
                      light:</strong> The mosaic surfaces catch and scatter
                      harsh midday light in a way that can wash out detail —
                      softer, angled light brings out the texture of the
                      broken ceramic and glass far better.
                    </li>
                    <li>
                      <strong>Use the narrow passages as leading lines:</strong>{" "}
                      The winding corridors between courtyards make natural
                      framing devices for wider shots of the courtyards
                      beyond them.
                    </li>
                    <li>
                      <strong>Mind restrictions in some sections:</strong>{" "}
                      Flash photography and tripods may be restricted in parts
                      of the garden, both to protect the sculptures and to
                      keep narrow passages moving — check signage and staff
                      guidance as you go rather than assuming full access
                      everywhere.
                    </li>
                    <li>
                      <strong>Get close-up detail shots:</strong> Wide shots
                      convey scale, but close-ups of individual mosaic
                      surfaces — a wall of bangles, a row of ceramic-studded
                      figures — often make for the most compelling images from
                      the visit.
                    </li>
                    <li>
                      <strong>Photograph the waterfalls when they're
                      running:</strong> The man-made waterfalls add both
                      motion and sound to a static, textured environment —
                      worth timing a stop there rather than walking straight
                      past.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1.5-2 Hours)</h2>
                  <p>
                    The Rock Garden rewards an unhurried pace far more than a
                    quick walkthrough — the whole point of its layout is
                    gradual reveal, which is lost if you rush.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-30 min",
                        title: "Entry & First Courtyards",
                        color: "bg-amber-700",
                        activities: [
                          "Buy tickets and enter through the main gate",
                          "Take the first narrow passages slowly",
                          "Note the recurring human-figure sculptures",
                        ],
                      },
                      {
                        day: "30-70 min",
                        title: "Deeper Courtyards & Waterfalls",
                        color: "bg-forest-600",
                        activities: [
                          "Continue through denser courtyard clusters",
                          "Stop at the man-made waterfalls",
                          "Look closely at wall mosaics for material detail",
                        ],
                      },
                      {
                        day: "70-100 min",
                        title: "Amphitheatre & Final Stretch",
                        color: "bg-sky-600",
                        activities: [
                          "Reach the open-air amphitheatre",
                          "Slow photography stop in the best-lit courtyard",
                          "Exit toward Sukhna Lake, next door",
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
                    * Add 30 minutes or more if you're photographing
                    seriously, visiting on a busy weekend, or simply want to
                    sit in the amphitheatre for a while before moving on.
                  </p>
                </section>

                {/* ── Nearby ────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby: Sukhna Lake & More</h2>
                  <p>
                    The Rock Garden's location in Sector 1 puts it within
                    easy reach of several of Chandigarh's other major sights,
                    making this corner of the city a natural half- or full-day
                    cluster rather than a single-stop visit.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/sukhna-lake-chandigarh-travel-guide">
                          Sukhna Lake
                        </Link>
                        :
                      </strong>{" "}
                      Right next door — a man-made lake with a lakeside
                      promenade, boating, and views of the Shivalik foothills.
                      Almost every Rock Garden visit is paired with at least a
                      short stop here.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/capitol-complex-chandigarh-travel-guide">
                          Capitol Complex
                        </Link>
                        :
                      </strong>{" "}
                      Le Corbusier's UNESCO-listed government buildings are a
                      short drive away, for anyone interested in seeing the
                      city's formal modernist architecture alongside Nek
                      Chand's entirely unofficial, self-taught counterpart.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/le-corbusier-centre-chandigarh-travel-guide">
                          Le Corbusier Centre
                        </Link>
                        :
                      </strong>{" "}
                      A small museum dedicated to the city's founding
                      architect — a useful counterpoint if you want the
                      "planned" side of Chandigarh's story after seeing its
                      most unplanned monument.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a complete itinerary covering the Rose Garden, Sector
                    17, and day trips to the nearby hills.
                  </div>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    The Rock Garden is one of Chandigarh's cheapest major
                    attractions — your main cost is simply getting there.
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
                            "Entry ticket",
                            "~₹30-40",
                            "~₹30-40",
                            "~₹30-40",
                          ],
                          [
                            "Transport to/from Sector 1",
                            "₹60 (auto, shared)",
                            "₹200 (auto/cab)",
                            "₹500 (private cab)",
                          ],
                          [
                            "Food/snacks nearby",
                            "₹150",
                            "₹400",
                            "₹1,200+",
                          ],
                          [
                            "Combined with Sukhna Lake boating",
                            "—",
                            "₹150-300",
                            "₹500+",
                          ],
                          ["Total (approx.)", "₹240", "₹680", "₹2,200+"],
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
                    * Figures are per person, per visit, and approximate —
                    entry fees are periodically revised. See our{" "}
                    <Link href="/blog/sukhna-lake-chandigarh-travel-guide">
                      Sukhna Lake guide
                    </Link>{" "}
                    for combined-visit budgeting.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting the Rock Garden</h2>
                  <ul>
                    <li>
                      <strong>Confirm timings before you go:</strong> Hours
                      generally run from around 9 AM to somewhere between 6
                      and 7 PM, later in summer, but this can shift — check
                      current timings locally rather than relying on a fixed
                      schedule.
                    </li>
                    <li>
                      <strong>Wear comfortable, closed footwear:</strong>{" "}
                      Surfaces inside are uneven in places, with steps and
                      narrow ledges around the waterfalls.
                    </li>
                    <li>
                      <strong>Watch your head in the low passages:</strong>{" "}
                      Several connecting corridors are deliberately built low
                      and narrow — taller visitors should move through them
                      carefully.
                    </li>
                    <li>
                      <strong>Budget more time than you think:</strong> The
                      maze-like layout makes a rushed 30-minute visit feel
                      unsatisfying — 1.5 to 2 hours is a realistic minimum.
                    </li>
                    <li>
                      <strong>Combine with Sukhna Lake:</strong> The two sites
                      sit right next to each other — see our{" "}
                      <Link href="/blog/sukhna-lake-chandigarh-travel-guide">
                        Sukhna Lake guide
                      </Link>{" "}
                      to plan a combined half-day visit.
                    </li>
                    <li>
                      <strong>Respect photography restrictions:</strong> Flash
                      and tripod use may be limited in some courtyards — check
                      posted signage rather than assuming blanket access.
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
                          "Walk slowly and let the courtyards reveal themselves",
                          "Visit early morning or late afternoon for light and crowds",
                          "Look closely at individual figures for material detail",
                          "Pair the visit with Sukhna Lake next door",
                          "Carry water — shade is limited in places",
                          "Check current timings and entry fee before you go",
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
                          "Rush through in under 30 minutes",
                          "Touch or climb on the mosaic sculptures",
                          "Assume flash photography is allowed everywhere",
                          "Visit at peak midday heat in summer",
                          "Skip Sukhna Lake — it's a two-minute walk away",
                          "Expect wheelchair-flat paths throughout",
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
                  "Rock Garden",
                  "Nek Chand",
                  "Chandigarh",
                  "Sector 1",
                  "Sukhna Lake",
                  "Sculpture Garden",
                  "Outsider Art",
                  "City Guide",
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

              <RelatedPostsGrid currentSlug="rock-garden-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="rock-garden-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
