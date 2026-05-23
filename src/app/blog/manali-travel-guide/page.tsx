import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { RelatedPostsGrid, RelatedSidebar } from "@/components/ui/RelatedPosts";
import TableOfContents from "@/components/ui/TableOfContents";
import type { Metadata } from "next";
import Link from "next/link";

// ── Per-page SEO metadata ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Manali Travel Guide 2026: Top Places, Itinerary & Insider Tips",
  description:
    "The definitive guide to Manali in 2026. Discover the best places to visit, a complete 5-day itinerary, where to stay, what to eat, and all the insider tips you need.",
  keywords: [
    "Manali",
    "Himachal Pradesh",
    "Mountain Travel",
    "India",
    "Adventure",
  ].join(", "),
  openGraph: {
    title: "Manali Travel Guide 2026: Top Places, Itinerary & Insider Tips",
    description:
      "The definitive guide to Manali in 2026. Discover the best places to visit, a complete 5-day itinerary, where to stay, what to eat, and all the insider tips you need.",
    url: `https://explore.kudozz.in/blog/manali-travel-guide`,
    type: "article",
    tags: [
      "Manali",
      "Himachal Pradesh",
      "Mountain Travel",
      "India",
      "Adventure",
    ],
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1600,
        height: 900,
        alt: "Snow-capped Himalayan mountains above Manali valley",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Manali Travel Guide 2026: Top Places, Itinerary & Insider Tips",
    description:
      "The definitive guide to Manali in 2026. Discover the best places to visit, a complete 5-day itinerary, where to stay, what to eat, and all the insider tips you need.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: {
    canonical: `https://explore.kudozz.in/blog/manali-travel-guide`,
  },
};

// ── JSON-LD structured data for this article ─────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Manali Travel Guide 2026: Top Places, Itinerary & Insider Tips",
          description:
            "The definitive guide to Manali in 2026. Discover the best places to visit, a complete 5-day itinerary, where to stay, what to eat, and all the insider tips you need.",
          image: "/images/destinations/manali/hero.jpg",

          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://explore.kudozz.in/logo.png",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://explore.kudozz.in/blog/manali-travel-guide`,
          },
          keywords: [
            "Manali",
            "Himachal Pradesh",
            "Mountain Travel",
            "India",
            "Adventure",
          ].join(", "),
          about: {
            "@type": "Place",
            name: "Manali",
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
                item: "https://explore.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://explore.kudozz.in/blog",
              },
              { "@type": "ListItem", position: 3, name: "Manali Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Visit Manali?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Manali", level: 2 },
  { id: "top-places", title: "Top Places to Visit", level: 2 },
  { id: "rohtang-pass", title: "→ Rohtang Pass", level: 3 },
  { id: "solang-valley", title: "→ Solang Valley", level: 3 },
  { id: "hadimba-temple", title: "→ Hadimba Devi Temple", level: 3 },
  { id: "old-manali", title: "→ Old Manali", level: 3 },
  { id: "vashisht", title: "→ Vashisht Village", level: 3 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ManaliPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero Section ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <img
              src="/images/destinations/manali/hero.jpg"
              alt="Snow-capped Himalayan mountains above Manali valley"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-stone-800/20" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-4 sm:px-8 lg:px-12"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 text-xs text-white/70">
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                {
                  label: "Himachal Pradesh",
                  href: "/blog?category=himachal-pradesh",
                },
                { label: "Manali", href: null },
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
                    <span className="text-white/50">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/30">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pb-14 pt-32">
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                "Manali",
                "Himachal Pradesh",
                "Mountain Travel",
                "India",
                "Adventure",
              ]
                .slice(0, 4)
                .map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Manali Travel Guide 2026: Top Places, Itinerary & Insider Tips
            </h1>
            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              "Everything you need to plan the perfect Manali trip — from snowy
              peaks to apple orchards, ancient temples to adrenaline-packed
              adventures."
            </p>

            {/* Meta Row */}
            <div
              className="flex flex-wrap items-center gap-5 text-sm text-white/70"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                16 min read
              </span>
            </div>
          </div>
        </section>

        {/* ── Three-Column Content Layout ───────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-8 lg:gap-10">
            {/* Left: Table of Contents */}
            <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* Center: Main Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-3xl">
              <div className="prose-travel">
                {/* ── Introduction ────────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Why Visit Manali?</h2>
                  <p>
                    Tucked at the northern end of the Kullu Valley in Himachal
                    Pradesh, <strong>Manali</strong> is one of India's most
                    beloved hill stations — and for good reason. At 2,050 metres
                    above sea level, it's a place where the Beas River sings
                    through apple orchards, snow-capped peaks shimmer on the
                    horizon, and the air carries the faint scent of deodar
                    cedar.
                  </p>
                  <p>
                    Whether you're a first-time visitor chasing your first
                    Himalayan sunrise, a seasoned trekker plotting routes
                    through Rohtang Pass, or a couple seeking a romantic
                    mountain escape, Manali offers something profound. It's one
                    of those rare places that doesn't just change your Instagram
                    feed — it changes you.
                  </p>

                  {/* Info box */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> At a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        ["State", "Himachal Pradesh"],
                        ["Altitude", "2,050 m (6,726 ft)"],
                        ["Best Season", "Oct–June"],
                        ["Peak Season", "May–June & Dec–Jan"],
                        ["Language", "Hindi, Kullu dialect"],
                        ["Currency", "Indian Rupee (₹)"],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <span className="text-stone-400 text-xs block">
                            {k}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ───────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Manali</h2>
                  <p>
                    Manali's charm shifts dramatically with the seasons, and
                    picking the right window can make or break your trip.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Winter (Dec–Feb)",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Snow & romance",
                        text: "The valley turns white. Expect sub-zero temperatures but also magical snowfall, cozy cafes, and far fewer tourists. Roads to Rohtang are closed.",
                      },
                      {
                        season: "Spring (Mar–Apr)",
                        emoji: "🌸",
                        color: "bg-pink-50 border-pink-200",
                        mood: "Blooms & waterfalls",
                        text: "Snow starts melting, fruit trees blossom, and roads gradually reopen. Shoulder season prices and uncrowded sights.",
                      },
                      {
                        season: "Summer (May–Jun)",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak & adventure",
                        text: "The most popular season. Rohtang Pass opens (permit required), Solang Valley buzzes, and the whole valley is alive. Book accommodation weeks in advance.",
                      },
                      {
                        season: "Monsoon (Jul–Sep)",
                        emoji: "🌧️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Avoid if possible",
                        text: "Heavy rainfall causes landslides and road closures. Spiti side-trips are off. Best avoided unless you love lush green landscapes and empty guesthouses.",
                      },
                    ].map((s) => (
                      <div
                        key={s.season}
                        className={`${s.color} border rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-2">
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
                    <strong>Our pick:</strong> Early October is the sweet spot —
                    crisp mountain air, golden foliage, thin crowds, and the
                    occasional early snowfall on the high passes. It's Manali at
                    its most cinematic.
                  </blockquote>
                </section>

                {/* ── How to Reach ────────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Manali</h2>
                  <p>
                    Manali is well-connected by road and air, though the journey
                    itself is part of the experience.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> The nearest airport is Bhuntar
                      (Kullu–Manali Airport, KUU), about 50 km south. SpiceJet
                      and IndiGo operate daily flights from Delhi. From Bhuntar,
                      take a taxi or HRTC bus to Manali (₹150–₹200 by bus;
                      ₹800–₹1,000 by taxi).
                    </li>
                    <li>
                      <strong>By Road (Volvo Bus):</strong> HPTDC and HRTC run
                      overnight Volvo buses from Delhi's ISBT Kashmiri Gate
                      (₹800–₹1,500, ~12 hours). This is the most popular option
                      — you arrive fresh in the morning to mountain views.
                    </li>
                    <li>
                      <strong>By Road (Private Cab):</strong> A private cab from
                      Delhi costs ₹6,000–₹10,000 depending on vehicle. Great for
                      families. Stop at Chandigarh for breakfast and Bilaspur
                      for lunch.
                    </li>
                    <li>
                      <strong>By Train + Bus:</strong> Take a train to
                      Chandigarh or Pathankot, then connect to a bus/taxi. No
                      direct train to Manali exists.
                    </li>
                  </ul>
                </section>

                {/* ── Top Places ──────────────────────────────────────────── */}
                <section id="top-places">
                  <h2>Top Places to Visit in Manali</h2>
                  <p>
                    Beyond the bustling Mall Road lie some truly spectacular
                    spots — here are the ones you absolutely cannot miss.
                  </p>

                  {/* Rohtang Pass */}
                  <section id="rohtang-pass">
                    <h3>Rohtang Pass</h3>
                    <img
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Snow-covered Rohtang Pass with vehicles and tourists"
                      className="w-full rounded-xl my-6 h-72 object-cover"
                    />
                    <p>
                      At 3,978 metres, <strong>Rohtang Pass</strong> is the
                      gateway between the Kullu Valley and the cold deserts of
                      Lahaul-Spiti. It's one of the most dramatic mountain
                      passes accessible by road in India — and the views of
                      cascading glaciers, barren moonscapes, and distant
                      Himalayan peaks are unlike anything else.
                    </p>
                    <p>
                      The pass is open from late May to early November. A daily
                      permit is required (₹550 for non-AC vehicles), and the
                      Himachal Pradesh government caps visitors at 1,200
                      vehicles per day. Book your permit online at least 2 days
                      in advance via the HRTC portal.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Start by 6 AM — permits sell
                      out fast and afternoon clouds obscure the views entirely.
                      The road beyond the pass to Sissu waterfall is
                      jaw-dropping and often less crowded.
                    </div>
                  </section>

                  {/* Solang Valley */}
                  <section id="solang-valley">
                    <h3>Solang Valley</h3>
                    <img
                      src="/images/destinations/manali/solang-valley.jpg"
                      alt="Solang Valley with cable cars and snow mountains"
                      className="w-full rounded-xl my-6 h-72 object-cover"
                    />
                    <p>
                      About 14 km north of Manali,{" "}
                      <strong>Solang Valley</strong> (also called Snow Point) is
                      Himachal Pradesh's adventure capital. In winter, it
                      transforms into a ski resort with proper runs and
                      equipment rental. In summer, the valley hosts paragliding,
                      zorbing, ATVing, and horse riding against a backdrop of
                      glaciated peaks.
                    </p>
                    <p>
                      The Atal Tunnel starts near Solang and connects the valley
                      to Sissu on the Lahaul side — a 9-km tunnel that keeps
                      Rohtang accessible year-round (unlike the Pass itself).
                    </p>
                  </section>

                  {/* Hadimba Temple */}
                  <section id="hadimba-temple">
                    <h3>Hadimba Devi Temple</h3>
                    <img
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Pagoda-style Hadimba Devi Temple in cedar forest"
                      className="w-full rounded-xl my-6 h-72 object-cover"
                    />
                    <p>
                      Built in 1553, the <strong>Hadimba Devi Temple</strong> is
                      one of India's most architecturally distinctive Hindu
                      shrines. Its four-tiered pagoda structure, crafted from
                      cedar wood and slate, rises from a forest of towering
                      deodar trees. The temple is dedicated to Hadimba, wife of
                      the Pandava hero Bhima from the Mahabharata.
                    </p>
                    <p>
                      The surroundings have been somewhat commercialized with
                      Tibetan yaks for photos and stall vendors, but the temple
                      itself — particularly at dawn or dusk — retains a genuine
                      sacred quality. Visit early morning to experience it in
                      meditative quiet.
                    </p>
                  </section>

                  {/* Old Manali */}
                  <section id="old-manali">
                    <h3>Old Manali</h3>
                    <p>
                      Cross the Manalsu River on a rickety bridge and you enter
                      a different world. <strong>Old Manali</strong> is the
                      bohemian soul of the town — narrow cobblestone lanes,
                      Israeli-run cafes serving falafel and hummus, guesthouses
                      painted in psychedelic murals, and a laid-back traveller
                      culture that hasn't changed much since the 1970s hippie
                      trail.
                    </p>
                    <p>
                      This is where you'll find the best rooftop cafes (try
                      Dylan's Toasted & Roasted or Drifter's Cafe), quirky
                      boutiques selling Kullu shawls, and a crowd that lingers
                      over board games and mountain views long into the evening.
                    </p>
                  </section>

                  {/* Vashisht */}
                  <section id="vashisht">
                    <h3>Vashisht Village & Hot Springs</h3>
                    <p>
                      Just 3 km from Mall Road, the village of{" "}
                      <strong>Vashisht</strong> is home to ancient sulfurous hot
                      springs believed to have healing properties. There are
                      separate public hot spring tanks for men and women (free
                      entry), plus the ornate 4,000-year-old Vashisht Muni
                      Temple nearby.
                    </p>
                    <p>
                      After a day in the cold mountains, soaking in these
                      geothermal waters is pure bliss. The village also has
                      charming guesthouses, a surprisingly good Israeli-Indo
                      café scene, and easy trails into the surrounding forest.
                    </p>
                  </section>
                </section>

                {/* ── Itinerary ───────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Manali Itinerary</h2>
                  <p>
                    This itinerary balances the iconic sights with
                    off-the-beaten-path experiences, and builds in
                    acclimatisation time so altitude doesn't ruin your trip.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Mall Road Exploration",
                        color: "bg-forest-600",
                        activities: [
                          "Check in and rest (altitude adjustment)",
                          "Stroll Mall Road in the evening",
                          "Dinner at Drifter's in Old Manali",
                          "Visit Tibetan Market for Thangka shopping",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Hadimba Temple, Vashisht & Old Manali",
                        color: "bg-forest-500",
                        activities: [
                          "Morning: Hadimba Devi Temple (arrive early)",
                          "Afternoon: Soak in Vashisht Hot Springs",
                          "Late afternoon: Explore Old Manali lanes",
                          "Evening: Rooftop dinner with Beas River views",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Solang Valley Adventures",
                        color: "bg-amber-600",
                        activities: [
                          "Full day at Solang Valley",
                          "Paragliding (₹2,500/person)",
                          "Zorbing or ATV if snow is thin",
                          "Drive through Atal Tunnel to Sissu for quick visit",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Rohtang Pass (Permit Required)",
                        color: "bg-sky-600",
                        activities: [
                          "Depart by 6 AM (permit booked in advance)",
                          "Snowfields and glacier views at Rohtang",
                          "Continue to Chandratal Lake if time permits",
                          "Evening back in Manali — try momos at Lazy Dog",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Kullu & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Naggar Castle (50 km south)",
                          "Kullu Shawl factories at Bhuttico",
                          "Rafting on Beas River near Pirdi",
                          "Evening bus/cab back to Delhi",
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
                          <ul className="space-y-1 m-0">
                            {d.activities.map((a) => (
                              <li
                                key={a}
                                className="text-sm text-stone-600 m-0 pl-4 before:content-['✓'] before:text-forest-500 before:font-bold before:absolute before:left-0"
                                style={{
                                  fontFamily: "var(--font-dm-sans)",
                                  position: "relative",
                                }}
                              >
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Where to Stay ───────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Manali</h2>
                  <p>
                    Accommodation in Manali spans budget backpacker dorms to
                    luxury mountain resorts. Here's the best of each tier:
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹400–₹1,500/night",
                        picks: [
                          "Zostel Manali",
                          "The Hosteller",
                          "Snow Valley Resorts (dorm)",
                          "Backpacker hostels in Old Manali",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹5,000/night",
                        picks: [
                          "Banjara Camps & Retreat",
                          "Apple Country Resorts",
                          "Hotel Rohtang Manor",
                          "Pinewood Hotel",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹5,000–₹20,000+/night",
                        picks: [
                          "Span Resort & Spa",
                          "Solang Valley Resorts",
                          "The Himalayan (HPTDC)",
                          "Snowflake Cottage",
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
                              className="text-xs text-stone-600 m-0 pl-0"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Food ────────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Manali</h2>
                  <p>
                    Manali's food scene is a delicious collision of Himachali
                    mountain cuisine, Tibetan flavours, and a surprising
                    international café culture built up over decades of
                    backpacker traffic.
                  </p>
                  <ul>
                    <li>
                      <strong>Siddu:</strong> Himachal's signature — steamed
                      wheat bread stuffed with poppy seeds and ghee. Try it at
                      any local dhaba for ₹40–₹60.
                    </li>
                    <li>
                      <strong>Trout:</strong> Fresh river trout from the Beas,
                      typically pan-fried with garlic and herbs. Order it at any
                      riverside restaurant.
                    </li>
                    <li>
                      <strong>Thukpa & Momos:</strong> Tibetan noodle soup and
                      dumplings. The momos at Lazy Dog Lounge are legendary.
                    </li>
                    <li>
                      <strong>Apple products:</strong> The Kullu Valley's apples
                      are famous across India. Try fresh apple juice, apple jam,
                      and apple cider from roadside stalls.
                    </li>
                    <li>
                      <strong>Café culture:</strong> Old Manali's cafes serve
                      everything from shakshuka to banana pancakes to wood-fired
                      pizza. Don't miss Drifter's Café for breakfast.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ──────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Expense
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Budget
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Mid-Range
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Luxury
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night", "₹500", "₹2,500", "₹8,000"],
                          ["Food/day", "₹400", "₹800", "₹2,000"],
                          ["Local transport", "₹200", "₹600", "₹1,500"],
                          ["Sightseeing/day", "₹300", "₹1,000", "₹2,500"],
                          ["Activities/day", "₹500", "₹2,000", "₹5,000"],
                          ["Daily Total", "₹1,900", "₹6,900", "₹19,000"],
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
                </section>

                {/* ── Tips ────────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li>
                      <strong>Acclimatise first:</strong> Spend day 1 resting
                      and walking slowly. Altitude sickness is real at 2,050m+,
                      especially if you're pushing to Rohtang at 4,000m.
                    </li>
                    <li>
                      <strong>Book Rohtang permits early:</strong> The daily cap
                      fills within hours. Book at rohtangpermits.nic.in at least
                      2 days ahead.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs exist but run out of
                      cash during peak season. Carry enough rupees from
                      Chandigarh or Delhi.
                    </li>
                    <li>
                      <strong>Pack layers:</strong> Even in summer, evenings
                      drop to 5–10°C. In winter, it's sub-zero. Thermal layers,
                      a good jacket, and waterproofs are essential.
                    </li>
                    <li>
                      <strong>Respect the culture:</strong> Dress modestly when
                      visiting temples. Remove shoes before entering shrines.
                    </li>
                    <li>
                      <strong>Don't overschedule:</strong> The mountains set the
                      pace. Leave room for spontaneity, weather delays, and
                      simply sitting by a river with a cup of chai.
                    </li>
                  </ul>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Manali",
                  "Himachal Pradesh",
                  "Mountain Travel",
                  "India",
                  "Adventure",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase()}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              {/* Related Posts Grid at bottom */}
              <RelatedPostsGrid />
            </article>

            {/* Right: Related Sidebar */}
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
