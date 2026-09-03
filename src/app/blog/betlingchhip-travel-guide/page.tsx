// src/app/blog/betlingchhip-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Betlingchhip Trek Guide: Tripura's Highest Peak",
  description:
    "Complete Betlingchhip guide — Tripura's highest peak at roughly 939 m, an off-beat forest trek in South Tripura, difficulty, how to reach, permits, and a full visit plan.",
  keywords:
    "Betlingchhip travel guide, Betling Sib, Tripura's highest peak, South Tripura trekking, Betlingchhip trek difficulty, off-beat Northeast India trek, how to reach Betlingchhip",
  openGraph: {
    title: "Betlingchhip Trek Guide: Tripura's Highest Peak",
    description:
      "A dense-forested climb to Tripura's highest point — one of Northeast India's most genuinely off-the-beaten-path treks.",
    url: "https://club.kudozz.in/blog/betlingchhip-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain pass landscape, evoking Betlingchhip's forested peak trek in South Tripura",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Betlingchhip Trek Guide: Tripura's Highest Peak",
    description:
      "Tripura's highest point, a forested and genuinely off-beat trek in South Tripura.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/betlingchhip-travel-guide",
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
          headline: "Betlingchhip Trek Guide: Tripura's Highest Peak",
          description:
            "Complete Betlingchhip guide — Tripura's highest peak at roughly 939 m, an off-beat forest trek in South Tripura, difficulty, how to reach, permits, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
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
            "@id": "https://club.kudozz.in/blog/betlingchhip-travel-guide",
          },
          keywords:
            "Betlingchhip, South Tripura, highest peak, trekking, off-beat, forest trail",
          about: {
            "@type": "Place",
            name: "Betlingchhip",
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
                name: "Betlingchhip",
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
    q: "How high is Betlingchhip?",
    a: "Roughly 939 metres (around 3,084 ft) above sea level, making it Tripura's highest point — modest by Himalayan standards, but a genuine summit trek within the state.",
  },
  {
    q: "Is the Betlingchhip trek difficult?",
    a: "Moderate. The route is mostly forest trail with some steep stretches nearer the summit, manageable for a reasonably fit trekker in a few hours each way, but there's no tourist infrastructure, so self-sufficiency matters.",
  },
  {
    q: "What is the best time to trek Betlingchhip?",
    a: "October to February — cool, dry conditions with clear trails. Avoid the monsoon (roughly June–September), when the forest floor turns slippery, leeches appear, and landslide risk rises.",
  },
  {
    q: "Do I need a guide for Betlingchhip?",
    a: "Strongly recommended. The area is remote with limited signage, and a local guide familiar with the trail and current forest-access conditions makes the trek significantly safer and easier to navigate.",
  },
  {
    q: "How far is Betlingchhip from Agartala?",
    a: "Substantial — well over 100 km into South Tripura. Most visitors drive to a base town in South Tripura first, either starting the trek early the same day or staying overnight nearby before setting out.",
  },
  {
    q: "Is there accommodation at the peak?",
    a: "No — Betlingchhip has no tourist infrastructure at the summit. Trekkers do it as a day trek from a nearby base town, with camping only for well-prepared, guided groups rather than casual visitors.",
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
  { id: "introduction", title: "Tripura's Highest Point", level: 2 },
  { id: "best-time", title: "Best Time to Trek", level: 2 },
  { id: "how-to-reach", title: "How to Reach Betlingchhip", level: 2 },
  { id: "things-to-do", title: "The Trek & Terrain", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Supplies", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BetlingchhipGuidePage() {
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
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="Mountain pass landscape, evoking Betlingchhip's forested peak trek in South Tripura"
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
                { label: "Betlingchhip", href: null },
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
              {["Betlingchhip", "South Tripura", "Trekking", "Highest Peak"].map(
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
              Betlingchhip: Trekking Tripura's Highest Peak
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A dense-forested climb to Tripura's highest point — one of
              Northeast India's most genuinely off-the-beaten-path treks,
              far from any built-up trail infrastructure.
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
                  text: "South Tripura",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>Tripura's Highest Point</h2>
                  <p>
                    <strong>Betlingchhip</strong> (also spelled Betling
                    Sib) is Tripura's highest point, at roughly 939 metres
                    (about 3,084 ft), rising out of a dense-forested hill
                    range in South Tripura district. It's a genuine
                    off-the-beaten-path trek destination — far less
                    developed than Northeast India's better-known
                    trekking spots, and appealing mainly to trekkers and
                    nature enthusiasts specifically looking for something
                    offbeat rather than a polished tourist trail.
                  </p>
                  <p>
                    The surrounding forest is thick and biodiverse, home
                    to varied flora and fauna, and the wider area has been
                    discussed for greater conservation protection given
                    its ecological value. What it doesn't have is any of
                    the trekking infrastructure travellers might expect
                    elsewhere — no resorts, cafes, or marked trail signage
                    near the summit, which is exactly the appeal for
                    trekkers seeking a genuinely quiet climb.
                  </p>
                  <p>
                    Most treks start from a nearby forest-fringe village
                    in South Tripura and involve forest trails with some
                    steep sections closer to the top. Given the remoteness,
                    a local guide and forest-department awareness of
                    current access conditions are both worth arranging
                    before you go.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Betlingchhip at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Tripura district",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~939 m (3,084 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🥾",
                          label: "Difficulty",
                          value: "Moderate",
                        },
                        {
                          icon: "🌳",
                          label: "Terrain",
                          value: "Dense forest trail",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "100+ km",
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
                  <h2>Best Time to Trek Betlingchhip</h2>
                  <p>
                    Trail conditions swing dramatically between seasons —
                    this is a forest trek, and the monsoon changes it
                    completely.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions keep the forest trail firm and manageable — the safest and most comfortable window for the climb.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warmer, still doable",
                        text: "Heat and humidity climb ahead of the monsoon — an early start becomes more important to avoid the hottest hours on exposed stretches.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Slippery forest trails, leeches, and landslide risk make this the window to skip entirely for this particular trek.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🌫️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, clearest",
                        text: "The most reliably dry stretch of the year, with the clearest conditions for the final push near the summit.",
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
                    <strong>Our pick:</strong> October to February — dry
                    trails and cool temperatures make this the only
                    genuinely comfortable window for the climb.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Betlingchhip</h2>
                  <p>
                    Getting to the trailhead is a two-stage journey: a
                    drive into South Tripura, followed by the trek itself.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Agartala:</strong> A substantial
                      drive, well over 100 km, into South Tripura district
                      — plan for a half-day of driving before the trek
                      even begins.
                    </li>
                    <li>
                      <strong>Basing yourself in a South Tripura town:</strong>{" "}
                      An overnight stay in the nearest town lets you start
                      the trek early rather than combining a long drive
                      with the climb on the same day.
                    </li>
                    <li>
                      <strong>Arranging a guide in advance:</strong>{" "}
                      Given limited signage and mobile connectivity near
                      the trailhead, it's worth confirming a local guide
                      before you set out from Agartala.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check current access with
                    the local forest office before travelling — remote
                    forest areas like this can have seasonal restrictions
                    that aren't always visible from a distance.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Trek & Terrain</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Forested mountain terrain near Betlingchhip, South Tripura"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Approach</h3>
                  <p>
                    The trek begins from a nearby forest-fringe village,
                    following forest trails through dense tree cover — the
                    kind of quiet, largely untouched terrain that's
                    increasingly rare to find this accessible in
                    Northeast India.
                  </p>
                  <h3>Difficulty & Duration</h3>
                  <p>
                    Moderate overall — mostly forest trail walking with
                    some genuinely steep stretches closer to the summit.
                    Expect a few hours each way for a reasonably fit
                    trekker, with the ascent naturally slower than the
                    descent.
                  </p>
                  <h3>Flora & Fauna</h3>
                  <p>
                    The forest cover supports a good diversity of plant
                    and animal life, part of why the wider area has been
                    discussed for greater conservation status — keep an
                    eye (and ear) out, but don't expect guaranteed
                    wildlife sightings on a day trek.
                  </p>
                  <h3>The Summit</h3>
                  <p>
                    Tripura's highest point rewards the climb with views
                    over the surrounding forested hills — a quiet,
                    uncrowded payoff very different from more commercial
                    Northeast India trekking destinations.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Betlingchhip</h2>
                  <p>
                    There's no accommodation at the peak itself —
                    trekking here is typically a day trek from the
                    nearest South Tripura town, with very limited
                    options beyond basic guesthouses.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Basic guesthouses, nearest South Tripura town",
                          "Simple lodges near the trail base",
                          "Homestays where available",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹2,500/night",
                        picks: [
                          "Better hotels in a larger South Tripura town",
                          "Government tourist lodges nearby",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "Not applicable",
                        picks: [
                          "No dedicated luxury stays near the peak",
                          "Consider Agartala for upscale accommodation",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Agartala to South Tripura Base",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Agartala to the nearest South Tripura town",
                          "Confirm guide and current trail access",
                          "Rest early for a pre-dawn start",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "The Trek",
                        color: "bg-sky-600",
                        activities: [
                          "Early departure for the trailhead",
                          "Forest trek to the summit and back",
                          "Drive back toward Agartala by evening",
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
                    * With a very early start, an experienced group could
                    combine the drive and trek in a single long day —
                    an overnight base is still the more comfortable option.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food & Supplies</h2>
                  <ul>
                    <li>
                      <strong>Carry your own food and water:</strong> There
                      are no facilities on the trail itself — pack enough
                      for the full trek plus a margin.
                    </li>
                    <li>
                      <strong>Stock up in the base town:</strong> Basic
                      supplies and simple meals are available at the
                      nearest South Tripura town before you set out.
                    </li>
                    <li>
                      <strong>No dining options near the trailhead:</strong>{" "}
                      Treat this as a genuinely self-sufficient day out.
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
                          ["Accommodation/night", "₹600", "₹1,800", "N/A"],
                          [
                            "Car hire from Agartala (round trip)",
                            "₹6,500",
                            "₹9,000",
                            "₹12,000",
                          ],
                          ["Local guide (per trek)", "₹800", "₹1,200", "₹1,500"],
                          ["Food/day", "₹350", "₹700", "₹1,200"],
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
                  <h2>Essential Tips for Trekking Betlingchhip</h2>
                  <ul>
                    <li>
                      <strong>Hire a local guide:</strong> Given the
                      remoteness and limited signage, this is the single
                      most important thing you can arrange in advance.
                    </li>
                    <li>
                      <strong>Carry sufficient water and a first-aid kit:</strong>{" "}
                      There's nothing to buy along the trail itself.
                    </li>
                    <li>
                      <strong>Inform your accommodation of your plan:</strong>{" "}
                      Let someone know your trek route and expected
                      return time given the remoteness.
                    </li>
                    <li>
                      <strong>Start early to summit and descend in daylight:</strong>{" "}
                      Forest trails are far harder to navigate safely after
                      dark.
                    </li>
                    <li>
                      <strong>Check current access with the local forest office:</strong>{" "}
                      Conditions and permissions in remote forest areas can
                      change seasonally.
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
                          "Hire a local guide before setting out",
                          "Start the trek at first light",
                          "Carry your own food, water, and first-aid supplies",
                          "Check current forest-access conditions ahead",
                          "Wear proper trekking footwear",
                          "Tell someone your planned route and return time",
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
                          "Trek without a local guide",
                          "Attempt this in the monsoon months",
                          "Expect any facilities on the trail itself",
                          "Start the climb late in the day",
                          "Rely on mobile signal near the trailhead",
                          "Expect resort-style accommodation nearby",
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
                    <strong>🗺️ Extend the trip:</strong> Combine
                    Betlingchhip with nearby wildlife stops like{" "}
                    <Link href="/blog/trishna-wildlife-sanctuary-travel-guide">
                      Trishna Wildlife Sanctuary
                    </Link>{" "}
                    for a fuller South Tripura loop. See our full{" "}
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
                  "Betlingchhip",
                  "South Tripura",
                  "Trekking",
                  "Highest Peak",
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

              <RelatedPostsGrid currentSlug="betlingchhip-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="betlingchhip-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
