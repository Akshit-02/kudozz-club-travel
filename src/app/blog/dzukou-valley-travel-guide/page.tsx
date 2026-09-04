// src/app/blog/dzukou-valley-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dzukou Valley Trek Guide: Route & Best Time",
  description:
    "Complete Dzukou Valley trek guide — the route from Viswema, the rare Dzukou lily bloom season, trekker-hut camping, permits, best time to visit, and full trip planning.",
  keywords:
    "Dzukou Valley trek, Dzuko Valley, Nagaland trekking, Dzukou lily, Viswema trek, Nagaland Manipur border trek, best time Dzukou Valley, Dzukou Valley camping",
  openGraph: {
    title: "Dzukou Valley Trek Guide: Route & Best Time",
    description:
      "Rolling green hills often compared to Scotland, a lily found nowhere else on earth — the complete guide to trekking Dzukou Valley.",
    url: "https://club.kudozz.in/blog/dzukou-valley-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Rolling green valley landscape, evoking Dzukou Valley's rounded hills on the Nagaland-Manipur border",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzukou Valley Trek Guide: Route & Best Time",
    description:
      "Rolling green hills, a lily found nowhere else on earth — the complete Dzukou Valley trek guide.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dzukou-valley-travel-guide",
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
          headline: "Dzukou Valley Trek Guide: Route & Best Time",
          description:
            "Complete Dzukou Valley trek guide — the route from Viswema, the rare Dzukou lily bloom season, trekker-hut camping, and best time to visit.",
          image:
            "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/dzukou-valley-travel-guide",
          },
          keywords: "Dzukou Valley, Nagaland, trekking, Dzukou lily, Viswema",
          about: {
            "@type": "Place",
            name: "Dzukou Valley",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nagaland",
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
                name: "Nagaland",
                item: "https://club.kudozz.in/blog/nagaland-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Dzukou Valley",
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
    q: "When do the Dzukou lilies bloom?",
    a: "Roughly June to July, alongside other seasonal blooms that continue through September. This is the valley's most colorful window, though it doesn't always overlap with the clearest trekking weather.",
  },
  {
    q: "How difficult is the Dzukou Valley trek?",
    a: "Moderate. The initial climb from Viswema is steep and can be demanding, but it's followed by a relatively gentle traverse across the valley floor. No technical climbing skills are needed, but reasonable fitness helps.",
  },
  {
    q: "Where does the trek start?",
    a: "Viswema village, a short drive from Kohima. Most trekkers arrange transport to Viswema, then begin the climb on foot from there.",
  },
  {
    q: "How many days should I plan for?",
    a: "Most trekkers complete it as a 2-3 day round trip, including at least one night camping or staying in a trekker hut within the valley.",
  },
  {
    q: "Is it safe to camp overnight in the valley?",
    a: "Yes, with proper preparation — basic trekker huts and campsites exist, but there's no real infrastructure, so come with warm layers, rain protection, and enough supplies, ideally with a local guide.",
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
  { id: "introduction", title: "Northeast India's Most Striking Trek", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Trailhead", level: 2 },
  { id: "things-to-do", title: "The Trek & the Valley", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food on the Trek", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DzukouValleyGuidePage() {
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
              src="/images/destinations/manali/solang-valley.jpg"
              alt="Rolling green valley landscape, evoking Dzukou Valley's rounded hills on the Nagaland-Manipur border"
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
                { label: "Nagaland", href: "/blog/nagaland-travel-guide" },
                { label: "Dzukou Valley", href: null },
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
              {["Dzukou Valley", "Nagaland", "Trekking", "Manipur Border"].map(
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
              Dzukou Valley: Route, Season & Trek Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Rolling green hills often compared to Scotland's highlands, a
              rare lily found nowhere else on earth, and one of Northeast
              India's most rewarding treks.
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
                  text: "Nagaland–Manipur border",
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
                  <h2>Northeast India's Most Striking Trek</h2>
                  <p>
                    <strong>Dzukou Valley</strong> (also spelled{" "}
                    <em>Dzüko Valley</em>) sits on the{" "}
                    <Link href="/blog/nagaland-travel-guide">Nagaland</Link>
                    -Manipur border at roughly 2,452 m, famous for its
                    rolling green hills and an otherworldly landscape often
                    compared to Scotland's highlands or New Zealand —
                    genuinely one of Northeast India's most visually
                    striking treks.
                  </p>
                  <p>
                    The valley is known for seasonal flower blooms, most
                    notably the rare <strong>Dzukou lily</strong>, a flower
                    found nowhere else in the world outside this valley — a
                    genuinely significant botanical fact that draws
                    trekkers specifically timing their visit around the
                    bloom.
                  </p>
                  <p>
                    There's no permanent settlement or real infrastructure
                    within the valley itself — accommodation is limited to
                    basic trekker huts and campsites, so come prepared for
                    a genuine wilderness experience rather than expecting
                    amenities.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Dzukou Valley at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Nagaland–Manipur border",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~2,452 m",
                        },
                        {
                          icon: "🥾",
                          label: "Trailhead",
                          value: "Viswema village",
                        },
                        {
                          icon: "🌸",
                          label: "Known For",
                          value: "Dzukou Lily",
                        },
                        {
                          icon: "🗓️",
                          label: "Duration",
                          value: "2–3 days",
                        },
                        {
                          icon: "🌡️",
                          label: "Bloom Season",
                          value: "Jun – Sep",
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
                  <h2>Best Time to Visit Dzukou Valley</h2>
                  <p>
                    There's a genuine trade-off here worth understanding
                    upfront: bloom season and the clearest trekking weather
                    don't fully overlap.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Jun – Jul",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Dzukou lily bloom — our pick for flowers",
                        text: "The valley's signature rare lily blooms in this window, alongside other wildflowers — the most colorful time to visit, though monsoon rain is a factor.",
                      },
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clearest trekking weather",
                        text: "Dry, cooler conditions with the most reliable visibility — the better window if trekking comfort matters more than seeing the lily in bloom.",
                      },
                      {
                        season: "Aug – Sep",
                        emoji: "🌼",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Other blooms continue",
                        text: "Later-season flowers keep the valley colorful even after the lily's peak, though rain remains a factor.",
                      },
                      {
                        season: "May",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Pre-monsoon transition",
                        text: "A reasonable window before the rains set in, with the valley starting to green up ahead of the main bloom.",
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
                    <strong>Our pick:</strong> June-July if the Dzukou lily
                    is the priority; October-April if clear, dry trekking
                    conditions matter more than catching the bloom.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Trailhead</h2>
                  <ul>
                    <li>
                      <strong>Via Kohima:</strong> The trek begins from{" "}
                      <strong>Viswema village</strong>, a short drive from{" "}
                      <Link href="/blog/kohima-travel-guide">Kohima</Link> —
                      most trekkers base themselves in Kohima the night
                      before and after.
                    </li>
                    <li>
                      <strong>From Dimapur:</strong> A longer journey via
                      Kohima, since{" "}
                      <Link href="/blog/dimapur-travel-guide">Dimapur</Link>{" "}
                      is Nagaland's main airport/rail gateway.
                    </li>
                    <li>
                      <strong>On foot:</strong> From Viswema, the trek
                      itself begins with a steep initial climb before
                      reaching the valley's gentler traverse.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange a local guide
                    through Kohima before heading to Viswema — trail
                    signage is limited and a guide adds real value beyond
                    just navigation.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Trek & the Valley</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Green rolling hills in Dzukou Valley, Nagaland"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Climb from Viswema</h3>
                  <p>
                    The trek's toughest stretch comes early — a steep
                    ascent that gains most of the trek's elevation in a
                    relatively short distance. Pace yourself here; the
                    reward comes once you crest into the valley itself.
                  </p>
                  <h3>The Valley Traverse</h3>
                  <p>
                    Once inside the valley, the terrain flattens into a
                    gentle, rolling landscape of green hills — the section
                    that gives Dzukou its reputation as one of Northeast
                    India's most extraordinary landscapes.
                  </p>
                  <h3>The Dzukou Lily</h3>
                  <p>
                    Found nowhere else on earth, this rare lily blooms
                    roughly June-July, drawing trekkers specifically for
                    the flower alongside the valley's other seasonal
                    blooms.
                  </p>
                  <h3>Trekker Huts & Camping</h3>
                  <p>
                    Basic huts and campsites within the valley are the only
                    accommodation — there's no village or real
                    infrastructure, so treat this as a genuine wilderness
                    trek rather than a lodge-to-lodge walk.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation splits into two very different types —
                    basic trekker huts inside the valley, and standard
                    hotels in Kohima before and after the trek.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "In the Valley",
                        icon: "⛺",
                        range: "₹300–₹800/night",
                        picks: [
                          "Basic trekker huts",
                          "Tent camping",
                          "Very limited facilities",
                        ],
                      },
                      {
                        tier: "Kohima — Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses",
                          "Tourist lodges",
                        ],
                      },
                      {
                        tier: "Kohima — Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels",
                          "Boutique guesthouses",
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
                    Come prepared for genuinely basic facilities inside the
                    valley — this is a wilderness trek, not a lodge trail.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2–3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Kohima to the Valley",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Kohima to Viswema",
                          "Steep climb into the valley",
                          "Set up camp / check into a trekker hut",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Explore the Valley",
                        color: "bg-sky-600",
                        activities: [
                          "Walk the valley's rolling hills",
                          "Look for the Dzukou lily in bloom season",
                          "Overnight again in the valley",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Descend & Return",
                        color: "bg-forest-600",
                        activities: [
                          "Trek back down to Viswema",
                          "Drive back to Kohima",
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
                  <h2>Food on the Trek</h2>
                  <ul>
                    <li>
                      <strong>Carry your own supplies:</strong> There are
                      minimal facilities within the valley — pack enough
                      food for the full trek.
                    </li>
                    <li>
                      <strong>Guides/porters may cook basic meals:</strong>{" "}
                      If trekking with a local guide, simple cooked meals
                      are sometimes arranged as part of the package.
                    </li>
                    <li>
                      <strong>Eat well in Kohima before/after:</strong> Naga
                      cuisine — smoked pork, bamboo shoot dishes — is worth
                      enjoying properly once back from the trek.
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
                          ["Local guide (per day)", "₹1,500", "₹2,500", "₹4,000"],
                          [
                            "Trekker hut/camping",
                            "₹300",
                            "₹500",
                            "₹800",
                          ],
                          ["Kohima hotel/night", "₹1,200", "₹3,000", "₹6,000"],
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
                    * A local guide is genuinely worth the cost given
                    limited trail signage and the value of local
                    knowledge.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for the Dzukou Valley Trek</h2>
                  <ul>
                    <li>
                      <strong>Carry warm layers and rain protection:</strong>{" "}
                      Mountain weather is unpredictable at this altitude,
                      regardless of season.
                    </li>
                    <li>
                      <strong>Hire a local guide:</strong> Especially
                      valuable for first-time visitors given limited trail
                      signage.
                    </li>
                    <li>
                      <strong>Pack out all trash:</strong> Help preserve
                      the valley's pristine landscape — there's no waste
                      infrastructure on the trail.
                    </li>
                    <li>
                      <strong>Time your trip around your priority:</strong>{" "}
                      Bloom season versus clear trekking weather — decide
                      which matters more before booking.
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
                          "Hire a local guide, especially on a first visit",
                          "Carry warm layers even in the warmer months",
                          "Pack out all your trash",
                          "Start the climb from Viswema early in the day",
                          "Carry enough food and water for the full trek",
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
                          "Expect any real infrastructure inside the valley",
                          "Attempt the trek without warm/rain gear",
                          "Leave litter on the trail or in the valley",
                          "Start the climb late in the day",
                          "Pick or trample the Dzukou lily if you see it",
                          "Skip a guide if trekking for the first time",
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
                    <strong>🗺️ Extend the trip:</strong> Base yourself in{" "}
                    <Link href="/blog/kohima-travel-guide">Kohima</Link>{" "}
                    and combine the trek with a visit to{" "}
                    <Link href="/blog/kisama-travel-guide">Kisama</Link> if
                    your timing allows. See our full{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      Nagaland travel guide
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
                {["Dzukou Valley", "Nagaland", "Trekking", "Manipur Border"].map(
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

              <RelatedPostsGrid currentSlug="dzukou-valley-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dzukou-valley-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
