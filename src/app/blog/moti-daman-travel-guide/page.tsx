// src/app/blog/moti-daman-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Moti Daman Travel Guide: Old Town, Churches & Fort",
  description:
    "A complete guide to Moti Daman, Daman's walled old town — Bom Jesus Church's gilded altar, colonial buildings, quiet lanes, and the Fort of St. Jerome.",
  keywords:
    "Moti Daman, Moti Daman travel guide, Moti Daman Daman, Bom Jesus Church Daman, Fort of St Jerome, Daman old town, Moti Daman churches, Daman Portuguese heritage, Nani Daman vs Moti Daman, Daman collectorate, Daman Ganga river",
  openGraph: {
    title: "Moti Daman Travel Guide: Old Town, Churches & Fort",
    description:
      "The seat of old Portuguese Daman — Bom Jesus Church, colonial government buildings, and the massive walls of the Fort of St. Jerome, all in one walkable old town.",
    url: "https://club.kudozz.in/blog/moti-daman-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Portuguese-era fort walls and coastal architecture, evocative of Moti Daman's colonial old town",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Moti Daman Travel Guide: Old Town, Churches & Fort",
    description:
      "The seat of old Portuguese Daman — Bom Jesus Church, colonial government buildings, and the massive walls of the Fort of St. Jerome, all in one walkable old town.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/moti-daman-travel-guide",
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
          headline: "Moti Daman Travel Guide: Old Town, Churches & Fort",
          description:
            "A complete guide to Moti Daman, Daman's walled old town — Bom Jesus Church's gilded altar, colonial buildings, quiet lanes, and the Fort of St. Jerome.",
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
            "@id": "https://club.kudozz.in/blog/moti-daman-travel-guide",
          },
          keywords:
            "Moti Daman, Moti Daman travel guide, Bom Jesus Church Daman, Fort of St Jerome, Daman old town, Moti Daman churches, Daman Portuguese heritage",
          about: {
            "@type": "Place",
            name: "Moti Daman",
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
                name: "Moti Daman",
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
    q: "What is the difference between Moti Daman and Nani Daman?",
    a: "Daman town is split by the Daman Ganga river into two historic quarters. Moti Daman ('Big/Great Daman') sits on the south bank and is the larger, more formal quarter — home to the Fort of St. Jerome, Bom Jesus Church, and the old Portuguese administrative buildings, now the district collectorate. Nani Daman ('Small Daman') sits on the north bank and has a scrappier, working fishing-harbour character, with its own smaller fort and a bustling boat jetty. Most visitors treat them as a single half-day-plus-half-day pairing, connected by a short bridge or ferry crossing.",
  },
  {
    q: "Is Moti Daman worth visiting?",
    a: "Yes, if you have any interest in Portuguese colonial heritage. It's a genuinely underrated old town — massive laterite fort walls, a beautifully preserved church with a gilded altar, quiet lanes of colonial-era houses, and none of the crowds you'd find at a comparable site in Goa. It's not a full-day destination on its own, but as a two-to-three-hour heritage walk within a broader Daman or Daman-Diu itinerary, it's well worth the detour.",
  },
  {
    q: "What is inside Moti Daman?",
    a: "The walled quarter contains the Fort of St. Jerome (whose ramparts largely define the old town's boundary), Bom Jesus Church with its ornate gilded altar, one or two smaller colonial-era chapels, the old Portuguese Secretariat and Governor's residence — now government and collectorate offices — plus residential lanes of pastel colonial houses, a few old bastions with cannons, and small local shops and eateries along the main roads leading in.",
  },
  {
    q: "How much time do I need for Moti Daman?",
    a: "Budget two to three hours for an unhurried walk covering the fort's exterior walls and gate, Bom Jesus Church, the government buildings area, and a wander through the old residential lanes. Photography enthusiasts or anyone doing the deeper Fort of St. Jerome exploration should allow closer to half a day.",
  },
  {
    q: "Is the Fort of St. Jerome the same as Moti Daman?",
    a: "Not quite — the Fort of St. Jerome is the fortification, with its bastions and thick perimeter walls, and much of Moti Daman's old town sits inside or immediately around it. Moti Daman is the broader neighbourhood: the churches, government buildings, and residential streets that grew up within and beside the fort over roughly four centuries of Portuguese rule. For a structure-by-structure deep dive into the fort itself — its bastions, gates, and history — see our dedicated Fort of St. Jerome guide.",
  },
  {
    q: "Can you enter Bom Jesus Church for free?",
    a: "Yes, entry to Bom Jesus Church is free and it remains an active place of worship, so the usual courtesies apply — modest dress, quiet voices, and checking Mass timings if you'd rather not visit mid-service. It's normally open through the day outside of active services.",
  },
  {
    q: "What is the best time of day to visit Moti Daman?",
    a: "Early morning or the couple of hours before sunset are best — the fort walls and old lanes have no real shade, and Daman's coastal humidity makes midday walking uncomfortable for much of the year. Late afternoon light also does the laterite stone and church façade genuine justice for photographs.",
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
  { id: "introduction", title: "Moti Daman: The Old Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Moti Daman", level: 2 },
  { id: "fort-of-st-jerome", title: "The Fort of St. Jerome", level: 2 },
  { id: "bom-jesus-church", title: "Bom Jesus Church", level: 2 },
  { id: "other-churches", title: "Other Colonial Churches", level: 2 },
  { id: "government-buildings", title: "Old Government Buildings", level: 2 },
  { id: "streets-architecture", title: "Streets & Architecture", level: 2 },
  { id: "heritage-walk", title: "A Half-Day Heritage Walk", level: 2 },
  { id: "where-to-eat", title: "Where to Eat Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MotiDamanGuidePage() {
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
              alt="Portuguese-era fort walls and coastal architecture, evocative of Moti Daman's colonial old town"
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
                { label: "Moti Daman", href: null },
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
                "Moti Daman",
                "Daman",
                "Portuguese Heritage",
                "Old Town",
                "Churches",
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
              Moti Daman Travel Guide: Old Town, Churches & Fort
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Massive fort walls, a gilded church altar, and the quiet lanes
              of old Portuguese administration — inside Moti Daman, the
              grander, southern half of Daman's historic riverside old town.
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
                  text: "Moti Daman, Daman & Diu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,400 words",
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
                  <h2>Moti Daman: Daman's Grand Old Town</h2>
                  <p>
                    <strong>Moti Daman</strong> — literally "Big" or "Great"
                    Daman in Gujarati — is the larger of the two historic
                    quarters that make up{" "}
                    <Link href="/blog/daman-travel-guide">Daman town</Link>,
                    sitting on the south bank of the{" "}
                    <strong>Daman Ganga river</strong> where it meets the
                    Arabian Sea. For nearly four centuries of Portuguese
                    colonial rule, this walled quarter was the seat of
                    administration for the entire territory — and that
                    history is still written plainly into its streets today,
                    from the fort walls that still ring much of the old town
                    to the colonial-era government buildings that now house
                    the district collectorate.
                  </p>
                  <p>
                    Where{" "}
                    <Link href="/blog/nani-daman-travel-guide">
                      Nani Daman
                    </Link>{" "}
                    across the river has the scrappy, working energy of a
                    fishing harbour — boats, nets, and a market that runs on
                    the tide — Moti Daman is Daman's more formal, dignified
                    side. Wide fort ramparts, a genuinely beautiful colonial
                    church, quiet residential lanes lined with pastel-painted
                    houses, and administrative buildings that once ran an
                    overseas Portuguese province all sit within a compact,
                    walkable area.
                  </p>
                  <p>
                    This guide covers Moti Daman as a neighbourhood — what to
                    see, how to plan a heritage walk through it, and where it
                    fits into a broader Daman trip. The fort itself, the{" "}
                    <strong>Fort of St. Jerome</strong>, whose walls define
                    much of the old town's boundary, gets a brief overview
                    here with a link to our dedicated{" "}
                    <Link href="/blog/moti-daman-fort-travel-guide">
                      Fort of St. Jerome guide
                    </Link>{" "}
                    for anyone who wants the full structural deep dive — its
                    bastions, gates, and building-by-building history. For the
                    wider Union Territory context, see our{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Daman & Diu travel guide
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛪</span> Moti Daman at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South bank, Daman Ganga river",
                        },
                        {
                          icon: "🏰",
                          label: "Known For",
                          value: "Fort of St. Jerome, Bom Jesus Church",
                        },
                        {
                          icon: "🏛️",
                          label: "Historic Role",
                          value: "Old Portuguese administrative capital",
                        },
                        {
                          icon: "🕐",
                          label: "Time Needed",
                          value: "2–3 hours (half-day with the fort)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Oct – Mar, early morning or evening",
                        },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Free to walk the old town & churches",
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
                  <h2>Best Time to Visit Moti Daman</h2>
                  <p>
                    Coastal Gujarat's climate is hot and humid for much of the
                    year, and Moti Daman's fort ramparts and open lanes offer
                    very little shade — timing your visit matters more here
                    than in a shopping-mall town.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather makes the fort walls and old-town walk genuinely pleasant at almost any hour, not just early morning and dusk.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot, manageable with planning",
                        text: "Midday heat on the unshaded fort walls is intense — walk the old town before 10 AM or after 4:30 PM and rest through the afternoon.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — atmospheric but wet",
                        text: "Heavy rain can make the fort's stone surfaces slippery, but the old town in the rain, with almost no other visitors, has real charm for photographers.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "🎄",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Peak weekend season",
                        text: "Cooler weather and the holiday period draw more day-trippers from Mumbai and Gujarat — still uncrowded compared to Goa, but expect more company.",
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
                    <strong>Our pick:</strong> A weekday morning between
                    November and February. The light on the laterite fort
                    walls is soft, the church is quiet, and you can cover the
                    whole old town without rushing or overheating.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Moti Daman</h2>
                  <p>
                    Moti Daman sits within easy reach of everywhere else in
                    Daman town — it's a matter of crossing the Daman Ganga
                    river, not a separate journey.
                  </p>
                  <ul>
                    <li>
                      <strong>From Nani Daman / Daman bus stand:</strong> A
                      short auto-rickshaw ride or a walk across the bridge
                      over the Daman Ganga river brings you straight into
                      Moti Daman — most visitors base themselves in Nani
                      Daman or along the beaches and cross over for a few
                      hours.
                    </li>
                    <li>
                      <strong>From Vapi Railway Station:</strong> Daman's
                      nearest railhead, on the Mumbai–Ahmedabad main line, is
                      about 12 km away — autos and taxis run regularly into
                      town, dropping you within walking distance of the fort
                      gates.
                    </li>
                    <li>
                      <strong>By Road:</strong> Daman is roughly 3 hours from
                      Mumbai and around 5 hours from Ahmedabad by car — Moti
                      Daman sits at the southern edge of town, easily reached
                      once you're in Daman itself.
                    </li>
                    <li>
                      <strong>Getting around within Moti Daman:</strong> The
                      old town is genuinely small and entirely walkable — no
                      local transport is needed once you're inside the walls.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're pairing Moti Daman
                    with Nani Daman in one day, do Moti Daman first — its
                    unshaded walls are far more pleasant to walk before
                    midday heat sets in.
                  </div>
                </section>

                {/* ── Fort of St. Jerome (teaser) ────────────────────────── */}
                <section id="fort-of-st-jerome">
                  <h2>The Fort of St. Jerome</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/hero.jpg"
                      alt="Coastal fort ramparts and bastion walls, evocative of the Fort of St. Jerome's Portuguese architecture in Moti Daman"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    You can't really separate Moti Daman from its fort — the{" "}
                    <strong>Fort of St. Jerome</strong> (also known locally
                    simply as Moti Daman Fort) is what the entire old town
                    grew up inside. Its massive laterite-stone walls, studded
                    with bastions and a handful of surviving cannons, enclose
                    most of the historic quarter, so walking through Moti
                    Daman means walking largely within — or right alongside
                    — the fort's perimeter for most of the day.
                  </p>
                  <p>
                    Rather than duplicate that depth here, we've covered the
                    fort's full history, its bastions and gates, and how to
                    explore it structure by structure in a dedicated guide —
                    read the{" "}
                    <Link href="/blog/moti-daman-fort-travel-guide">
                      Fort of St. Jerome travel guide
                    </Link>{" "}
                    if that's your main reason for visiting. For this
                    neighbourhood-level guide, think of the fort as the
                    backdrop and boundary for everything else Moti Daman has
                    to offer — the church, the government buildings, and the
                    old residential streets.
                  </p>
                </section>

                {/* ── Bom Jesus Church ──────────────────────────────────── */}
                <section id="bom-jesus-church">
                  <h2>Bom Jesus Church</h2>
                  <p>
                    If Moti Daman has one unmissable sight beyond the fort
                    walls themselves, it's <strong>Bom Jesus Church</strong>{" "}
                    — a beautifully preserved colonial-era church tucked
                    within the old town, and one of the genuine architectural
                    highlights of the entire Daman & Diu territory. Its
                    plain, whitewashed exterior gives little away, which
                    makes the interior all the more striking: an{" "}
                    <strong>ornate, heavily gilded altar</strong>, carved
                    woodwork, and a hushed, well-kept atmosphere that feels a
                    world apart from the busy road just outside.
                  </p>
                  <p>
                    The church remains an active place of worship, so time
                    your visit outside Mass hours if you'd rather explore at
                    leisure, and dress modestly as you would for any
                    functioning church. Entry is free, and even a short
                    ten-minute visit is enough to appreciate the contrast
                    between the church's austere façade and its richly
                    decorated interior — a pattern repeated at colonial
                    churches across the old Portuguese territories, from Goa
                    northward.
                  </p>
                  <blockquote>
                    Come for the fort, stay for the altar — Bom Jesus
                    Church's interior is, for many visitors, the single most
                    memorable stop in Moti Daman.
                  </blockquote>
                </section>

                {/* ── Other Churches ────────────────────────────────────── */}
                <section id="other-churches">
                  <h2>Other Colonial Churches & Chapels</h2>
                  <p>
                    Bom Jesus isn't the only trace of Moti Daman's religious
                    architecture. Scattered through the old town and along
                    its edges are smaller colonial-era chapels, built over
                    the same centuries of Portuguese presence, each modest in
                    scale compared to Bom Jesus but worth a glance if you're
                    walking the lanes anyway.
                  </p>
                  <ul>
                    <li>
                      <strong>Smaller wayside chapels:</strong> Compact,
                      simply built structures dotted around the old town and
                      along the approach roads — a reminder of how deeply
                      Catholic religious practice was woven into everyday
                      Portuguese-era Daman.
                    </li>
                    <li>
                      <strong>Chapels tied to the old administration:</strong>{" "}
                      A few smaller chapels sit close to the former
                      government buildings, reflecting how closely church and
                      colonial administration were intertwined in Portuguese
                      territories.
                    </li>
                  </ul>
                  <p>
                    None of these individually justify a special detour, but
                    collectively they add texture to a walk through Moti
                    Daman — glimpsed through gateways and at the ends of
                    lanes as you move between the fort and the church.
                  </p>
                </section>

                {/* ── Government Buildings ──────────────────────────────── */}
                <section id="government-buildings">
                  <h2>Old Portuguese Government Buildings</h2>
                  <p>
                    Moti Daman wasn't just a fortified church town — for
                    centuries it was the administrative heart of Portuguese
                    Daman, and that role is still visible in the cluster of{" "}
                    <strong>colonial-era government buildings</strong>{" "}
                    standing within the old walls.
                  </p>
                  <ul>
                    <li>
                      <strong>The old Secretariat building:</strong> Once the
                      administrative office of the Portuguese province, its
                      colonnaded façade and solid, formal proportions are
                      typical of the period's public architecture — still in
                      use for local administration today.
                    </li>
                    <li>
                      <strong>Governor's residence, now the collectorate:</strong>{" "}
                      The former residence of the Portuguese Governor has
                      been repurposed as the modern district collectorate —
                      one of the more striking examples anywhere in India of
                      a colonial seat of power continuing to function as one,
                      just under a different flag.
                    </li>
                    <li>
                      <strong>Municipal and civic buildings:</strong> Several
                      other whitewashed, colonnaded structures around the old
                      town continue in low-key civic or administrative use,
                      giving Moti Daman a lived-in feel rather than a
                      museum-like one.
                    </li>
                  </ul>
                  <p>
                    Most of these buildings are still working government
                    offices, so treat them as sights to admire from the
                    street rather than places to walk into uninvited — the
                    exteriors alone, with their arched verandas and
                    thick-walled colonial proportions, are worth the stop.
                  </p>
                </section>

                {/* ── Streets & Architecture ─────────────────────────────── */}
                <section id="streets-architecture">
                  <h2>Streets & Architecture of the Walled Town</h2>
                  <p>
                    Beyond the named landmarks, Moti Daman's real charm is in
                    simply walking its streets. Behind the fort walls, narrow
                    lanes wind past pastel-painted colonial houses with
                    wooden balconies, tiled roofs, and the occasional
                    crumbling but photogenic façade — a quieter, less
                    touristed cousin of Goa's Fontainhas or Diu's old town.
                  </p>
                  <ul>
                    <li>
                      <strong>Residential lanes:</strong> Family homes,
                      several generations old, sit alongside small shops and
                      churches — this is a living neighbourhood, not a
                      preserved heritage precinct, and that adds to its
                      authenticity.
                    </li>
                    <li>
                      <strong>Bastions and gate remnants:</strong> Sections of
                      the fort wall are directly accessible from the street,
                      with old cannon emplacements and gateways still intact
                      in places — worth pausing at even if you're saving the
                      full fort walk for another visit.
                    </li>
                    <li>
                      <strong>A slower pace:</strong> Compared to Nani Daman's
                      market bustle across the river, Moti Daman moves
                      noticeably slower — fewer vehicles, fewer vendors, more
                      quiet corners to simply stand and look around.
                    </li>
                  </ul>
                </section>

                {/* ── Heritage Walk ──────────────────────────────────────── */}
                <section id="heritage-walk">
                  <h2>A Suggested Half-Day Heritage Walk</h2>
                  <p>
                    Here's a simple, unrushed route through Moti Daman that
                    covers everything above without doubling back — start
                    early to beat both the heat and the midday sun on the
                    fort walls.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "8:00 AM",
                        title: "Cross into Moti Daman",
                        color: "bg-amber-700",
                        activities: [
                          "Cross the bridge from Nani Daman, or arrive by road/auto",
                          "Enter through one of the fort gates on the town's edge",
                          "Get oriented near the main gate before heading in",
                        ],
                      },
                      {
                        day: "8:30 AM",
                        title: "Fort Walls & Bastions",
                        color: "bg-forest-600",
                        activities: [
                          "Walk a stretch of the accessible ramparts and bastions",
                          "Photograph the old cannons and gate structures",
                          "Save the full fort exploration for a separate, dedicated visit",
                        ],
                      },
                      {
                        day: "9:15 AM",
                        title: "Bom Jesus Church",
                        color: "bg-sky-600",
                        activities: [
                          "Visit the church interior and its gilded altar",
                          "A quiet 15–20 minutes, longer if photographing details",
                        ],
                      },
                      {
                        day: "10:00 AM",
                        title: "Government Buildings & Old Streets",
                        color: "bg-purple-600",
                        activities: [
                          "Walk past the old Secretariat and collectorate exteriors",
                          "Wander the residential lanes of colonial-era houses",
                          "Stop for tea or a snack at a local shop along the way",
                        ],
                      },
                      {
                        day: "11:00 AM",
                        title: "Wrap Up & Move On",
                        color: "bg-stone-600",
                        activities: [
                          "Head back across the river toward Nani Daman or the beaches",
                          "Or continue to a fuller Fort of St. Jerome exploration if time allows",
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
                    * This plan wraps in around three hours — extend it to a
                    full half-day if you're doing a thorough fort exploration
                    rather than the brief rampart walk above.
                  </p>
                </section>

                {/* ── Where to Eat ──────────────────────────────────────── */}
                <section id="where-to-eat">
                  <h2>Where to Eat Nearby</h2>
                  <p>
                    Moti Daman itself is more residential and administrative
                    than commercial, so it's light on standalone
                    restaurants — but it sits within easy reach of Daman's
                    better eating options on both sides of the river.
                  </p>
                  <ul>
                    <li>
                      <strong>Small local eateries near the old town:</strong>{" "}
                      A handful of simple shops and tea stalls near the fort
                      approach roads serve snacks, tea, and light Gujarati
                      fare — fine for a quick break mid-walk.
                    </li>
                    <li>
                      <strong>Cross into Nani Daman for more choice:</strong>{" "}
                      A short trip across the river brings you to Nani
                      Daman's wider spread of restaurants, seafood shacks,
                      and dhabas — the better bet for a proper meal before or
                      after your Moti Daman walk.
                    </li>
                    <li>
                      <strong>Daman's coastal seafood:</strong> Given Daman's
                      fishing-harbour economy just across the river, fresh
                      pomfret, prawns, and other local catch feature widely
                      at restaurants a short ride from Moti Daman.
                    </li>
                    <li>
                      <strong>Duty-free refreshments:</strong> As with the
                      rest of Daman, alcohol is available tax-free at several
                      restaurants and shops in town — a small but popular
                      bonus for weekend visitors.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Moti Daman is inexpensive to visit — walking the old
                    town, the fort exterior, and Bom Jesus Church all cost
                    nothing beyond your time. Most of the spend below is for
                    getting there and eating, not for the sights themselves.
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
                          [
                            "Entry to fort exterior & churches",
                            "Free",
                            "Free",
                            "Free",
                          ],
                          [
                            "Auto/taxi within Daman town",
                            "₹100",
                            "₹300",
                            "₹800 (full-day hire)",
                          ],
                          ["Snacks & tea", "₹150", "₹400", "₹900"],
                          [
                            "Meal nearby (Nani Daman)",
                            "₹250",
                            "₹700",
                            "₹1,800",
                          ],
                          ["Half-day total", "₹500", "₹1,400", "₹3,500"],
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
                    * Excludes travel into Daman town itself. Figures assume
                    a half-day visit to Moti Daman only, not a multi-day
                    Daman trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Moti Daman</h2>
                  <ul>
                    <li>
                      <strong>Go early or late in the day:</strong> The fort
                      walls and old-town lanes offer almost no shade — a
                      morning or late-afternoon visit is far more comfortable
                      than midday, especially outside the Oct–Mar window.
                    </li>
                    <li>
                      <strong>Dress modestly for Bom Jesus Church:</strong>{" "}
                      It's an active place of worship — covered shoulders and
                      knees, and quiet voices, are appreciated as they would
                      be anywhere.
                    </li>
                    <li>
                      <strong>Government buildings are working offices:
                      </strong>{" "}
                      Admire the Secretariat and collectorate exteriors from
                      the street rather than trying to walk inside — they're
                      functioning administrative buildings, not museums.
                    </li>
                    <li>
                      <strong>Wear comfortable, closed footwear:</strong>{" "}
                      Uneven stone surfaces on the fort walls and old lanes
                      make sandals a less comfortable choice than sturdy
                      walking shoes.
                    </li>
                    <li>
                      <strong>Pair it with Nani Daman:</strong> The two
                      quarters complement each other well — Moti Daman's
                      heritage walk in the morning, Nani Daman's markets and
                      harbour energy in the afternoon or evening.
                    </li>
                    <li>
                      <strong>Carry water:</strong> There are few shops
                      directly within the old walled town — carry a bottle
                      rather than relying on finding one mid-walk.
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
                          "Visit Bom Jesus Church for its gilded altar",
                          "Walk a stretch of the accessible fort ramparts",
                          "Go early morning or late afternoon for comfort",
                          "Wear closed, comfortable walking shoes",
                          "Pair the visit with Nani Daman across the river",
                          "Carry your own water for the walk",
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
                          "Walk the fort walls at midday in peak summer",
                          "Enter government buildings uninvited",
                          "Visit the church mid-service without checking timings",
                          "Expect large-scale restaurant choices inside the old walls",
                          "Confuse Moti Daman with Nani Daman when giving directions",
                          "Rush it — the charm is in the slow, quiet lanes",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Moti Daman
                    with the harbour side of{" "}
                    <Link href="/blog/nani-daman-travel-guide">
                      Nani Daman
                    </Link>{" "}
                    for a full day in Daman town, or read our{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Daman & Diu travel guide
                    </Link>{" "}
                    for the wider Union Territory, including Diu's forts and
                    beaches.
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
                  "Moti Daman",
                  "Daman",
                  "Daman and Diu",
                  "Bom Jesus Church",
                  "Fort of St Jerome",
                  "Portuguese Heritage",
                  "Old Town",
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

              <RelatedPostsGrid currentSlug="moti-daman-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="moti-daman-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
