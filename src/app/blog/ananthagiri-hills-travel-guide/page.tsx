// src/app/blog/ananthagiri-hills-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ananthagiri Hills Guide: Coffee & Weekend Trip",
  description:
    "Complete Ananthagiri Hills guide — Telangana's surprise coffee plantations, the Musi river's origin point, the Ananthagiri temple, forest walks, how to reach from Hyderabad, and a full visit plan.",
  keywords:
    "Ananthagiri Hills travel guide, Ananthagiri temple, Vikarabad, Musi river origin, coffee plantation Telangana, weekend getaway Hyderabad, how to reach Ananthagiri Hills, Kotepally reservoir",
  openGraph: {
    title: "Ananthagiri Hills Guide: Coffee & Weekend Trip",
    description:
      "Coffee plantations on the Deccan plateau, the birthplace of Hyderabad's own river, and a misty weekend escape — the complete Ananthagiri Hills guide.",
    url: "https://club.kudozz.in/blog/ananthagiri-hills-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Misty green coffee-plantation hills, evoking Ananthagiri Hills' forested, coffee-growing landscape",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananthagiri Hills Guide: Coffee & Weekend Trip",
    description:
      "Coffee plantations, misty mornings, and the birthplace of Hyderabad's own river — the complete Ananthagiri Hills guide.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ananthagiri-hills-travel-guide",
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
          headline: "Ananthagiri Hills Guide: Coffee & Weekend Trip",
          description:
            "Complete Ananthagiri Hills guide — Telangana's surprise coffee plantations, the Musi river's origin point, the Ananthagiri temple, forest walks, how to reach from Hyderabad, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/ananthagiri-hills-travel-guide",
          },
          keywords:
            "Ananthagiri Hills, Vikarabad, Telangana, coffee plantation, Musi river, weekend getaway",
          about: {
            "@type": "Place",
            name: "Ananthagiri Hills",
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
                name: "Ananthagiri Hills",
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
    q: "How far is Ananthagiri Hills from Hyderabad?",
    a: "Roughly 90 km via Vikarabad, about a 2-hour drive on decent roads — one of the easiest and most accessible offbeat trips near the city, doable as a spontaneous weekend plan.",
  },
  {
    q: "Is Ananthagiri Hills a day trip?",
    a: "Yes, most visitors treat it as a comfortable single-day trip from Hyderabad, though staying overnight lets you catch the misty early morning at a slower pace rather than driving in after sunrise.",
  },
  {
    q: "Why does Telangana have coffee plantations here?",
    a: "Coffee cultivation is usually associated with the wetter Western Ghats regions further south and west, so Ananthagiri Hills' plantations are a genuine surprise for the Deccan plateau — a distinctive, less-known feature that sets the area apart from Telangana's typically drier terrain.",
  },
  {
    q: "What is the best time to visit for the misty views?",
    a: "October to February mornings are the most reliably misty and cool, ideal for the atmosphere the hills are known for. The monsoon months (June-September) bring lush greenery but wetter trails.",
  },
  {
    q: "Is Ananthagiri Hills good for families?",
    a: "Yes — the drive is short, the temple and plantation visits are gentle and unhurried, and the forest walks are easy enough for most fitness levels, making it a relaxed option for a family weekend.",
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
  { id: "introduction", title: "Coffee on the Deccan Plateau", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ananthagiri Hills", level: 2 },
  { id: "things-to-do", title: "Temple, Plantations & Trails", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AnanthagiriHillsGuidePage() {
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
              src="/images/destinations/coorg/coorg.jpg"
              alt="Misty green coffee-plantation hills, evoking Ananthagiri Hills' forested, coffee-growing landscape"
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
                { label: "Ananthagiri Hills", href: null },
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
                "Ananthagiri Hills",
                "Vikarabad",
                "Coffee Plantation",
                "Weekend Getaway",
                "Off-beat",
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
              Ananthagiri Hills: Coffee, Mist & a Hyderabad Weekend
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Coffee plantations on the Deccan plateau, misty forest
              mornings, and the birthplace of the river that flows through
              Hyderabad itself — barely two hours from the city.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Vikarabad, Telangana",
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
                  <h2>Coffee on the Deccan Plateau</h2>
                  <p>
                    <strong>Ananthagiri Hills</strong>, near Vikarabad town
                    roughly 90 km from{" "}
                    <Link href="/blog/hyderabad-travel-guide">
                      Hyderabad
                    </Link>
                    , is a forested hill area with a genuine surprise: it's
                    one of the very few places in Telangana with{" "}
                    <strong>coffee plantations</strong> — usually a feature
                    associated with the far wetter Western Ghats regions like
                    Coorg, not the drier Deccan plateau. That contrast alone
                    makes it worth the short drive.
                  </p>
                  <p>
                    The hills are also considered the{" "}
                    <strong>origin point of the Musi river</strong> — the
                    same river that flows through Hyderabad itself — and the{" "}
                    <strong>Ananthagiri temple</strong>, dedicated to Anantha
                    Padmanabha Swamy, sits near this source, doubling as a
                    pilgrimage stop and a nature one.
                  </p>
                  <p>
                    With misty mornings, easy forest walks, and a genuinely
                    cooler climate than the city, Ananthagiri Hills has
                    become one of Hyderabad's most popular spontaneous
                    weekend escapes.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>☕</span> Ananthagiri Hills at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Vikarabad, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "From Hyderabad",
                          value: "~90 km, ~2 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "☕",
                          label: "Known For",
                          value: "Coffee Plantations",
                        },
                        {
                          icon: "🌊",
                          label: "Notable",
                          value: "Musi River Origin",
                        },
                        {
                          icon: "🎯",
                          label: "Best For",
                          value: "Easy Weekend Trip",
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
                  <h2>Best Time to Visit Ananthagiri Hills</h2>
                  <p>
                    The hills change character across the year, from misty
                    winter mornings to lush monsoon greenery.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "🌫️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, misty mornings are at their most reliable and atmospheric — the classic Ananthagiri Hills experience most visitors come for.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm but still pleasant",
                        text: "Days get warmer, though the forest cover and elevation keep it noticeably cooler than Hyderabad city.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush and green",
                        text: "The plantations and forest turn a vivid green, though trails get muddier and mist gives way to steadier rain.",
                      },
                      {
                        season: "Early Morning, Any Season",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best light for photos",
                        text: "Arriving at first light gives the best chance of catching mist settled over the plantations before it burns off.",
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
                    <strong>Our pick:</strong> October to February, arriving
                    as early as possible — the cool, misty mornings are what
                    make Ananthagiri Hills distinctive.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ananthagiri Hills</h2>
                  <p>
                    This is one of the most accessible offbeat trips near
                    Hyderabad, needing little advance planning.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Hyderabad:</strong> Roughly 90 km
                      via Vikarabad, about a 2-hour drive on decent roads —
                      easily done as a self-drive or cab trip.
                    </li>
                    <li>
                      <strong>Via Vikarabad town:</strong> Vikarabad is the
                      nearest sizeable town, with basic supplies and a
                      railway connection if arriving without your own
                      vehicle.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Leave Hyderabad before
                    sunrise if you want a real shot at catching the hills
                    still wrapped in morning mist.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temple, Plantations & Forest Trails</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Coffee plantation hills near Ananthagiri, Telangana"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Ananthagiri Temple</h3>
                  <p>
                    Dedicated to Anantha Padmanabha Swamy, this temple sits
                    near the source of the Musi river and is a popular
                    pilgrimage stop as well as a scenic one, tucked into the
                    forested hills.
                  </p>
                  <h3>Coffee Plantation Visits</h3>
                  <p>
                    A genuinely unexpected sight on the Deccan plateau — walk
                    through the plantation rows and get a sense of how
                    different this pocket of Telangana's terrain is from the
                    rest of the state.
                  </p>
                  <h3>Forest Walks & Nature</h3>
                  <p>
                    Easy, unhurried trails through the forest cover make for
                    a pleasant morning or afternoon, well suited to families
                    and casual walkers rather than serious trekkers.
                  </p>
                  <h3>Kotepally Reservoir</h3>
                  <p>
                    A nearby reservoir sometimes combined with the hills
                    visit — a quiet spot for a short stop before heading back
                    to Hyderabad.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Ananthagiri Hills</h2>
                  <p>
                    Most visitors day-trip from Hyderabad given the short
                    distance, though a handful of resorts and forest stays
                    make an overnight option easy too.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,000/night",
                        picks: [
                          "Basic guesthouses in Vikarabad",
                          "Simple lodges near the hills",
                          "Homestay-style options",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "Forest-view resorts",
                          "Weekend cottage stays",
                          "Nature-camp style accommodation",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹5,500–₹10,000+/night",
                        picks: [
                          "Premium plantation-view resorts",
                          "Boutique nature retreats",
                          "Full-board weekend packages",
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
                        day: "Single Day",
                        title: "Early Morning to Evening",
                        color: "bg-amber-700",
                        activities: [
                          "Leave Hyderabad before sunrise",
                          "Ananthagiri temple and coffee plantation walk",
                          "Forest trail and Kotepally reservoir stop",
                          "Return to Hyderabad by evening",
                        ],
                      },
                      {
                        day: "Overnight Option",
                        title: "A Slower Weekend",
                        color: "bg-sky-600",
                        activities: [
                          "Arrive afternoon, check in",
                          "Evening forest walk",
                          "Full misty morning at the plantations before returning",
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
                  <h2>Where to Eat at Ananthagiri Hills</h2>
                  <ul>
                    <li>
                      <strong>Local dhabas near the temple:</strong> Simple
                      South Indian breakfast and thali options cluster
                      around the temple area.
                    </li>
                    <li>
                      <strong>Resort dining:</strong> If staying overnight,
                      most resorts serve straightforward meals to guests.
                    </li>
                    <li>
                      <strong>Carry snacks for the trails:</strong> Options
                      thin out along the forest walk itself.
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
                          ["Accommodation/night (if staying)", "₹1,200", "₹3,500", "₹7,000"],
                          [
                            "Car hire from Hyderabad (round trip)",
                            "₹3,000",
                            "₹4,500",
                            "₹7,000",
                          ],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          ["Entry/parking fees", "₹50", "₹50", "₹50"],
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
                    round trip figure best split across a group). Many
                    visitors skip accommodation entirely with a single-day
                    trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ananthagiri Hills</h2>
                  <ul>
                    <li>
                      <strong>Leave before sunrise for the mist:</strong> The
                      atmospheric misty views are best caught early, before
                      they burn off by mid-morning.
                    </li>
                    <li>
                      <strong>Combine with a coffee estate stop:</strong>{" "}
                      Don't skip the plantation walk — it's the area's most
                      distinctive feature.
                    </li>
                    <li>
                      <strong>Wear comfortable footwear:</strong> The forest
                      trails and temple grounds involve some uneven walking.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Options along
                      the trails and plantation walk are limited.
                    </li>
                    <li>
                      <strong>Good for a spontaneous plan:</strong> The short
                      distance from Hyderabad means it works well even
                      without much advance notice.
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
                          "Leave Hyderabad early for the misty views",
                          "Walk through a coffee plantation",
                          "Visit the Ananthagiri temple",
                          "Wear comfortable shoes for forest trails",
                          "Carry water and snacks",
                          "Stop at Kotepally reservoir if time allows",
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
                          "Arrive late morning and miss the mist",
                          "Expect a big restaurant scene on the trails",
                          "Skip the coffee plantation — it's the main draw",
                          "Expect a serious trekking-grade trail",
                          "Forget footwear suited to uneven ground",
                          "Rush through without exploring the temple grounds",
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
                    <strong>🗺️ Extend the trip:</strong> Ananthagiri Hills
                    pairs well with a wider Hyderabad weekend — see our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
                    </Link>{" "}
                    for the rest of the region.
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
                  "Ananthagiri Hills",
                  "Vikarabad",
                  "Telangana",
                  "Weekend Getaway",
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

              <RelatedPostsGrid currentSlug="ananthagiri-hills-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ananthagiri-hills-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
