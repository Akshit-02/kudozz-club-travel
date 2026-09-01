// src/app/blog/le-corbusier-centre-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Le Corbusier Centre Chandigarh: Visit Guide & Timings",
  description:
    "Guide to the Le Corbusier Centre in Sector 19-B, Chandigarh — original drawings, sketches and models documenting the city's master plan, plus timings, entry fee, and how to pair it with Capitol Complex.",
  keywords:
    "Le Corbusier Centre Chandigarh, Le Corbusier Chandigarh museum, Chandigarh master plan museum, Pierre Jeanneret Chandigarh, Jane Drew Maxwell Fry Chandigarh, Sector 19 Chandigarh museum, Chandigarh architecture museum, Le Corbusier Centre timings, Le Corbusier Centre entry fee",
  openGraph: {
    title: "Le Corbusier Centre Chandigarh: Visit Guide & Timings",
    description:
      "A compact museum of original drawings and models documenting how Le Corbusier and his team conceived Chandigarh's master plan — the ideal primer before visiting Capitol Complex.",
    url: "https://club.kudozz.in/blog/le-corbusier-centre-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "The building housing the Le Corbusier Centre in Sector 19-B, Chandigarh, which displays original drawings and models of the city's master plan",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Corbusier Centre Chandigarh: Visit Guide & Timings",
    description:
      "A compact museum of original drawings and models documenting how Le Corbusier and his team conceived Chandigarh's master plan — the ideal primer before visiting Capitol Complex.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical:
      "https://club.kudozz.in/blog/le-corbusier-centre-chandigarh-travel-guide",
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
          headline: "Le Corbusier Centre Chandigarh: Visit Guide & Timings",
          description:
            "Guide to the Le Corbusier Centre in Sector 19-B, Chandigarh — original drawings, sketches and models documenting the city's master plan, plus timings, entry fee, and how to pair it with Capitol Complex.",
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
            "@id":
              "https://club.kudozz.in/blog/le-corbusier-centre-chandigarh-travel-guide",
          },
          keywords:
            "Le Corbusier Centre Chandigarh, Chandigarh master plan, Pierre Jeanneret, Jane Drew, Maxwell Fry, Sector 19-B Chandigarh",
          about: {
            "@type": "Place",
            name: "Le Corbusier Centre, Chandigarh",
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
                name: "Le Corbusier Centre",
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
    q: "What is the Le Corbusier Centre?",
    a: "It's a small heritage museum in Sector 19-B, Chandigarh, housed in a building associated with the original planning team, dedicated to Le Corbusier's vision and design process for the city. It displays original drawings, sketches, photographs, and models documenting how the master plan for Chandigarh came together.",
  },
  {
    q: "How much time does it take to visit?",
    a: "It's a compact, quick visit — well under an hour for most people, even reading through the exhibits in some detail. That makes it easy to slot in either before or after a longer visit to Capitol Complex on the same day.",
  },
  {
    q: "What is the entry fee?",
    a: "There's a modest entry fee, though the exact amount can change over time — treat any figure you've seen online as approximate and confirm the current fee at the counter or with Chandigarh Tourism before you go.",
  },
  {
    q: "Is the Le Corbusier Centre open on Mondays?",
    a: "Like many Indian museums, it's generally closed one day a week, commonly Monday — but weekly closure days do shift occasionally, so it's worth confirming the current closure day before planning your visit around it.",
  },
  {
    q: "Should I visit before or after Capitol Complex?",
    a: "Either order works, but visiting the Centre first gives useful context — understanding the logic behind Le Corbusier's master plan makes the scale and geometry of Capitol Complex easier to appreciate when you see it in person afterward.",
  },
  {
    q: "Who else worked on Chandigarh's design besides Le Corbusier?",
    a: "The core planning team also included Pierre Jeanneret, Jane Drew, and Maxwell Fry — all of whose work is represented in the Centre's collection of original drawings and photographs alongside Le Corbusier's own sketches.",
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
  { id: "introduction", title: "A Primer on the Master Plan", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "inside-the-centre", title: "Inside the Centre", level: 2 },
  { id: "nearby", title: "Nearby Sights", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LeCorbusierCentreGuidePage() {
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
              alt="The building housing the Le Corbusier Centre in Sector 19-B, Chandigarh, which displays original drawings and models of the city's master plan"
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
                { label: "Le Corbusier Centre", href: null },
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
                "Le Corbusier Centre",
                "Chandigarh",
                "Master Plan",
                "Architecture Museum",
                "Sector 19-B",
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
              Le Corbusier Centre, Chandigarh: Visit Guide & Timings
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Original drawings, sketches and models that trace how a
              Swiss-French architect and his team turned a blank stretch of
              Punjab plains into India's most planned city.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sector 19-B, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~1,350 words",
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
                  <h2>A Primer on the Master Plan</h2>
                  <p>
                    The <strong>Le Corbusier Centre</strong> is a small
                    heritage museum in Sector 19-B of{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>
                    , housed in a building associated with the original
                    planning team, dedicated to documenting how the city's
                    master plan came together. Where{" "}
                    <Link href="/blog/capitol-complex-chandigarh-travel-guide">
                      Capitol Complex
                    </Link>{" "}
                    lets you experience Le Corbusier's ideas at full civic
                    scale, the Centre shows you the thinking that got him
                    there — the sketches, studies, and working drawings behind
                    the finished city.
                  </p>
                  <p>
                    Inside, you'll find original drawings, sketches,
                    photographs, and models tracing how Le Corbusier and his
                    core team — which also included Pierre Jeanneret, Jane
                    Drew, and Maxwell Fry — conceived Chandigarh's overall
                    master plan and its individual numbered sectors. It's a
                    small collection by museum standards, but a genuinely
                    useful one for understanding why the city looks and
                    functions the way it does.
                  </p>
                  <p>
                    Because it's such a compact visit, the Le Corbusier
                    Centre works best as part of a pairing rather than a
                    standalone destination — either as a primer before you
                    see Capitol Complex in person, or as a way to make sense
                    of what you've just seen there. It also combines
                    naturally with the{" "}
                    <Link href="/blog/government-museum-chandigarh-travel-guide">
                      Government Museum and Art Gallery
                    </Link>{" "}
                    in Sector 10 for a half-day loop built around
                    Chandigarh's architecture and planning history.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>📐</span> Le Corbusier Centre at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 19-B, Chandigarh",
                        },
                        {
                          icon: "🎨",
                          label: "Collection",
                          value: "Drawings, sketches, models",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Modest fee (approx.)",
                        },
                        {
                          icon: "📅",
                          label: "Weekly Closure",
                          value: "Commonly Monday (confirm locally)",
                        },
                        {
                          icon: "⏱️",
                          label: "Suggested Time",
                          value: "Under 1 hour",
                        },
                        {
                          icon: "🔗",
                          label: "Pairs With",
                          value: "Capitol Complex, Govt. Museum",
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
                    Since this is an indoor museum, weather matters far less
                    here than at Chandigarh's outdoor sights — timing is more
                    about avoiding the weekly closure and fitting the visit
                    around a longer day out.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Weekday Mornings",
                        emoji: "🌤️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Quietest visit",
                        text: "Fewer visitors than weekends, giving you more space and time to actually read through the exhibits rather than move past them quickly.",
                      },
                      {
                        season: "Before Capitol Complex",
                        emoji: "🏛️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best sequencing",
                        text: "Visiting here first gives useful context on the master plan's logic, so the scale and layout of Capitol Complex make more sense once you're standing in it.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Comfortable for the whole loop",
                        text: "If combining this with outdoor sights on the same day, Chandigarh's cooler months make the overall loop far more comfortable.",
                      },
                      {
                        season: "Any Day But Closure Day",
                        emoji: "📅",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Confirm before you go",
                        text: "Like many Indian museums, it's closed one day a week, commonly Monday — check the current closure day before planning around it.",
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
                    <strong>Our pick:</strong> a weekday morning, scheduled
                    right before heading to Capitol Complex — the context
                    makes the bigger site more rewarding.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Le Corbusier Centre</h2>
                  <p>
                    The Centre sits in Sector 19-B, a fairly central location
                    within Chandigarh's grid, making it easy to reach from
                    most parts of the city.
                  </p>
                  <ul>
                    <li>
                      <strong>By Cab or Auto:</strong> The simplest option —
                      Sector 19-B is well known to local drivers, and the
                      Centre itself is easy to locate once you're in the
                      sector.
                    </li>
                    <li>
                      <strong>Combined with Capitol Complex:</strong> If
                      you've already arranged permission for{" "}
                      <Link href="/blog/capitol-complex-chandigarh-travel-guide">
                        Capitol Complex
                      </Link>
                      , it's easy to route your day so the Centre comes
                      immediately before or after that visit.
                    </li>
                    <li>
                      <strong>Self-drive:</strong> Straightforward given
                      Chandigarh's well-marked sector roads, with parking
                      generally available near the building.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Because this is such a short
                    visit, ask your driver to wait outside if you're on a
                    tight schedule — you'll typically be done well within an
                    hour.
                  </div>
                </section>

                {/* ── Inside the Centre ──────────────────────────────────── */}
                <section id="inside-the-centre">
                  <h2>Inside the Centre</h2>
                  <p>
                    The exhibits are organised around the story of how
                    Chandigarh's master plan was conceived, rather than
                    around individual buildings — a useful complement to
                    seeing the buildings themselves elsewhere in the city.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Original architectural sketches and planning drawings on display inside the Le Corbusier Centre, documenting the design of Chandigarh's sector grid"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Original Drawings & Sketches</h3>
                  <p>
                    The core of the collection is made up of original
                    drawings and hand sketches from the planning process —
                    working documents rather than polished final renderings,
                    which gives a more direct sense of how the ideas
                    developed and changed over time.
                  </p>

                  <h3>Photographs of the Planning Team</h3>
                  <p>
                    Period photographs document Le Corbusier, Pierre
                    Jeanneret, Jane Drew, and Maxwell Fry at work — useful
                    context for a project that was very much a team effort,
                    even though Le Corbusier's name has come to represent it
                    almost singularly in popular memory.
                  </p>

                  <h3>Models of the Master Plan</h3>
                  <p>
                    Physical models help translate the abstract logic of the
                    sector grid into something you can see at a glance —
                    genuinely helpful if you've been navigating Chandigarh's
                    numbered sectors without quite understanding the
                    reasoning behind the layout.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Spend a few extra minutes with
                    the sector-grid models before heading out — they make the
                    rest of your Chandigarh sightseeing noticeably easier to
                    mentally map.
                  </div>
                </section>

                {/* ── Nearby ─────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Sights</h2>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/capitol-complex-chandigarh-travel-guide">
                          Capitol Complex
                        </Link>
                      </strong>{" "}
                      — the natural next stop, where the ideas documented
                      here are realised at full civic scale. Remember that
                      Capitol Complex requires advance permission, so plan
                      that separately.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/government-museum-chandigarh-travel-guide">
                          Government Museum and Art Gallery
                        </Link>
                      </strong>{" "}
                      — a short drive to Sector 10, home to Gandhara sculpture
                      and miniature paintings, and a good second stop for a
                      museum-focused half-day.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/sector-17-chandigarh-travel-guide">
                          Sector 17
                        </Link>
                      </strong>{" "}
                      — Chandigarh's central plaza, useful for a food or
                      coffee break after the museum loop.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Because the Centre itself takes well under an hour, it's
                    best planned as one leg of a longer architecture-focused
                    day rather than a trip on its own.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-15 min",
                        title: "Drawings & Sketches Gallery",
                        color: "bg-amber-700",
                        activities: [
                          "Start with the original planning drawings",
                          "Read the accompanying context on the design process",
                        ],
                      },
                      {
                        day: "15-30 min",
                        title: "Photographs & Models",
                        color: "bg-forest-600",
                        activities: [
                          "Period photographs of the planning team",
                          "Study the sector-grid master plan models",
                        ],
                      },
                      {
                        day: "30-45 min",
                        title: "Wrap Up & Move On",
                        color: "bg-sky-600",
                        activities: [
                          "Final walk through any remaining exhibits",
                          "Head onward to Capitol Complex or the Government Museum",
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
                    * Architecture students and enthusiasts wanting to study
                    the drawings closely could easily stretch this to a full
                    hour.
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
                            "Entry fee",
                            "Modest (approx.)",
                            "Modest (approx.)",
                            "Modest (approx.)",
                          ],
                          [
                            "Transport to/from site",
                            "₹100 (auto)",
                            "₹250 (cab)",
                            "₹600 (private car)",
                          ],
                          [
                            "Guided commentary (optional)",
                            "—",
                            "₹200-300",
                            "₹1,000+",
                          ],
                          ["Total (approx.)", "₹150-200", "₹500-650", "₹1,600+"],
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
                    * Figures are approximate and per person — confirm the
                    current entry fee locally. See our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a full city budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Confirm the weekly closure day:</strong> Commonly
                      Monday, like many Indian museums, but confirm current
                      hours before planning your day around it.
                    </li>
                    <li>
                      <strong>Visit before Capitol Complex if you can:</strong>{" "}
                      The context on the master plan makes the larger site
                      easier to appreciate once you're standing in it.
                    </li>
                    <li>
                      <strong>Don't expect a long visit:</strong> This is a
                      compact museum, not a half-day attraction — plan it as
                      one stop within a longer day.
                    </li>
                    <li>
                      <strong>Combine with the Government Museum:</strong>{" "}
                      Both are quiet, unhurried museums that work well
                      together on the same day.
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
                          "Confirm the current weekly closure day before visiting",
                          "Visit before Capitol Complex for useful context",
                          "Spend a few extra minutes with the sector-grid models",
                          "Combine with the Government Museum on the same day",
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
                          "Plan an entire half-day around this one museum",
                          "Assume it's open every day of the week",
                          "Skip it entirely if you're visiting Capitol Complex",
                          "Expect a large collection — it's intentionally compact",
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
                    <strong>🗺️ Extend the trip:</strong> Turn this into a full
                    architecture loop by combining it with{" "}
                    <Link href="/blog/capitol-complex-chandigarh-travel-guide">
                      Capitol Complex
                    </Link>{" "}
                    and the{" "}
                    <Link href="/blog/government-museum-chandigarh-travel-guide">
                      Government Museum
                    </Link>
                    , or see our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      complete Chandigarh travel guide
                    </Link>{" "}
                    for the rest of the city.
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
                  "Le Corbusier Centre",
                  "Chandigarh",
                  "Master Plan",
                  "Architecture Museum",
                  "Pierre Jeanneret",
                  "Sector 19",
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

              <RelatedPostsGrid currentSlug="le-corbusier-centre-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="le-corbusier-centre-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
