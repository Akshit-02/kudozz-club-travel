// src/app/blog/ziro-valley-arunachal/page.tsx
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
  title: "Ziro Valley Travel Guide: Apatani Villages, Rice Fields & Festival",
  description:
    "The complete Ziro Valley travel guide. Apatani tribal villages, terraced rice-fish fields, the Ziro Music Festival, permits (ILP), where to stay, what to eat, and a full 4-day itinerary through Arunachal Pradesh's most untouched valley.",
  keywords:
    "Ziro Valley travel guide, Apatani tribe, Ziro Music Festival, Arunachal Pradesh Inner Line Permit, Ziro rice fields, Talley Valley, Ziro itinerary, Arunachal off-beat travel",
  openGraph: {
    title: "Ziro Valley Travel Guide: Apatani Villages, Rice Fields & Festival",
    description:
      "A UNESCO tentative heritage site in Arunachal — home to the Apatani tribe, terraced rice fields, and one of India's best music festivals.",
    url: "https://club.kudozz.in/blog/ziro-valley-arunachal",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green terraced valley with traditional bamboo houses near Ziro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziro Valley Travel Guide: Apatani Villages, Rice Fields & Festival",
    description:
      "Apatani villages, terraced rice-fish fields, and the Ziro Music Festival — the complete guide to Arunachal's quietest valley.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ziro-valley-arunachal",
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
            "Ziro Valley Travel Guide: Apatani Villages, Rice Fields & Festival",
          description: "The complete Ziro Valley travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
          datePublished: "2026-07-13",
          dateModified: "2026-07-13",
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
            "@id": "https://club.kudozz.in/blog/ziro-valley-arunachal",
          },
          about: {
            "@type": "Place",
            name: "Ziro Valley",
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
                name: "Ziro Valley Travel Guide",
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
  { id: "introduction", title: "Why Ziro Valley?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "permits", title: "Inner Line Permit (ILP)", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ziro Valley", level: 2 },
  { id: "apatani-tribe", title: "The Apatani Tribe & Villages", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "ziro-festival", title: "Ziro Music Festival", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Ziro-specific gear ───────────────────────────────────────────────────────────
const ZIRO_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for rice-field walks, village visits, and cool valley evenings",
    emoji: "🌾",
    items: [
      {
        name: "Waterproof Trekking Shoes",
        description:
          "The bunds between Ziro's terraced rice-fish fields turn muddy and slick after rain, which falls unpredictably even outside monsoon — proper grip and waterproofing matter more here than in most valleys.",
        price: "₹1,999",
        rating: 4.5,
        reviews: "6.3k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("waterproof+trekking+shoes"),
        tag: "Rice-field essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Slipping off the narrow field bunds into the paddy water is the single most common mishap for visitors walking through the villages.",
      },
      {
        name: "Packable Rain Jacket",
        description:
          "Ziro sees sudden showers through most of the year, even in the drier winter months — a packable rain shell is more useful here than a bulky umbrella.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "5.8k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"),
        tag: "All-season essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Weather in Ziro changes fast — travellers without rain protection regularly get caught out mid-village-walk.",
      },
      {
        name: "Warm Fleece Layer",
        description:
          "At ~1,700m elevation, Ziro's evenings drop sharply even in summer, and winter nights can approach freezing — a mid-weight fleece covers most of the year.",
        price: "₹1,499",
        rating: 4.5,
        reviews: "7.1k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("fleece+jacket+travel+warm"),
        tag: "Evening essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Homestays and campsites rarely have heating — a proper layer makes the cold valley evenings comfortable rather than something to endure.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Electricity in outlying Apatani villages can be inconsistent, and network coverage is patchy across the valley — a charged power bank keeps your phone alive for photos and navigation.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Off-grid essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Ziro's remoteness is exactly its appeal, but it also means fewer charging opportunities than most Indian destinations.",
      },
      {
        name: "Insect Repellent",
        description:
          "The paddy fields and surrounding forest attract mosquitoes and biting insects, especially around dusk near the wetter Apatani villages.",
        price: "₹199",
        rating: 4.3,
        reviews: "6.8k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Evening essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Rice-fish fields are mosquito breeding grounds by design — repellent is worth applying before any evening village walk.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "The nearest well-equipped hospital is in Itanagar, several hours away — a compact kit for cuts, blisters, and altitude-related headaches is sensible for such a remote valley.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Remote-travel essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Ziro's isolation is part of its charm, but it also means self-sufficiency matters more than on a typical hill-station trip.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ZiroValleyGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/ziro/hero.jpg"
              alt="Green terraced valley with traditional bamboo houses near Ziro"
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
                { label: "Ziro Valley", href: "/blog?category=ziro-valley" },
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
                "Ziro Valley",
                "Arunachal Pradesh",
                "Apatani Tribe",
                "Off-beat",
                "Heritage",
                "Music Festival",
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
              Ziro Valley Travel Guide: Apatani Villages, Rice Fields & Festival
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Terraced rice-fish fields, centuries-old Apatani villages, and a
              music festival that draws travellers to one of the most untouched
              corners of the Eastern Himalayas — this is Ziro Valley.
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
                  text: "Ziro Valley, Arunachal Pradesh",
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
                  <h2>Why Ziro Valley?</h2>
                  <p>
                    Tucked into the Lower Subansiri district of{" "}
                    <strong>Arunachal Pradesh</strong>, Ziro Valley is what most
                    "untouched Himalayan valley" marketing promises and almost
                    never delivers. A wide, flat valley at roughly 1,700m
                    elevation, ringed by pine-covered hills, holds centuries-old
                    villages of the <strong>Apatani tribe</strong> surrounded by
                    an extraordinary system of terraced rice-cum-fish fields — a
                    UNESCO World Heritage tentative site, and one of the few
                    places in India where you can see a genuinely distinct
                    indigenous agricultural tradition still functioning exactly
                    as it has for generations.
                  </p>
                  <p>
                    Unlike most of Northeast India's better-known valleys, Ziro
                    has resisted mass tourism almost entirely — helped by the
                    Inner Line Permit requirement and sheer distance from major
                    cities. The reward is villages where Apatani women still
                    wear traditional facial tattoos and nose plugs (a fading
                    custom, mostly seen among older generations), fields worked
                    with techniques unchanged for centuries, and a valley quiet
                    enough that the annual <strong>Ziro Music Festival</strong>{" "}
                    feels like an intrusion rather than the norm.
                  </p>
                  <p>
                    Ziro rewards travellers willing to handle the permit
                    paperwork and the long journey in — this is not a weekend
                    trip, and that's exactly why it has stayed the way it has.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌾</span> Ziro Valley at a Glance
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
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~1,688 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Oct" },
                        {
                          icon: "📄",
                          label: "Permit",
                          value: "Inner Line Permit (ILP)",
                        },
                        {
                          icon: "🎶",
                          label: "Festival",
                          value: "Ziro Music Festival (Sep)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,000 – ₹4,000",
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
                  <h2>Best Time to Visit Ziro Valley</h2>
                  <p>
                    Ziro's valley floor climate is mild year-round compared to
                    the surrounding hills, but road access and the rice-field
                    scenery both vary a lot by season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – May",
                        emoji: "🌱",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best for rice planting scenery",
                        text: "Fields are freshly planted and vividly green, temperatures are mild (10–25°C), and the valley is at its most photogenic before the summer rains intensify.",
                      },
                      {
                        season: "Jun – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but wet",
                        text: "Heavy rain is common and roads into the valley can see landslides — the fields are at their fullest and greenest, but travel requires flexibility.",
                      },
                      {
                        season: "Sep",
                        emoji: "🎶",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Ziro Music Festival — our pick",
                        text: "Rain tapers off, rice fields turn golden ahead of harvest, and the valley hosts India's best-known outdoor music festival — book accommodation months ahead for this window.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold and quiet",
                        text: "Temperatures drop close to freezing at night, fields lie fallow and brown, and most homestays operate at minimal capacity — good only for travellers seeking total solitude.",
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
                    <strong>Our pick:</strong> Late September, around the Ziro
                    Music Festival — golden harvest-season fields, drier
                    weather, and the one time of year the valley has any real
                    buzz to it. For pure scenery without crowds, April is the
                    quieter alternative.
                  </blockquote>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Inner Line Permit (ILP)</h2>
                  <p>
                    All Indian citizens (and a separate Protected Area Permit
                    for foreign nationals) need an{" "}
                    <strong>Inner Line Permit</strong> to enter Arunachal
                    Pradesh, including Ziro — this is the single biggest piece
                    of pre-trip planning the valley requires.
                  </p>
                  <ul>
                    <li>
                      <strong>How to apply:</strong> Indian citizens can apply
                      online through the Arunachal Pradesh e-ILP portal, or in
                      person at ILP counters in Guwahati, Itanagar, or major
                      entry checkpoints.
                    </li>
                    <li>
                      <strong>Processing time:</strong> Online applications are
                      usually approved within 1–3 working days; apply at least a
                      week before travel to avoid last-minute delays.
                    </li>
                    <li>
                      <strong>Cost:</strong> A nominal fee (roughly ₹100–₹200
                      for a short-duration permit), valid typically for up to 30
                      days.
                    </li>
                    <li>
                      <strong>Carry copies:</strong> Print physical copies of
                      the permit — checkpoints on the road into the valley
                      routinely verify it, and connectivity to show a digital
                      copy isn't guaranteed.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Apply for the ILP online well
                    before booking non-refundable travel — approval is normally
                    quick, but it's the one part of the trip outside your direct
                    control.
                  </div>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ziro Valley</h2>
                  <p>
                    Ziro's remoteness is the trade-off for its untouched
                    character — expect a long final approach whichever route you
                    take.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest airport is Lilabari
                      (Assam, ~115 km, ~4 hrs by road). Guwahati (Assam, ~475
                      km) has far more flight options but adds a full day of
                      driving.
                    </li>
                    <li>
                      <strong>By Train:</strong> North Lakhimpur (Assam, ~110
                      km, ~4 hrs) is the nearest major railhead, well connected
                      to Guwahati.
                    </li>
                    <li>
                      <strong>By Road:</strong> Shared taxis and sumos run from
                      North Lakhimpur and Itanagar (~150 km, ~5–6 hrs) to Ziro —
                      roads are winding hill roads that can slow down
                      considerably during monsoon.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Build in a buffer day either
                    side of the journey — hill roads to Ziro can be affected by
                    landslides in the wetter months, and missed connections here
                    are harder to recover from than in more connected parts of
                    India.
                  </div>
                </section>

                {/* ── Apatani Tribe & Villages ───────────────────────────── */}
                <section id="apatani-tribe">
                  <h2>The Apatani Tribe & Villages</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Traditional village houses beside terraced fields in the valley"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The <strong>Apatani</strong> are Ziro's indigenous people,
                    known internationally for their sustainable rice-cum-fish
                    farming system — rice paddies doubling as fish ponds, a
                    technique that maximises a single plot of land without
                    chemical fertiliser, developed independently over centuries
                    in this valley.
                  </p>
                  <ul>
                    <li>
                      <strong>Hong Village:</strong> Reputedly one of the
                      largest villages in Asia built entirely of traditional
                      materials — a dense cluster of wooden and bamboo houses
                      worth an unhurried walk through.
                    </li>
                    <li>
                      <strong>Hija & Bulla Villages:</strong> Smaller, quieter
                      Apatani settlements with well-preserved traditional
                      architecture and fewer visitors than Hong.
                    </li>
                    <li>
                      <strong>
                        Facial tattoos and nose plugs (Yaping Hullo):
                      </strong>{" "}
                      A traditional practice among older Apatani women, largely
                      discontinued since the 1970s — a living piece of cultural
                      history rather than something to photograph without asking
                      first.
                    </li>
                    <li>
                      <strong>Village etiquette:</strong> Always ask before
                      photographing people, especially elders — the Apatani are
                      welcoming to visitors but tourism here is recent enough
                      that courtesy goes a long way.
                    </li>
                  </ul>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Ziro Valley</h2>
                  <ul>
                    <li>
                      <strong>Walk the rice-fish fields:</strong> The core Ziro
                      experience — walking the narrow bunds between terraced
                      paddies that double as fish ponds, best done slowly and at
                      sunrise or late afternoon light.
                    </li>
                    <li>
                      <strong>Talley Valley Wildlife Sanctuary:</strong> A
                      pristine forest reserve roughly 32 km from Ziro town, home
                      to rhododendron forests and rare bird species — best for a
                      day trip with a local guide.
                    </li>
                    <li>
                      <strong>Kile Pakho viewpoint:</strong> A hilltop viewpoint
                      above Ziro town offering a panoramic look over the entire
                      valley and its patchwork of fields — especially good near
                      sunset.
                    </li>
                    <li>
                      <strong>Meghna Cave Temple:</strong> A natural limestone
                      cave temple a short drive from town, an easy half-day
                      addition to a village-focused itinerary.
                    </li>
                    <li>
                      <strong>Local markets:</strong> Ziro's small daily markets
                      sell Apatani textiles, bamboo crafts, and foraged local
                      produce — a good stop for genuine, non-touristy souvenirs.
                    </li>
                  </ul>
                </section>

                {/* ── Ziro Music Festival ────────────────────────────────── */}
                <section id="ziro-festival">
                  <h2>Ziro Music Festival</h2>
                  <p>
                    Held every September since 2012, the{" "}
                    <strong>Ziro Music Festival</strong> is one of India's
                    best-regarded independent outdoor music festivals — an
                    unusual sight in a valley this remote, and the one time of
                    year Ziro sees a real influx of visitors.
                  </p>
                  <ul>
                    <li>
                      <strong>Setting:</strong> Held on open paddy fields on the
                      edge of Ziro town, with the surrounding hills as a
                      backdrop — a genuinely striking festival location.
                    </li>
                    <li>
                      <strong>Lineup:</strong> A mix of Indian independent and
                      folk acts alongside international artists, skewed toward
                      indie, folk, and alternative genres rather than mainstream
                      commercial acts.
                    </li>
                    <li>
                      <strong>Accommodation:</strong> Homestays and camping
                      sites fill up months in advance for festival dates — book
                      as early as possible if this is the reason for your trip.
                    </li>
                    <li>
                      <strong>Tickets:</strong> Sold online ahead of the event;
                      capacity is deliberately kept modest to preserve the
                      valley's character.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Ziro Valley</h2>
                  <p>
                    Accommodation in Ziro is genuinely limited compared to more
                    mainstream hill destinations — homestays are both the most
                    available and the most rewarding option.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Apatani village homestays",
                          "Basic guesthouses, Ziro town",
                          "Camping near Talley Valley (seasonal)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹3,500/night",
                        picks: [
                          "Siiro Resort",
                          "The Blue Pine Homestay",
                          "Ziro Valley Resort",
                        ],
                      },
                      {
                        tier: "Festival Season",
                        icon: "🎶",
                        range: "₹2,000–₹6,000/night",
                        picks: [
                          "Festival-partner homestays (Sep)",
                          "Pre-booked camping packages",
                          "Premium village stays (book months ahead)",
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
                    A homestay in or near Hong Village is the single best way to
                    experience Ziro — meals with an Apatani family and direct
                    access to the fields tell you more about the valley than any
                    resort stay will.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Ziro Valley</h2>
                  <p>
                    Apatani cuisine is simple, rice- and fish-forward, and
                    almost entirely locally sourced — a direct reflection of the
                    valley's rice-fish farming system.
                  </p>
                  <ul>
                    <li>
                      <strong>Fish from the rice fields:</strong> Small
                      freshwater fish raised directly in the paddies, usually
                      cooked simply with local herbs — about as farm-to-table as
                      food gets in India.
                    </li>
                    <li>
                      <strong>Pika Pila:</strong> A distinctive Apatani chutney
                      made from fermented soybean and bamboo shoot, sharp and
                      pungent, served as a condiment with most meals.
                    </li>
                    <li>
                      <strong>Apong:</strong> A traditional fermented rice or
                      millet beer, brewed at home across Arunachal — worth
                      trying at a homestay rather than seeking it out
                      commercially.
                    </li>
                    <li>
                      <strong>Bamboo shoot dishes:</strong> Fermented and fresh
                      bamboo shoot both feature heavily in Apatani cooking,
                      often paired with pork or fish.
                    </li>
                    <li>
                      <strong>Where to eat:</strong> Most meals in Ziro are
                      home-cooked at your homestay — standalone restaurants are
                      limited to a handful of basic eateries in Ziro town
                      itself.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>4-Day Ziro Valley Itinerary</h2>
                  <p>
                    Given the long journey in, four days is a sensible minimum
                    to justify the trip — enough time for the villages, the
                    fields, and a day trip into Talley Valley.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Ziro Town",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive via North Lakhimpur or Lilabari, check into a homestay",
                          "Afternoon: Settle in, walk around Ziro town",
                          "Evening: Sunset viewpoint at Kile Pakho",
                          "Home-cooked Apatani dinner at the homestay",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Apatani Villages & Rice Fields",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Walk through Hong Village",
                          "Late morning: Explore the rice-fish field bunds on foot",
                          "Afternoon: Visit Hija and Bulla villages",
                          "Evening: Local market visit in Ziro town",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Talley Valley Day Trip",
                        color: "bg-sky-600",
                        activities: [
                          "Full-day trip to Talley Valley Wildlife Sanctuary",
                          "Guided walk through rhododendron forest",
                          "Return to Ziro by evening",
                          "Relaxed dinner, early night",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Meghna Cave & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Visit Meghna Cave Temple",
                          "Late morning: Final walk through the fields, farewell to your host family",
                          "Afternoon: Depart toward North Lakhimpur or Lilabari",
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
                          {[
                            "Expense",
                            "Budget",
                            "Mid-Range",
                            "Festival Season",
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
                          ["Accommodation/night", "₹700", "₹2,500", "₹4,500"],
                          ["Food/day", "₹400", "₹900", "₹1,500"],
                          [
                            "Local transport per day",
                            "₹500",
                            "₹1,200",
                            "₹1,800",
                          ],
                          [
                            "Guide / village visits",
                            "₹500",
                            "₹1,000",
                            "₹1,000",
                          ],
                          ["Daily total", "₹2,100", "₹5,600", "₹8,800"],
                          ["4-Day trip total", "₹8,400", "₹22,400", "₹35,200"],
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
                    * Excludes flight/train to Assam and the long road journey
                    into the valley. Festival-season prices (September) can run
                    noticeably higher due to limited accommodation.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Ziro Valley</h2>
                  <ul>
                    <li>
                      <strong>Apply for your ILP well in advance:</strong>
                      Processing is usually fast, but it's the one dependency
                      outside your control — don't leave it to the last minute.
                    </li>
                    <li>
                      <strong>
                        Build in buffer days for the road journey:
                      </strong>
                      Hill roads into Ziro can be affected by landslides,
                      especially during monsoon — a rigid itinerary risks missed
                      onward connections.
                    </li>
                    <li>
                      <strong>Ask before photographing people:</strong>
                      Especially older Apatani women with traditional facial
                      tattoos — treat it as a cultural practice, not a photo
                      opportunity.
                    </li>
                    <li>
                      <strong>Book festival-season stays months ahead:</strong>
                      Accommodation is genuinely scarce during the September
                      Ziro Music Festival.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs are limited to Ziro
                      town, and card acceptance is essentially nonexistent in
                      the villages.
                    </li>
                    <li>
                      <strong>Pack for cold evenings year-round:</strong> Even
                      in the warmer months, valley temperatures drop sharply
                      after dark — a proper layer is worth the packing space.
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
                          "Apply for the Inner Line Permit at least a week ahead",
                          "Stay at an Apatani homestay for the most authentic experience",
                          "Walk the rice-fish field bunds at sunrise or late afternoon",
                          "Time your trip for the Ziro Music Festival in September if possible",
                          "Ask permission before photographing villagers",
                          "Build in buffer days for the long road journey in",
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
                          "Travel without applying for the ILP beforehand",
                          "Expect Goa- or Manali-level tourist infrastructure",
                          "Photograph villagers, especially elders, without asking",
                          "Book festival-season travel last minute",
                          "Rely on cards outside Ziro town",
                          "Rush the trip into fewer than 3–4 days given the travel time involved",
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
                  "Ziro Valley",
                  "Arunachal Pradesh",
                  "Apatani Tribe",
                  "Off-beat",
                  "Heritage",
                  "Northeast India",
                  "Music Festival",
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
                sections={ZIRO_GEAR}
                destination="Ziro Valley"
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
