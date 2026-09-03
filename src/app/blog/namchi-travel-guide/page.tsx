// src/app/blog/namchi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Namchi Travel Guide: Char Dham & Samdruptse",
  description:
    "Complete Namchi guide — the Char Dham replica pilgrimage complex, the giant Samdruptse Guru Padmasambhava statue, the Rock Garden, how to reach from Gangtok, and a full visit plan.",
  keywords:
    "Namchi travel guide, Char Dham Sikkim, Siddhesvara Dham, Samdruptse statue, Guru Padmasambhava statue Sikkim, South Sikkim, how to reach Namchi, Namchi Rock Garden",
  openGraph: {
    title: "Namchi Travel Guide: Char Dham & Samdruptse",
    description:
      "Two giant statue complexes and a symbolic version of India's four holiest pilgrimage sites, all in one South Sikkim town — the complete Namchi guide.",
    url: "https://club.kudozz.in/blog/namchi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "Grand stone temple architecture, evoking Namchi's large-scale Char Dham and Samdruptse religious monuments",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Namchi Travel Guide: Char Dham & Samdruptse",
    description:
      "A symbolic Char Dham pilgrimage and one of the tallest Guru Padmasambhava statues anywhere — the complete guide to Namchi.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/namchi-travel-guide",
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
          headline: "Namchi Travel Guide: Char Dham & Samdruptse",
          description:
            "Complete Namchi guide — the Char Dham replica pilgrimage complex, the giant Samdruptse Guru Padmasambhava statue, the Rock Garden, how to reach from Gangtok, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
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
            "@id": "https://club.kudozz.in/blog/namchi-travel-guide",
          },
          keywords:
            "Namchi, Char Dham, Samdruptse, Sikkim, South Sikkim, pilgrimage",
          about: {
            "@type": "Place",
            name: "Namchi",
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
                name: "Namchi",
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
    q: "What is Char Dham at Namchi?",
    a: "Char Dham (Siddhesvara Dham) is a large complex that recreates replicas of India's four major Hindu pilgrimage shrines in one place, built around a roughly 108-foot statue of Shiva — letting visitors experience a symbolic version of the full Char Dham pilgrimage without travelling to all four original sites.",
  },
  {
    q: "How tall is the Samdruptse statue?",
    a: "The statue of Guru Padmasambhava (Guru Rinpoche) at Samdruptse Hill stands roughly 135 feet tall, making it one of the tallest statues of him anywhere, set on a hilltop on the edge of Namchi town.",
  },
  {
    q: "How far is Namchi from Gangtok?",
    a: "Roughly 3-4 hours by road, covering about 78 km through South Sikkim's hill roads.",
  },
  {
    q: "Is Namchi a day trip or does it need an overnight stay?",
    a: "Both work — Namchi can be done as a full day trip from Gangtok, or as a one-night stop within a wider South Sikkim loop that also covers Ravangla and Temi Tea Garden.",
  },
  {
    q: "Can Namchi be combined with Ravangla?",
    a: "Yes, they're commonly combined into a single South Sikkim circuit, with Namchi's statue complexes paired with Ravangla's Buddha Park and Temi Tea Garden's terraced hillside.",
  },
  {
    q: "Is there an entry fee for Char Dham and Samdruptse?",
    a: "Both sites typically charge a modest entry fee, with photography generally welcomed at both statue complexes.",
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
  { id: "introduction", title: "Namchi's Pilgrimage Complexes", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Namchi", level: 2 },
  { id: "things-to-do", title: "Char Dham, Samdruptse & Rock Garden", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NamchiGuidePage() {
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
              alt="Grand stone temple architecture, evoking Namchi's large-scale Char Dham and Samdruptse religious monuments"
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
                { label: "Namchi", href: null },
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
              {["Namchi", "Char Dham", "Sikkim", "South Sikkim"].map(
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
              Namchi: Char Dham & the Samdruptse Statue
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A symbolic version of India's four holiest pilgrimage sites,
              and one of the tallest statues of Guru Padmasambhava anywhere
              — both in one South Sikkim town.
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
                  text: "South Sikkim",
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
                  <h2>Namchi's Pilgrimage Complexes</h2>
                  <p>
                    <strong>Namchi</strong>, in South Sikkim at roughly
                    1,675 m, has grown into one of the state's major
                    pilgrimage and heritage destinations through two large,
                    relatively modern developments that now define the
                    town's identity.
                  </p>
                  <p>
                    <strong>Char Dham</strong> (Siddhesvara Dham) recreates
                    replicas of India's four major Hindu pilgrimage shrines
                    within a single complex, built around a giant statue of
                    Shiva roughly 108 feet tall — a way to symbolically
                    complete the full Char Dham pilgrimage without
                    travelling to all four distant original sites.
                  </p>
                  <p>
                    On the edge of town, <strong>Samdruptse Hill</strong>{" "}
                    holds an even taller statue — roughly 135 feet — of{" "}
                    <strong>Guru Padmasambhava</strong> (Guru Rinpoche), the
                    8th-century Buddhist master credited with spreading
                    Buddhism across the Himalayan region, considered one of
                    the tallest statues of him anywhere.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Namchi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Sikkim, ~1,675m",
                        },
                        {
                          icon: "🚗",
                          label: "From Gangtok",
                          value: "~78 km, 3-4 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Char Dham, Samdruptse",
                        },
                        {
                          icon: "📏",
                          label: "Statue Height",
                          value: "108ft & 135ft",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Ravangla, Temi",
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
                  <h2>Best Time to Visit Namchi</h2>
                  <p>
                    Clear weather makes the biggest difference here, both for
                    comfortable sightseeing and for photographing the two
                    large statue complexes.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear, dry, and comfortably cool — the most reliable window for sightseeing at both Char Dham and Samdruptse Hill.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pleasant, greener",
                        text: "Mild temperatures and blooming hillsides, though occasional pre-monsoon showers are possible.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain and the risk of landslides on South Sikkim's hill roads make this a difficult window to visit.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coldest, clearest",
                        text: "The coldest stretch of the year, but often with the clearest skies for photography at both statue sites.",
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
                    <strong>Our pick:</strong> October to February — clear
                    skies and comfortable temperatures make both major sites
                    genuinely pleasant to explore at a relaxed pace.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Namchi</h2>
                  <ul>
                    <li>
                      <strong>By road from Gangtok:</strong> Roughly 78 km,
                      about 3-4 hours, via South Sikkim's hill roads.
                    </li>
                    <li>
                      <strong>Via Bagdogra/NJP:</strong> Reachable directly
                      by road from Bagdogra Airport or New Jalpaiguri
                      railway station, without necessarily routing through
                      Gangtok.
                    </li>
                    <li>
                      <strong>As part of a South Sikkim loop:</strong>{" "}
                      Namchi combines naturally with{" "}
                      <Link href="/blog/ravangla-travel-guide">Ravangla</Link>{" "}
                      and{" "}
                      <Link href="/blog/temi-tea-garden-travel-guide">
                        Temi Tea Garden
                      </Link>{" "}
                      on the same road route.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Both statue complexes
                    involve some uphill walking — comfortable shoes make a
                    real difference over a full day of sightseeing.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Char Dham, Samdruptse & Rock Garden</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Large stone temple towers, evoking Namchi's Char Dham complex"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Char Dham (Siddhesvara Dham)</h3>
                  <p>
                    Replicas of the four major Hindu pilgrimage shrines,
                    arranged around a roughly 108-foot Shiva statue — a
                    genuinely distinctive concept that lets visitors take in
                    a symbolic version of the full Char Dham circuit in a
                    single visit.
                  </p>
                  <h3>Samdruptse Hill</h3>
                  <p>
                    Home to a roughly 135-foot statue of Guru Padmasambhava,
                    considered among the tallest anywhere — reached by a
                    short uphill drive/walk with views over the surrounding
                    hills.
                  </p>
                  <h3>Namchi Rock Garden</h3>
                  <p>
                    A smaller, family-friendly landscaped garden in town,
                    worth a short stop if time allows alongside the two
                    bigger sites.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Namchi</h2>
                  <p>
                    Namchi has a modest but functional range of
                    accommodation, adequate for an overnight stop within a
                    wider South Sikkim itinerary.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses in Namchi town",
                          "Basic lodges near the bus stand",
                          "Simple homestays nearby",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Hotels with hill views",
                          "Sikkim Tourism-affiliated stays",
                          "Boutique guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹4,500–₹9,000+/night",
                        picks: [
                          "Premium hillside resorts",
                          "Full-board South Sikkim packages",
                          "Boutique heritage-style stays",
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
                        day: "Morning",
                        title: "Char Dham",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Gangtok",
                          "Explore the Char Dham replica complex",
                          "Photograph the 108ft Shiva statue",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Samdruptse & Rock Garden",
                        color: "bg-sky-600",
                        activities: [
                          "Drive up to Samdruptse Hill",
                          "View the Guru Padmasambhava statue",
                          "Short stop at the Rock Garden before departure",
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
                    * This works well as a single day trip from Gangtok, or
                    combine it with{" "}
                    <Link href="/blog/ravangla-travel-guide">Ravangla</Link>{" "}
                    and{" "}
                    <Link href="/blog/temi-tea-garden-travel-guide">
                      Temi Tea Garden
                    </Link>{" "}
                    for a fuller South Sikkim loop.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Namchi</h2>
                  <ul>
                    <li>
                      <strong>Hotel/guesthouse kitchens:</strong> Most
                      accommodation serves straightforward Sikkimese and
                      North Indian meals.
                    </li>
                    <li>
                      <strong>Local eateries in town:</strong> Small
                      restaurants around the main market serve momos,
                      thukpa, and standard South Sikkim fare.
                    </li>
                    <li>
                      <strong>Roadside stalls near the statues:</strong>{" "}
                      Quick snacks and tea near both Char Dham and
                      Samdruptse Hill for visitors moving between sites.
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
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹6,500"],
                          ["Car hire from Gangtok (round trip)", "₹3,500", "₹5,000", "₹7,500"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Char Dham entry", "₹30", "₹30", "₹30"],
                          ["Samdruptse Hill entry", "₹30", "₹30", "₹30"],
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
                    round-trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Namchi</h2>
                  <ul>
                    <li>
                      <strong>Allocate time for both sites:</strong> Char
                      Dham and Samdruptse Hill each deserve a proper visit
                      rather than a rushed drive-by.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes:</strong> Both
                      complexes involve some walking on inclines.
                    </li>
                    <li>
                      <strong>Combine with Ravangla and Temi:</strong> A
                      South Sikkim loop makes far better use of the drive
                      time than visiting Namchi in isolation.
                    </li>
                    <li>
                      <strong>Photography is generally welcomed:</strong> At
                      both statue complexes, though be respectful during
                      active worship.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is
                      inconsistent outside the main hotels.
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
                          "Visit both Char Dham and Samdruptse Hill",
                          "Combine with Ravangla and Temi Tea Garden",
                          "Wear comfortable walking shoes",
                          "Carry cash for smaller vendors",
                          "Go in clear weather for the best photos",
                          "Respect active worship at the statue sites",
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
                          "Rush both sites in under an hour",
                          "Visit during heavy monsoon rain",
                          "Rely on cards outside the main hotels",
                          "Skip Ravangla and Temi if you have extra time",
                          "Wear unsuitable footwear for the inclines",
                          "Expect a large standalone restaurant scene",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Namchi with{" "}
                    <Link href="/blog/ravangla-travel-guide">Ravangla</Link>{" "}
                    and{" "}
                    <Link href="/blog/temi-tea-garden-travel-guide">
                      Temi Tea Garden
                    </Link>{" "}
                    for a complete South Sikkim circuit. See our full{" "}
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
                {["Namchi", "Char Dham", "Sikkim", "South Sikkim"].map(
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

              <RelatedPostsGrid currentSlug="namchi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="namchi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
