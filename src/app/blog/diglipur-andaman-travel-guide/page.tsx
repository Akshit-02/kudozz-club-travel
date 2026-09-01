// src/app/blog/diglipur-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Diglipur Travel Guide: Saddle Peak, Kalipur & North Andaman",
  description:
    "Complete Diglipur guide — gateway to Saddle Peak, the highest point in the Andamans, plus Kalipur turtle beach, Ross & Smith Islands, and the Alfred Caves. How to reach, best time, budget and tips for North Andaman.",
  keywords:
    "Diglipur travel guide, Diglipur North Andaman, Saddle Peak trek, Saddle Peak National Park, Kalipur Beach, Ross and Smith Islands, Alfred Caves Andaman, how to reach Diglipur, Diglipur to Port Blair distance",
  openGraph: {
    title: "Diglipur Travel Guide: Saddle Peak, Kalipur & North Andaman",
    description:
      "The farthest major town from Port Blair, and the gateway to the highest point in the Andamans, a turtle-nesting beach, and a twin-island sandbar most tourists never reach.",
    url: "https://club.kudozz.in/blog/diglipur-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "North Andaman coastline near Diglipur",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Diglipur Travel Guide: Saddle Peak, Kalipur & North Andaman",
    description:
      "Saddle Peak, Kalipur turtle beach, and Ross & Smith Islands — the complete guide to North Andaman's quietest base.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/diglipur-andaman-travel-guide",
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
          headline: "Diglipur Travel Guide: Saddle Peak, Kalipur & North Andaman",
          description:
            "Complete Diglipur guide — gateway to Saddle Peak, the highest point in the Andamans, plus Kalipur turtle beach, Ross & Smith Islands, and the Alfred Caves.",
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
            "@id": "https://club.kudozz.in/blog/diglipur-andaman-travel-guide",
          },
          keywords:
            "Diglipur, Saddle Peak, Kalipur Beach, Ross and Smith Islands, North Andaman, Alfred Caves",
          about: {
            "@type": "Place",
            name: "Diglipur",
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
                name: "Diglipur",
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
    q: "How far is Diglipur from Port Blair, and how do I get there?",
    a: "Diglipur is roughly 290 km from Port Blair — the farthest major town in the islands — and typically takes 8-12 hours by a combination of road and a ferry crossing over Middle Strait, or less by connecting bus/ferry services. Where available, a shorter flight or helicopter option can cut this down considerably; check current schedules, as these services can be limited.",
  },
  {
    q: "Is Diglipur worth the long journey from Port Blair?",
    a: "If you have the extra 2-3 days, yes — Diglipur is the base for Saddle Peak, the highest point in the Andaman & Nicobar Islands, plus Kalipur's turtle-nesting beach and the Ross & Smith Islands sandbar, none of which you can reach from Havelock or Neil. If your trip is short, though, it's reasonable to skip it in favour of the more accessible southern islands.",
  },
  {
    q: "How difficult is the Saddle Peak trek?",
    a: "It's a genuine forest trek rather than a casual walk — figure on several hours up and back through Saddle Peak National Park, with a moderate level of fitness needed. A local guide is recommended and, depending on current forest department rules, may be required.",
  },
  {
    q: "When is the best time to see turtles nesting at Kalipur?",
    a: "Roughly November to February is the main nesting season at Kalipur Beach, when several species of sea turtles come ashore at night to lay eggs. Visiting during the day outside this window still gives you a quiet, scenic beach, just without the nesting activity.",
  },
  {
    q: "Can I visit Ross & Smith Islands from Diglipur in a day?",
    a: "Yes — Ross & Smith Islands are a short boat ride from Diglipur and are commonly done as a half-day or full-day trip, weather and sea conditions permitting. Boats generally leave in the morning, so it's worth arranging this the evening before through your accommodation.",
  },
  {
    q: "Should I stay overnight in Diglipur, or visit as a day trip?",
    a: "Given the distance from Port Blair, Diglipur only really makes sense as a multi-day stay of 2-3 nights, ideally combined with stops in Rangat and Mayabunder on the way up or back, rather than attempted as a single long day trip.",
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
  { id: "introduction", title: "North Andaman's Quiet Base", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Diglipur", level: 2 },
  { id: "saddle-peak", title: "Saddle Peak National Park", level: 2 },
  { id: "kalipur", title: "Kalipur Beach & Turtle Nesting", level: 2 },
  { id: "day-trips", title: "Day Trips from Diglipur", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DiglipurGuidePage() {
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
              alt="North Andaman coastline near Diglipur"
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
                { label: "Diglipur", href: null },
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
                "Diglipur",
                "Saddle Peak",
                "Kalipur",
                "North Andaman",
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
              Diglipur: Saddle Peak, Kalipur & North Andaman Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The farthest major town from Port Blair, and the gateway to the
              Andamans' highest peak, a turtle-nesting beach, and a
              twin-island sandbar most visitors never make it far enough
              north to see.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "North Andaman",
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
                  <h2>North Andaman's Quiet Base</h2>
                  <p>
                    <strong>Diglipur</strong> is a town in North Andaman and
                    the farthest major settlement from{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>{" "}
                    — roughly 290 km away by a combination of road and ferry.
                    That distance is exactly why so few visitors make it
                    here, and exactly why the things around Diglipur feel
                    different from the well-trodden{" "}
                    <Link href="/blog/havelock-island-andaman-travel-guide">
                      Havelock
                    </Link>
                    -
                    <Link href="/blog/neil-island-andaman-travel-guide">
                      Neil
                    </Link>{" "}
                    circuit further south.
                  </p>
                  <p>
                    This is the gateway to Saddle Peak, the highest point in
                    the entire Andaman & Nicobar archipelago, reachable by a
                    genuine forest trek. It's also close to Kalipur Beach,
                    known for its sea turtle nesting season, and to Ross &
                    Smith Islands — twin islands connected by a natural
                    sandbar that most Andaman itineraries never reach.
                  </p>
                  <p>
                    None of this is a quick add-on. Given the travel time
                    involved, Diglipur works best as a dedicated 2-3 day
                    extension for travellers who have already covered the
                    southern islands and want to see North Andaman's wilder,
                    far quieter side.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Diglipur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "North Andaman",
                        },
                        {
                          icon: "🚗",
                          label: "From Port Blair",
                          value: "~290 km, 8-12 hrs",
                        },
                        {
                          icon: "⛰️",
                          label: "Known For",
                          value: "Saddle Peak — highest point in Andamans",
                        },
                        {
                          icon: "🐢",
                          label: "Turtle Season",
                          value: "~Nov – Feb at Kalipur",
                        },
                        {
                          icon: "🏝️",
                          label: "Nearby",
                          value: "Ross & Smith Islands",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Nov – Feb",
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
                  <h2>Best Time to Visit Diglipur</h2>
                  <p>
                    Between the trek, the beach, and the boat trips, weather
                    plays a bigger role in a Diglipur trip than almost
                    anywhere else in the Andamans.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions for the Saddle Peak trek, calm seas for the Ross & Smith Islands boat trip, and turtle nesting season at Kalipur.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, still workable",
                        text: "Warmer and more humid for the trek, but boat trips and beach time remain comfortable, especially in the morning.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain can close the Saddle Peak trail and cancel boat trips to Ross & Smith Islands with little notice — a difficult window for this trip.",
                      },
                      {
                        season: "Oct",
                        emoji: "🍃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transitional",
                        text: "Rains easing off, forest still lush — a reasonable shoulder-season option if your dates don't allow for peak winter.",
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
                    <strong>Our pick:</strong> November to February —
                    comfortable trekking weather, calm seas for island
                    hopping, and the best chance of seeing turtle activity at
                    Kalipur.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Diglipur</h2>
                  <p>
                    Reaching Diglipur is a genuine journey rather than a
                    short transfer, and it's worth planning around rather
                    than underestimating.
                  </p>
                  <ul>
                    <li>
                      <strong>By Road + Ferry:</strong> The standard route —
                      roughly 290 km from{" "}
                      <Link href="/blog/port-blair-andaman-travel-guide">
                        Port Blair
                      </Link>{" "}
                      via the Andaman Trunk Road, including a ferry crossing,
                      typically taking 8-12 hours.
                    </li>
                    <li>
                      <strong>Via Rangat & Mayabunder:</strong> Most
                      travellers break the journey with stops in{" "}
                      <Link href="/blog/rangat-andaman-travel-guide">
                        Rangat
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/mayabunder-andaman-travel-guide">
                        Mayabunder
                      </Link>{" "}
                      rather than attempting it in one push.
                    </li>
                    <li>
                      <strong>By Air/Helicopter:</strong> Where scheduled,
                      flights or helicopter services can significantly cut
                      travel time — check current availability, as these
                      services can be limited or seasonal.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Break the journey overnight
                    in Rangat or Mayabunder rather than travelling all the way
                    from Port Blair in one day — it turns an exhausting
                    transfer into part of the trip itself.
                  </div>
                </section>

                {/* ── Saddle Peak ────────────────────────────────────────── */}
                <section id="saddle-peak">
                  <h2>Saddle Peak National Park</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Forested hills near Saddle Peak National Park, North Andaman"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    At roughly 730 metres, <strong>Saddle Peak</strong> is the
                    highest point in the entire Andaman & Nicobar Islands,
                    sitting inside Saddle Peak National Park just outside
                    Diglipur. Reaching the summit means a genuine forest
                    trek of several hours up and back, through dense
                    tropical forest that thins out toward the top to reveal
                    sweeping views over North Andaman's coastline.
                  </p>
                  <p>
                    This isn't a casual stroll — a reasonable level of
                    fitness helps, and a local guide is strongly recommended
                    (and, depending on current forest department rules, may
                    be required). Start early to avoid the worst of the
                    midday heat and to leave enough daylight for the descent.
                  </p>
                </section>

                {/* ── Kalipur ────────────────────────────────────────────── */}
                <section id="kalipur">
                  <h2>Kalipur Beach & Turtle Nesting</h2>
                  <p>
                    A short distance from Diglipur, <strong>
                    <Link href="/blog/kalipur-andaman-travel-guide">
                      Kalipur Beach
                    </Link>
                    </strong>{" "}
                    is best known for its sea turtle nesting season, roughly
                    November to February, when several turtle species come
                    ashore at night to lay eggs. Outside that window, it's
                    simply a quiet, uncrowded beach — a peaceful contrast to
                    Diglipur's other big draw, the Saddle Peak trek, and a
                    good base for both.
                  </p>
                </section>

                {/* ── Day Trips ─────────────────────────────────────────── */}
                <section id="day-trips">
                  <h2>Day Trips from Diglipur</h2>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/ross-and-smith-islands-andaman-travel-guide">
                          Ross & Smith Islands:
                        </Link>
                      </strong>{" "}
                      Twin islands connected by a natural sandbar, a short
                      boat ride from Diglipur — one of the most striking and
                      least crowded sights in the entire archipelago.
                    </li>
                    <li>
                      <strong>Alfred Caves:</strong> A limestone cave system
                      near Diglipur, a quieter and less-visited alternative
                      to the caves at{" "}
                      <Link href="/blog/baratang-andaman-travel-guide">
                        Baratang
                      </Link>{" "}
                      further south.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <p>
                    Given the travel time to get here, Diglipur rewards
                    staying a few days rather than rushing through.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Kalipur Beach",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive in Diglipur, settle into accommodation",
                          "Evening walk at Kalipur Beach",
                          "Ask locally about turtle nesting activity, if in season",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Saddle Peak Trek",
                        color: "bg-forest-600",
                        activities: [
                          "Early start for the Saddle Peak trail",
                          "Full trek to the summit and back with a guide",
                          "Rest in the evening after a long trekking day",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Ross & Smith Islands",
                        color: "bg-sky-600",
                        activities: [
                          "Morning boat trip to Ross & Smith Islands",
                          "Time at the sandbar and both islands",
                          "Return to Diglipur or begin the journey back south",
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
                  <h2>Where to Eat in Diglipur</h2>
                  <p>
                    Food options are simple and local — this is not a place
                    for a wide restaurant scene, but what's available is
                    fresh and unpretentious.
                  </p>
                  <ul>
                    <li>
                      <strong>Local Bengali/South Indian eateries:</strong>{" "}
                      Basic thalis and fresh seafood, reflecting the mixed
                      settler population of North Andaman.
                    </li>
                    <li>
                      <strong>Guesthouse kitchens:</strong> Many stays offer
                      home-cooked meals on request, often the most reliable
                      option in the evenings.
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
                          [
                            "Accommodation/night",
                            "₹1,000",
                            "₹2,500",
                            "₹5,000",
                          ],
                          ["Transport to Diglipur", "₹500", "₹1,500", "₹4,000"],
                          ["Saddle Peak guide", "₹800", "₹1,200", "₹1,500"],
                          [
                            "Ross & Smith boat trip",
                            "₹1,500",
                            "₹2,000",
                            "₹3,500",
                          ],
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
                    * Figures are per person. Ross & Smith boat trips are
                    often priced per boat and shared among a group, which can
                    lower the per-person cost.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Diglipur</h2>
                  <ul>
                    <li>
                      <strong>Budget real travel time:</strong> Don't
                      underestimate the 8-12 hour journey from Port Blair —
                      break it up rather than rushing.
                    </li>
                    <li>
                      <strong>Book a local guide for Saddle Peak:</strong>{" "}
                      The trek is genuinely demanding, and a guide makes both
                      the route and any current permit requirements simpler.
                    </li>
                    <li>
                      <strong>Check turtle season dates locally:</strong>{" "}
                      Nesting activity at Kalipur varies year to year — ask
                      your guesthouse for current conditions.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs and card payment
                      options are limited this far from Port Blair.
                    </li>
                    <li>
                      <strong>Confirm Ross & Smith boat conditions:</strong>{" "}
                      Trips depend on sea conditions and can be cancelled at
                      short notice — build in a buffer day if possible.
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
                          "Plan at least 2-3 days for Diglipur",
                          "Break the journey via Rangat or Mayabunder",
                          "Hire a local guide for Saddle Peak",
                          "Ask about turtle nesting conditions on arrival",
                          "Carry enough cash for the whole stay",
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
                          "Try to do Diglipur as a single day trip",
                          "Attempt Saddle Peak without a guide or plan",
                          "Assume ATMs will be widely available",
                          "Skip checking sea conditions before boat trips",
                          "Rush straight from Port Blair in one long drive",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Diglipur
                    with stops in{" "}
                    <Link href="/blog/rangat-andaman-travel-guide">
                      Rangat
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/mayabunder-andaman-travel-guide">
                      Mayabunder
                    </Link>{" "}
                    on the way up or back, turning a single long transfer
                    into a proper North Andaman circuit.
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
                  "Diglipur",
                  "Saddle Peak",
                  "Kalipur Beach",
                  "Ross and Smith Islands",
                  "North Andaman",
                  "Trekking",
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

              <RelatedPostsGrid currentSlug="diglipur-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="diglipur-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
