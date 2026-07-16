// src/app/blog/andaman-islands-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  BEACH_GEAR,
  GearSection,
} from "@/components/ui/TrekGearRecommendations";
import { amazonSearchUrl } from "@/lib/common";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Andaman Islands Travel Guide: Beaches, Diving, Permits & Tips",
  description:
    "The complete Andaman & Nicobar Islands travel guide. Everything you need — how to reach Port Blair, Havelock Island, Neil Island, Radhanagar Beach, scuba diving, snorkelling, Cellular Jail, permits, ferries, and a 7-day itinerary.",
  keywords:
    "Andaman Islands travel guide, Havelock Island, Radhanagar Beach, Neil Island, Andaman scuba diving, Port Blair, Cellular Jail, Andaman ferry, Andaman permit, Ross Island, Andaman itinerary, Elephant Beach snorkelling",
  openGraph: {
    title: "Andaman Islands Travel Guide: Beaches, Diving, Permits & Tips",
    description:
      "Crystal-clear waters, pristine coral reefs, white sand beaches and the haunting history of Cellular Jail — the complete guide to the Andaman Islands.",
    url: "https://club.kudozz.in/blog/andaman-islands-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/related/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "Andaman Islands — turquoise waters and white sand beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andaman Islands Travel Guide",
    description:
      "Radhanagar Beach, scuba diving, Cellular Jail and island-hopping — the complete Andaman guide.",
    images: ["/images/related/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/andaman-islands-guide",
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
            "Andaman Islands Travel Guide: Beaches, Diving, Permits & Tips",
          description: "The complete Andaman & Nicobar Islands travel guide.",
          image: "https://club.kudozz.in/images/related/rishikesh.jpg",
          datePublished: "2026-06-28",
          dateModified: "2026-07-12",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://club.kudozz.in/logo.png",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/andaman-islands-guide",
          },
          about: {
            "@type": "Place",
            name: "Andaman and Nicobar Islands",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Andaman and Nicobar Islands",
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
                name: "Andaman Islands Travel Guide",
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
  { id: "introduction", title: "Why Andaman Islands?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Andaman", level: 2 },
  { id: "permits", title: "Permits & Entry Rules", level: 2 },
  { id: "islands-overview", title: "The Islands — Overview", level: 2 },
  { id: "port-blair", title: "→ Port Blair", level: 3 },
  { id: "havelock", title: "→ Havelock Island (Swaraj Dweep)", level: 3 },
  { id: "neil-island", title: "→ Neil Island (Shaheed Dweep)", level: 3 },
  { id: "ross-island", title: "→ Ross & North Bay Islands", level: 3 },
  { id: "baratang", title: "→ Baratang & Limestone Caves", level: 3 },
  { id: "beaches", title: "Best Beaches", level: 2 },
  { id: "water-activities", title: "Water Activities", level: 2 },
  { id: "scuba", title: "→ Scuba Diving", level: 3 },
  { id: "snorkelling", title: "→ Snorkelling", level: 3 },
  { id: "kayaking", title: "→ Sea Kayaking & Other Activities", level: 3 },
  { id: "cellular-jail", title: "Cellular Jail", level: 2 },
  { id: "ferries", title: "Getting Around — Ferries", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "7-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Andaman-specific gear ─────────────────────────────────────────────────────
const ANDAMAN_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear that makes island travel genuinely better",
    emoji: "🏝️",
    items: [
      {
        name: "GoPro Hero 12 (or similar action camera)",
        description:
          "Waterproof to 10m without a case. The underwater world at Elephant Beach and Havelock's dive sites is the reason most people visit Andaman — you need a camera that goes underwater with you.",
        price: "₹34,999",
        rating: 4.7,
        reviews: "8.2k",
        image: "📷",
        affiliateUrl: amazonSearchUrl("gopro+hero+waterproof+action+camera"),
        tag: "Underwater essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The coral reefs at Elephant Beach and North Bay are extraordinary. A waterproof action camera is the single item most Andaman travellers wish they'd brought.",
      },
      {
        name: "Reef-Safe Mineral Sunscreen SPF 50+",
        description:
          "Chemical sunscreens (oxybenzone, octinoxate) bleach coral. The Andaman reefs are already under severe stress — reef-safe mineral SPF 50+ is the only responsible choice here.",
        price: "₹699",
        rating: 4.4,
        reviews: "3.1k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+mineral+sunscreen+SPF50"),
        tag: "Reef-safe",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Chemical sunscreens are banned at many Andaman dive sites for good reason — they bleach coral. Reef-safe mineral SPF is non-negotiable here.",
      },
      {
        name: "Sea to Summit Dry Bag (10L + 20L set)",
        description:
          "Ferry transfers between islands involve open boats and occasional sea spray. A dry bag keeps your phone, passport, cash, and camera completely safe during inter-island crossings.",
        price: "₹1,899",
        rating: 4.6,
        reviews: "4.2k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("dry+bag+waterproof+10L+20L+set"),
        tag: "Ferry essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Open boat transfers get wet. Spray comes over the sides. Your passport and phone in an unprotected bag is a ₹50,000 risk for a ₹1,900 solution.",
      },
      {
        name: "Cressi Snorkelling Set (mask, fins, snorkel)",
        description:
          "Proper-fitting mask and fins make the difference between a frustrating snorkelling experience and an extraordinary one. Rental masks at Elephant Beach often leak — bring your own.",
        price: "₹3,499",
        rating: 4.5,
        reviews: "2.1k",
        image: "🤿",
        affiliateUrl: amazonSearchUrl("cressi+snorkel+set+mask+fins"),
        tag: "Snorkelling upgrade",
        tagColor: "bg-blue-100 text-blue-700",
        why: "Rental masks at beach vendors often leak or fog. A proper-fitting mask with anti-fog coating transforms snorkelling from tolerable to genuinely magical.",
      },
      {
        name: "Neutrogena Ultra Sheer Dry-Touch SPF 55",
        description:
          "For above-water use — lightweight, non-greasy, and effective at the equatorial UV levels the Andamans receive. Apply before leaving the room, reapply every 2 hours.",
        price: "₹449",
        rating: 4.3,
        reviews: "12.4k",
        image: "☀️",
        affiliateUrl: amazonSearchUrl("neutrogena+ultra+sheer+SPF55+sunscreen"),
        tag: "UV index 12",
        tagColor: "bg-red-100 text-red-700",
        why: "The Andamans sit near the equator. UV index regularly hits 12 — the maximum classification. Sunburn here happens in under 20 minutes without protection.",
      },
      {
        name: "Sea-Band Anti-Nausea Wristbands",
        description:
          "Acupressure wristbands that reduce motion sickness without drowsiness. The 2-hour ferry crossing from Port Blair to Havelock is rough for roughly 30% of passengers.",
        price: "₹649",
        rating: 4.2,
        reviews: "5.8k",
        image: "⚓",
        affiliateUrl: amazonSearchUrl("sea+band+anti+nausea+wristband"),
        tag: "Ferry crossings",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The Havelock crossing can be rough, especially October–December. Sea-bands work without drowsiness — unlike Avomine, which knocks you out for hours.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AndamanIslandsPage() {
  const allGearSections = [...ANDAMAN_GEAR, ...BEACH_GEAR];

  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/andaman/hero.jpg"
              alt="Andaman Islands — turquoise lagoon and white sand beach with palm trees"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent" />
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
                { label: "Islands", href: "/blog?category=islands" },
                { label: "Andaman Islands", href: null },
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
                "Andaman Islands",
                "Beaches",
                "Scuba Diving",
                "Island Hopping",
                "Snorkelling",
                "Cellular Jail",
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
              Andaman Islands Travel Guide: Beaches, Diving, Permits & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Where the Bay of Bengal meets paradise — crystal lagoons, coral
              reefs that rival the Maldives, and the haunting colonial history
              of Cellular Jail, all within a 2-hour flight from mainland India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "20 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Andaman & Nicobar Islands",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "4,200 words",
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
                  <h2>Why the Andaman Islands?</h2>
                  <p>
                    Most Indians spend years dreaming of the Maldives or
                    Thailand for tropical island travel — not realising that the
                    <strong> Andaman & Nicobar Islands</strong>, just a 2-hour
                    flight from Chennai or Kolkata, offer beaches and coral
                    reefs that genuinely rival anything in Southeast Asia, at a
                    fraction of the cost and with the practical convenience of
                    being in India.
                  </p>
                  <p>
                    The Andamans are an archipelago of 572 islands in the Bay of
                    Bengal, of which only 37 are inhabited. The water is an
                    implausible shade of turquoise. The beaches — particularly
                    Radhanagar on Havelock Island, consistently ranked among
                    Asia's finest — are long, palm-fringed, and still unhurried.
                    The coral reefs at sites like Elephant Beach, North Bay, and
                    Barren Island protect marine ecosystems of extraordinary
                    richness — sea turtles, manta rays, reef sharks, and
                    thousands of reef fish species.
                  </p>
                  <p>
                    And layered under all of this tropical beauty is one of the
                    most sobering pieces of Indian history:{" "}
                    <strong>Cellular Jail</strong>
                    in Port Blair, where the British imprisoned India's freedom
                    fighters in solitary confinement so extreme that many chose
                    death over continued imprisonment. The evening
                    sound-and-light show here is one of the most moving
                    experiences in India.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-sky-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏝️</span> Andaman Islands at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Union Territory",
                          value: "Andaman & Nicobar Islands",
                        },
                        {
                          icon: "🏖️",
                          label: "Islands",
                          value: "572 total, 37 inhabited",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – May" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Port Blair (IXZ)",
                        },
                        {
                          icon: "🛂",
                          label: "Permits",
                          value: "RAP for some islands",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,000 – ₹8,000",
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
                  <h2>Best Time to Visit the Andaman Islands</h2>
                  <p>
                    The Andamans have a tropical climate shaped by two monsoons
                    — the southwest monsoon (May–September) and the northeast
                    monsoon (November–December). The ideal travel window sits
                    between the two.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — best conditions",
                        text: "Crystal-clear water visibility (20–30m for diving), calm seas for ferry crossings, best beach weather with temperatures of 22–30°C. December–January is the busiest period — book accommodation and ferries 4–6 weeks ahead. Christmas and New Year see the highest prices.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Shoulder season — excellent value",
                        text: "Slightly warmer (up to 34°C) but seas are still calm, dive visibility is excellent, and crowds thin significantly after March. Best value for money — accommodation prices drop 20–30% and ferries are easier to book. April–May gets hot but the water is perfect.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Southwest monsoon — avoid",
                        text: "The Andamans receive 3,000mm of rain in these months. Ferries between islands are frequently cancelled for safety. Dive visibility drops to 2–3m. Many resorts and dive operators close. Havelock ferry services severely curtailed. Strongly avoid unless you specifically want lush green landscapes and empty beaches.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🌈",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Transition — manageable",
                        text: "The northeast monsoon arrives in October but is less severe than the southwest monsoon. Seas begin to calm by late October. November is excellent — the first month of the dry season, with fresh green landscapes from the monsoon, clearing skies, and fewer crowds than December.",
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
                    <strong>Our pick:</strong> Mid-November to mid-February for
                    first-timers — the dry season sweet spot with perfect
                    conditions for diving, snorkelling, and beach life. March is
                    excellent value if you can take the slightly higher heat.
                    Avoid June–September entirely.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Andaman Islands</h2>
                  <p>
                    All access to the Andamans passes through
                    <strong> Port Blair</strong> — the capital, located on South
                    Andaman Island. From Port Blair, ferries connect the main
                    tourist islands.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air (strongly recommended):</strong> Veer
                      Savarkar International Airport in Port Blair (IXZ) has
                      daily direct flights from Chennai (2 hrs), Kolkata (2
                      hrs), Delhi (3.5 hrs via connection), and Bangalore (2.5
                      hrs). IndiGo, Air India, SpiceJet, and GoFirst all operate
                      routes. Fares range from ₹4,000–₹15,000 one way depending
                      on advance booking. Book 6–8 weeks ahead for peak season
                      (December–January) to get reasonable prices.
                    </li>
                    <li>
                      <strong>
                        By Ship (for the experience, not efficiency):
                      </strong>
                      Government passenger ships run from Chennai (60 hours),
                      Kolkata (56 hours), and Visakhapatnam (56 hours) to Port
                      Blair — a genuinely adventurous option but practically
                      limited by irregular schedules (roughly 1–2 sailings per
                      month per route). Berths from ₹2,500 (bunk) to ₹9,000
                      (cabin). Book through Shipping Corporation of India
                      (shipmin.gov.in). The ship carries supplies for the
                      islands and the journey itself is an experience.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly in, ship out (or vice
                    versa) if timing allows. The 60-hour ship journey from
                    Chennai is genuinely memorable — open deck, flying fish,
                    dolphins, and the gradual emergence of the island chain from
                    the sea. But schedule it on the return when you're relaxed
                    and unhurried.
                  </div>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & Entry Rules</h2>
                  <p>
                    The Andaman Islands have a tiered permit system — some
                    islands are freely accessible, others require Restricted
                    Area Permits (RAP), and a few are completely off-limits to
                    protect indigenous tribal communities.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        zone: "Freely Accessible Islands",
                        color: "border-forest-300 bg-forest-50",
                        islands:
                          "Port Blair, Havelock (Swaraj Dweep), Neil (Shaheed Dweep), Baratang, Ross Island, North Bay, Jolly Buoy, Red Skin Island",
                        permit:
                          "No special permit required for Indian nationals. Foreign nationals need to register at the Immigration Office in Port Blair within 24 hours of arrival.",
                        note: "These cover 95% of what most tourists visit. No advance paperwork needed.",
                      },
                      {
                        zone: "Restricted Area Permit (RAP) Required",
                        color: "border-amber-300 bg-amber-50",
                        islands:
                          "Little Andaman, Interview Island, North Andaman, Middle Andaman, Diglipur, Long Island",
                        permit:
                          "RAP issued by the Deputy Commissioner's Office in Port Blair. For Indian nationals: free, same-day processing. For foreign nationals: may require advance application.",
                        note: "Apply in Port Blair before heading to these islands. Processing is usually same-day and straightforward.",
                      },
                      {
                        zone: "Completely Prohibited",
                        color: "border-red-300 bg-red-50",
                        islands:
                          "North Sentinel Island (Sentinelese tribe), Andamanese tribal reserves, Nicobar Islands (most)",
                        permit:
                          "No permit available — access is permanently prohibited under the Protection of Aboriginal Tribes Regulation.",
                        note: "The Sentinelese remain in self-imposed isolation and have rejected all contact. This is a legal and ethical prohibition — not a bureaucratic hurdle.",
                      },
                    ].map((p) => (
                      <div
                        key={p.zone}
                        className={`border ${p.color} rounded-xl p-5`}
                      >
                        <h4
                          className="font-bold text-stone-900 mb-3"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {p.zone}
                        </h4>
                        <div
                          className="space-y-2 text-sm"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          <div className="flex gap-3">
                            <span className="text-stone-400 text-xs pt-0.5 w-20 flex-shrink-0">
                              Islands
                            </span>
                            <span className="text-stone-700">{p.islands}</span>
                          </div>
                          <div className="flex gap-3">
                            <span className="text-stone-400 text-xs pt-0.5 w-20 flex-shrink-0">
                              Permit
                            </span>
                            <span className="text-stone-700">{p.permit}</span>
                          </div>
                          <div className="flex gap-3">
                            <span className="text-stone-400 text-xs pt-0.5 w-20 flex-shrink-0">
                              Note
                            </span>
                            <span className="text-forest-700 font-medium">
                              {p.note}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Photography restrictions:</strong> Photography of
                    tribal people, tribal reserves, and certain military
                    installations is prohibited. Fines and confiscation of
                    equipment are enforced. Photography at Cellular Jail
                    interiors requires a paid permit (₹25).
                  </div>
                </section>

                {/* ── Islands Overview ──────────────────────────────────── */}
                <section id="islands-overview">
                  <h2>The Islands — Overview</h2>

                  <section id="port-blair">
                    <h3>Port Blair — The Gateway</h3>
                    <p>
                      <strong>Port Blair</strong> is the capital, the entry
                      point, and — if we're honest — the least beautiful part of
                      the Andamans. It's a working city of 100,000 people with
                      traffic, concrete, and the practical infrastructure that
                      makes the rest of the islands function. Most visitors
                      spend 1–2 days here (enough for Cellular Jail and the
                      ferry to Havelock) before moving on.
                    </p>
                    <p>
                      That said, Port Blair has its merits: the
                      <strong> Anthropological Museum</strong> has the best
                      collection on Andamanese tribal cultures anywhere.
                      <strong> Corbyn's Cove Beach</strong> is a 20-minute drive
                      from the city and good for a sunset swim. The
                      <strong> Samudrika Naval Marine Museum</strong> has
                      impressive coral and marine life displays. And the
                      <strong> Aberdeen Bazaar</strong> market is excellent for
                      buying smoked fish, local spices, and black pepper.
                    </p>
                  </section>

                  <section id="havelock">
                    <h3>Havelock Island (Swaraj Dweep)</h3>
                    <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/andaman/havelock.jpg"
                        alt="Havelock Island — Radhanagar Beach turquoise water"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      <strong>Havelock Island</strong> — officially renamed
                      Swaraj Dweep — is the jewel of the Andamans and the reason
                      most people make the trip. It's a 57 sq km island about 54
                      km northeast of Port Blair, reached by a 90-minute ferry.
                      The island has world-class beaches, the best dive sites in
                      the Andamans, excellent accommodation at every budget, and
                      a pace of life measured in tides rather than clocks.
                    </p>
                    <p>
                      <strong>Radhanagar Beach</strong> (Beach No. 7) on the
                      west coast of Havelock is the island's centrepiece — a
                      2-km arc of powder-white sand and translucent turquoise
                      water, backed by dense tropical forest that comes down
                      almost to the tide line. Time Magazine named it Asia's
                      best beach in 2004, and it holds up. The sunsets here are
                      extraordinary — arrive an hour before dusk to get a good
                      spot.
                    </p>
                    <ul>
                      <li>
                        <strong>Stay:</strong> 2–3 nights minimum, ideally 3–4
                      </li>
                      <li>
                        <strong>Don't miss:</strong> Radhanagar at sunset,
                        Elephant Beach snorkelling, a full-day dive at The Wall
                        or Barracuda City
                      </li>
                      <li>
                        <strong>Base yourself at:</strong> Beach No. 5
                        (Vijayanagar) for most resorts, or Beach No. 3 (Govind
                        Nagar) for budget guesthouses
                      </li>
                    </ul>
                  </section>

                  <section id="neil-island">
                    <h3>Neil Island (Shaheed Dweep)</h3>
                    <p>
                      Smaller, quieter, and more authentically village-like than
                      Havelock, <strong>Neil Island</strong> (now officially
                      Shaheed Dweep) sits 37 km from Port Blair and 36 km from
                      Havelock. The island covers just 18 sq km and has a single
                      main village, a handful of guesthouses, and three distinct
                      beaches that each have their own character.
                    </p>
                    <p>
                      Neil is for those who want to slow down further — it
                      genuinely has no nightlife, minimal vehicles, and evenings
                      spent watching crabs emerge on the beach. The
                      <strong> Natural Bridge</strong> (a coral formation off
                      Bharatpur Beach that forms an arch at low tide) is Neil's
                      most photographed sight. Laxmanpur Beach has a spectacular
                      sunset rock formation. Sitapur Beach is best at sunrise.
                    </p>
                    <ul>
                      <li>
                        <strong>Stay:</strong> 1–2 nights as part of a longer
                        Andaman circuit
                      </li>
                      <li>
                        <strong>Best for:</strong> Couples, slow travellers,
                        people who've done Havelock and want more solitude
                      </li>
                      <li>
                        <strong>Cycle around:</strong> The entire island is
                        bikeable in under 2 hours — hire a bicycle from any
                        guesthouse (₹150–₹200/day)
                      </li>
                    </ul>
                  </section>

                  <section id="ross-island">
                    <h3>Ross & North Bay Islands</h3>
                    <p>
                      <strong>Ross Island</strong> (now renamed Netaji Subhas
                      Chandra Bose Island) was the administrative headquarters
                      of the British during colonial rule — a fully equipped
                      island settlement with a church, bakery, swimming pool,
                      tennis courts, and printing press, all of which now stand
                      as magnificent jungle-consumed ruins after the 1941
                      earthquake and Japanese occupation of WWII forced
                      abandonment. Spotted deer and peacocks wander through the
                      ruins freely. A 30-minute ferry from Port Blair jetty
                      (₹750 return including entry fee).
                    </p>
                    <p>
                      <strong>North Bay Island</strong>, visible from Port Blair
                      harbour, is the primary destination for glass-bottom boat
                      rides, snorkelling, and sea walking (walking on the seabed
                      in a helmet suit — a popular non-diver option). The coral
                      here is more accessible than Havelock but also more
                      crowded. Combine both on a single day trip from Port
                      Blair.
                    </p>
                  </section>

                  <section id="baratang">
                    <h3>Baratang & Limestone Caves</h3>
                    <p>
                      About 100 km north of Port Blair,{" "}
                      <strong>Baratang</strong>
                      is worth the effort for two extraordinary natural
                      attractions: <strong>limestone caves</strong> formed over
                      millions of years in a dense mangrove creek, and
                      <strong> mud volcanoes</strong> — one of only a handful of
                      such formations in India. The limestone caves are reached
                      by a 30-minute speedboat ride through a narrow mangrove
                      channel (itself spectacular) followed by a 1-km walk
                      through rainforest.
                    </p>
                    <p>
                      The journey passes through the{" "}
                      <strong>Jarawa Tribal Reserve</strong> — a designated
                      forest corridor where the Jarawa people live. Strict rules
                      apply on the highway through the reserve: no stopping, no
                      photography, no throwing food. Police escorts accompany
                      convoys through the reserve at scheduled times (8 AM and 3
                      PM).
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Port Blair:</strong> 100 km, ~3
                        hours by road + boat
                      </li>
                      <li>
                        <strong>Best as:</strong> A full-day trip from Port
                        Blair (depart by 6 AM)
                      </li>
                      <li>
                        <strong>Book through:</strong> Any Port Blair travel
                        agent — they arrange the full Jarawa corridor convoy +
                        boat combination
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Best Beaches ──────────────────────────────────────── */}
                <section id="beaches">
                  <h2>Best Beaches in the Andaman Islands</h2>
                  <p>
                    The Andamans have over 200 beaches — these are the ones that
                    genuinely earn the journey.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        name: "Radhanagar Beach",
                        island: "Havelock Island",
                        badge: "Best overall",
                        badgeColor: "bg-amber-100 text-amber-700",
                        rating: "★★★★★",
                        desc: "Asia's most consistently praised beach — 2 km of powder-white sand and translucent turquoise water backed by tropical forest. The sunset here is spectacular. Swimming is safe (no strong currents on calm days). Gets crowded at sunset from November–January — arrive early to claim a spot under the trees.",
                        tip: "Arrive 1.5 hours before sunset for shade and solitude. The water glows with bioluminescence at night in peak season (October–February).",
                      },
                      {
                        name: "Elephant Beach",
                        island: "Havelock Island",
                        badge: "Best snorkelling",
                        badgeColor: "bg-sky-100 text-sky-700",
                        rating: "★★★★★",
                        desc: "The best shallow snorkelling site in the Andamans — the coral begins just 2m from the shore and continues in excellent condition to 8–10m depth. Reached by a 30-minute boat from Havelock jetty (₹600 return) or a 45-minute jungle trek through the forest. The boat option is more popular; the trek is more beautiful.",
                        tip: "Take the jungle trek one way (morning, cooler) and the boat back. The trek path is well-marked and the forest is extraordinary.",
                      },
                      {
                        name: "Laxmanpur Beach",
                        island: "Neil Island",
                        badge: "Best sunset",
                        badgeColor: "bg-orange-100 text-orange-700",
                        rating: "★★★★☆",
                        desc: "Neil Island's longest beach, with a remarkable coral rock formation at the far end that's exposed at low tide — the silhouette against the sunset is one of the Andamans' most photographed images. The beach itself is shallower than Radhanagar but the end of day light show is magnificent.",
                        tip: "Check tide times before going — the rock formation is only accessible 2 hours either side of low tide. A local guesthouse will have tide charts.",
                      },
                      {
                        name: "Sitapur Beach",
                        island: "Neil Island",
                        badge: "Best sunrise",
                        badgeColor: "bg-rose-100 text-rose-700",
                        rating: "★★★★☆",
                        desc: "Neil's easternmost beach, facing the open Bay of Bengal — the sunrise here is genuinely spectacular, with no islands in the way to interrupt the horizon. The beach is rocky in sections but beautiful. Very few people come at dawn, making it feel completely private.",
                        tip: "Rent a bicycle the evening before and leave by 5:15 AM to reach Sitapur for the 5:45 AM sunrise. Return for breakfast.",
                      },
                      {
                        name: "Corbyn's Cove",
                        island: "Port Blair",
                        badge: "Most accessible",
                        badgeColor: "bg-forest-100 text-forest-700",
                        rating: "★★★☆☆",
                        desc: "Not in Havelock's league but perfectly pleasant for an evening swim during the day or two you spend in Port Blair. A crescent of dark sand with calm, clear water, 8 km from the city centre. Popular with locals and domestic tourists.",
                        tip: "Good for a sunset dip while waiting for your ferry the next day. The Andaman Beach Resort nearby has a decent bar with sea views.",
                      },
                      {
                        name: "Butler Bay Beach",
                        island: "Little Andaman",
                        badge: "Hardest to reach, most empty",
                        badgeColor: "bg-purple-100 text-purple-700",
                        rating: "★★★★★",
                        desc: "The Andamans' best-kept secret — a 15-km stretch of near-deserted beach on Little Andaman Island (8 hours by ferry from Port Blair). The effort filters out the crowds entirely. Excellent for surfing (consistent beach break). Requires RAP permit.",
                        tip: "Only for those with at least 10 days in the Andamans and a high tolerance for rustic accommodation. The reward is a beach that feels entirely your own.",
                      },
                    ].map((beach) => (
                      <div
                        key={beach.name}
                        className="bg-white border border-stone-200 rounded-xl p-5 hover:border-sky-200 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <h4
                              className="font-bold text-stone-900"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {beach.name}
                            </h4>
                            <p
                              className="text-sky-600 text-xs font-medium"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {beach.island}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${beach.badgeColor}`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {beach.badge}
                            </span>
                            <span className="text-amber-400 text-xs">
                              {beach.rating}
                            </span>
                          </div>
                        </div>
                        <p
                          className="text-sm text-stone-600 leading-relaxed mb-2"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {beach.desc}
                        </p>
                        <div className="bg-sky-50 rounded-lg px-3 py-2">
                          <p
                            className="text-xs text-sky-800"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            <span className="font-semibold">💡 Tip: </span>
                            {beach.tip}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Water Activities ──────────────────────────────────── */}
                <section id="water-activities">
                  <h2>Water Activities</h2>

                  <section id="scuba">
                    <h3>Scuba Diving</h3>
                    <p>
                      The Andaman Islands are one of the finest scuba diving
                      destinations in Asia — the Indian Ocean biodiversity here
                      is extraordinary, with over 1,200 species of fish, 200
                      species of coral, sea turtles, manta rays, and occasional
                      whale sharks. Visibility averages 15–30m in peak season.
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table
                        className="w-full text-sm border-collapse"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <thead>
                          <tr className="bg-sky-50">
                            {[
                              "Dive Site",
                              "Location",
                              "Depth",
                              "Best for",
                              "Difficulty",
                            ].map((h) => (
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
                            [
                              "The Wall",
                              "Havelock",
                              "10–30m",
                              "Dramatic reef wall, sea fans, reef sharks",
                              "Intermediate",
                            ],
                            [
                              "Barracuda City",
                              "Havelock",
                              "8–25m",
                              "Enormous barracuda schools, tuna",
                              "Beginner+",
                            ],
                            [
                              "Lighthouse",
                              "Havelock",
                              "5–18m",
                              "Turtle cleaning stations, soft coral",
                              "Beginner",
                            ],
                            [
                              "Aquarium",
                              "North Bay, Port Blair",
                              "3–8m",
                              "First dive, beginners, diverse reef fish",
                              "Beginner",
                            ],
                            [
                              "Seduction Point",
                              "Neil Island",
                              "10–25m",
                              "Leopard sharks, rays, pristine hard coral",
                              "Intermediate",
                            ],
                            [
                              "Barren Island",
                              "50km from Havelock",
                              "10–30m",
                              "Only active volcano in South Asia, hammerheads",
                              "Advanced",
                            ],
                            [
                              "Cinque Island",
                              "South of Port Blair",
                              "15–30m",
                              "Remote, pristine — best diving in Andamans",
                              "Intermediate+",
                            ],
                          ].map(([site, loc, depth, best, diff], i) => (
                            <tr
                              key={site}
                              className={
                                i % 2 === 0 ? "bg-white" : "bg-stone-50"
                              }
                            >
                              <td className="p-3 border border-stone-200 font-semibold text-stone-800">
                                {site}
                              </td>
                              <td className="p-3 border border-stone-200 text-stone-600">
                                {loc}
                              </td>
                              <td className="p-3 border border-stone-200 text-stone-600">
                                {depth}
                              </td>
                              <td className="p-3 border border-stone-200 text-stone-600">
                                {best}
                              </td>
                              <td className="p-3 border border-stone-200 text-stone-600">
                                {diff}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 my-6">
                      {[
                        {
                          type: "Discover Scuba (Introductory)",
                          icon: "🌊",
                          cost: "₹3,500 – ₹4,500",
                          desc: "Pool session + one shallow ocean dive (max 6m). No certification required. Perfect for first-timers. Takes 3–4 hours including briefing.",
                        },
                        {
                          type: "PADI Open Water Course",
                          icon: "🤿",
                          cost: "₹18,000 – ₹25,000",
                          desc: "Full 4-day certification course. Internationally recognised. 4 days of theory, pool, and ocean dives. Certifies you to dive to 18m worldwide.",
                        },
                        {
                          type: "Fun Dives (Certified)",
                          icon: "🐠",
                          cost: "₹1,500 – ₹2,500 per dive",
                          desc: "2 dives per day session for certified divers. Most operators on Havelock offer morning and afternoon dive trips to different sites.",
                        },
                      ].map((opt) => (
                        <div
                          key={opt.type}
                          className="bg-white border border-stone-200 rounded-xl p-5"
                        >
                          <div className="text-2xl mb-3">{opt.icon}</div>
                          <h4
                            className="font-bold text-stone-900 text-sm mb-1"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {opt.type}
                          </h4>
                          <p
                            className="text-forest-600 text-xs font-semibold mb-2"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {opt.cost}
                          </p>
                          <p
                            className="text-xs text-stone-600 leading-relaxed"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {opt.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                      className="text-sm text-stone-600"
                    >
                      <strong className="text-stone-800">
                        Best dive operators on Havelock:
                      </strong>{" "}
                      Dive India (most reputable, PADI 5-star), Barefoot Scuba,
                      Ocean Tribe, Pristine Seas. All are clustered near Beach
                      No. 5. Book directly rather than through hotel packages —
                      you pay less and get more personal attention.
                    </p>
                  </section>

                  <section id="snorkelling">
                    <h3>Snorkelling</h3>
                    <p>
                      The Andamans are as good for snorkelling as they are for
                      diving — the coral often begins in just 1–2m of water,
                      making it accessible to everyone. The key sites:
                    </p>
                    <ul>
                      <li>
                        <strong>Elephant Beach (Havelock):</strong> The best
                        snorkelling in the Andamans — rich coral starting 2m
                        from shore, huge parrotfish, sea turtles, and the
                        occasional reef shark at depth. Boat trip from Havelock
                        jetty (₹600 return, 30 min). Entry fee ₹100.
                      </li>
                      <li>
                        <strong>North Bay Island (Port Blair):</strong> More
                        accessible, more crowded, but good coral and plenty of
                        reef fish. Glass-bottom boat rides available for those
                        who don't want to get in the water (₹800 for 45 min).
                      </li>
                      <li>
                        <strong>Bharatpur Beach (Neil Island):</strong> Shallow,
                        calm water with hard coral and abundant fish. Best for
                        children and beginners — the reef is right at the
                        shoreline.
                      </li>
                      <li>
                        <strong>Jolly Buoy Island:</strong> 30 km south of Port
                        Blair, accessible only by day trip (closed alternate
                        months for ecological recovery). The coral here is
                        pristine — one of the best-preserved reefs in the
                        Andamans. Open October–May only.
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Coral safety:</strong> Never stand on, touch,
                      or hold coral. Never wear chemical sunscreen in the water.
                      Don't feed fish. These rules aren't just etiquette —
                      Andaman coral has suffered significant bleaching from
                      climate change and careless tourism. What remains is
                      increasingly precious.
                    </div>
                  </section>

                  <section id="kayaking">
                    <h3>Sea Kayaking & Other Activities</h3>
                    <ul>
                      <li>
                        <strong>
                          Sea kayaking through mangroves (Havelock):
                        </strong>
                        Kayak through the mangrove creek systems on Havelock's
                        north coast — best at high tide when the kayak floats
                        through the canopy. Several operators offer guided
                        sunrise and sunset paddles (₹1,500–₹2,500 per person).
                      </li>
                      <li>
                        <strong>Deep-sea fishing:</strong> Half-day fishing
                        trips from Havelock for tuna, barracuda, and dorado
                        (₹4,000–₹6,000 per boat, up to 4 people). The fishing in
                        the Andaman Sea is outstanding.
                      </li>
                      <li>
                        <strong>Sea walking (North Bay):</strong> Walk on the
                        seabed in a weighted helmet suit — no dive training
                        required. Breathe normally while fish swim around you at
                        3–5m depth. Popular with non-swimmers (₹3,500 per
                        person).
                      </li>
                      <li>
                        <strong>
                          Banana boat & water sports (Port Blair):
                        </strong>
                        Standard tourist water sports at Corbyn's Cove — banana
                        boat, jet ski, parasailing. Overpriced but available if
                        you need a half-day activity in Port Blair (₹500–₹2,000
                        per activity).
                      </li>
                      <li>
                        <strong>Surfing (Little Andaman):</strong> Butler Bay
                        Beach has a consistent left-hand beach break — the only
                        reliable surf spot in India's island territories. Boards
                        available for rent from local camps (₹500–₹700/day).
                        Best October–April.
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Cellular Jail ─────────────────────────────────────── */}
                <section id="cellular-jail">
                  <h2>Cellular Jail — Kala Pani</h2>
                  <p>
                    Whatever you've come to the Andamans for — the beaches, the
                    diving, the sunsets — do not skip
                    <strong> Cellular Jail</strong>. It will change the tone of
                    your trip in the best possible way.
                  </p>
                  <p>
                    Built by the British between 1896 and 1906, Cellular Jail
                    (called <em>Kala Pani</em> — "black water" — by inmates who
                    considered transportation across the sea a fate worse than
                    death) held India's most prominent freedom fighters in
                    conditions of extreme isolation. The jail was designed on
                    Jeremy Bentham's panopticon principle — seven wings
                    radiating from a central tower, each cell isolated to
                    prevent prisoners from seeing or communicating with each
                    other. Solitary confinement was the default, not the
                    exception.
                  </p>
                  <p>
                    Among those imprisoned here: Vinayak Damodar Savarkar,
                    Batukeshwar Dutt (who set off the Assembly bomb with Bhagat
                    Singh), and hundreds of others whose names are engraved on
                    the memorial plaques inside. Many died here. Some were
                    hanged. Others were worked to death on oil presses in
                    conditions that amounted to torture.
                  </p>
                  <p>
                    Today three of the original seven wings survive (four were
                    demolished post-independence). The cells are preserved as
                    they were. A small museum contains photographs and
                    documents. And every evening at 6 PM (Hindi) and 7:15 PM
                    (English), a <strong>sound and light show</strong> narrates
                    the history of the jail and its prisoners — voices of actors
                    playing the imprisoned, recreated sounds of daily life
                    inside, and a final segment on independence that reduces
                    most audiences to silence.
                  </p>
                  <div
                    className="bg-stone-900 text-white rounded-xl p-5 my-6"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <h4
                      className="font-bold text-white mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      📋 Cellular Jail — Practical Info
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      {[
                        {
                          label: "Entry fee",
                          value: "₹30 (Indian), ₹100 (Foreign)",
                        },
                        {
                          label: "Museum timings",
                          value: "9 AM – 12 PM, 1 PM – 4:45 PM (closed Mon)",
                        },
                        {
                          label: "Sound & Light (Hindi)",
                          value: "6:00 PM daily",
                        },
                        {
                          label: "Sound & Light (English)",
                          value: "7:15 PM daily",
                        },
                        {
                          label: "S&L ticket",
                          value: "₹50 (Indian), ₹100 (Foreign)",
                        },
                        { label: "Duration (S&L)", value: "45 minutes" },
                        {
                          label: "Photography",
                          value: "₹25 camera permit inside",
                        },
                        {
                          label: "Location",
                          value: "Aberdeen Bazaar area, Port Blair",
                        },
                      ].map(({ label, value }) => (
                        <div key={label} className="bg-white/5 rounded-lg p-3">
                          <div className="text-stone-400 text-xs mb-0.5">
                            {label}
                          </div>
                          <div className="text-white font-medium text-sm">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <blockquote>
                    The sound and light show at Cellular Jail is one of the most
                    emotionally powerful experiences in India. Book tickets in
                    advance during peak season (December–January) — the
                    amphitheatre fills to capacity. Arrive 20 minutes early for
                    a good seat.
                  </blockquote>
                </section>

                {/* ── Ferries ───────────────────────────────────────────── */}
                <section id="ferries">
                  <h2>Getting Around — Inter-Island Ferries</h2>
                  <p>
                    Ferries are the arteries of the Andamans — and mastering the
                    ferry system is the key to a stress-free trip. There are two
                    types: government ferries (cheap, crowded, slower) and
                    private speed ferries (more expensive, faster, better
                    maintained, and bookable online).
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          {[
                            "Route",
                            "Operator",
                            "Duration",
                            "Cost",
                            "Departures",
                          ].map((h) => (
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
                          [
                            "Port Blair → Havelock",
                            "Makruzz (private)",
                            "90 min",
                            "₹1,200–₹1,800",
                            "6 AM, 8 AM, 2 PM",
                          ],
                          [
                            "Port Blair → Havelock",
                            "Govt ferry",
                            "2.5–3 hrs",
                            "₹350–₹500",
                            "6 AM (daily)",
                          ],
                          [
                            "Port Blair → Neil",
                            "Makruzz (private)",
                            "1 hr 45 min",
                            "₹900–₹1,400",
                            "8 AM",
                          ],
                          [
                            "Havelock → Neil",
                            "Green Ocean (private)",
                            "1 hr",
                            "₹800–₹1,200",
                            "9:30 AM, 12 PM",
                          ],
                          [
                            "Neil → Port Blair",
                            "Govt ferry",
                            "2.5 hrs",
                            "₹300–₹450",
                            "6:30 AM",
                          ],
                          [
                            "Port Blair → Baratang",
                            "Govt boat + road",
                            "3 hrs total",
                            "₹300 (boat)",
                            "8 AM convoy",
                          ],
                          [
                            "Port Blair → Little Andaman",
                            "Govt ferry",
                            "7–8 hrs",
                            "₹500–₹800",
                            "2–3 per week",
                          ],
                        ].map(([route, op, dur, cost, dep], i) => (
                          <tr
                            key={route + op}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {route}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {op}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {dur}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {cost}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {dep}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <ul>
                    <li>
                      <strong>Book private ferries in advance:</strong> Makruzz,
                      Nautika, and Green Ocean ferries sell out 1–2 weeks ahead
                      in peak season (December–January). Book at makruzz.com or
                      through any Port Blair travel agent.
                    </li>
                    <li>
                      <strong>Arrive 30 minutes before departure:</strong> Ferry
                      terminals enforce strict boarding cutoffs. Late arrivals
                      lose their seats regardless of ticket status.
                    </li>
                    <li>
                      <strong>Cancelled ferries:</strong> Government ferries are
                      frequently cancelled in rough weather. Private operators
                      are more reliable but also cancel. Always have a buffer
                      day before flights.
                    </li>
                    <li>
                      <strong>Sit outside if the sea is rough:</strong> The
                      crossing can be choppy October–December. Outside deck is
                      better for those prone to motion sickness — the horizon
                      line helps prevent nausea.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    The best accommodation in the Andamans is on Havelock
                    Island. Port Blair has functional options for transit
                    nights. Neil Island has charming budget guesthouses. Stay
                    where the best experiences are — not in Port Blair.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₂,500/night",
                        picks: [
                          "Zostel Havelock (Beach No.3, dorms + private)",
                          "Symphony Palms Beach Resort (Havelock)",
                          "Tango Beach Resort (Neil Island)",
                          "TSG Emerald (Port Blair — transit)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹8,000/night",
                        picks: [
                          "Sea Shell Havelock (Beach No.5)",
                          "Summer Sands Beach Resort",
                          "Pearl Park Beach Resort (Neil Island)",
                          "Sinclairs Bayview (Port Blair)",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹8,000–₹35,000+/night",
                        picks: [
                          "Jalakara (Havelock — best luxury in Andamans)",
                          "Barefoot at Havelock (Beach No.7)",
                          "The Taj Exotica Resort (Havelock)",
                          "Munjoh Ocean Resort (Neil Island)",
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
                    Spend your maximum nights on Havelock. Port Blair is purely
                    a transit stop — one night on arrival, one night before
                    departure is all you need. Everything remarkable about the
                    Andamans is on the outer islands.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in the Andaman Islands</h2>
                  <p>
                    The Andamans' food scene is defined by exceptional fresh
                    seafood — pulled from the surrounding ocean and served
                    within hours of the catch. The influence is a mixture of
                    Bengali, Tamil, and Nicobari with a strong island simplicity
                    — grilled, curried, or fried fish and shellfish that needs
                    little else.
                  </p>
                  <ul>
                    <li>
                      <strong>Grilled barracuda and tuna:</strong> The signature
                      dish of Andaman beach restaurants — fresh catch marinated
                      in local spices and grilled over charcoal. Best at
                      Anju-Coco Resto on Havelock (Beach No. 3) and at local
                      restaurants near Aberdeen Bazaar in Port Blair.
                    </li>
                    <li>
                      <strong>Prawn curry with rice:</strong> The Andamanese
                      prawn curry is rich, coconut-based, and uses a distinctive
                      local spice blend with black pepper from the island's own
                      orchards. Try it at any local home restaurant (not resort
                      restaurants — same dish, 4x the price).
                    </li>
                    <li>
                      <strong>Lobster:</strong> The Andamans produce exceptional
                      spiny lobster — more affordable here than anywhere else in
                      India. Ask which restaurants have live lobster that day
                      (Havelock beachside restaurants, usually after 5 PM).
                    </li>
                    <li>
                      <strong>Red Snapper and Grouper:</strong> Both are
                      abundant in Andaman waters and appear on most menus.
                      Grouper cooked in a banana leaf is a local specialty worth
                      seeking out.
                    </li>
                    <li>
                      <strong>Coconut water (straight from the tree):</strong>
                      The island coconut vendors set up near every beach — ₹30
                      for a fresh coconut, chopped open on the spot. The most
                      effective rehydration after a morning of snorkelling.
                    </li>
                    <li>
                      <strong>Where to eat on Havelock:</strong> Anju-Coco Resto
                      (best local seafood, Beach No. 3), Full Moon Café (good
                      veg options, sunset view), Barefoot Bar & Restaurant (best
                      atmosphere, premium prices), and the beach shacks at
                      Radhanagar (seasonal, basic but excellent grilled fish).
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>7-Day Andaman Islands Itinerary</h2>
                  <p>
                    Seven days is the ideal minimum for the Andamans — enough
                    time to cover Port Blair, Havelock, and Neil Island
                    properly, with a half-day at Ross Island and a day trip to
                    Baratang if time allows.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival in Port Blair & Cellular Jail",
                        color: "bg-stone-700",
                        activities: [
                          "Fly into Port Blair — check in to transit hotel near Aberdeen Bazaar",
                          "Afternoon: Anthropological Museum and Samudrika Naval Museum",
                          "Evening: Sound and light show at Cellular Jail (book ticket in advance — 6 PM Hindi or 7:15 PM English)",
                          "Dinner at Lighthouse Residency restaurant — excellent local seafood",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Ross Island & North Bay → Ferry to Havelock",
                        color: "bg-sky-700",
                        activities: [
                          "Morning 8 AM: Day trip boat to Ross Island (ruins, deer, peacocks)",
                          "North Bay Island — glass-bottom boat or snorkelling",
                          "Return to Port Blair by 1 PM — lunch, check out",
                          "2 PM Makruzz ferry to Havelock Island (arrives 3:30 PM) — check in",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Radhanagar Beach & Sunset",
                        color: "bg-amber-600",
                        activities: [
                          "Morning: Lazy start — breakfast at resort, explore Beach No. 5 area",
                          "Afternoon 2 PM: Drive to Radhanagar Beach (Beach No. 7)",
                          "Swim, walk the 2-km beach, find a shady spot under the trees",
                          "Sunset at Radhanagar — one of India's great travel moments",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Elephant Beach Snorkelling & Kayaking",
                        color: "bg-forest-600",
                        activities: [
                          "7 AM: Jungle trek to Elephant Beach (45 min, forest trail)",
                          "Snorkelling at Elephant Beach (bring your own mask if possible)",
                          "Boat back to jetty at 12 PM",
                          "Afternoon: Mangrove kayaking through Havelock's north coast creeks",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Scuba Diving Day",
                        color: "bg-blue-600",
                        activities: [
                          "Morning: 2-dive session with Dive India (The Wall + Barracuda City)",
                          "Afternoon: Rest, beachside lunch, equipment drying",
                          "Sunset: Beach No. 5 walk and fresh coconut from beach vendors",
                          "Dinner: Anju-Coco Resto (grilled barracuda — order ahead)",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Havelock → Neil Island",
                        color: "bg-forest-500",
                        activities: [
                          "Morning: 9:30 AM Green Ocean ferry to Neil Island (1 hr)",
                          "Check in — rent a bicycle from guesthouse (₹150/day)",
                          "Cycle to Natural Bridge at Bharatpur Beach (low tide only — check timings)",
                          "Sunset at Laxmanpur Beach — the rock formation in orange light",
                        ],
                      },
                      {
                        day: "Day 7",
                        title: "Neil Island → Port Blair → Departure",
                        color: "bg-sky-600",
                        activities: [
                          "5:15 AM: Cycle to Sitapur Beach for sunrise over open ocean",
                          "Breakfast at hotel — pack up",
                          "10 AM: Ferry back to Port Blair (2.5 hrs govt ferry or 1 hr private)",
                          "Last shopping: smoked fish, black pepper, local spices at Aberdeen Bazaar",
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
                        <tr className="bg-sky-50">
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
                            "₹4,000",
                            "₹15,000",
                          ],
                          ["Food/day", "₹600", "₹1,200", "₹3,000"],
                          ["Inter-island ferries", "₹400", "₹1,400", "₹1,800"],
                          ["Scuba (2 dives)", "₹3,000", "₹4,000", "₹4,000"],
                          [
                            "Snorkelling/activities",
                            "₹600",
                            "₹1,500",
                            "₹2,500",
                          ],
                          ["Cellular Jail + museums", "₹180", "₹180", "₹180"],
                          ["Local transport/day", "₹200", "₹500", "₹1,200"],
                          [
                            "Daily total (approx)",
                            "₹2,600",
                            "₹7,800",
                            "₹22,500",
                          ],
                          [
                            "7-Day trip total",
                            "₹18,200",
                            "₹54,600",
                            "₹1,57,500",
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
                    * Excludes flights from mainland India to Port Blair
                    (₹4,000–₹15,000 one way from Delhi). The biggest variable in
                    Andaman budgets is accommodation — the difference between
                    budget guesthouses and luxury resorts on Havelock is
                    enormous.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for the Andaman Islands</h2>
                  <ul>
                    <li>
                      <strong>
                        Book flights and ferries early for December–January:
                      </strong>
                      Peak season demand is extreme. Flights from Chennai and
                      Kolkata to Port Blair sell out 6–8 weeks ahead. Makruzz
                      ferry bookings (particularly Port Blair–Havelock)
                      disappear 3–4 weeks out. Plan and book before you start
                      thinking about accommodation.
                    </li>
                    <li>
                      <strong>Use only reef-safe sunscreen:</strong> Chemical
                      sunscreens (oxybenzone, octinoxate) are banned at many
                      Andaman dive sites and actively bleach coral. Mineral
                      sunscreens (zinc oxide, titanium dioxide) are the only
                      responsible choice. Look for "reef-safe" on the label.
                    </li>
                    <li>
                      <strong>Connectivity is limited:</strong> BSNL and Airtel
                      have signal on Port Blair and Havelock's main areas. Neil
                      Island has patchy coverage. No signal at Elephant Beach,
                      Radhanagar (interior), or on the open water. Download
                      offline maps and ferry schedules before leaving Port
                      Blair.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs exist in Port Blair and
                      on Havelock, but Neil Island has only one ATM (which
                      frequently runs empty). Carry enough cash to cover Neil
                      Island expenses from Havelock.
                    </li>
                    <li>
                      <strong>
                        Don't miss Cellular Jail's sound and light show:
                      </strong>
                      Most visitors prioritise beach time and skip Cellular
                      Jail. This is a mistake. The sound and light show (6 PM /
                      7:15 PM) is one of the most moving experiences in India
                      and takes 45 minutes of your Port Blair evening. It will
                      make every subsequent moment on the beach more meaningful.
                    </li>
                    <li>
                      <strong>Respect Jarawa tribal corridors:</strong> The
                      highway to Baratang passes through Jarawa tribal reserve.
                      Follow instructions strictly — no stopping, no
                      photography, no throwing food. The Jarawa people have
                      chosen limited contact and this must be respected.
                    </li>
                    <li>
                      <strong>Build a buffer before your return flight:</strong>
                      Ferry cancellations are common, especially in
                      October–November and during any rough weather. If you have
                      a flight from Port Blair, arrive back the day before — not
                      the morning of.
                    </li>
                    <li>
                      <strong>The bioluminescence:</strong> In peak season
                      (October–February), the water around Havelock glows with
                      bioluminescent plankton after dark. Wade into the sea at
                      Radhanagar or Beach No. 5 between 8–10 PM and move your
                      hands through the water — it lights up blue-green with
                      every movement. No camera does it justice; just experience
                      it.
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
                          "Book flights and Makruzz ferries 4–6 weeks ahead",
                          "Watch the Cellular Jail sound and light show",
                          "Use only reef-safe mineral sunscreen in the water",
                          "Snorkel at Elephant Beach — take the jungle trail one way",
                          "Camp or stay overnight at Radhanagar for bioluminescence",
                          "Cycle around Neil Island for a morning — it's beautiful",
                          "Eat at local restaurants near Aberdeen Bazaar for the best seafood value",
                          "Build a buffer day before return flights",
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
                          "Touch or stand on coral — ever",
                          "Use chemical sunscreen in the sea (oxybenzone, octinoxate)",
                          "Spend more than 2 nights in Port Blair — it's not why you came",
                          "Visit June–September — monsoon makes most activities impossible",
                          "Ignore ferry cancellation risks — build buffer days",
                          "Photograph tribal people or reserved areas",
                          "Try to visit Nicobar Islands without the required permits",
                          "Skip the sound and light show at Cellular Jail",
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
                  "Andaman Islands",
                  "Beaches",
                  "Scuba Diving",
                  "Snorkelling",
                  "Havelock Island",
                  "Neil Island",
                  "India",
                  "Island Hopping",
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
                sections={allGearSections}
                destination="the Andaman Islands"
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
