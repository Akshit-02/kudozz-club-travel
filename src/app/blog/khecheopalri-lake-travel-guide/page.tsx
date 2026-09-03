// src/app/blog/khecheopalri-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Khecheopalri Lake Guide: The Wishing Lake",
  description:
    "Complete Khecheopalri Lake guide — Sikkim's sacred wish-fulfilling lake, the bird legend, Khecheopalri Monastery, the Maghe Purnima fair, how to reach from Pelling, and a full visit plan.",
  keywords:
    "Khecheopalri Lake, wishing lake Sikkim, Khecheopalri Monastery, West Sikkim, Maghe Purnima, sacred lake Sikkim, how to reach Khecheopalri Lake, Pelling day trip",
  openGraph: {
    title: "Khecheopalri Lake Guide: The Wishing Lake",
    description:
      "A sacred lake in West Sikkim revered by Buddhists and Hindus alike, where local legend says birds keep the water free of fallen leaves.",
    url: "https://club.kudozz.in/blog/khecheopalri-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Clear forest-fringed water, evoking the sacred, still setting of Khecheopalri Lake in West Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Khecheopalri Lake Guide: The Wishing Lake",
    description:
      "Sikkim's sacred wish-fulfilling lake, revered by Buddhists and Hindus alike — the complete Khecheopalri Lake guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/khecheopalri-lake-travel-guide",
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
          headline: "Khecheopalri Lake Guide: The Wishing Lake",
          description:
            "Complete Khecheopalri Lake guide — Sikkim's sacred wish-fulfilling lake, the bird legend, Khecheopalri Monastery, the Maghe Purnima fair, how to reach from Pelling, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/khecheopalri-lake-travel-guide",
          },
          keywords:
            "Khecheopalri Lake, West Sikkim, wishing lake, Khecheopalri Monastery, Maghe Purnima",
          about: {
            "@type": "Place",
            name: "Khecheopalri Lake",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Sikkim",
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
                name: "Sikkim",
                item: "https://club.kudozz.in/blog/sikkim-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Khecheopalri Lake",
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
    q: "Why is boating not allowed on Khecheopalri Lake?",
    a: "The lake is considered sacred by both Buddhists and Hindus, believed to grant wishes to those who visit with pure intent. Boating and swimming are prohibited out of respect for its spiritual significance, not as a bureaucratic formality — visitors are asked to observe this simply and quietly.",
  },
  {
    q: "What is the bird legend associated with the lake?",
    a: "Local legend holds that birds remove any leaves that fall onto the lake's surface, keeping the water perpetually clean. It's one of the reasons the lake is regarded as sacred and cared for so closely by the surrounding community.",
  },
  {
    q: "How far is Khecheopalri Lake from Pelling?",
    a: "It's a relatively short drive from Pelling followed by a short walk from the parking/entry point to the lake itself, making it an easy and popular day trip.",
  },
  {
    q: "What is the best time to visit?",
    a: "October to February gives the clearest weather and the most peaceful visiting conditions. The Maghe Purnima fair, usually around the January or February full moon, draws larger crowds for those wanting festival atmosphere.",
  },
  {
    q: "Is it a day trip or worth staying nearby?",
    a: "Accommodation right at the lake is very limited, so most visitors treat it as a day trip from Pelling, often combined with Pemayangtse Monastery and other West Sikkim sights.",
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
  { id: "introduction", title: "The Wish-Fulfilling Lake", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Khecheopalri Lake", level: 2 },
  { id: "things-to-do", title: "The Lake, the Legend & the Monastery", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KhecheopalriLakeGuidePage() {
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
              alt="Clear forest-fringed water, evoking the sacred, still setting of Khecheopalri Lake in West Sikkim"
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
                { label: "Sikkim", href: "/blog/sikkim-travel-guide" },
                { label: "Khecheopalri Lake", href: null },
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
                "Khecheopalri Lake",
                "West Sikkim",
                "Wishing Lake",
                "Sacred Site",
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
              Khecheopalri Lake: Sikkim's Wish-Fulfilling Lake
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A still forest lake revered by Buddhists and Hindus alike,
              where local legend says the birds themselves keep the water
              clean.
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
                  text: "West Sikkim",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>The Wish-Fulfilling Lake</h2>
                  <p>
                    <strong>Khecheopalri Lake</strong>, in West Sikkim, is
                    considered a sacred "wish-fulfilling" lake by both
                    Buddhists and Hindus in the region — a rare shared
                    reverence that says something about how deeply the site
                    is woven into local spiritual life.
                  </p>
                  <p>
                    A well-known local legend holds that birds remove any
                    leaves that fall onto the lake's surface, keeping the
                    water perpetually clean. Whether taken literally or as
                    metaphor, the belief shapes how visitors are asked to
                    treat the site: boating and swimming are not permitted,
                    out of respect for its sanctity.
                  </p>
                  <p>
                    The lake sits within forest, reached by a short walk
                    from the entry point — a peaceful, unhurried approach
                    that suits the site's spiritual character. Most
                    visitors combine it with a day trip out from{" "}
                    <Link href="/blog/pelling-travel-guide">Pelling</Link>.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🙏</span> Khecheopalri Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "West Sikkim",
                        },
                        {
                          icon: "🚗",
                          label: "From Pelling",
                          value: "Short drive + walk",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct - Feb" },
                        {
                          icon: "🕊️",
                          label: "Known For",
                          value: "The Bird Legend",
                        },
                        {
                          icon: "🚫",
                          label: "Rules",
                          value: "No Boating/Swimming",
                        },
                        {
                          icon: "🎉",
                          label: "Festival",
                          value: "Maghe Purnima",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    Weather and festival timing both shape the character of
                    a visit here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct - Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear, dry weather and a peaceful, uncrowded atmosphere — ideal for a quiet, reflective visit to the lake.",
                      },
                      {
                        season: "Jan/Feb Full Moon",
                        emoji: "🎉",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Maghe Purnima fair",
                        text: "A significant local religious gathering brings much larger crowds — worth timing for if festival atmosphere is the priority.",
                      },
                      {
                        season: "Mar - May",
                        emoji: "🌸",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Pleasant, occasional haze",
                        text: "Generally comfortable, though pre-monsoon haze can occasionally soften the forest views around the lake.",
                      },
                      {
                        season: "Jun - Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain makes the forest walk to the lake muddy and the wider West Sikkim roads less reliable.",
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
                    <strong>Our pick:</strong> October to February for a
                    peaceful visit, or the Maghe Purnima full moon period
                    if you want to experience the fair — just expect larger
                    crowds then.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Khecheopalri Lake</h2>
                  <ul>
                    <li>
                      <strong>From Pelling:</strong> A relatively short
                      drive followed by a short walk from the
                      parking/entry area to the lake itself — this is the
                      most common approach.
                    </li>
                    <li>
                      <strong>From Gangtok:</strong> A longer day-trip
                      distance, usually combined with a wider West Sikkim
                      itinerary via Pelling.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine the visit with
                    Pemayangtse Monastery on the same day out from Pelling
                    — both sit within a manageable driving loop.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Lake, the Legend & the Monastery</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Still forest-fringed water at Khecheopalri Lake, West Sikkim"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Lake & Forest Walk</h3>
                  <p>
                    A short, easy walk through forest brings you to the
                    lake's edge, where prayer flags line the approach and
                    the water sits remarkably still and clear — the setting
                    itself explains much of the site's spiritual pull.
                  </p>
                  <h3>The Bird Legend & Lake Etiquette</h3>
                  <p>
                    Boating and swimming are not permitted here — a rule
                    rooted in the lake's sacred status rather than a
                    formality. Visitors are asked to keep noise levels down
                    and treat the site with the same quiet respect locals
                    do.
                  </p>
                  <h3>Khecheopalri Monastery</h3>
                  <p>
                    A short distance from the lake, this monastery adds a
                    further layer to the area's spiritual significance and
                    is easily combined with a lake visit.
                  </p>
                  <h3>Maghe Purnima Fair</h3>
                  <p>
                    Held around the January or February full moon, this
                    significant local religious gathering draws
                    considerably larger crowds than a typical day — worth
                    experiencing if festival atmosphere appeals, but plan
                    for the extra visitors.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation right at the lake is very limited — most
                    visitors base themselves in Pelling and treat
                    Khecheopalri as a day trip.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses in Pelling",
                          "Basic homestays near the lake road",
                          "Simple village lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Hotels in Pelling",
                          "Comfortable homestays nearby",
                          "West Sikkim tourism properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹4,500–₹9,000+/night",
                        picks: [
                          "Premium resorts in Pelling",
                          "Mountain-view boutique stays",
                          "Full-board West Sikkim packages",
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
                        day: "Morning",
                        title: "Pemayangtse Monastery",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Pelling early",
                          "Visit Pemayangtse Monastery",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Khecheopalri Lake",
                        color: "bg-forest-600",
                        activities: [
                          "Drive to the entry point",
                          "Short forest walk to the lake",
                          "Quiet time at the lake, Khecheopalri Monastery",
                          "Return to Pelling",
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
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Small stalls near the entry point:</strong>{" "}
                      Simple snacks and tea, useful before or after the
                      walk to the lake.
                    </li>
                    <li>
                      <strong>Pelling restaurants:</strong> A wider spread
                      of proper meal options if based there for the day.
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
                          ["Accommodation/night (Pelling)", "₹1,000", "₹2,800", "₹6,000"],
                          ["Car hire from Pelling (round trip)", "₹1,500", "₹2,200", "₹3,500"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
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
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Respect the no-boating/no-swimming rule:</strong>{" "}
                      It's a matter of local reverence, not a formality —
                      please observe it.
                    </li>
                    <li>
                      <strong>Keep noise levels down:</strong> Given the
                      site's spiritual significance, a quiet visit is
                      appreciated by both locals and fellow visitors.
                    </li>
                    <li>
                      <strong>Combine with Pemayangtse Monastery:</strong>{" "}
                      Both fit comfortably into one day out from Pelling.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes:</strong> The forest
                      walk to the lake, while short, covers uneven ground.
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
                          "Respect the site's sacred status and rules",
                          "Combine with Pemayangtse Monastery",
                          "Visit Oct-Feb for the clearest, quietest experience",
                          "Wear comfortable shoes for the forest walk",
                          "Time it for Maghe Purnima if you want festival energy",
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
                          "Attempt to boat or swim in the lake",
                          "Visit during monsoon (Jun-Sep)",
                          "Expect much accommodation right at the lake",
                          "Be loud or disruptive near the water",
                          "Rush the visit — this is a place for a slow pace",
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
                    <strong>🗺️ Extend the trip:</strong> Combine with{" "}
                    <Link href="/blog/pelling-travel-guide">Pelling</Link>{" "}
                    and{" "}
                    <Link href="/blog/yuksom-travel-guide">Yuksom</Link>{" "}
                    for a fuller West Sikkim circuit. See our full{" "}
                    <Link href="/blog/sikkim-travel-guide">
                      Sikkim travel guide
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
                  "Khecheopalri Lake",
                  "West Sikkim",
                  "Wishing Lake",
                  "Sikkim",
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

              <RelatedPostsGrid currentSlug="khecheopalri-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="khecheopalri-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
