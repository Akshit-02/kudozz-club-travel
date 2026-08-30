// src/app/blog/patnitop-travel-guide/page.tsx
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
  title: "Patnitop Travel Guide: Paragliding, Pines & Best Time",
  description:
    "The complete Patnitop travel guide: paragliding, pine forests, snowfall season, distance from Jammu, Sanasar meadow, where to stay, and a full itinerary.",
  keywords:
    "Patnitop travel guide, Patnitop paragliding, Patnitop distance from Jammu, best time to visit Patnitop, Patnitop snowfall, Sanasar, Patnitop Jammu Kashmir, Nathatop, Patnitop weather, Sudh Mahadev temple, Patnitop weekend trip",
  openGraph: {
    title: "Patnitop Travel Guide: Paragliding, Pines & Best Time",
    description:
      "Pine-forested plateau, paragliding launch sites, and winter snow within a three-hour drive of Jammu — the complete Patnitop travel guide.",
    url: "https://club.kudozz.in/blog/patnitop-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pine forest and rolling hills at Patnitop hill station on the Jammu-Srinagar highway",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Patnitop Travel Guide: Paragliding, Pines & Best Time",
    description:
      "Pine-forested plateau, paragliding launch sites, and winter snow within a three-hour drive of Jammu — the complete Patnitop travel guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/patnitop-travel-guide",
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
          headline: "Patnitop Travel Guide: Paragliding, Pines & Best Time",
          description:
            "The complete Patnitop travel guide: paragliding, pine forests, snowfall season, distance from Jammu, Sanasar meadow, where to stay, and a full itinerary.",
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
            "@id": "https://club.kudozz.in/blog/patnitop-travel-guide",
          },
          keywords:
            "Patnitop travel guide, Patnitop paragliding, Sanasar, Patnitop snowfall, Jammu and Kashmir",
          about: {
            "@type": "Place",
            name: "Patnitop",
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
              { "@type": "ListItem", position: 4, name: "Patnitop" },
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
              name: "How far is Patnitop from Jammu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Patnitop is roughly 112 km from Jammu, about a 3-hour drive along the Jammu-Srinagar national highway (NH44) via Udhampur and Kud. It's one of the closest genuine hill-station getaways from Jammu, and a common weekend or highway-stopover destination.",
              },
            },
            {
              "@type": "Question",
              name: "Is Patnitop good for snow?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Patnitop and the nearby meadow of Sanasar reliably get snowfall between late December and February, making it one of the closest snow destinations for travellers from Jammu and North India who don't want to make the longer trip to Gulmarg or Kashmir.",
              },
            },
            {
              "@type": "Question",
              name: "Is Patnitop worth visiting?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, particularly as a weekend trip or a break in the long Jammu-Srinagar drive. It doesn't have the scale of Kashmir's valleys, but its pine forests, cool climate, paragliding, and proximity to Sanasar meadow make it a genuinely worthwhile 1-2 day stop, especially for families and first-time hill-station visitors.",
              },
            },
            {
              "@type": "Question",
              name: "What is the best time to visit Patnitop for snowfall?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Late December through February is the best window for snow at Patnitop and Sanasar, with January typically seeing the heaviest and most consistent snowfall. For pleasant weather without snow, April to June is the better choice.",
              },
            },
            {
              "@type": "Question",
              name: "Is Sanasar near Patnitop?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Sanasar is about 19 km from Patnitop, roughly a 45-minute drive on a scenic forest road. It's a large open meadow known for its golf course, paragliding launch site, and as the trailhead for the Nathatop viewpoint — most visitors combine both in a single day trip.",
              },
            },
            {
              "@type": "Question",
              name: "Can you do paragliding in Patnitop?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Paragliding is available seasonally around Patnitop, but the primary and most reliable launch site is at nearby Sanasar meadow, roughly 19 km away, where the open terrain and consistent thermals make for better conditions. Most operators in Patnitop arrange the short drive to Sanasar as part of the package.",
              },
            },
            {
              "@type": "Question",
              name: "Is Patnitop on the way to Srinagar from Jammu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Patnitop sits directly on the Jammu-Srinagar national highway (NH44), roughly two hours before Batote. Many travellers driving between Jammu and Kashmir break their journey here for a night, or detour a few kilometres off the highway for a half-day visit.",
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
  { id: "introduction", title: "Why Visit Patnitop?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Patnitop", level: 2 },
  { id: "adventure-activities", title: "Adventure Activities", level: 2 },
  { id: "sanasar", title: "Sanasar Meadow & Nathatop", level: 2 },
  {
    id: "shiv-garh-sudh-mahadev",
    title: "Shiv Garh & Sudh Mahadev Temple",
    level: 2,
  },
  { id: "batote", title: "Batote — The Highway Junction Town", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1–2 Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PatnitopGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Pine forest and rolling hills at Patnitop hill station on the Jammu-Srinagar highway"
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
                { label: "Patnitop", href: null },
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
                "Patnitop",
                "Jammu and Kashmir",
                "Sanasar",
                "Paragliding",
                "Weekend Getaway",
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
              Patnitop Travel Guide: Paragliding, Pine Forests & Snow on the
              Jammu-Srinagar Highway
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A pine-forested plateau just three hours from Jammu — paragliding
              launches, meadow drives to Sanasar, and one of the closest
              genuine snow experiences in North India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Patnitop, Jammu & Kashmir",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,500 words",
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
                  <h2>Why Visit Patnitop?</h2>
                  <p>
                    Roughly midway along the winding{" "}
                    <strong>Jammu-Srinagar highway</strong>, at an elevation of
                    about 2,024 metres, a plateau of dense pine and deodar
                    forest opens up into rolling grassy meadows —{" "}
                    <strong>Patnitop</strong>. For travellers based in Jammu or
                    Delhi who don't have the time or budget for a full{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir
                    </Link>{" "}
                    trip, it's the closest thing to a genuine hill-station
                    escape — cool pine-scented air, paragliding launches, and,
                    in winter, snow that's a fraction of the distance of
                    Gulmarg or Sonamarg.
                  </p>
                  <p>
                    Patnitop's name is believed to be a corruption of "Patan da
                    Talab" (Patan's pond), referencing a small lake that once
                    existed on the plateau. Today it functions in two distinct
                    ways: as a weekend getaway in its own right, popular with
                    families from Jammu for its short drive and mild-adventure
                    activities, and as a highway stopover for anyone driving
                    the long haul between Jammu and Srinagar, breaking up a
                    journey that otherwise runs 7-8 hours in one stretch.
                  </p>
                  <p>
                    It isn't a destination that competes with Kashmir's
                    valleys on scale — there's no Dal Lake or Gulmarg gondola
                    here. What it offers instead is convenience: a real hill
                    station, real pine forest, and a real paragliding launch
                    site at nearby Sanasar, all reachable in a single day from
                    Jammu without the logistics of a Kashmir trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Patnitop at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Udhampur, J&K",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~2,024 m",
                        },
                        {
                          icon: "🚗",
                          label: "From Jammu",
                          value: "~112 km / 3 hrs",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Apr–Jun, Dec–Feb",
                        },
                        {
                          icon: "🪂",
                          label: "Known For",
                          value: "Paragliding, Pine Forest",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit Patnitop</h2>
                  <p>
                    Patnitop has two clearly distinct "best" windows, much
                    like the rest of the region — one for green meadows and
                    pleasant weather, one for snow.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🌿",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Pleasant & green — our pick",
                        text: "Daytime temperatures of 15-25°C, clear skies, and the pine forest at its greenest. The best window for paragliding, walks, and general sightseeing without cold-weather gear.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon, misty",
                        text: "Frequent showers and low cloud cover roll through the plateau, which can look striking but also close paragliding for days at a time. Roads can see occasional landslip delays.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear & cool",
                        text: "Post-monsoon skies clear up, temperatures dip into a comfortable range, and visibility on the highway drive and at Sanasar's viewpoints is at its best.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Snow season",
                        text: "Patnitop and Sanasar reliably see snowfall, drawing weekend crowds from Jammu. Sub-zero nights are common; the highway can occasionally close for a day after heavy snow.",
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
                    <strong>Our pick:</strong> May for green meadows and
                    reliable paragliding weather, or late January if snow is
                    the priority — Patnitop rarely disappoints in either
                    window, which is part of why it's such a dependable
                    weekend trip from Jammu.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Patnitop</h2>
                  <p>
                    Patnitop sits directly on NH44, the main{" "}
                    <Link href="/blog/jammu-travel-guide">Jammu</Link> to
                    Srinagar highway, which makes it one of the easiest hill
                    stations in the region to reach without a dedicated day
                    trip.
                  </p>
                  <ul>
                    <li>
                      <strong>From Jammu:</strong> Roughly 112 km via NH44
                      through Udhampur and Kud — about 3 hours by car or taxi.
                      This is the most common approach, whether Patnitop is
                      the destination itself or a stop en route to Srinagar.
                    </li>
                    <li>
                      <strong>From Udhampur:</strong> About 40 km, roughly
                      1-1.5 hours — Udhampur is the nearest large town and
                      railhead, and many budget travellers break their journey
                      here before continuing up to the plateau.
                    </li>
                    <li>
                      <strong>By Air:</strong> Jammu Airport is the nearest
                      airport, about 115 km away, with direct flights from
                      Delhi, Mumbai, and other major cities. From there it's
                      the same 3-hour road journey.
                    </li>
                    <li>
                      <strong>By Train:</strong> Jammu Tawi and Udhampur are
                      both connected to Delhi and other major cities; Udhampur
                      is the closer railhead if you want to shorten the road
                      leg.
                    </li>
                    <li>
                      <strong>By Road:</strong> The Jammu-Srinagar highway is
                      well-paved and scenic beyond Udhampur, with the Chenani-
                      Nashri tunnel (one of India's longest road tunnels)
                      cutting travel time significantly before the final climb
                      up to Patnitop.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're combining Patnitop
                    with a{" "}
                    <Link href="/blog/katra-travel-guide">
                      Vaishno Devi trip from Katra
                    </Link>
                    , route via Jammu — both are comfortably reachable within
                    a single extended weekend without much backtracking.
                  </div>
                </section>

                {/* ── Adventure Activities ───────────────────────────────── */}
                <section id="adventure-activities">
                  <h2>Adventure Activities in Patnitop</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Open meadow and pine-covered slopes near Sanasar, the paragliding launch site close to Patnitop"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Patnitop's appeal is less about a single landmark and more
                    about a cluster of mild-adventure activities spread across
                    the plateau and the meadow at Sanasar nearby.
                  </p>
                  <ul>
                    <li>
                      <strong>Paragliding:</strong> The main draw for most
                      visitors, run out of the open meadow at Sanasar
                      (roughly 19 km away) where launch conditions are more
                      reliable than on Patnitop's forested slopes. Tandem
                      flights with a certified instructor typically run
                      ₹1,500-₹3,000 depending on flight duration.
                    </li>
                    <li>
                      <strong>Cable car / ropeway:</strong> A short ropeway
                      near Patnitop gives an easy elevated view over the pine
                      forest and surrounding valleys — a low-effort way to see
                      the plateau's layout, good for families and older
                      travellers.
                    </li>
                    <li>
                      <strong>Zorbing:</strong> Available seasonally on
                      Patnitop's grassy slopes — rolling downhill inside a
                      large inflatable ball, a popular activity with kids and
                      first-time visitors.
                    </li>
                    <li>
                      <strong>Skiing (winter):</strong> When snow settles in
                      December-February, basic skiing and snow-tubing set up
                      informally around Patnitop and Sanasar — nowhere near
                      the scale of Gulmarg's proper ski resort, but enough for
                      a first taste of snow sport.
                    </li>
                    <li>
                      <strong>Forest walks:</strong> Marked trails through the
                      deodar and pine forest around the plateau, easy enough
                      for a casual morning or evening walk without any trekking
                      experience.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book paragliding at Sanasar
                    for the morning — winds tend to pick up by early
                    afternoon, and operators often pause flights when
                    conditions turn gusty.
                  </div>
                </section>

                {/* ── Sanasar ─────────────────────────────────────────────── */}
                <section id="sanasar">
                  <h2>Sanasar Meadow & Nathatop</h2>
                  <p>
                    <strong>Sanasar</strong> is a wide, saucer-shaped meadow
                    about 19 km from Patnitop, reached by a scenic 45-minute
                    drive through forest. It's the single most-visited add-on
                    from Patnitop, and for many travellers, the actual
                    highlight of the trip.
                  </p>
                  <ul>
                    <li>
                      <strong>Golf course:</strong> Sanasar is home to one of
                      India's higher-altitude golf courses, a 9-hole course
                      set right in the meadow — unusual enough to be worth a
                      stop even for non-golfers, just for the setting.
                    </li>
                    <li>
                      <strong>Paragliding launch site:</strong> The open,
                      gently sloping meadow gives Sanasar more consistent
                      wind conditions than the forested Patnitop plateau,
                      which is why most operators launch flights from here.
                    </li>
                    <li>
                      <strong>Nathatop viewpoint:</strong> A short drive or
                      trek higher above Sanasar, Nathatop sits at a greater
                      elevation and holds snow for longer into the season than
                      Patnitop itself — a reliable bet for snow photos even in
                      a light-snowfall year.
                    </li>
                    <li>
                      <strong>Camping:</strong> Basic tented camps set up
                      seasonally around the meadow, a simple way to spend a
                      night under genuinely dark skies away from Patnitop's
                      more built-up stretch.
                    </li>
                  </ul>
                  <blockquote>
                    Most visitors treat Sanasar as a half-day trip from
                    Patnitop, but if snow, meadow photography, or a quieter
                    pace is the priority, it's worth allotting a full day —
                    Nathatop's viewpoint alone justifies the extra time.
                  </blockquote>
                </section>

                {/* ── Shiv Garh & Sudh Mahadev ───────────────────────────── */}
                <section id="shiv-garh-sudh-mahadev">
                  <h2>Shiv Garh & Sudh Mahadev Temple</h2>
                  <p>
                    A short detour from the Patnitop plateau leads to two
                    connected pilgrimage sites that add a devotional layer to
                    what's otherwise a scenery-and-adventure trip.
                  </p>
                  <ul>
                    <li>
                      <strong>Sudh Mahadev Temple:</strong> An ancient Shiva
                      shrine roughly 42 km from Patnitop via Chenani, believed
                      to house a trident linked to the Mahabharata legend of
                      Bhima and the demon Hidimba. It draws significant crowds
                      during the annual Sudh Mahadev Mela.
                    </li>
                    <li>
                      <strong>Shiv Garh cave:</strong> Located near the
                      temple, a natural cave associated with the same
                      mythology, a modest but atmospheric stop for visitors
                      already making the trip out to Sudh Mahadev.
                    </li>
                    <li>
                      <strong>Mantalai:</strong> Further along the same route,
                      a temple and lake at the base of the Kailash range,
                      considered the mythological birthplace of Kartikeya —
                      more remote and less visited, best combined with an
                      early start.
                    </li>
                  </ul>
                  <p>
                    This isn't an essential add-on for every itinerary, but
                    travellers with a spare day, or those who'd otherwise
                    combine Patnitop with a pilgrimage circuit around{" "}
                    <Link href="/blog/katra-travel-guide">Katra</Link>, will
                    find it a worthwhile detour.
                  </p>
                </section>

                {/* ── Batote ──────────────────────────────────────────────── */}
                <section id="batote">
                  <h2>Batote — The Highway Junction Town</h2>
                  <p>
                    About 19 km beyond Patnitop on NH44 sits{" "}
                    <strong>Batote</strong>, a small highway town that
                    functions mainly as a junction and rest stop rather than
                    a destination in its own right — but it's worth knowing
                    about for two reasons.
                  </p>
                  <ul>
                    <li>
                      <strong>Highway rest stop:</strong> Dhabas and small
                      hotels along the highway here make Batote a natural
                      lunch or tea break for anyone driving the full
                      Jammu-Srinagar stretch, roughly two hours past Patnitop.
                    </li>
                    <li>
                      <strong>Gateway to Bhaderwah:</strong> Batote is also
                      the turn-off point for the road toward{" "}
                      <Link href="/blog/bhaderwah-travel-guide">
                        Bhaderwah
                      </Link>
                      , the "Mini Kashmir" of Doda district — a worthwhile
                      extension for travellers with a few extra days who want
                      a quieter, less-visited valley beyond Patnitop.
                    </li>
                  </ul>
                  <p>
                    Most day visitors to Patnitop won't need to go as far as
                    Batote, but it's a useful reference point if you're
                    planning where to stop, or where to branch off toward
                    Bhaderwah instead of continuing straight to Srinagar.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Patnitop</h2>
                  <p>
                    Accommodation is concentrated along the highway stretch
                    through Patnitop itself, with a smaller cluster of
                    seasonal camps at Sanasar.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "J&K Tourism huts, Patnitop",
                          "Highway guesthouses",
                          "Basic tented camps, Sanasar",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Hotel Chenab View",
                          "The Sarai, Patnitop",
                          "Forest-view resorts on NH44",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹6,000–₹12,000+/night",
                        picks: [
                          "Fortune Resort Heevan",
                          "Patnitop Club & Resort",
                          "Premium pine-forest cottages",
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
                    Book ahead for weekends between December and February —
                    Patnitop's proximity to Jammu makes it a magnet for
                    short-notice snow trips, and rooms fill up fast the moment
                    snowfall is forecast.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Patnitop</h2>
                  <p>
                    Patnitop's food scene runs mostly through its highway
                    dhabas and hotel restaurants — simple, hearty North Indian
                    and Dogri fare suited to the cold.
                  </p>
                  <ul>
                    <li>
                      <strong>Rajma Chawal & Kadhi Chawal:</strong> Standard
                      comfort food across the highway dhabas — a reliable,
                      filling choice after a cold morning of paragliding or
                      sightseeing.
                    </li>
                    <li>
                      <strong>Maggi & hot tea:</strong> The default stop at
                      roadside stalls near viewpoints — plain, but genuinely
                      welcome given how quickly temperatures drop once the
                      sun sets.
                    </li>
                    <li>
                      <strong>Dogri thali:</strong> A few local restaurants
                      serve Dogri-style thalis with rajma, kaladi cheese, and
                      seasonal vegetables — worth seeking out over generic
                      highway food if time allows.
                    </li>
                    <li>
                      <strong>Kaladi kulcha:</strong> A Jammu regional
                      specialty — grilled local cheese served inside a soft
                      kulcha — occasionally available at hotel restaurants and
                      well worth trying if you spot it.
                    </li>
                    <li>
                      <strong>Roasted corn & local fruit:</strong> Seasonal
                      roadside stalls sell roasted corn and, in season, local
                      apples and plums from Udhampur's orchards.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>1–2 Day Patnitop Itinerary</h2>
                  <p>
                    Patnitop works both as a standalone weekend trip and as an
                    overnight stopover on a longer Jammu-Srinagar drive — here's
                    how to structure either.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Patnitop Plateau",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Jammu (~3 hrs), check into hotel",
                          "Afternoon: Cable car / ropeway, forest walk",
                          "Evening: Zorbing or leisure time on the plateau",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sanasar & Nathatop",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Drive to Sanasar (~45 min)",
                          "Paragliding flight at the meadow launch site",
                          "Afternoon: Nathatop viewpoint, snow (in season)",
                          "Return to Jammu or continue toward Srinagar",
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

                  <blockquote>
                    <strong>As a highway stopover:</strong> If you're driving
                    onward to Srinagar, an overnight in Patnitop after leaving{" "}
                    <Link href="/blog/jammu-travel-guide">Jammu</Link> in the
                    afternoon breaks the 7-8 hour drive into two comfortable
                    legs, with Sanasar as a worthwhile morning detour before
                    continuing north.
                  </blockquote>
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
                            "₹1,200",
                            "₹3,500",
                            "₹8,000",
                          ],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          [
                            "Local transport / Sanasar trip",
                            "₹800",
                            "₹1,500",
                            "₹2,500",
                          ],
                          [
                            "Paragliding & activities",
                            "₹1,500",
                            "₹2,500",
                            "₹3,500",
                          ],
                          ["Daily total", "₹4,000", "₹8,500", "₹16,000"],
                          [
                            "2-Day trip total",
                            "₹8,000",
                            "₹17,000",
                            "₹32,000",
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
                    * Excludes travel to Jammu. Paragliding at Sanasar and cab
                    hire for the Sanasar/Nathatop trip are typically the
                    largest variable costs on an otherwise inexpensive trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Patnitop</h2>
                  <ul>
                    <li>
                      <strong>Carry warm layers year-round:</strong> Even in
                      summer, evenings on the plateau drop noticeably colder
                      than Jammu — pack a jacket regardless of season.
                    </li>
                    <li>
                      <strong>Check road conditions in winter:</strong> Heavy
                      snowfall can briefly close sections of NH44 near
                      Patnitop — check highway status before travelling in
                      December-February.
                    </li>
                    <li>
                      <strong>Book paragliding through registered
                      operators:</strong> Verify safety gear and instructor
                      certification at Sanasar rather than the cheapest
                      roadside offer.
                    </li>
                    <li>
                      <strong>Avoid monsoon months if possible:</strong>{" "}
                      July-August brings mist, rain, and occasional landslide
                      delays that can cancel outdoor activities entirely.
                    </li>
                    <li>
                      <strong>Fuel up before Patnitop:</strong> Fuel stations
                      are sparser past Udhampur — top up before the final
                      stretch up to the plateau.
                    </li>
                    <li>
                      <strong>Book weekend stays in advance:</strong> Being so
                      close to Jammu, Patnitop sees heavy weekend and
                      snow-forecast crowds — rooms can sell out with little
                      notice.
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
                          "Carry a jacket even in summer months",
                          "Combine Patnitop with a half-day trip to Sanasar",
                          "Book paragliding through certified operators",
                          "Start early if driving onward to Srinagar",
                          "Check NH44 road status before winter travel",
                          "Book weekend accommodation well in advance",
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
                          "Expect Kashmir-valley scale from a short highway stop",
                          "Travel monsoon months expecting clear paragliding weather",
                          "Skip fuel-up before leaving Udhampur",
                          "Book unverified roadside paragliding offers",
                          "Arrive on a winter weekend without a room booked",
                          "Underestimate evening cold, even in April-June",
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
                        q: "How far is Patnitop from Jammu?",
                        a: "Patnitop is roughly 112 km from Jammu, about a 3-hour drive along the Jammu-Srinagar national highway (NH44) via Udhampur and Kud. It's one of the closest genuine hill-station getaways from Jammu, and a common weekend or highway-stopover destination.",
                      },
                      {
                        q: "Is Patnitop good for snow?",
                        a: "Yes. Patnitop and the nearby meadow of Sanasar reliably get snowfall between late December and February, making it one of the closest snow destinations for travellers from Jammu and North India who don't want to make the longer trip to Gulmarg or Kashmir.",
                      },
                      {
                        q: "Is Patnitop worth visiting?",
                        a: "Yes, particularly as a weekend trip or a break in the long Jammu-Srinagar drive. It doesn't have the scale of Kashmir's valleys, but its pine forests, cool climate, paragliding, and proximity to Sanasar meadow make it a genuinely worthwhile 1-2 day stop, especially for families and first-time hill-station visitors.",
                      },
                      {
                        q: "What is the best time to visit Patnitop for snowfall?",
                        a: "Late December through February is the best window for snow at Patnitop and Sanasar, with January typically seeing the heaviest and most consistent snowfall. For pleasant weather without snow, April to June is the better choice.",
                      },
                      {
                        q: "Is Sanasar near Patnitop?",
                        a: "Yes, Sanasar is about 19 km from Patnitop, roughly a 45-minute drive on a scenic forest road. It's a large open meadow known for its golf course, paragliding launch site, and as the trailhead for the Nathatop viewpoint — most visitors combine both in a single day trip.",
                      },
                      {
                        q: "Can you do paragliding in Patnitop?",
                        a: "Paragliding is available seasonally around Patnitop, but the primary and most reliable launch site is at nearby Sanasar meadow, roughly 19 km away, where the open terrain and consistent thermals make for better conditions. Most operators in Patnitop arrange the short drive to Sanasar as part of the package.",
                      },
                      {
                        q: "Is Patnitop on the way to Srinagar from Jammu?",
                        a: "Yes, Patnitop sits directly on the Jammu-Srinagar national highway (NH44), roughly two hours before Batote. Many travellers driving between Jammu and Kashmir break their journey here for a night, or detour a few kilometres off the highway for a half-day visit.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2 text-base"
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
                  "Patnitop",
                  "Jammu and Kashmir",
                  "Sanasar",
                  "Paragliding",
                  "Nathatop",
                  "Weekend Getaway",
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

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Patnitop"
              />

              <RelatedPostsGrid currentSlug="patnitop-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="patnitop-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
