// src/app/blog/japanese-garden-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Japanese Garden Chandigarh: Travel Guide, Timings & Tips",
  description:
    "Complete guide to the Japanese Garden in Chandigarh — a quiet, pond-and-pagoda landscaped garden. Best time to visit, how to reach, what to expect, and nearby gardens to combine it with.",
  keywords:
    "Japanese Garden Chandigarh, Chandigarh Japanese Garden timings, Chandigarh gardens, Japanese Garden Sector 31, Chandigarh quiet gardens, Chandigarh Leisure Valley, Chandigarh Rose Garden, things to do in Chandigarh, Chandigarh photography spots, Chandigarh weekend trip",
  openGraph: {
    title: "Japanese Garden Chandigarh: Travel Guide, Timings & Tips",
    description:
      "A calm pond, arched bridges, and pagoda-style pavilions — the complete guide to Chandigarh's quietest themed garden.",
    url: "https://club.kudozz.in/blog/japanese-garden-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A calm lake reflecting the hills beyond, evoking the still central pond and quiet waterside paths of the Japanese Garden in Chandigarh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Japanese Garden Chandigarh: Travel Guide, Timings & Tips",
    description:
      "A calm pond, arched bridges, and pagoda-style pavilions — the complete guide to Chandigarh's quietest themed garden.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/japanese-garden-chandigarh-travel-guide",
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
          headline: "Japanese Garden Chandigarh: Travel Guide, Timings & Tips",
          description:
            "Complete guide to the Japanese Garden in Chandigarh — a quiet, pond-and-pagoda landscaped garden. Best time to visit, how to reach, what to expect, and nearby gardens to combine it with.",
          image: "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
          datePublished: "2026-08-31",
          dateModified: "2026-08-31",
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
            "@id": "https://club.kudozz.in/blog/japanese-garden-chandigarh-travel-guide",
          },
          keywords:
            "Japanese Garden Chandigarh, Chandigarh gardens, Chandigarh Leisure Valley, Chandigarh Rose Garden, Chandigarh photography spots",
          about: {
            "@type": "Place",
            name: "Japanese Garden, Chandigarh",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chandigarh",
              addressRegion: "Chandigarh",
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
                name: "Chandigarh",
                item: "https://club.kudozz.in/blog/chandigarh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Japanese Garden",
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
    q: "Is the Japanese Garden in Chandigarh worth visiting?",
    a: "It's worth visiting if you enjoy quiet, unhurried gardens and have already covered Chandigarh's bigger sights like the Rock Garden and Sukhna Lake. It's modest in scale and won't be the highlight of a first-time trip, but as a calm morning or evening stroll, or a quiet photography stop, it's a genuinely pleasant half-hour.",
  },
  {
    q: "Where is the Japanese Garden located in Chandigarh?",
    a: "The Japanese Garden is generally placed in one of Chandigarh's northern sectors, commonly cited as Sector 31, within easy reach of the city's other themed gardens along the broader green belt. Any local auto or cab driver will know it by name.",
  },
  {
    q: "What is the entry fee for the Japanese Garden, Chandigarh?",
    a: "Entry is free or available at a nominal charge, in line with most of Chandigarh's public gardens. There's no elaborate ticketing process — you simply walk in during daylight hours.",
  },
  {
    q: "What are the timings for the Japanese Garden?",
    a: "The garden is generally open through daylight hours, roughly from morning to early evening, similar to Chandigarh's other public gardens. Exact opening and closing times can shift a little with the season, so it's worth confirming locally if you're planning an early or late visit.",
  },
  {
    q: "How much time should I spend at the Japanese Garden?",
    a: "Thirty to forty-five minutes is enough for an unhurried walk around the pond, bridges, and pavilions. Photographers or anyone wanting to simply sit by the water for a while could easily stretch that to an hour.",
  },
  {
    q: "Can I combine the Japanese Garden with other Chandigarh gardens?",
    a: "Yes — that's the natural way to visit it. The Japanese Garden sits close to other themed stops along Chandigarh's Leisure Valley greenbelt, so it pairs easily with the Rose Garden, Bougainvillea Garden, or Garden of Fragrance in a single outing rather than a standalone trip.",
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
  { id: "introduction", title: "A Quieter Kind of Garden", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-garden", title: "The Garden", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "nearby", title: "Nearby Gardens & Sights", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JapaneseGardenGuidePage() {
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
              src="/images/destinations/chandigarh/hero.jpg"
              alt="A calm lake reflecting the hills beyond, evoking the still central pond and quiet waterside paths of the Japanese Garden in Chandigarh"
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
                { label: "Chandigarh", href: "/blog/chandigarh-travel-guide" },
                { label: "Japanese Garden", href: null },
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
                "Japanese Garden",
                "Chandigarh",
                "Quiet Gardens",
                "Leisure Valley",
                "Photography",
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
              Japanese Garden, Chandigarh: A Quiet Walk Travel Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A still central pond, arched bridges, pagoda-style pavilions,
              and gravel paths that wind between manicured shrubs — Chandigarh's
              quietest garden, and a welcome change of pace from its
              rose-and-lawn heavy sights.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "8 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Northern sectors, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,200 words",
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
                  <h2>A Quieter Kind of Garden</h2>
                  <p>
                    The <strong>Japanese Garden</strong> is one of the
                    quieter entries on{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>
                    's long list of landscaped gardens, generally placed in
                    one of the city's northern sectors and built around
                    principles borrowed from traditional Japanese garden
                    design rather than the rose beds and open lawns you'll
                    find at the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    or the sculpture-and-waste aesthetic of the{" "}
                    <Link href="/blog/rock-garden-chandigarh-travel-guide">
                      Rock Garden
                    </Link>
                    . It's part of the same green fabric as the city's{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    greenbelt, and it sits comfortably on any Chandigarh
                    itinerary with room for one more calm, unhurried stop.
                  </p>
                  <p>
                    Where Chandigarh's headline gardens are built for scale
                    and spectacle, the Japanese Garden works on a smaller,
                    more contemplative register — a central pond, arched
                    bridges, pagoda-style pavilions, and gravel paths
                    winding between manicured shrubs. It won't be the
                    highlight of a first-time Chandigarh trip, and it isn't
                    trying to be. It's the kind of place you add to a
                    morning or evening walk when you want fifteen or twenty
                    extra minutes of quiet before or after a busier sight
                    nearby.
                  </p>
                  <p>
                    Set your expectations accordingly: this is a charming,
                    pretty garden, modest in size compared to Chandigarh's
                    headline attractions, and best appreciated as a
                    peaceful stroll rather than a must-see landmark.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🎏</span> Japanese Garden at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "A northern sector, Chandigarh",
                        },
                        {
                          icon: "🎋",
                          label: "Style",
                          value: "Japanese-inspired landscaping",
                        },
                        {
                          icon: "🌉",
                          label: "Known For",
                          value: "Pond, arched bridges, pagodas",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free / nominal",
                        },
                        {
                          icon: "⏰",
                          label: "Timings",
                          value: "~Daylight hours",
                        },
                        {
                          icon: "🧘",
                          label: "Best For",
                          value: "Quiet walks & photography",
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
                  <h2>Best Time to Visit the Japanese Garden</h2>
                  <p>
                    Since the garden is small, outdoors, and works best as
                    an unhurried stroll, timing matters more here than it
                    might at a bigger sight — you want soft light and few
                    other visitors.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best for calm & photography",
                        text: "Soft light on the pond, cooler air, and the garden at its quietest — arrive close to opening for an almost solitary walk.",
                      },
                      {
                        season: "Evening",
                        emoji: "🌇",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best for a relaxed stroll",
                        text: "A gentler light and a slightly more social mood, with local walkers passing through toward the end of the day.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best season overall",
                        text: "Cool, comfortable temperatures make the gravel paths and pond-side benches genuinely pleasant to linger on.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Stick to mornings or evenings",
                        text: "Midday heat is sharp and shade is limited around the open pond area — plan accordingly if visiting in summer.",
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
                    <strong>Our pick:</strong> a winter morning, soon after
                    the garden opens — quiet paths, soft light on the water,
                    and cool enough to walk the whole loop without hurrying.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Japanese Garden</h2>
                  <p>
                    The Japanese Garden sits within Chandigarh's well-planned
                    sector grid, making it an easy add-on to a day that
                    already includes other northern-sector sights.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The simplest way in —
                      any local auto or app-based cab driver will know the
                      garden by name, and it's a short ride from most
                      central sectors.
                    </li>
                    <li>
                      <strong>By local bus:</strong> Chandigarh's city bus
                      network covers the northern sectors reasonably well,
                      though an auto is faster if you're short on time.
                    </li>
                    <li>
                      <strong>On foot / by cycle:</strong> If you're already
                      exploring the city's green belt on foot or by bicycle,
                      the garden is an easy detour from the nearby stretches
                      of the{" "}
                      <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                        Leisure Valley
                      </Link>
                      .
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Ask your driver for the
                    Japanese Garden specifically rather than just "a
                    garden in Sector 31" — Chandigarh has several
                    similarly named green spaces close together, and being
                    specific saves a wrong turn.
                  </div>
                </section>

                {/* ── The Garden ─────────────────────────────────────────── */}
                <section id="the-garden">
                  <h2>The Garden</h2>
                  <p>
                    What sets the Japanese Garden apart from most of
                    Chandigarh's other green spaces is its aesthetic — it
                    isn't built around lawns and flower beds so much as
                    water, structure, and quiet framing devices borrowed
                    from Japanese landscaping traditions.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="A calm, tree-lined body of water, evoking the central pond crossed by arched bridges at the Japanese Garden in Chandigarh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Design & Layout</h3>
                  <p>
                    A central pond anchors the garden, crossed by arched
                    bridges that double as natural photo spots and vantage
                    points over the water. Pagoda-style pavilions dot the
                    grounds, offering shaded rest points, while manicured
                    shrubs and winding gravel paths give the whole space a
                    more structured, deliberate feel than the open lawns
                    found elsewhere in the city.
                  </p>

                  <h3>A Quieter Kind of Garden</h3>
                  <p>
                    The garden is noticeably less crowded than the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    or the{" "}
                    <Link href="/blog/rock-garden-chandigarh-travel-guide">
                      Rock Garden
                    </Link>
                    , which makes it a genuinely good choice if you want a
                    calm, unhurried walk rather than a busy sightseeing
                    stop. It's popular with locals for exactly that reason
                    — a short, peaceful loop rather than a landmark to tick
                    off, and one that rewards a slower pace over a rushed
                    walkthrough.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Don't rush in expecting a
                    major landmark — treat the Japanese Garden as a
                    fifteen-to-thirty-minute breather between bigger sights,
                    and it's far more likely to leave a good impression.
                  </div>
                </section>

                {/* ── Photography ────────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Shoot from the bridges:</strong> The arched
                      bridges over the pond offer the garden's best vantage
                      points, framing both the water and the pavilions
                      beyond.
                    </li>
                    <li>
                      <strong>Come early for reflections:</strong> Calmer
                      water in the early morning gives cleaner reflections
                      of the pavilions and surrounding greenery.
                    </li>
                    <li>
                      <strong>Use the pavilions as framing devices:</strong>{" "}
                      Their pagoda-style roofs make good foreground or
                      framing elements for wider shots of the garden.
                    </li>
                    <li>
                      <strong>Avoid peak midday sun:</strong> Flat overhead
                      light does the garden's textures few favours — early
                      morning or late afternoon light works far better.
                    </li>
                  </ul>
                </section>

                {/* ── Nearby ─────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Gardens & Sights</h2>
                  <p>
                    The Japanese Garden is easiest to enjoy as part of a
                    wider garden-hopping day rather than a standalone trip.
                    A few natural pairings:
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                          Leisure Valley
                        </Link>
                      </strong>
                      : the city's connected green corridor, useful as a
                      walking or cycling spine linking several themed
                      gardens together.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/rose-garden-chandigarh-travel-guide">
                          Rose Garden
                        </Link>
                      </strong>
                      : Asia's largest rose garden, best in February–March
                      and a short ride away.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/garden-of-fragrance-chandigarh-travel-guide">
                          Garden of Fragrance
                        </Link>
                      </strong>
                      : a small, scent-themed garden that pairs well with a
                      similarly quiet, unhurried visit.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/bougainvillea-garden-chandigarh-travel-guide">
                          Bougainvillea Garden
                        </Link>
                      </strong>
                      : another themed stop along the same green belt.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sukhna-lake-chandigarh-travel-guide">
                          Sukhna Lake
                        </Link>
                      </strong>
                      : Chandigarh's larger, better-known waterfront, a
                      short drive away for anyone wanting a bigger lake
                      experience afterward.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (30-45 Minutes)</h2>
                  <p>
                    The Japanese Garden doesn't need much time — here's a
                    simple way to see everything without rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-15 min",
                        title: "Enter & Walk the Pond Loop",
                        color: "bg-amber-700",
                        activities: [
                          "Enter and walk the gravel path around the pond",
                          "Cross one or both of the arched bridges",
                          "Pause at the pavilions for a quick rest",
                        ],
                      },
                      {
                        day: "15-45 min",
                        title: "Slow Down & Photograph",
                        color: "bg-forest-600",
                        activities: [
                          "Sit by the water if you're in no hurry",
                          "Photograph the bridges and pavilions",
                          "Continue on toward the Leisure Valley or your next stop",
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
                    * Add another 30-60 minutes if you're combining this
                    with a walk through the Leisure Valley or a visit to a
                    neighbouring garden.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    The Japanese Garden itself costs little to nothing —
                    your main expense is simply getting there and back.
                  </p>
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
                          ["Garden entry", "Free / nominal", "Free / nominal", "Free / nominal"],
                          [
                            "Transport to/from garden",
                            "₹60 (auto shared)",
                            "₹150 (auto)",
                            "₹400 (private cab)",
                          ],
                          [
                            "Photography (optional gear hire)",
                            "—",
                            "₹300",
                            "₹1,000+",
                          ],
                          ["Total (approx.)", "₹60", "₹450", "₹1,400+"],
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
                    * Figures are per person, per visit. The garden pairs
                    naturally with a longer{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    walk — see that guide for how to link it with nearby
                    gardens.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting the Japanese Garden</h2>
                  <ul>
                    <li>
                      <strong>Set modest expectations:</strong> This is a
                      charming, small garden — not a headline Chandigarh
                      attraction — and it's best enjoyed with that in mind.
                    </li>
                    <li>
                      <strong>Visit during daylight hours:</strong> The
                      garden generally keeps to daylight timings, similar
                      to most of Chandigarh's public gardens.
                    </li>
                    <li>
                      <strong>Combine it with nearby gardens:</strong>{" "}
                      Pairing it with the{" "}
                      <Link href="/blog/rose-garden-chandigarh-travel-guide">
                        Rose Garden
                      </Link>{" "}
                      or{" "}
                      <Link href="/blog/garden-of-fragrance-chandigarh-travel-guide">
                        Garden of Fragrance
                      </Link>{" "}
                      makes for a fuller, more satisfying outing.
                    </li>
                    <li>
                      <strong>Carry water in warmer months:</strong> Shade
                      is limited around the open pond area during peak
                      summer heat.
                    </li>
                    <li>
                      <strong>Keep noise to a minimum:</strong> Part of the
                      garden's appeal is its calm — it's best enjoyed, and
                      best kept, as a quiet space.
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
                          "Visit early morning or evening for the best light",
                          "Walk both arched bridges over the pond",
                          "Combine it with a nearby garden or the Leisure Valley",
                          "Carry water during warmer months",
                          "Treat it as a calm breather, not a headline stop",
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
                          "Expect a large-scale or must-see landmark",
                          "Visit at peak midday heat in summer",
                          "Rush through in five minutes without pausing",
                          "Make it your only Chandigarh garden stop",
                          "Confuse it with other similarly named green spaces",
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
                    <strong>🗺️ Extend the trip:</strong> Treat the Japanese
                    Garden as one stop on Chandigarh's{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    greenbelt — link it with the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>
                    , the{" "}
                    <Link href="/blog/garden-of-fragrance-chandigarh-travel-guide">
                      Garden of Fragrance
                    </Link>
                    , and the{" "}
                    <Link href="/blog/bougainvillea-garden-chandigarh-travel-guide">
                      Bougainvillea Garden
                    </Link>{" "}
                    for a full morning of garden-hopping.
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
                  "Japanese Garden",
                  "Chandigarh",
                  "Leisure Valley",
                  "Chandigarh Gardens",
                  "Quiet Gardens",
                  "Photography",
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

              <RelatedPostsGrid currentSlug="japanese-garden-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="japanese-garden-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
