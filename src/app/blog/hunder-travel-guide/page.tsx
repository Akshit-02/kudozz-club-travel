import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { RelatedPostsGrid, RelatedSidebar } from "@/components/ui/RelatedPosts";
import TableOfContents from "@/components/ui/TableOfContents";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ── Per-page SEO metadata ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hunder Travel Guide: Nubra Valley's Sand Dunes & Camel Safari",
  description:
    "A complete guide to Hunder in Nubra Valley, Ladakh — cold desert sand dunes, double-humped Bactrian camel safaris, Diskit Monastery, permits, budget, and camping under the stars.",
  keywords: [
    "Hunder",
    "Nubra Valley",
    "Ladakh",
    "Bactrian Camel Safari",
    "Cold Desert",
    "Diskit Monastery",
    "India",
  ].join(", "),
  openGraph: {
    title: "Hunder Travel Guide: Nubra Valley's Sand Dunes & Camel Safari",
    description:
      "A complete guide to Hunder in Nubra Valley, Ladakh — cold desert sand dunes, double-humped Bactrian camel safaris, Diskit Monastery, permits, budget, and camping under the stars.",
    url: `https://club.kudozz.in/blog/hunder-travel-guide`,
    type: "article",
    tags: [
      "Hunder",
      "Nubra Valley",
      "Ladakh",
      "Bactrian Camel Safari",
      "Cold Desert",
    ],
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1600,
        height: 900,
        alt: "Sand dunes of Hunder in Nubra Valley with snow peaks behind",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunder Travel Guide: Nubra Valley's Sand Dunes & Camel Safari",
    description:
      "A complete guide to Hunder in Nubra Valley, Ladakh — cold desert sand dunes, double-humped Bactrian camel safaris, Diskit Monastery, permits, budget, and camping under the stars.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: `https://club.kudozz.in/blog/hunder-travel-guide`,
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
            "Hunder Travel Guide: Nubra Valley's Sand Dunes & Camel Safari",
          description:
            "A complete guide to Hunder in Nubra Valley, Ladakh — cold desert sand dunes, double-humped Bactrian camel safaris, Diskit Monastery, permits, budget, and camping under the stars.",
          image: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-08-30",
          dateModified: "2026-08-30",

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
            "@id": `https://club.kudozz.in/blog/hunder-travel-guide`,
          },
          keywords: [
            "Hunder",
            "Nubra Valley",
            "Ladakh",
            "Bactrian Camel Safari",
            "Cold Desert",
            "Diskit Monastery",
            "India",
          ].join(", "),
          about: {
            "@type": "Place",
            name: "Hunder",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Ladakh",
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
                name: "Ladakh",
                item: "https://club.kudozz.in/blog?category=ladakh",
              },
              { "@type": "ListItem", position: 4, name: "Hunder Travel Guide" },
            ],
          },
        }),
      }}
    />
  );
}

const tableOfContents = [
  { id: "introduction", title: "Why Visit Hunder?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Hunder", level: 2 },
  { id: "permits", title: "Permits for Nubra Valley", level: 2 },
  { id: "camel-safari", title: "The Bactrian Camel Safari", level: 2 },
  { id: "sand-dunes", title: "Sand Dunes at Sunset", level: 2 },
  { id: "diskit-monastery", title: "→ Diskit Monastery", level: 3 },
  { id: "camping", title: "Camping Under the Stars", level: 2 },
  { id: "itinerary", title: "Suggested Itinerary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HunderPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero Section ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Sand dunes of Hunder in Nubra Valley with snow peaks behind"
              fill
              priority
              sizes="100vw"
              className="object-cover"
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
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Hunder", href: null },
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
              {["Hunder", "Nubra Valley", "Ladakh", "Cold Desert"]
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
              Hunder Travel Guide: Nubra Valley&apos;s Sand Dunes & Camel
              Safari
            </h1>
            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              &quot;Silver sand dunes, double-humped camels, and snow peaks
              rising straight out of a cold desert — Hunder is the strangest,
              most beautiful contradiction in Ladakh.&quot;
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
                11 min read
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
                  <h2>Why Visit Hunder?</h2>
                  <p>
                    There is a moment, somewhere past the Shyok river bridge
                    on the road into Nubra Valley, when the landscape simply
                    stops making sense. Snow-capped peaks tower on the
                    horizon, a glacial river braids across a wide gravel
                    plain, and then — rising out of nowhere — pale silver{" "}
                    <strong>sand dunes</strong> ripple across the valley
                    floor. Wandering across them, unhurried and
                    double-humped, are Bactrian camels. This is{" "}
                    <strong>Hunder</strong>, and it is unlike anywhere else in
                    the Himalayas.
                  </p>
                  <p>
                    Hunder sits in the cold desert of Nubra Valley at roughly
                    3,000 metres, a good 1,300 metres lower and noticeably
                    milder than Leh. It was once a resting point on the
                    Silk Route caravans that crossed the Karakoram Pass into
                    Central Asia, and the Bactrian camels grazing on its dunes
                    today are the direct descendants of those trade
                    caravans — one of the very few places on Earth where you
                    can ride a double-humped camel against a backdrop of
                    permanently snow-clad mountains.
                  </p>
                  <p>
                    It's a landscape that photographs like a fever dream:
                    desert dunes, an icy river, willow and seabuckthorn
                    groves, whitewashed monasteries clinging to cliffs, and
                    peaks over 6,000 metres watching over all of it. Most
                    travellers see Hunder as a single afternoon stop on a
                    Nubra Valley loop from Leh — but stay even one night here
                    and the place gets under your skin.
                  </p>

                  {/* Info box */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐫</span> Hunder at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        ["Region", "Nubra Valley, Ladakh"],
                        ["Altitude", "~3,000 m (9,842 ft)"],
                        ["Best Season", "May–September"],
                        ["Known For", "Sand dunes, Bactrian camels"],
                        ["Distance from Leh", "~120 km (via Khardung La)"],
                        ["Permit Needed", "Inner Line Permit (ILP)"],
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
                  <h2>Best Time to Visit Hunder</h2>
                  <p>
                    Hunder's climate is milder than Leh's thanks to its lower
                    altitude, but it remains a high-desert environment with
                    brutal winters and a short, precious travel window.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Late Spring (May–Jun)",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Opening season",
                        text: "Khardung La and Nubra roads reopen fully by mid-to-late May. Days are pleasant, nights still cold. Fewer crowds than peak summer — a great window for the camel safari and photography.",
                      },
                      {
                        season: "Summer (Jul–Aug)",
                        emoji: "☀️",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Peak season",
                        text: "Warmest, driest, and busiest months. Daytime temperatures can touch 25–30°C in the dunes even as snow lingers on nearby peaks. Best for camping and longer stays.",
                      },
                      {
                        season: "Early Autumn (Sep)",
                        emoji: "🍂",
                        color: "bg-yellow-50 border-yellow-200",
                        mood: "Golden light, thin crowds",
                        text: "Willow and poplar groves turn gold, the light softens beautifully for photos, and tourist numbers thin out. Nights get noticeably colder.",
                      },
                      {
                        season: "Winter (Oct–Apr)",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Effectively closed",
                        text: "Khardung La and the Nubra road are snowbound and largely impassable for regular tourist traffic. Temperatures plunge well below freezing. Not recommended for a standard visit.",
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
                    <strong>Our pick:</strong> Mid-June or early September.
                    You get warm, walkable dune conditions without the peak
                    July–August crowds jostling for camel-safari photos, and
                    the light at both ends of the day is extraordinary.
                  </blockquote>
                </section>

                {/* ── How to Reach ────────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Hunder</h2>
                  <p>
                    Hunder lies about 7 km from Diskit, the administrative
                    hub of Nubra Valley, and roughly 120 km from Leh. There
                    are two classic routes in — one dramatic and high-altitude,
                    the other longer but gentler.
                  </p>
                  <ul>
                    <li>
                      <strong>Via Khardung La (the classic route):</strong>{" "}
                      From Leh, the road climbs to Khardung La (often cited as
                      one of the world's highest motorable passes at ~5,359
                      m), then drops through South Pullu and Khardung village
                      into the Shyok river valley before reaching Diskit and
                      Hunder. It's roughly 4–5 hours of driving with stops,
                      through some of the most spectacular high-altitude
                      scenery in Ladakh.
                    </li>
                    <li>
                      <strong>Via Wari La / Agham (the alternate loop):</strong>{" "}
                      A longer, less-travelled route that avoids Khardung La
                      via Sakti and Wari La pass, useful for making a
                      circular Nubra trip rather than backtracking the same
                      road twice.
                    </li>
                    <li>
                      <strong>Shared taxis and buses:</strong> Shared jeeps
                      run from Leh's main taxi stand to Diskit; from there,
                      shared autos or short taxi hops cover the final 7 km to
                      Hunder. J&K Road Transport Corporation also runs a
                      state bus service to Diskit, though it's infrequent.
                    </li>
                    <li>
                      <strong>Self-drive / rented bike:</strong> A popular
                      option is renting a Royal Enfield or hiring a private
                      cab from Leh — both let you stop freely for photos at
                      the Khardung La summit and the Shyok river viewpoints
                      along the way.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Acclimatise in Leh for at
                    least 1–2 full days before attempting Khardung La. The
                    pass sits above 5,300 m, and pushing straight there from
                    a fresh arrival is one of the most common causes of
                    altitude sickness in Ladakh.
                  </div>
                </section>

                {/* ── Permits ─────────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits for Nubra Valley</h2>
                  <p>
                    Nubra Valley, including Hunder and Diskit, falls within a
                    protected border zone close to the Line of Actual Control,
                    so all visitors — Indian and foreign — need an{" "}
                    <strong>Inner Line Permit (ILP)</strong> before travelling
                    beyond Khardung La.
                  </p>
                  <ul>
                    <li>
                      <strong>Indian nationals:</strong> Apply online via the
                      Ladakh administration's permit portal, or through
                      registered travel agents in Leh. Permits are usually
                      issued same-day and are inexpensive (a small per-person
                      environment fee applies).
                    </li>
                    <li>
                      <strong>Foreign nationals:</strong> Can also obtain an
                      ILP for Nubra Valley, generally arranged through a
                      registered Leh-based travel agency, valid for a set
                      number of days.
                    </li>
                    <li>
                      <strong>What to carry:</strong> Print or download
                      multiple copies of your permit — checkpoints at South
                      Pullu (before Khardung La) and North Pullu, as well as
                      near Khalsar, ask for it. Carry a valid photo ID too.
                    </li>
                  </ul>
                  <p>
                    Permits are typically valid for a set window (commonly a
                    week), so plan your Nubra dates before applying. Most
                    guesthouses and homestays in Hunder will also ask to see
                    your permit copy at check-in.
                  </p>
                </section>

                {/* ── Camel Safari ────────────────────────────────────────── */}
                <section id="camel-safari">
                  <h2>The Bactrian Camel Safari</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Double-humped Bactrian camels crossing the sand dunes of Hunder"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The signature experience in Hunder is a short ride on a{" "}
                    <strong>double-humped Bactrian camel</strong> across the
                    dunes. These shaggy, thick-coated animals are a
                    genuinely different species from the single-humped
                    dromedaries seen elsewhere in India — native to the
                    steppes of Central Asia, and believed to be descendants
                    of pack animals abandoned by Silk Route traders who once
                    moved salt, silk, and pashmina wool between Yarkand and
                    Leh through this very valley.
                  </p>
                  <p>
                    Rides are organised at the main dune patch near Hunder
                    village, close to the Sand Dunes Camping ground. A
                    typical ride lasts 15–20 minutes and loops through the
                    dunes, letting you feel the strange sensation of a
                    swaying two-humped gait while snow peaks fill the
                    background. It's touristy, yes — but it's also one of
                    the only places on the planet where this is even
                    possible outside of Mongolia and parts of Central Asia.
                  </p>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Go early morning or just
                    before sunset. Midday light flattens the dunes and the
                    heat can make camels (and riders) irritable. The golden
                    hour, with long shadows raking across the sand, is when
                    Hunder looks most surreal.
                  </div>
                </section>

                {/* ── Sand Dunes ──────────────────────────────────────────── */}
                <section id="sand-dunes">
                  <h2>Sand Dunes at Sunset</h2>
                  <p>
                    Beyond the camel rides, simply walking barefoot across
                    Hunder's dunes at sunset is worth the trip on its own.
                    The sand here isn't a leftover geological curiosity — it's
                    an active cold desert, formed over millennia by wind
                    depositing fine silt and sand carried down by the Shyok
                    and Nubra rivers, trapped in this bowl between the Ladakh
                    and Karakoram ranges.
                  </p>
                  <p>
                    As the sun drops behind the ridgeline, the dunes shift
                    through amber, rose, and finally a cool blue-grey, while
                    the peaks above stay lit pink long after the valley floor
                    falls into shadow. Seabuckthorn bushes and willow groves
                    ring the edges of the dunes, and it's common to see local
                    herders bringing goats and pashmina-wool changra sheep
                    home along the riverbank as the light fades.
                  </p>

                  {/* Diskit Monastery */}
                  <section id="diskit-monastery">
                    <h3>Diskit Monastery</h3>
                    <p>
                      Just 7 km from Hunder, perched dramatically on a cliff
                      overlooking the valley, sits{" "}
                      <strong>Diskit Monastery</strong> (Diskit Gompa) — the
                      oldest and largest Buddhist monastery in Nubra Valley,
                      founded in the 14th century and belonging to the
                      Gelugpa (Yellow Hat) sect. A 32-metre statue of Maitreya
                      Buddha, unveiled in 2010, faces down the valley toward
                      Pakistan, said to bless the region with peace.
                    </p>
                    <p>
                      Climb the steps through the monastery's prayer halls,
                      past centuries-old thangka paintings and ceremonial
                      masks, to the rooftop for one of the finest panoramic
                      views in Nubra — the entire valley, the Shyok river's
                      braided channels, and on clear days, the distant Hunder
                      dunes themselves.
                    </p>
                  </section>
                </section>

                {/* ── Camping ─────────────────────────────────────────────── */}
                <section id="camping">
                  <h2>Camping Under the Stars</h2>
                  <p>
                    Hunder is one of the best places in Ladakh to sleep under
                    an genuinely dark, high-altitude sky. Several campsites
                    are set up right at the edge of the dunes, offering
                    Swiss-style or Ladakhi-style tents with proper bedding —
                    far more comfortable than it sounds given the remote
                    setting.
                  </p>
                  <p>
                    With minimal light pollution and thin desert air at
                    3,000 m, the night sky over Hunder is extraordinary — the
                    Milky Way is often visible to the naked eye on clear,
                    moonless nights. Most campsites serve a simple hot dinner
                    around a bonfire, and mornings bring an almost eerie
                    stillness broken only by wind over the sand and the
                    distant call of a chukar partridge.
                  </p>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Even in peak summer,
                    nighttime temperatures in Hunder can drop close to
                    freezing. Pack a proper sleeping bag layer even if the
                    campsite provides bedding — the cold desert cools fast
                    once the sun sets.
                  </div>
                </section>

                {/* ── Itinerary ───────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Itinerary</h2>
                  <p>
                    Hunder is almost always visited as part of a wider Nubra
                    Valley trip from Leh. Here's a simple, realistic plan
                    that gives the dunes and camels the time they deserve
                    without rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Leh to Hunder via Khardung La",
                        color: "bg-forest-600",
                        activities: [
                          "Early start from Leh, photo stop at Khardung La summit",
                          "Permit checks at South Pullu and North Pullu",
                          "Descend through the Shyok valley to Diskit, then Hunder",
                          "Evening: sunset walk on the dunes, camel ride",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Diskit Monastery & Dune Camping",
                        color: "bg-forest-500",
                        activities: [
                          "Morning visit to Diskit Monastery and Maitreya Buddha statue",
                          "Explore Hunder village's willow-lined lanes and stupas",
                          "Afternoon rest, riverside walk along the Shyok",
                          "Night camping at the dunes, bonfire dinner, stargazing",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Onward or Return to Leh",
                        color: "bg-amber-600",
                        activities: [
                          "Option A: continue further into Nubra toward Turtuk village",
                          "Option B: drive back to Leh via Khardung La",
                          "Stop for photos at the Shyok river confluence",
                          "Arrive Leh by early evening",
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
                  <h2>Where to Stay in Hunder</h2>
                  <p>
                    Accommodation in Hunder ranges from simple family
                    homestays to dune-side glamping tents and a handful of
                    comfortable guesthouses — all far quieter than
                    anything in Leh.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏡",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Local family homestays",
                          "Basic guesthouses in Hunder village",
                          "Simple lodges near Diskit",
                          "Backpacker rooms with shared bath",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹4,500/night",
                        picks: [
                          "Orchard-view guesthouses",
                          "Dune-side camping (deluxe tents)",
                          "Nubra Valley heritage lodges",
                          "Family-run boutique guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹4,500–₹12,000+/night",
                        picks: [
                          "Premium Swiss-tent dune camps",
                          "Nubra luxury resort camps",
                          "Full-board glamping with bonfire dinners",
                          "Private riverside cottages",
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
                  <h2>What to Eat in Hunder</h2>
                  <p>
                    Dining options in Hunder are simple but satisfying —
                    mostly home-cooked Ladakhi fare served by guesthouses and
                    campsites, plus a few small local eateries.
                  </p>
                  <ul>
                    <li>
                      <strong>Skyu & Chutagi:</strong> Hearty Ladakhi pasta
                      dishes — thick wheat dumplings or pinched noodles
                      simmered with root vegetables in a warming broth.
                      Perfect after a cold evening on the dunes.
                    </li>
                    <li>
                      <strong>Thukpa & Momos:</strong> Tibetan-Ladakhi
                      staples found at nearly every guesthouse — noodle soup
                      and steamed or fried dumplings, usually filled with
                      vegetables or yak meat.
                    </li>
                    <li>
                      <strong>Butter tea (Gur Gur Chai):</strong> Salted,
                      churned tea with yak butter — an acquired taste, but a
                      genuine slice of Ladakhi tradition and surprisingly
                      warming at altitude.
                    </li>
                    <li>
                      <strong>Apricot products:</strong> Nubra Valley is
                      known for its apricot orchards. Look out for dried
                      apricots, apricot jam, and fresh apricot juice sold by
                      local families in season.
                    </li>
                    <li>
                      <strong>Homestay thalis:</strong> Most guesthouses
                      serve a fixed home-cooked thali of rice, dal, seasonal
                      vegetables, and sometimes local barley preparations —
                      simple, filling, and included in most stays.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ──────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    A day in Hunder (as part of a Nubra Valley trip) is
                    generally cheaper than a day in Leh proper, though camel
                    rides and camping tents add up.
                  </p>
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
                          ["Accommodation/night", "₹900", "₹3,000", "₹8,000"],
                          ["Food/day", "₹350", "₹700", "₹1,800"],
                          ["Camel safari", "₹300", "₹300", "₹500"],
                          ["Local transport", "₹300", "₹800", "₹2,000"],
                          ["Permit & misc fees", "₹100", "₹150", "₹200"],
                          ["Daily Total", "₹1,950", "₹4,950", "₹12,500"],
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
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 m-0">
                        {[
                          "Acclimatise 1–2 days in Leh before crossing Khardung La",
                          "Carry printed copies of your Inner Line Permit",
                          "Pack warm layers even for summer nights",
                          "Carry enough cash — ATMs are scarce in Nubra",
                          "Book dune-camp tents in advance during peak season",
                        ].map((t) => (
                          <li
                            key={t}
                            className="text-sm text-stone-600 m-0"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-red-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul className="space-y-2 m-0">
                        {[
                          "Don't rush from Leh airport straight to Khardung La",
                          "Don't skip the ILP checkpoints — permits are checked",
                          "Don't overexert on the dunes — altitude sickness is real",
                          "Don't litter the dunes or feed the camels processed food",
                          "Don't rely on mobile network — coverage is patchy",
                        ].map((t) => (
                          <li
                            key={t}
                            className="text-sm text-stone-600 m-0"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <strong>Fuel up in Leh or Khardung:</strong> Petrol
                      pumps are limited in Nubra Valley — top up your tank
                      before leaving Leh.
                    </li>
                    <li>
                      <strong>Network:</strong> Only postpaid BSNL and
                      certain local SIMs work reliably in parts of Nubra;
                      most private prepaid SIMs have no signal. Inform family
                      you may be unreachable for a day or two.
                    </li>
                    <li>
                      <strong>Respect wildlife and culture:</strong> The
                      Bactrian camels are working animals cared for by local
                      families — treat handlers and animals with respect, and
                      dress modestly when visiting Diskit Monastery.
                    </li>
                  </ul>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Hunder",
                  "Nubra Valley",
                  "Ladakh",
                  "Bactrian Camel Safari",
                  "Cold Desert",
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

              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Hunder"
              />
              {/* Related Posts Grid at bottom */}
              <RelatedPostsGrid currentSlug="hunder-travel-guide" />
            </article>

            {/* Right: Related Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="hunder-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
