// src/app/blog/yadadri-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yadadri Temple Guide: Darshan, Timings & Tips",
  description:
    "Complete Yadadri (Yadagirigutta) guide — the Lakshmi Narasimha Swamy temple's dramatic gold-plated redevelopment, darshan options, how to reach from Hyderabad, and a full visit plan.",
  keywords:
    "Yadadri travel guide, Yadagirigutta temple, Lakshmi Narasimha Swamy, Yadadri darshan timings, Telangana temples, how to reach Yadadri, Yadadri from Hyderabad, Narasimha Jayanti",
  openGraph: {
    title: "Yadadri Temple Guide: Darshan, Timings & Tips",
    description:
      "An ancient cave shrine rebuilt into one of Telangana's most opulent gold-plated temples — the complete Yadadri guide.",
    url: "https://club.kudozz.in/blog/yadadri-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Ornate temple architecture, evoking Yadadri's Lakshmi Narasimha Swamy temple",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yadadri Temple Guide: Darshan, Timings & Tips",
    description:
      "An ancient cave shrine rebuilt into one of Telangana's most opulent gold-plated temples — the complete Yadadri guide.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/yadadri-travel-guide",
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
          headline: "Yadadri Temple Guide: Darshan, Timings & Tips",
          description:
            "Complete Yadadri (Yadagirigutta) guide — the Lakshmi Narasimha Swamy temple's dramatic gold-plated redevelopment, darshan options, how to reach from Hyderabad, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
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
            "@id": "https://club.kudozz.in/blog/yadadri-travel-guide",
          },
          keywords:
            "Yadadri, Yadagirigutta, Lakshmi Narasimha Swamy, Telangana temples, darshan",
          about: {
            "@type": "Place",
            name: "Yadadri",
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
                name: "Yadadri",
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
    q: "How far is Yadadri from Hyderabad?",
    a: "Yadadri (Yadagirigutta) is roughly 60 km from Hyderabad, about a 90-minute drive or a short train journey — one of the easiest temple day trips from the city.",
  },
  {
    q: "Is Yadadri a day trip from Hyderabad?",
    a: "Yes, most visitors treat Yadadri as a half-day to full-day trip from Hyderabad given the short distance and good road connectivity, rather than staying overnight.",
  },
  {
    q: "What is the dress code at Yadadri temple?",
    a: "Modest, traditional attire is expected — many South Indian temples of this scale specifically encourage traditional dress at the sanctum, so avoid shorts or sleeveless tops and check current guidance before your visit.",
  },
  {
    q: "What is the best time to visit Yadadri?",
    a: "October to February offers the most comfortable weather. The Narasimha Jayanti festival period draws the largest crowds and the most festive atmosphere, but expect significantly longer queues then.",
  },
  {
    q: "Is there a special or VIP darshan at Yadadri?",
    a: "Large, heavily visited temples like Yadadri typically offer paid special-entry darshan tickets alongside free general-queue darshan, letting visitors skip some of the wait — check current ticket counters or the temple's official channels on arrival.",
  },
  {
    q: "What makes Yadadri temple distinctive?",
    a: "Yadadri began as an ancient cave shrine associated with the sage Yada Maharshi, but underwent an extensive redevelopment completed around 2021-2022 that added a massive gold-plated gopuram and vimana — making it one of Telangana's most visually striking and heavily visited temples today.",
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
  { id: "introduction", title: "From Cave Shrine to Golden Temple", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Yadadri", level: 2 },
  { id: "things-to-do", title: "The Temple & Darshan", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function YadadriGuidePage() {
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
              src="/images/destinations/manali/hadimba-temple.jpg"
              alt="Ornate temple architecture, evoking Yadadri's Lakshmi Narasimha Swamy temple"
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
                { label: "Yadadri", href: null },
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
                "Yadadri",
                "Yadagirigutta",
                "Narasimha Temple",
                "Telangana",
                "Pilgrimage",
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
              Yadadri: Darshan, Timings & Complete Temple Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              An ancient cave shrine to Lord Narasimha, rebuilt into one of
              Telangana's most opulent gold-plated temples — and one of the
              easiest, most rewarding day trips from Hyderabad.
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
                  text: "Yadagirigutta, Telangana",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>From Cave Shrine to Golden Temple</h2>
                  <p>
                    <strong>Yadadri</strong>, also known as{" "}
                    <strong>Yadagirigutta</strong>, sits roughly 60 km
                    northeast of Hyderabad and centers on a temple dedicated
                    to <strong>Lakshmi Narasimha Swamy</strong> — Vishnu's
                    man-lion avatar. The site's origins trace to an ancient
                    cave shrine associated with the sage Yada Maharshi, whose
                    name the hill and temple carry to this day.
                  </p>
                  <p>
                    What sets Yadadri apart from most temple towns in{" "}
                    <Link href="/blog/telangana-travel-guide">Telangana</Link>{" "}
                    is the scale of its recent transformation: an extensive
                    redevelopment, largely completed around 2021-2022, added a
                    massive gold-plated gopuram and vimana and significantly
                    expanded the temple complex — turning a modest hill shrine
                    into one of the state's richest and most visually striking
                    temples almost overnight.
                  </p>
                  <p>
                    That contrast — ancient cave-shrine legend meeting a
                    thoroughly modern, opulent rebuild — is a large part of
                    what makes a visit here interesting even beyond the
                    religious significance.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Yadadri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Yadagirigutta, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "From Hyderabad",
                          value: "~60 km, ~90 min",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🕉️",
                          label: "Deity",
                          value: "Lakshmi Narasimha Swamy",
                        },
                        {
                          icon: "✨",
                          label: "Known For",
                          value: "Gold-Plated Gopuram",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹500 – ₹3,000",
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
                  <h2>Best Time to Visit Yadadri</h2>
                  <p>
                    Both weather and crowd levels shift meaningfully across
                    the year at a temple this heavily visited.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for the queue and the walk up to the temple complex, with generally manageable crowds outside festival dates.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — early or evening visits",
                        text: "Daytime heat is significant; plan an early morning or evening darshan rather than a midday visit.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — occasional rain",
                        text: "Generally manageable, though sudden showers can affect the outdoor queue experience.",
                      },
                      {
                        season: "Narasimha Jayanti",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Festival — largest crowds",
                        text: "The most significant festival period for this temple, with by far the biggest crowds and longest waits of the year.",
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
                    <strong>Our pick:</strong> A weekday morning between
                    November and February — cool weather and the shortest
                    queues of the year outside major festival dates.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Yadadri</h2>
                  <p>
                    Yadadri's proximity to Hyderabad makes it one of the most
                    convenient temple visits in the state.
                  </p>
                  <ul>
                    <li>
                      <strong>By road:</strong> Roughly 60 km from Hyderabad
                      via NH163, about a 90-minute drive — the most common way
                      most visitors arrive.
                    </li>
                    <li>
                      <strong>By rail:</strong> Yadadri (Yadagirigutta) has
                      its own railway station with connections from
                      Hyderabad's Secunderabad and Kacheguda stations, useful
                      if you'd rather skip driving.
                    </li>
                    <li>
                      <strong>From the station/parking to the temple:</strong>{" "}
                      A short walk or shuttle covers the final stretch up to
                      the temple complex, depending on where you're dropped.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Go early morning if you want
                    a relatively unhurried darshan — by mid-morning on
                    weekends the queues lengthen considerably.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Temple & Darshan Experience</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Ornate temple detailing typical of Yadadri's rebuilt complex"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Gold-Plated Gopuram & Vimana</h3>
                  <p>
                    The temple's headline feature is its recently rebuilt
                    gopuram and vimana, plated in gold and visible from a
                    considerable distance — a striking sight that has made
                    Yadadri one of the most photographed temples in Telangana.
                  </p>
                  <h3>The Sanctum & Legend</h3>
                  <p>
                    The inner sanctum preserves the site's original
                    cave-shrine character, linked to the legend of sage Yada
                    Maharshi, even as the surrounding structure has been
                    completely modernized.
                  </p>
                  <h3>General & Special Darshan</h3>
                  <p>
                    Like most large, heavily visited South Indian temples,
                    Yadadri typically offers both a free general-queue darshan
                    and paid special-entry tickets that reduce waiting time —
                    check current ticket counters or the temple's official
                    channels for the latest options on arrival.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Most visitors day-trip from Hyderabad rather than staying
                    overnight, but the temple town does have some
                    accommodation for those who prefer an early-morning start
                    on site.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Temple guesthouses/choultries",
                          "Basic lodges near the station",
                          "Simple stays in Yadagirigutta town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Devasthanam-run guesthouses",
                          "Small hotels near the temple road",
                          "Comfortable stays with advance booking",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌇",
                        range: "Base in Hyderabad instead",
                        picks: [
                          "Dedicated luxury stays are limited on-site",
                          "Most premium travelers day-trip from the city",
                          "Combine with a Hyderabad hotel stay",
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
                  <h2>Suggested Visit Plan (Half-Day from Hyderabad)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Drive & Darshan",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Hyderabad early (before 7am ideal)",
                          "Arrive Yadadri, join the darshan queue",
                          "Explore the temple complex and gopuram",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Return or Extend",
                        color: "bg-sky-600",
                        activities: [
                          "Lunch at a local restaurant nearby",
                          "Optional: combine with Warangal en route further east",
                          "Return to Hyderabad by evening",
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
                      <strong>Temple prasadam counters:</strong> Yadadri's
                      annadanam and prasadam services offer simple, freely or
                      cheaply distributed meals for pilgrims.
                    </li>
                    <li>
                      <strong>Local eateries near the temple road:</strong>{" "}
                      Basic vegetarian restaurants cluster near the approach
                      road, convenient for a meal before or after darshan.
                    </li>
                    <li>
                      <strong>Hyderabad on the return leg:</strong> Given the
                      short distance, many visitors save a proper meal for
                      back in the city.
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
                            "Car hire from Hyderabad (round trip)",
                            "₹2,500",
                            "₹3,500",
                            "₹5,000",
                          ],
                          ["Special/VIP darshan ticket", "—", "₹300", "₹500+"],
                          ["Food", "₹200", "₹500", "₹1,000"],
                          ["Prasadam/offerings", "₹100", "₹300", "₹500"],
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
                    * Figures are per group/person as noted; a day trip from
                    Hyderabad rarely needs an overnight budget line.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Yadadri</h2>
                  <ul>
                    <li>
                      <strong>Dress modestly:</strong> Traditional attire is
                      encouraged at the sanctum — avoid shorts or sleeveless
                      tops.
                    </li>
                    <li>
                      <strong>Use footwear deposit counters:</strong> Footwear
                      isn't allowed inside the temple complex; deposit
                      counters near the entrance handle this.
                    </li>
                    <li>
                      <strong>Go early morning or evening:</strong> Avoids
                      both peak heat and the longest queues, especially on
                      weekends.
                    </li>
                    <li>
                      <strong>Consider special darshan tickets:</strong> Worth
                      the modest fee if your time is limited and the general
                      queue looks long.
                    </li>
                    <li>
                      <strong>Check festival dates ahead:</strong> Narasimha
                      Jayanti draws exceptionally large crowds — plan
                      accordingly if visiting during that period.
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
                          "Visit early morning for shorter queues",
                          "Dress in modest, traditional attire",
                          "Consider a special darshan ticket if pressed for time",
                          "Carry an ID for footwear/locker counters",
                          "Check festival dates before planning",
                          "Combine with a relaxed Hyderabad day",
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
                          "Wear shorts or sleeveless tops to the sanctum",
                          "Visit midday during summer without a plan",
                          "Arrive without checking festival-date crowds",
                          "Skip the footwear deposit counter",
                          "Expect a quick visit during Narasimha Jayanti",
                          "Rely on finding parking easily on peak weekends",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Yadadri with{" "}
                    <Link href="/blog/warangal-travel-guide">Warangal</Link>{" "}
                    further along the same highway for a fuller
                    heritage-and-temple route. See our full{" "}
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
                  "Yadadri",
                  "Yadagirigutta",
                  "Narasimha Temple",
                  "Telangana",
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

              <RelatedPostsGrid currentSlug="yadadri-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="yadadri-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
