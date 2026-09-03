// src/app/blog/sarnath-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sarnath Travel Guide: Buddha's First Sermon Site",
  description:
    "Complete Sarnath guide — Dhamek Stupa, the Ashoka Pillar's lion capital, Sarnath Archaeological Museum, Mulagandha Kuti Vihar, and how to plan a half-day trip from Varanasi.",
  keywords:
    "Sarnath travel guide, Sarnath Varanasi, Dhamek Stupa, Ashoka Pillar Sarnath, Sarnath Archaeological Museum, Mulagandha Kuti Vihar, Buddha first sermon, Deer Park Sarnath, Buddhist circuit Uttar Pradesh, how to reach Sarnath",
  openGraph: {
    title: "Sarnath Travel Guide: Buddha's First Sermon Site",
    description:
      "Where the Buddha delivered his first sermon after enlightenment — the Dhamek Stupa, Ashoka's lion capital, and a key stop on India's Buddhist circuit, 10 km from Varanasi.",
    url: "https://club.kudozz.in/blog/sarnath-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "The Dhamek Stupa and monastic ruins at Sarnath near Varanasi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarnath Travel Guide: Buddha's First Sermon Site",
    description:
      "The Dhamek Stupa, Ashoka's lion capital, and the Deer Park — a complete guide to Sarnath, 10 km from Varanasi.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sarnath-travel-guide",
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
          headline: "Sarnath Travel Guide: Buddha's First Sermon Site",
          description:
            "Complete Sarnath guide — Dhamek Stupa, the Ashoka Pillar's lion capital, Sarnath Archaeological Museum, Mulagandha Kuti Vihar, and how to plan a half-day trip from Varanasi.",
          image:
            "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/sarnath-travel-guide",
          },
          keywords:
            "Sarnath, Dhamek Stupa, Ashoka Pillar, Buddha first sermon, Buddhist circuit, Varanasi",
          about: {
            "@type": "Place",
            name: "Sarnath",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttar Pradesh",
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
                name: "Uttar Pradesh",
                item: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Sarnath",
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
    q: "What is Sarnath famous for?",
    a: "Sarnath is the site where Gautama Buddha is traditionally held to have delivered his first sermon (the 'Dhammacakkappavattana Sutta,' or 'setting the wheel of dharma in motion') after attaining enlightenment at Bodh Gaya. This makes it one of the four most important pilgrimage sites in Buddhism, alongside Bodh Gaya, Kushinagar, and Lumbini.",
  },
  {
    q: "How far is Sarnath from Varanasi and how do I get there?",
    a: "Sarnath is about 10 km from central Varanasi, roughly a 30-40 minute ride by auto-rickshaw or taxi. There's no separate airport or major rail station at Sarnath itself — nearly everyone visits as a half-day trip from Varanasi, which shares the same airport and rail gateway.",
  },
  {
    q: "What is the connection between the Ashoka Pillar at Sarnath and India's national emblem?",
    a: "The four-lion capital that once topped the Ashoka Pillar at Sarnath — carved in the 3rd century BCE under Emperor Ashoka — was adopted as independent India's official State Emblem in 1950, and the four-lion motif appears on Indian currency, passports, and government seals. The original capital, minus the pillar itself, is preserved in the Sarnath Archaeological Museum.",
  },
  {
    q: "How much time do I need to see Sarnath?",
    a: "A half-day (3-4 hours) is enough to see the Dhamek Stupa, the Ashoka Pillar remains, the Deer Park, Mulagandha Kuti Vihar, and the Archaeological Museum at an unhurried pace. It pairs easily with a Varanasi itinerary as a single-day excursion.",
  },
  {
    q: "Is Sarnath part of a larger Buddhist pilgrimage circuit?",
    a: "Yes. Sarnath is one of the four principal sites of the Buddhist pilgrimage circuit, alongside Lumbini (birthplace, Nepal), Bodh Gaya (enlightenment, Bihar), and Kushinagar (site of Buddha's death/parinirvana, also in Uttar Pradesh). Many pilgrims visiting Varanasi combine Sarnath with a longer trip covering Kushinagar and Bodh Gaya.",
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
  { id: "introduction", title: "Where the Wheel of Dharma Turned", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sarnath", level: 2 },
  { id: "attractions", title: "What to See in Sarnath", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SarnathGuidePage() {
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
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="The Dhamek Stupa and monastic ruins at Sarnath near Varanasi"
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
                { label: "Uttar Pradesh", href: "/blog/uttar-pradesh-travel-guide" },
                { label: "Sarnath", href: null },
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
                "Sarnath",
                "Buddha",
                "Dhamek Stupa",
                "Uttar Pradesh",
                "Buddhist Circuit",
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
              Sarnath: Dhamek Stupa & Buddha's First Sermon Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Where the Buddha turned the wheel of dharma for the first
              time — the Dhamek Stupa, Ashoka's lion capital, and a quiet,
              essential stop on the Buddhist pilgrimage circuit, just 10 km
              from Varanasi.
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
                  text: "Sarnath, near Varanasi, Uttar Pradesh",
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
                  <h2>Where the Wheel of Dharma Turned</h2>
                  <p>
                    <strong>Sarnath</strong> is where, according to
                    Buddhist tradition, Gautama Buddha delivered his first
                    sermon after attaining enlightenment at Bodh Gaya —
                    an event known as the "turning of the wheel of dharma"
                    (Dhammacakkappavattana). He is said to have preached to
                    five ascetics in a deer park here, laying out the Four
                    Noble Truths and the Eightfold Path for the first time.
                    That moment makes Sarnath one of Buddhism's four most
                    sacred sites, alongside Lumbini, Bodh Gaya, and{" "}
                    <Link href="/blog/kushinagar-travel-guide">
                      Kushinagar
                    </Link>
                    .
                  </p>
                  <p>
                    Just 10 km from{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>
                    's dense, ritual-heavy ghats, Sarnath is a study in
                    contrast — an open, green, contemplative site of brick
                    ruins and monasteries rather than crowded temples and
                    riverside chaos. It rewards a slow, unhurried half-day
                    visit within a wider{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    itinerary.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦌</span> Sarnath at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "~10 km from Varanasi",
                        },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Dhamek Stupa, Buddha's first sermon",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🦁",
                          label: "National Symbol",
                          value: "Ashoka's lion capital, found here",
                        },
                        {
                          icon: "🕐",
                          label: "Time Needed",
                          value: "Half-day (3-4 hours)",
                        },
                        {
                          icon: "🚕",
                          label: "Gateway",
                          value: "Varanasi (airport & rail)",
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
                  <h2>Best Time to Visit Sarnath</h2>
                  <p>
                    As an open-air archaeological site with little shade,
                    Sarnath is best visited in the cooler months.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Comfortable temperatures for walking the open stupa grounds and Deer Park at a relaxed pace, ideal for a morning visit.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — visit early",
                        text: "The open grounds offer little shelter from the heat; visiting first thing in the morning is essential if travelling in this window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green but wet",
                        text: "The grounds turn lush green, but rain can interrupt an unhurried walk between the stupa, museum, and temple.",
                      },
                      {
                        season: "Buddha Purnima (May)",
                        emoji: "🪷",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Major festival window",
                        text: "Sarnath sees a large gathering of pilgrims and monks for Buddha's birth anniversary, with special prayers at Mulagandha Kuti Vihar.",
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
                    <strong>Our pick:</strong> A cool winter morning,
                    combined with an early sunrise boat ride in Varanasi
                    beforehand — Sarnath makes an easy, contemplative
                    second half of the day.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sarnath</h2>
                  <p>
                    Sarnath has no airport or major railway station of its
                    own — nearly every visitor arrives as a short trip from{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>
                    , which shares the same gateway infrastructure.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Lal Bahadur Shastri
                      International Airport in Varanasi, about 20-25 km
                      from Sarnath, is the nearest airport.
                    </li>
                    <li>
                      <strong>By rail:</strong> Varanasi Junction is the
                      practical rail gateway; Sarnath does have a small
                      local station, but it sees limited service compared
                      to the main junction.
                    </li>
                    <li>
                      <strong>By road:</strong> The most common approach —
                      an auto-rickshaw, taxi, or app-based cab from
                      anywhere in Varanasi takes roughly 30-40 minutes.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hire a taxi or auto for a
                    half-day round trip rather than a one-way ride — return
                    transport can be harder to find directly outside the
                    Sarnath complex.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>What to See in Sarnath</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Ancient stupa ruins and monastery grounds at Sarnath"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Dhamek Stupa</h3>
                  <p>
                    The centrepiece of the site, the <strong>Dhamek
                    Stupa</strong> is a massive cylindrical structure of
                    brick and stone, roughly 43.6 metres tall, believed to
                    mark the exact spot of the Buddha's first sermon. Its
                    current form dates largely to around the 5th century
                    CE, though it stands on foundations laid centuries
                    earlier under Emperor Ashoka. Intricate carved
                    geometric and floral patterns are still visible on its
                    lower section.
                  </p>
                  <h3>The Ashoka Pillar & Its Lion Capital</h3>
                  <p>
                    Near the Dhamek Stupa lie the broken remains of the{" "}
                    <strong>Ashoka Pillar</strong>, erected by Emperor
                    Ashoka in the 3rd century BCE to mark the site's
                    sanctity. The pillar's capital — four back-to-back
                    lions atop a wheel and a base carved with an elephant,
                    horse, bull, and lion — was recovered largely intact
                    and is now displayed in the site museum. In 1950, free
                    India adopted this same lion capital as the{" "}
                    <strong>national emblem</strong>, and its four-lion
                    motif now appears on the currency, passports, and
                    official seals of the country.
                  </p>
                  <h3>Sarnath Archaeological Museum</h3>
                  <p>
                    Just outside the main park, this museum holds the
                    original Ashoka lion capital along with an outstanding
                    collection of Buddhist sculpture excavated from the
                    site, including several graceful Buddha and Bodhisattva
                    images from the Gupta period — among the finest
                    examples of early Indian Buddhist art anywhere.
                  </p>
                  <h3>Mulagandha Kuti Vihar & the Deer Park</h3>
                  <p>
                    A modern temple built in the 20th century by the
                    Maha Bodhi Society, <strong>Mulagandha Kuti Vihar</strong>{" "}
                    houses vivid mural paintings by Japanese artist Kosetsu
                    Nosu depicting scenes from the Buddha's life, and a
                    Bodhi tree grown from a sapling of the original tree at
                    Bodh Gaya. Adjacent to it, the <strong>Deer Park</strong>{" "}
                    — deer still roam a fenced enclosure here — recalls the
                    setting of the original sermon.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Sarnath has a modest number of stays of its own —
                    mostly geared toward Buddhist pilgrims — but the
                    overwhelming majority of visitors base themselves in{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>{" "}
                    and visit as a half-day trip.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Buddhist monastery guesthouses",
                          "Basic lodges near the main complex",
                          "Budget stays back in Varanasi",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Government-run tourist bungalows",
                          "Mid-size hotels near Sarnath",
                          "Comfortable stays in Varanasi Cantt",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "5-star hotels back in Varanasi",
                          "Full-service resorts near the airport road",
                          "Heritage riverfront properties",
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
                  <h2>Suggested Visit Plan (Half-Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Stupa Grounds & Museum",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Varanasi early to beat the day's heat",
                          "Walk the Dhamek Stupa and Ashoka Pillar remains",
                          "Visit the Sarnath Archaeological Museum",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Temple & Deer Park",
                        color: "bg-forest-600",
                        activities: [
                          "See the murals at Mulagandha Kuti Vihar",
                          "Walk through the Deer Park enclosure",
                          "Return to Varanasi by early afternoon",
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
                    * Serious Buddhist circuit travellers often continue
                    from Sarnath toward{" "}
                    <Link href="/blog/kushinagar-travel-guide">
                      Kushinagar
                    </Link>{" "}
                    for a multi-day pilgrimage extension.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Small dhabas near the entrance:</strong>{" "}
                      Simple North Indian thalis and snacks close to the
                      main complex gate.
                    </li>
                    <li>
                      <strong>Monastery canteens:</strong> Some Buddhist
                      monasteries in Sarnath serve simple vegetarian meals
                      to visitors and pilgrims.
                    </li>
                    <li>
                      <strong>Back in Varanasi:</strong> Most travellers
                      save a proper meal for their return to Varanasi,
                      where the food scene is considerably wider.
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
                            "Round-trip taxi from Varanasi",
                            "₹600",
                            "₹1,000",
                            "₹1,800",
                          ],
                          ["Museum entry", "₹25", "₹25", "₹25"],
                          ["Stupa complex entry", "₹25", "₹25", "₹25"],
                          ["Food (half-day)", "₹150", "₹350", "₹800"],
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
                    * Entry fees are nominal and identical across budget
                    tiers; taxi and food costs are what vary.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Sarnath</h2>
                  <ul>
                    <li>
                      <strong>Go early:</strong> The stupa grounds have
                      little shade, so a morning visit beats the midday
                      heat, especially outside winter.
                    </li>
                    <li>
                      <strong>Hire round-trip transport:</strong> Auto-rickshaws
                      and taxis are easy to find in Varanasi but scarcer
                      right outside the Sarnath complex.
                    </li>
                    <li>
                      <strong>Don't skip the museum:</strong> The original
                      Ashoka lion capital and Gupta-period sculptures here
                      are genuinely world-class and easy to rush past.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Mulagandha Kuti
                      Vihar and other temple spaces expect respectful,
                      covered clothing.
                    </li>
                    <li>
                      <strong>Pair with Varanasi:</strong> Sarnath works
                      best as a contemplative counterpoint to a day or two
                      of Varanasi's ghats, not as a standalone trip.
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
                          "Visit the museum for the original lion capital",
                          "Go in the morning to avoid the midday heat",
                          "Hire a taxi for the round trip from Varanasi",
                          "Walk the full stupa grounds slowly",
                          "Dress modestly for the temple spaces",
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
                          "Rush through in under an hour",
                          "Expect a wide dining scene right at the site",
                          "Visit at midday in summer without shade cover",
                          "Assume return transport is easy to flag down",
                          "Skip the Deer Park thinking it's just for kids",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Sarnath
                    with the ghats and temples of{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>
                    , or continue the Buddhist circuit onward toward{" "}
                    <Link href="/blog/kushinagar-travel-guide">
                      Kushinagar
                    </Link>{" "}
                    as part of a wider{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    itinerary.
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
                  "Sarnath",
                  "Buddha",
                  "Dhamek Stupa",
                  "Uttar Pradesh",
                  "Buddhist Circuit",
                  "Varanasi",
                  "Ashoka Pillar",
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

              <RelatedPostsGrid currentSlug="sarnath-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sarnath-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
