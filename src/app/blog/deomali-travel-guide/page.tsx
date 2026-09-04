// src/app/blog/deomali-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Deomali Trek Guide: Odisha's Highest Peak",
  description:
    "Complete Deomali trek guide — Odisha's highest peak at 1,672m, trail difficulty, summit views, how to reach from Koraput, guides, and a full visit plan.",
  keywords:
    "Deomali trek guide, Odisha's highest peak, Deomali Koraput, Deomali trekking, Eastern Ghats trek, how to reach Deomali, Odisha trekking, Koraput district trek",
  openGraph: {
    title: "Deomali Trek Guide: Odisha's Highest Peak",
    description:
      "A quiet, offbeat trek to Odisha's highest summit, through forest and tribal villages in the Eastern Ghats — the complete Deomali guide.",
    url: "https://club.kudozz.in/blog/deomali-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain summit and ridgeline, evoking Deomali, Odisha's highest peak in the Eastern Ghats",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Deomali Trek Guide: Odisha's Highest Peak",
    description:
      "Odisha's highest summit, reached through forest and tribal villages — the complete Deomali trek guide.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/deomali-travel-guide",
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
          headline: "Deomali Trek Guide: Odisha's Highest Peak",
          description:
            "Complete Deomali trek guide — Odisha's highest peak at 1,672m, trail difficulty, summit views, how to reach from Koraput, guides, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/deomali-travel-guide",
          },
          keywords:
            "Deomali, Odisha, highest peak, Koraput, trekking, Eastern Ghats",
          about: {
            "@type": "Place",
            name: "Deomali",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha",
                item: "https://club.kudozz.in/blog/odisha-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Deomali",
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
    q: "How difficult is the Deomali trek?",
    a: "It's a generally moderate trek — forested trails with some steeper stretches near the summit, taking a few hours each way. It's accessible to reasonably fit trekkers without requiring technical mountaineering experience.",
  },
  {
    q: "How tall is Deomali?",
    a: "Deomali stands at roughly 1,672 metres, making it the highest peak in Odisha — modest by Himalayan standards, but a genuine trek with rewarding Eastern Ghats views.",
  },
  {
    q: "Is a guide necessary for the Deomali trek?",
    a: "Yes, strongly advisable. The trail passes through remote, tribal-region terrain with limited signage, and a local guide helps with both navigation and cultural context for the surrounding villages.",
  },
  {
    q: "How far is Deomali from Koraput?",
    a: "It's a manageable drive from Koraput town to the trailhead, making Koraput the practical base for attempting the trek as a day trip.",
  },
  {
    q: "What is the best time to trek Deomali?",
    a: "October to February offers the coolest, clearest conditions. Avoid the monsoon months (June-September), when trails become slippery and visibility drops significantly.",
  },
  {
    q: "Can Deomali be combined with other southern Odisha destinations?",
    a: "Yes — it pairs naturally with Koraput and Jeypore as part of a wider southern Odisha tribal-region circuit, all within reasonable driving distance of each other.",
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
  { id: "introduction", title: "Odisha's Highest Point", level: 2 },
  { id: "best-time", title: "Best Time to Trek", level: 2 },
  { id: "how-to-reach", title: "How to Reach Deomali", level: 2 },
  { id: "things-to-do", title: "The Trek & the Summit", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food on the Trek", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DeomaliGuidePage() {
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
              alt="Mountain summit and ridgeline, evoking Deomali, Odisha's highest peak in the Eastern Ghats"
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
                { label: "Odisha", href: "/blog/odisha-travel-guide" },
                { label: "Deomali", href: null },
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
                "Deomali",
                "Highest Peak",
                "Koraput",
                "Odisha",
                "Trekking",
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
              Deomali: Trekking Odisha's Highest Peak
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet, forested climb to Odisha's highest point, through
              tribal villages and Eastern Ghats woodland, far from any
              crowded trekking circuit.
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
                  text: "Koraput district, Odisha",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>Odisha's Highest Point</h2>
                  <p>
                    <strong>Deomali</strong>, in{" "}
                    <Link href="/blog/koraput-travel-guide">
                      Koraput district
                    </Link>
                    , is the highest peak in{" "}
                    <Link href="/blog/odisha-travel-guide">Odisha</Link> at
                    roughly 1,672 metres — modest by Himalayan standards, but
                    a genuine, rewarding trek through Eastern Ghats forest
                    and near tribal villages.
                  </p>
                  <p>
                    Unlike major Himalayan trekking circuits, Deomali
                    remains considerably less developed and far less
                    touristed, appealing to trekkers who want something
                    offbeat and quiet rather than a crowded, well-worn
                    trail. The summit offers panoramic views over the
                    surrounding Eastern Ghats landscape.
                  </p>
                  <p>
                    Given the remote, tribal-region setting, a local guide
                    is strongly advisable for both navigation and cultural
                    context along the way.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Deomali at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Koraput district, Odisha",
                        },
                        {
                          icon: "⛰️",
                          label: "Height",
                          value: "~1,672 m (highest in Odisha)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🥾",
                          label: "Difficulty",
                          value: "Moderate",
                        },
                        {
                          icon: "🚗",
                          label: "Base",
                          value: "Koraput town",
                        },
                        {
                          icon: "🎯",
                          label: "Vibe",
                          value: "Quiet, offbeat trek",
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
                  <h2>Best Time to Trek Deomali</h2>
                  <p>
                    Cool, dry conditions matter far more here than at higher
                    Himalayan altitudes — the trail itself is the main
                    variable to plan around.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, clear conditions make for comfortable trekking and the best summit visibility.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warmer, still trekkable",
                        text: "Temperatures rise, making an early start more important to avoid the heat of the day.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Slippery trails and poor visibility make this genuinely difficult and best avoided.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌄",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best time of day",
                        text: "Starting early, regardless of season, gives the clearest views and coolest trekking conditions.",
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
                    <strong>Our pick:</strong> October to February, with an
                    early morning start for the clearest, coolest trekking
                    conditions.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Deomali</h2>
                  <p>
                    Koraput town is the essential base for attempting
                    Deomali.
                  </p>
                  <ul>
                    <li>
                      <strong>From Koraput town:</strong> A manageable drive
                      to the trailhead — cross-link{" "}
                      <Link href="/blog/koraput-travel-guide">
                        our Koraput guide
                      </Link>{" "}
                      for how to reach the wider region.
                    </li>
                    <li>
                      <strong>Local guide/driver arrangement:</strong> Best
                      organized from Koraput, where guides familiar with the
                      trail and surrounding villages can be hired.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange your guide and
                    transport in Koraput town the evening before, so you can
                    start the trek at first light rather than losing time to
                    logistics on the day.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Trek & the Summit</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Forested mountain trail leading toward the Deomali summit, Odisha"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Trail</h3>
                  <p>
                    A generally moderate trek through dense forest, with
                    some steeper stretches nearer the summit. Expect a few
                    hours each way, depending on pace and conditions.
                  </p>
                  <h3>Tribal Villages Along the Way</h3>
                  <p>
                    The route passes near tribal villages, adding a cultural
                    dimension to the natural scenery — a respectful,
                    unhurried approach is appreciated.
                  </p>
                  <h3>Summit Views</h3>
                  <p>
                    From the top, panoramic views stretch across the Eastern
                    Ghats — a genuinely rewarding payoff for a trek that
                    sees far fewer visitors than comparable Himalayan
                    summits.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's no accommodation at Deomali itself — Koraput
                    town is the realistic base, both before and after the
                    trek.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Odisha Tourism guesthouses (Koraput)",
                          "Basic town lodges",
                          "Simple family-run stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Business-style hotels in Koraput town",
                          "Upgraded guesthouses",
                          "Better-equipped rooms",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "⛰️",
                        range: "₹4,000+/night",
                        picks: [
                          "Very limited premium options",
                          "Book well ahead if available",
                          "Not the priority for this trip",
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
                  <h2>Suggested Visit Plan (1 Day Trek)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Pre-Trek",
                        title: "Base in Koraput",
                        color: "bg-amber-700",
                        activities: [
                          "Arrange a local guide and transport the evening before",
                          "Early night ahead of an early start",
                          "Confirm trail conditions with your guide",
                        ],
                      },
                      {
                        day: "Trek Day",
                        title: "Summit & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Early start to the trailhead",
                          "Trek to the Deomali summit",
                          "Return to Koraput by evening",
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
                    * With more time, combine this trek with a wider{" "}
                    <Link href="/blog/koraput-travel-guide">Koraput</Link> and{" "}
                    <Link href="/blog/jeypore-travel-guide">Jeypore</Link>{" "}
                    itinerary.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food on the Trek</h2>
                  <ul>
                    <li>
                      <strong>Carry your own:</strong> There are minimal
                      facilities along the trail — pack water and snacks for
                      the full trek.
                    </li>
                    <li>
                      <strong>Koraput town meals:</strong> Eat a proper meal
                      before and after the trek at your base accommodation
                      or a local eatery.
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
                          ["Local guide (day)", "₹600", "₹900", "₹1,300"],
                          ["Transport to trailhead", "₹500", "₹800", "₹1,500"],
                          ["Accommodation/night (Koraput)", "₹900", "₹2,500", "₹4,500"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
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
                    * Figures are per person, per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Trekking Deomali</h2>
                  <ul>
                    <li>
                      <strong>Hire a local guide:</strong> Essential given
                      limited signage and the remote, tribal-region
                      terrain.
                    </li>
                    <li>
                      <strong>Start early:</strong> Complete the trek
                      comfortably in daylight and catch the clearest summit
                      views.
                    </li>
                    <li>
                      <strong>Carry sufficient water:</strong> There are no
                      reliable facilities along the trail.
                    </li>
                    <li>
                      <strong>Wear proper trekking footwear:</strong> The
                      terrain includes forested, sometimes uneven sections.
                    </li>
                    <li>
                      <strong>Avoid monsoon months:</strong> Slippery trails
                      and poor visibility make Jun-Sep genuinely difficult.
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
                          "Hire a local guide from Koraput",
                          "Start the trek early morning",
                          "Carry enough water for the full trek",
                          "Wear proper trekking shoes",
                          "Respect tribal villages along the route",
                          "Check weather conditions before setting out",
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
                          "Attempt the trek without a guide",
                          "Trek during peak monsoon",
                          "Start late in the day",
                          "Expect facilities along the trail",
                          "Rely on mobile signal for navigation",
                          "Skip proper footwear",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Deomali with{" "}
                    <Link href="/blog/koraput-travel-guide">Koraput</Link>{" "}
                    town and{" "}
                    <Link href="/blog/jeypore-travel-guide">Jeypore</Link> for
                    a fuller southern Odisha regional circuit. See our full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
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
                {[
                  "Deomali",
                  "Odisha's Highest Peak",
                  "Koraput",
                  "Trekking",
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

              <RelatedPostsGrid currentSlug="deomali-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="deomali-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
