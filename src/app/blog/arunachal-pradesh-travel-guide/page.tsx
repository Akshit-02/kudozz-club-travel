// src/app/blog/arunachal-pradesh-travel-guide/page.tsx
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
  title: "Arunachal Pradesh Travel Guide: Tawang, Ziro Valley & Bomdila",
  description:
    "The complete Arunachal Pradesh travel guide — Tawang's monastery and Himalayan frontier, Bomdila and Dirang, Ziro Valley's Apatani villages, Namdapha's rainforest, permit requirements (ILP/PAP), where to stay, what to eat, and a full itinerary through India's largest Northeastern state.",
  keywords:
    "Arunachal Pradesh travel guide, Tawang Monastery, Sela Pass, Bomdila, Dirang, Ziro Valley, Namdapha National Park, Inner Line Permit Arunachal, Protected Area Permit, Arunachal Pradesh itinerary, Northeast India travel, best time to visit Arunachal Pradesh, how to reach Tawang from Guwahati, Arunachal Pradesh itinerary 8 days, is Arunachal Pradesh safe for solo travellers, Arunachal Pradesh budget trip, things to do in Tawang, Ziro Valley Apatani tribe, Bum La Pass permit, Sela Pass road trip, Arunachal Pradesh travel FAQ",
  openGraph: {
    title: "Arunachal Pradesh Travel Guide: Tawang, Ziro Valley & Bomdila",
    description:
      "Monasteries perched at 10,000 feet, terraced valleys, and one of India's last true frontiers — the complete guide to Arunachal Pradesh.",
    url: "https://club.kudozz.in/blog/arunachal-pradesh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green terraced valley with traditional bamboo houses in Ziro, Arunachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arunachal Pradesh Travel Guide: Tawang, Ziro Valley & Bomdila",
    description:
      "Himalayan monasteries, terraced valleys, and one of India's last true frontiers — the complete guide to Arunachal Pradesh.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/arunachal-pradesh-travel-guide",
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
            "Arunachal Pradesh Travel Guide: Tawang, Ziro Valley & Bomdila",
          description: "The complete Arunachal Pradesh travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/arunachal-pradesh-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Arunachal Pradesh",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Arunachal Pradesh",
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
                name: "Arunachal Pradesh Travel Guide",
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
    q: "How many days do I need for Arunachal Pradesh?",
    a: "Eight days is a realistic minimum to properly cover Tawang with a Ziro Valley extension — trying to compress this further mostly means sacrificing rest and acclimatization days. Given how far Ziro sits from Tawang, some travelers prefer splitting the state into two separate, shorter trips instead of one combined loop.",
  },
  {
    q: "What is the best time to visit Arunachal Pradesh?",
    a: "October and November are the best window, with clear skies, crisp mountain air, and post-monsoon roads in their best shape for Tawang and the passes. March-April is a good alternative for rhododendron blooms, while December-February can bring heavy snow and temporary road closures, and June-September monsoon carries real landslide risk on the mountain roads.",
  },
  {
    q: "How do I reach Tawang from Guwahati?",
    a: "Guwahati (GAU) in Assam is the main air gateway to the region. From there, expect long, scenic, but genuinely slow mountain drives via Tezpur or Itanagar — the Guwahati–Tawang stretch alone typically takes two full days of driving, so a car with an experienced local driver is the realistic way to get around.",
  },
  {
    q: "Do I need a permit to visit Arunachal Pradesh?",
    a: "Yes. Indian citizens need an Inner Line Permit (ILP), applied for online in advance or in some cases on arrival at entry checkpoints. Foreign nationals need a Protected Area Permit (PAP) instead, typically arranged through a registered travel agent and sometimes requiring a minimum group size.",
  },
  {
    q: "What is the budget for a trip to Arunachal Pradesh?",
    a: "A daily budget runs roughly ₹5,500 on a budget trip, ₹10,300 mid-range, or ₹20,500 luxury, with a hired car with driver as the single biggest line item. An 8-day trip totals about ₹44,000–₹1,64,000 depending on tier, excluding flights into Guwahati.",
  },
  {
    q: "Is Arunachal Pradesh safe for solo travellers?",
    a: "The state is genuinely remote with thin infrastructure outside Itanagar, Tawang, and Ziro, long distances, and mountain roads, so it requires real planning rather than posing a specific safety risk. A hired car with an experienced local driver, cash for smaller towns, and buffer days for weather and road delays are all recommended regardless of group size.",
  },
  {
    q: "What is Ziro Valley known for?",
    a: "Ziro Valley is home to the Apatani tribe and is Arunachal's most famous valley — a UNESCO tentative World Heritage site known for its distinctive terraced rice-fish fields, traditional bamboo villages, and pine-covered hills. It also hosts the annual Ziro Music Festival every September, one of India's best independent music festivals.",
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
  { id: "introduction", title: "Why Arunachal Pradesh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach & Permits", level: 2 },
  { id: "tawang", title: "Tawang: Monasteries & the Frontier", level: 2 },
  { id: "ziro-valley", title: "Ziro Valley", level: 2 },
  { id: "other-sights", title: "Bomdila, Dirang, Namdapha & Pasighat", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "8-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Arunachal Pradesh-specific gear ────────────────────────────────────────
const ARUNACHAL_PRADESH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for high-altitude cold, long mountain drives, and Arunachal's remoteness",
    emoji: "🏔️",
    items: [
      {
        name: "Insulated Jacket",
        description:
          "Sela Pass and Tawang sit above 10,000–13,000 feet and stay cold year-round, even outside the deep winter months.",
        price: "₹2,999",
        rating: 4.4,
        reviews: "6.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("insulated+jacket+high+altitude"),
        tag: "Cold-weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Temperatures near Sela Pass and Bum La can drop sharply even in October and April — layering matters more than the calendar suggests.",
      },
      {
        name: "Waterproof Trekking Shoes",
        description:
          "Useful for monastery courtyards, rice-field trails around Ziro, and uneven terrain around Namdapha.",
        price: "₹2,499",
        rating: 4.3,
        reviews: "7.8k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("waterproof+trekking+shoes"),
        tag: "All-terrain essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Roads and paths across the state range from broken mountain tarmac to muddy village trails — grip and water resistance both matter.",
      },
      {
        name: "Power Bank (20,000 mAh)",
        description:
          "Electricity can be unreliable in smaller towns, and mountain drives between hubs often run 6–10 hours without charging points.",
        price: "₹1,799",
        rating: 4.5,
        reviews: "8.9k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+20000mAh+travel"),
        tag: "Remote-travel essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "With long, winding drives between Bomdila, Tawang, and Ziro, and patchy power in remoter guesthouses, a larger bank is worth the extra weight.",
      },
      {
        name: "Rain Jacket / Poncho",
        description:
          "Even outside the monsoon, sudden mountain showers are common in the hills around Bomdila, Dirang, and Ziro.",
        price: "₹899",
        rating: 4.3,
        reviews: "5.2k",
        image: "🌧️",
        affiliateUrl: amazonSearchUrl("rain+jacket+trekking"),
        tag: "Weather essential",
        tagColor: "bg-blue-100 text-blue-700",
        why: "Weather changes fast at altitude — a packable rain layer earns its space even on a clear-looking morning.",
      },
      {
        name: "Basic First Aid & Altitude Kit",
        description:
          "Includes paracetamol, ORS, and altitude-sickness medication for the Sela Pass crossing and Tawang's elevation.",
        price: "₹599",
        rating: 4.4,
        reviews: "4.1k",
        image: "💊",
        affiliateUrl: amazonSearchUrl("travel+first+aid+altitude+kit"),
        tag: "Health essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Medical facilities thin out fast outside Itanagar and Tawang town — a basic kit and altitude awareness go a long way.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long mountain drives and monastery visits, and reduces reliance on plastic in a genuinely remote region.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "An insulated bottle also keeps drinking water from freezing on cold high-altitude mornings near Sela Pass.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ArunachalPradeshGuidePage() {
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
              alt="Green terraced valley with traditional bamboo houses in Ziro, Arunachal Pradesh"
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
                {
                  label: "Arunachal Pradesh",
                  href: "/blog?category=arunachal-pradesh",
                },
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
                "Arunachal Pradesh",
                "Tawang",
                "Ziro Valley",
                "Bomdila",
                "Northeast India",
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
              Arunachal Pradesh Travel Guide: Tawang, Ziro Valley & Bomdila
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              India's largest Northeastern state, wedged between Tibet,
              Bhutan, and Myanmar — a land of Himalayan monasteries, terraced
              tribal valleys, and some of the country's least-visited,
              most genuinely remote corners.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "19 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Arunachal Pradesh, Northeast India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,650 words",
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
                  <h2>Why Arunachal Pradesh?</h2>
                  <p>
                    <strong>Arunachal Pradesh</strong> is India's largest
                    Northeastern state by area, and one of its least
                    explored — a dramatic stretch of the Eastern Himalaya
                    bordering Tibet (China), Bhutan, and Myanmar, home to
                    more than 20 major tribal communities, each with its own
                    language, dress, and traditions.
                  </p>
                  <p>
                    The state's name translates roughly to "land of the
                    dawn-lit mountains," and it's a fitting one —{" "}
                    <strong>Dong Village</strong>, in the state's far east,
                    is often cited as the first place in India to see the
                    sunrise. Between towering monasteries, terraced tribal
                    valleys, and some of the country's most biodiverse
                    rainforest, Arunachal offers a genuinely different kind
                    of Himalayan trip.
                  </p>
                  <p>
                    It's also, honestly, one of India's most remote and
                    least tourist-developed states. Outside Itanagar, Tawang,
                    and Ziro, infrastructure is thin, distances are long, and
                    travel takes real planning — both of which are exactly
                    why so few people go, and why the ones who do tend to
                    come back with stories no one else has.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Arunachal Pradesh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Arunachal Pradesh",
                        },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Guwahati (GAU)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🛂",
                          label: "Permits",
                          value: "ILP (Indian) / PAP (foreign)",
                        },
                        {
                          icon: "🏔️",
                          label: "Known For",
                          value: "Tawang Monastery, Ziro Valley",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,000 – ₹9,000",
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
                  <h2>Best Time to Visit Arunachal Pradesh</h2>
                  <p>
                    Given the state's altitude range and mountain roads,
                    timing your trip matters more here than in most of
                    India — both for comfortable travel and for basic road
                    accessibility.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Nov",
                        emoji: "🍂",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies, crisp mountain air, and post-monsoon roads in their best shape — the most reliable window for Tawang and the passes.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Good alternative",
                        text: "Rhododendrons in bloom and generally clear passes, though late-season snow can still occasionally close Sela Pass.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Deep winter — check access",
                        text: "Tawang and other high-altitude areas can see heavy snow and temporary road closures — beautiful, but confirm access before you commit.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-red-50 border-red-200",
                        mood: "Monsoon — landslide risk",
                        text: "Heavy rain brings real landslide risk on the state's narrow, winding mountain roads — best avoided unless you have flexible dates.",
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
                    <strong>Our pick:</strong> October and November —
                    reliably clear mountain passes, comfortable daytime
                    temperatures, and the best odds of Tawang and Sela Pass
                    being fully open without deep-winter snow disruption.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Arunachal Pradesh & Permits</h2>
                  <p>
                    Getting into Arunachal Pradesh involves two things most
                    Indian trips don't: a permit, and a long final stretch
                    of mountain road. Neither is a dealbreaker, but both
                    need planning ahead.
                  </p>
                  <ul>
                    <li>
                      <strong>Inner Line Permit (ILP):</strong> Required for
                      all Indian citizens entering Arunachal Pradesh. It can
                      be applied for online in advance or, in some cases, on
                      arrival at entry checkpoints — applying online well
                      ahead of your trip is strongly recommended.
                    </li>
                    <li>
                      <strong>Protected Area Permit (PAP):</strong> Required
                      for foreign nationals in place of the ILP, typically
                      arranged through a registered travel agent and needing
                      a minimum group size in some cases — check current
                      rules well before booking flights.
                    </li>
                    <li>
                      <strong>By Air:</strong> Guwahati (GAU) in Assam is
                      the main air gateway to the region, with the best
                      domestic flight connectivity. Itanagar's Donyi Polo
                      Airport has limited connections and is a useful
                      onward option when flights are running.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Guwahati and Naharlagun
                      (near Itanagar) are the most useful rail stations for
                      reaching the state.
                    </li>
                    <li>
                      <strong>By Road:</strong> Tezpur and Itanagar are
                      common onward points from Guwahati. From there, expect
                      long, scenic, but genuinely slow mountain drives — the
                      Guwahati–Tawang stretch alone typically takes two full
                      days of driving.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Apply for your ILP online at
                    least a couple of weeks before departure, and keep
                    multiple printed copies — you'll show it at several
                    checkpoints along the way, and connectivity to pull up a
                    digital copy isn't guaranteed.
                  </div>
                </section>

                {/* ── Tawang ────────────────────────────────────────────── */}
                <section id="tawang">
                  <h2>Tawang: Monasteries & the Himalayan Frontier</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="A river winding through green hills — evocative of the valleys en route to Tawang, though not a photograph of Tawang itself"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Perched above 10,000 feet near the Bhutan and Tibet
                    borders, <strong>Tawang</strong> is Arunachal's
                    best-known destination, and the one most travelers
                    build a trip around.
                  </p>
                  <ul>
                    <li>
                      <strong>Tawang Monastery:</strong> Founded in the 17th
                      century, it's one of the largest Buddhist monasteries
                      in the world and the second-largest after Lhasa's
                      Potala Palace — home to several hundred monks and a
                      genuinely striking hilltop setting.
                    </li>
                    <li>
                      <strong>Sela Pass:</strong> At over 13,000 feet, this
                      high mountain pass on the road into Tawang is
                      dramatic in its own right, often snow-lined and edged
                      by a glacial lake.
                    </li>
                    <li>
                      <strong>Bum La Pass:</strong> A high-altitude pass
                      near the actual China border, accessible with special
                      permits arranged through the Indian Army — a
                      genuinely rare frontier experience.
                    </li>
                    <li>
                      <strong>Tawang War Memorial:</strong> A tribute to
                      Indian soldiers of the 1962 Indo-China war, with an
                      evening light and sound show recounting the conflict.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Give yourself a rest day in
                    Bomdila or Dirang before continuing to Tawang — the
                    altitude gain over Sela Pass can hit unacclimatized
                    travelers harder than expected.
                  </div>
                </section>

                {/* ── Ziro Valley (kept high-level) ─────────────────────── */}
                <section id="ziro-valley">
                  <h2>Ziro Valley</h2>
                  <p>
                    <strong>Ziro Valley</strong>, home to the{" "}
                    <strong>Apatani tribe</strong>, is Arunachal's most
                    famous valley — a UNESCO tentative World Heritage
                    site known for its distinctive terraced rice-fish
                    fields, traditional bamboo villages, and pine-covered
                    hills. The Apatani are notable for a unique wet-rice
                    cultivation system that doesn't rely on animal labor,
                    and their villages remain some of the most
                    culturally intact in the region.
                  </p>
                  <p>
                    Ziro is also home to the annual{" "}
                    <strong>Ziro Music Festival</strong>, held every
                    September and widely regarded as one of India's best
                    independent music festivals, set against the valley's
                    terraced landscape.
                  </p>
                  <p>
                    We've covered Ziro in far greater depth — Apatani
                    village-by-village detail, a dedicated itinerary, and
                    festival logistics — in a separate, dedicated Ziro
                    Valley guide on this site. If Ziro is your main focus
                    rather than a stop on a broader Arunachal trip, that's
                    the better starting point; consider this section a
                    primer for fitting Ziro into a larger state-wide route.
                  </p>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Bomdila, Dirang, Namdapha & Pasighat</h2>
                  <ul>
                    <li>
                      <strong>Bomdila:</strong> A monastery town and the
                      usual gateway to Tawang, sitting at a gentler altitude
                      that makes it a good acclimatization stop, with wide
                      views over the surrounding hills.
                    </li>
                    <li>
                      <strong>Dirang:</strong> Known for its apple orchards,
                      kiwi farms, and natural hot springs, Dirang makes for
                      a pleasant, low-key stopover between Bomdila and
                      Tawang.
                    </li>
                    <li>
                      <strong>Namdapha National Park:</strong> One of
                      India's most biodiverse and remote protected areas,
                      and one of the few places in the world reported to
                      host four big cat species — tiger, leopard, snow
                      leopard, and clouded leopard — across its altitude
                      range. Access is genuinely difficult and best
                      arranged with local guides.
                    </li>
                    <li>
                      <strong>Pasighat:</strong> Arunachal's oldest town,
                      set on the banks of the Siang (the Brahmaputra as it
                      enters India), with a much gentler, riverine
                      landscape than the state's high-altitude west.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation in Arunachal Pradesh is genuinely limited
                    outside Itanagar, Tawang, and Ziro — smaller towns like
                    Bomdila, Dirang, and Pasighat mostly offer simple
                    guesthouses rather than branded hotels, and it's worth
                    resetting expectations accordingly.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses, Bomdila & Dirang",
                          "Homestays, Ziro's Apatani villages",
                          "Basic lodges, Tawang town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹5,000/night",
                        picks: [
                          "Hotels, Tawang & Itanagar",
                          "Boutique homestays, Ziro",
                          "Resort-style stays, Dirang",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹6,000–₹14,000+/night",
                        picks: [
                          "Premium hotels, Tawang",
                          "Well-appointed resorts, Ziro",
                          "Select stays, Itanagar",
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
                    Don't expect much choice in Bomdila, Dirang, or Pasighat
                    — book what's available rather than holding out for a
                    specific property, and confirm a room is actually
                    reserved before you arrive.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Arunachal Pradesh</h2>
                  <ul>
                    <li>
                      <strong>Thukpa:</strong> A warming Tibetan-style
                      noodle soup, especially welcome in Tawang and
                      Bomdila's cold mountain air.
                    </li>
                    <li>
                      <strong>Momos:</strong> Steamed or fried dumplings,
                      widely available across the state and a reliable,
                      filling option almost everywhere.
                    </li>
                    <li>
                      <strong>Bamboo shoot dishes:</strong> A staple across
                      tribal cuisine in Arunachal, often cooked with pork
                      or fish and fermented for distinctive, sharp flavor.
                    </li>
                    <li>
                      <strong>Apong:</strong> A traditional local rice beer,
                      brewed by several tribes across the state and often
                      served at village gatherings and festivals.
                    </li>
                    <li>
                      Broadly, Arunachal's food shares much with wider
                      Northeast Indian tribal cuisine — minimal spice,
                      fermented and smoked ingredients, and a strong
                      emphasis on local, foraged produce over anything
                      packaged.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>8-Day Arunachal Pradesh Itinerary</h2>
                  <p>
                    Given the distances involved, eight days is a realistic
                    minimum to properly cover Tawang with a Ziro Valley
                    extension — trying to compress this further mostly
                    means sacrificing rest and acclimatization days.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Guwahati Entry",
                        color: "bg-stone-600",
                        activities: [
                          "Arrive Guwahati, collect/confirm ILP",
                          "Overnight in Guwahati or Tezpur",
                          "Stock up on essentials before the mountains",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Drive to Bomdila",
                        color: "bg-amber-700",
                        activities: [
                          "Long scenic drive into the hills",
                          "Bomdila Monastery and market",
                          "Acclimatize to the altitude gain",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Bomdila to Dirang",
                        color: "bg-forest-600",
                        activities: [
                          "Short drive to Dirang",
                          "Apple orchards and hot springs",
                          "Easy day before the pass crossing",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Dirang to Tawang via Sela Pass",
                        color: "bg-sky-700",
                        activities: [
                          "Cross Sela Pass (~13,700 ft)",
                          "Arrive Tawang, settle in",
                          "Evening at leisure",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Tawang",
                        color: "bg-purple-700",
                        activities: [
                          "Tawang Monastery",
                          "Tawang War Memorial",
                          "Local market and monastery museum",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Bum La Pass Excursion",
                        color: "bg-rose-700",
                        activities: [
                          "Permit-based day trip toward the China border",
                          "Return to Tawang for the night",
                          "Alternative: nearby lakes if permits unavailable",
                        ],
                      },
                      {
                        day: "Day 7",
                        title: "Travel Toward Ziro",
                        color: "bg-amber-800",
                        activities: [
                          "Begin the long transfer back and toward Ziro",
                          "Overnight en route (Itanagar or similar)",
                          "Long driving day — build in buffer time",
                        ],
                      },
                      {
                        day: "Day 8",
                        title: "Ziro Valley & Departure",
                        color: "bg-forest-700",
                        activities: [
                          "Apatani villages and rice-field walks",
                          "Time permitting, extend for a further day",
                          "Depart via Naharlagun/Itanagar",
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
                    * Given how far Ziro sits from Tawang, some travelers
                    prefer splitting this into two separate, shorter trips
                    rather than one combined loop — both are valid
                    approaches depending on how much driving you want to do.
                  </p>
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
                            "₹1,000",
                            "₹3,200",
                            "₹8,500",
                          ],
                          ["Food/day", "₹500", "₹1,100", "₹2,500"],
                          [
                            "Car with driver/day",
                            "₹3,500",
                            "₹4,500",
                            "₹6,500",
                          ],
                          [
                            "Permits & entry fees (trip)",
                            "₹500",
                            "₹1,500",
                            "₹3,000",
                          ],
                          ["Daily total", "₹5,500", "₹10,300", "₹20,500"],
                          [
                            "8-Day trip total",
                            "₹44,000",
                            "₹82,400",
                            "₹164,000",
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
                    * Excludes flights into Guwahati. A car with driver is
                    the single biggest line item — given road conditions and
                    the distances involved, this is not a state where
                    self-driving or public transport realistically works
                    for most travelers.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Arunachal Pradesh</h2>
                  <ul>
                    <li>
                      <strong>Apply for your ILP/PAP well in advance:</strong>{" "}
                      Don't leave permit paperwork to the last minute —
                      processing can take time, and you'll need it at
                      multiple checkpoints along your route.
                    </li>
                    <li>
                      <strong>Hire a car with driver:</strong> Given the
                      state's road conditions and the distances between
                      towns, a hired car with an experienced local driver is
                      the realistic way to get around.
                    </li>
                    <li>
                      <strong>Respect altitude at Sela Pass and Tawang:</strong>{" "}
                      Both sit well above 10,000 feet — build in
                      acclimatization stops in Bomdila or Dirang rather than
                      pushing straight through.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs and card acceptance
                      thin out quickly outside Itanagar, Tawang town, and
                      Ziro — carry enough cash for several days at a time.
                    </li>
                    <li>
                      <strong>Pack for cold even outside deep winter:</strong>{" "}
                      High-altitude areas stay genuinely cold well into
                      spring and autumn — layer accordingly regardless of
                      when you visit.
                    </li>
                    <li>
                      <strong>Build in buffer days:</strong> Landslides,
                      weather closures, and long drive times are all
                      realistic possibilities — an itinerary with zero
                      slack is a fragile one here.
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
                          "Apply for ILP/PAP well ahead of your trip",
                          "Hire a car with an experienced local driver",
                          "Build in acclimatization stops before Sela Pass",
                          "Carry cash for smaller towns and villages",
                          "Pack warm layers regardless of season",
                          "Leave buffer days for weather and road delays",
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
                          "Show up without a confirmed ILP/PAP in hand",
                          "Attempt self-driving on unfamiliar mountain roads",
                          "Rush from lower altitude straight over Sela Pass",
                          "Rely on cards outside the main towns",
                          "Travel during peak monsoon (Jun–Sep)",
                          "Plan a trip with zero schedule flexibility",
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
                  "Arunachal Pradesh",
                  "Tawang",
                  "Ziro Valley",
                  "Bomdila",
                  "Namdapha",
                  "Northeast India",
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
                sections={ARUNACHAL_PRADESH_GEAR}
                destination="Arunachal Pradesh"
              />

              <RelatedPostsGrid currentSlug="arunachal-pradesh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="arunachal-pradesh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
