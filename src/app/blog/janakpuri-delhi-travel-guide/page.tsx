// src/app/blog/janakpuri-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Janakpuri Delhi Guide: Parks, Markets & Transport",
  description:
    "A practical guide to Janakpuri, West Delhi's planned residential colony — District Park, local markets, the Janakpuri West Metro interchange, and why it's worth knowing about.",
  keywords:
    "Janakpuri Delhi, Janakpuri West Metro, District Park Janakpuri, Janakpuri C-2 Block market, West Delhi residential colony, Janakpuri District Centre, Blue Line Magenta Line interchange, Janakpuri travel guide",
  openGraph: {
    title: "Janakpuri Delhi Guide: Parks, Markets & Transport",
    description:
      "West Delhi's largest planned residential colony — District Park, local markets, and a major Metro interchange. What's genuinely useful to know about Janakpuri.",
    url: "https://club.kudozz.in/blog/janakpuri-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Sandstone architecture at golden hour — generic representative Indian imagery used here, as no specific photograph of Janakpuri is available",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Janakpuri Delhi Guide: Parks, Markets & Transport",
    description:
      "West Delhi's largest planned residential colony — District Park, local markets, and a major Metro interchange, explained practically.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/janakpuri-delhi-travel-guide",
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
          headline: "Janakpuri Delhi Guide: Parks, Markets & Transport",
          description:
            "A practical guide to Janakpuri, West Delhi's planned residential colony — District Park, local markets, the Janakpuri West Metro interchange, and why it's worth knowing about.",
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
            "@id": "https://club.kudozz.in/blog/janakpuri-delhi-travel-guide",
          },
          keywords:
            "Janakpuri Delhi, Janakpuri West Metro, District Park Janakpuri, West Delhi residential colony, Janakpuri District Centre",
          about: {
            "@type": "Place",
            name: "Janakpuri",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Janakpuri",
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
                name: "Janakpuri",
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
    q: "What is Janakpuri known for?",
    a: "Janakpuri is primarily known as a large, well-established planned residential colony in West Delhi — developed by the Delhi Development Authority starting in the 1960s. It's not a tourist attraction in the conventional sense; it's known locally for its District Park, its District Centre and C-2 Block markets, and for being a major Delhi Metro interchange where the Blue and Magenta lines meet at Janakpuri West.",
  },
  {
    q: "Is Janakpuri a good area to stay in Delhi?",
    a: "It can be, particularly if you want a quieter, more residential base rather than a tourist-hotel district, and value strong Metro connectivity. Janakpuri West's interchange puts most of the city within a single change of trains, and it's a reasonably direct Metro ride from Indira Gandhi International Airport via the Airport Express and Blue Line combination. It's less convenient if your itinerary is centred on Old Delhi's monuments, which sit some distance away.",
  },
  {
    q: "How do I reach Janakpuri by metro?",
    a: "Janakpuri West is the key station — it's an interchange between the Blue Line (Dwarka Sector 21 to Noida Electronic City / Vaishali) and the Magenta Line (Janakpuri West to Botanical Garden). Janakpuri East, one stop further on the Blue Line, also serves the colony's eastern blocks. From most parts of Delhi, this makes Janakpuri reachable with at most one line change.",
  },
  {
    q: "Is District Park Janakpuri worth visiting?",
    a: "If you're already in the area or staying nearby, yes — it's a large, well-maintained public park that's genuinely popular with local residents for morning walks, evening strolls, and family time. It isn't a standalone reason to travel across the city, but it's a pleasant, unpretentious green space worth a walk if you're passing through.",
  },
  {
    q: "Why is it called Janakpuri?",
    a: "The colony is named after King Janaka, the father of Sita in the Ramayana. This part of West Delhi has several colonies with Ramayana-themed names developed around the same era — Janakpuri, Tilak Nagar, and Rajouri Garden are neighbours in this belt — reflecting a naming pattern common to many DDA-developed colonies of that period.",
  },
  {
    q: "Is Janakpuri close to Delhi airport?",
    a: "It's reasonably close by Delhi standards — Indira Gandhi International Airport is roughly 12–15 km away, and the Metro connection (via Dwarka Sector 21 on the Blue Line, with an interchange to the Airport Express at New Delhi or a cab from Dwarka) makes it a workable base if you have an early flight or late arrival and don't want to stay right at the airport.",
  },
  {
    q: "What are the best markets in Janakpuri?",
    a: "The Janakpuri District Centre is the largest commercial hub in the area, with a mix of retail, offices, and eateries. The C-2 Block market is a smaller, more everyday neighbourhood market — useful for daily essentials, casual food, and a look at ordinary West Delhi street life rather than anything curated for visitors.",
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
  { id: "introduction", title: "Janakpuri: A Residential Colony", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Janakpuri", level: 2 },
  { id: "district-park", title: "District Park, Janakpuri", level: 2 },
  { id: "local-life", title: "Local Markets & Everyday Life", level: 2 },
  { id: "why-it-matters", title: "Why Janakpuri Matters for Travellers", level: 2 },
  { id: "itinerary", title: "A Suggested Short Visit", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JanakpuriGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/jaisalmer/fort.jpg"
              alt="Sandstone architecture at golden hour — generic representative Indian imagery used here, as no specific photograph of Janakpuri is available"
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
                { label: "Janakpuri", href: null },
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
                "Janakpuri",
                "Delhi",
                "West Delhi",
                "Metro",
                "Residential Guide",
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
              Janakpuri, Delhi: A Practical Guide to Parks, Markets & Metro
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Janakpuri isn't a tourist destination — it's a well-established
              residential colony in West Delhi. Here's what's genuinely
              useful to know if you're passing through, staying nearby, or
              simply curious about one of the city's largest planned
              neighbourhoods.
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
                  text: "West Delhi, Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,800 words",
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
                  <h2>Janakpuri: A Planned Residential Colony in West Delhi</h2>
                  <p>
                    Let's be upfront about this one: <strong>Janakpuri</strong>{" "}
                    is not a tourist destination. It doesn't have a monument,
                    a heritage complex, or an attraction that would draw
                    someone across the city on its own. What it is, and has
                    been since the 1960s, is one of West Delhi's largest and
                    most established <strong>planned residential
                    colonies</strong> — developed by the Delhi Development
                    Authority (DDA) as part of the city's mid-century push to
                    build organised, block-lettered neighbourhoods for a
                    rapidly growing population.
                  </p>
                  <p>
                    The name itself comes from <strong>King Janaka</strong>,
                    the father of Sita in the Ramayana — and it's not an
                    isolated choice. This belt of West Delhi has several
                    colonies with Ramayana-linked names developed around the
                    same era: Janakpuri sits alongside neighbours like Tilak
                    Nagar and Rajouri Garden, part of a naming pattern common
                    to many DDA colonies of that period.
                  </p>
                  <p>
                    This guide is framed around what's genuinely useful to
                    know rather than pretending Janakpuri is something it
                    isn't — its District Park, its everyday markets, and,
                    most practically, its role as a major{" "}
                    <strong>Delhi Metro interchange</strong> that makes it a
                    surprisingly convenient place to pass through or stay if
                    your trip is centred elsewhere in the city. For the full
                    picture of Delhi's actual sightseeing highlights, see our{" "}
                    <Link href="/blog/delhi-travel-guide">
                      complete Delhi travel guide
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏘️</span> Janakpuri at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "West Delhi",
                        },
                        {
                          icon: "🏗️",
                          label: "Developed",
                          value: "From the 1960s, by the DDA",
                        },
                        {
                          icon: "📜",
                          label: "Named After",
                          value: "King Janaka (Ramayana)",
                        },
                        {
                          icon: "🚇",
                          label: "Metro",
                          value: "Blue & Magenta Line interchange",
                        },
                        {
                          icon: "🌳",
                          label: "Known For",
                          value: "District Park, local markets",
                        },
                        {
                          icon: "✈️",
                          label: "Airport Distance",
                          value: "~12–15 km",
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
                  <h2>Best Time to Visit</h2>
                  <p>
                    Since Janakpuri is a residential area rather than a
                    seasonal attraction, the "best time" question really
                    comes down to Delhi's general climate rather than
                    anything specific to the colony. The same rules that
                    apply to the rest of the city apply here.
                  </p>
                  <ul>
                    <li>
                      <strong>October to March:</strong> Cool, dry, and
                      comfortable — the best window for walking around
                      District Park or the local markets without fighting
                      the heat.
                    </li>
                    <li>
                      <strong>April to June:</strong> Genuinely harsh heat,
                      often crossing 40°C. Fine for a quick Metro transit
                      through Janakpuri West, less pleasant for lingering
                      outdoors.
                    </li>
                    <li>
                      <strong>July to September:</strong> Monsoon humidity
                      and occasional waterlogging on local roads, though the
                      District Park itself turns noticeably greener.
                    </li>
                  </ul>
                  <blockquote>
                    <strong>Our take:</strong> if you're staying in or
                    passing through Janakpuri for practical reasons —
                    Metro connectivity, a residential stay, an early
                    flight — the season barely matters. If you actually plan
                    to walk the park or markets at leisure, October–March is
                    the easy choice.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Janakpuri</h2>
                  <p>
                    This is genuinely Janakpuri's strongest card: it sits on
                    one of the Delhi Metro's more useful interchange points,
                    which makes it far more accessible than its lack of
                    tourist appeal might suggest.
                  </p>
                  <ul>
                    <li>
                      <strong>Janakpuri West Metro Station:</strong> A major
                      interchange between the <strong>Blue Line</strong>{" "}
                      (running from Dwarka Sector 21 through Rajiv Chowk to
                      Noida Electronic City / Vaishali) and the{" "}
                      <strong>Magenta Line</strong> (Janakpuri West to
                      Botanical Garden, passing through Hauz Khas and
                      Kalkaji). From most parts of the city, reaching
                      Janakpuri means at most a single line change.
                    </li>
                    <li>
                      <strong>Janakpuri East Metro Station:</strong> One stop
                      further along the Blue Line, serving the colony's
                      eastern blocks.
                    </li>
                    <li>
                      <strong>By Road:</strong> Connected to central and
                      south-west Delhi via the Najafgarh Road and Outer Ring
                      Road corridors — straightforward by cab or auto, though
                      subject to the same traffic conditions as the rest of
                      the city.
                    </li>
                    <li>
                      <strong>From the Airport:</strong> Indira Gandhi
                      International Airport is roughly 12–15 km away, reached
                      via the Blue Line through Dwarka, or by cab in
                      20–40 minutes depending on traffic.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If your itinerary involves
                    both South Delhi and West Delhi neighbourhoods, Janakpuri
                    West's Blue/Magenta interchange is often a faster way to
                    cut across the city than trying to navigate it by road.
                  </div>
                </section>

                {/* ── District Park ─────────────────────────────────────── */}
                <section id="district-park">
                  <h2>District Park, Janakpuri</h2>
                  <div className="relative w-full rounded-xl my-6 h-64 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Generic Indian landscape imagery used here as a representative visual — not an actual photograph of District Park, Janakpuri"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Janakpuri's <strong>District Park</strong> is a large,
                    well-maintained public green space and genuinely the
                    closest thing the colony has to a local landmark. It's
                    popular with residents for morning walks, evening jogs,
                    and family time on weekends — the kind of everyday
                    neighbourhood park that anchors a residential colony
                    rather than a manicured showpiece built for visitors.
                  </p>
                  <p>
                    It's not a reason to cross Delhi on its own, but if
                    you're already in the area — staying nearby, passing
                    through on Metro transit, or simply curious about how
                    ordinary West Delhi neighbourhoods live — it's a
                    pleasant, unpretentious spot for an hour's walk, with
                    paved paths, seating areas, and enough greenery to be a
                    genuine break from the surrounding traffic and concrete.
                  </p>
                </section>

                {/* ── Local Life ────────────────────────────────────────── */}
                <section id="local-life">
                  <h2>Local Markets & Everyday Life</h2>
                  <p>
                    Janakpuri's commercial life is organised around a couple
                    of clear hubs, both worth knowing about if you're staying
                    in the area rather than just passing through.
                  </p>
                  <ul>
                    <li>
                      <strong>Janakpuri District Centre:</strong> The
                      colony's largest commercial hub — a mix of retail
                      stores, offices, and eateries, functioning much like a
                      mid-sized mall-and-office complex serving the
                      surrounding residential blocks.
                    </li>
                    <li>
                      <strong>C-2 Block Market:</strong> A smaller, more
                      everyday neighbourhood market — useful for daily
                      groceries, casual street food, and general errands.
                      It's not curated for visitors, which is exactly what
                      makes it a genuine look at ordinary West Delhi life.
                    </li>
                    <li>
                      <strong>Residential blocks:</strong> Janakpuri is
                      organised into lettered blocks (A through H and
                      beyond), each with its own small parks, local shops,
                      and community feel — typical of DDA-planned colonies
                      of its era.
                    </li>
                  </ul>
                  <p>
                    None of this is dressed up for tourism, and that's the
                    point — it's a working residential colony where several
                    hundred thousand Delhiites actually live their daily
                    lives, which has its own quiet value if you're interested
                    in seeing the city beyond its monuments.
                  </p>
                </section>

                {/* ── Why It Matters ────────────────────────────────────── */}
                <section id="why-it-matters">
                  <h2>Why Janakpuri Matters for Travellers</h2>
                  <p>
                    Given all this, why would a traveller need a guide to
                    Janakpuri at all? A few practical reasons come up
                    repeatedly.
                  </p>
                  <ul>
                    <li>
                      <strong>Metro interchange convenience:</strong> If your
                      Delhi itinerary spans neighbourhoods on both the Blue
                      and Magenta lines, Janakpuri West is a natural
                      transfer point you'll likely pass through even without
                      planning to.
                    </li>
                    <li>
                      <strong>Airport proximity:</strong> Its distance from
                      IGI Airport — combined with strong Metro links — makes
                      it a reasonable, quieter alternative to airport-area
                      hotels for an early flight or late arrival.
                    </li>
                    <li>
                      <strong>Residential-style stays:</strong> Travellers
                      looking for longer stays, serviced apartments, or a
                      quieter base away from tourist-hotel districts
                      sometimes find Janakpuri's residential character a
                      genuine advantage over central Delhi.
                    </li>
                    <li>
                      <strong>Nearby West Delhi neighbourhoods:</strong> It
                      sits within easy reach of other West Delhi areas worth
                      knowing about, including{" "}
                      <Link href="/blog/dwarka-delhi-travel-guide">
                        Dwarka
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/najafgarh-delhi-travel-guide">
                        Najafgarh
                      </Link>
                      , as well as{" "}
                      <Link href="/blog/rohini-delhi-travel-guide">
                        Rohini
                      </Link>{" "}
                      further north — useful if you're mapping out Delhi's
                      residential belts rather than just its monuments.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>A Suggested Short Visit</h2>
                  <p>
                    Janakpuri doesn't need a multi-day itinerary — a few
                    hours is genuinely enough to see what there is to see,
                    if you find yourself in the area.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "District Park & a Local Walk",
                        color: "bg-forest-600",
                        activities: [
                          "A slow walk through District Park",
                          "A look at the residential block layout",
                          "Tea or breakfast at a local block market stall",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "District Centre & Markets",
                        color: "bg-sky-600",
                        activities: [
                          "Browse the Janakpuri District Centre",
                          "Lunch at a local eatery",
                          "A stop at the C-2 Block market for everyday shopping",
                        ],
                      },
                      {
                        day: "Onward",
                        title: "Continue Your Delhi Trip",
                        color: "bg-stone-600",
                        activities: [
                          "Take the Blue Line toward central Delhi's monuments",
                          "Or the Magenta Line toward South Delhi",
                          "Or head to the airport via Dwarka, if departing",
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
                  <p>
                    There's no entry fee or ticketed attraction in Janakpuri
                    — costs here are mostly about accommodation, food, and
                    local transport, similar to any residential Delhi
                    neighbourhood.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Comfortable"].map(
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
                            "₹1,200",
                            "₹3,000",
                            "₹6,500",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport/day", "₹100", "₹300", "₹800"],
                          ["Airport transfer (one-way)", "₹60 (Metro)", "₹300", "₹700 (cab)"],
                          ["Daily total (approx.)", "₹1,760", "₹4,500", "₹10,000"],
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
                    * Estimates for a single traveller. Metro fares are
                    distance-based and generally cheaper than any cab option
                    across the city.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Janakpuri</h2>
                  <ul>
                    <li>
                      <strong>Use Janakpuri West as a transfer point:</strong>{" "}
                      If your day involves both the Blue and Magenta lines,
                      plan around this interchange rather than doubling back
                      by road.
                    </li>
                    <li>
                      <strong>Don't expect tourist infrastructure:</strong>{" "}
                      This is a residential colony — signage, English
                      fluency, and visitor amenities are all more limited
                      than in Delhi's tourist-facing neighbourhoods.
                    </li>
                    <li>
                      <strong>Pair it with nearby areas:</strong> A stop in
                      Janakpuri makes more sense as part of a wider West
                      Delhi loop than as a standalone destination.
                    </li>
                    <li>
                      <strong>Evenings at District Park are pleasant:</strong>{" "}
                      Local families tend to use the park most actively in
                      the early morning and after sunset — a good window if
                      you want to see it at its liveliest.
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
                          "Use Janakpuri West as a Blue/Magenta line transfer",
                          "Walk District Park in the early morning or evening",
                          "Try the C-2 Block market for everyday local food",
                          "Consider Janakpuri as a quieter, residential stay",
                          "Pair a visit with Dwarka or Rajouri Garden nearby",
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
                          "Expect a sightseeing attraction — it's a residential colony",
                          "Plan a full day here unless you're staying nearby",
                          "Assume every block has English-speaking staff",
                          "Skip checking current Metro line status before travel",
                          "Ignore Delhi's usual traffic timing when planning by road",
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
                    <strong>🗺️ Extend the trip:</strong> Janakpuri pairs
                    naturally with other West Delhi residential areas — see
                    our guides to{" "}
                    <Link href="/blog/dwarka-delhi-travel-guide">Dwarka</Link>
                    ,{" "}
                    <Link href="/blog/rohini-delhi-travel-guide">Rohini</Link>
                    , and{" "}
                    <Link href="/blog/najafgarh-delhi-travel-guide">
                      Najafgarh
                    </Link>{" "}
                    for a fuller picture of Delhi beyond the monument
                    circuit.
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
                  "Janakpuri",
                  "Delhi",
                  "West Delhi",
                  "Delhi Metro",
                  "District Park",
                  "Residential Guide",
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

              <RelatedPostsGrid currentSlug="janakpuri-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="janakpuri-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
