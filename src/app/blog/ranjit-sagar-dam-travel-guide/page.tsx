// src/app/blog/ranjit-sagar-dam-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ranjit Sagar Dam Guide: Best Time & Tips",
  description:
    "Complete Ranjit Sagar Dam (Thein Dam) guide — a Ravi river reservoir set against the Shivalik foothills, boating, how to reach from Pathankot, and a full visit plan.",
  keywords:
    "Ranjit Sagar Dam, Thein Dam Punjab, Pathankot day trips, Ravi river dam, Shivalik foothills Punjab, Ranjit Sagar Dam boating, how to reach Ranjit Sagar Dam",
  openGraph: {
    title: "Ranjit Sagar Dam Guide: Best Time & Tips",
    description:
      "A hill-backed reservoir on the Ravi river near the Punjab-J&K border — one of the state's quietest, most scenic dam-and-nature stops.",
    url: "https://club.kudozz.in/blog/ranjit-sagar-dam-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Clear river water framed by forested hills, evoking Ranjit Sagar Dam's reservoir setting against the Shivalik foothills",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranjit Sagar Dam Guide: Best Time & Tips",
    description:
      "A hill-backed reservoir on the Ravi river near the Punjab-J&K border — the complete Ranjit Sagar Dam guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ranjit-sagar-dam-travel-guide",
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
          headline: "Ranjit Sagar Dam Guide: Best Time & Tips",
          description:
            "Complete Ranjit Sagar Dam (Thein Dam) guide — a Ravi river reservoir set against the Shivalik foothills, boating, how to reach from Pathankot, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/ranjit-sagar-dam-travel-guide",
          },
          keywords:
            "Ranjit Sagar Dam, Thein Dam, Punjab, Pathankot, Ravi river, off-beat",
          about: {
            "@type": "Place",
            name: "Ranjit Sagar Dam",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Punjab",
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
                name: "Punjab",
                item: "https://club.kudozz.in/blog/punjab-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ranjit Sagar Dam",
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
    q: "How far is Ranjit Sagar Dam from Pathankot and Amritsar?",
    a: "The dam is a manageable day-trip distance from Pathankot, the practical gateway town, and a longer but still feasible day trip from Amritsar for those wanting a change of scenery from the state's religious and heritage circuit.",
  },
  {
    q: "Is boating available at Ranjit Sagar Dam?",
    a: "Yes, boating on the reservoir is one of the main activities here, along with simply enjoying the view and picnic spots around the dam.",
  },
  {
    q: "What is the best time to visit?",
    a: "October to March for pleasant weather and good visibility of the surrounding Shivalik foothills, with September-October also good for a fuller post-monsoon reservoir.",
  },
  {
    q: "Is it a day trip?",
    a: "Yes — dedicated accommodation near the dam itself is limited, so Pathankot is the realistic overnight base, with the dam visited as a day excursion.",
  },
  {
    q: "What makes it different from Punjab's other attractions?",
    a: "Ranjit Sagar Dam offers a hill-backed reservoir landscape that's a genuine departure from the flat agricultural plains most associated with Punjab, plus a quieter, far less commercialized visit than the state's religious and heritage circuit.",
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
  { id: "introduction", title: "A Reservoir in the Shivalik Foothills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ranjit Sagar Dam", level: 2 },
  { id: "things-to-do", title: "Dam, Boating & Foothills", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RanjitSagarDamGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Clear river water framed by forested hills, evoking Ranjit Sagar Dam's reservoir setting against the Shivalik foothills"
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
                { label: "Punjab", href: "/blog/punjab-travel-guide" },
                { label: "Ranjit Sagar Dam", href: null },
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
              {["Ranjit Sagar Dam", "Thein Dam", "Punjab", "Off-beat"].map(
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
              Ranjit Sagar Dam: Reservoir, Boating & Foothills Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A hill-backed reservoir on the Ravi river near the Punjab-J&K
              border — one of the state&apos;s quietest, most scenic
              departures from its flat agricultural plains.
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
                  text: "Pathankot, Punjab",
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
                  <h2>A Reservoir in the Shivalik Foothills</h2>
                  <p>
                    <strong>Ranjit Sagar Dam</strong>, also known as{" "}
                    <strong>Thein Dam</strong>, sits on the Ravi river near
                    the Punjab-Jammu & Kashmir border in the Pathankot
                    area, and is one of the largest dams in{" "}
                    <Link href="/blog/punjab-travel-guide">Punjab</Link>.
                  </p>
                  <p>
                    It creates a large, scenic reservoir set against the
                    backdrop of the Shivalik foothills — a genuinely
                    different landscape character from the flat agricultural
                    plains most associated with the state, and the main
                    reason it&apos;s worth the detour.
                  </p>
                  <p>
                    It's a relatively offbeat destination that combines
                    engineering scale with nature and scenery, offering
                    boating and picnic spots while remaining considerably
                    less commercialized and less visited than Punjab&apos;s
                    religious and heritage circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Ranjit Sagar Dam at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Pathankot, Punjab",
                        },
                        {
                          icon: "🌊",
                          label: "River",
                          value: "Ravi River",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "⛰️",
                          label: "Setting",
                          value: "Shivalik foothills",
                        },
                        {
                          icon: "🚤",
                          label: "Known For",
                          value: "Boating, scenery",
                        },
                        {
                          icon: "🎯",
                          label: "Gateway Town",
                          value: "Pathankot",
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
                  <h2>Best Time to Visit Ranjit Sagar Dam</h2>
                  <p>
                    Weather clarity and reservoir levels both shape when a
                    visit is at its best.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant weather and clear conditions make this the most comfortable window for enjoying the hill-backed reservoir views.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still manageable",
                        text: "Temperatures climb, though the foothill setting keeps it more bearable than Punjab's plains.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — full reservoir",
                        text: "The reservoir fills dramatically, though rain can disrupt boating and reduce visibility of the foothills.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Post-monsoon sweet spot",
                        text: "A full reservoir combined with clearing skies makes for some of the year's best views.",
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
                    <strong>Our pick:</strong> September to October, or the
                    wider October-March window — clear skies, a fuller
                    reservoir, and comfortable temperatures for taking in the
                    foothill views.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ranjit Sagar Dam</h2>
                  <ul>
                    <li>
                      <strong>Via Pathankot:</strong> The practical gateway
                      town, well connected by rail and road to Amritsar,
                      Jammu, and other major Punjab cities.
                    </li>
                    <li>
                      <strong>By road from Amritsar:</strong> A longer but
                      feasible day trip for those wanting a change of scenery
                      from the state's religious and heritage circuit.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Use Pathankot as your base —
                    it's the most practical staging point, with several other
                    area attractions to combine with the dam.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Dam, Boating & Foothills</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Reservoir and forested hills at Ranjit Sagar Dam, Punjab"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Dam & Reservoir</h3>
                  <p>
                    The dam itself is an engineering highlight, holding back
                    a large reservoir that spreads out against the Shivalik
                    foothills — a striking contrast to Punjab&apos;s
                    otherwise flat, agricultural landscape.
                  </p>
                  <h3>Boating</h3>
                  <p>
                    Boat rides on the reservoir are a popular activity,
                    offering a different vantage point on the surrounding
                    hills than the shore provides.
                  </p>
                  <h3>Picnic Spots & Foothill Views</h3>
                  <p>
                    Several picnic spots dot the area around the reservoir,
                    with clear-day views extending across the Shivalik range
                    — a genuinely relaxing, unhurried stop after a busier
                    Punjab itinerary.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Dedicated accommodation right at the dam is limited —
                    Pathankot is the realistic overnight base for most
                    visitors.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Budget hotels in Pathankot",
                          "Basic guesthouses",
                          "Highway lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels in Pathankot",
                          "Well-rated 3-star properties",
                          "Highway hotel chains",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium hotels in Pathankot",
                          "Full-service business hotels",
                          "Limited options right at the dam",
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
                        title: "Pathankot to the Dam",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Pathankot to Ranjit Sagar Dam",
                          "Dam viewpoint and photography",
                          "Boating on the reservoir",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Foothills & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Picnic near the reservoir",
                          "Explore nearby viewpoints",
                          "Return to Pathankot",
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
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Pathankot dining:</strong> The town has a
                      standard range of Punjabi dhabas and restaurants for a
                      meal before or after the trip out to the dam.
                    </li>
                    <li>
                      <strong>Picnic supplies:</strong> Carry your own food
                      and water for the reservoir itself, since dedicated
                      dining options there are minimal.
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
                            "₹1,000",
                            "₹2,800",
                            "₹6,000",
                          ],
                          ["Local transport/day", "₹500", "₹1,200", "₹2,500"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Boating (per session)", "₹200", "₹400", "₹800"],
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
                    * Figures are per person, per day, based near Pathankot.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ranjit Sagar Dam</h2>
                  <ul>
                    <li>
                      <strong>Base yourself in Pathankot:</strong> The most
                      practical staging point, with onward road access to the
                      dam.
                    </li>
                    <li>
                      <strong>Time it for clear weather:</strong> The
                      Shivalik foothill views are the main draw, so haze or
                      heavy monsoon cloud can diminish the experience.
                    </li>
                    <li>
                      <strong>Combine with other Pathankot-area
                      sightseeing:</strong> Make a full day of it rather than
                      a rushed single stop.
                    </li>
                    <li>
                      <strong>Carry your own food and water:</strong>{" "}
                      Facilities right at the reservoir are minimal.
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
                          "Base yourself in Pathankot",
                          "Check weather for the best foothill views",
                          "Try a boat ride on the reservoir",
                          "Carry snacks and water",
                          "Combine with other Pathankot-area stops",
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Expect dedicated dining right at the dam",
                          "Visit during heavy monsoon downpours",
                          "Rely on find-on-arrival boating in peak season",
                          "Skip Pathankot as a base and try a rushed day trip from Amritsar",
                          "Expect a crowded, commercialized experience",
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
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab travel guide
                    </Link>{" "}
                    for the state&apos;s wider religious and heritage
                    circuit.
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
                {["Ranjit Sagar Dam", "Thein Dam", "Punjab", "Off-beat"].map(
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

              <RelatedPostsGrid currentSlug="ranjit-sagar-dam-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ranjit-sagar-dam-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
