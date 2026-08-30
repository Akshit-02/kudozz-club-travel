// src/app/blog/thiksey-travel-guide/page.tsx
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

// ── Per-page SEO metadata ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Thiksey Travel Guide: Monastery, Morning Prayers & Maitreya Buddha",
  description:
    "The complete guide to Thiksey Monastery, Ladakh — the 12-storey gompa that mirrors Lhasa's Potala Palace. Best time to visit, how to reach, the famous 6 AM prayers, the 15m Maitreya Buddha, and nearby Shey Palace and Stakna.",
  keywords: [
    "Thiksey Monastery",
    "Thiksey Gompa",
    "Ladakh",
    "Leh",
    "Maitreya Buddha",
    "Potala Palace Ladakh",
    "Ladakh monasteries",
  ].join(", "),
  openGraph: {
    title: "Thiksey Travel Guide: Monastery, Morning Prayers & Maitreya Buddha",
    description:
      "The 12-storey monastery that mirrors the Potala Palace — a complete guide to Thiksey's morning prayers, giant Buddha statue, and Indus valley views.",
    url: "https://club.kudozz.in/blog/thiksey-travel-guide",
    type: "article",
    tags: [
      "Thiksey",
      "Ladakh",
      "Leh",
      "Monastery",
      "Buddhism",
    ],
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Thiksey Monastery rising over the Indus valley in Ladakh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiksey Travel Guide: Monastery, Morning Prayers & Maitreya Buddha",
    description:
      "The 12-storey monastery that mirrors the Potala Palace — everything you need for Thiksey's morning prayers, giant Buddha statue, and views over the Indus.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/thiksey-travel-guide",
  },
};

// ── JSON-LD structured data for this article ─────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Thiksey Travel Guide: Monastery, Morning Prayers & Maitreya Buddha",
          description:
            "The complete guide to Thiksey Monastery, Ladakh — the 12-storey gompa that mirrors Lhasa's Potala Palace. Best time to visit, how to reach, the famous 6 AM prayers, the 15m Maitreya Buddha, and nearby Shey Palace and Stakna.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-06-10",
          dateModified: "2026-08-20",
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
            "@id": "https://club.kudozz.in/blog/thiksey-travel-guide",
          },
          keywords: [
            "Thiksey Monastery",
            "Thiksey Gompa",
            "Ladakh",
            "Leh",
            "Maitreya Buddha",
            "Potala Palace Ladakh",
            "Ladakh monasteries",
          ].join(", "),
          about: {
            "@type": "Place",
            name: "Thiksey",
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
              { "@type": "ListItem", position: 4, name: "Thiksey" },
            ],
          },
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "Why Visit Thiksey?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Thiksey", level: 2 },
  { id: "morning-prayers", title: "The 6 AM Morning Prayers", level: 2 },
  { id: "maitreya-buddha", title: "The Maitreya Buddha Statue", level: 2 },
  { id: "architecture-museum", title: "Architecture & Museum", level: 2 },
  { id: "rooftop-views", title: "Rooftop Views of the Indus Valley", level: 2 },
  { id: "nearby", title: "Nearby: Shey Palace & Stakna", level: 2 },
  { id: "photography", title: "Best Photography Times", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "Food Near Thiksey", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ThikseyPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero Section ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Thiksey Monastery's tiered walls rising above the Indus valley, Ladakh"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-stone-800/20" />
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
                { label: "Thiksey", href: null },
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
              {["Thiksey", "Ladakh", "Monastery", "Buddhism"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Thiksey Travel Guide: Monastery, Morning Prayers & Maitreya
              Buddha
            </h1>
            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              "Twelve storeys of whitewashed walls and ochre trim climbing a
              hillside above the Indus — Ladakh's answer to the Potala Palace,
              and the most cinematic monastery morning you'll ever spend."
            </p>

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
                11 min read
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
                  <h2>Why Visit Thiksey?</h2>
                  <p>
                    Twelve kilometres southeast of Leh, along the wide, silty
                    ribbon of the Indus, a hillside erupts into whitewashed
                    walls, maroon window frames, and gold finials, rising
                    storey upon storey until it seems to grow directly out of
                    the rock. This is <strong>Thiksey Monastery</strong>
                    (Thiksey Gompa) — and the resemblance to the Potala
                    Palace in Lhasa is not a marketing line, it is the first
                    thing every visitor says out loud the moment the bus
                    rounds the bend and the whole complex comes into view.
                  </p>
                  <p>
                    Thiksey belongs to the Gelugpa order — the "Yellow Hat"
                    school of Tibetan Buddhism founded by Tsongkhapa, the
                    same lineage as the Dalai Lama — and it is one of the
                    largest, wealthiest, and most active monasteries in
                    central Ladakh. Roughly eighty monks live and study here
                    today, and unlike some of Ladakh's more remote gompas,
                    Thiksey's rhythms of daily life are still visible: robes
                    drying on rooftop lines, novice monks sprinting up
                    stairwells late for class, the low murmur of chanting
                    drifting out of open doorways at dawn.
                  </p>
                  <p>
                    What sets Thiksey apart from the dozens of other
                    monasteries scattered across the Indus valley is the
                    combination of three things found nowhere else in one
                    place: a genuinely spectacular 12-storey silhouette, a
                    15-metre seated Maitreya Buddha housed in its own
                    dedicated hall, and a 6 AM prayer ceremony that visitors
                    can quietly sit in on. It is, without much competition,
                    the single best half-day trip out of Leh.
                  </p>

                  {/* Info box */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏯</span> Thiksey at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        ["Region", "Indus Valley, Ladakh"],
                        ["Altitude", "~3,600 m (11,800 ft)"],
                        ["Sect", "Gelugpa (Yellow Hat)"],
                        ["Founded", "15th century"],
                        ["Distance from Leh", "12–19 km (~30–40 min)"],
                        ["Best Time", "Apr–Oct, morning prayers daily"],
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
                  <h2>Best Time to Visit Thiksey</h2>
                  <p>
                    Thiksey is technically a year-round destination — the
                    monastery never closes and the monks pray every single
                    morning of the year, snow or shine. But road conditions,
                    light, and comfort vary hugely by season.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Summer (Jun–Aug)",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season",
                        text: "Leh–Manali and Leh–Srinagar highways are both open, tour buses run daily to Thiksey, and the surrounding barley fields turn a startling green against the brown hills. Mornings are cool, midday is warm. Busiest time of year.",
                      },
                      {
                        season: "Autumn (Sep–Oct)",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "The sweet spot",
                        text: "Crowds thin dramatically after early September, skies stay crisp and clear, and the poplar trees along the Indus turn gold. Prayer halls are quieter and easier to photograph without a scrum of tourists.",
                      },
                      {
                        season: "Winter (Nov–Feb)",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Stark & solitary",
                        text: "Leh empties out and temperatures fall well below freezing, but Thiksey is open and utterly silent — just you, the monks, and snow dusting the tiered rooftops. Requires serious cold-weather gear and flexibility around flight delays.",
                      },
                      {
                        season: "Spring (Mar–May)",
                        emoji: "🌱",
                        color: "bg-pink-50 border-pink-200",
                        mood: "Shoulder season",
                        text: "Snow is melting off the high passes, the valley is still brown and dusty rather than green, but hotel prices are low and the monastery itself is as accessible as ever since it sits right on the valley floor near Leh.",
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
                    <strong>Our pick:</strong> Mid-September. The tourist
                    convoys that clog the courtyard in July have thinned out,
                    the light is gentler, and you can sit through the entire
                    morning prayer ceremony with barely another visitor in
                    the room.
                  </blockquote>
                </section>

                {/* ── How to Reach ────────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Thiksey</h2>
                  <p>
                    Thiksey is one of the easiest monasteries in Ladakh to
                    reach — no permits, no rough tracks, no high passes,
                    just a short, scenic drive along the Indus from Leh.
                  </p>
                  <ul>
                    <li>
                      <strong>From Leh by taxi:</strong> The most common
                      route follows the Leh–Manali highway southeast for
                      about 19 km (~35–40 minutes). A shorter, quieter road
                      hugging the river cuts this to roughly 12 km. A round
                      trip taxi with waiting time costs ₹1,200–₹1,800.
                    </li>
                    <li>
                      <strong>By shared taxi/bus:</strong> Local buses and
                      shared sumos run from Leh's main bus stand toward
                      Karu and Hemis, passing directly below Thiksey — ask
                      the driver to drop you at the monastery gate. Fare is
                      ₹30–₹50.
                    </li>
                    <li>
                      <strong>By rented scooter/motorbike:</strong> The road
                      is flat, well-paved, and low-altitude by Ladakh
                      standards, making it one of the easiest self-drive
                      day trips out of Leh. Rentals run ₹800–₹1,500/day.
                    </li>
                    <li>
                      <strong>Combine with other sights:</strong> Thiksey
                      sits on the same road as Shey Palace and Hemis
                      Monastery, so most visitors bundle all three into a
                      single half- or full-day loop from Leh.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If you want to catch the 6 AM
                    prayers, arrange your taxi the night before. Very few
                    drivers are awake and available at 5 AM without advance
                    notice, and hotel front desks in Leh can usually book
                    one for you.
                  </div>
                </section>

                {/* ── Morning Prayers ─────────────────────────────────────── */}
                <section id="morning-prayers">
                  <h2>The 6 AM Morning Prayers</h2>
                  <p>
                    If you do only one thing at Thiksey, make it this. Every
                    morning without fail, the monastery's monks gather in
                    the main <em>dukhang</em> (assembly hall) for the first
                    prayer session of the day — and visitors are welcome to
                    slip in quietly and sit along the back wall.
                  </p>
                  <p>
                    Arrive by 5:45 AM if you can. The hall is dim, lit
                    mostly by butter lamps, and cold enough that a down
                    jacket is not optional even in July. Long horns called{" "}
                    <em>dungchen</em> sound first, low and resonant, echoing
                    off the surrounding hills before the sun has even
                    cleared the ridgeline. Monks of every age — from small
                    boys of seven or eight to elders who have chanted here
                    for decades — file in and take their seats in rows,
                    wrapped in maroon robes against the cold.
                  </p>
                  <p>
                    What follows is close to an hour of chanting,
                    interspersed with cymbals, drums, and the occasional
                    clatter of a young monk being handed a cup of butter
                    tea to keep him awake. It is unrehearsed, unhurried, and
                    entirely uninterested in whether anyone is watching —
                    which is exactly what makes it feel real rather than
                    staged for tourists.
                  </p>

                  <div
                    className="bg-forest-50 border border-forest-200 rounded-xl p-5 my-6"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <h4
                      className="font-bold text-forest-800 mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🙏</span> Attending the Prayers: Practical Notes
                    </h4>
                    <ul className="space-y-2 text-sm text-stone-600 m-0">
                      <li>
                        <strong>Timing:</strong> Ceremony typically runs
                        6:00–7:00 AM; arrive by 5:45 AM for a seat with a
                        clear view.
                      </li>
                      <li>
                        <strong>Dress:</strong> Cover shoulders and knees;
                        remove shoes before entering the hall.
                      </li>
                      <li>
                        <strong>Photography:</strong> Generally permitted
                        without flash, but always glance for signage or ask
                        a monk at the door — some sessions restrict cameras
                        during specific rituals.
                      </li>
                      <li>
                        <strong>Etiquette:</strong> Sit along the back or
                        side walls, stay silent, and don't step over
                        seated monks or ritual objects. Leave quietly if you
                        need to exit early.
                      </li>
                      <li>
                        <strong>Warmth:</strong> The hall is unheated —
                        bring a proper jacket even in peak summer.
                      </li>
                    </ul>
                  </div>

                  <p>
                    By the time the ceremony winds down, the sun is usually
                    just cresting the eastern ridge, throwing long gold light
                    across the courtyard outside — which happens to be the
                    best possible moment to walk out and photograph the
                    monastery's tiered facade.
                  </p>
                </section>

                {/* ── Maitreya Buddha ─────────────────────────────────────── */}
                <section id="maitreya-buddha">
                  <h2>The Maitreya Buddha Statue</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Ladakh's Indus valley landscape near Thiksey Monastery"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Thiksey's single most famous feature sits inside a
                    dedicated two-storey hall built in the 1970s
                    specifically to house it: a{" "}
                    <strong>15-metre-tall seated statue of Maitreya</strong>,
                    the Buddha of the future. It is the largest such statue
                    in Ladakh and one of the most striking pieces of
                    religious art in the entire Indus valley.
                  </p>
                  <p>
                    The statue was consecrated in the presence of the 14th
                    Dalai Lama, and its scale is almost disorienting up
                    close — you enter at the level of its lap and have to
                    climb an internal staircase, wrapped around the hall's
                    interior, to reach eye level with its serene, gilded
                    face. Faded murals of protector deities and mandalas
                    cover the surrounding walls, lit by the soft glow of
                    hundreds of butter lamps.
                  </p>
                  <p>
                    Give this hall at least fifteen to twenty minutes.
                    Climbing the stairwell floor by floor and watching the
                    statue's proportions shift as you ascend is, on its own,
                    worth the trip out from Leh.
                  </p>
                </section>

                {/* ── Architecture & Museum ───────────────────────────────── */}
                <section id="architecture-museum">
                  <h2>Architecture & Museum</h2>
                  <p>
                    Thiksey's twelve-storey silhouette is no accident — the
                    complex was deliberately built to echo the Potala
                    Palace, tier upon tier of monastic buildings, assembly
                    halls, and monks' quarters stacked up a natural
                    hillside outcrop and connected by a maze of narrow
                    stairwells, courtyards, and covered walkways.
                  </p>
                  <p>
                    Wandering the complex feels less like visiting a single
                    building and more like exploring a small hillside
                    village. Beyond the main dukhang and the Maitreya hall,
                    look for the smaller Lakhang Nyerma chapel, the row of
                    stupas lining the approach path, and the monastery's{" "}
                    <strong>small museum</strong>, which holds a genuinely
                    excellent collection: centuries-old thangka paintings,
                    illuminated manuscripts, ceremonial masks used in the
                    monastery's annual Gustor festival (held around
                    October/November), ancient weapons, and ritual objects
                    including conch shells and hand drums.
                  </p>
                  <p>
                    Unlike some Ladakhi monasteries where photography is
                    tightly restricted, Thiksey's public courtyards and
                    exterior are fair game throughout the day — it's the
                    interior halls and museum where rules tighten, so
                    always check before raising a camera indoors.
                  </p>
                </section>

                {/* ── Rooftop Views ────────────────────────────────────────── */}
                <section id="rooftop-views">
                  <h2>Rooftop Views of the Indus Valley</h2>
                  <p>
                    Climb to the uppermost terraces of the monastery and the
                    reward is one of the finest panoramas in central Ladakh:
                    the wide, braided silver thread of the{" "}
                    <strong>Indus River</strong> cutting through a valley
                    floor of green barley fields and poplar groves, ringed
                    by the barren, honey-and-rust coloured peaks of the
                    Ladakh and Zanskar ranges, with the distant white
                    outline of the Stok Kangri massif visible on clear days.
                  </p>
                  <p>
                    Strings of prayer flags snap in the wind between the
                    rooftop chortens, and it's common to find a monk or two
                    sitting quietly with a cup of tea, watching the same
                    view they've grown up with. Give yourself time here — it
                    is the kind of spot that rewards sitting still rather
                    than rushing through for a photo.
                  </p>
                </section>

                {/* ── Nearby ───────────────────────────────────────────────── */}
                <section id="nearby">
                  <h2>Nearby: Shey Palace & Stakna Monastery</h2>
                  <p>
                    Because Thiksey sits directly on the main road between
                    Leh and Hemis, it pairs naturally with two other
                    worthwhile stops — either as a quick add-on or as part
                    of a fuller half-day loop.
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="bg-white border border-stone-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-stone-900 mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Shey Palace
                      </h4>
                      <p className="text-sm text-stone-600 m-0">
                        About 7 km back toward Leh, Shey was once the
                        summer capital of the Namgyal dynasty, the royal
                        family that ruled Ladakh for centuries. The palace
                        itself is largely ruined and atmospheric, but its
                        temple houses a beautiful gilded copper Buddha
                        statue nearly as impressive as Thiksey's Maitreya.
                        Worth 30–45 minutes.
                      </p>
                    </div>
                    <div className="bg-white border border-stone-200 rounded-xl p-5">
                      <h4
                        className="font-bold text-stone-900 mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Stakna Monastery
                      </h4>
                      <p className="text-sm text-stone-600 m-0">
                        A short drive further along the Indus, Stakna sits
                        on a small hilltop shaped, according to local lore,
                        like a tiger's nose — which is what its name means.
                        It belongs to the Drukpa Kagyu lineage (unlike the
                        Gelugpa monasteries nearby) and is far quieter than
                        Thiksey, making it a peaceful counterpoint if you
                        want a slower, less-visited monastery experience on
                        the same day.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── Photography ──────────────────────────────────────────── */}
                <section id="photography">
                  <h2>Best Photography Times</h2>
                  <p>
                    Thiksey photographs beautifully at almost any hour, but
                    two windows stand out from experience:
                  </p>
                  <ul>
                    <li>
                      <strong>Just after sunrise (7:00–8:00 AM):</strong>{" "}
                      Right as the morning prayer session ends, low gold
                      light rakes across the whitewashed tiers from the
                      east, throwing deep shadows into the window recesses
                      and making the whole complex glow.
                    </li>
                    <li>
                      <strong>Late afternoon (4:30–6:00 PM):</strong> The
                      sun swings around behind the monastery, silhouetting
                      the prayer flags and chortens on the rooftop against
                      a warm sky — excellent for wide shots taken from the
                      road below looking up at the full 12-storey profile.
                    </li>
                  </ul>
                  <p>
                    Midday light, by contrast, is harsh and flattens the
                    architecture's tiered shadows — if your schedule allows
                    only one visit, choose morning.
                  </p>
                </section>

                {/* ── Where to Stay ───────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Thiksey has no real hotel infrastructure of its own —
                    almost everyone visits as a day trip from{" "}
                    <strong>Leh</strong>, which has the region's full range
                    of accommodation just 30–40 minutes away. If you're
                    determined to be closer for the 6 AM prayers, a handful
                    of quiet homestays and guesthouses have sprung up in
                    Thiksey village and neighbouring Karu.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,500/night",
                        picks: [
                          "Guesthouses in Leh's Changspa area",
                          "Village homestays in Thiksey/Karu",
                          "Backpacker hostels near Leh Market",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,500–₹5,000/night",
                        picks: [
                          "Boutique hotels in Leh's Fort Road area",
                          "Karu roadside resorts",
                          "Riverside guesthouses along the Indus",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹5,000–₹15,000+/night",
                        picks: [
                          "Leh boutique heritage properties",
                          "Luxury tented camps near Stakna",
                          "Premium resorts overlooking the Indus",
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

                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Staying overnight in Karu or
                    Thiksey village means you can walk to the 6 AM prayers
                    without a pre-dawn taxi booking — a small logistical
                    change that makes attending far easier.
                  </div>
                </section>

                {/* ── Food ────────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food Near Thiksey</h2>
                  <p>
                    Don't expect a café scene at the monastery gate — dining
                    here is simple, local, and best paired with the
                    monastery's own rhythms.
                  </p>
                  <ul>
                    <li>
                      <strong>Butter tea (gur gur cha):</strong> Offered to
                      monks during the morning prayers; visitors can
                      usually find a cup at small stalls near the entrance.
                      Salty, buttery, and an acquired taste worth trying at
                      least once.
                    </li>
                    <li>
                      <strong>Thukpa & momos:</strong> Simple Ladakhi-Tibetan
                      eateries in Thiksey and Karu villages serve hearty
                      noodle soup and dumplings for ₹100–₹200 — perfect
                      after an early, cold start.
                    </li>
                    <li>
                      <strong>Apricot products:</strong> Roadside stalls
                      along the Leh–Thiksey road sell fresh and dried
                      apricots, apricot jam, and apricot oil — a genuine
                      Ladakh Valley specialty.
                    </li>
                    <li>
                      <strong>Full meals in Leh:</strong> Since most
                      visitors return to Leh by mid-morning, breakfast after
                      the prayers back in town — at one of the German
                      bakeries or cafés along Fort Road — is the most
                      common plan.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ──────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <p>
                    A Thiksey visit is one of the cheapest excursions you
                    can make from Leh — no permits, no expensive gear, just
                    transport and a small entry fee.
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
                            Comfort
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Monastery entry fee", "₹30", "₹30"],
                          ["Round-trip shared taxi/bus", "₹60", "—"],
                          ["Private taxi (round trip)", "—", "₹1,500"],
                          ["Camera/museum fee", "₹20", "₹20"],
                          ["Tea & snacks", "₹100", "₹300"],
                          ["Half-day total", "~₹210", "~₹1,850"],
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
                  <h2>Essential Tips</h2>
                  <p>
                    A little planning goes a long way at Thiksey, especially
                    if the 6 AM prayers are the whole point of your trip.
                  </p>

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
                          "Book your taxi the night before for a 5:30 AM pickup",
                          "Dress warmly — the prayer hall is unheated year-round",
                          "Remove shoes before entering any prayer hall",
                          "Climb to the Maitreya Buddha hall's upper level",
                          "Spend extra time on the rooftop for the Indus valley view",
                          "Combine your trip with Shey Palace and Stakna nearby",
                          "Carry small change for the entry and camera fees",
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
                          "Use flash photography inside the halls",
                          "Talk loudly or walk in front of seated monks",
                          "Skip acclimatisation — Thiksey sits at 3,600m",
                          "Assume photography is allowed everywhere indoors",
                          "Rush the visit — the rooftop and museum deserve time",
                          "Arrive after 6:15 AM expecting to see the full prayers",
                          "Wear shorts or sleeveless tops inside the halls",
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
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Thiksey",
                  "Ladakh",
                  "Leh",
                  "Monastery",
                  "Buddhism",
                  "Indus Valley",
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
                destination="Thiksey"
              />
              {/* Related Posts Grid at bottom */}
              <RelatedPostsGrid currentSlug="thiksey-travel-guide" />
            </article>

            {/* Right: Related Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="thiksey-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
