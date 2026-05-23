// src/app/blog/coorg-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Coorg Travel Guide 2026: Coffee, Waterfalls, Trekking & More",
  description:
    "The complete Coorg (Kodagu) travel guide for 2026. India's coffee capital — misty hills, Abbey Falls, Nagarhole safaris, Madikeri fort, homestays, and the best of Kodava culture. Everything you need to plan the perfect Coorg trip.",
  keywords:
    "Coorg travel guide, Coorg Karnataka, Kodagu tourism, Abbey Falls Coorg, Madikeri, Coorg coffee plantations, Nagarhole National Park, Coorg homestays, things to do in Coorg, Coorg itinerary 2026",
  openGraph: {
    title: "Coorg Travel Guide 2026: Coffee, Waterfalls, Trekking & More",
    description:
      "Misty coffee hills, thundering waterfalls, spice plantations and Kodava hospitality — the complete guide to Coorg.",
    url: "https://explore.kudozz.in/blog/coorg-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Coorg coffee plantation with misty Western Ghats hills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coorg Travel Guide 2026",
    description:
      "Coffee, waterfalls, wildlife and warm Kodava hospitality — everything you need to plan your Coorg trip.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://explore.kudozz.in/blog/coorg-guide",
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
          "@type": "TravelGuide",
          headline:
            "Coorg Travel Guide 2026: Coffee, Waterfalls, Trekking & More",
          description: "The complete Coorg (Kodagu) travel guide for 2026.",
          image:
            "https://explore.kudozz.in/images/destinations/coorg/coorg.jpg",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://explore.kudozz.in/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://explore.kudozz.in/blog/coorg-guide",
          },
          about: {
            "@type": "Place",
            name: "Coorg",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Karnataka",
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
                item: "https://explore.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://explore.kudozz.in/blog",
              },
              { "@type": "ListItem", position: 3, name: "Coorg Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Coorg?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Coorg", level: 2 },
  { id: "top-places", title: "Top Places to Visit", level: 2 },
  { id: "abbey-falls", title: "→ Abbey Falls", level: 3 },
  { id: "raja-seat", title: "→ Raja's Seat", level: 3 },
  { id: "madikeri-fort", title: "→ Madikeri Fort", level: 3 },
  { id: "nagarhole", title: "→ Nagarhole National Park", level: 3 },
  { id: "talakaveri", title: "→ Talakaveri & Brahmagiri", level: 3 },
  { id: "dubare", title: "→ Dubare Elephant Camp", level: 3 },
  { id: "iruppu-falls", title: "→ Iruppu Falls", level: 3 },
  { id: "coffee-plantations", title: "Coffee Plantation Visits", level: 2 },
  { id: "trekking", title: "Trekking in Coorg", level: 2 },
  { id: "kodava-culture", title: "Kodava Culture & Festivals", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "itinerary", title: "4-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CoorgPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/destinations/coorg/coorg.jpg"
              alt="Coorg — misty coffee plantation hills in the Western Ghats"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent" />
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
                { label: "Karnataka", href: "/blog?category=karnataka" },
                { label: "Coorg", href: null },
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
                "Coorg",
                "Karnataka",
                "Coffee",
                "Western Ghats",
                "Wildlife",
                "Trekking",
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
              Coorg Travel Guide 2026: Coffee, Waterfalls, Trekking & More
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Deep in the Western Ghats, where coffee blossoms scent the morning
              mist and elephants wade through forest rivers — Coorg is South
              India's most quietly magnificent escape.
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
                  text: "Karnataka, India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,600 words",
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
                  <h2>Why Coorg?</h2>
                  <p>
                    There is a particular quality to a Coorg morning that stays
                    with you long after you leave. The mist rolls in from the
                    Western Ghats before dawn, draping the coffee estates in
                    soft white. By the time the sun burns through — around 8 AM
                    — the hillsides are emerald, the coffee blossoms are sending
                    their jasmine-like fragrance across the valleys, and
                    somewhere in the distance a peacock calls. It smells like
                    freshly brewed coffee, wet earth, and cardamom.
                  </p>
                  <p>
                    <strong>Coorg</strong> — officially <strong>Kodagu</strong>,
                    the smallest district in Karnataka — is the India that
                    doesn't shout. There are no crowds (relative to its
                    quality), no iconic monument queues, no buzzing tourist
                    bazaars. What there is: 120,000 hectares of coffee and spice
                    plantations covering ancient hills, some of the finest
                    wildlife corridors in South India, waterfalls that thunder
                    through rainforest, trekking trails that climb to the source
                    of the Kaveri River, and a deeply distinct indigenous
                    culture — the <strong>Kodava</strong>
                    people — with their own language, food, martial traditions,
                    and legendary warmth as hosts.
                  </p>
                  <p>
                    It's only 270 km from Bangalore. It feels like another
                    world.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>☕</span> Coorg at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Kodagu, Karnataka",
                        },
                        { icon: "🏔️", label: "Altitude", value: "900–1,750 m" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – May" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Mangalore (160 km)",
                        },
                        {
                          icon: "🚆",
                          label: "Nearest Railway",
                          value: "Mysuru (120 km)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit Coorg</h2>
                  <p>
                    Coorg has one of the heaviest monsoons in India — the
                    Western Ghats intercept the southwest monsoon with force
                    from June to September. Outside of that, it's an almost
                    year-round destination with distinct seasonal characters.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Post-monsoon Coorg is lush, misty, and perfectly cool (10–22°C). Coffee harvest season (Nov–Jan) fills the estates with activity and fragrance. Christmas and New Year bring crowds — book accommodation 4–6 weeks ahead.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌸",
                        color: "bg-pink-50 border-pink-200",
                        mood: "Coffee blossom season",
                        text: "The coffee blossoms (Coorg's 'snowfall') appear March–April — a two-week bloom that fills the entire district with jasmine-like fragrance. Temperatures rise to 30°C by May. Pre-monsoon showers begin. Excellent time for trekking before heat peaks.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — dramatic but limited",
                        text: "Coorg receives 2,500–3,000 mm of rain in these months. Waterfalls are spectacular and the forest is intensely green. Road conditions worsen significantly, many homestays close, trekking trails become dangerous. Only for monsoon lovers who don't mind limited mobility.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "☕",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Peak harvest & festivals",
                        text: "Coffee cherry harvest is in full swing — you can participate in picking at many plantations. Kodava festivals like Kailpodh (Oct) and Puthari (Nov–Dec) showcase the culture at its most vibrant. Busiest season — Bangalore weekenders flood in.",
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
                    <strong>Our pick:</strong> November — the harvest is on, the
                    coffee blossoms of the previous March have given way to ripe
                    red cherries, the mist is thickest in the mornings, the
                    Puthari festival brings Kodava culture to life, and the
                    weekday crowds are manageable. Arrive on a Tuesday and leave
                    before the Friday rush.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Coorg</h2>
                  <p>
                    Coorg has no airport or railway station — all access is by
                    road, which actually adds to its feeling of being a world
                    apart. The roads, particularly from Mysuru, are excellent
                    and the scenery on approach through the Ghats is
                    spectacular.
                  </p>
                  <ul>
                    <li>
                      <strong>From Bangalore (most common):</strong> 270 km, 5–6
                      hours via NH275. KSRTC runs excellent Airavat Club Class
                      buses from Bangalore's Satellite Bus Stand (₹400–₹700, 6
                      hrs) directly to Madikeri. Private cabs cost
                      ₹4,500–₹6,500. Avoid Friday evening departures — traffic
                      on the Mysuru expressway is brutal.
                    </li>
                    <li>
                      <strong>From Mysuru:</strong> 120 km, 3 hours via Hunsur.
                      The most scenic approach — winding ghat roads through
                      cardamom and coffee estates. KSRTC buses run every hour
                      (₹150–₹220). Best road into Coorg by car.
                    </li>
                    <li>
                      <strong>From Mangalore:</strong> 160 km, 4 hours via
                      NH275. The coastal approach through the ghats is stunning
                      — arguably the most dramatic road into Coorg. Good if
                      combining with a coastal trip.
                    </li>
                    <li>
                      <strong>From Hassan / Belur:</strong> 100 km, 2.5 hours.
                      Combine with the Hoysala temples circuit (Belur, Halebidu)
                      for an excellent extended Karnataka itinerary.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Rent a car or self-drive in
                    Coorg — it's the only way to explore the scattered
                    plantations, waterfalls, and viewpoints at your own pace.
                    Autos and taxis in Madikeri are available but expensive for
                    multi-stop days. Bikes available on rent (₹400–₹700/day)
                    from Madikeri for confident riders.
                  </div>
                </section>

                {/* ── Top Places ────────────────────────────────────────── */}
                <section id="top-places">
                  <h2>Top Places to Visit in Coorg</h2>

                  <section id="abbey-falls">
                    <h3>Abbey Falls</h3>
                    <img
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Abbey Falls cascading through coffee and spice plantation"
                      className="w-full rounded-xl my-6 h-72 object-cover"
                    />
                    <p>
                      Set deep within a private coffee and spice plantation,
                      <strong> Abbey Falls</strong> is Coorg's most visited
                      natural attraction — a 70-foot cascade that plunges
                      through a narrow gorge of hanging vines, wild pepper,
                      coffee, and cardamom. The falls are most powerful between
                      October and February, and the walk through the plantation
                      to reach them is half the experience.
                    </p>
                    <p>
                      The site is privately owned (entry ₹30 per person), and
                      the viewing platform across the gorge gives excellent
                      face-on views of the falls. It gets crowded between 10 AM
                      and 3 PM on weekends — arrive at opening time (8 AM) for
                      the falls largely to yourself and the best light.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Madikeri:</strong> 8 km
                      </li>
                      <li>
                        <strong>Entry:</strong> ₹30 per person + ₹50 camera fee
                      </li>
                      <li>
                        <strong>Best time to visit:</strong> 8–9 AM or after 4
                        PM
                      </li>
                      <li>
                        <strong>Combine with:</strong> Raja's Seat (5 km away)
                        for a half-day
                      </li>
                    </ul>
                  </section>

                  <section id="raja-seat">
                    <h3>Raja's Seat — The King's Viewpoint</h3>
                    <p>
                      <strong>Raja's Seat</strong> (King's Seat) in Madikeri is
                      the most famous viewpoint in Coorg — a terraced garden
                      perched at the edge of a cliff with sweeping views of the
                      mist-filled Coorg valleys and the Western Ghats rolling
                      away to the horizon. The name refers to the Kodava kings
                      who allegedly came here to watch the sunset over their
                      kingdom.
                    </p>
                    <p>
                      The viewpoint is best at sunrise (when the valleys below
                      fill with golden mist) and sunset (when the hills turn
                      amber and violet). The KSTDC toy train that runs through
                      the gardens is popular with families. Entry is ₹15, and
                      the garden has a small café for filter coffee.
                    </p>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> The official viewpoint is
                      popular and busy. Walk 200 metres beyond the main platform
                      along the cliff edge (follow the locals) for a quieter
                      spot with equally spectacular views and no entrance fee.
                    </div>
                  </section>

                  <section id="madikeri-fort">
                    <h3>Madikeri Fort & Omkareshwara Temple</h3>
                    <p>
                      The <strong>Madikeri Fort</strong> at the centre of town
                      was built by Mudduraja in the 17th century and later
                      renovated by Tipu Sultan, who renamed it Jaffarabad. The
                      fort contains a palace (now government offices), a chapel
                      (built by the British, now a museum), a prison, and two
                      life-size elephant statues at the main gate. The museum
                      inside has an excellent collection of Kodava weapons,
                      costumes, and artefacts.
                    </p>
                    <p>
                      Nearby, the <strong>Omkareshwara Temple</strong> is one of
                      Madikeri's most unusual religious sites — an amalgam of
                      Gothic, Islamic, and Kerala architectural styles built in
                      1820, with a central tank filled with goldfish. It's a
                      quiet, beautiful spot that sees far fewer visitors than
                      Abbey Falls.
                    </p>
                  </section>

                  <section id="nagarhole">
                    <h3>Nagarhole National Park (Rajiv Gandhi NP)</h3>
                    <p>
                      Part of the Nilgiri Biosphere Reserve and directly
                      adjacent to Coorg,{" "}
                      <strong>Nagarhole National Park</strong> is one of India's
                      finest wildlife sanctuaries — a 643-square-km tiger
                      reserve with some of the highest densities of large
                      mammals in Asia. The park protects Bengal tigers, Indian
                      leopards, Asian elephants (the largest population in
                      India), gaur (Indian bison), dholes (wild dogs), sloth
                      bears, and over 270 species of birds.
                    </p>
                    <p>
                      Unlike many Indian wildlife parks, Nagarhole's core zone
                      has relatively few vehicles and genuinely wild feeling
                      safaris. The Kabini River that runs through it draws
                      animals to its banks — particularly in the dry season
                      (March–May) when the grasslands flanking the reservoir
                      attract enormous elephant herds.
                    </p>
                    <ul>
                      <li>
                        <strong>Safari timings:</strong> Morning 6:00–9:00 AM
                        and evening 3:30–6:00 PM
                      </li>
                      <li>
                        <strong>Entry (Indian nationals):</strong> ₹300 per
                        person + ₹200 vehicle fee
                      </li>
                      <li>
                        <strong>Jeep safari:</strong> ₹3,500–₹5,000 for a
                        6-seater (book online at forest dept. website)
                      </li>
                      <li>
                        <strong>Best months for wildlife:</strong> March–May
                        (dry season, animals congregate at water)
                      </li>
                      <li>
                        <strong>Best for elephants:</strong> September–November
                        at Kabini backwaters
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> The Kabini reservoir boat
                      safari (₹600 per person, run by Karnataka Forest Dept.) is
                      extraordinary during the September–November elephant
                      congregation — herds of 50–100 elephants come to the
                      riverbank at dusk. Book through the Jungle Lodges &
                      Resorts website.
                    </div>
                  </section>

                  <section id="talakaveri">
                    <h3>Talakaveri & Brahmagiri Peak</h3>
                    <p>
                      <strong>Talakaveri</strong>, at 1,276 metres in the
                      Brahmagiri Hills near Bhagamandala, is the sacred source
                      of the Kaveri River — one of peninsular India's most
                      important rivers, revered as much as the Ganga in South
                      India. A small tank marks the spot where the Kaveri
                      springs, and a temple complex surrounds it. On Tula
                      Sankramana day (October), thousands of pilgrims gather as
                      the spring momentarily surges.
                    </p>
                    <p>
                      From Talakaveri, a 1.5-km steep trail climbs to
                      <strong> Brahmagiri Peak</strong> (1,608 m) — the highest
                      accessible viewpoint in Coorg, with panoramic 360-degree
                      views of the Western Ghats, the Coorg valleys, and on a
                      very clear day, a glimpse of the Arabian Sea.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Madikeri:</strong> 48 km
                      </li>
                      <li>
                        <strong>Brahmagiri trek:</strong> 3 km return, moderate
                        difficulty, 2 hours
                      </li>
                      <li>
                        <strong>Combine with:</strong> Bhagamandala Triveni
                        Sangam (25 km) — confluence of three rivers with a
                        beautiful temple complex
                      </li>
                    </ul>
                  </section>

                  <section id="dubare">
                    <h3>Dubare Elephant Camp</h3>
                    <p>
                      On the banks of the Kaveri River near Kushalnagar,
                      <strong> Dubare Elephant Camp</strong> is where the
                      Karnataka Forest Department's captive elephants spend
                      their mornings being bathed, fed, and exercised. Visitors
                      can wade into the river and help scrub the elephants —
                      it's a genuine, unhurried interaction, not a performance.
                    </p>
                    <p>
                      The camp is most active between 8:30–10:30 AM when bathing
                      happens. You can also feed the elephants during their
                      exercise time. Entry and activities are managed by Jungle
                      Lodges & Resorts. The camp is set in a beautiful stretch
                      of riverine forest — the boat crossing to reach it is
                      itself charming.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Madikeri:</strong> 35 km via
                        Kushalnagar
                      </li>
                      <li>
                        <strong>Entry:</strong> ₹200 per person (boat crossing
                        included)
                      </li>
                      <li>
                        <strong>Elephant interaction:</strong> ₹100–₹150
                        additional
                      </li>
                      <li>
                        <strong>Best timing:</strong> 8:30–10:30 AM for bathing
                        activity
                      </li>
                    </ul>
                  </section>

                  <section id="iruppu-falls">
                    <h3>Iruppu Falls (Lakshmana Tirtha)</h3>
                    <p>
                      Near the Kerala border in the Brahmagiri Wildlife
                      Sanctuary,
                      <strong> Iruppu Falls</strong> is Coorg's most dramatic
                      waterfall — the Lakshmana Tirtha river drops 170 feet over
                      a basalt cliff into a sacred pool below. The waterfall is
                      surrounded by dense rainforest alive with langurs, Malabar
                      giant squirrels, and hornbills. The path to the falls runs
                      through Brahmagiri Wildlife Sanctuary, and the forest
                      atmosphere is genuinely wild.
                    </p>
                    <p>
                      There's a Shiva temple at the base of the falls, and the
                      pool below is considered sacred — pilgrims bathe here year
                      round. The walk from the car park through the forest takes
                      about 20 minutes. Swimming is allowed in the lower pool.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Madikeri:</strong> 55 km
                      </li>
                      <li>
                        <strong>Entry:</strong> ₹30 per person
                      </li>
                      <li>
                        <strong>Combine with:</strong> Nagarhole NP (30 km away)
                        for a full-day wildlife and waterfall circuit
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Coffee Plantations ────────────────────────────────── */}
                <section id="coffee-plantations">
                  <h2>Coffee Plantation Visits</h2>
                  <p>
                    Coorg produces roughly 33% of India's total coffee output —
                    and unlike Darjeeling tea estates, many Coorg coffee
                    plantations actively welcome visitors, offer guided walks,
                    and let you participate in the harvest. This is one of the
                    most distinctive and genuinely educational travel
                    experiences in South India.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 my-6">
                    {[
                      {
                        title: "What you'll see",
                        icon: "👁️",
                        color: "bg-forest-50 border-forest-200",
                        items: [
                          "Arabica and Robusta coffee plants at all stages of growth",
                          "The red coffee cherry at harvest — taste it (sweet, like a grape)",
                          "Wet and dry processing methods side-by-side",
                          "Shade-grown cultivation under native trees",
                          "Wild pepper vines climbing the coffee trees",
                          "Cardamom, vanilla, nutmeg, and cinnamon growing alongside",
                        ],
                      },
                      {
                        title: "Best plantation experiences",
                        icon: "🏡",
                        color: "bg-amber-50 border-amber-200",
                        items: [
                          "Coorg Wilderness Resort (guided plantation tour included)",
                          "Kakkabe area estates — most authentic, few tourists",
                          "Tata Coffee's Pollibetta estate (advance booking required)",
                          "Honey Valley Estate (organic, excellent farm-to-cup experience)",
                          "Estate stays between Virajpet and Gonikoppal",
                          "Morning walk at any plantation guesthouse — ask the host",
                        ],
                      },
                    ].map((box) => (
                      <div
                        key={box.title}
                        className={`border ${box.color} rounded-xl p-5`}
                      >
                        <h4
                          className="font-bold text-stone-900 mb-3 flex items-center gap-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          <span>{box.icon}</span>
                          {box.title}
                        </h4>
                        <ul className="space-y-2 m-0">
                          {box.items.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-stone-600 flex items-start gap-2"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                                →
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    The coffee at most Coorg homestays is extraordinary —
                    freshly roasted and ground that morning, brewed as filter
                    coffee with the local chicory blend. Drink it black to taste
                    the estate. A packet of freshly roasted Coorg estate coffee
                    (₹200–₹400) is the best souvenir you'll bring home.
                  </blockquote>
                </section>

                {/* ── Trekking ──────────────────────────────────────────── */}
                <section id="trekking">
                  <h2>Trekking in Coorg</h2>
                  <p>
                    Coorg's terrain — deeply forested, steeply ridged, laced
                    with rivers — makes it one of South India's best trekking
                    destinations. The trails here are wilder and less-developed
                    than Himalayan routes, which is both the appeal and the
                    challenge.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        name: "Tadiandamol Peak Trek",
                        badge: "Highest in Coorg",
                        badgeColor: "bg-forest-100 text-forest-700",
                        difficulty: "Moderate",
                        distance: "12 km return",
                        duration: "5–6 hours",
                        altitude: "1,748 m",
                        startPoint: "Kakkabe village (55 km from Madikeri)",
                        desc: "Coorg's highest peak, covered in rolling grassland meadows (sholas) at the summit. The trail passes through dense rainforest before breaking into open grassland near the top. Panoramic views of the Western Ghats on clear days. No guide required but recommended in monsoon. Forest department permit required (₹100).",
                      },
                      {
                        name: "Brahmagiri Wildlife Sanctuary Trek",
                        badge: "Best Wildlife Sighting",
                        badgeColor: "bg-amber-100 text-amber-700",
                        difficulty: "Moderate–Hard",
                        distance: "16 km return",
                        duration: "6–8 hours",
                        altitude: "1,608 m",
                        startPoint: "Talakaveri (48 km from Madikeri)",
                        desc: "A forest trail through one of the most biodiverse corridors in India — the Brahmagiri Wildlife Sanctuary protects tigers, leopards, elephants, and an extraordinary diversity of birds. A registered guide from the forest department is mandatory. Chance of wildlife encounters is high. Starts at Talakaveri.",
                      },
                      {
                        name: "Mandalpatti Peak",
                        badge: "Best Views",
                        badgeColor: "bg-sky-100 text-sky-700",
                        difficulty: "Easy–Moderate",
                        distance: "4 km return (plus jeep)",
                        duration: "3 hours",
                        altitude: "1,400 m",
                        startPoint: "Abbey Falls road, 12 km from Madikeri",
                        desc: "A jeep track takes you to a base point (₹2,000 for a shared jeep), then a 2-km walk reaches a 360-degree viewpoint above the clouds. On clear mornings (arrive before 8 AM), you stand above a sea of white mist with only the highest peaks visible. One of the most photographed spots in Coorg.",
                      },
                      {
                        name: "Pushpagiri Wildlife Sanctuary Trek",
                        badge: "Most Remote",
                        badgeColor: "bg-purple-100 text-purple-700",
                        difficulty: "Hard",
                        distance: "20 km return",
                        duration: "Full day",
                        altitude: "1,712 m",
                        startPoint: "Somwarpet (60 km from Madikeri)",
                        desc: "Coorg's most challenging and least visited major trek — through rainforest to the second highest peak in the district. Mandatory forest guide. The trail passes through Shola forests and grasslands with extraordinary bird diversity. Permission from the forest range officer at Somwarpet required.",
                      },
                    ].map((trek) => (
                      <div
                        key={trek.name}
                        className="bg-white border border-stone-200 rounded-xl p-6 hover:border-forest-200 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h4
                            className="font-bold text-stone-900"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {trek.name}
                          </h4>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${trek.badgeColor}`}
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {trek.badge}
                          </span>
                        </div>
                        <div
                          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {[
                            { label: "Difficulty", value: trek.difficulty },
                            { label: "Distance", value: trek.distance },
                            { label: "Duration", value: trek.duration },
                            { label: "Summit", value: trek.altitude },
                          ].map(({ label, value }) => (
                            <div key={label}>
                              <span className="text-stone-400 text-xs block">
                                {label}
                              </span>
                              <span className="text-stone-800 text-sm font-medium">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0 mb-2"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {trek.desc}
                        </p>
                        <p
                          className="text-xs text-forest-600 font-medium"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          📍 Start: {trek.startPoint}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Important:</strong> All Coorg forest treks
                    require forest department permission and most require a
                    registered local guide. Wildlife (including elephants and
                    leopards) is present on many trails. Do not trek alone.
                    Contact the District Forest Office in Madikeri for permits
                    and guide arrangements (open Mon–Sat, 10 AM–5 PM).
                  </div>
                </section>

                {/* ── Kodava Culture ────────────────────────────────────── */}
                <section id="kodava-culture">
                  <h2>Kodava Culture & Festivals</h2>
                  <p>
                    The <strong>Kodava</strong> (Coorg) people are one of
                    India's most distinctive indigenous communities — a warrior
                    clan with Persian or Scythian origins (still debated by
                    historians), their own language (Kodava takk), their own
                    distinct dress, martial arts tradition, and a relationship
                    to nature and land that is deeply embedded in every aspect
                    of their culture. They are also exceptional hosts — Kodava
                    hospitality is legendary across Karnataka.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 my-6">
                    {[
                      {
                        aspect: "Festivals to witness",
                        emoji: "🎭",
                        color: "bg-amber-50 border-amber-200",
                        items: [
                          "Puthari (Nov–Dec) — rice harvest festival with Kodava songs, kolata stick dance, and community feasts",
                          "Kailpodh (Oct) — weapons worship festival; Kodavas traditionally carry the peeche katty (short sword)",
                          "Kaveri Sankramana (Oct) — pilgrimage to Talakaveri; the river's annual surge draws 100,000+ pilgrims",
                          "Huthri (Dec) — new year of the Kodava; family gatherings and traditional music",
                        ],
                      },
                      {
                        aspect: "Traditions to understand",
                        emoji: "🏛️",
                        color: "bg-forest-50 border-forest-200",
                        items: [
                          "Ain Mane (ancestral homes) — large family homesteads that are centres of Kodava community life",
                          "Kodava cuisine — pandi curry, kadambutthu, koli curry, and akki roti are central to identity",
                          "The Kodava have no caste system — a rare feature of their egalitarian warrior culture",
                          "Arms tradition — Kodava men have the legal right to carry firearms without a licence, a right granted by the British for their military service",
                        ],
                      },
                    ].map((box) => (
                      <div
                        key={box.aspect}
                        className={`border ${box.color} rounded-xl p-5`}
                      >
                        <h4
                          className="font-bold text-stone-900 mb-3 flex items-center gap-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          <span>{box.emoji}</span>
                          {box.aspect}
                        </h4>
                        <ul className="space-y-3 m-0">
                          {box.items.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-stone-600 flex items-start gap-2 leading-relaxed"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                                →
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Coorg</h2>
                  <p>
                    Kodava cuisine is one of India's great regional culinary
                    traditions — and yet one of the least known outside
                    Karnataka. It is built around pork, chicken, locally grown
                    rice, river fish, and the fresh spices and herbs of the
                    coffee estates. The best Kodava food is served in homestays
                    — not restaurants.
                  </p>

                  <div className="space-y-3 my-6">
                    {[
                      {
                        dish: "Pandi Curry",
                        tag: "Must try",
                        tagColor: "bg-red-100 text-red-700",
                        desc: "The defining dish of Kodava cuisine — pork cooked in a dark, tangy gravy of roasted spices and kachampuli (a souring agent made from Garcinia fruit found only in Coorg). The flavour is unlike any other pork curry in India: deeply savoury, with a unique fruity tartness. Eaten with kadambutthu (rice dumplings) or rice.",
                      },
                      {
                        dish: "Kadambutthu",
                        tag: "Staple",
                        tagColor: "bg-forest-100 text-forest-700",
                        desc: "Rice dumplings cooked in bamboo moulds — the traditional Coorg accompaniment to curries. Soft, subtly flavoured, and excellent at soaking up pandi curry gravy. Every homestay makes these for dinner.",
                      },
                      {
                        dish: "Koli Curry (Chicken)",
                        tag: "Classic",
                        tagColor: "bg-amber-100 text-amber-700",
                        desc: "A Kodava-style chicken curry with coconut-based gravy and the distinctive kachampuli souring. Lighter than pandi curry but equally complex in flavour. The default non-pork option and equally excellent.",
                      },
                      {
                        dish: "Noolputtu (String Hoppers)",
                        tag: "Breakfast",
                        tagColor: "bg-sky-100 text-sky-700",
                        desc: "Delicate rice noodle discs steamed and served with coconut milk and chicken or vegetable curry — a South India-wide breakfast favourite that Coorg does particularly well, given the quality of local rice varieties.",
                      },
                      {
                        dish: "Coorg Filter Coffee",
                        tag: "Unmissable",
                        tagColor: "bg-stone-700 text-white",
                        desc: "The best reason to be in the coffee capital of India. Freshly roasted, finely ground estate coffee (often Arabica–Robusta blend), brewed through a stainless steel filter with hot milk and just a touch of chicory. Ask any homestay host to make it strong. Buy a bag of the unground beans to take home.",
                      },
                    ].map((food) => (
                      <div
                        key={food.dish}
                        className="flex gap-4 bg-white border border-stone-200 rounded-xl p-5 hover:border-forest-200 hover:shadow-sm transition-all"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1.5">
                            <h4
                              className="font-bold text-stone-900"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {food.dish}
                            </h4>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${food.tagColor}`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {food.tag}
                            </span>
                          </div>
                          <p
                            className="text-sm text-stone-600 leading-relaxed m-0"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {food.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Where to eat:</strong> The best Coorg food is at
                    homestays — ask your host to prepare a full Kodava meal with
                    advance notice. For restaurants: Hotel Capitol in Madikeri
                    (pandi curry and kadambutthu), Raju's Family Restaurant
                    (local favourite), and Coorg Cuisine restaurant in
                    Kushalnagar. Avoid tourist-facing menus that lean on North
                    Indian dishes.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Coorg</h2>
                  <p>
                    The <strong>plantation homestay</strong> is the defining
                    accommodation experience of Coorg — waking up to birdsong in
                    a coffee estate, drinking freshly brewed filter coffee on a
                    verandah overlooking misty hills, eating home-cooked Kodava
                    food. This is not budget-cutting; it is simply the best way
                    to experience Coorg.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏡",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Zostel Coorg (Kushalnagar)",
                          "Basic Madikeri guesthouses",
                          "Yavakapadi Homestay (Kakkabe)",
                          "Budget rooms in Virajpet town",
                        ],
                      },
                      {
                        tier: "Plantation Homestays",
                        icon: "☕",
                        range: "₹2,000–₹6,000/night",
                        picks: [
                          "Honey Valley Estate (Kakkabe)",
                          "Bittangala Homestay",
                          "Coorg Wilderness Resort",
                          "The Tamara Coorg (mid-luxury)",
                        ],
                      },
                      {
                        tier: "Luxury Resorts",
                        icon: "✨",
                        range: "₹8,000–₹35,000+/night",
                        picks: [
                          "Orange County Resorts (Siddapura)",
                          "Evolve Back (Coorg)",
                          "Taj Madikeri Resort & Spa",
                          "Amanvana Spa Resort",
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
                    Stay outside Madikeri town wherever possible. The best
                    experiences are at estates and homestays scattered across
                    the district — Kakkabe for Tadiandamol treks, Siddapura for
                    plantation immersion, Kushalnagar for Nagarhole access,
                    Virajpet for a more authentic local experience.
                  </blockquote>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>4-Day Coorg Itinerary</h2>
                  <p>
                    Four days is the ideal duration for Coorg — enough to cover
                    the highlights without rushing, and long enough to settle
                    into the pace of plantation life. This itinerary is based
                    out of different areas each day for maximum coverage.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Madikeri Town",
                        color: "bg-forest-600",
                        activities: [
                          "Arrive from Bangalore/Mysuru — check in to Madikeri area homestay",
                          "Evening: Raja's Seat for sunset over the mist-filled valleys",
                          "Madikeri Fort and Omkareshwara Temple walking tour",
                          "Dinner at Hotel Capitol — first Kodava meal (pandi curry + kadambutthu)",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Coffee, Waterfalls & Viewpoints",
                        color: "bg-forest-500",
                        activities: [
                          "7 AM: Sunrise walk through your homestay's coffee estate",
                          "Abbey Falls (8 AM — before the crowds)",
                          "Mandalpatti jeep + walk (above the clouds, book jeep in advance)",
                          "Afternoon: Plantation tour and coffee tasting at estate",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Nagarhole Safari & Dubare",
                        color: "bg-amber-600",
                        activities: [
                          "6 AM: Morning jeep safari at Nagarhole National Park",
                          "Dubare Elephant Camp — 8:30 AM bathing activity",
                          "Kaveri Nisargadhama river island — boat ride, deer spotting",
                          "Kushalnagar market for local spices and coffee",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Talakaveri, Brahmagiri & Iruppu",
                        color: "bg-sky-600",
                        activities: [
                          "Bhagamandala Triveni Sangam — beautiful temple at river confluence",
                          "Talakaveri — sacred source of the Kaveri River",
                          "Brahmagiri Peak trek (3 km, 2 hrs) for panoramic views",
                          "Iruppu Falls — 170-foot waterfall through rainforest (55 km from Madikeri)",
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
                        <tr className="bg-forest-50">
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
                          ["Accommodation/night", "₹900", "₹3,500", "₹12,000"],
                          ["Food/day", "₹400", "₹900", "₹2,500"],
                          [
                            "Transport (car rental/day)",
                            "₹1,500",
                            "₹2,500",
                            "₹4,000",
                          ],
                          ["Nagarhole safari", "₹500", "₹1,500", "₹5,000"],
                          ["Entry fees & activities", "₹200", "₹500", "₹1,000"],
                          ["Daily Total", "₹3,500", "₹8,900", "₹24,500"],
                          ["4-Day Trip Total", "₹14,000", "₹35,600", "₹98,000"],
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
                    * Excludes travel to/from Coorg. Bangalore to Madikeri by
                    KSRTC bus: ₹400–₹700. By private cab: ₹4,500–₹6,500.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Coorg</h2>
                  <ul>
                    <li>
                      <strong>Avoid weekends from Bangalore:</strong> Coorg is
                      Bangalore's most popular weekend getaway — Friday evening
                      to Sunday is extremely busy year-round. If you can, travel
                      mid-week (Tuesday–Thursday). You'll get better prices,
                      quieter sights, and a more authentic experience.
                    </li>
                    <li>
                      <strong>Self-drive or hire a vehicle:</strong> Coorg's
                      attractions are spread across a large, hilly district with
                      limited public transport. A self-drive car or hired car
                      with driver (₹2,000–₹3,000/day) is essential for covering
                      more than one or two spots per day. Autos are available in
                      Madikeri but expensive for multi-stop days.
                    </li>
                    <li>
                      <strong>Book safari and activities in advance:</strong>
                      Nagarhole morning safaris fill up fast on weekends — book
                      online at the Karnataka Forest Department website at least
                      a week ahead. Mandalpatti jeeps (₹2,000–₂,500 per jeep)
                      should also be arranged the evening before through your
                      homestay.
                    </li>
                    <li>
                      <strong>Stay at a plantation homestay:</strong> Even for
                      one night. The plantation homestay experience — fresh
                      coffee, Kodava home cooking, morning estate walks, evening
                      bonfires — is what separates a Coorg trip from a standard
                      hill station visit. It's the heart of the destination.
                    </li>
                    <li>
                      <strong>Carry an umbrella or light raincoat:</strong>
                      Even in the dry season, Coorg can receive sudden brief
                      showers — the Western Ghats create localised weather
                      patterns. A light windbreaker doubles as rain protection.
                    </li>
                    <li>
                      <strong>Buy coffee and spices directly:</strong> The best
                      coffee, pepper, cardamom, and vanilla in Coorg comes
                      directly from estate shops or local markets (Madikeri
                      market, Virajpet). Avoid branded souvenir shops. Ask your
                      homestay host where they buy their own spices — that's
                      where you should go.
                    </li>
                    <li>
                      <strong>Respect wildlife corridors:</strong> Coorg is an
                      active wildlife corridor — elephants regularly cross roads
                      at night between Nagarhole, Brahmagiri, and Pushpagiri. Do
                      not drive fast on forest roads after dark. If you
                      encounter an elephant on the road, switch off lights, stop
                      the engine, and wait quietly until it moves on.
                    </li>
                    <li>
                      <strong>Leeches in monsoon:</strong> If visiting
                      June–September, wear closed shoes and apply salt or
                      tobacco paste to shoe soles before trekking. Leeches are
                      abundant on forest trails and completely harmless but
                      disconcerting. Salt removes them instantly.
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
                          "Stay at a plantation homestay for at least one night",
                          "Eat pandi curry at a local restaurant — not a tourist menu",
                          "Buy freshly roasted estate coffee to take home",
                          "Book Nagarhole safari online in advance",
                          "Visit Abbey Falls before 9 AM on a weekday",
                          "Ask your host to arrange a plantation walking tour",
                          "Combine with Mysuru (120 km) for a longer Karnataka trip",
                          "Try watching the Puthari festival if timing allows (Nov–Dec)",
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
                          "Travel on Friday evening from Bangalore — traffic is brutal",
                          "Rely on public transport to cover the district",
                          "Drive fast on forest roads after dark (elephant crossings)",
                          "Buy coffee at tourist-facing souvenir shops (overpriced)",
                          "Skip the Iruppu Falls — most visitors do and it's a mistake",
                          "Expect hot weather — Coorg is cool, pack a layer",
                          "Trek in wildlife sanctuaries without a registered guide",
                          "Ignore 'elephant area' signboards on forest roads",
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
                  "Coorg",
                  "Karnataka",
                  "Coffee",
                  "Western Ghats",
                  "Wildlife",
                  "Trekking",
                  "South India",
                  "Waterfalls",
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
