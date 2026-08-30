// src/app/blog/satmaliya-deer-sanctuary-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Satmaliya Deer Sanctuary: Visit Guide &amp; Tips",
  description:
    "Planning a visit to Satmaliya Deer Sanctuary near Khanvel? Here's how to reach it from Silvassa, what to expect, best time to go, and how to pair it with Madhuban Dam.",
  keywords:
    "Satmaliya Deer Sanctuary, Satmaliya Deer Park Khanvel, deer sanctuary near Silvassa, Khanvel wildlife, Dadra and Nagar Haveli wildlife sanctuary, spotted deer sanctuary Silvassa, Madhuban Dam Khanvel trip, DNH forest sanctuary",
  openGraph: {
    title: "Satmaliya Deer Sanctuary: Visit Guide & Tips",
    description:
      "A small forested deer sanctuary near Khanvel, Dadra & Nagar Haveli — how to reach it, what to expect, and how to combine it with Madhuban Dam.",
    url: "https://club.kudozz.in/blog/satmaliya-deer-sanctuary-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/goa/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Generic representative forest and woodland landscape, evocative of the tree cover around Khanvel's forest belt",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Satmaliya Deer Sanctuary: Visit Guide & Tips",
    description:
      "How to reach Satmaliya Deer Sanctuary from Silvassa, what to expect, and how to pair it with Madhuban Dam and Khanvel.",
    images: ["/images/destinations/goa/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/satmaliya-deer-sanctuary-travel-guide",
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
          headline: "Satmaliya Deer Sanctuary: Visit Guide & Tips",
          description:
            "Planning a visit to Satmaliya Deer Sanctuary near Khanvel? Here's how to reach it from Silvassa, what to expect, best time to go, and how to pair it with Madhuban Dam.",
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
            "@id": "https://club.kudozz.in/blog/satmaliya-deer-sanctuary-travel-guide",
          },
          keywords:
            "Satmaliya Deer Sanctuary, Khanvel wildlife, Dadra and Nagar Haveli wildlife sanctuary, spotted deer sanctuary Silvassa",
          about: {
            "@type": "Place",
            name: "Satmaliya Deer Sanctuary",
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
                name: "Satmaliya Deer Sanctuary",
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
    q: "Is Satmaliya Deer Sanctuary worth visiting?",
    a: "If you're already in or near Silvassa, yes — it's a pleasant, low-key detour to see spotted deer and the region's forest cover, and it pairs naturally with a Khanvel and Madhuban Dam outing. It isn't a major wildlife destination on the scale of a national park, so go with modest expectations of a quiet nature stop rather than a big-ticket safari.",
  },
  {
    q: "How far is Satmaliya Deer Sanctuary from Silvassa?",
    a: "It's a short drive from central Silvassa, in the Khanvel area of Dadra & Nagar Haveli — comfortably doable as part of a half-day loop that also covers Khanvel town and Madhuban Dam. Exact travel time will depend on traffic and your starting point within Silvassa, so it's worth confirming the route with a local driver or maps app on the day.",
  },
  {
    q: "What animals can be seen at Satmaliya Deer Sanctuary?",
    a: "The headline draw is spotted deer (chital), which the sanctuary is best known for. Being part of the wider forest belt around Khanvel, you may also come across other native birds and smaller wildlife typical of this region's deciduous forest, though we'd rather not overpromise specific species counts — treat any sighting beyond the deer as a bonus rather than a guarantee.",
  },
  {
    q: "Is there an entry fee for Satmaliya Deer Sanctuary?",
    a: "Small sanctuaries of this kind in Dadra & Nagar Haveli typically charge a modest nominal entry fee, sometimes with a small extra charge for vehicles or cameras, but rates and rules can change. Confirm current fees and timings locally in Khanvel or Silvassa before you go, rather than relying on older listings online.",
  },
  {
    q: "What is the best time of day to visit?",
    a: "Early morning or late afternoon, when temperatures are lower and animals tend to be more active, gives you the best chance of good sightings and comfortable walking. Midday visits in peak summer can mean less visible wildlife and a much hotter walk.",
  },
  {
    q: "Can Satmaliya Deer Sanctuary be combined with other sights near Khanvel?",
    a: "Yes — it sits within easy reach of Khanvel town and Madhuban Dam, and most visitors treat all three as one half-day loop out of Silvassa rather than a standalone trip.",
  },
  {
    q: "Is Satmaliya Deer Sanctuary suitable for kids and families?",
    a: "Generally yes — it's a gentle, low-intensity outing with short walking distances, which makes it manageable for families with children. As with any wildlife area, keep a close eye on kids around enclosures and railings and don't let them feed or approach the animals.",
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
  { id: "introduction", title: "About Satmaliya Deer Sanctuary", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach", level: 2 },
  { id: "what-to-expect", title: "What to Expect", level: 2 },
  { id: "etiquette", title: "Photography & Wildlife Etiquette", level: 2 },
  { id: "nearby", title: "Combine with Khanvel & Madhuban Dam", level: 2 },
  { id: "itinerary", title: "Suggested Half-Day Plan", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SatmaliyaDeerSanctuaryGuidePage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/goa/hero.jpg"
              alt="Generic representative forest and woodland landscape, evocative of the tree cover around Khanvel's forest belt"
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
                { label: "Satmaliya Deer Sanctuary", href: null },
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
                "Satmaliya",
                "Khanvel",
                "Wildlife",
                "Silvassa",
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
              Satmaliya Deer Sanctuary: Visit Guide & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A small, quiet forest sanctuary near Khanvel where spotted deer
              roam close to the trees — a low-key nature stop that's easy to
              add to a Silvassa trip.
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
                  text: "Khanvel, Dadra & Nagar Haveli",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~1,900 words",
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
                  <h2>About Satmaliya Deer Sanctuary</h2>
                  <p>
                    <strong>Satmaliya Deer Sanctuary</strong> is a small,
                    forested wildlife sanctuary near Khanvel, tucked into the
                    forest belt of{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli
                    </Link>
                    . It's best known for its population of{" "}
                    <strong>spotted deer (chital)</strong>, which can usually
                    be seen moving through the trees or grazing near the
                    sanctuary's walking areas, alongside other native wildlife
                    typical of this stretch of deciduous forest.
                  </p>
                  <p>
                    This isn't a large national-park-scale reserve, and we
                    won't pretend it is — it's a modest, low-key nature spot,
                    the kind of place that works best as a relaxed half-day
                    detour rather than a full-day wildlife expedition. What it
                    does offer is a genuine change of pace from Silvassa's
                    town centre: quiet tree cover, some open air, and a decent
                    chance of watching deer at close range without the crowds
                    or cost of a bigger safari destination.
                  </p>
                  <p>
                    Satmaliya sits within Silvassa's broader green belt, which
                    also includes Khanvel town and{" "}
                    <Link href="/blog/madhuban-dam-travel-guide">
                      Madhuban Dam
                    </Link>{" "}
                    nearby — most visitors treat all three as one loop rather
                    than a single-purpose trip.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🦌</span> Satmaliya Deer Sanctuary at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Near Khanvel, Dadra & Nagar Haveli",
                        },
                        {
                          icon: "🚗",
                          label: "From Silvassa",
                          value: "Short drive via Khanvel road",
                        },
                        {
                          icon: "🦌",
                          label: "Known For",
                          value: "Spotted deer (chital)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Cooler months, early AM / late PM",
                        },
                        {
                          icon: "⏱️",
                          label: "Suggested Visit",
                          value: "1–2 hours",
                        },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Nominal fee (confirm locally)",
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
                    Like most of coastal Gujarat's inland belt, this part of
                    Dadra & Nagar Haveli gets hot and humid for a large chunk
                    of the year, which affects both comfort and how active
                    the wildlife is likely to be.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Nov – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cooler, drier weather makes walking through the sanctuary genuinely comfortable, and animals tend to be more active and visible during the milder daytime temperatures.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — early/late visits only",
                        text: "Midday heat can be intense with limited shade in places — plan your visit for early morning or the couple of hours before closing.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — lush but wet",
                        text: "The forest turns green and photogenic, but paths can be muddy and some areas may see restricted access during heavy rain — check ahead if visiting in this window.",
                      },
                      {
                        season: "Early morning / late afternoon",
                        emoji: "🕕",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best hours, any season",
                        text: "Deer and other wildlife are generally most active in the cooler hours around sunrise and the couple of hours before sunset — plan your visit around these windows for the best sightings.",
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
                    November and February — cool enough for a comfortable
                    walk and the best odds of active wildlife rather than
                    deer resting in the shade.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach</h2>
                  <p>
                    Satmaliya Deer Sanctuary is most easily reached as a short
                    drive from{" "}
                    <Link href="/blog/silvassa-travel-guide">Silvassa</Link>,
                    routed via{" "}
                    <Link href="/blog/khanvel-travel-guide">Khanvel</Link>{" "}
                    town.
                  </p>
                  <ul>
                    <li>
                      <strong>From Silvassa:</strong> A short drive by car,
                      taxi, or two-wheeler along the Khanvel road — well
                      within range for a half-day out-and-back trip.
                    </li>
                    <li>
                      <strong>From Khanvel:</strong> The sanctuary sits close
                      to Khanvel town itself, making it easy to combine both
                      in the same visit without much extra driving.
                    </li>
                    <li>
                      <strong>Getting there from further away:</strong> If
                      you're arriving from outside the region, route through
                      Silvassa first — it has the best onward road, rail
                      (via Vapi), and taxi connections into the Khanvel area.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Confirm exact directions and
                    current road conditions locally before setting out —
                    signage in this area can be sparse, and a quick check
                    with your hotel or a maps app on the day saves back-and-
                    forth driving.
                  </div>
                </section>

                {/* ── What to Expect ──────────────────────────────────────── */}
                <section id="what-to-expect">
                  <h2>What to Expect</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/goa/beach.jpg"
                      alt="Generic representative open landscape with tree cover, used here only as a placeholder for the sanctuary's setting"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Expect a modest, walkable setup rather than an elaborate
                    safari experience — think walking trails and viewing
                    areas through forest cover, with a decent chance of
                    spotting chital moving between the trees or grazing in
                    open patches.
                  </p>
                  <ul>
                    <li>
                      <strong>Spotted deer sightings:</strong> The main
                      attraction, and generally the most reliable one — chital
                      are the sanctuary's namesake and its most visible
                      resident.
                    </li>
                    <li>
                      <strong>General forest biodiversity:</strong> Being part
                      of the wider Khanvel forest belt, you may spot birdlife
                      and other small wildlife typical of the region — we'd
                      rather set modest expectations here than promise
                      specific species you might not see on the day.
                    </li>
                    <li>
                      <strong>Walking, not driving:</strong> Plan for a
                      walking visit rather than a vehicle safari — comfortable
                      shoes and a hat or light layer against the sun are
                      worth carrying.
                    </li>
                    <li>
                      <strong>Facilities:</strong> Keep expectations basic —
                      this is a small, low-infrastructure sanctuary rather
                      than a resort-style wildlife park. Carry your own
                      water and any snacks you might want.
                    </li>
                  </ul>
                  <p>
                    A visit here typically takes an hour or two at an
                    unhurried pace — enough time to walk the main paths,
                    spend a while watching the deer, and take in the forest
                    setting without feeling rushed.
                  </p>
                </section>

                {/* ── Etiquette ─────────────────────────────────────────── */}
                <section id="etiquette">
                  <h2>Photography & Wildlife-Watching Etiquette</h2>
                  <p>
                    Small sanctuaries like this depend on visitors behaving
                    respectfully — a few simple habits go a long way toward
                    both good sightings and keeping the animals undisturbed.
                  </p>
                  <ul>
                    <li>
                      <strong>Keep your distance:</strong> Don't approach
                      deer or other animals closely for a photo — a longer
                      lens or simply patience gets you a better shot without
                      stressing the animal.
                    </li>
                    <li>
                      <strong>Never feed the animals:</strong> Feeding wild
                      or semi-wild deer disrupts their natural behaviour and
                      diet, and is generally discouraged or prohibited at
                      sanctuaries like this — admire from a distance instead.
                    </li>
                    <li>
                      <strong>Stay quiet:</strong> Loud voices, music, or
                      sudden movement scare animals away quickly — a calm,
                      quiet approach improves your chances of a longer,
                      closer sighting.
                    </li>
                    <li>
                      <strong>Stick to marked paths:</strong> Wandering off
                      designated trails can disturb habitat and, depending on
                      the terrain, isn't always safe.
                    </li>
                    <li>
                      <strong>No flash photography near animals:</strong> If
                      you're visiting in low light, avoid flash — it can
                      startle deer and other wildlife unnecessarily.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Early morning light through
                    the trees tends to make for the most attractive photos —
                    another good reason to time your visit for the first
                    couple of hours after opening.
                  </div>
                </section>

                {/* ── Nearby ────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Combine with Khanvel & Madhuban Dam</h2>
                  <p>
                    Satmaliya Deer Sanctuary works best as one stop within a
                    small loop through the Khanvel area, rather than a
                    standalone trip — the sanctuary, Khanvel town, and{" "}
                    <Link href="/blog/madhuban-dam-travel-guide">
                      Madhuban Dam
                    </Link>{" "}
                    all sit within easy reach of each other.
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Link href="/blog/khanvel-travel-guide">Khanvel</Link>:
                      </strong>{" "}
                      A small, green town that anchors this part of Dadra &
                      Nagar Haveli's forest belt — a natural base or midway
                      stop for the loop.
                    </li>
                    <li>
                      <strong>
                        <Link href="/blog/madhuban-dam-travel-guide">
                          Madhuban Dam
                        </Link>
                        :
                      </strong>{" "}
                      A reservoir and dam site nearby, popular for its water
                      views and as a quiet spot to unwind after the walking
                      at Satmaliya.
                    </li>
                  </ul>
                  <p>
                    If you're based in{" "}
                    <Link href="/blog/silvassa-travel-guide">Silvassa</Link>,
                    all three fit comfortably into a single half-day outing —
                    see the suggested plan below.
                  </p>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>Suggested Half-Day Plan</h2>
                  <p>
                    A relaxed loop covering the sanctuary, Khanvel, and
                    Madhuban Dam — easily done from Silvassa without an
                    overnight stay.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Satmaliya Deer Sanctuary",
                        color: "bg-forest-600",
                        activities: [
                          "Start early for cooler weather and more active wildlife",
                          "Walk the trails and viewing areas, spot the deer",
                          "Take photos from a respectful distance",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Khanvel Town",
                        color: "bg-amber-700",
                        activities: [
                          "Short drive into Khanvel",
                          "Light lunch or snacks at a local eatery",
                          "Browse the town at an easy pace",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Madhuban Dam",
                        color: "bg-sky-600",
                        activities: [
                          "Short drive to the dam and reservoir",
                          "Relax by the water, take in the views",
                          "Head back to Silvassa by evening",
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
                    * Reorder or trim this loop as needed — all three stops
                    are close enough together that the plan flexes easily
                    around your pace and start time.
                  </p>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    This is an inexpensive half-day outing — the main costs
                    are local transport and a nominal entry fee, with food
                    and any extras on top.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Comfort"].map(
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
                            "Local transport (round trip)",
                            "₹150 (shared/two-wheeler)",
                            "₹500 (taxi)",
                            "₹1,200 (private cab, full loop)",
                          ],
                          [
                            "Entry fee",
                            "Nominal (confirm locally)",
                            "Nominal (confirm locally)",
                            "Nominal (confirm locally)",
                          ],
                          ["Food & snacks", "₹150", "₹350", "₹700"],
                          [
                            "Half-day total (approx.)",
                            "₹300–₹500",
                            "₹850–₹1,000",
                            "₹1,900–₹2,200",
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
                    * Figures are indicative and exclude travel to Silvassa
                    itself. Entry fees and any vehicle/camera charges should
                    be confirmed locally, as small-sanctuary rates change
                    without much online notice.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips</h2>
                  <ul>
                    <li>
                      <strong>Go early or late in the day:</strong> Best
                      chance of active wildlife and cooler walking
                      conditions, especially outside the winter months.
                    </li>
                    <li>
                      <strong>Confirm timings before you go:</strong> Opening
                      hours and any weekly closures for small sanctuaries can
                      vary — a quick local check saves a wasted trip.
                    </li>
                    <li>
                      <strong>Carry water and light snacks:</strong> Don't
                      expect much in the way of on-site food or drink
                      vendors.
                    </li>
                    <li>
                      <strong>Wear comfortable walking shoes:</strong> Paths
                      are informal in places, especially after rain.
                    </li>
                    <li>
                      <strong>Combine it with Khanvel and Madhuban Dam:</strong>{" "}
                      Makes for a much fuller half-day than visiting the
                      sanctuary alone.
                    </li>
                    <li>
                      <strong>Keep expectations realistic:</strong> This is a
                      small, quiet sanctuary — a genuinely pleasant nature
                      stop, not a major wildlife park with guaranteed big
                      sightings.
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
                          "Visit early morning or late afternoon",
                          "Keep a respectful distance from the deer",
                          "Carry water, a hat, and comfortable shoes",
                          "Combine it with Khanvel and Madhuban Dam",
                          "Confirm entry fees and timings locally",
                          "Stay on marked walking paths",
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
                          "Feed the deer or any other wildlife",
                          "Visit expecting a large safari-style park",
                          "Make loud noise or play music near animals",
                          "Wander off marked trails",
                          "Skip carrying your own water and snacks",
                          "Rely on old online listings for fees or timings",
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
                    <strong>🗺️ Extend the trip:</strong> If you have more time,
                    fold Satmaliya into a broader visit to{" "}
                    <Link href="/blog/silvassa-travel-guide">Silvassa</Link>{" "}
                    and the rest of the{" "}
                    <Link href="/blog/dadra-nagar-haveli-daman-diu-travel-guide">
                      Dadra & Nagar Haveli and Daman & Diu
                    </Link>{" "}
                    region for a longer weekend itinerary.
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
                  "Satmaliya Deer Sanctuary",
                  "Dadra and Nagar Haveli",
                  "Silvassa",
                  "Khanvel",
                  "Madhuban Dam",
                  "Wildlife",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="satmaliya-deer-sanctuary-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="satmaliya-deer-sanctuary-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
