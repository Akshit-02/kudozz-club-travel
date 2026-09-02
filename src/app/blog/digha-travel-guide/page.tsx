// src/app/blog/digha-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Digha Travel Guide: Beaches, Marine Aquarium & Tips",
  description:
    "Complete Digha guide — New Digha and Old Digha, the beach promenade, Marine Aquarium & Research Centre, how to reach from Kolkata by train or road, and where to stay.",
  keywords:
    "Digha, Digha beach, New Digha, Old Digha, Digha Marine Aquarium, Digha Science Centre, Chandaneswar Temple, Shankarpur, Digha how to reach, Digha from Kolkata, West Bengal beach",
  openGraph: {
    title: "Digha Travel Guide: Beaches, Marine Aquarium & Tips",
    description:
      "West Bengal's most popular beach town — the long promenade, Marine Aquarium & Research Centre, and the closest seaside getaway from Kolkata.",
    url: "https://club.kudozz.in/blog/digha-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "Sandy beach coastline evocative of Digha, West Bengal's most popular seaside town on the Bay of Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Digha Travel Guide: Beaches, Marine Aquarium & Tips",
    description:
      "New Digha, Old Digha, the beach promenade, and the Marine Aquarium — the complete guide to Bengal's favourite beach getaway.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/digha-travel-guide",
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
          headline: "Digha Travel Guide: Beaches, Marine Aquarium & Tips",
          description:
            "Complete Digha guide — New Digha and Old Digha, the beach promenade, Marine Aquarium & Research Centre, how to reach from Kolkata by train or road, and where to stay.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/digha-travel-guide",
          },
          keywords:
            "Digha, New Digha, Old Digha, Marine Aquarium, Digha Science Centre, Shankarpur",
          about: {
            "@type": "Place",
            name: "Digha",
            address: {
              "@type": "PostalAddress",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Digha",
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
    q: "What is the difference between New Digha and Old Digha?",
    a: "New Digha is the more developed stretch, with a wide paved promenade, most of the hotels, and organised beachfront activities. Old Digha, a couple of kilometres away, is the original, more low-key part of town with a rockier shoreline and a quieter, older-town feel. Most visitors base themselves in New Digha and visit Old Digha for a change of pace.",
  },
  {
    q: "How do I reach Digha from Kolkata?",
    a: "By train, direct services run from Howrah to Digha railway station, taking roughly 3.5 hours. By road, it's about 185 km via NH116B, a comfortable 4-hour drive. Digha is easily doable as a long weekend trip or even a very long day trip from Kolkata.",
  },
  {
    q: "Is it safe to swim at Digha beach?",
    a: "Swimming is generally fine within marked, lifeguard-monitored zones during calm weather, but Digha's waters can have strong undertows, especially around high tide and during the monsoon months (roughly July-September). Always heed local warning flags and avoid swimming alone or venturing beyond the marked safe zones.",
  },
  {
    q: "What is the Digha Marine Aquarium?",
    a: "The Marine Aquarium & Research Centre, run by Digha's fisheries research institute, displays a range of marine and freshwater species from Bengal's coastal waters. It's a popular family attraction and one of the few dedicated marine aquariums along India's eastern coast.",
  },
  {
    q: "Can I visit Mandarmani from Digha?",
    a: "Yes — Mandarmani is roughly 30 km up the coast from Digha, about 45 minutes to an hour by road, and is commonly combined with a Digha trip as part of a coastal loop that also takes in Tajpur. See our full Mandarmani guide for details.",
  },
  {
    q: "What is the best time to visit Digha?",
    a: "October to February offers the most pleasant weather for beach days and walking the promenade. March to June gets increasingly hot, and the monsoon months (roughly July-September) bring rough seas and higher risk of strong undertows, making swimming less advisable.",
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
  { id: "introduction", title: "Bengal's Favourite Beach Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Digha", level: 2 },
  { id: "attractions", title: "Beaches & Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DighaGuidePage() {
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
              alt="Sandy beach coastline evocative of Digha, West Bengal's most popular seaside town on the Bay of Bengal"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Digha", href: null },
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
                "Digha",
                "West Bengal",
                "Beach",
                "Marine Aquarium",
                "Weekend Getaway",
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
              Digha: Beaches, Marine Aquarium & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              West Bengal's most popular beach town and the closest seaside
              escape from Kolkata — a long promenade, the Marine Aquarium &
              Research Centre, and easy access to quieter coastal towns
              nearby.
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
                  text: "Purba Medinipur, West Bengal",
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
                  <h2>Bengal's Favourite Beach Town</h2>
                  <p>
                    <strong>Digha</strong> is{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    's most popular beach destination and, by a wide margin,
                    the closest seaside getaway from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link> —
                    a straightforward 3.5 to 4-hour trip by train or road
                    that has made it the default weekend beach escape for
                    generations of Kolkatans.
                  </p>
                  <p>
                    The town is really two adjoining stretches: <strong>New
                    Digha</strong>, the more developed area with a wide
                    paved promenade, most hotels, and organised beach
                    activities, and <strong>Old Digha</strong>, the original
                    and quieter part of town a short distance away, with a
                    rockier shoreline and an older, slower character.
                  </p>
                  <p>
                    Beyond the beach itself, Digha's Marine Aquarium &
                    Research Centre and Science Centre give it more to do
                    than sun and sand alone, while nearby Shankarpur's
                    fishing harbour and the temple town of Chandaneswar,
                    just across the Odisha border, make easy half-day
                    detours.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Digha at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Purba Medinipur, West Bengal",
                        },
                        {
                          icon: "🚆",
                          label: "From Kolkata",
                          value: "~3.5 hr train, ~4 hr road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏖️",
                          label: "Known For",
                          value: "Beach promenade, Marine Aquarium",
                        },
                        {
                          icon: "🐠",
                          label: "Nearby",
                          value: "Shankarpur, Chandaneswar",
                        },
                        {
                          icon: "🛏️",
                          label: "Stay",
                          value: "Widest hotel range on this coast",
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
                  <h2>Best Time to Visit Digha</h2>
                  <p>
                    Digha is a popular year-round weekend destination, but
                    sea conditions and temperature swing enough by season to
                    matter for planning.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, pleasant weather makes it ideal for beach walks, the promenade, and outdoor activities. The busiest season, especially on weekends and around holidays.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot",
                        text: "Increasing heat makes midday beach time uncomfortable; mornings and evenings remain pleasant enough for a shorter trip.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — swim with caution",
                        text: "Rough seas, high tides, and stronger undertows make swimming risky; the beach itself remains dramatic and worth a visit if you're careful and stay out of the water.",
                      },
                      {
                        season: "Weekends year-round",
                        emoji: "🚌",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Heavier crowds",
                        text: "As the default quick getaway from Kolkata, Digha gets busy on weekends and long holidays regardless of season — plan ahead if you want a quieter visit.",
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
                    most comfortable weather — go on a weekday if you'd
                    rather skip the weekend crowds that this close-to-Kolkata
                    beach reliably draws.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Digha</h2>
                  <p>
                    Digha is one of the most accessible beach destinations
                    from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>,
                    reachable comfortably by both train and road.
                  </p>
                  <ul>
                    <li>
                      <strong>By train:</strong> Direct trains run from
                      Howrah to Digha railway station, taking roughly 3.5
                      hours — the most convenient option for most travellers,
                      with multiple daily departures.
                    </li>
                    <li>
                      <strong>By road:</strong> About 185 km from Kolkata via
                      NH116B, a comfortable drive of roughly 4 hours by car
                      or bus, with regular state and private bus services
                      also available.
                    </li>
                    <li>
                      <strong>Getting around Digha:</strong> Auto-rickshaws,
                      e-rickshaws (toto), and rented cycles cover the short
                      distances between New Digha, Old Digha, and nearby
                      attractions with ease.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book train tickets or hotel
                    rooms well ahead for weekends and long holidays — Digha's
                    proximity to Kolkata means it fills up fast on Fridays
                    and before public holidays.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Beaches & Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Beach coastline similar in character to Digha's shoreline, West Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>New Digha Beach & Promenade</h3>
                  <p>
                    The main draw — a long, well-maintained beach drive and
                    promenade lined with hotels, food stalls, and the
                    steady rhythm of the Bay of Bengal. Evenings here are
                    lively, with families strolling, vendors selling snacks
                    and shells, and horse and camel rides along the sand.
                  </p>
                  <h3>Old Digha Beach</h3>
                  <p>
                    A couple of kilometres from New Digha, Old Digha offers
                    a rockier, more low-key shoreline and an older-town
                    feel, with fewer crowds and a slower pace — a good
                    contrast if New Digha's promenade feels too busy.
                  </p>
                  <h3>Marine Aquarium & Research Centre</h3>
                  <p>
                    Run by a Bengal fisheries research institute, this
                    aquarium displays marine and freshwater species drawn
                    largely from the region's coastal and river waters. It's
                    one of very few dedicated marine aquariums on India's
                    eastern coast and a popular stop for families.
                  </p>
                  <h3>Digha Science Centre</h3>
                  <p>
                    An interactive science museum with exhibits geared
                    mainly toward children and families, offering an
                    easy indoor break from the beach, especially useful on a
                    particularly hot or rainy day.
                  </p>
                  <h3>Chandaneswar Temple & Shankarpur</h3>
                  <p>
                    Just across the Odisha border, Chandaneswar Temple is a
                    popular half-day pilgrimage detour dedicated to Lord
                    Shiva. In the other direction, Shankarpur's fishing
                    harbour offers a glimpse of the working coast behind
                    Digha's tourist beaches — both are easy add-ons if you
                    have an extra day.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Digha</h2>
                  <p>
                    Digha has by far the widest range of accommodation on
                    this stretch of Bengal coast, concentrated mainly in New
                    Digha along and just behind the promenade.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Simple lodges near the bus/train station",
                          "Basic guesthouses a street back from the beach",
                          "Government tourist lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Beachfront hotels with sea-facing rooms",
                          "Mid-size resorts in New Digha",
                          "Family-friendly hotels with pools",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "🏖️",
                        range: "₹6,000–₹12,000+/night",
                        picks: [
                          "Larger beachfront resort properties",
                          "Hotels with sea-view suites and spas",
                          "Group-friendly cottage-style stays",
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
                        title: "New Digha & Promenade",
                        color: "bg-amber-700",
                        activities: [
                          "Morning train/road arrival, check in",
                          "Afternoon at New Digha beach and promenade",
                          "Marine Aquarium & Research Centre visit",
                          "Evening walk on the beach drive for sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Old Digha & Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Morning at Old Digha's quieter shoreline",
                          "Optional detour to Shankarpur or Chandaneswar",
                          "Depart for Kolkata, or continue up the coast",
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
                    * Many travellers extend the trip up the coast to{" "}
                    <Link href="/blog/mandarmani-travel-guide">
                      Mandarmani
                    </Link>{" "}
                    for a quieter beach-drive experience after Digha's
                    bigger crowds.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Digha</h2>
                  <ul>
                    <li>
                      <strong>Beachfront seafood stalls:</strong> Fresh
                      grilled and fried fish, prawns, and crab from the
                      day's local catch, available all along the promenade.
                    </li>
                    <li>
                      <strong>Bengali thali restaurants:</strong> Everyday
                      rice-fish-vegetable thalis at reasonable prices,
                      found throughout New and Old Digha.
                    </li>
                    <li>
                      <strong>Hotel restaurants:</strong> Wider, more
                      polished menus attached to the mid-range and comfort
                      hotels, a good option for a more relaxed sit-down
                      meal.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Agree on prices before
                    ordering at beachfront stalls — rates aren't always
                    displayed, and it's worth confirming upfront, especially
                    for seafood priced by weight.
                  </div>
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
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                          ["Accommodation/night", "₹1,200", "₹3,500", "₹8,000"],
                          [
                            "Train (round trip)",
                            "₹400",
                            "₹900",
                            "₹1,800",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Aquarium + Science Centre entry", "₹100", "₹100", "₹100"],
                          ["Local transport/day", "₹200", "₹400", "₹800"],
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
                    * Figures are per person, per day (except train, a
                    round-trip figure). Entry fees are approximate and
                    modest across all tiers.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Digha</h2>
                  <ul>
                    <li>
                      <strong>Heed high-tide and monsoon warnings:</strong>{" "}
                      Digha's waters can develop strong undertows,
                      especially around high tide and during the monsoon —
                      always swim within marked, lifeguard-monitored zones.
                    </li>
                    <li>
                      <strong>Book ahead for weekends:</strong> As the
                      closest beach to Kolkata, Digha's hotels and trains
                      fill up fast on Fridays and before public holidays.
                    </li>
                    <li>
                      <strong>Agree on prices upfront:</strong> Beachfront
                      food stalls and rides (horse, camel) don't always
                      post fixed rates — confirm before you order or ride.
                    </li>
                    <li>
                      <strong>Carry sun protection:</strong> The open beach
                      and promenade offer little shade through the middle
                      of the day — sunscreen and a hat go a long way.
                    </li>
                    <li>
                      <strong>Consider a coastal loop:</strong> Combine
                      Digha with{" "}
                      <Link href="/blog/mandarmani-travel-guide">
                        Mandarmani
                      </Link>{" "}
                      up the coast for a fuller Bengal beach trip.
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
                          "Swim only within marked, lifeguard-monitored zones",
                          "Book hotels and trains ahead for weekends",
                          "Visit both New Digha and quieter Old Digha",
                          "Try the beachfront grilled seafood",
                          "Carry sunscreen and a hat for the open promenade",
                          "Pair the trip with Mandarmani up the coast",
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
                          "Swim during monsoon high tide or rough seas",
                          "Ignore posted lifeguard warning flags",
                          "Assume walk-up rooms on a weekend without booking",
                          "Skip agreeing on prices before ordering seafood",
                          "Wander beyond marked safe-swimming zones",
                          "Expect Old Digha's atmosphere to match New Digha's",
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
                    <strong>🗺️ Extend the trip:</strong> Head up the coast to{" "}
                    <Link href="/blog/mandarmani-travel-guide">
                      Mandarmani
                    </Link>{" "}
                    for its famous beach drive, or return to{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                    for onward travel — see our full{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal travel guide
                    </Link>{" "}
                    for more coastal and heritage destinations across the
                    state.
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
                  "Digha",
                  "West Bengal",
                  "Beach",
                  "Bay of Bengal",
                  "Weekend Getaway",
                  "Marine Aquarium",
                  "Kolkata Day Trip",
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

              <RelatedPostsGrid currentSlug="digha-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="digha-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
