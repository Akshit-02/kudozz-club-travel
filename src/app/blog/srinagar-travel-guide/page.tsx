// src/app/blog/srinagar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Srinagar Travel Guide: Dal Lake, Houseboats & Mughal Gardens",
  description:
    "Plan your Srinagar trip with our complete guide to Dal Lake houseboats, shikara rides, Mughal gardens, the Old City, best time to visit, and a 3-day itinerary.",
  keywords:
    "Srinagar travel guide, Dal Lake houseboat, Srinagar Mughal gardens, Srinagar Shikara ride, best time to visit Srinagar, Srinagar itinerary, Srinagar Old City, houseboat stay Kashmir, Nishat Bagh Shalimar Bagh, Srinagar sightseeing",
  openGraph: {
    title: "Srinagar Travel Guide: Dal Lake, Houseboats & Mughal Gardens",
    description:
      "Houseboats on Dal Lake, sunrise shikara rides, and Mughal-era gardens beneath the Zabarwan hills — the complete Srinagar travel guide.",
    url: "https://club.kudozz.in/blog/srinagar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Traditional houseboats on Dal Lake with the Zabarwan mountains behind, Srinagar, Kashmir",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinagar Travel Guide: Dal Lake, Houseboats & Mughal Gardens",
    description:
      "Houseboats on Dal Lake, sunrise shikara rides, and Mughal-era gardens beneath the Zabarwan hills — the complete Srinagar travel guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/srinagar-travel-guide",
  },
};

// ── JSON-LD: BlogPosting ────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Srinagar Travel Guide: Dal Lake, Houseboats & Mughal Gardens",
          description:
            "Plan your Srinagar trip with our complete guide to Dal Lake houseboats, shikara rides, Mughal gardens, the Old City, best time to visit, and a 3-day itinerary.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-07-16",
          dateModified: "2026-07-16",
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
            "@id": "https://club.kudozz.in/blog/srinagar-travel-guide",
          },
          keywords:
            "Srinagar travel guide, Dal Lake houseboat, Srinagar Mughal gardens, Srinagar Shikara ride, best time to visit Srinagar, Srinagar itinerary",
          about: {
            "@type": "Place",
            name: "Srinagar",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Srinagar",
              addressRegion: "Jammu and Kashmir",
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
                name: "Jammu & Kashmir",
                item: "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Srinagar Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

// ── JSON-LD: FAQPage ─────────────────────────────────────────────────────────
function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How many days are enough for Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Two to three days is enough to see Srinagar itself comfortably — a houseboat stay, a shikara ride, the Mughal Gardens, and the Old City. If you're using Srinagar as a base for day trips to Gulmarg, Pahalgam, or Sonamarg, budget five to six days for the wider Kashmir circuit.",
              },
            },
            {
              "@type": "Question",
              name: "Is it safe to stay in a houseboat in Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, houseboat stays are a well-established, regulated part of Srinagar tourism and thousands of travellers stay on Dal Lake and Nigeen Lake every season without incident. Book through a registered houseboat association, a reputable travel operator, or your hotel rather than an unsolicited approach at the airport, and check recent reviews before paying an advance.",
              },
            },
            {
              "@type": "Question",
              name: "What is the best time to visit Dal Lake?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Early morning, around sunrise, is the best time to be on Dal Lake — the water is calm, the light is soft, and the floating vegetable market is in full swing. Seasonally, April to June brings mild weather and blooming gardens, while September and October offer golden Chinar colours with fewer crowds.",
              },
            },
            {
              "@type": "Question",
              name: "How much does a houseboat stay cost in Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A simple, standard houseboat runs roughly ₹1,500 to ₹2,500 per night including meals, mid-range deluxe houseboats cost ₹3,000 to ₹6,000, and luxury houseboats with heritage interiors can go upward of ₹8,000 to ₹15,000 per night. Rates typically include breakfast and dinner, and a shikara ride to and from the shore is usually included.",
              },
            },
            {
              "@type": "Question",
              name: "Is Srinagar safe for tourists in 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Srinagar's main tourist areas — Dal Lake, the Mughal Gardens, and the city centre — see heavy domestic and international tourist footfall year-round and are well set up for visitors. As with any trip to the region, it's worth checking current government travel advisories before booking non-refundable travel, since conditions can occasionally shift.",
              },
            },
            {
              "@type": "Question",
              name: "Can you visit Gulmarg and Pahalgam as day trips from Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Gulmarg is about 50 km (roughly 2 hours by road) from Srinagar and Pahalgam is about 90 km (roughly 2.5 to 3 hours), both commonly done as full-day trips with a hired taxi. Sonamarg, around 80 km away, is also a popular day trip, though an overnight stay lets you see more of each without the drive eating into your day.",
              },
            },
            {
              "@type": "Question",
              name: "What should first-time visitors not miss in Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A sunrise shikara ride through the floating market, at least one night on a Dal Lake houseboat, a walk through Nishat Bagh or Shalimar Bagh, and an hour wandering the Old City around Jama Masjid are the four experiences most visitors rate as unmissable. A plate of Wazwan and a cup of Kahwa round out the essential Srinagar experience.",
              },
            },
          ],
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Srinagar", level: 2 },
  { id: "best-time", title: "Best Time to Visit Srinagar", level: 2 },
  { id: "how-to-reach", title: "How to Reach Srinagar", level: 2 },
  { id: "dal-lake", title: "Dal Lake & Houseboat Stays", level: 2 },
  { id: "mughal-gardens", title: "Srinagar's Mughal Gardens", level: 2 },
  { id: "old-city", title: "Exploring the Old City", level: 2 },
  { id: "day-trips", title: "Day Trips from Srinagar", level: 2 },
  { id: "where-to-stay", title: "Where to Stay in Srinagar", level: 2 },
  { id: "food-guide", title: "What to Eat in Srinagar", level: 2 },
  { id: "itinerary", title: "3-Day Srinagar Itinerary", level: 2 },
  { id: "budget", title: "Srinagar Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Srinagar Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SrinagarGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Traditional houseboats on Dal Lake with the Zabarwan mountains behind, Srinagar, Kashmir"
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
                  label: "Jammu & Kashmir",
                  href: "/blog/jammu-kashmir-travel-guide",
                },
                { label: "Srinagar", href: null },
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
                "Srinagar",
                "Dal Lake",
                "Jammu & Kashmir",
                "Houseboats",
                "Mughal Gardens",
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
              Srinagar Travel Guide: Dal Lake, Houseboats & Mughal Gardens
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Sunrise on a shikara, a night on a carved wooden houseboat, and
              terraced gardens the Mughals built for exactly this view — this
              is the complete guide to Kashmir's summer capital.
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
                  text: "Srinagar, Jammu & Kashmir",
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
                  <h2>Why Visit Srinagar</h2>
                  <p>
                    <strong>Srinagar</strong>, the summer capital of Jammu and
                    Kashmir, sits at roughly 1,585 metres in a broad valley
                    ringed by the Zabarwan and Pir Panjal ranges. It's a city
                    built around water — <strong>Dal Lake</strong> and{" "}
                    <strong>Nigeen Lake</strong> anchor daily life here in a
                    way few other Indian cities can match, with houseboats
                    moored along the shore, shikara boats threading between
                    floating gardens, and a working vegetable market that
                    happens entirely on the water at dawn.
                  </p>
                  <p>
                    Beyond the lake, Srinagar carries centuries of Mughal-era
                    landscaping in its terraced gardens, a genuinely old Old
                    City around the 14th-century Jama Masjid, and a
                    handicraft tradition — pashmina, papier-mâché, walnut wood
                    carving — that has drawn traders and travellers here for
                    generations. It's also the natural base for the wider
                    Kashmir valley: Gulmarg's gondola, Pahalgam's pine
                    forests, and Sonamarg's glacier views are all within a
                    few hours' drive.
                  </p>
                  <p>
                    For the full Kashmir circuit beyond Srinagar itself, see
                    our{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir travel guide
                    </Link>
                    , which covers the region end to end including Vaishno
                    Devi. This guide focuses specifically on getting the most
                    out of Srinagar.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛶</span> Srinagar at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Jammu & Kashmir (UT)",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~1,585 m",
                        },
                        {
                          icon: "✈️",
                          label: "Airport Code",
                          value: "SXR",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Apr–Jun, Sep–Oct",
                        },
                        {
                          icon: "🛶",
                          label: "Known For",
                          value: "Dal Lake, Houseboats, Gardens",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,000 – ₹7,000",
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
                  <h2>Best Time to Visit Srinagar</h2>
                  <p>
                    Srinagar has genuinely distinct seasons, and each one
                    shows the city differently — there's no single wrong time
                    to visit, but the right season depends on what you want
                    to see.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – May",
                        emoji: "🌷",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Spring blossoms — our pick",
                        text: "Almond and apple orchards blossom across the valley, tulip season peaks at Indira Gandhi Memorial Tulip Garden in early April, and temperatures sit comfortably between 12–23°C.",
                      },
                      {
                        season: "Jun – Aug",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Summer — peak season",
                        text: "Warm, dry days (20–30°C) and long daylight hours make this the busiest season for houseboat bookings — book well ahead if travelling in June or July.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-red-50 border-red-200",
                        mood: "Autumn Chinar colours",
                        text: "Srinagar's iconic Chinar trees turn deep red and gold through October — a quieter, arguably more photogenic season with fewer crowds than spring or summer.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Winter — Dal Lake can freeze",
                        text: "Sub-zero nights and occasional snowfall bring a stark, quiet beauty to the city; Dal Lake has partially frozen in recent winters. Best for travellers who want snow without the crowds of Gulmarg.",
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
                    <strong>Our pick:</strong> Late April through early June
                    for tulip season, blossoming orchards, and mild weather —
                    or late September into October if you want the Chinar
                    trees at their most striking with noticeably thinner
                    crowds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Srinagar</h2>
                  <p>
                    Srinagar is well-connected by air and road, and is the
                    primary gateway for Kashmir valley tourism.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Srinagar International Airport
                      (SXR) has daily direct flights from Delhi, Mumbai,
                      Bangalore, Jammu, and several other major cities — by
                      far the fastest way in, typically 1.5–2.5 hours from
                      Delhi. Pre-book airport pickup or arrange one through
                      your houseboat/hotel, since airport taxi queues can be
                      long in peak season.
                    </li>
                    <li>
                      <strong>By Road from Jammu:</strong> The Jammu–Srinagar
                      stretch of NH44 covers roughly 270 km and takes about
                      7–8 hours by car, passing through the Jawahar Tunnel.
                      It's a scenic but weather-dependent route, occasionally
                      closed for landslides or snow — check road status
                      before travelling in winter.
                    </li>
                    <li>
                      <strong>By Train:</strong> Jammu Tawi is the nearest
                      major railhead with direct connections to Delhi and
                      other cities; from there, continue to Srinagar by road
                      or a connecting rail link via the Banihal route.
                    </li>
                    <li>
                      <strong>Local transport in Srinagar:</strong> Auto-
                      rickshaws and pre-paid taxis cover the city; for Dal
                      Lake itself, a shikara is often the most practical way
                      to reach a houseboat once you're at the ghat.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly into Srinagar directly
                    unless you're also visiting Vaishno Devi near Jammu — the
                    road journey is scenic but eats a full day each way that's
                    better spent in the valley.
                  </div>
                </section>

                {/* ── Dal Lake ──────────────────────────────────────────── */}
                <section id="dal-lake">
                  <h2>Dal Lake & Houseboat Stays</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Shikara boats crossing calm water on Dal Lake at sunrise near the floating market, Srinagar"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Dal Lake</strong> is Srinagar's centrepiece — a
                    roughly 18 sq km lake bordered by the Mughal Gardens on
                    one side and the Old City on the other, dotted with
                    floating vegetable gardens ("radh") that locals have
                    cultivated for generations.
                  </p>
                  <ul>
                    <li>
                      <strong>Types of houseboats:</strong> Houseboats are
                      graded roughly Deluxe, A, B, and C class by the tourism
                      department. Deluxe and A-class boats have carved
                      walnut-wood interiors, attached bathrooms, and proper
                      dining rooms; standard boats are simpler but still
                      comfortable and include meals cooked on board.
                    </li>
                    <li>
                      <strong>Shikara rides:</strong> A slow, paddle-powered
                      tour of the lake is the essential Srinagar experience —
                      past floating gardens, the Char Chinar island, and
                      souvenir-selling boats. Rides are priced roughly by the
                      hour, and rates are semi-fixed by the local shikara
                      union.
                    </li>
                    <li>
                      <strong>Floating market at dawn:</strong> Every morning
                      before sunrise, vegetable growers paddle their produce
                      to a floating wholesale market near Dal Gate — one of
                      the few genuinely working floating markets left in
                      India, and worth the early alarm.
                    </li>
                    <li>
                      <strong>Nigeen Lake:</strong> A quieter, smaller lake
                      connected to Dal Lake by a channel, with fewer
                      houseboats and a noticeably calmer atmosphere — a good
                      alternative for travellers who find Dal Lake too busy.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Book the dawn floating-market
                    shikara ride the night before with your houseboat owner —
                    it starts around 5:30–6 AM and the market thins out
                    quickly after sunrise.
                  </div>
                </section>

                {/* ── Mughal Gardens ──────────────────────────────────────── */}
                <section id="mughal-gardens">
                  <h2>Srinagar's Mughal Gardens</h2>
                  <p>
                    Srinagar's terraced <strong>Mughal Gardens</strong> date
                    back to the reigns of Emperor Jahangir and Shah Jahan in
                    the 17th century, built along the shore of Dal Lake with
                    the Zabarwan hills as a backdrop.
                  </p>
                  <ul>
                    <li>
                      <strong>Nishat Bagh:</strong> "Garden of Bliss," the
                      largest of Srinagar's Mughal gardens, laid out across
                      twelve terraces representing the twelve zodiac signs,
                      with views straight across Dal Lake toward the Pir
                      Panjal range.
                    </li>
                    <li>
                      <strong>Shalimar Bagh:</strong> Built by Jahangir for
                      his wife Nur Jahan, this is the most famous of the
                      three — fountains, chinar-lined avenues, and a black
                      marble pavilion mark its centre.
                    </li>
                    <li>
                      <strong>Chashme Shahi:</strong> The smallest of the
                      three, built around a natural spring believed to have
                      medicinal properties — a compact, less crowded stop,
                      good for a shorter visit.
                    </li>
                    <li>
                      <strong>Indira Gandhi Memorial Tulip Garden:</strong> A
                      more recent addition on the Zabarwan foothills,
                      Asia's largest tulip garden, blooming for roughly three
                      to four weeks each spring, usually late March through
                      mid-April.
                    </li>
                  </ul>
                  <blockquote>
                    Visit Nishat Bagh in the late afternoon — the terraces
                    face the lake, and the light on the water as the sun
                    drops behind the Pir Panjal range is worth timing your
                    visit around.
                  </blockquote>
                </section>

                {/* ── Old City ──────────────────────────────────────────── */}
                <section id="old-city">
                  <h2>Exploring Srinagar's Old City</h2>
                  <p>
                    Away from the lake, Srinagar's <strong>Old City</strong>{" "}
                    is dense, working, and largely untouched by the tourist
                    circuit around Dal Lake — narrow lanes, wooden-fronted
                    shops, and centuries of layered history.
                  </p>
                  <ul>
                    <li>
                      <strong>Jama Masjid:</strong> Built in 1394 and
                      rebuilt several times after fires, this mosque's
                      distinctive wooden architecture and 370-pillar
                      courtyard make it one of Srinagar's most striking
                      buildings — open to visitors outside prayer times.
                    </li>
                    <li>
                      <strong>Shankaracharya Temple:</strong> A hilltop
                      temple dedicated to Shiva, reached by a steep flight of
                      steps, offering panoramic views over the entire city
                      and lake — particularly good at sunset.
                    </li>
                    <li>
                      <strong>Hazratbal Shrine:</strong> A white marble
                      mosque on the northern shore of Dal Lake, believed to
                      house a relic of the Prophet Muhammad — one of
                      Kashmir's most revered religious sites.
                    </li>
                    <li>
                      <strong>Shikara-side markets & handicrafts:</strong>{" "}
                      Kashmiri pashmina shawls, papier-mâché boxes and
                      ornaments, and intricately carved walnut wood furniture
                      are sold both from lakeside boats and in established
                      shops around the Old City — buy from reputed stores
                      with authenticity certification, especially for
                      pashmina.
                    </li>
                  </ul>
                </section>

                {/* ── Day Trips ─────────────────────────────────────────── */}
                <section id="day-trips">
                  <h2>Day Trips from Srinagar</h2>
                  <p>
                    Srinagar's central location in the valley makes it the
                    natural base for the region's other big draws, each
                    reachable in a half-day drive or less.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/gulmarg-travel-guide">
                          Gulmarg
                        </Link>
                      </strong>
                      : About 50 km / 2 hours away, home to the Gulmarg
                      Gondola — one of the world's highest cable cars,
                      rising toward Apharwat Peak — and India's premier
                      skiing destination in winter.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/pahalgam-travel-guide">
                          Pahalgam
                        </Link>
                      </strong>
                      : About 90 km / 2.5–3 hours away, a pine-forested
                      valley along the Lidder River, base for the Amarnath
                      Yatra and a calmer alternative to Gulmarg with easy
                      access to Betaab Valley and Aru Valley.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sonamarg-travel-guide">
                          Sonamarg
                        </Link>
                      </strong>
                      : About 80 km / 2.5 hours away, the "Meadow of Gold,"
                      known for the Thajiwas Glacier and as the gateway to
                      the Zoji La pass toward Ladakh.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hire a taxi through your
                    houseboat or hotel for day trips — local taxi unions run
                    fixed rates for Gulmarg, Pahalgam, and Sonamarg, which is
                    usually cheaper and more reliable than negotiating
                    independently.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Srinagar</h2>
                  <p>
                    A houseboat is the signature Srinagar stay, but the city
                    also has plenty of conventional hotels spanning budget to
                    genuinely luxurious, both around Dal Lake and in the city
                    centre.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Standard C/B-class houseboats",
                          "Budget hotels near Boulevard Road",
                          "Guesthouses near Dal Gate",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Deluxe A-class Dal Lake houseboats",
                          "Hotel Dar-Es-Salam, Srinagar",
                          "Hotel Grand Mumtaz, Srinagar",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹10,000–₹25,000+/night",
                        picks: [
                          "The Lalit Grand Palace, Srinagar",
                          "Vivanta Dal View, Srinagar",
                          "Heritage Deluxe houseboats, Nigeen Lake",
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
                    At least one night on a Dal Lake houseboat is worth
                    building into any Srinagar stay — pair it with a hotel
                    stay in the city centre for the rest of your trip if you
                    want easier access to the Old City and gardens.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Srinagar</h2>
                  <p>
                    Kashmiri cuisine is rich, meat-forward, and built around
                    the multi-course <strong>Wazwan</strong> tradition —
                    distinct from anything else in North India, and best
                    experienced in Srinagar itself.
                  </p>
                  <ul>
                    <li>
                      <strong>Rogan Josh:</strong> A rich, red Kashmiri
                      mutton curry coloured with Kashmiri chillies and
                      cockscomb flower — one of the region's best-known
                      dishes.
                    </li>
                    <li>
                      <strong>Yakhni:</strong> A yogurt-based, milder mutton
                      curry flavoured with fennel and cardamom — a good
                      contrast to the heavier Rogan Josh.
                    </li>
                    <li>
                      <strong>Wazwan:</strong> A traditional multi-course
                      feast of Kashmiri meat dishes — served on a shared
                      trami platter at weddings, and increasingly at
                      dedicated Srinagar restaurants for visitors who want
                      the full experience.
                    </li>
                    <li>
                      <strong>Kahwa:</strong> Traditional saffron and
                      cardamom-spiced green tea, often topped with slivered
                      almonds — served everywhere from houseboats to street
                      stalls, and a genuinely warming drink in the cold.
                    </li>
                    <li>
                      <strong>Kashmiri bread:</strong> Sheermal, bakarkhani,
                      and girda from local bakeries in the Old City — best
                      bought fresh in the early morning.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>3-Day Srinagar Itinerary</h2>
                  <p>
                    Three days is enough to properly experience Srinagar
                    itself — the lake, the gardens, and the Old City —
                    without feeling rushed. Extend it with day trips to
                    Gulmarg, Pahalgam, or Sonamarg if you have more time.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Dal Lake",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive Srinagar, check into a Dal Lake houseboat",
                          "Afternoon: Leisurely shikara ride, floating gardens",
                          "Evening: Sunset at Nehru Park, dinner on the houseboat",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Gardens & Old City",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning: Floating vegetable market by shikara",
                          "Late morning: Nishat Bagh and Shalimar Bagh",
                          "Afternoon: Jama Masjid and Old City walk",
                          "Evening: Shankaracharya Temple sunset",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Chashme Shahi & Departure",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Chashme Shahi and Hazratbal Shrine",
                          "Late morning: Pashmina and papier-mâché shopping",
                          "Final houseboat lunch, depart from Srinagar Airport",
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

                  <p>
                    Have longer? Add a day each for{" "}
                    <Link href="/blog/gulmarg-travel-guide">Gulmarg</Link> and{" "}
                    <Link href="/blog/pahalgam-travel-guide">Pahalgam</Link>{" "}
                    to turn this into a fuller Kashmir valley trip, or see our{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir travel guide
                    </Link>{" "}
                    for a complete 6-day circuit including Sonamarg and
                    Vaishno Devi.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Srinagar Budget Breakdown</h2>
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
                            "₹1,500",
                            "₹4,000",
                            "₹12,000",
                          ],
                          ["Food/day", "₹600", "₹1,400", "₹2,800"],
                          [
                            "Local transport / shikara",
                            "₹800",
                            "₹1,500",
                            "₹2,500",
                          ],
                          [
                            "Sightseeing / entry fees",
                            "₹400",
                            "₹800",
                            "₹1,500",
                          ],
                          ["Daily total", "₹3,300", "₹7,700", "₹18,800"],
                          [
                            "3-Day trip total",
                            "₹9,900",
                            "₹23,100",
                            "₹56,400",
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
                    * Excludes flights/train to Srinagar. Houseboat rates
                    typically include breakfast and dinner; day-trip cab
                    hire to Gulmarg, Pahalgam, or Sonamarg is an additional
                    ₹2,500–₹4,500 per vehicle, per day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Srinagar Travel Tips</h2>
                  <ul>
                    <li>
                      <strong>Book houseboats through verified channels:</strong>{" "}
                      Use registered houseboat associations, your hotel, or a
                      reputable operator — avoid unsolicited approaches at the
                      airport or train station.
                    </li>
                    <li>
                      <strong>Check current travel advisories:</strong>{" "}
                      Conditions in the region can shift — check official
                      advisories before booking non-refundable travel.
                    </li>
                    <li>
                      <strong>Negotiate shikara rates upfront:</strong> Rates
                      are semi-fixed by the local union but confirm the price
                      and duration before boarding, especially for longer
                      rides to the floating market.
                    </li>
                    <li>
                      <strong>Buy pashmina from established shops:</strong>{" "}
                      Counterfeit "pashmina" is common in tourist-heavy
                      markets — buy from reputed stores with authenticity
                      certification.
                    </li>
                    <li>
                      <strong>Pack for cold mornings:</strong> Even in
                      summer, dawn shikara rides on the lake are noticeably
                      cold — carry a light jacket regardless of season.
                    </li>
                    <li>
                      <strong>Dress modestly at religious sites:</strong>{" "}
                      Cover shoulders and knees when visiting Jama Masjid,
                      Hazratbal Shrine, or Shankaracharya Temple.
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
                          "Spend at least one night on a Dal Lake houseboat",
                          "Take the sunrise shikara ride to the floating market",
                          "Visit Nishat Bagh in the late afternoon light",
                          "Check current travel advisories before booking",
                          "Buy pashmina from certified, established shops",
                          "Carry a light jacket for early lake mornings",
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
                          "Book a houseboat from an unsolicited airport approach",
                          "Buy pashmina from unverified street vendors",
                          "Skip confirming shikara rates before boarding",
                          "Rush the Old City into a quick drive-by",
                          "Book non-refundable travel without checking advisories",
                          "Underestimate how cold dawn on the lake can feel",
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
                    {[
                      {
                        q: "How many days are enough for Srinagar?",
                        a: "Two to three days is enough to see Srinagar itself comfortably — a houseboat stay, a shikara ride, the Mughal Gardens, and the Old City. If you're using Srinagar as a base for day trips to Gulmarg, Pahalgam, or Sonamarg, budget five to six days for the wider Kashmir circuit.",
                      },
                      {
                        q: "Is it safe to stay in a houseboat in Srinagar?",
                        a: "Yes, houseboat stays are a well-established, regulated part of Srinagar tourism and thousands of travellers stay on Dal Lake and Nigeen Lake every season without incident. Book through a registered houseboat association, a reputable travel operator, or your hotel rather than an unsolicited approach at the airport, and check recent reviews before paying an advance.",
                      },
                      {
                        q: "What is the best time to visit Dal Lake?",
                        a: "Early morning, around sunrise, is the best time to be on Dal Lake — the water is calm, the light is soft, and the floating vegetable market is in full swing. Seasonally, April to June brings mild weather and blooming gardens, while September and October offer golden Chinar colours with fewer crowds.",
                      },
                      {
                        q: "How much does a houseboat stay cost in Srinagar?",
                        a: "A simple, standard houseboat runs roughly ₹1,500 to ₹2,500 per night including meals, mid-range deluxe houseboats cost ₹3,000 to ₹6,000, and luxury houseboats with heritage interiors can go upward of ₹8,000 to ₹15,000 per night. Rates typically include breakfast and dinner, and a shikara ride to and from the shore is usually included.",
                      },
                      {
                        q: "Is Srinagar safe for tourists in 2026?",
                        a: "Srinagar's main tourist areas — Dal Lake, the Mughal Gardens, and the city centre — see heavy domestic and international tourist footfall year-round and are well set up for visitors. As with any trip to the region, it's worth checking current government travel advisories before booking non-refundable travel, since conditions can occasionally shift.",
                      },
                      {
                        q: "Can you visit Gulmarg and Pahalgam as day trips from Srinagar?",
                        a: "Yes. Gulmarg is about 50 km (roughly 2 hours by road) from Srinagar and Pahalgam is about 90 km (roughly 2.5 to 3 hours), both commonly done as full-day trips with a hired taxi. Sonamarg, around 80 km away, is also a popular day trip, though an overnight stay lets you see more of each without the drive eating into your day.",
                      },
                      {
                        q: "What should first-time visitors not miss in Srinagar?",
                        a: "A sunrise shikara ride through the floating market, at least one night on a Dal Lake houseboat, a walk through Nishat Bagh or Shalimar Bagh, and an hour wandering the Old City around Jama Masjid are the four experiences most visitors rate as unmissable. A plate of Wazwan and a cup of Kahwa round out the essential Srinagar experience.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {item.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Srinagar",
                  "Jammu and Kashmir",
                  "Kashmir",
                  "Dal Lake",
                  "Houseboats",
                  "Mughal Gardens",
                  "Shikara Ride",
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
                sections={HIMALAYAN_GEAR}
                destination="Srinagar"
              />

              <RelatedPostsGrid currentSlug="srinagar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="srinagar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
