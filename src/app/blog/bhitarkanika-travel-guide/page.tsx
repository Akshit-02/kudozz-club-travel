// src/app/blog/bhitarkanika-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bhitarkanika Guide: Mangroves & Crocodiles",
  description:
    "Complete Bhitarkanika guide — India's second-largest mangrove ecosystem, saltwater crocodile boat safaris, Gahirmatha's Olive Ridley turtle nesting, and a full visit plan.",
  keywords:
    "Bhitarkanika travel guide, Bhitarkanika mangroves, saltwater crocodile Odisha, Gahirmatha turtle nesting, Olive Ridley turtles, Kendrapara, how to reach Bhitarkanika, Odisha wildlife",
  openGraph: {
    title: "Bhitarkanika Guide: Mangroves & Crocodiles",
    description:
      "India's second-largest mangrove ecosystem, some of the country's largest saltwater crocodiles, and a globally significant sea-turtle nesting beach — the complete Bhitarkanika guide.",
    url: "https://club.kudozz.in/blog/bhitarkanika-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Clear river winding through green forest, evoking Bhitarkanika's mangrove creeks and tidal waterways in Kendrapara, Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhitarkanika Guide: Mangroves & Crocodiles",
    description:
      "India's second-largest mangrove ecosystem and a globally significant sea-turtle nesting beach — the complete Bhitarkanika guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bhitarkanika-travel-guide",
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
          headline: "Bhitarkanika Guide: Mangroves & Crocodiles",
          description:
            "Complete Bhitarkanika guide — India's second-largest mangrove ecosystem, saltwater crocodile boat safaris, Gahirmatha's Olive Ridley turtle nesting, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/bhitarkanika-travel-guide",
          },
          keywords:
            "Bhitarkanika, Mangroves, Odisha, Saltwater Crocodiles, Gahirmatha",
          about: {
            "@type": "Place",
            name: "Bhitarkanika",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha",
                item: "https://club.kudozz.in/blog/odisha-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Bhitarkanika",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How large are the crocodiles here?",
    a: "Bhitarkanika is home to some of the largest saltwater crocodiles recorded in India, with several documented specimens exceeding 20 feet. It's genuinely one of the best places in the country to see large saltwater crocodiles in their natural habitat.",
  },
  {
    q: "When is turtle nesting season at Gahirmatha?",
    a: "The mass nesting (arribada) of Olive Ridley turtles typically happens in a relatively short window, often around February-March, though exact timing shifts year to year with weather and lunar cycles. Check current-year timing with the forest department rather than relying on fixed dates.",
  },
  {
    q: "How far is Bhitarkanika from Bhubaneswar?",
    a: "Roughly 140-160 km depending on the exact boat-launch point used, a 3-4 hour drive followed by a boat journey into the park.",
  },
  {
    q: "Is it a day trip?",
    a: "It can be done as a long day trip from Bhubaneswar or Cuttack, but an overnight stay near the park lets you fit in both a dawn and dusk boat safari, which meaningfully improves wildlife-viewing odds.",
  },
  {
    q: "Do I need to book the boat safari in advance?",
    a: "Yes — boats and forest department permits should be arranged ahead of arrival, especially in peak season (Dec-Feb), since availability is limited and demand is high on weekends and holidays.",
  },
  {
    q: "What is the best time to visit Bhitarkanika?",
    a: "December to February for comfortable weather, good crocodile basking activity, and clearer water for boat safaris.",
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
  { id: "introduction", title: "A Mangrove Wilderness on the Bay of Bengal", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bhitarkanika", level: 2 },
  { id: "things-to-do", title: "Boat Safaris, Crocodiles & Turtles", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BhitarkanikaGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Clear river winding through green forest, evoking Bhitarkanika's mangrove creeks and tidal waterways in Kendrapara, Odisha"
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
                { label: "Odisha", href: "/blog/odisha-travel-guide" },
                { label: "Bhitarkanika", href: null },
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
              {["Bhitarkanika", "Mangroves", "Odisha", "Saltwater Crocodiles", "Gahirmatha"].map(
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
              Bhitarkanika Guide: Mangroves & Crocodiles
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              India&apos;s second-largest mangrove ecosystem, home to some of
              the country&apos;s largest saltwater crocodiles and a globally
              significant sea-turtle nesting beach.
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
                  text: "Kendrapara, Odisha",
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
                  <h2>A Mangrove Wilderness on the Bay of Bengal</h2>
                  <p>
                    <strong>Bhitarkanika National Park</strong>, in
                    Kendrapara district, is India&apos;s second-largest
                    mangrove ecosystem after the Sundarbans — a maze of
                    tidal creeks and dense mangrove forest explored almost
                    entirely by boat, since there are few walking trails
                    through the terrain itself.
                  </p>
                  <p>
                    The park is home to a genuinely significant population
                    of <strong>saltwater crocodiles</strong>, including some
                    of the largest specimens ever recorded in India — this
                    is arguably the best place in the country to see large
                    saltwater crocodiles basking or gliding through the
                    creeks in their natural habitat.
                  </p>
                  <p>
                    Nearby, <strong>Gahirmatha Beach</strong> is one of the
                    world&apos;s largest mass-nesting (arribada) sites for
                    Olive Ridley sea turtles, where hundreds of thousands of
                    turtles come ashore to nest within a short window each
                    year — a globally significant conservation phenomenon
                    that draws researchers and travelers alike when timing
                    aligns.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐊</span> Bhitarkanika at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Kendrapara, Odisha",
                        },
                        {
                          icon: "🛶",
                          label: "Explored By",
                          value: "Boat Safari",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Dec – Feb" },
                        {
                          icon: "🐢",
                          label: "Known For",
                          value: "Crocodiles, Turtle Nesting",
                        },
                        {
                          icon: "🌊",
                          label: "Nearby",
                          value: "Gahirmatha Beach",
                        },
                        {
                          icon: "🏨",
                          label: "Suggested Stay",
                          value: "1–2 Days",
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
                  <h2>Best Time to Visit Bhitarkanika</h2>
                  <p>
                    Crocodile basking activity, water conditions, and the
                    turtle-nesting calendar all shape when a visit works
                    best.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Dec – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather with excellent crocodile basking activity and clear boat-safari conditions.",
                      },
                      {
                        season: "Feb – Mar",
                        emoji: "🐢",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Turtle nesting window",
                        text: "Olive Ridley mass nesting typically occurs around this window at Gahirmatha — confirm current-year timing before planning around it.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Hot, thinner crowds",
                        text: "Rising heat but fewer visitors — crocodile sightings remain reliable as they bask to regulate body temperature.",
                      },
                      {
                        season: "Jul – Nov",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — limited access",
                        text: "Heavy rain and swollen creeks make boat safaris less predictable and sometimes suspended for safety.",
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
                    <strong>Our pick:</strong> December to February — the
                    most reliable window for both crocodile activity and
                    comfortable boat safaris, with a chance to time a trip
                    around turtle nesting if it aligns.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bhitarkanika</h2>
                  <ul>
                    <li>
                      <strong>By road from Bhubaneswar:</strong> Roughly
                      140–160 km, a 3–4 hour drive to the boat-launch
                      points, followed by the boat journey into the park.
                    </li>
                    <li>
                      <strong>By road from Cuttack:</strong> A shorter
                      alternative starting point, well connected by road to
                      the park&apos;s access villages.
                    </li>
                    <li>
                      <strong>By boat:</strong> All in-park exploration is
                      by boat through the mangrove creeks — no vehicle
                      access exists inside the core mangrove area.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book boat safaris and forest
                    department permits in advance, especially in peak
                    season — availability is limited and weekend demand is
                    high.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Boat Safaris, Crocodiles & Turtles</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Mangrove creek waterway inside Bhitarkanika National Park, Kendrapara"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Mangrove Boat Safari</h3>
                  <p>
                    Gliding through the tidal creeks by boat is the core
                    Bhitarkanika experience — dense mangrove walls on either
                    side, occasional crocodile sightings along the banks,
                    and rich birdlife throughout the network of waterways.
                  </p>
                  <h3>Saltwater Crocodile Spotting</h3>
                  <p>
                    Dawn and dusk are the best times for crocodile sightings,
                    when they bask on the mudbanks — some of the largest
                    individuals recorded in India have been documented
                    within this park.
                  </p>
                  <h3>Gahirmatha Beach & Turtle Nesting</h3>
                  <p>
                    A short distance from the core park, Gahirmatha hosts one
                    of the world&apos;s largest arribada (mass-nesting)
                    events for Olive Ridley sea turtles — respect all
                    forest-department guidelines strictly if visiting during
                    this window, since disturbance can genuinely harm the
                    nesting process.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is modest — forest department rest houses
                    and a handful of nearby lodges serve most visitors.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,500/night",
                        picks: [
                          "Forest department rest houses",
                          "Basic guesthouses near Chandbali",
                          "Simple village lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹3,500/night",
                        picks: [
                          "Nature-lodge stays",
                          "Small resorts near the park",
                          "Chandbali business hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🛶",
                        range: "₹4,000–₹7,000+/night",
                        picks: [
                          "Premium eco-lodges",
                          "Full-board boat-safari packages",
                          "Boutique wildlife stays",
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
                        title: "Arrival & Mangrove Boat Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Bhubaneswar or Cuttack to the boat launch",
                          "Afternoon boat safari through the mangrove creeks",
                          "Overnight near the park",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Dawn Safari & Gahirmatha",
                        color: "bg-sky-600",
                        activities: [
                          "Early-morning boat safari for crocodile activity",
                          "Extension to Gahirmatha Beach if turtle season aligns",
                          "Departure",
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
                  <h2>Where to Eat Near Bhitarkanika</h2>
                  <ul>
                    <li>
                      <strong>Lodge kitchens:</strong> Most accommodation
                      serves simple Odia meals, including fresh local fish
                      given the coastal/estuarine setting.
                    </li>
                    <li>
                      <strong>Chandbali town:</strong> A wider range of
                      standalone restaurants for those basing themselves
                      there before heading in.
                    </li>
                    <li>
                      <strong>Carry snacks for the boat safari:</strong> No
                      food options exist once out on the water.
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
                            "₹5,500",
                          ],
                          ["Boat safari (per trip)", "₹1,500", "₹2,500", "₹4,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          ["Local transport/day", "₹800", "₹1,500", "₹3,000"],
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
                    * Boat safari costs are typically per-boat rather than
                    per-person — split across your group for a lower
                    per-head figure.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Bhitarkanika</h2>
                  <ul>
                    <li>
                      <strong>Book boat safaris in advance:</strong> Arrange
                      through forest department channels ahead of arrival,
                      especially in peak season.
                    </li>
                    <li>
                      <strong>Go at dawn for crocodile sightings:</strong>{" "}
                      Basking activity peaks in the cooler early-morning
                      hours.
                    </li>
                    <li>
                      <strong>Check current-year turtle-nesting
                      dates:</strong> Timing shifts annually — don&apos;t
                      plan around fixed dates from a previous year.
                    </li>
                    <li>
                      <strong>Follow all Gahirmatha guidelines
                      strictly:</strong> Nesting-site disturbance can
                      genuinely harm the process.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Nothing is
                      available once out on the boat safari.
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
                          "Book boat safaris through the forest department in advance",
                          "Go at dawn for the best crocodile sightings",
                          "Check current-year turtle-nesting timing",
                          "Follow Gahirmatha nesting-site guidelines strictly",
                          "Carry water, snacks, and sun protection",
                          "Split boat costs across your group",
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Arrive without a pre-booked boat",
                          "Disturb nesting turtles or their eggs at Gahirmatha",
                          "Expect food options while out on the water",
                          "Visit during heavy monsoon when safaris are limited",
                          "Get too close to crocodiles on the banks",
                          "Assume fixed dates for turtle-nesting season",
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
                    <strong>🗺️ Extend the trip:</strong> Combine
                    Bhitarkanika with a wider Odisha wildlife circuit — see
                    our guides to{" "}
                    <Link href="/blog/similipal-travel-guide">
                      Similipal
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/satkosia-travel-guide">Satkosia</Link>,
                    or check the full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
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
                  "Bhitarkanika",
                  "Mangroves",
                  "Odisha",
                  "Saltwater Crocodiles",
                  "Gahirmatha",
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

              <RelatedPostsGrid currentSlug="bhitarkanika-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bhitarkanika-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
