// src/app/blog/tsomgo-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tsomgo Lake Guide: Permits & Best Time",
  description:
    "Complete Tsomgo Lake (Changu Lake) guide — permits, yak rides, seasonal changes, best time to visit, and how to combine it with Nathula Pass on a day trip from Gangtok.",
  keywords:
    "Tsomgo Lake travel guide, Changu Lake, Sikkim glacial lake, Tsomgo Lake permit, yak ride Sikkim, how to reach Tsomgo Lake, Tsomgo Lake best time",
  openGraph: {
    title: "Tsomgo Lake Guide: Permits & Best Time",
    description:
      "A glacial lake at 3,753 metres that shifts character with every season — the complete Tsomgo Lake guide.",
    url: "https://club.kudozz.in/blog/tsomgo-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "High-altitude lake surrounded by mountains, evoking Tsomgo Lake in Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsomgo Lake Guide: Permits & Best Time",
    description:
      "A glacial lake at 3,753 metres that shifts character with every season — the complete Tsomgo Lake guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tsomgo-lake-travel-guide",
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
          headline: "Tsomgo Lake Guide: Permits & Best Time",
          description:
            "Complete Tsomgo Lake (Changu Lake) guide — permits, yak rides, seasonal changes, best time to visit, and how to combine it with Nathula Pass on a day trip from Gangtok.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/tsomgo-lake-travel-guide",
          },
          keywords: "Tsomgo Lake, Changu Lake, Sikkim, glacial lake",
          about: {
            "@type": "Place",
            name: "Tsomgo Lake",
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
                name: "Tsomgo Lake",
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
    q: "How far is Tsomgo Lake from Gangtok?",
    a: "Roughly 40 km, generally visited as part of the same day trip that continues on to Nathula Pass, about 14 km further along the same route.",
  },
  {
    q: "Do I need a separate permit from Nathula Pass?",
    a: "No — Tsomgo Lake falls under the same Protected Area Permit required for Nathula, arranged through a registered Gangtok travel agent along with your vehicle and driver.",
  },
  {
    q: "What is the best time to visit Tsomgo Lake?",
    a: "March to June for rhododendron bloom and clearer water, and October to December for crisp post-monsoon skies, are both strong choices. The lake freezes over in deep winter, which is still atmospheric but visually different.",
  },
  {
    q: "Is Tsomgo Lake frozen in winter?",
    a: "Yes, it typically freezes during the coldest winter months, giving it a snow-and-ice character rather than the blue-green water seen in warmer seasons.",
  },
  {
    q: "Can Tsomgo Lake and Nathula Pass be combined in one day?",
    a: "Yes, this is the standard way most visitors see both — they sit on the same route from Gangtok, and a single day trip with an early start comfortably covers both plus Baba Mandir.",
  },
  {
    q: "Are yak rides available at Tsomgo Lake?",
    a: "Yes, yak rides along the lakeshore are a popular activity, though the area can get crowded with tourists doing the same in peak season — arrive early for a quieter experience.",
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
  { id: "introduction", title: "A Glacial Lake on the Nathula Road", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach & Permits", level: 2 },
  { id: "things-to-do", title: "The Lake & Yak Rides", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TsomgoLakeGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="High-altitude lake surrounded by mountains, evoking Tsomgo Lake in Sikkim"
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
                { label: "Tsomgo Lake", href: null },
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
              {["Tsomgo Lake", "Changu Lake", "Sikkim", "High Altitude Lake"].map(
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
              Tsomgo Lake: Permits, Yaks & Best Time to Visit
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A glacial lake at 3,753 metres that changes character
              completely with the seasons — vivid blue-green in spring,
              frozen and silent in winter.
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
                  text: "East Sikkim, near Gangtok",
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
                  <h2>A Glacial Lake on the Nathula Road</h2>
                  <p>
                    <strong>Tsomgo Lake</strong> (also called Changu Lake),
                    roughly 40 km from{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>,
                    sits at about 3,753 m on the same route that continues
                    up to{" "}
                    <Link href="/blog/nathula-pass-travel-guide">
                      Nathula Pass
                    </Link>
                    . It's a glacial lake whose look shifts dramatically
                    across the year — vivid blue-green in the warmer
                    months, ringed with snow and partly frozen in winter.
                  </p>
                  <p>
                    Given its proximity to Nathula, Tsomgo Lake is
                    overwhelmingly visited as part of the same day trip
                    rather than on its own, sharing the same Protected Area
                    Permit and typically the same vehicle for the day.
                  </p>
                  <p>
                    Yak rides along the shoreline are the signature
                    activity here — touristy, certainly, but a genuinely
                    popular part of the experience for most visitors.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Tsomgo Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Altitude", value: "~3,753 m" },
                        {
                          icon: "🚗",
                          label: "From Gangtok",
                          value: "~40 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Oct–Dec" },
                        {
                          icon: "🎫",
                          label: "Requires",
                          value: "Same permit as Nathula",
                        },
                        {
                          icon: "🐂",
                          label: "Known For",
                          value: "Yak rides, seasonal color",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Trip",
                          value: "₹1,000 – ₹3,500",
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
                  <h2>Best Time to Visit Tsomgo Lake</h2>
                  <p>
                    The lake looks genuinely different depending on the
                    season, so it's worth timing your visit to the mood you
                    want.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Rhododendrons bloom on the surrounding hills and the water is at its clearest, blue-green best.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — limited visibility",
                        text: "Cloud cover and rain frequently obscure the surrounding peaks and can disrupt the drive.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Crisp and clear",
                        text: "Another strong window, with clean air and good mountain visibility.",
                      },
                      {
                        season: "Jan – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Frozen — atmospheric but different",
                        text: "The lake partially or fully freezes, trading its color for a stark, snowbound look.",
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
                    <strong>Our pick:</strong> March to June for
                    rhododendron season and the lake's best color, or
                    October to December for clear, crisp mountain air.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tsomgo Lake & Permits</h2>
                  <ul>
                    <li>
                      <strong>From Gangtok:</strong> A roughly 40 km drive,
                      the first major stop on the same route that continues
                      to{" "}
                      <Link href="/blog/nathula-pass-travel-guide">
                        Nathula Pass
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Permit shared with Nathula:</strong> The same
                      Protected Area Permit covers both, arranged through a
                      registered Gangtok agent.
                    </li>
                    <li>
                      <strong>Vehicle and driver:</strong> Bundled with the
                      permit — self-drive isn't typically an option on this
                      route.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrive as early as possible
                    — the yak-ride area and lakeside paths get genuinely
                    crowded by mid-morning in peak season.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Lake & Yak Rides</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Mountain lake with snow-capped peaks, evoking Tsomgo Lake"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Lakeside Walk & Photography</h3>
                  <p>
                    A short paved path runs along part of the shoreline,
                    giving good vantage points for photos with the
                    surrounding peaks as a backdrop — most rewarding early
                    in the day before crowds build.
                  </p>
                  <h3>Yak Rides</h3>
                  <p>
                    Decorated yaks are available for short rides along the
                    shore — a popular, if touristy, activity that most
                    first-time visitors enjoy despite (or because of) how
                    photogenic it is.
                  </p>
                  <h3>Onward to Nathula</h3>
                  <p>
                    Most visitors continue straight on to{" "}
                    <Link href="/blog/nathula-pass-travel-guide">
                      Nathula Pass
                    </Link>{" "}
                    and Baba Mandir after Tsomgo, making the most of the
                    shared permit and vehicle for the day.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's no accommodation at Tsomgo Lake itself — this is
                    a day trip destination.{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>{" "}
                    is the practical base, with options across every
                    budget.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Tsomgo Lake",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Gangtok",
                          "Lakeside walk and photos",
                          "Optional yak ride",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Onward to Nathula",
                        color: "bg-sky-600",
                        activities: [
                          "Continue to Nathula Pass",
                          "Visit Baba Mandir en route",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Return",
                        color: "bg-forest-600",
                        activities: ["Drive back to Gangtok", "Rest and dinner"],
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
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Small lakeside stalls:</strong> A handful of
                      tea and snack stalls sit near the lake — enough for a
                      warm drink, not a full meal.
                    </li>
                    <li>
                      <strong>Eat before or after in Gangtok:</strong> Plan
                      your main meals around the drive rather than
                      expecting much en route.
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
                          ["Permit fee", "₹100", "₹100", "₹100"],
                          ["Yak ride", "₹300", "₹500", "₹800"],
                          [
                            "Shared/private vehicle (round trip)",
                            "₹800",
                            "₹1,800",
                            "₹3,500",
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
                    * Figures assume Tsomgo Lake is combined with Nathula
                    Pass in the same day-trip vehicle hire.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Tsomgo Lake</h2>
                  <ul>
                    <li>
                      <strong>Dress warmly:</strong> Even in the warmer
                      months, altitude keeps temperatures low.
                    </li>
                    <li>
                      <strong>Go early:</strong> The lakeside path and
                      yak-ride area fill up fast in peak season.
                    </li>
                    <li>
                      <strong>Check restricted zones:</strong> Some areas
                      near the lake may have photography restrictions given
                      its border-adjacent location.
                    </li>
                    <li>
                      <strong>Combine with Nathula:</strong> Make the most
                      of the shared permit and vehicle hire.
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
                          "Arrive early for a quieter lakeside experience",
                          "Dress warmly regardless of season",
                          "Combine the visit with Nathula Pass",
                          "Negotiate yak-ride prices before starting",
                          "Carry ID for the shared permit checkpoint",
                          "Time your visit for rhododendron season if possible",
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
                          "Expect a warm-water lake even in summer",
                          "Arrive late and miss a quiet lakeside window",
                          "Ignore posted photography restrictions",
                          "Rely on the lakeside stalls for a full meal",
                          "Skip warm layers assuming it's a short stop",
                          "Forget your ID for the permit checkpoint",
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
                    <strong>🗺️ Extend the trip:</strong> Continue on to{" "}
                    <Link href="/blog/nathula-pass-travel-guide">
                      Nathula Pass
                    </Link>{" "}
                    on the same route, and base yourself in{" "}
                    <Link href="/blog/gangtok-travel-guide">Gangtok</Link>{" "}
                    for the rest of your Sikkim trip. See our full{" "}
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
                {["Tsomgo Lake", "Changu Lake", "Sikkim", "High Altitude Lake"].map(
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

              <RelatedPostsGrid currentSlug="tsomgo-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tsomgo-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
