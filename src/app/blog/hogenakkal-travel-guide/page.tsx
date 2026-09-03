// src/app/blog/hogenakkal-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hogenakkal Falls Guide: Boating & Best Time",
  description:
    "Complete Hogenakkal guide — coracle rides through the Kaveri river gorge, the riverside fish and oil massage tradition, how to reach from Dharmapuri or Bangalore, and a full visit plan.",
  keywords:
    "Hogenakkal travel guide, Hogenakkal Falls, Kaveri river gorge, coracle ride Hogenakkal, Niagara of India, Hogenakkal fish massage, how to reach Hogenakkal, Dharmapuri waterfalls",
  openGraph: {
    title: "Hogenakkal Falls Guide: Boating & Best Time",
    description:
      "Where the Kaveri drops through a rocky gorge, and a round woven coracle is the only way to see it up close — the complete Hogenakkal guide.",
    url: "https://club.kudozz.in/blog/hogenakkal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Clear river water flowing through rocky terrain, evoking Hogenakkal's Kaveri river gorge",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hogenakkal Falls Guide: Boating & Best Time",
    description:
      "A coracle ride through the Kaveri river gorge, and a riverside town built around it — the complete Hogenakkal guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/hogenakkal-travel-guide",
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
          headline: "Hogenakkal Falls Guide: Boating & Best Time",
          description:
            "Complete Hogenakkal guide — coracle rides through the Kaveri river gorge, the riverside fish and oil massage tradition, how to reach from Dharmapuri or Bangalore, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/hogenakkal-travel-guide",
          },
          keywords:
            "Hogenakkal, Kaveri river, Tamil Nadu, coracle ride, Dharmapuri, waterfalls",
          about: {
            "@type": "Place",
            name: "Hogenakkal",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tamil Nadu",
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
                name: "Tamil Nadu",
                item: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Hogenakkal",
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
    q: "Is the coracle ride at Hogenakkal safe?",
    a: "Coracle rides are generally well-run by experienced local boatmen and are a popular, established activity here. Rides can be suspended for safety during very high monsoon water levels — always follow the operators' current guidance rather than insisting on a ride regardless of conditions.",
  },
  {
    q: "What is the best time to visit Hogenakkal?",
    a: "Roughly October to February is best — post-monsoon water levels give a good balance of dramatic flow through the gorge and safer, more consistent boating conditions.",
  },
  {
    q: "How far is Hogenakkal from Bangalore and Salem?",
    a: "Hogenakkal is close to the Tamil Nadu-Karnataka border, making it a fairly easy day or weekend trip from Bangalore (roughly 130 km) as well as from Salem or Dharmapuri within Tamil Nadu.",
  },
  {
    q: "What is the fish and oil massage tradition at Hogenakkal?",
    a: "Riverside spots near the falls offer a local tradition of open-air oil massages, sometimes paired with small fish nibbling at bathers' feet in shallow pools — marketed to visitors as a wellness activity alongside the sightseeing and boating.",
  },
  {
    q: "Is Hogenakkal a good day trip?",
    a: "Yes — most visitors comfortably cover the coracle ride, falls viewpoints, and a riverside meal in a single day, making it a popular day trip from Bangalore, Salem, or Dharmapuri.",
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
  { id: "introduction", title: "The Niagara of India", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hogenakkal", level: 2 },
  { id: "things-to-do", title: "Coracle Rides & Riverside Traditions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HogenakkalGuidePage() {
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
              alt="Clear river water flowing through rocky terrain, evoking Hogenakkal's Kaveri river gorge"
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
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Hogenakkal", href: null },
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
                "Hogenakkal",
                "Kaveri River",
                "Coracle Ride",
                "Dharmapuri",
                "Off-beat",
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
              Hogenakkal: Coracle Rides on the Kaveri Gorge
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Nicknamed the "Niagara of India" — where the Kaveri river
              drops through a rocky gorge, best seen from a traditional
              round coracle threading the rapids.
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
                  text: "Dharmapuri district, Tamil Nadu",
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
                  <h2>The Niagara of India</h2>
                  <p>
                    <strong>Hogenakkal Falls</strong>, in Dharmapuri
                    district, is formed where the{" "}
                    <strong>Kaveri (Cauvery) river</strong> drops through a
                    narrow, rocky gorge — informally nicknamed the{" "}
                    <strong>"Niagara of India"</strong> by locals. It's a
                    popular local comparison rather than a claim about
                    scale, but it captures how dramatic the water looks as
                    it forces through the rocks here.
                  </p>
                  <p>
                    The signature way to experience it is a{" "}
                    <strong>coracle ride</strong> — a traditional round,
                    woven boat — steered by local boatmen through the
                    rapids and rock formations close to the falls, giving a
                    view of the gorge that simply isn't available from the
                    banks.
                  </p>
                  <p>
                    Along the riverbank, open-air fish and oil massage spots
                    add a long-standing local wellness tradition to the
                    sightseeing — a distinctive Hogenakkal experience in its
                    own right.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🚣</span> Hogenakkal at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Dharmapuri district, Tamil Nadu",
                        },
                        {
                          icon: "🚗",
                          label: "From Bangalore",
                          value: "~130 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Kaveri Gorge, Coracle Rides",
                        },
                        {
                          icon: "🐟",
                          label: "Local Tradition",
                          value: "Fish & Oil Massage",
                        },
                        {
                          icon: "🎯",
                          label: "Good For",
                          value: "Easy Day Trip",
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
                  <h2>Best Time to Visit Hogenakkal</h2>
                  <p>
                    Water levels shape both the visual drama of the falls
                    and how reliable coracle rides are on any given day.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Post-monsoon water levels give a strong, dramatic flow through the gorge while keeping boating conditions comfortably safe.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warmer, lower water",
                        text: "Flow thins out in the dry months — still visitable, but with a noticeably calmer, less dramatic gorge.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — can suspend boating",
                        text: "Heavy monsoon flow can make the river genuinely dangerous, and coracle rides are sometimes suspended for safety during peak flood periods.",
                      },
                      {
                        season: "Weekday mornings",
                        emoji: "🕊️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best for a quieter visit",
                        text: "Hogenakkal draws heavy weekend crowds from nearby cities — a weekday morning visit is noticeably calmer.",
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
                    <strong>Our pick:</strong> October to February —
                    strong, photogenic flow through the gorge, and the most
                    consistently safe conditions for coracle rides.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Hogenakkal</h2>
                  <ul>
                    <li>
                      <strong>By road from Bangalore:</strong> Roughly 130
                      km, given Hogenakkal's proximity to the Tamil
                      Nadu-Karnataka border — a popular day or weekend trip
                      for Bangalore residents.
                    </li>
                    <li>
                      <strong>By road from Dharmapuri or Salem:</strong> A
                      shorter, easy drive from within Tamil Nadu, making it
                      accessible as a day trip from either town.
                    </li>
                    <li>
                      <strong>Nearest rail connections:</strong> Dharmapuri
                      and Salem both have rail links, with onward road
                      transport to Hogenakkal itself.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check current coracle ride
                    availability before travelling if visiting during or
                    just after heavy rain — high water can pause rides for
                    safety.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Coracle Rides & Riverside Traditions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="River gorge with clear rapids near Hogenakkal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Coracle Rides Through the Gorge</h3>
                  <p>
                    Local boatmen steer round woven coracles through the
                    rapids and rock formations near the falls — a short but
                    genuinely thrilling ride that gets you close to the
                    gorge in a way no viewpoint on land can match.
                  </p>
                  <h3>Fish & Oil Massage</h3>
                  <p>
                    Riverside spots offer a long-standing local tradition of
                    open-air oil massages, sometimes combined with shallow
                    pools where small fish nibble at bathers' feet —
                    marketed today as a wellness experience for visitors.
                  </p>
                  <h3>The Falls Viewpoints</h3>
                  <p>
                    Beyond the boat ride, several viewpoints along the banks
                    let you take in the gorge and the falls without getting
                    on the water, useful for anyone not keen on the
                    coracle.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Hogenakkal</h2>
                  <p>
                    Accommodation in Hogenakkal town itself is modest — most
                    visitors either day-trip in or base themselves in
                    Dharmapuri or Salem.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,500/night",
                        picks: [
                          "Basic lodges in Hogenakkal town",
                          "Government tourist accommodation",
                          "Simple guesthouses",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹3,500/night",
                        picks: [
                          "Standard hotels in Dharmapuri",
                          "Resort-style stays near the river",
                          "Comfortable town hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹4,000–₹8,000+/night",
                        picks: [
                          "Premium hotels in Salem",
                          "Riverside resort properties",
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
                  <h2>Suggested Visit Plan (Day Trip)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Arrival & Coracle Ride",
                        color: "bg-amber-700",
                        activities: [
                          "Drive in from Bangalore, Salem, or Dharmapuri",
                          "Take a coracle ride through the gorge",
                          "Photograph the falls from the riverside viewpoints",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Riverside & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Try the fish and oil massage tradition",
                          "Riverside lunch with fresh fish",
                          "Head back before evening",
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
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for combining Hogenakkal with a wider northern Tamil
                    Nadu circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Hogenakkal</h2>
                  <ul>
                    <li>
                      <strong>Riverside fish stalls:</strong> Fresh
                      river fish, often fried or curried on the spot, is
                      the local specialty and the thing most visitors come
                      to try.
                    </li>
                    <li>
                      <strong>Simple Tamil eateries:</strong> Basic "meals"
                      restaurants around the town for a fuller lunch.
                    </li>
                    <li>
                      <strong>Dharmapuri or Salem:</strong> A wider choice
                      of restaurants if travelling through en route.
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
                          ["Coracle ride (per boat/group)", "₹400", "₹600", "₹1,000"],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹6,000"],
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
                    * Coracle ride cost is typically per boat, best split
                    across a small group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Hogenakkal</h2>
                  <ul>
                    <li>
                      <strong>Check ride conditions before travelling:</strong>{" "}
                      Especially just after heavy rain, confirm coracle
                      rides are running before making the trip.
                    </li>
                    <li>
                      <strong>Wear clothes you don't mind getting wet
                      or oily:</strong> Both the coracle ride and the
                      massage tradition involve getting genuinely wet.
                    </li>
                    <li>
                      <strong>Keep valuables secure:</strong> During the
                      boat ride, keep phones and cash in a secure,
                      waterproof bag.
                    </li>
                    <li>
                      <strong>Visit on a weekday if you can:</strong>{" "}
                      Weekends draw heavy crowds from nearby cities.
                    </li>
                    <li>
                      <strong>Negotiate coracle fares upfront:</strong>{" "}
                      Confirm the price with the boatman before setting
                      off.
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
                          "Check coracle ride conditions before travelling",
                          "Negotiate and confirm the fare before boarding",
                          "Try the fresh river fish at a riverside stall",
                          "Keep valuables in a secure, waterproof bag",
                          "Visit on a weekday for a quieter experience",
                          "Carry a change of clothes",
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
                          "Insist on a coracle ride during unsafe high-water conditions",
                          "Carry loose valuables unsecured on the boat",
                          "Expect a quiet visit on weekends",
                          "Skip confirming the fare before the ride starts",
                          "Wander onto rocks near strong currents",
                          "Forget footwear suited to wet, uneven ground",
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
                    <strong>🗺️ Extend the trip:</strong> Hogenakkal is easy
                    to combine with a wider Dharmapuri-Salem circuit, or as
                    a weekend trip from Bangalore. See our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for the region.
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
                  "Hogenakkal Falls",
                  "Kaveri River",
                  "Tamil Nadu",
                  "Waterfall",
                  "Coracle Ride",
                  "Dharmapuri",
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

              <RelatedPostsGrid currentSlug="hogenakkal-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="hogenakkal-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
