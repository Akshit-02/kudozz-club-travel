// src/app/blog/mandawa-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mandawa Travel Guide: Shekhawati Havelis & Tips",
  description:
    "Complete Mandawa guide — the frescoed havelis of Shekhawati, Mandawa Fort, the Marwari merchant history behind the murals, how to reach from Jaipur, and a full visit plan.",
  keywords:
    "Mandawa travel guide, Shekhawati havelis, Mandawa Fort, Marwari merchant havelis, Rajasthan fresco paintings, how to reach Mandawa, Shekhawati region Rajasthan, Nawalgarh Fatehpur havelis",
  openGraph: {
    title: "Mandawa Travel Guide: Shekhawati Havelis & Tips",
    description:
      "An open-air gallery of frescoed merchant mansions in the Shekhawati desert — the complete guide to Mandawa.",
    url: "https://club.kudozz.in/blog/mandawa-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ornately painted heritage architecture, evoking the frescoed havelis of Mandawa in Rajasthan's Shekhawati region",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandawa Travel Guide: Shekhawati Havelis & Tips",
    description:
      "Frescoed merchant mansions, a fort turned heritage hotel, and the open-air art gallery of Rajasthan — the complete Mandawa guide.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mandawa-travel-guide",
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
          headline: "Mandawa Travel Guide: Shekhawati Havelis & Tips",
          description:
            "Complete Mandawa guide — the frescoed havelis of Shekhawati, Mandawa Fort, the Marwari merchant history behind the murals, how to reach from Jaipur, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/mandawa-travel-guide",
          },
          keywords:
            "Mandawa, Shekhawati, Rajasthan, havelis, fresco paintings, heritage",
          about: {
            "@type": "Place",
            name: "Mandawa",
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
                name: "Mandawa",
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
    q: "What is the Shekhawati region famous for?",
    a: "Shekhawati, in northern Rajasthan, is famous for its extraordinary concentration of frescoed havelis — grand mansions built and painted by wealthy Marwari merchant families in the 19th and early 20th centuries. Mandawa is one of the region's most accessible and best-preserved towns for seeing this art form, alongside neighbours like Nawalgarh and Fatehpur.",
  },
  {
    q: "How many havelis should I plan to see in Mandawa?",
    a: "Four to six well-preserved havelis is enough to appreciate the range of mural styles without fatigue — Mandawa has dozens of frescoed buildings, but a handful of the best-maintained ones give a representative sense of the art form in a half-day to full day.",
  },
  {
    q: "How far is Mandawa from Jaipur?",
    a: "Roughly 3 hours by road, making it a practical stop either as a day trip from Jaipur or, more comfortably, as an overnight en route to Bikaner.",
  },
  {
    q: "Is Mandawa worth a dedicated stay or just a stop?",
    a: "A dedicated one-night stay is worthwhile if you want to properly explore multiple havelis and enjoy a heritage hotel — but Mandawa also works well as a scenic overnight stop between Jaipur and Bikaner rather than a full standalone destination.",
  },
  {
    q: "Can I stay in a haveli in Mandawa?",
    a: "Yes — several of the town's grand havelis and Mandawa Fort itself have been converted into heritage hotels, letting you stay inside the same kind of architecture you're there to see.",
  },
  {
    q: "Do I need a guide to appreciate the murals?",
    a: "A local guide adds real value here — the murals cover everything from religious scenes to contemporary subjects of their era like early trains and cars, and it's easy to miss the historical context without someone to explain what you're looking at.",
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
  { id: "introduction", title: "The Open-Air Art Gallery", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mandawa", level: 2 },
  { id: "things-to-do", title: "Havelis, Fort & Shekhawati", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MandawaGuidePage() {
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
              alt="Ornately painted heritage architecture, evoking the frescoed havelis of Mandawa in Rajasthan's Shekhawati region"
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
                { label: "Mandawa", href: null },
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
              {["Mandawa", "Shekhawati", "Havelis", "Rajasthan"].map((tag) => (
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
              Mandawa: Shekhawati Havelis & Open-Air Art Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A desert town where merchant fortunes were painted onto every
              available wall — Mandawa is the most accessible window into
              Rajasthan's extraordinary Shekhawati fresco tradition.
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
                  text: "Shekhawati, Rajasthan",
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
                  <h2>The Open-Air Art Gallery</h2>
                  <p>
                    <strong>Mandawa</strong>, in the Shekhawati region of
                    northern Rajasthan, is sometimes called the{" "}
                    <em>"open-air art gallery of Rajasthan"</em> for its
                    extraordinary concentration of frescoed havelis — grand
                    mansions built and elaborately painted by wealthy 19th
                    and early 20th-century Marwari merchant families who
                    made their fortunes in trade, and later in industry,
                    across India.
                  </p>
                  <p>
                    Those families competed with each other to build the
                    most impressive family residences back home, and the
                    result is a townscape where nearly every wall of every
                    grand old building carries some kind of mural — from
                    religious and mythological scenes to, notably,
                    contemporary subjects of their era like early trains,
                    cars, and even European figures.{" "}
                    <strong>Mandawa Fort</strong>, now converted into a
                    heritage hotel, sits at the centre of it all.
                  </p>
                  <p>
                    The wider <strong>Shekhawati region</strong> — including
                    towns like Nawalgarh and Fatehpur — shares this
                    haveli-fresco tradition, and makes a worthwhile
                    extension for anyone particularly drawn to the art form
                    beyond Mandawa itself.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🎨</span> Mandawa at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Shekhawati, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "From Jaipur",
                          value: "~3 hours by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Frescoed Havelis",
                        },
                        {
                          icon: "🏰",
                          label: "Landmark",
                          value: "Mandawa Fort",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Bikaner",
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
                  <h2>Best Time to Visit Mandawa</h2>
                  <p>
                    Like most of desert Rajasthan, comfortable walking
                    weather is the main factor in timing a Mandawa visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and comfortable for the walking and haveli-hopping that a Mandawa visit involves.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Desert heat climbs sharply, making midday haveli walks genuinely uncomfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional rain",
                        text: "Some relief from peak heat but humidity rises; not the ideal window for outdoor haveli exploration.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "📸",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best light for photography",
                        text: "Soft winter light brings out the mural colours particularly well on haveli facades.",
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
                    <strong>Our pick:</strong> November to February —
                    comfortable temperatures and the softest light for
                    photographing the murals.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mandawa</h2>
                  <ul>
                    <li>
                      <strong>By road from Jaipur:</strong> Roughly 3 hours,
                      the most common way in — either as a day trip or an
                      overnight stop en route to Bikaner.
                    </li>
                    <li>
                      <strong>By rail:</strong> The nearest useful railheads
                      are in the wider Shekhawati/Jhunjhunu area, with road
                      transfers to Mandawa itself.
                    </li>
                    <li>
                      <strong>As part of a Shekhawati circuit:</strong>{" "}
                      Combine with Nawalgarh and Fatehpur if you want a
                      deeper haveli-fresco tour beyond Mandawa alone.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Mandawa sits neatly between
                    Jaipur and Bikaner — build it in as an overnight stop
                    rather than a rushed day trip if your route already
                    passes this way.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Havelis, Fort & the Shekhawati Region</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Ornately painted heritage building facade in Mandawa, Shekhawati region, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Mandawa Fort</h3>
                  <p>
                    Built by the town's founding Thakur family, Mandawa Fort
                    now operates as a heritage hotel, but its exterior and
                    public areas remain a striking centrepiece of the town —
                    worth a stop even if you're not staying there.
                  </p>
                  <h3>Haveli-Hopping</h3>
                  <p>
                    Several notable havelis around town are open to
                    visitors, each showcasing a different range of murals —
                    from Krishna-Radha mythology to processions, and
                    surprisingly modern-for-their-time subjects like steam
                    trains, motor cars, and European figures the original
                    painters had likely only heard described, never seen.
                  </p>
                  <h3>The Wider Shekhawati Region</h3>
                  <p>
                    If the fresco tradition genuinely interests you,
                    Nawalgarh and Fatehpur — both a short drive away — hold
                    their own significant haveli clusters, worth a detour
                    for anyone with an extra day to spare.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mandawa</h2>
                  <p>
                    Heritage hotels converted from actual havelis and forts
                    are the real highlight of staying here — a chance to
                    sleep inside the same architecture you've come to see.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Simple guesthouses in town",
                          "Budget heritage-style stays",
                          "Basic hotels near the main market",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Converted haveli hotels",
                          "Mid-tier heritage properties",
                          "Boutique guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏰",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Mandawa Fort heritage hotel",
                          "Premium heritage haveli stays",
                          "Full-service heritage resorts",
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
                  <h2>Suggested Visit Plan (1–2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Haveli-Hopping",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Jaipur, check in to a heritage stay",
                          "Walk Mandawa Fort and nearby havelis",
                          "Evening in the old market area",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Deeper Exploration or Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Visit further havelis with a local guide",
                          "Optional detour to Nawalgarh or Fatehpur",
                          "Continue onward toward Bikaner",
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
                  <h2>Where to Eat in Mandawa</h2>
                  <ul>
                    <li>
                      <strong>Heritage hotel dining:</strong> Most converted
                      haveli and fort hotels serve proper Rajasthani thalis,
                      often the most reliable option in town.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Simple roadside eateries
                      around the main market for everyday Rajasthani fare.
                    </li>
                    <li>
                      <strong>Rajasthani classics:</strong> Dal baati churma,
                      ker sangri, and gatte ki sabzi are all worth seeking
                      out here.
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
                          ["Accommodation/night", "₹1,500", "₹4,000", "₹10,000"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Local guide (per visit)", "₹500", "₹800", "₹1,500"],
                          ["Haveli entry fees", "₹50–100 each", "₹50–100 each", "₹50–100 each"],
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
                    * Figures are per person, per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mandawa</h2>
                  <ul>
                    <li>
                      <strong>Hire a local guide:</strong> The murals reward
                      context — a guide can explain the iconography and
                      history you'd otherwise walk right past.
                    </li>
                    <li>
                      <strong>Stay in a heritage haveli:</strong> The
                      converted-haveli hotels genuinely add to the
                      experience rather than being a gimmick.
                    </li>
                    <li>
                      <strong>Use it as a Jaipur–Bikaner stop:</strong>{" "}
                      Mandawa's location makes it a natural overnight break
                      rather than a dedicated round trip.
                    </li>
                    <li>
                      <strong>Visit in the morning or late afternoon:</strong>{" "}
                      Soft light brings out the mural colours best and avoids
                      the midday heat for walking between havelis.
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
                          "Hire a guide to explain the mural iconography",
                          "Stay in a converted haveli or fort hotel",
                          "Visit multiple havelis to see the range of styles",
                          "Combine with Nawalgarh or Fatehpur if time allows",
                          "Photograph facades in soft morning or evening light",
                          "Treat it as a Jaipur–Bikaner overnight stop",
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
                          "Rush through just one haveli and call it done",
                          "Visit at peak midday heat between April and June",
                          "Skip the guide and miss the mural context",
                          "Expect every haveli to be open or well-maintained",
                          "Overlook Mandawa Fort itself as just a hotel",
                          "Plan a same-day round trip from Jaipur if avoidable",
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
                    <strong>🗺️ Extend the trip:</strong> Mandawa pairs
                    naturally with a wider Shekhawati haveli circuit, or
                    onward toward Bikaner. See our full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for the bigger picture.
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
                {["Mandawa", "Shekhawati", "Rajasthan", "Havelis"].map(
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

              <RelatedPostsGrid currentSlug="mandawa-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mandawa-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
