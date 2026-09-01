// src/app/blog/rose-garden-chandigarh-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Zakir Hussain Rose Garden Chandigarh: Complete Travel Guide",
  description:
    "Complete guide to the Zakir Hussain Rose Garden, Sector 16 — Asia's largest rose garden with roughly 1,600+ rose varieties. Best time, the Rose Festival, entry timings, and visit tips.",
  keywords:
    "Zakir Hussain Rose Garden, Rose Garden Chandigarh, Sector 16 Chandigarh, Chandigarh Rose Festival, Asia's largest rose garden, best time to visit Rose Garden Chandigarh, Rose Garden Chandigarh timings, Rose Garden entry fee, Chandigarh gardens, Chandigarh Sector 16, rose varieties Chandigarh, medicinal plants garden Chandigarh",
  openGraph: {
    title: "Zakir Hussain Rose Garden Chandigarh: Complete Travel Guide",
    description:
      "Roughly 30 acres, close to 1,600 rose varieties, and a February-March bloom that turns Sector 16 into Asia's largest rose garden in full flower.",
    url: "https://club.kudozz.in/blog/rose-garden-chandigarh-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/chandigarh/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wide green lawns and tree-lined paths typical of Chandigarh's landscaped gardens, evoking the Zakir Hussain Rose Garden in Sector 16",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakir Hussain Rose Garden Chandigarh: Complete Travel Guide",
    description:
      "Roughly 30 acres, close to 1,600 rose varieties, and a February-March bloom that turns Sector 16 into Asia's largest rose garden in full flower.",
    images: ["/images/destinations/chandigarh/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/rose-garden-chandigarh-travel-guide",
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
          headline: "Zakir Hussain Rose Garden Chandigarh: Complete Travel Guide",
          description:
            "Complete guide to the Zakir Hussain Rose Garden, Sector 16 — Asia's largest rose garden with roughly 1,600+ rose varieties. Best time, the Rose Festival, entry timings, and visit tips.",
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
            "@id": "https://club.kudozz.in/blog/rose-garden-chandigarh-travel-guide",
          },
          keywords:
            "Zakir Hussain Rose Garden, Rose Garden Chandigarh, Sector 16 Chandigarh, Chandigarh Rose Festival, Asia's largest rose garden, rose varieties Chandigarh",
          about: {
            "@type": "Place",
            name: "Zakir Hussain Rose Garden",
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
                name: "Rose Garden",
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
    q: "Is the Zakir Hussain Rose Garden free to enter?",
    a: "Entry is free or close to it for most visitors — the garden has historically been treated as an open public park rather than a ticketed monument, though it's worth carrying small change in case a nominal fee applies during the Rose Festival period. Either way, cost has never been a barrier to visiting.",
  },
  {
    q: "When is the best time to see the roses in bloom?",
    a: "February and March are, by a wide margin, the best months — this is when the roughly 1,600-plus rose varieties are in full flower and the annual Chandigarh Rose Festival takes place. Outside this window, roughly April through January, the garden is still a pleasant green lawn space, but without the flowering spectacle that makes it famous.",
  },
  {
    q: "What is the Chandigarh Rose Festival?",
    a: "It's an annual multi-day festival held inside the Rose Garden, typically in February or March, timed to coincide with peak bloom. Expect flower shows and rose competitions, cultural performances and music, food stalls, and large weekend crowds — it's one of Chandigarh's most popular civic events of the year.",
  },
  {
    q: "How many rose varieties does the garden actually have?",
    a: "Commonly cited figures put it at somewhere in the range of 1,600 to 1,800-plus rose varieties across roughly 50,000 individual rose plants, which is why it's widely described as Asia's largest rose garden. These numbers are the ones most often quoted by the city and in travel writing rather than a figure independently verified plant-by-plant, so treat them as a well-established approximation rather than an exact count.",
  },
  {
    q: "Is the Rose Garden worth visiting outside February-March?",
    a: "Yes, if you adjust your expectations. Around 30 acres of manicured lawns, shaded walking paths, and the medicinal and aromatic plant collection remain pleasant year-round for a morning walk or a picnic — you simply won't see the mass rose bloom that the garden is famous for.",
  },
  {
    q: "How do I get to the Rose Garden and what's nearby?",
    a: "The garden sits in Sector 16, an easy auto or cab ride from almost anywhere in the city, and is genuinely close to Sector 17 — Chandigarh's central plaza and shopping district — making it simple to combine both in a single outing. It also sits along the city's Leisure Valley greenbelt, within reach of other gardens like the Garden of Fragrance.",
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
  { id: "introduction", title: "Asia's Largest Rose Garden", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "the-garden", title: "Inside the Garden", level: 2 },
  { id: "rose-festival", title: "The Chandigarh Rose Festival", level: 2 },
  { id: "medicinal-plants-section", title: "Medicinal & Aromatic Plants", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "nearby", title: "Nearby Sights", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RoseGardenGuidePage() {
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
              alt="Wide green lawns and tree-lined paths typical of Chandigarh's landscaped gardens, evoking the Zakir Hussain Rose Garden in Sector 16"
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
                { label: "Rose Garden", href: null },
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
                "Rose Garden",
                "Sector 16",
                "Chandigarh",
                "Rose Festival",
                "City Gardens",
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
              Zakir Hussain Rose Garden: Chandigarh's Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Roughly 30 acres in the heart of Sector 16, home to somewhere
              north of a thousand rose varieties and widely described as
              Asia's largest rose garden — a fragrant, photogenic centrepiece
              of Chandigarh's famous green planning.
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
                  text: "Sector 16, Chandigarh",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>Asia's Largest Rose Garden</h2>
                  <p>
                    The <strong>Zakir Hussain Rose Garden</strong> — named
                    after Dr. Zakir Hussain, the former President of India —
                    sits in Sector 16 of{" "}
                    <Link href="/blog/chandigarh-travel-guide">Chandigarh</Link>,
                    and is one of the city's most-visited and most-photographed
                    green spaces. Established in 1967 and spread over roughly
                    30 acres, it is widely described as Asia's largest rose
                    garden, a claim that's less about a single record book
                    entry and more about the sheer scale of what's planted
                    here — commonly cited figures put the collection at
                    somewhere around 1,600 to 1,800-plus rose varieties across
                    roughly 50,000 individual rose plants.
                  </p>
                  <p>
                    Those numbers get repeated often enough in city
                    literature and travel writing that they're worth treating
                    as a reliable approximation rather than a precisely
                    audited count — but even taken loosely, they explain why
                    the garden has held onto its reputation for decades. Walk
                    through it during peak bloom and it's easy to believe:
                    rose beds stretch out in every direction, organised by
                    colour and variety, with named cultivars, climbers, and
                    hybrid teas all represented across the grounds.
                  </p>
                  <p>
                    Chandigarh's parent guide already flags the Rose Garden
                    as best visited February-March during the Rose Festival —
                    this guide goes deeper into what to expect, when to time
                    your visit down to the week, and how to fit it around the
                    rest of a Chandigarh itinerary.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌹</span> Rose Garden at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Sector 16, Chandigarh",
                        },
                        {
                          icon: "📐",
                          label: "Area",
                          value: "~30 acres",
                        },
                        {
                          icon: "🌹",
                          label: "Rose Varieties",
                          value: "~1,600–1,800+ (approx.)",
                        },
                        {
                          icon: "🏛️",
                          label: "Established",
                          value: "1967",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free / nominal",
                        },
                        {
                          icon: "⏰",
                          label: "Timings",
                          value: "~Sunrise to sunset",
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
                  <h2>Best Time to Visit the Rose Garden</h2>
                  <p>
                    Timing matters here more than at almost any other
                    Chandigarh sight — this is a garden built around a single
                    dramatic seasonal peak, and visiting outside that window
                    gives you a genuinely different experience.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "February – March",
                        emoji: "🌹",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Peak bloom — the definitive window",
                        text: "The garden is at full flower, with nearly all of its rose varieties blooming at once and the annual Rose Festival typically taking place somewhere in this stretch. This is the only time the garden truly lives up to its reputation.",
                      },
                      {
                        season: "Weekday Mornings (Feb–Mar)",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best for photography & calm",
                        text: "Bloom season also brings the biggest crowds, especially on weekends and festival days — arriving on a weekday morning gets you the same flowers with noticeably more breathing room.",
                      },
                      {
                        season: "Oct – Jan",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Pleasant but pre-bloom",
                        text: "Cool, comfortable weather for a walk, with the garden's lawns and paths in good shape, but the mass rose flowering hasn't started yet — buds and early bloomers only.",
                      },
                      {
                        season: "Apr – Sep",
                        emoji: "🌿",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Green space only — bloom is over",
                        text: "Once summer sets in, the roses are largely spent for the year. The garden still functions as a shaded, well-kept lawn space for a walk or a picnic, just without the flowering spectacle.",
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
                    <strong>Our pick:</strong> a weekday morning in the first
                    half of February through mid-March. You'll catch the
                    roses close to their fullest bloom, avoid the densest
                    festival-weekend crowds, and still have a decent shot at
                    catching the Rose Festival itself if it overlaps with
                    your dates.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Rose Garden</h2>
                  <p>
                    The Rose Garden's Sector 16 location is one of its biggest
                    practical advantages — it sits close to the city centre,
                    not out on the edge of town like some of Chandigarh's
                    other gardens.
                  </p>
                  <ul>
                    <li>
                      <strong>From Sector 17:</strong> The garden is
                      genuinely close to Sector 17, Chandigarh's central
                      plaza and shopping district — a short auto or cab ride,
                      and walkable for anyone comfortable with a 15-20 minute
                      stroll.
                    </li>
                    <li>
                      <strong>By Auto/Cab:</strong> The simplest way in from
                      anywhere else in the city — Sector 16 is well known to
                      local drivers and app-based cabs alike.
                    </li>
                    <li>
                      <strong>By Local Bus:</strong> Chandigarh's local bus
                      network covers Sector 16, though autos and cabs remain
                      more convenient for most visitors carrying camera gear
                      or travelling in a group.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Because it's so close to{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17
                    </Link>
                    , the Rose Garden combines naturally with a shopping or
                    café stop — do one in the morning and the other by
                    afternoon without much extra travel.
                  </div>
                </section>

                {/* ── The Garden ────────────────────────────────────────── */}
                <section id="the-garden">
                  <h2>Inside the Garden: Roses, Varieties & Layout</h2>
                  <p>
                    The Rose Garden's layout is straightforward but generous
                    — broad lawns crisscrossed by paved and gravel paths,
                    with rose beds arranged in blocks by colour, variety, and
                    growth habit rather than scattered at random. Hybrid tea
                    roses, floribundas, climbers trained over arches and
                    pergolas, and miniature varieties are all represented, and
                    many beds carry small labels naming the cultivar, which
                    makes it easy to wander with a bit of curiosity rather
                    than needing a guide.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/chandigarh/hero.jpg"
                      alt="Manicured lawns and pathways characteristic of the Zakir Hussain Rose Garden's roughly 30-acre layout in Sector 16, Chandigarh"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p>
                    Scale is really the garden's defining feature. With a
                    collection commonly cited in the range of 1,600 to
                    1,800-plus varieties, no single visit lets you take in
                    everything in equal detail — most visitors gravitate
                    toward whichever section is blooming most heavily that
                    week, since even within the February-March window,
                    different varieties peak at slightly different times.
                  </p>
                  <p>
                    Mature shade trees line several of the main walking
                    paths, which makes the garden usable even outside peak
                    bloom — the tree cover and open lawns alone are enough to
                    draw morning walkers and picnicking families through most
                    of the year, not just during the rose season.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Don't just walk the main
                    central path — the side beds tucked away from the busiest
                    walkways often hold less common varieties and are far
                    less crowded for a slow look or a photo.
                  </div>
                </section>

                {/* ── Rose Festival ─────────────────────────────────────── */}
                <section id="rose-festival">
                  <h2>The Chandigarh Rose Festival</h2>
                  <p>
                    Every year, typically in February or March, the garden
                    hosts the <strong>Chandigarh Rose Festival</strong> — a
                    multi-day civic event timed deliberately to coincide with
                    peak bloom. It's one of the city's biggest annual
                    gatherings, and it turns the Rose Garden from a quiet
                    morning-walk spot into a genuinely festive, crowded
                    occasion.
                  </p>
                  <ul>
                    <li>
                      <strong>Flower shows and rose competitions:</strong>{" "}
                      Judged displays and competitive categories showcase the
                      best individual blooms and arrangements from the
                      garden's collection and outside entrants alike.
                    </li>
                    <li>
                      <strong>Cultural events:</strong> Music and dance
                      performances run across the festival's evenings,
                      drawing a mixed crowd of families, students, and
                      tourists.
                    </li>
                    <li>
                      <strong>Food stalls:</strong> Temporary stalls set up
                      around the grounds for the festival's duration, adding
                      a fairground feel that's absent the rest of the year.
                    </li>
                    <li>
                      <strong>Large crowds:</strong> This is by far the
                      busiest the Rose Garden ever gets — expect significant
                      footfall, especially on festival weekends, and plan
                      accordingly if a quieter visit is the priority.
                    </li>
                  </ul>
                  <p>
                    If your travel dates are flexible, checking the current
                    year's exact festival dates before booking is worth the
                    effort — the festival window shifts slightly year to
                    year depending on how the bloom is tracking.
                  </p>
                </section>

                {/* ── Medicinal Plants ──────────────────────────────────── */}
                <section id="medicinal-plants-section">
                  <h2>Medicinal & Aromatic Plants</h2>
                  <p>
                    Roses aren't the only thing growing here. Alongside the
                    main rose beds, the garden maintains a collection of{" "}
                    <strong>medicinal and aromatic plants</strong> — a
                    quieter, less-visited section that rewards a short
                    detour if you're interested in horticulture beyond the
                    headline attraction. It's a smaller, more contemplative
                    corner of the grounds, and a useful change of pace if
                    you've been walking the busier rose sections during peak
                    season.
                  </p>
                </section>

                {/* ── Photography ────────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Shoot in the first hour after opening:</strong>{" "}
                      Soft morning light flatters the rose beds far more than
                      harsh midday sun, and the garden is at its quietest
                      then too.
                    </li>
                    <li>
                      <strong>Get close for macro shots:</strong> Individual
                      blooms photograph beautifully up close — a modest
                      macro or close-focus lens goes a long way for detail
                      shots of petals and dew.
                    </li>
                    <li>
                      <strong>Use the arches and pergolas:</strong>{" "}
                      Climbing roses trained over structures make natural
                      framing devices for portraits and wider garden shots.
                    </li>
                    <li>
                      <strong>Visit on a weekday during peak bloom:</strong>{" "}
                      Weekend and festival crowds make clean, people-free
                      compositions much harder to get — weekday mornings in
                      February-March are the sweet spot.
                    </li>
                    <li>
                      <strong>Come back for the festival atmosphere:</strong>{" "}
                      If crowd shots and event photography interest you more
                      than clean botanical detail, the Rose Festival itself
                      is worth photographing for its own sake.
                    </li>
                  </ul>
                </section>

                {/* ── Nearby ────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Sights</h2>
                  <p>
                    The Rose Garden sits along Chandigarh's{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    greenbelt, the long chain of linked parks and gardens
                    that runs through several sectors of the city — which
                    means it's easy to combine with other green spaces on
                    the same visit rather than treating it as an isolated
                    stop.
                  </p>
                  <ul>
                    <li>
                      <strong>Sector 17:</strong> The city's central shopping
                      and café district is a short ride or walk away — see
                      our{" "}
                      <Link href="/blog/sector-17-chandigarh-travel-guide">
                        Sector 17 guide
                      </Link>{" "}
                      for what to do there.
                    </li>
                    <li>
                      <strong>Leisure Valley:</strong> The connected greenbelt
                      running through the city — the{" "}
                      <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                        Leisure Valley guide
                      </Link>{" "}
                      covers how the various sector gardens link up on foot.
                    </li>
                    <li>
                      <strong>Garden of Fragrance:</strong> Another scent-
                      and plant-focused garden nearby along the same
                      greenbelt — see our{" "}
                      <Link href="/blog/garden-of-fragrance-chandigarh-travel-guide">
                        Garden of Fragrance guide
                      </Link>{" "}
                      if you want to turn this into a multi-garden morning.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (45 min – 1.5 Hours)</h2>
                  <p>
                    How long you'll want here depends heavily on the season —
                    a quick lawn walk outside bloom season, or a slow,
                    unhurried loop when the roses are out in force.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-15 min",
                        title: "Enter & Get Oriented",
                        color: "bg-amber-700",
                        activities: [
                          "Enter via one of the Sector 16 gates",
                          "Walk the main central path to get a sense of scale",
                          "Note which sections are blooming most heavily that week",
                        ],
                      },
                      {
                        day: "15-45 min",
                        title: "The Rose Beds in Detail",
                        color: "bg-forest-600",
                        activities: [
                          "Wander the labelled variety beds at a slow pace",
                          "Photograph individual blooms and climbing arches",
                          "Detour to quieter side beds away from the main path",
                        ],
                      },
                      {
                        day: "45-70 min",
                        title: "Medicinal Plants & Lawns",
                        color: "bg-sky-600",
                        activities: [
                          "A short stop at the medicinal and aromatic plants section",
                          "Unhurried walk through the open lawns",
                          "Rest under the shade trees if the weather calls for it",
                        ],
                      },
                      {
                        day: "70-90 min",
                        title: "Extend the Morning",
                        color: "bg-stone-600",
                        activities: [
                          "Exit toward Sector 17 for food or shopping",
                          "Or continue along the Leisure Valley to nearby gardens",
                          "Longer during the Rose Festival if events are on",
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
                    * Add extra time during the Rose Festival for flower show
                    displays, competitions, and cultural performances — a
                    festival visit easily runs two to three hours.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    The Rose Garden is one of the cheapest stops on a
                    Chandigarh itinerary — your only real expenses are
                    getting there and, if you like, food afterward nearby.
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
                            "₹50 (bus/shared auto)",
                            "₹150 (auto)",
                            "₹400 (private cab)",
                          ],
                          [
                            "Food nearby (Sector 17)",
                            "₹250",
                            "₹700",
                            "₹2,000+",
                          ],
                          [
                            "Photography extras (optional)",
                            "—",
                            "₹300",
                            "₹1,500+",
                          ],
                          ["Total (approx.)", "₹300", "₹1,150", "₹3,900+"],
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
                    * Figures are per person, per visit. The Rose Garden pairs
                    naturally with a wider{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh itinerary
                    </Link>{" "}
                    — see the main guide for how to fit it alongside the
                    Rock Garden and Sukhna Lake.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting the Rose Garden</h2>
                  <ul>
                    <li>
                      <strong>Check the current year's bloom timing:</strong>{" "}
                      February-March is the reliable window, but exact peak
                      bloom and Rose Festival dates shift slightly year to
                      year — worth a quick check before finalising travel
                      dates.
                    </li>
                    <li>
                      <strong>Go early on weekends and during the
                      festival:</strong> Crowds build quickly through the
                      morning during peak bloom and especially during
                      festival days — an early start avoids the worst of it.
                    </li>
                    <li>
                      <strong>Don't pick the flowers:</strong> As with any
                      public garden of this scale, plucking blooms is
                      discouraged and generally not permitted — admire and
                      photograph rather than take a souvenir.
                    </li>
                    <li>
                      <strong>Carry water and sun protection:</strong> Large
                      stretches of the garden are open lawn with limited
                      shade at midday, especially outside the cooler winter
                      months.
                    </li>
                    <li>
                      <strong>Combine with Sector 17:</strong> Given how
                      close they are, pairing a Rose Garden morning with a{" "}
                      <Link href="/blog/sector-17-chandigarh-travel-guide">
                        Sector 17
                      </Link>{" "}
                      afternoon makes for an efficient, low-hassle day.
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
                          "Visit in February-March for peak bloom",
                          "Arrive early on weekends or festival days",
                          "Check the current year's Rose Festival dates",
                          "Explore the quieter medicinal plants section",
                          "Combine the visit with nearby Sector 17",
                          "Carry water during warmer months",
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
                          "Expect full bloom outside February-March",
                          "Pluck flowers from the beds",
                          "Visit at midday in summer expecting much shade",
                          "Assume festival dates are fixed year to year",
                          "Skip it just because it's 'only' a garden",
                          "Rush through without checking the side beds",
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
                    <strong>🗺️ Extend the trip:</strong> The Rose Garden sits
                    naturally within a wider{" "}
                    <Link href="/blog/chandigarh-travel-guide">
                      Chandigarh
                    </Link>{" "}
                    day — pair it with{" "}
                    <Link href="/blog/sector-17-chandigarh-travel-guide">
                      Sector 17
                    </Link>{" "}
                    for shopping and food, or continue along the{" "}
                    <Link href="/blog/leisure-valley-chandigarh-travel-guide">
                      Leisure Valley
                    </Link>{" "}
                    to string together several of the city's gardens in one
                    unhurried morning.
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
                  "Rose Garden",
                  "Zakir Hussain Rose Garden",
                  "Sector 16",
                  "Chandigarh",
                  "Rose Festival",
                  "City Gardens",
                  "Leisure Valley",
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

              <RelatedPostsGrid currentSlug="rose-garden-chandigarh-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="rose-garden-chandigarh-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
