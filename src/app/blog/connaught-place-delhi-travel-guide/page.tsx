// src/app/blog/connaught-place-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Connaught Place Guide: Shopping, Food & Nightlife",
  description:
    "Complete Connaught Place travel guide — the Inner, Middle & Outer Circle layout, Central Park, Palika Bazaar, iconic old-school eateries, nightlife, and how to reach CP via Rajiv Chowk Metro.",
  keywords:
    "Connaught Place Delhi, CP Delhi shopping, Connaught Place restaurants, Central Park Connaught Place, things to do in Connaught Place, Rajiv Chowk metro, Palika Bazaar, Connaught Place nightlife, Connaught Place history",
  openGraph: {
    title: "Connaught Place Guide: Shopping, Food & Nightlife",
    description:
      "The Inner, Middle & Outer Circle layout, Central Park, Palika Bazaar, old-school eateries and nightlife — the complete guide to Delhi's Georgian-era commercial hub.",
    url: "https://club.kudozz.in/blog/connaught-place-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Sandstone heritage architecture, India — used here for illustrative purposes only, not a photograph of Connaught Place's colonial Georgian buildings",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Connaught Place Guide: Shopping, Food & Nightlife",
    description:
      "The Inner, Middle & Outer Circle layout, Central Park, Palika Bazaar, old-school eateries and nightlife — the complete Connaught Place guide.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/connaught-place-delhi-travel-guide",
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
          headline: "Connaught Place Guide: Shopping, Food & Nightlife",
          description:
            "Complete Connaught Place travel guide — the Inner, Middle & Outer Circle layout, Central Park, Palika Bazaar, iconic old-school eateries, nightlife, and how to reach CP via Rajiv Chowk Metro.",
          image:
            "https://club.kudozz.in/images/destinations/jaisalmer/fort.jpg",
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
            "@id": "https://club.kudozz.in/blog/connaught-place-delhi-travel-guide",
          },
          keywords:
            "Connaught Place Delhi, CP Delhi shopping, Connaught Place restaurants, Central Park Connaught Place, things to do in Connaught Place, Rajiv Chowk metro, Palika Bazaar",
          about: {
            "@type": "Place",
            name: "Connaught Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "New Delhi",
              addressRegion: "Delhi",
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
                name: "Delhi",
                item: "https://club.kudozz.in/blog/delhi-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Connaught Place",
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
    q: "What is Connaught Place famous for?",
    a: "Connaught Place is famous as Delhi's colonial-era Georgian-style circular commercial hub, built by the British in the early 1930s. Today it's known for its ring of white-columned colonnaded buildings, branded shopping, a dense cluster of old-school and modern restaurants and bars, the underground Palika Bazaar market, and Central Park at its heart, which hosts Delhi's official National Flag on one of the tallest flagpoles in the country.",
  },
  {
    q: "Is Connaught Place and Rajiv Chowk the same?",
    a: "Yes. Connaught Place was officially renamed Rajiv Chowk in 1995 after former Prime Minister Rajiv Gandhi. The name change is used on the Delhi Metro station and in some official signage, but almost everyone — locals and visitors alike — still calls the area Connaught Place or simply 'CP' in everyday conversation.",
  },
  {
    q: "What is the best time to visit Connaught Place?",
    a: "October to March is the most comfortable window, with cool, pleasant weather for walking the circles and sitting out at Central Park. Within a single day, early evening (roughly 5 PM to 9 PM) is when CP is at its liveliest — shops are open, restaurants fill up, and the lit-up colonnades and Central Park draw the biggest crowds.",
  },
  {
    q: "Is Palika Bazaar worth visiting?",
    a: "Yes, if you enjoy dense, bargain-heavy underground markets. Palika Bazaar, beneath the Inner Circle's central lawns, is packed with small stalls selling clothing, electronics, accessories, and bags at negotiable prices. Bargaining is expected, and it's worth comparing a few stalls before buying — it's a very different experience from the branded stores above ground.",
  },
  {
    q: "How do I reach Connaught Place by metro?",
    a: "Take the Delhi Metro to Rajiv Chowk station, which sits directly beneath Connaught Place and is one of the busiest interchange stations in the network, connecting the Yellow Line and the Blue Line. Multiple exits open out onto different points around the Inner and Outer Circles, so it's worth checking which gate is closest to where you're headed.",
  },
  {
    q: "Is Connaught Place good for shopping?",
    a: "Yes, for a mix of styles. The Inner and Middle Circles have branded stores, bookshops, and popular Indian and international retail chains, while Palika Bazaar offers cheaper, negotiable-price goods underground. On Sundays, a well-known second-hand and rare book market sets up along the outer pavements, popular with collectors and students.",
  },
  {
    q: "Is Connaught Place safe at night?",
    a: "Generally yes — CP is one of Delhi's most policed and well-lit commercial areas, and it stays busy well into the evening thanks to its restaurants and bars. As with any crowded market area, keep an eye on belongings, use registered taxis or app-based cabs late at night, and be wary of unsolicited 'guides' or touts, particularly near Palika Bazaar's entrances.",
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
  { id: "introduction", title: "Connaught Place: A Colonial Circle", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Connaught Place", level: 2 },
  { id: "layout", title: "The Layout Explained", level: 2 },
  { id: "central-park", title: "Central Park", level: 2 },
  { id: "shopping", title: "Shopping in CP", level: 2 },
  { id: "food-nightlife", title: "Food & Nightlife", level: 2 },
  { id: "itinerary", title: "Half-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ConnaughtPlaceGuidePage() {
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
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Sandstone heritage architecture, India — used here for illustrative purposes only, not a photograph of Connaught Place's colonial Georgian buildings"
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
                { label: "Delhi", href: "/blog/delhi-travel-guide" },
                { label: "Connaught Place", href: null },
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
                "Connaught Place",
                "Delhi",
                "Shopping",
                "Nightlife",
                "Rajiv Chowk",
                "City Guide",
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
              Connaught Place Travel Guide: Shopping, Food & Nightlife
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Georgian-style circle of colonnaded white buildings at the
              heart of New Delhi — branded stores, an underground bazaar,
              old-school eateries beside modern bars, and a green park with
              the National Flag at its centre.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Connaught Place, New Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,700 words",
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
                  <h2>Connaught Place: A Colonial Circle at the Heart of Delhi</h2>
                  <p>
                    <strong>Connaught Place</strong> — universally shortened
                    to <strong>CP</strong> — is one of the defining landmarks
                    of{" "}
                    <Link href="/blog/delhi-travel-guide">New Delhi</Link>: a
                    vast, circular commercial hub of white-columned, Georgian-
                    style buildings, built by the British between 1929 and
                    1933 and designed by architect{" "}
                    <strong>Robert Tor Russell</strong>. Named after Prince
                    Arthur, the Duke of Connaught, it was conceived as the
                    financial and shopping centre of the new imperial
                    capital, and nearly a century later, it still functions
                    that way — just with a very different mix of shops,
                    restaurants, and bars filling its colonnades.
                  </p>
                  <p>
                    In 1995, the area was officially renamed{" "}
                    <strong>Rajiv Chowk</strong> after former Prime Minister
                    Rajiv Gandhi, and that's the name you'll see on metro
                    signage and official maps. In practice, almost nobody
                    calls it that — locals, cab drivers, and shopkeepers all
                    say "Connaught Place" or simply "CP," and this guide uses
                    both interchangeably, the way Delhi itself does.
                  </p>
                  <p>
                    Unlike the Mughal-era monuments and dense lanes of{" "}
                    <Link href="/blog/paharganj-delhi-travel-guide">
                      Paharganj
                    </Link>{" "}
                    or Old Delhi, CP is unmistakably colonial in design —
                    wide radial roads, uniform white facades, and a
                    deliberate, planned geometry that couldn't be more
                    different from the organic chaos of the old city just a
                    few kilometres north. That contrast is part of what makes
                    it worth visiting: a single afternoon in Delhi can take
                    you from Mughal forts to British-era colonnades to glass-
                    fronted modern cafés without ever leaving the city
                    centre.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Connaught Place at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "New Delhi, Central Delhi",
                        },
                        {
                          icon: "🏗️",
                          label: "Built",
                          value: "1929 – 1933, Robert Tor Russell",
                        },
                        {
                          icon: "🏷️",
                          label: "Official Name",
                          value: "Rajiv Chowk (since 1995)",
                        },
                        {
                          icon: "🚇",
                          label: "Metro",
                          value: "Rajiv Chowk (Yellow + Blue Line)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar; evenings year-round",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Visit",
                          value: "₹300 – ₹3,000+",
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
                  <h2>Best Time to Visit Connaught Place</h2>
                  <p>
                    CP is an outdoor, walk-heavy destination — its appeal
                    comes from strolling the circles, sitting out in Central
                    Park, and browsing storefronts, all of which are far more
                    pleasant when the weather cooperates.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days make walking the full circle and lingering in Central Park genuinely enjoyable, with comfortable evenings that stretch the CP experience well into the night.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around midday",
                        text: "Daytime heat can be intense, but CP's covered colonnades offer shade for walking between shops — save open-air Central Park time for morning or evening.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — humid, occasional showers",
                        text: "Sudden downpours are common, though CP's colonnaded walkways offer decent shelter between stores — carry a light rain jacket regardless.",
                      },
                      {
                        season: "Evenings, year-round",
                        emoji: "🌆",
                        color: "bg-stone-50 border-stone-200",
                        mood: "The liveliest window daily",
                        text: "From roughly 5 PM to 9 PM, CP's shops, restaurants, and bars are all in full swing and the lit-up colonnades are at their most atmospheric — worth prioritising regardless of season.",
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
                    <strong>Our pick:</strong> a winter evening, October
                    through March. Comfortable temperatures, CP's colonnades
                    lit up, and Central Park pleasant enough to actually sit
                    in rather than just pass through.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Connaught Place</h2>
                  <p>
                    CP sits close to dead centre in New Delhi, and getting
                    there is rarely the hard part — the metro makes it one of
                    the most accessible destinations in the entire city.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro (recommended):</strong>{" "}
                      <strong>Rajiv Chowk station</strong> sits directly
                      beneath Connaught Place and is one of the busiest
                      interchange stations on the Delhi Metro network,
                      connecting the <strong>Yellow Line</strong> (from
                      Samaypur Badli to HUDA City Centre) and the{" "}
                      <strong>Blue Line</strong> (from Dwarka to Noida /
                      Vaishali). Multiple exit gates open onto different
                      points around the circles, so check which gate is
                      closest to your destination before surfacing.
                    </li>
                    <li>
                      <strong>By Auto-rickshaw or App Cab:</strong> Widely
                      available from anywhere in the city; use app-based
                      booking or insist on the meter. Traffic around CP's
                      radial roads can be heavy at peak hours, so factor in
                      extra time versus the metro.
                    </li>
                    <li>
                      <strong>By Bus:</strong> Numerous DTC bus routes stop
                      around the Outer Circle, though the metro is a far
                      simpler option for first-time visitors unfamiliar with
                      Delhi's bus network.
                    </li>
                    <li>
                      <strong>On Foot:</strong> If you're staying nearby —
                      Janpath, Barakhamba Road, or the wider New Delhi
                      district — CP is comfortably walkable and one of the
                      more pedestrian-friendly parts of central Delhi.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Parking around CP is
                    genuinely difficult and often expensive during peak
                    hours — take the metro to Rajiv Chowk instead of driving
                    in, even if you have a car for the rest of your trip.
                  </div>
                </section>

                {/* ── Layout ────────────────────────────────────────────── */}
                <section id="layout">
                  <h2>The Layout Explained: Inner, Middle & Outer Circle</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Generic Indian heritage architecture — illustrative only, not a photograph of Connaught Place"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    CP's design is genuinely unusual for Delhi — a set of
                    concentric rings radiating out from a central green,
                    connected by spoke-like roads. Understanding the layout
                    makes navigating it far easier, since addresses and shop
                    directions are almost always given in terms of these
                    rings and blocks rather than street names.
                  </p>
                  <ul>
                    <li>
                      <strong>Inner Circle:</strong> The innermost ring of
                      colonnaded buildings, directly surrounding Central
                      Park. This is where most of the well-known shops,
                      restaurants, and bars are concentrated, and where
                      Palika Bazaar's underground entrances are located.
                    </li>
                    <li>
                      <strong>Middle Circle:</strong> A less commonly used
                      term for the outer edge of the Inner Circle's built-up
                      ring, sometimes referenced in older signage and shop
                      addresses.
                    </li>
                    <li>
                      <strong>Outer Circle:</strong> The outermost ring,
                      further from Central Park, with a mix of shops,
                      offices, and access points onto CP's radial connecting
                      roads — including the road toward Janpath.
                    </li>
                    <li>
                      <strong>The block-letter system (A through N):</strong>{" "}
                      Each block of colonnaded buildings around the circle is
                      labelled with a letter — Block A, B, C, and so on
                      through roughly N — making it possible to give and
                      follow directions like "Block N, Outer Circle" instead
                      of a conventional street address. Locals and Delhi
                      residents navigate CP almost entirely this way, so it's
                      worth noting the block letter of anywhere you plan to
                      visit.
                    </li>
                  </ul>
                  <blockquote>
                    First-time visitors often find CP's circular geometry
                    disorienting for the first ten minutes and second nature
                    after that — once you've walked one full lap, the block
                    system clicks into place.
                  </blockquote>
                </section>

                {/* ── Central Park ──────────────────────────────────────── */}
                <section id="central-park">
                  <h2>Central Park: The Green Heart of CP</h2>
                  <p>
                    At the very centre of the circle sits{" "}
                    <strong>Central Park</strong>, a large open lawn that
                    functions as CP's shared living room — office workers on
                    lunch breaks, evening strollers, students, and tourists
                    all end up here at some point during a visit.
                  </p>
                  <ul>
                    <li>
                      <strong>The National Flag:</strong> Central Park is
                      home to one of the tallest flagpoles in the country,
                      flying a large Indian National Flag that's visible from
                      much of the surrounding circle — a genuine landmark in
                      its own right and a popular photo spot.
                    </li>
                    <li>
                      <strong>Evening gatherings:</strong> As temperatures
                      drop in the evening, the lawns fill with people sitting
                      out, vendors selling snacks and balloons, and a
                      relaxed, unhurried atmosphere that's a nice contrast to
                      the shopping and traffic around the ring.
                    </li>
                    <li>
                      <strong>Occasional events:</strong> Central Park
                      periodically hosts public events, performances, and
                      seasonal installations — worth checking what's on if
                      you're visiting around a major festival or holiday.
                    </li>
                    <li>
                      <strong>Underground access:</strong> Entrances to{" "}
                      <strong>Palika Bazaar</strong> are built directly into
                      the park's surrounding pathways, so it's easy to duck
                      underground for shopping and resurface without leaving
                      the immediate area.
                    </li>
                  </ul>
                </section>

                {/* ── Shopping ──────────────────────────────────────────── */}
                <section id="shopping">
                  <h2>Shopping in Connaught Place</h2>
                  <p>
                    CP has arguably the widest range of shopping styles in
                    any single Delhi neighbourhood — from fixed-price
                    branded outlets to a bargain-heavy underground bazaar to
                    a niche Sunday market that draws collectors from across
                    the city.
                  </p>
                  <ul>
                    <li>
                      <strong>Branded stores:</strong> The Inner and Outer
                      Circles house a dense mix of Indian and international
                      clothing, footwear, and lifestyle brands, along with
                      bookstores, electronics outlets, and flagship stores
                      for several well-known Indian retail chains.
                    </li>
                    <li>
                      <strong>Palika Bazaar:</strong> An underground market
                      beneath the Inner Circle's central lawns, packed with
                      hundreds of small stalls selling clothing,
                      accessories, bags, and electronics at negotiable
                      prices. It's crowded, a little maze-like, and very
                      different in character from the shops above ground —
                      bargaining is expected here, unlike at the branded
                      stores.
                    </li>
                    <li>
                      <strong>The Sunday book market:</strong> On Sunday
                      mornings, pavement vendors along parts of the Outer
                      Circle set up a well-known second-hand and rare book
                      market, popular with students, collectors, and anyone
                      hunting for out-of-print titles at a fraction of retail
                      price.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Compare prices at a few
                    stalls in Palika Bazaar before committing to a purchase —
                    initial quotes are usually well above what sellers will
                    ultimately accept.
                  </div>
                </section>

                {/* ── Food & Nightlife ──────────────────────────────────── */}
                <section id="food-nightlife">
                  <h2>Food & Nightlife: Old-School Institutions Meet Modern Bars</h2>
                  <p>
                    Few places in Delhi mix eras of food culture as directly
                    as CP — decades-old restaurants that have barely changed
                    their menus sit a few doors down from contemporary bars
                    and cafés, and both draw steady crowds.
                  </p>
                  <ul>
                    <li>
                      <strong>United Coffee House:</strong> A long-running,
                      old-world restaurant known for its grand interiors and
                      continental-leaning menu — a genuine CP institution and
                      a favourite for a sit-down meal away from the street
                      bustle.
                    </li>
                    <li>
                      <strong>Wenger's:</strong> A historic bakery dating
                      back to the 1920s, famous for its patties, pastries,
                      and old-fashioned takeaway counter — a quick,
                      nostalgic stop rather than a sit-down meal.
                    </li>
                    <li>
                      <strong>Kake Da Hotel:</strong> A no-frills, long-
                      standing Punjabi eatery known for butter chicken and
                      dal makhani, popular with locals who've been coming for
                      generations.
                    </li>
                    <li>
                      <strong>Modern bars and pubs:</strong> Alongside these
                      institutions, CP has a dense cluster of contemporary
                      bars, microbreweries, and lounges spread across its
                      blocks, making it one of Delhi's most popular evening
                      and nightlife destinations.
                    </li>
                    <li>
                      <strong>Cafés for a slower pace:</strong> Numerous
                      café chains and independent coffee shops around the
                      circles are well suited to a break between shopping —
                      useful given how much walking a full CP visit
                      involves.
                    </li>
                  </ul>
                  <blockquote>
                    Part of CP's charm is this generational overlap — a table
                    at a decades-old restaurant one evening, a rooftop bar
                    the next, both within the same short walk.
                  </blockquote>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day Itinerary</h2>
                  <p>
                    CP rewards an unhurried half-day visit more than a rushed
                    hour — here's a realistic flow that covers the layout,
                    shopping, and food without feeling rushed.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "4:00 PM",
                        title: "Arrive & Orient",
                        color: "bg-amber-700",
                        activities: [
                          "Take the metro to Rajiv Chowk station",
                          "Surface into the Inner Circle, get a feel for the block layout",
                          "Walk one lap of the Inner Circle colonnades",
                        ],
                      },
                      {
                        day: "5:00 PM",
                        title: "Central Park & Palika Bazaar",
                        color: "bg-forest-600",
                        activities: [
                          "Sit out at Central Park as the evening cools down",
                          "Duck into Palika Bazaar for browsing and bargain shopping",
                          "Resurface near the Inner Circle for a snack break",
                        ],
                      },
                      {
                        day: "6:30 PM",
                        title: "Shopping the Circles",
                        color: "bg-sky-600",
                        activities: [
                          "Browse branded stores across the Inner and Outer Circles",
                          "Pick up a takeaway pastry from Wenger's",
                          "Wander toward whichever block has your dinner spot",
                        ],
                      },
                      {
                        day: "8:00 PM",
                        title: "Dinner & Evening",
                        color: "bg-stone-600",
                        activities: [
                          "Sit-down dinner at an old-school institution or modern restaurant",
                          "Optional: a bar or lounge for the rest of the evening",
                          "Head back via Rajiv Chowk Metro before it gets too late",
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
                    * This half-day plan pairs well as an evening add-on to a
                    day spent exploring{" "}
                    <Link href="/blog/new-delhi-travel-guide">New Delhi</Link>
                    's other central sights.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    CP can flex from a nearly free evening stroll to a
                    genuine splurge night out, depending on where you eat and
                    how much shopping you do.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Splurge"].map(
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
                          ["Metro to Rajiv Chowk", "₹30", "₹30", "₹30"],
                          [
                            "Snack / street food",
                            "₹100",
                            "₹300",
                            "₹600",
                          ],
                          [
                            "Sit-down meal",
                            "₹400",
                            "₹1,200",
                            "₹3,000+",
                          ],
                          [
                            "Bar / drinks (optional)",
                            "—",
                            "₹800",
                            "₹2,500+",
                          ],
                          [
                            "Shopping (variable)",
                            "₹200",
                            "₹1,500",
                            "₹5,000+",
                          ],
                          [
                            "Approx. total for a visit",
                            "₹300 – ₹700",
                            "₹1,500 – ₹3,500",
                            "₹5,000+",
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
                    * Excludes accommodation. Shopping and dining costs vary
                    widely depending on venue — Palika Bazaar and branded
                    stores sit at very different price points.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Connaught Place</h2>
                  <ul>
                    <li>
                      <strong>Take the metro, not a car:</strong> Parking
                      around CP is difficult and often expensive, especially
                      during peak hours — Rajiv Chowk station drops you right
                      in the middle of it.
                    </li>
                    <li>
                      <strong>Note the block letter of where you're going:
                      </strong>{" "}
                      CP addresses are given by block (A through roughly N)
                      rather than conventional street names — knowing yours
                      in advance saves a lot of wandering.
                    </li>
                    <li>
                      <strong>Bargain in Palika Bazaar, not above ground:
                      </strong>{" "}
                      Branded stores have fixed prices; the underground
                      bazaar expects negotiation — know which mode you're in.
                    </li>
                    <li>
                      <strong>Be wary of unofficial "guides" near Palika
                      Bazaar:</strong> Touts occasionally approach visitors
                      near the underground entrances offering unsolicited
                      help or deals — politely decline and head straight to
                      the stalls you actually want.
                    </li>
                    <li>
                      <strong>Evening is the liveliest time:</strong> If
                      you're choosing when to visit, prioritise the 5 PM–9 PM
                      window over midday for the best combination of weather,
                      atmosphere, and open restaurants.
                    </li>
                    <li>
                      <strong>Wear comfortable shoes:</strong> A proper CP
                      visit involves a fair amount of walking across the
                      circles — comfortable footwear makes a real difference.
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
                          "Take the metro to Rajiv Chowk station",
                          "Note the block letter of your destination in advance",
                          "Visit in the evening for the liveliest atmosphere",
                          "Bargain at Palika Bazaar stalls",
                          "Sit out at Central Park for at least a few minutes",
                          "Wear comfortable walking shoes",
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
                          "Drive in expecting easy, cheap parking",
                          "Follow unsolicited 'guides' near Palika Bazaar",
                          "Accept the first price quoted underground",
                          "Rush through — CP rewards an unhurried visit",
                          "Confuse Rajiv Chowk the metro station with a separate place",
                          "Leave belongings unzipped in crowded stretches",
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
                    <strong>🗺️ Extend the trip:</strong> CP pairs naturally
                    with a visit to nearby{" "}
                    <Link href="/blog/paharganj-delhi-travel-guide">
                      Paharganj
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/karol-bagh-delhi-travel-guide">
                      Karol Bagh
                    </Link>{" "}
                    for a contrast in shopping styles, or fold into a broader{" "}
                    <Link href="/blog/new-delhi-travel-guide">New Delhi</Link>{" "}
                    sightseeing day.
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
                  "Connaught Place",
                  "Delhi",
                  "Rajiv Chowk",
                  "Central Park",
                  "Palika Bazaar",
                  "Shopping",
                  "Nightlife",
                  "City Guide",
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

              <RelatedPostsGrid currentSlug="connaught-place-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="connaught-place-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
