// src/app/blog/nagoa-beach-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Nagoa Beach Diu: Water Sports, Timings & Tips",
  description:
    "Guide to Nagoa Beach, Diu's most popular horseshoe-shaped bay — water sports, timings, how to reach, swimming safety, food shacks, and a half-day plan.",
  keywords:
    "Nagoa Beach, Nagoa Beach Diu, Diu beaches, Nagoa Beach water sports, Nagoa Beach timings, best beach in Diu, Nagoa Beach distance from Diu town, Diu horseshoe beach, Nagoa Beach camel ride, Diu swimming beach, Nagoa Beach parasailing",
  openGraph: {
    title: "Nagoa Beach Diu: Water Sports, Timings & Tips",
    description:
      "The horseshoe-shaped bay that's Diu's calmest, most swimmer-friendly beach — water sports, safety notes, food shacks, and how to plan a half-day here.",
    url: "https://club.kudozz.in/blog/nagoa-beach-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "A crescent-shaped, palm-lined beach cove with calm turquoise water, evocative of Nagoa Beach's horseshoe bay in Diu",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagoa Beach Diu: Water Sports, Timings & Tips",
    description:
      "The horseshoe-shaped bay that's Diu's calmest, most swimmer-friendly beach — water sports, safety notes, food shacks, and how to plan a half-day here.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nagoa-beach-travel-guide",
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
          headline: "Nagoa Beach Diu: Water Sports, Timings & Tips",
          description:
            "Guide to Nagoa Beach, Diu's most popular horseshoe-shaped bay — water sports, timings, how to reach, swimming safety, food shacks, and a half-day plan.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",
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
            "@id": "https://club.kudozz.in/blog/nagoa-beach-travel-guide",
          },
          keywords:
            "Nagoa Beach, Nagoa Beach Diu, Diu beaches, Nagoa Beach water sports, Nagoa Beach timings, best beach in Diu",
          about: {
            "@type": "Place",
            name: "Nagoa Beach",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Diu",
              addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
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
                name: "Daman & Diu",
                item: "https://club.kudozz.in/blog/dadra-nagar-haveli-daman-diu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Nagoa Beach",
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
    q: "Is Nagoa Beach safe for swimming?",
    a: "Yes — Nagoa is widely considered the safest and most swimmer-friendly beach in Diu, thanks to its sheltered horseshoe shape, which keeps the water noticeably calmer than the more exposed beaches elsewhere on the island. That said, lifeguard presence varies through the day and isn't guaranteed at every hour, so it's still worth swimming within your depth, staying near other bathers, and being cautious around the deeper stretches toward the bay's outer edges.",
  },
  {
    q: "How far is Nagoa Beach from Diu town?",
    a: "Nagoa Beach is roughly 7–8 km from Diu town, about a 15–20 minute drive or auto-rickshaw ride. It's an easy half-day trip from the fort and old town area, and many visitors combine it with Gangeshwar Temple and Naida Caves, both a short detour away.",
  },
  {
    q: "What water sports are available at Nagoa Beach?",
    a: "Local vendors on the beach offer jet-skiing, banana boat rides, and parasailing, along with simpler options like paddle boats. Rates are generally negotiated on the spot and aren't fixed government tariffs, so it's worth asking a couple of vendors before committing, and checking that basic safety gear (life jackets, in particular) is actually provided.",
  },
  {
    q: "Is Nagoa Beach crowded?",
    a: "It's the most visited beach in Diu, so weekends, holidays, and the December–January peak season bring real crowds, especially around the main promenade and watersports stretch. Weekday mornings and early evenings are noticeably quieter, and walking a little further along the crescent away from the main entry point also thins the crowd considerably.",
  },
  {
    q: "What is the best time to visit Nagoa Beach?",
    a: "October to March offers the most pleasant conditions — comfortable temperatures, calm seas, and clear skies for both swimming and sunset watching. Early morning and late afternoon are the best times of day, avoiding the harshest midday sun, which has very little natural shade on the open beach.",
  },
  {
    q: "Are there lifeguards at Nagoa Beach?",
    a: "Lifeguard coverage exists but isn't consistent or round-the-clock the way it might be at a major resort beach, so it shouldn't be relied upon as a safety net. Swim with sensible caution, keep children within arm's reach in the water, and treat any posted warning flags or signage seriously.",
  },
  {
    q: "What food options are available near Nagoa Beach?",
    a: "A row of small shacks and cafés lines the approach to the beach, serving fresh seafood, simple Gujarati snacks, and cold drinks and coconut water, along with basic Indian and Chinese menus aimed at day-trippers. Don't expect fine dining — it's casual, beach-shack fare, best enjoyed with your feet still sandy.",
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
  { id: "introduction", title: "Nagoa Beach: Diu's Favourite Bay", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nagoa Beach", level: 2 },
  { id: "water-sports", title: "Water Sports", level: 2 },
  { id: "promenade", title: "The Promenade & Camel Rides", level: 2 },
  { id: "swimming-safety", title: "Swimming Safety", level: 2 },
  { id: "food-guide", title: "Food Shacks & Cafés", level: 2 },
  { id: "sunset", title: "Sunset at Nagoa", level: 2 },
  { id: "itinerary", title: "A Half-Day Beach Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NagoaBeachGuidePage() {
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
              src="/images/destinations/goa/beach.jpg"
              alt="A crescent-shaped, palm-lined beach cove with calm turquoise water, evocative of Nagoa Beach's horseshoe bay in Diu"
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
                  label: "Daman & Diu",
                  href: "/blog/dadra-nagar-haveli-daman-diu-travel-guide",
                },
                { label: "Nagoa Beach", href: null },
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
                "Nagoa Beach",
                "Diu",
                "Daman & Diu",
                "Beaches",
                "Water Sports",
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
              Nagoa Beach Diu: Water Sports, Timings & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A horseshoe-shaped bay lined with coconut and casuarina trees,
              calmer water than anywhere else on the island, and the closest
              thing Diu has to a "main" beach — here's everything worth
              knowing before you go.
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
                  text: "Diu, Daman & Diu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~2,000 words",
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
                  <h2>Nagoa Beach: Diu's Favourite Bay</h2>
                  <p>
                    <strong>Nagoa Beach</strong> is the single most popular
                    beach on the island of{" "}
                    <Link href="/blog/diu-travel-guide">Diu</Link>, part of
                    the coastal Union Territory of{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu
                    </Link>
                    . What sets it apart from Diu's other stretches of sand is
                    its shape — a wide, curving <strong>horseshoe bay</strong>{" "}
                    that wraps the coastline and, in doing so, shelters the
                    water inside it from the rougher open-sea currents you'll
                    find at beaches like{" "}
                    <Link href="/blog/ghoghla-beach-travel-guide">
                      Ghoghla
                    </Link>
                    . The result is calmer, more swimmable water than almost
                    anywhere else on the island, backed by a long line of
                    coconut and casuarina trees that give the whole bay a
                    genuinely tropical feel.
                  </p>
                  <p>
                    Nagoa isn't a hidden gem — it's the beach every Diu
                    itinerary eventually points to, and for good reason. It's
                    the easiest place on the island to actually get in the
                    water, the only beach with a real cluster of watersports
                    vendors, and a reliable spot for a clean, unhurried
                    sunset. It's also close enough to the fort and old town
                    that a half-day trip here fits comfortably into almost any
                    Diu itinerary without feeling rushed.
                  </p>
                  <p>
                    This guide covers everything you need to plan a visit —
                    timings, how to get there, what the watersports actually
                    cost, honest notes on swimming safety, where to eat
                    nearby, and a simple half-day plan you can follow start to
                    finish.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Nagoa Beach at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Diu island, Daman and Diu",
                        },
                        {
                          icon: "🚗",
                          label: "From Diu Town",
                          value: "~7–8 km (15–20 min)",
                        },
                        { icon: "🌊", label: "Shape", value: "Horseshoe / crescent bay" },
                        {
                          icon: "🏄",
                          label: "Known For",
                          value: "Calm water, water sports",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Free (watersports extra)",
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
                  <h2>Best Time to Visit Nagoa Beach</h2>
                  <p>
                    Diu's coastal climate is hot and humid for much of the
                    year, which makes the season you visit almost as
                    important as the time of day.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather (18–30°C) with calm seas makes this the ideal window for swimming, water sports, and lounging on the sand without the peak-summer heat.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, but swimmable",
                        text: "Temperatures climb well into the 30s. The sand gets uncomfortably hot at midday — plan beach time for early morning or the last couple of hours before sunset.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — rough seas",
                        text: "Heavy rain and choppier water make swimming inadvisable, and watersports vendors often shut down entirely for the season. Best avoided for a beach-focused visit.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak crowd",
                        text: "The busiest stretch of the year, with weekend day-trippers and holiday crowds filling the promenade and watersports queues — arrive early to beat the rush.",
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
                    <strong>Our pick:</strong> A weekday morning between
                    November and February — calm water, comfortable
                    temperatures, and a beach that isn't yet crowded with
                    day-trippers.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Nagoa Beach</h2>
                  <p>
                    Nagoa Beach sits roughly 7–8 km from Diu town, on the
                    western side of the island — close enough that it's an
                    easy half-day addition to any Diu itinerary rather than a
                    trip requiring its own day.
                  </p>
                  <ul>
                    <li>
                      <strong>From Diu town:</strong> Around 15–20 minutes by
                      auto-rickshaw, taxi, or rented moped/scooter — the road
                      is well-surfaced and flat the entire way.
                    </li>
                    <li>
                      <strong>Rented moped or scooter:</strong> The most
                      popular option among visitors staying in Diu town;
                      rentals are cheap and the ride out to Nagoa is short
                      and scenic.
                    </li>
                    <li>
                      <strong>Auto-rickshaw or taxi:</strong> Widely
                      available from the old town and bus stand area; agree
                      on a fare beforehand, especially for a round trip with
                      waiting time.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're also visiting
                    Gangeshwar Temple or Naida Caves, both sit roughly between
                    Diu town and Nagoa — it's worth combining them into one
                    loop rather than doubling back later.
                  </div>
                </section>

                {/* ── Water Sports ──────────────────────────────────────── */}
                <section id="water-sports">
                  <h2>Water Sports at Nagoa Beach</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="A calm coastal bay with clear water, evocative of the sheltered conditions that make Nagoa Beach suitable for water sports"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Nagoa is the only beach on the island with a real cluster
                    of watersports vendors, largely because its sheltered bay
                    makes the activities genuinely feasible where rougher
                    beaches elsewhere on Diu simply can't support them.
                  </p>
                  <ul>
                    <li>
                      <strong>Jet-skiing:</strong> The most popular option —
                      short rides along the bay, usually run by local
                      operators stationed along the main watersports stretch.
                    </li>
                    <li>
                      <strong>Banana boat rides:</strong> A group activity
                      that's especially popular with families and groups of
                      friends; the calm bay water makes it a comfortable
                      first-timer activity.
                    </li>
                    <li>
                      <strong>Parasailing:</strong> Available seasonally
                      depending on wind and operator availability — a good
                      way to see the horseshoe shape of the bay from above.
                    </li>
                    <li>
                      <strong>Paddle boats:</strong> A slower, low-key option
                      for couples or families who'd rather stay closer to
                      shore.
                    </li>
                  </ul>
                  <p>
                    Rates aren't fixed by any official tariff board — they're
                    negotiated directly with vendors on the beach, and it's
                    worth comparing a couple of stalls before committing.
                    Always check that a life jacket is provided and properly
                    fitted before any activity, and don't assume every
                    operator maintains the same safety standard.
                  </p>
                </section>

                {/* ── Promenade ─────────────────────────────────────────── */}
                <section id="promenade">
                  <h2>The Palm-Fringed Promenade & Camel Rides</h2>
                  <p>
                    Running along the back of the beach is a walkway lined
                    with coconut and casuarina trees — genuinely one of the
                    more pleasant beach promenades in the region, and a
                    popular spot for an evening stroll once the day's heat has
                    faded.
                  </p>
                  <ul>
                    <li>
                      <strong>Camel and pony rides:</strong> Available along
                      the sand, mostly aimed at families and children —
                      operators are easy to spot near the main entry point to
                      the beach.
                    </li>
                    <li>
                      <strong>Shaded walking stretch:</strong> The tree-lined
                      section behind the sand offers a rare bit of natural
                      shade on an otherwise fully exposed beach.
                    </li>
                    <li>
                      <strong>Photo stops:</strong> The curve of the bay is
                      easiest to appreciate from either end of the crescent
                      rather than the crowded centre — worth the short extra
                      walk.
                    </li>
                  </ul>
                </section>

                {/* ── Swimming Safety ───────────────────────────────────── */}
                <section id="swimming-safety">
                  <h2>Swimming Safety at Nagoa Beach</h2>
                  <p>
                    Nagoa's horseshoe shape genuinely does make it calmer and
                    safer for swimming than Diu's other beaches, and it's the
                    beach locals and tour guides most often recommend for
                    exactly that reason. That said, "safer" isn't the same as
                    "risk-free," and a few honest notes are worth keeping in
                    mind.
                  </p>
                  <ul>
                    <li>
                      <strong>Lifeguard coverage varies:</strong> Presence
                      isn't guaranteed at every hour of the day, particularly
                      outside peak visiting times — don't treat lifeguard
                      supervision as a given.
                    </li>
                    <li>
                      <strong>Stay within your depth:</strong> The water near
                      shore is calm and shallow, but conditions can change
                      further out toward the mouth of the bay — swim near
                      other bathers rather than venturing out alone.
                    </li>
                    <li>
                      <strong>Watch children closely:</strong> Even a calm,
                      sheltered beach warrants active supervision rather than
                      passive watching from the sand.
                    </li>
                    <li>
                      <strong>Check conditions after rain:</strong> Currents
                      and visibility can change noticeably following monsoon
                      showers or rough weather — err on the side of caution
                      if the sea looks unusually choppy.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🏊 Safety note:</strong> Sensible caution, not
                    reliance on lifeguards, is the right approach here — as
                    with any beach in India, personal awareness matters more
                    than assuming supervision is always in place.
                  </div>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food Shacks & Cafés Near Nagoa Beach</h2>
                  <p>
                    A row of small shacks and cafés lines the approach to the
                    beach, catering almost entirely to day-trippers — expect
                    casual, unpretentious food rather than a fine-dining
                    scene.
                  </p>
                  <ul>
                    <li>
                      <strong>Fresh seafood:</strong> Pomfret, prawns and
                      squid, usually grilled or fried, are the standout order
                      at most of the beachfront shacks.
                    </li>
                    <li>
                      <strong>Coconut water and cold drinks:</strong> Sold
                      directly off carts along the promenade — the easiest
                      way to cool down between swims.
                    </li>
                    <li>
                      <strong>Gujarati snacks:</strong> Farsan, bhajiya and
                      other light bites are common, reflecting the region's
                      strong Gujarati culinary influence.
                    </li>
                    <li>
                      <strong>Basic Indian & Chinese menus:</strong> Most
                      shacks run a simple, familiar menu aimed squarely at
                      tourists — reliable, if not especially memorable.
                    </li>
                  </ul>
                </section>

                {/* ── Sunset ────────────────────────────────────────────── */}
                <section id="sunset">
                  <h2>Sunset at Nagoa Beach</h2>
                  <p>
                    Nagoa's west-facing curve makes it one of the better
                    sunset spots on the island — the horseshoe bay catches
                    the evening light beautifully, and the crowd thins out
                    considerably as the watersports vendors wrap up for the
                    day. Walking toward either end of the crescent, away from
                    the main promenade, gets you a quieter, less crowded view
                    of the sky turning colour over the water.
                  </p>
                  <blockquote>
                    Time your visit so the last hour of daylight is spent
                    here rather than on the drive back — it's consistently
                    one of the better free experiences on the island.
                  </blockquote>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>A Half-Day Beach Plan</h2>
                  <p>
                    Nagoa comfortably fills a half-day without feeling
                    rushed — here's a simple plan that balances swimming,
                    water sports, food, and a proper sunset.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "3:00 PM",
                        title: "Arrive & Settle In",
                        color: "bg-amber-700",
                        activities: [
                          "Reach Nagoa from Diu town (15–20 min)",
                          "Pick a spot on the sand, scope out the promenade",
                          "Grab coconut water from a beachside cart",
                        ],
                      },
                      {
                        day: "3:30 PM",
                        title: "Swim & Water Sports",
                        color: "bg-sky-600",
                        activities: [
                          "Swim in the calm, sheltered bay water",
                          "Try jet-skiing, banana boat, or parasailing",
                          "Compare vendor rates before committing",
                        ],
                      },
                      {
                        day: "5:00 PM",
                        title: "Snacks & a Walk",
                        color: "bg-forest-600",
                        activities: [
                          "Refuel at a beachfront shack",
                          "Walk the palm-fringed promenade",
                          "Optional camel or pony ride for kids",
                        ],
                      },
                      {
                        day: "6:00 PM",
                        title: "Sunset",
                        color: "bg-purple-600",
                        activities: [
                          "Head toward either end of the crescent",
                          "Watch the sunset over the bay",
                          "Head back to Diu town as the light fades",
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
                    * Flip the order and arrive early morning instead if you'd
                    rather avoid the midday heat and afternoon crowds — the
                    same plan works just as well before noon.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown (Nagoa Beach visit)</h2>
                  <p>
                    Entry to the beach itself is free — most of the cost of a
                    visit comes down to how much time you spend on water
                    sports and food.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Splurge"].map(
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
                            "Transport to/from Diu town",
                            "₹100 (rented scooter)",
                            "₹300 (auto, one-way)",
                            "₹600 (taxi, round trip)",
                          ],
                          [
                            "Water sports",
                            "Skip / paddle boat ₹150",
                            "Banana boat ₹300–₹500",
                            "Jet-ski + parasailing ₹1,500+",
                          ],
                          ["Food & drinks", "₹150", "₹400", "₹800"],
                          ["Camel/pony ride", "Skip", "₹100–₹200", "₹200–₹300"],
                          ["Half-day total", "₹250–₹400", "₹800–₹1,200", "₹2,500+"],
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
                    * Water sports rates are negotiated with individual
                    vendors and can vary by season and demand — treat these
                    as rough guides, not fixed prices.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Nagoa Beach</h2>
                  <ul>
                    <li>
                      <strong>Carry your own sun protection:</strong> There's
                      very little natural shade outside the tree-lined
                      promenade — sunscreen, a hat, and sunglasses are
                      genuinely necessary, not optional extras.
                    </li>
                    <li>
                      <strong>Negotiate watersports rates upfront:</strong>{" "}
                      There's no fixed government tariff, so agree on the
                      price and duration before you start any activity.
                    </li>
                    <li>
                      <strong>Go early or on a weekday for a quieter beach:</strong>{" "}
                      Weekends and the December–January peak bring genuine
                      crowds, especially around the main watersports stretch.
                    </li>
                    <li>
                      <strong>Respect the beach's cleaner character:</strong>{" "}
                      Nagoa is noticeably cleaner and quieter than many
                      mainland tourist beaches — carry your trash out and
                      help keep it that way.
                    </li>
                    <li>
                      <strong>Don't over-rely on lifeguards:</strong> Coverage
                      isn't constant — swim within your ability and keep an
                      eye on children at all times.
                    </li>
                    <li>
                      <strong>Bring cash:</strong> Beach vendors, food shacks
                      and ride operators mostly deal in cash rather than
                      cards or digital payments.
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
                          "Visit early morning or late afternoon for the best light",
                          "Carry sunscreen, a hat, and plenty of water",
                          "Compare a couple of watersports vendors before booking",
                          "Walk to either end of the crescent for a quieter view",
                          "Carry cash for shacks, rides, and vendors",
                          "Time your visit to catch the sunset",
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
                          "Assume lifeguards are always on duty",
                          "Swim far from shore or away from other bathers",
                          "Skip agreeing on watersports rates beforehand",
                          "Litter on the sand or promenade",
                          "Visit at midday in peak summer without shade",
                          "Rely on card payments at beach vendors",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Nagoa with a
                    visit to{" "}
                    <Link href="/blog/diu-fort-travel-guide">Diu Fort</Link>{" "}
                    and the old town in the morning, or with{" "}
                    <Link href="/blog/ghoghla-beach-travel-guide">
                      Ghoghla Beach
                    </Link>{" "}
                    for a fuller sense of how the island's beaches differ from
                    each other.
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
                  "Nagoa Beach",
                  "Diu",
                  "Daman and Diu",
                  "Beaches",
                  "Water Sports",
                  "Swimming",
                  "Sunset Points",
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

              <RelatedPostsGrid currentSlug="nagoa-beach-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="nagoa-beach-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
