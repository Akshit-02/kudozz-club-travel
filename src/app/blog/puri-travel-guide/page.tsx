// src/app/blog/puri-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Puri Travel Guide: Jagannath Temple & Beach",
  description:
    "Complete Puri guide — the Jagannath Temple, the Rath Yatra chariot festival, Puri Beach, Gundicha Temple, how to reach from Bhubaneswar, and a full visit plan.",
  keywords:
    "Puri travel guide, Jagannath Temple, Rath Yatra, Puri Beach, Gundicha Temple, Char Dham, Odisha pilgrimage, how to reach Puri, Puri Bhubaneswar Konark Golden Triangle, Odisha mahaprasad",
  openGraph: {
    title: "Puri Travel Guide: Jagannath Temple & Beach",
    description:
      "One of Hinduism's four holiest pilgrimage sites, a chariot festival that draws millions, and a golden-sand beach — the complete guide to Puri.",
    url: "https://club.kudozz.in/blog/puri-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "Golden sand beach with waves, evoking Puri's stretch of coastline in Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Puri Travel Guide: Jagannath Temple & Beach",
    description:
      "A Char Dham pilgrimage site, a chariot festival watched by millions, and a laid-back beach town — the complete Puri guide.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/puri-travel-guide",
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
          headline: "Puri Travel Guide: Jagannath Temple & Beach",
          description:
            "Complete Puri guide — the Jagannath Temple, the Rath Yatra chariot festival, Puri Beach, Gundicha Temple, how to reach from Bhubaneswar, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
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
            "@id": "https://club.kudozz.in/blog/puri-travel-guide",
          },
          keywords:
            "Puri, Jagannath Temple, Rath Yatra, Odisha, Char Dham, pilgrimage, beach",
          about: {
            "@type": "Place",
            name: "Puri",
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
                name: "Puri",
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
    q: "Can non-Hindus enter the Jagannath Temple?",
    a: "No — non-Hindus are traditionally not permitted inside the main Jagannath Temple sanctum, a long-standing rule strictly enforced at the entrance. Visitors of any faith can still view the temple's exterior, its towering shikhara, and the surrounding old-town streets, and many nearby rooftop cafes offer a view over the temple complex.",
  },
  {
    q: "When is the Rath Yatra?",
    a: "Rath Yatra usually falls in June or July, on a date set by the Hindu lunar calendar. Millions of pilgrims gather to pull the massive wooden chariots through Puri's streets — a genuinely enormous event that requires serious planning around accommodation, crowds, and logistics if you intend to attend.",
  },
  {
    q: "How far is Puri from Bhubaneswar and Konark?",
    a: "Bhubaneswar is roughly 60 km away, about 1.5 hours by road or a short train ride. Konark is closer still, roughly 35 km, making the two easy to combine into a single day trip from Puri or as part of Odisha's classic Golden Triangle circuit.",
  },
  {
    q: "Is Puri Beach good for swimming?",
    a: "Puri Beach is more of a walking, sunrise, and cultural beach than a swimming destination — currents can be strong in places, and it's best enjoyed for its atmosphere, fishing boats, and long sandy stretch rather than serious swimming.",
  },
  {
    q: "What is the best time to visit Puri?",
    a: "October to February offers the most comfortable weather for temple visits and beach walks. If you want the Rath Yatra experience specifically, plan around its June/July dates and expect very large crowds.",
  },
  {
    q: "What is mahaprasad?",
    a: "Mahaprasad is the sacred food prepared and offered at the Jagannath Temple, cooked in enormous earthen pots in one of the largest temple kitchens in the world. It's distributed to devotees and is considered an essential part of the Puri pilgrimage experience — look for it at the Ananda Bazaar market just outside the temple.",
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
  { id: "introduction", title: "One of Hinduism's Four Holiest Sites", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Puri", level: 2 },
  { id: "things-to-do", title: "Jagannath Temple, Rath Yatra & Beach", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PuriGuidePage() {
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
              src="/images/destinations/goa/beach.jpg"
              alt="Golden sand beach with waves, evoking Puri's stretch of coastline in Odisha"
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
                { label: "Puri", href: null },
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
                "Puri",
                "Jagannath Temple",
                "Odisha",
                "Rath Yatra",
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
              Puri Travel Guide: Jagannath Temple & Beach
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of Hinduism's four holiest pilgrimage sites, an annual
              chariot festival that draws millions, and a golden-sand beach
              where pilgrim life and seaside life meet without friction.
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
                  text: "Puri, Odisha",
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
                  <h2>One of Hinduism's Four Holiest Sites</h2>
                  <p>
                    <strong>Puri</strong> is one of the Char Dham — the four
                    most sacred pilgrimage sites in Hinduism — centred on the{" "}
                    <strong>Jagannath Temple</strong>, a massive 12th-century
                    complex dedicated to Lord Jagannath, a form of Krishna.
                    The temple is world-famous for the annual{" "}
                    <strong>Rath Yatra</strong> (Chariot Festival), when the
                    deities are pulled through the streets on enormous wooden
                    chariots before a crowd of millions — one of the largest
                    religious gatherings anywhere on earth.
                  </p>
                  <p>
                    Puri is also a genuine beach town. Puri Beach runs along
                    a long stretch of golden sand, with fishing boats,
                    sunrise walkers, and a laid-back atmosphere that sits
                    comfortably alongside the town's intense devotional
                    energy — a dual identity that makes Puri unlike most
                    other Indian pilgrimage towns.
                  </p>
                  <p>
                    Puri anchors Odisha's celebrated{" "}
                    <strong>Golden Triangle</strong>, alongside{" "}
                    <Link href="/blog/bhubaneswar-travel-guide">
                      Bhubaneswar
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/konark-travel-guide">Konark</Link>,
                    with <Link href="/blog/chilika-lake-travel-guide">
                      Chilika Lake
                    </Link>{" "}
                    a popular day trip from town as well.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Puri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Odisha" },
                        {
                          icon: "🚉",
                          label: "From Bhubaneswar",
                          value: "~60 km / 1.5 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Jagannath Temple, Rath Yatra",
                        },
                        {
                          icon: "🏖️",
                          label: "Also",
                          value: "Puri Beach",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Konark, Chilika Lake",
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
                  <h2>Best Time to Visit Puri</h2>
                  <p>
                    Coastal humidity and the Rath Yatra calendar are the two
                    factors that shape a Puri visit most.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather for both temple sightseeing and long beach walks — the most comfortable window all round.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, coastal humidity",
                        text: "Temperatures and humidity climb, though early-morning temple visits and beach time remain manageable.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — Rath Yatra season",
                        text: "Heavy rain is common, but this window also includes the Rath Yatra (usually Jun/Jul) — a trade-off between weather and festival access.",
                      },
                      {
                        season: "Jun / Jul",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Rath Yatra — huge crowds",
                        text: "Millions gather to pull the chariots through Puri's streets — an extraordinary spectacle, but plan carefully around crowds and accommodation.",
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
                    <strong>Our pick:</strong> October to February —
                    comfortable weather for temple visits, beach walks, and
                    day trips to Konark and Chilika Lake alike.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Puri</h2>
                  <ul>
                    <li>
                      <strong>By Rail:</strong> Puri is a major railway
                      terminus with direct trains from Kolkata, Delhi, and
                      other major cities, as well as frequent short hops from
                      Bhubaneswar.
                    </li>
                    <li>
                      <strong>By Road:</strong> Roughly 60 km from
                      Bhubaneswar, about 1.5 hours by taxi or bus — an easy
                      day-trip distance in either direction.
                    </li>
                    <li>
                      <strong>By Air:</strong> The nearest airport is in
                      Bhubaneswar, with onward road or rail transfer to Puri.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in Puri for a
                    Golden Triangle trip — Konark and Chilika Lake are both
                    easy day trips, and Puri's beach makes for a better
                    evening base than Bhubaneswar.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Jagannath Temple, Rath Yatra & Beach</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Coastal beach scene evoking Puri's shoreline"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Jagannath Temple</h3>
                  <p>
                    The temple's soaring shikhara dominates Puri's skyline.
                    Non-Hindu visitors cannot enter the sanctum, but the
                    temple's exterior, the surrounding old-town lanes, and
                    several rooftop cafes offering views over the complex are
                    all worth exploring regardless.
                  </p>
                  <h3>Rath Yatra</h3>
                  <p>
                    Held annually (usually June/July), Rath Yatra sees the
                    deities pulled through Puri's streets on three enormous
                    wooden chariots, hauled by ropes pulled by thousands of
                    devotees, watched by millions more — one of the largest
                    religious gatherings on the planet.
                  </p>
                  <h3>Puri Beach</h3>
                  <p>
                    A long stretch of golden sand runs along the town's
                    edge, busiest at sunrise and sunset, lined with fishing
                    boats and a relaxed, unhurried local rhythm distinct
                    from more commercial Indian beaches.
                  </p>
                  <h3>Gundicha Temple</h3>
                  <p>
                    The symbolic destination of the Rath Yatra procession,
                    Gundicha Temple sits about 3 km from the main Jagannath
                    Temple and is considered the deities' "garden house" or
                    birthplace in local tradition.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Puri</h2>
                  <p>
                    Accommodation ranges from simple pilgrim guesthouses near
                    the temple to beachfront resorts along the coast.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Pilgrim guesthouses near the temple",
                          "Odisha Tourism lodges",
                          "Basic beachfront lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Beachfront hotels along Marine Drive",
                          "Business hotels near the temple",
                          "Boutique heritage stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏖️",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Premium beach resorts",
                          "5-star chains along the coast",
                          "Private villas with sea views",
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
                        day: "Day 1",
                        title: "Puri Old Town & Beach",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at the Jagannath Temple exterior and old town",
                          "Ananda Bazaar for mahaprasad",
                          "Evening at Puri Beach for sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Konark Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to the Konark Sun Temple",
                          "Chandrabhaga Beach nearby",
                          "Return to Puri by evening",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Chilika Lake",
                        color: "bg-forest-600",
                        activities: [
                          "Drive to Satapada",
                          "Boat safari for dolphins and birdlife",
                          "Return to Puri or onward to Bhubaneswar",
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
                    * This 3-day plan covers the full Golden Triangle circuit
                    — see our{" "}
                    <Link href="/blog/bhubaneswar-travel-guide">
                      Bhubaneswar guide
                    </Link>{" "}
                    if flying in and out of the capital instead.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Puri</h2>
                  <ul>
                    <li>
                      <strong>Mahaprasad:</strong> The sacred food of the
                      Jagannath Temple, cooked in enormous earthen pots and
                      distributed at Ananda Bazaar — an essential part of
                      the Puri experience.
                    </li>
                    <li>
                      <strong>Odia thali:</strong> A full vegetarian or
                      non-vegetarian meal featuring dalma (lentils with
                      vegetables), local greens, and rice — widely available
                      across the old town.
                    </li>
                    <li>
                      <strong>Fresh seafood:</strong> Beachfront shacks and
                      restaurants serve fresh catch, a natural complement to
                      an evening on Puri Beach.
                    </li>
                    <li>
                      <strong>Chhena poda:</strong> A baked cheese dessert
                      that originated in Odisha, worth seeking out at local
                      sweet shops.
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
                            "₹3,000",
                            "₹9,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹700",
                            "₹1,800",
                          ],
                          [
                            "Konark/Chilika day trips",
                            "₹800",
                            "₹1,500",
                            "₹4,000",
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
                    * Figures are per person, per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Puri</h2>
                  <ul>
                    <li>
                      <strong>Non-Hindus cannot enter the temple sanctum:</strong>{" "}
                      This rule is strictly enforced — plan to appreciate the
                      exterior and surrounding streets instead.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Especially near the
                      temple complex and Ananda Bazaar.
                    </li>
                    <li>
                      <strong>Plan carefully for Rath Yatra:</strong> Book
                      accommodation months in advance if attending, and
                      expect extremely large crowds.
                    </li>
                    <li>
                      <strong>Beach currents can be strong:</strong> Treat
                      Puri Beach as a walking and sunrise beach rather than
                      a swimming destination unless in a designated safe
                      area.
                    </li>
                    <li>
                      <strong>Combine with Konark and Chilika Lake:</strong>{" "}
                      Both are easy day trips that round out a Puri stay.
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
                          "Try mahaprasad at Ananda Bazaar",
                          "Watch sunrise or sunset on Puri Beach",
                          "Combine with Konark and Chilika Lake day trips",
                          "Dress modestly near the temple",
                          "Book well ahead for Rath Yatra dates",
                          "Explore the old-town streets around the temple",
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
                          "Attempt to enter the temple sanctum as a non-Hindu",
                          "Swim in unmarked or unsupervised areas",
                          "Arrive during Rath Yatra without a booking",
                          "Rush Konark — allow real time for the carvings",
                          "Wear revealing clothing near the temple",
                          "Skip Chilika Lake if you have an extra day",
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
                    <strong>🗺️ Extend the trip:</strong> Puri anchors
                    Odisha's Golden Triangle alongside{" "}
                    <Link href="/blog/bhubaneswar-travel-guide">
                      Bhubaneswar
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/konark-travel-guide">Konark</Link>,
                    with{" "}
                    <Link href="/blog/chilika-lake-travel-guide">
                      Chilika Lake
                    </Link>{" "}
                    a natural add-on. See our full{" "}
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
                  "Puri",
                  "Jagannath Temple",
                  "Odisha",
                  "Rath Yatra",
                  "Heritage",
                  "Pilgrimage",
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

              <RelatedPostsGrid currentSlug="puri-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="puri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
