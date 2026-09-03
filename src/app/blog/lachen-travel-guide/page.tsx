// src/app/blog/lachen-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Lachen Travel Guide: Gateway to Gurudongmar",
  description:
    "Complete Lachen guide — the North Sikkim base village, Lachen Monastery, Thangu Valley, permits, how to reach from Gangtok, and acclimatizing before Gurudongmar Lake.",
  keywords:
    "Lachen travel guide, Lachen Sikkim, North Sikkim permit, Lachen Monastery, Thangu Valley, Gurudongmar Lake base, how to reach Lachen, North Sikkim circuit",
  openGraph: {
    title: "Lachen Travel Guide: Gateway to Gurudongmar",
    description:
      "A high-altitude North Sikkim village, Thangu Valley nearby, and the essential acclimatization stop before Gurudongmar Lake — the complete Lachen guide.",
    url: "https://club.kudozz.in/blog/lachen-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kasol/kasol.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain valley town scenery, evoking Lachen's high-altitude setting in North Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lachen Travel Guide: Gateway to Gurudongmar",
    description:
      "A high-altitude North Sikkim village, Thangu Valley nearby, and the essential acclimatization stop before Gurudongmar Lake.",
    images: ["/images/destinations/kasol/kasol.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/lachen-travel-guide",
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
          headline: "Lachen Travel Guide: Gateway to Gurudongmar",
          description:
            "Complete Lachen guide — the North Sikkim base village, Lachen Monastery, Thangu Valley, permits, how to reach from Gangtok, and acclimatizing before Gurudongmar Lake.",
          image: "https://club.kudozz.in/images/destinations/kasol/kasol.jpg",
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
            "@id": "https://club.kudozz.in/blog/lachen-travel-guide",
          },
          keywords: "Lachen, North Sikkim, Gurudongmar Lake, Thangu Valley, off-beat",
          about: {
            "@type": "Place",
            name: "Lachen",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Sikkim",
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
                name: "Sikkim",
                item: "https://club.kudozz.in/blog/sikkim-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Lachen",
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
    q: "How far is Lachen from Gangtok?",
    a: "Roughly 120 km, but the mountain roads and permit checkpoints stretch the journey to about 6-7 hours — plan it as a full travel day, similar to reaching Lachung.",
  },
  {
    q: "Why is an overnight in Lachen necessary before Gurudongmar?",
    a: "Gurudongmar Lake sits dramatically higher than Lachen, at roughly 5,183 m. Overnighting in Lachen first lets you acclimatize partially before the further ascent, reducing (though not eliminating) the risk of altitude sickness on the excursion.",
  },
  {
    q: "What is the best time to visit Lachen?",
    a: "April to June and September to November offer the best combination of accessible roads and clear weather. Winter often sees the route to Gurudongmar closed by snow, even when Lachen itself remains reachable.",
  },
  {
    q: "Do I need a permit to visit Lachen?",
    a: "Yes — Lachen falls within the North Sikkim Protected Area, requiring a permit arranged through a registered travel agent in Gangtok, usually bundled with the wider North Sikkim circuit.",
  },
  {
    q: "What is Thangu Valley?",
    a: "A scenic high-altitude meadow area between Lachen and Gurudongmar Lake, sometimes visited as part of the same excursion — a good stop to break up the ascent and take in the landscape before continuing higher.",
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
  { id: "introduction", title: "The Gurudongmar Base Village", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lachen", level: 2 },
  { id: "things-to-do", title: "Monastery, Thangu Valley & Acclimatizing", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LachenGuidePage() {
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
              src="/images/destinations/kasol/kasol.jpg"
              alt="Mountain valley town scenery, evoking Lachen's high-altitude setting in North Sikkim"
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
                { label: "Sikkim", href: "/blog/sikkim-travel-guide" },
                { label: "Lachen", href: null },
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
              {["Lachen", "North Sikkim", "Gurudongmar Lake", "Off-beat"].map(
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
              Lachen: Gateway to Gurudongmar Lake
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A high-altitude North Sikkim village where you acclimatize
              before the dramatic ascent to one of the world's highest
              accessible lakes.
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
                  text: "North Sikkim",
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
                  <h2>The Gurudongmar Base Village</h2>
                  <p>
                    <strong>Lachen</strong>, at roughly 2,750 m, is a small
                    North Sikkim village that serves as the essential
                    overnight base for visiting{" "}
                    <Link href="/blog/gurudongmar-lake-travel-guide">
                      Gurudongmar Lake
                    </Link>
                    , given the lake's extreme altitude and the need to
                    acclimatize before the further ascent.
                  </p>
                  <p>
                    Between Lachen and Gurudongmar lies{" "}
                    <strong>Thangu Valley</strong>, a scenic high-altitude
                    meadow area sometimes visited as part of the same
                    excursion — a good stop to break up the climb and take in
                    the landscape. The village itself has its own quiet
                    draw in the <strong>Lachen Monastery</strong>, a Buddhist
                    gompa worth a short visit.
                  </p>
                  <p>
                    Like{" "}
                    <Link href="/blog/lachung-travel-guide">Lachung</Link>,
                    homestays and small guesthouses are the norm here, and the
                    same North Sikkim Protected Area Permit applies, typically
                    arranged as part of the same package covering the full
                    circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Lachen at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North Sikkim",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~2,750 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Apr – Jun" },
                        {
                          icon: "🏞️",
                          label: "Known For",
                          value: "Gurudongmar Base, Thangu Valley",
                        },
                        {
                          icon: "📋",
                          label: "Permit",
                          value: "Required (North Sikkim)",
                        },
                        {
                          icon: "🚗",
                          label: "From Gangtok",
                          value: "~120 km / 6-7 hrs",
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
                  <h2>Best Time to Visit Lachen</h2>
                  <p>
                    Since Lachen exists mainly to launch the Gurudongmar
                    excursion, timing is largely dictated by when that route
                    is passable.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The route to Gurudongmar is most reliably open, with the best combination of accessible roads and clear high-altitude weather.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — road risk",
                        text: "Landslide risk rises on the North Sikkim roads; travel is possible but less predictable, with more frequent delays.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clear skies",
                        text: "A second good window, post-monsoon with generally clear weather and stable road conditions to Gurudongmar.",
                      },
                      {
                        season: "Dec – Mar",
                        emoji: "❄️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Often closed",
                        text: "Heavy snow frequently closes the route beyond Lachen — confirm current access with your operator before planning a trip.",
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
                    <strong>Our pick:</strong> April to June or September to
                    November — the two windows when the Gurudongmar route is
                    most reliably open.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Lachen</h2>
                  <ul>
                    <li>
                      <strong>By road from Gangtok:</strong> Roughly 120 km,
                      taking about 6-7 hours given the mountain roads and
                      permit checkpoints — plan a full travel day.
                    </li>
                    <li>
                      <strong>Permit checkpoints:</strong> Your North Sikkim
                      Protected Area Permit is checked en route — carry
                      physical ID matching the permit.
                    </li>
                    <li>
                      <strong>Package travel:</strong> Most visitors book
                      Lachen as part of a wider North Sikkim circuit package
                      through a Gangtok operator, who handles both permit and
                      vehicle logistics.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your North Sikkim permit
                    and vehicle together in Gangtok — it's the only practical
                    way to reach Lachen and Gurudongmar given the logistics
                    involved.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Monastery, Thangu Valley & Acclimatizing</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kasol/kasol.jpg"
                      alt="High-altitude mountain village scenery around Lachen, North Sikkim"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Lachen Monastery</h3>
                  <p>
                    A Buddhist gompa in the village, worth a quiet visit
                    before or after your Gurudongmar excursion — a peaceful
                    counterpoint to the more dramatic high-altitude scenery
                    further up.
                  </p>
                  <h3>Thangu Valley</h3>
                  <p>
                    A scenic high-altitude meadow between Lachen and
                    Gurudongmar, often included in the same excursion —
                    worth pausing at for the landscape and to gauge how
                    you're adjusting to the altitude before continuing
                    higher.
                  </p>
                  <h3>Taking Acclimatization Seriously</h3>
                  <p>
                    Lachen's real function is giving your body a night at
                    moderate altitude before the dramatic jump to Gurudongmar
                    — don't rush this. Watch for early altitude-sickness
                    symptoms (headache, nausea, dizziness) and mention any to
                    your guide before continuing the ascent.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Lachen</h2>
                  <p>
                    An overnight here is essentially mandatory before
                    attempting Gurudongmar — homestays and small guesthouses
                    are the standard, functional rather than luxurious.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,200/night",
                        picks: [
                          "Local homestays",
                          "Basic village guesthouses",
                          "Shared-vehicle package lodging",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹4,500/night",
                        picks: [
                          "Small hotels with heating",
                          "Better-appointed guesthouses",
                          "Package-tour standard rooms",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "₹5,000–₹9,000+/night",
                        picks: [
                          "Better-appointed mountain lodges",
                          "Premium package operators",
                          "Rooms with village/valley views",
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
                        title: "Gangtok to Lachen",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Gangtok early, permit checkpoints en route",
                          "Arrive Lachen by afternoon, check in",
                          "Evening visit to Lachen Monastery, rest and acclimatize",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Gurudongmar Lake & Onward",
                        color: "bg-forest-600",
                        activities: [
                          "Pre-dawn departure via Thangu Valley",
                          "Brief visit to Gurudongmar Lake",
                          "Return to Lachen or continue toward Lachung/Gangtok",
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
                    * Many itineraries pair Lachen with{" "}
                    <Link href="/blog/lachung-travel-guide">Lachung</Link> for
                    a full North Sikkim loop covering both valleys.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Lachen</h2>
                  <ul>
                    <li>
                      <strong>Homestay meals:</strong> The main option here —
                      simple home-style meals included with most
                      accommodation.
                    </li>
                    <li>
                      <strong>Basic local eateries:</strong> A few small
                      eateries near the main road for those not on a
                      full-board plan.
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
                          ["Accommodation/night", "₹1,500", "₹3,500", "₹7,000"],
                          [
                            "North Sikkim permit + vehicle (per person, shared)",
                            "₹4,000",
                            "₹6,000",
                            "₹9,000",
                          ],
                          ["Food/day", "₹500", "₹900", "₹1,800"],
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
                    * The permit + vehicle line is typically bundled as part
                    of a shared North Sikkim package covering Lachen,
                    Lachung, Yumthang, and Gurudongmar together.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Lachen</h2>
                  <ul>
                    <li>
                      <strong>Take altitude seriously:</strong> Lachen is
                      already high, and Gurudongmar is dramatically higher —
                      watch for altitude-sickness symptoms and don't rush
                      the ascent.
                    </li>
                    <li>
                      <strong>Dress in extreme-cold layers:</strong> Even if
                      the weather looks clear at Lachen's altitude, it can be
                      far colder higher up.
                    </li>
                    <li>
                      <strong>Confirm road conditions:</strong> Check with
                      your operator before committing to the Gurudongmar leg
                      of the trip.
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
                          "Rest properly in Lachen before continuing higher",
                          "Watch for altitude-sickness symptoms",
                          "Dress in extreme-cold layers",
                          "Confirm road conditions before departure",
                          "Visit Lachen Monastery if time allows",
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
                          "Rush straight to Gurudongmar without an overnight",
                          "Ignore early altitude-sickness symptoms",
                          "Underdress for the extreme cold higher up",
                          "Attempt the trip without a valid permit",
                          "Expect a wide restaurant scene in the village",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Lachen with{" "}
                    <Link href="/blog/lachung-travel-guide">Lachung</Link> and{" "}
                    <Link href="/blog/yumthang-valley-travel-guide">
                      Yumthang Valley
                    </Link>{" "}
                    for the full North Sikkim loop. See our full{" "}
                    <Link href="/blog/sikkim-travel-guide">
                      Sikkim travel guide
                    </Link>{" "}
                    for the wider state.
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
                {["Lachen", "North Sikkim", "Gurudongmar Lake", "Off-beat"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="lachen-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="lachen-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
