// src/app/blog/madhya-pradesh-travel-guide/page.tsx
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
  title: "Madhya Pradesh Travel Guide: Khajuraho, Bandhavgarh & Gwalior Fort",
  description:
    "The complete Madhya Pradesh travel guide — the intricately carved temples of Khajuraho, tiger safaris in Bandhavgarh and Kanha, Gwalior Fort, the Sanchi Stupa, Pachmarhi's hills, where to stay and eat, and a full itinerary through the 'Heart of India.'",
  keywords:
    "Madhya Pradesh travel guide, Khajuraho temples, Bandhavgarh National Park, Kanha National Park, Gwalior Fort, Sanchi Stupa, Pachmarhi, Madhya Pradesh itinerary, tiger safari India, Ujjain Mahakaleshwar",
  openGraph: {
    title:
      "Madhya Pradesh Travel Guide: Khajuraho, Bandhavgarh & Gwalior Fort",
    description:
      "Temples carved with astonishing detail, some of India's best tiger sightings, and a hilltop fortress that guarded the heart of the country — the complete guide to Madhya Pradesh.",
    url: "https://club.kudozz.in/blog/madhya-pradesh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient carved temple architecture, evoking Madhya Pradesh's Khajuraho temples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Madhya Pradesh Travel Guide: Khajuraho, Bandhavgarh & Gwalior Fort",
    description:
      "Carved temples, tiger safaris, and a hilltop fortress — the complete guide to Madhya Pradesh.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/madhya-pradesh-travel-guide",
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
            "Madhya Pradesh Travel Guide: Khajuraho, Bandhavgarh & Gwalior Fort",
          description: "The complete Madhya Pradesh travel guide.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
          datePublished: "2026-07-22",
          dateModified: "2026-07-22",
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
            "@id": "https://club.kudozz.in/blog/madhya-pradesh-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Madhya Pradesh",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Madhya Pradesh",
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
                name: "Madhya Pradesh Travel Guide",
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
  { id: "introduction", title: "Why Madhya Pradesh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "khajuraho", title: "Khajuraho: The Carved Temples", level: 2 },
  { id: "tiger-reserves", title: "Bandhavgarh & Kanha: Tiger Country", level: 2 },
  { id: "gwalior-sanchi", title: "Gwalior Fort & Sanchi Stupa", level: 2 },
  { id: "other-sights", title: "Pachmarhi, Bhopal & Ujjain", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "7-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Madhya Pradesh-specific gear ───────────────────────────────────────────
const MADHYA_PRADESH_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for jeep safaris, temple sightseeing, and central India's hot, dry climate",
    emoji: "🐅",
    items: [
      {
        name: "Binoculars",
        description:
          "Essential for spotting tigers and other wildlife at a distance during jeep safaris in Bandhavgarh and Kanha.",
        price: "₹1,899",
        rating: 4.4,
        reviews: "5.4k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("binoculars+wildlife+safari"),
        tag: "Safari essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Tiger sightings often happen at a distance across open grassland — binoculars make a real difference to the experience.",
      },
      {
        name: "Neutral-Tone Clothing",
        description:
          "Bright colors are discouraged on jeep safaris in Bandhavgarh and Kanha, where muted tones blend better with the forest.",
        price: "₹899",
        rating: 4.3,
        reviews: "3.9k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("neutral+color+safari+clothing"),
        tag: "Safari essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Most reserves recommend khaki, olive, or similar earth tones for safaris — it's both practical and often a house rule.",
      },
      {
        name: "Comfortable Walking Shoes",
        description:
          "Khajuraho's temple complexes and Gwalior Fort both involve significant walking across stone courtyards and stairways.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Gwalior Fort's grounds are extensive, and Khajuraho's temple complexes involve a fair amount of walking between clusters.",
      },
      {
        name: "Sunscreen (SPF 50)",
        description:
          "Central India's dry heat makes sun protection essential, especially on open-air safaris and temple visits.",
        price: "₹399",
        rating: 4.5,
        reviews: "10k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"),
        tag: "Everyday essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Jeep safaris and temple sightseeing both mean hours in direct sun — Madhya Pradesh's dry heat makes this non-negotiable.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long safari days and travel between Khajuraho, the tiger reserves, and Gwalior.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Long transit days between towns and full-day safaris both drain devices faster than usual — worth the backup.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long safari drives and temple sightseeing in Khajuraho's heat.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Madhya Pradesh's dry inland climate means dehydration risk is real, especially on midday safaris and temple walks.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MadhyaPradeshGuidePage() {
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
              alt="Ancient carved temple architecture, evoking Madhya Pradesh's Khajuraho temples"
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
                  label: "Madhya Pradesh",
                  href: "/blog?category=madhya-pradesh",
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
                "Madhya Pradesh",
                "Khajuraho",
                "Bandhavgarh",
                "Gwalior Fort",
                "Tiger Safari",
                "Heritage",
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
              Madhya Pradesh Travel Guide: Khajuraho, Bandhavgarh & Gwalior
              Fort
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Temples carved with astonishing, thousand-year-old detail,
              some of India's best odds of spotting a wild tiger, and a
              hilltop fortress that guarded the crossroads of the
              subcontinent — Madhya Pradesh earns its nickname, the "Heart
              of India."
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "17 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Madhya Pradesh, Central India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,300 words",
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
                  <h2>Why Madhya Pradesh?</h2>
                  <p>
                    Sitting at the geographic center of the country,{" "}
                    <strong>Madhya Pradesh</strong> is India's second-largest
                    state by area, and one of its most underrated for
                    travel — combining UNESCO World Heritage temple
                    architecture, some of the country's best tiger reserves,
                    and centuries of Rajput, Mughal, and Maratha history in
                    forts and cities across the state.
                  </p>
                  <p>
                    <strong>Khajuraho's</strong> temples, famous for their
                    astonishingly detailed and often intricate carvings,
                    remain one of India's most significant architectural
                    achievements. Not far away, <strong>Bandhavgarh</strong>{" "}
                    and <strong>Kanha</strong> national parks offer among
                    the best tiger-sighting odds anywhere in India — Kanha
                    is even said to have inspired Rudyard Kipling's{" "}
                    <em>The Jungle Book</em>.
                  </p>
                  <p>
                    Add Gwalior's imposing hilltop fort, the Buddhist Sanchi
                    Stupa, and hill-station Pachmarhi, and Madhya Pradesh
                    offers a genuinely broad range of experiences — with far
                    fewer crowds than Rajasthan or Kerala.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐅</span> Madhya Pradesh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Madhya Pradesh",
                        },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Khajuraho (HJR)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Khajuraho, Tiger Safaris",
                        },
                        {
                          icon: "🐅",
                          label: "Wildlife",
                          value: "Bandhavgarh, Kanha",
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
                  <h2>Best Time to Visit Madhya Pradesh</h2>
                  <p>
                    Madhya Pradesh's continental climate makes timing
                    important — both for comfortable sightseeing and for
                    tiger reserve access, since parks close entirely during
                    monsoon.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (10–28°C) — ideal for temple sightseeing, forts, and comfortable safari mornings.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🐅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best tiger sightings",
                        text: "As water sources shrink, tigers concentrate near remaining waterholes — April–May often gives the best safari odds despite the heat.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — parks closed",
                        text: "Bandhavgarh and Kanha's core zones close entirely during monsoon (roughly July–September) to protect breeding wildlife.",
                      },
                      {
                        season: "Feb – Mar",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Khajuraho Dance Festival",
                        text: "A week-long classical dance festival held against the backdrop of Khajuraho's illuminated temples — a spectacular time to visit.",
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
                    <strong>Our pick:</strong> November to February for
                    comfortable all-round travel, or April–May specifically
                    if a tiger sighting is the top priority — just prepare
                    for genuine heat.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Madhya Pradesh</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Khajuraho Airport (HJR),
                      Bhopal's Raja Bhoj Airport, and Indore's Devi Ahilya
                      Bai Holkar Airport all have regular domestic
                      connections from major Indian cities.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Bhopal, Gwalior, Jabalpur,
                      and Khajuraho all have well-connected rail stations
                      linking Madhya Pradesh to the national network.
                    </li>
                    <li>
                      <strong>By Road:</strong> A solid highway network
                      connects major towns, though distances between
                      Khajuraho, the tiger reserves, and Gwalior are
                      substantial.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly into Khajuraho if temple
                    sightseeing is your priority, or Jabalpur if heading
                    straight to Bandhavgarh or Kanha — both cut significant
                    road time compared to flying into Bhopal.
                  </div>
                </section>

                {/* ── Khajuraho ─────────────────────────────────────────── */}
                <section id="khajuraho">
                  <h2>Khajuraho: The Carved Temples</h2>
                  <p>
                    A UNESCO World Heritage Site, <strong>Khajuraho's</strong>{" "}
                    temple complex was built between the 10th and 12th
                    centuries by the Chandela dynasty, and today survives as
                    one of India's finest examples of medieval temple
                    architecture.
                  </p>
                  <ul>
                    <li>
                      <strong>Western Group of Temples:</strong> The best
                      preserved and most visited cluster, including
                      Kandariya Mahadeva Temple, renowned for its
                      exceptionally detailed sculptural work.
                    </li>
                    <li>
                      <strong>Eastern & Southern Groups:</strong> Quieter,
                      less crowded temple clusters including Jain temples,
                      worth visiting for a fuller picture beyond the main
                      complex.
                    </li>
                    <li>
                      <strong>Light and Sound Show:</strong> An evening show
                      at the Western Group narrating Khajuraho's history —
                      a good way to close out a day of temple-hopping.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hire a licensed guide at the
                    Western Group entrance — the carvings reward context
                    that's easy to miss walking through independently.
                  </div>
                </section>

                {/* ── Tiger Reserves ────────────────────────────────────── */}
                <section id="tiger-reserves">
                  <h2>Bandhavgarh & Kanha: Tiger Country</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Dense green forest landscape, evoking the tiger reserves of Bandhavgarh and Kanha in Madhya Pradesh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Madhya Pradesh is often called the "Tiger State" of
                    India, home to more tigers than any other state, and{" "}
                    <strong>Bandhavgarh</strong> and <strong>Kanha</strong>{" "}
                    national parks are widely regarded as offering some of
                    the best tiger-sighting odds in the country.
                  </p>
                  <ul>
                    <li>
                      <strong>Bandhavgarh National Park:</strong> Known for
                      an unusually high tiger density and a historic
                      hilltop fort within the park boundaries — often
                      considered the most reliable park for sightings.
                    </li>
                    <li>
                      <strong>Kanha National Park:</strong> India's
                      largest national park in the region, with sprawling
                      sal forests and meadows said to have inspired Kipling's{" "}
                      <em>The Jungle Book</em>.
                    </li>
                    <li>
                      <strong>Jeep safaris:</strong> Both parks run
                      morning and afternoon safari slots, bookable in
                      advance through official park gates — booking ahead
                      is essential in peak season.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book safari permits at least
                    a few weeks in advance during peak season (Nov–Feb) —
                    slots at both parks fill up quickly and are capped
                    daily.
                  </div>
                </section>

                {/* ── Gwalior & Sanchi ──────────────────────────────────── */}
                <section id="gwalior-sanchi">
                  <h2>Gwalior Fort & Sanchi Stupa</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="A large hilltop fort with sandstone walls, evoking Gwalior Fort in Madhya Pradesh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    In the state's north, <strong>Gwalior Fort</strong> and
                    the Buddhist site of <strong>Sanchi</strong> represent
                    two very different chapters of Madhya Pradesh's history.
                  </p>
                  <ul>
                    <li>
                      <strong>Gwalior Fort:</strong> A massive hilltop
                      fortress often called the "Gibraltar of India,"
                      housing the Man Singh Palace and Sas-Bahu temples —
                      one of the most imposing forts in the country.
                    </li>
                    <li>
                      <strong>Sanchi Stupa:</strong> A UNESCO World
                      Heritage Buddhist monument complex dating to the 3rd
                      century BCE, commissioned by Emperor Ashoka — among
                      the oldest surviving stone structures in India.
                    </li>
                    <li>
                      <strong>Jai Vilas Palace:</strong> Gwalior's opulent
                      19th-century royal palace, now partly a museum, known
                      for its enormous chandeliers and eclectic European
                      interiors.
                    </li>
                  </ul>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Pachmarhi, Bhopal & Ujjain</h2>
                  <ul>
                    <li>
                      <strong>Pachmarhi:</strong> Madhya Pradesh's only
                      hill station, set in the Satpura range, known for
                      waterfalls, caves, and cool weather relative to the
                      rest of the state.
                    </li>
                    <li>
                      <strong>Bhopal:</strong> The state capital, home to
                      the Upper and Lower Lakes, Taj-ul-Masajid (one of
                      India's largest mosques), and a good base for
                      exploring the nearby Bhimbetka rock shelters.
                    </li>
                    <li>
                      <strong>Ujjain:</strong> One of Hinduism's seven holy
                      cities, home to the Mahakaleshwar Jyotirlinga temple,
                      and host to the Kumbh Mela once every 12 years.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Given Madhya Pradesh's spread, plan to base yourself in
                    2–3 distinct hubs — Khajuraho, one of the tiger
                    reserves, and Gwalior or Bhopal — rather than one
                    central location.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Guesthouses, Khajuraho",
                          "Budget lodges near Bandhavgarh gate",
                          "Hotels, central Gwalior",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Resort hotels, Khajuraho",
                          "Jungle lodges, Bandhavgarh/Kanha",
                          "Business hotels, Gwalior/Bhopal",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹7,000–₹18,000+/night",
                        picks: [
                          "Taj hotels, Khajuraho",
                          "Luxury safari lodges, Bandhavgarh",
                          "Heritage palace stays, Gwalior",
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
                    Safari lodges near Bandhavgarh and Kanha's gates cost
                    more than equivalent town hotels — factor this into
                    your budget if a tiger reserve is central to your trip.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Madhya Pradesh</h2>
                  <ul>
                    <li>
                      <strong>Poha-Jalebi:</strong> Indore's iconic
                      breakfast combination — flattened rice with a sweet,
                      syrupy jalebi on the side, sold across the city's
                      famous Sarafa Bazaar night market.
                    </li>
                    <li>
                      <strong>Bhutte ka Kees:</strong> A grated corn dish
                      cooked with milk and spices, a distinctly Indori
                      specialty.
                    </li>
                    <li>
                      <strong>Dal Bafla:</strong> Madhya Pradesh's answer to
                      Rajasthan's dal baati — wheat balls dunked in ghee,
                      served with spiced lentils.
                    </li>
                    <li>
                      <strong>Sabudana Khichdi:</strong> A common everyday
                      dish across the state, made from tapioca pearls,
                      peanuts, and light spices.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>7-Day Madhya Pradesh Itinerary</h2>
                  <p>
                    Seven days is a reasonable minimum to combine Khajuraho,
                    a tiger reserve, and Gwalior without excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Khajuraho",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, Western Group of Temples",
                          "Eastern & Southern Groups",
                          "Evening light and sound show",
                        ],
                      },
                      {
                        day: "Day 3–4",
                        title: "Bandhavgarh National Park",
                        color: "bg-forest-600",
                        activities: [
                          "Travel to Bandhavgarh (~4 hrs)",
                          "Morning and afternoon jeep safaris",
                          "Bandhavgarh Fort (within the park)",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Travel to Gwalior",
                        color: "bg-stone-600",
                        activities: [
                          "Travel via Jhansi or direct connections",
                          "Check in, evening at Sarafa Bazaar-style market",
                          "Rest day for the long transfer",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Gwalior",
                        color: "bg-sky-600",
                        activities: [
                          "Gwalior Fort and Man Singh Palace",
                          "Jai Vilas Palace museum",
                          "Sas-Bahu temples",
                        ],
                      },
                      {
                        day: "Day 7",
                        title: "Sanchi & Departure",
                        color: "bg-purple-700",
                        activities: [
                          "Day trip to Sanchi Stupa",
                          "Return via Bhopal",
                          "Departure",
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
                            "₹3,800",
                            "₹9,500",
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
                            "₹1,500",
                            "₹3,000",
                            "₹6,000",
                          ],
                          ["Daily total", "₹3,650", "₹9,100", "₹21,000"],
                          [
                            "7-Day trip total",
                            "₹25,550",
                            "₹63,700",
                            "₹147,000",
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
                    * Excludes flights. Safari permit and jeep costs at
                    Bandhavgarh and Kanha are a significant line item —
                    shared jeeps bring per-person costs down considerably.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Madhya Pradesh</h2>
                  <ul>
                    <li>
                      <strong>Book safari permits well in advance:</strong>{" "}
                      Bandhavgarh and Kanha cap daily visitor numbers —
                      book online through official portals weeks ahead in
                      peak season.
                    </li>
                    <li>
                      <strong>Share a jeep to cut safari costs:</strong>{" "}
                      Splitting a 6-seater safari jeep with other travelers
                      makes each safari meaningfully cheaper.
                    </li>
                    <li>
                      <strong>Hire a licensed guide at Khajuraho:</strong>{" "}
                      The temple carvings carry far more meaning with
                      proper historical and iconographic context.
                    </li>
                    <li>
                      <strong>Plan around park closure dates:</strong> Core
                      safari zones at Bandhavgarh and Kanha typically close
                      July–September — confirm current dates before
                      booking.
                    </li>
                    <li>
                      <strong>Carry cash for smaller towns:</strong> Card
                      acceptance drops off quickly outside Khajuraho,
                      Bhopal, and Gwalior's main commercial areas.
                    </li>
                    <li>
                      <strong>Factor in long transit days:</strong> Distances
                      between Khajuraho, the tiger reserves, and Gwalior are
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
                          "Book Bandhavgarh/Kanha safari permits weeks ahead",
                          "Hire a licensed guide at Khajuraho's temples",
                          "Share safari jeeps to reduce per-person cost",
                          "Wear neutral tones on jeep safaris",
                          "Carry cash for smaller towns and villages",
                          "Confirm current park closure dates before booking",
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
                          "Show up to a tiger reserve without a booked permit",
                          "Underestimate travel time between Khajuraho and the reserves",
                          "Wear bright colors on safari",
                          "Rely on cards outside major towns",
                          "Rush Khajuraho's temple complex in under half a day",
                          "Plan a safari trip during the July–September closure",
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
                  "Madhya Pradesh",
                  "Khajuraho",
                  "Bandhavgarh",
                  "Kanha",
                  "Gwalior Fort",
                  "Sanchi Stupa",
                  "Heritage",
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
                sections={MADHYA_PRADESH_GEAR}
                destination="Madhya Pradesh"
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
