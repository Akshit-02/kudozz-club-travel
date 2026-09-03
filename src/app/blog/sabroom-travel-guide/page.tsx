// src/app/blog/sabroom-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sabroom Travel Guide: Maitri Setu Bridge & Tips",
  description:
    "Complete Sabroom guide — the Maitri Setu Friendship Bridge over the Feni river, Baikhora archaeological site, Rabindra Kanan, how to reach from Agartala, and a South Tripura visit plan.",
  keywords:
    "Sabroom travel guide, Maitri Setu bridge, Feni river Tripura, Baikhora archaeological site, South Tripura, Belonia, Bangladesh border Tripura, how to reach Sabroom, Act East policy Tripura",
  openGraph: {
    title: "Sabroom Travel Guide: Maitri Setu Bridge & Tips",
    description:
      "Tripura's southernmost town, a landmark friendship bridge to Bangladesh, and an ancient terracotta site — the complete Sabroom guide.",
    url: "https://club.kudozz.in/blog/sabroom-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Riverside landscape at dusk, evoking Sabroom's Feni river and the Maitri Setu bridge to Bangladesh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabroom Travel Guide: Maitri Setu Bridge & Tips",
    description:
      "The Maitri Setu Friendship Bridge, the Feni river border, and Tripura's southernmost town — the complete Sabroom guide.",
    images: ["/images/destinations/udaipur/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sabroom-travel-guide",
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
          headline: "Sabroom Travel Guide: Maitri Setu Bridge & Tips",
          description:
            "Complete Sabroom guide — the Maitri Setu Friendship Bridge over the Feni river, Baikhora archaeological site, Rabindra Kanan, how to reach from Agartala, and a South Tripura visit plan.",
          image: "https://club.kudozz.in/images/destinations/udaipur/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/sabroom-travel-guide",
          },
          keywords:
            "Sabroom, Maitri Setu, Feni river, South Tripura, Bangladesh border, Act East policy",
          about: {
            "@type": "Place",
            name: "Sabroom",
            address: {
              "@type": "PostalAddress",
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
                name: "Sabroom",
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
    q: "What is the Maitri Setu bridge?",
    a: "The Maitri Setu (\"Friendship Bridge\") is a bridge over the Feni river at Sabroom, inaugurated in 2021, connecting India to Bangladesh's Chittagong port area. It's positioned as a strategically important link under India's Act East policy, intended to give Northeast India a shorter route toward Chittagong port and, by extension, Southeast Asia.",
  },
  {
    q: "Can tourists cross into Bangladesh at Sabroom?",
    a: "No — the Maitri Setu is a landmark and connectivity project rather than a casual tourist border crossing. For most visitors it's a viewpoint and photo stop rather than a route across the border; always check current access rules before visiting.",
  },
  {
    q: "How far is Sabroom from Agartala?",
    a: "Roughly 135 km, a half-day drive by road, connected via Udaipur and Belonia.",
  },
  {
    q: "What else is there to see in Sabroom?",
    a: "The Baikhora archaeological site, known for ancient terracotta plaques, Rabindra Kanan park, and easy access to Trishna Wildlife Sanctuary nearby round out a South Tripura visit centred on Sabroom.",
  },
  {
    q: "Is it safe to visit a border town like Sabroom?",
    a: "Yes, Sabroom itself is a regular town with no particular safety concerns for visitors — the practical points are carrying ID, checking current photography and access rules near the bridge and border area, and confirming any local advisories before your trip.",
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
  { id: "introduction", title: "Tripura's Southernmost Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sabroom", level: 2 },
  { id: "things-to-do", title: "Maitri Setu, Baikhora & Rabindra Kanan", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SabroomGuidePage() {
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
              src="/images/destinations/udaipur/hero.jpg"
              alt="Riverside landscape at dusk, evoking Sabroom's Feni river and the Maitri Setu bridge to Bangladesh"
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
                { label: "Sabroom", href: null },
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
                "Sabroom",
                "Maitri Setu",
                "Feni River",
                "Border Town",
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
              Sabroom: Maitri Setu Bridge & Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Tripura's southernmost town, sitting on the Feni river border
              with Bangladesh — home to the Maitri Setu, a landmark bridge
              built to link Northeast India toward Chittagong port.
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
                  text: "South Tripura district",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,950 words",
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
                  <h2>Tripura's Southernmost Town</h2>
                  <p>
                    <strong>Sabroom</strong> is the southernmost town in{" "}
                    <Link href="/blog/tripura-travel-guide">Tripura</Link>,
                    roughly 135 km from Agartala, sitting on the{" "}
                    <strong>Feni river</strong>, which forms the
                    international border with Bangladesh at this point.
                  </p>
                  <p>
                    Its major landmark is the <strong>Maitri Setu</strong>{" "}
                    ("Friendship Bridge"), inaugurated in 2021, connecting
                    India to Bangladesh's Chittagong (Chattogram) port area
                    over the Feni river. The bridge is a strategically
                    important piece of India's Act East policy — intended to
                    give Northeast India a shorter route to Chittagong port
                    and, by extension, better connectivity toward Southeast
                    Asia.
                  </p>
                  <p>
                    For most travellers, the bridge is a landmark and
                    viewpoint rather than a crossing point — a symbol of this
                    connectivity push more than a place to casually cross
                    into Bangladesh. Combined with the nearby Baikhora
                    archaeological site and easy access to Trishna Wildlife
                    Sanctuary, Sabroom makes a solid anchor for a South
                    Tripura loop.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌉</span> Sabroom at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Tripura, on the Feni river",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~135 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🌉",
                          label: "Known For",
                          value: "Maitri Setu Bridge",
                        },
                        {
                          icon: "🏺",
                          label: "Nearby",
                          value: "Baikhora archaeological site",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Trishna Wildlife Sanctuary",
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
                  <h2>Best Time to Visit Sabroom</h2>
                  <p>
                    Like most of South Tripura, cool, dry conditions make the
                    biggest difference for a comfortable visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool and dry, the most comfortable window for the drive down from Agartala and for exploring Baikhora and the bridge viewpoint.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, workable with an early start",
                        text: "Heat builds through the day, so plan outdoor sightseeing for the morning where possible.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "The Feni river runs high and the long drive from Agartala becomes considerably less comfortable.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clearest river views",
                        text: "Winter clarity gives the best conditions for photographing the Maitri Setu and the Feni river.",
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
                    <strong>Our pick:</strong> November to February — cool,
                    clear conditions for both the drive and for river and
                    bridge views at Sabroom.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sabroom</h2>
                  <p>
                    Sabroom sits roughly 135 km from Agartala, reached
                    entirely by road via Udaipur and Belonia — a half-day
                    drive.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Agartala:</strong> Around 3.5-4
                      hours by car via Udaipur and Belonia, on reasonable
                      state highway conditions.
                    </li>
                    <li>
                      <strong>Via Belonia:</strong> Belonia, closer to
                      Sabroom, is a useful stop for supplies and is also the
                      gateway town for Trishna Wildlife Sanctuary.
                    </li>
                    <li>
                      <strong>Local transport:</strong> Shared vehicles run
                      from Agartala toward Belonia and Sabroom, but a private
                      car gives far more flexibility for visiting the bridge
                      viewpoint, Baikhora, and Rabindra Kanan in one trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given the drive length,
                    plan Sabroom as an overnight stop or combine it with
                    Trishna Wildlife Sanctuary rather than a rushed same-day
                    round trip from Agartala.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Maitri Setu, Baikhora & Rabindra Kanan</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/hero.jpg"
                      alt="Riverside scenery near Sabroom, South Tripura"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Maitri Setu Bridge</h3>
                  <p>
                    The Maitri Setu is Sabroom's headline landmark — a bridge
                    over the Feni river symbolising India's connectivity push
                    toward Bangladesh's Chittagong port. It's best visited as
                    a viewpoint and photo stop; always check current access
                    and photography rules given its location in a border
                    zone.
                  </p>
                  <h3>Baikhora Archaeological Site</h3>
                  <p>
                    Known for ancient terracotta plaques and artifacts,
                    Baikhora is evidence of Tripura's deep Buddhist and Hindu
                    heritage in the south of the state — a quieter, less
                    signposted counterpart to the better-known Pilak site
                    near Udaipur.
                  </p>
                  <h3>Rabindra Kanan</h3>
                  <p>
                    A local park worth a casual stop for a relaxed break
                    between sightseeing — nothing elaborate, but a pleasant
                    pause in Sabroom town.
                  </p>
                  <h3>Base for Trishna Wildlife Sanctuary</h3>
                  <p>
                    Sabroom's location makes it a practical base for visiting{" "}
                    <Link href="/blog/trishna-wildlife-sanctuary-travel-guide">
                      Trishna Wildlife Sanctuary
                    </Link>{" "}
                    and other South Tripura sites around Belonia.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Sabroom</h2>
                  <p>
                    Accommodation in Sabroom town itself is modest — most
                    visitors combine it with a wider South Tripura loop
                    rather than a dedicated multi-night stay.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic lodges, Sabroom town",
                          "Guesthouses, Belonia (nearby)",
                          "Simple government rest houses",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Better hotels, Belonia",
                          "Business-style stays en route",
                        ],
                      },
                      {
                        tier: "Practical Note",
                        icon: "⚠️",
                        range: "Limited options",
                        picks: [
                          "No dedicated luxury stays in Sabroom",
                          "Agartala remains a full-service alternative",
                          "Book ahead for South Tripura loop trips",
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
                  <h2>Suggested Visit Plan (South Tripura Loop)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Agartala to Sabroom",
                        color: "bg-amber-700",
                        activities: [
                          "Drive via Udaipur and Belonia",
                          "Maitri Setu viewpoint, check current access rules",
                          "Rabindra Kanan, overnight in Sabroom or Belonia",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Baikhora & Trishna",
                        color: "bg-sky-600",
                        activities: [
                          "Morning visit to Baikhora archaeological site",
                          "Drive to Trishna Wildlife Sanctuary",
                          "Watchtower safari, return toward Agartala",
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
                    * See our full{" "}
                    <Link href="/blog/trishna-wildlife-sanctuary-travel-guide">
                      Trishna Wildlife Sanctuary guide
                    </Link>{" "}
                    for a deeper Day 2 plan.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Sabroom</h2>
                  <ul>
                    <li>
                      <strong>Local eateries, Sabroom town:</strong> A modest
                      spread of restaurants and dhabas serving Bengali- and
                      Tripuri-influenced meals.
                    </li>
                    <li>
                      <strong>Belonia:</strong> A slightly wider choice of
                      restaurants if travelling via this larger nearby town.
                    </li>
                    <li>
                      <strong>Roadside stalls:</strong> Tea and snack stops
                      along the Agartala–Belonia–Sabroom road for the drive.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹5,000"],
                          ["Car hire from Agartala (round trip)", "₹5,500", "₹8,000", "₹11,000"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          ["Site entry fees", "₹50", "₹50", "₹50"],
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
                  <h2>Essential Tips for Visiting Sabroom</h2>
                  <ul>
                    <li>
                      <strong>Check current bridge access rules:</strong>{" "}
                      Border-area photography and access rules can change —
                      confirm before your visit rather than assuming.
                    </li>
                    <li>
                      <strong>Carry ID:</strong> Standard practice for any
                      visit near a border zone in this region.
                    </li>
                    <li>
                      <strong>Plan for a long drive:</strong> The distance
                      from Agartala makes an overnight stay or a combined
                      Trishna Wildlife Sanctuary trip more comfortable than a
                      rushed round trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is
                      inconsistent outside Agartala's main commercial areas.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong> Sabroom is
                      a genuinely offbeat stop — infrastructure is basic
                      compared to Agartala.
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
                          "Check current Maitri Setu access rules ahead of time",
                          "Carry ID for the border-area visit",
                          "Combine with Trishna Wildlife Sanctuary",
                          "Carry enough cash for the whole trip",
                          "Visit October–March for the most comfortable drive",
                          "Stop at Baikhora for the terracotta site",
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
                          "Assume you can cross into Bangladesh here",
                          "Rush a same-day round trip from Agartala",
                          "Rely on cards outside Agartala's main areas",
                          "Skip checking border-area photography rules",
                          "Expect luxury accommodation in Sabroom town",
                          "Travel here during peak monsoon (Jul-Sep)",
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
                    <strong>🗺️ Extend the trip:</strong> Sabroom pairs
                    naturally with{" "}
                    <Link href="/blog/trishna-wildlife-sanctuary-travel-guide">
                      Trishna Wildlife Sanctuary
                    </Link>{" "}
                    for a fuller South Tripura loop. See our full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
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
                {["Sabroom", "Maitri Setu", "Tripura", "Border Town"].map(
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

              <RelatedPostsGrid currentSlug="sabroom-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sabroom-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
