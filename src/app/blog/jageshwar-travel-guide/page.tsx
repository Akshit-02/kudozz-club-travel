// src/app/blog/jageshwar-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Jageshwar Temple Travel Guide: History & Visit Tips",
  description:
    "Complete Jageshwar guide — the cluster of roughly 124 ancient stone temples in a deodar forest, Dandeshwar & Kuber temples, Vriddha Jageshwar, how to reach, where to stay, and a full visit plan.",
  keywords:
    "Jageshwar, Jageshwar temple, Jageshwar Uttarakhand, Jageshwar travel guide, Jageshwar Jyotirlinga, Dandeshwar temple, Vriddha Jageshwar, Jageshwar Monsoon Festival, how to reach Jageshwar, Almora temples, Katyuri era temples",
  openGraph: {
    title: "Jageshwar Temple Travel Guide: History & Visit Tips",
    description:
      "A cluster of roughly 124 ancient stone temples set inside a dense deodar forest near Almora, dating mostly from the 7th-14th centuries.",
    url: "https://club.kudozz.in/blog/jageshwar-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stone temple cluster of Jageshwar set inside a dense deodar forest",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jageshwar Temple Travel Guide: History & Visit Tips",
    description:
      "Roughly 124 ancient stone temples set in a dense deodar forest near Almora — the complete Jageshwar visit guide.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/jageshwar-travel-guide",
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
          headline: "Jageshwar Temple Travel Guide: History & Visit Tips",
          description:
            "Complete Jageshwar guide — the cluster of roughly 124 ancient stone temples in a deodar forest, Dandeshwar & Kuber temples, Vriddha Jageshwar, how to reach, where to stay, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
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
            "@id": "https://club.kudozz.in/blog/jageshwar-travel-guide",
          },
          keywords:
            "Jageshwar, ancient temples, Katyuri dynasty, Jyotirlinga, deodar forest, Almora",
          about: {
            "@type": "Place",
            name: "Jageshwar",
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
                name: "Jageshwar",
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
    q: "How old are the Jageshwar temples?",
    a: "Most of the roughly 124 stone temples in the Jageshwar complex date from around the 7th to 14th centuries, built primarily during the Katyuri and later Chand dynasty periods, though some structures and additions are believed to be older or later still. It's one of the largest groupings of ancient temples in the Himalayan region.",
  },
  {
    q: "Is Jageshwar one of the twelve Jyotirlingas?",
    a: "This is genuinely debated among scholars and pilgrimage traditions. Some regional traditions and local belief hold Jageshwar (sometimes referenced as Nageshwar) to be one of the twelve Jyotirlingas, but this identification is contested, and other sites elsewhere in India also claim the Nageshwar Jyotirlinga distinction. Visitors interested in the Jyotirlinga question should treat it as a matter of tradition and regional belief rather than settled fact.",
  },
  {
    q: "What is Vriddha Jageshwar?",
    a: "Vriddha Jageshwar, or 'Old Jageshwar,' is a temple situated on a hill a short trek or drive above the main Jageshwar complex. It's considered by some traditions to predate the main cluster and offers a quieter visit alongside good views over the surrounding forest.",
  },
  {
    q: "When is the best time to visit for the Jageshwar festivals?",
    a: "The Shravani (Monsoon) Festival, held through the Hindu month of Shravan (roughly July-August), and Maha Shivratri are Jageshwar's biggest pilgrim and festival occasions, drawing large crowds and active temple rituals. Note that Shravan falls during the monsoon, so travellers get the fullest cultural experience at the cost of wetter weather and less comfortable travel conditions — weigh that trade-off against visiting in a drier month for a quieter, easier trip.",
  },
  {
    q: "How far is Jageshwar from Almora?",
    a: "Jageshwar is about 35 km from Almora, a drive of roughly 1-1.5 hours on hill roads. Almora is the most common base for day-tripping to Jageshwar, and also a convenient stop en route from Kathgodam or Nainital.",
  },
  {
    q: "How much time do I need to visit Jageshwar?",
    a: "A half-day is enough to walk through the main temple complex, including Dandeshwar and Kuber temples, at an unhurried pace. Add an hour or two if you plan to also visit Vriddha Jageshwar on the hill above.",
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
  { id: "introduction", title: "An Ancient Forest Temple Cluster", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Jageshwar", level: 2 },
  { id: "attractions", title: "The Temples & Complex", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function JageshwarGuidePage() {
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
              src="/images/destinations/manali/hadimba-temple.jpg"
              alt="Ancient stone temple cluster of Jageshwar set inside a dense deodar forest"
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
                { label: "Jageshwar", href: null },
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
                "Jageshwar",
                "Uttarakhand",
                "Kumaon",
                "Ancient Temples",
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
              Jageshwar: Ancient Temples in a Deodar Forest
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A cluster of roughly 124 stone temples dating mostly from the
              7th-14th centuries, set inside a dense deodar forest near
              Almora — one of the Himalayas' great, quietly held heritage
              sites.
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
                  text: "2,500 words",
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
                  <h2>An Ancient Forest Temple Cluster</h2>
                  <p>
                    <strong>Jageshwar</strong> is one of the Himalayas' most
                    remarkable, and least crowded, heritage sites — a cluster
                    of roughly 124 stone temples packed into a narrow valley
                    shaded by tall deodar trees, about 35 km from Almora in
                    Kumaon. Most of the temples date from the 7th to 14th
                    centuries, built through the Katyuri and later Chand
                    dynasty periods, making this one of the largest and
                    oldest groupings of stone temple architecture in
                    Uttarakhand.
                  </p>
                  <p>
                    The complex is popularly associated with the{" "}
                    <strong>Jyotirlinga</strong> tradition, though this
                    identification is genuinely debated among scholars and
                    across regional pilgrimage traditions — worth knowing
                    rather than treating as settled fact. What isn't in
                    question is the site's architectural and historical
                    weight: alongside the main Jageshwar shrine, the complex
                    includes the <strong>Dandeshwar</strong> and{" "}
                    <strong>Kuber</strong> temples, and a short trek or drive
                    above leads to <strong>Vriddha Jageshwar</strong> (Old
                    Jageshwar), believed by some traditions to predate the
                    main cluster.
                  </p>
                  <p>
                    Unlike most major Shiva pilgrimage sites in India,
                    Jageshwar has stayed remarkably uncommercialised — no
                    large bazaars, no crowds pressing through narrow lanes,
                    just old stone shrines under a canopy of deodar. It pairs
                    naturally with a Kumaon itinerary that includes{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link> and{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Jageshwar at a Glance
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
                          icon: "🛕",
                          label: "Temple Count",
                          value: "~124 stone temples",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Mar – Jun, Sep – Nov" },
                        {
                          icon: "🏛️",
                          label: "Era",
                          value: "~7th – 14th century",
                        },
                        {
                          icon: "🚉",
                          label: "Nearest Rail",
                          value: "Kathgodam (~125 km)",
                        },
                        {
                          icon: "🎉",
                          label: "Festival",
                          value: "Shravani Festival (monsoon)",
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
                  <h2>Best Time to Visit Jageshwar</h2>
                  <p>
                    Jageshwar presents a genuine trade-off: its biggest
                    pilgrim and festival season falls in a month that's
                    otherwise a less ideal weather window.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Mar – Jun",
                        emoji: "🌸",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time for a quiet visit",
                        text: "Clear weather, comfortable temperatures, and a peaceful complex — ideal for those visiting primarily for the architecture and setting rather than festival crowds.",
                      },
                      {
                        season: "Sep – Nov",
                        emoji: "🍂",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Equally excellent",
                        text: "Crisp post-monsoon air and a lush, freshly washed forest around the temples, with comfortable travel conditions on the approach roads.",
                      },
                      {
                        season: "Jul – Aug (Shravan)",
                        emoji: "🎉",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Biggest festival season — trade-off",
                        text: "The Shravani (Monsoon) Festival draws the largest crowds and the fullest cultural experience of the year, but this falls squarely in monsoon — expect rain, slippery paths, and possible road disruption on the drive in.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "❄️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Cold but atmospheric",
                        text: "Cold and occasionally snowy, which lends a striking, hushed quality to the forest and temples, though some travellers find the chill limits how long they linger.",
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
                    November, for a peaceful visit with good weather.
                    Travellers specifically wanting the Shravani Festival
                    atmosphere should accept the monsoon trade-off and plan
                    for wet conditions.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Jageshwar</h2>
                  <ul>
                    <li>
                      <strong>By air:</strong> Pantnagar is the nearest
                      airport, with limited flight connections mainly to
                      Delhi. From there, it's a multi-hour drive by road via
                      Almora.
                    </li>
                    <li>
                      <strong>By rail:</strong> Kathgodam is the nearest
                      railhead, roughly 125 km away and well connected to
                      Delhi. Taxis and buses run from Kathgodam toward Almora,
                      with a further leg on to Jageshwar.
                    </li>
                    <li>
                      <strong>By road:</strong> Almora is the most practical
                      base, with Jageshwar about 35 km away — roughly
                      1-1.5 hours on hill roads. Shared taxis and private cabs
                      both run this route regularly.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Base yourself in Almora for a
                    night and do Jageshwar as a half-day trip — it avoids
                    hauling luggage over the last stretch of narrow hill road
                    and gives you flexibility on timing.
                  </div>
                </section>

                {/* ── Attractions ────────────────────────────────────────── */}
                <section id="attractions">
                  <h2>The Temples & Complex</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Stone temple spires at Jageshwar surrounded by deodar trees"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Main Jageshwar Shrine</h3>
                  <p>
                    The central and most revered temple in the complex,
                    around which the smaller shrines cluster. Carved in the
                    characteristic stone style of the region, it forms the
                    focal point for daily worship and the site's major
                    festivals.
                  </p>
                  <h3>Dandeshwar & Kuber Temples</h3>
                  <p>
                    Two of the more architecturally significant structures
                    within the same complex, each showing the layered
                    building history of Jageshwar — different centuries and
                    dynasties left their own additions and repairs across the
                    site, visible in the varying carving styles between
                    temples.
                  </p>
                  <h3>Vriddha Jageshwar (Old Jageshwar)</h3>
                  <p>
                    A short trek or drive above the main complex, this
                    temple is considered by some traditions to predate the
                    larger cluster below. The climb rewards visitors with
                    quieter surroundings and views over the forested valley,
                    and it's a natural add-on for anyone not pressed for
                    time.
                  </p>
                  <h3>The Deodar Forest Setting</h3>
                  <p>
                    Much of Jageshwar's atmosphere comes from its setting —
                    the temples sit beneath tall, old deodar trees that keep
                    the complex shaded and quiet even in the height of the
                    day. It's as much a place for a slow, contemplative walk
                    as it is a religious site.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Jageshwar</h2>
                  <p>
                    Jageshwar itself has limited accommodation; most
                    travellers base themselves in nearby Almora and visit as
                    a day trip, though a handful of stays exist closer to the
                    complex for those who want to linger.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,500/night",
                        picks: [
                          "Simple guesthouses near the temple complex",
                          "KMVN (Kumaon Mandal Vikas Nigam) tourist rest house",
                          "Budget lodges in Almora town",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,800–₹5,500/night",
                        picks: [
                          "Forest-facing cottages near Jageshwar",
                          "Mid-range hotels in Almora",
                          "Family-run guesthouses with valley views",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏛️",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Boutique heritage-style stays in Almora",
                          "Upscale resorts on the Almora-Jageshwar road",
                          "Premium cottages with forest views",
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
                  <h2>Suggested Visit Plan (Half-Day to 1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Almora to Jageshwar",
                        color: "bg-amber-700",
                        activities: [
                          "Drive from Almora, roughly 1-1.5 hours",
                          "Explore the main temple complex, including Dandeshwar and Kuber temples",
                          "Walk slowly through the deodar forest setting",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Vriddha Jageshwar & Return",
                        color: "bg-sky-600",
                        activities: [
                          "Short trek or drive up to Vriddha Jageshwar",
                          "Lunch in Almora on the return leg",
                          "Optional onward drive to Kausani for the evening",
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
                    * Most travellers fold Jageshwar into a longer Kumaon
                    circuit via Almora, continuing on to{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link> or
                    back toward{" "}
                    <Link href="/blog/nainital-travel-guide">Nainital</Link>.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Jageshwar</h2>
                  <ul>
                    <li>
                      <strong>Small eateries near the complex:</strong> A
                      handful of basic dhabas near the temple entrance serve
                      simple meals and snacks — enough for a lunch stop
                      before or after visiting.
                    </li>
                    <li>
                      <strong>Almora's market restaurants:</strong> For a
                      wider choice, most travellers eat in Almora, which has
                      considerably more dining options, including local
                      Kumaoni specialities.
                    </li>
                    <li>
                      <strong>Prasad and offerings stalls:</strong> Small
                      stalls near the temple entrance sell prasad and basic
                      pilgrimage essentials.
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
                            "Accommodation/night (Almora)",
                            "₹1,200",
                            "₹3,500",
                            "₹9,000",
                          ],
                          [
                            "Taxi Almora–Jageshwar (round trip)",
                            "₹1,000",
                            "₹1,500",
                            "₹2,200",
                          ],
                          ["Food/day", "₹400", "₹1,000", "₹2,200"],
                          ["Temple entry & offerings", "₹100", "₹200", "₹400"],
                          ["Local guide (optional)", "₹300", "₹500", "₹800"],
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
                    * Figures are per person, per day, assuming a base in
                    Almora with a day trip to Jageshwar.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Jageshwar</h2>
                  <ul>
                    <li>
                      <strong>Base yourself in Almora:</strong> It has far
                      more accommodation and dining options than Jageshwar
                      itself, with an easy day-trip distance to the temples.
                    </li>
                    <li>
                      <strong>Dress modestly and remove footwear:</strong>{" "}
                      Standard temple etiquette applies throughout the
                      complex — modest clothing and bare feet in shrine
                      areas.
                    </li>
                    <li>
                      <strong>Walk the complex slowly:</strong> The site
                      rewards unhurried exploration far more than a quick
                      photo stop — budget at least an hour or two.
                    </li>
                    <li>
                      <strong>Plan around the monsoon trade-off:</strong> If
                      you specifically want the Shravani Festival atmosphere,
                      accept wetter conditions; otherwise aim for the
                      Mar-Jun or Sep-Nov windows.
                    </li>
                    <li>
                      <strong>Combine with Vriddha Jageshwar:</strong> Don't
                      skip the short trek above the main complex — it's a
                      quieter, less-visited extension of the site.
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
                          "Base yourself in Almora for easy access",
                          "Dress modestly and remove footwear at shrines",
                          "Walk the complex slowly and take it in",
                          "Visit Vriddha Jageshwar if time allows",
                          "Plan around the Shravan monsoon trade-off knowingly",
                          "Combine with Kausani or Nainital",
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
                          "Assert the Jyotirlinga claim as unquestioned fact",
                          "Rush the complex into a quick 20-minute stop",
                          "Expect large-scale shopping or dining at the site itself",
                          "Visit in Shravan without expecting rain and crowds",
                          "Skip modest dress or footwear etiquette",
                          "Forget cash — card acceptance is very limited here",
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
                    <strong>🗺️ Extend the trip:</strong> Jageshwar pairs
                    naturally with the sweeping mountain views of{" "}
                    <Link href="/blog/kausani-travel-guide">Kausani</Link>, a
                    couple of hours away, or with a longer Kumaon loop toward{" "}
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
                  "Jageshwar",
                  "Uttarakhand",
                  "Kumaon",
                  "Ancient Temples",
                  "Jyotirlinga",
                  "Almora",
                  "Heritage",
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

              <RelatedPostsGrid currentSlug="jageshwar-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="jageshwar-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
