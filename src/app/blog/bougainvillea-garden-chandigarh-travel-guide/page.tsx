// src/app/blog/bougainvillea-garden-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bougainvillea Garden Chandigarh: Timings, Tips & Visit Guide",
  description:
    "Complete Bougainvillea Garden Chandigarh guide — a quiet themed garden of trellised bougainvillea creepers in Sector 3. Best time to visit, how to reach, and what to expect beyond the Rose Garden crowds.",
  keywords:
    "Bougainvillea Garden Chandigarh, Bougainvillea Garden Sector 3, Chandigarh gardens, Leisure Valley Chandigarh, Chandigarh Rose Garden alternative, quiet gardens Chandigarh, Chandigarh Sector 3 garden, Chandigarh flower garden timings",
  openGraph: {
    title: "Bougainvillea Garden Chandigarh: Timings, Tips & Visit Guide",
    description:
      "A quiet, trellised garden of magenta, pink and white bougainvillea in Sector 3 — the complete visit guide for Chandigarh's least-crowded flower garden.",
    url: "https://club.kudozz.in/blog/bougainvillea-garden-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A calm, tree-lined green space in Chandigarh, evoking the quiet trellised walkways of the Bougainvillea Garden",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bougainvillea Garden Chandigarh: Timings, Tips & Visit Guide",
    description:
      "A quiet, trellised garden of magenta, pink and white bougainvillea in Sector 3 — the complete visit guide for Chandigarh's least-crowded flower garden.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical:
      "https://club.kudozz.in/blog/bougainvillea-garden-chandigarh-travel-guide",
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
          headline:
            "Bougainvillea Garden Chandigarh: Timings, Tips & Visit Guide",
          description:
            "Complete Bougainvillea Garden Chandigarh guide — a quiet themed garden of trellised bougainvillea creepers in Sector 3. Best time to visit, how to reach, and what to expect beyond the Rose Garden crowds.",
          image:
            "https://club.kudozz.in/images/destinations/chandigarh/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/bougainvillea-garden-chandigarh-travel-guide",
          },
          keywords:
            "Bougainvillea Garden Chandigarh, Sector 3 Chandigarh, Leisure Valley, Chandigarh gardens, quiet gardens Chandigarh",
          about: {
            "@type": "Place",
            name: "Bougainvillea Garden",
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
                name: "Bougainvillea Garden",
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
    q: "Where is the Bougainvillea Garden in Chandigarh?",
    a: "The Bougainvillea Garden is commonly placed in Sector 3, forming part of, or sitting close to, Chandigarh's Leisure Valley green corridor that threads through several sectors of the city.",
  },
  {
    q: "Is the Bougainvillea Garden free to enter?",
    a: "Yes — entry is free or available for a nominal charge, and the garden is open through daylight hours, much like Chandigarh's other public green spaces.",
  },
  {
    q: "When is the best time to see the bougainvillea in bloom?",
    a: "Roughly March to June, and again after the monsoon, is when the bougainvillea is in its fullest bloom. Mid-winter visits tend to find the creepers comparatively bare, so it's worth timing a visit around the warmer months if the flowers are the main draw.",
  },
  {
    q: "Is Bougainvillea Garden as crowded as the Rose Garden?",
    a: "No — it's noticeably smaller and quieter than the Zakir Hussain Rose Garden, and sees far fewer tourists. It's used mostly by nearby residents for morning and evening walks rather than being a major stop on most visitor itineraries.",
  },
  {
    q: "How much time should I set aside for this garden?",
    a: "Given its smaller size, 20 to 30 minutes is usually enough for an unhurried walk through the trellised paths, though you could easily extend that if you're combining it with a longer walk through the wider Leisure Valley greenbelt.",
  },
  {
    q: "Can I combine Bougainvillea Garden with other Chandigarh gardens?",
    a: "Yes, easily. Its position within or near the Leisure Valley corridor makes it simple to combine with a walk toward the Rose Garden, Rock Garden, or other nearby green spaces on the same outing.",
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
  { id: "introduction", title: "A Quieter Garden", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-garden", title: "Inside the Garden", level: 2 },
  { id: "nearby", title: "Nearby Green Spaces", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BougainvilleaGardenGuidePage() {
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
              alt="A calm, tree-lined green space in Chandigarh, evoking the quiet trellised walkways of the Bougainvillea Garden"
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
                { label: "Bougainvillea Garden", href: null },
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
                "Bougainvillea Garden",
                "Chandigarh",
                "Sector 3",
                "Leisure Valley",
                "Quiet Gardens",
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
              Bougainvillea Garden, Chandigarh: The Quiet Bloom Beyond the Rose Garden
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Trellised arches and creeper-covered walkways bursting with
              magenta, pink, orange and white blooms — a small, unhurried
              garden in Sector 3 that most tourists walk straight past.
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
                  text: "Sector 3, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,150 words",
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
                  <h2>A Quieter Garden</h2>
                  <p>
                    The <strong>Bougainvillea Garden</strong>, commonly
                    placed in Sector 3 of{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>
                    , is a themed garden built entirely around one plant:
                    bougainvillea. Its creepers and shrubs have been trained
                    and pruned over the years into decorative shapes, arches,
                    and trellised walkways, so that in the warmer months the
                    whole garden turns into a corridor of magenta, pink,
                    orange, and white blooms.
                  </p>
                  <p>
                    It doesn't try to compete with the scale or fame of the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>
                    . It's smaller, quieter, and largely used by residents of
                    the surrounding sectors for their morning and evening
                    walks rather than by camera-toting tourists. That's
                    precisely what makes it worth a visit for anyone who has
                    already ticked off Chandigarh's bigger attractions and
                    wants a slower, less crowded stop.
                  </p>
                  <p>
                    Being part of, or close to, Chandigarh's{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    green corridor, it also fits naturally into a longer walk
                    through the city's linear chain of gardens rather than
                    standing as an isolated destination.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌺</span> Bougainvillea Garden at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 3, Chandigarh",
                        },
                        {
                          icon: "🌿",
                          label: "Theme",
                          value: "Trellised bougainvillea creepers",
                        },
                        {
                          icon: "🚶",
                          label: "Vibe",
                          value: "Quiet, local, uncrowded",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free / nominal",
                        },
                        {
                          icon: "⏰",
                          label: "Timings",
                          value: "Daylight hours",
                        },
                        {
                          icon: "🌸",
                          label: "Best Bloom",
                          value: "~March–June, post-monsoon",
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
                    Because the garden's entire appeal is built around one
                    flowering plant, timing matters more here than at
                    Chandigarh's more evergreen green spaces.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Peak bloom — our pick",
                        text: "The warmer months bring the bougainvillea into its fullest, most colourful bloom — arches and trellises turn nearly solid magenta, pink and orange.",
                      },
                      {
                        season: "Post-Monsoon",
                        emoji: "🌦️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "A second flush of colour",
                        text: "After the monsoon, the creepers often put out another good round of flowering, making September–October a solid secondary window.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best for a peaceful walk",
                        text: "Arrive soon after the gates open for the coolest, quietest stretch of the day — mostly local walkers, soft light, and few other visitors.",
                      },
                      {
                        season: "Mid-Winter",
                        emoji: "🍂",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Skip if flowers are the draw",
                        text: "The bougainvillea is comparatively bare through the coldest months, so a winter visit is better suited to a general walk than to seeing the garden at its best.",
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
                    <strong>Our pick:</strong> an early morning visit sometime
                    between March and June, when the trellises are in their
                    fullest colour and the garden still belongs mostly to
                    its regular morning walkers.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach</h2>
                  <p>
                    Sitting inside Chandigarh's well-organised sector grid,
                    the Bougainvillea Garden is easy to reach from most parts
                    of the city.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The simplest way in —
                      app-based cabs and autos will drop you close to the
                      garden's entrance in Sector 3 without any trouble
                      navigating the sector system.
                    </li>
                    <li>
                      <strong>On foot via Leisure Valley:</strong> If you're
                      already walking the Leisure Valley greenbelt or visiting
                      a nearby garden, it's an easy extension to the same
                      walk rather than a separate trip.
                    </li>
                    <li>
                      <strong>Combine with central sectors:</strong> Its
                      Sector 3 location keeps it within easy reach of{" "}
                      <Link href="/blog/sector-17-chandigarh-travel-guide">
                        Sector 17
                      </Link>{" "}
                      and other central parts of the city, so it slots
                      neatly into a wider day of sightseeing.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Since this garden is small
                    and easy to miss if you're not looking for it, it's worth
                    confirming the exact entrance with your driver or a
                    quick map check before heading out — Chandigarh's sector
                    grid has several similarly named green pockets.
                  </div>
                </section>

                {/* ── The Garden ────────────────────────────────────────── */}
                <section id="the-garden">
                  <h2>Inside the Garden</h2>
                  <p>
                    The garden's design is straightforward and effective:
                    bougainvillea shrubs and creepers are trained over arches
                    and trellised frames that run along its walkways, so
                    that walking through feels less like strolling past
                    flowerbeds and more like passing beneath a tunnel of
                    colour when the plants are in bloom.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="A quiet garden pathway in Chandigarh, evoking the trellised arches and creeper-covered walkways of the Bougainvillea Garden in Sector 3"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Unlike the tightly manicured flowerbeds of the Rose
                    Garden or the sculpted hedges of the{" "}
                    <Link href="/blog/japanese-garden-chandigarh-travel-guide">
                      Japanese Garden
                    </Link>
                    , this one leans into the plant's naturally sprawling
                    habit — pruned into shape, but never so formal that it
                    loses its slightly wild character. The varying bract
                    colours across different bougainvillea cultivars are what
                    give the garden its signature mix of magenta, pink,
                    orange and white in the same frame.
                  </p>
                  <p>
                    Benches and shaded stretches along the paths make it a
                    comfortable place to sit for a while, and because
                    footfall is genuinely light compared to Chandigarh's
                    bigger gardens, it rarely feels crowded even on a
                    weekend morning.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're carrying a camera,
                    the trellised arches make natural framing devices for
                    portraits — arrive when the bougainvillea is at its
                    fullest bloom for the most striking results.
                  </div>
                </section>

                {/* ── Nearby ────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Green Spaces</h2>
                  <p>
                    The Bougainvillea Garden's real strength is how easily it
                    combines with Chandigarh's other green spaces, most of
                    which sit along the same broad Leisure Valley corridor
                    or within a short ride of it.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/rose-garden-chandigarh-travel-guide">
                          Rose Garden
                        </Link>
                        :
                      </strong>{" "}
                      Asia's largest rose garden, and a natural next stop if
                      you want to compare Chandigarh's most famous flower
                      garden with this quieter one.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                          Leisure Valley
                        </Link>
                        :
                      </strong>{" "}
                      The wider green corridor that links several of
                      Chandigarh's gardens together — good for an extended
                      walk beyond just this one garden.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/terraced-garden-chandigarh-travel-guide">
                          Terraced Garden
                        </Link>
                        :
                      </strong>{" "}
                      Another lesser-visited garden worth pairing with
                      Bougainvillea Garden for a fuller, quieter green-space
                      itinerary.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/garden-of-fragrance-chandigarh-travel-guide">
                          Garden of Fragrance
                        </Link>
                        :
                      </strong>{" "}
                      Similarly themed and similarly under-visited — a good
                      match for travellers who enjoyed this garden's slower
                      pace.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (30-45 Minutes)</h2>
                  <p>
                    This isn't a garden that needs a lot of time — its value
                    is in a slow, unhurried walk rather than a long
                    checklist of things to see.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-15 min",
                        title: "Enter & Walk the Main Trellis",
                        color: "bg-amber-700",
                        activities: [
                          "Enter through the Sector 3 gate",
                          "Walk the main trellised pathway slowly",
                          "Take in the arches and mixed bract colours",
                        ],
                      },
                      {
                        day: "15-30 min",
                        title: "Sit & Photograph",
                        color: "bg-forest-600",
                        activities: [
                          "Find a shaded bench for a slower pause",
                          "Photograph the arches if the light is good",
                          "Note how few other visitors are around",
                        ],
                      },
                      {
                        day: "30-45 min",
                        title: "Extend into Leisure Valley",
                        color: "bg-sky-600",
                        activities: [
                          "Continue walking into the wider greenbelt",
                          "Head toward the Rose Garden if time allows",
                          "Exit toward central sectors for food or shopping",
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
                    * Given how easily it connects into the Leisure Valley
                    corridor, most visitors end up spending more time in the
                    wider greenbelt than in the Bougainvillea Garden itself —
                    which is exactly the point.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    With free or nominal entry, this is one of the cheapest
                    stops on any Chandigarh itinerary — your only real cost
                    is getting there.
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
                          ["Garden entry", "Free/nominal", "Free/nominal", "Free/nominal"],
                          [
                            "Transport to/from garden",
                            "₹50 (shared auto)",
                            "₹150 (auto/cab)",
                            "₹400 (private cab)",
                          ],
                          ["Food nearby (optional)", "₹150", "₹500", "₹1,500+"],
                          ["Total (approx.)", "₹200", "₹650", "₹1,900+"],
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
                    * Figures are per person, per visit. See our full{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a complete daily budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting</h2>
                  <ul>
                    <li>
                      <strong>Time it around the bloom:</strong> Visit
                      roughly between March and June, or after the monsoon,
                      to see the bougainvillea at its most colourful.
                    </li>
                    <li>
                      <strong>Don't expect Rose Garden crowds or scale:</strong>{" "}
                      This is a small, local garden — go in with expectations
                      set for a quiet walk, not a major attraction.
                    </li>
                    <li>
                      <strong>Combine it with a longer walk:</strong> Pair it
                      with Leisure Valley or the Rose Garden rather than
                      treating it as a standalone destination.
                    </li>
                    <li>
                      <strong>Carry water in summer:</strong> Shaded stretches
                      exist but aren't continuous, and Chandigarh summers get
                      genuinely hot.
                    </li>
                    <li>
                      <strong>Check current timings before an early or late
                      visit:</strong> Like most of Chandigarh's public
                      gardens, hours run through daylight and can shift
                      slightly with the season.
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
                          "Visit between March and June for peak bloom",
                          "Combine it with a Leisure Valley walk",
                          "Go early morning for the quietest experience",
                          "Bring a camera for the trellised arches",
                          "Pair it with the Rose Garden on the same day",
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
                          "Expect the scale or crowds of the Rose Garden",
                          "Visit mid-winter hoping for full bloom",
                          "Plan a whole day around this one garden alone",
                          "Skip checking the exact Sector 3 entrance beforehand",
                          "Assume food stalls exist right at the gate",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Bougainvillea
                    Garden with a walk through{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    toward the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    for a fuller morning among Chandigarh's gardens, or head
                    onward to the{" "}
                    <Link href="/blog/rock-garden-chandigarh-travel-guide">
                      Rock Garden
                    </Link>{" "}
                    if you have a full day to spare.
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
                  "Bougainvillea Garden",
                  "Chandigarh",
                  "Sector 3",
                  "Leisure Valley",
                  "Chandigarh Gardens",
                  "Quiet Gardens",
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

              <RelatedPostsGrid currentSlug="bougainvillea-garden-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="bougainvillea-garden-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
