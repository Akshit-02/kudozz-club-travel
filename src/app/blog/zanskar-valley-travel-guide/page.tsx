// src/app/blog/zanskar-valley-travel-guide/page.tsx
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
  title: "Zanskar Valley Travel Guide: Chadar Trek, Phugtal & Padum",
  description:
    "The complete guide to Zanskar Valley, Ladakh's most remote region — the frozen-river Chadar Trek, the cliffside Phugtal Monastery, Padum, Rangdum, the road from Kargil, and everything you need to plan a trip to one of the Himalaya's last true frontiers.",
  keywords:
    "Zanskar Valley, Chadar Trek, Phugtal Monastery, Padum Ladakh, Pensi La, Rangdum, Karsha Monastery, Sani Monastery, Zanskar travel guide, frozen river trek Ladakh, Kargil to Padum road",
  openGraph: {
    title: "Zanskar Valley Travel Guide: Chadar Trek, Phugtal & Padum",
    description:
      "Cut off from the world for eight months a year — Zanskar is Ladakh's last true frontier. The complete guide to reaching it, trekking it, and understanding it.",
    url: "https://club.kudozz.in/blog/zanskar-valley-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Zanskar Valley high-altitude landscape near Leh Ladakh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zanskar Valley Travel Guide",
    description:
      "The Chadar Trek, Phugtal Monastery, and the road less travelled — the complete guide to Zanskar Valley.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/zanskar-valley-travel-guide",
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
          headline: "Zanskar Valley Travel Guide: Chadar Trek, Phugtal & Padum",
          description:
            "The complete guide to Zanskar Valley — the frozen-river Chadar Trek, Phugtal Monastery, Padum, Rangdum, road access from Kargil, and essential travel tips.",
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
            "@id": "https://club.kudozz.in/blog/zanskar-valley-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Zanskar Valley",
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
                name: "Zanskar Valley Travel Guide",
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
  { id: "introduction", title: "Why Zanskar Valley?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Zanskar", level: 2 },
  { id: "via-kargil", title: "→ The Kargil–Padum Road", level: 3 },
  { id: "pnp-road", title: "→ The New Road from Leh", level: 3 },
  { id: "exploring", title: "Exploring Zanskar Valley", level: 2 },
  { id: "padum", title: "→ Padum, the Capital", level: 3 },
  { id: "phugtal-monastery", title: "→ Phugtal Monastery", level: 3 },
  { id: "chadar-trek", title: "→ The Chadar Trek", level: 3 },
  { id: "karsha-sani", title: "→ Karsha & Sani Monasteries", level: 3 },
  { id: "rangdum", title: "→ Rangdum", level: 3 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ZanskarValleyPage() {
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
              alt="Zanskar Valley — remote high-altitude Himalayan landscape"
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
                { label: "Zanskar Valley", href: null },
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
                "Zanskar Valley",
                "Chadar Trek",
                "Phugtal Monastery",
                "Ladakh",
                "Trekking",
                "Remote Himalaya",
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
              Zanskar Valley Travel Guide: Chadar Trek, Phugtal Monastery
              & Padum
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              For eight or nine months of the year, snow seals every road into
              Zanskar and the valley disappears from the map. What's left
              behind is one of the last genuinely remote corners of the
              Himalaya — a kingdom of its own dialect, its own gods, and a
              river that people learn to walk on.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "19 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Zanskar, Ladakh",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,300 words",
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
                  <h2>Why Zanskar Valley?</h2>
                  <p>
                    South of the Indus, hidden behind a wall of 6,000-metre
                    peaks, lies a valley that spent most of its history
                    essentially invisible to the outside world.{" "}
                    <strong>Zanskar</strong> — a sub-district of Kargil, in the
                    Union Territory of Ladakh — was, until quite recently, one
                    of those places you had heard of but couldn't quite place.
                    It is not on the way to anywhere. You go to Zanskar only
                    because you have decided, deliberately, to go to Zanskar.
                  </p>
                  <p>
                    The valley sits between two great mountain ranges — the
                    Zanskar Range to the north and the Great Himalayan Range
                    to the south — at an average altitude of 3,500 to 4,000
                    metres. For eight, sometimes nine, months of the year, snow
                    closes every pass leading in. The result is a place that
                    has been left to develop almost entirely on its own terms:
                    its own dialect (Zanskari, a distinct branch of Tibetan),
                    its own royal lineage (the Zanskar kings, whose descendants
                    still live quietly in Padum and Zangla), and a Buddhist
                    culture so deeply embedded in daily life that monasteries
                    outnumber almost anything else on the map.
                  </p>
                  <p>
                    What draws travellers here today is precisely that
                    isolation. Zanskar is home to the{" "}
                    <strong>Chadar Trek</strong> — an eight-day walk across the
                    frozen Zanskar River that locals once used as their only
                    winter road to the outside world, and which has since
                    become one of the most extraordinary treks on earth. It is
                    also home to <strong>Phugtal Monastery</strong>, a
                    12th-century complex built directly into a cliffside cave
                    above the Lungnak River — arguably the single most
                    striking piece of architecture anywhere in the Himalaya.
                    And it is a place where, even now, a genuine sense of
                    discovery is still possible.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Zanskar Valley at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Kargil District, Ladakh",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "3,500 – 4,400 m",
                        },
                        {
                          icon: "🌡️",
                          label: "Best Time",
                          value: "Jun–Sep (road) / Jan–Feb (Chadar)",
                        },
                        {
                          icon: "🛣️",
                          label: "Gateway",
                          value: "Kargil, via Pensi La (4,400 m)",
                        },
                        {
                          icon: "🏘️",
                          label: "Main Town",
                          value: "Padum (pop. ~1,500)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,800 – ₹5,000",
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
                  <h2>Best Time to Visit Zanskar Valley</h2>
                  <p>
                    Zanskar effectively runs on two completely different
                    calendars. In summer, it is a road-trip and trekking
                    destination — green barley fields, rushing glacial rivers,
                    and a valley that briefly reconnects with the rest of the
                    world. In winter, the road disappears entirely and the
                    valley becomes accessible only by one astonishing route:
                    walking on the river itself.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "June – July",
                        emoji: "🌱",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Opening season",
                        text: "The Kargil–Padum road opens (usually by late May/early June) once BRO clears Pensi La of snow. Rivers run high with meltwater, which can complicate stream crossings near Phugtal. Fields turn green. Days are warm, nights near freezing.",
                      },
                      {
                        season: "August – Early Sept",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — our pick",
                        text: "The best window for road trips and trekking. River levels drop from their July peak, skies clear, and Padum's guesthouses and homestays are all operating. The Karsha Gustor festival often falls in this window.",
                      },
                      {
                        season: "Late Sept – October",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Quiet and golden",
                        text: "Crowds thin dramatically, poplars turn gold, and the light softens. The road can close with the first heavy snowfall any time from mid-October — travel with a flexible exit plan and keep an eye on the forecast.",
                      },
                      {
                        season: "January – February",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Chadar Trek season",
                        text: "The road is long gone. This is the only window the Zanskar River freezes solid enough to walk on. Daytime temperatures hover around -10°C to -15°C; nights regularly fall to -20°C to -30°C. Trek only with a licensed operator.",
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
                    <strong>Our pick:</strong> If you want the road-trip
                    version of Zanskar — Padum, Phugtal, Karsha, Sani — aim for
                    the second half of August. If you're here specifically for
                    the Chadar Trek, the first three weeks of February
                    generally offer the most reliably frozen ice; late January
                    can still have open water in places.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Zanskar Valley</h2>
                  <p>
                    There is no airport in Zanskar and, for most of the year,
                    there has been exactly one road in. That is changing — but
                    slowly, and only in summer. Here's what actually works.
                  </p>

                  <section id="via-kargil">
                    <h3>The Kargil–Padum Road via Rangdum & Pensi La</h3>
                    <div className="relative w-full rounded-xl my-6 h-64 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                        alt="High-altitude road through the Zanskar range towards Pensi La"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      The classic — and for most of the year, the only —
                      route into Zanskar is the roughly{" "}
                      <strong>230-km road from Kargil to Padum</strong>,
                      climbing out of the Suru Valley through Sankoo,
                      Panikhar, and Parkachik (with Nun and Kun, Ladakh's two
                      highest peaks, filling the windshield), before crossing{" "}
                      <strong>Pensi La at roughly 4,400 metres</strong> and
                      dropping into the Zanskar Valley proper via Rangdum.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> ~230 km, Kargil to Padum
                      </li>
                      <li>
                        <strong>Duration:</strong> A very long single day
                        (10–12 hours) or, far better, two days with an
                        overnight at Rangdum
                      </li>
                      <li>
                        <strong>Open:</strong> Roughly late May/early June to
                        late October, entirely dependent on BRO snow clearance
                        and early/late-season storms
                      </li>
                      <li>
                        <strong>Highest point:</strong> Pensi La, ~4,400 m,
                        overlooking the Drang-Drung Glacier — one of the
                        largest and most accessible glaciers in Ladakh
                      </li>
                      <li>
                        <strong>Road condition:</strong> Increasingly
                        blacktopped near Kargil, but still broken, single-lane,
                        and landslide-prone in stretches past Rangdum
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Plan for delay, not just distance:</strong>{" "}
                      This road can close for days at a stretch after a summer
                      cloudburst or an early snow event at Pensi La. Never
                      schedule a flight out of Leh or Srinagar for the same day
                      you plan to leave Zanskar — build in at least one full
                      buffer day.
                    </div>
                  </section>

                  <section id="pnp-road">
                    <h3>The New Road from Leh: Nimmu–Padum & the Shinkun La Tunnel</h3>
                    <p>
                      For decades, the only way to reach Zanskar from Leh was
                      the long way round — via Kargil, adding two extra days
                      to the journey. That is finally starting to change. The{" "}
                      <strong>Nimmu–Padum–Darcha (NPD) road</strong>, under
                      construction by the Border Roads Organisation, will
                      eventually link Zanskar directly to both Leh (via Nimmu,
                      near the Indus–Zanskar confluence) and the
                      Manali–Leh highway (via Darcha in Lahaul), crossing the
                      high Shinkun La pass along the way.
                    </p>
                    <p>
                      A tunnel is planned beneath Shinkun La to keep this
                      corridor open through more of the year, which would be
                      transformative for Zanskar — cutting the Leh–Padum
                      journey from roughly 460 km via Kargil down to something
                      closer to 250 km, and potentially extending Zanskar's
                      "open" season well beyond its current few summer months.
                      As of now, sections of the road are motorable in summer
                      but the route is unpaved, weather-dependent, and not yet
                      a reliable year-round alternative — treat the
                      Kargil–Pensi La road as your primary route and the
                      Nimmu–Padum road as a scenic, adventurous option only
                      when locals confirm it's open and in condition.
                    </p>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Worth knowing:</strong> Once fully open, this
                      road will change Zanskar profoundly — shortening its
                      isolation and likely its snow-bound season. If a
                      genuinely off-grid Zanskar is what you're after, that's
                      one more reason not to wait too many years to go.
                    </div>
                  </section>
                </section>

                {/* ── Exploring Zanskar ─────────────────────────────────── */}
                <section id="exploring">
                  <h2>Exploring Zanskar Valley</h2>
                  <p>
                    Zanskar rewards slowness. There are no queues, no
                    ticketed sights, and very little in the way of
                    infrastructure — what there is instead is a handful of
                    villages, a scattering of extraordinary monasteries, and a
                    landscape that does most of the talking.
                  </p>

                  <section id="padum">
                    <h3>Padum — Zanskar's Capital</h3>
                    <p>
                      <strong>Padum</strong>, at roughly 3,650 metres, is the
                      only town of any real size in Zanskar and the natural
                      base for everything else in the valley. Don't expect
                      much — a single bazaar street, a scattering of
                      guesthouses, a hospital, a helipad used mainly for
                      emergencies, and a population of around 1,500 that
                      swells noticeably with trekking staff and tour groups
                      each summer. What Padum lacks in size it makes up for in
                      position: it sits at the confluence of the Stod and
                      Lungnak (Tsarap) rivers, and every major excursion in the
                      valley — Karsha, Sani, Zangla, Phugtal — radiates out
                      from here.
                    </p>
                    <p>
                      Padum is also where Zanskar's layered history is most
                      visible. This was the seat of the old Zanskar kingdom
                      (whose royal family, now largely ceremonial, still has
                      descendants living in the region), and it remains the
                      administrative and market hub for dozens of villages
                      that would otherwise be entirely cut off. Give yourself
                      at least a full day here to rest, restock supplies, and
                      arrange onward transport or trekking staff before
                      pushing further into the valley — we've covered Padum's
                      homestays, day walks, and market in more depth in a
                      dedicated guide to the town.
                    </p>
                  </section>

                  <section id="phugtal-monastery">
                    <h3>Phugtal Monastery — The Cave Monastery of Zanskar</h3>
                    <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                        alt="Remote Himalayan cliffs above the Lungnak river valley near Phugtal"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      If Zanskar has one unmissable sight, this is it.{" "}
                      <strong>Phugtal Monastery</strong> (also spelled
                      Phuktal) is built into and around a natural cave
                      halfway up a sheer cliff face above the Lungnak River —
                      a honeycomb of whitewashed rooms, chapels, and monks'
                      quarters that seems to grow directly out of the
                      mountain. The cave itself has been a meditation site
                      since at least the 2nd century, and the monastery around
                      it was formally founded in the 12th century by Gangsem
                      Sherap Sampo, a disciple of the great translator-scholar
                      whose teaching lineage still runs through it today.
                      Photographs genuinely do not prepare you for the scale
                      of it in person.
                    </p>
                    <p>
                      Phugtal is reachable only on foot — there is no road,
                      and by design there never will be. From Padum, drive
                      roughly 60 km down the Lungnak Valley to the village of
                      Purne (or the smaller hamlet of Cha, slightly further
                      on), then walk. The final approach is a genuinely
                      spectacular <strong>1.5–2 hour trek</strong> along a
                      narrow path carved into the river gorge, with the
                      monastery staying hidden until the trail rounds a final
                      bend and it appears all at once, impossibly, in the
                      cliff face ahead.
                    </p>
                    <ul>
                      <li>
                        <strong>Founded:</strong> 12th century (meditation
                        cave in use since the 2nd century)
                      </li>
                      <li>
                        <strong>Drive from Padum:</strong> ~60 km to
                        Purne/Cha (3–4 hours on a rough road)
                      </li>
                      <li>
                        <strong>Trek to monastery:</strong> ~1.5–2 hours each
                        way, moderate difficulty, well-trodden path
                      </li>
                      <li>
                        <strong>Stay:</strong> Basic homestays and a small
                        guesthouse at Purne; some travellers overnight inside
                        the monastery guest rooms with prior arrangement
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Time your visit for early
                      morning if you can arrange to stay overnight at Purne —
                      the low-angle light on the cliff face at sunrise, before
                      any other visitors have arrived, is the single best
                      photograph you'll take in Zanskar.
                    </div>
                  </section>

                  <section id="chadar-trek">
                    <h3>The Chadar Trek — Walking on Ice</h3>
                    <p>
                      For generations, when winter sealed every road out of
                      Zanskar, the frozen Zanskar River became the only route
                      left — the one path Zanskaris used to reach Leh for
                      trade, school, or medical care. Locals call the ice
                      sheet itself the <em>chadar</em> ("sheet," in
                      Hindi/Urdu), and the trek that now follows their old
                      winter route has become one of the most sought-after —
                      and most demanding — treks anywhere in the world.
                    </p>
                    <p>
                      The classic route runs from{" "}
                      <strong>Chilling</strong> (a short drive from Leh, at
                      the point where the Zanskar meets the Indus) upstream
                      along the frozen river gorge, sometimes as far as Padum,
                      though most commercial itineraries turn back around
                      Nerak village after 4–5 days. A full traverse runs{" "}
                      <strong>8–9 days</strong>. You walk directly on river
                      ice — sometimes solid and grippy, sometimes a thin,
                      flexing sheet over moving water — hemmed in on both
                      sides by vertical rock walls hundreds of metres high.
                      Nights are spent in caves along the riverbank, huddled
                      around a fire, at temperatures that regularly fall to{" "}
                      <strong>-20°C and beyond</strong>.
                    </p>
                    <ul>
                      <li>
                        <strong>Season:</strong> Mid-January to end-February
                        only, when the ice is at its thickest and most stable
                      </li>
                      <li>
                        <strong>Duration:</strong> 6–9 days depending on
                        operator and how far up-valley you go
                      </li>
                      <li>
                        <strong>Difficulty:</strong> Demanding — not
                        technical climbing, but sustained extreme cold, long
                        walking days on unpredictable ice, and no possibility
                        of quick evacuation
                      </li>
                      <li>
                        <strong>Guide requirement:</strong> Mandatory. This
                        trek must be done with a registered local operator and
                        experienced Zanskari guides who read the ice daily —
                        conditions change year to year and week to week
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ This is not a beginner's trek:</strong> Ice
                      conditions can force real-time route changes, including
                      wading through shin-deep freezing water when the chadar
                      breaks up in a section. Good waterproof, insulated
                      footwear and a guide who knows that day's ice are not
                      optional extras — they are the difference between an
                      unforgettable trip and a genuinely dangerous one.
                    </div>
                  </section>

                  <section id="karsha-sani">
                    <h3>Karsha & Sani Monasteries</h3>
                    <p>
                      <strong>Karsha Monastery</strong>, roughly 10 km from
                      Padum on the opposite bank of the Stod River, is the
                      largest and wealthiest monastery in Zanskar — a
                      cascading whitewashed complex climbing the hillside
                      above Karsha village, home to over a hundred Gelugpa
                      monks. Its annual{" "}
                      <strong>Gustor festival</strong>, with masked cham
                      dances performed to drive out evil spirits for the new
                      year, is one of the great cultural events of the
                      Zanskari calendar and, when the dates align with your
                      visit, an unmissable spectacle.
                    </p>
                    <p>
                      <strong>Sani Monastery</strong>, about 6 km north of
                      Padum, is unusual among Zanskar's monasteries for
                      sitting on flat valley floor rather than clinging to a
                      cliff or hillside. It is also the oldest religious site
                      in the region, built around a Kanika Chorten believed to
                      date to the Kushan-era king Kanishka, and containing a
                      cave associated with the great Indian yogi Naropa. Where
                      Phugtal impresses with its setting, Sani impresses with
                      sheer age — this ground has been sacred for the better
                      part of two thousand years.
                    </p>
                  </section>

                  <section id="rangdum">
                    <h3>Rangdum — The Gateway Village</h3>
                    <p>
                      Roughly halfway along the Kargil–Padum road, at close to
                      4,000 metres, <strong>Rangdum</strong> sits on a broad,
                      treeless plain ringed by glaciated peaks — one of the
                      most starkly beautiful stretches of the entire journey.
                      A small Gelugpa monastery perches on a rocky hillock
                      above the village, overlooking scattered farmhouses and
                      grazing yaks against a backdrop that feels closer to
                      Tibet than to anywhere in India.
                    </p>
                    <p>
                      Most travellers pass through Rangdum only as an
                      overnight halt when splitting the long Kargil–Padum
                      drive into two days — and that's exactly the right way
                      to use it. Break the journey here rather than pushing
                      through in one exhausting day; the extra night buys you
                      a sunset and sunrise over the plain that are worth the
                      detour on their own.
                    </p>
                  </section>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Zanskar Valley</h2>
                  <p>
                    Accommodation in Zanskar is basic by design — this is not
                    a place with hotel chains or boutique stays. Padum has the
                    widest range; everywhere else, homestays are the norm and
                    often the only option. Book nothing online — arrange
                    rooms on arrival or through your trekking operator.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Homestays",
                        icon: "🏠",
                        range: "₹800–₹1,500/night (usually with meals)",
                        picks: [
                          "Village homestays in Karsha",
                          "Purne homestays near Phugtal",
                          "Rangdum farmhouse stays",
                          "Zangla village homestays",
                        ],
                      },
                      {
                        tier: "Guesthouses (Padum)",
                        icon: "🏨",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Padum bazaar guesthouses",
                          "Ibex Zanskar Guesthouse",
                          "Karma Guest House",
                          "Zanskar Palace-area lodges",
                        ],
                      },
                      {
                        tier: "Chadar Trek Camps",
                        icon: "⛺",
                        range: "Included in trek package",
                        picks: [
                          "Riverside cave camps",
                          "Tented camps at wider points",
                          "Guide-arranged, no independent option",
                          "Book only through registered operators",
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
                  <h2>What to Eat in Zanskar Valley</h2>
                  <p>
                    Zanskari food is close cousin to Ladakhi cuisine — hearty,
                    warming, built around barley, buckwheat, and whatever the
                    short growing season allows. In remote villages, expect
                    to eat exactly what your homestay family is cooking that
                    day — and to be genuinely grateful for it after a long
                    day on the road or trail.
                  </p>
                  <ul>
                    <li>
                      <strong>Skyu:</strong> Thick, hand-pinched dough pasta
                      simmered in a root-vegetable broth — the single most
                      common and most comforting meal you'll eat in Zanskar.
                    </li>
                    <li>
                      <strong>Thukpa:</strong> Tibetan-style noodle soup,
                      available at every guesthouse and homestay, often the
                      only hot meal for miles on the Kargil–Padum road.
                    </li>
                    <li>
                      <strong>Tsampa:</strong> Roasted barley flour, mixed
                      with butter tea into a dense dough — a staple that has
                      sustained high-altitude travellers here for centuries.
                    </li>
                    <li>
                      <strong>Butter Tea (Gur Gur Chai):</strong> Salted,
                      churned yak-butter tea, served constantly and
                      everywhere. An acquired taste, but essential for warmth
                      at altitude.
                    </li>
                    <li>
                      <strong>Chang:</strong> A mildly fermented barley beer,
                      offered generously at festivals and in homestays —
                      polite to accept a small cup even if you don't finish
                      it.
                    </li>
                    <li>
                      <strong>Apricots:</strong> Dried and fresh apricots from
                      the lower Suru and Kargil valleys en route are
                      excellent — stock up before you climb into Zanskar
                      proper, where little grows above 3,600 m.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for Zanskar Valley</h2>
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
                            "Accommodation/night",
                            "₹800",
                            "₹1,800",
                            "₹3,500",
                          ],
                          ["Food/day", "₹500", "₹900", "₹1,500"],
                          [
                            "Shared jeep / local transport",
                            "₹800",
                            "₹1,500",
                            "₹3,000",
                          ],
                          [
                            "Private vehicle Kargil–Padum (per day)",
                            "—",
                            "₹5,000",
                            "₹7,500",
                          ],
                          [
                            "Chadar Trek (per person, 8 days, all-in)",
                            "₹28,000",
                            "₹38,000",
                            "₹55,000+",
                          ],
                          [
                            "Phugtal trek guide/porter (per day)",
                            "₹1,200",
                            "₹1,800",
                            "₹2,500",
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
                    * The Chadar Trek is priced separately as it is always an
                    all-inclusive package (guide, permits, food, camping gear)
                    and cannot realistically be done independently or budgeted
                    day-by-day.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Zanskar Valley</h2>
                  <ul>
                    <li>
                      <strong>This is remoteness with real consequences:</strong>{" "}
                      There is no quick evacuation from most of Zanskar.
                      Medical facilities are limited to a small hospital in
                      Padum. Travel insurance that explicitly covers
                      high-altitude emergency evacuation is not optional.
                    </li>
                    <li>
                      <strong>Never attempt the Chadar Trek independently:</strong>{" "}
                      Ice conditions change daily and reading them safely
                      takes years of local experience. Book only through a
                      registered Leh or Zanskar-based operator with licensed
                      guides — this is the one rule in this guide with zero
                      exceptions.
                    </li>
                    <li>
                      <strong>Build in buffer days on both ends:</strong> The
                      Kargil–Padum road can close for days after a landslide
                      or early snowfall. Never book a flight or onward
                      connection for the same day you plan to leave Zanskar.
                    </li>
                    <li>
                      <strong>Carry all the cash you'll need:</strong> There
                      is one unreliable ATM in Padum and nowhere else in the
                      valley. Withdraw everything you need in Kargil or Leh
                      before heading in.
                    </li>
                    <li>
                      <strong>Assume zero connectivity:</strong> Mobile
                      network is virtually nonexistent once you're past
                      Rangdum. BSNL occasionally reaches Padum; nothing else
                      does. Tell people your itinerary before you lose
                      signal, not after.
                    </li>
                    <li>
                      <strong>Acclimatise before you push higher:</strong>{" "}
                      Padum itself sits at 3,650 m and Pensi La at 4,400 m —
                      altitude sickness is a real risk if you arrive from
                      lower elevations too quickly. Spend a night in Kargil
                      (2,676 m) before continuing.
                    </li>
                    <li>
                      <strong>Pack for genuine cold, even in summer:</strong>{" "}
                      Nights fall well below freezing year-round at this
                      altitude. For a winter Chadar Trek, layered, glacier-
                      grade insulation and waterproof footwear are the
                      difference between comfort and real risk.
                    </li>
                    <li>
                      <strong>Respect monastic spaces:</strong> Remove shoes
                      before entering shrine rooms, ask before photographing
                      monks or interiors, and dress modestly — Zanskar's
                      monasteries are living religious institutions, not
                      museums.
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
                          "Book the Chadar Trek only through a licensed operator",
                          "Overnight at Rangdum to break up the Kargil–Padum drive",
                          "Carry all the cash you'll need before entering the valley",
                          "Build 1–2 buffer days into both ends of your trip",
                          "Acclimatise in Kargil before crossing Pensi La",
                          "Arrange a Phugtal guide in Padum or Purne",
                          "Try skyu and butter tea at a village homestay",
                          "Carry a satellite communicator if trekking beyond Padum",
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
                          "Attempt the Chadar ice independently, ever",
                          "Book a same-day flight after leaving the valley",
                          "Rely on ATMs — carry cash from Kargil or Leh",
                          "Assume mobile signal past Rangdum",
                          "Push straight to Padum from low altitude in one day",
                          "Travel without evacuation-inclusive travel insurance",
                          "Photograph monastery interiors without asking first",
                          "Underestimate how cold Zanskar nights get, even in July",
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
                  "Zanskar Valley",
                  "Ladakh",
                  "Trekking",
                  "Chadar Trek",
                  "Phugtal Monastery",
                  "Padum",
                  "High Altitude",
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
                destination="Zanskar Valley"
              />

              <RelatedPostsGrid currentSlug="zanskar-valley-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="zanskar-valley-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
