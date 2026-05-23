// src/app/blog/leh-ladakh-road-trip/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Leh Ladakh Road Trip Guide 2026: Routes, Permits, Passes & Tips",
  description:
    "The ultimate Leh Ladakh road trip guide for 2026. Everything you need — Manali-Leh and Srinagar-Leh routes, Inner Line Permits, Khardung La, Pangong Lake, Nubra Valley, monasteries, bike vs car, and a complete 14-day itinerary.",
  keywords:
    "Leh Ladakh road trip, Ladakh travel guide 2026, Manali to Leh highway, Pangong Lake, Nubra Valley, Khardung La, Ladakh inner line permit, Ladakh bike trip, Ladakh itinerary",
  openGraph: {
    title: "Leh Ladakh Road Trip Guide 2026: Routes, Permits, Passes & Tips",
    description:
      "Moonscapes, Buddhist monasteries, and the world's highest motorable passes — the complete guide to Leh Ladakh.",
    url: "https://explore.kudozz.in/blog/leh-ladakh-road-trip",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Leh Ladakh moonscape landscape with Himalayan peaks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leh Ladakh Road Trip Guide 2026",
    description:
      "Pangong Lake, Nubra Valley, Khardung La — the complete road trip guide to Ladakh.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://explore.kudozz.in/blog/leh-ladakh-road-trip",
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
          "@type": "TravelGuide",
          headline:
            "Leh Ladakh Road Trip Guide 2026: Routes, Permits, Passes & Tips",
          description:
            "The ultimate Leh Ladakh road trip guide for 2026 — routes, permits, passes, itinerary, and insider tips.",
          image:
            "https://explore.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://explore.kudozz.in/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://explore.kudozz.in/blog/leh-ladakh-road-trip",
          },
          about: {
            "@type": "Place",
            name: "Leh Ladakh",
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
                item: "https://explore.kudozz.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://explore.kudozz.in/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Leh Ladakh Road Trip Guide",
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
  { id: "introduction", title: "Why Leh Ladakh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Leh", level: 2 },
  { id: "manali-leh", title: "→ Manali–Leh Highway", level: 3 },
  { id: "srinagar-leh", title: "→ Srinagar–Leh Highway", level: 3 },
  { id: "by-flight", title: "→ By Flight", level: 3 },
  { id: "bike-vs-car", title: "Bike vs Car vs Flight", level: 2 },
  { id: "permits", title: "Permits & Paperwork", level: 2 },
  { id: "top-places", title: "Top Places to Visit", level: 2 },
  { id: "pangong", title: "→ Pangong Tso Lake", level: 3 },
  { id: "nubra", title: "→ Nubra Valley", level: 3 },
  { id: "khardung-la", title: "→ Khardung La Pass", level: 3 },
  { id: "monasteries", title: "→ Monasteries of Ladakh", level: 3 },
  { id: "magnetic-hill", title: "→ Magnetic Hill & Sangam", level: 3 },
  { id: "tso-moriri", title: "→ Tso Moriri Lake", level: 3 },
  { id: "zanskar", title: "→ Zanskar Valley", level: 3 },
  { id: "itinerary", title: "14-Day Itinerary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LehLadakhPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Leh Ladakh — moonscape valleys and snow-capped Himalayan peaks"
              className="w-full h-full object-cover"
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
                { label: "Leh Ladakh Road Trip", href: null },
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
                "Leh Ladakh",
                "Road Trip",
                "High Altitude",
                "Bikes",
                "Monasteries",
                "J&K",
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
              Leh Ladakh Road Trip Guide 2026: Routes, Permits, Passes & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A moonscape at 3,500 metres, ringed by the highest mountains on
              earth. Ladakh is not just a road trip — it's a pilgrimage for
              anyone who's ever wanted to feel truly, brilliantly alive.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "26 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Ladakh, India",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "5,200 words",
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
                  <h2>Why Leh Ladakh?</h2>
                  <p>
                    There is a particular kind of silence that exists only at
                    altitude — the silence of thin air, vast space, and a sky so
                    dark blue it looks almost violet. You'll find it in Ladakh,
                    the former Buddhist kingdom that sits wedged between the
                    Karakoram and Himalayan ranges at the northwestern tip of
                    India, where the Indian subcontinent collides with Central
                    Asia in a landscape of staggering, almost alien beauty.
                  </p>
                  <p>
                    <strong>Leh Ladakh</strong> is not a destination you visit
                    once and tick off a list. People return here year after
                    year, drawn back by the turquoise lakes, the whitewashed
                    monasteries draped in prayer flags, the roads that cross
                    passes higher than any mountain in Europe, the warmth of the
                    Ladakhi people, and something harder to name — a quality of
                    light and space that feels genuinely transformative.
                  </p>
                  <p>
                    It is also one of the most logistically demanding
                    destinations in India. The altitude alone (Leh city sits at
                    3,524 m) can floor the unprepared. The roads are legendary
                    in both their drama and their danger. Permits are required
                    for many areas. The season is short. But for those who
                    prepare properly, Ladakh delivers experiences that rank
                    among the finest on earth.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Leh Ladakh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Union Territory, India",
                        },
                        {
                          icon: "🏔️",
                          label: "Leh Altitude",
                          value: "3,524 m (11,562 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Sep" },
                        {
                          icon: "✈️",
                          label: "Airport",
                          value: "Kushok Bakula Rimpochee (IXL)",
                        },
                        {
                          icon: "🛂",
                          label: "Permits",
                          value: "ILP required for border areas",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹2,000 – ₹6,000",
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
                  <h2>Best Time to Visit Leh Ladakh</h2>
                  <p>
                    Ladakh's season is defined by one thing above all else: road
                    accessibility. Both the Manali–Leh and Srinagar–Leh highways
                    close under heavy snow, and the window when both are
                    simultaneously open is shorter than most people expect.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "June – July",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Opening season",
                        text: "Manali–Leh road opens (usually by mid-June). Srinagar–Leh stays open longer. Snow still visible on passes. Temperature comfortable — 10–25°C in Leh. Pangong and Nubra fully accessible. Some passes may be blocked.",
                      },
                      {
                        season: "August",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — our pick",
                        text: "The sweet spot. Both highways open, all attractions accessible, festivals underway (Hemis in July, Ladakh in August–September). Days warm, nights cool. Crowds are real — book accommodation well ahead.",
                      },
                      {
                        season: "September – October",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Best photography",
                        text: "Crowds thin dramatically after September. Light turns golden, poplar trees go amber, skies are impossibly clear. Manali–Leh road may close by late October. The most beautiful Ladakh — fewer people, fewer prices.",
                      },
                      {
                        season: "Nov – May",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Winter expedition only",
                        text: "Manali–Leh closed entirely. Leh accessible only by flight. Temperatures drop to -20°C to -30°C at night. The Chadar Trek (frozen Zanskar River) runs January–February. Only for experienced winter travellers.",
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
                    Crowds from peak summer have cleared, prices drop 20–30%,
                    the light is extraordinary, and both highways are still
                    open. The landscape turns golden and the sky takes on a
                    depth of blue that photographers chase for years.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Leh Ladakh</h2>
                  <p>
                    There are three ways into Leh — two epic overland routes and
                    one flight. Each is a dramatically different experience, and
                    the right choice depends on your time, budget, and appetite
                    for adventure.
                  </p>

                  <section id="manali-leh">
                    <h3>Manali–Leh Highway (NH3)</h3>
                    <img
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Manali Leh highway through mountain passes"
                      className="w-full rounded-xl my-6 h-64 object-cover"
                    />
                    <p>
                      At 479 km and crossing five mountain passes including
                      Rohtang (3,978 m), Baralacha La (4,890 m), Nakee La (4,739
                      m), Lachung La (5,059 m), and Tanglang La (5,328 m) — the{" "}
                      <strong>Manali–Leh highway</strong> is one of the great
                      road journeys on earth. It passes through landscapes that
                      shift from pine forest to lunar desert in the space of a
                      few hours.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> 479 km
                      </li>
                      <li>
                        <strong>Duration:</strong> 2 days minimum (Manali →
                        Jispa/Sarchu → Leh), 3 days recommended for
                        acclimatisation
                      </li>
                      <li>
                        <strong>Open:</strong> Mid-June to mid-October (weather
                        dependent)
                      </li>
                      <li>
                        <strong>Highest point:</strong> Tanglang La at 5,328 m
                        (17,480 ft)
                      </li>
                      <li>
                        <strong>Road condition:</strong> Mix of excellent NH
                        sections and brutal off-road stretches near Sarchu and
                        Pang
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Critical:</strong> Do NOT travel Manali to Leh
                      in a single day. The rapid altitude gain (from 2,050 m in
                      Manali to 5,328 m at Tanglang La) without acclimatisation
                      is extremely dangerous. Stop at Jispa (3,200 m) or Sarchu
                      (4,250 m) overnight. Even then, altitude sickness is
                      common.
                    </div>
                  </section>

                  <section id="srinagar-leh">
                    <h3>Srinagar–Leh Highway (NH1)</h3>
                    <p>
                      At 434 km, the <strong>Srinagar–Leh highway</strong> via
                      Zoji La Pass (3,528 m), Kargil, and the Indus Valley is
                      gentler on altitude than the Manali route — the elevation
                      gain is more gradual, making acclimatisation easier. The
                      road passes through some of Ladakh's most historically
                      rich territory: Kargil, Mulbekh, Lamayuru, and the ancient
                      trade routes of the Silk Road.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> 434 km
                      </li>
                      <li>
                        <strong>Duration:</strong> 2 days (Srinagar → Kargil →
                        Leh), with overnight at Kargil
                      </li>
                      <li>
                        <strong>Open:</strong> April to November (longer season
                        than Manali route)
                      </li>
                      <li>
                        <strong>Best stop:</strong> Lamayuru Monastery — the
                        oldest in Ladakh, dramatic moonland scenery
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Classic circuit:</strong> Enter via
                      Srinagar–Leh (gentler acclimatisation, historically rich),
                      exit via Leh–Manali (higher passes, more dramatic
                      landscape). This is the ideal loop for a 14-day trip.
                    </div>
                  </section>

                  <section id="by-flight">
                    <h3>By Flight</h3>
                    <p>
                      Kushok Bakula Rimpochee Airport in Leh (IXL) is one of the
                      world's most dramatic airports — planes descend through
                      mountain valleys to a runway at 3,256 m. IndiGo, Air
                      India, GoFirst, and SpiceJet operate daily flights from
                      Delhi (1 hour 15 minutes) and Srinagar (45 minutes).
                    </p>
                    <p>
                      Flying in is the fastest but least recommended approach
                      for first-time visitors. The sudden jump from Delhi (216
                      m) to Leh (3,524 m) gives your body no time to
                      acclimatise.
                      <strong>
                        {" "}
                        Rest completely for the first 24–48 hours after landing
                      </strong>{" "}
                      — no sightseeing, no exertion, no alcohol. Drink 4+ litres
                      of water. Eat light. Many flights-in tourists end up
                      hospitalised; the overland arrivals almost never do.
                    </p>
                    <ul>
                      <li>
                        <strong>Cost:</strong> ₹4,000–₹12,000 one-way from Delhi
                        (book 2–3 months ahead for best prices)
                      </li>
                      <li>
                        <strong>Best strategy:</strong> Fly in (acclimatise for
                        2 days in Leh), drive out via Manali–Leh highway
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Bike vs Car ───────────────────────────────────────── */}
                <section id="bike-vs-car">
                  <h2>Bike vs Car vs Flight — Which Should You Choose?</h2>

                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          {[
                            "",
                            "Royal Enfield (Bike)",
                            "SUV / Car",
                            "Flight In + Car Local",
                          ].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Experience", "🏆 Legendary", "⭐ Great", "✅ Good"],
                          [
                            "Cost (vehicle)",
                            "₹1,000–₹1,500/day rental",
                            "₹3,000–₹6,000/day (cab)",
                            "₹2,500–₹4,000/day (local taxi)",
                          ],
                          [
                            "Acclimatisation",
                            "✅ Gradual (best)",
                            "✅ Gradual",
                            "⚠️ Abrupt (risky)",
                          ],
                          [
                            "Comfort",
                            "❌ Physically demanding",
                            "✅ Comfortable",
                            "✅ Comfortable",
                          ],
                          [
                            "Off-road capability",
                            "✅ Excellent",
                            "✅ Good (SUV)",
                            "✅ Good (local drivers know routes)",
                          ],
                          [
                            "Riding experience needed",
                            "✅ Yes (Ladakhi roads are technical)",
                            "❌ Not needed",
                            "❌ Not needed",
                          ],
                          [
                            "Best for",
                            "Adventure seekers",
                            "Groups/families",
                            "Short trips (7–10 days)",
                          ],
                        ].map((row, i) => (
                          <tr
                            key={row[0]}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-semibold text-stone-800">
                              {row[0]}
                            </td>
                            {row.slice(1).map((cell, j) => (
                              <td
                                key={j}
                                className="p-3 border border-stone-200 text-stone-600"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    <strong>Bike recommendation:</strong> Royal Enfield
                    Himalayan (best for off-road, 400cc, reliable), RE
                    Thunderbird 350/500, or RE Classic 350. Rent from Leh's
                    Changspa area (₹1,000–₹1,800/day). Carry a basic toolkit,
                    spare tube, and know how to change a flat. Riding licence
                    with gear endorsement required.
                  </p>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & Paperwork for Ladakh</h2>
                  <p>
                    Ladakh's proximity to sensitive borders means several areas
                    require permits. Getting these wrong can result in being
                    turned back at checkpoints after hours of driving — plan
                    ahead.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        permit: "Inner Line Permit (ILP)",
                        color: "border-forest-300 bg-forest-50",
                        required:
                          "Pangong Tso, Nubra Valley, Tso Moriri, Dah-Hanu",
                        who: "All Indian nationals",
                        cost: "₹20–₹400 per area depending on sector",
                        how: "Online at lahdclehpermit.in or in person at DC Office, Leh (opposite police station). Takes 30 minutes in person. Online: 24–48 hours.",
                        note: "Carry 3 physical copies per area. Checkpoints are strict — digital copies not always accepted.",
                      },
                      {
                        permit: "Protected Area Permit (PAP)",
                        color: "border-amber-300 bg-amber-50",
                        required:
                          "Nubra Valley (Siachen region), Tso Moriri (Korzok area)",
                        who: "Foreign nationals only",
                        cost: "₹2,000 per permit (approx)",
                        how: "Must be arranged through a registered Leh-based tour operator. Cannot be obtained independently.",
                        note: "Foreign nationals cannot travel to border areas independently — a licensed guide or operator must accompany.",
                      },
                      {
                        permit: "Environmental/Wildlife Fees",
                        color: "border-sky-300 bg-sky-50",
                        required:
                          "Pangong Tso, Hemis National Park, Tso Moriri",
                        who: "All visitors",
                        cost: "₹20–₹100 per person per day",
                        how: "Paid at the entry gate/checkpoint on arrival.",
                        note: "Carry exact change — remote checkpoints rarely have change for large notes.",
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
                      📋 Documents to carry (photocopies × 5 each)
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      {[
                        "Aadhaar Card / Passport (original + copies)",
                        "Vehicle Registration Certificate (RC)",
                        "Driving Licence",
                        "Vehicle Insurance",
                        "ILP printouts (one per restricted area)",
                        "Hotel booking confirmations",
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

                {/* ── Top Places ────────────────────────────────────────── */}
                <section id="top-places">
                  <h2>Top Places to Visit in Leh Ladakh</h2>

                  <section id="pangong">
                    <h3>Pangong Tso — The Colour-Changing Lake</h3>
                    <img
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Pangong Tso lake with turquoise water and snow mountains"
                      className="w-full rounded-xl my-6 h-72 object-cover"
                    />
                    <p>
                      At 4,350 metres and stretching 134 km from India into
                      Tibet (only 40 km of which lies in India),{" "}
                      <strong>Pangong Tso</strong>
                      is one of the world's highest saline lakes — and arguably
                      the most dramatically beautiful. The water changes colour
                      through the day from turquoise to jade to deep blue to
                      violet, depending on the light and sky. The mountains
                      reflected in its still surface look like a painting that
                      couldn't possibly be real.
                    </p>
                    <p>
                      Famous globally since the Bollywood film 3 Idiots was shot
                      here, Pangong draws enormous crowds in summer. The best
                      strategy: arrive in the late afternoon (after the
                      day-tripper crowds leave), camp overnight at one of the
                      lakeside tent camps, and watch the sunrise from the shore
                      — it is breathtaking and you'll have the lake largely to
                      yourself.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Leh:</strong> 160 km (~5 hours via
                        Chang La)
                      </li>
                      <li>
                        <strong>Chang La Pass en route:</strong> 5,360 m (third
                        highest motorable pass in the world)
                      </li>
                      <li>
                        <strong>Permit required:</strong> ILP (Inner Line
                        Permit) — obtain in Leh before departure
                      </li>
                      <li>
                        <strong>Stay:</strong> Tent camps on the north shore —
                        ₹2,500–₹5,000/night including meals
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Take the new Pangong–Leh road
                      via Merek and Spangmik on the return — the southern shore
                      route through Lukung and Tangtse is far less crowded and
                      even more scenic than the north shore road.
                    </div>
                  </section>

                  <section id="nubra">
                    <h3>Nubra Valley — The Valley of Flowers</h3>
                    <p>
                      Cross the world-famous <strong>Khardung La Pass</strong>{" "}
                      and descend into an entirely different world: Nubra
                      Valley, a broad, lush (by Ladakhi standards) valley where
                      sand dunes sit improbably between 6,000-metre peaks and
                      Bactrian camels plod across the dunes. The visual
                      incongruity — camels in a Himalayan valley — is one of
                      those travel moments you have to see to believe.
                    </p>
                    <p>
                      The key villages are <strong>Diskit</strong> (with its
                      enormous hilltop Maitreya Buddha statue) and{" "}
                      <strong>Hunder</strong> (the sand dunes and camels). The
                      valley also connects to the ancient Silk Road trade routes
                      towards Pakistan, and the Shyok River that runs through it
                      is one of Ladakh's most beautiful waterways. The Sumur
                      Monastery and Ensa Gompa are worth visiting for their
                      exceptional wall paintings.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Leh:</strong> 120 km via Khardung
                        La (~4 hours)
                      </li>
                      <li>
                        <strong>Permit:</strong> ILP required
                      </li>
                      <li>
                        <strong>Stay:</strong> Diskit and Hunder have excellent
                        guesthouses and camps (₹1,500–₹4,000/night)
                      </li>
                      <li>
                        <strong>Camel ride:</strong> ₹500–₹700 for a 20-minute
                        Bactrian camel ride at Hunder dunes
                      </li>
                    </ul>
                  </section>

                  <section id="khardung-la">
                    <h3>Khardung La Pass — The Gateway to Nubra</h3>
                    <p>
                      At 5,359 metres (17,582 ft), <strong>Khardung La</strong>
                      is the world's second-highest motorable pass (after
                      Mardung La, also in Ladakh) and the gateway to Nubra
                      Valley. The pass is both a practical necessity for
                      reaching Nubra and a pilgrimage in itself — the views from
                      the top across the Ladakh and Karakoram ranges are
                      extraordinary, and the sense of achievement of reaching
                      such altitude by road is real.
                    </p>
                    <p>
                      The road from Leh to Khardung La is maintained by the BRO
                      (Border Roads Organisation) and is in reasonable
                      condition. Spend no more than 20–30 minutes at the top —
                      altitude sickness at 5,359 m is swift. Take photos
                      quickly, drink water, and descend.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Note:</strong> Khardung La is NOT the world's
                      highest motorable pass (a common misconception from old
                      BRO signboards). Mardung La (5,582 m) and Semo La (5,565
                      m) in Ladakh itself are higher. It is, however, a genuine
                      achievement and a spectacular experience.
                    </div>
                  </section>

                  <section id="monasteries">
                    <h3>The Monasteries of Ladakh</h3>
                    <p>
                      Ladakh has more Buddhist monasteries per square kilometre
                      than anywhere else outside Tibet — and several rank among
                      the most spectacular religious buildings on earth. Here
                      are the essential ones:
                    </p>

                    <div className="space-y-4 my-4">
                      {[
                        {
                          name: "Thiksey Monastery",
                          detail:
                            "12 km from Leh. The most visually dramatic — 12 storeys rising from a hillside like a mini-Potala Palace. The giant Maitreya Buddha inside is 15 metres tall. Morning prayers at 6 AM are extraordinary.",
                          badge: "Must Visit",
                          badgeColor: "bg-forest-100 text-forest-700",
                        },
                        {
                          name: "Hemis Monastery",
                          detail:
                            "45 km from Leh. The largest and wealthiest monastery in Ladakh, belonging to the Drukpa Kagyu lineage. Home to the famous Hemis Festival (June–July) — the largest in Ladakh, with cham dance performances in elaborate masks.",
                          badge: "Festival Site",
                          badgeColor: "bg-amber-100 text-amber-700",
                        },
                        {
                          name: "Lamayuru Monastery",
                          detail:
                            "125 km from Leh on the Srinagar highway. The oldest monastery in Ladakh (11th century) set in an otherworldly 'moonland' landscape — eroded mud formations that look lunar. Often overlooked by Leh-focused itineraries.",
                          badge: "Oldest in Ladakh",
                          badgeColor: "bg-sky-100 text-sky-700",
                        },
                        {
                          name: "Diskit Monastery & Maitreya Buddha",
                          detail:
                            "In Nubra Valley. Ancient monastery on a cliff with a commanding 32-metre white Maitreya Buddha statue built to face Pakistan — a powerful symbol of peace. Best at golden hour.",
                          badge: "Nubra Valley",
                          badgeColor: "bg-purple-100 text-purple-700",
                        },
                        {
                          name: "Alchi Monastery",
                          detail:
                            "70 km from Leh. A 10th-century monastery complex in a riverine oasis — the only Ladakhi monastery on flat ground, making its ancient painted interiors (Kashmiri style, unlike anywhere else in Ladakh) accessible and intimate.",
                          badge: "10th Century",
                          badgeColor: "bg-rose-100 text-rose-700",
                        },
                      ].map((m) => (
                        <div
                          key={m.name}
                          className="flex gap-4 bg-white border border-stone-200 rounded-xl p-5 hover:border-forest-200 hover:shadow-sm transition-all"
                        >
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h4
                                className="font-bold text-stone-900"
                                style={{ fontFamily: "var(--font-playfair)" }}
                              >
                                {m.name}
                              </h4>
                              <span
                                className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${m.badgeColor}`}
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                {m.badge}
                              </span>
                            </div>
                            <p
                              className="text-sm text-stone-600 leading-relaxed m-0"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {m.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="magnetic-hill">
                    <h3>Magnetic Hill & Zanskar–Indus Sangam</h3>
                    <p>
                      About 30 km from Leh on the Srinagar highway,{" "}
                      <strong>Magnetic Hill</strong>
                      is a famous optical illusion — vehicles appear to roll
                      uphill on their own when parked in neutral on a particular
                      stretch of road. The explanation is a visual trick created
                      by the sloping landscape, but it's still a fun stop.
                    </p>
                    <p>
                      More genuinely spectacular is the{" "}
                      <strong>Zanskar–Indus Sangam</strong> 3 km away — the
                      confluence of the turquoise Zanskar River and the murky
                      green Indus, which run side by side without mixing for
                      several hundred metres, creating a dramatic two-tone
                      river. One of the most photogenic spots in all of Ladakh
                      and often missed by visitors rushing to Nubra or Pangong.
                    </p>
                  </section>

                  <section id="tso-moriri">
                    <h3>Tso Moriri Lake</h3>
                    <p>
                      If Pangong is Ladakh's most famous lake,{" "}
                      <strong>Tso Moriri</strong>
                      is its most pristine. At 4,522 metres and entirely within
                      India (unlike Pangong which extends into Tibet), Tso
                      Moriri is a Ramsar-designated wetland that protects
                      bar-headed geese, Brahminy ducks, and the rare
                      black-necked crane. The single village of Korzok on its
                      shore has a handful of basic homestays and a beautiful
                      monastery.
                    </p>
                    <p>
                      Tso Moriri receives dramatically fewer visitors than
                      Pangong and the experience is correspondingly more
                      tranquil and wild. The drive there via Chumathang (hot
                      springs) and the Rupshu plateau is itself extraordinary.
                      ILP required.
                    </p>
                  </section>

                  <section id="zanskar">
                    <h3>Zanskar Valley</h3>
                    <p>
                      The remote <strong>Zanskar Valley</strong> is Ladakh's
                      final frontier — cut off from Leh for 8–9 months of the
                      year by snow, accessible in summer via a spectacular but
                      brutal 230-km road from Kargil. The valley has its own
                      dialect, its own king, and some of Ladakh's most dramatic
                      monasteries — Phugtal (a 12th-century cave monastery
                      visible only to those who trek 2 hours) is one of the most
                      extraordinary buildings in Asia.
                    </p>
                    <p>
                      Zanskar is also the setting for the legendary{" "}
                      <strong>Chadar Trek</strong> — a winter traverse of the
                      frozen Zanskar River that is one of the world's most
                      challenging and remarkable walks. Requires 8–10 days, a
                      licensed guide, and temperatures of -20°C or below.
                    </p>
                  </section>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>14-Day Leh Ladakh Itinerary</h2>
                  <p>
                    This itinerary uses the classic circuit: fly or drive into
                    Leh, explore the Leh valley and surroundings, then loop to
                    Nubra, Pangong, Tso Moriri, and exit via the Manali–Leh
                    highway. It builds in proper acclimatisation which is
                    non-negotiable.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Arrival in Leh — Acclimatise",
                        color: "bg-sky-700",
                        activities: [
                          "Arrive by flight or after Srinagar–Leh drive",
                          "Rest completely — no sightseeing, no exertion (day 1)",
                          "Drink 4+ litres water, eat light (dal-rice, soup)",
                          "Day 2: Gentle walk around Leh market and Leh Palace",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Leh City & Monasteries",
                        color: "bg-sky-600",
                        activities: [
                          "Leh Palace (7-storey, 17th century) — morning visit",
                          "Shanti Stupa sunrise walk (dawn only)",
                          "Thiksey Monastery (6 AM morning prayers if timing aligns)",
                          "Hemis Monastery in the afternoon",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Magnetic Hill, Alchi & Sangam",
                        color: "bg-forest-600",
                        activities: [
                          "Magnetic Hill optical illusion stop",
                          "Zanskar–Indus Sangam — the two-colour confluence",
                          "Alchi Monastery — 10th-century Kashmiri-style paintings",
                          "Lamayuru Moonland (overnight or return to Leh)",
                        ],
                      },
                      {
                        day: "Day 5–6",
                        title: "Nubra Valley via Khardung La",
                        color: "bg-forest-500",
                        activities: [
                          "Cross Khardung La Pass (5,359 m) — don't linger at top",
                          "Descend to Diskit: Diskit Monastery & Maitreya Buddha",
                          "Hunder sand dunes — Bactrian camel ride at sunset",
                          "Overnight at Hunder camp; Day 6 explore Sumur/Turtuk",
                        ],
                      },
                      {
                        day: "Day 7–8",
                        title: "Pangong Tso via Shyok",
                        color: "bg-amber-600",
                        activities: [
                          "Drive Nubra → Pangong via Shyok River road (200 km, 7 hrs)",
                          "Arrive Pangong afternoon — check in to lakeside camp",
                          "Sunset on the lake shore — watch the colours shift",
                          "Day 8: Sunrise at Pangong, explore south shore Merek",
                        ],
                      },
                      {
                        day: "Day 9",
                        title: "Pangong → Leh via Chang La",
                        color: "bg-amber-500",
                        activities: [
                          "Early departure from Pangong",
                          "Chang La Pass (5,360 m) — second highest on this route",
                          "Durbuk village lunch stop",
                          "Return to Leh by evening — rest and gear check",
                        ],
                      },
                      {
                        day: "Day 10–11",
                        title: "Tso Moriri & Rupshu Plateau",
                        color: "bg-stone-600",
                        activities: [
                          "Drive to Tso Moriri via Chumathang hot springs (220 km)",
                          "Korzok village and monastery on lake shore",
                          "Overnight at Korzok homestay — bring warm layers",
                          "Day 11: Sunrise at Tso Moriri, birdwatching (bar-headed geese)",
                        ],
                      },
                      {
                        day: "Day 12",
                        title: "Tso Moriri → Leh via Puga",
                        color: "bg-stone-500",
                        activities: [
                          "Return via Puga geothermal valley (steaming vents)",
                          "Mahe village ancient rock carvings stop",
                          "Back to Leh by afternoon — last market evening",
                          "Stock up on dry fruit, pashmina, Ladakhi apricot jam",
                        ],
                      },
                      {
                        day: "Day 13–14",
                        title: "Leh → Manali via Manali Highway",
                        color: "bg-sky-800",
                        activities: [
                          "Day 13: Leh → Sarchu via Tanglang La (5,328 m), Pang, More Plains",
                          "Overnight at Sarchu tent camp (4,250 m) — acclimatise down",
                          "Day 14: Sarchu → Manali via Baralacha La, Rohtang Pass",
                          "Arrive Manali evening — hot shower and momos well-earned",
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

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Leh Ladakh</h2>
                  <p>
                    Leh has the widest accommodation range. Nubra, Pangong, and
                    Tso Moriri are mostly homestays and tent camps. Book at
                    least 4–6 weeks ahead for peak August travel.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,500/night",
                        picks: [
                          "Zostel Leh",
                          "Old Leh House (guesthouse)",
                          "Changspa area guesthouses",
                          "Tent camps at Pangong (basic)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹5,000/night",
                        picks: [
                          "Hotel Ladakh Palace",
                          "Lha-Ri-Sa Resort",
                          "Pangong Retreat Camp",
                          "Nubra Eco Camp",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹8,000–₹40,000+/night",
                        picks: [
                          "The Grand Dragon (Leh)",
                          "Chamba Camp Pangong",
                          "Nimmu House (riverside)",
                          "Shakti Ladakh (village lodge)",
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
                  <h2>What to Eat in Leh Ladakh</h2>
                  <p>
                    Ladakhi cuisine is heavily Tibetan-influenced — hearty,
                    warming, and designed for people living at high altitude. In
                    Leh city you'll find excellent international options too,
                    built up over decades of foreign tourist traffic.
                  </p>
                  <ul>
                    <li>
                      <strong>Skyu:</strong> Ladakh's soul food — thick
                      pasta-like dough cooked in a hearty vegetable or meat
                      broth. Warming, filling, and deeply nourishing at
                      altitude.
                    </li>
                    <li>
                      <strong>Thukpa:</strong> Tibetan noodle soup — available
                      everywhere in Leh and at roadside dhabas on the highways.
                      Order extra at Sarchu and Pang where it's often the only
                      option.
                    </li>
                    <li>
                      <strong>Momos:</strong> Steamed dumplings with veg,
                      paneer, or meat. The momos at Tibetan Kitchen in Leh are
                      exceptional.
                    </li>
                    <li>
                      <strong>Tsampa:</strong> Roasted barley flour mixed with
                      butter tea or water — the traditional Ladakhi staple,
                      extremely nourishing at altitude.
                    </li>
                    <li>
                      <strong>Butter Tea (Gur Gur Chai):</strong> Salted,
                      yak-butter churned tea — an acquired taste for most, but
                      essential for warmth and hydration at altitude. Try at any
                      monastery or homestay.
                    </li>
                    <li>
                      <strong>Apricot jam & products:</strong> Ladakh produces
                      the finest apricots in India — the wild apricot jam,
                      apricot oil, and dried apricots from Nubra Valley are
                      extraordinary. Buy directly from villagers.
                    </li>
                    <li>
                      <strong>Leh restaurants:</strong> Tibetan Kitchen (best
                      momos), The Bookshelf Café (great coffee, international
                      food), Lamayuru Restaurant (rooftop, Leh Palace views),
                      Bon Appetit (continental).
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for Leh Ladakh</h2>
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
                            "Accommodation/night (Leh)",
                            "₹600",
                            "₹2,500",
                            "₹10,000",
                          ],
                          [
                            "Accommodation/night (Camps)",
                            "₹1,500",
                            "₹3,500",
                            "₹12,000",
                          ],
                          ["Food/day", "₹400", "₹800", "₹2,000"],
                          [
                            "Vehicle (bike/car per day)",
                            "₹1,200",
                            "₹3,500",
                            "₹6,000",
                          ],
                          ["Permits (ILP all areas)", "₹400", "₹400", "₹400"],
                          ["Activities & entries", "₹200", "₹600", "₹1,500"],
                          [
                            "Daily total (approx)",
                            "₹2,800",
                            "₹7,300",
                            "₹21,500",
                          ],
                          [
                            "14-Day trip total",
                            "₹39,000",
                            "₹1,02,000",
                            "₹3,00,000+",
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
                    * Excludes flights to/from Leh (₹4,000–₹12,000 one-way from
                    Delhi) and international travel insurance.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Leh Ladakh</h2>
                  <ul>
                    <li>
                      <strong>Acclimatisation is survival, not comfort:</strong>
                      Acute Mountain Sickness (AMS) kills in Ladakh every
                      season. Rest completely for 24–48 hours after arriving in
                      Leh regardless of how good you feel. Symptoms include
                      headache, nausea, and dizziness — these are warnings, not
                      minor inconveniences. Descend immediately if symptoms
                      worsen.
                    </li>
                    <li>
                      <strong>Carry Diamox (acetazolamide):</strong> Consult
                      your doctor before travel. A standard protocol is 125 mg
                      twice daily starting 24 hours before ascent. It
                      significantly reduces AMS risk. Also carry Disprin, ORS
                      sachets, and a pulse oximeter (SpO2 below 85% at rest in
                      Leh = descend).
                    </li>
                    <li>
                      <strong>Fuel up at every opportunity:</strong> There are
                      petrol pumps only at Leh, Kargil, and a few limited
                      points. Between Manali and Leh, the only fuel is at
                      Keylong and Tandi. Between Leh and Nubra, carry extra.
                      Between Leh and Pangong, carry extra. A jerry can is
                      essential on a bike.
                    </li>
                    <li>
                      <strong>Cash is king:</strong> ATMs in Leh (SBI, PNB, J&K
                      Bank) work reasonably well but run dry in peak season.
                      There are zero ATMs at Pangong, Nubra, or Tso Moriri.
                      Carry ₹20,000–₹30,000 in cash for a 14-day trip.
                    </li>
                    <li>
                      <strong>BSNL or Airtel for connectivity:</strong> Jio has
                      limited coverage in Ladakh. Airtel works in Leh and
                      immediate surroundings. BSNL prepaid works most reliably
                      across the region — get a local SIM in Leh if possible. No
                      signal at Pangong, Tso Moriri, or on the Manali–Leh
                      highway between Sarchu and Pang.
                    </li>
                    <li>
                      <strong>Sunscreen, sunglasses, and lip balm:</strong> The
                      UV index at 3,500–5,300 metres is extreme. SPF 50+ on all
                      exposed skin every day. Polarised UV-400 sunglasses are
                      essential — snow blindness is a real risk on the passes.
                      Lips crack and bleed rapidly at altitude without
                      protection.
                    </li>
                    <li>
                      <strong>Respect the environment and culture:</strong>
                      Ladakh's ecosystem is extraordinarily fragile. Pack out
                      all plastic. Do not use single-use plastic water bottles —
                      carry a reusable and fill from monastery taps (the water
                      is clean). In monasteries: remove shoes, no photography of
                      certain interiors (ask), dress modestly.
                    </li>
                    <li>
                      <strong>BRO road conditions:</strong> Check road status
                      daily via the BRO Ladakh Twitter/X (@BROLadakh) or at your
                      guesthouse. Landslides, snow, and floods can close key
                      roads with zero notice. Build flexibility into your
                      itinerary — if Pangong road closes, you need a Plan B.
                    </li>
                  </ul>

                  {/* Altitude Sickness Card */}
                  <div className="bg-stone-900 text-white rounded-xl p-6 my-8">
                    <h4
                      className="font-bold text-white mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🩺</span> Altitude Sickness in Ladakh — Know the
                      Levels
                    </h4>
                    <div
                      className="space-y-3"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          level: "Mild AMS",
                          color: "bg-amber-500/20 border-amber-500/30",
                          symptoms:
                            "Headache, fatigue, loss of appetite, mild nausea",
                          action:
                            "Rest, hydrate, take Diamox 125mg. Do not ascend further.",
                        },
                        {
                          level: "Moderate AMS",
                          color: "bg-orange-500/20 border-orange-500/30",
                          symptoms:
                            "Severe headache, vomiting, breathlessness on minor exertion, dizziness",
                          action:
                            "Descend 500–1000m immediately. Take Diamox 250mg. Seek medical help in Leh.",
                        },
                        {
                          level: "Severe AMS / HACE / HAPE",
                          color: "bg-red-500/20 border-red-500/30",
                          symptoms:
                            "Confusion, inability to walk straight, breathlessness at rest, coughing blood or frothy sputum",
                          action:
                            "EMERGENCY. Descend immediately regardless of time/weather. Call for help. This is life-threatening.",
                        },
                      ].map((s) => (
                        <div
                          key={s.level}
                          className={`border ${s.color} rounded-lg p-4`}
                        >
                          <div className="font-semibold text-white text-sm mb-1">
                            {s.level}
                          </div>
                          <div className="text-stone-400 text-xs mb-1">
                            <strong className="text-stone-300">
                              Symptoms:
                            </strong>{" "}
                            {s.symptoms}
                          </div>
                          <div className="text-stone-400 text-xs">
                            <strong className="text-stone-300">Action:</strong>{" "}
                            {s.action}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

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
                          "Acclimatise for 2 full days in Leh before any pass crossing",
                          "Carry a pulse oximeter and check SpO2 daily",
                          "Obtain all ILPs before leaving Leh",
                          "Carry ₹25,000+ cash for a 14-day trip",
                          "Attend Thiksey morning prayers at 6 AM",
                          "Camp overnight at Pangong for sunrise",
                          "Try Skyu and butter tea at a homestay",
                          "Check BRO road status daily",
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
                          "Rush from sea level to Leh in one day by road",
                          "Ignore headache or nausea — these are warnings",
                          "Drink alcohol in the first 48 hours in Leh",
                          "Drive Manali–Leh without a high-clearance vehicle",
                          "Assume ATMs will work — carry cash",
                          "Linger more than 20 minutes at Khardung La top",
                          "Travel without travel insurance covering altitude evacuation",
                          "Skip the ILP — checkpoints are strict and will turn you back",
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
                  "Leh Ladakh",
                  "Road Trip",
                  "High Altitude",
                  "India",
                  "Monasteries",
                  "Pangong Lake",
                  "Nubra Valley",
                  "Bikes",
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

              <RelatedPostsGrid />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
