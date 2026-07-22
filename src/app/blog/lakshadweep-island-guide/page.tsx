// src/app/blog/lakshadweep-island-guide/page.tsx
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
  title: "Lakshadweep Travel Guide: Permits, Islands & Best Time to Visit",
  description:
    "The complete Lakshadweep travel guide. Entry permits, how to reach Agatti and Kavaratti, the best islands for lagoons and diving, where to stay, what to eat, and a full 4-day itinerary through India's coral atoll islands.",
  keywords:
    "Lakshadweep travel guide, Lakshadweep permit, Agatti island, Kavaratti, Bangaram island, Lakshadweep scuba diving, Lakshadweep itinerary, Lakshadweep entry pass, India coral islands",
  openGraph: {
    title: "Lakshadweep Travel Guide: Permits, Islands & Best Time to Visit",
    description:
      "Turquoise lagoons, coral reefs, and coconut-palm islands barely a kilometre wide — the complete guide to India's only coral atoll archipelago.",
    url: "https://club.kudozz.in/blog/lakshadweep-island-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/lakshadweep/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise lagoon and white sand beach fringed with coconut palms in Lakshadweep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshadweep Travel Guide: Permits, Islands & Best Time to Visit",
    description:
      "Coral lagoons, permit-only islands, and some of India's clearest water — the complete guide to Lakshadweep.",
    images: ["/images/destinations/lakshadweep/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/lakshadweep-island-guide",
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
            "Lakshadweep Travel Guide: Permits, Islands & Best Time to Visit",
          description: "The complete Lakshadweep travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/lakshadweep/hero.jpg",
          datePublished: "2026-07-16",
          dateModified: "2026-07-16",
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
            "@id": "https://club.kudozz.in/blog/lakshadweep-island-guide",
          },
          about: {
            "@type": "Place",
            name: "Lakshadweep",
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
                name: "Lakshadweep Travel Guide",
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
  { id: "introduction", title: "Why Lakshadweep?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "permits", title: "Entry Permit (Required)", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lakshadweep", level: 2 },
  { id: "islands", title: "Which Island to Choose", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Lakshadweep-specific gear ───────────────────────────────────────────────────
const LAKSHADWEEP_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for lagoon swims, reef walks, and island-hopping with no pharmacies nearby",
    emoji: "🏝️",
    items: [
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Lakshadweep's lagoons and reef systems are ecologically fragile — most resorts and dive operators require reef-safe, oxybenzone-free sunscreen, and the sun here is intense with almost no shade over water.",
        price: "₹549",
        rating: 4.5,
        reviews: "11k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+spf+50"),
        tag: "Reef essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Regular sunscreen can bleach coral over time — several resorts now check for reef-safe formulas before letting you into the water.",
      },
      {
        name: "Snorkeling Mask & Fins Set",
        description:
          "Lakshadweep's lagoons offer some of India's clearest, calmest snorkeling water — carrying a well-fitted mask beats relying on shared rental gear at every stop.",
        price: "₹1,799",
        rating: 4.4,
        reviews: "6.9k",
        image: "🤿",
        affiliateUrl: amazonSearchUrl("snorkeling+mask+fins+set"),
        tag: "Lagoon essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Nearly every island activity here happens in or over water — a properly fitted mask makes the difference between a great reef view and a foggy, leaking one.",
      },
      {
        name: "Quick-Dry Rash Guard",
        description:
          "Long hours in shallow lagoon water and strong tropical sun make a UV-protective rash guard more practical than reapplying sunscreen every hour.",
        price: "₹899",
        rating: 4.4,
        reviews: "4.2k",
        image: "🩱",
        affiliateUrl: amazonSearchUrl("rash+guard+uv+protection"),
        tag: "Sun essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Sunburn on the back and shoulders is the most common complaint from snorkeling trips here, given how long visitors linger in the water.",
      },
      {
        name: "Dry Bag (10L)",
        description:
          "Inter-island transfers happen by boat, and spray or the occasional splash is routine — a dry bag keeps phones, permits, and cash protected.",
        price: "₹699",
        rating: 4.5,
        reviews: "5.1k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("waterproof+dry+bag+10l"),
        tag: "Boat-transfer essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "You'll be carrying your entry permit and ID on every inter-island ferry — keeping it dry isn't optional here, it's required for boarding.",
      },
      {
        name: "Basic First Aid & Motion Sickness Kit",
        description:
          "Islands are remote with minimal medical infrastructure, and ferry crossings between atolls can get choppy — a compact kit with motion sickness tablets is worth packing.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit+seasickness"),
        tag: "Remote-travel essential",
        tagColor: "bg-red-100 text-red-700",
        why: "The nearest full-service hospital for most islands is back on the mainland — basic self-sufficiency matters more here than on a typical beach trip.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Electricity and mobile network are limited and inconsistent across the smaller islands, especially away from Agatti and Kavaratti.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Off-grid essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Some island resorts run limited-hour generators — a charged power bank is the difference between working and dead devices by evening.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LakshadweepGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/lakshadweep/hero.jpg"
              alt="Turquoise lagoon and white sand beach fringed with coconut palms in Lakshadweep"
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
                "Lakshadweep",
                "Coral Islands",
                "Scuba Diving",
                "Lagoons",
                "Permit Required",
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
              Lakshadweep Travel Guide: Permits, Islands & Best Time to Visit
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Coral atolls barely a kilometre wide, lagoons in every shade of
              turquoise, and reefs among the clearest in the Indian Ocean — this
              is India's least-visited tropical paradise.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Lakshadweep, Arabian Sea",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,500 words",
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
                  <h2>Why Lakshadweep?</h2>
                  <p>
                    A cluster of coral atolls roughly 250–450 km off the Kerala
                    coast, <strong>Lakshadweep</strong> is India's smallest
                    Union Territory and, despite lagoons that rival the
                    Maldives, remains genuinely under-visited — largely because
                    access is deliberately restricted to protect the islands'
                    fragile reef ecosystems.
                  </p>
                  <p>
                    Only a handful of the 36 islands are open to tourists, and
                    every visitor — Indian or foreign — needs an entry permit
                    issued by the Lakshadweep administration. That friction is
                    exactly why the islands have stayed uncrowded: shallow
                    turquoise lagoons enclosed by coral reefs, water clear
                    enough to see the seabed at several metres, and beaches that
                    see a fraction of the footfall of comparable coastlines
                    elsewhere in India.
                  </p>
                  <p>
                    Lakshadweep isn't a spontaneous trip — permits and ferry or
                    flight bookings need lead time — but for travellers willing
                    to plan ahead, it delivers a coral-island experience that's
                    genuinely rare within India's borders.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏝️</span> Lakshadweep at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Union Territory",
                          value: "Lakshadweep",
                        },
                        {
                          icon: "🌊",
                          label: "From Kochi",
                          value: "~220–440 km by sea/air",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        {
                          icon: "📄",
                          label: "Permit",
                          value: "Mandatory (all visitors)",
                        },
                        {
                          icon: "🤿",
                          label: "Known For",
                          value: "Lagoons, Diving, Coral Reefs",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹3,000 – ₹12,000",
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
                  <h2>Best Time to Visit Lakshadweep</h2>
                  <p>
                    Lakshadweep's tourist season is narrower than most Indian
                    coastal destinations — monsoon seas make several islands
                    genuinely inaccessible for months at a stretch.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Calm seas, clear skies, and the best underwater visibility of the year (25–32°C) — the ideal window for diving, snorkeling, and smooth inter-island ferries.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm but still good",
                        text: "Temperatures climb and humidity rises ahead of the monsoon, but seas generally remain calm enough for most water activities through April.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — mostly closed",
                        text: "The Arabian Sea turns rough, ferry services are frequently suspended, and most resorts close — Lakshadweep is not a realistic monsoon destination.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🤿",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak diving season",
                        text: "The single best stretch for scuba diving and snorkeling, with water at its clearest — book resorts and permits well ahead for this window.",
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
                    <strong>Our pick:</strong> December to February — the
                    calmest seas, clearest lagoons, and the most reliable ferry
                    and flight schedules of the year.
                  </blockquote>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Entry Permit (Required)</h2>
                  <p>
                    Every visitor to Lakshadweep — including Indian citizens —
                    needs an <strong>entry permit</strong> issued by the
                    Lakshadweep administration. This is the single biggest piece
                    of planning the islands require, and it cannot be arranged
                    on arrival.
                  </p>
                  <ul>
                    <li>
                      <strong>How to apply:</strong> Permits are processed
                      through the official e-Permit portal or via authorised
                      tour operators, who typically bundle the permit with
                      island packages.
                    </li>
                    <li>
                      <strong>Processing time:</strong> Allow at least 15–20
                      days — permits are not instant and require identity
                      verification.
                    </li>
                    <li>
                      <strong>Foreign nationals:</strong> Face additional
                      restrictions and are currently permitted on fewer islands
                      than Indian citizens — check current eligibility before
                      booking.
                    </li>
                    <li>
                      <strong>Carry originals:</strong> Physical permit and ID
                      copies are checked at the port or airport before boarding,
                      and again on arrival at the island.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book through a recognised
                    Lakshadweep tour operator for your first trip — most handle
                    the permit application alongside your stay and ferry/flight
                    booking, which removes most of the logistics headache.
                  </div>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Lakshadweep</h2>
                  <p>
                    All routes to Lakshadweep originate from{" "}
                    <strong>Kochi, Kerala</strong> — there is no other mainland
                    gateway.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Flights run from Kochi to Agatti
                      Airport (~1 hr), the only airstrip in the archipelago —
                      followed by a short boat transfer to most resort islands.
                    </li>
                    <li>
                      <strong>By Sea:</strong> Passenger ships depart from Kochi
                      to various islands (Kavaratti, Agatti, Kadmat, Minicoy,
                      and others), taking roughly 14–20 hours depending on the
                      island and sea conditions.
                    </li>
                    <li>
                      <strong>Inter-island transfer:</strong> Boats and small
                      ferries connect islands to resort properties — most
                      packages include this as part of the booking.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Flying to Agatti is far faster
                    and more reliable than the ship, especially in
                    shoulder-season months when sea conditions can add
                    unpredictable delays to the ferry schedule.
                  </div>
                </section>

                {/* ── Which Island ──────────────────────────────────────── */}
                <section id="islands">
                  <h2>Which Island to Choose</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/lakshadweep/hero.jpg"
                      alt="Aerial view of a coral atoll and lagoon in Lakshadweep"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Only a few islands are open to tourists, and each has a
                    distinct character — picking the right one matters more here
                    than at most Indian beach destinations.
                  </p>
                  <ul>
                    <li>
                      <strong>Agatti:</strong> The main air gateway, with a
                      stunning airstrip approach over turquoise water — good
                      base for short trips given direct flight access.
                    </li>
                    <li>
                      <strong>Bangaram:</strong> An uninhabited private island
                      resort known for arguably the best lagoon in the
                      archipelago — the closest experience to a Maldives
                      overwater resort within India.
                    </li>
                    <li>
                      <strong>Kavaratti:</strong> The administrative capital,
                      with the most developed infrastructure and several
                      accessible dive sites just offshore.
                    </li>
                    <li>
                      <strong>Kadmat:</strong> A long, narrow island with
                      lagoons on both sides — popular for scuba diving and water
                      sports, with a well-regarded government-run resort.
                    </li>
                    <li>
                      <strong>Minicoy:</strong> The southernmost island,
                      culturally distinct with Maldivian influence, known for
                      its lighthouse and tuna fishing traditions — less visited
                      than the northern islands.
                    </li>
                  </ul>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Lakshadweep</h2>
                  <ul>
                    <li>
                      <strong>Scuba diving:</strong> Certified dive centres
                      operate on Kadmat, Agatti, and Bangaram, with visibility
                      regularly exceeding 20 metres in peak season — among the
                      best diving conditions in India.
                    </li>
                    <li>
                      <strong>Snorkeling the lagoons:</strong> Shallow, calm,
                      and exceptionally clear — most islands' lagoons are
                      snorkel-friendly straight off the beach, no boat required.
                    </li>
                    <li>
                      <strong>Glass-bottom boat rides:</strong> A good option
                      for non-swimmers to see the coral reef and marine life
                      without getting in the water.
                    </li>
                    <li>
                      <strong>Kayaking:</strong> Calm lagoon water makes for
                      easy, low-effort kayaking, offered at most resort islands.
                    </li>
                    <li>
                      <strong>Island hopping:</strong> Day trips between
                      neighbouring islands by boat, where itinerary and permits
                      allow — check what's included in your package.
                    </li>
                    <li>
                      <strong>Sunset on the lagoon side:</strong> With no light
                      pollution and unobstructed horizons, sunsets here are
                      genuinely spectacular — best watched from the
                      lagoon-facing shore.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Lakshadweep</h2>
                  <p>
                    Accommodation is limited and almost always bundled with your
                    permit and transport as part of a package — very few
                    standalone bookings exist.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "SPORTS (Kavaratti) government stays",
                          "Kadmat Beach Resort (standard rooms)",
                          "Basic guesthouses, Agatti",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹7,000–₹15,000/night",
                        picks: [
                          "Agatti Island Beach Resort",
                          "Kadmat Beach Resort (cottages)",
                          "Minicoy Island guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌴",
                        range: "₹20,000–₹50,000+/night",
                        picks: [
                          "Bangaram Island Resort",
                          "Private overwater-style cottages",
                          "All-inclusive dive packages",
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
                    Book well ahead regardless of budget tier — room inventory
                    across the entire archipelago is small, and permits are
                    typically only issued once accommodation is confirmed.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Lakshadweep</h2>
                  <p>
                    Cuisine here leans heavily on seafood and coconut, with
                    strong Kerala and Maldivian influences reflecting the
                    islands' geography and trade history.
                  </p>
                  <ul>
                    <li>
                      <strong>Tuna preparations:</strong> Fresh tuna is the
                      island staple, grilled, curried, or dried into "mas" — a
                      Maldivian-style dried tuna product also common here.
                    </li>
                    <li>
                      <strong>Coconut-based curries:</strong> Similar to coastal
                      Kerala cooking, coconut milk and grated coconut feature
                      heavily in fish curries and chutneys.
                    </li>
                    <li>
                      <strong>Mus Kavab:</strong> A local spiced fish
                      preparation worth seeking out at island eateries.
                    </li>
                    <li>
                      <strong>Resort meals:</strong> Most stays are
                      all-inclusive or offer set meal plans — standalone
                      restaurants are rare outside Kavaratti and Agatti town.
                    </li>
                    <li>
                      <strong>No alcohol:</strong> Lakshadweep is largely a dry
                      territory; alcohol is restricted to a few resort
                      properties like Bangaram — don't expect it to be widely
                      available.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>4-Day Lakshadweep Itinerary</h2>
                  <p>
                    Given permit lead time and travel logistics, four days on a
                    single island (or two, if your package allows transfers) is
                    a sensible baseline.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Settling In",
                        color: "bg-amber-700",
                        activities: [
                          "Fly Kochi → Agatti, boat transfer to resort island",
                          "Afternoon: Check in, orientation walk along the lagoon",
                          "Evening: Sunset on the lagoon-facing beach",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Diving & Snorkeling",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Introductory or certified scuba dive session",
                          "Afternoon: Snorkeling the house reef",
                          "Evening: Glass-bottom boat ride",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Island Exploration",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Kayaking the lagoon",
                          "Afternoon: Island walk, local village visit (where accessible)",
                          "Evening: Beach bonfire or resort dinner",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Final lagoon swim",
                          "Late morning: Boat transfer to Agatti",
                          "Afternoon: Flight back to Kochi",
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
                          [
                            "Accommodation/night",
                            "₹4,000",
                            "₹10,000",
                            "₹35,000",
                          ],
                          [
                            "Food (often included)",
                            "₹800",
                            "Included",
                            "Included",
                          ],
                          [
                            "Flight Kochi ↔ Agatti",
                            "₹8,000",
                            "₹8,000",
                            "₹8,000",
                          ],
                          [
                            "Diving / activities per day",
                            "₹1,500",
                            "₹3,000",
                            "Included",
                          ],
                          [
                            "Daily total (excl. flight)",
                            "₹6,300",
                            "₹13,000",
                            "₹35,000",
                          ],
                          [
                            "4-Day trip total",
                            "₹33,200",
                            "₹60,000",
                            "₹1,48,000",
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
                    * Excludes travel to Kochi. Most mid-range and luxury
                    packages bundle meals, permit fees, and transfers into a
                    single quoted price.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Lakshadweep</h2>
                  <ul>
                    <li>
                      <strong>
                        Apply for your permit at least 3–4 weeks out:
                      </strong>
                      This is the one dependency outside your control, and it
                      takes far longer than most Indian domestic permits.
                    </li>
                    <li>
                      <strong>
                        Book through a recognised operator first time:
                      </strong>
                      They bundle permit, stay, and transfers, which removes
                      most first-trip logistics risk.
                    </li>
                    <li>
                      <strong>Only reef-safe sunscreen:</strong> Several resorts
                      actively check for it before letting you into lagoon
                      water.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs and card acceptance are
                      limited outside Kavaratti and Agatti — most resort
                      packages are pre-paid, but carry cash for extras.
                    </li>
                    <li>
                      <strong>Don't expect alcohol:</strong> Lakshadweep is
                      largely dry; only a few resort properties are exceptions.
                    </li>
                    <li>
                      <strong>Confirm sea conditions before travel:</strong>
                      Especially in shoulder-season months (May, September) —
                      ferries can be delayed or cancelled with short notice.
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
                          "Apply for your permit at least 3–4 weeks before travel",
                          "Book through a recognised Lakshadweep tour operator",
                          "Use only reef-safe sunscreen",
                          "Fly via Agatti for the most reliable schedule",
                          "Book diving and water activities in advance",
                          "Carry a printed permit and ID copy",
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
                          "Plan a spontaneous trip — permits take weeks",
                          "Travel during the June–September monsoon",
                          "Use regular (non-reef-safe) sunscreen",
                          "Expect nightlife or alcohol availability outside a few resorts",
                          "Rely on cards outside Kavaratti and Agatti",
                          "Skip travel insurance given the remoteness",
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
                  "Lakshadweep",
                  "Coral Islands",
                  "Scuba Diving",
                  "Lagoons",
                  "Agatti",
                  "Bangaram",
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
                sections={LAKSHADWEEP_GEAR}
                destination="Lakshadweep"
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
