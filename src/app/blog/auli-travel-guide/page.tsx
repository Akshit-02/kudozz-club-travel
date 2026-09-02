// src/app/blog/auli-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Auli Travel Guide: Skiing, Cable Car & Best Time",
  description:
    "Complete Auli guide — skiing on India's premier slopes, the Auli-Joshimath ropeway, Gorson Bugyal meadow, Nanda Devi views, how to reach, where to stay, and a full visit plan.",
  keywords:
    "Auli, Auli skiing, Auli Uttarakhand, Auli ropeway, Joshimath cable car, Gorson Bugyal, Nanda Devi view, Auli best time to visit, how to reach Auli, Auli ski resort, Auli Lake, winter sports India",
  openGraph: {
    title: "Auli Travel Guide: Skiing, Cable Car & Best Time",
    description:
      "India's premier ski destination — gentle open slopes, one of Asia's longest cable car rides, and sweeping views of Nanda Devi and the Garhwal Himalaya.",
    url: "https://club.kudozz.in/blog/auli-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/rohtang-pass.jpg",
        width: 1200,
        height: 630,
        alt: "Snow-covered ski slopes at Auli with panoramic views of the Garhwal Himalaya",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Auli Travel Guide: Skiing, Cable Car & Best Time",
    description:
      "India's premier ski destination — gentle slopes, one of Asia's longest cable car rides, and Nanda Devi views. The complete Auli guide.",
    images: ["/images/destinations/manali/rohtang-pass.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/auli-travel-guide",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Auli Travel Guide: Skiing, Cable Car & Best Time",
          description:
            "Complete Auli guide — skiing on India's premier slopes, the Auli-Joshimath ropeway, Gorson Bugyal meadow, Nanda Devi views, how to reach, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/manali/rohtang-pass.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/auli-travel-guide",
          },
          keywords:
            "Auli, Auli skiing, Auli ropeway, Joshimath, Nanda Devi, Gorson Bugyal, winter sports India",
          about: {
            "@type": "Place",
            name: "Auli",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttarakhand",
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
                name: "Uttarakhand",
                item: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Auli",
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
    q: "Is Auli good for beginner skiers?",
    a: "Yes — Auli's slopes are relatively gentle and open, without the dense forest or extreme gradients of some other Himalayan ski areas, which is exactly why it's considered India's premier beginner-to-intermediate ski destination. Ski schools at Auli offer short courses with equipment rental, and the Gandhi Peak / Kwanri Bugyal side of the resort has more advanced runs for those who progress quickly.",
  },
  {
    q: "Can I visit Auli if I don't ski?",
    a: "Absolutely. The Auli-Joshimath ropeway is a scenic gondola ride in its own right, and Auli's meadows, pine-and-oak forest trails, and Nanda Devi views make it worthwhile even outside the December-March snow season. Many travellers visit in autumn or early summer purely for the scenery and to avoid the winter ski crowds.",
  },
  {
    q: "What is the Auli-Joshimath ropeway?",
    a: "It's a cable car connecting Joshimath town to Auli, built primarily to ferry skiers and tourists up the mountain without a road journey. At roughly 4 km, it was among Asia's longest cable car rides when it was built, and it remains a major attraction year-round, offering aerial views of the Alaknanda valley regardless of the season.",
  },
  {
    q: "Does Auli have real snow or artificial snow-making?",
    a: "Both. Auli gets genuine winter snowfall, but the resort also has snow-making machines to supplement natural snow and extend the reliable skiing window, particularly useful in years with a delayed or lighter snowfall.",
  },
  {
    q: "How is Auli connected to Badrinath?",
    a: "Auli sits just above Joshimath, which is itself the last major town before Badrinath and also the winter seat of the Badrinath temple deity (the idol is ceremonially moved down to Joshimath's Narsingh temple when Badrinath closes for winter). Many travellers combine an Auli visit with the Badrinath route, especially outside the temple's open season when Auli becomes the more accessible high-altitude stop.",
  },
  {
    q: "What is the best time to visit Auli for snow?",
    a: "January to March offers the most reliable snow cover for skiing. If you want scenery without snow — clearer long-distance mountain views and meadow walks — April to June and September to November are better, with warmer, more predictable weather.",
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
  { id: "introduction", title: "India's Premier Ski Destination", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Auli", level: 2 },
  { id: "attractions", title: "Things to Do & See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AuliGuidePage() {
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
              src="/images/destinations/manali/rohtang-pass.jpg"
              alt="Snow-covered ski slopes at Auli with panoramic views of the Garhwal Himalaya"
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
                { label: "Uttarakhand", href: "/blog/uttarakhand-travel-guide" },
                { label: "Auli", href: null },
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
                "Auli",
                "Skiing India",
                "Joshimath",
                "Nanda Devi",
                "Ropeway",
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
              Auli: Skiing, Cable Car & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              India's premier ski slope, one of Asia's longest cable car
              rides, and open meadows facing Nanda Devi — a Himalayan
              winter-sports base that's just as scenic in summer.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Chamoli District, Garhwal Himalaya",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>India's Premier Ski Destination</h2>
                  <p>
                    <strong>Auli</strong> is a small alpine meadow-turned-ski-resort
                    perched above{" "}
                    <Link href="/blog/badrinath-travel-guide">Joshimath</Link>{" "}
                    in Chamoli district, and by most accounts India's best
                    developed skiing destination — open, gently sloped
                    terrain that suits beginners far better than the steeper,
                    more forested runs found elsewhere in the Himalaya.
                  </p>
                  <p>
                    But Auli isn't just a winter-sports footnote. The
                    Auli-Joshimath ropeway, built to ferry skiers up the
                    mountain, is a scenic gondola ride in its own right and
                    remains one of the longest cable car rides in Asia at the
                    time it was constructed. From the top station, Auli's
                    slopes open onto uninterrupted views of{" "}
                    <strong>Nanda Devi</strong>, India's second-highest peak,
                    alongside a wall of other Garhwal Himalaya summits —
                    views that are just as striking in September as they are
                    under a foot of January snow.
                  </p>
                  <p>
                    That makes Auli a genuinely year-round destination: a ski
                    trip from January to March, or a quieter meadow-and-view
                    escape the rest of the year, minus the crowds and without
                    needing snow gear at all.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🎿</span> Auli at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Chamoli District, Uttarakhand",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~2,500 – 3,050m",
                        },
                        { icon: "🌡️", label: "Ski Season", value: "Jan – Mar" },
                        {
                          icon: "🚡",
                          label: "Known For",
                          value: "Skiing, Ropeway, Nanda Devi Views",
                        },
                        {
                          icon: "🏘️",
                          label: "Base Town",
                          value: "Joshimath",
                        },
                        {
                          icon: "🥾",
                          label: "Nearby Trek",
                          value: "Gorson Bugyal Meadow",
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
                  <h2>Best Time to Visit Auli</h2>
                  <p>
                    What "best time" means at Auli depends entirely on
                    whether you're coming for snow or scenery — the two
                    windows barely overlap.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Jan – Mar",
                        emoji: "⛷️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Peak ski season",
                        text: "Reliable natural snow cover, supplemented by artificial snow-making. The only realistic window for skiing, and Auli's busiest period — book accommodation ahead.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Green meadows, clear views",
                        text: "Snow melts to reveal open bugyals (alpine meadows), rhododendron blooms lower down, and generally clear long-distance mountain views before the monsoon haze sets in.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-stone-100 border-stone-300",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain, landslide risk on the approach road through the Alaknanda valley, and persistent cloud cover that hides the views entirely.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Our pick for scenery",
                        text: "Post-monsoon skies are the clearest of the year, temperatures are comfortable, and the meadows are still green before the first snow returns.",
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
                    <strong>Our pick:</strong> January to March for skiing
                    with real snow underfoot; September to November if you'd
                    rather skip the snow gear and enjoy Auli's meadows and
                    Nanda Devi views at their clearest.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Auli</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> Jolly Grant Airport in
                      Dehradun is the nearest airport, roughly 280 km away —
                      about 9-10 hours by road via Rishikesh and
                      Rudraprayag.
                    </li>
                    <li>
                      <strong>By rail:</strong> Rishikesh and Haridwar are
                      the nearest railheads with regular long-distance
                      connections, both a similar distance and drive time as
                      Dehradun.
                    </li>
                    <li>
                      <strong>By road:</strong> Drive to Joshimath via
                      Rishikesh–Devprayag–Rudraprayag–Chamoli — a long
                      mountain drive best split over two days with an
                      overnight stop. From Joshimath, take the ropeway
                      directly up to Auli, or drive the shorter motorable
                      road that also connects the two.
                    </li>
                    <li>
                      <strong>Auli-Joshimath ropeway:</strong> The most
                      scenic way up — a roughly 4 km cable car ride that
                      operates year-round (weather permitting), not just in
                      ski season.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The road from Joshimath to
                    Badrinath continues past Auli's turnoff, so it's easy to
                    combine an Auli stop with a Badrinath trip on the same
                    route — see our{" "}
                    <Link href="/blog/badrinath-travel-guide">
                      Badrinath travel guide
                    </Link>{" "}
                    for the onward journey.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Things to Do & See in Auli</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Skiers on the open snow slopes of Auli, Uttarakhand"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Skiing on Auli's Slopes</h3>
                  <p>
                    Auli's main run stretches roughly 3 km down open,
                    moderately graded terrain — ideal for beginners and
                    intermediates, with ski schools offering short courses,
                    equipment rental, and instructors for first-timers. More
                    experienced skiers can head toward the steeper sections
                    near Gorson Bugyal and Kwanri, and the Auli slopes have
                    also hosted national skiing championships.
                  </p>
                  <h3>The Auli-Joshimath Ropeway</h3>
                  <p>
                    Built originally to move skiers and equipment up the
                    mountain, this cable car has become an attraction in its
                    own right — a roughly 4 km, 20-25 minute ride with
                    sweeping views over the Alaknanda valley below. It's one
                    of the longest cable car rides in Asia and runs
                    regardless of season, making it the easiest way to
                    experience Auli without a road trip.
                  </p>
                  <h3>Auli Lake</h3>
                  <p>
                    A man-made reservoir built to supply Auli's
                    snow-making machines, Auli Lake sits within easy walking
                    distance of the main slope area. In winter it often
                    freezes over; in summer it reflects the surrounding
                    pine and deodar forest, making it a pleasant short walk
                    regardless of season.
                  </p>
                  <h3>Gorson Bugyal</h3>
                  <p>
                    A wide alpine meadow (bugyal) roughly an hour's walk
                    above Auli's main slope, Gorson Bugyal opens onto an even
                    broader Himalayan panorama, including Nanda Devi,
                    Kamet, and Mana peak. It's an easy, non-technical trek
                    that rewards the effort with one of the best viewpoints
                    in the area, and can be combined with a further push
                    toward Kwanri Bugyal for those with more time.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Auli</h2>
                  <p>
                    Accommodation directly at Auli is limited and mostly
                    resort-style, built around the ski season; a wider and
                    cheaper range of stays is available a short drive below
                    in Joshimath, which most budget travellers use as a
                    base.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,800/night",
                        picks: [
                          "GMVN guesthouses in Joshimath",
                          "Budget hotels near Joshimath bus stand",
                          "Basic lodges in lower Auli",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,500–₹7,500/night",
                        picks: [
                          "Mid-size hotels in Joshimath town",
                          "Auli slope-view guesthouses",
                          "GMVN Tourist Rest House, Auli",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹10,000–₹25,000+/night",
                        picks: [
                          "Ski-resort properties at Auli slope-top",
                          "Premium mountain-view resorts",
                          "Full-board ski package stays",
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
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Joshimath Arrival & Acclimatise",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive in Joshimath, check in and rest",
                          "Short walk around town, visit Narsingh Temple",
                          "Early night ahead of an Auli morning start",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Auli Slopes & Ropeway",
                        color: "bg-sky-600",
                        activities: [
                          "Ropeway up to Auli in the morning",
                          "Skiing lesson or slope time (winter) / meadow walk (other seasons)",
                          "Visit Auli Lake, sunset views over the valley",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Gorson Bugyal & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Early trek up to Gorson Bugyal for panoramic views",
                          "Return via ropeway, onward drive from Joshimath",
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
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * Travellers visiting outside ski season sometimes
                    combine Auli with{" "}
                    <Link href="/blog/chopta-travel-guide">Chopta</Link>{" "}
                    a couple of days' drive south, for a broader
                    meadows-and-Himalaya circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Hotel/resort dining at Auli:</strong> Most
                      food options directly at Auli are attached to the
                      slope-top resorts, offering simple North Indian and
                      Continental menus.
                    </li>
                    <li>
                      <strong>Dhabas in Joshimath:</strong> Simple, hearty
                      North Indian and local Garhwali meals — dal, rice,
                      seasonal vegetables, and rotis — at budget prices.
                    </li>
                    <li>
                      <strong>Pack snacks for the slopes:</strong> Options
                      thin out on the mountain itself outside the main
                      resort buildings, so carry water and snacks if you're
                      spending a full day skiing or trekking.
                    </li>
                  </ul>
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
                            "₹1,800",
                            "₹5,000",
                            "₹15,000",
                          ],
                          ["Ropeway (round trip)", "₹1,200", "₹1,200", "₹1,200"],
                          ["Food/day", "₹600", "₹1,500", "₹3,500"],
                          [
                            "Ski gear + lesson (half-day)",
                            "₹2,500",
                            "₹4,000",
                            "₹6,000",
                          ],
                          ["Local transport/day", "₹500", "₹1,200", "₹2,500"],
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
                    * Figures are per person, per day (except the ropeway, a
                    round-trip figure). Full-day or multi-day ski packages
                    cost more than the half-day figure shown here.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Auli</h2>
                  <ul>
                    <li>
                      <strong>Book ski gear and lessons ahead in peak
                      season:</strong> January-February weekends see the
                      busiest slopes and longest waits for equipment.
                    </li>
                    <li>
                      <strong>Carry warm layers regardless of season:</strong>{" "}
                      At 2,500m+, mornings and evenings are cold even outside
                      winter — pack a proper jacket even for a summer visit.
                    </li>
                    <li>
                      <strong>Check road and ropeway status before
                      travelling:</strong> Heavy winter snowfall can
                      occasionally close the ropeway or the Joshimath-Auli
                      road; call ahead in December-February.
                    </li>
                    <li>
                      <strong>Acclimatise a day in Joshimath first:</strong>{" "}
                      Especially if you've travelled straight up from lower
                      elevations, a short rest before heading to Auli's
                      slopes helps avoid altitude discomfort.
                    </li>
                    <li>
                      <strong>Combine with Badrinath or Chopta:</strong> Auli
                      sits on or near routes to both, making it easy to fold
                      into a longer Garhwal Himalaya itinerary rather than
                      visiting on its own.
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
                          "Book ski lessons and gear ahead in Jan-Feb",
                          "Carry warm layers even outside winter",
                          "Take the ropeway for the views alone if not skiing",
                          "Walk up to Gorson Bugyal for a wider panorama",
                          "Acclimatise a day in Joshimath first",
                          "Check road/ropeway status in heavy snow",
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
                          "Expect deep snow guaranteed outside Jan-Mar",
                          "Ski without a lesson if you're a first-timer",
                          "Underestimate the cold at 2,500m+",
                          "Skip food/water before a Gorson Bugyal walk",
                          "Rely on limited ATMs — carry cash from Joshimath",
                          "Rush straight up without a rest day if arriving from low altitude",
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

                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Extend the trip:</strong> Auli pairs naturally
                    with{" "}
                    <Link href="/blog/badrinath-travel-guide">Badrinath</Link>{" "}
                    further up the same route (in season), or with the
                    meadows and Tungnath trek at{" "}
                    <Link href="/blog/chopta-travel-guide">Chopta</Link>{" "}
                    a day's drive south, for a broader Garhwal Himalaya trip.
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
                  "Auli",
                  "Uttarakhand",
                  "Skiing India",
                  "Joshimath",
                  "Nanda Devi",
                  "Ropeway",
                  "Winter Sports",
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

              <RelatedPostsGrid currentSlug="auli-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="auli-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
