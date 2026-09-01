// src/app/blog/rangat-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Rangat Andaman Travel Guide: Cuthbert Bay & Long Island",
  description:
    "Rangat travel guide — Middle Andaman's halfway stopover town on the road to Diglipur. Cuthbert Bay turtle beach, the Dhaninallah Mangrove Walkway, and the boat crossing to Long Island.",
  keywords:
    "Rangat Andaman, Rangat travel guide, Cuthbert Bay turtle nesting, Dhaninallah Mangrove Walkway, Long Island ferry Rangat, Middle Andaman, Andaman Trunk Road, Yerrata jetty, Amkunj Beach, how to reach Rangat, Rangat to Diglipur, Rangat to Mayabunder",
  openGraph: {
    title: "Rangat Andaman Travel Guide: Cuthbert Bay & Long Island",
    description:
      "Middle Andaman's practical halfway town — a turtle-nesting beach, a mangrove boardwalk, and the jetty for Long Island's untouched shores.",
    url: "https://club.kudozz.in/blog/rangat-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Andaman coastline and mangrove-lined creek, evoking Rangat's Cuthbert Bay and the Dhaninallah Mangrove Walkway",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangat Andaman Travel Guide: Cuthbert Bay & Long Island",
    description:
      "A turtle beach, a mangrove boardwalk, and the jetty to Long Island — the practical guide to Middle Andaman's halfway town.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/rangat-andaman-travel-guide",
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
          headline: "Rangat Andaman Travel Guide: Cuthbert Bay & Long Island",
          description:
            "Rangat travel guide — Middle Andaman's halfway stopover town on the road to Diglipur. Cuthbert Bay turtle beach, the Dhaninallah Mangrove Walkway, and the boat crossing to Long Island.",
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
            "@id": "https://club.kudozz.in/blog/rangat-andaman-travel-guide",
          },
          keywords:
            "Rangat, Middle Andaman, Cuthbert Bay, Dhaninallah Mangrove Walkway, Long Island, Andaman Trunk Road",
          about: {
            "@type": "Place",
            name: "Rangat",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rangat",
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
                name: "Rangat",
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
    q: "Is Rangat worth visiting on its own?",
    a: "Not really as a standalone destination — Rangat is primarily a practical stopover on the long road journey between Port Blair and Diglipur, or the jumping-off point for the boat to Long Island. Its own attractions (Cuthbert Bay, the mangrove walkway) are pleasant half-day stops rather than reasons to travel here specifically.",
  },
  {
    q: "How far is Rangat from Port Blair?",
    a: "Around 170 km by road, which typically takes 6–7 hours including the ferry crossing at Baratang that the Andaman Trunk Road runs through. Most travellers heading north break the journey overnight in Rangat rather than pushing straight through to Diglipur in one day.",
  },
  {
    q: "What is there to see in Rangat itself?",
    a: "Cuthbert Bay, a turtle-nesting beach similar in character to Kalipur further north, and the Dhaninallah Mangrove Walkway, a boardwalk trail through mangrove forest. Both are easy half-day additions if you're overnighting in town.",
  },
  {
    q: "How do I get from Rangat to Long Island?",
    a: "Long Island is reached by a short boat crossing from a jetty near Rangat (commonly referred to as Yerrata jetty). Government ferry schedules can be limited, so it's worth confirming timings locally or through a Port Blair travel agent before planning your onward route.",
  },
  {
    q: "When can I see turtles nesting at Cuthbert Bay?",
    a: "Turtle nesting season in the Andamans generally runs from around November to February, similar to the timing at Kalipur near Diglipur. Outside this window, Cuthbert Bay is still a quiet, pleasant beach, just without the nesting activity.",
  },
  {
    q: "Should I stay overnight in Rangat?",
    a: "If you're driving the full Port Blair–Diglipur route, yes — breaking the journey in Rangat is far more comfortable than attempting it in a single day. Accommodation is basic but adequate for a one-night stopover.",
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
  { id: "introduction", title: "Middle Andaman's Halfway Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Rangat", level: 2 },
  { id: "cuthbert-bay", title: "Cuthbert Bay", level: 2 },
  { id: "mangrove-walkway", title: "Dhaninallah Mangrove Walkway", level: 2 },
  { id: "long-island", title: "The Boat to Long Island", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RangatGuidePage() {
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
              alt="Andaman coastline and mangrove-lined creek, evoking Rangat's Cuthbert Bay and the Dhaninallah Mangrove Walkway"
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
                {
                  label: "Andaman Islands",
                  href: "/blog/andaman-islands-travel-guide",
                },
                { label: "Rangat", href: null },
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
                "Rangat",
                "Middle Andaman",
                "Cuthbert Bay",
                "Long Island",
                "Andaman Trunk Road",
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
              Rangat: Middle Andaman's Halfway Town & Long Island Gateway
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A turtle-nesting beach, a mangrove boardwalk, and the jetty to
              untouched Long Island — Rangat is the practical stop that
              breaks up the long road north from Port Blair to Diglipur.
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
                  text: "Middle Andaman",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,600 words",
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
                  <h2>Middle Andaman's Halfway Town</h2>
                  <p>
                    <strong>Rangat</strong> sits roughly midway on the{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Trunk Road
                    </Link>
                    , the long north-south highway that connects{" "}
                    <Link href="/blog/port-blair-andaman-travel-guide">
                      Port Blair
                    </Link>{" "}
                    to the far north of the archipelago. Most travellers don't
                    come here for Rangat itself — they come through it, using
                    the town to break up the journey to{" "}
                    <Link href="/blog/mayabunder-andaman-travel-guide">
                      Mayabunder
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur
                    </Link>{" "}
                    further north.
                  </p>
                  <p>
                    That said, Rangat isn't nothing. A turtle-nesting beach,
                    a quiet mangrove boardwalk, and a jetty that opens onto
                    one of the Andamans' least-visited islands are all worth
                    a half-day if you're passing through anyway — and for
                    travellers who specifically want to reach{" "}
                    <strong>Long Island</strong>, Rangat is the only
                    practical base to do it from.
                  </p>
                  <p>
                    Think of Rangat less as a destination and more as a
                    useful, honest waypoint — a place to sleep, eat, and
                    reset before the next stretch of Middle and North
                    Andaman.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐢</span> Rangat at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Middle Andaman",
                        },
                        {
                          icon: "🚗",
                          label: "From Port Blair",
                          value: "~170 km, 6–7 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Mar" },
                        {
                          icon: "🐢",
                          label: "Known For",
                          value: "Cuthbert Bay, Long Island ferry",
                        },
                        {
                          icon: "⛴️",
                          label: "Gateway To",
                          value: "Long Island",
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
                  <h2>Best Time to Visit Rangat</h2>
                  <p>
                    Rangat follows the same seasonal pattern as the rest of
                    the Andamans — the dry season between the two monsoons
                    is by far the most comfortable window for road travel
                    and the Long Island boat crossing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas for the Long Island crossing, comfortable road travel, and the peak of the turtle nesting season at Cuthbert Bay.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warmer, still workable",
                        text: "Seas remain manageable and roads are dry, though daytime heat picks up — plan the Long Island boat trip for the morning.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon — avoid",
                        text: "Heavy rain disrupts both road conditions on the Trunk Road and ferry schedules to Long Island — best avoided for this leg of the trip.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌈",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transition — check conditions",
                        text: "The northeast monsoon is easing but conditions can still be unpredictable — confirm ferry schedules locally before planning around Long Island.",
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
                    reliable ferries to Long Island, easy road conditions,
                    and the best chance of seeing turtle activity at
                    Cuthbert Bay.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Rangat</h2>
                  <p>
                    Rangat is a road journey rather than a flight or direct
                    ferry destination — it sits on the Andaman Trunk Road
                    between Port Blair and the north of the archipelago.
                  </p>
                  <ul>
                    <li>
                      <strong>By Road from Port Blair:</strong> Roughly 170
                      km, taking 6–7 hours, including the vehicle ferry
                      crossing at{" "}
                      <Link href="/blog/baratang-andaman-travel-guide">
                        Baratang
                      </Link>{" "}
                      partway along the route.
                    </li>
                    <li>
                      <strong>By Road from Diglipur/Mayabunder:</strong>{" "}
                      Rangat sits south of both towns on the same highway,
                      making it a natural stop in either direction.
                    </li>
                    <li>
                      <strong>Onward to Long Island:</strong> A short boat
                      crossing from a jetty near Rangat (commonly referred
                      to locally as Yerrata jetty) — confirm current
                      schedules before relying on this for a tight
                      itinerary.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a private taxi or shared
                    jeep for the Port Blair–Rangat leg through a Port Blair
                    travel agent — public bus schedules exist but are far
                    less flexible for travellers on a tight island-hopping
                    itinerary.
                  </div>
                </section>

                {/* ── Cuthbert Bay ──────────────────────────────────────── */}
                <section id="cuthbert-bay">
                  <h2>Cuthbert Bay</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="Quiet Andaman beach at dusk, evoking Rangat's Cuthbert Bay turtle-nesting shoreline"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Cuthbert Bay</strong> is Rangat's main natural
                    attraction — a turtle-nesting beach in much the same
                    vein as{" "}
                    <Link href="/blog/kalipur-andaman-travel-guide">
                      Kalipur
                    </Link>{" "}
                    further north near Diglipur. Several species of sea
                    turtle come ashore here to lay eggs, roughly between
                    November and February, making a quiet evening or early
                    morning visit worthwhile during that window.
                  </p>
                  <p>
                    Outside nesting season, Cuthbert Bay is simply a calm,
                    little-visited stretch of sand — pleasant for a walk but
                    not a headline beach in its own right compared to the
                    likes of{" "}
                    <Link href="/blog/radhanagar-beach-andaman-travel-guide">
                      Radhanagar
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Mangrove Walkway ──────────────────────────────────── */}
                <section id="mangrove-walkway">
                  <h2>Dhaninallah Mangrove Walkway</h2>
                  <p>
                    A boardwalk trail through dense mangrove forest just
                    outside Rangat, the{" "}
                    <strong>Dhaninallah Mangrove Walkway</strong> is an easy,
                    short way to see the Andamans' mangrove ecosystems up
                    close without needing a boat. It's a quiet, shaded walk
                    — good for an hour in the late afternoon between road
                    travel and dinner.
                  </p>
                </section>

                {/* ── Long Island ───────────────────────────────────────── */}
                <section id="long-island">
                  <h2>The Boat to Long Island</h2>
                  <p>
                    For travellers who specifically want to reach{" "}
                    <Link href="/blog/long-island-andaman-travel-guide">
                      Long Island
                    </Link>{" "}
                    — home to the pristine, little-visited Lalaji Bay Beach
                    — Rangat is the practical jumping-off point. The
                    crossing is short, but government ferry schedules can be
                    limited and irregular, so it's worth confirming timings
                    locally or through a Port Blair travel agent before
                    building a tight itinerary around it.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If Long Island is a firm
                    priority, build in a spare day in Rangat — ferry
                    schedules here are far less reliable than the
                    Havelock/Neil routes further south, and cancellations
                    happen.
                  </div>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Most travellers spend a single night in Rangat as part
                    of a longer North Andaman loop — here's how to make the
                    stopover count.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Afternoon",
                        title: "Arrive & Settle In",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Port Blair or the north by road",
                          "Check into a guesthouse and rest after the drive",
                          "Short walk at Cuthbert Bay before sunset",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Mangrove Walkway & Dinner",
                        color: "bg-forest-600",
                        activities: [
                          "Late-afternoon walk on the Dhaninallah boardwalk",
                          "Simple local dinner in town",
                          "Early night before the next day's onward travel",
                        ],
                      },
                      {
                        day: "Next Morning",
                        title: "Onward — Diglipur or Long Island",
                        color: "bg-sky-600",
                        activities: [
                          "Continue north to Mayabunder/Diglipur by road, or",
                          "Catch the morning boat to Long Island if timings allow",
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
                  <h2>Where to Eat in Rangat</h2>
                  <p>
                    Rangat has basic but adequate dining — simple local
                    eateries serving rice, fish curry, and standard Indian
                    thali fare rather than the resort-style restaurants
                    found on Havelock or Neil.
                  </p>
                  <ul>
                    <li>
                      <strong>Local dhabas:</strong> A handful of small
                      eateries near the main road cover most meals — fresh
                      fish is usually a safe, good option given the coastal
                      location.
                    </li>
                    <li>
                      <strong>Guesthouse meals:</strong> Many travellers eat
                      where they stay, since guesthouse kitchens are often
                      more reliable than independent restaurants in a town
                      this size.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Rangat is inexpensive by Andaman standards — most costs
                    here are for a single overnight stopover rather than an
                    extended stay.
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
                          [
                            "Accommodation/night",
                            "₹800",
                            "₹1,800",
                            "₹3,500",
                          ],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
                          [
                            "Road transport (from Port Blair)",
                            "₹500 (bus)",
                            "₹3,000 (shared taxi)",
                            "₹6,000 (private cab)",
                          ],
                          [
                            "Long Island boat (return)",
                            "₹150",
                            "₹150",
                            "₹1,500 (private boat)",
                          ],
                          ["Total (1 night)", "₹1,750", "₹5,550", "₹12,200"],
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
                    * Figures are per person, for a single overnight
                    stopover. See our{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Andaman Islands guide
                    </Link>{" "}
                    for a full multi-island budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Rangat</h2>
                  <ul>
                    <li>
                      <strong>Treat it as a stopover, not a destination:</strong>{" "}
                      Plan one night here as part of a longer North Andaman
                      loop rather than building an itinerary around Rangat
                      itself.
                    </li>
                    <li>
                      <strong>Confirm Long Island ferry timings ahead:</strong>{" "}
                      Schedules are far less frequent and reliable than
                      routes further south — don't assume a same-day
                      crossing.
                    </li>
                    <li>
                      <strong>Book accommodation modestly:</strong> Options
                      are basic — set expectations accordingly rather than
                      expecting resort-level stays.
                    </li>
                    <li>
                      <strong>Fill your tank and carry cash:</strong>{" "}
                      Fuel stations and ATMs thin out the further north you
                      travel — top up in Rangat before continuing.
                    </li>
                    <li>
                      <strong>Combine with Cuthbert Bay in season:</strong>{" "}
                      If travelling November–February, time your stop to
                      allow an early morning or evening visit for turtle
                      activity.
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
                          "Break the Port Blair–Diglipur drive here",
                          "Confirm Long Island ferry schedules in advance",
                          "Visit Cuthbert Bay in the Nov–Feb nesting window",
                          "Walk the Dhaninallah Mangrove Walkway in late afternoon",
                          "Top up fuel and cash before heading further north",
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
                          "Expect resort-style accommodation or dining",
                          "Assume a same-day Long Island crossing is guaranteed",
                          "Attempt the full Port Blair–Diglipur drive in one day",
                          "Travel this leg during the June–September monsoon",
                          "Skip fuel/cash top-ups before continuing north",
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
                    <strong>🗺️ Extend the trip:</strong> Rangat fits naturally
                    into a wider North Andaman loop — continue on to{" "}
                    <Link href="/blog/mayabunder-andaman-travel-guide">
                      Mayabunder
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur
                    </Link>
                    , or detour to the quiet shores of{" "}
                    <Link href="/blog/long-island-andaman-travel-guide">
                      Long Island
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
                  "Rangat",
                  "Middle Andaman",
                  "Cuthbert Bay",
                  "Long Island",
                  "Andaman Trunk Road",
                  "North Andaman",
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

              <RelatedPostsGrid currentSlug="rangat-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="rangat-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
