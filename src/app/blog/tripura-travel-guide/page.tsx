// src/app/blog/tripura-travel-guide/page.tsx
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
  title: "Tripura Travel Guide: Neermahal, Unakoti & Ujjayanta Palace",
  description:
    "The complete Tripura travel guide — the lake palace of Neermahal, the ancient rock carvings of Unakoti, Ujjayanta Palace and Agartala, tribal culture, where to stay and eat, and a full itinerary through one of India's least-visited Northeastern states.",
  keywords:
    "Tripura travel guide, Neermahal, Unakoti rock carvings, Ujjayanta Palace, Agartala travel guide, Tripura Sundari Temple, Sepahijala Wildlife Sanctuary, Tripura itinerary, Northeast India travel, best time to visit Tripura, how to reach Tripura, Tripura 4 day itinerary, is Tripura safe for solo travellers, Tripura budget trip, top things to do in Tripura, Matabari Shakti Peeth",
  openGraph: {
    title: "Tripura Travel Guide: Neermahal, Unakoti & Ujjayanta Palace",
    description:
      "A lake palace, ancient rock-cut carvings, and a royal palace turned museum — the complete guide to Tripura, one of India's most overlooked Northeastern states.",
    url: "https://club.kudozz.in/blog/tripura-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Green hills and forest landscape, evoking Tripura's tribal heartland in Northeast India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripura Travel Guide: Neermahal, Unakoti & Ujjayanta Palace",
    description:
      "A lake palace, ancient rock carvings, and royal heritage — the complete guide to Tripura.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/tripura-travel-guide",
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
            "Tripura Travel Guide: Neermahal, Unakoti & Ujjayanta Palace",
          description: "The complete Tripura travel guide.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/tripura-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Tripura",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Tripura",
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
                name: "Tripura Travel Guide",
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
    q: "How many days do I need for a Tripura trip?",
    a: "Four days is a reasonable minimum to cover Agartala, Neermahal, and Unakoti without excessive rushing — one day for Agartala's palaces, one for Neermahal and Matabari, one for the long Unakoti day trip, and one for Sepahijala Wildlife Sanctuary before departure.",
  },
  {
    q: "What is the best time to visit Tripura?",
    a: "November to February is the pick — cool, dry conditions (15–28°C) make Unakoti's forest trail and a Neermahal boat crossing genuinely pleasant. Avoid the July–September monsoon, when heavy rainfall makes Unakoti's forested paths and rural roads difficult.",
  },
  {
    q: "How do I reach Tripura?",
    a: "Flying into Agartala's Maharaja Bir Bikram Airport (IXA) from Kolkata, Guwahati, or Delhi is by far the most practical option. Road and rail journeys from major Indian cities take a day or more given Tripura's location, connected mainly via Assam.",
  },
  {
    q: "Is Tripura safe for solo travellers?",
    a: "Tripura sees far fewer tourists than neighbouring states, which means thinner infrastructure rather than any particular safety concern — the main practical points are hiring a car with driver for day trips to Neermahal and Unakoti (public transport is limited and slow), carrying cash outside Agartala, and checking current advisories before visiting areas close to the Bangladesh border.",
  },
  {
    q: "What is the budget for a Tripura trip?",
    a: "A 4-day trip runs roughly ₹8,000 on a budget level up to ₹50,000 on a luxury level, excluding flights to Agartala. Daily costs cover accommodation, food, local transport, and activities, with local transport costing more than average given the long distances to Unakoti and other outlying sites.",
  },
  {
    q: "What are the top things to do in Tripura?",
    a: "The highlights are Neermahal, the lake palace reached only by boat across Rudrasagar Lake; Unakoti's massive rock-cut carvings dating back to the 7th–9th centuries; Ujjayanta Palace and Heritage Park in Agartala; the Tripura Sundari Temple at Matabari, one of the 51 Shakti Peethas; and Sepahijala Wildlife Sanctuary with its rare spectacled langurs.",
  },
  {
    q: "Is Unakoti worth the long drive from Agartala?",
    a: "Yes, for anyone interested in ancient history — Unakoti is one of Northeast India's most significant archaeological sites, with a giant 30-foot carved face of Shiva (Unakotishwara Kal Bhairava) and numerous smaller rock-cut figures scattered across the hillside. Given the roughly 178 km distance and 4-hour drive each way, consider an overnight stay in nearby Kailashahar rather than rushing back to Agartala the same day.",
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
  { id: "introduction", title: "Why Tripura?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Tripura", level: 2 },
  { id: "agartala", title: "Agartala: Palaces & City Sights", level: 2 },
  { id: "neermahal", title: "Neermahal: The Lake Palace", level: 2 },
  { id: "unakoti", title: "Unakoti: Ancient Rock Carvings", level: 2 },
  { id: "other-sights", title: "Matabari, Sepahijala & Tribal Villages", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Tripura-specific gear ─────────────────────────────────────────────────
const TRIPURA_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for humid forest sites, lake crossings, and a state with limited tourist infrastructure",
    emoji: "🛕",
    items: [
      {
        name: "Comfortable Walking Shoes",
        description:
          "Unakoti's hillside rock carvings and Ujjayanta Palace's grounds both involve uneven walking on stone and forested paths.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "The climb up to Unakoti's main rock carvings is uneven and partly forested — proper footwear makes a real difference.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Tripura's humid, forested terrain around Sepahijala and Unakoti makes mosquito presence significant, especially at dawn and dusk.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Forest essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Much of Tripura's sightseeing happens in forested or lakeside settings where mosquito presence is a genuine everyday factor.",
      },
      {
        name: "Rain Jacket / Poncho",
        description:
          "Tripura receives substantial rainfall for a large part of the year, and showers can start with little warning.",
        price: "₹599",
        rating: 4.3,
        reviews: "4.6k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("rain+jacket+poncho+travel"),
        tag: "Weather essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Even outside peak monsoon, Tripura's climate stays humid with a real chance of sudden rain on any given day.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for day trips to Unakoti and other sites outside Agartala, where charging infrastructure thins out quickly.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Tripura's smaller towns and rural sites have far sparser charging options than Agartala — a backup battery avoids being stranded.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long days visiting Agartala's palaces, Neermahal, and the forested Unakoti site.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Standalone shops and water points are limited between major sites — carrying your own water is the practical choice.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "Worth having given the state's modest medical infrastructure outside Agartala.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Small-town essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Medical facilities are concentrated in Agartala — basic self-sufficiency is worth having if travelling to Unakoti or rural tribal areas.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TripuraGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Green hills and forest landscape, evoking Tripura's tribal heartland in Northeast India"
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
                { label: "Tripura", href: "/blog?category=tripura" },
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
                "Tripura",
                "Neermahal",
                "Unakoti",
                "Agartala",
                "Tribal Culture",
                "Off-beat",
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
              Tripura Travel Guide: Neermahal, Unakoti & Ujjayanta Palace
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A palace rising from the middle of a lake, giant rock-cut
              carvings hidden in the forest, and a royal capital barely
              anyone outside Northeast India has heard of — Tripura is
              India's most overlooked princely state.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Tripura, Northeast India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,500 words",
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
                  <h2>Why Tripura?</h2>
                  <p>
                    Tucked into a narrow strip of land surrounded on three
                    sides by Bangladesh, <strong>Tripura</strong> is one of
                    India's smallest and least-visited states — and one of
                    its most historically rich, having been ruled by the
                    Manikya dynasty for centuries before joining India in
                    1949.
                  </p>
                  <p>
                    That royal legacy left behind genuinely striking
                    architecture: Ujjayanta Palace, once the seat of the
                    Tripura kings and now a museum in Agartala, and
                    Neermahal, a lake palace that looks like it belongs in
                    Rajasthan rather than the Northeast. Add to that Unakoti
                    — a hillside covered in massive rock-cut carvings dating
                    back over a thousand years — and Tripura's 19 tribal
                    communities, and you have a state that rewards curiosity
                    far beyond its size.
                  </p>
                  <p>
                    Tripura sees a fraction of the tourists that Meghalaya or
                    Assam do, which means fewer crowds, but also thinner
                    tourist infrastructure — plan with some flexibility and
                    treat it as a genuine off-the-beaten-path trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Tripura at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Tripura" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Agartala (IXA)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Neermahal, Unakoti, Royal Heritage",
                        },
                        {
                          icon: "🎭",
                          label: "Culture",
                          value: "19 Tribal Communities",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,500",
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
                  <h2>Best Time to Visit Tripura</h2>
                  <p>
                    Tripura has a humid subtropical climate with a
                    pronounced monsoon — timing matters for both comfort and
                    accessibility of outdoor sites.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and pleasant (15–28°C) — the most comfortable window for visiting Unakoti, Neermahal, and Agartala's palaces.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, humidity rising",
                        text: "Temperatures and humidity climb ahead of the monsoon, though outdoor sightseeing is still manageable with an early start.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rainfall",
                        text: "Tripura receives substantial rain in this window; Unakoti's forested paths and rural roads can get genuinely difficult.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Durga Puja season",
                        text: "Agartala's Durga Puja celebrations are significant and lively — a good time to combine sightseeing with local festival energy.",
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
                    cool conditions that make both Unakoti's forest trail and
                    a Neermahal boat crossing genuinely pleasant.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Tripura</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Maharaja Bir Bikram Airport
                      (IXA) in Agartala has regular flights from Kolkata,
                      Guwahati, and Delhi — by far the fastest way in.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Agartala railway station is
                      connected to the broader Indian rail network via
                      Assam, though journey times are long from most major
                      cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> Agartala is connected to
                      Guwahati (~500 km) and Silchar by road, though drive
                      times are substantial given the terrain.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Flying into Agartala is by
                    far the most practical option — road and rail journeys
                    from major Indian cities take a day or more given
                    Tripura's location.
                  </div>
                </section>

                {/* ── Agartala ──────────────────────────────────────────── */}
                <section id="agartala">
                  <h2>Agartala: Palaces & City Sights</h2>
                  <p>
                    Tripura's capital blends royal heritage with a relaxed,
                    unhurried city pace — most visitors base themselves here
                    for the whole trip.
                  </p>
                  <ul>
                    <li>
                      <strong>Ujjayanta Palace:</strong> The former royal
                      residence, now the Tripura State Museum, set in
                      Mughal-style gardens — the city's most significant
                      landmark, illuminated beautifully at night.
                    </li>
                    <li>
                      <strong>Heritage Park:</strong> A well-kept public park
                      near the palace, good for an evening walk.
                    </li>
                    <li>
                      <strong>Akhaura border crossing:</strong> A short
                      distance from Agartala, one of the main India–Bangladesh
                      land border points — an interesting stop even without
                      crossing.
                    </li>
                  </ul>
                </section>

                {/* ── Neermahal ─────────────────────────────────────────── */}
                <section id="neermahal">
                  <h2>Neermahal: The Lake Palace</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="Clear lake water with reflections, evoking Rudrasagar Lake around Tripura's Neermahal palace"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Built in 1930 by Maharaja Bir Bikram Kishore Manikya as a
                    summer retreat, <strong>Neermahal</strong> sits in the
                    middle of Rudrasagar Lake, roughly 53 km from Agartala,
                    and is reached only by boat.
                  </p>
                  <ul>
                    <li>
                      <strong>Boat crossing:</strong> Local boats ferry
                      visitors across the lake to the palace — the short ride
                      itself is part of the experience.
                    </li>
                    <li>
                      <strong>Blended architecture:</strong> The palace
                      combines Hindu and Islamic architectural styles, split
                      into a public wing (Andar Mahal) and private
                      residential wing.
                    </li>
                    <li>
                      <strong>Boat Festival:</strong> Held annually on
                      Rudrasagar Lake, featuring boat races and cultural
                      performances — worth timing a visit around if
                      possible.
                    </li>
                  </ul>
                </section>

                {/* ── Unakoti ───────────────────────────────────────────── */}
                <section id="unakoti">
                  <h2>Unakoti: Ancient Rock Carvings</h2>
                  <p>
                    One of Northeast India's most significant archaeological
                    sites, <strong>Unakoti</strong> (roughly 178 km from
                    Agartala) is a hillside covered in massive rock-cut
                    carvings and bas-reliefs, believed to date back to
                    between the 7th and 9th centuries.
                  </p>
                  <ul>
                    <li>
                      <strong>Unakotishwara Kal Bhairava:</strong> A giant
                      carved face of Shiva, roughly 30 feet tall, the site's
                      most iconic image.
                    </li>
                    <li>
                      <strong>Surrounding carvings:</strong> Numerous smaller
                      rock-cut figures and reliefs of gods and goddesses are
                      scattered across the hillside and forest.
                    </li>
                    <li>
                      <strong>Legend of the name:</strong> "Unakoti" means
                      "one less than a crore" (10 million minus one),
                      referencing a local legend about the origin of the
                      carvings.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Unakoti is a long day trip
                    from Agartala — consider an overnight stay in nearby
                    Kailashahar to explore the site properly without rushing
                    back the same day.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Matabari, Sepahijala & Tribal Villages</h2>
                  <ul>
                    <li>
                      <strong>Tripura Sundari Temple (Matabari):</strong> One
                      of the 51 Shakti Peethas of Hindu mythology, a
                      significant pilgrimage site near Udaipur town (South
                      Tripura), roughly 55 km from Agartala.
                    </li>
                    <li>
                      <strong>Sepahijala Wildlife Sanctuary:</strong> A
                      forested reserve with a lake, botanical garden, and
                      primate species including the rare spectacled langur.
                    </li>
                    <li>
                      <strong>Tribal villages:</strong> Tripura is home to 19
                      recognised tribal communities, including the Tripuri,
                      Reang, and Jamatia — visiting a local village or
                      cultural centre offers insight into traditions
                      distinct from the rest of India.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is concentrated in Agartala — outside the
                    capital, options thin out significantly, so plan day
                    trips accordingly.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses near Ujjayanta Palace",
                          "Tourist lodges (TTDC), Agartala",
                          "Basic stays, Kailashahar (near Unakoti)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, Agartala",
                          "Hotel Sonar Tori",
                          "Boutique stays, central Agartala",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Ginger Agartala",
                          "Premium business hotels, Agartala",
                          "Heritage-style stays (limited)",
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
                    Base yourself in Agartala for the whole trip and take
                    day trips to Neermahal, Unakoti, and Matabari — dedicated
                    tourist accommodation elsewhere in the state is genuinely
                    limited.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Tripura</h2>
                  <ul>
                    <li>
                      <strong>Mui Borok (Bamboo shoot dishes):</strong>{" "}
                      Fermented bamboo shoot features heavily in Tripuri
                      tribal cuisine, used in both curries and chutneys.
                    </li>
                    <li>
                      <strong>Wahan Mosdeng:</strong> A tribal pork dish
                      cooked with local herbs — a good introduction to
                      Tripura's indigenous food traditions.
                    </li>
                    <li>
                      <strong>Fish preparations:</strong> Given the state's
                      many rivers and lakes, freshwater fish features
                      prominently, often cooked with mustard or bamboo shoot.
                    </li>
                    <li>
                      <strong>Bengali-influenced dishes:</strong> Agartala's
                      food scene also carries strong Bengali influence,
                      reflecting the shared border and cultural history with
                      West Bengal and Bangladesh.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>4-Day Tripura Itinerary</h2>
                  <p>
                    Four days is a reasonable minimum to cover Agartala,
                    Neermahal, and Unakoti without excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Agartala",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Ujjayanta Palace and museum",
                          "Evening: Heritage Park walk",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Neermahal & Matabari",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Rudrasagar Lake, boat to Neermahal",
                          "Tripura Sundari Temple, Matabari",
                          "Return to Agartala",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Unakoti Day Trip",
                        color: "bg-forest-600",
                        activities: [
                          "Early departure to Unakoti (~4 hrs each way)",
                          "Explore the rock carvings and forest trail",
                          "Overnight in Kailashahar (recommended) or return late to Agartala",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Sepahijala & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Sepahijala Wildlife Sanctuary",
                          "Last-minute Agartala sightseeing",
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
                            "₹1,000",
                            "₹3,000",
                            "₹7,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Local transport/day",
                            "₹400",
                            "₹1,000",
                            "₹2,500",
                          ],
                          ["Activities/day", "₹200", "₹500", "₹1,000"],
                          ["Daily total", "₹2,000", "₹5,400", "₹12,500"],
                          [
                            "4-Day trip total",
                            "₹8,000",
                            "₹21,600",
                            "₹50,000",
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
                    * Excludes flights to Agartala. Local transport costs
                    are higher than average given the long distances to
                    Unakoti and other outlying sites.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Tripura</h2>
                  <ul>
                    <li>
                      <strong>Hire a car with driver for day trips:</strong>{" "}
                      Public transport to Neermahal and Unakoti is limited
                      and slow — a private vehicle is far more practical.
                    </li>
                    <li>
                      <strong>Plan Unakoti as a long day or overnight
                      trip:</strong> The distance from Agartala makes a rushed
                      same-day round trip tiring.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance is inconsistent outside Agartala's main
                      commercial areas.
                    </li>
                    <li>
                      <strong>Book flights well ahead in peak season:</strong>{" "}
                      Agartala has limited flight frequency compared to
                      larger Northeastern hubs like Guwahati.
                    </li>
                    <li>
                      <strong>Respect tribal village etiquette:</strong> If
                      visiting a tribal community, go with a local guide and
                      ask before photographing people or ceremonies.
                    </li>
                    <li>
                      <strong>Check border-area travel advisories:</strong>{" "}
                      Given Tripura's proximity to the Bangladesh border,
                      confirm current guidance before visiting areas close to
                      the border.
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
                          "Hire a car with driver for Neermahal and Unakoti",
                          "Book Agartala flights well ahead in peak season",
                          "Try tribal Tripuri dishes like Wahan Mosdeng",
                          "Carry cash for areas outside Agartala",
                          "Ask permission before photographing tribal communities",
                          "Consider an overnight stay near Unakoti",
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
                          "Rely on public transport for Unakoti or Neermahal",
                          "Rush the Unakoti round trip in a single tight day",
                          "Expect Goa- or Meghalaya-level tourist infrastructure",
                          "Rely on cards outside Agartala's main areas",
                          "Travel to border areas without checking current advisories",
                          "Skip mosquito precautions on forested day trips",
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
                  "Tripura",
                  "Neermahal",
                  "Unakoti",
                  "Agartala",
                  "Ujjayanta Palace",
                  "Tribal Culture",
                  "Off-beat",
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
                sections={TRIPURA_GEAR}
                destination="Tripura"
              />

              <RelatedPostsGrid currentSlug="tripura-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="tripura-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
