// src/app/blog/daman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Daman Travel Guide: Forts, Beaches & Weekend Trip",
  description:
    "The complete Daman travel guide — Moti Daman Fort, Nani Daman, Devka & Jampore beaches, Vanganga Lake Garden, duty-free shopping, food, stay and a full 2-day itinerary for this Gujarat coastal getaway.",
  keywords:
    "Daman travel guide, Daman Gujarat, Moti Daman, Nani Daman, Moti Daman Fort, Devka Beach, Jampore Beach, Vanganga Lake Garden, Daman weekend trip, Daman duty free, Vapi to Daman distance, Daman and Diu tourism, Daman beaches",
  openGraph: {
    title: "Daman Travel Guide: Forts, Beaches & Weekend Trip",
    description:
      "A former Portuguese enclave split by the Daman Ganga river — forts, quiet beaches, duty-free liquor, and a genuine weekend escape from Mumbai and Surat.",
    url: "https://club.kudozz.in/blog/daman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Portuguese-era fort walls overlooking the sea, evoking the coastal forts of Daman",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Daman Travel Guide: Forts, Beaches & Weekend Trip",
    description:
      "Forts, quiet beaches, and duty-free shopping on Gujarat's coast — the complete Daman travel guide.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/daman-travel-guide",
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
          headline: "Daman Travel Guide: Forts, Beaches & Weekend Trip",
          description:
            "The complete Daman travel guide — Moti Daman Fort, Nani Daman, Devka & Jampore beaches, Vanganga Lake Garden, duty-free shopping, food, stay and a full 2-day itinerary.",
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
            "@id": "https://club.kudozz.in/blog/daman-travel-guide",
          },
          keywords:
            "Daman travel guide, Moti Daman, Nani Daman, Moti Daman Fort, Devka Beach, Jampore Beach, Vanganga Lake Garden, Daman weekend trip",
          about: {
            "@type": "Place",
            name: "Daman",
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
                name: "Daman",
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
    q: "How many days are enough for Daman?",
    a: "Two days is the sweet spot for a Daman trip — a full day to cover Moti Daman Fort, Nani Daman's old quarter and the harbour, and a second day for Devka Beach, Jampore Beach and Vanganga Lake Garden at a relaxed pace. A single day works fine as a Mumbai/Surat/Vapi day trip if you're prioritising the fort and one beach rather than everything.",
  },
  {
    q: "Is alcohol legal in Daman?",
    a: "Yes. Daman is a Union Territory and, unlike mainland Gujarat where prohibition applies, alcohol is legally sold here — a major reason it draws so many weekend visitors from Gujarat and neighbouring Maharashtra. Shops sell at duty-free-style prices, though quantity limits apply if you're carrying bottles back across the border into a dry state, so it's worth checking current limits before stocking up.",
  },
  {
    q: "What is the distance between Vapi and Daman?",
    a: "Vapi, the nearest major railway station on the Mumbai–Ahmedabad main line, is roughly 12 km from Daman — about a 20–30 minute auto or taxi ride depending on traffic and which part of Daman you're headed to (Nani Daman is closer to Vapi than Moti Daman).",
  },
  {
    q: "Is Daman a good weekend getaway from Mumbai?",
    a: "Yes, and it's one of the more popular short weekend options for Mumbai travellers — roughly 3 hours by road via NH48, or a train to Vapi followed by a short local ride. It's not a beach destination on the scale of Goa, but the combination of Portuguese forts, quiet beaches and legal, affordable alcohol makes it a genuinely worthwhile 2-day escape.",
  },
  {
    q: "What is the difference between Moti Daman and Nani Daman?",
    a: "The Daman Ganga river splits the town in two. Moti Daman ('Big Daman'), on the south bank, is the historic walled quarter with the Fort of St. Jerome, old government buildings and colonial-era churches. Nani Daman ('Small Daman'), on the north bank, is the livelier, more commercial side, home to the fishing harbour, the Fort of St. Francis Xavier, and most of the everyday markets and eateries.",
  },
  {
    q: "Was Daman a Portuguese colony?",
    a: "Yes. Daman was under Portuguese rule for over 400 years, from the mid-16th century until 1961, when it was annexed by India along with Goa and Diu in Operation Vijay. That long colonial history is still visible in its forts, churches and street layout, particularly in Moti Daman.",
  },
  {
    q: "Can Daman be combined with Diu in one trip?",
    a: "Not comfortably in a short trip — despite sharing a Union Territory, Daman and Diu are roughly 750 km apart on opposite ends of the Gujarat coastline, with no direct fast connection between them. Treat Daman and Diu as two separate trips rather than one combined itinerary unless you have 5+ days and enjoy long coastal road journeys.",
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
  { id: "introduction", title: "Daman: A Former Portuguese Enclave", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Daman", level: 2 },
  { id: "moti-daman", title: "Moti Daman", level: 2 },
  { id: "nani-daman", title: "Nani Daman", level: 2 },
  { id: "beaches", title: "Devka & Jampore Beaches", level: 2 },
  { id: "vanganga", title: "Vanganga Lake Garden", level: 2 },
  { id: "duty-free", title: "Duty-Free Shopping", level: 2 },
  { id: "local-culture", title: "Fishing Culture & Seafood", level: 2 },
  { id: "itinerary", title: "2-Day Daman Itinerary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DamanGuidePage() {
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
              alt="Portuguese-era fort walls overlooking the sea, evoking the coastal forts of Daman"
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
                { label: "Daman", href: null },
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
                "Daman",
                "Moti Daman",
                "Nani Daman",
                "Portuguese Heritage",
                "Weekend Trip",
                "Beaches",
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
              Daman Travel Guide: Forts, Beaches & Weekend Trip
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A former Portuguese enclave split by a river into two very
              different halves — walled forts, quiet beaches, and
              legally-sold alcohol on a coastline barely three hours from
              Mumbai.
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
                  text: "Daman, Gujarat coast",
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
                  <h2>Daman: A Former Portuguese Enclave on Gujarat's Coast</h2>
                  <p>
                    <strong>Daman</strong> is a small coastal town on
                    Gujarat's southern shoreline that spent over 400 years as
                    a Portuguese colony — from the mid-16th century until
                    1961, when it was annexed by India alongside Goa and Diu
                    in Operation Vijay. Together with{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Diu and the inland district of Dadra & Nagar Haveli
                    </Link>
                    , it now forms part of the Union Territory of Dadra &
                    Nagar Haveli and Daman & Diu — but Daman itself is worth a
                    dedicated trip on its own terms, distinct from its
                    better-known island cousin Diu, 750 km away on the other
                    end of the Gujarat coast.
                  </p>
                  <p>
                    The town is neatly split in two by the{" "}
                    <strong>Daman Ganga river</strong>: <strong>Moti Daman</strong>{" "}
                    ("Big Daman") on the south bank is the historic walled
                    quarter, home to the imposing Fort of St. Jerome and a
                    cluster of colonial-era churches and government
                    buildings. <strong>Nani Daman</strong> ("Small Daman") on
                    the north bank is the livelier, more commercial side —
                    the fishing harbour, the Fort of St. Francis Xavier, and
                    most of the everyday markets sit here.
                  </p>
                  <p>
                    What actually draws most visitors, though, isn't history
                    at all — it's that Daman legally sells alcohol at
                    duty-free-style prices, a genuine rarity next to
                    dry-state-adjacent Gujarat. Add in a pair of quiet, mostly
                    uncrowded beaches, a manageable size you can cover in a
                    weekend, and a straightforward 3-hour drive from Mumbai
                    (or a short hop from Surat and Vapi), and Daman has become
                    one of the more reliable short getaways on the western
                    coast — without ever turning into a Goa-scale tourist
                    circuit.
                  </p>
                  <p>
                    This guide covers Daman as a whole — history, seasons,
                    getting here, and a full 2-day itinerary — while pointing
                    you toward dedicated, in-depth guides for each of its
                    individual sights: {" "}
                    <Link href="/blog/moti-daman-travel-guide">Moti Daman</Link>
                    , the{" "}
                    <Link href="/blog/moti-daman-fort-travel-guide">
                      Fort of St. Jerome
                    </Link>
                    , <Link href="/blog/nani-daman-travel-guide">Nani Daman</Link>
                    ,{" "}
                    <Link href="/blog/devka-beach-travel-guide">
                      Devka Beach
                    </Link>
                    ,{" "}
                    <Link href="/blog/jampore-beach-travel-guide">
                      Jampore Beach
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/vanganga-lake-garden-travel-guide">
                      Vanganga Lake Garden
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛪</span> Daman at a Glance
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
                          icon: "🚉",
                          label: "Nearest Railhead",
                          value: "Vapi, ~12 km",
                        },
                        {
                          icon: "🚗",
                          label: "From Mumbai",
                          value: "~180 km / ~3 hrs by road",
                        },
                        {
                          icon: "🌊",
                          label: "River Split",
                          value: "Daman Ganga: Moti Daman / Nani Daman",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar",
                        },
                        {
                          icon: "🍺",
                          label: "Note",
                          value: "Alcohol is legal & duty-free priced",
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
                  <h2>Best Time to Visit Daman</h2>
                  <p>
                    Daman shares Gujarat's coastal climate — hot and humid
                    for most of the year — which narrows the truly
                    comfortable window for fort walks and beach time.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant, dry weather (18–30°C) makes exploring Moti Daman's fort, Nani Daman's lanes, and both beaches genuinely comfortable.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot but manageable",
                        text: "Temperatures push into the mid-30s and beyond — plan sightseeing for early morning or evening, and keep beach time for late afternoon.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — quiet but wet",
                        text: "Heavy rain and rough seas make the beaches unpleasant and occasionally unsafe for swimming, though the forts and old quarters still make for an atmospheric, crowd-free visit.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak season",
                        text: "Cooler weather and the New Year holidays draw the largest crowds of weekend travellers — book stays a couple of weeks ahead.",
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
                    <strong>Our pick:</strong> November to February — cool
                    enough for a midday fort walk in Moti Daman, warm enough
                    for evening beach time at Devka or Jampore.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Daman</h2>
                  <p>
                    Daman's biggest practical advantage over Diu is how easy
                    it is to reach — it sits right off the Mumbai–Ahmedabad
                    corridor, one of India's best-connected stretches.
                  </p>
                  <ul>
                    <li>
                      <strong>By Train:</strong> The nearest railway station
                      is <strong>Vapi</strong>, roughly 12 km from Daman, on
                      the busy Mumbai–Ahmedabad main line with frequent
                      express and local trains. From Vapi station, autos and
                      taxis into Daman take about 20–30 minutes.
                    </li>
                    <li>
                      <strong>By Road from Mumbai:</strong> Around 180 km via
                      NH48, roughly 3 hours by car or bus — one of the more
                      straightforward weekend drives out of Mumbai, with no
                      hill sections to slow things down.
                    </li>
                    <li>
                      <strong>By Road from Surat:</strong> A shorter run,
                      roughly 100 km and 2 hours, making Daman a popular
                      day-trip or weekend option for Surat residents as well.
                    </li>
                    <li>
                      <strong>By Air:</strong> The nearest airport is Surat,
                      about 110 km away; Mumbai's international airport, at
                      roughly 190 km, is also a viable option for
                      long-distance travellers combining flights with a road
                      transfer.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Trains into Vapi are frequent
                    and cheap enough that a train + auto combination is often
                    faster than driving all the way from Mumbai, especially
                    on weekend traffic days.
                  </div>
                </section>

                {/* ── Moti Daman ────────────────────────────────────────── */}
                <section id="moti-daman">
                  <h2>Moti Daman: The Historic Walled Quarter</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="Coastal fort ramparts by the sea, evocative of the Portuguese-era Fort of St. Jerome in Moti Daman"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    On the south bank of the Daman Ganga, <strong>Moti Daman</strong>{" "}
                    is the older, quieter, and historically richer half of
                    town — a walled quarter still ringed by its original
                    bastioned fortifications, with narrow lanes lined by
                    colonial-era churches, administrative buildings and
                    faded Portuguese townhouses.
                  </p>
                  <p>
                    Its centrepiece is the <strong>Fort of St. Jerome</strong>{" "}
                    (also known as Moti Daman Fort), a large 16th-century sea
                    fort with ten bastions that once guarded the harbour
                    entrance — still one of the best-preserved Portuguese
                    forts on India's west coast outside Goa. We've covered
                    the fort in full detail, including its bastions, the
                    Bom Jesus Cathedral inside its walls, and the best times
                    to visit, in our dedicated{" "}
                    <Link href="/blog/moti-daman-fort-travel-guide">
                      Moti Daman Fort guide
                    </Link>
                    .
                  </p>
                  <p>
                    Beyond the fort, Moti Daman rewards unhurried wandering —
                    quiet, largely traffic-free streets, government buildings
                    still occupying restored Portuguese-era structures, and a
                    genuine sense of stepping back several centuries. Our
                    full{" "}
                    <Link href="/blog/moti-daman-travel-guide">
                      Moti Daman travel guide
                    </Link>{" "}
                    covers the quarter's churches, streets and photo spots in
                    depth.
                  </p>
                </section>

                {/* ── Nani Daman ────────────────────────────────────────── */}
                <section id="nani-daman">
                  <h2>Nani Daman: Markets, Harbour & Everyday Life</h2>
                  <p>
                    Across the river on the north bank, <strong>Nani Daman</strong>{" "}
                    is where most of the town's day-to-day life actually
                    happens — a busier, more commercial quarter built around
                    its working fishing harbour, local markets, and most of
                    Daman's hotels, eateries and liquor shops.
                  </p>
                  <p>
                    Its own fortification, the <strong>Fort of St. Francis
                    Xavier</strong>, is smaller and less dramatic than its
                    counterpart across the river but worth a stop, and the
                    harbour area offers a genuine, unpolished look at the
                    fishing-boat traffic that still drives much of the local
                    economy. The full character of this side of town —
                    markets, harbour walks, and where the fishing community
                    lives and works — is covered in our{" "}
                    <Link href="/blog/nani-daman-travel-guide">
                      Nani Daman travel guide
                    </Link>
                    .
                  </p>
                </section>

                {/* ── Beaches ───────────────────────────────────────────── */}
                <section id="beaches">
                  <h2>Devka & Jampore Beaches</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="A quiet, tree-lined coastal beach, representative of Daman's Devka and Jampore beaches"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Daman's beaches don't compete with Goa's on sand quality
                    or clear water — expect a greyish shoreline and modest
                    waves — but they make up for it with genuine quiet and,
                    at Devka in particular, a proper evening promenade
                    atmosphere.
                  </p>
                  <ul>
                    <li>
                      <strong>Devka Beach:</strong> The more developed of the
                      two, with a landscaped promenade, a small garden, food
                      stalls, and toy-train and camel rides that make it
                      popular with families in the evening. Full details in
                      our{" "}
                      <Link href="/blog/devka-beach-travel-guide">
                        Devka Beach guide
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Jampore Beach:</strong> Longer, quieter, and
                      lined with casuarina trees — better suited to a
                      peaceful walk or a picnic than a swim, and noticeably
                      less crowded than Devka even on weekends. Covered fully
                      in our{" "}
                      <Link href="/blog/jampore-beach-travel-guide">
                        Jampore Beach guide
                      </Link>
                      .
                    </li>
                  </ul>
                  <p>
                    Between the two, Devka works better for an evening out
                    with food stalls and some activity, while Jampore is the
                    pick for an early-morning or sunset walk away from the
                    crowds.
                  </p>
                </section>

                {/* ── Vanganga ──────────────────────────────────────────── */}
                <section id="vanganga">
                  <h2>Vanganga Lake Garden</h2>
                  <p>
                    A landscaped garden built around a large artificial lake,{" "}
                    <strong>Vanganga Lake Garden</strong> is Daman's most
                    popular family-friendly attraction away from the
                    coastline — paddle boats, a musical fountain, and shaded
                    walking paths around the water make it a relaxed way to
                    spend a couple of hours, especially with kids in tow. Our{" "}
                    <Link href="/blog/vanganga-lake-garden-travel-guide">
                      dedicated Vanganga Lake Garden guide
                    </Link>{" "}
                    covers timings, boating costs, and the best time of day
                    to visit.
                  </p>
                </section>

                {/* ── Duty-Free ─────────────────────────────────────────── */}
                <section id="duty-free">
                  <h2>Duty-Free Shopping</h2>
                  <p>
                    The single biggest driver of weekend traffic into Daman
                    is simple: unlike mainland Gujarat, which enforces
                    prohibition, Daman is a Union Territory where{" "}
                    <strong>alcohol is legally sold</strong>, and at
                    noticeably lower, duty-free-style prices compared to
                    most other states. Liquor shops are concentrated mainly
                    in Nani Daman and along the main roads into town, and
                    weekends see a steady flow of visitors from Gujarat and
                    Maharashtra specifically for this reason.
                  </p>
                  <p>
                    It's worth treating this as one practical facet of a trip
                    rather than the whole point of one — Daman's forts,
                    beaches and old quarters are genuinely worth visiting on
                    their own merits. If duty-free shopping is part of your
                    plan, keep a few things in mind:
                  </p>
                  <ul>
                    <li>
                      <strong>Carry limits apply:</strong> There are quantity
                      restrictions on how much alcohol you can legally carry
                      out of Daman into neighbouring states — check current
                      limits before stocking up, since these change from time
                      to time.
                    </li>
                    <li>
                      <strong>Shops are concentrated in Nani Daman:</strong>{" "}
                      Most licensed stores sit along the main roads on the
                      north bank, close to where most visitors are staying
                      anyway.
                    </li>
                    <li>
                      <strong>Weekends get busy:</strong> Expect queues and
                      heavier traffic on Saturday and Sunday, particularly
                      around evenings.
                    </li>
                  </ul>
                </section>

                {/* ── Local Culture ─────────────────────────────────────── */}
                <section id="local-culture">
                  <h2>Fishing-Community Culture & Seafood</h2>
                  <p>
                    Beneath the weekend-trip reputation, Daman is still, at
                    its core, a working fishing town. Nani Daman's harbour is
                    genuinely active — brightly painted boats returning with
                    the day's catch, nets drying along the waterfront, and a
                    fish market that runs on its own early-morning rhythm
                    largely untouched by tourism.
                  </p>
                  <p>
                    That fishing economy shows up most directly on the plate:
                    Daman's seafood is fresh, affordable, and prepared with a
                    distinct coastal-Gujarati style — expect pomfret, prawns,
                    surmai (kingfish) and squid at local eateries, often
                    simply grilled or fried rather than heavily sauced.
                    Spending an early morning at the Nani Daman harbour,
                    before the boats have fully unloaded, is one of the more
                    genuine, unscripted experiences the town has to offer.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Daman Itinerary</h2>
                  <p>
                    Daman's compact size makes a focused two-day trip
                    comfortable without feeling rushed — one day for the
                    heritage side, one for beaches and gardens.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Moti Daman & Nani Daman",
                        color: "bg-amber-700",
                        activities: [
                          "Morning: Arrive, check in, breakfast in Nani Daman",
                          "Late morning: Explore the Fort of St. Jerome and Moti Daman's old quarter",
                          "Afternoon: Cross the river to Nani Daman's harbour and markets",
                          "Evening: Duty-free shopping, dinner at a Nani Daman seafood eatery",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Beaches & Vanganga Lake Garden",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Quiet walk at Jampore Beach",
                          "Midday: Paddle boating and a slow stroll at Vanganga Lake Garden",
                          "Evening: Sunset and food stalls at Devka Beach",
                          "Night/next morning: Departure via Vapi or by road",
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
                    * On a tight day trip from Mumbai or Surat, prioritise the
                    Fort of St. Jerome in the morning and Devka Beach in the
                    evening — the single strongest combination if you only
                    have a few hours.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Most accommodation clusters around Nani Daman and along
                    the Devka Beach road, within easy reach of both the fort
                    quarter and the beaches — book ahead for weekends and the
                    December–January peak.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Guesthouses in Nani Daman",
                          "Budget lodges near the bus stand",
                          "Simple stays close to Jampore Beach",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Hotels along the Devka Beach road",
                          "Business hotels in central Nani Daman",
                          "Beach-facing mid-range properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌴",
                        range: "₹6,500–₹14,000+/night",
                        picks: [
                          "Radisson Blu Resort, Daman",
                          "Premium resort properties near Devka",
                          "Larger full-service hotels, central Daman",
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
                    Staying near Devka Beach gives you easy evening access to
                    the promenade and food stalls, while a Nani Daman base
                    puts you closer to the harbour, markets and duty-free
                    shops — pick based on which you'll use more.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Daman</h2>
                  <p>
                    Daman's food scene blends fresh coastal seafood with
                    Gujarati vegetarian staples, plus a few lingering
                    Portuguese-influenced touches.
                  </p>
                  <ul>
                    <li>
                      <strong>Fresh seafood in Nani Daman:</strong> Pomfret,
                      prawns, surmai and squid at harbour-adjacent eateries —
                      simply grilled or fried in a coastal-Gujarati style.
                    </li>
                    <li>
                      <strong>Gujarati thalis:</strong> Widely available
                      across Daman, reflecting the town's geographic and
                      cultural overlap with Gujarat.
                    </li>
                    <li>
                      <strong>Beachside snacks at Devka:</strong> Bhel,
                      pav-bhaji-style stalls and quick bites along the
                      promenade, best enjoyed at sunset.
                    </li>
                    <li>
                      <strong>Duty-free beer with seafood:</strong> A popular
                      pairing specific to Daman's status as a legal-alcohol
                      zone — affordable drinks alongside fresh local catch,
                      uncommon across most of neighbouring Gujarat.
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
                            "₹1,200",
                            "₹3,500",
                            "₹8,500",
                          ],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          [
                            "Local transport/day",
                            "₹250",
                            "₹500",
                            "₹1,200",
                          ],
                          [
                            "Activities/entry fees",
                            "₹150",
                            "₹400",
                            "₹1,000",
                          ],
                          [
                            "Daily total",
                            "₹2,000",
                            "₹5,400",
                            "₹12,900",
                          ],
                          [
                            "2-Day trip total",
                            "₹4,000",
                            "₹10,800",
                            "₹25,800",
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
                    * Excludes travel to Daman and alcohol purchases, which
                    vary widely. Costs are notably lower than comparable
                    coastal destinations like Goa.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li>
                      <strong>Don't confuse Daman with Diu:</strong> They're
                      750 km apart despite sharing a Union Territory — plan
                      for one trip or the other, not both in a short window.
                    </li>
                    <li>
                      <strong>Book ahead for weekends:</strong> Daman sees a
                      steady surge of Gujarati and Mumbai weekend travellers,
                      many specifically for duty-free shopping.
                    </li>
                    <li>
                      <strong>Carry cash for small vendors:</strong> Card
                      acceptance thins out quickly outside the main hotels
                      and larger shops.
                    </li>
                    <li>
                      <strong>Base yourself near Nani Daman or Devka:</strong>{" "}
                      Both give easy access to the fort quarter, beaches, and
                      markets without long commutes.
                    </li>
                    <li>
                      <strong>Avoid midday fort visits in summer:</strong>{" "}
                      Moti Daman's ramparts offer little shade — go early
                      morning or just before sunset.
                    </li>
                    <li>
                      <strong>Respect duty-free carry limits:</strong> Check
                      current quantity restrictions before carrying alcohol
                      out of Daman into neighbouring states.
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
                          "Walk the ramparts of the Fort of St. Jerome",
                          "Visit the Nani Daman harbour early in the morning",
                          "Book stays ahead for weekends and December–January",
                          "Carry cash for small vendors and markets",
                          "Try fresh seafood at a Nani Daman eatery",
                          "Watch sunset from the Devka Beach promenade",
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
                          "Try to combine Daman and Diu in one short trip",
                          "Visit the fort ramparts at midday in peak summer",
                          "Exceed duty-free alcohol carry limits",
                          "Expect Goa-level nightlife or resort density",
                          "Rely on cards outside main hotels and markets",
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
                    <strong>🗺️ Go deeper:</strong> For the full picture beyond
                    this overview, see our dedicated guides to{" "}
                    <Link href="/blog/moti-daman-travel-guide">Moti Daman</Link>
                    ,{" "}
                    <Link href="/blog/moti-daman-fort-travel-guide">
                      the Fort of St. Jerome
                    </Link>
                    ,{" "}
                    <Link href="/blog/nani-daman-travel-guide">Nani Daman</Link>
                    ,{" "}
                    <Link href="/blog/devka-beach-travel-guide">
                      Devka Beach
                    </Link>
                    ,{" "}
                    <Link href="/blog/jampore-beach-travel-guide">
                      Jampore Beach
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/vanganga-lake-garden-travel-guide">
                      Vanganga Lake Garden
                    </Link>
                    , or the wider{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu travel guide
                    </Link>{" "}
                    if you're also considering Diu or Silvassa.
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
                  "Daman",
                  "Daman and Diu",
                  "Moti Daman",
                  "Nani Daman",
                  "Portuguese Heritage",
                  "Weekend Trip",
                  "Gujarat Coast",
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

              <RelatedPostsGrid currentSlug="daman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="daman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
