// src/app/blog/kisama-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kisama Guide: Hornbill Festival Heritage Village",
  description:
    "Complete Kisama guide — the Naga Heritage Village, the annual Hornbill Festival (Dec 1-10), tribal morungs, visiting off-season, how to reach from Kohima, and a full visit plan.",
  keywords:
    "Kisama travel guide, Hornbill Festival, Naga Heritage Village, Nagaland festival, Kisama morung, when is Hornbill Festival, how to reach Kisama, Naga tribal culture",
  openGraph: {
    title: "Kisama Guide: Hornbill Festival Heritage Village",
    description:
      "Every one of Nagaland's tribes, side by side, for ten days each December — the complete guide to Kisama and the Hornbill Festival.",
    url: "https://club.kudozz.in/blog/kisama-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green hills and forest landscape, evoking Kisama's Naga Heritage Village setting",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisama Guide: Hornbill Festival Heritage Village",
    description:
      "Every one of Nagaland's tribes, side by side, for ten days each December — the complete Kisama guide.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kisama-travel-guide",
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
          headline: "Kisama Guide: Hornbill Festival Heritage Village",
          description:
            "Complete Kisama guide — the Naga Heritage Village, the annual Hornbill Festival, tribal morungs, visiting off-season, and how to reach from Kohima.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kisama-travel-guide",
          },
          keywords: "Kisama, Hornbill Festival, Naga Heritage Village, Nagaland",
          about: {
            "@type": "Place",
            name: "Kisama",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nagaland",
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
                name: "Nagaland",
                item: "https://club.kudozz.in/blog/nagaland-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Kisama",
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
    q: "When exactly is the Hornbill Festival?",
    a: "Every year from December 1 to 10, at the Naga Heritage Village in Kisama, roughly 12 km from Kohima. Dates are consistent year to year, making it easy to plan around.",
  },
  {
    q: "Is Kisama worth visiting outside the festival?",
    a: "It's a much quieter experience — the permanent morungs and heritage displays are still open, but without the festival's crowds, live performances, and food stalls. Worth a stop if you're already in the area, but not a dedicated trip.",
  },
  {
    q: "How far is Kisama from Kohima?",
    a: "About 12 km, a short drive of 20-30 minutes depending on traffic during the festival.",
  },
  {
    q: "How far in advance should I book accommodation for the Hornbill Festival?",
    a: "Several months ahead if possible. Rooms across Kohima and the surrounding area fill up quickly given how much regional demand the festival generates.",
  },
  {
    q: "What can I expect to see and eat at the festival?",
    a: "Traditional dance and music performances from every major Naga tribe, craft stalls, traditional games and competitions, and food stalls representing different tribal cuisines — including a well-known chili-eating competition featuring the fiery bhut jolokia.",
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
  { id: "introduction", title: "All of Nagaland, One Venue", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kisama", level: 2 },
  { id: "things-to-do", title: "The Festival & the Morungs", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KisamaGuidePage() {
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
              alt="Green hills and forest landscape, evoking Kisama's Naga Heritage Village setting"
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
                { label: "Nagaland", href: "/blog/nagaland-travel-guide" },
                { label: "Kisama", href: null },
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
                "Kisama",
                "Hornbill Festival",
                "Nagaland",
                "Naga Heritage Village",
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
              Kisama: Hornbill Festival & Naga Heritage Village
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A purpose-built village where every one of Nagaland's major
              tribes gathers each December — one of Northeast India's most
              significant cultural events, ten days at a time.
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
                  text: "Kisama, Nagaland",
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
                  <h2>All of Nagaland, One Venue</h2>
                  <p>
                    <strong>Kisama</strong>, roughly 12 km from{" "}
                    <Link href="/blog/kohima-travel-guide">Kohima</Link>, is
                    home to the <strong>Naga Heritage Village</strong> — a
                    purpose-built venue that hosts the annual{" "}
                    <strong>Hornbill Festival</strong> every December 1-10,
                    one of Northeast India's most significant cultural
                    events. All of Nagaland's major tribes gather here to
                    showcase traditional dance, music, food, crafts, and
                    games in a single location.
                  </p>
                  <p>
                    Each tribe has its own <strong>morung</strong> — a
                    traditional Naga communal house — within the complex,
                    giving visitors a genuine, side-by-side introduction to
                    the diversity of Naga tribal culture in one place. It's
                    a hugely valuable orientation for anyone trying to
                    understand Nagaland's tribal complexity beyond a single
                    town or village.
                  </p>
                  <p>
                    Outside the festival window, Kisama is a much quieter
                    heritage site. The morungs and permanent cultural
                    displays remain open, worth a stop if you're already in
                    the area — but without the festival's energy, crowds,
                    and live performances.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🎪</span> Kisama at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "12 km from Kohima" },
                        {
                          icon: "🎉",
                          label: "Hornbill Festival",
                          value: "Dec 1 – 10",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Dec 1 – 10" },
                        {
                          icon: "🏠",
                          label: "Known For",
                          value: "Tribal Morungs",
                        },
                        {
                          icon: "🎭",
                          label: "Off-Season",
                          value: "Quiet heritage visit",
                        },
                        {
                          icon: "💰",
                          label: "Festival Entry",
                          value: "Modest daily fee",
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
                  <h2>Best Time to Visit Kisama</h2>
                  <p>
                    Timing here is almost entirely about one thing: whether
                    you're coming for the festival itself.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Dec 1 – 10",
                        emoji: "🎉",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — the Hornbill Festival",
                        text: "The clear headline recommendation — every tribe, live performances, food stalls, and crafts, all in one place, once a year.",
                      },
                      {
                        season: "Oct – Nov, Jan – Apr",
                        emoji: "🏛️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Quiet heritage visit",
                        text: "The morungs and permanent displays remain open but without the festival's crowds or performances — set expectations accordingly.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm, pre-monsoon",
                        text: "Manageable weather for a quiet, off-season stop if passing through the area.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon",
                        text: "Heavy rain makes travel around Nagaland's hill roads slower — not the best window even for a quiet visit.",
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
                    <strong>Our pick:</strong> December 1-10, without
                    question — the Hornbill Festival is what makes Kisama
                    worth a dedicated trip rather than a passing stop.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kisama</h2>
                  <ul>
                    <li>
                      <strong>From Kohima:</strong> A short 20-30 minute
                      drive, roughly 12 km — see our{" "}
                      <Link href="/blog/kohima-travel-guide">
                        Kohima travel guide
                      </Link>{" "}
                      for the fuller regional picture.
                    </li>
                    <li>
                      <strong>From Dimapur:</strong> A longer drive of
                      roughly 2.5-3 hours via Kohima, since Dimapur is
                      Nagaland's main airport/rail gateway.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> During the Hornbill
                    Festival, traffic between Kohima and Kisama slows
                    considerably — build extra time into your plans,
                    especially for morning arrivals.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Festival & the Morungs</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forest and hill landscape around Kisama's Naga Heritage Village"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Hornbill Festival Experience</h3>
                  <p>
                    Ten days of traditional dance, music, and craft
                    demonstrations from every major Naga tribe, staged
                    across the Naga Heritage Village grounds. Traditional
                    games and competitions run throughout, including a
                    well-known chili-eating competition featuring the
                    fiery bhut jolokia (ghost pepper) — a genuinely fun
                    spectacle worth timing your visit around if it's
                    running that day.
                  </p>
                  <h3>The Morungs</h3>
                  <p>
                    Each tribe maintains its own morung — a traditional
                    communal house — within the complex, decorated and
                    furnished in that tribe's distinct style. Walking
                    between them gives a genuine sense of just how varied
                    Naga tribal culture is, something easy to miss when
                    visiting only one part of the state.
                  </p>
                  <h3>Food Stalls</h3>
                  <p>
                    During the festival, food stalls representing
                    different tribes serve their distinct cuisines side by
                    side — one of the best ways to sample the range of
                    Naga cooking in a single visit.
                  </p>
                  <h3>Off-Season Visits</h3>
                  <p>
                    Outside the festival, the permanent heritage displays
                    and morung architecture remain open and are worth a
                    short stop if you're in the Kohima area, though the
                    site is considerably quieter without the festival's
                    energy.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Kisama itself has minimal accommodation — nearly all
                    visitors base themselves in{" "}
                    <Link href="/blog/kohima-travel-guide">Kohima</Link>,
                    the short drive away.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses in Kohima",
                          "Tourist lodges",
                          "Homestays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels, Kohima",
                          "Boutique guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium hotels, Kohima",
                          "Festival-season packages",
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
                    Book Hornbill Festival accommodation months in advance
                    — demand across Kohima and the surrounding area far
                    outstrips supply during the ten-day window.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "During Hornbill Festival",
                        title: "A Full Day at Kisama",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early to explore morungs before crowds build",
                          "Watch traditional dance/music performances",
                          "Sample tribal food stalls and browse crafts",
                        ],
                      },
                      {
                        day: "Off-Season",
                        title: "A Short Stop",
                        color: "bg-sky-600",
                        activities: [
                          "Visit the permanent morung displays",
                          "Combine with Kohima sightseeing the same day",
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
                  <h2>What to Eat at Kisama</h2>
                  <ul>
                    <li>
                      <strong>Festival food stalls:</strong> During the
                      Hornbill Festival, different tribes run stalls
                      serving their distinct cuisines side by side — the
                      best way to sample Naga food's range in one visit.
                    </li>
                    <li>
                      <strong>Smoked pork and bamboo shoot dishes:</strong>{" "}
                      Widely available across stalls, a good entry point
                      into Naga cooking.
                    </li>
                    <li>
                      <strong>Off-season:</strong> Very limited food
                      options at the site itself — eat in Kohima before or
                      after your visit.
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
                            "Accommodation/night (Kohima)",
                            "₹1,500",
                            "₹3,500",
                            "₹7,000",
                          ],
                          ["Festival entry/day", "₹100", "₹100", "₹100"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,500",
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
                    * Festival-period accommodation prices in Kohima
                    typically rise well above these baseline figures given
                    demand.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kisama</h2>
                  <ul>
                    <li>
                      <strong>Book months ahead for the festival:</strong>{" "}
                      Accommodation and transport across the region fill
                      up well before December.
                    </li>
                    <li>
                      <strong>Set off-season expectations honestly:</strong>{" "}
                      It will be quiet, not a live cultural spectacle,
                      outside Dec 1-10.
                    </li>
                    <li>
                      <strong>Arrive early during the festival:</strong> To
                      explore morungs before the busiest midday crowds.
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
                          "Book Hornbill Festival travel and stays months ahead",
                          "Arrive early each festival day to beat crowds",
                          "Try food stalls from multiple different tribes",
                          "Ask before photographing performers up close",
                          "Set aside a full day for the festival",
                          "Combine an off-season visit with Kohima sightseeing",
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
                          "Show up during Hornbill Festival without a booking",
                          "Expect a lively spectacle outside the festival window",
                          "Rush through the morungs without reading the context",
                          "Underestimate how spicy chili-competition dishes are",
                          "Skip Kohima as your practical accommodation base",
                          "Forget cash for stalls and crafts",
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
                    <Link href="/blog/kohima-travel-guide">Kohima</Link> and
                    combine Kisama with the{" "}
                    <Link href="/blog/dzukou-valley-travel-guide">
                      Dzukou Valley trek
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      Nagaland travel guide
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
                  "Kisama",
                  "Hornbill Festival",
                  "Nagaland",
                  "Naga Heritage Village",
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

              <RelatedPostsGrid currentSlug="kisama-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kisama-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
