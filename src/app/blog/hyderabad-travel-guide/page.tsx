// src/app/blog/hyderabad-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hyderabad Travel Guide: Charminar, Golconda & Food",
  description:
    "Complete Hyderabad guide — Charminar, Golconda Fort, Hussain Sagar, Ramoji Film City, the Nizam-era palaces, Hyderabadi biryani, where to stay, and a full 2-3 day itinerary.",
  keywords:
    "Hyderabad travel guide, Charminar, Golconda Fort, Hyderabad biryani, Hussain Sagar, Ramoji Film City, Salar Jung Museum, Old City Hyderabad, Telangana capital, how to reach Hyderabad, Hyderabad itinerary, Irani chai",
  openGraph: {
    title: "Hyderabad Travel Guide: Charminar, Golconda & Food",
    description:
      "A city of Qutb Shahi forts, Nizam-era palaces, and India's most argued-about biryani — the complete Hyderabad guide.",
    url: "https://club.kudozz.in/blog/hyderabad-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "City skyline at dusk, evoking Hyderabad's blend of old-city heritage and modern skyline",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyderabad Travel Guide: Charminar, Golconda & Food",
    description:
      "Qutb Shahi forts, Nizam-era palaces, and India's most argued-about biryani — the complete Hyderabad guide.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/hyderabad-travel-guide",
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
          headline: "Hyderabad Travel Guide: Charminar, Golconda & Food",
          description:
            "Complete Hyderabad guide — Charminar, Golconda Fort, Hussain Sagar, Ramoji Film City, the Nizam-era palaces, Hyderabadi biryani, where to stay, and a full 2-3 day itinerary.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/hyderabad-travel-guide",
          },
          keywords:
            "Hyderabad, Telangana, Charminar, Golconda Fort, biryani, Nizam heritage",
          about: {
            "@type": "Place",
            name: "Hyderabad",
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
                name: "Hyderabad",
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
    q: "How many days do I need for Hyderabad alone?",
    a: "Two to three days covers the essentials comfortably — one for the Old City (Charminar, Laad Bazaar, Mecca Masjid) and Golconda Fort, one for museums and Hussain Sagar, and a third if you want a full day at Ramoji Film City.",
  },
  {
    q: "What is the best area to stay in Hyderabad?",
    a: "Banjara Hills or Jubilee Hills work well for mid-range and luxury stays with easy access to restaurants and malls, while staying near the Old City puts you within walking distance of Charminar and Golconda but with a more traditional, crowded feel.",
  },
  {
    q: "Is Hyderabadi biryani really that special?",
    a: "Yes — the dum-cooking method, where marinated meat and part-cooked rice are sealed together and slow-cooked, is genuinely distinctive, and an established Old City institution will show you why the dish has such a following. Pair it with Irani chai and an Osmania biscuit afterward.",
  },
  {
    q: "How do I reach Hyderabad?",
    a: "Rajiv Gandhi International Airport has excellent domestic and international connectivity. Hyderabad and Secunderabad are also major rail junctions, and the city is well connected by national highways from Bengaluru, Chennai, Pune, and Nagpur.",
  },
  {
    q: "What are good day trips from Hyderabad?",
    a: "Warangal's Kakatiya heritage (~150 km), the Yadadri temple (~60 km), and Nagarjuna Sagar's dam and Buddhist heritage island (~150 km) are all workable day trips or single-overnight excursions from the city.",
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
  { id: "introduction", title: "A City of Forts, Palaces & Biryani", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hyderabad", level: 2 },
  { id: "things-to-do", title: "Old City, Museums & Ramoji Film City", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HyderabadGuidePage() {
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
              src="/images/destinations/chandigarh/hero.jpg"
              alt="City skyline at dusk, evoking Hyderabad's blend of old-city heritage and modern skyline"
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
                { label: "Hyderabad", href: null },
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
                "Hyderabad",
                "Telangana",
                "Charminar",
                "Golconda Fort",
                "Biryani",
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
              Hyderabad: Charminar, Golconda & Food Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Qutb Shahi fort, a Nizam-era monument, and a biryani
              tradition that Hyderabadis will happily argue about for hours
              — the complete guide to Telangana's capital.
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
                  text: "Hyderabad, Telangana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>A City of Forts, Palaces & Biryani</h2>
                  <p>
                    <strong>Hyderabad</strong>, the capital of{" "}
                    <Link href="/blog/telangana-travel-guide">Telangana</Link>,
                    sits on the Musi river as twin city to Secunderabad.
                    Founded in 1591 by Muhammad Quli Qutb Shah, and later
                    ruled for two centuries by the Nizams of the Asaf Jahi
                    dynasty, the city carries a genuinely layered heritage —
                    Qutb Shahi forts, Nizam-era palaces, and a modern IT
                    economy centred on HITEC City all coexisting within the
                    same metropolitan sprawl.
                  </p>
                  <p>
                    The Old City, anchored by <strong>Charminar</strong> and{" "}
                    <strong>Golconda Fort</strong>, still runs on bangle
                    bazaars, Irani cafes, and biryani houses that have been
                    perfecting the same dum-cooking method for generations.
                    Beyond the historic core, Hussain Sagar lake, the
                    Nizam-era Salar Jung Museum, and Ramoji Film City round
                    out a city that rewards two or three unhurried days.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> Hyderabad at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Telangana capital",
                        },
                        {
                          icon: "✈️",
                          label: "Airport",
                          value: "Rajiv Gandhi Intl (RGIA)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Charminar, Golconda Fort",
                        },
                        {
                          icon: "🍛",
                          label: "Must-Try",
                          value: "Hyderabadi Biryani",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Warangal (~150 km)",
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
                  <h2>Best Time to Visit Hyderabad</h2>
                  <p>
                    Hyderabad's Deccan climate is hot for much of the year,
                    which makes timing a real factor for a comfortable Old
                    City walking trip.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (15–30°C) — ideal for walking the Old City and climbing Golconda Fort's ramparts.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — Deccan summer",
                        text: "Temperatures often exceed 40°C by May, making midday outdoor sightseeing genuinely uncomfortable.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional heavy rain",
                        text: "Hot and humid with intermittent downpours, though indoor sights like Salar Jung Museum remain a comfortable option.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best evenings",
                        text: "Cool evenings make this the ideal window for Golconda's evening sound-and-light show and Old City night walks.",
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
                    dry conditions that make both the Old City heat and the
                    Golconda climb genuinely comfortable.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Hyderabad</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Rajiv Gandhi International
                      Airport has excellent domestic and international
                      connectivity — the fastest and most practical option
                      for most travellers.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Hyderabad and Secunderabad are
                      major railway junctions with direct trains from nearly
                      every large Indian city.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected by national
                      highways to Bengaluru, Chennai, Pune, and Nagpur, though
                      these are long drives best suited to a broader road
                      trip rather than a quick hop.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly into Hyderabad and use it
                    as your base — nearly everything in this guide, and most
                    of the wider Telangana circuit, radiates out from the
                    city in comfortable day trips.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Old City, Museums & Ramoji Film City</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Historic monument in a bustling old-city bazaar setting, evoking Hyderabad's Charminar and Laad Bazaar"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Charminar & Golconda Fort</h3>
                  <p>
                    Hyderabad's two defining monuments each merit their own
                    full visit and their own dedicated guide — see{" "}
                    <Link href="/blog/charminar-travel-guide">
                      our Charminar guide
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/golconda-fort-travel-guide">
                      our Golconda Fort guide
                    </Link>{" "}
                    for the deep dive on history, timings, and tips for
                    each.
                  </p>
                  <h3>Salar Jung Museum & Nizam-Era Palaces</h3>
                  <p>
                    One of India's largest museums, home to a vast Nizam-era
                    art and antiques collection spanning multiple continents.
                    Chowmahalla Palace and Falaknuma Palace, both former
                    Nizam residences, add further Nizami-era grandeur to a
                    museum day.
                  </p>
                  <h3>Hussain Sagar & Necklace Road</h3>
                  <p>
                    A large lake at the heart of the city, with a monolithic
                    Buddha statue standing on Gibraltar rock at its centre.
                    Necklace Road running along the shore is a popular
                    evening walking and boating spot.
                  </p>
                  <h3>Ramoji Film City</h3>
                  <p>
                    One of the world's largest film studio complexes on the
                    city's edge, developed into a full-day theme-park-style
                    attraction with film sets, gardens, and shows — worth
                    setting aside a dedicated day for if you're not
                    short on time.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Hyderabad</h2>
                  <p>
                    Banjara Hills and Jubilee Hills suit mid-range and luxury
                    travellers who want easy restaurant and mall access,
                    while staying near the Old City puts Charminar and
                    Golconda within easy reach at a more traditional, busier
                    pace.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Guesthouses near the Old City",
                          "Budget chains, Abids/Nampally",
                          "Backpacker stays, Secunderabad",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Business hotels, Banjara Hills",
                          "Mid-range chains, Jubilee Hills",
                          "Boutique heritage stays, Old City",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Falaknuma Palace",
                          "Premium 5-star chains",
                          "Lakeview luxury properties, Hussain Sagar",
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
                  <h2>Suggested Visit Plan (3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Old City",
                        color: "bg-amber-700",
                        activities: [
                          "Charminar and Laad Bazaar",
                          "Mecca Masjid",
                          "Evening: Golconda Fort sound-and-light show",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Museums & Lake",
                        color: "bg-sky-600",
                        activities: [
                          "Salar Jung Museum",
                          "Chowmahalla Palace",
                          "Hussain Sagar and Necklace Road",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Ramoji Film City",
                        color: "bg-forest-600",
                        activities: [
                          "Full day at Ramoji Film City",
                          "Evening biryani trail",
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
                    * With more time, extend into a full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana circuit
                    </Link>{" "}
                    covering Warangal and the temple towns.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Hyderabad</h2>
                  <ul>
                    <li>
                      <strong>Hyderabadi Biryani:</strong> Dum-cooked, with
                      marinated meat and part-cooked rice sealed and slow
                      cooked together — best tried at an established Old
                      City institution rather than a generic restaurant.
                    </li>
                    <li>
                      <strong>Irani Chai & Osmania Biscuits:</strong> Strong,
                      milky tea with a slightly salty-sweet biscuit at one of
                      the city's old Irani cafes — a genuine Hyderabad
                      institution.
                    </li>
                    <li>
                      <strong>Haleem:</strong> A rich, slow-cooked
                      meat-and-wheat stew, especially prominent during
                      Ramadan but available at specialist counters
                      year-round.
                    </li>
                    <li>
                      <strong>Old City street food:</strong> The lanes around
                      Charminar have a dense concentration of kebab, biryani,
                      and sweet shops worth grazing through on foot.
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
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Local transport/day", "₹300", "₹800", "₹2,000"],
                          ["Entry fees (Golconda/museums)", "₹100", "₹300", "₹500"],
                          ["Ramoji Film City (per person)", "₹1,200", "₹1,800", "₹3,000"],
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
                    * Figures are per person, per day, excluding flights.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Hyderabad</h2>
                  <ul>
                    <li>
                      <strong>Visit the Old City early or in the evening:</strong>{" "}
                      Charminar and Laad Bazaar get crowded and hot by midday
                      — early morning or evening light is far more pleasant.
                    </li>
                    <li>
                      <strong>Dress modestly near mosques and temples:</strong>{" "}
                      Charminar's mosque and other religious sites expect
                      modest clothing.
                    </li>
                    <li>
                      <strong>Book Golconda's evening show ahead in peak season:</strong>{" "}
                      The sound-and-light show is popular and can sell out on
                      weekends and holidays.
                    </li>
                    <li>
                      <strong>Watch belongings in Laad Bazaar:</strong> The
                      market gets genuinely crowded — keep valuables secure.
                    </li>
                    <li>
                      <strong>Try more than one biryani spot:</strong>{" "}
                      Hyderabadis are famously opinionated about which house
                      does it best — sampling two or three is part of the
                      experience.
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
                          "Visit Golconda Fort's sound-and-light show in the evening",
                          "Try biryani at more than one Old City institution",
                          "Dress modestly near mosques and temples",
                          "Book Ramoji Film City tickets in advance",
                          "Explore the Old City on foot for the full bazaar experience",
                          "Set aside a full day for Ramoji if you visit",
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
                          "Visit the Old City at peak midday heat",
                          "Rush Golconda Fort — the climb and history need time",
                          "Leave Ramoji Film City for a half day if you go",
                          "Skip an established biryani house for a generic one",
                          "Carry excess valuables into crowded bazaars",
                          "Underestimate Hyderabad's summer heat (Apr–Jun)",
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
                    <strong>🗺️ Extend the trip:</strong> Hyderabad pairs
                    naturally with a Kakatiya-heritage day trip to{" "}
                    <Link href="/blog/warangal-travel-guide">Warangal</Link>,
                    or a temple detour to{" "}
                    <Link href="/blog/yadadri-travel-guide">Yadadri</Link>.
                    See our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
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
                {[
                  "Hyderabad",
                  "Telangana",
                  "Charminar",
                  "Golconda Fort",
                  "Biryani",
                  "Nizam Heritage",
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

              <RelatedPostsGrid currentSlug="hyderabad-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="hyderabad-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
