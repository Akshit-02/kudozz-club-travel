// src/app/blog/mandrem-travel-guide/page.tsx
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
  title: "Mandrem Beach Travel Guide: Yoga Retreats & River-Meets-Sea Views",
  description:
    "The complete Mandrem travel guide. Mandrem River meeting the sea, yoga and wellness retreats, Ashwem Beach, where to stay, what to eat, best time to visit, and a full itinerary through North Goa's quietest wellness beach.",
  keywords:
    "Mandrem travel guide, Mandrem beach, Mandrem yoga retreat, Ashwem beach Goa, best time to visit Mandrem, how to reach Mandrem, North Goa quiet beaches, Mandrem river",
  openGraph: {
    title: "Mandrem Beach Travel Guide: Yoga Retreats & River-Meets-Sea Views",
    description:
      "A quiet North Goa beach where a small river meets the sea, and yoga retreats have quietly replaced the party scene — the complete guide to Mandrem.",
    url: "https://club.kudozz.in/blog/mandrem-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Calm river-meets-sea waterway representative of Mandrem, Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandrem Beach Travel Guide: Yoga Retreats & River-Meets-Sea Views",
    description:
      "A quiet North Goa beach where a river meets the sea and yoga retreats have replaced the party scene — the complete guide to Mandrem.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/mandrem-travel-guide",
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
            "Mandrem Beach Travel Guide: Yoga Retreats & River-Meets-Sea Views",
          description: "The complete Mandrem travel guide.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
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
            "@id": "https://club.kudozz.in/blog/mandrem-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Mandrem",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Goa",
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
                name: "Mandrem Travel Guide",
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
    q: "How many days do I need in Mandrem?",
    a: "Two days is enough to settle into the pace, walk the beach, and try a yoga session or two. Many wellness-focused travelers stay a week or more since that's how most retreat programs are structured.",
  },
  {
    q: "What is the best time to visit Mandrem?",
    a: "November to February is the sweet spot — dry, warm, and calm seas, with the full range of shacks and retreat centres open. Shoulder months (October and March) are quieter still, with slightly less predictable weather.",
  },
  {
    q: "How do I reach Mandrem?",
    a: "The nearest airport is Dabolim (Goa International, GOI) or Manohar International (GOX), both roughly 40–50km away. Road transport (taxi or rented scooter) is the standard way to reach Mandrem, which sits along the North Goa coast road between Morjim and Arambol.",
  },
  {
    q: "Is Mandrem good for nightlife?",
    a: "No, and that's the point — Mandrem is one of Goa's quietest beaches, with none of the club scene found at Baga or Calangute. If nightlife is your priority, this isn't the right base.",
  },
  {
    q: "Do I need to book a yoga retreat in advance?",
    a: "Yes, especially in peak season (December–January) — established retreat centres in Mandrem run structured multi-day or multi-week programs that fill up ahead of time.",
  },
  {
    q: "What is the budget for a trip to Mandrem?",
    a: "A simple beach-hut stay with local food can run roughly ₹1,800–₹2,500 a day. Mid-range boutique stays run closer to ₹4,500–₹7,000 a day, and a dedicated multi-day yoga retreat program is typically priced separately as a package.",
  },
  {
    q: "Can I walk from Mandrem to Ashwem or Morjim?",
    a: "Yes — Ashwem is directly adjacent to Mandrem and an easy beach walk. Morjim is a bit further south but still reachable on foot along the sand at low tide, or a short scooter ride by road.",
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
  { id: "introduction", title: "Why Mandrem?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Mandrem", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Mandrem-specific gear ───────────────────────────────────────────────────────
const MANDREM_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for a slow, wellness-focused beach stay",
    emoji: "🧘",
    items: [
      {
        name: "Travel Yoga Mat",
        description:
          "A lightweight, foldable mat is genuinely useful if you're joining drop-in sessions at Mandrem's retreat centres rather than relying on rentals.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "3.8k",
        image: "🧘",
        affiliateUrl: amazonSearchUrl("travel+yoga+mat+foldable"),
        tag: "Retreat essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Rental mats at busy retreat centres can run out during peak season — carrying your own removes the uncertainty.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Long beach walks between Mandrem and Ashwem offer very little shade — reef-safe formulas protect both your skin and the shallow coastal waters.",
        price: "₹599",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"),
        tag: "Beach essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Mandrem's flat, exposed sand means sunburn risk builds up fast on longer walks.",
      },
      {
        name: "Wide-Brim Sun Hat",
        description:
          "Useful for the river-mouth walk and any time spent outside during the midday sun, which is intense even outside peak summer.",
        price: "₹399",
        rating: 4.3,
        reviews: "4.1k",
        image: "👒",
        affiliateUrl: amazonSearchUrl("wide+brim+sun+hat+travel"),
        tag: "Comfort essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Shade is scarce along the open river-mouth stretch that makes Mandrem distinctive.",
      },
      {
        name: "Light Cotton Wrap / Sarong",
        description:
          "Practical for beach cover-up, yoga sessions, and the occasional cooler evening breeze.",
        price: "₹449",
        rating: 4.4,
        reviews: "5.0k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("cotton+sarong+beach+wrap"),
        tag: "Versatile essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "One of the most-used, least-packed items on a slow beach trip — doubles as towel, wrap, and yoga cover-up.",
      },
      {
        name: "Insulated Water Bottle",
        description:
          "Refillable water matters here — Mandrem's shack and cafe density is lower than Baga or Calangute, so you can't always count on a nearby stop.",
        price: "₹599",
        rating: 4.5,
        reviews: "6.3k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "All-day essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Fewer shacks per kilometre than the busier North Goa beaches means it pays to carry your own water.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MandremGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Calm river-meets-sea waterway representative of Mandrem, Goa"
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
                { label: "Mandrem", href: null },
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
              {["Mandrem", "Yoga", "Beaches", "North Goa", "Off-beat"].map(
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
              Mandrem Beach Travel Guide: Yoga Retreats & River-Meets-Sea
              Views
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet North Goa beach where a small river meets the sea, and
              yoga retreats have quietly replaced the party scene — the
              complete guide to Mandrem.
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
                  text: "Mandrem, North Goa",
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
                  <h2>Why Mandrem?</h2>
                  <p>
                    <strong>Mandrem</strong> sits along Goa's northernmost
                    stretch of coast, past the louder crowds of Calangute and
                    Anjuna, in a run of beaches that have quietly become
                    Goa's wellness corridor. What sets Mandrem apart even
                    within that quiet stretch is geography: a small river
                    meets the Arabian Sea right at the beach, creating a calm
                    backwater channel alongside the open surf — a genuinely
                    distinctive stretch of sand that draws a slower crowd
                    than almost anywhere else on the North Goa coast.
                  </p>
                  <p>
                    Over the years, Mandrem has built a real reputation as a
                    yoga and wellness retreat hub, with long-running centres
                    offering everything from single drop-in classes to
                    multi-week teacher-training programs. Combined with
                    neighbouring Ashwem's boutique beachfront stays, this is
                    Goa for travelers who want the coast without the club
                    scene.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🧘</span> Mandrem at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Goa, India",
                        },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "River-meets-sea, yoga retreats",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Dabolim (GOI) / Mopa (GOX)",
                        },
                        {
                          icon: "🏖️",
                          label: "Neighbours",
                          value: "Ashwem, Morjim, Arambol",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,800 – ₹7,000",
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
                  <h2>Best Time to Visit Mandrem</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Dry, warm, calm seas, and every retreat centre and shack open. December–January is peak season for the wellness crowd specifically.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot, thinning crowds",
                        text: "Heat builds steadily; some retreat centres wind down operations as the season ends, though the beach itself stays open.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — mostly shut",
                        text: "Heavy rain and rough seas close most shacks and retreat programs. Not a realistic window for a beach-focused trip.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Quiet reopening",
                        text: "Shacks and retreats begin reopening as the rains taper off — a good window for a quieter version of peak season.",
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
                    <strong>Our pick:</strong> Late November through
                    February — full retreat calendars, calm water for the
                    river-mouth walk, and every shack open along the beach.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Mandrem</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Dabolim Airport (GOI) and
                      Manohar International Airport (GOX) both serve Goa,
                      roughly 40–50km from Mandrem depending on which
                      airport and exact route.
                    </li>
                    <li>
                      <strong>By Train:</strong> Thivim is the nearest
                      railway station on the Konkan Railway line, about
                      20–25km away, with a short taxi ride to the beach.
                    </li>
                    <li>
                      <strong>By Road:</strong> Mandrem sits along the North
                      Goa coast road between Morjim and Arambol — a rented
                      scooter or taxi is the standard way to get around once
                      you're in the area.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're combining Mandrem
                    with a longer North Goa trip, a scooter is genuinely the
                    easiest way to hop between Mandrem, Ashwem, Morjim, and
                    Arambol without relying on taxis for every short trip.
                  </div>
                </section>

                {/* ── Top Attractions ──────────────────────────────────── */}
                <section id="top-attractions">
                  <h2>Top Things to Do in Mandrem</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Calm backwater channel meeting the sea near Mandrem"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <ul>
                    <li>
                      <strong>The river-mouth walk:</strong> Where the
                      Mandrem River meets the sea — a genuinely distinctive
                      stretch of sand and shallow water, good for an early
                      morning or sunset walk.
                    </li>
                    <li>
                      <strong>Yoga and wellness retreats:</strong> Several
                      long-running centres offer drop-in classes and
                      multi-day programs, ranging from casual sessions to
                      structured teacher training.
                    </li>
                    <li>
                      <strong>Ashwem Beach:</strong> Directly adjacent to
                      Mandrem, similarly quiet, and increasingly known for
                      boutique beachfront stays and design-forward cafes.
                    </li>
                    <li>
                      <strong>Beach shacks:</strong> Fewer and more relaxed
                      than the busier North Goa beaches, with a menu leaning
                      toward fresh seafood and continental cafe fare.
                    </li>
                    <li>
                      <strong>Sunset watching:</strong> Mandrem's open,
                      uncrowded sand makes for one of North Goa's more
                      peaceful sunset spots.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Mandrem</h2>
                  <p>
                    Mandrem's accommodation leans toward boutique and
                    wellness-focused stays rather than large resorts —
                    consistent with its quieter character.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Simple beach huts",
                          "Guesthouses set back from the sand",
                          "Basic yoga-centre dorm-style stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Boutique beachfront cottages",
                          "Wellness-retreat rooms (program included)",
                          "Design-forward guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹8,000–₹18,000+/night",
                        picks: [
                          "Premium beachfront villas",
                          "High-end retreat-centre suites",
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
                  <h2>What to Eat in Mandrem</h2>
                  <ul>
                    <li>
                      <strong>Fresh seafood shack menus:</strong> Kingfish,
                      prawns, and calamari, grilled or curried, at the
                      beach's small cluster of shacks.
                    </li>
                    <li>
                      <strong>Health-focused cafe food:</strong> Given the
                      wellness-retreat crowd, Mandrem has more
                      smoothie-bowl-and-salad menus than most Goan beaches.
                    </li>
                    <li>
                      <strong>Goan fish curry rice:</strong> The regional
                      staple, still the most reliable order at local-run
                      eateries.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Mandrem Itinerary</h2>
                  <p>
                    Two days is a comfortable minimum for a taste of
                    Mandrem's pace — many travelers stay considerably
                    longer once they settle in.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & River Mouth",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Afternoon: walk the river-mouth stretch",
                          "Evening: sunset on the beach, dinner at a shack",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Yoga & Ashwem",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: yoga session at a local retreat centre",
                          "Afternoon: walk to Ashwem Beach",
                          "Evening: cafe-hopping, departure prep",
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
                          ["Accommodation/night", "₹1,200", "₹4,000", "₹12,000"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Local transport per day", "₹200", "₹500", "₹1,200"],
                          ["Yoga class / session (optional)", "₹500", "₹1,200", "₹2,500"],
                          ["Daily total", "₹2,400", "₹6,900", "₹18,200"],
                          ["2-Day trip total", "₹4,800", "₹13,800", "₹36,400"],
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
                    * Excludes flights/trains to Goa. Multi-day yoga retreat
                    packages are typically priced separately and can run
                    significantly higher.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Mandrem</h2>
                  <ul>
                    <li>
                      <strong>Book retreat programs early:</strong>{" "}
                      Established centres fill up ahead of peak season,
                      especially December–January.
                    </li>
                    <li>
                      <strong>Rent a scooter:</strong> The easiest way to
                      reach Ashwem, Morjim, and Arambol without relying on
                      taxis for every short trip.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Smaller shacks and local
                      stalls often don't take cards.
                    </li>
                    <li>
                      <strong>Set expectations on nightlife:</strong>{" "}
                      Mandrem is deliberately quiet — head to Baga or
                      Calangute if that's what you're after.
                    </li>
                    <li>
                      <strong>Check tide timing:</strong> The river-mouth
                      area changes character between high and low tide —
                      worth timing your walk around it.
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
                          "Book yoga retreat programs ahead of peak season",
                          "Walk the river-mouth stretch at sunset",
                          "Rent a scooter to explore neighbouring beaches",
                          "Try the health-focused cafe menus",
                          "Carry cash for smaller shacks and stalls",
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
                          "Expect Baga/Calangute-style nightlife here",
                          "Show up to a retreat centre without booking",
                          "Rely on cards at every shack or stall",
                          "Skip checking tide timing before the river walk",
                          "Visit expecting many shacks open during monsoon",
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
                  "Mandrem",
                  "Yoga",
                  "Beaches",
                  "North Goa",
                  "Off-beat",
                  "Goa",
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
                sections={MANDREM_GEAR}
                destination="Mandrem"
              />

              <RelatedPostsGrid currentSlug="mandrem-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="mandrem-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
