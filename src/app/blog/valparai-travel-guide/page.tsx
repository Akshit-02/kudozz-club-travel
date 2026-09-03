// src/app/blog/valparai-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Valparai Travel Guide: Tea Estates & Wildlife",
  description:
    "Complete Valparai guide — tea and coffee estates on the Anaimalai plateau, wildlife sightings on the Anamalai Tiger Reserve buffer roads, the 40-hairpin ghat drive from Pollachi, and a full visit plan.",
  keywords:
    "Valparai travel guide, Valparai tea estates, Anamalai Tiger Reserve, Valparai wildlife, Sholayar Dam, Aliyar Dam, Pollachi to Valparai, Valparai hairpin bends, how to reach Valparai, lion-tailed macaque",
  openGraph: {
    title: "Valparai Travel Guide: Tea Estates & Wildlife",
    description:
      "A tea-plantation plateau in the Western Ghats where elephants and lion-tailed macaques share the road with the estates — the complete Valparai guide.",
    url: "https://club.kudozz.in/blog/valparai-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Rolling green plantation hills wrapped in mist, evoking Valparai's tea and coffee estates in the Western Ghats",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Valparai Travel Guide: Tea Estates & Wildlife",
    description:
      "Tea estates, a 40-hairpin ghat road, and a genuine wildlife corridor in the Western Ghats — the complete Valparai guide.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/valparai-travel-guide",
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
          headline: "Valparai Travel Guide: Tea Estates & Wildlife",
          description:
            "Complete Valparai guide — tea and coffee estates on the Anaimalai plateau, wildlife sightings on the Anamalai Tiger Reserve buffer roads, the 40-hairpin ghat drive from Pollachi, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/valparai-travel-guide",
          },
          keywords:
            "Valparai, Tamil Nadu, tea estates, Anamalai Tiger Reserve, Western Ghats, wildlife",
          about: {
            "@type": "Place",
            name: "Valparai",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tamil Nadu",
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
                name: "Tamil Nadu",
                item: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Valparai",
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
    q: "How far is Valparai from Coimbatore?",
    a: "Valparai is roughly 100 km from Coimbatore, via Pollachi — about a 3.5-4 hour drive, most of it on the winding ghat road up from Pollachi.",
  },
  {
    q: "Is the ghat road to Valparai difficult to drive?",
    a: "The road climbs through roughly 40 hairpin bends over about 25 km, which makes it slow rather than technically dangerous — drive it in daylight, take it at an easy pace, and it's manageable for most drivers. It gets slipperier and riskier in heavy monsoon rain.",
  },
  {
    q: "What wildlife might I see in Valparai?",
    a: "Elephants are the most commonly reported sighting, often crossing or standing near the roads through the estates. Nilgiri tahr and the endangered lion-tailed macaque are also associated with the area, though sightings of the latter two are less predictable — treat any sighting as a bonus rather than a guarantee.",
  },
  {
    q: "What is the best time to visit Valparai?",
    a: "October to February is the best window — clear weather, comfortable temperatures, and generally good wildlife visibility. The monsoon (June-September) makes the plateau lush and green but the ghat road becomes slower and more slippery.",
  },
  {
    q: "Is Valparai good for a weekend trip?",
    a: "Yes — two days is enough to enjoy the ghat drive, a walk or drive through the tea and coffee estates, wildlife spotting, and a stop at Sholayar Dam or Aliyar Dam, without feeling rushed.",
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
  { id: "introduction", title: "A Tea Plateau in Tiger Country", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Valparai", level: 2 },
  { id: "things-to-do", title: "Estates, Wildlife & Dams", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ValparaiGuidePage() {
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
              alt="Rolling green plantation hills wrapped in mist, evoking Valparai's tea and coffee estates in the Western Ghats"
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
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Valparai", href: null },
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
                "Valparai",
                "Tea Estates",
                "Anamalai Tiger Reserve",
                "Western Ghats",
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
              Valparai: Tea Estates, Wildlife & Ghat Road Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A plateau of tea and coffee estates in the Western Ghats,
              reached by 40 hairpin bends, where elephants and rare
              lion-tailed macaques share the road with the plantations.
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
                  text: "Coimbatore district, Tamil Nadu",
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
                  <h2>A Tea Plateau in Tiger Country</h2>
                  <p>
                    <strong>Valparai</strong> sits on a plateau roughly
                    3,500 ft up in the Anaimalai range of the{" "}
                    <Link href="/blog/coorg-travel-guide">Western Ghats</Link>
                    , in Coimbatore district. Tea and coffee estates cover
                    most of the visible landscape, laid out across a series
                    of rolling hills that stay green and misty for much of
                    the year.
                  </p>
                  <p>
                    What makes Valparai distinctive beyond the plantations
                    is its setting within the buffer landscape of the{" "}
                    <strong>Anamalai Tiger Reserve</strong> — elephants
                    regularly cross or graze near the estate roads, and the
                    area is one of the strongholds of the endangered{" "}
                    <strong>lion-tailed macaque</strong>, along with the
                    Nilgiri tahr. Sightings aren't guaranteed on any given
                    visit, but the possibility of encountering wildlife on
                    an ordinary drive between estates is part of what makes
                    Valparai worth the trip.
                  </p>
                  <p>
                    Getting there is itself part of the experience: the
                    ghat road up from Pollachi climbs through roughly{" "}
                    <strong>40 hairpin bends</strong>, a slow, scenic drive
                    that sets the tone for the plateau above.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🍃</span> Valparai at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Coimbatore district, Tamil Nadu",
                        },
                        {
                          icon: "🚗",
                          label: "From Coimbatore",
                          value: "~100 km via Pollachi",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🐘",
                          label: "Known For",
                          value: "Tea Estates, Wildlife",
                        },
                        {
                          icon: "🛣️",
                          label: "Approach Road",
                          value: "~40 hairpin bends",
                        },
                        {
                          icon: "🎯",
                          label: "Nearby",
                          value: "Sholayar & Aliyar Dams",
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
                  <h2>Best Time to Visit Valparai</h2>
                  <p>
                    Valparai's altitude keeps it cool year-round, but the
                    condition of the ghat road and the odds of wildlife
                    sightings both shift with the season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies, comfortable temperatures, and the best odds of spotting wildlife along the estate roads.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still pleasant at altitude",
                        text: "Warmer than winter but the plateau's elevation keeps it noticeably cooler than the plains below.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but slower driving",
                        text: "The Western Ghats monsoon turns the plateau intensely green, but the ghat road gets slipperier and visibility drops.",
                      },
                      {
                        season: "Early morning",
                        emoji: "🐘",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best time of day for wildlife",
                        text: "Elephants and other wildlife are more active and visible near the roads in the early morning hours, regardless of season.",
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
                    <strong>Our pick:</strong> October to February — clear
                    weather, an easier ghat drive, and the best chance of
                    seeing wildlife along the estate roads.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Valparai</h2>
                  <p>
                    Valparai is reached almost entirely by road, via the
                    town of Pollachi.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Coimbatore:</strong> Roughly 100
                      km, about 3.5-4 hours — drive or bus to Pollachi
                      first, then the ghat road up to Valparai.
                    </li>
                    <li>
                      <strong>The Pollachi-Valparai ghat road:</strong> Around
                      25 km with roughly 40 hairpin bends, climbing steadily
                      through forest and estate land — allow extra time and
                      drive it in daylight.
                    </li>
                    <li>
                      <strong>Nearest railhead and airport:</strong>{" "}
                      Coimbatore, which has both a major railway station and
                      an airport with regular domestic connections.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Drive the ghat road in
                    daylight and at an easy pace — it's a slow road by
                    design, not a race, and the hairpin bends are far more
                    enjoyable unhurried.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Estates, Wildlife & Dams</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Tea estate rows on a misty hillside near Valparai"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Tea & Coffee Estates</h3>
                  <p>
                    Valparai's estates cover most of the plateau, and
                    simply driving or walking through them — with their
                    neat rows and constant mist — is the core Valparai
                    experience. Some estates allow visitors to walk in or
                    arrange a short tour.
                  </p>
                  <h3>Wildlife Along the Roads</h3>
                  <p>
                    Because Valparai sits within the Anamalai Tiger
                    Reserve's buffer landscape, elephants are regularly
                    seen crossing or grazing near the estate roads. The
                    lion-tailed macaque and Nilgiri tahr are also
                    associated with the area, though sightings of these two
                    are less predictable — treat any sighting as a bonus.
                  </p>
                  <h3>Sholayar Dam & Aliyar Dam</h3>
                  <p>
                    Both reservoirs sit within a short drive of Valparai and
                    make for pleasant half-day excursions, with forested
                    shorelines and quiet water views that contrast nicely
                    with the estate-covered hills.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Valparai</h2>
                  <p>
                    Accommodation ranges from working tea-estate stays and
                    homestays to a handful of proper resorts — staying on
                    an estate is genuinely worth considering for the fuller
                    experience.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Basic homestays in Valparai town",
                          "Simple guesthouses",
                          "Estate worker-style lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Tea-estate cottages",
                          "Plantation bungalow stays",
                          "Small hill resorts",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌿",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Heritage plantation bungalows",
                          "Premium estate resorts",
                          "Full-board wildlife-view stays",
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
                        title: "Pollachi to Valparai",
                        color: "bg-amber-700",
                        activities: [
                          "Morning drive from Coimbatore to Pollachi",
                          "Climb the 40-hairpin ghat road to Valparai",
                          "Evening walk through a nearby tea estate",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Estates, Dams & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Early-morning drive for wildlife spotting",
                          "Visit Sholayar Dam or Aliyar Dam",
                          "Descend the ghat road back to Pollachi",
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
                    * With more time, combine Valparai with a wider
                    Coimbatore-district trip via{" "}
                    <Link href="/blog/coimbatore-travel-guide">
                      Coimbatore
                    </Link>
                    , the practical gateway for this whole area.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Valparai</h2>
                  <ul>
                    <li>
                      <strong>Estate and homestay kitchens:</strong> Most
                      accommodation serves home-style Tamil meals, often the
                      most reliable option given the limited standalone
                      restaurant scene.
                    </li>
                    <li>
                      <strong>Local tea shops:</strong> Small tea stalls in
                      Valparai town serve strong estate-fresh tea and simple
                      snacks — worth a stop between drives.
                    </li>
                    <li>
                      <strong>Pollachi:</strong> A wider spread of proper
                      restaurants if travelling through en route.
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
                          ["Accommodation/night", "₹1,500", "₹4,000", "₹10,000"],
                          ["Car hire from Coimbatore (round trip)", "₹4,500", "₹6,500", "₹9,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          ["Dam entry/local excursions", "₹100", "₹200", "₹300"],
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
                    round-trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Valparai</h2>
                  <ul>
                    <li>
                      <strong>Drive the ghat road with care:</strong> Take
                      the hairpin bends slowly, especially if it's your
                      first time on this kind of road.
                    </li>
                    <li>
                      <strong>Keep a respectful distance from wildlife:</strong>{" "}
                      If you spot elephants near the road, stay in your
                      vehicle and give them space — don't stop to photograph
                      at close range.
                    </li>
                    <li>
                      <strong>Go out early for wildlife:</strong> Mornings
                      offer the best chance of sightings before estate
                      traffic picks up.
                    </li>
                    <li>
                      <strong>Book estate stays ahead:</strong> The nicer
                      plantation stays have limited rooms and fill up on
                      weekends.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access thins out once
                      you're up on the plateau.
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
                          "Drive the ghat road slowly and in daylight",
                          "Go out early morning for the best wildlife odds",
                          "Book a tea-estate stay for the fuller experience",
                          "Carry enough cash for the whole stay",
                          "Visit Sholayar or Aliyar Dam for a change of scenery",
                          "Keep your distance from any elephants near the road",
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
                          "Rush the hairpin bends, especially after dark",
                          "Get out of the car near wild elephants",
                          "Expect guaranteed wildlife sightings",
                          "Drive the ghat road in heavy monsoon rain if avoidable",
                          "Rely on find-on-arrival estate stays on weekends",
                          "Expect wide ATM access once up on the plateau",
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
                    <strong>🗺️ Extend the trip:</strong> Valparai pairs
                    naturally with{" "}
                    <Link href="/blog/coimbatore-travel-guide">
                      Coimbatore
                    </Link>{" "}
                    as your gateway city. See our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
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
                  "Valparai",
                  "Anamalai Tiger Reserve",
                  "Tamil Nadu",
                  "Tea Estates",
                  "Western Ghats",
                  "Wildlife",
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

              <RelatedPostsGrid currentSlug="valparai-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="valparai-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
