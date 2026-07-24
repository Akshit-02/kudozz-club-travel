// src/app/blog/odisha-travel-guide/page.tsx
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
  title: "Odisha Travel Guide: Konark, Puri & Chilika Lake",
  description:
    "The complete Odisha travel guide — the Konark Sun Temple, Puri's Jagannath Temple and beach, Bhubaneswar's temple architecture, Chilika Lake's Irrawaddy dolphins, where to stay and eat, and a full itinerary through India's most underrated temple state.",
  keywords:
    "Odisha travel guide, Konark Sun Temple, Puri Jagannath Temple, Bhubaneswar travel guide, Chilika Lake, Puri beach, Rath Yatra, Udayagiri Khandagiri Caves, Odisha itinerary, Odia food",
  openGraph: {
    title: "Odisha Travel Guide: Konark, Puri & Chilika Lake",
    description:
      "A chariot-shaped stone temple, one of Hinduism's holiest shrines, and India's largest brackish-water lagoon full of dolphins — the complete guide to Odisha.",
    url: "https://club.kudozz.in/blog/odisha-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient carved stone temple ruins, evoking Odisha's Konark Sun Temple architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odisha Travel Guide: Konark, Puri & Chilika Lake",
    description:
      "The Konark Sun Temple, Puri's Jagannath Temple, and Chilika Lake's dolphins — the complete guide to Odisha.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/odisha-travel-guide",
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
          headline: "Odisha Travel Guide: Konark, Puri & Chilika Lake",
          description: "The complete Odisha travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-07-19",
          dateModified: "2026-07-19",
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
            "@id": "https://club.kudozz.in/blog/odisha-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Odisha",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha Travel Guide",
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
  { id: "introduction", title: "Why Odisha?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Odisha", level: 2 },
  { id: "puri", title: "Puri: Jagannath Temple & Beach", level: 2 },
  { id: "konark", title: "Konark: The Sun Temple", level: 2 },
  { id: "bhubaneswar", title: "Bhubaneswar: The Temple City", level: 2 },
  { id: "chilika", title: "Chilika Lake: Dolphins & Birds", level: 2 },
  { id: "tribal-odisha", title: "Tribal Odisha", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Odisha-specific gear ─────────────────────────────────────────────────
const ODISHA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for temple complexes, coastal heat, and a lagoon boat trip",
    emoji: "🛕",
    items: [
      {
        name: "Comfortable, Easy-Off Sandals",
        description:
          "Both the Jagannath Temple in Puri and the Konark Sun Temple involve barefoot walking on stone that gets very hot by midday.",
        price: "₹899",
        rating: 4.4,
        reviews: "7.6k",
        image: "🩴",
        affiliateUrl: amazonSearchUrl("slip+on+sandals+travel"),
        tag: "Temple essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Konark's stone courtyard and Puri's temple approach both require removing footwear — slip-ons make repeated removal far easier.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Odisha's coastal plains stay hot and humid for most of the year, with long uncovered stretches at Konark and around Puri Beach.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Humidity along the Odisha coast makes hydration matter more than the temperature alone suggests.",
      },
      {
        name: "Binoculars",
        description:
          "Useful for spotting Irrawaddy dolphins and the wide range of migratory birds at Chilika Lake, especially from a distance on a boat.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "5.3k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("compact+binoculars+travel"),
        tag: "Chilika essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Dolphin and bird sightings at Chilika often happen at a distance from the boat — binoculars significantly improve the experience.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description:
          "Useful across Konark's exposed stone courtyard and a Chilika Lake boat trip, both largely without shade.",
        price: "₹399",
        rating: 4.3,
        reviews: "5.6k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Sun essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "A Chilika boat safari runs several hours under direct sun with no cover — sun protection matters more here than it first seems.",
      },
      {
        name: "Modest Travel Clothing",
        description:
          "Covered shoulders and knees are expected at the Jagannath Temple and other active temples in Bhubaneswar.",
        price: "₹799",
        rating: 4.3,
        reviews: "4.4k",
        image: "👗",
        affiliateUrl: amazonSearchUrl("modest+travel+clothing+lightweight"),
        tag: "Temple essential",
        tagColor: "bg-red-100 text-red-700",
        why: "The Jagannath Temple in particular enforces a strict dress code, and non-Hindus are not permitted inside the sanctum at all.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long sightseeing days covering Puri, Konark, and Bhubaneswar's temple circuit.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Travel-day essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "The Golden Triangle circuit covers a lot of ground in a single day — your phone works hard for navigation and photos throughout.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function OdishaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/hampi/hero.jpg"
              alt="Ancient carved stone temple ruins, evoking Odisha's Konark Sun Temple architecture"
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
                { label: "Odisha", href: "/blog?category=odisha" },
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
                "Konark",
                "Puri",
                "Bhubaneswar",
                "Chilika Lake",
                "Temple Trail",
                "State Guide",
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
              Odisha Travel Guide: Konark, Puri & Chilika Lake
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A stone temple carved as a giant chariot with wheels that
              still turn, one of Hinduism's holiest shrines, and a lagoon
              where Irrawaddy dolphins surface between fishing boats —
              Odisha is India's most underrated temple state.
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
                  text: "Odisha, East India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,900 words",
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
                  <h2>Why Odisha?</h2>
                  <p>
                    Overshadowed by its more famous neighbours, <strong>Odisha</strong>{" "}
                    is home to one of India's genuine architectural marvels
                    — the 13th-century <strong>Konark Sun Temple</strong>,
                    designed as a colossal stone chariot with 24 intricately
                    carved wheels, pulled by seven stone horses.
                  </p>
                  <p>
                    That's just one point on Odisha's "Golden Triangle" —
                    alongside Puri, home to the Jagannath Temple and its
                    famous Rath Yatra chariot festival, and Bhubaneswar, a
                    genuine temple city with dozens of ancient shrines
                    packed into a relatively compact area.
                  </p>
                  <p>
                    Beyond the temple circuit, Chilika Lake — Asia's largest
                    brackish-water lagoon — offers Irrawaddy dolphin
                    sightings and some of East India's best birdwatching,
                    while Odisha's interior is home to some of the country's
                    most distinct tribal communities and craft traditions.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Odisha at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Odisha" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Bhubaneswar (BBI)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Konark, Jagannath Temple, Chilika Lake",
                        },
                        {
                          icon: "🐬",
                          label: "Wildlife",
                          value: "Irrawaddy Dolphins (Chilika)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹6,000",
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
                  <h2>Best Time to Visit Odisha</h2>
                  <p>
                    Odisha's coastal climate stays hot and humid for much of
                    the year, with a distinct cyclone risk window to plan
                    around.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cooler, drier conditions (18–28°C) make temple visits and Chilika Lake boat trips genuinely comfortable — the peak travel window.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot and humid",
                        text: "Temperatures and humidity climb sharply, making midday temple visits genuinely uncomfortable — plan around early mornings.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Substantial rain across the state; some coastal and lagoon activities become genuinely difficult during peak monsoon weeks.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🌀",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cyclone risk window",
                        text: "Odisha's coast is periodically affected by cyclones during this transition period — check weather advisories before travel.",
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
                    <strong>Our pick:</strong> November to February — dry,
                    comfortable conditions across the whole circuit, past
                    the worst of the cyclone-risk transition period.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Odisha</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Biju Patnaik International
                      Airport (BBI) in Bhubaneswar has good domestic
                      connectivity from Delhi, Mumbai, Kolkata, Bengaluru and
                      other major cities.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Bhubaneswar and Puri are
                      both well connected by rail to Delhi, Kolkata,
                      Chennai, and Mumbai — Puri in particular has direct
                      trains from several major cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> Puri, Konark and Bhubaneswar
                      form a compact triangle, each roughly 1-1.5 hours from
                      the others by road, making a self-drive or hired-car
                      circuit straightforward.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in Puri for
                    the Golden Triangle leg — it's centrally located between
                    Konark and Bhubaneswar, and has by far the best range of
                    beachside accommodation.
                  </div>
                </section>

                {/* ── Puri ──────────────────────────────────────────────── */}
                <section id="puri">
                  <h2>Puri: Jagannath Temple & Beach</h2>
                  <p>
                    One of Hinduism's four sacred Char Dham pilgrimage
                    sites, Puri is built around the <strong>Jagannath
                    Temple</strong> and is home to the annual{" "}
                    <strong>Rath Yatra</strong>, one of the world's largest
                    religious processions.
                  </p>
                  <ul>
                    <li>
                      <strong>Jagannath Temple:</strong> A massive
                      12th-century temple complex — entry is restricted to
                      Hindus only, but the temple's towering shikhara and
                      surrounding old-city atmosphere are worth experiencing
                      regardless.
                    </li>
                    <li>
                      <strong>Rath Yatra:</strong> Held annually (typically
                      June-July), when massive wooden chariots carrying the
                      temple deities are pulled through Puri's streets by
                      thousands of devotees — genuinely one of India's most
                      significant religious events.
                    </li>
                    <li>
                      <strong>Puri Beach:</strong> A wide, popular beach
                      with a lively promenade — better for a walk and local
                      atmosphere than for swimming, given the currents.
                    </li>
                    <li>
                      <strong>Gundicha Temple:</strong> The deities'
                      "summer home" during Rath Yatra, roughly 3 km from the
                      main temple.
                    </li>
                  </ul>
                </section>

                {/* ── Konark ────────────────────────────────────────────── */}
                <section id="konark">
                  <h2>Konark: The Sun Temple</h2>
                  <p>
                    A UNESCO World Heritage Site roughly 35 km from Puri,
                    the <strong>Konark Sun Temple</strong> was built in the
                    13th century as a colossal representation of the sun
                    god Surya's chariot — a masterpiece of medieval Odisha
                    (Kalinga) architecture.
                  </p>
                  <ul>
                    <li>
                      <strong>The chariot design:</strong> The temple is
                      carved as a giant chariot with 24 intricately detailed
                      stone wheels (each functioning as a sundial) and
                      pulled by seven horses — one of the most ambitious
                      architectural concepts in Indian temple history.
                    </li>
                    <li>
                      <strong>Stone carvings:</strong> The entire structure
                      is covered in detailed relief carvings depicting
                      deities, everyday life, and intricate geometric
                      patterns — allow at least 2 hours to appreciate the
                      detail.
                    </li>
                    <li>
                      <strong>Konark Beach:</strong> A quieter, less
                      developed beach near the temple, worth a short visit
                      if time allows.
                    </li>
                    <li>
                      <strong>Konark Dance Festival:</strong> An annual
                      classical dance festival held against the temple's
                      backdrop, typically in December — worth timing a trip
                      around if possible.
                    </li>
                  </ul>
                </section>

                {/* ── Bhubaneswar ───────────────────────────────────────── */}
                <section id="bhubaneswar">
                  <h2>Bhubaneswar: The Temple City</h2>
                  <p>
                    Odisha's capital is genuinely nicknamed the "Temple
                    City" for good reason — over 700 temples once stood
                    here, and dozens of significant ones remain.
                  </p>
                  <ul>
                    <li>
                      <strong>Lingaraj Temple:</strong> The largest and most
                      important temple in Bhubaneswar, an 11th-century
                      masterpiece — like the Jagannath Temple, entry is
                      restricted to Hindus, but the exterior architecture is
                      impressive from the viewing platform.
                    </li>
                    <li>
                      <strong>Mukteshwar Temple:</strong> A smaller,
                      exquisitely carved 10th-century temple, often
                      considered the "gem" of Odisha temple architecture.
                    </li>
                    <li>
                      <strong>Udayagiri and Khandagiri Caves:</strong> Twin
                      hills with ancient Jain rock-cut caves dating back to
                      the 2nd century BCE, with inscriptions and carved
                      chambers.
                    </li>
                    <li>
                      <strong>Odisha State Museum:</strong> A good overview
                      of the state's history, tribal culture, and
                      archaeological finds before heading further into the
                      state.
                    </li>
                  </ul>
                </section>

                {/* ── Chilika ───────────────────────────────────────────── */}
                <section id="chilika">
                  <h2>Chilika Lake: Dolphins & Birds</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/kerala/alleppey.jpg"
                      alt="Calm lagoon waters with boats, evoking Odisha's Chilika Lake, Asia's largest brackish-water lagoon"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Asia's largest brackish-water lagoon, <strong>Chilika
                    Lake</strong> spans nearly 1,100 sq km and is one of the
                    most important wetland ecosystems in India, roughly 100
                    km from Bhubaneswar.
                  </p>
                  <ul>
                    <li>
                      <strong>Irrawaddy dolphins:</strong> Chilika is one of
                      the few places in India to spot these rare dolphins,
                      typically seen from boats near Satapada — sightings
                      are best in the cooler months.
                    </li>
                    <li>
                      <strong>Birdwatching:</strong> Chilika hosts over a
                      million migratory birds each winter, making Nalabana
                      Bird Sanctuary within the lake one of India's premier
                      birdwatching destinations.
                    </li>
                    <li>
                      <strong>Boat safaris:</strong> Organised boat trips
                      from Satapada or Rambha cover both dolphin spotting
                      and island visits — a full morning is typically
                      needed.
                    </li>
                  </ul>
                </section>

                {/* ── Tribal Odisha ─────────────────────────────────────── */}
                <section id="tribal-odisha">
                  <h2>Tribal Odisha</h2>
                  <p>
                    Odisha's interior — particularly the Koraput and
                    Similipal regions — is home to some of India's most
                    distinct tribal communities, with weekly haats (markets)
                    and craft traditions rarely seen by outside visitors.
                  </p>
                  <ul>
                    <li>
                      <strong>Koraput region:</strong> Home to several
                      tribal communities including the Bonda and Gadaba,
                      with colourful weekly markets worth visiting with a
                      knowledgeable local guide.
                    </li>
                    <li>
                      <strong>Pattachitra art:</strong> Odisha's traditional
                      scroll painting style, centred in the village of
                      Raghurajpur near Puri — an easy day-trip stop to see
                      artists at work.
                    </li>
                    <li>
                      <strong>Similipal National Park:</strong> A tiger
                      reserve and biosphere in the state's north, less
                      visited than most Indian national parks but genuinely
                      rewarding for wildlife enthusiasts with extra time.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Puri has the widest range of accommodation given its
                    beach and pilgrimage draw; Bhubaneswar is better suited
                    for business-style stays.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹700–₹1,800/night",
                        picks: [
                          "Beachfront guesthouses, Puri",
                          "Budget lodges near Jagannath Temple",
                          "Basic stays, Bhubaneswar",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Beach resorts, Puri",
                          "Business hotels, Bhubaneswar",
                          "Mayfair Heritage, Puri",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹7,000–₹18,000+/night",
                        picks: [
                          "Mayfair Waves, Puri",
                          "Trident Bhubaneswar",
                          "Premium beach resorts, Puri",
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
                    Base yourself in Puri for the Golden Triangle circuit —
                    it puts both Konark and Bhubaneswar within a comfortable
                    day-trip distance while giving you beach access every
                    evening.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Odisha</h2>
                  <ul>
                    <li>
                      <strong>Dalma:</strong> A hearty lentil and vegetable
                      stew, an Odia household staple typically eaten with
                      rice.
                    </li>
                    <li>
                      <strong>Pakhala:</strong> Fermented rice soaked in
                      water, traditionally eaten in summer — a beloved
                      Odia comfort food, especially with fried fish or
                      vegetables on the side.
                    </li>
                    <li>
                      <strong>Chhena Poda:</strong> A baked cheese dessert
                      originating in Odisha, dense and caramelised — often
                      called the state's signature sweet.
                    </li>
                    <li>
                      <strong>Mahaprasad (Puri):</strong> The temple's
                      communal food offering, prepared in the Jagannath
                      Temple's massive kitchen and served to devotees — a
                      unique culinary and religious experience.
                    </li>
                    <li>
                      <strong>Fresh seafood, Puri and Chilika:</strong> Given
                      the coastal and lagoon geography, fresh fish and prawn
                      preparations are widely available and excellent.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Odisha Itinerary</h2>
                  <p>
                    Five days is a comfortable minimum to cover the Golden
                    Triangle and Chilika Lake without rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Bhubaneswar",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, Lingaraj Temple, Mukteshwar Temple",
                          "Udayagiri and Khandagiri Caves",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Travel to Puri via Konark",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Konark, Sun Temple visit",
                          "Continue to Puri, evening at Puri Beach",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Puri",
                        color: "bg-forest-600",
                        activities: [
                          "Jagannath Temple area, old city walk",
                          "Raghurajpur Pattachitra village day trip",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Chilika Lake",
                        color: "bg-purple-600",
                        activities: [
                          "Drive to Satapada (~1.5 hrs)",
                          "Boat safari for dolphins and birdwatching",
                          "Return to Puri or Bhubaneswar",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Last-minute sightseeing or shopping",
                          "Departure via Bhubaneswar",
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
                            "₹1,000",
                            "₹3,500",
                            "₹10,000",
                          ],
                          ["Food/day", "₹400", "₹1,000", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹400",
                            "₹900",
                            "₹2,200",
                          ],
                          ["Activities/day", "₹300", "₹700", "₹1,500"],
                          ["Daily total", "₹2,100", "₹6,100", "₹16,200"],
                          [
                            "5-Day trip total",
                            "₹10,500",
                            "₹30,500",
                            "₹81,000",
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
                    * Excludes flights to Bhubaneswar. Chilika Lake boat
                    safaris are typically quoted per-boat, so cost per
                    person drops significantly in a group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Odisha</h2>
                  <ul>
                    <li>
                      <strong>Non-Hindus cannot enter the Jagannath or
                      Lingaraj Temple sanctums:</strong> Viewing platforms
                      are available outside both — confirm current access
                      rules before visiting.
                    </li>
                    <li>
                      <strong>Check cyclone advisories in Oct–Nov:</strong>{" "}
                      Odisha's coast is periodically affected during this
                      transition window — check forecasts before finalising
                      travel dates.
                    </li>
                    <li>
                      <strong>Book Chilika boat safaris through registered
                      operators:</strong> Ensures proper safety standards and
                      supports responsible dolphin-watching practices.
                    </li>
                    <li>
                      <strong>Visit Konark early morning:</strong> Both for
                      cooler temple-stone underfoot and the best light for
                      photographing the carvings.
                    </li>
                    <li>
                      <strong>Plan around Rath Yatra crowds:</strong> If
                      visiting Puri during the festival, expect very large
                      crowds and book accommodation well ahead.
                    </li>
                    <li>
                      <strong>Carry cash outside major cities:</strong> Card
                      acceptance drops off quickly outside Bhubaneswar and
                      central Puri.
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
                          "Visit Konark Sun Temple early morning",
                          "Book Chilika boat safaris through registered operators",
                          "Check cyclone advisories if travelling Oct–Nov",
                          "Try mahaprasad and local Odia specialities",
                          "Base yourself in Puri for the Golden Triangle circuit",
                          "Visit Raghurajpur to see Pattachitra artists at work",
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
                          "Expect sanctum access to Jagannath or Lingaraj Temple as a non-Hindu",
                          "Swim carelessly at Puri Beach — currents can be strong",
                          "Visit during Rath Yatra without booking accommodation well ahead",
                          "Skip cyclone advisory checks in the Oct–Nov window",
                          "Rely on cards outside Bhubaneswar and central Puri",
                          "Rush Konark's carvings — they reward slow viewing",
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
                  "Odisha",
                  "Konark",
                  "Puri",
                  "Bhubaneswar",
                  "Chilika Lake",
                  "Temple Trail",
                  "State Guide",
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
                sections={ODISHA_GEAR}
                destination="Odisha"
              />

              <RelatedPostsGrid currentSlug="odisha-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="odisha-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
