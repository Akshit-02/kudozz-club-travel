// src/app/blog/capitol-complex-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Capitol Complex Chandigarh: UNESCO Site Visit Guide",
  description:
    "Complete guide to Le Corbusier's Capitol Complex in Chandigarh — the UNESCO World Heritage High Court, Secretariat and Vidhan Sabha, the Open Hand Monument, permission process, timings and visit tips.",
  keywords:
    "Capitol Complex Chandigarh, Le Corbusier Capitol Complex, Punjab and Haryana High Court, Vidhan Sabha Chandigarh, Secretariat Chandigarh, Open Hand Monument, Tower of Shadows Chandigarh, Capitol Complex UNESCO World Heritage Site, Capitol Complex permission, Chandigarh Tourism permission, Geometric Hill Chandigarh, Martyrs Memorial Chandigarh, Sector 1 Chandigarh",
  openGraph: {
    title: "Capitol Complex Chandigarh: UNESCO Site Visit Guide",
    description:
      "Le Corbusier's raw-concrete civic heart of Chandigarh — the High Court, Secretariat, Vidhan Sabha and the Open Hand Monument, all inscribed as a UNESCO World Heritage Site.",
    url: "https://club.kudozz.in/blog/capitol-complex-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "The vast open plaza and raw-concrete brutalist facades of Le Corbusier's Capitol Complex in Chandigarh, home to the Punjab and Haryana High Court, Secretariat and Vidhan Sabha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Capitol Complex Chandigarh: UNESCO Site Visit Guide",
    description:
      "Le Corbusier's raw-concrete civic heart of Chandigarh — the High Court, Secretariat, Vidhan Sabha and the Open Hand Monument, all inscribed as a UNESCO World Heritage Site.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical:
      "https://club.kudozz.in/blog/capitol-complex-chandigarh-travel-guide",
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
          headline: "Capitol Complex Chandigarh: UNESCO Site Visit Guide",
          description:
            "Complete guide to Le Corbusier's Capitol Complex in Chandigarh — the UNESCO World Heritage High Court, Secretariat and Vidhan Sabha, the Open Hand Monument, permission process, timings and visit tips.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
          datePublished: "2026-08-31",
          dateModified: "2026-08-31",
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
            "@id":
              "https://club.kudozz.in/blog/capitol-complex-chandigarh-travel-guide",
          },
          keywords:
            "Capitol Complex Chandigarh, Le Corbusier, Punjab and Haryana High Court, Vidhan Sabha, Secretariat, Open Hand Monument, UNESCO World Heritage Site, Tower of Shadows",
          about: {
            "@type": "Place",
            name: "Capitol Complex, Chandigarh",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chandigarh",
              addressRegion: "Chandigarh",
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
                name: "Chandigarh",
                item: "https://club.kudozz.in/blog/chandigarh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Capitol Complex",
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
    q: "Do I need permission to visit Capitol Complex?",
    a: "Yes. Because the High Court and Vidhan Sabha are active, functioning government buildings, walk-in access is not guaranteed — prior permission and government-ID verification are required. This is typically arranged through the Chandigarh Tourism office, and it's worth sorting out well before your visit date rather than assuming you can turn up and enter.",
  },
  {
    q: "How far in advance should I arrange the permission?",
    a: "Give yourself at least a few days, ideally longer if you're travelling from outside Chandigarh and can't easily make a second trip. Procedures, required documents, and how far ahead you need to apply can change, so confirm the current process directly with Chandigarh Tourism before you finalise your travel dates.",
  },
  {
    q: "Is Capitol Complex free to visit?",
    a: "Entry itself is generally treated as a formality-first, low-cost visit rather than a heavily ticketed monument, but exact arrangements (whether a nominal fee, a guided-tour requirement, or specific slots apply) can vary. Confirm current entry terms when you arrange permission, since this is a working government complex rather than a standard tourist site.",
  },
  {
    q: "What exactly can I see inside Capitol Complex?",
    a: "A typical visit covers the exteriors and approved areas of the Punjab and Haryana High Court, the Secretariat, and the Vidhan Sabha (Legislative Assembly), plus the standalone monuments scattered across the plaza — the Open Hand Monument, Tower of Shadows, Geometric Hill, and Martyrs Memorial. Interior access, especially to working chambers, is more restricted and depends on what's approved for your visit.",
  },
  {
    q: "Why is Capitol Complex a UNESCO World Heritage Site?",
    a: "It was inscribed in 2016 as part of a transnational listing called 'The Architectural Work of Le Corbusier' — a group of 17 sites across seven countries recognised together for their outstanding contribution to the Modern Movement in architecture. Capitol Complex is the Indian component, representing Le Corbusier's civic vision at city scale rather than a single building.",
  },
  {
    q: "How much time should I set aside for Capitol Complex?",
    a: "Budget at least 90 minutes to two hours if you want to appreciate it properly — this is a large, spread-out plaza best covered on foot at a slow pace, not a quick drive-by stop. Architecture enthusiasts often spend considerably longer, particularly around the Open Hand Monument and the water bodies between buildings.",
  },
  {
    q: "Can I take photographs inside Capitol Complex?",
    a: "Photography of the exteriors, the plaza, and the standalone monuments is generally fine, but rules around interiors — especially inside the High Court and Assembly — can be stricter given their active government use. Confirm current photography rules at the time you arrange your permission so you're not caught out on the day.",
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
  { id: "introduction", title: "Le Corbusier's Civic Heart", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "permission-and-access", title: "Permission & Access", level: 2 },
  { id: "the-buildings", title: "The Three Buildings", level: 2 },
  { id: "open-hand-monument", title: "The Open Hand Monument", level: 2 },
  { id: "other-monuments", title: "Other Monuments", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "nearby", title: "Nearby Sights", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CapitolComplexGuidePage() {
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
              src="/images/destinations/chandigarh/hero.jpg"
              alt="The vast open plaza and raw-concrete brutalist facades of Le Corbusier's Capitol Complex in Chandigarh, home to the Punjab and Haryana High Court, Secretariat and Vidhan Sabha"
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
                { label: "Chandigarh", href: "/blog/chandigarh-travel-guide" },
                { label: "Capitol Complex", href: null },
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
                "Capitol Complex",
                "Chandigarh",
                "Le Corbusier",
                "UNESCO World Heritage",
                "Brutalist Architecture",
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
              Capitol Complex, Chandigarh: The Complete UNESCO Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Raw concrete, deep sun-breakers, and a scale meant to be walked
              slowly — Le Corbusier's civic masterpiece for Chandigarh, and
              the UNESCO World Heritage centrepiece of India's most planned
              city.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sector 1, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~2,100 words",
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
                  <h2>Le Corbusier's Civic Heart</h2>
                  <p>
                    The <strong>Capitol Complex</strong> is the administrative
                    and civic centrepiece of{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>{" "}
                    — the cluster of government buildings and monuments that
                    Swiss-French architect Le Corbusier designed as the anchor
                    of his master plan for the city, built through the 1950s
                    and 60s. If Chandigarh as a whole is Le Corbusier's idea
                    of a modern Indian city, Capitol Complex is where that
                    idea is expressed at its most ambitious and most literal.
                  </p>
                  <p>
                    Three major government buildings sit within the complex —
                    the <strong>Punjab and Haryana High Court</strong>, the{" "}
                    <strong>Secretariat</strong>, and the{" "}
                    <strong>Vidhan Sabha</strong> (Legislative Assembly) — all
                    built in Le Corbusier's signature raw-concrete brutalist
                    style, with deep sun-breakers, or brise-soleil, designed
                    to tame the harsh plains sun without closing the buildings
                    off from light and air. Scattered across the vast open
                    plaza between them are standalone sculptural works,
                    including the <strong>Open Hand Monument</strong> that has
                    since become Chandigarh's official emblem.
                  </p>
                  <p>
                    In 2016, Capitol Complex was inscribed as a{" "}
                    <strong>UNESCO World Heritage Site</strong>, as part of
                    the transnational listing "The Architectural Work of Le
                    Corbusier," which groups 17 of his buildings across seven
                    countries. It's the only Indian entry in that list, and
                    it's a working government complex to this day — the High
                    Court and Assembly are in active use — which is exactly
                    why visiting takes a bit more planning than most tourist
                    sites. We'll walk through that process in detail below, so
                    read the{" "}
                    <a href="#permission-and-access">
                      Permission &amp; Access
                    </a>{" "}
                    section before you finalise your travel dates.
                  </p>
                  <p>
                    Capitol Complex pairs naturally with two other stops in
                    this same architecture-and-heritage cluster: the{" "}
                    <Link href="/blog/le-corbusier-centre-chandigarh-travel-guide">
                      Le Corbusier Centre
                    </Link>
                    , a compact museum on the master plan itself, and the{" "}
                    <Link href="/blog/government-museum-chandigarh-travel-guide">
                      Government Museum and Art Gallery
                    </Link>
                    , which is worth combining into one half-day loop if
                    architecture and planning history interest you.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Capitol Complex at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 1, Chandigarh",
                        },
                        {
                          icon: "🏗️",
                          label: "Architect",
                          value: "Le Corbusier",
                        },
                        {
                          icon: "🏛️",
                          label: "Built",
                          value: "1950s – 1960s",
                        },
                        {
                          icon: "🌍",
                          label: "UNESCO Status",
                          value: "Inscribed 2016",
                        },
                        {
                          icon: "🎫",
                          label: "Access",
                          value: "Prior permission required",
                        },
                        {
                          icon: "⏱️",
                          label: "Suggested Time",
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
                  <h2>Best Time to Visit Capitol Complex</h2>
                  <p>
                    Because the plaza is vast, open, and largely unshaded,
                    timing your visit matters more here than at most
                    Chandigarh sights — both for comfort and for the light
                    that raw concrete photographs best in.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best season overall",
                        text: "Cool, comfortable temperatures make the long walk across the plaza and between buildings genuinely pleasant rather than a chore under the plains sun.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best light on the concrete",
                        text: "Soft, low-angle light rakes across the sun-breakers and raw concrete facades, bringing out texture that flattens out completely by midday.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Avoid midday",
                        text: "Summer heat on an open plaza with minimal shade is genuinely punishing by late morning — if you must visit in these months, aim for the earliest available slot.",
                      },
                      {
                        season: "Weekdays",
                        emoji: "📅",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Better for access",
                        text: "As a functioning government complex, weekdays generally offer more predictable access than weekends or public holidays — confirm this when you arrange permission.",
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
                    <strong>Our pick:</strong> a winter weekday morning slot,
                    arranged well in advance. Cool weather, soft light on the
                    concrete, and the best odds of smooth access on a
                    functioning government campus.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Capitol Complex</h2>
                  <p>
                    Capitol Complex sits at the northern edge of Chandigarh's
                    sector grid, in Sector 1 — set apart from the busier
                    commercial sectors, which is part of why it still feels so
                    monumental and uncluttered.
                  </p>
                  <ul>
                    <li>
                      <strong>By Cab or Auto:</strong> The simplest way in —
                      most drivers in Chandigarh know Sector 1 and the Capitol
                      Complex by name. Ask to be dropped at the visitor
                      entry/reception point rather than the buildings
                      directly, since access is controlled.
                    </li>
                    <li>
                      <strong>From Sector 17 or Sukhna Lake:</strong> Both are
                      a short drive away, making it easy to combine Capitol
                      Complex with a{" "}
                      <Link href="/blog/sukhna-lake-chandigarh-travel-guide">
                        Sukhna Lake
                      </Link>{" "}
                      visit or a stop at{" "}
                      <Link href="/blog/sector-17-chandigarh-travel-guide">
                        Sector 17
                      </Link>{" "}
                      on the same day.
                    </li>
                    <li>
                      <strong>Self-drive:</strong> Straightforward given
                      Chandigarh's wide, well-signed roads, though parking
                      near the complex is limited to designated visitor areas
                      — don't expect to park right outside the buildings
                      themselves.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Confirm the exact visitor
                    entry point and reporting time when you arrange
                    permission — security and access protocols on a working
                    government campus mean you can't simply approach whichever
                    gate looks nearest.
                  </div>
                </section>

                {/* ── Permission & Access ───────────────────────────────── */}
                <section id="permission-and-access">
                  <h2>Permission & Access</h2>
                  <p>
                    This is the single most important thing to get right
                    before visiting Capitol Complex, so it's worth repeating
                    plainly: the High Court and Vidhan Sabha are active,
                    functioning seats of government, not museum buildings kept
                    for tourism. Because of that, visitor access is
                    restricted, and walk-in access is <strong>not</strong>{" "}
                    guaranteed.
                  </p>
                  <ul>
                    <li>
                      <strong>Arrange permission in advance:</strong> Prior
                      permission is typically required and is usually
                      arranged through the Chandigarh Tourism office. Do this
                      well before your visit date — ideally several days in
                      advance — rather than assuming you can sort it out on
                      arrival.
                    </li>
                    <li>
                      <strong>Carry valid government ID:</strong> Access
                      involves ID verification for every visitor, so carry an
                      original government-issued photo ID (and often a copy),
                      not just a photograph of one on your phone.
                    </li>
                    <li>
                      <strong>Confirm the current process before you travel:</strong>{" "}
                      Procedures, documentation requirements, group size
                      limits, and available time slots can and do change.
                      Contact Chandigarh Tourism directly to confirm exactly
                      what's needed for your visit dates rather than relying
                      on older information.
                    </li>
                    <li>
                      <strong>Build in a buffer:</strong> If you're travelling
                      from outside Chandigarh specifically to see Capitol
                      Complex, don't schedule it for your only day in the
                      city — a same-day fallback plan is wise in case a slot
                      needs to be rescheduled.
                    </li>
                  </ul>
                  <div
                    className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Important:</strong> Do not plan a visit to
                    Capitol Complex around a tight schedule assuming you can
                    simply show up. Sort out permission and ID verification
                    days in advance through Chandigarh Tourism — this is the
                    step that most trips underestimate.
                  </div>
                </section>

                {/* ── The Buildings ─────────────────────────────────────── */}
                <section id="the-buildings">
                  <h2>The Three Buildings</h2>
                  <p>
                    Capitol Complex is built around three principal
                    structures, arranged across the plaza with generous
                    distances and framed views between them — a deliberate
                    choice that makes walking between buildings part of the
                    experience rather than a formality.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Raw concrete brise-soleil sun-breakers on one of the government buildings at Capitol Complex, Le Corbusier's signature technique for managing harsh plains sunlight"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Punjab and Haryana High Court</h3>
                  <p>
                    The High Court is arguably the most photographed of the
                    three buildings, defined by its huge, curved concrete
                    canopy roof and a facade of deep sun-breakers arranged in
                    a bold geometric rhythm. The design manages a genuinely
                    difficult brief — a monumental civic building that still
                    lets in filtered light and air rather than sealing itself
                    off — and remains one of the clearest demonstrations of
                    Le Corbusier's brise-soleil approach anywhere in his body
                    of work.
                  </p>

                  <h3>The Secretariat</h3>
                  <p>
                    A long, horizontal slab building that houses the
                    administrative offices of the state government, the
                    Secretariat is the most purely functional of the three
                    structures but no less considered — its extended facade
                    of repeating sun-breakers creates a strong, almost musical
                    rhythm when viewed from across the plaza, and it anchors
                    one end of the complex's overall composition.
                  </p>

                  <h3>Vidhan Sabha (Legislative Assembly)</h3>
                  <p>
                    The Assembly building is the most sculptural of the three,
                    combining a portico with a distinctive hyperbolic tower
                    that rises above the roofline and doubles as a form of
                    natural ventilation for the assembly chamber below. It's
                    the building most closely associated with ceremonial and
                    symbolic weight in the complex, given its role as the
                    seat of the legislature.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Walk the plaza slowly rather
                    than moving directly between buildings — Le Corbusier
                    designed the distances, water bodies, and sightlines
                    between the three structures deliberately, and the framed
                    views you get mid-plaza are as much a part of the design
                    as the buildings themselves.
                  </div>
                </section>

                {/* ── Open Hand Monument ─────────────────────────────────── */}
                <section id="open-hand-monument">
                  <h2>The Open Hand Monument</h2>
                  <p>
                    Standing apart from the three government buildings, the{" "}
                    <strong>Open Hand Monument</strong> is Capitol Complex's
                    single most recognisable symbol — a large metal hand
                    sculpture mounted so that it can rotate with the wind. It
                    has since become Chandigarh's official emblem, appearing
                    on everything from government letterheads to the city's
                    own branding.
                  </p>
                  <p>
                    The symbolism is deliberately simple and universal: an
                    open hand, "open to give and open to receive" — Le
                    Corbusier's own description of the sculpture's intended
                    meaning, conceived as a gesture of peace and reconciliation
                    fitting for a city built, quite literally, from scratch
                    after Partition. Positioned within its own sunken plaza,
                    it's designed to be approached and viewed in relative
                    isolation from the surrounding buildings, giving it a
                    weight disproportionate to its size.
                  </p>
                </section>

                {/* ── Other Monuments ────────────────────────────────────── */}
                <section id="other-monuments">
                  <h2>Other Monuments</h2>
                  <p>
                    Beyond the Open Hand, Capitol Complex includes several
                    smaller standalone works that reward visitors willing to
                    walk the full plaza rather than sticking to the three main
                    buildings.
                  </p>
                  <ul>
                    <li>
                      <strong>Tower of Shadows:</strong> A small, open
                      pavilion-like structure designed as a working study in
                      solar geometry — its walls and openings are oriented to
                      demonstrate how sunlight moves through a space across
                      the day and the seasons, a hands-on illustration of the
                      same sun-breaker logic used throughout the complex.
                    </li>
                    <li>
                      <strong>Geometric Hill:</strong> An earthwork/sculptural
                      mound that plays with pure geometric form at landscape
                      scale — one of the more understated pieces in the
                      complex, easy to walk past if you're not specifically
                      looking for it.
                    </li>
                    <li>
                      <strong>Martyrs Memorial:</strong> A memorial monument
                      within the complex honouring those who lost their lives
                      in the struggle for Punjab's reorganisation and related
                      causes — a quieter, more solemn stop amid the otherwise
                      grand civic architecture.
                    </li>
                  </ul>
                </section>

                {/* ── Photography ────────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Shoot early morning:</strong> Low, raking light
                      brings out the texture of raw concrete and the
                      sun-breaker patterns far better than the flat light of
                      midday.
                    </li>
                    <li>
                      <strong>Use the sun-breakers as a subject in themselves:</strong>{" "}
                      Tight, repeating shots of the brise-soleil grids often
                      make for more striking images than a wide shot of an
                      entire building facade.
                    </li>
                    <li>
                      <strong>Frame through the plaza's water bodies:</strong>{" "}
                      Reflections off the water features between buildings add
                      real depth to shots of the High Court and Assembly.
                    </li>
                    <li>
                      <strong>Check interior photography rules in advance:</strong>{" "}
                      Rules around photographing inside the working buildings
                      are generally stricter than for the exteriors and
                      monuments — confirm this at the same time you arrange
                      permission.
                    </li>
                    <li>
                      <strong>Give the Open Hand its own frame:</strong> It's
                      designed to be viewed in relative isolation within its
                      sunken plaza — resist the urge to always include the
                      distant buildings in the same shot.
                    </li>
                  </ul>
                </section>

                {/* ── Nearby ─────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Sights</h2>
                  <p>
                    Capitol Complex sits at one end of a natural
                    architecture-and-heritage loop that's well worth
                    stringing together into one half or full day.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/le-corbusier-centre-chandigarh-travel-guide">
                          Le Corbusier Centre
                        </Link>
                      </strong>{" "}
                      — a compact museum on the master plan and design
                      process behind Chandigarh, an excellent primer either
                      before or after seeing Capitol Complex itself.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/government-museum-chandigarh-travel-guide">
                          Government Museum and Art Gallery
                        </Link>
                      </strong>{" "}
                      — Sector 10's Gandhara sculpture and miniature painting
                      collection, a good complement for a fuller heritage
                      day.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sukhna-lake-chandigarh-travel-guide">
                          Sukhna Lake
                        </Link>
                      </strong>{" "}
                      — a short drive away, a good place to unwind after the
                      more intense, formal experience of Capitol Complex.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/rock-garden-chandigarh-travel-guide">
                          Rock Garden
                        </Link>
                      </strong>{" "}
                      — a striking contrast in spirit to Capitol Complex's
                      formal planning, well worth pairing on the same day.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1.5–2 Hours)</h2>
                  <p>
                    Capitol Complex rewards an unhurried pace far more than a
                    rushed walkthrough — the distances between buildings and
                    monuments are deliberately generous, so budget your time
                    accordingly.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-10 min",
                        title: "Arrival & Check-In",
                        color: "bg-amber-700",
                        activities: [
                          "Report to the visitor entry point with ID",
                          "Complete any on-site verification formalities",
                          "Orient yourself to the plaza layout",
                        ],
                      },
                      {
                        day: "10-45 min",
                        title: "High Court & Secretariat",
                        color: "bg-forest-600",
                        activities: [
                          "Approach the High Court's curved canopy roof",
                          "Study the sun-breaker facades up close",
                          "Walk toward the Secretariat's long slab facade",
                        ],
                      },
                      {
                        day: "45-70 min",
                        title: "Vidhan Sabha & Open Hand",
                        color: "bg-sky-600",
                        activities: [
                          "View the Assembly's portico and hyperbolic tower",
                          "Walk to the Open Hand Monument's sunken plaza",
                          "Take in the framed views back across the complex",
                        ],
                      },
                      {
                        day: "70-120 min",
                        title: "The Smaller Monuments",
                        color: "bg-stone-600",
                        activities: [
                          "Tower of Shadows and its solar-geometry design",
                          "Geometric Hill and the Martyrs Memorial",
                          "A slow final walk back through the plaza",
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
                    * Architecture enthusiasts wanting to sketch, photograph
                    in depth, or simply sit and absorb the plaza should add at
                    least another 30-45 minutes.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Capitol Complex has no major direct costs beyond getting
                    there — the real "cost" here is the time and advance
                    planning needed to secure permission.
                  </p>
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
                            "Entry / permission",
                            "Nominal / free*",
                            "Nominal / free*",
                            "Nominal / free*",
                          ],
                          [
                            "Transport to/from site",
                            "₹150 (auto)",
                            "₹350 (cab)",
                            "₹800 (private car)",
                          ],
                          [
                            "Guided commentary (optional)",
                            "—",
                            "₹300-500",
                            "₹1,500+",
                          ],
                          [
                            "Combine with Le Corbusier Centre + Museum",
                            "₹50-100",
                            "₹100-200",
                            "₹200+",
                          ],
                          ["Total (approx.)", "₹200-250", "₹750-1,050", "₹2,500+"],
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
                    * Figures are approximate and per person — confirm current
                    entry and permission terms with Chandigarh Tourism, since
                    this is a government-run access process rather than a
                    fixed ticket price. See our full{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a complete city budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Capitol Complex</h2>
                  <ul>
                    <li>
                      <strong>Sort permission out early:</strong> This is the
                      single biggest factor in whether your visit goes
                      smoothly — arrange it through Chandigarh Tourism days in
                      advance, not on the morning of your visit.
                    </li>
                    <li>
                      <strong>Carry original government ID:</strong> Not a
                      photocopy or a phone photo — every visitor typically
                      needs to be verified individually.
                    </li>
                    <li>
                      <strong>Wear comfortable, sun-appropriate clothing:</strong>{" "}
                      The plaza is large and largely unshaded — a hat and
                      water are worth carrying even in cooler months.
                    </li>
                    <li>
                      <strong>Don't rush the plaza:</strong> The distances
                      between buildings and the framed views along the way are
                      part of the design — treat this as a slow architectural
                      walk, not a quick photo stop.
                    </li>
                    <li>
                      <strong>Confirm current timings and closures:</strong>{" "}
                      As a working government complex, access can be affected
                      by official proceedings, holidays, or security
                      considerations on any given day — always confirm before
                      you travel.
                    </li>
                    <li>
                      <strong>Pair it with the Le Corbusier Centre:</strong>{" "}
                      Visiting the{" "}
                      <Link href="/blog/le-corbusier-centre-chandigarh-travel-guide">
                        Le Corbusier Centre
                      </Link>{" "}
                      first gives useful context on the master plan before
                      you see it realised at Capitol Complex.
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
                          "Arrange permission through Chandigarh Tourism in advance",
                          "Carry original government-issued photo ID",
                          "Visit on a cool winter morning if possible",
                          "Walk the full plaza slowly, including the smaller monuments",
                          "Confirm photography rules for building interiors",
                          "Pair the visit with the Le Corbusier Centre",
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
                          "Assume you can walk in without prior permission",
                          "Leave the permission process to the last minute",
                          "Forget original ID or bring only a digital copy",
                          "Schedule this as your only activity on a tight single day",
                          "Rush between buildings without pausing at the monuments",
                          "Ignore local guidance on interior photography rules",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Capitol
                    Complex with the{" "}
                    <Link href="/blog/le-corbusier-centre-chandigarh-travel-guide">
                      Le Corbusier Centre
                    </Link>{" "}
                    and the{" "}
                    <Link href="/blog/government-museum-chandigarh-travel-guide">
                      Government Museum
                    </Link>{" "}
                    for a full architecture-and-heritage day, or read our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      complete Chandigarh travel guide
                    </Link>{" "}
                    to plan the rest of your trip.
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
                  "Capitol Complex",
                  "Chandigarh",
                  "Le Corbusier",
                  "UNESCO World Heritage",
                  "Open Hand Monument",
                  "Brutalist Architecture",
                  "Vidhan Sabha",
                  "High Court",
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

              <RelatedPostsGrid currentSlug="capitol-complex-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="capitol-complex-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
