// src/app/blog/ujjayanta-palace-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ujjayanta Palace Guide: History, Timings & Tips",
  description:
    "Complete Ujjayanta Palace guide — history of the Manikya royal residence, Mughal-style gardens, the Tripura State Museum galleries, timings, entry fees, photography rules, and how to visit.",
  keywords:
    "Ujjayanta Palace, Ujjayanta Palace Agartala, Tripura State Museum, Ujjayanta Palace timings, Ujjayanta Palace entry fee, Agartala palace, Manikya dynasty palace, Ujjayanta Palace history",
  openGraph: {
    title: "Ujjayanta Palace Guide: History, Timings & Tips",
    description:
      "A royal residence turned state museum, framed by Mughal-style gardens and two ornamental lakes — the complete guide to Agartala's grandest landmark.",
    url: "https://club.kudozz.in/blog/ujjayanta-palace-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/saheliyon.jpg",
        width: 1200,
        height: 630,
        alt: "Landscaped palace garden with fountains, evoking Ujjayanta Palace's Mughal-style grounds",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjayanta Palace Guide: History, Timings & Tips",
    description:
      "A royal residence turned state museum, framed by Mughal-style gardens — the complete guide to Agartala's grandest landmark.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ujjayanta-palace-travel-guide",
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
          headline: "Ujjayanta Palace Guide: History, Timings & Tips",
          description:
            "Complete Ujjayanta Palace guide — history of the Manikya royal residence, Mughal-style gardens, the Tripura State Museum galleries, timings, entry fees, photography rules, and how to visit.",
          image:
            "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
            "@id": "https://club.kudozz.in/blog/ujjayanta-palace-travel-guide",
          },
          keywords:
            "Ujjayanta Palace, Agartala, Tripura State Museum, royal heritage, Manikya dynasty",
          about: {
            "@type": "Place",
            name: "Ujjayanta Palace",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Agartala",
              addressRegion: "Tripura",
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
                name: "Tripura",
                item: "https://club.kudozz.in/blog/tripura-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ujjayanta Palace",
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
    q: "What are Ujjayanta Palace's timings?",
    a: "The palace is usually closed on Mondays, in line with most Indian state museums, and open through the afternoon on other days — timings can shift, so it's worth confirming locally or with your hotel before visiting.",
  },
  {
    q: "Is there an entry fee for Ujjayanta Palace?",
    a: "Yes, a modest entry fee applies, with a separate (also modest) fee for still cameras. Fees are typically collected at the gate — carry small change.",
  },
  {
    q: "Is photography allowed inside Ujjayanta Palace?",
    a: "Photography is generally allowed in the gardens and museum galleries for a small camera fee, though some galleries or specific exhibits may restrict it — follow posted signage and staff instructions on site.",
  },
  {
    q: "How much time do I need at Ujjayanta Palace?",
    a: "Budget 1.5–2 hours to walk the gardens, view the two lakes, and go through the main museum galleries at an unhurried pace. Add extra time if you plan to stay for the evening illumination.",
  },
  {
    q: "What's the best time of day to visit?",
    a: "Late afternoon works best — good light for photographing the architecture, followed by the evening illumination of the palace facade, which is genuinely one of Agartala's best free sights.",
  },
  {
    q: "What else is near Ujjayanta Palace?",
    a: "Heritage Park sits just next to the palace, making for an easy combined visit. See our full Agartala guide for the rest of the city's sights.",
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
  { id: "introduction", title: "A Royal Residence Turned Museum", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ujjayanta Palace", level: 2 },
  { id: "things-to-do", title: "History, Architecture & Galleries", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function UjjayantaPalaceGuidePage() {
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
              src="/images/destinations/udaipur/saheliyon.jpg"
              alt="Landscaped palace garden with fountains, evoking Ujjayanta Palace's Mughal-style grounds"
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
                { label: "Tripura", href: "/blog/tripura-travel-guide" },
                { label: "Ujjayanta Palace", href: null },
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
              {["Ujjayanta Palace", "Agartala", "Tripura", "Heritage"].map(
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
              Ujjayanta Palace Guide: History, Timings & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Domed roofs rising over Mughal-style gardens and twin
              ornamental lakes — the former seat of the Tripura kings, now
              the state's finest museum.
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
                  text: "Agartala, Tripura",
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
                  <h2>A Royal Residence Turned Museum</h2>
                  <p>
                    <strong>Ujjayanta Palace</strong> was built in 1901 by
                    Maharaja Radha Kishore Manikya as the royal residence of
                    the Tripura kings, in the heart of{" "}
                    <Link href="/blog/agartala-travel-guide">Agartala</Link>.
                    The building blends Mughal, colonial, and Hindu-temple
                    architectural styles under three domed roofs, and sits
                    within landscaped, Mughal-style gardens with two
                    ornamental lakes — a scale of grandeur that stands out
                    against the city's otherwise low-key streetscape.
                  </p>
                  <p>
                    Since 2013, the palace has functioned as the{" "}
                    <strong>Tripura State Museum</strong>, with galleries
                    covering the state's tribal culture, archaeology, and
                    royal history. In the evening the palace and grounds are
                    illuminated, and a light-and-sound show runs on select
                    evenings — arguably the single most photogenic sight in
                    Agartala.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Ujjayanta Palace at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Central Agartala",
                        },
                        { icon: "🏗️", label: "Built", value: "1901" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Now",
                          value: "Tripura State Museum",
                        },
                        {
                          icon: "📅",
                          label: "Closed",
                          value: "Usually Mondays",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "1.5 – 2 hours",
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
                  <h2>Best Time to Visit Ujjayanta Palace</h2>
                  <p>
                    Both the season and the time of day shape how good a
                    visit feels here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions make walking the gardens comfortable, and clear evenings show the illumination at its best.",
                      },
                      {
                        season: "Late Afternoon",
                        emoji: "📸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best light for photography",
                        text: "The warm late-afternoon light suits the palace's domes and facade — arrive a couple of hours before sunset.",
                      },
                      {
                        season: "Evening",
                        emoji: "✨",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Illumination & light show",
                        text: "The palace is lit up after dark, with a light-and-sound show on select evenings — check current schedules locally.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — wetter visit",
                        text: "The gardens stay lush and green, but rain can disrupt an unhurried walk through the grounds.",
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
                    <strong>Our pick:</strong> A winter late-afternoon visit
                    — good light for photographs, followed by the evening
                    illumination without the discomfort of summer heat.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ujjayanta Palace</h2>
                  <p>
                    The palace sits centrally within{" "}
                    <Link href="/blog/agartala-travel-guide">Agartala</Link>,
                    making it easy to reach from almost anywhere in the city.
                  </p>
                  <ul>
                    <li>
                      <strong>Within Agartala:</strong> Most hotels are a
                      short auto-rickshaw ride away, and some central
                      accommodation is walkable.
                    </li>
                    <li>
                      <strong>From the airport:</strong> Maharaja Bir Bikram
                      Airport (IXA) is roughly a 20–30 minute drive, easily
                      arranged by taxi.
                    </li>
                    <li>
                      <strong>From the railway station:</strong> A short taxi
                      or auto ride connects Agartala railway station to the
                      palace.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine your palace visit
                    with a walk through Heritage Park next door — the two sit
                    close enough together to cover comfortably in one outing.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>History, Architecture & Galleries</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/saheliyon.jpg"
                      alt="Ornamental garden with fountains at a royal palace"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Architecture</h3>
                  <p>
                    Built in 1901, the palace blends Mughal, colonial, and
                    Hindu-temple influences under three prominent domes —
                    a distinctive silhouette that's become the visual shorthand
                    for Tripura itself in tourism material.
                  </p>
                  <h3>Museum Galleries</h3>
                  <p>
                    Inside, the Tripura State Museum's galleries cover the
                    state's tribal culture and 19 recognised communities,
                    archaeological finds, and the royal history of the
                    Manikya dynasty — a genuinely useful primer before
                    heading out to sites like Unakoti or Udaipur.
                  </p>
                  <h3>The Gardens & Lakes</h3>
                  <p>
                    The Mughal-style gardens, with their two ornamental
                    lakes, are worth as much time as the museum itself — a
                    calm, manicured contrast to the busier streets outside.
                  </p>
                  <h3>Evening Illumination</h3>
                  <p>
                    After dark, the palace facade is lit up, and a
                    light-and-sound show runs on select evenings — check
                    locally for the current schedule, as timings can vary.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Ujjayanta Palace</h2>
                  <p>
                    Since the palace sits centrally in Agartala, most of the
                    city's accommodation options are within easy reach — see
                    our full{" "}
                    <Link href="/blog/agartala-travel-guide">
                      Agartala guide
                    </Link>{" "}
                    for the complete breakdown. In short:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses near the palace grounds",
                          "Tourist lodges, central Agartala",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels within walking distance",
                          "Hotel Sonar Tori",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Ginger Agartala",
                          "Premium hotels, central Agartala",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Step 1",
                        title: "Gardens First",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive in the late afternoon",
                          "Walk the Mughal-style gardens and both lakes",
                          "Photograph the palace facade in warm light",
                        ],
                      },
                      {
                        day: "Step 2",
                        title: "Museum Galleries",
                        color: "bg-sky-600",
                        activities: [
                          "Tour the tribal culture and history galleries",
                          "See the archaeology and royal-history exhibits",
                          "Allow roughly an hour for the full museum",
                        ],
                      },
                      {
                        day: "Step 3",
                        title: "Evening Illumination",
                        color: "bg-forest-600",
                        activities: [
                          "Stay for the after-dark illumination",
                          "Check locally for a light-and-sound show",
                          "Combine with a walk through neighbouring Heritage Park",
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
                  <h2>Where to Eat Nearby</h2>
                  <ul>
                    <li>
                      <strong>Cafes near the palace gate:</strong> A handful
                      of small cafes and snack stalls cluster near the main
                      entrance, useful for a quick bite between the gardens
                      and museum.
                    </li>
                    <li>
                      <strong>Central Agartala restaurants:</strong> A short
                      auto ride opens up Agartala's wider restaurant scene,
                      spanning Bengali and tribal Tripuri cuisine.
                    </li>
                    <li>
                      <strong>Hotel restaurants:</strong> Most mid-range and
                      luxury hotels nearby serve a reliable mix of local and
                      standard Indian dishes.
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
                          {["Expense", "Amount"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Entry fee", "₹40 – ₹100 (approx.)"],
                          ["Still camera fee", "₹50 – ₹100 (approx.)"],
                          ["Auto/taxi from central Agartala", "₹50 – ₹200"],
                          ["Light-and-sound show (if held)", "₹50 – ₹150 (approx.)"],
                        ].map(([exp, amt], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {amt}
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
                    * Fees are approximate and subject to change — confirm
                    current rates at the gate.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ujjayanta Palace</h2>
                  <ul>
                    <li>
                      <strong>Check the Monday closure:</strong> The palace
                      is usually closed on Mondays — confirm before planning
                      your visit around it.
                    </li>
                    <li>
                      <strong>Carry small change:</strong> Entry and camera
                      fees are typically collected in cash at the gate.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> As with most heritage
                      and museum sites in India, modest clothing is
                      appreciated.
                    </li>
                    <li>
                      <strong>Ask before photographing specific exhibits:</strong>{" "}
                      Some galleries may restrict photography — follow posted
                      signage.
                    </li>
                    <li>
                      <strong>Arrive with enough daylight left:</strong> Time
                      your visit to catch both good afternoon light and the
                      evening illumination.
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
                          "Arrive in the late afternoon for the best light",
                          "Stay for the evening illumination",
                          "Carry cash for entry and camera fees",
                          "Combine with a walk through Heritage Park",
                          "Confirm the light-and-sound show schedule locally",
                          "Allow at least 1.5 hours for gardens and galleries",
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
                          "Plan a Monday visit without confirming timings",
                          "Expect card payment at the gate",
                          "Rush through in under an hour",
                          "Ignore posted photography restrictions",
                          "Arrive right at closing time",
                          "Skip the gardens in favour of just the museum",
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
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/agartala-travel-guide">
                      Agartala travel guide
                    </Link>{" "}
                    for the rest of the city, or the{" "}
                    <Link href="/blog/tripura-travel-guide">
                      complete Tripura guide
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
                {["Ujjayanta Palace", "Agartala", "Tripura", "Heritage"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="ujjayanta-palace-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ujjayanta-palace-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
