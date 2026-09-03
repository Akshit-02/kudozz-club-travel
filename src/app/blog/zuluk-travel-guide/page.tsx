// src/app/blog/zuluk-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Zuluk Travel Guide: Old Silk Route & Tips",
  description:
    "Complete Zuluk guide — the 32-hairpin-bend zigzag road, Thambi View Point, homestays on the Old Silk Route, permits, best time, and how to reach from Gangtok.",
  keywords:
    "Zuluk travel guide, Old Silk Route Sikkim, Thambi View Point, Zuluk zigzag road, Zuluk permit, Nathang Valley, how to reach Zuluk, Zuluk homestay",
  openGraph: {
    title: "Zuluk Travel Guide: Old Silk Route & Tips",
    description:
      "A tiny Old Silk Route hamlet famous for a 32-hairpin-bend mountain road and quiet homestay life — the complete Zuluk guide.",
    url: "https://club.kudozz.in/blog/zuluk-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Winding mountain road landscape, evoking Zuluk's famous zigzag route on the Old Silk Route in Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuluk Travel Guide: Old Silk Route & Tips",
    description:
      "A tiny Old Silk Route hamlet famous for a 32-hairpin-bend mountain road and quiet homestay life — the complete Zuluk guide.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/zuluk-travel-guide",
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
          headline: "Zuluk Travel Guide: Old Silk Route & Tips",
          description:
            "Complete Zuluk guide — the 32-hairpin-bend zigzag road, Thambi View Point, homestays on the Old Silk Route, permits, best time, and how to reach from Gangtok.",
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
            "@id": "https://club.kudozz.in/blog/zuluk-travel-guide",
          },
          keywords: "Zuluk, Old Silk Route, Sikkim, Thambi View Point",
          about: {
            "@type": "Place",
            name: "Zuluk",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Sikkim",
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
                name: "Sikkim",
                item: "https://club.kudozz.in/blog/sikkim-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Zuluk",
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
    q: "How far is Zuluk from Gangtok?",
    a: "It's a scenic multi-hour drive, best treated as a full day's journey rather than a quick hop — most visitors stay overnight rather than rushing there and back.",
  },
  {
    q: "Do I need a permit to visit Zuluk?",
    a: "Generally yes, given the region's border-proximity, similar to the permits required for Nathula Pass and Tsomgo Lake. Arrange this through a registered Gangtok travel agent before setting out.",
  },
  {
    q: "What is the 32-hairpin-bend road?",
    a: "It's the dramatic zigzag mountain road below Zuluk village, with around 32 visible switchbacks climbing the mountainside — best viewed in full from Thambi View Point, a well-known lookout above the village.",
  },
  {
    q: "Is Zuluk an overnight trip?",
    a: "Yes, given the drive length and the value of catching dawn and dusk light on the mountains, an overnight in a local homestay is the standard, more rewarding way to visit.",
  },
  {
    q: "What is the best time to visit Zuluk?",
    a: "October to December and March to May offer the clearest mountain views. Winter brings snow that can restrict road access, so check current conditions before planning a winter trip.",
  },
  {
    q: "What kind of accommodation is available in Zuluk?",
    a: "Basic homestays are the norm rather than hotels — this is part of the appeal for travelers seeking a genuine, low-key mountain village experience rather than a shortcoming to work around.",
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
  { id: "introduction", title: "A Hamlet on the Old Silk Route", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach & Permits", level: 2 },
  { id: "things-to-do", title: "The Zigzag Road & Thambi View Point", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ZulukGuidePage() {
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
              alt="Winding mountain road landscape, evoking Zuluk's famous zigzag route on the Old Silk Route in Sikkim"
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
                { label: "Sikkim", href: "/blog/sikkim-travel-guide" },
                { label: "Zuluk", href: null },
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
              {["Zuluk", "Old Silk Route", "Sikkim", "Off-beat"].map((tag) => (
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
              Zuluk: A Hamlet on the Old Silk Route
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A tiny mountain village with a dramatic 32-hairpin-bend road
              below it, and a quiet, homestay-only way of life that most of
              Sikkim's better-known stops have left behind.
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
                  text: "East Sikkim",
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
                  <h2>A Hamlet on the Old Silk Route</h2>
                  <p>
                    <strong>Zuluk</strong> is a tiny hamlet in East Sikkim,
                    at roughly 2,900 m, on the historic Old Silk Route.
                    It's best known for a dramatic zigzag road below the
                    village — around 32 visible hairpin bends
                    switchbacking up the mountainside, best appreciated in
                    full from <strong>Thambi View Point</strong> above.
                  </p>
                  <p>
                    Compared to{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>{" "}
                    or Pelling, Zuluk remains genuinely quiet — basic
                    homestays are the main type of accommodation, and the
                    village functions more as a gateway into the wider Old
                    Silk Route and Nathang Valley than as a
                    tourist-infrastructure destination in its own right.
                  </p>
                  <p>
                    On clear days, views extend toward the Kanchenjunga
                    range, and the region shares the border-proximity
                    permit requirements of places like{" "}
                    <Link href="/blog/nathula-pass-travel-guide">
                      Nathula Pass
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Zuluk at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Altitude", value: "~2,900 m" },
                        {
                          icon: "🛣️",
                          label: "Known For",
                          value: "32-hairpin-bend road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct–Dec, Mar–May" },
                        {
                          icon: "🎫",
                          label: "Requires",
                          value: "Protected Area Permit",
                        },
                        {
                          icon: "🏠",
                          label: "Stay",
                          value: "Homestays only",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹4,000",
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
                  <h2>Best Time to Visit Zuluk</h2>
                  <p>
                    Clear mountain views make or break a Zuluk trip, so
                    seasonal timing matters more here than the distance
                    alone might suggest.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Dec",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear post-monsoon skies give the best odds of unobstructed Kanchenjunga views from Thambi View Point.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Also strong",
                        text: "Good visibility and milder temperatures, before the monsoon sets in.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Cloud cover regularly hides the mountains, and the road conditions can deteriorate.",
                      },
                      {
                        season: "Jan – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Snow — check access",
                        text: "Snowfall can restrict road access at this altitude — confirm current conditions before setting out.",
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
                    <strong>Our pick:</strong> October to December — the
                    most reliable window for clear views of the zigzag
                    road and the mountains beyond it.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Zuluk & Permits</h2>
                  <ul>
                    <li>
                      <strong>From Gangtok:</strong> A scenic multi-hour
                      drive, best treated as a full day's journey given the
                      winding mountain roads.
                    </li>
                    <li>
                      <strong>Permit required:</strong> A Protected Area
                      Permit is generally needed given the region's
                      border-proximity — arrange this in Gangtok in
                      advance.
                    </li>
                    <li>
                      <strong>Vehicle and driver:</strong> A hired vehicle
                      with driver is the standard way to reach Zuluk;
                      self-drive isn't the norm on these roads.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Time your arrival for late
                    afternoon so you catch the light on the zigzag road at
                    Thambi View Point before dusk, then again at dawn the
                    next morning.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Zigzag Road & Thambi View Point</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Mountain switchback road, evoking Zuluk's zigzag route"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The 32-Hairpin-Bend Road</h3>
                  <p>
                    The switchback road below Zuluk is the region's
                    signature sight — a genuinely dramatic stretch of
                    engineering, best seen in full from above rather than
                    only experienced while driving it.
                  </p>
                  <h3>Thambi View Point</h3>
                  <p>
                    The best vantage point over the full zigzag sequence,
                    with Kanchenjunga range views on clear days — a short
                    stop that rewards good timing and good weather.
                  </p>
                  <h3>Old Silk Route & Nathang Valley</h3>
                  <p>
                    With more time, Zuluk serves as a gateway further along
                    the Old Silk Route toward Nathang Valley and other
                    remote East Sikkim spots — worth considering if you
                    have an extra day.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Zuluk</h2>
                  <p>
                    Homestays are the norm here, not hotels — part of what
                    makes Zuluk feel genuinely different from Sikkim's more
                    developed destinations.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Basic Homestay",
                        icon: "🏠",
                        range: "₹1,200–₹2,200/night",
                        picks: [
                          "Family-run village homestays",
                          "Shared or basic private rooms",
                          "Home-cooked meals included",
                        ],
                      },
                      {
                        tier: "Comfort Homestay",
                        icon: "🏡",
                        range: "₹2,500–₹3,800/night",
                        picks: [
                          "Attached-bathroom homestays",
                          "Better heating/bedding",
                          "Full-board meal plans",
                        ],
                      },
                      {
                        tier: "Best Available",
                        icon: "🌄",
                        range: "₹4,000+/night",
                        picks: [
                          "Higher-end village lodges",
                          "Rooms with valley/mountain views",
                          "Limited in number — book ahead",
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
                  <h2>Suggested Visit Plan (2 Days, 1 Night)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Gangtok to Zuluk",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Gangtok with permits and ID ready",
                          "Scenic drive along the Old Silk Route",
                          "Arrive by late afternoon, sunset at Thambi View Point",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sunrise & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Early sunrise views from the village",
                          "Optional extension toward Nathang Valley",
                          "Return drive to Gangtok",
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
                  <h2>What to Eat in Zuluk</h2>
                  <ul>
                    <li>
                      <strong>Homestay meals:</strong> Nearly all food comes
                      from your homestay — simple, home-cooked local fare,
                      typically included in the room rate.
                    </li>
                    <li>
                      <strong>Momos and thukpa:</strong> Common staples,
                      as across the rest of Sikkim.
                    </li>
                    <li>
                      <strong>Carry snacks:</strong> Standalone shops or
                      restaurants are essentially nonexistent — bring your
                      own snacks for the drive.
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
                            "Homestay/night (with meals)",
                            "₹1,200",
                            "₹2,800",
                            "₹4,000",
                          ],
                          ["Permit fee", "₹200", "₹200", "₹200"],
                          [
                            "Vehicle hire (round trip)",
                            "₹4,000",
                            "₹6,500",
                            "₹9,000",
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
                    * Vehicle hire is a round-trip figure from Gangtok, best
                    split across a group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Zuluk</h2>
                  <ul>
                    <li>
                      <strong>Arrange permits in Gangtok:</strong> Do this
                      before departing, not on arrival.
                    </li>
                    <li>
                      <strong>Pack warm layers:</strong> Homestays may have
                      only basic heating.
                    </li>
                    <li>
                      <strong>Set expectations for infrastructure:</strong>{" "}
                      This is genuinely offbeat — simple rooms, limited
                      connectivity, no restaurants.
                    </li>
                    <li>
                      <strong>Time it for dawn and dusk:</strong> The
                      zigzag road looks best in the day's softer light.
                    </li>
                    <li>
                      <strong>Check road conditions in winter:</strong>{" "}
                      Snow can restrict access.
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
                          "Arrange permits in Gangtok before departing",
                          "Stay overnight rather than rushing there and back",
                          "Pack warm layers for basic-heating homestays",
                          "Time your visit for dawn or dusk light",
                          "Embrace the homestay, low-infrastructure experience",
                          "Carry snacks for the drive",
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
                          "Expect hotel-level amenities",
                          "Skip arranging permits in advance",
                          "Travel in winter without checking road conditions",
                          "Rush the visit into a single tight day",
                          "Expect standalone restaurants or shops",
                          "Forget original ID for the permit checkpoint",
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
                    <strong>🗺️ Extend the trip:</strong> Base yourself in{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>{" "}
                    before and after Zuluk, and consider pairing it with a
                    day trip to{" "}
                    <Link href="/blog/tsomgo-lake-travel-guide">
                      Tsomgo Lake
                    </Link>{" "}
                    if your permit and itinerary allow. See our full{" "}
                    <Link href="/blog/sikkim-travel-guide">
                      Sikkim travel guide
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
                {["Zuluk", "Old Silk Route", "Sikkim", "Off-beat"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="zuluk-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="zuluk-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
