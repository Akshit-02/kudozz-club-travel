// src/app/blog/gorumara-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Gorumara National Park: Safari, Timings & Tips",
  description:
    "Complete Gorumara National Park guide — rhino and elephant jeep safaris, watchtowers, safari timings, Murti riverside stays, Chapramari sanctuary, and how to plan your visit.",
  keywords:
    "Gorumara National Park, Gorumara safari, Gorumara jeep safari timings, Jatraprasad watchtower, Chukchuki watchtower, Murti river Lataguri, Chapramari Wildlife Sanctuary, one-horned rhinoceros Gorumara, Gorumara best time to visit, Dooars wildlife",
  openGraph: {
    title: "Gorumara National Park: Safari, Timings & Tips",
    description:
      "One of India's most wildlife-dense small parks — one-horned rhinos, elephant herds, and gaur, deep in the Dooars foothills of West Bengal.",
    url: "https://club.kudozz.in/blog/gorumara-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Open grassland and forest edge at Gorumara National Park, Dooars, West Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorumara National Park: Safari, Timings & Tips",
    description:
      "One-horned rhinos, elephant herds, and gaur in one of India's most wildlife-dense small parks — the complete Gorumara guide.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gorumara-travel-guide",
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
          headline: "Gorumara National Park: Safari, Timings & Tips",
          description:
            "Complete Gorumara National Park guide — rhino and elephant jeep safaris, watchtowers, safari timings, Murti riverside stays, Chapramari sanctuary, and how to plan your visit.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/gorumara-travel-guide",
          },
          keywords:
            "Gorumara National Park, one-horned rhinoceros, Jatraprasad watchtower, Chapramari, Murti river, Lataguri, Dooars",
          about: {
            "@type": "Place",
            name: "Gorumara National Park",
            address: {
              "@type": "PostalAddress",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Gorumara National Park",
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
    q: "What animals can I see at Gorumara National Park?",
    a: "Gorumara is best known for its dense population of one-horned rhinoceros, alongside wild elephant herds, gaur (Indian bison), sambar and spotted deer, and occasionally leopards. Its small size relative to other parks in the region actually helps — wildlife density is high, so sightings on a jeep safari are more likely here than in some larger, more spread-out parks.",
  },
  {
    q: "What are the safari timings at Gorumara?",
    a: "Jeep safaris typically run in two windows — early morning (roughly 6-8:30 AM) and late afternoon (roughly 2:30-5 PM) — timed around when animals are most active and light is best for viewing. Exact timings shift slightly with the season, so confirm with your lodge or the forest department gate before finalising plans.",
  },
  {
    q: "When is Gorumara National Park closed?",
    a: "Like most parks in the Dooars, Gorumara closes from mid-June to mid-September for the monsoon and the wildlife breeding season. It reopens gradually through October, with November to April generally offering the best sightings once grass has been cut low.",
  },
  {
    q: "What is the difference between Gorumara and Chapramari?",
    a: "Chapramari Wildlife Sanctuary directly adjoins Gorumara National Park and is often visited as a companion safari — smaller still, and particularly known for elephant sightings along its forest trails. Many visitors do one safari in each over a two-day stay rather than picking just one.",
  },
  {
    q: "How do I book a Gorumara jeep safari?",
    a: "Safaris can be booked through your lodge in Lataguri (the main base town) or directly at the forest department's booking counter, though advance booking is strongly recommended in peak season (November-February) since daily jeep permits are limited.",
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
  { id: "introduction", title: "A Wildlife-Dense Park", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gorumara", level: 2 },
  { id: "things-to-do", title: "Safaris & Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GorumaraGuidePage() {
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
              alt="Open grassland and forest edge at Gorumara National Park, Dooars, West Bengal"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Gorumara National Park", href: null },
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
                "Gorumara National Park",
                "Wildlife Safari",
                "One-Horned Rhino",
                "Dooars",
                "West Bengal",
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
              Gorumara National Park: Safari & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A small but wildlife-dense park in the Dooars foothills —
              one-horned rhinos, wild elephant herds, and gaur, all within
              one of West Bengal's most reliable safari circuits.
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
                  text: "Dooars, West Bengal",
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
                  <h2>A Wildlife-Dense Park</h2>
                  <p>
                    <strong>Gorumara National Park</strong> is small by
                    Indian national park standards — under 80 square
                    kilometres — but that compactness works in its favour.
                    Set in the{" "}
                    <Link href="/blog/dooars-travel-guide">Dooars</Link>{" "}
                    foothill belt of northern{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , its mix of tall grassland and riverine forest packs in
                    one of the region's highest densities of one-horned
                    rhinoceros, alongside wild elephant herds, gaur (Indian
                    bison), and a healthy population of deer that in turn
                    draw the occasional leopard.
                  </p>
                  <p>
                    The park is built around a network of watchtowers rather
                    than sprawling drive circuits — Jatraprasad, Chukchuki,
                    and Medla among the best known — each positioned over
                    grassland or waterholes where sightings are most
                    reliable. Jeep safaris move between these zones, giving
                    a rhythm of driving and quiet watching that suits both
                    serious wildlife photographers and casual visitors.
                  </p>
                  <p>
                    Gorumara sits close enough to Chapramari Wildlife
                    Sanctuary and the Murti riverside that most visitors
                    combine all three in one trip, based out of the small
                    town of Lataguri — read our wider{" "}
                    <Link href="/blog/dooars-travel-guide">
                      Dooars travel guide
                    </Link>{" "}
                    for how Gorumara fits into a longer regional itinerary.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦏</span> Gorumara at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Dooars, West Bengal",
                        },
                        {
                          icon: "🦏",
                          label: "Known For",
                          value: "Rhino & Elephant Density",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Apr" },
                        {
                          icon: "🚫",
                          label: "Closed",
                          value: "Mid-Jun – Mid-Sep",
                        },
                        {
                          icon: "🏘️",
                          label: "Base Town",
                          value: "Lataguri",
                        },
                        {
                          icon: "🚙",
                          label: "From Bagdogra",
                          value: "~75 km",
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
                  <h2>Best Time to Visit Gorumara</h2>
                  <p>
                    As with the rest of the Dooars, the park's own opening
                    calendar shapes timing more than general weather
                    comfort.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather and freshly cut grass give the clearest sightlines of the year — the most reliable window for rhino and elephant sightings.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still good",
                        text: "Temperatures rise but animals concentrate around remaining waterholes, often boosting sightings just before the park closes for the season.",
                      },
                      {
                        season: "Mid-Jun – Mid-Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Park closed",
                        text: "Gorumara closes entirely for the monsoon and animal breeding season — no safaris are available during this window.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌦️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Reopening month",
                        text: "The park reopens gradually after mid-September; grass is initially tall, so visibility and sightings improve as the month progresses.",
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
                    <strong>Our pick:</strong> December to February — low
                    grass and cool, dry conditions make this the season's
                    most reliable window for sightings.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Gorumara</h2>
                  <p>
                    Lataguri, the small town bordering the park, is the
                    practical base for all Gorumara visits.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Bagdogra Airport (IXB) is the
                      nearest, roughly 75 km away, with daily flights from
                      Delhi, Kolkata, and other major cities. Taxis to
                      Lataguri take around 2 hours.
                    </li>
                    <li>
                      <strong>By Rail:</strong> New Mal Junction is the
                      closest railhead, a short drive from Lataguri; New
                      Jalpaiguri (NJP) is the larger, better-connected
                      station a bit further away.
                    </li>
                    <li>
                      <strong>Getting around:</strong> Jeep safaris are
                      arranged through your lodge or the forest department
                      gate at Lataguri itself — no separate transport is
                      needed once you've arrived.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your safari jeep the
                    evening before through your lodge — daily permits at the
                    gate are limited, especially over weekends in peak
                    season.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Safaris & Things to Do</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Grassland safari trail at Gorumara National Park, West Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Jeep Safaris & Core Zone</h3>
                  <p>
                    Open jeep safaris run through Gorumara's core zone in
                    two daily windows, roughly 6-8:30 AM and 2:30-5 PM, timed
                    around when wildlife is most active. Vehicles carry a
                    small group plus a mandatory forest guide, moving between
                    grassland stretches and forest trails where sightings are
                    most likely.
                  </p>

                  <h3>Jatraprasad, Chukchuki & Medla Watchtowers</h3>
                  <p>
                    Rather than relying purely on drive-by sightings,
                    Gorumara's safaris are built around a handful of raised
                    watchtowers overlooking grassland and waterholes.
                    Jatraprasad is especially known for rhino sightings,
                    Chukchuki for birdlife and riverside views, and Medla for
                    a mix of both — most safaris stop at two or three of
                    these across a drive.
                  </p>

                  <h3>Chapramari Wildlife Sanctuary</h3>
                  <p>
                    Directly adjoining Gorumara, this smaller sanctuary is
                    often paired with it as a second safari on a two-day
                    stay, particularly known for elephant herds moving
                    through its denser forest trails.
                  </p>

                  <h3>Murti Riverside</h3>
                  <p>
                    The Murti river runs along the park's edge near
                    Lataguri, its wide, pebbled banks a popular spot for a
                    picnic or a quiet evening after a safari — several
                    riverside resorts and camping areas make the most of the
                    setting.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Gorumara</h2>
                  <p>
                    Lataguri and the Murti riverside area hold most of the
                    accommodation, ranging from simple lodges to riverside
                    resorts built specifically around the safari trade.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Simple lodges in Lataguri town",
                          "Basic forest-facing guesthouses",
                          "Shared-facility budget stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,800–₹6,000/night",
                        picks: [
                          "Riverside resorts near Murti",
                          "Mid-size wildlife lodges near the gate",
                          "Cottage-style forest-view stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌿",
                        range: "₹7,000–₹16,000+/night",
                        picks: [
                          "Premium safari lodges with guided packages",
                          "High-end riverside resort properties",
                          "Private forest-edge cottages",
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
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Gorumara Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive in Lataguri, check in",
                          "Afternoon jeep safari through Gorumara's core zone",
                          "Evening at the Murti riverside",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Chapramari & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning safari in Chapramari Wildlife Sanctuary",
                          "Late morning at leisure near Lataguri",
                          "Departure toward Bagdogra or onward Dooars stops",
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
                    * Extend to 3-4 days by combining with Jaldapara and
                    other stops covered in our{" "}
                    <Link href="/blog/dooars-travel-guide">
                      Dooars travel guide
                    </Link>
                    , or continue toward{" "}
                    <Link href="/blog/buxa-travel-guide">
                      Buxa Tiger Reserve
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/cooch-behar-travel-guide">
                      Cooch Behar
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Gorumara</h2>
                  <ul>
                    <li>
                      <strong>Lodge and resort kitchens:</strong> Most stays
                      in Lataguri serve set meals — Bengali thalis and simple
                      North Indian fare are the norm.
                    </li>
                    <li>
                      <strong>Local dhabas in Lataguri:</strong> Basic,
                      inexpensive stops for a quick meal between safari
                      drives.
                    </li>
                    <li>
                      <strong>Riverside resort dining:</strong> Properties
                      near Murti often offer sit-down dining with river
                      views, a pleasant end to a safari day.
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
                            "₹1,500",
                            "₹4,000",
                            "₹11,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,800"],
                          ["Jeep safari (per drive)", "₹1,500", "₹2,000", "₹2,500"],
                          [
                            "Entry + guide fee",
                            "₹300",
                            "₹300",
                            "₹300",
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
                    * Jeep safari cost is per vehicle, typically shared
                    across 4-6 people, and priced per drive rather than
                    daily.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Gorumara</h2>
                  <ul>
                    <li>
                      <strong>Book your jeep the evening before:</strong>{" "}
                      Daily safari permits are limited, especially on
                      weekends in peak season (Nov-Feb).
                    </li>
                    <li>
                      <strong>Choose the morning safari for elephants:</strong>{" "}
                      Elephant herds are typically more active and visible
                      in the early morning window than in the afternoon.
                    </li>
                    <li>
                      <strong>Wear muted colours:</strong> Bright clothing
                      can spook wildlife and reduce your chances of a close
                      sighting — stick to greens, browns, and khaki.
                    </li>
                    <li>
                      <strong>Carry binoculars:</strong> Watchtower
                      sightings, especially at Chukchuki, benefit
                      significantly from your own pair rather than relying
                      on the guide's.
                    </li>
                    <li>
                      <strong>Confirm park status near season edges:</strong>{" "}
                      Exact opening dates in October and closing dates in
                      June can shift slightly year to year — check ahead if
                      travelling near those windows.
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
                          "Book your safari jeep the night before",
                          "Take the morning safari for elephant sightings",
                          "Wear muted, neutral-coloured clothing",
                          "Carry your own binoculars",
                          "Pair Gorumara with a Chapramari safari",
                          "Confirm park status near season-edge dates",
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
                          "Show up expecting a walk-in jeep permit",
                          "Wear bright colours on safari",
                          "Plan a visit during the mid-Jun to mid-Sep closure",
                          "Skip a watchtower stop for a quick drive-through",
                          "Assume a single safari guarantees a rhino sighting",
                          "Forget to confirm timings the evening before",
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
                    <strong>🗺️ Extend the trip:</strong> Explore the wider{" "}
                    <Link href="/blog/dooars-travel-guide">
                      Dooars region
                    </Link>{" "}
                    beyond Gorumara, continue to{" "}
                    <Link href="/blog/buxa-travel-guide">
                      Buxa Tiger Reserve
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/cooch-behar-travel-guide">
                      Cooch Behar
                    </Link>{" "}
                    further east, or head up into the hills toward{" "}
                    <Link href="/blog/kalimpong-travel-guide">
                      Kalimpong
                    </Link>
                    .
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
                  "Gorumara National Park",
                  "Dooars",
                  "West Bengal",
                  "Wildlife Safari",
                  "One-Horned Rhino",
                  "Jeep Safari",
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

              <RelatedPostsGrid currentSlug="gorumara-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gorumara-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
