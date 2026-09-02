// src/app/blog/mukutmanipur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mukutmanipur Travel Guide: Dam, Boating & Tips",
  description:
    "Complete Mukutmanipur guide — one of India's largest earthen dams, reservoir boating, Bhairavi Temple, Pareshnath Hill, how to reach from Kolkata, and a full visit plan.",
  keywords:
    "Mukutmanipur travel guide, Mukutmanipur dam, Kumari Kangsabati river, Bankura tourism, Mukutmanipur boating, Bhairavi Temple, Pareshnath Hill, Mukutmanipur deer park, how to reach Mukutmanipur, weekend getaway West Bengal",
  openGraph: {
    title: "Mukutmanipur Travel Guide: Dam, Boating & Tips",
    description:
      "One of India's largest earthen dams, a hill-ringed reservoir, and a quiet weekend-getaway feel in Bankura district — the complete Mukutmanipur guide.",
    url: "https://club.kudozz.in/blog/mukutmanipur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Large reservoir surrounded by hills, evoking Mukutmanipur's dam and lake landscape",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukutmanipur Travel Guide: Dam, Boating & Tips",
    description:
      "A hill-ringed reservoir, one of India's largest earthen dams, and a quiet Bankura weekend getaway — the complete Mukutmanipur guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mukutmanipur-travel-guide",
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
          headline: "Mukutmanipur Travel Guide: Dam, Boating & Tips",
          description:
            "Complete Mukutmanipur guide — one of India's largest earthen dams, reservoir boating, Bhairavi Temple, Pareshnath Hill, how to reach from Kolkata, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/mukutmanipur-travel-guide",
          },
          keywords:
            "Mukutmanipur, West Bengal, Bankura, dam, boating, weekend getaway, off-beat",
          about: {
            "@type": "Place",
            name: "Mukutmanipur",
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
                name: "Mukutmanipur",
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
    q: "What makes Mukutmanipur dam significant?",
    a: "The Mukutmanipur dam is one of the largest earthen dams in India, built at the confluence of the Kumari and Kangsabati (Kansai) rivers in Bankura district. Its scale and the large reservoir it creates, ringed by low hills, are the main draw for visitors.",
  },
  {
    q: "How do I reach Mukutmanipur from Kolkata?",
    a: "The nearest railhead is Bankura, about 65 km away, with onward road transport to Mukutmanipur. By road, it's roughly 230 km from Kolkata, a 5-6 hour drive, and it's commonly combined with a stop at Bishnupur, about 60 km from Mukutmanipur, en route.",
  },
  {
    q: "Is boating available at Mukutmanipur?",
    a: "Yes, boating on the reservoir is one of the main activities here, along with sunset views from the dam viewpoint. Boat operators are typically found near the main dam and jetty area.",
  },
  {
    q: "What is the best time to visit Mukutmanipur?",
    a: "October to February is ideal, with pleasant weather and the reservoir at a fuller, more scenic level. Peak summer (April-June) brings uncomfortable heat, so it's best avoided if you can plan around it.",
  },
  {
    q: "Can I combine Mukutmanipur with Bishnupur in one trip?",
    a: "Yes, this is a very natural combination — Bishnupur's terracotta temples are about 60 km away, and many travellers visit both in a single 2-3 day weekend trip through Bankura district.",
  },
  {
    q: "How many days should I spend at Mukutmanipur?",
    a: "A single overnight stay is enough to enjoy the dam viewpoint, boating, and a relaxed pace by the reservoir. It works well as a 1-night stop within a longer 2-3 day Bankura-Purulia circuit.",
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
  { id: "introduction", title: "A Reservoir in the Bankura Hills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mukutmanipur", level: 2 },
  { id: "things-to-do", title: "Dam, Boating & Nearby Sights", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MukutmanipurGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Large reservoir surrounded by hills, evoking Mukutmanipur's dam and lake landscape"
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
                { label: "Mukutmanipur", href: null },
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
                "Mukutmanipur",
                "Bankura",
                "Dam",
                "Boating",
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
              Mukutmanipur: Dam, Boating & Weekend Getaway Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of India's largest earthen dams, a hill-ringed reservoir,
              and a quiet, relatively undiscovered weekend escape in
              Bankura district.
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
                  text: "Bankura district, West Bengal",
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
                  <h2>A Reservoir in the Bankura Hills</h2>
                  <p>
                    <strong>Mukutmanipur</strong> is built around one of
                    India's largest earthen dams, raised at the confluence
                    of the <strong>Kumari</strong> and{" "}
                    <strong>Kangsabati (Kansai)</strong> rivers in Bankura
                    district, southwest{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    . The dam holds back a large reservoir that spreads out
                    against a backdrop of low forested hills — a scale of
                    open water and scenery that feels unexpected this deep
                    into Bengal's interior.
                  </p>
                  <p>
                    It remains relatively undiscovered outside the state,
                    which is exactly its appeal: a quiet weekend-getaway feel
                    without the crowds of Bengal's better-known hill and
                    lake destinations. Boating on the reservoir and watching
                    the sunset from the dam viewpoint are the two things
                    almost every visitor comes for.
                  </p>
                  <p>
                    Nearby, the <strong>Bhairavi Temple</strong> and{" "}
                    <strong>Pareshnath Hill</strong> add easy half-day
                    detours, and a small deer park gives families a gentle
                    wildlife stop without needing a full safari commitment.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Mukutmanipur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bankura district, West Bengal",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Bankura (~65 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Earthen Dam, Boating",
                        },
                        {
                          icon: "⛰️",
                          label: "Setting",
                          value: "Hill-ringed reservoir",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Bishnupur (~60 km)",
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
                  <h2>Best Time to Visit Mukutmanipur</h2>
                  <p>
                    The reservoir's water level and the region's heat both
                    shape when a visit is at its best.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant weather and the reservoir at a fuller, more scenic level following the monsoon — the most comfortable window for boating and sightseeing.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid peak summer",
                        text: "Temperatures climb steeply into April-June, making the interior of Bankura district genuinely uncomfortable for daytime sightseeing.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — full reservoir, wetter travel",
                        text: "The reservoir fills dramatically and the surrounding hills turn green, but rain can disrupt boating and make roads less comfortable to travel.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best sunsets",
                        text: "Clear winter skies make for the year's most reliable sunset views from the dam viewpoint — plan a late-afternoon arrival if this is the priority.",
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
                    pleasant weather, a scenic reservoir level, and reliably
                    clear sunset views from the dam.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mukutmanipur</h2>
                  <p>
                    Mukutmanipur sits deep in Bankura district, so most
                    visits combine a train to Bankura with a road transfer,
                    or a direct drive from Kolkata.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail to Bankura:</strong> The nearest
                      railhead, roughly 65 km from Mukutmanipur, connected to
                      Kolkata by regular trains. From Bankura town, taxis and
                      shared vehicles cover the rest of the journey.
                    </li>
                    <li>
                      <strong>By road from Kolkata:</strong> About 230 km, a
                      5-6 hour drive — a long but manageable day's journey,
                      often better combined with an overnight stay.
                    </li>
                    <li>
                      <strong>Via Bishnupur:</strong> Roughly 60 km from
                      Mukutmanipur, Bishnupur makes a natural stopover en
                      route, letting you combine terracotta-temple sightseeing
                      with the dam and reservoir in one trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Time your arrival for late
                    afternoon if possible — the dam viewpoint at sunset is
                    the single most rewarding moment of a Mukutmanipur visit.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Dam, Boating & Nearby Sights</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Reservoir and hills at Mukutmanipur, Bankura district"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Dam Viewpoint</h3>
                  <p>
                    The earthen dam itself is the centrepiece — a massive
                    embankment holding back the Kumari-Kangsabati reservoir,
                    with a viewpoint that draws visitors especially toward
                    evening. Watching the sun set over the water with the
                    surrounding hills silhouetted is the defining Mukutmanipur
                    experience.
                  </p>
                  <h3>Boating on the Reservoir</h3>
                  <p>
                    Boat rides on the reservoir are the main daytime
                    activity, run by local operators near the dam and jetty
                    area — a relaxed way to take in the scale of the water
                    body and the hills ringing it from a different vantage
                    point than the shore.
                  </p>
                  <h3>Bhairavi Temple</h3>
                  <p>
                    A local temple a short distance from the dam, worth a
                    stop for its setting as much as its religious
                    significance — a quiet, unhurried counterpoint to the
                    dam's more scenic drama.
                  </p>
                  <h3>Pareshnath Hill & Deer Park</h3>
                  <p>
                    Pareshnath Hill offers an easy climb and a different
                    vantage over the reservoir and surrounding countryside.
                    A small deer park nearby gives families and casual
                    visitors a gentle wildlife stop without needing a
                    dedicated safari.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Mukutmanipur</h2>
                  <p>
                    Accommodation is modest and mostly clustered near the dam
                    and reservoir, ranging from government tourist lodges to
                    a handful of private resorts.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Government tourist lodges",
                          "Basic guesthouses near the dam",
                          "Simple lodges in the local market",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Reservoir-view cottages",
                          "Tourism department properties",
                          "Small private resorts nearby",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium lakeside cottages",
                          "Boutique resorts with dam views",
                          "Full-board weekend packages",
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
                        title: "Bishnupur to Mukutmanipur",
                        color: "bg-amber-700",
                        activities: [
                          "Morning stop at Bishnupur's terracotta temples",
                          "Drive onward to Mukutmanipur, check in",
                          "Evening at the dam viewpoint for sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Reservoir & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Morning boating on the reservoir",
                          "Visit Bhairavi Temple and Pareshnath Hill",
                          "Stop at the deer park before departure",
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
                    * With more time, extend westward into the trekking
                    country of the{" "}
                    <Link href="/blog/ajodhya-hills-travel-guide">
                      Ajodhya Hills
                    </Link>{" "}
                    in neighbouring Purulia district for a full southwest
                    Bengal circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat at Mukutmanipur</h2>
                  <ul>
                    <li>
                      <strong>Lodge and resort kitchens:</strong> Most
                      accommodation here serves home-style Bengali meals to
                      guests, often the most convenient option given the
                      limited standalone restaurant scene.
                    </li>
                    <li>
                      <strong>Local stalls near the dam:</strong> Simple tea
                      and snack stalls cluster around the dam and jetty area,
                      useful for a quick bite between boating and sightseeing.
                    </li>
                    <li>
                      <strong>Bankura or Bishnupur town:</strong> If
                      travelling via either town, both offer a wider spread
                      of proper restaurants for a more substantial meal.
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
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹6,000"],
                          ["Car hire from Kolkata (round trip)", "₹6,000", "₹8,500", "₹12,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          ["Boating (per session)", "₹200", "₹400", "₹800"],
                          ["Entry fees (temple/park)", "₹50", "₹50", "₹50"],
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
                    * Figures are per person, per day (except car hire, a
                    round trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mukutmanipur</h2>
                  <ul>
                    <li>
                      <strong>Combine with Bishnupur:</strong> The two make a
                      natural weekend pairing — plan your route to pass
                      through one on the way to the other.
                    </li>
                    <li>
                      <strong>Time the dam viewpoint for sunset:</strong> The
                      light over the reservoir in the late afternoon is
                      Mukutmanipur's single best moment — don't miss it for
                      an earlier departure.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited in
                      this area — withdraw what you need before leaving
                      Bankura or Bishnupur.
                    </li>
                    <li>
                      <strong>Avoid peak summer:</strong> April-June heat
                      makes daytime sightseeing genuinely uncomfortable in
                      this part of Bankura district.
                    </li>
                    <li>
                      <strong>Book accommodation ahead on weekends:</strong>{" "}
                      The limited number of rooms fills up quickly during
                      winter weekends, the most popular window to visit.
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
                          "Time your visit for a sunset at the dam viewpoint",
                          "Combine the trip with Bishnupur en route",
                          "Book accommodation ahead on winter weekends",
                          "Carry enough cash for the whole stay",
                          "Try a boat ride on the reservoir",
                          "Stop at Pareshnath Hill for a different view",
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
                          "Visit during peak summer heat (Apr-Jun)",
                          "Expect wide ATM or card access here",
                          "Arrive late and miss the sunset window",
                          "Rely on find-on-arrival accommodation in winter",
                          "Skip a Bishnupur stop if you have the time",
                          "Expect a large restaurant scene near the dam",
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
                    <strong>🗺️ Extend the trip:</strong> Mukutmanipur pairs
                    naturally with{" "}
                    <Link href="/blog/bishnupur-travel-guide">Bishnupur</Link>{" "}
                    for terracotta-temple sightseeing, or extend further into
                    the trekking country of the{" "}
                    <Link href="/blog/ajodhya-hills-travel-guide">
                      Ajodhya Hills
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal travel guide
                    </Link>{" "}
                    for the wider region.
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
                  "Mukutmanipur",
                  "West Bengal",
                  "Bankura",
                  "Dam",
                  "Boating",
                  "Weekend Getaway",
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

              <RelatedPostsGrid currentSlug="mukutmanipur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mukutmanipur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
