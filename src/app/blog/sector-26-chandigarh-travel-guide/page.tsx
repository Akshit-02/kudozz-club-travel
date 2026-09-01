// src/app/blog/sector-26-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sector 26 Chandigarh Guide: Grain Market Food Street & Mandi",
  description:
    "Complete guide to Sector 26, Chandigarh — home to the city's most famous late-night food street, the Grain Market, plus the wholesale fruit and vegetable mandi. What to eat, when to go, and how to reach.",
  keywords:
    "Sector 26 Chandigarh, Grain Market Chandigarh, Sector 26 food street, Chandigarh butter chicken, Sector 26 mandi, Chandigarh night food, best food Chandigarh, Sector 26 dhaba, Chandigarh Punjabi food",
  openGraph: {
    title: "Sector 26 Chandigarh Guide: Grain Market Food Street & Mandi",
    description:
      "Dozens of dhabas serving butter chicken and tandoori food deep into the night, next door to the city's wholesale produce mandi — Sector 26 is Chandigarh's food capital.",
    url: "https://club.kudozz.in/blog/sector-26-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A wide, orderly Chandigarh street at dusk, evoking the lit-up dhaba fronts of Sector 26's Grain Market food street",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sector 26 Chandigarh Guide: Grain Market Food Street & Mandi",
    description:
      "Butter chicken, tandoori tikkas, and kulchas late into the night — Chandigarh's best-known food street, next to the city's wholesale mandi.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sector-26-chandigarh-travel-guide",
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
          headline: "Sector 26 Chandigarh Guide: Grain Market Food Street & Mandi",
          description:
            "Complete guide to Sector 26, Chandigarh — home to the city's most famous late-night food street, the Grain Market, plus the wholesale fruit and vegetable mandi.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
          datePublished: "2026-08-31",
          dateModified: "2026-08-31",
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
            "@id": "https://club.kudozz.in/blog/sector-26-chandigarh-travel-guide",
          },
          keywords:
            "Sector 26 Chandigarh, Grain Market Chandigarh, Sector 26 food street, Chandigarh mandi, Chandigarh night food",
          about: {
            "@type": "Place",
            name: "Sector 26, Chandigarh",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chandigarh",
              addressRegion: "Chandigarh",
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
                name: "Chandigarh",
                item: "https://club.kudozz.in/blog/chandigarh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Sector 26",
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
    q: "What is Sector 26 in Chandigarh known for?",
    a: "Sector 26 is best known for its Grain Market food street — a dense cluster of dhabas and restaurants serving Punjabi non-vegetarian food, especially butter chicken, tandoori tikkas, and kulchas, many of them open well into the night. The sector also houses Chandigarh's wholesale fruit and vegetable mandi, giving it a working, trade-hub character alongside its food-destination reputation.",
  },
  {
    q: "What time does the Grain Market food street get busy?",
    a: "The food street picks up in the early evening and stays busy well past midnight — it's genuinely one of the few parts of Chandigarh with a proper late-night food scene. Weekends tend to be busiest, with tables filling up from around 8-9 PM onward.",
  },
  {
    q: "Is Sector 26 vegetarian-friendly?",
    a: "Yes, though the area's reputation is built on non-vegetarian Punjabi food. Most dhabas and restaurants also serve solid vegetarian options — paneer dishes, dal, and kulchas — so vegetarian visitors won't be short of choices, even if the tandoori chicken and butter chicken get most of the attention.",
  },
  {
    q: "Can I visit the Sector 26 mandi as a tourist?",
    a: "You can walk through it, but it's a working wholesale market rather than a sightseeing attraction — expect early-morning trading activity, loading trucks, and a functional, no-frills atmosphere. Most visitors pass through out of curiosity on their way to or from the food street rather than making it a dedicated stop.",
  },
  {
    q: "How far is Sector 26 from Sector 17?",
    a: "Sector 26 is a short drive from Sector 17 — typically 10-15 minutes by auto or cab depending on traffic — making it easy to combine a Sector 17 afternoon with a Sector 26 dinner.",
  },
  {
    q: "Is Sector 26 safe to visit at night?",
    a: "Yes, it's a well-lit, busy commercial food street with a steady crowd of locals and visitors, and generally considered safe by Chandigarh standards. As with any late-night outing, sticking to well-populated stretches and using app-based cabs for the return trip is the sensible approach.",
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
  { id: "introduction", title: "Chandigarh's Food Sector", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sector 26", level: 2 },
  { id: "grain-market", title: "The Grain Market Food Street", level: 2 },
  { id: "the-mandi", title: "The Wholesale Mandi", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Sector26GuidePage() {
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
              alt="A wide, orderly Chandigarh street at dusk, evoking the lit-up dhaba fronts of Sector 26's Grain Market food street"
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
                { label: "Chandigarh", href: "/blog/chandigarh-travel-guide" },
                { label: "Sector 26", href: null },
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
                "Sector 26",
                "Chandigarh",
                "Grain Market",
                "Street Food",
                "Night Food",
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
              Sector 26, Chandigarh: Grain Market Food Street & Mandi
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Dozens of dhabas serving butter chicken and tandoori food deep
              into the night, right next to the city's wholesale fruit and
              vegetable mandi — Sector 26 is where Chandigarh actually eats.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sector 26, Chandigarh",
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
                  <h2>Chandigarh's Food Sector</h2>
                  <p>
                    <strong>Sector 26</strong> is not a sightseeing stop in{" "}
                    <Link href="/blog/chandigarh-travel-guide">Chandigarh</Link>{" "}
                    — it's a food destination, and by most locals' accounts,
                    the city's best one. The sector's Grain Market food street
                    is dense with dhabas and restaurants turning out Punjabi
                    non-vegetarian food late into the night, and it sits right
                    beside the city's wholesale fruit and vegetable mandi,
                    which gives the whole area a working, unpolished character
                    that's rare among Chandigarh's carefully planned sectors.
                  </p>
                  <p>
                    Where{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17
                    </Link>{" "}
                    is Chandigarh's shopfront and{" "}
                    <Link href="/blog/sector-22-chandigarh-travel-guide">
                      Sector 22
                    </Link>{" "}
                    is its everyday neighbourhood market, Sector 26 is purely
                    functional — a produce trading hub by day that transforms
                    into a genuinely excellent food street by night. There's
                    no single monument or garden to see here; the entire
                    appeal is sitting down at a dhaba table and eating well.
                  </p>
                  <p>
                    It's an easy add-on to a Chandigarh itinerary rather than
                    a full day out — most visitors treat it as their dinner
                    stop after spending the day at the Rock Garden, Sukhna
                    Lake, or Sector 17.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🍗</span> Sector 26 at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 26, Chandigarh",
                        },
                        {
                          icon: "🍽️",
                          label: "Known For",
                          value: "Grain Market food street",
                        },
                        {
                          icon: "🥕",
                          label: "Also Home To",
                          value: "Wholesale fruit & veg mandi",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free (pay for food)",
                        },
                        {
                          icon: "⏰",
                          label: "Best Hours",
                          value: "7 PM – past midnight",
                        },
                        {
                          icon: "🚗",
                          label: "From Sector 17",
                          value: "~10-15 min drive",
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
                  <h2>Best Time to Visit Sector 26</h2>
                  <p>
                    Unlike most of Chandigarh's attractions, timing here is
                    less about season and almost entirely about time of day —
                    the Grain Market food street is built for evenings.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "7 PM – 10 PM",
                        emoji: "🌆",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak dinner window",
                        text: "The food street is at its liveliest, with most dhabas full and the tandoors working at capacity — arrive a little before 8 PM to beat the rush for a table.",
                      },
                      {
                        season: "10 PM – 1 AM",
                        emoji: "🌙",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Late-night specialty",
                        text: "One of the few genuine late-night food scenes in Chandigarh — a good option if you're arriving late by train or just want food after a long day of sightseeing.",
                      },
                      {
                        season: "Daytime",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Mandi activity, quieter food street",
                        text: "The wholesale mandi is busiest in the morning, but most food stalls are shut or just setting up — daytime is for the produce market, not the restaurants.",
                      },
                      {
                        season: "Weekends",
                        emoji: "🎉",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Busiest, liveliest atmosphere",
                        text: "Friday and Saturday nights draw the biggest crowds — expect a short wait at the most popular dhabas, and consider a weekday visit if you want quicker seating.",
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
                    <strong>Our pick:</strong> a weekday evening around 8 PM —
                    the food street is already in full swing, but you'll get
                    a table faster and enjoy the tandoori smoke and street
                    energy without the weekend crush.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sector 26</h2>
                  <p>
                    Sector 26 sits centrally enough in Chandigarh's grid that
                    it's easy to reach from almost anywhere in the city.
                  </p>
                  <ul>
                    <li>
                      <strong>From Sector 17:</strong> Roughly a 10-15 minute
                      auto or cab ride, making it a natural dinner stop after
                      an afternoon at the plaza.
                    </li>
                    <li>
                      <strong>From Sukhna Lake / Rock Garden:</strong> About
                      15-20 minutes by road, comfortably combined into the
                      same evening.
                    </li>
                    <li>
                      <strong>By app-based cab or auto:</strong> The simplest
                      way to arrive, especially at night — widely available
                      and used to navigating the sector grid.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your return cab or auto
                    before you sit down to eat if you're visiting late at
                    night — availability thins out considerably after
                    midnight.
                  </div>
                </section>

                {/* ── Grain Market ──────────────────────────────────────── */}
                <section id="grain-market">
                  <h2>The Grain Market Food Street</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="A busy, well-lit Chandigarh commercial street at night, evoking the dhaba-lined Grain Market food street in Sector 26"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The Grain Market food street is a tightly packed cluster
                    of dhabas and restaurants, most of them specializing in
                    tandoori Punjabi non-vegetarian food — butter chicken,
                    tandoori chicken, seekh kebabs, and tikkas, cooked on
                    open tandoors right at the street front. Many places stay
                    open well past midnight, which is unusual for Chandigarh
                    and part of why the area has such a strong local
                    following.
                  </p>
                  <p>
                    It's not fine dining — expect plastic chairs, shared
                    tables, and a loud, functional atmosphere — but the food
                    quality is consistently strong across most of the strip,
                    built on decades of regulars rather than tourist traffic.
                    Kulchas and other North Indian breads are a reliable
                    accompaniment, and most dhabas also serve solid
                    vegetarian dishes alongside the meat-heavy menu.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Don't over-plan which dhaba to
                    pick — walk the strip for a few minutes first and go
                    wherever has the busiest tandoor and the most locals
                    already seated. That's usually the best sign of quality
                    here.
                  </div>
                </section>

                {/* ── Mandi ─────────────────────────────────────────────── */}
                <section id="the-mandi">
                  <h2>The Wholesale Mandi</h2>
                  <p>
                    Alongside the food street, Sector 26 is home to
                    Chandigarh's wholesale fruit and vegetable mandi — the
                    market that supplies much of the city's produce trade.
                    It's a working market rather than a tourist attraction:
                    expect crates being loaded and unloaded, brisk early
                    morning trading, and a genuinely functional, no-frills
                    atmosphere that contrasts sharply with the food street's
                    evening buzz just a short walk away.
                  </p>
                  <p>
                    Most visitors won't make a dedicated trip for the mandi
                    alone, but walking through it — especially early morning
                    if you're already up — gives a useful glimpse of the
                    working side of the city that most Chandigarh itineraries
                    never touch.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Sector 26 works best as a focused evening stop rather
                    than a planned "sightseeing block" — here's a simple way
                    to fit it into a Chandigarh day.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Daytime",
                        title: "Sightseeing Elsewhere",
                        color: "bg-sky-600",
                        activities: [
                          "Spend the day at Rock Garden, Sukhna Lake, or the Capitol Complex",
                          "Save your appetite — dhaba portions run generous",
                          "Head toward Sector 26 by early evening",
                        ],
                      },
                      {
                        day: "7-9 PM",
                        title: "Dinner on the Food Street",
                        color: "bg-amber-700",
                        activities: [
                          "Walk the Grain Market strip and pick a busy dhaba",
                          "Order butter chicken, tandoori chicken, and kulchas to share",
                          "Try a vegetarian dish alongside if in a mixed group",
                        ],
                      },
                      {
                        day: "9 PM onward",
                        title: "Linger or Move On",
                        color: "bg-purple-600",
                        activities: [
                          "Stay for a second round or dessert if the night is young",
                          "Book your return cab before the crowd thins out",
                          "Optional: a quick walk past the quieter mandi stalls",
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

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    There's no entry fee anywhere in Sector 26 — your only
                    real spend is food and transport getting there and back.
                  </p>
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
                          ["Entry", "Free", "Free", "Free"],
                          [
                            "Transport to/from",
                            "₹80 (shared auto)",
                            "₹250 (cab, round trip)",
                            "₹500 (private cab, round trip)",
                          ],
                          [
                            "Food per person",
                            "₹250",
                            "₹500",
                            "₹1,200+",
                          ],
                          ["Total (approx.)", "₹330", "₹750", "₹1,700+"],
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
                    * Figures are per person, per visit. See our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a full city budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Sector 26</h2>
                  <ul>
                    <li>
                      <strong>Go hungry:</strong> Dhaba portions are generous
                      and meant for sharing — order fewer dishes than you
                      think you need and add more if necessary.
                    </li>
                    <li>
                      <strong>Cash helps:</strong> Many smaller dhabas prefer
                      cash even though digital payments are increasingly
                      accepted — carry some just in case.
                    </li>
                    <li>
                      <strong>Weekday visits mean shorter waits:</strong>{" "}
                      Weekend nights get genuinely crowded at the
                      best-known spots.
                    </li>
                    <li>
                      <strong>Book your ride back in advance:</strong>{" "}
                      Especially past 11 PM, when auto and cab availability
                      drops.
                    </li>
                    <li>
                      <strong>Pair it with Sector 17 or Sector 22:</strong>{" "}
                      Both are a short drive away and make a natural
                      afternoon-to-evening combination — see our{" "}
                      <Link href="/blog/sector-17-chandigarh-travel-guide">
                        Sector 17 guide
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/sector-22-chandigarh-travel-guide">
                        Sector 22 guide
                      </Link>
                      .
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
                          "Visit in the evening when the food street comes alive",
                          "Walk the strip first before picking a dhaba",
                          "Share dishes across the table, family-style",
                          "Carry some cash for smaller vendors",
                          "Book your return ride ahead if going late",
                          "Combine it with a Sector 17 or Sector 22 stop",
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
                          "Expect a sightseeing attraction — it's a food street",
                          "Arrive during the day expecting the restaurants to be busy",
                          "Show up hungry on a weekend night without a backup plan",
                          "Assume every dhaba accepts cards",
                          "Wait until midnight to think about your ride home",
                          "Skip the vegetarian options — most dhabas do them well too",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Sector 26 with a
                    look at{" "}
                    <Link href="/blog/sector-35-chandigarh-travel-guide">
                      Sector 35
                    </Link>{" "}
                    if you want a second, more contemporary market-and-café
                    stop, or head back toward{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17
                    </Link>{" "}
                    for a nightcap in the city centre.
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
                  "Sector 26",
                  "Chandigarh",
                  "Grain Market",
                  "Street Food",
                  "Night Food",
                  "Butter Chicken",
                  "Chandigarh Food",
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

              <RelatedPostsGrid currentSlug="sector-26-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sector-26-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
