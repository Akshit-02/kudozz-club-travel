// src/app/blog/manipur-travel-guide/page.tsx
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
  title: "Manipur Travel Guide: Loktak Lake, Imphal & Kangla Fort",
  description:
    "The complete Manipur travel guide — the floating islands of Loktak Lake, Imphal's Kangla Fort and war cemeteries, Keibul Lamjao's floating national park, Meitei culture, where to stay and eat, and a full itinerary through India's 'Jewel of the East.'",
  keywords:
    "Manipur travel guide, Loktak Lake, Imphal travel guide, Kangla Fort, Keibul Lamjao National Park, Sangai deer, Manipur itinerary, Northeast India travel, Ima Keithel market",
  openGraph: {
    title: "Manipur Travel Guide: Loktak Lake, Imphal & Kangla Fort",
    description:
      "Floating islands on a shimmering lake, the world's only floating national park, and an all-women-run market centuries old — the complete guide to Manipur.",
    url: "https://club.kudozz.in/blog/manipur-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Calm lake water reflecting green hills, evoking Manipur's Loktak Lake in Northeast India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipur Travel Guide: Loktak Lake, Imphal & Kangla Fort",
    description:
      "Floating islands, a historic fort, and an all-women market — the complete guide to Manipur.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/manipur-travel-guide",
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
          headline: "Manipur Travel Guide: Loktak Lake, Imphal & Kangla Fort",
          description: "The complete Manipur travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/manipur-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Manipur",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Manipur",
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
                name: "Manipur Travel Guide",
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
  { id: "introduction", title: "Why Manipur?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Manipur", level: 2 },
  { id: "imphal", title: "Imphal: Kangla Fort & War Cemeteries", level: 2 },
  { id: "loktak-lake", title: "Loktak Lake & Floating Islands", level: 2 },
  { id: "other-sights", title: "Moirang, Andro & Dzuko Valley Side", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Manipur-specific gear ─────────────────────────────────────────────────
const MANIPUR_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear for boat rides on Loktak Lake, humid lowland terrain, and long day trips around Imphal",
    emoji: "🛶",
    items: [
      {
        name: "Quick-Dry Clothing",
        description:
          "Boat rides across Loktak Lake and visits to the floating phumdis mean a real chance of getting splashed or damp.",
        price: "₹899",
        rating: 4.3,
        reviews: "6.1k",
        image: "👕",
        affiliateUrl: amazonSearchUrl("quick+dry+travel+clothing"),
        tag: "Lake essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "Between the boat crossing and humid lake air, quick-dry fabric stays far more comfortable than cotton.",
      },
      {
        name: "Comfortable Walking Shoes",
        description:
          "Kangla Fort's grounds and the walk around the floating islands both involve uneven, sometimes muddy terrain.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "Sightseeing essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "The phumdis at Loktak Lake are soft, floating vegetation mats — sturdy footwear with grip matters here.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Manipur's wetlands around Loktak Lake and Keibul Lamjao make mosquito presence significant, especially at dawn and dusk.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Wetland essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "Much of Manipur's sightseeing happens around lakeside and wetland settings where mosquitoes are a genuine everyday factor.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for day trips to Moirang and around Loktak Lake, where charging infrastructure thins out quickly.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Day-trip essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "Outside Imphal, charging points thin out quickly — a backup battery avoids being stranded on longer excursions.",
      },
      {
        name: "Reusable Water Bottle",
        description:
          "Handy across long days visiting Imphal's sights, Loktak Lake, and Moirang's war memorial.",
        price: "₹699",
        rating: 4.5,
        reviews: "9.3k",
        image: "🍶",
        affiliateUrl: amazonSearchUrl("insulated+water+bottle+steel"),
        tag: "Everyday essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Standalone shops thin out between major sites — carrying your own water is the practical choice.",
      },
      {
        name: "Basic First Aid Kit",
        description:
          "Worth having given the state's modest medical infrastructure outside Imphal.",
        price: "₹599",
        rating: 4.4,
        reviews: "3.9k",
        image: "🩹",
        affiliateUrl: amazonSearchUrl("travel+first+aid+kit"),
        tag: "Small-town essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Medical facilities are concentrated in Imphal — basic self-sufficiency is worth having if traveling to Moirang or rural lake villages.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ManipurGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Calm lake water reflecting green hills, evoking Manipur's Loktak Lake in Northeast India"
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
                { label: "Manipur", href: "/blog?category=manipur" },
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
                "Manipur",
                "Loktak Lake",
                "Imphal",
                "Kangla Fort",
                "Meitei Culture",
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
              Manipur Travel Guide: Loktak Lake, Imphal & Kangla Fort
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Floating islands drifting across a shimmering lake, the
              world's only floating national park, and a market run
              entirely by women for centuries — Manipur has long been
              called the "Jewel of the East," and it's not an exaggeration.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Manipur, Northeast India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,800 words",
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
                  <h2>Why Manipur?</h2>
                  <p>
                    Ringed by hills and centered on a fertile valley,{" "}
                    <strong>Manipur</strong> has one of Northeast India's
                    most distinct cultures, home to the Meitei people in the
                    valley and numerous Naga and Kuki-Zo tribal communities
                    in the surrounding hills. It's also one of India's most
                    naturally striking states, anchored by Loktak Lake —
                    the largest freshwater lake in Northeast India, famous
                    for its floating islands of vegetation called phumdis.
                  </p>
                  <p>
                    Manipur's capital, <strong>Imphal</strong>, blends deep
                    history — Kangla Fort, once the seat of Manipuri kings,
                    and war cemeteries from the pivotal WWII Battle of
                    Imphal — with a vibrant present, best seen at Ima
                    Keithel, an all-women-run market with roots going back
                    centuries.
                  </p>
                  <p>
                    Given periodic security-related travel advisories in
                    parts of the state, check current conditions before
                    finalizing plans, and stick to well-established tourist
                    routes around Imphal and Loktak Lake.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛶</span> Manipur at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "Manipur" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Imphal (IMF)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Loktak Lake, Kangla Fort",
                        },
                        {
                          icon: "🎭",
                          label: "Culture",
                          value: "Meitei & Tribal Heritage",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,300 – ₹5,500",
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
                  <h2>Best Time to Visit Manipur</h2>
                  <p>
                    Manipur's valley climate is milder than the surrounding
                    hills — timing matters for both comfort and clarity of
                    views over Loktak Lake.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry, and clear (10–24°C) — the most comfortable window for Loktak Lake boat rides and Imphal sightseeing.",
                      },
                      {
                        season: "Nov",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Sangai Festival",
                        text: "Manipur's flagship cultural festival, showcasing music, dance, sports, and cuisine from across the state's communities.",
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
                        text: "Manipur receives substantial rain in this window; Loktak Lake's water levels rise and boat access can be affected.",
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
                    cool conditions that make both a Loktak Lake boat
                    crossing and Imphal's walking sights genuinely pleasant,
                    with a chance to catch the Sangai Festival in November.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Manipur</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Imphal Airport (IMF) has
                      regular flights from Kolkata, Guwahati, and Delhi —
                      by far the fastest way in.
                    </li>
                    <li>
                      <strong>By Rail:</strong> Jiribam is Manipur's nearest
                      rail link, connected to the broader Indian rail
                      network via Assam, though journey times are long from
                      most major cities.
                    </li>
                    <li>
                      <strong>By Road:</strong> Imphal is connected to
                      Guwahati (~580 km) via NH-2, though drive times are
                      substantial given the hilly terrain.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Flying into Imphal is by far
                    the most practical option — road and rail journeys from
                    major Indian cities take a day or more given Manipur's
                    location.
                  </div>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Check current advisories:</strong> Parts of
                    Manipur have periodically seen security-related travel
                    advisories — check the latest guidance before travel and
                    stick to established tourist routes around Imphal and
                    Loktak Lake.
                  </div>
                </section>

                {/* ── Imphal ────────────────────────────────────────────── */}
                <section id="imphal">
                  <h2>Imphal: Kangla Fort & War Cemeteries</h2>
                  <p>
                    Manipur's capital sits in the middle of a fertile
                    valley — most visitors base themselves here for the
                    bulk of the trip.
                  </p>
                  <ul>
                    <li>
                      <strong>Kangla Fort:</strong> The former seat of
                      Manipuri kings, a historic complex with temples,
                      moats, and the sacred Kangla-Sha (dragon) statues —
                      the city's most significant landmark.
                    </li>
                    <li>
                      <strong>Imphal War Cemetery:</strong> A beautifully
                      maintained memorial to Allied soldiers who died in the
                      1944 Battle of Imphal, a decisive WWII turning point
                      in the Asian theatre.
                    </li>
                    <li>
                      <strong>Ima Keithel (Mother's Market):</strong> An
                      all-women-run market with centuries of history, one of
                      the largest of its kind in Asia — a genuine highlight
                      of any Imphal visit.
                    </li>
                  </ul>
                </section>

                {/* ── Loktak Lake ───────────────────────────────────────── */}
                <section id="loktak-lake">
                  <h2>Loktak Lake & Floating Islands</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Green hills and water landscape, evoking Manipur's Loktak Lake and surrounding countryside"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Roughly 48 km from Imphal, <strong>Loktak Lake</strong>{" "}
                    is Northeast India's largest freshwater lake, famous for
                    its phumdis — floating masses of vegetation and soil
                    that drift across the water and even support small
                    fishing villages built on them.
                  </p>
                  <ul>
                    <li>
                      <strong>Keibul Lamjao National Park:</strong> The
                      world's only floating national park, set within Loktak
                      Lake, home to the endangered Sangai (brow-antlered
                      deer), Manipur's state animal.
                    </li>
                    <li>
                      <strong>Sendra Island:</strong> A viewpoint and
                      tourism complex offering panoramic views over the lake
                      and its floating islands — the standard first stop for
                      most visitors.
                    </li>
                    <li>
                      <strong>Phumdi villages:</strong> Boat rides through
                      the lake pass small fishing communities living
                      directly on the floating phumdis — a genuinely unusual
                      sight found almost nowhere else.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a boat ride early
                    morning for the calmest water and the best chance of
                    spotting Sangai deer at Keibul Lamjao before the heat
                    picks up.
                  </div>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Moirang, Andro & Nearby Villages</h2>
                  <ul>
                    <li>
                      <strong>Moirang:</strong> A historic town on Loktak
                      Lake's shore, home to the INA Museum, marking where
                      the Indian National Army first raised its flag in
                      1944 during WWII.
                    </li>
                    <li>
                      <strong>Andro Village:</strong> A traditional Meitei
                      village near Imphal known for pottery craft and a
                      small cultural museum showcasing local heritage.
                    </li>
                    <li>
                      <strong>Khonghampat Orchidarium:</strong> A short
                      drive from Imphal, home to hundreds of orchid
                      species, best visited in the spring bloom season.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation is concentrated in Imphal — outside the
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
                          "Guesthouses, central Imphal",
                          "Tourist lodges (Manipur Tourism)",
                          "Basic stays, Moirang",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Business hotels, Imphal",
                          "Hotel Imphal",
                          "Boutique stays, central Imphal",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹5,000–₹10,000+/night",
                        picks: [
                          "Classic Hotel Imphal",
                          "Premium business hotels, Imphal",
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
                    Base yourself in Imphal for the whole trip and take day
                    trips to Loktak Lake and Moirang — dedicated tourist
                    accommodation elsewhere in the state is genuinely
                    limited.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Manipur</h2>
                  <ul>
                    <li>
                      <strong>Eromba:</strong> A staple Meitei dish of mashed
                      boiled vegetables with fermented fish (ngari) and
                      chilies — a good introduction to Manipuri flavors.
                    </li>
                    <li>
                      <strong>Chak-hao kheer:</strong> A dessert made from
                      Manipur's distinctive black rice, naturally sweet and
                      aromatic.
                    </li>
                    <li>
                      <strong>Singju:</strong> A tangy salad of shredded
                      vegetables, herbs, and fermented fish or roasted
                      chickpea powder — a common everyday snack.
                    </li>
                    <li>
                      <strong>Ngari-based curries:</strong> Fermented fish
                      features heavily across Manipuri cuisine, giving many
                      dishes their distinctive sharp flavor.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Manipur Itinerary</h2>
                  <p>
                    Five days is a reasonable minimum to cover Imphal,
                    Loktak Lake, and Moirang without excessive rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Imphal",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Kangla Fort and Imphal War Cemetery",
                          "Evening: Ima Keithel market",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Loktak Lake",
                        color: "bg-sky-600",
                        activities: [
                          "Drive to Loktak Lake (~1.5 hrs)",
                          "Sendra Island viewpoint, boat ride through phumdis",
                          "Return to Imphal",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Keibul Lamjao & Moirang",
                        color: "bg-forest-600",
                        activities: [
                          "Early boat ride into Keibul Lamjao National Park",
                          "Moirang INA Museum",
                          "Return to Imphal",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Andro & Local Craft Villages",
                        color: "bg-stone-600",
                        activities: [
                          "Andro Village pottery and cultural museum",
                          "Khonghampat Orchidarium",
                          "Evening in Imphal",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Imphal & Departure",
                        color: "bg-purple-700",
                        activities: [
                          "Last-minute shopping at Ima Keithel",
                          "Local café or restaurant",
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
                            "₹450",
                            "₹1,100",
                            "₹2,600",
                          ],
                          ["Activities/day", "₹250", "₹550", "₹1,200"],
                          ["Daily total", "₹2,100", "₹5,550", "₹12,800"],
                          [
                            "5-Day trip total",
                            "₹10,500",
                            "₹27,750",
                            "₹64,000",
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
                    * Excludes flights to Imphal. Local transport costs
                    include boat rides on Loktak Lake, which are typically
                    charged per boat rather than per person.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Manipur</h2>
                  <ul>
                    <li>
                      <strong>Check current travel advisories:</strong> Parts
                      of Manipur have periodically seen security-related
                      advisories — confirm the latest guidance and stick to
                      established tourist routes.
                    </li>
                    <li>
                      <strong>Hire a car with driver for day trips:</strong>{" "}
                      Public transport to Loktak Lake and Moirang is limited
                      and slow — a private vehicle is far more practical.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance is inconsistent outside Imphal's main
                      commercial areas.
                    </li>
                    <li>
                      <strong>Book flights well ahead in peak season:</strong>{" "}
                      Imphal has limited flight frequency compared to
                      larger Northeastern hubs like Guwahati.
                    </li>
                    <li>
                      <strong>Visit Ima Keithel respectfully:</strong> The
                      market is run entirely by women vendors — ask before
                      photographing individual stallholders.
                    </li>
                    <li>
                      <strong>Book Loktak Lake boats through official
                      counters:</strong> Sendra Island and Keibul Lamjao have
                      designated boat operators — use these for a safer,
                      fairly priced ride.
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
                          "Check current advisories before finalizing plans",
                          "Hire a car with driver for Loktak Lake and Moirang",
                          "Book Imphal flights well ahead in peak season",
                          "Try Meitei dishes like eromba and chak-hao kheer",
                          "Book Loktak boat rides through official counters",
                          "Ask permission before photographing market vendors",
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
                          "Travel to unfamiliar areas without checking advisories",
                          "Rely on public transport for Loktak Lake or Moirang",
                          "Rely on cards outside Imphal's main areas",
                          "Book informal, unlicensed boat operators",
                          "Rush the Loktak Lake visit into a couple of hours",
                          "Skip mosquito precautions around the wetlands",
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
                  "Manipur",
                  "Loktak Lake",
                  "Imphal",
                  "Kangla Fort",
                  "Keibul Lamjao",
                  "Meitei Culture",
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
                sections={MANIPUR_GEAR}
                destination="Manipur"
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
