// src/app/blog/khonoma-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Khonoma Guide: India's First Green Village",
  description:
    "Complete Khonoma guide — the Battle of Khonoma history, the community-run Tragopan Sanctuary, alder-tree terrace farming, homestays, how to reach from Kohima, and a full visit plan.",
  keywords:
    "Khonoma travel guide, Khonoma green village, Angami Naga, Khonoma Nature Conservation and Tragopan Sanctuary, Battle of Khonoma, alder tree farming Nagaland, how to reach Khonoma, Khonoma homestay",
  openGraph: {
    title: "Khonoma Guide: India's First Green Village",
    description:
      "A village that fought the British and now protects its own forest — the complete guide to Khonoma, India's pioneering community-conservation village.",
    url: "https://club.kudozz.in/blog/khonoma-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Terraced green hillside plantation, evoking Khonoma's alder-tree farming and forested Angami hills",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Khonoma Guide: India's First Green Village",
    description:
      "A village that fought the British and now protects its own forest — the complete Khonoma guide.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/khonoma-travel-guide",
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
          headline: "Khonoma Guide: India's First Green Village",
          description:
            "Complete Khonoma guide — the Battle of Khonoma history, the community-run Tragopan Sanctuary, alder-tree terrace farming, homestays, how to reach from Kohima, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/khonoma-travel-guide",
          },
          keywords:
            "Khonoma, green village, Angami Naga, Tragopan Sanctuary, Nagaland, community conservation",
          about: {
            "@type": "Place",
            name: "Khonoma",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nagaland",
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
                name: "Nagaland",
                item: "https://club.kudozz.in/blog/nagaland-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Khonoma",
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
    q: "What makes Khonoma a \"green village\"?",
    a: "Khonoma is nationally recognised for its community-led conservation model — most notably the Khonoma Nature Conservation and Tragopan Sanctuary, which villagers established themselves after voluntarily banning hunting across designated forest tracts to protect the endangered Blyth's tragopan pheasant.",
  },
  {
    q: "Can you actually see the Blyth's tragopan?",
    a: "Sightings are possible but not guaranteed — the tragopan is a shy forest pheasant. Guided walks in the sanctuary with a local escort give you the best realistic chance, especially early in the morning.",
  },
  {
    q: "How far is Khonoma from Kohima?",
    a: "Roughly 20 km, a short and easy drive of well under an hour, making Khonoma one of the most accessible offbeat additions to a Kohima-based Nagaland trip.",
  },
  {
    q: "Is a homestay available in Khonoma?",
    a: "Yes — community-run homestays are one of the village's genuine highlights, and staying overnight is a meaningful way to support the same conservation ethos that built the Tragopan Sanctuary.",
  },
  {
    q: "What is the historical significance of Khonoma?",
    a: "Khonoma was the site of fierce, prolonged Angami Naga resistance against British colonial forces in the 19th century, known as the Battle of Khonoma — a defining episode in the region's history of resistance.",
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
  { id: "introduction", title: "A Village of Two Legacies", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Khonoma", level: 2 },
  { id: "things-to-do", title: "Battle History & the Tragopan Sanctuary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KhonomaGuidePage() {
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
              src="/images/destinations/coorg/coorg.jpg"
              alt="Terraced green hillside plantation, evoking Khonoma's alder-tree farming and forested Angami hills"
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
                { label: "Nagaland", href: "/blog/nagaland-travel-guide" },
                { label: "Khonoma", href: null },
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
                "Khonoma",
                "Green Village",
                "Nagaland",
                "Angami Naga",
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
              Khonoma: India's First Green Village Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A village that once fought off the British Empire now protects
              its own forest on its own terms — one of India's most
              genuinely inspiring conservation stories, a short drive from
              Kohima.
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
                  text: "Kohima district, Nagaland",
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
                  <h2>A Village of Two Legacies</h2>
                  <p>
                    <strong>Khonoma</strong> is an Angami Naga village roughly
                    20 km from Kohima, and it carries two very different but
                    equally significant legacies. In the 19th century it was
                    the site of fierce, prolonged resistance against British
                    colonial forces — the Battle of Khonoma — a defining
                    episode in the history of Naga resistance to outside
                    rule.
                  </p>
                  <p>
                    More recently, Khonoma has become nationally recognised
                    as one of India's first "green villages," for a
                    genuinely inspiring, community-led conservation model.
                    The village established the{" "}
                    <strong>
                      Khonoma Nature Conservation and Tragopan Sanctuary
                    </strong>{" "}
                    entirely on its own initiative, after residents
                    voluntarily banned hunting across designated forest
                    tracts to protect the endangered Blyth's tragopan
                    pheasant — a conservation effort driven by the community
                    itself, not imposed from outside.
                  </p>
                  <p>
                    The village also practices alder-tree terrace farming, a
                    traditional agroforestry technique where alder trees are
                    grown alongside crops on the hillside terraces to
                    naturally enrich the soil — another distinctive,
                    forward-thinking local practice that predates most
                    modern sustainable-agriculture language by generations.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Khonoma at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Kohima district, Nagaland",
                        },
                        {
                          icon: "🚗",
                          label: "From Kohima",
                          value: "~20 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🐦",
                          label: "Known For",
                          value: "Tragopan Sanctuary",
                        },
                        {
                          icon: "🏡",
                          label: "Stay",
                          value: "Community homestays",
                        },
                        {
                          icon: "⚔️",
                          label: "History",
                          value: "Battle of Khonoma",
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
                  <h2>Best Time to Visit Khonoma</h2>
                  <p>
                    Khonoma's climate follows the wider Nagaland pattern —
                    dry, clear months are far more pleasant than the wet
                    monsoon for both village walks and sanctuary visits.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Nov",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear post-monsoon skies, comfortable temperatures, and good visibility for spotting the tragopan in the sanctuary.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Cool and dry",
                        text: "Genuinely cold mornings and evenings given the altitude — pack warm layers, but daytime walking conditions stay pleasant.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌱",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Pleasant, greener",
                        text: "Warming temperatures and the terraces turning green again ahead of the growing season.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain makes the sanctuary trails muddy and difficult, and reduces the chance of good wildlife sightings.",
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
                    <strong>Our pick:</strong> October to November — clear
                    skies, comfortable temperatures, and the best realistic
                    chance of a tragopan sighting in the sanctuary.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Khonoma</h2>
                  <ul>
                    <li>
                      <strong>From Kohima:</strong> Roughly 20 km by road, a
                      short and easy drive of well under an hour — making
                      Khonoma one of the most accessible offbeat additions to
                      a Kohima-based itinerary.
                    </li>
                    <li>
                      <strong>From Dimapur:</strong> Roughly 90 km, best
                      combined with a Kohima stopover given the road route.
                    </li>
                    <li>
                      <strong>Local transport:</strong> A hired taxi from
                      Kohima is the simplest option — public transport
                      directly to the village is limited.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Because Khonoma is so close
                    to Kohima, it's easy to underrate as "just a day trip" —
                    but an overnight homestay genuinely changes the
                    experience, letting you walk the sanctuary trails in the
                    quiet early morning.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Battle History & the Tragopan Sanctuary</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Terraced plantation hillside, evoking Khonoma's alder-tree farming terraces"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Battle of Khonoma</h3>
                  <p>
                    In the 19th century, Khonoma was the site of fierce,
                    prolonged Angami Naga resistance against British
                    colonial expansion into the Naga Hills — a conflict
                    remembered locally as the Battle of Khonoma. It remains a
                    defining point of pride and identity for the village,
                    and older residents and guides can offer rich context on
                    the fortified village layout that made the resistance
                    possible.
                  </p>
                  <h3>Khonoma Nature Conservation and Tragopan Sanctuary</h3>
                  <p>
                    Established by the villagers themselves rather than
                    imposed by any outside authority, the sanctuary protects
                    the endangered Blyth's tragopan pheasant across
                    designated forest tracts where the community voluntarily
                    banned hunting. It's a genuinely rare example of
                    grassroots conservation succeeding on its own terms, and
                    guided walks with a local escort offer the best realistic
                    chance of spotting the tragopan and other forest
                    birdlife.
                  </p>
                  <h3>Alder-Tree Terrace Farming</h3>
                  <p>
                    Khonoma's terraced hillsides showcase a traditional
                    agroforestry technique where alder trees are grown
                    alongside crops, naturally enriching the soil across
                    seasons — a sustainable farming practice that long
                    predates the modern vocabulary around it, and a
                    fascinating thing to see up close on a village walk.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Khonoma</h2>
                  <p>
                    Community-run homestays are a genuine highlight here,
                    reflecting the same conservation-minded ethos that built
                    the Tragopan Sanctuary — staying overnight is a
                    meaningful way to support that model directly.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic community homestays",
                          "Shared village guesthouses",
                          "Simple family-run rooms",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Better-appointed homestays",
                          "Rooms with home-cooked meals included",
                          "Guided-walk package stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "Kohima base",
                        picks: [
                          "Stay in Kohima and day-trip in",
                          "No dedicated luxury stays in the village",
                          "Premium hotels available in Kohima instead",
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
                        day: "Day 1",
                        title: "Village & History",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Kohima, check into a homestay",
                          "Walk the old fortified village and Battle of Khonoma sites",
                          "Evening meal with your homestay family",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tragopan Sanctuary",
                        color: "bg-forest-600",
                        activities: [
                          "Early-morning guided walk in the sanctuary",
                          "See the alder-tree terrace farming up close",
                          "Return to Kohima by afternoon",
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
                    * Khonoma is easily paired with the wider{" "}
                    <Link href="/blog/kohima-travel-guide">
                      Kohima
                    </Link>{" "}
                    itinerary and the Hornbill Festival calendar if timing
                    allows.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat at Khonoma</h2>
                  <ul>
                    <li>
                      <strong>Homestay meals:</strong> The primary way to eat
                      here — home-cooked Angami Naga food, often featuring
                      local greens, smoked meats, and rice grown on the
                      village's own terraces.
                    </li>
                    <li>
                      <strong>Village produce:</strong> Given the
                      alder-terrace farming tradition, meals often showcase
                      genuinely local, seasonal ingredients.
                    </li>
                    <li>
                      <strong>Kohima options:</strong> For a wider range of
                      restaurants, Kohima (a short drive away) has far more
                      variety.
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
                            "Homestay/night (with meals)",
                            "₹700",
                            "₹1,800",
                            "n/a",
                          ],
                          ["Guided sanctuary walk", "₹300", "₹600", "₹1,000"],
                          ["Local transport from Kohima", "₹500", "₹1,000", "₹2,000"],
                          ["Food (if outside homestay)", "₹200", "₹400", "₹800"],
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
                    * Figures are per person, per day. Homestay rates
                    typically include meals.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Khonoma</h2>
                  <ul>
                    <li>
                      <strong>Book a homestay, not just a day trip:</strong>{" "}
                      An overnight stay is a meaningful way to support the
                      village's conservation model directly.
                    </li>
                    <li>
                      <strong>Go early for the sanctuary walk:</strong> Dawn
                      offers the best realistic chance of spotting the
                      Blyth's tragopan.
                    </li>
                    <li>
                      <strong>Hire a local guide:</strong> Both the Battle of
                      Khonoma history and the sanctuary's ecology come alive
                      far more with someone who grew up here.
                    </li>
                    <li>
                      <strong>Approach the history with respect:</strong>{" "}
                      This is a village that fought for its autonomy — treat
                      its history and its present-day conservation work with
                      genuine appreciation.
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
                          "Book a community homestay for the full experience",
                          "Take a guided walk in the Tragopan Sanctuary",
                          "Ask about the Battle of Khonoma history",
                          "Support the village's conservation model by staying overnight",
                          "Carry cash — card payments are unreliable here",
                          "Dress warmly for cool mornings and evenings",
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
                          "Expect a guaranteed tragopan sighting",
                          "Rush through as a quick day trip if you can avoid it",
                          "Wander sanctuary trails without a guide",
                          "Expect ATMs or extensive card payment options",
                          "Treat the conservation work as a curiosity rather than an achievement",
                          "Skip warm layers even outside deep winter",
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
                    <strong>🗺️ Extend the trip:</strong> Khonoma pairs
                    naturally with{" "}
                    <Link href="/blog/kohima-travel-guide">Kohima</Link> and
                    the wider{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      Nagaland travel guide
                    </Link>{" "}
                    circuit, especially if your trip coincides with the
                    Hornbill Festival calendar.
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
                  "Khonoma",
                  "Green Village",
                  "Nagaland",
                  "Angami Naga",
                  "Tragopan Sanctuary",
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

              <RelatedPostsGrid currentSlug="khonoma-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="khonoma-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
