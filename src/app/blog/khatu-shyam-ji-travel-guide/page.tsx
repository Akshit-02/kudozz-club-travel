// src/app/blog/khatu-shyam-ji-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Khatu Shyam Ji Guide: Temple & Best Time",
  description:
    "Complete Khatu Shyam Ji guide — the Shyam Baba/Barbarika legend, temple rituals, the Falgun Mela, how to reach from Jaipur, crowd tips, and a full pilgrimage visit plan.",
  keywords:
    "Khatu Shyam Ji travel guide, Shyam Baba temple, Barbarika legend, Khatu Shyam Ji Sikar, Falgun Mela Khatu, how to reach Khatu Shyam Ji from Jaipur, Rajasthan pilgrimage sites",
  openGraph: {
    title: "Khatu Shyam Ji Guide: Temple & Best Time",
    description:
      "One of Rajasthan's most heavily visited pilgrimage towns, built around the legend of Barbarika's ultimate sacrifice — the complete Khatu Shyam Ji guide.",
    url: "https://club.kudozz.in/blog/khatu-shyam-ji-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/gokarna/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A devotional temple town setting, evoking the pilgrimage atmosphere of Khatu Shyam Ji in Rajasthan",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Khatu Shyam Ji Guide: Temple & Best Time",
    description:
      "The legend of Barbarika, an intensely devotional atmosphere, and one of Rajasthan's biggest pilgrimage crowds — the complete Khatu Shyam Ji guide.",
    images: ["/images/destinations/gokarna/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/khatu-shyam-ji-travel-guide",
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
          headline: "Khatu Shyam Ji Guide: Temple & Best Time",
          description:
            "Complete Khatu Shyam Ji guide — the Shyam Baba/Barbarika legend, temple rituals, the Falgun Mela, how to reach from Jaipur, crowd tips, and a full pilgrimage visit plan.",
          image: "https://club.kudozz.in/images/destinations/gokarna/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/khatu-shyam-ji-travel-guide",
          },
          keywords:
            "Khatu Shyam Ji, Shyam Baba, Barbarika, Sikar, Rajasthan, pilgrimage, Falgun Mela",
          about: {
            "@type": "Place",
            name: "Khatu Shyam Ji",
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
                name: "Khatu Shyam Ji",
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
    q: "Who is Shyam Baba / Barbarika?",
    a: "Shyam Baba is worshipped as a form of Barbarika, the grandson of Bhima from the Mahabharata, revered for a legend of ultimate selfless sacrifice — offering his own head to Krishna so he could witness the Kurukshetra war. This story is central to the devotion visitors witness at the temple.",
  },
  {
    q: "When is the Falgun Mela?",
    a: "The Falgun Mela is held annually, typically in February or March (the Hindu month of Falgun), and is the temple's biggest devotional event, drawing enormous crowds from across North India.",
  },
  {
    q: "How far is Khatu Shyam Ji from Jaipur?",
    a: "A few hours by road or rail, making it accessible as a day trip or a focused overnight pilgrimage visit from Jaipur.",
  },
  {
    q: "How crowded does it get?",
    a: "Very crowded, especially on Ekadashi days throughout the year and during the Falgun Mela — expect long queues and a genuinely intense devotional atmosphere rather than a quiet sightseeing visit.",
  },
  {
    q: "What should I expect from a visit here?",
    a: "An energetic, deeply devotional atmosphere with continuous bhajan and kirtan (devotional singing) among pilgrims — even by the standards of Indian pilgrimage towns, Khatu Shyam Ji's atmosphere is notably intense and worth experiencing as a cultural moment, not just a temple visit.",
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
  { id: "introduction", title: "The Legend of Shyam Baba", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Khatu Shyam Ji", level: 2 },
  { id: "things-to-do", title: "The Temple, Rituals & Falgun Mela", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KhatuShyamJiGuidePage() {
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
              src="/images/destinations/gokarna/hero.jpg"
              alt="A devotional temple town setting, evoking the pilgrimage atmosphere of Khatu Shyam Ji in Rajasthan"
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
                { label: "Khatu Shyam Ji", href: null },
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
              {["Khatu Shyam Ji", "Shyam Baba", "Pilgrimage", "Rajasthan"].map(
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
              Khatu Shyam Ji: Temple & Pilgrimage Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A legend of ultimate sacrifice, waves of devotional song, and
              one of the most intensely visited pilgrimage towns in
              Rajasthan — Khatu Shyam Ji is a genuine sensory experience.
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
                  text: "Sikar district, Rajasthan",
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
                  <h2>The Legend of Shyam Baba</h2>
                  <p>
                    <strong>Khatu Shyam Ji</strong> is a major pilgrimage
                    town in Sikar district, centred on the Khatu Shyam Ji
                    Temple, dedicated to <strong>"Shyam Baba"</strong> —
                    worshipped as a form of Barbarika, the grandson of Bhima
                    from the Mahabharata.
                  </p>
                  <p>
                    The devotion here traces to a well-known legend of
                    ultimate selfless sacrifice: Barbarika offering his own
                    head to Krishna so he could witness the Kurukshetra war
                    unfold. That story of total surrender is central to why
                    the temple holds such intense devotional significance
                    for millions of visitors.
                  </p>
                  <p>
                    Khatu Shyam Ji is one of the most heavily visited
                    pilgrimage sites in Rajasthan, drawing enormous crowds
                    especially during the annual{" "}
                    <strong>Falgun Mela</strong> and on Ekadashi days
                    throughout the year — the temple and town are known for
                    a particularly intense, devotional style of bhajan and
                    kirtan among visiting devotees, giving the atmosphere a
                    distinctly energetic quality even by the standards of
                    Indian pilgrimage towns.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Khatu Shyam Ji at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Sikar, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "From Jaipur",
                          value: "~3 hours by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Deity",
                          value: "Shyam Baba (Barbarika)",
                        },
                        {
                          icon: "🎉",
                          label: "Major Event",
                          value: "Falgun Mela",
                        },
                        {
                          icon: "🎵",
                          label: "Known For",
                          value: "Bhajan & Kirtan Culture",
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
                  <h2>Best Time to Visit Khatu Shyam Ji</h2>
                  <p>
                    Weather and crowd levels both shape when to plan a
                    visit — and the two often pull in opposite directions.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best weather",
                        text: "Cool, comfortable conditions for the town's queues and walking, outside of festival crowds.",
                      },
                      {
                        season: "Feb – Mar",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Falgun Mela — full atmosphere",
                        text: "The temple's biggest annual event, with an unmatched devotional atmosphere — but expect very large crowds.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around it",
                        text: "Peak heat makes queuing outdoors genuinely uncomfortable; go early morning if visiting this season.",
                      },
                      {
                        season: "Ekadashi Days",
                        emoji: "🙏",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Crowded year-round",
                        text: "These recurring lunar-calendar days draw large crowds throughout the year, regardless of season.",
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
                    <strong>Our pick:</strong> October to February for a
                    calmer visit with good weather, or the Falgun Mela
                    specifically if the full-scale devotional atmosphere is
                    what you're after.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Khatu Shyam Ji</h2>
                  <ul>
                    <li>
                      <strong>By road from Jaipur:</strong> Roughly 3 hours,
                      the most common approach for most pilgrims and
                      visitors.
                    </li>
                    <li>
                      <strong>By rail:</strong> Ringas is the nearest useful
                      railhead, with road transfers covering the remaining
                      distance to Khatu Shyam Ji.
                    </li>
                    <li>
                      <strong>During the Falgun Mela:</strong> Special
                      transport arrangements and shuttle services are
                      typically added given the scale of crowds — check
                      current arrangements if visiting during the mela.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If visiting on a regular
                    Ekadashi day rather than the Falgun Mela, arrive early
                    morning to beat both the heat and the day's queue
                    buildup.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Temple, Rituals & Falgun Mela</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/gokarna/hero.jpg"
                      alt="A devotional pilgrimage town setting evoking Khatu Shyam Ji, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Main Temple</h3>
                  <p>
                    The Khatu Shyam Ji Temple itself is the focus of every
                    visit — arrive prepared for queues, especially during
                    peak darshan hours, and take in the continuous flow of
                    devotees offering prayers to Shyam Baba.
                  </p>
                  <h3>Bhajan & Kirtan Culture</h3>
                  <p>
                    What sets Khatu Shyam Ji apart from many other
                    pilgrimage towns is the sheer intensity of devotional
                    singing that fills the town — groups of pilgrims singing
                    bhajans continuously, creating an atmosphere that's as
                    much about collective devotion as individual darshan.
                  </p>
                  <h3>The Falgun Mela</h3>
                  <p>
                    Held annually around February-March, this is the
                    temple's single biggest event, drawing devotees from
                    across North India for several days of concentrated
                    festival energy — genuinely one of Rajasthan's largest
                    religious gatherings, worth experiencing if crowds don't
                    deter you.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Pilgrim guesthouses (dharamshalas) sit alongside more
                    standard hotel options, and most visitors plan a short,
                    focused stay rather than a lengthy one.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛕",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Dharamshalas (pilgrim guesthouses)",
                          "Basic lodges near the temple",
                          "Simple rooms in the main market",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Standard hotels in town",
                          "Mid-range guesthouses",
                          "Comfortable pilgrim-focused stays",
                        ],
                      },
                      {
                        tier: "Higher-End",
                        icon: "🏙️",
                        range: "Base in Jaipur instead",
                        picks: [
                          "Jaipur heritage hotels",
                          "Business hotels in Jaipur",
                          "Day trip from Jaipur",
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
                        day: "Regular Day",
                        title: "Focused Pilgrimage Visit",
                        color: "bg-amber-700",
                        activities: [
                          "Early morning arrival for darshan",
                          "Explore the temple complex and bhajan atmosphere",
                          "Return to Jaipur or onward the same day",
                        ],
                      },
                      {
                        day: "Falgun Mela",
                        title: "Festival Visit",
                        color: "bg-sky-600",
                        activities: [
                          "Arrive early given the scale of crowds",
                          "Plan for extended queues and festival energy",
                          "Consider a nearby overnight stay rather than a rushed day trip",
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
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Prasad:</strong> Simple temple offerings are
                      widely available and part of the pilgrimage
                      experience.
                    </li>
                    <li>
                      <strong>Vegetarian eateries:</strong> The town's food
                      scene is entirely vegetarian, typical of major
                      pilgrimage towns, with straightforward thali-style
                      meals.
                    </li>
                    <li>
                      <strong>Street stalls near the temple:</strong> Quick,
                      simple snacks for pilgrims moving between queues.
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
                          {["Expense", "Approx. Cost"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Dharamshala stay/night", "₹500–₹1,200"],
                          ["Food/day", "₹300–₹700"],
                          ["Transport from Jaipur (round trip)", "₹1,500–₹3,500"],
                          ["Temple donations (optional)", "As you wish"],
                        ].map(([exp, c], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {c}
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
                    * A genuinely low-cost pilgrimage visit — the temple
                    itself has no fixed entry fee.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Khatu Shyam Ji</h2>
                  <ul>
                    <li>
                      <strong>Plan around crowd peaks:</strong> Ekadashi
                      days and the Falgun Mela bring dramatically larger
                      crowds — decide in advance whether that energy appeals
                      or a quieter day suits you better.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> As with any major
                      temple, conservative clothing is expected.
                    </li>
                    <li>
                      <strong>Be prepared for long queues:</strong>{" "}
                      Especially during peak pilgrimage periods, darshan can
                      involve a genuine wait.
                    </li>
                    <li>
                      <strong>Arrive early:</strong> Morning visits are
                      generally calmer than midday or evening, even on
                      regular days.
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
                          "Arrive early morning for a calmer darshan",
                          "Dress modestly out of respect for the pilgrimage setting",
                          "Learn the Barbarika legend before visiting for context",
                          "Plan around the Falgun Mela if you want the full festival energy",
                          "Try the temple prasad as part of the experience",
                          "Stay in a dharamshala for an authentic pilgrim experience",
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
                          "Visit an Ekadashi day expecting light crowds",
                          "Underestimate queue times during the Falgun Mela",
                          "Dress casually or immodestly near the temple",
                          "Expect a non-vegetarian food scene in town",
                          "Rush the visit without appreciating the devotional atmosphere",
                          "Skip planning transport ahead during mela season",
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
                    <strong>🗺️ Extend the trip:</strong> Khatu Shyam Ji works
                    well as a focused pilgrimage detour from Jaipur. See our
                    full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
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
                {["Khatu Shyam Ji", "Shyam Baba", "Rajasthan", "Pilgrimage"].map(
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

              <RelatedPostsGrid currentSlug="khatu-shyam-ji-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="khatu-shyam-ji-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
