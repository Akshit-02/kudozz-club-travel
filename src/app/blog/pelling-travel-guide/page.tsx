// src/app/blog/pelling-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Pelling Travel Guide: Kanchenjunga Views & Tips",
  description:
    "Complete Pelling guide — sunrise views of Kanchenjunga, Pemayangtse Monastery, Rabdentse Ruins, the Skywalk, how to reach from Gangtok, and a full visit plan.",
  keywords:
    "Pelling travel guide, Kanchenjunga view Pelling, Pemayangtse Monastery, Rabdentse Ruins, Sanga Choeling Skywalk, West Sikkim, how to reach Pelling, Pelling helipad viewpoint, Khecheopalri Lake day trip",
  openGraph: {
    title: "Pelling Travel Guide: Kanchenjunga Views & Tips",
    description:
      "One of Sikkim's best sunrise viewpoints for Kanchenjunga, paired with centuries-old monastery heritage — the complete guide to Pelling.",
    url: "https://club.kudozz.in/blog/pelling-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/spiti-valley/spiti-valley.jpg",
        width: 1200,
        height: 630,
        alt: "High Himalayan valley and peaks, evoking Pelling's sweeping Kanchenjunga range views in West Sikkim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelling Travel Guide: Kanchenjunga Views & Tips",
    description:
      "Sunrise over Kanchenjunga, an ancient monastery, and the ruins of Sikkim's second capital — the complete guide to Pelling.",
    images: ["/images/destinations/spiti-valley/spiti-valley.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/pelling-travel-guide",
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
          headline: "Pelling Travel Guide: Kanchenjunga Views & Tips",
          description:
            "Complete Pelling guide — sunrise views of Kanchenjunga, Pemayangtse Monastery, Rabdentse Ruins, the Skywalk, how to reach from Gangtok, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/spiti-valley/spiti-valley.jpg",
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
            "@id": "https://club.kudozz.in/blog/pelling-travel-guide",
          },
          keywords:
            "Pelling, Kanchenjunga, Sikkim, West Sikkim, Pemayangtse Monastery, viewpoint",
          about: {
            "@type": "Place",
            name: "Pelling",
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
                name: "Pelling",
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
    q: "What is the best time to see Kanchenjunga clearly from Pelling?",
    a: "March to May and October to December give the clearest skies and the best odds of an unobstructed view. Even then, cloud cover can roll in and obscure the peak on any given morning, so it helps to build a spare morning or two into your itinerary rather than relying on a single sunrise attempt.",
  },
  {
    q: "How far is Pelling from Gangtok?",
    a: "Roughly 4-5 hours by road, covering about 115 km through winding West Sikkim hill roads. Most visitors treat it as a full travel day rather than a quick transfer.",
  },
  {
    q: "How many days do I need in Pelling?",
    a: "Two days is a comfortable minimum — one for the Kanchenjunga viewpoint, Pemayangtse Monastery, and Rabdentse Ruins, and a second for the Skywalk and a day trip to Khecheopalri Lake if you have the time.",
  },
  {
    q: "Is Pemayangtse Monastery worth visiting?",
    a: "Yes — it's one of the oldest and most important monasteries in Sikkim, belonging to the Nyingma sect, with a wooden sculpture depicting the celestial palace of Guru Padmasambhava inside. It sits close to town, making it an easy add-on to a Pelling itinerary.",
  },
  {
    q: "Can Khecheopalri Lake be visited as a day trip from Pelling?",
    a: "Yes, it's one of the more common day trips from Pelling, reachable by road in under an hour each way, and pairs naturally with the town's other West Sikkim sights.",
  },
  {
    q: "Do I need permits to visit Pelling?",
    a: "No special inner-line permit is needed for Pelling itself, unlike some of North Sikkim's border areas — it's open to Indian and most foreign travellers with standard identification.",
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
  { id: "introduction", title: "Pelling's Kanchenjunga Views", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pelling", level: 2 },
  { id: "things-to-do", title: "Monastery, Ruins & Skywalk", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PellingGuidePage() {
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
              src="/images/destinations/spiti-valley/spiti-valley.jpg"
              alt="High Himalayan valley and peaks, evoking Pelling's sweeping Kanchenjunga range views in West Sikkim"
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
                { label: "Pelling", href: null },
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
              {["Pelling", "Kanchenjunga", "Sikkim", "West Sikkim"].map(
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
              Pelling: Kanchenjunga Sunrise & Monastery Views
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of Sikkim's best vantage points for the world's third-highest
              peak, paired with a centuries-old monastery and the ruins of a
              lost capital.
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
                  text: "West Sikkim",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,200 words",
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
                  <h2>Pelling's Kanchenjunga Views</h2>
                  <p>
                    <strong>Pelling</strong>, in West Sikkim at roughly
                    2,150 m, is one of the best places in the state to watch
                    sunrise light hit the{" "}
                    <strong>Kanchenjunga range</strong> — the world's
                    third-highest peak — particularly from the Pelling
                    Helipad viewpoint area, where the mountains fill the
                    horizon with almost nothing in the way.
                  </p>
                  <p>
                    Beyond the view, Pelling sits close to{" "}
                    <strong>Pemayangtse Monastery</strong>, one of the oldest
                    and most significant monasteries in Sikkim, and the{" "}
                    <strong>Rabdentse Ruins</strong> — the remains of the
                    kingdom's former second capital. A newer glass-floor{" "}
                    <strong>Skywalk</strong> and a large Chenrezig statue add
                    a more contemporary attraction to the mix.
                  </p>
                  <p>
                    Pelling also makes a convenient base for a day trip to{" "}
                    <Link href="/blog/khecheopalri-lake-travel-guide">
                      Khecheopalri Lake
                    </Link>
                    , one of Sikkim's most revered sacred lakes.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏔️</span> Pelling at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "West Sikkim, ~2,150m",
                        },
                        {
                          icon: "🚗",
                          label: "From Gangtok",
                          value: "~115 km, 4-5 hrs",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar-May, Oct-Dec" },
                        {
                          icon: "🏔️",
                          label: "Known For",
                          value: "Kanchenjunga Views",
                        },
                        {
                          icon: "🛕",
                          label: "Heritage",
                          value: "Pemayangtse Monastery",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Khecheopalri Lake",
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
                  <h2>Best Time to Visit Pelling</h2>
                  <p>
                    Since the main draw is a clear view of Kanchenjunga,
                    timing here matters more than at most Sikkim
                    destinations.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – May",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear spring skies give the best odds of an unobstructed Kanchenjunga sunrise, with rhododendrons blooming across the surrounding hills.",
                      },
                      {
                        season: "Jun – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy cloud cover all but rules out mountain views, and hill roads to Pelling can be affected by landslides.",
                      },
                      {
                        season: "Oct – Dec",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Clear and cool",
                        text: "Post-monsoon skies are crisp and clear, giving reliably good mountain visibility alongside comfortable daytime temperatures.",
                      },
                      {
                        season: "Jan – Feb",
                        emoji: "❄️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Cold but clear",
                        text: "Genuinely cold mornings, but often very clear skies — worth it if you're prepared with warm layers.",
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
                    <strong>Our pick:</strong> March-May or October-December
                    — both give the clearest odds of catching Kanchenjunga
                    unobstructed at sunrise, though cloud cover is never
                    fully guaranteed in any month.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Pelling</h2>
                  <ul>
                    <li>
                      <strong>By road from Gangtok:</strong> Roughly 115 km,
                      about 4-5 hours through winding West Sikkim hill
                      roads — shared jeeps and private taxis both run this
                      route regularly.
                    </li>
                    <li>
                      <strong>Via Bagdogra/NJP:</strong> Pelling is also
                      reachable directly from Bagdogra Airport or New
                      Jalpaiguri railway station, roughly 5-6 hours by road,
                      without necessarily routing through Gangtok first.
                    </li>
                    <li>
                      <strong>Within West Sikkim:</strong> Pelling is
                      well-placed for combining with Khecheopalri Lake and
                      other West Sikkim stops on the same trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If Kanchenjunga views are
                    your priority, arrive the evening before your intended
                    viewpoint morning — clear skies can appear or vanish
                    overnight, and you don't want to lose your only shot to
                    a late arrival.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Monastery, Ruins & Skywalk</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/spiti-valley/spiti-valley.jpg"
                      alt="Himalayan mountain range at golden hour, evoking Pelling's Kanchenjunga viewpoint"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Kanchenjunga Viewpoint</h3>
                  <p>
                    The Pelling Helipad area is the town's best-known spot
                    for an open, largely unobstructed view of the
                    Kanchenjunga range — go at first light, before clouds
                    typically build up later in the morning.
                  </p>
                  <h3>Pemayangtse Monastery</h3>
                  <p>
                    One of the oldest and most important monasteries in
                    Sikkim, belonging to the Nyingma sect, with a striking
                    wooden sculpture inside depicting the celestial palace
                    of Guru Padmasambhava — a highlight for anyone interested
                    in Sikkimese Buddhist heritage.
                  </p>
                  <h3>Rabdentse Ruins</h3>
                  <p>
                    A short walk from town, these are the remains of Sikkim's
                    former second capital — mostly foundations and low walls
                    today, but set on a ridge with its own quiet views over
                    the valley.
                  </p>
                  <h3>Sanga Choeling Skywalk</h3>
                  <p>
                    A newer attraction featuring a glass-floor skywalk and a
                    large Chenrezig (Avalokiteshvara) statue — a popular,
                    more contemporary stop alongside the town's older
                    heritage sites.
                  </p>
                  <h3>Kanchenjunga Falls</h3>
                  <p>
                    A scenic waterfall commonly visited en route to or from
                    Pelling, worth a short stop if your schedule allows.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Pelling</h2>
                  <p>
                    Pelling has a genuinely good spread of accommodation for
                    a town its size, with mountain-facing rooms being a
                    particular selling point worth booking ahead for.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹900–₹2,000/night",
                        picks: [
                          "Guesthouses in Upper Pelling",
                          "Basic lodges near the helipad",
                          "Homestays with valley views",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "Mountain-view hotels, Upper Pelling",
                          "Boutique stays near the viewpoint",
                          "Sikkim Tourism-affiliated properties",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏔️",
                        range: "₹5,500–₹12,000+/night",
                        picks: [
                          "Premium resorts with Kanchenjunga-facing suites",
                          "Heritage-style boutique hotels",
                          "Full-board mountain-view packages",
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
                    Book a mountain-facing room if the Kanchenjunga view
                    matters to you — many budget rooms face the wrong
                    direction, and you'll want the view available the moment
                    you wake up.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Heritage Sites",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive from Gangtok, check in",
                          "Pemayangtse Monastery",
                          "Rabdentse Ruins in the afternoon",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Sunrise & Skywalk",
                        color: "bg-sky-600",
                        activities: [
                          "Early sunrise at the Kanchenjunga viewpoint",
                          "Sanga Choeling Skywalk and Chenrezig statue",
                          "Optional day trip to Khecheopalri Lake",
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
                    * With an extra day, add{" "}
                    <Link href="/blog/khecheopalri-lake-travel-guide">
                      Khecheopalri Lake
                    </Link>{" "}
                    as a proper half-day rather than rushing it in on
                    departure morning.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Pelling</h2>
                  <ul>
                    <li>
                      <strong>Hotel/guesthouse kitchens:</strong> Most
                      accommodation serves home-style Sikkimese and North
                      Indian meals, often the most reliable option given the
                      town's modest standalone restaurant scene.
                    </li>
                    <li>
                      <strong>Local momo and thukpa joints:</strong> Small
                      eateries around Upper Pelling serve straightforward
                      Sikkimese staples at low prices.
                    </li>
                    <li>
                      <strong>Cafés near the viewpoint:</strong> A few
                      cafés cater to the sunrise-viewing crowd with hot
                      drinks and breakfast.
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
                          ["Accommodation/night", "₹1,200", "₹3,500", "₹8,000"],
                          ["Shared jeep from Gangtok", "₹300", "₹300", "₹2,500 (private)"],
                          ["Food/day", "₹500", "₹1,000", "₹2,200"],
                          ["Monastery/ruins entry", "₹50", "₹50", "₹50"],
                          ["Skywalk entry", "₹150", "₹150", "₹150"],
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
                    * Figures are per person, per day (except shared/private
                    transport, a one-way figure).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Pelling</h2>
                  <ul>
                    <li>
                      <strong>Book a mountain-facing room:</strong> Not every
                      room in town faces Kanchenjunga — confirm before
                      booking if the view matters.
                    </li>
                    <li>
                      <strong>Go early for the viewpoint:</strong> Clouds
                      typically build up through the morning, so the first
                      hour after sunrise is usually your best window.
                    </li>
                    <li>
                      <strong>Build in a buffer day:</strong> If weather
                      obscures the view on your first morning, a spare day
                      gives you a second chance.
                    </li>
                    <li>
                      <strong>Carry warm layers:</strong> Mornings can be
                      genuinely cold even outside winter, given the
                      altitude.
                    </li>
                    <li>
                      <strong>Combine with Khecheopalri Lake:</strong> It's
                      an easy, worthwhile add-on within the same West Sikkim
                      trip.
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
                          "Book a mountain-view room in advance",
                          "Arrive the evening before your viewpoint morning",
                          "Visit Pemayangtse Monastery and Rabdentse Ruins together",
                          "Carry warm layers for cold mornings",
                          "Combine with Khecheopalri Lake if time allows",
                          "Build a buffer day for cloud cover",
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
                          "Assume a clear Kanchenjunga view is guaranteed",
                          "Sleep in and miss the best early-morning light",
                          "Skip warm layers thinking it's not that cold",
                          "Rush Pemayangtse Monastery",
                          "Book a valley-facing room if the view is your priority",
                          "Plan a same-day arrival-then-viewpoint if you can avoid it",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Pelling with{" "}
                    <Link href="/blog/khecheopalri-lake-travel-guide">
                      Khecheopalri Lake
                    </Link>{" "}
                    for a fuller West Sikkim loop. See our full{" "}
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
                {["Pelling", "Kanchenjunga", "Sikkim", "West Sikkim"].map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                      className="tag-pill"
                    >
                      #{tag}
                    </Link>
                  ),
                )}
              </div>

              <RelatedPostsGrid currentSlug="pelling-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="pelling-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
