// src/app/blog/west-bengal-travel-guide/page.tsx
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
  title: "West Bengal Travel Guide: Kolkata, Darjeeling & Sundarbans",
  description:
    "The complete West Bengal travel guide — Kolkata's colonial architecture and food, Darjeeling's tea gardens and Toy Train, the Sundarbans mangroves and Royal Bengal Tiger, where to stay and eat, and a full itinerary connecting the plains to the hills.",
  keywords:
    "West Bengal travel guide, Kolkata travel guide, Darjeeling travel guide, Sundarbans tiger safari, Toy Train Darjeeling, Victoria Memorial, Kolkata food, Kalimpong, Digha beach, West Bengal itinerary",
  openGraph: {
    title: "West Bengal Travel Guide: Kolkata, Darjeeling & Sundarbans",
    description:
      "Colonial-era Kolkata, tea gardens in the clouds at Darjeeling, and the mangrove tiger reserve of the Sundarbans — the complete guide to West Bengal.",
    url: "https://club.kudozz.in/blog/west-bengal-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Misty green hills and tea gardens, evoking Darjeeling's tea estates in North Bengal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "West Bengal Travel Guide: Kolkata, Darjeeling & Sundarbans",
    description:
      "Colonial Kolkata, Himalayan tea gardens, and mangrove tiger country — the complete guide to West Bengal.",
    images: ["/images/destinations/meghalaya/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/west-bengal-travel-guide",
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
            "West Bengal Travel Guide: Kolkata, Darjeeling & Sundarbans",
          description: "The complete West Bengal travel guide.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/west-bengal-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "West Bengal",
            address: {
              "@type": "PostalAddress",
              addressRegion: "West Bengal",
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
                name: "West Bengal Travel Guide",
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
  { id: "introduction", title: "Why West Bengal?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "kolkata", title: "Kolkata: The City of Joy", level: 2 },
  { id: "darjeeling", title: "Darjeeling: Tea & the Toy Train", level: 2 },
  { id: "sundarbans", title: "Sundarbans: Mangroves & Tigers", level: 2 },
  { id: "other-regions", title: "Kalimpong, Dooars & Digha", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "7-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── West Bengal-specific gear ─────────────────────────────────────────────────
const WEST_BENGAL_GEAR: GearSection[] = [
  {
    title: "Things Worth Carrying",
    subtitle:
      "Gear spanning humid Kolkata streets, cold Darjeeling mornings, and mangrove boat safaris",
    emoji: "🍃",
    items: [
      {
        name: "Layered Fleece Jacket",
        description:
          "Darjeeling and Kalimpong sit at altitude and get genuinely cold, especially at sunrise viewpoints like Tiger Hill — a stark contrast to muggy Kolkata.",
        price: "₹1,899",
        rating: 4.5,
        reviews: "7.4k",
        image: "🧥",
        affiliateUrl: amazonSearchUrl("fleece+jacket+travel+trekking"),
        tag: "Hill essential",
        tagColor: "bg-sky-100 text-sky-700",
        why: "The temperature swing between Kolkata and Darjeeling within the same trip regularly exceeds 15°C — packing layers matters more here than in most single-climate trips.",
      },
      {
        name: "Comfortable Walking Shoes",
        description:
          "Kolkata's colonial architecture, College Street, and the Darjeeling Mall Road all reward walking — good shoes matter across both legs of the trip.",
        price: "₹1,499",
        rating: 4.4,
        reviews: "8.2k",
        image: "👟",
        affiliateUrl: amazonSearchUrl("comfortable+walking+shoes+travel"),
        tag: "City & hill essential",
        tagColor: "bg-stone-100 text-stone-700",
        why: "Between Kolkata's uneven pavements and Darjeeling's steep hill-town streets, footwear needs to handle two very different terrains.",
      },
      {
        name: "Mosquito Repellent",
        description:
          "Essential for both Kolkata's humid evenings and especially a Sundarbans mangrove trip, where mosquito presence is significant.",
        price: "₹199",
        rating: 4.3,
        reviews: "12k",
        image: "🦟",
        affiliateUrl: amazonSearchUrl("mosquito+repellent+travel"),
        tag: "Sundarbans essential",
        tagColor: "bg-forest-100 text-forest-700",
        why: "The Sundarbans' dense mangrove environment has a serious mosquito presence year-round — this isn't optional if that leg is on your itinerary.",
      },
      {
        name: "Binoculars",
        description:
          "For Sundarbans tiger and bird spotting from the boat, and for wide Kanchenjunga views from Darjeeling's viewpoints.",
        price: "₹1,299",
        rating: 4.4,
        reviews: "5.3k",
        image: "🔭",
        affiliateUrl: amazonSearchUrl("compact+binoculars+travel"),
        tag: "Wildlife essential",
        tagColor: "bg-amber-100 text-amber-700",
        why: "Royal Bengal Tiger sightings in the Sundarbans are rare and distant when they happen — binoculars significantly improve your chances of actually seeing one.",
      },
      {
        name: "Power Bank (10,000 mAh)",
        description:
          "Useful for the long train or road transfers between Kolkata, NJP/Siliguri, and Darjeeling.",
        price: "₹1,299",
        rating: 4.5,
        reviews: "9.7k",
        image: "🔋",
        affiliateUrl: amazonSearchUrl("power+bank+10000mAh+travel"),
        tag: "Travel-day essential",
        tagColor: "bg-purple-100 text-purple-700",
        why: "The Kolkata–Darjeeling transfer alone can take most of a day between train and shared-jeep legs — a charged power bank avoids a dead phone mid-journey.",
      },
      {
        name: "Rain Jacket / Poncho",
        description:
          "North Bengal's hill regions see sudden showers even outside peak monsoon, and Kolkata's monsoon downpours are intense and frequent.",
        price: "₹599",
        rating: 4.3,
        reviews: "4.6k",
        image: "🌂",
        affiliateUrl: amazonSearchUrl("rain+jacket+poncho+travel"),
        tag: "Weather essential",
        tagColor: "bg-red-100 text-red-700",
        why: "Darjeeling's weather can turn from clear to misty and wet within an hour — worth having regardless of season.",
      },
    ],
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function WestBengalGuidePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/meghalaya/hero.jpg"
              alt="Misty green hills and tea gardens, evoking Darjeeling's tea estates in North Bengal"
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
                { label: "West Bengal", href: "/blog?category=west-bengal" },
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
                "Kolkata",
                "Darjeeling",
                "Sundarbans",
                "Tea Gardens",
                "Toy Train",
                "State Guide",
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
              West Bengal Travel Guide: Kolkata, Darjeeling & Sundarbans
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Colonial-era grandeur in Kolkata, tea gardens climbing into the
              clouds at Darjeeling, and mangrove creeks where the Royal
              Bengal Tiger still roams — few Indian states cover this much
              ground in one trip.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "18 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "West Bengal, Eastern India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,400 words",
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
                  <h2>Why West Bengal?</h2>
                  <p>
                    Few Indian states pack in as much contrast as{" "}
                    <strong>West Bengal</strong> — a single trip can take you
                    from the colonial grandeur and intellectual energy of{" "}
                    <strong>Kolkata</strong>, up into the Himalayan foothills
                    of <strong>Darjeeling</strong> for tea and mountain
                    views, and down into the tidal mangrove forests of the{" "}
                    <strong>Sundarbans</strong>, home to the Royal Bengal
                    Tiger.
                  </p>
                  <p>
                    Kolkata alone justifies a visit — Victoria Memorial,
                    Howrah Bridge, College Street's book market, and a food
                    culture that rivals anywhere in India. But it's the
                    state's range that makes it special: nowhere else in the
                    country can you go from a UNESCO World Heritage Toy Train
                    ride through tea estates to a tiger-tracking boat safari
                    in mangrove creeks within the same week.
                  </p>
                  <p>
                    West Bengal rewards travellers who give it real time — a
                    quick weekend only scratches Kolkata, while a week or
                    more lets you properly experience the hills and the
                    Sundarbans as well.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🍃</span> West Bengal at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "State", value: "West Bengal" },
                        {
                          icon: "✈️",
                          label: "Gateway",
                          value: "Kolkata (CCU) / Bagdogra (IXB)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🐅",
                          label: "Known For",
                          value: "Kolkata Culture, Tea, Tigers",
                        },
                        {
                          icon: "🚂",
                          label: "Must-Do",
                          value: "Darjeeling Toy Train (UNESCO)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹7,000",
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
                  <h2>Best Time to Visit West Bengal</h2>
                  <p>
                    Because the state spans coastal plains and Himalayan
                    foothills, timing depends heavily on which regions you
                    plan to cover.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant in Kolkata (18–28°C), clear mountain views in Darjeeling, and comfortable conditions for Sundarbans boat safaris — the ideal window across all three regions.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot in the plains",
                        text: "Kolkata and Digha get uncomfortably hot and humid; Darjeeling remains pleasant and is a good escape from the plains' heat during this window.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy, avoid the hills",
                        text: "Heavy rainfall statewide; landslide risk makes Darjeeling and Kalimpong genuinely risky, and the Sundarbans becomes difficult to navigate by boat.",
                      },
                      {
                        season: "Oct – Nov",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Durga Puja — Kolkata at its best",
                        text: "Kolkata's biggest festival transforms the city with elaborate pandals — an unforgettable time to visit, but book accommodation well ahead.",
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
                    <strong>Our pick:</strong> October to March — the only
                    window that works well across Kolkata, Darjeeling, and
                    the Sundarbans simultaneously.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach West Bengal</h2>
                  <ul>
                    <li>
                      <strong>To Kolkata:</strong> Netaji Subhas Chandra Bose
                      International Airport (CCU) has extensive domestic and
                      international connections. Howrah and Sealdah are major
                      railway stations linking Kolkata to the rest of India.
                    </li>
                    <li>
                      <strong>To Darjeeling:</strong> Fly into Bagdogra
                      Airport (IXB) or take a train to New Jalpaiguri (NJP),
                      followed by a 3-hour shared jeep or taxi ride up to
                      Darjeeling (~70 km).
                    </li>
                    <li>
                      <strong>To Sundarbans:</strong> Reached via Godkhali or
                      Sonakhali (roughly 3 hrs from Kolkata by road), followed
                      by a boat transfer — almost always booked as part of an
                      organised tour package.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The overnight train from
                    Kolkata to NJP is a comfortable, popular way to reach
                    Darjeeling — you arrive rested and ready for the drive up,
                    rather than losing a full day to travel.
                  </div>
                </section>

                {/* ── Kolkata ───────────────────────────────────────────── */}
                <section id="kolkata">
                  <h2>Kolkata: The City of Joy</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/puducherry/french.jpg"
                      alt="Colonial-era architecture with ornate facades, evoking Kolkata's British-era buildings"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    India's former colonial capital, Kolkata carries a
                    density of grand 19th-century architecture unmatched
                    outside a handful of Indian cities, alongside a fierce
                    intellectual and artistic culture that locals wear with
                    pride.
                  </p>
                  <ul>
                    <li>
                      <strong>Victoria Memorial:</strong> A vast white marble
                      monument set in manicured gardens — Kolkata's most
                      iconic landmark and a museum of British India history.
                    </li>
                    <li>
                      <strong>Howrah Bridge:</strong> One of the world's
                      busiest cantilever bridges, especially striking at
                      sunrise or from a boat on the Hooghly River.
                    </li>
                    <li>
                      <strong>College Street:</strong> Asia's largest
                      second-hand book market, sprawling for nearly a
                      kilometre around Presidency University and Calcutta
                      University.
                    </li>
                    <li>
                      <strong>Dakshineswar & Belur Math:</strong> Two of
                      Bengal's most significant temple complexes, both on the
                      banks of the Hooghly.
                    </li>
                    <li>
                      <strong>Indian Museum:</strong> India's oldest and
                      largest museum, with an extensive collection spanning
                      archaeology, art and natural history.
                    </li>
                    <li>
                      <strong>Park Street & New Market:</strong> Kolkata's
                      historic dining and shopping district, especially
                      lively during Christmas.
                    </li>
                  </ul>
                </section>

                {/* ── Darjeeling ────────────────────────────────────────── */}
                <section id="darjeeling">
                  <h2>Darjeeling: Tea & the Toy Train</h2>
                  <p>
                    A former British hill station at over 2,000 metres,
                    Darjeeling remains one of India's most atmospheric
                    mountain towns — famous for its tea, its narrow-gauge
                    railway, and sweeping Kanchenjunga views on a clear day.
                  </p>
                  <ul>
                    <li>
                      <strong>Darjeeling Himalayan Railway (Toy Train):</strong>{" "}
                      A UNESCO World Heritage narrow-gauge railway climbing
                      through tea estates and pine forest — the joyride
                      section between Darjeeling and Ghum is the classic
                      short trip.
                    </li>
                    <li>
                      <strong>Tiger Hill:</strong> The famous pre-dawn
                      sunrise viewpoint over Kanchenjunga, the world's
                      third-highest peak — worth the early wake-up on a clear
                      day.
                    </li>
                    <li>
                      <strong>Tea estate visits:</strong> Happy Valley Tea
                      Estate and others near town offer tours and tastings —
                      Darjeeling tea is among the most prized in the world.
                    </li>
                    <li>
                      <strong>Padmaja Naidu Himalayan Zoological Park:</strong>{" "}
                      One of the few places in the world to see the red panda
                      and snow leopard, set within the Himalayan Mountaineering
                      Institute grounds.
                    </li>
                    <li>
                      <strong>Mall Road:</strong> Darjeeling's pedestrian
                      promenade, lined with cafés and shops — a pleasant
                      evening walk.
                    </li>
                    <li>
                      <strong>Batasia Loop:</strong> A spiral railway loop
                      with a war memorial and panoramic mountain views, just
                      below Ghum.
                    </li>
                  </ul>
                </section>

                {/* ── Sundarbans ────────────────────────────────────────── */}
                <section id="sundarbans">
                  <h2>Sundarbans: Mangroves & Tigers</h2>
                  <p>
                    The world's largest mangrove forest and a UNESCO World
                    Heritage Site, the Sundarbans straddles the
                    India–Bangladesh border and is the only mangrove
                    ecosystem inhabited by tigers.
                  </p>
                  <ul>
                    <li>
                      <strong>Boat safaris:</strong> Multi-day boat trips
                      through the tidal creeks are the only way to explore
                      the reserve — almost always booked through licensed
                      tour operators with permits included.
                    </li>
                    <li>
                      <strong>Royal Bengal Tiger:</strong> Sightings are rare
                      given the dense mangrove cover, but the Sundarbans is
                      one of the very few places these tigers can be seen in
                      a mangrove habitat at all.
                    </li>
                    <li>
                      <strong>Birdwatching:</strong> The reserve hosts a wide
                      range of resident and migratory birds, making it a
                      strong destination even without a tiger sighting.
                    </li>
                    <li>
                      <strong>Sajnekhali Watch Tower:</strong> A good vantage
                      point for spotting deer, crocodiles, and occasionally
                      tigers from a safe elevated position.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book a 2–3 day boat package
                    with an experienced operator rather than a rushed day
                    trip — the Sundarbans rewards slower travel, and tiger
                    sightings improve with more time on the water.
                  </div>
                </section>

                {/* ── Other Regions ─────────────────────────────────────── */}
                <section id="other-regions">
                  <h2>Kalimpong, Dooars & Digha</h2>
                  <ul>
                    <li>
                      <strong>Kalimpong:</strong> A quieter hill town near
                      Darjeeling, known for monasteries, flower nurseries,
                      and a more laid-back pace — a good add-on for those with
                      extra time.
                    </li>
                    <li>
                      <strong>Dooars:</strong> A forested region at the base
                      of the Himalayas with several wildlife sanctuaries,
                      including Jaldapara and Gorumara — good for elephant and
                      rhino sightings.
                    </li>
                    <li>
                      <strong>Digha:</strong> West Bengal's most popular
                      beach town, a few hours from Kolkata — busy and
                      developed rather than pristine, but a common weekend
                      escape for locals.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Accommodation ranges widely across the state — Kolkata
                    offers everything from heritage hotels to budget stays,
                    while Darjeeling and the Sundarbans require more advance
                    planning given limited inventory.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Guesthouses, Sudder Street (Kolkata)",
                          "Budget lodges, Darjeeling Mall Road",
                          "Basic boat/lodge stays, Sundarbans",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹6,000/night",
                        picks: [
                          "Boutique hotels, Kolkata South",
                          "Hill-view hotels, Darjeeling",
                          "Mid-range resort packages, Sundarbans",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹8,000–₹20,000+/night",
                        picks: [
                          "The Oberoi Grand, Kolkata",
                          "Glenburn Tea Estate, Darjeeling",
                          "Premium Sundarbans lodge packages",
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
                    Book Darjeeling and Sundarbans stays well ahead during
                    October–December — both have genuinely limited room
                    inventory compared to Kolkata's much larger hotel market.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in West Bengal</h2>
                  <p>
                    Bengali cuisine is one of India's most distinctive —
                    built around fish, mustard, and a genuine sweet-making
                    tradition that's earned international recognition.
                  </p>
                  <ul>
                    <li>
                      <strong>Machher Jhol (fish curry):</strong> The Bengali
                      staple, typically made with rohu or hilsa and a light
                      mustard-based gravy.
                    </li>
                    <li>
                      <strong>Shorshe Ilish:</strong> Hilsa fish in mustard
                      sauce — considered the pinnacle of Bengali fish
                      cookery, especially prized during monsoon season.
                    </li>
                    <li>
                      <strong>Kolkata Biryani:</strong> Distinct from other
                      regional biryanis for its use of potato alongside meat
                      — a Kolkata specialty worth seeking out.
                    </li>
                    <li>
                      <strong>Rosogolla & Mishti Doi:</strong> Bengal's
                      famous sweets — spongy syrup-soaked rosogolla and
                      caramelised sweet yoghurt, both genuinely worth the
                      calories.
                    </li>
                    <li>
                      <strong>Kathi rolls:</strong> Kolkata is credited with
                      inventing the kathi roll — paratha wrapped around
                      grilled meat or paneer, sold at street stalls across
                      the city.
                    </li>
                    <li>
                      <strong>Momos and thukpa in Darjeeling:</strong>{" "}
                      Reflecting the hills' strong Nepali and Tibetan
                      influence — a different food culture entirely from the
                      plains.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>7-Day West Bengal Itinerary</h2>
                  <p>
                    Seven days is a reasonable minimum to properly cover
                    Kolkata and Darjeeling together — add 2–3 more days if
                    including the Sundarbans.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Kolkata",
                        color: "bg-amber-700",
                        activities: [
                          "Victoria Memorial, Howrah Bridge, Dakshineswar",
                          "College Street, Indian Museum, Park Street food crawl",
                          "Evening: Boat ride on the Hooghly at sunset",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Travel to Darjeeling",
                        color: "bg-sky-600",
                        activities: [
                          "Overnight train Kolkata → NJP, or morning flight to Bagdogra",
                          "Shared jeep/taxi transfer up to Darjeeling (~3 hrs)",
                          "Evening: Settle in, Mall Road walk",
                        ],
                      },
                      {
                        day: "Day 4–5",
                        title: "Darjeeling",
                        color: "bg-forest-600",
                        activities: [
                          "Pre-dawn Tiger Hill sunrise over Kanchenjunga",
                          "Toy Train joyride to Ghum, Batasia Loop",
                          "Tea estate visit, Himalayan Zoological Park",
                        ],
                      },
                      {
                        day: "Day 6–7",
                        title: "Return / Optional Sundarbans",
                        color: "bg-stone-600",
                        activities: [
                          "Travel back to Kolkata via NJP",
                          "Optional: 2-day Sundarbans boat safari extension",
                          "Departure from Kolkata",
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
                            "₹4,000",
                            "₹12,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,800"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹700",
                            "₹1,800",
                          ],
                          [
                            "Activities/day",
                            "₹300",
                            "₹800",
                            "₹2,000",
                          ],
                          [
                            "Daily total",
                            "₹2,300",
                            "₹6,700",
                            "₹18,600",
                          ],
                          [
                            "7-Day trip total",
                            "₹16,100",
                            "₹46,900",
                            "₹1,30,200",
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
                    * Excludes travel to Kolkata/Bagdogra and any Sundarbans
                    boat package, which is typically quoted separately at
                    ₹4,000–₹15,000 per person for a 2-day trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for West Bengal</h2>
                  <ul>
                    <li>
                      <strong>Book Sundarbans through licensed operators
                      only:</strong> Permits, guides and safety protocols are
                      strictly regulated within the tiger reserve.
                    </li>
                    <li>
                      <strong>Carry layers for Darjeeling:</strong> Mornings
                      and evenings get cold even outside winter — the
                      Kolkata–Darjeeling temperature gap catches many
                      travellers off guard.
                    </li>
                    <li>
                      <strong>Avoid the hills during monsoon:</strong>{" "}
                      Landslide risk on the Darjeeling and Kalimpong roads
                      rises sharply July–September.
                    </li>
                    <li>
                      <strong>Book Durga Puja accommodation months
                      ahead:</strong> Kolkata's biggest festival period sees
                      hotel prices and demand spike significantly.
                    </li>
                    <li>
                      <strong>Confirm Toy Train schedules in advance:</strong>{" "}
                      Services can be suspended for track maintenance,
                      especially after monsoon damage.
                    </li>
                    <li>
                      <strong>Carry cash outside major cities:</strong> Card
                      acceptance thins out quickly in Darjeeling's smaller
                      shops and throughout the Sundarbans.
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
                          "Book Sundarbans safaris only through licensed operators",
                          "Pack layers for the Kolkata–Darjeeling temperature swing",
                          "Wake up early for Tiger Hill sunrise on a clear day",
                          "Try Kolkata's street food — kathi rolls, jhalmuri, sweets",
                          "Book ahead for Durga Puja if visiting in Oct–Nov",
                          "Confirm Toy Train schedules before travel",
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
                          "Visit Darjeeling or Kalimpong during monsoon",
                          "Expect a guaranteed tiger sighting in the Sundarbans",
                          "Rush Kolkata in under two days — it deserves more",
                          "Rely on cards outside major cities",
                          "Skip mosquito repellent on a Sundarbans trip",
                          "Book an unlicensed or informal Sundarbans boat operator",
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
                  "West Bengal",
                  "Kolkata",
                  "Darjeeling",
                  "Sundarbans",
                  "Toy Train",
                  "Tea Gardens",
                  "State Guide",
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
                sections={WEST_BENGAL_GEAR}
                destination="West Bengal"
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
