// src/app/blog/kohima-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kohima Travel Guide: War Cemetery & History",
  description:
    "Complete Kohima guide — the WWII War Cemetery, the Battle of Kohima's place in world history, Kohima State Museum, how to reach from Dimapur, and a full visit plan.",
  keywords:
    "Kohima travel guide, Kohima War Cemetery, Battle of Kohima, Nagaland capital, Kohima State Museum, Cathedral of Reconciliation, how to reach Kohima, Hornbill Festival, Naga cuisine",
  openGraph: {
    title: "Kohima Travel Guide: War Cemetery & History",
    description:
      "A hill capital where a WWII battle changed the course of the war, and the gateway to Nagaland's tribal heartland — the complete Kohima guide.",
    url: "https://club.kudozz.in/blog/kohima-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green mountain landscape, evoking Kohima's hill-capital setting in Nagaland",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kohima Travel Guide: War Cemetery & History",
    description:
      "A hill capital where a WWII battle changed the course of the war — the complete Kohima guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kohima-travel-guide",
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
          headline: "Kohima Travel Guide: War Cemetery & History",
          description:
            "Complete Kohima guide — the WWII War Cemetery, the Battle of Kohima's place in world history, Kohima State Museum, how to reach from Dimapur, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/kohima-travel-guide",
          },
          keywords: "Kohima, Nagaland, War Cemetery, Battle of Kohima, Hornbill Festival",
          about: {
            "@type": "Place",
            name: "Kohima",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nagaland",
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
                name: "Nagaland",
                item: "https://club.kudozz.in/blog/nagaland-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Kohima",
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
    q: "How far is Kohima from Dimapur?",
    a: "Roughly 74 km, about a 2.5-3 hour drive on hilly roads. Dimapur has Nagaland's only major airport and railway station, so almost every visitor to Kohima arrives via Dimapur first.",
  },
  {
    q: "Is Kohima a good base for exploring the rest of Nagaland?",
    a: "Yes — it's the practical base for both Kisama, roughly 12 km away and home to the Hornbill Festival venue, and Dzukou Valley, reached via Viswema village a short drive from the city.",
  },
  {
    q: "What is the best time to visit Kohima?",
    a: "October to April brings the most pleasant, dry weather. Specifically, December 1-10 is the Hornbill Festival window, when Kohima and nearby Kisama see the region's biggest cultural event of the year.",
  },
  {
    q: "How far is it to Kisama and Dzukou Valley from Kohima?",
    a: "Kisama is about 12 km, a short drive. Dzukou Valley's trailhead at Viswema village is roughly 25 km from Kohima, with the trek itself starting from there.",
  },
  {
    q: "What is Naga food like in Kohima?",
    a: "Bold and distinctive — smoked pork, bamboo shoot dishes, and preparations using king chili (bhut jolokia), among the world's hottest peppers. Kohima's restaurants and local eateries are a good introduction to this cuisine.",
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
  { id: "introduction", title: "A Capital Shaped by History", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kohima", level: 2 },
  { id: "things-to-do", title: "War Cemetery, Museum & City Sights", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KohimaGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Green mountain landscape, evoking Kohima's hill-capital setting in Nagaland"
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
                { label: "Nagaland", href: "/blog/nagaland-travel-guide" },
                { label: "Kohima", href: null },
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
              {["Kohima", "Nagaland", "War Cemetery", "Hornbill Festival"].map(
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
              Kohima: War Cemetery, History & Nagaland Gateway
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A hill capital where one of WWII's most decisive battles was
              fought, and the practical starting point for Nagaland's
              tribal heartland, the Hornbill Festival, and Dzukou Valley.
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
                  text: "Kohima, Nagaland",
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
                  <h2>A Capital Shaped by History</h2>
                  <p>
                    <strong>Kohima</strong>, capital of{" "}
                    <Link href="/blog/nagaland-travel-guide">Nagaland</Link>,
                    is best known outside the region for the{" "}
                    <strong>Battle of Kohima</strong> in 1944 — a pivotal
                    WWII engagement often called the "Stalingrad of the
                    East" for how decisively it halted the Japanese advance
                    into India. That a battle of this scale and consequence
                    was fought in this small hill town is a fact many
                    visitors are surprised to learn.
                  </p>
                  <p>
                    Today Kohima functions as both Nagaland's administrative
                    capital and the practical base for exploring the rest of
                    the state — Kisama, site of the famous Hornbill
                    Festival, and Dzukou Valley, one of Northeast India's
                    most striking treks, are both within easy reach.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🎖️</span> Kohima at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Nagaland" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Dimapur (~74 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🎗️",
                          label: "Known For",
                          value: "WWII History",
                        },
                        {
                          icon: "🎉",
                          label: "Hornbill Festival",
                          value: "Dec 1–10",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,000",
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
                  <h2>Best Time to Visit Kohima</h2>
                  <p>
                    Kohima's hill-town climate is comfortable for most of
                    the year, with a distinct monsoon window worth avoiding
                    for outdoor sightseeing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry, clear, and comfortably cool — the most reliable window for sightseeing and travel around Nagaland's hilly roads.",
                      },
                      {
                        season: "Dec 1 – 10",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Hornbill Festival",
                        text: "Kohima and nearby Kisama host Nagaland's biggest cultural event — book accommodation and travel months ahead.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, pre-monsoon",
                        text: "Temperatures climb but remain manageable; a reasonable window before the rains set in.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "Heavy rainfall makes hill roads slower and less predictable; not the best window for sightseeing or trekking.",
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
                    <strong>Our pick:</strong> October to April for
                    dependable weather — or, if the cultural spectacle
                    matters more than convenience, the first ten days of
                    December for the Hornbill Festival.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kohima</h2>
                  <ul>
                    <li>
                      <strong>Via Dimapur:</strong> Nagaland's only major
                      airport and railway station is in{" "}
                      <Link href="/blog/dimapur-travel-guide">Dimapur</Link>,
                      roughly 74 km away — a 2.5-3 hour drive on winding
                      hill roads.
                    </li>
                    <li>
                      <strong>By road from Guwahati:</strong> A longer but
                      manageable drive for those combining Kohima with a
                      wider Northeast India itinerary.
                    </li>
                    <li>
                      <strong>Within Nagaland:</strong> Kohima connects by
                      road to Kisama, Dzukou Valley's trailhead at Viswema,
                      and other parts of the state.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Almost every Nagaland trip
                    starts in Dimapur — arrange onward transport to Kohima
                    before you land, especially during the Hornbill
                    Festival when demand for cars and drivers spikes
                    sharply.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>War Cemetery, Museum & City Sights</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Hill landscape around Kohima, Nagaland"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Kohima War Cemetery</h3>
                  <p>
                    A Commonwealth War Graves site commemorating soldiers
                    who died in the 1944 Battle of Kohima. Its epitaph —{" "}
                    <em>
                      "When You Go Home, Tell Them Of Us And Say, For Your
                      Tomorrow, We Gave Our Today"
                    </em>{" "}
                    — is one of the most quoted war memorial inscriptions in
                    the world. Visit with the quiet respect the site
                    deserves.
                  </p>
                  <h3>Kohima State Museum</h3>
                  <p>
                    Documents Naga tribal culture and the region's history
                    across Nagaland's many tribes — a useful orientation
                    before heading further into the state.
                  </p>
                  <h3>Cathedral of Reconciliation</h3>
                  <p>
                    A Catholic cathedral built partly as a memorial to
                    soldiers of all nationalities who died in the Battle of
                    Kohima, reflecting the town's layered wartime history.
                  </p>
                  <h3>Kisama & the Hornbill Festival</h3>
                  <p>
                    Roughly 12 km away,{" "}
                    <Link href="/blog/kisama-travel-guide">Kisama</Link>{" "}
                    hosts the annual Hornbill Festival every December 1-10,
                    bringing together all of Nagaland's major tribes for
                    dance, music, food, and crafts.
                  </p>
                  <h3>Dzukou Valley</h3>
                  <p>
                    Nagaland's most celebrated trek, reached via Viswema
                    village a short drive from Kohima — see our full{" "}
                    <Link href="/blog/dzukou-valley-travel-guide">
                      Dzukou Valley trek guide
                    </Link>{" "}
                    for route and timing details.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kohima</h2>
                  <p>
                    Kohima has the widest range of accommodation in
                    Nagaland, from budget guesthouses to a handful of
                    comfortable mid-range hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses in central Kohima",
                          "Tourist lodges",
                          "Homestays near the War Cemetery",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels, central Kohima",
                          "Boutique guesthouses",
                          "Hill-view properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium hotels, central Kohima",
                          "Full-service business hotels",
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
                    Book well ahead if visiting during the Hornbill
                    Festival — Kohima's limited rooms fill up region-wide
                    weeks in advance.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Kohima City",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Dimapur, check in",
                          "Kohima War Cemetery",
                          "Kohima State Museum and Cathedral of Reconciliation",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Kisama or Dzukou Valley",
                        color: "bg-sky-600",
                        activities: [
                          "Day trip to Kisama's Naga Heritage Village",
                          "Or begin the Dzukou Valley trek from Viswema",
                          "Return to Kohima or continue onward",
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
                  <h2>What to Eat in Kohima</h2>
                  <ul>
                    <li>
                      <strong>Smoked pork:</strong> A Naga staple, often
                      cooked with bamboo shoot or fermented soybean —
                      widely available across Kohima's eateries.
                    </li>
                    <li>
                      <strong>Bamboo shoot dishes:</strong> Fermented or
                      fresh bamboo shoot features heavily in Naga cooking,
                      lending a distinctive sour, earthy flavor.
                    </li>
                    <li>
                      <strong>King chili (bhut jolokia) preparations:</strong>{" "}
                      Among the world's hottest peppers, used sparingly but
                      distinctively in local chutneys and dishes.
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
                            "₹1,200",
                            "₹3,000",
                            "₹6,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,500",
                          ],
                          ["Activities/day", "₹200", "₹500", "₹1,000"],
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
                    * Figures are per person, per day. During the Hornbill
                    Festival, expect accommodation prices to rise
                    significantly.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kohima</h2>
                  <ul>
                    <li>
                      <strong>Book ahead for the Hornbill Festival:</strong>{" "}
                      Rooms across Kohima and Kisama fill up weeks in
                      advance during the December 1-10 window.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes:</strong> Kohima's
                      hilly terrain means even city sightseeing involves
                      real walking and slopes.
                    </li>
                    <li>
                      <strong>Visit the War Cemetery respectfully:</strong>{" "}
                      It's a genuinely moving site — keep noise levels
                      down.
                    </li>
                    <li>
                      <strong>Arrange onward transport early:</strong>{" "}
                      Vehicles and drivers for Dzukou Valley or Kisama can
                      book up fast in peak season.
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
                          "Visit the War Cemetery early morning for a quiet experience",
                          "Book Hornbill Festival stays months in advance",
                          "Try Naga cuisine at a local eatery, not just hotels",
                          "Arrange transport to Kisama/Dzukou Valley ahead of time",
                          "Wear sturdy shoes for hilly city walking",
                          "Carry warm layers for cool evenings",
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
                          "Arrive during Hornbill Festival without a booking",
                          "Expect flat, easy walking around the city",
                          "Be loud or disrespectful at the War Cemetery",
                          "Rush Kisama or Dzukou Valley into a single hurried day",
                          "Travel hill roads at night if avoidable",
                          "Underestimate how spicy king chili dishes are",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Kohima with{" "}
                    <Link href="/blog/kisama-travel-guide">Kisama</Link> for
                    the Hornbill Festival, the{" "}
                    <Link href="/blog/dzukou-valley-travel-guide">
                      Dzukou Valley trek
                    </Link>
                    , or start your trip with a stop in{" "}
                    <Link href="/blog/dimapur-travel-guide">Dimapur</Link>.
                    See our full{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      Nagaland travel guide
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
                {["Kohima", "Nagaland", "War Cemetery", "Hornbill Festival"].map(
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

              <RelatedPostsGrid currentSlug="kohima-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kohima-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
