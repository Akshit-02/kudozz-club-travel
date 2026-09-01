// src/app/blog/leisure-valley-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Leisure Valley Chandigarh: The Complete Greenbelt Guide",
  description:
    "Complete guide to Chandigarh's Leisure Valley — the continuous green corridor linking the Rose Garden, Bougainvillea Garden, Garden of Fragrance and Terraced Garden. How to walk or cycle it, best time, and a route plan.",
  keywords:
    "Leisure Valley Chandigarh, Chandigarh green belt, Chandigarh Rose Garden, Bougainvillea Garden Chandigarh, Garden of Fragrance Chandigarh, Terraced Garden Chandigarh, Chandigarh walking route, Chandigarh cycling, Le Corbusier Chandigarh green spine, things to do in Chandigarh",
  openGraph: {
    title: "Leisure Valley Chandigarh: The Complete Greenbelt Guide",
    description:
      "A continuous green corridor threading through Chandigarh's sectors, linking the Rose Garden, Bougainvillea Garden, Garden of Fragrance, and Terraced Garden into one walkable route.",
    url: "https://club.kudozz.in/blog/leisure-valley-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A wide green landscape with a calm lake, evoking the long connected green corridor of Chandigarh's Leisure Valley",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Leisure Valley Chandigarh: The Complete Greenbelt Guide",
    description:
      "A continuous green corridor threading through Chandigarh's sectors, linking the Rose Garden, Bougainvillea Garden, Garden of Fragrance, and Terraced Garden into one walkable route.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/leisure-valley-chandigarh-travel-guide",
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
          headline: "Leisure Valley Chandigarh: The Complete Greenbelt Guide",
          description:
            "Complete guide to Chandigarh's Leisure Valley — the continuous green corridor linking the Rose Garden, Bougainvillea Garden, Garden of Fragrance and Terraced Garden. How to walk or cycle it, best time, and a route plan.",
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
            "@id": "https://club.kudozz.in/blog/leisure-valley-chandigarh-travel-guide",
          },
          keywords:
            "Leisure Valley Chandigarh, Chandigarh green belt, Rose Garden, Bougainvillea Garden, Garden of Fragrance, Terraced Garden, Chandigarh walking route",
          about: {
            "@type": "Place",
            name: "Leisure Valley, Chandigarh",
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
                name: "Leisure Valley",
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
    q: "What exactly is Leisure Valley in Chandigarh?",
    a: "Leisure Valley isn't a single park — it's a long, continuous green corridor that threads through many of Chandigarh's sectors, conceived as part of the city's original Le Corbusier-era plan to give the whole city a connected spine of open, landscaped green space rather than isolated, disconnected parks.",
  },
  {
    q: "Which gardens sit along the Leisure Valley?",
    a: "Several of Chandigarh's individually-named gardens sit along or branch off this greenbelt, including the Rose Garden, Bougainvillea Garden, Garden of Fragrance, and Terraced Garden. Walking or cycling the corridor lets you pass through several distinct themed gardens in a single outing rather than visiting each as a separate errand.",
  },
  {
    q: "Is there an entry fee for the Leisure Valley?",
    a: "No — the Leisure Valley itself is free and open-access, with no fixed entry point or ticket counter, since it's essentially civic green infrastructure rather than a paid attraction. Individual gardens along its length may have their own free or nominal entry, but the corridor itself has none.",
  },
  {
    q: "Can I cycle through the Leisure Valley?",
    a: "Yes — it's a popular route for cyclists as well as walkers and joggers, since the corridor is largely flat, shaded, and connects several sectors without needing to use main roads. It's one of the more pleasant ways to cover ground in Chandigarh outside of using an auto or cab.",
  },
  {
    q: "How long does it take to walk the Leisure Valley?",
    a: "That depends entirely on how much of it you cover and how many themed gardens you stop at — a focused walk linking three or four gardens can take two to three hours at an easy pace, while locals often use shorter stretches near their own sector for a twenty-to-thirty-minute daily walk.",
  },
  {
    q: "What is the best time to visit the Leisure Valley?",
    a: "Early morning and early evening are best, both for cooler temperatures and because that's when the corridor is busiest with walkers, joggers, and cyclists — which also makes it feel safer and more sociable than a midday visit.",
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
  { id: "introduction", title: "Chandigarh's Green Spine", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-greenbelt-concept", title: "The Greenbelt Concept", level: 2 },
  { id: "gardens-along-the-way", title: "Gardens Along the Way", level: 2 },
  { id: "walking-or-cycling-it", title: "Walking or Cycling It", level: 2 },
  { id: "visit-plan", title: "Suggested Route Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LeisureValleyGuidePage() {
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
              alt="A wide green landscape with a calm lake, evoking the long connected green corridor of Chandigarh's Leisure Valley"
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
                { label: "Leisure Valley", href: null },
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
                "Leisure Valley",
                "Chandigarh",
                "Green Belt",
                "Walking Route",
                "Cycling",
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
              Leisure Valley, Chandigarh: The Complete Greenbelt Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A continuous green corridor threading through Chandigarh's
              sectors, linking the Rose Garden, Bougainvillea Garden, Garden
              of Fragrance, and Terraced Garden into one walkable — or
              cyclable — route.
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
                  text: "Multiple sectors, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
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
                  <h2>Chandigarh's Green Spine</h2>
                  <p>
                    <strong>Leisure Valley</strong> is not a single garden
                    you visit and leave — it's a long, continuous green
                    corridor that threads through many of{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>
                    's sectors, conceived as part of the city's original
                    Le Corbusier-era plan. Rather than scattering isolated
                    parks across the city grid, the planners gave
                    Chandigarh a connected spine of open, landscaped green
                    space that runs through sector after sector, linking
                    neighbourhoods the way a river might in an older city.
                  </p>
                  <p>
                    The practical effect of this is genuinely useful for a
                    visitor: several of Chandigarh's best-known themed
                    gardens — the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>
                    , the{" "}
                    <Link href="/blog/bougainvillea-garden-chandigarh-travel-guide">
                      Bougainvillea Garden
                    </Link>
                    , the{" "}
                    <Link href="/blog/garden-of-fragrance-chandigarh-travel-guide">
                      Garden of Fragrance
                    </Link>
                    , and the{" "}
                    <Link href="/blog/terraced-garden-chandigarh-travel-guide">
                      Terraced Garden
                    </Link>{" "}
                    — all sit along or branch directly off this greenbelt.
                    That means you don't have to treat each one as a
                    separate errand requiring its own auto ride. Walked or
                    cycled as a single corridor, they become one connected
                    outing.
                  </p>
                  <p>
                    This guide treats Leisure Valley exactly that way: not
                    as one more attraction to check off, but as the
                    connective tissue that ties Chandigarh's garden-hopping
                    together. If you're planning to see more than one
                    themed garden in the city — and most visitors end up
                    wanting to — this is the page to start from.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Leisure Valley at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Runs through many sectors",
                        },
                        {
                          icon: "🌳",
                          label: "Type",
                          value: "Continuous green corridor",
                        },
                        {
                          icon: "🌹",
                          label: "Links",
                          value: "Rose, Bougainvillea, Fragrance, Terraced",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free, open-access",
                        },
                        {
                          icon: "🚶",
                          label: "Best For",
                          value: "Walking, jogging, cycling",
                        },
                        {
                          icon: "⏰",
                          label: "Timings",
                          value: "Open access, best at daylight hours",
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
                  <h2>Best Time to Visit Leisure Valley</h2>
                  <p>
                    Because it's an open, outdoor corridor used daily by
                    locals, Leisure Valley has its own rhythm — busiest and
                    most pleasant early and late in the day, quieter and
                    hotter through the middle of it.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best for walkers, joggers & cyclists",
                        text: "Cool air and soft light, plus company — this is when the corridor is busiest with locals on their daily walk, jog, or cycle.",
                      },
                      {
                        season: "Evening",
                        emoji: "🌇",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best for a relaxed walk",
                        text: "A second daily peak, with families and couples out strolling once the day's heat has faded — a sociable, unhurried time to cover a stretch of the valley.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best season overall",
                        text: "Comfortable temperatures make longer stretches of walking or cycling genuinely enjoyable at any hour, not just morning or evening.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Stick to early or late hours",
                        text: "Midday heat is intense and shade varies by stretch — plan longer garden-hopping routes for early morning instead.",
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
                    <strong>Our pick:</strong> a cool-season morning,
                    starting early enough to walk or cycle two or three
                    gardens along the corridor before the day heats up.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Leisure Valley</h2>
                  <p>
                    Because it runs through so much of the city, there's no
                    single "entrance" to Leisure Valley — you simply join
                    it from whichever sector you're closest to.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The easiest way to reach
                      a specific stretch — tell your driver the nearest
                      garden along the corridor (the Rose Garden or
                      Bougainvillea Garden are common starting points) and
                      join the valley from there.
                    </li>
                    <li>
                      <strong>On foot from a central sector:</strong> If
                      you're already staying or sightseeing in one of
                      Chandigarh's central sectors, a stretch of the valley
                      is often within easy walking distance.
                    </li>
                    <li>
                      <strong>By rented cycle:</strong> Some sectors have
                      cycle rental points near popular entry gardens — worth
                      checking locally if you plan to cover a longer stretch
                      of the corridor.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Rather than asking for
                    "Leisure Valley" by name, tell your auto or cab driver
                    the specific garden you want to start at — it's a far
                    more precise way to get dropped at the right stretch of
                    the corridor.
                  </div>
                </section>

                {/* ── The Greenbelt Concept ──────────────────────────────── */}
                <section id="the-greenbelt-concept">
                  <h2>The Greenbelt Concept</h2>
                  <p>
                    Le Corbusier's original plan for Chandigarh treated
                    green space as infrastructure, not decoration. Instead
                    of dotting the city with disconnected parks the way
                    most Indian cities are laid out, the plan ran a
                    continuous belt of landscaped open space through the
                    heart of the sector grid — a spine that every sector
                    could connect to, rather than a handful of isolated
                    green islands.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="A long stretch of open green parkland beside water, evoking the continuous corridor of Chandigarh's Leisure Valley threading between sectors"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Decades later, that decision is exactly what makes
                    Leisure Valley function as much as everyday civic
                    infrastructure as a tourist sight. For residents, it's
                    where the morning walk happens, where kids cycle after
                    school, where evening gossip circles form on benches.
                    For a visitor, that same continuity means you can move
                    between several individually-named, individually
                    themed gardens without ever really leaving green space
                    — no busy roads to cross, no separate ticketed entries,
                    just a long, shaded path that keeps unfolding into the
                    next garden.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Think of Leisure Valley less
                    as a destination and more as the road that connects
                    Chandigarh's garden destinations — plan your day around
                    the gardens, and let the valley be how you move between
                    them.
                  </div>
                </section>

                {/* ── Gardens Along the Way ──────────────────────────────── */}
                <section id="gardens-along-the-way">
                  <h2>Gardens Along the Way</h2>
                  <p>
                    A visitor walking or cycling the Leisure Valley path
                    can pass through several distinct themed gardens in one
                    outing. Here's what sits along or branches off the
                    corridor:
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/rose-garden-chandigarh-travel-guide">
                          Rose Garden (Zakir Hussain Rose Garden)
                        </Link>
                      </strong>
                      : Asia's largest rose garden, best visited in
                      February–March during the annual Rose Festival, and
                      one of the most natural anchor points for a Leisure
                      Valley walk.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/bougainvillea-garden-chandigarh-travel-guide">
                          Bougainvillea Garden
                        </Link>
                      </strong>
                      : a themed garden built around bougainvillea varieties
                      in a wide range of colours, offering a very different
                      visual palette from the rose beds nearby.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/garden-of-fragrance-chandigarh-travel-guide">
                          Garden of Fragrance
                        </Link>
                      </strong>
                      : a small, scent-focused garden with fragrant flowers
                      and aromatic herbs, including some Braille and
                      scent-based signage for accessibility.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/terraced-garden-chandigarh-travel-guide">
                          Terraced Garden
                        </Link>
                      </strong>
                      : a garden laid out across stepped levels, adding a
                      change of elevation and visual rhythm to the walk.
                    </li>
                  </ul>
                  <p>
                    Beyond these four, the wider corridor also brushes past
                    or sits within easy reach of other Chandigarh greenery,
                    including the{" "}
                    <Link href="/blog/japanese-garden-chandigarh-travel-guide">
                      Japanese Garden
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/shanti-kunj-chandigarh-travel-guide">
                      Shanti Kunj
                    </Link>
                    , both worth folding into a longer garden-hopping day if
                    you have the time.
                  </p>
                </section>

                {/* ── Walking or Cycling It ──────────────────────────────── */}
                <section id="walking-or-cycling-it">
                  <h2>Walking or Cycling It</h2>
                  <p>
                    The corridor is largely flat, shaded in long stretches,
                    and designed for exactly this kind of unhurried
                    movement — which makes both walking and cycling
                    genuinely pleasant ways to cover it.
                  </p>
                  <ul>
                    <li>
                      <strong>Walking:</strong> The most flexible option —
                      you can stop as often as you like at each garden, and
                      it needs no equipment beyond comfortable shoes. A
                      three-to-four garden stretch comfortably fits into a
                      half-day at an easy pace.
                    </li>
                    <li>
                      <strong>Cycling:</strong> Faster and better suited to
                      covering more ground, especially if you're trying to
                      link gardens that sit further apart along the
                      corridor. Locally rented cycles near popular gardens
                      make this an easy option even without your own bike.
                    </li>
                    <li>
                      <strong>Mixing both:</strong> Many visitors cycle
                      between gardens and walk once inside each one, which
                      balances covering distance with actually taking time
                      to enjoy each stop.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Route Plan (Half Day)</h2>
                  <p>
                    Here's a simple way to link the greenbelt's main gardens
                    into one outing rather than four separate trips.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-60 min",
                        title: "Rose Garden",
                        color: "bg-amber-700",
                        activities: [
                          "Start at the Rose Garden, the corridor's biggest anchor",
                          "Walk the rose beds and open lawns at an easy pace",
                          "Join the Leisure Valley path heading onward",
                        ],
                      },
                      {
                        day: "60-100 min",
                        title: "Bougainvillea Garden",
                        color: "bg-forest-600",
                        activities: [
                          "Follow the greenbelt to the Bougainvillea Garden",
                          "Take in the colour palette against the rose beds behind you",
                          "Continue along the corridor toward the next stop",
                        ],
                      },
                      {
                        day: "100-140 min",
                        title: "Garden of Fragrance",
                        color: "bg-sky-600",
                        activities: [
                          "A short, calm stop focused on scent over sightlines",
                          "Note the Braille and scent-based plant labelling",
                          "Rest here before the final stretch",
                        ],
                      },
                      {
                        day: "140-180 min",
                        title: "Terraced Garden",
                        color: "bg-stone-600",
                        activities: [
                          "Finish at the Terraced Garden's stepped levels",
                          "Take in the change of elevation and views",
                          "Exit toward transport back to your base",
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
                    * Timings assume a walking pace with a short stop at
                    each garden — cycling the same route can cut total time
                    by roughly a third, and adding the Japanese Garden or
                    Shanti Kunj will extend it further.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Leisure Valley itself is free, and most of the gardens
                    along it are free or nominally priced — your main cost
                    is transport to your starting point and back.
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
                          ["Corridor & garden entries", "Free / nominal", "Free / nominal", "Free / nominal"],
                          [
                            "Transport to starting garden",
                            "₹60 (auto shared)",
                            "₹150 (auto)",
                            "₹400 (private cab)",
                          ],
                          [
                            "Cycle rental (optional, half day)",
                            "₹100",
                            "₹250",
                            "₹500",
                          ],
                          [
                            "Water & snacks",
                            "₹100",
                            "₹250",
                            "₹500",
                          ],
                          ["Total (approx.)", "₹260", "₹650", "₹1,400"],
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
                    * Figures are per person, per outing. See our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for how a Leisure Valley walk fits into a wider
                    itinerary.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Leisure Valley</h2>
                  <ul>
                    <li>
                      <strong>Plan by garden, not by "the valley":</strong>{" "}
                      Since there's no single entrance, decide which
                      gardens you want to see and let the corridor connect
                      them, rather than trying to "visit Leisure Valley" as
                      one destination.
                    </li>
                    <li>
                      <strong>Start early in warmer months:</strong> Long
                      stretches of the corridor have limited shade at
                      midday — an early start makes a multi-garden route
                      far more comfortable.
                    </li>
                    <li>
                      <strong>Carry water and light snacks:</strong> Food
                      and drink stalls are sparse along most of the
                      corridor itself.
                    </li>
                    <li>
                      <strong>Mind seasonal blooms:</strong> The Rose
                      Garden is best in February–March, so time a
                      multi-garden route around that if roses are a
                      priority.
                    </li>
                    <li>
                      <strong>Use it for everyday exercise too:</strong> If
                      you're staying in Chandigarh for more than a day or
                      two, the nearest stretch of Leisure Valley is a
                      pleasant, free way to start the morning.
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
                          "Link two or more gardens into one walk or ride",
                          "Start early morning for the coolest, busiest stretch",
                          "Carry water on longer multi-garden routes",
                          "Time a visit around February–March for the roses",
                          "Consider a rented cycle for longer stretches",
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
                          "Expect a single ticketed entrance or gate",
                          "Attempt a long multi-garden walk at midday in summer",
                          "Treat each garden as a separate auto-ride errand",
                          "Rely on the corridor itself for food or water",
                          "Skip it thinking it's just a park between gardens",
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
                    <strong>🗺️ Extend the trip:</strong> Use Leisure Valley
                    as the spine of a full garden-hopping day — combine the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>
                    , the{" "}
                    <Link href="/blog/bougainvillea-garden-chandigarh-travel-guide">
                      Bougainvillea Garden
                    </Link>
                    , the{" "}
                    <Link href="/blog/garden-of-fragrance-chandigarh-travel-guide">
                      Garden of Fragrance
                    </Link>
                    , the{" "}
                    <Link href="/blog/terraced-garden-chandigarh-travel-guide">
                      Terraced Garden
                    </Link>
                    , and the{" "}
                    <Link href="/blog/japanese-garden-chandigarh-travel-guide">
                      Japanese Garden
                    </Link>{" "}
                    into one connected outing rather than four or five
                    separate ones.
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
                  "Leisure Valley",
                  "Chandigarh",
                  "Rose Garden",
                  "Bougainvillea Garden",
                  "Garden of Fragrance",
                  "Terraced Garden",
                  "Chandigarh Gardens",
                  "Walking Route",
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

              <RelatedPostsGrid currentSlug="leisure-valley-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="leisure-valley-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
