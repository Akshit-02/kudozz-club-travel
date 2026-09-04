// src/app/blog/osian-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Osian Travel Guide: Desert Temples & Tips",
  description:
    "Complete Osian guide — the 8th-12th century temple cluster known as the 'Khajuraho of Rajasthan', Sachiya Mata Temple, Jain temples, desert dunes and camel safaris, how to reach from Jodhpur, and a full visit plan.",
  keywords:
    "Osian travel guide, Khajuraho of Rajasthan, Sachiya Mata Temple, Osian Jain temples, Osian sand dunes camel safari, how to reach Osian from Jodhpur, Rajasthan desert temples",
  openGraph: {
    title: "Osian Travel Guide: Desert Temples & Tips",
    description:
      "A cluster of 8th-12th century Hindu and Jain temples rising from the Thar Desert near Jodhpur — the complete guide to Osian.",
    url: "https://club.kudozz.in/blog/osian-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient carved temple architecture, evoking Osian's cluster of 8th-12th century desert temples near Jodhpur",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Osian Travel Guide: Desert Temples & Tips",
    description:
      "Ancient temples and quiet sand dunes near Jodhpur — the complete guide to Osian, the 'Khajuraho of Rajasthan'.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/osian-travel-guide",
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
          headline: "Osian Travel Guide: Desert Temples & Tips",
          description:
            "Complete Osian guide — the 8th-12th century temple cluster known as the 'Khajuraho of Rajasthan', Sachiya Mata Temple, Jain temples, desert dunes and camel safaris, how to reach from Jodhpur, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
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
            "@id": "https://club.kudozz.in/blog/osian-travel-guide",
          },
          keywords:
            "Osian, Rajasthan, desert temples, Sachiya Mata Temple, Jain temples, Jodhpur",
          about: {
            "@type": "Place",
            name: "Osian",
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
                name: "Osian",
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
    q: "Why is Osian called the 'Khajuraho of Rajasthan'?",
    a: "Osian holds a remarkable, well-preserved cluster of Hindu and Jain temples dating from the 8th to 12th centuries CE, comparable in historical and architectural significance to Khajuraho — a rare surviving example of temple architecture from that era in the desert region, since many contemporaneous sites elsewhere were lost over the centuries.",
  },
  {
    q: "How far is Osian from Jodhpur?",
    a: "Roughly 65 km, about an hour to 90 minutes by road, making it an easy day trip from the city.",
  },
  {
    q: "Is Osian a day trip or worth an overnight desert camp?",
    a: "Both work — a day trip from Jodhpur covers the temples and a short dune visit comfortably, but an overnight desert camp lets you properly experience sunset and sunrise over the dunes without rushing back.",
  },
  {
    q: "How does the desert experience in Osian compare to Jaisalmer?",
    a: "Osian's dunes are noticeably quieter and less commercialized than Jaisalmer's more famous desert-safari circuit — a good option if you want a calmer camel-safari experience without the crowds, though on a smaller scale than Jaisalmer's dunes.",
  },
  {
    q: "What temples should I prioritize in Osian?",
    a: "Sachiya Mata Temple is the most significant Hindu temple in the cluster, and the Jain temple group nearby is equally worth seeing — between the two, allow at least half a day to appreciate the carvings properly.",
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
  { id: "introduction", title: "The Khajuraho of Rajasthan", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Osian", level: 2 },
  { id: "things-to-do", title: "Temples & Sand Dunes", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function OsianGuidePage() {
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
              src="/images/destinations/manali/hadimba-temple.jpg"
              alt="Ancient carved temple architecture, evoking Osian's cluster of 8th-12th century desert temples near Jodhpur"
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
                { label: "Osian", href: null },
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
              {["Osian", "Desert Temples", "Jodhpur", "Rajasthan"].map(
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
              Osian: Desert Temples & Dunes Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Ancient Hindu and Jain temples rise straight out of the Thar
              Desert near Jodhpur — Osian pairs centuries-old carving with
              a quieter alternative to Jaisalmer's dunes.
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
                  text: "Near Jodhpur, Rajasthan",
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
                  <h2>The Khajuraho of Rajasthan</h2>
                  <p>
                    <strong>Osian</strong>, roughly 65 km from{" "}
                    <Link href="/blog/jodhpur-travel-guide">Jodhpur</Link>,
                    is an ancient temple town in the Thar Desert sometimes
                    called the <em>"Khajuraho of Rajasthan"</em> for its
                    remarkable cluster of well-preserved temples dating from
                    the 8th to 12th centuries CE — both Hindu and Jain,
                    including the notable Sachiya Mata Temple and several
                    significant Jain temples.
                  </p>
                  <p>
                    This makes Osian a rare and important surviving example
                    of temple architecture from that era in the desert
                    region, since many contemporaneous sites elsewhere were
                    lost to later invasions or simple erosion over the
                    centuries — a genuinely significant if under-visited
                    heritage site.
                  </p>
                  <p>
                    Beyond the temples, the surrounding area has sand dunes,
                    making Osian also a base for a smaller, quieter, and
                    less touristy camel-safari and desert-camping experience
                    compared to the much more commercialized dunes around{" "}
                    <Link href="/blog/rajasthan-desert-travel-guide">
                      Jaisalmer
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Osian at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Jodhpur, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "From Jodhpur",
                          value: "~65 km, ~1–1.5 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🕌",
                          label: "Known For",
                          value: "8th–12th c. Temples",
                        },
                        {
                          icon: "🐪",
                          label: "Also Known For",
                          value: "Quiet Desert Dunes",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Jodhpur",
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
                  <h2>Best Time to Visit Osian</h2>
                  <p>
                    Desert heat and comfortable dune walking both shape
                    when to plan a visit here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions for both temple exploring and dune visits — the comfortable window by a wide margin.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid dune activities",
                        text: "Desert heat is intense; temple visits are still possible with an early start, but dune time should be minimized.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — occasional relief",
                        text: "Some rain cools things down, though it's not the ideal season for camel safaris on the dunes.",
                      },
                      {
                        season: "Evening",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best for the dunes",
                        text: "Late afternoon into sunset is the classic window for camel rides and dune photography.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    temperatures for temples in the morning and dunes at
                    sunset.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Osian</h2>
                  <ul>
                    <li>
                      <strong>From Jodhpur:</strong> Roughly 65 km, about an
                      hour to 90 minutes by road — the standard approach.
                    </li>
                    <li>
                      <strong>By rail:</strong> Osian has its own small
                      railway station with limited connections, though road
                      from Jodhpur remains far more practical for most
                      visitors.
                    </li>
                    <li>
                      <strong>As a desert-camp add-on:</strong> Several
                      Jodhpur-based tour operators combine an Osian temple
                      visit with an overnight desert camp package.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you want a quieter camel
                    safari than Jaisalmer's more crowded dunes, ask your
                    Jodhpur operator specifically about an Osian-based
                    overnight camp.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temples & Sand Dunes</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Ancient carved temple architecture at Osian, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Sachiya Mata Temple</h3>
                  <p>
                    The most significant of Osian's Hindu temples, with
                    intricate carving that has survived remarkably well
                    given its age — allow real time here rather than
                    rushing through.
                  </p>
                  <h3>The Jain Temple Cluster</h3>
                  <p>
                    A group of well-preserved Jain temples sits close by,
                    equally significant and equally worth a slow, attentive
                    visit for anyone interested in the region's religious
                    architecture.
                  </p>
                  <h3>Sand Dunes & Camel Safari</h3>
                  <p>
                    Osian's dunes are smaller and far less crowded than
                    Jaisalmer's, making for a calmer, more personal camel
                    safari experience — a genuine point of comparison worth
                    weighing if you're choosing between the two.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Most visitors day-trip from Jodhpur, but a desert camp
                    near Osian is worth considering if you want the dune
                    experience without an early return drive.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏙️",
                        range: "₹1,000–₹2,000/night",
                        picks: [
                          "Budget hotels in Jodhpur",
                          "Simple guesthouses near the old city",
                          "Basic desert camps near Osian",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "Mid-range Jodhpur hotels",
                          "Standard desert camp packages",
                          "Boutique heritage stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏰",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Premium Jodhpur heritage hotels",
                          "Upscale desert camp resorts",
                          "Full-service luxury tented stays",
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
                        day: "Option A",
                        title: "Day Trip from Jodhpur",
                        color: "bg-amber-700",
                        activities: [
                          "Morning drive to Osian",
                          "Sachiya Mata Temple and Jain temples",
                          "Short camel ride before returning to Jodhpur",
                        ],
                      },
                      {
                        day: "Option B",
                        title: "Overnight Desert Camp",
                        color: "bg-sky-600",
                        activities: [
                          "Temples in the late morning",
                          "Sunset camel safari and dune time",
                          "Overnight desert camp, return next morning",
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
                      <strong>Desert camp meals:</strong> If staying
                      overnight, camps typically serve full Rajasthani
                      thalis, often with a bonfire dinner.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Simple eateries near
                      the temple complex for a quick meal.
                    </li>
                    <li>
                      <strong>Jodhpur dining:</strong> For a fuller
                      restaurant scene, plan proper meals before or after
                      your Osian trip in Jodhpur.
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
                          ["Accommodation/night", "₹1,200", "₹3,000", "₹8,000"],
                          ["Camel safari (per session)", "₹300", "₹700", "₹1,500"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport (Jodhpur–Osian)", "₹800", "₹1,500", "₹2,500"],
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
                  <h2>Essential Tips for Visiting Osian</h2>
                  <ul>
                    <li>
                      <strong>Allocate time for both temples and dunes:</strong>{" "}
                      Don't rush either — they're genuinely different
                      experiences worth their own attention.
                    </li>
                    <li>
                      <strong>Go early or late for the dunes:</strong>{" "}
                      Morning or sunset light makes a huge difference to
                      both comfort and photography.
                    </li>
                    <li>
                      <strong>Compare against Jaisalmer if choosing:</strong>{" "}
                      Osian suits travellers who want a quieter, smaller-
                      scale desert experience.
                    </li>
                    <li>
                      <strong>Dress respectfully at the temples:</strong>{" "}
                      Modest clothing is expected at both the Hindu and Jain
                      sites.
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
                          "Visit both Sachiya Mata Temple and the Jain temple cluster",
                          "Time the dunes for sunset if you have flexibility",
                          "Dress modestly at all temple sites",
                          "Consider an overnight desert camp for a fuller experience",
                          "Compare Osian's quieter dunes against Jaisalmer's",
                          "Carry water for the temple walking and dune time",
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
                          "Rush the temple visit to prioritize the dunes",
                          "Plan camel activities during peak midday heat",
                          "Expect Jaisalmer-scale dunes or crowds here",
                          "Skip the Jain temples in favor of just the Hindu ones",
                          "Forget sun protection for the desert stretch",
                          "Assume a wide restaurant scene right at the site",
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
                    <strong>🗺️ Extend the trip:</strong> Osian pairs
                    naturally with{" "}
                    <Link href="/blog/jodhpur-travel-guide">Jodhpur</Link>{" "}
                    as your base, or continue west toward{" "}
                    <Link href="/blog/rajasthan-desert-travel-guide">
                      Jaisalmer and the Thar Desert
                    </Link>
                    . See our full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
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
                {["Osian", "Rajasthan", "Desert Temples", "Jodhpur"].map(
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

              <RelatedPostsGrid currentSlug="osian-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="osian-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
