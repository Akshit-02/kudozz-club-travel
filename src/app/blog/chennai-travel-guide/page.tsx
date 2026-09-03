// src/app/blog/chennai-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chennai Travel Guide: Beaches, Temples & Food",
  description:
    "Complete Chennai guide — Marina Beach, Fort St. George, Mylapore's Kapaleeshwarar Temple, San Thome Basilica, filter coffee and dosas, how to reach, and a full 2-day visit plan.",
  keywords:
    "Chennai travel guide, Marina Beach, Fort St. George, Kapaleeshwarar Temple, Mylapore, San Thome Basilica, Chennai food guide, how to reach Chennai, Chennai day trips, Tamil Nadu capital",
  openGraph: {
    title: "Chennai Travel Guide: Beaches, Temples & Food",
    description:
      "One of the world's longest urban beaches, Dravidian temples, colonial forts, and a food scene built on filter coffee and dosas — the complete Chennai guide.",
    url: "https://club.kudozz.in/blog/chennai-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/puducherry/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Coastal promenade and coastal architecture, evoking Chennai's Bay of Bengal seafront and colonial-era buildings",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chennai Travel Guide: Beaches, Temples & Food",
    description:
      "Marina Beach, Dravidian temples, colonial forts, and a food scene built on filter coffee and dosas — the complete Chennai guide.",
    images: ["/images/destinations/puducherry/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chennai-travel-guide",
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
          headline: "Chennai Travel Guide: Beaches, Temples & Food",
          description:
            "Complete Chennai guide — Marina Beach, Fort St. George, Mylapore's Kapaleeshwarar Temple, San Thome Basilica, filter coffee and dosas, how to reach, and a full 2-day visit plan.",
          image: "https://club.kudozz.in/images/destinations/puducherry/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/chennai-travel-guide",
          },
          keywords:
            "Chennai, Tamil Nadu, Marina Beach, South India, capital city",
          about: {
            "@type": "Place",
            name: "Chennai",
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
                name: "Chennai",
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
    q: "What is the best time to visit Chennai?",
    a: "November to February is best — the weather is comparatively cool and dry. April to June brings intense heat and humidity that makes daytime sightseeing uncomfortable, so it's worth avoiding if you can plan around it.",
  },
  {
    q: "How many days do I need for Chennai?",
    a: "Two days covers the city's core sights comfortably — Marina Beach, Fort St. George, Mylapore, and San Thome Basilica — with time for a proper food trail. Add extra days if you're using Chennai as a base for Mahabalipuram or Kanchipuram day trips.",
  },
  {
    q: "Is Chennai a good base for day trips?",
    a: "Yes. Mahabalipuram (roughly 60 km) and Kanchipuram (roughly 75 km) are both comfortable day trips from the city, making Chennai a practical base for a few days of temple and heritage sightseeing beyond the city itself.",
  },
  {
    q: "What food should I try in Chennai?",
    a: "Start with filter coffee and a proper South Indian breakfast of dosas and idlis, then work through the city's Tamil and Chettinad food scene — Chennai is a genuinely excellent base for exploring both cuisines.",
  },
  {
    q: "Is Marina Beach safe for swimming?",
    a: "Not really — strong currents along Marina Beach make swimming generally discouraged. It's best enjoyed as a walking and sunset spot rather than a swimming beach; if you want a proper beach day, look further afield.",
  },
  {
    q: "How do I reach Chennai?",
    a: "Chennai International Airport has extensive domestic and international connections. The city is also a major rail junction and well connected by road, making it one of the easiest South Indian cities to reach from anywhere in the country.",
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
  { id: "introduction", title: "Chennai: Gateway to the South", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chennai", level: 2 },
  { id: "things-to-do", title: "Beaches, Forts & Temples", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "2-Day Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChennaiGuidePage() {
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
              src="/images/destinations/puducherry/hero.jpg"
              alt="Coastal promenade and coastal architecture, evoking Chennai's Bay of Bengal seafront and colonial-era buildings"
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
                { label: "Chennai", href: null },
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
              {["Chennai", "Marina Beach", "Tamil Nadu", "South India"].map(
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
              Chennai: Beaches, Temples & Food Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the world's longest urban beaches, Dravidian temples
              tucked into old neighbourhoods, and a food scene that starts
              and ends with proper filter coffee.
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
                  text: "Chennai, Tamil Nadu",
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
                  <h2>Chennai: Gateway to the South</h2>
                  <p>
                    <strong>Chennai</strong>, the capital of{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu
                    </Link>
                    , sits on the Coromandel Coast facing the Bay of Bengal.
                    Once known as Madras, it blends a long Dravidian temple
                    tradition with British colonial-era architecture, a
                    thriving Carnatic music and Bharatanatyam dance scene,
                    and — more recently — the title of "Detroit of India"
                    for its automobile manufacturing industry.
                  </p>
                  <p>
                    For most visitors, Chennai works as both a destination
                    in its own right and a practical gateway city — its
                    airport and rail connections make it the natural
                    starting point for the Tamil Nadu temple circuit, and
                    Mahabalipuram and Kanchipuram are both easy day trips
                    from here.
                  </p>
                  <p>
                    Humidity is a near-constant fact of life in Chennai, so
                    plan your sightseeing pace accordingly — mornings and
                    evenings for outdoor sights, and a proper filter coffee
                    break in between.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Chennai at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Tamil Nadu" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Chennai Airport (MAA)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🏖️",
                          label: "Known For",
                          value: "Marina Beach, Temples",
                        },
                        {
                          icon: "☕",
                          label: "Food",
                          value: "Filter Coffee, Dosas",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Mahabalipuram, Kanchipuram",
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
                  <h2>Best Time to Visit Chennai</h2>
                  <p>
                    Chennai's coastal, humid climate makes timing genuinely
                    important — the wrong season can make sightseeing a
                    slog.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comparatively cool and dry, the most comfortable window for walking Marina Beach and touring temples.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Intense heat and humidity make daytime sightseeing genuinely uncomfortable — plan around early mornings if you must visit.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌦️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Humid, occasional showers",
                        text: "Warm and humid with intermittent rain — manageable but not the most pleasant window.",
                      },
                      {
                        season: "Dec",
                        emoji: "🎶",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Music Season",
                        text: "Chennai's famous Carnatic Music Season fills the city with concerts — a great time to combine sightseeing with culture, though hotels get busier.",
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
                    <strong>Our pick:</strong> November to February — the
                    most comfortable stretch of weather, with December
                    offering the bonus of the Music Season if your dates
                    line up.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chennai</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Chennai International Airport
                      (MAA) has extensive domestic and international
                      connections, making it one of the easiest South Indian
                      cities to fly into.
                    </li>
                    <li>
                      <strong>By Rail:</strong> A major rail junction with
                      multiple stations (Chennai Central, Chennai Egmore)
                      connecting to cities across India.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well-connected by national
                      highways to the rest of Tamil Nadu and neighbouring
                      states.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're planning to visit
                    Mahabalipuram and Kanchipuram too, base yourself in
                    Chennai and treat both as day trips rather than
                    separately booking accommodation in each.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Beaches, Forts & Temples</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/puducherry/french.jpg"
                      alt="Coastal colonial-era architecture, evoking Chennai's Fort St. George and seafront heritage buildings"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Marina Beach</h3>
                  <p>
                    One of the longest urban beaches in the world, Marina
                    Beach is best experienced in the evening — a walking and
                    sunset spot rather than a swimming beach, given the
                    strong currents along this stretch of coast.
                  </p>
                  <h3>Fort St. George</h3>
                  <p>
                    Built by the British East India Company, this was the
                    first English fortress in India. Today it houses a
                    museum and the Tamil Nadu Legislative Assembly, and is
                    worth a visit for its colonial-era architecture and
                    history.
                  </p>
                  <h3>Mylapore & Kapaleeshwarar Temple</h3>
                  <p>
                    Mylapore is one of Chennai's oldest neighbourhoods,
                    centred on the Kapaleeshwarar Temple, a major
                    Dravidian-style Shiva temple with a soaring gopuram —
                    the surrounding lanes are worth wandering for a sense of
                    old Chennai.
                  </p>
                  <h3>San Thome Basilica</h3>
                  <p>
                    A striking church built over the tomb of St. Thomas the
                    Apostle, one of only three churches in the world built
                    over the tomb of a Christian apostle — a distinctive
                    landmark worth the detour.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Chennai</h2>
                  <p>
                    Chennai has accommodation across every price bracket,
                    with T. Nagar and the areas around the airport and
                    Egmore being convenient hubs for most itineraries.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Budget hotels near Egmore station",
                          "T. Nagar guesthouses",
                          "Backpacker stays near the airport",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,800–₹5,500/night",
                        picks: [
                          "Business hotels near Nungambakkam",
                          "T. Nagar mid-range chains",
                          "Boutique stays near Mylapore",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,500–₹15,000+/night",
                        picks: [
                          "Beachfront luxury properties",
                          "Premium business hotels, city centre",
                          "Heritage-style five-star stays",
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
                  <h2>2-Day Chennai Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Colonial Chennai & the Coast",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Fort St. George and museum",
                          "Afternoon: San Thome Basilica",
                          "Evening: Marina Beach at sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Temples & Food Trail",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Mylapore and Kapaleeshwarar Temple",
                          "Afternoon: T. Nagar shopping and lunch",
                          "Evening: Filter coffee and dosa trail",
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
                    * With extra days, add a Mahabalipuram or Kanchipuram day
                    trip — see our{" "}
                    <Link href="/blog/mahabalipuram-travel-guide">
                      Mahabalipuram
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/kanchipuram-travel-guide">
                      Kanchipuram
                    </Link>{" "}
                    guides.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Chennai</h2>
                  <ul>
                    <li>
                      <strong>Filter coffee:</strong> The city's signature
                      drink — a strong decoction brewed coffee served with
                      frothed milk in a traditional tumbler and dabara.
                    </li>
                    <li>
                      <strong>Dosas & idlis:</strong> Chennai is an
                      excellent base for South Indian breakfast classics,
                      from the classic masala dosa to countless regional
                      variations.
                    </li>
                    <li>
                      <strong>Chettinad cuisine:</strong> The city has a
                      thriving Chettinad food scene — spicy, aromatic dishes
                      worth seeking out at dedicated restaurants.
                    </li>
                    <li>
                      <strong>Marina Beach snacks:</strong> Roadside stalls
                      along the beach serve classic evening snacks — a fun,
                      casual way to end a day of sightseeing.
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
                            "₹1,500",
                            "₹4,000",
                            "₹10,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹800",
                            "₹2,000",
                          ],
                          ["Activities/day", "₹200", "₹500", "₹1,000"],
                          ["Daily total", "₹2,500", "₹6,500", "₹15,500"],
                          [
                            "2-Day trip total",
                            "₹5,000",
                            "₹13,000",
                            "₹31,000",
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
                    * Excludes flights into Chennai. Figures are per person,
                    per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chennai</h2>
                  <ul>
                    <li>
                      <strong>Plan around the heat:</strong> Humidity is a
                      near-constant factor — schedule outdoor sightseeing
                      for morning or evening.
                    </li>
                    <li>
                      <strong>Marina Beach is for walking, not
                      swimming:</strong> Strong currents make swimming
                      generally discouraged.
                    </li>
                    <li>
                      <strong>Use Chennai as a base:</strong> Mahabalipuram
                      and Kanchipuram are both comfortable day trips from
                      the city.
                    </li>
                    <li>
                      <strong>Dress modestly at temples:</strong> Cover
                      shoulders and knees, and expect to remove footwear
                      before entering.
                    </li>
                    <li>
                      <strong>Check for the December Music Season:</strong>{" "}
                      If your dates coincide, it's a genuinely special time
                      to be in the city — but book accommodation earlier
                      than usual.
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
                          "Visit Marina Beach in the evening for sunset",
                          "Try filter coffee at a proper old-city café",
                          "Dress modestly at Mylapore and other temples",
                          "Use Chennai as a base for day trips",
                          "Plan outdoor sightseeing for morning or evening",
                          "Check the December Music Season calendar",
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
                          "Swim at Marina Beach — currents are strong",
                          "Visit during peak summer heat (Apr-Jun)",
                          "Skip a day trip to Mahabalipuram if you have time",
                          "Rush temple visits without checking dress code",
                          "Underestimate humidity even in cooler months",
                          "Book Music Season accommodation last-minute",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Chennai with{" "}
                    <Link href="/blog/mahabalipuram-travel-guide">
                      Mahabalipuram
                    </Link>{" "}
                    for UNESCO-listed Pallava rock-cut monuments, or{" "}
                    <Link href="/blog/kanchipuram-travel-guide">
                      Kanchipuram
                    </Link>{" "}
                    for temples and silk sarees. See our full{" "}
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
                {["Chennai", "Tamil Nadu", "Marina Beach", "South India"].map(
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

              <RelatedPostsGrid currentSlug="chennai-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chennai-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
