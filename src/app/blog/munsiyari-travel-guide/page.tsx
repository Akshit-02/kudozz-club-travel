// src/app/blog/munsiyari-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Munsiyari Travel Guide: Panchachuli Views & Treks",
  description:
    "Complete Munsiyari guide — Panchachuli peak views, Betuli Dhar, Thamri Kund, Milam Glacier trek logistics, how to reach this remote Kumaon town, where to stay, and a full visit plan.",
  keywords:
    "Munsiyari, Munsiyari Uttarakhand, Panchachuli peaks, Milam Glacier trek, Ralam Glacier, Namik Glacier, Betuli Dhar, Thamri Kund, Munsiyari best time to visit, how to reach Munsiyari, Pithoragarh, Kumaon off-beat, Adi Kailash route",
  openGraph: {
    title: "Munsiyari Travel Guide: Panchachuli Views & Treks",
    description:
      "A remote Kumaon town with the closest unobstructed view of the five Panchachuli peaks — treks, viewpoints, and everything you need to plan a visit.",
    url: "https://club.kudozz.in/blog/munsiyari-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Snow-capped Panchachuli peaks rising above the remote Himalayan valley of Munsiyari, Kumaon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Munsiyari Travel Guide: Panchachuli Views & Treks",
    description:
      "The closest unobstructed view of the five Panchachuli peaks, and the gateway to some of Kumaon's most serious treks — the complete Munsiyari guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/munsiyari-travel-guide",
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
          headline: "Munsiyari Travel Guide: Panchachuli Views & Treks",
          description:
            "Complete Munsiyari guide — Panchachuli peak views, Betuli Dhar, Thamri Kund, Milam Glacier trek logistics, how to reach this remote Kumaon town, where to stay, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
          datePublished: "2026-09-02",
          dateModified: "2026-09-02",
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
            "@id": "https://club.kudozz.in/blog/munsiyari-travel-guide",
          },
          keywords:
            "Munsiyari, Panchachuli peaks, Milam Glacier, Pithoragarh, Kumaon off-beat, Betuli Dhar",
          about: {
            "@type": "Place",
            name: "Munsiyari",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttarakhand",
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
                name: "Uttarakhand",
                item: "https://club.kudozz.in/blog/uttarakhand-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Munsiyari",
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
    q: "Why is Munsiyari famous?",
    a: "Munsiyari is famous for offering the closest, most unobstructed roadside view of the five Panchachuli peaks anywhere in Kumaon — you can see the entire snow-capped massif from the town itself, without a trek. It's also the traditional starting point for the Milam, Ralam, and Namik Glacier treks, and a common stopover for travellers heading toward Adi Kailash and Om Parvat.",
  },
  {
    q: "Where does the name Panchachuli come from?",
    a: "Panchachuli translates roughly to 'five hearths' or 'five chimneys.' Local legend ties it to the Pandavas from the Mahabharata, who are said to have cooked their last meal on these five peaks before beginning their final ascent to the Himalayas.",
  },
  {
    q: "Can I do the Milam Glacier trek without prior experience?",
    a: "Not comfortably. The Milam Glacier trek is a multi-day high-altitude route requiring an Inner Line Permit (since it approaches the India-China border area), a registered guide/agency, proper acclimatisation, and reasonable trekking fitness. It is not a casual add-on to a Munsiyari visit — budget separate time and planning if you want to attempt it.",
  },
  {
    q: "How far is Munsiyari from the nearest railway station?",
    a: "The nearest practical rail heads are Kathgodam and Tanakpur, both roughly 250-280 km away. The drive from either takes a full day (8-10+ hours) on winding mountain roads via Pithoragarh, so most visitors plan Munsiyari as a multi-day trip rather than a quick detour.",
  },
  {
    q: "Is Munsiyari good for a first-time hill station visit, or should I go somewhere easier first?",
    a: "Munsiyari rewards travellers who already know they want remoteness and don't mind long drives and basic infrastructure. If you want an easier introduction to Uttarakhand's hills, places like Nainital or Kausani are more accessible; Munsiyari is better suited to a second or third Himalayan trip.",
  },
  {
    q: "What's the best time to see the Panchachuli peaks clearly?",
    a: "April to June and September to November give the clearest views, with minimal haze and stable weather. Winter (December-February) also offers dramatic snow views but can bring heavy snowfall that closes higher connecting roads, so check conditions before travelling.",
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
  { id: "introduction", title: "Kumaon's Remote Himalayan Frontier", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Munsiyari", level: 2 },
  { id: "attractions", title: "Things to Do & See", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MunsiyariGuidePage() {
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
              alt="Snow-capped Panchachuli peaks rising above the remote Himalayan valley of Munsiyari, Kumaon"
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
                { label: "Uttarakhand", href: "/blog/uttarakhand-travel-guide" },
                { label: "Munsiyari", href: null },
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
                "Munsiyari",
                "Panchachuli",
                "Uttarakhand",
                "Kumaon",
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
              Munsiyari: Panchachuli Views, Treks & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A remote Kumaon town with the closest, most unobstructed view
              of the five Panchachuli peaks anywhere in the region — and the
              gateway to some of Uttarakhand's most serious high-altitude
              treks.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "11 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Pithoragarh district, Kumaon",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
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
                  <h2>Kumaon's Remote Himalayan Frontier</h2>
                  <p>
                    Tucked into Pithoragarh district at the far eastern edge
                    of{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>
                    , <strong>Munsiyari</strong> sits at roughly 2,200 metres
                    and looks straight across a deep valley at the five
                    snow-clad summits of the Panchachuli range. Where most
                    Himalayan viewpoints require a trek to earn their
                    payoff, Munsiyari hands you the entire massif from the
                    edge of town — genuinely one of the most dramatic
                    roadside mountain views in India.
                  </p>
                  <p>
                    It's also a working gateway rather than a manicured hill
                    station. Munsiyari is the traditional jumping-off point
                    for the Milam, Ralam, and Namik Glacier treks, and a
                    common overnight stop for travellers on the long road
                    toward Adi Kailash and Om Parvat further north. The town
                    itself is small, unhurried, and home to a meaningful
                    Shauka (Bhotiya) community whose trans-Himalayan trading
                    history is documented at the local Tribal Heritage
                    Museum.
                  </p>
                  <p>
                    If Nainital and Mussoorie feel too developed and you want
                    Kumaon at its most genuinely off-the-radar, Munsiyari is
                    the place — just go in with realistic expectations about
                    the long drive to get there.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Munsiyari at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Pithoragarh district, Kumaon",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~2,200 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Apr-Jun, Sep-Nov" },
                        {
                          icon: "🗻",
                          label: "Known For",
                          value: "Panchachuli peak views",
                        },
                        {
                          icon: "🥾",
                          label: "Treks From Here",
                          value: "Milam, Ralam, Namik Glacier",
                        },
                        {
                          icon: "🚗",
                          label: "Nearest Rail Head",
                          value: "Kathgodam/Tanakpur, ~250-280 km",
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
                  <h2>Best Time to Visit Munsiyari</h2>
                  <p>
                    Munsiyari's high altitude and remote road access make
                    timing genuinely important — both for peak visibility
                    and for whether the roads in are even passable.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Apr – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies before the monsoon give the sharpest, haze-free views of the Panchachuli range, with pleasant daytime temperatures for walking around town.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best time — equally good",
                        text: "Post-monsoon skies are washed clean and stay clear for weeks, arguably giving the single best mountain visibility of the year.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain brings landslide risk on the mountain roads into Munsiyari and frequently obscures the peaks in cloud for days at a stretch.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Dramatic but risky",
                        text: "Heavy snowfall turns the valley spectacular but can close higher connecting roads for days at a time — check conditions before travelling.",
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
                    <strong>Our pick:</strong> late September to November —
                    the clearest, most reliable mountain visibility of the
                    year, with far less rain risk on the approach roads than
                    the spring window.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Munsiyari</h2>
                  <p>
                    Be honest with yourself about this one: Munsiyari is
                    genuinely remote, and reaching it is a full day's
                    journey from the nearest transport hubs, whichever way
                    you come.
                  </p>
                  <ul>
                    <li>
                      <strong>By air:</strong> Pantnagar Airport is the
                      nearest, but it's still a long onward drive of well
                      over 300 km via Kathgodam and Pithoragarh — flying in
                      saves comparatively little time given the mountain
                      roads that follow.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kathgodam and Tanakpur are
                      the practical rail heads, both roughly 250-280 km
                      away. Expect a full 8-10+ hour drive from either,
                      winding through Almora and Pithoragarh on progressively
                      narrower mountain roads.
                    </li>
                    <li>
                      <strong>By road:</strong> Most visitors break the
                      journey with an overnight stop in Pithoragarh or
                      Berinag rather than attempting Kathgodam to Munsiyari
                      in one push. A private vehicle or shared taxi is the
                      only practical way to cover the final stretch.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Don't plan Munsiyari as a
                    quick detour. Build in at least one overnight stop each
                    way from the rail head, and check road conditions ahead
                    of travel during and just after monsoon.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Things to Do & See in Munsiyari</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="View of the Panchachuli massif from Betuli Dhar viewpoint near Munsiyari"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Betuli Dhar Viewpoint</h3>
                  <p>
                    A short walk or drive above town, Betuli Dhar is
                    Munsiyari's classic sunrise spot — the Panchachuli peaks
                    catch the first light in shifting shades of pink and
                    gold, and on a clear morning the whole ridge is visible
                    without a single cloud.
                  </p>
                  <h3>Panchachuli Peaks & the Pandava Legend</h3>
                  <p>
                    The name Panchachuli — roughly "five hearths" — comes
                    from local legend holding that the five Pandava brothers
                    cooked their final meal on these peaks before beginning
                    their ascent to the heavens. Whether or not you know the
                    story, the five distinct summits lined up across the
                    valley are unmistakable and genuinely one of Kumaon's
                    great sights.
                  </p>
                  <h3>Thamri Kund</h3>
                  <p>
                    A small forest lake a short trek from town, framed by
                    dense rhododendron and oak, and considered sacred by
                    locals. It's an easy, peaceful half-day walk if you want
                    a break from mountain-staring.
                  </p>
                  <h3>Tribal Heritage Museum</h3>
                  <p>
                    A small but worthwhile museum documenting the culture,
                    dress, and trans-Himalayan trading history of the
                    Shauka (Bhotiya) community native to this valley, who
                    historically traded wool and salt across the Tibetan
                    border before it closed in 1962.
                  </p>
                  <h3>Nanda Devi Temple</h3>
                  <p>
                    A small local temple in Munsiyari town dedicated to
                    Nanda Devi as a goddess — distinct from the actual Nanda
                    Devi peak, which lies further west and is not visible
                    from here. Worth a quick stop while wandering the town.
                  </p>
                  <h3>Glacier Treks: Milam, Ralam & Namik</h3>
                  <p>
                    Munsiyari is the traditional starting point for three
                    serious high-altitude treks — Milam Glacier (the
                    longest and best-known, following an old trade route
                    toward the Tibetan border), Ralam Glacier, and Namik
                    Glacier. These are genuine multi-day Himalayan treks,
                    not casual outings: they require an Inner Line Permit,
                    a registered guide or trekking agency, proper
                    acclimatisation, and several extra days of planning
                    beyond a standard Munsiyari visit. If you're combining
                    this with{" "}
                    <Link href="/blog/adi-kailash-travel-guide">
                      Adi Kailash and Om Parvat
                    </Link>
                    , Munsiyari is a natural base to organise logistics for
                    both.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Munsiyari</h2>
                  <p>
                    Accommodation is modest compared to Uttarakhand's
                    bigger hill stations — expect simple, functional
                    options rather than resort-style luxury, most clustered
                    around the town's small main market.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Simple guesthouses in town",
                          "KMVN forest rest houses",
                          "Basic homestays",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,500/night",
                        picks: [
                          "Valley-facing hotels near Betuli Dhar",
                          "Better-appointed guesthouses",
                          "Trekker-oriented lodges",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹5,000–₹9,000/night",
                        picks: [
                          "The handful of higher-end mountain-view properties",
                          "Boutique stays with in-room heating",
                          "Limited options — book well ahead",
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
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    * "Luxury" here is relative to Munsiyari's small
                    inventory — options are limited, so book ahead in peak
                    season (Apr-Jun and Sep-Nov).
                  </p>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (3-4 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Travel to Munsiyari",
                        color: "bg-amber-700",
                        activities: [
                          "Full-day drive from Kathgodam/Tanakpur, or an overnight break in Pithoragarh",
                          "Arrive Munsiyari by evening, settle in",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Betuli Dhar & Town",
                        color: "bg-sky-600",
                        activities: [
                          "Early sunrise at Betuli Dhar viewpoint",
                          "Visit the Tribal Heritage Museum and Nanda Devi Temple",
                          "Wander the small main market",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Thamri Kund & Rest",
                        color: "bg-forest-600",
                        activities: [
                          "Half-day trek to Thamri Kund and back",
                          "Afternoon free to soak in the peak views",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Departure or Onward Trek",
                        color: "bg-purple-600",
                        activities: [
                          "Begin the return journey, or continue onward toward Adi Kailash/Om Parvat",
                          "Trekkers with permits sorted begin the Milam Glacier route from here",
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
                    * Many travellers pair Munsiyari with{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link> on
                    the return leg, breaking up the long drive back toward
                    the plains.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Munsiyari</h2>
                  <ul>
                    <li>
                      <strong>Small local dhabas:</strong> Simple Kumaoni
                      thalis with dal, rice, seasonal hill vegetables, and
                      occasionally local millets — the most common option
                      in town.
                    </li>
                    <li>
                      <strong>Guesthouse kitchens:</strong> Most homestays
                      and guesthouses cook meals to order for guests,
                      often the most reliable option given limited
                      standalone restaurants.
                    </li>
                    <li>
                      <strong>Tea and snack stalls:</strong> Small stalls
                      near the market serve tea, Maggi, and pakoras — handy
                      for warming up between viewpoint visits.
                    </li>
                  </ul>
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
                          ["Accommodation/night", "₹1,200", "₹3,200", "₹7,000"],
                          ["Food/day", "₹500", "₹1,000", "₹2,000"],
                          [
                            "Private vehicle from Kathgodam (one way)",
                            "₹6,000",
                            "₹8,000",
                            "₹10,000",
                          ],
                          ["Local sightseeing/day", "₹500", "₹1,200", "₹2,500"],
                          ["Guide (glacier trek, per day)", "₹1,500", "₹2,000", "₹2,500"],
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
                    * Figures are per person, per day, unless noted. Glacier
                    trek permits and multi-day guide/porter costs are
                    separate and not included here.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Munsiyari</h2>
                  <ul>
                    <li>
                      <strong>Plan for a multi-day trip, not a detour:</strong>{" "}
                      The long approach from any rail head means Munsiyari
                      rewards travellers who give it proper time.
                    </li>
                    <li>
                      <strong>Carry cash and warm layers:</strong> ATMs and
                      shops are limited, and temperatures drop sharply after
                      sunset even in summer months.
                    </li>
                    <li>
                      <strong>Check road conditions before travelling:</strong>{" "}
                      Especially just after monsoon and in winter, when
                      landslides or snow can close sections of the route.
                    </li>
                    <li>
                      <strong>Sort glacier trek permits in advance:</strong>{" "}
                      The Milam, Ralam, and Namik routes need Inner Line
                      Permits arranged through a registered agency — this
                      can't be done last-minute in town.
                    </li>
                    <li>
                      <strong>Book accommodation ahead in peak windows:</strong>{" "}
                      Munsiyari's small inventory of rooms fills up during
                      the clearest-view months of April-June and
                      September-November.
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
                          "Wake up early for sunrise at Betuli Dhar",
                          "Carry enough cash for the whole trip",
                          "Pack warm layers even for summer visits",
                          "Book a permitted guide if attempting a glacier trek",
                          "Give yourself buffer days around the drive",
                          "Visit the Tribal Heritage Museum for local context",
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
                          "Treat Munsiyari as a quick day-trip detour",
                          "Attempt Milam Glacier without a permit and guide",
                          "Expect wide ATM or network coverage",
                          "Travel during monsoon without checking road status",
                          "Assume rooms are available without booking ahead",
                          "Skip acclimatisation if continuing to higher altitude",
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
                    <strong>🗺️ Extend the trip:</strong> Munsiyari sits on
                    the natural route toward{" "}
                    <Link href="/blog/adi-kailash-travel-guide">
                      Adi Kailash and Om Parvat
                    </Link>{" "}
                    for those with the extra days and permits, or pair it
                    with{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link> on
                    the way back for an easier finish to the trip. See our{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand travel guide
                    </Link>{" "}
                    for the bigger picture.
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
                  "Munsiyari",
                  "Panchachuli",
                  "Uttarakhand",
                  "Kumaon",
                  "Off-beat",
                  "Pithoragarh",
                  "Himalayan Views",
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

              <RelatedPostsGrid currentSlug="munsiyari-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="munsiyari-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
