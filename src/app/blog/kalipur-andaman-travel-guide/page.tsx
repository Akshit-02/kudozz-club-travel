// src/app/blog/kalipur-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kalipur Beach Travel Guide: Turtles, Saddle Peak & Tips",
  description:
    "Complete Kalipur guide — North Andaman's quiet turtle-nesting beach near Diglipur, the gateway to the Saddle Peak trek, and one of the calmest, least-visited stops on the islands.",
  keywords:
    "Kalipur beach, Kalipur Diglipur, Kalipur turtle nesting, Saddle Peak trek, North Andaman beach, Kalipur Andaman, turtle interpretation centre Andaman",
  openGraph: {
    title: "Kalipur Beach Travel Guide: Turtles, Saddle Peak & Tips",
    description:
      "A quiet turtle-nesting beach near Diglipur and the starting point for the Saddle Peak trek — Kalipur is North Andaman at its calmest.",
    url: "https://club.kudozz.in/blog/kalipur-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A quiet North Andaman beach, evoking Kalipur near Diglipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalipur Beach Travel Guide: Turtles, Saddle Peak & Tips",
    description:
      "North Andaman's turtle-nesting beach near Diglipur, and the gateway to the Saddle Peak trek.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kalipur-andaman-travel-guide",
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
          headline: "Kalipur Beach Travel Guide: Turtles, Saddle Peak & Tips",
          description:
            "Complete Kalipur guide — North Andaman's quiet turtle-nesting beach near Diglipur, the gateway to the Saddle Peak trek.",
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
            "@id": "https://club.kudozz.in/blog/kalipur-andaman-travel-guide",
          },
          keywords:
            "Kalipur, Diglipur, turtle nesting, Saddle Peak, North Andaman",
          about: {
            "@type": "Place",
            name: "Kalipur",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Diglipur",
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
                name: "Kalipur",
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
    q: "What is Kalipur best known for?",
    a: "Sea turtle nesting. Kalipur is one of the Andamans' best-known nesting beaches for species including leatherback and olive ridley turtles, with the nesting season running roughly from November to February. A Forest Department information centre near the beach explains the conservation work being done here.",
  },
  {
    q: "Can I watch turtles nesting at Kalipur?",
    a: "During the nesting season, it's sometimes possible to see nesting activity at night with the right guidance, though sightings aren't guaranteed on any given night and disturbance is carefully controlled to protect the turtles. The interpretation centre is the best place to ask about current viewing arrangements and etiquette.",
  },
  {
    q: "Is Kalipur connected to the Saddle Peak trek?",
    a: "Yes — Kalipur sits right at the base of Saddle Peak National Park, and the trailhead for the trek up Saddle Peak, the highest point in the Andaman & Nicobar Islands, starts nearby. Many visitors base themselves in Kalipur or Diglipur specifically to attempt the trek.",
  },
  {
    q: "How do I get to Kalipur?",
    a: "Kalipur is a short distance from Diglipur town in North Andaman, reachable by local transport or an arranged vehicle. Diglipur itself is roughly a 10-12 hour road journey from Port Blair, usually broken up with an overnight stop, or reachable via inter-island ferry depending on schedules.",
  },
  {
    q: "Is Kalipur good for swimming?",
    a: "It's a calm, low-key beach rather than a swimming or water-sports destination — most visitors come for the turtle nesting, the quiet scenery, and the Saddle Peak connection rather than for beach activities.",
  },
  {
    q: "What's the best time to visit Kalipur?",
    a: "November to February overlaps with the turtle nesting season and offers pleasant, dry-season weather, making it the best overall window. The rest of the November-to-March dry season is also comfortable for the Saddle Peak trek, even outside peak nesting months.",
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
  { id: "introduction", title: "North Andaman's Quiet Beach", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kalipur", level: 2 },
  { id: "turtle-nesting", title: "Turtle Nesting Season", level: 2 },
  { id: "saddle-peak", title: "The Saddle Peak Trek", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat & Stay", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KalipurGuidePage() {
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
              alt="A quiet North Andaman beach, evoking Kalipur near Diglipur"
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
                { label: "Kalipur", href: null },
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
                "Kalipur",
                "Diglipur",
                "North Andaman",
                "Turtle Nesting",
                "Saddle Peak",
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
              Kalipur: Turtle Beach, Saddle Peak & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet nesting beach near Diglipur where leatherback and
              olive ridley turtles come ashore each winter, and the
              trailhead for the highest trek in the Andaman & Nicobar
              Islands.
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
                  text: "Diglipur, North Andaman",
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
                  <h2>North Andaman's Quiet Beach</h2>
                  <p>
                    <strong>Kalipur</strong> is a small beach and settlement
                    close to{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur
                    </Link>{" "}
                    in North Andaman — far enough from the{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Havelock–Neil–Port Blair
                    </Link>{" "}
                    circuit that it stays genuinely quiet, and interesting
                    for reasons that have little to do with swimming or
                    water sports.
                  </p>
                  <p>
                    Two things bring visitors here: sea turtles, which come
                    ashore to nest on Kalipur's sands each winter, and{" "}
                    <strong>Saddle Peak</strong>, the highest point in the
                    Andaman & Nicobar Islands, whose trek begins nearby.
                    Together they make Kalipur a natural base for a slower,
                    more nature-focused day or two at the northern end of the
                    archipelago.
                  </p>
                  <p>
                    It's often paired with a trip out to{" "}
                    <Link href="/blog/ross-and-smith-islands-andaman-travel-guide">
                      Ross & Smith Islands
                    </Link>
                    , the sandbar-linked twin islands also reached from
                    Diglipur, making North Andaman worth a dedicated few days
                    rather than a rushed detour.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-sky-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐢</span> Kalipur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Diglipur, North Andaman",
                        },
                        {
                          icon: "🐢",
                          label: "Known For",
                          value: "Sea turtle nesting",
                        },
                        {
                          icon: "🌡️",
                          label: "Nesting Season",
                          value: "Nov – Feb",
                        },
                        {
                          icon: "⛰️",
                          label: "Nearby",
                          value: "Saddle Peak National Park",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free (beach); trek fees apply",
                        },
                        {
                          icon: "🛏️",
                          label: "Stay",
                          value: "Basic guesthouses in Kalipur/Diglipur",
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
                  <h2>Best Time to Visit Kalipur</h2>
                  <p>
                    Kalipur's dry season runs roughly November through
                    March, and it happens to overlap neatly with turtle
                    nesting season for anyone hoping to combine both
                    reasons to visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "🐢",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Turtle nesting season — our pick",
                        text: "Leatherback and olive ridley turtles come ashore to nest during these months, and the weather is dry and comfortable for both the beach and the Saddle Peak trek.",
                      },
                      {
                        season: "Mar",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Good weather, nesting winding down",
                        text: "Still comfortable and dry, though the turtle nesting season is largely over by this point — better suited to the trek and the beach itself.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, manageable",
                        text: "Heat builds up but conditions are still workable for the trek early in the day, before the afternoon sun gets intense.",
                      },
                      {
                        season: "Jun – Oct",
                        emoji: "🌧️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain makes the Saddle Peak trail slippery and difficult, and ferry/road access to this part of North Andaman becomes far less reliable.",
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
                    <strong>Our pick:</strong> December or January, for the
                    best overlap of turtle nesting activity, dry-season
                    weather, and comfortable trekking conditions on Saddle
                    Peak.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kalipur</h2>
                  <p>
                    Kalipur sits close to Diglipur, itself the farthest major
                    stop most Andaman itineraries reach from Port Blair.
                  </p>
                  <ul>
                    <li>
                      <strong>Port Blair to Diglipur:</strong> Roughly a
                      10-12 hour road journey, commonly broken up with an
                      overnight stop at Rangat or Mayabunder along the way.
                      Inter-island ferries are an alternative depending on
                      current schedules.
                    </li>
                    <li>
                      <strong>Diglipur to Kalipur:</strong> A short local
                      transport ride from Diglipur town covers the final
                      stretch to Kalipur beach and the guesthouses around it.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given the distance from Port
                    Blair, plan at least two to three days for North
                    Andaman to properly cover Kalipur, Saddle Peak, and{" "}
                    <Link href="/blog/ross-and-smith-islands-andaman-travel-guide">
                      Ross & Smith Islands
                    </Link>{" "}
                    without rushing.
                  </div>
                </section>

                {/* ── Turtle Nesting ─────────────────────────────────────── */}
                <section id="turtle-nesting">
                  <h2>Turtle Nesting Season</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="A calm, undeveloped Andaman beach at dusk, evoking Kalipur's turtle-nesting shoreline"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Kalipur is one of the better-known turtle nesting sites
                    in the Andamans, with leatherback and olive ridley
                    turtles among the species that come ashore to lay eggs,
                    typically between November and February. A small
                    Forest Department-run Turtle Interpretation Centre near
                    the beach explains the biology and the conservation work
                    underway to protect nesting sites from disturbance.
                  </p>
                  <p>
                    Actually witnessing a nesting turtle isn't guaranteed on
                    any given visit — it depends on the night, the season,
                    and current conservation protocols — but the
                    interpretation centre is the right place to ask what's
                    currently possible and how to observe respectfully if
                    an opportunity arises.
                  </p>
                </section>

                {/* ── Saddle Peak ────────────────────────────────────────── */}
                <section id="saddle-peak">
                  <h2>The Saddle Peak Trek</h2>
                  <p>
                    Saddle Peak, inside Saddle Peak National Park, is the
                    highest point in the Andaman & Nicobar Islands, and its
                    trailhead is close to Kalipur — making the beach a
                    natural base for attempting the climb. The trek passes
                    through dense tropical forest and offers views back
                    across North Andaman's coastline from the summit on a
                    clear day.
                  </p>
                  <p>
                    A local guide and permit are typically required for the
                    trek, arranged through the Forest Department or your
                    Diglipur/Kalipur guesthouse — this isn't a casual
                    unguided walk given the terrain and the protected status
                    of the park.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Kalipur rewards at least a two-day stay if you want to
                    combine the beach, the turtle centre, and the Saddle
                    Peak trek without rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Turtle Centre",
                        color: "bg-sky-700",
                        activities: [
                          "Arrive in Kalipur from Diglipur",
                          "Visit the Turtle Interpretation Centre",
                          "Evening walk along the beach",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Saddle Peak Trek",
                        color: "bg-forest-600",
                        activities: [
                          "Early start with a local guide",
                          "Trek through Saddle Peak National Park",
                          "Return to Kalipur by afternoon",
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
                  <h2>Where to Eat & Stay</h2>
                  <p>
                    Kalipur has basic guesthouses and home-style eateries
                    rather than resorts or restaurant chains — expect simple,
                    fresh local meals and modest accommodation. Diglipur
                    town, a short ride away, has a slightly wider choice of
                    places to eat if you want more variety.
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
                          ["Guesthouse/night", "₹800", "₹1,800", "₹3,500"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          [
                            "Saddle Peak guide/permit",
                            "₹500",
                            "₹800",
                            "₹1,500",
                          ],
                          ["Daily total (approx.)", "₹1,700", "₹3,400", "₹6,500"],
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
                    * Excludes travel to Diglipur from Port Blair.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kalipur</h2>
                  <ul>
                    <li>
                      <strong>Visit Nov–Feb for turtles:</strong> That's the
                      nesting window — visiting outside it means the beach
                      without the turtles.
                    </li>
                    <li>
                      <strong>Arrange the Saddle Peak trek in advance:</strong>{" "}
                      A local guide and permit are required through the
                      Forest Department or your guesthouse.
                    </li>
                    <li>
                      <strong>Don't expect nightlife or resorts:</strong>{" "}
                      Kalipur is deliberately simple and quiet — come for the
                      nature, not the amenities.
                    </li>
                    <li>
                      <strong>Follow turtle-viewing etiquette:</strong> No
                      flash photography or disturbance if you're lucky
                      enough to see nesting activity — ask the interpretation
                      centre for current guidance.
                    </li>
                    <li>
                      <strong>Combine with Ross & Smith Islands:</strong>{" "}
                      Both are reached from Diglipur, so plan them together
                      rather than as separate trips.
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
                          "Visit during Nov–Feb for turtle nesting",
                          "Arrange the Saddle Peak trek with a guide",
                          "Stop by the Turtle Interpretation Centre",
                          "Pair the trip with Ross & Smith Islands",
                          "Carry cash and basic supplies",
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
                          "Expect resorts, nightlife, or wide dining choice",
                          "Attempt the Saddle Peak trek without a guide",
                          "Disturb nesting turtles or use flash photography",
                          "Visit during the monsoon months",
                          "Treat it as a swimming/watersports beach",
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
                  "Kalipur",
                  "Diglipur",
                  "North Andaman",
                  "Turtle Nesting",
                  "Saddle Peak",
                  "Andaman Islands",
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

              <RelatedPostsGrid currentSlug="kalipur-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kalipur-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
