// src/app/blog/mollem-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mollem National Park Travel Guide: Wildlife & Waterfalls Near Dudhsagar",
  description:
    "The complete Mollem travel guide. Bhagwan Mahavir Wildlife Sanctuary, Tambdi Surla Temple, Devil's Canyon, where to stay, what to eat, best time to visit, and how to plan a day trip near Dudhsagar Falls.",
  keywords:
    "Mollem travel guide, Mollem National Park, Bhagwan Mahavir Wildlife Sanctuary, Tambdi Surla Temple, Devil's Canyon Goa, Kulem railway station, best time to visit Mollem, Dudhsagar jeep safari base",
  openGraph: {
    title:
      "Mollem National Park Travel Guide: Wildlife & Waterfalls Near Dudhsagar",
    description:
      "Goa's largest protected forest, home to the Bhagwan Mahavir Wildlife Sanctuary and the trailhead for Dudhsagar Falls — the complete guide to Mollem.",
    url: "https://club.kudozz.in/blog/mollem-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dense forest landscape representative of Mollem National Park, Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mollem National Park Travel Guide: Wildlife & Waterfalls Near Dudhsagar",
    description:
      "Goa's largest protected forest, home to the Bhagwan Mahavir Wildlife Sanctuary — the complete guide to Mollem.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mollem-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Mollem National Park Travel Guide: Wildlife & Waterfalls Near Dudhsagar",
          description: "The complete Mollem travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
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
            "@id": "https://club.kudozz.in/blog/mollem-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Mollem",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Goa",
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
                name: "Mollem Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Is Mollem the same as Dudhsagar Falls?",
    a: "No — Mollem National Park and the Bhagwan Mahavir Wildlife Sanctuary are the broader forest area that Dudhsagar Falls sits within. The falls are typically covered as their own destination since they're the area's single biggest draw; see our dedicated Dudhsagar Falls guide for the jeep safari details.",
  },
  {
    q: "Can I see wildlife at Mollem?",
    a: "It's possible but genuinely uncommon for casual day visitors. The sanctuary is home to leopards, gaur, deer species, and rich birdlife, but this isn't a jeep-safari park with guaranteed sightings — go for the forest and waterfall experience rather than expecting a wildlife encounter.",
  },
  {
    q: "How many days do I need at Mollem?",
    a: "One day is enough to combine Dudhsagar Falls, Tambdi Surla Temple, and a short forest walk. Most visitors treat this as a single day trip rather than an overnight stay.",
  },
  {
    q: "What is the best time to visit Mollem?",
    a: "October to May for general park visits and Tambdi Surla Temple. If Dudhsagar Falls at full flow is the priority, June to September has the most dramatic waterfall despite trickier access — see the Dudhsagar guide for details.",
  },
  {
    q: "How do I reach Mollem?",
    a: "Kulem (also spelled Collem) railway station is the nearest and also the departure point for the shared jeep safaris to Dudhsagar Falls. The nearest airport is Dabolim, roughly 60km away.",
  },
  {
    q: "Is Tambdi Surla Temple worth visiting?",
    a: "Yes, if you have time beyond the falls — it's a well-preserved 12th-13th century stone temple, a genuinely underrated heritage stop and one of the few surviving examples of this architectural period in Goa.",
  },
  {
    q: "Is Mollem accessible during monsoon?",
    a: "Access can be restricted during peak monsoon for safety, particularly around the falls and forest trails — verify current park status before planning a monsoon-season visit.",
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
  { id: "introduction", title: "Why Mollem?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mollem", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Mollem-specific gear ───────────────────────────────────────────────────────
const MOLLEM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the forest, temple, and waterfall trip",
    emoji: "🌲",
    items: [
      {
        name: "Trekking Sandals / Grip Shoes",
        description:
          "For the short forest trails around Mollem and the sometimes-slippery approach to Dudhsagar Falls.",
        price: "₹899",
        rating: 4.4,
        reviews: "5.1k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+sandals+grip+outdoor"),
        tag: "Forest essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Jeep-safari drop-off points and the waterfall approach both involve uneven, occasionally wet terrain.",
      },
      {
        name: "Insect Repellent",
        description:
          "Genuinely necessary for time spent in Mollem's forest, especially around Tambdi Surla Temple and any walking trails.",
        price: "₹199",
        rating: 4.3,
        reviews: "4.2k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"),
        tag: "Forest essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Dense forest cover means a real mosquito presence, particularly during and after monsoon.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Facilities inside the sanctuary and around the jeep safari route are limited — carry enough water for the day.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("reusable+water+bottle+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "There are long stretches within the park with no shops or refill points.",
      },
      {
        name: "Rain Jacket / Poncho",
        description:
          "Useful if visiting in shoulder-monsoon months when Dudhsagar is at its fullest but showers are common.",
        price: "₹899",
        rating: 4.4,
        reviews: "5.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("packable+rain+jacket+trekking"),
        tag: "Weather essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The waterfall is most dramatic exactly when rain is most likely.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MollemGuidePage() {
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
              alt="Dense forest landscape representative of Mollem National Park, Goa"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

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
                { label: "Mollem", href: null },
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
              {["Mollem", "Wildlife Sanctuary", "Adventure", "Goa"].map(
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
              Mollem National Park Travel Guide: Wildlife & Waterfalls Near
              Dudhsagar
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Goa's largest protected forest, home to the Bhagwan Mahavir
              Wildlife Sanctuary and the trailhead for Dudhsagar Falls.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Mollem, Goa",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,500 words",
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
                  <h2>Why Mollem?</h2>
                  <p>
                    <strong>Mollem National Park</strong>, together with the
                    surrounding <strong>Bhagwan Mahavir Wildlife
                    Sanctuary</strong>, forms Goa's largest protected forest
                    area — part of the Western Ghats ecosystem that stretches
                    down the state's eastern edge, a world away from the
                    beach coast most visitors associate with Goa.
                  </p>
                  <p>
                    Most travelers know Mollem as the base area for{" "}
                    <strong>Dudhsagar Falls</strong> (covered in its own
                    dedicated guide), but the park itself has more to offer:
                    a genuinely well-preserved 12th-13th century temple, a
                    lesser-known canyon, and forest that's home to leopards,
                    gaur, and rich birdlife — even if sightings of the
                    bigger animals are honestly rare for casual visitors.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Mollem at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Goa, India",
                        },
                        {
                          icon: "🌳",
                          label: "Protected Area",
                          value: "Bhagwan Mahavir Wildlife Sanctuary",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        {
                          icon: "🚆",
                          label: "Nearest Station",
                          value: "Kulem / Collem",
                        },
                        {
                          icon: "🛕",
                          label: "Heritage Stop",
                          value: "Tambdi Surla Temple",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹3,500",
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
                  <h2>Best Time to Visit Mollem</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Comfortable weather for forest walks and the Tambdi Surla Temple visit, with reliable park and jeep-safari access.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot, lower water flow",
                        text: "Warmer conditions, and Dudhsagar's flow drops noticeably compared to monsoon season.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — falls at their fullest",
                        text: "Dudhsagar is at its most dramatic, but park access can be restricted for safety — verify current status before planning around this window.",
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
                    <strong>Our pick:</strong> October to February for the
                    most reliable overall visit — comfortable weather, open
                    park access, and Tambdi Surla Temple at its most
                    pleasant to explore.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mollem</h2>
                  <ul>
                    <li>
                      <strong>By Train:</strong> Kulem (also spelled
                      Collem) railway station is the nearest stop and also
                      the departure point for shared jeep safaris into the
                      park toward Dudhsagar Falls.
                    </li>
                    <li>
                      <strong>By Air:</strong> Dabolim Airport is the
                      nearest, roughly 60km away.
                    </li>
                    <li>
                      <strong>By Road:</strong> Mollem sits along NH4A,
                      well connected by road from Panjim and Ponda.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If Dudhsagar Falls is your
                    main goal, book the shared jeep safari from Kulem
                    station in advance during peak season — demand
                    regularly outpaces available jeeps on weekends.
                  </div>
                </section>

                {/* ── Top Attractions ──────────────────────────────────── */}
                <section id="top-attractions">
                  <h2>Top Things to Do in Mollem</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Forest and hill scenery around Mollem National Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <ul>
                    <li>
                      <strong>Dudhsagar Falls:</strong> The area's biggest
                      draw, reached by shared jeep safari from Kulem
                      station — see our dedicated guide for the full
                      details.
                    </li>
                    <li>
                      <strong>Tambdi Surla Temple:</strong> A well-preserved
                      12th-13th century Kadamba-dynasty stone temple within
                      the forest, one of the few surviving examples of this
                      architectural period in Goa — genuinely worth a
                      dedicated stop.
                    </li>
                    <li>
                      <strong>Bhagwan Mahavir Wildlife Sanctuary:</strong>{" "}
                      Home to leopards, gaur, deer species, and rich
                      birdlife, though sightings of larger mammals are
                      genuinely uncommon for casual day visitors.
                    </li>
                    <li>
                      <strong>Devil's Canyon:</strong> A smaller,
                      less-visited waterfall and gorge feature in the area,
                      worth exploring for those wanting to go beyond just
                      Dudhsagar.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Mollem</h2>
                  <p>
                    Standalone accommodation directly at Mollem is limited
                    — most visitors either day-trip from elsewhere in Goa
                    or stay in a small local guesthouse near Kulem station.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Basic guesthouses near Kulem station",
                          "Simple homestays close to the park boundary",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Forest-edge resorts near Mollem",
                          "Small nature-focused lodges",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "Limited options",
                        picks: [
                          "A handful of premium eco-resort stays — luxury options here are genuinely limited",
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
                    Most travelers base themselves in Panjim, Ponda, or one
                    of the beach towns and visit Mollem as a day trip
                    rather than staying overnight in the park itself.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat Near Mollem</h2>
                  <ul>
                    <li>
                      <strong>Simple local thalis:</strong> A handful of
                      small eateries near Kulem station serve straightforward
                      Goan and North Indian meals.
                    </li>
                    <li>
                      <strong>Packed food is a good idea:</strong> Given the
                      limited dining options within the park itself, many
                      visitors carry food for a full day trip.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>1-Day Mollem Itinerary</h2>
                  <p>
                    Mollem is well suited to a single, full day trip
                    combining the falls, the temple, and a short forest
                    stop.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Dudhsagar, Temple & Forest",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: shared jeep safari to Dudhsagar Falls",
                          "Midday: return to Kulem, drive to Tambdi Surla Temple",
                          "Afternoon: short forest walk or Devil's Canyon detour",
                          "Evening: departure",
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
                          {["Expense", "Budget", "Mid-Range"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Jeep safari (shared, per person)", "₹500", "₹800"],
                          ["Entry fees", "₹100", "₹200"],
                          ["Food/day", "₹300", "₹700"],
                          ["Local transport", "₹300", "₹800"],
                          ["Daily total", "₹1,200", "₹2,500"],
                        ].map(([exp, b, m], i) => (
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Excludes flights/trains to Goa. Jeep safari pricing
                    can vary by season and current park fee structure —
                    verify locally.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Mollem</h2>
                  <ul>
                    <li>
                      <strong>Combine with Dudhsagar Falls:</strong> This is
                      the natural, efficient way to structure a day trip —
                      see our dedicated Dudhsagar guide.
                    </li>
                    <li>
                      <strong>Don't expect a safari-style wildlife
                      experience:</strong> Mollem is a forest and waterfall
                      trip, not a guaranteed-sighting wildlife park.
                    </li>
                    <li>
                      <strong>Visit Tambdi Surla Temple if you have time:
                      </strong> It's genuinely underrated and easy to
                      combine with the rest of the day.
                    </li>
                    <li>
                      <strong>Verify monsoon-season access:</strong> Park
                      conditions can restrict access during heavy rain —
                      check current status before a Jun-Sep trip.
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
                          "Book the Dudhsagar jeep safari in advance in peak season",
                          "Visit Tambdi Surla Temple if you have extra time",
                          "Carry your own food and water for the day",
                          "Verify current monsoon-season park access",
                          "Combine with a Panjim or Ponda base rather than staying overnight",
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
                          "Expect guaranteed wildlife sightings",
                          "Show up without booking a jeep safari slot in peak season",
                          "Rely on finding food options within the park itself",
                          "Visit during heavy monsoon without checking access status",
                          "Skip Tambdi Surla Temple if you have the extra hour",
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
                  "Mollem",
                  "Bhagwan Mahavir Wildlife Sanctuary",
                  "Adventure",
                  "Goa",
                  "India",
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

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={MOLLEM_GEAR}
                destination="Mollem"
              />

              <RelatedPostsGrid currentSlug="mollem-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mollem-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
