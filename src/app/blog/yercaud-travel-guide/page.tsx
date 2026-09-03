// src/app/blog/yercaud-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yercaud Travel Guide: Coffee Hills & Best Time",
  description:
    "Complete Yercaud guide — Yercaud Lake, Lady's Seat, Kiliyur Falls, coffee plantation visits, best time to visit, how to reach from Salem, and a full visit plan.",
  keywords:
    "Yercaud travel guide, Shevaroy Hills, Yercaud Lake, Kiliyur Falls, Lady's Seat Yercaud, coffee plantations Tamil Nadu, best time to visit Yercaud, how to reach Yercaud, Salem hill station",
  openGraph: {
    title: "Yercaud Travel Guide: Coffee Hills & Best Time",
    description:
      "A quieter alternative to Ooty and Kodaikanal, ringed by coffee and orange plantations in the Shevaroy Hills — the complete Yercaud guide.",
    url: "https://club.kudozz.in/blog/yercaud-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green mountain landscape, evoking Yercaud's Shevaroy Hills scenery",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yercaud Travel Guide: Coffee Hills & Best Time",
    description:
      "A quieter hill escape ringed by coffee plantations in the Shevaroy Hills — the complete Yercaud guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/yercaud-travel-guide",
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
          headline: "Yercaud Travel Guide: Coffee Hills & Best Time",
          description:
            "Complete Yercaud guide — Yercaud Lake, Lady's Seat, Kiliyur Falls, coffee plantation visits, best time to visit, how to reach from Salem, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/yercaud-travel-guide",
          },
          keywords: "Yercaud, Shevaroy Hills, Tamil Nadu, hill station, coffee plantations",
          about: {
            "@type": "Place",
            name: "Yercaud",
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
                name: "Yercaud",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How is Yercaud different from Ooty or Kodaikanal?",
    a: "Yercaud is smaller, quieter, and less commercialized — a low-key coffee-growing hill station rather than a major tourist hub. It sees far fewer visitors than Ooty or Kodaikanal even in peak season.",
  },
  {
    q: "How far is Yercaud from Salem or Chennai?",
    a: "Roughly 30 km from Salem, a short, easy ghat drive, and about 350 km from Chennai — making it a reasonable weekend trip from either city or from Bangalore.",
  },
  {
    q: "What is the best time to visit Yercaud?",
    a: "April to June and October to February both work well. Even in peak season, Yercaud stays noticeably less crowded than Tamil Nadu's bigger hill stations.",
  },
  {
    q: "Is Yercaud good for a quick weekend trip?",
    a: "Yes — its short, easy access from Salem and Chennai/Bangalore makes it one of the more convenient weekend hill getaways in the state.",
  },
  {
    q: "What is there to do in Yercaud besides sightseeing?",
    a: "Coffee estate visits are a popular low-key activity, along with boating on Yercaud Lake and easy walks to viewpoints like Lady's Seat and Pagoda Point.",
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
  { id: "introduction", title: "The Quiet Coffee Hills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Yercaud", level: 2 },
  { id: "things-to-do", title: "Lake, Viewpoints & Coffee Estates", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function YercaudGuidePage() {
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
              alt="Green mountain landscape, evoking Yercaud's Shevaroy Hills scenery"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Yercaud", href: null },
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
              {["Yercaud", "Shevaroy Hills", "Coffee Estates", "Lake", "Hill Station"].map(
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
              Yercaud: The Quiet Coffee Hills of Salem
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A low-key hill station ringed by coffee and orange
              plantations in the Shevaroy Hills — the pick for travellers
              wanting Tamil Nadu's hill-station scenery without Ooty or
              Kodaikanal's crowds.
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
                  text: "Shevaroy Hills, Tamil Nadu",
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
                  <h2>The Quiet Coffee Hills</h2>
                  <p>
                    <strong>Yercaud</strong>, in the Shevaroy Hills of Salem
                    district, sits at roughly 1,515 m — modest compared to{" "}
                    <Link href="/blog/ooty-travel-guide">Ooty</Link>, and
                    generally quieter and less commercialized than either
                    Ooty or{" "}
                    <Link href="/blog/kodaikanal-travel-guide">
                      Kodaikanal
                    </Link>
                    . That relative calm, even during peak season, is its
                    main appeal.
                  </p>
                  <p>
                    Coffee, orange, and spice plantations give the area a
                    distinct agricultural character alongside the usual
                    hill-station scenery — a lake at the centre of town,
                    viewpoints looking out over the plains, and a seasonal
                    waterfall a short drive away.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>☕</span> Yercaud at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Range", value: "Shevaroy Hills, Salem" },
                        { icon: "🚗", label: "Gateway", value: "Salem (~30 km)" },
                        { icon: "🌡️", label: "Best Time", value: "Apr–Jun, Oct–Feb" },
                        { icon: "☕", label: "Known For", value: "Coffee Plantations" },
                        { icon: "⛰️", label: "Altitude", value: "~1,515 m" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,000–₹4,500" },
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
                  <h2>Best Time to Visit Yercaud</h2>
                  <p>
                    Yercaud is comfortable across a wider window than most
                    Tamil Nadu hill stations, though two periods stand out.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — pleasant weather",
                        text: "Mild, comfortable temperatures — a popular escape from the Salem and Chennai plains' heat.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Regular rain keeps the plantations lush, though Kiliyur Falls and outdoor viewpoints can be less reliable.",
                      },
                      {
                        season: "Oct – Feb",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — cool and clear",
                        text: "Cool, clear conditions and good visibility from the viewpoints — our other top pick alongside the summer window.",
                      },
                      {
                        season: "Any peak weekend",
                        emoji: "🧳",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Still relatively quiet",
                        text: "Even at its busiest, Yercaud stays noticeably calmer than Ooty or Kodaikanal — a genuine point in its favour.",
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
                    <strong>Our pick:</strong> Either April-June or
                    October-February — both work well, and Yercaud rarely
                    feels crowded regardless.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Yercaud</h2>
                  <ul>
                    <li>
                      <strong>By road from Salem:</strong> A short, easy
                      ghat drive of roughly 30 km — the most straightforward
                      way in.
                    </li>
                    <li>
                      <strong>By rail to Salem:</strong> Salem Junction is
                      well connected to Chennai, Bangalore, and Coimbatore,
                      with taxis covering the final stretch up.
                    </li>
                    <li>
                      <strong>By road from Chennai or Bangalore:</strong>{" "}
                      Roughly 350 km and 250 km respectively, making it a
                      reasonable weekend road-trip distance from either
                      city.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The short, easy Salem-Yercaud
                    ghat road makes this one of the most accessible weekend
                    hill trips in Tamil Nadu — a good pick if you don't have
                    time for the longer Ooty or Kodaikanal drives.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Lake, Viewpoints & Coffee Estates</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Green hill landscape, evoking Yercaud's Shevaroy Hills and coffee plantations"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Yercaud Lake</h3>
                  <p>
                    The centre of town, with boating available and a calm,
                    unhurried atmosphere compared to bigger hill-station
                    lakes elsewhere in Tamil Nadu.
                  </p>
                  <h3>Lady's Seat & Gent's Seat</h3>
                  <p>
                    Two well-known viewpoints looking out over the Salem
                    plains below — easy, rewarding short walks.
                  </p>
                  <h3>Kiliyur Falls</h3>
                  <p>
                    A seasonal waterfall a short distance from town, at its
                    best during and just after the monsoon.
                  </p>
                  <h3>Pagoda Point & Servarayan Temple</h3>
                  <p>
                    Pagoda Point offers another scenic outlook, while the
                    Servarayan Temple sits atop the highest peak in the
                    range, combining a pilgrimage stop with panoramic
                    views.
                  </p>
                  <h3>Coffee Estate Visits</h3>
                  <p>
                    Several estates around Yercaud welcome visitors for
                    walks among the plantations — a lower-key, more
                    agricultural alternative to typical hill-station
                    sightseeing.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Yercaud</h2>
                  <p>
                    Accommodation is modest compared to Ooty or Kodaikanal,
                    but sufficient for the smaller volume of visitors.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹1,800/night",
                        picks: [
                          "Budget lodges in town",
                          "TTDC hotel",
                          "Basic guesthouses",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹4,000/night",
                        picks: [
                          "Lake-area hotels",
                          "Cottage-style stays",
                          "Estate-adjacent guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹4,500–₹9,000+/night",
                        picks: [
                          "Coffee estate resorts",
                          "Boutique hillside properties",
                          "Premium cottage stays",
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
                  <h2>Suggested Visit Plan (Weekend)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Lake & Viewpoints",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Salem, check in",
                          "Yercaud Lake — boating",
                          "Lady's Seat and Gent's Seat at sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Coffee Estates & Falls",
                        color: "bg-sky-600",
                        activities: [
                          "Morning coffee estate visit",
                          "Kiliyur Falls (season permitting)",
                          "Pagoda Point before departure",
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

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Yercaud</h2>
                  <ul>
                    <li>
                      <strong>Local coffee:</strong> Freshly roasted,
                      estate-grown coffee is Yercaud's signature product —
                      worth buying to take home.
                    </li>
                    <li>
                      <strong>Orange and spice products:</strong> Seasonal
                      oranges and local spices are sold along the main
                      roads.
                    </li>
                    <li>
                      <strong>South Indian standards:</strong> Small local
                      eateries in town serve the usual reliable Tamil Nadu
                      breakfast and thali fare.
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
                          ["Accommodation/night", "₹900", "₹2,800", "₹6,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport/day", "₹300", "₹600", "₹1,200"],
                          ["Boating (per session)", "₹150", "₹150", "₹300"],
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
                    * Figures are per person, per day. Excludes travel to
                    Salem.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Yercaud</h2>
                  <ul>
                    <li>
                      <strong>Pick Yercaud for a quick escape:</strong> Its
                      short drive from Salem makes it ideal when you don't
                      have time for the longer Ooty or Kodaikanal journeys.
                    </li>
                    <li>
                      <strong>Visit a coffee estate:</strong> A genuinely
                      distinctive, low-key activity you won't find in the
                      same way at Tamil Nadu's bigger hill stations.
                    </li>
                    <li>
                      <strong>Check Kiliyur Falls' season:</strong> It's
                      strongest during and right after the monsoon, and can
                      thin out considerably at other times.
                    </li>
                    <li>
                      <strong>Don't expect Ooty-level infrastructure:</strong>{" "}
                      Dining and accommodation options are more limited —
                      part of what keeps it quiet.
                    </li>
                  </ul>

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
                          "Visit a coffee estate for a genuinely local activity",
                          "Check Kiliyur Falls' seasonal strength before visiting",
                          "Use Yercaud for a quick weekend hill escape",
                          "Try freshly roasted local coffee",
                          "Take an easy walk to Lady's Seat and Gent's Seat",
                          "Enjoy the comparative quiet even in peak season",
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
                          "Expect Ooty-level dining and hotel options",
                          "Visit Kiliyur Falls expecting a full flow outside season",
                          "Overlook it as too small to be worth the trip",
                          "Skip carrying cash — card acceptance is patchier here",
                          "Expect the same crowds as Ooty or Kodaikanal",
                          "Rush through without a coffee estate stop",
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
                    for more hill-station and heritage options across the
                    state.
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
                {["Yercaud", "Shevaroy Hills", "Tamil Nadu", "Hill Station"].map(
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

              <RelatedPostsGrid currentSlug="yercaud-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="yercaud-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
