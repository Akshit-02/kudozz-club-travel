// src/app/blog/lodhi-garden-delhi-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Lodhi Garden Travel Guide: Tombs, Timings & Tips",
  description:
    "Complete Lodhi Garden guide — Delhi's 90-acre park of 15th-century Lodi and Sayyid tombs. Entry timings, the Bara Gumbad, Sheesh Gumbad, Athpula bridge, and visit tips.",
  keywords:
    "Lodhi Garden Delhi, Lodhi Garden timings, Lodhi Garden entry fee, Bara Gumbad, Sheesh Gumbad, Sikandar Lodi Tomb, Mohammed Shah Tomb, National Bonsai Park Delhi, Athpula bridge, Lodhi Garden Khan Market, Lodhi Colony Delhi, Delhi Sultanate tombs, South Delhi parks",
  openGraph: {
    title: "Lodhi Garden Travel Guide: Tombs, Timings & Tips",
    description:
      "90 acres of landscaped green dotted with 500-year-old Lodi and Sayyid dynasty tombs — the complete guide to Delhi's favourite park-museum.",
    url: "https://club.kudozz.in/blog/lodhi-garden-delhi-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/fort.jpg",
        width: 1200,
        height: 630,
        alt: "Golden-hour sandstone fort architecture, used here to evoke the centuries-old stone domes and tombs found within Lodhi Garden, Delhi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lodhi Garden Travel Guide: Tombs, Timings & Tips",
    description:
      "90 acres of landscaped green dotted with 500-year-old Lodi and Sayyid dynasty tombs — the complete guide to Delhi's favourite park-museum.",
    images: ["/images/destinations/jaisalmer/fort.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/lodhi-garden-delhi-travel-guide",
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
          headline: "Lodhi Garden Travel Guide: Tombs, Timings & Tips",
          description:
            "Complete Lodhi Garden guide — Delhi's 90-acre park of 15th-century Lodi and Sayyid tombs. Entry timings, the Bara Gumbad, Sheesh Gumbad, Athpula bridge, and visit tips.",
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
            "@id": "https://club.kudozz.in/blog/lodhi-garden-delhi-travel-guide",
          },
          keywords:
            "Lodhi Garden Delhi, Lodhi Garden timings, Bara Gumbad, Sheesh Gumbad, Sikandar Lodi Tomb, Mohammed Shah Tomb, Athpula bridge, National Bonsai Park",
          about: {
            "@type": "Place",
            name: "Lodhi Garden",
            address: {
              "@type": "PostalAddress",
              addressLocality: "New Delhi",
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
                name: "Lodhi Garden",
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
    q: "Is Lodhi Garden free?",
    a: "Yes, entry to Lodhi Garden is completely free for all visitors, with no ticket counter or entry fee at any of its gates. It is a public park maintained by the NDMC, and the only things you can't bring in freely are vehicles, alcohol, and outside food vendors — the park itself has never charged for entry.",
  },
  {
    q: "What is the entry timing for Lodhi Garden?",
    a: "Lodhi Garden is open roughly from sunrise to sunset, extended into the evening — generally around 6 AM to 8 PM in summer months and closer to 7 AM to 7:30 PM in winter, when daylight hours shorten. Timings shift slightly with the season, so it's worth checking current hours before an early-morning or late-evening visit.",
  },
  {
    q: "How old are the tombs in Lodhi Garden?",
    a: "The tombs date from the 15th and early 16th centuries, spanning the Sayyid dynasty (1414–1451) and the Lodi dynasty (1451–1526) that succeeded it. Mohammed Shah's Tomb, the earliest of the group, was built around 1444; Sikandar Lodi's Tomb, the latest, was completed in 1517–18 — making the monuments roughly 500 to 580 years old.",
  },
  {
    q: "Is Lodhi Garden good for morning walks?",
    a: "Yes — it's one of Delhi's most popular spots for exactly that. Wide paved paths loop around lawns and monuments, the tree cover keeps early mornings pleasantly cool, and you'll find joggers, walking groups, and yoga circles out from soon after sunrise, especially on weekends.",
  },
  {
    q: "Can I bring food or have a picnic inside Lodhi Garden?",
    a: "Outside food in small quantities for personal consumption is generally tolerated on the lawns, but the park does not allow alcohol, and there's no formal picnicking infrastructure like tables or designated zones. For a proper meal, Khan Market's cafés are a five-to-ten-minute walk from the Lodhi Road gate.",
  },
  {
    q: "How much time do I need to visit Lodhi Garden?",
    a: "Budget about 1 to 1.5 hours for a comfortable walking loop covering the four main monuments, the Athpula bridge, and the bonsai park. Photographers, birdwatchers in winter, or anyone wanting to simply sit and slow down could easily stretch that to two or three hours.",
  },
  {
    q: "What is the nearest metro station to Lodhi Garden?",
    a: "Jorbagh (Yellow Line) is the closest metro station, roughly a 10-15 minute walk from the park's southern gates. Khan Market (Violet Line) is a similar distance from the Lodhi Road side and conveniently combines a park visit with a stop at Khan Market's restaurants afterward.",
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
  { id: "introduction", title: "Delhi's Park-Museum", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "monuments", title: "The Monuments", level: 2 },
  { id: "bonsai-park", title: "National Bonsai Park", level: 2 },
  { id: "athpula", title: "The Athpula Bridge", level: 2 },
  { id: "modern-life", title: "A Living Delhi Institution", level: 2 },
  { id: "photography", title: "Photography Tips", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat Nearby", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LodhiGardenGuidePage() {
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
              alt="Golden-hour sandstone fort architecture, used here to evoke the centuries-old stone domes and tombs found within Lodhi Garden, Delhi"
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
                { label: "Lodhi Garden", href: null },
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
                "Lodhi Garden",
                "Delhi",
                "Lodi Dynasty",
                "Heritage Walk",
                "Khan Market",
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
              Lodhi Garden: Delhi's Tombs, Timings & Complete Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              90 acres of landscaped green in the middle of South Delhi,
              dotted with 500-year-old tombs from the Sayyid and Lodi
              dynasties — Delhi's favourite morning-walk park, doubling as an
              open-air museum.
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
                  text: "Lodhi Road, New Delhi",
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
                  <h2>Delhi's Park-Museum</h2>
                  <p>
                    <strong>Lodhi Garden</strong> is 90 acres of landscaped
                    green in the middle of{" "}
                    <Link href="/blog/delhi-travel-guide">Delhi</Link>, dotted
                    with 500-year-old tombs from the Sayyid and Lodi
                    dynasties — the two dynasties that ruled the Delhi
                    Sultanate through most of the 15th century and into the
                    early 16th. It is, in practice, two things at once: a
                    genuinely important cluster of pre-Mughal monuments, and
                    the most-used public park in South Delhi, where the
                    tombs are as likely to be a jogger's backdrop as a
                    tourist's photograph.
                  </p>
                  <p>
                    That double identity is what makes Lodhi Garden worth
                    visiting even for travellers who've already covered
                    Delhi's bigger-name monuments. Four major tombs and
                    mosques — Bara Gumbad, Sheesh Gumbad, Mohammed Shah's
                    Tomb, and Sikandar Lodi's Tomb — sit inside grounds that
                    were substantially redesigned twice: once in the 1930s
                    and 40s under the British, and again in the 1960s, when
                    the American landscape architect Garrett Eckbo reworked
                    its paths, tree cover, and open lawns into something
                    closer to the park Delhiites use today.
                  </p>
                  <p>
                    Unlike Red Fort or Qutub Minar, there's no ticket, no
                    security queue, and no fixed circuit — you simply walk
                    in through one of several gates and wander. That
                    informality is exactly why it's earned a permanent place
                    in Delhi's daily life, not just its tourist itineraries.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌳</span> Lodhi Garden at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Lodhi Road, South Delhi",
                        },
                        {
                          icon: "📐",
                          label: "Area",
                          value: "~90 acres",
                        },
                        {
                          icon: "🏛️",
                          label: "Era",
                          value: "Sayyid & Lodi dynasties (1414–1526)",
                        },
                        {
                          icon: "🎟️",
                          label: "Entry",
                          value: "Free",
                        },
                        {
                          icon: "⏰",
                          label: "Timings",
                          value: "~6 AM – 8 PM (sunrise to sunset+)",
                        },
                        {
                          icon: "🚇",
                          label: "Nearest Metro",
                          value: "Jorbagh / Khan Market",
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
                  <h2>Best Time to Visit Lodhi Garden</h2>
                  <p>
                    Because Lodhi Garden is free and outdoors, timing your
                    visit well matters more than for most Delhi monuments —
                    the difference between a crowded midday walk and a quiet
                    golden-hour one is significant.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best for walkers & photographers",
                        text: "Soon after the gates open, the park is at its coolest and quietest — joggers and walking groups are out, but tour groups haven't arrived, and the light on the domes is soft and warm.",
                      },
                      {
                        season: "Golden Hour Evening",
                        emoji: "🌇",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best for photography & atmosphere",
                        text: "The hour before sunset is arguably Lodhi Garden's finest window — long shadows across the lawns, the sandstone monuments lit warm, and a relaxed, sociable crowd of locals rather than tourists.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best season overall",
                        text: "Cool, comfortable temperatures make any time of day pleasant for walking the full loop — the peak season for both locals and visitors.",
                      },
                      {
                        season: "Nov – Feb",
                        emoji: "🐦",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Migratory bird season — a bonus",
                        text: "Winter brings migratory birds to the park's trees and ponds, making early mornings especially rewarding for anyone interested in birdwatching alongside the monuments.",
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
                    <strong>Our pick:</strong> a winter weekday morning,
                    arriving close to opening time. You'll get cool weather,
                    good light, migratory birds in the trees, and a park
                    that's still mostly locals rather than tour groups.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Lodhi Garden</h2>
                  <p>
                    Lodhi Garden sits in one of Delhi's best-connected
                    central neighbourhoods, close to Khan Market and
                    Safdarjung's Tomb, which makes it easy to fold into a
                    South Delhi day out.
                  </p>
                  <ul>
                    <li>
                      <strong>By Metro:</strong> Jorbagh station (Yellow
                      Line) is the closest, about a 10-15 minute walk from
                      the park's southern gates. Khan Market station
                      (Violet Line) is a similar distance from the Lodhi
                      Road side.
                    </li>
                    <li>
                      <strong>By Auto/Cab:</strong> Both are the simplest
                      option if arriving with luggage or in a group — the
                      park has multiple entrances along Lodhi Road, Max
                      Mueller Marg, and near the India International Centre.
                    </li>
                    <li>
                      <strong>On foot from Khan Market:</strong> If you're
                      already at Khan Market, it's an easy 10-minute walk
                      to the nearest gate — a natural way to combine a park
                      visit with lunch or a coffee stop.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Lodhi Garden has several
                    entry gates — arriving via the gate closest to Bara
                    Gumbad (off Lodhi Road) puts you at the natural starting
                    point for the monument walk described below.
                  </div>
                </section>

                {/* ── The Monuments ─────────────────────────────────────── */}
                <section id="monuments">
                  <h2>The Monuments</h2>
                  <p>
                    Four principal structures anchor the park, built across
                    roughly 75 years spanning the end of the Sayyid dynasty
                    and the whole of the Lodi dynasty that followed it. Seen
                    in sequence, they trace a fairly clear line of
                    architectural development — one that later fed directly
                    into the grander garden-tombs of the Mughal era.
                  </p>

                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Historic sandstone fortress architecture, used here to evoke the weathered stone domes and monuments scattered through Lodhi Garden's 90 acres"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <h3>Mohammed Shah's Tomb</h3>
                  <p>
                    Built around 1444, this is the <strong>earliest</strong>{" "}
                    of the garden's tombs — raised for Mohammed Shah, the
                    last ruler of the Sayyid dynasty. It's an octagonal
                    structure with a single central dome ringed by
                    chhatris (domed kiosks), a design that would go on to
                    influence virtually every major Sultanate and early
                    Mughal tomb that followed it in Delhi.
                  </p>

                  <h3>Bara Gumbad</h3>
                  <p>
                    "Bara Gumbad" translates to "Big Dome" — a large,
                    square domed structure built in 1494, standing alongside
                    an attached mosque and a mehmaan khana (guest house)
                    that together form a small, self-contained complex.
                    Unusually, Bara Gumbad contains no grave at all, and
                    historians still debate whether it functioned as a
                    gateway, a gathering hall, or something else entirely.
                  </p>

                  <h3>Sheesh Gumbad</h3>
                  <p>
                    "Sheesh Gumbad" means "Glass Dome," named for the
                    glazed blue and turquoise tilework that once covered
                    much of its facade — traces of it are still visible
                    today. Like Bara Gumbad, its exact occupants aren't
                    definitively known, though it's generally believed to
                    hold the graves of several Lodi-era nobles.
                  </p>

                  <h3>Sikandar Lodi's Tomb</h3>
                  <p>
                    The <strong>latest</strong> of the four, completed in
                    1517-18 by Sikandar Lodi's son and successor, Ibrahim
                    Lodi. What sets it apart is its setting: the tomb sits
                    inside its own high rubble-walled enclosure — a
                    garden-within-the-garden — making it the first tomb in
                    Delhi built specifically inside a walled garden
                    compound. That layout directly foreshadows the grander
                    Mughal garden-tombs that followed, most famously
                    Humayun's Tomb and, eventually, the Taj Mahal.
                  </p>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Walk the monuments roughly in
                    the order they were built — Mohammed Shah's Tomb, then
                    Bara Gumbad, Sheesh Gumbad, and finally Sikandar Lodi's
                    Tomb — to see the architectural progression toward the
                    walled garden-tomb model firsthand.
                  </div>
                </section>

                {/* ── Bonsai Park ────────────────────────────────────────── */}
                <section id="bonsai-park">
                  <h2>National Bonsai Park</h2>
                  <p>
                    Tucked within Lodhi Garden's grounds is the{" "}
                    <strong>National Bonsai Park</strong>, a smaller,
                    dedicated section maintained by the NDMC that houses a
                    collection of bonsai trees — some trained and shaped
                    over decades. It's a quieter, more contemplative corner
                    of the park, and a genuine change of pace from the open
                    lawns and monuments elsewhere, worth a short detour if
                    you're interested in horticulture or simply want a calm
                    spot to sit.
                  </p>
                </section>

                {/* ── Athpula ────────────────────────────────────────────── */}
                <section id="athpula">
                  <h2>The Athpula Bridge</h2>
                  <p>
                    Near Sikandar Lodi's Tomb, spanning a stream that once
                    fed the garden, stands the <strong>Athpula</strong>{" "}
                    ("eight-piered bridge") — a Mughal-era stone bridge
                    built during Emperor Akbar's reign in the late 16th
                    century, making it later than the tombs around it
                    despite sitting inside the same park. Athpula is one of
                    the last surviving Mughal-era bridges in Delhi, and its
                    seven arches (despite the "eight" in its name) still
                    carry a footpath across the dry streambed today —
                    an easy, easy-to-miss stop that rewards a slower walk
                    through the park's northern end.
                  </p>
                </section>

                {/* ── Modern Life ────────────────────────────────────────── */}
                <section id="modern-life">
                  <h2>A Living Delhi Institution</h2>
                  <p>
                    What separates Lodhi Garden from a typical
                    monument-and-ticket-counter site is how completely it's
                    woven into ordinary Delhi life. On any given morning or
                    evening, the park is genuinely full of people who have
                    nothing to do with tourism at all:
                  </p>
                  <ul>
                    <li>
                      <strong>Joggers and walkers:</strong> The park's
                      paved loop is one of South Delhi's most popular
                      fitness circuits, busy from soon after sunrise through
                      mid-morning, and again in the evening.
                    </li>
                    <li>
                      <strong>Yoga and exercise groups:</strong> Informal
                      groups gather on the lawns most mornings, especially
                      on weekends, often near the open grass close to Bara
                      Gumbad.
                    </li>
                    <li>
                      <strong>Courting couples:</strong> Lodhi Garden has
                      long had a reputation, half-joking and half-earnest,
                      as one of Delhi's most reliable spots for young couples
                      seeking a quiet bench or a patch of shade.
                    </li>
                    <li>
                      <strong>Photographers:</strong> Between the domes,
                      the tree cover, and the changing seasonal light, the
                      park draws a steady stream of hobbyist and
                      professional photographers, especially around golden
                      hour and during pre-wedding shoots.
                    </li>
                    <li>
                      <strong>Families and picnicking groups:</strong>{" "}
                      Weekend afternoons bring families out onto the lawns,
                      particularly in the cooler months.
                    </li>
                  </ul>
                  <p>
                    None of this crowds out the monuments — if anything, it
                    makes visiting Lodhi Garden feel less like sightseeing
                    and more like briefly joining in on a piece of everyday
                    Delhi.
                  </p>
                </section>

                {/* ── Photography ────────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography Tips</h2>
                  <ul>
                    <li>
                      <strong>Shoot at golden hour:</strong> Early morning
                      or the last hour before sunset gives the sandstone
                      and tile-work its warmest, most flattering light —
                      harsh midday sun flattens the domes considerably.
                    </li>
                    <li>
                      <strong>Use the domes as framing devices:</strong>{" "}
                      Bara Gumbad's arched gateway and Sikandar Lodi's Tomb's
                      enclosure walls both offer natural frames for wider
                      shots of the park beyond.
                    </li>
                    <li>
                      <strong>Come back after monsoon:</strong> The lawns
                      are at their greenest from late August through
                      October, offering a striking contrast against the
                      grey-brown stone monuments.
                    </li>
                    <li>
                      <strong>Bring a longer lens for birds:</strong> Winter
                      months bring migratory species to the park's trees
                      and water features — a modest telephoto lens goes a
                      long way here.
                    </li>
                    <li>
                      <strong>Mind the crowds at the Sheesh Gumbad tile
                      detail:</strong> The remaining glazed tilework is a
                      popular close-up subject — arrive early if you want
                      it without other visitors in frame.
                    </li>
                  </ul>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (1-1.5 Hours)</h2>
                  <p>
                    Lodhi Garden doesn't need a full day, but it rewards an
                    unhurried hour or so far more than a rushed 20-minute
                    walkthrough. Here's a simple loop that covers everything
                    worth seeing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0-15 min",
                        title: "Enter & Mohammed Shah's Tomb",
                        color: "bg-amber-700",
                        activities: [
                          "Enter via the Lodhi Road / Bara Gumbad gate",
                          "Walk to Mohammed Shah's Tomb, the earliest structure",
                          "Take in the octagonal layout and surrounding chhatris",
                        ],
                      },
                      {
                        day: "15-35 min",
                        title: "Bara Gumbad & Sheesh Gumbad",
                        color: "bg-forest-600",
                        activities: [
                          "Bara Gumbad, its mosque, and mehmaan khana complex",
                          "A short walk to Sheesh Gumbad and its tile fragments",
                          "Photo stops at both domes if the light is good",
                        ],
                      },
                      {
                        day: "35-55 min",
                        title: "Sikandar Lodi's Tomb & Athpula",
                        color: "bg-sky-600",
                        activities: [
                          "Walk north to the walled Sikandar Lodi's Tomb enclosure",
                          "Continue to the Athpula bridge nearby",
                          "Pause by the streambed and surrounding tree cover",
                        ],
                      },
                      {
                        day: "55-90 min",
                        title: "Bonsai Park & the Lawns",
                        color: "bg-stone-600",
                        activities: [
                          "A short detour to the National Bonsai Park",
                          "Unhurried walk back through the open lawns",
                          "Exit toward Khan Market for food nearby",
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
                    * Add 30-45 minutes if you're photographing seriously,
                    birdwatching in winter, or simply want to sit on the
                    lawns for a while before moving on.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Nearby</h2>
                  <p>
                    Lodhi Garden itself has no real food options beyond a
                    few basic stalls near some gates, but Khan Market — a
                    short walk from the Lodhi Road side — is one of Delhi's
                    best dining districts and the natural place to head
                    afterward.
                  </p>
                  <ul>
                    <li>
                      <strong>Khan Market cafés:</strong> A dense cluster of
                      cafés and bistros covering everything from all-day
                      breakfast spots to wine bars, popular with both locals
                      and expatriates.
                    </li>
                    <li>
                      <strong>Kathi rolls and quick bites:</strong> Khan
                      Market has several well-known spots for rolls and
                      quick North Indian food if you want something faster
                      and less formal than a sit-down café.
                    </li>
                    <li>
                      <strong>Coffee and dessert stops:</strong> Multiple
                      specialty coffee shops around Khan Market make it an
                      easy place to unwind after the walk with a coffee or
                      a slow lunch.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Lodhi Garden itself costs nothing — your only real
                    expenses are getting there and, if you choose, food
                    afterward at Khan Market.
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
                          ["Park entry", "Free", "Free", "Free"],
                          [
                            "Transport to/from park",
                            "₹40 (metro)",
                            "₹200 (auto/cab)",
                            "₹500 (private cab)",
                          ],
                          [
                            "Food at Khan Market",
                            "₹300",
                            "₹900",
                            "₹2,500+",
                          ],
                          [
                            "Photography (guide/tripod, optional)",
                            "—",
                            "₹500",
                            "₹2,000+",
                          ],
                          ["Total (approx.)", "₹340", "₹1,600", "₹5,000+"],
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
                    * Figures are per person, per visit. Lodhi Garden pairs
                    naturally with a longer South Delhi day — see our{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi travel guide
                    </Link>{" "}
                    for how to combine it with nearby sights.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Lodhi Garden</h2>
                  <ul>
                    <li>
                      <strong>Check seasonal timings before you go:</strong>{" "}
                      Gate hours shift with sunrise and sunset across the
                      year — roughly 6 AM to 8 PM in summer and closer to
                      7 AM to 7:30 PM in winter.
                    </li>
                    <li>
                      <strong>No food stalls or alcohol inside:</strong>{" "}
                      Alcohol is not permitted anywhere in the park, and
                      formal food/drink stalls are minimal — eat before or
                      after your visit rather than counting on options
                      inside.
                    </li>
                    <li>
                      <strong>Stay off restricted monument interiors:</strong>{" "}
                      Some inner chambers and upper levels of the tombs are
                      closed to visitors for conservation reasons — admire
                      from the accessible areas rather than attempting to
                      climb or enter roped-off sections.
                    </li>
                    <li>
                      <strong>No vehicles inside the park:</strong> Lodhi
                      Garden is a pedestrian-only space once you're past the
                      gates — park or get dropped off outside.
                    </li>
                    <li>
                      <strong>Combine with nearby sights:</strong> Safdarjung's
                      Tomb, Khan Market, and the{" "}
                      <Link href="/blog/hauz-khas-delhi-travel-guide">
                        Hauz Khas
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/nizamuddin-delhi-travel-guide">
                        Nizamuddin
                      </Link>{" "}
                      areas are all within easy reach for a fuller South
                      Delhi heritage day.
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
                          "Visit early morning or golden-hour evening",
                          "Walk the monuments in their historical order",
                          "Check the day's opening and closing times",
                          "Carry water, especially in warmer months",
                          "Combine the visit with Khan Market food afterward",
                          "Bring a telephoto lens for winter birdwatching",
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
                          "Bring alcohol or expect food stalls inside",
                          "Enter roped-off or restricted monument interiors",
                          "Assume vehicle access past the main gates",
                          "Visit at midday if photography is the priority",
                          "Rush the walk — it rewards an unhurried pace",
                          "Skip checking timings around dusk visits",
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
                    <strong>🗺️ Extend the trip:</strong> Lodhi Garden sits
                    naturally alongside a wider{" "}
                    <Link href="/blog/south-delhi-travel-guide">
                      South Delhi
                    </Link>{" "}
                    itinerary — pair it with the reservoir and ruins at{" "}
                    <Link href="/blog/hauz-khas-delhi-travel-guide">
                      Hauz Khas
                    </Link>{" "}
                    or the dargah and lanes of{" "}
                    <Link href="/blog/nizamuddin-delhi-travel-guide">
                      Nizamuddin
                    </Link>{" "}
                    for a full day of Delhi's lesser-crowded heritage sites.
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
                  "Lodhi Garden",
                  "Delhi",
                  "Lodi Dynasty",
                  "Sayyid Dynasty",
                  "Khan Market",
                  "South Delhi",
                  "Heritage Walk",
                  "Delhi Parks",
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

              <RelatedPostsGrid currentSlug="lodhi-garden-delhi-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="lodhi-garden-delhi-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
