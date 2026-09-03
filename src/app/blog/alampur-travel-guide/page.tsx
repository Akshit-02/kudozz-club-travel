// src/app/blog/alampur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Alampur Travel Guide: Navabrahma Temples & Tips",
  description:
    "Complete Alampur guide — the nine Chalukyan Navabrahma Temples, the Jogulamba Shakti Peetha, the Krishna-Tungabhadra confluence, how to reach from Hyderabad, and a full visit plan.",
  keywords:
    "Alampur travel guide, Navabrahma Temples, Jogulamba temple, Alampur Telangana, Krishna Tungabhadra confluence, Chalukya temples Telangana, gateway to Srisailam, how to reach Alampur, Alampur Shakti Peetha",
  openGraph: {
    title: "Alampur Travel Guide: Navabrahma Temples & Tips",
    description:
      "Nine sandstone Chalukyan temples at a sacred river confluence, and a Shakti Peetha reborn from ruin — the complete guide to Alampur.",
    url: "https://club.kudozz.in/blog/alampur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/saheliyon.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stone temple architecture set within a landscaped courtyard, evoking Alampur's Chalukyan-era Navabrahma Temples",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Alampur Travel Guide: Navabrahma Temples & Tips",
    description:
      "Nine sandstone Chalukyan temples at a sacred river confluence — the complete guide to Alampur, Telangana's western gateway to Srisailam.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/alampur-travel-guide",
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
          headline: "Alampur Travel Guide: Navabrahma Temples & Tips",
          description:
            "Complete Alampur guide — the nine Chalukyan Navabrahma Temples, the Jogulamba Shakti Peetha, the Krishna-Tungabhadra confluence, how to reach from Hyderabad, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/udaipur/saheliyon.jpg",
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
            "@id": "https://club.kudozz.in/blog/alampur-travel-guide",
          },
          keywords:
            "Alampur, Navabrahma Temples, Telangana, Jogulamba, Chalukya temples, heritage",
          about: {
            "@type": "Place",
            name: "Alampur",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Telangana",
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
                name: "Telangana",
                item: "https://club.kudozz.in/blog/telangana-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Alampur",
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
    q: "How far is Alampur from Hyderabad?",
    a: "Alampur is roughly 215 km from Hyderabad, about a 4-5 hour drive. It's a long day trip on its own, but works well combined with an overnight stay near Srisailam, given Alampur's traditional role as Srisailam's western gateway.",
  },
  {
    q: "What makes the Navabrahma Temples significant?",
    a: "The Navabrahma Temples are a group of nine sandstone Shiva temples built by the Badami Chalukya dynasty in the 7th-8th centuries CE. Their architectural style is distinctly early Chalukyan rather than the typical Telangana/Deccan temple idiom, making Alampur an unusual pocket of Karnataka-style temple architecture deep in Telangana.",
  },
  {
    q: "Is Alampur a Shakti Peetha too?",
    a: "Yes — alongside the Navabrahma group, Alampur is home to the Jogulamba Temple, dedicated to Jogulamba Devi, one of the 18 Shakti Peethas of Hindu tradition. The temple was restored in relatively recent decades after historical damage.",
  },
  {
    q: "What is the best time to visit Alampur?",
    a: "October to February is best — cooler temperatures make walking between the nine Navabrahma Temples far more comfortable than during Telangana's harsh summer.",
  },
  {
    q: "Can Alampur be combined with Srisailam?",
    a: "Yes, very naturally. Alampur has long served as the traditional western gateway to the Srisailam Jyotirlinga, and the two sit within a reasonable driving distance of each other along the Krishna river heritage circuit.",
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
  { id: "introduction", title: "A River-Confluence Temple Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Alampur", level: 2 },
  { id: "things-to-do", title: "Navabrahma Temples & Jogulamba", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AlampurGuidePage() {
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
              alt="Ancient stone temple architecture set within a landscaped courtyard, evoking Alampur's Chalukyan-era Navabrahma Temples"
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
                { label: "Telangana", href: "/blog/telangana-travel-guide" },
                { label: "Alampur", href: null },
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
                "Alampur",
                "Telangana",
                "Navabrahma Temples",
                "Jogulamba",
                "Heritage",
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
              Alampur: Navabrahma Temples & River Confluence Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Nine sandstone Shiva temples carved in a style you'd expect to
              find in Karnataka, standing where the Krishna and Tungabhadra
              rivers meet — Telangana's quiet gateway to Srisailam.
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
                  text: "Jogulamba Gadwal district, Telangana",
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
                  <h2>A River-Confluence Temple Town</h2>
                  <p>
                    <strong>Alampur</strong> sits at the confluence of the{" "}
                    <strong>Krishna</strong> and{" "}
                    <strong>Tungabhadra</strong> rivers, roughly 215 km from
                    Hyderabad in what is now Jogulamba Gadwal district. It has
                    long been known as one of the traditional gateways to the{" "}
                    <Link href="/blog/srisailam-travel-guide">
                      Srisailam
                    </Link>{" "}
                    Jyotirlinga — specifically the western one — a role that
                    still shapes how most visitors reach it today.
                  </p>
                  <p>
                    Its real draw, though, is architectural: the{" "}
                    <strong>Navabrahma Temples</strong>, a group of nine
                    sandstone Shiva temples built by the Badami Chalukya
                    dynasty in the 7th-8th centuries CE. Their style is
                    distinctly early Chalukyan — closer to temple
                    architecture you'd associate with Karnataka than the
                    typical Telangana Deccan idiom — which makes Alampur a
                    genuinely unusual pocket of heritage for anyone interested
                    in how South Indian temple architecture evolved.
                  </p>
                  <p>
                    Alongside the Navabrahma group stands the{" "}
                    <strong>Jogulamba Temple</strong>, dedicated to Jogulamba
                    Devi, one of the 18 Shakti Peethas of Hindu tradition and
                    restored in relatively recent decades after historical
                    damage. Between the temples and the river confluence
                    setting, a half-day here rewards anyone willing to make
                    the drive.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Alampur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Jogulamba Gadwal, Telangana",
                        },
                        {
                          icon: "🚗",
                          label: "From Hyderabad",
                          value: "~215 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Navabrahma Temples, Jogulamba",
                        },
                        {
                          icon: "🌊",
                          label: "Setting",
                          value: "Krishna-Tungabhadra confluence",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Srisailam",
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
                  <h2>Best Time to Visit Alampur</h2>
                  <p>
                    Alampur's temple complexes are entirely outdoor
                    walking-around sites, so Telangana's harsh summer heat
                    matters a great deal here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather makes walking between the nine Navabrahma Temples and the Jogulamba complex genuinely comfortable.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Temperatures climb sharply across this stretch of Telangana, making midday temple visits genuinely uncomfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green but humid",
                        text: "The river confluence looks scenic with fuller water, though rain can interrupt outdoor sightseeing on any given day.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Most pleasant window",
                        text: "The coolest, most comfortable stretch of the year for a long day of temple-hopping in the open sun.",
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
                    <strong>Our pick:</strong> December to January — the
                    coolest weather of the year, ideal for spending a full
                    morning walking between the nine Navabrahma Temples.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Alampur</h2>
                  <p>
                    Alampur sits far enough from Hyderabad that most visitors
                    treat it as a long day trip or combine it with a{" "}
                    <Link href="/blog/srisailam-travel-guide">Srisailam</Link>{" "}
                    overnight.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Hyderabad:</strong> Roughly 215 km,
                      about a 4-5 hour drive — the most practical option given
                      limited direct public transport.
                    </li>
                    <li>
                      <strong>Via Kurnool:</strong> Alampur is close to the
                      Telangana-Andhra Pradesh border, and Kurnool (Andhra
                      Pradesh) offers an alternative approach if you're
                      arriving from the south rather than Hyderabad.
                    </li>
                    <li>
                      <strong>Combining with Srisailam:</strong> Given
                      Alampur's traditional status as the western gateway to
                      Srisailam, many visitors chain the two into a single
                      Krishna-river heritage circuit.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start early from Hyderabad —
                    the drive alone takes half a day, and you'll want the
                    cooler morning hours for walking around the temple
                    complexes.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Navabrahma Temples & Jogulamba</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/saheliyon.jpg"
                      alt="Stone temple courtyard architecture, Alampur, Telangana"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Navabrahma Temples</h3>
                  <p>
                    A cluster of nine sandstone Shiva temples built during the
                    7th-8th centuries CE under the Badami Chalukya dynasty.
                    Each temple carries a distinct name (all beginning with
                    "Brahma"), and together they form one of the most
                    architecturally significant early-Chalukyan temple groups
                    outside Karnataka — a style rarely seen this far east.
                  </p>
                  <h3>Jogulamba Temple</h3>
                  <p>
                    Dedicated to Jogulamba Devi, one of the 18 Shakti
                    Peethas, this temple was restored in relatively recent
                    decades after historical damage. It sits within the same
                    complex as the Navabrahma group and is usually visited in
                    the same walking circuit.
                  </p>
                  <h3>The River Confluence</h3>
                  <p>
                    The meeting point of the Krishna and Tungabhadra rivers
                    lends the whole site a quietly scenic backdrop — worth a
                    few unhurried minutes beyond the temple-hopping itself.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Alampur</h2>
                  <p>
                    Dedicated accommodation in Alampur itself is limited —
                    most visitors either day-trip from Hyderabad or base
                    themselves at Srisailam and treat Alampur as a stop en
                    route.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic lodges in Alampur town",
                          "Government guesthouses nearby",
                          "Simple stays in Kurnool",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Business hotels in Kurnool",
                          "Srisailam devasthanam guesthouses",
                          "Highway hotels en route",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹4,000–₹8,000+/night",
                        picks: [
                          "Premium stays in Hyderabad (day trip base)",
                          "Resort options near Srisailam",
                          "Boutique heritage-style stays (limited)",
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
                        day: "Half-Day",
                        title: "Alampur Only",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Hyderabad or Kurnool",
                          "Walk the Navabrahma Temples complex",
                          "Visit Jogulamba Temple, then depart",
                        ],
                      },
                      {
                        day: "2-Day Option",
                        title: "Alampur + Srisailam",
                        color: "bg-sky-600",
                        activities: [
                          "Day 1: Drive from Hyderabad, explore Alampur",
                          "Continue onward, overnight near Srisailam",
                          "Day 2: Srisailam temple and viewpoints, return",
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
                  <h2>Where to Eat Near Alampur</h2>
                  <ul>
                    <li>
                      <strong>Temple prasadam:</strong> Simple prasadam is
                      available at the Jogulamba Temple complex, a good light
                      option between temple visits.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Basic Telangana-style
                      meals — rice, dal, curries — are available at small
                      eateries in Alampur town.
                    </li>
                    <li>
                      <strong>Kurnool or Srisailam:</strong> For a fuller
                      restaurant scene, either nearby town offers considerably
                      more choice than Alampur itself.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹5,500"],
                          [
                            "Car hire from Hyderabad (round trip)",
                            "₹5,500",
                            "₹8,000",
                            "₹11,000",
                          ],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          ["Guide (optional)", "₹300", "₹500", "₹800"],
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
                  <h2>Essential Tips for Visiting Alampur</h2>
                  <ul>
                    <li>
                      <strong>Go early:</strong> Start the walk between
                      temples before the midday heat sets in, especially
                      outside the Oct-Feb window.
                    </li>
                    <li>
                      <strong>Combine with Srisailam:</strong> Given the long
                      drive from Hyderabad, pairing Alampur with a Srisailam
                      overnight makes far better use of the trip.
                    </li>
                    <li>
                      <strong>Hire a guide for context:</strong> The Chalukyan
                      architectural significance is easy to miss without
                      background — a local guide adds real value here.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is limited
                      in Alampur town itself.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Standard temple
                      etiquette applies at both the Navabrahma group and
                      Jogulamba Temple.
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
                          "Visit early morning during Oct-Feb for the best conditions",
                          "Combine the trip with Srisailam",
                          "Hire a local guide for architectural context",
                          "Carry enough cash for the whole day",
                          "Dress modestly for both temple complexes",
                          "Allow at least half a day to see all nine temples",
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
                          "Attempt the trip during peak summer heat",
                          "Expect a large restaurant or hotel scene in town",
                          "Rush the visit without understanding the Chalukyan context",
                          "Rely on cards outside Kurnool or Hyderabad",
                          "Skip footwear suited for stone temple courtyards",
                          "Underestimate the drive time from Hyderabad",
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
                    <strong>🗺️ Extend the trip:</strong> Alampur pairs
                    naturally with{" "}
                    <Link href="/blog/srisailam-travel-guide">
                      Srisailam
                    </Link>{" "}
                    for a fuller Krishna-river heritage circuit. See our full{" "}
                    <Link href="/blog/telangana-travel-guide">
                      Telangana travel guide
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
                  "Alampur",
                  "Navabrahma Temples",
                  "Telangana",
                  "Jogulamba",
                  "Heritage",
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

              <RelatedPostsGrid currentSlug="alampur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="alampur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
