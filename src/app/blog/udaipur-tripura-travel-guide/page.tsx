// src/app/blog/udaipur-tripura-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Udaipur Tripura Travel Guide: Lakes & Old Capital",
  description:
    "Complete guide to Udaipur, Tripura — the old Manikya capital of Rangamati, its sacred lakes, the Tripura Sundari Temple, Bhuvaneswari Temple, Pilak ruins, how to reach from Agartala, and tips.",
  keywords:
    "Udaipur Tripura, Udaipur Tripura travel guide, Rangamati old capital, Kalyan Sagar lake, Bhuvaneswari Temple, Pilak archaeological site, Udaipur South Tripura, day trip from Agartala",
  openGraph: {
    title: "Udaipur Tripura Travel Guide: Lakes & Old Capital",
    description:
      "Not the Rajasthan lake city — Tripura's own Udaipur was the old Manikya capital, ringed by sacred lakes and home to one of Hinduism's 51 Shakti Peethas.",
    url: "https://club.kudozz.in/blog/udaipur-tripura-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Old temple-town architecture, evoking Udaipur Tripura's history as the former Manikya capital",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Udaipur Tripura Travel Guide: Lakes & Old Capital",
    description:
      "Tripura's own Udaipur — the old Manikya capital, ringed by sacred lakes and home to a major Shakti Peetha.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/udaipur-tripura-travel-guide",
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
          headline: "Udaipur Tripura Travel Guide: Lakes & Old Capital",
          description:
            "Complete guide to Udaipur, Tripura — the old Manikya capital of Rangamati, its sacred lakes, the Tripura Sundari Temple, Bhuvaneswari Temple, Pilak ruins, how to reach from Agartala, and tips.",
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
            "@id": "https://club.kudozz.in/blog/udaipur-tripura-travel-guide",
          },
          keywords:
            "Udaipur Tripura, Rangamati, South Tripura, lakes, old capital, Shakti Peetha",
          about: {
            "@type": "Place",
            name: "Udaipur, Tripura",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tripura",
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
                name: "Tripura",
                item: "https://club.kudozz.in/blog/tripura-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Udaipur, Tripura",
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
    q: "Is Udaipur, Tripura the same as Udaipur, Rajasthan?",
    a: "No — they're entirely different places that happen to share a name. Udaipur, Tripura is a small South Tripura town, the old Manikya capital known for its lakes and the Tripura Sundari Temple. If you're after Rajasthan's lake city, see our separate Udaipur, Rajasthan guide instead.",
  },
  {
    q: "How far is Udaipur from Agartala?",
    a: "Roughly 55 km, about a 1.5–2 hour drive depending on traffic and road conditions.",
  },
  {
    q: "Can Udaipur be visited as a day trip from Agartala?",
    a: "Yes, easily — most visitors day-trip from Agartala rather than staying overnight, since the drive is short and accommodation options in Udaipur itself are limited.",
  },
  {
    q: "What is the best time to visit Udaipur, Tripura?",
    a: "October to March for pleasant weather, or specifically around Diwali if you want to experience the major Tripura Sundari Temple mela — though expect large crowds during that festival period.",
  },
  {
    q: "What are the main things to see in Udaipur?",
    a: "The Tripura Sundari Temple at Matabari, the sacred Kalyan Sagar lake and its protected fish, the Bhuvaneswari Temple, the ruins of the old Rajbari, and — for history enthusiasts with extra time — the Pilak archaeological site further south.",
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
  { id: "introduction", title: "The Old Capital of the Manikyas", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Udaipur", level: 2 },
  { id: "things-to-do", title: "Lakes, Temples & Pilak", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested 1-Day Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function UdaipurTripuraGuidePage() {
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
              alt="Old temple-town architecture, evoking Udaipur Tripura's history as the former Manikya capital"
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
                { label: "Tripura", href: "/blog/tripura-travel-guide" },
                { label: "Udaipur, Tripura", href: null },
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
                "Udaipur Tripura",
                "Tripura Sundari Temple",
                "Tripura",
                "Heritage",
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
              Udaipur, Tripura: Lakes & Old Capital Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Not the Rajasthan lake city — this is Tripura's own Udaipur,
              once the seat of the Manikya kings, ringed by sacred lakes and
              home to a major Shakti Peetha.
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
                  text: "South Tripura, Tripura",
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
                  <h2>The Old Capital of the Manikyas</h2>
                  <p>
                    Not to be confused with{" "}
                    <Link href="/blog/udaipur-city-of-lakes-travel-guide">
                      Udaipur, Rajasthan
                    </Link>
                    , <strong>Udaipur, Tripura</strong> is a quiet South
                    Tripura town roughly 55 km from{" "}
                    <Link href="/blog/agartala-travel-guide">Agartala</Link>.
                    Formerly known as <strong>Rangamati</strong>, it served
                    as the capital of the Tripura kingdom before the seat of
                    power shifted to Agartala in 1760 — a history that still
                    shows in its lakes, temples, and old palace ruins.
                  </p>
                  <p>
                    Locals call it the "Lake City of Tripura" for its
                    cluster of lakes, chief among them{" "}
                    <strong>Kalyan Sagar</strong>, sacred to visitors for the
                    large protected carp that gather to be fed by hand. The
                    town's biggest draw, though, is the{" "}
                    <Link href="/blog/tripura-sundari-temple-travel-guide">
                      Tripura Sundari Temple
                    </Link>{" "}
                    at Matabari, one of Hinduism's 51 Shakti Peethas.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏞️</span> Udaipur, Tripura at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Tripura district",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~55 km (1.5–2 hrs)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏰",
                          label: "Former Name",
                          value: "Rangamati",
                        },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Lakes, Shakti Peetha",
                        },
                        {
                          icon: "🎯",
                          label: "Visit As",
                          value: "Day trip from Agartala",
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
                  <h2>Best Time to Visit Udaipur, Tripura</h2>
                  <p>
                    Weather and festival timing both matter here, especially
                    if the Tripura Sundari Temple is your main draw.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions (15–28°C) make walking around the lakes and temple grounds comfortable.",
                      },
                      {
                        season: "Diwali",
                        emoji: "🪔",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Biggest festival — huge crowds",
                        text: "The Tripura Sundari Temple's Diwali mela is one of Northeast India's largest gatherings — atmospheric, but expect very heavy crowds.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humidity rising",
                        text: "Manageable with an early start, though heat builds steadily toward the monsoon.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Rain can disrupt a relaxed day of lake and temple sightseeing — best avoided if possible.",
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
                    <strong>Our pick:</strong> November to February for a
                    relaxed visit — or Diwali specifically if you want the
                    full festival atmosphere and don't mind the crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Udaipur from Agartala</h2>
                  <ul>
                    <li>
                      <strong>By road:</strong> Roughly 55 km, about a
                      1.5–2 hour drive on generally decent roads — by far
                      the most common way to visit.
                    </li>
                    <li>
                      <strong>By taxi or shared vehicle:</strong> Taxis and
                      shared vehicles run from Agartala to Udaipur regularly,
                      making a day trip straightforward without a private
                      car.
                    </li>
                    <li>
                      <strong>Onward to Pilak:</strong> If extending to the
                      Pilak archaeological site, budget another 35 km or so
                      further south.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Leave Agartala early if
                    you're doing Udaipur as a day trip — it gives you a
                    relaxed morning at the lakes before the temple gets busy.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Lakes, Temples & Pilak</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Old temple-town architecture in South Tripura"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Kalyan Sagar & the Town's Lakes</h3>
                  <p>
                    Kalyan Sagar, beside the Tripura Sundari Temple, is
                    Udaipur's best-known lake — home to protected carp
                    (locally called Rajmachh) that gather at the water's
                    edge to be fed. Jagannath Dighi, Amar Sagar, and Dhani
                    Sagar add further quiet, photogenic stops around town.
                  </p>
                  <h3>Tripura Sundari Temple</h3>
                  <p>
                    One of the 51 Shakti Peethas of Hindu mythology, this is
                    Udaipur's defining landmark. See our dedicated{" "}
                    <Link href="/blog/tripura-sundari-temple-travel-guide">
                      Tripura Sundari Temple guide
                    </Link>{" "}
                    for its history, architecture, and visiting tips.
                  </p>
                  <h3>Bhuvaneswari Temple & the Old Rajbari</h3>
                  <p>
                    The Bhuvaneswari Temple and the ruins of the old Rajbari
                    (palace) offer a quieter, less-visited window into
                    Udaipur's centuries as the Manikya capital.
                  </p>
                  <h3>Pilak Archaeological Site (Extension)</h3>
                  <p>
                    Roughly 35 km further south, Pilak is an important
                    archaeological site with 8th–9th century Buddhist and
                    Hindu terracotta plaques and stone sculptures — a
                    worthwhile detour for history enthusiasts with a full
                    day to spare.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation in Udaipur itself is modest — most
                    visitors day-trip from{" "}
                    <Link href="/blog/agartala-travel-guide">Agartala</Link>,
                    which has by far the wider range of hotels. If you do
                    want to stay overnight in Udaipur:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Government tourist lodges",
                          "Basic guesthouses near the temple",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Small local hotels in town",
                          "Tourism department properties",
                        ],
                      },
                      {
                        tier: "Best Option",
                        icon: "🚗",
                        range: "Day trip",
                        picks: [
                          "Stay in Agartala, drive out early",
                          "Wider choice, better amenities",
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
                  <h2>Suggested 1-Day Visit Plan from Agartala</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Drive & Lakes",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Agartala early (~1.5–2 hr drive)",
                          "Visit Kalyan Sagar and feed the protected fish",
                          "Walk around Jagannath Dighi and Amar Sagar",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Temple & Old Town",
                        color: "bg-sky-600",
                        activities: [
                          "Darshan at Tripura Sundari Temple, Matabari",
                          "Bhuvaneswari Temple and old Rajbari ruins",
                          "Return to Agartala by evening",
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
                    * With a second day, extend south to the Pilak
                    archaeological site for a fuller South Tripura history
                    trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Udaipur</h2>
                  <ul>
                    <li>
                      <strong>Temple prasad stalls:</strong> Simple prasad
                      and snack stalls cluster near the Tripura Sundari
                      Temple complex.
                    </li>
                    <li>
                      <strong>Local eateries in town:</strong> Small,
                      home-style Bengali restaurants serve straightforward
                      thalis and fish dishes.
                    </li>
                    <li>
                      <strong>Better options in Agartala:</strong> If
                      day-tripping, plan a proper meal before leaving or
                      after returning to Agartala, where the choice is wider.
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
                          {["Expense", "Amount (per person)"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Car hire from Agartala (round trip)", "₹2,500 – ₹4,000"],
                          ["Shared taxi (one way)", "₹150 – ₹300"],
                          ["Food", "₹300 – ₹700"],
                          ["Temple donations / prasad", "₹50 – ₹200"],
                        ].map(([exp, amt], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {amt}
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
                    * Car hire figure is best split across a group; excludes
                    Pilak extension.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Udaipur, Tripura</h2>
                  <ul>
                    <li>
                      <strong>Start early if it's a day trip:</strong> Gives
                      you a relaxed pace at the lakes before the temple
                      crowds build.
                    </li>
                    <li>
                      <strong>Don't confuse it with Udaipur, Rajasthan:</strong>{" "}
                      Double-check bus/taxi bookings and directions —
                      "Udaipur" alone is ambiguous in India.
                    </li>
                    <li>
                      <strong>Book ahead for Diwali:</strong> If visiting
                      during the temple's big Diwali mela, expect crowds and
                      plan transport and timing accordingly.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is limited
                      outside Agartala.
                    </li>
                    <li>
                      <strong>Dress modestly for temple visits:</strong>{" "}
                      Standard etiquette applies at Tripura Sundari Temple
                      and Bhuvaneswari Temple.
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
                          "Start early for a relaxed day trip from Agartala",
                          "Feed the protected fish at Kalyan Sagar",
                          "Dress modestly for temple visits",
                          "Carry enough cash for the whole day",
                          "Extend to Pilak if you have a second day",
                          "Confirm you're booking the right 'Udaipur'",
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
                          "Expect Rajasthan's Udaipur-level tourist infrastructure",
                          "Rely on cards for payments",
                          "Arrive at the temple mid-afternoon on Diwali expecting short queues",
                          "Skip an early start if doing it as a day trip",
                          "Expect wide accommodation choice within the town",
                          "Forget to double-check directions given the shared name",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Udaipur with a
                    deep dive into the{" "}
                    <Link href="/blog/tripura-sundari-temple-travel-guide">
                      Tripura Sundari Temple
                    </Link>{" "}
                    , or head back via{" "}
                    <Link href="/blog/sepahijala-travel-guide">
                      Sepahijala Wildlife Sanctuary
                    </Link>{" "}
                    for a fuller day out of Agartala. See our full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
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
                  "Udaipur Tripura",
                  "Tripura Sundari Temple",
                  "Tripura",
                  "Heritage",
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

              <RelatedPostsGrid currentSlug="udaipur-tripura-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="udaipur-tripura-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
