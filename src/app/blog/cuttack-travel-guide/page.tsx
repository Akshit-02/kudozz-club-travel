// src/app/blog/cuttack-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Cuttack Travel Guide: Silver City & Barabati Fort",
  description:
    "Complete Cuttack guide — the Silver City's tarakasi filigree tradition, Barabati Fort, the Bali Yatra festival, how to reach from Bhubaneswar, and a full visit plan.",
  keywords:
    "Cuttack travel guide, Cuttack Silver City, tarakasi filigree, Barabati Fort, Bali Yatra, Mahanadi delta, former capital Odisha, how to reach Cuttack",
  openGraph: {
    title: "Cuttack Travel Guide: Silver City & Barabati Fort",
    description:
      "Odisha's former capital, famed for delicate silver filigree craftsmanship and an ancient maritime-trade festival — the complete Cuttack guide.",
    url: "https://club.kudozz.in/blog/cuttack-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jaisalmer/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Historic city skyline at dusk, evoking Cuttack's former-capital heritage and Mahanadi riverside setting in Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuttack Travel Guide: Silver City & Barabati Fort",
    description:
      "Odisha's former capital, famed for silver filigree craftsmanship and Barabati Fort's Mahanadi-side ruins — the complete Cuttack guide.",
    images: ["/images/destinations/jaisalmer/hero.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/cuttack-travel-guide",
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
          headline: "Cuttack Travel Guide: Silver City & Barabati Fort",
          description:
            "Complete Cuttack guide — the Silver City's tarakasi filigree tradition, Barabati Fort, the Bali Yatra festival, how to reach from Bhubaneswar, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jaisalmer/hero.jpg",
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
            "@id": "https://club.kudozz.in/blog/cuttack-travel-guide",
          },
          keywords: "Cuttack, Barabati Fort, Odisha, Silver Filigree, Bali Yatra",
          about: {
            "@type": "Place",
            name: "Cuttack",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Odisha",
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
                name: "Odisha",
                item: "https://club.kudozz.in/blog/odisha-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Cuttack",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is tarakasi silver filigree?",
    a: "Tarakasi is Cuttack's traditional silver filigree craft — intricate jewelry and decorative pieces made by twisting fine silver wire into delicate patterns, a skill passed down through generations of local artisans. It's what gives the city its 'Silver City' nickname.",
  },
  {
    q: "How far is Cuttack from Bhubaneswar?",
    a: "About 25-30 km, roughly a 45-minute drive — the two cities are well connected by road and rail and often visited together.",
  },
  {
    q: "Is Cuttack a day trip?",
    a: "Yes, most visitors see Cuttack as a day trip from Bhubaneswar, given the short distance and the fact that the city's main sights can comfortably be covered in a day.",
  },
  {
    q: "What is Bali Yatra and when is it held?",
    a: "Bali Yatra is an annual festival held on Kartik Purnima (typically around November) commemorating Cuttack's ancient maritime trade links with Bali and Southeast Asia — a large fair with cultural performances, held on the banks of the Mahanadi.",
  },
  {
    q: "Is Barabati Fort worth visiting given it's mostly ruins?",
    a: "Yes, for the historical atmosphere and riverside setting, though visitors should set expectations accordingly — much of the fort survives only as foundations and partial structures rather than an intact palace.",
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
  { id: "introduction", title: "Odisha's Former Capital", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Cuttack", level: 2 },
  { id: "things-to-do", title: "Filigree, Fort & Festival", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CuttackGuidePage() {
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
              src="/images/destinations/jaisalmer/hero.jpg"
              alt="Historic city skyline at dusk, evoking Cuttack's former-capital heritage and Mahanadi riverside setting in Odisha"
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
                { label: "Odisha", href: "/blog/odisha-travel-guide" },
                { label: "Cuttack", href: null },
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
              {["Cuttack", "Barabati Fort", "Odisha", "Silver Filigree", "Bali Yatra"].map(
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
              Cuttack Travel Guide: Silver City & Barabati Fort
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              Odisha&apos;s former capital, famed for delicate silver
              filigree craftsmanship, riverside fort ruins, and an annual
              festival commemorating an ancient seafaring past.
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
                  text: "Cuttack, Odisha",
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
                  <h2>Odisha&apos;s Former Capital</h2>
                  <p>
                    <strong>Cuttack</strong> served as the capital of Odisha
                    until Bhubaneswar took over that role in 1948, and it
                    remains one of the state&apos;s most historically
                    significant cities — sitting near the point where the{" "}
                    <strong>Mahanadi river</strong> begins to split into its
                    delta distributaries.
                  </p>
                  <p>
                    The city is often called the <strong>&quot;Silver
                    City&quot;</strong> for its renowned tradition of{" "}
                    <strong>tarakasi</strong> — intricate silver filigree
                    work produced by twisting fine silver wire into delicate
                    jewelry and decorative pieces, a genuinely distinctive
                    local craft worth seeking out a proper workshop to see
                    artisans at work rather than just browsing a tourist
                    shop.
                  </p>
                  <p>
                    On the Mahanadi&apos;s banks stands{" "}
                    <strong>Barabati Fort</strong>, the ruins of a medieval
                    fort that once served as the seat of the Gajapati
                    rulers — now largely reduced to foundations, but still
                    an evocative historical site. Once a year, the city
                    comes alive for <strong>Bali Yatra</strong>, a major
                    festival commemorating Cuttack&apos;s ancient maritime
                    trade links with Bali and Southeast Asia.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🥈</span> Cuttack at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "Location",
                          value: "Mahanadi delta, Odisha",
                        },
                        {
                          icon: "🚗",
                          label: "From Bhubaneswar",
                          value: "~25–30 km",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🥈",
                          label: "Known For",
                          value: "Tarakasi Silver Filigree",
                        },
                        {
                          icon: "🏰",
                          label: "Landmark",
                          value: "Barabati Fort",
                        },
                        {
                          icon: "⛵",
                          label: "Festival",
                          value: "Bali Yatra (Kartik Purnima)",
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
                  <h2>Best Time to Visit Cuttack</h2>
                  <p>
                    Comfortable sightseeing weather and the timing of Bali
                    Yatra both shape the ideal window for a visit.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Feb",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry weather, comfortable for exploring the old city and the fort on foot.",
                      },
                      {
                        season: "Nov",
                        emoji: "⛵",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Bali Yatra season",
                        text: "The Kartik Purnima festival brings large crowds and a genuinely lively riverside atmosphere.",
                      },
                      {
                        season: "Mar – Jun",
                        emoji: "🌤️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Hot — less comfortable",
                        text: "Rising heat makes daytime old-city walking tours considerably more tiring.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon",
                        text: "Heavy rain can disrupt outdoor sightseeing, though the Mahanadi runs full and scenic.",
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
                    <strong>Our pick:</strong> October to February for
                    comfortable sightseeing, with November specifically if
                    Bali Yatra&apos;s festival atmosphere appeals.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Cuttack</h2>
                  <ul>
                    <li>
                      <strong>By road from Bhubaneswar:</strong> Roughly
                      25–30 km, about a 45-minute drive — the two cities are
                      closely linked and often visited together.
                    </li>
                    <li>
                      <strong>By rail:</strong> Cuttack has its own major
                      railway station, well connected to Bhubaneswar and
                      onward across India.
                    </li>
                    <li>
                      <strong>By air:</strong> Bhubaneswar&apos;s airport is
                      the nearest, given Cuttack&apos;s short distance from
                      the state capital.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Seek out a genuine tarakasi
                    workshop rather than a general tourist shop — seeing
                    artisans twist the silver wire by hand is far more
                    memorable than just browsing finished pieces.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Filigree, Fort & Festival</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jaisalmer/hero.jpg"
                      alt="Historic riverside cityscape evoking Cuttack's old town and Mahanadi setting"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Tarakasi Silver Filigree</h3>
                  <p>
                    Cuttack&apos;s defining craft — fine silver wire twisted
                    into intricate jewelry and decorative pieces by
                    generations of local artisans. Visit a working
                    tarakasi workshop if possible for the fullest
                    appreciation of the skill involved.
                  </p>
                  <h3>Barabati Fort</h3>
                  <p>
                    Riverside ruins of a medieval fort that once housed the
                    Gajapati rulers — atmospheric rather than intact, worth
                    visiting for the setting and history as much as the
                    surviving structures.
                  </p>
                  <h3>Bali Yatra</h3>
                  <p>
                    An annual festival held on Kartik Purnima (typically
                    November) commemorating Cuttack&apos;s ancient maritime
                    trade with Bali and Southeast Asia — a large riverside
                    fair with cultural performances, a rare living
                    commemoration of India&apos;s seafaring trade history.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Most visitors day-trip from Bhubaneswar given the short
                    distance, though Cuttack has its own range of hotels for
                    those staying overnight.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Budget hotels near the railway station",
                          "Simple guesthouses in the old city",
                          "Basic lodges near Barabati",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Business hotels in central Cuttack",
                          "Mid-range chains near the city centre",
                          "Comfortable riverside stays",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🥈",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium hotels in central Cuttack",
                          "Or base in Bhubaneswar for wider luxury options",
                          "Full-service business hotels",
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
                        title: "Barabati Fort & Old City",
                        color: "bg-amber-700",
                        activities: [
                          "Drive in from Bhubaneswar",
                          "Explore Barabati Fort ruins",
                          "Walk the old city streets",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Filigree & Local Craft",
                        color: "bg-sky-600",
                        activities: [
                          "Visit a tarakasi silver filigree workshop",
                          "Browse local markets",
                          "Try Cuttack's street food",
                        ],
                      },
                      {
                        day: "Evening",
                        title: "Return or Extend",
                        color: "bg-forest-600",
                        activities: [
                          "Return to Bhubaneswar",
                          "Or continue on to Satkosia for a nature extension",
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
                    * With more time, extend into the Mahanadi gorge
                    scenery of{" "}
                    <Link href="/blog/satkosia-travel-guide">Satkosia</Link>{" "}
                    for a fuller central-Odisha circuit.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat in Cuttack</h2>
                  <ul>
                    <li>
                      <strong>Old-city street food:</strong> Cuttack has a
                      lively street-food scene, especially around its
                      traditional markets.
                    </li>
                    <li>
                      <strong>Local Odia restaurants:</strong> Standard
                      thalis and regional specialties are widely available
                      across the city.
                    </li>
                    <li>
                      <strong>Sweets:</strong> Cuttack shares Odisha's love
                      of milk-based sweets, worth sampling from a
                      well-regarded local shop.
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
                            "₹1,000",
                            "₹2,800",
                            "₹6,000",
                          ],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          ["Local transport/day", "₹400", "₹1,000", "₹2,500"],
                          ["Filigree souvenir (typical)", "₹500", "₹2,000", "₹8,000+"],
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
                    * Filigree prices vary enormously by piece size and
                    craftsmanship — treat the range above as a rough guide
                    only.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Cuttack</h2>
                  <ul>
                    <li>
                      <strong>Seek out a genuine tarakasi
                      workshop:</strong> A far richer experience than a
                      generic tourist shop.
                    </li>
                    <li>
                      <strong>Set expectations for Barabati Fort:</strong>{" "}
                      It's atmospheric ruins rather than an intact palace.
                    </li>
                    <li>
                      <strong>Time a visit around Bali Yatra if
                      possible:</strong> A genuinely distinctive cultural
                      event for those whose dates align.
                    </li>
                    <li>
                      <strong>Combine with Bhubaneswar:</strong> The short
                      distance makes a combined trip easy and efficient.
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
                          "Visit a genuine tarakasi silver filigree workshop",
                          "Explore Barabati Fort with realistic expectations",
                          "Time a trip around Bali Yatra if dates align",
                          "Combine the visit with Bhubaneswar",
                          "Try Cuttack's street food and local sweets",
                          "Bargain respectfully for filigree souvenirs",
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
                        <span>❌</span> Don&apos;t
                      </h4>
                      <ul
                        className="space-y-2 text-sm text-stone-600"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {[
                          "Expect Barabati Fort to be an intact palace",
                          "Buy filigree from the first shop you see without comparing",
                          "Skip a workshop visit and only see finished pieces",
                          "Visit during peak summer heat if avoidable",
                          "Rush the old city — it rewards a slow walk",
                          "Forget to check Bali Yatra dates if festival timing matters",
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
                    <strong>🗺️ Extend the trip:</strong> Cuttack pairs
                    naturally with{" "}
                    <Link href="/blog/satkosia-travel-guide">Satkosia</Link>{" "}
                    for a nature extension, or see the full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
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
                  "Cuttack",
                  "Barabati Fort",
                  "Odisha",
                  "Silver Filigree",
                  "Bali Yatra",
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

              <RelatedPostsGrid currentSlug="cuttack-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="cuttack-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
