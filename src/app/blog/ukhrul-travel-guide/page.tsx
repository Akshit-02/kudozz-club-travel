// src/app/blog/ukhrul-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ukhrul Travel Guide: Tangkhul Naga Hills & Shirui Lily Gateway",
  description:
    "Complete Ukhrul travel guide — the Tangkhul Naga hill town near the Shirui Lily's only wild habitat, Khangkhui Lime Cave, how to reach via NH150, best time to visit, and full trip planning.",
  keywords:
    "Ukhrul travel guide, Ukhrul Manipur, Tangkhul Naga, Shirui Lily Festival, Khangkhui Lime Cave, Ukhrul best time to visit, NH150 Manipur, Manipur hill towns, Inner Line Permit Manipur",
  openGraph: {
    title: "Ukhrul Travel Guide: Tangkhul Naga Hills & Shirui Lily Gateway",
    description:
      "Pine-covered hills, a distinct Tangkhul Naga culture, and the gateway town to the rare Shirui Lily — the complete guide to Ukhrul, Manipur.",
    url: "https://club.kudozz.in/blog/ukhrul-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pine-clad hills of a Northeast Indian hill town, evoking Ukhrul's forested ridges in Manipur",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ukhrul Travel Guide: Tangkhul Naga Hills & Shirui Lily Gateway",
    description:
      "Pine-covered hills and a distinct Tangkhul Naga culture — the complete guide to Ukhrul, Manipur.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ukhrul-travel-guide",
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
          headline: "Ukhrul Travel Guide: Tangkhul Naga Hills & Shirui Lily Gateway",
          description:
            "Complete Ukhrul travel guide — the Tangkhul Naga hill town near the Shirui Lily's only wild habitat, Khangkhui Lime Cave, and best time to visit.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/ukhrul-travel-guide",
          },
          keywords: "Ukhrul, Manipur, Tangkhul Naga, Shirui Lily, Khangkhui Cave",
          about: {
            "@type": "Place",
            name: "Ukhrul",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Manipur",
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
                name: "Manipur",
                item: "https://club.kudozz.in/blog/manipur-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ukhrul",
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
    q: "How far is Ukhrul from Imphal?",
    a: "Roughly 84 km via NH150, a scenic but winding hill road. Allow around 3 hours or more depending on road conditions and stops along the way.",
  },
  {
    q: "When is the best time to visit Ukhrul?",
    a: "April to May, timed around the Shirui Lily bloom and the Shirui Lily Festival held in Ukhrul with Manipur Tourism support. October to March also offers pleasant, clear hill weather if you're not chasing the bloom.",
  },
  {
    q: "Do I need a permit to visit Ukhrul?",
    a: "Manipur has required an Inner Line Permit (ILP) for visitors from outside the state since December 2019. Check the current application process before travel, as requirements can be updated.",
  },
  {
    q: "What is Ukhrul known for?",
    a: "Ukhrul is the headquarters of Ukhrul district and the homeland of the Tangkhul Naga people, who have a distinct language and culture from the Meitei-majority Imphal valley. It's also the gateway town for the Shirui Lily, a flower found nowhere else on Earth.",
  },
  {
    q: "Is Ukhrul safe to visit?",
    a: "Parts of Manipur have periodically seen security-related travel advisories, so check current conditions before finalizing plans, travel via well-established routes, and consider a local guide or operator for these hill districts.",
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
  { id: "introduction", title: "The Tangkhul Naga Hill Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ukhrul", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Tangkhul Food", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function UkhrulGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Pine-clad hills of a Northeast Indian hill town, evoking Ukhrul's forested ridges in Manipur"
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
                { label: "Manipur", href: "/blog/manipur-travel-guide" },
                { label: "Ukhrul", href: null },
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
              {["Ukhrul", "Manipur", "Tangkhul Naga", "Off-beat"].map(
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
              Ukhrul: Tangkhul Naga Hills & Shirui Lily Gateway
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Pine-covered ridges, a distinct Tangkhul Naga culture, and the
              gateway town to a flower found nowhere else on Earth — Ukhrul
              is one of Manipur's most rewarding hill districts.
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
                  text: "Ukhrul, Manipur",
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
                  <h2>The Tangkhul Naga Hill Town</h2>
                  <p>
                    <strong>Ukhrul</strong> is the headquarters of Ukhrul
                    district in{" "}
                    <Link href="/blog/manipur-travel-guide">Manipur</Link>,
                    and the homeland of the <strong>Tangkhul Naga</strong>{" "}
                    people, whose language and culture are distinct from the
                    Meitei-majority Imphal valley below. Set among
                    pine-covered hills at a cool, comfortable altitude, it's
                    a genuinely different Manipur from the lake-and-valley
                    scenery most visitors associate with the state.
                  </p>
                  <p>
                    Ukhrul's biggest claim to fame is as the gateway town for{" "}
                    <Link href="/blog/shirui-hills-travel-guide">
                      Shirui Hills
                    </Link>
                    , home to the rare Shirui Lily — a flower that grows wild
                    nowhere else on the planet. Every May, the town comes
                    alive for the Shirui Lily Festival, organized with
                    Manipur Tourism support.
                  </p>
                  <p>
                    Beyond the lily connection, Ukhrul has its own quieter
                    attractions: a limestone cave with a wartime history,
                    handwoven Tangkhul textiles, and a food culture worth
                    exploring on its own terms.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Ukhrul at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Ukhrul district, Manipur",
                        },
                        {
                          icon: "🛣️",
                          label: "From Imphal",
                          value: "~84 km via NH150",
                        },
                        {
                          icon: "🎭",
                          label: "Community",
                          value: "Tangkhul Naga",
                        },
                        {
                          icon: "🌸",
                          label: "Known For",
                          value: "Gateway to Shirui Lily",
                        },
                        {
                          icon: "🕳️",
                          label: "Nearby Sight",
                          value: "Khangkhui Lime Cave",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Apr – May, Oct – Mar",
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
                  <h2>Best Time to Visit Ukhrul</h2>
                  <p>
                    Ukhrul's calendar really has two distinct highlights —
                    one tied to a single flower's bloom window, the other
                    simply about comfortable hill weather.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – May",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Shirui Lily Festival — our pick",
                        text: "The Shirui Lily blooms in this window, and Ukhrul hosts the annual Shirui Lily Festival with cultural programs alongside the flower viewing.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear, pleasant hill weather",
                        text: "Cool and generally clear, with good visibility across the pine-covered hills — a comfortable window if the lily bloom isn't the priority.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Heavier rain makes the winding NH150 approach slower and less comfortable — not the ideal window for a first visit.",
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
                    <strong>Our pick:</strong> Late April into May, timed
                    around the Shirui Lily Festival — combine it with
                    October–March if you'd rather prioritize clear hill
                    weather over the bloom.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ukhrul</h2>
                  <ul>
                    <li>
                      <strong>From Imphal:</strong> Ukhrul is roughly 84 km
                      from{" "}
                      <Link href="/blog/manipur-travel-guide">Imphal</Link>{" "}
                      via <strong>NH150</strong>, a scenic but genuinely
                      winding hill road — most visitors hire a car with
                      driver rather than attempt it in a rented self-drive
                      vehicle.
                    </li>
                    <li>
                      <strong>Nearest airport:</strong> Imphal Airport (IMF)
                      is the practical gateway for the wider region; there's
                      no airstrip closer to Ukhrul itself.
                    </li>
                    <li>
                      <strong>Shared transport:</strong> Shared sumos and
                      taxis run between Imphal and Ukhrul, though a private
                      vehicle gives far more flexibility for side trips to
                      Shirui Hills and Khangkhui Cave.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Permit note:</strong> Manipur has required an
                    Inner Line Permit (ILP) for visitors from outside the
                    state since December 2019. Check the current application
                    process well ahead of travel.
                  </div>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start the drive from Imphal
                    early in the day — NH150's winding stretches are far more
                    comfortable in daylight, and it leaves time to settle in
                    before exploring Ukhrul town.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Ukhrul</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Pine forest hillside near Ukhrul, Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Shirui Lily Festival</h3>
                  <p>
                    Held usually in May and centered around Ukhrul town, the
                    festival combines Tangkhul cultural performances with
                    organized viewing of the{" "}
                    <Link href="/blog/shirui-hills-travel-guide">
                      Shirui Lily
                    </Link>{" "}
                    in its native habitat on the nearby hills — Manipur
                    Tourism's flagship event for the district.
                  </p>
                  <h3>Khangkhui Lime Cave</h3>
                  <p>
                    A natural limestone cave near Ukhrul, notable for having
                    been used as a shelter by locals during WWII-era bombing.
                    It's a minor local attraction today, worth a stop if
                    you're spending an extra day around town.
                  </p>
                  <h3>Tangkhul Textiles & Crafts</h3>
                  <p>
                    Handwoven shawls and textiles are a distinct Tangkhul
                    craft tradition — local markets in Ukhrul are the place
                    to look for them, and buying directly supports local
                    weavers.
                  </p>
                  <h3>Day Trip to Shirui Hills</h3>
                  <p>
                    Ukhrul is the standard base for trekking up to{" "}
                    <Link href="/blog/shirui-hills-travel-guide">
                      Shirui Hills
                    </Link>{" "}
                    to see the lily and the summit views — see our dedicated
                    guide for trek details and timing.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation in Ukhrul is modest compared to Imphal —
                    expect simple guesthouses and government-run circuit
                    houses rather than branded hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,200/night",
                        picks: [
                          "Local guesthouses",
                          "Homestays",
                          "Basic lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Circuit house (where available)",
                          "Better-appointed guesthouses",
                        ],
                      },
                      {
                        tier: "Festival Season",
                        icon: "🎪",
                        range: "Book well ahead",
                        picks: [
                          "Rooms fill up fast in May",
                          "Consider a homestay via a local contact",
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
                    Book ahead if visiting during the Shirui Lily Festival in
                    May — Ukhrul's limited rooms fill up quickly during this
                    window.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2–3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Imphal to Ukhrul",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Imphal via NH150",
                          "Check in and rest after the winding drive",
                          "Evening walk around Ukhrul town",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Shirui Hills Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Early start for the trek up to Shirui Hills",
                          "Lily viewing (if in season) and summit views",
                          "Return to Ukhrul by evening",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Khangkhui Cave & Return",
                        color: "bg-forest-600",
                        activities: [
                          "Visit Khangkhui Lime Cave",
                          "Browse local textile markets",
                          "Drive back to Imphal",
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
                  <h2>Tangkhul Food in Ukhrul</h2>
                  <ul>
                    <li>
                      <strong>Distinct Tangkhul cuisine:</strong> Ukhrul's
                      food culture is noticeably different from the
                      Meitei-influenced dishes of the Imphal valley — look
                      for it at local eateries rather than expecting valley
                      staples.
                    </li>
                    <li>
                      <strong>Smoked and fermented preparations:</strong>{" "}
                      As with much of the Naga hill country, smoked meats
                      and fermented ingredients feature heavily.
                    </li>
                    <li>
                      <strong>Local markets:</strong> Ukhrul's markets are
                      worth browsing for seasonal produce and a sense of
                      everyday Tangkhul life.
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
                          ["Accommodation/night", "₹600", "₹1,500", "₹2,500"],
                          ["Car with driver, Imphal-Ukhrul", "₹3,500", "₹4,500", "₹6,000"],
                          ["Local guide (per day)", "₹1,000", "₹1,800", "₹3,000"],
                          ["Food/day", "₹350", "₹700", "₹1,200"],
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
                    * Excludes flights to Imphal. A private vehicle is
                    genuinely worth the cost given NH150's winding, hilly
                    terrain and limited public transport.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ukhrul</h2>
                  <ul>
                    <li>
                      <strong>Arrange your Inner Line Permit ahead of time:</strong>{" "}
                      Manipur has required an ILP for visitors from outside
                      the state since December 2019 — check the current
                      process before finalizing plans.
                    </li>
                    <li>
                      <strong>Check current travel advisories:</strong>{" "}
                      Parts of Manipur have periodically seen
                      security-related travel advisories, so check current
                      conditions before finalizing plans, travel via
                      well-established routes, and consider a local guide or
                      operator in these hill districts.
                    </li>
                    <li>
                      <strong>Book ahead for the Shirui Lily Festival:</strong>{" "}
                      Rooms are limited and fill up quickly during the May
                      window.
                    </li>
                    <li>
                      <strong>Carry warm layers:</strong> Ukhrul's altitude
                      keeps evenings cool even outside the winter months.
                    </li>
                    <li>
                      <strong>Keep Tharon Cave as a separate trip:</strong>{" "}
                      It sits far to the west in the Tamenglong–Noney hill
                      country and isn't easily combined with an Ukhrul or
                      Shirui Hills visit — see our{" "}
                      <Link href="/blog/tharon-cave-travel-guide">
                        Tharon Cave guide
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/tamenglong-travel-guide">
                        Tamenglong travel guide
                      </Link>{" "}
                      if that's on a separate leg of your itinerary.
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
                          "Arrange your Inner Line Permit before travel",
                          "Check current advisories before finalizing plans",
                          "Book accommodation early for festival season",
                          "Hire a car with driver for the NH150 drive",
                          "Try genuine Tangkhul dishes at local eateries",
                          "Buy handwoven textiles directly from local weavers",
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
                          "Travel without confirming ILP requirements",
                          "Attempt NH150 after dark on a first visit",
                          "Expect branded hotel chains in Ukhrul town",
                          "Skip warm layers, even outside winter",
                          "Try to combine Ukhrul with Tharon Cave in one short trip",
                          "Show up during festival season without a booking",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Ukhrul with{" "}
                    <Link href="/blog/shirui-hills-travel-guide">
                      Shirui Hills
                    </Link>{" "}
                    on the same itinerary, and see our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
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
                {["Manipur", "Ukhrul", "Tangkhul Naga"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="ukhrul-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ukhrul-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
