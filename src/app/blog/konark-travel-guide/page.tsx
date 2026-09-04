// src/app/blog/konark-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Konark Sun Temple Guide: History & Tips",
  description:
    "Complete Konark guide — the UNESCO-listed Sun Temple's chariot design, 24 carved wheels, Chandrabhaga Beach, the Konark Dance Festival, how to reach, and a full visit plan.",
  keywords:
    "Konark travel guide, Konark Sun Temple, UNESCO World Heritage Odisha, Chandrabhaga Beach, Konark Dance Festival, Golden Triangle Odisha, how to reach Konark, Sun Temple wheels",
  openGraph: {
    title: "Konark Sun Temple Guide: History & Tips",
    description:
      "A 13th-century temple carved as a colossal stone chariot for the Sun God — the complete guide to Konark, one of India's most extraordinary monuments.",
    url: "https://club.kudozz.in/blog/konark-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Intricately carved temple architecture, evoking the Konark Sun Temple's stone chariot design",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Konark Sun Temple Guide: History & Tips",
    description:
      "24 carved stone wheels, seven horses, and a temple built as a chariot for the sun — the complete Konark guide.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/konark-travel-guide",
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
          headline: "Konark Sun Temple Guide: History & Tips",
          description:
            "Complete Konark guide — the UNESCO-listed Sun Temple's chariot design, 24 carved wheels, Chandrabhaga Beach, the Konark Dance Festival, how to reach, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
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
            "@id": "https://club.kudozz.in/blog/konark-travel-guide",
          },
          keywords:
            "Konark, Sun Temple, Odisha, UNESCO, chariot temple, Golden Triangle",
          about: {
            "@type": "Place",
            name: "Konark",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha",
                item: "https://club.kudozz.in/blog/odisha-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Konark",
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
    q: "Why is Konark called the Sun Temple or chariot temple?",
    a: "The entire temple is designed as a colossal stone chariot dedicated to the Sun God Surya, complete with 24 elaborately carved stone wheels and seven horses meant to pull it across the sky — one of the most distinctive architectural concepts of any temple in India.",
  },
  {
    q: "How far is Konark from Puri and Bhubaneswar?",
    a: "Konark is roughly 35 km from Puri and about 65 km from Bhubaneswar, both well under a 1.5-hour drive — making it an easy day trip from either, or a natural stop between the two as part of the Golden Triangle.",
  },
  {
    q: "Is Konark a day trip?",
    a: "Yes — most visitors see Konark as a half-day to full-day trip from Puri or Bhubaneswar, since dedicated accommodation right at the temple is limited. Combine it with Chandrabhaga Beach for a fuller day.",
  },
  {
    q: "What is the best time to visit Konark?",
    a: "October to February offers the most comfortable weather for exploring the temple grounds. If you want the Konark Dance Festival, plan around its typical December dates, though expect larger crowds.",
  },
  {
    q: "When is the Konark Dance Festival?",
    a: "The Konark Dance Festival is typically held in December, featuring classical Indian dance performances staged against the dramatic backdrop of the Sun Temple — a significant cultural event worth timing a visit around if it interests you.",
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
  { id: "introduction", title: "A Temple Built as a Chariot", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Konark", level: 2 },
  { id: "things-to-do", title: "The Sun Temple & Chandrabhaga Beach", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KonarkGuidePage() {
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
              src="/images/destinations/manali/hadimba-temple.jpg"
              alt="Intricately carved temple architecture, evoking the Konark Sun Temple's stone chariot design"
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
                { label: "Odisha", href: "/blog/odisha-travel-guide" },
                { label: "Konark", href: null },
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
              {["Konark", "Sun Temple", "Odisha", "UNESCO"].map((tag) => (
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
              Konark Sun Temple Guide: History & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Twenty-four carved stone wheels, seven horses, and an entire
              temple imagined as a chariot for the Sun God — Konark is one
              of India's most extraordinary architectural achievements.
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
                  text: "Konark, Odisha",
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
                  <h2>A Temple Built as a Chariot</h2>
                  <p>
                    The <strong>Konark Sun Temple</strong> is a UNESCO World
                    Heritage Site, built in the 13th century by King
                    Narasimhadeva I of the Eastern Ganga dynasty. Rather
                    than a conventional temple form, it's designed as a
                    colossal stone chariot dedicated to{" "}
                    <strong>Surya</strong>, the Sun God — complete with{" "}
                    <strong>24 elaborately carved stone wheels</strong>{" "}
                    (several functioning as working sundials) and{" "}
                    <strong>seven horses</strong> meant to pull the chariot
                    across the sky.
                  </p>
                  <p>
                    It's one of the most architecturally and artistically
                    extraordinary temples in India — every surface carries
                    dense relief carving, from cosmic and mythological
                    scenes to everyday life of the 13th century.
                  </p>
                  <p>
                    Konark forms the third point of Odisha's{" "}
                    <strong>Golden Triangle</strong>, alongside{" "}
                    <Link href="/blog/puri-travel-guide">Puri</Link> and{" "}
                    <Link href="/blog/bhubaneswar-travel-guide">
                      Bhubaneswar
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Konark at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Odisha" },
                        {
                          icon: "🚉",
                          label: "From Puri",
                          value: "~35 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🛕",
                          label: "Built",
                          value: "13th Century",
                        },
                        {
                          icon: "🏛️",
                          label: "Status",
                          value: "UNESCO World Heritage",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Puri, Chandrabhaga Beach",
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
                  <h2>Best Time to Visit Konark</h2>
                  <p>
                    Coastal weather and the December dance festival are the
                    two main planning factors.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable, dry conditions for a slow, detailed exploration of the temple's carvings without heat or humidity.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm — early visits recommended",
                        text: "Heat builds through the day; an early-morning visit stays comfortable and avoids the worst of the sun on stone surfaces.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "Rain can disrupt outdoor sightseeing, though the temple grounds remain open between showers.",
                      },
                      {
                        season: "December",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Konark Dance Festival",
                        text: "Classical dance performances are staged against the temple's dramatic backdrop — a significant cultural event, though it brings larger crowds.",
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
                    <strong>Our pick:</strong> October to February — cool,
                    dry conditions that let you take the temple's carvings
                    in properly, without rushing to escape the heat.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Konark</h2>
                  <ul>
                    <li>
                      <strong>From Puri:</strong> Roughly 35 km, about
                      45 minutes to an hour by road — the most common and
                      convenient route.
                    </li>
                    <li>
                      <strong>From Bhubaneswar:</strong> Roughly 65 km, about
                      1.5 hours by road, sometimes combined with a stop in
                      Puri en route.
                    </li>
                    <li>
                      <strong>Marine Drive Route:</strong> The Puri-Konark
                      Marine Drive road hugs the coastline for part of the
                      journey — a scenic alternative worth taking one way.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit early morning or late
                    afternoon — the low-angle light brings out the depth of
                    the stone carving far better than the flat light of
                    midday.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Sun Temple & Chandrabhaga Beach</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Detailed stone temple carvings evoking Konark's chariot design"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Wheels & Horses</h3>
                  <p>
                    The temple's 24 stone wheels are each a masterwork in
                    their own right — some function as sundials, and every
                    spoke and hub is densely carved. The seven horses at the
                    front, though weathered, complete the chariot concept.
                  </p>
                  <h3>The Relief Carvings</h3>
                  <p>
                    Nearly every surface of the temple carries relief work,
                    from cosmic and mythological themes to scenes of
                    everyday 13th-century life — a genuine record of the
                    period as much as a religious monument.
                  </p>
                  <h3>Chandrabhaga Beach</h3>
                  <p>
                    A short distance from the temple, Chandrabhaga Beach
                    offers a quieter alternative to Puri's more crowded
                    shoreline — a good spot to unwind after a morning of
                    temple exploration.
                  </p>
                  <h3>Konark Dance Festival</h3>
                  <p>
                    Held annually, typically in December, this festival
                    stages classical Indian dance performances against the
                    temple's floodlit backdrop — a significant cultural
                    event for anyone able to time a visit around it.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Konark</h2>
                  <p>
                    Dedicated accommodation right at Konark is limited —
                    most visitors base themselves in Puri or Bhubaneswar and
                    treat Konark as a day trip.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic lodges in Konark town",
                          "Odisha Tourism guesthouses",
                          "Budget stays in Puri (day trip base)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Beachfront hotels near Chandrabhaga",
                          "Mid-range hotels in Puri",
                          "Business hotels in Bhubaneswar",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏖️",
                        range: "₹5,000–₹12,000+/night",
                        picks: [
                          "Beach resorts near Puri",
                          "Premium hotels in Bhubaneswar",
                          "Boutique heritage stays",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "The Sun Temple",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early for good light and fewer crowds",
                          "Explore the wheels, horses, and relief carvings",
                          "Hire a guide for the historical context",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Chandrabhaga Beach",
                        color: "bg-sky-600",
                        activities: [
                          "Lunch near Konark town",
                          "Relax at Chandrabhaga Beach",
                          "Return to Puri or Bhubaneswar by evening",
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
                    * Combine with our{" "}
                    <Link href="/blog/puri-travel-guide">Puri guide</Link> for
                    a full Golden Triangle day trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat Near Konark</h2>
                  <ul>
                    <li>
                      <strong>Local dhabas near the temple:</strong> Simple
                      Odia thalis and snacks cater to the steady flow of
                      day-trippers.
                    </li>
                    <li>
                      <strong>Fresh seafood at Chandrabhaga:</strong> A
                      handful of beachside stalls serve fresh catch near the
                      beach.
                    </li>
                    <li>
                      <strong>Puri or Bhubaneswar for a fuller meal:</strong>{" "}
                      Given Konark's limited dining scene, most visitors eat
                      a proper meal before or after the day trip.
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
                          ["Entry fee", "₹40", "₹40", "₹40"],
                          [
                            "Guide (per visit)",
                            "₹300",
                            "₹500",
                            "₹800",
                          ],
                          [
                            "Car hire from Puri (round trip)",
                            "₹1,500",
                            "₹2,000",
                            "₹3,000",
                          ],
                          ["Food (day trip)", "₹300", "₹700", "₹1,500"],
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
                    * Figures are per person or per vehicle as noted, based
                    on a day trip from Puri.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Konark</h2>
                  <ul>
                    <li>
                      <strong>Hire a guide:</strong> Much of the symbolism
                      in the carvings is easy to miss without context — a
                      guide transforms the visit.
                    </li>
                    <li>
                      <strong>Visit in good light:</strong> Early morning or
                      late afternoon brings out the depth of the stone
                      carving far better than midday sun.
                    </li>
                    <li>
                      <strong>Combine with Puri:</strong> The two are close
                      enough to comfortably cover in a single day trip.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes:</strong> There's a fair
                      amount of walking across uneven stone surfaces.
                    </li>
                    <li>
                      <strong>Check the Dance Festival dates:</strong> If
                      visiting in December, confirm current festival dates
                      in advance.
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
                          "Hire a guide for the temple's symbolism",
                          "Visit early morning or late afternoon",
                          "Combine with Puri as a day trip",
                          "Wear comfortable, sturdy footwear",
                          "Stop at Chandrabhaga Beach afterward",
                          "Time a visit around the December Dance Festival if possible",
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
                          "Rush through without a guide or audio guide",
                          "Visit at midday in peak summer heat",
                          "Expect extensive accommodation right at the temple",
                          "Skip Chandrabhaga Beach if you have extra time",
                          "Forget sun protection for the outdoor walking",
                          "Assume the dance festival happens year-round",
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
                    <strong>🗺️ Extend the trip:</strong> Konark completes
                    Odisha's Golden Triangle alongside{" "}
                    <Link href="/blog/puri-travel-guide">Puri</Link> and{" "}
                    <Link href="/blog/bhubaneswar-travel-guide">
                      Bhubaneswar
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
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
                {[
                  "Konark",
                  "Sun Temple",
                  "Odisha",
                  "UNESCO",
                  "Heritage",
                  "Golden Triangle",
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

              <RelatedPostsGrid currentSlug="konark-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="konark-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
