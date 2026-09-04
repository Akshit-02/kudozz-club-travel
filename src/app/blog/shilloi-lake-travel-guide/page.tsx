// src/app/blog/shilloi-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Shilloi Lake Guide: Nagaland's Largest Lake",
  description:
    "Complete Shilloi Lake guide — Nagaland's largest natural lake near the Myanmar border, local Chakhesang legends, how to reach via Phek district, and a full visit plan.",
  keywords:
    "Shilloi Lake travel guide, Nagaland's largest lake, Phek district, Shilloi Lake trek, Myanmar border Nagaland, how to reach Shilloi Lake, offbeat Nagaland lakes",
  openGraph: {
    title: "Shilloi Lake Guide: Nagaland's Largest Lake",
    description:
      "A remote, high-altitude natural lake near the Myanmar border, wrapped in Chakhesang legend and forested hills — the complete Shilloi Lake guide.",
    url: "https://club.kudozz.in/blog/shilloi-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Clear water surrounded by forested hills, evoking the remote setting of Shilloi Lake in Nagaland",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shilloi Lake Guide: Nagaland's Largest Lake",
    description:
      "Nagaland's largest natural lake, hidden in forested hills near the Myanmar border — the complete Shilloi Lake guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/shilloi-lake-travel-guide",
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
          headline: "Shilloi Lake Guide: Nagaland's Largest Lake",
          description:
            "Complete Shilloi Lake guide — Nagaland's largest natural lake near the Myanmar border, local Chakhesang legends, how to reach via Phek district, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/shilloi-lake-travel-guide",
          },
          keywords: "Shilloi Lake, Phek district, Nagaland, Myanmar border, Chakhesang Naga",
          about: {
            "@type": "Place",
            name: "Shilloi Lake",
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
                name: "Shilloi Lake",
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
    q: "How do you get to Shilloi Lake?",
    a: "Access is via Phek district, combining a drive with, in many cases, some walking on the final approach. It's a genuinely remote destination, so arranging a local guide and checking current road/trail conditions in advance is essential.",
  },
  {
    q: "Is it a difficult journey?",
    a: "Yes, relatively — this is not an easy add-on stop. The remote, high-altitude location near the Myanmar border means real travel effort is involved, and it's best approached as part of a wider Phek district visit rather than a quick detour.",
  },
  {
    q: "How far is Shilloi Lake from Kohima?",
    a: "It's a considerable distance, well beyond a single day trip from Kohima given the drive into Phek district followed by the final approach to the lake itself.",
  },
  {
    q: "What are the local legends associated with the lake?",
    a: "Shilloi Lake carries various local legends among the Chakhesang Naga community, passed down through generations — a local guide can offer far more detail and context than any written account.",
  },
  {
    q: "Is it worth the effort to reach?",
    a: "For travellers drawn to genuine wilderness and off-the-beaten-path scenery, yes — it's one of Nagaland's most scenic and least-visited natural spots. Those wanting an easy, polished sightseeing stop should set expectations accordingly.",
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
  { id: "introduction", title: "Nagaland's Largest Lake", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Shilloi Lake", level: 2 },
  { id: "things-to-do", title: "The Lake & Its Legends", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ShilloiLakeGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Clear water surrounded by forested hills, evoking the remote setting of Shilloi Lake in Nagaland"
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
                { label: "Shilloi Lake", href: null },
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
                "Shilloi Lake",
                "Phek District",
                "Nagaland",
                "Myanmar Border",
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
              Shilloi Lake: Nagaland's Largest Natural Lake
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A remote, high-altitude lake near the Myanmar border, wrapped
              in forested hills and Chakhesang Naga legend — one of
              Nagaland's most scenic and least-visited natural spots.
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
                  text: "Phek district, Nagaland",
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
                  <h2>Nagaland's Largest Lake</h2>
                  <p>
                    <strong>Shilloi Lake</strong> is Nagaland's largest
                    natural lake, tucked into{" "}
                    <Link href="/blog/phek-travel-guide">Phek district</Link>{" "}
                    near the Myanmar border. Set at high altitude and ringed
                    by dense forested hills, it's considered one of the
                    state's most scenic — and most genuinely remote —
                    natural spots.
                  </p>
                  <p>
                    Reaching Shilloi Lake takes real effort: a drive followed,
                    in many cases, by some walking on the final approach.
                    This is not an easy scenic stop tacked onto a busier
                    itinerary — it's a destination for travellers who want a
                    genuine wilderness experience and are willing to put in
                    the time to reach it. The lake also carries various local
                    legends among the Chakhesang Naga community, adding a
                    layer of cultural storytelling that a local guide can
                    bring to life far better than any signage.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Shilloi Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "District", value: "Phek, Nagaland" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Nagaland's Largest Lake",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🥾",
                          label: "Access",
                          value: "Drive + walking",
                        },
                        {
                          icon: "🌍",
                          label: "Location",
                          value: "Near Myanmar border",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹3,500",
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
                  <h2>Best Time to Visit Shilloi Lake</h2>
                  <p>
                    Weather shapes both the scenery and the difficulty of the
                    approach to Shilloi Lake.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Nov",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies and comfortable temperatures make both the drive and the final approach considerably easier.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Cool and clear",
                        text: "Crisp weather with good visibility, though mornings can be genuinely cold at this altitude.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warming, still manageable",
                        text: "Comfortable temperatures before the monsoon sets in, still a good window for the approach.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain makes the approach genuinely difficult and potentially unsafe given the remote, undeveloped trails.",
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
                    <strong>Our pick:</strong> October to November — the
                    clearest weather and the easiest window for the drive
                    and final approach combined.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Shilloi Lake</h2>
                  <ul>
                    <li>
                      <strong>Via Phek district:</strong> The lake is reached
                      through{" "}
                      <Link href="/blog/phek-travel-guide">Phek</Link>,
                      itself a long journey from Kohima — plan this as part
                      of a wider Phek district visit.
                    </li>
                    <li>
                      <strong>The final approach:</strong> Beyond the
                      drivable road, reaching the lake typically involves
                      some walking — describe this as genuinely variable and
                      check current conditions locally rather than expecting
                      a fixed, paved route.
                    </li>
                    <li>
                      <strong>Local guidance essential:</strong> Given the
                      remote setting and limited signage, a local guide is
                      strongly advisable for both navigation and safety.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Confirm current road and
                    trail conditions with a Phek-based contact before
                    setting out — access can vary with weather and season.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Lake & Its Legends</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Forested hills around clear water, evoking Shilloi Lake's remote high-altitude setting"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Lake Itself</h3>
                  <p>
                    Shilloi Lake's scale and setting — Nagaland's largest
                    natural lake, ringed by dense forested hills at high
                    altitude — make the effort of reaching it genuinely
                    rewarding. The stillness and remoteness are as much the
                    draw as the scenery itself.
                  </p>
                  <h3>Chakhesang Legends</h3>
                  <p>
                    The lake is woven into local Chakhesang Naga folklore,
                    with various legends passed down through generations.
                    A local guide can share these stories in far richer
                    detail than any written account, adding real depth to a
                    visit.
                  </p>
                  <h3>The Surrounding Hills</h3>
                  <p>
                    The forested terrain around the lake offers further
                    quiet exploration for travellers with the time and
                    stamina, though this remains genuinely undeveloped
                    wilderness rather than a marked trail network.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's essentially no dedicated accommodation at the
                    lake itself — base in Phek town or a nearby village and
                    treat Shilloi Lake as a day excursion.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic guesthouses, Phek town",
                          "Village homestays nearby",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,000/night",
                        picks: [
                          "Tour-operator-arranged homestays",
                          "Better-appointed Phek district lodges",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "Not available",
                        picks: [
                          "No dedicated properties near the lake",
                          "Consider Kohima for premium stays",
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
                        title: "Arrive in Phek District",
                        color: "bg-amber-700",
                        activities: [
                          "Travel from Kohima into Phek district",
                          "Settle in, arrange local guide for the lake",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Shilloi Lake Excursion",
                        color: "bg-forest-600",
                        activities: [
                          "Early start for the drive and approach walk",
                          "Time at the lake with your guide",
                          "Return to Phek town",
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
                    * Best combined with a wider{" "}
                    <Link href="/blog/phek-travel-guide">
                      Phek district visit
                    </Link>{" "}
                    given the shared travel effort involved.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Homestay/guesthouse meals in Phek:</strong>{" "}
                      The most reliable option, typically home-style
                      Chakhesang Naga cooking.
                    </li>
                    <li>
                      <strong>Carry your own for the lake:</strong>{" "}
                      There are no facilities at Shilloi Lake itself, so
                      pack water and snacks for the excursion.
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night (Phek)", "₹700", "₹2,500"],
                          ["Food/day", "₹400", "₹800"],
                          [
                            "Local guide (per excursion)",
                            "₹1,500",
                            "₹3,000",
                          ],
                          ["Vehicle hire (round trip)", "₹3,000", "₹5,500"],
                        ].map(([exp, b, m], i) => (
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * A local guide is essentially non-negotiable here given
                    the remote access and limited signage.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Shilloi Lake</h2>
                  <ul>
                    <li>
                      <strong>Arrange a local guide:</strong> Given the
                      remote access and limited signage, this is genuinely
                      important for both navigation and safety.
                    </li>
                    <li>
                      <strong>Check conditions before setting out:</strong>{" "}
                      Confirm current road and trail conditions locally, as
                      access can vary with weather.
                    </li>
                    <li>
                      <strong>Come prepared for a wilderness
                      experience:</strong> This is not an easy scenic stop —
                      wear proper footwear and carry enough water.
                    </li>
                    <li>
                      <strong>Ask about local legends:</strong> A guide's
                      stories add real depth to the visit beyond the
                      scenery alone.
                    </li>
                    <li>
                      <strong>Combine with Phek district:</strong> Make the
                      most of the journey by pairing it with the terraced
                      fields nearby.
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
                          "Arrange a local guide before setting out",
                          "Check current access conditions locally",
                          "Wear proper footwear for the final approach",
                          "Carry enough water and snacks",
                          "Combine with a wider Phek district visit",
                          "Ask your guide about local Chakhesang legends",
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
                          "Attempt the approach without a local guide",
                          "Visit during heavy monsoon rain",
                          "Expect a paved, easy walk to the lake",
                          "Underestimate the travel time from Kohima",
                          "Expect any accommodation right at the lake",
                          "Rush the visit — it deserves unhurried time",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Shilloi Lake
                    with the terraced fields of{" "}
                    <Link href="/blog/phek-travel-guide">Phek district</Link>{" "}
                    for a fuller regional trip. See our full{" "}
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
                {[
                  "Shilloi Lake",
                  "Phek District",
                  "Nagaland",
                  "Myanmar Border",
                  "Off-beat",
                  "Chakhesang Naga",
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

              <RelatedPostsGrid currentSlug="shilloi-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="shilloi-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
