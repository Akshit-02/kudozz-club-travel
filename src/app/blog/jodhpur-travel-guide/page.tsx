// src/app/blog/jodhpur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jodhpur Travel Guide: Mehrangarh Fort & Blue City",
  description:
    "Complete Jodhpur guide — Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, the Blue City's old town, how to reach, and a full 2-day visit plan.",
  keywords:
    "Jodhpur travel guide, Mehrangarh Fort, Blue City Jodhpur, Jaswant Thada, Umaid Bhawan Palace, Sardar Market, how to reach Jodhpur, Jodhpur to Jaisalmer, Osian day trip",
  openGraph: {
    title: "Jodhpur Travel Guide: Mehrangarh Fort & Blue City",
    description:
      "One of India's largest, best-preserved forts towering over a sea of indigo-blue houses — the complete guide to Jodhpur.",
    url: "https://club.kudozz.in/blog/jodhpur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Massive sandstone fort ramparts, evoking Jodhpur's Mehrangarh Fort above the Blue City",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jodhpur Travel Guide: Mehrangarh Fort & Blue City",
    description:
      "One of India's largest, best-preserved forts towering over a sea of indigo-blue houses — the complete guide to Jodhpur.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jodhpur-travel-guide",
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
          headline: "Jodhpur Travel Guide: Mehrangarh Fort & Blue City",
          description:
            "Complete Jodhpur guide — Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, the Blue City's old town, how to reach, and a full 2-day visit plan.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
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
            "@id": "https://club.kudozz.in/blog/jodhpur-travel-guide",
          },
          keywords:
            "Jodhpur, Rajasthan, Blue City, Mehrangarh Fort, heritage, Marwar",
          about: {
            "@type": "Place",
            name: "Jodhpur",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Rajasthan",
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
                name: "Rajasthan",
                item: "https://club.kudozz.in/blog/rajasthan-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Jodhpur",
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
    q: "How many days do I need for Jodhpur?",
    a: "Two days is a comfortable amount — one for Mehrangarh Fort, Jaswant Thada, and the old Blue City, and one for Umaid Bhawan Palace, the Clock Tower/Sardar Market, and a possible day trip to Osian.",
  },
  {
    q: "What is the best time to visit Jodhpur?",
    a: "October to March, with cool, dry days ideal for exploring the fort and walking the old city's narrow blue lanes. Summer (Apr-Jun) brings extreme desert-edge heat that makes daytime sightseeing difficult.",
  },
  {
    q: "How do I reach Jodhpur?",
    a: "Jodhpur Airport has regular domestic flights, the city is a major rail junction with good connections to Jaipur, Delhi, and Jaisalmer, and it sits on solid highway links across Rajasthan.",
  },
  {
    q: "Is Osian a good day trip from Jodhpur?",
    a: "Yes — Osian, with its ancient temples and small sand dunes, is roughly an hour's drive from Jodhpur and makes a genuinely worthwhile half-day or full-day excursion.",
  },
  {
    q: "What makes Jodhpur the 'Blue City'?",
    a: "Many houses in the old town are washed in indigo blue, a tradition historically linked to both caste-marking practices and to the paint's heat- and insect-repelling properties — the best views of the blue sprawl are from Mehrangarh's ramparts.",
  },
  {
    q: "How far is Jaisalmer from Jodhpur?",
    a: "Roughly 280 km, about a 5-6 hour drive or a comfortable train journey, making Jodhpur a natural stop on the way to or from Jaisalmer and the Thar Desert.",
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
  { id: "introduction", title: "The Blue City", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jodhpur", level: 2 },
  { id: "things-to-do", title: "Mehrangarh Fort & Old Town", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "2-Day Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JodhpurGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Massive sandstone fort ramparts, evoking Jodhpur's Mehrangarh Fort above the Blue City"
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
                { label: "Rajasthan", href: "/blog/rajasthan-travel-guide" },
                { label: "Jodhpur", href: null },
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
              {["Jodhpur", "Rajasthan", "Blue City", "Mehrangarh Fort"].map(
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
              Jodhpur Travel Guide: Mehrangarh Fort & Blue City
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of India's largest, best-preserved forts rises on a rocky
              outcrop over a sea of indigo-washed houses — the complete
              guide to Jodhpur, the Blue City of Marwar.
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
                  text: "Jodhpur, Rajasthan",
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
                  <h2>The Blue City</h2>
                  <p>
                    <strong>Jodhpur</strong> is known across{" "}
                    <Link href="/blog/rajasthan-travel-guide">Rajasthan</Link>{" "}
                    as the "Blue City," for the many indigo-washed houses
                    packed into its old town below the fort. The tradition is
                    historically linked to both caste-marking practices and
                    to the paint's heat- and insect-repelling properties —
                    both explanations are commonly cited, and either way the
                    result is one of India's most striking cityscapes.
                  </p>
                  <p>
                    Towering above it all is <strong>Mehrangarh Fort</strong>,
                    one of India's largest and best-preserved forts, its
                    ramparts rising directly from a rocky outcrop above the
                    city — a genuinely commanding presence from almost
                    anywhere in Jodhpur.
                  </p>
                  <p>
                    Beyond the fort and the blue lanes, Jodhpur mixes royal
                    history, a still-active Maharaja's residence, and one of
                    Rajasthan's liveliest old-city bazaars.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏯</span> Jodhpur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Rajasthan" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Jodhpur Airport (JDH)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Mehrangarh, Blue Old Town",
                        },
                        {
                          icon: "🎯",
                          label: "Day Trip",
                          value: "Osian (~65 km)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹6,000",
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
                  <h2>Best Time to Visit Jodhpur</h2>
                  <p>
                    Sitting at the edge of the Thar Desert, Jodhpur sees
                    dramatic seasonal swings — timing shapes how comfortable
                    fort-climbing and old-city walking will be.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days that make climbing Mehrangarh's ramparts and wandering the blue lanes genuinely pleasant.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — avoid",
                        text: "Desert-edge temperatures climb sharply, making midday sightseeing very difficult without careful planning.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — patchy relief",
                        text: "Occasional rain cools things down, though humidity and unpredictable showers can disrupt sightseeing plans.",
                      },
                      {
                        season: "Oct",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Marwar Festival",
                        text: "A celebration of Rajputana music, dance, and folklore held in and around Mehrangarh Fort — worth timing a visit around if possible.",
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
                    <strong>Our pick:</strong> October to March — cool,
                    comfortable conditions for both the fort climb and
                    long walks through the old Blue City.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jodhpur</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jodhpur Airport (JDH) has
                      regular domestic flights from Delhi, Mumbai, Jaipur, and
                      other major cities.
                    </li>
                    <li>
                      <strong>By Rail:</strong> A major railway junction with
                      good connections to Jaipur, Delhi, and Jaisalmer,
                      including overnight options.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected by highway to
                      Jaipur (~340 km) and Jaisalmer (~280 km), making it a
                      natural stop on a wider Rajasthan loop.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Jodhpur pairs naturally with a
                    day trip to{" "}
                    <Link href="/blog/osian-travel-guide">Osian</Link> or an
                    onward journey to the existing{" "}
                    <Link href="/blog/rajasthan-desert-travel-guide">
                      Jaisalmer & Thar Desert guide
                    </Link>
                    .
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Mehrangarh Fort & Old Town</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="Sandstone fort walls, evoking Jodhpur's Mehrangarh Fort"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Mehrangarh Fort</h3>
                  <p>
                    One of India's largest and best-preserved forts, its
                    museum inside covers Rajput royal history, weaponry, and
                    art across a series of ornately decorated palace rooms —
                    the ramparts also offer the best views over the Blue
                    City's rooftops.
                  </p>
                  <h3>Jaswant Thada</h3>
                  <p>
                    A beautiful white marble cenotaph near the fort,
                    sometimes called the "Taj Mahal of Marwar" for its
                    intricately carved facade and serene setting.
                  </p>
                  <h3>Umaid Bhawan Palace</h3>
                  <p>
                    One of the largest private residences in the world, part
                    heritage hotel, part royal residence, and part museum —
                    a striking piece of 20th-century Art Deco-Rajput
                    architecture.
                  </p>
                  <h3>Clock Tower & Sardar Market</h3>
                  <p>
                    The bustling heart of the old city, packed with spice
                    stalls, textile shops, and handicraft vendors around the
                    landmark clock tower.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Jodhpur</h2>
                  <p>
                    Jodhpur's old city is full of rooftop guesthouses with
                    fort views, alongside a strong heritage-hotel scene.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Rooftop guesthouses, old city",
                          "Backpacker hostels near the clock tower",
                          "Budget hotels near the station",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹5,000/night",
                        picks: [
                          "Haveli-style boutique stays",
                          "Business hotels, Ratanada",
                          "Fort-view heritage guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "👑",
                        range: "₹7,000–₹20,000+/night",
                        picks: [
                          "Umaid Bhawan Palace",
                          "RAAS Jodhpur",
                          "Boutique heritage havelis",
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
                  <h2>2-Day Jodhpur Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Mehrangarh & Old Town",
                        color: "bg-amber-700",
                        activities: [
                          "Morning at Mehrangarh Fort",
                          "Jaswant Thada nearby",
                          "Evening walk through the Blue City lanes",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Palace & Markets",
                        color: "bg-sky-600",
                        activities: [
                          "Umaid Bhawan Palace museum wing",
                          "Clock Tower and Sardar Market",
                          "Optional day trip to Osian",
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
                  <h2>What to Eat in Jodhpur</h2>
                  <ul>
                    <li>
                      <strong>Mirchi bada:</strong> A large, spicy stuffed
                      chili fritter — Jodhpur's signature street snack.
                    </li>
                    <li>
                      <strong>Makhaniya lassi:</strong> A thick, saffron-hued
                      lassi topped with malai, best from an old-city stall.
                    </li>
                    <li>
                      <strong>Rajasthani thali:</strong> Widely available
                      across the city, a good introduction to Marwar's
                      distinctive vegetarian cooking.
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
                            "₹3,200",
                            "₹12,000",
                          ],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹700",
                            "₹1,800",
                          ],
                          ["Entry fees/day", "₹300", "₹400", "₹600"],
                          ["Daily total", "₹2,000", "₹5,300", "₹16,900"],
                          [
                            "2-Day trip total",
                            "₹4,000",
                            "₹10,600",
                            "₹33,800",
                          ],
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
                    * Figures are per person, per day, excluding flights into
                    Jodhpur.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Jodhpur</h2>
                  <ul>
                    <li>
                      <strong>Photograph the Blue City from the fort:</strong>{" "}
                      Mehrangarh's ramparts give by far the best view down
                      over the indigo rooftops.
                    </li>
                    <li>
                      <strong>Bargain respectfully at Sardar Market:</strong>{" "}
                      Haggling is standard practice here, as across
                      Rajasthan's bazaars.
                    </li>
                    <li>
                      <strong>Carry sun protection year-round:</strong> The
                      desert-edge sun stays strong even in cooler months.
                    </li>
                    <li>
                      <strong>Consider Osian as a half-day add-on:</strong>{" "}
                      A short drive out and a genuinely worthwhile detour for
                      its ancient temples and small dunes.
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
                          "Photograph the Blue City from Mehrangarh's ramparts",
                          "Try mirchi bada and makhaniya lassi",
                          "Bargain respectfully at Sardar Market",
                          "Carry sun protection even in winter",
                          "Consider a half-day trip to Osian",
                          "Book heritage stays ahead in peak season",
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
                          "Rush Mehrangarh Fort — it's genuinely large",
                          "Skip sun protection in the desert-edge climate",
                          "Accept the first quoted market price",
                          "Visit at peak midday heat in summer",
                          "Forget to check Umaid Bhawan's museum-wing hours",
                          "Overlook Osian if you have a spare half-day",
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
                    <strong>🗺️ Extend the trip:</strong> Jodhpur pairs
                    naturally with a day trip to{" "}
                    <Link href="/blog/osian-travel-guide">Osian</Link>, or
                    continue onward to the existing{" "}
                    <Link href="/blog/rajasthan-desert-travel-guide">
                      Jaisalmer & Thar Desert guide
                    </Link>
                    . See the full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
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
                {["Jodhpur", "Rajasthan", "Blue City", "Mehrangarh Fort"].map(
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

              <RelatedPostsGrid currentSlug="jodhpur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jodhpur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
