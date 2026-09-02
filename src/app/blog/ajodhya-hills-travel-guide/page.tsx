// src/app/blog/ajodhya-hills-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ajodhya Hills Travel Guide: Trekking & Tribal Culture",
  description:
    "Complete Ajodhya Hills guide — Bamni Falls, Turga Falls, Murguma Dam, Marble Lake, trekking trails, Chhau dance heritage, how to reach from Purulia, and a full visit plan.",
  keywords:
    "Ajodhya Hills travel guide, Purulia hill station, Bamni Falls, Turga Falls, Murguma Dam, Baghmundi, Marble Lake Khairabera, Chhau dance Purulia, Gorgaburu peak, trekking West Bengal, Santhal tribal culture, how to reach Ajodhya Hills",
  openGraph: {
    title: "Ajodhya Hills Travel Guide: Trekking & Tribal Culture",
    description:
      "A forested plateau on the fringe of the Chota Nagpur plateau — waterfalls, a tribal-culture heartland, and West Bengal's most underrated trekking country.",
    url: "https://club.kudozz.in/blog/ajodhya-hills-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Forested plateau and hills, evoking the landscape of Ajodhya Hills, Purulia",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajodhya Hills Travel Guide: Trekking & Tribal Culture",
    description:
      "Waterfalls, sal forests, and Purulia's Chhau dance heritage — the complete Ajodhya Hills guide.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ajodhya-hills-travel-guide",
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
          headline: "Ajodhya Hills Travel Guide: Trekking & Tribal Culture",
          description:
            "Complete Ajodhya Hills guide — Bamni Falls, Turga Falls, Murguma Dam, Marble Lake, trekking trails, Chhau dance heritage, how to reach from Purulia, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/ajodhya-hills-travel-guide",
          },
          keywords:
            "Ajodhya Hills, Purulia, Chhau dance, trekking, tribal culture, West Bengal, off-beat",
          about: {
            "@type": "Place",
            name: "Ajodhya Hills",
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
                name: "West Bengal",
                item: "https://club.kudozz.in/blog/west-bengal-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Ajodhya Hills",
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
    q: "Where exactly are the Ajodhya Hills located?",
    a: "The Ajodhya Hills sit in Purulia district in the far west of West Bengal, on the fringe of the Chota Nagpur plateau near the Jharkhand border. Baghmundi is the main base town for exploring the hills.",
  },
  {
    q: "How do I reach Ajodhya Hills from Kolkata?",
    a: "The nearest railhead is Purulia Junction, roughly 40 km from the hills, well connected to Kolkata by train. By road, it's about 280 km and 6-7 hours' drive from Kolkata via Bankura and Purulia town, or you can combine the train to Purulia with a taxi onward.",
  },
  {
    q: "What is the best time to visit Ajodhya Hills?",
    a: "October to February is the most comfortable window, with dry weather and cool temperatures ideal for trekking. The monsoon months of June to September turn the hills dramatically green and the waterfalls run full, but trails become slippery and less safe.",
  },
  {
    q: "Is Ajodhya Hills good for trekking?",
    a: "Yes — it's one of West Bengal's better trekking destinations, with trails through sal forest leading to viewpoints, waterfalls, and the Gorgaburu peak area. Most treks are moderate rather than technical, suited to reasonably fit beginners with a local guide.",
  },
  {
    q: "What is Chhau dance and can I see it in Purulia?",
    a: "Chhau is a semi-classical masked dance form with martial, tribal, and folk-theatre roots, recognised by UNESCO as an Intangible Cultural Heritage. Purulia's version — Purulia Chhau — is especially known for its elaborate masks and vigorous movement, and is performed at village festivals and, increasingly, for visitors during the winter tourist season.",
  },
  {
    q: "How many days should I plan for Ajodhya Hills?",
    a: "2 days is enough to cover the main waterfalls, Murguma Dam, and a short trek. A 3rd day lets you add a visit to Marble Lake and explore villages around Baghmundi at a slower pace.",
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
  { id: "introduction", title: "Purulia's Forested Plateau", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ajodhya Hills", level: 2 },
  { id: "things-to-do", title: "Waterfalls, Treks & Culture", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AjodhyaHillsGuidePage() {
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
              alt="Forested plateau and hills, evoking the landscape of Ajodhya Hills, Purulia"
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
                { label: "West Bengal", href: "/blog/west-bengal-travel-guide" },
                { label: "Ajodhya Hills", href: null },
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
                "Ajodhya Hills",
                "Purulia",
                "Chhau Dance",
                "Trekking",
                "Tribal Culture",
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
              Ajodhya Hills: Trekking, Waterfalls & Tribal Culture Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A forested plateau on the fringe of the Chota Nagpur hills —
              waterfalls, a dam-side lake, sal-forest treks, and the
              masked-dance heartland of Purulia district.
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
                  text: "Purulia district, West Bengal",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Purulia's Forested Plateau</h2>
                  <p>
                    The <strong>Ajodhya Hills</strong> rise out of the red
                    laterite plains of Purulia district, in the far
                    southwest of{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    , where the state's terrain begins folding into the
                    edge of the Chota Nagpur plateau. It's a landscape of
                    sal forest, granite outcrops, and seasonal waterfalls
                    that feels closer to neighbouring Jharkhand than to the
                    Bengal most travellers picture — quieter, drier, and
                    largely undiscovered outside the state.
                  </p>
                  <p>
                    <strong>Baghmundi</strong> is the small town most people
                    use as a base, from where roads climb toward{" "}
                    <strong>Bamni Falls</strong> and{" "}
                    <strong>Turga Falls</strong>, the hills' two best-known
                    cascades, and toward{" "}
                    <strong>Murguma Dam and Lake</strong>, a reservoir ringed
                    by hills that's popular for its stillness and views
                    rather than any single big attraction.
                  </p>
                  <p>
                    Beyond the scenery, the region is a heartland of Santhal
                    and Munda tribal culture, and of{" "}
                    <strong>Purulia Chhau</strong>, the masked martial-folk
                    dance tradition recognised by UNESCO — a reason to plan a
                    visit around a village festival if your dates allow it.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛰️</span> Ajodhya Hills at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Purulia district, West Bengal",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Purulia Junction (~40 km)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🥾",
                          label: "Known For",
                          value: "Trekking, Waterfalls",
                        },
                        {
                          icon: "🎭",
                          label: "Culture",
                          value: "Purulia Chhau Dance",
                        },
                        {
                          icon: "🏕️",
                          label: "Base Town",
                          value: "Baghmundi",
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
                  <h2>Best Time to Visit Ajodhya Hills</h2>
                  <p>
                    The hills change character sharply across the year, from
                    dry winter clarity to a dramatically green monsoon.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry, cool, and comfortable for trekking, with clear views from the plateau's viewpoints. This is also the season for Chhau performances at local festivals.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, drier waterfalls",
                        text: "Increasingly hot on the plains and the waterfalls thin out considerably — still visitable, but less rewarding than winter or monsoon.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — greenest, but slippery",
                        text: "Bamni and Turga Falls run at their fullest and the hills turn a vivid green, but trails become slippery and less safe for trekking.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🎭",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Festival season",
                        text: "The best window to catch a Chhau performance in a Purulia village, alongside the year's most comfortable weather for exploring.",
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
                    <strong>Our pick:</strong> November to February —
                    dry trails, cool weather, and the best odds of catching a
                    Chhau performance in a nearby village.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ajodhya Hills</h2>
                  <p>
                    Ajodhya Hills sits well off the main rail and highway
                    network, so most visits combine a train to Purulia with
                    a road transfer, or a longer direct drive from Kolkata.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail to Purulia Junction:</strong> The
                      nearest major railhead, roughly 40 km from the hills,
                      with regular trains from Kolkata (Howrah). From
                      Purulia town, taxis and shared vehicles cover the rest
                      of the way to Baghmundi.
                    </li>
                    <li>
                      <strong>By road from Kolkata:</strong> Around 280 km
                      and 6-7 hours by car via Bankura and Purulia town — a
                      long but manageable day's drive, often better split
                      with an overnight stop.
                    </li>
                    <li>
                      <strong>Getting around locally:</strong> Once at
                      Baghmundi, hired jeeps or taxis are the practical way
                      to reach Bamni Falls, Turga Falls, and Murguma Dam, as
                      public transport between these spots is sparse.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Hire a jeep for the full day
                    from Baghmundi rather than point-to-point — the
                    waterfalls, dam, and viewpoints are scattered enough that
                    a single vehicle for the day works out both cheaper and
                    far less hassle.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Waterfalls, Treks & Culture</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Sal forest and hill terrain typical of the Ajodhya Hills plateau"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Bamni Falls & Turga Falls</h3>
                  <p>
                    The two best-known cascades in the hills, both reached by
                    a short walk from the nearest road point through sal
                    forest. Bamni Falls tumbles over a series of granite
                    steps and is the more accessible of the two; Turga Falls
                    sits deeper into the hills and rewards a slightly longer
                    approach with a quieter, more dramatic setting —both are
                    at their fullest during and just after the monsoon.
                  </p>
                  <h3>Murguma Dam & Lake</h3>
                  <p>
                    A reservoir formed by an earthen dam across the Murguma
                    river, ringed by low hills and forest. It's less about
                    any single sight than the setting itself — a quiet spot
                    for a picnic, a short boat ride, or simply watching the
                    light change over the water toward evening.
                  </p>
                  <h3>Marble Lake (Khairabera) & Gorgaburu Peak</h3>
                  <p>
                    Marble Lake, near Khairabera, is a small but strikingly
                    clear water body inside forest cover, worth the detour
                    for its stillness. For trekkers with more time, the trail
                    toward Gorgaburu — one of the higher points on the
                    plateau — climbs through sal and mahua forest to open
                    viewpoints over the surrounding countryside.
                  </p>
                  <h3>Chhau Dance & Tribal Villages</h3>
                  <p>
                    Purulia's Santhal and Munda villages around the hills
                    keep alive traditions that predate the region's tourism
                    entirely, chief among them <strong>Chhau</strong> — a
                    masked, martial-arts-influenced dance form performed at
                    village festivals, especially around Chaitra Parva in
                    spring and during the winter tourist season. Ask locally
                    or through your accommodation about any performances
                    happening during your visit.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Ajodhya Hills</h2>
                  <p>
                    Accommodation is modest and mostly concentrated around
                    Baghmundi and the forest department's own guesthouses —
                    don't expect resort-style luxury here, and that's part
                    of the appeal.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Simple lodges in Baghmundi",
                          "Forest department rest houses",
                          "Basic guesthouses near the trailheads",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Tourist lodges with hill views",
                          "Small eco-resorts near Murguma",
                          "Government tourism department properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹5,000–₹9,000+/night",
                        picks: [
                          "Boutique nature resorts in the district",
                          "Private cottages with dedicated staff",
                          "Full-board packages with guided treks",
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
                        title: "Arrival & Waterfalls",
                        color: "bg-amber-700",
                        activities: [
                          "Travel to Baghmundi, check in",
                          "Afternoon at Bamni Falls",
                          "Evening walk around the base town",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Turga Falls & Murguma Dam",
                        color: "bg-sky-600",
                        activities: [
                          "Morning trek to Turga Falls",
                          "Afternoon at Murguma Dam and Lake",
                          "Sunset by the reservoir",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Marble Lake & Culture",
                        color: "bg-forest-600",
                        activities: [
                          "Morning visit to Marble Lake (Khairabera)",
                          "Stop at a nearby tribal village",
                          "Return journey via Purulia Junction",
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
                    * Many travellers combine Ajodhya Hills with{" "}
                    <Link href="/blog/mukutmanipur-travel-guide">
                      Mukutmanipur
                    </Link>{" "}
                    or the terracotta temples of{" "}
                    <Link href="/blog/bishnupur-travel-guide">Bishnupur</Link>
                    , all within the same Bankura-Purulia belt of southwest
                    Bengal.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Ajodhya Hills</h2>
                  <ul>
                    <li>
                      <strong>Baghmundi's local dhabas:</strong> Simple
                      Bengali thalis — rice, dal, seasonal vegetables, and
                      occasionally fish or chicken curry — are the mainstay
                      here.
                    </li>
                    <li>
                      <strong>Lodge and guesthouse kitchens:</strong> Most
                      accommodation in the area serves home-style meals to
                      guests, often the most reliable food option given how
                      few standalone restaurants exist near the hills.
                    </li>
                    <li>
                      <strong>Purulia town:</strong> If arriving or
                      departing via Purulia Junction, the town itself has a
                      wider spread of eateries for a proper meal before or
                      after the hills.
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
                          ["Accommodation/night", "₹1,200", "₹3,000", "₹7,000"],
                          ["Jeep hire/day", "₹1,500", "₹2,200", "₹3,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          ["Train to Purulia (round trip)", "₹300", "₹800", "₹1,500"],
                          ["Local guide (trek)", "₹500", "₹800", "₹1,200"],
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
                    * Figures are per person, per day (except train, a round
                    trip figure). Jeep hire is typically shared across a
                    small group.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ajodhya Hills</h2>
                  <ul>
                    <li>
                      <strong>Hire a local guide for treks:</strong> Trails
                      toward Gorgaburu and the deeper forest are not always
                      clearly marked — a local guide from Baghmundi makes
                      navigation and safety far easier.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATM access is limited
                      once away from Purulia town — withdraw what you need
                      in advance.
                    </li>
                    <li>
                      <strong>Avoid the monsoon for trekking:</strong> The
                      waterfalls are spectacular in the rains, but trails
                      turn slippery and less safe — plan waterfall visits for
                      just after monsoon if you want both safety and water
                      flow.
                    </li>
                    <li>
                      <strong>Pack for cool mornings and evenings:</strong>{" "}
                      Winter temperatures on the plateau drop noticeably
                      lower than in the plains below.
                    </li>
                    <li>
                      <strong>Ask about Chhau performances in advance:</strong>{" "}
                      These are village-scheduled events, not daily shows —
                      check locally or through your accommodation if seeing
                      one matters to your trip.
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
                          "Hire a jeep for the full day from Baghmundi",
                          "Take a local guide on longer treks",
                          "Carry enough cash for the whole trip",
                          "Pack layers for cool hill mornings",
                          "Ask locally about Chhau performances",
                          "Combine the trip with Mukutmanipur or Bishnupur",
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
                          "Attempt unmarked trails without a guide",
                          "Expect wide ATM or card access here",
                          "Trek to the waterfalls in heavy monsoon rain",
                          "Expect resort-style luxury accommodation",
                          "Rely on public transport between sights",
                          "Skip warm layers for winter evenings",
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
                    <strong>🗺️ Extend the trip:</strong> Ajodhya Hills pairs
                    naturally with{" "}
                    <Link href="/blog/mukutmanipur-travel-guide">
                      Mukutmanipur
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/bishnupur-travel-guide">Bishnupur</Link>
                    , both within reasonable driving distance in the same
                    southwest Bengal belt. See our full{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal travel guide
                    </Link>{" "}
                    for the wider region.
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
                  "Ajodhya Hills",
                  "Purulia",
                  "West Bengal",
                  "Chhau Dance",
                  "Trekking",
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

              <RelatedPostsGrid currentSlug="ajodhya-hills-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ajodhya-hills-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
