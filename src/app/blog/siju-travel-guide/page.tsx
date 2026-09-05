// src/app/blog/siju-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Siju Cave Guide: Caving & Best Time",
  description:
    "Complete Siju Cave guide — one of India's longest cave systems, bat colonies and limestone formations on the Simsang River, how to reach from Tura, and a full visit plan.",
  keywords:
    "Siju Cave, Dobakkol, Simsang River, South Garo Hills, Meghalaya caving, how to reach Siju, Garo Hills adventure, Balpakram Siju combined trip",
  openGraph: {
    title: "Siju Cave Guide: Caving & Best Time",
    description:
      "One of India's longest cave systems, on the banks of the Simsang River — a genuine, undeveloped caving adventure in Meghalaya's South Garo Hills.",
    url: "https://club.kudozz.in/blog/siju-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/hampi/virupaksha.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient stone and rock formations, evoking the limestone cave system of Siju in Meghalaya's South Garo Hills",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Siju Cave Guide: Caving & Best Time",
    description:
      "One of India's longest cave systems, riverside in Meghalaya's South Garo Hills — genuine, undeveloped caving adventure.",
    images: ["/images/destinations/hampi/virupaksha.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/siju-travel-guide",
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
          headline: "Siju Cave Guide: Caving & Best Time",
          description:
            "Complete Siju Cave guide — one of India's longest cave systems, bat colonies and limestone formations on the Simsang River, how to reach from Tura, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/hampi/virupaksha.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
            "@id": "https://club.kudozz.in/blog/siju-travel-guide",
          },
          keywords: "Siju Cave, Dobakkol, Simsang River, South Garo Hills, Meghalaya",
          about: {
            "@type": "Place",
            name: "Siju Cave",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Meghalaya",
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
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Siju Cave",
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
    q: "How does Siju Cave compare to more famous Meghalaya caves like Mawsmai?",
    a: "Siju is far less developed than the well-known Khasi Hills caves near Cherrapunji. There's no lit walkway or easy tourist path — this is genuine, undeveloped caving that requires proper preparation, appealing to more adventurous travelers rather than casual sightseers.",
  },
  {
    q: "Is a guide necessary at Siju Cave?",
    a: "Yes. Given the undeveloped nature of the cave system and the lack of infrastructure, a local guide with proper caving knowledge is essential for both safety and navigation.",
  },
  {
    q: "How far is Siju from Tura?",
    a: "Siju is a further journey into South Garo Hills from Tura, the region's main gateway town. Most visitors base themselves in Tura and reach Siju as a day trip or overnight excursion.",
  },
  {
    q: "Can Siju be combined with Balpakram?",
    a: "Yes — both sit within South Garo Hills and can potentially be combined into a single longer trip from Tura, given their shared region, though this requires more time and planning than visiting either alone.",
  },
  {
    q: "What is the best time to visit given safety considerations?",
    a: "October to April, avoiding monsoon season entirely. Heavy rain raises the Simsang River and increases hazard inside the cave system, making conditions genuinely more dangerous.",
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
  { id: "introduction", title: "One of India's Longest Caves", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Siju", level: 2 },
  { id: "things-to-do", title: "The Cave System & Simsang River", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food & Supplies", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SijuGuidePage() {
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
              src="/images/destinations/hampi/virupaksha.jpg"
              alt="Ancient stone and rock formations, evoking the limestone cave system of Siju in Meghalaya's South Garo Hills"
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
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Siju Cave", href: null },
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
              {["Siju Cave", "Simsang River", "Meghalaya", "South Garo Hills"].map(
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
              Siju Cave Guide: Caving & Best Time
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              One of India's longest cave systems, riverside in South Garo
              Hills — genuine, undeveloped caving for travelers who want
              adventure without a lit walkway.
            </p>

            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {[
                {
                  d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "9 min read",
                },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "South Garo Hills, Meghalaya",
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
                  <h2>One of India's Longest Caves</h2>
                  <p>
                    <strong>Siju</strong>, also called "Dobakkol," is home
                    to one of the longest cave systems in India — a
                    genuine adventure-caving destination on the banks of
                    the Simsang River in South Garo Hills. The cave is
                    known for its notable limestone formations and
                    substantial bat colonies, giving it real appeal for
                    anyone with an interest in speleology or off-the-beaten-
                    path natural sites.
                  </p>
                  <p>
                    Unlike Meghalaya's better-known Khasi Hills caves near
                    Cherrapunji — such as Mawsmai, with its lit walkways
                    and easy tourist access — Siju remains considerably
                    less developed. This is genuine, undeveloped caving,
                    reached via{" "}
                    <Link href="/blog/tura-travel-guide">Tura</Link>, and
                    it appeals specifically to more adventurous travelers
                    rather than casual sightseers.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🕳️</span> Siju Cave at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "South Garo Hills, Meghalaya",
                        },
                        {
                          icon: "🚗",
                          label: "Gateway",
                          value: "Tura",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        {
                          icon: "🦇",
                          label: "Known For",
                          value: "Bat colonies, limestone formations",
                        },
                        {
                          icon: "🌊",
                          label: "Setting",
                          value: "Simsang River",
                        },
                        {
                          icon: "🎯",
                          label: "Pairs Well With",
                          value: "Balpakram National Park",
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
                  <h2>Best Time to Visit Siju</h2>
                  <p>
                    Given the caving element and the riverside setting,
                    seasonal timing here is a genuine safety
                    consideration, not just a comfort one.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Dry conditions with lower river levels, giving the safest and most comfortable window for cave exploration.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, pre-monsoon",
                        text: "Still workable, though rising humidity ahead of the monsoon starts to affect conditions.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — avoid",
                        text: "Heavy rain raises the Simsang River and increases hazard inside the cave system — a genuine safety concern, not just an inconvenience.",
                      },
                      {
                        season: "Any season",
                        emoji: "🧗",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Guide mandatory",
                        text: "Regardless of season, a knowledgeable local guide is essential given the cave's undeveloped state.",
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
                    <strong>Our pick:</strong> October to April — lower,
                    safer river and cave conditions, and the only season
                    we'd recommend attempting Siju at all.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Siju</h2>
                  <ul>
                    <li>
                      <strong>Via Tura:</strong> The practical gateway —
                      Siju lies a further journey into South Garo Hills
                      from{" "}
                      <Link href="/blog/tura-travel-guide">Tura</Link>,
                      similar in remoteness to{" "}
                      <Link href="/blog/balpakram-travel-guide">
                        Balpakram
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Local guide essential:</strong> Arrange
                      caving guidance and basic equipment through a
                      Tura-based operator before setting out — this is
                      not a self-guided visit.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Given the shared South
                    Garo Hills region, consider combining Siju with a
                    Balpakram visit to make the most of the long journey
                    out from Tura.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>The Cave System & Simsang River</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/hampi/virupaksha.jpg"
                      alt="Limestone rock formations near Siju Cave, South Garo Hills, Meghalaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Inside the Cave System</h3>
                  <p>
                    Siju Cave's passages feature notable limestone
                    formations and support significant bat colonies.
                    Exploring the system requires proper preparation —
                    sturdy footwear, a reliable light source, and a guide
                    who knows the passages — since there's no lit walkway
                    or marked tourist path as at more developed caves.
                  </p>
                  <h3>The Simsang River Setting</h3>
                  <p>
                    The cave sits on the banks of the Simsang River,
                    adding a scenic riverside setting to the caving
                    experience and offering a pleasant spot to rest before
                    or after exploring underground.
                  </p>
                  <h3>How Siju Compares to Khasi Hills Caves</h3>
                  <p>
                    Travelers who've visited Mawsmai or other
                    well-developed caves near Cherrapunji will find Siju a
                    genuinely different experience — rawer, less
                    commercialized, and requiring real preparation rather
                    than an easy walk-through.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    There's very limited accommodation at Siju itself —
                    plan around a Tura base.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic guesthouses in Tura",
                          "Government tourist lodges",
                          "Simple lodges near nearby towns",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels, Tura",
                          "Circuit house-style stays",
                          "Family-run hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🌄",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Best available rooms in Tura",
                          "Advance booking essential",
                          "Limited premium options in the district",
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
                    Base yourself in{" "}
                    <Link href="/blog/tura-travel-guide">Tura</Link> and
                    treat Siju as a day trip or overnight excursion.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Option 1",
                        title: "Day Trip from Tura",
                        color: "bg-amber-700",
                        activities: [
                          "Early departure from Tura",
                          "Guided cave exploration",
                          "Return to Tura by evening",
                        ],
                      },
                      {
                        day: "Option 2",
                        title: "Combined with Balpakram",
                        color: "bg-sky-600",
                        activities: [
                          "Depart Tura for South Garo Hills",
                          "Visit Balpakram and Siju across the trip",
                          "Overnight nearby, return to Tura",
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
                    * See our{" "}
                    <Link href="/blog/balpakram-travel-guide">
                      Balpakram National Park guide
                    </Link>{" "}
                    for combining both South Garo Hills sites in one trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food & Supplies</h2>
                  <ul>
                    <li>
                      <strong>Carry your own:</strong> Minimal facilities
                      exist at the cave itself, so pack food and water
                      before leaving Tura.
                    </li>
                    <li>
                      <strong>Stock up in Tura:</strong> The last reliable
                      point for supplies before heading into South Garo
                      Hills.
                    </li>
                    <li>
                      <strong>Riverside rest stop:</strong> The Simsang
                      River setting is a pleasant spot for a packed meal
                      before or after the cave.
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
                            "Caving guide/equipment",
                            "₹1,000",
                            "₹2,000",
                            "₹3,500",
                          ],
                          ["Vehicle hire (round trip)", "₹2,000", "₹3,500", "₹5,500"],
                          ["Food/day", "₹400", "₹900", "₹1,800"],
                          ["Entry/permit fees", "₹100", "₹100", "₹100"],
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
                    * Figures are per trip from Tura, best split across a
                    group given the shared vehicle/guide costs.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Siju</h2>
                  <ul>
                    <li>
                      <strong>Never attempt without a guide:</strong> The
                      cave's undeveloped state makes local caving
                      knowledge genuinely essential for safety.
                    </li>
                    <li>
                      <strong>Skip it entirely during monsoon:</strong>{" "}
                      Rising river and cave-water levels create real
                      hazards from July through September.
                    </li>
                    <li>
                      <strong>Wear proper footwear:</strong> Expect wet,
                      uneven surfaces throughout the cave passages.
                    </li>
                    <li>
                      <strong>Bring a reliable light source:</strong> No
                      installed lighting exists inside the cave system.
                    </li>
                    <li>
                      <strong>Combine with Balpakram if possible:</strong>{" "}
                      Makes the long journey from Tura more worthwhile.
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
                          "Hire a local caving guide from Tura",
                          "Visit Oct-Apr only",
                          "Wear grippy, sturdy footwear",
                          "Carry a reliable flashlight or headlamp",
                          "Combine with Balpakram if time allows",
                          "Confirm current cave-safety conditions locally",
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
                          "Enter the cave without a guide",
                          "Visit during monsoon season",
                          "Expect a lit walkway like Mawsmai",
                          "Rely on finding food or water inside",
                          "Underestimate the physical demands of caving",
                          "Skip proper footwear for wet cave surfaces",
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
                    <strong>🗺️ Extend the trip:</strong> Combine Siju
                    with{" "}
                    <Link href="/blog/balpakram-travel-guide">
                      Balpakram National Park
                    </Link>{" "}
                    for a fuller South Garo Hills adventure, both reached
                    from a base in{" "}
                    <Link href="/blog/tura-travel-guide">Tura</Link>. See
                    our full{" "}
                    <Link href="/blog/meghalaya-travel-guide">
                      Meghalaya travel guide
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
                {[
                  "Siju Cave",
                  "Simsang River",
                  "Meghalaya",
                  "South Garo Hills",
                  "Caving",
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

              <RelatedPostsGrid currentSlug="siju-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="siju-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
