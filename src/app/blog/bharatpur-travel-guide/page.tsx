// src/app/blog/bharatpur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bharatpur Guide: Keoladeo Bird Sanctuary & Tips",
  description:
    "Complete Bharatpur guide — Keoladeo National Park's UNESCO-listed wetlands, cycle-rickshaw birding, Lohagarh Fort, how to reach from Agra, and a full visit plan.",
  keywords:
    "Bharatpur travel guide, Keoladeo National Park, Bharatpur Bird Sanctuary, Keoladeo Ghana, Lohagarh Fort, best time Bharatpur, how to reach Bharatpur, Bharatpur birdwatching, Golden Triangle Agra",
  openGraph: {
    title: "Bharatpur Guide: Keoladeo Bird Sanctuary & Tips",
    description:
      "A former royal hunting reserve turned UNESCO wetland, explored by cycle-rickshaw rather than jeep — the complete guide to Bharatpur.",
    url: "https://club.kudozz.in/blog/bharatpur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Calm wetland backwaters, evoking Keoladeo National Park's marshland habitat in Bharatpur",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharatpur Guide: Keoladeo Bird Sanctuary & Tips",
    description:
      "A UNESCO-listed wetland explored by cycle-rickshaw, home to hundreds of resident and migratory bird species — the complete Bharatpur guide.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bharatpur-travel-guide",
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
          headline: "Bharatpur Guide: Keoladeo Bird Sanctuary & Tips",
          description:
            "Complete Bharatpur guide — Keoladeo National Park's UNESCO-listed wetlands, cycle-rickshaw birding, Lohagarh Fort, how to reach from Agra, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
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
            "@id": "https://club.kudozz.in/blog/bharatpur-travel-guide",
          },
          keywords:
            "Bharatpur, Keoladeo National Park, Rajasthan, bird sanctuary, UNESCO",
          about: {
            "@type": "Place",
            name: "Bharatpur",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
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
                name: "Rajasthan",
                item: "https://club.kudozz.in/blog/rajasthan-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Bharatpur",
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
    q: "What is the best time for bird watching in Bharatpur?",
    a: "October to March is the clearly recommended window, the peak migratory bird season when Keoladeo National Park's resident and visiting species are both at their most abundant.",
  },
  {
    q: "Are Siberian cranes still seen at Keoladeo?",
    a: "Honestly, no — Siberian cranes, once famously associated with the park, have become very rare or effectively absent in recent decades. The park's overall birdlife diversity remains strong, though, with painted storks, herons, cormorants, and many other migratory species reliably present in season.",
  },
  {
    q: "How do you get around inside Keoladeo National Park?",
    a: "Motor vehicles are largely restricted within the park — most exploration happens by cycle-rickshaw, bicycle, or on foot, giving it a quieter, slower character than a typical jeep-safari wildlife park.",
  },
  {
    q: "How far is Bharatpur from Agra?",
    a: "Close enough to make it an easy add-on — roughly 55 km, about a 1.5 hour drive, which is why many visitors combine it with an Agra/Taj Mahal trip.",
  },
  {
    q: "Is Bharatpur a good add-on to a Golden Triangle trip?",
    a: "Yes — given its proximity to Agra, Bharatpur is a genuinely easy and worthwhile extension to a Delhi-Agra-Jaipur Golden Triangle itinerary, needing only a half to full day.",
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
  { id: "introduction", title: "A UNESCO Wetland by Cycle-Rickshaw", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bharatpur", level: 2 },
  { id: "things-to-do", title: "Keoladeo Park & Lohagarh Fort", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BharatpurGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Calm wetland backwaters, evoking Keoladeo National Park's marshland habitat in Bharatpur"
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
                { label: "Rajasthan", href: "/blog/rajasthan-travel-guide" },
                { label: "Bharatpur", href: null },
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
                "Bharatpur",
                "Keoladeo National Park",
                "Rajasthan",
                "Bird Sanctuary",
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
              Bharatpur: Keoladeo Bird Sanctuary Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A former royal hunting reserve turned UNESCO-listed wetland,
              explored at a slow cycle-rickshaw pace rather than from the
              back of a jeep.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Bharatpur, Rajasthan",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>A UNESCO Wetland by Cycle-Rickshaw</h2>
                  <p>
                    <strong>Bharatpur</strong> is home to{" "}
                    <strong>Keoladeo National Park</strong> (formerly known
                    as Bharatpur Bird Sanctuary), a UNESCO World Heritage
                    Site and one of the world&apos;s most significant bird
                    areas. It was historically a royal duck-hunting reserve
                    before being converted into a major wetland conservation
                    area.
                  </p>
                  <p>
                    The park was once famous for rare Siberian crane
                    sightings, though these have become very rare or
                    effectively absent in recent decades — worth knowing
                    honestly before you go, even as the park&apos;s overall
                    birdlife diversity remains genuinely strong across
                    hundreds of resident and migratory species.
                  </p>
                  <p>
                    A distinctive feature of a Keoladeo visit is that motor
                    vehicles are largely restricted within the park — most
                    exploration happens by cycle-rickshaw, bicycle, or on
                    foot, giving it a quieter, slower character than a
                    typical jeep-safari wildlife park.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦩</span> Bharatpur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bharatpur, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "Nearest City",
                          value: "Agra (~55 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🦆",
                          label: "Known For",
                          value: "UNESCO Bird Sanctuary",
                        },
                        {
                          icon: "🚲",
                          label: "How to Explore",
                          value: "Cycle-Rickshaw / On Foot",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Agra / Golden Triangle",
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
                  <h2>Best Time to Visit Bharatpur</h2>
                  <p>
                    Bird numbers and comfort both point clearly to the same
                    winter window.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The peak migratory bird season, when resident and visiting species are both at their most abundant — the clearly recommended window.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌡️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, fewer birds",
                        text: "Rising heat and fewer migratory species make this a less rewarding window for a dedicated birding trip.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — wetlands fill",
                        text: "The park's wetlands fill with monsoon rain, supporting breeding resident species, though conditions for cycling/walking can be muddy.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🦅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak migratory season",
                        text: "The heart of the migratory season — the single best stretch for serious birdwatchers.",
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
                    <strong>Our pick:</strong> December to February — the
                    heart of the migratory season, when the park&apos;s bird
                    diversity is at its absolute peak.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bharatpur</h2>
                  <ul>
                    <li>
                      <strong>By road from Agra:</strong> Roughly 55 km,
                      about a 1.5 hour drive — genuinely one of the easiest
                      wildlife add-ons to an Agra/Taj Mahal trip.
                    </li>
                    <li>
                      <strong>By road from Jaipur:</strong> Roughly 180 km, a
                      3-4 hour drive.
                    </li>
                    <li>
                      <strong>By rail:</strong> Bharatpur Junction is well
                      connected on the Delhi-Agra-Mumbai rail line.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given its proximity to Agra,
                    Bharatpur is an easy and genuinely worthwhile extension
                    to a Delhi-Agra-Jaipur Golden Triangle itinerary — needs
                    only a half to full day.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Keoladeo Park & Lohagarh Fort</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Wetland habitat evoking Keoladeo National Park in Bharatpur, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Keoladeo National Park</h3>
                  <p>
                    Explored by cycle-rickshaw, bicycle, or on foot rather
                    than jeep, the park hosts hundreds of resident and
                    migratory bird species — painted storks, herons,
                    cormorants, and many more remain reliably present in
                    season, even as Siberian cranes have become effectively
                    absent in recent decades.
                  </p>
                  <h3>Lohagarh Fort</h3>
                  <p>
                    Bharatpur town&apos;s own fort, notable for having
                    reportedly never been captured despite several sieges —
                    an easy add-on if you have time beyond the bird
                    sanctuary.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Bharatpur</h2>
                  <p>
                    A range of options exists near the park entrance,
                    convenient for early-morning birding.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Budget guesthouses near the park gate",
                          "Simple hotels in Bharatpur town",
                          "Backpacker-friendly stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Birding-focused lodges",
                          "Comfortable hotels near the sanctuary",
                          "Heritage-style guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🦢",
                        range: "₹8,000–₹18,000+/night",
                        picks: [
                          "Premium heritage properties",
                          "Boutique birding lodges",
                          "Full-service resorts",
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
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Keoladeo National Park",
                        color: "bg-amber-700",
                        activities: [
                          "Early entry for the best bird activity",
                          "Cycle-rickshaw or bicycle tour through the wetlands",
                          "Spot resident and migratory species with binoculars",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Lohagarh Fort & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Lunch in Bharatpur town",
                          "Visit Lohagarh Fort",
                          "Onward to Agra or Jaipur",
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
                    * Serious birdwatchers may prefer a full extra day inside
                    the park for a slower, more thorough visit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Bharatpur</h2>
                  <ul>
                    <li>
                      <strong>Local dhabas and restaurants:</strong>{" "}
                      Rajasthani thalis and everyday meals across Bharatpur
                      town.
                    </li>
                    <li>
                      <strong>Park-adjacent cafes:</strong> A few simple
                      options near the Keoladeo entrance for a quick bite
                      between birding sessions.
                    </li>
                    <li>
                      <strong>Hotel dining:</strong> Most mid-range and
                      luxury stays offer full meal service, convenient given
                      early birding start times.
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
                            "₹4,500",
                            "₹12,000",
                          ],
                          ["Park entry fee", "₹200", "₹200", "₹200"],
                          [
                            "Cycle-rickshaw/bicycle hire",
                            "₹150",
                            "₹300",
                            "₹500",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
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
                    * Figures are per person, per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Bharatpur</h2>
                  <ul>
                    <li>
                      <strong>Go early morning:</strong> The best bird
                      activity and cooler cycling conditions both favor an
                      early start.
                    </li>
                    <li>
                      <strong>Bring binoculars:</strong> Many species are
                      best appreciated from a distance without disturbing
                      them.
                    </li>
                    <li>
                      <strong>Hire a local birding guide:</strong> Genuinely
                      improves both spotting and identification, especially
                      for first-time birders.
                    </li>
                    <li>
                      <strong>Combine with Agra:</strong> The short distance
                      makes this an easy, worthwhile Golden Triangle
                      extension.
                    </li>
                    <li>
                      <strong>Set realistic expectations on rare species:</strong>{" "}
                      Siberian cranes are effectively no longer seen here —
                      come for the overall diversity instead.
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
                          "Arrive early morning for the best bird activity",
                          "Bring binoculars and a zoom lens",
                          "Hire a local birding guide",
                          "Combine the visit with an Agra trip",
                          "Explore by cycle-rickshaw or bicycle",
                          "Visit Lohagarh Fort if time allows",
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
                          "Expect to see Siberian cranes here today",
                          "Visit in the heat of Apr-Jun for serious birding",
                          "Make loud noise near nesting/roosting areas",
                          "Skip binoculars if you're serious about birding",
                          "Rush the visit — a slow pace suits this park",
                          "Forget sun protection on longer cycle routes",
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
                    <strong>🗺️ Extend the trip:</strong> Bharatpur is a
                    natural add-on to an Agra or Golden Triangle itinerary.
                    See our full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for the wider region.
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
                  "Bharatpur",
                  "Keoladeo National Park",
                  "Rajasthan",
                  "Bird Sanctuary",
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

              <RelatedPostsGrid currentSlug="bharatpur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bharatpur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
