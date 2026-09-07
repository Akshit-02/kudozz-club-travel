// src/app/blog/varkala-travel-guide/page.tsx
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
  title: "Varkala Travel Guide: Cliff Beach, Yoga & Best Time to Visit",
  description:
    "The complete Varkala travel guide. Varkala Cliff, Papanasham Beach, Janardanaswamy Temple, yoga and Ayurveda stays, Kappil Lake, where to stay, what to eat, and a full 2-day itinerary for Kerala's only cliffside beach town.",
  keywords:
    "Varkala travel guide, Varkala Cliff, Papanasham Beach, Varkala best time to visit, Varkala yoga, Varkala Ayurveda, how to reach Varkala, Varkala itinerary, Kappil Lake, Janardanaswamy Temple, Varkala Kerala, Varkala beach cafes",
  openGraph: {
    title: "Varkala Travel Guide: Cliff Beach, Yoga & Best Time to Visit",
    description:
      "A red laterite cliff running straight along the Arabian Sea, lined with cafes above the sand — one of Kerala's few beaches with a view like this — the complete guide to Varkala.",
    url: "https://club.kudozz.in/blog/varkala-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "Cliffside beach scene representative of Varkala, Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varkala Travel Guide: Cliff Beach, Yoga & Best Time to Visit",
    description:
      "Varkala Cliff, Papanasham Beach, yoga stays, and everything you need to plan a trip to Kerala's cliffside beach town.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: { canonical: "https://club.kudozz.in/blog/varkala-travel-guide" },
};

function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Varkala Travel Guide: Cliff Beach, Yoga & Best Time to Visit",
          description: "The complete Varkala travel guide.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/varkala-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Varkala",
            address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Varkala Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const faqs = [
  {
    q: "How many days do I need in Varkala?",
    a: "Two days is enough to settle into the cliff, walk both Papanasham and Odayam/Kappil beaches, and try a few cafes. Travelers who come for yoga or Ayurveda treatments often stay a week or more, since most programs are structured around multi-day or multi-week courses.",
  },
  {
    q: "What is the best time to visit Varkala?",
    a: "November to March is the best window — dry weather, calm seas, and every cliff cafe and guesthouse open. December and January are peak season with the biggest crowds; October and late February/March offer similar weather with fewer people.",
  },
  {
    q: "Is Varkala good for solo travellers and yoga retreats?",
    a: "Yes — Varkala has one of Kerala's longest-running yoga and wellness scenes, with a steady flow of long-stay international travelers, making it comfortable for solo visitors, including solo women, particularly around the main cliff stretch.",
  },
  {
    q: "How do I reach Varkala?",
    a: "Trivandrum (Thiruvananthapuram) International Airport is the nearest, about 50 km away (roughly 1-1.5 hours by road). Varkala also has its own railway station on the main Kerala coastal line, making it one of the more directly train-accessible beach towns in the state.",
  },
  {
    q: "Is it safe to swim at Varkala beaches?",
    a: "Conditions vary by season and beach. Always check locally posted safety flags and lifeguard advice before swimming — currents near the cliff-side Papanasham Beach can be stronger than they look, especially outside the calm November-March season.",
  },
  {
    q: "What is the budget for a trip to Varkala?",
    a: "A budget traveller can manage on roughly ₹1,300 a day (guesthouses, thalis, local transport), a mid-range trip runs closer to ₹4,200 a day, and boutique clifftop stays can run ₹10,000+ a day. A 2-day trip totals roughly ₹2,600 on a budget and ₹8,400 mid-range, excluding flights or trains to the region.",
  },
  {
    q: "Is Papanasham Beach religious or just a regular beach?",
    a: "Both. Papanasham ('sin-destroying') is considered sacred in Hindu tradition and pilgrims perform rituals near the Janardanaswamy Temple end of the beach, while the wider stretch functions as a normal beach for sunbathing and swimming. It's worth being mindful and respectful near the temple/ritual areas specifically.",
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
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Varkala?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Varkala", level: 2 },
  { id: "top-attractions", title: "Things to Do in Varkala", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const VARKALA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for the cliff walk, the beach, and yoga sessions",
    emoji: "🏖️",
    items: [
      {
        name: "Grip Sandals for the Cliff Path",
        description:
          "The cliff-edge path between cafes gets uneven and occasionally slippery near stairs down to the beach — proper grip sandals are safer than flip-flops.",
        price: "₹799",
        rating: 4.4,
        reviews: "4.3k",
        image: "🩴",
        affiliateUrl: amazonSearchUrl("grip+sandals+outdoor+travel"),
        tag: "Cliff-walk essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Several of the stairways down to Papanasham Beach are steep and can be slick after rain — good grip matters here.",
      },
      {
        name: "Reef-Safe Sunscreen (SPF 50)",
        description:
          "Little shade along the open cliff stretch, especially at midday — reef-safe formulas protect the coastline as well as your skin.",
        price: "₹599",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("reef+safe+sunscreen+SPF+50"),
        tag: "Beach essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Cliff-top cafes have almost no natural shade — sunburn is the most common regret among first-time visitors.",
      },
      {
        name: "Lightweight Yoga Mat",
        description:
          "Useful if you're joining drop-in yoga classes, many of which don't include mats, or practicing independently on your guesthouse balcony.",
        price: "₹899",
        rating: 4.4,
        reviews: "3.1k",
        image: "🧘",
        affiliateUrl: amazonSearchUrl("travel+yoga+mat+lightweight"),
        tag: "Yoga essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Varkala's yoga scene is casual and drop-in friendly, but not every studio provides a mat for single sessions.",
      },
      {
        name: "Waterproof Phone Pouch",
        description:
          "Handy for the beach and for the boat/backwater side-trip many travelers add on from Kappil Lake nearby.",
        price: "₹299",
        rating: 4.3,
        reviews: "9.1k",
        image: "📱",
        affiliateUrl: amazonSearchUrl("waterproof+phone+pouch+beach"),
        tag: "Beach essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Swimming at Papanasham or a Kappil Lake boat trip both carry a real risk of a dropped, soaked phone without one.",
      },
      {
        name: "Modest Cotton Wrap",
        description:
          "The area around Janardanaswamy Temple and Papanasham's ritual zone expects more modest dress than the open beach further along the cliff.",
        price: "₹399",
        rating: 4.4,
        reviews: "4.0k",
        image: "🧣",
        affiliateUrl: amazonSearchUrl("cotton+wrap+travel+modest"),
        tag: "Temple-area essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Papanasham is an active pilgrimage site as well as a beach — a light wrap covers you for both without extra luggage.",
      },
      {
        name: "2L Hydration Bottle",
        description:
          "Between long cliff walks and yoga sessions in the heat, staying hydrated matters more here than it first seems.",
        price: "₹449",
        rating: 4.5,
        reviews: "6.2k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("2l+hydration+water+bottle+travel"),
        tag: "Everyday essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Kerala's coastal humidity makes dehydration easy to miss until it hits — carrying enough water is a simple fix.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function VarkalaGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/goa/beach.jpg"
              alt="Cliffside beach scene representative of Varkala, Kerala"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Varkala", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Varkala", "Beaches", "Cliff Beach", "Yoga", "Kerala"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Varkala Travel Guide: Cliff Beach, Yoga & Best Time to Visit
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A red laterite cliff running straight along the Arabian Sea,
              lined with cafes above the sand — one of the few places in
              Kerala where the beach comes with a view.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "11 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Varkala, Kerala",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
                },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.d} />
                  </svg>
                  {m.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                <section id="introduction">
                  <h2>Why Varkala?</h2>
                  <p>
                    Most of Kerala's coastline is flat — palm-lined sand
                    running straight into the Arabian Sea. <strong>Varkala</strong>{" "}
                    is the exception: a red laterite cliff rises directly
                    above the beach for roughly two kilometres, giving cafes,
                    guesthouses, and yoga studios a sea view most Kerala
                    beach towns simply can't offer. It's also one of the
                    few places on this coast where a genuine pilgrimage site
                    and an international backpacker scene share the same
                    stretch of sand without feeling at odds with each other.
                  </p>
                  <p>
                    Varkala rewards travelers who want beach time with a
                    slower, wellness-oriented pace — long-stay yoga and
                    Ayurveda programs are as much a part of the town's
                    identity as the sunset views from the cliff cafes.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4 className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      <span>🏖️</span> Varkala at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "⛰️", label: "Key Feature", value: "Varkala Cliff" },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Mar" },
                        { icon: "✈️", label: "Nearest Airport", value: "Trivandrum (TRV)" },
                        { icon: "🧘", label: "Known For", value: "Yoga & Ayurveda" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,300 – ₹4,200" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="best-time">
                  <h2>Best Time to Visit Varkala</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Mar",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Dry, sunny, calm seas, and every cliff cafe and guesthouse open. December-January is peak season with the biggest crowds; late Oct and March offer similar weather with fewer people.",
                      },
                      {
                        season: "Apr – May",
                        emoji: "🥵",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Hot, humid, fewer crowds",
                        text: "Temperatures and humidity climb, making midday cliff walks tiring, but rates drop and the town feels far quieter.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — rough seas, quieter",
                        text: "Heavy rain and dangerous currents make swimming unsafe and close some cliff-edge businesses, though the cliff itself stays dramatically green.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌤️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Transitional — reopening",
                        text: "Cafes and guesthouses begin reopening as the monsoon tapers off, with noticeably fewer tourists than the December peak.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>{s.season}</span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block" style={{ fontFamily: "var(--font-dm-sans)" }}>{s.mood}</span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    <strong>Our pick:</strong> Late October through February
                    — reliably dry weather and calm seas, with late October
                    and February offering the best balance of good conditions
                    and thinner crowds.
                  </blockquote>
                </section>

                <section id="how-to-reach">
                  <h2>How to Reach Varkala</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Trivandrum (Thiruvananthapuram)
                      International Airport (TRV) is the nearest, roughly 50
                      km away — about 1-1.5 hours by road.
                    </li>
                    <li>
                      <strong>By Train:</strong> Varkala has its own railway
                      station on the main Kerala coastal line, well connected
                      to Trivandrum, Kollam, Kochi, and beyond.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected via NH66; auto
                      and taxi transfers from Trivandrum are straightforward
                      and commonly used by arriving flyers.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If you're flying into
                    Trivandrum, a prepaid taxi from the airport is the
                    simplest option — the train requires a change or wait
                    that rarely saves real time for a single traveler or
                    couple.
                  </div>
                </section>

                <section id="top-attractions">
                  <h2>Things to Do in Varkala</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Beach and cliff scenery representative of Varkala"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Varkala Cliff:</strong> The main draw — a
                      roughly 2 km red laterite cliff walk lined with cafes,
                      shops, and guesthouses, best experienced slowly with a
                      sunset stop.
                    </li>
                    <li>
                      <strong>Papanasham Beach:</strong> The beach directly
                      below the cliff, considered sacred ("sin-destroying")
                      in Hindu tradition — pilgrims perform rituals near the
                      temple end while the wider stretch functions as a
                      normal swimming beach.
                    </li>
                    <li>
                      <strong>Janardanaswamy Temple:</strong> An ancient
                      temple overlooking the cliff and beach, worth a visit
                      even if only from outside for those not permitted
                      inside the inner sanctum.
                    </li>
                    <li>
                      <strong>Kappil Beach & Lake:</strong> A quieter beach a
                      short ride north, where a backwater lake meets the sea
                      — good for a calmer half-day away from the main cliff
                      crowds.
                    </li>
                    <li>
                      <strong>Yoga & Ayurveda programs:</strong> Varkala has
                      one of Kerala's longest-running wellness scenes, with
                      both drop-in classes and multi-week residential
                      programs available.
                    </li>
                    <li>
                      <strong>Natural mineral spring wells:</strong> A few
                      freshwater springs near the cliff base, a local
                      curiosity worth a short detour.
                    </li>
                  </ul>
                </section>

                <section id="where-to-stay">
                  <h2>Where to Stay in Varkala</h2>
                  <p>
                    Almost everything worth staying near is within walking
                    distance of the cliff — choose based on how close to the
                    action, and how much sea view, you want.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,500/night",
                        picks: ["Cliff-view backpacker guesthouses", "North Cliff budget rooms", "Yoga-school shared stays"],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,500/night",
                        picks: ["Cliff-edge boutique guesthouses", "South Cliff sea-view rooms", "Ayurveda resort packages"],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹6,000–₹15,000+/night",
                        picks: ["Clifftop boutique resorts", "Premium Ayurveda retreat packages", "Private sea-view villas"],
                      },
                    ].map((t) => (
                      <div key={t.tier} className="bg-white border border-stone-200 rounded-xl p-5">
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{t.tier}</div>
                        <div className="text-xs text-forest-600 font-medium mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{t.range}</div>
                        <ul className="space-y-1 m-0">
                          {t.picks.map((p) => (
                            <li key={p} className="text-xs text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>→ {p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <blockquote>
                    The North Cliff area is generally quieter and better for
                    yoga retreats; the South Cliff has the highest density of
                    cafes and nightlife.
                  </blockquote>
                </section>

                <section id="food-guide">
                  <h2>What to Eat in Varkala</h2>
                  <ul>
                    <li>
                      <strong>Kerala thalis:</strong> Traditional
                      vegetarian and fish thalis, often served on banana
                      leaf, available at smaller local eateries away from the
                      main cliff strip.
                    </li>
                    <li>
                      <strong>Cliff cafe fusion menus:</strong> Israeli,
                      Italian, and continental options dominate the cliff-top
                      cafes — a legacy of Varkala's long-running international
                      backpacker and yoga crowd.
                    </li>
                    <li>
                      <strong>Fresh seafood:</strong> Kingfish, prawns, and
                      squid grilled or curried, sold fresh at most cliff
                      restaurants — ask what came in that morning.
                    </li>
                    <li>
                      <strong>Healthy/wellness menus:</strong> Smoothie
                      bowls, fresh juices, and vegan options are widely
                      available, reflecting the town's wellness-tourism
                      identity.
                    </li>
                  </ul>
                </section>

                <section id="itinerary">
                  <h2>2-Day Varkala Itinerary</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Cliff & Papanasham Beach",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check into a cliff-side guesthouse",
                          "Afternoon: Walk the full cliff stretch, browse cafes and shops",
                          "Evening: Sunset at Papanasham Beach",
                          "Dinner at a cliff-top restaurant",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Wellness, Temple & Kappil",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Yoga class or Ayurveda treatment",
                          "Late morning: Janardanaswamy Temple",
                          "Afternoon: Trip to Kappil Beach and Lake",
                          "Evening: Final sunset and departure prep",
                        ],
                      },
                    ].map((d) => (
                      <div key={d.day} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`${d.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`} style={{ fontFamily: "var(--font-dm-sans)" }}>{d.day}</div>
                        </div>
                        <div className="flex-1 bg-white border border-stone-200 rounded-xl p-5">
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{d.title}</h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹600", "₹2,200", "₹8,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Yoga class / Ayurveda session", "₹300", "₹1,500", "₹4,000"],
                          ["Local transport per day", "₹150", "₹400", "₹1,200"],
                          ["Daily total", "₹1,300", "₹4,200", "₹13,000"],
                          ["2-Day trip total", "₹2,600", "₹8,400", "₹26,000"],
                        ].map(([exp, b, m, l], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{l}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Excludes flights/trains to the region. Yoga and
                    Ayurveda program costs vary widely — single drop-in
                    sessions are far cheaper than multi-week packages.
                  </p>
                </section>

                <section id="tips">
                  <h2>Essential Travel Tips for Varkala</h2>
                  <ul>
                    <li>
                      <strong>Check sea safety flags before swimming:</strong>{" "}
                      Currents near the cliff can be stronger than they look,
                      especially outside the Nov-Mar season.
                    </li>
                    <li>
                      <strong>Be respectful near Papanasham's temple end:</strong>{" "}
                      This part of the beach is an active pilgrimage site —
                      keep behavior and dress mindful near the rituals.
                    </li>
                    <li>
                      <strong>Book yoga/Ayurveda programs ahead in peak season:</strong>{" "}
                      Popular multi-week courses fill up during Dec-Jan.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance is patchy
                      at smaller cafes and for local transport.
                    </li>
                    <li>
                      <strong>Most cliff businesses close outside Oct-May:</strong>{" "}
                      Expect a much quieter, partly-shuttered cliff during
                      peak monsoon months.
                    </li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Walk the full cliff stretch at least once, ideally at sunset",
                          "Try a drop-in yoga class even if you're not staying long",
                          "Visit Kappil Beach for a quieter alternative",
                          "Check swimming safety conditions before entering the water",
                          "Book Ayurveda/yoga programs ahead for Dec-Jan travel",
                          "Be mindful near the temple/ritual end of Papanasham",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Swim past the shallows without checking currents locally",
                          "Wear inappropriate clothing near the temple/ritual area",
                          "Rely on cards at smaller cafes or for local transport",
                          "Expect all cliff cafes to be open outside Oct-May",
                          "Skip Kappil Lake if you have a second day free",
                          "Book a beachfront room expecting total silence in peak season",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Varkala", "Beaches", "Cliff Beach", "Yoga", "Kerala", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={VARKALA_GEAR} destination="Varkala" />

              <RelatedPostsGrid currentSlug="varkala-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="varkala-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
