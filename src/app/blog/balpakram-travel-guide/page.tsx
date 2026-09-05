// src/app/blog/balpakram-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Balpakram National Park: Myths & Wildlife",
  description:
    "Complete Balpakram guide — the 'Land of Perpetual Winds' plateau, Garo mythology and the mande burung legend, red panda reports, how to reach from Tura, and a full visit plan.",
  keywords:
    "Balpakram National Park, Land of Perpetual Winds, Garo mythology, mande burung, South Garo Hills, Meghalaya, how to reach Balpakram, red panda Meghalaya, Tura excursion",
  openGraph: {
    title: "Balpakram National Park: Myths & Wildlife",
    description:
      "A canyon-carved plateau sacred in Garo belief, home to legend, rare wildlife, and one of Meghalaya's wildest, least-developed landscapes.",
    url: "https://club.kudozz.in/blog/balpakram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Stark high plateau and canyon terrain, evoking Balpakram National Park's dramatic landscape in Meghalaya's South Garo Hills",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Balpakram National Park: Myths & Wildlife",
    description:
      "The 'Land of Perpetual Winds' — a canyon plateau sacred to Garo belief, and one of Meghalaya's wildest, least-visited parks.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/balpakram-travel-guide",
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
          headline: "Balpakram National Park: Myths & Wildlife",
          description:
            "Complete Balpakram guide — the 'Land of Perpetual Winds' plateau, Garo mythology and the mande burung legend, red panda reports, how to reach from Tura, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/balpakram-travel-guide",
          },
          keywords: "Balpakram, Garo mythology, mande burung, South Garo Hills, Meghalaya",
          about: {
            "@type": "Place",
            name: "Balpakram National Park",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Balpakram National Park",
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
    q: "What is the significance of Balpakram in Garo mythology?",
    a: "Balpakram is traditionally believed by the Garo people to be a place where the spirits of the dead pass through on their journey to the afterlife. This spiritual significance is central to why the park matters so deeply to Garo culture, well beyond its ecological value.",
  },
  {
    q: "What is the mande burung legend?",
    a: "Mande burung, sometimes described as Meghalaya's own 'Bigfoot,' is a legendary tiger-like or ape-like creature associated with Balpakram in local folklore. It's a genuine and important part of Garo storytelling tradition, worth approaching as living cultural belief rather than a novelty.",
  },
  {
    q: "How far is Balpakram from Tura?",
    a: "Balpakram is a further journey into South Garo Hills from Tura, the region's main gateway town. Most visitors base themselves in Tura and visit Balpakram as a dedicated day trip or overnight excursion given the remote roads.",
  },
  {
    q: "Is Balpakram a day trip?",
    a: "Yes, most visitors treat it as a day trip or overnight excursion from Tura, since there's essentially no standalone accommodation at the park itself.",
  },
  {
    q: "What wildlife might be seen at Balpakram?",
    a: "Balpakram has rich biodiversity and reports of rare species, including red pandas in the wider region. Wildlife sightings aren't guaranteed given the park's remoteness and limited safari infrastructure, but the ecological and scenic value of the plateau itself is a strong draw regardless.",
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
  { id: "introduction", title: "The Land of Perpetual Winds", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Balpakram", level: 2 },
  { id: "things-to-do", title: "Plateau, Mythology & Wildlife", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Supplies", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BalpakramGuidePage() {
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
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Stark high plateau and canyon terrain, evoking Balpakram National Park's dramatic landscape in Meghalaya's South Garo Hills"
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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Balpakram", href: null },
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
                "Balpakram National Park",
                "Garo Hills",
                "Meghalaya",
                "South Garo Hills",
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
              Balpakram National Park: Myths & Wildlife
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A canyon-cut plateau the Garo believe carries souls to the
              afterlife, home to legend, rare wildlife, and some of
              Meghalaya's wildest, least-touched terrain.
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
                  text: "South Garo Hills, Meghalaya",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>The Land of Perpetual Winds</h2>
                  <p>
                    <strong>Balpakram National Park</strong>, in South Garo
                    Hills, is sometimes called the "Land of Perpetual
                    Winds" — a dramatic plateau cut through with
                    canyon-like terrain that looks unlike almost anywhere
                    else in Meghalaya's forested hill country. Reached via{" "}
                    <Link href="/blog/tura-travel-guide">Tura</Link>, the
                    region's main gateway town, it remains one of the
                    state's wildest and least-developed corners for
                    tourism.
                  </p>
                  <p>
                    The park holds deep significance in Garo belief: it's
                    traditionally regarded as a place where the spirits of
                    the dead pass through on their journey to the
                    afterlife, and it's closely associated with the legend
                    of the mande burung — a mythical tiger-like or
                    ape-like creature, often described as Meghalaya's own
                    "Bigfoot." This is living cultural tradition, not a
                    tourist curiosity, and worth approaching with genuine
                    respect.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏜️</span> Balpakram at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Garo Hills, Meghalaya",
                        },
                        {
                          icon: "🚗",
                          label: "Gateway",
                          value: "Tura",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🪶",
                          label: "Known For",
                          value: "Garo mythology, canyon plateau",
                        },
                        {
                          icon: "🐾",
                          label: "Wildlife",
                          value: "Rare species, red panda reports",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Siju Cave",
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
                  <h2>Best Time to Visit Balpakram</h2>
                  <p>
                    Given the remote, unpaved approach roads, weather has
                    an outsized effect on whether Balpakram is
                    comfortably reachable at all.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry, cool, and the most reliable window for the remote roads into the park to be genuinely passable.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, pre-monsoon",
                        text: "Still workable, though heat and humidity build ahead of the monsoon.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain makes the unpaved approach roads genuinely difficult, and in places impassable.",
                      },
                      {
                        season: "Any season",
                        emoji: "🧭",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Confirm access first",
                        text: "Given how remote this is, always confirm current road conditions with a Tura-based guide or operator before setting out.",
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
                    <strong>Our pick:</strong> October to March — the only
                    window where the remote approach roads are reliably
                    passable and the plateau's canyon views are at their
                    clearest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Balpakram</h2>
                  <ul>
                    <li>
                      <strong>Via Tura:</strong> The only practical
                      approach — Balpakram lies a further journey into
                      South Garo Hills from{" "}
                      <Link href="/blog/tura-travel-guide">Tura</Link>,
                      over unpaved roads for at least part of the route.
                    </li>
                    <li>
                      <strong>Local guide recommended:</strong> Given the
                      remoteness and limited signage, arranging a
                      Tura-based guide or driver familiar with the route
                      is strongly advisable.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Confirm current road
                    conditions with a Tura-based operator before setting
                    out — this is genuinely remote country and conditions
                    can change quickly, especially near the monsoon
                    shoulder seasons.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Plateau, Mythology & Wildlife</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="High plateau and canyon terrain at Balpakram National Park, Meghalaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Plateau & Canyon Terrain</h3>
                  <p>
                    Balpakram's defining feature is its landscape — a high
                    plateau cut through with canyon-like gorges, giving
                    views and a sense of scale that feel closer to a
                    high-desert plateau than the forested hills that
                    define most of Meghalaya.
                  </p>
                  <h3>Garo Mythology & the Mande Burung</h3>
                  <p>
                    The park's significance to Garo belief runs deep — it
                    is traditionally regarded as a transit point for
                    departed spirits, and is closely tied to the legend of
                    the mande burung, a mythical creature described in
                    local folklore. Visiting with a knowledgeable local
                    guide brings this cultural dimension to life in a way
                    the scenery alone cannot.
                  </p>
                  <h3>Wildlife & Biodiversity</h3>
                  <p>
                    Balpakram supports genuine ecological richness, with
                    reports of rare species including red pandas in the
                    wider region. Sightings aren't guaranteed given the
                    park's remoteness and limited safari infrastructure,
                    but the ecological value of the landscape is
                    significant regardless of what wildlife you happen to
                    see.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's essentially no standalone accommodation at
                    Balpakram itself — plan around a Tura base instead.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic guesthouses in Tura",
                          "Government tourist lodges",
                          "Simple lodges near nearby towns",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels, Tura",
                          "Circuit house-style stays",
                          "Family-run hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Best available rooms in Tura",
                          "Advance booking essential",
                          "Limited premium options in the district",
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

                  <blockquote>
                    Base yourself in{" "}
                    <Link href="/blog/tura-travel-guide">Tura</Link> and
                    treat Balpakram as a dedicated day trip or overnight
                    excursion.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Option 1",
                        title: "Day Trip from Tura",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Tura",
                          "Explore the plateau and canyon viewpoints",
                          "Return to Tura by evening",
                        ],
                      },
                      {
                        day: "Option 2",
                        title: "Overnight Excursion",
                        color: "bg-sky-600",
                        activities: [
                          "Depart Tura, arrive by midday",
                          "Guided exploration with time for the mythology and viewpoints",
                          "Overnight nearby, return to Tura next day",
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
                    * With more time, combine Balpakram with a visit to{" "}
                    <Link href="/blog/siju-travel-guide">Siju Cave</Link>{" "}
                    for a fuller South Garo Hills adventure trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food & Supplies</h2>
                  <ul>
                    <li>
                      <strong>Carry your own:</strong> There are minimal
                      to no food facilities within the park itself, so
                      pack supplies before leaving Tura.
                    </li>
                    <li>
                      <strong>Stock up in Tura:</strong> Tura's markets
                      are the last reliable point to buy snacks and water
                      before heading into South Garo Hills.
                    </li>
                    <li>
                      <strong>Local village stalls:</strong> Occasional
                      basic stalls may be found along the route, but
                      don't rely on them.
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
                            "Local guide/driver",
                            "₹1,500",
                            "₹2,500",
                            "₹4,000",
                          ],
                          ["Vehicle hire (round trip)", "₹2,500", "₹4,000", "₹6,500"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          ["Entry/permit fees", "₹100", "₹100", "₹100"],
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
                    * Figures are per trip from Tura, best split across a
                    group given the shared vehicle/guide costs.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Balpakram</h2>
                  <ul>
                    <li>
                      <strong>Engage a local guide:</strong> Both for safe
                      navigation and for genuine cultural context on the
                      site's significance to Garo belief.
                    </li>
                    <li>
                      <strong>Approach the mythology with respect:</strong>{" "}
                      This is living cultural tradition to the Garo
                      people, not a novelty attraction.
                    </li>
                    <li>
                      <strong>Confirm access before setting out:</strong>{" "}
                      Road conditions can change quickly in this remote
                      region.
                    </li>
                    <li>
                      <strong>Carry sufficient water and food:</strong>{" "}
                      Facilities are minimal to non-existent along the
                      route.
                    </li>
                    <li>
                      <strong>Don't rush it:</strong> The remoteness that
                      makes Balpakram special also means it deserves
                      unhurried time rather than a quick pass-through.
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
                          "Hire a local guide from Tura",
                          "Confirm road conditions before departure",
                          "Carry enough water and food for the day",
                          "Approach the mythology respectfully",
                          "Visit Oct-Mar for the most reliable access",
                          "Combine with Siju Cave if time allows",
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
                          "Attempt the drive alone without local knowledge",
                          "Visit during heavy monsoon",
                          "Expect standalone accommodation at the park",
                          "Treat the mande burung legend dismissively",
                          "Rely on finding food along the route",
                          "Rush the visit given the remote access effort",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Balpakram
                    with{" "}
                    <Link href="/blog/siju-travel-guide">Siju Cave</Link>{" "}
                    for a fuller South Garo Hills adventure, both reached
                    from a base in{" "}
                    <Link href="/blog/tura-travel-guide">Tura</Link>. See
                    our full{" "}
                    <Link href="/blog/meghalaya-travel-guide">
                      Meghalaya travel guide
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
                  "Balpakram National Park",
                  "Garo Hills",
                  "Meghalaya",
                  "South Garo Hills",
                  "Garo Mythology",
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

              <RelatedPostsGrid currentSlug="balpakram-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="balpakram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
