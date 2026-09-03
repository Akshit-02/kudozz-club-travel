// src/app/blog/gangtok-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Gangtok Travel Guide: Sightseeing, Food & Tips",
  description:
    "Complete Gangtok guide — MG Marg, Rumtek Monastery, Enchey Monastery, viewpoints, how to arrange Sikkim permits, where to eat, and a full visit plan.",
  keywords:
    "Gangtok travel guide, MG Marg, Rumtek Monastery, Enchey Monastery, Gangtok sightseeing, Sikkim permits, how to reach Gangtok, Gangtok itinerary, Tashi View Point, Sikkim capital",
  openGraph: {
    title: "Gangtok Travel Guide: Sightseeing, Food & Tips",
    description:
      "A pedestrian promenade, monasteries, and the logistical hub for the whole of Sikkim — the complete Gangtok guide.",
    url: "https://club.kudozz.in/blog/gangtok-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain town landscape, evoking Gangtok's hillside setting in Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangtok Travel Guide: Sightseeing, Food & Tips",
    description:
      "A pedestrian promenade, monasteries, and the logistical hub for the whole of Sikkim — the complete Gangtok guide.",
    images: ["/images/destinations/jammu-kashmir/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/gangtok-travel-guide",
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
          headline: "Gangtok Travel Guide: Sightseeing, Food & Tips",
          description:
            "Complete Gangtok guide — MG Marg, Rumtek Monastery, Enchey Monastery, viewpoints, how to arrange Sikkim permits, where to eat, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/hero.jpg",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
            "@id": "https://club.kudozz.in/blog/gangtok-travel-guide",
          },
          keywords: "Gangtok, Sikkim, MG Marg, monasteries, Himalayas",
          about: {
            "@type": "Place",
            name: "Gangtok",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Sikkim",
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
                name: "Sikkim",
                item: "https://club.kudozz.in/blog/sikkim-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Gangtok",
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
    q: "How many days do I need for Gangtok?",
    a: "Two to three days is a comfortable amount — one day for MG Marg and city sightseeing, another for Rumtek Monastery and the viewpoints, with a third if you want a slower pace or need to sort permits for onward North Sikkim travel.",
  },
  {
    q: "How do I arrange Sikkim permits from Gangtok?",
    a: "Registered travel agents in Gangtok handle Protected Area Permits for Nathula Pass, Tsomgo Lake, and North Sikkim destinations like Lachen and Lachung. You'll typically need original photo ID, and most agents bundle the permit with a vehicle and driver since self-drive isn't usually an option in these zones.",
  },
  {
    q: "What is the best time to visit Gangtok?",
    a: "March to June and September to December are the most reliable windows, with clear skies and comfortable temperatures. July and August bring heavy monsoon rain that can trigger landslides on the approach roads, so it's best avoided if your itinerary depends on onward travel.",
  },
  {
    q: "How do I reach Gangtok?",
    a: "Bagdogra is the nearest major airport, roughly 4-5 hours away by road; Pakyong Airport within Sikkim itself has limited flights and cuts that time down considerably when operating. New Jalpaiguri is the nearest major rail junction, also connected by road via Siliguri.",
  },
  {
    q: "Is Gangtok a good base for the whole Sikkim trip?",
    a: "It's the practical starting and permit-arranging hub for almost every Sikkim itinerary, but most travelers use it as a base for only the first and last few days, moving on to Pelling, Lachung, or Lachen for the rest of the trip rather than staying in Gangtok throughout.",
  },
  {
    q: "What is MG Marg like?",
    a: "It's a pedestrian-only promenade lined with shops, cafes, and restaurants — clean, well-lit, and genuinely pleasant to walk in the evening. It's the closest thing Gangtok has to a central social hub, though shops and restaurants tend to close earlier than in bigger Indian cities.",
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
  { id: "introduction", title: "Sikkim's Hillside Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Gangtok", level: 2 },
  { id: "things-to-do", title: "MG Marg, Monasteries & Viewpoints", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "What to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GangtokGuidePage() {
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
              alt="Himalayan mountain town landscape, evoking Gangtok's hillside setting in Sikkim"
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
                { label: "Sikkim", href: "/blog/sikkim-travel-guide" },
                { label: "Gangtok", href: null },
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
              {["Gangtok", "Sikkim", "MG Marg", "Himalayas"].map((tag) => (
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
              Gangtok: Sightseeing, Food & Sikkim's Gateway City
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A pedestrian promenade strung along a ridge, monasteries
              tucked into the hills around it, and the logistical hub
              through which almost every Sikkim itinerary passes.
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
                  text: "Gangtok, Sikkim",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,300 words",
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
                  <h2>Sikkim's Hillside Capital</h2>
                  <p>
                    <strong>Gangtok</strong>, capital of{" "}
                    <Link href="/blog/sikkim-travel-guide">Sikkim</Link>, sits
                    at roughly 1,650 m on a steep Himalayan ridge. It's the
                    state's largest town, but it still feels compact and
                    walkable, with its social life concentrated around a
                    single pedestrian promenade.
                  </p>
                  <p>
                    Beyond sightseeing, Gangtok plays a more practical role
                    for almost every Sikkim traveler — it's where you arrange
                    the Protected Area Permits needed for Nathula Pass,
                    Tsomgo Lake, and North Sikkim's Lachen and Lachung
                    valleys, and where most trips both begin and end.
                  </p>
                  <p>
                    Even without those onward plans, Gangtok has enough on
                    its own — monasteries, viewpoints toward Kanchenjunga on
                    a clear day, and a genuinely pleasant evening
                    atmosphere along MG Marg — to justify a couple of days
                    in its own right.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Gangtok at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Altitude", value: "~1,650 m" },
                        {
                          icon: "✈️",
                          label: "Nearest Airport",
                          value: "Bagdogra / Pakyong",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar–Jun, Sep–Dec" },
                        {
                          icon: "🛕",
                          label: "Known For",
                          value: "MG Marg, Rumtek Monastery",
                        },
                        {
                          icon: "🎫",
                          label: "Role",
                          value: "Sikkim permit hub",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,500 – ₹6,000",
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
                  <h2>Best Time to Visit Gangtok</h2>
                  <p>
                    Gangtok's weather shapes both comfort in town and the
                    feasibility of the mountain roads beyond it.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies, blooming rhododendrons in the surrounding hills, and comfortable daytime temperatures make this the most reliable window.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid if possible",
                        text: "Heavy rain brings a real risk of landslides on the mountain roads out of Gangtok, which can disrupt onward travel to North Sikkim.",
                      },
                      {
                        season: "Sep – Dec",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear and cool",
                        text: "Post-monsoon skies are often at their clearest, giving the best odds of Kanchenjunga views from Gangtok's viewpoints.",
                      },
                      {
                        season: "Jan – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold, occasional snow",
                        text: "Gangtok itself rarely sees heavy snow, but it turns genuinely cold, and higher-altitude day trips can be affected by road closures.",
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
                    <strong>Our pick:</strong> March to June or September to
                    December — clear skies, comfortable temperatures, and a
                    much lower chance of the landslide-related delays that
                    monsoon travel can bring.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Gangtok</h2>
                  <ul>
                    <li>
                      <strong>By Air:</strong> Bagdogra Airport is the
                      nearest major airport, roughly 4-5 hours away by
                      road. Pakyong Airport, within Sikkim itself, has
                      limited flights but cuts the journey down
                      considerably when operating.
                    </li>
                    <li>
                      <strong>By Rail:</strong> New Jalpaiguri (NJP) is the
                      nearest major railhead, connected onward to Gangtok
                      by road via Siliguri.
                    </li>
                    <li>
                      <strong>By Road:</strong> Shared jeeps and private
                      taxis run regularly from Siliguri and NJP — the
                      standard way most travelers complete the final leg.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange your Nathula, Tsomgo
                    Lake, and North Sikkim permits with a registered Gangtok
                    agent as early in your trip as possible — it can take a
                    day or two to process, and building that buffer in early
                    avoids scrambling later.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>MG Marg, Monasteries & Viewpoints</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/hero.jpg"
                      alt="Hillside town and mountain backdrop, evoking Gangtok's setting"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>MG Marg</h3>
                  <p>
                    Gangtok's pedestrian-only promenade is the town's social
                    heart — lined with shops, cafes, and restaurants, and
                    genuinely pleasant for an evening walk, though most
                    places close earlier than you might expect from a state
                    capital.
                  </p>
                  <h3>Rumtek Monastery</h3>
                  <p>
                    Roughly 24 km from town, Rumtek is the seat-in-exile of
                    the Karmapa, head of the Karma Kagyu lineage of Tibetan
                    Buddhism, and one of the most significant monasteries in
                    the region — a worthwhile half-day trip on its own.
                  </p>
                  <h3>Enchey Monastery</h3>
                  <p>
                    A roughly 200-year-old Nyingma monastery within Gangtok
                    itself, easily combined with in-town sightseeing rather
                    than requiring a separate trip.
                  </p>
                  <h3>Viewpoints & the Ropeway</h3>
                  <p>
                    Tashi View Point, Ganesh Tok, and Hanuman Tok all offer
                    views toward Kanchenjunga on clear days, while the
                    Gangtok Ropeway gives an aerial perspective over the
                    town itself. The Himalayan Zoological Park, with red
                    pandas in a naturalistic setting, rounds out a full day
                    of in-town sightseeing.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Gangtok</h2>
                  <p>
                    Accommodation is plentiful and spans every budget,
                    concentrated mainly around MG Marg and the ridges above
                    and below it.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Guesthouses near MG Marg",
                          "Backpacker hostels",
                          "Basic hotels off the main road",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,500/night",
                        picks: [
                          "Boutique hotels on MG Marg",
                          "Hill-view business hotels",
                          "Serviced apartments",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹6,000–₹15,000+/night",
                        picks: [
                          "Mayfair Spa Resort",
                          "Premium hillside resorts",
                          "Heritage-style properties",
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

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2-3 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Permits",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Arrange permits for onward Sikkim travel",
                          "Evening walk on MG Marg",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Monasteries & Viewpoints",
                        color: "bg-sky-600",
                        activities: [
                          "Rumtek Monastery",
                          "Enchey Monastery",
                          "Tashi View Point / Ganesh Tok",
                        ],
                      },
                      {
                        day: "Day 3",
                        title: "Ropeway & Departure",
                        color: "bg-forest-600",
                        activities: [
                          "Gangtok Ropeway",
                          "Himalayan Zoological Park",
                          "Depart, or head onward to North Sikkim",
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
                    * With permits sorted, extend the trip to{" "}
                    <Link href="/blog/nathula-pass-travel-guide">
                      Nathula Pass
                    </Link>
                    ,{" "}
                    <Link href="/blog/tsomgo-lake-travel-guide">
                      Tsomgo Lake
                    </Link>
                    , or North Sikkim's{" "}
                    <Link href="/blog/lachung-travel-guide">Lachung</Link>{" "}
                    and{" "}
                    <Link href="/blog/lachen-travel-guide">Lachen</Link>.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>What to Eat in Gangtok</h2>
                  <ul>
                    <li>
                      <strong>Momos:</strong> Available everywhere, from
                      street stalls to sit-down restaurants — a genuine
                      Gangtok staple rather than just a tourist item.
                    </li>
                    <li>
                      <strong>Thukpa:</strong> A warming noodle soup, ideal
                      given the town's cool evenings.
                    </li>
                    <li>
                      <strong>Cafe culture:</strong> MG Marg has a strong
                      run of cafes serving good coffee and baked goods, a
                      pleasant contrast to more traditional Sikkimese food.
                    </li>
                    <li>
                      <strong>Local Sikkimese thali:</strong> Worth seeking
                      out at a proper local restaurant rather than a
                      tourist-facing one for the most authentic version.
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
                          [
                            "Accommodation/night",
                            "₹1,200",
                            "₹3,500",
                            "₹9,000",
                          ],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Local transport/day",
                            "₹500",
                            "₹1,200",
                            "₹2,500",
                          ],
                          ["Permit + vehicle for day trips", "₹1,500", "₹2,500", "₹4,500"],
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
                    * Figures are per person, per day. Permit and vehicle
                    costs apply only on days you're doing a Nathula/Tsomgo
                    or North Sikkim excursion.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Gangtok</h2>
                  <ul>
                    <li>
                      <strong>Sort permits early:</strong> Arrange Nathula,
                      Tsomgo, and North Sikkim permits through a registered
                      Gangtok agent as soon as you arrive.
                    </li>
                    <li>
                      <strong>Carry ID originals:</strong> Permit
                      applications need original photo ID, not just
                      copies.
                    </li>
                    <li>
                      <strong>Shops close early:</strong> Even on MG Marg,
                      don't expect big-city-late hours.
                    </li>
                    <li>
                      <strong>Build in weather buffer:</strong> Monsoon
                      landslides can delay onward travel — leave a spare
                      day if your itinerary is tight.
                    </li>
                    <li>
                      <strong>Use Gangtok as a hub, not the whole trip:</strong>{" "}
                      Most travelers split their time between Gangtok and
                      Pelling, Lachung, or Lachen rather than staying only
                      in the capital.
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
                          "Arrange all your Sikkim permits in Gangtok early",
                          "Walk MG Marg in the evening",
                          "Visit Rumtek Monastery as a half-day trip",
                          "Carry original ID for permit applications",
                          "Build a weather buffer into your itinerary",
                          "Try both momos and a proper Sikkimese thali",
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
                          "Leave permit arrangements to the last minute",
                          "Expect late-night shopping or dining on MG Marg",
                          "Travel in peak monsoon without a flexible schedule",
                          "Forget original ID documents",
                          "Treat Gangtok as your only Sikkim stop",
                          "Skip the viewpoints on a clear day",
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
                    <strong>🗺️ Extend the trip:</strong> Once your permits
                    are sorted, head to{" "}
                    <Link href="/blog/tsomgo-lake-travel-guide">
                      Tsomgo Lake
                    </Link>{" "}
                    and{" "}
                    <Link href="/blog/nathula-pass-travel-guide">
                      Nathula Pass
                    </Link>{" "}
                    for a high-altitude day trip, or venture into North
                    Sikkim via{" "}
                    <Link href="/blog/lachung-travel-guide">Lachung</Link>{" "}
                    and{" "}
                    <Link href="/blog/lachen-travel-guide">Lachen</Link>. See
                    our full{" "}
                    <Link href="/blog/sikkim-travel-guide">
                      Sikkim travel guide
                    </Link>{" "}
                    for the wider state.
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
                {["Gangtok", "Sikkim", "MG Marg", "Himalayas"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="gangtok-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="gangtok-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
