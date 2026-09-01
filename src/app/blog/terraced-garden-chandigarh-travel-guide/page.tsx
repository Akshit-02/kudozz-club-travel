// src/app/blog/terraced-garden-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Terraced Garden Chandigarh: Timings, Layout & Visit Guide",
  description:
    "Complete guide to the Terraced Garden, Chandigarh — a multi-level garden in Sector 33 with seasonal flowers and quiet lawns, part of the Leisure Valley corridor. Timings, entry, and photography tips.",
  keywords:
    "Terraced Garden Chandigarh, Terraced Garden Sector 33, Leisure Valley Chandigarh, Chandigarh gardens, Terraced Garden timings, Chandigarh picnic spots, quiet gardens Chandigarh",
  openGraph: {
    title: "Terraced Garden Chandigarh: Timings, Layout & Visit Guide",
    description:
      "A garden laid out across multiple levels connected by stone steps — seasonal flowers, quiet lawns, and a calmer alternative to the Rose Garden.",
    url: "https://club.kudozz.in/blog/terraced-garden-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A calm lake ringed by hills in Chandigarh, evoking the layered green spaces of the city's Leisure Valley corridor including the Terraced Garden",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Terraced Garden Chandigarh: Timings, Layout & Visit Guide",
    description:
      "A garden laid out across multiple levels connected by stone steps — seasonal flowers, quiet lawns, and a calmer alternative to the Rose Garden.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/terraced-garden-chandigarh-travel-guide",
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
          headline: "Terraced Garden Chandigarh: Timings, Layout & Visit Guide",
          description:
            "Complete guide to the Terraced Garden, Chandigarh — a multi-level garden in Sector 33 with seasonal flowers and quiet lawns, part of the Leisure Valley corridor. Timings, entry, and photography tips.",
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
            "@id":
              "https://club.kudozz.in/blog/terraced-garden-chandigarh-travel-guide",
          },
          keywords:
            "Terraced Garden Chandigarh, Terraced Garden Sector 33, Leisure Valley Chandigarh, Chandigarh gardens",
          about: {
            "@type": "Place",
            name: "Terraced Garden",
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
                name: "Terraced Garden",
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
    q: "Where is the Terraced Garden in Chandigarh?",
    a: "The Terraced Garden is commonly placed in Sector 33, forming part of, or lying close to, Chandigarh's Leisure Valley — the long green corridor that links several of the city's gardens and parks.",
  },
  {
    q: "What makes the Terraced Garden different from Chandigarh's other gardens?",
    a: "As the name suggests, it's laid out across multiple levels or 'terraces' connected by stone steps and pathways, giving it a distinct layered look compared to the flat lawns found in most of Chandigarh's other gardens, including the Rose Garden.",
  },
  {
    q: "Is there an entry fee for the Terraced Garden?",
    a: "Entry is free or available for a nominal charge, in line with most of Chandigarh's public gardens — it's a low-cost, easy stop to add to a garden-hopping day in the city.",
  },
  {
    q: "Is the Terraced Garden less crowded than the Rose Garden?",
    a: "Generally, yes — it tends to draw fewer visitors and tour groups than the Rose Garden, making it a favourite for a quieter picnic, a walk, or photography, especially outside weekend afternoons.",
  },
  {
    q: "What is the best time to visit?",
    a: "Cooler months (October to March) are the most comfortable for walking between the different levels, and the garden's seasonal flower plantings tend to be at their best through the winter and into early spring, similar to Chandigarh's other flower gardens.",
  },
  {
    q: "Can I combine the Terraced Garden with other sights?",
    a: "Yes — it's best visited alongside other nearby gardens in the Leisure Valley corridor, such as the Rose Garden or Japanese Garden, rather than as a single standalone destination.",
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
  { id: "introduction", title: "A Layered Garden", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-terraces", title: "The Terraces", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "nearby", title: "Nearby Gardens", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TerracedGardenGuidePage() {
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
              alt="A calm lake ringed by hills in Chandigarh, evoking the layered green spaces of the city's Leisure Valley corridor including the Terraced Garden"
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
                { label: "Terraced Garden", href: null },
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
                "Terraced Garden",
                "Chandigarh",
                "Sector 33",
                "Leisure Valley",
                "Gardens",
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
              Terraced Garden, Chandigarh: Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A garden laid out across multiple levels connected by stone
              steps, with seasonal flowers and quiet lawns — a calmer,
              less-crowded alternative to Chandigarh's better-known Rose
              Garden.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sector 33, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,100 words",
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
                  <h2>A Layered Garden</h2>
                  <p>
                    Most of{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>
                    's celebrated gardens — the Rose Garden, the Japanese
                    Garden, the Garden of Fragrance — share a similar
                    layout: flat, open lawns bordered by flower beds and
                    walking paths. The <strong>Terraced Garden</strong>{" "}
                    breaks from that pattern. Rather than one continuous
                    flat lawn, it's laid out across multiple levels, or
                    "terraces," connected to each other by stone steps and
                    pathways — giving the garden a distinctly layered,
                    stepped profile you don't find elsewhere in the city's
                    green spaces.
                  </p>
                  <p>
                    It's commonly placed in Sector 33, forming part of, or
                    sitting close to, Chandigarh's{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    — the long, connected green corridor that threads
                    several of the city's gardens together. That location
                    makes it easy to fold into a longer garden-hopping walk
                    rather than treating it as an isolated stop.
                  </p>
                  <p>
                    What draws visitors here specifically is the combination
                    of seasonal flower plantings that change through the
                    year and well-kept lawns spread across the different
                    levels — plus a noticeably quieter atmosphere than the
                    Rose Garden, making it a favourite for a relaxed
                    picnic or a slower photography walk.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Terraced Garden at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 33, Chandigarh",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free / nominal",
                        },
                        {
                          icon: "⏰",
                          label: "Timings",
                          value: "Daylight hours",
                        },
                        {
                          icon: "🌸",
                          label: "Known For",
                          value: "Seasonal flowers, layered lawns",
                        },
                        {
                          icon: "🧺",
                          label: "Best For",
                          value: "Picnics, photography, quiet walks",
                        },
                        {
                          icon: "🌳",
                          label: "Near",
                          value: "Leisure Valley corridor",
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
                  <h2>Best Time to Visit the Terraced Garden</h2>
                  <p>
                    As with Chandigarh's other outdoor gardens, timing your
                    visit around the season and time of day makes a real
                    difference to comfort and to how the flower beds look.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "🌷",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Peak flowering season",
                        text: "Cooler weather and the best window for seasonal flower plantings — the most rewarding time to see the terraces at their fullest.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Quietest, best light",
                        text: "Soft early light works well across the different levels, and the garden is at its calmest before families and walkers arrive later in the day.",
                      },
                      {
                        season: "Weekday Afternoons",
                        emoji: "🧘",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Ideal for a quiet picnic",
                        text: "The Terraced Garden already draws fewer crowds than the Rose Garden — weekday afternoons take that a step further, ideal if you want a genuinely peaceful sit-down.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-red-50 border-red-200",
                        mood: "Hot — visit early or late",
                        text: "Limited shade across the open terraces makes midday visits uncomfortable in peak summer — stick to early morning or the evening.",
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
                    <strong>Our pick:</strong> a winter weekday morning —
                    cool weather, flowers in bloom, and a good chance of
                    having entire terraces largely to yourself.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Terraced Garden</h2>
                  <p>
                    Sector 33's location within Chandigarh's grid makes the
                    garden a reasonably easy add-on to a day spent around
                    the city's other Leisure Valley gardens.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The most convenient way
                      to get there directly — most local drivers can find
                      Sector 33's garden area without difficulty.
                    </li>
                    <li>
                      <strong>Along the Leisure Valley:</strong> If you're
                      already walking the{" "}
                      <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                        Leisure Valley
                      </Link>{" "}
                      corridor or visiting a nearby garden, the Terraced
                      Garden can often be reached on foot as part of the
                      same walk.
                    </li>
                    <li>
                      <strong>Combine with the Rose Garden:</strong> Given
                      the proximity of Chandigarh's gardens to one another,
                      it's easy to plan a route covering the{" "}
                      <Link href="/blog/rose-garden-chandigarh-travel-guide">
                        Rose Garden
                      </Link>{" "}
                      and the Terraced Garden in the same outing.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Wear comfortable, grippy
                    footwear — the stone steps connecting the different
                    terraces are the garden's defining feature, and you'll
                    be using them repeatedly as you move between levels.
                  </div>
                </section>

                {/* ── The Terraces ──────────────────────────────────────── */}
                <section id="the-terraces">
                  <h2>The Terraces</h2>
                  <p>
                    The garden's defining feature is right there in its
                    name: instead of one flat expanse of lawn, it's built
                    across a series of distinct levels connected by stone
                    steps and pathways. Walking through it feels less like
                    strolling a single park and more like moving through a
                    sequence of smaller garden "rooms," each opening onto
                    the next as you climb or descend.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Chandigarh green spaces, evoking the layered lawns and stone pathways of the Terraced Garden"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Each level typically combines well-kept lawns with
                    seasonal flower plantings that change through the
                    year, giving the garden a different character depending
                    on when you visit — one season's palette of blooms
                    gives way to another's as the months pass, in the same
                    rotational style used across Chandigarh's other flower
                    gardens.
                  </p>
                  <p>
                    Compared to the flat, more heavily visited lawns of the
                    Rose Garden, the terraced layout naturally breaks up
                    crowds, since visitors spread themselves across
                    different levels rather than gathering in one open
                    space. The result is a garden that, even on a
                    reasonably busy day, tends to feel calmer and more
                    intimate.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Walk to the highest terrace
                    first and work your way down — you'll get a sense of
                    the garden's full layout early, then can linger on
                    whichever level's flowers or lawn catches your eye on
                    the way back.
                  </div>
                </section>

                {/* ── Photography ────────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Use the level changes for depth:</strong> The
                      stepped terraces naturally create foreground,
                      midground, and background layers in a single frame —
                      a genuine advantage over Chandigarh's flatter
                      gardens.
                    </li>
                    <li>
                      <strong>Shoot in soft morning light:</strong> Early
                      light works especially well across the different
                      levels, avoiding the harsh flattening effect of
                      midday sun.
                    </li>
                    <li>
                      <strong>Time it to the flowering season:</strong>{" "}
                      October to March generally offers the fullest,
                      most colourful plantings for photography.
                    </li>
                    <li>
                      <strong>Look for quiet corners:</strong> Because
                      visitors spread across multiple terraces, it's often
                      possible to find an uncluttered composition even when
                      the garden overall isn't empty.
                    </li>
                  </ul>
                </section>

                {/* ── Nearby ─────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Gardens</h2>
                  <p>
                    The Terraced Garden is best enjoyed as part of a wider
                    garden-hopping route rather than a standalone visit —
                    Chandigarh's Leisure Valley corridor puts several
                    green spaces within easy reach of one another.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/rose-garden-chandigarh-travel-guide">
                          Rose Garden
                        </Link>
                        :
                      </strong>{" "}
                      Asia's largest rose garden and the city's best-known
                      green space, a natural pairing for the same day.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                          Leisure Valley
                        </Link>
                        :
                      </strong>{" "}
                      The connected green corridor that links several of
                      Chandigarh's gardens, including this one.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/japanese-garden-chandigarh-travel-guide">
                          Japanese Garden
                        </Link>
                        :
                      </strong>{" "}
                      Another themed garden nearby, offering a different
                      style of landscaping for the same outing.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (45–75 Minutes)</h2>
                  <p>
                    The Terraced Garden works well both as a quick stop and
                    as a longer, unhurried picnic spot — here's a simple
                    plan that covers the essentials.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0–15 min",
                        title: "Enter & Get Oriented",
                        color: "bg-amber-700",
                        activities: [
                          "Enter the garden and note the different terrace levels",
                          "Walk to the highest accessible terrace first",
                          "Take in the overall layout before moving on",
                        ],
                      },
                      {
                        day: "15–45 min",
                        title: "Walk the Terraces",
                        color: "bg-forest-600",
                        activities: [
                          "Move level by level down through the garden",
                          "Pause at each terrace's flower beds and lawns",
                          "Photograph the layered views where the light is good",
                        ],
                      },
                      {
                        day: "45–75 min",
                        title: "Relax or Move On",
                        color: "bg-sky-600",
                        activities: [
                          "Settle on a lower terrace's lawn for a short picnic",
                          "Or continue on to the nearby Rose Garden",
                          "Exit toward the next stop on your Leisure Valley route",
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
                    * Add 30-45 minutes if you're continuing straight on to
                    the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    or another nearby stop the same day.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    The Terraced Garden is one of the most affordable
                    outdoor sights in Chandigarh — the main cost is simply
                    getting there.
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
                          ["Garden entry", "Free / ₹10", "Free / ₹10", "Free / ₹10"],
                          [
                            "Transport to/from garden",
                            "₹40 (shared auto)",
                            "₹150 (auto/cab)",
                            "₹400 (private cab)",
                          ],
                          ["Snacks/picnic supplies", "₹150", "₹400", "₹1,000+"],
                          ["Total (approx.)", "₹200", "₹560", "₹1,410+"],
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
                    * Figures are per person, approximate. Pair the visit
                    with the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    to make the most of a single trip out.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting the Terraced Garden</h2>
                  <ul>
                    <li>
                      <strong>Wear comfortable footwear:</strong> The
                      stepped terraces mean more walking up and down than
                      Chandigarh's flat gardens — grippy, comfortable shoes
                      help.
                    </li>
                    <li>
                      <strong>Visit in the flowering season:</strong>{" "}
                      October to March generally shows the garden at its
                      best, with seasonal plantings in fuller bloom.
                    </li>
                    <li>
                      <strong>Combine it with other gardens:</strong> On
                      its own, it's a fairly short visit — pairing it with
                      the Rose Garden or another Leisure Valley stop makes
                      for a fuller outing.
                    </li>
                    <li>
                      <strong>Carry water in summer:</strong> Shade is
                      limited across the open terraces, so carry water if
                      visiting in the warmer months.
                    </li>
                    <li>
                      <strong>Go early or on a weekday for quiet:</strong>{" "}
                      If a peaceful, low-crowd visit is the priority,
                      weekday mornings are the most reliable choice.
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
                          "Visit October–March for the best flowering season",
                          "Wear comfortable shoes for the stepped terraces",
                          "Combine it with the Rose Garden or Leisure Valley",
                          "Go early morning or on a weekday for a quieter visit",
                          "Bring a camera for the layered, multi-level views",
                          "Carry water during the warmer months",
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
                          "Expect flat, single-level lawns like the Rose Garden",
                          "Visit at midday in peak summer without shade cover",
                          "Treat it as a full-day destination on its own",
                          "Wear slippery or unsuitable footwear on the steps",
                          "Skip checking the flowering season before visiting",
                          "Rush through without pausing on the different levels",
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
                    <strong>🗺️ Extend the trip:</strong> The Terraced Garden
                    sits naturally alongside a wider{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    walk — pair it with the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    for a full morning or afternoon among Chandigarh's
                    gardens.
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
                  "Terraced Garden",
                  "Chandigarh",
                  "Sector 33",
                  "Leisure Valley",
                  "Gardens",
                  "Photography",
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

              <RelatedPostsGrid currentSlug="terraced-garden-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="terraced-garden-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
