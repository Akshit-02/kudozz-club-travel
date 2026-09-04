// src/app/blog/bundi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bundi Travel Guide: Stepwells, Palace & Murals",
  description:
    "Complete Bundi guide — Bundi Palace's miniature murals, Taragarh Fort, Raniji ki Baori and the town's famous stepwells, the 84-Pillared Cenotaph, how to reach, and a full visit plan.",
  keywords:
    "Bundi travel guide, Bundi Palace murals, Taragarh Fort, Raniji ki Baori, Bundi stepwells, 84 Pillared Cenotaph, Blue City Rajasthan, how to reach Bundi, Bundi vs Jodhpur",
  openGraph: {
    title: "Bundi Travel Guide: Stepwells, Palace & Murals",
    description:
      "A quieter Blue City with a palace Kipling called finer than a dream, and more ornate stepwells than anywhere else in Rajasthan — the complete Bundi guide.",
    url: "https://club.kudozz.in/blog/bundi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/udaipur/saheliyon.jpg",
        width: 1200,
        height: 630,
        alt: "Ornate stone palace courtyard and stepwell architecture, evoking Bundi Palace and its famous baoris",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bundi Travel Guide: Stepwells, Palace & Murals",
    description:
      "A quieter Blue City with a palace Kipling called finer than a dream, and more stepwells than anywhere else in Rajasthan.",
    images: ["/images/destinations/udaipur/saheliyon.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/bundi-travel-guide",
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
          headline: "Bundi Travel Guide: Stepwells, Palace & Murals",
          description:
            "Complete Bundi guide — Bundi Palace's miniature murals, Taragarh Fort, Raniji ki Baori and the town's famous stepwells, the 84-Pillared Cenotaph, how to reach, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/bundi-travel-guide",
          },
          keywords:
            "Bundi, Rajasthan, Bundi Palace, stepwells, Taragarh Fort, Blue City",
          about: {
            "@type": "Place",
            name: "Bundi",
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
                name: "Bundi",
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
    q: "How is Bundi different from Jodhpur's Blue City?",
    a: "Both towns have old quarters painted in shades of blue, but Bundi sees a small fraction of the visitors Jodhpur does, giving it a much quieter, more laid-back character — narrow lanes without the crowds, and a palace and stepwells that feel genuinely uncrowded even in peak season.",
  },
  {
    q: "What did Kipling say about Bundi Palace?",
    a: "Rudyard Kipling famously described Bundi Palace as finer than anything he could have imagined outside of a dream — a well-known literary reference that still captures the palace's miniature paintings and murals well.",
  },
  {
    q: "How many stepwells are there in Bundi and which should I prioritize?",
    a: "Bundi has an unusually high concentration of ornate stepwells (baoris) for a single town. Raniji ki Baori is the most famous and the one to prioritize if time is limited, though seeking out one or two lesser-known ones adds to the experience.",
  },
  {
    q: "How far is Bundi from Jaipur and Udaipur?",
    a: "Roughly 210 km from Jaipur (about 4 hours) and roughly 200 km from Udaipur (about 4 hours) — Bundi works well as a stop between the two on a wider Rajasthan circuit.",
  },
  {
    q: "Is Bundi worth adding to a standard Rajasthan itinerary?",
    a: "Yes, especially for travelers who've already experienced the busier Jaipur-Jodhpur-Udaipur circuit and want a quieter, more unhurried Rajasthan town with genuinely distinctive heritage in the palace murals and stepwells.",
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
  { id: "introduction", title: "Rajasthan's Quieter Blue City", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Bundi", level: 2 },
  { id: "things-to-do", title: "Bundi Palace, Taragarh Fort & the Stepwells", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BundiGuidePage() {
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
              alt="Ornate stone palace courtyard and stepwell architecture, evoking Bundi Palace and its famous baoris"
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
                { label: "Bundi", href: null },
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
                "Bundi",
                "Bundi Palace",
                "Rajasthan",
                "Stepwells",
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
              Bundi: Stepwells, Palace Murals & a Quieter Blue City
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A palace Kipling called finer than a dream, more ornate
              stepwells than anywhere else in Rajasthan, and blue-washed
              lanes with a fraction of Jodhpur's crowds.
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
                  text: "Bundi, Rajasthan",
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
                  <h2>Rajasthan's Quieter Blue City</h2>
                  <p>
                    <strong>Bundi</strong> is a smaller, considerably less
                    touristed "Blue City" than Jodhpur — many of its
                    old-town houses are similarly painted blue, but the
                    crowds are a fraction of Jodhpur's, giving Bundi a
                    distinctly quieter, more laid-back character that's
                    genuinely its main appeal.
                  </p>
                  <p>
                    Bundi Palace (Garh Palace) is renowned for its
                    miniature paintings and murals — Rudyard Kipling
                    famously described it as finer than anything he could
                    have imagined outside of a dream, a reference that
                    still captures the palace well.
                  </p>
                  <p>
                    Bundi is sometimes called the "Stepwell Town of India"
                    for its unusually high concentration of ornate baoris,
                    including the famous Raniji ki Baori — a genuinely
                    distinctive claim to fame, since stepwells elsewhere in
                    Rajasthan tend to be one-off attractions rather than a
                    defining town feature.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🔷</span> Bundi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Hadoti region, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "From Jaipur/Udaipur",
                          value: "~200-210 km (~4 hrs)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🎨",
                          label: "Known For",
                          value: "Palace Murals, Stepwells",
                        },
                        {
                          icon: "💧",
                          label: "Signature Site",
                          value: "Raniji ki Baori",
                        },
                        {
                          icon: "😌",
                          label: "Vibe",
                          value: "Quiet, unhurried",
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
                  <h2>Best Time to Visit Bundi</h2>
                  <p>
                    Bundi rewards slow, on-foot exploration, so comfortable
                    weather matters more here than at destinations built
                    around a single headline sight.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, pleasant weather makes wandering Bundi's lanes and stepwells genuinely enjoyable.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Daytime heat makes extended walking tours considerably less comfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green, atmospheric",
                        text: "Bundi's stepwells and lakes fill up nicely, and the surrounding hills turn green, though some heat and humidity persists.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, most pleasant",
                        text: "The best stretch for a relaxed, unhurried multi-day exploration on foot.",
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
                    cool, unhurried conditions for exploring Bundi's
                    palace, fort, and stepwells on foot.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Bundi</h2>
                  <ul>
                    <li>
                      <strong>By road from Jaipur:</strong> Roughly 210 km,
                      about 4 hours by car.
                    </li>
                    <li>
                      <strong>By road from Udaipur:</strong> Roughly 200
                      km, about 4 hours — Bundi works well as a stop
                      between the two.
                    </li>
                    <li>
                      <strong>By rail:</strong> Bundi has its own railway
                      station, connected to Kota (a nearby major junction)
                      and onward to Jaipur and Delhi.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Bundi makes an excellent
                    stop between Jaipur and Udaipur rather than a detour —
                    build it into your route instead of treating it as an
                    extra leg.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Bundi Palace, Taragarh Fort & the Stepwells</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/udaipur/saheliyon.jpg"
                      alt="Palace courtyard architecture at Bundi, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Bundi Palace (Garh Palace)</h3>
                  <p>
                    Renowned for its miniature paintings and murals,
                    covering walls and ceilings across multiple chambers —
                    the kind of intricate, still-vivid artwork that
                    prompted Kipling's famous comparison to something out
                    of a dream.
                  </p>
                  <h3>Taragarh Fort</h3>
                  <p>
                    Perched above the palace, Taragarh Fort offers
                    commanding views over Bundi and the surrounding
                    countryside — a worthwhile climb for the panorama
                    alone.
                  </p>
                  <h3>Raniji ki Baori & the Stepwells</h3>
                  <p>
                    Bundi's concentration of ornate stepwells (baoris) is
                    unusual even by Rajasthan's standards. Raniji ki Baori,
                    with its intricately carved pillars descending into the
                    water, is the most famous — seek out at least one or
                    two lesser-known baoris too for a fuller sense of just
                    how many the town holds.
                  </p>
                  <h3>84-Pillared Cenotaph</h3>
                  <p>
                    A notable heritage structure in its own right, worth a
                    stop while exploring Bundi's wider old-town heritage.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Bundi</h2>
                  <p>
                    Charming heritage havelis converted into guesthouses
                    are a particular draw here, alongside more standard
                    hotel options.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Backpacker hostels in the old town",
                          "Simple guesthouses near the palace",
                          "Basic hotels close to the station",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: [
                          "Heritage haveli guesthouses",
                          "Boutique stays overlooking the lake",
                          "Comfortable hotels, central Bundi",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹12,000+/night",
                        picks: [
                          "Premium heritage haveli properties",
                          "Palace-view boutique hotels",
                          "Full-service upscale stays",
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
                        title: "Palace & Fort",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check into a heritage haveli",
                          "Bundi Palace and its murals in detail",
                          "Climb to Taragarh Fort for sunset views",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Stepwells & Old Town",
                        color: "bg-sky-600",
                        activities: [
                          "Raniji ki Baori and a couple of lesser-known stepwells",
                          "84-Pillared Cenotaph",
                          "Slow walk through the blue-washed old town",
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
                  <h2>Where to Eat in Bundi</h2>
                  <ul>
                    <li>
                      <strong>Rooftop haveli cafes:</strong> Several of
                      Bundi's guesthouse rooftops double as cafes with
                      views over the palace and old town — a genuinely
                      pleasant place to eat.
                    </li>
                    <li>
                      <strong>Local Rajasthani thali:</strong> Simple
                      restaurants around the old town serve solid regional
                      fare.
                    </li>
                    <li>
                      <strong>Street snacks:</strong> The market area near
                      the palace has good options for a quick bite between
                      sightseeing stops.
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
                            "₹900",
                            "₹2,500",
                            "₹7,000",
                          ],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          ["Entry fees (palace/fort)", "₹80", "₹80", "₹80"],
                          [
                            "Local transport/day",
                            "₹200",
                            "₹500",
                            "₹1,200",
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
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Bundi</h2>
                  <ul>
                    <li>
                      <strong>Explore on foot and slowly:</strong> Bundi
                      rewards unhurried wandering far more than a rushed
                      checklist visit.
                    </li>
                    <li>
                      <strong>Seek out more than one stepwell:</strong>{" "}
                      Raniji ki Baori is the highlight, but a couple of
                      lesser-known baoris round out the experience.
                    </li>
                    <li>
                      <strong>Stay in a heritage haveli:</strong> It adds
                      genuine character to the trip and often comes with a
                      rooftop view worth the extra cost.
                    </li>
                    <li>
                      <strong>Build it into a Jaipur-Udaipur
                      route:</strong> Bundi sits conveniently between the
                      two rather than requiring a separate detour.
                    </li>
                    <li>
                      <strong>Avoid peak summer heat:</strong> April-June
                      makes extended walking tours considerably less
                      pleasant.
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
                          "Explore Bundi slowly and on foot",
                          "Prioritize Raniji ki Baori among the stepwells",
                          "Stay in a heritage haveli for the full experience",
                          "Climb Taragarh Fort for the views",
                          "Build Bundi into a Jaipur-Udaipur route",
                          "Try a rooftop cafe overlooking the old town",
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
                          "Rush through in a couple of hours",
                          "Only see Raniji ki Baori and skip the rest",
                          "Visit during peak summer heat (Apr-Jun)",
                          "Expect Jaipur-level crowds or infrastructure",
                          "Skip Taragarh Fort for the views",
                          "Treat Bundi as a detour rather than a route stop",
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
                    <strong>🗺️ Extend the trip:</strong> Bundi sits
                    naturally between{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur
                    </Link>{" "}
                    and Jaipur — build it into your route rather than a
                    separate detour. See our full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
                    </Link>{" "}
                    for the wider circuit.
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
                  "Bundi",
                  "Bundi Palace",
                  "Rajasthan",
                  "Stepwells",
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

              <RelatedPostsGrid currentSlug="bundi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bundi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
