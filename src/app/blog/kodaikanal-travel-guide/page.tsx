// src/app/blog/kodaikanal-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kodaikanal Travel Guide: Lake, Views & Tips",
  description:
    "Complete Kodaikanal guide — Kodaikanal Lake, Coaker's Walk, Pillar Rocks, the rare Kurinji flower, best time to visit, how to reach, and a full visit plan.",
  keywords:
    "Kodaikanal travel guide, Kodaikanal Lake, Coaker's Walk, Pillar Rocks Kodaikanal, Kurinji flower, Palani Hills, best time to visit Kodaikanal, how to reach Kodaikanal, Kodaikanal itinerary",
  openGraph: {
    title: "Kodaikanal Travel Guide: Lake, Views & Tips",
    description:
      "A star-shaped lake, ridge-top walks, and a flower that blooms once every 12 years — the complete guide to the Princess of Hill Stations.",
    url: "https://club.kudozz.in/blog/kodaikanal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Misty forested hill valley, evoking Kodaikanal's Palani Hills scenery",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodaikanal Travel Guide: Lake, Views & Tips",
    description:
      "A star-shaped lake, ridge-top walks, and the rare Kurinji flower — the complete Kodaikanal guide.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kodaikanal-travel-guide",
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
          headline: "Kodaikanal Travel Guide: Lake, Views & Tips",
          description:
            "Complete Kodaikanal guide — Kodaikanal Lake, Coaker's Walk, Pillar Rocks, the rare Kurinji flower, best time to visit, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
            "@id": "https://club.kudozz.in/blog/kodaikanal-travel-guide",
          },
          keywords:
            "Kodaikanal, Palani Hills, Tamil Nadu, hill station, Kurinji flower",
          about: {
            "@type": "Place",
            name: "Kodaikanal",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tamil Nadu",
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
                name: "Tamil Nadu",
                item: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Kodaikanal",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is the best time to visit Kodaikanal?",
    a: "April to June for pleasant, mild weather, or September-October right after the monsoon when the hills are lush and clear. December-January gets genuinely cold, especially at night.",
  },
  {
    q: "How far is Kodaikanal from Madurai?",
    a: "Roughly 120 km, about a 3.5-hour drive via the winding Kodai ghat road — Madurai is the most common gateway for reaching Kodaikanal by air or rail.",
  },
  {
    q: "Is Kodaikanal quieter than Ooty?",
    a: "Generally yes — Kodaikanal has a more forested, low-key character than Ooty, though it has grown busier with tourism in recent years and can still feel crowded on weekends and peak season.",
  },
  {
    q: "What is the Kurinji flower?",
    a: "A rare shrub native to the Western Ghats that flowers in a spectacular mass bloom only once every 12 years, turning hillsides purple-blue. The last major bloom was around 2018, with the next expected around 2030.",
  },
  {
    q: "How many days do I need in Kodaikanal?",
    a: "Two days covers the lake, Coaker's Walk, Bryant Park, and Pillar Rocks comfortably. A third day allows for a slower pace or an excursion further into the Palani Hills.",
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
  { id: "introduction", title: "Princess of Hill Stations", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kodaikanal", level: 2 },
  { id: "things-to-do", title: "Lake, Walks & Viewpoints", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KodaikanalGuidePage() {
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
              src="/images/destinations/kasol/kasol.jpg"
              alt="Misty forested hill valley, evoking Kodaikanal's Palani Hills scenery"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Kodaikanal", href: null },
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
              {["Kodaikanal", "Palani Hills", "Lake", "Kurinji Flower", "Hill Station"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kodaikanal: Lake, Ridge Walks & Viewpoints
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A star-shaped lake, mist-wrapped ridge walks, and a flower
              that blooms only once every twelve years — the Princess of
              Hill Stations, quieter and more forested than its Nilgiris
              cousin.
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
                  text: "Palani Hills, Tamil Nadu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>Princess of Hill Stations</h2>
                  <p>
                    <strong>Kodaikanal</strong>, tucked into the Palani
                    Hills of{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu
                    </Link>
                    , has long carried the nickname "Princess of Hill
                    Stations" — a nod to its more forested, quieter
                    character compared to Ooty's bigger crowds and busier
                    infrastructure. That said, tourism here has grown
                    considerably in recent years, so it's best thought of
                    as a calmer alternative rather than an undiscovered
                    secret.
                  </p>
                  <p>
                    At its centre is a star-shaped lake ringed by a walking
                    path, with ridge-top viewpoints, waterfalls, and rock
                    formations scattered across the surrounding hills — and,
                    once every twelve years, hillsides turned purple-blue by
                    the rare Kurinji flower.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Kodaikanal at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Range", value: "Palani Hills, Tamil Nadu" },
                        { icon: "🚉", label: "Gateway", value: "Madurai (~120 km)" },
                        { icon: "🌡️", label: "Best Time", value: "Apr–Jun, Sep–Oct" },
                        { icon: "⭐", label: "Known For", value: "Star-shaped Lake" },
                        { icon: "🌸", label: "Rare Bloom", value: "Kurinji (every 12 yrs)" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,400–₹5,500" },
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
                  <h2>Best Time to Visit Kodaikanal</h2>
                  <p>
                    Altitude and mist both shape the experience here more
                    than in most Tamil Nadu destinations.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, mild weather and generally the clearest skies for viewpoint visits — the most popular window, so expect company.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — wet and misty",
                        text: "Heavy rain and thick mist can limit visibility at Coaker's Walk and Pillar Rocks — plan flexibly.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🍃",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Lush and clear",
                        text: "Post-monsoon greenery with generally good visibility — a strong second choice for viewpoint-focused visits.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🥶",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold",
                        text: "Genuinely cold at this altitude, especially at night — atmospheric, but pack proper warm layers.",
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
                    <strong>Our pick:</strong> April to June for reliable
                    clear-sky views, or September-October if you'd rather
                    see the hills at their greenest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kodaikanal</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> Madurai Airport, roughly 120
                      km away, is the most practical gateway, with taxis
                      and buses covering the onward ghat-road drive.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kodai Road railway station
                      near Palani connects to the broader network, with a
                      further road journey to reach the town itself.
                    </li>
                    <li>
                      <strong>By road:</strong> A winding ghat road climbs
                      from either Madurai or Palani — scenic but slow, so
                      budget extra travel time.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The ghat road has frequent
                    hairpin bends — avoid the drive after dark if you're
                    not used to mountain roads, and check for fog in the
                    early morning.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Lake, Walks & Viewpoints</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="Forested hill valley, evoking the Palani Hills around Kodaikanal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Kodaikanal Lake</h3>
                  <p>
                    A star-shaped artificial lake at the town's centre, with
                    a perimeter path popular for cycling, walking, and
                    boating on the water itself.
                  </p>
                  <h3>Coaker's Walk</h3>
                  <p>
                    A paved ridge-top path offering sweeping valley views —
                    best attempted early, before mist rolls in and reduces
                    visibility.
                  </p>
                  <h3>Bryant Park</h3>
                  <p>
                    A well-maintained garden near the lake, a relaxed
                    half-hour stop for families.
                  </p>
                  <h3>Pillar Rocks</h3>
                  <p>
                    Three massive vertical rock formations rising from the
                    forest — one of the area's most photographed
                    viewpoints.
                  </p>
                  <h3>Silver Cascade Falls</h3>
                  <p>
                    A roadside waterfall on the way into town from the
                    plains, an easy first stop for arriving visitors.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kodaikanal</h2>
                  <p>
                    Accommodation clusters around the lake and town centre,
                    with quieter cottage-style options further out.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Budget lodges near the lake",
                          "TTDC hotels",
                          "Basic homestays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,800–₹5,500/night",
                        picks: [
                          "Cottage-style hotels",
                          "Lake-adjacent guesthouses",
                          "Boutique stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,500–₹13,000+/night",
                        picks: [
                          "Forest-view resorts",
                          "Heritage cottage properties",
                          "Premium hillside stays",
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
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Lake & Town",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Kodaikanal Lake — boating and cycling",
                          "Bryant Park",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Viewpoints",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning Coaker's Walk",
                          "Pillar Rocks",
                          "Silver Cascade Falls on departure",
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
                  <h2>What to Eat in Kodaikanal</h2>
                  <ul>
                    <li>
                      <strong>Homemade chocolate:</strong> Small chocolate
                      shops around town make for an easy, popular souvenir
                      stop.
                    </li>
                    <li>
                      <strong>Fresh plums and pears:</strong> Local orchard
                      produce is sold seasonally along the main roads.
                    </li>
                    <li>
                      <strong>South Indian standards:</strong> Reliable
                      local eateries around the lake serve the usual
                      Tamil Nadu breakfast and thali staples.
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
                          ["Accommodation/night", "₹1,200", "₹3,500", "₹8,000"],
                          ["Food/day", "₹450", "₹900", "₹2,000"],
                          ["Local transport/day", "₹400", "₹800", "₹1,600"],
                          ["Boating (per session)", "₹150", "₹150", "₹300"],
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
                    * Figures are per person, per day. Excludes travel to
                    Madurai.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kodaikanal</h2>
                  <ul>
                    <li>
                      <strong>Check mist before viewpoint visits:</strong>{" "}
                      Coaker's Walk and Pillar Rocks are both weather-
                      dependent — early morning usually offers the clearest
                      views.
                    </li>
                    <li>
                      <strong>Pack warm layers:</strong> Nights get cold
                      year-round, and genuinely cold from December to
                      January.
                    </li>
                    <li>
                      <strong>Cycle around the lake:</strong> A low-key,
                      popular way to see the town at a relaxed pace.
                    </li>
                    <li>
                      <strong>Book ahead in peak season:</strong> April-June
                      and major holiday weekends fill accommodation
                      quickly.
                    </li>
                  </ul>

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
                          "Visit Coaker's Walk early for the clearest views",
                          "Carry a jacket for cool evenings",
                          "Try a bicycle loop around the lake",
                          "Book accommodation ahead in peak season",
                          "Sample the local homemade chocolate",
                          "Check weather before heading to Pillar Rocks",
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
                          "Expect clear viewpoint visibility on rainy days",
                          "Underestimate the cold in December-January",
                          "Drive the ghat road at night if unfamiliar with it",
                          "Skip planning ahead for peak-season weekends",
                          "Assume Kodaikanal is crowd-free — it isn't anymore",
                          "Forget rain gear during the monsoon months",
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
                    <strong>🗺️ Extend the trip:</strong> Combine with{" "}
                    <Link href="/blog/madurai-travel-guide">Madurai</Link>{" "}
                    for a temple-and-hills circuit, or see our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for the wider state.
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
                {["Kodaikanal", "Palani Hills", "Tamil Nadu", "Hill Station"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="kodaikanal-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kodaikanal-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
