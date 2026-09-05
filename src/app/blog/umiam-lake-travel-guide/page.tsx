// src/app/blog/umiam-lake-travel-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TableOfContents from "@/components/ui/TableOfContents";
import { RelatedSidebar, RelatedPostsGrid } from "@/components/ui/RelatedPosts";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Umiam Lake Guide: Boating & Best Time",
  description:
    "Complete Umiam Lake (Barapani) guide — boating and water sports near Shillong, best time to visit, how to reach, and a full visit plan.",
  keywords:
    "Umiam Lake, Barapani, Umiam Lake Shillong, Umiam Lake boating, how to reach Umiam Lake, Shillong day trip, Meghalaya lakes",
  openGraph: {
    title: "Umiam Lake Guide: Boating & Best Time",
    description:
      "A large reservoir ringed by forested hills, minutes from Shillong — the complete guide to Umiam Lake, boating, and the easiest Meghalaya day trip.",
    url: "https://club.kudozz.in/blog/umiam-lake-travel-guide",
    type: "article",
    siteName: "Kudozz Club",
    images: [
      {
        url: "/images/destinations/jammu-kashmir/dal.jpg",
        width: 1200,
        height: 630,
        alt: "Calm reservoir surrounded by forested hills, evoking Umiam Lake near Shillong",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Umiam Lake Guide: Boating & Best Time",
    description:
      "A large reservoir ringed by forested hills, minutes from Shillong — the complete guide to Umiam Lake.",
    images: ["/images/destinations/jammu-kashmir/dal.jpg"],
  },
  alternates: {
    canonical: "https://club.kudozz.in/blog/umiam-lake-travel-guide",
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
          headline: "Umiam Lake Guide: Boating & Best Time",
          description:
            "Complete Umiam Lake (Barapani) guide — boating and water sports near Shillong, best time to visit, how to reach, and a full visit plan.",
          image: "https://club.kudozz.in/images/destinations/jammu-kashmir/dal.jpg",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
          publisher: {
            "@type": "Organization",
            name: "Kudozz Club",
            logo: { "@type": "ImageObject", url: "https://club.kudozz.in/favicon.ico" },
          },
          author: { "@type": "Organization", name: "Kudozz Club" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://club.kudozz.in/blog/umiam-lake-travel-guide",
          },
          keywords: "Umiam Lake, Barapani, Meghalaya, Shillong, boating, day trip",
          about: {
            "@type": "Place",
            name: "Umiam Lake",
            address: { "@type": "PostalAddress", addressRegion: "Meghalaya", addressCountry: "IN" },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://club.kudozz.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://club.kudozz.in/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Meghalaya",
                item: "https://club.kudozz.in/blog/meghalaya-travel-guide",
              },
              { "@type": "ListItem", position: 4, name: "Umiam Lake" },
            ],
          },
        }),
      }}
    />
  );
}

// ── FAQ data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How far is Umiam Lake from Shillong?",
    a: "Umiam Lake is a short, easy drive from Shillong, making it one of the most accessible excursions from the capital — genuinely one of the quickest ways to get scenic water and hill views without a long day trip.",
  },
  {
    q: "What water sports are available at Umiam Lake?",
    a: "Boating and various water sports are available at Umiam, run by local operators near the main access points — options and pricing vary, so it's worth checking on arrival rather than pre-booking from afar.",
  },
  {
    q: "Is Umiam Lake a good quick day trip?",
    a: "Yes — it's one of the easiest, most time-efficient excursions near Shillong, well suited to travelers with limited time who still want a scenic natural stop without a long drive.",
  },
  {
    q: "What is the best time to visit?",
    a: "October to April offers the clearest weather and most comfortable boating conditions, avoiding Meghalaya's heavy monsoon season.",
  },
  {
    q: "Can Umiam Lake be combined with other near-Shillong attractions?",
    a: "Yes — it pairs naturally with Laitlum Canyons for a full day of near-Shillong sightseeing, since both are relatively short, easy excursions from the city.",
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
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
const tableOfContents = [
  { id: "introduction", title: "A Reservoir Minutes from Shillong", level: 2 },
  { id: "best-time", title: "Best Time to Visit", level: 2 },
  { id: "how-to-reach", title: "How to Reach Umiam Lake", level: 2 },
  { id: "things-to-do", title: "Boating & Water Sports", level: 2 },
  { id: "where-to-stay", title: "Where to Stay", level: 2 },
  { id: "visit-plan", title: "Suggested Visit Plan", level: 2 },
  { id: "food-guide", title: "Where to Eat", level: 2 },
  { id: "budget", title: "Budget Breakdown", level: 2 },
  { id: "tips", title: "Essential Tips", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function UmiamLakeGuidePage() {
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
              alt="Calm reservoir surrounded by forested hills, evoking Umiam Lake near Shillong"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/55 to-stone-800/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 to-transparent" />
          </div>

          <nav className="absolute top-24 left-0 right-0 z-10 px-6 sm:px-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Meghalaya", href: "/blog/meghalaya-travel-guide" },
                { label: "Umiam Lake", href: null },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/35">{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pb-16 pt-36 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Umiam Lake", "Barapani", "Shillong", "Meghalaya"].map((tag) => (
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
              Umiam Lake: Boating, Barapani & Best Time Guide
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: "var(--font-source-serif)" }}>
              A large reservoir ringed by forested hills, minutes from
              Shillong — one of the easiest, most rewarding quick escapes in
              all of Meghalaya.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {[
                { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "8 min read" },
                {
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "Near Shillong, Meghalaya",
                },
                {
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  text: "1,900 words",
                },
              ].map((m) => (
                <span key={m.text} className="flex items-center gap-1.5 text-sm text-white/55">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <div className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>

            <article className="flex-1 min-w-0 max-w-2xl xl:max-w-none">
              <div className="prose-travel">
                {/* ── Introduction ──────────────────────────────────────── */}
                <section id="introduction">
                  <h2>A Reservoir Minutes from Shillong</h2>
                  <p>
                    <strong>Umiam Lake</strong>, also known as{" "}
                    <strong>Barapani</strong>, is a large reservoir formed by
                    a dam on the Umiam river, a short drive from{" "}
                    <Link href="/blog/shillong-travel-guide">Shillong</Link>.
                    Ringed by forested hills, its scenic setting makes it a
                    genuinely pleasant escape from the city — and its close
                    proximity is really the point: this is about as easy and
                    time-efficient as a Meghalaya excursion gets.
                  </p>
                  <p>
                    Boating and water sports are the main draws, run by local
                    operators along the lake's access points. Given how
                    quick it is to reach, Umiam is one of the most common
                    half-day trips from Shillong, ideal for travelers with
                    limited time who still want a scenic natural stop
                    without committing to a longer excursion.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                    <h4
                      className="text-base font-bold text-amber-900 mb-4 flex items-center gap-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <span>🚤</span> Umiam Lake at a Glance
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {[
                        { icon: "📍", label: "Location", value: "Near Shillong, Meghalaya" },
                        { icon: "🌡️", label: "Best Time", value: "Oct – Apr" },
                        { icon: "🚤", label: "Known For", value: "Boating, water sports" },
                        { icon: "⏱️", label: "Time Needed", value: "Half day" },
                        { icon: "🎯", label: "Pairs Well With", value: "Laitlum Canyons" },
                        { icon: "💧", label: "Also Called", value: "Barapani" },
                      ].map(({ icon, label, value }) => (
                        <div key={label}>
                          <span className="text-stone-400 text-xs block">{icon} {label}</span>
                          <span className="text-stone-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── Best Time ─────────────────────────────────────────── */}
                <section id="best-time">
                  <h2>Best Time to Visit Umiam Lake</h2>
                  <p>
                    As with most of Meghalaya, the dry season offers the
                    clearest skies and most comfortable conditions for
                    boating.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    {[
                      {
                        season: "Oct – Apr",
                        emoji: "☀️",
                        color: "bg-forest-50 border-forest-200",
                        mood: "Best time — our pick",
                        text: "Clear skies and comfortable temperatures make this the ideal window for boating and photography on the lake.",
                      },
                      {
                        season: "May – Jun",
                        emoji: "🌤️",
                        color: "bg-amber-50 border-amber-200",
                        mood: "Pre-monsoon, warm and humid",
                        text: "Still generally visitable, though increasingly humid as the monsoon approaches.",
                      },
                      {
                        season: "Jul – Sep",
                        emoji: "🌧️",
                        color: "bg-sky-50 border-sky-200",
                        mood: "Monsoon — heavy rain",
                        text: "The lake fills dramatically but heavy rain can disrupt boating and make the visit far less comfortable.",
                      },
                      {
                        season: "Weekdays",
                        emoji: "🧘",
                        color: "bg-purple-50 border-purple-200",
                        mood: "Quieter experience",
                        text: "Weekends bring more local visitors and busier boating queues — weekday visits are noticeably calmer.",
                      },
                    ].map((s) => (
                      <div key={s.season} className={`${s.color} border rounded-xl p-5`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{s.emoji}</span>
                          <span className="font-bold text-stone-800 text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                            {s.season}
                          </span>
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2 block"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {s.mood}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed m-0">{s.text}</p>
                      </div>
                    ))}
                  </div>

                  <blockquote>
                    <strong>Our pick:</strong> a weekday morning between
                    October and April, for clear water, good light, and the
                    calmest boating queues.
                  </blockquote>
                </section>

                {/* ── How to Reach ──────────────────────────────────────── */}
                <section id="how-to-reach">
                  <h2>How to Reach Umiam Lake</h2>
                  <ul>
                    <li>
                      <strong>By road from Shillong:</strong> A short, easy
                      drive — genuinely one of the most accessible excursions
                      in Meghalaya.
                    </li>
                    <li>
                      <strong>Taxi or self-drive:</strong> Both are common,
                      and the road is well-traveled given the lake's
                      popularity.
                    </li>
                    <li>
                      <strong>Combine en route:</strong> Umiam sits along a
                      common route north of Shillong, making it easy to
                      combine with other stops in the same direction.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>💡 Pro Tip:</strong> Visit on a weekday morning if
                    you can — weekends bring noticeably larger crowds and
                    longer waits for boating.
                  </div>
                </section>

                {/* ── Things to Do ──────────────────────────────────────── */}
                <section id="things-to-do">
                  <h2>Boating & Water Sports</h2>
                  <div className="relative w-full rounded-xl my-6 h-72 overflow-hidden shadow-md">
                    <Image
                      src="/images/destinations/jammu-kashmir/dal.jpg"
                      alt="Reservoir and forested hills at Umiam Lake, Meghalaya"
                      fill
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3>Boating</h3>
                  <p>
                    Local operators run boat rides on the lake, ranging from
                    simple paddle boats to speedboats depending on the
                    operator — a relaxed way to take in the reservoir's scale
                    and the forested hills that ring it.
                  </p>
                  <h3>Water Sports</h3>
                  <p>
                    Beyond basic boating, a range of water sports are
                    available depending on the operator and season — check
                    on arrival, since options and pricing aren't always
                    consistent across every access point on the lake.
                  </p>
                  <h3>The Scenery</h3>
                  <p>
                    Even without getting on the water, Umiam's setting — a
                    wide expanse of water framed by green hills — makes for
                    a pleasant stop simply to walk along the shore and take
                    in the view.
                  </p>
                </section>

                {/* ── Where to Stay ─────────────────────────────────────── */}
                <section id="where-to-stay">
                  <h2>Where to Stay</h2>
                  <p>
                    Most visitors treat Umiam as a day trip from{" "}
                    <Link href="/blog/shillong-travel-guide">Shillong</Link>,
                    which has the region's full range of accommodation. A few
                    lakeside resort options do exist for those who'd rather
                    stay closer to the water.
                  </p>
                  <blockquote>
                    Shillong makes the most practical base — you'll be back
                    in the city within the hour either way.
                  </blockquote>
                </section>

                {/* ── Visit Plan ─────────────────────────────────────────── */}
                <section id="visit-plan">
                  <h2>Suggested Visit Plan</h2>
                  <div className="space-y-4 my-8">
                    {[
                      {
                        day: "Half Day",
                        title: "Shillong to Umiam Lake & Back",
                        color: "bg-amber-700",
                        activities: [
                          "Short drive from Shillong to the lake",
                          "Boating or water sports on the reservoir",
                          "A relaxed walk along the shore before heading back",
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
                          <h4 className="font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                            {d.title}
                          </h4>
                          <ul className="space-y-1.5 m-0">
                            {d.activities.map((a) => (
                              <li key={a} className="text-sm text-stone-600 flex items-start gap-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                                <span className="text-forest-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Combine with{" "}
                    <Link href="/blog/laitlum-canyons-travel-guide">Laitlum Canyons</Link>{" "}
                    for a fuller near-Shillong day trip.
                  </p>
                </section>

                {/* ── Food ──────────────────────────────────────────────── */}
                <section id="food-guide">
                  <h2>Where to Eat</h2>
                  <ul>
                    <li>
                      <strong>Lakeside stalls:</strong> A handful of stalls
                      near the main access points sell snacks and tea —
                      convenient for a quick break between boating.
                    </li>
                    <li>
                      <strong>Shillong:</strong> For a wider choice of
                      restaurants and cafes, wait until you're back in the
                      city.
                    </li>
                  </ul>
                </section>

                {/* ── Budget ────────────────────────────────────────────── */}
                <section id="budget">
                  <h2>Budget Breakdown</h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      <thead>
                        <tr className="bg-amber-50">
                          {["Expense", "Budget", "Mid-Range", "Luxury"].map((h) => (
                            <th key={h} className="text-left p-3 border border-stone-200 font-semibold text-stone-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Taxi hire (round trip from Shillong)", "₹1,000", "₹1,800", "₹2,800"],
                          ["Boating (per session)", "₹150", "₹400", "₹800"],
                          ["Snacks", "₹100", "₹200", "₹300"],
                        ].map(([exp, b, m, l], i) => (
                          <tr key={exp} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                            <td className="p-3 border border-stone-200 font-medium text-stone-800">{exp}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{b}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{m}</td>
                            <td className="p-3 border border-stone-200 text-stone-600">{l}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    * Figures assume a round trip taxi shared across a small
                    group; boating costs vary by operator and activity type.
                  </p>
                </section>

                {/* ── Tips ──────────────────────────────────────────────── */}
                <section id="tips">
                  <h2>Essential Tips for Visiting Umiam Lake</h2>
                  <ul>
                    <li>
                      <strong>Go on a weekday if possible:</strong> Weekends
                      bring larger crowds and longer boating queues.
                    </li>
                    <li>
                      <strong>Check current water-sport options on
                      arrival:</strong> Offerings and pricing vary by
                      operator, so don't assume a fixed menu of activities.
                    </li>
                    <li>
                      <strong>Combine with Laitlum Canyons:</strong> Both are
                      short excursions from Shillong that pair well in one
                      day.
                    </li>
                    <li>
                      <strong>Bring cash:</strong> Card acceptance is
                      inconsistent among smaller lakeside operators.
                    </li>
                  </ul>

                  <div className="grid sm:grid-cols-2 gap-5 my-8">
                    <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                      <h4 className="font-bold text-forest-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>✅</span> Do
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Visit on a weekday for a calmer experience",
                          "Check water-sport options on arrival",
                          "Combine with Laitlum Canyons",
                          "Carry cash for smaller operators",
                          "Bring a camera for the lake views",
                          "Allow extra time on weekends for queues",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-forest-500 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        <span>❌</span> Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {[
                          "Expect a fixed menu of water sports everywhere",
                          "Visit on a busy weekend if you want a quiet trip",
                          "Rely solely on card payments",
                          "Plan an overnight stay unless you want a lakeside resort",
                          "Skip checking the weather during monsoon months",
                          "Rush through — the lake rewards a relaxed pace",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-xl my-4 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    <strong>🗺️ Extend the trip:</strong> Pair Umiam Lake with{" "}
                    <Link href="/blog/laitlum-canyons-travel-guide">Laitlum Canyons</Link>{" "}
                    for a full near-Shillong day, or see our complete{" "}
                    <Link href="/blog/meghalaya-travel-guide">Meghalaya travel guide</Link>{" "}
                    for the wider state.
                  </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <section id="faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="space-y-5 my-6">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-white border border-stone-200 rounded-xl p-5">
                        <h4 className="font-bold text-stone-900 mb-2 text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                          {f.q}
                        </h4>
                        <p className="text-sm text-stone-600 leading-relaxed m-0" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["Umiam Lake", "Barapani", "Shillong", "Meghalaya", "Boating", "Off-beat"].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.toLowerCase().replace(/ /g, "-")}`} className="tag-pill">
                    #{tag}
                  </Link>
                ))}
              </div>

              <RelatedPostsGrid currentSlug="umiam-lake-travel-guide" />
            </article>

            <div className="hidden xl:block w-64 2xl:w-72 flex-shrink-0">
              <div className="sticky top-24">
                <RelatedSidebar currentSlug="umiam-lake-travel-guide" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
