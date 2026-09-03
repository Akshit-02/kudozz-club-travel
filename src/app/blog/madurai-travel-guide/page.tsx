// src/app/blog/madurai-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Madurai Travel Guide: Meenakshi Temple & Tips",
  description:
    "Complete Madurai guide — the Meenakshi Amman Temple's 14 gopurams, Thirumalai Nayakkar Palace, jigarthanda, how to reach, and a full 2-day visit plan.",
  keywords:
    "Madurai travel guide, Meenakshi Amman Temple, Madurai gopurams, Thirumalai Nayakkar Palace, jigarthanda, Madurai Malli, how to reach Madurai, Madurai temple timings, Tamil Nadu temple town",
  openGraph: {
    title: "Madurai Travel Guide: Meenakshi Temple & Tips",
    description:
      "Fourteen painted gopurams rising over one of India's oldest cities — the complete guide to Madurai and the Meenakshi Amman Temple.",
    url: "https://club.kudozz.in/blog/madurai-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Grand South Indian temple architecture with carved stone towers, evoking Madurai's Meenakshi Amman Temple gopurams",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Madurai Travel Guide: Meenakshi Temple & Tips",
    description:
      "Fourteen painted gopurams, a 17th-century Indo-Saracenic palace, and one of India's oldest cities — the complete Madurai guide.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/madurai-travel-guide",
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
          headline: "Madurai Travel Guide: Meenakshi Temple & Tips",
          description:
            "Complete Madurai guide — the Meenakshi Amman Temple's 14 gopurams, Thirumalai Nayakkar Palace, jigarthanda, how to reach, and a full 2-day visit plan.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/madurai-travel-guide",
          },
          keywords:
            "Madurai, Meenakshi Amman Temple, Tamil Nadu, Dravidian architecture, temple town, heritage",
          about: {
            "@type": "Place",
            name: "Madurai",
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
                name: "Madurai",
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
    q: "How many days do I need for Madurai?",
    a: "Two days is comfortable — one for the Meenakshi Amman Temple and the surrounding old-town streets, and a second for the Thirumalai Nayakkar Palace, the Gandhi Memorial Museum, and a slower food-focused walk through the city's eateries.",
  },
  {
    q: "What is the best time to see the Meenakshi Temple?",
    a: "Early morning (around opening) or evening, both for cooler weather and thinner crowds, and to catch the temple's daily rituals — the evening ceremony in particular draws a devoted, atmospheric crowd worth witnessing.",
  },
  {
    q: "Is photography allowed inside the temple?",
    a: "Photography rules vary by area — the outer corridors and gopurams are generally fine, but phones and cameras are commonly restricted inside the inner sanctum areas. Follow posted signage and staff instructions on the day.",
  },
  {
    q: "What is jigarthanda?",
    a: "A cold, distinctively Madurai drink layered with milk, a gelatin-like china grass (agar) jelly, sarsaparilla syrup, and ice cream — a local specialty best tried at one of the old-town's long-running eateries rather than a generic restaurant.",
  },
  {
    q: "Is Madurai a good base for further South Tamil Nadu travel?",
    a: "Yes — Madurai's airport, rail junction, and road links make it a natural hub for continuing on to Rameswaram or Kanyakumari, both a few hours further south, letting you build a full Deep South Tamil Nadu circuit.",
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
  { id: "introduction", title: "One of India's Oldest Cities", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Madurai", level: 2 },
  { id: "things-to-do", title: "Temple, Palace & Old Town", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MaduraiGuidePage() {
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
              src="/images/destinations/hampi/hero.jpg"
              alt="Grand South Indian temple architecture with carved stone towers, evoking Madurai's Meenakshi Amman Temple gopurams"
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
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Madurai", href: null },
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
              {["Madurai", "Meenakshi Temple", "Tamil Nadu", "Heritage"].map(
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
              Madurai: Meenakshi Temple & Old-Town Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Fourteen painted gopurams rising over streets that have been
              lived in for over two thousand years — Madurai is Tamil Nadu's
              temple city at its most overwhelming and its most alive.
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
                  text: "Madurai, Tamil Nadu",
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
                  <h2>One of India's Oldest Cities</h2>
                  <p>
                    Set on the banks of the Vaigai river, <strong>Madurai</strong>{" "}
                    is one of India&apos;s oldest continuously inhabited
                    cities, and its layout still radiates outward from a
                    single overwhelming centre: the{" "}
                    <strong>Meenakshi Amman Temple</strong>, a vast Dravidian
                    temple complex dedicated to the goddess Meenakshi and Lord
                    Sundareswarar, its 14 gopurams (gateway towers) carved and
                    painted with thousands of mythological figures.
                  </p>
                  <p>
                    Beyond the temple, Madurai carries its history in its
                    streets — the 17th-century Thirumalai Nayakkar Palace,
                    old-town markets that have traded in the same spots for
                    generations, and a food culture built around cold,
                    distinctive local specialties like jigarthanda.
                  </p>
                  <p>
                    It's also the natural gateway to Tamil Nadu's Deep South —
                    from here, both{" "}
                    <Link href="/blog/rameswaram-travel-guide">
                      Rameswaram
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/kanyakumari-travel-guide">
                      Kanyakumari
                    </Link>{" "}
                    are a comfortable few hours further south.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Madurai at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Tamil Nadu" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Meenakshi Amman Temple",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🍧",
                          label: "Local Drink",
                          value: "Jigarthanda",
                        },
                        {
                          icon: "🏰",
                          label: "Also See",
                          value: "Thirumalai Nayakkar Palace",
                        },
                        {
                          icon: "🚉",
                          label: "Gateway To",
                          value: "Rameswaram, Kanyakumari",
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
                  <h2>Best Time to Visit Madurai</h2>
                  <p>
                    Madurai's inland Tamil Nadu climate runs hot for much of
                    the year — timing matters both for comfort and for
                    enjoying the temple's long walking corridors.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cooler, drier conditions make walking the temple corridors and old-town streets genuinely comfortable rather than punishing.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Interior Tamil Nadu heat climbs steeply; daytime sightseeing becomes uncomfortable and best restricted to early morning or evening.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm, drier than the coast",
                        text: "Madurai sits inland and largely escapes the worst of the southwest monsoon, though it stays warm and can see occasional showers.",
                      },
                      {
                        season: "Apr / Sep-Oct",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Chithirai Festival season",
                        text: "The major Chithirai Festival, celebrating the divine wedding of Meenakshi and Sundareswarar, draws huge crowds and real festival energy — worth timing a visit around if you don't mind the density.",
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
                    <strong>Our pick:</strong> October to March — cool enough
                    to properly enjoy the temple's corridors and the old
                    town's street food without the punishing interior Tamil
                    Nadu heat.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Madurai</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Madurai Airport has regular
                      domestic flights from Chennai, Bengaluru, and other
                      major Indian cities.
                    </li>
                    <li>
                      <strong>By Rail:</strong> A major rail junction, well
                      connected to Chennai, Coimbatore, and onward south to
                      Rameswaram.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well-linked by highway to
                      Chennai (~460 km), Coimbatore, and Kanyakumari, with
                      frequent bus services across the state.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If continuing to Rameswaram or
                    Kanyakumari, Madurai is the natural overnight base — plan
                    an early departure the next morning to make the most of
                    the day at either destination.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temple, Palace & Old Town</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Carved stone temple tower, evoking Madurai's Meenakshi Amman Temple architecture"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Meenakshi Amman Temple</h3>
                  <p>
                    The reason most people come to Madurai at all — a vast
                    complex with 14 gopurams, thousands of carved and painted
                    figures, a Hall of a Thousand Pillars, and daily rituals
                    that draw devotees from across the state. Set aside real
                    time here; rushing through does it no justice.
                  </p>
                  <h3>Thirumalai Nayakkar Palace</h3>
                  <p>
                    A 17th-century Indo-Saracenic palace known for its huge
                    open courtyard and towering pillars — a striking contrast
                    in scale and style to the temple's dense ornamentation.
                  </p>
                  <h3>Gandhi Memorial Museum</h3>
                  <p>
                    Housed in a former palace, this museum traces the freedom
                    struggle with a strong regional lens — a worthwhile,
                    lower-key stop to break up a day of temple sightseeing.
                  </p>
                  <h3>Old-Town Streets</h3>
                  <p>
                    The streets immediately around the temple are a market in
                    their own right — flowers (Madurai is famous for its
                    jasmine, Madurai Malli), spices, and metalware, best
                    explored slowly on foot in the cooler hours.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Madurai</h2>
                  <p>
                    Accommodation is plentiful and spans every budget, with
                    the most atmospheric options clustered close to the
                    temple.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Guesthouses near the temple",
                          "Budget lodges, old town",
                          "TTDC hotel, Madurai",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, city centre",
                          "Heritage-style boutique stays",
                          "Chain hotels near the airport",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,500–₹12,000+/night",
                        picks: [
                          "Heritage palace-style properties",
                          "Premium business hotels",
                          "Resort stays on the outskirts",
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
                        title: "Meenakshi Temple & Old Town",
                        color: "bg-amber-700",
                        activities: [
                          "Early morning: Meenakshi Amman Temple",
                          "Old-town flower and spice market walk",
                          "Evening: return to the temple for the evening ritual",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Palace & Museum",
                        color: "bg-sky-600",
                        activities: [
                          "Thirumalai Nayakkar Palace",
                          "Gandhi Memorial Museum",
                          "Old-town food trail — jigarthanda and local eateries",
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
                    * With more time, continue south to{" "}
                    <Link href="/blog/rameswaram-travel-guide">
                      Rameswaram
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/kanyakumari-travel-guide">
                      Kanyakumari
                    </Link>{" "}
                    for a full Deep South Tamil Nadu circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Madurai</h2>
                  <ul>
                    <li>
                      <strong>Jigarthanda:</strong> A cold, layered drink of
                      milk, china grass jelly, sarsaparilla syrup, and ice
                      cream — best from one of the old town's long-running
                      specialists.
                    </li>
                    <li>
                      <strong>Old-town messes and eateries:</strong> Madurai's
                      traditional "military hotels" and mess-style eateries
                      near the temple serve some of the city's best local
                      food at low prices.
                    </li>
                    <li>
                      <strong>Chettinad and Tamil thali:</strong> Widely
                      available across the city, a good introduction to South
                      Tamil Nadu's distinctive spice profile.
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹8,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
                          ["Temple/monument entry", "₹0-100", "₹0-100", "₹0-100"],
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
                    * Figures are per person, per day, excluding flights or
                    trains into Madurai.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Madurai</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly at the temple:</strong> Cover
                      shoulders and knees; phones and cameras are commonly
                      restricted inside the inner sanctum areas.
                    </li>
                    <li>
                      <strong>Visit early or late in the day:</strong>{" "}
                      Cooler hours make the temple's stone corridors far more
                      comfortable to explore on foot.
                    </li>
                    <li>
                      <strong>Expect security and queues:</strong> As a major
                      active temple, expect bag checks and queue lines,
                      especially on weekends and during festivals.
                    </li>
                    <li>
                      <strong>Try jigarthanda from an old-town
                      specialist:</strong> The drink varies noticeably in
                      quality — seek out a long-running local spot rather
                      than a generic restaurant.
                    </li>
                    <li>
                      <strong>Use Madurai as a launchpad south:</strong> Both
                      Rameswaram and Kanyakumari are comfortably reachable
                      from here for a fuller Deep South itinerary.
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
                          "Visit the temple early morning or evening",
                          "Dress modestly and expect a security check",
                          "Try jigarthanda at an old-town institution",
                          "Set aside real time for the temple's scale",
                          "Explore the flower and spice markets on foot",
                          "Continue south to Rameswaram or Kanyakumari",
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
                          "Rush the temple in under an hour",
                          "Visit at midday in peak summer heat",
                          "Assume photography is allowed everywhere inside",
                          "Skip the old-town streets for the temple alone",
                          "Expect quiet during major festival dates",
                          "Wear shorts or sleeveless tops at the temple",
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
                    <strong>🗺️ Extend the trip:</strong> Madurai pairs
                    naturally with{" "}
                    <Link href="/blog/rameswaram-travel-guide">
                      Rameswaram
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/kanyakumari-travel-guide">
                      Kanyakumari
                    </Link>{" "}
                    for a full Deep South circuit. See our{" "}
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
                {["Madurai", "Meenakshi Temple", "Tamil Nadu", "Heritage"].map(
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

              <RelatedPostsGrid currentSlug="madurai-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="madurai-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
