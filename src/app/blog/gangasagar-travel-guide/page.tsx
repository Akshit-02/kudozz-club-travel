// src/app/blog/gangasagar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Gangasagar Travel Guide: Mela, Temple & How to Reach",
  description:
    "Complete Gangasagar guide — Sagar Island, Kapil Muni Temple, the massive Gangasagar Mela at Makar Sankranti, how to reach via Kakdwip, and where to stay.",
  keywords:
    "Gangasagar, Sagar Island, Gangasagar Mela, Kapil Muni Temple, Makar Sankranti mela, Kakdwip, Muriganga river ferry, Gangasagar how to reach, Ganga Sagar pilgrimage, West Bengal pilgrimage",
  openGraph: {
    title: "Gangasagar Travel Guide: Mela, Temple & How to Reach",
    description:
      "Where the Ganga meets the Bay of Bengal — Kapil Muni Temple, the vast Gangasagar Mela at Makar Sankranti, and Sagar Island's quieter side beyond the crowds.",
    url: "https://club.kudozz.in/blog/gangasagar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Coastal river-meets-sea setting evocative of Gangasagar, where the Ganga meets the Bay of Bengal at Sagar Island, West Bengal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangasagar Travel Guide: Mela, Temple & How to Reach",
    description:
      "Kapil Muni Temple, the vast Gangasagar Mela, and the point where the Ganga meets the sea — the complete Gangasagar guide.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gangasagar-travel-guide",
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
          headline: "Gangasagar Travel Guide: Mela, Temple & How to Reach",
          description:
            "Complete Gangasagar guide — Sagar Island, Kapil Muni Temple, the massive Gangasagar Mela at Makar Sankranti, how to reach via Kakdwip, and where to stay.",
          image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/gangasagar-travel-guide",
          },
          keywords:
            "Gangasagar, Sagar Island, Gangasagar Mela, Kapil Muni Temple, Makar Sankranti, Kakdwip",
          about: {
            "@type": "Place",
            name: "Gangasagar (Sagar Island)",
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
                name: "Gangasagar",
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
    q: "What is Gangasagar famous for?",
    a: "Gangasagar (Sagar Island) sits at the point where the river Ganga meets the Bay of Bengal, considered one of the holiest confluences in Hindu tradition. It's home to the Kapil Muni Temple and hosts the Gangasagar Mela, one of the largest annual pilgrim gatherings in the world, held around Makar Sankranti in mid-January — second only to the Kumbh Mela in scale.",
  },
  {
    q: "How do I reach Gangasagar from Kolkata?",
    a: "The journey involves several legs: road from Kolkata to Kakdwip or Lot 8 jetty (roughly 2-2.5 hours), a ferry crossing of the Muriganga river to Kachuberia, and then a further road journey to Sagar/Gangasagar town. The full one-way trip typically takes 4-5 hours. There is no direct road bridge to the island.",
  },
  {
    q: "When is the Gangasagar Mela and how big is it?",
    a: "The Gangasagar Mela is held annually around Makar Sankranti, typically January 14-15, when pilgrims take a holy dip at the confluence believed to cleanse sins and grant moksha. Attendance regularly runs into the millions over the festival days, making it one of the largest religious gatherings on earth, comparable in scale to sections of the Kumbh Mela.",
  },
  {
    q: "Is Gangasagar worth visiting outside the mela?",
    a: "Yes. Outside the mid-January mela crowds, Sagar Island offers a far quieter experience — the Kapil Muni Temple without the crush, and a genuinely peaceful stretch of beach at the point where the Ganga meets the sea. October through February is a good window for a calmer visit.",
  },
  {
    q: "What is the significance of Kapil Muni Temple?",
    a: "The temple is dedicated to the sage Kapil Muni, associated in Hindu mythology with the story of King Bhagirath's penance to bring the Ganga down to earth to liberate his ancestors' souls — a story closely tied to Sagar Island itself as the place where that liberation is believed to have occurred.",
  },
  {
    q: "Is the ferry crossing to Sagar Island safe?",
    a: "Government-run ferries operate regularly across the Muriganga river and are generally reliable, though services can be affected by tides, weather, and, during the mela, extremely heavy passenger volume. Outside the mela period, the crossing is straightforward; during the mela, expect longer waits and larger vessels pressed into service.",
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
  { id: "introduction", title: "Where the Ganga Meets the Sea", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gangasagar", level: 2 },
  { id: "attractions", title: "Temple, Mela & Island", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GangasagarGuidePage() {
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
              src="/images/destinations/goa/hero.jpg"
              alt="Coastal river-meets-sea setting evocative of Gangasagar, where the Ganga meets the Bay of Bengal at Sagar Island, West Bengal"
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
                { label: "Gangasagar", href: null },
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
                "Gangasagar",
                "Sagar Island",
                "Gangasagar Mela",
                "Kapil Muni Temple",
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
              Gangasagar: Mela, Temple & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Where the Ganga meets the Bay of Bengal — the Kapil Muni Temple,
              one of the largest pilgrim gatherings on earth at Makar
              Sankranti, and a quiet island beach beyond the mela crowds.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sagar Island, South 24 Parganas",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>Where the Ganga Meets the Sea</h2>
                  <p>
                    <strong>Gangasagar</strong>, on <strong>Sagar
                    Island</strong> at the southernmost tip of the Ganga
                    delta, marks the exact point where the great river ends
                    its journey and merges with the Bay of Bengal. In Hindu
                    tradition, this confluence is considered one of the
                    holiest spots in the country — the saying{" "}
                    <em>"sab tirath baar baar, Gangasagar ek baar"</em>{" "}
                    ("all pilgrimages many times, but Gangasagar even once")
                    captures how central this single visit is held to be.
                  </p>
                  <p>
                    The island sits at the western edge of the vast{" "}
                    <Link href="/blog/sundarbans-travel-guide">
                      Sundarbans
                    </Link>{" "}
                    delta, south of Kolkata, reached only by a multi-leg
                    journey combining road travel and a river ferry crossing
                    — there's no direct road bridge. That remoteness makes
                    Gangasagar's scale during its main festival all the more
                    striking: for a few days each January, millions of
                    pilgrims converge on what is otherwise a modest, quiet
                    island community.
                  </p>
                  <p>
                    At its centre stands the <strong>Kapil Muni
                    Temple</strong>, and around it unfolds the{" "}
                    <strong>Gangasagar Mela</strong>, held at Makar Sankranti
                    in mid-January — one of the largest annual gatherings of
                    pilgrims anywhere in the world, ranking just behind the
                    Kumbh Mela in scale.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌊</span> Gangasagar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sagar Island, South 24 Parganas",
                        },
                        {
                          icon: "🚢",
                          label: "From Kolkata",
                          value: "~4-5 hr (road + ferry)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Feb; mela is mid-Jan",
                        },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "Kapil Muni Temple, Gangasagar Mela",
                        },
                        {
                          icon: "🕉️",
                          label: "Peak Event",
                          value: "Makar Sankranti (mid-Jan)",
                        },
                        {
                          icon: "🏖️",
                          label: "Also",
                          value: "Quiet island beach off-season",
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
                  <h2>Best Time to Visit Gangasagar</h2>
                  <p>
                    When to visit Gangasagar depends entirely on what kind of
                    experience you want — the mela crowds or the quiet
                    island beyond them.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mid-Jan",
                        emoji: "🕉️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Gangasagar Mela — the defining experience",
                        text: "Makar Sankranti draws millions of pilgrims for the holy dip at the confluence. Overwhelming crowds, but unmatched atmosphere — this is Gangasagar at its most authentic.",
                      },
                      {
                        season: "Oct – Feb (outside mela)",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Quiet visit — our pick for a calm trip",
                        text: "Cool, dry weather and a nearly empty temple and beach. The best window if you want to see Gangasagar without the mela crush.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, humid",
                        text: "Increasing heat and humidity make the island less comfortable, though it remains accessible and far less crowded.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain and rough river conditions can disrupt the ferry crossing; this delta region is also prone to cyclonic weather in parts of this window.",
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
                    <strong>Our pick:</strong> if the mela itself is the
                    point of your trip, plan mid-January around Makar
                    Sankranti and prepare for enormous crowds; otherwise,
                    any time between October and February gives you a
                    peaceful, uncrowded visit.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Gangasagar</h2>
                  <p>
                    There's no direct road connection to Sagar Island from{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link> —
                    reaching Gangasagar means combining road travel with a
                    river ferry crossing.
                  </p>
                  <ul>
                    <li>
                      <strong>Kolkata to Kakdwip / Lot 8:</strong> Road
                      journey of roughly 2-2.5 hours by car or bus to the
                      jetty at Kakdwip (also called Lot 8), the mainland
                      departure point for the ferry.
                    </li>
                    <li>
                      <strong>Ferry across the Muriganga river:</strong> A
                      government-run ferry crosses to Kachuberia on Sagar
                      Island, taking around 45 minutes to an hour depending
                      on tides and vessel.
                    </li>
                    <li>
                      <strong>Kachuberia to Gangasagar/Sagar town:</strong>{" "}
                      A further road leg of about 30-45 minutes by bus, taxi,
                      or shared vehicle covers the final stretch to the
                      temple and mela grounds.
                    </li>
                    <li>
                      <strong>Total journey time:</strong> Roughly 4-5 hours
                      one-way from Kolkata under normal conditions — expect
                      considerably longer during the mela, when road and
                      ferry traffic multiply.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> During the Gangasagar Mela,
                    the West Bengal government runs additional buses,
                    vessels, and helpline services for pilgrims — check
                    official mela transport arrangements before travelling,
                    as regular ferry schedules are heavily supplemented.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Temple, Mela & Island</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="Coastline where river meets sea, similar in character to Sagar Island's Gangasagar beach"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Kapil Muni Temple</h3>
                  <p>
                    The spiritual centre of Gangasagar, dedicated to the
                    sage Kapil Muni, tied in Hindu mythology to the legend of
                    King Bhagirath's penance to bring the river Ganga down
                    from the heavens and liberate the souls of his ancestors
                    — a liberation believed to have taken place at this very
                    confluence. The temple has been rebuilt several times
                    over the centuries due to coastal erosion, and remains
                    the focal point pilgrims circle toward before and after
                    their holy dip.
                  </p>
                  <h3>The Sangam (River-Sea Confluence)</h3>
                  <p>
                    The actual point where the Ganga meets the Bay of Bengal
                    is where pilgrims take their ritual dip, believed to
                    cleanse sins and aid spiritual liberation. Outside the
                    mela, this stretch of shoreline is calm and largely
                    empty — a striking contrast to its mid-January
                    transformation into one of the busiest patches of coast
                    in the country.
                  </p>
                  <h3>Gangasagar Mela</h3>
                  <p>
                    Held annually around Makar Sankranti (mid-January), the
                    mela transforms Sagar Island into a temporary city of
                    tents, kitchens, and medical camps to serve millions of
                    pilgrims arriving over just a few days. It is regularly
                    cited as the second-largest religious gathering in India
                    after the Kumbh Mela, with a similarly organised system
                    of government arrangements for crowd management, safety,
                    and sanitation.
                  </p>
                  <h3>Sagar Island's Quieter Side</h3>
                  <p>
                    Beyond the mela dates, Sagar Island offers a genuinely
                    peaceful side — a modest fishing and farming community,
                    long stretches of beach, and a slower pace that few
                    visitors associate with a place known primarily for its
                    festival crowds. It's also worth remembering the island
                    sits at the edge of the Sundarbans mangrove delta,
                    giving the whole area an ecological significance beyond
                    its religious one.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Gangasagar</h2>
                  <p>
                    Accommodation is simple and pilgrimage-oriented,
                    concentrated in Sagar town near the temple — and during
                    the mela, government-run tented camps supplement the
                    limited permanent lodging.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "⛺",
                        range: "₹300–₹1,000/night",
                        picks: [
                          "Government mela camps (seasonal)",
                          "Dharamshala-style pilgrim lodges",
                          "Basic guesthouses near the temple",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Private rooms with attached bath",
                          "Small hotels in Sagar town",
                          "Guesthouses with basic dining",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "🛏️",
                        range: "₹2,500–₹4,500+/night",
                        picks: [
                          "Better-appointed hotel rooms",
                          "Larger group-friendly accommodation",
                          "Stays with generator backup power",
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
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * During the mela, most pilgrims stay in the government's
                    tented camps or make it a long day trip rather than an
                    overnight stay — permanent accommodation is very
                    limited relative to the crowds.
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Journey & Temple Visit",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Kolkata to Kakdwip/Lot 8",
                          "Ferry crossing over the Muriganga to Kachuberia",
                          "Road transfer to Sagar/Gangasagar town, check in",
                          "Darshan at Kapil Muni Temple and the sangam",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Beach Time & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Morning walk along the quieter stretches of beach",
                          "Second visit to the temple if desired",
                          "Ferry and road journey back to Kolkata",
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
                    * Many pilgrims visiting outside the mela make it a very
                    long single-day trip from Kolkata; an overnight stay is
                    more comfortable and lets you see the sangam at both
                    sunrise and sunset. See our{" "}
                    <Link href="/blog/sundarbans-travel-guide">
                      Sundarbans guide
                    </Link>{" "}
                    if you'd like to extend the trip into the delta further
                    east.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Gangasagar</h2>
                  <ul>
                    <li>
                      <strong>Bhandara and prasad stalls near the temple:</strong>{" "}
                      Simple vegetarian meals, especially plentiful during
                      the mela when free community kitchens serve large
                      numbers of pilgrims.
                    </li>
                    <li>
                      <strong>Local eateries in Sagar town:</strong> Basic
                      Bengali food, including fresh fish given the island's
                      fishing community, available at modest prices.
                    </li>
                    <li>
                      <strong>Mela-season food stalls:</strong> During the
                      festival, temporary stalls multiply dramatically,
                      offering everything from tea and snacks to full meals
                      for the huge pilgrim population.
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
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                          ["Accommodation/night", "₹400", "₹1,500", "₹3,000"],
                          [
                            "Road + ferry (round trip)",
                            "₹600",
                            "₹1,200",
                            "₹2,500",
                          ],
                          ["Food/day", "₹250", "₹500", "₹1,000"],
                          ["Local transport/day", "₹100", "₹250", "₹500"],
                          ["Donations/offerings", "₹100+", "₹500+", "₹1,000+"],
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
                    * Figures are per person, per day (except road/ferry, a
                    round-trip figure from Kolkata). During the mela, many
                    costs drop toward the lower end thanks to free camps and
                    community kitchens, but transport takes much longer.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Gangasagar</h2>
                  <ul>
                    <li>
                      <strong>Plan around tide times for the ferry:</strong>{" "}
                      The Muriganga crossing depends on tidal conditions —
                      schedules can shift, so build in buffer time,
                      especially on a day-trip itinerary.
                    </li>
                    <li>
                      <strong>Expect extreme crowds during the mela:</strong>{" "}
                      If visiting for Makar Sankranti, prepare for very
                      large crowds, long queues, and a genuinely different
                      logistics experience than the rest of the year —
                      follow official crowd-management guidance closely.
                    </li>
                    <li>
                      <strong>Carry cash and basic medical supplies:</strong>{" "}
                      ATM access is very limited on the island, and during
                      the mela, medical camps are set up but can be
                      stretched thin — carry any personal medication you
                      need.
                    </li>
                    <li>
                      <strong>Start early on a day trip:</strong> Given the
                      4-5 hour one-way journey, an early morning departure
                      from Kolkata is essential if you're not staying
                      overnight.
                    </li>
                    <li>
                      <strong>Respect the ecological setting:</strong> Sagar
                      Island sits at the edge of the fragile Sundarbans
                      delta — avoid littering on the beach and follow any
                      posted environmental guidelines.
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
                          "Start very early if attempting a single-day trip",
                          "Check official mela transport arrangements in January",
                          "Carry enough cash for the whole journey",
                          "Build buffer time around the ferry's tidal schedule",
                          "Visit outside the mela for a quiet, uncrowded trip",
                          "Follow crowd-management guidance during Makar Sankranti",
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
                          "Assume a fixed ferry schedule without checking tides",
                          "Travel to the mela without checking crowd advisories",
                          "Rely on ATM access on the island",
                          "Underestimate the 4-5 hour one-way journey time",
                          "Litter on the beach or near the mangrove edges",
                          "Skip planning an overnight stay if you want a relaxed visit",
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
                    <strong>🗺️ Extend the trip:</strong> Sagar Island sits at
                    the edge of the{" "}
                    <Link href="/blog/sundarbans-travel-guide">
                      Sundarbans
                    </Link>{" "}
                    delta, making it a natural pairing for a longer trip, or
                    return to{" "}
                    <Link href="/blog/kolkata-travel-guide">Kolkata</Link>{" "}
                    for onward travel — see our full{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal travel guide
                    </Link>{" "}
                    for more pilgrimage and delta destinations across the
                    state.
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
                  "Gangasagar",
                  "Sagar Island",
                  "Gangasagar Mela",
                  "West Bengal",
                  "Kapil Muni Temple",
                  "Makar Sankranti",
                  "Pilgrimage",
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

              <RelatedPostsGrid currentSlug="gangasagar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gangasagar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
