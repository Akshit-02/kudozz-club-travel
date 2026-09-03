// src/app/blog/pilibhit-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Pilibhit Tiger Reserve: Safari & Visit Guide",
  description:
    "Complete Pilibhit Tiger Reserve guide — dense terai forest, one of India's highest tiger densities, swamp deer and birdlife, safari zones, how to reach, and Pilibhit's flute-making heritage.",
  keywords:
    "Pilibhit Tiger Reserve, Pilibhit safari, terai forest Uttar Pradesh, Pilibhit flute making, Sharda river, Pilibhit best time to visit, how to reach Pilibhit, swamp deer Pilibhit, Bareilly to Pilibhit",
  openGraph: {
    title: "Pilibhit Tiger Reserve: Safari & Visit Guide",
    description:
      "Dense terai forest along the Sharda river with one of India's highest tiger densities relative to area — quieter and far less touristy than its terai neighbours.",
    url: "https://club.kudozz.in/blog/pilibhit-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/coorg.jpg",
        width: 1200,
        height: 630,
        alt: "Dense terai forest canopy at Pilibhit Tiger Reserve, Uttar Pradesh",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilibhit Tiger Reserve: Safari & Visit Guide",
    description:
      "One of India's highest tiger densities, dense terai forest, and Pilibhit town's traditional flute-making craft — the complete guide.",
    images: ["/images/destinations/coorg/coorg.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/pilibhit-travel-guide",
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
          headline: "Pilibhit Tiger Reserve: Safari & Visit Guide",
          description:
            "Complete Pilibhit Tiger Reserve guide — dense terai forest, one of India's highest tiger densities, swamp deer and birdlife, safari zones, how to reach, and Pilibhit's flute-making heritage.",
          image: "https://club.kudozz.in/images/destinations/coorg/coorg.jpg",
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
            "@id": "https://club.kudozz.in/blog/pilibhit-travel-guide",
          },
          keywords:
            "Pilibhit Tiger Reserve, terai forest, tiger density, Sharda river, Uttar Pradesh, flute making",
          about: {
            "@type": "Place",
            name: "Pilibhit Tiger Reserve",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Uttar Pradesh",
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
                name: "Uttar Pradesh",
                item: "https://club.kudozz.in/blog/uttar-pradesh-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Pilibhit Tiger Reserve",
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
    q: "Is Pilibhit Tiger Reserve worth visiting compared to Dudhwa?",
    a: "Yes, and the two make a good pair. Pilibhit has a comparable terai ecosystem to Dudhwa but is significantly quieter and less touristy, with a reputation for one of the higher tiger densities relative to forest area among India's reserves. Dudhwa offers rhinos and a larger barasingha population that Pilibhit doesn't have.",
  },
  {
    q: "When is Pilibhit Tiger Reserve open?",
    a: "The reserve is open from mid-November to mid-June and closed for roughly five months during the monsoon (June to November) to protect the breeding season and because the terai terrain becomes waterlogged.",
  },
  {
    q: "How do I reach Pilibhit Tiger Reserve?",
    a: "Pilibhit Junction railway station connects to major towns in the region. By road, Bareilly (around 65 km) is the closer and more practical gateway with better onward connectivity, while Lucknow is about 250 km away.",
  },
  {
    q: "What is Pilibhit famous for besides tigers?",
    a: "Pilibhit town has a distinctive craft heritage as a centre for traditional flute (bansuri) making, a skill passed down through generations of local artisan families. It's worth a stop even for travellers focused mainly on the wildlife reserve.",
  },
  {
    q: "Can I see swamp deer at Pilibhit?",
    a: "Yes, Pilibhit supports a population of swamp deer (barasingha) alongside its tigers, though in smaller numbers than the larger population found at nearby Dudhwa National Park.",
  },
  {
    q: "Should I combine Pilibhit with Dudhwa in one trip?",
    a: "Many wildlife travellers do, since both parks share the terai ecosystem and Nepal-border geography and are a few hours' drive apart via Lakhimpur Kheri, Shahjahanpur, and Bareilly. Combining them gives a fuller sense of the terai landscape and its wildlife than either park alone.",
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
  { id: "introduction", title: "A Quieter Terai Reserve", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Pilibhit", level: 2 },
  { id: "wildlife-safaris", title: "Wildlife & Safari Zones", level: 2 },
  { id: "flute-making", title: "Pilibhit's Flute-Making Heritage", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PilibhitGuidePage() {
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
              src="/images/destinations/coorg/coorg.jpg"
              alt="Dense terai forest canopy at Pilibhit Tiger Reserve, Uttar Pradesh"
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
                { label: "Uttar Pradesh", href: "/blog/uttar-pradesh-travel-guide" },
                { label: "Pilibhit Tiger Reserve", href: null },
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
                "Pilibhit Tiger Reserve",
                "Terai",
                "Wildlife Safari",
                "Sharda River",
                "Flute Making",
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
              Pilibhit Tiger Reserve: Safari & Visit Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Dense terai forest along the Sharda river, one of India's
              higher tiger densities relative to area, and a quiet, largely
              undiscovered alternative to the country's better-known
              reserves.
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
                  text: "Pilibhit, Uttar Pradesh",
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
                  <h2>A Quieter Terai Reserve</h2>
                  <p>
                    <strong>Pilibhit Tiger Reserve</strong> lies in the
                    northern reaches of{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    , its dense terai forest running along the Sharda river
                    right up against the Nepal border. Notified as a tiger
                    reserve in 2014, it shares the broad terai ecosystem of
                    its better-known neighbour,{" "}
                    <Link href="/blog/dudhwa-travel-guide">
                      Dudhwa National Park
                    </Link>
                    , but sees a fraction of the visitors — which, for
                    travellers who value quiet forest over crowded safari
                    convoys, is exactly the appeal.
                  </p>
                  <p>
                    What sets Pilibhit apart is density: studies and forest
                    department estimates have repeatedly placed it among
                    India's reserves with the highest tiger density relative
                    to its forest area, a striking statistic for a park that
                    remains genuinely under-the-radar compared to Ranthambore
                    or Corbett. The dense sal and teak-mixed forest, laced
                    with the Sharda and Chuka rivers, also supports swamp
                    deer and a rich variety of resident and migratory birds.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🐅</span> Pilibhit at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Pilibhit district, Uttar Pradesh",
                        },
                        {
                          icon: "🚗",
                          label: "From Bareilly",
                          value: "~65 km by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Dec – Mar" },
                        {
                          icon: "🐯",
                          label: "Known For",
                          value: "High tiger density, terai forest",
                        },
                        {
                          icon: "🎼",
                          label: "Local Craft",
                          value: "Traditional flute making",
                        },
                        {
                          icon: "🚪",
                          label: "Park Open",
                          value: "Mid-Nov – Mid-Jun",
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
                  <h2>Best Time to Visit Pilibhit</h2>
                  <p>
                    Like every terai reserve on this border, Pilibhit's
                    calendar is shaped entirely by the monsoon.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Dec – Mar",
                        emoji: "❄️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather and the most reliable window for sightings, with thinner undergrowth improving visibility across the forest tracks.",
                      },
                      {
                        season: "Nov, Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Shoulder season",
                        text: "The park opens mid-November and closes mid-June. Late season gets hot, but animals cluster more predictably around water sources.",
                      },
                      {
                        season: "Mid-Jun – Mid-Nov",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Park closed",
                        text: "The reserve shuts for roughly five months during the monsoon breeding season, when the terai floods and tracks become impassable.",
                      },
                      {
                        season: "Early Mornings",
                        emoji: "🌅",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Best sighting window",
                        text: "The first safari slot after the gates open offers the best chance of catching tigers still active near forest edges and riverbanks.",
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
                    <strong>Our pick:</strong> December to March — cool
                    weather, thinning undergrowth, and the best odds for
                    sightings in a reserve already known for its unusually
                    high tiger density.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Pilibhit</h2>
                  <p>
                    Pilibhit is better connected than many terai reserves,
                    thanks to its own railway junction and proximity to
                    Bareilly.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Pilibhit Junction has
                      reasonable connectivity to towns across the region,
                      making it one of the more accessible terai reserves by
                      train.
                    </li>
                    <li>
                      <strong>By road via Bareilly:</strong> Bareilly, about
                      65 km away, is the closer and more practical gateway,
                      with better air and rail links onward. The drive takes
                      roughly 1.5-2 hours.
                    </li>
                    <li>
                      <strong>By road via Lucknow:</strong> Around 250 km
                      away, a longer but workable route if you're combining
                      Pilibhit with{" "}
                      <Link href="/blog/lucknow-travel-guide">Lucknow</Link>{" "}
                      or{" "}
                      <Link href="/blog/dudhwa-travel-guide">Dudhwa</Link>{" "}
                      in the same trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Fly or take the train into
                    Bareilly rather than routing through Lucknow if Pilibhit
                    is your main destination — it cuts hours off the final
                    approach.
                  </div>
                </section>

                {/* ── Wildlife & Safaris ────────────────────────────────── */}
                <section id="wildlife-safaris">
                  <h2>Wildlife & Safari Zones</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/coorg.jpg"
                      alt="Forest track through Pilibhit Tiger Reserve's terai woodland"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Tigers in Unusually High Density</h3>
                  <p>
                    Pilibhit's headline claim is density, not just numbers —
                    camera-trap surveys and forest department estimates have
                    repeatedly placed it among the reserves with the highest
                    tiger-per-square-kilometre figures in India. Sightings
                    still require patience given the thick sal and riverine
                    forest cover, but the odds are genuinely favourable
                    relative to the park's modest visitor footprint.
                  </p>
                  <h3>Swamp Deer & Birdlife</h3>
                  <p>
                    Pilibhit also holds a population of swamp deer
                    (barasingha), smaller than the numbers at Dudhwa but a
                    welcome sight in the reserve's grassland clearings. The
                    Sharda and Chuka riverbanks and associated wetlands draw
                    a strong mix of resident and winter migratory birds,
                    making Pilibhit a worthwhile stop for birders as much as
                    for tiger-spotters.
                  </p>
                  <h3>Safari Zones</h3>
                  <p>
                    Jeep safaris run from designated zones within the
                    reserve, typically booked through the forest department
                    a day or more ahead. Because visitor numbers stay low,
                    safaris here feel noticeably less crowded and rushed
                    than at India's more famous parks — a quieter, more
                    contemplative wildlife experience overall.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Pilibhit rewards patience
                    over a single quick safari — if your schedule allows,
                    book two or three safaris across different zones rather
                    than just one.
                  </div>
                </section>

                {/* ── Flute Making ──────────────────────────────────────── */}
                <section id="flute-making">
                  <h2>Pilibhit's Flute-Making Heritage</h2>
                  <p>
                    Beyond the forest, Pilibhit town carries a distinctive
                    craft identity as one of India's centres for traditional
                    bamboo flute (bansuri) making. Generations of local
                    artisan families have hand-crafted flutes here, supplying
                    musicians across the country — a heritage that rarely
                    makes it into wildlife-focused itineraries but is well
                    worth a short stop if you're passing through town.
                    Watching the careful, largely hand-tooled process of
                    shaping and tuning bamboo into a finished instrument
                    offers a genuinely different side of Pilibhit from its
                    forest reputation.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near Pilibhit</h2>
                  <p>
                    Accommodation is modest and functional, in keeping with
                    the reserve's low-key tourism profile — book ahead
                    during peak winter months.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹1,000–₹2,200/night",
                        picks: [
                          "Basic guesthouses in Pilibhit town",
                          "Simple lodges near the reserve gates",
                          "Budget hotels in Bareilly as a base",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,800–₹5,500/night",
                        picks: [
                          "Forest rest houses near the buffer zone",
                          "Mid-range hotels in Bareilly",
                          "Simple eco-lodges close to the park",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌲",
                        range: "₹7,000–₹15,000+/night",
                        picks: [
                          "Boutique jungle camps in season",
                          "Naturalist-guided premium tented stays",
                          "Upscale hotels in Bareilly city",
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
                  <h2>Suggested Visit Plan (2 Days)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Day 1",
                        title: "Arrival & Evening Safari",
                        color: "bg-amber-700",
                        activities: [
                          "Drive in from Bareilly, check in",
                          "Afternoon jeep safari inside the reserve",
                          "Evening walk through Pilibhit town's market",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Morning Safari & Flute Workshop",
                        color: "bg-forest-600",
                        activities: [
                          "Early morning safari for the best sighting chances",
                          "Visit a local flute-making workshop in town",
                          "Afternoon drive back toward Bareilly or onward to Dudhwa",
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
                    * Travellers with more time often combine Pilibhit with{" "}
                    <Link href="/blog/dudhwa-travel-guide">
                      Dudhwa National Park
                    </Link>{" "}
                    for a fuller terai wildlife circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat Near Pilibhit</h2>
                  <ul>
                    <li>
                      <strong>Local dhabas in Pilibhit town:</strong> Simple
                      North Indian vegetarian and non-vegetarian meals at
                      reasonable prices.
                    </li>
                    <li>
                      <strong>Lodge and resort dining:</strong> Most stays
                      near the reserve offer set meals, often included with
                      accommodation.
                    </li>
                    <li>
                      <strong>Bareilly for wider options:</strong> If
                      you're based in Bareilly, the city has a broader range
                      of restaurants and street food than Pilibhit town
                      itself.
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
                            "₹4,000",
                            "₹10,000",
                          ],
                          ["Jeep safari (per safari)", "₹2,000", "₹3,000", "₹4,500"],
                          ["Food/day", "₹450", "₹1,000", "₹2,200"],
                          ["Park entry & permits/day", "₹250", "₹250", "₹450"],
                          ["Local transport/day", "₹400", "₹1,000", "₹2,000"],
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
                    * Figures are per person, per day. Jeep safari costs are
                    usually shared across the vehicle.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Pilibhit</h2>
                  <ul>
                    <li>
                      <strong>Book safaris ahead:</strong> Even with lower
                      visitor numbers, forest department slots are limited
                      and best reserved a day or two in advance.
                    </li>
                    <li>
                      <strong>Route via Bareilly, not Lucknow:</strong>{" "}
                      It's significantly closer and cuts real time off the
                      journey.
                    </li>
                    <li>
                      <strong>Don't skip the flute workshops:</strong> A
                      short visit to a local artisan adds a cultural layer
                      most wildlife travellers miss entirely.
                    </li>
                    <li>
                      <strong>Pack for cold winter mornings:</strong> Early
                      safaris can be surprisingly chilly through December
                      and January.
                    </li>
                    <li>
                      <strong>Check park opening dates:</strong> Pilibhit is
                      closed mid-June to mid-November — confirm before
                      travelling near these windows.
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
                          "Book safari slots a day or two ahead",
                          "Take the Bareilly route for a shorter approach",
                          "Visit a local flute-making workshop in town",
                          "Book two or more safaris if time allows",
                          "Pack warm layers for winter mornings",
                          "Combine with Dudhwa for a fuller terai trip",
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
                          "Expect big resort-style infrastructure",
                          "Travel between mid-June and mid-November",
                          "Skip pre-booking your safari",
                          "Assume Pilibhit has Dudhwa's rhinos",
                          "Overlook Pilibhit town's craft heritage",
                          "Rely solely on the Lucknow route",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Pilibhit
                    with{" "}
                    <Link href="/blog/dudhwa-travel-guide">
                      Dudhwa National Park
                    </Link>{" "}
                    for a complete terai wildlife circuit, both reachable
                    within a broader{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>{" "}
                    itinerary.
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
                  "Pilibhit Tiger Reserve",
                  "Uttar Pradesh",
                  "Terai",
                  "Wildlife Safari",
                  "Sharda River",
                  "Tiger Reserve",
                  "Flute Making",
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

              <RelatedPostsGrid currentSlug="pilibhit-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="pilibhit-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
