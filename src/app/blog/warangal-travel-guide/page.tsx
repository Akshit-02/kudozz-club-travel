// src/app/blog/warangal-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Warangal Travel Guide: Kakatiya Heritage & Tips",
  description:
    "Complete Warangal guide — the Thousand Pillar Temple, Warangal Fort and the Kakatiya Kala Thoranam, Bhadrakali Temple, the UNESCO-listed Ramappa Temple nearby, how to reach from Hyderabad, and a full visit plan.",
  keywords:
    "Warangal travel guide, Kakatiya dynasty, Thousand Pillar Temple, Warangal Fort, Kakatiya Kala Thoranam, Bhadrakali Temple, Ramappa Temple, Telangana heritage, how to reach Warangal, Warangal from Hyderabad",
  openGraph: {
    title: "Warangal Travel Guide: Kakatiya Heritage & Tips",
    description:
      "Star-shaped stone temples, a fort gateway that became Telangana's state emblem, and a UNESCO World Heritage temple nearby — the complete Warangal guide.",
    url: "https://club.kudozz.in/blog/warangal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient carved stone ruins, evoking Warangal's Kakatiya-era temples and fort architecture",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Warangal Travel Guide: Kakatiya Heritage & Tips",
    description:
      "Star-shaped stone temples, a fort gateway that became Telangana's state emblem, and a UNESCO World Heritage temple nearby — the complete Warangal guide.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/warangal-travel-guide",
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
          headline: "Warangal Travel Guide: Kakatiya Heritage & Tips",
          description:
            "Complete Warangal guide — the Thousand Pillar Temple, Warangal Fort and the Kakatiya Kala Thoranam, Bhadrakali Temple, the UNESCO-listed Ramappa Temple nearby, how to reach from Hyderabad, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/warangal-travel-guide",
          },
          keywords:
            "Warangal, Kakatiya dynasty, Thousand Pillar Temple, Warangal Fort, Ramappa Temple, Telangana heritage",
          about: {
            "@type": "Place",
            name: "Warangal",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Telangana",
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
                name: "Telangana",
                item: "https://club.kudozz.in/blog/telangana-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Warangal",
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
    q: "How far is Warangal from Hyderabad?",
    a: "Warangal is roughly 150 km from Hyderabad, about a 3-hour drive on National Highway 163, or a comfortable 2-3 hour train ride — Warangal is a major railway junction with frequent connections to Hyderabad.",
  },
  {
    q: "Is Ramappa Temple part of Warangal sightseeing?",
    a: "Ramappa Temple is a separate site roughly 65 km from Warangal town, near Palampet, but it's almost always visited as an extension of a Warangal trip. It became a UNESCO World Heritage Site in 2021 and deserves its own half-day rather than being rushed.",
  },
  {
    q: "What is the best time to visit Warangal?",
    a: "October to February is ideal, with cooler, more comfortable temperatures for walking around the fort and temple complexes. Summers (April-June) get quite hot for extended outdoor sightseeing.",
  },
  {
    q: "How many days do I need for Warangal?",
    a: "A single full day covers the Thousand Pillar Temple, Warangal Fort, and Bhadrakali Temple comfortably. Add a second day (or a long day trip) if you want to include Ramappa Temple and, with more time, Laknavaram Lake in the same Mulugu-district loop.",
  },
  {
    q: "Is Warangal a good day trip from Hyderabad?",
    a: "Yes, Warangal's core sights work well as a long day trip from Hyderabad given the fast highway and rail connections. If you want to add Ramappa Temple without rushing, an overnight stay makes the pace more comfortable.",
  },
  {
    q: "What makes the Kakatiya Kala Thoranam significant?",
    a: "This carved stone arch, one of the surviving gateways of Warangal Fort, is significant enough to have been adopted as Telangana's official state emblem — it appears on state government logos and letterheads, making it one of the most symbolically important structures in the state.",
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
  { id: "introduction", title: "Capital of the Kakatiyas", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Warangal", level: 2 },
  { id: "things-to-do", title: "Temples, Fort & Ramappa", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function WarangalGuidePage() {
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
              alt="Ancient carved stone ruins, evoking Warangal's Kakatiya-era temples and fort architecture"
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
                { label: "Telangana", href: "/blog/telangana-travel-guide" },
                { label: "Warangal", href: null },
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
                "Warangal",
                "Kakatiya Heritage",
                "Thousand Pillar Temple",
                "Ramappa Temple",
                "Telangana",
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
              Warangal: Kakatiya Heritage & Temple Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Star-shaped stone temples, a fort gateway carved so finely it
              became Telangana's state emblem, and a UNESCO World Heritage
              temple a short drive away — the seat of the Kakatiya dynasty
              rewards a proper look.
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
                  text: "Warangal, Telangana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Capital of the Kakatiyas</h2>
                  <p>
                    <strong>Warangal</strong>, roughly 150 km northeast of
                    Hyderabad, was the capital of the{" "}
                    <strong>Kakatiya dynasty</strong>, one of medieval Deccan
                    India's most significant ruling powers, from the 12th to
                    14th centuries. The dynasty's legacy survives in genuinely
                    remarkable stone architecture — star-shaped temples,
                    monumental fort gateways, and carving detailed enough that
                    one of its surviving arches has been adopted as{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana&apos;s
                    </Link>{" "}
                    official state emblem.
                  </p>
                  <p>
                    Unlike better-known Deccan ruin sites, Warangal sees
                    relatively modest tourist numbers relative to its
                    historical importance, which makes for an unhurried visit
                    — you can spend real time at the Thousand Pillar Temple or
                    wandering the fort's gateways without fighting crowds.
                  </p>
                  <p>
                    A short drive away, the <strong>Ramappa Temple</strong> at
                    Palampet — a UNESCO World Heritage Site since 2021 — makes
                    a natural extension for anyone visiting Warangal, and
                    together the two sites form one of Telangana's strongest
                    heritage circuits.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Warangal at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Warangal, Telangana",
                        },
                        {
                          icon: "🚆",
                          label: "From Hyderabad",
                          value: "~150 km, ~3 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Kakatiya Temples & Fort",
                        },
                        {
                          icon: "🕌",
                          label: "Nearby",
                          value: "Ramappa Temple (UNESCO)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹4,500",
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
                  <h2>Best Time to Visit Warangal</h2>
                  <p>
                    Warangal sits on the Deccan plateau, so summers get
                    genuinely hot — timing matters for comfortable sightseeing
                    at open fort and temple sites.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions make walking around the fort and temple complexes comfortable through the middle of the day.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around midday",
                        text: "Temperatures climb sharply; visit stone monuments early morning or late afternoon rather than at midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green but humid",
                        text: "Rain cools things down and greens the surrounding countryside, though outdoor stone-carving photography suffers on overcast days.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak comfort",
                        text: "The most reliably pleasant weeks for combining Warangal with a Ramappa Temple day trip without heat fatigue.",
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
                    <strong>Our pick:</strong> November to February — cool
                    enough for a full day of fort-and-temple walking, and the
                    most comfortable window for the Ramappa Temple extension.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Warangal</h2>
                  <p>
                    Warangal's excellent rail and road links to Hyderabad make
                    it one of Telangana's most accessible heritage towns.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Warangal is a major railway
                      junction with frequent trains to and from Hyderabad —
                      the journey takes roughly 2-3 hours and is often the
                      most comfortable option.
                    </li>
                    <li>
                      <strong>By road:</strong> Roughly 150 km via National
                      Highway 163, about a 3-hour drive — the highway is in
                      good condition for a self-drive or hired car.
                    </li>
                    <li>
                      <strong>Local transport:</strong> Warangal's sights are
                      spread across the town, so an auto-rickshaw or hired car
                      for the day is the practical way to cover the Thousand
                      Pillar Temple, fort, and Bhadrakali Temple together.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're adding Ramappa
                    Temple, hire a car for the full day from Warangal rather
                    than trying to coordinate trains and local transport for
                    the Palampet leg.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temples, Fort & the Ramappa Extension</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Carved stone temple architecture typical of the Kakatiya period around Warangal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Thousand Pillar Temple</h3>
                  <p>
                    Also known as the Rudreshwara Swamy Temple, this
                    12th-century star-shaped temple is Warangal's finest
                    surviving example of Kakatiya stone carving — intricately
                    worked pillars, a distinctive star-shaped platform, and
                    detailed sculptural work throughout.
                  </p>
                  <h3>Warangal Fort & the Kakatiya Kala Thoranam</h3>
                  <p>
                    The fort's massive stone gateways include the{" "}
                    <strong>Kakatiya Kala Thoranam</strong>, a carved arch so
                    architecturally significant it was adopted as Telangana's
                    official state emblem, appearing on government logos and
                    letterheads across the state today.
                  </p>
                  <h3>Bhadrakali Temple</h3>
                  <p>
                    An ancient shrine set on a hillock overlooking Bhadrakali
                    Lake, offering both a religious stop and a good vantage
                    point over the town.
                  </p>
                  <h3>Ramappa Temple (Palampet, ~65 km)</h3>
                  <p>
                    Inscribed as a UNESCO World Heritage Site in 2021, Ramappa
                    Temple is famous for its "floating bricks" — unusually
                    lightweight, porous bricks used in the tower's
                    construction. It's a substantial detour from Warangal
                    town but widely considered essential, and deserves its own
                    unhurried half-day rather than a rushed stop.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Warangal</h2>
                  <p>
                    Warangal has a reasonable spread of hotels for a
                    second-tier Telangana city, concentrated in the town
                    center near the railway station.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Lodges near Warangal railway station",
                          "Budget hotels in Hanamkonda",
                          "Basic guesthouses, town center",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels, Warangal/Hanamkonda",
                          "Chain hotels near the station",
                          "Well-reviewed 3-star properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium business hotels, Warangal",
                          "Upscale properties, Hanamkonda",
                          "Best booked ahead on weekends",
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
                        title: "Warangal City",
                        color: "bg-amber-700",
                        activities: [
                          "Thousand Pillar Temple in the morning",
                          "Warangal Fort and the Kakatiya Kala Thoranam",
                          "Evening at Bhadrakali Temple and lake",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Ramappa Temple Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Palampet (~65 km)",
                          "Explore Ramappa Temple unhurried",
                          "Return to Warangal or onward to Hyderabad",
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
                    * With more time, extend the trip to{" "}
                    <Link href="/blog/laknavaram-travel-guide">
                      Laknavaram Lake
                    </Link>{" "}
                    in the same Mulugu district for a fuller two-to-three-day
                    circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Warangal</h2>
                  <ul>
                    <li>
                      <strong>Telangana thali meals:</strong> Local
                      restaurants serve rice-based Telangana thalis with
                      distinctive spice profiles — a good introduction to
                      regional cuisine beyond generic Hyderabadi food.
                    </li>
                    <li>
                      <strong>Hanamkonda/Warangal restaurant belt:</strong>{" "}
                      The twin-town area has a reasonable spread of proper
                      restaurants for both vegetarian and non-vegetarian
                      meals.
                    </li>
                    <li>
                      <strong>Street food and local snacks:</strong> Small
                      stalls near the fort and temple areas are useful for a
                      quick bite between sightseeing stops.
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
                          ["Accommodation/night", "₹1,200", "₹3,000", "₹6,000"],
                          [
                            "Car hire from Hyderabad (round trip)",
                            "₹5,500",
                            "₹8,000",
                            "₹11,000",
                          ],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          ["Local transport/day", "₹400", "₹800", "₹1,500"],
                          ["Entry fees (temples/fort)", "₹100", "₹100", "₹100"],
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
                    * Figures are per person, per day (except car hire, a
                    round trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Warangal</h2>
                  <ul>
                    <li>
                      <strong>Combine with Ramappa Temple:</strong> Given the
                      UNESCO status and the manageable distance, it's worth
                      the extra half-day rather than skipping it.
                    </li>
                    <li>
                      <strong>Hire a guide for historical context:</strong>{" "}
                      The Kakatiya period's history significantly deepens a
                      visit to what would otherwise look like scattered ruins.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> Fort
                      and temple walking involves significant time in open,
                      unshaded stone courtyards.
                    </li>
                    <li>
                      <strong>Visit early morning:</strong> Both light quality
                      for photography and temperature are best in the first
                      few hours after sunrise.
                    </li>
                    <li>
                      <strong>Book train tickets ahead in season:</strong>{" "}
                      Winter weekend trains between Hyderabad and Warangal can
                      fill up during the best-weather months.
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
                          "Add Ramappa Temple to your itinerary",
                          "Take the train from Hyderabad if possible",
                          "Hire a car for the day to cover all sights",
                          "Visit the fort and temples early morning",
                          "Try local Telangana thali meals",
                          "Carry cash for smaller local stops",
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
                          "Rush the fort and temples in a couple hours",
                          "Visit during peak midday summer heat",
                          "Skip Ramappa Temple if you have the time",
                          "Expect Hampi-level tourist infrastructure",
                          "Forget sun protection for open stone courtyards",
                          "Underestimate the Palampet detour's distance",
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
                    <strong>🗺️ Extend the trip:</strong> Warangal pairs
                    naturally with{" "}
                    <Link href="/blog/laknavaram-travel-guide">
                      Laknavaram Lake
                    </Link>{" "}
                    for a scenic Mulugu-district add-on. See our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
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
                  "Warangal",
                  "Kakatiya Heritage",
                  "Thousand Pillar Temple",
                  "Ramappa Temple",
                  "Telangana",
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

              <RelatedPostsGrid currentSlug="warangal-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="warangal-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
