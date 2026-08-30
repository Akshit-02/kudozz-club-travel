// src/app/blog/najafgarh-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Najafgarh Delhi Guide: History, Jheel & Sehwag",
  description:
    "An honest guide to Najafgarh, Delhi — Nawab Najaf Khan's 18th-century fort, the shrinking Najafgarh Jheel, and its fame as Virender Sehwag's hometown.",
  keywords:
    "Najafgarh Delhi, Najafgarh Jheel, Najafgarh history, Virender Sehwag hometown, Najafgarh drain, South West Delhi, Nawab of Najafgarh, Najafgarh Metro station, Najaf Khan fort, offbeat Delhi",
  openGraph: {
    title: "Najafgarh Delhi Guide: History, Jheel & Sehwag",
    description:
      "Nawab Najaf Khan's fort roots, the shrinking Najafgarh Jheel wetland, and Virender Sehwag's hometown fame — an honest look at this South West Delhi town.",
    url: "https://club.kudozz.in/blog/najafgarh-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Generic Indian heritage fort architecture, representative imagery used as a stand-in for Najafgarh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Najafgarh Delhi Guide: History, Jheel & Sehwag",
    description:
      "Nawab Najaf Khan's fort roots, the shrinking Najafgarh Jheel wetland, and Virender Sehwag's hometown fame — an honest look at South West Delhi's Najafgarh.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/najafgarh-delhi-travel-guide",
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
          headline: "Najafgarh Delhi Guide: History, Jheel & Sehwag",
          description:
            "An honest guide to Najafgarh, Delhi — Nawab Najaf Khan's 18th-century fort, the shrinking Najafgarh Jheel, and its fame as Virender Sehwag's hometown.",
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
            "@id": "https://club.kudozz.in/blog/najafgarh-delhi-travel-guide",
          },
          keywords:
            "Najafgarh Delhi, Najafgarh Jheel, Najafgarh history, Virender Sehwag hometown, Najafgarh drain, South West Delhi",
          about: {
            "@type": "Place",
            name: "Najafgarh",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Najafgarh",
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
                name: "Najafgarh",
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
    q: "Why is Najafgarh famous?",
    a: "Najafgarh is known for two very different things — its layered history as a fortified 18th-century Mughal-era outpost founded around a fort built by Nawab Najaf Khan, and, in modern times, as the hometown of former Indian cricketer Virender Sehwag, who is popularly nicknamed the 'Nawab of Najafgarh' after the same historical figure. It's also home to the Najafgarh Jheel, a natural wetland and drainage basin on Delhi's south-western edge.",
  },
  {
    q: "Is Najafgarh Jheel worth visiting?",
    a: "Only if your interest is genuinely in local ecology or Delhi's disappearing wetlands rather than a polished tourist attraction. Much of the historic jheel has shrunk and been encroached upon over the decades, and what remains is a working drainage basin straddling the Delhi-Haryana border rather than a maintained park. It can be worth a stop for birdwatchers or anyone curious about the area's ecological history, but don't expect facilities or a curated experience.",
  },
  {
    q: "Why is Virender Sehwag called the Nawab of Najafgarh?",
    a: "The nickname plays on Sehwag's hometown and the area's historical association with Nawab Najaf Khan, the Mughal-era noble after whom Najafgarh is named. Sehwag grew up in Najafgarh and trained locally before going on to become one of India's most aggressive opening batsmen, and the town takes genuine pride in the connection — several local cricket academies reference it.",
  },
  {
    q: "How do I reach Najafgarh by metro?",
    a: "Najafgarh has its own station, Najafgarh Metro Station, on the Delhi Metro's Grey Line, which connects it to Dwarka and onward to the wider network via interchange stations. It's the most straightforward way to reach the town without dealing with South West Delhi's traffic.",
  },
  {
    q: "Is there an actual fort still standing in Najafgarh?",
    a: "Only fragments and local references remain rather than an intact, visitable monument. Najaf Khan's fort dates to the 18th century, and while it shaped the town's name and early layout, much of the original structure has not survived in a state that draws sightseers the way better-preserved Delhi forts do. Treat any remaining trace as a point of historical interest rather than a monument visit.",
  },
  {
    q: "What is Najafgarh like today?",
    a: "It's a busy, semi-urban commercial hub on Delhi's south-western fringe — dense markets, residential colonies, and a still-agricultural hinterland nearby, all reflecting its shift from a village and small town into part of Delhi's urban sprawl. It isn't set up as a tourist destination, but it retains a small-town character that's genuinely different from central Delhi.",
  },
  {
    q: "Is Najafgarh safe and easy to visit for a day trip?",
    a: "Yes, as a daytime local excursion it's straightforward — it's a regular residential and commercial part of Delhi, well connected by metro and road. There isn't a dedicated tourist infrastructure (no visitor centre, curated sites, or English signage aimed at travellers), so this suits curious, independent visitors more than a first-time Delhi itinerary stop.",
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
  { id: "introduction", title: "Najafgarh: A Historic Delhi Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Najafgarh", level: 2 },
  { id: "history", title: "The History of Najafgarh", level: 2 },
  { id: "najafgarh-jheel", title: "Najafgarh Jheel & Wetland", level: 2 },
  { id: "cricket-fame", title: "The Nawab of Najafgarh: Sehwag", level: 2 },
  { id: "local-life", title: "Market & Local Life", level: 2 },
  { id: "visit-plan", title: "A Suggested Short Visit", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NajafgarhGuidePage() {
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
              alt="Generic Indian heritage fort architecture, representative imagery used as a stand-in for Najafgarh"
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
                { label: "Najafgarh", href: null },
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
                "Najafgarh",
                "Delhi",
                "Najafgarh Jheel",
                "Virender Sehwag",
                "Offbeat Delhi",
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
              Najafgarh, Delhi: History, the Jheel & Sehwag's Hometown
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A Mughal-era nobleman's fort town turned busy South West Delhi
              suburb — Najafgarh isn't a mainstream tourist stop, but it
              carries genuinely interesting layers of history, ecology, and
              local pride worth knowing about.
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
                  text: "South West Delhi",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~2,100 words",
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
                  <h2>Najafgarh: A Historic Delhi Town</h2>
                  <p>
                    <strong>Najafgarh</strong> sits on{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi's</Link>{" "}
                    south-western edge, close to the Haryana border, and it's
                    worth being upfront about what it is and isn't. This is
                    not a mainstream tourist site with polished monuments and
                    curated visitor experiences — it's a historic town that
                    Delhi's urban sprawl gradually absorbed, named after the
                    Mughal-era nobleman{" "}
                    <strong>Nawab Najaf Khan</strong>, who built a fort here
                    in the 18th century. Today it's a busy, semi-urban
                    commercial hub, still carrying pockets of its small-town
                    character despite the traffic, markets, and residential
                    colonies that now define it.
                  </p>
                  <p>
                    What makes Najafgarh genuinely interesting isn't a single
                    headline attraction — it's the layers. There's the
                    Mughal-era military history behind its name, the{" "}
                    <strong>Najafgarh Jheel</strong>, a natural wetland and
                    drainage basin that was once ecologically significant and
                    still draws some local interest despite decades of
                    shrinkage, and its modern claim to fame as the hometown of
                    former Indian cricketer{" "}
                    <strong>Virender Sehwag</strong>, nicknamed the "Nawab of
                    Najafgarh" in a direct nod back to the town's own history.
                  </p>
                  <p>
                    This guide is for travellers genuinely curious about
                    offbeat Delhi — the parts of the city that don't show up
                    on standard sightseeing lists but reward a bit of digging.
                    If you're looking for a polished half-day itinerary of
                    ticketed monuments, Najafgarh isn't that. If you're
                    interested in how a Mughal-era outpost quietly became a
                    Delhi suburb, and want to see the town where one of
                    India's most famous cricketers grew up, it's a worthwhile
                    detour — especially if you're already exploring nearby
                    areas like{" "}
                    <Link href="/blog/dwarka-delhi-travel-guide">Dwarka</Link>{" "}
                    or{" "}
                    <Link href="/blog/janakpuri-delhi-travel-guide">
                      Janakpuri
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏘️</span> Najafgarh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South West Delhi, near Haryana border",
                        },
                        {
                          icon: "🏰",
                          label: "Named After",
                          value: "Nawab Najaf Khan (18th c.)",
                        },
                        {
                          icon: "🚇",
                          label: "Metro Line",
                          value: "Grey Line (Najafgarh station)",
                        },
                        {
                          icon: "🌾",
                          label: "Character",
                          value: "Semi-urban commercial hub",
                        },
                        {
                          icon: "🏏",
                          label: "Known For",
                          value: "Virender Sehwag's hometown",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
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
                  <h2>Best Time to Visit Najafgarh</h2>
                  <p>
                    Najafgarh shares Delhi's broader climate pattern, so the
                    same seasonal logic applies here as anywhere else in the
                    city — with one added consideration if a visit to the
                    jheel is part of your plan.
                  </p>
                  <ul>
                    <li>
                      <strong>October – March:</strong> The most comfortable
                      window, with cool, dry weather for walking through the
                      market and any outdoor exploring around the jheel area.
                    </li>
                    <li>
                      <strong>April – June:</strong> Extreme heat, often
                      touching 42–45°C — best avoided unless you're keeping
                      any outdoor time strictly to early morning.
                    </li>
                    <li>
                      <strong>July – September:</strong> The monsoon is
                      actually the best time to see the Najafgarh Jheel with
                      any real water in it, since the basin fills seasonally
                      with rain and drainage — though roads nearby can get
                      waterlogged.
                    </li>
                  </ul>
                  <blockquote>
                    <strong>Our pick:</strong> A cool-weather morning between
                    November and February for the town and market, or right
                    after a good monsoon spell if the wetland itself is what
                    draws you.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Najafgarh</h2>
                  <p>
                    Najafgarh is well connected to the rest of Delhi, mostly
                    thanks to the metro extension that reached it in the last
                    decade.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro:</strong> Najafgarh Metro Station sits
                      on the Delhi Metro's <strong>Grey Line</strong>, which
                      connects through to Dwarka and links into the wider
                      network from there — by far the easiest way in without
                      dealing with South West Delhi's road traffic.
                    </li>
                    <li>
                      <strong>By Road:</strong> Connected via Najafgarh Road
                      and Dwarka to the rest of the city; expect slow-moving
                      traffic through commercial stretches, particularly
                      during market hours.
                    </li>
                    <li>
                      <strong>By Bus:</strong> DTC buses run frequently
                      between Najafgarh and other parts of Delhi, a cheap
                      though slower option than the metro.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're combining Najafgarh
                    with a Dwarka visit, the Grey Line makes it an easy add-on
                    rather than a separate trip — the two areas are directly
                    linked by metro.
                  </div>
                </section>

                {/* ── History ───────────────────────────────────────────── */}
                <section id="history">
                  <h2>The History of Najafgarh</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Generic historic Indian fortress architecture, representative imagery used as a stand-in for Najafgarh's Mughal-era fort history"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Najafgarh takes its name from{" "}
                    <strong>Mirza Najaf Khan</strong>, a genuine 18th-century
                    Mughal-era nobleman and military commander who rose to
                    prominence as a general under Emperor Shah Alam II. Najaf
                    Khan held territory and influence across parts of the
                    Delhi region during a turbulent period for the declining
                    Mughal empire, and he is credited with building a fort in
                    this area — the origin of the town's name and its
                    earliest identity as a fortified outpost rather than a
                    simple village.
                  </p>
                  <p>
                    It's worth being honest here: little of Najaf Khan's
                    original fort survives today in a form that draws
                    sightseers the way Delhi's better-preserved Mughal
                    monuments do. What remains is largely fragmentary and
                    local rather than a maintained heritage site — the fort's
                    real legacy is the name it left behind and the town's
                    identity, more than a structure you can walk through.
                  </p>
                  <p>
                    For most of its history after that, Najafgarh existed as
                    a fairly ordinary agricultural town on Delhi's rural
                    fringe — a village economy of farming and small trade,
                    well outside the boundaries of what most people would
                    have considered "Delhi" for much of the 19th and 20th
                    centuries. That changed as the capital's urban sprawl
                    expanded outward through the second half of the 20th
                    century and into the 2000s, gradually pulling Najafgarh
                    into Delhi's administrative and physical footprint as a
                    busy semi-urban locality rather than a distant village.
                  </p>
                </section>

                {/* ── Najafgarh Jheel ───────────────────────────────────── */}
                <section id="najafgarh-jheel">
                  <h2>Najafgarh Jheel: A Shrinking Wetland</h2>
                  <p>
                    The <strong>Najafgarh Jheel</strong> is a natural
                    depression and drainage basin straddling the border
                    between Delhi and Haryana, historically fed by rainfall
                    runoff and connected to the Sahibi River system. At its
                    largest, it was a genuinely significant wetland — an
                    important local ecosystem and a notable spot for
                    migratory and resident birdlife in the wider Delhi-NCR
                    region.
                  </p>
                  <p>
                    The honest picture today is considerably less romantic.
                    Decades of urban expansion, agricultural encroachment,
                    and diversion of its water sources have shrunk the jheel
                    substantially from its historic extent, and much of what
                    remains functions more as a drainage channel — often
                    referred to locally as the Najafgarh drain — than as an
                    intact wetland. Conservation and restoration efforts have
                    been discussed and attempted at various points, but the
                    jheel's condition varies considerably by season and by
                    location along the basin.
                  </p>
                  <p>
                    We'd frame a visit here as a point of local ecological and
                    historical interest rather than a polished tourist
                    attraction — worthwhile if you're genuinely curious about
                    Delhi's disappearing wetlands or interested in
                    birdwatching outside the city's more established spots,
                    but go in with realistic expectations rather than picturing
                    a maintained lake or park.
                  </p>
                </section>

                {/* ── Cricket Fame ──────────────────────────────────────── */}
                <section id="cricket-fame">
                  <h2>The "Nawab of Najafgarh": Virender Sehwag</h2>
                  <p>
                    In modern times, Najafgarh's best-known association by far
                    is cricket. <strong>Virender Sehwag</strong>, one of
                    India's most explosive opening batsmen and a genuine
                    fixture of the Indian national team through the 2000s and
                    early 2010s, grew up in Najafgarh and trained locally
                    before breaking into international cricket. His
                    aggressive, attacking style of batting earned him the
                    popular nickname the <strong>"Nawab of Najafgarh"</strong>{" "}
                    — a direct, deliberate callback to the same Nawab Najaf
                    Khan whose fort gave the town its name centuries earlier.
                  </p>
                  <p>
                    The connection is a genuine source of local pride, and
                    it's visible on the ground — several cricket academies and
                    coaching centres in and around Najafgarh reference Sehwag
                    or the "Nawab" nickname directly, and the town is
                    routinely name-checked in Indian cricket commentary and
                    media whenever Sehwag's background comes up. For cricket
                    fans specifically, that's arguably Najafgarh's single most
                    tangible point of interest — more so than any formal
                    sightseeing stop.
                  </p>
                </section>

                {/* ── Local Life ────────────────────────────────────────── */}
                <section id="local-life">
                  <h2>The Market & Everyday Town Life</h2>
                  <p>
                    Beyond the history and the cricket connection, Najafgarh's
                    real character today is in its everyday rhythm — a dense,
                    functional local market strip lined with clothing shops,
                    hardware stores, food stalls, and the kind of small
                    businesses that serve a genuine residential population
                    rather than tourists. It's a useful contrast to central
                    Delhi's more curated shopping districts: busy, unpolished,
                    and entirely built around local needs.
                  </p>
                  <p>
                    Traces of Najafgarh's agricultural roots are still visible
                    on its outer edges, where fields and smaller settlements
                    persist even as denser residential colonies encroach from
                    the direction of Dwarka. Walking or driving through this
                    transition — dense commercial market giving way to
                    semi-rural outskirts within a few kilometres — is itself a
                    useful, honest snapshot of how Delhi's urban sprawl has
                    absorbed towns like this one over the past few decades.
                  </p>
                </section>

                {/* ── Visit Plan ────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>A Suggested Short Visit</h2>
                  <p>
                    Najafgarh doesn't need a full day, and we wouldn't
                    recommend building an entire itinerary around it — treat
                    it as a focused half-day detour for travellers genuinely
                    curious about offbeat Delhi history, ideally combined with
                    nearby areas.
                  </p>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Arrive & Explore the Market",
                        color: "bg-amber-700",
                        activities: [
                          "Take the Grey Line metro to Najafgarh station",
                          "Walk through the main market strip",
                          "Ask locally about any remaining fort-related landmarks",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Najafgarh Jheel (Optional)",
                        color: "bg-forest-600",
                        activities: [
                          "Head toward the jheel/drain area if birdwatching or wetlands interest you",
                          "Best after monsoon when water levels are higher",
                          "Go with modest expectations — this is a working basin, not a park",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Cricket Connection & Onward",
                        color: "bg-sky-600",
                        activities: [
                          "Pass by local cricket academies referencing Sehwag or the 'Nawab' nickname",
                          "Continue on to Dwarka or Janakpuri via the Grey Line",
                          "Wrap up before evening market traffic peaks",
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
                    * There's no formal tourist infrastructure here — no
                    ticket counters, guided tours, or English signage aimed at
                    visitors, so this suits independent, curious travellers
                    more than a first-time Delhi sightseeing stop.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Najafgarh is inexpensive by design — there are no entry
                    fees or ticketed attractions, and costs are limited to
                    transport and food.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                          ["Metro fare (round trip)", "₹60", "₹60", "₹60"],
                          [
                            "Local transport (auto/e-rickshaw)",
                            "₹50",
                            "₹150",
                            "₹400 (cab)",
                          ],
                          ["Food (market stalls / dhaba)", "₹150", "₹350", "₹700"],
                          ["Entry fees", "₹0", "₹0", "₹0"],
                          ["Half-day total (approx.)", "₹260", "₹560", "₹1,160"],
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
                    * Excludes travel to Delhi. This is a low-cost, half-day
                    local excursion rather than a multi-day trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Najafgarh</h2>
                  <ul>
                    <li>
                      <strong>Set realistic expectations:</strong> This is a
                      working Delhi suburb with historical layers, not a
                      curated tourist attraction — go for the story, not for
                      polished sightseeing.
                    </li>
                    <li>
                      <strong>Use the Grey Line metro:</strong> By far the
                      easiest way in and out, especially if combining with
                      Dwarka or Janakpuri.
                    </li>
                    <li>
                      <strong>Ask locally about the fort and jheel:</strong>{" "}
                      Neither has formal signage or a visitor centre — local
                      shopkeepers and residents are usually the best source of
                      current, on-the-ground information.
                    </li>
                    <li>
                      <strong>Visit the jheel after monsoon:</strong> Water
                      levels and any birdlife are far more likely to be
                      visible from July–September onward than in peak summer.
                    </li>
                    <li>
                      <strong>Keep it as a half-day add-on:</strong> Pair it
                      with a visit to nearby Dwarka or Janakpuri rather than
                      building a standalone day trip around Najafgarh alone.
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
                          "Take the Grey Line metro directly to Najafgarh",
                          "Go in with curiosity about local history, not a checklist",
                          "Ask locals about the fort and jheel's current state",
                          "Combine the trip with Dwarka or Janakpuri",
                          "Visit the jheel post-monsoon for the best chance of water",
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
                          "Expect an intact, ticketed Mughal fort",
                          "Picture the jheel as a maintained lake or park",
                          "Plan a full day around Najafgarh alone",
                          "Expect tourist infrastructure or English signage",
                          "Skip checking current jheel access — it varies by season",
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
                    <strong>🗺️ Extend the trip:</strong> Najafgarh pairs
                    naturally with a visit to{" "}
                    <Link href="/blog/dwarka-delhi-travel-guide">Dwarka</Link>{" "}
                    (directly linked by the Grey Line) or{" "}
                    <Link href="/blog/janakpuri-delhi-travel-guide">
                      Janakpuri
                    </Link>{" "}
                    for a fuller South West Delhi day, or start from our{" "}
                    <Link href="/blog/delhi-travel-guide">
                      complete Delhi travel guide
                    </Link>{" "}
                    if you're planning a first Delhi trip more broadly.
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
                  "Najafgarh",
                  "Delhi",
                  "Najafgarh Jheel",
                  "Virender Sehwag",
                  "South West Delhi",
                  "Offbeat Delhi",
                  "Delhi History",
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

              <RelatedPostsGrid currentSlug="najafgarh-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="najafgarh-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
