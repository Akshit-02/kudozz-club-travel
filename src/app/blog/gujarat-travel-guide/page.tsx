// src/app/blog/gujarat-travel-guide/page.tsx
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
  title: "Gujarat Travel Guide: Rann of Kutch, Somnath & Gir National Park",
  description:
    "The complete Gujarat travel guide — the white salt desert of the Rann of Kutch, the Rann Utsav festival, Somnath and Dwarka's temple towns, wild Asiatic lions in Gir National Park, Ahmedabad's UNESCO heritage, the Statue of Unity, where to stay and eat, and a full itinerary through India's westernmost state.",
  keywords:
    "Gujarat travel guide, Rann of Kutch, Rann Utsav, Somnath temple, Dwarka, Gir National Park, Asiatic lions, Ahmedabad heritage, Statue of Unity, Gujarat itinerary, Gujarati food, best time to visit Gujarat, how to reach Gujarat from Ahmedabad, Gujarat 7 day itinerary, is Gujarat safe for solo travellers, Gujarat trip budget, top things to do in Gujarat, Rann of Kutch full moon walk, Gir National Park jeep safari, Sabarmati Ashram Ahmedabad, Dwarkadhish Temple",
  openGraph: {
    title: "Gujarat Travel Guide: Rann of Kutch, Somnath & Gir National Park",
    description:
      "A shimmering white salt desert, temple towns steeped in mythology, and the only wild Asiatic lions left on Earth — the complete guide to Gujarat.",
    url: "https://club.kudozz.in/blog/gujarat-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Golden desert fort at dusk, evoking the arid, sand-swept landscape of Gujarat's Rann of Kutch region",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gujarat Travel Guide: Rann of Kutch, Somnath & Gir National Park",
    description:
      "A white salt desert, temple towns, and India's only wild lions — the complete guide to Gujarat.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gujarat-travel-guide",
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
            "Gujarat Travel Guide: Rann of Kutch, Somnath & Gir National Park",
          description: "The complete Gujarat travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/gujarat-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Gujarat",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Gujarat",
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
                name: "Gujarat Travel Guide",
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
    q: "How many days do I need for Gujarat?",
    a: "Seven days is a reasonable minimum to combine Ahmedabad, the Rann of Kutch, Gir National Park, and the temple towns of Somnath and Dwarka without excessive rushing. Given Gujarat's spread, plan on basing yourself in 3-4 distinct hubs rather than one central location.",
  },
  {
    q: "What is the best time to visit Gujarat?",
    a: "November to February is best — cool, dry, and pleasant (10–28°C), ideal for the Rann of Kutch, wildlife safaris in Gir, and comfortable city sightseeing. This window also coincides with the Rann Utsav festival. Avoid Kutch entirely during monsoon (July–September), when the Rann actually floods, and during the extreme heat of March–June.",
  },
  {
    q: "How do I reach Gujarat?",
    a: "Fly into Ahmedabad's Sardar Vallabhbhai Patel International Airport (AMD), Gujarat's best-connected gateway, with regular domestic and several international connections. Smaller airports at Rajkot, Bhuj, and Diu serve regional routes, and Ahmedabad, Rajkot, Bhuj, and Vadodara are all well connected by rail to Delhi, Mumbai, and other major cities.",
  },
  {
    q: "Is Gujarat safe for solo travellers?",
    a: "Gujarat is generally considered one of India's safer and more organized states to travel, with well-developed tourist infrastructure around Ahmedabad, Gir, and the Rann Utsav tent city. As a legally 'dry' state, its nightlife is limited, which many solo travellers find adds to the sense of calm compared to more touristy circuits.",
  },
  {
    q: "What is the budget for a trip to Gujarat?",
    a: "A budget traveller can expect to spend roughly ₹3,100 a day, a mid-range trip runs about ₹8,150 a day, and a luxury trip around ₹18,900 a day. A full 7-day trip totals roughly ₹21,700 on a budget, ₹57,050 mid-range, or ₹132,300 for luxury, excluding flights. Gir's safari and jeep costs are a significant line item, though shared jeeps bring per-person costs down.",
  },
  {
    q: "Is Gujarat worth visiting?",
    a: "Yes — it's a genuinely singular mix rarely covered on a first India trip: a UNESCO-listed heritage city in Ahmedabad, the otherworldly white salt desert of the Rann of Kutch, temple towns like Somnath and Dwarka steeped in mythology, and Gir National Park, the only place on Earth outside Africa where lions still roam wild.",
  },
  {
    q: "Can I drink alcohol in Gujarat?",
    a: "Gujarat is a legally 'dry' state, so alcohol sale and consumption is prohibited without a permit. Tourists can apply for a temporary liquor permit at designated shops or hotels, but casual availability shouldn't be expected the way it would elsewhere in India.",
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
  { id: "introduction", title: "Why Gujarat?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "rann-of-kutch", title: "Rann of Kutch: The White Desert", level: 2 },
  { id: "temple-towns", title: "Somnath & Dwarka: Temple Towns", level: 2 },
  { id: "gir-national-park", title: "Gir National Park: Asiatic Lions", level: 2 },
  { id: "other-sights", title: "Ahmedabad, Statue of Unity & Diu", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "7-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Gujarat-specific gear ────────────────────────────────────────────────────
const GUJARAT_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for desert heat in the Rann of Kutch, jeep safaris in Gir, and long days of temple sightseeing",
    emoji: "🏜️",
    items: [
      {
        name: "Sunscreen (SPF 50)",
        description:
          "The white salt desert of the Rann of Kutch reflects sunlight relentlessly — sun protection here isn't optional.",
        price: "₹399",
        rating: 4.5,
        reviews: "10k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+travel"),
        tag: "Desert essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Between the salt flats' glare and Gir's open jeep safaris, unprotected skin takes a beating fast in Gujarat's sun.",
      },
      {
        name: "Comfortable Walking Shoes",
        description:
          "Ahmedabad's old city, Somnath's temple grounds, and the walk out to the white desert all call for sturdy, broken-in footwear.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "From stepwells to salt flats, a lot of Gujarat's highlights are covered on foot across uneven, sun-baked ground.",
      },
      {
        name: "Light Cotton Clothing",
        description:
          "Loose, breathable cotton copes far better with Gujarat's dry heat than synthetic fabrics, especially in Kutch and Gir.",
        price: "₹1,299",
        rating: 4.3,
        reviews: "4.6k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("light+cotton+travel+clothing"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Daytime temperatures in Kutch and Saurashtra climb fast outside the winter months — breathable layers make a real difference.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Essential across long desert drives, temple visits, and jeep safaris where bottled water isn't always close at hand.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Gujarat's dry climate and long transit distances make steady hydration important, particularly around the Rann.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for long road transfers between Ahmedabad, Kutch, Gir, and the temple towns, plus full-day safari outings.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Gujarat's distances are considerable, and phones double as cameras, maps, and safari trackers on long travel days.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "A compact kit covering dehydration, minor cuts, and motion sickness is worth having on remote Kutch and Gir routes.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.1k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("compact+first+aid+kit+travel"),
        tag: "Safety essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Medical facilities thin out fast once you're deep in Kutch's border villages or Gir's forest roads — a basic kit is cheap insurance.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GujaratGuidePage() {
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
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Golden desert fort at dusk, evoking the arid, sand-swept landscape of Gujarat's Rann of Kutch region"
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
                  label: "Gujarat",
                  href: "/blog?category=gujarat",
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
                "Gujarat",
                "Rann of Kutch",
                "Somnath",
                "Gir National Park",
                "Asiatic Lions",
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
              Gujarat Travel Guide: Rann of Kutch, Somnath & Gir National
              Park
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A shimmering white salt desert that stretches to the horizon,
              temple towns wrapped in centuries of mythology, and the only
              place on Earth outside Africa where lions still roam wild —
              Gujarat is India's westernmost state, and one of its most
              quietly extraordinary.
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
                  text: "Gujarat, Western India",
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
                  <h2>Why Gujarat?</h2>
                  <p>
                    India's westernmost state, <strong>Gujarat</strong> is
                    often overlooked by first-time visitors chasing
                    Rajasthan or Kerala, yet it offers a genuinely singular
                    mix — a UNESCO-listed historic city, a landscape unlike
                    anywhere else in the country, temples central to Hindu
                    mythology, and the only wild population of Asiatic
                    lions left on the planet.
                  </p>
                  <p>
                    <strong>Ahmedabad</strong>, Gujarat's largest city, was
                    the first city in India to be inscribed as a UNESCO
                    World Heritage City, and it's also where{" "}
                    <strong>Mahatma Gandhi</strong> founded the Sabarmati
                    Ashram and launched the Salt March that helped shape
                    India's independence movement. Gujarat's long mercantile
                    and business tradition — the state remains one of
                    India's most entrepreneurial — runs through everything
                    from its bustling markets to its diaspora communities
                    worldwide.
                  </p>
                  <p>
                    Beyond the cities, Gujarat holds the{" "}
                    <strong>Rann of Kutch</strong>, a vast white salt
                    desert that hosts one of India's most spectacular
                    seasonal festivals, and <strong>Gir National Park</strong>
                    , the last refuge of the Asiatic lion. Add the{" "}
                    <strong>Statue of Unity</strong> — at over 180 metres,
                    the tallest statue in the world — and Gujarat's case for
                    a dedicated trip becomes hard to ignore.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦁</span> Gujarat at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Gujarat",
                        },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Ahmedabad (AMD)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Nov – Feb" },
                        {
                          icon: "🏜️",
                          label: "Known For",
                          value: "Rann of Kutch, Asiatic Lions",
                        },
                        {
                          icon: "🦁",
                          label: "Wildlife",
                          value: "Gir National Park",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,400 – ₹7,500",
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
                  <h2>Best Time to Visit Gujarat</h2>
                  <p>
                    Gujarat's climate ranges from the coastal humidity of
                    Diu and Somnath to the extreme heat and cold of the
                    Kutch desert — timing matters more here than in most
                    Indian states.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (10–28°C) — ideal for the Rann of Kutch, wildlife safaris in Gir, and comfortable city sightseeing.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🎪",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Rann Utsav festival",
                        text: "A months-long tent city festival on the white salt desert near Dhordo, with folk music, crafts, and full-moon walks across the Rann.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🥵",
                        color: "bg-red-50 border-red-200",
                        mood: "Extreme heat — avoid Kutch",
                        text: "Temperatures in Kutch and Saurashtra regularly cross 40°C — the salt desert becomes genuinely punishing to visit.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — Rann floods",
                        text: "The Great Rann of Kutch actually floods during monsoon, submerging the salt flats — Gir's safari zones close as well.",
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
                    <strong>Our pick:</strong> November to February, ideally
                    timed with the Rann Utsav — this is when the white
                    desert, the wildlife parks, and the cities are all at
                    their best simultaneously. Avoid Kutch entirely during
                    monsoon and the peak summer months.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Gujarat</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Ahmedabad's Sardar Vallabhbhai
                      Patel International Airport (AMD) is Gujarat's main
                      gateway, with regular domestic and several
                      international connections. Smaller airports at
                      Rajkot, Bhuj, and Diu serve regional routes.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Ahmedabad, Rajkot, Bhuj, and
                      Vadodara are all well connected to the national rail
                      network, with direct trains from Delhi, Mumbai, and
                      other major cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> A strong highway network
                      connects Gujarat's major towns, though distances
                      between Ahmedabad, Kutch, and Gir/Somnath are
                      substantial — expect long travel days.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly into Ahmedabad regardless
                    of your route — it's Gujarat's best-connected airport,
                    and a solid base for renting a car or hiring a driver
                    for the rest of the trip.
                  </div>
                </section>

                {/* ── Rann of Kutch ─────────────────────────────────────── */}
                <section id="rann-of-kutch">
                  <h2>Rann of Kutch: The White Desert</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/fort.jpg"
                      alt="A large hilltop desert fort with sandstone walls, evoking the arid Kutch region that borders the Rann's white salt desert"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The <strong>Great Rann of Kutch</strong> is one of the
                    largest salt deserts on Earth — a flat, white expanse
                    stretching to the horizon that, under a full moon, looks
                    almost otherworldly. It's unlike anywhere else in India.
                  </p>
                  <ul>
                    <li>
                      <strong>Rann Utsav:</strong> A tent city festival held
                      each winter (roughly November to February) near the
                      village of Dhordo, with folk music and dance
                      performances, local handicrafts, and organized
                      full-moon walks out onto the salt flats.
                    </li>
                    <li>
                      <strong>White Desert Full-Moon Walks:</strong> Walking
                      out onto the Rann under moonlight, when the salt
                      surface seems to glow, is one of the most memorable
                      experiences Gujarat offers.
                    </li>
                    <li>
                      <strong>Kutch's Handicraft Villages:</strong> Villages
                      around Bhuj are home to some of India's finest
                      embroidery, mirror-work, and block-printing
                      traditions — well worth a detour for craft
                      enthusiasts.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Time your visit around a
                    full moon if possible — the white desert is striking in
                    daylight, but genuinely unforgettable under a bright
                    moon.
                  </div>
                </section>

                {/* ── Temple Towns ──────────────────────────────────────── */}
                <section id="temple-towns">
                  <h2>Somnath & Dwarka: Temple Towns</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Ornately carved temple gopuram architecture, evoking the coastal temple towns of Somnath and Dwarka in Gujarat"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Gujarat's coastline holds two of Hinduism's most
                    significant pilgrimage sites, each carrying centuries
                    of history and mythology.
                  </p>
                  <ul>
                    <li>
                      <strong>Somnath Temple:</strong> The first of the
                      twelve Jyotirlingas, Somnath has been destroyed and
                      rebuilt multiple times over its history, most recently
                      in the mid-20th century — its current form stands
                      dramatically on the Arabian Sea coast.
                    </li>
                    <li>
                      <strong>Dwarka:</strong> According to mythology, the
                      site of Krishna's kingdom, submerged by the sea after
                      his death. The Dwarkadhish Temple, dedicated to
                      Krishna, is one of the char dham pilgrimage sites and
                      draws devotees from across India.
                    </li>
                    <li>
                      <strong>Beyet Dwarka:</strong> A short boat ride from
                      the mainland, this island is believed to have been
                      Krishna's actual residence — a worthwhile add-on for
                      those visiting Dwarka.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Combine Somnath and Gir
                    National Park in one loop — they're roughly two hours
                    apart and pair naturally into a single leg of a
                    Gujarat trip.
                  </div>
                </section>

                {/* ── Gir National Park ─────────────────────────────────── */}
                <section id="gir-national-park">
                  <h2>Gir National Park: Asiatic Lions</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Dense green forest landscape, evoking the dry deciduous forest habitat of Gir National Park in Gujarat"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Gir National Park</strong>, near the town of
                    Sasan Gir, is the only place on Earth outside Africa
                    where lions still roam in the wild. Every free-ranging
                    Asiatic lion left in the world lives within this single
                    forest landscape.
                  </p>
                  <ul>
                    <li>
                      <strong>Jeep Safaris:</strong> Morning and afternoon
                      safari slots run through Gir's dry deciduous forest,
                      with sightings of Asiatic lions, leopards, and a wide
                      range of birdlife — permits should be booked in
                      advance.
                    </li>
                    <li>
                      <strong>Sasan Gir:</strong> The main base town for
                      safaris, with a range of accommodation from budget
                      lodges to dedicated wildlife resorts near the park
                      gate.
                    </li>
                    <li>
                      <strong>Devalia Safari Park:</strong> A fenced
                      alternative within Gir's interpretation zone, useful
                      as a backup if core-zone permits are unavailable.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book Gir safari permits
                    online well ahead of your visit — daily slots are
                    capped, and peak winter season fills up fast.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Ahmedabad, Statue of Unity & Diu</h2>
                  <ul>
                    <li>
                      <strong>Ahmedabad:</strong> India's first UNESCO World
                      Heritage City, home to the Sabarmati Ashram (Gandhi's
                      residence during the independence movement), the
                      intricately carved Sidi Saiyyed Mosque, and the old
                      city's stepwells, including the stunning Adalaj Vav.
                    </li>
                    <li>
                      <strong>Statue of Unity:</strong> Near Kevadia, this
                      is the tallest statue in the world at over 180 metres,
                      depicting Sardar Vallabhbhai Patel — a viewing gallery
                      near the top offers sweeping views of the Narmada
                      dam and valley below.
                    </li>
                    <li>
                      <strong>Diu:</strong> A former Portuguese colony
                      (technically a separate Union Territory, but commonly
                      visited alongside Gujarat), known for its
                      whitewashed churches, colonial-era fort, and relaxed
                      beach towns — a welcome contrast to Gujarat's dry
                      interior.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Given Gujarat's spread, plan to base yourself in 3–4
                    distinct hubs — Ahmedabad, Kutch (Bhuj or the Rann
                    Utsav tent city), Gir/Sasan, and Somnath or Diu — rather
                    than one central location.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses, Ahmedabad old city",
                          "Budget lodges, Bhuj/Kutch",
                          "Basic stays near Sasan Gir gate",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,200–₹5,500/night",
                        picks: [
                          "Business hotels, Ahmedabad",
                          "Rann Utsav tent city, Dhordo",
                          "Wildlife resorts, Sasan Gir",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹6,500–₹16,000+/night",
                        picks: [
                          "Heritage & 5-star hotels, Ahmedabad",
                          "Premium tents, Rann Utsav",
                          "Luxury lodges, Gir forest edge",
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
                    The Rann Utsav tent city runs on a seasonal booking
                    system with fixed nightly rates — book well ahead, as
                    availability drops sharply around weekends and the
                    festival's peak weeks.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Gujarat</h2>
                  <p>
                    Gujarat is widely regarded as India's vegetarian food
                    capital, with a thali culture built around balancing
                    sweet, salty, and spicy flavors in a single meal.
                  </p>
                  <ul>
                    <li>
                      <strong>Gujarati Thali:</strong> An elaborate,
                      all-you-can-eat vegetarian spread of rotli, dal,
                      shaak (vegetable curries), rice, and a sweet dish —
                      often refilled repeatedly at dedicated thali
                      restaurants.
                    </li>
                    <li>
                      <strong>Dhokla:</strong> A steamed, spongy fermented
                      rice-and-lentil cake, tempered with mustard seeds —
                      one of Gujarat's most iconic snacks nationwide.
                    </li>
                    <li>
                      <strong>Khandvi:</strong> Thin, tightly rolled gram
                      flour rolls tempered with mustard seeds and curry
                      leaves — a delicate, distinctly Gujarati snack.
                    </li>
                    <li>
                      <strong>Undhiyu:</strong> A slow-cooked mixed
                      vegetable dish, traditionally made in winter with
                      seasonal produce — a Gujarati specialty especially
                      popular around Uttarayan.
                    </li>
                    <li>
                      <strong>Fafda-Jalebi:</strong> A classic Sunday
                      morning breakfast pairing — crisp, savory fafda
                      alongside sweet, syrupy jalebi.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>7-Day Gujarat Itinerary</h2>
                  <p>
                    Seven days is a reasonable minimum to combine Ahmedabad,
                    the Rann of Kutch, Gir National Park, and the temple
                    towns without excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Ahmedabad",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, Sabarmati Ashram",
                          "Old city walk, Sidi Saiyyed Mosque",
                          "Adalaj Vav stepwell",
                        ],
                      },
                      {
                        day: "Day 2–3",
                        title: "Rann of Kutch",
                        color: "bg-sky-600",
                        activities: [
                          "Travel to Bhuj/Dhordo (~5–6 hrs)",
                          "Handicraft villages around Bhuj",
                          "Rann Utsav tent city, full-moon desert walk",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Travel to Gir",
                        color: "bg-stone-600",
                        activities: [
                          "Long travel day toward Sasan Gir",
                          "Check in near the park gate",
                          "Rest and prep for early safari",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Gir National Park",
                        color: "bg-forest-600",
                        activities: [
                          "Morning jeep safari — Asiatic lions",
                          "Afternoon safari or Devalia Safari Park",
                          "Evening at leisure in Sasan Gir",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Somnath & Diu",
                        color: "bg-purple-700",
                        activities: [
                          "Travel to Somnath (~1.5 hrs)",
                          "Somnath Temple, coastal promenade",
                          "Optional day trip to Diu",
                        ],
                      },
                      {
                        day: "Day 7",
                        title: "Dwarka & Departure",
                        color: "bg-red-700",
                        activities: [
                          "Travel to Dwarka, Dwarkadhish Temple",
                          "Beyet Dwarka boat trip",
                          "Return to Ahmedabad / departure",
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
                            "₹8,800",
                          ],
                          ["Food/day", "₹400", "₹950", "₹2,300"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,800",
                          ],
                          [
                            "Safari & entry fees/day",
                            "₹1,200",
                            "₹2,500",
                            "₹5,000",
                          ],
                          ["Daily total", "₹3,100", "₹8,150", "₹18,900"],
                          [
                            "7-Day trip total",
                            "₹21,700",
                            "₹57,050",
                            "₹132,300",
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
                    * Excludes flights. Gir safari permit and jeep costs are
                    a significant line item — shared jeeps bring
                    per-person costs down considerably. Note that Gujarat
                    is a "dry" state, so budget alcohol costs are not
                    applicable in the usual sense.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Gujarat</h2>
                  <ul>
                    <li>
                      <strong>Gujarat is a legally "dry" state:</strong>{" "}
                      Alcohol sale and consumption is prohibited without a
                      permit — tourists can apply for a temporary liquor
                      permit at designated shops or hotels, but don't
                      expect casual availability.
                    </li>
                    <li>
                      <strong>Book Gir safari permits well in advance:</strong>{" "}
                      Daily visitor numbers are capped — book online through
                      the official portal, especially in peak winter
                      season.
                    </li>
                    <li>
                      <strong>Book Rann Utsav accommodation early:</strong>{" "}
                      The tent city runs on a fixed seasonal calendar and
                      fills up quickly around weekends and festival peak
                      weeks.
                    </li>
                    <li>
                      <strong>Plan around monsoon flooding in Kutch:</strong>{" "}
                      The Rann floods during monsoon (roughly July–
                      September) — the white desert isn't accessible during
                      this period.
                    </li>
                    <li>
                      <strong>Carry cash for smaller towns:</strong> Card
                      acceptance drops off quickly outside Ahmedabad and
                      major tourist hubs.
                    </li>
                    <li>
                      <strong>Factor in long transit days:</strong>
                      Distances between Ahmedabad, Kutch, and Gir/Somnath
                      are substantial — build buffer time into your
                      itinerary.
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
                          "Apply for a liquor permit in advance if you plan to drink",
                          "Book Gir safari permits weeks ahead in peak season",
                          "Book Rann Utsav tents early, especially for weekends",
                          "Carry cash for smaller towns and villages",
                          "Time your Kutch visit around a full moon if possible",
                          "Build buffer time into long inter-city transfers",
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
                          "Carry or drink alcohol without a valid permit",
                          "Show up to Gir without a booked safari permit",
                          "Plan a Rann of Kutch trip during monsoon",
                          "Underestimate travel time between Kutch and Gir",
                          "Rely on cards outside Ahmedabad and major hubs",
                          "Skip sun protection on the white salt desert",
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
                  "Gujarat",
                  "Rann of Kutch",
                  "Somnath",
                  "Dwarka",
                  "Gir National Park",
                  "Statue of Unity",
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
                sections={GUJARAT_GEAR}
                destination="Gujarat"
              />

              <RelatedPostsGrid currentSlug="gujarat-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gujarat-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
