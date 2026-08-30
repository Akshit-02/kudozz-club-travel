// src/app/blog/diu-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Diu Travel Guide: Beaches, Fort & Weekend Trip",
  description:
    "Complete Diu travel guide — Diu Fort, Nagoa & Ghoghla beaches, Portuguese old town, duty-free shopping, where to stay, budget tips and a 2-day itinerary.",
  keywords:
    "Diu travel guide, Diu Fort, Nagoa Beach, Ghoghla Beach, Naida Caves, Gangeshwar Temple, Diu Gujarat, Diu island, Daman and Diu tourism, Diu duty free liquor, Diu Portuguese heritage, things to do in Diu, Diu weekend trip, how to reach Diu, INS Khukri Memorial",
  openGraph: {
    title: "Diu Travel Guide: Beaches, Fort & Weekend Trip",
    description:
      "A former Portuguese colony off Gujarat's coast — Diu Fort, quiet beaches, old-town churches, duty-free liquor, and a full 2-day itinerary.",
    url: "https://club.kudozz.in/blog/diu-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Portuguese-era fort walls overlooking the sea, evoking the coastal forts of Diu",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Diu Travel Guide: Beaches, Fort & Weekend Trip",
    description:
      "A former Portuguese colony off Gujarat's coast — Diu Fort, quiet beaches, old-town churches, duty-free liquor, and a full 2-day itinerary.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/diu-travel-guide",
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
          headline: "Diu Travel Guide: Beaches, Fort & Weekend Trip",
          description:
            "Complete Diu travel guide — Diu Fort, Nagoa & Ghoghla beaches, Portuguese old town, duty-free shopping, where to stay, budget tips and a 2-day itinerary.",
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
            "@id": "https://club.kudozz.in/blog/diu-travel-guide",
          },
          keywords:
            "Diu travel guide, Diu Fort, Nagoa Beach, Ghoghla Beach, Naida Caves, Gangeshwar Temple, Diu Gujarat, Diu duty free liquor",
          about: {
            "@type": "Place",
            name: "Diu",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Diu",
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
                name: "Diu",
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
    q: "How many days are enough for Diu?",
    a: "Two full days cover Diu comfortably — one for Diu Fort and the old town, another for the beaches (Nagoa, Ghoghla, Chakratirth) plus quick stops at Naida Caves, Gangeshwar Temple, and the INS Khukri Memorial. Three days lets you slow down considerably, and it's easy to fill that extra time simply doing very little, which is part of Diu's appeal.",
  },
  {
    q: "Is alcohol legal in Diu?",
    a: "Yes. Diu is not bound by Gujarat's prohibition laws, so alcohol is sold and served legally and openly across the island — a major reason weekend travellers from dry-state Gujarat cross over. Liquor is also noticeably cheaper here than in most other parts of India due to lower local taxes, so shops and bars near the town centre and beaches do brisk business, especially on weekends.",
  },
  {
    q: "How do I reach Diu from Ahmedabad?",
    a: "By road, it's roughly 360 km (around 7 hours) via Rajkot and Una — a popular self-drive or bus route. By rail, take a train to Una or Veraval and then a short taxi/auto ride into Diu (13 km from Una, about 90 km from Veraval). Diu Airport (DIU) has occasional limited flights on some routes; check current schedules before relying on it, since connectivity has historically been inconsistent.",
  },
  {
    q: "Is Diu safe for solo travellers?",
    a: "Yes, Diu is generally considered one of the safer and more relaxed small towns in India for solo travellers, including women travelling alone — it's compact, well-lit in the main areas, and used to a steady flow of independent tourists. As anywhere, stick to well-populated areas after dark, use registered taxis or autos at night, and take the usual sensible precautions around alcohol and unfamiliar beaches after sunset.",
  },
  {
    q: "What is Diu famous for?",
    a: "Diu is best known for its 16th-century Portuguese sea fort, whitewashed colonial churches, quiet beaches like Nagoa and Ghoghla, duty-free liquor, and the INS Khukri Memorial. Its nearly 450 years under Portuguese rule (ending only in 1961) gave it an old-town character and pace of life closer to Goa than to mainland Gujarat, but without the crowds.",
  },
  {
    q: "Is Diu part of Gujarat?",
    a: "No — Diu is a separate Union Territory, part of Dadra and Nagar Haveli and Daman and Diu, even though it sits just off Gujarat's Saurashtra coast and is often visited as a day or weekend trip from Gujarat. This distinct administrative status is exactly why laws like alcohol prohibition, which apply in Gujarat, don't apply on the island.",
  },
  {
    q: "What is the best beach in Diu?",
    a: "Nagoa Beach is the most popular choice — a crescent-shaped bay with relatively calm, swimmable water and the best infrastructure on the island. Ghoghla Beach, right by the bridge connecting Diu to the mainland, has a longer, quieter stretch of sand and is popular for water sports. Chakratirth is smaller and best for a sunset walk rather than swimming.",
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
  { id: "introduction", title: "Diu: An Island Escape", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Diu", level: 2 },
  { id: "diu-fort", title: "Diu Fort", level: 2 },
  { id: "beaches", title: "Diu's Beaches", level: 2 },
  { id: "old-town", title: "Old Town & Churches", level: 2 },
  { id: "ins-khukri", title: "INS Khukri Memorial", level: 2 },
  { id: "naida-caves", title: "Naida Caves", level: 2 },
  { id: "gangeshwar-temple", title: "Gangeshwar Temple", level: 2 },
  { id: "panikotha", title: "Panikotha Sea Fort", level: 2 },
  { id: "shopping-nightlife", title: "Duty-Free Shopping & Nightlife", level: 2 },
  { id: "itinerary", title: "2-Day Diu Itinerary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DiuTravelGuidePage() {
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
              alt="Portuguese-era fort walls overlooking the sea, evoking the coastal forts of Diu"
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
                { label: "Diu", href: null },
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
                "Diu",
                "Daman and Diu",
                "Portuguese Heritage",
                "Island Getaway",
                "Weekend Trip",
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
              Diu Travel Guide: Beaches, Fort & Weekend Trip
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A 16th-century Portuguese sea fort, near-empty beaches, and
              duty-free liquor on a quiet island off Gujarat's coast — Diu is
              the most overlooked weekend escape in western India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Diu, Union Territory",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,900 words",
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
                  <h2>Diu: A Quiet Island Escape</h2>
                  <p>
                    <strong>Diu</strong> is a small island town off the tip
                    of Gujarat's Saurashtra coast, connected to the mainland
                    by two bridges near Ghoghla. It's one half of the{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu Union Territory
                    </Link>{" "}
                    — a former Portuguese colony that stayed under Lisbon's
                    rule until 1961, nearly 450 years, right through India's
                    independence in 1947. That long, separate colonial
                    history is still written all over the island: a
                    16th-century sea fort, whitewashed churches, pastel
                    old-town houses, and a pace of life that feels closer to
                    Goa than to the Gujarat coastline it sits just off.
                  </p>
                  <p>
                    Diu's other defining quirk is administrative rather than
                    architectural — as a Union Territory, it isn't bound by
                    Gujarat's prohibition laws, so alcohol is legally sold and
                    served across the island, openly and at prices well below
                    what you'd pay almost anywhere else in India. That single
                    fact turns Diu into a magnet for weekend travellers
                    crossing over from dry-state Gujarat, but it's far from
                    the only reason to visit — the beaches are genuinely
                    pleasant, the fort is one of the most striking on India's
                    west coast, and the whole island can be explored at a
                    relaxed, unhurried pace in two or three days.
                  </p>
                  <p>
                    This guide covers Diu town itself — the fort, the old
                    town's churches, the INS Khukri Memorial, and practical
                    logistics — with shorter pointers to our dedicated,
                    deep-dive guides on{" "}
                    <Link href="/blog/diu-fort-travel-guide">Diu Fort</Link>,{" "}
                    <Link href="/blog/nagoa-beach-travel-guide">
                      Nagoa Beach
                    </Link>
                    , <Link href="/blog/ghoghla-beach-travel-guide">
                      Ghoghla Beach
                    </Link>
                    , <Link href="/blog/naida-caves-travel-guide">
                      Naida Caves
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/gangeshwar-temple-travel-guide">
                      Gangeshwar Temple
                    </Link>{" "}
                    for anyone who wants the full detail on each spot.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏝️</span> Diu at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Union Territory",
                          value: "Dadra & Nagar Haveli and Daman & Diu",
                        },
                        {
                          icon: "🗺️",
                          label: "Location",
                          value: "Off Gujarat's Saurashtra coast",
                        },
                        {
                          icon: "✈️",
                          label: "Airport Code",
                          value: "DIU (limited flights)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "🍺",
                          label: "Note",
                          value: "Liquor is legal & duty-free here",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,800 – ₹6,500",
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
                  <h2>Best Time to Visit Diu</h2>
                  <p>
                    Diu's climate is coastal and generally milder than inland
                    Gujarat, but the same broad seasonal logic applies —
                    winter is by far the most comfortable window for walking
                    the fort ramparts and spending long hours at the beach.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather (18–29°C) makes fort walks, beach days and cycling around the island genuinely comfortable — the peak season for a visit.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but manageable",
                        text: "Temperatures push into the mid-30s. Plan fort and old-town sightseeing for early morning or late afternoon, and save the beach for midday.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — quiet but wet",
                        text: "Rough seas make swimming unsafe and beach time unpleasant, but the fort and old town look genuinely atmospheric in the rain, with almost no crowds.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak season",
                        text: "The coolest, busiest stretch of the year — book accommodation well ahead, especially around Christmas and New Year, when Diu fills up fast.",
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
                    <strong>Our pick:</strong> November to February — warm
                    enough for the beach every evening, cool enough for a
                    midday walk around the fort's exposed ramparts.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Diu</h2>
                  <p>
                    Diu sits in a corner of the map that isn't on the way to
                    much else, so getting there usually means a deliberate
                    trip rather than a stopover — the effort is part of why
                    it stays quiet.
                  </p>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Diu Airport (code{" "}
                      <strong>DIU</strong>) sits right at the edge of town,
                      but historically has had limited and inconsistent
                      direct flight connectivity — check current schedules
                      before building a trip around it. The nearest major
                      airport with reliable connections is Rajkot, about
                      190 km away.
                    </li>
                    <li>
                      <strong>By Train:</strong> The closest railheads are{" "}
                      <strong>Una</strong> (about 13 km from Diu, the more
                      convenient option) and <strong>Veraval</strong>{" "}
                      (roughly 90 km), both connected to Ahmedabad and
                      Rajkot. From either station, autos and taxis complete
                      the last stretch into Diu town.
                    </li>
                    <li>
                      <strong>By Road:</strong> Self-drive or bus from
                      Ahmedabad is roughly 360 km (around 7 hours) via Rajkot
                      and Una, and a popular way to see a slice of coastal
                      Saurashtra along the way. From Rajkot alone it's closer
                      to 190 km (about 4 hours).
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Once in Diu, you won't need a
                    car — the island is small enough that a rented moped or
                    bicycle covers the fort, old town, and every beach
                    comfortably in a day.
                  </div>
                </section>

                {/* ── Diu Fort ──────────────────────────────────────────── */}
                <section id="diu-fort">
                  <h2>Diu Fort</h2>
                  <p>
                    No visit to Diu is complete without the fort, and it's
                    genuinely the island's single unmissable sight — a
                    16th-century Portuguese sea fort built on a promontory,
                    with multiple bastions, a working lighthouse, cannons
                    still pointed out over the Arabian Sea, and a moat that
                    once separated it from the old town. Wandering the
                    ramparts at sunset, with the sea on three sides and
                    almost no crowd, is the kind of experience that makes
                    Diu memorable long after the trip ends.
                  </p>
                  <p>
                    We've covered the fort's full history, layout, opening
                    hours, and the best photo spots in a dedicated guide —
                    read the full{" "}
                    <Link href="/blog/diu-fort-travel-guide">
                      Diu Fort travel guide
                    </Link>{" "}
                    before you go, especially if you want to time your visit
                    around sunset.
                  </p>
                </section>

                {/* ── Beaches ───────────────────────────────────────────── */}
                <section id="beaches">
                  <h2>Diu's Beaches</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="A calm, palm-fringed tropical shoreline, evoking the relaxed feel of Diu's Nagoa and Ghoghla beaches"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Diu's beaches are unhurried and largely undeveloped
                    compared to Goa's — no beach shacks stacked shoulder to
                    shoulder, no relentless vendors, just long, mostly quiet
                    stretches of sand.
                  </p>
                  <ul>
                    <li>
                      <strong>Nagoa Beach:</strong> A crescent-shaped bay
                      with calm, relatively clean water — the best swim spot
                      on the island and the closest thing Diu has to a "main"
                      beach, with paddleboat rentals and a handful of
                      eateries nearby. Full details in our{" "}
                      <Link href="/blog/nagoa-beach-travel-guide">
                        Nagoa Beach guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Ghoghla Beach:</strong> A longer, quieter
                      stretch right by the bridge connecting Diu to the
                      mainland, popular for water sports and less crowded
                      than Nagoa on most days. See our{" "}
                      <Link href="/blog/ghoghla-beach-travel-guide">
                        Ghoghla Beach guide
                      </Link>{" "}
                      for the full breakdown.
                    </li>
                    <li>
                      <strong>Chakratirth Beach:</strong> Smaller and rockier
                      than the other two, with a rocky point good for a
                      sunset walk rather than swimming — a favourite quiet
                      spot among locals in the evening.
                    </li>
                  </ul>
                </section>

                {/* ── Old Town & Churches ───────────────────────────────── */}
                <section id="old-town">
                  <h2>Diu's Old Town & Portuguese Churches</h2>
                  <p>
                    Diu's old town is where its Portuguese past is most
                    visible day to day — narrow lanes lined with pastel
                    colonial houses, wrought-iron balconies, and a town
                    square that wouldn't look out of place in Fontainhas,
                    Goa, minus the crowds.
                  </p>
                  <ul>
                    <li>
                      <strong>St. Paul's Church:</strong> A striking, still
                      functioning 17th-century Baroque church with an
                      ornately carved wooden facade — widely considered the
                      finest example of Portuguese-Baroque architecture on
                      the island.
                    </li>
                    <li>
                      <strong>St. Thomas Church & Diu Museum:</strong> A
                      former church that now houses the Diu Museum, with a
                      modest collection of Christian religious sculpture,
                      old inscriptions, and artefacts from the colonial
                      period.
                    </li>
                    <li>
                      <strong>St. Francis of Assisi Church:</strong> Now
                      partly repurposed as a hospital and community space,
                      but its facade and courtyard are still worth a quick
                      look while wandering the old town.
                    </li>
                  </ul>
                  <p>
                    None of these need more than 20–30 minutes each, and
                    they're all within easy walking distance of one another
                    and of the fort — a slow morning through the old town is
                    one of the simplest, most rewarding things to do in Diu.
                  </p>
                </section>

                {/* ── INS Khukri ────────────────────────────────────────── */}
                <section id="ins-khukri">
                  <h2>INS Khukri Memorial</h2>
                  <p>
                    A striking submarine-shaped monument on Zampa Beach, the{" "}
                    <strong>INS Khukri Memorial</strong> honours the Indian
                    Navy warship sunk by a Pakistani submarine during the
                    1971 Indo-Pak war, with significant loss of life. The
                    memorial's distinctive shape and its quiet, waterfront
                    setting make it a moving and unusual stop, and it pairs
                    naturally with a visit to nearby Naida Caves — both sit
                    close to the fort on the island's eastern edge.
                  </p>
                </section>

                {/* ── Naida Caves ───────────────────────────────────────── */}
                <section id="naida-caves">
                  <h2>Naida Caves</h2>
                  <p>
                    A short walk from Diu Fort, the{" "}
                    <strong>Naida Caves</strong> are sun-dappled sandstone
                    caverns believed to have been quarried to build the
                    fort itself — a maze of chambers, natural skylights, and
                    tree roots snaking through the rock that make for one of
                    Diu's most photogenic quick stops. It rarely takes more
                    than 20–30 minutes to explore, making it an easy add-on
                    to a fort visit. Read the full{" "}
                    <Link href="/blog/naida-caves-travel-guide">
                      Naida Caves guide
                    </Link>{" "}
                    for the best light and photo angles.
                  </p>
                </section>

                {/* ── Gangeshwar Temple ─────────────────────────────────── */}
                <section id="gangeshwar-temple">
                  <h2>Gangeshwar Temple</h2>
                  <p>
                    A short drive from Diu town, <strong>Gangeshwar Temple</strong>{" "}
                    is one of the island's more unusual sights — a cluster of
                    five natural Shivlings set directly among the rocks on
                    the shoreline, where incoming waves crash over them at
                    high tide. It's a small, low-key site, but the setting
                    makes it worth the detour, especially timed around high
                    tide for the full effect. Our dedicated{" "}
                    <Link href="/blog/gangeshwar-temple-travel-guide">
                      Gangeshwar Temple guide
                    </Link>{" "}
                    covers the best tide timings and how to get there.
                  </p>
                </section>

                {/* ── Panikotha ─────────────────────────────────────────── */}
                <section id="panikotha">
                  <h2>Panikotha (Fortim-do-Mar) Sea Fort</h2>
                  <p>
                    Visible from Diu Fort's ramparts, <strong>Panikotha</strong>,
                    also known as <strong>Fortim-do-Mar</strong>, is a small
                    Portuguese fortress sitting on an islet a short distance
                    offshore, built to guard the harbour approach alongside
                    the main fort. It's now largely disused and reachable
                    only by boat when weather and tide permit, which makes it
                    more of a striking sight to admire from the mainland fort
                    than a place most travellers actually visit — but it adds
                    real atmosphere to any photo taken from Diu Fort's sea-
                    facing bastions.
                  </p>
                </section>

                {/* ── Shopping & Nightlife ──────────────────────────────── */}
                <section id="shopping-nightlife">
                  <h2>Duty-Free Shopping & Diu's Relaxed Nightlife</h2>
                  <p>
                    As a Union Territory outside Gujarat's prohibition laws,{" "}
                    <strong>Diu sells alcohol legally and openly</strong>,
                    at prices well below the rest of the country thanks to
                    lower local taxes — a fact that shapes a meaningful part
                    of the island's tourist economy. Liquor shops cluster
                    around the main market and the road toward Ghoghla, and
                    most restaurants and beach shacks serve beer, wine, and
                    spirits without fuss.
                  </p>
                  <p>
                    That said, Diu's nightlife is genuinely low-key rather
                    than a party destination — think a quiet beer at a
                    beachfront shack or a rooftop restaurant rather than
                    clubs or late-night crowds. Most places wind down by
                    10–11 PM, and the island's appeal has always been its
                    calm rather than its buzz, so travellers expecting
                    Goa-style nightlife should recalibrate expectations
                    accordingly.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're carrying alcohol
                    back into Gujarat, there are quantity restrictions on
                    what you can legally transport out of Diu — check current
                    limits before stocking up, since enforcement at the
                    border checkpoints is routine.
                  </div>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Diu Itinerary</h2>
                  <p>
                    Diu rewards a slow pace, but two focused days are enough
                    to cover the fort, old town, beaches, and the island's
                    smaller sights without feeling rushed.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Fort, Old Town & INS Khukri",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Arrive, check in, breakfast in the old town",
                          "Late morning: Explore Diu Fort's bastions and lighthouse",
                          "Afternoon: Wander old-town lanes, St. Paul's Church, Diu Museum",
                          "Evening: Naida Caves, then INS Khukri Memorial at sunset",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Beaches & Island Loop",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Swim and relax at Nagoa Beach",
                          "Midday: Water sports or a walk at Ghoghla Beach",
                          "Afternoon: Gangeshwar Temple (time it with high tide)",
                          "Evening: Sunset at Chakratirth, duty-free shopping before dinner",
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
                    * With a third day, add Panikotha viewing from the fort
                    at a slower pace, a longer cycling loop of the island,
                    and a relaxed second evening at Nagoa or Ghoghla.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Diu</h2>
                  <p>
                    Accommodation in Diu is modest in scale — don't expect
                    Goa's resort density — but there's a genuine spread from
                    simple old-town guesthouses to a handful of proper
                    beach-facing resorts near Nagoa.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,500/night",
                        picks: [
                          "Guesthouses near Diu old town",
                          "Budget lodges close to the fort",
                          "Homestays along the Nagoa road",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Hoka Trees Resort, Nagoa",
                          "Beach-facing hotels near Nagoa Beach",
                          "Boutique heritage stays, old town",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌴",
                        range: "₹7,000–₹14,000+/night",
                        picks: [
                          "Premium sea-view resorts, Nagoa",
                          "Radisson-style properties near Diu",
                          "Private pool villas, island outskirts",
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
                    Old-town guesthouses offer the best value and atmosphere
                    combination — many occupy converted Portuguese-era
                    houses within easy walking distance of the fort. Stay
                    near Nagoa instead if a beach-first trip matters more to
                    you than the fort's proximity.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Diu</h2>
                  <p>
                    Diu's food scene blends fresh coastal seafood with
                    Gujarati vegetarian staples and a few lingering
                    Portuguese and Goan-style influences — a genuinely
                    different flavour profile from the mainland Gujarat just
                    across the water.
                  </p>
                  <ul>
                    <li>
                      <strong>Fresh seafood:</strong> Pomfret, prawns, crab
                      and squid feature heavily at seafront shacks and
                      restaurants, often grilled, fried, or cooked in
                      coastal-spiced curries.
                    </li>
                    <li>
                      <strong>Goan-influenced dishes:</strong> A handful of
                      restaurants serve Goan-style seafood preparations —
                      vindaloo, prawn curry-rice — a nod to the shared
                      Portuguese culinary history between the two former
                      colonies.
                    </li>
                    <li>
                      <strong>Gujarati thalis:</strong> Widely available in
                      Diu town, reflecting the island's proximity to and
                      trade with mainland Gujarat.
                    </li>
                    <li>
                      <strong>Duty-free beer with fresh catch:</strong> A
                      genuinely popular reason travellers make the trip —
                      affordable, legally sold alcohol alongside the day's
                      fresh seafood, uncommon anywhere in neighbouring
                      Gujarat.
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
                            "₹9,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹300",
                            "₹600",
                            "₹1,500",
                          ],
                          ["Activities/day", "₹200", "₹500", "₹1,200"],
                          [
                            "Daily total",
                            "₹2,500",
                            "₹6,300",
                            "₹14,200",
                          ],
                          [
                            "2-Day trip total",
                            "₹5,000",
                            "₹12,600",
                            "₹28,400",
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
                    * Excludes travel to Diu. Alcohol costs are notably lower
                    than the rest of India given the island's duty-free
                    status. Overall costs run well below comparable coastal
                    destinations like Goa.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li>
                      <strong>Rent a moped or bicycle:</strong> It's the best
                      way to see Diu — distances are short, traffic is
                      minimal, and it makes reaching Naida Caves, Gangeshwar
                      Temple and the beaches easy without taxis.
                    </li>
                    <li>
                      <strong>Book ahead for weekends and December–January:</strong>{" "}
                      Diu sees a steady surge of weekend travellers from
                      Gujarat, especially around duty-free shopping trips.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card acceptance thins out
                      quickly outside the main market and larger hotels.
                    </li>
                    <li>
                      <strong>Avoid the fort ramparts at midday in summer:</strong>{" "}
                      There's little shade — go early morning or just before
                      sunset instead.
                    </li>
                    <li>
                      <strong>Respect duty-free alcohol carry limits:</strong>{" "}
                      There are quantity restrictions on what can be legally
                      carried out of Diu into Gujarat — check current limits
                      before stocking up.
                    </li>
                    <li>
                      <strong>Check swimming conditions:</strong> Not all of
                      Diu's beaches are safe for swimming year-round —
                      Nagoa is generally the calmest and most reliable
                      choice.
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
                          "Watch sunset from Diu Fort's ramparts",
                          "Rent a moped or bicycle to explore the island",
                          "Book stays ahead for weekends and December–January",
                          "Carry cash for small vendors and markets",
                          "Swim at Nagoa Beach for the calmest water",
                          "Try fresh seafood at Diu's seafront shacks",
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
                          "Visit the fort ramparts at midday in peak summer",
                          "Exceed duty-free alcohol carry limits into Gujarat",
                          "Expect Goa-level nightlife or resort density",
                          "Rely on cards outside the main market and hotels",
                          "Swim at unmarked or rocky stretches without checking tides",
                          "Skip booking ahead during the December–January peak",
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
                    <strong>🗺️ Extend the trip:</strong> Diu pairs naturally
                    with a longer look at the wider Union Territory in our{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu travel guide
                    </Link>
                    , which also covers Daman and Silvassa.
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
                  "Diu",
                  "Daman and Diu",
                  "Diu Fort",
                  "Nagoa Beach",
                  "Ghoghla Beach",
                  "Portuguese Heritage",
                  "Island Getaway",
                  "Weekend Trip",
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

              <RelatedPostsGrid currentSlug="diu-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="diu-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
