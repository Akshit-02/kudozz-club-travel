// src/app/blog/andro-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Andro Village Travel Guide: Pottery, Heritage & Temples",
  description:
    "Complete Andro travel guide — Manipur's centuries-old heritage village near Imphal, its hand-built black pottery tradition, Panam Ningthou Temple, the Andro Cultural Complex, and full trip planning.",
  keywords:
    "Andro village Manipur, Andro pottery, Panam Ningthou Temple, Andro Cultural Complex, Manipur heritage village, atingba rice beer, Manipur day trip, Imphal heritage sites",
  openGraph: {
    title: "Andro Village Travel Guide: Pottery, Heritage & Temples",
    description:
      "One of Manipur's oldest heritage villages, where women potters still hand-build black pottery without a wheel — a centuries-old craft found almost nowhere else.",
    url: "https://club.kudozz.in/blog/andro-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "Weathered stone temple complex, evoking Andro village's traditional shrines and heritage architecture",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Andro Village Travel Guide: Pottery, Heritage & Temples",
    description:
      "Centuries-old hand-built pottery, traditional shrines, and a living open-air heritage complex — the complete Andro guide.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/andro-travel-guide",
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
          headline: "Andro Village Travel Guide: Pottery, Heritage & Temples",
          description:
            "Complete Andro travel guide — Manipur's centuries-old heritage village near Imphal, its hand-built black pottery tradition, and the Andro Cultural Complex.",
          image:
            "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/andro-travel-guide",
          },
          keywords: "Andro village, Manipur pottery, Panam Ningthou Temple, heritage village",
          about: {
            "@type": "Place",
            name: "Andro",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Manipur",
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
                name: "Manipur",
                item: "https://club.kudozz.in/blog/manipur-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Andro",
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
    q: "What is Andro village known for?",
    a: "Andro is one of Manipur's oldest heritage villages, roughly 27 km east of Imphal, best known for a centuries-old hand-built black pottery tradition and its open-air Andro Cultural Complex showcasing Manipur's hill tribe heritage.",
  },
  {
    q: "What makes Andro's pottery different?",
    a: "Andro's women potters shape unglazed black pottery using the paddle-and-anvil method, entirely by hand without a potter's wheel — a technique distinct from most Indian pottery traditions and passed down through generations.",
  },
  {
    q: "What is the Andro Cultural Complex?",
    a: "Also called the Andro Craft Complex, it's an open-air heritage site with life-size dioramas and replica huts representing different Manipur hill tribes and their traditional dwellings and customs, alongside displays related to Lai Haraoba folk-performance traditions.",
  },
  {
    q: "Can I stay overnight in Andro?",
    a: "Not really — Andro has no real overnight infrastructure, so it's best visited as a half-day or full-day trip from Imphal, with accommodation back in the city.",
  },
  {
    q: "When is the best time to visit Andro?",
    a: "October to March offers the most pleasant travel weather, though as a low-altitude cultural site it's visitable through most of the year outside the heaviest monsoon downpours.",
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
  { id: "introduction", title: "One of Manipur's Oldest Villages", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "things-to-do", title: "Pottery, Temples & Culture", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Local Hospitality", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AndroGuidePage() {
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
              src="/images/destinations/hampi/virupaksha.jpg"
              alt="Weathered stone temple complex, evoking Andro village's traditional shrines and heritage architecture"
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
                { label: "Manipur", href: "/blog/manipur-travel-guide" },
                { label: "Andro", href: null },
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
              {["Andro", "Manipur", "Heritage Village", "Pottery"].map(
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
              Andro Village: Pottery, Heritage & Temple Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A centuries-old craft still shaped entirely by hand, traditional
              shrines, and an open-air museum of Manipur's hill tribe
              heritage — one of the state's oldest villages, a short drive
              from Imphal.
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
                  text: "27 km from Imphal, Manipur",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>One of Manipur's Oldest Villages</h2>
                  <p>
                    <strong>Andro</strong> sits roughly 27 km east of{" "}
                    <Link href="/blog/imphal-travel-guide">Imphal</Link>, and
                    it's counted among{" "}
                    <Link href="/blog/manipur-travel-guide">Manipur</Link>
                    's oldest heritage villages. Where most day trips out of
                    Imphal center on lakes or forts, Andro's appeal is
                    cultural — a living craft tradition, traditional shrines,
                    and an open-air heritage complex all within a compact,
                    walkable village.
                  </p>
                  <p>
                    The village is best known for its centuries-old
                    hand-built black pottery, made by women potters using a
                    technique that doesn't involve a potter's wheel at all —
                    a genuinely distinct craft within India's broader pottery
                    traditions.
                  </p>
                  <p>
                    Alongside the pottery, Andro is home to the{" "}
                    <strong>Panam Ningthou Temple</strong> complex and the{" "}
                    <strong>Andro Cultural Complex</strong>, making it easy
                    to combine craft, faith, and heritage into a single half-
                    or full-day visit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏺</span> Andro at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "~27 km east of Imphal",
                        },
                        {
                          icon: "🏺",
                          label: "Known For",
                          value: "Hand-built black pottery",
                        },
                        {
                          icon: "⛩️",
                          label: "Landmark",
                          value: "Panam Ningthou Temple",
                        },
                        {
                          icon: "🏛️",
                          label: "Must-See",
                          value: "Andro Cultural Complex",
                        },
                        {
                          icon: "🍶",
                          label: "Local Drink",
                          value: "Atingba (rice beer)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
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
                  <h2>Best Time to Visit Andro</h2>
                  <p>
                    Andro is a low-altitude cultural site, so it's visitable
                    across most of the year — timing mainly comes down to
                    comfort rather than access.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant for walking the village, visiting potters, and touring the temple complex without heat or rain to contend with.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still workable",
                        text: "Temperatures rise ahead of the monsoon, but the village is still visitable comfortably with an early start.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavier rain",
                        text: "Heavy downpours can make village lanes muddy and outdoor viewing less pleasant, though the site itself remains open.",
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
                    <strong>Our pick:</strong> October to March — pleasant
                    walking weather for exploring the village, the pottery
                    workshops, and the temple complex at an unhurried pace.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Andro</h2>
                  <ul>
                    <li>
                      <strong>Via Imphal:</strong> Fly into Imphal, Manipur's
                      main gateway, then travel by road — Andro is roughly
                      27 km east, a manageable drive of under an hour.
                    </li>
                    <li>
                      <strong>By hired car:</strong> Public transport options
                      are limited, so most visitors hire a car with driver
                      for a half-day or full-day round trip from Imphal.
                    </li>
                    <li>
                      <strong>On foot within the village:</strong> Andro
                      itself is compact — once there, the pottery workshops,
                      temple complex, and cultural complex are all within
                      easy walking distance of each other.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Inner Line Permit:</strong> Manipur requires
                    visitors from outside the state to carry an Inner Line
                    Permit (ILP), in effect since December 2019. This applies
                    to your visit to Manipur generally — arrange it before
                    you travel.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Pottery, Temples & Culture</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Traditional stone temple architecture, evoking the shrines at Andro's Panam Ningthou Temple complex"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Andro's Hand-Built Black Pottery</h3>
                  <p>
                    Andro's women potters shape unglazed black pottery using
                    the paddle-and-anvil method — entirely by hand, without a
                    potter's wheel. It's a technique distinct from most
                    Indian pottery traditions, passed down through
                    generations of women in the village, and visitors can
                    watch the process directly at workshops in the village.
                  </p>
                  <h3>Panam Ningthou Temple</h3>
                  <p>
                    A notable cluster of traditional shrines associated with
                    local deity worship, Panam Ningthou Temple is one of
                    Andro's central landmarks and a good introduction to
                    Meitei religious tradition outside Imphal.
                  </p>
                  <h3>Andro Cultural Complex</h3>
                  <p>
                    Also known as the Andro Craft Complex, this open-air
                    heritage site features life-size dioramas and replica
                    huts representing different Manipur hill tribes and
                    their traditional dwellings and customs, alongside
                    displays connected to Lai Haraoba folk-performance
                    traditions — a genuinely worthwhile stop for
                    understanding Manipur's wider tribal heritage in one
                    place.
                  </p>
                  <h3>Atingba — Local Rice Beer</h3>
                  <p>
                    Home-brewed rice beer, locally called <em>atingba</em>,
                    is part of village hospitality and culture — worth
                    trying if offered as part of a respectful, low-key taste
                    of local tradition.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Andro has no real overnight infrastructure, so it's best
                    treated as a half-day or full-day trip from{" "}
                    <Link href="/blog/imphal-travel-guide">Imphal</Link>,
                    with lodging back in the city.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Imphal — Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: ["Guesthouses", "Tourist lodges"],
                      },
                      {
                        tier: "Imphal — Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: ["Business hotels", "Boutique stays"],
                      },
                      {
                        tier: "Imphal — Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Premium business hotels",
                          "Heritage-style stays (limited)",
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

                  <blockquote>
                    Base yourself in Imphal for the whole trip — Andro is a
                    rewarding half or full day out, not an overnight
                    destination.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half/Full Day from Imphal)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Imphal to Andro",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Imphal by hired car (~27 km)",
                          "Arrive in Andro village",
                          "Visit a pottery workshop and watch the paddle-and-anvil technique",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Temple & Cultural Complex",
                        color: "bg-sky-600",
                        activities: [
                          "Panam Ningthou Temple complex",
                          "Andro Cultural Complex — dioramas and replica huts",
                          "Lunch in the village or back en route to Imphal",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Return to Imphal",
                        color: "bg-forest-600",
                        activities: [
                          "Optional stop for local handicrafts",
                          "Drive back to Imphal",
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
                  <h2>Food & Local Hospitality</h2>
                  <ul>
                    <li>
                      <strong>Try atingba if offered:</strong> The village's
                      home-brewed rice beer is part of local hospitality —
                      a respectful way to experience Andro's culture
                      firsthand.
                    </li>
                    <li>
                      <strong>Simple village meals:</strong> A few small
                      eateries in Andro serve basic Manipuri fare, though
                      options are limited compared to Imphal.
                    </li>
                    <li>
                      <strong>Eat properly back in Imphal:</strong> Save a
                      fuller Manipuri meal — eromba, singju, chak-hao kheer —
                      for the city, where variety is far greater.
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
                          ["Car with driver (half-day)", "₹1,200", "₹2,000", "₹3,500"],
                          ["Pottery/craft purchase", "₹200", "₹600", "₹1,500"],
                          ["Imphal hotel/night", "₹1,000", "₹3,000", "₹6,000"],
                          ["Food/day", "₹350", "₹700", "₹1,400"],
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
                    * Buying pottery directly from Andro's potters is a good
                    way to support the local craft tradition.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Andro</h2>
                  <ul>
                    <li>
                      <strong>Carry your Inner Line Permit:</strong> Manipur
                      requires an ILP for visitors from outside the state,
                      in effect since December 2019 — arrange it before
                      travel.
                    </li>
                    <li>
                      <strong>Hire a car with driver:</strong> Public
                      transport to Andro is limited and slow — a private
                      vehicle makes the half-day trip far more practical.
                    </li>
                    <li>
                      <strong>Ask before photographing potters at work:</strong>{" "}
                      It's respectful to seek permission before photographing
                      individual artisans at their workshops.
                    </li>
                    <li>
                      <strong>Support the craft directly:</strong> Buying
                      pottery from the village's potters supports a
                      centuries-old tradition that's increasingly rare.
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
                          "Carry your Inner Line Permit for Manipur",
                          "Hire a car with driver for the day trip",
                          "Watch the paddle-and-anvil pottery technique",
                          "Visit the Andro Cultural Complex for wider context",
                          "Ask permission before photographing artisans",
                          "Buy pottery directly from local potters",
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
                          "Expect overnight stays in Andro itself",
                          "Rely on public transport for the trip",
                          "Skip the ILP paperwork before traveling",
                          "Photograph artisans without asking first",
                          "Rush the visit into under an hour",
                          "Overlook Panam Ningthou Temple nearby",
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
                    <Link href="/blog/imphal-travel-guide">Imphal</Link> and
                    combine Andro with a visit to{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>{" "}
                    on a different day. See our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
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
                {["Manipur", "Andro", "Heritage Village"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="andro-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="andro-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
