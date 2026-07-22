// src/app/blog/assam-travel-guide/page.tsx
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
  title: "Assam Travel Guide: Kaziranga, Guwahati & Majuli Island",
  description:
    "The complete Assam travel guide — rhino safaris in Kaziranga National Park, Kamakhya Temple and the Brahmaputra in Guwahati, the world's largest river island Majuli, Assam's tea gardens, where to stay and eat, and a full itinerary through Northeast India's gateway state.",
  keywords:
    "Assam travel guide, Kaziranga National Park, one-horned rhinoceros, Guwahati, Kamakhya Temple, Majuli Island, Brahmaputra river, Assam tea gardens, Assam itinerary, Northeast India travel",
  openGraph: {
    title: "Assam Travel Guide: Kaziranga, Guwahati & Majuli Island",
    description:
      "Rhino safaris at Kaziranga, a Shakti Peeth temple above the Brahmaputra, and the world's largest river island — the complete guide to Assam, the gateway to Northeast India.",
    url: "https://club.kudozz.in/blog/assam-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Clear river water reflecting green hills, evoking Assam's Brahmaputra river and Majuli Island",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assam Travel Guide: Kaziranga, Guwahati & Majuli Island",
    description:
      "Rhino safaris, riverine temples, and the world's largest river island — the complete guide to Assam.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/assam-travel-guide",
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
          headline: "Assam Travel Guide: Kaziranga, Guwahati & Majuli Island",
          description: "The complete Assam travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
          datePublished: "2026-07-22",
          dateModified: "2026-07-22",
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
            "@id": "https://club.kudozz.in/blog/assam-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Assam",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Assam",
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
                name: "Assam Travel Guide",
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
  { id: "introduction", title: "Why Assam?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "kaziranga", title: "Kaziranga National Park: Rhino Country", level: 2 },
  { id: "guwahati", title: "Guwahati & Kamakhya Temple", level: 2 },
  { id: "majuli", title: "Majuli: The River Island", level: 2 },
  { id: "other-sights", title: "Tea Gardens, Manas & Sivasagar", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "7-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Assam-specific gear ──────────────────────────────────────────────────────
const ASSAM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for wildlife safaris, river crossings, and Assam's humid, monsoon-prone climate",
    emoji: "🦏",
    items: [
      {
        name: "Binoculars",
        description:
          "Essential for spotting rhinos, wild elephants, and birdlife across Kaziranga's open grasslands and wetlands.",
        price: "₹1,899",
        rating: 4.4,
        reviews: "5.4k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"),
        tag: "Safari essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Kaziranga's grasslands stretch far in every direction — binoculars turn a distant grey shape into an unmistakable rhino sighting.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Assam's wetlands, tea gardens, and river islands make mosquito protection a genuine necessity, especially outside the dry winter months.",
        price: "₹249",
        rating: 4.3,
        reviews: "7.1k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Everyday essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Between Kaziranga's marshy zones and Majuli's riverbanks, mosquitoes are a constant presence — worth packing before you land.",
      },
      {
        name: "Lightweight Rain Jacket",
        description:
          "Assam sees rain outside the core monsoon months too, and river crossings to Majuli can turn damp fast.",
        price: "₹1,199",
        rating: 4.4,
        reviews: "6.6k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("lightweight+rain+jacket+travel"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Even in the drier months, showers can appear with little warning — a packable rain shell earns its space in the bag.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long safari mornings, ferry crossings to Majuli, and travel between Guwahati, Kaziranga, and Jorhat.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Ferry waits and pre-dawn safari starts both drain a phone fast — a backup keeps the camera running for the rhino sighting.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long safari drives, river cruises, and Majuli's satra circuit.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Assam's humidity adds up over a full day of sightseeing — refillable bottles cut down on plastic in areas with limited waste disposal.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "A compact kit for cuts, motion sickness on ferry crossings, and general travel mishaps in more remote areas like Majuli.",
        price: "₹499",
        rating: 4.3,
        reviews: "4.8k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Safety essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Medical facilities thin out fast once you're off Guwahati's grid — a basic kit covers the gap on Majuli and around Kaziranga.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AssamGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Clear river water reflecting green hills, evoking Assam's Brahmaputra river and Majuli Island"
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
                  label: "Assam",
                  href: "/blog?category=assam",
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
                "Assam",
                "Kaziranga",
                "Guwahati",
                "Majuli Island",
                "Wildlife Safari",
                "Northeast India",
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
              Assam Travel Guide: Kaziranga, Guwahati & Majuli Island
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A rhino stronghold hiding in tall grass, a river goddess
              temple on a hilltop above the Brahmaputra, and the world's
              largest river island drifting between monasteries — Assam is
              the gateway to Northeast India, and a destination entirely
              worth its own trip.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "16 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Assam, Northeast India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,100 words",
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
                  <h2>Why Assam?</h2>
                  <p>
                    Cradled by the mighty <strong>Brahmaputra</strong>{" "}
                    river as it winds across the state, <strong>Assam</strong>{" "}
                    is the gateway to Northeast India — the state most
                    travelers pass through, and increasingly, the one they
                    stay for. It packs an unusual range of experiences into
                    a manageable footprint: wildlife, river culture, tea
                    country, and centuries of history.
                  </p>
                  <p>
                    <strong>Kaziranga National Park</strong> is Assam's
                    headline act, a UNESCO World Heritage Site and stronghold
                    of the one-horned rhinoceros, home to roughly two-thirds
                    of the world's remaining population. Not far east,{" "}
                    <strong>Majuli</strong> holds the title of the world's
                    largest river island, its Vaishnavite monasteries
                    drifting slowly with the Brahmaputra's shifting course.
                  </p>
                  <p>
                    Add the world-famous <strong>tea gardens</strong> around
                    Jorhat, the riverside temples of Guwahati, and Assam's
                    role as the springboard to Meghalaya, Nagaland, and the
                    rest of the Northeast, and it's clear why the state
                    rewards far more than a quick stopover.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦏</span> Assam at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Assam",
                        },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Guwahati (GAU)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Apr" },
                        {
                          icon: "🦏",
                          label: "Known For",
                          value: "Kaziranga, Rhinos",
                        },
                        {
                          icon: "🏝️",
                          label: "Landmark",
                          value: "Majuli River Island",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹8,000",
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
                  <h2>Best Time to Visit Assam</h2>
                  <p>
                    Assam's climate and, crucially, Kaziranga's park
                    calendar both make timing important — the monsoon
                    doesn't just bring rain, it closes the park's core
                    zones entirely.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and clear (10–25°C) — ideal for safaris, river cruises, and comfortable sightseeing across the state.",
                      },
                      {
                        season: "Mar – Apr",
                        emoji: "🌸",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Good, warming up",
                        text: "Still within Kaziranga's open season, with pleasant weather before the pre-monsoon heat and humidity build.",
                      },
                      {
                        season: "May – Oct",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — Kaziranga closed",
                        text: "Kaziranga's core zones close entirely (roughly May–October) as the Brahmaputra floods the park — this is a hard logistics constraint, not just a comfort issue.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🐘",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Park reopens",
                        text: "Kaziranga typically reopens for safaris around late October or early November once floodwaters recede — an excellent time to catch the park at its greenest.",
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
                    <strong>Our pick:</strong> November to February for the
                    best all-round conditions — cool weather, open safari
                    zones, and calm rivers for Majuli's ferry crossing.
                    Avoid planning a Kaziranga-centered trip anytime from
                    May to October.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Assam</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Lokpriya Gopinath Bordoloi
                      International Airport in Guwahati is the main gateway
                      to Northeast India, with regular flights from Delhi,
                      Mumbai, Kolkata, Bengaluru, and other major cities.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Guwahati is extensively
                      connected to the national rail network, with routes
                      also serving Jorhat and other towns closer to
                      Kaziranga and Majuli.
                    </li>
                    <li>
                      <strong>By Road:</strong> Guwahati functions as the
                      springboard to the rest of the Northeast — a solid
                      highway connects it to Kaziranga (~4–5 hrs) and onward
                      to Jorhat for Majuli.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly into Guwahati regardless
                    of your itinerary — it's the only major international
                    gateway in the region, and nearly every Northeast India
                    trip routes through it.
                  </div>
                </section>

                {/* ── Kaziranga ─────────────────────────────────────────── */}
                <section id="kaziranga">
                  <h2>Kaziranga National Park: Rhino Country</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Dense green forest and hills, evoking the grasslands and forest of Kaziranga National Park in Assam"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    A UNESCO World Heritage Site, <strong>Kaziranga</strong>{" "}
                    is home to roughly two-thirds of the world's{" "}
                    <strong>one-horned rhinoceros</strong> population,
                    grazing across tall elephant grass and wetlands fed by
                    the Brahmaputra.
                  </p>
                  <ul>
                    <li>
                      <strong>Elephant-back safaris:</strong> An early
                      morning ritual that brings visitors close to grazing
                      rhinos through the tall grass — often the best chance
                      for a close sighting.
                    </li>
                    <li>
                      <strong>Jeep safaris:</strong> Covering the park's
                      Central, Western, and Eastern ranges, each with
                      slightly different terrain and sighting odds across
                      the day.
                    </li>
                    <li>
                      <strong>Beyond rhinos:</strong> Kaziranga also
                      shelters Bengal tigers, wild elephants, and one of the
                      largest populations of swamp deer anywhere in the
                      world.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book both an elephant-back
                    and a jeep safari if possible — they cover different
                    zones and offer genuinely different vantage points on
                    the park.
                  </div>
                </section>

                {/* ── Guwahati ──────────────────────────────────────────── */}
                <section id="guwahati">
                  <h2>Guwahati & Kamakhya Temple</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Clear, calm river water, evoking the Brahmaputra flowing past Guwahati"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Assam's largest city sits directly on the{" "}
                    <strong>Brahmaputra</strong>, and most trips begin and
                    end here — but Guwahati is worth more than a transit
                    stop.
                  </p>
                  <ul>
                    <li>
                      <strong>Kamakhya Temple:</strong> One of the most
                      significant Shakti Peeth temples in India, perched
                      atop Nilachal Hill with commanding views over the
                      city and river below.
                    </li>
                    <li>
                      <strong>Brahmaputra river cruises:</strong> Sunset
                      cruises are a Guwahati institution, offering a calm,
                      golden-hour view of the river that defines the city.
                    </li>
                    <li>
                      <strong>Umananda Island:</strong> Said to be the
                      world's smallest inhabited river island, a short
                      ferry ride from the city and home to a small Shiva
                      temple.
                    </li>
                  </ul>
                </section>

                {/* ── Majuli ────────────────────────────────────────────── */}
                <section id="majuli">
                  <h2>Majuli: The River Island</h2>
                  <p>
                    <strong>Majuli</strong> holds the record as the world's
                    largest river island, reachable by ferry from{" "}
                    <strong>Jorhat</strong> — a slow crossing that feels
                    like a genuine transition into a different pace of
                    life.
                  </p>
                  <ul>
                    <li>
                      <strong>Satras (Vaishnavite monasteries):</strong>{" "}
                      Founded by the 15th-century saint Srimanta Sankardev,
                      these monasteries remain active centers of Assamese
                      Vaishnavite culture, music, and dance.
                    </li>
                    <li>
                      <strong>Mishing tribal culture:</strong> Majuli is
                      home to a significant Mishing community, with
                      distinctive stilt houses adapted to the island's
                      shifting, flood-prone geography.
                    </li>
                    <li>
                      <strong>Mask-making traditions:</strong> Several
                      satras practice a centuries-old craft of making
                      elaborate masks used in traditional performances —
                      workshops are open to visitors.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Stay a night on Majuli
                    rather than a day trip — the island's slow rhythm and
                    early-morning satra life are the real reason to come.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Tea Gardens, Manas & Sivasagar</h2>
                  <ul>
                    <li>
                      <strong>Tea Gardens (Jorhat):</strong> Known as
                      Assam's "tea capital," Jorhat and its surrounding
                      estates produce some of the world's most recognized
                      tea — several estates offer stays and guided
                      tastings.
                    </li>
                    <li>
                      <strong>Manas National Park:</strong> Another UNESCO
                      World Heritage Site and tiger reserve, far less
                      crowded than Kaziranga and set against the foothills
                      of Bhutan.
                    </li>
                    <li>
                      <strong>Sivasagar:</strong> The historical capital of
                      the Ahom dynasty, home to grand temples, palaces, and
                      the massive Sivasagar tank — a strong pick for
                      history beyond the wildlife circuit.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Plan to base yourself in 2–3 hubs — Guwahati, near
                    Kaziranga, and Jorhat or Majuli — rather than one
                    central location, given the distances involved.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Guesthouses, Guwahati",
                          "Budget lodges near Kaziranga gate",
                          "Homestays, Majuli",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Business hotels, Guwahati",
                          "Jungle resorts, Kaziranga",
                          "Tea estate stays, Jorhat",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹7,000–₹18,000+/night",
                        picks: [
                          "Riverfront hotels, Guwahati",
                          "Luxury jungle lodges, Kaziranga",
                          "Heritage tea bungalows, Jorhat",
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
                    Jungle lodges near Kaziranga's gates cost noticeably
                    more than equivalent town hotels — factor this into
                    your budget if the safari is central to your trip.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Assam</h2>
                  <ul>
                    <li>
                      <strong>Assamese Thali:</strong> A traditional
                      spread built around steamed rice, dal, seasonal
                      vegetables, and a fish or meat curry — usually light
                      on oil and spice compared to much of Indian cuisine.
                    </li>
                    <li>
                      <strong>Khar:</strong> A distinctive alkaline-based
                      dish made using filtered ash extract, a signature of
                      Assamese cooking found nowhere else in the country
                      quite like this.
                    </li>
                    <li>
                      <strong>Masor Tenga:</strong> A tangy, light fish
                      curry souring with tomato or elephant apple — one of
                      the most-loved everyday dishes in Assamese homes.
                    </li>
                    <li>
                      <strong>Assam Tea:</strong> More than a beverage — the
                      state's tea culture runs deep, with plantation
                      visits, tastings, and roadside tea stalls all part of
                      the experience.
                    </li>
                    <li>
                      <strong>Pitha:</strong> Traditional rice cakes, sweet
                      or savory, especially common around festivals like
                      Bihu but available year-round in local eateries.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>7-Day Assam Itinerary</h2>
                  <p>
                    Seven days is a reasonable minimum to combine Guwahati,
                    Kaziranga, and Majuli without excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrive Guwahati",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, settle in",
                          "Kamakhya Temple at sunset",
                          "Evening Brahmaputra river cruise",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Guwahati",
                        color: "bg-sky-600",
                        activities: [
                          "Umananda Island ferry trip",
                          "Explore local markets and old town",
                          "Travel to Kaziranga in the afternoon",
                        ],
                      },
                      {
                        day: "Day 3–4",
                        title: "Kaziranga National Park",
                        color: "bg-forest-600",
                        activities: [
                          "Sunrise elephant-back safari",
                          "Afternoon jeep safari, Central/Western range",
                          "Second day: Eastern range safari",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Travel to Jorhat & Majuli",
                        color: "bg-stone-600",
                        activities: [
                          "Travel to Jorhat (~2–3 hrs)",
                          "Ferry crossing to Majuli",
                          "Evening at a Majuli homestay",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Majuli",
                        color: "bg-purple-700",
                        activities: [
                          "Visit Vaishnavite satras",
                          "Mask-making workshop",
                          "Mishing village and cycling around the island",
                        ],
                      },
                      {
                        day: "Day 7",
                        title: "Jorhat & Departure",
                        color: "bg-amber-700",
                        activities: [
                          "Ferry back to Jorhat",
                          "Tea estate visit and tasting",
                          "Departure via Jorhat or return to Guwahati",
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
                            "₹1,200",
                            "₹4,000",
                            "₹10,000",
                          ],
                          ["Food/day", "₹450", "₹1,000", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,300",
                            "₹3,000",
                          ],
                          [
                            "Safari & entry fees/day",
                            "₹1,800",
                            "₹3,500",
                            "₹6,500",
                          ],
                          ["Daily total", "₹3,950", "₹9,800", "₹22,000"],
                          [
                            "7-Day trip total",
                            "₹27,650",
                            "₹68,600",
                            "₹154,000",
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
                    * Excludes flights. Elephant-back and jeep safari fees at
                    Kaziranga are a significant line item — sharing a jeep
                    brings per-person costs down considerably.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Assam</h2>
                  <ul>
                    <li>
                      <strong>Book Kaziranga safaris well in advance:</strong>{" "}
                      Elephant-back and jeep safari slots are capped daily
                      and fill up fast during peak season (Nov–Feb).
                    </li>
                    <li>
                      <strong>Confirm park open dates before booking:</strong>{" "}
                      Kaziranga's core zones close for monsoon flooding
                      roughly May–October — always verify current dates
                      before finalizing your trip.
                    </li>
                    <li>
                      <strong>Carry cash outside Guwahati:</strong> Card
                      acceptance drops off quickly once you're near
                      Kaziranga, in Jorhat, and especially on Majuli.
                    </li>
                    <li>
                      <strong>Respect satra etiquette on Majuli:</strong>{" "}
                      Dress modestly, remove footwear before entering
                      prayer halls, and ask before photographing monks or
                      ceremonies.
                    </li>
                    <li>
                      <strong>Time the Majuli ferry carefully:</strong>{" "}
                      Crossings run on a limited daily schedule and can be
                      affected by river conditions — confirm timings a day
                      ahead.
                    </li>
                    <li>
                      <strong>Factor in long transit days:</strong>{" "}
                      Distances between Guwahati, Kaziranga, and Majuli are
                      substantial — build buffer time into your itinerary.
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
                          "Book Kaziranga safari permits weeks ahead",
                          "Confirm the park is open before you travel",
                          "Carry cash for Majuli and rural areas",
                          "Dress modestly and respectfully at satras",
                          "Stay overnight on Majuli, not just a day trip",
                          "Share safari jeeps to reduce per-person cost",
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
                          "Plan a Kaziranga trip during the May–October closure",
                          "Rely on cards outside Guwahati",
                          "Show up to a safari without a booked permit",
                          "Photograph monks or ceremonies without asking",
                          "Underestimate the ferry schedule to Majuli",
                          "Rush Majuli into a single-day visit",
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
                  "Assam",
                  "Kaziranga",
                  "Guwahati",
                  "Majuli Island",
                  "Kamakhya Temple",
                  "Brahmaputra",
                  "Northeast India",
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
                sections={ASSAM_GEAR}
                destination="Assam"
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
