// src/app/blog/padum-travel-guide/page.tsx
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
  title: "Padum Travel Guide: Zanskar Valley's Historic Capital Town",
  description:
    "The complete guide to Padum, the administrative headquarters of Zanskar Valley — how to reach it via Kargil or the new Leh route, what's in town, day trips to Karsha, Sani, Stongdey and Zangla, and trekking from Padum to Lamayuru, Darcha and Phugtal.",
  keywords:
    "Padum Zanskar, Padum Ladakh, Zanskar Valley capital, Padum travel guide, how to reach Padum, Karsha Monastery, Sani Monastery, Stongdey Monastery, Zangla palace, Padum Darcha trek, Phugtal Monastery trek, Chadar Trek Padum, best time to visit Padum, Padum from Kargil distance, is Padum safe for solo travellers, Padum Zanskar budget trip, top things to do in Padum, Zanskar district Ladakh",
  openGraph: {
    title: "Padum Travel Guide: Zanskar Valley's Historic Capital Town",
    description:
      "Zanskar's small, storied capital — the base town for monasteries, royal ruins, and some of the Himalaya's greatest treks.",
    url: "https://club.kudozz.in/blog/padum-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "High-altitude Ladakh landscape near Zanskar Valley",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Padum Travel Guide: Zanskar Valley's Historic Capital Town",
    description:
      "How to reach Padum, what's in town, day trips to Karsha and Zangla, and treks that start where the road ends.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/padum-travel-guide",
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
          headline: "Padum Travel Guide: Zanskar Valley's Historic Capital Town",
          description:
            "The complete guide to Padum, the administrative headquarters of Zanskar Valley — logistics, what's in town, day trips, and trekking routes.",
          image:
            "https://club.kudozz.in/images/destinations/leh-ladakh/leh-ladakh.jpg",
          datePublished: "2026-06-02",
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
            "@id": "https://club.kudozz.in/blog/padum-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Padum",
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
                name: "Padum Travel Guide",
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
  { id: "introduction", title: "Why Padum?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Padum", level: 2 },
  { id: "kargil-route", title: "→ Via Kargil & Pensi La", level: 3 },
  { id: "leh-route", title: "→ The New Leh Route (NPD)", level: 3 },
  { id: "chadar-walk-in", title: "→ Winter Walk-in (Chadar)", level: 3 },
  { id: "padum-town", title: "In Padum Town Itself", level: 2 },
  { id: "excursions", title: "Day Trips from Padum", level: 2 },
  { id: "karsha-monastery", title: "→ Karsha Monastery", level: 3 },
  { id: "sani-monastery", title: "→ Sani Monastery", level: 3 },
  { id: "stongdey-monastery", title: "→ Stongdey Monastery", level: 3 },
  { id: "zangla", title: "→ Zangla Palace & Nunnery", level: 3 },
  { id: "treks-from-padum", title: "Padum as a Trailhead", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── FAQ data (shared by visible section + JSON-LD) ────────────────────────────
const faqs = [
  {
    q: "How do I reach Padum?",
    a: "The classic route is the roughly 230-km road from Kargil, running through Sankoo and Rangdum before climbing over Pensi La (around 4,400 m) — typically 8–10 hours in a single push, or 2 days with an overnight at Rangdum. The newer Nimmu–Padum–Darcha (NPD) road from Leh is only partially motorable so far and isn't yet a reliable substitute for an ordinary trip.",
  },
  {
    q: "What is the best time to visit Padum?",
    a: "Late July to mid-August is our pick — both entry roads are dependably open, Padum's barley fields are at their greenest, river crossings on the trekking routes are manageable, and you'll likely catch a monastery festival in the surrounding villages. The Kargil–Padum road is typically open from June to October, and closes completely by late October until the following June.",
  },
  {
    q: "Is Padum worth visiting?",
    a: "Padum isn't scenic in the postcard sense — it's a working administrative town rather than a monastery village. But it's the essential base for Zanskar: the only place with a hospital, functioning fuel pumps, and a real market, and the gateway to Karsha, Sani, Stongdey, and Zangla monasteries, plus some of the Himalaya's most respected treks.",
  },
  {
    q: "What is the budget for a trip to Padum?",
    a: "A daily budget in Padum runs roughly ₹1,200 on a tight budget, ₹2,800 mid-range, or ₹5,500 for more comfort, covering accommodation, food, and local taxi hire to Karsha, Sani, and Zangla combined. This excludes the Leh/Kargil-side transport to reach Padum and any multi-day trek costs beyond the per-day guide/pony rate.",
  },
  {
    q: "Can Padum be visited in winter?",
    a: "Not by road — the Kargil–Padum road closes completely by late October and stays shut until June. In winter, the traditional way in or out of lower Zanskar is the Chadar Trek, walking along the frozen Zanskar River between roughly January and February with a licensed guide, though the classic Chadar route runs mainly between Chilling and central Zanskar rather than all the way to Padum itself.",
  },
  {
    q: "What treks start from Padum?",
    a: "Padum is the trailhead for several of the Indian Himalaya's most respected long-distance treks: the 8–10 day Padum–Lamayuru trek through the Zanskar Range, the 7–9 day Padum–Darcha trek over Shingo La into Himachal Pradesh, and the more popular 2–3 day Phugtal Monastery trek to the 12th-century cave monastery built into a cliff above the Lungnak River.",
  },
  {
    q: "Do I need a permit to visit Padum and Zanskar?",
    a: "Indian nationals generally do not need special permits to visit Padum and the core Zanskar Valley, though some routes closer to sensitive border areas can be subject to change. Foreign nationals should confirm current requirements in Kargil or Leh before travelling, since regulations here shift more often than guidebooks keep up with.",
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

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PadumPage() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="High-altitude Zanskar landscape near Padum, Ladakh"
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
                { label: "Padum", href: null },
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

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-14 pt-32 w-full">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Padum", "Zanskar Valley", "Ladakh", "High Altitude", "Trekking"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Padum Travel Guide: Zanskar Valley's Historic Capital Town
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A dusty little bazaar town on the banks of the Lungnak River,
              Padum is no postcard. It's something better — the working heart
              of Zanskar, and the door through which every monastery, palace,
              and high-altitude trek in the valley must be reached.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "18 min read",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Zanskar, Ladakh",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "~2,500 words",
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
                  <h2>Why Padum?</h2>
                  <p>
                    <strong>Padum</strong> will not win any beauty contests
                    against the villages around it. It's a low sprawl of
                    concrete guesthouses, a government hospital, a couple of
                    petrol pumps, and a bazaar strip that empties out by 8 PM —
                    nothing like the postcard monasteries at Karsha or the
                    fairy-tale ruins at Zangla just down the valley. And that
                    is precisely the point. Padum was never meant to be
                    scenic. It was, and still is, a seat of power — the
                    historic capital of the old Zanskari kingdom, and today
                    the administrative headquarters of Zanskar, which was
                    carved out as its own district in 2025 after decades as a
                    remote sub-division of Kargil.
                  </p>
                  <p>
                    At roughly 3,657 metres, sitting where the Doda and Tsarap
                    rivers meet to form the Lungnak (or Zanskar) River, Padum
                    is the only real town for a hundred kilometres in any
                    direction. It has the valley's only hospital, its only ATM
                    that occasionally has cash, its only functioning fuel
                    pumps, and its only real market — which makes it the base
                    every traveller in Zanskar returns to, whether they came
                    for the monasteries, the royal ruins, or the treks that
                    start where the road simply stops.
                  </p>
                  <p>
                    What makes Padum genuinely unusual, even by Ladakh's
                    standards, is its people. Unlike most of Buddhist-majority
                    Ladakh, Padum has a substantial Sunni Muslim population —
                    descendants of traders and settlers who came via Kargil
                    and Baltistan generations ago — living alongside Zanskar's
                    Buddhist majority. A mosque and a gompa stand within a
                    short walk of each other in the same small bazaar, and the
                    town's rhythms — market days, festivals, the call to
                    prayer overlapping with monastery horns — reflect that mix
                    in a way found almost nowhere else in the region.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Padum at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Region", value: "Zanskar, Ladakh" },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "3,657 m (11,998 ft)",
                        },
                        {
                          icon: "👥",
                          label: "Population",
                          value: "~2,500 (town)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Jun – Sep" },
                        {
                          icon: "🏛️",
                          label: "Status",
                          value: "HQ, Zanskar district",
                        },
                        {
                          icon: "🛣️",
                          label: "From Kargil",
                          value: "~230 km, 8–10 hrs",
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

                  <blockquote>
                    Think of Padum not as a destination but as a hub — the way
                    Leh functions for the rest of Ladakh, only smaller,
                    slower, and cut off from the world for most of the year.
                    You come to Padum to resupply, to arrange guides and
                    permits, to sleep in a real bed, and then to head out
                    again — to Karsha, to Zangla, to Phugtal, or onto a trail
                    that won't see a road for another 80 km.
                  </blockquote>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Padum</h2>
                  <p>
                    Zanskar's season is even shorter and more binary than the
                    rest of Ladakh. The road link from Kargil is snowbound for
                    most of the year, which means Padum functions as two
                    completely different places depending on when you arrive
                    — a busy little trading town in summer, and a nearly
                    silent, snowbound outpost reachable only on foot in
                    winter.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "June – early July",
                        emoji: "🌱",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Road just opened",
                        text: "The Kargil–Padum road reopens (usually early-to-mid June, weather dependent). Pensi La is freshly cleared, meltwater swells the rivers, and some higher trek passes may still hold snow. Fewer travellers, low prices.",
                      },
                      {
                        season: "Mid-July – August",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season — our pick",
                        text: "Both approach roads are reliably open, barley fields around Padum turn green-gold, monasteries hold their summer festivals, and trekking routes (Padum–Darcha, Phugtal) are at their driest and most accessible.",
                      },
                      {
                        season: "September",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Quiet and golden",
                        text: "Crowds thin fast. Days stay clear and mild, nights turn cold. Excellent for photography and for treks without the July–August river-crossing surges. The road can close early if snow arrives ahead of schedule.",
                      },
                      {
                        season: "October – May",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cut off — Chadar season",
                        text: "The road closes completely by late October and stays shut until the following June. Padum is reachable only by the frozen-river Chadar walk-in (January–February) or, in a genuine emergency, by helicopter. Not for casual travellers.",
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
                    <strong>Our pick:</strong> Late July to mid-August.
                    Padum's barley fields are at their greenest against the
                    bare brown hills, both entry routes are dependably open,
                    river crossings on the trekking routes are manageable
                    (though still cold), and you'll catch at least one
                    monastery festival in the surrounding villages.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Padum</h2>
                  <p>
                    There is, for most of the year, exactly one way into
                    Padum by vehicle. A second, shorter route from the Leh
                    side is under construction and changing the picture
                    slowly. And in deep winter there's a third option that
                    belongs to serious trekkers only — walking in on the
                    frozen river.
                  </p>

                  <section id="kargil-route">
                    <h3>Via Kargil & Pensi La (the classic route)</h3>
                    <p>
                      The standard approach to Padum is the roughly{" "}
                      <strong>230-km road from Kargil</strong>, running south
                      through Sankoo and the remote hamlet of{" "}
                      <strong>Rangdum</strong> before climbing over{" "}
                      <strong>Pensi La</strong> (around 4,400 m), the
                      gateway pass into Zanskar proper, with the Drang-Drung
                      Glacier — one of Ladakh's largest — visible from the
                      road near the top. From Pensi La the road descends
                      through Zanskar's upper villages before reaching Padum.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> ~230 km from Kargil
                      </li>
                      <li>
                        <strong>Duration:</strong> 8–10 hours in a single
                        push, or a more comfortable 2 days with an overnight
                        at Rangdum
                      </li>
                      <li>
                        <strong>Open:</strong> Roughly June to October,
                        entirely dependent on snow clearance at Pensi La
                      </li>
                      <li>
                        <strong>Road condition:</strong> Now largely tarred
                        and considerably better than a decade ago, but still
                        narrow, exposed in places, and prone to landslide
                        closures after rain
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Break the journey:</strong> Rangdum, roughly
                      the halfway point, has a striking gompa perched above a
                      wide grassy plain and a handful of basic homestays.
                      Splitting the drive here beats an exhausting 10-hour
                      single push and gives you a gentler introduction to the
                      altitude before Pensi La.
                    </div>
                  </section>

                  <section id="leh-route">
                    <h3>The New Leh Route (Nimmu–Padum–Darcha)</h3>
                    <p>
                      For decades, reaching Zanskar from Leh meant a long
                      loop back out via Kargil. That's changing. The{" "}
                      <strong>
                        Nimmu–Padum–Darcha (NPD) road
                      </strong>{" "}
                      — a strategic all-weather link being built in phases by
                      the Border Roads Organisation — will eventually connect
                      Padum directly to Leh via Nimmu and onward to Darcha in
                      Himachal Pradesh, cutting what is currently a multi-day
                      detour down to a much shorter run and, when fully open
                      through its high-altitude sections, potentially
                      extending Padum's accessible season.
                    </p>
                    <p>
                      As of now the NPD road is <strong>only partially
                      motorable</strong> — usable in stretches, still under
                      construction in others, and not yet a reliable
                      substitute for the Kargil route for an ordinary trip.
                      Treat it as a route to watch rather than to plan around;
                      confirm current status locally in Leh or Padum before
                      relying on it, since conditions change season to
                      season.
                    </p>
                  </section>

                  <section id="chadar-walk-in">
                    <h3>Winter Walk-in: The Frozen River Route</h3>
                    <p>
                      When the Kargil road is shut, the only way in or out of
                      lower Zanskar has traditionally been on foot — along the
                      frozen surface of the Zanskar River itself. This is the{" "}
                      <strong>Chadar Trek</strong>, walked between roughly
                      January and February, starting near Chilling on the Leh
                      side and following the ice for several days toward
                      Zanskar's villages. It is a genuine expedition — sub
                      -zero temperatures, unstable ice, and a licensed guide
                      are non-negotiable — and it is as much how Zanskaris
                      themselves have historically travelled in winter as it
                      is a trekking product for visitors.
                    </p>
                    <p>
                      Note that the classic Chadar route runs primarily
                      between Chilling and the villages of central Zanskar
                      (Zangla and around) rather than all the way to Padum
                      itself, but it remains the emblematic image of Zanskar's
                      isolation — and the reason Padum's midsummer bazaar
                      feels, by contrast, so relatively lively.
                    </p>
                  </section>
                </section>

                {/* ── In Padum Town ─────────────────────────────────────── */}
                <section id="padum-town">
                  <h2>In Padum Town Itself</h2>
                  <p>
                    Padum rewards a slow half-day of wandering more than a
                    checklist of sights. It's a working town, not a museum
                    piece, and its charm is in the texture — Ladakhi and
                    Baltistani-influenced faces in the bazaar, trucks being
                    loaded with sacks of barley, schoolkids in the main
                    square, and prayer flags snapping over rooftops that are
                    half concrete, half traditional mud-brick.
                  </p>
                  <ul>
                    <li>
                      <strong>The bazaar:</strong> Padum's single commercial
                      street is where the whole valley shops. General stores
                      sell everything from trekking-gear odds and ends to
                      instant noodles and diesel-can spares; a few small
                      restaurants serve thukpa and momos to truck drivers and
                      trekkers alike. It's small — you can walk its length in
                      ten minutes — but it's genuinely the commercial centre
                      of an area larger than some Indian states.
                    </li>
                    <li>
                      <strong>Padum Fort ruins (Pipiting):</strong> On the
                      rocky outcrop above town stand the crumbling remains of
                      an old fort and monastery complex associated with
                      Zanskar's royal past, sometimes referred to locally as
                      Pipiting. There's little formal signage and the ruins
                      are modest compared to Zangla's palace, but the short
                      climb gives the best overview of Padum's setting — the
                      confluence of rivers, the wide gravel plain, and the
                      mountains ringing it on every side.
                    </li>
                    <li>
                      <strong>Padum Jama Masjid:</strong> A functioning mosque
                      near the bazaar, serving the town's sizeable Muslim
                      community — a visible, everyday reminder that Zanskar's
                      religious history is more layered than the
                      monastery-postcard image suggests.
                    </li>
                    <li>
                      <strong>Padum Gompa & prayer wheels:</strong> A modest
                      Buddhist temple within the town itself, used for local
                      worship rather than tourism — worth a respectful look if
                      you're passing, though the valley's major monasteries
                      lie outside town (see excursions below).
                    </li>
                    <li>
                      <strong>The Lungnak/Doda riverbank:</strong> Walk out
                      past the last guesthouses to where the Doda and Tsarap
                      rivers meet, and the sense of Padum as an island of
                      settlement in a vast, empty valley becomes obvious. A
                      good spot for an evening walk once the day's heat (such
                      as it is, at 3,657 m) has faded.
                    </li>
                  </ul>
                </section>

                {/* ── Excursions ────────────────────────────────────────── */}
                <section id="excursions">
                  <h2>Day Trips & Excursions from Padum</h2>
                  <p>
                    This is where Padum earns its keep as a base. Within an
                    hour or two's drive are some of Zanskar's most important
                    monasteries and its old royal seat — all doable as day
                    trips back to a bed in town.
                  </p>

                  <section id="karsha-monastery">
                    <h3>Karsha Monastery</h3>
                    <div className="relative w-full rounded-xl my-6 h-64 overflow-hidden shadow-md">
                      <Image
                        src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                        alt="Himalayan monastery landscape typical of Zanskar Valley"
                        fill
                        sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <p>
                      <strong>Karsha</strong> is Zanskar's largest monastery by
                      a wide margin — a whitewashed cascade of buildings
                      climbing a steep hillside above Karsha village, roughly
                      10 km from Padum and visible from town on a clear day.
                      Belonging to the Gelugpa (Yellow Hat) order, it houses
                      several hundred monks in season and a set of assembly
                      halls with well-preserved murals. The short but steep
                      walk up through the village to the monastery is worth
                      the effort for the views back across the Padum plain
                      alone.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Padum:</strong> ~10 km (20–30
                        min by road)
                      </li>
                      <li>
                        <strong>Best time:</strong> Morning, to catch prayers
                        and softer light on the whitewashed walls
                      </li>
                    </ul>
                  </section>

                  <section id="sani-monastery">
                    <h3>Sani Monastery</h3>
                    <p>
                      A short drive from Padum, <strong>Sani</strong> is one
                      of the oldest religious sites in Zanskar and unusual for
                      standing on flat ground rather than a dramatic cliff —
                      most Ladakhi monasteries do the opposite. Its centrepiece
                      is the Kanika Chaitya, a stupa locally attributed to the
                      Kushan-era king Kanishka, which if the attribution holds
                      would make it one of the oldest Buddhist structures in
                      the entire Himalaya. The complex also has a small but
                      atmospheric grove of ancient willow trees and a set of
                      chortens that give it a very different feel from
                      Karsha's dramatic verticality.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Padum:</strong> ~6 km
                      </li>
                      <li>
                        <strong>Highlight:</strong> Kanika Chaitya stupa and
                        the Sani Nasjal summer festival (masked cham dances),
                        held annually
                      </li>
                    </ul>
                  </section>

                  <section id="stongdey-monastery">
                    <h3>Stongdey Monastery</h3>
                    <p>
                      Zanskar's second-largest monastery, <strong>
                        Stongdey
                      </strong>{" "}
                      sits on a high spur roughly 18 km from Padum, its
                      buildings stacked up the hillside with sweeping views
                      down the length of the valley. It receives a fraction
                      of Karsha's visitors despite a comparably rich set of
                      halls and murals, which makes it one of the better
                      choices for travellers who want the monastery
                      experience without the crowds — such as they are, this
                      far from anywhere.
                    </p>
                  </section>

                  <section id="zangla">
                    <h3>Zangla — Royal Palace & Nunnery</h3>
                    <p>
                      Roughly 35 km down-valley from Padum, <strong>
                        Zangla
                      </strong>{" "}
                      was the seat of one branch of Zanskar's royal family
                      after the old kingdom split between two lines
                      centuries ago (the other seat was at Padum itself). The
                      mud-brick palace, now partly ruined, is famous in
                      scholarly circles as the place where the Hungarian
                      orientalist Alexander Csoma de Kőrös lived and studied
                      Tibetan in the 1820s, compiling the first
                      Tibetan-English dictionary. Above the village, the{" "}
                      <strong>Zangla nunnery (Dorjidzong)</strong> clings to a
                      cliff face and remains an active community of Buddhist
                      nuns — a striking, lesser-visited counterpart to
                      Zanskar's monk-run monasteries.
                    </p>
                    <p>
                      Zangla is also the usual endpoint (or starting point,
                      depending on direction) for the winter Chadar walk-in,
                      which makes it a place where Zanskar's summer-road
                      identity and its winter-ice identity visibly overlap.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Combine the trip:</strong> Karsha, Sani, and
                      Stongdey can realistically be done in a single long day
                      from Padum with a hired taxi. Zangla is far enough that
                      it's worth its own half-day, ideally paired with a
                      simple homestay lunch in the village.
                    </div>
                  </section>
                </section>

                {/* ── Treks from Padum ──────────────────────────────────── */}
                <section id="treks-from-padum">
                  <h2>Padum as a Trailhead</h2>
                  <p>
                    More than its monasteries, more than its bazaar, Padum's
                    real significance for most visitors is as the point where
                    the road ends and the walking begins. Several of the
                    Indian Himalaya's most respected treks either start,
                    finish, or resupply here.
                  </p>

                  <div className="space-y-4 my-4">
                    {[
                      {
                        name: "Padum–Lamayuru Trek",
                        detail:
                          "One of Ladakh's classic long-distance treks, crossing remote passes and villages through the Zanskar Range to link up with Lamayuru monastery on the Srinagar–Leh highway. Typically 8–10 days, remote and demanding, with limited resupply — most parties hire local guides and pack animals from Padum.",
                        badge: "8–10 Days",
                        badgeColor: "bg-forest-100 text-forest-700",
                      },
                      {
                        name: "Padum–Darcha Trek",
                        detail:
                          "The historic trade route south over Shingo La (around 5,090 m) into Lahaul, Himachal Pradesh, ending at Darcha on the Manali–Leh highway. A high, classic crossing between two very different Himalayan cultures, usually walked in 7–9 days.",
                        badge: "Classic Crossing",
                        badgeColor: "bg-amber-100 text-amber-700",
                      },
                      {
                        name: "Phugtal Monastery Trek",
                        detail:
                          "The most popular short trek from Padum — a 2–3 day round trip (via jeep to Purne, then on foot) to the extraordinary 12th-century cave monastery of Phugtal, built directly into a cliff face above the Lungnak River. Padum is the essential resupply and guide-hiring point before setting out.",
                        badge: "Most Popular",
                        badgeColor: "bg-sky-100 text-sky-700",
                      },
                    ].map((t) => (
                      <div
                        key={t.name}
                        className="flex gap-4 bg-white border border-stone-200 rounded-xl p-5 hover:border-forest-200 hover:shadow-sm transition-all"
                      >
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4
                              className="font-bold text-stone-900"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {t.name}
                            </h4>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${t.badgeColor}`}
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {t.badge}
                            </span>
                          </div>
                          <p
                            className="text-sm text-stone-600 leading-relaxed m-0"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {t.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p>
                    Padum has a small but genuine trekking-support
                    infrastructure — guides, pack-pony operators, and a couple
                    of gear-rental shops in the bazaar — but it is nowhere
                    near as deep a bench as Leh's. Arrange guides and animals
                    a day or two ahead rather than assuming same-day
                    availability, especially in peak August.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Padum</h2>
                  <p>
                    Accommodation in Padum is simple by design — this is a
                    logistics town, not a resort destination. Expect clean,
                    basic rooms rather than boutique comforts, and book ahead
                    in July–August when trekking groups fill up the handful
                    of decent guesthouses fast.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Family-run guesthouses in the bazaar",
                          "Dormitory rooms attached to trekking outfitters",
                          "Basic homestays in Karsha or Sani village",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,200–₹2,800/night",
                        picks: [
                          "Small private hotels near the bazaar",
                          "Guesthouses with attached bathrooms & solar hot water",
                          "Tourist bungalow-style rooms (seasonal)",
                        ],
                      },
                      {
                        tier: "Camping",
                        icon: "⛺",
                        range: "Self-arranged",
                        picks: [
                          "Riverside camping near the Doda-Tsarap confluence",
                          "Trek-support camps organised via local operators",
                          "Carry your own gear — rental options are limited",
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
                  <h2>What to Eat in Padum</h2>
                  <p>
                    Don't expect variety — Padum's food scene exists to
                    fuel travellers and locals through long days at altitude,
                    not to impress. That said, what's on offer is honest,
                    warming, and, after a day on the road from Kargil, deeply
                    welcome.
                  </p>
                  <ul>
                    <li>
                      <strong>Skyu & Thukpa:</strong> The valley's staples —
                      thick hand-pinched dough in a vegetable or meat broth
                      (skyu), or Tibetan-style noodle soup (thukpa). Every
                      small eatery in the bazaar does a version of each.
                    </li>
                    <li>
                      <strong>Momos:</strong> Steamed or fried dumplings,
                      usually vegetable or potato-filled, sold hot at
                      bazaar-front stalls.
                    </li>
                    <li>
                      <strong>Tsampa & butter tea:</strong> Roasted barley
                      flour mixed with salted, yak-butter tea — the
                      traditional Zanskari staple, and the fastest way to
                      warm up after a cold morning excursion.
                    </li>
                    <li>
                      <strong>Chang:</strong> A mildly fermented local barley
                      beer, offered informally in villages around Padum
                      (Karsha, Zangla) rather than sold commercially — accept
                      it graciously if offered as hospitality.
                    </li>
                    <li>
                      <strong>Dhaba-style dal-rice:</strong> The reliable
                      fallback at most of Padum's small restaurants,
                      especially useful if you're trek-bound the next day and
                      want something simple.
                    </li>
                    <li>
                      <strong>Bring your own snacks:</strong> Beyond
                      basic biscuits and instant noodles, the bazaar's general
                      stores stock little in the way of trekking food — carry
                      energy bars, dry fruit, and electrolyte mixes from Leh
                      or Kargil before arriving.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for Padum</h2>
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
                          ["Accommodation/night", "₹500", "₹1,800", "₹2,800"],
                          ["Food/day", "₹350", "₹700", "₹1,200"],
                          [
                            "Local taxi (Karsha/Sani/Zangla combined)",
                            "₹1,500",
                            "₹2,500",
                            "₹4,000",
                          ],
                          [
                            "Kargil–Padum shared taxi/bus (one-way)",
                            "₹600",
                            "₹1,200",
                            "₹5,000 (private)",
                          ],
                          [
                            "Trek guide + pack pony (per day)",
                            "₹1,800",
                            "₹2,500",
                            "₹3,500",
                          ],
                          [
                            "Daily total in Padum (approx)",
                            "₹1,200",
                            "₹2,800",
                            "₹5,500",
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
                    * Excludes the Leh/Kargil-side transport to reach the
                    starting point, and any multi-day trek costs beyond the
                    per-day guide/pony rate above.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Padum</h2>
                  <ul>
                    <li>
                      <strong>Connectivity is minimal:</strong> Mobile
                      coverage in Padum is limited to BSNL and occasionally
                      Airtel, and it's patchy even in town — expect none at
                      all once you're out at Karsha, Zangla, or on any trek.
                      Tell people your plans before you leave phone range.
                    </li>
                    <li>
                      <strong>Cash before you arrive:</strong> Padum has a
                      single ATM (typically SBI) that is unreliable and
                      frequently out of cash or out of service entirely.
                      Withdraw everything you'll need in Kargil or Leh before
                      setting out — there is no backup plan in Padum itself.
                    </li>
                    <li>
                      <strong>Fuel up religiously:</strong> Padum has the only
                      dependable fuel pumps in Zanskar. Fill up on arrival and
                      again before any onward drive toward Kargil, Rangdum, or
                      the villages further down-valley — there is nothing
                      reliable in between.
                    </li>
                    <li>
                      <strong>Check road status before committing:</strong>{" "}
                      Pensi La and the road through Rangdum can close with
                      little notice after snow or landslide, even in the
                      official "open" season. Confirm current status in
                      Kargil before departing, and build a spare day into your
                      itinerary.
                    </li>
                    <li>
                      <strong>Permits and paperwork:</strong> Indian
                      nationals generally do not need special permits to
                      visit Padum and the core Zanskar Valley, but some
                      routes closer to sensitive border areas can be subject
                      to change, and foreign nationals should confirm current
                      requirements in Kargil or Leh before travelling —
                      regulations here shift more often than the guidebooks
                      keep up with.
                    </li>
                    <li>
                      <strong>Book guides and ponies ahead in season:</strong>{" "}
                      Padum's trekking-support capacity is real but limited.
                      In peak July–August, same-day arrangements for
                      Phugtal or longer treks can fall through — contact a
                      local operator a few days in advance where possible.
                    </li>
                    <li>
                      <strong>Pack for genuine cold, even in July:</strong>{" "}
                      Padum sits above 3,650 m and nights stay cool
                      year-round; excursions to Zangla or Stongdey can turn
                      windy and cold fast. Layers, a warm sleeping bag if
                      trekking, and sun protection are all essential at this
                      altitude.
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
                          "Carry all the cash you'll need from Kargil or Leh",
                          "Fill your fuel tank fully on arrival in Padum",
                          "Break the Kargil–Padum drive at Rangdum",
                          "Arrange trek guides/ponies a few days ahead in season",
                          "Visit the mosque and gompa respectfully — both are active",
                          "Build a spare day into your plans for road closures",
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
                          "Assume Padum's one ATM will have cash",
                          "Rely on mobile signal once you leave town",
                          "Skip fuelling up before heading further down-valley",
                          "Attempt the winter walk-in without a licensed guide",
                          "Expect Leh-level trekking infrastructure or gear rental",
                          "Push through Pensi La in worsening weather",
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
                  "Padum",
                  "Zanskar Valley",
                  "Ladakh",
                  "High Altitude",
                  "Monasteries",
                  "Trekking",
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
                destination="Padum"
              />

              <RelatedPostsGrid currentSlug="padum-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="padum-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
