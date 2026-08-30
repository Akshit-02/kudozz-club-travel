// src/app/blog/khanvel-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Khanvel Travel Guide: Gardens & Nature Escape",
  description:
    "Khanvel travel guide: a small forested town near Silvassa with a family-friendly garden, and the gateway to Satmaliya Deer Sanctuary and Madhuban Dam.",
  keywords:
    "Khanvel travel guide, Khanvel Silvassa, Khanvel Garden, Khanvel Dadra Nagar Haveli, Satmaliya Deer Sanctuary, Madhuban Dam, Khanvel resorts, Silvassa day trip, Khanvel toy train, family trip Silvassa",
  openGraph: {
    title: "Khanvel Travel Guide: Gardens & Nature Escape",
    description:
      "A quiet forested town near Silvassa with a family garden, deer sanctuary, and dam close by — the complete Khanvel travel guide.",
    url: "https://club.kudozz.in/blog/khanvel-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Generic lush green landscape used as representative imagery for the forested Khanvel area — not an actual photo of Khanvel",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Khanvel Travel Guide: Gardens & Nature Escape",
    description:
      "A quiet forested town near Silvassa with a family garden, deer sanctuary, and dam close by — the complete Khanvel travel guide.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/khanvel-travel-guide",
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
          headline: "Khanvel Travel Guide: Gardens & Nature Escape",
          description:
            "Khanvel travel guide: a small forested town near Silvassa with a family-friendly garden, and the gateway to Satmaliya Deer Sanctuary and Madhuban Dam.",
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
            "@id": "https://club.kudozz.in/blog/khanvel-travel-guide",
          },
          keywords:
            "Khanvel travel guide, Khanvel Garden, Satmaliya Deer Sanctuary, Madhuban Dam, Silvassa day trip",
          about: {
            "@type": "Place",
            name: "Khanvel",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Khanvel",
              addressRegion: "Dadra and Nagar Haveli",
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
                name: "Khanvel",
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
    q: "Is Khanvel good for a family trip?",
    a: "Yes — Khanvel is one of the more low-key, family-friendly stops in Dadra & Nagar Haveli. The landscaped garden at its centre, the short drive to Satmaliya Deer Sanctuary, and a handful of resorts geared toward weekend family visits make it an easy, unhurried outing rather than a heavy sightseeing day.",
  },
  {
    q: "How far is Khanvel from Silvassa?",
    a: "Khanvel sits a short drive from Silvassa, roughly in the 10–15 km range depending on the exact route and starting point in town. It's close enough to visit as a half-day trip from Silvassa or to combine with Satmaliya Deer Sanctuary and Madhuban Dam, both of which are near Khanvel as well.",
  },
  {
    q: "What is there to do in Khanvel?",
    a: "The main draws are Khanvel Garden, a landscaped family garden with lawns and walking paths (some visitors mention a toy train ride, though we'd recommend confirming this is currently operating before planning around it), plus proximity to Satmaliya Deer Sanctuary and Madhuban Dam. A few resorts in the area also offer day-visit access to their grounds and pools for a relaxed few hours.",
  },
  {
    q: "Is Khanvel a day trip or overnight destination?",
    a: "Most visitors treat Khanvel as a half-day or full-day trip from Silvassa rather than a standalone overnight stay, since the town itself is small. That said, a couple of resorts near Khanvel are set up for an overnight family stay if you'd rather slow down and spend a full weekend in the area.",
  },
  {
    q: "Can I visit Satmaliya Deer Sanctuary and Madhuban Dam from Khanvel in one day?",
    a: "Yes, comfortably. Both are near Khanvel and close enough to each other that a single day covering Khanvel Garden, Satmaliya Deer Sanctuary, and Madhuban Dam is a realistic, unrushed plan — particularly if you start reasonably early in the morning.",
  },
  {
    q: "What is the best time of year to visit Khanvel?",
    a: "October to March offers the most comfortable weather for walking around the garden and spending time outdoors near the dam. The monsoon months (June–September) make the whole area especially green, which some travellers actively prefer, though outdoor plans need more flexibility around rain.",
  },
  {
    q: "Do I need to book resorts in Khanvel in advance?",
    a: "It's worth booking ahead for weekends, since Khanvel's resorts are a popular short getaway for families from Silvassa, Vapi, and nearby parts of Gujarat and Maharashtra. Weekdays are generally easier to book with little notice.",
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
  { id: "introduction", title: "Why Visit Khanvel?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Khanvel", level: 2 },
  { id: "khanvel-garden", title: "Khanvel Garden", level: 2 },
  { id: "satmaliya", title: "Satmaliya Deer Sanctuary", level: 2 },
  { id: "madhuban-dam", title: "Madhuban Dam", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "nature", title: "Local Nature & Greenery", level: 2 },
  { id: "itinerary", title: "Suggested Day Trip Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KhanvelGuidePage() {
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
              alt="Generic lush green landscape used as representative imagery for the forested Khanvel area — not an actual photo of Khanvel"
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
                { label: "Khanvel", href: null },
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
                "Khanvel",
                "Dadra & Nagar Haveli",
                "Silvassa",
                "Nature",
                "Family Trip",
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
              Khanvel Travel Guide: Gardens & Nature Escape
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A small, forested town a short drive from Silvassa — quiet
              gardens, a deer sanctuary, and a dam nearby make Khanvel an
              easy, unhurried family outing rather than a destination that
              demands a full itinerary.
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
                  text: "Khanvel, Dadra & Nagar Haveli",
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
                  <h2>Why Visit Khanvel?</h2>
                  <p>
                    <strong>Khanvel</strong> is a small, forested town in{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli
                    </Link>
                    , a short drive from{" "}
                    <Link href="/blog/silvassa-travel-guide">Silvassa</Link>.
                    It doesn't try to be a headline destination — there's no
                    single unmissable monument or landmark here — but that's
                    largely the point. Khanvel is a quiet, green, genuinely
                    family-friendly stop, built around a landscaped garden at
                    its centre and its position as the natural base for
                    visiting two of the region's better nature spots close
                    by.
                  </p>
                  <p>
                    The town sits in the more forested, inland half of the
                    Union Territory, a noticeably different character from
                    the coastal towns of Daman and Diu further away. Rolling
                    greenery, a slower pace, and a handful of resorts built
                    for weekend family visits define the area more than any
                    single attraction does.
                  </p>
                  <p>
                    What makes Khanvel worth the detour is really its
                    location: it sits close to both the{" "}
                    <Link href="/blog/satmaliya-deer-sanctuary-travel-guide">
                      Satmaliya Deer Sanctuary
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/madhuban-dam-travel-guide">
                      Madhuban Dam
                    </Link>
                    , which means a single half-day or day trip out of
                    Silvassa can combine a garden walk, some time with deer
                    and other wildlife, and a peaceful spot by the water —
                    without much driving in between.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Khanvel at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Dadra and Nagar Haveli",
                        },
                        {
                          icon: "🚗",
                          label: "From Silvassa",
                          value: "Short drive, ~10–15 km",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "🌳",
                          label: "Known For",
                          value: "Gardens, deer sanctuary, dam nearby",
                        },
                        {
                          icon: "👨‍👩‍👧",
                          label: "Good For",
                          value: "Family day trips, quiet nature time",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹4,000",
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
                    Like the rest of inland Dadra & Nagar Haveli, Khanvel is
                    warm and humid for much of the year, which makes the
                    cooler months the more comfortable window for spending
                    time outdoors in the garden or around the dam.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Mild, dry weather makes garden walks, time at Satmaliya, and an afternoon by Madhuban Dam genuinely pleasant rather than a test of endurance.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around midday",
                        text: "Temperatures climb noticeably; early morning or late afternoon visits work better than a midday garden walk.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but wet",
                        text: "The whole area turns a deep green and the dam fills up, which many visitors find worth seeing — but rain can disrupt outdoor plans, so build in flexibility.",
                      },
                      {
                        season: "Weekends year-round",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Busier with local visitors",
                        text: "Khanvel's resorts and the garden see the most footfall from nearby Silvassa, Vapi and Gujarat/Maharashtra families on weekends — weekdays are notably quieter.",
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
                    <strong>Our pick:</strong> November to February, on a
                    weekday if you'd rather have the garden and the dam to
                    yourself.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Khanvel</h2>
                  <p>
                    Khanvel is easiest to reach as a short drive out of{" "}
                    <Link href="/blog/silvassa-travel-guide">Silvassa</Link>,
                    which itself is well connected to Mumbai and southern
                    Gujarat.
                  </p>
                  <ul>
                    <li>
                      <strong>From Silvassa:</strong> Khanvel is a short
                      drive from central Silvassa, roughly in the 10–15 km
                      range depending on your starting point — easily done
                      by taxi, auto, or self-drive in well under an hour.
                    </li>
                    <li>
                      <strong>From Mumbai:</strong> Drive to Silvassa first
                      (roughly 3 hours via NH48), then continue on to
                      Khanvel — a comfortable day-trip distance for those
                      based in or around Mumbai.
                    </li>
                    <li>
                      <strong>By rail:</strong> The nearest major railway
                      station is Vapi on the Mumbai–Ahmedabad line, from
                      where Khanvel is reached via Silvassa by road.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> There's no real public
                    transport network built for tourists between Silvassa and
                    Khanvel — a taxi, rented two-wheeler, or self-drive car is
                    the practical way to get around and combine Khanvel with
                    Satmaliya and Madhuban Dam in one trip.
                  </div>
                </section>

                {/* ── Khanvel Garden ────────────────────────────────────── */}
                <section id="khanvel-garden">
                  <h2>Khanvel Garden</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Generic green, landscaped outdoor setting used as representative imagery — not an actual photo of Khanvel Garden"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The centrepiece of the town is a landscaped, family
                    garden with lawns, walking paths and shaded seating —
                    the kind of easy, low-key space that works well for an
                    hour or two with kids, or simply a slow walk after a
                    drive out from Silvassa. Some visitors mention a small
                    toy train ride within the garden grounds, though facility
                    details can change over time, so it's worth confirming
                    what's currently operating before you plan a visit around
                    it specifically.
                  </p>
                  <p>
                    Don't expect a sprawling botanical garden or an elaborate
                    attraction — Khanvel Garden is a modest, pleasant space
                    that's genuinely more about unwinding than sightseeing.
                    It pairs naturally with the more nature-focused stops
                    nearby.
                  </p>
                </section>

                {/* ── Satmaliya ─────────────────────────────────────────── */}
                <section id="satmaliya">
                  <h2>Satmaliya Deer Sanctuary</h2>
                  <p>
                    A short distance from Khanvel is the{" "}
                    <Link href="/blog/satmaliya-deer-sanctuary-travel-guide">
                      Satmaliya Deer Sanctuary
                    </Link>
                    , a wildlife sanctuary known for its deer population and
                    forested walking trails — a popular add-on for families
                    already in the Khanvel area, and one of the more
                    accessible nature experiences in Dadra & Nagar Haveli.
                  </p>
                  <p>
                    It works well as a half-day extension to a Khanvel visit
                    — see our{" "}
                    <Link href="/blog/satmaliya-deer-sanctuary-travel-guide">
                      full Satmaliya Deer Sanctuary guide
                    </Link>{" "}
                    for timings, what to expect, and tips for visiting with
                    children.
                  </p>
                </section>

                {/* ── Madhuban Dam ──────────────────────────────────────── */}
                <section id="madhuban-dam">
                  <h2>Madhuban Dam</h2>
                  <p>
                    Also near Khanvel is{" "}
                    <Link href="/blog/madhuban-dam-travel-guide">
                      Madhuban Dam
                    </Link>
                    , a reservoir on the Damanganga river popular for its
                    quiet waterside views, a small garden area, and boating
                    in season — a relaxed spot to spend an hour or two,
                    especially toward late afternoon.
                  </p>
                  <p>
                    Combined with Khanvel Garden and Satmaliya, Madhuban Dam
                    rounds out a genuinely satisfying single-day loop through
                    the greener, more nature-focused side of the territory —
                    read our{" "}
                    <Link href="/blog/madhuban-dam-travel-guide">
                      Madhuban Dam guide
                    </Link>{" "}
                    for more detail.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Khanvel itself is small, and most visitors either day-trip
                    in from Silvassa or stay at one of a handful of resorts
                    in the area that are popular specifically for weekend
                    family getaways.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,000/night",
                        picks: [
                          "Simple lodges near Khanvel town",
                          "Budget stays in Silvassa (short drive away)",
                          "Guesthouses along the Silvassa–Khanvel road",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "Family resorts near Khanvel",
                          "Weekend resort properties with pool access",
                          "Mid-range hotels in Silvassa",
                        ],
                      },
                      {
                        tier: "Resort Stay",
                        icon: "🌴",
                        range: "₹5,500–₹9,000+/night",
                        picks: [
                          "Larger resort properties near Khanvel/Silvassa",
                          "Weekend packages with garden or pool access",
                          "Premium stays closer to Silvassa town",
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

                  <blockquote>
                    Most travellers either base themselves in{" "}
                    <Link href="/blog/silvassa-travel-guide">Silvassa</Link>{" "}
                    and day-trip into Khanvel, or book one of the area's
                    family resorts for a proper slow weekend — both work well
                    depending on how much time you have.
                  </blockquote>
                </section>

                {/* ── Nature ────────────────────────────────────────────── */}
                <section id="nature">
                  <h2>Local Nature & Greenery</h2>
                  <p>
                    What sets Khanvel apart from the coastal side of the
                    Union Territory is simply how green it is. The area sits
                    within a belt of forest and cultivated land that feels a
                    world away from Daman and Diu's beach towns, with the
                    Damanganga river system feeding both Madhuban Dam and the
                    surrounding countryside.
                  </p>
                  <p>
                    It's not a destination for serious wildlife spotting or
                    dramatic landscapes, but the combination of the garden,
                    Satmaliya's forest trails, and the open water at Madhuban
                    Dam adds up to a genuinely refreshing change of pace if
                    you've spent time on the coast beforehand.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Day Trip Plan</h2>
                  <p>
                    Khanvel, Satmaliya, and Madhuban Dam sit close enough
                    together that a single, unhurried day trip out of
                    Silvassa covers all three comfortably.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Drive to Khanvel & the Garden",
                        color: "bg-amber-700",
                        activities: [
                          "Leave Silvassa reasonably early to beat the day's heat",
                          "Walk around Khanvel Garden for an hour or so",
                          "Light breakfast or snacks before moving on",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Satmaliya Deer Sanctuary",
                        color: "bg-forest-600",
                        activities: [
                          "Short drive over to Satmaliya",
                          "Walk the sanctuary's trails and spot the resident deer",
                          "Take a break in the shade before continuing",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Madhuban Dam",
                        color: "bg-sky-600",
                        activities: [
                          "Head to Madhuban Dam for quiet time by the water",
                          "Optional boating, if available and running that day",
                          "Relax before the drive back",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Return to Silvassa",
                        color: "bg-stone-600",
                        activities: [
                          "Drive back to Silvassa for dinner",
                          "Or extend into an overnight stay at a Khanvel-area resort",
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
                    * If travelling with young children or elderly family
                    members, it's easy to stretch this into a more relaxed
                    two-half-day plan, or drop one stop and take things
                    slower.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <p>
                    Khanvel itself is small, so most dedicated dining happens
                    either at resort restaurants in the area or back in
                    Silvassa, which has a wider spread of options.
                  </p>
                  <ul>
                    <li>
                      <strong>Resort dining:</strong> Family resorts near
                      Khanvel typically have their own multi-cuisine
                      restaurants, convenient if you're staying overnight or
                      visiting for a day-use package.
                    </li>
                    <li>
                      <strong>Gujarati thalis:</strong> Widely available in
                      and around Silvassa, reflecting the region's strong
                      overlap with neighbouring Gujarat's cuisine.
                    </li>
                    <li>
                      <strong>Local snack stalls:</strong> Simple tea and
                      snack stops can be found near the garden and along the
                      Silvassa–Khanvel road for a quick bite between stops.
                    </li>
                    <li>
                      <strong>Carry your own water and snacks:</strong> Given
                      how spread out Khanvel, Satmaliya and Madhuban Dam are,
                      it's worth carrying water and light snacks rather than
                      relying on finding a shop between stops.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown (per day)</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Resort Stay"].map(
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
                            "₹3,200",
                            "₹6,500",
                          ],
                          ["Food/day", "₹300", "₹700", "₹1,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹600",
                            "₹1,200",
                          ],
                          [
                            "Entry fees & activities",
                            "₹100",
                            "₹300",
                            "₹600",
                          ],
                          [
                            "Daily total (approx.)",
                            "₹1,900",
                            "₹4,800",
                            "₹9,800",
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
                    * Figures are indicative and assume a Silvassa-based
                    day trip or a short resort stay near Khanvel; excludes
                    travel to Silvassa itself. Confirm current entry fees and
                    activity costs locally, as these can change.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li>
                      <strong>Base yourself in Silvassa:</strong> It's the
                      most practical hub for exploring Khanvel, Satmaliya,
                      and Madhuban Dam together, with better food and stay
                      options than Khanvel itself.
                    </li>
                    <li>
                      <strong>Arrange your own transport:</strong> There's no
                      dedicated tourist transit between these spots — a taxi
                      or self-drive vehicle makes the day far smoother.
                    </li>
                    <li>
                      <strong>Book resorts ahead for weekends:</strong>{" "}
                      Khanvel's family resorts fill up with weekend visitors
                      from nearby Gujarat and Maharashtra.
                    </li>
                    <li>
                      <strong>Carry water and snacks:</strong> Facilities
                      thin out between Khanvel, Satmaliya, and the dam —
                      don't rely on finding a shop at every stop.
                    </li>
                    <li>
                      <strong>Confirm current facilities before visiting:</strong>{" "}
                      Small attractions like a toy train ride at the garden
                      can change or pause operations — a quick local check
                      saves disappointment.
                    </li>
                    <li>
                      <strong>Start early in summer:</strong> Outdoor time at
                      the garden, sanctuary, and dam is far more comfortable
                      in the morning than at midday during the hotter months.
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
                          "Combine Khanvel with Satmaliya and Madhuban Dam in one day",
                          "Base yourself in Silvassa for easier logistics",
                          "Book resorts ahead for weekend visits",
                          "Start early to make the most of cooler hours",
                          "Carry water, snacks, and cash for small vendors",
                          "Confirm current attraction details before you go",
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
                          "Expect a large-scale attraction or theme park",
                          "Plan a midday garden visit in peak summer",
                          "Rely on finding public transport between stops",
                          "Skip booking ahead on weekends and holidays",
                          "Assume every small facility is always operating",
                          "Treat Khanvel as a multi-day standalone destination",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Khanvel with
                    a broader loop through{" "}
                    <Link href="/blog/silvassa-travel-guide">Silvassa</Link>{" "}
                    and other stops covered in our{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu travel guide
                    </Link>{" "}
                    for a fuller regional itinerary.
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
                  "Khanvel",
                  "Dadra and Nagar Haveli",
                  "Silvassa",
                  "Satmaliya Deer Sanctuary",
                  "Madhuban Dam",
                  "Family Trip",
                  "Gardens",
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

              <RelatedPostsGrid currentSlug="khanvel-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="khanvel-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
