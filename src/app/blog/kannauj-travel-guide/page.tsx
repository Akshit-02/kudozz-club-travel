// src/app/blog/kannauj-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kannauj Travel Guide: India's Perfume Capital",
  description:
    "Complete Kannauj guide — the deg-bhapka attar-distillation tradition, working perfume workshops, Harsha's ancient capital, the Perfume Museum, temples and fort ruins, and how to reach.",
  keywords:
    "Kannauj travel guide, Kannauj ittar, Ittar Nagri, Kannauj attar, deg bhapka, Kannauj Perfume Museum, mitti attar, Harsha Kannauj history, Someshwar Nath Temple, Tirwa Fort, how to reach Kannauj",
  openGraph: {
    title: "Kannauj Travel Guide: India's Perfume Capital",
    description:
      "Known as Ittar Nagri — India's perfume capital, where the centuries-old deg-bhapka attar-distillation process is still practiced by family-run workshops.",
    url: "https://club.kudozz.in/blog/kannauj-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient historic streets of Kannauj, India's perfume capital",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kannauj Travel Guide: India's Perfume Capital",
    description:
      "The deg-bhapka attar tradition, family-run perfume workshops, and Kannauj's deep history as Harsha's 7th-century capital — the complete guide.",
    images: ["/images/destinations/hampi/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/kannauj-travel-guide",
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
          headline: "Kannauj Travel Guide: India's Perfume Capital",
          description:
            "Complete Kannauj guide — the deg-bhapka attar-distillation tradition, working perfume workshops, Harsha's ancient capital, the Perfume Museum, temples and fort ruins, and how to reach.",
          image: "https://club.kudozz.in/images/destinations/hampi/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/kannauj-travel-guide",
          },
          keywords:
            "Kannauj, ittar, attar, perfume capital, deg bhapka, Uttar Pradesh, ancient history",
          about: {
            "@type": "Place",
            name: "Kannauj",
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
                name: "Kannauj",
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
    q: "Why is Kannauj called India's perfume capital?",
    a: "Kannauj has practiced traditional attar (ittar) distillation for centuries using the deg-bhapka method — copper stills heating natural ingredients like rose, sandalwood, and mitti (earth-scented attar made from baked clay) into concentrated, alcohol-free perfumes. Dozens of small, family-run distilleries still operate this way, earning the town the name 'Ittar Nagri.'",
  },
  {
    q: "Can tourists visit a working attar workshop in Kannauj?",
    a: "Yes, many family-run attar businesses welcome visitors to see the deg-bhapka distillation process firsthand, and most also sell genuine ittar directly from the workshop — a far more authentic experience than buying from a general market stall.",
  },
  {
    q: "What is mitti attar?",
    a: "Mitti attar is a distinctive Kannauj specialty made by baking clay into unglazed earthen discs, then distilling them in water to capture the scent of rain on dry earth — replicating the smell known as petrichor in a wearable perfume. It's one of the town's most unique and sought-after products.",
  },
  {
    q: "What is Kannauj's historical significance?",
    a: "Kannauj was the capital of King Harsha's powerful 7th-century empire, one of ancient India's most significant political centres, and later served as the capital of the Gahadavala dynasty. Its long history as a seat of power is layered beneath its present-day identity as a perfume town.",
  },
  {
    q: "How do I reach Kannauj?",
    a: "Kannauj has its own railway station on the Kanpur-Farrukhabad line. By road, it's about 80 km from Kanpur and around 150 km from Lucknow, making it a reasonable day trip or overnight stop from either city.",
  },
  {
    q: "Is there a Perfume Museum in Kannauj?",
    a: "Yes, a small Kannauj Perfume Museum documents the town's centuries-old attar-making tradition, displaying historic distillation equipment and the story behind the craft — a useful stop before or after visiting a working workshop.",
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
  { id: "introduction", title: "Ittar Nagri — The Perfume Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Kannauj", level: 2 },
  { id: "attar-history", title: "Attar Craft & Ancient History", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function KannaujGuidePage() {
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
              src="/images/destinations/hampi/hero.jpg"
              alt="Ancient historic streets of Kannauj, India's perfume capital"
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
                { label: "Kannauj", href: null },
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
                "Kannauj",
                "Ittar",
                "Perfume Capital",
                "Attar",
                "Ancient History",
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
              Kannauj Travel Guide: India's Perfume Capital
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Known as Ittar Nagri — where the centuries-old deg-bhapka
              attar-distillation tradition still runs through small,
              family-owned workshops, layered over a history stretching
              back to King Harsha's 7th-century empire.
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
                  text: "Kannauj, Uttar Pradesh",
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
                  <h2>Ittar Nagri — The Perfume Capital</h2>
                  <p>
                    <strong>Kannauj</strong>, a modest town in{" "}
                    <Link href="/blog/uttar-pradesh-travel-guide">
                      Uttar Pradesh
                    </Link>
                    , holds a place in Indian craft and history that far
                    outsizes its present-day footprint. It's known across
                    the country as <strong>Ittar Nagri</strong> — the city
                    of ittar — home to a centuries-old tradition of
                    attar-distillation still carried out by small,
                    family-run businesses using techniques passed down
                    through generations.
                  </p>
                  <p>
                    Long before it was a perfume town, Kannauj was one of
                    ancient India's great political centres — the capital of
                    Emperor Harsha's 7th-century empire, and later of the
                    Gahadavala dynasty. That deep history sits quietly
                    beneath the town's present identity, visible in scattered
                    temples and fort ruins rather than grand monuments, which
                    is part of what makes Kannauj feel like a genuine
                    off-beat find rather than a manufactured tourist stop.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🌸</span> Kannauj at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Central Uttar Pradesh",
                        },
                        {
                          icon: "🚗",
                          label: "From Kanpur",
                          value: "~80 km by road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
                        {
                          icon: "🌸",
                          label: "Known For",
                          value: "Attar / Ittar distillation",
                        },
                        {
                          icon: "🏛️",
                          label: "History",
                          value: "Capital of Harsha's empire",
                        },
                        {
                          icon: "🏺",
                          label: "Speciality",
                          value: "Mitti attar (earth-scent)",
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
                  <h2>Best Time to Visit Kannauj</h2>
                  <p>
                    Kannauj is a year-round destination for perfume
                    workshops, but comfortable sightseeing weather narrows
                    the ideal window considerably.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, comfortable weather for walking through the old town, visiting temples, and spending unhurried time in attar workshops.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🥵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Hot — plan around it",
                        text: "Temperatures rise sharply; workshop visits are still possible but outdoor sightseeing becomes uncomfortable by midday.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Humid and occasionally wet, though indoor workshop visits remain unaffected — a workable but less scenic window.",
                      },
                      {
                        season: "Any Season",
                        emoji: "🌸",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Attar workshops year-round",
                        text: "Distillation happens in seasonal batches tied to when specific flowers and ingredients are available — some processes, like rose attar, are tied to spring harvests.",
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
                    <strong>Our pick:</strong> October to March — comfortable
                    weather for wandering the old town and spending real
                    time at workshops without the summer heat cutting your
                    visit short.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Kannauj</h2>
                  <p>
                    Kannauj sits close enough to both Kanpur and Lucknow to
                    make for an easy add-on to a central Uttar Pradesh
                    itinerary.
                  </p>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Kannauj railway station
                      sits on the Kanpur-Farrukhabad line, with reasonable
                      onward connectivity for a town of its size.
                    </li>
                    <li>
                      <strong>By road from Kanpur:</strong> About 80 km,
                      roughly a 2-hour drive — the closer and more direct
                      approach for most travellers.
                    </li>
                    <li>
                      <strong>By road from Lucknow:</strong> Around 150 km,
                      a longer but manageable drive, useful if you're basing
                      yourself in{" "}
                      <Link href="/blog/lucknow-travel-guide">Lucknow</Link>{" "}
                      for a wider Uttar Pradesh trip.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Arrange a local guide or
                    contact a workshop owner ahead of time — many attar
                    businesses are small, unmarked family operations that
                    are easier to find with local help than by wandering the
                    old town alone.
                  </div>
                </section>

                {/* ── Attar & History ────────────────────────────────────── */}
                <section id="attar-history">
                  <h2>Attar Craft & Ancient History</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/hero.jpg"
                      alt="Old town streets and historic character of Kannauj"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Deg-Bhapka Distillation Method</h3>
                  <p>
                    Kannauj's attar is made using an ancient technique
                    called <strong>deg-bhapka</strong> — copper stills
                    (deg) heated over wood or dung fires, with flower
                    petals, sandalwood, or other natural ingredients steeped
                    in water. The resulting steam is carried through a
                    bamboo pipe into a receiving vessel (bhapka) containing
                    sandalwood oil, which slowly absorbs the fragrant
                    compounds over hours of careful, closely watched
                    distillation. Unlike modern alcohol-based perfumes,
                    genuine ittar is entirely alcohol-free and often takes
                    days to properly mature.
                  </p>
                  <h3>Mitti Attar — The Scent of Rain</h3>
                  <p>
                    Among Kannauj's specialties, mitti attar stands out for
                    its sheer originality: unglazed clay is baked into
                    discs, then distilled using the same deg-bhapka process
                    to capture petrichor — the distinctive smell of rain
                    striking dry earth — as a wearable fragrance. It's a
                    product unique to this tradition and a genuinely
                    memorable thing to take home.
                  </p>
                  <h3>Visiting a Working Workshop</h3>
                  <p>
                    Several family-run attar businesses in Kannauj welcome
                    visitors to watch the distillation process firsthand and
                    buy directly from the source — a far more meaningful
                    experience than picking up ittar from a general market
                    stand. The small Kannauj Perfume Museum is a useful
                    first stop, providing context on the craft's history
                    before you see it practiced live.
                  </p>
                  <h3>Ancient Kannauj: Harsha, Temples & Fort Ruins</h3>
                  <p>
                    In the 7th century, Kannauj was the capital of Emperor
                    Harsha's empire, one of the most powerful political
                    centres in early medieval India, and it later served as
                    capital under the Gahadavala dynasty. Little of that
                    grandeur survives above ground today, but the{" "}
                    <strong>Someshwar Nath Temple</strong> and{" "}
                    <strong>Ajaipal Temple</strong> remain active places of
                    worship with old roots, while the scattered{" "}
                    <strong>Tirwa Fort ruins</strong> nearby offer a quieter,
                    more atmospheric glimpse into the region's layered past
                    for travellers willing to seek them out.
                  </p>
                  <div
                    className="bg-forest-50 border-l-4 border-forest-500 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Buy attar directly from a
                    workshop rather than a market stall — you'll get a more
                    reliable sense of what's genuine, and often a chance to
                    watch part of the distillation process yourself.
                  </div>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Kannauj</h2>
                  <p>
                    Kannauj has limited accommodation given its size; many
                    travellers visit as a day trip from Kanpur or Lucknow
                    instead of staying overnight.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🛏️",
                        range: "₹700–₹1,500/night",
                        picks: [
                          "Simple hotels near the town centre",
                          "Basic lodges near the railway station",
                          "Guesthouses on the highway",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹1,800–₹3,500/night",
                        picks: [
                          "Standard hotels along the Kanpur road",
                          "Small business hotels in town",
                          "Comfortable stays with basic amenities",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏨",
                        range: "Stay in Kanpur instead",
                        picks: [
                          "Kannauj has no true luxury properties",
                          "Best upscale options are in Kanpur (~80 km)",
                          "Visit Kannauj as a day trip from a Kanpur base",
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
                  <h2>Suggested Visit Plan (1 Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "Perfume Museum & Workshop Visit",
                        color: "bg-purple-700",
                        activities: [
                          "Start at the Kannauj Perfume Museum for context",
                          "Visit a family-run attar distillery to watch deg-bhapka",
                          "Buy genuine ittar directly from the workshop",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Temples & Old Town",
                        color: "bg-amber-700",
                        activities: [
                          "Visit Someshwar Nath Temple and Ajaipal Temple",
                          "Walk through the old town's historic quarters",
                          "Optional detour to Tirwa Fort ruins nearby",
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
                    * Kannauj is easily covered in a focused single day —
                    most travellers pair it with{" "}
                    <Link href="/blog/lucknow-travel-guide">Lucknow</Link> or
                    Kanpur rather than staying overnight.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Kannauj</h2>
                  <ul>
                    <li>
                      <strong>Local dhabas:</strong> Simple, affordable
                      North Indian vegetarian meals around the town centre
                      and near the railway station.
                    </li>
                    <li>
                      <strong>Street food stalls:</strong> Chaat and
                      regional snacks in the old town's market lanes.
                    </li>
                    <li>
                      <strong>Sweet shops:</strong> Traditional Uttar
                      Pradesh sweets worth trying alongside the attar
                      shopping.
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
                            "₹900",
                            "₹2,500",
                            "Stay in Kanpur",
                          ],
                          ["Local transport/day", "₹300", "₹700", "₹1,500"],
                          ["Food/day", "₹350", "₹800", "₹1,800"],
                          ["Attar (small bottle)", "₹300", "₹800", "₹2,000+"],
                          ["Perfume Museum entry", "₹20–₹50", "₹20–₹50", "₹20–₹50"],
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
                    * Figures are per person, per day. Genuine ittar prices
                    vary hugely by ingredient — sandalwood and mitti attar
                    sit at the higher end.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Kannauj</h2>
                  <ul>
                    <li>
                      <strong>Buy directly from workshops:</strong> Genuine
                      hand-distilled ittar is easiest to verify at the
                      source rather than from unmarked market stalls.
                    </li>
                    <li>
                      <strong>Arrange visits ahead where possible:</strong>{" "}
                      Many attar businesses are small family operations —
                      calling ahead or going with a local guide helps you
                      find the right ones.
                    </li>
                    <li>
                      <strong>Ask about the deg-bhapka process:</strong>{" "}
                      Most workshop owners are happy to explain the
                      distillation steps — it's part of what makes the
                      visit worthwhile.
                    </li>
                    <li>
                      <strong>Don't expect polished tourist infrastructure:</strong>{" "}
                      Kannauj is an authentic working town, not a curated
                      tourist attraction — that's part of its charm.
                    </li>
                    <li>
                      <strong>Combine with Kanpur or Lucknow:</strong>{" "}
                      Given limited stay options, most visits work best as
                      a day trip from a nearby city.
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
                          "Visit the Perfume Museum before a workshop",
                          "Buy attar directly from a family-run distillery",
                          "Try mitti attar as a distinctive souvenir",
                          "Ask questions about the deg-bhapka process",
                          "Combine with Kanpur or Lucknow for a base",
                          "Visit Someshwar Nath and Ajaipal temples",
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
                          "Expect large hotels or resort-style stays",
                          "Buy ittar from unverified street vendors only",
                          "Rush through a workshop visit",
                          "Confuse Kannauj's ittar with alcohol-based perfume",
                          "Skip the town's ancient temple sites",
                          "Assume luxury accommodation is available locally",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Kannauj with{" "}
                    <Link href="/blog/lucknow-travel-guide">Lucknow</Link>{" "}
                    for Nawabi history and cuisine, both easy additions to a
                    wider{" "}
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
                  "Kannauj",
                  "Ittar",
                  "Uttar Pradesh",
                  "Perfume Capital",
                  "Attar",
                  "Ancient History",
                  "Off-beat",
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

              <RelatedPostsGrid currentSlug="kannauj-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="kannauj-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
