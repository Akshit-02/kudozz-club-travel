// src/app/blog/rishikesh-adventure-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Rishikesh Travel Guide 2025: Adventure, Yoga, Rafting & More",
  description:
    "The complete Rishikesh travel guide for 2025. White-water rafting, bungee jumping, yoga retreats, Ganga aarti, best cafes, where to stay, and everything you need to plan the perfect trip.",
  keywords:
    "Rishikesh travel guide, Rishikesh rafting, Rishikesh yoga, Rishikesh bungee jumping, Laxman Jhula, Ganga aarti Rishikesh, things to do in Rishikesh, Uttarakhand travel",
  openGraph: {
    title: "Rishikesh Travel Guide 2025: Adventure, Yoga, Rafting & More",
    description:
      "White-water rafting, bungee jumping, yoga retreats and Ganga sunsets — the complete guide to Rishikesh.",
    url: "https://explore.kudozz.in/blog/rishikesh-adventure-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/related/rishikesh.jpg",
        width: 1200,
        height: 630,
        alt: "Rishikesh Ganges river and suspension bridge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishikesh Travel Guide 2025",
    description:
      "Adventure, yoga, rafting and Ganga aarti — everything you need to plan your Rishikesh trip.",
    images: ["/images/related/rishikesh.jpg"],
  },
  alternates: {
    canonical: "https://explore.kudozz.in/blog/rishikesh-adventure-guide",
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
            "Rishikesh Travel Guide 2025: Adventure, Yoga, Rafting & More",
          description:
            "The complete Rishikesh travel guide for 2025 — rafting, yoga, bungee, Ganga aarti, cafes, stays and insider tips.",
          image: "https://explore.kudozz.in/images/related/rishikesh.jpg",
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
            "@id": "https://explore.kudozz.in/blog/rishikesh-adventure-guide",
          },
          about: {
            "@type": "Place",
            name: "Rishikesh",
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
                name: "Rishikesh Adventure Guide",
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
  { id: "introduction", title: "Why Rishikesh?", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Rishikesh", level: 2 },
  { id: "adventure", title: "Adventure Activities", level: 2 },
  { id: "rafting", title: "→ White-Water Rafting", level: 3 },
  { id: "bungee", title: "→ Bungee Jumping", level: 3 },
  { id: "camping", title: "→ Camping & Cliff Jumping", level: 3 },
  { id: "zip-line", title: "→ Zip-line & Giant Swing", level: 3 },
  { id: "trekking", title: "→ Trekking & Hiking", level: 3 },
  { id: "yoga", title: "Yoga & Wellness", level: 2 },
  { id: "top-places", title: "Top Places to Visit", level: 2 },
  { id: "laxman-jhula", title: "→ Laxman Jhula", level: 3 },
  { id: "ram-jhula", title: "→ Ram Jhula", level: 3 },
  { id: "ganga-aarti", title: "→ Ganga Aarti", level: 3 },
  { id: "beatles-ashram", title: "→ Beatles Ashram", level: 3 },
  { id: "neelkanth", title: "→ Neelkanth Mahadev", level: 3 },
  { id: "cafes", title: "Café Culture & Food", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "itinerary", title: "5-Day Itinerary", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Travel Tips", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RishikeshPage() {
  return (
    <>
      <ArticleSchema />
      <SiteHeader />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/related/rishikesh.jpg"
              alt="Rishikesh — Ganges river, suspension bridge and Himalayan foothills"
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
                { label: "Rishikesh", href: null },
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
              {["Rishikesh", "Uttarakhand", "Adventure", "Yoga", "Rafting"].map(
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
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-5 leading-[1.08] max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Rishikesh Travel Guide 2025: Adventure, Yoga, Rafting & More
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Where the Ganges roars through the Himalayan foothills — Rishikesh
              is India's adventure capital, yoga heartland, and one of the most
              spiritually electric places you'll ever stand.
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
                18 min read
              </span>
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Uttarakhand, India
              </span>
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                3,800 words
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
                  <h2>Why Rishikesh?</h2>
                  <p>
                    There is a moment, usually around dawn, when you're standing
                    on the banks of the Ganga in Rishikesh — the river silver
                    and roaring below you, incense drifting from a nearby
                    temple, a dozen orange-robed sadhus seated in meditation on
                    the ghats — when you understand exactly why this place has
                    been drawing seekers for thousands of years.
                  </p>
                  <p>
                    But <strong>Rishikesh</strong> is not just a spiritual
                    destination. It is also India's undisputed adventure
                    capital. The same Ganges that pilgrims bathe in also runs
                    Grade III–IV rapids that will rattle your bones. The same
                    Himalayan foothills where yogis meditate are laced with
                    trekking trails, zip-lines, and the highest commercial
                    bungee jump in India. In Rishikesh, you can chant at an
                    evening aarti and do a 30-metre bungee jump the same
                    afternoon. Very few places in the world offer that.
                  </p>
                  <p>
                    Add to this a thriving café scene, excellent international
                    food, a vibrant backpacker community, and surprisingly good
                    accommodation at every budget — and you have a destination
                    that rarely disappoints. This guide covers all of it.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-forest-800 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🙏</span> Rishikesh at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "State",
                          value: "Uttarakhand, India",
                        },
                        {
                          icon: "🏔️",
                          label: "Altitude",
                          value: "356 m (1,168 ft)",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Sep – Jun" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Dehradun (45 km)",
                        },
                        {
                          icon: "🚆",
                          label: "Nearest Railway",
                          value: "Haridwar (25 km)",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹800 – ₹3,500",
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
                  <h2>Best Time to Visit Rishikesh</h2>
                  <p>
                    Rishikesh is a year-round destination, but some seasons are
                    dramatically better than others — particularly for adventure
                    activities.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Best overall — our pick",
                        text: "Post-monsoon Rishikesh is magical. The Ganga is full and powerful (best rafting), the air is crystal clear, temperatures are perfect (15–28°C), and crowds are manageable. October is peak.",
                      },
                      {
                        season: "Feb – May",
                        emoji: "🌸",
                        color: "bg-pink-50 border-pink-200",
                        mood: "Great for yoga & culture",
                        text: "The International Yoga Festival (March) draws thousands. Pleasant temperatures, all activities running. Gets progressively hotter through May (up to 38°C). Busy around Holi and Easter.",
                      },
                      {
                        season: "Jun – Aug (Monsoon)",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Rafting suspended",
                        text: "Rafting is completely shut down June–September for safety — the Ganga floods. Heavy rainfall, landslides on nearby roads. Lush green scenery but limited adventure activities. Avoid for adventure trips.",
                      },
                      {
                        season: "Dec – Jan",
                        emoji: "❄️",
                        color: "bg-stone-50 border-stone-200",
                        mood: "Cold but peaceful",
                        text: "Temperatures drop to 5–8°C at night. Fewer crowds, cheaper accommodation. Rafting runs on calmer stretches. Great for yoga retreats and spiritual immersion if you don't mind the cold.",
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
                    <strong>Our pick:</strong> October. The Ganga is at its most
                    powerful post-monsoon (Grade III–IV rapids), the air is
                    perfectly clear, and you'll catch the tail end of the
                    International Yoga Festival buzz. Book rafting and bungee at
                    least a week in advance.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Rishikesh</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Jolly Grant Airport, Dehradun
                      (DED) is 45 km from Rishikesh. IndiGo, Air India, and
                      SpiceJet fly daily from Delhi (50 min). Taxi from airport
                      to Rishikesh: ₹700–₹900. Auto/cab share: ₹200–₹300.
                    </li>
                    <li>
                      <strong>By Train:</strong> The nearest major railhead is
                      Haridwar Junction (25 km), well-connected from Delhi
                      (Shatabdi: 4 hrs), Mumbai, and most major cities. From
                      Haridwar, shared autos to Rishikesh cost ₹50–₹80. There's
                      also a smaller Rishikesh station (limited trains).
                    </li>
                    <li>
                      <strong>By Bus (Delhi):</strong> UPSRTC and GMOU run
                      overnight and day buses from Delhi's ISBT Kashmiri Gate
                      (₹350–₹700, 6–7 hours). Several private operators run
                      Volvo buses (₹600–₹900). Most drop at Haridwar or
                      Rishikesh bus stand.
                    </li>
                    <li>
                      <strong>By Car:</strong> Delhi to Rishikesh is ~240 km via
                      NH334 (Meerut–Haridwar route), approximately 5–6 hours
                      depending on traffic. The expressway section makes it very
                      comfortable. Parking near Laxman Jhula is limited — park
                      at the main lots and walk.
                    </li>
                  </ul>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Stay in Tapovan or Laxman Jhula
                    area — not Rishikesh city proper. The city itself is
                    congested and lacks character. The charm of Rishikesh is
                    entirely on the riverside, north of the city.
                  </div>
                </section>

                {/* ── Adventure ─────────────────────────────────────────── */}
                <section id="adventure">
                  <h2>Adventure Activities in Rishikesh</h2>
                  <p>
                    Rishikesh runs the full spectrum of adventure — from
                    accessible family-friendly activities to genuinely
                    adrenaline-spiking experiences that will have you talking
                    for years. Here's the full breakdown.
                  </p>

                  <section id="rafting">
                    <h3>White-Water Rafting</h3>
                    <img
                      src="/images/related/rishikesh.jpg"
                      alt="White-water rafting on the Ganges in Rishikesh"
                      className="w-full rounded-xl my-6 h-72 object-cover"
                    />
                    <p>
                      Rafting on the Ganga is the centrepiece of the Rishikesh
                      adventure experience. The river has several distinct
                      stretches, each suited to different skill levels and
                      appetites for chaos.
                    </p>

                    <div
                      className="overflow-x-auto my-6"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-forest-50">
                            {[
                              "Stretch",
                              "Distance",
                              "Grade",
                              "Duration",
                              "Price",
                              "Best for",
                            ].map((h) => (
                              <th
                                key={h}
                                className="text-left p-3 border border-stone-200 font-semibold text-stone-700 whitespace-nowrap"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            [
                              "Brahmpuri",
                              "9 km",
                              "II–III",
                              "1.5 hrs",
                              "₹600–₹800",
                              "Beginners, families",
                            ],
                            [
                              "Shivpuri",
                              "16 km",
                              "III–IV",
                              "2.5 hrs",
                              "₹900–₹1,200",
                              "Most popular",
                            ],
                            [
                              "Marine Drive",
                              "24 km",
                              "III–IV",
                              "3.5 hrs",
                              "₹1,200–₹1,600",
                              "Experienced rafters",
                            ],
                            [
                              "Kaudiyala",
                              "36 km",
                              "IV–V",
                              "5–6 hrs",
                              "₹1,800–₹2,500",
                              "Advanced / thrill seekers",
                            ],
                          ].map((row, i) => (
                            <tr
                              key={row[0]}
                              className={
                                i % 2 === 0 ? "bg-white" : "bg-stone-50"
                              }
                            >
                              {row.map((cell, j) => (
                                <td
                                  key={j}
                                  className={`p-3 border border-stone-200 text-stone-600 ${j === 0 ? "font-semibold text-stone-800" : ""}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <ul>
                      <li>
                        <strong>Season:</strong> October–May only. Completely
                        shut during monsoon (June–September) — the Ganga is
                        dangerously swollen and authorities enforce strict
                        closure.
                      </li>
                      <li>
                        <strong>What's included:</strong> Life jacket, helmet,
                        paddle, guide, and usually a camp lunch (on longer
                        stretches).
                      </li>
                      <li>
                        <strong>Book ahead:</strong> October weekends sell out
                        fast. Book your slot 5–7 days ahead with any registered
                        operator.
                      </li>
                      <li>
                        <strong>Best operators:</strong> Red Chilli Adventure,
                        Aquaterra Adventures, De-N-As Water Sports — all
                        ATOAI-certified and reliable.
                      </li>
                    </ul>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>⚠️ Safety note:</strong> Only book with ATOAI
                      (Adventure Tour Operators Association of India) certified
                      operators. Avoid unlicensed touts on the riverbank who
                      offer suspiciously cheap rates. Your life jacket must be
                      Coast Guard-approved — check before you get in the raft.
                    </div>
                  </section>

                  <section id="bungee">
                    <h3>Bungee Jumping</h3>
                    <p>
                      At 83 metres, the bungee at{" "}
                      <strong>Jumpin Heights</strong> in Mohan Chatti (15 km
                      from Rishikesh) is the highest fixed-platform commercial
                      bungee jump in India. It was designed by New Zealand
                      experts, uses internationally certified equipment, and has
                      an impeccable safety record since opening in 2010.
                    </p>
                    <ul>
                      <li>
                        <strong>Cost:</strong> ₹3,550 per jump (includes video
                        certificate)
                      </li>
                      <li>
                        <strong>Weight limit:</strong> 40–110 kg
                      </li>
                      <li>
                        <strong>Age limit:</strong> 12+ years (with parental
                        consent under 18)
                      </li>
                      <li>
                        <strong>Timing:</strong> 8:30 AM – 5:00 PM daily
                      </li>
                      <li>
                        <strong>Book ahead:</strong> Online at jumpinheights.com
                        — walk-ins accepted but weekends fill up.
                      </li>
                    </ul>
                    <p>
                      Jumpin Heights also operates a{" "}
                      <strong>Giant Swing</strong> (₹3,550) and a{" "}
                      <strong>Flying Fox zip-line</strong> (₹1,550) at the same
                      location. Combine all three for a half-day adrenaline
                      session.
                    </p>
                  </section>

                  <section id="camping">
                    <h3>Riverside Camping & Cliff Jumping</h3>
                    <p>
                      Camping on the Ganga riverbanks between Shivpuri and
                      Marine Drive is one of Rishikesh's most beloved
                      experiences. A dozen or so established camp operators set
                      up Swiss tents, bonfire pits, and basic washrooms directly
                      on the sandy banks. You fall asleep to the sound of the
                      river and wake up to mountains.
                    </p>
                    <ul>
                      <li>
                        <strong>Cost:</strong> ₹1,500–₹3,500 per person per
                        night (usually includes dinner, breakfast, and a
                        bonfire)
                      </li>
                      <li>
                        <strong>Best camps:</strong> Camp Shivpuri, Wanderlust
                        Camp, Aquaterra Camp
                      </li>
                      <li>
                        <strong>Cliff jumping:</strong> Natural rock ledges at
                        Marine Drive (5–8m jumps into the Ganga) — free, just
                        requires a guide or local who knows safe jump points
                      </li>
                    </ul>
                    <div
                      className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> Book a 2-day/1-night package
                      that combines rafting (Day 1 afternoon), camping and
                      bonfire (night), and kayaking or cliff jumping (Day 2
                      morning). Most operators offer this for ₹2,500–₹4,000
                      all-inclusive.
                    </div>
                  </section>

                  <section id="zip-line">
                    <h3>Zip-line & Giant Swing</h3>
                    <p>
                      The <strong>Flying Fox</strong> at Jumpin Heights is a
                      1,000-metre zip-line across a forested Himalayan gorge at
                      speeds up to 160 km/h — the longest and fastest in India.
                      The views across the Ganga valley as you fly above the
                      canopy are spectacular. Cost: ₹1,550.
                    </p>
                    <p>
                      The <strong>Giant Swing</strong> at the same venue takes
                      you 83 metres out over the gorge on a pendulum arc — less
                      freefall than bungee but arguably more sustained terror.
                      Cost: ₹3,550.
                    </p>
                  </section>

                  <section id="trekking">
                    <h3>Trekking & Hiking Around Rishikesh</h3>
                    <p>
                      Rishikesh sits at the gateway to some of Uttarakhand's
                      most celebrated trekking terrain. Several excellent day
                      and overnight hikes are accessible directly from town.
                    </p>
                    <ul>
                      <li>
                        <strong>Kunjapuri Temple Trek:</strong> 3 km each way,
                        easy–moderate. Sunrise views of the Garhwal Himalaya
                        from the temple at 1,676 m. Start at 4:30 AM from
                        Rishikesh for the dawn show.
                      </li>
                      <li>
                        <strong>Neelkanth Mahadev Trek:</strong> 12 km each way
                        through dense forest. One of the most sacred temples in
                        Uttarakhand. Can be done as a full-day hike or by road.
                      </li>
                      <li>
                        <strong>Neer Garh Waterfall:</strong> 3 km easy walk
                        from Laxman Jhula. A two-tier waterfall through forest.
                        Great for a morning stroll.
                      </li>
                      <li>
                        <strong>Patna Waterfall:</strong> 7 km from Laxman
                        Jhula. Less visited than Neer Garh, equally beautiful.
                        Combined hike possible (both waterfalls in 4 hours).
                      </li>
                      <li>
                        <strong>Rajaji National Park day safari:</strong> 20 km
                        from Rishikesh. Elephant, leopard, and tiger habitat.
                        Jeep safaris available from ₹3,500.
                      </li>
                    </ul>
                  </section>
                </section>

                {/* ── Yoga ──────────────────────────────────────────────── */}
                <section id="yoga">
                  <h2>Yoga & Wellness in Rishikesh</h2>
                  <p>
                    The Beatles came here in 1968 to study Transcendental
                    Meditation with Maharishi Mahesh Yogi and wrote much of the
                    White Album in an ashram above the Ganga. That moment put
                    Rishikesh on the world's spiritual map permanently — and
                    today the city is home to over 200 registered yoga schools,
                    dozens of ashrams, and arguably the highest concentration of
                    serious yoga teachers anywhere outside of a Mysore shala.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 my-6">
                    {[
                      {
                        type: "Drop-in Classes",
                        icon: "🧘",
                        color: "border-forest-200 bg-forest-50",
                        desc: "Most ashrams and schools offer single-class drop-ins for ₹200–₹500. Parmarth Niketan runs free morning yoga on the ghats at 6 AM daily — anyone can join.",
                        picks: [
                          "Parmarth Niketan (free morning class)",
                          "Yoga Niketan",
                          "Sivananda Ashram",
                        ],
                      },
                      {
                        type: "Yoga Teacher Training (YTT)",
                        icon: "📜",
                        color: "border-amber-200 bg-amber-50",
                        desc: "200-hour and 300-hour YTT courses are Rishikesh's signature offering. Run over 3–4 weeks, internationally certified, typically ₹35,000–₹80,000 all-inclusive.",
                        picks: [
                          "Rishikesh Yog Peeth",
                          "Himalayan Yoga Institute",
                          "Vinyasa Yoga Academy",
                        ],
                      },
                      {
                        type: "Meditation Retreats",
                        icon: "🕯️",
                        color: "border-sky-200 bg-sky-50",
                        desc: "3–10 day silent or guided meditation retreats available throughout the year. Vipassana 10-day silent courses at Dhamma Sikhara (free, by donation).",
                        picks: [
                          "Dhamma Sikhara (Vipassana)",
                          "Anand Prakash Ashram",
                          "Phool Chatti Ashram",
                        ],
                      },
                      {
                        type: "Ayurveda & Wellness",
                        icon: "🌿",
                        color: "border-stone-200 bg-stone-50",
                        desc: "Panchakarma treatments, Ayurvedic consultations, and herbal therapies are widely available. Sessions from ₹1,000; full treatment packages from ₹8,000/week.",
                        picks: [
                          "Kairali Ayurvedic Centre",
                          "Ananda in the Himalayas (luxury)",
                          "Local Ayurvedic clinics near Ram Jhula",
                        ],
                      },
                    ].map((y) => (
                      <div
                        key={y.type}
                        className={`border ${y.color} rounded-xl p-5`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{y.icon}</span>
                          <h4
                            className="font-bold text-stone-900 text-sm"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {y.type}
                          </h4>
                        </div>
                        <p
                          className="text-sm text-stone-600 leading-relaxed mb-3"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {y.desc}
                        </p>
                        <div style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {y.picks.map((p) => (
                            <div
                              key={p}
                              className="text-xs text-forest-700 flex items-center gap-1.5"
                            >
                              <span className="text-forest-400">→</span> {p}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> The International Yoga Festival
                    at Parmarth Niketan (first week of March) is the world's
                    largest yoga gathering — 4,000+ participants, 100+ teachers,
                    free to attend. If your dates align, don't miss it.
                  </div>
                </section>

                {/* ── Top Places ────────────────────────────────────────── */}
                <section id="top-places">
                  <h2>Top Places to Visit in Rishikesh</h2>

                  <section id="laxman-jhula">
                    <h3>Laxman Jhula</h3>
                    <p>
                      The iconic <strong>Laxman Jhula</strong> suspension bridge
                      — 450 feet long, swaying gently over the jade-green Ganga
                      — is the defining image of Rishikesh. Built in 1939, it
                      connects Tapovan on the east bank to Jonk on the west, and
                      crossing it (dodging cows, sadhus, and monkeys
                      simultaneously) is a Rishikesh rite of passage.
                    </p>
                    <p>
                      The bridge itself was closed for repairs in 2019 and a new
                      pedestrian bridge now stands in its place. The area around
                      Laxman Jhula — with its riverside cafes, rooftop
                      restaurants, yoga studios, and temple bells — remains the
                      beating heart of traveller Rishikesh.
                    </p>
                  </section>

                  <section id="ram-jhula">
                    <h3>Ram Jhula</h3>
                    <p>
                      <strong>Ram Jhula</strong> (also called Shivananda Jhula)
                      is a larger suspension bridge 3 km south of Laxman Jhula,
                      flanked by two major ashrams — Parmarth Niketan on the
                      east bank and Shivananda Ashram on the west. The bridge is
                      the main thoroughfare for ashram visitors and pilgrims.
                      The sunset view from the bridge, with the river glowing
                      orange and temple bells ringing, is one of the most
                      beautiful moments in Rishikesh.
                    </p>
                  </section>

                  <section id="ganga-aarti">
                    <h3>Ganga Aarti at Parmarth Niketan</h3>
                    <p>
                      Every evening at sunset, the ghats at Parmarth Niketan
                      erupt into one of India's most spectacular religious
                      ceremonies. <strong>Ganga Aarti</strong> involves priests
                      swinging enormous brass lamps in choreographed patterns
                      over the river while hundreds of devotees sing hymns,
                      float flower diyas downstream, and release lanterns into
                      the sky. The air smells of marigold and sandalwood.
                    </p>
                    <p>
                      It runs every evening year-round, beginning at sunset
                      (typically 6:00–7:00 PM). Free to attend — arrive 30
                      minutes early for a good spot near the river. Respectful
                      dress required (shoulders and knees covered).
                    </p>
                    <div
                      className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <strong>💡 Pro Tip:</strong> The Haridwar Ganga Aarti at
                      Har Ki Pauri (25 km away) is even more spectacular in
                      scale — 10,000+ people on a good night. Do both if you're
                      spending more than 3 days in the area.
                    </div>
                  </section>

                  <section id="beatles-ashram">
                    <h3>The Beatles Ashram (Chaurasi Kutia)</h3>
                    <p>
                      The abandoned ashram where John, Paul, George, and Ringo
                      lived and composed in early 1968 is now a forest-covered
                      ruin that has been transformed into an unlikely open-air
                      art gallery. Known officially as Chaurasi Kutia, it sits
                      on a forested hillside above the Ganga and has become
                      completely covered in psychedelic murals painted by
                      artists from around the world.
                    </p>
                    <p>
                      Walking through the overgrown meditation domes, crumbling
                      meditation caves, and painted corridors — with the sound
                      of the Ganga far below — is a genuinely surreal
                      experience. Entry: ₹150 for Indians, ₹600 for foreigners.
                      Open 9 AM – 5 PM. Located near Laxman Jhula on the east
                      bank.
                    </p>
                  </section>

                  <section id="neelkanth">
                    <h3>Neelkanth Mahadev Temple</h3>
                    <p>
                      Perched at 1,330 metres in the Narendra Nagar hills, 22 km
                      from Rishikesh, <strong>Neelkanth Mahadev</strong> is one
                      of the most revered Shiva temples in India. According to
                      Hindu mythology, this is where Shiva drank the poison
                      (halahal) that emerged during the churning of the cosmic
                      ocean, turning his throat blue (neela = blue, kanth =
                      throat).
                    </p>
                    <p>
                      The temple itself is architecturally striking — a white
                      marble shikhara in a deep forest setting. The 12-km forest
                      trek from Laxman Jhula is highly recommended over the road
                      for atmosphere. Tens of thousands of pilgrims arrive here
                      during Shivratri and Sawan month.
                    </p>
                  </section>
                </section>

                {/* ── Cafes & Food ──────────────────────────────────────── */}
                <section id="cafes">
                  <h2>Café Culture & Food in Rishikesh</h2>
                  <p>
                    Rishikesh is a legally dry city — alcohol is banned within
                    the municipal limits. What you lose in beer you gain in
                    excellent coffee, fresh juice bars, and a remarkably diverse
                    vegetarian and vegan food scene built up over decades of
                    international visitor culture. The café scene here rivals
                    cities five times its size.
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        name: "Little Buddha Café",
                        vibe: "Backpacker classic",
                        location: "Laxman Jhula area",
                        price: "₹",
                        must: "Israeli breakfast platter, banana pancakes",
                        desc: "Three-storey riverside café with the best Ganges view in town. Consistently excellent food, slow service (which adds to the charm). Has been a Rishikesh institution for 20+ years.",
                      },
                      {
                        name: "Chotiwala",
                        vibe: "Traditional thali",
                        location: "Ram Jhula, both banks",
                        price: "₹",
                        must: "Full thali (unlimited), paneer dishes",
                        desc: "The most famous local restaurant in Rishikesh — the two competing Chotiwala restaurants (original vs rival) at either end of Ram Jhula bridge have been feuding since the 1980s. The food at both is excellent.",
                      },
                      {
                        name: "Oasis Restaurant",
                        vibe: "Rooftop dining",
                        location: "Tapovan",
                        price: "₹₹",
                        must: "Dal makhani, wood-fired pizza",
                        desc: "One of the better rooftop restaurants with Himalayan foothills views. Surprisingly good wood-fired pizzas alongside excellent North Indian food.",
                      },
                      {
                        name: "Prem's Café",
                        vibe: "Healthy & wholesome",
                        location: "Laxman Jhula",
                        price: "₹₹",
                        must: "Avocado toast, homemade granola, fresh juices",
                        desc: "The go-to for clean eating in Rishikesh. Superfood bowls, gluten-free options, organic coffee, and a peaceful garden setting. Popular with long-term yoga retreat guests.",
                      },
                      {
                        name: "Café Delmar",
                        vibe: "Bohemian garden",
                        location: "Near Ram Jhula",
                        price: "₹₹",
                        must: "Seabuckthorn lemonade, hummus wrap",
                        desc: "One of the most loved cafes in Rishikesh for its fairy-lit garden, eclectic music, and excellent Middle Eastern–Indian fusion menu. Best spot for an evening hangout.",
                      },
                    ].map((café) => (
                      <div
                        key={café.name}
                        className="bg-white border border-stone-200 rounded-xl p-5 hover:border-forest-200 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4
                              className="font-bold text-stone-900"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {café.name}
                            </h4>
                            <div
                              className="flex flex-wrap gap-2 mt-1"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              <span className="text-xs text-forest-600 font-medium">
                                {café.vibe}
                              </span>
                              <span className="text-stone-300">·</span>
                              <span className="text-xs text-stone-400">
                                📍 {café.location}
                              </span>
                              <span className="text-stone-300">·</span>
                              <span className="text-xs text-amber-600 font-semibold">
                                {café.price}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p
                          className="text-sm text-stone-600 leading-relaxed mb-2"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {café.desc}
                        </p>
                        <p
                          className="text-xs text-forest-700 font-medium"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          Must-order: {café.must}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Rishikesh</h2>
                  <p>
                    Stay in the <strong>Laxman Jhula / Tapovan</strong> area for
                    the best atmosphere — riverside cafes, yoga studios, and
                    easy access to adventure operators. Ram Jhula is quieter and
                    more ashram-oriented. Avoid the city proper (Rishikesh Main)
                    — it's noisy, congested, and lacks the riverside charm.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹400–₹1,200/night",
                        picks: [
                          "Zostel Rishikesh (dorms)",
                          "The Hosteller Rishikesh",
                          "Ganga Kinare Guest House",
                          "Shiv Shakti Ashram (dorms)",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,200–₹4,000/night",
                        picks: [
                          "Aloha on the Ganges",
                          "Divine Ganga Cottage",
                          "Bunk Hive (boutique hostel)",
                          "Hotel Surya",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "✨",
                        range: "₹6,000–₹30,000+/night",
                        picks: [
                          "Ananda in the Himalayas",
                          "Vana Malsi Estate",
                          "Camp Aquaterra (riverside luxury)",
                          "Rishi View Retreat",
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

                {/* ── Itinerary ─────────────────────────────────────────── */}
                <section id="itinerary">
                  <h2>5-Day Rishikesh Itinerary</h2>
                  <p>
                    This itinerary blends adventure, spirituality, and downtime
                    — covering all the highlights without feeling rushed.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Evening Aarti",
                        color: "bg-forest-600",
                        activities: [
                          "Arrive and check in to Laxman Jhula / Tapovan area",
                          "Afternoon walk across the new pedestrian bridge",
                          "Explore the riverside cafes — coffee at Little Buddha",
                          "Sunset Ganga Aarti at Parmarth Niketan (6 PM)",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "White-Water Rafting Day",
                        color: "bg-sky-600",
                        activities: [
                          "Morning: Shivpuri rafting (16 km, Grade III–IV)",
                          "Cliff jumping at Marine Drive after the raft",
                          "Late lunch at a riverside camp (usually included)",
                          "Evening: Free yoga class at Parmarth Niketan ghats",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Bungee + Beatles Ashram",
                        color: "bg-amber-600",
                        activities: [
                          "Morning 8:30 AM: Bungee jump at Jumpin Heights",
                          "Flying Fox zip-line (combo deal available)",
                          "Afternoon: Beatles Ashram (Chaurasi Kutia)",
                          "Neer Garh Waterfall evening walk",
                        ],
                      },
                      {
                        day: "Day 4",
                        title: "Yoga, Kunjapuri & Haridwar",
                        color: "bg-forest-500",
                        activities: [
                          "4:30 AM: Kunjapuri Temple sunrise trek (3 km)",
                          "Morning yoga class at a local school (₹300 drop-in)",
                          "Afternoon: Day trip to Haridwar Har Ki Pauri",
                          "Evening: Haridwar Ganga Aarti (larger than Rishikesh)",
                        ],
                      },
                      {
                        day: "Day 5",
                        title: "Neelkanth Trek & Departure",
                        color: "bg-stone-600",
                        activities: [
                          "6 AM: Begin Neelkanth Mahadev forest trek (12 km)",
                          "Lunch at temple town",
                          "Return by afternoon",
                          "Last café stop — Prem's or Café Delmar",
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
                          ["Accommodation/night", "₹500", "₹2,000", "₹7,000"],
                          ["Food/day", "₹350", "₹700", "₹1,500"],
                          ["Local transport", "₹100", "₹300", "₹800"],
                          ["Rafting (Shivpuri)", "₹900", "₹1,200", "₹1,200"],
                          ["Bungee jump", "₹3,550", "₹3,550", "₹3,550"],
                          ["Yoga classes", "₹300", "₹600", "₹2,000"],
                          ["5-Day Trip Total", "₹12,000", "₹22,000", "₹50,000"],
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
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Travel Tips for Rishikesh</h2>
                  <ul>
                    <li>
                      <strong>Alcohol is banned:</strong> Rishikesh is a dry
                      city — no alcohol is sold or legally consumed within
                      municipal limits. Respect this. Some camps outside city
                      limits may serve beer — use your judgement.
                    </li>
                    <li>
                      <strong>Don't swim in the Ganga:</strong> The current is
                      deceptively powerful year-round, especially post-monsoon.
                      Every year tourists drown attempting to wade or swim in
                      the river. Watch the aarti from the ghats; don't enter the
                      water without a guide.
                    </li>
                    <li>
                      <strong>Book adventure activities directly:</strong> Many
                      touts on the street sell overpriced packages on behalf of
                      operators. Walk to the operator's office directly (Red
                      Chilli, Aquaterra, Jumpin Heights) or book their websites
                      — you'll pay 30–40% less.
                    </li>
                    <li>
                      <strong>Watch out for monkeys:</strong> The rhesus
                      macaques near Laxman Jhula and Ram Jhula are bold and will
                      snatch food, phones, and bags. Keep bags zipped and food
                      out of sight near the bridges.
                    </li>
                    <li>
                      <strong>
                        Dress respectfully near temples and ashrams:
                      </strong>{" "}
                      Cover shoulders and knees when visiting ashrams, attending
                      aarti, or entering temples. Many cafés and guesthouses are
                      in these areas — casual respectful dress is appreciated
                      throughout Laxman Jhula.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Many smaller cafes, yoga
                      studios, and local shops are cash-only. ATMs are available
                      at Ram Jhula and the main market but can run low on
                      weekends.
                    </li>
                    <li>
                      <strong>Connectivity:</strong> Airtel and Jio both work
                      well in Rishikesh town and the Laxman Jhula area. Signal
                      weakens on the trekking trails and at Neelkanth.
                    </li>
                    <li>
                      <strong>Weekend crowds:</strong> Rishikesh gets extremely
                      crowded on Friday–Sunday year-round with Delhi
                      day-trippers and weekend warriors. If you want a quieter
                      experience, plan your key activities (rafting, bungee,
                      aarti) on weekday mornings.
                    </li>
                  </ul>

                  {/* Dos & Don'ts */}
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
                          "Attend the Ganga Aarti at least twice",
                          "Take a dawn yoga class on the ghats",
                          "Trek to Kunjapuri for sunrise views",
                          "Try at least one grade IV rapid stretch",
                          "Visit Haridwar for a day",
                          "Get a seabuckthorn juice at every opportunity",
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
                          "Swim in the Ganga without a guide",
                          "Buy rafting packages from street touts",
                          "Carry alcohol — it's banned and disrespectful",
                          "Feed the monkeys near Laxman Jhula",
                          "Stay in Rishikesh Main (city) area",
                          "Book bungee without checking operator certification",
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
                  "Rishikesh",
                  "Uttarakhand",
                  "Adventure",
                  "Yoga",
                  "Rafting",
                  "India",
                  "Spiritual Travel",
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
