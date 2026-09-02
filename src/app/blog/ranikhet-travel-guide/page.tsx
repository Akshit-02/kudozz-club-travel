// src/app/blog/ranikhet-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ranikhet Travel Guide: Cantonment Views & Golf",
  description:
    "Complete Ranikhet guide — Upat Golf Course, Jhula Devi Temple, Chaubatia Gardens, Kumaon Regimental Centre Museum, how to reach, where to stay, and a full visit plan for this quiet Kumaon cantonment town.",
  keywords:
    "Ranikhet, Ranikhet Uttarakhand, Ranikhet travel guide, Upat Golf Course, Jhula Devi Temple, Chaubatia Gardens, Kumaon Regimental Centre Museum, Ranikhet best time to visit, how to reach Ranikhet, Kumaon cantonment town, Ranikhet hill station",
  openGraph: {
    title: "Ranikhet Travel Guide: Cantonment Views & Golf",
    description:
      "A quiet Kumaon Regiment cantonment town with one of India's highest-altitude golf courses, pine forests, and a slower pace than nearby Nainital.",
    url: "https://club.kudozz.in/blog/ranikhet-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/ziro/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pine-forested hillside of Ranikhet cantonment town with a Himalayan backdrop",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranikhet Travel Guide: Cantonment Views & Golf",
    description:
      "A Kumaon Regiment cantonment town with one of India's highest golf courses, pine forests, and a quiet, uncrowded pace.",
    images: ["/images/destinations/ziro/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/ranikhet-travel-guide",
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
          headline: "Ranikhet Travel Guide: Cantonment Views & Golf",
          description:
            "Complete Ranikhet guide — Upat Golf Course, Jhula Devi Temple, Chaubatia Gardens, Kumaon Regimental Centre Museum, how to reach, where to stay, and a full visit plan for this quiet Kumaon cantonment town.",
          image: "https://club.kudozz.in/images/destinations/ziro/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/ranikhet-travel-guide",
          },
          keywords:
            "Ranikhet, Kumaon, cantonment town, golf course, Jhula Devi Temple, Chaubatia Gardens",
          about: {
            "@type": "Place",
            name: "Ranikhet",
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
                name: "Ranikhet",
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
    q: "Is Ranikhet a cantonment town?",
    a: "Yes — Ranikhet is home to the Kumaon Regimental Centre and is run largely as an Army cantonment. Some areas, including parts of the golf course and certain forest roads, fall under military administration, which is part of why the town has stayed unusually clean, orderly, and undeveloped compared to other Kumaon hill stations.",
  },
  {
    q: "Can civilians play at Upat Golf Course?",
    a: "Upat Golf Course, one of India's highest-altitude golf courses, is run by the Army and civilian access has historically been available on a paid, limited basis, sometimes requiring advance permission. It's worth confirming current access rules locally before planning a round, as policies can change.",
  },
  {
    q: "How far is Ranikhet from Nainital?",
    a: "Ranikhet is roughly 60 km from Nainital by road, a drive of about 2-2.5 hours via Bhowali. It's commonly combined with Nainital, Kausani, or Jim Corbett as part of a wider Kumaon circuit.",
  },
  {
    q: "What is Jhula Devi Temple known for?",
    a: "Jhula Devi Temple, about 8 km from Ranikhet, is known for the thousands of bells devotees have tied along its walls and entrance over the years, left as offerings after wishes were believed to be fulfilled. It's set inside a quiet oak forest and is one of the region's most distinctive small temples.",
  },
  {
    q: "How many days should I spend in Ranikhet?",
    a: "1-2 nights is enough to cover Chaubatia Gardens, Jhula Devi Temple, the Kumaon Regimental Centre Museum, and a walk through the pine forests. It works well either as a standalone quiet retreat or as one stop in a longer Kumaon itinerary.",
  },
  {
    q: "Is Ranikhet good for a quiet, offbeat trip?",
    a: "Yes — Ranikhet is one of Kumaon's least commercial hill towns, with no real market crush, minimal traffic, and long stretches of pine and deodar forest. It suits travellers who want mountain air and quiet walks over shopping streets or nightlife.",
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
  { id: "introduction", title: "A Quiet Cantonment Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Ranikhet", level: 2 },
  { id: "attractions", title: "Things to Do", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RanikhetGuidePage() {
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
              src="/images/destinations/ziro/hero.jpg"
              alt="Pine-forested hillside of Ranikhet cantonment town with a Himalayan backdrop"
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
                { label: "Ranikhet", href: null },
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
                "Ranikhet",
                "Uttarakhand",
                "Kumaon",
                "Cantonment Town",
                "Golf Course",
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
              Ranikhet: Cantonment Calm, Pine Forests & Golf
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A quiet Kumaon Regiment cantonment town with one of India's
              highest-altitude golf courses, dense pine and deodar forest, and
              a slower, uncrowded pace than nearby Nainital.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "10 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Almora district, Kumaon, Uttarakhand",
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
                  <h2>A Quiet Cantonment Town</h2>
                  <p>
                    <strong>Ranikhet</strong> is a hill town built around a
                    working Army cantonment — home to the{" "}
                    <strong>Kumaon Regimental Centre</strong> — and that
                    military presence has kept it unusually clean, orderly,
                    and free of the dense construction found in many other
                    Kumaon hill stations. At roughly 1,870 metres, it sits on
                    a forested ridge in Almora district, a couple of hours
                    from{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>.
                  </p>
                  <p>
                    Its best-known feature is the{" "}
                    <strong>Upat Golf Course</strong>, run by the Army and
                    counted among the highest-altitude golf courses in India
                    — a rolling, forest-fringed course that draws golfers and
                    curious visitors alike. Around it, Ranikhet offers dense
                    pine and deodar forest walks, the bell-covered{" "}
                    <strong>Jhula Devi Temple</strong>, and{" "}
                    <strong>Chaubatia Gardens</strong>, a hillside orchard and
                    viewpoint known for its apple and apricot trees.
                  </p>
                  <p>
                    Compared to nearby{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                    or the Himalayan-view town of{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link>,
                    Ranikhet is quieter still — there's no lake, no busy mall
                    road, and little in the way of a tourist market. It's a
                    destination for slow walks, forest air, and a genuinely
                    uncrowded hill-station pace.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>⛳</span> Ranikhet at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Almora district, Kumaon",
                        },
                        {
                          icon: "⛰️",
                          label: "Altitude",
                          value: "~1,870 m",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "⛳",
                          label: "Known For",
                          value: "Upat Golf Course, pine forests",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Kathgodam (~80 km)",
                        },
                        {
                          icon: "🎖️",
                          label: "Character",
                          value: "Army cantonment town",
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
                  <h2>Best Time to Visit Ranikhet</h2>
                  <p>
                    Ranikhet's forested, high-altitude setting means the
                    seasons play out fairly classically for a Kumaon hill
                    town.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Pleasant days, cool evenings, and blooming orchards at Chaubatia Gardens. Comfortable weather for forest walks and golf.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Equally excellent",
                        text: "Clear post-monsoon skies, good mountain visibility from viewpoints, and crisp, comfortable weather throughout.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Cold, occasional snow",
                        text: "Higher points around Ranikhet can see light snowfall, and the pine forests look striking in winter light, though it's cold enough to need proper layers.",
                      },
                      {
                        season: "Jul – Aug",
                        emoji: "🌧️",
                        color: "bg-stone-100 border-stone-300",
                        mood: "Wet, greener",
                        text: "Monsoon brings heavy rain and occasional landslide risk on approach roads, though the forests turn a vivid green for those who don't mind the rain.",
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
                    <strong>Our pick:</strong> March to June, or September to
                    November — comfortable temperatures, clear views, and dry
                    trails through the pine forests.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Ranikhet</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> Pantnagar is the nearest
                      airport, roughly 120 km away, with limited flight
                      connections mainly to Delhi. Taxis and buses cover the
                      remaining distance by road.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kathgodam is the nearest
                      railhead, about 80 km away, with good connectivity to
                      Delhi and other major cities. From there, shared taxis
                      and buses run to Ranikhet via Bhowali.
                    </li>
                    <li>
                      <strong>By road:</strong> Ranikhet can be reached
                      directly from Kathgodam (about 3 hours) or via{" "}
                      <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                      and Bhowali, a scenic route that adds an hour or so but
                      passes through classic Kumaon hill scenery.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If combining with{" "}
                    <Link href="/blog/jim-corbett-travel-guide">
                      Jim Corbett
                    </Link>
                    , Ranikhet works well as a cooler hill-station stop before
                    or after a jungle safari, roughly 2.5-3 hours by road.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>Things to Do in Ranikhet</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/ziro/hero.jpg"
                      alt="Pine and deodar forest trail near Ranikhet, Kumaon"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Upat Golf Course</h3>
                  <p>
                    Run by the Army and set among pine trees, this is
                    counted among India's highest-altitude golf courses.
                    Civilian access has historically been available on a
                    paid, limited basis — worth confirming locally — and even
                    non-golfers often stop by for the forested setting alone.
                  </p>
                  <h3>Jhula Devi Temple</h3>
                  <p>
                    Roughly 8 km from town, this small temple set inside a
                    quiet oak forest is known for the thousands of bells
                    devotees have tied to its walls and entrance over the
                    years, left as offerings after a wish was believed
                    fulfilled — one of the more distinctive small shrines in
                    Kumaon.
                  </p>
                  <h3>Chaubatia Gardens</h3>
                  <p>
                    A hillside government-run orchard about 10 km from
                    Ranikhet, planted with apple, apricot, and plum trees,
                    with a viewpoint overlooking the surrounding hills — a
                    pleasant, unhurried stop, particularly during the spring
                    blossom season.
                  </p>
                  <h3>Kumaon Regimental Centre Museum</h3>
                  <p>
                    A military museum documenting the history of the Kumaon
                    Regiment, with uniforms, weapons, and memorabilia spanning
                    decades of service — a worthwhile stop for anyone
                    interested in the town's Army heritage and the regiment's
                    role in India's military history.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Ranikhet</h2>
                  <p>
                    Ranikhet's accommodation is spread out and low-key, with
                    many properties tucked into the pine forest rather than
                    clustered around a central market.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,200–₹2,800/night",
                        picks: [
                          "Simple guesthouses near the main bazaar",
                          "KMVN (Kumaon Mandal Vikas Nigam) tourist rest house",
                          "Basic forest-facing lodges",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹3,000–₹6,500/night",
                        picks: [
                          "Colonial-era heritage guesthouses",
                          "Cottages near Chaubatia Gardens",
                          "Family-run hotels with forest views",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹8,000–₹18,000+/night",
                        picks: [
                          "Boutique resorts set in pine forest",
                          "Heritage-style properties with large grounds",
                          "Premium cottages near the golf course",
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
                  <h2>Suggested Visit Plan (1-2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival, Golf Course & Chaubatia",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive and check in by early afternoon",
                          "Walk or drive past Upat Golf Course",
                          "Evening at Chaubatia Gardens viewpoint",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Jhula Devi Temple & Regimental Museum",
                        color: "bg-sky-600",
                        activities: [
                          "Morning visit to Jhula Devi Temple",
                          "Kumaon Regimental Centre Museum",
                          "Afternoon forest walk before departure",
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
                    * Ranikhet pairs well with{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link> or{" "}
                    <Link href="/blog/jim-corbett-travel-guide">
                      Jim Corbett
                    </Link>{" "}
                    for a longer Kumaon circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Ranikhet</h2>
                  <ul>
                    <li>
                      <strong>Hotel and guesthouse kitchens:</strong> Most
                      accommodation serves simple North Indian and Kumaoni
                      home-style food, the most reliable option given
                      Ranikhet's small, spread-out layout.
                    </li>
                    <li>
                      <strong>Cantonment area bakeries and cafés:</strong> A
                      handful of small bakeries near the main market area
                      serve baked goods and simple snacks, a legacy of the
                      town's older cantonment character.
                    </li>
                    <li>
                      <strong>Local dhabas:</strong> Basic, inexpensive
                      thalis and North Indian staples along the main road
                      through town.
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
                            "₹1,500",
                            "₹4,500",
                            "₹12,000",
                          ],
                          ["Local taxi/day", "₹1,000", "₹1,800", "₹3,000"],
                          ["Food/day", "₹500", "₹1,200", "₹2,500"],
                          [
                            "Golf course access (if open)",
                            "₹800",
                            "₹1,500",
                            "₹2,500",
                          ],
                          ["Entry & misc/day", "₹150", "₹300", "₹600"],
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
                    * Figures are per person, per day. Golf course access is
                    subject to Army rules and may not always be open to
                    civilians.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Ranikhet</h2>
                  <ul>
                    <li>
                      <strong>Confirm golf course access ahead:</strong>{" "}
                      Civilian entry to Upat Golf Course depends on current
                      Army policy — check locally rather than assuming.
                    </li>
                    <li>
                      <strong>Respect cantonment area rules:</strong> Certain
                      roads and installations are military property —
                      photography restrictions may apply in some zones.
                    </li>
                    <li>
                      <strong>Rent a car or hire a taxi:</strong> Ranikhet's
                      attractions are spread out across the forested ridge,
                      making a vehicle more practical than walking between
                      them.
                    </li>
                    <li>
                      <strong>Pack for cool evenings year-round:</strong>{" "}
                      Even in summer, forested Ranikhet cools down noticeably
                      after dark.
                    </li>
                    <li>
                      <strong>Don't expect a big market or nightlife:</strong>{" "}
                      Ranikhet's appeal is quiet forest walks and clean air,
                      not shopping or entertainment.
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
                          "Confirm golf course civilian access before visiting",
                          "Hire a taxi to cover the spread-out sights",
                          "Visit Chaubatia Gardens during spring blossom",
                          "Pack warm layers for cool evenings",
                          "Respect cantonment photography restrictions",
                          "Combine with Kausani or Jim Corbett",
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
                          "Assume walk-up access to the golf course",
                          "Photograph military installations or checkpoints",
                          "Expect Nainital-style shopping or crowds",
                          "Plan to walk between all attractions without transport",
                          "Skip warm clothing even in summer evenings",
                          "Rush Ranikhet into a single half-day stop",
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
                    <strong>🗺️ Extend the trip:</strong> Ranikhet fits
                    naturally into a longer Kumaon loop with{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link>,{" "}
                    <Link href="/blog/jim-corbett-travel-guide">
                      Jim Corbett
                    </Link>
                    , or back toward{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>{" "}
                    and the wider{" "}
                    <Link href="/blog/uttarakhand-travel-guide">
                      Uttarakhand
                    </Link>{" "}
                    hill circuit.
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
                  "Ranikhet",
                  "Uttarakhand",
                  "Kumaon",
                  "Cantonment Town",
                  "Golf Course",
                  "Off-beat",
                  "Hill Station",
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

              <RelatedPostsGrid currentSlug="ranikhet-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="ranikhet-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
