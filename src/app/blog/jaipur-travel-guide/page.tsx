// src/app/blog/jaipur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jaipur Travel Guide: Amber Fort, Hawa Mahal & Tips",
  description:
    "Complete Jaipur guide — Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, the Pink City's markets and food, how to reach, and a full 3-day visit plan.",
  keywords:
    "Jaipur travel guide, Amber Fort, Hawa Mahal, Pink City, City Palace Jaipur, Jantar Mantar, Nahargarh Fort, Jal Mahal, Jaipur shopping, how to reach Jaipur, Golden Triangle India",
  openGraph: {
    title: "Jaipur Travel Guide: Amber Fort, Hawa Mahal & Tips",
    description:
      "A hilltop fort-palace, a honeycombed pink facade of 953 windows, and India's first carefully planned city — the complete guide to Jaipur.",
    url: "https://club.kudozz.in/blog/jaipur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sandstone fort walls and desert-city architecture, evoking Jaipur's Pink City and Amber Fort",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Travel Guide: Amber Fort, Hawa Mahal & Tips",
    description:
      "A hilltop fort-palace and a honeycombed pink facade of 953 windows — the complete guide to Jaipur, the Pink City.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jaipur-travel-guide",
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
          headline: "Jaipur Travel Guide: Amber Fort, Hawa Mahal & Tips",
          description:
            "Complete Jaipur guide — Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, the Pink City's markets and food, how to reach, and a full 3-day visit plan.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/jaipur-travel-guide",
          },
          keywords:
            "Jaipur, Rajasthan, Pink City, Amber Fort, Golden Triangle, heritage",
          about: {
            "@type": "Place",
            name: "Jaipur",
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
                name: "Jaipur",
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
    q: "How many days do I need for Jaipur?",
    a: "Two to three days is a comfortable amount — one day for Amber Fort and the Jaigarh/Nahargarh forts above the city, and one to two days for the City Palace, Hawa Mahal, Jantar Mantar, Jal Mahal, and the old city's markets.",
  },
  {
    q: "What is the best time to visit Jaipur?",
    a: "October to March is by far the best window, with cool, dry, comfortable days for sightseeing and walking around the forts. April to June brings extreme heat that makes daytime sightseeing genuinely difficult.",
  },
  {
    q: "How do I reach Jaipur?",
    a: "Jaipur International Airport has regular domestic and some international flights. It's also a major rail junction with frequent trains from Delhi, Agra, and other Rajasthan cities, and sits on good national highways, making it the best-connected city in Rajasthan.",
  },
  {
    q: "Is Jaipur a good Golden Triangle stop?",
    a: "Yes — Jaipur is the third point of India's classic Golden Triangle circuit alongside Delhi and Agra, and is usually the easiest of the three to reach by road or rail from either city, making it a natural addition to a first-time India itinerary.",
  },
  {
    q: "What should I shop for in Jaipur?",
    a: "Gemstones and jewelry (Jaipur is a major global hub for gem cutting and trading), block-printed textiles, and the city's distinctive blue pottery are the standout categories — Johari Bazaar and Bapu Bazaar are the classic shopping streets in the old city.",
  },
  {
    q: "Is Amber Fort worth the elephant or jeep ride up?",
    a: "The elephant ride is a popular but limited and somewhat controversial option on animal-welfare grounds, and many travelers now prefer the jeep ride or walking up instead — either gets you to the same spectacular fort-palace complex either way.",
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
  { id: "introduction", title: "The Pink City", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jaipur", level: 2 },
  { id: "things-to-do", title: "Forts, Palaces & Observatory", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "3-Day Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat & Shop For", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JaipurGuidePage() {
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
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Sandstone fort walls and desert-city architecture, evoking Jaipur's Pink City and Amber Fort"
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
                { label: "Jaipur", href: null },
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
              {["Jaipur", "Rajasthan", "Pink City", "Amber Fort"].map(
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
              Jaipur Travel Guide: Amber Fort, Hawa Mahal & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A hilltop fort-palace reached by a winding ramparted road, a
              honeycombed facade of 953 tiny windows, and India's first
              carefully planned city, still painted the same pink it was
              given for a royal visit in 1876.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Jaipur, Rajasthan",
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
                  <h2>The Pink City</h2>
                  <p>
                    <strong>Jaipur</strong>, the capital of{" "}
                    <Link href="/blog/rajasthan-travel-guide">Rajasthan</Link>{" "}
                    and the third point of India's classic Golden Triangle
                    circuit alongside Delhi and Agra, is known the world over
                    as the "Pink City." The old city's buildings were painted
                    a distinctive pink-terracotta shade in 1876 for a royal
                    visit by the Prince of Wales, and the color has been
                    maintained by local regulation ever since.
                  </p>
                  <p>
                    Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was
                    one of India's first carefully planned cities, laid out
                    according to Vastu Shastra principles in a grid of wide
                    avenues and market squares — a rarity among Indian cities
                    of its era, most of which grew organically rather than by
                    design.
                  </p>
                  <p>
                    That planning coexists with genuinely spectacular Rajput
                    architecture: a hilltop fort-palace, a honeycombed
                    sandstone facade, and a working astronomical observatory
                    among the sights that make Jaipur one of India's most
                    rewarding heritage cities.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Jaipur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Rajasthan" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Jaipur Airport (JAI)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Amber Fort, Hawa Mahal",
                        },
                        {
                          icon: "🛍️",
                          label: "Famous For",
                          value: "Gems, Textiles, Blue Pottery",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹7,000",
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
                  <h2>Best Time to Visit Jaipur</h2>
                  <p>
                    Jaipur sits at the edge of the Thar Desert, so
                    temperature swings between seasons are dramatic — timing
                    matters a great deal for comfortable sightseeing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant days, ideal for walking the forts and old city without heat fatigue.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid",
                        text: "Daytime temperatures regularly cross 40°C, making fort-hopping genuinely difficult outside early morning and evening.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, patchy rain",
                        text: "Rain brings relief from the heat, though showers can be unpredictable and humidity climbs.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Festival season",
                        text: "Diwali, Teej-adjacent events, and a lively winter market season overlap with the most comfortable weather.",
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
                    <strong>Our pick:</strong> October to March — cool,
                    comfortable days that make both the hilltop forts and the
                    old city's markets genuinely enjoyable to explore on
                    foot.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jaipur</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jaipur International Airport
                      (JAI) has regular domestic flights from across India and
                      some international connections — the most convenient
                      option for most visitors.
                    </li>
                    <li>
                      <strong>By Rail:</strong> A major junction with frequent
                      trains from Delhi, Agra, and other Rajasthan cities,
                      including fast options that make it an easy add-on to a
                      Delhi-Agra itinerary.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected by national
                      highways to Delhi (~280 km), Agra (~240 km), and the
                      rest of Rajasthan, making it the best-connected city in
                      the state.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Jaipur is the natural
                    starting point for a wider Rajasthan trip — from here,
                    onward routes lead easily to{" "}
                    <Link href="/blog/pushkar-travel-guide">Pushkar</Link>,{" "}
                    <Link href="/blog/jodhpur-travel-guide">Jodhpur</Link>,
                    and further to the existing{" "}
                    <Link href="/blog/rajasthan-desert-travel-guide">
                      Jaisalmer guide
                    </Link>{" "}
                    or the{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur guide
                    </Link>
                    .
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Forts, Palaces & Observatory</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="Sandstone fort ramparts, evoking Jaipur's Amber Fort and Nahargarh Fort"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Amber Fort</h3>
                  <p>
                    A UNESCO World Heritage Site on a hill just outside the
                    city, Amber Fort (Amer Fort) is Jaipur's marquee
                    attraction — a sprawling fort-palace complex of
                    courtyards, mirrored halls, and ramparted walls, reached
                    by jeep or a walk up the approach road. (Elephant rides
                    are also offered but remain a debated option on
                    animal-welfare grounds — many travelers now prefer the
                    jeep or the walk.)
                  </p>
                  <h3>Hawa Mahal</h3>
                  <p>
                    The "Palace of Winds," instantly recognisable for its
                    honeycombed pink sandstone facade of 953 small windows,
                    was built so royal women could observe street life below
                    unseen — one of Jaipur's most photographed landmarks.
                  </p>
                  <h3>City Palace</h3>
                  <p>
                    Still partly a royal residence and partly a museum, the
                    City Palace complex mixes Rajput and Mughal architectural
                    styles across courtyards, galleries, and armories.
                  </p>
                  <h3>Jantar Mantar & Jal Mahal</h3>
                  <p>
                    Jantar Mantar, also UNESCO-listed, is a remarkable
                    18th-century astronomical observatory of monumental stone
                    instruments built by Jai Singh II. Jal Mahal, a striking
                    water palace, appears to float in the middle of Man Sagar
                    Lake, best seen from the lakeside road at sunset.
                  </p>
                  <h3>Nahargarh Fort</h3>
                  <p>
                    Perched on the Aravalli hills above the city, Nahargarh
                    Fort offers one of Jaipur's best sunset viewpoints, with
                    the whole Pink City spread out below.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Jaipur</h2>
                  <p>
                    Jaipur has one of Rajasthan's widest accommodation
                    ranges, from budget guesthouses in the old city to grand
                    heritage palace hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Guesthouses near Hawa Mahal",
                          "Backpacker hostels, old city",
                          "Budget hotels near the station",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Boutique haveli stays",
                          "Business hotels, C-Scheme",
                          "Heritage-style guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "👑",
                        range: "₹8,000–₹25,000+/night",
                        picks: [
                          "Rambagh Palace",
                          "Fairmont Jaipur",
                          "Boutique heritage palaces",
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
                  <h2>3-Day Jaipur Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Amber Fort & North Jaipur",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at Amber Fort",
                          "Jaigarh Fort above Amber",
                          "Sunset at Nahargarh Fort",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Old City Heritage",
                        color: "bg-sky-600",
                        activities: [
                          "Hawa Mahal at sunrise light",
                          "City Palace and Jantar Mantar",
                          "Evening at Johari Bazaar",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Jal Mahal & Markets",
                        color: "bg-forest-600",
                        activities: [
                          "Jal Mahal lakeside photo stop",
                          "Bapu Bazaar shopping",
                          "Departure or onward to Pushkar",
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
                  <h2>What to Eat & Shop For</h2>
                  <ul>
                    <li>
                      <strong>Rajasthani thali:</strong> A full spread of dal
                      baati churma, gatte ki sabzi, and local breads —
                      Jaipur's restaurants do this exceptionally well.
                    </li>
                    <li>
                      <strong>Kachori and lassi:</strong> Street-food
                      staples, best found at old-city stalls that have been
                      operating for generations.
                    </li>
                    <li>
                      <strong>Gemstones and jewelry:</strong> Jaipur is a
                      major global hub for gem cutting and trading —
                      Johari Bazaar is the classic shopping street.
                    </li>
                    <li>
                      <strong>Block-printed textiles and blue pottery:</strong>{" "}
                      Distinctive local crafts, widely available across the
                      old city's markets.
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
                            "₹4,000",
                            "₹15,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹800",
                            "₹2,000",
                          ],
                          ["Entry fees/day", "₹300", "₹500", "₹800"],
                          ["Daily total", "₹2,300", "₹6,500", "₹20,800"],
                          [
                            "3-Day trip total",
                            "₹6,900",
                            "₹19,500",
                            "₹62,400",
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
                    * Figures are per person, per day, excluding flights into
                    Jaipur.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Jaipur</h2>
                  <ul>
                    <li>
                      <strong>Visit Amber Fort early morning:</strong> Beats
                      both the heat and the tour-bus crowds that build up by
                      mid-morning.
                    </li>
                    <li>
                      <strong>Choose jeep over elephant at Amber Fort:</strong>{" "}
                      A faster, more comfortable option that avoids the
                      animal-welfare concerns around the elephant rides.
                    </li>
                    <li>
                      <strong>Bargain respectfully at the bazaars:</strong>{" "}
                      Haggling is expected at Johari and Bapu Bazaar, but keep
                      it good-natured.
                    </li>
                    <li>
                      <strong>Carry sun protection year-round:</strong>{" "}
                      Jaipur's desert-edge climate means strong sun even in
                      the cooler months.
                    </li>
                    <li>
                      <strong>Book heritage hotels ahead in peak season:</strong>{" "}
                      The best palace-hotel rooms fill up quickly October
                      through February.
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
                          "Visit Amber Fort early morning",
                          "Watch sunset from Nahargarh Fort",
                          "Bargain respectfully at the bazaars",
                          "Carry sun protection even in winter",
                          "Try dal baati churma at a proper thali restaurant",
                          "Book palace hotels ahead in peak season",
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
                          "Visit Amber Fort at midday in summer",
                          "Accept the first quoted price at markets",
                          "Skip sun protection assuming winter means mild sun",
                          "Rush all three forts into a single day",
                          "Forget to check heritage hotel availability early",
                          "Ignore the elephant-ride welfare debate",
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
                    <strong>🗺️ Extend the trip:</strong> Jaipur is the natural
                    start of a wider Rajasthan loop — continue to{" "}
                    <Link href="/blog/pushkar-travel-guide">Pushkar</Link> and{" "}
                    <Link href="/blog/ajmer-travel-guide">Ajmer</Link>, then
                    on to{" "}
                    <Link href="/blog/jodhpur-travel-guide">Jodhpur</Link>,
                    the existing{" "}
                    <Link href="/blog/rajasthan-desert-travel-guide">
                      Jaisalmer & Thar Desert guide
                    </Link>
                    , or the{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur guide
                    </Link>
                    . See the full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for the whole circuit.
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
                {["Jaipur", "Rajasthan", "Pink City", "Amber Fort"].map(
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

              <RelatedPostsGrid currentSlug="jaipur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jaipur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
