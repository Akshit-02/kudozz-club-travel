// src/app/blog/naimisharanya-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Naimisharanya Travel Guide: Sacred Forest & Temples",
  description:
    "Complete Naimisharanya (Naimisaranya) guide — the sacred forest of the Puranas, Chakra Tirtha, Lalita Devi Shakti Peeth temple, Vyas Gaddi, Hanuman Garhi, how to reach, and a full visit plan.",
  keywords:
    "Naimisharanya travel guide, Naimisaranya, Chakra Tirtha, Lalita Devi Temple, Vyas Gaddi, sacred forest Puranas, Naimisharanya Sitapur, how to reach Naimisharanya, Naimisharanya Lucknow, Shakti Peeth Uttar Pradesh",
  openGraph: {
    title: "Naimisharanya Travel Guide: Sacred Forest & Temples",
    description:
      "An ancient sacred forest referenced throughout the Puranas — Chakra Tirtha, the Lalita Devi Shakti Peeth, and a genuinely off-the-beaten-path pilgrimage near Lucknow.",
    url: "https://club.kudozz.in/blog/naimisharanya-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sacred forest and riverside pilgrimage setting at Naimisharanya, Uttar Pradesh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Naimisharanya Travel Guide: Sacred Forest & Temples",
    description:
      "The ancient sacred forest of the Puranas — Chakra Tirtha, Lalita Devi Temple, and a quiet pilgrimage circuit near Lucknow.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/naimisharanya-travel-guide",
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
          headline: "Naimisharanya Travel Guide: Sacred Forest & Temples",
          description:
            "Complete Naimisharanya (Naimisaranya) guide — the sacred forest of the Puranas, Chakra Tirtha, Lalita Devi Shakti Peeth temple, Vyas Gaddi, Hanuman Garhi, how to reach, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/naimisharanya-travel-guide",
          },
          keywords:
            "Naimisharanya, Chakra Tirtha, sacred forest, Puranas, pilgrimage, Uttar Pradesh",
          about: {
            "@type": "Place",
            name: "Naimisharanya",
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
                name: "Naimisharanya",
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
    q: "What is Naimisharanya famous for?",
    a: "Naimisharanya (also spelled Naimisaranya) is an ancient sacred forest extensively referenced in the Puranas, traditionally described as the site where sages gathered to hear the Puranas recited by Suta Goswami. It's home to Chakra Tirtha, the Lalita Devi Shakti Peeth temple, Vyas Gaddi, and Hanuman Garhi.",
  },
  {
    q: "What is Chakra Tirtha?",
    a: "Chakra Tirtha is a sacred pond at Naimisharanya, traditionally believed to mark the spot where Lord Vishnu's discus (chakra) struck the ground. It's one of the most important pilgrimage points within the sacred forest complex, and devotees take a ritual dip here.",
  },
  {
    q: "Is Naimisharanya a Shakti Peeth?",
    a: "The Lalita Devi Temple at Naimisharanya is considered one of the Shakti Peethas — sites associated with the goddess Sati across Hindu tradition — making the town significant for both Puranic and Shakta pilgrimage traditions.",
  },
  {
    q: "How do I reach Naimisharanya?",
    a: "The nearest railway options are Naimisharanya railway station itself or Sitapur Junction, about 35 km away, both with connections toward Lucknow. By road, it's roughly 90 km from Lucknow, about a 2-hour drive.",
  },
  {
    q: "How is Naimisharanya different from Ayodhya or Varanasi?",
    a: "Naimisharanya is a much quieter, less commercialised pilgrimage site than either. Its significance lies specifically in Puranic mythology — being the traditional setting where the Puranas were narrated — rather than the epic narratives tied to Ayodhya or the Shiva-centred pilgrimage of Varanasi.",
  },
  {
    q: "How much time do I need at Naimisharanya?",
    a: "A single day is enough to cover the main sites — Chakra Tirtha, Lalita Devi Temple, Vyas Gaddi, and Hanuman Garhi — comfortably, especially if visiting from Lucknow. An overnight stay allows for a more unhurried, contemplative pace.",
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
  { id: "introduction", title: "The Forest of the Puranas", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Naimisharanya", level: 2 },
  { id: "sacred-sites", title: "Sacred Sites & Temples", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NaimisharanyaGuidePage() {
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
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Sacred forest and riverside pilgrimage setting at Naimisharanya, Uttar Pradesh"
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
                { label: "Naimisharanya", href: null },
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
                "Naimisharanya",
                "Chakra Tirtha",
                "Sacred Forest",
                "Puranas",
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
              Naimisharanya Travel Guide: Sacred Forest & Temples
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              An ancient forest referenced throughout the Puranas —
              traditionally where the sages gathered to hear them recited —
              a genuinely off-the-beaten-path pilgrimage a short drive from
              Lucknow.
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
                  text: "Sitapur district, Uttar Pradesh",
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
                  <h2>The Forest of the Puranas</h2>
                  <p>
                    <strong>Naimisharanya</strong> — also spelled{" "}
                    <strong>Naimisaranya</strong> — is one of the oldest and
                    most textually significant pilgrimage sites in{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    , even though it remains largely unknown outside
                    dedicated Puranic and Shakta pilgrimage circles. The
                    forest is described extensively across the Puranas as
                    the setting where a great gathering of sages assembled to
                    hear the Puranas recited by the sage Suta Goswami — a
                    foundational scene in Hindu textual tradition.
                  </p>
                  <p>
                    Unlike the grand temple cities of{" "}
                    <Link href="/blog/varanasi-travel-guide">Varanasi</Link>{" "}
                    or{" "}
                    <Link href="/blog/ayodhya-travel-guide">Ayodhya</Link>,
                    Naimisharanya stays quiet and modest — its
                    significance is rooted less in monumental architecture
                    and more in the layered mythology attached to its
                    handful of sacred sites, making it a rewarding stop for
                    travellers genuinely curious about Puranic tradition
                    rather than the bigger, better-known pilgrimage circuits.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕉️</span> Naimisharanya at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sitapur district, Uttar Pradesh",
                        },
                        {
                          icon: "🚗",
                          label: "From Lucknow",
                          value: "~90 km by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Chakra Tirtha, Lalita Devi Temple",
                        },
                        {
                          icon: "📖",
                          label: "Significance",
                          value: "Setting of the Puranas' narration",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Station",
                          value: "Sitapur Junction (~35 km)",
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
                  <h2>Best Time to Visit Naimisharanya</h2>
                  <p>
                    A comfortable pilgrimage visit here comes down mostly to
                    weather, since the sites themselves are open year-round.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, pleasant weather ideal for the temple circuit and walking between the various sacred sites without the discomfort of heat or humidity.",
                      },
                      {
                        season: "Navratri",
                        emoji: "🪔",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Most active pilgrimage period",
                        text: "The Lalita Devi Temple, as a Shakti Peeth, sees the highest footfall during Navratri — plan for larger crowds but a more vibrant atmosphere.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Hot — avoid if possible",
                        text: "Summer temperatures make outdoor walking between temple sites uncomfortable, especially around midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon",
                        text: "Occasional heavy rain can disrupt travel, though the forest setting takes on a lush, atmospheric quality.",
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
                    <strong>Our pick:</strong> October to March for a calm,
                    comfortable visit — or time your trip around Navratri if
                    you want to witness the site at its most active.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Naimisharanya</h2>
                  <p>
                    Naimisharanya's proximity to Lucknow makes it an easy
                    add-on for travellers already exploring central Uttar
                    Pradesh.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Naimisharanya has its own
                      small railway station, and Sitapur Junction, about 35
                      km away, offers wider connectivity toward Lucknow and
                      beyond.
                    </li>
                    <li>
                      <strong>By road from Lucknow:</strong> About 90 km,
                      roughly a 2-hour drive — the most common approach for
                      most visitors, easily done as a day trip from{" "}
                      <Link href="/blog/lucknow-travel-guide">Lucknow</Link>.
                    </li>
                    <li>
                      <strong>Getting around locally:</strong> The main
                      sacred sites are close enough together to cover on
                      foot or with a short auto-rickshaw ride once you've
                      arrived.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start early if visiting as a
                    day trip from Lucknow — it gives you a relaxed morning at
                    Chakra Tirtha and the temples before the return drive.
                  </div>
                </section>

                {/* ── Sacred Sites ───────────────────────────────────────── */}
                <section id="sacred-sites">
                  <h2>Sacred Sites & Temples</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/hero.jpg"
                      alt="Pilgrimage grounds and forest setting at Naimisharanya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Chakra Tirtha</h3>
                  <p>
                    The spiritual heart of Naimisharanya, Chakra Tirtha is a
                    sacred pond traditionally believed to mark the spot
                    where Lord Vishnu's discus (chakra) struck the earth.
                    Pilgrims take a ritual dip here as part of the standard
                    visit, and it remains the most-visited single site in
                    the complex.
                  </p>
                  <h3>Lalita Devi Temple</h3>
                  <p>
                    Counted among the Shakti Peethas, the Lalita Devi
                    Temple draws devotees on the Shakta pilgrimage circuit
                    in addition to those visiting for the site's Puranic
                    associations. It sees its busiest crowds during
                    Navratri, when the temple takes on a particularly
                    festive atmosphere.
                  </p>
                  <h3>Vyas Gaddi</h3>
                  <p>
                    Associated with the sage Vyasa, traditionally credited
                    with compiling the Puranas and the Mahabharata, Vyas
                    Gaddi marks a site linked to his presence within the
                    sacred forest — a quieter, more contemplative stop on
                    the circuit.
                  </p>
                  <h3>Hanuman Garhi</h3>
                  <p>
                    A temple dedicated to Hanuman within the Naimisharanya
                    complex, drawing steady local devotion alongside the
                    site's other sacred points, and typically included in a
                    full circuit of the area's main temples.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Naimisharanya</h2>
                  <p>
                    Accommodation is simple and pilgrimage-oriented; many
                    visitors treat Naimisharanya as a day trip from Lucknow
                    rather than staying overnight.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Dharamshalas near the temple complex",
                          "Basic pilgrim guesthouses",
                          "Simple lodges near the station",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,000/night",
                        picks: [
                          "Trust-run guesthouses with better amenities",
                          "Small hotels in Sitapur town",
                          "Comfortable pilgrim rest houses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏨",
                        range: "Stay in Lucknow instead",
                        picks: [
                          "No true luxury properties on site",
                          "Best upscale options are in Lucknow (~90 km)",
                          "Day trip from a Lucknow base is common",
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
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Chakra Tirtha & Lalita Devi Temple",
                        color: "bg-purple-700",
                        activities: [
                          "Early drive in from Lucknow",
                          "Ritual visit and dip at Chakra Tirtha",
                          "Darshan at Lalita Devi Temple (Shakti Peeth)",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Vyas Gaddi & Hanuman Garhi",
                        color: "bg-amber-700",
                        activities: [
                          "Visit Vyas Gaddi",
                          "Stop at Hanuman Garhi temple",
                          "Drive back to Lucknow by evening",
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
                    * Naimisharanya is easily combined with a wider{" "}
                    <Link href="/blog/lucknow-travel-guide">Lucknow</Link> or{" "}
                    <Link href="/blog/ayodhya-travel-guide">Ayodhya</Link>{" "}
                    pilgrimage itinerary for travellers with more time.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Naimisharanya</h2>
                  <ul>
                    <li>
                      <strong>Prasad and temple kitchens:</strong> Simple
                      vegetarian meals and prasad offered around the main
                      temple complex.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Basic vegetarian meals
                      near the town centre and station area.
                    </li>
                    <li>
                      <strong>Carry snacks for the drive:</strong> Options
                      are limited along the Lucknow route, so pack water and
                      snacks for the journey.
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
                            "₹600",
                            "₹2,000",
                            "Stay in Lucknow",
                          ],
                          ["Local transport/day", "₹300", "₹700", "₹1,500"],
                          ["Food/day", "₹250", "₹600", "₹1,200"],
                          ["Temple entry", "Free", "Free", "Free"],
                          ["Round-trip from Lucknow (car)", "₹2,500", "₹3,500", "₹5,000"],
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
                    * Figures are per person, per day, except the round-trip
                    car figure. Most temple entries are free; donations are
                    customary.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Naimisharanya</h2>
                  <ul>
                    <li>
                      <strong>Start early for a day trip:</strong> Leaving
                      Lucknow early gives you a relaxed morning at the main
                      sites before the return drive.
                    </li>
                    <li>
                      <strong>Expect a quiet, unhurried atmosphere:</strong>{" "}
                      Naimisharanya isn't commercialised like larger
                      pilgrimage cities — come with that expectation, not one
                      of grand infrastructure.
                    </li>
                    <li>
                      <strong>Time your visit around Navratri if you want the busiest atmosphere:</strong>{" "}
                      Otherwise expect a calm, contemplative visit most of
                      the year.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Facilities
                      along the route and at the site itself are modest.
                    </li>
                    <li>
                      <strong>Dress respectfully for temple visits:</strong>{" "}
                      Standard modest dress is expected at all the sacred
                      sites here.
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
                          "Start early if visiting as a day trip",
                          "Take a ritual dip at Chakra Tirtha respectfully",
                          "Visit all four core sacred sites together",
                          "Dress modestly for temple visits",
                          "Carry water and snacks for the journey",
                          "Combine with a wider Lucknow itinerary",
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
                          "Expect large-scale tourist infrastructure",
                          "Visit without checking Navratri crowd timing",
                          "Rush through the sacred sites",
                          "Skip modest dress at the temples",
                          "Expect luxury accommodation on site",
                          "Travel without carrying water for the day",
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
                    Naimisharanya with{" "}
                    <Link href="/blog/lucknow-travel-guide">Lucknow</Link>{" "}
                    and{" "}
                    <Link href="/blog/ayodhya-travel-guide">Ayodhya</Link>{" "}
                    for a fuller pilgrimage and heritage circuit across{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    .
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
                  "Naimisharanya",
                  "Uttar Pradesh",
                  "Chakra Tirtha",
                  "Sacred Forest",
                  "Puranas",
                  "Pilgrimage",
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

              <RelatedPostsGrid currentSlug="naimisharanya-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="naimisharanya-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
