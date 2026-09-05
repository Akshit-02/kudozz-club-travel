// src/app/blog/kangpokpi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kangpokpi Travel Guide: Pineapple Hills Near Imphal",
  description:
    "Complete Kangpokpi travel guide — a Kuki-Zo hill town north of Imphal on NH2, known for pineapple cultivation, forested terrain and waterfalls, how to reach, and full trip planning.",
  keywords:
    "Kangpokpi travel guide, Kangpokpi Manipur, Kuki-Zo Manipur, Kangpokpi pineapple, Manipur hill towns, NH2 Manipur, how to reach Kangpokpi, Inner Line Permit Manipur, Manipur day trips from Imphal",
  openGraph: {
    title: "Kangpokpi Travel Guide: Pineapple Hills Near Imphal",
    description:
      "Cool forested hills, terraced farmland, and pineapple orchards a short drive from Imphal — the complete guide to Kangpokpi.",
    url: "https://club.kudozz.in/blog/kangpokpi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cool pine-covered hill town landscape, evoking Kangpokpi's forested hills north of Imphal in Manipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kangpokpi Travel Guide: Pineapple Hills Near Imphal",
    description:
      "Cool hills, pineapple orchards, and forested terrain a short drive from Imphal — the complete Kangpokpi guide.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kangpokpi-travel-guide",
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
          headline: "Kangpokpi Travel Guide: Pineapple Hills Near Imphal",
          description:
            "Complete Kangpokpi travel guide — a Kuki-Zo hill town north of Imphal on NH2, known for pineapple cultivation, forested terrain and waterfalls.",
          image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kangpokpi-travel-guide",
          },
          keywords: "Kangpokpi, Manipur, Kuki-Zo, pineapple, NH2",
          about: {
            "@type": "Place",
            name: "Kangpokpi",
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
                name: "Kangpokpi",
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
    q: "What is Kangpokpi known for?",
    a: "Kangpokpi is a district headquarters town north of Imphal on NH2, home to Kuki-Zo communities. It's known locally for pineapple cultivation across the district's forested and terraced hillsides, along with scattered waterfalls in the surrounding hills.",
  },
  {
    q: "How far is Kangpokpi from Imphal?",
    a: "Roughly 30-40 km, making it one of the most accessible hill destinations near the capital — a comfortable half-day trip, or a natural first stop if heading further north.",
  },
  {
    q: "When is the best time to visit Kangpokpi?",
    a: "October to March for the most pleasant hill weather generally. The local pineapple harvest, running roughly from the monsoon into early autumn, is also of interest to travelers curious about agri-tourism.",
  },
  {
    q: "Can Kangpokpi be visited as a day trip from Imphal?",
    a: "Yes — its short distance from Imphal makes it one of the easiest hill day trips in the state, and it's also a convenient stop for travelers continuing further north on NH2.",
  },
  {
    q: "Is Kangpokpi safe to visit?",
    a: "Parts of Manipur have periodically seen security-related travel advisories, so check current government advisories before finalizing plans, stick to well-established routes such as NH2, travel with a local guide or operator, and avoid traveling after dark in this district. Visitors from outside Manipur also need an Inner Line Permit, in effect since December 2019.",
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
  { id: "introduction", title: "A Hill Town Close to Imphal", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kangpokpi", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KangpokpiGuidePage() {
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
              alt="Cool pine-covered hill town landscape, evoking Kangpokpi's forested hills north of Imphal in Manipur"
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
                { label: "Kangpokpi", href: null },
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
              {["Manipur", "Kangpokpi", "Kuki-Zo", "Off-beat"].map(
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
              Kangpokpi: Pineapple Hills Near Imphal
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Forested hills, terraced farmland, and pineapple orchards
              barely 40 km from Imphal — one of the easiest hill escapes
              in Manipur, and a natural first stop heading further north.
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
                  text: "North of Imphal, on NH2",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,650 words",
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
                  <h2>A Hill Town Close to Imphal</h2>
                  <p>
                    <strong>Kangpokpi</strong> is the district headquarters
                    town just north of Imphal on NH2, on the road toward{" "}
                    <Link href="/blog/nagaland-travel-guide">Nagaland</Link>,
                    and home to Kuki-Zo communities. Its proximity to the
                    capital — roughly 30-40 km — makes it one of the most
                    accessible hill destinations in the state, feasible as
                    a day trip or a natural first stop for travelers
                    heading further north.
                  </p>
                  <p>
                    The district is known locally for pineapple
                    cultivation across its terraced and forested
                    hillsides, along with scattered waterfalls tucked into
                    the surrounding forest. Elevation keeps the climate
                    noticeably cooler than the Imphal valley, and the mix
                    of forest and farmland gives Kangpokpi a genuinely
                    different character within a short drive of the
                    capital.
                  </p>
                  <p>
                    It's not a heavily developed tourist destination, but
                    for travelers who want a quick, easy taste of Manipur's
                    hill country without committing to a long journey,
                    Kangpokpi is a practical and rewarding choice.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🍍</span> Kangpokpi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North of Imphal, on NH2",
                        },
                        {
                          icon: "🏘️",
                          label: "Community",
                          value: "Kuki-Zo peoples",
                        },
                        {
                          icon: "🚗",
                          label: "From Imphal",
                          value: "~30–40 km",
                        },
                        {
                          icon: "🍍",
                          label: "Known For",
                          value: "Pineapple cultivation",
                        },
                        {
                          icon: "🌲",
                          label: "Terrain",
                          value: "Forest & terraced farmland",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
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
                  <h2>Best Time to Visit Kangpokpi</h2>
                  <p>
                    Kangpokpi's elevation keeps it cooler than Imphal
                    throughout the year, and its short distance from the
                    capital means it's a flexible add-on regardless of
                    season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, generally dry conditions — the most comfortable window for exploring the forested hills and farmland.",
                      },
                      {
                        season: "Monsoon – Early Autumn",
                        emoji: "🍍",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pineapple harvest season",
                        text: "The local pineapple harvest runs roughly from the monsoon into early autumn — of some interest for agri-tourism, though roads can be wetter.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warm, pre-monsoon",
                        text: "Warmer but generally manageable, with hill elevation keeping conditions milder than in the valley.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — lush, wetter roads",
                        text: "Heavy rain keeps the hills green and feeds the harvest, but travel comfort dips given wetter road conditions.",
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
                    <strong>Our pick:</strong> October to March for the
                    most comfortable hill weather; visit during the harvest
                    window if agri-tourism is your particular interest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kangpokpi</h2>
                  <ul>
                    <li>
                      <strong>Via Imphal:</strong> Almost all visitors
                      route through{" "}
                      <Link href="/blog/imphal-travel-guide">Imphal</Link>,
                      Manipur's air and road gateway. Kangpokpi is only
                      roughly 30-40 km away via NH2 — a short, easy drive.
                    </li>
                    <li>
                      <strong>By road:</strong> Shared taxis and hired cars
                      run regularly along NH2 given the short distance and
                      the route's importance as the main road north.
                    </li>
                    <li>
                      <strong>Inner Line Permit:</strong> Visitors from
                      outside Manipur need an Inner Line Permit (ILP), in
                      effect since December 2019 — arrange this in advance
                      or in Imphal before setting out.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Kangpokpi's short distance
                    from Imphal makes it easy to combine with an early
                    start and a same-day return — no need to plan an
                    overnight unless you want a slower pace.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Kangpokpi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hero.jpg"
                      alt="Forested hill terrain near Kangpokpi, Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Pineapple Orchards</h3>
                  <p>
                    Pineapple cultivation is a recognizable local
                    agricultural product across Kangpokpi's terraced
                    hillsides — visiting orchards, especially during
                    harvest, offers a firsthand look at this part of the
                    district's economy.
                  </p>
                  <h3>Forest &amp; Waterfall Walks</h3>
                  <p>
                    Kangpokpi's forested terrain holds scattered
                    waterfalls, best explored with local guidance given
                    limited signage — a quieter, offbeat alternative to
                    more heavily visited waterfall spots.
                  </p>
                  <h3>Terraced Hillside Views</h3>
                  <p>
                    The mix of forest and farmland across Kangpokpi's
                    hills makes for a scenic drive in its own right,
                    especially in the cooler months when visibility is at
                    its best.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Given the short distance from Imphal, most visitors
                    treat Kangpokpi as a day trip rather than an overnight
                    stay, though a few basic options exist locally.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: ["Basic guesthouses", "Homestays"],
                      },
                      {
                        tier: "Government Stays",
                        icon: "🏛️",
                        range: "₹800–₹1,800/night",
                        picks: ["District circuit house"],
                      },
                      {
                        tier: "Base in Imphal",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, Imphal",
                          "Easy same-day return",
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
                    Base yourself in Imphal and treat Kangpokpi as an easy
                    half-day or full-day excursion — its short distance
                    makes an overnight stay unnecessary for most itineraries.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half-Day to 1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Imphal to Kangpokpi",
                        color: "bg-amber-700",
                        activities: [
                          "Short drive from Imphal via NH2 (~1 hr)",
                          "Visit pineapple orchards (seasonal)",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Hills & Waterfalls",
                        color: "bg-sky-600",
                        activities: [
                          "Explore forested hill terrain with a local guide",
                          "Visit a nearby waterfall if time allows",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Return or Continue",
                        color: "bg-forest-600",
                        activities: [
                          "Return to Imphal, or",
                          "Continue north toward Senapati/Nagaland",
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
                  <h2>What to Eat in Kangpokpi</h2>
                  <ul>
                    <li>
                      <strong>Fresh pineapple:</strong> Grown locally and
                      widely available, especially during the harvest
                      window.
                    </li>
                    <li>
                      <strong>Kuki-Zo hill cuisine:</strong> Simple, often
                      home-cooked dishes built around locally grown
                      vegetables and smoked meats.
                    </li>
                    <li>
                      <strong>Carry snacks for excursions:</strong> Dining
                      options thin out away from the main town center, so
                      pack accordingly for waterfall or orchard visits.
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
                          ["Car hire from Imphal (round trip)", "₹1,500", "₹2,500", "₹4,000"],
                          ["Accommodation/night (if staying)", "₹500", "₹1,300", "₹2,800"],
                          ["Food/day", "₹250", "₹500", "₹1,000"],
                          ["Local guide (half-day)", "₹700", "₹1,200", "₹2,000"],
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
                    * A day trip from Imphal keeps overall costs low —
                    accommodation is only needed if you choose to overnight.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kangpokpi</h2>
                  <ul>
                    <li>
                      <strong>Arrange your Inner Line Permit ahead of
                      time:</strong> Required for all visitors from outside
                      Manipur since December 2019.
                    </li>
                    <li>
                      <strong>Start early for a day trip:</strong> An
                      early departure from Imphal makes it easy to fit in
                      orchards, a waterfall, and the return drive
                      comfortably.
                    </li>
                    <li>
                      <strong>Hire local guidance for waterfalls:</strong>{" "}
                      Trail signage is limited, so local knowledge adds
                      real value.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Digital payment
                      acceptance is inconsistent outside Imphal.
                    </li>
                    <li>
                      <strong>Check current advisories:</strong> Parts of
                      Manipur have periodically seen security-related
                      travel advisories, so check current government
                      advisories before finalizing plans, stick to
                      well-established routes such as NH2, travel with a
                      local guide or operator, and avoid traveling after
                      dark in this district.
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
                          "Arrange your Inner Line Permit before arriving",
                          "Start early to make the most of a day trip",
                          "Hire local guidance for waterfall visits",
                          "Carry cash and basic snacks",
                          "Check current advisories before finalizing plans",
                          "Visit during harvest season if agri-tourism interests you",
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
                          "Travel without confirming your Inner Line Permit",
                          "Attempt waterfall trails without local guidance",
                          "Rely on cards outside Imphal's main areas",
                          "Travel after dark in this district",
                          "Expect a large hotel or dining scene",
                          "Skip checking current travel advisories",
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
                    <Link href="/blog/imphal-travel-guide">Imphal</Link> and
                    continue further north via NH2 toward{" "}
                    <Link href="/blog/senapati-travel-guide">Senapati</Link>{" "}
                    if you have extra time. See our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
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
                {["Manipur", "Kangpokpi", "Kuki-Zo"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="kangpokpi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kangpokpi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
