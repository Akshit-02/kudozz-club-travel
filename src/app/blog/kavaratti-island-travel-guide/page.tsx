// src/app/blog/kavaratti-island-travel-guide/page.tsx
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
  title: "Kavaratti Island Travel Guide: Lagoon, Diving & Ujra Mosque",
  description:
    "The complete Kavaratti island travel guide — Lakshadweep's capital and most developed inhabited island. Kavaratti Beach and Lagoon, the Marine Aquarium, the driftwood-ceilinged Ujra Mosque, scuba diving, snorkelling, kayaking, and glass-bottom boat rides, where to stay, what to eat, and a full itinerary.",
  keywords:
    "Kavaratti island travel guide, Kavaratti Lakshadweep, Kavaratti beach, Kavaratti lagoon, Ujra mosque, Kavaratti aquarium, Kavaratti diving centre, Kavaratti water sports, Lakshadweep capital island, Lakshadweep permit, best time to visit Kavaratti, how to reach Kavaratti from Kochi, Kavaratti travel permit process, Kavaratti budget trip, things to do in Kavaratti island, Kavaratti 3 day itinerary, is Kavaratti safe for solo travellers, Kavaratti diving and snorkelling",
  openGraph: {
    title: "Kavaratti Island Travel Guide: Lagoon, Diving & Ujra Mosque",
    description:
      "Lakshadweep's capital island — a turquoise lagoon, a driftwood-ceilinged mosque, and some of the most accessible diving and water sports in the archipelago.",
    url: "https://club.kudozz.in/blog/kavaratti-island-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/lakshadweep/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise lagoon and white sand beach fringed with coconut palms, evoking Kavaratti island",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavaratti Island Travel Guide: Lagoon, Diving & Ujra Mosque",
    description:
      "Lakshadweep's capital island — a turquoise lagoon, the driftwood-ceilinged Ujra Mosque, and easy access to diving and water sports.",
    images: ["/images/destinations/lakshadweep/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kavaratti-island-travel-guide",
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
          headline: "Kavaratti Island Travel Guide: Lagoon, Diving & Ujra Mosque",
          description:
            "The complete Kavaratti island travel guide — Lakshadweep's capital and most developed inhabited island.",
          image:
            "https://club.kudozz.in/images/destinations/lakshadweep/hero.jpg",
          datePublished: "2026-07-24",
          dateModified: "2026-07-24",
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
            "@id": "https://club.kudozz.in/blog/kavaratti-island-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Kavaratti",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Lakshadweep",
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
                name: "Kavaratti Island Travel Guide",
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
    q: "How many days do I need for Kavaratti?",
    a: "Three days is a comfortable length for Kavaratti — enough time to settle in and swim the lagoon on Day 1, spend Day 2 diving, snorkelling, or kayaking and visiting the aquarium, and use Day 3 for Ujra Mosque and the town centre before departure. Longer stays are easy given the island's relatively developed accommodation, but three days covers the core sights without feeling rushed.",
  },
  {
    q: "Is Kavaratti safe for solo travellers?",
    a: "Kavaratti is Lakshadweep's capital and most developed inhabited island, with more established infrastructure, tour operators, and SPORTS-run guesthouses than most other islands in the archipelago — a genuine advantage for solo travellers navigating logistics. The island's culture is conservative and predominantly Muslim, so solo travellers should dress modestly, especially around the town centre and mosques, and should note that alcohol isn't available anywhere on the island.",
  },
  {
    q: "What is the best time to visit Kavaratti?",
    a: "October to May is the best window, when seas are calm enough for reliable ferry crossings and lagoon visibility is at its clearest. December to February is the most comfortable and busiest period, so book permits and accommodation weeks ahead; March to May is hotter but still delivers excellent diving visibility with fewer crowds. Avoid June to September, when the southwest monsoon makes ferry crossings unreliable and most operators pause departures.",
  },
  {
    q: "How do I reach Kavaratti from Kochi?",
    a: "Most visitors reach Kavaratti by passenger ship from Kochi, a crossing of roughly 14–20 hours depending on the vessel and sea conditions, with cabin and dormitory classes available. Alternatively, you can fly into Agatti Airport — Lakshadweep's only airstrip — and continue to Kavaratti by boat or a limited helicopter service; this route costs more but is worth it if you get seasick easily.",
  },
  {
    q: "Do I need a permit to visit Kavaratti?",
    a: "Yes. Lakshadweep is a restricted-entry territory, and every visitor — including Indian citizens — needs a permit to travel to Kavaratti; there's no permit-free access for domestic tourists as there is on most of the mainland. Permits are issued through the Lakshadweep administration's official portal or via SPORTS, and you should apply at least a few weeks ahead of travel — longer during the December–February peak — without booking flights or ferries until it's confirmed.",
  },
  {
    q: "What is the budget for a trip to Kavaratti?",
    a: "Expect roughly ₹2,500–₹9,000 per day depending on your accommodation tier and how much diving or water sports you add on, covering stays, food, and local transport. This excludes the ship or flight fare to reach the island and the permit fee, and most visitors book through SPORTS or a registered operator as a bundled package.",
  },
  {
    q: "What makes Ujra Mosque worth visiting?",
    a: "Ujra Mosque is Kavaratti's most distinctive heritage site, known locally for a ceiling reputedly built from shipwreck driftwood and intricately carved — one of the archipelago's most visited religious and architectural landmarks. It's worth checking visiting hours locally in advance, since it remains an active place of worship.",
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
  { id: "introduction", title: "Why Kavaratti?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "permits", title: "Entry Permit (Required)", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kavaratti", level: 2 },
  { id: "beach-lagoon", title: "Kavaratti Beach & Lagoon", level: 2 },
  { id: "aquarium-mosques", title: "Aquarium & Mosques", level: 2 },
  { id: "water-sports", title: "Diving & Water Sports", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Kavaratti-specific gear ───────────────────────────────────────────────────
const KAVARATTI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for lagoon swimming, glass-bottom boat rides, diving, and Kavaratti's strong tropical sun",
    emoji: "🤿",
    items: [
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Kavaratti's lagoon and beaches offer almost no shade, and reflection off the water intensifies UV exposure well beyond normal beach conditions.",
        price: "₹549",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+spf+50"),
        tag: "Lagoon essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Reef-safe formulas matter here specifically — Kavaratti's living coral lagoon is the whole point of the trip, and regular sunscreen chemicals damage it.",
      },
      {
        name: "Quick-Dry Rash Guard",
        description:
          "Full sun coverage for snorkelling, kayaking, and long stretches in the lagoon without reapplying sunscreen every hour.",
        price: "₹899",
        rating: 4.4,
        reviews: "6.1k",
        image: "🏊",
        affiliateUrl: amazonSearchUrl("rash+guard+full+sleeve+swim"),
        tag: "Water-sports essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Between glass-bottom boat rides, snorkelling, and kayaking, most of a Kavaratti day is spent in or on the water — a rash guard beats reapplying sunscreen constantly.",
      },
      {
        name: "Underwater Phone Pouch",
        description:
          "A simple waterproof pouch for photographing the lagoon's coral and fish during snorkelling or glass-bottom boat rides.",
        price: "₹399",
        rating: 4.2,
        reviews: "8.4k",
        image: "📱",
        affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+diving"),
        tag: "Photo essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Kavaratti's lagoon is genuinely photogenic just below the surface — a cheap pouch is enough to capture it without a dedicated underwater camera.",
      },
      {
        name: "Reef-Friendly Swim Shoes",
        description:
          "Protects against sharp coral and rocky patches while wading out into the lagoon or walking the reef flat at low tide.",
        price: "₹699",
        rating: 4.3,
        reviews: "5.2k",
        image: "🩴",
        affiliateUrl: amazonSearchUrl("reef+swim+shoes+water"),
        tag: "Reef essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "Coral and rock underfoot are common in the shallower parts of Kavaratti's lagoon — swim shoes prevent cuts and protect the reef itself.",
      },
      {
        name: "Modest Clothing for Mosque Visits",
        description:
          "Covered shoulders and knees, and a headscarf for women, when visiting the Ujra Mosque or other working mosques on the island.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.1k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("travel+modest+clothing+scarf"),
        tag: "Cultural essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Kavaratti's mosques are active places of worship for the island's predominantly Muslim population — modest dress is expected, not optional.",
      },
      {
        name: "Dry Bag (10L)",
        description:
          "Keeps phones, permits, and cash dry during kayaking, canoeing, and boat transfers between the jetty and dive or snorkel points.",
        price: "₹799",
        rating: 4.4,
        reviews: "4.7k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("waterproof+dry+bag+10l"),
        tag: "Boat-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "You'll be carrying your entry permit and ID on the island — a dry bag means it survives every boat and water-sports transfer intact.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KavarattiIslandGuidePage() {
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
              src="/images/destinations/lakshadweep/hero.jpg"
              alt="Turquoise lagoon and white sand beach fringed with coconut palms, evoking Kavaratti island"
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
                { label: "Lakshadweep", href: "/blog?category=lakshadweep" },
                { label: "Kavaratti", href: null },
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
                "Kavaratti",
                "Lakshadweep",
                "Capital Island",
                "Lagoon",
                "Scuba Diving",
                "Water Sports",
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
              Kavaratti Island Travel Guide: Lagoon, Diving & Ujra Mosque
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Lakshadweep's capital and most developed inhabited island — a
              vast turquoise lagoon, a mosque with a driftwood ceiling, and
              some of the archipelago's most accessible diving and water
              sports.
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
                  text: "Kavaratti, Lakshadweep",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Why Kavaratti?</h2>
                  <p>
                    As the capital and administrative headquarters of the
                    Lakshadweep Union Territory, <strong>Kavaratti</strong>{" "}
                    is also the archipelago's most developed inhabited
                    island — which, in Lakshadweep terms, still means a
                    small, quiet coral island wrapped around one of the most
                    strikingly clear lagoons in the entire chain.
                  </p>
                  <p>
                    That combination of infrastructure and natural beauty
                    makes Kavaratti one of the easiest Lakshadweep islands to
                    actually visit — better ferry and flight-linked transfer
                    options, an established water sports centre, and enough
                    facilities to support a proper multi-day stay, while
                    still delivering the turquoise lagoon and coral reef
                    that draw people to Lakshadweep in the first place.
                  </p>
                  <p>
                    Beyond the water, Kavaratti's Ujra Mosque — with a
                    ceiling reputedly built from shipwreck driftwood — and
                    the island's dense concentration of mosques reflect a
                    genuinely distinct Islamic island culture found nowhere
                    else on the Indian mainland.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏝️</span> Kavaratti at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Status",
                          value: "Capital, Lakshadweep UT",
                        },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Lagoon, diving, Ujra Mosque",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        {
                          icon: "🚢",
                          label: "From Kochi",
                          value: "Ship (~14–20 hrs) or via Agatti",
                        },
                        {
                          icon: "📋",
                          label: "Entry",
                          value: "Permit required",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,500 – ₹9,000",
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
                  <h2>Best Time to Visit Kavaratti</h2>
                  <p>
                    Kavaratti's tropical, monsoon-affected climate makes
                    timing genuinely important — both for calm seas on the
                    ferry crossing and for good underwater visibility.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – May",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas, minimal rain, and the clearest lagoon visibility of the year — the only realistic window for most ferry and boat operations.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Peak season — book early",
                        text: "The most comfortable temperatures and the busiest period for permits, ferries, and accommodation — plan several weeks ahead.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Southwest monsoon — largely closed",
                        text: "Rough seas make ferry crossings unreliable and often unsafe; most tour operators pause Lakshadweep departures entirely during this window.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌊",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but good diving",
                        text: "Air and water temperatures both climb, but the sea stays calm and underwater visibility remains excellent for diving and snorkelling.",
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
                    <strong>Our pick:</strong> December to February for
                    comfort, or April to May if you're prioritising diving
                    visibility and want to avoid peak-season crowds and
                    prices.
                  </blockquote>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Entry Permit (Required)</h2>
                  <p>
                    Lakshadweep is a restricted-entry territory for both
                    Indian and foreign nationals — Kavaratti is no
                    exception, and you cannot travel there without a valid
                    permit.
                  </p>
                  <ul>
                    <li>
                      <strong>Who needs one:</strong> Every visitor,
                      including Indian citizens — Lakshadweep has no
                      permit-free access for domestic tourists, unlike most
                      of the Indian mainland.
                    </li>
                    <li>
                      <strong>How to apply:</strong> Permits are issued
                      through the Lakshadweep administration's official
                      portal or via SPORTS (Society for Promotion of
                      Recreational Tourism and Sports), the government body
                      that also manages most organised tours and water
                      sports packages.
                    </li>
                    <li>
                      <strong>Processing time:</strong> Apply at least a few
                      weeks ahead of travel, longer during the December–
                      February peak season when volumes are highest.
                    </li>
                    <li>
                      <strong>Foreign nationals:</strong> Face additional
                      restrictions and a longer clearance process — most
                      book through a registered tour operator rather than
                      applying independently.
                    </li>
                  </ul>
                  <div
                    className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Important:</strong> Do not book flights or
                    ferry tickets before your permit is confirmed — approval
                    isn't guaranteed on a fixed timeline, and travel
                    agents who bundle permits with tour packages are usually
                    the smoothest route for first-time visitors.
                  </div>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kavaratti</h2>
                  <ul>
                    <li>
                      <strong>By Ship:</strong> Passenger ships depart from
                      Kochi and take roughly 14–20 hours depending on the
                      vessel and sea conditions — the most common way to
                      reach Kavaratti, with cabin and dormitory classes
                      available.
                    </li>
                    <li>
                      <strong>By Air:</strong> Kavaratti has no airport of
                      its own — flights land at Agatti Airport, the
                      archipelago's only airstrip, followed by a boat
                      transfer or helicopter connection onward to Kavaratti.
                    </li>
                    <li>
                      <strong>By Helicopter:</strong> Limited helicopter
                      services connect Agatti to Kavaratti and other
                      islands, cutting travel time significantly but at a
                      higher cost and with weather-dependent scheduling.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you get seasick easily,
                    the Agatti-flight-plus-onward-transfer route is worth the
                    extra cost over the full Kochi ship journey, especially
                    outside the calmest months.
                  </div>
                </section>

                {/* ── Beach & Lagoon ────────────────────────────────────── */}
                <section id="beach-lagoon">
                  <h2>Kavaratti Beach & Lagoon</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/lakshadweep/hero.jpg"
                      alt="Turquoise Kavaratti lagoon fringed with white sand and coconut palms"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Kavaratti's lagoon is the island's headline draw — a
                    wide, shallow, strikingly turquoise stretch of water
                    enclosed by the surrounding reef, calm enough for
                    swimming most days of the year.
                  </p>
                  <ul>
                    <li>
                      <strong>Kavaratti Beach:</strong> The main beach
                      stretch fronting the lagoon, with soft white sand and
                      easy access to swimming and water sports.
                    </li>
                    <li>
                      <strong>Kavaratti Lagoon:</strong> A vast, calm
                      lagoon enclosed by coral reef, giving Kavaratti some
                      of the clearest and most swimmable water in the
                      archipelago.
                    </li>
                    <li>
                      <strong>Lagoon swimming:</strong> The lagoon's shallow,
                      current-free water makes it genuinely suitable for
                      casual swimmers, not just experienced snorkellers and
                      divers.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit the lagoon in the
                    morning, when the water is at its calmest and clearest
                    before any afternoon wind picks up.
                  </div>
                </section>

                {/* ── Aquarium & Mosques ────────────────────────────────── */}
                <section id="aquarium-mosques">
                  <h2>Aquarium & Mosques</h2>
                  <p>
                    Kavaratti's cultural and educational sights are
                    concentrated in the island's small town centre, an easy
                    walk or short ride from most accommodation.
                  </p>
                  <ul>
                    <li>
                      <strong>Kavaratti Aquarium / Marine Aquarium:</strong>{" "}
                      A small government-run aquarium showcasing the corals
                      and reef fish species found in the surrounding lagoon
                      — a good primer before snorkelling or diving.
                    </li>
                    <li>
                      <strong>Ujra Mosque:</strong> The island's most
                      distinctive heritage site, notable for a ceiling
                      locally said to be built from shipwreck driftwood,
                      intricately carved — one of the archipelago's most
                      visited religious and architectural landmarks.
                    </li>
                    <li>
                      <strong>Kavaratti Mosque:</strong> One of many mosques
                      across the island, reflecting Kavaratti's dense
                      concentration of mosques relative to its small
                      population and its predominantly Muslim community.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Ask locally about visiting
                    hours before heading to Ujra Mosque — like any active
                    mosque, timing around prayer hours makes for a more
                    respectful and less rushed visit.
                  </div>
                </section>

                {/* ── Water Sports ──────────────────────────────────────── */}
                <section id="water-sports">
                  <h2>Diving & Water Sports</h2>
                  <p>
                    Kavaratti's water sports infrastructure is among the
                    best-developed in Lakshadweep, run largely through
                    SPORTS-affiliated centres based on the island.
                  </p>
                  <ul>
                    <li>
                      <strong>Kavaratti Diving Centre:</strong> Offers
                      introductory and certified scuba diving in the
                      surrounding reef, with equipment and instruction
                      available on-site.
                    </li>
                    <li>
                      <strong>Kavaratti Water Sports Centre:</strong> The
                      island's hub for kayaking, canoeing, and other
                      lagoon-based activities, typically bookable as part of
                      a tour package.
                    </li>
                    <li>
                      <strong>Glass-bottom boat rides:</strong> A low-effort,
                      family-friendly way to see the lagoon's coral and fish
                      without getting in the water — a good first activity
                      before deciding whether to snorkel or dive.
                    </li>
                    <li>
                      <strong>Scuba diving & snorkelling:</strong> Kavaratti's
                      reef offers accessible, shallow-water coral viewing
                      suitable for beginners, alongside deeper dive sites for
                      certified divers.
                    </li>
                    <li>
                      <strong>Kayaking & canoeing:</strong> The lagoon's calm,
                      current-free water makes it one of the more forgiving
                      spots in Lakshadweep to try either for the first time.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kavaratti</h2>
                  <p>
                    As the capital island, Kavaratti has Lakshadweep's most
                    developed accommodation options — still modest by
                    mainland standards, but noticeably more available than
                    most other inhabited islands.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Government tourist huts",
                          "SPORTS-run guesthouses",
                          "Basic island cottages",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹7,000/night",
                        picks: [
                          "Island resort cottages",
                          "SPORTS-affiliated tourist complexes",
                          "Standard sea-facing rooms",
                        ],
                      },
                      {
                        tier: "Upscale",
                        icon: "🏝️",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Premium beachfront cottages",
                          "Package tours with full-board stays",
                          "Limited high-end resort options",
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
                    Most Kavaratti stays are booked as part of a package
                    through SPORTS or a registered tour operator, bundling
                    accommodation, permit processing, and water sports
                    together — genuinely the simplest route for first-time
                    visitors.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Kavaratti</h2>
                  <ul>
                    <li>
                      <strong>Fresh seafood:</strong> Tuna and reef fish,
                      often grilled or in coconut-based curries, are the
                      island's culinary highlight.
                    </li>
                    <li>
                      <strong>Coconut-based dishes:</strong> As across
                      Lakshadweep, coconut features heavily in local
                      cooking, reflecting the island's dense palm cover.
                    </li>
                    <li>
                      <strong>South Indian and Kerala-influenced meals:</strong>{" "}
                      Given Kavaratti's close ties to Kochi, much of the
                      available food carries a strong Kerala culinary
                      influence.
                    </li>
                    <li>
                      <strong>No alcohol:</strong> Lakshadweep is
                      predominantly dry — don't expect bars or alcohol
                      service on Kavaratti, in keeping with the island's
                      religious and cultural norms.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Kavaratti Itinerary</h2>
                  <p>
                    Three days is a comfortable length for Kavaratti,
                    balancing arrival logistics with enough time in the
                    water and around the island's sights.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Lagoon",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive by ship or via Agatti transfer, check in",
                          "Afternoon: Kavaratti Beach and lagoon swimming",
                          "Evening: Glass-bottom boat ride",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Diving & Water Sports",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Scuba diving or snorkelling session",
                          "Afternoon: Kayaking or canoeing in the lagoon",
                          "Evening: Kavaratti Aquarium",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Heritage & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Ujra Mosque and a walk through town",
                          "Late morning: Last lagoon swim",
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
                          {["Expense", "Budget", "Mid-Range", "Upscale"].map(
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
                            "₹2,200",
                            "₹5,000",
                            "₹10,000",
                          ],
                          ["Food/day", "₹700", "₹1,200", "₹2,000"],
                          [
                            "Water sports/day",
                            "₹1,000",
                            "₹2,000",
                            "₹3,500",
                          ],
                          ["Local transport/day", "₹300", "₹500", "₹1,000"],
                          ["Daily total", "₹4,200", "₹8,700", "₹16,500"],
                          [
                            "3-Day trip total",
                            "₹12,600",
                            "₹26,100",
                            "₹49,500",
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
                    * Excludes travel to Kochi and the permit fee. Ship or
                    flight fare to Kavaratti (and onward transfer from
                    Agatti, if applicable) adds significantly to the total.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Kavaratti</h2>
                  <ul>
                    <li>
                      <strong>Apply for your permit well in advance:</strong>{" "}
                      Approval isn't instant, and demand spikes hard during
                      peak season — start the process at least a few weeks
                      ahead.
                    </li>
                    <li>
                      <strong>Book through SPORTS or a registered operator:</strong>{" "}
                      Bundled packages covering permit, accommodation, and
                      water sports are the simplest way to visit, especially
                      for first-timers.
                    </li>
                    <li>
                      <strong>Use reef-safe sunscreen only:</strong>{" "}
                      Kavaratti's living coral lagoon is genuinely
                      sensitive to regular sunscreen chemicals — reef-safe
                      formulas protect what you came to see.
                    </li>
                    <li>
                      <strong>Dress modestly, especially near mosques:</strong>{" "}
                      Kavaratti's culture is conservative and predominantly
                      Muslim — covered shoulders and knees are expected
                      island-wide, not just at religious sites.
                    </li>
                    <li>
                      <strong>Don't expect alcohol:</strong> Lakshadweep is
                      largely dry — plan accordingly if this affects your
                      trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM and card
                      infrastructure is limited even on Kavaratti, the most
                      developed island in the chain.
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
                          "Apply for your entry permit weeks before travel",
                          "Book through SPORTS or a registered tour operator",
                          "Use reef-safe sunscreen in the lagoon",
                          "Dress modestly, especially near Ujra Mosque",
                          "Try a glass-bottom boat ride before deciding to dive",
                          "Carry enough cash for the whole trip",
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
                          "Book flights or ferries before your permit is confirmed",
                          "Travel during the June–September monsoon window",
                          "Use regular sunscreen in the lagoon",
                          "Expect alcohol availability on the island",
                          "Rely on cards for everyday expenses",
                          "Skip modest dress around mosques and the town centre",
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
                  "Kavaratti",
                  "Lakshadweep",
                  "Capital Island",
                  "Lagoon",
                  "Scuba Diving",
                  "Water Sports",
                  "Ujra Mosque",
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
                sections={KAVARATTI_GEAR}
                destination="Kavaratti"
              />

              <RelatedPostsGrid currentSlug="kavaratti-island-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kavaratti-island-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
