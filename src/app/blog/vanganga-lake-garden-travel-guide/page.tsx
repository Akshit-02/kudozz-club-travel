// src/app/blog/vanganga-lake-garden-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Vanganga Lake Garden Daman: Visit Guide & Tips",
  description:
    "Visit Vanganga Lake Garden in Daman — a landscaped lake garden with miniature replicas of world-famous landmarks, walking paths and boating. Timings, tips, budget and nearby food.",
  keywords:
    "Vanganga Lake Garden, Vanganga Lake Garden Daman, Vanganga Garden Daman, seven wonders garden Daman, Daman tourist places, Daman sightseeing, Daman lake garden, things to do in Daman, Daman family attractions, Moti Daman sightseeing",
  openGraph: {
    title: "Vanganga Lake Garden Daman: Visit Guide & Tips",
    description:
      "A landscaped garden built around a lake, dotted with miniature replicas of world landmarks — Daman's favourite family and photography stop. Full visit guide.",
    url: "https://club.kudozz.in/blog/vanganga-lake-garden-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A landscaped waterfront garden with palm trees and walking paths, evoking the setting of Vanganga Lake Garden in Daman",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanganga Lake Garden Daman: Visit Guide & Tips",
    description:
      "A landscaped garden built around a lake, dotted with miniature replicas of world landmarks — Daman's favourite family and photography stop.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/vanganga-lake-garden-travel-guide",
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
          headline: "Vanganga Lake Garden Daman: Visit Guide & Tips",
          description:
            "Visit Vanganga Lake Garden in Daman — a landscaped lake garden with miniature replicas of world-famous landmarks, walking paths and boating.",
          image: "https://club.kudozz.in/images/destinations/goa/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/vanganga-lake-garden-travel-guide",
          },
          keywords:
            "Vanganga Lake Garden, Vanganga Lake Garden Daman, Daman tourist places, Daman sightseeing, things to do in Daman",
          about: {
            "@type": "Place",
            name: "Vanganga Lake Garden",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Daman",
              addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
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
                name: "Daman & Diu",
                item: "https://club.kudozz.in/blog/dadra-nagar-haveli-daman-diu-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Vanganga Lake Garden",
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
    q: "What is special about Vanganga Lake Garden?",
    a: "Vanganga Lake Garden is a landscaped public garden in Daman built around a lake, best known for the miniature and replica sculptures of famous world landmarks scattered across its lawns — a theme loosely built around the idea of the seven wonders of the world alongside other well-known monuments. That mix of greenery, water and quirky sculpture makes it one of Daman's most photographed, family-friendly stops.",
  },
  {
    q: "Is there an entry fee for Vanganga Lake Garden?",
    a: "The garden has historically charged a small, nominal entry ticket per person, with a modest additional charge if boating is operational on the day of your visit. Fees at municipal gardens like this one do change over time, so treat any number you read online as approximate and confirm at the ticket counter rather than planning around a fixed figure.",
  },
  {
    q: "Is Vanganga Lake Garden good for kids?",
    a: "Yes — it's one of the more reliably kid-friendly attractions in Daman. Open lawns, a paved walking path, low-key sculptures kids enjoy spotting and posing next to, and (when running) boating on the lake all make it an easy, low-effort stop with children, without the long walking or climbing that some of Daman's other sights involve.",
  },
  {
    q: "How much time do I need for Vanganga Lake Garden?",
    a: "Budget around 1 to 1.5 hours for a relaxed walk around the lake, a look at the sculptures, and a short boat ride if you want one. It's a compact garden, not a half-day attraction, which makes it easy to slot in alongside Daman's beaches and forts on the same day.",
  },
  {
    q: "What are the timings of Vanganga Lake Garden?",
    a: "Like most municipal gardens in the region, Vanganga Lake Garden typically opens in the morning and stays open through the evening, with the garden's lights and lake reflections making early evening a particularly good time to visit. Exact opening and closing hours can vary, so it's worth a quick local check on the day if you're arriving very early or very late.",
  },
  {
    q: "Is boating available at Vanganga Lake Garden?",
    a: "Boating on the lake has been a feature of the garden, typically pedal or paddle boats for a short ride around the water. Availability can depend on maintenance, season and water levels, so treat it as a nice-to-have rather than something to build your visit around — check on arrival rather than assuming it will be running.",
  },
  {
    q: "Where is Vanganga Lake Garden located in Daman?",
    a: "The garden is located within Daman town, on the Daman side of the Daman Ganga river, and is easily combined with other in-town sightseeing such as Moti Daman Fort and the Daman waterfront. It's small enough that a rickshaw or short taxi ride from most hotels in Daman will get you there in a few minutes.",
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
  { id: "introduction", title: "About Vanganga Lake Garden", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "what-to-see", title: "What to See", level: 2 },
  { id: "boating", title: "Boating on the Lake", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food", title: "Nearby Food & Snacks", level: 2 },
  { id: "budget", title: "Budget Guide", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function VangangaLakeGardenGuidePage() {
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
              src="/images/destinations/goa/hero.jpg"
              alt="A landscaped waterfront garden with palm trees and walking paths, evoking the setting of Vanganga Lake Garden in Daman"
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
                {
                  label: "Daman & Diu",
                  href: "/blog/dadra-nagar-haveli-daman-diu-travel-guide",
                },
                { label: "Vanganga Lake Garden", href: null },
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
                "Vanganga Lake Garden",
                "Daman",
                "Family Friendly",
                "Off-beat",
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
              Vanganga Lake Garden, Daman: Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A landscaped garden built around a lake, dotted with miniature
              replicas of famous world landmarks — one of Daman's most
              relaxed, easy-to-love family stops.
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
                  text: "Daman, Daman & Diu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,850 words",
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
                  <h2>About Vanganga Lake Garden</h2>
                  <p>
                    <strong>Vanganga Lake Garden</strong> is a landscaped
                    public garden in{" "}
                    <Link href="/blog/daman-travel-guide">Daman</Link>, built
                    around a small lake and best known for the miniature and
                    replica sculptures scattered across its lawns — playful
                    recreations of famous world landmarks, loosely themed
                    around the idea of the seven wonders of the world
                    alongside a few other well-known monuments. It's a
                    modest, municipally maintained garden rather than a grand
                    heritage site, but that's exactly its appeal: a shaded,
                    walkable green space in the middle of a beach-and-fort
                    town, where families come to stroll, click photos next to
                    the sculptures, and unwind by the water.
                  </p>
                  <p>
                    The garden sits comfortably alongside Daman's better-known
                    attractions like{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman Fort
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/devka-beach-travel-guide">
                      Devka Beach
                    </Link>{" "}
                    — it isn't a destination that needs a dedicated day, but
                    it's a genuinely pleasant hour or so, particularly for
                    families travelling with kids who want a change of pace
                    from the beach and the fort walls. If you're building out
                    a wider itinerary, it fits neatly into our{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Daman & Diu travel guide
                    </Link>{" "}
                    as a half-hour to hour-long addition to a Daman day.
                  </p>
                  <p>
                    Don't go in expecting museum-grade replicas or a curated
                    "world wonders park" in the theme-park sense — the charm
                    here is low-key: a quiet lake, tidy lawns, shaded paths,
                    and sculptures that are more about a fun photo stop than
                    architectural accuracy.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Vanganga Lake Garden at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Daman town, Daman & Diu",
                        },
                        {
                          icon: "🏛️",
                          label: "Known For",
                          value: "Lake + world-landmark sculptures",
                        },
                        {
                          icon: "⏱️",
                          label: "Visit Duration",
                          value: "1 – 1.5 hours",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar, evenings",
                        },
                        {
                          icon: "🚣",
                          label: "Boating",
                          value: "Sometimes available",
                        },
                        {
                          icon: "👨‍👩‍👧",
                          label: "Good For",
                          value: "Families, casual photography",
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
                    Coastal Gujarat's heat and humidity make an open, sun-lit
                    garden most enjoyable outside the peak of the day —
                    timing your visit well makes a bigger difference here
                    than at most of Daman's other sights.
                  </p>
                  <ul>
                    <li>
                      <strong>Time of day:</strong> Late afternoon into early
                      evening is the sweet spot — softer light for photos,
                      cooler air for walking, and the garden's lights (where
                      present) coming on around dusk.
                    </li>
                    <li>
                      <strong>Time of year:</strong> October to March brings
                      the most comfortable temperatures for an outdoor,
                      shade-light garden like this one. April to June gets
                      hot enough that a midday visit is genuinely
                      uncomfortable.
                    </li>
                    <li>
                      <strong>Monsoon (June–September):</strong> The garden
                      stays green and the lake fills up nicely, but expect
                      muddy patches on the paths and the occasional
                      rain-shortened visit.
                    </li>
                  </ul>
                  <blockquote>
                    <strong>Our pick:</strong> An hour before sunset, any
                    time between November and February — cool enough to walk
                    comfortably, and the light works well for photos by the
                    lake and sculptures.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Vanganga Lake Garden</h2>
                  <p>
                    The garden is located within Daman town and is easy to
                    reach as a short hop from most parts of the city rather
                    than a planned excursion of its own.
                  </p>
                  <ul>
                    <li>
                      <strong>From within Daman:</strong> A short auto-rickshaw
                      or taxi ride from most hotels and guesthouses in Nani
                      Daman or Moti Daman — typically a matter of minutes, not
                      a dedicated half-day trip.
                    </li>
                    <li>
                      <strong>Combine with other sightseeing:</strong> The
                      garden pairs naturally with a loop that also covers{" "}
                      <Link href="/blog/moti-daman-travel-guide">
                        Moti Daman Fort
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/devka-beach-travel-guide">
                        Devka Beach
                      </Link>
                      , since all three sit within Daman's compact town area.
                    </li>
                    <li>
                      <strong>From outside Daman:</strong> If you're arriving
                      from Vapi railway station or driving in from Mumbai or
                      Ahmedabad, treat the garden as a stop within your Daman
                      sightseeing loop rather than a separate destination —
                      see our{" "}
                      <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                        Daman & Diu travel guide
                      </Link>{" "}
                      for full route details into town.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Ask your rickshaw or taxi
                    driver to wait, or arrange a pickup — the garden is small
                    enough that you won't need transport once you're inside,
                    but Daman's town roads aren't dense with waiting autos
                    outside peak hours.
                  </div>
                </section>

                {/* ── What to See ───────────────────────────────────────── */}
                <section id="what-to-see">
                  <h2>What to See</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="A palm-lined lakeside garden path, illustrative of the walking paths and greenery at Vanganga Lake Garden"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <ul>
                    <li>
                      <strong>The lake itself:</strong> The garden's central
                      feature — a landscaped lake with a walking path that
                      loops around it, offering pleasant water views and a
                      cooler microclimate than the surrounding streets,
                      especially useful on a warm day.
                    </li>
                    <li>
                      <strong>Themed sculptures:</strong> Scattered around
                      the grounds are miniature and replica sculptures
                      depicting famous world landmarks, generally built
                      around the idea of the seven wonders of the world
                      alongside a handful of other well-known monuments. Exact
                      lineups at gardens like this do shift over time with
                      maintenance and renovation, so treat this as a themed
                      sculpture garden rather than expecting a fixed,
                      guaranteed list — the fun is in walking around and
                      discovering what's there on the day.
                    </li>
                    <li>
                      <strong>Walking paths and lawns:</strong> Paved paths
                      wind around the lake and through landscaped lawns,
                      making it an easy, flat walk suitable for all ages,
                      including elderly visitors and young kids.
                    </li>
                    <li>
                      <strong>Seating and shaded spots:</strong> Benches and
                      shaded areas along the paths make it a comfortable
                      place to simply sit for a while, which is part of why
                      it's popular with local families as an evening
                      hangout, not just a one-time tourist stop.
                    </li>
                  </ul>
                  <p>
                    The overall experience leans toward relaxed and
                    photogenic rather than educational or grand — most
                    visitors spend their time walking the loop, taking
                    photos beside the sculptures, and enjoying the lake
                    setting rather than reading plaques or historical
                    detail.
                  </p>
                </section>

                {/* ── Boating ───────────────────────────────────────────── */}
                <section id="boating">
                  <h2>Boating on the Lake</h2>
                  <p>
                    Boating has been a feature of Vanganga Lake Garden at
                    various points — typically simple pedal or paddle boats
                    for a short ride around the water, a favourite with
                    kids. Whether it's operational on the day you visit can
                    depend on maintenance schedules, water levels and season,
                    so it's worth checking on arrival rather than planning
                    your visit around it.
                  </p>
                  <p>
                    If boating is running, expect a modest per-ride charge
                    and a short queue during busy evening hours, especially
                    on weekends. If it isn't, the lakeside walk and
                    sculptures are more than enough to make the stop
                    worthwhile on their own.
                  </p>
                </section>

                {/* ── Visit Plan ────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Vanganga Lake Garden is a short, focused stop rather than
                    a half-day attraction — here's a simple plan for making
                    the most of it without overthinking the visit.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0–15 min",
                        title: "Arrive & Orient",
                        color: "bg-amber-700",
                        activities: [
                          "Buy entry tickets at the counter",
                          "Take the main path down toward the lake",
                          "Get a first look at the garden layout and sculptures",
                        ],
                      },
                      {
                        day: "15–50 min",
                        title: "Walk the Lake Loop",
                        color: "bg-forest-600",
                        activities: [
                          "Walk the paved path around the lake",
                          "Stop for photos at the landmark sculptures",
                          "Boating ride if it's operational and you'd like one",
                        ],
                      },
                      {
                        day: "50–75 min",
                        title: "Relax & Wrap Up",
                        color: "bg-stone-600",
                        activities: [
                          "Sit by the lake or on a shaded bench",
                          "Grab a snack from a nearby stall if you're hungry",
                          "Head onward to your next Daman stop",
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
                    * Total visit time: roughly 1 to 1.5 hours for a relaxed
                    pace, less if you're just passing through on a wider
                    Daman sightseeing loop.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food">
                  <h2>Nearby Food & Snacks</h2>
                  <p>
                    Don't expect a food court inside the garden itself — like
                    most municipal gardens in the region, snacks are handled
                    by small stalls and vendors just outside the gates rather
                    than a formal dining setup.
                  </p>
                  <ul>
                    <li>
                      <strong>Street snack stalls:</strong> Vendors near the
                      entrance typically sell light snacks, chaat, ice
                      cream and cold drinks — useful for a quick bite after
                      the walk rather than a full meal.
                    </li>
                    <li>
                      <strong>Daman town restaurants:</strong> For a proper
                      meal, head into Nani Daman or Moti Daman's main market
                      areas, a short ride away, where you'll find a mix of
                      Gujarati thalis, seafood, and casual restaurants.
                    </li>
                    <li>
                      <strong>Carry water:</strong> Especially in warmer
                      months, carrying your own water bottle is a good idea
                      since options inside the garden itself are limited.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Guide</h2>
                  <p>
                    Vanganga Lake Garden is an inexpensive stop by any
                    measure — entry fees at municipal gardens like this tend
                    to be nominal, and boating (if available) adds only a
                    small amount on top.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Approx. Cost", "Notes"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "Entry ticket",
                            "Nominal, per person",
                            "Confirm current rate at the counter",
                          ],
                          [
                            "Boating (if available)",
                            "Small per-ride charge",
                            "Not always operational — check on arrival",
                          ],
                          [
                            "Local transport (round trip)",
                            "₹100 – ₹300",
                            "Auto-rickshaw from most Daman hotels",
                          ],
                          [
                            "Snacks at nearby stalls",
                            "₹50 – ₹150 / person",
                            "Full meals better found in Daman's main markets",
                          ],
                        ].map(([exp, cost, note], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {cost}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {note}
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
                    * Entry and boating fees at municipal gardens change from
                    time to time — treat the figures above as a rough
                    estimate rather than a fixed price.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Go for the golden-hour light:</strong> Late
                      afternoon to early evening gives the best light for
                      photos by the lake and sculptures, and avoids the
                      harshest midday heat.
                    </li>
                    <li>
                      <strong>Don't build your whole day around it:</strong>{" "}
                      This is a 1 to 1.5 hour stop, not a full attraction —
                      pair it with the fort, beaches, or Daman's markets for
                      a fuller day.
                    </li>
                    <li>
                      <strong>Carry small cash:</strong> Entry tickets, any
                      boating charges, and nearby snack stalls are generally
                      cash-friendly, small-denomination transactions.
                    </li>
                    <li>
                      <strong>Wear comfortable footwear:</strong> The lake
                      loop is flat and paved, but still involves a fair bit
                      of walking if you want to see everything.
                    </li>
                    <li>
                      <strong>Check boating availability on arrival:</strong>{" "}
                      Don't assume it's running — ask at the entrance rather
                      than being disappointed partway through your visit.
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
                          "Visit close to sunset for the best light and cooler air",
                          "Walk the full lake loop to see all the sculptures",
                          "Bring kids — it's one of Daman's easiest family stops",
                          "Combine it with Moti Daman Fort or Devka Beach the same day",
                          "Carry water, especially outside the cooler months",
                          "Ask about boating availability right at the entrance",
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
                          "Expect a large theme park or museum-scale attraction",
                          "Visit at peak midday heat in the summer months",
                          "Plan your whole Daman day only around this stop",
                          "Assume boating will definitely be operating",
                          "Expect a full food court inside the garden itself",
                          "Skip checking current entry timings before you go",
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
                    <strong>🗺️ Extend the trip:</strong> Vanganga Lake Garden
                    pairs naturally with a fuller Daman day covering{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman Fort
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/devka-beach-travel-guide">
                      Devka Beach
                    </Link>
                    , or as one stop within a longer{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Daman & Diu itinerary
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
                  "Vanganga Lake Garden",
                  "Daman",
                  "Daman and Diu",
                  "Family Friendly",
                  "Lake Garden",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="vanganga-lake-garden-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="vanganga-lake-garden-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
