// src/app/blog/tamenglong-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tamenglong Travel Guide: Orange Hills of Zeliangrong Country",
  description:
    "Complete Tamenglong travel guide — the misty Zeliangrong hill country of western Manipur, the famous Tamenglong orange and its November Orange Festival, waterfalls, Zeilad Lake, Tharon Cave, how to reach, and full trip planning.",
  keywords:
    "Tamenglong travel guide, Tamenglong Manipur, Tamenglong Orange Festival, Zeliangrong hills, Zeme Liangmai Rongmei, Tamenglong orange, Manipur off-beat destinations, Zeilad Lake, Tharon Cave, how to reach Tamenglong, Inner Line Permit Manipur",
  openGraph: {
    title: "Tamenglong Travel Guide: Orange Hills of Zeliangrong Country",
    description:
      "Misty forested hills, a citrus variety worth a festival of its own, and a homeland of the Zeliangrong Naga peoples — the complete guide to Tamenglong.",
    url: "https://club.kudozz.in/blog/tamenglong-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Misty green forested hills with orange orchards, evoking Tamenglong's cool Zeliangrong hill country in Manipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamenglong Travel Guide: Orange Hills of Zeliangrong Country",
    description:
      "Misty hills, a citrus variety worth a festival, and Zeliangrong Naga heritage — the complete Tamenglong guide.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tamenglong-travel-guide",
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
          headline: "Tamenglong Travel Guide: Orange Hills of Zeliangrong Country",
          description:
            "Complete Tamenglong travel guide — the misty Zeliangrong hill country of western Manipur, the Tamenglong orange, Orange Festival, waterfalls, and full trip planning.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/tamenglong-travel-guide",
          },
          keywords: "Tamenglong, Manipur, Zeliangrong, Orange Festival, Zeilad Lake",
          about: {
            "@type": "Place",
            name: "Tamenglong",
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
                name: "Tamenglong",
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
    q: "What is Tamenglong famous for?",
    a: "Tamenglong is best known for the Tamenglong orange, a well-regarded local citrus variety celebrated at an annual Orange Festival, and for being the homeland of the Zeliangrong Naga peoples — the Zeme, Liangmai, and Rongmei communities. Its misty, forested hill country also holds a number of locally known waterfalls, Zeilad Lake, and Tharon Cave.",
  },
  {
    q: "When is the Tamenglong Orange Festival held?",
    a: "It's usually held around November-December, timed to the local orange harvest, and is the best single occasion to combine sightseeing with local culture, food, and produce.",
  },
  {
    q: "How far is Tamenglong from Imphal, and how do I get there?",
    a: "Roughly 130-160 km by road, mostly on hill roads that can be slow going regardless of vehicle — budget a half-day or more for the drive. Most visitors travel via Imphal, hiring a car or shared vehicle, since public transport options thin out considerably once you leave the valley.",
  },
  {
    q: "What is the best time to visit Tamenglong?",
    a: "October to April is the most reliable window — the monsoon (roughly June to September) makes the hill roads considerably harder going and can affect visibility on the drive up. The Orange Festival, usually around November-December, is a good time to plan around if it fits your schedule.",
  },
  {
    q: "Is Tamenglong safe to visit?",
    a: "Parts of Manipur have periodically seen security-related travel advisories, so check current government advisories before finalizing plans, stick to well-established routes, travel with a local guide or operator, and avoid traveling after dark in this district. Visitors from outside Manipur also need an Inner Line Permit, in effect since December 2019, which is straightforward to arrange in advance.",
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
  { id: "introduction", title: "Zeliangrong Hill Country", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tamenglong", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TamenglongGuidePage() {
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
              src="/images/destinations/coorg/coorg.jpg"
              alt="Misty green forested hills with orange orchards, evoking Tamenglong's cool Zeliangrong hill country in Manipur"
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
                { label: "Tamenglong", href: null },
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
              {["Manipur", "Tamenglong", "Zeliangrong", "Off-beat"].map(
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
              Tamenglong: Orange Hills of Zeliangrong Country
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Misty, forested hills in western Manipur, a citrus fruit
              celebrated with its own annual festival, and the homeland of
              the Zeliangrong Naga peoples — one of Northeast India's
              genuinely offbeat hill destinations.
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
                  text: "Western Manipur hills",
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
                  <h2>Zeliangrong Hill Country</h2>
                  <p>
                    <strong>Tamenglong</strong> is the district headquarters
                    town of one of the most forested and least-visited
                    corners of <Link href="/blog/manipur-travel-guide">Manipur</Link>
                    's hill country in the west of the state. It sits in
                    what's broadly known as Zeliangrong country — the
                    homeland of the Zeme, Liangmai, and Rongmei Naga
                    communities, whose combined name gives the wider region
                    its identity.
                  </p>
                  <p>
                    The terrain here is genuinely different from the Imphal
                    valley below — cool, green, and often wrapped in mist,
                    with a temperate, almost highland character that
                    surprises first-time visitors used to thinking of
                    Manipur as a lowland state. It's this landscape, along
                    with the town's most famous export, that gives
                    Tamenglong its identity: the <strong>Tamenglong
                    orange</strong>, a well-regarded local citrus variety
                    celebrated every year at the town's Orange Festival.
                  </p>
                  <p>
                    Tamenglong isn't set up for mass tourism — infrastructure
                    is modest and distances between sights are long on slow
                    hill roads — but for travelers interested in offbeat
                    Northeast India, orange orchards, waterfall-chasing, and
                    genuine Naga hill culture, it's a rewarding detour from
                    the more typical Imphal-Loktak Lake circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🍊</span> Tamenglong at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Western Manipur hills",
                        },
                        {
                          icon: "🏘️",
                          label: "Community",
                          value: "Zeliangrong Naga peoples",
                        },
                        {
                          icon: "🚗",
                          label: "From Imphal",
                          value: "~130–160 km",
                        },
                        {
                          icon: "🍊",
                          label: "Known For",
                          value: "Tamenglong Orange",
                        },
                        {
                          icon: "🎉",
                          label: "Orange Festival",
                          value: "~Nov – Dec",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Apr",
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
                  <h2>Best Time to Visit Tamenglong</h2>
                  <p>
                    Tamenglong's hill roads make seasonal timing more
                    important here than in the Imphal valley — the monsoon
                    genuinely changes what's practical to attempt.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The dry season, with far more manageable hill roads and clearer views over the forested valleys — the window most visitors should plan around.",
                      },
                      {
                        season: "Nov – Dec",
                        emoji: "🍊",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Orange Festival season",
                        text: "The Tamenglong Orange Festival usually falls in this window, timed to the harvest — the best single occasion to combine sightseeing with local culture and produce.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — difficult roads",
                        text: "Heavy rain makes the hill roads into Tamenglong considerably harder going, with a real risk of landslides and delays; best avoided unless necessary.",
                      },
                      {
                        season: "May",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Pre-monsoon transition",
                        text: "Warm and increasingly humid ahead of the rains, with roads still generally passable — a reasonable shoulder-season option if needed.",
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
                    <strong>Our pick:</strong> November-December if you can
                    time it around the Orange Festival; otherwise any point
                    October-April for reliably manageable hill roads.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tamenglong</h2>
                  <ul>
                    <li>
                      <strong>Via Imphal:</strong> Almost every visitor
                      routes through{" "}
                      <Link href="/blog/imphal-travel-guide">Imphal</Link>,
                      Manipur's air and road gateway. From there it's
                      roughly 130-160 km by road to Tamenglong, on hill
                      roads that can be slow going regardless of the
                      vehicle — budget the better part of a day for the
                      drive.
                    </li>
                    <li>
                      <strong>By road:</strong> Shared taxis and hired cars
                      run from Imphal; a private vehicle with a driver
                      familiar with the route is the most comfortable and
                      practical option given road conditions.
                    </li>
                    <li>
                      <strong>Inner Line Permit:</strong> Visitors from
                      outside Manipur need an Inner Line Permit (ILP), in
                      effect since December 2019, to enter the state —
                      arrange this in advance online or on arrival at
                      Imphal before heading out to Tamenglong.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange your Inner Line
                    Permit and a local driver or operator before leaving
                    Imphal — Tamenglong's hill roads are far easier with
                    someone who knows the route, and permit paperwork is
                    simplest to sort out in the capital.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Tamenglong</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Misty forested hills in Tamenglong district, Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Tamenglong Orange Orchards</h3>
                  <p>
                    The Tamenglong orange is the town's best-known export —
                    a well-regarded local citrus variety grown across the
                    surrounding hillsides. Visiting during or near harvest
                    season gives you a genuine feel for the local
                    agricultural economy alongside the fruit itself.
                  </p>
                  <h3>The Orange Festival</h3>
                  <p>
                    Held annually, usually around November-December, this
                    festival celebrates the harvest with local food,
                    culture, and produce on display — the single best
                    occasion to visit if your dates allow it.
                  </p>
                  <h3>Waterfall Chasing</h3>
                  <p>
                    Several waterfalls in the hills surrounding Tamenglong
                    are locally known but lightly documented for outside
                    visitors — a genuine draw for offbeat travelers who
                    enjoy discovering lesser-known cascades with the help
                    of local guidance rather than following a well-worn
                    trail.
                  </p>
                  <h3>Zeilad Lake &amp; Tharon Cave (Extensions)</h3>
                  <p>
                    Tamenglong's wider hill country holds two genuinely
                    worthwhile extensions for travelers with a couple of
                    extra days:{" "}
                    <Link href="/blog/zeilad-lake-travel-guide">
                      Zeilad Lake
                    </Link>
                    , a remote and locally sacred lake tucked into the
                    hills, and{" "}
                    <Link href="/blog/tharon-cave-travel-guide">
                      Tharon Cave
                    </Link>
                    , a large limestone cave system. Both make for good
                    multi-day add-ons rather than day trips from
                    Tamenglong town itself, given the distances and road
                    conditions involved.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation in Tamenglong is genuinely limited —
                    expect basic government circuit houses and guesthouses
                    rather than a developed hotel scene, so keep
                    expectations modest and book or confirm ahead.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Basic guesthouses",
                          "Community-run stays",
                        ],
                      },
                      {
                        tier: "Government Stays",
                        icon: "🏛️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "District circuit house",
                          "Tourist lodge (limited rooms)",
                        ],
                      },
                      {
                        tier: "Base in Imphal",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, Imphal",
                          "Better range of amenities",
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
                    Book circuit house or guesthouse rooms ahead through a
                    local contact or operator where possible — availability
                    is limited and walk-in options are unreliable.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2–3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Imphal to Tamenglong",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Imphal",
                          "Slow, scenic drive through the hills",
                          "Arrive, settle in, evening in town",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Orchards & Waterfalls",
                        color: "bg-sky-600",
                        activities: [
                          "Visit orange orchards (seasonal)",
                          "Local waterfall visit with a guide",
                          "Explore Tamenglong town",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Extend or Return",
                        color: "bg-forest-600",
                        activities: [
                          "Optional extension toward Zeilad Lake or Tharon Cave",
                          "Or drive back to Imphal",
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
                  <h2>What to Eat in Tamenglong</h2>
                  <ul>
                    <li>
                      <strong>Tamenglong oranges:</strong> Sweet and
                      distinctive, best eaten fresh during or just after
                      harvest — the town's signature produce.
                    </li>
                    <li>
                      <strong>Local Zeliangrong dishes:</strong> Smoked
                      meats, foraged greens, and fermented preparations
                      typical of Naga hill cuisine, generally simple and
                      home-cooked rather than served in dedicated
                      restaurants.
                    </li>
                    <li>
                      <strong>Carry backup supplies:</strong> Dining options
                      are limited outside the town center, so carry snacks
                      and water for excursions to orchards or waterfalls.
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
                          ["Accommodation/night", "₹600", "₹1,500", "₹3,000"],
                          ["Local guide/driver (per day)", "₹1,200", "₹2,000", "₹3,500"],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
                          ["Car hire from Imphal (round trip)", "₹4,000", "₹6,500", "₹9,000"],
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
                    * Car hire from Imphal is the main variable cost given
                    the distance and hill-road driving time involved.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Tamenglong</h2>
                  <ul>
                    <li>
                      <strong>Arrange your Inner Line Permit ahead of
                      time:</strong> Required for all visitors from outside
                      Manipur since December 2019 — sort this in Imphal
                      before heading out.
                    </li>
                    <li>
                      <strong>Travel with a local guide or operator:</strong>{" "}
                      Especially valuable for reaching waterfalls and
                      orchards, given limited signage and long distances
                      between points of interest.
                    </li>
                    <li>
                      <strong>Check road conditions before departure:</strong>{" "}
                      Hill roads can be affected by weather even outside
                      the monsoon — confirm conditions with a local
                      contact before setting out.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Digital payment
                      acceptance is inconsistent outside Imphal.
                    </li>
                    <li>
                      <strong>Check current advisories:</strong> Parts of
                      Manipur have periodically seen security-related
                      travel advisories, so check current government
                      advisories before finalizing plans, stick to
                      well-established routes, travel with a local guide or
                      operator, and avoid traveling after dark in this
                      district.
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
                          "Arrange your Inner Line Permit before arriving",
                          "Travel with a local guide for waterfalls and orchards",
                          "Check current advisories and road conditions",
                          "Time your visit around the Orange Festival if possible",
                          "Carry cash and basic supplies",
                          "Book stays ahead through a local contact",
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
                          "Attempt the hill roads during heavy monsoon rain",
                          "Travel without confirming your Inner Line Permit",
                          "Expect a developed hotel or dining scene",
                          "Travel after dark in this district",
                          "Rely on cards — carry cash instead",
                          "Head to waterfalls or orchards without local guidance",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Tamenglong
                    with{" "}
                    <Link href="/blog/zeilad-lake-travel-guide">
                      Zeilad Lake
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/tharon-cave-travel-guide">
                      Tharon Cave
                    </Link>{" "}
                    if you have a few extra days, and base your wider trip
                    around{" "}
                    <Link href="/blog/imphal-travel-guide">Imphal</Link>.
                    See our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for the rest of the state.
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
                {["Manipur", "Tamenglong", "Zeliangrong"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="tamenglong-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tamenglong-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
