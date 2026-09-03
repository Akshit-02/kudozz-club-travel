// src/app/blog/kanyakumari-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kanyakumari Travel Guide: Sunrise, Sunset & Tips",
  description:
    "Complete Kanyakumari guide — the Vivekananda Rock Memorial, the Thiruvalluvar Statue, sunrise and sunset viewing, how to reach, and a full visit plan for India's southernmost tip.",
  keywords:
    "Kanyakumari travel guide, Vivekananda Rock Memorial, Cape Comorin, Thiruvalluvar Statue, Kanyakumari sunrise sunset, Kanyakumari Amman Temple, how to reach Kanyakumari, southernmost tip of India",
  openGraph: {
    title: "Kanyakumari Travel Guide: Sunrise, Sunset & Tips",
    description:
      "Where the Bay of Bengal, Arabian Sea, and Indian Ocean meet — the complete guide to India's southernmost point.",
    url: "https://club.kudozz.in/blog/kanyakumari-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/gokarna/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Coastal rocks and open sea at sunset, evoking Kanyakumari's location at the southern tip of India",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanyakumari Travel Guide: Sunrise, Sunset & Tips",
    description:
      "Three seas meeting at India's southern tip — the complete Kanyakumari guide to the Rock Memorial, the statue, and the best views.",
    images: ["/images/destinations/gokarna/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kanyakumari-travel-guide",
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
          headline: "Kanyakumari Travel Guide: Sunrise, Sunset & Tips",
          description:
            "Complete Kanyakumari guide — the Vivekananda Rock Memorial, the Thiruvalluvar Statue, sunrise and sunset viewing, how to reach, and a full visit plan for India's southernmost tip.",
          image: "https://club.kudozz.in/images/destinations/gokarna/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kanyakumari-travel-guide",
          },
          keywords:
            "Kanyakumari, Cape Comorin, Tamil Nadu, Vivekananda Rock Memorial, Thiruvalluvar Statue, sunrise sunset point",
          about: {
            "@type": "Place",
            name: "Kanyakumari",
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
                name: "Kanyakumari",
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
    q: "Can you really see both sunrise and sunset at Kanyakumari?",
    a: "Kanyakumari's fame rests on being one of the few places in India where both sunrise and sunset over water can be viewed from roughly the same coastline — though the exact viewing experience depends on the season and how clear the skies are on the day, so treat it as the town's signature draw rather than a guaranteed spectacle every visit.",
  },
  {
    q: "How do I reach the Vivekananda Rock Memorial?",
    a: "By a short government-run ferry from the mainland jetty, which typically operates during daylight hours and can pause for weather — check current ferry timings on arrival rather than assuming a fixed schedule.",
  },
  {
    q: "What is the best time for clear sunrise/sunset views?",
    a: "October to February generally offers the clearest skies. Haze and cloud cover can obscure the horizon at other times of year, so check the local forecast if the view is your main priority.",
  },
  {
    q: "How far is Kanyakumari from Madurai?",
    a: "Roughly 240 km, about a 4-5 hour drive, making it a comfortable extension of a Madurai or Rameswaram-based Deep South Tamil Nadu trip.",
  },
  {
    q: "Is Kanyakumari worth an overnight stay?",
    a: "Yes — arriving the evening before lets you catch sunset on arrival and sunrise the next morning without a rushed same-day dash, which is the more common and more rewarding way to experience the town.",
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
  { id: "introduction", title: "Where Three Seas Meet", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kanyakumari", level: 2 },
  { id: "things-to-do", title: "Rock Memorial, Statue & Temple", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KanyakumariGuidePage() {
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
              src="/images/destinations/gokarna/hero.jpg"
              alt="Coastal rocks and open sea at sunset, evoking Kanyakumari's location at the southern tip of India"
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
                { label: "Kanyakumari", href: null },
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
                "Kanyakumari",
                "Vivekananda Rock Memorial",
                "Tamil Nadu",
                "Cape Comorin",
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
              Kanyakumari: India's Southernmost Tip
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Three seas meet at this rocky point, and on a clear day you can
              watch the sun rise and set over water from nearly the same
              stretch of coastline — India runs out of land here.
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
                  text: "Kanyakumari, Tamil Nadu",
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
                  <h2>Where Three Seas Meet</h2>
                  <p>
                    <strong>Kanyakumari</strong> (historically Cape Comorin)
                    marks the southernmost tip of the Indian mainland, at the
                    point where the Bay of Bengal, the Arabian Sea, and the
                    Indian Ocean are traditionally said to meet — a genuinely
                    rare geographic position that has made it one of the
                    country's most symbolically significant coastal towns.
                  </p>
                  <p>
                    Its fame rests largely on being one of the very few
                    places in India where both sunrise and sunset over water
                    can be watched from roughly the same stretch of
                    coastline, drawing visitors to its rocky shorefront at
                    both ends of the day.
                  </p>
                  <p>
                    Just offshore, the <strong>Vivekananda Rock
                    Memorial</strong> sits on its own islet, reached by a
                    short ferry — alongside the towering{" "}
                    <strong>Thiruvalluvar Statue</strong> and the town's own{" "}
                    <strong>Kanyakumari Amman Temple</strong>, it makes for a
                    compact but memorable stop at the very edge of the
                    country.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌅</span> Kanyakumari at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Tamil Nadu" },
                        {
                          icon: "🧭",
                          label: "Known For",
                          value: "Southernmost tip of India",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🗿",
                          label: "Landmark",
                          value: "Vivekananda Rock Memorial",
                        },
                        {
                          icon: "🌊",
                          label: "Feature",
                          value: "Three-sea confluence",
                        },
                        {
                          icon: "🚉",
                          label: "From Madurai",
                          value: "~240 km",
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
                  <h2>Best Time to Visit Kanyakumari</h2>
                  <p>
                    Weather clarity matters more here than almost anywhere
                    else on this list — the whole point of a visit is the
                    view, and haze can flatten it.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "The clearest skies of the year, giving the best odds of a genuinely sharp sunrise or sunset over open water.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, hazier",
                        text: "Temperatures climb and coastal haze can soften the horizon view, though it's still a workable time to visit.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Southwest monsoon",
                        text: "Rain and rougher seas can disrupt the Rock Memorial ferry and reduce visibility for sunrise/sunset viewing.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎆",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak season",
                        text: "The clearest window coincides with peak domestic tourist season — expect larger crowds at the main viewpoints.",
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
                    <strong>Our pick:</strong> October to February — the
                    clearest skies for the sunrise and sunset views that are
                    the whole reason to come here.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kanyakumari</h2>
                  <ul>
                    <li>
                      <strong>By Rail:</strong> Kanyakumari is the southern
                      terminus of the Indian railway network, connected to{" "}
                      <Link href="/blog/madurai-travel-guide">Madurai</Link>,
                      Chennai, and other major cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> Roughly 240 km from Madurai
                      (~4-5 hr drive), and around 90 km from Trivandrum in
                      Kerala.
                    </li>
                    <li>
                      <strong>By Air:</strong> The nearest airport is
                      Trivandrum International Airport, roughly 90 km away.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrive the evening before
                    your planned sunrise viewing — a same-day dash risks
                    missing it, while an overnight stay lets you catch both
                    sunset on arrival and sunrise the next morning.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Rock Memorial, Statue & Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/gokarna/hero.jpg"
                      alt="Rocky coastline at sunset, evoking Kanyakumari's shoreline near the Vivekananda Rock Memorial"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Vivekananda Rock Memorial</h3>
                  <p>
                    Built on a rocky islet where Swami Vivekananda is said to
                    have meditated, reached by a short ferry from the
                    mainland jetty — the crossing itself, with the open sea
                    and coastline views, is part of the experience.
                  </p>
                  <h3>Thiruvalluvar Statue</h3>
                  <p>
                    A towering stone statue of the Tamil poet-philosopher
                    Thiruvalluvar, standing on a separate islet close to the
                    Rock Memorial — visible from the mainland shore and often
                    combined with the same ferry trip.
                  </p>
                  <h3>Kanyakumari Amman Temple</h3>
                  <p>
                    An important Shakti temple right in the town centre,
                    dedicated to the goddess Kanyakumari — a quieter,
                    devotional counterpoint to the more touristed shoreline
                    landmarks.
                  </p>
                  <h3>Gandhi Memorial Mandapam</h3>
                  <p>
                    Commemorates the site where Mahatma Gandhi's ashes were
                    kept before immersion — a simple, contemplative stop
                    worth folding into a shoreline walk.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kanyakumari</h2>
                  <p>
                    Accommodation is concentrated near the shorefront, with
                    sea-facing rooms in particular demand for sunrise/sunset
                    views.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Budget lodges near the shore",
                          "Guesthouses, town centre",
                          "TTDC hotel, Kanyakumari",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Sea-view business hotels",
                          "Chain hotels near the shorefront",
                          "Boutique guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌊",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Premium sea-facing hotels",
                          "Resort-style properties",
                          "Rooftop-view boutique stays",
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
                  <h2>Suggested Visit Plan (1 Night, 2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Sunset",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check into a sea-facing room",
                          "Evening: sunset from the shorefront",
                          "Kanyakumari Amman Temple",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sunrise & Rock Memorial",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning sunrise from the shore",
                          "Ferry to the Vivekananda Rock Memorial and Thiruvalluvar Statue",
                          "Gandhi Memorial Mandapam before departure",
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
                    * Combine with{" "}
                    <Link href="/blog/rameswaram-travel-guide">
                      Rameswaram
                    </Link>{" "}
                    and <Link href="/blog/madurai-travel-guide">Madurai</Link>{" "}
                    for a complete Deep South Tamil Nadu circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Kanyakumari</h2>
                  <ul>
                    <li>
                      <strong>Shorefront seafood:</strong> Fresh, simply
                      cooked seafood is widely available given the town's
                      fishing-harbour character.
                    </li>
                    <li>
                      <strong>South Indian vegetarian thalis:</strong>{" "}
                      Reliable and affordable, found throughout the town
                      centre.
                    </li>
                    <li>
                      <strong>Coastal Tamil-Kerala blend:</strong> Being so
                      close to the Kerala border, the food scene here carries
                      a noticeable Kerala influence alongside classic Tamil
                      cooking.
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
                          ["Accommodation/night", "₹1,000", "₹3,000", "₹7,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Rock Memorial ferry", "₹40", "₹40", "₹40"],
                          ["Local transport/day", "₹150", "₹400", "₹900"],
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
                    * Figures are per person, per day, excluding travel into
                    Kanyakumari.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kanyakumari</h2>
                  <ul>
                    <li>
                      <strong>Check ferry timings for the Rock
                      Memorial:</strong> Sailings can pause in rough weather
                      — confirm the current schedule on arrival.
                    </li>
                    <li>
                      <strong>Arrive early for sunrise:</strong> The best
                      shorefront viewing spots fill up, especially in peak
                      season.
                    </li>
                    <li>
                      <strong>Book a sea-facing room if the view
                      matters:</strong> Non-view rooms are noticeably
                      cheaper but miss the whole point of a Kanyakumari
                      stay.
                    </li>
                    <li>
                      <strong>Combine with Rameswaram or Madurai:</strong>{" "}
                      Both make natural additions to a longer Deep South
                      Tamil Nadu trip.
                    </li>
                    <li>
                      <strong>Manage expectations on clarity:</strong> Haze
                      can soften the sunrise/sunset view — it's not
                      guaranteed to be dramatic every single day.
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
                          "Stay overnight to catch both sunset and sunrise",
                          "Check the Rock Memorial ferry schedule on arrival",
                          "Book a sea-facing room if the view matters",
                          "Visit Oct-Feb for the clearest skies",
                          "Combine with Rameswaram or Madurai",
                          "Arrive early for the best shorefront spot",
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
                          "Rush a same-day dash without an overnight stay",
                          "Expect the ferry to run in rough weather",
                          "Assume every day gives a dramatic sunset",
                          "Skip booking ahead in peak Dec-Jan season",
                          "Arrive late and miss the best viewing spots",
                          "Ignore the monsoon window if planning June-Sep",
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
                    <strong>🗺️ Extend the trip:</strong> Kanyakumari pairs
                    naturally with{" "}
                    <Link href="/blog/rameswaram-travel-guide">
                      Rameswaram
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/madurai-travel-guide">Madurai</Link> for
                    a complete Deep South circuit. See our{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
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
                  "Kanyakumari",
                  "Vivekananda Rock Memorial",
                  "Tamil Nadu",
                  "Cape Comorin",
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

              <RelatedPostsGrid currentSlug="kanyakumari-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kanyakumari-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
