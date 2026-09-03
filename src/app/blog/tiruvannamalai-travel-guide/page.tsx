// src/app/blog/tiruvannamalai-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tiruvannamalai Guide: Arunachala & Girivalam",
  description:
    "Complete Tiruvannamalai guide — the Arunachaleswarar Temple, the 14 km barefoot Girivalam walk around Arunachala hill, Sri Ramanasramam, Karthigai Deepam, how to reach from Chennai, and a full visit plan.",
  keywords:
    "Tiruvannamalai travel guide, Arunachaleswarar Temple, Girivalam, Arunachala hill, Sri Ramanasramam, Ramana Maharshi ashram, Karthigai Deepam, Pancha Bhoota Stalam, how to reach Tiruvannamalai, Tamil Nadu spiritual towns",
  openGraph: {
    title: "Tiruvannamalai Guide: Arunachala & Girivalam",
    description:
      "A fire-element Shiva temple, a hill regarded as a living deity, and a 14 km barefoot walk that draws pilgrims from across India — the complete Tiruvannamalai guide.",
    url: "https://club.kudozz.in/blog/tiruvannamalai-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Temple architecture set against a hillside, evoking Tiruvannamalai's Arunachaleswarar Temple at the base of Arunachala hill",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiruvannamalai Guide: Arunachala & Girivalam",
    description:
      "A fire-element Shiva temple, a sacred hill, and the 14 km Girivalam walk — the complete guide to Tiruvannamalai.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tiruvannamalai-travel-guide",
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
          headline: "Tiruvannamalai Guide: Arunachala & Girivalam",
          description:
            "Complete Tiruvannamalai guide — the Arunachaleswarar Temple, the 14 km barefoot Girivalam walk around Arunachala hill, Sri Ramanasramam, Karthigai Deepam, how to reach from Chennai, and a full visit plan.",
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
            "@id": "https://club.kudozz.in/blog/tiruvannamalai-travel-guide",
          },
          keywords:
            "Tiruvannamalai, Arunachala, Girivalam, Tamil Nadu, Shiva temple, pilgrimage, spiritual town",
          about: {
            "@type": "Place",
            name: "Tiruvannamalai",
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
                name: "Tiruvannamalai",
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
    q: "What is Girivalam and how long does it take?",
    a: "Girivalam is a roughly 14 km circumambulation walk around the base of Arunachala hill, traditionally done barefoot. Most pilgrims complete it in about 4-6 hours at a comfortable pace, stopping at small shrines along the route.",
  },
  {
    q: "Is Girivalam done barefoot?",
    a: "Traditionally yes — going barefoot is considered part of the pilgrimage's merit. Many visitors do walk it barefoot, though it isn't mandatory, and the road surface is paved for most of the route, which makes it manageable even for first-timers.",
  },
  {
    q: "What is the best time to visit Tiruvannamalai?",
    a: "October to February offers the most comfortable temperatures for the Girivalam walk. Full moon nights draw the largest crowds and the most devotional atmosphere; visiting on a regular day gives a quieter, less crowded experience of the same walk.",
  },
  {
    q: "How far is Tiruvannamalai from Chennai?",
    a: "Roughly 185 km, about a 3.5-4 hour drive by road, making it a feasible long day trip or a comfortable overnight visit from Chennai or Bangalore.",
  },
  {
    q: "What is special about Karthigai Deepam?",
    a: "Karthigai Deepam, usually held in November-December, features a massive bonfire lit atop Arunachala hill, visible for miles around — it's the town's single biggest annual event and draws enormous crowds of pilgrims.",
  },
  {
    q: "What is Sri Ramanasramam?",
    a: "It's the ashram of the 20th-century sage Ramana Maharshi, a major centre for meditation and spiritual study that draws seekers from India and abroad. It's a big part of why Tiruvannamalai has such a distinct, long-term spiritual-resident community beyond typical pilgrimage tourism.",
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
  { id: "introduction", title: "A Hill Regarded as Living Fire", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tiruvannamalai", level: 2 },
  { id: "things-to-do", title: "Temple, Girivalam & Ashram", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TiruvannamalaiGuidePage() {
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
              alt="Temple architecture set against a hillside, evoking Tiruvannamalai's Arunachaleswarar Temple at the base of Arunachala hill"
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
                { label: "Tiruvannamalai", href: null },
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
                "Tiruvannamalai",
                "Arunachala",
                "Girivalam",
                "Tamil Nadu",
                "Pilgrimage",
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
              Tiruvannamalai: Arunachala & the Girivalam Walk
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A temple dedicated to Shiva as fire, a hill devotees regard as
              a living deity, and a 14 km barefoot walk that has drawn
              pilgrims and seekers for generations.
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
                  text: "Tiruvannamalai, Tamil Nadu",
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
                  <h2>A Hill Regarded as Living Fire</h2>
                  <p>
                    <strong>Tiruvannamalai</strong> is home to the{" "}
                    <strong>Arunachaleswarar Temple</strong>, one of the
                    largest temple complexes in India, dedicated to Shiva as
                    the element of fire (Agni Lingam) — one of the five{" "}
                    <strong>Pancha Bhoota Stalams</strong> spread across{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu
                    </Link>
                    . The temple sits at the base of Arunachala hill, which
                    devotees regard not merely as a sacred site but as a
                    living form of Shiva himself — a belief that shapes
                    almost everything about the town's spiritual character.
                  </p>
                  <p>
                    That character goes well beyond a single temple visit.
                    Tiruvannamalai is also home to{" "}
                    <strong>Sri Ramanasramam</strong>, the ashram of the
                    revered 20th-century sage Ramana Maharshi, which draws
                    meditators and spiritual seekers from India and abroad —
                    many of whom stay for weeks, months, or longer. The
                    result is a town with a genuinely distinct atmosphere:
                    equal parts bustling pilgrimage centre and quiet retreat
                    town.
                  </p>
                  <p>
                    The signature experience for most visitors is{" "}
                    <strong>Girivalam</strong> — a roughly 14 km
                    circumambulation walk around the base of Arunachala hill,
                    traditionally done barefoot, especially popular (and
                    especially crowded) on full moon nights.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🔥</span> Tiruvannamalai at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Tiruvannamalai, Tamil Nadu",
                        },
                        {
                          icon: "🚗",
                          label: "From Chennai",
                          value: "~185 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Arunachala, Girivalam",
                        },
                        {
                          icon: "🚶",
                          label: "Girivalam",
                          value: "~14 km, barefoot",
                        },
                        {
                          icon: "🧘",
                          label: "Also Known For",
                          value: "Sri Ramanasramam",
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
                  <h2>Best Time to Visit Tiruvannamalai</h2>
                  <p>
                    Temperature and crowd levels both shift meaningfully
                    across the year — timing matters especially if Girivalam
                    is the priority.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable conditions make the 14 km Girivalam walk genuinely pleasant rather than a test of endurance.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around it",
                        text: "Daytime heat makes the barefoot walk considerably harder; if visiting, start Girivalam well before sunrise.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — variable",
                        text: "Rain can interrupt the walk and temple visits, though showers are usually brief rather than continuous.",
                      },
                      {
                        season: "Full Moon Nights",
                        emoji: "🌕",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak devotional atmosphere",
                        text: "The most crowded, most atmospheric time to do Girivalam — expect very large numbers of pilgrims walking through the night.",
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
                    <strong>Our pick:</strong> October to February for
                    comfortable walking weather — or a full moon night
                    specifically if the crowded, devotional atmosphere is
                    what you're after.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tiruvannamalai</h2>
                  <ul>
                    <li>
                      <strong>By road from Chennai:</strong> Roughly 185 km,
                      about a 3.5-4 hour drive — the most common way visitors
                      arrive, whether for a day trip or an overnight stay.
                    </li>
                    <li>
                      <strong>By road from Bangalore:</strong> Roughly 200 km,
                      a comparable drive time, making Tiruvannamalai a
                      realistic weekend option from either city.
                    </li>
                    <li>
                      <strong>By rail:</strong> Tiruvannamalai has its own
                      railway station with connections to Chennai, though
                      road remains the faster and more flexible option for
                      most visitors.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If visiting around a full
                    moon, arrive well before evening — traffic into town and
                    parking availability both get significantly harder as
                    Girivalam crowds build up.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Temple, Girivalam & Ashram</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Temple architecture near Tiruvannamalai, Tamil Nadu"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Arunachaleswarar Temple</h3>
                  <p>
                    One of India's largest temple complexes, with towering
                    gopurams and successive courtyards built up over
                    centuries. As a Pancha Bhoota Stalam representing fire,
                    it holds a particular significance among Tamil Nadu's
                    major Shiva temples.
                  </p>
                  <h3>The Girivalam Walk</h3>
                  <p>
                    A roughly 14 km paved path circles the base of Arunachala
                    hill, dotted with small shrines and rest points along the
                    way. Traditionally walked barefoot, it takes most
                    pilgrims 4-6 hours at an unhurried pace — a meditative
                    experience as much as a physical one.
                  </p>
                  <h3>Sri Ramanasramam</h3>
                  <p>
                    The ashram of sage Ramana Maharshi, still an active
                    centre for meditation and spiritual study. Visitors are
                    welcome to sit quietly in the meditation hall — a
                    markedly different, quieter experience from the temple's
                    bustle.
                  </p>
                  <h3>Karthigai Deepam</h3>
                  <p>
                    Usually held in November-December, this festival lights
                    a massive bonfire atop Arunachala hill, visible for miles
                    around — the town's single biggest annual event, drawing
                    enormous crowds.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Tiruvannamalai</h2>
                  <p>
                    Options range from simple pilgrim lodges to longer-stay
                    guesthouses catering to the town's meditation and
                    spiritual-retreat crowd.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛖",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Pilgrim lodges near the temple",
                          "Basic guesthouses",
                          "Ashram-adjacent budget rooms",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Standard hotels in town",
                          "Longer-stay guesthouses",
                          "Comfortable retreat-style stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌇",
                        range: "₹4,000–₹8,000+/night",
                        picks: [
                          "Boutique wellness resorts nearby",
                          "Premium hotels on the outskirts",
                          "Private villa stays",
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
                        title: "Temple & Ashram",
                        color: "bg-amber-700",
                        activities: [
                          "Morning darshan at Arunachaleswarar Temple",
                          "Visit Sri Ramanasramam",
                          "Evening walk around the temple bazaar",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Girivalam",
                        color: "bg-sky-600",
                        activities: [
                          "Early start for the 14 km Girivalam walk",
                          "Stop at shrines along the route",
                          "Rest and departure in the afternoon",
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
                    * Full moon nights merge both days into one long
                    devotional evening — many pilgrims skip sleep entirely
                    and walk through the night.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Tiruvannamalai</h2>
                  <ul>
                    <li>
                      <strong>Temple-adjacent eateries:</strong> Simple South
                      Indian vegetarian meals, mostly, reflecting the town's
                      pilgrimage character.
                    </li>
                    <li>
                      <strong>Ashram-area cafes:</strong> A number of small
                      cafes near Sri Ramanasramam cater to the longer-stay
                      spiritual-seeker crowd, often with a slightly more
                      international menu.
                    </li>
                    <li>
                      <strong>Street food near the temple:</strong> Good for
                      a quick bite between temple visits and the Girivalam
                      walk.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹6,000"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
                          ["Donations/offerings", "₹100", "₹300", "₹1,000"],
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
                    * Figures are per person, per day, excluding transport to
                    Tiruvannamalai itself.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Tiruvannamalai</h2>
                  <ul>
                    <li>
                      <strong>Pace yourself on Girivalam:</strong> 14 km
                      barefoot is a real physical undertaking — carry water
                      and take breaks at the shrines along the route.
                    </li>
                    <li>
                      <strong>Decide on full moon vs. a regular day:</strong>{" "}
                      Full moon nights are far more crowded and atmospheric;
                      a regular day gives a quieter, more contemplative walk.
                    </li>
                    <li>
                      <strong>Respect ashram etiquette:</strong> Keep quiet
                      and follow posted guidelines if visiting Sri
                      Ramanasramam's meditation hall.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> As with most Tamil
                      Nadu temple towns, modest clothing is expected at
                      religious sites.
                    </li>
                    <li>
                      <strong>Book ahead for Karthigai Deepam:</strong>{" "}
                      Accommodation fills up fast around this festival —
                      reserve well in advance if visiting then.
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
                          "Carry water and pace yourself on Girivalam",
                          "Visit Sri Ramanasramam for a quieter contrast to the temple",
                          "Book accommodation ahead for Karthigai Deepam",
                          "Start early if walking in warmer months",
                          "Dress modestly at all religious sites",
                          "Try a full moon night if you want the fuller atmosphere",
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
                          "Attempt the full walk barefoot in peak afternoon heat",
                          "Arrive on a full moon evening without a booking",
                          "Be loud or disruptive inside the ashram hall",
                          "Skip water breaks on the Girivalam route",
                          "Expect to drive easily into town during Karthigai Deepam",
                          "Wear revealing clothing at the temple",
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
                    <strong>🗺️ Extend the trip:</strong> Combine
                    Tiruvannamalai with a wider Tamil Nadu temple circuit —
                    see our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
                    </Link>{" "}
                    for more.
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
                  "Tiruvannamalai",
                  "Arunachaleswarar Temple",
                  "Tamil Nadu",
                  "Girivalam",
                  "Pilgrimage",
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

              <RelatedPostsGrid currentSlug="tiruvannamalai-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tiruvannamalai-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
