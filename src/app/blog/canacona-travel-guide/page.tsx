// src/app/blog/canacona-travel-guide/page.tsx
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
  title: "Canacona Travel Guide: South Goa's Quiet Taluka & Beach Cluster",
  description:
    "The complete Canacona travel guide. Palolem, Agonda, Galgibaga and Patnem beaches, Cotigao Wildlife Sanctuary, where to stay, what to eat, best time to visit, and how to plan a South Goa beach-hopping trip.",
  keywords:
    "Canacona travel guide, Canacona Goa, South Goa beaches, Galgibaga beach, Patnem beach, Cotigao Wildlife Sanctuary, Canacona railway station, best time to visit South Goa",
  openGraph: {
    title: "Canacona Travel Guide: South Goa's Quiet Taluka & Beach Cluster",
    description:
      "The South Goa taluka behind Palolem, Agonda, and Galgibaga — beaches, forest, and a slower pace than the North Goa strip — the complete guide to Canacona.",
    url: "https://club.kudozz.in/blog/canacona-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Forested river landscape representative of Canacona, South Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canacona Travel Guide: South Goa's Quiet Taluka & Beach Cluster",
    description:
      "The South Goa taluka behind Palolem, Agonda, and Galgibaga — the complete guide to Canacona.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/canacona-travel-guide",
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
            "Canacona Travel Guide: South Goa's Quiet Taluka & Beach Cluster",
          description: "The complete Canacona travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/canacona-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Canacona",
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
                name: "Canacona Travel Guide",
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
    q: "What exactly is Canacona?",
    a: "Canacona is the South Goa taluka (administrative division) that contains several of Goa's quietest beaches — Palolem, Agonda, Galgibaga, and Patnem all sit within it. Most travelers don't 'visit Canacona' as a single destination so much as pick a beach within it.",
  },
  {
    q: "How many days do I need in Canacona?",
    a: "It depends entirely on which beach you base at. A single beach (Palolem or Agonda) is comfortable for 2-3 days; a fuller South Goa beach-hopping trip covering several of them runs closer to 5-7 days.",
  },
  {
    q: "What is the best time to visit Canacona's beaches?",
    a: "November to February — dry weather, calm seas, and every beach shack and stay open. This entire South Goa stretch shuts down substantially during the June–September monsoon.",
  },
  {
    q: "How do I reach Canacona?",
    a: "Canacona railway station, on the Konkan Railway line, is the key transport hub for this whole region. The nearest airport is Dabolim, roughly 35–45km away depending on which specific beach you're headed to.",
  },
  {
    q: "Which beach in Canacona should I choose?",
    a: "Palolem is the most developed and easiest to reach with amenities; Agonda is quieter with a strict no-loud-music local code; Galgibaga is the most undeveloped, known for turtle nesting; Patnem is a small, low-key cove near Palolem.",
  },
  {
    q: "Is Cotigao Wildlife Sanctuary worth visiting?",
    a: "It's a good half-day nature break from beach time — a forested sanctuary with walking trails and a watchtower — though it isn't a major wildlife-safari destination and shouldn't be the sole reason for a trip.",
  },
  {
    q: "What is the budget for a Canacona beach trip?",
    a: "Budget beach-hut stays run roughly ₹800–₹1,800 a day, mid-range guesthouses ₹2,000–₹5,000 a day. Canacona overall tends to run a little cheaper than the busier North Goa beaches.",
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
  { id: "introduction", title: "Why Canacona?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Canacona", level: 2 },
  { id: "top-attractions", title: "The Beach Cluster & Attractions", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-Day Orientation Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Canacona-specific gear ───────────────────────────────────────────────────────
const CANACONA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for beach-hopping across South Goa's quiet taluka",
    emoji: "🏖️",
    items: [
      {
        name: "Comfortable Walking Sandals",
        description:
          "For moving between beaches (Palolem to Patnem is an easy walk) and the forest trails at Cotigao Wildlife Sanctuary.",
        price: "₹899",
        rating: 4.4,
        reviews: "4.8k",
        image: "👡",
        affiliateUrl: amazonSearchUrl("walking+sandals+travel+outdoor"),
        tag: "Beach-hop essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Canacona's appeal is in moving between several beaches — comfortable footwear makes that genuinely enjoyable rather than a chore.",
      },
      {
        name: "Insect Repellent",
        description:
          "Useful for Cotigao Wildlife Sanctuary and the more forested, undeveloped stretches like Galgibaga.",
        price: "₹199",
        rating: 4.3,
        reviews: "4.2k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("insect+repellent+spray+travel"),
        tag: "Forest essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "The less-developed beaches and forest sanctuary areas have a real mosquito presence, especially at dusk.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Essential for a multi-beach day with long stretches in direct sun and minimal shade.",
        price: "₹599",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"),
        tag: "Beach essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Turtle-nesting beaches like Galgibaga are kept deliberately undeveloped, meaning very little shade infrastructure.",
      },
      {
        name: "Dry Bag / Waterproof Pouch",
        description:
          "Useful for keeping valuables safe during beach transitions and any water activity.",
        price: "₹399",
        rating: 4.3,
        reviews: "3.6k",
        image: "🎒",
        affiliateUrl: amazonSearchUrl("waterproof+dry+bag+small"),
        tag: "Beach-hop essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Moving between multiple beaches in a day means more transit time with valuables exposed to sand and spray.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CanaconaGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Forested river landscape representative of Canacona, South Goa"
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
                { label: "Canacona", href: null },
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
              {["Canacona", "South Goa", "Off-beat", "Beaches"].map((tag) => (
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
              Canacona Travel Guide: South Goa's Quiet Taluka & Beach
              Cluster
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The South Goa taluka behind Palolem, Agonda, and Galgibaga —
              beaches, forest, and a slower pace than the North Goa strip.
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
                  text: "Canacona, South Goa",
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
                  <h2>Why Canacona?</h2>
                  <p>
                    <strong>Canacona</strong> isn't a single beach — it's the
                    South Goa taluka (administrative sub-division) that
                    happens to contain nearly every beach travelers mean
                    when they say they're "going to quiet South Goa."{" "}
                    <strong>Palolem</strong> and <strong>Agonda</strong>{" "}
                    (each with their own dedicated guides) sit within
                    Canacona, alongside less-visited coves like{" "}
                    <strong>Galgibaga</strong> and <strong>Patnem</strong>.
                  </p>
                  <p>
                    What ties the whole taluka together is character:
                    Canacona is Goa's least commercially developed coastal
                    stretch, a real contrast to the club-and-shack density
                    of the North Goa strip. This guide is your orientation
                    to the region as a whole — where to base, how to move
                    between beaches, and what else the taluka has beyond
                    sand.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏖️</span> Canacona at a Glance
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
                          icon: "🏖️",
                          label: "Beaches",
                          value: "Palolem, Agonda, Galgibaga, Patnem",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🚆",
                          label: "Transport Hub",
                          value: "Canacona Railway Station",
                        },
                        {
                          icon: "🌳",
                          label: "Nature Stop",
                          value: "Cotigao Wildlife Sanctuary",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹5,000",
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
                  <h2>Best Time to Visit Canacona</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Dry, calm seas, and every beach shack across the taluka open. December–January is peak season.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot, thinning crowds",
                        text: "Heat builds and some shacks start winding down toward the end of the season, though beaches stay open.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — mostly shut",
                        text: "Nearly all beach shacks across Canacona close for the season, and swimming is unsafe in the rough seas.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Quiet reopening",
                        text: "Shacks reopen gradually as the rains taper off — a good window for a quieter version of peak season.",
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
                    <strong>Our pick:</strong> December to February — every
                    beach in the taluka is fully open, and the seas are
                    calm enough for comfortable swimming at all of them.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Canacona</h2>
                  <ul>
                    <li>
                      <strong>By Train:</strong> Canacona railway station,
                      on the Konkan Railway line, is genuinely the key
                      transport hub for this entire region — well connected
                      to Mumbai, Goa's other towns, and destinations further
                      south along the coast.
                    </li>
                    <li>
                      <strong>By Air:</strong> Dabolim Airport is the
                      nearest, roughly 35–45km away depending on which
                      specific beach you're headed to.
                    </li>
                    <li>
                      <strong>By Road:</strong> From Canacona town/station,
                      short local taxi or rented-scooter rides connect to
                      Palolem, Agonda, Galgibaga, and Patnem.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrive by train into
                    Canacona station, then decide which specific beach to
                    base at once you're there — it's a much shorter and
                    cheaper final leg than trying to book accommodation
                    sight-unseen from further away.
                  </div>
                </section>

                {/* ── Top Attractions ──────────────────────────────────── */}
                <section id="top-attractions">
                  <h2>The Beach Cluster & Attractions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Forest and river scenery representative of Canacona's inland taluka"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <ul>
                    <li>
                      <strong>Palolem:</strong> The most developed and
                      easiest beach in the taluka to reach, with a full
                      range of stays, shacks, and dolphin-spotting boat
                      trips (see the dedicated Palolem guide).
                    </li>
                    <li>
                      <strong>Agonda:</strong> Quieter than Palolem, with a
                      strict local code against loud music and late-night
                      parties, and known for olive ridley turtle nesting
                      (see the dedicated Agonda guide).
                    </li>
                    <li>
                      <strong>Galgibaga:</strong> The most undeveloped beach
                      in the cluster, another turtle-nesting site with
                      minimal infrastructure — best for travelers who want
                      genuine solitude.
                    </li>
                    <li>
                      <strong>Patnem:</strong> A small, low-key cove just
                      south of Palolem, popular with longer-stay travelers
                      wanting something quieter but still walkable to
                      Palolem's amenities.
                    </li>
                    <li>
                      <strong>Cotigao Wildlife Sanctuary:</strong> A
                      forested sanctuary within the taluka, offering nature
                      walks and a watchtower — a good half-day inland break
                      from beach time.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Canacona</h2>
                  <p>
                    Accommodation choice in Canacona really comes down to
                    which beach you pick, since each has its own distinct
                    range of stays.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹600–₹1,500/night",
                        picks: [
                          "Palolem beach huts",
                          "Agonda basic guesthouses",
                          "Patnem dorm-style stays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,500/night",
                        picks: [
                          "Palolem cottage resorts",
                          "Agonda boutique guesthouses",
                          "Patnem beachfront rooms",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Premium Palolem resort stays",
                          "Select high-end Agonda properties",
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
                    Galgibaga has minimal formal accommodation given its
                    deliberately undeveloped, turtle-nesting character —
                    most visitors day-trip there from Palolem or Agonda
                    rather than staying overnight.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Canacona</h2>
                  <ul>
                    <li>
                      <strong>Goan fish curry rice:</strong> The regional
                      staple, widely available at shacks across every
                      beach in the taluka.
                    </li>
                    <li>
                      <strong>Fresh grilled seafood:</strong> Kingfish,
                      pomfret, and prawns, best at beach shacks that
                      restock daily from local fishing boats.
                    </li>
                    <li>
                      <strong>International backpacker menus:</strong>{" "}
                      Palolem and Patnem in particular have a strong mix of
                      continental and Israeli-influenced cafe food,
                      reflecting decades of long-stay travelers.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>1-Day Canacona Orientation Itinerary</h2>
                  <p>
                    Most travelers arrive, get oriented, and then settle
                    into a specific beach for the bulk of their stay. This
                    is how to spend your arrival day.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrive & Choose Your Base",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive at Canacona railway station or Dabolim Airport",
                          "Travel to your chosen beach — Palolem or Agonda are the easiest first bases",
                          "Afternoon: settle in, walk the beach",
                          "Evening: dinner at a beach shack",
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
                    From here, follow the dedicated Palolem or Agonda
                    guides for a full multi-day itinerary at your chosen
                    beach.
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
                          ["Accommodation/night", "₹800", "₹3,000", "₹9,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport per day", "₹150", "₹500", "₹1,200"],
                          ["Daily total", "₹1,350", "₹4,400", "₹12,200"],
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
                    * Excludes flights/trains to Goa. Costs vary by which
                    beach you choose within the taluka — Palolem tends to
                    run slightly higher than Agonda or Patnem.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Canacona</h2>
                  <ul>
                    <li>
                      <strong>Pick your beach before booking:</strong>{" "}
                      Palolem, Agonda, Galgibaga, and Patnem each have a
                      genuinely different character — decide what you want
                      before committing to a stay.
                    </li>
                    <li>
                      <strong>Use Canacona station as your anchor:</strong>{" "}
                      It's the easiest way to arrive and reorient if your
                      first choice of beach doesn't suit you.
                    </li>
                    <li>
                      <strong>Respect turtle-nesting areas:</strong>{" "}
                      Galgibaga and parts of Agonda are active nesting
                      sites — follow any posted local guidance.
                    </li>
                    <li>
                      <strong>Combine with Cotigao Wildlife Sanctuary:</strong>{" "}
                      A good half-day break if you want something beyond
                      beach time.
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
                          "Arrive via Canacona railway station for the easiest access",
                          "Decide which beach suits your pace before booking",
                          "Visit Galgibaga specifically for a quiet, undeveloped stop",
                          "Respect posted turtle-nesting guidance",
                          "Combine with a Cotigao Wildlife Sanctuary half-day trip",
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
                          "Book a Canacona stay without picking a specific beach first",
                          "Expect Galgibaga to have Palolem-level infrastructure",
                          "Ignore local guidance around turtle-nesting zones",
                          "Visit expecting open shacks during peak monsoon",
                          "Treat this as a single compact destination rather than a beach cluster",
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
                {["Canacona", "South Goa", "Off-beat", "Beaches", "Goa", "India"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={CANACONA_GEAR}
                destination="Canacona"
              />

              <RelatedPostsGrid currentSlug="canacona-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="canacona-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
