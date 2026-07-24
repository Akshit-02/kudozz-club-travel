// src/app/blog/himachal-pradesh-travel-guide/page.tsx
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
  title: "Himachal Pradesh Travel Guide: Shimla, Manali & Dharamshala",
  description:
    "The complete Himachal Pradesh travel guide — colonial Shimla, the Kullu Valley, Tibetan Buddhist Dharamshala and McLeod Ganj, high-altitude Spiti, Kasauli, Dalhousie, Kangra's tea gardens, where to stay and eat, and a full 9-day itinerary across India's most accessible Himalayan state.",
  keywords:
    "Himachal Pradesh travel guide, Shimla travel guide, Manali Himachal, Dharamshala McLeod Ganj, Kasauli, Dalhousie Chamba, Kangra Valley tea gardens, Kullu Manali, Himachal itinerary, Kalka Shimla toy train",
  openGraph: {
    title: "Himachal Pradesh Travel Guide: Shimla, Manali & Dharamshala",
    description:
      "From colonial hill stations to the cold desert of Spiti, apple orchards to the seat of the Dalai Lama — the complete guide to Himachal Pradesh.",
    url: "https://club.kudozz.in/blog/himachal-pradesh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Snow-capped Himalayan peaks above a green valley in Himachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himachal Pradesh Travel Guide: Shimla, Manali & Dharamshala",
    description:
      "Colonial hill stations, high-altitude cold desert, and the seat of the Dalai Lama — the complete guide to Himachal Pradesh.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/himachal-pradesh-travel-guide",
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
          headline: "Himachal Pradesh Travel Guide: Shimla, Manali & Dharamshala",
          description: "The complete Himachal Pradesh travel guide.",
          image: "https://club.kudozz.in/images/destinations/manali/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/himachal-pradesh-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Himachal Pradesh",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Himachal Pradesh",
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
                name: "Himachal Pradesh Travel Guide",
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
  { id: "introduction", title: "Why Himachal Pradesh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "shimla", title: "Shimla: The Colonial Capital", level: 2 },
  { id: "manali-kullu", title: "Manali & Kullu Valley", level: 2 },
  { id: "dharamshala", title: "Dharamshala & McLeod Ganj", level: 2 },
  { id: "other-sights", title: "Spiti, Kasauli & Dalhousie", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "9-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Himachal Pradesh-specific gear ──────────────────────────────────────────
const HIMACHAL_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for hill-station sightseeing, high-altitude side trips, and Himachal's fast-changing mountain weather",
    emoji: "🏔️",
    items: [
      {
        name: "Insulated Jacket",
        description:
          "Temperatures swing sharply between Shimla's evenings, Manali's higher altitude, and any Spiti or Rohtang side trip.",
        price: "₹2,499",
        rating: 4.4,
        reviews: "6.1k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("insulated+jacket+trekking"),
        tag: "Mountain essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Even in summer, evenings across Himachal's hill towns drop into single digits — a proper insulated layer is non-negotiable.",
      },
      {
        name: "Trekking Shoes",
        description:
          "Useful for the Triund trek near Dharamshala, walks around Old Manali, and uneven paths at Kasauli and Kufri.",
        price: "₹2,999",
        rating: 4.5,
        reviews: "7.3k",
        image: "🥾",
        affiliateUrl: amazonSearchUrl("waterproof+trekking+shoes"),
        tag: "Trekking essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Grip and ankle support matter on Himachal's forest trails and cobbled hill-station lanes alike.",
      },
      {
        name: "Rain Jacket / Windcheater",
        description:
          "Monsoon showers and sudden mountain weather changes are common across Shimla, Manali, and Dharamshala.",
        price: "₹1,599",
        rating: 4.3,
        reviews: "4.8k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("packable+rain+jacket+windcheater"),
        tag: "Weather essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Himachal's weather can shift from clear to drizzly within an hour, especially in the hills around Dharamshala.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Handy on long winding drives between Shimla, Manali, and Dharamshala, and on full-day treks like Triund.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Cold temperatures drain batteries faster, and hill-road transit days are long — a backup power source is worth it.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "Covers minor cuts, altitude-related headaches, and motion sickness on Himachal's winding hill roads.",
        price: "₹499",
        rating: 4.4,
        reviews: "5.5k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("basic+first+aid+kit+travel"),
        tag: "Safety essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Between hairpin bends and higher altitudes near Rohtang or Spiti, minor travel ailments are common — better to be prepared.",
      },
      {
        name: "Sunscreen (SPF 50)",
        description:
          "UV exposure increases significantly at altitude — essential for Rohtang, Kufri, and any Spiti extension.",
        price: "₹399",
        rating: 4.5,
        reviews: "10k",
        image: "🧴",
        affiliateUrl: amazonSearchUrl("sunscreen+spf+50+high+altitude"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Thinner air at higher altitudes means much faster sunburn than the SPF number alone suggests — reapply often.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HimachalPradeshGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/manali/hero.jpg"
              alt="Snow-capped Himalayan peaks above a green valley in Himachal Pradesh"
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
                  label: "Himachal Pradesh",
                  href: "/blog?category=himachal-pradesh",
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
                "Himachal Pradesh",
                "Shimla",
                "Manali",
                "Dharamshala",
                "Himalayas",
                "Hill Stations",
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
              Himachal Pradesh Travel Guide: Shimla, Manali & Dharamshala
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              From the colonial charm of Shimla's Mall Road to the Tibetan
              Buddhist calm of McLeod Ganj, apple-orchard valleys to the
              high-altitude cold desert of Spiti — Himachal Pradesh packs more
              range into one state than almost anywhere else in the
              Himalayas.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "20 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Himachal Pradesh, North India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,900 words",
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
                  <h2>Why Himachal Pradesh?</h2>
                  <p>
                    Of all the Indian Himalayan states, <strong>Himachal
                    Pradesh</strong> is by far the most accessible — a state
                    where an overnight bus from Delhi can drop you into pine
                    forests and snow-dusted peaks by morning, yet one that
                    still holds genuinely remote, high-altitude terrain if
                    you're willing to go further.
                  </p>
                  <p>
                    That range is the whole point. <strong>Shimla</strong>{" "}
                    offers colonial-era architecture and a toy train that's a
                    UNESCO World Heritage Site in its own right.{" "}
                    <strong>Manali</strong> and the Kullu Valley combine apple
                    orchards with some of India's most popular adventure
                    sports. <strong>Dharamshala</strong> and its upper
                    neighborhood, McLeod Ganj, have been the seat of the
                    Dalai Lama and the Tibetan government-in-exile since
                    1960, giving the town a distinctly Tibetan Buddhist
                    character found nowhere else in India. And beyond the
                    main valleys, <strong>Spiti</strong> opens into a
                    high-altitude cold desert that feels closer to Ladakh
                    than to the green hills a few hours' drive away.
                  </p>
                  <p>
                    This guide covers Himachal Pradesh at the state level —
                    the major regions, how they connect, and how to plan a
                    trip across more than one of them. If you're headed
                    specifically to Manali, Spiti Valley, or want deep,
                    day-by-day depth on a single destination, our dedicated
                    guides go much further into each.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-sky-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Himachal Pradesh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Himachal Pradesh",
                        },
                        {
                          icon: "✈️",
                          label: "Gateways",
                          value: "Chandigarh, Kullu (Bhuntar)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Shimla, Manali, Dharamshala",
                        },
                        {
                          icon: "🧘",
                          label: "Culture",
                          value: "Tibetan Buddhism, Dev Bhoomi",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,800 – ₹9,000",
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
                  <h2>Best Time to Visit Himachal Pradesh</h2>
                  <p>
                    Because Himachal spans everything from mid-altitude hill
                    stations to high-altitude cold desert, "best time" varies
                    a lot by region — Shimla and Manali have a much longer
                    comfortable window than Spiti, which is only realistically
                    open for a few months a year.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best all-round — our pick",
                        text: "Pleasant days across Shimla, Manali, and Dharamshala, with orchards blooming in spring and Rohtang/Spiti opening up by late May–June.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — landslide risk",
                        text: "Heavy rain causes landslides and road closures on hill routes, especially between Manali and Chandigarh. Spiti, being a rain-shadow desert, is actually a good monsoon escape.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear skies, golden light",
                        text: "Post-monsoon clarity brings some of the best mountain views of the year, with thinner crowds than spring — this is our second favorite window.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Snow season",
                        text: "Shimla and Manali turn white and see a fresh wave of tourists chasing snow. Higher passes (Rohtang, Spiti) are closed entirely; roads can be icy.",
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
                    <strong>Our pick:</strong> Late September to early
                    November for the clearest views and thinner crowds across
                    Shimla, Manali, and Dharamshala. If Spiti is part of your
                    plan, note it's realistically accessible only from around
                    June to early October — build your route around that
                    window first.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Himachal Pradesh</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Chandigarh Airport is the main
                      gateway for Shimla and Dharamshala, with good domestic
                      connectivity. Kullu-Manali Airport (Bhuntar) serves the
                      Manali side directly, and Gaggal Airport near
                      Dharamshala has a smaller set of flights.
                    </li>
                    <li>
                      <strong>By Rail + Toy Train:</strong> The nearest
                      broad-gauge station is Kalka, from where the famous{" "}
                      <strong>Kalka–Shimla toy train</strong> — a UNESCO
                      World Heritage narrow-gauge line — climbs through
                      over a hundred tunnels to Shimla. It's slow, but it's
                      an experience in itself.
                    </li>
                    <li>
                      <strong>By Road:</strong> Overnight Volvo buses run
                      from Delhi to Shimla, Manali, and Dharamshala. Hill
                      roads throughout the state are winding and often
                      narrow — journeys take noticeably longer than the raw
                      distance suggests.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're combining multiple
                    regions, fly into Chandigarh and out of Kullu (or vice
                    versa) to avoid backtracking across the same winding hill
                    roads twice.
                  </div>
                </section>

                {/* ── Shimla ────────────────────────────────────────────── */}
                <section id="shimla">
                  <h2>Shimla: The Colonial Capital</h2>
                  <p>
                    Once the summer capital of British India, <strong>
                    Shimla</strong> retains a distinct colonial character —
                    Tudor-style architecture, a pedestrian-only Mall Road,
                    and a compact ridge-top layout that still shapes how
                    the modern city functions.
                  </p>
                  <ul>
                    <li>
                      <strong>Mall Road & The Ridge:</strong> Shimla's social
                      heart — a pedestrian promenade lined with colonial
                      buildings, cafes, and shops, opening onto The Ridge, the
                      city's main open square with panoramic mountain views.
                    </li>
                    <li>
                      <strong>Christ Church:</strong> India's second-oldest
                      church, a neo-Gothic landmark on The Ridge and one of
                      Shimla's most photographed buildings.
                    </li>
                    <li>
                      <strong>Kufri:</strong> A small hill station about 16 km
                      from Shimla, popular for short horse rides, snow in
                      winter, and views over the Himalayan foothills.
                    </li>
                    <li>
                      <strong>Kalka-Shimla Toy Train:</strong> A UNESCO
                      World Heritage narrow-gauge railway that climbs nearly
                      1,500 meters in altitude across a five-hour journey —
                      worth doing at least one-way if your schedule allows.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book toy train tickets well
                    ahead in peak season — the more scenic window seats sell
                    out fast, and the "Rail Motor" railcar option offers even
                    better views than the standard train.
                  </div>
                </section>

                {/* ── Manali & Kullu Valley ─────────────────────────────── */}
                <section id="manali-kullu">
                  <h2>Manali & Kullu Valley</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="The pagoda-style Hadimba Devi Temple set in a cedar forest near Manali"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    At the northern end of the Kullu Valley, <strong>
                    Manali</strong> is Himachal's best-known hill station and
                    the state's adventure hub. Since it already has its own
                    full guide on this site, here's the short version: base
                    yourself in Old Manali for cafes and a laid-back
                    traveler scene, ride the Atal Tunnel or drive up toward{" "}
                    <strong>Rohtang Pass</strong> for high-altitude
                    landscapes, and head to <strong>Solang Valley</strong>{" "}
                    for paragliding, zorbing, and (in winter) skiing.
                  </p>
                  <p>
                    Further south, the wider <strong>Kullu Valley</strong>{" "}
                    is known for its apple orchards, whitewater rafting on
                    the Beas River, and Kullu shawls, sold at factory outlets
                    like Bhuttico. Naggar, roughly midway between Manali and
                    Kullu town, has a historic wooden castle and a quieter,
                    less commercial feel than either.
                  </p>
                  <p>
                    <em>
                      For a full Manali itinerary — including a day-by-day
                      plan, detailed place-by-place breakdowns, and specific
                      café and stay recommendations — see our dedicated
                      Manali travel guide.
                    </em>
                  </p>
                </section>

                {/* ── Dharamshala ───────────────────────────────────────── */}
                <section id="dharamshala">
                  <h2>Dharamshala & McLeod Ganj</h2>
                  <p>
                    <strong>Dharamshala</strong>, and particularly its upper
                    neighborhood <strong>McLeod Ganj</strong>, has been home
                    to the 14th Dalai Lama and the Tibetan
                    government-in-exile since 1960, giving the town a
                    genuinely distinct Tibetan Buddhist identity within
                    Himachal.
                  </p>
                  <ul>
                    <li>
                      <strong>Tsuglagkhang Complex:</strong> The Dalai Lama's
                      residence and the main Tibetan Buddhist temple complex
                      in McLeod Ganj, open to visitors and often busy with
                      maroon-robed monks and pilgrims.
                    </li>
                    <li>
                      <strong>Triund Trek:</strong> A popular day or overnight
                      trek (roughly 9 km one-way) climbing out of McLeod
                      Ganj to a ridgeline meadow with sweeping Dhauladhar
                      range views — one of the more accessible Himalayan
                      treks in the country.
                    </li>
                    <li>
                      <strong>Bhagsu Falls:</strong> A short, popular walk
                      from Bhagsu village to a modest waterfall, with cafes
                      and guesthouses lining the trail.
                    </li>
                    <li>
                      <strong>Norbulingka Institute:</strong> A center for
                      preserving Tibetan art and culture near lower
                      Dharamshala, with workshops, a temple, and Japanese-
                      style gardens.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Check the Dalai Lama's public
                    teaching schedule before your visit — attending one (free,
                    with registration) is a genuinely rare experience if the
                    timing lines up.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Spiti, Kasauli & Dalhousie</h2>
                  <ul>
                    <li>
                      <strong>Spiti Valley:</strong> A high-altitude cold
                      desert bordering Tibet, reachable roughly June through
                      October before winter snow cuts it off. Monasteries,
                      lunar landscapes, and a completely different pace of
                      travel than the rest of Himachal — see our dedicated
                      Spiti Valley guide for the full depth this region
                      deserves.
                    </li>
                    <li>
                      <strong>Kasauli:</strong> A small, quiet cantonment
                      hill station close to Chandigarh, known for colonial
                      bungalows, pine forests, and a noticeably slower pace
                      than Shimla or Manali.
                    </li>
                    <li>
                      <strong>Chamba & Dalhousie:</strong> Dalhousie is a
                      colonial-era hill station spread across five hills,
                      while nearby Chamba town preserves centuries of hill-
                      state temple architecture and palace heritage.
                    </li>
                    <li>
                      <strong>Kangra Valley:</strong> Home to sprawling tea
                      gardens around Palampur, the historic Kangra Fort, and
                      the Masroor Rock Cut Temples — a green, lower-altitude
                      counterpoint to the high mountains further north.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Given Himachal's spread, plan on basing yourself in at
                    least three hubs — Shimla, Manali, and Dharamshala —
                    rather than trying to day-trip between them.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,800/night",
                        picks: [
                          "Backpacker hostels, Old Manali",
                          "Guesthouses, McLeod Ganj",
                          "Budget hotels, lower Shimla",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹6,000/night",
                        picks: [
                          "Heritage-style hotels, Shimla Mall Road",
                          "Resort hotels, Manali/Kullu",
                          "Boutique stays, Dharamshala",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹7,000–₹22,000+/night",
                        picks: [
                          "Colonial-era heritage hotels, Shimla",
                          "Luxury resorts, Manali/Solang",
                          "Mountain-view luxury stays, Dharamshala",
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
                    Prices spike heavily during peak snow season (Dec–Jan) and
                    the May–June summer rush — book at least a few weeks
                    ahead if you're traveling during either window.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Himachal Pradesh</h2>
                  <ul>
                    <li>
                      <strong>Himachali Dham:</strong> A festive, multi-course
                      thali traditionally served at weddings and religious
                      occasions, cooked by specialist chefs called "botis" —
                      typically vegetarian, rich in ghee, and served on leaf
                      plates.
                    </li>
                    <li>
                      <strong>Siddu:</strong> Steamed wheat bread stuffed with
                      poppy seeds, walnuts, or dal, served with ghee — a
                      Himachali staple found at dhabas across the state.
                    </li>
                    <li>
                      <strong>Madra & Chana Madra:</strong> A yogurt-based
                      curry, often made with chickpeas, slow-cooked with
                      whole spices — a signature dish of Himachali cuisine.
                    </li>
                    <li>
                      <strong>Trout:</strong> Freshly caught from Himachal's
                      cold mountain streams, typically pan-fried with garlic
                      and butter — widely available around Manali and
                      Kullu.
                    </li>
                    <li>
                      <strong>Apple products:</strong> The Kullu-Manali belt's
                      apples are famous nationwide — fresh juice, jams, and
                      apple cider are sold at roadside stalls throughout the
                      region.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>9-Day Himachal Pradesh Itinerary</h2>
                  <p>
                    Nine days is a comfortable window to cover Shimla,
                    Manali/Kullu, and Dharamshala without excessive rushing,
                    with a short taste of Spiti if your dates fall within its
                    open season.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Shimla",
                        color: "bg-sky-700",
                        activities: [
                          "Arrive via Kalka-Shimla toy train or road",
                          "Mall Road, The Ridge, Christ Church",
                          "Day trip to Kufri",
                        ],
                      },
                      {
                        day: "Day 3–4",
                        title: "Manali & Kullu Valley",
                        color: "bg-forest-600",
                        activities: [
                          "Travel to Manali (~7–8 hrs via Kullu)",
                          "Old Manali, Hadimba Temple, Solang Valley",
                          "Optional Rohtang Pass day trip (permit required)",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Optional: Spiti Taste (season permitting)",
                        color: "bg-amber-700",
                        activities: [
                          "Only if traveling June–early Oct",
                          "Short excursion toward Kaza or Chandratal",
                          "Otherwise, use as a buffer/rest day in Manali",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Travel to Dharamshala",
                        color: "bg-stone-600",
                        activities: [
                          "Drive from Manali to Dharamshala (~6–7 hrs)",
                          "Evening arrival, settle into McLeod Ganj",
                        ],
                      },
                      {
                        day: "Day 7–8",
                        title: "Dharamshala & McLeod Ganj",
                        color: "bg-purple-700",
                        activities: [
                          "Tsuglagkhang Complex and Dalai Lama's residence",
                          "Triund trek (day hike or overnight)",
                          "Bhagsu Falls and Norbulingka Institute",
                        ],
                      },
                      {
                        day: "Day 9",
                        title: "Departure",
                        color: "bg-red-700",
                        activities: [
                          "Transfer to Gaggal or Chandigarh airport",
                          "Or onward road/rail connection",
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
                        <tr className="bg-sky-50">
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
                          ["Food/day", "₹500", "₹1,200", "₹2,800"],
                          [
                            "Local transport/day",
                            "₹600",
                            "₹1,500",
                            "₹3,500",
                          ],
                          [
                            "Activities & permits/day",
                            "₹800",
                            "₹2,200",
                            "₹5,000",
                          ],
                          ["Daily total", "₹2,900", "₹8,400", "₹21,300"],
                          [
                            "9-Day trip total",
                            "₹26,100",
                            "₹75,600",
                            "₹191,700",
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
                    * Excludes flights. Inter-city travel between Shimla,
                    Manali, and Dharamshala adds up over a multi-region
                    trip — private cabs cost significantly more than shared
                    Volvo buses or HRTC buses.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Himachal Pradesh</h2>
                  <ul>
                    <li>
                      <strong>Watch for altitude sickness at higher
                      elevations:</strong> Rohtang Pass, Spiti, and any trek
                      above 3,000m warrant acclimatization time and awareness
                      of symptoms — don't rush straight up from lower towns.
                    </li>
                    <li>
                      <strong>Drive cautiously on hill roads:</strong>{" "}
                      Winding, often narrow roads with sheer drops are the
                      norm — hire experienced local drivers rather than
                      self-driving unfamiliar routes, especially at night.
                    </li>
                    <li>
                      <strong>Book ahead in peak and snow season:</strong>{" "}
                      Accommodation across Shimla, Manali, and Dharamshala
                      fills up fast during the May–June and Dec–Jan rushes —
                      book at least a few weeks in advance.
                    </li>
                    <li>
                      <strong>Check Spiti's seasonal access before
                      planning:</strong> The region is realistically only
                      open roughly June through early October — confirm
                      current road conditions if it's part of your route.
                    </li>
                    <li>
                      <strong>Pack layers regardless of season:</strong>{" "}
                      Even summer evenings across Himachal's hill towns drop
                      into single digits — a warm layer is useful
                      year-round.
                    </li>
                    <li>
                      <strong>Carry cash outside main towns:</strong> Card
                      acceptance and ATM reliability drop off quickly once
                      you're outside Shimla, Manali, and Dharamshala's main
                      commercial areas.
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
                          "Build acclimatization time into high-altitude plans",
                          "Book accommodation weeks ahead in peak/snow season",
                          "Hire experienced local drivers for hill roads",
                          "Pack warm layers even in summer",
                          "Check Spiti's road status before committing to it",
                          "Carry cash for smaller towns and villages",
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
                          "Rush straight to high altitude without acclimatizing",
                          "Self-drive unfamiliar hill roads at night",
                          "Underestimate travel time between regions",
                          "Attempt Spiti outside its June–October window",
                          "Rely on cards outside major towns",
                          "Overpack your itinerary across three+ regions",
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
                  "Himachal Pradesh",
                  "Shimla",
                  "Manali",
                  "Dharamshala",
                  "McLeod Ganj",
                  "Kullu Valley",
                  "Himalayas",
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
                sections={HIMACHAL_GEAR}
                destination="Himachal Pradesh"
              />

              <RelatedPostsGrid currentSlug="himachal-pradesh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="himachal-pradesh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
