// src/app/blog/sonamarg-travel-guide/page.tsx
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
  title: "Sonamarg Travel Guide: Thajiwas Glacier & How to Visit",
  description:
    "Complete Sonamarg travel guide: Thajiwas Glacier, distance from Srinagar, best time to visit, Zoji La pass to Ladakh, where to stay, and a 2-day itinerary.",
  keywords:
    "Sonamarg travel guide, Thajiwas Glacier trek, Sonamarg to Srinagar distance, Zoji La pass, best time to visit Sonamarg, Sonamarg Kashmir, Baltal Amarnath route, Kashmir Great Lakes trek, Sindh River Sonamarg",
  openGraph: {
    title: "Sonamarg Travel Guide: Thajiwas Glacier & How to Visit",
    description:
      "Kashmir's 'Meadow of Gold' — Thajiwas Glacier, the Sindh River valley, and the road to Zoji La and Ladakh. The complete Sonamarg travel guide.",
    url: "https://club.kudozz.in/blog/sonamarg-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Snow-capped peaks and the Sindh River valley near Sonamarg, Kashmir",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonamarg Travel Guide: Thajiwas Glacier & How to Visit",
    description:
      "Kashmir's 'Meadow of Gold' — Thajiwas Glacier, the Sindh River valley, and the road to Zoji La and Ladakh. The complete Sonamarg travel guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/sonamarg-travel-guide",
  },
};

// ── JSON-LD: Article ─────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Sonamarg Travel Guide: Thajiwas Glacier & How to Visit",
          description:
            "Complete Sonamarg travel guide: Thajiwas Glacier, distance from Srinagar, best time to visit, Zoji La pass to Ladakh, where to stay, and a 2-day itinerary.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/sonamarg-travel-guide",
          },
          keywords:
            "Sonamarg travel guide, Thajiwas Glacier trek, Sonamarg to Srinagar distance, Zoji La pass, best time to visit Sonamarg",
          about: {
            "@type": "Place",
            name: "Sonamarg",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Jammu and Kashmir",
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
                name: "Jammu & Kashmir",
                item: "https://club.kudozz.in/blog/jammu-kashmir-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Sonamarg Travel Guide",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── JSON-LD: FAQ ──────────────────────────────────────────────────────────────
function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is Sonamarg a day trip from Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Sonamarg is one of the three classic Srinagar day trips, alongside Gulmarg and Pahalgam. Most visitors leave Srinagar by 7-8 AM, spend a few hours at Thajiwas Glacier and the Sindh River valley, and return by evening. An overnight stay is worthwhile if you want a quieter morning at the meadow or plan to push toward the Zoji La viewpoint.",
              },
            },
            {
              "@type": "Question",
              name: "How far is Sonamarg from Srinagar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sonamarg is roughly 80 km from Srinagar via NH1, and the drive takes about 2.5 to 3 hours depending on traffic and road conditions. The route runs alongside the Sindh River for much of the way and is scenic in its own right.",
              },
            },
            {
              "@type": "Question",
              name: "Is Thajiwas Glacier worth visiting?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, particularly for travellers who want an accessible glacier experience without technical trekking. It's a short pony ride or a 1-2 hour walk from Sonamarg town through pine forest and open meadow, ending at packed snow and ice even in the middle of summer.",
              },
            },
            {
              "@type": "Question",
              name: "What is the best time to visit Sonamarg?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "May to October is the best window, when the Srinagar-Leh highway through Zoji La is open and Sonamarg's meadows are green. June and September are particularly good for fewer crowds; peak summer (July-August) is busiest but still comfortable, with daytime temperatures around 15-25°C.",
              },
            },
            {
              "@type": "Question",
              name: "Can I visit Sonamarg in winter?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sonamarg town itself is sometimes reachable in winter, but heavy snowfall frequently closes the road beyond it, and the Zoji La pass shuts down completely from around November to April. Winter visits are unpredictable and depend entirely on the day's road conditions, so they're not recommended as a planned itinerary stop.",
              },
            },
            {
              "@type": "Question",
              name: "Is Sonamarg on the way to Ladakh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Sonamarg is the last major town in the Kashmir Valley before the road climbs to Zoji La pass (about 3,528 m) and continues on to Dras, Kargil, and eventually Leh. It's the natural overnight stop for anyone driving the Srinagar-Leh highway.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need a permit to visit Sonamarg?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No permit is required to visit Sonamarg itself, since it lies within Jammu & Kashmir. Permits only become relevant if you continue past Zoji La into Ladakh, where certain further-flung areas require an Inner Line Permit — Sonamarg and Thajiwas Glacier are open to all visitors.",
              },
            },
          ],
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Sonamarg?", level: 2 },
  { id: "best-time", title: "Best Time to Visit Sonamarg", level: 2 },
  { id: "how-to-reach", title: "How to Reach Sonamarg", level: 2 },
  { id: "thajiwas-glacier", title: "Thajiwas Glacier", level: 2 },
  { id: "other-sights", title: "Other Sights Around Sonamarg", level: 2 },
  { id: "adventure", title: "Adventure Activities", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "1-2 Day Sonamarg Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SonamargGuidePage() {
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
              src="/images/destinations/jammu-kashmir/hero.jpg"
              alt="Snow-capped peaks and the Sindh River valley near Sonamarg, Kashmir"
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
                  label: "Jammu & Kashmir",
                  href: "/blog/jammu-kashmir-travel-guide",
                },
                { label: "Sonamarg", href: null },
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
                "Sonamarg",
                "Jammu & Kashmir",
                "Thajiwas Glacier",
                "Zoji La",
                "Ladakh Gateway",
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
              Sonamarg Travel Guide: Kashmir's Meadow of Gold
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A glacier you can walk to, a river valley that never stops
              moving, and the last stretch of Kashmir before the road climbs
              into Ladakh — this is the complete guide to Sonamarg.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "13 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Sonamarg, Jammu & Kashmir, India",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,700 words",
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
                      d={m.d}
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
                  <h2>Why Visit Sonamarg?</h2>
                  <p>
                    <strong>Sonamarg</strong> — literally "Meadow of Gold" in
                    Kashmiri, from <em>sona</em> (gold) and <em>marg</em>{" "}
                    (meadow) — sits at roughly 2,800 metres along the{" "}
                    <strong>Sindh River</strong>, about 80 km from Srinagar.
                    The name is usually explained one of two ways: the golden
                    hue saffron and wildflowers give the meadows in season, or
                    simply the way early morning and evening light turns the
                    grass and glacial water gold. Either way, it's an
                    accurate name for a place that looks genuinely different
                    from the rest of the Kashmir Valley.
                  </p>
                  <p>
                    Unlike <Link href="/blog/gulmarg-travel-guide">Gulmarg</Link>{" "}
                    and <Link href="/blog/pahalgam-travel-guide">Pahalgam</Link>,
                    which read as destinations in themselves, Sonamarg carries
                    a dual identity — a beautiful valley town worth visiting
                    on its own merits, and the last stop in Kashmir before
                    the highway climbs to <strong>Zoji La</strong> and
                    continues toward Ladakh. That in-between quality gives it
                    a distinct atmosphere: part alpine meadow retreat, part
                    highway staging post for travellers headed further east.
                  </p>
                  <p>
                    Most visitors experience Sonamarg as a day trip from{" "}
                    <Link href="/blog/srinagar-travel-guide">Srinagar</Link>,
                    built around the walk or pony ride to{" "}
                    <strong>Thajiwas Glacier</strong>. It's covered in more
                    depth in our{" "}
                    <Link href="/blog/jammu-kashmir-travel-guide">
                      Jammu & Kashmir travel guide
                    </Link>
                    , but it earns its own detailed guide — there's enough
                    here, from glacier walks to high-altitude lake treks, to
                    fill a full day and then some.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Sonamarg at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Ganderbal, Jammu & Kashmir",
                        },
                        {
                          icon: "⛰️",
                          label: "Elevation",
                          value: "~2,800 m (9,186 ft)",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "May – October",
                        },
                        {
                          icon: "🧊",
                          label: "Road Open",
                          value: "Approx. Apr/May – Nov",
                        },
                        {
                          icon: "🚗",
                          label: "From Srinagar",
                          value: "~80 km / 2.5–3 hrs",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit Sonamarg</h2>
                  <p>
                    Sonamarg's season is dictated by the Zoji La highway —
                    when the pass is snowbound, the road effectively ends at
                    Sonamarg town, and when it's open, the whole route to
                    Ladakh comes alive. The window that matters most is
                    roughly <strong>May to October</strong>, though even
                    within that stretch the character of a visit changes
                    month to month.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – Jun",
                        emoji: "🌱",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Road just reopened",
                        text: "The Srinagar–Leh highway reopens after winter closure, meadows are freshly green, and Thajiwas Glacier's lower reaches are easily reached. Some slush and unpredictable weather early in the month.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — busiest",
                        text: "Warm days (15–25°C), the fullest meadows, and the highest visitor numbers, partly overlapping with the Amarnath Yatra season via nearby Baltal. Book stays ahead if visiting in this window.",
                      },
                      {
                        season: "Sep – Oct",
                        emoji: "🍂",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Our pick — quiet and crisp",
                        text: "Clear skies, thinner crowds, and cooler air that makes the glacier walk more comfortable. Early snow can dust the higher peaks by late October, adding to the scenery without closing the road.",
                      },
                      {
                        season: "Nov – Apr",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Mostly inaccessible",
                        text: "Heavy snowfall closes Zoji La and frequently the road beyond Sonamarg town itself. Not a reliable season to plan around — check current conditions before attempting a winter visit.",
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
                    <strong>Our pick:</strong> Early-to-mid September. The
                    meadows are still green, the summer crowds have thinned
                    out, and the air is clear enough that both Thajiwas
                    Glacier and the distant peaks toward Zoji La are at their
                    most photogenic.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Sonamarg</h2>
                  <p>
                    Sonamarg sits directly on <strong>NH1</strong>, the same
                    highway that connects Srinagar to Leh — so getting there
                    is straightforward, and the drive itself is part of the
                    experience.
                  </p>
                  <ul>
                    <li>
                      <strong>From Srinagar:</strong> The most common route —
                      roughly 80 km, taking 2.5 to 3 hours by shared cab,
                      private taxi, or self-drive. The road runs alongside
                      the Sindh River valley for most of the way, passing
                      through Kangan and Gund.
                    </li>
                    <li>
                      <strong>By shared sumo/cab:</strong> Shared vehicles
                      leave from Srinagar's TRC (Tourist Reception Centre)
                      through the morning — the cheapest way in, though on a
                      fixed schedule rather than door-to-door timing.
                    </li>
                    <li>
                      <strong>Nearest airport:</strong> Srinagar Airport,
                      about 90 km away, is the nearest air link — there's no
                      airport closer to Sonamarg itself.
                    </li>
                    <li>
                      <strong>Onward to Zoji La and Ladakh:</strong> Sonamarg
                      is the last fuel and supply stop before the climb to{" "}
                      <strong>Zoji La pass</strong> (~3,528 m), after which
                      the highway continues to Dras, Kargil, and Leh. Anyone
                      driving the Srinagar–Leh highway typically treats
                      Sonamarg as an overnight halt before or after the pass.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you're combining Sonamarg
                    with{" "}
                    <Link href="/blog/gulmarg-travel-guide">Gulmarg</Link> and{" "}
                    <Link href="/blog/pahalgam-travel-guide">Pahalgam</Link>{" "}
                    as separate Srinagar day trips, do Sonamarg on a clear day
                    — cloud cover low in the valley can hide the glacier and
                    the peaks toward Zoji La entirely.
                  </div>
                </section>

                {/* ── Thajiwas Glacier ────────────────────────────────────── */}
                <section id="thajiwas-glacier">
                  <h2>Thajiwas Glacier</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Snow-covered slopes near Thajiwas Glacier above Sonamarg meadow"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    <strong>Thajiwas Glacier</strong> is Sonamarg's single
                    biggest draw, and the reason most day trips are built
                    around it. It sits a few kilometres from the main town,
                    reached by a walking trail through pine forest and open
                    meadow that climbs gently rather than steeply — genuinely
                    accessible without prior trekking experience, which is
                    unusual for a Himalayan glacier.
                  </p>
                  <ul>
                    <li>
                      <strong>On foot:</strong> The walk takes roughly 1–2
                      hours each way at an easy pace, gaining modest altitude
                      through meadow and forest before reaching the packed
                      snow and ice near the glacier's base.
                    </li>
                    <li>
                      <strong>By pony:</strong> Ponies are available from the
                      base of the trail for visitors who'd rather ride up —
                      the standard option for families, older travellers, or
                      anyone short on time. Rates are negotiated on the spot
                      and vary by season and demand.
                    </li>
                    <li>
                      <strong>Snow, even in summer:</strong> Thajiwas holds
                      snow well into the warmer months, so visitors in June
                      or July often find packed snowfields for sledding and
                      photos even when Sonamarg's own meadow is fully green.
                    </li>
                    <li>
                      <strong>Best season:</strong> May through September for
                      the easiest access and clearest weather; the trail can
                      be muddy right after the spring melt, so footwear with
                      grip matters more than it looks like it should.
                    </li>
                  </ul>
                  <blockquote>
                    Thajiwas rewards an early start — the trail gets busy
                    with pony traffic by mid-morning, and the light on the
                    ice is noticeably better before the sun is directly
                    overhead.
                  </blockquote>
                </section>

                {/* ── Other Sights ──────────────────────────────────────── */}
                <section id="other-sights">
                  <h2>Other Sights Around Sonamarg</h2>
                  <p>
                    Thajiwas gets most of the attention, but Sonamarg's real
                    appeal is the valley around it — a genuine crossroads
                    between Kashmir's meadows and Ladakh's high desert.
                  </p>
                  <ul>
                    <li>
                      <strong>Sindh River:</strong> The river that gives the
                      valley its shape, running alongside the highway for
                      most of the drive in from Srinagar. Its banks make for
                      an easy, unhurried walk, and the sound of the water is
                      as much a part of Sonamarg as the meadow itself.
                    </li>
                    <li>
                      <strong>Zoji La viewpoint:</strong> The drive up toward{" "}
                      <strong>Zoji La pass</strong> (~3,528 m) offers
                      dramatic views back down into the Sindh valley — the
                      landscape visibly shifts from Kashmir's green to
                      Ladakh's barren high-altitude terrain within a short
                      stretch of road. This pass is the physical and visual
                      hinge point of the whole Kashmir-to-Ladakh journey.
                    </li>
                    <li>
                      <strong>Baltal:</strong> About 15 km from Sonamarg,
                      Baltal is the shorter, steeper base route for the{" "}
                      <strong>Amarnath Yatra</strong> pilgrimage — an
                      alternative to the longer Pahalgam route, active during
                      the annual yatra season (typically July–August).
                    </li>
                    <li>
                      <strong>Vishansar & Krishansar Lakes:</strong> For
                      serious trekkers, these twin high-altitude lakes are
                      early stops on the multi-day{" "}
                      <strong>Kashmir Great Lakes Trek</strong>, which
                      typically begins near Sonamarg (via Shitkadi/Nichnai)
                      and continues over several days to further alpine
                      lakes. Not a day-trip destination, but worth knowing
                      about if Sonamarg is your jumping-off point for a
                      longer trek.
                    </li>
                  </ul>
                </section>

                {/* ── Adventure Activities ────────────────────────────────── */}
                <section id="adventure">
                  <h2>Adventure Activities in Sonamarg</h2>
                  <ul>
                    <li>
                      <strong>Rafting on the Sindh River:</strong> Short,
                      family-friendly rafting stretches (broadly Grade I–II)
                      run on sections of the Sindh near Sonamarg — a mellow
                      introduction to river rafting rather than a whitewater
                      thrill ride, and a nice contrast to the glacier walk.
                    </li>
                    <li>
                      <strong>Trekking to Thajiwas Glacier:</strong> Covered
                      above — the most accessible trek in the area, doable in
                      a half-day.
                    </li>
                    <li>
                      <strong>Kashmir Great Lakes Trek:</strong> A serious
                      multi-day trek (roughly 6–8 days) beginning near
                      Sonamarg and passing Vishansar, Krishansar, Gadsar, and
                      Satsar lakes before finishing near Naranag — one of the
                      most celebrated treks in the Indian Himalaya, requiring
                      proper preparation and, ideally, a guided outfit.
                    </li>
                    <li>
                      <strong>Sledding on Thajiwas' snow patches:</strong> A
                      casual, low-effort activity available on the packed
                      snow near the glacier through much of the season,
                      popular with families.
                    </li>
                    <li>
                      <strong>Camping by the meadow:</strong> Basic camping
                      setups operate seasonally in and around Sonamarg,
                      offering a quieter alternative to the town's hotels for
                      travellers who want a night under genuinely dark,
                      high-altitude skies.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Sonamarg</h2>
                  <p>
                    Sonamarg's accommodation is smaller in scale than
                    Srinagar or Gulmarg — mostly guesthouses and mid-range
                    hotels along the main road, plus seasonal camping. Most
                    visitors treat it as a day trip and stay in Srinagar, but
                    an overnight here has its own quiet appeal.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Basic guesthouses, main road",
                          "Seasonal riverside camps",
                          "Dhaba-attached rooms",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Hotel Snowland, Sonamarg",
                          "Hotel Glacier Heights",
                          "Riverside cottages",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹6,000–₹12,000+/night",
                        picks: [
                          "Alpine Ridge Resort",
                          "Deluxe valley-view suites",
                          "Premium meadow-facing camps",
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
                    If your itinerary also includes{" "}
                    <Link href="/blog/gulmarg-travel-guide">Gulmarg</Link> and{" "}
                    <Link href="/blog/pahalgam-travel-guide">Pahalgam</Link>,
                    basing yourself in Srinagar and day-tripping to all three
                    is usually more efficient than moving hotels each night —
                    save an overnight in Sonamarg for when you're
                    specifically heading toward Zoji La the next morning.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Sonamarg</h2>
                  <p>
                    Sonamarg's food scene is simple and highway-town in
                    character — dhabas and small hotel kitchens rather than
                    destination restaurants — but it covers Kashmiri
                    staples reliably well.
                  </p>
                  <ul>
                    <li>
                      <strong>Kahwa:</strong> Saffron and cardamom-spiced
                      green tea, the standard warming drink at this altitude
                      — worth having straight off the Thajiwas trail.
                    </li>
                    <li>
                      <strong>Rogan Josh & Yakhni:</strong> The same rich
                      mutton curries found across the valley, served at
                      roadside dhabas alongside rice or Kashmiri bread.
                    </li>
                    <li>
                      <strong>Maggi & momos:</strong> The default trekker and
                      traveller food at high-altitude stalls near the
                      Thajiwas trailhead — quick, hot, and reliably available.
                    </li>
                    <li>
                      <strong>Fresh trout:</strong> Sindh River trout appears
                      on a handful of local menus, pan-fried simply — worth
                      seeking out if you spot it.
                    </li>
                    <li>
                      <strong>Kashmiri bread:</strong> Girda and sheermal
                      from small local bakeries, best with a cup of kahwa on
                      a cold morning before setting out for the glacier.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>1-2 Day Sonamarg Itinerary</h2>
                  <p>
                    A single day covers Sonamarg comfortably as a Srinagar
                    day trip; a second day is only worth adding if you're
                    continuing toward Zoji La or want unhurried time at the
                    glacier and river.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Srinagar to Sonamarg & Thajiwas Glacier",
                        color: "bg-amber-700",
                        activities: [
                          "Depart Srinagar by 7–8 AM via NH1",
                          "Arrive Sonamarg, start Thajiwas trail (walk or pony)",
                          "Explore the glacier's snowfields, photos, sledding",
                          "Lunch in Sonamarg town, walk the Sindh riverbank",
                          "Return to Srinagar by evening, or check into a Sonamarg stay",
                        ],
                      },
                      {
                        day: "Day 2 (optional)",
                        title: "Zoji La Viewpoint & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Early morning drive toward the Zoji La viewpoint",
                          "Views over the pass into Ladakh's high-altitude terrain",
                          "Optional stop at Baltal (Amarnath Yatra base route)",
                          "Short Sindh River rafting stretch, if operating",
                          "Return drive to Srinagar by afternoon",
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

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
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
                            "₹8,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Srinagar–Sonamarg cab (round trip)",
                            "₹2,500",
                            "₹3,500",
                            "₹5,000",
                          ],
                          [
                            "Thajiwas pony/glacier trip",
                            "₹800",
                            "₹1,200",
                            "₹1,800",
                          ],
                          ["Daily total", "₹5,000", "₹9,400", "₹17,300"],
                          [
                            "2-Day trip total",
                            "₹8,500",
                            "₹16,500",
                            "₹31,000",
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
                    * Excludes flights/train to Srinagar. Cab hire for the
                    round trip and the Thajiwas pony ride are typically the
                    largest variable costs for a Sonamarg day trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Sonamarg</h2>
                  <ul>
                    <li>
                      <strong>Mind the altitude:</strong> At around 2,800 m,
                      mild breathlessness on the Thajiwas walk is normal for
                      visitors coming straight from sea level — pace
                      yourself and stay hydrated.
                    </li>
                    <li>
                      <strong>Check road conditions before driving further:</strong>{" "}
                      If continuing past Sonamarg toward Zoji La, confirm the
                      pass is open — it closes without much notice in poor
                      weather even within the official season.
                    </li>
                    <li>
                      <strong>Negotiate pony rates upfront:</strong> Thajiwas
                      pony rates are unofficial and vary by season and
                      demand — agree on the full round-trip price before
                      setting off.
                    </li>
                    <li>
                      <strong>Pack for cold regardless of season:</strong>{" "}
                      Sonamarg runs noticeably colder than Srinagar even in
                      peak summer, and wind at the glacier adds to the chill
                      — carry a proper jacket year-round.
                    </li>
                    <li>
                      <strong>Wear proper footwear:</strong> The Thajiwas
                      trail crosses mud, packed snow, and loose gravel — grip
                      matters more than it looks like it should from photos.
                    </li>
                    <li>
                      <strong>Start early on a Srinagar day trip:</strong> An
                      early departure means clearer light for photos, less
                      traffic on NH1, and first access to the Thajiwas trail
                      before pony traffic builds up.
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
                          "Start early to beat pony traffic on the Thajiwas trail",
                          "Carry a proper jacket even in peak summer",
                          "Confirm Zoji La road status before driving beyond Sonamarg",
                          "Agree on pony rates before setting off",
                          "Carry cash — card acceptance is limited outside Srinagar",
                          "Wear footwear with grip for mud and packed snow",
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
                          "Plan a winter visit without checking current road status",
                          "Underestimate the cold at 2,800 m, even in July",
                          "Attempt the Kashmir Great Lakes Trek without preparation or a guide",
                          "Rush past Zoji La in poor weather or low light",
                          "Skip travel insurance if continuing toward Ladakh",
                          "Rely on mobile network beyond the main town",
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

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-5 my-6">
                    {[
                      {
                        q: "Is Sonamarg a day trip from Srinagar?",
                        a: "Yes. Sonamarg is one of the three classic Srinagar day trips, alongside Gulmarg and Pahalgam. Most visitors leave Srinagar by 7-8 AM, spend a few hours at Thajiwas Glacier and the Sindh River valley, and return by evening. An overnight stay is worthwhile if you want a quieter morning at the meadow or plan to push toward the Zoji La viewpoint.",
                      },
                      {
                        q: "How far is Sonamarg from Srinagar?",
                        a: "Sonamarg is roughly 80 km from Srinagar via NH1, and the drive takes about 2.5 to 3 hours depending on traffic and road conditions. The route runs alongside the Sindh River for much of the way and is scenic in its own right.",
                      },
                      {
                        q: "Is Thajiwas Glacier worth visiting?",
                        a: "Yes, particularly for travellers who want an accessible glacier experience without technical trekking. It's a short pony ride or a 1-2 hour walk from Sonamarg town through pine forest and open meadow, ending at packed snow and ice even in the middle of summer.",
                      },
                      {
                        q: "What is the best time to visit Sonamarg?",
                        a: "May to October is the best window, when the Srinagar-Leh highway through Zoji La is open and Sonamarg's meadows are green. June and September are particularly good for fewer crowds; peak summer (July-August) is busiest but still comfortable, with daytime temperatures around 15-25°C.",
                      },
                      {
                        q: "Can I visit Sonamarg in winter?",
                        a: "Sonamarg town itself is sometimes reachable in winter, but heavy snowfall frequently closes the road beyond it, and the Zoji La pass shuts down completely from around November to April. Winter visits are unpredictable and depend entirely on the day's road conditions, so they're not recommended as a planned itinerary stop.",
                      },
                      {
                        q: "Is Sonamarg on the way to Ladakh?",
                        a: "Yes. Sonamarg is the last major town in the Kashmir Valley before the road climbs to Zoji La pass (about 3,528 m) and continues on to Dras, Kargil, and eventually Leh. It's the natural overnight stop for anyone driving the Srinagar-Leh highway.",
                      },
                      {
                        q: "Do I need a permit to visit Sonamarg?",
                        a: "No permit is required to visit Sonamarg itself, since it lies within Jammu & Kashmir. Permits only become relevant if you continue past Zoji La into Ladakh, where certain further-flung areas require an Inner Line Permit — Sonamarg and Thajiwas Glacier are open to all visitors.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="bg-white border border-stone-200 rounded-xl p-5"
                      >
                        <h4
                          className="font-bold text-stone-900 mb-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {item.q}
                        </h4>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Sonamarg",
                  "Jammu and Kashmir",
                  "Kashmir",
                  "Thajiwas Glacier",
                  "Zoji La",
                  "Ladakh Gateway",
                  "Sindh River",
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

              {/* ── Gear Recommendations ──────────────────────────────── */}
              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Sonamarg"
              />

              <RelatedPostsGrid currentSlug="sonamarg-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="sonamarg-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
