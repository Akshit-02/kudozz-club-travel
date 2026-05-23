// src/app/blog/spiti-valley-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Spiti Valley Travel Guide 2026: Roads, Monasteries & Hidden Villages",
  description:
    "The most complete Spiti Valley travel guide for 2026. Discover the best places to visit, how to reach Spiti, a 10-day itinerary, where to stay, what to eat, and essential tips for this remote Himalayan desert.",
  keywords:
    "Spiti Valley, Spiti Valley travel guide, Spiti Valley itinerary, Kaza, Key Monastery, Chandratal Lake, Pin Valley, Himachal Pradesh travel",
  openGraph: {
    title:
      "Spiti Valley Travel Guide 2026: Roads, Monasteries & Hidden Villages",
    description:
      "The most complete Spiti Valley travel guide for 2026 — routes, itineraries, permits, stays and insider tips.",
    url: "https://explore.kudozz.in/blog/spiti-valley-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    authors: ["Kudozz Club"],
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Spiti Valley landscape",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiti Valley Travel Guide 2026",
    description:
      "Roads, monasteries, hidden villages — the complete guide to Spiti Valley.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://explore.kudozz.in/blog/spiti-valley-travel-guide",
  },
};

// ── Structured Data ───────────────────────────────────────────────────────────
function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "Spiti Valley Travel Guide 2026: Roads, Monasteries & Hidden Villages",
          description: "The most complete Spiti Valley travel guide for 2026.",
          image:
            "https://explore.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: {
              "@type": "ImageObject",
              url: "https://explore.kudozz.in/logo.png",
            },
          },
          author: {
            "@type": "Organization",
            name: "Kudozz Club",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://explore.kudozz.in/blog/spiti-valley-travel-guide",
          },
          about: {
            "@type": "Place",
            name: "Spiti Valley",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Himachal Pradesh",
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
                name: "Spiti Valley Travel Guide",
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
  { id: "introduction", title: "Why Visit Spiti Valley?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Spiti", level: 2 },
  { id: "shimla-route", title: "→ Via Shimla (Kinnaur)", level: 3 },
  { id: "manali-route", title: "→ Via Manali (Rohtang)", level: 3 },
  { id: "top-places", title: "Top Places to Visit", level: 2 },
  { id: "kaza", title: "→ Kaza — The Heart of Spiti", level: 3 },
  { id: "key-monastery", title: "→ Key Monastery", level: 3 },
  { id: "chandratal", title: "→ Chandratal Lake", level: 3 },
  { id: "kibber", title: "→ Kibber Village", level: 3 },
  { id: "langza", title: "→ Langza & Fossils", level: 3 },
  { id: "pin-valley", title: "→ Pin Valley", level: 3 },
  { id: "dhankar", title: "→ Dhankar Monastery", level: 3 },
  { id: "itinerary", title: "10-Day Itinerary", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "permits", title: "Permits & Formalities", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Related Posts override ────────────────────────────────────────────────────
const relatedQuickFacts = [
  { icon: "📍", label: "Location", value: "Himachal Pradesh, India" },
  { icon: "🏔️", label: "Altitude", value: "3,800 m avg (12,467 ft)" },
  { icon: "🌡️", label: "Best Time", value: "Jun – Oct" },
  { icon: "✈️", label: "Nearest Airport", value: "Bhuntar / Chandigarh" },
  { icon: "💰", label: "Budget/Day", value: "₹1,200 – ₹4,000" },
  { icon: "🛂", label: "Inner Line Permit", value: "Required for some areas" },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SpitiValleyPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="Spiti Valley — barren moonscape with Key Monastery"
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
                {
                  label: "Himachal Pradesh",
                  href: "/blog?category=himachal-pradesh",
                },
                { label: "Spiti Valley", href: null },
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
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Spiti Valley",
                "Himachal Pradesh",
                "Off-beat",
                "Road Trip",
                "High Altitude",
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
              Spiti Valley Travel Guide 2026: Roads, Monasteries & Hidden
              Villages
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A cold desert between Tibet and India, Spiti Valley is one of the
              most remote and otherworldly destinations on earth. This is
              everything you need to plan the trip of a lifetime.
            </p>

            {/* Meta */}
            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <span className="flex items-center gap-1.5 text-sm text-white/55">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                22 min read
              </span>
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
                  <h2>Why Visit Spiti Valley?</h2>
                  <p>
                    There are beautiful places, and then there is{" "}
                    <strong>Spiti Valley</strong>. Sitting at an average
                    altitude of 3,800 metres in the rain shadow of the outer
                    Himalayas, Spiti is a cold desert — barren, bone-dry, and
                    breathtakingly beautiful. The landscape looks less like
                    India and more like the surface of Mars: ochre cliffs,
                    turquoise rivers, crumbling monasteries perched impossibly
                    on ridgelines, and villages so remote that supply trucks
                    come only a few months a year.
                  </p>
                  <p>
                    Spiti is not a destination you stumble into. The roads are
                    brutal, altitude sickness is real, and facilities are basic.
                    But for those who make the effort, it offers something
                    increasingly rare in modern travel — a place that hasn't
                    been smoothed out for mass tourism. The sky here is a shade
                    of blue you won't see at sea level. The silence is the
                    loudest thing around. And the welcome from the local Spitian
                    community is genuinely warm.
                  </p>
                  <p>
                    This guide covers everything: both routes in, the best
                    villages and monasteries to visit, a complete 10-day
                    itinerary, where to sleep, what to eat, permits, and the
                    essential tips that will make the difference between a good
                    trip and a great one.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Spiti Valley at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {relatedQuickFacts.map(({ icon, label, value }) => (
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
                  <h2>Best Time to Visit Spiti Valley</h2>
                  <p>
                    Spiti's extreme altitude and geography mean the window for
                    comfortable travel is shorter than most Indian destinations
                    — roughly <strong>June to October</strong>. Outside of that,
                    the valley is buried under snow and most roads are
                    impassable.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "June – July",
                        emoji: "🌸",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Opening season",
                        text: "Snow melts, roads reopen. Lush green patches appear near rivers. Cool temperatures, occasional rain. The Shimla route opens first; Manali route (Rohtang) opens by late June.",
                      },
                      {
                        season: "August – September",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Peak & best weather",
                        text: "The sweet spot. Clear skies, all roads open, Chandratal accessible. Festivals like Ladarcha and Losar. Accommodation fills fast — book ahead.",
                      },
                      {
                        season: "October",
                        emoji: "🍂",
                        color: "bg-orange-50 border-orange-200",
                        mood: "Golden & quiet",
                        text: "Our favourite month. Thin crowds, dramatic golden light on the cliffs, first snow on high passes. Roads can close mid-October without warning.",
                      },
                      {
                        season: "Nov – May",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Avoid unless experienced",
                        text: "Spiti is almost entirely cut off. Some locals remain in Kaza. Only for experienced winter expedition teams with proper gear and logistics.",
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
                    <strong>Our pick:</strong> Mid-August to late September. The
                    roads are all open, Chandratal is accessible, the sky is
                    impossibly clear, and the landscape turns a vivid rust-gold.
                    It's Spiti at its most cinematic.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Spiti Valley</h2>
                  <p>
                    There are two roads into Spiti — and both are epic journeys
                    in their own right. Most travellers do the classic circuit:
                    enter from one side, exit from the other.
                  </p>

                  <section id="shimla-route">
                    <h3>Via Shimla — The Kinnaur Route</h3>
                    <p>
                      The <strong>Shimla–Kinnaur–Spiti</strong> route (NH5 /
                      NH505) is the longer but more accessible road, open for a
                      greater part of the year. From Shimla, you drive through
                      the apple orchards and hanging valleys of Kinnaur — past
                      Sarahan, Sangla, Chitkul, Nako — before crossing into
                      Spiti at Sumdo. The journey from Shimla to Kaza takes
                      about 10–12 hours across 2 days at a comfortable pace.
                    </p>
                    <ul>
                      <li>
                        <strong>Shimla → Reckong Peo / Kalpa:</strong> Day 1
                        stop, 170 km (~6 hrs). Stunning Kinnaur Kailash views
                        from Kalpa.
                      </li>
                      <li>
                        <strong>Reckong Peo → Nako / Tabo:</strong> Day 2, 140
                        km (~5 hrs). Cross into Spiti territory.
                      </li>
                      <li>
                        <strong>Tabo → Kaza:</strong> Day 3, 45 km (~2 hrs).
                        Easy morning drive.
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> The Kinnaur road has several
                      landslide-prone sections, especially after Karcham. Check
                      road conditions at the Reckong Peo police checkpoint
                      before proceeding.
                    </div>
                  </section>

                  <section id="manali-route">
                    <h3>Via Manali — The Rohtang & Kunzum Route</h3>
                    <p>
                      The <strong>Manali–Rohtang–Kunzum–Spiti</strong> route is
                      the more dramatic approach — crossing two high passes
                      including the legendary Kunzum Pass (4,590 m). This route
                      is shorter in distance but longer in drama. It's only open
                      from late June to mid-October.
                    </p>
                    <ul>
                      <li>
                        <strong>
                          Manali → Rohtang Pass → Gramphoo → Batal:
                        </strong>{" "}
                        Day 1, ~130 km (~6 hrs). Camp or homestay at Batal.
                      </li>
                      <li>
                        <strong>Batal → Chandratal Lake → Losar → Kaza:</strong>{" "}
                        Day 2, ~90 km (~4 hrs). Stop at Chandratal on this day.
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Note:</strong> The Batal–Chandratal stretch is
                      one of the most treacherous roads in India — creek
                      crossings, no guardrails, and sheer drops. A 4×4 vehicle
                      or high-clearance SUV is strongly recommended. Do NOT
                      attempt in a sedan.
                    </div>
                  </section>
                </section>

                {/* ── Top Places ────────────────────────────────────────── */}
                <section id="top-places">
                  <h2>Top Places to Visit in Spiti Valley</h2>

                  <section id="kaza">
                    <h3>Kaza — The Heart of Spiti</h3>
                    <img
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Kaza town in Spiti Valley"
                      className="w-full rounded-xl my-6 h-72 object-cover"
                    />
                    <p>
                      At 3,800 metres, <strong>Kaza</strong> is the district
                      headquarters of Spiti and the de facto base for exploring
                      the valley. Don't expect much in terms of urban
                      infrastructure — Kaza is a small market town with a
                      handful of streets, a few banks (ATMs are unreliable),
                      basic mobile connectivity (BSNL works best), and a rapidly
                      growing guesthouse scene.
                    </p>
                    <p>
                      The town is split into Old Kaza (traditional architecture,
                      local life) and New Kaza (market, hotels, restaurants).
                      Start here, acclimatise for a full day, and use it as your
                      operational hub for excursions to Key, Kibber, Langza, and
                      Pin Valley.
                    </p>
                    <p>
                      Don't miss <strong>Sakya Tangyud Monastery</strong> in Old
                      Kaza — small, often overlooked, and genuinely atmospheric
                      in the early morning.
                    </p>
                  </section>

                  <section id="key-monastery">
                    <h3>Key Monastery — Spiti's Most Iconic Sight</h3>
                    <p>
                      Perched on a hilltop 14 km from Kaza at 4,166 metres,{" "}
                      <strong>Key Monastery</strong> (Ki Gompa) is the largest
                      and most important monastery in Spiti — and one of the
                      most photographed buildings in the Indian Himalayas. Its
                      tiered white-and-ochre structure rising against barren
                      mountains and electric-blue sky is the definitive image of
                      Spiti Valley.
                    </p>
                    <p>
                      Founded in the 11th century, Key is a working monastery
                      with around 300 monks. The inner prayer halls contain
                      centuries-old thangkas, weapons, and musical instruments.
                      Visit early morning when monks perform their morning
                      prayers — the deep drone of the dungchen horns echoing
                      across the valley is something you will not forget.
                    </p>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Combine Key Monastery with
                      Kibber Village in one day — they're only 12 km apart. Hire
                      a local cab from Kaza for ₹800–₹1,200 for the return trip.
                    </div>
                  </section>

                  <section id="chandratal">
                    <h3>Chandratal Lake — The Moon Lake</h3>
                    <p>
                      At 4,300 metres, <strong>Chandratal</strong> (Moon Lake)
                      is one of the most beautiful high-altitude lakes in the
                      world — a crescent-shaped lake of almost impossibly vivid
                      turquoise water, surrounded by mountains dusted with snow.
                      The colours shift throughout the day from jade green to
                      deep teal to brilliant blue depending on the light.
                    </p>
                    <p>
                      Chandratal is located en route between Manali and Kaza,
                      near the village of Batal. It can also be visited as a day
                      trip from Kaza (4–5 hours each way). Camping at Chandratal
                      is one of the great Himalayan experiences — there are a
                      handful of basic tent camps near the lake, and the night
                      sky here is extraordinary.
                    </p>
                    <ul>
                      <li>
                        <strong>Distance from Kaza:</strong> ~90 km, ~4.5 hours
                        (road conditions permitting)
                      </li>
                      <li>
                        <strong>Entry:</strong> ₹50 per person, payable at the
                        forest gate
                      </li>
                      <li>
                        <strong>Camping:</strong> ₹500–₹800/night in basic tent
                        camps at Chandratal base
                      </li>
                      <li>
                        <strong>Best time:</strong> July–September (road may be
                        blocked by snow otherwise)
                      </li>
                    </ul>
                  </section>

                  <section id="kibber">
                    <h3>Kibber Village</h3>
                    <p>
                      At 4,270 metres, <strong>Kibber</strong> claims to be one
                      of the highest motorable villages in the world — though
                      several others make similar claims. What's undeniable is
                      its extraordinary setting: a cluster of whitewashed
                      flat-roofed houses clinging to a cliff above the Spiti
                      River, ringed by towering peaks and a landscape that feels
                      entirely lunar.
                    </p>
                    <p>
                      Kibber is the starting point for treks to the{" "}
                      <strong>Kibber Wildlife Sanctuary</strong>, one of the
                      best places in India to spot snow leopards
                      (December–February), ibex, and Tibetan wolves. In summer,
                      the trails above Kibber offer some of the most dramatic
                      walking in the region — follow the path to Gete village
                      for the best views.
                    </p>
                  </section>

                  <section id="langza">
                    <h3>Langza & The Fossil Village</h3>
                    <p>
                      <strong>Langza</strong> sits at 4,400 metres with a single
                      dirt road, a handful of homestays, a giant Buddha statue
                      overlooking the valley, and an extraordinary geological
                      secret: the entire hillside around the village is littered
                      with marine fossils — ammonites, corals, and ancient sea
                      creatures — dating back 40–50 million years, when this
                      entire region was on the floor of the Tethys Sea.
                    </p>
                    <p>
                      Pick up a handful of soil near the cliff edges and you'll
                      find fossils within minutes. The local children are expert
                      fossil guides. Don't remove fossils — it's prohibited —
                      but photographing them is perfectly fine. The Buddha
                      statue at sunset with the Spitian peaks behind it is one
                      of the valley's most iconic photo opportunities.
                    </p>
                  </section>

                  <section id="pin-valley">
                    <h3>Pin Valley National Park</h3>
                    <p>
                      The <strong>Pin Valley</strong> branches off south from
                      Kaza and immediately feels different — greener, narrower,
                      more sheltered. The Pin River runs through it in brilliant
                      turquoise, and small villages like Sagnam, Kungri, and
                      Gulling line the road. The Pin Valley National Park
                      protects one of the last intact high-altitude cold desert
                      ecosystems in India.
                    </p>
                    <p>
                      <strong>Kungri Monastery</strong> in Pin Valley is the
                      valley's most important Nyingmapa monastery — a school of
                      Tibetan Buddhism that's rarer in Spiti than the dominant
                      Gelugpa school. The annual Pauri festival here (August) is
                      one of the most vibrant cultural events in the region. The
                      Pin–Parvati pass trek crossing into Kullu Valley is
                      legendary among serious trekkers.
                    </p>
                  </section>

                  <section id="dhankar">
                    <h3>Dhankar Monastery & Lake</h3>
                    <p>
                      If Key is Spiti's most famous monastery,{" "}
                      <strong>Dhankar</strong> is its most dramatic. The ancient
                      monastery clings to a vertical cliff at the confluence of
                      the Pin and Spiti rivers — a 1,000-year-old complex that
                      looks as if it grew organically from the rock face. It's a
                      UNESCO World Heritage tentative list site and genuinely
                      one of the most precarious-looking buildings you'll ever
                      see.
                    </p>
                    <p>
                      A 1.5-hour hike above the monastery leads to{" "}
                      <strong>Dhankar Lake</strong> — a small glacial lake at
                      4,200 metres with mirror-still water and 360-degree
                      mountain views. Few tourists make it this far. The trail
                      is unmarked in places — take a local guide from the
                      monastery.
                    </p>
                  </section>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>10-Day Spiti Valley Itinerary</h2>
                  <p>
                    This itinerary uses the classic circuit — entering from
                    Shimla/Kinnaur and exiting via Manali (or vice versa). It
                    builds in proper acclimatisation stops which are
                    non-negotiable at these altitudes.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1–2",
                        title: "Shimla → Kalpa (Kinnaur)",
                        color: "bg-sky-600",
                        activities: [
                          "Drive Shimla to Reckong Peo (170 km, 6 hrs)",
                          "Check in at Kalpa — views of Kinnaur Kailash at dusk",
                          "Acclimatise at 2,960 m — easy walk through apple orchards",
                          "Visit Roghi village and Chini Lama temple",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Kalpa → Nako Lake",
                        color: "bg-sky-500",
                        activities: [
                          "Drive through Pooh and Khab Sangam (India's highest road river confluence)",
                          "Nako Lake — a sacred lake in the middle of the desert at 3,662 m",
                          "Explore Nako village monasteries",
                          "Overnight in Nako homestay",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Nako → Tabo",
                        color: "bg-forest-600",
                        activities: [
                          "Visit Gue Mummy — a 500-year-old preserved monk",
                          "Tabo Monastery (996 AD) — the 'Ajanta of the Himalayas'",
                          "Spend the evening at the monastery with monks",
                          "Overnight at Tabo",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Tabo → Kaza (Acclimatise)",
                        color: "bg-forest-500",
                        activities: [
                          "Easy drive to Kaza (45 km, 2 hrs) — arrive by noon",
                          "Afternoon rest and acclimatisation — mandatory",
                          "Evening walk in Old Kaza market",
                          "Sakya Tangyud Monastery at sunrise",
                        ],
                      },
                      {
                        day: "Day 6",
                        title: "Key Monastery + Kibber Village",
                        color: "bg-amber-600",
                        activities: [
                          "Early morning Key Monastery (6:00 AM for morning prayers)",
                          "Continue 12 km to Kibber Village",
                          "Trek above Kibber to Gete village viewpoint",
                          "Return to Kaza for dinner",
                        ],
                      },
                      {
                        day: "Day 7",
                        title: "Langza + Hikkim + Komic",
                        color: "bg-amber-500",
                        activities: [
                          "Langza village — fossils and the giant Buddha statue",
                          "Hikkim — world's highest post office (4,400 m), send a postcard",
                          "Komic — one of the world's highest motorable villages",
                          "Back to Kaza by evening",
                        ],
                      },
                      {
                        day: "Day 8",
                        title: "Pin Valley Day Trip",
                        color: "bg-forest-700",
                        activities: [
                          "Drive into Pin Valley (45 km from Kaza)",
                          "Kungri Monastery — Nyingmapa school, rarely visited",
                          "Mud village — ancient fort ruins",
                          "Return via the Pin-Spiti confluence viewpoint",
                        ],
                      },
                      {
                        day: "Day 9",
                        title: "Dhankar + Chandratal Camp",
                        color: "bg-stone-600",
                        activities: [
                          "Morning: Dhankar Monastery + lake hike (3 hrs)",
                          "Afternoon: Drive towards Batal (90 km)",
                          "Arrive at Chandratal Lake by evening",
                          "Overnight camping at Chandratal tent camps",
                        ],
                      },
                      {
                        day: "Day 10",
                        title: "Chandratal → Manali",
                        color: "bg-stone-700",
                        activities: [
                          "Sunrise at Chandratal Lake (unmissable)",
                          "Cross Kunzum Pass (4,590 m) — spin the prayer wheel",
                          "Drive down to Rohtang and into Manali",
                          "Arrive Manali by evening — celebrate with a hot shower",
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
                  <h2>Where to Stay in Spiti Valley</h2>
                  <p>
                    Accommodation in Spiti is basic compared to more mainstream
                    destinations — and that's part of its charm. Homestays are
                    the dominant and recommended option: they're typically
                    cheaper than hotels, the food is cooked by the family, and
                    the cultural experience is irreplaceable.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Homestays",
                        icon: "🏡",
                        range: "₹400–₹900/night",
                        picks: [
                          "Zostel Kaza (dorms)",
                          "Spiti Healing House",
                          "Local family homestays in Kibber",
                          "Langza homestays (basic but magical)",
                        ],
                      },
                      {
                        tier: "Guesthouses",
                        icon: "🏨",
                        range: "₹900–₹2,500/night",
                        picks: [
                          "Sakya Abode (Kaza)",
                          "Hotel Deyzor (Kaza)",
                          "Tabo Monastery Guesthouse",
                          "Nako homestay guesthouses",
                        ],
                      },
                      {
                        tier: "Camps",
                        icon: "⛺",
                        range: "₹500–₹1,500/night",
                        picks: [
                          "Chandratal tent camps",
                          "Batal camp (basic)",
                          "Spiti Valley camp (Kaza)",
                          "Dhankar camping",
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
                    Always carry cash. There are limited ATMs in Kaza (SBI and
                    UCO Bank) and none elsewhere in the valley. Withdraw before
                    leaving Shimla or Manali.
                  </blockquote>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Spiti Valley</h2>
                  <p>
                    Spiti's food scene is dominated by Tibetan-influenced
                    cuisine — hearty, warming, and perfectly suited to the
                    altitude. Don't come expecting variety. Come expecting{" "}
                    <em>thukpa</em>.
                  </p>
                  <ul>
                    <li>
                      <strong>Thukpa:</strong> Tibetan noodle soup with
                      vegetables or meat — the go-to meal at every altitude.
                      Warming, filling, and available everywhere.
                    </li>
                    <li>
                      <strong>Momos:</strong> Steamed or fried dumplings,
                      stuffed with veg or meat. Best eaten fresh from the
                      kitchen at a local homestay.
                    </li>
                    <li>
                      <strong>Tsampa:</strong> Roasted barley flour mixed with
                      butter tea — the traditional Spitian staple. Acquired
                      taste, but deeply nourishing at altitude.
                    </li>
                    <li>
                      <strong>Butter Tea (Po cha):</strong> Salted,
                      butter-churned black tea that locals drink constantly.
                      Essential for staying warm and hydrated at altitude.
                    </li>
                    <li>
                      <strong>Chhang:</strong> Local barley beer — mildly
                      alcoholic, slightly sour, and surprisingly refreshing.
                      Only one or two cups at altitude.
                    </li>
                    <li>
                      <strong>Seabuckthorn juice:</strong> Made from the wild
                      orange berries that grow everywhere along the river.
                      Tangy, vitamin C-rich, and excellent for acclimatisation.
                    </li>
                  </ul>
                  <p>
                    <strong>Best places to eat:</strong> Sakya Café and Sol Café
                    in Kaza are the most reliable. For authentic Spitian food,
                    eat dinner at your homestay — almost always the best meal in
                    the valley.
                  </p>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & Formalities</h2>
                  <p>
                    Spiti Valley itself requires no permit for Indian nationals.
                    However, certain adjacent areas do:
                  </p>
                  <ul>
                    <li>
                      <strong>Spiti Valley proper:</strong> No permit required
                      for Indian nationals. Foreign nationals need an Inner Line
                      Permit (ILP) for areas near the Chinese border (Kibber,
                      Pin Valley, Kaza).
                    </li>
                    <li>
                      <strong>Chitkul (Kinnaur):</strong> No permit for Indians.
                      Foreign nationals need ILP.
                    </li>
                    <li>
                      <strong>Rohtang Pass:</strong> Day permit required (₹550
                      non-AC, ₹750 AC). Book online at rohtangpermits.nic.in at
                      least 2 days ahead.
                    </li>
                    <li>
                      <strong>Chandratal:</strong> ₹50 per person entry fee at
                      the forest gate.
                    </li>
                    <li>
                      <strong>Foreign nationals:</strong> Obtain ILP from DC
                      offices in Shimla or Kaza. Cost: ₹500. Valid for 7 days.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Important:</strong> Carry multiple photocopies of
                    your ID (Aadhaar / Passport). There are police checkpoints
                    at Sumdo, Gramphoo, and before Kunzum Pass. They check ID
                    every time.
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
                          ["Accommodation/night", "₹400", "₹1,200", "₹2,500"],
                          ["Food/day", "₹300", "₹600", "₹1,000"],
                          ["Local transport", "₹200", "₹800", "₹2,000"],
                          ["Activities/permits", "₹100", "₹300", "₹600"],
                          ["Daily Total", "₹1,000", "₹2,900", "₹6,100"],
                          [
                            "10-Day Trip Total",
                            "₹10,000",
                            "₹29,000",
                            "₹61,000",
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
                    * Excludes transport to/from Shimla or Manali. Add
                    ₹1,500–₹4,000 each way by bus or shared cab.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Spiti Valley</h2>
                  <ul>
                    <li>
                      <strong>Acclimatise seriously:</strong> This is the single
                      most important thing. Do not rush from sea level to Kaza
                      in one day. Add at least 2 intermediate altitude nights
                      (Shimla 2,200m → Kalpa 2,960m → Kaza 3,800m). Drink 3–4
                      litres of water daily.
                    </li>
                    <li>
                      <strong>Vehicle choice matters:</strong> The roads to
                      Chandratal, Kibber, and Langza are extremely rough. A
                      high-clearance SUV (Scorpio, Thar, Bolero) or 4×4 is
                      strongly recommended. Sedans have broken axles on these
                      roads.
                    </li>
                    <li>
                      <strong>Carry enough cash:</strong> ATMs in Kaza are the
                      only ones in the valley and frequently run out. Carry
                      ₹10,000–₹15,000 in cash for a 10-day trip.
                    </li>
                    <li>
                      <strong>BSNL SIM for connectivity:</strong> Private
                      operators (Airtel, Jio) have zero signal beyond Reckong
                      Peo. A local BSNL SIM is essential for any connectivity in
                      Spiti.
                    </li>
                    <li>
                      <strong>Pack a medical kit:</strong> Diamox (altitude
                      sickness medication), Disprin, ORS sachets, basic
                      antibiotics, and a pulse oximeter. Altitude sickness kills
                      — know the symptoms (persistent headache, vomiting,
                      confusion) and descend immediately if they appear.
                    </li>
                    <li>
                      <strong>Respect the environment:</strong> Spiti has
                      fragile ecology. Pack out all plastic waste. Don't disturb
                      wildlife. Pay the entry fees — they fund conservation.
                      Respect monastery rules (no photography of certain
                      interiors, remove shoes).
                    </li>
                    <li>
                      <strong>Book accommodation ahead in August:</strong> Spiti
                      gets busy in peak season. Kaza homestays fill up —
                      especially Zostel and the better guesthouses. Book at
                      least 2 weeks ahead for August travel.
                    </li>
                    <li>
                      <strong>Sunscreen is critical:</strong> The UV index at
                      3,800+ metres is extreme. SPF 50+ every day, reapply every
                      2 hours. Snow-blindness is also possible on the high
                      passes — bring UV-rated sunglasses.
                    </li>
                  </ul>

                  <div className="bg-stone-900 text-white rounded-xl p-6 my-8">
                    <h4
                      className="font-bold text-white mb-3 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🩺</span> Altitude Sickness Warning Signs
                    </h4>
                    <div
                      className="grid sm:grid-cols-2 gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          sign: "Persistent headache",
                          action: "Take Disprin, drink water, rest",
                        },
                        {
                          sign: "Nausea / vomiting",
                          action: "Take Diamox 250mg, monitor closely",
                        },
                        {
                          sign: "Confusion / loss of balance",
                          action: "Descend immediately — this is serious",
                        },
                        {
                          sign: "Breathlessness at rest",
                          action: "Descend immediately + seek medical help",
                        },
                      ].map((s) => (
                        <div key={s.sign} className="bg-white/5 rounded-lg p-3">
                          <div className="text-red-400 font-semibold text-xs mb-1">
                            {s.sign}
                          </div>
                          <div className="text-stone-400 text-xs">
                            {s.action}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Spiti Valley",
                  "Himachal Pradesh",
                  "Mountain Travel",
                  "India",
                  "Off-beat",
                  "Road Trip",
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

              {/* Related Posts Grid */}
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
