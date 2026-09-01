// src/app/blog/shanti-kunj-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Shanti Kunj Chandigarh: Sector 16's Quiet Garden Guide",
  description:
    "Guide to Shanti Kunj, the quiet park next to Chandigarh's Zakir Hussain Rose Garden in Sector 16 — its walking paths, water features, timings, and how to combine both in one visit.",
  keywords:
    "Shanti Kunj Chandigarh, Shanti Kunj Sector 16, Chandigarh quiet parks, Shanti Kunj timings, Rose Garden Chandigarh nearby park, Sector 16 Chandigarh garden, Chandigarh peaceful parks",
  openGraph: {
    title: "Shanti Kunj Chandigarh: Sector 16's Quiet Garden Guide",
    description:
      "A calm, meditative green space right next to Chandigarh's Rose Garden — Shanti Kunj is the quiet extension most Rose Garden visitors walk past without knowing.",
    url: "https://club.kudozz.in/blog/shanti-kunj-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Quiet green park with walking paths and water features, evoking Chandigarh's Shanti Kunj in Sector 16",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanti Kunj Chandigarh: Sector 16's Quiet Garden Guide",
    description:
      "A calm, meditative green space right next to Chandigarh's Rose Garden — Shanti Kunj is the quiet extension most visitors walk past without knowing.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/shanti-kunj-chandigarh-travel-guide",
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
          headline: "Shanti Kunj Chandigarh: Sector 16's Quiet Garden Guide",
          description:
            "Guide to Shanti Kunj, the quiet park next to Chandigarh's Zakir Hussain Rose Garden in Sector 16 — its walking paths, water features, timings, and how to combine both in one visit.",
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
            "@id": "https://club.kudozz.in/blog/shanti-kunj-chandigarh-travel-guide",
          },
          keywords:
            "Shanti Kunj Chandigarh, Sector 16, quiet park, Rose Garden neighbour, walking paths",
          about: {
            "@type": "Place",
            name: "Shanti Kunj",
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
                name: "Shanti Kunj",
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
    q: "What does Shanti Kunj mean?",
    a: "\"Shanti Kunj\" translates roughly to \"grove of peace\" — a fitting name for a small, calm park designed as a quieter counterpart to the busier, more famous Rose Garden right next to it.",
  },
  {
    q: "Is Shanti Kunj free to enter?",
    a: "Yes, entry is free, and the park keeps typical city-garden hours — roughly from mid-morning to early evening, with exact timings shifting slightly by season.",
  },
  {
    q: "Is Shanti Kunj worth visiting on its own?",
    a: "Not really as a standalone destination — it's best treated as a natural, low-effort extension of a Rose Garden visit rather than a separate trip. Most people end up there simply by walking a little further than the Rose Garden's main lawns.",
  },
  {
    q: "How is Shanti Kunj different from the Rose Garden next door?",
    a: "The Rose Garden is built around seasonal blooms and draws large crowds, especially during the February–March Rose Festival. Shanti Kunj is calmer and greener year-round, with walking paths and water features rather than a flower-focused layout — a good option when the Rose Garden feels too busy.",
  },
  {
    q: "What's the best time to visit Shanti Kunj?",
    a: "Early morning is ideal if you want it at its quietest, matching the walkers and joggers who use it daily. Cooler months (October to March) also make the walking paths far more comfortable than the peak summer heat.",
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
  { id: "introduction", title: "A Grove of Peace Beside the Roses", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "walking-paths", title: "Walking Paths & Layout", level: 2 },
  { id: "pairing-rose-garden", title: "Pairing It With the Rose Garden", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ShantiKunjGuidePage() {
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
              alt="Quiet green park with walking paths and water features, evoking Chandigarh's Shanti Kunj in Sector 16"
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
                { label: "Shanti Kunj", href: null },
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
                "Shanti Kunj",
                "Sector 16",
                "Chandigarh",
                "Quiet Gardens",
                "Morning Walks",
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
              Shanti Kunj: Chandigarh's Quiet Garden Next to the Roses
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A small, calm park in Sector 16, right beside the Zakir Hussain
              Rose Garden — its name means "grove of peace," and it lives up
              to it whenever the garden next door gets busy.
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
                  text: "Sector 16, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
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
                  <h2>A Grove of Peace Beside the Roses</h2>
                  <p>
                    Tucked against the edge of the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Zakir Hussain Rose Garden
                    </Link>{" "}
                    in Sector 16, <strong>Shanti Kunj</strong> is one of{" "}
                    <Link href="/blog/chandigarh-travel-guide">Chandigarh</Link>
                    's quieter, more overlooked green spaces — a small park
                    whose name translates roughly to "grove of peace." Most
                    visitors to Chandigarh never seek it out deliberately;
                    they simply wander into it while exploring the far edges
                    of the Rose Garden's grounds.
                  </p>
                  <p>
                    That's really the right way to experience it. Shanti Kunj
                    isn't built around a single showpiece attraction the way
                    the Rose Garden is built around its roses — it's a
                    calmer, more meditative counterpart, with walking paths
                    and modest water features that make for a good five- or
                    ten-minute pause once the flowers next door start to feel
                    crowded.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕊️</span> Shanti Kunj at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "Sector 16, Chandigarh" },
                        { icon: "🌷", label: "Neighbour", value: "Zakir Hussain Rose Garden" },
                        { icon: "🧘", label: "Character", value: "Calm, meditative park" },
                        { icon: "🎟️", label: "Entry", value: "Free" },
                        { icon: "⏰", label: "Timings", value: "~9 AM – 7 PM" },
                        { icon: "⏱️", label: "Visit Time", value: "20–40 min" },
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
                  <h2>Best Time to Visit Shanti Kunj</h2>
                  <p>
                    Because it's usually visited as an extension of the Rose
                    Garden next door, timing tends to follow the same logic —
                    with one added reason to go early: avoiding the Rose
                    Garden's peak-season crowds spilling over.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best for walkers",
                        text: "Shanti Kunj is at its quietest and coolest early in the day, matching the regular walkers and joggers who use it before the Rose Garden's crowds build up.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best season",
                        text: "Comfortable temperatures make the walking paths genuinely pleasant, and this window overlaps with the Rose Garden's best months too.",
                      },
                      {
                        season: "Feb – Mar",
                        emoji: "🌹",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Rose Festival spillover",
                        text: "When the adjoining Rose Garden gets busiest during its annual festival, Shanti Kunj becomes the natural quiet retreat for a breather.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Avoid midday",
                        text: "Like most open Chandigarh parks, it gets uncomfortably hot by midday in peak summer — stick to mornings or evenings.",
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
                    <strong>Our pick:</strong> a winter morning, arriving at
                    the Rose Garden early and drifting into Shanti Kunj once
                    the main lawns start filling up — the smoothest way to
                    experience both without feeling rushed.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Shanti Kunj</h2>
                  <p>
                    Shanti Kunj sits right at the edge of Sector 16, adjoining
                    the Rose Garden, so reaching one effectively means
                    reaching both.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The easiest way in — ask
                      to be dropped at the Rose Garden's Sector 16 gate, and
                      Shanti Kunj is a short walk from there.
                    </li>
                    <li>
                      <strong>On foot from the Rose Garden:</strong> If you're
                      already inside the Rose Garden grounds, simply walk
                      toward its quieter edge to find Shanti Kunj.
                    </li>
                    <li>
                      <strong>Self-drive:</strong> Parking near the Rose
                      Garden covers both — there's no separate lot needed for
                      Shanti Kunj specifically.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Don't plan a separate trip
                    just for Shanti Kunj — treat it as a five-minute detour
                    built into your{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    visit rather than a standalone stop.
                  </div>
                </section>

                {/* ── Walking Paths ──────────────────────────────────────── */}
                <section id="walking-paths">
                  <h2>Walking Paths & Layout</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Calm garden pathway with trees and greenery, evoking the walking paths of Chandigarh's Shanti Kunj"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Where the Rose Garden is organised around flower beds and
                    open lawns, Shanti Kunj leans toward tree cover, modest
                    water features, and winding paths meant for slow walking
                    rather than sightseeing. It's noticeably greener and
                    shadier, which is part of why it draws a steady stream of
                    local morning walkers independent of any tourist traffic.
                  </p>
                  <p>
                    There's no single must-see spot inside — the point is the
                    atmosphere rather than any one feature, which makes it an
                    easy, low-pressure stop that doesn't demand a checklist
                    approach the way some monuments do.
                  </p>
                </section>

                {/* ── Pairing with Rose Garden ───────────────────────────── */}
                <section id="pairing-rose-garden">
                  <h2>Pairing It With the Rose Garden</h2>
                  <p>
                    Almost nobody visits Shanti Kunj in isolation, and there's
                    no real reason to — it works best as a deliberate second
                    act to a{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    visit. Start with the roses while the light and crowds are
                    still manageable, then let Shanti Kunj be the slower,
                    quieter close to the same outing.
                  </p>
                  <p>
                    If you're building a fuller quiet-gardens day around
                    central Chandigarh, the{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    green belt also connects reasonably well into the same
                    part of the city, giving you a longer, unhurried
                    green-space route rather than a single stop.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (with the Rose Garden)</h2>
                  <p>
                    Here's a simple way to sequence both stops as a single,
                    unhurried outing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-45 min",
                        title: "Rose Garden First",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive early and walk the main rose beds",
                          "Photograph the blooms while the light is soft",
                          "Head toward the quieter edge of the grounds",
                        ],
                      },
                      {
                        day: "45-70 min",
                        title: "Shanti Kunj",
                        color: "bg-forest-600",
                        activities: [
                          "Wander the walking paths at an easy pace",
                          "Sit near the water features for a few minutes",
                          "Use it as a calm close to the outing",
                        ],
                      },
                      {
                        day: "70-90 min",
                        title: "Move On",
                        color: "bg-sky-600",
                        activities: [
                          "Head to Sector 17 for food or a coffee stop",
                          "Or continue toward the Leisure Valley green belt",
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
                  <p>
                    Neither Shanti Kunj nor the Rose Garden has real dining
                    options inside, but Sector 17 is a short ride away and
                    the natural place to head afterward.
                  </p>
                  <ul>
                    <li>
                      <strong>Sector 17 Plaza cafés:</strong> The closest
                      proper dining cluster, with a good mix of casual cafés
                      and sit-down restaurants.
                    </li>
                    <li>
                      <strong>Sector 22 markets:</strong> A slightly more
                      local, less touristy option for a quick meal nearby.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Shanti Kunj costs nothing to visit — your only expenses
                    are getting there (usually bundled with a Rose Garden
                    trip) and food afterward.
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
                          ["Entry", "Free", "Free", "Free"],
                          [
                            "Transport to/from",
                            "₹80 (auto)",
                            "₹200 (cab)",
                            "₹400 (private cab)",
                          ],
                          ["Food nearby", "₹200", "₹600", "₹1,500+"],
                          ["Total (approx.)", "₹280", "₹800", "₹1,900+"],
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
                    * Figures assume this is combined with a Rose Garden
                    visit, per person, per outing.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Shanti Kunj</h2>
                  <ul>
                    <li>
                      <strong>Combine it with the Rose Garden:</strong> There's
                      little reason to visit separately — plan it as one
                      outing.
                    </li>
                    <li>
                      <strong>Go early during Rose Festival season:</strong>{" "}
                      February–March brings heavy crowds to the Rose Garden,
                      making Shanti Kunj's calm feel especially welcome.
                    </li>
                    <li>
                      <strong>Don't expect a marquee attraction:</strong> The
                      value here is the atmosphere, not a single standout
                      sight.
                    </li>
                    <li>
                      <strong>Carry water:</strong> There are minimal
                      facilities inside either park.
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
                          "Pair it with a Rose Garden visit",
                          "Go early morning for the quietest walk",
                          "Use it as a breather during Rose Festival crowds",
                          "Bring water — facilities are minimal",
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
                          "Plan a separate, dedicated trip just for this",
                          "Expect flower beds or a Rose Garden-style layout",
                          "Visit at midday in peak summer",
                          "Skip the Rose Garden thinking this replaces it",
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
                  "Shanti Kunj",
                  "Sector 16",
                  "Chandigarh",
                  "Rose Garden",
                  "Quiet Gardens",
                  "City Guide",
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

              <RelatedPostsGrid currentSlug="shanti-kunj-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="shanti-kunj-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
