// src/app/blog/peren-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Peren Travel Guide: Intanki National Park & Tips",
  description:
    "Complete Peren guide — Intanki National Park's hoolock gibbons and forest wildlife, the Barail Range, Zeliang and Kuki Naga culture, Benreu village, how to reach, and a full visit plan.",
  keywords:
    "Peren Nagaland, Intanki National Park, hoolock gibbon Nagaland, Barail Range, Zeliang Naga, Kuki Naga, Nagaland wildlife, Peren district travel guide",
  openGraph: {
    title: "Peren Travel Guide: Intanki National Park & Tips",
    description:
      "Nagaland's greenest, least-developed district — gateway to Intanki National Park's hoolock gibbons and the Barail Range.",
    url: "https://club.kudozz.in/blog/peren-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Forested waterfall landscape, evoking Peren district's green, undeveloped character and Intanki National Park",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Peren Travel Guide: Intanki National Park & Tips",
    description:
      "Nagaland's greenest district — gateway to Intanki National Park's hoolock gibbons and the Barail Range.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/peren-travel-guide",
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
          headline: "Peren Travel Guide: Intanki National Park & Tips",
          description:
            "Complete Peren guide — Intanki National Park's hoolock gibbons and forest wildlife, the Barail Range, Zeliang and Kuki Naga culture, Benreu village, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
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
            "@id": "https://club.kudozz.in/blog/peren-travel-guide",
          },
          keywords:
            "Peren, Intanki National Park, Barail Range, Nagaland, Zeliang, Kuki Naga",
          about: {
            "@type": "Place",
            name: "Peren",
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
                name: "Peren",
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
    q: "What wildlife can be seen at Intanki National Park?",
    a: "The headline species is the hoolock gibbon, India's only ape — Intanki is one of the better places in Nagaland to spot them. The park also has varied forest wildlife and rich birdlife typical of a healthy Naga Hills ecosystem.",
  },
  {
    q: "How far is Peren from Kohima?",
    a: "It's a fairly long drive given the district's location bordering Assam and Manipur — treat it as a genuine day's journey rather than a quick side trip.",
  },
  {
    q: "Is Peren connected to Benreu?",
    a: "Yes — Benreu, known for its Zeliang Naga heritage and community-based homestays, is within the same district and is easily combined with a Peren visit.",
  },
  {
    q: "What is the best time to visit for wildlife spotting?",
    a: "October to April, when forest trails are driest and wildlife activity is easiest to track. Monsoon months make both travel and spotting significantly harder.",
  },
  {
    q: "How developed is tourist infrastructure here?",
    a: "Basic. Peren is one of Nagaland's greenest and least-developed districts, so expect simple guesthouses and homestays rather than resort-style accommodation — that's part of its appeal for travelers seeking something genuinely offbeat.",
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
  { id: "introduction", title: "Nagaland's Greenest District", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Peren", level: 2 },
  { id: "things-to-do", title: "Intanki Park, Barail Range & Benreu", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PerenGuidePage() {
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
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Forested waterfall landscape, evoking Peren district's green, undeveloped character and Intanki National Park"
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
                { label: "Peren", href: null },
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
                "Peren",
                "Intanki National Park",
                "Nagaland",
                "Barail Range",
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
              Peren Travel Guide: Intanki National Park & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Nagaland&apos;s greenest, least-developed district — gateway to
              hoolock gibbons at Intanki National Park and the wider Barail
              Range.
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
                  text: "Peren District, Nagaland",
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
                  <h2>Nagaland&apos;s Greenest District</h2>
                  <p>
                    <strong>Peren</strong> is the headquarters of Peren
                    district, home to Zeliang and Kuki Naga communities, and
                    the gateway to the Barail Range and Intanki National
                    Park. Bordering both Assam and Manipur, it&apos;s
                    considered one of Nagaland&apos;s greenest and
                    least-developed districts — a genuinely offbeat,
                    nature-focused corner of the state, far removed from the
                    Hornbill Festival crowds around Kohima.
                  </p>
                  <p>
                    Intanki National Park is the district&apos;s main draw
                    for wildlife-minded travelers, known especially for its
                    population of hoolock gibbons — India&apos;s only ape
                    species — alongside varied forest scenery and birdlife.
                    It remains far less visited than Nagaland&apos;s
                    cultural/heritage circuit, which is exactly the point for
                    travelers seeking something quieter.
                  </p>
                  <p>
                    Within the same district is{" "}
                    <Link href="/blog/benreu-travel-guide">
                      Benreu village
                    </Link>
                    , known for its Zeliang heritage and community-based
                    homestays — worth combining with Peren for a fuller
                    nature-and-culture trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Peren at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Peren, Nagaland",
                        },
                        {
                          icon: "🦍",
                          label: "Known For",
                          value: "Hoolock Gibbons",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🌲",
                          label: "Park",
                          value: "Intanki National Park",
                        },
                        {
                          icon: "🏘️",
                          label: "Nearby",
                          value: "Benreu Village",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹2,500",
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
                  <h2>Best Time to Visit Peren</h2>
                  <p>
                    Wildlife visibility and comfortable forest walking both
                    point to the drier months.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry conditions and the best chance of spotting hoolock gibbons and other wildlife at Intanki National Park.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Coolest, clearest",
                        text: "Comfortable temperatures for forest walks, with generally good visibility.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — difficult travel",
                        text: "Heavy rain makes both the long drive in and forest trails considerably harder going.",
                      },
                      {
                        season: "Nov",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Hornbill Festival season",
                        text: "Combine with Kohima and Kisama's Hornbill Festival for a fuller Nagaland cultural trip.",
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
                    <strong>Our pick:</strong> October to April, with
                    December-February offering the clearest conditions for
                    both wildlife spotting and travel.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Peren</h2>
                  <p>
                    Peren&apos;s location bordering Assam and Manipur means
                    it&apos;s a genuine journey from Nagaland&apos;s main
                    tourist hubs.
                  </p>
                  <ul>
                    <li>
                      <strong>From Kohima:</strong> A fairly long drive given
                      the district&apos;s southern, border location — set
                      honest expectations about travel time.
                    </li>
                    <li>
                      <strong>From Dimapur:</strong> Often a more practical
                      starting point given Dimapur&apos;s road connections,
                      though still a substantial drive.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange a local guide before
                    you arrive — both for navigating to Intanki National Park
                    and for the best chance of spotting hoolock gibbons once
                    you're there.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Intanki Park, Barail Range & Benreu</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Forested waterfall scenery evoking Intanki National Park in Peren district, Nagaland"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Intanki National Park</h3>
                  <p>
                    The district&apos;s main wildlife draw, known especially
                    for its hoolock gibbon population — India&apos;s only ape
                    species — alongside varied forest scenery and rich
                    birdlife. A local guide significantly improves your
                    chances of a good sighting.
                  </p>
                  <h3>The Barail Range</h3>
                  <p>
                    A scenic hill range extending across the Nagaland-Assam
                    border, adding to the district&apos;s green, undeveloped
                    character — worth exploring for the scenery alone.
                  </p>
                  <h3>Benreu Village</h3>
                  <p>
                    Within the same district,{" "}
                    <Link href="/blog/benreu-travel-guide">
                      Benreu village
                    </Link>{" "}
                    offers Zeliang Naga heritage and community-based
                    homestays — a natural pairing with a Peren/Intanki visit.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is basic — guesthouses in Peren town, or
                    homestays via Benreu village.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏠",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic guesthouses in Peren town",
                          "Simple government circuit house (if available)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏡",
                        range: "₹1,500–₹2,500/night",
                        picks: [
                          "Community homestays via Benreu",
                          "Slightly better-equipped guesthouses",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "🏨",
                        range: "₹2,500–₹4,000/night",
                        picks: [
                          "Standard hotels in Dimapur or Kohima before/after",
                          "A comfortable bookend to a Peren trip",
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
                  <h2>Suggested Visit Plan (2–3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Intanki National Park",
                        color: "bg-amber-700",
                        activities: [
                          "Drive to Peren town, check in",
                          "Afternoon walk/safari in Intanki National Park",
                          "Look for hoolock gibbons with a local guide",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Barail Range & Benreu",
                        color: "bg-sky-600",
                        activities: [
                          "Explore the Barail Range scenery",
                          "Drive to Benreu village",
                          "Homestay dinner and cultural conversation",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Morning village walk in Benreu",
                          "Return journey to Kohima or Dimapur",
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
                    * Combine with{" "}
                    <Link href="/blog/benreu-travel-guide">
                      Benreu village
                    </Link>{" "}
                    for a fuller southern Nagaland nature-and-culture trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food in Peren</h2>
                  <ul>
                    <li>
                      <strong>Local eateries in Peren town:</strong> Simple
                      Naga meals, mostly rice-based with local greens and
                      meats.
                    </li>
                    <li>
                      <strong>Homestay meals (via Benreu):</strong> The most
                      authentic option, with home-cooked Zeliang and Kuki
                      Naga dishes.
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
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                            "₹800",
                            "₹1,800",
                            "₹3,000",
                          ],
                          ["Local guide/day", "₹500", "₹800", "₹1,200"],
                          [
                            "Park entry/permit",
                            "₹200",
                            "₹200",
                            "₹200",
                          ],
                          ["Food/day", "₹400", "₹700", "₹1,200"],
                          ["Daily total", "₹1,900", "₹3,500", "₹5,600"],
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
                    * A local guide is a genuine cost worth budgeting for —
                    both for navigation and for the best wildlife-spotting
                    odds.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Peren</h2>
                  <ul>
                    <li>
                      <strong>Engage a local guide:</strong> Essential for
                      both navigating Intanki National Park and improving
                      your odds of spotting hoolock gibbons.
                    </li>
                    <li>
                      <strong>Combine with Benreu:</strong> The two make a
                      natural pairing for a fuller southern Nagaland
                      nature-and-culture trip.
                    </li>
                    <li>
                      <strong>Keep infrastructure expectations realistic:</strong>{" "}
                      This is a genuinely green, quiet district — don&apos;t
                      expect resort-style amenities.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance is limited this far from Nagaland&apos;s
                      main towns.
                    </li>
                    <li>
                      <strong>Plan for a full day of travel:</strong> Peren's
                      border-district location means journeys here take
                      longer than they might look on a map.
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
                          "Hire a local guide for Intanki National Park",
                          "Combine your trip with Benreu village",
                          "Carry sufficient cash",
                          "Allow a full day for travel to/from Peren",
                          "Go early morning for the best wildlife activity",
                          "Book accommodation in advance",
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
                          "Underestimate the travel time from Kohima",
                          "Expect polished tourist infrastructure",
                          "Rely on cards or ATMs being available",
                          "Skip a local guide for Intanki National Park",
                          "Rush the visit into a single day if possible",
                          "Forget to combine with Benreu if time allows",
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
                    <strong>🗺️ Extend the trip:</strong> Peren pairs naturally
                    with{" "}
                    <Link href="/blog/benreu-travel-guide">
                      Benreu village
                    </Link>{" "}
                    for Zeliang Naga culture, or combine with Nagaland&apos;s
                    main circuit. See our full{" "}
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
                {[
                  "Peren",
                  "Intanki National Park",
                  "Nagaland",
                  "Barail Range",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="peren-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="peren-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
