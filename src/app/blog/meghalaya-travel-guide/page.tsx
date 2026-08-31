// src/app/blog/meghalaya-travel-guide/page.tsx
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { RelatedPostsGrid, RelatedSidebar } from "@/components/ui/RelatedPosts";
import TableOfContents from "@/components/ui/TableOfContents";
import TrekGearRecommendations, {
  FOREST_GEAR,
} from "@/components/ui/TrekGearRecommendations";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Meghalaya Travel Guide: Living Root Bridges, Cherrapunji & More",
  description:
    "The complete Meghalaya travel guide. Double-decker living root bridges, Cherrapunji's waterfalls, Dawki's crystal-clear river, Shillong's cafes, and a full itinerary for India's wettest and most spectacular state.",
  keywords:
    "Meghalaya travel guide, Cherrapunji, Mawlynnong, living root bridges, Dawki river, Shillong travel, Northeast India travel, Umngot river, Nohkalikai Falls, Meghalaya itinerary, best time to visit Meghalaya, how to reach Meghalaya from Guwahati, Meghalaya itinerary days, is permit required for Meghalaya, Meghalaya budget trip, living root bridge trek Nongriat, Shillong travel guide",
  openGraph: {
    title: "Meghalaya Travel Guide: Living Root Bridges, Cherrapunji & More",
    description:
      "Double-decker root bridges, the cleanest river in Asia, thundering waterfalls and misty pine hills — the complete guide to Meghalaya.",
    url: "https://club.kudozz.in/blog/meghalaya-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Double-decker living root bridge in Meghalaya's rainforest",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Meghalaya Travel Guide",
    description:
      "Living root bridges, Cherrapunji waterfalls, and the cleanest river in Asia — everything you need to plan your Meghalaya trip.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/meghalaya-travel-guide",
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
            "Meghalaya Travel Guide: Living Root Bridges, Cherrapunji & More",
          description:
            "The complete Meghalaya travel guide — living root bridges, Cherrapunji waterfalls, Dawki river, Shillong cafes, itinerary and insider tips.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-07-12",
          dateModified: "2026-07-12",
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
            "@id": "https://club.kudozz.in/blog/meghalaya-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Meghalaya",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya Travel Guide",
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
    q: "How many days do I need for Meghalaya?",
    a: "Six days is a good length for covering Shillong, Cherrapunji, the living root bridges, Mawlynnong, and Dawki without excessive rushing, as laid out in our 6-day itinerary structured around a Guwahati arrival and departure. With less time, prioritize Cherrapunji's waterfalls and either the root bridge trek or Dawki's Umngot River.",
  },
  {
    q: "What is the best time to visit Meghalaya?",
    a: "October to April is the best overall window — dry, clear skies, with the Umngot River at Dawki at its most transparent, and cool, pleasant temperatures (8–22°C). Our pick specifically is late October to early December, when the monsoon has just cleared, waterfalls are still full, and the air is crisp without being bitterly cold.",
  },
  {
    q: "How do I reach Meghalaya?",
    a: "Guwahati's Lokpriya Gopinath Bordoloi International Airport (GAU) in neighbouring Assam is the main gateway, well connected to Delhi, Mumbai, Kolkata, and Bengaluru. From Guwahati, it's roughly a 3-hour drive (100 km) to Shillong. Shillong's own Umroi Airport has limited flights, mostly from Kolkata, and there's no railway in Meghalaya itself.",
  },
  {
    q: "Is a permit required to visit Meghalaya?",
    a: "No — an Inner Line Permit is not required for Indian citizens visiting Meghalaya, unlike some other Northeast states. Foreign nationals should carry their passport and visa at all times; no special permit is needed either, but registration may be requested at some checkpoints.",
  },
  {
    q: "What is the budget for a trip to Meghalaya?",
    a: "A six-day trip works out to roughly ₹18,000 for a budget traveller, ₹32,000 for a mid-range trip, and ₹65,000 for a luxury trip, covering accommodation, food, a private taxi (the most practical way to get around), the Dawki boat ride, and an optional root bridge guide.",
  },
  {
    q: "What are the living root bridges in Meghalaya?",
    a: "The Khasi people have been training the aerial roots of rubber fig trees across rivers for over 500 years, guiding them along bamboo scaffolding until they fuse into living, load-bearing bridges. The most famous is the Double-Decker Root Bridge near Nongriat village, reached by descending roughly 3,500 steep steps from Tyrna — genuinely strenuous, so budget 5–6 hours round trip. A far easier single-root bridge is at Riwai, near Mawlynnong, reachable in under 15 minutes on a flat path.",
  },
  {
    q: "Is Nohkalikai Falls worth visiting?",
    a: "Yes — Nohkalikai Falls is India's tallest plunge waterfall at 340 metres, dropping from a sheer cliff into a striking turquoise pool, best viewed from the designated viewpoint. It's especially spectacular post-monsoon (September–November) when flow is at its peak, and it's one of several dramatic waterfalls clustered around Cherrapunji.",
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
  { id: "introduction", title: "Why Meghalaya?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Meghalaya", level: 2 },
  { id: "top-places", title: "Top Places to Visit", level: 2 },
  { id: "living-root-bridges", title: "→ Living Root Bridges", level: 3 },
  { id: "cherrapunji", title: "→ Cherrapunji & Waterfalls", level: 3 },
  { id: "dawki", title: "→ Dawki & the Umngot River", level: 3 },
  {
    id: "mawlynnong",
    title: "→ Mawlynnong, Asia's Cleanest Village",
    level: 3,
  },
  { id: "shillong", title: "→ Shillong", level: 3 },
  { id: "itinerary", title: "6-Day Itinerary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MeghalayaPage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Double-decker living root bridge over a river in Meghalaya's rainforest"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
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
                { label: "Meghalaya", href: "/blog?category=meghalaya" },
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
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Meghalaya",
                "Northeast India",
                "Off-beat",
                "Trekking",
                "Nature",
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
              Meghalaya Travel Guide: Living Root Bridges, Cherrapunji & More
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              India's wettest state is also one of its most quietly spectacular
              — bio-engineered root bridges centuries in the making, a river so
              clear boats appear to float on air, and waterfalls that thunder
              straight out of the clouds.
            </p>

            {/* Meta */}
            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <span className="flex items-center gap-1.5 text-sm text-white/55">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                20 min read
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/55">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Meghalaya, India
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/55">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                4,300 words
              </span>
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
                  <h2>Why Meghalaya?</h2>
                  <p>
                    <strong>Meghalaya</strong> — literally "the abode of clouds"
                    — is unlike anywhere else in India. Tucked into the
                    country's Northeast, it receives more rainfall than almost
                    any other place on Earth, and that relentless monsoon has
                    sculpted a landscape found nowhere else: limestone caves
                    that stretch for kilometres, waterfalls that drop straight
                    off cliff edges into the clouds, and — most remarkably —
                    living bridges grown from the roots of rubber fig trees by
                    the Khasi and Jaintia communities over generations.
                  </p>
                  <p>
                    This is also a place where sustainability isn't a marketing
                    word — it's daily life. Mawlynnong village has been called
                    Asia's cleanest village for over a decade, the Umngot River
                    at Dawki is so transparent that boats appear to float
                    mid-air, and the entire state runs on a matrilineal Khasi
                    culture that feels genuinely distinct from anywhere else in
                    the country.
                  </p>
                  <p>
                    Add pine-covered hills around Shillong (still nicknamed "the
                    Scotland of the East" from colonial times), a thriving
                    live-music and café scene, and some of the best momos and
                    smoked-pork dishes in India — and you have a destination
                    that rewards travellers willing to go a little further off
                    the well-worn trail.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌧️</span> Meghalaya at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Meghalaya, India",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude (Shillong)",
                          value: "1,525 m (5,003 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Shillong (Umroi, 35 km) or Guwahati (125 km)",
                        },
                        {
                          icon: "🗣️",
                          label: "Language",
                          value: "Khasi, English, Hindi",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹4,000",
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
                  <h2>Best Time to Visit Meghalaya</h2>
                  <p>
                    Meghalaya's weather swings between two extremes — bone-dry
                    winters and some of the heaviest rainfall on the planet.
                    Timing your trip correctly matters more here than almost any
                    other Indian destination.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Dry, clear skies, and the Umngot River at Dawki is at its most transparent. Waterfalls are less thunderous than monsoon season but still striking. Cool, pleasant temperatures (8–22°C). Peak tourist season is Nov–Feb.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌦️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Pre-monsoon, good value",
                        text: "Occasional showers begin, but days are mostly clear with dramatic cloud formations. Waterfalls start swelling. Fewer tourists, lower prices on stays.",
                      },
                      {
                        season: "Jul – Sep (Monsoon)",
                        emoji: "🌧️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Waterfalls at their peak — for the committed",
                        text: "Cherrapunji and Mawsynram receive some of the highest rainfall on Earth during this window. Waterfalls are at their most dramatic, but many outdoor activities (caving, root bridge treks, Dawki boating) are disrupted or unsafe. Roads can wash out.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "❄️",
                        color: "bg-blue-50 border-blue-200",
                        mood: "Cold, crisp, and quiet",
                        text: "Shillong nights drop to 4–8°C. Crystal-clear skies make this the best window for photography and for the Umngot River's glass-like clarity. Carry warm layers.",
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
                    <strong>Our pick:</strong> Late October to early December.
                    The monsoon has just cleared, waterfalls are still full, the
                    Umngot River is transparent, and the air is crisp without
                    being bitterly cold. Book Dawki river-boating and root
                    bridge guides a few days ahead during this window.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Meghalaya</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Guwahati's Lokpriya Gopinath
                      Bordoloi International Airport (GAU) in neighbouring Assam
                      is the main gateway, well connected to Delhi, Mumbai,
                      Kolkata, and Bengaluru. From Guwahati, it's a 3-hour drive
                      (100 km) to Shillong. Shillong's own Umroi Airport has
                      limited flights (mostly from Kolkata).
                    </li>
                    <li>
                      <strong>By Road from Guwahati:</strong> Shared Sumos,
                      taxis, and Meghalaya Transport Corporation buses run
                      regularly from Guwahati's Paltan Bazaar to Shillong
                      (₹300–₹500 shared, ₹2,500–₹3,500 private taxi, 2.5–3 hours
                      on NH6).
                    </li>
                    <li>
                      <strong>By Train:</strong> There's no railway in Meghalaya
                      itself — Guwahati Railway Station is the nearest railhead,
                      connected to Delhi, Kolkata, and most major cities.
                    </li>
                    <li>
                      <strong>Getting around within Meghalaya:</strong> Public
                      transport between towns (Shillong–Cherrapunji–Dawki) is
                      sparse. Most travellers hire a private taxi for 3–6 days
                      (₹2,500–₹3,500/day) or join a shared Sumo circuit —
                      renting a car and self-driving is also increasingly
                      popular on the well-paved main routes.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> A permit (Inner Line Permit) is{" "}
                    <em>not</em> required for Indian citizens visiting
                    Meghalaya, unlike some other Northeast states. Foreign
                    nationals should carry their passport and visa at all times
                    — no special permit is needed for Meghalaya either, but
                    registration may be requested at some checkpoints.
                  </div>
                </section>

                {/* ── Top Places ────────────────────────────────────────── */}
                <section id="top-places">
                  <h2>Top Places to Visit in Meghalaya</h2>
                  <p>
                    Meghalaya rewards travellers who venture beyond Shillong
                    into the surrounding villages — this is where the state's
                    truly unique sights live.
                  </p>

                  <section id="living-root-bridges">
                    <h3>Living Root Bridges</h3>
                    <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/meghalaya/hero.jpg"
                        alt="Double-decker living root bridge near Nongriat village, Meghalaya"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      The Khasi people have been training the aerial roots of
                      rubber fig trees (Ficus elastica) across rivers for over
                      500 years, guiding them along bamboo scaffolding until
                      they fuse into living, load-bearing bridges. The most
                      famous is the <strong>Double-Decker Root Bridge</strong>{" "}
                      near Nongriat village — two bridges stacked one above the
                      other, strong enough to hold dozens of people, and still
                      growing.
                    </p>
                    <p>
                      Reaching Nongriat requires descending roughly 3,500 steep
                      steps from Tyrna village — a knee-testing 2-hour descent
                      (and a much harder return climb). The reward is a
                      swimmable turquoise pool right beside the bridge. Less
                      strenuous single-root bridges can be found at{" "}
                      <strong>Riwai</strong>, near Mawlynnong, reachable in
                      under 15 minutes on a flat path — a good option if the
                      Nongriat trek feels too ambitious.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Fitness note:</strong> The Nongriat trek is
                      genuinely demanding — budget 5–6 hours round trip and
                      carry at least 2 litres of water. Start by 8 AM to avoid
                      finishing the climb back up in the dark.
                    </div>
                  </section>

                  <section id="cherrapunji">
                    <h3>Cherrapunji & Its Waterfalls</h3>
                    <p>
                      <strong>Cherrapunji (Sohra)</strong> once held the world
                      record for the highest annual rainfall on Earth (a title
                      now held by nearby Mawsynram). The result of all that
                      water is a cluster of some of India's most dramatic
                      waterfalls.
                    </p>
                    <ul>
                      <li>
                        <strong>Nohkalikai Falls:</strong> India's tallest
                        plunge waterfall at 340 metres, dropping from a sheer
                        cliff into a striking turquoise pool. Best viewed from
                        the designated viewpoint, especially post-monsoon
                        (Sep–Nov) when flow is at its peak.
                      </li>
                      <li>
                        <strong>Seven Sisters Falls (Nohsngithiang):</strong>{" "}
                        Seven parallel streams cascading down a limestone cliff
                        face — most spectacular during and just after monsoon.
                      </li>
                      <li>
                        <strong>Mawsmai Cave:</strong> A well-lit, walkable
                        limestone cave system with dramatic stalactites and
                        stalagmites — a good option for travellers not up for
                        the root bridge trek.
                      </li>
                      <li>
                        <strong>Eco Park:</strong> Panoramic viewpoint
                        overlooking the Bangladesh plains below — on a clear day
                        you can see for dozens of kilometres.
                      </li>
                    </ul>
                  </section>

                  <section id="dawki">
                    <h3>Dawki & the Umngot River</h3>
                    <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/meghalaya/dawki-river.jpg"
                        alt="Boat floating on the crystal-clear Umngot River at Dawki, Meghalaya"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      The <strong>Umngot River</strong> at Dawki, near the
                      Bangladesh border, is famous for water so transparent that
                      boats appear to hover in mid-air — one of the most
                      photographed sights in Northeast India. A 30-minute boat
                      ride (₹500–₹600 per boat, seats 4–5) glides over riverbed
                      pebbles clearly visible metres below the surface.
                    </p>
                    <p>
                      Clarity peaks in the dry winter months (Nov–Feb) — during
                      and right after monsoon, silt run-off clouds the water
                      considerably. Nearby <strong>Shnongpdeng</strong> village
                      has riverside camping with the same glass-clear water,
                      plus cliff jumping and kayaking.
                    </p>
                  </section>

                  <section id="mawlynnong">
                    <h3>Mawlynnong, Asia's Cleanest Village</h3>
                    <p>
                      <strong>Mawlynnong</strong> has been repeatedly named
                      Asia's cleanest village — a title the community maintains
                      through strict, self-enforced waste management (bamboo
                      dustbins on every corner, a total ban on plastic bags, and
                      daily community clean-ups). Beyond the tidy lanes and
                      flower-lined homes, don't miss the{" "}
                      <strong>Sky View Tower</strong>, a bamboo machaan-style
                      platform offering views into Bangladesh, and the nearby
                      single-decker root bridge at Riwai.
                    </p>
                  </section>

                  <section id="shillong">
                    <h3>Shillong</h3>
                    <p>
                      Meghalaya's capital, still nicknamed "the Scotland of the
                      East" from British colonial times, is worth a day or two
                      on either end of a Meghalaya trip. Highlights include{" "}
                      <strong>Ward's Lake</strong> (a colonial-era garden and
                      boating lake in the city centre),{" "}
                      <strong>Elephant Falls</strong> on the outskirts, the
                      panoramic <strong>Shillong Peak</strong>, and a genuinely
                      excellent live-music scene — Shillong has produced more
                      rock and gospel bands per capita than almost any other
                      Indian city, and several venues host regular live gigs.
                    </p>
                    <p>
                      Police Bazaar is the commercial hub for shopping and
                      street food, while the surrounding cafes serve some of the
                      best coffee and bakery items in the Northeast.
                    </p>
                  </section>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>6-Day Meghalaya Itinerary</h2>
                  <p>
                    This itinerary balances the physically demanding root bridge
                    trek with lower-key sightseeing, and is structured around a
                    Guwahati arrival/departure.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Guwahati to Shillong",
                        color: "bg-forest-600",
                        activities: [
                          "Fly/arrive into Guwahati, drive to Shillong (3 hrs)",
                          "Afternoon at Ward's Lake and Police Bazaar",
                          "Evening: live music at a Shillong venue",
                          "Dinner — try Khasi smoked pork",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Shillong to Cherrapunji",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Elephant Falls, then drive to Cherrapunji (1.5 hrs)",
                          "Nohkalikai Falls viewpoint",
                          "Seven Sisters Falls (Nohsngithiang)",
                          "Mawsmai Cave walk-through",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Double-Decker Root Bridge Trek",
                        color: "bg-amber-600",
                        activities: [
                          "8 AM: Begin descent from Tyrna to Nongriat (3,500 steps)",
                          "Reach the Double-Decker Root Bridge, swim in the pool",
                          "Packed lunch at Nongriat village",
                          "Climb back up — budget 5–6 hrs round trip total",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Mawlynnong & Riwai",
                        color: "bg-forest-500",
                        activities: [
                          "Drive to Mawlynnong (2 hrs from Cherrapunji)",
                          "Explore Asia's cleanest village",
                          "Sky View Tower for Bangladesh border views",
                          "Riwai single-decker root bridge (short, easy walk)",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Dawki & the Umngot River",
                        color: "bg-blue-600",
                        activities: [
                          "Drive to Dawki (1 hr from Mawlynnong)",
                          "Boat ride on the crystal-clear Umngot River",
                          "Lunch and cliff jumping at Shnongpdeng",
                          "Evening drive back toward Shillong",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Shillong & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Shillong Peak viewpoint",
                          "Last-minute shopping at Police Bazaar",
                          "Coffee at a Shillong café",
                          "Drive to Guwahati for onward flight/train",
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

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Meghalaya</h2>
                  <p>
                    Base yourself in <strong>Shillong</strong> for the first and
                    last nights, and stay overnight in{" "}
                    <strong>Cherrapunji</strong> or <strong>Sohra</strong> to
                    avoid long daily drives back and forth. A night of riverside
                    camping at <strong>Shnongpdeng</strong> (near Dawki) is a
                    highlight in itself.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,800/night",
                        picks: [
                          "Trekker's Hut, Tyrna (for root bridge trek)",
                          "Shnongpdeng riverside camps",
                          "Zostel Shillong",
                          "Cherrapunji Holiday Resort (dorms)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹5,000/night",
                        picks: [
                          "Cherrapunjee Holiday Resort (cottages)",
                          "Ri Kynjai Resort (Shillong)",
                          "Polo Orchid Resort (Shillong)",
                          "Serene Homestay, Mawlynnong",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Ri Kynjai – Serenity by the Lake",
                          "Ri Kynjai Luxury Cottages",
                          "The Heritage Club, Shillong",
                          "Vivanta Shillong",
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

                {/* ── Food ────────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Meghalaya</h2>
                  <p>
                    Khasi and Jaintia cuisine centres on rice, pork, and
                    freshwater fish, with minimal spice compared to the rest of
                    India — flavours here lean smoky, fermented, and subtly
                    sour.
                  </p>
                  <ul>
                    <li>
                      <strong>Jadoh:</strong> The Khasi staple — rice cooked in
                      pork blood and fat with meat, similar in spirit to a
                      pilaf. Widely available at local eateries in Shillong and
                      Cherrapunji.
                    </li>
                    <li>
                      <strong>Tungrymbai:</strong> A pungent fermented soybean
                      dish cooked with pork fat — an acquired taste, but a
                      genuine window into Khasi home cooking.
                    </li>
                    <li>
                      <strong>Smoked pork with bamboo shoot:</strong> A
                      signature Khasi dish — pork smoked over an open fire,
                      cooked with fermented bamboo shoot for a distinctive sour
                      note.
                    </li>
                    <li>
                      <strong>Pumaloi:</strong> Steamed rice cake, often served
                      as a breakfast staple alongside meat curries.
                    </li>
                    <li>
                      <strong>Shillong café culture:</strong> Don't miss Café
                      Shillong or Trattoria for genuinely good espresso and
                      baked goods — a legacy of the city's cosmopolitan,
                      music-loving culture.
                    </li>
                  </ul>
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
                        <tr className="bg-forest-50">
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
                          ["Accommodation/night", "₹700", "₹3,000", "₹9,000"],
                          ["Food/day", "₹400", "₹900", "₹2,200"],
                          ["Private taxi/day", "₹2,500", "₹3,000", "₹3,500"],
                          ["Dawki boat ride", "₹550", "₹550", "₹550"],
                          [
                            "Root bridge guide (optional)",
                            "₹800",
                            "₹800",
                            "₹800",
                          ],
                          ["6-Day Trip Total", "₹18,000", "₹32,000", "₹65,000"],
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
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Meghalaya</h2>
                  <ul>
                    <li>
                      <strong>Book taxis in advance:</strong> Public transport
                      between towns is sparse and unreliable. Arrange a private
                      taxi for your full circuit before arriving — last-minute
                      options in peak season (Nov–Dec) can be scarce.
                    </li>
                    <li>
                      <strong>Pack rain gear year-round:</strong> Even in the
                      "dry" season, sudden showers are common given Meghalaya's
                      climate. A packable rain shell is worth carrying every
                      single day.
                    </li>
                    <li>
                      <strong>Train for the root bridge trek:</strong> The
                      Nongriat descent/climb (3,500+ steps) is genuinely
                      strenuous. Good footwear with grip is essential — the
                      steps are often wet and mossy.
                    </li>
                    <li>
                      <strong>Cash is king:</strong> ATMs are scarce outside
                      Shillong. Withdraw enough cash before heading to
                      Cherrapunji, Mawlynnong, or Dawki.
                    </li>
                    <li>
                      <strong>Respect Khasi customs:</strong> Meghalaya has a
                      unique matrilineal culture — ask before photographing
                      people, and be mindful in smaller villages that receive
                      fewer tourists than Mawlynnong or Cherrapunji.
                    </li>
                    <li>
                      <strong>Connectivity is patchy:</strong> Mobile network
                      (BSNL works best in remote areas) drops out completely on
                      the Nongriat trek and in parts of Dawki. Download offline
                      maps before you set out.
                    </li>
                  </ul>

                  {/* Dos & Don'ts */}
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
                          "Book the Dawki boat ride early morning for the calmest water",
                          "Carry a rain jacket even in the dry season",
                          "Try Khasi smoked pork at a local eatery",
                          "Stay a night in Shnongpdeng for riverside camping",
                          "Start the Nongriat trek by 8 AM",
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
                          "Attempt the root bridge trek without good footwear",
                          "Rely on finding a taxi last-minute in peak season",
                          "Skip cash withdrawal before leaving Shillong",
                          "Litter — Meghalaya's communities take cleanliness seriously",
                          "Visit Dawki right after heavy rain expecting clear water",
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
                  "Meghalaya",
                  "Northeast India",
                  "Off-beat",
                  "Trekking",
                  "Nature",
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

              <TrekGearRecommendations
                sections={[
                  {
                    ...FOREST_GEAR[0],
                    subtitle:
                      "Gear for the root bridge trek, riverside camping, and Meghalaya's unpredictable rain",
                  },
                ]}
                destination="Meghalaya"
              />

              {/* Related Posts Grid */}
              <RelatedPostsGrid currentSlug="meghalaya-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="meghalaya-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
