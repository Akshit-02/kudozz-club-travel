// src/app/blog/pushkar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Pushkar Travel Guide: Lake, Temple & Camel Fair",
  description:
    "Complete Pushkar guide — Pushkar Lake and its 52 ghats, the rare Brahma Temple, the Pushkar Camel Fair, how to reach from Ajmer or Jaipur, and a full visit plan.",
  keywords:
    "Pushkar travel guide, Pushkar Lake, Brahma Temple, Pushkar Camel Fair, Pushkar ghats, how to reach Pushkar, Pushkar from Ajmer, Pushkar from Jaipur, vegetarian town Rajasthan",
  openGraph: {
    title: "Pushkar Travel Guide: Lake, Temple & Camel Fair",
    description:
      "A sacred lake ringed by 52 ghats, one of the world's only Brahma temples, and a camel fair that turns the desert into a festival — the complete Pushkar guide.",
    url: "https://club.kudozz.in/blog/pushkar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Calm lake water ringed by ghats, evoking Pushkar's sacred lake and its 52 bathing ghats",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pushkar Travel Guide: Lake, Temple & Camel Fair",
    description:
      "A sacred lake ringed by 52 ghats, one of the world's only Brahma temples, and a legendary camel fair — the complete Pushkar guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/pushkar-travel-guide",
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
          headline: "Pushkar Travel Guide: Lake, Temple & Camel Fair",
          description:
            "Complete Pushkar guide — Pushkar Lake and its 52 ghats, the rare Brahma Temple, the Pushkar Camel Fair, how to reach from Ajmer or Jaipur, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/pushkar-travel-guide",
          },
          keywords:
            "Pushkar, Rajasthan, Brahma Temple, Camel Fair, sacred lake, pilgrimage",
          about: {
            "@type": "Place",
            name: "Pushkar",
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
                name: "Pushkar",
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
    q: "Why is the Brahma Temple in Pushkar significant?",
    a: "It's one of extremely few temples anywhere in the world dedicated to Brahma, despite his central place in the Hindu trinity alongside Vishnu and Shiva — a genuinely rare and distinctive site worth the visit on that basis alone.",
  },
  {
    q: "When is the Pushkar Camel Fair?",
    a: "Typically held in October or November (timed to the Hindu lunar calendar), the fair combines serious camel and livestock trading with a major cultural festival of competitions, music, and crowds of both traders and travelers.",
  },
  {
    q: "Is alcohol really banned in Pushkar?",
    a: "Yes — as a sacred pilgrimage town, Pushkar enforces a vegetarian-only, alcohol-free policy, and visitors should expect this to be strictly followed at restaurants and shops.",
  },
  {
    q: "How far is Pushkar from Ajmer and Jaipur?",
    a: "Pushkar is only about 15 km from Ajmer, a short and easy drive, and roughly 145 km from Jaipur, about a 3-hour drive — both make comfortable day trips or short add-ons to a Pushkar stay.",
  },
  {
    q: "What is the best time to visit Pushkar?",
    a: "October to March offers the most comfortable weather for exploring the ghats and old town. Specifically visiting during the Camel Fair gives a completely different, festival-driven experience, though with much bigger crowds and higher prices.",
  },
  {
    q: "Is Pushkar good for solo or backpacker travel?",
    a: "Yes — Pushkar has long been part of India's backpacker trail, with a relaxed rooftop-cafe culture, budget guesthouses, and a walkable old town that makes it comfortable for solo travelers.",
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
  { id: "introduction", title: "A Sacred Lake Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pushkar", level: 2 },
  { id: "things-to-do", title: "Lake, Temple & Camel Fair", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PushkarGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Calm lake water ringed by ghats, evoking Pushkar's sacred lake and its 52 bathing ghats"
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
                { label: "Pushkar", href: null },
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
              {["Pushkar", "Pushkar Lake", "Rajasthan", "Camel Fair"].map(
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
              Pushkar Travel Guide: Lake, Temple & Camel Fair
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A sacred lake ringed by 52 bathing ghats, one of the world's
              only temples to Brahma, and a legendary camel fair that turns
              the desert into a festival once a year.
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
                  text: "Pushkar, Ajmer District, Rajasthan",
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
                  <h2>A Sacred Lake Town</h2>
                  <p>
                    <strong>Pushkar</strong>, in Ajmer district of{" "}
                    <Link href="/blog/rajasthan-travel-guide">Rajasthan</Link>
                    , is built entirely around Pushkar Lake, one of the
                    holiest lakes in Hinduism, ringed by 52 bathing ghats
                    where pilgrims descend to bathe at sunrise and sunset.
                  </p>
                  <p>
                    The town's Brahma Temple is a genuine rarity — one of
                    extremely few temples anywhere in the world dedicated to
                    Brahma, despite his central place in the Hindu trinity
                    alongside Vishnu and Shiva. This alone makes Pushkar a
                    significant pilgrimage stop distinct from almost anywhere
                    else in India.
                  </p>
                  <p>
                    That sacred character coexists with a long-running
                    backpacker-trail identity — rooftop cafes, budget
                    guesthouses, and a walkable old town give Pushkar a
                    relaxed, easygoing feel alongside its religious
                    significance. Given its holy status, the town is
                    vegetarian-only and alcohol-free by local regulation.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕉️</span> Pushkar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Ajmer, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "Nearest City",
                          value: "Ajmer (~15 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🐫",
                          label: "Known For",
                          value: "Camel Fair, Brahma Temple",
                        },
                        {
                          icon: "🥗",
                          label: "Town Rule",
                          value: "Vegetarian, No Alcohol",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹5,000",
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
                  <h2>Best Time to Visit Pushkar</h2>
                  <p>
                    General comfort and the timing of the Camel Fair are the
                    two big factors shaping when to visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable days for walking the ghats and old town, with pleasant evenings by the lake.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🐫",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Camel Fair season",
                        text: "One of the world's largest camel and livestock fairs, with major crowds, festival energy, and higher prices.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Extreme heat — avoid",
                        text: "Desert-edge temperatures make daytime walking uncomfortable; best avoided if possible.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — quieter, greener",
                        text: "Fewer crowds and a greener landscape around the lake, though with occasional unpredictable showers.",
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
                    <strong>Our pick:</strong> October to March for a
                    relaxed visit — or time it exactly to the Camel Fair
                    dates if festival energy and crowds are what you're
                    after.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Pushkar</h2>
                  <ul>
                    <li>
                      <strong>Via Ajmer:</strong> The easiest route — Ajmer
                      is well connected by rail and road, and Pushkar is only
                      a short, roughly 15 km drive further —{" "}
                      <Link href="/blog/ajmer-travel-guide">
                        see our Ajmer guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>By Road from Jaipur:</strong> Roughly 145 km, a
                      comfortable 3-hour drive, making Pushkar an easy add-on
                      from{" "}
                      <Link href="/blog/jaipur-travel-guide">Jaipur</Link>.
                    </li>
                    <li>
                      <strong>By Air:</strong> The nearest airport is Kishangarh
                      (Ajmer), with limited connections, or Jaipur
                      International Airport for wider flight options.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If visiting during the Camel
                    Fair, book accommodation weeks in advance — prices and
                    demand spike sharply and rooms sell out fast.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Lake, Temple & Camel Fair</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Lake with surrounding ghats, evoking Pushkar Lake"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Pushkar Lake & the Ghats</h3>
                  <p>
                    The 52 ghats ringing the lake are where pilgrims come to
                    bathe, especially at sunrise — walking the perimeter path
                    at that hour is one of Pushkar's most memorable
                    experiences, with the light on the water and the ghats
                    coming alive.
                  </p>
                  <h3>Brahma Temple</h3>
                  <p>
                    A short walk from the lake, this rare temple dedicated to
                    Brahma the creator draws pilgrims from across India — a
                    site with few real equivalents anywhere else in the
                    Hindu world.
                  </p>
                  <h3>Pushkar Camel Fair</h3>
                  <p>
                    Held annually, typically in October or November, the fair
                    combines serious camel and livestock trading with a huge
                    cultural festival — competitions, folk music, and a major
                    draw for photographers, though it brings very large
                    crowds and inflated prices across the town.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Pushkar</h2>
                  <p>
                    Pushkar has a strong backpacker-friendly guesthouse scene
                    alongside a handful of more upscale lakeside stays.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,500/night",
                        picks: [
                          "Rooftop guesthouses, old town",
                          "Backpacker hostels near the ghats",
                          "Simple lodges off the main bazaar",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,500/night",
                        picks: [
                          "Lakeside boutique hotels",
                          "Heritage-style guesthouses",
                          "Comfortable hotels near the bus stand",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,500–₹12,000+/night",
                        picks: [
                          "Premium lakeside resorts",
                          "Desert-camp style luxury tents",
                          "Boutique heritage properties",
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
                        title: "Lake & Old Town",
                        color: "bg-amber-700",
                        activities: [
                          "Sunrise walk along the ghats",
                          "Brahma Temple visit",
                          "Evening in the old bazaar and rooftop cafes",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Ajmer Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Short drive to Ajmer Sharif Dargah",
                          "Ana Sagar Lake and Daulat Bagh",
                          "Return to Pushkar for sunset by the lake",
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
                    * See our{" "}
                    <Link href="/blog/ajmer-travel-guide">
                      Ajmer travel guide
                    </Link>{" "}
                    for a fuller day-trip breakdown.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Pushkar</h2>
                  <ul>
                    <li>
                      <strong>Rooftop cafes:</strong> Pushkar's lakeside
                      rooftop cafes serve a mix of Indian and traveler-friendly
                      international food, many with lake views.
                    </li>
                    <li>
                      <strong>Malpua and other sweets:</strong> A popular
                      local sweet found at stalls around the old bazaar.
                    </li>
                    <li>
                      <strong>Strictly vegetarian, no alcohol:</strong>{" "}
                      Every restaurant in town follows this rule given
                      Pushkar's sacred status — plan accordingly.
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
                            "₹700",
                            "₹2,500",
                            "₹8,000",
                          ],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          [
                            "Local transport/day",
                            "₹200",
                            "₹500",
                            "₹1,200",
                          ],
                          ["Entry fees/day", "₹0", "₹100", "₹100"],
                          ["Daily total", "₹1,250", "₹3,800", "₹10,800"],
                          [
                            "2-Day trip total",
                            "₹2,500",
                            "₹7,600",
                            "₹21,600",
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
                    * Expect significantly higher accommodation prices during
                    the Camel Fair.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Pushkar</h2>
                  <ul>
                    <li>
                      <strong>Respect the vegetarian/alcohol-free rules:</strong>{" "}
                      Strictly enforced across the entire town given its
                      sacred status.
                    </li>
                    <li>
                      <strong>Dress modestly at the ghats and temple:</strong>{" "}
                      Cover shoulders and knees, and remove footwear before
                      entering temple areas.
                    </li>
                    <li>
                      <strong>Book well ahead for the Camel Fair:</strong>{" "}
                      Prices and demand spike sharply during that window.
                    </li>
                    <li>
                      <strong>Be cautious with unsolicited "puja" offers:</strong>{" "}
                      Some touts at the ghats offer flower-and-blessing
                      ceremonies followed by aggressive requests for large
                      donations — a polite but firm decline is fine.
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
                          "Walk the ghats at sunrise",
                          "Visit the rare Brahma Temple",
                          "Dress modestly near the ghats and temple",
                          "Book ahead if visiting during the Camel Fair",
                          "Combine with a day trip to Ajmer",
                          "Try a rooftop cafe for lake-view dining",
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
                          "Expect to find alcohol or meat in town",
                          "Wear revealing clothing at the ghats",
                          "Agree to an unsolicited puja without confirming cost first",
                          "Arrive during the Camel Fair without a booking",
                          "Swim or bathe disrespectfully at the sacred ghats",
                          "Rush the sunrise ghat walk — it's worth lingering",
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
                    <strong>🗺️ Extend the trip:</strong> Pushkar pairs
                    naturally with{" "}
                    <Link href="/blog/ajmer-travel-guide">Ajmer</Link>, just
                    15 km away, or extend onward to{" "}
                    <Link href="/blog/jaipur-travel-guide">Jaipur</Link>. See
                    the full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for the wider circuit.
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
                {["Pushkar", "Pushkar Lake", "Rajasthan", "Camel Fair"].map(
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

              <RelatedPostsGrid currentSlug="pushkar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="pushkar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
