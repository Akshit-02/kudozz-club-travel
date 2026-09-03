// src/app/blog/sepahijala-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sepahijala Wildlife Sanctuary: Safari & Tips",
  description:
    "Complete Sepahijala Wildlife Sanctuary guide — spectacled langur sightings, the botanical garden and lake, how to reach from Agartala, and a full visit plan.",
  keywords:
    "Sepahijala Wildlife Sanctuary travel guide, Sepahijala Tripura, spectacled langur, Phayre's leaf monkey, Bishalgarh, Sepahijala safari, how to reach Sepahijala, Tripura wildlife sanctuary",
  openGraph: {
    title: "Sepahijala Wildlife Sanctuary: Safari & Tips",
    description:
      "One of India's best places to spot the rare spectacled langur, plus a botanical garden, lake, and mini-zoo just outside Agartala — the complete Sepahijala guide.",
    url: "https://club.kudozz.in/blog/sepahijala-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green forest landscape, evoking Sepahijala Wildlife Sanctuary's forest habitat in Tripura",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sepahijala Wildlife Sanctuary: Safari & Tips",
    description:
      "One of India's best places to spot the rare spectacled langur, close enough to Agartala for an easy day trip — the complete Sepahijala guide.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sepahijala-travel-guide",
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
          headline: "Sepahijala Wildlife Sanctuary: Safari & Tips",
          description:
            "Complete Sepahijala Wildlife Sanctuary guide — spectacled langur sightings, the botanical garden and lake, how to reach from Agartala, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/sepahijala-travel-guide",
          },
          keywords:
            "Sepahijala, Tripura, spectacled langur, wildlife sanctuary, Bishalgarh, Agartala, safari",
          about: {
            "@type": "Place",
            name: "Sepahijala Wildlife Sanctuary",
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
                name: "Sepahijala Wildlife Sanctuary",
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
    q: "What is the best time for spectacled langur sightings at Sepahijala?",
    a: "Early morning, shortly after the sanctuary opens, when primates are most active. October to March also brings the most comfortable weather for a longer walk through the sanctuary.",
  },
  {
    q: "How far is Sepahijala from Agartala?",
    a: "Roughly 25 km, on the Agartala–Udaipur highway near Bishalgarh — one of the easiest and shortest wildlife excursions from the Tripura capital.",
  },
  {
    q: "Is Sepahijala a half-day or full-day trip?",
    a: "A half-day is enough to cover the botanical garden, lake, deer park, and a langur-spotting walk. A full day gives more time for a relaxed pace and better odds of good wildlife sightings.",
  },
  {
    q: "What animals can I see at Sepahijala?",
    a: "The sanctuary is best known for the rare spectacled langur (Phayre's leaf monkey), along with several other primate species, deer, and — rarely — clouded leopard. It also has a mini-zoo, crocodile breeding enclosure, and butterfly park alongside the forest habitat.",
  },
  {
    q: "Is Sepahijala good for families?",
    a: "Yes — with its botanical garden, deer park, lake boating, mini-zoo, and butterfly park alongside the genuine wildlife sanctuary areas, it's approachable for families and casual visitors, not just dedicated wildlife spotters.",
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
  { id: "introduction", title: "Home of the Spectacled Langur", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sepahijala", level: 2 },
  { id: "things-to-do", title: "Wildlife, Lake & Botanical Garden", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SepahijalaGuidePage() {
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
              alt="Green forest landscape, evoking Sepahijala Wildlife Sanctuary's forest habitat in Tripura"
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
                { label: "Sepahijala", href: null },
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
                "Sepahijala",
                "Bishalgarh",
                "Tripura",
                "Wildlife Safari",
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
              Sepahijala Wildlife Sanctuary: Safari & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of India's best places to spot the rare spectacled
              langur, plus a botanical garden and lake — all within an easy
              drive of Agartala.
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
                  text: "Bishalgarh, Tripura",
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
                  <h2>Home of the Spectacled Langur</h2>
                  <p>
                    <strong>Sepahijala Wildlife Sanctuary</strong> sits
                    roughly 25 km from{" "}
                    <Link href="/blog/agartala-travel-guide">Agartala</Link>{" "}
                    on the Agartala–Udaipur highway near Bishalgarh, spread
                    over about 18.5 sq km of forest in{" "}
                    <Link href="/blog/tripura-travel-guide">Tripura</Link>.
                    Established in 1972, it's best known for being one of
                    the finest places in India to spot the rare and elusive{" "}
                    <strong>spectacled langur</strong> (Phayre's leaf
                    monkey), and is home to a range of other primate
                    species too — among the highest primate diversity of
                    any Indian sanctuary.
                  </p>
                  <p>
                    What makes Sepahijala especially approachable is its
                    dual character: part genuine forest sanctuary, part
                    botanical garden and park, with a lake for boating, a
                    deer park, a small mini-zoo, a butterfly park, and a
                    crocodile breeding enclosure alongside the wilder
                    forested sections. It's a easy, low-effort excursion
                    that works equally well for serious wildlife spotters
                    and for families on a relaxed day out.
                  </p>
                  <p>
                    Given how close it sits to Agartala, Sepahijala is
                    typically the easiest wildlife stop on any Tripura
                    itinerary — see our full{" "}
                    <Link href="/blog/tripura-travel-guide">
                      Tripura travel guide
                    </Link>{" "}
                    for how it fits into a wider trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐒</span> Sepahijala at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Bishalgarh, Tripura",
                        },
                        {
                          icon: "🚗",
                          label: "From Agartala",
                          value: "~25 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🐒",
                          label: "Known For",
                          value: "Spectacled Langur",
                        },
                        {
                          icon: "📐",
                          label: "Area",
                          value: "~18.5 sq km",
                        },
                        {
                          icon: "📅",
                          label: "Established",
                          value: "1972",
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
                  <h2>Best Time to Visit Sepahijala</h2>
                  <p>
                    Both the season and the time of day shape how much
                    wildlife activity you're likely to see.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for walking through the sanctuary, with generally good visibility for spotting primates and other wildlife.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best for wildlife activity",
                        text: "Primates, including the spectacled langur, are most active shortly after the sanctuary opens — arrive as early as possible.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still workable",
                        text: "Manageable with an early visit, though midday heat can make a longer walk through the sanctuary less comfortable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but wet",
                        text: "The forest turns vividly green, but rain can disrupt walking trails and reduce overall wildlife visibility.",
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
                    <strong>Our pick:</strong> An October–March morning
                    visit, arriving as close to opening time as possible —
                    the combination gives the best odds of good primate
                    sightings in comfortable weather.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sepahijala</h2>
                  <p>
                    Sepahijala is one of the simplest wildlife excursions
                    near the Tripura capital — no long drive or river
                    transfer required.
                  </p>
                  <ul>
                    <li>
                      <strong>By road from Agartala:</strong> Roughly 25 km
                      on the Agartala–Udaipur highway near Bishalgarh — a
                      straightforward 40–60 minute drive by taxi or private
                      vehicle.
                    </li>
                    <li>
                      <strong>Shared transport:</strong> Shared autos and
                      buses ply this stretch of highway, though a private
                      vehicle gives far more flexibility for an early
                      arrival.
                    </li>
                    <li>
                      <strong>Combine en route:</strong> Sepahijala sits on
                      the road toward{" "}
                      <Link href="/blog/udaipur-tripura-travel-guide">
                        Udaipur
                      </Link>
                      , so it's easy to combine with a stop there if
                      continuing further south.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrive right at opening time
                    — primates, including the spectacled langur, are
                    noticeably more active in the early morning than later
                    in the day.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Wildlife, Lake & Botanical Garden</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forest habitat at Sepahijala Wildlife Sanctuary, Tripura"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Spotting the Spectacled Langur</h3>
                  <p>
                    The sanctuary's signature draw — a rare, distinctively
                    pale-ringed-eyed primate found in only a handful of
                    places in India. Sightings aren't guaranteed, but early
                    morning walks through the forested sections give the
                    best odds.
                  </p>
                  <h3>Boating on the Lake</h3>
                  <p>
                    An artificial lake within the sanctuary offers a
                    relaxed boating option — a gentle way to break up a
                    walking visit, especially for families.
                  </p>
                  <h3>Botanical Garden, Deer Park & Mini-Zoo</h3>
                  <p>
                    A botanical garden, deer park, small mini-zoo, and
                    butterfly park round out the sanctuary's more
                    park-like sections, along with a crocodile breeding
                    enclosure — easy, accessible stops that don't require
                    any real wildlife-spotting effort.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Sepahijala</h2>
                  <p>
                    Given its short distance from the capital, most
                    visitors stay in Agartala and day-trip to Sepahijala
                    rather than staying nearby — accommodation directly
                    around the sanctuary is limited.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses in Agartala",
                          "Tourist lodges, Agartala",
                          "Basic stays near Bishalgarh",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels, Agartala",
                          "Boutique stays, central Agartala",
                        ],
                      },
                      {
                        tier: "Practical Option",
                        icon: "🚗",
                        range: "Day trip",
                        picks: [
                          "Base in Agartala, day-trip out",
                          "Half-day or full-day visit",
                          "Combine with Udaipur en route",
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
                  <h2>Suggested Visit Plan (Half Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Wildlife & Botanical Garden",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive at opening time from Agartala",
                          "Walk the forested trails for langur sightings",
                          "Explore the botanical garden and deer park",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Lake & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Boating on the lake",
                          "Mini-zoo, butterfly park, crocodile enclosure",
                          "Return to Agartala, or continue toward Udaipur",
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
                    * With more time, continue on toward{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur
                    </Link>{" "}
                    for a fuller day combining wildlife and heritage
                    sightseeing.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Sepahijala</h2>
                  <ul>
                    <li>
                      <strong>Small stalls near the entrance:</strong> Basic
                      tea and snack stalls cluster around the sanctuary gate
                      — useful for a quick bite between sections.
                    </li>
                    <li>
                      <strong>Bishalgarh town:</strong> A short drive away,
                      with a wider range of simple local eateries.
                    </li>
                    <li>
                      <strong>Agartala:</strong> The fullest range of
                      restaurants is back in the capital, before or after
                      the trip.
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
                          ["Entry fee", "₹30", "₹30", "₹30"],
                          ["Camera/video fee", "₹20", "₹20", "₹20"],
                          [
                            "Round-trip transport from Agartala",
                            "₹600",
                            "₹1,200",
                            "₹2,500",
                          ],
                          ["Boating (per session)", "₹100", "₹200", "₹400"],
                          ["Food/day", "₹300", "₹600", "₹1,200"],
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
                    * Figures are per person, per day. This is one of the
                    most budget-friendly excursions on a Tripura itinerary.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Sepahijala</h2>
                  <ul>
                    <li>
                      <strong>Arrive early:</strong> Wildlife activity,
                      especially among primates, drops off noticeably later
                      in the day.
                    </li>
                    <li>
                      <strong>Keep noise down near primate areas:</strong>{" "}
                      Loud talking or sudden movement reduces the chance of
                      a good sighting.
                    </li>
                    <li>
                      <strong>Carry the entry and camera fees in cash:</strong>{" "}
                      Card payment isn't a reliable option at the gate.
                    </li>
                    <li>
                      <strong>Combine with other day trips:</strong>{" "}
                      Sepahijala's short distance from Agartala makes it
                      easy to pair with other nearby sights.
                    </li>
                    <li>
                      <strong>Bring binoculars if you have them:</strong>{" "}
                      Useful for spotting primates higher in the canopy.
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
                          "Arrive as close to opening time as possible",
                          "Keep quiet near primate-viewing areas",
                          "Carry cash for entry and camera fees",
                          "Bring binoculars for canopy sightings",
                          "Try the lake boating for a relaxed break",
                          "Combine with a stop toward Udaipur",
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
                          "Expect langur sightings later in the day",
                          "Make loud noise near the primate enclosures",
                          "Rely on card payment at the gate",
                          "Rush through the botanical garden",
                          "Skip the early morning window if it matters to you",
                          "Feed or approach the wildlife",
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
                    <strong>🗺️ Extend the trip:</strong> Sepahijala pairs
                    easily with{" "}
                    <Link href="/blog/agartala-travel-guide">Agartala</Link>{" "}
                    city sightseeing, or continue further along the same
                    highway to{" "}
                    <Link href="/blog/udaipur-tripura-travel-guide">
                      Udaipur
                    </Link>{" "}
                    for lakes and temple heritage. See our full{" "}
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
                  "Sepahijala",
                  "Bishalgarh",
                  "Tripura",
                  "Wildlife Safari",
                  "Spectacled Langur",
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

              <RelatedPostsGrid currentSlug="sepahijala-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sepahijala-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
