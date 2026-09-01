// src/app/blog/ross-and-smith-islands-andaman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ross & Smith Islands Travel Guide: Sandbar, Permits & Tips",
  description:
    "Complete guide to Ross & Smith Islands near Diglipur — the twin islands joined by a natural walkable sandbar. How to reach them, entry permission, best time, and what to expect from one of the Andamans' most pristine day trips.",
  keywords:
    "Ross and Smith Islands, Ross Smith Islands Diglipur, Ross Smith sandbar, Diglipur day trip, North Andaman islands, Aerial Bay jetty, Ross Smith permission, Andaman off-beat islands",
  openGraph: {
    title: "Ross & Smith Islands Travel Guide: Sandbar, Permits & Tips",
    description:
      "Two islands, one natural sandbar you can walk across at low tide — Ross & Smith is North Andaman's most pristine, least-crowded beach escape.",
    url: "https://club.kudozz.in/blog/ross-and-smith-islands-andaman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/andaman/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise water and white sand typical of Ross & Smith Islands near Diglipur, North Andaman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ross & Smith Islands Travel Guide: Sandbar, Permits & Tips",
    description:
      "Twin islands joined by a walkable sandbar — one of the Andamans' most pristine, least-crowded day trips, near Diglipur.",
    images: ["/images/destinations/andaman/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://club.kudozz.in/blog/ross-and-smith-islands-andaman-travel-guide",
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
          headline: "Ross & Smith Islands Travel Guide: Sandbar, Permits & Tips",
          description:
            "Complete guide to Ross & Smith Islands near Diglipur — the twin islands joined by a natural walkable sandbar. How to reach them, entry permission, best time, and what to expect.",
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
            "@id": "https://club.kudozz.in/blog/ross-and-smith-islands-andaman-travel-guide",
          },
          keywords:
            "Ross and Smith Islands, Diglipur, sandbar, North Andaman, Aerial Bay",
          about: {
            "@type": "Place",
            name: "Ross & Smith Islands",
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
                name: "Ross & Smith Islands",
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
    q: "Can you really walk between Ross Island and Smith Island?",
    a: "Yes — a natural sandbar connects the two islands and is exposed and walkable during low tide. It's the single defining feature of a visit here: you can literally stand with one island behind you and the other ahead, ankle-deep in the sea on either side. The sandbar narrows or submerges as the tide rises, so timing your visit around low tide matters.",
  },
  {
    q: "Is Ross & Smith Islands the same as Ross Island near Port Blair?",
    a: "No, and this is a common mix-up. Ross Island near Port Blair (officially renamed Netaji Subhas Chandra Bose Dweep) is the former British colonial headquarters with ruins, deer, and a short ferry ride from the capital. Ross & Smith Islands are an entirely different pair of islands near Diglipur, roughly 300 km north, known for their sandbar rather than any colonial history.",
  },
  {
    q: "How do I get to Ross & Smith Islands?",
    a: "You first need to reach Diglipur in North Andaman, either by a long road journey (roughly 10-12 hours from Port Blair, often broken up overnight) or an inter-island ferry. From Diglipur, a short boat ride from the Aerial Bay jetty takes you out to Ross & Smith Islands — most visitors book this boat through a local operator or their guesthouse in Diglipur.",
  },
  {
    q: "Do I need permission to visit Ross & Smith Islands?",
    a: "Yes, entry is typically arranged through the Forest Department or through local tour operators in Diglipur, who handle the paperwork and ticketing as part of the boat trip. It isn't a complicated process, but it does mean you can't simply show up at Aerial Bay and hire a boat without going through the proper channel first.",
  },
  {
    q: "What facilities are available on Ross & Smith Islands?",
    a: "Very few. This is a day-trip destination with minimal to no permanent food stalls or shelter, so carry your own drinking water, snacks or a packed lunch, and sun protection. There's no overnight stay option on the islands themselves.",
  },
  {
    q: "What is the best time to visit Ross & Smith Islands?",
    a: "November to March offers the calmest seas, clearest water, and most reliable low-tide sandbar walks, in line with the dry season across the Andamans. Plan your visit around the day's low tide timing, which your Diglipur boat operator can advise on, rather than a fixed clock time.",
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
  { id: "introduction", title: "The Sandbar Between Two Islands", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ross & Smith", level: 2 },
  { id: "the-sandbar", title: "Walking the Sandbar", level: 2 },
  { id: "permission", title: "Permission & Entry", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Facilities", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RossAndSmithIslandsGuidePage() {
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
              alt="Turquoise water and white sand typical of Ross & Smith Islands near Diglipur, North Andaman"
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
                { label: "Ross & Smith Islands", href: null },
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
                "Ross & Smith Islands",
                "Diglipur",
                "North Andaman",
                "Sandbar",
                "Off-beat Islands",
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
              Ross & Smith Islands: The Sandbar, Permits & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Two islands joined by a single strip of white sand you can walk
              across at low tide — Ross & Smith, near Diglipur in North
              Andaman, is about as pristine and uncrowded as the archipelago
              gets.
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
                  text: "Diglipur, North Andaman",
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
                  <h2>The Sandbar Between Two Islands</h2>
                  <p>
                    <strong>Ross & Smith Islands</strong> are a pair of small
                    islands off the coast of Diglipur in North Andaman, best
                    known for a single, striking feature: a natural sandbar
                    joins them, and at low tide it's exposed enough to walk
                    from one island to the other, sea on both sides. It's the
                    kind of geographic curiosity that photographs
                    beautifully and, more importantly, is genuinely fun to
                    stand in the middle of.
                  </p>
                  <p>
                    Because they sit so far from the{" "}
                    <Link href="/blog/andaman-islands-travel-guide">
                      Havelock–Neil–Port Blair
                    </Link>{" "}
                    circuit that most Andaman itineraries revolve around,
                    Ross & Smith stay far less crowded — the water is
                    clearer, the sand is emptier, and the whole experience
                    feels closer to discovering a beach than visiting one.
                  </p>
                  <p>
                    Not to be confused with{" "}
                    <Link href="/blog/ross-island-andaman-travel-guide">
                      Ross Island near Port Blair
                    </Link>{" "}
                    — a completely different island with British colonial
                    ruins — Ross & Smith is purely a natural, undeveloped spot
                    reached from{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur
                    </Link>
                    , the northernmost town most travellers ever get to on
                    the islands.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-sky-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏝️</span> Ross & Smith Islands at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Off Diglipur, North Andaman",
                        },
                        {
                          icon: "🚤",
                          label: "Access",
                          value: "Boat from Aerial Bay jetty",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Mar" },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Permission via Forest Dept / operator",
                        },
                        {
                          icon: "🏝️",
                          label: "Highlight",
                          value: "Walkable sandbar at low tide",
                        },
                        {
                          icon: "🛏️",
                          label: "Stay",
                          value: "Day trip only, base in Diglipur",
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
                  <h2>Best Time to Visit Ross & Smith Islands</h2>
                  <p>
                    Timing here is less about the season and more about the
                    tide table on the day you go — though the two are
                    connected, since the dry season also brings the calmest
                    seas for the boat crossing.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best season overall",
                        text: "Calm seas for the boat ride from Aerial Bay, clear water, and comfortable temperatures — the most reliable window for a good sandbar walk.",
                      },
                      {
                        season: "Low Tide",
                        emoji: "🌊",
                        color: "bg-sky-50 border-sky-200",
                        mood: "The moment that matters most",
                        text: "The sandbar is only fully walkable within a couple of hours either side of low tide — check the day's tide timing with your Diglipur boat operator before planning your visit time.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🌤️",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot but manageable",
                        text: "Seas are still generally calm and the islands are less busy, but midday heat is intense with almost no shade on the sandbar itself.",
                      },
                      {
                        season: "Jun – Oct",
                        emoji: "🌧️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Monsoon — avoid",
                        text: "Rough seas frequently suspend boat trips from Aerial Bay altogether, and the already-long journey to Diglipur becomes an unreliable one.",
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
                    <strong>Our pick:</strong> a dry-season morning around
                    low tide — you'll get the clearest water, the fullest
                    sandbar, and the boat crossing at its calmest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ross & Smith Islands</h2>
                  <p>
                    Getting here is a two-stage journey: reach{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur
                    </Link>{" "}
                    first, then take a short boat ride out to the islands.
                  </p>
                  <ul>
                    <li>
                      <strong>Stage 1 — Reach Diglipur:</strong> By road from
                      Port Blair, this is roughly a 10-12 hour journey, often
                      broken into an overnight stop at Rangat or Mayabunder.
                      An inter-island ferry is the other option, depending on
                      current schedules.
                    </li>
                    <li>
                      <strong>Stage 2 — Boat to the islands:</strong> From
                      Diglipur, a short boat ride from the Aerial Bay jetty
                      takes you out to Ross & Smith. Boats are typically
                      arranged through your guesthouse or a local tour
                      operator in Diglipur rather than booked independently
                      at the jetty.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given how far Diglipur is
                    from Port Blair, plan Ross & Smith as part of a longer
                    North Andaman loop that also covers{" "}
                    <Link href="/blog/kalipur-andaman-travel-guide">
                      Kalipur
                    </Link>{" "}
                    and Saddle Peak — not as a rushed standalone side trip.
                  </div>
                </section>

                {/* ── The Sandbar ────────────────────────────────────────── */}
                <section id="the-sandbar">
                  <h2>Walking the Sandbar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/andaman/hero.jpg"
                      alt="A narrow sand strip between turquoise waters, similar to the walkable sandbar connecting Ross and Smith Islands"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The sandbar is the whole point of the trip. As the tide
                    drops, a pale ribbon of sand emerges between Ross Island
                    and Smith Island, wide enough to walk across with water
                    lapping at either side. It's shallow, warm, and safe to
                    wade through in most conditions, and it's rare enough —
                    most beaches don't let you walk between two separate
                    islands on foot — that it's worth building your whole
                    visit around catching it at its best.
                  </p>
                  <p>
                    Beyond the sandbar itself, both islands have quiet,
                    largely untouched beaches good for swimming and simply
                    sitting with almost no one else around — a sharp contrast
                    to the more developed beaches further south in the
                    archipelago.
                  </p>
                </section>

                {/* ── Permission ─────────────────────────────────────────── */}
                <section id="permission">
                  <h2>Permission & Entry</h2>
                  <p>
                    Visiting Ross & Smith isn't a simple case of hiring any
                    boat at the jetty — entry is generally arranged through
                    the Forest Department or a registered local tour
                    operator in Diglipur, who handle the necessary permission
                    and ticketing as part of organising your boat trip. It's
                    a straightforward process in practice, but it does mean
                    booking a day or so ahead through your guesthouse rather
                    than showing up and expecting to arrange it on the spot.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Ross & Smith works best as a half-day to full-day trip
                    from Diglipur, timed around the tide.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Boat Out & Sandbar Walk",
                        color: "bg-sky-700",
                        activities: [
                          "Depart Aerial Bay jetty by boat",
                          "Time arrival close to the day's low tide",
                          "Walk the sandbar between the two islands",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Beach Time & Swimming",
                        color: "bg-forest-600",
                        activities: [
                          "Swim in the calm, clear shallows",
                          "Relax on the largely empty beaches",
                          "Photography while the light is strong",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Return to Diglipur",
                        color: "bg-stone-600",
                        activities: [
                          "Boat back to Aerial Bay jetty",
                          "Head back into Diglipur town",
                          "Rest before a Saddle Peak or Kalipur outing",
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
                    There are essentially no food stalls or shelters on Ross
                    & Smith Islands themselves — this is a day trip to an
                    undeveloped spot, not a resort island. Carry drinking
                    water, snacks or a packed lunch, and sun protection, and
                    plan to eat properly once you're back in Diglipur, which
                    has a handful of simple local eateries and guesthouse
                    kitchens.
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
                          ["Boat + entry permission", "₹800", "₹1,500", "₹2,500"],
                          ["Food carried/packed", "₹200", "₹500", "₹1,000"],
                          [
                            "Diglipur accommodation/night",
                            "₹800",
                            "₹2,000",
                            "₹4,500",
                          ],
                          ["Total (approx., per person)", "₹1,800", "₹4,000", "₹8,000"],
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
                    * Excludes travel to Diglipur from Port Blair. See our{" "}
                    <Link href="/blog/diglipur-andaman-travel-guide">
                      Diglipur travel guide
                    </Link>{" "}
                    for that leg of the journey.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ross & Smith Islands</h2>
                  <ul>
                    <li>
                      <strong>Check the tide table first:</strong> The
                      sandbar walk is the main draw — arrange your boat
                      timing around low tide rather than a fixed hour.
                    </li>
                    <li>
                      <strong>Book through Diglipur, not on arrival:</strong>{" "}
                      Boats and entry permission are arranged a day ahead
                      through your guesthouse or a local operator.
                    </li>
                    <li>
                      <strong>Carry everything you need:</strong> Water,
                      snacks, and sun protection — there's no shop or shelter
                      on the islands.
                    </li>
                    <li>
                      <strong>Don't confuse it with Ross Island:</strong>{" "}
                      This is a different, unrelated island pair near
                      Diglipur, not the colonial-ruins Ross Island near Port
                      Blair.
                    </li>
                    <li>
                      <strong>Combine it with a North Andaman loop:</strong>{" "}
                      Pair the trip with Kalipur and Saddle Peak given how
                      far Diglipur is from the rest of the Andamans.
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
                          "Time your trip around low tide",
                          "Book the boat and permission via Diglipur",
                          "Carry water, food, and sun protection",
                          "Visit during the Nov–Mar dry season",
                          "Pair the trip with Kalipur and Saddle Peak",
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
                          "Expect food stalls or shelter on the islands",
                          "Show up at Aerial Bay expecting a same-day boat",
                          "Confuse this with Ross Island near Port Blair",
                          "Visit during the monsoon months",
                          "Rush it as a side trip without a North Andaman plan",
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
                  "Ross & Smith Islands",
                  "Diglipur",
                  "North Andaman",
                  "Sandbar",
                  "Off-beat Islands",
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

              <RelatedPostsGrid currentSlug="ross-and-smith-islands-andaman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ross-and-smith-islands-andaman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
