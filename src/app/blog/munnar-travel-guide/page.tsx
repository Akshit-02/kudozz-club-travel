// src/app/blog/munnar-travel-guide/page.tsx
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
  title: "Munnar Travel Guide: Tea Gardens, Viewpoints & Best Time to Visit",
  description:
    "The complete Munnar travel guide. Tea estates, Eravikulam National Park, Kolukkumalai sunrise, Mattupetty Dam, Top Station, where to stay, what to eat, and a full 2-day itinerary through Kerala's tea country.",
  keywords:
    "Munnar travel guide, Munnar tea gardens, Eravikulam National Park, Kolukkumalai sunrise trek, Mattupetty Dam, Top Station Munnar, Neelakurinji flower, best time to visit Munnar, how to reach Munnar, Munnar itinerary, Munnar 2 day itinerary, Munnar honeymoon, Anamudi Peak",
  openGraph: {
    title: "Munnar Travel Guide: Tea Gardens, Viewpoints & Best Time to Visit",
    description:
      "Rolling tea estates climbing into the clouds, a rare flower that blooms once every 12 years, and the coolest hill air in Kerala — the complete guide to Munnar.",
    url: "https://club.kudozz.in/blog/munnar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Misty tea estate hills representative of Munnar, Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munnar Travel Guide: Tea Gardens, Viewpoints & Best Time to Visit",
    description:
      "Tea estates, Eravikulam National Park, and the coolest hill air in Kerala — the complete guide to Munnar.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/munnar-travel-guide",
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
            "Munnar Travel Guide: Tea Gardens, Viewpoints & Best Time to Visit",
          description: "The complete Munnar travel guide.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
          datePublished: "2026-09-07",
          dateModified: "2026-09-07",
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
            "@id": "https://club.kudozz.in/blog/munnar-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Munnar",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              { "@type": "ListItem", position: 3, name: "Munnar Travel Guide" },
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
    q: "How many days do I need in Munnar?",
    a: "Two full days cover the essentials well — a day for the tea estates and Eravikulam National Park, and a second for Top Station, Mattupetty, and Kundala Lake. Add a third day if you want the Kolukkumalai sunrise jeep tour or a spice plantation walk.",
  },
  {
    q: "What is the best time to visit Munnar?",
    a: "September to May is the best window, with December to February the coolest and clearest. The heaviest monsoon months (June to August) bring landslide risk and reduced visibility on viewpoints, though the hills are at their greenest right after the rains ease.",
  },
  {
    q: "How do I reach Munnar?",
    a: "The nearest airport is Kochi (COK), about 110km away, roughly 3.5–4 hours by road. There's no direct railway into Munnar — the nearest stations are Aluva or Ernakulam, from where you'll continue by road. Most travellers fly or take the train into Kochi and hire a cab or take a bus onward.",
  },
  {
    q: "When does the Neelakurinji flower bloom in Munnar?",
    a: "The Neelakurinji is famous for blooming in mass only once every 12 years, turning Eravikulam's slopes purple-blue for a few weeks. Bloom windows and exact dates vary and access to flowering zones is often restricted for conservation — check current status with the Eravikulam National Park authorities before planning a trip around it.",
  },
  {
    q: "Is Munnar good for a honeymoon or family trip?",
    a: "Both. The cool climate, tea-estate scenery, and relaxed pace suit couples well, while boating at Kundala Lake, the tea museum, and gentler viewpoints work fine for families with kids. Just budget extra time for winding hill roads between sights.",
  },
  {
    q: "What is the budget for a trip to Munnar?",
    a: "A budget traveller can manage on roughly ₹1,800–2,200 a day (homestays, local food, shared transport), a mid-range trip runs closer to ₹5,000–6,000 a day, and resort stays with private transport can run ₹15,000+ a day. A 2-day trip totals roughly ₹4,000 on a budget and ₹12,000 mid-range, excluding travel to Kochi.",
  },
  {
    q: "Do I need permits for Eravikulam National Park or Chembra-style treks?",
    a: "Eravikulam National Park requires an entry ticket and operates on a shuttle-bus system to the viewing area, with certain zones restricted seasonally for wildlife and Neelakurinji conservation. There's no separate trekking permit for the main tourist zone, but always check current timings and any access restrictions locally before you go.",
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

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Munnar?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Munnar", level: 2 },
  { id: "top-attractions", title: "Top Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "2-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Gear ─────────────────────────────────────────────────────────────────────
const MUNNAR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle: "Gear for tea-estate walks, viewpoints, and cool hill mornings",
    emoji: "🍃",
    items: [
      {
        name: "Light Fleece / Windproof Jacket",
        description:
          "Mornings and evenings at 1,600m+ get genuinely cool for a tropical state — a packable fleece or windbreaker earns its space for sunrise viewpoints and jeep rides.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "6.2k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("light+fleece+jacket+travel"),
        tag: "Cool-mornings essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "First-time visitors consistently underestimate how cold Munnar's early mornings and open-jeep sunrise tours can feel.",
      },
      {
        name: "Comfortable Walking Shoes",
        description:
          "Tea-estate paths, Eravikulam's shuttle-to-viewpoint walk, and uneven ground at Top Station all call for grippy, comfortable footwear over sandals.",
        price: "₹1,799",
        rating: 4.4,
        reviews: "8.9k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+hiking"),
        tag: "Everyday essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Sloped, sometimes damp tea-garden paths are harder on flip-flops than they look from the road.",
      },
      {
        name: "Compact Rain Jacket",
        description:
          "Munnar's weather shifts fast — even outside peak monsoon, a sudden shower on a viewpoint or plantation walk is common.",
        price: "₹999",
        rating: 4.3,
        reviews: "5.4k",
        image: "🌧️",
        affiliateUrl: amazonSearchUrl("packable+rain+jacket+travel"),
        tag: "Shoulder-season essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Hill weather in the Western Ghats can turn in under an hour, even on nominally dry-season dates.",
      },
      {
        name: "Binoculars",
        description:
          "Useful for spotting the endangered Nilgiri Tahr at Eravikulam and for scanning the Western Ghats ridgelines from Top Station.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "3.1k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("compact+binoculars+travel"),
        tag: "Wildlife-spotting pick",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Tahr and birdlife at Eravikulam are often visible but distant from the marked visitor trail.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Long days moving between tea estates, dams, and viewpoints add up — a proper bottle beats buying plastic at every stop.",
        price: "₹449",
        rating: 4.5,
        reviews: "7.0k",
        image: "💧",
        affiliateUrl: amazonSearchUrl("insulated+reusable+water+bottle"),
        tag: "Everyday essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Munnar's viewpoints are spread out with limited shops in between, especially past Mattupetty toward Top Station.",
      },
      {
        name: "Power Bank",
        description:
          "Hilly terrain means longer drives between stops — a power bank keeps navigation and cameras running through a full sightseeing day.",
        price: "₹899",
        rating: 4.3,
        reviews: "9.5k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mah"),
        tag: "Road-trip essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Signal and charging options thin out the further you go past central Munnar toward Top Station.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MunnarGuidePage() {
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
              src="/images/destinations/coorg/coorg.jpg"
              alt="Misty tea estate hills representative of Munnar, Kerala"
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
                { label: "Munnar", href: null },
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
              {["Munnar", "Tea Gardens", "Kerala", "Hill Station", "Western Ghats"].map((tag) => (
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
              Munnar Travel Guide: Tea Gardens, Viewpoints & Best Time to Visit
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Rolling tea estates climbing into the clouds, a rare flower that
              blooms once every 12 years, and the coolest hill air in Kerala —
              everything you need to plan a trip to Munnar.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "13 min read" },
                { d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Munnar, Kerala" },
                { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "2,400 words" },
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

        {/* ── Three-Column Layout ───────────────────────────────────────── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex gap-8 xl:gap-10">
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Why Munnar?</h2>
                  <p>
                    <strong>Munnar</strong> sits where three mountain streams
                    meet in the Western Ghats, a former British-era hill
                    station that's now Kerala's signature tea country — a
                    landscape of impossibly green, close-cropped tea bushes
                    running over hill after hill, broken only by the odd
                    factory chimney or worker's path.
                  </p>
                  <p>
                    Beyond the plantations, Munnar is also a gateway to some
                    of the Western Ghats' highest points and rarest ecology:
                    Eravikulam National Park protects the endangered Nilgiri
                    Tahr and the Neelakurinji flower, which blooms across
                    entire hillsides only once every twelve years, while
                    Anamudi — South India's highest peak — rises just beyond
                    the park boundary.
                  </p>
                  <p>
                    It's a destination built for slow mornings, long drives
                    between viewpoints, and air that's noticeably cooler than
                    anywhere else in tropical Kerala.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🍃</span> Munnar at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "State", value: "Kerala, India" },
                        { icon: "🌿", label: "Key Site", value: "Eravikulam National Park" },
                        { icon: "🌡️", label: "Best Time", value: "Sept – May" },
                        { icon: "✈️", label: "Nearest Airport", value: "Kochi (COK), ~110km" },
                        { icon: "⛰️", label: "Elevation", value: "~1,600m" },
                        { icon: "💰", label: "Budget/Day", value: "₹1,800 – ₹6,000" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Munnar</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Dec – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Cool, clear, and dry — ideal for viewpoint visits and sunrise jeep tours to Kolukkumalai. This is also Munnar's busiest stretch, so book stays ahead.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Warmer, still pleasant",
                        text: "Noticeably warmer than winter but still cooler than the Kerala coast — a good shoulder window with fewer crowds.",
                      },
                      {
                        season: "Jun – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but risky",
                        text: "Heavy rain brings landslide risk on hill roads and low visibility at viewpoints. Tea gardens are at their greenest, but plan for disruptions.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🌦️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Post-monsoon — our second pick",
                        text: "Rains ease, waterfalls and dams are fuller, and the hills are at their most vividly green with clearing skies by late October.",
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
                    <strong>Our pick:</strong> December to February for the
                    clearest skies, or October–November if you want fuller
                    waterfalls and dams with fewer peak-season crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Munnar</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Cochin International Airport
                      (COK) is the nearest, about 110km away — roughly
                      3.5–4 hours by road through winding hill highways.
                    </li>
                    <li>
                      <strong>By Train:</strong> Munnar has no railway station
                      of its own. The nearest major stations are Aluva and
                      Ernakulam Junction, both near Kochi, from where you'll
                      continue by road.
                    </li>
                    <li>
                      <strong>By Road:</strong> Well connected from Kochi
                      (~110km) and from Madurai on the Tamil Nadu side via
                      Top Station (~135km) — the Madurai route also makes for
                      a scenic entry through the Western Ghats.
                    </li>
                  </ul>
                  <div className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> If arriving via Kochi, break
                    the drive at a plantation viewpoint along the way — the
                    NH85 route climbs steadily and rest stops with tea-garden
                    views are common along the last stretch into Munnar.
                  </div>
                </section>

                {/* ── Top Attractions ─────────────────────────────────────── */}
                <section id="top-attractions">
                  <h2>Top Things to Do in Munnar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Rolling tea estate hills near Munnar"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>Eravikulam National Park:</strong> Home to the
                      endangered Nilgiri Tahr and the rare Neelakurinji
                      flower, accessed via a shuttle bus from the entrance to
                      a marked viewing trail — check current access hours and
                      any seasonal closures before visiting.
                    </li>
                    <li>
                      <strong>Kolukkumalai Tea Estate:</strong> Reputedly one
                      of the world's highest tea plantations, reached by a
                      bumpy pre-dawn jeep ride for a sunrise that many
                      travellers rate as Munnar's single best experience —
                      book the jeep tour in advance.
                    </li>
                    <li>
                      <strong>Mattupetty Dam & Kundala Lake:</strong> Two
                      scenic reservoirs a short drive apart, both offering
                      boating and easy lakeside walks against a backdrop of
                      tea-covered hills.
                    </li>
                    <li>
                      <strong>Top Station:</strong> A viewpoint on the
                      Kerala–Tamil Nadu border with sweeping views into the
                      Western Ghats valley below — best visited early morning
                      before clouds roll in.
                    </li>
                    <li>
                      <strong>Tea Museum:</strong> A compact museum tracing
                      Munnar's tea-plantation history, with a working
                      demonstration of the processing steps from leaf to cup.
                    </li>
                    <li>
                      <strong>Spice Plantation Walks:</strong> Guided walks
                      through cardamom, pepper, and coffee plantations near
                      town — a good half-day add-on with a lower physical
                      demand than the Kolukkumalai trip.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Munnar</h2>
                  <p>
                    Central Munnar town puts you closest to markets and
                    transport, while stays further out toward the tea estates
                    trade convenience for views and quiet.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Homestays in central Munnar",
                          "Budget lodges near the bus stand",
                          "Backpacker hostels",
                          "Basic estate-side guesthouses",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Plantation-view resorts",
                          "Boutique hill cottages",
                          "Mid-range hotels near Eravikulam road",
                          "Cottage stays near Mattupetty",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹9,000–₹25,000+/night",
                        picks: [
                          "Tea-estate luxury resorts",
                          "Private pool villas",
                          "Colonial-era heritage bungalows",
                        ],
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
                    Staying a little outside central Munnar toward the tea
                    estates trades a few minutes' drive for genuinely
                    quieter, greener surroundings — worth it for a two-night
                    stay or longer.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Munnar</h2>
                  <p>
                    Munnar's food leans toward hearty Kerala hill-country
                    cooking, with plenty of tea-estate-grown produce and warm
                    dishes suited to the cooler climate.
                  </p>
                  <ul>
                    <li>
                      <strong>Kerala breakfast staples:</strong> Appam with
                      stew, puttu with kadala curry, and idiyappam are
                      standard morning fare at most local eateries.
                    </li>
                    <li>
                      <strong>Fresh estate-grown tea:</strong> Munnar's own
                      tea, often served strong and sweet, is worth trying at
                      a plantation café over a packaged brand.
                    </li>
                    <li>
                      <strong>Homestay meals:</strong> Many homestays serve
                      home-cooked Kerala thalis with rice, sambar, and
                      seasonal vegetable curries — often the best food option
                      in town.
                    </li>
                    <li>
                      <strong>Local specialties:</strong> Look for
                      cardamom-flavored chai, fresh strawberries and
                      strawberry preserves sold roadside, and honey from
                      local apiaries.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Munnar Itinerary</h2>
                  <p>
                    Two days cover the essentials comfortably; add a third if
                    you want the Kolukkumalai sunrise trip without rushing
                    the rest of the schedule.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Tea Country & Eravikulam",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Eravikulam National Park and the Nilgiri Tahr viewing trail",
                          "Visit the Tea Museum for context on the plantation industry",
                          "Afternoon: walk through a nearby spice plantation",
                          "Evening: sunset over the tea estates from a viewpoint near town",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Dams, Lakes & Top Station",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Mattupetty Dam and boating at Kundala Lake",
                          "Drive to Top Station for Western Ghats valley views",
                          "Lunch at a local eatery on the return route",
                          "Afternoon: free time for shopping or a second plantation walk before departure",
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

                {/* ── Budget ────────────────────────────────────────────── */}
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
                          ["Accommodation/night", "₹1,000", "₹4,000", "₹18,000"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          ["Local transport per day", "₹400", "₹1,500", "₹3,500"],
                          ["Entry fees & tours", "₹300", "₹800", "₹1,500"],
                          ["Daily total", "₹2,200", "₹7,500", "₹25,500"],
                          ["2-Day trip total", "₹4,400", "₹15,000", "₹51,000"],
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
                    * Excludes flight/train to Kochi. Jeep tours (like
                    Kolukkumalai sunrise) are typically an additional
                    per-person cost on top of these figures.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Munnar</h2>
                  <ul>
                    <li>
                      <strong>Book Kolukkumalai jeep tours ahead:</strong>
                      Seats fill up fast in peak season, and the pre-dawn
                      departure window is tight.
                    </li>
                    <li>
                      <strong>Pack warm layers:</strong> Even in a tropical
                      state, early mornings and evenings at elevation can dip
                      surprisingly cool.
                    </li>
                    <li>
                      <strong>Check Eravikulam's access rules:</strong>
                      Timings and certain zones can be restricted seasonally
                      for wildlife or Neelakurinji conservation — verify
                      before visiting.
                    </li>
                    <li>
                      <strong>Allow extra driving time:</strong> Hill roads
                      between viewpoints are winding and slower than distance
                      alone suggests.
                    </li>
                    <li>
                      <strong>Avoid peak monsoon for viewpoints:</strong>
                      June–August brings landslide risk and poor visibility
                      at Top Station and similar spots.
                    </li>
                    <li>
                      <strong>Carry cash for smaller estates and stalls:</strong>
                      Card acceptance thins out away from central Munnar.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>✅</span> Do</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Book the Kolukkumalai sunrise jeep tour in advance",
                          "Carry a light jacket even in the warmer months",
                          "Visit Eravikulam early to beat both crowds and cloud cover",
                          "Try fresh estate tea at a plantation café",
                          "Allow extra time for winding hill-road drives",
                          "Time your trip for Dec–Feb or Oct–Nov for the best conditions",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}><span>❌</span> Don't</h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Plan a viewpoint-heavy day during peak monsoon",
                          "Skip checking Eravikulam's current access rules",
                          "Assume card payments work everywhere",
                          "Underestimate drive times between hill viewpoints",
                          "Visit without warm layers, even in summer",
                          "Rush the Kolukkumalai trip — it needs a pre-dawn start",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-0.5 flex-shrink-0">→</span>{item}</li>
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
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>{f.q}</h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["Munnar", "Tea Gardens", "Kerala", "Western Ghats", "Hill Station", "India"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations sections={MUNNAR_GEAR} destination="Munnar" />

              <RelatedPostsGrid currentSlug="munnar-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="munnar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
