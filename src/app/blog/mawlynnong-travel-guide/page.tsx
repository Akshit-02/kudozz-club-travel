// src/app/blog/mawlynnong-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mawlynnong Guide: India's Cleanest Village",
  description:
    "Complete Mawlynnong guide — Asia's Cleanest Village, its community-driven cleanliness culture, a living root bridge, the Sky View bamboo tower, how to reach from Shillong, and a full visit plan.",
  keywords:
    "Mawlynnong travel guide, Asia's Cleanest Village, Mawlynnong Meghalaya, living root bridge, Sky View tower, East Khasi Hills, how to reach Mawlynnong, Mawlynnong homestay",
  openGraph: {
    title: "Mawlynnong Guide: India's Cleanest Village",
    description:
      "A community that has kept its village spotless for two decades, with a living root bridge and a bamboo tower looking toward Bangladesh — the complete Mawlynnong guide.",
    url: "https://club.kudozz.in/blog/mawlynnong-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Lush green hillside village setting, evoking Mawlynnong's forested East Khasi Hills landscape",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mawlynnong Guide: India's Cleanest Village",
    description:
      "Community-driven cleanliness, a living root bridge, and a bamboo tower with views toward Bangladesh — the complete Mawlynnong guide.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mawlynnong-travel-guide",
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
          headline: "Mawlynnong Guide: India's Cleanest Village",
          description:
            "Complete Mawlynnong guide — Asia's Cleanest Village, its community-driven cleanliness culture, a living root bridge, the Sky View bamboo tower, how to reach from Shillong, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/mawlynnong-travel-guide",
          },
          keywords:
            "Mawlynnong, Asia's Cleanest Village, Meghalaya, living root bridge, East Khasi Hills",
          about: {
            "@type": "Place",
            name: "Mawlynnong",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mawlynnong",
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
    q: "Why is Mawlynnong called the cleanest village in Asia?",
    a: "Discover India magazine awarded Mawlynnong the title of Asia's Cleanest Village in 2003, largely for its community-driven upkeep — collective sweeping, handmade bamboo dustbins placed throughout the village, and a strong local culture of environmental stewardship that has been sustained for over two decades, not just a one-off award.",
  },
  {
    q: "How is the cleanliness actually maintained?",
    a: "It's a genuine community effort — villagers take turns sweeping common areas, waste is collected in distinctive handmade bamboo dustbins found along every path, and the practice is instilled from childhood, making it a living culture rather than a maintained show for visitors.",
  },
  {
    q: "How far is Mawlynnong from Shillong?",
    a: "Roughly 3 to 3.5 hours by road, making it a fairly long day trip — many visitors prefer an overnight homestay to avoid rushing the return journey.",
  },
  {
    q: "Is a homestay available in Mawlynnong?",
    a: "Yes, and it's genuinely the highlight of a fuller visit — homestays let you engage directly with the community responsible for the village's reputation, in a way a rushed day trip cannot.",
  },
  {
    q: "Can you see Bangladesh from the Sky View tower?",
    a: "On clear days, yes — the bamboo Sky View tower offers elevated views that extend toward the Bangladesh plains, given the village's proximity to the international border.",
  },
  {
    q: "What is the best time to visit Mawlynnong?",
    a: "October to April offers the clearest skies for border views from the Sky View tower and the most comfortable walking conditions around the village.",
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
  { id: "introduction", title: "Asia's Cleanest Village", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mawlynnong", level: 2 },
  { id: "things-to-do", title: "Cleanliness Culture, Root Bridge & Sky View", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MawlynnongGuidePage() {
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
              alt="Lush green hillside village setting, evoking Mawlynnong's forested East Khasi Hills landscape"
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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Mawlynnong", href: null },
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
                "Mawlynnong",
                "Cleanest Village",
                "Meghalaya",
                "East Khasi Hills",
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
              Mawlynnong Guide: India&apos;s Cleanest Village
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A village that has kept itself spotless for two decades
              through nothing but community habit, a living root bridge
              tucked among the trees, and a bamboo tower with a view all
              the way to Bangladesh.
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
                  text: "East Khasi Hills, Meghalaya",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.d}
                    />
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
                  <h2>Asia&apos;s Cleanest Village</h2>
                  <p>
                    <strong>Mawlynnong</strong>, a small village in East
                    Khasi Hills district, earned the title of{" "}
                    <strong>Asia&apos;s Cleanest Village</strong> from
                    Discover India magazine back in 2003 — an award that put
                    this otherwise modest village firmly on the tourist map,
                    and one it has kept living up to ever since.
                  </p>
                  <p>
                    The cleanliness here isn&apos;t maintained for
                    visitors&apos; benefit or as a one-off show — it&apos;s a
                    genuine, sustained community effort. Villagers take turns
                    sweeping common paths, and distinctive handmade bamboo
                    dustbins line every walkway, part of an environmental
                    stewardship culture instilled from childhood.
                  </p>
                  <p>
                    Beyond the cleanliness itself, Mawlynnong has a living
                    root bridge within the village and the{" "}
                    <strong>Sky View</strong> bamboo tower, a viewing
                    platform that on clear days looks all the way into
                    neighbouring Bangladesh, given the village&apos;s close
                    proximity to the border.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌿</span> Mawlynnong at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "East Khasi Hills, Meghalaya",
                        },
                        {
                          icon: "🕒",
                          label: "From Shillong",
                          value: "~3–3.5 hrs drive",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🏆",
                          label: "Known For",
                          value: "Cleanest Village in Asia",
                        },
                        {
                          icon: "🌉",
                          label: "Also Here",
                          value: "Living Root Bridge",
                        },
                        {
                          icon: "🇧🇩",
                          label: "Border View",
                          value: "Sky View Tower",
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
                  <h2>Best Time to Visit Mawlynnong</h2>
                  <p>
                    Timing here matters most for visibility from the Sky
                    View tower and for comfortable walking around the
                    village.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies give the best odds of seeing across into Bangladesh from the Sky View tower, and paths are dry and easy to walk.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pre-monsoon, humid",
                        text: "Warm and increasingly humid ahead of the monsoon, though the village and root bridge are still comfortably walkable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "Meghalaya's monsoon is intense here too; paths get slippery and border views from Sky View are usually obscured by haze.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🍃",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Coolest, clearest window",
                        text: "The most reliably clear stretch of the year, ideal for both village walks and the best possible Sky View outlook.",
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
                    clearest window of the year for both the village walk
                    and the best possible view from Sky View.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mawlynnong</h2>
                  <ul>
                    <li>
                      <strong>From Shillong:</strong> Roughly 90 km, about
                      3–3.5 hours by road — a fairly long day trip, best
                      started early.
                    </li>
                    <li>
                      <strong>Via Dawki:</strong> Mawlynnong can be combined
                      with a Dawki river visit given their relative
                      proximity in the same East Khasi Hills border region.
                    </li>
                    <li>
                      <strong>By taxi/shared vehicle:</strong> Most visitors
                      arrange a taxi or join a shared tour from Shillong,
                      since public transport options are limited this far
                      out.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given the drive length,
                    consider an overnight homestay rather than a rushed
                    same-day return — it also gives you a genuine reason to
                    engage with the community behind the village&apos;s
                    reputation.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Cleanliness Culture, Root Bridge & Sky View</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Green hillside village lanes, evoking Mawlynnong's spotless walking paths"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Cleanliness Culture</h3>
                  <p>
                    Walk the village and the cleanliness is immediately
                    obvious — swept paths, flowering plants along every
                    lane, and handmade bamboo dustbins placed at regular
                    intervals, a small but telling detail of how seriously
                    the community treats its shared spaces.
                  </p>
                  <h3>The Living Root Bridge</h3>
                  <p>
                    Mawlynnong has its own living root bridge, formed by
                    training the aerial roots of rubber fig trees across a
                    stream over years — a smaller, quieter counterpart to
                    the more famous double-decker bridge at Nongriat.
                  </p>
                  <h3>Sky View Bamboo Tower</h3>
                  <p>
                    A tall bamboo viewing tower rises above the treeline,
                    offering sweeping views over the surrounding hills and,
                    on clear days, out toward the plains of Bangladesh —
                    the village&apos;s single best vantage point.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mawlynnong</h2>
                  <p>
                    Village homestays are the standout accommodation option
                    here, letting you experience the community&apos;s daily
                    rhythm firsthand rather than just passing through.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏡",
                        range: "₹800–₹1,500/night",
                        picks: [
                          "Village homestays",
                          "Basic guesthouses",
                          "Family-run stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Comfortable homestays",
                          "Small resorts nearby",
                          "Bamboo cottage stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌳",
                        range: "₹4,000–₹7,000+/night",
                        picks: [
                          "Premium eco-cottages",
                          "Nature resorts en route",
                          "Full-board village stays",
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
                    A homestay here isn&apos;t just about convenience — it
                    directly supports the community stewardship that earned
                    Mawlynnong its reputation in the first place.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    A day trip from Shillong works, but an overnight
                    homestay gives you a much fuller experience of the
                    village.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Option A",
                        title: "Day Trip from Shillong",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Shillong",
                          "Walk the village, living root bridge, Sky View tower",
                          "Return to Shillong by evening",
                        ],
                      },
                      {
                        day: "Option B",
                        title: "Overnight Homestay",
                        color: "bg-sky-600",
                        activities: [
                          "Arrive by afternoon, settle into a homestay",
                          "Sunset at Sky View tower",
                          "Morning village walk before heading onward",
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
                    * Combine with other East Khasi Hills border-region
                    stops if time allows.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Mawlynnong</h2>
                  <ul>
                    <li>
                      <strong>Homestay meals:</strong> Most visitors eat
                      what their homestay hosts prepare — simple, authentic
                      Khasi cooking.
                    </li>
                    <li>
                      <strong>Khasi cuisine:</strong> Expect rice, local
                      greens, and pork or fish preparations typical of
                      Khasi Hills home cooking.
                    </li>
                    <li>
                      <strong>Small local stalls:</strong> A handful of
                      basic stalls near the entrance sell tea and snacks
                      for day-trippers.
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
                            "Homestay/night",
                            "₹1,000",
                            "₹2,500",
                            "₹5,500",
                          ],
                          ["Taxi from Shillong (round trip)", "₹4,000", "₹5,500", "₹8,000"],
                          ["Food/day", "₹400", "₹700", "₹1,500"],
                          ["Village entry/tower fee", "₹50", "₹50", "₹50"],
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
                    * Taxi cost is a round-trip figure best split across a
                    group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Mawlynnong</h2>
                  <ul>
                    <li>
                      <strong>Book a homestay ahead:</strong> Capacity is
                      limited, especially on weekends.
                    </li>
                    <li>
                      <strong>Respect the cleanliness culture:</strong> Use
                      the bamboo dustbins and never litter — this is a
                      living community practice, not a display.
                    </li>
                    <li>
                      <strong>Start early for a day trip:</strong> The drive
                      is long enough that a late start means rushing the
                      village visit.
                    </li>
                    <li>
                      <strong>Combine with the border region:</strong>{" "}
                      Nearby East Khasi Hills stops can round out a fuller
                      day or two.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited
                      this far from Shillong.
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
                          "Book a homestay for a fuller experience",
                          "Use the bamboo dustbins provided",
                          "Visit the Sky View tower for sunset",
                          "Start early if doing a day trip",
                          "Try authentic Khasi home cooking",
                          "Carry enough cash for your stay",
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Litter anywhere in the village",
                          "Rush the visit on a late start",
                          "Expect wide ATM/card access",
                          "Skip booking a homestay in peak season",
                          "Expect a large restaurant scene",
                          "Miss the Sky View tower for the view",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Mawlynnong
                    with{" "}
                    <Link href="/blog/dawki-travel-guide">Dawki</Link> and{" "}
                    <Link href="/blog/shnongpdeng-travel-guide">
                      Shnongpdeng
                    </Link>{" "}
                    for a fuller East Khasi Hills border circuit, or see our
                    full{" "}
                    <Link href="/blog/meghalaya-travel-guide">
                      Meghalaya travel guide
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
                  "Mawlynnong",
                  "Cleanest Village",
                  "Meghalaya",
                  "East Khasi Hills",
                  "Living Root Bridge",
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

              <RelatedPostsGrid currentSlug="mawlynnong-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mawlynnong-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
