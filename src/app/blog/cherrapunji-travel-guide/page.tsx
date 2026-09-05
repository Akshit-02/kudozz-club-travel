// src/app/blog/cherrapunji-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Cherrapunji Travel Guide: Waterfalls & Rainfall",
  description:
    "Complete Cherrapunji (Sohra) guide — Nohkalikai Falls, Mawsmai Cave, Seven Sisters Falls, Thangkharang Park, the world-famous rainfall records, how to reach from Shillong, and a full visit plan.",
  keywords:
    "Cherrapunji travel guide, Sohra, Nohkalikai Falls, Mawsmai Cave, Seven Sisters Falls, wettest place on earth, Meghalaya rainfall, how to reach Cherrapunji, Nongriat root bridge",
  openGraph: {
    title: "Cherrapunji Travel Guide: Waterfalls & Rainfall",
    description:
      "One of the wettest places on Earth, and a dramatic gorge landscape of thundering waterfalls — the complete guide to Cherrapunji.",
    url: "https://club.kudozz.in/blog/cherrapunji-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "A dramatic waterfall cascading through forest, evoking Cherrapunji's famous falls and rainfall",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherrapunji Travel Guide: Waterfalls & Rainfall",
    description:
      "One of the wettest places on Earth, and a landscape of dramatic gorges and thundering waterfalls — the complete Cherrapunji guide.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/cherrapunji-travel-guide",
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
          headline: "Cherrapunji Travel Guide: Waterfalls & Rainfall",
          description:
            "Complete Cherrapunji (Sohra) guide — Nohkalikai Falls, Mawsmai Cave, Seven Sisters Falls, Thangkharang Park, the world-famous rainfall records, how to reach from Shillong, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/cherrapunji-travel-guide",
          },
          keywords:
            "Cherrapunji, Sohra, Meghalaya, wettest place on earth, waterfalls",
          about: {
            "@type": "Place",
            name: "Cherrapunji",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Cherrapunji",
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
    q: "Why is Cherrapunji so famous for rainfall?",
    a: "Cherrapunji, locally known as Sohra, has historically held world rainfall records and remains one of the wettest places on Earth alongside nearby Mawsynram. Expect mist, cloud, and rain here even outside the core monsoon months.",
  },
  {
    q: "What is the best time to visit given the weather?",
    a: "October to April offers the clearest views and driest conditions, which matters given how much rain and mist can obscure viewpoints from June to September. Monsoon itself does make the waterfalls at their most dramatic, for those willing to embrace the rain.",
  },
  {
    q: "How far is Cherrapunji from Shillong?",
    a: "Roughly 1.5–2 hours by road, making it an easy day trip or a natural next stop after Shillong.",
  },
  {
    q: "How does Cherrapunji connect to Nongriat?",
    a: "Cherrapunji (Sohra) is the practical jumping-off town for reaching Nongriat and its famous living root bridges — you'll drive from Cherrapunji to the trailhead before beginning the descent on foot.",
  },
  {
    q: "What are the must-see waterfalls in Cherrapunji?",
    a: "Nohkalikai Falls (India's tallest plunge waterfall, roughly 340m), Seven Sisters Falls (Nohsngithiang Falls, a dramatic multi-segment cascade), and Mawsmai Cave for a different kind of karst-landscape experience are the essential stops.",
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
  { id: "introduction", title: "One of the Wettest Places on Earth", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Cherrapunji", level: 2 },
  { id: "things-to-do", title: "Waterfalls, Caves & Viewpoints", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CherrapunjiGuidePage() {
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
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="A dramatic waterfall cascading through forest, evoking Cherrapunji's famous falls and rainfall"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Cherrapunji", href: null },
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
              {["Cherrapunji", "Sohra", "Meghalaya", "Nohkalikai Falls"].map(
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
              Cherrapunji Travel Guide: Waterfalls & Rainfall
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the wettest places on Earth, wrapped around a dramatic
              gorge landscape of thundering waterfalls and limestone caves.
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
                  text: "East Khasi Hills, Meghalaya",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>One of the Wettest Places on Earth</h2>
                  <p>
                    <strong>Cherrapunji</strong>, locally known as{" "}
                    <strong>Sohra</strong>, is famous as one of the wettest
                    places on Earth, alongside nearby Mawsynram, having
                    historically held world rainfall records — a genuinely
                    extraordinary climatic fact that shapes the entire
                    character of a visit here.
                  </p>
                  <p>
                    Expect mist, cloud, and rain even outside the core
                    monsoon months. In exchange, the landscape delivers
                    dramatic gorges, thundering waterfalls, and limestone
                    caves carved by all that water — a genuinely striking
                    contrast to the rest of tropical India.
                  </p>
                  <p>
                    Cherrapunji is also the practical jumping-off town for
                    reaching{" "}
                    <Link href="/blog/nongriat-travel-guide">
                      Nongriat
                    </Link>{" "}
                    and its famous living root bridges, making it a
                    natural two-stop combination with Shillong.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌧️</span> Cherrapunji at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "East Khasi Hills" },
                        {
                          icon: "🚗",
                          label: "From Shillong",
                          value: "~1.5–2 hr",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "💧",
                          label: "Known For",
                          value: "World Rainfall Records",
                        },
                        {
                          icon: "🏞️",
                          label: "Highlight",
                          value: "Nohkalikai Falls",
                        },
                        {
                          icon: "🎯",
                          label: "Gateway To",
                          value: "Nongriat Root Bridge",
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

                <section id="best-time">
                  <h2>Best Time to Visit Cherrapunji</h2>
                  <p>
                    Given the extreme rainfall reputation, timing has an
                    outsized effect on what you'll actually get to see.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The clearest views and driest conditions of the year, essential given how much rain and mist can obscure viewpoints in monsoon.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Rain building",
                        text: "Showers become more frequent as the monsoon approaches — still workable but pack for wet weather.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Peak monsoon",
                        text: "The waterfalls are at their most dramatic, but heavy rain and thick mist make sightseeing genuinely difficult on many days.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🥶",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Clearest skies",
                        text: "The most reliable window for long-distance views from Thangkharang Park and other viewpoints.",
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
                    <strong>Our pick:</strong> October to April for the
                    clearest views — though if you're prepared to embrace
                    the rain, monsoon shows the waterfalls at their most
                    dramatic.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Cherrapunji</h2>
                  <ul>
                    <li>
                      <strong>From Shillong:</strong> A roughly 1.5–2 hour
                      drive, the most common and practical route — cross-link{" "}
                      <Link href="/blog/shillong-travel-guide">
                        Shillong
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Shared taxis:</strong> Regular shared taxis
                      run from Shillong's Bara Bazar taxi stand.
                    </li>
                    <li>
                      <strong>Self-drive:</strong> A scenic, winding drive
                      — allow extra time in poor visibility.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Build flexibility into your
                    schedule — visibility at the viewpoints can vary hugely
                    from one hour to the next.
                  </div>
                </section>

                <section id="things-to-do">
                  <h2>Waterfalls, Caves & Viewpoints</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Waterfall in the Cherrapunji region, Meghalaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Nohkalikai Falls</h3>
                  <p>
                    Plunging roughly 340 metres, Nohkalikai is India's
                    tallest plunge waterfall — a genuine showstopper, with
                    a poignant local legend attached to its name.
                  </p>
                  <h3>Mawsmai Cave</h3>
                  <p>
                    An accessible, lit limestone cave — a good, low-effort
                    introduction to the region's dramatic karst landscape.
                  </p>
                  <h3>Seven Sisters Falls</h3>
                  <p>
                    Also called Nohsngithiang Falls, a dramatic
                    multi-segment cascade especially spectacular during
                    monsoon.
                  </p>
                  <h3>Thangkharang Park</h3>
                  <p>
                    Viewpoints over the gorge landscape stretching toward
                    Bangladesh — best visited on a clear day.
                  </p>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Cherrapunji</h2>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses in Sohra town",
                          "Homestays",
                          "Basic tourist lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹4,500/night",
                        picks: [
                          "Resort cottages with valley views",
                          "Boutique guesthouses",
                          "Eco-stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Premium hillside resorts",
                          "Gorge-view cottages",
                          "Full-board packages",
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

                <section id="visit-plan">
                  <h2>Suggested Cherrapunji Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Falls & Caves",
                        color: "bg-amber-700",
                        activities: [
                          "Nohkalikai Falls",
                          "Mawsmai Cave",
                          "Thangkharang Park viewpoints",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Seven Sisters & Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Seven Sisters Falls",
                          "Explore Sohra town",
                          "Head to Nongriat trailhead or back to Shillong",
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
                    * With more time, extend into the{" "}
                    <Link href="/blog/nongriat-travel-guide">
                      Nongriat living root bridge trek
                    </Link>{" "}
                    for a fuller Meghalaya highlights trip.
                  </p>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Cherrapunji</h2>
                  <ul>
                    <li>
                      <strong>Khasi thali:</strong> Rice, pork or fish, and
                      local greens — the standard, satisfying meal at most
                      guesthouses.
                    </li>
                    <li>
                      <strong>Jadoh:</strong> The same Khasi rice-and-pork
                      staple found across Meghalaya, worth trying here too.
                    </li>
                    <li>
                      <strong>Local honey and citrus:</strong> Cherrapunji's
                      surrounding hills produce good honey and orange
                      products, popular souvenirs.
                    </li>
                  </ul>
                </section>

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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹7,000"],
                          ["Food/day", "₹450", "₹1,000", "₹2,200"],
                          ["Local transport/day", "₹500", "₹1,200", "₹2,800"],
                          ["Entry fees/day", "₹150", "₹150", "₹150"],
                          ["2-Day trip total", "₹4,200", "₹10,700", "₹24,300"],
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
                    * Excludes transport to Shillong. Local transport costs
                    are higher than average given the distances between
                    viewpoints.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Tips for Visiting Cherrapunji</h2>
                  <ul>
                    <li>
                      <strong>Carry serious rain gear:</strong> Regardless
                      of season, given the extreme rainfall reputation.
                    </li>
                    <li>
                      <strong>Build flexibility into viewpoint visits:</strong>{" "}
                      Visibility can change dramatically hour to hour.
                    </li>
                    <li>
                      <strong>Hire a local driver/guide:</strong> The
                      falls and viewpoints are spread out, and a local
                      driver knows current road and weather conditions.
                    </li>
                    <li>
                      <strong>Use Cherrapunji as your Nongriat base:</strong>{" "}
                      Plan the root-bridge trek as an extension from here.
                    </li>
                  </ul>

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
                          "Carry a proper rain jacket and dry bag",
                          "Visit viewpoints early for the best visibility",
                          "Hire a local driver who knows current conditions",
                          "Combine with a Nongriat root-bridge trek",
                          "Try local honey and citrus products",
                          "Build a buffer day for weather delays",
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
                          "Assume clear skies at any time of year",
                          "Plan a tight single-day itinerary with no buffer",
                          "Skip rain gear even in the 'dry' season",
                          "Underestimate travel time between viewpoints",
                          "Attempt Nongriat without checking trail conditions",
                          "Rush through Nohkalikai without a proper look",
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
                    <strong>🗺️ Extend the trip:</strong> Cherrapunji pairs
                    naturally with the{" "}
                    <Link href="/blog/nongriat-travel-guide">
                      Nongriat living root bridge trek
                    </Link>
                    , or head onward to{" "}
                    <Link href="/blog/dawki-travel-guide">Dawki</Link> for
                    the crystal-clear Umngot River. See our full{" "}
                    <Link href="/blog/meghalaya-travel-guide">
                      Meghalaya travel guide
                    </Link>{" "}
                    for the wider region.
                  </div>
                </section>

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

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Cherrapunji",
                  "Sohra",
                  "Meghalaya",
                  "Nohkalikai Falls",
                  "Nongriat",
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

              <RelatedPostsGrid currentSlug="cherrapunji-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="cherrapunji-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
