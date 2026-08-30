// src/app/blog/drass-travel-guide/page.tsx
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
  title: "Drass Travel Guide: Kargil War Memorial, Gateway to Ladakh",
  description:
    "A complete travel guide to Drass, Ladakh — the second-coldest inhabited place on Earth and site of the Kargil War Memorial. Best time to visit, how to reach via Zoji La, Tiger Hill, Mushkoh Valley, where to stay, and essential tips.",
  keywords:
    "Drass, Dras Ladakh, Kargil War Memorial, Vijaypath, second coldest inhabited place, Zoji La, Tiger Hill, Tololing, Mushkoh Valley, Srinagar Leh highway, Kargil",
  openGraph: {
    title: "Drass Travel Guide: Kargil War Memorial, Gateway to Ladakh",
    description:
      "Frozen peaks, silent valleys, and a memorial that honours the soldiers of the 1999 Kargil War — the complete guide to Drass.",
    url: "https://club.kudozz.in/blog/drass-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Snow-capped peaks along the Srinagar-Leh highway near Drass, Ladakh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Drass Travel Guide: Kargil War Memorial, Gateway to Ladakh",
    description:
      "The second-coldest inhabited place on Earth, and the town that stands watch over the Kargil War Memorial.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/drass-travel-guide",
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
          headline: "Drass Travel Guide: Kargil War Memorial, Gateway to Ladakh",
          description:
            "A complete travel guide to Drass, Ladakh — the second-coldest inhabited place on Earth and site of the Kargil War Memorial. Best time to visit, how to reach via Zoji La, Tiger Hill, Mushkoh Valley, where to stay, and essential tips.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-08-20",
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
            "@id": "https://club.kudozz.in/blog/drass-travel-guide",
          },
          keywords:
            "Drass, Dras Ladakh, Kargil War Memorial, Vijaypath, second coldest inhabited place, Zoji La, Tiger Hill, Tololing, Mushkoh Valley",
          about: {
            "@type": "Place",
            name: "Drass",
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
                name: "Ladakh",
                item: "https://club.kudozz.in/blog?category=ladakh",
              },
              { "@type": "ListItem", position: 4, name: "Drass" },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Drass?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Drass", level: 2 },
  { id: "zoji-la", title: "→ Crossing Zoji La Pass", level: 3 },
  { id: "war-memorial", title: "The Kargil War Memorial", level: 2 },
  { id: "tiger-hill", title: "→ Tiger Hill & Tololing", level: 3 },
  { id: "mushkoh-valley", title: "Mushkoh Valley", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DrassPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Snow-capped peaks along the Srinagar-Leh highway near Drass, Ladakh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/15" />
          </div>

          {/* Breadcrumbs */}
          <nav
            className="absolute top-24 left-0 right-0 z-10 px-4 sm:px-8 lg:px-12"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 text-xs text-white/70">
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Ladakh", href: "/blog?category=ladakh" },
                { label: "Drass", href: null },
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
                    <span className="text-white/50">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-white/30">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pb-14 pt-32">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Drass", "Ladakh", "Kargil War Memorial", "Zoji La"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Drass Travel Guide: Kargil War Memorial & the Gateway to Ladakh
            </h1>
            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              "A small town in a bowl of mountains, known to the world for its
              brutal winters and, more importantly, for the soldiers who are
              remembered here."
            </p>

            {/* Meta Row */}
            <div
              className="flex flex-wrap items-center gap-5 text-sm text-white/70"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                12 min read
              </span>
            </div>
          </div>
        </section>

        {/* ── Three-Column Content Layout ───────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-8 lg:gap-10">
            {/* Left: Table of Contents */}
            <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            {/* Center: Main Article */}
            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-3xl">
              <div className="prose-travel">
                {/* ── Introduction ────────────────────────────────────────── */}
                <section id="introduction">
                  <h2>Why Visit Drass?</h2>
                  <p>
                    Just past the crest of Zoji La, where the Kashmir Valley's
                    pine forests give way abruptly to bare, wind-scoured
                    mountains, the Srinagar–Leh highway drops into a wide,
                    treeless bowl. This is <strong>Drass</strong> (also spelled
                    Dras) — a small town of roughly 3,230 metres (10,600 ft)
                    that most travellers pass through in an hour but few ever
                    forget.
                  </p>
                  <p>
                    Drass carries two reputations, and both are earned. It is
                    popularly known as the <strong>second-coldest inhabited
                    place on Earth</strong> after Siberia's Verkhoyansk and
                    Oymyakon — winter temperatures here have historically
                    plunged to around <strong>-45°C to -60°C</strong>, cold
                    enough to freeze diesel in vehicle tanks and turn breath
                    into ice on eyelashes within minutes. And it is the town
                    that lends its name to the high, barren ridgelines above
                    it where, in the summer of 1999, Indian soldiers fought to
                    reclaim strategic peaks from infiltrators in what became
                    known as the <strong>Kargil War</strong>.
                  </p>
                  <p>
                    Today, Drass is a quiet stopover on one of the world's
                    great mountain highways — a place to refuel, eat a hot
                    plate of momos, and stand for a while at the{" "}
                    <strong>Kargil War Memorial</strong>, reading the names of
                    the men who died defending these ridgelines. It isn't a
                    destination built for leisure in the way Leh or Pangong
                    are. It's a place you visit to understand something —
                    about geography, about endurance, and about the price
                    that was paid for a stretch of road most travellers cross
                    in silence.
                  </p>

                  {/* Info box */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Drass at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        ["Region", "Kargil District, Ladakh"],
                        ["Altitude", "3,230 m (10,600 ft)"],
                        ["Known for", "Kargil War Memorial, extreme cold"],
                        ["Best Season", "May – September"],
                        ["Distance from Kargil", "~60 km"],
                        ["Distance from Srinagar", "~140 km"],
                        ["Winter low (recorded)", "As low as -45°C to -60°C"],
                        ["Nearest pass", "Zoji La (3,528 m)"],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <span className="text-stone-400 text-xs block">
                            {k}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ───────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Drass</h2>
                  <p>
                    Drass has one of the shortest comfortable travel windows
                    in the Indian Himalayas. For most of the year the town is
                    cut off, buried under snow, or simply too brutal to visit
                    for anything but a determined winter expedition.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Summer (May–Sep)",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "The only real window",
                        text: "Zoji La is open, the highway is clear, and daytime temperatures are a mild 15–20°C (nights still drop close to freezing). This is when nearly all visitors come, and when the Kargil War Memorial and Mushkoh Valley are accessible.",
                      },
                      {
                        season: "Autumn (Oct)",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Closing fast",
                        text: "The highway can close with little notice as early snow hits Zoji La. Crowds thin dramatically and the light is beautiful, but plan a buffer day in case the pass shuts behind you.",
                      },
                      {
                        season: "Winter (Nov–Apr)",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Essentially cut off",
                        text: "Zoji La closes completely, isolating Drass from Kashmir for months. Temperatures regularly fall below -30°C. Not a season for casual travel — this is when Drass earns its 'second-coldest inhabited place' reputation.",
                      },
                      {
                        season: "Spring (Mar–Apr)",
                        emoji: "🌱",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Avoid",
                        text: "The pass is still snowbound and clearing operations are underway. Roads are unpredictable and frequently blocked. Not a practical time to plan a trip.",
                      },
                    ].map((s) => (
                      <div
                        key={s.season}
                        className={`${s.color} border rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-2">
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
                    <strong>Our pick:</strong> Late June through August. The
                    Mushkoh Valley's wildflowers are at their fullest, the
                    highway is dependable, and it also happens to be close to{" "}
                    <strong>Kargil Vijay Diwas</strong> (26 July), when the
                    War Memorial holds a solemn remembrance ceremony — moving
                    to witness if your dates align.
                  </blockquote>
                </section>

                {/* ── How to Reach ────────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Drass</h2>
                  <p>
                    Drass sits directly on National Highway 1, the
                    Srinagar–Leh highway, which makes it unusually easy to
                    reach compared to most of Ladakh — you don't need a
                    special detour, just the right vehicle and timing.
                  </p>
                  <ul>
                    <li>
                      <strong>From Srinagar (~140 km, 5–6 hours):</strong> The
                      classic approach. Shared taxis and private cabs run
                      daily from Srinagar's TRC (Tourist Reception Centre) via
                      Sonamarg and Zoji La. This is also the route used by
                      most Leh-bound travellers, who pass through Drass on
                      their first full day out of Kashmir.
                    </li>
                    <li>
                      <strong>From Kargil (~60 km, 2 hours):</strong> Kargil
                      town is the nearest hub with proper hotels, ATMs, and
                      fuel stations. Shared sumos leave regularly from
                      Kargil's main taxi stand for Drass and onward towards
                      Srinagar.
                    </li>
                    <li>
                      <strong>From Leh (~200 km, 6–7 hours):</strong> Drass is
                      reachable in a long day from Leh via Kargil, though most
                      travellers break the journey overnight in Kargil.
                    </li>
                    <li>
                      <strong>By Air:</strong> The nearest airports are
                      Srinagar (SXR) and Leh (IXL), both roughly 5–7 hours
                      away by road. There is no airstrip serving Drass
                      directly.
                    </li>
                  </ul>

                  <section id="zoji-la">
                    <h3>Crossing Zoji La Pass</h3>
                    <p>
                      Every road journey to Drass from the Kashmir side means
                      crossing <strong>Zoji La</strong> (3,528 m), the
                      gateway between the green Kashmir Valley and the arid,
                      high-altitude world of Ladakh. It is one of the most
                      important — and historically treacherous — passes in
                      India: a narrow, unpaved, single-lane stretch cut into
                      a steep mountainside, with sheer drops on one side and
                      loose rock on the other.
                    </p>
                    <p>
                      The Border Roads Organisation (BRO) manages traffic
                      through Zoji La with strict one-way timing — vehicles
                      are held at either end and released in convoys to avoid
                      head-on gridlock on the narrowest sections. A
                      long-awaited all-weather tunnel project (the Zoji La
                      Tunnel, alongside the shorter Z-Morh Tunnel near
                      Sonamarg) is under construction and will eventually make
                      this crossing possible year-round; until it opens, the
                      pass remains snowbound and closed roughly from November
                      to May.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Good to know:</strong> Check road status
                      before setting out — Zoji La can close for hours after
                      fresh snowfall, rockfall, or army convoy movement even
                      in peak summer. Start early, keep your fuel tank
                      topped up in Sonamarg or Baltal, and build in a buffer
                      day if you have onward flights booked from Leh or
                      Srinagar.
                    </div>
                  </section>
                </section>

                {/* ── War Memorial ────────────────────────────────────────── */}
                <section id="war-memorial">
                  <h2>The Kargil War Memorial</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Mountain ridgelines above Drass, near the site of the Kargil War Memorial"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    In the summer of 1999, Pakistani forces and armed
                    infiltrators occupied a chain of high-altitude posts on
                    the Indian side of the Line of Control, overlooking NH1
                    exactly where it runs through Drass. Over ten weeks,
                    Indian Army units fought their way back up these
                    ridgelines — often at altitudes above 5,000 metres,
                    against dug-in positions, in what became known as{" "}
                    <strong>Operation Vijay</strong>, or the Kargil War. It
                    remains one of the highest-altitude conflicts fought
                    anywhere in the world.
                  </p>
                  <p>
                    The <strong>Kargil War Memorial</strong>, also called{" "}
                    <strong>Vijaypath</strong>, was built by the Indian Army
                    at the foot of these very peaks and is maintained by the
                    8 Mountain Division. It stands as both a memorial and a
                    place of quiet public education — a way for civilians to
                    understand, without exaggeration, what happened on the
                    mountains above them.
                  </p>
                  <p>
                    The memorial complex includes a wall inscribed with the
                    names of the soldiers who lost their lives in the
                    operation, an amphitheatre used for the annual{" "}
                    <strong>Kargil Vijay Diwas</strong> commemoration on 26
                    July, and a small museum housing recovered weapons,
                    photographs, uniforms, and personal effects that bring
                    the scale of the operation into sobering focus. A stone
                    engraving of the poem "Chhalka Kabhi Naa Aansu" and a
                    quote often used at the site — "Yeh Dil Maange More" —
                    have become closely associated with the memorial's public
                    identity.
                  </p>
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🎖️</span> Visiting the Memorial
                    </h4>
                    <div
                      className="grid grid-cols-2 gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        ["Location", "On NH1, Drass town"],
                        ["Timings", "Approx. 9:00 AM – 7:00 PM daily"],
                        ["Entry fee", "Nominal, charged at museum"],
                        ["Time needed", "45 minutes – 1.5 hours"],
                        ["Best time to visit", "Daylight hours, mid-morning"],
                        ["Remembrance day", "26 July — Kargil Vijay Diwas"],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <span className="text-stone-400 text-xs block">
                            {k}
                          </span>
                          <span className="text-stone-800 font-medium">
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="bg-stone-900 text-white rounded-xl p-5 my-6"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <h4
                      className="font-bold text-white mb-3 text-sm"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      🙏 Visiting with respect
                    </h4>
                    <p className="text-sm text-stone-300 leading-relaxed m-0">
                      This is an active military memorial, not a tourist
                      photo-op. Dress modestly, keep noise to a minimum near
                      the wall of names, and follow the guidance of Army
                      personnel on site. Photography rules are enforced in
                      parts of the complex — ask before shooting near the
                      museum or any active installation. Many visitors find
                      it worth sitting quietly in the amphitheatre for a few
                      minutes before leaving.
                    </p>
                  </div>

                  <section id="tiger-hill">
                    <h3>Tiger Hill & Tololing</h3>
                    <p>
                      From the memorial grounds and various points along the
                      highway, you can see the bare, imposing ridgelines of{" "}
                      <strong>Tiger Hill</strong> and <strong>Tololing</strong>{" "}
                      — two of the most fiercely contested peaks of the war,
                      and the ones most Indians would recognise by name. The
                      recapture of Tololing in June 1999 was an early turning
                      point in the campaign, opening the way for further
                      operations further up the Drass sector; Tiger Hill's
                      recapture in early July became one of the war's most
                      widely remembered moments.
                    </p>
                    <p>
                      Both peaks sit several kilometres from town and well
                      above what's accessible to civilian visitors — you view
                      them from a distance rather than trek up to them. A
                      guide or Army-approved viewpoint near the memorial is
                      the appropriate way to see them; do not attempt to
                      approach the ridgelines directly, as this remains a
                      sensitive military area close to the Line of Control.
                    </p>
                  </section>
                </section>

                {/* ── Mushkoh Valley ──────────────────────────────────────── */}
                <section id="mushkoh-valley">
                  <h2>Mushkoh Valley</h2>
                  <p>
                    A short drive from Drass town, the{" "}
                    <strong>Mushkoh Valley</strong> is often called the "mini
                    Switzerland of India" — a strikingly green, flower-strewn
                    valley that feels entirely at odds with Drass's reputation
                    for extreme cold. In summer, its meadows fill with wild
                    tulips and alpine wildflowers against a backdrop of the
                    same ridgelines that saw fighting in 1999; the valley
                    itself was one of the sectors contested during the war,
                    which adds a quiet layer of history to its beauty.
                  </p>
                  <p>
                    Mushkoh's proximity to the Line of Control means access
                    can vary with the security situation — some stretches are
                    open to civilian visitors during the summer season, while
                    others require permission or are restricted altogether.
                    It's best explored with a local guide or driver from
                    Drass or Kargil who can confirm what's accessible on the
                    day, rather than assuming free movement throughout the
                    valley.
                  </p>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit in the early morning
                    when the light is soft and the wind — which picks up hard
                    by mid-afternoon across this whole belt — is still calm.
                    Carry a windproof layer even on a warm-looking summer day.
                  </div>
                </section>

                {/* ── Where to Stay ───────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Drass</h2>
                  <p>
                    Drass is primarily a stopover town rather than a
                    destination with a developed hospitality scene, and
                    accommodation is correspondingly modest. Most travellers
                    either pass through in a day or stay one simple night
                    before continuing towards Kargil or back to Srinagar.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        tier: "In Drass Town",
                        icon: "🏠",
                        range: "₹800–₹2,500/night",
                        picks: [
                          "J&K Tourism guesthouse / rest house",
                          "A handful of small family-run hotels on NH1",
                          "Basic but clean; expect simple bucket hot water",
                          "Book by phone ahead — few operate online",
                        ],
                      },
                      {
                        tier: "In Kargil (60 km away)",
                        icon: "🏨",
                        range: "₹1,500–₹5,000/night",
                        picks: [
                          "Wider range of mid-range hotels",
                          "Better restaurant and ATM access",
                          "Good base if you want more comfort",
                          "Recommended for an overnight halt on longer trips",
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
                              className="text-xs text-stone-600 m-0 pl-0"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              → {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p>
                    Many road-trippers heading to Leh via Kargil simply
                    schedule Drass as a mid-morning stop rather than an
                    overnight — it fits naturally into a Srinagar-to-Kargil
                    driving day, with time to visit the memorial before
                    continuing east.
                  </p>
                </section>

                {/* ── Food ────────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Drass</h2>
                  <p>
                    Don't expect a food scene here — Drass has a small
                    handful of highway dhabas and simple eateries geared
                    towards feeding truckers, soldiers, and travellers moving
                    between Kashmir and Ladakh. What's on offer is basic,
                    hearty, and exactly what you want after a cold mountain
                    crossing.
                  </p>
                  <ul>
                    <li>
                      <strong>Maggi & hot chai:</strong> The highway staple
                      across this entire stretch of NH1 — a steaming plate of
                      instant noodles and sweet, milky tea at a roadside
                      dhaba is practically a ritual for every traveller who
                      passes through.
                    </li>
                    <li>
                      <strong>Rajma-chawal & dal-chawal:</strong> Simple,
                      filling North Indian staples available at most
                      roadside stops — reliable comfort food at altitude.
                    </li>
                    <li>
                      <strong>Momos & thukpa:</strong> As you get closer to
                      Kargil and Ladakh proper, Tibetan-style momos and
                      noodle soup start appearing on menus — warming and
                      well-suited to the cold.
                    </li>
                    <li>
                      <strong>Kahwa:</strong> The saffron-and-spice Kashmiri
                      tea is easy to find on the Srinagar side of the route
                      and a welcome warm-up before or after Zoji La.
                    </li>
                    <li>
                      <strong>Pack your own snacks:</strong> Given how few
                      eating options exist in Drass itself, most drivers and
                      guides recommend carrying dry fruits, biscuits, and a
                      flask of hot water — especially useful if road delays
                      at Zoji La push meal times later than planned.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ──────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    Because Drass is usually visited as a stop on a longer
                    Srinagar–Kargil–Leh journey, costs here are modest — the
                    bulk of your trip budget will go towards the vehicle or
                    shared taxi covering the wider route.
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table
                      className="w-full text-sm border-collapse"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <thead>
                        <tr className="bg-forest-50">
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Expense
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Budget
                          </th>
                          <th className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                            Mid-Range
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Accommodation/night (Drass)", "₹800", "₹2,500"],
                          ["Accommodation/night (Kargil)", "₹1,500", "₹4,000"],
                          ["Food/day", "₹300", "₹700"],
                          [
                            "Shared taxi (Srinagar–Kargil)",
                            "₹500–₹700/seat",
                            "₹3,500 (full cab)",
                          ],
                          ["War Memorial entry", "₹20–₹50", "₹20–₹50"],
                          ["Daily total (excl. long transfers)", "₹1,200", "₹3,500"],
                        ].map(([exp, b, m], i) => (
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── Tips ────────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 m-0">
                        {[
                          "Carry heavy layers even in summer — nights drop close to freezing and the wind off the ridgelines is sharp.",
                          "Check the Zoji La road status before departing Srinagar or Sonamarg on the day of travel.",
                          "Spend genuine time at the War Memorial rather than rushing through for a photo.",
                          "Carry cash — ATMs in Drass are unreliable; withdraw what you need in Srinagar or Kargil.",
                          "Fill your fuel tank before Sonamarg or in Kargil — options are sparse in between.",
                        ].map((t) => (
                          <li
                            key={t}
                            className="text-sm text-stone-600 m-0 flex items-start gap-2"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">
                              ✓
                            </span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-rose-800 mb-3 flex items-center gap-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <span>🚫</span> Don't
                      </h4>
                      <ul className="space-y-2 m-0">
                        {[
                          "Don't treat the War Memorial as a casual selfie stop — it's a place of remembrance for an active military.",
                          "Don't attempt to approach Tiger Hill, Tololing, or the Mushkoh ridgelines beyond marked civilian areas.",
                          "Don't assume evening restaurant or fuel options will be open — plan meals and refuelling in daylight hours.",
                          "Don't drive Zoji La after dark or in poor visibility — wait it out at Sonamarg or Baltal instead.",
                          "Don't rely on mobile network — connectivity is patchy through much of this stretch.",
                        ].map((t) => (
                          <li
                            key={t}
                            className="text-sm text-stone-600 m-0 flex items-start gap-2"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            <span className="text-rose-500 font-bold mt-0.5 flex-shrink-0">
                              ✕
                            </span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p>
                    Above all, come to Drass with the right frame of mind. It
                    isn't a place engineered for entertainment the way parts
                    of Leh or Pangong are — it's a working highway town with
                    a profound, sobering history sitting quietly at its edge.
                    Most travellers who stop here leave with a different kind
                    of memory than the rest of their Ladakh trip: quieter,
                    heavier, and worth carrying home.
                  </p>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Drass",
                  "Ladakh",
                  "Kargil War Memorial",
                  "Zoji La",
                  "Kargil",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase()}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <TrekGearRecommendations
                sections={HIMALAYAN_GEAR}
                destination="Drass"
              />
              {/* Related Posts Grid at bottom */}
              <RelatedPostsGrid currentSlug="drass-travel-guide" />
            </article>

            {/* Right: Related Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="drass-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
