// src/app/blog/mussoorie-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mussoorie Travel Guide: Mall Road, Views & Tips",
  description:
    "Complete Mussoorie guide — Mall Road, Gun Hill, Kempty Falls, Landour's quiet cantonment lanes, how to reach from Dehradun, where to stay, and a full visit plan.",
  keywords:
    "Mussoorie, Queen of the Hills, Mall Road Mussoorie, Gun Hill, Kempty Falls, Landour, Lal Tibba, Camel's Back Road, how to reach Mussoorie, Mussoorie best time to visit, Dehradun to Mussoorie, Uttarakhand hill station",
  openGraph: {
    title: "Mussoorie Travel Guide: Mall Road, Views & Tips",
    description:
      "The 'Queen of the Hills' and the closest major hill station to Delhi — Mall Road, Gun Hill's cable car, Kempty Falls, and the quiet lanes of Landour.",
    url: "https://club.kudozz.in/blog/mussoorie-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mussoorie's hill-station skyline of terraced buildings along a forested Himalayan ridge",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mussoorie Travel Guide: Mall Road, Views & Tips",
    description:
      "Mall Road, Gun Hill, Kempty Falls, and quiet Landour — the complete Mussoorie guide, the closest major hill station to Delhi and Dehradun.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mussoorie-travel-guide",
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
          headline: "Mussoorie Travel Guide: Mall Road, Views & Tips",
          description:
            "Complete Mussoorie guide — Mall Road, Gun Hill, Kempty Falls, Landour's quiet cantonment lanes, how to reach from Dehradun, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/mussoorie-travel-guide",
          },
          keywords:
            "Mussoorie, Queen of the Hills, Mall Road, Gun Hill, Kempty Falls, Landour, Lal Tibba",
          about: {
            "@type": "Place",
            name: "Mussoorie",
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
                name: "Mussoorie",
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
    q: "How far is Mussoorie from Delhi?",
    a: "Mussoorie is roughly 280-290 km from Delhi, about a 6-7 hour drive via Dehradun. It's the closest major hill station to both Delhi and Dehradun, which is why it's such a popular short weekend trip — many travellers do it as a 2-day getaway.",
  },
  {
    q: "What is the difference between Mussoorie and Landour?",
    a: "Landour is the quieter, higher, and older cantonment half of the same hill station, roughly 15-20 minutes' walk east of Mussoorie's Mall Road/Library Chowk area. Mussoorie proper has the busier Mall Road, markets, and Gun Hill; Landour has colonial-era bungalows, writers' cafés, and a slower pace — Ruskin Bond has lived there for decades.",
  },
  {
    q: "Is Mussoorie good to visit in winter with snow?",
    a: "Mussoorie occasionally gets light snowfall in late December and January, mainly around Lal Tibba and the upper ridge, and it does draw visitors hoping to see it. However snow isn't guaranteed every year, and heavy snowfall can affect the Dehradun-Mussoorie road, so check conditions before planning a winter trip around it.",
  },
  {
    q: "How many days are enough for Mussoorie?",
    a: "2 days is enough to cover Mall Road, Gun Hill, Kempty Falls, and Camel's Back Road. If you want to properly explore Landour's cafés and walks as well, or use Mussoorie as a base for a Dhanaulti day trip, 3 days is more comfortable.",
  },
  {
    q: "Is Gun Hill worth the cable car ride?",
    a: "Yes, especially at sunset — the ropeway ride itself is short but scenic, and Gun Hill (Mussoorie's second-highest point) gives a wide panorama over the Doon Valley and, on clear days, distant snow peaks. It gets crowded in peak season, so an early or late slot is more pleasant.",
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
  { id: "introduction", title: "The Queen of the Hills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mussoorie", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MussoorieGuidePage() {
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
              src="/images/destinations/manali/hero.jpg"
              alt="Mussoorie's hill-station skyline of terraced buildings along a forested Himalayan ridge"
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
                { label: "Mussoorie", href: null },
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
                "Mussoorie",
                "Uttarakhand",
                "Hill Station",
                "Landour",
                "Mall Road",
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
              Mussoorie: Mall Road, Views & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The "Queen of the Hills" and the closest major hill station to
              Delhi — Mall Road's promenade, Gun Hill's cable car views, and
              the quiet colonial lanes of Landour just above town.
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
                  text: "Garhwal Himalayas, Uttarakhand",
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
                  <h2>The Queen of the Hills</h2>
                  <p>
                    <strong>Mussoorie</strong> has been known as the "Queen
                    of the Hills" since the British established it as a
                    summer retreat in the 1820s, and the name has stuck for
                    good reason — a ridge-top town at roughly 2,000 metres,
                    strung along a spine overlooking the Doon Valley on one
                    side and, on clear days, a stretch of snow-capped
                    Himalayan peaks on the other. It sits within the wider{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>{" "}
                    hill circuit, but its proximity to Delhi makes it the one
                    most visited on short notice.
                  </p>
                  <p>
                    That proximity is really the story of Mussoorie's
                    popularity: it's the closest major hill station to both
                    Delhi and Dehradun, easily reachable as a weekend trip,
                    which keeps Mall Road busy through most of the year. But
                    the town has two distinct halves — the livelier
                    Mussoorie proper around Mall Road and Gun Hill, and the
                    quieter cantonment settlement of Landour just above it,
                    where the pace slows considerably and the colonial
                    character is best preserved.
                  </p>
                  <p>
                    Between the two you get a fairly complete hill-station
                    experience in a short trip: a promenade with mountain
                    views, a cable-car ride to a viewpoint, a waterfall
                    outside town, and forested walks that feel a world away
                    from the market crowds below.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Mussoorie at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Garhwal Himalayas, Uttarakhand",
                        },
                        {
                          icon: "🚗",
                          label: "From Dehradun",
                          value: "~35 km, ~1.5 hr drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "🏞️",
                          label: "Known For",
                          value: "Mall Road, Gun Hill, Landour",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~2,005 m",
                        },
                        {
                          icon: "🛏️",
                          label: "Stay",
                          value: "Wide range, Mall Road to Landour",
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
                  <h2>Best Time to Visit Mussoorie</h2>
                  <p>
                    Mussoorie's elevation keeps it pleasant for most of the
                    year, but each season brings a distinctly different
                    experience.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant days, clear skies, and blooming rhododendrons make this the most reliable window for mountain views and comfortable walks.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Post-monsoon clarity",
                        text: "The washed, dust-free air after monsoon often gives Mussoorie's clearest Himalayan views of the year, alongside cooling temperatures.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Occasional snow",
                        text: "Cold, and Lal Tibba's upper ridge occasionally sees light snowfall — a draw for many visitors, though it isn't guaranteed and can disrupt the Dehradun road.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy mist reduces visibility drastically and landslides can affect the approach road — the least rewarding time to visit.",
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
                    <strong>Our pick:</strong> late March to June, or
                    September to November — both windows give reliably clear
                    skies for Gun Hill and Lal Tibba's views without the
                    monsoon's mist or landslide risk.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mussoorie</h2>
                  <p>
                    Mussoorie has no airport or rail line of its own — nearly
                    every visitor routes through Dehradun first.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Jolly Grant Airport in
                      Dehradun is the nearest airport, about 55 km away, with
                      regular flights from Delhi and other major cities. A
                      taxi from the airport to Mussoorie takes roughly 2
                      hours.
                    </li>
                    <li>
                      <strong>By rail:</strong> Dehradun railway station, about
                      35 km from Mussoorie, is well connected to Delhi and
                      other cities with several daily trains, including
                      overnight options — a convenient way to arrive without
                      a full day's drive.
                    </li>
                    <li>
                      <strong>By road:</strong> From Dehradun, it's roughly a
                      1.5-hour drive up a winding hill road. Shared taxis and
                      buses run frequently from Dehradun's ISBT and railway
                      station through the day.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Weekend traffic on the
                    Dehradun-Mussoorie road can add an hour or more —
                    travelling on a weekday, or leaving early on a Saturday,
                    avoids the worst of it.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Mussoorie</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hero.jpg"
                      alt="Mussoorie town along the ridge with the Himalayan skyline behind"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Mall Road & Camel's Back Road</h3>
                  <p>
                    Mall Road is Mussoorie's spine — a pedestrian-friendly
                    promenade lined with shops, cafés, and viewpoints,
                    running roughly between Library Chowk and Kulri Bazaar.
                    It's at its liveliest in the evening, when the crowd
                    thickens and the valley lights come on below. For a
                    quieter walk with the same mountain air, Camel's Back
                    Road loops around the hillside from the Library end to
                    Kulri, passing a rock formation resembling a camel's hump
                    — popular for a relaxed evening stroll or, for the
                    energetic, a sunrise walk.
                  </p>
                  <h3>Gun Hill</h3>
                  <p>
                    Mussoorie's second-highest point, reached by a cable car
                    from Mall Road (or a steeper walking trail for those who
                    prefer it). The short ropeway ride opens onto a wide
                    panorama over the Doon Valley, and on a clear day, a
                    distant line of snow peaks including glimpses of the
                    Bandarpunch massif. Sunset is the busiest and most
                    popular time to go.
                  </p>
                  <h3>Kempty Falls</h3>
                  <p>
                    A multi-tiered waterfall about 15 km from central
                    Mussoorie, reached by road or, for a scenic option, a
                    cable car down into the gorge. It's a popular spot for
                    wading in the pools at the base, especially with
                    families — expect crowds in peak season and on weekends.
                  </p>
                  <h3>Lal Tibba & Company Garden</h3>
                  <p>
                    Lal Tibba, in the Landour area, is Mussoorie's highest
                    point, with a paid telescope viewpoint offering one of
                    the region's best close-up views of the high Himalayan
                    range on a clear morning. Company Garden, a landscaped
                    park closer to central Mussoorie with a small lake and
                    walking paths, is a gentler, family-friendly stop.
                  </p>

                  <h3>Landour: Mussoorie's Quieter Half</h3>
                  <p>
                    Just a 15-20 minute walk uphill from Mall Road's Library
                    Chowk, Landour is technically part of Mussoorie but feels
                    like a separate town — a former British Army cantonment
                    that has stayed deliberately low-key, with narrow lanes,
                    old stone-and-timber cottages, and a scattering of
                    writers' cafés and bakeries rather than souvenir shops.
                    It's best known today as the long-time home of author{" "}
                    <strong>Ruskin Bond</strong>, whose stories are steeped
                    in this exact landscape, and it retains a literary,
                    unhurried character that draws visitors wanting
                    Mussoorie without the Mall Road crowds.
                  </p>
                  <p>
                    A slow walk through Landour's Sisters' Bazaar and Char
                    Dukan area, a stop at one of its old bakeries, and the
                    climb up to Lal Tibba together make for a satisfying
                    half-day that feels entirely different from the town
                    below. The ruins of <strong>George Everest's House</strong>{" "}
                    — the surveyor after whom the world's highest peak is
                    named — sit on a ridge a short drive or trek past
                    Landour, with sweeping views over the valley and a
                    faded, atmospheric quality that rewards the detour.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you only have time for one
                    "extra" stop beyond Mall Road and Gun Hill, make it
                    Landour — it's the part of Mussoorie most visitors wish
                    they'd spent more time in.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mussoorie</h2>
                  <p>
                    Accommodation clusters around Mall Road and Kulri Bazaar
                    for convenience, with quieter and often more atmospheric
                    options up in Landour.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,800/night",
                        picks: [
                          "Guesthouses near Kulri Bazaar",
                          "Budget hotels off Mall Road",
                          "Basic stays near the bus stand",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹7,500/night",
                        picks: [
                          "Mall Road-facing hotels with valley views",
                          "Landour cottage stays",
                          "Family hotels near Library Chowk",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹10,000–₹25,000+/night",
                        picks: [
                          "Colonial-era heritage hotels on Mall Road",
                          "Boutique Landour heritage properties",
                          "Resort-style hotels with valley-facing suites",
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
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Mall Road",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Dehradun, check in near Mall Road",
                          "Afternoon at Mall Road and Camel's Back Road",
                          "Evening cable car up to Gun Hill for sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Landour & Lal Tibba",
                        color: "bg-sky-600",
                        activities: [
                          "Morning walk through Landour's Char Dukan and Sisters' Bazaar",
                          "Telescope viewpoint at Lal Tibba",
                          "Detour to George Everest's House ruins",
                          "Evening at Company Garden",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Kempty Falls & Onward",
                        color: "bg-forest-600",
                        activities: [
                          "Morning at Kempty Falls",
                          "Late morning return to Dehradun, or onward to Dhanaulti",
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
                    * Many travellers combine Mussoorie with a day trip to{" "}
                    <Link href="/blog/dhanaulti-travel-guide">
                      Dhanaulti's pine forests
                    </Link>{" "}
                    or an onward stop at{" "}
                    <Link href="/blog/tehri-lake-travel-guide">
                      Tehri Lake
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Mussoorie</h2>
                  <ul>
                    <li>
                      <strong>Mall Road cafés and restaurants:</strong> The
                      widest choice, from North Indian thalis to continental
                      café menus, mostly with valley or street views.
                    </li>
                    <li>
                      <strong>Landour's old bakeries:</strong> A handful of
                      long-running bakeries in Landour serve fresh bread,
                      pastries, and simple breakfasts — a quieter,
                      slower-paced alternative to Mall Road dining.
                    </li>
                    <li>
                      <strong>Tibetan and momo stalls:</strong> Small
                      eateries around Kulri Bazaar and Landour serve
                      momos and thukpa, reflecting the town's Tibetan
                      settler community.
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
                            "₹15,000",
                          ],
                          ["Travel from Dehradun (round trip)", "₹800", "₹1,800", "₹3,000"],
                          ["Food/day", "₹600", "₹1,500", "₹3,500"],
                          [
                            "Gun Hill cable car (return)",
                            "₹250",
                            "₹250",
                            "₹250",
                          ],
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
                    * Figures are per person, per day (except accommodation
                    and travel, which are per night/round trip as noted).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mussoorie</h2>
                  <ul>
                    <li>
                      <strong>Avoid peak weekends if possible:</strong> Mall
                      Road and the approach road get heavily congested on
                      Saturday-Sunday in season — weekdays are far more
                      relaxed.
                    </li>
                    <li>
                      <strong>Carry warm layers year-round:</strong> Evenings
                      cool down noticeably even in summer, and winters can be
                      cold enough for heavy jackets.
                    </li>
                    <li>
                      <strong>Walk, don't drive, within Mall Road:</strong>{" "}
                      Much of Mall Road is pedestrian-only or heavily
                      restricted for vehicles — park at one end and walk.
                    </li>
                    <li>
                      <strong>Book ahead for Gun Hill's cable car in peak
                      season:</strong> Queues build fast around sunset,
                      especially May-June and around New Year.
                    </li>
                    <li>
                      <strong>Give Landour its own half-day:</strong>{" "}
                      Rushing it as a quick photo stop misses the point of
                      the place — it rewards slowing down.
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
                          "Catch Gun Hill at sunset on a clear day",
                          "Spend at least half a day in Landour",
                          "Carry warm layers even in summer",
                          "Walk Camel's Back Road at a relaxed pace",
                          "Travel midweek to skip the worst crowds",
                          "Pair the trip with a Dhanaulti day visit",
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
                          "Drive up on a peak-season weekend without a plan",
                          "Expect vehicle access on central Mall Road",
                          "Skip Landour for a quick Gun Hill-only trip",
                          "Rely on guaranteed snow in winter",
                          "Visit during heavy monsoon for mountain views",
                          "Leave Kempty Falls for a rushed evening stop",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Mussoorie
                    with the quieter pine forests of{" "}
                    <Link href="/blog/dhanaulti-travel-guide">Dhanaulti</Link>
                    , a stop at{" "}
                    <Link href="/blog/tehri-lake-travel-guide">
                      Tehri Lake
                    </Link>{" "}
                    for water sports, or head down to{" "}
                    <Link href="/blog/rishikesh-adventure-travel-guide">
                      Rishikesh
                    </Link>{" "}
                    for a completely different pace before flying out of
                    Dehradun.
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
                  "Mussoorie",
                  "Uttarakhand",
                  "Hill Station",
                  "Landour",
                  "Mall Road",
                  "Dehradun",
                  "Queen of the Hills",
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

              <RelatedPostsGrid currentSlug="mussoorie-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mussoorie-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
