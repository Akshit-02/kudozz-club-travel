// src/app/blog/koraput-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Koraput Travel Guide: Tribal Culture & Coffee",
  description:
    "Complete Koraput guide — Eastern Ghats scenery, coffee plantations, Bonda and Gadaba tribal culture, weekly tribal markets, how to reach, and a full visit plan.",
  keywords:
    "Koraput travel guide, Koraput tribal culture, Bonda tribe, Gadaba tribe, Koraput coffee plantation, Eastern Ghats Odisha, tribal haat market, how to reach Koraput, Odisha tribal tourism",
  openGraph: {
    title: "Koraput Travel Guide: Tribal Culture & Coffee",
    description:
      "Coffee plantations, Eastern Ghats scenery, and some of India's most distinct tribal communities — the complete guide to Koraput.",
    url: "https://club.kudozz.in/blog/koraput-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Coffee plantation hillside, evoking Koraput's Eastern Ghats coffee-growing landscape in southern Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Koraput Travel Guide: Tribal Culture & Coffee",
    description:
      "Eastern Ghats scenery, coffee plantations, and tribal markets — the complete guide to southern Odisha's Koraput district.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/koraput-travel-guide",
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
          headline: "Koraput Travel Guide: Tribal Culture & Coffee",
          description:
            "Complete Koraput guide — Eastern Ghats scenery, coffee plantations, Bonda and Gadaba tribal culture, weekly tribal markets, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/koraput-travel-guide",
          },
          keywords:
            "Koraput, Odisha, tribal culture, Bonda, Gadaba, Eastern Ghats, coffee",
          about: {
            "@type": "Place",
            name: "Koraput",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha",
                item: "https://club.kudozz.in/blog/odisha-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Koraput",
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
    q: "How far is Koraput from Bhubaneswar?",
    a: "It's a long journey given Koraput's southern, interior location — treat it as a multi-day regional trip rather than a quick add-on to a Bhubaneswar-based itinerary.",
  },
  {
    q: "What tribal communities live in the Koraput region?",
    a: "Koraput district is home to numerous tribal communities, including the Bonda and Gadaba, among India's most culturally distinct indigenous groups, alongside several others across the wider region.",
  },
  {
    q: "Is it appropriate to visit tribal markets as a tourist?",
    a: "Yes, weekly tribal haats (markets) are open, functioning community spaces, but visit with genuine respect — they exist for local trade, not tourism, so ask before photographing people and follow local guidance on etiquette.",
  },
  {
    q: "How does Koraput connect to Deomali and Jeypore?",
    a: "Koraput town is the practical base for both — Deomali, Odisha's highest peak, and Jeypore, a historic tribal-region gateway town, are both a manageable drive away, making the three a natural regional circuit.",
  },
  {
    q: "What is the best time to visit Koraput?",
    a: "October to February offers the most comfortable weather for exploring the Eastern Ghats landscape and visiting tribal markets, avoiding both peak summer heat and monsoon rains.",
  },
  {
    q: "Is coffee really grown in Koraput?",
    a: "Yes — Koraput's Eastern Ghats terrain supports coffee plantations, an unusual and distinctive feature for Odisha, more commonly associated with South India's Western Ghats.",
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
  { id: "introduction", title: "Southern Odisha's Tribal Heartland", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Koraput", level: 2 },
  { id: "things-to-do", title: "Coffee, Tribal Markets & Scenery", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KoraputGuidePage() {
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
              src="/images/destinations/coorg/coorg.jpg"
              alt="Coffee plantation hillside, evoking Koraput's Eastern Ghats coffee-growing landscape in southern Odisha"
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
                { label: "Odisha", href: "/blog/odisha-travel-guide" },
                { label: "Koraput", href: null },
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
                "Koraput",
                "Tribal Culture",
                "Eastern Ghats",
                "Odisha",
                "Off-beat",
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
              Koraput: Tribal Culture, Coffee & the Eastern Ghats
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Coffee plantations climbing the Eastern Ghats, weekly markets
              where some of India's most distinct tribal communities gather,
              and a landscape most visitors to Odisha never see.
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
                  text: "Koraput district, Odisha",
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
                  <h2>Southern Odisha's Tribal Heartland</h2>
                  <p>
                    <strong>Koraput</strong>, a district in southern{" "}
                    <Link href="/blog/odisha-travel-guide">Odisha</Link>, sits
                    within the scenic Eastern Ghats — hills, forest, and a
                    genuinely surprising feature for the state: coffee
                    plantations, more commonly associated with South India's
                    Western Ghats.
                  </p>
                  <p>
                    The district is home to numerous tribal communities,
                    including the Bonda and Gadaba, among India's most
                    culturally distinct indigenous groups. Weekly tribal
                    markets (haats), where local communities gather to
                    trade, offer a genuine cultural experience for
                    interested visitors — though they're functioning
                    community spaces first, and should be approached with
                    respect rather than as a tourist show.
                  </p>
                  <p>
                    Koraput town also serves as the practical gateway to{" "}
                    <Link href="/blog/deomali-travel-guide">Deomali</Link>,
                    Odisha's highest peak, and{" "}
                    <Link href="/blog/jeypore-travel-guide">Jeypore</Link>, a
                    historic tribal-region town — the three make a natural
                    southern Odisha circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>☕</span> Koraput at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Southern Odisha, Eastern Ghats",
                        },
                        {
                          icon: "🚗",
                          label: "From Bhubaneswar",
                          value: "Long, multi-hour drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "☕",
                          label: "Known For",
                          value: "Coffee, Tribal Culture",
                        },
                        {
                          icon: "🎭",
                          label: "Communities",
                          value: "Bonda, Gadaba & more",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Deomali, Jeypore",
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
                  <h2>Best Time to Visit Koraput</h2>
                  <p>
                    Odisha's coastal-plains weather patterns don't map
                    neatly onto Koraput's hill terrain — plan around cooler,
                    drier months for the most comfortable trip.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable temperatures for exploring the Eastern Ghats and visiting tribal markets without the extremes of summer heat.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still manageable",
                        text: "Temperatures climb but the hill elevation keeps it more bearable than Odisha's coastal plains.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush, difficult travel",
                        text: "Heavy rain makes interior roads and trekking to Deomali genuinely difficult.",
                      },
                      {
                        season: "Nov – Dec",
                        emoji: "☕",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coffee harvest season",
                        text: "A particularly good window if visiting coffee plantations is a priority.",
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
                    most comfortable window for both sightseeing and tribal
                    market visits.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Koraput</h2>
                  <p>
                    Koraput's southern, interior location means a genuine
                    journey from Bhubaneswar — set expectations accordingly.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Bhubaneswar:</strong> A long
                      multi-hour drive; most visitors treat this as a
                      dedicated regional trip rather than a side excursion.
                    </li>
                    <li>
                      <strong>By rail:</strong> Koraput has its own railway
                      station with connections to major Odisha and
                      neighbouring-state routes, often a more comfortable
                      option than the full road journey.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Plan Koraput as the base for
                    a multi-day southern Odisha loop taking in Deomali and
                    Jeypore, rather than a standalone stop — the travel
                    effort to get here is better spread across a fuller
                    itinerary.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Coffee, Tribal Markets & Scenery</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Coffee plantation rows in the Eastern Ghats near Koraput, Odisha"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Coffee Plantations</h3>
                  <p>
                    A genuinely unusual sight for Odisha — rows of coffee
                    plants across the Eastern Ghats hillsides, a legacy of
                    the region's altitude and climate.
                  </p>
                  <h3>Bonda & Gadaba Communities</h3>
                  <p>
                    Koraput district is home to some of India's most
                    culturally distinct tribal groups. Learning about their
                    traditions, ideally through a respectful, guided
                    interaction, is a highlight for culturally curious
                    travelers.
                  </p>
                  <h3>Weekly Tribal Haats (Markets)</h3>
                  <p>
                    Local communities gather at weekly markets to trade
                    produce, goods, and crafts — a vivid, functioning slice
                    of local life. Ask locally about current market days and
                    always seek permission before photographing people.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Koraput</h2>
                  <p>
                    Accommodation is modest and concentrated in Koraput town
                    itself, which functions as the practical base for the
                    wider region.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Odisha Tourism guesthouses",
                          "Basic town lodges",
                          "Simple family-run stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Business-style hotels in town",
                          "Slightly upgraded guesthouses",
                          "Better-equipped rooms",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "☕",
                        range: "₹4,000+/night",
                        picks: [
                          "Very limited premium options",
                          "Occasional estate stays",
                          "Book well ahead",
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
                  <h2>Suggested Visit Plan (2–3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Koraput Town",
                        color: "bg-amber-700",
                        activities: [
                          "Long journey in, check in",
                          "Explore Koraput town and coffee plantations",
                          "Evening at leisure",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Tribal Markets & Culture",
                        color: "bg-sky-600",
                        activities: [
                          "Visit a weekly tribal haat if timing aligns",
                          "Learn about Bonda and Gadaba communities respectfully",
                          "Local sightseeing around Koraput",
                        ],
                      },
                      {
                        day: "Day 3 (Optional)",
                        title: "Deomali or Jeypore Extension",
                        color: "bg-forest-600",
                        activities: [
                          "Day trip to Deomali for the trek",
                          "Or head onward to Jeypore and Duduma Falls",
                          "Depart from the region",
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
                  <h2>Where to Eat in Koraput</h2>
                  <ul>
                    <li>
                      <strong>Hotel/guesthouse dining:</strong> Most
                      accommodation serves simple Odia and regional meals to
                      guests, the most reliable option given limited
                      standalone restaurants.
                    </li>
                    <li>
                      <strong>Local coffee:</strong> Fresh, locally grown
                      coffee is a genuine highlight worth seeking out.
                    </li>
                    <li>
                      <strong>Market food stalls:</strong> Weekly tribal
                      haats sometimes have simple food stalls worth trying
                      if respectfully approached.
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
                          ["Accommodation/night", "₹900", "₹2,500", "₹4,500"],
                          ["Local guide (per day)", "₹500", "₹800", "₹1,200"],
                          ["Food/day", "₹400", "₹800", "₹1,500"],
                          ["Local transport/day", "₹300", "₹700", "₹1,500"],
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
                  <h2>Essential Tips for Visiting Koraput</h2>
                  <ul>
                    <li>
                      <strong>Visit tribal markets respectfully:</strong>{" "}
                      These are functioning community spaces, not staged
                      tourist attractions — ask before photographing people.
                    </li>
                    <li>
                      <strong>Hire a local guide:</strong> Genuinely
                      valuable for both cultural context and navigating the
                      wider tribal region.
                    </li>
                    <li>
                      <strong>Plan real travel time:</strong> Koraput's
                      distance from Bhubaneswar means this deserves a
                      dedicated multi-day trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access thins out
                      quickly outside Koraput town.
                    </li>
                    <li>
                      <strong>Combine with Deomali and Jeypore:</strong> The
                      three together make a far more worthwhile regional
                      circuit than any single stop alone.
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
                          "Ask locally about weekly tribal market days",
                          "Hire a local guide for cultural context",
                          "Try locally grown coffee",
                          "Combine with Deomali and Jeypore",
                          "Carry enough cash for the whole trip",
                          "Ask permission before photographing people",
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
                          "Treat tribal markets as a photo-op destination",
                          "Underestimate the distance from Bhubaneswar",
                          "Rely on cards outside Koraput town",
                          "Visit during peak monsoon",
                          "Rush the trip into a single day",
                          "Skip a local guide for cultural context",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Koraput with{" "}
                    <Link href="/blog/deomali-travel-guide">Deomali</Link>{" "}
                    for a trek to Odisha's highest peak, and{" "}
                    <Link href="/blog/jeypore-travel-guide">Jeypore</Link> for
                    more tribal-region history and Duduma Falls. See our full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
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
                  "Koraput",
                  "Tribal Culture",
                  "Odisha",
                  "Eastern Ghats",
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

              <RelatedPostsGrid currentSlug="koraput-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="koraput-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
