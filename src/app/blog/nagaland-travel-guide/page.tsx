// src/app/blog/nagaland-travel-guide/page.tsx
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
  title: "Nagaland Travel Guide: Hornbill Festival, Kohima & Dzukou Valley",
  description:
    "The complete Nagaland travel guide — the Hornbill Festival, Kohima's war cemetery, Dzukou Valley trekking, Khonoma green village, tribal culture, where to stay and eat, and a full itinerary through India's most culturally distinct Northeastern state.",
  keywords:
    "Nagaland travel guide, Hornbill Festival, Kohima War Cemetery, Dzukou Valley trek, Khonoma green village, Nagaland itinerary, Naga tribes, Northeast India travel, Kisama Heritage Village",
  openGraph: {
    title: "Nagaland Travel Guide: Hornbill Festival, Kohima & Dzukou Valley",
    description:
      "A festival of a thousand warriors, a valley carpeted in seasonal flowers, and 16 distinct tribes with their own languages and traditions — the complete guide to Nagaland.",
    url: "https://club.kudozz.in/blog/nagaland-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Misty green hills in Northeast India, evoking Nagaland's mountainous tribal heartland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagaland Travel Guide: Hornbill Festival, Kohima & Dzukou Valley",
    description:
      "Warrior festivals, alpine valleys, and 16 distinct tribes — the complete guide to Nagaland.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/nagaland-travel-guide",
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
            "Nagaland Travel Guide: Hornbill Festival, Kohima & Dzukou Valley",
          description: "The complete Nagaland travel guide.",
          image: "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-07-22",
          dateModified: "2026-07-22",
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
            "@id": "https://club.kudozz.in/blog/nagaland-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Nagaland",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Nagaland",
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
                name: "Nagaland Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Nagaland?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Nagaland", level: 2 },
  { id: "hornbill-festival", title: "Hornbill Festival", level: 2 },
  { id: "kohima", title: "Kohima: War Cemetery & City Sights", level: 2 },
  { id: "dzukou-valley", title: "Dzukou Valley Trek", level: 2 },
  { id: "other-sights", title: "Khonoma, Mon & Tribal Villages", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Nagaland-specific gear ─────────────────────────────────────────────────
const NAGALAND_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for the Dzukou Valley trek, chilly Hornbill Festival nights, and hilly tribal terrain",
    emoji: "🪶",
    items: [
      {
        name: "Trekking Shoes",
        description:
          "The Dzukou Valley trek involves steep, sometimes muddy ascents through forest and bamboo groves before opening into the valley.",
        price: "₹2,499",
        rating: 4.5,
        reviews: "11k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("trekking+shoes+waterproof"),
        tag: "Trek essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "The climb to Dzukou is steep and can be slippery after rain — proper grip matters far more than casual sneakers.",
      },
      {
        name: "Insulated Jacket",
        description:
          "Kohima and the Hornbill Festival grounds at Kisama get genuinely cold in the evenings, especially through December.",
        price: "₹1,999",
        rating: 4.4,
        reviews: "9.4k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("insulated+jacket+travel"),
        tag: "Evening essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "December temperatures in Kohima and Kisama can drop close to freezing at night, especially during the Hornbill Festival.",
      },
      {
        name: "Rain Jacket / Poncho",
        description:
          "Nagaland's hill weather is changeable — showers can appear with little warning even outside monsoon.",
        price: "₹599",
        rating: 4.3,
        reviews: "4.6k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("rain+jacket+poncho+travel"),
        tag: "Weather essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Cloud and mist roll into the hills quickly, particularly around Dzukou and Khonoma — worth having even on clear-looking days.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for day trips beyond Kohima and Dimapur, where charging points thin out fast.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Villages like Khonoma and Mon have limited charging infrastructure compared to Kohima or Dimapur.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long trekking days in Dzukou Valley and extended sightseeing around Kohima.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "There are few reliable shops along the Dzukou trail — carrying enough water is essential, not optional.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "Worth having given the trekking involved and the modest medical infrastructure outside Kohima and Dimapur.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Trek essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Medical facilities are concentrated in Kohima and Dimapur — basic self-sufficiency matters on the Dzukou trek and rural village visits.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NagalandGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Misty green hills in Northeast India, evoking Nagaland's mountainous tribal heartland"
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
                { label: "Nagaland", href: "/blog?category=nagaland" },
                { label: "Travel Guide", href: null },
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
                "Nagaland",
                "Hornbill Festival",
                "Kohima",
                "Dzukou Valley",
                "Tribal Culture",
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
              Nagaland Travel Guide: Hornbill Festival, Kohima & Dzukou Valley
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A festival where sixteen tribes gather in their warrior best, a
              war cemetery that tells the story of one of WWII's turning
              points, and a valley so green it's called the "Switzerland of
              the East" — Nagaland is unlike anywhere else in India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Nagaland, Northeast India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,000 words",
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
                  <h2>Why Nagaland?</h2>
                  <p>
                    Bordering Myanmar in India's far northeast,{" "}
                    <strong>Nagaland</strong> is home to 16 major tribes, each
                    with its own dialect, dress, and traditions — a level of
                    cultural diversity packed into one state that's rare
                    anywhere in the world. Historically known for its
                    warrior culture, headhunting past, and terraced hill
                    villages, Nagaland today is one of India's most
                    rewarding and least crowded travel destinations.
                  </p>
                  <p>
                    The state's biggest draw is the <strong>Hornbill
                    Festival</strong>, held every December at Kisama, where
                    all of Nagaland's tribes gather under one roof — but the
                    rest of the year offers just as much: the WWII history of
                    Kohima, the alpine meadows of Dzukou Valley, and
                    Khonoma, one of India's first "green villages."
                  </p>
                  <p>
                    Tourist infrastructure remains modest outside Kohima and
                    Dimapur, so Nagaland rewards travelers who plan ahead and
                    are comfortable with a slower, more immersive pace than
                    more built-up Indian destinations.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🪶</span> Nagaland at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Nagaland" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Dimapur (DMU)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🎪",
                          label: "Known For",
                          value: "Hornbill Festival, Dzukou Valley",
                        },
                        {
                          icon: "🎭",
                          label: "Culture",
                          value: "16 Major Tribes",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit Nagaland</h2>
                  <p>
                    Nagaland's hilly terrain gives it a cooler, more temperate
                    climate than much of the rest of Northeast India — timing
                    matters both for comfort and for catching the state's
                    biggest event.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and clear (8–22°C) — ideal for Dzukou Valley trekking, Kohima sightseeing, and the December Hornbill Festival.",
                      },
                      {
                        season: "Dec 1 – 10",
                        emoji: "🎪",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Hornbill Festival",
                        text: "Nagaland's flagship festival at Kisama draws visitors from across the world — book stays and flights months in advance.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, pleasant",
                        text: "Comfortable daytime temperatures, good for sightseeing, though pre-monsoon showers become more frequent by late May.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Interestingly, this is also when Dzukou Valley's famous lilies bloom, though trekking gets muddier and more difficult.",
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
                    <strong>Our pick:</strong> Early December, timed to the
                    Hornbill Festival — the single best window to experience
                    Nagaland's tribal culture, food, and music in one place,
                    with cool, dry weather for Dzukou and Kohima on either
                    side of it.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Nagaland</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Dimapur Airport (DMU) is
                      Nagaland's only airport, with regular flights from
                      Kolkata, Guwahati, and Delhi — Kohima is roughly a
                      2.5–3 hour drive from there.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Dimapur railway station is
                      the nearest major rail link, connected to Guwahati and
                      the wider Indian rail network.
                    </li>
                    <li>
                      <strong>By Road:</strong> Kohima is connected by road
                      to Guwahati (~370 km) and Imphal — the Dimapur–Kohima
                      highway is the main entry route for most travelers.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly into Dimapur and hire a
                    taxi straight to Kohima — during the Hornbill Festival,
                    both flights and the Dimapur–Kohima road get significantly
                    busier, so book transport in advance.
                  </div>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Inner Line Permit:</strong> Indian citizens
                    need an Inner Line Permit (ILP) to enter Nagaland,
                    obtainable online or on arrival at Dimapur; foreign
                    nationals need a Protected Area Permit (PAP) — check the
                    latest requirements before travel.
                  </div>
                </section>

                {/* ── Hornbill Festival ─────────────────────────────────── */}
                <section id="hornbill-festival">
                  <h2>Hornbill Festival</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Green hills near Kisama, the venue for Nagaland's Hornbill Festival"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Held every year from <strong>December 1st to 10th</strong>{" "}
                    at Kisama Heritage Village, roughly 12 km from Kohima, the{" "}
                    <strong>Hornbill Festival</strong> is Nagaland's marquee
                    event — named after the hornbill bird, a recurring
                    symbol in Naga folklore.
                  </p>
                  <ul>
                    <li>
                      <strong>Morungs (tribal huts):</strong> Each of
                      Nagaland's tribes builds a traditional morung at
                      Kisama, showcasing their distinct dress, weaponry, and
                      customs.
                    </li>
                    <li>
                      <strong>War dances and music:</strong> Daily
                      performances of traditional war dances, folk songs, and
                      increasingly, the Hornbill International Rock Festival
                      running alongside it.
                    </li>
                    <li>
                      <strong>Naga cuisine and crafts:</strong> Food stalls
                      serve tribal specialties rarely found outside Nagaland,
                      alongside handicraft and textile stalls.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Accommodation in Kohima gets
                    fully booked well ahead of December — reserve rooms at
                    least 2–3 months in advance if traveling during the
                    festival.
                  </div>
                </section>

                {/* ── Kohima ────────────────────────────────────────────── */}
                <section id="kohima">
                  <h2>Kohima: War Cemetery & City Sights</h2>
                  <p>
                    Nagaland's capital sits at over 1,400m, wrapped around
                    terraced hillsides — most visitors base themselves here
                    for the bulk of the trip.
                  </p>
                  <ul>
                    <li>
                      <strong>Kohima War Cemetery:</strong> A beautifully
                      maintained memorial to Allied soldiers who died in the
                      1944 Battle of Kohima, one of the decisive turning
                      points of WWII in the Asian theatre.
                    </li>
                    <li>
                      <strong>Kohima State Museum:</strong> Exhibits covering
                      Naga tribal history, artifacts, and traditional dress
                      from across the state's tribes.
                    </li>
                    <li>
                      <strong>Kohima Cathedral:</strong> One of the largest
                      cathedrals in Northeast India, built partly as a
                      memorial to WWII soldiers, with sweeping views over the
                      valley.
                    </li>
                  </ul>
                </section>

                {/* ── Dzukou Valley ─────────────────────────────────────── */}
                <section id="dzukou-valley">
                  <h2>Dzukou Valley Trek</h2>
                  <p>
                    Roughly 30 km from Kohima on the Nagaland–Manipur border,{" "}
                    <strong>Dzukou Valley</strong> is often called the
                    "Switzerland of the East" — a high-altitude valley
                    carpeted in rolling green meadows, bamboo groves, and
                    seasonal wildflowers.
                  </p>
                  <ul>
                    <li>
                      <strong>The climb:</strong> A steep 3–4 hour trek from
                      the base at Viswema village leads up to the valley's
                      rim, opening into the flat meadow beyond.
                    </li>
                    <li>
                      <strong>Dzukou lily season:</strong> The valley's
                      famous pink-white Dzukou lilies bloom from late June
                      to early July, a rare flower found almost nowhere else.
                    </li>
                    <li>
                      <strong>Trekkers' hut:</strong> A basic community-run
                      hut at the valley floor allows overnight stays — worth
                      it for a proper look at the valley beyond a rushed day
                      trip.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The trail is steep and
                    largely unshaded near the top — start early morning to
                    avoid the midday heat and afternoon mist that can reduce
                    visibility.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Khonoma, Mon & Tribal Villages</h2>
                  <ul>
                    <li>
                      <strong>Khonoma Green Village:</strong> Roughly 20 km
                      from Kohima, India's first "green village," known for
                      its conservation efforts, terraced agriculture, and
                      role in Naga resistance history against British rule.
                    </li>
                    <li>
                      <strong>Mon District (Longwa Village):</strong> Home to
                      the Konyak tribe, famous for its former headhunting
                      traditions and tattooed elders — Longwa village
                      straddles the India–Myanmar border, with the chief's
                      house said to sit in both countries.
                    </li>
                    <li>
                      <strong>Touphema & Khezhakeno:</strong> Model tribal
                      villages offering traditional Naga homestays, a good
                      way to experience local culture beyond Kohima.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is concentrated in Kohima and Dimapur —
                    outside these towns, options thin out to homestays and
                    basic guesthouses, so plan day trips accordingly.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Tourist lodges, Kohima",
                          "Tribal homestays, Khonoma/Touphema",
                          "Basic guesthouses, Dimapur",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹5,000/night",
                        picks: [
                          "Business hotels, Kohima",
                          "Heritage-style stays, Kohima",
                          "Well-rated guesthouses, Dimapur",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,500–₹11,000+/night",
                        picks: [
                          "Premium hotels, Kohima",
                          "Boutique properties, Kohima",
                          "Business hotels, Dimapur",
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
                    Base yourself in Kohima for most of the trip, and
                    consider a homestay night in Khonoma or Touphema —
                    dedicated tourist accommodation beyond Kohima and Dimapur
                    is genuinely limited.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Nagaland</h2>
                  <ul>
                    <li>
                      <strong>Smoked Pork with Bamboo Shoot:</strong> A
                      Naga staple — smoked pork cooked with fermented bamboo
                      shoot and local herbs, found across most tribes'
                      cuisines.
                    </li>
                    <li>
                      <strong>Axone (fermented soybean):</strong> A pungent,
                      distinctive ingredient used in curries — an acquired
                      taste that's central to Naga cooking.
                    </li>
                    <li>
                      <strong>Naga King Chili dishes:</strong> Home to one of
                      the world's hottest chilies, used sparingly but
                      memorably in many local preparations.
                    </li>
                    <li>
                      <strong>Rice beer (Zutho):</strong> A traditional
                      fermented rice beverage, widely available and served at
                      the Hornbill Festival.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Nagaland Itinerary</h2>
                  <p>
                    Five days is a reasonable minimum to cover Kohima, the
                    Dzukou Valley trek, and at least one nearby tribal
                    village without excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Dimapur to Kohima",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive Dimapur, drive to Kohima (~3 hrs)",
                          "Check in, Kohima War Cemetery",
                          "Evening: Kohima Cathedral",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Kohima & Khonoma",
                        color: "bg-sky-600",
                        activities: [
                          "Kohima State Museum",
                          "Day trip to Khonoma Green Village",
                          "Explore terraced fields and Khonoma Fort",
                        ],
                      },
                      {
                        day: "Day 3–4",
                        title: "Dzukou Valley Trek",
                        color: "bg-forest-600",
                        activities: [
                          "Drive to Viswema, begin trek to Dzukou",
                          "Overnight at the trekkers' hut in the valley",
                          "Explore the valley, trek back down",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Kohima & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Rest, local market and craft shopping",
                          "Drive back to Dimapur",
                          "Departure",
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

                  <div
                    className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🎪 Traveling for Hornbill?</strong> Swap Day 2 for
                    a full day at Kisama Heritage Village, and add a 6th day
                    if you also want to fit in the Dzukou trek — the
                    festival alone comfortably fills a day.
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
                          [
                            "Accommodation/night",
                            "₹1,100",
                            "₹3,200",
                            "₹7,500",
                          ],
                          ["Food/day", "₹450", "₹1,000", "₹2,200"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,800",
                          ],
                          ["Activities/day", "₹300", "₹700", "₹1,500"],
                          ["Daily total", "₹2,350", "₹6,100", "₹14,000"],
                          [
                            "5-Day trip total",
                            "₹11,750",
                            "₹30,500",
                            "₹70,000",
                          ],
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
                    * Excludes flights to Dimapur. Accommodation costs rise
                    significantly around the Hornbill Festival — expect
                    30–50% premiums during that window.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Nagaland</h2>
                  <ul>
                    <li>
                      <strong>Apply for your Inner Line Permit ahead of
                      time:</strong> Indian citizens can now apply online —
                      arrange this before travel to avoid delays at entry
                      points.
                    </li>
                    <li>
                      <strong>Book Hornbill Festival stays 2–3 months
                      ahead:</strong> Kohima's limited accommodation sells
                      out well before December.
                    </li>
                    <li>
                      <strong>Hire a car with driver for Dzukou and rural
                      villages:</strong> Public transport is limited and slow
                      outside Kohima and Dimapur.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance is inconsistent outside Kohima's main
                      commercial areas.
                    </li>
                    <li>
                      <strong>Respect tribal village etiquette:</strong> Ask
                      before photographing people, especially tattooed
                      Konyak elders in Mon district — some may expect a small
                      fee.
                    </li>
                    <li>
                      <strong>Pack for cold nights:</strong> Even in a
                      tropical-feeling region, Kohima and Dzukou get cold
                      after dark, particularly October to February.
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
                          "Apply for your Inner Line Permit before travel",
                          "Book Kohima stays well ahead for Hornbill Festival",
                          "Hire a car with driver for Dzukou and Mon district",
                          "Try Naga specialties like axone and smoked pork",
                          "Ask permission before photographing tribal elders",
                          "Pack warm layers for evenings",
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
                          "Show up during Hornbill week without booking a room",
                          "Rely on public transport for Dzukou or Mon district",
                          "Rush the Dzukou trek in a single tight day",
                          "Rely on cards outside Kohima's main areas",
                          "Photograph people without asking first",
                          "Underestimate how cold Dzukou gets overnight",
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
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Nagaland",
                  "Hornbill Festival",
                  "Kohima",
                  "Dzukou Valley",
                  "Khonoma",
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

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={NAGALAND_GEAR}
                destination="Nagaland"
              />

              <RelatedPostsGrid />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
