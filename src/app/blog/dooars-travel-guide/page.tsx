// src/app/blog/dooars-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Dooars Travel Guide: Wildlife, Tea Gardens & Rivers",
  description:
    "Complete Dooars guide — the foothill forests of Gorumara, Jaldapara, Chapramari and Buxa, tea gardens, jeep safaris for rhinos and elephants, base towns, and a full visit plan.",
  keywords:
    "Dooars travel guide, Dooars West Bengal, Gorumara National Park, Jaldapara National Park, Chapramari, Lataguri, Dooars tea gardens, Dooars jeep safari, Teesta river, Bindu Jhalong, Samsing Suntaleykhola, Dooars best time to visit",
  openGraph: {
    title: "Dooars Travel Guide: Wildlife, Tea Gardens & Rivers",
    description:
      "The forested foothills below Darjeeling — rhino and elephant safaris, sprawling tea gardens, and rivers rolling down from the Himalayas.",
    url: "https://club.kudozz.in/blog/dooars-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/meghalaya/dawki-river.jpg",
        width: 1200,
        height: 630,
        alt: "Forested riverbank in the Dooars foothills, West Bengal, near the Teesta and Jaldhaka rivers",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dooars Travel Guide: Wildlife, Tea Gardens & Rivers",
    description:
      "Rhino and elephant safaris, sprawling tea gardens, and Himalayan rivers — the complete Dooars guide.",
    images: ["/images/destinations/meghalaya/dawki-river.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/dooars-travel-guide",
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
          headline: "Dooars Travel Guide: Wildlife, Tea Gardens & Rivers",
          description:
            "Complete Dooars guide — the foothill forests of Gorumara, Jaldapara, Chapramari and Buxa, tea gardens, jeep safaris for rhinos and elephants, base towns, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/meghalaya/dawki-river.jpg",
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
            "@id": "https://club.kudozz.in/blog/dooars-travel-guide",
          },
          keywords:
            "Dooars, Gorumara, Jaldapara, Chapramari, Buxa, tea gardens, Teesta river, wildlife safari, West Bengal foothills",
          about: {
            "@type": "Place",
            name: "Dooars",
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
                name: "Dooars",
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
    q: "What does 'Dooars' mean and where is it?",
    a: "Dooars (also spelled Duars) means 'doors' in reference to the region's role as a gateway between the plains of Bengal and the hills of Bhutan and Sikkim. It's the flat, forested foothill belt of northern West Bengal, sitting below the Darjeeling and Kalimpong hills, running roughly from the Teesta river in the west to the Sankosh river in the east near the Assam border.",
  },
  {
    q: "What is the difference between Gorumara, Jaldapara, Chapramari and Buxa?",
    a: "All four are protected forest areas within the wider Dooars region, each with its own character. Gorumara is compact and dense with rhino sightings; Jaldapara is West Bengal's largest rhino habitat with wide grasslands; Chapramari is a smaller sanctuary adjoining Gorumara, good for elephant sightings; and Buxa Tiger Reserve, further east near Bhutan, is more forested and less about open-grassland safaris. Each deserves its own dedicated visit if wildlife is your main focus.",
  },
  {
    q: "How do I reach the Dooars?",
    a: "Bagdogra Airport and New Jalpaiguri (NJP) railway station are the main gateways, both near Siliguri. From there, base towns like Lataguri, Malbazar, and Jaldapara are reached by road, typically 1.5-3 hours depending on which part of the Dooars you're heading to. New Mal Junction is a useful secondary railhead for the Gorumara/Lataguri area.",
  },
  {
    q: "When are the Dooars' national parks closed?",
    a: "Most parks and sanctuaries in the Dooars, including Gorumara and Jaldapara, close from mid-June to mid-September for the monsoon and the animals' breeding season. Plan safari-focused visits between October and May, with November to April generally offering the best sightings.",
  },
  {
    q: "How many days should I spend in the Dooars?",
    a: "3-4 days lets you cover one or two parks properly with multiple safaris, plus a tea garden visit and perhaps a riverside stop at Bindu or Jhalong. Wildlife enthusiasts wanting to cover Gorumara, Jaldapara, and Buxa separately should budget closer to a week, since they're spread across the region rather than clustered together.",
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
  { id: "introduction", title: "The Gateway Foothills", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Dooars", level: 2 },
  { id: "things-to-do", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DooarsGuidePage() {
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
              src="/images/destinations/meghalaya/dawki-river.jpg"
              alt="Forested riverbank in the Dooars foothills, West Bengal, near the Teesta and Jaldhaka rivers"
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
                { label: "Dooars", href: null },
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
                "Dooars",
                "Wildlife Safari",
                "Tea Gardens",
                "Gorumara",
                "West Bengal",
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
              Dooars: Wildlife, Tea Gardens & Rivers Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              The forested foothill belt below the Darjeeling hills — rhino
              and elephant safaris, sprawling tea estates, and Himalayan
              rivers rolling down onto the plains.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Northern West Bengal",
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
                  <h2>The Gateway Foothills</h2>
                  <p>
                    The <strong>Dooars</strong> (also spelled Duars, meaning
                    "doors") is the wide belt of forested plains and rolling
                    tea gardens that runs along the base of the Darjeeling
                    and Kalimpong hills in northern{" "}
                    <Link href="/blog/west-bengal-travel-guide">
                      West Bengal
                    </Link>
                    . Where the hill towns are about altitude and mountain
                    views, the Dooars are about density — thick sal forests,
                    grassland teeming with one-horned rhinos and wild
                    elephants, and rivers like the Teesta, Jaldhaka, and
                    Murti flowing straight down from the Himalayas.
                  </p>
                  <p>
                    The region is a patchwork of protected areas rather than
                    one single park: Gorumara and its adjoining Chapramari
                    Wildlife Sanctuary sit toward the west near Lataguri;
                    Jaldapara National Park, the state's largest rhino
                    habitat, lies further east; and Buxa Tiger Reserve sits
                    near the Bhutan border. Each has its own character and
                    is worth a dedicated visit rather than a rushed
                    drive-through — our{" "}
                    <Link href="/blog/gorumara-travel-guide">
                      Gorumara National Park guide
                    </Link>{" "}
                    covers that park in full detail, and separate guides
                    cover{" "}
                    <Link href="/blog/buxa-travel-guide">Buxa</Link> and{" "}
                    <Link href="/blog/cooch-behar-travel-guide">
                      Cooch Behar
                    </Link>{" "}
                    for those extending further east.
                  </p>
                  <p>
                    Beyond wildlife, the Dooars are also tea country in their
                    own right, with estates spread across the plains rather
                    than terraced hillsides, and a scattering of quiet border
                    villages like Bindu and Jhalong along the Jaldhaka river
                    that make for a slower, less touristed side of the trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Dooars at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Foothill plains, N. West Bengal",
                        },
                        {
                          icon: "🦏",
                          label: "Known For",
                          value: "Rhino & Elephant Safaris",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Jun" },
                        {
                          icon: "🚫",
                          label: "Parks Closed",
                          value: "Mid-Jun – Mid-Sep",
                        },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Bagdogra",
                        },
                        {
                          icon: "🏘️",
                          label: "Base Towns",
                          value: "Lataguri, Malbazar, Jaldapara",
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
                  <h2>Best Time to Visit the Dooars</h2>
                  <p>
                    The Dooars are essentially a safari destination, so the
                    forest department's park calendar drives timing far more
                    than general weather comfort.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather with the grass cut low after monsoon regrowth, giving the clearest sightlines for rhino and elephant safaris.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still open",
                        text: "Parks remain open until mid-June; increasingly hot but grasslands and waterholes concentrate wildlife, often improving sightings before the closure.",
                      },
                      {
                        season: "Mid-Jun – Mid-Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Parks closed",
                        text: "Most national parks and sanctuaries close entirely for the monsoon and the animals' breeding season — safaris are unavailable.",
                      },
                      {
                        season: "Oct",
                        emoji: "🌦️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Reopening month",
                        text: "Parks reopen gradually after mid-September; grass is still tall in early October, so sightings improve as the month progresses.",
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
                    <strong>Our pick:</strong> December to February — cool,
                    dry conditions with low grass cover give the season's
                    best wildlife visibility.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Dooars</h2>
                  <p>
                    Siliguri is the practical gateway to the whole region,
                    from where roads fan out to the various parks and base
                    towns.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Bagdogra Airport (IXB) is the
                      main gateway, with daily flights from Delhi, Kolkata,
                      Guwahati and other cities. From there, base towns like
                      Lataguri (for Gorumara) or Jaldapara are 1.5-3 hours by
                      road.
                    </li>
                    <li>
                      <strong>By Rail:</strong> New Jalpaiguri (NJP) is the
                      main railhead, with New Mal Junction a useful
                      secondary stop closer to the Gorumara/Lataguri area.
                    </li>
                    <li>
                      <strong>Getting around the Dooars:</strong> The region
                      is spread out, so hired taxis or self-driven vehicles
                      work better than public transport for covering multiple
                      parks and viewpoints in one trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're combining the
                    Dooars with a Darjeeling or Kalimpong trip, route through
                    Siliguri and plan the safari-focused days first — the
                    parks' opening hours are stricter than most hill-town
                    sightseeing.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in the Dooars</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/meghalaya/dawki-river.jpg"
                      alt="River and forest landscape in the Dooars region, West Bengal"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Wildlife Parks: Gorumara, Jaldapara, Chapramari & Buxa</h3>
                  <p>
                    Jeep safaris across the region's protected forests are
                    the main draw, with one-horned rhinos, wild elephants,
                    gaur (Indian bison), and leopards among the sightings.
                    Gorumara, compact and rhino-dense, is covered in full in
                    our{" "}
                    <Link href="/blog/gorumara-travel-guide">
                      dedicated Gorumara guide
                    </Link>
                    ; Jaldapara's wider grasslands and Chapramari's elephant
                    corridors each deserve their own separate safari day
                    rather than being squeezed into one park visit.
                  </p>

                  <h3>Tea Garden Visits</h3>
                  <p>
                    Unlike the terraced hill gardens of Darjeeling, Dooars
                    tea estates spread across flat plains, many open for
                    walking tours near towns like Malbazar and Chalsa —
                    a good half-day add-on between safaris.
                  </p>

                  <h3>Rivers: Teesta, Jaldhaka & Murti</h3>
                  <p>
                    The rivers rolling down from the hills define much of
                    the region's landscape and recreation. The Murti river
                    near Lataguri is a popular riverside picnic and camping
                    spot, while the Jaldhaka feeds the quiet border villages
                    of Bindu and Jhalong further north.
                  </p>

                  <h3>Bindu & Jhalong Border Villages</h3>
                  <p>
                    Tucked right against the Bhutan border, these small
                    villages along the Jaldhaka river offer a slower,
                    far-less-touristed side of the Dooars — good for a quiet
                    overnight away from the safari circuit, with river
                    views and forest walks.
                  </p>

                  <h3>Mahakal Dham, Samsing & Suntaleykhola</h3>
                  <p>
                    Samsing and neighbouring Suntaleykhola are small
                    forested hamlets known for orange orchards and easy
                    nature walks, with the Mahakal Dham temple as a notable
                    pilgrimage stop nearby — a peaceful contrast to the
                    safari-heavy itinerary elsewhere in the region.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in the Dooars</h2>
                  <p>
                    Most accommodation clusters in base towns near the
                    parks — Lataguri for Gorumara/Chapramari, and Jaldapara's
                    surrounding villages for that park — plus a scattering
                    of forest rest houses and riverside resorts.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Simple lodges in Lataguri/Malbazar",
                          "Forest rest houses (advance booking needed)",
                          "Basic homestays near border villages",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,800–₹6,000/night",
                        picks: [
                          "Riverside resorts near Murti/Jaldapara",
                          "Tea-estate-adjacent guesthouses",
                          "Mid-size wildlife lodges",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌿",
                        range: "₹8,000–₹18,000+/night",
                        picks: [
                          "Premium forest-view safari resorts",
                          "Heritage tea-estate bungalow stays",
                          "High-end riverside properties",
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
                  <h2>Suggested Visit Plan (4 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Gorumara",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive via Bagdogra, transfer to Lataguri",
                          "Afternoon jeep safari in Gorumara",
                          "Evening at Murti riverside",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Chapramari & Tea Gardens",
                        color: "bg-forest-600",
                        activities: [
                          "Morning safari in Chapramari Wildlife Sanctuary",
                          "Afternoon tea garden walk near Malbazar",
                          "Evening at leisure",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Jaldapara",
                        color: "bg-sky-600",
                        activities: [
                          "Transfer to Jaldapara base area",
                          "Morning and evening safaris for rhino sightings",
                          "Overnight near the park",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Border Villages & Departure",
                        color: "bg-purple-600",
                        activities: [
                          "Morning at Bindu or Jhalong along the Jaldhaka",
                          "Return toward Bagdogra/NJP for departure",
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
                    * Wildlife-focused travellers extending further east
                    should add dedicated days for{" "}
                    <Link href="/blog/buxa-travel-guide">
                      Buxa Tiger Reserve
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/cooch-behar-travel-guide">
                      Cooch Behar
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in the Dooars</h2>
                  <ul>
                    <li>
                      <strong>Lodge and resort kitchens:</strong> Most stays
                      in base towns serve set meals — Bengali thalis, simple
                      North Indian fare, and occasionally regional Rajbanshi
                      dishes specific to the area.
                    </li>
                    <li>
                      <strong>Local dhabas near Lataguri/Malbazar:</strong>{" "}
                      Basic but reliable stops for rice, dal, and fish curry
                      between safari drives.
                    </li>
                    <li>
                      <strong>Fresh river fish:</strong> Where available,
                      river fish curries are a regional specialty worth
                      seeking out at local eateries.
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
                            "₹1,500",
                            "₹4,000",
                            "₹12,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹3,000"],
                          ["Jeep safari (per drive)", "₹1,500", "₹2,000", "₹2,500"],
                          ["Local transport/day", "₹800", "₹1,800", "₹3,500"],
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
                    * Jeep safari cost is per vehicle, typically shared
                    across 4-6 people, and is priced per drive rather than
                    daily.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting the Dooars</h2>
                  <ul>
                    <li>
                      <strong>Book safaris in advance:</strong> Jeep permits
                      for popular parks like Gorumara and Jaldapara are
                      limited each day — book through your lodge or the
                      forest department ahead of arrival, especially in peak
                      season.
                    </li>
                    <li>
                      <strong>Confirm park open dates each year:</strong>{" "}
                      Exact reopening dates after the mid-June to
                      mid-September closure can shift slightly — check
                      before finalising a trip near those edges.
                    </li>
                    <li>
                      <strong>Hire a car for the whole trip:</strong> The
                      Dooars are spread out, and a hired vehicle for the
                      duration is far more efficient than arranging separate
                      transport for each park.
                    </li>
                    <li>
                      <strong>Carry cash outside base towns:</strong> ATMs
                      thin out quickly once you're near the parks or border
                      villages.
                    </li>
                    <li>
                      <strong>Pick one or two parks, not all four:</strong>{" "}
                      Trying to cover Gorumara, Jaldapara, Chapramari, and
                      Buxa in a short trip usually means rushed, less
                      rewarding safaris — pick fewer and go deeper.
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
                          "Book jeep safaris ahead in peak season",
                          "Hire a car for the whole multi-park trip",
                          "Visit between November and April for best sightings",
                          "Carry cash before heading to remote parks",
                          "Add a quiet day at Bindu or Jhalong",
                          "Focus on one or two parks rather than all four",
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
                          "Show up expecting walk-in safari permits",
                          "Plan a visit during the mid-Jun to mid-Sep closure",
                          "Rely on public transport between parks",
                          "Assume ATM access near the border villages",
                          "Cram four parks into a 3-day trip",
                          "Skip confirming reopening dates near season edges",
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
                    <strong>🗺️ Extend the trip:</strong> Go deeper into
                    Gorumara with our{" "}
                    <Link href="/blog/gorumara-travel-guide">
                      dedicated Gorumara National Park guide
                    </Link>
                    , continue east to{" "}
                    <Link href="/blog/buxa-travel-guide">
                      Buxa Tiger Reserve
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/cooch-behar-travel-guide">
                      Cooch Behar
                    </Link>
                    , or head up into the hills toward{" "}
                    <Link href="/blog/kalimpong-travel-guide">
                      Kalimpong
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
                  "Dooars",
                  "West Bengal",
                  "Wildlife Safari",
                  "Tea Gardens",
                  "Gorumara",
                  "Jaldapara",
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

              <RelatedPostsGrid currentSlug="dooars-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="dooars-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
