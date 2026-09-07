// src/app/blog/jibhi-travel-guide/page.tsx
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
  title: "Jibhi Travel Guide: Waterfalls, Cafes & Himachal's Quiet Village",
  description:
    "The complete Jibhi travel guide. Jibhi Waterfall, Jalori Pass, Serolsar Lake, boutique cafes and homestays, where to stay, best time to visit, and a full 2-day itinerary through Himachal's quietest backpacker village.",
  keywords:
    "Jibhi travel guide, Jibhi waterfall, Jalori Pass, Serolsar Lake trek, Jibhi Himachal, best time to visit Jibhi, how to reach Jibhi, Tirthan Valley Jibhi, offbeat Himachal villages",
  openGraph: {
    title: "Jibhi Travel Guide: Waterfalls, Cafes & Himachal's Quiet Village",
    description:
      "A wooden-house Himalayan village turned quiet backpacker favourite, tucked into the Tirthan Valley's forested side — the complete guide to Jibhi.",
    url: "https://club.kudozz.in/blog/jibhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain road representative of Jibhi, Himachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jibhi Travel Guide: Waterfalls, Cafes & Himachal's Quiet Village",
    description:
      "Wooden Himachali houses, a short waterfall walk, and Jalori Pass above — the complete guide to Jibhi.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jibhi-travel-guide",
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
            "Jibhi Travel Guide: Waterfalls, Cafes & Himachal's Quiet Village",
          description: "The complete Jibhi travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
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
            "@id": "https://club.kudozz.in/blog/jibhi-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Jibhi",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Himachal Pradesh",
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
                name: "Jibhi Travel Guide",
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
    q: "How many days do I need in Jibhi?",
    a: "Two days is a comfortable minimum — one for the village, Jibhi Waterfall, and cafe time, another for a Jalori Pass day trip or the Serolsar Lake trek.",
  },
  {
    q: "What is the best time to visit Jibhi?",
    a: "March to June and September to November offer the clearest weather and best trekking conditions. Monsoon (July–August) brings landslide risk on the mountain roads, and December–February can bring snow that closes the higher Jalori Pass route.",
  },
  {
    q: "How do I reach Jibhi?",
    a: "The nearest airport is Bhuntar/Kullu, about 65km away. Road access is via Aut on the Kullu-Manali highway, followed by a final stretch of mountain road up to the village.",
  },
  {
    q: "Is Jibhi the same as Tirthan Valley?",
    a: "They're closely linked but distinct — Jibhi sits on the forested side above the main Tirthan Valley floor. Most travelers combine both in a single trip given their proximity.",
  },
  {
    q: "Is the Serolsar Lake trek difficult?",
    a: "It's a moderate trek from Jalori Pass through rhododendron forest, manageable for reasonably fit hikers without technical climbing experience, typically done as a day hike.",
  },
  {
    q: "Is Jalori Pass open year-round?",
    a: "No — heavy snow can close the higher route in winter. Check current road conditions before planning a trip specifically around Jalori Pass, especially outside the main season.",
  },
  {
    q: "What is the budget for a trip to Jibhi?",
    a: "A budget traveler can manage on roughly ₹1,300 a day using homestays, a mid-range trip closer to ₹3,200 a day. A 2-day trip totals roughly ₹2,600 on a budget and ₹6,400 mid-range.",
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
  { id: "introduction", title: "Why Jibhi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jibhi", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Jibhi-specific gear ───────────────────────────────────────────────────────
const JIBHI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for waterfall walks and the Jalori Pass side trip",
    emoji: "🌲",
    items: [
      {
        name: "Comfortable Trekking Shoes",
        description:
          "For the walk to Jibhi Waterfall and any Jalori Pass / Serolsar Lake trekking, both over uneven forest terrain.",
        price: "₹2,499",
        rating: 4.4,
        reviews: "5.3k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+moderate+hike"),
        tag: "Trek essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Forest paths around Jibhi and the Serolsar Lake trail are uneven and can be slippery after rain.",
      },
      {
        name: "Light Rain Layer",
        description:
          "Sudden showers are common in this forested valley, especially in shoulder-monsoon months.",
        price: "₹899",
        rating: 4.4,
        reviews: "5.1k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Jibhi's forested microclimate brings rain more often than the open valley floor nearby.",
      },
      {
        name: "Warm Layers",
        description:
          "Evenings cool sharply in the village, and Jalori Pass altitude is noticeably colder still.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "4.7k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("warm+jacket+hill+station+travel"),
        tag: "Evening essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The temperature swing between daytime and evening here is genuinely sharp given the elevation.",
      },
      {
        name: "Camera",
        description:
          "For the wooden Himachali houses, terraced fields, and forest scenery that define Jibhi's photogenic character.",
        price: "₹—",
        rating: 4.5,
        reviews: "—",
        image: "📷",
        affiliateUrl: amazonSearchUrl("compact+camera+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Jibhi's traditional architecture and forest setting are a major part of its appeal.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JibhiGuidePage() {
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
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="Himalayan mountain road representative of Jibhi, Himachal Pradesh"
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
                { label: "Jibhi", href: null },
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
              {["Jibhi", "Tirthan Valley", "Off-beat", "Himachal Pradesh"].map(
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
              Jibhi Travel Guide: Waterfalls, Cafes & Himachal's Quiet Village
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A wooden-house Himalayan village turned quiet backpacker
              favourite, tucked into the Tirthan Valley's forested side —
              everything you need to plan a trip to Jibhi.
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
                  text: "Jibhi, Himachal Pradesh",
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
                  <h2>Why Jibhi?</h2>
                  <p>
                    <strong>Jibhi</strong> is a small Himachali village that's
                    quietly become one of the state's favourite slow-travel
                    stops over the past decade — traditional wooden houses set
                    among deodar forest and terraced fields, a short walk to
                    a genuinely pretty waterfall, and a growing cluster of
                    boutique cafes and homestays without the crowds that have
                    reshaped Manali.
                  </p>
                  <p>
                    It sits on the forested side of the{" "}
                    <strong>Tirthan Valley</strong>, closely linked to that
                    valley and to <strong>Jalori Pass</strong> above it —
                    most travelers combine Jibhi with one or both as part of
                    a single trip into this quieter pocket of Himachal.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌲</span> Jibhi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Himachal Pradesh, India",
                        },
                        {
                          icon: "🌊",
                          label: "Key Site",
                          value: "Jibhi Waterfall",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Bhuntar/Kullu (~65km)",
                        },
                        {
                          icon: "⛰️",
                          label: "Nearby",
                          value: "Jalori Pass, Serolsar Lake",
                        },
                        { icon: "💰", label: "Budget/Day", value: "₹1,300 – ₹3,200" },
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
                  <h2>Best Time to Visit Jibhi</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pleasant and green",
                        text: "Comfortable temperatures and clear forest trails before monsoon arrives.",
                      },
                      {
                        season: "Sept – Nov",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Best overall — our pick",
                        text: "Post-monsoon clarity, dry paths, and crisp mountain air — ideal for both village time and Jalori Pass day trips.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — landslide risk",
                        text: "Lush greenery but genuine landslide risk on the mountain roads leading up to the village.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, Jalori Pass may close",
                        text: "The village stays accessible, but heavy snow can close the higher Jalori Pass route entirely.",
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
                    <strong>Our pick:</strong> September to November — the
                    clearest window for both wandering the village and a
                    Jalori Pass or Serolsar Lake day trip.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jibhi</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest airport is
                      Bhuntar/Kullu, about 65km away.
                    </li>
                    <li>
                      <strong>By Road:</strong> Access is via Aut on the
                      Kullu-Manali highway, followed by a final stretch of
                      mountain road up to the village.
                    </li>
                    <li>
                      <strong>By Train:</strong> No direct rail; the nearest
                      practical option is Joginder Nagar (narrow-gauge,
                      limited use) or broader connections via Chandigarh.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check road conditions to
                    Jalori Pass before planning a day trip around it,
                    especially outside the main October–November season —
                    snow and landslides both affect access at different
                    times of year.
                  </div>
                </section>

                {/* ── Top Attractions ──────────────────────────────────── */}
                <section id="top-attractions">
                  <h2>Top Things to Do in Jibhi</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Mountain road and forest scenery around Jibhi"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <ul>
                    <li>
                      <strong>Jibhi Waterfall:</strong> A short, easy walk
                      from the village and one of Jibhi's most popular local
                      highlights.
                    </li>
                    <li>
                      <strong>Jalori Pass:</strong> A mountain pass a short
                      drive above the village, offering high-altitude views
                      and access toward Kinnaur-Spiti routes.
                    </li>
                    <li>
                      <strong>Serolsar Lake:</strong> A scenic trek from
                      Jalori Pass through rhododendron forest, a moderate
                      day-trek option.
                    </li>
                    <li>
                      <strong>Village walks:</strong> Wandering among Jibhi's
                      traditional wooden houses and terraced fields is a
                      destination in itself, not just a means to reach the
                      waterfall.
                    </li>
                    <li>
                      <strong>Tirthan Valley:</strong> Closely linked to
                      Jibhi, with its own trout fishing and Great Himalayan
                      National Park gateway appeal — many travelers combine
                      both.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Jibhi</h2>
                  <p>
                    Jibhi's accommodation scene is dominated by homestays and
                    boutique cottage stays rather than conventional hotels —
                    part of what keeps the village's character intact.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Village homestays",
                          "Basic guesthouses near the main road",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: [
                          "Boutique wooden cottages",
                          "Cafe-adjacent mid-range stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹6,000–₹12,000+/night",
                        picks: [
                          "Premium forest-view cottages",
                          "High-end riverside/valley properties",
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

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Jibhi</h2>
                  <ul>
                    <li>
                      <strong>Homestay-cooked Himachali meals:</strong>{" "}
                      Simple, home-style vegetarian and non-vegetarian food
                      is the norm at most homestays.
                    </li>
                    <li>
                      <strong>Boutique cafe menus:</strong> A growing cluster
                      of cafes serving continental and fusion dishes,
                      reflecting Jibhi's rising popularity with slow-travel
                      visitors.
                    </li>
                    <li>
                      <strong>Trout dishes:</strong> Freshwater trout from
                      nearby Tirthan Valley rivers, available at select
                      restaurants.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Jibhi Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Village & Waterfall",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in at a homestay",
                          "Afternoon: walk to Jibhi Waterfall",
                          "Evening: explore the village and cafes",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Jalori Pass Day Trip",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: drive up to Jalori Pass",
                          "Trek to Serolsar Lake through rhododendron forest",
                          "Afternoon: return, departure or extend into Tirthan Valley",
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
                          ["Accommodation/night", "₹700", "₹2,500", "₹8,000"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Local transport per day", "₹250", "₹600", "₹1,500"],
                          ["Daily total", "₹1,300", "₹3,200", "₹9,500"],
                          ["2-Day trip total", "₹2,600", "₹6,400", "₹19,000"],
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
                    * Excludes transport to the region.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Jibhi</h2>
                  <ul>
                    <li>
                      <strong>Combine with Tirthan Valley or Jalori Pass:</strong>{" "}
                      Jibhi alone fills a day or two comfortably but pairs
                      naturally with either or both.
                    </li>
                    <li>
                      <strong>Check road conditions before a Jalori Pass trip:</strong>{" "}
                      Snow in winter and landslide risk in monsoon can both
                      affect the route.
                    </li>
                    <li>
                      <strong>Book homestays ahead on weekends:</strong> Jibhi's
                      rising popularity means limited stays fill up faster
                      than a few years ago.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is limited
                      in this small village.
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
                          "Combine Jibhi with Tirthan Valley or a Jalori Pass day trip",
                          "Book homestays ahead, especially on weekends",
                          "Check current road conditions before heading to Jalori Pass",
                          "Spend unhurried time simply walking the village",
                          "Carry sufficient cash",
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
                          "Attempt Jalori Pass without checking current road conditions",
                          "Expect Manali-level infrastructure or nightlife",
                          "Rely on cards for payment",
                          "Rush through — Jibhi rewards a slow pace",
                          "Skip warm layers assuming a mild mountain evening",
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
                  "Jibhi",
                  "Tirthan Valley",
                  "Jalori Pass",
                  "Off-beat",
                  "Himachal Pradesh",
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
                sections={JIBHI_GEAR}
                destination="Jibhi"
              />

              <RelatedPostsGrid currentSlug="jibhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jibhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
