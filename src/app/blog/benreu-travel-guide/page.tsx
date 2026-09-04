// src/app/blog/benreu-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Benreu Village Guide: Zeliang Naga Heritage",
  description:
    "Complete Benreu village guide — Zeliang Naga heritage and traditional architecture, community-based homestays, proximity to Barail Wildlife Sanctuary, how to reach Peren district, and what to expect.",
  keywords:
    "Benreu village Nagaland, Zeliang Naga, Peren district, Nagaland homestay, Barail Wildlife Sanctuary, community tourism Nagaland, Naga village visit, offbeat Nagaland",
  openGraph: {
    title: "Benreu Village Guide: Zeliang Naga Heritage",
    description:
      "A Zeliang Naga village in Peren district offering genuine homestay-based community tourism — the complete Benreu guide.",
    url: "https://club.kudozz.in/blog/benreu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Remote hill valley landscape, evoking the quiet, lightly-touristed setting of Benreu village in Nagaland",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Benreu Village Guide: Zeliang Naga Heritage",
    description:
      "A Zeliang Naga village offering genuine homestay-based community tourism in Peren district — the complete Benreu guide.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/benreu-travel-guide",
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
          headline: "Benreu Village Guide: Zeliang Naga Heritage",
          description:
            "Complete Benreu village guide — Zeliang Naga heritage and traditional architecture, community-based homestays, proximity to Barail Wildlife Sanctuary, how to reach Peren district, and what to expect.",
          image:
            "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/benreu-travel-guide",
          },
          keywords:
            "Benreu, Zeliang Naga, Peren district, Nagaland, community tourism, homestay",
          about: {
            "@type": "Place",
            name: "Benreu",
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
                name: "Benreu",
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
    q: "What is a homestay experience like in Benreu?",
    a: "Genuinely immersive — you stay with a Zeliang Naga family, share meals, and often join guided walks around the village's traditional architecture and community structures. It's a cultural exchange more than a scripted tour, so go in with openness and curiosity.",
  },
  {
    q: "How far is Benreu from Kohima?",
    a: "It's a journey through Peren district on hill roads — plan for several hours of travel, and treat it as a deliberate detour rather than a quick stop en route to somewhere else.",
  },
  {
    q: "Is Benreu connected to Barail Wildlife Sanctuary?",
    a: "Yes — Benreu serves as a practical base for exploring the wider Barail Wildlife Sanctuary region, which straddles Nagaland and neighbouring Assam. Many visitors combine the two.",
  },
  {
    q: "Is this suitable for a short visit, or does it need more time?",
    a: "Benreu rewards an unhurried 1-2 night stay far more than a rushed day trip. The appeal is slow immersion in village life, not a checklist of sights — rushing it defeats the point.",
  },
  {
    q: "How remote is the village?",
    a: "Very — Benreu remains relatively unknown even by Nagaland's already offbeat standards. Expect basic infrastructure and a genuinely quiet, low-key setting rather than any established tourist circuit.",
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
  { id: "introduction", title: "A Zeliang Naga Village", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Benreu", level: 2 },
  { id: "things-to-do", title: "Village Life & Barail Sanctuary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BenreuGuidePage() {
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
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="Remote hill valley landscape, evoking the quiet, lightly-touristed setting of Benreu village in Nagaland"
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
                { label: "Benreu", href: null },
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
              {["Benreu", "Zeliang Naga", "Peren District", "Nagaland"].map(
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
              Benreu Village Guide: Zeliang Naga Heritage
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Zeliang Naga village in Peren district, where community-run
              homestays offer a genuine, unhurried window into traditional
              village life.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Peren District, Nagaland",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>A Zeliang Naga Village</h2>
                  <p>
                    <strong>Benreu</strong> is a Zeliang Naga village in
                    Peren district, known for its distinctive traditional
                    village governance and architecture, and increasingly for
                    community-based tourism initiatives that let visitors
                    experience village life directly — through homestays and
                    guided cultural walks led by local hosts.
                  </p>
                  <p>
                    Even by the standards of Nagaland&apos;s already offbeat
                    tourism scene, Benreu remains relatively unknown. That is
                    exactly its appeal: a genuinely authentic, low-key village
                    experience away from any established circuit, for
                    travelers who want to slow down rather than tick off
                    sights.
                  </p>
                  <p>
                    The village also serves as a practical base for exploring
                    the wider{" "}
                    <Link href="/blog/peren-travel-guide">
                      Peren district
                    </Link>{" "}
                    and the Barail Wildlife Sanctuary region, which straddles
                    Nagaland and neighbouring Assam.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏘️</span> Benreu at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Peren, Nagaland",
                        },
                        {
                          icon: "👥",
                          label: "Community",
                          value: "Zeliang Naga",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🏠",
                          label: "Known For",
                          value: "Community Homestays",
                        },
                        {
                          icon: "🌿",
                          label: "Nearby",
                          value: "Barail Wildlife Sanctuary",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹2,000",
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
                  <h2>Best Time to Visit Benreu</h2>
                  <p>
                    Comfortable travel and pleasant conditions for village
                    walks both point to the drier months.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry, comfortable conditions for village walks and the drive through Peren district's hill roads.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Coolest, clearest",
                        text: "Crisp mornings and clear views over the surrounding hills — a particularly atmospheric time for a homestay.",
                      },
                      {
                        season: "May – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — difficult travel",
                        text: "Heavy rain makes the hill roads into Peren district considerably harder going — best avoided if possible.",
                      },
                      {
                        season: "Nov",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Hornbill Festival season",
                        text: "Combine a Benreu homestay with Nagaland's Hornbill Festival in Kohima/Kisama for a fuller cultural trip.",
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
                    <strong>Our pick:</strong> October to April, with
                    December-February offering the clearest, most comfortable
                    conditions for village walks.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Benreu</h2>
                  <p>
                    Benreu sits well off the standard Nagaland tourist route,
                    so getting there takes some deliberate planning.
                  </p>
                  <ul>
                    <li>
                      <strong>From Kohima:</strong> A multi-hour drive through
                      Peren district on hill roads — genuinely off the beaten
                      path, so set honest expectations about travel time.
                    </li>
                    <li>
                      <strong>Via Peren town:</strong> Most visitors route
                      through{" "}
                      <Link href="/blog/peren-travel-guide">
                        Peren district headquarters
                      </Link>{" "}
                      first, arranging the final stretch to Benreu with local
                      contacts or a homestay host.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange your homestay in
                    advance through a local contact or tour operator — Benreu
                    isn&apos;t the kind of place you can simply show up to and
                    expect to find a room.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Village Life & Barail Sanctuary</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Hill landscape evoking the surroundings of Benreu village and the Barail Wildlife Sanctuary region"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Traditional Zeliang Architecture</h3>
                  <p>
                    Benreu&apos;s community structures and family homes
                    reflect traditional Zeliang Naga building styles, best
                    explored with a local host who can explain the meaning
                    and history behind what you&apos;re seeing.
                  </p>
                  <h3>Community Homestays</h3>
                  <p>
                    The heart of a Benreu visit — staying with a local family,
                    sharing meals, and joining guided walks that go well
                    beyond what a passing visitor would ever see.
                  </p>
                  <h3>Barail Wildlife Sanctuary</h3>
                  <p>
                    Benreu serves as a practical base for exploring the wider
                    Barail Wildlife Sanctuary region, which straddles
                    Nagaland and neighbouring Assam — a worthwhile extension
                    for travelers with an extra day or two.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Community homestays are the main — and most meaningful —
                    way to stay in Benreu.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Homestay (Standard)",
                        icon: "🏠",
                        range: "₹800–₹1,200/night",
                        picks: [
                          "Family homestays with shared meals",
                          "Basic but comfortable rooms",
                          "Arranged through village contacts",
                        ],
                      },
                      {
                        tier: "Homestay (With Guide)",
                        icon: "🥾",
                        range: "₹1,200–₹1,800/night",
                        picks: [
                          "Homestay plus guided village/nature walks",
                          "Cultural context from your host family",
                        ],
                      },
                      {
                        tier: "Nearby Peren Town",
                        icon: "🏨",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Basic guesthouses if homestays are full",
                          "A practical fallback option",
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
                        title: "Arrival & Village Walk",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Kohima/Peren, check into your homestay",
                          "Guided walk through the village",
                          "Evening meal with your host family",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Culture & Nature",
                        color: "bg-sky-600",
                        activities: [
                          "Learn about Zeliang traditions from your host",
                          "Optional excursion toward Barail Wildlife Sanctuary",
                          "Depart for Peren or Kohima",
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
                    * With more time, extend into wider{" "}
                    <Link href="/blog/peren-travel-guide">
                      Peren district
                    </Link>{" "}
                    for a fuller southern Nagaland nature-and-culture trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food in Benreu</h2>
                  <ul>
                    <li>
                      <strong>Homestay meals:</strong> The main and most
                      authentic way to eat here — shared meals of Zeliang
                      cuisine cooked by your host family.
                    </li>
                    <li>
                      <strong>Local ingredients:</strong> Expect
                      forest-foraged greens, smoked meats, and rice — typical
                      of Naga hill cuisine.
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
                          [
                            "Homestay/night (with meals)",
                            "₹800",
                            "₹1,200",
                            "₹1,800",
                          ],
                          [
                            "Local guide/day",
                            "₹500",
                            "₹800",
                            "₹1,200",
                          ],
                          [
                            "Vehicle hire (Kohima round trip)",
                            "₹6,000",
                            "₹9,000",
                            "₹13,000",
                          ],
                          ["Daily total", "₹1,300", "₹2,000", "₹3,000"],
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
                    * Homestay rates typically include meals — always confirm
                    with your host in advance.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Benreu</h2>
                  <ul>
                    <li>
                      <strong>Arrange your homestay ahead of time:</strong>{" "}
                      Don&apos;t expect to find accommodation on arrival —
                      book through a local contact or tour operator first.
                    </li>
                    <li>
                      <strong>Approach it as cultural exchange:</strong> A
                      homestay here is a genuine opportunity to learn about
                      Zeliang Naga life — engage with openness and respect.
                    </li>
                    <li>
                      <strong>Ask before photographing:</strong> As with any
                      village visit, ask your hosts before taking photos of
                      people or private spaces.
                    </li>
                    <li>
                      <strong>Combine with Peren:</strong> Pair your Benreu
                      stay with the wider{" "}
                      <Link href="/blog/peren-travel-guide">
                        Peren district
                      </Link>{" "}
                      for a fuller trip.
                    </li>
                    <li>
                      <strong>Keep expectations realistic:</strong> This is
                      genuinely offbeat — infrastructure is basic, and
                      that&apos;s part of the point.
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
                          "Book your homestay in advance",
                          "Spend at least one full unhurried day here",
                          "Ask your host about local traditions and history",
                          "Combine with Peren and Barail Sanctuary",
                          "Try authentic Zeliang home-cooked meals",
                          "Carry cash — card payments are unreliable here",
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
                          "Show up without arranging a homestay first",
                          "Rush the visit into a single quick stop",
                          "Photograph people or homes without asking",
                          "Expect polished tourist infrastructure",
                          "Rely on cards or ATMs being nearby",
                          "Skip cultural etiquette out of unfamiliarity",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Benreu with{" "}
                    <Link href="/blog/peren-travel-guide">
                      Peren and Intanki National Park
                    </Link>{" "}
                    for a fuller southern Nagaland nature-and-culture circuit.
                    See our full{" "}
                    <Link href="/blog/nagaland-travel-guide">
                      Nagaland travel guide
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
                  "Benreu",
                  "Zeliang Naga",
                  "Peren District",
                  "Nagaland",
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

              <RelatedPostsGrid currentSlug="benreu-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="benreu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
