// src/app/blog/pangong-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";
import TrekGearRecommendations, {
  HIMALAYAN_GEAR,
} from "@/components/ui/TrekGearRecommendations";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Pangong Lake Travel Guide: Routes, Permits, Camping & Tips",
  description:
    "The complete Pangong Tso travel guide — how to reach via Chang La or the Nubra-Shyok route, ILP permits, the colour-changing lake, overnight camping, south vs north shore, a 2-day Leh itinerary, budget and essential tips.",
  keywords:
    "Pangong Lake, Pangong Tso, Ladakh, Chang La pass, Pangong camping, Pangong permit, Merek, Spangmik, 3 Idiots lake, Leh to Pangong",
  openGraph: {
    title: "Pangong Lake Travel Guide: Routes, Permits, Camping & Tips",
    description:
      "A saline lake at 4,225 metres that changes colour by the hour — the complete guide to visiting, camping, and falling for Pangong Tso.",
    url: "https://club.kudozz.in/blog/pangong-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Pangong Tso lake with turquoise water and snow-capped mountains",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pangong Lake Travel Guide",
    description:
      "Routes, permits, camping, and the complete guide to Ladakh's most famous lake.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/pangong-lake-travel-guide",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Pangong Lake Travel Guide: Routes, Permits, Camping & Tips",
          description:
            "The complete Pangong Tso travel guide — routes, permits, camping, the colour-changing lake phenomenon, itinerary, budget and tips.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
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
            "@id": "https://club.kudozz.in/blog/pangong-lake-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Pangong Lake",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Ladakh",
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
                name: "Pangong Lake Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Pangong Lake?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pangong", level: 2 },
  { id: "via-chang-la", title: "→ Via Chang La (from Leh)", level: 3 },
  { id: "via-nubra-shyok", title: "→ Via Nubra–Shyok Route", level: 3 },
  { id: "permits", title: "Permits & Paperwork", level: 2 },
  { id: "colour-lake", title: "The Colour-Changing Lake", level: 2 },
  { id: "camping", title: "Camping Overnight on the Shore", level: 2 },
  { id: "south-vs-north", title: "South Shore vs North Shore", level: 2 },
  { id: "chang-la-pass", title: "Chang La Pass", level: 2 },
  { id: "itinerary", title: "2-Day Leh–Pangong–Leh Itinerary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PangongLakePage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Pangong Tso — turquoise saline lake ringed by Himalayan peaks"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent" />
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
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Pangong Lake", href: null },
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
                "Pangong Lake",
                "Ladakh",
                "High Altitude",
                "Camping",
                "Road Trip",
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
              Pangong Lake Travel Guide: Routes, Permits, Camping & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A saline lake at 4,225 metres that runs turquoise to violet
              across a single afternoon, ringed by bare Himalayan rock and
              stretching so far east it disappears into Tibet.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "14 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Ladakh, India",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={m.icon}
                    />
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
                  <h2>Why Pangong Lake?</h2>
                  <p>
                    Some places are famous for a reason that turns out to be
                    an understatement, and <strong>Pangong Tso</strong> is
                    one of them. Long before it became a household name after
                    the final scene of <em>3 Idiots</em>, this endorheic
                    saline lake sat quietly at 4,225 metres in the far
                    eastern reaches of Ladakh, changing colour through the
                    day for an audience of yaks, migratory birds, and the
                    occasional Changpa herder.
                  </p>
                  <p>
                    Today it is the single most photographed body of water in
                    the Indian Himalaya, and deservedly so. Pangong stretches
                    134 km from Ladakh into Tibet's Rutog region — only about
                    40 km of it lies in India — making it one of the largest
                    high-altitude lakes on earth. The water is startlingly
                    saline despite being fed by glacial streams and having no
                    outlet, and it freezes solid enough in winter to walk
                    across.
                  </p>
                  <p>
                    What sets Pangong apart from a postcard is the drive to
                    get there and the night you spend on its shore. You cross
                    a 5,360-metre pass to reach it, camp in a tent within
                    metres of water that turns violet at dusk, and wake to a
                    sunrise that no photograph quite prepares you for. It is,
                    without exaggeration, one of the finest 36-hour detours
                    in Indian travel.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Pangong Lake at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Eastern Ladakh, India–Tibet border",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "4,225 – 4,350 m (13,860 – 14,270 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "May – Sep" },
                        {
                          icon: "📏",
                          label: "Length",
                          value: "134 km (only ~40 km in India)",
                        },
                        {
                          icon: "🛂",
                          label: "Permits",
                          value: "ILP required (obtain in Leh)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,500 – ₹6,000",
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
                  <h2>Best Time to Visit Pangong Lake</h2>
                  <p>
                    Pangong is only accessible for about five months of the
                    year. The road over Chang La closes under snow in winter,
                    and the lake itself freezes over from December through
                    February — a spectacular sight, but reachable only on
                    specialist winter expeditions, not a standard trip.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – June",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Opening season",
                        text: "Chang La reopens by mid-to-late May once BRO clears snow. Water levels are high from snowmelt, the surrounding hills still carry snow patches, and nights are bitterly cold (-5°C to 0°C). Fewer crowds than peak summer.",
                      },
                      {
                        season: "July – August",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — busiest",
                        text: "Warmest daytime temperatures (15–20°C), all camps open, the fullest range of colour on the lake. Also the most crowded — day-trip convoys from Leh arrive by late morning and thin out by 4 PM. Book camps in advance.",
                      },
                      {
                        season: "September",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Best light, thinning crowds",
                        text: "Our pick. Tourist numbers drop sharply after the second week, the sky turns a deeper, clearer blue, and the light in early morning and late afternoon is extraordinary. Nights turn cold again (-2°C to -8°C) — pack accordingly.",
                      },
                      {
                        season: "Oct – Apr",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Closed / frozen",
                        text: "Chang La closes to regular traffic by mid-October. The lake begins freezing in December and is fully frozen by January, with temperatures below -20°C. Only accessible via specialised winter expeditions with local operators.",
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
                    <strong>Our pick:</strong> First two weeks of September.
                    The convoys of day-trippers have thinned, the water holds
                    its deepest blues in the clear post-monsoon air, and
                    camps that were fully booked in August have rooms to
                    spare. Carry proper cold-weather layers regardless of
                    when you go — nights at 4,300 m are cold in any month.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Pangong Lake</h2>
                  <p>
                    There is no town, airport, or railhead anywhere near
                    Pangong — every visitor arrives by road, almost always
                    starting from Leh. There are two practical routes, and
                    combining them into a loop (in via one, out via the
                    other) is the single best upgrade you can make to a
                    Ladakh itinerary.
                  </p>

                  <section id="via-chang-la">
                    <h3>Via Chang La (from Leh) — the direct route</h3>
                    <div className="relative w-full rounded-xl my-6 h-64 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                        alt="Road to Pangong Lake crossing Chang La pass"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      The standard approach: leave Leh, climb through Karu
                      and Sakti, cross <strong>Chang La</strong> at 5,360 m,
                      then descend through Durbuk and Tangtse before the road
                      opens out along the lake's northern shore near
                      Lukung. It is the shortest, most direct route and the
                      one every taxi union and tour operator in Leh runs by
                      default.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> ~160 km from Leh (one way)
                      </li>
                      <li>
                        <strong>Duration:</strong> 4.5–5.5 hours driving, more
                        with photo stops
                      </li>
                      <li>
                        <strong>Highest point:</strong> Chang La at 5,360 m
                        (17,590 ft)
                      </li>
                      <li>
                        <strong>Road condition:</strong> Well-maintained
                        tarmac for most of the way, with a rough,
                        broken-tarmac stretch on the final descent to the
                        lake
                      </li>
                      <li>
                        <strong>Fuel:</strong> Top up fully in Leh — the
                        nearest pump beyond Karu is unreliable
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Note:</strong> This route gains altitude
                      quickly — Leh (3,524 m) to Chang La (5,360 m) in around
                      three hours. Do not attempt it on your first or second
                      day in Leh. Spend at least two full days acclimatising
                      in Leh city before crossing Chang La.
                    </div>
                  </section>

                  <section id="via-nubra-shyok">
                    <h3>Via Nubra–Shyok Route — the scenic long way</h3>
                    <p>
                      If you're already in Nubra Valley, there's a
                      spectacular alternative: follow the{" "}
                      <strong>Shyok River</strong> south from Diskit or
                      Hunder along a raw, dramatically beautiful valley road
                      that few tourists take, joining the main Pangong road
                      near Durbuk. This route skips Chang La entirely and
                      links two of Ladakh's headline sights into one loop
                      without backtracking through Leh.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> ~180–200 km from Hunder /
                        Diskit
                      </li>
                      <li>
                        <strong>Duration:</strong> 6–7 hours — slower than
                        the Chang La route due to unpaved stretches
                      </li>
                      <li>
                        <strong>Road condition:</strong> Mostly graded dirt
                        and river-bed track, with a handful of shallow water
                        crossings; a high-clearance vehicle is strongly
                        recommended
                      </li>
                      <li>
                        <strong>Highlight:</strong> The Shyok gorge itself —
                        sheer rock walls, turquoise river braids, and almost
                        no other traffic
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Classic loop:</strong> Leh → Khardung La →
                      Nubra (2 nights) → Shyok route → Pangong (1 night) →
                      Chang La → Leh. This uses both routes exactly once,
                      avoids repeating any road, and is the itinerary most
                      experienced Ladakh drivers recommend.
                    </div>
                  </section>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & Paperwork for Pangong</h2>
                  <p>
                    Pangong sits inside a protected border zone, so an{" "}
                    <strong>Inner Line Permit (ILP)</strong> is mandatory for
                    every visitor — Indian or foreign. Checkpoints at Zingral
                    (before Chang La) and near Tangtse check permits
                    carefully, and travelling without one means being turned
                    back after hours of driving.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        permit: "Inner Line Permit (ILP)",
                        color: "border-forest-300 bg-forest-50",
                        required: "Pangong Tso (Chang La and Shyok routes)",
                        who: "All Indian nationals",
                        cost: "₹20–₹400 depending on sector, plus a small green/red tax",
                        how: "Apply online at lahdclehpermit.in (24–48 hrs processing) or in person at the DC Office, Leh (same day, ~30 minutes). Most Leh travel agents and hotels can also arrange it same-day.",
                        note: "Print 3 physical copies. Checkpoints are strict about paper copies — a phone screenshot is not always accepted.",
                      },
                      {
                        permit: "Protected Area Permit (PAP)",
                        color: "border-amber-300 bg-amber-50",
                        required: "Pangong Tso for foreign nationals",
                        who: "Foreign nationals only",
                        cost: "Arranged as part of a group permit (typically ₹500–₹2,000)",
                        how: "Must be booked through a registered Leh-based tour operator, in a group of at least two foreign nationals. Cannot be obtained independently.",
                        note: "Solo foreign travellers should team up with another traveller or join a group tour to satisfy the minimum-group rule.",
                      },
                      {
                        permit: "Wetland Conservation Fee",
                        color: "border-sky-300 bg-sky-50",
                        required: "Entry to the Pangong Tso shoreline",
                        who: "All visitors",
                        cost: "₹20–₹40 per person, plus a small vehicle fee",
                        how: "Collected at the checkpoint near Lukung / Spangmik on arrival.",
                        note: "Carry small denomination notes — remote checkpoints rarely carry change.",
                      },
                    ].map((p) => (
                      <div
                        key={p.permit}
                        className={`border ${p.color} rounded-xl p-5`}
                      >
                        <h4
                          className="font-bold text-stone-900 mb-3"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {p.permit}
                        </h4>
                        <div
                          className="grid sm:grid-cols-2 gap-3 text-sm"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Required for
                            </span>
                            <span className="text-stone-700">{p.required}</span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Who needs it
                            </span>
                            <span className="text-stone-700">{p.who}</span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              Cost
                            </span>
                            <span className="text-stone-700 font-medium">
                              {p.cost}
                            </span>
                          </div>
                          <div>
                            <span className="text-stone-400 text-xs block">
                              How to get
                            </span>
                            <span className="text-stone-700">{p.how}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-start gap-2 text-xs text-stone-500">
                          <span className="flex-shrink-0">⚠️</span>
                          {p.note}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-stone-900 text-white rounded-xl p-5 my-6"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <h4
                      className="font-bold text-white mb-3 text-sm"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      📋 Documents to carry (photocopies × 3–5)
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      {[
                        "Aadhaar Card / Passport (original + copies)",
                        "ILP printout for the Pangong sector",
                        "Vehicle RC and driving licence (if self-driving)",
                        "Camp / homestay booking confirmation",
                        "Emergency contacts list",
                        "Travel insurance documents",
                      ].map((doc) => (
                        <div
                          key={doc}
                          className="flex items-center gap-2 text-stone-300"
                        >
                          <span className="text-forest-400 flex-shrink-0">
                            ✓
                          </span>
                          {doc}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Colour-changing lake ──────────────────────────────── */}
                <section id="colour-lake">
                  <h2>The Colour-Changing Lake</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Pangong Tso changing colour from turquoise to deep blue"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Pangong's signature party trick is real, not a filter.
                    Watch the lake for even a few hours and you'll see it
                    shift through pale jade, turquoise, sapphire, steel grey,
                    and — right at dusk, if the sky cooperates — a deep
                    violet. The cause is a combination of the lake's
                    unusual mineral content, its extreme clarity and depth in
                    places, and the angle of sunlight hitting a body of water
                    sitting in a treeless, high-UV desert environment. There
                    is no vegetation or silt to mute the colour, so the lake
                    reflects the sky and refracts light with unusual purity.
                  </p>
                  <p>
                    It also happens to be a saline lake with no fish and no
                    outlet — water only leaves by evaporation, which over
                    thousands of years has concentrated the dissolved salts.
                    Despite this, it freezes over completely in winter,
                    thick enough that locals historically crossed it on
                    foot and by yak.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The colour is most dramatic
                    in the hour after sunrise and the hour before sunset,
                    when low-angle light rakes across the surface. Midday
                    sun (11 AM–2 PM, when most day-trip convoys arrive) tends
                    to wash the colour into a flatter, brighter blue —
                    prettier in photos of the sky, less dramatic on the
                    water itself.
                  </div>
                </section>

                {/* ── Camping ───────────────────────────────────────────── */}
                <section id="camping">
                  <h2>Camping Overnight on the Shore</h2>
                  <p>
                    Doing Pangong as a same-day trip from Leh is common — and
                    a mistake. You'll spend nearly 10 hours driving to get
                    barely 90 minutes at the lake, sandwiched between the
                    same crowds and the same midday light everyone else
                    gets. <strong>Staying overnight</strong> is what actually
                    delivers the Pangong experience: the crowds thin out by
                    5 PM, the light turns extraordinary at sunset, the stars
                    at 4,300 m with zero light pollution are staggering, and
                    you get the lake to yourself again at sunrise.
                  </p>
                  <p>
                    A strip of semi-permanent tent camps runs along the
                    shore near Spangmik and Man, ranging from basic
                    two-person tents with a shared bathroom block to
                    heated, carpeted "luxury" tents with attached toilets
                    and hot water buckets. All run on generator power for a
                    few hours each evening — don't expect Wi-Fi or reliable
                    charging.
                  </p>
                  <ul>
                    <li>
                      <strong>Typical camp cost:</strong> ₹2,000–₹6,000 per
                      night including dinner and breakfast, per tent
                    </li>
                    <li>
                      <strong>Heating:</strong> Most camps provide extra
                      blankets and a bukhari (wood stove) lit in the evening
                      — nights still drop close to freezing even in July
                    </li>
                    <li>
                      <strong>Booking:</strong> In peak season (July–August)
                      book at least a week ahead; camps fill fast on
                      weekends
                    </li>
                    <li>
                      <strong>Toilets:</strong> Basic dry or bucket-flush
                      toilets at budget camps; attached Western toilets at
                      mid-range and above
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Sleep at altitude:</strong> Pangong sits
                    higher than Leh (4,225 m vs 3,524 m). Even travellers who
                    felt fine in Leh sometimes get a mild headache or
                    disturbed sleep on their first night at the lake. Drink
                    plenty of water through the day, avoid alcohol, and
                    don't push straight from a flight arrival into Leh to a
                    Pangong overnight without at least two acclimatisation
                    days first.
                  </div>
                </section>

                {/* ── South vs North Shore ──────────────────────────────── */}
                <section id="south-vs-north">
                  <h2>South Shore vs North Shore</h2>
                  <p>
                    Almost every tourist convoy from Leh via Chang La lands
                    at the same stretch of the <strong>north shore</strong>{" "}
                    near Lukung and the viewpoint made famous by 3 Idiots —
                    which means that stretch is, predictably, the busiest
                    patch of shoreline in Ladakh by 11 AM. A short drive
                    around the western tip of the lake changes everything.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-white border border-stone-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-stone-900 mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        North Shore (Lukung side)
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed m-0">
                        The default stop for every day-trip taxi from Leh —
                        easy road access, the famous 3 Idiots viewpoint,
                        souvenir stalls, and by far the heaviest footfall.
                        Worth a quick photo stop but not where you want to
                        spend your night.
                      </p>
                    </div>
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        South Shore (Merek, Man, Spangmik)
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed m-0">
                        Reached via a well-marked road skirting the lake's
                        western edge. Home to most of the established tent
                        camps, dramatically fewer people, and arguably
                        better views — the mountains of the Pangong range
                        rise more steeply behind these villages. This is
                        where you should base yourself for the night.
                      </p>
                    </div>
                  </div>
                  <p>
                    A good rhythm: arrive via the north shore in the
                    afternoon for the classic viewpoint photo, then drive
                    20–30 minutes further to Spangmik or Man to check into
                    camp, walk the shoreline at golden hour with almost no
                    one else around, and return to the north shore briefly
                    the next morning only if you skipped it the day before.
                  </p>
                </section>

                {/* ── Chang La ──────────────────────────────────────────── */}
                <section id="chang-la-pass">
                  <h2>Chang La Pass</h2>
                  <p>
                    At <strong>5,360 metres (17,590 ft)</strong>, Chang La is
                    frequently — if inaccurately — signed as "the world's
                    third-highest motorable pass." It isn't quite that by
                    strict measurement, but it is genuinely one of the
                    highest roads most travellers will ever drive, and the
                    approach from either side is dramatic: switchbacks
                    climbing through bare scree slopes into thin, biting
                    air.
                  </p>
                  <p>
                    The pass is named for a local saint, Changla Baba, and a
                    small shrine near the top draws offerings from passing
                    drivers. There's a modest army-run cafeteria serving hot
                    tea and Maggi noodles — a genuine lifeline given how cold
                    and thin the air is at the top.
                  </p>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Note:</strong> Spend no more than 15–20
                    minutes at the top. Altitude sickness at 5,360 m can hit
                    fast and hard, even for people who felt fine at lower
                    elevations. Take your photos, sip the tea, and descend —
                    the lake itself, a thousand metres lower, is a far more
                    comfortable place to linger.
                  </div>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>2-Day Leh–Pangong–Leh Itinerary</h2>
                  <p>
                    This is the minimum sensible way to see Pangong properly
                    — one night at the lake, with acclimatisation in Leh
                    already done beforehand. If you have more time, slot
                    this straight into a longer Nubra–Pangong loop instead
                    of doing it as an out-and-back.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Before Day 1",
                        title: "Acclimatise in Leh",
                        color: "bg-stone-600",
                        activities: [
                          "Spend at least 2 full days resting/exploring Leh city first",
                          "Arrange your ILP at the DC Office or via your hotel/agent",
                          "Fuel the vehicle fully — last reliable pump before Pangong",
                          "Pack warm layers even if Leh feels comfortably warm",
                        ],
                      },
                      {
                        day: "Day 1",
                        title: "Leh → Pangong via Chang La",
                        color: "bg-sky-700",
                        activities: [
                          "Depart Leh by 7–8 AM to beat the midday convoy crush",
                          "Tea stop and photos at Chang La (5,360 m) — 15–20 min max",
                          "Lunch stop in Durbuk or Tangtse village",
                          "Reach the north shore viewpoint by early afternoon",
                          "Continue to Spangmik / Man on the south shore, check into camp",
                          "Sunset walk along the shoreline — watch the colours shift",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sunrise at Pangong → Return to Leh",
                        color: "bg-amber-600",
                        activities: [
                          "Wake before dawn for sunrise over the lake — worth the cold",
                          "Slow breakfast at camp, walk the south shore in soft morning light",
                          "Depart by 10–11 AM to avoid the outbound day-trip convoy",
                          "Second stop and photos at Chang La on the return leg",
                          "Back in Leh by mid-afternoon — rest and market evening",
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

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Better still:</strong> If your itinerary
                    includes Nubra Valley, enter Pangong via the Shyok route
                    from Hunder/Diskit and exit via Chang La back to Leh (or
                    the reverse). You'll see two of Ladakh's best drives
                    without covering the same road twice.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay at Pangong</h2>
                  <p>
                    Accommodation at Pangong means tent camps — there are no
                    permanent hotels on the shore. Camps cluster around
                    Spangmik, Man, and Merek on the south shore, with a
                    smaller number near Lukung on the north shore. Book
                    ahead in July–August; camps often close entirely by
                    late October.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "⛺",
                        range: "₹1,500–₹2,500/night",
                        picks: [
                          "Basic Swiss tents, shared toilets",
                          "Camps near Lukung (north shore)",
                          "Local family-run tent setups in Spangmik",
                          "Bring your own sleeping bag liner",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏕️",
                        range: "₹3,000–₹5,000/night",
                        picks: [
                          "Pangong Retreat Camp",
                          "Lake View Camp, Spangmik",
                          "Attached bathrooms, bukhari heating",
                          "Meals included (dinner + breakfast)",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹8,000–₹20,000+/night",
                        picks: [
                          "Chamba Camp Pangong (Merek)",
                          "Nomadic Ladakh Luxury Camps",
                          "Heated tents, en-suite hot water",
                          "Multi-course dinners, lake-facing decks",
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
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat at Pangong</h2>
                  <p>
                    Options at the lake itself are limited to whatever your
                    camp cooks — usually a simple, hearty set menu geared
                    toward warming you up after a cold night. Don't expect
                    variety; do expect it to hit the spot at 4,200 metres.
                  </p>
                  <ul>
                    <li>
                      <strong>Camp thali:</strong> Most tent camps serve a
                      fixed vegetarian or mixed thali — dal, rice, a
                      vegetable curry, roti, and pickle. Simple and filling.
                    </li>
                    <li>
                      <strong>Maggi noodles:</strong> The unofficial food of
                      every Ladakh mountain pass and lakeside stall,
                      including the small dhabas at Chang La and near
                      Lukung. Reliable, hot, and fast.
                    </li>
                    <li>
                      <strong>Thukpa & instant soups:</strong> A warming
                      staple at camps and roadside stalls en route — worth
                      ordering the moment you feel the evening chill set in.
                    </li>
                    <li>
                      <strong>Butter tea & black tea:</strong> Offered at
                      most camps and the army-run stall at Chang La — the
                      salted butter tea is an acquired taste but genuinely
                      warming.
                    </li>
                    <li>
                      <strong>Bring your own snacks:</strong> Energy bars,
                      dry fruit, and electrolyte sachets are worth carrying —
                      shop options at the lake are minimal and prices are
                      higher than in Leh.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for a Pangong Trip</h2>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
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
                            "Tent camp/night (incl. meals)",
                            "₹1,800",
                            "₹4,000",
                            "₹12,000",
                          ],
                          [
                            "Vehicle hire, Leh–Pangong–Leh",
                            "₹4,500",
                            "₹7,500",
                            "₹12,000",
                          ],
                          ["ILP + wetland fee", "₹150", "₹150", "₹150"],
                          ["Food en route (2 days)", "₹500", "₹1,000", "₹2,000"],
                          [
                            "2-day trip total (2 people, shared vehicle)",
                            "₹6,950",
                            "₹12,650",
                            "₹26,150",
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
                    * Assumes a shared taxi/SUV from Leh split between 2–4
                    people. A self-drive rental bike or car changes the
                    vehicle-hire line but adds fuel costs of roughly
                    ₹1,500–₹2,500 for the round trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Pangong</h2>
                  <ul>
                    <li>
                      <strong>Acclimatise before you go:</strong> Pangong
                      (4,225 m) sits higher than Leh (3,524 m). Spend at
                      least two full days in Leh before attempting the
                      overnight trip — this is not the place to test your
                      body for the first time.
                    </li>
                    <li>
                      <strong>There are no ATMs at Pangong:</strong> Carry
                      all the cash you'll need — camps, fuel top-ups, and
                      roadside stalls are cash-only. ₹5,000–₹8,000 per person
                      for a two-day trip is a safe buffer.
                    </li>
                    <li>
                      <strong>Network is minimal to non-existent:</strong>
                      BSNL and postpaid Airtel have patchy signal near
                      Lukung; most of the south shore and the Chang La
                      stretch have none at all. Tell someone your plan
                      before you leave Leh and treat the trip as offline.
                    </li>
                    <li>
                      <strong>Nights are genuinely cold:</strong> Even in
                      peak summer, temperatures at the lake can fall close to
                      freezing after sunset. Pack thermal layers, a warm
                      jacket, gloves, and a beanie regardless of the month.
                    </li>
                    <li>
                      <strong>Fuel up in Leh:</strong> There is no petrol
                      pump at Pangong. Fill the tank completely before
                      leaving Leh and, on a bike, carry a spare litre or two
                      as a buffer.
                    </li>
                    <li>
                      <strong>Don't linger long at Chang La:</strong> 15–20
                      minutes at the top is plenty. The combination of
                      altitude and cold makes it a place to admire briefly,
                      not to hang around.
                    </li>
                    <li>
                      <strong>Protect your skin and eyes:</strong> UV
                      exposure at 4,200–5,400 m is extreme, and the lake's
                      reflective surface intensifies it further. SPF 50+,
                      polarised sunglasses, and lip balm are non-negotiable.
                    </li>
                    <li>
                      <strong>Pack out everything you bring in:</strong>{" "}
                      Pangong's ecosystem is fragile and there is no waste
                      management on the shore. Carry a reusable bottle,
                      avoid single-use plastics, and take all litter back to
                      Leh.
                    </li>
                  </ul>

                  {/* Do & Don't */}
                  <div className="grid sm:grid-cols-2 gap-5 my-6">
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
                          "Spend at least 2 days acclimatising in Leh first",
                          "Book your tent camp ahead in July–August",
                          "Carry all the cash you'll need — no ATMs here",
                          "Stay overnight for sunrise and sunset, not a day trip",
                          "Base yourself on the quieter south shore (Spangmik/Man)",
                          "Fuel up fully in Leh before departing",
                          "Pack warm layers even in peak summer",
                          "Carry your ILP printouts, not just a phone photo",
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
                          "Drive straight from a flight arrival to Pangong",
                          "Linger more than 20 minutes at Chang La",
                          "Assume you'll find an ATM or fuel pump at the lake",
                          "Expect reliable phone signal beyond Lukung",
                          "Skip the ILP — checkpoints will turn you back",
                          "Leave litter or single-use plastic on the shore",
                          "Underestimate how cold Pangong nights get",
                          "Rush the visit as a same-day out-and-back",
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
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Pangong Lake",
                  "Ladakh",
                  "Chang La",
                  "Camping",
                  "High Altitude",
                  "Road Trip",
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

              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Pangong Lake"
              />

              <RelatedPostsGrid currentSlug="pangong-lake-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="pangong-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
