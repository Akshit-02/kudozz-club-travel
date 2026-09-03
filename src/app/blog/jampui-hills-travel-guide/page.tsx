// src/app/blog/jampui-hills-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jampui Hills Travel Guide: Orange Orchards & Tips",
  description:
    "Complete Jampui Hills guide — Tripura's highest hill range, orange orchards, cloud-sea viewpoints, Mizo tribal villages, the Orange & Tourism Festival, how to reach, and a full visit plan.",
  keywords:
    "Jampui Hills travel guide, Jampui Hills Tripura, North Tripura hill station, Jampui orange, Vanghmun, Orange Tourism Festival Tripura, Mizo villages Tripura, how to reach Jampui Hills",
  openGraph: {
    title: "Jampui Hills Travel Guide: Orange Orchards & Tips",
    description:
      "Tripura's highest hill range, orange orchards, and views where the hills seem to float above a sea of clouds — the complete guide to Jampui Hills.",
    url: "https://club.kudozz.in/blog/jampui-hills-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Green hill valley landscape, evoking Jampui Hills' ridgelines and orange orchards in North Tripura",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jampui Hills Travel Guide: Orange Orchards & Tips",
    description:
      "Tripura's highest hill range, orange orchards, and cloud-sea views — the complete guide to Jampui Hills.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jampui-hills-travel-guide",
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
          headline: "Jampui Hills Travel Guide: Orange Orchards & Tips",
          description:
            "Complete Jampui Hills guide — Tripura's highest hill range, orange orchards, cloud-sea viewpoints, Mizo tribal villages, the Orange & Tourism Festival, how to reach, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/jampui-hills-travel-guide",
          },
          keywords:
            "Jampui Hills, North Tripura, hill station, orange orchards, Mizo culture, off-beat",
          about: {
            "@type": "Place",
            name: "Jampui Hills",
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
                name: "Jampui Hills",
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
    q: "What is the best time to visit Jampui Hills, including orange season?",
    a: "October to March is the broadly comfortable window, but November is the standout month — the orchards are in fruit, the annual Orange & Tourism Festival is held, and cloud-sea views tend to be at their clearest.",
  },
  {
    q: "How far is Jampui Hills from Agartala?",
    a: "Roughly 250 km, a long full-day drive via Kanchanpur. Given the distance and mountain roads, an overnight stay is strongly recommended over a rushed round trip.",
  },
  {
    q: "Is Jampui Hills worth an overnight stay?",
    a: "Yes — the drive alone takes most of a day, and the appeal of Jampui Hills (sunrise/sunset viewpoints, orchard visits, village culture) is best experienced unhurried over at least one night rather than a same-day return.",
  },
  {
    q: "What's distinct about the culture in Jampui Hills?",
    a: "The area is predominantly inhabited by Mizo tribal communities, giving it a cultural character distinct from Tripura's Bengali-majority areas and its Tripuri-tribal regions elsewhere in the state — village homestays here offer a genuine window into Mizo life.",
  },
  {
    q: "When are the cloud-sea views best at Jampui Hills?",
    a: "Cool, clear months — broadly October to February — tend to produce the most reliable views of the surrounding hills appearing to float above a sea of clouds, best seen early morning from ridge viewpoints.",
  },
  {
    q: "Do I need to book accommodation in advance?",
    a: "Yes — infrastructure is modest, with homestays and a handful of tourist/forest lodges making up most of the options. Booking ahead matters even more around the November Orange Festival.",
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
  { id: "introduction", title: "Tripura's Highest Hills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jampui Hills", level: 2 },
  { id: "things-to-do", title: "Orchards, Viewpoints & Villages", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested 2-Day Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JampuiHillsGuidePage() {
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
              src="/images/destinations/manali/solang-valley.jpg"
              alt="Green hill valley landscape, evoking Jampui Hills' ridgelines and orange orchards in North Tripura"
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
                { label: "Jampui Hills", href: null },
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
              {["Jampui Hills", "North Tripura", "Off-beat", "Hill Station"].map(
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
              Jampui Hills: Orange Orchards & Cloud-Sea Views
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Tripura's highest hill range, ridgelines lined with orange
              orchards, and mornings where the hills seem to float above
              a sea of clouds — the state's most rewarding hill escape.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "North Tripura, near Mizoram border",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Tripura's Highest Hills</h2>
                  <p>
                    <strong>Jampui Hills</strong> is the highest hill range
                    in Tripura, with ridgelines reaching roughly 3,000 feet,
                    tucked into North Tripura district near the Mizoram
                    border. It's easily the closest thing the state has to
                    a classic hill station — ranks of orange orchards
                    climbing the slopes, and viewpoints where, on clear
                    mornings, the surrounding hills seem to float above a
                    sea of cloud.
                  </p>
                  <p>
                    The range is predominantly home to Mizo tribal
                    communities, giving it a cultural feel quite distinct
                    from Tripura's Bengali-majority plains and its
                    Tripuri-tribal regions elsewhere in the state. Villages
                    like Vanghmun offer homestays, and a visit here doubles
                    as an introduction to Mizo food, language, and daily
                    life.
                  </p>
                  <p>
                    Every November, the <strong>Orange & Tourism
                    Festival</strong> celebrates the harvest with cultural
                    performances and the orchards at their most fragrant —
                    the single best window to combine the fruit, the
                    weather, and the views in one trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🍊</span> Jampui Hills at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North Tripura, near Mizoram",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~3,000 ft",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🍊",
                          label: "Known For",
                          value: "Orange orchards, cloud views",
                        },
                        {
                          icon: "🎭",
                          label: "Culture",
                          value: "Mizo tribal villages",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~250 km",
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
                  <h2>Best Time to Visit Jampui Hills</h2>
                  <p>
                    Timing matters here more than at most Tripura
                    destinations — the orange harvest and the clearest
                    cloud-sea mornings are both season-specific.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, clear hill weather with the most reliable cloud-sea views and comfortable conditions for orchard walks and viewpoint visits.",
                      },
                      {
                        season: "November",
                        emoji: "🍊",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Orange Festival — peak season",
                        text: "The orchards are in fruit and the Orange & Tourism Festival brings cultural performances — the single best month to visit, but book ahead.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warmer, pre-monsoon",
                        text: "Pleasant by plains standards but noticeably warmer than winter — still visitable, without the crowds of November.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain and mist reduce visibility for the hill views and make the long mountain drive from Agartala considerably harder.",
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
                    <strong>Our pick:</strong> November — the orange
                    harvest, the festival, and reliably clear cloud-sea
                    mornings all line up in the same window.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jampui Hills</h2>
                  <p>
                    The drive itself is long — plan it as a proper travel
                    day rather than a quick add-on to an Agartala-based
                    trip.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Agartala:</strong> Roughly 250
                      km via Kanchanpur, a full-day drive on winding hill
                      roads for the final stretch.
                    </li>
                    <li>
                      <strong>Via Kanchanpur:</strong> The nearest sizeable
                      town, useful as a stopover or fuel/supply stop before
                      the final climb into the hills.
                    </li>
                    <li>
                      <strong>By rail:</strong> The nearest railheads are
                      well outside North Tripura's hill areas — most
                      visitors drive the entire way from Agartala or
                      combine the trip with a stop near Unakoti or
                      Kailashahar.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start early and plan for
                    an overnight rather than a same-day return — the
                    driving alone eats most of a day each way.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Orchards, Viewpoints & Villages</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Hill ridgelines at Jampui Hills, North Tripura"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Orange Orchards</h3>
                  <p>
                    Jampui's slopes are lined with orange orchards, best
                    seen — and tasted — during the November harvest. Local
                    growers often welcome visitors to walk through the
                    orchards during festival season.
                  </p>
                  <h3>Sunrise & Sunset Viewpoints</h3>
                  <p>
                    Ridge viewpoints along the range offer panoramic views
                    where the surrounding hills appear to float above a
                    sea of cloud, especially reliable on clear winter
                    mornings — an early start is worth it.
                  </p>
                  <h3>Mizo Villages</h3>
                  <p>
                    Villages like Vanghmun give visitors a window into Mizo
                    tribal life and homestay culture, quite distinct from
                    the Bengali and Tripuri character found elsewhere in
                    the state.
                  </p>
                  <h3>Gentle Nature Walks</h3>
                  <p>
                    Short walks along the ridge between viewpoints and
                    orchards make for an easy, unhurried way to take in the
                    hills without needing a dedicated trekking itinerary.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Jampui Hills</h2>
                  <p>
                    Infrastructure is modest — homestays and a small number
                    of tourist lodges make up most of the options, and
                    booking ahead matters, especially in November.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,200/night",
                        picks: [
                          "Mizo village homestays",
                          "Basic guesthouses, Vanghmun",
                          "Simple tourist lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Tourism department cottages",
                          "Better-appointed homestays",
                          "Ridge-view guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "₹3,500+/night",
                        picks: [
                          "Very limited — modest hill infrastructure",
                          "Best-appointed tourist lodge rooms",
                          "Consider Kailashahar or Agartala for more choice",
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
                  <h2>Suggested 2-Day Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Agartala to Jampui Hills",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Agartala",
                          "Drive via Kanchanpur to Vanghmun",
                          "Evening at a sunset viewpoint",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Orchards & Villages",
                        color: "bg-sky-600",
                        activities: [
                          "Early sunrise/cloud-sea viewpoint visit",
                          "Orange orchard walk (in season)",
                          "Mizo village visit, then drive back to Agartala",
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
                  <h2>What to Eat at Jampui Hills</h2>
                  <ul>
                    <li>
                      <strong>Mizo cuisine:</strong> Homestays here often
                      serve Mizo dishes — simply cooked meats and greens,
                      a different flavour profile from Tripura's Bengali
                      and Tripuri fare elsewhere.
                    </li>
                    <li>
                      <strong>Fresh oranges:</strong> During harvest
                      season, oranges bought straight from the orchards
                      are the obvious local treat.
                    </li>
                    <li>
                      <strong>Standard Tripuri/Bengali fare:</strong> Also
                      available at basic eateries, especially around
                      Kanchanpur en route.
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
                          ["Accommodation/night", "₹700", "₹2,000", "₹3,500"],
                          [
                            "Car hire from Agartala (round trip)",
                            "₹7,500",
                            "₹10,000",
                            "₹14,000",
                          ],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Orchard visit/orange buying", "₹200", "₹300", "₹500"],
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
                    round trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Jampui Hills</h2>
                  <ul>
                    <li>
                      <strong>Book ahead, especially in November:</strong>{" "}
                      Limited homestay and lodge capacity fills quickly
                      during the Orange Festival.
                    </li>
                    <li>
                      <strong>Carry warm layers:</strong> Hill evenings and
                      early mornings get genuinely cool compared to the
                      Tripura plains.
                    </li>
                    <li>
                      <strong>Start the drive early:</strong> The long
                      journey and winding hill roads are best tackled in
                      daylight.
                    </li>
                    <li>
                      <strong>Respect homestay and village etiquette:</strong>{" "}
                      Ask before photographing people, and follow your
                      host's guidance on local customs.
                    </li>
                    <li>
                      <strong>Expect limited connectivity:</strong> Mobile
                      network coverage thins out in the hills — download
                      maps and inform others of your plans in advance.
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
                          "Time your trip for the November Orange Festival",
                          "Book homestays or lodges well in advance",
                          "Carry warm layers for hill evenings",
                          "Catch a sunrise viewpoint for cloud-sea views",
                          "Try Mizo dishes at your homestay",
                          "Start the long drive early both ways",
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
                          "Attempt a rushed same-day round trip from Agartala",
                          "Visit during the monsoon if avoidable",
                          "Expect resort-level accommodation here",
                          "Rely on strong mobile connectivity",
                          "Skip warm clothing for hill evenings",
                          "Photograph villagers without asking first",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Jampui
                    Hills with a stop near{" "}
                    <Link href="/blog/unakoti-travel-guide">Unakoti</Link>{" "}
                    on the way back toward Agartala. See our full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
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
                  "Jampui Hills",
                  "North Tripura",
                  "Off-beat",
                  "Hill Station",
                  "Orange Orchards",
                  "Mizo Culture",
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

              <RelatedPostsGrid currentSlug="jampui-hills-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jampui-hills-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
