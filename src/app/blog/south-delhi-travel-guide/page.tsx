// src/app/blog/south-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "South Delhi Travel Guide: Best Areas & Things to Do",
  description:
    "South Delhi travel guide covering Hauz Khas Village, Greater Kailash, Saket, Vasant Kunj, Mehrauli & Qutub Minar, Lodhi Garden, Chhatarpur Temple, dining, and a 2-day itinerary.",
  keywords:
    "South Delhi travel guide, South Delhi areas, Hauz Khas Village, Greater Kailash M Block Market, Saket Select Citywalk, Vasant Kunj, Mehrauli Qutub Minar, Lodhi Garden, Khan Market, Chhatarpur Temple, South Delhi restaurants, South Delhi nightlife, best area to stay South Delhi",
  openGraph: {
    title: "South Delhi Travel Guide: Best Areas & Things to Do",
    description:
      "Delhi's most affluent, green, and heritage-dense quarter — Hauz Khas, Greater Kailash, Saket, Vasant Kunj, Mehrauli, Lodhi Garden, and Chhatarpur Temple, mapped out area by area.",
    url: "https://club.kudozz.in/blog/south-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Warm sandstone architecture at golden hour, evoking the heritage ruins scattered through South Delhi's Mehrauli Archaeological Park",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "South Delhi Travel Guide: Best Areas & Things to Do",
    description:
      "Hauz Khas, Greater Kailash, Saket, Vasant Kunj, Mehrauli, Lodhi Garden, and Chhatarpur Temple — South Delhi's neighbourhoods, mapped out.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/south-delhi-travel-guide",
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
          headline: "South Delhi Travel Guide: Best Areas & Things to Do",
          description:
            "South Delhi travel guide covering Hauz Khas Village, Greater Kailash, Saket, Vasant Kunj, Mehrauli & Qutub Minar, Lodhi Garden, Chhatarpur Temple, dining, and a 2-day itinerary.",
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
            "@id": "https://club.kudozz.in/blog/south-delhi-travel-guide",
          },
          keywords:
            "South Delhi travel guide, Hauz Khas Village, Greater Kailash, Saket, Vasant Kunj, Mehrauli, Qutub Minar, Lodhi Garden, Chhatarpur Temple",
          about: {
            "@type": "Place",
            name: "South Delhi",
            address: {
              "@type": "PostalAddress",
              addressLocality: "South Delhi",
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
                name: "South Delhi",
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
    q: "What areas are considered South Delhi?",
    a: "South Delhi is a broad municipal zone rather than a single neighbourhood — it typically includes Hauz Khas, Greater Kailash (GK-I and GK-II), Saket, Vasant Kunj, Vasant Vihar, Mehrauli, Lodhi Colony, Chhatarpur, Malviya Nagar, Lajpat Nagar, Sarojini Nagar, Green Park, and Defence Colony. It's the city's largest and most varied southern arc, stretching from Lodhi Garden near the centre out to Mehrauli's ancient ruins near the Qutub Minar.",
  },
  {
    q: "Is South Delhi safe for travellers?",
    a: "Yes, generally — South Delhi is considered one of the safer, more affluent parts of the city, with well-lit main markets, a heavy police and private security presence around malls and embassies, and a large resident expat and diplomatic community. As anywhere, keep the usual city-travel habits: use app-based cabs at night, avoid poorly lit back lanes alone late at night, and keep valuables secure in crowded markets like Sarojini Nagar or Lajpat Nagar.",
  },
  {
    q: "Which is the best area to stay in South Delhi?",
    a: "It depends on your priorities. Hauz Khas Village suits travellers who want cafés, nightlife, and a walkable arts district on their doorstep. Saket and Vasant Kunj are best if you want mall-adjacent comfort, cinemas, and easy airport access. Greater Kailash and Lodhi Colony/Khan Market suit those who want upscale dining and a quieter, leafier base. For most first-time visitors balancing sightseeing and convenience, Hauz Khas or Saket are the easiest picks — both sit on Metro lines with quick access to the rest of the city.",
  },
  {
    q: "How many days do I need to explore South Delhi?",
    a: "Two full days covers the highlights comfortably — one day for Mehrauli, Qutub Minar, and Chhatarpur Temple, and a second for Hauz Khas Village, Lodhi Garden, and an evening in Greater Kailash or Saket. If you want to properly linger in each neighbourhood's cafés and markets rather than just sightsee, three to four days is more realistic.",
  },
  {
    q: "How do I get around South Delhi without a car?",
    a: "The Delhi Metro is the easiest way — the Yellow Line runs through Hauz Khas and Saket, the Magenta Line connects Greater Kailash, Saket, and Vasant Kunj-adjacent stations, and the Pink Line links several southern neighbourhoods to the rest of the network. Auto-rickshaws and app-based cabs cover the last mile well, since several South Delhi pockets (Chhatarpur, deep Vasant Kunj, parts of GK) sit a short ride from the nearest station.",
  },
  {
    q: "Is South Delhi expensive compared to the rest of the city?",
    a: "Generally yes — it's the city's most affluent zone, and that shows up in restaurant prices, boutique shopping, and hotel rates compared to Old Delhi or Central Delhi. That said, it's not uniformly expensive: Hauz Khas Village and Lajpat Nagar's markets still offer plenty of budget-friendly food and shopping alongside the upscale options.",
  },
  {
    q: "Can I visit Qutub Minar and Chhatarpur Temple in the same day?",
    a: "Yes, easily — both sit in or near Mehrauli and are roughly a 10–15 minute drive apart. A common half-day plan is Qutub Minar and the surrounding Mehrauli Archaeological Park in the morning, followed by Chhatarpur Temple, then continuing on to Saket or Vasant Kunj for lunch and shopping in the afternoon.",
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
  { id: "introduction", title: "What Is South Delhi?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "getting-around", title: "How to Reach & Get Around", level: 2 },
  { id: "hauz-khas", title: "Hauz Khas Village & Deer Park", level: 2 },
  { id: "greater-kailash", title: "Greater Kailash", level: 2 },
  { id: "saket", title: "Saket", level: 2 },
  { id: "vasant-kunj", title: "Vasant Kunj", level: 2 },
  { id: "mehrauli", title: "Mehrauli & Qutub Minar", level: 2 },
  { id: "lodhi-garden", title: "Lodhi Garden & Khan Market", level: 2 },
  { id: "chhatarpur", title: "Chhatarpur Temple", level: 2 },
  { id: "dining-nightlife", title: "Dining, Nightlife & Cafés", level: 2 },
  { id: "itinerary", title: "1–2 Day South Delhi Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SouthDelhiGuidePage() {
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
              alt="Warm sandstone architecture at golden hour, evoking the heritage ruins scattered through South Delhi's Mehrauli Archaeological Park"
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
                { label: "South Delhi", href: null },
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
                "South Delhi",
                "Hauz Khas",
                "Qutub Minar",
                "Greater Kailash",
                "Saket",
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
              South Delhi Travel Guide: Best Areas & Things to Do
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Sultanate-era ruins, tree-lined avenues, upscale markets, and
              Delhi's best café and dining scene — South Delhi is a sprawling
              arc of neighbourhoods, each with its own character. Here's how
              to make sense of it.
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
                  text: "South Delhi, National Capital Territory",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,100 words",
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
                  <h2>What Is South Delhi?</h2>
                  <p>
                    <strong>South Delhi</strong> isn't one neighbourhood — it's
                    the broad, sprawling southern half of the city, and by
                    most measures its most affluent, greenest, and
                    heritage-dense quarter. It runs from{" "}
                    <strong>Lodhi Garden</strong>, just south of central Delhi,
                    all the way out to the ancient ruins of{" "}
                    <strong>Mehrauli</strong> near the Qutub Minar — a stretch
                    that covers everything from Sultanate-era tombs and
                    reservoirs to some of the country's most polished malls,
                    embassies, and dining rooms.
                  </p>
                  <p>
                    What sets South Delhi apart from Old Delhi's density or
                    Central Delhi's government avenues is its sheer variety
                    packed into a single zone: a 13th-century madrasa
                    overlooking a lake in Hauz Khas, a mall-and-cinema complex
                    a few kilometres away in Saket, embassies and diplomatic
                    bungalows in Vasant Vihar, and a hilltop temple complex in
                    Chhatarpur that draws thousands of devotees on weekends. It
                    is, in many ways, the part of Delhi that best represents
                    the city's contradictions — deeply old and thoroughly
                    modern, occupying the same few square kilometres.
                  </p>
                  <p>
                    This guide is an orchestrator — an overview of what South
                    Delhi actually covers, and which pocket of it suits your
                    trip. Several of these neighbourhoods are substantial
                    enough to deserve their own dedicated guides, which we
                    link out to below for the full depth on each; think of
                    this page as the map, and those as the close-up views. For
                    the rest of the capital — Red Fort, Chandni Chowk, and
                    Old Delhi's food trail — see our full{" "}
                    <Link href="/blog/delhi-travel-guide">
                      Delhi travel guide
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏙️</span> South Delhi at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Covers",
                          value: "Lodhi Garden to Mehrauli",
                        },
                        {
                          icon: "🚇",
                          label: "Metro Lines",
                          value: "Yellow, Magenta, Pink",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Heritage ruins, dining, malls",
                        },
                        {
                          icon: "🛍️",
                          label: "Key Markets",
                          value: "M-Block GK, Khan Market, Select Citywalk",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,000 – ₹9,000",
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
                  <h2>Best Time to Visit South Delhi</h2>
                  <p>
                    South Delhi follows the same climate as the rest of the
                    city, but its heavy tree cover — especially around Lodhi
                    Garden, Hauz Khas, and Vasant Kunj's forest edges — makes
                    it a genuinely more pleasant place to walk than the denser,
                    more built-up parts of Delhi, even in shoulder-season
                    heat.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry days make walking Hauz Khas Village, Lodhi Garden, and the Mehrauli ruins genuinely enjoyable — peak season for outdoor sightseeing.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Extreme heat — indoor-heavy days",
                        text: "Outdoor sites like Qutub Minar and Mehrauli Archaeological Park are best done at opening time; malls in Saket and Vasant Kunj become the midday refuge.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — green, occasionally wet",
                        text: "South Delhi's parks and reservoirs (Hauz Khas, Lodhi Garden) look their greenest, though heavy showers can disrupt outdoor plans on short notice.",
                      },
                      {
                        season: "Nov – Jan",
                        emoji: "🌫️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold with poor air quality",
                        text: "Comfortable temperatures for walking, but check AQI — South Delhi isn't spared from Delhi's winter smog despite its greenery.",
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
                    <strong>Our pick:</strong> October to March. Mornings are
                    crisp enough for a proper walk through Mehrauli
                    Archaeological Park or Lodhi Garden, and evenings are
                    comfortable for sitting out at a Hauz Khas or GK café.
                  </blockquote>
                </section>

                {/* ── Getting Around ────────────────────────────────────── */}
                <section id="getting-around">
                  <h2>How to Reach & Get Around South Delhi</h2>
                  <p>
                    South Delhi is well served by three Delhi Metro lines,
                    which makes it genuinely feasible to hop between
                    neighbourhoods without a car for most of the day.
                  </p>
                  <ul>
                    <li>
                      <strong>Yellow Line:</strong> Runs through Hauz Khas,
                      Green Park, and Saket, connecting straight up to
                      Connaught Place and New Delhi Railway Station — the
                      single most useful line for a South Delhi day trip.
                    </li>
                    <li>
                      <strong>Magenta Line:</strong> Connects Greater Kailash
                      (via Nehru Enclave/Kalkaji), Saket, and continues toward
                      Vasant Kunj and onward to the airport-adjacent stretch —
                      useful for cross-South-Delhi journeys that avoid the
                      centre entirely.
                    </li>
                    <li>
                      <strong>Pink Line:</strong> Loops through several
                      southern and southeastern pockets, useful for reaching
                      Lajpat Nagar and connecting onward to other city
                      quadrants without backtracking through the centre.
                    </li>
                    <li>
                      <strong>Auto-rickshaws & app cabs:</strong> Essential for
                      the last mile — Chhatarpur Temple, deeper stretches of
                      Vasant Kunj, and parts of Mehrauli sit a short ride
                      rather than a walk from the nearest Metro station.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're covering multiple
                    South Delhi neighbourhoods in one day, plan the route
                    roughly along a single Metro line first (e.g. Yellow Line:
                    Hauz Khas → Green Park → Saket) rather than zig-zagging
                    across the map — it saves significant time.
                  </div>
                </section>

                {/* ── Hauz Khas ─────────────────────────────────────────── */}
                <section id="hauz-khas">
                  <h2>Hauz Khas Village & Deer Park</h2>
                  <p>
                    Built around a 13th-century reservoir and the ruins of a
                    madrasa founded by Sultan Firoz Shah Tughlaq, Hauz Khas is
                    the rare South Delhi neighbourhood where centuries-old
                    heritage and a genuinely trendy café-and-boutique scene
                    sit side by side. The <strong>Hauz Khas Complex</strong>{" "}
                    — reservoir, tombs, and madrasa — is free to enter and
                    quietly atmospheric, especially in the late afternoon
                    light, while the adjoining <strong>Deer Park</strong>{" "}
                    offers a genuinely peaceful green escape a few minutes'
                    walk from the same lanes.
                  </p>
                  <p>
                    <strong>Hauz Khas Village</strong> itself is the
                    neighbourhood's other draw — a maze of narrow lanes packed
                    with independent boutiques, art galleries, and one of
                    Delhi's densest concentrations of rooftop cafés and bars,
                    many overlooking the reservoir itself.
                  </p>
                  <p>
                    For the full breakdown — best cafés, gallery picks, and
                    how to spend a half-day here — see our dedicated{" "}
                    <Link href="/blog/hauz-khas-delhi-travel-guide">
                      Hauz Khas travel guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Greater Kailash ───────────────────────────────────── */}
                <section id="greater-kailash">
                  <h2>Greater Kailash (GK-I & GK-II)</h2>
                  <p>
                    Greater Kailash, usually split into <strong>GK-I</strong>{" "}
                    and <strong>GK-II</strong>, is one of South Delhi's most
                    established upscale residential colonies, and its{" "}
                    <strong>M-Block Market</strong> in GK-I is a genuine
                    dining destination in its own right — a compact market
                    packed with some of Delhi's most consistently well-reviewed
                    restaurants, from long-standing Punjabi institutions to
                    newer fine-dining openings.
                  </p>
                  <p>
                    Beyond M-Block, GK's tree-lined residential streets are
                    worth a slow wander if you enjoy seeing how South Delhi
                    actually lives — spacious bungalows, embassy-adjacent
                    calm, and a noticeably quieter pace than the markets
                    nearby. It's less a sightseeing stop than a dining one,
                    best paired with an evening out rather than a dedicated
                    half-day.
                  </p>
                </section>

                {/* ── Saket ─────────────────────────────────────────────── */}
                <section id="saket">
                  <h2>Saket</h2>
                  <p>
                    Saket is South Delhi's mall-and-multiplex hub, anchored by{" "}
                    <strong>Select Citywalk</strong> — one of Delhi's most
                    polished shopping malls, with a large multiplex, a dense
                    food court, and a mix of international and Indian
                    high-street brands. It's the easiest South Delhi stop for
                    a comfortable, air-conditioned afternoon of shopping or a
                    movie, and sits directly on the Yellow Line, making it
                    simple to combine with Hauz Khas or Green Park earlier in
                    the day.
                  </p>
                  <p>
                    Saket is also home to a cluster of well-regarded hospitals
                    and business hotels, which makes it a practical,
                    well-connected base if you're prioritising convenience
                    over heritage character. It's less about standalone
                    sights and more a comfortable, functional anchor point for
                    a South Delhi itinerary.
                  </p>
                </section>

                {/* ── Vasant Kunj ───────────────────────────────────────── */}
                <section id="vasant-kunj">
                  <h2>Vasant Kunj</h2>
                  <p>
                    Vasant Kunj sits toward South Delhi's southwestern edge,
                    closer to the airport, and combines a large residential
                    colony with two major malls —{" "}
                    <strong>Ambience Mall</strong> and{" "}
                    <strong>DLF Promenade</strong> — plus easy access to the{" "}
                    <strong>Asola Bhatti Wildlife Sanctuary</strong> on its
                    outskirts, one of the few genuinely wild green spaces
                    left inside Delhi's boundaries.
                  </p>
                  <p>
                    It's a popular base for travellers with early flights or
                    business near the airport corridor, and its malls rival
                    Saket's for scale, if slightly less central. For the
                    fuller neighbourhood breakdown — including the wildlife
                    sanctuary and hotel picks — see our dedicated{" "}
                    <Link href="/blog/vasant-kunj-delhi-travel-guide">
                      Vasant Kunj travel guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Mehrauli ──────────────────────────────────────────── */}
                <section id="mehrauli">
                  <h2>Mehrauli & Qutub Minar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Historic sandstone ruins reminiscent of the Sultanate-era architecture scattered across Mehrauli Archaeological Park"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Mehrauli is arguably South Delhi's single most important
                    heritage zone — home to the{" "}
                    <strong>Qutub Minar</strong>, a 73-metre Sultanate-era
                    minaret and UNESCO World Heritage Site, the tallest brick
                    minaret in the world, set within a sprawling complex of
                    ruins that also includes the Iron Pillar and Quwwat-ul-Islam
                    Mosque. It's usually the single most-visited stop in all
                    of South Delhi, and rightly so.
                  </p>
                  <p>
                    Just beyond the Qutub complex, the{" "}
                    <strong>Mehrauli Archaeological Park</strong> spreads out
                    over more than a hundred forgotten tombs, step-wells, and
                    ruined pavilions spanning several centuries — far less
                    crowded than Qutub Minar itself, and one of the best
                    quiet-heritage walks anywhere in Delhi.
                  </p>
                  <p>
                    For the full walking route, opening hours, and how to
                    combine Mehrauli with a Qutub Minar visit, see our
                    dedicated{" "}
                    <Link href="/blog/mehrauli-delhi-travel-guide">
                      Mehrauli travel guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Lodhi Garden ──────────────────────────────────────── */}
                <section id="lodhi-garden">
                  <h2>Lodhi Garden & Khan Market</h2>
                  <p>
                    <strong>Lodhi Garden</strong> sits at South Delhi's
                    northern edge, a sprawling, immaculately maintained park
                    dotted with 15th-century Lodhi- and Sayyid-dynasty tombs —
                    a genuinely striking sight, especially at sunrise or
                    sunset, and one of the most popular spots in the city for
                    a morning walk or run among joggers and history in equal
                    measure.
                  </p>
                  <p>
                    A short walk or quick auto ride away, <strong>Khan
                    Market</strong> is Delhi's most upscale shopping and
                    dining district, long popular with diplomats,
                    journalists, and well-heeled locals — bookstores, cafés,
                    and some of the city's better restaurants packed into a
                    compact, walkable market.
                  </p>
                  <p>
                    For the full guide to both — walking routes through the
                    tombs, and the best of Khan Market's food and shopping —
                    see our dedicated{" "}
                    <Link href="/blog/lodhi-garden-delhi-travel-guide">
                      Lodhi Garden travel guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Chhatarpur ────────────────────────────────────────── */}
                <section id="chhatarpur">
                  <h2>Chhatarpur Temple</h2>
                  <p>
                    The <strong>Chhatarpur Temple</strong> complex (formally
                    Sri Adya Katyayani Shakti Peeth) is one of India's largest
                    temple complexes, a sprawling, ornately carved marble
                    structure dedicated to Goddess Katyayani. It draws
                    thousands of devotees on weekends and during Navratri, and
                    is worth visiting even for non-religious travellers for
                    the sheer scale of its architecture.
                  </p>
                  <p>
                    The complex sits toward South Delhi's southern edge, close
                    to Mehrauli, and is easily reached via the Yellow Line
                    (Chhatarpur station) followed by a short auto ride, or
                    combined directly with a Qutub Minar / Mehrauli half-day
                    since the two sit only about 10–15 minutes apart by road.
                    Dress modestly and expect security screening, particularly
                    during festival periods.
                  </p>
                </section>

                {/* ── Dining & Nightlife ────────────────────────────────── */}
                <section id="dining-nightlife">
                  <h2>Dining, Nightlife & Café Scene</h2>
                  <p>
                    If there's one thing that unifies South Delhi's otherwise
                    very different neighbourhoods, it's food — this is where
                    Delhi's most ambitious restaurants, longest-running
                    institutions, and best café culture all cluster.
                  </p>
                  <ul>
                    <li>
                      <strong>Hauz Khas Village:</strong> Rooftop bars and
                      cafés overlooking the reservoir — Delhi's most
                      concentrated nightlife strip outside Connaught Place,
                      especially lively on weekend evenings.
                    </li>
                    <li>
                      <strong>M-Block Market, GK-I:</strong> A dense cluster
                      of well-reviewed sit-down restaurants, from decades-old
                      Punjabi institutions to newer fine-dining spots — plan
                      a proper dinner here rather than a quick bite.
                    </li>
                    <li>
                      <strong>Khan Market:</strong> Upscale, often
                      reservation-worthy dining alongside excellent
                      independent cafés and bookstore-café combinations.
                    </li>
                    <li>
                      <strong>Select Citywalk, Saket:</strong> A dependable
                      food-court-and-restaurant mix for a comfortable,
                      air-conditioned meal between sightseeing stops.
                    </li>
                    <li>
                      <strong>Lodhi Colony's Lodhi Art District cafés:</strong>{" "}
                      Smaller, quieter café options worth combining with a
                      Lodhi Garden morning walk.
                    </li>
                  </ul>
                  <blockquote>
                    If you only have one South Delhi dinner to plan around,
                    make it M-Block Market or Khan Market — both reward
                    arriving without a fixed restaurant in mind and simply
                    walking until something looks right.
                  </blockquote>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>1–2 Day South Delhi Itinerary</h2>
                  <p>
                    Two days is a comfortable way to see South Delhi's
                    heritage and its markets without rushing either. If
                    you only have one day, combine the morning of Day 1 with
                    the evening of Day 2 below.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Heritage: Mehrauli, Qutub Minar & Chhatarpur",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Qutub Minar and the Mehrauli Archaeological Park",
                          "Midday: Chhatarpur Temple (short ride from Mehrauli)",
                          "Afternoon: Lunch and a wander through Saket's Select Citywalk",
                          "Evening: Dinner in Greater Kailash's M-Block Market",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Parks, Markets & Nightlife",
                        color: "bg-forest-600",
                        activities: [
                          "Morning: Walk through Lodhi Garden's tombs",
                          "Late morning: Browse Khan Market",
                          "Afternoon: Hauz Khas Complex and Deer Park",
                          "Evening: Rooftop café or bar in Hauz Khas Village",
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
                    * If your trip also includes{" "}
                    <Link href="/blog/lajpat-nagar-delhi-travel-guide">
                      Lajpat Nagar
                    </Link>{" "}
                    or{" "}
                    <Link href="/blog/sarojini-nagar-delhi-travel-guide">
                      Sarojini Nagar
                    </Link>{" "}
                    for shopping, both slot in well as a Day 2 afternoon
                    detour before evening plans in Hauz Khas or GK.
                  </p>
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
                            "₹6,000",
                            "₹20,000",
                          ],
                          ["Food/day", "₹800", "₹2,500", "₹6,000"],
                          ["Local transport/day", "₹250", "₹700", "₹2,200"],
                          [
                            "Monument entry fees/day",
                            "₹600",
                            "₹600",
                            "₹600",
                          ],
                          ["Daily total", "₹3,450", "₹9,800", "₹28,800"],
                          [
                            "2-Day trip total",
                            "₹6,900",
                            "₹19,600",
                            "₹57,600",
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
                    * Excludes travel to Delhi. South Delhi's dining and
                    shopping tend to run higher than the city average — the
                    figures above reflect that.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for South Delhi</h2>
                  <ul>
                    <li>
                      <strong>Plan around a single Metro line where you can:</strong>{" "}
                      The Yellow Line (Hauz Khas–Green Park–Saket) is the
                      backbone of an efficient South Delhi day.
                    </li>
                    <li>
                      <strong>Visit Qutub Minar and Mehrauli early:</strong>{" "}
                      Both get hot and crowded by late morning — an early
                      start is worth it, especially outside winter.
                    </li>
                    <li>
                      <strong>Book restaurants in M-Block and Khan Market ahead:</strong>{" "}
                      Popular spots fill up quickly on weekend evenings.
                    </li>
                    <li>
                      <strong>Dress modestly for Chhatarpur Temple:</strong>{" "}
                      Covered shoulders and knees are expected, and security
                      screening is routine.
                    </li>
                    <li>
                      <strong>Use app-cabs for the last mile:</strong> Several
                      South Delhi pockets sit a short ride, not a walk, from
                      the nearest Metro station.
                    </li>
                    <li>
                      <strong>Check malls for weekday quiet:</strong> Select
                      Citywalk and Ambience Mall get considerably busier on
                      weekends — weekday visits are noticeably calmer.
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
                          "Use the Yellow, Magenta, or Pink Metro lines to cross South Delhi",
                          "Visit Qutub Minar and Mehrauli early in the day",
                          "Book a table in M-Block or Khan Market ahead on weekends",
                          "Pair Chhatarpur Temple with a Mehrauli/Qutub half-day",
                          "Walk Lodhi Garden at sunrise or sunset for the best light",
                          "Dress modestly at Chhatarpur Temple",
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
                          "Try to cover every South Delhi neighbourhood in a single day",
                          "Zig-zag across unrelated Metro lines when a single route works",
                          "Skip advance bookings for popular weekend restaurants",
                          "Underestimate how spread out Vasant Kunj and Chhatarpur are from the centre",
                          "Visit malls expecting weekend crowds to be light",
                          "Rush Mehrauli Archaeological Park — it rewards slow wandering",
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
                    <strong>🗺️ Go deeper:</strong> For the full neighbourhood
                    guides, see our dedicated pages on{" "}
                    <Link href="/blog/hauz-khas-delhi-travel-guide">
                      Hauz Khas
                    </Link>
                    ,{" "}
                    <Link href="/blog/lodhi-garden-delhi-travel-guide">
                      Lodhi Garden
                    </Link>
                    ,{" "}
                    <Link href="/blog/mehrauli-delhi-travel-guide">
                      Mehrauli
                    </Link>
                    ,{" "}
                    <Link href="/blog/vasant-kunj-delhi-travel-guide">
                      Vasant Kunj
                    </Link>
                    ,{" "}
                    <Link href="/blog/lajpat-nagar-delhi-travel-guide">
                      Lajpat Nagar
                    </Link>
                    , and{" "}
                    <Link href="/blog/sarojini-nagar-delhi-travel-guide">
                      Sarojini Nagar
                    </Link>
                    .
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
                  "South Delhi",
                  "Delhi",
                  "Hauz Khas",
                  "Greater Kailash",
                  "Saket",
                  "Vasant Kunj",
                  "Mehrauli",
                  "Qutub Minar",
                  "Lodhi Garden",
                  "Chhatarpur Temple",
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

              <RelatedPostsGrid currentSlug="south-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="south-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
