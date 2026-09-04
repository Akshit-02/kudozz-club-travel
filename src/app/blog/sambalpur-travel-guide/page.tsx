// src/app/blog/sambalpur-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sambalpur Guide: Hirakud Dam & Sarees",
  description:
    "Complete Sambalpur guide — the Hirakud Dam reservoir, Sambalpuri ikat sarees and where to buy them, Samaleswari Temple, Debrigarh Wildlife Sanctuary, how to reach from Bhubaneswar, and a full visit plan.",
  keywords:
    "Sambalpur travel guide, Hirakud Dam, Sambalpuri saree, Sambalpuri ikat, Samaleswari Temple, Debrigarh Wildlife Sanctuary, how to reach Sambalpur, western Odisha tourism, Mahanadi river",
  openGraph: {
    title: "Sambalpur Guide: Hirakud Dam & Sarees",
    description:
      "One of the world's longest earthen dams, and the heart of India's ikat-weaving tradition — the complete guide to Sambalpur.",
    url: "https://club.kudozz.in/blog/sambalpur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/kerala/alleppey.jpg",
        width: 1200,
        height: 630,
        alt: "Large reservoir with calm water, evoking Sambalpur's Hirakud Dam and its vast Mahanadi reservoir",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sambalpur Guide: Hirakud Dam & Sarees",
    description:
      "One of the world's longest earthen dams, and the home of Sambalpuri ikat weaving — the complete Sambalpur guide.",
    images: ["/images/destinations/kerala/alleppey.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sambalpur-travel-guide",
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
          headline: "Sambalpur Guide: Hirakud Dam & Sarees",
          description:
            "Complete Sambalpur guide — the Hirakud Dam reservoir, Sambalpuri ikat sarees and where to buy them, Samaleswari Temple, Debrigarh Wildlife Sanctuary, how to reach from Bhubaneswar, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/kerala/alleppey.jpg",
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
            "@id": "https://club.kudozz.in/blog/sambalpur-travel-guide",
          },
          keywords:
            "Sambalpur, Hirakud Dam, Odisha, Sambalpuri sarees, western Odisha",
          about: {
            "@type": "Place",
            name: "Sambalpur",
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
                name: "Sambalpur",
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
    q: "What is a Sambalpuri saree and what makes it distinctive?",
    a: "Sambalpuri sarees are handwoven using a resist-dyeing technique known as ikat, where yarns are tie-dyed before weaving to create intricate, slightly blurred-edge patterns — a labor-intensive craft that has made Sambalpur one of India's most respected textile centers.",
  },
  {
    q: "How far is Sambalpur from Bhubaneswar?",
    a: "Roughly 320 km, a 6-7 hour drive or a comparable rail journey. It's a genuinely long trip given western Odisha's distance from the coast, so plan for at least an overnight stay rather than a rushed day trip.",
  },
  {
    q: "Is the Hirakud Dam worth the journey?",
    a: "Yes, for anyone interested in engineering scale or wanting a genuine western-Odisha detour — Hirakud is one of the longest earthen dams in the world, and the reservoir it creates is vast enough to feel more like an inland sea than a typical dam lake.",
  },
  {
    q: "What is the best time to visit Sambalpur?",
    a: "October to February offers the most comfortable weather for sightseeing and reservoir viewpoints. Summers (April-June) get very hot in this part of interior Odisha.",
  },
  {
    q: "Where can I buy authentic Sambalpuri textiles?",
    a: "Seek out handloom cooperatives or weaver workshops rather than only mass-market shops — several government emporiums and weaving clusters around Sambalpur let you see the ikat-dyeing and weaving process directly and buy from the source.",
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
  { id: "introduction", title: "Odisha's Dam & Weaving Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sambalpur", level: 2 },
  { id: "things-to-do", title: "Hirakud Dam, Sarees & Temples", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SambalpurGuidePage() {
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
              src="/images/destinations/kerala/alleppey.jpg"
              alt="Large reservoir with calm water, evoking Sambalpur's Hirakud Dam and its vast Mahanadi reservoir"
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
                { label: "Sambalpur", href: null },
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
              {["Sambalpur", "Hirakud Dam", "Sambalpuri Sarees", "Western Odisha"].map(
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
              Sambalpur: Hirakud Dam & Ikat Weaving Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of the world's longest earthen dams, and a city where the
              looms have been running for centuries — the complete guide to
              western Odisha's dam-and-textile capital.
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
                  text: "Sambalpur, Odisha",
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
                  <h2>Odisha's Dam & Weaving Capital</h2>
                  <p>
                    <strong>Sambalpur</strong>, in western Odisha, is built
                    around two very different claims to fame. The first is
                    engineering: the{" "}
                    <strong>Hirakud Dam</strong>, built across the Mahanadi
                    river, is one of the longest earthen dams in the world,
                    holding back a reservoir so vast it feels closer to an
                    inland sea than a typical dam lake.
                  </p>
                  <p>
                    The second is craft. Sambalpur is the heart of{" "}
                    <strong>Sambalpuri</strong> textile tradition —
                    handwoven ikat sarees and fabric produced using a
                    resist-dyeing technique that yields intricate,
                    slightly blurred-edge patterns found nowhere else in
                    quite the same form. It's one of India's most
                    respected handloom traditions, and Sambalpur is where
                    to see it made, not just sold.
                  </p>
                  <p>
                    Add the <strong>Samaleswari Temple</strong>, the
                    city's presiding shrine, and{" "}
                    <strong>Debrigarh Wildlife Sanctuary</strong> along
                    the reservoir's edge, and Sambalpur makes a genuine
                    (if long) detour into western Odisha for travelers
                    who've already covered the coastal Puri-Konark-
                    Bhubaneswar circuit.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🧵</span> Sambalpur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Odisha" },
                        {
                          icon: "🚉",
                          label: "Nearest Hub",
                          value: "Bhubaneswar (~320 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Hirakud Dam, Ikat Sarees",
                        },
                        {
                          icon: "🏞️",
                          label: "Nearby",
                          value: "Debrigarh Sanctuary",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,000",
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
                  <h2>Best Time to Visit Sambalpur</h2>
                  <p>
                    Interior western Odisha runs hotter and drier than the
                    coast, which sharpens the seasonal contrast here.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and comfortable for reservoir viewpoints, temple visits, and time spent with weavers.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🔥",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — avoid if possible",
                        text: "Western Odisha's interior heat climbs steeply, making outdoor sightseeing genuinely uncomfortable by midday.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — full reservoir",
                        text: "The Hirakud reservoir fills dramatically, though rain can disrupt travel and outdoor plans.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Festival season",
                        text: "Local festivals and the winter weaving season both make this the liveliest window to visit.",
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
                    <strong>Our pick:</strong> November to February — cool,
                    dry weather that makes both the dam viewpoint and a
                    slower morning with weavers genuinely enjoyable.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sambalpur</h2>
                  <p>
                    Sambalpur sits deep in western Odisha, a genuinely long
                    trip from the coastal Bhubaneswar-Puri-Konark circuit —
                    plan accordingly.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Sambalpur has its own
                      railway station with regular connections to
                      Bhubaneswar and Kolkata — the most comfortable option
                      for the long journey.
                    </li>
                    <li>
                      <strong>By road:</strong> Roughly 320 km from
                      Bhubaneswar, a 6-7 hour drive — treat this as an
                      overnight trip rather than a rushed day excursion.
                    </li>
                    <li>
                      <strong>By air:</strong> The nearest airport with
                      meaningful connectivity is Bhubaneswar; Jharsuguda
                      airport, closer to Sambalpur, has more limited
                      flight options.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given the distance from
                    Bhubaneswar, combine Sambalpur with Debrigarh Wildlife
                    Sanctuary or a wider western Odisha itinerary rather
                    than treating it as a standalone weekend trip.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Hirakud Dam, Sarees & Temples</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Reservoir and calm water near Sambalpur, Odisha"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Hirakud Dam & Reservoir</h3>
                  <p>
                    Built across the Mahanadi, Hirakud is one of the
                    longest earthen dams in the world, and the reservoir
                    it holds back is enormous — a genuine feat of
                    engineering scale that's easy to underestimate until
                    you're standing on the embankment looking out over the
                    water.
                  </p>
                  <h3>Sambalpuri Ikat Weaving</h3>
                  <p>
                    Sambalpur's handloom clusters and weaver cooperatives
                    are where the region's famous ikat sarees are actually
                    made — tie-dyeing the yarn before weaving to create
                    those distinctive blurred-edge patterns. Seeing the
                    process firsthand, and buying directly from weavers or
                    cooperatives, is one of the most rewarding things to
                    do here.
                  </p>
                  <h3>Samaleswari Temple</h3>
                  <p>
                    The city's presiding shrine, dedicated to the goddess
                    from whom Sambalpur takes its name — a significant
                    local pilgrimage site and a good stop for
                    understanding the city's identity beyond the dam and
                    the looms.
                  </p>
                  <h3>Debrigarh Wildlife Sanctuary</h3>
                  <p>
                    A forested sanctuary along the reservoir's edge,
                    worth a visit for anyone with an extra day and an
                    interest in extending their trip into nature.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Sambalpur</h2>
                  <p>
                    Accommodation is functional and city-based rather than
                    resort-style — most visitors stay in Sambalpur town
                    itself.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses near the railway station",
                          "Simple lodges in the town center",
                          "OTDC-style budget stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels near the city center",
                          "Reservoir-view properties near Hirakud",
                          "Standard 3-star chains",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌊",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium business hotels",
                          "Larger chain properties in Sambalpur",
                          "Full-service stays near the reservoir",
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
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Hirakud Dam & Samaleswari Temple",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Hirakud Dam viewpoint and reservoir",
                          "Evening at Samaleswari Temple",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Weaving Villages & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Visit a Sambalpuri weaving cooperative",
                          "Shop for authentic ikat textiles",
                          "Optional Debrigarh Sanctuary stop, then departure",
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
                  <h2>Where to Eat in Sambalpur</h2>
                  <ul>
                    <li>
                      <strong>Odia thalis:</strong> Simple, home-style
                      Odia vegetarian and fish thalis are widely available
                      and a genuine way to eat like a local.
                    </li>
                    <li>
                      <strong>Local sweets:</strong> Chhena-based sweets
                      (in the same family as Odisha's famous rasgulla)
                      show up in most local sweet shops.
                    </li>
                    <li>
                      <strong>Riverside stalls:</strong> Simple tea and
                      snack stalls near the reservoir are useful for a
                      quick break between sightseeing stops.
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
                          ["Accommodation/night", "₹1,200", "₹3,000", "₹6,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹800",
                            "₹2,000",
                          ],
                          ["Textile shopping", "Varies", "₹2,000+", "₹5,000+"],
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
                    * Excludes travel to Sambalpur. Textile shopping can
                    vary enormously depending on the piece — genuine
                    handwoven ikat sarees command a real premium over
                    machine-made imitations.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Sambalpur</h2>
                  <ul>
                    <li>
                      <strong>Buy from weavers or cooperatives:</strong>{" "}
                      Seek out genuine handloom cooperatives rather than
                      only mass-market shops for authentic Sambalpuri
                      textiles.
                    </li>
                    <li>
                      <strong>Plan for the distance:</strong> This is a
                      long journey from Bhubaneswar — budget for an
                      overnight trip rather than a rushed day visit.
                    </li>
                    <li>
                      <strong>Visit the dam in clear weather:</strong> The
                      reservoir viewpoint is far more rewarding on a clear
                      day than a hazy one.
                    </li>
                    <li>
                      <strong>Combine with Debrigarh:</strong> If you have
                      an extra day, the wildlife sanctuary makes a natural
                      nature-focused extension.
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
                          "Visit a weaving cooperative to see ikat made firsthand",
                          "Time the dam visit for clear weather",
                          "Plan for an overnight trip given the distance",
                          "Try Odia thalis at a local eatery",
                          "Ask weavers about the tie-dye process",
                          "Combine with Debrigarh if you have extra time",
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
                          "Rush the long trip from Bhubaneswar in a single day",
                          "Assume every roadside shop sells authentic handloom",
                          "Visit in peak summer heat (Mar-May)",
                          "Skip the weaving villages for the dam alone",
                          "Expect Puri-level tourist infrastructure",
                          "Forget to check reservoir water levels by season",
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
                    <strong>🗺️ Extend the trip:</strong> Sambalpur pairs
                    well with a wider western Odisha itinerary. See our
                    full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
                    </Link>{" "}
                    for the coastal Puri-Konark-Bhubaneswar circuit.
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
                  "Sambalpur",
                  "Hirakud Dam",
                  "Odisha",
                  "Sambalpuri Sarees",
                  "Ikat Weaving",
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

              <RelatedPostsGrid currentSlug="sambalpur-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sambalpur-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
