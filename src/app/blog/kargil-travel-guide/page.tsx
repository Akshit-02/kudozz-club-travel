// src/app/blog/kargil-travel-guide/page.tsx
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
  title: "Kargil Travel Guide: Gateway to Zanskar & the Srinagar-Leh Highway",
  description:
    "The complete Kargil travel guide — how to reach Kargil on the Srinagar-Leh highway, the Mulbekh rock-cut Buddha, Kargil War Memorial at Dras, Balti culture, Suru Valley, the road to Zanskar, where to stay, what to eat, and essential tips.",
  keywords:
    "Kargil travel guide, Kargil Ladakh, Srinagar Leh highway, Kargil War Memorial, Dras war memorial, Mulbekh Chamba statue, Suru Valley, Zanskar road, Balti culture Ladakh, Kargil to Leh",
  openGraph: {
    title: "Kargil Travel Guide: Gateway to Zanskar & the Srinagar-Leh Highway",
    description:
      "A district town of orchards, Balti culture, and quiet history on the road between Kashmir and Ladakh — the complete guide to Kargil.",
    url: "https://club.kudozz.in/blog/kargil-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/leh-ladakh/leh-ladakh.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain landscape on the Srinagar-Leh highway near Kargil, Ladakh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kargil Travel Guide: Gateway to Zanskar",
    description:
      "The Srinagar-Leh highway's halfway town — Balti culture, the Mulbekh Buddha, and the road to Zanskar. The complete Kargil guide.",
    images: ["/images/destinations/leh-ladakh/leh-ladakh.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kargil-travel-guide",
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
          headline:
            "Kargil Travel Guide: Gateway to Zanskar & the Srinagar-Leh Highway",
          description:
            "The complete Kargil travel guide — routes, the Kargil War Memorial, Mulbekh, Balti culture, Suru Valley, the road to Zanskar, and practical travel tips.",
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
            "@id": "https://club.kudozz.in/blog/kargil-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Kargil",
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
              {
                "@type": "ListItem",
                position: 4,
                name: "Kargil",
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
  { id: "introduction", title: "Why Kargil?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kargil", level: 2 },
  { id: "srinagar-route", title: "→ Via Srinagar (NH1)", level: 3 },
  { id: "leh-route", title: "→ Via Leh", level: 3 },
  { id: "zanskar-route", title: "→ Kargil–Zanskar Road", level: 3 },
  { id: "war-memorial", title: "Kargil War Memorial, Dras", level: 2 },
  { id: "heritage-enroute", title: "Mulbekh & Shargol Monastery", level: 2 },
  { id: "kargil-town", title: "Kargil Town & Bazaar", level: 2 },
  { id: "suru-valley", title: "Suru Valley", level: 2 },
  { id: "gateway-zanskar", title: "Gateway to Zanskar Valley", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KargilPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[72vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
              alt="Mountain valley along the Srinagar-Leh highway near Kargil, Ladakh"
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
                { label: "Kargil", href: null },
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
                "Kargil",
                "Ladakh",
                "Srinagar-Leh Highway",
                "Balti Culture",
                "Zanskar",
                "J&K/Ladakh",
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
              Kargil Travel Guide: Gateway to Zanskar & the Srinagar-Leh
              Highway
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Halfway between Srinagar and Leh, in a valley of apricot
              orchards where Kashmiri, Balti, and Ladakhi worlds meet — Kargil
              is the town most road-trippers drive straight through. It
              deserves a night, and a closer look.
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
                  text: "Kargil, Ladakh, India",
                },
                {
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,800 words",
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
                  <h2>Why Kargil?</h2>
                  <p>
                    Most people who pass through <strong>Kargil</strong> are
                    on their way to somewhere else. It sits almost exactly
                    halfway along the Srinagar–Leh highway, 204 km from each,
                    which means it exists in most itineraries as an overnight
                    stop — a place to sleep before the next day's drive over
                    Namika La and Fotu La towards Lamayuru. That's a shame,
                    because Kargil is one of the few places in Ladakh where
                    you can feel two distinct worlds meet.
                  </p>
                  <p>
                    Leh and the eastern valleys are Buddhist, Tibetan in
                    influence, dotted with gompas and prayer flags. Kargil
                    district is different: the majority here are{" "}
                    <strong>Balti Muslims</strong>, Shia in faith, speaking a
                    dialect close to Balti (itself close to Ladakhi and
                    ultimately Tibetan) but culturally oriented as much
                    towards Baltistan and Kashmir as towards Leh. The bazaar
                    smells of apricot and mutton rather than incense and
                    juniper. Domed mosques and imambaras stand where you might
                    expect chortens. It is Ladakh, unmistakably — the same
                    high desert light, the same Suru and Indus-fed rivers, the
                    same jagged brown mountains — but told in a different
                    accent.
                  </p>
                  <p>
                    Kargil is also a town with a heavy, recent history. In the
                    summer of 1999, the hills above nearby Dras and Kargil
                    were the front line of the{" "}
                    <strong>Kargil War</strong>, fought at altitudes above
                    5,000 metres in conditions that remain a byword for
                    military hardship in India. The scars are visible if you
                    know where to look, and the memorial at Dras is one of the
                    most moving stops on the entire highway.
                  </p>
                  <p>
                    And practically speaking, Kargil is the last real town
                    before you can turn south towards the <strong>Suru
                    Valley</strong> and the remote, wildly beautiful{" "}
                    <strong>Zanskar Valley</strong> — a detour that very few
                    highway travellers make, and one of the most rewarding in
                    all of Ladakh.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Kargil at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Region",
                          value: "Kargil district, UT of Ladakh",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "2,676 m (8,780 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "May – Sep" },
                        {
                          icon: "🛣️",
                          label: "On Route",
                          value: "Srinagar–Leh Highway (NH1)",
                        },
                        {
                          icon: "🕌",
                          label: "Culture",
                          value: "Balti Muslim (Shia), Ladakhi Buddhist",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹4,000",
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
                  <h2>Best Time to Visit Kargil</h2>
                  <p>
                    Kargil's season tracks the Srinagar–Leh highway itself.
                    The town sits at a lower altitude than Leh, so it's
                    slightly milder, but it's still a high-desert climate with
                    a short, sharp summer and a long, brutally cold winter.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "April – May",
                        emoji: "🌱",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Highway reopens",
                        text: "Srinagar–Leh road reopens after winter closure (Zoji La is the last stretch to clear, usually late April/early May). Apricot and apple trees blossom around Kargil town. Cold at night, pleasant by day. Fewer travellers.",
                      },
                      {
                        season: "June – July",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak season",
                        text: "Warm, stable weather — daytime highs of 25–30°C, nights around 10°C. The Suru and Zanskar roads are fully open. Busiest period on the highway, mostly road-trippers headed to or from Leh.",
                      },
                      {
                        season: "August – September",
                        emoji: "🍑",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Apricot harvest — our pick",
                        text: "Orchards around Kargil and along the Wakha valley turn heavy with apricots; drying racks appear on rooftops across every village. Clear skies, comfortable days, thinning crowds by mid-September. The best month for the Suru–Zanskar detour.",
                      },
                      {
                        season: "October – April",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Closed to outsiders",
                        text: "Snow closes Zoji La and the Zanskar road; Kargil becomes accessible only via the Leh side until that too gets difficult. Winter temperatures fall to -20°C or lower. Not a season for casual travel.",
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
                    <strong>Our pick:</strong> Late August. The apricot
                    harvest is in full swing, the Zanskar road is at its most
                    reliable, and the punishing midsummer heat of the Suru
                    Valley's lower stretches has eased. If Zanskar isn't on
                    your list, June–July gives you the widest window with
                    every route open.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kargil</h2>
                  <p>
                    Kargil has no airport and no railway line — every visitor
                    arrives by road, which is fitting for a town whose whole
                    identity is bound up with the highway running through it.
                  </p>

                  <section id="srinagar-route">
                    <h3>Via Srinagar (NH1) — the Classic Approach</h3>
                    <p>
                      The <strong>Srinagar–Kargil road</strong> (204 km) is
                      the western half of the historic Srinagar–Leh highway,
                      and for most travellers it's the more scenic and
                      culturally rich of the two approaches. It climbs out of
                      the Kashmir Valley through Sonamarg, crosses{" "}
                      <strong>Zoji La</strong> (3,528 m) — the dramatic,
                      often fog-bound pass that is the real gateway from
                      Kashmir into Ladakh — then descends through Dras into
                      the Suru valley towards Kargil.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> 204 km from Srinagar
                      </li>
                      <li>
                        <strong>Duration:</strong> 7–8 hours by road (best
                        done as a full day, not rushed)
                      </li>
                      <li>
                        <strong>Open:</strong> Roughly May to November,
                        weather dependent — Zoji La is the first section to
                        close in early winter
                      </li>
                      <li>
                        <strong>Road condition:</strong> Good tarmac for most
                        of the route; the Zoji La stretch itself is narrow,
                        unpaved in patches, and can back up with truck
                        traffic for hours
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Note:</strong> A tunnel under Zoji La has been
                      under construction for years to keep the route open
                      year-round; until it's fully operational, treat the pass
                      as seasonal and check current status before planning a
                      shoulder-season trip.
                    </div>
                  </section>

                  <section id="leh-route">
                    <h3>Via Leh</h3>
                    <p>
                      Coming from the east, Kargil is 204 km from Leh via
                      Lamayuru, Fotu La (13,479 ft) and Namika La (12,198
                      ft) — a spectacular stretch of the highway through
                      Ladakh's famous "moonland" badlands around Lamayuru.
                      This is the direction most Leh-based travellers use to
                      reach Kargil, either as a day trip to Mulbekh and back,
                      or as the first leg of a longer loop towards Kashmir or
                      Zanskar.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> 204 km from Leh
                      </li>
                      <li>
                        <strong>Duration:</strong> 6–7 hours
                      </li>
                      <li>
                        <strong>Highlights en route:</strong> Lamayuru
                        Monastery and moonland, Namika La, Mulbekh's rock-cut
                        Buddha
                      </li>
                    </ul>
                  </section>

                  <section id="zanskar-route">
                    <h3>Kargil–Zanskar Road</h3>
                    <p>
                      From Kargil, a single road runs 230 km south through the
                      Suru Valley, over the Pensi La (4,400 m), and down into
                      the Zanskar Valley to Padum. It's the only vehicle
                      access to Zanskar for most of the year (a newer,
                      dramatic road from Manali via Shinkun La is open only in
                      peak summer). This road is covered in more detail in
                      the <strong>Suru Valley</strong> and{" "}
                      <strong>Gateway to Zanskar</strong> sections below.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance:</strong> 230 km, Kargil to Padum
                      </li>
                      <li>
                        <strong>Duration:</strong> 8–10 hours, best split over
                        two days
                      </li>
                      <li>
                        <strong>Open:</strong> June to early October only
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── War Memorial ──────────────────────────────────────── */}
                <section id="war-memorial">
                  <h2>Kargil War Memorial, Dras</h2>
                  <div className="relative w-full rounded-xl my-6 h-64 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/leh-ladakh/leh-ladakh.jpg"
                      alt="Mountains above Dras, site of the 1999 Kargil War, near Kargil"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p>
                    About 60 km before Kargil, on the Srinagar side, the road
                    passes through <strong>Dras</strong> — often cited as the
                    second-coldest inhabited place on earth, where winter
                    temperatures have dropped below -40°C. In the summer of
                    1999, the ridgelines visible from the highway here were
                    the site of the Kargil War, fought between India and
                    Pakistan at altitudes most armies would consider
                    unsurvivable.
                  </p>
                  <p>
                    The <strong>Kargil War Memorial</strong> (also known as
                    the Vijayanta War Memorial), maintained by the Indian
                    Army, stands at Dras with the peaks of Tololing and
                    Tiger Hill as its backdrop — the very ground the fighting
                    was fought over. A wall inscribed with the names of the
                    fallen, a small but powerful museum of recovered
                    equipment and photographs, and an eternal flame make it
                    one of the most affecting stops on the entire highway.
                    Most travellers pause here for 30–45 minutes; give it
                    longer if you can.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Planning ahead:</strong> Dras and the memorial
                    deserve their own dedicated stop rather than a rushed
                    photo op on the way through — we've covered the memorial,
                    Dras town, and the surrounding history in a separate,
                    focused guide. If you're building a Srinagar–Kargil–Leh
                    itinerary, budget at least an hour here.
                  </div>
                </section>

                {/* ── Mulbekh & Shargol ─────────────────────────────────── */}
                <section id="heritage-enroute">
                  <h2>Mulbekh & Shargol Monastery</h2>
                  <p>
                    Roughly 45 km east of Kargil, on the road towards Leh,
                    the highway passes through <strong>Mulbekh</strong> — a
                    small village that marks, almost precisely, the cultural
                    boundary between Muslim Kargil and Buddhist Ladakh. It's
                    an easy, worthwhile stop for anyone driving between the
                    two.
                  </p>
                  <p>
                    The village's landmark is the{" "}
                    <strong>Mulbekh Chamba statue</strong> — a roughly
                    9-metre-tall figure of Maitreya (the future Buddha) carved
                    directly into a freestanding rock face beside the
                    highway, believed to date to the 7th or 8th century,
                    making it one of the oldest Buddhist rock carvings in the
                    region. Two small monasteries, one Gelugpa and one
                    Drikung Kagyu, are built into the same rock outcrop, and
                    a short flight of steps takes you right up to the statue's
                    base.
                  </p>
                  <p>
                    A little further along, near the village of Shargol, the{" "}
                    <strong>Shargol Monastery</strong> is worth a detour if
                    you have the time — a cluster of whitewashed cave shrines
                    built into a sheer cliff face, visible from the road but
                    reached by a steep climb. It sees a fraction of Mulbekh's
                    footfall and rewards travellers willing to make the
                    short, steep effort.
                  </p>
                  <ul>
                    <li>
                      <strong>Distance from Kargil:</strong> Mulbekh ~45 km,
                      Shargol ~40 km (both on the Kargil–Leh road)
                    </li>
                    <li>
                      <strong>Time needed:</strong> 30–45 minutes at Mulbekh;
                      1–1.5 hours if you climb up to Shargol
                    </li>
                    <li>
                      <strong>Best done:</strong> As a stop on the
                      Kargil–Leh drive, either direction
                    </li>
                  </ul>
                </section>

                {/* ── Kargil Town ───────────────────────────────────────── */}
                <section id="kargil-town">
                  <h2>Kargil Town & Bazaar</h2>
                  <p>
                    Kargil town itself is unglamorous and functional — a
                    district headquarters strung along the Suru River with a
                    busy main bazaar, government offices, and a steady flow
                    of highway traffic. It won't compete with Leh for
                    postcard appeal, but spend an evening walking it and a
                    different Ladakh reveals itself.
                  </p>
                  <p>
                    The <strong>main bazaar</strong> is where Kargil's mixed
                    identity is most visible: bakeries selling fresh
                    Kashmiri-style bread alongside Balti flatbreads, fruit
                    stalls piled with apricots and mulberries in season,
                    tailors, hardware stores supplying the whole district, and
                    a scattering of small mosques and an imambara whose
                    architecture owes as much to Kashmir and Baltistan as to
                    Tibet. Trucks bound for Zanskar, Leh, and Srinagar all
                    pass through here, making the bazaar a genuine crossroads
                    rather than a tourist strip.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-800 mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕌</span> A Different Ladakh
                    </h4>
                    <p
                      className="text-sm text-stone-700 leading-relaxed m-0"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Kargil district is majority Shia Muslim, with a
                      distinct Balti heritage tied historically to
                      Baltistan (now in Pakistan-administered territory).
                      Ashura processions during Muharram are a significant
                      local event, and the call to prayer, not monastery
                      horns, marks the rhythm of the day. It's a useful
                      reminder that "Ladakh" is not a single culture — it's a
                      meeting point of several, and Kargil is where that
                      meeting is most visible.
                    </p>
                  </div>
                  <p>
                    There isn't a great deal of formal "sightseeing" in town
                    itself, and that's part of the appeal — Kargil rewards
                    slow travel more than a checklist. A walk along the river,
                    a wander through the bazaar at dusk when the shops light
                    up, and a proper Balti meal are the best way to spend an
                    evening here before continuing on the highway or turning
                    south towards Suru.
                  </p>
                </section>

                {/* ── Suru Valley ───────────────────────────────────────── */}
                <section id="suru-valley">
                  <h2>Suru Valley</h2>
                  <p>
                    South of Kargil town, the road follows the{" "}
                    <strong>Suru River</strong> upstream into one of
                    Ladakh's greenest and least-visited valleys. Willow and
                    poplar line the fields around villages like Sankoo and
                    Panikhar, and apricot orchards give way, as you climb,
                    to bare highland pasture and glacier views.
                  </p>
                  <p>
                    The valley's showpiece is the <strong>Nun Kun
                    massif</strong> — twin peaks of 7,135 m (Nun) and 7,077 m
                    (Kun), the highest mountains in this part of the western
                    Himalaya, visible in startling close-up from the road
                    near Parkachik. Few places in Ladakh let you see a
                    7,000-metre peak from a paved highway; this is one of
                    them, and it's a genuine highlight of the drive that most
                    highway-only travellers never see.
                  </p>
                  <ul>
                    <li>
                      <strong>Key villages:</strong> Sankoo, Panikhar,
                      Parkachik, Rangdum
                    </li>
                    <li>
                      <strong>Distance from Kargil:</strong> Sankoo ~40 km,
                      Parkachik ~100 km, Rangdum ~130 km
                    </li>
                    <li>
                      <strong>Highlight:</strong> Nun Kun massif viewpoint
                      near Parkachik
                    </li>
                    <li>
                      <strong>Stay:</strong> Basic homestays in Sankoo and
                      Panikhar; a handful of camps near Rangdum in season
                    </li>
                  </ul>
                  <p>
                    Suru is best treated as a full day trip from Kargil (to
                    Parkachik and back) or, better, as the first leg of the
                    longer journey towards Zanskar — the road doesn't dead-end
                    here, it keeps climbing.
                  </p>
                </section>

                {/* ── Gateway to Zanskar ────────────────────────────────── */}
                <section id="gateway-zanskar">
                  <h2>Gateway to Zanskar Valley</h2>
                  <p>
                    Continue past the Suru Valley's upper reaches and the
                    road climbs to the <strong>Pensi La</strong> (4,400 m),
                    crossing beneath the Drang-Drung Glacier — one of the
                    largest and most accessible glaciers in Ladakh, visible
                    directly from the roadside. Beyond the pass, the
                    landscape changes again: this is <strong>Zanskar</strong>,
                    a high, isolated valley cut off from the rest of Ladakh
                    for eight or nine months of the year by snow, with its
                    own dialect, its own royal lineage, and monasteries
                    (Karsha, Sani, and the extraordinary cliffside Phugtal
                    among them) found almost nowhere else.
                  </p>
                  <p>
                    Kargil is, for most travellers, the only practical
                    entry point to Zanskar — the alternative approach from
                    Manali via Shinkun La is longer, higher, and open for a
                    shorter window. That makes Kargil more than a highway
                    stopover: it's the last town with reliable fuel, mechanics,
                    and provisions before a genuinely remote onward journey.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Worth knowing:</strong> Zanskar's monasteries,
                    the Padum bazaar, and the legendary winter Chadar Trek
                    across the frozen Zanskar River each deserve a dedicated
                    guide of their own — treat this section as the doorway,
                    not the destination, and plan a separate multi-day trip
                    if Zanskar draws you in.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kargil</h2>
                  <p>
                    Kargil's accommodation is functional rather than
                    luxurious — most travellers are here for one night on
                    their way through, and the town's hotels are built
                    accordingly. Book ahead in peak season (June–August) when
                    highway traffic between Srinagar and Leh is heaviest.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Hotel Siachen (bazaar area)",
                          "Hotel Karwan-Sarai",
                          "Simple guesthouses near the bus stand",
                          "Homestays in Suru Valley villages",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,200–₹3,000/night",
                        picks: [
                          "Hotel Greater Kailash",
                          "Hotel Zojila Residency",
                          "Hotel D'Zojila Continental",
                          "JKTDC Tourist Bungalow",
                        ],
                      },
                      {
                        tier: "Comfort",
                        icon: "✨",
                        range: "₹3,000–₹6,000/night",
                        picks: [
                          "Better riverside properties near town",
                          "Select business-traveller hotels",
                          "Advance-booked highway rest stops",
                          "(Kargil has no true luxury tier — plan accordingly)",
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
                  <h2>What to Eat in Kargil</h2>
                  <p>
                    Balti cuisine is Kargil's real culinary signature —
                    heartier and more bread-focused than the noodle-and-broth
                    dishes you'll find further east in Leh, shaped by the
                    valley's Kashmiri and Central Asian trade links as much
                    as its Tibetan roots.
                  </p>
                  <ul>
                    <li>
                      <strong>Kisir:</strong> A dense, slightly sour buckwheat
                      flatbread, traditionally eaten with butter or apricot
                      oil — a Balti staple rarely found outside this region.
                    </li>
                    <li>
                      <strong>Balay:</strong> Small hand-rolled wheat dumplings
                      simmered in a light broth, often with dried vegetables
                      — simple, warming, and everywhere in Kargil homes.
                    </li>
                    <li>
                      <strong>Chutagi:</strong> Bow-tie-shaped pasta cooked in
                      a thick vegetable and lentil broth, closely related to
                      dishes found across Ladakh but made distinctively here.
                    </li>
                    <li>
                      <strong>Mamtu:</strong> Steamed dumplings similar to
                      momos, usually filled with minced meat, served with a
                      thin, spiced broth rather than dry.
                    </li>
                    <li>
                      <strong>Apricot everything:</strong> Kargil's orchards
                      produce some of the best apricots in Ladakh. Look for
                      fresh apricots in August, dried ones year-round, and
                      cold-pressed apricot oil sold in the bazaar — used both
                      in cooking and as a traditional skin remedy for the
                      harsh, dry climate.
                    </li>
                    <li>
                      <strong>Noon chai:</strong> The pink, salted Kashmiri
                      tea common on the Srinagar side of the highway, popular
                      in Kargil's tea stalls alongside butter tea further
                      east.
                    </li>
                    <li>
                      <strong>Where to eat:</strong> The bazaar's small
                      family-run dhabas serve the most authentic Balti food;
                      hotel restaurants lean towards a safer mix of North
                      Indian and Kashmiri dishes for highway travellers.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown for Kargil</h2>
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
                          ["Accommodation/night", "₹700", "₹2,000", "₹4,500"],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          [
                            "Local transport/taxi",
                            "₹300",
                            "₹1,000",
                            "₹2,500",
                          ],
                          [
                            "Suru Valley day trip",
                            "₹1,500",
                            "₹3,000",
                            "₹5,000",
                          ],
                          ["Sightseeing/entries", "₹100", "₹300", "₹500"],
                          [
                            "Daily total (approx)",
                            "₹1,450",
                            "₹4,000",
                            "₹8,500",
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
                    * Excludes the shared taxi/private vehicle cost of
                    reaching Kargil itself from Srinagar or Leh, and any
                    onward Zanskar travel beyond a single day trip.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Kargil</h2>
                  <ul>
                    <li>
                      <strong>Fuel up in Kargil:</strong> It's one of only a
                      handful of reliable fuel stops on the entire
                      Srinagar–Leh highway, and the last one before the Suru
                      and Zanskar roads. Fill up here even if your tank looks
                      fine.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> ATMs exist in Kargil town
                      but are unreliable in peak season and non-existent
                      beyond it in Suru or towards Zanskar. Carry enough
                      rupees for several days.
                    </li>
                    <li>
                      <strong>Dress modestly:</strong> As a Muslim-majority
                      town, Kargil is culturally more conservative than Leh.
                      Modest clothing is appreciated, especially in the
                      bazaar and near mosques and imambaras.
                    </li>
                    <li>
                      <strong>Mobile coverage:</strong> BSNL and Airtel work
                      reasonably in Kargil town itself but drop out quickly
                      once you head into the Suru Valley or towards Zanskar.
                      Jio coverage is patchy at best.
                    </li>
                    <li>
                      <strong>Check the road status:</strong> Both Zoji La
                      and the Kargil–Zanskar road via Pensi La are subject to
                      sudden closures from landslides, snow, or flooding.
                      Confirm current status locally before setting out,
                      especially in shoulder season (May or October).
                    </li>
                    <li>
                      <strong>Photography near the border:</strong> Kargil
                      district sits close to sensitive border areas. Avoid
                      photographing military installations, checkpoints, or
                      convoys, and expect occasional document checks on the
                      highway.
                    </li>
                    <li>
                      <strong>Give the war memorial its due:</strong> The
                      Kargil War Memorial at Dras is a working memorial, not
                      a tourist attraction — dress and behave respectfully,
                      and allow real time rather than treating it as a quick
                      photo stop.
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
                          "Fill your fuel tank in Kargil before heading onward",
                          "Spend at least one night rather than rushing through",
                          "Stop properly at the Kargil War Memorial in Dras",
                          "Try Balti dishes like kisir and chutagi in the bazaar",
                          "Take the Suru Valley detour if you have a spare day",
                          "Check Zoji La and Pensi La road status before departure",
                          "Carry sufficient cash for several days",
                          "Dress modestly, especially in the town bazaar",
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
                          "Treat Kargil as a place to just drive through unseen",
                          "Photograph military checkpoints, convoys, or installations",
                          "Attempt the Zanskar road without checking conditions first",
                          "Assume ATMs will be working — carry cash",
                          "Rush the war memorial stop at Dras",
                          "Expect Leh-style tourist infrastructure or luxury stays",
                          "Skip fuel here assuming you'll find it further on",
                          "Wear revealing clothing in the town bazaar",
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
                  "Kargil",
                  "Ladakh",
                  "Srinagar-Leh Highway",
                  "Balti Culture",
                  "Zanskar",
                  "Kargil War Memorial",
                  "Suru Valley",
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
                destination="Kargil"
              />

              <RelatedPostsGrid currentSlug="kargil-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kargil-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
