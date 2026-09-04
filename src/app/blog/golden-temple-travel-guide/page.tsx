// src/app/blog/golden-temple-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Golden Temple Guide: Timings, Langar & Tips",
  description:
    "Complete Golden Temple guide — Sri Harmandir Sahib's history and architecture, the Amrit Sarovar, the langar community kitchen, etiquette, best time to visit, and a full visit plan.",
  keywords:
    "Golden Temple guide, Sri Harmandir Sahib, Amritsar, langar, Amrit Sarovar, Golden Temple timings, Golden Temple etiquette, Akal Takht, Sikh pilgrimage",
  openGraph: {
    title: "Golden Temple Guide: Timings, Langar & Tips",
    description:
      "Sikhism's holiest shrine, a sacred pool, and one of the largest free community kitchens on earth — the complete guide to visiting the Golden Temple.",
    url: "https://club.kudozz.in/blog/golden-temple-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/manali/hadimba-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Ornate temple architecture reflected in water, evoking the Golden Temple and its sacred Amrit Sarovar pool",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Temple Guide: Timings, Langar & Tips",
    description:
      "Sikhism's holiest shrine and one of the largest free community kitchens on earth — the complete Golden Temple guide.",
    images: ["/images/destinations/manali/hadimba-temple.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/golden-temple-travel-guide",
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
          headline: "Golden Temple Guide: Timings, Langar & Tips",
          description:
            "Complete Golden Temple guide — Sri Harmandir Sahib's history and architecture, the Amrit Sarovar, the langar community kitchen, etiquette, best time to visit, and a full visit plan.",
          image:
            "https://club.kudozz.in/images/destinations/manali/hadimba-temple.jpg",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
            "@id": "https://club.kudozz.in/blog/golden-temple-travel-guide",
          },
          keywords:
            "Golden Temple, Sri Harmandir Sahib, Amritsar, langar, Amrit Sarovar, Sikh pilgrimage",
          about: {
            "@type": "Place",
            name: "Golden Temple",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amritsar",
              addressRegion: "Punjab",
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
                name: "Punjab",
                item: "https://club.kudozz.in/blog/punjab-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Golden Temple",
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
    q: "Do I need to cover my head, and are head coverings provided?",
    a: "Yes — all visitors, regardless of gender or religion, must cover their head before entering the complex. Scarves are provided free at the entrance if you don't have your own, though carrying a simple scarf is a good idea.",
  },
  {
    q: "Is entry to the Golden Temple free?",
    a: "Yes, entry, darshan, and the langar meal are all completely free, in keeping with core Sikh principles. Donations are welcomed but never required or expected.",
  },
  {
    q: "What is langar, and can visitors help serve it?",
    a: "Langar is the temple's free community kitchen, serving simple vegetarian meals to all visitors regardless of religion, caste, or background — among the largest free community kitchens in the world, feeding tens of thousands daily. Many visitors choose to volunteer (sewa) in the kitchen or dining hall, and this is genuinely welcomed.",
  },
  {
    q: "What is the best time of day to visit?",
    a: "The complex is open 24 hours, and early morning or late night are the quietest, most contemplative times to visit — noticeably less crowded than the daytime, and many say even more beautiful when lit at night.",
  },
  {
    q: "Is photography allowed inside the Golden Temple?",
    a: "General photography is allowed in most outer areas, but restrictions apply in certain inner sanctum areas — follow posted signage and staff guidance, and be respectful of the space's sanctity regardless of what's technically permitted.",
  },
  {
    q: "What should I avoid bringing into the complex?",
    a: "Alcohol, tobacco, and meat are not permitted within the complex, in line with Sikh principles observed at the shrine. Shoes must be removed and feet washed before entering.",
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
  { id: "introduction", title: "Sikhism's Holiest Shrine", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach the Golden Temple", level: 2 },
  { id: "things-to-do", title: "The Temple, the Sarovar & the Langar", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "The Langar Experience", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips & Etiquette", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GoldenTempleGuidePage() {
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
              alt="Ornate temple architecture reflected in water, evoking the Golden Temple and its sacred Amrit Sarovar pool"
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
                { label: "Punjab", href: "/blog/punjab-travel-guide" },
                { label: "Golden Temple", href: null },
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
                "Golden Temple",
                "Harmandir Sahib",
                "Amritsar",
                "Punjab",
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
              Golden Temple Guide: Timings, Langar & Tips
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A gold-plated shrine rising from a sacred pool, and a free
              kitchen that feeds tens of thousands a day regardless of
              faith — everything you need to visit Sri Harmandir Sahib well.
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
                  text: "Amritsar, Punjab",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,100 words",
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
                  <h2>Sikhism's Holiest Shrine</h2>
                  <p>
                    The <strong>Golden Temple (Sri Harmandir Sahib)</strong>,
                    in the heart of Amritsar, is the holiest Gurdwara in
                    Sikhism. Its upper floors are plated in gold — an
                    addition made in the early 19th century under{" "}
                    <strong>Maharaja Ranjit Singh</strong> — giving the
                    temple its famous shimmering appearance, especially
                    striking when reflected in the surrounding{" "}
                    <strong>Amrit Sarovar</strong>, the sacred "pool of
                    nectar" that gives Amritsar its name.
                  </p>
                  <p>
                    One of the temple's most remarkable features is its{" "}
                    <strong>langar</strong> — a free community kitchen
                    serving simple, wholesome meals to every visitor
                    regardless of religion, caste, or background, running
                    continuously and feeding tens of thousands of people
                    daily. It's among the largest free community kitchens in
                    the world, and genuinely one of the most moving things a
                    visitor can experience here — not a footnote, but a core
                    part of what makes a visit unforgettable.
                  </p>
                  <p>
                    The complex is open 24 hours a day. For the wider city
                    around it, see our{" "}
                    <Link href="/blog/amritsar-travel-guide">
                      Amritsar travel guide
                    </Link>
                    .
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🛕</span> Golden Temple at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "Amritsar, Punjab" },
                        {
                          icon: "🕐",
                          label: "Hours",
                          value: "Open 24 hours",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Early morning / late night" },
                        {
                          icon: "🍲",
                          label: "Known For",
                          value: "Langar (free kitchen)",
                        },
                        {
                          icon: "💰",
                          label: "Entry",
                          value: "Free",
                        },
                        {
                          icon: "🧕",
                          label: "Dress",
                          value: "Head covering required",
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
                  <h2>Best Time to Visit the Golden Temple</h2>
                  <p>
                    Since the complex is open 24 hours, timing here is less
                    about season and more about time of day — and, to a
                    lesser extent, avoiding Punjab's peak summer heat for
                    comfortable travel to and from Amritsar.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Early Morning",
                        emoji: "🌅",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Quiet, contemplative, and cool — many devotees come at dawn, and the temple feels genuinely different from its midday crowds.",
                      },
                      {
                        season: "Late Night",
                        emoji: "🌙",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Equally special",
                        text: "The temple is beautifully lit and noticeably less crowded — a distinctive advantage of its 24-hour opening that many visitors miss.",
                      },
                      {
                        season: "Midday",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Busiest",
                        text: "The most crowded window, especially on weekends and holidays — still worthwhile, just expect queues.",
                      },
                      {
                        season: "Oct – Mar",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Best season for Amritsar overall",
                        text: "Comfortable weather for walking the wider city around your temple visits.",
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
                    <strong>Our pick:</strong> Early morning or late at
                    night — the temple at its quietest, most contemplative
                    best.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach the Golden Temple</h2>
                  <ul>
                    <li>
                      <strong>Within Amritsar:</strong> The temple sits in
                      the heart of the old city, walkable from most old-city
                      accommodation.
                    </li>
                    <li>
                      <strong>From the airport/railway station:</strong> A
                      short auto-rickshaw or taxi ride, typically 15-25
                      minutes depending on traffic.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Staying within walking
                    distance of the temple lets you slip in for an
                    early-morning or late-night visit without arranging
                    transport — genuinely one of the best ways to experience
                    it.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Temple, the Sarovar & the Langar</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/manali/hadimba-temple.jpg"
                      alt="Temple architecture reflecting in a sacred pool"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>The Sanctum & Parikrama</h3>
                  <p>
                    Devotees circumambulate the Amrit Sarovar along a marble
                    walkway (the parikrama) before crossing a causeway to the
                    gold-plated sanctum itself, where continuous recitation
                    of Sikh scripture takes place.
                  </p>
                  <h3>Langar — The Free Community Kitchen</h3>
                  <p>
                    Langar operates continuously, serving simple vegetarian
                    meals to all visitors. Many travelers choose to
                    volunteer (sewa) — helping serve food, wash dishes, or
                    clean the dining hall — a genuinely welcomed and often
                    moving way to participate rather than just observe.
                  </p>
                  <h3>Akal Takht</h3>
                  <p>
                    Standing adjacent to the main shrine, the Akal Takht is
                    the seat of Sikh temporal authority — one of the
                    complex's most significant structures beyond the golden
                    sanctum itself.
                  </p>
                  <h3>Central Sikh Museum</h3>
                  <p>
                    Located within the complex, this museum documents Sikh
                    history through paintings and artifacts — a worthwhile
                    stop for context before or after visiting the sanctum.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay Near the Golden Temple</h2>
                  <p>
                    In keeping with the Sikh tradition of hospitality,
                    free or low-cost pilgrim accommodation (sarai) is
                    available near the complex, alongside a full range of
                    standard hotels.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "Free – ₹1,500/night",
                        picks: [
                          "Free pilgrim lodging (Sarai), temple complex",
                          "Budget guesthouses, old city",
                          "Simple hotels near the entrance",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,500–₹5,000/night",
                        picks: [
                          "Boutique hotels overlooking the temple",
                          "Business hotels, walking distance",
                          "Heritage-style guesthouses",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🛕",
                        range: "₹6,000–₹14,000+/night",
                        picks: [
                          "Premium hotels with temple views",
                          "International chain properties",
                          "Full-service luxury stays",
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
                  <h2>Suggested Visit Plan</h2>
                  <p>
                    Allow at least half a day — more if you plan to
                    participate in langar sewa.
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Dawn",
                        title: "Early Visit",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive before sunrise for the quietest darshan",
                          "Walk the parikrama around the Amrit Sarovar",
                          "Cross to the sanctum for darshan",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Langar & Museum",
                        color: "bg-sky-600",
                        activities: [
                          "Eat at the langar, or volunteer for sewa",
                          "Visit the Central Sikh Museum",
                          "See the Akal Takht",
                        ],
                      },
                      {
                        day: "Night",
                        title: "Return After Dark",
                        color: "bg-forest-600",
                        activities: [
                          "Return in the evening for the illuminated temple",
                          "Enjoy the quieter, more contemplative atmosphere",
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

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>The Langar Experience</h2>
                  <ul>
                    <li>
                      <strong>What's served:</strong> A simple, wholesome
                      vegetarian meal — typically dal, roti, rice, and a
                      vegetable dish — served to every visitor without
                      distinction.
                    </li>
                    <li>
                      <strong>How it works:</strong> Visitors sit in long
                      rows on the floor and are served by volunteers; you
                      simply join the line and take a seat.
                    </li>
                    <li>
                      <strong>Volunteering (sewa):</strong> Helping serve
                      food, wash dishes, or prepare ingredients is genuinely
                      welcomed and open to all visitors — ask a volunteer
                      how to join in.
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
                          {["Item", "Cost"].map((h) => (
                            <th
                              key={h}
                              className="text-left p-3 border border-stone-200 font-semibold text-stone-700"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Entry / darshan", "Free"],
                          ["Langar meal", "Free"],
                          ["Head covering (if not carrying your own)", "Free, provided at entrance"],
                          ["Donation (optional)", "As you wish"],
                          ["Local transport to/from", "₹100–₹300"],
                        ].map(([exp, c], i) => (
                          <tr
                            key={exp}
                            className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                          >
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">
                              {exp}
                            </td>
                            <td className="p-3 border border-stone-200 text-stone-600">
                              {c}
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
                    * Entry and all core experiences are free, in keeping
                    with Sikh principles. Donations are welcomed but never
                    required.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips & Etiquette</h2>
                  <ul>
                    <li>
                      <strong>Cover your head:</strong> Required for all
                      visitors — a scarf is provided free at the entrance
                      if you don't have one.
                    </li>
                    <li>
                      <strong>Remove shoes and wash feet:</strong> Required
                      before entering — free shoe storage is available at
                      the entrance.
                    </li>
                    <li>
                      <strong>Avoid alcohol, tobacco, and meat:</strong> Not
                      permitted within the complex, out of respect for its
                      sanctity.
                    </li>
                    <li>
                      <strong>Follow photography guidance:</strong> General
                      photography is fine in most areas, but restrictions
                      apply in certain inner sanctum areas — follow posted
                      signage.
                    </li>
                    <li>
                      <strong>Visit at an off-peak hour:</strong> Early
                      morning or late night for a quieter, more
                      contemplative experience.
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
                          "Cover your head before entering",
                          "Remove your shoes and wash your feet",
                          "Try the langar meal, or volunteer for sewa",
                          "Visit early morning or late at night for fewer crowds",
                          "Follow the flow of the parikrama respectfully",
                          "Carry a scarf of your own for convenience",
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
                          "Bring alcohol, tobacco, or meat into the complex",
                          "Enter without covering your head",
                          "Photograph in areas where it's restricted",
                          "Rush through as a quick photo stop",
                          "Expect to pay for entry, langar, or darshan",
                          "Wear revealing clothing",
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
                    <strong>🗺️ Extend the trip:</strong> Combine your visit
                    with the wider{" "}
                    <Link href="/blog/amritsar-travel-guide">
                      Amritsar travel guide
                    </Link>{" "}
                    and the daily ceremony at the{" "}
                    <Link href="/blog/wagah-border-travel-guide">
                      Wagah Border
                    </Link>
                    .
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
                  "Golden Temple",
                  "Harmandir Sahib",
                  "Amritsar",
                  "Punjab",
                  "Langar",
                  "Sikh Heritage",
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

              <RelatedPostsGrid currentSlug="golden-temple-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="golden-temple-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
