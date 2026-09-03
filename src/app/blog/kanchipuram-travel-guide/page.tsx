// src/app/blog/kanchipuram-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kanchipuram Travel Guide: Temples & Silk Sarees",
  description:
    "Complete Kanchipuram guide — the Ekambareswarar, Kailasanathar and Kamakshi Amman temples, buying genuine Kanchipuram silk, how to reach from Chennai, and a full visit plan.",
  keywords:
    "Kanchipuram travel guide, Kanchipuram silk sarees, Ekambareswarar Temple, Kailasanathar Temple, Kamakshi Amman Temple, City of a Thousand Temples, how to reach Kanchipuram, Kanchipuram day trip",
  openGraph: {
    title: "Kanchipuram Travel Guide: Temples & Silk Sarees",
    description:
      "The City of a Thousand Temples and the home of India's finest handwoven silk — the complete Kanchipuram guide.",
    url: "https://club.kudozz.in/blog/kanchipuram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/hero.jpg",
        width: 1200,
        height: 630,
        alt: "South Indian temple gopuram and courtyard, evoking Kanchipuram's Dravidian temple architecture",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanchipuram Travel Guide: Temples & Silk Sarees",
    description:
      "The City of a Thousand Temples and the home of India's finest handwoven silk — the complete Kanchipuram guide.",
    images: ["/images/destinations/kerala/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kanchipuram-travel-guide",
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
          headline: "Kanchipuram Travel Guide: Temples & Silk Sarees",
          description:
            "Complete Kanchipuram guide — the Ekambareswarar, Kailasanathar and Kamakshi Amman temples, buying genuine Kanchipuram silk, how to reach from Chennai, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kerala/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kanchipuram-travel-guide",
          },
          keywords:
            "Kanchipuram, City of a Thousand Temples, Kanchipuram silk, Tamil Nadu heritage",
          about: {
            "@type": "Place",
            name: "Kanchipuram",
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
                name: "Kanchipuram",
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
    q: "How far is Kanchipuram from Chennai?",
    a: "Roughly 75 km, about 2 hours by road, making it a comfortable full-day trip from the city.",
  },
  {
    q: "Is Kanchipuram a day trip?",
    a: "Yes, most visitors treat it as a day trip from Chennai — overnight accommodation options in Kanchipuram itself are limited, so plan to return the same evening.",
  },
  {
    q: "Which temples are must-see in Kanchipuram?",
    a: "The Ekambareswarar Temple, Kailasanathar Temple, and Kamakshi Amman Temple are the three major sites — each distinct in scale, era, and significance, and together they take a full day to visit properly.",
  },
  {
    q: "How do I buy genuine Kanchipuram silk?",
    a: "Buy from reputable weavers or established showrooms rather than street vendors — genuine handwoven Kanchipuram silk with real zari work commands a higher price, and it's worth asking about the weaving process directly.",
  },
  {
    q: "What is the best time to visit Kanchipuram?",
    a: "October to February offers the coolest weather for a full day of temple-hopping in the sun.",
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
  { id: "introduction", title: "Kanchipuram: City of a Thousand Temples", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kanchipuram", level: 2 },
  { id: "things-to-do", title: "Temples & Silk Weaving", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KanchipuramGuidePage() {
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
              src="/images/destinations/kerala/hero.jpg"
              alt="South Indian temple gopuram and courtyard, evoking Kanchipuram's Dravidian temple architecture"
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
                { label: "Kanchipuram", href: null },
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
              {["Kanchipuram", "Silk Sarees", "Temple City", "Tamil Nadu"].map(
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
              Kanchipuram: Temples & Silk Sarees Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The City of a Thousand Temples and the home of India's finest
              handwoven silk — a full day of ancient gopurams and gold zari
              weaving.
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
                  text: "Kanchipuram, Tamil Nadu",
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
                  <h2>Kanchipuram: City of a Thousand Temples</h2>
                  <p>
                    <strong>Kanchipuram</strong>, roughly 75 km from{" "}
                    <Link href="/blog/chennai-travel-guide">Chennai</Link>,
                    is known as the "City of a Thousand Temples" and is
                    counted among the seven sacred cities (Sapta Puri) of
                    Hinduism — a genuinely rare concentration of significant
                    Dravidian temple architecture spanning multiple
                    dynasties and centuries.
                  </p>
                  <p>
                    Beyond its temples, Kanchipuram is world-famous for
                    handwoven silk sarees — heavy silk fabric with
                    distinctive gold zari (metallic thread) work, considered
                    among India's finest traditional textiles. For many
                    visitors, the day splits naturally between temple
                    architecture in the morning and silk shopping in the
                    afternoon.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Kanchipuram at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Kanchipuram district, Tamil Nadu",
                        },
                        {
                          icon: "🚗",
                          label: "From Chennai",
                          value: "~75 km (~2 hr)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Temples, Silk Sarees",
                        },
                        {
                          icon: "🧵",
                          label: "Craft",
                          value: "Handwoven Zari Silk",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Mahabalipuram",
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
                  <h2>Best Time to Visit Kanchipuram</h2>
                  <p>
                    Since a proper visit means walking between several
                    temples across the day, weather matters more here than
                    in many other destinations.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for a full day of temple-hopping in the sun.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — start very early",
                        text: "Peak heat makes midday temple courtyards, most of which are open-sky, genuinely uncomfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌦️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm and humid",
                        text: "Manageable with an early start, with occasional showers.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Festival season",
                        text: "Temple festival calendars are often busiest in this window — worth checking specific temple event dates if you want to see rituals or processions.",
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
                    <strong>Our pick:</strong> October to February — cool
                    enough for a full day walking between temples without
                    the heat becoming a factor.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kanchipuram</h2>
                  <ul>
                    <li>
                      <strong>By road from Chennai:</strong> Roughly 75 km,
                      about 2 hours by taxi or self-drive — the most common
                      way to visit.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kanchipuram has its own
                      railway station with connections from Chennai.
                    </li>
                    <li>
                      <strong>Combining with Mahabalipuram:</strong> Some
                      travelers combine both in an ambitious single day, but
                      it's more comfortable as two separate day trips from
                      Chennai — see our{" "}
                      <Link href="/blog/mahabalipuram-travel-guide">
                        Mahabalipuram guide
                      </Link>
                      .
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start early — Kanchipuram's
                    temples are spread across the town, and a full day is
                    genuinely needed to see the three major ones properly
                    plus a silk showroom stop.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temples & Silk Weaving</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="South Indian temple tower architecture, evoking Kanchipuram's major Dravidian temples"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Ekambareswarar Temple</h3>
                  <p>
                    A vast Shiva temple complex with one of the tallest
                    gopurams in the region — its scale alone makes it worth
                    a slow, unhurried visit.
                  </p>
                  <h3>Kailasanathar Temple</h3>
                  <p>
                    One of the oldest structural temples in the city, built
                    by the Pallava dynasty and known for its intricate
                    sandstone carvings — quieter and less crowded than the
                    other major temples, giving it a distinct atmosphere.
                  </p>
                  <h3>Kamakshi Amman Temple</h3>
                  <p>
                    Dedicated to the goddess Kamakshi, one of the important
                    Shakti temples of South India — a significant pilgrimage
                    site in its own right.
                  </p>
                  <h3>Silk Weaving</h3>
                  <p>
                    Visiting a weaving showroom or workshop is a highlight
                    for many travelers — seeing the intricate zari work up
                    close explains why genuine Kanchipuram silk commands
                    such a reputation.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Kanchipuram is mostly a day-trip destination from
                    Chennai — overnight accommodation exists but is limited
                    compared to the city, so most visitors return to Chennai
                    the same evening.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹1,800/night",
                        picks: [
                          "Basic lodges near the bus stand",
                          "Pilgrim guesthouses",
                          "Simple town-centre stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹4,000/night",
                        picks: [
                          "Business hotels near the highway",
                          "Mid-range chains in town",
                          "Comfortable family-run hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "Stay in Chennai instead",
                        picks: [
                          "Chennai's luxury hotels (~2 hr away)",
                          "Combine with a Mahabalipuram resort stay",
                          "Day-trip from a premium Chennai base",
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
                  <h2>Suggested Visit Plan (Full Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Ekambareswarar & Kailasanathar Temples",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early from Chennai",
                          "Ekambareswarar Temple",
                          "Kailasanathar Temple",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Kamakshi Amman & Silk Shopping",
                        color: "bg-sky-600",
                        activities: [
                          "Kamakshi Amman Temple",
                          "Lunch break",
                          "Silk showroom / weaving centre visit",
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
                    * Pair with a{" "}
                    <Link href="/blog/mahabalipuram-travel-guide">
                      Mahabalipuram
                    </Link>{" "}
                    day trip on another day for a fuller Chennai-region
                    heritage circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Kanchipuram</h2>
                  <ul>
                    <li>
                      <strong>Traditional Tamil thalis:</strong> Simple,
                      authentic vegetarian meals served on banana leaf are
                      widely available and a good way to refuel between
                      temples.
                    </li>
                    <li>
                      <strong>Local sweets:</strong> Kanchipuram is known
                      for regional sweets worth trying alongside a filter
                      coffee break.
                    </li>
                    <li>
                      <strong>Roadside tiffin stalls:</strong> Quick,
                      inexpensive dosas and idlis near the main temple
                      areas.
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
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Taxi from Chennai (round trip)",
                            "₹2,500",
                            "₹3,500",
                            "₹5,000",
                          ],
                          ["Temple donations/entry", "₹100", "₹200", "₹500"],
                          [
                            "Silk saree (if buying)",
                            "₹3,000+",
                            "₹8,000+",
                            "₹25,000+",
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
                    * Figures are per person, per day (except the round-trip
                    taxi, best split across a group). Silk saree prices vary
                    widely by weave complexity and zari content.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kanchipuram</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly:</strong> All three major
                      temples expect covered shoulders and knees, with
                      footwear removed at entry.
                    </li>
                    <li>
                      <strong>Allocate a full day:</strong> The temples are
                      spread across town — rushing means missing the
                      quieter, equally rewarding ones like Kailasanathar.
                    </li>
                    <li>
                      <strong>Buy silk from reputable sources:</strong>{" "}
                      Genuine handwoven silk with real zari costs more —
                      buy from established weavers or showrooms rather than
                      street vendors.
                    </li>
                    <li>
                      <strong>Start early:</strong> Beat both the heat and
                      the midday temple closures common at major Tamil
                      temples.
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
                          "Start early to cover all three temples",
                          "Dress modestly at every temple",
                          "Buy silk from established weavers/showrooms",
                          "Ask to see the weaving process if possible",
                          "Try local Tamil thalis for lunch",
                          "Combine with Mahabalipuram on another day",
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
                          "Rush through in half a day",
                          "Buy silk from unverified street vendors",
                          "Visit at midday in peak summer",
                          "Skip Kailasanathar Temple for the busier ones",
                          "Expect much overnight infrastructure",
                          "Forget modest dress for temple entry",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Kanchipuram
                    with{" "}
                    <Link href="/blog/mahabalipuram-travel-guide">
                      Mahabalipuram
                    </Link>{" "}
                    for a fuller Chennai-region heritage circuit. See our
                    full{" "}
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
                {["Kanchipuram", "Silk Sarees", "Tamil Nadu", "Temple City"].map(
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

              <RelatedPostsGrid currentSlug="kanchipuram-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kanchipuram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
