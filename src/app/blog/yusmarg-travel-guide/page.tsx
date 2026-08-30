// src/app/blog/yusmarg-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yusmarg Travel Guide: Meadow of Jesus & Nilnag Lake",
  description:
    "Yusmarg travel guide: reach this quiet Kashmir meadow from Srinagar via Charar-e-Sharief, explore Nilnag Lake, best time to visit, and a day-trip itinerary.",
  keywords:
    "Yusmarg travel guide, Yusmarg Kashmir, Nilnag Lake, Yusmarg distance from Srinagar, best time to visit Yusmarg, offbeat Kashmir meadows, Charar-e-Sharief, Yusmarg day trip, Sang-e-Safed peak, Doodh Ganga river",
  openGraph: {
    title: "Yusmarg Travel Guide: Meadow of Jesus & Nilnag Lake",
    description:
      "A quiet, pine-fringed alpine meadow in Budgam district, far less commercial than Gulmarg — with Nilnag Lake and the Charar-e-Sharief shrine nearby.",
    url: "https://club.kudozz.in/blog/yusmarg-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wide alpine meadow and pine forest at Yusmarg near Srinagar",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusmarg Travel Guide: Meadow of Jesus & Nilnag Lake",
    description:
      "A quiet, pine-fringed alpine meadow in Budgam district, far less commercial than Gulmarg — with Nilnag Lake and the Charar-e-Sharief shrine nearby.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/yusmarg-travel-guide",
  },
};

// ── JSON-LD: Article ─────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Yusmarg Travel Guide: Meadow of Jesus & Nilnag Lake",
          description:
            "Yusmarg travel guide: how to reach this quiet Kashmir meadow from Srinagar, the Charar-e-Sharief shrine en route, Nilnag Lake, best time to visit, and a day-trip itinerary.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/yusmarg-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Yusmarg",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Jammu and Kashmir",
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
                name: "Jammu & Kashmir",
                item: "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Yusmarg" },
            ],
          },
        }),
      }}
    />
  );
}

// ── JSON-LD: FAQ ──────────────────────────────────────────────────────────────
function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is Yusmarg a day trip from Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Yusmarg is roughly 47 km from Srinagar, about 1.5–2 hours by road via Charar-e-Sharief, and almost all visitors do it as a day trip. Accommodation in Yusmarg itself is very limited, so a return trip to Srinagar by evening is the standard plan.",
              },
            },
            {
              "@type": "Question",
              name: "What is Yusmarg famous for?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yusmarg is known for its wide, pine-fringed alpine meadow at around 2,400 m, its relative quiet compared to Gulmarg, pony rides across the grass, and Nilnag Lake nearby. Local folklore also links its name to a visit by Jesus (Yuz Asaf), though this is popular legend rather than established history.",
              },
            },
            {
              "@type": "Question",
              name: "How far is Nilnag Lake from Yusmarg?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nilnag Lake is around 5–6 km from Yusmarg meadow, reached by a gentle pony ride or a walking trail through pine forest that takes roughly 1.5–2 hours one way on foot.",
              },
            },
            {
              "@type": "Question",
              name: "Is Yusmarg worth visiting?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, especially for travellers who have already seen Gulmarg or Pahalgam and want a quieter, less commercial meadow experience. Yusmarg rewards visitors looking for open grassland, pine forest, and a slower pace rather than adventure infrastructure.",
              },
            },
            {
              "@type": "Question",
              name: "What does the name Yusmarg mean?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yusmarg roughly translates to 'meadow of Yusuf' (Joseph), and popular local legend connects the name to a visit by Jesus, referred to in some Kashmiri traditions as Yuz Asaf. This is folklore passed down locally, not a verified historical claim.",
              },
            },
            {
              "@type": "Question",
              name: "Can I visit Yusmarg in winter?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yusmarg is accessible in winter but the meadow is often snow-covered and the road can be affected by snowfall, so it's best checked locally before setting out. Most visitors prefer April to October, when the meadow is green and the drive is straightforward.",
              },
            },
          ],
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Yusmarg?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Yusmarg", level: 2 },
  { id: "the-meadow", title: "The Yusmarg Meadow", level: 2 },
  { id: "nilnag-lake", title: "Nilnag Lake", level: 2 },
  { id: "sang-e-safed", title: "Sang-e-Safed & Doodh Ganga", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "Suggested Day-Trip Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function YusmargGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Wide alpine meadow and pine forest at Yusmarg near Srinagar"
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
                {
                  label: "Jammu & Kashmir",
                  href: "/blog/jammu-kashmir-travel-guide",
                },
                { label: "Yusmarg", href: null },
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
                "Yusmarg",
                "Jammu & Kashmir",
                "Nilnag Lake",
                "Offbeat Kashmir",
                "Budgam",
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
              Yusmarg Travel Guide: The Quiet Meadow Near Srinagar
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A wide pine-fringed meadow in Budgam district, a glacial lake a
              short walk beyond it, and a fraction of the crowds you'll find
              at Gulmarg — this is everything worth knowing before you go.
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
                  text: "Budgam, Jammu & Kashmir",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
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
                  <h2>Why Visit Yusmarg?</h2>
                  <p>
                    Most first-time visitors to{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir
                    </Link>{" "}
                    head straight for Gulmarg's gondola or Pahalgam's pine
                    valleys. <strong>Yusmarg</strong>, tucked away in Budgam
                    district roughly 47 km southwest of Srinagar, is what
                    those places might have felt like before tour buses found
                    them — a broad, open meadow ringed by pine forest, with
                    almost none of the ropeways, ski-gear rental stalls, or
                    souvenir markets that now define the bigger hill
                    stations.
                  </p>
                  <p>
                    The name itself carries a piece of local folklore worth
                    knowing before you arrive: <em>Yusmarg</em> is popularly
                    read as "meadow of Yusuf," and a long-standing local
                    legend holds that Jesus — referred to in some Kashmiri
                    traditions as Yuz Asaf — passed through this meadow. It's
                    a story told with real affection in the region, but it
                    remains folklore rather than documented history, and it's
                    worth treating it that way even as you enjoy hearing it
                    from a local pony-wallah or driver.
                  </p>
                  <p>
                    What Yusmarg actually offers is simpler and, for many
                    travellers, better: rolling grassland at around 2,400 m,
                    a genuinely peaceful atmosphere, pony rides that don't
                    feel like a queue, and <strong>Nilnag Lake</strong> a
                    short trek beyond the meadow. It pairs naturally with a
                    stop at the historic{" "}
                    <strong>Charar-e-Sharief shrine</strong> on the way, and
                    with other quiet Kashmir meadows like{" "}
                    <Link href="/blog/doodhpathri-travel-guide">
                      Doodhpathri
                    </Link>{" "}
                    or the waterfall town of{" "}
                    <Link href="/blog/aharbal-travel-guide">Aharbal</Link> if
                    you have more than one day to spend away from{" "}
                    <Link href="/blog/srinagar-travel-guide">Srinagar</Link>.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌾</span> Yusmarg at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Budgam, J&K",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~2,400 m (7,900 ft)",
                        },
                        {
                          icon: "🚗",
                          label: "From Srinagar",
                          value: "~47 km, 1.5–2 hrs",
                        },
                        {
                          icon: "🌊",
                          label: "Nearby",
                          value: "Nilnag Lake",
                        },
                        {
                          icon: "🕌",
                          label: "En Route",
                          value: "Charar-e-Sharief shrine",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Apr – Oct",
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
                  <h2>Best Time to Visit Yusmarg</h2>
                  <p>
                    Yusmarg is a warm-weather meadow destination first — the
                    grass, the pony rides, and the lake trek are all at their
                    best when the ground is dry and green rather than
                    snow-covered.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🌱",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Fresh green — our pick",
                        text: "Snowmelt gives way to bright green grass and wildflowers, with Sang-e-Safed's peak still holding snow above the meadow for contrast.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌦️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm, occasional showers",
                        text: "Lush meadow at its fullest, with short monsoon spells — pack a light rain layer and expect the trail to Nilnag Lake to be a little muddy.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear skies, golden light",
                        text: "Fewer visitors, crisp mountain air, and some of the clearest views of the surrounding pine ridges and Sang-e-Safed all year.",
                      },
                      {
                        season: "Nov – Mar",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold, often snow-bound",
                        text: "The meadow can turn white and the approach road is weather-dependent — check locally in Srinagar before attempting a winter visit.",
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
                    <strong>Our pick:</strong> May and June, when the meadow
                    is fully green, the Nilnag Lake trail is dry underfoot,
                    and the snow-capped backdrop of Sang-e-Safed hasn't
                    receded for the season yet.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Yusmarg</h2>
                  <p>
                    Yusmarg has no airport or railhead of its own — every
                    visitor arrives by road, almost always from Srinagar,
                    which makes the journey itself part of the appeal.
                  </p>
                  <ul>
                    <li>
                      <strong>From Srinagar by road:</strong> The most common
                      route runs via Chadoora and{" "}
                      <strong>Charar-e-Sharief</strong>, roughly 47 km and
                      1.5–2 hours by taxi or private car. Roads are paved and
                      generally in decent condition, winding gently through
                      farmland and villages before climbing into pine forest
                      near the meadow.
                    </li>
                    <li>
                      <strong>Taxi hire:</strong> Shared and private taxis are
                      available from Srinagar's tourist reception centre and
                      most hotels — a round trip with waiting time is the
                      standard way to visit, since public transport options
                      thin out considerably past Charar-e-Sharief.
                    </li>
                    <li>
                      <strong>Self-drive:</strong> The route is
                      straightforward for a rental car or bike, with fuel
                      stops available in Chadoora — worth topping up before
                      the final stretch into the hills.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Build in an hour at{" "}
                    <strong>Charar-e-Sharief</strong> on the way — the
                    14th-century shrine of Sheikh Noor-ud-din Noorani (Nund
                    Rishi), Kashmir's patron saint, is a genuinely worthwhile
                    stop and sits almost directly on the route, not out of
                    the way at all.
                  </div>
                </section>

                {/* ── The Meadow ────────────────────────────────────────── */}
                <section id="the-meadow">
                  <h2>The Yusmarg Meadow</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Open grassland at Yusmarg meadow bordered by dense pine forest"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The meadow itself is what most people come for — a wide,
                    gently undulating stretch of grassland bordered on all
                    sides by dense pine forest, with the Doodh Ganga stream
                    running along one edge. Unlike Gulmarg's meadow, which is
                    now dominated by resort infrastructure and the gondola
                    base station, Yusmarg's grassland is still mostly open —
                    a handful of tea stalls and pony stands are about the
                    extent of the built environment.
                  </p>
                  <ul>
                    <li>
                      <strong>Pony rides:</strong> Locally run pony rides
                      cross the meadow and continue toward Nilnag Lake or
                      short forest loops — rates are negotiable and generally
                      far lower than at Gulmarg or Sonamarg.
                    </li>
                    <li>
                      <strong>Picnicking:</strong> The meadow is genuinely
                      suited to simply spreading a mat and spending an hour
                      or two doing nothing in particular — a rarer thing to
                      find room for at busier Kashmir hill stations.
                    </li>
                    <li>
                      <strong>Photography:</strong> Morning light across the
                      grass, with pine shadows and the snow-streaked ridge of
                      Sang-e-Safed in the background, is the single best
                      photo opportunity Yusmarg offers.
                    </li>
                    <li>
                      <strong>Short forest walks:</strong> Trails into the
                      surrounding pine forest are easy and largely
                      unmarked but hard to get seriously lost on, given the
                      meadow's open centre as a reference point.
                    </li>
                  </ul>
                </section>

                {/* ── Nilnag Lake ───────────────────────────────────────── */}
                <section id="nilnag-lake">
                  <h2>Nilnag Lake</h2>
                  <p>
                    A short distance beyond the meadow, through pine forest,
                    lies <strong>Nilnag Lake</strong> — a small glacial lake
                    that gives Yusmarg its second reason to visit. It's
                    reachable either by a gentle pony ride or on foot, with
                    the walking trail taking roughly 1.5–2 hours one way
                    through quiet forest that thins out gradually as the lake
                    comes into view.
                  </p>
                  <p>
                    Nilnag doesn't have the scale of Kashmir's better-known
                    alpine lakes, and that's precisely its appeal — there's
                    rarely more than a handful of other visitors at the
                    water's edge, and the pine-lined shore makes for a quiet
                    spot to sit before heading back. Carry water and a light
                    snack, since there's no infrastructure at the lake
                    itself.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start the walk to Nilnag by
                    late morning at the latest — the return trip plus time at
                    the meadow can eat into daylight if you're also driving
                    back to Srinagar the same evening.
                  </div>
                </section>

                {/* ── Sang-e-Safed & Doodh Ganga ────────────────────────── */}
                <section id="sang-e-safed">
                  <h2>Sang-e-Safed Peak & the Doodh Ganga River</h2>
                  <p>
                    Two features frame the meadow without requiring any
                    extra effort to see: <strong>Sang-e-Safed</strong>{" "}
                    ("white rock"), a peak that holds snow across much of the
                    year and forms Yusmarg's most photographed backdrop, and
                    the <strong>Doodh Ganga</strong> — literally "river of
                    milk" — a clear stream that runs along the meadow's edge
                    before eventually joining the Jhelum and feeding into
                    Srinagar's water supply further downstream.
                  </p>
                  <p>
                    Neither requires a dedicated excursion — both are visible
                    and accessible from the meadow itself, and a slow walk
                    along the Doodh Ganga's banks is a pleasant way to spend
                    the time between arriving and heading to Nilnag Lake.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation in Yusmarg is genuinely limited — this is
                    the main reason nearly every visitor treats it as a day
                    trip rather than an overnight stop.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "JKTDC Huts / Guest House",
                        icon: "🏕️",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Basic government-run huts",
                          "Limited rooms, advance booking essential",
                          "No real restaurant — carry supplies",
                        ],
                      },
                      {
                        tier: "Day Trip from Srinagar",
                        icon: "🏨",
                        range: "Recommended approach",
                        picks: [
                          "Full range of Srinagar hotels & houseboats",
                          "Return drive comfortably fits a day",
                          "Best option for most travellers",
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
                    Unless you've confirmed a JKTDC hut booking in advance, plan
                    Yusmarg as a day trip and stay overnight in{" "}
                    <Link href="/blog/srinagar-travel-guide">Srinagar</Link>{" "}
                    instead — it's simpler, and Srinagar's accommodation
                    options are dramatically wider.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Yusmarg</h2>
                  <p>
                    Food options at Yusmarg itself are basic — a few tea and
                    snack stalls near the pony stands — so most travellers
                    eat before leaving Srinagar or on the return journey.
                  </p>
                  <ul>
                    <li>
                      <strong>Kahwa:</strong> Saffron and cardamom-spiced
                      green tea, sold at meadow-side stalls — a genuinely
                      warming drink given the elevation, even in summer.
                    </li>
                    <li>
                      <strong>Noon chai:</strong> Kashmir's distinctive pink
                      salted tea, available at small local stalls along the
                      route through Chadoora.
                    </li>
                    <li>
                      <strong>Maggi and simple snacks:</strong> Basic
                      roadside fare is the practical option at the meadow
                      itself — don't expect a proper meal until you're back
                      toward Chadoora or Srinagar.
                    </li>
                    <li>
                      <strong>Pack a picnic:</strong> Given how limited food
                      options are on site, carrying sandwiches or snacks from
                      Srinagar is the most reliable plan, especially if
                      you're also walking to Nilnag Lake.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Day-Trip Itinerary from Srinagar</h2>
                  <p>
                    A single, well-paced day comfortably covers Charar-e-
                    Sharief, the Yusmarg meadow, and Nilnag Lake, with time
                    to spare for the drive back.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "7:30 AM",
                        title: "Depart Srinagar",
                        color: "bg-amber-700",
                        activities: [
                          "Leave early to beat both road and meadow crowds",
                          "Stop for breakfast or tea en route in Chadoora",
                        ],
                      },
                      {
                        day: "9:00 AM",
                        title: "Charar-e-Sharief Shrine",
                        color: "bg-forest-600",
                        activities: [
                          "Visit the shrine of Sheikh Noor-ud-din Noorani",
                          "45–60 minutes, dress modestly, footwear off inside",
                        ],
                      },
                      {
                        day: "10:30 AM",
                        title: "Arrive Yusmarg Meadow",
                        color: "bg-sky-600",
                        activities: [
                          "Pony ride or walk across the open grassland",
                          "Photography along the Doodh Ganga stream",
                        ],
                      },
                      {
                        day: "12:00 PM",
                        title: "Walk or Ride to Nilnag Lake",
                        color: "bg-stone-600",
                        activities: [
                          "1.5–2 hour trail through pine forest",
                          "Time at the lake, pack a picnic lunch",
                        ],
                      },
                      {
                        day: "3:30 PM",
                        title: "Return to Meadow",
                        color: "bg-purple-600",
                        activities: [
                          "Tea break at a meadow-side stall",
                          "Final photos before the light softens",
                        ],
                      },
                      {
                        day: "4:30 PM",
                        title: "Drive Back to Srinagar",
                        color: "bg-amber-800",
                        activities: [
                          "Return via Charar-e-Sharief / Chadoora",
                          "Arrive Srinagar by early evening",
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
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                            "Taxi (round trip from Srinagar)",
                            "₹1,800 (shared)",
                            "₹3,000 (private)",
                            "₹4,500 (private + waiting)",
                          ],
                          ["Pony ride (meadow + Nilnag)", "₹500", "₹800", "₹1,200"],
                          ["Food/snacks", "₹300", "₹600", "₹1,000"],
                          [
                            "Charar-e-Sharief (entry)",
                            "Free",
                            "Free",
                            "Free",
                          ],
                          ["Day total", "₹2,600", "₹4,400", "₹6,700"],
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
                    * Excludes Srinagar accommodation. Taxi hire is by far the
                    largest cost — sharing a cab with other travellers brings
                    the per-person cost down considerably.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Yusmarg</h2>
                  <ul>
                    <li>
                      <strong>Start early:</strong> An early departure from
                      Srinagar leaves comfortable time for Charar-e-Sharief,
                      the meadow, and the Nilnag Lake walk without rushing
                      the return drive.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> There are no ATMs at
                      Yusmarg or Charar-e-Sharief — carry enough cash from
                      Srinagar for the taxi, pony rides, and food.
                    </li>
                    <li>
                      <strong>Pack a picnic:</strong> Food options on site are
                      minimal — bring snacks and water, especially if walking
                      to Nilnag Lake.
                    </li>
                    <li>
                      <strong>Dress modestly at the shrine:</strong>
                      Charar-e-Sharief is an active place of worship — cover
                      shoulders and knees and remove footwear before
                      entering.
                    </li>
                    <li>
                      <strong>Negotiate pony rates upfront:</strong> Rates are
                      informal and negotiable — agree on the route and price
                      before setting off.
                    </li>
                    <li>
                      <strong>Check road conditions in winter:</strong>
                      Snowfall can affect the approach road between November
                      and March — confirm access locally before planning a
                      visit in that window.
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
                          "Stop at Charar-e-Sharief on the way — it's genuinely worth the detour-free hour",
                          "Start early to leave time for the Nilnag Lake walk",
                          "Carry cash, water, and snacks",
                          "Agree on pony ride rates and routes before starting",
                          "Treat the Yuz Asaf legend as local folklore, not fact",
                          "Book a JKTDC hut in advance if you want to stay overnight",
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
                          "Expect proper restaurants or ATMs on site",
                          "Show up dressed inappropriately at the shrine",
                          "Plan an overnight stay without confirming a hut booking",
                          "Leave the Nilnag Lake walk for late afternoon",
                          "Rush the visit into less than half a day",
                          "Expect Gulmarg-style infrastructure — Yusmarg is deliberately basic",
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
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-5 my-6">
                    {[
                      {
                        q: "Is Yusmarg a day trip from Srinagar?",
                        a: "Yes. Yusmarg is roughly 47 km from Srinagar, about 1.5–2 hours by road via Charar-e-Sharief, and almost all visitors do it as a day trip. Accommodation in Yusmarg itself is very limited, so a return trip to Srinagar by evening is the standard plan.",
                      },
                      {
                        q: "What is Yusmarg famous for?",
                        a: "Yusmarg is known for its wide, pine-fringed alpine meadow at around 2,400 m, its relative quiet compared to Gulmarg, pony rides across the grass, and Nilnag Lake nearby. Local folklore also links its name to a visit by Jesus (Yuz Asaf), though this is popular legend rather than established history.",
                      },
                      {
                        q: "How far is Nilnag Lake from Yusmarg?",
                        a: "Nilnag Lake is around 5–6 km from Yusmarg meadow, reached by a gentle pony ride or a walking trail through pine forest that takes roughly 1.5–2 hours one way on foot.",
                      },
                      {
                        q: "Is Yusmarg worth visiting?",
                        a: "Yes, especially for travellers who have already seen Gulmarg or Pahalgam and want a quieter, less commercial meadow experience. Yusmarg rewards visitors looking for open grassland, pine forest, and a slower pace rather than adventure infrastructure.",
                      },
                      {
                        q: "What does the name Yusmarg mean?",
                        a: "Yusmarg roughly translates to 'meadow of Yusuf' (Joseph), and popular local legend connects the name to a visit by Jesus, referred to in some Kashmiri traditions as Yuz Asaf. This is folklore passed down locally, not a verified historical claim.",
                      },
                      {
                        q: "Can I visit Yusmarg in winter?",
                        a: "Yusmarg is accessible in winter but the meadow is often snow-covered and the road can be affected by snowfall, so it's best checked locally before setting out. Most visitors prefer April to October, when the meadow is green and the drive is straightforward.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {item.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Yusmarg",
                  "Jammu and Kashmir",
                  "Kashmir",
                  "Nilnag Lake",
                  "Budgam",
                  "Charar-e-Sharief",
                  "Offbeat Kashmir",
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

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Yusmarg"
              />

              <RelatedPostsGrid currentSlug="yusmarg-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="yusmarg-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
