// src/app/blog/longtharai-valley-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Longtharai Valley Travel Guide: Tips & How to Reach",
  description:
    "Complete Longtharai Valley guide — Dhalai district's offbeat hill terrain, tribal villages, jhum cultivation, Longtharai Wildlife Sanctuary, how to reach from Agartala, and honest tips.",
  keywords:
    "Longtharai Valley, Dhalai district Tripura, Ambassa, Longtharai Wildlife Sanctuary, Tripuri villages, Reang villages, jhum cultivation, offbeat Tripura destinations, how to reach Longtharai Valley",
  openGraph: {
    title: "Longtharai Valley Travel Guide: Tips & How to Reach",
    description:
      "Hillside jhum fields, tribal villages, and a valley most visitors to Tripura never reach — the honest guide to Longtharai Valley.",
    url: "https://club.kudozz.in/blog/longtharai-valley-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Wide hill valley landscape, evoking the offbeat hill terrain of Longtharai Valley in Dhalai district, Tripura",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Longtharai Valley Travel Guide: Tips & How to Reach",
    description:
      "Offbeat hill terrain, tribal villages, and jhum-cultivated slopes in Tripura's Dhalai district — the complete Longtharai Valley guide.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/longtharai-valley-travel-guide",
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
          headline: "Longtharai Valley Travel Guide: Tips & How to Reach",
          description:
            "Complete Longtharai Valley guide — Dhalai district's offbeat hill terrain, tribal villages, jhum cultivation, Longtharai Wildlife Sanctuary, how to reach from Agartala, and honest tips.",
          image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/longtharai-valley-travel-guide",
          },
          keywords:
            "Longtharai Valley, Dhalai district, Ambassa, Tripura, tribal villages, offbeat travel",
          about: {
            "@type": "Place",
            name: "Longtharai Valley",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tripura",
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
                name: "Tripura",
                item: "https://club.kudozz.in/blog/tripura-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Longtharai Valley",
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
    q: "What makes Longtharai Valley worth visiting?",
    a: "It's one of Tripura's genuinely offbeat corners — rolling hill terrain, tribal villages, and hillside jhum cultivation, with none of the crowds of the state's marquee sites. It suits travellers who want slow, unhurried exploration rather than a checklist of monuments.",
  },
  {
    q: "How far is Longtharai Valley from Agartala?",
    a: "Roughly 110 km, reached by road toward Ambassa, the nearest practical base town in Dhalai district. The drive takes around 3-3.5 hours depending on conditions.",
  },
  {
    q: "Is there proper tourist infrastructure at Longtharai Valley?",
    a: "Honestly, no — this is a lightly touristed area with very limited dedicated accommodation. Ambassa town has basic options, and most visitors treat the valley as a day trip or a single-night stop within a wider Dhalai district itinerary.",
  },
  {
    q: "What is the best time to visit Longtharai Valley?",
    a: "October to March, when cool, dry conditions make valley views and walks most comfortable and hillside tracks are easiest to navigate.",
  },
  {
    q: "Can I visit tribal villages in Longtharai Valley?",
    a: "Yes, but go with a local guide — this shows respect for local etiquette and makes for a far more informative visit than arriving unannounced. Ask before photographing people or daily activities.",
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
  { id: "introduction", title: "Tripura's Quiet Hill Country", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Longtharai Valley", level: 2 },
  { id: "things-to-do", title: "Valley Views, Villages & Walks", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LongtharaiValleyGuidePage() {
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
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="Wide hill valley landscape, evoking the offbeat hill terrain of Longtharai Valley in Dhalai district, Tripura"
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
                { label: "Tripura", href: "/blog/tripura-travel-guide" },
                { label: "Longtharai Valley", href: null },
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
                "Longtharai Valley",
                "Dhalai District",
                "Tribal Villages",
                "Off-beat",
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
              Longtharai Valley: Tripura's Quiet Hill Country
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Rolling hills, tribal villages, and terraced jhum fields in
              Dhalai district — a corner of Tripura that rewards slow,
              unhurried exploration rather than a checklist of sights.
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
                  text: "Dhalai district, Tripura",
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
                  <h2>Tripura's Quiet Hill Country</h2>
                  <p>
                    <strong>Longtharai Valley</strong> sits in Dhalai
                    district, roughly 110 km from Agartala near the town of{" "}
                    <strong>Ambassa</strong>, the practical base for anyone
                    exploring the area. It's a scenic stretch of hilly,
                    forested terrain that most visitors to{" "}
                    <Link href="/blog/tripura-travel-guide">Tripura</Link>{" "}
                    never see — one of the state's genuinely offbeat corners
                    rather than a headline attraction.
                  </p>
                  <p>
                    The valley is home to <strong>Longtharai Wildlife
                    Sanctuary</strong> and largely inhabited by tribal
                    communities, including the Tripuri and Reang, whose
                    terraced <strong>jhum</strong> (shifting) cultivation
                    patterns are visible across the hillsides — a distinctive
                    part of the landscape as much as a farming method.
                  </p>
                  <p>
                    Be honest with yourself about what this trip is:
                    Longtharai Valley isn't a place with a marquee monument
                    or a single must-see spot. It's a destination for slow,
                    unhurried exploration — valley views, village life, and
                    gentle walks — that rewards travellers looking to get
                    well off Tripura's standard circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Longtharai Valley at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Dhalai district, Tripura",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~110 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏘️",
                          label: "Known For",
                          value: "Tribal villages, jhum fields",
                        },
                        {
                          icon: "🏙️",
                          label: "Nearest Town",
                          value: "Ambassa",
                        },
                        {
                          icon: "🎯",
                          label: "Best For",
                          value: "Slow, offbeat travel",
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
                  <h2>Best Time to Visit Longtharai Valley</h2>
                  <p>
                    Cool, dry weather makes the biggest difference here, both
                    for comfort and for the practicality of hillside tracks.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool and dry, the most comfortable window for valley walks, village visits, and clear views across the hills.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, workable with an early start",
                        text: "Temperatures rise but mornings remain manageable — plan walks and village visits before midday heat sets in.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — difficult tracks",
                        text: "Heavy rain makes hillside tracks slippery and unreliable, and the long drive from Agartala becomes considerably harder.",
                      },
                      {
                        season: "Nov – Dec",
                        emoji: "🌾",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Post-harvest villages",
                        text: "Villages are at their most active after the jhum harvest, offering a genuine window into local life for respectful visitors.",
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
                    <strong>Our pick:</strong> November to February — cool,
                    dry conditions and the most reliable hillside tracks for
                    walks and village visits.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Longtharai Valley</h2>
                  <p>
                    Longtharai Valley is reached entirely by road, via Khowai
                    and on toward Ambassa in Dhalai district.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Agartala:</strong> Roughly 110 km,
                      about 3-3.5 hours by car, heading through Khowai toward
                      Ambassa.
                    </li>
                    <li>
                      <strong>Via Ambassa:</strong> Ambassa is the practical
                      base town for the area, with the most reliable
                      transport and basic supplies before heading into the
                      valley itself.
                    </li>
                    <li>
                      <strong>Local transport:</strong> Shared vehicles
                      connect Agartala and Ambassa, but a private car is far
                      more practical for reaching villages and viewpoints
                      inside the valley.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange a local guide in
                    Ambassa before heading into the valley — village visits
                    and route-finding both go far more smoothly with someone
                    who knows the area.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Valley Views, Villages & Walks</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Hill valley landscape near Longtharai Valley, Dhalai district"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Valley Viewpoints</h3>
                  <p>
                    Various points across the hills give sweeping views
                    across the valley's terraced slopes and forest — nothing
                    formally signposted, but a local guide will know the best
                    spots for a given time of day.
                  </p>
                  <h3>Tribal Village Visits</h3>
                  <p>
                    Tripuri and Reang villages dot the hillsides, with jhum
                    cultivation visible on the surrounding slopes. Visiting
                    with a local guide, rather than arriving unannounced, is
                    both more respectful and far more informative.
                  </p>
                  <h3>Nature Walks & Birdwatching</h3>
                  <p>
                    Short, gentle walks through forested sections near
                    Longtharai Wildlife Sanctuary reward patient visitors
                    with birdlife and a genuine sense of the region's quiet,
                    undisturbed character.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation here is genuinely limited — Ambassa town
                    has a handful of basic options, and most visitors treat
                    Longtharai Valley as a day trip or single-night stop
                    within a wider Dhalai district itinerary.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,200/night",
                        picks: [
                          "Basic guesthouses, Ambassa",
                          "Government rest houses (where available)",
                          "Simple lodges near the town centre",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹2,800/night",
                        picks: [
                          "Better hotels, Ambassa town",
                          "Comfortable stays in Khowai en route",
                        ],
                      },
                      {
                        tier: "Practical Note",
                        icon: "⚠️",
                        range: "Limited options",
                        picks: [
                          "No dedicated luxury stays in the valley",
                          "Agartala day-trip is a realistic alternative",
                          "Book ahead — very few rooms available",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Ambassa & Valley Villages",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Agartala to Ambassa",
                          "Arrange a local guide, head into the valley",
                          "Visit a tribal village, afternoon walk",
                        ],
                      },
                      {
                        day: "Day 2 (optional)",
                        title: "Sanctuary & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Morning nature walk near Longtharai Wildlife Sanctuary",
                          "Valley viewpoint stop",
                          "Return drive to Agartala",
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
                      <strong>Ambassa town:</strong> The most reliable spot
                      for a proper meal, with a handful of local eateries
                      serving Bengali- and Tripuri-influenced food.
                    </li>
                    <li>
                      <strong>Village homestay meals:</strong> If visiting
                      with a local guide, a home-cooked meal in a village
                      offers the most authentic taste of the region.
                    </li>
                    <li>
                      <strong>Carry snacks:</strong> Options inside the
                      valley itself are minimal, so pack accordingly for day
                      trips.
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
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
                          ["Accommodation/night", "₹700", "₹2,000"],
                          ["Car hire from Agartala (round trip)", "₹4,500", "₹6,500"],
                          ["Local guide (per day)", "₹600", "₹1,000"],
                          ["Food/day", "₹350", "₹700"],
                        ].map(([exp, b, m], i) => (
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
                    round trip figure best split across a group). No luxury
                    tier — accommodation options don't extend that far here.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Longtharai Valley</h2>
                  <ul>
                    <li>
                      <strong>Go with a local guide:</strong> Both for
                      route-finding and for respectful, informative village
                      visits — this isn't a self-drive-and-wander
                      destination.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM and card access is
                      minimal beyond Ambassa town.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> This is a
                      genuinely offbeat area — infrastructure is basic, and
                      the reward is quiet, unhurried scenery rather than
                      polished attractions.
                    </li>
                    <li>
                      <strong>Ask before photographing:</strong> Standard
                      courtesy in tribal villages — always ask before taking
                      photos of people or daily activities.
                    </li>
                    <li>
                      <strong>Book Ambassa accommodation ahead:</strong> The
                      limited number of rooms can fill up around local
                      events.
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
                          "Arrange a local guide before heading into the valley",
                          "Carry enough cash for the whole trip",
                          "Ask permission before photographing villagers",
                          "Set realistic expectations about infrastructure",
                          "Visit October–March for the best conditions",
                          "Book Ambassa accommodation in advance",
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
                          "Expect a single headline attraction here",
                          "Rely on cards or ATMs beyond Ambassa",
                          "Visit villages without a local guide",
                          "Travel during peak monsoon (Jul-Sep)",
                          "Expect luxury accommodation options",
                          "Photograph people without asking first",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Longtharai
                    Valley with a wider Dhalai district loop, or read our
                    full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
                    </Link>{" "}
                    for the state's better-known sights.
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
                  "Longtharai Valley",
                  "Dhalai District",
                  "Tripura",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="longtharai-valley-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="longtharai-valley-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
