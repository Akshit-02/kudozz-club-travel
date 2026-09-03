// src/app/blog/mahabalipuram-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mahabalipuram Travel Guide: Shore Temples & Tips",
  description:
    "Complete Mahabalipuram guide — the Shore Temple, Pancha Rathas, Arjuna's Penance, Krishna's Butterball, how to reach from Chennai, and a full visit plan.",
  keywords:
    "Mahabalipuram travel guide, Mamallapuram, Shore Temple, Pancha Rathas, Arjuna's Penance, Krishna's Butterball, UNESCO Tamil Nadu, how to reach Mahabalipuram, Pallava monuments",
  openGraph: {
    title: "Mahabalipuram Travel Guide: Shore Temples & Tips",
    description:
      "A UNESCO World Heritage cluster of 7th-century Pallava rock-cut monuments on the Bay of Bengal — the complete Mahabalipuram guide.",
    url: "https://club.kudozz.in/blog/mahabalipuram-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient South Indian temple architecture, evoking Mahabalipuram's Pallava-era Shore Temple and rock-cut monuments",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahabalipuram Travel Guide: Shore Temples & Tips",
    description:
      "A UNESCO World Heritage cluster of 7th-century Pallava rock-cut monuments on the Bay of Bengal — the complete Mahabalipuram guide.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mahabalipuram-travel-guide",
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
          headline: "Mahabalipuram Travel Guide: Shore Temples & Tips",
          description:
            "Complete Mahabalipuram guide — the Shore Temple, Pancha Rathas, Arjuna's Penance, Krishna's Butterball, how to reach from Chennai, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
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
            "@id": "https://club.kudozz.in/blog/mahabalipuram-travel-guide",
          },
          keywords:
            "Mahabalipuram, Mamallapuram, Shore Temple, Pallava dynasty, UNESCO World Heritage",
          about: {
            "@type": "Place",
            name: "Mahabalipuram",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tamil Nadu",
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
                name: "Tamil Nadu",
                item: "https://club.kudozz.in/blog/tamil-nadu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mahabalipuram",
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
    q: "How far is Mahabalipuram from Chennai?",
    a: "Roughly 60 km, about an hour to 90 minutes by road depending on traffic — one of the most accessible heritage day trips near Chennai.",
  },
  {
    q: "Is Mahabalipuram a day trip or worth an overnight stay?",
    a: "It works well as either. A focused day trip from Chennai covers the main monuments comfortably, but an overnight stay lets you enjoy the beach resorts and see the Shore Temple at both sunrise and sunset.",
  },
  {
    q: "What makes Mahabalipuram a UNESCO World Heritage Site?",
    a: "The Group of Monuments at Mahabalipuram, carved mostly in the 7th century under the Pallava dynasty, is recognised for its exceptional rock-cut architecture — including the Shore Temple, the Pancha Rathas monolithic temples, and the Arjuna's Penance bas-relief.",
  },
  {
    q: "What is the best time to visit Mahabalipuram?",
    a: "November to February offers the coolest, most comfortable coastal weather for exploring the monuments and beach.",
  },
  {
    q: "Is Mahabalipuram good for a beach stay too?",
    a: "Yes — beyond the heritage sites, Mahabalipuram has a range of beach resorts, making it a reasonable spot to combine sightseeing with some relaxed beach time.",
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
  { id: "introduction", title: "Mahabalipuram: Pallava Rock Art", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mahabalipuram", level: 2 },
  { id: "things-to-do", title: "Shore Temple & Rock-Cut Monuments", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MahabalipuramGuidePage() {
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
              src="/images/destinations/hampi/virupaksha.jpg"
              alt="Ancient South Indian temple architecture, evoking Mahabalipuram's Pallava-era Shore Temple and rock-cut monuments"
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
                { label: "Tamil Nadu", href: "/blog/tamil-nadu-travel-guide" },
                { label: "Mahabalipuram", href: null },
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
              {["Mahabalipuram", "Shore Temple", "UNESCO", "Tamil Nadu"].map(
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
              Mahabalipuram: Shore Temples & Rock Art Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A UNESCO World Heritage cluster of 7th-century Pallava
              monuments — a temple built on the beach, five chariots carved
              from single stones, and a boulder that defies gravity.
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
                  text: "Chengalpattu district, Tamil Nadu",
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
                  <h2>Mahabalipuram: Pallava Rock Art on the Coast</h2>
                  <p>
                    <strong>Mahabalipuram</strong> (also called Mamallapuram),
                    roughly 60 km south of{" "}
                    <Link href="/blog/chennai-travel-guide">Chennai</Link>,
                    is a UNESCO World Heritage Site famous for its 7th-century
                    Pallava dynasty rock-cut monuments — one of the most
                    concentrated clusters of ancient stone architecture
                    anywhere on India's east coast.
                  </p>
                  <p>
                    Its monuments range from a full structural temple built
                    directly on the beach to entire chariot-shaped temples
                    carved from single blocks of granite, alongside massive
                    open-air relief carvings and a boulder that appears to
                    defy gravity.
                  </p>
                  <p>
                    Given its proximity to Chennai, it's one of the easiest
                    and most rewarding heritage day trips in Tamil Nadu — and
                    a genuinely worthwhile overnight stop if you want to
                    linger on the coast.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Mahabalipuram at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Chengalpattu district, Tamil Nadu",
                        },
                        {
                          icon: "🚗",
                          label: "From Chennai",
                          value: "~60 km (1-1.5 hr)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Shore Temple, Pancha Rathas",
                        },
                        {
                          icon: "🏺",
                          label: "Era",
                          value: "Pallava Dynasty, 7th Century",
                        },
                        {
                          icon: "🎯",
                          label: "Status",
                          value: "UNESCO World Heritage Site",
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
                  <h2>Best Time to Visit Mahabalipuram</h2>
                  <p>
                    Coastal weather shapes the visiting experience — timing
                    determines whether you're comfortably exploring outdoor
                    monuments or wilting in the heat.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry coastal weather makes exploring the sun-exposed rock monuments genuinely pleasant.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — visit early morning only",
                        text: "Intense heat reflecting off stone monuments makes midday visits uncomfortable — go at dawn if you must visit in this window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌦️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Humid, occasional rain",
                        text: "Warm and humid with intermittent showers — manageable with flexible planning.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "💃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Dance Festival season",
                        text: "The Mahabalipuram Dance Festival stages classical performances against the Arjuna's Penance backdrop — a special time to visit if your dates align.",
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
                    dry coastal weather, ideal for a full day exploring the
                    sun-exposed monuments without discomfort.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mahabalipuram</h2>
                  <ul>
                    <li>
                      <strong>From Chennai:</strong> A straightforward
                      1-1.5 hour drive along the East Coast Road (ECR),
                      one of Tamil Nadu's most scenic coastal drives.
                    </li>
                    <li>
                      <strong>By bus:</strong> Regular state and private
                      buses connect Chennai to Mahabalipuram.
                    </li>
                    <li>
                      <strong>Combining with Chennai:</strong> Most visitors
                      base themselves in Chennai and treat this as a day
                      trip, though staying overnight lets you enjoy the
                      coast at a slower pace.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Start early from Chennai to
                    reach Mahabalipuram by mid-morning — you'll beat both the
                    heat and the tour-bus crowds at Arjuna's Penance.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Shore Temple & Rock-Cut Monuments</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Ancient stone temple ruins, evoking Mahabalipuram's Pancha Rathas and rock-cut monument complex"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Shore Temple</h3>
                  <p>
                    A structural stone temple built directly on the beach,
                    among the oldest structural (as opposed to purely
                    rock-cut) temples in South India — its silhouette against
                    the Bay of Bengal is Mahabalipuram's most photographed
                    image.
                  </p>
                  <h3>Pancha Rathas</h3>
                  <p>
                    Five monolithic temples ("Five Chariots"), each carved
                    from a single block of granite in a distinct
                    architectural style — a remarkable demonstration of
                    Pallava stone-carving skill.
                  </p>
                  <h3>Arjuna's Penance</h3>
                  <p>
                    A massive open-air bas-relief carved into a rock face,
                    depicting a scene from the Mahabharata (or, by another
                    reading, the descent of the Ganges) — one of the largest
                    rock reliefs of its kind in the world.
                  </p>
                  <h3>Krishna's Butterball & Tiger Cave</h3>
                  <p>
                    Krishna's Butterball is a giant boulder that appears to
                    precariously balance on a sloped surface without
                    rolling — a genuine geological curiosity and popular
                    photo spot. The Tiger Cave, a rock-cut shrine with
                    carved tiger heads, sits a short distance from the main
                    town.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mahabalipuram</h2>
                  <p>
                    Mahabalipuram has a genuine range of beach resorts and
                    budget stays, making it comfortable for both a day trip
                    and an overnight visit.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Backpacker guesthouses near the beach",
                          "Budget lodges in the main town",
                          "Basic beach-view rooms",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Beach resorts along ECR",
                          "Mid-range hotels near the monuments",
                          "Boutique coastal cottages",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌅",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Premium beach resorts",
                          "Luxury heritage-style properties",
                          "Full-board coastal retreats",
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
                        day: "Day 1",
                        title: "Monuments Circuit",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Shore Temple and beachfront",
                          "Late morning: Pancha Rathas",
                          "Afternoon: Arjuna's Penance and Krishna's Butterball",
                        ],
                      },
                      {
                        day: "Day 2 (optional)",
                        title: "Coast & Slow Travel",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Tiger Cave and quieter corners",
                          "Afternoon: Beach time",
                          "Evening: Sunset at the Shore Temple",
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
                    * A single focused day trip from{" "}
                    <Link href="/blog/chennai-travel-guide">Chennai</Link>{" "}
                    covers the essentials; an overnight lets you see the
                    Shore Temple at sunrise and sunset both.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Mahabalipuram</h2>
                  <ul>
                    <li>
                      <strong>Beachside shacks:</strong> Fresh seafood is
                      the highlight here — grilled fish and prawns at casual
                      beachfront spots.
                    </li>
                    <li>
                      <strong>Backpacker cafés:</strong> A cluster of cafés
                      near the monuments serve a mix of Tamil and
                      traveler-friendly Western dishes.
                    </li>
                    <li>
                      <strong>Local Tamil food:</strong> Simple, authentic
                      thalis and dosas are widely available in the main
                      town.
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
                            "₹1,500",
                            "₹4,000",
                            "₹9,000",
                          ],
                          ["Food/day", "₹500", "₹1,000", "₹2,200"],
                          [
                            "Taxi from Chennai (round trip)",
                            "₹2,000",
                            "₹3,000",
                            "₹4,500",
                          ],
                          ["Monument entry fees", "₹100", "₹100", "₹100"],
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
                    * Figures are per person, per day (except the round-trip
                    taxi, best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mahabalipuram</h2>
                  <ul>
                    <li>
                      <strong>Go early:</strong> Arrive by mid-morning to
                      beat both the heat and tour-bus crowds at Arjuna's
                      Penance.
                    </li>
                    <li>
                      <strong>Wear sturdy footwear:</strong> Watch your
                      footing on the rock carvings and uneven stone
                      surfaces.
                    </li>
                    <li>
                      <strong>Combine with Chennai:</strong> Whether as a
                      day trip or overnight, it pairs naturally with a
                      Chennai visit.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> Most
                      monuments are fully exposed to the sun with little
                      shade.
                    </li>
                    <li>
                      <strong>Hire a guide:</strong> The mythology and
                      history behind the carvings is easy to miss without
                      context — a local guide adds real value.
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
                          "Arrive early to beat heat and crowds",
                          "Hire a guide for historical context",
                          "Carry water and sun protection",
                          "Try fresh seafood at a beach shack",
                          "Watch your footing on the rock carvings",
                          "Combine with a Chennai visit",
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
                          "Visit at midday in peak summer",
                          "Climb on the monuments beyond marked areas",
                          "Rush through without a guide",
                          "Skip sun protection — there's little shade",
                          "Expect swimmable beaches right at the sites",
                          "Forget to check Dance Festival dates in Dec-Jan",
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
                    Mahabalipuram with{" "}
                    <Link href="/blog/kanchipuram-travel-guide">
                      Kanchipuram
                    </Link>{" "}
                    for a fuller heritage circuit, or base yourself in{" "}
                    <Link href="/blog/chennai-travel-guide">Chennai</Link>.
                    See our full{" "}
                    <Link href="/blog/tamil-nadu-travel-guide">
                      Tamil Nadu travel guide
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
                {["Mahabalipuram", "Shore Temple", "Tamil Nadu", "UNESCO"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="mahabalipuram-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mahabalipuram-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
