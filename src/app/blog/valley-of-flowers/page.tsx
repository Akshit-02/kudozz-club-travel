// src/app/blog/valley-of-flowers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Valley of Flowers Trek Guide 2025: Permits, Routes, Best Time & Tips",
  description:
    "The complete Valley of Flowers National Park trek guide for 2025. Everything you need — how to reach Govindghat, the trek route, permits, what flowers bloom when, Hemkund Sahib, where to stay in Ghangaria, and essential tips for this UNESCO World Heritage trek in Uttarakhand.",
  keywords:
    "Valley of Flowers trek, Valley of Flowers National Park, Uttarakhand trek, Ghangaria, Govindghat, Hemkund Sahib, Valley of Flowers permit, Valley of Flowers best time, Nanda Devi Biosphere Reserve, Chamoli Uttarakhand trek 2025",
  openGraph: {
    title:
      "Valley of Flowers Trek Guide 2025: Permits, Routes, Best Time & Tips",
    description:
      "A meadow of 300+ Himalayan wildflowers that blooms for just 8 weeks a year — the complete guide to India's most extraordinary trek.",
    url: "https://explore.kudozz.in/blog/valley-of-flowers",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Valley of Flowers in full bloom with Himalayan peaks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valley of Flowers Trek Guide 2025",
    description:
      "300+ wildflowers, UNESCO heritage, and a Himalayan meadow that blooms for just 8 weeks — the complete guide.",
    images: ["/images/destinations/manali/hero.jpg"],
  },
  alternates: {
    canonical: "https://explore.kudozz.in/blog/valley-of-flowers",
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
            "Valley of Flowers Trek Guide 2025: Permits, Routes, Best Time & Tips",
          description:
            "The complete Valley of Flowers National Park trek guide for 2025.",
          image:
            "https://explore.kudozz.in/images/destinations/manali/hero.jpg",
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
            "@id": "https://explore.kudozz.in/blog/valley-of-flowers",
          },
          about: {
            "@type": "Place",
            name: "Valley of Flowers National Park",
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
                name: "Valley of Flowers Trek Guide",
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
  { id: "introduction", title: "Why Valley of Flowers?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "flowers-calendar", title: "→ Flower Bloom Calendar", level: 3 },
  { id: "how-to-reach", title: "How to Reach Govindghat", level: 2 },
  { id: "by-road", title: "→ By Road from Rishikesh", level: 3 },
  { id: "by-air", title: "→ By Air & Train", level: 3 },
  { id: "permits", title: "Permits & Entry Fees", level: 2 },
  { id: "trek-overview", title: "The Trek Overview", level: 2 },
  { id: "govindghat-ghangaria", title: "→ Govindghat to Ghangaria", level: 3 },
  { id: "ghangaria-vof", title: "→ Ghangaria to Valley of Flowers", level: 3 },
  { id: "hemkund-sahib", title: "Hemkund Sahib", level: 2 },
  { id: "flowers-guide", title: "Flowers to Look For", level: 2 },
  { id: "wildlife", title: "Wildlife in the Valley", level: 2 },
  { id: "ghangaria-base", title: "Ghangaria — Your Base", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "packing-list", title: "Packing List", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ValleyOfFlowersPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/destinations/manali/hero.jpg"
              alt="Valley of Flowers — Himalayan meadow in full bloom with snow-capped peaks"
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
                { label: "Uttarakhand", href: "/blog?category=uttarakhand" },
                { label: "Valley of Flowers", href: null },
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
                "Valley of Flowers",
                "Uttarakhand",
                "UNESCO Heritage",
                "Trekking",
                "Wildflowers",
                "Hemkund Sahib",
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
              Valley of Flowers Trek Guide 2025: Permits, Routes, Best Time &
              Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A UNESCO World Heritage meadow that blazes with 300 species of
              Himalayan wildflowers for just eight weeks every year — and then
              returns to snow. This is the most fleeting and most beautiful trek
              in India.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "15 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Chamoli, Uttarakhand",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "3,100 words",
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
                  <h2>Why Valley of Flowers?</h2>
                  <p>
                    There are Himalayan treks that impress through scale — the
                    sheer verticality of the peaks, the crushing silence of the
                    glaciers, the altitude that makes your lungs work for every
                    breath. And then there is the
                    <strong> Valley of Flowers</strong> — a trek that moves you
                    in an entirely different way, through beauty so concentrated
                    and so brief that it feels less like a landscape and more
                    like an event.
                  </p>
                  <p>
                    Tucked in the Chamoli district of Uttarakhand at 3,352 to
                    3,658 metres, the Valley of Flowers National Park is a
                    6-km-long, 2-km-wide alpine meadow that transforms every
                    year between late July and mid-September. During those eight
                    weeks, more than 300 species of wildflowers bloom in
                    sequence — Himalayan blue poppies, brahmakamal, cobra lily,
                    primulas, anemones, marsh marigolds, geraniums, and dozens
                    more — carpeting the valley floor in shifting waves of
                    colour that change week by week. Outside that window, the
                    valley is buried under metres of snow and completely
                    inaccessible.
                  </p>
                  <p>
                    The trek itself is accessible to almost anyone with
                    reasonable fitness — it's not technically demanding and the
                    highest point is Hemkund Sahib at 4,329 metres (which can be
                    skipped). What it requires is timing. Come too early and the
                    flowers haven't opened. Come too late and the first autumn
                    frost has ended the season. Get the timing right and you
                    will see one of the most extraordinary natural spectacles on
                    earth.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌸</span> Valley of Flowers at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Chamoli, Uttarakhand",
                        },
                        {
                          icon: "🏔️",
                          label: "Valley Altitude",
                          value: "3,352 – 3,658 m",
                        },
                        {
                          icon: "🌡️",
                          label: "Bloom Season",
                          value: "Late Jul – mid-Sep",
                        },
                        {
                          icon: "🥾",
                          label: "Trek Length",
                          value: "38 km round trip",
                        },
                        {
                          icon: "🌿",
                          label: "UNESCO Status",
                          value: "World Heritage Site",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹3,500",
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
                  <h2>Best Time to Visit Valley of Flowers</h2>
                  <p>
                    This is the single most important planning decision for this
                    trek. The Valley of Flowers National Park is
                    <strong> open only from June 1 to October 31</strong> each
                    year. But open and blooming are two very different things.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "June – early July",
                        emoji: "🌱",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Too early for full bloom",
                        text: "The snow is still melting across much of the valley. Early wildflowers appear — primulas, anemones, and some orchids — but the main bloom carpet hasn't formed. The trek is peaceful and uncrowded. Good for those who enjoy a quieter, rawer experience.",
                      },
                      {
                        season: "Mid-July – August",
                        emoji: "🌸",
                        color: "bg-pink-50 border-pink-200",
                        mood: "Peak bloom — the money shot",
                        text: "The valley is at its most extraordinary. Multiple bloom waves overlap — blue poppies, cobra lilies, brahmakamal, geraniums, and dozens more species create the famous carpet effect. This is when the photographs you've seen are taken. Also the busiest period.",
                      },
                      {
                        season: "Early September",
                        emoji: "🍃",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Late bloom — quieter and still excellent",
                        text: "The main bloom begins to thin but late-flowering species like aster, aconitum, and saussurea are at peak. The crowds have thinned considerably. Brahmakamal — the most sacred Himalayan flower — blooms through August into September. Our recommended sweet spot.",
                      },
                      {
                        season: "October",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "End of season",
                        text: "The flowers are gone, leaves have turned, and early snow may have fallen on the higher sections. The valley has a stark, autumnal beauty but the spectacle is over. The park closes October 31. Hemkund Sahib usually closes by early October.",
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
                    <strong>Our pick:</strong> The last week of July through the
                    first two weeks of August. This is when the greatest number
                    of species are simultaneously in bloom — the valley floor is
                    a living mosaic of colour. Book accommodation in Ghangaria
                    at least 3–4 weeks ahead for this window.
                  </blockquote>

                  <section id="flowers-calendar">
                    <h3>Flower Bloom Calendar</h3>
                    <p>
                      Different species bloom in sequence through the season.
                      Here's a rough guide to what flowers when, so you can plan
                      your visit around the species you most want to see:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table
                        className="w-full text-sm border-collapse"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <thead>
                          <tr className="bg-forest-50">
                            {["Flower", "Peak Month", "Colour", "Notes"].map(
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
                              "Himalayan Blue Poppy",
                              "July–Aug",
                              "🔵 Vivid blue",
                              "Rarest & most sought — Meconopsis aculeata",
                            ],
                            [
                              "Brahmakamal",
                              "Aug–Sep",
                              "⚪ White/cream",
                              "Sacred lotus of the Himalayas — blooms at night",
                            ],
                            [
                              "Cobra Lily",
                              "July–Aug",
                              "🟣 Purple-green",
                              "Dramatic hooded spathe — unmistakable",
                            ],
                            [
                              "Marsh Marigold",
                              "Jun–Jul",
                              "🟡 Bright yellow",
                              "First to bloom as snow melts",
                            ],
                            [
                              "Himalayan Primula",
                              "Jun–Jul",
                              "🩷 Pink/purple",
                              "Carpets the lower sections early season",
                            ],
                            [
                              "Anemone",
                              "July–Aug",
                              "⚪🩷 White/pink",
                              "Multiple species bloom simultaneously",
                            ],
                            [
                              "Geranium",
                              "Jul–Sep",
                              "🩷 Deep pink",
                              "One of the most abundant species — broad coverage",
                            ],
                            [
                              "Aconitum (Monkshood)",
                              "Aug–Sep",
                              "🔵 Deep blue",
                              "Toxic but spectacular in dense clusters",
                            ],
                            [
                              "Potentilla",
                              "Jul–Aug",
                              "🟡 Yellow",
                              "Low-growing, forms dense yellow mats",
                            ],
                            [
                              "Saussurea",
                              "Aug–Sep",
                              "🟣 Purple",
                              "High altitude specialist — found near snowline",
                            ],
                          ].map(([flower, month, colour, note], i) => (
                            <tr
                              key={flower}
                              className={
                                i % 2 === 0 ? "bg-white" : "bg-stone-50"
                              }
                            >
                              <td className="p-3 border border-stone-200 font-medium text-stone-800">
                                {flower}
                              </td>
                              <td className="p-3 border border-stone-200 text-stone-600">
                                {month}
                              </td>
                              <td className="p-3 border border-stone-200 text-stone-600">
                                {colour}
                              </td>
                              <td className="p-3 border border-stone-200 text-stone-500 text-xs">
                                {note}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Govindghat</h2>
                  <p>
                    All routes into the Valley of Flowers converge at
                    <strong> Govindghat</strong> — the road-head village on the
                    banks of the Alaknanda River, 273 km from Rishikesh, where
                    the motor road ends and the trek begins. Getting to
                    Govindghat is a journey in itself.
                  </p>

                  <section id="by-road">
                    <h3>By Road from Rishikesh</h3>
                    <p>
                      The most common approach is the overland route from
                      Rishikesh through the Char Dham highway — a spectacular
                      mountain road that passes through Devprayag, Rudraprayag,
                      Karnaprayag, Nandaprayag, and Chamoli before reaching
                      Joshimath (30 km before Govindghat) and then Govindghat
                      itself.
                    </p>
                    <ul>
                      <li>
                        <strong>Rishikesh to Govindghat:</strong> 273 km,
                        approximately 8–10 hours by car depending on road
                        conditions and landslides. The road is NH7 (Char Dham
                        highway) — scenic but winding with frequent stops at
                        confluences and viewpoints.
                      </li>
                      <li>
                        <strong>By GMOU/KSRTC bus:</strong> Government buses run
                        from Rishikesh ISBT to Joshimath daily (₹400–₹600, 9–10
                        hours). From Joshimath, local buses and shared jeeps
                        cover the 30 km to Govindghat (₹60–₹80).
                      </li>
                      <li>
                        <strong>By private taxi:</strong> Rishikesh to
                        Govindghat costs ₹4,500–₹6,000 for a sedan/SUV. Many
                        trekkers share costs by booking through their
                        guesthouses or meeting fellow trekkers at Rishikesh.
                      </li>
                      <li>
                        <strong>Break the journey at Joshimath:</strong>
                        Strongly recommended — stops the drive from being
                        exhausting and gives partial acclimatisation at 1,890 m
                        before the trek. Joshimath has good guesthouses
                        (₹600–₹1,500/night).
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Landslide season:</strong> The Rishikesh–
                      Govindghat road is prone to landslides during peak monsoon
                      (July–August) — the exact period when the valley is at
                      peak bloom. Always check road status on the BRO or
                      Uttarakhand tourism website before departing. Build buffer
                      days into your itinerary for road closures.
                    </div>
                  </section>

                  <section id="by-air">
                    <h3>By Air & Train</h3>
                    <ul>
                      <li>
                        <strong>By Air:</strong> Jolly Grant Airport, Dehradun
                        (DED) is the nearest airport — 295 km from Govindghat
                        (~10 hours by road). Daily flights from Delhi
                        (₹3,000–₹8,000). From Dehradun, take a taxi or bus to
                        Rishikesh (45 min), then onward to Govindghat.
                      </li>
                      <li>
                        <strong>By Train:</strong> Rishikesh (or Haridwar, 25 km
                        away) is the nearest railhead. Multiple trains from
                        Delhi daily — Yoga Express, Dehradun Shatabdi, Jan
                        Shatabdi. From Haridwar/Rishikesh, continue by bus or
                        taxi to Govindghat.
                      </li>
                      <li>
                        <strong>Helicopter (premium option):</strong>
                        Helicopter services operate from Govindghat to Ghangaria
                        (the base camp) during peak season — cutting the 14-km
                        walk to a 10-minute flight. Cost: ₹3,500–₹5,000 one way.
                        Book in advance through operators in Govindghat.
                        Weather-dependent and frequently cancelled.
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Permits ───────────────────────────────────────────── */}
                <section id="permits">
                  <h2>Permits & Entry Fees</h2>
                  <p>
                    Valley of Flowers National Park is a protected area under
                    the Wildlife Protection Act — all visitors require permits.
                    The process is straightforward but must be completed at the
                    park office in <strong>Ghangaria</strong>, not at
                    Govindghat.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        permit: "Valley of Flowers Entry Permit",
                        color: "border-forest-300 bg-forest-50",
                        items: [
                          {
                            label: "Indian nationals",
                            value: "₹150 per person per day",
                          },
                          {
                            label: "Foreign nationals",
                            value: "₹600 per person per day",
                          },
                          {
                            label: "Where to get",
                            value:
                              "Forest Department office, Ghangaria (open 7 AM – 1 PM and 2 PM – 5 PM)",
                          },
                          {
                            label: "Documents needed",
                            value:
                              "Aadhaar / Passport (original + 1 photocopy)",
                          },
                          {
                            label: "Validity",
                            value:
                              "Single day — renew daily if staying multiple days",
                          },
                          {
                            label: "Important",
                            value:
                              "Permits are NOT available at Govindghat. You must get them in Ghangaria on your first morning.",
                          },
                        ],
                      },
                      {
                        permit: "Hemkund Sahib Gurudwara",
                        color: "border-amber-300 bg-amber-50",
                        items: [
                          {
                            label: "Entry fee",
                            value: "Free (Gurudwara — no entry charge)",
                          },
                          {
                            label: "Langar",
                            value:
                              "Free community meals served throughout the day",
                          },
                          {
                            label: "Dress code",
                            value:
                              "Cover head (cloth scarves provided at entrance)",
                          },
                          {
                            label: "Timing",
                            value:
                              "Open June to early October (closes with first heavy snowfall)",
                          },
                          {
                            label: "Note",
                            value:
                              "The Hemkund trail starts from Ghangaria — same base camp as Valley of Flowers",
                          },
                        ],
                      },
                      {
                        permit: "Camera & Video Fees",
                        color: "border-sky-300 bg-sky-50",
                        items: [
                          {
                            label: "Still camera",
                            value:
                              "₹50 per day (Indian), ₹500 per day (foreign)",
                          },
                          {
                            label: "Video camera",
                            value:
                              "₹150 per day (Indian), ₹1,500 per day (foreign)",
                          },
                          {
                            label: "Professional filming",
                            value:
                              "Requires Wildlife Institute of India permission — apply months in advance",
                          },
                          {
                            label: "Drone",
                            value:
                              "Strictly prohibited inside the National Park boundaries",
                          },
                        ],
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
                          className="space-y-2"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {p.items.map(({ label, value }) => (
                            <div key={label} className="flex gap-3 text-sm">
                              <span className="text-stone-400 flex-shrink-0 w-36 text-xs pt-0.5">
                                {label}
                              </span>
                              <span className="text-stone-700 font-medium flex-1">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-stone-900 text-white rounded-xl p-5 my-6"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <h4
                      className="font-bold text-white mb-3 text-sm flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      📋 Documents to carry (2 photocopies each)
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      {[
                        "Aadhaar Card / Passport (original + 2 copies)",
                        "Passport-size photographs (2 copies)",
                        "Medical fitness certificate (for Hemkund Sahib if elderly)",
                        "Travel insurance documents",
                        "Emergency contact details",
                        "Hotel / guesthouse booking confirmation",
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

                {/* ── Trek Overview ─────────────────────────────────────── */}
                <section id="trek-overview">
                  <h2>The Trek Overview</h2>
                  <p>
                    The Valley of Flowers trek is a relatively straightforward
                    out-and-back trail with one main base camp. The total
                    round-trip distance from Govindghat is approximately 38 km,
                    broken into logical daily stages. There is no camping inside
                    the National Park — all trekkers must return to Ghangaria by
                    sunset each day.
                  </p>

                  <section id="govindghat-ghangaria">
                    <h3>Stage 1: Govindghat to Ghangaria</h3>
                    <img
                      src="/images/destinations/manali/rohtang-pass.jpg"
                      alt="Trail from Govindghat to Ghangaria along the Pushpawati River"
                      className="w-full rounded-xl my-6 h-64 object-cover"
                    />
                    <p>
                      The trek begins at <strong>Govindghat</strong> (1,828 m)
                      at the Laxman Ganga/Alaknanda confluence — a sacred
                      meeting of rivers marked by a small Gurudwara. From here,
                      a well-maintained trail climbs steadily along the
                      Pushpawati (Laxman Ganga) River through forest,
                      waterfalls, and small hamlets to reach
                      <strong> Ghangaria</strong> (3,048 m) — the sole
                      settlement before the park and your base for the entire
                      trek.
                    </p>

                    <div
                      className="grid sm:grid-cols-2 gap-4 my-5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { label: "Distance", value: "14 km (one way)" },
                        { label: "Duration", value: "5–7 hours" },
                        {
                          label: "Ascent",
                          value: "1,220 m (1,828 m to 3,048 m)",
                        },
                        {
                          label: "Difficulty",
                          value: "Moderate — long but well-graded",
                        },
                        {
                          label: "Trail surface",
                          value: "Paved/stone path for much of the route",
                        },
                        {
                          label: "Altitude gain",
                          value: "Significant — take it slow",
                        },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="bg-stone-50 rounded-lg p-3 border border-stone-200"
                        >
                          <span className="text-stone-400 text-xs block">
                            {label}
                          </span>
                          <span className="text-stone-800 font-semibold text-sm">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p>
                      The trail is well-marked and impossible to lose. There are
                      tea stalls and rest points at Pulna (3 km), Bhyundar
                      village (8 km), and Ghangharia itself. Most trekkers take
                      5–6 hours at a comfortable pace. Do not rush — the
                      altitude gain is significant and arriving exhausted at
                      Ghangaria affects the next day in the valley.
                    </p>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Leave Govindghat by 7 AM at
                      the latest. The stone path gets extremely crowded with
                      pilgrims heading to Hemkund Sahib after 8 AM. Early
                      starters get the trail quieter and cooler.
                    </div>
                  </section>

                  <section id="ghangaria-vof">
                    <h3>Stage 2: Ghangaria to Valley of Flowers</h3>
                    <p>
                      From Ghangaria, the Valley of Flowers trail branches left
                      (east) — the right fork leads to Hemkund Sahib. The walk
                      to the park entrance takes approximately 45 minutes over
                      easy terrain. From the entrance gate (where you show your
                      permit), the valley floor opens ahead of you.
                    </p>

                    <div
                      className="grid sm:grid-cols-2 gap-4 my-5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          label: "Distance",
                          value:
                            "3.5 km from Ghangaria to park gate + 6 km inside",
                        },
                        {
                          label: "Duration",
                          value:
                            "4–6 hours inside the valley (depends how slow you go)",
                        },
                        {
                          label: "Park entry",
                          value:
                            "7 AM – 5 PM (must exit before 5 PM — strictly enforced)",
                        },
                        {
                          label: "Trail inside park",
                          value:
                            "Flat to gentle gradient — the most accessible section of the entire trek",
                        },
                        {
                          label: "Trail end",
                          value:
                            "Pushpawati River source and glacier at the valley head",
                        },
                        {
                          label: "Photography",
                          value:
                            "All day but best light is morning (8–11 AM) and evening (3–5 PM)",
                        },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="bg-stone-50 rounded-lg p-3 border border-stone-200"
                        >
                          <span className="text-stone-400 text-xs block">
                            {label}
                          </span>
                          <span className="text-stone-800 font-semibold text-sm">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p>
                      The valley floor path is one of the most extraordinary
                      walks in India. For the first kilometre after the gate,
                      the trail is relatively open and the flowers carpet both
                      sides. By the time you're 2 km in, the valley walls rise
                      steeply around you and the scale becomes apparent. The
                      path continues to the snout of the Pushpawati glacier at
                      the valley head — about 6 km from the gate — where a
                      waterfall drops directly from the ice.
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Important rules inside the park:</strong> No
                      camping, no cooking, no fire, no collecting plants or
                      flowers, no littering, no straying off the marked trail,
                      no entry after 5 PM. Rangers patrol and fines are steep.
                      The rules exist because this is one of the most
                      ecologically sensitive habitats in the Himalayas.
                    </div>
                  </section>
                </section>

                {/* ── Hemkund Sahib ─────────────────────────────────────── */}
                <section id="hemkund-sahib">
                  <h2>Hemkund Sahib</h2>
                  <p>
                    The second great trek from Ghangaria climbs 6 km (one way)
                    to <strong>Hemkund Sahib</strong> at 4,329 metres — one of
                    the holiest Sikh shrines in the world, built on the banks of
                    a glacial lake ringed by seven snow-capped peaks. Guru
                    Gobind Singh, the tenth Sikh Guru, meditated here in a
                    previous life according to Sikh scripture — and the site
                    draws hundreds of thousands of pilgrims during the brief
                    open season.
                  </p>
                  <p>
                    The trek to Hemkund is significantly harder than the Valley
                    of Flowers — the altitude gain from Ghangaria (3,048 m) to
                    Hemkund (4,329 m) over 6 km is steep and continuous. The
                    lake itself, set in a natural amphitheatre of glaciated
                    peaks with the white marble Gurudwara reflected in its
                    ice-cold water, is one of the most dramatic religious
                    settings anywhere in the world.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
                    <h4
                      className="font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Hemkund Sahib — Key Facts
                    </h4>
                    <div
                      className="grid sm:grid-cols-2 gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          label: "Distance from Ghangaria",
                          value: "6 km one way",
                        },
                        { label: "Altitude", value: "4,329 m (14,203 ft)" },
                        {
                          label: "Difficulty",
                          value: "Hard — steep continuous ascent",
                        },
                        {
                          label: "Duration",
                          value: "3–4 hours up, 2–3 hours down",
                        },
                        { label: "Entry", value: "Free — no permit required" },
                        {
                          label: "Langar",
                          value: "Free food served all day at the Gurudwara",
                        },
                        {
                          label: "Season",
                          value: "June – early October (weather dependent)",
                        },
                        {
                          label: "Lake",
                          value: "Hemkund Lake — glacial, sacred, very cold",
                        },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">
                            {label}
                          </span>
                          <span className="text-stone-700 font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p>
                    The route to Hemkund passes through a section of the Valley
                    of Flowers' lower slopes — brahmakamal and aconitum grow
                    along the higher sections of the path in late August. Many
                    trekkers combine Hemkund and the Valley of Flowers on
                    separate days from the same Ghangaria base.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Leave Ghangaria for Hemkund
                    Sahib by 5:30–6:00 AM. The trail is shared with pilgrims and
                    gets extremely congested after 8 AM — slow-moving queues on
                    steep sections. Early starters arrive at the lake in clear
                    morning light before clouds build (by 11 AM most days).
                  </div>
                </section>

                {/* ── Flowers Guide ─────────────────────────────────────── */}
                <section id="flowers-guide">
                  <h2>Flowers to Look For</h2>
                  <p>
                    The Valley of Flowers contains over 300 species of flowering
                    plants across 17 families. You don't need to be a botanist
                    to be moved by it, but knowing what you're looking at
                    deepens the experience. Here are the highlights:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        name: "Himalayan Blue Poppy",
                        scientific: "Meconopsis aculeata",
                        emoji: "💙",
                        color: "bg-sky-50 border-sky-200",
                        when: "July – August",
                        desc: "The jewel of the valley. A luminous sky-blue poppy that grows on rocky slopes — the colour seems almost artificially vivid. Found scattered rather than in massed carpets, which makes spotting one feel like a discovery.",
                      },
                      {
                        name: "Brahmakamal",
                        scientific: "Saussurea obvallata",
                        emoji: "🤍",
                        color: "bg-stone-50 border-stone-200",
                        when: "August – September",
                        desc: "The most sacred flower of the Himalayas — the lotus of Brahma, used in Char Dham worship. A distinctive cream-coloured bloom enclosed in papery purple-green bracts. Found from 3,600 m upward. Blooms at night.",
                      },
                      {
                        name: "Cobra Lily",
                        scientific: "Arisaema tortuosum",
                        emoji: "💜",
                        color: "bg-purple-50 border-purple-200",
                        when: "July – August",
                        desc: "One of the valley's most dramatic plants — a deep purple-green hooded spathe that looks precisely like a rearing cobra. Unmistakable once seen. Grows in clusters along the valley walls and stream banks.",
                      },
                      {
                        name: "Monkshood (Aconitum)",
                        scientific: "Aconitum heterophyllum",
                        emoji: "🔵",
                        color: "bg-indigo-50 border-indigo-200",
                        when: "August – September",
                        desc: "Towers of deep blue-purple flowers on tall stalks that dominate the late-season valley palette. Beautiful but highly toxic — all parts of the plant are poisonous. Medicinal in traditional Ayurvedic practice.",
                      },
                      {
                        name: "Marsh Marigold",
                        scientific: "Caltha palustris",
                        emoji: "💛",
                        color: "bg-amber-50 border-amber-200",
                        when: "June – July",
                        desc: "Among the first flowers to appear as snow melts in June — bright yellow blooms that carpet the marshy sections of the valley floor. A signal that the season has begun.",
                      },
                      {
                        name: "Himalayan Geranium",
                        scientific: "Geranium wallichianum",
                        emoji: "🩷",
                        color: "bg-pink-50 border-pink-200",
                        when: "July – September",
                        desc: "One of the most abundant species in the valley — deep magenta-pink flowers that appear across the valley floor from July through September, forming the background fabric of the famous colour carpet.",
                      },
                    ].map((f) => (
                      <div
                        key={f.name}
                        className={`border ${f.color} rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{f.emoji}</span>
                          <div>
                            <h4
                              className="font-bold text-stone-900 text-sm"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {f.name}
                            </h4>
                            <p
                              className="text-stone-400 text-[10px] italic"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {f.scientific}
                            </p>
                          </div>
                        </div>
                        <p
                          className="text-xs text-forest-600 font-semibold mb-2"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Peak: {f.when}
                        </p>
                        <p
                          className="text-sm text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Wildlife ──────────────────────────────────────────── */}
                <section id="wildlife">
                  <h2>Wildlife in the Valley</h2>
                  <p>
                    The Valley of Flowers sits within the
                    <strong> Nanda Devi Biosphere Reserve</strong> — a UNESCO
                    World Heritage Site that protects one of the most biodiverse
                    Himalayan ecosystems remaining. The wildlife in the valley
                    is rarely seen but genuinely present, and patient, quiet
                    visitors are occasionally rewarded.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        animal: "Snow Leopard",
                        emoji: "🐆",
                        likelihood: "Very rare",
                        color: "bg-stone-50 border-stone-200",
                        note: "Present in the higher elevations above the valley walls. Tracks occasionally seen in snow. An encounter would be exceptional luck.",
                      },
                      {
                        animal: "Himalayan Brown Bear",
                        emoji: "🐻",
                        likelihood: "Uncommon",
                        color: "bg-amber-50 border-amber-200",
                        note: "Seen occasionally in the upper valley. Make noise while walking — bears avoid humans but unexpected encounters are dangerous.",
                      },
                      {
                        animal: "Blue Sheep (Bharal)",
                        emoji: "🐑",
                        likelihood: "Common",
                        color: "bg-sky-50 border-sky-200",
                        note: "Frequently seen on the rocky slopes above the valley floor. Herds of 20–30 are not unusual near the glacier snout.",
                      },
                      {
                        animal: "Musk Deer",
                        emoji: "🦌",
                        likelihood: "Occasional",
                        color: "bg-forest-50 border-forest-200",
                        note: "The critically endangered Himalayan musk deer inhabits the forested sections of the lower valley. Dawn and dusk sightings possible.",
                      },
                      {
                        animal: "Himalayan Monal",
                        emoji: "🦚",
                        likelihood: "Common",
                        color: "bg-purple-50 border-purple-200",
                        note: "Uttarakhand's state bird — a pheasant with extraordinary iridescent plumage. Frequently seen at the forest edges near Ghangaria and in the valley.",
                      },
                      {
                        animal: "Golden Eagle",
                        emoji: "🦅",
                        likelihood: "Regular",
                        color: "bg-orange-50 border-orange-200",
                        note: "Seen riding thermals above the valley walls most clear mornings. Lammergeiers (bearded vultures) also patrol the higher ridges.",
                      },
                    ].map((w) => (
                      <div
                        key={w.animal}
                        className={`border ${w.color} rounded-xl p-4`}
                      >
                        <div className="text-2xl mb-2">{w.emoji}</div>
                        <h4
                          className="font-bold text-stone-900 text-sm mb-1"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {w.animal}
                        </h4>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wide text-stone-500 block mb-2"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Likelihood: {w.likelihood}
                        </span>
                        <p
                          className="text-xs text-stone-600 leading-relaxed m-0"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {w.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Ghangaria ─────────────────────────────────────────── */}
                <section id="ghangaria-base">
                  <h2>Ghangaria — Your Base Camp</h2>
                  <p>
                    <strong>Ghangaria</strong> (3,048 m) is the sole settlement
                    between Govindghat and both trek destinations — a small
                    cluster of guesthouses, dhabas, a Forest Department office,
                    a medical post, and a BSNL mobile tower that provides the
                    last connectivity before the valley. It has no road access;
                    everything — food, building materials, fuel — arrives by
                    horse or on porters' backs.
                  </p>
                  <p>
                    Despite being a basic mountain settlement, Ghangaria has
                    enough facilities for a comfortable few days: warm
                    guesthouses, hot meals, a small medical centre (staffed
                    during peak season), battery charging points, and a bonfire
                    area at the larger guesthouses. It can feel crowded in peak
                    July–August — accommodation fills fast and dinners at the
                    dhabas have queues. The evenings are genuinely cold even in
                    summer (5–8°C) — bring warm layers.
                  </p>
                  <ul>
                    <li>
                      <strong>Connectivity:</strong> BSNL mobile signal (weak
                      but present) and limited satellite phone services. No
                      Airtel or Jio signal.
                    </li>
                    <li>
                      <strong>Medical:</strong> A basic medical post
                      (GMVN-operated) handles minor altitude-related issues. For
                      serious illness, evacuation is by horse or helicopter —
                      the nearest hospital is in Joshimath (30 km from
                      Govindghat by road).
                    </li>
                    <li>
                      <strong>Porters and horses:</strong> Available at
                      Govindghat and Pulna for carrying bags to Ghangaria.
                      ₹600–₹900 per bag for the 14 km. Horses for riding
                      ₹2,500–₹3,500 one way.
                    </li>
                  </ul>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    All accommodation for the Valley of Flowers trek is
                    concentrated in <strong>Ghangaria</strong> and at
                    Govindghat/Joshimath before and after the trek. Camping
                    inside the National Park is not permitted.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget (Ghangaria)",
                        icon: "🏕️",
                        range: "₹500–₹1,200/night",
                        picks: [
                          "Local family guesthouses (book in person)",
                          "GMVN Tourist Rest House (₹600–₹900)",
                          "Gurudwara Hemkund Sahib (free/donation, limited rooms)",
                          "Basic dorm beds at Sikh pilgrimage camp",
                        ],
                      },
                      {
                        tier: "Mid-Range (Ghangaria)",
                        icon: "🏡",
                        range: "₹1,200–₹3,000/night",
                        picks: [
                          "Hotel Deepak (one of the better options)",
                          "Snow View Guesthouse",
                          "Himalayan Cottage",
                          "Private rooms with attached bath (book ahead)",
                        ],
                      },
                      {
                        tier: "Before/After (Joshimath)",
                        icon: "🏨",
                        range: "₹800–₹4,000/night",
                        picks: [
                          "GMVN Tourist Bungalow Joshimath",
                          "Hotel Nandadevi",
                          "Auli Ski Resort (GMVN) — 16 km from Joshimath",
                          "Hotel Kamet",
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
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>⚠️ Book Ghangaria accommodation ahead:</strong>{" "}
                    During peak season (late July – mid August), Ghangaria's
                    limited guesthouses fill completely. There is no online
                    booking system for most — call directly (numbers available
                    from Joshimath tourism office) or have your travel agent
                    book ahead. Arriving without a reservation in peak season
                    risks sleeping on a dhaba floor.
                  </div>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat</h2>
                  <p>
                    Food in Ghangaria is functional rather than extraordinary —
                    everything is carried in by horse or porter, which limits
                    both variety and quality. But it's hot, filling, and
                    surprisingly affordable given the logistics. Never
                    underestimate the comfort of a dhaba meal after a 14-km
                    uphill day.
                  </p>
                  <ul>
                    <li>
                      <strong>Dal rice:</strong> The trekker's staple — thick
                      yellow dal with plain rice, served at every dhaba.
                      Nutritious, cheap (₹100–₹150), and available all day. Add
                      pickle and papad and it's a genuinely good meal after a
                      long day.
                    </li>
                    <li>
                      <strong>Chapati and sabzi:</strong> Whole wheat chapatis
                      with seasonal vegetable curry — the second dhaba staple.
                      Aloo (potato), gobi (cauliflower), and palak (spinach) are
                      most common.
                    </li>
                    <li>
                      <strong>Maggi:</strong> The universal Himalayan trek food
                      — instant noodles that cost ₹50–₹70 at trail-side stalls.
                      Available at Pulna, Bhyundar, and Ghangaria. The masala
                      version with a fried egg is the classic.
                    </li>
                    <li>
                      <strong>Langar at Hemkund Sahib:</strong> Free community
                      food served throughout the day at the Gurudwara — dal,
                      rice, roti, and kheer. The single best meal on the trek
                      and genuinely moving to participate in.
                    </li>
                    <li>
                      <strong>Pahari chai:</strong> Strong, sweet, ginger-
                      cardamom tea served in small glasses at every trail stop.
                      ₹20–₹30. Non-negotiable at every rest point.
                    </li>
                    <li>
                      <strong>Carry snacks from Joshimath:</strong> The best
                      preparation is buying dry fruits, energy bars, glucose
                      biscuits, and chocolate in Joshimath or Rishikesh. Prices
                      in Ghangaria are 30–50% higher than in the plains.
                    </li>
                  </ul>
                </section>

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Valley of Flowers Itinerary</h2>
                  <p>
                    Five days is the ideal length — it covers the full
                    Govindghat–Valley of Flowers–Hemkund Sahib circuit without
                    rushing, with a buffer for weather or road delays.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Rishikesh → Joshimath",
                        color: "bg-sky-700",
                        activities: [
                          "Depart Rishikesh by 6 AM (taxi or GMOU bus to Joshimath)",
                          "273 km, approximately 9 hours with stops — arrive afternoon",
                          "Devprayag confluence (rivers Bhagirathi + Alaknanda) — photo stop",
                          "Check in to Joshimath guesthouse — rest for acclimatisation",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Joshimath → Govindghat → Ghangaria",
                        color: "bg-sky-600",
                        activities: [
                          "Drive from Joshimath to Govindghat (30 km, 1 hour)",
                          "Begin trek from Govindghat at 7 AM sharp",
                          "Trek 14 km to Ghangaria (5–7 hours, 1,220 m ascent)",
                          "Arrive Ghangaria by 2–3 PM — get permit from Forest Dept (open till 5 PM)",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Valley of Flowers — Full Day",
                        color: "bg-forest-600",
                        activities: [
                          "Depart Ghangaria 6:30 AM — enter park by 7:15 AM (permits checked)",
                          "Walk the full 6 km valley floor to glacier snout and back",
                          "Slow down — sit, observe, photograph the flower carpets",
                          "Return to park gate before 5 PM (strictly enforced)",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Hemkund Sahib Trek",
                        color: "bg-amber-600",
                        activities: [
                          "Depart Ghangaria for Hemkund Sahib by 5:30 AM",
                          "6 km, 1,281 m ascent — 3–4 hours up, 2–3 hours down",
                          "Hemkund Lake at 4,329 m — dip in the icy sacred water (optional)",
                          "Langar at the Gurudwara, return to Ghangaria by 2 PM",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Ghangaria → Govindghat → Rishikesh",
                        color: "bg-stone-600",
                        activities: [
                          "Optional: Second valley visit (early morning, permit required)",
                          "Descend 14 km from Ghangaria to Govindghat (3–4 hours)",
                          "Drive from Govindghat to Rishikesh (9–10 hours)",
                          "Dinner at a Rishikesh riverside café — well earned",
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

                {/* ── Packing List ──────────────────────────────────────── */}
                <section id="packing-list">
                  <h2>Packing List</h2>
                  <p>
                    The Valley of Flowers trek is moderate in difficulty but
                    takes place during monsoon season at altitude — which means
                    rain, cold nights, and wet trails are guaranteed. Pack
                    accordingly.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 my-6">
                    {[
                      {
                        category: "Clothing",
                        emoji: "👕",
                        color: "bg-sky-50 border-sky-200",
                        items: [
                          "Waterproof rain jacket (non-negotiable — it will rain every afternoon)",
                          "Waterproof rain pants or pack cover",
                          "Warm mid-layer (fleece or down — nights at Ghangaria are cold)",
                          "Moisture-wicking base layer (2 sets)",
                          "Warm hat and gloves (for Hemkund Sahib)",
                          "Quick-dry trekking trousers (2 pairs)",
                          "Gaiters (for wet trail sections)",
                        ],
                      },
                      {
                        category: "Footwear",
                        emoji: "👟",
                        color: "bg-amber-50 border-amber-200",
                        items: [
                          "Waterproof trekking boots with ankle support (essential)",
                          "Gaiters for muddy sections",
                          "Lightweight camp sandals or flipflops for Ghangaria evenings",
                          "Wool or synthetic trekking socks (3 pairs minimum)",
                          "Spare dry socks in a waterproof bag",
                        ],
                      },
                      {
                        category: "Gear",
                        emoji: "🎒",
                        color: "bg-forest-50 border-forest-200",
                        items: [
                          "Trekking poles (particularly helpful on descent)",
                          "Headtorch with spare batteries",
                          "Daypack (25–30L) + larger bag for Ghangaria to store non-essentials",
                          "Dry bags / waterproof pack covers",
                          "Reusable water bottle (2L) — water available at streams",
                          "High-energy snacks (trail mix, energy bars, dry fruits)",
                          "Lightweight sit mat",
                        ],
                      },
                      {
                        category: "Documents & Safety",
                        emoji: "📋",
                        color: "bg-stone-50 border-stone-200",
                        items: [
                          "Aadhaar/Passport + 2 photocopies + 2 passport photos",
                          "Cash (₹5,000–₹8,000 minimum) — no ATMs in Ghangaria",
                          "Basic first aid kit (blister patches, Disprin, ORS, Diamox)",
                          "Pulse oximeter",
                          "Sunscreen SPF 50+ and UV-400 sunglasses",
                          "Insect repellent",
                          "Offline maps downloaded (Maps.me)",
                        ],
                      },
                      {
                        category: "Photography",
                        emoji: "📷",
                        color: "bg-purple-50 border-purple-200",
                        items: [
                          "Camera with macro lens capability (flowers reward close-up)",
                          "Extra memory cards and batteries (no charging in valley)",
                          "Waterproof camera bag or dry bag",
                          "Polarising filter (dramatically improves flower photography in overcast light)",
                          "Tripod or gorilla pod for low-light shots",
                          "No drone — strictly prohibited in the National Park",
                        ],
                      },
                      {
                        category: "Leave No Trace",
                        emoji: "🌿",
                        color: "bg-green-50 border-green-200",
                        items: [
                          "Reusable water bottle — avoid single-use plastic",
                          "Ziplock bags for packing out all waste",
                          "Biodegradable soap and toiletries",
                          "Trowel (for sites away from water sources — Ghangaria has toilets)",
                          "Do not pick flowers — it is illegal inside the National Park",
                          "Stay on the marked trail — the ecosystem is fragile",
                        ],
                      },
                    ].map((cat) => (
                      <div
                        key={cat.category}
                        className={`border ${cat.color} rounded-xl p-5`}
                      >
                        <h4
                          className="font-bold text-stone-900 mb-3 flex items-center gap-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          <span>{cat.emoji}</span> {cat.category}
                        </h4>
                        <ul className="space-y-1.5 m-0">
                          {cat.items.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-stone-600 flex items-start gap-2"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              <span className="text-forest-500 mt-0.5 flex-shrink-0 font-bold">
                                →
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
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
                          ["Joshimath stay/night", "₹600", "₹1,500", "₹3,500"],
                          ["Ghangaria stay/night", "₹700", "₹1,800", "₹3,000"],
                          ["Food per day (Ghangaria)", "₹300", "₹500", "₹800"],
                          ["VOF entry permit/day", "₹150", "₹150", "₹150"],
                          ["Camera fee/day", "₹50", "₹50", "₹150"],
                          [
                            "Porter (Govindghat–Ghangaria)",
                            "₹0 (self carry)",
                            "₹700",
                            "₹900",
                          ],
                          [
                            "Transport (Rishikesh–Govindghat)",
                            "₹400 (bus)",
                            "₹1,500 (shared taxi)",
                            "₹5,000 (private car)",
                          ],
                          [
                            "5-Day Total (estimate)",
                            "₹6,000",
                            "₹12,000",
                            "₹22,000",
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
                    * Helicopter from Govindghat to Ghangaria adds ₹3,500–₹5,000
                    one way but saves 5–7 hours of walking each way. If budget
                    allows, consider helicopter up (save energy) and trek down
                    (enjoy the scenery at your pace).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips</h2>
                  <ul>
                    <li>
                      <strong>Timing is everything — plan meticulously:</strong>{" "}
                      Unlike most treks, the Valley of Flowers has a window of
                      roughly 8 weeks where it's actually worth visiting for the
                      flowers. Plan for late July to mid-August and check bloom
                      reports from the Forest Department or recent trekker blogs
                      before booking.
                    </li>
                    <li>
                      <strong>Build buffer days for landslides:</strong> The
                      Rishikesh–Govindghat road is frequently blocked by
                      landslides in July–August — sometimes for 12–24 hours,
                      occasionally longer. Build at least one buffer day on each
                      end of your trip. Rigid schedules lead to missed treks and
                      abandoned trips.
                    </li>
                    <li>
                      <strong>Acclimatise at Joshimath:</strong> Don't drive
                      from Rishikesh (620 m) to Ghangaria (3,048 m) in a single
                      day. One night at Joshimath (1,890 m) makes a measurable
                      difference to your comfort on the trail.
                    </li>
                    <li>
                      <strong>Get your permit on arrival at Ghangaria:</strong>{" "}
                      The Forest Department permit office in Ghangaria opens at
                      7 AM and closes at 1 PM (and again 2–5 PM). If you arrive
                      in the evening on your first day, get the permit first
                      thing the next morning — you cannot enter the valley
                      without it.
                    </li>
                    <li>
                      <strong>Never pick flowers:</strong> It sounds obvious but
                      rangers report violations every season. Every species in
                      the valley is protected under the Wildlife Protection Act.
                      Picking, uprooting, or removing any plant material carries
                      a fine and possible arrest.
                    </li>
                    <li>
                      <strong>Afternoon rain is certain:</strong> In
                      July–August, clouds build by noon and rain begins by early
                      afternoon on most days. Plan to be inside the valley and
                      walking back toward the gate by 1–2 PM. The morning light
                      (8–11 AM) is also the best for flower photography.
                    </li>
                    <li>
                      <strong>Carry no ATM cash from Joshimath:</strong> There
                      are no ATMs beyond Joshimath. Withdraw enough for your
                      entire stay — permits, food, accommodation, porters,
                      emergencies — before leaving Joshimath. ₹5,000–₹8,000 is a
                      comfortable amount for 4 days in Ghangaria.
                    </li>
                    <li>
                      <strong>Respect the Hemkund Sahib pilgrimage:</strong> The
                      trail to Hemkund Sahib is also a major pilgrimage route
                      for Sikh devotees — many elderly and physically challenged
                      pilgrims make this climb every season. Give way on the
                      trail, be patient on congested sections, and don't treat
                      the sacred site as merely a trekking destination.
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
                          "Visit in late July – mid August for peak bloom",
                          "Acclimatise overnight at Joshimath before the trek",
                          "Get your Forest Dept permit in Ghangaria on arrival",
                          "Leave Govindghat and Ghangaria by 6–7 AM",
                          "Walk the full valley to the glacier snout",
                          "Eat langar at Hemkund Sahib Gurudwara",
                          "Carry ₹6,000+ cash — no ATMs beyond Joshimath",
                          "Build 1–2 buffer days for landslide delays",
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
                          "Pick, uproot, or remove any flowers — it's illegal",
                          "Enter the valley after 3 PM or stay past 5 PM",
                          "Fly a drone — strictly prohibited in the National Park",
                          "Leave trash anywhere on the trail or in the valley",
                          "Visit in June expecting full bloom — it's too early",
                          "Attempt the trek without waterproof gear",
                          "Underestimate the Govindghat–Ghangaria day — it's 14 km uphill",
                          "Skip Hemkund Sahib if physically able — it's extraordinary",
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
                  "Valley of Flowers",
                  "Uttarakhand",
                  "UNESCO Heritage",
                  "Trekking",
                  "Wildflowers",
                  "Hemkund Sahib",
                  "India",
                  "Chamoli",
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
