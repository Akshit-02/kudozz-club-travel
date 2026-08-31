// src/app/blog/agatti-island-travel-guide/page.tsx
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
  title: "Agatti Island Travel Guide: Lagoon, Reefs & Diving Spots",
  description:
    "The complete Agatti island travel guide — Lakshadweep's gateway island and one of its most popular. Agatti Beach and Lagoon, the Agatti Island Resort, coral reefs and diving spots, snorkelling sites, kayaking, glass-bottom boat rides, lagoon cruises, and sunset views, where to stay, what to eat, and a full itinerary.",
  keywords:
    "Agatti island travel guide, Agatti Lakshadweep, Agatti airport, Agatti beach, Agatti lagoon, Agatti Island Resort, Agatti coral reefs, Agatti diving spots, Lakshadweep permit, Lakshadweep gateway island, best time to visit Agatti, how to reach Agatti from Kochi, Agatti itinerary 3 days, is Agatti safe for solo travellers, Agatti budget trip, things to do in Agatti, Agatti snorkelling and kayaking, Agatti lagoon cruise sunset, Kochi to Agatti flight time, Lakshadweep travel guide",
  openGraph: {
    title: "Agatti Island Travel Guide: Lagoon, Reefs & Diving Spots",
    description:
      "Lakshadweep's gateway island — home to the archipelago's only airport, a famously vast lagoon, and some of its best coral reef diving.",
    url: "https://club.kudozz.in/blog/agatti-island-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/lakshadweep/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise lagoon and white sand beach fringed with coconut palms, evoking Agatti island",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agatti Island Travel Guide: Lagoon, Reefs & Diving Spots",
    description:
      "Lakshadweep's gateway island — a famously vast lagoon, coral reefs, and some of the archipelago's most popular diving spots.",
    images: ["/images/destinations/lakshadweep/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/agatti-island-travel-guide",
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
          headline: "Agatti Island Travel Guide: Lagoon, Reefs & Diving Spots",
          description:
            "The complete Agatti island travel guide — Lakshadweep's gateway island and one of its most popular tourist destinations.",
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
            "@id": "https://club.kudozz.in/blog/agatti-island-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Agatti",
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
                name: "Agatti Island Travel Guide",
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
    q: "How many days do I need for Agatti?",
    a: "Three days is a comfortable length for Agatti, whether it's your only stop or the first leg of a longer Lakshadweep trip — enough time for the lagoon, a reef dive or snorkel session, a lagoon cruise, and a relaxed final morning before departure.",
  },
  {
    q: "What is the best time to visit Agatti?",
    a: "October to May is the best window overall, with calm seas and clear lagoon and reef visibility. December to February is the most comfortable and busiest period, so book well ahead, while March to May stays hot but keeps excellent diving visibility. The June–September southwest monsoon is largely avoided, since most tour operators pause departures.",
  },
  {
    q: "How do I reach Agatti from Kochi?",
    a: "The fastest way is a roughly 1.5-hour flight from Kochi to Agatti Airport, Lakshadweep's only airport. Passenger ships from Kochi also serve Agatti, taking 14+ hours but at a lower cost, with cabin and dormitory classes available.",
  },
  {
    q: "Do I need a permit to visit Agatti?",
    a: "Yes. Lakshadweep is a restricted-entry territory for both Indian and foreign nationals, and every visitor needs a permit, issued through the Lakshadweep administration's official portal or via SPORTS. Apply at least a few weeks ahead of travel, longer during the December–February peak season.",
  },
  {
    q: "What is the budget for a trip to Agatti?",
    a: "A daily budget runs roughly ₹4,800 on a budget trip, ₹9,500 mid-range, or ₹18,200 upscale, covering accommodation, food, diving/water sports, and local transport. For a 3-day trip that works out to about ₹14,400–₹54,600 depending on tier, excluding the Kochi–Agatti flight and permit fee.",
  },
  {
    q: "Is Agatti worth visiting, and what is it known for?",
    a: "Yes — Agatti is Lakshadweep's gateway island, known for its wide, shallow turquoise lagoon, some of the archipelago's healthiest coral reef, accessible snorkelling and diving spots, lagoon cruises, and reliably good sunset views, making it a genuine destination rather than just a transit stop.",
  },
  {
    q: "Can beginners snorkel or dive at Agatti's reefs?",
    a: "Yes. Agatti's shallow reef flats sit close to shore, making it one of the more accessible islands for snorkelling without a boat transfer, and resort-affiliated operators provide equipment and instruction for both beginners and certified divers at its diving spots.",
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
  { id: "introduction", title: "Why Agatti?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "permits", title: "Entry Permit (Required)", level: 2 },
  { id: "how-to-reach", title: "How to Reach Agatti", level: 2 },
  { id: "beach-lagoon", title: "Agatti Beach & Lagoon", level: 2 },
  { id: "diving-snorkeling", title: "Reefs, Diving & Snorkelling", level: 2 },
  { id: "cruises-sunsets", title: "Lagoon Cruises & Sunset Views", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "3-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Agatti-specific gear ──────────────────────────────────────────────────────
const AGATTI_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for lagoon swimming, reef diving, glass-bottom boat rides, and Agatti's strong tropical sun",
    emoji: "🤿",
    items: [
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Agatti's lagoon and beaches offer almost no shade, and reflection off the shallow water intensifies UV exposure well beyond normal beach conditions.",
        price: "₹549",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+spf+50"),
        tag: "Lagoon essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Reef-safe formulas matter specifically here — Agatti's coral reefs are among the healthiest in Lakshadweep, and regular sunscreen chemicals damage them.",
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
        why: "Between glass-bottom boat rides, snorkelling, and kayaking, most of an Agatti day is spent in or on the water — a rash guard beats reapplying sunscreen constantly.",
      },
      {
        name: "Underwater Phone Pouch",
        description:
          "A simple waterproof pouch for photographing Agatti's coral reefs and fish during snorkelling or glass-bottom boat rides.",
        price: "₹399",
        rating: 4.2,
        reviews: "8.4k",
        image: "📱",
        affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+diving"),
        tag: "Photo essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Agatti's reefs are genuinely photogenic just below the surface — a cheap pouch is enough to capture it without a dedicated underwater camera.",
      },
      {
        name: "Reef-Friendly Swim Shoes",
        description:
          "Protects against sharp coral and rocky patches while wading into the lagoon or approaching the reef flat at low tide.",
        price: "₹699",
        rating: 4.3,
        reviews: "5.2k",
        image: "🩴",
        affiliateUrl: amazonSearchUrl("reef+swim+shoes+water"),
        tag: "Reef essential",
        tagColor: "bg-orange-100 text-orange-700",
        why: "Coral and rock underfoot are common in the shallower parts of Agatti's lagoon — swim shoes prevent cuts and protect the reef itself.",
      },
      {
        name: "Polarized Sunglasses",
        description:
          "Cuts glare off the lagoon's flat, mirror-bright water — useful for both comfort and for spotting reef features from a boat.",
        price: "₹799",
        rating: 4.4,
        reviews: "7.3k",
        image: "🕶️",
        affiliateUrl: amazonSearchUrl("polarized+sunglasses+travel"),
        tag: "Boat-trip essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Agatti's lagoon cruises and sunset boat rides involve long stretches looking out over bright, glare-heavy water.",
      },
      {
        name: "Dry Bag (10L)",
        description:
          "Keeps phones, permits, and cash dry during boat transfers between the jetty and dive, snorkel, or lagoon cruise points.",
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
export default function AgattiIslandGuidePage() {
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
              alt="Turquoise lagoon and white sand beach fringed with coconut palms, evoking Agatti island"
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
                { label: "Agatti", href: null },
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
                "Agatti",
                "Lakshadweep",
                "Gateway Island",
                "Lagoon",
                "Coral Reefs",
                "Scuba Diving",
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
              Agatti Island Travel Guide: Lagoon, Reefs & Diving Spots
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Lakshadweep's gateway island — home to the archipelago's only
              airport, a famously vast turquoise lagoon visible from the air,
              and some of the best coral reef diving in the chain.
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
                  text: "Agatti, Lakshadweep",
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
                  <h2>Why Agatti?</h2>
                  <p>
                    <strong>Agatti</strong> is Lakshadweep's gateway island —
                    home to the archipelago's only airport, and for that
                    reason alone, one of its most-visited islands. But
                    Agatti earns its popularity well beyond convenience: its
                    lagoon is one of the most dramatic in Lakshadweep, wide
                    and shallow enough that the water shifts through
                    unbroken bands of turquoise and jade, visible clearly
                    even from the plane on final approach.
                  </p>
                  <p>
                    Beneath that lagoon sits some of the healthiest coral
                    reef in the chain, making Agatti a genuine draw for
                    snorkelling and diving, not just a transit point on the
                    way to somewhere else. Add reliably good sunset views,
                    established lagoon cruise operators, and Lakshadweep's
                    most accessible resort infrastructure, and Agatti works
                    equally well as a standalone destination or as the first
                    stop on a longer Lakshadweep trip.
                  </p>
                  <p>
                    For most first-time visitors flying in, Agatti isn't just
                    the entry point — it's worth budgeting real time here in
                    its own right.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>✈️</span> Agatti at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Status",
                          value: "Lakshadweep's gateway island",
                        },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Lagoon, coral reefs, diving",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        {
                          icon: "✈️",
                          label: "From Kochi",
                          value: "~1.5 hr flight",
                        },
                        {
                          icon: "📋",
                          label: "Entry",
                          value: "Permit required",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,800 – ₹10,000",
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
                  <h2>Best Time to Visit Agatti</h2>
                  <p>
                    Agatti's tropical, monsoon-affected climate makes timing
                    genuinely important — both for calm flights and boat
                    transfers, and for good underwater visibility at the
                    reefs.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – May",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas, minimal rain, and the clearest lagoon and reef visibility of the year — the only realistic window for most flights and boat operations.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Peak season — book early",
                        text: "The most comfortable temperatures and the busiest period for permits, flights, and the Agatti Island Resort — plan several weeks ahead.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Southwest monsoon — largely closed",
                        text: "Rough seas and unreliable flight conditions make this the least practical window; most tour operators pause Lakshadweep departures entirely.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌊",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but good diving",
                        text: "Air and water temperatures both climb, but the sea stays calm and reef visibility remains excellent for diving and snorkelling.",
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
                    Indian and foreign nationals — Agatti is no exception,
                    even though it's home to the archipelago's airport.
                  </p>
                  <ul>
                    <li>
                      <strong>Who needs one:</strong> Every visitor,
                      including Indian citizens — having an airport on
                      Agatti doesn't exempt travellers from the permit
                      requirement.
                    </li>
                    <li>
                      <strong>How to apply:</strong> Permits are issued
                      through the Lakshadweep administration's official
                      portal or via SPORTS (Society for Promotion of
                      Recreational Tourism and Sports), which also manages
                      most organised tours, resort bookings, and water
                      sports packages.
                    </li>
                    <li>
                      <strong>Processing time:</strong> Apply at least a few
                      weeks ahead of travel, longer during the December–
                      February peak season when flight and permit demand
                      both spike.
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
                    <strong>⚠️ Important:</strong> Don't book your Agatti
                    flight before your permit is confirmed — approval isn't
                    guaranteed on a fixed timeline, and travel agents who
                    bundle permits with flight and resort packages are
                    usually the smoothest route for first-time visitors.
                  </div>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Agatti</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Agatti Airport is Lakshadweep's
                      only airport, connected to Kochi by a roughly
                      1.5-hour flight — by far the fastest and most common
                      way to reach the archipelago.
                    </li>
                    <li>
                      <strong>By Ship:</strong> Passenger ships from Kochi
                      also serve Agatti, taking considerably longer (often
                      14+ hours) but at a lower cost than flying, with cabin
                      and dormitory classes available.
                    </li>
                    <li>
                      <strong>Onward from Agatti:</strong> Agatti's airport
                      also serves as the transfer point for other
                      Lakshadweep islands, with boat and limited helicopter
                      connections onward to Kavaratti, Bangaram, and beyond.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a window seat on the
                    Kochi–Agatti flight — the final approach over Agatti's
                    lagoon is one of the best views in the entire trip, coral
                    formations and all.
                  </div>
                </section>

                {/* ── Beach & Lagoon ────────────────────────────────────── */}
                <section id="beach-lagoon">
                  <h2>Agatti Beach & Lagoon</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/lakshadweep/hero.jpg"
                      alt="Turquoise Agatti lagoon fringed with white sand and coconut palms"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Agatti's lagoon is the island's single biggest draw — a
                    wide, shallow stretch of water enclosed by reef, often
                    described as among the most scenic in Lakshadweep for
                    its sheer range of blue and green tones.
                  </p>
                  <ul>
                    <li>
                      <strong>Agatti Beach:</strong> Soft white sand fronting
                      the lagoon, with easy access to swimming, kayaking,
                      and boat departures.
                    </li>
                    <li>
                      <strong>Agatti Lagoon:</strong> A vast, shallow lagoon
                      that shifts visibly between turquoise and jade
                      depending on depth and coral cover below — best
                      appreciated both from the beach and from the air on
                      arrival.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit the lagoon in the
                    morning for the calmest, clearest water before any
                    afternoon wind picks up and stirs up the shallows.
                  </div>
                </section>

                {/* ── Diving & Snorkelling ──────────────────────────────── */}
                <section id="diving-snorkeling">
                  <h2>Reefs, Diving & Snorkelling</h2>
                  <p>
                    Agatti's coral reef is among the healthiest and most
                    accessible in Lakshadweep, making it one of the
                    archipelago's most popular islands for both first-time
                    snorkellers and certified divers.
                  </p>
                  <ul>
                    <li>
                      <strong>Agatti Coral Reefs:</strong> Extensive,
                      well-preserved reef surrounding the lagoon, home to a
                      wide variety of fish and coral species.
                    </li>
                    <li>
                      <strong>Agatti Diving Spots:</strong> Multiple dive
                      sites around the island cater to both beginners and
                      certified divers, with equipment and instruction
                      available through resort-affiliated operators.
                    </li>
                    <li>
                      <strong>Snorkelling sites:</strong> Shallow reef flats
                      close to shore make Agatti one of the more accessible
                      islands for snorkelling without needing a boat
                      transfer.
                    </li>
                    <li>
                      <strong>Kayaking:</strong> The lagoon's calm,
                      current-free water makes it a forgiving spot to try
                      kayaking for the first time.
                    </li>
                    <li>
                      <strong>Glass-bottom boat rides:</strong> A low-effort,
                      family-friendly way to see the reef and its coral
                      without getting in the water.
                    </li>
                  </ul>
                </section>

                {/* ── Lagoon Cruises & Sunset Views ─────────────────────── */}
                <section id="cruises-sunsets">
                  <h2>Lagoon Cruises & Sunset Views</h2>
                  <p>
                    Beyond diving and snorkelling, Agatti's lagoon is simply
                    a beautiful place to be out on the water in the late
                    afternoon.
                  </p>
                  <ul>
                    <li>
                      <strong>Lagoon cruises:</strong> Boat cruises across
                      the lagoon offer a relaxed way to see the island's
                      coastline and reef formations without any swimming or
                      diving involved.
                    </li>
                    <li>
                      <strong>Sunset views:</strong> Agatti's flat horizon
                      and unobstructed western views over the lagoon make
                      for some of the most reliable sunset watching in
                      Lakshadweep — best enjoyed from the beach or a late
                      lagoon cruise.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a late-afternoon lagoon
                    cruise timed to end around sunset — it combines both of
                    Agatti's best evening activities into a single outing.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Agatti</h2>
                  <p>
                    As one of Lakshadweep's most popular tourist islands,
                    Agatti has some of the archipelago's better-developed
                    accommodation, anchored by the government-run Agatti
                    Island Resort.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹2,000–₹3,800/night",
                        picks: [
                          "Standard rooms, Agatti Island Resort",
                          "SPORTS-run guesthouses",
                          "Basic island cottages",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,800–₹7,500/night",
                        picks: [
                          "Sea-facing cottages, Agatti Island Resort",
                          "Package tours with full board",
                          "Standard resort rooms",
                        ],
                      },
                      {
                        tier: "Upscale",
                        icon: "🏝️",
                        range: "₹7,500–₹16,000+/night",
                        picks: [
                          "Premium beachfront cottages",
                          "All-inclusive dive and stay packages",
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
                    Most Agatti stays are booked as part of a package
                    through SPORTS or a registered tour operator, bundling
                    accommodation, permit processing, flights, and water
                    sports together — genuinely the simplest route for
                    first-time visitors.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Agatti</h2>
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
                      <strong>Resort dining:</strong> Most meals for
                      visitors come through the Agatti Island Resort or
                      package-tour dining, typically full-board and
                      seafood-forward.
                    </li>
                    <li>
                      <strong>No alcohol:</strong> Lakshadweep is
                      predominantly dry — don't expect bars or alcohol
                      service on Agatti, in keeping with the island's
                      religious and cultural norms.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Agatti Itinerary</h2>
                  <p>
                    Three days is a comfortable length for Agatti, whether
                    it's your only stop or the first leg of a longer
                    Lakshadweep trip.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Lagoon",
                        color: "bg-amber-700",
                        activities: [
                          "Fly into Agatti, check in at the resort",
                          "Afternoon: Agatti Beach and lagoon swimming",
                          "Evening: Sunset views from the beach",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Reefs & Diving",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Scuba diving or a snorkelling session at the reef",
                          "Afternoon: Kayaking and glass-bottom boat ride",
                          "Evening: Lagoon cruise",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Leisure & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Final lagoon swim or short snorkel",
                          "Late morning: Beach time and photos",
                          "Departure via Agatti Airport",
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
                            "₹2,500",
                            "₹5,500",
                            "₹11,000",
                          ],
                          ["Food/day", "₹800", "₹1,300", "₹2,200"],
                          [
                            "Diving & water sports/day",
                            "₹1,200",
                            "₹2,200",
                            "₹4,000",
                          ],
                          ["Local transport/day", "₹300", "₹500", "₹1,000"],
                          ["Daily total", "₹4,800", "₹9,500", "₹18,200"],
                          [
                            "3-Day trip total",
                            "₹14,400",
                            "₹28,500",
                            "₹54,600",
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
                    * Excludes the Kochi–Agatti flight and permit fee, both
                    of which add significantly to the total and are usually
                    bundled into package tour pricing.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Agatti</h2>
                  <ul>
                    <li>
                      <strong>Apply for your permit well in advance:</strong>{" "}
                      Approval isn't instant, and demand spikes hard during
                      peak season — start the process at least a few weeks
                      ahead.
                    </li>
                    <li>
                      <strong>Book through SPORTS or a registered operator:</strong>{" "}
                      Bundled packages covering permit, flights,
                      accommodation, and water sports are the simplest way
                      to visit, especially for first-timers.
                    </li>
                    <li>
                      <strong>Book flights well ahead in peak season:</strong>{" "}
                      Agatti Airport has limited daily capacity — December
                      to February seats sell out fast.
                    </li>
                    <li>
                      <strong>Use reef-safe sunscreen only:</strong> Agatti's
                      coral reef is genuinely sensitive to regular sunscreen
                      chemicals — reef-safe formulas protect what you came
                      to see.
                    </li>
                    <li>
                      <strong>Don't expect alcohol:</strong> Lakshadweep is
                      largely dry — plan accordingly if this affects your
                      trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM and card
                      infrastructure is limited even on Agatti, one of the
                      more developed islands in the chain.
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
                          "Book a window seat for the lagoon approach on landing",
                          "Use reef-safe sunscreen in the lagoon and at the reefs",
                          "Time a lagoon cruise to end around sunset",
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
                          "Book flights before your permit is confirmed",
                          "Travel during the June–September monsoon window",
                          "Use regular sunscreen at the reefs or lagoon",
                          "Expect alcohol availability on the island",
                          "Rely on cards for everyday expenses",
                          "Wait until the last minute to book peak-season flights",
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
                  "Agatti",
                  "Lakshadweep",
                  "Gateway Island",
                  "Lagoon",
                  "Coral Reefs",
                  "Scuba Diving",
                  "Snorkelling",
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
                sections={AGATTI_GEAR}
                destination="Agatti"
              />

              <RelatedPostsGrid currentSlug="agatti-island-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="agatti-island-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
