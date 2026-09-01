// src/app/blog/mount-manipur-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mount Manipur (Mount Harriet) Travel Guide: Trek & Views",
  description:
    "Complete Mount Manipur guide — formerly Mount Harriet, the second-highest point in the Andaman & Nicobar Islands. Trekking trails, colonial-era ruins, the summit viewpoint over Ross Island and Port Blair harbour, and how to visit.",
  keywords:
    "Mount Manipur, Mount Harriet, Mount Harriet National Park, Andaman highest peak, Mount Manipur trek, Port Blair viewpoint, Bamboo Flat ferry, second highest point Andaman, Mount Harriet renamed, Andaman trekking trails",
  openGraph: {
    title: "Mount Manipur (Mount Harriet) Travel Guide: Trek & Views",
    description:
      "The second-highest point in the Andamans, across the harbour from Port Blair — colonial-era ruins, forest trails, and panoramic views over Ross Island and North Bay.",
    url: "https://club.kudozz.in/blog/mount-manipur-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Forested hillside overlooking turquoise Andaman waters, evoking the summit views from Mount Manipur",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Manipur (Mount Harriet) Travel Guide: Trek & Views",
    description:
      "Formerly Mount Harriet — the Andamans' second-highest point, with forest trails and views over Port Blair harbour.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mount-manipur-andaman-travel-guide",
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
          headline: "Mount Manipur (Mount Harriet) Travel Guide: Trek & Views",
          description:
            "Complete Mount Manipur guide — formerly Mount Harriet, the second-highest point in the Andaman & Nicobar Islands. Trekking trails, colonial-era ruins, the summit viewpoint over Ross Island and Port Blair harbour, and how to visit.",
          image: "https://club.kudozz.in/images/destinations/andaman/hero.jpg",
          datePublished: "2026-09-01",
          dateModified: "2026-09-01",
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
            "@id": "https://club.kudozz.in/blog/mount-manipur-andaman-travel-guide",
          },
          keywords:
            "Mount Manipur, Mount Harriet, Mount Harriet National Park, Andaman highest peak, Bamboo Flat ferry",
          about: {
            "@type": "Place",
            name: "Mount Manipur",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Andaman and Nicobar Islands",
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
                name: "Andaman Islands",
                item: "https://club.kudozz.in/blog/andaman-islands-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mount Manipur",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ───────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Is Mount Manipur the same as Mount Harriet?",
    a: "Yes — Mount Harriet was officially renamed Mount Manipur by the Government of India in 2018, honouring Manipur's role in India's freedom struggle. Most older maps, signage, and travel references still use \"Mount Harriet,\" so both names are used interchangeably by locals and drivers.",
  },
  {
    q: "How do I reach Mount Manipur from Port Blair?",
    a: "The most common route is a short ferry crossing from Port Blair to Bamboo Flat or Hopetown, followed by a drive up to the summit area. A longer all-road route around the harbour also exists but takes considerably more time.",
  },
  {
    q: "How high is Mount Manipur?",
    a: "Roughly 365 metres, making it the second-highest point in the Andaman & Nicobar Islands after Saddle Peak in North Andaman, near Diglipur.",
  },
  {
    q: "What can I see from the summit?",
    a: "On a clear day, the summit viewpoint offers panoramic views across Port Blair harbour, including Ross Island and North Bay in the distance — one of the better wide-angle views of the South Andaman coastline.",
  },
  {
    q: "Is there a trek at Mount Manipur?",
    a: "Yes — forest trekking trails run through what is protected as Mount Harriet National Park, ranging from short walks to longer routes through fairly dense tropical forest. It's a moderate walk rather than a technical climb.",
  },
  {
    q: "What are the colonial-era ruins at Mount Manipur?",
    a: "The hill served as the summer retreat of the British Chief Commissioner of the Andamans, and some structural ruins from that era remain near the summit — a quieter historical counterpart to the more visited ruins on Ross Island.",
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
  { id: "introduction", title: "The Andamans' Second-Highest Point", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "trek-summit", title: "The Trek & the Summit Viewpoint", level: 2 },
  { id: "colonial-history", title: "A British Summer Retreat", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Facilities", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MountManipurGuidePage() {
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
              src="/images/destinations/andaman/hero.jpg"
              alt="Forested hillside overlooking turquoise Andaman waters, evoking the summit views from Mount Manipur"
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
                { label: "Andaman Islands", href: "/blog/andaman-islands-travel-guide" },
                { label: "Mount Manipur", href: null },
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
                "Mount Manipur",
                "Mount Harriet",
                "Andaman",
                "Trekking",
                "Port Blair",
                "Colonial History",
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
              Mount Manipur: The Andamans' Forgotten Summit
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Formerly Mount Harriet — the second-highest point in the
              Andaman & Nicobar Islands, across the harbour from Port Blair,
              with forest trails, colonial-era ruins, and a summit view over
              Ross Island and North Bay.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Across the harbour from Port Blair",
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
                  <h2>The Andamans' Second-Highest Point</h2>
                  <p>
                    <strong>Mount Manipur</strong> — officially renamed from{" "}
                    <strong>Mount Harriet</strong> in 2018 to honour
                    Manipur's role in India's freedom struggle, particularly
                    through the Indian National Army — rises across the
                    harbour from{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>
                    . Most maps, signage, and long-time residents still refer
                    to it as Mount Harriet, so expect to hear both names used
                    interchangeably.
                  </p>
                  <p>
                    At roughly 365 metres, it's the second-highest point in
                    the Andaman & Nicobar Islands, behind only Saddle Peak
                    near{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur
                    </Link>{" "}
                    in the far north. What makes it worth the trip isn't just
                    the elevation, though — it's the combination of forest
                    trekking, colonial-era history, and a summit view that
                    takes in{" "}
                    <Link href="/blog/ross-island-andaman-travel-guide">
                      Ross Island
                    </Link>
                    , North Bay, and the wider Port Blair harbour in one
                    sweep.
                  </p>
                  <p>
                    It sits well off the main beach-and-diving circuit that
                    dominates most Andaman itineraries, which makes it a good
                    pick for travellers who want a forest-and-history day
                    without leaving the South Andaman area.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Mount Manipur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Across harbour from Port Blair",
                        },
                        {
                          icon: "📐",
                          label: "Elevation",
                          value: "~365 m (2nd highest in Andamans)",
                        },
                        {
                          icon: "🏷️",
                          label: "Formerly",
                          value: "Mount Harriet",
                        },
                        {
                          icon: "🚤",
                          label: "Access",
                          value: "Ferry to Bamboo Flat, then road",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Apr",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "Half-day",
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
                  <h2>Best Time to Visit Mount Manipur</h2>
                  <p>
                    Since most of the appeal is the summit view and a forest
                    trek, dry, clear conditions matter far more here than on
                    a beach day elsewhere in the islands.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry season with clearer visibility for the summit view and more comfortable trekking conditions on the forest trails.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — trails get slippery",
                        text: "Heavier rain makes the forest trails muddy and reduces visibility from the summit, though the forest itself is at its most lush.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌄",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best time of day",
                        text: "Cooler temperatures make the trek more comfortable, and morning haze tends to clear earlier than afternoon humidity allows.",
                      },
                      {
                        season: "Weekdays",
                        emoji: "🧘",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Quietest",
                        text: "Mount Manipur sees a fraction of the footfall of Ross Island or North Bay, and weekdays are quieter still if solitude is the goal.",
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
                    <strong>Our pick:</strong> an early dry-season morning
                    between October and April — the best combination of
                    clear summit views and comfortable trekking weather.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mount Manipur</h2>
                  <p>
                    Mount Manipur sits across Port Blair's harbour, so
                    reaching it involves a short water crossing before the
                    drive up.
                  </p>
                  <ul>
                    <li>
                      <strong>By Ferry + Road:</strong> The standard route —
                      a short government ferry from Port Blair to Bamboo
                      Flat or Hopetown, followed by a drive of roughly 30-40
                      minutes up to the park entrance and summit area.
                    </li>
                    <li>
                      <strong>By Road (Longer Route):</strong> A full
                      road-only route circling the harbour also exists for
                      those who'd rather skip the ferry, but it takes
                      considerably longer.
                    </li>
                    <li>
                      <strong>By Taxi Package:</strong> Many Port Blair
                      taxi/tour operators offer a combined half-day package
                      covering the ferry, the drive, and the return trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Confirm the day's ferry
                    schedule from Port Blair before setting out — crossings
                    to Bamboo Flat run on a fixed timetable rather than
                    continuously through the day.
                  </div>
                </section>

                {/* ── Trek & Summit ──────────────────────────────────────── */}
                <section id="trek-summit">
                  <h2>The Trek & the Summit Viewpoint</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Dense tropical forest canopy over turquoise Andaman coastline, evoking the trekking trails and summit views at Mount Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The hill is protected within what has long been known as
                    Mount Harriet National Park (the park's own signage and
                    official naming may not have been fully updated to match
                    the hill's 2018 rename, so don't be surprised to see
                    "Harriet" still in use on-site). Trails through the park
                    range from short walks near the entrance to longer routes
                    through dense tropical forest, and the walking itself is
                    a moderate, non-technical trek rather than a serious
                    climb.
                  </p>
                  <p>
                    The reward at the top is the <strong>summit
                    viewpoint</strong> — on a clear day, it offers a
                    genuinely wide panorama over Port Blair harbour,
                    including{" "}
                    <Link href="/blog/ross-island-andaman-travel-guide">
                      Ross Island
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/north-bay-island-andaman-travel-guide">
                      North Bay
                    </Link>{" "}
                    in the middle distance. It's one of the better vantage
                    points in the South Andaman area for seeing how the
                    harbour's islands and channels fit together, rather than
                    experiencing them one at a time from sea level.
                  </p>
                </section>

                {/* ── Colonial History ───────────────────────────────────── */}
                <section id="colonial-history">
                  <h2>A British Summer Retreat</h2>
                  <p>
                    During the colonial period, this hill served as the{" "}
                    <strong>summer retreat of the British Chief
                    Commissioner</strong> of the Andamans, who used the
                    elevation to escape the heat and humidity of Port Blair
                    below. Some structural ruins from that era remain near
                    the summit — quieter and far less visited than the
                    similar colonial-era ruins on Ross Island, but worth
                    seeking out if the historical layer interests you as
                    much as the view itself.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half-Day)</h2>
                  <p>
                    Mount Manipur works well as a self-contained half-day
                    trip from Port Blair, ideally started in the morning.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "8:00 – 8:45 AM",
                        title: "Ferry to Bamboo Flat",
                        color: "bg-amber-700",
                        activities: [
                          "Catch the morning ferry from Port Blair",
                          "Short crossing to Bamboo Flat / Hopetown",
                          "Arrange onward transport up the hill",
                        ],
                      },
                      {
                        day: "9:00 – 11:00 AM",
                        title: "Trek & Summit",
                        color: "bg-forest-600",
                        activities: [
                          "Walk the forest trail toward the summit",
                          "Explore the colonial-era ruins along the way",
                          "Take in the harbour panorama from the top",
                        ],
                      },
                      {
                        day: "11:00 AM – 1:00 PM",
                        title: "Return to Port Blair",
                        color: "bg-sky-600",
                        activities: [
                          "Descend and head back to the jetty",
                          "Ferry back to Port Blair",
                          "Free afternoon for other South Andaman sights",
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
                  <h2>Food & Facilities</h2>
                  <p>
                    There's minimal food infrastructure at Mount Manipur
                    itself — carry water and snacks for the trek, and plan to
                    eat properly once you're back in Port Blair, where
                    options are far more plentiful.
                  </p>
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
                          ["Ferry to Bamboo Flat", "₹50", "₹50", "₹50"],
                          [
                            "National Park entry",
                            "₹25",
                            "₹25",
                            "₹25",
                          ],
                          [
                            "Onward transport (return)",
                            "₹300 (shared)",
                            "₹800 (taxi)",
                            "₹1,500 (private, half-day)",
                          ],
                          ["Snacks/water", "₹100", "₹200", "₹400"],
                          ["Total (approx.)", "₹475", "₹1,075", "₹1,975"],
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
                    * Figures are per person, per visit, and exclude travel
                    to Port Blair itself. Entry fees are approximate and
                    subject to change.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mount Manipur</h2>
                  <ul>
                    <li>
                      <strong>Check the ferry timetable first:</strong>{" "}
                      Crossings to Bamboo Flat run on a fixed schedule, not
                      continuously — plan your morning around it.
                    </li>
                    <li>
                      <strong>Wear proper walking shoes:</strong> The forest
                      trails aren't paved, and can be slippery after rain
                      even outside the monsoon months.
                    </li>
                    <li>
                      <strong>Carry water:</strong> There's little to no
                      refreshment infrastructure once you're on the trail.
                    </li>
                    <li>
                      <strong>Go early for the clearest views:</strong>{" "}
                      Morning haze tends to clear before afternoon humidity
                      builds, giving the best odds of a clear harbour
                      panorama.
                    </li>
                    <li>
                      <strong>Expect both names in use:</strong> Don't be
                      thrown if guides, drivers, or signage refer to "Mount
                      Harriet" — it's the same place as Mount Manipur.
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
                          "Check the morning ferry schedule in advance",
                          "Wear sturdy, closed walking shoes",
                          "Carry water for the trek",
                          "Go early for the clearest summit views",
                          "Look out for the colonial-era ruins on the trail",
                          "Combine with other South Andaman sights the same day",
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
                          "Miss the morning ferry crossing time",
                          "Wear flip-flops on the forest trail",
                          "Expect food stalls along the way",
                          "Visit in heavy monsoon rain if a view is the priority",
                          "Rush the trek — it's meant to be unhurried",
                          "Assume the park signage matches the 2018 rename",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Mount
                    Manipur with a boat trip to{" "}
                    <Link href="/blog/ross-island-andaman-travel-guide">
                      Ross Island
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/north-bay-island-andaman-travel-guide">
                      North Bay
                    </Link>{" "}
                    the same day — both are visible from the summit and sit
                    within easy reach of{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>
                    .
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
                  "Mount Manipur",
                  "Mount Harriet",
                  "Andaman",
                  "Trekking",
                  "Port Blair",
                  "Colonial History",
                  "Viewpoint",
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

              <RelatedPostsGrid currentSlug="mount-manipur-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mount-manipur-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
