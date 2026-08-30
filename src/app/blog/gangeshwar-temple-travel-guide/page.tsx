// src/app/blog/gangeshwar-temple-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Gangeshwar Temple Diu: Sea-Washed Shiva Shrine Guide",
  description:
    "Gangeshwar Temple travel guide — Diu's coastal Shiva shrine with five natural rock lingams washed by the tide. Best time, tide timing, safety and etiquette.",
  keywords:
    "Gangeshwar Temple, Gangeshwar Temple Diu, Diu Shiva temple, five lingams Diu, Diu rock temple, Gangeshwar Mahadev, Diu coastal temple, Diu things to do, Diu travel guide, tide temple Diu",
  openGraph: {
    title: "Gangeshwar Temple Diu: Sea-Washed Shiva Shrine Guide",
    description:
      "Five natural rock lingams set among the boulders on Diu's coastline, partly submerged by the tide — a guide to visiting Gangeshwar Temple respectfully and safely.",
    url: "https://club.kudozz.in/blog/gangeshwar-temple-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/beach.jpg",
        width: 1200,
        height: 630,
        alt: "Waves breaking over dark coastal rocks, evoking the rocky shoreline setting of Gangeshwar Temple in Diu",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangeshwar Temple Diu: Sea-Washed Shiva Shrine Guide",
    description:
      "Five natural rock lingams set among the boulders on Diu's coastline, partly submerged by the tide — a guide to visiting Gangeshwar Temple respectfully and safely.",
    images: ["/images/destinations/goa/beach.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gangeshwar-temple-travel-guide",
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
          headline: "Gangeshwar Temple Diu: Sea-Washed Shiva Shrine Guide",
          description:
            "Gangeshwar Temple travel guide — Diu's coastal Shiva shrine with five natural rock lingams washed by the tide. Best time, tide timing, safety and etiquette.",
          image: "https://club.kudozz.in/images/destinations/goa/beach.jpg",
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
            "@id": "https://club.kudozz.in/blog/gangeshwar-temple-travel-guide",
          },
          keywords:
            "Gangeshwar Temple, Gangeshwar Temple Diu, Diu Shiva temple, five lingams Diu, Diu rock temple, Gangeshwar Mahadev",
          about: {
            "@type": "Place",
            name: "Gangeshwar Temple",
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
                name: "Gangeshwar Temple",
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
    q: "What is special about Gangeshwar Temple?",
    a: "Gangeshwar Temple is unusual because its five Shivlings aren't housed inside a conventional temple building — they're natural rock formations set directly among the boulders at the water's edge on Diu's southern coast, with waves washing over them at high tide. It's as much a dramatic natural setting as it is a place of worship.",
  },
  {
    q: "What is the best time to visit Gangeshwar Temple?",
    a: "Low tide is the best time, since it's when all five lingams are visible above the water. Early morning or the hours around sunset also work well for cooler weather and better light for photos. Checking a local tide timing before you go is genuinely useful here, not just a nice-to-have.",
  },
  {
    q: "Is Gangeshwar Temple safe to visit?",
    a: "Yes, with sensible precautions. The rocks are naturally uneven and can be slippery, especially near the waterline, so footing needs care. It's also worth being mindful of the tide schedule so you're not caught out on the rocks as the water rises. Visiting during daylight and low tide, and keeping a reasonable distance from the breaking waves, covers most of the risk.",
  },
  {
    q: "How far is Gangeshwar Temple from Diu town?",
    a: "Gangeshwar Temple is a short distance from Diu town, roughly a 15–20 minute drive along the coastal road on the southern side of Diu island. It's easily combined with other nearby sights like Naida Caves and Diu Fort in a single half-day outing.",
  },
  {
    q: "Are the five lingams at Gangeshwar Temple always visible?",
    a: "No — visibility depends entirely on the tide. At low tide, all five are clearly visible sitting among the rocks. As the tide comes in, seawater gradually covers them, sometimes fully submerging one or more, which is considered a natural and characterful part of the site rather than a flaw.",
  },
  {
    q: "What is the connection between Gangeshwar Temple and the Pandavas?",
    a: "Local tradition associates the temple with the Pandavas of the Mahabharata, who are said to have installed the five lingams here during their travels. This is a belief held and passed down by local worshippers rather than a claim backed by historical or archaeological record, and it's best approached and shared as tradition and legend.",
  },
  {
    q: "Do I need to remove my footwear at Gangeshwar Temple?",
    a: "Yes. As with any active Hindu shrine, footwear should be removed before approaching the lingams, and modest dress is appreciated. Because the approach is over natural rock rather than a paved courtyard, many visitors carry their footwear rather than leaving it far away, and watch their footing carefully while barefoot.",
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
  { id: "introduction", title: "Gangeshwar Temple: A Shrine on the Rocks", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "setting", title: "The Setting & Atmosphere", level: 2 },
  { id: "etiquette", title: "Visiting Etiquette", level: 2 },
  { id: "photography", title: "Photography", level: 2 },
  { id: "safety", title: "Safety Notes", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "nearby", title: "Nearby Sights", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GangeshwarTempleGuidePage() {
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
              src="/images/destinations/goa/beach.jpg"
              alt="Waves breaking over dark coastal rocks, evoking the rocky shoreline setting of Gangeshwar Temple in Diu"
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
                { label: "Gangeshwar Temple", href: null },
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
                "Gangeshwar Temple",
                "Diu",
                "Shiva Temple",
                "Coastal Shrine",
                "Heritage",
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
              Gangeshwar Temple, Diu: A Shiva Shrine Washed by the Sea
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Five natural rock lingams set among the boulders on Diu's
              southern coastline, partly covered by the tide — a complete
              guide to visiting Gangeshwar Temple with the right timing,
              safety sense, and respect.
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
                  text: "Diu, Daman & Diu",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,950 words",
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
                  <h2>Gangeshwar Temple: A Shrine on the Rocks</h2>
                  <p>
                    <strong>Gangeshwar Temple</strong> is an ancient shrine
                    dedicated to <strong>Lord Shiva</strong> on the rocky
                    southern coastline of{" "}
                    <Link href="/blog/diu-travel-guide">Diu</Link>, part of the
                    Union Territory of{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu
                    </Link>
                    . What sets it apart from almost any other Shiva temple in
                    India is that it isn't really a building at all — its five
                    Shivlings are natural rock formations rising directly out
                    of the boulders at the water's edge, with the Arabian Sea
                    washing over them as the tide moves in and out.
                  </p>
                  <p>
                    Local tradition holds that the five lingams were installed
                    here by the <strong>Pandavas</strong> of the Mahabharata
                    during their travels — a belief passed down through
                    generations of worshippers and woven into how the site is
                    understood locally. It's worth treating this the way it's
                    meant: as tradition and legend, a story that gives the
                    place meaning, rather than a claim of verified history.
                  </p>
                  <p>
                    What is verifiable, and genuinely remarkable, is the site
                    itself — a small, active shrine set into a wild,
                    weather-beaten stretch of coast, unlike any conventional
                    temple complex. This guide covers when to go, how the tide
                    affects what you'll actually see, how to visit
                    respectfully, and how to stay safe on the rocks.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕉️</span> Gangeshwar Temple at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Southern coast, Diu island",
                        },
                        {
                          icon: "🛕",
                          label: "Deity",
                          value: "Lord Shiva — five natural lingams",
                        },
                        {
                          icon: "🌊",
                          label: "Best Viewing",
                          value: "Low tide",
                        },
                        {
                          icon: "🚗",
                          label: "From Diu Town",
                          value: "~15–20 min drive",
                        },
                        {
                          icon: "⏱️",
                          label: "Visit Duration",
                          value: "30–45 minutes",
                        },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Free",
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
                  <h2>Best Time to Visit Gangeshwar Temple</h2>
                  <p>
                    Timing matters more here than at almost any other temple
                    you'll visit in Diu, because the tide genuinely changes
                    what you see. At <strong>low tide</strong>, all five
                    lingams sit clearly exposed among the rocks, easy to
                    approach and view. As the tide rises, seawater gradually
                    creeps over them, and at high tide the lingams can be
                    partly or fully submerged, with waves breaking directly
                    over the spot.
                  </p>
                  <p>
                    Neither state is "wrong" — the site is meant to be seen
                    this way, and watching the sea cover and uncover the
                    lingams is part of what makes Gangeshwar distinctive. But
                    if your goal is to see all five lingams clearly, plan
                    around the tide table rather than an arbitrary time of
                    day.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Low Tide",
                        emoji: "🪨",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best for viewing & photos",
                        text: "All five lingams are visible on dry or shallow rock, making this the ideal window for darshan and photography. Check local tide timings before setting out — these shift daily.",
                      },
                      {
                        season: "High Tide",
                        emoji: "🌊",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Dramatic, but limited access",
                        text: "Waves wash over the rocks and can submerge the lingams partly or fully. Striking to watch from a safe distance, but not the time to approach closely.",
                      },
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Cool, quiet, good light",
                        text: "Fewer visitors and softer light make mornings pleasant — pair this with a low-tide window if the schedule allows.",
                      },
                      {
                        season: "Sunset",
                        emoji: "🌇",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Most photogenic time",
                        text: "Golden light over the dark rocks and open sea makes for the most striking photographs of the day, especially if it coincides with a receding tide.",
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
                    <strong>Our pick:</strong> Check a tide chart for Diu the
                    evening before, and aim to arrive within an hour or two of
                    low tide. Combine it with sunset when the timing lines up
                    — it's the single best window for both darshan and
                    photographs.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Gangeshwar Temple</h2>
                  <p>
                    Gangeshwar Temple sits a short distance from{" "}
                    <Link href="/blog/diu-travel-guide">Diu town</Link>, along
                    the coastal road on the island's southern edge, and is
                    easy to reach independently.
                  </p>
                  <ul>
                    <li>
                      <strong>By moped or bike:</strong> The most popular way
                      to get there — rentals are cheap and widely available in
                      Diu town, and the coastal road makes for a pleasant
                      15–20 minute ride with sea views along the way.
                    </li>
                    <li>
                      <strong>By auto-rickshaw or taxi:</strong> A quick and
                      easy option if you'd rather not self-drive; most drivers
                      in Diu know the temple well since it's a regular stop on
                      local sightseeing routes.
                    </li>
                    <li>
                      <strong>Combined with other sights:</strong> Gangeshwar
                      is often visited alongside{" "}
                      <Link href="/blog/naida-caves-travel-guide">
                        Naida Caves
                      </Link>{" "}
                      and{" "}
                      <Link href="/blog/diu-fort-travel-guide">Diu Fort</Link>,
                      all of which sit within a similar radius of the old
                      town, making a single half-day loop practical.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> There's a short walk from the
                    parking area down to the rocks themselves — wear footwear
                    you're comfortable removing and carrying, since you'll
                    need to go barefoot for the final stretch to the lingams.
                  </div>
                </section>

                {/* ── Setting & Atmosphere ──────────────────────────────── */}
                <section id="setting">
                  <h2>The Setting & Atmosphere</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Waves crashing against dark rocks along a coastline, similar to the boulder-strewn shore at Gangeshwar Temple"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    There's no ornate gopuram or courtyard here — Gangeshwar
                    announces itself with sound before sight. Waves crash
                    continuously against dark, weathered rocks that look
                    almost volcanic, and the path down from the road narrows
                    into a scramble across uneven boulders before the lingams
                    come into view, set low among the stones right at the
                    waterline.
                  </p>
                  <p>
                    It's a genuinely dramatic natural shrine rather than a
                    conventional temple building, and that's precisely its
                    character — the sea isn't kept out with walls or
                    embankments, it's simply part of the site, arriving and
                    retreating on its own schedule twice a day. Small
                    offerings, vermilion, and the sound of temple bells mix
                    with the constant rhythm of the surf, and worshippers
                    quietly time their prayers around the water rather than
                    the other way around.
                  </p>
                  <p>
                    Even for visitors without a religious connection to the
                    site, the setting alone — an untamed stretch of Diu's
                    coastline, rock, spray, and open sea — makes it worth the
                    short detour.
                  </p>
                </section>

                {/* ── Etiquette ─────────────────────────────────────────── */}
                <section id="etiquette">
                  <h2>Respectful Visiting Etiquette</h2>
                  <p>
                    Gangeshwar is an active place of worship, not a tourist
                    curiosity, and it's worth visiting with that in mind.
                  </p>
                  <ul>
                    <li>
                      <strong>Remove footwear:</strong> As at any Hindu
                      shrine, footwear comes off before approaching the
                      lingams. Because the ground here is natural rock rather
                      than a paved courtyard, many visitors carry their
                      sandals in hand rather than leaving them far away.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> Shoulders and knees
                      covered is a safe default, even though this is a beach
                      adjacent site rather than a formal temple complex.
                    </li>
                    <li>
                      <strong>Respect active worship:</strong> Local devotees
                      regularly visit to pray, especially around low tide —
                      keep a respectful distance and a quiet tone if a ritual
                      or prayer is underway rather than treating it as a photo
                      backdrop.
                    </li>
                    <li>
                      <strong>Leave no litter:</strong> The rocks and shoreline
                      are as much a natural site as a religious one — carry
                      out anything you bring in.
                    </li>
                    <li>
                      <strong>Ask before photographing people:</strong>{" "}
                      Worshippers and priests at the site should be asked
                      before you photograph them directly, even if the setting
                      itself is fair game.
                    </li>
                  </ul>
                </section>

                {/* ── Photography ───────────────────────────────────────── */}
                <section id="photography">
                  <h2>Photography at Gangeshwar Temple</h2>
                  <p>
                    Gangeshwar is one of the more genuinely photogenic spots
                    in Diu precisely because it doesn't look like anything
                    else — dark, textured rock, breaking waves, and small
                    lingams set right at the edge of the sea make for
                    compositions you won't get at a conventional temple.
                  </p>
                  <ul>
                    <li>
                      <strong>Sunset is prime time:</strong> Warm, low light
                      against the dark rocks and open water produces the most
                      striking images of the day.
                    </li>
                    <li>
                      <strong>Low tide for clarity:</strong> If you want clean
                      shots of all five lingams, low tide is essential — at
                      high tide they're often partly hidden under moving
                      water.
                    </li>
                    <li>
                      <strong>Mind your footing while shooting:</strong> It's
                      easy to get absorbed in a shot and forget you're
                      standing on wet, uneven rock — keep at least part of
                      your attention on where you're stepping.
                    </li>
                    <li>
                      <strong>Protect your gear from spray:</strong> Waves can
                      throw spray further than expected, especially as the
                      tide turns — keep phones and cameras shielded when
                      you're close to the water's edge.
                    </li>
                  </ul>
                </section>

                {/* ── Safety ────────────────────────────────────────────── */}
                <section id="safety">
                  <h2>Safety Notes</h2>
                  <p>
                    Gangeshwar's appeal comes directly from its wild, natural
                    setting — which also means it carries a few genuine risks
                    that a paved temple complex wouldn't.
                  </p>
                  <ul>
                    <li>
                      <strong>Slippery rocks:</strong> The boulders near the
                      lingams are frequently wet and can be slick with algae —
                      move slowly and test your footing rather than walking at
                      a normal pace.
                    </li>
                    <li>
                      <strong>Watch the tide, not just the clock:</strong> The
                      tide can rise faster than it seems, and it's possible to
                      end up cut off on an outer rock or caught by a
                      larger-than-expected wave if you're not paying
                      attention. Check tide timings before you go and keep an
                      eye on the water while you're there.
                    </li>
                    <li>
                      <strong>Avoid the rocks during rough seas or monsoon
                      swells:</strong> Wave action is noticeably stronger
                      during the monsoon months — this isn't the best season
                      for a close approach to the lingams.
                    </li>
                    <li>
                      <strong>Supervise children closely:</strong> The uneven,
                      wet terrain right at the waterline isn't a place for
                      kids to wander unsupervised.
                    </li>
                    <li>
                      <strong>Visit in daylight:</strong> There's no lighting
                      on the rocks after dark, which makes footing and tide
                      awareness much harder to judge.
                    </li>
                  </ul>
                  <div
                    className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Safety first:</strong> If in doubt about the
                    tide or the sea state, view the lingams from a safe
                    distance rather than climbing further out onto wet rock —
                    the site is still worth the visit even without stepping
                    right up to the water's edge.
                  </div>
                </section>

                {/* ── Visit Plan ────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Gangeshwar doesn't need a long visit — most people spend{" "}
                    <strong>30 to 45 minutes</strong> here, which is enough to
                    take in the setting, offer prayers if that's part of your
                    visit, and get photographs without rushing.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "0–10 min",
                        title: "Arrive & Approach",
                        color: "bg-amber-700",
                        activities: [
                          "Park near the access point and remove footwear",
                          "Walk the short, uneven path down to the rocks",
                          "Take in the setting — sound of the sea before sight of the shrine",
                        ],
                      },
                      {
                        day: "10–30 min",
                        title: "Darshan & the Site",
                        color: "bg-forest-600",
                        activities: [
                          "View the five lingams (tide-dependent visibility)",
                          "Offer prayers respectfully if that's part of your visit",
                          "Take photographs, staying mindful of footing and spray",
                        ],
                      },
                      {
                        day: "30–45 min",
                        title: "Linger or Move On",
                        color: "bg-sky-600",
                        activities: [
                          "Sit and take in the coastline for a few extra minutes",
                          "Head back up to the road, footwear back on",
                          "Continue on to Naida Caves or Diu Fort nearby",
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
                </section>

                {/* ── Nearby ────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby Sights</h2>
                  <p>
                    Gangeshwar sits close enough to several of Diu's other
                    highlights that it's easy to build into a single loop
                    rather than a standalone trip.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/naida-caves-travel-guide">
                          Naida Caves
                        </Link>
                      </strong>
                      : Sun-dappled sandstone caves near the fort, a quick and
                      popular photo stop on the same side of the island.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/diu-fort-travel-guide">
                          Diu Fort
                        </Link>
                      </strong>
                      : The 16th-century Portuguese sea fort with bastions,
                      cannons, and sweeping views of the coastline — Diu's
                      unmissable heritage site.
                    </li>
                    <li>
                      <strong>Diu old town:</strong> Narrow lanes lined with
                      pastel Portuguese-era houses and churches, a short drive
                      back toward the centre of the island.
                    </li>
                    <li>
                      <strong>Nagoa Beach:</strong> A calm, crescent-shaped
                      beach elsewhere on the island — a good contrast after
                      Gangeshwar's rougher, rockier coastline.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> For a full picture of what
                    Diu and the wider Union Territory offer, see our{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Daman & Diu travel guide
                    </Link>{" "}
                    covering forts, beaches, and a complete weekend itinerary.
                  </div>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Gangeshwar Temple itself is free to visit — the only real
                    cost is getting there and back from Diu town.
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
                          ["Temple entry", "Free", "Free", "Free"],
                          [
                            "Transport (round trip)",
                            "Moped ₹100–₹150",
                            "Auto-rickshaw ₹300–₹400",
                            "Private taxi ₹600–₹900",
                          ],
                          [
                            "Time on-site",
                            "30–45 min",
                            "30–45 min",
                            "30–45 min",
                          ],
                          [
                            "Combined half-day trip*",
                            "₹150–₹300",
                            "₹400–₹700",
                            "₹900–₹1,500",
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
                    * Combined half-day trip includes Gangeshwar Temple, Naida
                    Caves, and Diu Fort in a single outing. Rates are
                    approximate and vary by season and negotiation.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Gangeshwar Temple</h2>
                  <ul>
                    <li>
                      <strong>Check the tide before you go:</strong> A quick
                      local tide-time check saves a wasted trip if the lingams
                      happen to be submerged when you arrive.
                    </li>
                    <li>
                      <strong>Go early or late in the day:</strong> Cooler
                      temperatures, softer light, and often calmer conditions
                      make mornings and evenings the most pleasant times to
                      visit.
                    </li>
                    <li>
                      <strong>Wear grippy, easy-to-remove footwear:</strong>{" "}
                      You'll need to go barefoot on the rocks near the
                      lingams, so simple sandals or slip-ons beat laced shoes.
                    </li>
                    <li>
                      <strong>Carry a small towel:</strong> Sea spray reaches
                      further than expected near the water's edge.
                    </li>
                    <li>
                      <strong>Combine with nearby sights:</strong> Pair the
                      visit with Naida Caves and Diu Fort for an efficient
                      half-day loop rather than a standalone trip.
                    </li>
                    <li>
                      <strong>Treat the Pandava legend as tradition:</strong>{" "}
                      It's a meaningful part of the site's story for local
                      worshippers — share and enjoy it as legend rather than
                      presenting it as documented history.
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
                          "Check tide timings before setting out",
                          "Visit during low tide to see all five lingams",
                          "Remove footwear before approaching the shrine",
                          "Move carefully on wet, uneven rocks",
                          "Dress modestly and stay quiet near active worship",
                          "Combine the trip with Naida Caves and Diu Fort",
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
                          "Climb far out on the rocks near high tide",
                          "Ignore the sound or size of incoming waves",
                          "Visit after dark or during rough monsoon seas",
                          "Let children wander the rocks unsupervised",
                          "Treat active worship as a photo backdrop",
                          "Present the Pandava legend as verified history",
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
                    <strong>🗺️ Extend the trip:</strong> Planning a longer stay
                    on the island? Our full{" "}
                    <Link href="/blog/diu-travel-guide">Diu travel guide</Link>{" "}
                    covers the fort, old town, beaches, and a complete
                    itinerary beyond this one shrine.
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
                  "Gangeshwar Temple",
                  "Diu",
                  "Daman and Diu",
                  "Shiva Temple",
                  "Coastal Shrine",
                  "Heritage",
                  "Pilgrimage",
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

              <RelatedPostsGrid currentSlug="gangeshwar-temple-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gangeshwar-temple-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
