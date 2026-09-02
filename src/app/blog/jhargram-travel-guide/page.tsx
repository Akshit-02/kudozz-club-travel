// src/app/blog/jhargram-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jhargram Travel Guide: Forests, Palace & Deer Park",
  description:
    "Complete Jhargram guide — the Raj Palace, Deer Park, Kanak Durga Temple, Belpahari's forests, how to reach from Kolkata by train, where to stay, and a full visit plan.",
  keywords:
    "Jhargram travel guide, Jhargram Raj Palace, Jhargram Deer Park, Chidiya More, Kanak Durga Temple, Chilkigarh, Belpahari, Gadrasini hills, Jangalmahal, sal forest West Bengal, how to reach Jhargram, Santhal tribal villages",
  openGraph: {
    title: "Jhargram Travel Guide: Forests, Palace & Deer Park",
    description:
      "A sal-forest town in West Bengal's Jangalmahal belt — a heritage Raj Palace, a deer park, riverside temples, and an easy 3-hour train ride from Kolkata.",
    url: "https://club.kudozz.in/blog/jhargram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Dense sal forest landscape, evoking the Jangalmahal forests around Jhargram",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhargram Travel Guide: Forests, Palace & Deer Park",
    description:
      "A heritage Raj Palace, a deer park, and sal forest — the complete Jhargram guide, an easy train ride from Kolkata.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jhargram-travel-guide",
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
          headline: "Jhargram Travel Guide: Forests, Palace & Deer Park",
          description:
            "Complete Jhargram guide — the Raj Palace, Deer Park, Kanak Durga Temple, Belpahari's forests, how to reach from Kolkata by train, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
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
            "@id": "https://club.kudozz.in/blog/jhargram-travel-guide",
          },
          keywords:
            "Jhargram, West Bengal, Jangalmahal, sal forest, Deer Park, tribal culture, off-beat",
          about: {
            "@type": "Place",
            name: "Jhargram",
            address: {
              "@type": "PostalAddress",
              addressRegion: "West Bengal",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Jhargram",
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
    q: "How do I reach Jhargram from Kolkata?",
    a: "The easiest way is by train — Jhargram railway station sits on the Howrah-Kharagpur-Tatanagar line, with direct trains from Howrah taking around 3 hours. By road, it's roughly 170 km via NH16, about 3.5-4 hours' drive.",
  },
  {
    q: "What is Jangalmahal?",
    a: "Jangalmahal (literally 'forest region') refers to the forested, laterite-soil belt spanning parts of West Bengal's Jhargram, Purulia, Bankura, and West Midnapore districts. Jhargram is one of its main gateway towns, known for sal forests and Santhal and other tribal communities.",
  },
  {
    q: "Can I visit the Jhargram Raj Palace?",
    a: "The heritage palace building can be viewed from outside, and part of the complex now functions as a heritage hotel where you can stay or dine even if you're not overnighting there — check current visiting arrangements locally, as access can vary.",
  },
  {
    q: "Is Jhargram Deer Park worth visiting?",
    a: "Yes, especially for families — it's a forested enclosure near the town centre (locally known as Chidiya More) where spotted deer roam in a relatively natural sal-forest setting, an easy, low-effort stop that doesn't require a full day.",
  },
  {
    q: "What is the best time to visit Jhargram?",
    a: "October to March offers the most comfortable weather for exploring the palace, deer park, and nearby forests. The monsoon (July-September) turns the sal forest a deep green but makes travel to more remote spots like Belpahari less comfortable.",
  },
  {
    q: "How many days should I spend in Jhargram?",
    a: "A single day covers the palace, Deer Park, and Kanak Durga Temple comfortably. Add a second day if you want to extend to Chilkigarh, Belpahari, or the Gadrasini hills for a deeper, more offbeat forest experience.",
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
  { id: "introduction", title: "A Forest Town in Jangalmahal", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jhargram", level: 2 },
  { id: "things-to-do", title: "Palace, Park & Temples", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JhargramGuidePage() {
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
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Dense sal forest landscape, evoking the Jangalmahal forests around Jhargram"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Jhargram", href: null },
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
                "Jhargram",
                "Jangalmahal",
                "Sal Forest",
                "Deer Park",
                "West Bengal",
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
              Jhargram: Forests, Raj Palace & Deer Park Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A sal-forest town in West Bengal's Jangalmahal belt — a
              heritage Raj Palace, a forest deer park, riverside temples, and
              an easy 3-hour train ride from Kolkata.
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
                  text: "Jhargram district, West Bengal",
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
                  <h2>A Forest Town in Jangalmahal</h2>
                  <p>
                    <strong>Jhargram</strong> is the headquarters town of its
                    own district in the far southwest of{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , sitting at the edge of the region known as{" "}
                    <strong>Jangalmahal</strong> — literally "the forest
                    region," a belt of sal forest and red laterite terrain
                    that spans Jhargram, Purulia, Bankura, and West
                    Midnapore. It's one of the easiest offbeat trips out of{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>,
                    reachable by a direct train in about three hours.
                  </p>
                  <p>
                    At its centre is the <strong>Jhargram Raj Palace</strong>,
                    a heritage building that once housed the local royal
                    family and now partly operates as a heritage hotel — a
                    striking piece of colonial-era architecture set against
                    the forest backdrop. A short distance away,{" "}
                    <strong>Jhargram Deer Park</strong> (known locally as
                    Chidiya More) lets visitors walk among free-ranging
                    spotted deer inside sal forest cover.
                  </p>
                  <p>
                    For those with an extra day, the surrounding countryside
                    — <strong>Chilkigarh</strong> on the Dulung river,{" "}
                    <strong>Belpahari</strong>, and the{" "}
                    <strong>Gadrasini hills</strong> — offers a deeper,
                    quieter extension into Jangalmahal's forest and Santhal
                    tribal-village landscape, well beyond what most visitors
                    to Bengal ever see.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Jhargram at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Jhargram district, West Bengal",
                        },
                        {
                          icon: "🚆",
                          label: "From Kolkata",
                          value: "~3 hr direct train (Howrah)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Raj Palace, Deer Park",
                        },
                        {
                          icon: "🌳",
                          label: "Terrain",
                          value: "Sal forest, laterite soil",
                        },
                        {
                          icon: "🎯",
                          label: "Good For",
                          value: "Easy weekend getaway",
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
                  <h2>Best Time to Visit Jhargram</h2>
                  <p>
                    Jhargram is a comfortable year-round trip in the sense
                    that there's no monsoon closure to plan around, but the
                    experience still varies a lot by season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant for walking the palace grounds, Deer Park, and any extension toward Belpahari or Chilkigarh.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot",
                        text: "Increasingly hot on the plains, making midday sightseeing less comfortable — early morning or late afternoon visits work better.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — greenest, less comfortable travel",
                        text: "The sal forest turns a deep, vivid green and rivers like the Dulung run full, but travel to more remote spots becomes less convenient.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🦌",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak season",
                        text: "The most popular window for visiting the Deer Park and palace grounds, with the mildest weather of the year.",
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
                    <strong>Our pick:</strong> October to February —
                    cool, dry weather that's comfortable for both the town
                    itself and any extension into the surrounding forest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jhargram</h2>
                  <p>
                    Jhargram is one of the more accessible offbeat trips from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>,
                    thanks to a direct rail line.
                  </p>
                  <ul>
                    <li>
                      <strong>By train:</strong> Jhargram railway station
                      sits on the Howrah-Kharagpur-Tatanagar line, with
                      several direct trains daily from Howrah taking roughly
                      3 hours — the easiest and most popular way to arrive.
                    </li>
                    <li>
                      <strong>By road:</strong> About 170 km from Kolkata via
                      NH16, a 3.5-4 hour drive, workable as a long day trip
                      or a relaxed overnight visit.
                    </li>
                    <li>
                      <strong>Getting around locally:</strong> Auto-rickshaws
                      and hired taxis cover the town's own sights easily; a
                      full-day taxi or car hire is more practical for
                      reaching Chilkigarh, Belpahari, or the Gadrasini hills.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Take an early morning train
                    from Howrah — it leaves you a full day in Jhargram and
                    still allows a same-day return if you're keeping the trip
                    to a single day.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Palace, Park & Temples</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Sal forest terrain around Jhargram, West Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Jhargram Raj Palace</h3>
                  <p>
                    A grand early-20th-century building that once served as
                    the seat of the local zamindari royal family, its
                    architecture blending colonial and Bengali design
                    elements. Part of the palace complex today functions as
                    a heritage hotel, so visitors can walk the grounds, admire
                    the façade, and in some cases dine or stay within a
                    genuinely historic setting.
                  </p>
                  <h3>Jhargram Deer Park (Chidiya More)</h3>
                  <p>
                    A forested enclosure near the town centre where spotted
                    deer roam in a setting close to their natural sal-forest
                    habitat. It's an easy, low-effort stop — good for
                    families and anyone wanting a gentle introduction to the
                    region's wildlife without a long safari commitment.
                  </p>
                  <h3>Kanak Durga Temple & Chilkigarh</h3>
                  <p>
                    The Kanak Durga Temple sits on the banks of the Dulung
                    river at Chilkigarh, a peaceful riverside spot a short
                    drive from town. The temple and its ghats make for an
                    easy half-day excursion, especially appealing around
                    dusk when the river light softens.
                  </p>
                  <h3>Belpahari & Gadrasini Hills</h3>
                  <p>
                    For travellers with an extra day, Belpahari and the
                    nearby Gadrasini hills offer a deeper, more offbeat
                    extension — denser forest, Santhal tribal villages, and
                    a noticeably quieter pace than Jhargram town itself. This
                    is where the wider Jangalmahal region shows its most
                    unspoiled side.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Jhargram</h2>
                  <p>
                    Accommodation ranges from simple lodges near the station
                    to the heritage palace stay itself, with a growing
                    number of forest-fringe resorts nearby.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Lodges near the railway station",
                          "Government tourist rest houses",
                          "Basic guesthouses in town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Forest-fringe resorts",
                          "Tourism department properties",
                          "Mid-size hotels near the Deer Park",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏰",
                        range: "₹6,000–₹12,000+/night",
                        picks: [
                          "Heritage stay at the Raj Palace complex",
                          "Boutique nature resorts nearby",
                          "Premium forest-view cottages",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1 — Morning",
                        title: "Palace & Deer Park",
                        color: "bg-amber-700",
                        activities: [
                          "Morning train from Howrah, arrive Jhargram",
                          "Visit Jhargram Raj Palace grounds",
                          "Walk through Jhargram Deer Park",
                        ],
                      },
                      {
                        day: "Day 1 — Afternoon",
                        title: "Chilkigarh & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Kanak Durga Temple, Chilkigarh",
                          "Evening by the Dulung river ghats",
                          "Return train or overnight stay",
                        ],
                      },
                      {
                        day: "Day 2 (optional)",
                        title: "Belpahari Extension",
                        color: "bg-forest-600",
                        activities: [
                          "Morning drive to Belpahari",
                          "Explore the Gadrasini hills area",
                          "Visit a nearby Santhal village",
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
                    * Travellers wanting more forest and trekking time often
                    continue from Jhargram toward the{" "}
                    <Link href="/blog/ajodhya-hills-travel-guide">
                      Ajodhya Hills
                    </Link>{" "}
                    further west in Purulia district.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Jhargram</h2>
                  <ul>
                    <li>
                      <strong>Local Bengali eateries in town:</strong> Simple
                      thalis with rice, dal, and seasonal vegetable or fish
                      preparations are widely available near the market and
                      station area.
                    </li>
                    <li>
                      <strong>Heritage palace dining:</strong> The palace
                      complex's own dining room, where open to non-guests,
                      offers a more atmospheric meal in a historic setting.
                    </li>
                    <li>
                      <strong>Roadside dhabas toward Belpahari:</strong>{" "}
                      Basic but reliable stops for tea and a simple meal on
                      the longer drives into the surrounding forest.
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
                          ["Accommodation/night", "₹1,000", "₹3,500", "₹8,000"],
                          ["Train (round trip)", "₹200", "₹600", "₹1,200"],
                          ["Food/day", "₹500", "₹1,000", "₹2,200"],
                          ["Local taxi/day", "₹1,200", "₹1,800", "₹2,500"],
                          ["Entry fees (park/temple)", "₹50", "₹50", "₹50"],
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
                    * Figures are per person, per day (except train, a round
                    trip figure). Local taxi cost is best split across a
                    group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Jhargram</h2>
                  <ul>
                    <li>
                      <strong>Take an early train:</strong> A morning
                      departure from Howrah gives you a full day in Jhargram
                      and keeps a same-day return realistic if needed.
                    </li>
                    <li>
                      <strong>Hire a taxi for the day if extending to
                      Belpahari:</strong> These outlying spots aren't well
                      served by public transport, so a full-day car hire is
                      the practical choice.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance and ATM
                      density drop noticeably outside the main town.
                    </li>
                    <li>
                      <strong>Visit the Deer Park in the cooler hours:</strong>{" "}
                      Early morning or late afternoon gives both better light
                      and more comfortable walking temperatures.
                    </li>
                    <li>
                      <strong>Respect village etiquette:</strong> If visiting
                      Santhal villages near Belpahari, go with a local guide
                      or driver who can help with respectful, low-impact
                      visits.
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
                          "Take an early train for a full day in Jhargram",
                          "Hire a full-day taxi for the Belpahari extension",
                          "Carry enough cash for outlying areas",
                          "Visit the Deer Park in cooler morning hours",
                          "Stop at Chilkigarh for the riverside temple",
                          "Combine the trip with Ajodhya Hills if time allows",
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
                          "Rely on public transport for Belpahari or Gadrasini",
                          "Expect wide card acceptance outside town",
                          "Visit the Deer Park at peak midday heat",
                          "Skip checking palace visiting hours in advance",
                          "Rush Chilkigarh into a quick drive-by",
                          "Travel to remote villages without a local guide",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Jhargram with
                    the deeper forest trails and Chhau-dance heritage of the{" "}
                    <Link href="/blog/ajodhya-hills-travel-guide">
                      Ajodhya Hills
                    </Link>
                    , or bookend your trip with a stop in{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>.
                    See our full{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal travel guide
                    </Link>{" "}
                    for more of the region.
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
                  "Jhargram",
                  "West Bengal",
                  "Jangalmahal",
                  "Sal Forest",
                  "Deer Park",
                  "Tribal Culture",
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

              <RelatedPostsGrid currentSlug="jhargram-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jhargram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
