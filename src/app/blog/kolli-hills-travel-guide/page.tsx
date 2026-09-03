// src/app/blog/kolli-hills-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kolli Hills Travel Guide: 70 Hairpin Bends & Tips",
  description:
    "Complete Kolli Hills guide — the famous 70-hairpin-bend ghat road, Agaya Gangai waterfall, Arapaleeswarar Temple, local millet culture, how to reach from Namakkal, and a full visit plan.",
  keywords:
    "Kolli Hills travel guide, Kolli Hills hairpin bends, Agaya Gangai waterfall, Namakkal district hills, Tamil Nadu offbeat hill station, Arapaleeswarar Temple, how to reach Kolli Hills, millet hills Tamil Nadu",
  openGraph: {
    title: "Kolli Hills Travel Guide: 70 Hairpin Bends & Tips",
    description:
      "A quiet, lightly touristed hill range reached by 70 hairpin bends — one of Tamil Nadu's most genuinely offbeat hill escapes.",
    url: "https://club.kudozz.in/blog/kolli-hills-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Winding mountain road through hill terrain, evoking the hairpin-bend ghat road climbing into Kolli Hills",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolli Hills Travel Guide: 70 Hairpin Bends & Tips",
    description:
      "70 hairpin bends, a quiet waterfall, and a genuinely offbeat hill escape — the complete Kolli Hills guide.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kolli-hills-travel-guide",
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
          headline: "Kolli Hills Travel Guide: 70 Hairpin Bends & Tips",
          description:
            "Complete Kolli Hills guide — the famous 70-hairpin-bend ghat road, Agaya Gangai waterfall, Arapaleeswarar Temple, local millet culture, how to reach from Namakkal, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/kolli-hills-travel-guide",
          },
          keywords:
            "Kolli Hills, Namakkal, Tamil Nadu, hairpin bends, off-beat hill station, Agaya Gangai",
          about: {
            "@type": "Place",
            name: "Kolli Hills",
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
                name: "Kolli Hills",
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
    q: "How many hairpin bends are there and is the drive difficult?",
    a: "The ghat road up to Kolli Hills is famous for roughly 70 hairpin bends. It's manageable in daylight at a careful pace, but budget extra time compared to a typical hill-station drive — this isn't a road to rush.",
  },
  {
    q: "How far is Kolli Hills from Namakkal or Salem?",
    a: "Kolli Hills is roughly 50-60 km from Namakkal town and around 90 km from Salem, though the winding ghat section means the last stretch takes longer than the distance alone suggests.",
  },
  {
    q: "What is there to see and do in Kolli Hills?",
    a: "The main draws are the ghat-road drive itself, Agaya Gangai waterfall, the Arapaleeswarar Temple, and the surrounding countryside where local communities practice traditional millet farming.",
  },
  {
    q: "What is the best time to visit Kolli Hills?",
    a: "October to February offers the clearest weather and safest driving conditions on the ghat road. Monsoon makes the hills lush and scenic but adds real risk to the hairpin-bend drive.",
  },
  {
    q: "Is Kolli Hills worth visiting if I've already done Ooty or Kodaikanal?",
    a: "Yes, for a different reason — Kolli Hills is quieter, far less developed, and appeals specifically to travelers who want a genuinely offbeat hill experience rather than a polished hill-station one.",
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
  { id: "introduction", title: "Tamil Nadu's Quietest Hill Range", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kolli Hills", level: 2 },
  { id: "things-to-do", title: "The Ghat Road, Waterfall & Temple", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KolliHillsGuidePage() {
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
              alt="Winding mountain road through hill terrain, evoking the hairpin-bend ghat road climbing into Kolli Hills"
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
                { label: "Kolli Hills", href: null },
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
                "Kolli Hills",
                "Namakkal",
                "Off-beat",
                "Tamil Nadu",
                "Hairpin Bends",
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
              Kolli Hills: 70 Hairpin Bends to Somewhere Quiet
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A famously winding ghat road, a quiet waterfall, and one of
              Tamil Nadu's least-crowded hill ranges — a genuine escape from
              the state's better-known hill stations.
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
                  text: "Namakkal District, Tamil Nadu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>Tamil Nadu's Quietest Hill Range</h2>
                  <p>
                    <strong>Kolli Hills</strong>, in Namakkal district, is
                    reached by a ghat road famous across{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu
                    </Link>{" "}
                    for its roughly <strong>70 hairpin bends</strong> — a
                    distinctive, much-talked-about feature of the drive up,
                    and genuinely part of the appeal for anyone who enjoys a
                    road trip as much as the destination.
                  </p>
                  <p>
                    Compared to Ooty, Kodaikanal, or even the smaller Yercaud,
                    Kolli Hills remains considerably quieter and less
                    developed. That's exactly its draw for travelers looking
                    for an offbeat, lower-key hill experience rather than a
                    polished hill-station one.
                  </p>
                  <p>
                    Beyond the drive itself, the hills offer{" "}
                    <strong>Agaya Gangai</strong>, a scenic multi-tiered
                    waterfall reached via a flight of steps, the{" "}
                    <strong>Arapaleeswarar Temple</strong>, and a countryside
                    still shaped by traditional millet farming among local
                    communities.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Kolli Hills at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Namakkal district, Tamil Nadu",
                        },
                        {
                          icon: "🛣️",
                          label: "The Climb",
                          value: "~70 hairpin bends",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "💧",
                          label: "Known For",
                          value: "Agaya Gangai Falls",
                        },
                        {
                          icon: "🌾",
                          label: "Local Culture",
                          value: "Traditional millet farming",
                        },
                        {
                          icon: "🎯",
                          label: "Character",
                          value: "Genuinely offbeat",
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
                  <h2>Best Time to Visit Kolli Hills</h2>
                  <p>
                    Weather affects both comfort and, importantly, safety on
                    the ghat road itself.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies and cool temperatures make both the hairpin-bend drive and sightseeing comfortable and safe.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm but manageable",
                        text: "Warmer at lower elevations, though the hills themselves stay noticeably cooler than the plains below.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — scenic but riskier",
                        text: "The hills turn lush and green, but wet roads on the hairpin-bend climb add real risk — drive with extra caution or avoid heavy-rain days.",
                      },
                      {
                        season: "Weekdays",
                        emoji: "🤫",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Quietest",
                        text: "Kolli Hills is already lightly touristed, but weekdays offer an even quieter, more solitary experience.",
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
                    <strong>Our pick:</strong> October to February — clear,
                    dry conditions for both the drive up and a relaxed day of
                    sightseeing.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kolli Hills</h2>
                  <ul>
                    <li>
                      <strong>By road via Namakkal:</strong> Roughly 50-60 km
                      from Namakkal town to the base of the ghat road, then a
                      slow, winding climb through the hairpin bends.
                    </li>
                    <li>
                      <strong>By road via Rasipuram:</strong> An alternative
                      approach, similarly involving the winding ghat section
                      near the top.
                    </li>
                    <li>
                      <strong>From Salem:</strong> Roughly 90 km, a
                      comfortable half-day drive including the climb.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Budget significantly more
                    time than the raw distance suggests — the 70-hairpin-bend
                    climb is slow going by design, and rushing it isn't
                    advisable.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Ghat Road, Waterfall & Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Hill terrain and winding road, evoking Kolli Hills, Tamil Nadu"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The 70-Hairpin-Bend Drive</h3>
                  <p>
                    The climb itself is a genuine highlight — a slow,
                    deliberate ascent through forested switchbacks with
                    expanding views over the plains below at each turn.
                  </p>
                  <h3>Agaya Gangai Waterfall</h3>
                  <p>
                    A multi-tiered waterfall reached via a flight of steps
                    down into a forested gorge — one of the hills' main
                    sightseeing draws and a good spot for a quiet break.
                  </p>
                  <h3>Arapaleeswarar Temple</h3>
                  <p>
                    A notable local Shiva shrine, worth a stop for its
                    setting within the hills as much as its religious
                    significance.
                  </p>
                  <h3>Millet Country</h3>
                  <p>
                    The surrounding countryside is still shaped by
                    traditional millet cultivation by local communities,
                    giving Kolli Hills a distinct agricultural character
                    quite different from the state's more manicured hill
                    stations.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kolli Hills</h2>
                  <p>
                    Accommodation is genuinely limited — a handful of small
                    hotels and resorts serve most visitors, and many treat
                    Kolli Hills as a day trip rather than an overnight stay.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic lodges near Semmedu",
                          "Simple guesthouses",
                          "Government tourist rest houses",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: [
                          "Small hill resorts",
                          "Cottage-style stays",
                          "Family-run hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹3,500–₹6,000+/night",
                        picks: [
                          "The few premium resort cottages available",
                          "Private forest-view stays",
                          "Full-board weekend packages",
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
                        title: "The Climb & Waterfall",
                        color: "bg-amber-700",
                        activities: [
                          "Drive up the 70-hairpin-bend ghat road",
                          "Visit Agaya Gangai waterfall",
                          "Check in and relax for the evening",
                        ],
                      },
                      {
                        day: "Day 2 (optional)",
                        title: "Temple & Villages",
                        color: "bg-sky-600",
                        activities: [
                          "Visit Arapaleeswarar Temple",
                          "Walk through millet-farming countryside",
                          "Drive back down before evening",
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
                    * A single day works if starting early; an overnight
                    stay lets you slow down and enjoy the quiet without
                    rushing the drive back down before dark.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Kolli Hills</h2>
                  <ul>
                    <li>
                      <strong>Local millet-based dishes:</strong> Worth
                      seeking out where available — a distinctive taste of
                      the hills' traditional agriculture.
                    </li>
                    <li>
                      <strong>Small local eateries:</strong> Simple South
                      Indian meals near Semmedu, the small town at the top of
                      the ghat road.
                    </li>
                    <li>
                      <strong>Resort/lodge kitchens:</strong> Most overnight
                      stays serve meals to guests, often the most convenient
                      option given limited standalone restaurants.
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
                          ["Accommodation/night", "₹800", "₹2,200", "₹4,500"],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          ["Local transport/day", "₹300", "₹700", "₹1,500"],
                          ["Entry fees (waterfall/temple)", "₹30", "₹30", "₹30"],
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
                    * Figures are per person, per day, excluding transport
                    to the base of the ghat road.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kolli Hills</h2>
                  <ul>
                    <li>
                      <strong>Drive the ghat road in daylight:</strong> The
                      hairpin bends are manageable but not something to
                      tackle after dark or in heavy fog.
                    </li>
                    <li>
                      <strong>Keep expectations realistic:</strong> This is a
                      genuinely offbeat destination — infrastructure is
                      modest compared to Ooty or Kodaikanal.
                    </li>
                    <li>
                      <strong>Book accommodation ahead:</strong> The limited
                      number of rooms can fill up on weekends.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited once
                      you're up in the hills.
                    </li>
                    <li>
                      <strong>Fill up on fuel before the climb:</strong>{" "}
                      Petrol stations are sparse once you start up the ghat
                      road.
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
                          "Drive the hairpin bends carefully and in daylight",
                          "Fill up on fuel before starting the climb",
                          "Try local millet-based food if available",
                          "Book accommodation ahead on weekends",
                          "Carry enough cash for the whole stay",
                          "Visit Agaya Gangai early for fewer crowds",
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
                          "Drive the ghat road after dark or in heavy rain",
                          "Expect Ooty- or Kodaikanal-level infrastructure",
                          "Rely on finding fuel once you're in the hills",
                          "Rely on cards — carry cash instead",
                          "Rush the climb — it's meant to be slow",
                          "Arrive without confirming accommodation on weekends",
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
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for more of the state's hill and heritage circuits.
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
                  "Kolli Hills",
                  "Namakkal District",
                  "Tamil Nadu",
                  "Off-beat",
                  "Hairpin Bends",
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

              <RelatedPostsGrid currentSlug="kolli-hills-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kolli-hills-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
