// src/app/blog/zeilad-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Zeilad Lake Travel Guide: Tamenglong's Sacred Lake",
  description:
    "Complete Zeilad Lake travel guide — the remote, sacred lake in Manipur's Tamenglong district, its Zeliangrong Naga heritage, forest birdlife, best time to visit, and how to plan the trip through Tamenglong.",
  keywords:
    "Zeilad Lake, Zeilat Lake Manipur, Tamenglong district, Zeliangrong Naga, Manipur off-beat travel, Tamenglong sightseeing, sacred lake Manipur",
  openGraph: {
    title: "Zeilad Lake Travel Guide: Tamenglong's Sacred Lake",
    description:
      "A remote, sacred lake deep in Manipur's forested hill country, tied to Zeliangrong Naga tradition and folklore — genuinely off the beaten path.",
    url: "https://club.kudozz.in/blog/zeilad-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Still forest-fringed lake water, evoking the remote, sacred setting of Zeilad Lake in Tamenglong",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeilad Lake Travel Guide: Tamenglong's Sacred Lake",
    description:
      "A remote, sacred lake tied to Zeliangrong Naga tradition, deep in Manipur's forested hill country.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/zeilad-lake-travel-guide",
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
          headline: "Zeilad Lake Travel Guide: Tamenglong's Sacred Lake",
          description:
            "Complete Zeilad Lake travel guide — the remote, sacred lake in Manipur's Tamenglong district, its Zeliangrong Naga heritage, and forest birdlife.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
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
            "@id": "https://club.kudozz.in/blog/zeilad-lake-travel-guide",
          },
          keywords: "Zeilad Lake, Tamenglong, Zeliangrong Naga, Manipur",
          about: {
            "@type": "Place",
            name: "Zeilad Lake",
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
                name: "Zeilad Lake",
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
    q: "Where is Zeilad Lake?",
    a: "Zeilad Lake (also spelled Zeilat) is in Tamenglong district, in the forested hill country of western Manipur — home to the Zeliangrong Naga peoples (Zeme, Liangmai, and Rongmei communities).",
  },
  {
    q: "Why is Zeilad Lake significant?",
    a: "It's considered sacred in Zeliangrong tradition, tied to local folklore and ancestral or deity worship associated with the lake, beyond its natural setting.",
  },
  {
    q: "What wildlife can be seen at Zeilad Lake?",
    a: "The surrounding forest supports birdlife, including migratory species, along with other wildlife. The wider area has been discussed for biodiversity and wildlife-sanctuary conservation status.",
  },
  {
    q: "Can I visit Zeilad Lake independently?",
    a: "It's not recommended as a solo or independent day trip. The site has minimal tourist infrastructure and is genuinely off the beaten path — it's best visited as part of a longer, planned trip through Tamenglong town with local guidance.",
  },
  {
    q: "When is the best time to visit Zeilad Lake?",
    a: "October to April, when drier conditions make the unpaved approach roads and trails more accessible. The monsoon (roughly June–September) makes the approach roads difficult.",
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
  { id: "introduction", title: "A Sacred Lake in the Hills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "things-to-do", title: "The Lake & Its Forest", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food on the Trip", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ZeiladLakeGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Still forest-fringed lake water, evoking the remote, sacred setting of Zeilad Lake in Tamenglong"
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
                { label: "Zeilad Lake", href: null },
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
              {["Zeilad Lake", "Manipur", "Tamenglong", "Off-beat"].map(
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
              Zeilad Lake: Tamenglong's Sacred Lake Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A remote, sacred lake deep in the forested hills of Tamenglong
              district, tied to Zeliangrong Naga tradition and genuinely one
              of Manipur's least-visited landscapes.
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
                  text: "Tamenglong district, Manipur",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,700 words",
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
                  <h2>A Sacred Lake in the Hills</h2>
                  <p>
                    <strong>Zeilad Lake</strong> (also spelled{" "}
                    <em>Zeilat</em>) lies in{" "}
                    <Link href="/blog/tamenglong-travel-guide">
                      Tamenglong district
                    </Link>
                    , in the forested hill country of western Manipur, home
                    to the Zeliangrong Naga peoples — the Zeme, Liangmai, and
                    Rongmei communities. It's one of the most remote and
                    least-visited natural sites covered on this site, and
                    that's very much part of its character.
                  </p>
                  <p>
                    The lake is considered sacred in Zeliangrong tradition,
                    tied to local folklore and ancestral or deity worship
                    associated with the site — this isn't just a scenic
                    stop, but a place with genuine cultural and spiritual
                    weight for the surrounding communities.
                  </p>
                  <p>
                    Dense forest surrounds the lake and supports birdlife,
                    including migratory species, along with other wildlife.
                    The wider area has been discussed for biodiversity and
                    wildlife-sanctuary conservation status, reflecting its
                    ecological significance beyond the cultural one.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Zeilad Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Tamenglong district, Manipur",
                        },
                        {
                          icon: "🛕",
                          label: "Significance",
                          value: "Sacred Zeliangrong site",
                        },
                        {
                          icon: "🦜",
                          label: "Known For",
                          value: "Forest birdlife, folklore",
                        },
                        {
                          icon: "🚪",
                          label: "Gateway",
                          value: "Tamenglong town",
                        },
                        {
                          icon: "🧭",
                          label: "Access",
                          value: "Guided visit recommended",
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
                  <h2>Best Time to Visit Zeilad Lake</h2>
                  <p>
                    Timing this trip well matters more than most — the
                    approach roads are unpaved in stretches, and season makes
                    a real difference to whether they're passable.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Drier season — our pick",
                        text: "Drier conditions make the unpaved approach roads and forest trails around Tamenglong far more accessible than during the rains.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — difficult approach",
                        text: "Heavy rain makes the unpaved roads into Tamenglong district genuinely difficult, and travel plans should generally avoid this window.",
                      },
                      {
                        season: "May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pre-monsoon transition",
                        text: "Still workable but conditions are starting to shift ahead of the rains — check local conditions before setting out.",
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
                    <strong>Our pick:</strong> October to April — drier
                    roads and trails make the journey into Tamenglong
                    district and out to the lake meaningfully more
                    manageable.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Zeilad Lake</h2>
                  <ul>
                    <li>
                      <strong>Via Imphal:</strong> Fly into Imphal, then
                      travel by road to{" "}
                      <Link href="/blog/tamenglong-travel-guide">
                        Tamenglong town
                      </Link>
                      , the district headquarters and practical gateway for
                      the region.
                    </li>
                    <li>
                      <strong>From Tamenglong town:</strong> Zeilad Lake lies
                      further into the district's forested hill country —
                      reaching it means a further stretch of road, some of
                      it unpaved, best done with a local vehicle and driver
                      familiar with the route.
                    </li>
                    <li>
                      <strong>Arrange a local guide:</strong> Given the
                      terrain and lack of signage, arranging a local guide
                      in Tamenglong town is strongly recommended rather than
                      attempting the route independently.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Inner Line Permit:</strong> Manipur requires
                    visitors from outside the state to carry an Inner Line
                    Permit (ILP), in effect since December 2019 — arrange
                    this before traveling to Manipur.
                  </div>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Check current conditions:</strong> As with
                    remote hill districts elsewhere in Manipur, check current
                    local conditions and advisories before heading into
                    Tamenglong district, and travel with a local guide given
                    the terrain and limited signage.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Lake & Its Forest</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Calm forest-fringed water, evoking the tranquil, remote setting of Zeilad Lake"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Sacred Lake</h3>
                  <p>
                    Zeilad Lake's significance in Zeliangrong tradition runs
                    deeper than its scenery — local folklore and
                    ancestral or deity worship are tied to the site, and
                    visitors should approach it with the same respect they'd
                    give any active place of local worship.
                  </p>
                  <h3>Birdwatching</h3>
                  <p>
                    The surrounding forest supports a range of birdlife,
                    including migratory species that pass through
                    seasonally — a genuine draw for birdwatchers willing to
                    make the journey into Tamenglong district.
                  </p>
                  <h3>Forest & Wildlife</h3>
                  <p>
                    Beyond birds, the dense forest around the lake supports
                    other wildlife, and the wider area has been discussed
                    for biodiversity and wildlife-sanctuary conservation
                    status — reflecting how ecologically significant this
                    stretch of Tamenglong's hill country is.
                  </p>
                  <h3>A Genuinely Off-Beat Destination</h3>
                  <p>
                    With minimal tourist infrastructure, Zeilad Lake rewards
                    travelers looking for something well outside Manipur's
                    established tourist circuit — but it demands proper
                    planning and local guidance rather than a spontaneous
                    detour.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's essentially no tourist accommodation at the
                    lake itself. Most visitors base themselves in{" "}
                    <Link href="/blog/tamenglong-travel-guide">
                      Tamenglong town
                    </Link>
                    , the district headquarters, and treat Zeilad Lake as
                    part of a longer, planned excursion rather than a quick
                    day trip.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "Tamenglong Town",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Government circuit houses",
                          "Basic guesthouses",
                          "Very limited options",
                        ],
                      },
                      {
                        tier: "Imphal (fallback base)",
                        icon: "🏨",
                        range: "₹1,000–₹4,500/night",
                        picks: [
                          "Wider hotel selection",
                          "Better for pre/post trip nights",
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
                    Book accommodation in Tamenglong town well ahead —
                    options are genuinely limited, and this isn't a
                    destination with fallback choices if your first pick
                    isn't available.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2–3 Days via Tamenglong)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Imphal to Tamenglong",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Imphal to Tamenglong town",
                          "Arrange a local guide for the Zeilad Lake trip",
                          "Overnight in Tamenglong",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Zeilad Lake",
                        color: "bg-sky-600",
                        activities: [
                          "Drive/trek further into the district with your guide",
                          "Visit Zeilad Lake respectfully",
                          "Birdwatching and forest time around the lake",
                          "Return to Tamenglong town",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Return to Imphal",
                        color: "bg-forest-600",
                        activities: [
                          "Morning in Tamenglong town",
                          "Drive back to Imphal",
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
                  <p>
                    See our full{" "}
                    <Link href="/blog/tamenglong-travel-guide">
                      Tamenglong travel guide
                    </Link>{" "}
                    for more on the wider district before planning this trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food on the Trip</h2>
                  <ul>
                    <li>
                      <strong>Carry your own supplies:</strong> Facilities
                      near the lake itself are minimal to nonexistent —
                      pack food and water for the full excursion.
                    </li>
                    <li>
                      <strong>Eat in Tamenglong town:</strong> A handful of
                      local eateries serve simple meals — your practical
                      base for food before and after the lake visit.
                    </li>
                    <li>
                      <strong>Local Naga cuisine:</strong> Tamenglong's food
                      reflects Zeliangrong Naga traditions, distinct from
                      Meitei cuisine found in Imphal — worth trying where
                      available.
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
                          ["Local guide (per day)", "₹1,200", "₹2,000", "₹3,500"],
                          ["Vehicle hire (Imphal–Tamenglong)", "₹3,000", "₹5,000", "₹8,000"],
                          ["Tamenglong stay/night", "₹700", "₹1,200", "₹2,000"],
                          ["Food/day", "₹350", "₹700", "₹1,400"],
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
                    * A local guide is genuinely essential here, not
                    optional — factor the cost in as a core part of the
                    trip rather than an add-on.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Zeilad Lake</h2>
                  <ul>
                    <li>
                      <strong>Check current local conditions first:</strong>{" "}
                      As with other remote hill districts in Manipur, check
                      current conditions and advisories before heading into
                      Tamenglong.
                    </li>
                    <li>
                      <strong>Arrange a local guide in Tamenglong town:</strong>{" "}
                      Strongly recommended given the terrain and lack of
                      signage — don't attempt this independently.
                    </li>
                    <li>
                      <strong>Travel in the dry season:</strong> October to
                      April, when the unpaved approach roads are far more
                      passable.
                    </li>
                    <li>
                      <strong>Respect the site's sacred status:</strong>{" "}
                      Zeilad Lake holds spiritual significance for the
                      Zeliangrong community — behave accordingly.
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
                          "Check current conditions before heading to Tamenglong",
                          "Arrange a local guide in Tamenglong town",
                          "Visit in the Oct–Apr dry season",
                          "Carry your Inner Line Permit for Manipur",
                          "Pack food, water, and basic supplies",
                          "Treat the lake's sacred status with respect",
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
                          "Attempt the trip independently without a guide",
                          "Travel during the monsoon (Jun–Sep)",
                          "Skip checking current local advisories",
                          "Expect tourist infrastructure at the lake",
                          "Treat the site as just a scenic photo stop",
                          "Book this as a rushed, same-day detour",
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
                    <strong>🗺️ Plan ahead:</strong> Read our full{" "}
                    <Link href="/blog/tamenglong-travel-guide">
                      Tamenglong travel guide
                    </Link>{" "}
                    before this trip, and see the wider{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for context on the state as a whole.
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
                {["Manipur", "Zeilad Lake", "Tamenglong"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="zeilad-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="zeilad-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
