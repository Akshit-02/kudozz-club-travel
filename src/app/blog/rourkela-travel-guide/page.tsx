// src/app/blog/rourkela-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Rourkela Travel Guide: Steel City & Waterfalls",
  description:
    "Complete Rourkela guide — the steel city's industrial history, hockey heritage, the Hanging Bridge, Khandadhar Waterfall, how to reach, and a full visit plan.",
  keywords:
    "Rourkela travel guide, Rourkela Steel Plant, Khandadhar Waterfall, Sundargarh district, Rourkela hockey, Hanging Bridge Rourkela, how to reach Rourkela, Odisha waterfalls",
  openGraph: {
    title: "Rourkela Travel Guide: Steel City & Waterfalls",
    description:
      "India's first integrated steel plant and one of Odisha's most dramatic waterfalls, a short drive apart — the complete Rourkela guide.",
    url: "https://club.kudozz.in/blog/rourkela-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/coorg/abbey-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Waterfall cascading over rock, evoking Khandadhar Falls near Rourkela in Odisha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rourkela Travel Guide: Steel City & Waterfalls",
    description:
      "An industrial steel city and one of Odisha's most impressive waterfalls, a short drive apart — the complete Rourkela guide.",
    images: ["/images/destinations/coorg/abbey-falls.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/rourkela-travel-guide",
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
          headline: "Rourkela Travel Guide: Steel City & Waterfalls",
          description:
            "Complete Rourkela guide — the steel city's industrial history, hockey heritage, the Hanging Bridge, Khandadhar Waterfall, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/coorg/abbey-falls.jpg",
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
            "@id": "https://club.kudozz.in/blog/rourkela-travel-guide",
          },
          keywords:
            "Rourkela, Sundargarh district, Odisha, Khandadhar Waterfall, steel city",
          about: {
            "@type": "Place",
            name: "Rourkela",
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
                name: "Rourkela",
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
    q: "Is Rourkela worth visiting as a tourist, or mainly a base for Khandadhar Falls?",
    a: "Honestly, mostly the latter — Rourkela is a functional industrial city built around its steel plant, with a genuine hockey heritage but limited scenic sightseeing of its own. Most travelers come primarily as a base for Khandadhar Waterfall.",
  },
  {
    q: "How far is Khandadhar Waterfall from Rourkela city?",
    a: "Roughly 55-60 km, about a 1.5-2 hour drive, making it a comfortable half-day to full-day excursion from the city.",
  },
  {
    q: "What is the city's industrial history?",
    a: "Rourkela Steel Plant, established in the late 1950s/1960s with German collaboration, was one of India's first integrated steel plants and remains a major employer and defining feature of the city today.",
  },
  {
    q: "Is there anything scenic in the city itself?",
    a: "The Hanging Bridge over the Koel River is a pleasant city-adjacent spot, but the region's real scenic draw — Khandadhar Waterfall — lies outside the city.",
  },
  {
    q: "What is the best time to see the waterfall at its fullest?",
    a: "September to November, just after the monsoon, when water volume is at its most dramatic. The falls thin out considerably by peak summer.",
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
  { id: "introduction", title: "An Industrial City With a Waterfall Nearby", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Rourkela", level: 2 },
  { id: "things-to-do", title: "Steel Plant, Hockey & Khandadhar Falls", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function RourkelaGuidePage() {
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
              src="/images/destinations/coorg/abbey-falls.jpg"
              alt="Waterfall cascading over rock, evoking Khandadhar Falls near Rourkela in Odisha"
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
                { label: "Rourkela", href: null },
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
                "Rourkela",
                "Khandadhar Falls",
                "Sundargarh District",
                "Steel City",
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
              Rourkela: Steel City & Khandadhar Waterfall Guide
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              India's first integrated steel plant, a genuine hockey
              heritage, and one of Odisha's most dramatic waterfalls just
              beyond the city limits.
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
                  text: "Sundargarh district, Odisha",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "2,000 words",
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
                  <h2>An Industrial City With a Waterfall Nearby</h2>
                  <p>
                    <strong>Rourkela</strong>, in Sundargarh district, is
                    built around the{" "}
                    <strong>Rourkela Steel Plant</strong> — one of India's
                    first integrated steel plants, established with
                    German collaboration in the late 1950s and 1960s, and
                    still a defining feature of the city's economy and
                    identity today. This is, honestly, an industrial city
                    first and a tourist destination second — worth saying
                    plainly rather than oversetting expectations.
                  </p>
                  <p>
                    Rourkela also has a genuine{" "}
                    <strong>hockey heritage</strong>, home to a major
                    stadium and closely tied to the region's outsized
                    contribution to Indian field hockey. But the strongest
                    reason to actually plan a trip here is what lies just
                    outside the city:{" "}
                    <strong>Khandadhar Waterfall</strong>, one of Odisha's
                    most dramatic single-drop cascades, and the Hanging
                    Bridge over the Koel River within the city itself.
                  </p>
                  <p>
                    Treat Rourkela as a practical base for Khandadhar
                    Falls, not as a scenic destination in its own right,
                    and the trip makes a lot more sense.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏭</span> Rourkela at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        {
                          icon: "📍",
                          label: "District",
                          value: "Sundargarh, Odisha",
                        },
                        {
                          icon: "🚉",
                          label: "Connectivity",
                          value: "Rail junction, road",
                        },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Feb" },
                        {
                          icon: "🌊",
                          label: "Known For",
                          value: "Steel Plant, Khandadhar Falls",
                        },
                        {
                          icon: "🏒",
                          label: "Heritage",
                          value: "Hockey",
                        },
                        {
                          icon: "💰",
                          label: "Budget/Day",
                          value: "₹1,200 – ₹5,000",
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
                  <h2>Best Time to Visit Rourkela</h2>
                  <p>
                    Timing mostly comes down to Khandadhar Falls — the
                    city itself is fairly consistent year-round outside
                    peak summer heat.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Sep – Nov",
                        emoji: "💧",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Post-monsoon, when Khandadhar Falls carries its fullest, most dramatic water volume.",
                      },
                      {
                        season: "Dec – Feb",
                        emoji: "☀️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Cool and comfortable",
                        text: "Pleasant travel weather for the city, though the waterfall's flow thins compared to right after monsoon.",
                      },
                      {
                        season: "Mar – May",
                        emoji: "🔥",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Hot — avoid if possible",
                        text: "Significant heat, and Khandadhar Falls is at its weakest, reducing the main reason to visit.",
                      },
                      {
                        season: "Jun – Aug",
                        emoji: "🌧️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Monsoon — full flow, harder travel",
                        text: "The waterfall is at full force but rain can complicate the drive out and general sightseeing.",
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
                    <strong>Our pick:</strong> September to November —
                    Khandadhar Falls at its fullest, with weather that's
                    already cooled from the summer peak.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Rourkela</h2>
                  <ul>
                    <li>
                      <strong>By rail:</strong> Rourkela is a significant
                      rail junction with good connectivity to Bhubaneswar,
                      Kolkata, and other major cities — the most
                      convenient way in given the city's industrial
                      importance.
                    </li>
                    <li>
                      <strong>By road:</strong> Well connected by road
                      from Bhubaneswar and neighbouring Jharkhand and
                      Chhattisgarh, given its position near the state
                      borders.
                    </li>
                    <li>
                      <strong>Onward to Khandadhar Falls:</strong> Roughly
                      55-60 km, about a 1.5-2 hour drive from the city.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> If Khandadhar Falls is
                    your main reason for the trip, check recent rainfall
                    and water-volume reports before committing to the
                    drive out — the falls vary dramatically by season.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Steel Plant, Hockey & Khandadhar Falls</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/coorg/abbey-falls.jpg"
                      alt="Waterfall near Rourkela, Odisha"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Rourkela Steel Plant</h3>
                  <p>
                    One of India's first integrated steel plants,
                    established with German collaboration in the late
                    1950s and 1960s. It's the city's defining institution
                    and worth understanding as context for Rourkela's
                    character, even if the plant itself isn't generally
                    open for casual tourist visits.
                  </p>
                  <h3>Hockey Heritage</h3>
                  <p>
                    Rourkela is closely associated with Indian field
                    hockey, home to a major stadium and a strong regional
                    hockey culture — a distinctive local sporting identity
                    worth knowing about if you're in town during a match
                    or tournament.
                  </p>
                  <h3>The Hanging Bridge</h3>
                  <p>
                    A pedestrian bridge over the Koel River, offering a
                    pleasant city-adjacent spot for a walk and a break
                    from the industrial surroundings.
                  </p>
                  <h3>Khandadhar Waterfall</h3>
                  <p>
                    A dramatic single-drop cascade roughly 55-60 km from
                    the city — one of Odisha's most impressive waterfalls,
                    and arguably the strongest reason to make the trip to
                    this part of the state at all. Post-monsoon (Sep-Nov)
                    is when it's at its most dramatic.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay in Rourkela</h2>
                  <p>
                    Accommodation is functional and city-based, reflecting
                    Rourkela's industrial character rather than a resort
                    scene.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Budget",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Guesthouses near the railway station",
                          "Simple city lodges",
                          "Budget business hotels",
                        ],
                      },
                      {
                        tier: "Mid-Range",
                        icon: "🏨",
                        range: "₹2,000–₹4,000/night",
                        picks: [
                          "Standard business hotels",
                          "3-star chain properties",
                          "Central city hotels",
                        ],
                      },
                      {
                        tier: "Luxury",
                        icon: "🏙️",
                        range: "₹4,500–₹8,000+/night",
                        picks: [
                          "Premium business hotels",
                          "Larger chain properties",
                          "Full-service city stays",
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
                        title: "Rourkela City",
                        color: "bg-amber-700",
                        activities: [
                          "Arrive, check in",
                          "Hanging Bridge and a walk along the Koel River",
                          "Evening exploring the city center",
                        ],
                      },
                      {
                        day: "Day 2",
                        title: "Khandadhar Waterfall",
                        color: "bg-sky-600",
                        activities: [
                          "Early departure to Khandadhar Falls (~1.5-2 hrs)",
                          "Explore the waterfall and viewpoints",
                          "Return to Rourkela, departure",
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
                  <h2>Where to Eat in Rourkela</h2>
                  <ul>
                    <li>
                      <strong>City restaurants:</strong> As a working
                      industrial city, Rourkela has a reasonable spread of
                      standard restaurants and dhabas serving both Odia
                      and pan-Indian food.
                    </li>
                    <li>
                      <strong>Hotel kitchens:</strong> Most mid-range and
                      above hotels have their own restaurants, often the
                      most convenient option.
                    </li>
                    <li>
                      <strong>Carry your own near the falls:</strong>{" "}
                      Facilities near Khandadhar Falls itself are limited
                      — eat in Rourkela before or after the excursion.
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
                          ["Accommodation/night", "₹1,000", "₹2,800", "₹6,000"],
                          ["Food/day", "₹400", "₹900", "₹2,000"],
                          [
                            "Car hire to Khandadhar (round trip)",
                            "₹2,500",
                            "₹3,500",
                            "₹5,000",
                          ],
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
                    * Figures are per person, per day (except car hire, a
                    round-trip figure best split across a group).
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Rourkela</h2>
                  <ul>
                    <li>
                      <strong>Come for Khandadhar, stay for context:</strong>{" "}
                      Plan the trip around the waterfall excursion, and
                      treat the city as a practical base rather than the
                      main attraction.
                    </li>
                    <li>
                      <strong>Check the falls' seasonal volume:</strong>{" "}
                      Post-monsoon (Sep-Nov) is dramatically more
                      impressive than peak summer.
                    </li>
                    <li>
                      <strong>Set realistic expectations:</strong>{" "}
                      Rourkela is an industrial city — don't expect
                      Puri-level or Bhubaneswar-level tourist
                      infrastructure.
                    </li>
                    <li>
                      <strong>Ask locally about hockey events:</strong>{" "}
                      If you're interested in the city's hockey heritage,
                      check for any matches or tournaments during your
                      visit.
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
                          "Plan the trip around a Khandadhar Falls excursion",
                          "Visit post-monsoon (Sep-Nov) for the fullest falls",
                          "Treat Rourkela as a practical base, not a scenic destination",
                          "Check for hockey matches or tournaments",
                          "Carry food and water for the falls excursion",
                          "Confirm road conditions before the drive out",
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
                          "Expect a scenic, tourist-oriented city",
                          "Visit Khandadhar Falls in peak summer expecting full flow",
                          "Skip checking road/weather conditions before the drive",
                          "Expect wide dining options right at the waterfall",
                          "Overlook the city's genuine hockey and industrial history",
                          "Rush the trip without allowing time for the falls excursion",
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
                    <strong>🗺️ Extend the trip:</strong> See our full{" "}
                    <Link href="/blog/odisha-travel-guide">
                      Odisha travel guide
                    </Link>{" "}
                    for the wider state, including the coastal
                    Puri-Konark-Bhubaneswar circuit.
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
                  "Rourkela",
                  "Sundargarh District",
                  "Odisha",
                  "Khandadhar Falls",
                  "Steel City",
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

              <RelatedPostsGrid currentSlug="rourkela-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="rourkela-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
