// src/app/blog/chitkul-travel-guide/page.tsx
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
  title: "Chitkul Travel Guide: The Last Indian Village Before Tibet",
  description:
    "The complete Chitkul travel guide. The Baspa River, traditional Kinnauri houses, the Sangla Valley approach, permit requirements, best time to visit, and a full itinerary.",
  keywords:
    "Chitkul travel guide, last village before Tibet, Sangla Valley Chitkul, Baspa Valley, Kinnaur border village, best time to visit Chitkul, how to reach Chitkul, Hindustan Tibet road",
  openGraph: {
    title: "Chitkul Travel Guide: The Last Indian Village Before Tibet",
    description:
      "The last inhabited village on the old Hindustan-Tibet road, sitting beside the Baspa River with snow peaks on every side — the complete guide to Chitkul.",
    url: "https://club.kudozz.in/blog/chitkul-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "High-altitude Himalayan village scenery representative of Chitkul, Himachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chitkul Travel Guide: The Last Indian Village Before Tibet",
    description:
      "The last inhabited village on the old Hindustan-Tibet road, beside the Baspa River — the complete guide to Chitkul.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/chitkul-travel-guide",
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
          headline: "Chitkul Travel Guide: The Last Indian Village Before Tibet",
          description: "The complete Chitkul travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/chitkul-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Chitkul",
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
                name: "Chitkul Travel Guide",
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
    q: "Why is Chitkul called the last Indian village before Tibet?",
    a: "It's the last inhabited settlement along the old Hindustan-Tibet Road in the Baspa Valley — beyond it, the road continues toward the border but civilian settlement stops here.",
  },
  {
    q: "Do I need a permit to visit Chitkul?",
    a: "Parts of this route have historically required Inner Line Permits or ID verification given its proximity to the Tibet border. Requirements have changed over time, so verify the current rules before you travel.",
  },
  {
    q: "How do I reach Chitkul?",
    a: "The standard route is a long road journey via Shimla, Rampur, Reckong Peo, and Sangla Valley on and around NH5. This is best treated as the final stop on a broader Kinnaur/Sangla Valley trip rather than a quick standalone visit.",
  },
  {
    q: "What is the best time to visit Chitkul?",
    a: "May to October, when the access road is open and weather is manageable. The village and its approach road are typically snowbound and largely cut off in winter — verify current seasonal access before planning a visit outside this window.",
  },
  {
    q: "How many days do I need for Chitkul?",
    a: "A single day is enough to see the village itself, but Chitkul is best visited as the final leg of a longer Kinnaur or Sangla Valley trip given the long drive involved to reach it.",
  },
  {
    q: "Is accommodation available in Chitkul itself?",
    a: "Yes, but it's basic — a handful of guesthouses and homestays. Many visitors instead day-trip from Sangla, which has more developed accommodation options.",
  },
  {
    q: "What is the budget for a trip to Chitkul?",
    a: "A budget traveler can manage on roughly ₹1,500 a day for basic homestay accommodation and simple meals, factoring in the remote setting and limited infrastructure.",
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
  { id: "introduction", title: "Why Chitkul?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Chitkul", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Visit (Within a Kinnaur Trip)", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Chitkul-specific gear ───────────────────────────────────────────────────
const CHITKUL_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a remote, high-altitude border village",
    emoji: "🏔️",
    items: [
      {
        name: "Warm Layers",
        description:
          "Genuinely cold even in summer at roughly 3,450m — pack proper insulation regardless of season.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "4.7k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("warm+trekking+jacket+layers"),
        tag: "Non-negotiable",
        tagColor: "bg-red-100 text-red-700",
        why: "Chitkul's altitude means cold weather is the norm, not the exception, throughout the accessible season.",
      },
      {
        name: "Comfortable Walking Shoes",
        description:
          "For walking around the village and along the Baspa River.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "5.3k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "All-day essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "The village and riverside paths involve uneven, rocky ground." ,
      },
      {
        name: "High-SPF Sunscreen",
        description:
          "High-altitude sun exposure is significantly more intense than at sea level.",
        price: "₹599",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("high+spf+sunscreen+travel"),
        tag: "Altitude essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Sunburn happens fast at this elevation, even on cool or overcast days.",
      },
      {
        name: "ID Documents & Basic First-Aid Kit",
        description:
          "Given the border-proximate location and remote setting, carry proper identification and basic medical supplies.",
        price: "₹499",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Remote-travel essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Facilities are minimal this far into the mountains, and ID verification may be required en route.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChitkulGuidePage() {
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
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="High-altitude Himalayan village scenery representative of Chitkul, Himachal Pradesh"
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
                { label: "Chitkul", href: null },
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
              {["Chitkul", "Baspa Valley", "Off-beat", "Himachal Pradesh"].map(
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
              Chitkul Travel Guide: The Last Indian Village Before Tibet
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The last inhabited village on the old Hindustan-Tibet road,
              sitting beside the Baspa River with snow peaks on every side.
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
                  text: "Chitkul, Himachal Pradesh",
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
                  <h2>Why Chitkul?</h2>
                  <p>
                    <strong>Chitkul</strong> is the last inhabited village
                    along the old Hindustan-Tibet Road, tucked into the{" "}
                    <strong>Baspa Valley</strong> of Kinnaur district at
                    roughly 3,450m. It sits beside the Baspa River with close,
                    dramatic views of the snow peaks surrounding it —
                    genuinely remote, sparsely populated, and lined with
                    traditional wooden Kinnauri houses that feel a world away
                    from Himachal's busier hill stations.
                  </p>
                  <p>
                    This was historically a restricted border area, and
                    parts of the route have required Inner Line Permits or ID
                    verification in the past — rules that have changed over
                    time, so it's worth confirming the current requirements
                    before you set out. Most travelers reach Chitkul as the
                    final stop on a longer trip through <strong>Kinnaur</strong>{" "}
                    and Sangla Valley.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Chitkul at a Glance
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
                        { icon: "⛰️", label: "Altitude", value: "~3,450m" },
                        { icon: "🌡️", label: "Best Time", value: "May – Oct" },
                        {
                          icon: "🛣️",
                          label: "Access",
                          value: "Via Sangla Valley, Kinnaur",
                        },
                        {
                          icon: "🌊",
                          label: "River",
                          value: "Baspa River",
                        },
                        { icon: "💰", label: "Budget/Day", value: "₹1,500+" },
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
                  <h2>Best Time to Visit Chitkul</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – Jun",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Access reopens",
                        text: "The road becomes passable as winter snow clears — one of the first good windows to visit.",
                      },
                      {
                        season: "Sept – Oct",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Best overall — our pick",
                        text: "Clear skies, stable roads, and the valley's autumn colours make this the most reliable window." ,
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Rain and occasional landslide risk on the long approach road — travel with caution and buffer time.",
                      },
                      {
                        season: "Nov – Apr",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Largely cut off",
                        text: "Heavy snow typically closes the road and isolates the village — verify current access before planning a visit.",
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
                    <strong>Our pick:</strong> September to October — the
                    most stable roads and clearest mountain views for the
                    long journey in.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Chitkul</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest airports are
                      Shimla or Bhuntar/Kullu, both a long drive away.
                    </li>
                    <li>
                      <strong>By Road:</strong> The standard route runs via
                      Shimla, Rampur, and Reckong Peo, then on through Sangla
                      Valley to Chitkul on NH5 and connecting roads — a long,
                      scenic multi-day approach rather than a quick trip.
                    </li>
                    <li>
                      <strong>Typical planning:</strong> Most travelers treat
                      Chitkul as the final stop on a broader Kinnaur or
                      Sangla Valley loop rather than a standalone destination.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Verify current Inner Line
                    Permit or ID requirements for this border-proximate route
                    before you travel — rules have changed over time and
                    differ from more open parts of Himachal.
                  </div>
                </section>

                {/* ── Top Attractions ──────────────────────────────────── */}
                <section id="top-attractions">
                  <h2>Top Things to Do in Chitkul</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Mountain and river scenery around Chitkul"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <ul>
                    <li>
                      <strong>Walk along the Baspa River:</strong> The river
                      runs right beside the village, with close mountain
                      views on both sides.
                    </li>
                    <li>
                      <strong>Traditional Kinnauri houses:</strong> Wooden
                      architecture distinct from lower-altitude Himachal
                      villages, reflecting the region's tribal heritage.
                    </li>
                    <li>
                      <strong>Mathi Temple:</strong> A small temple to the
                      local deity Mathi, an active part of village life.
                    </li>
                    <li>
                      <strong>Sangla Valley:</strong> The lush valley leading
                      up to Chitkul, worth exploring on the way in or out.
                    </li>
                    <li>
                      <strong>Simple village life:</strong> There isn't a
                      packed sightseeing list here — the appeal is the
                      remoteness and setting itself, best experienced at a
                      slow pace.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Chitkul</h2>
                  <p>
                    Accommodation is genuinely basic given the village's
                    remoteness — a handful of homestays and simple
                    guesthouses. Many visitors instead base themselves in
                    Sangla, which has more developed options, and day-trip to
                    Chitkul.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Basic (Chitkul)",
                        icon: "🏕️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Village homestays",
                          "Simple guesthouses",
                        ],
                      },
                      {
                        tier: "Better Options (Sangla)",
                        icon: "🏨",
                        range: "₹1,800–₹4,000/night",
                        picks: [
                          "Mid-range hotels in Sangla town",
                          "Valley-view guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "Very limited",
                        picks: [
                          "Luxury options are essentially unavailable this far into Kinnaur — set expectations accordingly",
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
                  <h2>What to Eat in Chitkul</h2>
                  <ul>
                    <li>
                      <strong>Homestay-cooked meals:</strong> Simple,
                      home-style Kinnauri and Himachali food is the norm —
                      don't expect restaurant variety this deep into the
                      valley.
                    </li>
                    <li>
                      <strong>Local apples and dried fruit:</strong>{" "}
                      Reflecting the broader Kinnaur region's orchard
                      economy.
                    </li>
                    <li>
                      <strong>Carry some of your own supplies:</strong> Given
                      the remote setting, it's sensible to bring extra
                      snacks and water for the journey.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>1-Day Visit (Within a Kinnaur Trip)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Sangla to Chitkul",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Sangla Valley early",
                          "Drive through the scenic Baspa Valley road",
                          "Arrive Chitkul, explore the village",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Riverside & Return",
                        color: "bg-forest-600",
                        activities: [
                          "Walk along the Baspa River",
                          "Visit Mathi Temple",
                          "Return to Sangla or overnight in Chitkul if staying",
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
                          {["Expense", "Budget", "Mid-Range (Sangla base)"].map(
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
                          ["Accommodation/night", "₹900", "₹2,800"],
                          ["Food/day", "₹350", "₹800"],
                          ["Local transport per day", "₹500", "₹1,000"],
                          ["Daily total", "₹1,750", "₹4,600"],
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
                    * Excludes the multi-day journey from major cities to
                    reach the Kinnaur region.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Chitkul</h2>
                  <ul>
                    <li>
                      <strong>Verify current permit/ID requirements:</strong>{" "}
                      This border-proximate route's rules have changed over
                      time — check before traveling.
                    </li>
                    <li>
                      <strong>Treat it as part of a longer Kinnaur trip:</strong>{" "}
                      The distance involved makes a standalone visit
                      impractical for most travelers.
                    </li>
                    <li>
                      <strong>Carry warm layers regardless of season:</strong>{" "}
                      Genuinely cold at this altitude even in summer.
                    </li>
                    <li>
                      <strong>Set basic-infrastructure expectations:</strong>{" "}
                      This is a small, remote village, not a developed
                      tourist stop.
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
                          "Verify current permit/ID requirements before travel",
                          "Combine Chitkul with a broader Kinnaur/Sangla trip",
                          "Carry warm layers regardless of season",
                          "Carry proper identification documents",
                          "Base in Sangla if Chitkul's own stays feel too basic",
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
                          "Travel without verifying current border-area rules",
                          "Attempt this as a quick standalone trip",
                          "Underestimate the cold at this altitude",
                          "Expect developed tourist infrastructure",
                          "Plan a visit outside May–October without checking road status",
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
                  "Chitkul",
                  "Baspa Valley",
                  "Kinnaur",
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
                sections={CHITKUL_GEAR}
                destination="Chitkul"
              />

              <RelatedPostsGrid currentSlug="chitkul-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chitkul-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
