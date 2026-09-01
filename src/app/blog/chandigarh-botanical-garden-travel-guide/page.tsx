// src/app/blog/chandigarh-botanical-garden-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chandigarh Botanical Garden Travel Guide: Timings & Tips",
  description:
    "Complete Chandigarh Botanical Garden guide — the city's largest, most naturalistic green space near Sarangpur. Plant diversity, how it differs from the Rose Garden and Rock Garden, getting there, and visit tips.",
  keywords:
    "Chandigarh Botanical Garden, Botanical Garden Sarangpur, Chandigarh Botanical Garden Sarangpur, Chandigarh off-beat places, Chandigarh nature walk, Chandigarh birdwatching, Chandigarh green spaces, Chandigarh outskirts attractions",
  openGraph: {
    title: "Chandigarh Botanical Garden Travel Guide: Timings & Tips",
    description:
      "A sprawling, naturalistic plant-conservation space on Chandigarh's outskirts near Sarangpur — the complete guide to the city's quietest, greenest outdoor stop.",
    url: "https://club.kudozz.in/blog/chandigarh-botanical-garden-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A wide, tree-covered green landscape near Chandigarh, evoking the naturalistic, forest-like feel of the Chandigarh Botanical Garden near Sarangpur",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandigarh Botanical Garden Travel Guide: Timings & Tips",
    description:
      "A sprawling, naturalistic plant-conservation space on Chandigarh's outskirts near Sarangpur — the complete guide to the city's quietest, greenest outdoor stop.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical:
      "https://club.kudozz.in/blog/chandigarh-botanical-garden-travel-guide",
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
            "Chandigarh Botanical Garden Travel Guide: Timings & Tips",
          description:
            "Complete Chandigarh Botanical Garden guide — the city's largest, most naturalistic green space near Sarangpur. Plant diversity, how it differs from the Rose Garden and Rock Garden, getting there, and visit tips.",
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
            "@id": "https://club.kudozz.in/blog/chandigarh-botanical-garden-travel-guide",
          },
          keywords:
            "Chandigarh Botanical Garden, Botanical Garden Sarangpur, Chandigarh off-beat places, Chandigarh nature walk, Chandigarh green spaces",
          about: {
            "@type": "Place",
            name: "Chandigarh Botanical Garden",
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
                name: "Chandigarh Botanical Garden",
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
    q: "Where is the Chandigarh Botanical Garden located?",
    a: "It sits on the outskirts of Chandigarh near Sarangpur village, close to the newer Chandigarh/Punjab side of the city — noticeably further out than the manicured gardens inside the main city grid, which is why it's sometimes referred to as Botanical Garden Sarangpur.",
  },
  {
    q: "How is this different from the Rose Garden or Japanese Garden?",
    a: "Those are ornamental, tightly landscaped gardens built around a single flower or design theme within the city's sector grid. The Botanical Garden is a much larger, more naturalistic space focused on plant diversity and conservation rather than manicured flower displays — closer in feel to a forest reserve than a city park.",
  },
  {
    q: "How big is the Chandigarh Botanical Garden?",
    a: "It's commonly described as spread over roughly 100-plus acres, considerably larger than most of Chandigarh's other gardens — though it's worth treating this figure as approximate rather than exact.",
  },
  {
    q: "Is the Chandigarh Botanical Garden good for birdwatching?",
    a: "Yes — its larger, more naturalistic tree cover and quieter footfall make it a genuinely good spot for a slow walk or casual birdwatching, more so than the tightly manicured gardens closer to the city centre.",
  },
  {
    q: "Do I need a cab to get there?",
    a: "It's advisable. Being on the outskirts near Sarangpur, it requires a longer auto or cab ride than Chandigarh's city-centre gardens, and it's worth checking current access and transport options before heading out since it isn't as centrally located as the Rock Garden or Rose Garden.",
  },
  {
    q: "Is entry to the Botanical Garden free?",
    a: "Entry is free or available for a nominal charge (approximate), and the garden is open through daylight hours, similar to Chandigarh's other public green spaces.",
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
  { id: "introduction", title: "Beyond the Sector Grid", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "what-to-see", title: "Plant Diversity & Research", level: 2 },
  { id: "how-its-different", title: "How It's Different", level: 2 },
  { id: "getting-there-practically", title: "Getting There, Honestly", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ChandigarhBotanicalGardenGuidePage() {
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
              alt="A wide, tree-covered green landscape near Chandigarh, evoking the naturalistic, forest-like feel of the Chandigarh Botanical Garden near Sarangpur"
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
                { label: "Botanical Garden", href: null },
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
                "Chandigarh Botanical Garden",
                "Sarangpur",
                "Chandigarh",
                "Off the Beaten Path",
                "Nature Walk",
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
              Chandigarh Botanical Garden: The City's Quietest, Greenest Escape
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A sprawling, naturalistic plant-conservation space on
              Chandigarh's outskirts near Sarangpur — trading the city's
              manicured, ornamental gardens for something closer to a forest
              reserve.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Near Sarangpur, Chandigarh outskirts",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,450 words",
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
                  <h2>Beyond the Sector Grid</h2>
                  <p>
                    The <strong>Chandigarh Botanical Garden</strong>,
                    sometimes called Botanical Garden Sarangpur after the
                    village it sits closest to, is a genuinely different kind
                    of green space from what most visitors expect from{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>
                    . Where the city's better-known gardens — the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>
                    , the{" "}
                    <Link href="/blog/japanese-garden-chandigarh-travel-guide">
                      Japanese Garden
                    </Link>
                    , the{" "}
                    <Link href="/blog/garden-of-fragrance-chandigarh-travel-guide">
                      Garden of Fragrance
                    </Link>{" "}
                    — are tightly landscaped and built around a single
                    ornamental theme, the Botanical Garden is a larger, more
                    naturalistic space with a focus on plant conservation and
                    diversity rather than flower displays.
                  </p>
                  <p>
                    It sits on the city's outskirts, near Sarangpur village
                    close to the newer Chandigarh/Punjab side of the city,
                    well outside the neat sector grid that most of
                    Chandigarh's tourist attractions occupy. That distance is
                    also exactly what gives it its character: fewer visitors,
                    more open space, and a feel closer to a forest reserve
                    than a manicured city park.
                  </p>
                  <p>
                    For travellers who've already covered the{" "}
                    <Link href="/blog/rock-garden-chandigarh-travel-guide">
                      Rock Garden
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    and want something quieter and greener, this is one of
                    Chandigarh's genuinely off-the-beaten-path options — good
                    for a slow walk, some birdwatching, or simply escaping the
                    city's grid for an hour or two.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Chandigarh Botanical Garden at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Sarangpur, Chandigarh outskirts",
                        },
                        {
                          icon: "📐",
                          label: "Area",
                          value: "~100+ acres (approx.)",
                        },
                        {
                          icon: "🌿",
                          label: "Focus",
                          value: "Native plant diversity & conservation",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free / nominal (approx.)",
                        },
                        {
                          icon: "⏰",
                          label: "Timings",
                          value: "Daylight hours",
                        },
                        {
                          icon: "🚕",
                          label: "Access",
                          value: "Longer cab/auto ride from city centre",
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
                    Because so much of the garden's appeal is in walking
                    through its tree cover and open space, weather matters a
                    good deal more here than at Chandigarh's smaller,
                    partially shaded gardens.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best overall — our pick",
                        text: "Cool, comfortable temperatures make the longer walking paths genuinely enjoyable, and it's the easiest season for a relaxed couple of hours outdoors.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best for birdwatching",
                        text: "The garden's quieter, more naturalistic tree cover is at its most active early in the day — a good window for casual birdwatching.",
                      },
                      {
                        season: "Post-Monsoon",
                        emoji: "🌿",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Greenest stretch of the year",
                        text: "Late summer into autumn brings out the garden's lush, forest-like character more than any other season.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Plan around the heat",
                        text: "Open, sun-exposed stretches can get uncomfortable in peak summer — an early morning visit is worth it if you're going during these months.",
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
                    <strong>Our pick:</strong> a cool-season weekday morning
                    between October and March — comfortable temperatures,
                    active birdlife, and a garden that's already quiet enough
                    without adding peak-summer heat to the mix.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach</h2>
                  <p>
                    Reaching the Botanical Garden takes a bit more planning
                    than Chandigarh's city-centre attractions, simply because
                    of where it sits.
                  </p>
                  <ul>
                    <li>
                      <strong>By Auto/Cab:</strong> The most practical option
                      for most visitors — app-based cabs can take you
                      directly to the garden near Sarangpur, though the ride
                      will run noticeably longer than a trip to any of
                      Chandigarh's central gardens.
                    </li>
                    <li>
                      <strong>From the city centre:</strong> Factor in extra
                      travel time compared to a stop like{" "}
                      <Link href="/blog/sector-17-chandigarh-travel-guide">
                        Sector 17
                      </Link>{" "}
                      or the{" "}
                      <Link href="/blog/rose-garden-chandigarh-travel-guide">
                        Rose Garden
                      </Link>
                      , both of which sit well inside the main sector grid.
                    </li>
                    <li>
                      <strong>Self-drive:</strong> If you have your own
                      vehicle, this is generally the most flexible way to
                      visit, since return transport options can thin out on
                      the outskirts compared to the city centre.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> It's worth checking current
                    access and transport options before heading out, since
                    this garden is less centrally located than Chandigarh's
                    other green spaces — arranging a round trip with the same
                    cab or auto is usually simpler than trying to find return
                    transport on the spot.
                  </div>
                </section>

                {/* ── What to See ───────────────────────────────────────── */}
                <section id="what-to-see">
                  <h2>Plant Diversity & Research</h2>
                  <p>
                    Unlike the single-theme gardens elsewhere in the city,
                    the Chandigarh Botanical Garden is built around variety.
                    It houses a wide range of plant and tree species,
                    including native varieties, spread across a considerably
                    larger area than any of Chandigarh's other public
                    gardens — commonly described as roughly 100-plus acres,
                    though this figure is best treated as approximate rather
                    than exact.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="A dense, naturalistic tree canopy on the outskirts of Chandigarh, evoking the plant-diversity focus of the Chandigarh Botanical Garden near Sarangpur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Part of what makes the garden distinct is its dual
                    function. It isn't purely a recreational space — it also
                    works as an educational and research-oriented green
                    space, with some sections dedicated to specific plant
                    groups, giving it a more purposeful, less purely
                    decorative feel than the ornamental gardens inside the
                    city. That said, it remains open for public visits, so
                    you don't need any special access or research affiliation
                    to walk through it.
                  </p>
                  <p>
                    This combination — genuine plant diversity plus a
                    conservation and research angle — is largely what
                    separates a visit here from a stop at any of
                    Chandigarh's other gardens. You're less likely to see
                    tightly clipped hedges or flower beds arranged for
                    photographs, and more likely to walk among a genuinely
                    varied mix of trees and shrubs that feels closer to a
                    protected natural area than a landscaped park.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Bring a pair of binoculars if
                    you have them — the garden's larger tree cover and
                    quieter footfall make it noticeably better for casual
                    birdwatching than Chandigarh's smaller, busier gardens.
                  </div>
                </section>

                {/* ── How It's Different ────────────────────────────────── */}
                <section id="how-its-different">
                  <h2>How It's Different from Chandigarh's Other Gardens</h2>
                  <p>
                    It's worth being clear about what kind of experience this
                    garden offers, since it's genuinely different from most
                    of the destinations covered in our{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>
                    .
                  </p>
                  <ul>
                    <li>
                      <strong>Scale:</strong> Considerably larger than the{" "}
                      <Link href="/blog/rose-garden-chandigarh-travel-guide">
                        Rose Garden
                      </Link>
                      ,{" "}
                      <Link href="/blog/japanese-garden-chandigarh-travel-guide">
                        Japanese Garden
                      </Link>
                      , or{" "}
                      <Link href="/blog/bougainvillea-garden-chandigarh-travel-guide">
                        Bougainvillea Garden
                      </Link>
                      , all of which occupy relatively compact plots within
                      the city grid.
                    </li>
                    <li>
                      <strong>Character:</strong> Naturalistic and
                      forest-like rather than manicured — plants are grown
                      for diversity and conservation value, not for
                      ornamental display.
                    </li>
                    <li>
                      <strong>Purpose:</strong> Doubles as an educational and
                      research space, unlike the purely recreational or
                      ornamental gardens elsewhere in the city.
                    </li>
                    <li>
                      <strong>Crowds:</strong> Genuinely quiet, even compared
                      to already-uncrowded spots like{" "}
                      <Link href="/blog/terraced-garden-chandigarh-travel-guide">
                        Terraced Garden
                      </Link>{" "}
                      — its distance from the city centre keeps footfall
                      low.
                    </li>
                    <li>
                      <strong>Location:</strong> On the outskirts near
                      Sarangpur, rather than within the neat sector grid that
                      houses the{" "}
                      <Link href="/blog/rock-garden-chandigarh-travel-guide">
                        Rock Garden
                      </Link>
                      ,{" "}
                      <Link href="/blog/sukhna-lake-chandigarh-travel-guide">
                        Sukhna Lake
                      </Link>
                      , and most other attractions.
                    </li>
                  </ul>
                  <p>
                    None of this makes it a "better" or "worse" garden than
                    Chandigarh's ornamental ones — it's simply aimed at a
                    different kind of visit: less about photographing
                    manicured flower beds, more about a slower walk through
                    genuine plant variety.
                  </p>
                </section>

                {/* ── Getting There Practically ─────────────────────────── */}
                <section id="getting-there-practically">
                  <h2>Getting There, Honestly</h2>
                  <p>
                    It's worth being upfront about the one real downside of
                    this garden: its location. Being on the outskirts near
                    Sarangpur means it requires a longer auto or cab ride than
                    any of Chandigarh's city-centre gardens — this isn't a
                    quick add-on to a Sector 17 or Rock Garden visit in the
                    way that, say, the{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    gardens are.
                  </p>
                  <p>
                    That's a reasonable trade-off if a quiet, green,
                    off-the-beaten-path stop is what you're after, but it's
                    worth planning for rather than discovering on the day. A
                    few practical points:
                  </p>
                  <ul>
                    <li>
                      <strong>Budget extra time:</strong> The round-trip
                      travel time alone can take up a meaningful chunk of a
                      half-day itinerary, so plan the rest of your day
                      accordingly.
                    </li>
                    <li>
                      <strong>Arrange return transport in advance:</strong>{" "}
                      Since it's away from the busier parts of the city,
                      catching an auto or cab back isn't always as immediate
                      as it would be from a central location — asking your
                      driver to wait, or booking a return ride in advance, is
                      the safer approach.
                    </li>
                    <li>
                      <strong>Check current access details before you go:</strong>{" "}
                      As with any less-central attraction, it's worth
                      confirming current transport options and the exact
                      route beforehand rather than assuming it will be as
                      straightforward as reaching a city-centre sight.
                    </li>
                  </ul>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>🗺️ Honest take:</strong> This is not a garden to
                    squeeze in between two other stops on a tight schedule —
                    it works best as a deliberate half-day plan, ideally with
                    your transport sorted both ways before you set off.
                  </div>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2-3 Hours)</h2>
                  <p>
                    Given the travel time involved, it's worth treating a
                    Botanical Garden visit as a dedicated outing rather than
                    a quick stop.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-40 min",
                        title: "Travel & Arrival",
                        color: "bg-amber-700",
                        activities: [
                          "Book a cab/auto with a planned return leg",
                          "Factor in the longer ride from the city centre",
                          "Arrive and orient yourself at the entrance",
                        ],
                      },
                      {
                        day: "40-100 min",
                        title: "Walk the Grounds",
                        color: "bg-forest-600",
                        activities: [
                          "Walk the main paths through the tree cover",
                          "Take in the range of native plant species",
                          "Pause in quieter sections for birdwatching",
                        ],
                      },
                      {
                        day: "100-150 min",
                        title: "Slow Down & Head Back",
                        color: "bg-sky-600",
                        activities: [
                          "Find a shaded spot to sit and unwind",
                          "Take photos of the naturalistic landscape",
                          "Begin the return journey to the city centre",
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
                    * Timings above include travel — the on-site walk itself
                    can easily be shortened or extended depending on how much
                    time you want to spend among the plant collections.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    The garden itself is inexpensive to visit — most of the
                    cost of a trip here comes from the longer transport leg
                    rather than the entry itself.
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
                            "Round-trip transport",
                            "₹250 (shared/app auto)",
                            "₹600 (cab, waiting incl.)",
                            "₹1,200 (private cab, full half-day)",
                          ],
                          ["Food/water", "₹150", "₹400", "₹1,000+"],
                          ["Total (approx.)", "₹400", "₹1,000", "₹2,200+"],
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
                    * Figures are per person, per visit, and assume a
                    round-trip cab/auto booked in advance. See our full{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh travel guide
                    </Link>{" "}
                    for a broader daily budget breakdown.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting</h2>
                  <ul>
                    <li>
                      <strong>Plan transport both ways:</strong> Given the
                      distance from the city centre, arrange a round trip in
                      advance rather than counting on finding a return ride
                      easily on-site.
                    </li>
                    <li>
                      <strong>Set aside a proper block of time:</strong> This
                      isn't a quick 20-minute stop — budget at least 2-3
                      hours including travel.
                    </li>
                    <li>
                      <strong>Come with different expectations than the city
                      gardens:</strong> Expect diversity and naturalistic
                      space rather than manicured flower beds.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Being on the
                      outskirts, nearby food and drink options are sparser
                      than in the city centre.
                    </li>
                    <li>
                      <strong>Good for a slow, unhurried pace:</strong> This
                      garden rewards wandering rather than a checklist
                      approach — leave room in your schedule to simply sit
                      and take it in.
                    </li>
                    <li>
                      <strong>Check current timings and access:</strong> As
                      with any less-central attraction, confirm hours and
                      the exact route before setting out.
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
                          "Book a round-trip cab or auto in advance",
                          "Set aside a dedicated half-day for the visit",
                          "Visit October–March for the most comfortable walk",
                          "Bring water, snacks, and binoculars if you have them",
                          "Come with a slow, unhurried pace in mind",
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
                          "Treat it as a quick add-on to a city-centre day",
                          "Expect manicured flower beds like the Rose Garden",
                          "Assume easy return transport without planning ahead",
                          "Skip checking current access details beforehand",
                          "Visit peak summer afternoons without shade planning",
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
                    <strong>🗺️ Extend the trip:</strong> If you're building a
                    fuller green-spaces day around Chandigarh, pair this
                    outing with the{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    corridor or the{" "}
                    <Link href="/blog/rose-garden-chandigarh-travel-guide">
                      Rose Garden
                    </Link>{" "}
                    on a different day — the travel time here makes it hard
                    to combine comfortably with central-city sightseeing on
                    the same outing.
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
                  "Chandigarh Botanical Garden",
                  "Sarangpur",
                  "Chandigarh",
                  "Off the Beaten Path",
                  "Nature Walk",
                  "Chandigarh Gardens",
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

              <RelatedPostsGrid currentSlug="chandigarh-botanical-garden-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="chandigarh-botanical-garden-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
