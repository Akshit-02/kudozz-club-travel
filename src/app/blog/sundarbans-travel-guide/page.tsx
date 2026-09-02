// src/app/blog/sundarbans-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sundarbans Travel Guide: Tiger Safari, Permits & Tips",
  description:
    "Complete Sundarbans guide — Royal Bengal Tiger safaris, mangrove boat routes, permits, how to reach from Kolkata, where to stay on boat-and-lodge packages, and a full visit plan.",
  keywords:
    "Sundarbans travel guide, Sundarbans Tiger Reserve, Royal Bengal Tiger safari, Sundarbans permit, Sudhanyakhali watchtower, Sajnekhali, Dobanki canopy walk, Godkhali Gosaba, how to reach Sundarbans from Kolkata, Sundarbans boat safari, mangrove forest West Bengal, Bonbibi",
  openGraph: {
    title: "Sundarbans Travel Guide: Tiger Safari, Permits & Tips",
    description:
      "The world's largest mangrove forest and a UNESCO World Heritage Site — Royal Bengal Tiger territory, winding tidal creeks, and a way of life built around the Bonbibi legend.",
    url: "https://club.kudozz.in/blog/sundarbans-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Winding waterway through mangrove forest, evoking the Sundarbans' tidal creeks",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sundarbans Travel Guide: Tiger Safari, Permits & Tips",
    description:
      "Royal Bengal Tiger territory, tidal mangrove creeks, and the Bonbibi legend — the complete Sundarbans guide.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sundarbans-travel-guide",
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
          headline: "Sundarbans Travel Guide: Tiger Safari, Permits & Tips",
          description:
            "Complete Sundarbans guide — Royal Bengal Tiger safaris, mangrove boat routes, permits, how to reach from Kolkata, where to stay on boat-and-lodge packages, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
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
            "@id": "https://club.kudozz.in/blog/sundarbans-travel-guide",
          },
          keywords:
            "Sundarbans, Royal Bengal Tiger, mangrove forest, UNESCO Heritage, Tiger Reserve, boat safari, West Bengal",
          about: {
            "@type": "Place",
            name: "Sundarbans",
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
                name: "Sundarbans",
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
    q: "What are the chances of actually seeing a tiger in the Sundarbans?",
    a: "Genuinely low — the Royal Bengal Tigers here are famously elusive, swim between islands, and are camouflaged perfectly in the mangrove undergrowth. Most visitors come away without a sighting. Go for the mangrove ecosystem, birdlife, crocodiles, and boat journey itself, and treat any tiger sighting as a rare bonus, not the guaranteed centrepiece.",
  },
  {
    q: "Do I need a permit to visit the Sundarbans Tiger Reserve?",
    a: "Yes. Entry into the core and buffer zones of the Sundarbans Tiger Reserve requires a Forest Department permit, which is almost always arranged for you by the registered tour operator running your boat package — independent, permit-free travel into the reserve isn't practical for most visitors.",
  },
  {
    q: "How do I reach the Sundarbans from Kolkata?",
    a: "Most trips start with a 2-2.5 hour road journey from Kolkata to Godkhali or Sonakhali, the main boarding points, followed by a boat or launch into the delta. Nearly all visits are run as multi-day boat-stay packages arranged through registered operators rather than independent day trips.",
  },
  {
    q: "How many days should I spend in the Sundarbans?",
    a: "2 nights / 3 days on a boat-stay package is the practical minimum to cover 2-3 watchtowers and creek routes without feeling rushed. Serious wildlife and bird watchers often extend to 3 nights for a better shot at sightings and calmer photography time.",
  },
  {
    q: "What is the best time to visit the Sundarbans?",
    a: "October to March, when the weather is cool and comfortable for long hours on open boats and the water is calmer. Avoid the monsoon months of June to September, when rough water and flooding often close core zones to visitors.",
  },
  {
    q: "Who is Bonbibi and why does she matter to Sundarbans visitors?",
    a: "Bonbibi is the forest goddess worshipped across Sundarbans villages by both Hindu and Muslim communities, believed to protect honey-collectors, fishermen, and woodcutters who enter tiger territory. Small shrines to her dot the delta's edge villages, and her legend is often recounted by local guides as part of the region's living culture.",
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
  { id: "introduction", title: "The World's Largest Mangrove Forest", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Sundarbans", level: 2 },
  { id: "things-to-do", title: "Wildlife, Safaris & Culture", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SundarbansGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Winding waterway through mangrove forest, evoking the Sundarbans' tidal creeks"
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
                { label: "Sundarbans", href: null },
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
                "Sundarbans",
                "Royal Bengal Tiger",
                "Mangrove Forest",
                "UNESCO Heritage",
                "West Bengal",
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
              Sundarbans: Tiger Safari, Permits & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The world's largest mangrove forest and delta — Royal Bengal
              Tiger territory, winding tidal creeks, and a UNESCO World
              Heritage Site reached by boat from the edge of Kolkata.
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
                  text: "South 24 Parganas, West Bengal",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>The World's Largest Mangrove Forest</h2>
                  <p>
                    The <strong>Sundarbans</strong> is a vast tidal delta
                    where the Ganges, Brahmaputra, and Meghna rivers meet the
                    Bay of Bengal, spread across southern{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>{" "}
                    and neighbouring Bangladesh. It is the largest contiguous
                    mangrove forest on Earth, a UNESCO World Heritage Site,
                    and the only mangrove ecosystem in the world known to
                    support a resident population of tigers.
                  </p>
                  <p>
                    That population — the <strong>Royal Bengal Tiger</strong> —
                    is the reason most visitors make the journey, but the
                    Sundarbans is worth visiting even without a sighting.
                    Boats thread through narrow tidal creeks lined with
                    stilt-rooted mangrove trees, saltwater crocodiles bask on
                    muddy banks, and watchtowers overlook waterholes where
                    spotted deer and wild boar come to drink. It's a
                    landscape unlike anywhere else in India, reachable in a
                    day trip's distance from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                    yet feeling like a different world entirely.
                  </p>
                  <p>
                    Beyond wildlife, the Sundarbans has a distinct human
                    culture built around living alongside tigers — fishing
                    villages on the delta's inhabited fringe, traditions of{" "}
                    <strong>Mouli</strong> (honey-collectors) who enter the
                    forest each spring to harvest wild honey at real personal
                    risk, and the shared worship of{" "}
                    <strong>Bonbibi</strong>, the forest goddess believed to
                    protect anyone who must enter tiger territory to make a
                    living.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐅</span> Sundarbans at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South 24 Parganas, West Bengal",
                        },
                        {
                          icon: "🚗",
                          label: "From Kolkata",
                          value: "~2-2.5 hr road + boat",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🐅",
                          label: "Known For",
                          value: "Royal Bengal Tiger, Mangroves",
                        },
                        {
                          icon: "🛶",
                          label: "Access",
                          value: "Boat-stay packages only",
                        },
                        {
                          icon: "🏆",
                          label: "Status",
                          value: "UNESCO World Heritage Site",
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
                  <h2>Best Time to Visit the Sundarbans</h2>
                  <p>
                    The delta's tides and weather both shape when a visit is
                    comfortable and when core zones are even open.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and comfortable for long hours on an open boat deck. Calmer water makes creek navigation smoother, and this is the most reliable window for watchtower visits.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, workable",
                        text: "Increasingly hot and humid by April-May, but still workable — fewer crowds than winter, and mornings on the water remain pleasant.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain, rough tidal water, and frequent closures of core zones make this the least practical window. Cyclone risk also rises in this stretch.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🦩",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best for birding",
                        text: "Peak season for migratory birds along the creeks and mudflats, alongside the best weather of the year — book boat packages well ahead.",
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
                    cool, dry weather, calmer creeks, and the best odds of a
                    comfortable multi-day boat stay.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Sundarbans</h2>
                  <p>
                    The Sundarbans has no direct rail or air access — every
                    visit combines a road journey out of{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                    with a boat leg into the delta.
                  </p>
                  <ul>
                    <li>
                      <strong>By road to Godkhali or Sonakhali:</strong> Both
                      are the main boarding points for Sundarbans boat
                      packages, roughly 2 to 2.5 hours by car or bus from
                      Kolkata.
                    </li>
                    <li>
                      <strong>By boat/launch from the boarding point:</strong>{" "}
                      From Godkhali or Sonakhali, a boat or launch carries
                      visitors into the delta toward Gosaba and the reserve's
                      watchtowers — almost always as part of a pre-booked
                      package rather than an ad-hoc arrangement.
                    </li>
                    <li>
                      <strong>Via Gosaba:</strong> A key transit and
                      accommodation hub inside the delta, where many
                      boat-stay operators are based and from which day
                      excursions to the core zone depart.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a registered tour
                    operator's multi-day boat-stay package rather than trying
                    to arrange independent transport — permits, core-zone
                    access, and safe navigation of tidal creeks are all
                    handled as part of these packages.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Wildlife, Safaris & Culture</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Mangrove-lined tidal creek in the Sundarbans delta"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Boat Safaris Through the Creeks</h3>
                  <p>
                    The core Sundarbans experience is a slow boat safari
                    through narrow tidal creeks, watching the mangrove wall
                    for movement. <strong>Sudhanyakhali</strong> and{" "}
                    <strong>Sajnekhali</strong> are the reserve's best-known
                    watchtowers, each overlooking a waterhole where deer,
                    wild boar, and — very occasionally — a tiger come into
                    view. Sightings are rare enough that most operators are
                    upfront about it: come for the ecosystem and the chance,
                    not a guarantee.
                  </p>
                  <h3>Dobanki Canopy Walk</h3>
                  <p>
                    A raised metal walkway threading through the mangrove
                    canopy at Dobanki, letting visitors look down into the
                    forest and waterholes from above — a different, and
                    often more comfortable, vantage point than a boat deck
                    for watching wildlife move below.
                  </p>
                  <h3>Beyond Tigers: Crocodiles, Deer & Birdlife</h3>
                  <p>
                    Saltwater crocodiles are a far more reliable sighting
                    than tigers, often seen basking on exposed mudbanks at
                    low tide. Spotted deer graze in clearings near
                    watchtowers, and the delta supports an exceptional range
                    of resident and migratory birds — kingfishers, herons,
                    and raptors among them — making the Sundarbans as much a
                    birding destination as a tiger one.
                  </p>
                  <h3>Gosaba, Fishing Villages & the Bonbibi Legend</h3>
                  <p>
                    The inhabited fringe of the delta around Gosaba is worth
                    slowing down for — stilt houses, fishing boats returning
                    with the tide, and small roadside shrines to Bonbibi, the
                    folk goddess whose legend is recounted across the
                    Sundarbans by both Hindu and Muslim communities as
                    protection for anyone entering the forest to fish, cut
                    wood, or collect honey.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in the Sundarbans</h2>
                  <p>
                    Almost all Sundarbans visits are structured as a
                    multi-day package combining lodging (afloat or on the
                    delta's inhabited islands) with the boat safaris
                    themselves, mostly based around Gosaba and Sonakhali.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Simple guesthouses in Gosaba",
                          "Basic forest-fringe homestays",
                          "Shared-cabin boat packages",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹6,500/night",
                        picks: [
                          "Eco-resorts near the reserve buffer",
                          "Private-room boat-stay packages",
                          "Riverside lodges with guided safaris",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🛥️",
                        range: "₹8,000–₹18,000+/night",
                        picks: [
                          "Multi-day cruise-boat packages",
                          "Premium eco-resorts with naturalist guides",
                          "Full-board private-launch itineraries",
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
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Kolkata to Gosaba, First Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Morning road transfer to Godkhali/Sonakhali",
                          "Board the boat, transfer into the delta",
                          "Afternoon creek cruise, check in to boat/lodge",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Core Zone Watchtowers",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning safari to Sudhanyakhali watchtower",
                          "Midday cruise toward Sajnekhali",
                          "Afternoon Dobanki canopy walk",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Village Life & Return",
                        color: "bg-forest-600",
                        activities: [
                          "Morning stop at a fishing village near Gosaba",
                          "Visit a roadside Bonbibi shrine",
                          "Return boat and road transfer to Kolkata",
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
                    * Travellers with more time sometimes extend toward{" "}
                    <Link href="/blog/gangasagar-travel-guide">
                      Gangasagar
                    </Link>
                    , at Sagar Island where the delta meets the Bay of
                    Bengal, for a very different, pilgrimage-focused stop.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in the Sundarbans</h2>
                  <ul>
                    <li>
                      <strong>Boat-package meals:</strong> Most visitors eat
                      as part of their boat-stay package — simple Bengali
                      thalis with rice, dal, and freshwater or brackish-water
                      fish curry, cooked on board or at the lodge.
                    </li>
                    <li>
                      <strong>Local fish and prawns:</strong> The delta's
                      fishing economy means fresh catch — including the
                      region's prized prawns — features heavily on menus
                      close to Gosaba and Sonakhali.
                    </li>
                    <li>
                      <strong>Roadside stalls at Godkhali/Sonakhali:</strong>{" "}
                      Basic tea stalls and snack counters near the boarding
                      jetties, useful for a quick breakfast before boarding.
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
                            "Boat-stay package/night",
                            "₹2,000",
                            "₹4,500",
                            "₹10,000",
                          ],
                          ["Road transfer (round trip)", "₹1,000", "₹2,000", "₹3,500"],
                          ["Food/day (if separate)", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Forest permit & entry fees",
                            "₹300",
                            "₹300",
                            "₹300",
                          ],
                          ["Local guide/naturalist", "Included", "Included", "Included"],
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
                    * Figures are per person, per day, and are estimates —
                    most Sundarbans packages bundle stay, meals, permits, and
                    boat safaris together rather than pricing them
                    separately.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting the Sundarbans</h2>
                  <ul>
                    <li>
                      <strong>Book through a registered operator:</strong>{" "}
                      Permits, core-zone access, and safe navigation of tidal
                      creeks all depend on a licensed operator — this isn't
                      an independent-travel destination.
                    </li>
                    <li>
                      <strong>Lower your tiger-sighting expectations:</strong>{" "}
                      Go in with the ecosystem, birdlife, and boat journey as
                      the main draw — a tiger sighting is a bonus, not a
                      guarantee, on almost every visit.
                    </li>
                    <li>
                      <strong>Pack for sun and insects:</strong> Long hours
                      on open boat decks call for sun protection, a hat, and
                      mosquito repellent, especially near dawn and dusk.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is very limited
                      once inside the delta — withdraw what you need before
                      leaving Kolkata.
                    </li>
                    <li>
                      <strong>Respect the core zone rules:</strong> Loud
                      noise and leaving the boat/watchtower in restricted
                      areas are prohibited for safety as well as
                      conservation reasons.
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
                          "Book a registered tour operator's boat package",
                          "Carry binoculars for birding and distant sightings",
                          "Pack sun protection and mosquito repellent",
                          "Carry enough cash for the whole trip",
                          "Ask your guide about the Bonbibi legend",
                          "Visit multiple watchtowers, not just one",
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
                          "Expect a guaranteed tiger sighting",
                          "Attempt independent core-zone entry without a permit",
                          "Leave the boat or watchtower in restricted areas",
                          "Travel during the monsoon months (Jun-Sep)",
                          "Make loud noise near watchtowers or waterholes",
                          "Skip sun protection on long open-deck days",
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
                    <strong>🗺️ Extend the trip:</strong> Combine the
                    Sundarbans with a stop in{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                    on either end of your journey, or continue on to{" "}
                    <Link href="/blog/gangasagar-travel-guide">
                      Gangasagar
                    </Link>{" "}
                    at Sagar Island, where the delta meets the Bay of Bengal.
                    For more of the state, see our full{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal travel guide
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
                  "Sundarbans",
                  "Royal Bengal Tiger",
                  "West Bengal",
                  "Mangrove Forest",
                  "UNESCO Heritage",
                  "Tiger Reserve",
                  "Boat Safari",
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

              <RelatedPostsGrid currentSlug="sundarbans-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sundarbans-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
