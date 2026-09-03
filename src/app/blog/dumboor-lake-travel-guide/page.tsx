// src/app/blog/dumboor-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dumboor Lake Travel Guide: Islands, Boating & Tips",
  description:
    "Complete Dumboor Lake guide — the Gumti Hydel reservoir's scattered islands, boating, the Tirthamukh pilgrimage point, how to reach from Agartala, and a full visit plan.",
  keywords:
    "Dumboor Lake travel guide, Dumboor Lake Tripura, Gumti Hydel Project, Tirthamukh, Gandacherra, Dhalai district, Dumboor Lake islands, Dumboor Lake boating, how to reach Dumboor Lake, Tripura off-beat destinations",
  openGraph: {
    title: "Dumboor Lake Travel Guide: Islands, Boating & Tips",
    description:
      "A hydel reservoir scattered with roughly 50 small islands, a sacred river confluence, and one of Tripura's quietest off-beat escapes — the complete Dumboor Lake guide.",
    url: "https://club.kudozz.in/blog/dumboor-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Calm lake water framed by hills, evoking Dumboor Lake's scattered islands in Dhalai district, Tripura",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dumboor Lake Travel Guide: Islands, Boating & Tips",
    description:
      "Roughly 50 small islands scattered across a hydel reservoir, and a sacred river confluence nearby — the complete Dumboor Lake guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dumboor-lake-travel-guide",
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
          headline: "Dumboor Lake Travel Guide: Islands, Boating & Tips",
          description:
            "Complete Dumboor Lake guide — the Gumti Hydel reservoir's scattered islands, boating, the Tirthamukh pilgrimage point, how to reach from Agartala, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/dumboor-lake-travel-guide",
          },
          keywords:
            "Dumboor Lake, Tripura, Gumti Hydel Project, Tirthamukh, Dhalai district, boating, off-beat",
          about: {
            "@type": "Place",
            name: "Dumboor Lake",
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
                name: "Dumboor Lake",
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
    q: "How far is Dumboor Lake from Agartala?",
    a: "Roughly 120 km, travelled via Udaipur and Amarpur — mostly by road, with a local boat transfer needed to properly get out onto the lake and among its islands. It's a full day's journey each way, so plan accordingly.",
  },
  {
    q: "Can Dumboor Lake be visited as a day trip from Agartala?",
    a: "It's possible but tiring given the roughly 120 km distance each way and the extra time needed for the boat ride itself. An overnight stay nearby, or a base in Udaipur or Amarpur, makes for a far more relaxed visit — especially if you want to catch the lake at sunrise or sunset.",
  },
  {
    q: "What is Tirthamukh?",
    a: "Tirthamukh is a point near Dumboor Lake believed to be where the Gomati river originates. It's a significant pilgrimage spot, and a large fair — the Maharani Tirtha Mela, also known locally as the Ganga Puja mela — is held here annually around Makar Sankranti in mid-January, drawing large crowds for a ritual dip.",
  },
  {
    q: "What is the best time to visit Dumboor Lake?",
    a: "October to February, for pleasant weather and calmer water that makes boating among the islands more comfortable. Mid-January specifically brings the Tirtha Mela atmosphere at nearby Tirthamukh, though the crowds then are considerably heavier than any other time of year.",
  },
  {
    q: "Is boating always available at Dumboor Lake?",
    a: "Boating is generally available through local operators near the lake, but given how few visitors come this far into Dhalai district, it's worth confirming availability in advance or on arrival in Amarpur or Gandacherra rather than assuming a boat will be ready and waiting.",
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
  { id: "introduction", title: "A Reservoir of Scattered Islands", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Dumboor Lake", level: 2 },
  { id: "things-to-do", title: "Boating, Tirthamukh & Nearby Sights", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DumboorLakeGuidePage() {
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
              alt="Calm lake water framed by hills, evoking Dumboor Lake's scattered islands in Dhalai district, Tripura"
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
                { label: "Dumboor Lake", href: null },
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
              {["Dumboor Lake", "Dhalai District", "Tripura", "Off-beat"].map(
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
              Dumboor Lake: Islands, Boating & Weekend Getaway Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A hydel reservoir scattered with roughly fifty small islands,
              a sacred river confluence nearby, and one of Tripura's
              quietest off-beat escapes.
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
                  text: "Dhalai district, Tripura",
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
                  <h2>A Reservoir of Scattered Islands</h2>
                  <p>
                    <strong>Dumboor Lake</strong> is a large man-made
                    reservoir in the Gandacherra subdivision of Dhalai
                    district, formed by the Gumti Hydel Project's dam on the
                    Gumti river. Deep in{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura
                    </Link>
                    's interior, it's one of the state's most distinctive
                    landscapes — a wide sheet of water dotted with roughly
                    fifty small islands, giving it a scattered, almost
                    archipelago-like look that's best appreciated from a
                    boat rather than the shore. Locally, the name "Dumboor"
                    is said to relate to the shape of a small drum.
                  </p>
                  <p>
                    A short distance away lies{" "}
                    <strong>Tirthamukh</strong>, believed to be the point
                    where the Gomati river originates — a significant
                    pilgrimage spot that draws large crowds each January for
                    a riverside fair. Between the islands, the pilgrimage
                    point, and the general sense of remoteness, Dumboor Lake
                    rewards travellers looking for something genuinely
                    off the main Tripura circuit.
                  </p>
                  <p>
                    This is not a polished tourist destination — expect
                    thin infrastructure and a slower pace than anywhere
                    else covered in our{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
                    </Link>
                    , and plan the logistics with some flexibility.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Dumboor Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Gandacherra, Dhalai district",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~120 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏝️",
                          label: "Known For",
                          value: "~50 Scattered Islands",
                        },
                        {
                          icon: "🛶",
                          label: "Main Activity",
                          value: "Boating",
                        },
                        {
                          icon: "🎉",
                          label: "Big Event",
                          value: "Tirtha Mela (mid-Jan)",
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
                  <h2>Best Time to Visit Dumboor Lake</h2>
                  <p>
                    Water levels, weather, and one major annual fair all
                    shape when to plan a visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant weather and calmer water make boating among the islands genuinely enjoyable, with clearer skies for photography at sunrise and sunset.",
                      },
                      {
                        season: "Mid-Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Tirtha Mela at Tirthamukh",
                        text: "The Maharani Tirtha Mela around Makar Sankranti brings large pilgrim crowds to Tirthamukh — vibrant but considerably busier than any other window.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, rising humidity",
                        text: "Temperatures climb steadily; still manageable with an early start, but comfort drops off compared to winter.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "Rainfall is substantial in this remote part of Dhalai district, and boating and road access can both become unreliable.",
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
                    <strong>Our pick:</strong> November to February for the
                    calmest water and clearest views — or mid-January
                    specifically if you want to experience the Tirtha Mela's
                    festival energy at Tirthamukh, accepting the crowds
                    that come with it.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Dumboor Lake</h2>
                  <p>
                    Dumboor Lake sits deep in Dhalai district, so reaching it
                    properly means a road journey followed by a local boat
                    transfer.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Agartala:</strong> Roughly 120 km,
                      travelling via{" "}
                      <Link href="/blog/udaipur-tripura-travel-guide">
                        Udaipur
                      </Link>{" "}
                      and Amarpur — a long day's drive best done with a
                      private vehicle given how thin public transport gets
                      this far out.
                    </li>
                    <li>
                      <strong>Local boat transfer:</strong> The road gets you
                      to the lakeside, but properly seeing the islands and
                      reaching Tirthamukh requires arranging a boat with a
                      local operator once you arrive.
                    </li>
                    <li>
                      <strong>Via Amarpur or Gandacherra:</strong> Both towns
                      function as practical staging points for arranging
                      transport and boats onward to the lake itself.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given the distance and the
                    extra time a boat ride adds, an overnight stay near the
                    lake makes far more sense than attempting a same-day
                    round trip from Agartala.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Boating, Tirthamukh & Nearby Sights</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Reservoir dotted with small islands at Dumboor Lake, Dhalai district"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Boating Among the Islands</h3>
                  <p>
                    Boating is the defining Dumboor Lake experience —
                    weaving between the roughly fifty small islands that
                    give the reservoir its distinctive scattered look, with
                    forested hills as a backdrop on most sides.
                  </p>
                  <h3>Tirthamukh</h3>
                  <p>
                    Believed to be where the Gomati river originates,
                    Tirthamukh is a significant pilgrimage point near the
                    lake. The annual Maharani Tirtha Mela, held around Makar
                    Sankranti in mid-January, draws large crowds for a
                    ritual dip — a striking sight if your visit lines up
                    with it, though expect considerable crowding.
                  </p>
                  <h3>Birdwatching & Photography</h3>
                  <p>
                    The lake's stillness and scattered islands make it a
                    quietly rewarding spot for birdwatching and photography,
                    particularly around sunrise and sunset when the light
                    over the water is at its best.
                  </p>
                  <h3>Rakha Tirtha Waterfall</h3>
                  <p>
                    A waterfall near the lake, sometimes combined with a
                    Dumboor Lake visit for travellers with extra time —
                    worth asking locally about current access and
                    conditions before planning around it.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Dumboor Lake</h2>
                  <p>
                    Accommodation here is genuinely limited — this is one of
                    Tripura's least-developed tourist areas, and most
                    visitors either day-trip in from Amarpur or Udaipur, or
                    stay in a forest/tourist lodge near the lake if one can
                    be booked in advance.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Forest department rest house (if bookable)",
                          "Basic lodges in Amarpur or Gandacherra",
                          "Simple guesthouses, Udaipur town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹2,500/night",
                        picks: [
                          "Tourist lodge, if available near the lake",
                          "Better guesthouses in Udaipur",
                          "Private rooms in Amarpur",
                        ],
                      },
                      {
                        tier: "Practical Option",
                        icon: "🚗",
                        range: "Day trip",
                        picks: [
                          "Base in Agartala, day-trip out",
                          "Base in Udaipur, closer half-way point",
                          "Return same evening if roads allow",
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
                    Book any lakeside lodge well ahead — rooms are few, and
                    turning up without a plan risks having to backtrack to
                    Amarpur or Udaipur for the night.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Agartala to Dumboor Lake",
                        color: "bg-amber-700",
                        activities: [
                          "Drive via Udaipur and Amarpur",
                          "Arrive by afternoon, check in nearby",
                          "Evening boat ride for sunset over the islands",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tirthamukh & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Sunrise on the lake",
                          "Visit Tirthamukh (and Rakha Tirtha, if time allows)",
                          "Drive back to Agartala",
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
                    * With less time, a very long single-day trip from
                    Agartala is possible but tiring — the overnight version
                    above is far more comfortable.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Dumboor Lake</h2>
                  <ul>
                    <li>
                      <strong>Lodge kitchens:</strong> Wherever you stay,
                      simple home-style Bengali and Tripuri meals are
                      typically the only option this deep into Dhalai
                      district.
                    </li>
                    <li>
                      <strong>Stalls at Tirthamukh:</strong> During the
                      Tirtha Mela, temporary food stalls appear around the
                      fair grounds — otherwise expect very little in the way
                      of standalone eateries.
                    </li>
                    <li>
                      <strong>Amarpur or Udaipur town:</strong> Both offer a
                      wider spread of proper restaurants if you're passing
                      through on the way in or out.
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
                            "₹5,500",
                            "₹8,000",
                            "₹12,000",
                          ],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Boat hire (per session)", "₹300", "₹600", "₹1,200"],
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
                    round trip figure best split across a group). Luxury-tier
                    accommodation isn't really available at the lake itself.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Dumboor Lake</h2>
                  <ul>
                    <li>
                      <strong>Arrange boating ahead where possible:</strong>{" "}
                      Given how few visitors reach this far into Dhalai
                      district, confirm boat availability with a local
                      operator before you arrive rather than assuming one
                      will be ready.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs and card acceptance
                      are essentially nonexistent this far from Agartala —
                      withdraw what you need in Udaipur or Amarpur.
                    </li>
                    <li>
                      <strong>Start early if day-tripping:</strong> The
                      round-trip distance plus the boat ride makes for a
                      long day — an early departure from Agartala is
                      essential if you're not staying overnight.
                    </li>
                    <li>
                      <strong>Pack mosquito repellent:</strong> The lakeside
                      and forested surroundings make evening mosquito
                      presence a real factor.
                    </li>
                    <li>
                      <strong>Expect very heavy crowds during the Tirtha
                      Mela:</strong> If visiting in mid-January, plan for
                      congestion around Tirthamukh and book any
                      accommodation well in advance.
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
                          "Confirm boat availability before arriving",
                          "Plan an overnight stay if possible",
                          "Carry enough cash for the whole trip",
                          "Time a visit for sunrise or sunset light",
                          "Pack mosquito repellent for the evenings",
                          "Ask locally about Rakha Tirtha access",
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
                          "Rely on cards or ATMs near the lake",
                          "Expect a fixed boat schedule without checking",
                          "Rush a same-day round trip if avoidable",
                          "Expect much of a restaurant scene lakeside",
                          "Travel here without a private vehicle",
                          "Underestimate mid-January Tirtha Mela crowds",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Dumboor Lake
                    with the rock-cut river carvings at{" "}
                    <Link href="/blog/chabimura-travel-guide">
                      Chabimura
                    </Link>{" "}
                    and the lakes and temple of{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur
                    </Link>{" "}
                    for a fuller South and Dhalai district loop. See our
                    full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
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
                  "Dumboor Lake",
                  "Dhalai District",
                  "Tripura",
                  "Off-beat",
                  "Tirthamukh",
                  "Boating",
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

              <RelatedPostsGrid currentSlug="dumboor-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dumboor-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
