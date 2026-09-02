// src/app/blog/mukteshwar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mukteshwar Travel Guide: Views, Orchards & Adventure",
  description:
    "Complete Mukteshwar guide — Mukteshwar Dham temple, Chauli Ki Jali cliffside viewpoint, apple orchards, rock climbing & paragliding, how to reach, where to stay, and a full visit plan.",
  keywords:
    "Mukteshwar, Mukteshwar Uttarakhand, Mukteshwar travel guide, Mukteshwar Dham, Chauli Ki Jali, Mukteshwar adventure sports, Mukteshwar paragliding, Mukteshwar best time to visit, how to reach Mukteshwar, Kumaon adventure hill town",
  openGraph: {
    title: "Mukteshwar Travel Guide: Views, Orchards & Adventure",
    description:
      "A quiet Kumaon ridge town with sweeping Himalayan views, apple orchards, and a growing base for rock climbing, rappelling and paragliding.",
    url: "https://club.kudozz.in/blog/mukteshwar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "High-ridge Himalayan viewpoint over Mukteshwar's orchards and hills",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukteshwar Travel Guide: Views, Orchards & Adventure",
    description:
      "Sweeping Himalayan views, apple orchards, and Kumaon's growing adventure sports hub — the complete Mukteshwar guide.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mukteshwar-travel-guide",
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
          headline: "Mukteshwar Travel Guide: Views, Orchards & Adventure",
          description:
            "Complete Mukteshwar guide — Mukteshwar Dham temple, Chauli Ki Jali cliffside viewpoint, apple orchards, rock climbing & paragliding, how to reach, where to stay, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/mukteshwar-travel-guide",
          },
          keywords:
            "Mukteshwar, Kumaon, Himalayan views, adventure sports, apple orchards, Chauli Ki Jali",
          about: {
            "@type": "Place",
            name: "Mukteshwar",
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
                name: "Mukteshwar",
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
    q: "How did Mukteshwar get its name?",
    a: "The town is named after Mukteshwar Dham, an ancient Shiva temple on a high ridge above the settlement believed to be several hundred years old. 'Mukteshwar' translates roughly to 'lord of liberation,' and the temple remains an active pilgrimage and viewpoint stop today.",
  },
  {
    q: "What adventure activities are available in Mukteshwar?",
    a: "Mukteshwar has become one of Kumaon's more established adventure sports bases, with operators offering rock climbing, rappelling, and zip-lining at cliff faces like Chauli Ki Jali, along with occasional paragliding depending on wind conditions. Most sessions can be booked locally with a day's notice.",
  },
  {
    q: "Is Mukteshwar good for a quiet, low-key trip?",
    a: "Yes — despite being in the same district as Nainital, Mukteshwar stays noticeably quieter and less commercial, with a small market and accommodation spread across orchard-covered hillsides rather than a dense town centre.",
  },
  {
    q: "How far is Mukteshwar from Nainital?",
    a: "Mukteshwar is roughly 50 km from Nainital by road, a drive of about 1.5-2 hours via Bhowali. It's commonly visited as a day trip or an overnight stop from Nainital, or combined with Kausani and Ranikhet in a wider Kumaon circuit.",
  },
  {
    q: "What is the Indian Veterinary Research Institute doing in Mukteshwar?",
    a: "The Indian Veterinary Research Institute (IVRI) has operated a campus in Mukteshwar since the early 1900s, occupying a set of colonial-era buildings on the ridge. It remains an active research institution and its grounds are part of what gives the town its distinctive, quiet character.",
  },
  {
    q: "What is the best time to visit Mukteshwar?",
    a: "March to June and September to November offer the clearest Himalayan views and the most comfortable weather for outdoor activities. December-January can bring snow, which is scenic but limits some adventure activities, while the monsoon months (July-August) are best avoided for both visibility and road safety.",
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
  { id: "introduction", title: "A High-Ridge Kumaon Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mukteshwar", level: 2 },
  { id: "attractions", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MukteshwarGuidePage() {
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
              alt="High-ridge Himalayan viewpoint over Mukteshwar's orchards and hills"
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
                { label: "Mukteshwar", href: null },
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
                "Mukteshwar",
                "Uttarakhand",
                "Kumaon",
                "Himalayan Views",
                "Adventure Sports",
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
              Mukteshwar: Ridge-Top Views, Orchards & Adventure
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet Kumaon hill town on a high ridge with sweeping
              Himalayan views, apple orchards, and a growing base for rock
              climbing, rappelling, and paragliding.
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
                  text: "Nainital district, Kumaon, Uttarakhand",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>A High-Ridge Kumaon Town</h2>
                  <p>
                    <strong>Mukteshwar</strong> sits on a high ridge in
                    Nainital district at roughly 2,170 metres, sharing a
                    district with{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                    but feeling like a different world altogether — quieter,
                    less built-up, and spread across orchard-covered hills
                    rather than around a lake. On clear days, the view from
                    its ridge takes in a wide stretch of the high Himalaya,
                    including Nanda Devi.
                  </p>
                  <p>
                    The town takes its name from{" "}
                    <strong>Mukteshwar Dham</strong>, an ancient Shiva temple
                    on the ridge above the settlement, one of the oldest
                    landmarks in the area. Nearby, the cliff face known as{" "}
                    <strong>Chauli Ki Jali</strong> has become a genuine
                    adventure sports hub — rock climbing, rappelling, and
                    zip-lining are all on offer, alongside paragliding when
                    conditions allow.
                  </p>
                  <p>
                    Mukteshwar is also home to the{" "}
                    <strong>Indian Veterinary Research Institute (IVRI)</strong>
                    , whose colonial-era campus buildings sit on the ridge and
                    add to the town's unhurried, institutional calm — a
                    marked contrast to the bustle of Nainital just an hour or
                    so away.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🧗</span> Mukteshwar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Nainital district, Kumaon",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~2,170 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "🏔️",
                          label: "Known For",
                          value: "Views, orchards, adventure sports",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Kathgodam (~50 km)",
                        },
                        {
                          icon: "🧗",
                          label: "Activities",
                          value: "Climbing, rappelling, paragliding",
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
                  <h2>Best Time to Visit Mukteshwar</h2>
                  <p>
                    Weather affects both the mountain views and the adventure
                    activities that draw many visitors to Mukteshwar, so
                    timing matters more here than in a purely scenic hill
                    town.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies, comfortable temperatures, and reliable conditions for rock climbing and rappelling. Orchards blossom through spring.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Equally excellent",
                        text: "Crisp, clear post-monsoon air gives some of the sharpest Himalayan views of the year, with good conditions for outdoor activities.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Cold, occasional snow",
                        text: "Snowfall is possible and scenic, but cold weather and icy trails can limit or pause some adventure sports sessions.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-stone-100 border-stone-300",
                        mood: "Avoid if possible",
                        text: "Monsoon rain clouds out the mountain views and makes cliff-based activities like climbing and rappelling unsafe or unavailable.",
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
                    November — clear views and dependable conditions for both
                    sightseeing and adventure activities.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mukteshwar</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> Pantnagar is the nearest
                      airport, roughly 70 km away, with limited flights
                      mainly to Delhi. Taxis cover the rest of the route by
                      road.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kathgodam is the nearest
                      railhead, about 50 km away and well connected to Delhi.
                      Shared taxis and private cabs run from Kathgodam to
                      Mukteshwar via Bhowali.
                    </li>
                    <li>
                      <strong>By road:</strong> Mukteshwar is roughly 1.5-2
                      hours from{" "}
                      <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                      via Bhowali, and about the same from Kathgodam directly
                      — both routes are scenic and generally in good
                      condition outside monsoon.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book adventure activity
                    sessions (climbing, rappelling, paragliding) a day ahead
                    where possible — operators depend on weather and daylight
                    windows, especially in winter.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Things to Do in Mukteshwar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Sweeping Himalayan ridge view near Mukteshwar, Kumaon"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Mukteshwar Dham</h3>
                  <p>
                    An ancient Shiva temple after which the town is named,
                    perched on the highest point of the ridge. Beyond its
                    religious significance, it's also one of Mukteshwar's
                    best viewpoints, with a wide panorama over the
                    surrounding valleys and, on clear days, distant Himalayan
                    peaks.
                  </p>
                  <h3>Chauli Ki Jali</h3>
                  <p>
                    A dramatic cliff face near the temple that has become
                    Mukteshwar's adventure sports centre — rock climbing,
                    rappelling, and zip-lining are all commonly available
                    here through local operators, with the sheer drop making
                    for a genuinely thrilling setting.
                  </p>
                  <h3>Apple Orchards & IVRI Campus</h3>
                  <p>
                    Mukteshwar's slopes are lined with apple orchards, many
                    tied to the colonial-era{" "}
                    <strong>
                      Indian Veterinary Research Institute (IVRI)
                    </strong>{" "}
                    campus, whose old stone buildings and quiet grounds add a
                    distinctive institutional calm to the town. Walking
                    through the orchard lanes, especially during blossom
                    season, is one of the simplest pleasures here.
                  </p>
                  <h3>Paragliding</h3>
                  <p>
                    Depending on wind and weather, Mukteshwar's ridge-top
                    location makes it a workable paragliding site, offering
                    aerial views over the orchards and valleys below — worth
                    checking with local operators on the day, since sessions
                    are weather-dependent.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mukteshwar</h2>
                  <p>
                    Mukteshwar's accommodation is scattered across
                    orchard-covered hillsides, with many properties designed
                    around the view rather than clustered in a town centre.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹3,000/night",
                        picks: [
                          "Simple guesthouses near the main road",
                          "KMVN (Kumaon Mandal Vikas Nigam) tourist rest house",
                          "Basic homestays in orchard settings",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹7,000/night",
                        picks: [
                          "Orchard-view cottages",
                          "Adventure-camp style stays near Chauli Ki Jali",
                          "Mid-size resorts along the ridge",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹9,000–₹20,000+/night",
                        picks: [
                          "Boutique resorts with panoramic Himalayan views",
                          "Premium hillside cottages",
                          "Upscale stays with private orchard grounds",
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
                        title: "Arrival, Mukteshwar Dham & Orchards",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive and check in by early afternoon",
                          "Visit Mukteshwar Dham temple and viewpoint",
                          "Evening walk through the apple orchards",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Adventure Day at Chauli Ki Jali",
                        color: "bg-sky-600",
                        activities: [
                          "Morning rock climbing or rappelling session",
                          "Optional paragliding, weather permitting",
                          "Afternoon departure or onward drive to Nainital",
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
                    * Many travellers pair Mukteshwar with{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                    as a quieter, activity-focused add-on to a longer Kumaon
                    trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Mukteshwar</h2>
                  <ul>
                    <li>
                      <strong>Resort and homestay kitchens:</strong> Most
                      stays serve home-style North Indian and Kumaoni meals,
                      often the easiest option given the town's spread-out
                      layout.
                    </li>
                    <li>
                      <strong>Café-style spots near the main road:</strong> A
                      small number of cafés cater to the adventure-sports
                      crowd with casual all-day menus.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Basic, inexpensive
                      thalis and snacks near the market area.
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
                            "₹1,800",
                            "₹5,000",
                            "₹13,000",
                          ],
                          ["Local taxi/day", "₹1,000", "₹1,800", "₹3,000"],
                          ["Food/day", "₹500", "₹1,300", "₹2,800"],
                          [
                            "Adventure activity session",
                            "₹1,000",
                            "₹1,800",
                            "₹2,500",
                          ],
                          ["Entry & misc/day", "₹150", "₹350", "₹700"],
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
                    * Figures are per person, per day. Adventure activity
                    session prices vary by operator and activity type.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mukteshwar</h2>
                  <ul>
                    <li>
                      <strong>Book adventure sessions ahead:</strong>{" "}
                      Climbing, rappelling, and paragliding slots depend on
                      weather and daylight — confirm the day before if
                      possible.
                    </li>
                    <li>
                      <strong>Wear proper footwear for Chauli Ki Jali:</strong>{" "}
                      Grippy, closed shoes make a real difference on the
                      rock and cliff-edge paths.
                    </li>
                    <li>
                      <strong>Rent a taxi or self-drive:</strong>{" "}
                      Mukteshwar's attractions are spread across the ridge,
                      making a vehicle far more practical than walking.
                    </li>
                    <li>
                      <strong>Carry warm layers:</strong> Even in the
                      relatively warm months, mornings and evenings at this
                      altitude stay cool.
                    </li>
                    <li>
                      <strong>Don't expect a big market:</strong>{" "}
                      Mukteshwar's appeal is its quiet views and outdoor
                      activities, not shopping or nightlife.
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
                          "Book climbing/rappelling/paragliding a day ahead",
                          "Wear proper shoes for Chauli Ki Jali",
                          "Hire a taxi to cover the spread-out sights",
                          "Pack warm layers for cool mornings and evenings",
                          "Walk the orchard lanes at a slow pace",
                          "Combine with Nainital or Kausani",
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
                          "Attempt cliff activities in monsoon or wet weather",
                          "Expect Nainital-style shopping or crowds",
                          "Skip footwear appropriate for rocky terrain",
                          "Assume paragliding will run regardless of wind",
                          "Plan to walk everywhere without transport",
                          "Rush Mukteshwar into a single afternoon visit",
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
                    <strong>🗺️ Extend the trip:</strong> Mukteshwar pairs
                    easily with{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                    for a short adventure detour, or with a longer Kumaon
                    loop through the{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>{" "}
                    hill circuit.
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
                  "Mukteshwar",
                  "Uttarakhand",
                  "Kumaon",
                  "Himalayan Views",
                  "Adventure Sports",
                  "Apple Orchards",
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

              <RelatedPostsGrid currentSlug="mukteshwar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mukteshwar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
