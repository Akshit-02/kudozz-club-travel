// src/app/blog/medaram-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Medaram Jatara Guide: Sammakka Saralamma Festival",
  description:
    "Complete Medaram guide — the biennial Sammakka Saralamma Jatara, one of the world's largest tribal gatherings, the legend behind it, how to reach Mulugu district, and what to expect on and off festival years.",
  keywords:
    "Medaram Jatara, Sammakka Saralamma Jatara, Medaram Telangana, tribal festival India, Mulugu district, Koya community festival, biennial jatara, how to reach Medaram, Dandakaranya forest",
  openGraph: {
    title: "Medaram Jatara Guide: Sammakka Saralamma Festival",
    description:
      "One of the largest tribal gatherings on earth, held once every two years deep in a Telangana forest — the complete guide to Medaram.",
    url: "https://club.kudozz.in/blog/medaram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green forest landscape, evoking the Dandakaranya forest setting of Medaram in Mulugu district, Telangana",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Medaram Jatara Guide: Sammakka Saralamma Festival",
    description:
      "One of the largest tribal gatherings on earth, held once every two years deep in a Telangana forest — the complete Medaram guide.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/medaram-travel-guide",
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
          headline: "Medaram Jatara Guide: Sammakka Saralamma Festival",
          description:
            "Complete Medaram guide — the biennial Sammakka Saralamma Jatara, one of the world's largest tribal gatherings, the legend behind it, how to reach Mulugu district, and what to expect on and off festival years.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/medaram-travel-guide",
          },
          keywords:
            "Medaram, Sammakka Saralamma Jatara, Telangana, tribal festival, Mulugu district, Koya community",
          about: {
            "@type": "Place",
            name: "Medaram",
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
                name: "Medaram",
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
    q: "When is the Medaram Jatara held?",
    a: "The Sammakka Saralamma Jatara is biennial, held once every two years, typically in the Telugu month of Magha (usually falling in February). Since exact dates shift with the lunar calendar, check the current official schedule before planning a trip around the festival itself.",
  },
  {
    q: "Is Medaram worth visiting outside jatara years?",
    a: "It's a genuinely different experience — outside festival years, Medaram is a quiet forest shrine deep in Mulugu district, appealing mainly to those interested in the site's history and setting rather than festival energy. Most travelers visiting purely for atmosphere should plan around the jatara itself.",
  },
  {
    q: "How far is Medaram from Hyderabad and Warangal?",
    a: "Medaram is deep in Mulugu district forest, a long drive from both — figure on a substantial full-day journey from Hyderabad, and a shorter but still significant drive from Warangal, which serves as the more practical base.",
  },
  {
    q: "What is the Sammakka-Saralamma legend?",
    a: "Local tradition holds that Sammakka and Saralamma were a mother and daughter from the Koya tribal community who resisted the oppressive rule of the Kakatiya dynasty centuries ago. They're believed to have disappeared or died in that resistance and were subsequently revered as goddesses, giving rise to the jatara held in their honor.",
  },
  {
    q: "How crowded does the Medaram Jatara get?",
    a: "Extremely — crowd estimates for the four-day festival run into the tens of millions, making it one of the largest tribal gatherings anywhere in the world. Expect major crowd-management arrangements, special transport, and significant congestion if attending.",
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
  { id: "introduction", title: "One of the World's Largest Tribal Gatherings", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Medaram", level: 2 },
  { id: "things-to-do", title: "The Jatara & The Forest Shrine", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MedaramGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Green forest landscape, evoking the Dandakaranya forest setting of Medaram in Mulugu district, Telangana"
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
                { label: "Medaram", href: null },
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
                "Medaram",
                "Telangana",
                "Sammakka Saralamma",
                "Tribal Festival",
                "Mulugu",
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
              Medaram: Sammakka Saralamma Jatara Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Once every two years, tens of millions gather in a Telangana
              forest to honor a mother and daughter revered as goddesses —
              one of the largest tribal gatherings on earth.
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
                  text: "Mulugu district, Telangana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>One of the World's Largest Tribal Gatherings</h2>
                  <p>
                    Deep in the forests of Tadvai mandal, Mulugu district,{" "}
                    <strong>Medaram</strong> hosts the{" "}
                    <strong>Sammakka Saralamma Jatara</strong> — a biennial
                    festival held once every two years, typically around the
                    Telugu month of Magha (usually falling in February). It's
                    genuinely one of the largest gatherings of any kind on
                    earth: crowd estimates for the four-day festival run into
                    the tens of millions, a scale that puts it in the same
                    conversation as India's biggest national pilgrimage
                    events, even though it remains far less known outside the
                    south.
                  </p>
                  <p>
                    The jatara honors <strong>Sammakka</strong> and{" "}
                    <strong>Saralamma</strong>, a mother and daughter local
                    tradition holds were women of the Koya tribal community
                    who resisted the oppressive rule of the Kakatiya dynasty
                    centuries ago. Believed to have disappeared or died in
                    that resistance, they came to be revered as goddesses,
                    and the jatara has grown into a defining event of
                    Telangana's tribal cultural calendar.
                  </p>
                  <p>
                    What matters most for planning a visit is this: the
                    experience is dramatically different depending on whether
                    you arrive during the jatara itself or at any other time.
                    Outside festival years, Medaram is a quiet forest
                    clearing with a modest shrine — visited mainly by those
                    interested in the history and setting rather than
                    festival energy.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Medaram at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Mulugu district, Telangana",
                        },
                        {
                          icon: "📅",
                          label: "Jatara",
                          value: "Biennial, ~Feb (Magha month)",
                        },
                        { icon: "🌡️", label: "Off-Year Visit", value: "Oct – Feb" },
                        {
                          icon: "👥",
                          label: "Jatara Scale",
                          value: "Tens of millions attend",
                        },
                        {
                          icon: "🌳",
                          label: "Setting",
                          value: "Dandakaranya forest",
                        },
                        {
                          icon: "🎯",
                          label: "Nearest Base",
                          value: "Warangal / Mulugu town",
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
                  <h2>Best Time to Visit Medaram</h2>
                  <p>
                    Timing here is really two separate questions: when the
                    jatara itself falls, and when to visit if you're not
                    chasing festival dates.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Jatara Dates",
                        emoji: "🎉",
                        color: "bg-forest-50 border-forest-200",
                        mood: "For the full experience — check current dates",
                        text: "The four-day biennial festival, usually falling in the Telugu month of Magha (around February). Dates shift with the lunar calendar and change every cycle — confirm the current official schedule before planning.",
                      },
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best off-year window",
                        text: "Cool, dry weather makes an off-festival forest visit far more comfortable than Telangana's summer heat or monsoon.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Hot — avoid",
                        text: "Peak summer heat makes the forest region genuinely uncomfortable outside the shaded areas near the shrine.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — lush but difficult",
                        text: "The forest turns green, but rural roads into Mulugu district can become genuinely difficult to travel in heavy rain.",
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
                    <strong>Our pick:</strong> If you want the jatara
                    atmosphere, plan around the current biennial dates
                    (~February) well in advance. For a quiet visit any other
                    year, October to February offers the most comfortable
                    weather.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Medaram</h2>
                  <p>
                    Medaram sits deep inside Mulugu district forest, well off
                    Telangana's main highways.
                  </p>
                  <ul>
                    <li>
                      <strong>Via Warangal:</strong> Warangal is the more
                      practical base and starting point, connected onward to
                      Mulugu district by road — cross-link to the wider{" "}
                      <Link href="/blog/warangal-travel-guide">
                        Warangal guide
                      </Link>{" "}
                      for the fuller Kakatiya-heritage region.
                    </li>
                    <li>
                      <strong>By road from Hyderabad:</strong> A long, full-day
                      drive given the distance and forest roads — plan for a
                      substantial travel day either way.
                    </li>
                    <li>
                      <strong>During the jatara itself:</strong> Expect
                      major crowd-management arrangements, special buses and
                      trains laid on for the occasion, and significant
                      traffic on approach roads — this is not a casual
                      drive-in-drive-out trip during festival days.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If attending the jatara,
                    check official transport and crowd-management
                    arrangements well ahead — special trains and buses are
                    typically the most reliable way in during the festival.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Jatara & The Forest Shrine</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forest landscape near Medaram, Mulugu district, Telangana"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>During the Jatara</h3>
                  <p>
                    Four days of rituals, processions, and an extraordinary
                    concentration of pilgrims — mostly from tribal
                    communities across Telangana and neighboring states —
                    converging on the forest clearing at Medaram. The central
                    ritual involves the symbolic "arrival" of the goddesses,
                    represented by vermillion-filled kumkum bharini pots
                    brought from the surrounding forest, and drawing intense
                    devotion from attendees.
                  </p>
                  <h3>Outside Jatara Years</h3>
                  <p>
                    A markedly quieter experience — the forest shrine sits
                    largely undisturbed, visited by a trickle of pilgrims and
                    those curious about the site's history and setting rather
                    than festival crowds.
                  </p>
                  <h3>The Dandakaranya Forest Setting</h3>
                  <p>
                    Beyond the jatara itself, the surrounding Dandakaranya
                    forest region and its Koya tribal villages offer a
                    glimpse into a part of Telangana most visitors never see,
                    worth combining with nearby Mulugu-district sights like{" "}
                    <Link href="/blog/laknavaram-travel-guide">
                      Laknavaram
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Medaram</h2>
                  <p>
                    Accommodation depends heavily on whether you're visiting
                    during the jatara or not.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "During Jatara",
                        icon: "⛺",
                        range: "Camping / temporary arrangements",
                        picks: [
                          "Temporary pilgrim camps near the site",
                          "Nearby towns (Mulugu, Warangal) if pre-booked",
                          "Formal accommodation essentially unavailable",
                        ],
                      },
                      {
                        tier: "Off-Year: Mulugu",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic guesthouses in Mulugu town",
                          "Government lodges nearby",
                          "Simple stays en route",
                        ],
                      },
                      {
                        tier: "Off-Year: Warangal",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: [
                          "Business hotels, Warangal",
                          "Wider dining and stay options",
                          "Practical base for the whole district",
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
                        day: "Jatara Years",
                        title: "Plan Weeks Ahead",
                        color: "bg-amber-700",
                        activities: [
                          "Confirm official dates and transport arrangements early",
                          "Base in Warangal or Mulugu, travel in for the ritual days",
                          "Expect very large crowds — pace your visit accordingly",
                        ],
                      },
                      {
                        day: "Off-Years",
                        title: "Quiet Mulugu District Loop",
                        color: "bg-sky-600",
                        activities: [
                          "Base in Warangal, drive to Medaram for the forest shrine",
                          "Combine with Laknavaram lake or Bogatha Waterfall nearby",
                          "Return to Warangal same day or overnight in Mulugu",
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
                  <h2>Where to Eat Near Medaram</h2>
                  <ul>
                    <li>
                      <strong>During the jatara:</strong> Countless temporary
                      food stalls spring up around the site, serving simple
                      meals to the huge crowds — expect basic, functional
                      food rather than a restaurant experience.
                    </li>
                    <li>
                      <strong>Off-year visits:</strong> Options are very
                      limited near the shrine itself — carry your own food
                      and water, or plan meals around Mulugu or Warangal.
                    </li>
                    <li>
                      <strong>Warangal:</strong> The nearest town with a
                      proper restaurant scene for a substantial meal before or
                      after visiting Medaram.
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
                            "Accommodation/night (off-year)",
                            "₹800",
                            "₹2,000",
                            "₹4,500",
                          ],
                          [
                            "Car hire from Warangal (round trip)",
                            "₹2,500",
                            "₹4,000",
                            "₹6,000",
                          ],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
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
                    * Figures assume an off-year visit. Jatara-year costs vary
                    widely and formal accommodation pricing largely doesn't
                    apply given the camping-based crowd arrangements.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Medaram</h2>
                  <ul>
                    <li>
                      <strong>Confirm jatara dates well in advance:</strong>{" "}
                      The biennial schedule shifts — check official sources
                      before planning a festival-timed trip.
                    </li>
                    <li>
                      <strong>Prepare for very large crowds:</strong> If
                      attending the jatara, expect intense congestion, basic
                      facilities, and long waits — plan logistics accordingly.
                    </li>
                    <li>
                      <strong>Base in Warangal for an off-year visit:</strong>{" "}
                      The most practical hub for a quiet Mulugu district trip.
                    </li>
                    <li>
                      <strong>Combine with the wider Mulugu district:</strong>{" "}
                      Laknavaram and Bogatha Waterfall sit within reach for a
                      fuller off-year itinerary.
                    </li>
                    <li>
                      <strong>Carry cash and water:</strong> Facilities are
                      minimal outside jatara days.
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
                          "Check the current biennial jatara dates before planning",
                          "Base in Warangal for an off-year visit",
                          "Prepare for major crowds if visiting during the jatara",
                          "Combine an off-year trip with Laknavaram or Bogatha Waterfall",
                          "Carry cash and your own water and snacks",
                          "Respect the site's tribal cultural significance",
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
                          "Expect formal accommodation near the site during the jatara",
                          "Underestimate crowd sizes during festival days",
                          "Travel without confirming current-year dates",
                          "Expect much beyond a quiet forest shrine off-year",
                          "Rely on card payments away from Warangal",
                          "Rush an off-year visit — the forest setting rewards a slower pace",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Medaram with{" "}
                    <Link href="/blog/warangal-travel-guide">Warangal</Link>{" "}
                    and <Link href="/blog/laknavaram-travel-guide">
                      Laknavaram
                    </Link>{" "}
                    for a fuller Mulugu district itinerary. See our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
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
                {[
                  "Medaram",
                  "Sammakka Saralamma Jatara",
                  "Telangana",
                  "Tribal Festival",
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

              <RelatedPostsGrid currentSlug="medaram-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="medaram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
