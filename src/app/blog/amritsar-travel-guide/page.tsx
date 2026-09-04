// src/app/blog/amritsar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Amritsar Travel Guide: Golden Temple & Food",
  description:
    "Complete Amritsar guide — the Golden Temple, Jallianwala Bagh, the Partition Museum, Wagah Border, Amritsari kulcha and lassi, how to reach, and a full visit plan.",
  keywords:
    "Amritsar travel guide, Golden Temple, Jallianwala Bagh, Partition Museum, Wagah Border, Amritsari kulcha, Punjab tourism, how to reach Amritsar, best time to visit Amritsar",
  openGraph: {
    title: "Amritsar Travel Guide: Golden Temple & Food",
    description:
      "A city built around Sikhism's holiest shrine, a profound Partition history, and a food scene that punches far above its weight — the complete Amritsar guide.",
    url: "https://club.kudozz.in/blog/amritsar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Golden-hour cityscape evoking Amritsar's old city and its layered Sikh and Partition-era history",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritsar Travel Guide: Golden Temple & Food",
    description:
      "Sikhism's holiest shrine, a profound Partition history, and a food scene built on kulcha and lassi — the complete Amritsar guide.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/amritsar-travel-guide",
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
          headline: "Amritsar Travel Guide: Golden Temple & Food",
          description:
            "Complete Amritsar guide — the Golden Temple, Jallianwala Bagh, the Partition Museum, Wagah Border, Amritsari kulcha and lassi, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/amritsar-travel-guide",
          },
          keywords:
            "Amritsar, Punjab, Golden Temple, Jallianwala Bagh, Partition Museum, Wagah Border",
          about: {
            "@type": "Place",
            name: "Amritsar",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Punjab",
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
                name: "Punjab",
                item: "https://club.kudozz.in/blog/punjab-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Amritsar",
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
    q: "How many days do I need for Amritsar?",
    a: "Two days is a comfortable minimum — one for the Golden Temple, Jallianwala Bagh, and the Partition Museum, and a second built around the Wagah Border ceremony in the late afternoon combined with a slower morning of old-city food and shopping.",
  },
  {
    q: "Is Amritsar a day trip from Chandigarh or Delhi, or worth staying overnight?",
    a: "It's technically possible as a very long day trip from Chandigarh, but Amritsar rewards an overnight stay — the Golden Temple is genuinely at its best early morning or late at night, and rushing it to catch a same-day return does the city a disservice.",
  },
  {
    q: "What is the best time to visit Amritsar?",
    a: "October to March is the clear pick, with comfortable daytime temperatures for walking the old city. Punjab's summer (Apr-Jun) brings intense, dry heat that makes extended outdoor sightseeing genuinely difficult.",
  },
  {
    q: "Is a Wagah Border visit included in a typical Amritsar trip?",
    a: "Yes, it's one of the most popular add-ons — most visitors combine a day of Amritsar city sightseeing with a late-afternoon trip out to Wagah for the evening Beating Retreat ceremony, roughly 45 minutes to an hour each way.",
  },
  {
    q: "What food must I try in Amritsar?",
    a: "Amritsari kulcha (a stuffed, tandoor-baked bread, usually served with chole and a dollop of butter), a properly thick Punjabi lassi, and Amritsari fish (spiced, batter-fried freshwater fish) are the three dishes most associated with the city — all worth seeking out at old-city institutions rather than tourist-facing restaurants.",
  },
  {
    q: "Is the Partition Museum worth visiting?",
    a: "Yes, genuinely — it's one of very few museums anywhere dedicated specifically to the human history of the 1947 Partition, told through personal testimonies and artifacts rather than a dry historical timeline, and it's often overlooked by visitors focused only on the Golden Temple.",
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
  { id: "introduction", title: "A City Built Around a Shrine", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Amritsar", level: 2 },
  { id: "things-to-do", title: "Golden Temple, Jallianwala Bagh & More", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "2-Day Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AmritsarGuidePage() {
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
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Golden-hour cityscape evoking Amritsar's old city and its layered Sikh and Partition-era history"
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
                { label: "Punjab", href: "/blog/punjab-travel-guide" },
                { label: "Amritsar", href: null },
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
                "Amritsar",
                "Punjab",
                "Golden Temple",
                "Wagah Border",
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
              Amritsar Travel Guide: Golden Temple & Food
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A city built around Sikhism's holiest shrine, a profound
              Partition-era history, and a food scene — kulcha, lassi,
              Amritsari fish — that punches far above its weight.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Amritsar, Punjab",
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
                  <h2>A City Built Around a Shrine</h2>
                  <p>
                    <strong>Amritsar</strong> was founded in 1577 by{" "}
                    <strong>Guru Ram Das</strong>, the fourth Sikh Guru,
                    around the sacred pool that gives the city its name —
                    Amrit Sarovar, the "pool of nectar." Today the city is
                    inseparable from the{" "}
                    <strong>Golden Temple (Sri Harmandir Sahib)</strong> that
                    rises from that pool, Sikhism's holiest shrine and one of
                    the most moving places to visit in India regardless of
                    faith. See our dedicated deep dive at{" "}
                    <Link href="/blog/golden-temple-travel-guide">
                      the Golden Temple guide
                    </Link>{" "}
                    for everything you need to know before visiting.
                  </p>
                  <p>
                    But Amritsar's history runs deeper than a single shrine.
                    Jallianwala Bagh, a short walk from the temple, is the
                    site of the 1919 massacre in which British troops fired
                    on an unarmed gathering — now a quiet, sobering memorial
                    garden. The Partition Museum, dedicated to the human
                    history of 1947, is one of very few museums anywhere
                    built specifically around that history, and is often
                    overlooked by visitors focused only on the temple.
                  </p>
                  <p>
                    Roughly 30 km away, the daily{" "}
                    <strong>Wagah Border</strong> ceremony draws its own
                    crowds — see our full guide at{" "}
                    <Link href="/blog/wagah-border-travel-guide">
                      the Wagah Border guide
                    </Link>
                    . And through all of it runs a food culture — kulcha,
                    lassi, Amritsari fish — that has made this city a
                    culinary pilgrimage in its own right.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Amritsar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Punjab" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Sri Guru Ram Dass Jee Intl. (ATQ)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Golden Temple, Wagah Border",
                        },
                        {
                          icon: "🍽️",
                          label: "Food",
                          value: "Kulcha, Lassi, Fish",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹5,000",
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
                  <h2>Best Time to Visit Amritsar</h2>
                  <p>
                    Punjab has a continental climate with sharp seasonal
                    swings — timing matters for comfortable old-city walking.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable, and clear — ideal for the old city, the Wagah ceremony, and long evenings around the Golden Temple.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Punjab's summer brings intense, dry heat that makes extended outdoor sightseeing genuinely difficult.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid",
                        text: "Rain brings relief from the heat but adds humidity; sightseeing is still possible with some flexibility.",
                      },
                      {
                        season: "Mar",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Hola Mohalla season",
                        text: "If timing allows, combine with the vivid Hola Mohalla festival at nearby Anandpur Sahib.",
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
                    <strong>Our pick:</strong> October to March — cool,
                    comfortable conditions for the old city, Jallianwala
                    Bagh, and the late-afternoon trip out to Wagah.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Amritsar</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Sri Guru Ram Dass Jee
                      International Airport (ATQ) has domestic and select
                      international connections.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Amritsar Junction is a major
                      rail hub with direct trains from Delhi, Chandigarh, and
                      most major North Indian cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected by national
                      highway from Delhi (~450 km) and Chandigarh (~230 km).
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're combining Amritsar
                    with a Golden Triangle or North India trip, an overnight
                    train from Delhi is a comfortable, time-efficient option.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Golden Temple, Jallianwala Bagh & More</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Old city architecture evoking Amritsar's historic core"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Golden Temple</h3>
                  <p>
                    The city's spiritual and geographic centre — see our full{" "}
                    <Link href="/blog/golden-temple-travel-guide">
                      Golden Temple guide
                    </Link>{" "}
                    for timings, etiquette, and the langar experience.
                  </p>
                  <h3>Jallianwala Bagh</h3>
                  <p>
                    A short walk from the Golden Temple, this memorial garden
                    marks the site of the 1919 massacre — a quiet, sobering
                    stop that adds essential historical context to a visit.
                  </p>
                  <h3>Partition Museum</h3>
                  <p>
                    One of very few museums anywhere dedicated specifically
                    to the human history of the 1947 Partition, told through
                    personal testimonies and artifacts. Genuinely worth the
                    visit, and often overlooked.
                  </p>
                  <h3>Gobindgarh Fort & Ram Bagh</h3>
                  <p>
                    Gobindgarh Fort offers light shows and heritage exhibits
                    within a restored 18th-century fort, while Ram Bagh's
                    gardens make a pleasant, unhurried stop.
                  </p>
                  <h3>Wagah Border</h3>
                  <p>
                    Roughly 30 km from the city, the daily Beating Retreat
                    ceremony is a spirited, theatrical must-see — see our
                    full{" "}
                    <Link href="/blog/wagah-border-travel-guide">
                      Wagah Border guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Amritsar</h2>
                  <p>
                    Staying near the Golden Temple puts everything walkable
                    within reach and lets you experience the temple's
                    quieter early-morning and late-night hours easily.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses near the Golden Temple",
                          "Free/low-cost pilgrim lodging (Sarai)",
                          "Budget hotels, old city",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "Boutique hotels, near the temple",
                          "Business hotels, Ranjit Avenue",
                          "Heritage-style guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🛕",
                        range: "₹6,000–₹14,000+/night",
                        picks: [
                          "Premium hotels overlooking the temple",
                          "International chain hotels",
                          "Full-service luxury properties",
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
                  <h2>2-Day Amritsar Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Golden Temple & History",
                        color: "bg-amber-700",
                        activities: [
                          "Early-morning visit to the Golden Temple",
                          "Jallianwala Bagh and the Partition Museum",
                          "Evening: return to the temple when it's lit and quieter",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Old City & Wagah Border",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: old-city food trail and Gobindgarh Fort",
                          "Afternoon: drive to Wagah Border",
                          "Evening: Beating Retreat ceremony",
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
                  <h2>What to Eat in Amritsar</h2>
                  <ul>
                    <li>
                      <strong>Amritsari Kulcha:</strong> A stuffed,
                      tandoor-baked bread — usually served with chole and a
                      generous dollop of butter — that is the city's
                      signature dish.
                    </li>
                    <li>
                      <strong>Lassi:</strong> A properly thick, creamy
                      Punjabi lassi, often served in old-city establishments
                      that have been perfecting it for generations.
                    </li>
                    <li>
                      <strong>Amritsari Fish:</strong> Spiced, batter-fried
                      freshwater fish — a distinctive local specialty worth
                      seeking out.
                    </li>
                    <li>
                      <strong>Langar at the Golden Temple:</strong> The free
                      community kitchen serves a simple, wholesome meal to
                      all visitors — an experience in itself, not just food.
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
                            "₹1,200",
                            "₹3,500",
                            "₹9,000",
                          ],
                          ["Food/day", "₹300", "₹1,000", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹700",
                            "₹1,800",
                          ],
                          ["Wagah Border trip (round trip)", "₹600", "₹1,200", "₹2,500"],
                          ["Daily total", "₹2,400", "₹6,400", "₹15,800"],
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
                    * The Golden Temple itself is free to visit — donations
                    are welcomed but never required.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Amritsar</h2>
                  <ul>
                    <li>
                      <strong>Cover your head at the Golden Temple:</strong>{" "}
                      A scarf or cloth is required — one is provided free at
                      the entrance if you don't have your own.
                    </li>
                    <li>
                      <strong>Allocate a full evening for Wagah:</strong>{" "}
                      Travel time plus the ceremony itself makes this a
                      half-day commitment, not a quick stop.
                    </li>
                    <li>
                      <strong>Don't skip the Partition Museum:</strong> It's
                      often overlooked by visitors focused only on the
                      temple, but genuinely worth the time.
                    </li>
                    <li>
                      <strong>Visit the temple at night:</strong> It's open
                      24 hours and is noticeably quieter and, many say, even
                      more beautiful after dark.
                    </li>
                    <li>
                      <strong>Try food at old-city institutions:</strong>{" "}
                      Amritsar's best kulcha and lassi tend to come from
                      long-running local spots rather than tourist-facing
                      restaurants.
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
                          "Cover your head and remove shoes at the Golden Temple",
                          "Visit the temple early morning or late at night",
                          "Set aside real time for the Partition Museum",
                          "Try Amritsari kulcha and lassi at an old-city spot",
                          "Arrive early at Wagah Border for a good viewing spot",
                          "Consider joining langar sewa for a genuine experience",
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
                          "Bring alcohol, tobacco, or meat into the Golden Temple complex",
                          "Rush the Golden Temple into a quick photo stop",
                          "Arrive late for Wagah Border and miss a good seat",
                          "Skip the Partition Museum thinking it's a minor stop",
                          "Visit in peak summer without planning around the heat",
                          "Expect the Golden Temple's inner sanctum to allow all photography",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Amritsar with{" "}
                    <Link href="/blog/anandpur-sahib-travel-guide">
                      Anandpur Sahib
                    </Link>{" "}
                    for a deeper dive into Sikh heritage, or see our full{" "}
                    <Link href="/blog/punjab-travel-guide">
                      Punjab travel guide
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
                  "Amritsar",
                  "Punjab",
                  "Golden Temple",
                  "Wagah Border",
                  "Jallianwala Bagh",
                  "Partition Museum",
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

              <RelatedPostsGrid currentSlug="amritsar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="amritsar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
