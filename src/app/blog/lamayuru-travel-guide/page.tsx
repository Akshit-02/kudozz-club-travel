// src/app/blog/lamayuru-travel-guide/page.tsx
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
  title: "Lamayuru Travel Guide: Moonland, Monastery & How to Visit",
  description:
    "A complete guide to Lamayuru — Ladakh's oldest monastery set amid the surreal moonland badlands. Best time to visit, how to reach, the Yuru Kabgyat festival, short treks, and where to stay.",
  keywords:
    "Lamayuru, Lamayuru Monastery, Moonland Ladakh, Ladakh oldest monastery, Yuru Kabgyat festival, Lamayuru Alchi trek, Wanla monastery, Srinagar Leh highway, best time to visit Lamayuru, how to reach Lamayuru from Leh, Lamayuru day trip or overnight, Lamayuru Chilling trek, Lamayuru budget, things to do in Lamayuru",
  openGraph: {
    title: "Lamayuru Travel Guide: Moonland, Monastery & How to Visit",
    description:
      "Ladakh's oldest monastery, perched above a landscape so eroded and alien it's known simply as the Moonland. Here's how to see it right.",
    url: "https://club.kudozz.in/blog/lamayuru-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Lamayuru moonland landscape in Ladakh with eroded badland formations",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamayuru Travel Guide: Moonland, Monastery & How to Visit",
    description:
      "Ladakh's oldest monastery, perched above the surreal Moonland badlands on the Srinagar–Leh highway.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/lamayuru-travel-guide",
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
          headline: "Lamayuru Travel Guide: Moonland, Monastery & How to Visit",
          description:
            "A complete guide to Lamayuru — Ladakh's oldest monastery set amid the surreal moonland badlands. Best time to visit, how to reach, the Yuru Kabgyat festival, short treks, and where to stay.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-07-02",
          dateModified: "2026-08-14",
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
            "@id": "https://club.kudozz.in/blog/lamayuru-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Lamayuru",
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
                name: "Lamayuru Travel Guide",
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
    q: "How many days do I need for Lamayuru?",
    a: "Most travellers treat Lamayuru as a 20-minute photo stop between Leh and Kargil, and that's enough to see the moonland viewpoint and take a quick look at the monastery. But staying just one night — in a budget guesthouse or homestay — lets you catch the monastery at dawn without another visitor around and gives you time to add Wanla or a short trek, which the day-trip crowd misses entirely.",
  },
  {
    q: "What is the best time to visit Lamayuru?",
    a: "Mid-to-late September is the recommended window — the monastery is quiet, the moonland glows amber in the evening light, and the Srinagar–Leh highway is still comfortably open. July–August is peak season and also when the Yuru Kabgyat festival usually falls, so plan around then if you want the masked cham dances specifically.",
  },
  {
    q: "How do I reach Lamayuru from Leh?",
    a: "Lamayuru sits directly on NH1, the Srinagar–Leh highway, about 125 km west of Leh and roughly 3 hours by road via Nimmu, Basgo, Khaltse, and Wanla. Shared taxis and local buses run the route, though a private cab or self-drive lets you stop at Magnetic Hill, Sangam, and Alchi along the way.",
  },
  {
    q: "Why is Lamayuru called the Moonland?",
    a: "The hills around Lamayuru have been eroded by wind and water into pale, cracked sedimentary ridges and cones — the remains of what geologists believe was once a vast Himalayan lake. The bare, cratered result looks so unearthly that everyone who passes through calls it the Moonland, and it's visible from a pull-off on NH1 just before the village.",
  },
  {
    q: "When is the Yuru Kabgyat festival held?",
    a: "Yuru Kabgyat follows the Tibetan lunar calendar and typically falls in summer, often around July, with exact dates shifting year to year — check locally or with a Ladakh-based operator a season ahead. It's two days of masked cham dances performed by monks, drawing a mostly local and pilgrim crowd rather than the bigger tourist numbers seen at Hemis.",
  },
  {
    q: "What treks start from Lamayuru?",
    a: "Lamayuru is the trailhead for two well-known short treks: the classic Lamayuru–Alchi trek (3–4 days, crossing Konzke La at around 4,900 m) and the shorter Lamayuru–Chilling trek (2–3 days, ending at the Zanskar River). Both require a local guide since trails are unmarked in places and mobile signal disappears almost immediately outside the village.",
  },
  {
    q: "Is Lamayuru Monastery really the oldest in Ladakh?",
    a: "Lamayuru Monastery is generally accepted as the oldest continuously used monastery in Ladakh, tracing its roots to the 11th century and the Kashmiri Buddhist master Naropa, who is said to have meditated in a cave still preserved within the complex today. It belongs to the Drikung Kagyu lineage, though tradition holds it began earlier still as a Bon site.",
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
  { id: "introduction", title: "Why Visit Lamayuru?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Lamayuru", level: 2 },
  { id: "moonland", title: "The Moonland Landscape", level: 2 },
  { id: "monastery", title: "Lamayuru Monastery", level: 2 },
  { id: "singhe-ghang", title: "→ Singhe Ghang & Inner Chambers", level: 3 },
  { id: "yuru-kabgyat", title: "→ Yuru Kabgyat Festival", level: 3 },
  { id: "trekking", title: "Trekking from Lamayuru", level: 2 },
  { id: "lamayuru-alchi", title: "→ Lamayuru–Alchi Trek", level: 3 },
  { id: "lamayuru-chilling", title: "→ Lamayuru–Chilling Trek", level: 3 },
  { id: "wanla", title: "Wanla Village & Monastery", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LamayuruPage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[72vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Lamayuru moonland landscape with eroded badland formations in Ladakh"
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
                { label: "Lamayuru", href: null },
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
                "Lamayuru",
                "Ladakh",
                "Moonland",
                "Monastery",
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
              Lamayuru Travel Guide: Moonland, Monastery & How to Visit
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Ladakh's oldest monastery sits on a lone rock outcrop above a
              landscape so eroded, so bare, so utterly unearthly that people
              have simply stopped trying to describe it and started calling
              it the Moonland.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "12 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Kargil District, Ladakh",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
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
                  <h2>Why Visit Lamayuru?</h2>
                  <p>
                    Most people driving the Srinagar–Leh highway have their
                    eyes fixed on Leh, still hours away, and almost miss the
                    turn that leads up to one of the most remarkable sights
                    in the Himalaya. <strong>Lamayuru</strong> is a small
                    village at roughly 3,510 metres in Ladakh's Kargil
                    district, built around and beneath a monastery that is
                    widely regarded as the <strong>oldest in Ladakh</strong>{" "}
                    — and one of its largest. But it isn't only the age of
                    the gompa that stops travellers in their tracks. It's
                    what surrounds it.
                  </p>
                  <p>
                    The hills around Lamayuru have been carved by wind and
                    water over millions of years into a maze of ridges,
                    cones, and folds of pale, cracked sediment — the eroded
                    bed of what geologists believe was once a vast
                    Himalayan lake. Local legend tells a gentler version of
                    the same story: that this was once a lake sacred to the
                    nagas, drained by a great Buddhist master so that a
                    monastery could rise in its place. Either way, the
                    result is a landscape so barren and lunar that everyone
                    who passes through, monk and motorcyclist alike, calls
                    it the same thing — the <strong>Moonland</strong>.
                  </p>
                  <p>
                    Lamayuru rewards travellers who are willing to slow
                    down. It's usually treated as a 20-minute photo stop on
                    the long drive between Srinagar and Leh, but stay a
                    night and you get the monastery at dawn without a single
                    other visitor, a village that still moves at its own
                    pace, and — if your timing is right — a doorway into
                    Ladakh's finest short treks.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Lamayuru at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Kargil district, Ladakh",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "3,510 m (11,520 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "May – Oct" },
                        {
                          icon: "🛣️",
                          label: "Distance from Leh",
                          value: "~125 km (~3 hrs)",
                        },
                        {
                          icon: "🛕",
                          label: "Founded",
                          value: "11th century — oldest in Ladakh",
                        },
                        {
                          icon: "🎭",
                          label: "Festival",
                          value: "Yuru Kabgyat (summer, masked cham)",
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
                  <h2>Best Time to Visit Lamayuru</h2>
                  <p>
                    Lamayuru sits on the Srinagar–Leh highway, which has a
                    longer open season than the Manali route but is still
                    firmly a summer-and-shoulder destination. The moonland
                    itself looks different depending on the light and season
                    — from stark and pale in early summer to deep gold at
                    sunset in September.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "May – June",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Early season",
                        text: "The Srinagar–Leh highway opens (usually April–May), the village wakes up after winter, and the moonland formations still carry faint traces of the season's last snowmelt in their gullies. Fewer travellers, crisp mornings.",
                      },
                      {
                        season: "July – August",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season",
                        text: "Warmest, driest, busiest — this is also when the Yuru Kabgyat festival usually falls, bringing masked cham dances to the monastery courtyard. Book a room in the village ahead if you're timing your visit to the festival.",
                      },
                      {
                        season: "September – October",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Best light, our pick",
                        text: "Crowds thin out after the summer rush, the light turns long and golden in the late afternoon, and the moonland's folds and shadows are at their most dramatic. The highway typically stays open into late October.",
                      },
                      {
                        season: "November – April",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Closed / expedition only",
                        text: "The Srinagar–Leh highway closes under snow, usually by early December, and Lamayuru becomes accessible only via a long detour through Leh and the Manali highway, if at all. Not recommended for most travellers.",
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
                    <strong>Our pick:</strong> Mid-to-late September. The
                    monastery is quiet, the moonland glows amber in the
                    evening light, and the highway is still comfortably
                    open. If you specifically want the Yuru Kabgyat festival,
                    plan around July, since exact dates follow the Tibetan
                    lunar calendar and shift year to year.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Lamayuru</h2>
                  <p>
                    Lamayuru sits directly on{" "}
                    <strong>NH1, the Srinagar–Leh highway</strong>, about 125
                    km west of Leh and roughly 3 hours by road under normal
                    conditions — making it one of the easiest heritage sites
                    in Ladakh to reach without a special detour.
                  </p>
                  <ul>
                    <li>
                      <strong>From Leh:</strong> Drive west via Nimmu,
                      Basgo, Khaltse, and Wanla. The road is well-maintained
                      tarmac for most of the way, with the final stretch
                      climbing to the village. Shared taxis and local buses
                      run this route, though a private cab or self-drive
                      gives you the freedom to stop at Magnetic Hill,
                      Sangam, and Alchi along the way.
                    </li>
                    <li>
                      <strong>From Kargil:</strong> Lamayuru is about 100 km
                      east of Kargil (~3 hours), making it a natural stop
                      if you're arriving on the Srinagar–Leh highway from
                      Kashmir rather than from Leh.
                    </li>
                    <li>
                      <strong>From Srinagar:</strong> The full Srinagar–Leh
                      drive is around 420 km and typically split over two
                      days with an overnight in Kargil, crossing Zoji La
                      Pass en route. Lamayuru falls on day two, roughly
                      three hours before Leh.
                    </li>
                    <li>
                      <strong>Public transport:</strong> Shared sumos and
                      the state bus service between Leh and Kargil pass
                      through Lamayuru daily, but timings are limited — a
                      hired taxi or your own vehicle gives far more
                      flexibility to actually stop and explore.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Most day-trippers see
                    Lamayuru as a 20-minute stop between Leh and Kargil.
                    Staying even one night lets you catch the monastery at
                    sunrise, when there's no one else there and the light
                    on the moonland is at its best.
                  </div>
                </section>

                {/* ── Moonland ──────────────────────────────────────────── */}
                <section id="moonland">
                  <h2>The Moonland Landscape</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Eroded moonland badlands surrounding Lamayuru monastery"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    What sets Lamayuru apart from every other monastery town
                    in Ladakh is the ground it stands on. The hills that
                    ring the village aren't the sharp granite and schist of
                    the wider Himalaya — they're soft, pale sedimentary
                    formations, laid down when this entire basin was
                    underwater and sculpted since into cones, ridges, and
                    deep vertical gullies by millennia of wind, frost, and
                    the occasional violent cloudburst.
                  </p>
                  <p>
                    Seen from the highway viewpoint just above the village,
                    the effect is startling: a rippling, cratered expanse of
                    grey-beige earth with almost no vegetation, folding away
                    toward the mountains in a texture that genuinely does
                    resemble lunar terrain. It's the reason every road trip
                    itinerary through Ladakh flags Lamayuru as a
                    must-stop — this is one of the very few places in the
                    world where the ground itself is the attraction.
                  </p>
                  <ul>
                    <li>
                      <strong>Best viewpoint:</strong> The pull-off on NH1
                      just before the village, on the Leh-facing side,
                      gives the classic wide shot of the formations with
                      the monastery perched above them.
                    </li>
                    <li>
                      <strong>Best light:</strong> Early morning and the
                      last hour before sunset, when low-angle light
                      deepens the shadows in every gully and ridge and
                      turns the pale rock gold and rose.
                    </li>
                    <li>
                      <strong>Best vantage:</strong> Climb to the
                      monastery's upper terraces for an elevated view over
                      the full sweep of the badlands — far better than the
                      roadside stop for photography.
                    </li>
                    <li>
                      <strong>Respect the terrain:</strong> The formations
                      are soft and erode further with foot traffic. Stick
                      to established paths rather than scrambling directly
                      up the cones for a photo.
                    </li>
                  </ul>
                </section>

                {/* ── Monastery ─────────────────────────────────────────── */}
                <section id="monastery">
                  <h2>Lamayuru Monastery</h2>
                  <p>
                    <strong>Lamayuru Monastery</strong> (Yuru Gompa) traces
                    its roots to the 11th century, when the Kashmiri
                    Buddhist master Naropa is said to have meditated in a
                    cave on this site — a cave still preserved within the
                    monastery complex today. Local tradition holds that the
                    valley was once a lake, and that Naropa drained it,
                    revealing the ground on which the monastery now stands;
                    a version of the same "moon lake" story that gives the
                    surrounding badlands their nickname. The site is
                    generally accepted as the oldest continuously used
                    monastery in Ladakh, and today it belongs to the{" "}
                    <strong>Drikung Kagyu</strong> lineage of Tibetan
                    Buddhism, though it is said to have started life
                    earlier still, as a Bon site before its conversion.
                  </p>
                  <p>
                    At its peak, Lamayuru is believed to have housed several
                    hundred monks across five separate colleges — an
                    extraordinary scale for such a remote location. Numbers
                    have dwindled since, but the monastery remains active,
                    with a resident community of monks who maintain the
                    prayer halls, run a small monastic school, and keep the
                    daily rhythm of chanting and ritual that has continued
                    here, with interruptions, for close to a thousand
                    years.
                  </p>

                  <section id="singhe-ghang">
                    <h3>Singhe Ghang & the Inner Chambers</h3>
                    <p>
                      The main temple building, known as{" "}
                      <strong>Singhe Ghang</strong> (Seng-ge-sgang, "Lion's
                      Fort"), crowns the rock outcrop at the heart of the
                      complex and is the oldest surviving structure at
                      Lamayuru. Inside, dim, butter-lamp-lit chambers hold
                      statues of the Buddha, Avalokiteshvara, and Guru
                      Rinpoche, along with faded but still striking wall
                      murals depicting the lives of the masters connected
                      to the monastery's founding.
                    </p>
                    <p>
                      A narrow passage leads to Naropa's meditation cave,
                      a low, dark chamber tucked into the rock that
                      predates the temple built around it. Visitors can
                      also walk the labyrinth of monastic quarters, prayer
                      wheels, and courtyards that spill down the hillside
                      below the main temple, giving Lamayuru its distinctive
                      tiered, almost fortress-like silhouette when viewed
                      from the highway below.
                    </p>
                    <ul>
                      <li>
                        <strong>Entry:</strong> A small entry fee applies;
                        photography inside the main halls is often
                        restricted — ask before shooting.
                      </li>
                      <li>
                        <strong>Timing:</strong> Open through daylight
                        hours; early morning, before tour groups arrive
                        from Leh, is quietest.
                      </li>
                      <li>
                        <strong>Dress:</strong> Modest clothing, shoes off
                        before entering prayer halls.
                      </li>
                    </ul>
                  </section>

                  <section id="yuru-kabgyat">
                    <h3>Yuru Kabgyat Festival</h3>
                    <p>
                      Once a year, Lamayuru's usually quiet courtyard fills
                      with colour and drums for the{" "}
                      <strong>Yuru Kabgyat</strong> festival — two days of{" "}
                      <strong>cham</strong>, the masked ritual dances
                      performed by monks in elaborate costumes representing
                      wrathful deities, skeleton figures, and protector
                      spirits. The dances re-enact the triumph of Buddhist
                      teaching over hostile forces and culminate in the
                      ceremonial destruction of a sacrificial effigy, a
                      symbolic clearing of obstacles for the year ahead.
                    </p>
                    <p>
                      The festival is held according to the Tibetan lunar
                      calendar, typically falling in summer (often around
                      July), and dates shift from year to year — check
                      locally or with a Ladakh-based operator a season
                      ahead if you want to plan your trip around it.
                      Unlike Hemis, Ladakh's largest and most visited
                      festival, Yuru Kabgyat still draws a mostly local
                      and pilgrim crowd, which makes it a rarer, more
                      intimate way to see cham performed in its original
                      context.
                    </p>
                  </section>
                </section>

                {/* ── Trekking ──────────────────────────────────────────── */}
                <section id="trekking">
                  <h2>Trekking from Lamayuru</h2>
                  <p>
                    Beyond its highway-stop reputation, Lamayuru is also
                    the trailhead for two of Ladakh's most rewarding
                    short treks — routes that thread through the same
                    eroded terrain and remote side valleys, connecting the
                    village to the Indus and Zanskar river systems on
                    foot.
                  </p>

                  <section id="lamayuru-alchi">
                    <h3>Lamayuru–Alchi Trek</h3>
                    <p>
                      The classic <strong>Lamayuru–Alchi trek</strong> is a
                      3–4 day route that climbs out of the moonland via the
                      Prinkiti La and Konzke La passes before dropping
                      through remote hamlets — Shilla, Sumdah Chenmo,
                      Sumdah Choon — toward the Indus Valley near Alchi.
                      It's often used as an introductory Ladakh trek: high
                      enough to feel properly wild, but shorter and less
                      logistically demanding than routes into Markha
                      Valley or Zanskar.
                    </p>
                    <ul>
                      <li>
                        <strong>Duration:</strong> 3–4 days
                      </li>
                      <li>
                        <strong>Max altitude:</strong> Konzke La, around
                        4,900 m
                      </li>
                      <li>
                        <strong>Difficulty:</strong> Moderate — good for a
                        first high-altitude trek with prior acclimatisation
                        in Leh
                      </li>
                      <li>
                        <strong>Season:</strong> June to early October
                      </li>
                    </ul>
                  </section>

                  <section id="lamayuru-chilling">
                    <h3>Lamayuru–Chilling Trek</h3>
                    <p>
                      A shorter variant of the same route, the{" "}
                      <strong>Lamayuru–Chilling trek</strong> follows the
                      first stages toward Sumdah before branching south
                      into the gorge that leads down to Chilling, a small
                      village on the Zanskar River known for its
                      metalworking tradition and as a popular put-in point
                      for rafting trips. At 2–3 days, it's a good option
                      if you're short on time but still want a genuine
                      taste of trekking through Ladakh's back-country.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Note:</strong> Both routes require a local
                      guide or an experienced trekking party — trails are
                      unmarked in places, water sources are limited, and
                      mobile signal disappears almost immediately outside
                      Lamayuru. Arrange guides and permits through a
                      registered Leh-based trekking operator.
                    </div>
                  </section>
                </section>

                {/* ── Wanla ─────────────────────────────────────────────── */}
                <section id="wanla">
                  <h2>Wanla Village & Monastery</h2>
                  <p>
                    About 8 km back toward Leh, just off the highway, the
                    small village of <strong>Wanla</strong> is an easy
                    add-on that most Lamayuru-bound travellers skip
                    entirely — which is exactly why it's worth the detour.
                    Wanla's own monastery, perched on a rocky spur above
                    the village, houses a three-storey temple attributed to{" "}
                    <strong>Rinchen Zangpo</strong>, the great 10th–11th
                    century translator credited with founding many of
                    Ladakh's earliest monasteries, including Alchi.
                  </p>
                  <p>
                    The main image inside is a large statue of
                    Avalokiteshvara, the bodhisattva of compassion, flanked
                    by older murals in a style closely related to Alchi's
                    famous paintings. Wanla receives a fraction of
                    Lamayuru's visitors, and the walk up through the
                    village — past barley terraces, a ruined fort on the
                    ridge above, and stone houses stacked along the
                    hillside — is as much the point as the temple itself.
                  </p>
                  <ul>
                    <li>
                      <strong>Distance from Lamayuru:</strong> ~8 km (15–20
                      minutes by road)
                    </li>
                    <li>
                      <strong>Combine with:</strong> Alchi Monastery, a
                      further 45 minutes toward Leh, for a full morning of
                      early Ladakhi Buddhist heritage sites
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Lamayuru</h2>
                  <p>
                    Lamayuru is a small village, and accommodation is
                    correspondingly modest — think simple guesthouses and
                    homestays rather than resorts. That's part of the
                    appeal: staying here puts you a five-minute walk from
                    the monastery gate and lets you see the moonland at
                    dawn and dusk, when the highway crowds have gone.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏡",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Village homestays (bed + meals)",
                          "Basic guesthouses near the monastery road",
                          "Dorm-style stops used by trekking groups",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,200–₹3,000/night",
                        picks: [
                          "Small family-run hotels on the highway",
                          "Guesthouses with attached bathrooms",
                          "Rooms with monastery or moonland views",
                        ],
                      },
                      {
                        tier: "Alternative",
                        icon: "🚗",
                        range: "Day trip from Leh",
                        picks: [
                          "Base in Leh, drive out for a half-day visit",
                          "Combine with Alchi + Basgo on the same trip",
                          "Best if you're short on time",
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
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Rooms fill up fast on
                    nights close to the Yuru Kabgyat festival. Outside of
                    that window, Lamayuru rarely feels crowded — you can
                    usually find a room on arrival even without a booking.
                  </div>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Lamayuru</h2>
                  <p>
                    Don't expect a restaurant scene — Lamayuru's food
                    options are a handful of simple guesthouse kitchens and
                    highway dhabas serving the same hearty, high-altitude
                    Ladakhi staples you'll find across the region.
                  </p>
                  <ul>
                    <li>
                      <strong>Thukpa:</strong> Tibetan noodle soup, the
                      reliable go-to at every roadside stop along NH1 —
                      warming and filling after a cold morning at the
                      viewpoint.
                    </li>
                    <li>
                      <strong>Skyu:</strong> Ladakh's thick, hand-shaped
                      pasta simmered in vegetable broth — traditional
                      homestay fare, best eaten exactly where it's made.
                    </li>
                    <li>
                      <strong>Momos:</strong> Steamed dumplings, usually
                      vegetable or potato-filled in villages this remote,
                      available at most guesthouses on request.
                    </li>
                    <li>
                      <strong>Butter tea:</strong> Salted, yak-butter
                      churned tea offered in most homestays and inside the
                      monastery itself — an acquired taste, but worth
                      trying once at the source.
                    </li>
                    <li>
                      <strong>Carry your own snacks:</strong> Between meal
                      times, options are limited. Pack dry fruit, energy
                      bars, and extra water if you're stopping only for a
                      few hours.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for Lamayuru</h2>
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
                          ["Accommodation/night", "₹600", "₹2,000", "₹4,500"],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          [
                            "Monastery entry",
                            "₹30–₹50",
                            "₹30–₹50",
                            "₹30–₹50",
                          ],
                          [
                            "Taxi from Leh (return)",
                            "₹3,500 (shared)",
                            "₹6,000",
                            "₹9,000 (private, full day)",
                          ],
                          [
                            "Guide (for trekking)",
                            "—",
                            "₹1,500/day",
                            "₹2,500/day",
                          ],
                          ["Daily total (staying over)", "₹1,000", "₹2,750", "₹6,050"],
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
                    * Figures assume a Lamayuru visit as part of a wider
                    Ladakh trip; a same-day round trip from Leh mostly
                    incurs transport and food costs only.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Lamayuru</h2>
                  <ul>
                    <li>
                      <strong>Acclimatise before you arrive:</strong>{" "}
                      Lamayuru sits above 3,500 m. If you're coming
                      straight off a flight into Leh, spend at least a day
                      or two acclimatising there before heading out on the
                      highway.
                    </li>
                    <li>
                      <strong>Fuel up in Leh or Kargil:</strong> There is
                      no reliable petrol station in Lamayuru itself — fill
                      the tank before setting out from either direction.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> There are no ATMs in the
                      village. Small guesthouses and dhabas rarely accept
                      cards or digital payments.
                    </li>
                    <li>
                      <strong>Mobile signal is patchy:</strong> BSNL has
                      the most reliable coverage along this stretch of NH1;
                      don't count on connectivity once you're off the main
                      road or on a trek.
                    </li>
                    <li>
                      <strong>Layer up:</strong> Even in summer, mornings
                      and evenings at this altitude are cold. Carry a
                      warm layer regardless of how warm the midday drive
                      feels.
                    </li>
                    <li>
                      <strong>Time your photos:</strong> The moonland
                      photographs best in soft, low-angle light — early
                      morning or the last hour before sunset — rather than
                      the flat glare of midday, which is when most
                      highway traffic passes through.
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
                          "Stay a night if you can, for sunrise over the moonland",
                          "Climb to the monastery's upper terraces for the best view",
                          "Visit Wanla monastery on the same trip — it's close and quiet",
                          "Check Yuru Kabgyat festival dates ahead if you want to time it",
                          "Carry warm layers even in summer",
                          "Hire a registered guide for the Alchi or Chilling treks",
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
                          "Rush through in 15 minutes and miss the monastery interior",
                          "Scramble directly onto the moonland formations — they erode easily",
                          "Photograph inside prayer halls without checking first",
                          "Assume you'll find an ATM or fuel in the village",
                          "Attempt the Alchi or Chilling trek without a guide",
                          "Skip layering up — it gets cold fast once the sun dips",
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
                  "Lamayuru",
                  "Ladakh",
                  "Moonland",
                  "Monastery",
                  "Heritage",
                  "Trekking",
                  "Srinagar Leh Highway",
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
                destination="Lamayuru"
              />

              <RelatedPostsGrid currentSlug="lamayuru-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="lamayuru-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
