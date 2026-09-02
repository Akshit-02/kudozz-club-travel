// src/app/blog/dhanaulti-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dhanaulti Travel Guide: Pine Forests & Quiet Views",
  description:
    "Complete Dhanaulti travel guide — Eco Park forest walks, Surkanda Devi Temple trek, how to reach from Dehradun or Mussoorie, where to stay, and a full visit plan.",
  keywords:
    "Dhanaulti Uttarakhand, Dhanaulti travel guide, Eco Park Dhanaulti, Surkanda Devi Temple, Dhanaulti near Mussoorie, how to reach Dhanaulti, Dhanaulti best time to visit, Dhanaulti resorts, Devalgarh Dashavatar Temple, pine forest hill station Uttarakhand",
  openGraph: {
    title: "Dhanaulti Travel Guide: Pine Forests & Quiet Views",
    description:
      "A quiet, forested alternative to nearby Mussoorie — dense deodar and oak cover, the Eco Park, and the Surkanda Devi trek, just 25 km from the crowds.",
    url: "https://club.kudozz.in/blog/dhanaulti-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Quiet pine and deodar forest hillside at Dhanaulti, Uttarakhand",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanaulti Travel Guide: Pine Forests & Quiet Views",
    description:
      "Dense deodar forest, the Eco Park, and the Surkanda Devi trek — a quiet alternative to Mussoorie, just 25 km away.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dhanaulti-travel-guide",
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
          headline: "Dhanaulti Travel Guide: Pine Forests & Quiet Views",
          description:
            "Complete Dhanaulti travel guide — Eco Park forest walks, Surkanda Devi Temple trek, how to reach from Dehradun or Mussoorie, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/dhanaulti-travel-guide",
          },
          keywords:
            "Dhanaulti, Eco Park, Surkanda Devi, pine forest, Mussoorie, Uttarakhand hill station",
          about: {
            "@type": "Place",
            name: "Dhanaulti",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttarakhand",
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
                name: "Uttarakhand",
                item: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Dhanaulti",
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
    q: "How far is Dhanaulti from Mussoorie?",
    a: "Dhanaulti is roughly 25 km from Mussoorie by road, about 45 minutes to an hour depending on traffic. Despite the short distance, it feels noticeably quieter and cooler than Mussoorie, thanks to its thicker forest cover and smaller commercial footprint.",
  },
  {
    q: "What is the Eco Park in Dhanaulti?",
    a: "The Eco Park is a managed forest area with marked walking trails, viewpoints over the Himalayan range, and small activity zones, run to let visitors experience the deodar and oak forest without straying into unmarked wilderness. It's one of Dhanaulti's main organised attractions.",
  },
  {
    q: "Can I trek to Surkanda Devi Temple from Dhanaulti?",
    a: "Yes. The Surkanda Devi Temple trek starts from Kaddukhal, a short drive from Dhanaulti, and involves a moderate uphill climb of roughly 1.5-2 hours to a temple perched at over 2,700 metres with sweeping Himalayan views. It's a popular half-day add-on for visitors based in Dhanaulti.",
  },
  {
    q: "How do I reach Dhanaulti?",
    a: "Jolly Grant Airport in Dehradun is the nearest airport, about 60 km away, and Dehradun is also the nearest railway station. From Dehradun, Dhanaulti is reached by road either via Mussoorie or via Chamba, both scenic routes through forested hills.",
  },
  {
    q: "Does it snow in Dhanaulti?",
    a: "Yes, Dhanaulti sees light to moderate snowfall in December and January most years, which draws visitors specifically wanting to see snow without travelling to higher-altitude, harder-to-reach destinations.",
  },
  {
    q: "Is Dhanaulti good for a family trip?",
    a: "Yes — Dhanaulti's easy forest walks, the managed Eco Park, and its calmer pace compared to Mussoorie make it a comfortable, low-stress hill destination for families and travellers who prefer a slower trip over a packed sightseeing schedule.",
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
  { id: "introduction", title: "Mussoorie's Quiet Neighbour", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dhanaulti", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DhanaultiGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Quiet pine and deodar forest hillside at Dhanaulti, Uttarakhand"
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
                { label: "Uttarakhand", href: "/blog/uttarakhand-travel-guide" },
                { label: "Dhanaulti", href: null },
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
                "Dhanaulti",
                "Pine Forest",
                "Eco Park",
                "Off-beat",
                "Hill Station",
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
              Dhanaulti: Pine Forests, Quiet Views & a Complete Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet alternative to nearby Mussoorie — dense deodar and oak
              forest, the managed Eco Park, and the Surkanda Devi trek,
              just 25 km from the crowds.
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
                  text: "Tehri Garhwal, Uttarakhand",
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
                  <h2>Mussoorie's Quiet Neighbour</h2>
                  <p>
                    <strong>Dhanaulti</strong> sits just 25 km from{" "}
                    <Link href="/blog/mussoorie-travel-guide">Mussoorie</Link>
                    , but feels like an entirely different kind of hill
                    station. Where Mussoorie has built up around its Mall
                    Road crowds, Dhanaulti has stayed small and deeply
                    forested — dense deodar and oak cover much of the
                    hillside, and the town itself is really little more than
                    a scatter of resorts, cottages, and a small market
                    strung along the ridge.
                  </p>
                  <p>
                    The main draw isn't a single sight but the forest
                    itself: managed walking trails through the Eco Park,
                    Himalayan viewpoints tucked between the trees, and a
                    noticeably cooler, quieter air than nearby{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>{" "}
                    hill towns see in peak season. A short drive away, the
                    climb to Surkanda Devi Temple adds a proper half-day trek
                    for anyone wanting more than a gentle forest stroll.
                  </p>
                  <p>
                    Dhanaulti works well both as a standalone slow-travel
                    stop and as a quiet counterpoint after — or before — a
                    busier Mussoorie visit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Dhanaulti at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Tehri Garhwal, Uttarakhand",
                        },
                        {
                          icon: "🚗",
                          label: "From Mussoorie",
                          value: "~25 km, 45-60 min",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "🌲",
                          label: "Known For",
                          value: "Eco Park, Deodar Forest",
                        },
                        {
                          icon: "🛕",
                          label: "Nearby Trek",
                          value: "Surkanda Devi Temple",
                        },
                        {
                          icon: "🏔️",
                          label: "Elevation",
                          value: "~2,250 m",
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
                  <h2>Best Time to Visit Dhanaulti</h2>
                  <p>
                    Dhanaulti's elevation keeps it cool for most of the
                    year, with a genuine winter-snow season that draws a
                    different kind of visitor from the summer crowd.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortably cool days, clear forest walks, and a welcome escape from the plains' summer heat, without Mussoorie-level crowding.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear skies, our other pick",
                        text: "Post-monsoon clarity brings some of the year's best Himalayan views from the Eco Park's viewpoints, with cool, pleasant weather.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Snow season",
                        text: "Light to moderate snowfall most years, drawing visitors specifically wanting snow without the higher-altitude travel other destinations require.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Lush but wet",
                        text: "The forest is at its greenest, but persistent rain and occasional landslide risk on approach roads make this a less practical window.",
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
                    <strong>Our pick:</strong> March to June, or September to
                    November — cool, clear weather for forest walks, with
                    December-January as a good alternative for visitors
                    specifically chasing snow.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Dhanaulti</h2>
                  <p>
                    Dhanaulti's proximity to Dehradun and Mussoorie makes it
                    one of the easier off-beat hill stations to reach in
                    the state.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Jolly Grant Airport in
                      Dehradun is the nearest, about 60 km away.
                    </li>
                    <li>
                      <strong>By rail:</strong> Dehradun railway station is
                      the nearest rail head, well connected to Delhi and
                      other major cities.
                    </li>
                    <li>
                      <strong>By road:</strong> Dhanaulti is reached from
                      Dehradun either via Mussoorie (a slightly longer but
                      more scenic route) or via Chamba (a more direct road),
                      both taking roughly 2-2.5 hours.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Route via Mussoorie if you
                    want to combine both destinations in one trip — the road
                    between the two runs through some of the prettiest
                    forest stretches in the region.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Dhanaulti</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Deodar forest trail in Dhanaulti's Eco Park, Uttarakhand"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Eco Park</h3>
                  <p>
                    A managed forest area with marked walking trails,
                    viewpoints, and a few small activity zones, designed to
                    let visitors experience Dhanaulti's deodar and oak
                    forest without straying off unmarked paths. It's the
                    town's most organised attraction and a good starting
                    point for a first visit.
                  </p>
                  <h3>Surkanda Devi Temple Trek</h3>
                  <p>
                    Starting from Kaddukhal, a short drive from Dhanaulti,
                    this moderate uphill trek of roughly 1.5-2 hours leads to
                    a temple perched above 2,700 metres, with panoramic
                    Himalayan views on a clear day. It's a popular half-day
                    add-on for visitors wanting more elevation gain than the
                    Eco Park's gentle trails offer.
                  </p>
                  <h3>Dashavatar Temple, Devalgarh</h3>
                  <p>
                    En route toward Dhanaulti from certain approaches sits
                    the ancient Dashavatar Temple at Devalgarh, a stone
                    temple dedicated to Vishnu's ten avatars — a worthwhile
                    detour for anyone interested in early Garhwal temple
                    architecture.
                  </p>
                  <h3>Forest Walks & Photography</h3>
                  <p>
                    Beyond the formal Eco Park, Dhanaulti's back roads and
                    ridgelines offer open-ended forest walking with far
                    fewer people than similar trails near Mussoorie —
                    genuinely one of the calmer stretches of Garhwal for
                    slow mornings and photography.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Dhanaulti</h2>
                  <p>
                    Dhanaulti's accommodation leans toward forest-cabin and
                    cottage-style stays rather than large hotels, fitting
                    its slow-travel character.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Simple guesthouses along the highway",
                          "GMVN forest rest houses",
                          "Basic roadside lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,500/night",
                        picks: [
                          "Forest-cabin resorts",
                          "Cottage-style stays near Eco Park",
                          "Family-run hillside lodges",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹8,000–₹18,000/night",
                        picks: [
                          "Premium forest retreats",
                          "Private valley-view villas",
                          "Boutique nature resorts",
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
                        title: "Arrival & Eco Park",
                        color: "bg-amber-700",
                        activities: [
                          "Drive in via Mussoorie or Chamba, check in",
                          "Afternoon walk through the Eco Park",
                          "Evening at the resort with forest views",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Surkanda Devi Trek",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning drive to Kaddukhal",
                          "Trek up to Surkanda Devi Temple",
                          "Afternoon drive back or onward to Mussoorie",
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
                    * Travellers with more time often combine Dhanaulti with{" "}
                    <Link href="/blog/tehri-lake-travel-guide">Tehri Lake</Link>{" "}
                    for a water-sports day, or continue on to{" "}
                    <Link href="/blog/mussoorie-travel-guide">Mussoorie</Link>{" "}
                    for a livelier contrast.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Dhanaulti</h2>
                  <ul>
                    <li>
                      <strong>Resort and cottage dining:</strong> Most
                      stays run their own kitchens, generally the most
                      reliable option given how few standalone restaurants
                      exist in Dhanaulti's small market.
                    </li>
                    <li>
                      <strong>Highway dhabas:</strong> Simple North Indian
                      meals and hot chai at roadside stops along the main
                      Mussoorie-Chamba highway.
                    </li>
                    <li>
                      <strong>Local Garhwali food:</strong> Where available,
                      look for mandua rotis, jhangora kheer, and other
                      regional dishes for a change from standard hill-town
                      menus.
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
                          ["Accommodation/night", "₹1,500", "₹4,000", "₹11,000"],
                          ["Eco Park entry", "₹50", "₹50", "₹50"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Kaddukhal taxi (round trip)", "₹800", "₹1,200", "₹1,800"],
                          ["Local transport/day", "₹300", "₹600", "₹1,200"],
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
                    * Figures are per person, per day, in INR.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Dhanaulti</h2>
                  <ul>
                    <li>
                      <strong>Carry warm layers year-round:</strong>{" "}
                      Elevation keeps evenings cool even in the height of
                      summer.
                    </li>
                    <li>
                      <strong>Don't expect much nightlife:</strong>{" "}
                      Dhanaulti's appeal is quiet forest, not markets or
                      entertainment — most resorts wind down early.
                    </li>
                    <li>
                      <strong>Check road conditions in winter:</strong>{" "}
                      Snowfall in December-January can affect the approach
                      roads — confirm conditions before travelling.
                    </li>
                    <li>
                      <strong>Book resorts ahead on weekends:</strong>{" "}
                      Limited room stock fills quickly given Dhanaulti's
                      small size, despite generally low overall footfall.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited in
                      this small a town.
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
                          "Set aside a half day for the Surkanda Devi trek",
                          "Book resorts ahead of weekends",
                          "Carry warm layers even in summer",
                          "Walk beyond the Eco Park's marked trails",
                          "Carry enough cash for the whole stay",
                          "Combine with Mussoorie or Tehri Lake",
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
                          "Expect Mussoorie-style markets or nightlife",
                          "Skip warm clothing for evenings",
                          "Travel in winter without checking road conditions",
                          "Assume ATMs will be available",
                          "Rush the Surkanda Devi trek in poor footwear",
                          "Book a same-day return without a time buffer",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Dhanaulti with
                    the water sports of{" "}
                    <Link href="/blog/tehri-lake-travel-guide">Tehri Lake</Link>{" "}
                    on one side, or the busier Mall Road energy of{" "}
                    <Link href="/blog/mussoorie-travel-guide">Mussoorie</Link>{" "}
                    on the other, for a fuller Garhwal itinerary.
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
                  "Dhanaulti",
                  "Uttarakhand",
                  "Pine Forest",
                  "Eco Park",
                  "Mussoorie",
                  "Off-beat",
                  "Hill Station",
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

              <RelatedPostsGrid currentSlug="dhanaulti-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dhanaulti-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
