// src/app/blog/chittorgarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chittorgarh Fort Guide: History & Tips",
  description:
    "Complete Chittorgarh Fort guide — Vijay Stambh, Kirti Stambh, Rani Padmini's Palace and the legend of jauhar, the Meera Temple, how to reach from Udaipur, and a full visit plan.",
  keywords:
    "Chittorgarh Fort travel guide, Vijay Stambh, Kirti Stambh, Rani Padmini Palace, jauhar Chittorgarh, Meera Temple Chittorgarh, how to reach Chittorgarh, Chittorgarh from Udaipur, Rajput heritage Rajasthan, UNESCO hill forts Rajasthan",
  openGraph: {
    title: "Chittorgarh Fort Guide: History & Tips",
    description:
      "One of Asia's largest forts, and the site of Rajasthan's most powerful stories of resistance and sacrifice — the complete Chittorgarh guide.",
    url: "https://club.kudozz.in/blog/chittorgarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stone fort ruins and towers, evoking Chittorgarh Fort's Vijay Stambh and Rajput-era architecture",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chittorgarh Fort Guide: History & Tips",
    description:
      "One of Asia's largest forts, and the setting for Rajasthan's most powerful stories of resistance — the complete Chittorgarh guide.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chittorgarh-travel-guide",
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
          headline: "Chittorgarh Fort Guide: History & Tips",
          description:
            "Complete Chittorgarh Fort guide — Vijay Stambh, Kirti Stambh, Rani Padmini's Palace and the legend of jauhar, the Meera Temple, how to reach from Udaipur, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/chittorgarh-travel-guide",
          },
          keywords:
            "Chittorgarh Fort, Rajasthan, Rajput heritage, Vijay Stambh, jauhar, UNESCO hill forts",
          about: {
            "@type": "Place",
            name: "Chittorgarh Fort",
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
                name: "Chittorgarh Fort",
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
    q: "How far is Chittorgarh from Udaipur?",
    a: "Chittorgarh is roughly 115 km from Udaipur, about a 1.5-2 hour drive or a short train journey — one of the most common day trips from the city.",
  },
  {
    q: "Is Chittorgarh Fort a day trip from Udaipur?",
    a: "Yes, most visitors do it as a day trip from Udaipur. Given the fort's scale, a full day is worth allocating rather than rushing through in a couple of hours.",
  },
  {
    q: "What is the story of Rani Padmini and jauhar?",
    a: "Rani Padmini is central to one of Rajput history's most significant legends — during Alauddin Khalji's siege of Chittorgarh, the fort's royal women are said to have committed jauhar (mass self-immolation) rather than be captured, an act of resistance and sacrifice that still defines much of the fort's symbolic weight in Rajasthani identity.",
  },
  {
    q: "How much time is needed to see the fort properly?",
    a: "A full day is realistic given the fort's scale — Vijay Stambh, Kirti Stambh, Rani Padmini's Palace, and the Meera Temple are spread across a large hilltop complex with considerable walking between them.",
  },
  {
    q: "Is hiring a guide worth it at Chittorgarh?",
    a: "Yes — the historical layers here (Rajput dynasties, multiple sieges, the jauhar legend, Meera Bai's associations) are easy to miss without context, and a guide brings the fort's stone structures to life in a way self-guided visits often don't.",
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
  { id: "introduction", title: "One of Asia's Largest Forts", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chittorgarh", level: 2 },
  { id: "things-to-do", title: "Vijay Stambh, Kirti Stambh & Rani Padmini's Palace", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChittorgarhGuidePage() {
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
              src="/images/destinations/hampi/hero.jpg"
              alt="Ancient stone fort ruins and towers, evoking Chittorgarh Fort's Vijay Stambh and Rajput-era architecture"
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
                { label: "Chittorgarh Fort", href: null },
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
                "Chittorgarh Fort",
                "Rajasthan",
                "Rajput Heritage",
                "UNESCO",
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
              Chittorgarh Fort: History, Legend & Complete Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of Asia's largest forts, and the setting for Rajasthan's
              most powerful stories of resistance and sacrifice — Chittorgarh
              is where Rajput history feels most alive.
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
                  text: "Chittorgarh, Rajasthan",
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
                  <h2>One of Asia's Largest Forts</h2>
                  <p>
                    <strong>Chittorgarh Fort</strong> is one of the largest
                    forts in India, and among the largest in Asia — a
                    UNESCO World Heritage Site listed as part of the "Hill
                    Forts of Rajasthan." Sprawling across a hilltop above
                    the town of the same name, it isn't just a monument but
                    the physical setting for some of the most significant
                    stories in Rajput history.
                  </p>
                  <p>
                    Multiple sieges, dramatic acts of resistance, and the
                    legend of Rani Padmini and jauhar are woven into the
                    fort's stones. Towers like Vijay Stambh and Kirti Stambh
                    still stand as testaments to that history, making
                    Chittorgarh less a single attraction and more an
                    immersion into centuries of Rajasthani identity.
                  </p>
                  <p>
                    Roughly 115 km from{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur
                    </Link>
                    , it's one of the most rewarding day trips from the city
                    for anyone interested in Rajasthan's deeper history
                    beyond palaces and lakes.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏰</span> Chittorgarh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Chittorgarh, Rajasthan",
                        },
                        {
                          icon: "🚗",
                          label: "From Udaipur",
                          value: "~115 km (1.5-2 hrs)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Vijay Stambh, Jauhar Legend",
                        },
                        {
                          icon: "🌍",
                          label: "Status",
                          value: "UNESCO World Heritage",
                        },
                        {
                          icon: "⏱️",
                          label: "Time Needed",
                          value: "Full day",
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
                  <h2>Best Time to Visit Chittorgarh</h2>
                  <p>
                    Chittorgarh's hilltop location and lack of much shade
                    across long walking stretches make timing genuinely
                    matter here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather (10-28°C) makes the extensive walking across the fort complex genuinely comfortable.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Temperatures climb well past 40°C, making the largely shadeless fort complex genuinely punishing to explore.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green but humid",
                        text: "Rainfall greens up the surrounding countryside, though heat and humidity remain a factor for a full day of walking.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, clearest skies",
                        text: "The most pleasant stretch for photography and unhurried exploration, with mornings occasionally cool enough for a light jacket.",
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
                    cool, clear conditions that make a full day of walking
                    the fort's towers and palaces genuinely enjoyable.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chittorgarh</h2>
                  <ul>
                    <li>
                      <strong>By road from Udaipur:</strong> Roughly 115 km,
                      about 1.5-2 hours by car — by far the most common way
                      visitors reach Chittorgarh, usually as a day trip.
                    </li>
                    <li>
                      <strong>By rail:</strong> Chittorgarh has its own
                      railway station, connected to Udaipur, Jaipur, and
                      Delhi, making a rail day trip or onward journey
                      practical too.
                    </li>
                    <li>
                      <strong>By road from Jaipur:</strong> Roughly 310 km,
                      a longer 5-6 hour drive, more practical as a stop
                      within a wider Rajasthan circuit than a standalone day
                      trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start early from Udaipur —
                    the fort is large enough that a full day is genuinely
                    worthwhile, and an early start avoids both the midday
                    heat and the busiest crowds.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Vijay Stambh, Kirti Stambh & Rani Padmini's Palace</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Ancient stone tower and fort ruins at Chittorgarh, Rajasthan"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Vijay Stambh (Tower of Victory)</h3>
                  <p>
                    A 9-story tower built in the 15th century, richly
                    carved from top to bottom — one of the fort's most
                    iconic and photographed structures, and a genuine feat
                    of medieval Rajput architecture and engineering.
                  </p>
                  <h3>Kirti Stambh (Tower of Fame)</h3>
                  <p>
                    An older Jain tower within the complex, smaller than
                    Vijay Stambh but historically significant in its own
                    right, reflecting Chittorgarh's layered religious and
                    dynastic history.
                  </p>
                  <h3>Rani Padmini's Palace & the Jauhar Legend</h3>
                  <p>
                    Associated with the legendary Rani Padmini and the
                    practice of jauhar during Alauddin Khalji's siege of the
                    fort — one of the most significant and often-told
                    stories in Rajput history, symbolizing resistance and
                    sacrifice, and central to why Chittorgarh holds such a
                    powerful place in Rajasthani identity.
                  </p>
                  <h3>Meera Temple</h3>
                  <p>
                    A temple within the fort complex associated with the
                    poet-saint Meera Bai, adding a devotional, contemplative
                    counterpoint to the fort's more dramatic military
                    history.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Most visitors treat Chittorgarh as a day trip from
                    Udaipur — dedicated accommodation right at the fort is
                    limited, so plan accordingly.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic guesthouses in Chittorgarh town",
                          "Railway retiring rooms",
                          "Simple lodges near the station",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels in Chittorgarh town",
                          "Heritage-style guesthouses",
                          "Udaipur hotels (day-trip base)",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Heritage resorts near Chittorgarh",
                          "Premium Udaipur hotels (day-trip base)",
                          "Palace-style properties, wider region",
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

                  <blockquote>
                    Basing yourself in Udaipur and day-tripping to
                    Chittorgarh is the most practical plan for most
                    itineraries — the drive is short enough to comfortably
                    fit a full day at the fort.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1 Full Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Arrival & Main Gate to Vijay Stambh",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Udaipur",
                          "Enter through the main gates, drive/walk up",
                          "Explore Vijay Stambh in detail",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Rani Padmini's Palace & Kirti Stambh",
                        color: "bg-sky-600",
                        activities: [
                          "Rani Padmini's Palace and the jauhar history",
                          "Kirti Stambh and surrounding structures",
                          "Lunch break within the fort complex or town",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Meera Temple & Return",
                        color: "bg-forest-600",
                        activities: [
                          "Meera Temple and remaining fort sights",
                          "Sunset views from the fort walls if time allows",
                          "Drive back to Udaipur",
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
                  <h2>Where to Eat at Chittorgarh</h2>
                  <ul>
                    <li>
                      <strong>Local Rajasthani thali:</strong> Simple
                      restaurants in Chittorgarh town serve solid
                      Rajasthani thalis — dal baati churma is a genuine
                      regional specialty worth trying here.
                    </li>
                    <li>
                      <strong>Roadside dhabas:</strong> Along the Udaipur-
                      Chittorgarh road, useful for a quick breakfast or
                      snack stop on the way.
                    </li>
                    <li>
                      <strong>Udaipur restaurants:</strong> If day-tripping,
                      Udaipur's wider restaurant scene offers more variety
                      for dinner after returning.
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
                            "Car hire from Udaipur (round trip)",
                            "₹2,500",
                            "₹3,500",
                            "₹5,000",
                          ],
                          ["Entry fee", "₹40", "₹40", "₹40"],
                          ["Guide (optional)", "₹500", "₹800", "₹1,200"],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
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
                    * Car hire figures are a round-trip total from Udaipur,
                    best split across a group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chittorgarh</h2>
                  <ul>
                    <li>
                      <strong>Wear comfortable walking shoes:</strong> The
                      fort complex is vast, with considerable walking
                      between major sights.
                    </li>
                    <li>
                      <strong>Hire a guide:</strong> The historical layers
                      here are easy to miss without context — a guide
                      brings the stories behind the stones to life.
                    </li>
                    <li>
                      <strong>Start early:</strong> Beat both the heat and
                      the crowds by arriving as early as reasonably
                      possible.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> Much
                      of the fort has little shade across long open
                      stretches.
                    </li>
                    <li>
                      <strong>Allocate a full day:</strong> Rushing through
                      Chittorgarh in a couple of hours means missing much of
                      what makes it significant.
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
                          "Allocate a full day for the fort",
                          "Hire a guide for the historical context",
                          "Start early to beat heat and crowds",
                          "Wear comfortable walking shoes",
                          "Carry water and sun protection",
                          "Visit Vijay Stambh and Rani Padmini's Palace",
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
                          "Rush through in just an hour or two",
                          "Visit during peak summer heat (Apr-Jun)",
                          "Skip the guide if it's your first visit",
                          "Forget water for the largely shadeless walk",
                          "Expect extensive dining options at the fort",
                          "Wear open sandals on the uneven stone paths",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Chittorgarh
                    with{" "}
                    <Link href="/blog/kumbhalgarh-travel-guide">
                      Kumbhalgarh Fort
                    </Link>{" "}
                    for a fuller Rajput-heritage circuit, or base yourself
                    in{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur
                    </Link>{" "}
                    for the wider region. See our full{" "}
                    <Link href="/blog/rajasthan-travel-guide">
                      Rajasthan travel guide
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
                  "Chittorgarh Fort",
                  "Rajasthan",
                  "Rajput Heritage",
                  "UNESCO",
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

              <RelatedPostsGrid currentSlug="chittorgarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chittorgarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
