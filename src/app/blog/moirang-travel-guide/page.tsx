// src/app/blog/moirang-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Moirang Travel Guide: INA Memorial & Loktak Lake Gateway",
  description:
    "The complete Moirang travel guide — the INA Memorial Complex where the Indian tricolor was first hoisted on Indian soil, the historic Moirang principality, Lai Haraoba tradition, and how to combine it with a Loktak Lake visit.",
  keywords:
    "Moirang travel guide, INA Memorial Complex, Moirang War Museum, Netaji Subhas Chandra Bose, Indian National Army, Lai Haraoba, Thangjing deity, Loktak Lake gateway, Manipur history",
  openGraph: {
    title: "Moirang Travel Guide: INA Memorial & Loktak Lake Gateway",
    description:
      "The town where the Indian tricolor was first raised on Indian soil in 1944, and the gateway to Loktak Lake — the complete guide to Moirang.",
    url: "https://club.kudozz.in/blog/moirang-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Still lake water at dusk, evoking Loktak Lake's shoreline at Moirang, Manipur",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Moirang Travel Guide: INA Memorial & Loktak Lake Gateway",
    description:
      "Where the Indian tricolor was first raised on Indian soil, and the gateway to Loktak Lake — the complete Moirang guide.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/moirang-travel-guide",
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
          headline: "Moirang Travel Guide: INA Memorial & Loktak Lake Gateway",
          description:
            "The complete Moirang travel guide — the INA Memorial Complex, the historic Moirang principality, Lai Haraoba tradition, and how to combine it with a Loktak Lake visit.",
          image:
            "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
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
            "@id": "https://club.kudozz.in/blog/moirang-travel-guide",
          },
          keywords:
            "Moirang, INA Memorial, Netaji Subhas Chandra Bose, Loktak Lake, Manipur",
          about: {
            "@type": "Place",
            name: "Moirang",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Manipur",
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
                name: "Manipur",
                item: "https://club.kudozz.in/blog/manipur-travel-guide",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Moirang",
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
    q: "What is Moirang famous for?",
    a: "Moirang is famous for the INA Memorial Complex, marking the site where Netaji Subhas Chandra Bose's Indian National Army (Azad Hind Fauj) first hoisted the Indian tricolor on Indian soil, on 14 April 1944 during WWII. It's also one of the oldest centers of traditional Meitei culture and the main gateway town for visiting Loktak Lake.",
  },
  {
    q: "How far is Moirang from Imphal?",
    a: "Moirang is roughly 45–48 km from Imphal, about an hour to an hour and a half by road. Most visitors combine it with a Loktak Lake and Sendra visit in the same trip.",
  },
  {
    q: "What is the INA Memorial Complex?",
    a: "Also known as the Moirang War Museum, the INA Memorial Complex marks the spot where the Indian National Army first raised the Indian flag on Indian soil on 14 April 1944, and houses a museum with INA memorabilia from the WWII era.",
  },
  {
    q: "How much time do I need in Moirang?",
    a: "Half a day is enough to see the INA Memorial Complex and get a feel for the old town, making Moirang an easy add-on to a Loktak Lake day trip rather than a standalone destination.",
  },
  {
    q: "Is Moirang worth visiting on its own, or only with Loktak Lake?",
    a: "Moirang's core sight, the INA Memorial, is compact enough that most travelers visit it as a stop on the way to or from Loktak Lake rather than a dedicated day trip — the two pair naturally given how close they are to each other.",
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
  { id: "introduction", title: "Manipur's Historic Lakeside Town", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Moirang", level: 2 },
  { id: "things-to-do", title: "Things to Do in Moirang", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Food in Moirang", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MoirangGuidePage() {
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
              src="/images/destinations/jammu-kashmir/dal.jpg"
              alt="Still lake water at dusk, evoking Loktak Lake's shoreline at Moirang, Manipur"
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
                { label: "Manipur", href: "/blog/manipur-travel-guide" },
                { label: "Moirang", href: null },
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
              {["Manipur", "Moirang", "INA Memorial"].map((tag) => (
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
              Moirang: INA Memorial & Loktak Lake Gateway
            </h1>

            <p
              className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-source-serif)" }}
            >
              A historic lakeside town where the Indian tricolor was first
              raised on Indian soil, and the natural gateway to Loktak
              Lake's floating world.
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
                  text: "Loktak Lake shore, Manipur",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
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
                  <h2>Manipur's Historic Lakeside Town</h2>
                  <p>
                    <strong>Moirang</strong> is a historic town on the shores
                    of{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>
                    , and the main gateway town for lake visits and the
                    Sendra viewpoint. It's a small, easy stop that carries an
                    outsized amount of history for its size.
                  </p>
                  <p>
                    The town is best known for the{" "}
                    <strong>INA Memorial Complex</strong>, marking the site
                    where Netaji Subhas Chandra Bose's Indian National Army
                    (Azad Hind Fauj) hoisted the Indian tricolor for the
                    first time on Indian soil, on 14 April 1944, during WWII.
                  </p>
                  <p>
                    Long before that, Moirang was already significant — one
                    of the oldest centers of traditional Meitei culture,
                    associated with the worship of the deity Thangjing and
                    considered a historic seat of the Moirang principality,
                    one of the old Meitei clans that predates the unified
                    Manipur kingdom. The town is also traditionally linked to
                    the origins of <strong>Lai Haraoba</strong>, a ritual
                    Meitei folk performance and dance honoring local
                    deities.
                  </p>

                  {/* At a Glance */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🏛️</span> Moirang at a Glance
                    </h4>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {[
                        { icon: "📍", label: "Location", value: "Loktak Lake shore" },
                        { icon: "🚗", label: "From Imphal", value: "~45–48 km" },
                        { icon: "🏳️", label: "Landmark", value: "INA Memorial Complex" },
                        { icon: "📅", label: "Flag Hoisted", value: "14 Apr 1944" },
                        { icon: "🎭", label: "Culture", value: "Lai Haraoba origins" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Mar" },
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
                  <h2>Best Time to Visit Moirang</h2>
                  <p>
                    Since Moirang is almost always visited alongside{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>
                    , the same seasonal considerations apply.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Mar",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Cool, dry conditions that make walking around the INA Memorial grounds and combining the visit with Loktak Lake genuinely pleasant.",
                      },
                      {
                        season: "Apr – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Warm, still workable",
                        text: "Warmer and more humid, but an early start still makes a half-day visit manageable.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon",
                        text: "Heavy rain affects the wider Loktak Lake area — the INA Memorial's indoor museum stays accessible, but outdoor plans may need flexibility.",
                      },
                      {
                        season: "14 Apr",
                        emoji: "🏳️",
                        color: "bg-purple-50 border-purple-200",
                        mood: "INA flag-hoisting anniversary",
                        text: "The anniversary of the 1944 flag hoisting, when the memorial complex sees added local significance and visitor interest.",
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
                    <strong>Our pick:</strong> October to March, timed
                    alongside a Loktak Lake visit — dry, comfortable weather
                    for the short walk around the memorial grounds.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Moirang</h2>
                  <ul>
                    <li>
                      <strong>From Imphal:</strong> Moirang is roughly 45–48
                      km from{" "}
                      <Link href="/blog/imphal-travel-guide">Imphal</Link>,
                      about an hour to an hour and a half by hired car or
                      taxi.
                    </li>
                    <li>
                      <strong>Combined with Loktak Lake:</strong> Since
                      Moirang sits right on{" "}
                      <Link href="/blog/loktak-lake-travel-guide">
                        Loktak Lake's
                      </Link>{" "}
                      shore, most visitors reach it as part of the same trip
                      out from Imphal, rather than as a separate journey.
                    </li>
                    <li>
                      <strong>Local transport:</strong> Public transport
                      options are limited — a private vehicle or organized
                      day trip is the practical way to visit.
                    </li>
                  </ul>
                  <div
                    className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>💡 Pro Tip:</strong> Visit Moirang on the way to
                    or from Sendra and Loktak Lake, rather than as a separate
                    trip — the two are close enough that splitting them
                    wastes time.
                  </div>
                  <div
                    className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <strong>📋 Inner Line Permit:</strong> Visitors from
                    outside Manipur need an Inner Line Permit (ILP), required
                    since December 2019 — arrange this before your trip.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Things to Do in Moirang</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Still lake water at dusk, evoking Loktak Lake's shoreline at Moirang, Manipur"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>INA Memorial Complex (Moirang War Museum)</h3>
                  <p>
                    The town's central landmark, marking the site where the
                    Indian National Army first raised the Indian tricolor on
                    Indian soil, on 14 April 1944 during WWII. The complex
                    houses a museum with INA memorabilia from the era —
                    photographs, artifacts, and background on Netaji Subhas
                    Chandra Bose's campaign.
                  </p>
                  <h3>The Old Moirang Principality</h3>
                  <p>
                    Moirang is one of the oldest centers of traditional
                    Meitei culture, historically considered a seat of the
                    Moirang principality — one of the old Meitei clans that
                    predates the unified Manipur kingdom, and closely tied to
                    the worship of the local deity Thangjing.
                  </p>
                  <h3>Lai Haraoba Tradition</h3>
                  <p>
                    The town is traditionally linked to the origins of Lai
                    Haraoba, a ritual Meitei folk performance and dance
                    honoring local deities — worth asking locally if any
                    performance is scheduled during your visit.
                  </p>
                  <h3>Loktak Lake & Sendra, Right Next Door</h3>
                  <p>
                    Since Moirang sits directly on the lake's shore, it's the
                    natural jumping-off point for boat rides through the
                    phumdis and a visit to Sendra's viewpoint — see our{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake guide
                    </Link>{" "}
                    for the full experience.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Moirang itself has limited accommodation — most visitors
                    treat it as a half-day stop and base themselves in{" "}
                    <Link href="/blog/imphal-travel-guide">Imphal</Link>{" "}
                    instead.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        tier: "Moirang Town",
                        icon: "🏕️",
                        range: "₹800–₹1,800/night",
                        picks: [
                          "Basic local guesthouses",
                          "Limited options overall",
                        ],
                      },
                      {
                        tier: "Loktak Lakeside",
                        icon: "🏨",
                        range: "₹800–₹2,000/night",
                        picks: [
                          "Sendra tourism park stays",
                          "Small homestays nearby",
                        ],
                      },
                      {
                        tier: "Imphal (Day Trip Base)",
                        icon: "🏛️",
                        range: "₹1,000–₹7,000/night",
                        picks: [
                          "Full range of hotel tiers",
                          "~1–1.5 hrs from Moirang",
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
                    Treat Moirang as a half-day stop on the way to or from{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>{" "}
                    rather than an overnight base — accommodation options are
                    genuinely limited in the town itself.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan (Half Day)</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Morning",
                        title: "INA Memorial Complex",
                        color: "bg-amber-700",
                        activities: [
                          "Visit the INA Memorial Complex and museum",
                          "Learn about the 1944 flag-hoisting history",
                        ],
                      },
                      {
                        day: "Midday",
                        title: "Old Town & Culture",
                        color: "bg-sky-600",
                        activities: [
                          "Walk through Moirang's old town",
                          "Ask locally about Lai Haraoba traditions",
                        ],
                      },
                      {
                        day: "Afternoon",
                        title: "Onward to Loktak Lake",
                        color: "bg-forest-600",
                        activities: [
                          "Continue to Sendra viewpoint",
                          "Boat ride through the phumdis",
                          "Return to Imphal",
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
                  <p>
                    See the full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for how a Moirang and Loktak Lake day trip fits into a
                    longer state-wide itinerary from Imphal.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Food in Moirang</h2>
                  <ul>
                    <li>
                      <strong>Small local eateries:</strong> Moirang's
                      commercial strip has simple restaurants serving
                      standard Manipuri fare — expect a modest choice rather
                      than a food destination in itself.
                    </li>
                    <li>
                      <strong>Fresh fish from the lake:</strong> Given the
                      town's location on Loktak Lake's shore, fish curries
                      are a natural local specialty.
                    </li>
                    <li>
                      <strong>Carry snacks and water:</strong> Options are
                      limited compared to Imphal, so it's worth carrying your
                      own supplies for a half-day visit.
                    </li>
                    <li>
                      <strong>Save a proper meal for Imphal:</strong> A wider
                      range of Manipuri dishes, including eromba and chak-hao
                      kheer, is easier to find back in the capital.
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
                          ["Car hire from Imphal (day)", "₹2,000", "₹3,500", "₹6,000"],
                          ["Memorial entry fee", "₹20", "₹20", "₹20"],
                          ["Food/day", "₹250", "₹500", "₹1,200"],
                          ["Overnight stay (if any)", "₹800", "₹1,800", "₹3,000"],
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
                    * Most visitors share the car-hire cost with a same-day
                    Loktak Lake visit rather than budgeting for Moirang
                    separately.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Moirang</h2>
                  <ul>
                    <li>
                      <strong>Combine it with Loktak Lake:</strong> Moirang
                      is compact enough that visiting it on its own wastes
                      most of a day — pair it with Sendra and the lake.
                    </li>
                    <li>
                      <strong>Carry your Inner Line Permit:</strong> Required
                      for visitors from outside Manipur since December 2019.
                    </li>
                    <li>
                      <strong>Check advisories before finalizing plans:</strong>{" "}
                      Parts of Manipur have periodically seen
                      security-related travel advisories — confirm current
                      guidance and stick to established tourist routes.
                    </li>
                    <li>
                      <strong>Carry cash:</strong> Card and digital payment
                      acceptance is inconsistent in smaller towns like
                      Moirang.
                    </li>
                    <li>
                      <strong>Ask before assuming access to rituals:</strong>{" "}
                      Lai Haraoba and other local traditions are community
                      events — approach respectfully and ask locally rather
                      than expecting a scheduled tourist show.
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
                          "Combine Moirang with a Loktak Lake day trip",
                          "Carry your Inner Line Permit",
                          "Check current advisories before finalizing plans",
                          "Carry cash for small local eateries and shops",
                          "Spend time at the INA Memorial museum, not just outside",
                          "Ask respectfully about local Lai Haraoba traditions",
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
                          "Plan a standalone full day just for Moirang",
                          "Travel without arranging your ILP in advance",
                          "Rely on cards in the town's small shops",
                          "Expect extensive dining options in Moirang itself",
                          "Assume you can attend a ritual without asking locally",
                          "Skip checking travel advisories beforehand",
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
                    <strong>🗺️ Extend the trip:</strong> Pair Moirang with{" "}
                    <Link href="/blog/loktak-lake-travel-guide">
                      Loktak Lake
                    </Link>{" "}
                    and base yourself in{" "}
                    <Link href="/blog/imphal-travel-guide">Imphal</Link> for
                    the rest of the trip. See our full{" "}
                    <Link href="/blog/manipur-travel-guide">
                      Manipur travel guide
                    </Link>{" "}
                    for a complete state-wide itinerary.
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
                {["Manipur", "Moirang", "INA Memorial"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`}
                    className="tag-pill"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="moirang-travel-guide" />
            </article>

            {/* RIGHT — Sidebar */}
            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="moirang-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
