// src/app/blog/daringbadi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Daringbadi Guide: The Kashmir of Odisha",
  description:
    "Complete Daringbadi guide — pine forests, coffee plantations, winter frost, Dosingh Waterfall, Kondh tribal culture, how to reach from Bhubaneswar, and a full visit plan.",
  keywords:
    "Daringbadi travel guide, Kashmir of Odisha, Kandhamal district, Daringbadi coffee plantation, Dosingh Waterfall, Belghar, Kondh tribe, how to reach Daringbadi, Odisha hill station",
  openGraph: {
    title: "Daringbadi Guide: The Kashmir of Odisha",
    description:
      "Pine forests, coffee plantations, and winter frost in a state better known for its coastline — the complete guide to Daringbadi.",
    url: "https://club.kudozz.in/blog/daringbadi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/solang-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Green pine-forested valley, evoking Daringbadi's cool hill-station landscape in Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Daringbadi Guide: The Kashmir of Odisha",
    description:
      "Pine forests, coffee plantations, and a rare winter frost — the complete guide to Odisha's most unexpected hill station.",
    images: ["/images/destinations/manali/solang-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/daringbadi-travel-guide",
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
          headline: "Daringbadi Guide: The Kashmir of Odisha",
          description:
            "Complete Daringbadi guide — pine forests, coffee plantations, winter frost, Dosingh Waterfall, Kondh tribal culture, how to reach from Bhubaneswar, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/solang-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/daringbadi-travel-guide",
          },
          keywords:
            "Daringbadi, Odisha, Kandhamal, hill station, coffee plantation, Kondh tribe",
          about: {
            "@type": "Place",
            name: "Daringbadi",
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
                name: "Daringbadi",
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
    q: "Why is Daringbadi called the 'Kashmir of Odisha'?",
    a: "The nickname comes from its unusually cool climate, pine forests, and hill-station character — a striking contrast to the rest of Odisha, which is largely tropical and coastal. Winters here can bring light frost, a genuine rarity anywhere in the state.",
  },
  {
    q: "How far is Daringbadi from Bhubaneswar?",
    a: "It's a fairly long drive given Daringbadi's interior location in Kandhamal district — plan for the better part of a day on the road, and set expectations accordingly rather than treating it as a quick day trip.",
  },
  {
    q: "What is the best time to visit Daringbadi for the cool climate?",
    a: "November to February is the clear pick — this is when the hill-station character is most distinctive, with the coolest temperatures and occasional near-frost conditions. The immediate post-monsoon period is also pleasant.",
  },
  {
    q: "Does Daringbadi really get frost?",
    a: "Yes, in winter (typically December-January) parts of Daringbadi can see light frost or near-frost conditions — a genuine curiosity given how far south the region sits, and one of the reasons for its 'Kashmir of Odisha' reputation.",
  },
  {
    q: "Is coffee actually grown in Daringbadi?",
    a: "Yes — Daringbadi has coffee plantations, an unusual feature for Odisha and part of what gives the area its distinctive character compared to the rest of the state.",
  },
  {
    q: "Is Daringbadi well set up for tourists?",
    a: "Not in the way Odisha's bigger tourist towns are. Accommodation is limited and mostly modest, and infrastructure is genuinely offbeat rather than polished — this is part of the appeal for travelers wanting something different, but expectations should be set realistically.",
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
  { id: "introduction", title: "Odisha's Unlikely Hill Station", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Daringbadi", level: 2 },
  { id: "things-to-do", title: "Pine Forests, Waterfalls & Tribal Life", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DaringbadiGuidePage() {
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
              alt="Green pine-forested valley, evoking Daringbadi's cool hill-station landscape in Odisha"
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
                { label: "Daringbadi", href: null },
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
                "Daringbadi",
                "Kandhamal",
                "Hill Station",
                "Odisha",
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
              Daringbadi: The Kashmir of Odisha, Pines & Coffee
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Pine forests, coffee plantations, and a winter chill sharp
              enough for frost — in a state almost entirely defined by its
              coastline and temples.
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
                  text: "Kandhamal district, Odisha",
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
                  <h2>Odisha's Unlikely Hill Station</h2>
                  <p>
                    <strong>Daringbadi</strong>, tucked into{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha
                    </Link>
                    's Kandhamal district, has earned the nickname "Kashmir
                    of Odisha" for reasons that feel almost implausible in a
                    state otherwise defined by its coastline and temple
                    towns — pine forests, a genuinely cool climate, and
                    coffee plantations spreading across the hillsides.
                  </p>
                  <p>
                    In winter, parts of Daringbadi can see light frost or
                    near-frost conditions, a rarity anywhere in Odisha and
                    the detail that cements its reputation as the state's
                    coolest corner. Waterfalls at Dosingh and Belghar add
                    forested, off-the-beaten-path stops, and the surrounding
                    hills are home to the Kondh tribal community.
                  </p>
                  <p>
                    This remains a genuinely offbeat destination — plan with
                    realistic expectations about infrastructure, and come
                    for the contrast with the rest of Odisha rather than a
                    polished hill-station experience.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Daringbadi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Kandhamal district, Odisha",
                        },
                        {
                          icon: "🚗",
                          label: "From Bhubaneswar",
                          value: "Long interior drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🌲",
                          label: "Known For",
                          value: "Pines, Coffee, Cool Climate",
                        },
                        {
                          icon: "❄️",
                          label: "Winter",
                          value: "Occasional frost",
                        },
                        {
                          icon: "🎯",
                          label: "Vibe",
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
                  <h2>Best Time to Visit Daringbadi</h2>
                  <p>
                    Timing here is really about chasing the cool climate
                    that makes Daringbadi worth the journey in the first
                    place.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "❄️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The coolest, most distinctive window, with occasional near-frost conditions — the whole reason to make the trip.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pleasant, post-monsoon",
                        text: "Greener hills and comfortable temperatures shortly after the rains ease off.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌱",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Warmer, still cooler than the plains",
                        text: "Noticeably warmer than winter, but the altitude keeps it more comfortable than lowland Odisha.",
                      },
                      {
                        season: "Jun – Aug",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — lush but difficult",
                        text: "Heavy rain makes the interior roads and forest trails harder going, though the hills turn vividly green.",
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
                    <strong>Our pick:</strong> November to February — the
                    coolest window, and the best chance of seeing why
                    Daringbadi earned its "Kashmir of Odisha" nickname.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Daringbadi</h2>
                  <p>
                    Daringbadi sits well inland in Kandhamal district, so
                    reaching it takes real commitment — this isn't a quick
                    detour from Odisha's coastal circuit.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Bhubaneswar:</strong> A fairly
                      long drive given the interior, hilly route — budget
                      the better part of a day rather than treating it as a
                      short trip.
                    </li>
                    <li>
                      <strong>Via Berhampur or Phulbani:</strong> Alternative
                      approach routes depending on where you're coming from
                      in Odisha, both involving winding hill roads.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Set honest expectations about
                    travel time — Daringbadi rewards a proper 2-day trip,
                    not a rushed day excursion tacked onto a Bhubaneswar
                    itinerary.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Pine Forests, Waterfalls & Tribal Life</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Pine forest hillside in Daringbadi, Kandhamal district, Odisha"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Pine Forests & Coffee Plantations</h3>
                  <p>
                    The pine-covered hillsides are the visual heart of
                    Daringbadi's "Kashmir of Odisha" reputation, and walks
                    through the coffee plantations offer a genuinely
                    unexpected sight for the state.
                  </p>
                  <h3>Dosingh Waterfall & Belghar</h3>
                  <p>
                    Both are forested, off-the-beaten-path stops worth a
                    half-day excursion each — quiet, largely undeveloped
                    spots rather than polished tourist attractions.
                  </p>
                  <h3>Kondh Tribal Communities</h3>
                  <p>
                    The surrounding hills are home to the Kondh tribal
                    community, adding a genuine cultural dimension to a
                    Daringbadi visit — approach any village or market visits
                    respectfully and, ideally, with a local guide.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Daringbadi</h2>
                  <p>
                    Accommodation is limited but growing, and mostly modest —
                    this is not a destination with luxury resorts, and
                    setting that expectation upfront matters.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Odisha Tourism guesthouses",
                          "Basic local lodges",
                          "Homestays where available",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Small forest-view resorts",
                          "Private guesthouses",
                          "Coffee-estate stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹4,000+/night",
                        picks: [
                          "Very limited premium options",
                          "Occasional boutique cottages",
                          "Book ahead given scarcity",
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
                        title: "Arrival & Pine Forests",
                        color: "bg-amber-700",
                        activities: [
                          "Long drive in from Bhubaneswar or Berhampur",
                          "Walk through the pine forests and coffee plantations",
                          "Evening at leisure, enjoying the cool air",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Waterfalls & Local Culture",
                        color: "bg-sky-600",
                        activities: [
                          "Morning excursion to Dosingh Waterfall",
                          "Visit Belghar if time allows",
                          "Learn about Kondh tribal life before departure",
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
                  <h2>Where to Eat in Daringbadi</h2>
                  <ul>
                    <li>
                      <strong>Guesthouse kitchens:</strong> Most
                      accommodation serves simple, home-style Odia meals to
                      guests — often the most reliable option given the
                      limited standalone dining scene.
                    </li>
                    <li>
                      <strong>Local coffee:</strong> Given the area's own
                      plantations, a fresh cup of locally grown coffee is
                      worth seeking out.
                    </li>
                    <li>
                      <strong>Basic local eateries:</strong> A handful of
                      small dhabas in town cover simple meals between
                      sightseeing stops.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹4,500"],
                          ["Car hire (round trip, per group)", "₹5,000", "₹7,000", "₹10,000"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Local sightseeing", "₹200", "₹400", "₹800"],
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
                  <h2>Essential Tips for Visiting Daringbadi</h2>
                  <ul>
                    <li>
                      <strong>Set realistic infrastructure expectations:</strong>{" "}
                      This is a genuinely offbeat destination, not a
                      polished hill station — accommodation and dining are
                      modest.
                    </li>
                    <li>
                      <strong>Time it for winter if the climate is the draw:</strong>{" "}
                      November-February brings the coolest weather and the
                      best chance of frost.
                    </li>
                    <li>
                      <strong>Budget real travel time:</strong> The interior
                      location means a long drive from Bhubaneswar — don't
                      underestimate it.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM and card access is
                      limited outside the main town area.
                    </li>
                    <li>
                      <strong>Combine with wider Kandhamal exploration:</strong>{" "}
                      If time allows, extend the trip into the surrounding
                      district rather than treating Daringbadi as an
                      isolated stop.
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
                          "Visit Nov-Feb for the coolest, most distinctive weather",
                          "Try locally grown coffee",
                          "Budget a full 2 days rather than rushing",
                          "Carry enough cash for the whole stay",
                          "Visit Dosingh Waterfall and Belghar",
                          "Approach tribal villages respectfully",
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
                          "Expect Ooty- or Munnar-level tourist infrastructure",
                          "Underestimate the drive time from Bhubaneswar",
                          "Rely on cards outside the main town",
                          "Visit expecting guaranteed snow — it's frost, not snowfall",
                          "Photograph villagers without asking first",
                          "Rush the trip into a single day",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Daringbadi
                    with wider Kandhamal-district exploration, or return to
                    Odisha's coastal circuit via{" "}
                    <Link href="/blog/bhubaneswar-travel-guide">
                      Bhubaneswar
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/chilika-lake-travel-guide">
                      Chilika Lake
                    </Link>
                    . See our full{" "}
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
                  "Daringbadi",
                  "Kandhamal District",
                  "Odisha",
                  "Hill Station",
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

              <RelatedPostsGrid currentSlug="daringbadi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="daringbadi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
