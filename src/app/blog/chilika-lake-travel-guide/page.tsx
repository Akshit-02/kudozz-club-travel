// src/app/blog/chilika-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chilika Lake Guide: Dolphins, Birds & Boating",
  description:
    "Complete Chilika Lake guide — Irrawaddy dolphin spotting at Satapada, the migratory bird season at Nalabana Bird Sanctuary, Kalijai Temple, how to reach from Puri, and a full visit plan.",
  keywords:
    "Chilika Lake travel guide, Irrawaddy dolphins Chilika, Satapada boat safari, Nalabana Bird Sanctuary, Kalijai Temple, Asia largest brackish water lagoon, Odisha wetland, Ramsar site Odisha",
  openGraph: {
    title: "Chilika Lake Guide: Dolphins, Birds & Boating",
    description:
      "Asia's largest brackish water lagoon, home to Irrawaddy dolphins and hundreds of thousands of wintering migratory birds — the complete Chilika Lake guide.",
    url: "https://club.kudozz.in/blog/chilika-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Calm lake waters with hills in the distance, evoking the scale of Chilika Lake in Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chilika Lake Guide: Dolphins, Birds & Boating",
    description:
      "Irrawaddy dolphins, a major migratory bird sanctuary, and an island temple — the complete guide to Chilika Lake.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chilika-lake-travel-guide",
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
          headline: "Chilika Lake Guide: Dolphins, Birds & Boating",
          description:
            "Complete Chilika Lake guide — Irrawaddy dolphin spotting at Satapada, the migratory bird season at Nalabana Bird Sanctuary, Kalijai Temple, how to reach from Puri, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/chilika-lake-travel-guide",
          },
          keywords:
            "Chilika Lake, Odisha, Irrawaddy dolphins, Nalabana Bird Sanctuary, Ramsar wetland",
          about: {
            "@type": "Place",
            name: "Chilika Lake",
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
                name: "Chilika Lake",
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
    q: "How far is Chilika Lake from Puri and Bhubaneswar?",
    a: "Satapada, the main boat-safari access point, is roughly 50 km from Puri (about 1.5 hours by road) and roughly 100 km from Bhubaneswar — making it an easy day trip from Puri, or a slightly longer one from the capital.",
  },
  {
    q: "What is the best time for dolphin spotting?",
    a: "Irrawaddy dolphins can be spotted year-round near Satapada, though sighting odds vary by conditions on the day. Calmer water in the cooler months (October–February) generally offers better visibility.",
  },
  {
    q: "What is the best time for bird watching at Chilika?",
    a: "November to February is the peak migratory season, when hundreds of thousands of birds arrive at Nalabana Bird Sanctuary — by far the best window for serious birdwatching here.",
  },
  {
    q: "How much does a boat safari cost?",
    a: "Costs vary by boat size, group size, and route (dolphin-spotting, birding, or Kalijai Temple), so it's worth comparing a couple of registered operators at Satapada before booking rather than taking the first quote.",
  },
  {
    q: "Is Chilika Lake a day trip?",
    a: "Yes, for most visitors — a half-day to full-day boat safari from Puri covers the highlights well. A few lakeside resorts exist if you'd prefer to stay overnight and catch an early-morning safari.",
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
  { id: "introduction", title: "Asia's Largest Brackish Water Lagoon", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chilika Lake", level: 2 },
  { id: "things-to-do", title: "Dolphins, Birds & Kalijai Temple", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChilikaLakeGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Calm lake waters with hills in the distance, evoking the scale of Chilika Lake in Odisha"
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
                { label: "Chilika Lake", href: null },
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
                "Chilika Lake",
                "Odisha",
                "Irrawaddy Dolphins",
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
              Chilika Lake Guide: Dolphins, Birds & Boating
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Asia's largest brackish water lagoon, home to Irrawaddy
              dolphins and one of India's most significant wintering
              grounds for migratory birds.
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
                  text: "Chilika Lake, Odisha",
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
                  <h2>Asia's Largest Brackish Water Lagoon</h2>
                  <p>
                    <strong>Chilika Lake</strong> is Asia's largest
                    brackish water lagoon — and one of the largest in the
                    world — spanning across Puri, Khurda, and Ganjam
                    districts. It's recognised as a{" "}
                    <strong>Ramsar wetland</strong> of international
                    importance, and offers two of Odisha's best wildlife
                    experiences in one place.
                  </p>
                  <p>
                    The lake is one of the best places in India to spot{" "}
                    <strong>Irrawaddy dolphins</strong>, particularly around
                    Satapada, and it's a major wintering ground for
                    migratory birds — hundreds of thousands arrive between
                    November and February, concentrated especially at{" "}
                    <strong>Nalabana Bird Sanctuary</strong>, an island
                    within the lake itself.
                  </p>
                  <p>
                    Chilika Lake makes an easy day trip from{" "}
                    <Link href="/blog/puri-travel-guide">Puri</Link>, and
                    pairs naturally with a wider Golden Triangle trip
                    alongside{" "}
                    <Link href="/blog/bhubaneswar-travel-guide">
                      Bhubaneswar
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/konark-travel-guide">Konark</Link>.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌊</span> Chilika Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Odisha" },
                        {
                          icon: "🚤",
                          label: "Boat Access",
                          value: "Satapada",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🐬",
                          label: "Known For",
                          value: "Irrawaddy Dolphins",
                        },
                        {
                          icon: "🐦",
                          label: "Also",
                          value: "Nalabana Bird Sanctuary",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Puri",
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
                  <h2>Best Time to Visit Chilika Lake</h2>
                  <p>
                    The migratory bird calendar is the single biggest
                    factor in timing a Chilika visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "🐦",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Peak migratory bird season at Nalabana Bird Sanctuary, plus calm, comfortable conditions for dolphin-spotting boat safaris.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm — dolphins still visible",
                        text: "Migratory birds have largely departed, but dolphin sightings remain possible; heat builds through the day.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — rougher water",
                        text: "Heavier rain and choppier lake conditions can make boat safaris less comfortable or occasionally unavailable.",
                      },
                      {
                        season: "Year-round",
                        emoji: "🐬",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Dolphins possible anytime",
                        text: "Irrawaddy dolphins are resident year-round near Satapada, though sighting odds are generally best in calmer, cooler months.",
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
                    <strong>Our pick:</strong> November to February — the
                    only window that combines peak bird migration with the
                    calmest, most comfortable boating conditions.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chilika Lake</h2>
                  <ul>
                    <li>
                      <strong>From Puri:</strong> Roughly 50 km to Satapada,
                      about 1.5 hours by road — the most common and
                      convenient access point.
                    </li>
                    <li>
                      <strong>From Bhubaneswar:</strong> Roughly 100 km to
                      Satapada, about 2-2.5 hours by road.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Balugaon and Chilika railway
                      stations offer another access route to different parts
                      of the lake, less commonly used by casual visitors.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book your boat safari
                    through a registered operator at Satapada rather than
                    an informal tout — pricing is fairer and the boats are
                    better maintained.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Dolphins, Birds & Kalijai Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Wide lake waters evoking a Chilika Lake boat safari"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Dolphin-Spotting Boat Safaris</h3>
                  <p>
                    Boats head out from Satapada into the lake's deeper
                    channels, where Irrawaddy dolphins — a distinctive,
                    rounded-headed species — surface periodically. Patience
                    helps; sightings aren't guaranteed on any single trip
                    but are common over the course of a safari.
                  </p>
                  <h3>Nalabana Bird Sanctuary</h3>
                  <p>
                    An island within the lake that transforms into a
                    genuinely major birding destination during the
                    November-February migratory season, when hundreds of
                    thousands of birds arrive from as far as Central Asia
                    and Siberia.
                  </p>
                  <h3>Kalijai Temple</h3>
                  <p>
                    A small temple on an island within the lake, reached by
                    boat, and a notable pilgrimage stop — often combined
                    with a dolphin or birding safari for a fuller day on the
                    water.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Chilika Lake</h2>
                  <p>
                    A handful of lakeside resorts operate near Satapada, but
                    most visitors day-trip from Puri or Bhubaneswar.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic guesthouses in Satapada",
                          "Odisha Tourism lodges",
                          "Budget stays in Puri (day trip base)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Lakeside resorts near Satapada",
                          "Mid-range hotels in Puri",
                          "Business hotels in Bhubaneswar",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Premium lakeside resorts",
                          "Beach resorts in Puri",
                          "Boutique nature-focused stays",
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
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Depart from Puri",
                        color: "bg-amber-700",
                        activities: [
                          "Early drive to Satapada (~1.5 hrs)",
                          "Book a registered boat operator",
                          "Head out for dolphin spotting",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "On the Lake",
                        color: "bg-sky-600",
                        activities: [
                          "Boat safari to Nalabana Bird Sanctuary (Nov-Feb)",
                          "Optional stop at Kalijai Temple",
                          "Lunch at a lakeside eatery",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Return",
                        color: "bg-forest-600",
                        activities: [
                          "Drive back to Puri",
                          "Evening free for Puri Beach or the old town",
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
                    * See our{" "}
                    <Link href="/blog/puri-travel-guide">Puri guide</Link> for
                    the wider Golden Triangle circuit this pairs with.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat Near Chilika Lake</h2>
                  <ul>
                    <li>
                      <strong>Fresh fish and prawns:</strong> Chilika is a
                      major fishing lagoon, and lakeside eateries near
                      Satapada serve genuinely fresh catch.
                    </li>
                    <li>
                      <strong>Crab dishes:</strong> Local crab preparations
                      are a specialty worth trying near the lake.
                    </li>
                    <li>
                      <strong>Odia thali in Puri:</strong> For a fuller meal
                      before or after the day trip, Puri's restaurants offer
                      a wider spread.
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
                            "Boat safari (shared)",
                            "₹300",
                            "₹500",
                            "₹1,200",
                          ],
                          [
                            "Boat safari (private)",
                            "₹1,500",
                            "₹2,500",
                            "₹4,000",
                          ],
                          [
                            "Car hire from Puri (round trip)",
                            "₹1,800",
                            "₹2,500",
                            "₹4,000",
                          ],
                          ["Food (day trip)", "₹300", "₹700", "₹1,500"],
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
                    * Boat safari prices vary by operator, group size, and
                    route — compare a couple of registered operators before
                    booking.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Chilika Lake</h2>
                  <ul>
                    <li>
                      <strong>Book through a registered operator:</strong>{" "}
                      Compare pricing at Satapada rather than accepting the
                      first offer.
                    </li>
                    <li>
                      <strong>Go early morning:</strong> Calmer water and
                      better wildlife activity, both for dolphins and birds.
                    </li>
                    <li>
                      <strong>Bring binoculars:</strong> Especially valuable
                      for the Nalabana Bird Sanctuary during migratory
                      season.
                    </li>
                    <li>
                      <strong>Wear a hat and sunscreen:</strong> Boat safaris
                      offer little shade for a few hours on the water.
                    </li>
                    <li>
                      <strong>Combine with Puri:</strong> The two make a
                      natural day-trip pairing.
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
                          "Book with a registered boat operator",
                          "Go early morning for the best wildlife activity",
                          "Bring binoculars for bird watching",
                          "Visit Nov-Feb for peak migratory birds",
                          "Combine with a Puri day trip",
                          "Wear sun protection for the open boat",
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
                          "Book with unregistered touts without comparing prices",
                          "Expect guaranteed dolphin sightings on every trip",
                          "Visit outside Nov-Feb expecting peak bird numbers",
                          "Skip sun protection for a multi-hour boat trip",
                          "Rush the safari — patience improves sightings",
                          "Forget to check monsoon-season boat availability",
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
                    <strong>🗺️ Extend the trip:</strong> Chilika Lake pairs
                    naturally with{" "}
                    <Link href="/blog/puri-travel-guide">Puri</Link> and the
                    wider Golden Triangle circuit via{" "}
                    <Link href="/blog/bhubaneswar-travel-guide">
                      Bhubaneswar
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/konark-travel-guide">Konark</Link>. See
                    our full{" "}
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
                  "Chilika Lake",
                  "Odisha",
                  "Irrawaddy Dolphins",
                  "Bird Sanctuary",
                  "Off-beat",
                  "Wildlife",
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

              <RelatedPostsGrid currentSlug="chilika-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chilika-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
