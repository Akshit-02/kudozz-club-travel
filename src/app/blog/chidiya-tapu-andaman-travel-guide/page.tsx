// src/app/blog/chidiya-tapu-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chidiya Tapu Travel Guide: Sunset Point, Birds & Tips",
  description:
    "Complete Chidiya Tapu guide — South Andaman's Bird Island and best sunset viewpoint. Munda Pahad Beach, the Biological Park, birdwatching trails, timings, and how to plan a half-day trip from Port Blair.",
  keywords:
    "Chidiya Tapu, Chidiya Tapu sunset point, Munda Pahad Beach, Chidiya Tapu Biological Park, Bird Island Andaman, Chidiya Tapu Port Blair distance, best sunset spot Andaman, Chidiya Tapu birdwatching, South Andaman viewpoints, Chidiya Tapu timings",
  openGraph: {
    title: "Chidiya Tapu Travel Guide: Sunset Point, Birds & Tips",
    description:
      "The southernmost tip of South Andaman — mangroves, birdlife, a small biological park, and consistently rated one of the best sunsets in the islands.",
    url: "https://club.kudozz.in/blog/chidiya-tapu-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise Andaman coastline at golden hour, evoking the sunset views Chidiya Tapu is known for",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chidiya Tapu Travel Guide: Sunset Point, Birds & Tips",
    description:
      "South Andaman's Bird Island — mangroves, a biological park, and the best sunset in the archipelago.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chidiya-tapu-andaman-travel-guide",
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
          headline: "Chidiya Tapu Travel Guide: Sunset Point, Birds & Tips",
          description:
            "Complete Chidiya Tapu guide — South Andaman's Bird Island and best sunset viewpoint. Munda Pahad Beach, the Biological Park, birdwatching trails, timings, and how to plan a half-day trip from Port Blair.",
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
            "@id": "https://club.kudozz.in/blog/chidiya-tapu-andaman-travel-guide",
          },
          keywords:
            "Chidiya Tapu, Munda Pahad Beach, Chidiya Tapu Biological Park, Bird Island Andaman, sunset point",
          about: {
            "@type": "Place",
            name: "Chidiya Tapu",
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
                name: "Chidiya Tapu",
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
    q: "How far is Chidiya Tapu from Port Blair?",
    a: "Roughly 25 km, about a 45-minute to 1-hour drive on a scenic forest road. It's an easy half-day round trip by taxi or auto, with no ferry or permit needed since Chidiya Tapu sits on South Andaman Island itself.",
  },
  {
    q: "Is Chidiya Tapu good for sunset?",
    a: "Yes — it's widely considered one of the best sunset spots in the Andamans, viewed from Munda Pahad Beach. The open west-facing coastline and usually clear horizon make for reliably good colour most evenings, especially October to April.",
  },
  {
    q: "What is there to do at Chidiya Tapu besides the sunset?",
    a: "The Chidiya Tapu Biological Park (native Andaman wildlife in a small zoo/rescue setup), short birdwatching walks through the mangroves and forest edge, and simply strolling the quiet beach. It's a low-key half-day trip rather than a full-day destination.",
  },
  {
    q: "Why is it called Chidiya Tapu?",
    a: "\"Chidiya Tapu\" translates to \"Bird Island\" in Hindi — a name earned from the birdlife along its mangroves and forest fringes, particularly active around dawn and dusk.",
  },
  {
    q: "Can I combine Chidiya Tapu with other Port Blair sights in one day?",
    a: "It's best treated as its own half-day trip given the round-trip drive time, but it pairs naturally with a relaxed morning at Corbyn's Cove or Cellular Jail earlier the same day, saving Chidiya Tapu specifically for the evening sunset.",
  },
  {
    q: "Is Chidiya Tapu safe for swimming?",
    a: "The beach at Chidiya Tapu is better suited to walking and photography than swimming — the coastline isn't set up as a swimming beach in the way Radhanagar or Corbyn's Cove are. Most visitors come for the view and the birdlife rather than a swim.",
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
  { id: "introduction", title: "South Andaman's Bird Island", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "sunset-point", title: "The Sunset at Munda Pahad", level: 2 },
  { id: "biological-park", title: "Chidiya Tapu Biological Park", level: 2 },
  { id: "birdwatching", title: "Birdwatching & Forest Walks", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Facilities", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChidiyaTapuGuidePage() {
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
              alt="Turquoise Andaman coastline at golden hour, evoking the sunset views Chidiya Tapu is known for"
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
                { label: "Chidiya Tapu", href: null },
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
                "Chidiya Tapu",
                "Andaman",
                "Sunset Point",
                "Bird Island",
                "South Andaman",
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
              Chidiya Tapu: South Andaman's Sunset Point & Bird Island
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The southernmost tip of South Andaman Island — mangrove-lined
              coastline, a small biological park, and a sunset viewpoint that
              regularly gets called the best in the archipelago.
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
                  text: "South Andaman, ~25 km from Port Blair",
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
                  <h2>South Andaman's Bird Island</h2>
                  <p>
                    <strong>Chidiya Tapu</strong> sits at the very southern
                    tip of South Andaman Island, about 25 km from{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>{" "}
                    — close enough for an easy half-day trip, far enough to
                    feel like a proper escape from the capital. Its name
                    translates to "Bird Island," a nod to the mangrove and
                    forest-edge birdlife that has made this quiet stretch of
                    coastline a minor birdwatching destination in its own
                    right.
                  </p>
                  <p>
                    But most visitors come for one specific reason: the
                    sunset. Chidiya Tapu is consistently rated among the best
                    sunset points anywhere in the Andamans, and on a clear
                    evening it's easy to see why — an open, west-facing
                    coastline at Munda Pahad Beach with nothing much between
                    you and the horizon.
                  </p>
                  <p>
                    Beyond the sunset, there's a small biological park, a few
                    short forest walking trails, and very little else in the
                    way of infrastructure — which is exactly the appeal for
                    travellers looking for a slower, quieter counterpoint to
                    Port Blair's museums and the diving circuit further
                    north.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌅</span> Chidiya Tapu at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Southern tip, South Andaman",
                        },
                        {
                          icon: "🚗",
                          label: "From Port Blair",
                          value: "~25 km, 45 min – 1 hr",
                        },
                        {
                          icon: "🌇",
                          label: "Known For",
                          value: "Sunset views, birdlife",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free (Biological Park nominal fee)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Apr",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "Half-day (afternoon–evening)",
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
                  <h2>Best Time to Visit Chidiya Tapu</h2>
                  <p>
                    Since the main draw is a clear-sky sunset, weather matters
                    more here than almost anywhere else on the South Andaman
                    circuit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry season with the clearest skies, giving the most reliable sunsets. Cooler evenings also make the drive and the wait for sunset more comfortable.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — hit or miss",
                        text: "Heavier cloud cover means sunsets are far less predictable, though the forest and mangroves are at their greenest and birdlife stays active.",
                      },
                      {
                        season: "Late Afternoon",
                        emoji: "🕓",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Time of day that matters most",
                        text: "Arrive at least an hour before sunset to walk Munda Pahad Beach and visit the Biological Park before the light show begins.",
                      },
                      {
                        season: "Dawn",
                        emoji: "🐦",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Best for birdwatching",
                        text: "If birding is the priority rather than sunset, an early-morning visit along the forest edge and mangroves is more rewarding than the evening crowd.",
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
                    <strong>Our pick:</strong> a dry-season evening between
                    October and April, timed to arrive an hour before
                    sunset — enough time to explore before the crowd gathers
                    at Munda Pahad Beach for the main event.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chidiya Tapu</h2>
                  <p>
                    Chidiya Tapu sits on South Andaman Island itself, so
                    there's no ferry or permit required — just a scenic drive
                    from Port Blair.
                  </p>
                  <ul>
                    <li>
                      <strong>By Taxi/Auto:</strong> The simplest option — a
                      round trip from Port Blair takes roughly 45 minutes to
                      an hour each way on a forested road, and most drivers
                      are used to timing the trip for sunset.
                    </li>
                    <li>
                      <strong>By Self-Drive:</strong> A rented scooter or car
                      works well if you'd rather set your own pace, though
                      the road has limited street lighting after dark for
                      the return leg.
                    </li>
                    <li>
                      <strong>Combine with Wandoor:</strong> Chidiya Tapu is
                      roughly on the way to Wandoor, the jetty for{" "}
                      <Link href="/blog/jolly-buoy-island-andaman-travel-guide">
                        Jolly Buoy Island
                      </Link>
                      , so some travellers combine a morning marine park trip
                      with an evening at Chidiya Tapu.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your return transport in
                    advance — taxi availability thins out after dark, and
                    you'll want a ride waiting once the sunset crowd starts
                    heading back toward Port Blair.
                  </div>
                </section>

                {/* ── Sunset Point ─────────────────────────────────────── */}
                <section id="sunset-point">
                  <h2>The Sunset at Munda Pahad</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Golden-hour light over turquoise Andaman water, evoking the sunset seen from Munda Pahad Beach at Chidiya Tapu"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Munda Pahad Beach</strong> is where the sunset
                    unfolds — an open, west-facing stretch of coast without
                    the headlands or forest cover that block the view
                    elsewhere on South Andaman. On a clear evening, the sky
                    moves through a long stretch of colour before the sun
                    actually dips below the water, which is part of why
                    photographers rate Chidiya Tapu so highly.
                  </p>
                  <p>
                    It's a genuinely low-key experience — no ticket, no
                    viewing platform, just a beach and a horizon. Arrive with
                    enough time to find a comfortable spot before the small
                    evening crowd builds, and expect it to feel unhurried
                    compared to more built-up viewpoints elsewhere in India.
                  </p>
                </section>

                {/* ── Biological Park ────────────────────────────────────── */}
                <section id="biological-park">
                  <h2>Chidiya Tapu Biological Park</h2>
                  <p>
                    A short walk or drive from the main road, the{" "}
                    <strong>Chidiya Tapu Biological Park</strong> is a small
                    zoo and rescue-style facility housing native Andaman
                    wildlife — a modest but worthwhile stop if you're
                    visiting Chidiya Tapu in daylight rather than only for
                    the evening sunset. It won't take more than 30-45
                    minutes to walk through, making it an easy add-on before
                    heading to Munda Pahad Beach.
                  </p>
                </section>

                {/* ── Birdwatching ───────────────────────────────────────── */}
                <section id="birdwatching">
                  <h2>Birdwatching & Forest Walks</h2>
                  <p>
                    The mangroves and forest fringe around Chidiya Tapu are
                    genuinely good for casual birdwatching, especially around
                    dawn and dusk — the reason the area earned its name in
                    the first place. A few short walking trails run through
                    the forest edge near the coast, offering a quieter,
                    greener alternative to simply waiting on the beach for
                    sunset. Serious birders should aim for an early-morning
                    visit rather than the evening sunset window, when
                    activity and light both favour photography over birding.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half-Day)</h2>
                  <p>
                    Chidiya Tapu is best treated as an afternoon-into-evening
                    outing from Port Blair, timed around sunset.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "3:00 – 3:45 PM",
                        title: "Drive from Port Blair",
                        color: "bg-amber-700",
                        activities: [
                          "Leave Port Blair by mid-afternoon",
                          "Scenic drive through forest along the way",
                          "Arrive with daylight to spare before sunset",
                        ],
                      },
                      {
                        day: "3:45 – 4:30 PM",
                        title: "Biological Park & Beach Walk",
                        color: "bg-forest-600",
                        activities: [
                          "Walk through the Chidiya Tapu Biological Park",
                          "Head to Munda Pahad Beach",
                          "Explore the shoreline before the crowd gathers",
                        ],
                      },
                      {
                        day: "4:30 – 6:00 PM",
                        title: "Sunset at Munda Pahad",
                        color: "bg-sky-600",
                        activities: [
                          "Settle in for the sunset show",
                          "Photograph the changing colours over the water",
                          "Head back to Port Blair once it's fully dark",
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
                    Chidiya Tapu itself has very limited food options — a
                    couple of small local stalls near the beach at best, so
                    it's worth eating in Port Blair before you leave, or
                    carrying snacks and water for the trip. There's no real
                    resort or café infrastructure here, which is part of
                    what keeps it quiet.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Chidiya Tapu is one of the cheapest half-day trips near
                    Port Blair — your main cost is transport.
                  </p>
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
                          ["Sunset viewpoint entry", "Free", "Free", "Free"],
                          [
                            "Biological Park entry",
                            "₹50",
                            "₹50",
                            "₹50",
                          ],
                          [
                            "Round-trip transport",
                            "₹300 (shared auto)",
                            "₹900 (taxi)",
                            "₹1,800 (private cab, wait & return)",
                          ],
                          ["Snacks/water", "₹100", "₹250", "₹500"],
                          ["Total (approx.)", "₹450", "₹1,200", "₹2,350"],
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
                    to Port Blair itself.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chidiya Tapu</h2>
                  <ul>
                    <li>
                      <strong>Time your arrival for sunset:</strong> Arrive
                      at least an hour before sunset to see the Biological
                      Park and beach without rushing.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Food options
                      are minimal on-site — eat in Port Blair or bring your
                      own.
                    </li>
                    <li>
                      <strong>Arrange return transport in advance:</strong>{" "}
                      Taxis thin out after dark; confirm your ride back
                      before sunset rather than after.
                    </li>
                    <li>
                      <strong>Check the weather before you go:</strong> Since
                      the main draw is the sunset, an overcast evening
                      significantly changes the experience.
                    </li>
                    <li>
                      <strong>Combine with a marine park trip:</strong> The
                      road toward Chidiya Tapu passes near Wandoor, the
                      jetty for{" "}
                      <Link href="/blog/jolly-buoy-island-andaman-travel-guide">
                        Jolly Buoy Island
                      </Link>
                      , making it easy to pair a morning boat trip with an
                      evening sunset.
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
                          "Arrive with time to spare before sunset",
                          "Visit the Biological Park in daylight",
                          "Carry water and snacks for the trip",
                          "Book return transport ahead of time",
                          "Check evening weather beforehand",
                          "Combine with an early-morning marine trip",
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
                          "Expect swimming-friendly water at the beach",
                          "Count on food stalls being open late",
                          "Assume taxis are easy to find after dark",
                          "Visit on an overcast evening if sunset is the goal",
                          "Treat it as a full-day destination",
                          "Skip carrying a torch for the walk back to transport",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Chidiya Tapu
                    with a morning at{" "}
                    <Link href="/blog/jolly-buoy-island-andaman-travel-guide">
                      Jolly Buoy Island
                    </Link>{" "}
                    or a sunrise trek up{" "}
                    <Link href="/blog/mount-manipur-andaman-travel-guide">
                      Mount Manipur
                    </Link>{" "}
                    for a fuller South Andaman day beyond{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>
                    's main sights.
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
                  "Chidiya Tapu",
                  "Andaman",
                  "South Andaman",
                  "Sunset Point",
                  "Bird Island",
                  "Munda Pahad Beach",
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

              <RelatedPostsGrid currentSlug="chidiya-tapu-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chidiya-tapu-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
